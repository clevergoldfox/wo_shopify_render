/*
 * local-cart.js — offline stand-in for the Shopify Ajax Cart API.
 *
 * The theme talks to /cart.js, /cart/add, /cart/change, /cart/update and to the
 * section-rendering endpoints (?section_id= / ?sections=). None of that exists on a
 * static file server, so this intercepts those requests and answers them from a cart
 * kept in localStorage, rendering the drawer from the templates in assets/cart/.
 *
 * Must load before cart.js / product-form.js.
 */
(function () {
  'use strict';

  var STORE_KEY = 'local_cart_v1';
  var realFetch = window.fetch.bind(window);
  var templates = null;
  var emptyDrawerHTML = null;

  /* ------------------------------------------------------------ product data */

  function readJSON(id) {
    var el = document.getElementById(id);
    if (!el) return null;
    try { return JSON.parse(el.textContent); } catch (e) { return null; }
  }

  var VARIANTS = {};
  var PRODUCT = {
    id: 15186300076396,
    title: 'NAC & NAD+ Combinados',
    handle: 'nac-nad-combinados',
    vendor: 'The Standard Lab',
    image: 'assets/img/PRODUCT_SALE_w300.png'
  };

  function loadVariants() {
    var list = readJSON('product-variants-pdp') || [];
    list.forEach(function (v) {
      VARIANTS[String(v.id)] = {
        id: v.id,
        title: v.title,
        price: v.price,
        sku: v.sku,
        option1: v.option1
      };
    });
    // shipping-protection upsell product used by the cart drawer
    VARIANTS['53015724556652'] = {
      id: 53015724556652,
      title: 'Shipping Protection',
      price: 500,
      sku: 'SHIP-PROT',
      option1: 'Default'
    };
  }

  /* ------------------------------------------------------------- cart state */

  function load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.lines)) return parsed;
      }
    } catch (e) { /* fall through to a fresh cart */ }
    return { lines: [], note: '', attributes: {} };
  }

  function save(state) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* private mode */ }
  }

  var state = load();

  function money(cents) {
    return '$' + (cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function variantOf(id) {
    return VARIANTS[String(id)] || { id: Number(id), title: 'Default', price: 0, sku: '', option1: 'Default' };
  }

  function lineItem(line, index) {
    var v = variantOf(line.id);
    var qty = line.quantity;
    var url = '/en-us/products/' + PRODUCT.handle + '?variant=' + v.id;
    return {
      id: v.id,
      properties: {},
      quantity: qty,
      variant_id: v.id,
      key: v.id + ':local' + index,
      title: PRODUCT.title + ' - ' + v.title,
      price: v.price,
      original_price: v.price,
      presentment_price: v.price / 100,
      discounted_price: v.price,
      line_price: v.price * qty,
      original_line_price: v.price * qty,
      total_discount: 0,
      discounts: [],
      sku: v.sku,
      grams: 0,
      vendor: PRODUCT.vendor,
      taxable: true,
      product_id: PRODUCT.id,
      product_has_only_default_variant: false,
      gift_card: false,
      final_price: v.price,
      final_line_price: v.price * qty,
      url: url,
      featured_image: { aspect_ratio: 1, alt: PRODUCT.title, height: 1080, url: PRODUCT.image, width: 1080 },
      image: PRODUCT.image,
      handle: PRODUCT.handle,
      requires_shipping: true,
      product_type: '',
      product_title: PRODUCT.title,
      product_description: '',
      variant_title: v.title,
      variant_options: [v.title],
      options_with_values: [{ name: 'Group', value: v.title }],
      line_level_discount_allocations: [],
      line_level_total_discount: 0,
      quantity_rule: { min: 1, max: null, increment: 1 },
      has_components: false
    };
  }

  function cartJSON() {
    var items = state.lines.map(lineItem);
    var total = items.reduce(function (sum, i) { return sum + i.line_price; }, 0);
    var count = items.reduce(function (sum, i) { return sum + i.quantity; }, 0);
    return {
      token: 'local-cart-token',
      note: state.note || '',
      attributes: state.attributes || {},
      original_total_price: total,
      total_price: total,
      total_discount: 0,
      total_weight: 0,
      item_count: count,
      items: items,
      requires_shipping: true,
      currency: 'USD',
      items_subtotal_price: total,
      cart_level_discount_applications: [],
      discount_codes: []
    };
  }

  function addLine(id, quantity) {
    quantity = parseInt(quantity, 10) || 1;
    var existing = state.lines.filter(function (l) { return String(l.id) === String(id); })[0];
    if (existing) existing.quantity += quantity;
    else state.lines.push({ id: Number(id), quantity: quantity });
    save(state);
    return lineItem(state.lines.filter(function (l) { return String(l.id) === String(id); })[0], 0);
  }

  function changeLine(selector, quantity) {
    quantity = parseInt(quantity, 10);
    if (isNaN(quantity)) return;
    var idx = -1;
    if (/^\d+$/.test(String(selector)) && Number(selector) <= state.lines.length && Number(selector) > 0) {
      idx = Number(selector) - 1; // 1-based line number
    } else {
      state.lines.forEach(function (l, i) {
        if (String(l.id) === String(selector) || String(l.id) + ':local' + i === String(selector)) idx = i;
      });
    }
    if (idx < 0) return;
    if (quantity <= 0) state.lines.splice(idx, 1);
    else state.lines[idx].quantity = quantity;
    save(state);
  }

  function updateLines(updates) {
    if (Array.isArray(updates)) {
      updates.forEach(function (qty, i) {
        if (state.lines[i]) state.lines[i].quantity = parseInt(qty, 10) || 0;
      });
      state.lines = state.lines.filter(function (l) { return l.quantity > 0; });
    } else if (updates && typeof updates === 'object') {
      Object.keys(updates).forEach(function (key) {
        changeLine(key, updates[key]);
      });
    }
    save(state);
  }

  /* -------------------------------------------------------------- rendering */

  function loadTemplates() {
    if (templates) return Promise.resolve(templates);
    return Promise.all([
      realFetch('assets/cart/drawer.tpl.html').then(function (r) { return r.text(); }),
      realFetch('assets/cart/row.tpl.html').then(function (r) { return r.text(); }),
      realFetch('assets/cart/bubble.tpl.html').then(function (r) { return r.text(); })
    ]).then(function (parts) {
      templates = { drawer: parts[0], row: parts[1], bubble: parts[2] };
      return templates;
    });
  }

  function renderRows(cart) {
    return cart.items.map(function (item, i) {
      return templates.row
        .replace(/\{\{VARIANT_ID\}\}/g, String(item.variant_id))
        .replace(/\{\{INDEX\}\}/g, String(i + 1))
        .replace(/\{\{VARIANT_TITLE\}\}/g, esc(item.variant_title))
        .replace(/\{\{LINE_PRICE\}\}/g, money(item.line_price))
        .replace(/\{\{QUANTITY\}\}/g, String(item.quantity));
    }).join('\n');
  }

  function renderDrawer(cart) {
    if (cart.item_count === 0 && emptyDrawerHTML) return emptyDrawerHTML;
    return templates.drawer
      .replace('<!--CART_ROWS-->', renderRows(cart))
      .replace(/\{\{ITEM_COUNT\}\}/g, String(cart.item_count))
      .replace(/\{\{ITEM_WORD\}\}/g, cart.item_count === 1 ? 'Item' : 'Items')
      .replace(/\{\{TOTAL\}\}/g, money(cart.total_price))
      .replace(/\{\{TOTAL_CENTS\}\}/g, String(cart.total_price));
  }

  function renderBubble(cart) {
    var badge = cart.item_count > 0
      ? '<div class="cart-count-bubble"><span aria-hidden="true">' + cart.item_count + '</span>' +
        '<span class="visually-hidden">' + cart.item_count + ' items</span></div>'
      : '';
    return templates.bubble.replace('<!--CART_BUBBLE-->', badge);
  }

  function sectionsFor(names, cart) {
    var out = {};
    (names || []).forEach(function (raw) {
      var name = String(raw).trim();
      if (!name) return;
      if (name === 'cart-drawer' || name === 'CartDrawer') out[name] = renderDrawer(cart);
      else if (name === 'cart-icon-bubble') out[name] = renderBubble(cart);
      else out[name] = '';
    });
    return out;
  }

  /* ------------------------------------------------------- request handling */

  function parseBody(body) {
    if (!body) return {};
    if (typeof body === 'string') {
      var trimmed = body.trim();
      if (trimmed.charAt(0) === '{' || trimmed.charAt(0) === '[') {
        try { return JSON.parse(trimmed); } catch (e) { /* not JSON after all */ }
      }
      return queryToObject(trimmed);
    }
    if (typeof FormData !== 'undefined' && body instanceof FormData) {
      var obj = {};
      body.forEach(function (value, key) {
        var m = key.match(/^updates\[(.*)\]$/);
        if (m) {
          obj.updates = obj.updates || {};
          if (m[1] === '') { obj.updates = Array.isArray(obj.updates) ? obj.updates : []; obj.updates.push(value); }
          else obj.updates[m[1]] = value;
        } else if (key === 'sections') {
          obj.sections = String(value).split(',');
        } else {
          obj[key] = value;
        }
      });
      return obj;
    }
    if (typeof URLSearchParams !== 'undefined' && body instanceof URLSearchParams) {
      return queryToObject(body.toString());
    }
    return {};
  }

  function queryToObject(qs) {
    var obj = {};
    qs.split('&').forEach(function (pair) {
      if (!pair) return;
      var bits = pair.split('=');
      var key = decodeURIComponent(bits[0].replace(/\+/g, ' '));
      var value = decodeURIComponent((bits[1] || '').replace(/\+/g, ' '));
      var m = key.match(/^updates\[(.*)\]$/);
      if (m) {
        obj.updates = obj.updates || {};
        obj.updates[m[1]] = value;
      } else if (key === 'sections') {
        obj.sections = value.split(',');
      } else {
        obj[key] = value;
      }
    });
    return obj;
  }

  function jsonResponse(payload) {
    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  function htmlResponse(html) {
    return new Response(html, { status: 200, headers: { 'Content-Type': 'text/html' } });
  }

  // Which of our fake endpoints, if any, does this URL hit?
  function classify(url) {
    var path = url.split('#')[0];
    var query = '';
    var q = path.indexOf('?');
    if (q >= 0) { query = path.slice(q + 1); path = path.slice(0, q); }

    if (/\/cart\.js$/.test(path)) return { kind: 'cart' };
    if (/\/cart\/add(\.js)?$/.test(path)) return { kind: 'add' };
    if (/\/cart\/change(\.js)?$/.test(path)) return { kind: 'change' };
    if (/\/cart\/update(\.js)?$/.test(path)) return { kind: 'update' };
    if (/\/cart\/clear(\.js)?$/.test(path)) return { kind: 'clear' };

    var params = queryToObject(query);
    if (params.section_id) return { kind: 'section', names: [params.section_id] };
    if (params.sections) return { kind: 'sections', names: [].concat(params.sections) };
    return null;
  }

  // The theme refreshes its "Cart Reserved for mm:ss" bar off form submits and click
  // handlers we bypass, so nudge it whenever the cart actually changes.
  function refreshCartTimer() {
    setTimeout(function () {
      if (typeof window.cartTimerBar === 'function') window.cartTimerBar(cartJSON());
    }, 200);
  }

  function handle(route, method, body) {
    var data = parseBody(body);
    var payload;

    switch (route.kind) {
      case 'cart':
        return jsonResponse(cartJSON());

      case 'add':
        if (data.items && Array.isArray(data.items)) {
          data.items.forEach(function (i) { addLine(i.id, i.quantity); });
          payload = { items: data.items.map(function (i) { return lineItem({ id: i.id, quantity: i.quantity }, 0); }) };
        } else {
          payload = addLine(data.id, data.quantity || 1);
        }
        payload.item_count = cartJSON().item_count;
        if (data.sections) payload.sections = sectionsFor([].concat(data.sections), cartJSON());
        refreshCartTimer();
        return jsonResponse(payload);

      case 'change':
        changeLine(data.line != null ? data.line : data.id, data.quantity);
        payload = cartJSON();
        payload.items_removed = [];
        if (data.sections) payload.sections = sectionsFor([].concat(data.sections), payload);
        refreshCartTimer();
        return jsonResponse(payload);

      case 'update':
        if (data.updates) updateLines(data.updates);
        if (data.note != null) { state.note = data.note; save(state); }
        payload = cartJSON();
        if (data.sections) payload.sections = sectionsFor([].concat(data.sections), payload);
        refreshCartTimer();
        return jsonResponse(payload);

      case 'clear':
        state.lines = [];
        save(state);
        return jsonResponse(cartJSON());

      case 'section':
        return htmlResponse(sectionsFor(route.names, cartJSON())[route.names[0]] || '');

      case 'sections':
        return jsonResponse(sectionsFor(route.names, cartJSON()));
    }
    return jsonResponse({});
  }

  /* ------------------------------------------------------------- interceptors */

  window.fetch = function (input, init) {
    var url = typeof input === 'string' ? input : (input && input.url) || '';
    var route = classify(url);
    if (!route) return realFetch(input, init);

    var method = (init && init.method) || (input && input.method) || 'GET';
    var body = init && init.body;

    return loadTemplates().then(function () {
      if (!body && input && typeof input.text === 'function' && method !== 'GET') {
        return input.clone().text().then(function (t) { return handle(route, method, t); });
      }
      return handle(route, method, body);
    });
  };

  var RealXHR = window.XMLHttpRequest;
  function LocalXHR() {
    var xhr = new RealXHR();
    var route = null;
    var open = xhr.open;
    var send = xhr.send;

    xhr.open = function (method, url) {
      route = classify(String(url));
      this._localMethod = method;
      if (route) { this._localUrl = url; return; }
      return open.apply(xhr, arguments);
    };

    xhr.send = function (body) {
      if (!route) return send.apply(xhr, arguments);
      var self = this;
      loadTemplates()
        .then(function () { return handle(route, self._localMethod, body); })
        .then(function (res) { return res.text(); })
        .then(function (text) {
          Object.defineProperty(self, 'readyState', { value: 4, configurable: true });
          Object.defineProperty(self, 'status', { value: 200, configurable: true });
          Object.defineProperty(self, 'responseText', { value: text, configurable: true });
          Object.defineProperty(self, 'response', { value: text, configurable: true });
          if (typeof self.onreadystatechange === 'function') self.onreadystatechange();
          if (typeof self.onload === 'function') self.onload();
          self.dispatchEvent(new Event('readystatechange'));
          self.dispatchEvent(new Event('load'));
          self.dispatchEvent(new Event('loadend'));
        });
    };
    return xhr;
  }
  LocalXHR.prototype = RealXHR.prototype;
  ['UNSENT', 'OPENED', 'HEADERS_RECEIVED', 'LOADING', 'DONE'].forEach(function (k, i) { LocalXHR[k] = i; });
  window.XMLHttpRequest = LocalXHR;

  /* ------------------------------------------------------------------ boot */

  function boot() {
    loadVariants();
    var drawer = document.querySelector('#CartDrawer');
    if (drawer) {
      emptyDrawerHTML = '<section id="shopify-section-cart-drawer" class="shopify-section">' +
        drawer.outerHTML + '</section>';
    }
    // The theme's main button adds the line then sends the browser to /checkout, which
    // doesn't exist here. Add the line and open the drawer instead.
    window.skipToCheckout = function (event) {
      if (event) event.preventDefault();
      var form = document.querySelector('.shop-add-to-cart-wrapper form[action*="/cart/add"]') ||
        (typeof window.Elixir_GetProductForm === 'function' ? window.Elixir_GetProductForm() : null) ||
        document.querySelector('form[action*="/cart/add"]');
      if (!form) return;
      var fd = new FormData(form);
      fd.append('sections', 'cart-drawer,cart-icon-bubble');
      window.fetch('/cart/add.js', { method: 'POST', body: fd })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          var drawer = document.querySelector('cart-drawer');
          if (drawer && data.sections) drawer.renderContents(data);
          else if (drawer) drawer.open();
        });
    };

    // Checkout has nowhere to go on a static copy — keep the click on the page.
    document.addEventListener('click', function (event) {
      var checkout = event.target.closest && event.target.closest('#CartDrawer-Checkout, [name="checkout"]');
      if (checkout) {
        event.preventDefault();
        event.stopPropagation();
        window.alert('Local copy: checkout is not available.');
      }
    }, true);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
