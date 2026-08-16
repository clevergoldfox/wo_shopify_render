/* ==========================================================================
   The Standard Lab — NAC & NAD+ product landing page
   Shared behaviour: reveal-on-scroll, gallery, accordions, tabs, counters,
   timeline fill, countdown. Idempotent — safe to re-run after section reload
   in the Shopify theme editor.
   ========================================================================== */
(function () {
  'use strict';

  var INIT = 'tslInit';
  function once(el) {
    if (!el || el.dataset[INIT] === 'true') return false;
    el.dataset[INIT] = 'true';
    return true;
  }

  /* ---------- reveal on scroll ---------- */
  function initReveal(root) {
    var els = root.querySelectorAll('.tsl-reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { if (once(el)) io.observe(el); });
  }

  /* ---------- generic toggle groups (FAQ, accordions, collapsibles) ---------- */
  function initToggles(root) {
    root.querySelectorAll('[data-tsl-toggle]').forEach(function (btn) {
      if (!once(btn)) return;
      btn.addEventListener('click', function () {
        var item = btn.closest('[data-tsl-toggle-item]');
        if (!item) return;
        var group = item.parentElement;
        var single = group && group.dataset.tslToggleSingle === 'true';
        var isOpen = item.classList.contains('is-open');
        if (single) {
          group.querySelectorAll('.is-open').forEach(function (o) {
            o.classList.remove('is-open');
            var b = o.querySelector('[data-tsl-toggle]');
            if (b) b.setAttribute('aria-expanded', 'false');
          });
        }
        item.classList.toggle('is-open', !isOpen);
        btn.setAttribute('aria-expanded', String(!isOpen));
      });
    });
  }

  /* ---------- tabs ---------- */
  function initTabs(root) {
    root.querySelectorAll('[data-tsl-tabs]').forEach(function (wrap) {
      if (!once(wrap)) return;
      var btns = wrap.querySelectorAll('[data-tsl-tab]');
      var panels = wrap.querySelectorAll('[data-tsl-panel]');
      btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var key = btn.dataset.tslTab;
          btns.forEach(function (b) {
            var on = b === btn;
            b.classList.toggle('is-active', on);
            b.setAttribute('aria-selected', String(on));
          });
          panels.forEach(function (p) {
            p.classList.toggle('is-active', p.dataset.tslPanel === key);
          });
        });
      });
    });
  }

  /* ---------- product gallery ---------- */
  function initGallery(root) {
    root.querySelectorAll('[data-tsl-gallery]').forEach(function (gal) {
      if (!once(gal)) return;
      var slides = Array.prototype.slice.call(gal.querySelectorAll('.tsl-gallery__slide'));
      var thumbs = Array.prototype.slice.call(gal.querySelectorAll('.tsl-gallery__thumb'));
      if (!slides.length) return;
      var index = 0;

      function show(i) {
        index = (i + slides.length) % slides.length;
        slides.forEach(function (s, n) { s.classList.toggle('is-active', n === index); });
        thumbs.forEach(function (t, n) {
          t.classList.toggle('is-active', n === index);
          t.setAttribute('aria-current', String(n === index));
        });
      }

      thumbs.forEach(function (t, n) { t.addEventListener('click', function () { show(n); }); });
      var prev = gal.querySelector('[data-tsl-gallery-prev]');
      var next = gal.querySelector('[data-tsl-gallery-next]');
      if (prev) prev.addEventListener('click', function () { show(index - 1); });
      if (next) next.addEventListener('click', function () { show(index + 1); });

      // swipe
      var x0 = null;
      var main = gal.querySelector('.tsl-gallery__main');
      if (main) {
        main.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
        main.addEventListener('touchend', function (e) {
          if (x0 === null) return;
          var dx = e.changedTouches[0].clientX - x0;
          if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
          x0 = null;
        }, { passive: true });
      }
      show(0);
    });
  }

  /* ---------- variant selector -> price + form ---------- */
  function initVariants(root) {
    root.querySelectorAll('[data-tsl-variants]').forEach(function (wrap) {
      if (!once(wrap)) return;
      var section = wrap.closest('[data-tsl-section]') || document;
      var idInput = section.querySelector('[data-tsl-variant-id]');
      var priceEl = section.querySelector('[data-tsl-price]');
      var compareEl = section.querySelector('[data-tsl-compare]');

      wrap.addEventListener('change', function (e) {
        var radio = e.target.closest('input[type="radio"]');
        if (!radio) return;
        if (idInput) idInput.value = radio.value;
        if (priceEl && radio.dataset.price) priceEl.textContent = radio.dataset.price;
        if (compareEl) {
          if (radio.dataset.compare) {
            compareEl.textContent = radio.dataset.compare;
            compareEl.hidden = false;
          } else {
            compareEl.hidden = true;
          }
        }
      });
    });
  }

  /* ---------- animated stat counters ---------- */
  function initCounters(root) {
    var els = root.querySelectorAll('[data-tsl-count]');
    if (!els.length) return;
    function run(el) {
      var target = parseFloat(el.dataset.tslCount) || 0;
      var suffix = el.dataset.tslCountSuffix || '';
      var dur = 1400, t0 = null;
      function step(ts) {
        if (t0 === null) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (!('IntersectionObserver' in window)) {
      els.forEach(run);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    els.forEach(function (el) { if (once(el)) io.observe(el); });
  }

  /* ---------- roadmap fill line ---------- */
  function initRoadmap(root) {
    root.querySelectorAll('[data-tsl-roadmap]').forEach(function (tl) {
      if (!once(tl)) return;
      var fill = tl.querySelector('.tsl-roadmap__fill');
      if (!fill) return;
      function update() {
        var r = tl.getBoundingClientRect();
        var vh = window.innerHeight || document.documentElement.clientHeight;
        var start = vh * 0.85;
        var pct = (start - r.top) / (r.height || 1);
        fill.style.height = Math.max(0, Math.min(1, pct)) * 100 + '%';
      }
      window.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      update();
    });
  }

  /* ---------- countdown ---------- */
  function initCountdown(root) {
    root.querySelectorAll('[data-tsl-countdown]').forEach(function (el) {
      if (!once(el)) return;
      var hours = parseInt(el.dataset.tslCountdown, 10) || 24;
      var key = 'tsl-countdown-' + (el.id || 'default');
      var end = parseInt(sessionStorage.getItem(key) || '0', 10);
      if (!end || end < Date.now()) {
        end = Date.now() + hours * 3600 * 1000;
        try { sessionStorage.setItem(key, String(end)); } catch (err) { /* private mode */ }
      }
      var out = {
        d: el.querySelector('[data-cd="days"]'),
        h: el.querySelector('[data-cd="hours"]'),
        m: el.querySelector('[data-cd="mins"]'),
        s: el.querySelector('[data-cd="secs"]')
      };
      function pad(n) { return n < 10 ? '0' + n : String(n); }
      function tick() {
        var left = Math.max(0, end - Date.now());
        var sec = Math.floor(left / 1000);
        if (out.d) out.d.textContent = pad(Math.floor(sec / 86400));
        if (out.h) out.h.textContent = pad(Math.floor(sec / 3600) % 24);
        if (out.m) out.m.textContent = pad(Math.floor(sec / 60) % 60);
        if (out.s) out.s.textContent = pad(sec % 60);
      }
      tick();
      setInterval(tick, 1000);
    });
  }

  /* ---------- scroll-to-buybox links ---------- */
  function initScrollTo(root) {
    root.querySelectorAll('[data-tsl-scroll-to-buy]').forEach(function (a) {
      if (!once(a)) return;
      a.addEventListener('click', function (e) {
        var target = document.getElementById('tsl-buybox');
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });
  }

  function initAll(root) {
    root = root || document;
    initReveal(root);
    initToggles(root);
    initTabs(root);
    initGallery(root);
    initVariants(root);
    initCounters(root);
    initRoadmap(root);
    initCountdown(root);
    initScrollTo(root);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { initAll(document); });
  } else {
    initAll(document);
  }

  // Shopify theme editor: re-init when a section is re-rendered
  document.addEventListener('shopify:section:load', function (e) { initAll(e.target); });

  window.TSLPage = { init: initAll };
})();
