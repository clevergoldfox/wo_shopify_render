/**
 * RunAds Smart Pixel v1.2.0
 * https://runads.ai
 *
 * v1.2.1 — Lightweight conversion-tracking pixel for Google Ads optimization.
 * Captures click data (gclid), auto-detects conversions, and feeds
 * data back to RunAds to optimize campaigns.
 *
 * Usage:
 *   <script src="https://runads.ai/pixel/runads-pixel.js" data-id="RA-abc123" async></script>
 *
 * Manual tracking API:
 *   runads('track', 'purchase', { value: 49.99, currency: 'USD' });
 *   runads('track', 'lead');
 *   runads('track', 'signup', { value: 0 });
 *
 * @license MIT
 */
(function () {
  'use strict';

  // =========================================================================
  // GUARD: Do Not Track / already loaded
  // =========================================================================
  try {
    if (
      navigator.doNotTrack === '1' ||
      window.doNotTrack === '1' ||
      navigator.globalPrivacyControl === true
    ) {
      return; // Respect user privacy preferences
    }
  } catch (_) {
    /* ignore */
  }

  if (window.__runads_loaded) return;
  window.__runads_loaded = true;

  // =========================================================================
  // CONFIG
  // =========================================================================
  var RECEIVER_URL = 'https://wnruqraqhlyxgxmyciuf.supabase.co/functions/v1/pixel-receiver';
  var COOKIE_GCLID = '_ra_gclid';
  var COOKIE_FBCLID = '_ra_fbclid';
  var COOKIE_UTM = '_ra_utm';
  var COOKIE_SID = '_ra_sid';
  var COOKIE_VID = '_ra_vid';
  var SESSION_MINUTES = 30;
  var GCLID_DAYS = 90;
  var VISITOR_DAYS = 730; // ~2 years
  var TIME_PING_SECONDS = 15;
  var SCROLL_THRESHOLDS = [25, 50, 75, 100];

  // Thank-you page patterns that indicate a conversion
  var CONVERSION_URL_PATTERNS = [
    '/thank-you',
    '/thanks',
    '/order-confirmation',
    '/confirmation',
    '/success',
    '/purchase-complete',
    '/checkout/thank_you',
    '/order/confirm',
    '/checkouts/' // Shopify: /checkouts/*/thank_you (matched broadly, refined below)
  ];

  // =========================================================================
  // UTILITIES
  // =========================================================================

  /**
   * Get the script element that loaded this pixel.
   */
  function getScript() {
    var scripts = document.querySelectorAll('script[data-id^="RA-"]');
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].src && scripts[i].src.indexOf('runads-pixel') !== -1) {
        return scripts[i];
      }
    }
    // Fallback: any script with data-id starting with RA-
    return scripts[0] || null;
  }

  /**
   * Read a URL query parameter.
   */
  function getParam(name) {
    try {
      var match = location.search.match(
        new RegExp('[?&]' + name + '=([^&#]*)')
      );
      return match ? decodeURIComponent(match[1]) : '';
    } catch (_) {
      return '';
    }
  }

  /**
   * Get the root domain for cookie setting (e.g., ".example.com").
   */
  function getRootDomain() {
    try {
      var parts = location.hostname.split('.');
      // Handle localhost / IP
      if (parts.length <= 1 || /^\d+\.\d+\.\d+\.\d+$/.test(location.hostname)) {
        return location.hostname;
      }
      // Try setting a test cookie on progressively broader domains
      for (var i = parts.length - 2; i >= 0; i--) {
        var domain = '.' + parts.slice(i).join('.');
        document.cookie = '_ra_test=1;domain=' + domain + ';path=/;max-age=1';
        if (document.cookie.indexOf('_ra_test=1') !== -1) {
          // Clean up test cookie
          document.cookie = '_ra_test=;domain=' + domain + ';path=/;max-age=0';
          return domain;
        }
      }
    } catch (_) {
      /* ignore */
    }
    return location.hostname;
  }

  /**
   * Set a cookie with the given name, value, and expiry in days.
   */
  function setCookie(name, value, days) {
    try {
      var d = new Date();
      d.setTime(d.getTime() + days * 86400000);
      var domain = getRootDomain();
      document.cookie =
        name +
        '=' +
        encodeURIComponent(value) +
        ';expires=' +
        d.toUTCString() +
        ';path=/;domain=' +
        domain +
        ';SameSite=Lax';
    } catch (_) {
      /* ignore */
    }
  }

  /**
   * Read a cookie value by name.
   */
  function getCookie(name) {
    try {
      var match = document.cookie.match(
        new RegExp('(?:^|;\\s*)' + name + '=([^;]*)')
      );
      return match ? decodeURIComponent(match[1]) : '';
    } catch (_) {
      return '';
    }
  }

  /**
   * Generate a random ID string (hex).
   */
  function randomId() {
    try {
      var arr = new Uint8Array(16);
      crypto.getRandomValues(arr);
      var hex = '';
      for (var i = 0; i < arr.length; i++) {
        hex += ('0' + arr[i].toString(16)).slice(-2);
      }
      return hex;
    } catch (_) {
      // Fallback for older browsers
      return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15) +
        Date.now().toString(36)
      );
    }
  }

  /**
   * Send data to the receiver endpoint using sendBeacon with fetch fallback.
   */
  function send(payload) {
    try {
      var data = JSON.stringify(payload);
      var sent = false;

      // Prefer sendBeacon — non-blocking, survives page unload
      if (navigator.sendBeacon) {
        try {
          sent = navigator.sendBeacon(
            RECEIVER_URL,
            new Blob([data], { type: 'application/json' })
          );
        } catch (_) {
          sent = false;
        }
      }

      // Fallback to fetch (keepalive to survive page unload)
      if (!sent && typeof fetch === 'function') {
        fetch(RECEIVER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: data,
          keepalive: true,
          mode: 'cors'
        }).catch(function () {
          /* swallow — never break the host site */
        });
      }
    } catch (_) {
      /* swallow */
    }
  }

  // =========================================================================
  // DEVICE / BROWSER DETECTION
  // =========================================================================

  function getDeviceType() {
    try {
      var ua = navigator.userAgent || '';
      if (/Mobi|Android.*Mobile|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
        return 'mobile';
      }
      if (/iPad|Android(?!.*Mobile)|Tablet/i.test(ua)) {
        return 'tablet';
      }
    } catch (_) {
      /* ignore */
    }
    return 'desktop';
  }

  function getBrowser() {
    try {
      var ua = navigator.userAgent || '';
      if (ua.indexOf('Firefox') > -1) return 'Firefox';
      if (ua.indexOf('SamsungBrowser') > -1) return 'Samsung Internet';
      if (ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1) return 'Opera';
      if (ua.indexOf('Edg') > -1) return 'Edge';
      if (ua.indexOf('Chrome') > -1) return 'Chrome';
      if (ua.indexOf('Safari') > -1) return 'Safari';
      if (ua.indexOf('Trident') > -1 || ua.indexOf('MSIE') > -1) return 'IE';
    } catch (_) {
      /* ignore */
    }
    return 'Unknown';
  }

  function getOS() {
    try {
      var ua = navigator.userAgent || '';
      if (ua.indexOf('Windows') > -1) return 'Windows';
      if (ua.indexOf('Mac OS') > -1) return 'macOS';
      if (ua.indexOf('Linux') > -1) return 'Linux';
      if (ua.indexOf('Android') > -1) return 'Android';
      if (/iPhone|iPad|iPod/.test(ua)) return 'iOS';
      if (ua.indexOf('CrOS') > -1) return 'ChromeOS';
    } catch (_) {
      /* ignore */
    }
    return 'Unknown';
  }

  function getScreenSize() {
    try {
      return screen.width + 'x' + screen.height;
    } catch (_) {
      return '';
    }
  }

  // =========================================================================
  // INITIALIZE TRACKING DATA
  // =========================================================================

  var script = getScript();
  if (!script) return; // No pixel tag found — bail silently

  var pixelId = script.getAttribute('data-id');
  if (!pixelId) return;

  // --- GCLID ---
  var gclid = getParam('gclid');
  if (gclid) {
    setCookie(COOKIE_GCLID, gclid, GCLID_DAYS);
  } else {
    gclid = getCookie(COOKIE_GCLID);
  }

  // --- FBCLID (Meta click id) ---
  var fbclid = getParam('fbclid');
  if (fbclid) {
    setCookie(COOKIE_FBCLID, fbclid, GCLID_DAYS);
  } else {
    fbclid = getCookie(COOKIE_FBCLID);
  }
  // Meta's own browser/click cookies, set by the FB pixel if present.
  var fbp = getCookie('_fbp');
  var fbc = getCookie('_fbc');
  // Synthesize _fbc format when Meta's pixel isn't installed but we saw the click.
  if (!fbc && fbclid) {
    fbc = 'fb.1.' + Date.now() + '.' + fbclid;
  }

  // --- UTM PARAMS ---
  var utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  var utmData = {};
  var hasNewUtm = false;
  for (var u = 0; u < utmKeys.length; u++) {
    var val = getParam(utmKeys[u]);
    if (val) {
      utmData[utmKeys[u]] = val;
      hasNewUtm = true;
    }
  }
  if (hasNewUtm) {
    setCookie(COOKIE_UTM, JSON.stringify(utmData), GCLID_DAYS);
  } else {
    try {
      var stored = getCookie(COOKIE_UTM);
      if (stored) utmData = JSON.parse(stored);
    } catch (_) {
      utmData = {};
    }
  }

  // --- SESSION ID (30-min rolling) ---
  var sessionId = getCookie(COOKIE_SID);
  if (!sessionId) {
    sessionId = randomId();
  }
  // Re-set to extend the rolling window
  setCookie(COOKIE_SID, sessionId, SESSION_MINUTES / 1440);

  // --- VISITOR ID (2-year) ---
  var visitorId = getCookie(COOKIE_VID);
  if (!visitorId) {
    visitorId = randomId();
    setCookie(COOKIE_VID, visitorId, VISITOR_DAYS);
  }

  // =========================================================================
  // BUILD COMMON PAYLOAD
  // =========================================================================

  function basePayload() {
    return {
      pixel_id: pixelId,
      gclid: gclid || null,
      fbclid: fbclid || null,
      fbp: fbp || null,
      fbc: fbc || null,
      session_id: sessionId,
      visitor_id: visitorId,
      page_url: location.href,
      page_title: document.title || '',
      referrer: document.referrer || '',
      utm_source: utmData.utm_source || '',
      utm_medium: utmData.utm_medium || '',
      utm_campaign: utmData.utm_campaign || '',
      utm_content: utmData.utm_content || '',
      utm_term: utmData.utm_term || '',
      device_type: getDeviceType(),
      browser: getBrowser(),
      os: getOS(),
      screen_size: getScreenSize(),
      timestamp: new Date().toISOString()
    };
  }

  // =========================================================================
  // PAGEVIEW
  // =========================================================================

  function sendPageview() {
    var payload = basePayload();
    payload.event_type = 'pageview';
    send(payload);
  }

  // =========================================================================
  // SCROLL DEPTH TRACKING
  // =========================================================================

  function trackScroll() {
    var firedThresholds = {};

    function onScroll() {
      try {
        var docHeight = Math.max(
          document.body.scrollHeight || 0,
          document.documentElement.scrollHeight || 0
        );
        var winHeight = window.innerHeight || document.documentElement.clientHeight;
        var scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0;
        var scrollPercent = Math.round(((scrollTop + winHeight) / docHeight) * 100);

        for (var t = 0; t < SCROLL_THRESHOLDS.length; t++) {
          var threshold = SCROLL_THRESHOLDS[t];
          if (scrollPercent >= threshold && !firedThresholds[threshold]) {
            firedThresholds[threshold] = true;
            var payload = basePayload();
            payload.event_type = 'scroll';
            payload.scroll_depth = threshold;
            send(payload);
          }
        }
      } catch (_) {
        /* swallow */
      }
    }

    // Throttle scroll listener (~200ms)
    var scrollTimer = null;
    window.addEventListener(
      'scroll',
      function () {
        if (scrollTimer) return;
        scrollTimer = setTimeout(function () {
          scrollTimer = null;
          onScroll();
        }, 200);
      },
      { passive: true }
    );
  }

  // =========================================================================
  // TIME ON PAGE TRACKING
  // =========================================================================

  function trackTimeOnPage() {
    var seconds = 0;
    var interval = setInterval(function () {
      try {
        // Only count when tab is visible
        if (document.hidden) return;
        seconds += TIME_PING_SECONDS;
        var payload = basePayload();
        payload.event_type = 'time_on_page';
        payload.time_on_page = seconds;
        send(payload);
      } catch (_) {
        /* swallow */
      }
    }, TIME_PING_SECONDS * 1000);

    // Clean up on unload
    window.addEventListener('beforeunload', function () {
      clearInterval(interval);
    });
  }

  // =========================================================================
  // CONVERSION VALUE DETECTION
  // =========================================================================

  /**
   * Attempt to read a conversion value from multiple sources.
   * Returns { value: number, currency: string }.
   */
  function detectConversionValue() {
    var value = 0;
    var currency = 'USD';

    try {
      // 1. data-runads-value attribute on body or any div
      var elWithValue =
        document.querySelector('[data-runads-value]') ||
        document.querySelector('body[data-runads-value]');
      if (elWithValue) {
        value = parseFloat(elWithValue.getAttribute('data-runads-value')) || 0;
        var cur = elWithValue.getAttribute('data-runads-currency');
        if (cur) currency = cur;
        return { value: value, currency: currency };
      }

      // 2. URL params: amount, value, total
      var urlValue =
        getParam('amount') || getParam('value') || getParam('total');
      if (urlValue) {
        value = parseFloat(urlValue) || 0;
        var urlCur = getParam('currency');
        if (urlCur) currency = urlCur;
        return { value: value, currency: currency };
      }

      // 3. Meta tags
      var metaValue = document.querySelector('meta[name="runads:value"]');
      if (metaValue) {
        value = parseFloat(metaValue.getAttribute('content')) || 0;
        var metaCur = document.querySelector('meta[name="runads:currency"]');
        if (metaCur) currency = metaCur.getAttribute('content') || currency;
        return { value: value, currency: currency };
      }
    } catch (_) {
      /* swallow */
    }

    return { value: value, currency: currency };
  }

  // =========================================================================
  // CONVERSION DETECTION & SENDING
  // =========================================================================

  /**
   * Send a conversion event.
   */
  function sendConversion(eventName, extraData) {
    var cv = detectConversionValue();
    var payload = basePayload();
    payload.event_type = 'conversion';
    payload.event_name = eventName || 'conversion';
    payload.conversion_value = (extraData && extraData.value != null) ? extraData.value : cv.value;
    payload.conversion_currency =
      (extraData && extraData.currency) ? extraData.currency : cv.currency;
    if (extraData && extraData.metadata) {
      payload.metadata = extraData.metadata;
    }
    send(payload);
  }

  /**
   * Check if current URL matches a thank-you/conversion pattern.
   */
  function checkUrlConversion() {
    try {
      var path = location.pathname.toLowerCase();

      // Shopify checkout completion
      if (/\/checkouts\/[^/]+\/thank_you/.test(path)) {
        sendConversion('shopify_purchase');
        return;
      }

      // WooCommerce order-received page: /checkout*/order-received/<id>/
      // Fires a real purchase conversion with the order total scraped from
      // the Woo order-overview block, deduped per order so refreshes and
      // back-buttons don't double count. (Sites running the RunAds Woo
      // plugin fire richer server-side data instead — the plugin sets
      // window.__runadsWooPlugin so we stand down.)
      var wooMatch = path.match(/\/order-received\/(\d+)/);
      if (wooMatch && !window.__runadsWooPlugin) {
        var wooOrderId = wooMatch[1];
        var guardKey = '_ra_wc_' + wooOrderId;
        try {
          if (localStorage.getItem(guardKey)) return;
        } catch (_) { /* storage blocked: still fire once per pageload */ }
        var wooValue = 0;
        var wooCurrency = 'USD';
        try {
          var totalEl = document.querySelector(
            '.woocommerce-order-overview__total .woocommerce-Price-amount, ' +
            '.woocommerce-order-overview__total .amount, ' +
            '.order_details .total .amount'
          );
          if (totalEl) {
            var txt = totalEl.textContent || '';
            wooValue = parseFloat(txt.replace(/[^0-9.]/g, '')) || 0;
            if (txt.indexOf('\u20ac') !== -1) wooCurrency = 'EUR';
            else if (txt.indexOf('\u00a3') !== -1) wooCurrency = 'GBP';
          }
        } catch (_) { /* value stays 0 — order still counts */ }
        sendConversion('woo_purchase', {
          value: wooValue,
          currency: wooCurrency,
          metadata: { wc_order_id: wooOrderId, source: 'woo_url_auto' }
        });
        try { localStorage.setItem(guardKey, '1'); } catch (_) {}
        return;
      }

      // Generic thank-you patterns
      var patterns = [
        '/thank-you',
        '/thanks',
        '/order-confirmation',
        '/confirmation',
        '/success',
        '/purchase-complete',
        '/checkout/thank_you',
        '/order/confirm'
      ];
      for (var i = 0; i < patterns.length; i++) {
        if (path.indexOf(patterns[i]) !== -1) {
          sendConversion('page_conversion');
          return;
        }
      }
    } catch (_) {
      /* swallow */
    }
  }

  /**
   * Check for custom data-runads-event attributes.
   */
  function checkCustomEventAttribute() {
    try {
      var el =
        document.querySelector('[data-runads-event]') ||
        document.querySelector('body[data-runads-event]');
      if (el) {
        var eventName = el.getAttribute('data-runads-event');
        if (eventName) {
          sendConversion(eventName);
        }
      }
    } catch (_) {
      /* swallow */
    }
  }

  /**
   * Listen for form submissions across the page.
   */
  function trackFormSubmissions() {
    try {
      document.addEventListener(
        'submit',
        function (e) {
          try {
            var form = e.target;
            if (!form || form.tagName !== 'FORM') return;

            var payload = basePayload();
            payload.event_type = 'form_submit';
            payload.event_name = 'form_submit';
            payload.metadata = {
              form_action: form.action || '',
              form_method: form.method || '',
              form_id: form.id || '',
              form_name: form.name || ''
            };
            send(payload);
          } catch (_) {
            /* swallow */
          }
        },
        true // capture phase to catch early
      );
    } catch (_) {
      /* swallow */
    }
  }

  // =========================================================================
  // PUBLIC API: runads('track', eventName, data)
  // =========================================================================

  /**
   * The global runads() function exposes manual event tracking.
   *
   * Usage:
   *   runads('track', 'purchase', { value: 49.99, currency: 'USD' });
   *   runads('track', 'lead');
   */
  function runadsAPI() {
    var args = Array.prototype.slice.call(arguments);
    try {
      var command = args[0];

      if (command === 'event') {
        // Behavioral (non-conversion) events: add_to_cart, begin_checkout.
        // Never counted as revenue — the receiver stores them under their
        // own event_type so attribution and conversion totals stay clean.
        var bevName = args[1] || 'custom';
        var bevData = args[2] || {};
        var bevPayload = basePayload();
        bevPayload.event_type = bevName;
        bevPayload.event_name = bevName;
        if (bevData && typeof bevData === 'object') bevPayload.metadata = bevData;
        send(bevPayload);
        return;
      }

      if (command === 'track') {
        var eventName = args[1] || 'custom';
        var data = args[2] || {};
        sendConversion(eventName, {
          value: data.value != null ? data.value : undefined,
          currency: data.currency || undefined,
          metadata: data
        });
      }
    } catch (_) {
      /* swallow */
    }
  }

  // Process any queued calls that arrived before the script loaded
  var existingQueue = window.runads && window.runads.q ? window.runads.q : [];
  window.runads = runadsAPI;
  window.runads.q = []; // Keep the queue property for compatibility

  // Replay queued calls
  for (var q = 0; q < existingQueue.length; q++) {
    try {
      runadsAPI.apply(null, existingQueue[q]);
    } catch (_) {
      /* swallow */
    }
  }

  // =========================================================================
  // INIT — Fire everything
  // =========================================================================

  function init() {
    try {
      sendPageview();
      trackScroll();
      trackTimeOnPage();
      checkUrlConversion();
      checkCustomEventAttribute();
      trackFormSubmissions();
    } catch (_) {
      /* swallow — never break the host site */
    }
  }

  // Run when DOM is ready (or immediately if already loaded)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
