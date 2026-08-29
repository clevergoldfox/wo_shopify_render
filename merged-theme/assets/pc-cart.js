/* Rewires the captured Checkout Champ buy box to Shopify's cart.
 *
 * The original page posted its order to Checkout Champ through their index.js, which
 * needs a funnel session we do not have, so that script is not carried across. This
 * takes over the same markup:
 *
 *   .khOneOffer .khOfferBox   the three packages, in page order -> product variants 1..3
 *   .of_selected_box          the class marking the chosen package
 *   .khSubOffer               the Subscribe & Save package group
 *   ADD TO CART / BUY NOW     anchors that should add the chosen package to the cart
 *
 * Subscribe & Save is hidden rather than wired up: a real subscription needs a
 * selling plan from a subscription app, and showing a "Save 10%" option that checks
 * out at full price would misprice the order.
 */
(function () {
  'use strict';

  var data = window.PC_PRODUCT;
  if (!data || !data.variants || !data.variants.length) return;

  var addUrl = window.PC_ADD_URL || '/cart/add.js';
  var cartUrl = window.PC_CART_URL || '/cart';

  function all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  // --- Subscribe & Save: hide that group and its toggle, force one-time -------------
  // The capture ships with the subscribe group active, and the funnel CSS decides
  // which group is visible by class. Setting display on the one-time group is not
  // enough on its own, so both are forced with !important and the result is checked.
  function forceOneTime() {
    var sub = document.querySelector('.khSubOffer');
    var one = document.querySelector('.khOneOffer');
    if (sub) sub.style.setProperty('display', 'none', 'important');
    if (one) {
      one.style.setProperty('display', 'block', 'important');
      one.style.setProperty('visibility', 'visible', 'important');
    }
    all('.subOfferButton').forEach(function (b) { b.style.setProperty('display', 'none', 'important'); });
    all('.oneOfferButton').forEach(function (b) {
      b.classList.add('activeOfferType');
      b.style.setProperty('display', '', '');
    });
  }

  // Whichever group is actually on screen is the one to wire, so a CSS rule we did not
  // anticipate cannot leave us updating an invisible set of boxes.
  function offerBoxes() {
    var one = document.querySelector('.khOneOffer');
    var visible = function (el) { var r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
    if (one) {
      var b = all('.khOfferBox', one);
      if (b.length && b.some(visible)) return b;
    }
    var shown = all('.khOfferBox').filter(visible);
    if (shown.length) return shown;
    return one ? all('.khOfferBox', one) : all('.khOfferBox');
  }

  // --- prices come from the product, not the captured page -------------------------
  function applyPrices(boxes) {
    boxes.forEach(function (box, i) {
      var v = data.variants[i];
      if (!v) { box.style.display = 'none'; return; }
      var spans = all('[data-cc-price]', box);
      if (spans[0]) spans[0].textContent = v.price;
      if (spans[1]) {
        if (v.compare_at_price && v.compare_at_price !== v.price) spans[1].textContent = v.compare_at_price;
        else spans[1].style.display = 'none';
      }
      box.setAttribute('data-variant-id', v.id);
      if (!v.available) { box.style.opacity = '.5'; box.setAttribute('data-unavailable', '1'); }
    });
  }

  // --- selection -------------------------------------------------------------------
  var selected = 0;

  function select(i, boxes) {
    if (!data.variants[i]) return;
    selected = i;
    boxes.forEach(function (b, j) { b.classList.toggle('of_selected_box', j === i); });
  }

  function wireSelection(boxes) {
    boxes.forEach(function (box, i) {
      var target = box.closest('.c_pointer') || box;
      target.style.cursor = 'pointer';
      target.addEventListener('click', function (e) {
        if (e.target.closest('a')) return;      // let the buy links do their own thing
        select(i, boxes);
      });
    });
    // honour whatever the capture had marked, else the first package
    var pre = boxes.findIndex(function (b) { return b.classList.contains('of_selected_box'); });
    select(pre > -1 && data.variants[pre] ? pre : 0, boxes);
  }

  // --- add to cart -----------------------------------------------------------------
  function addToCart(e) {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    var v = data.variants[selected];
    if (!v) return;
    var btn = e && e.currentTarget;
    var label = btn ? btn.textContent : '';
    if (btn) btn.style.pointerEvents = 'none';
    fetch(addUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ items: [{ id: v.id, quantity: 1 }] }),
    }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (res) {
        if (!res.ok) throw new Error((res.j && res.j.description) || 'add failed');
        window.location.href = cartUrl;
      })
      .catch(function (err) {
        if (btn) { btn.style.pointerEvents = ''; }
        console.error('[primecell] add to cart failed:', err.message);
        alert('Sorry — that could not be added to the cart.');
      });
  }

  function wireButtons() {
    var links = all('a, button').filter(function (el) {
      var t = (el.textContent || '').replace(/\s+/g, ' ').trim().toUpperCase();
      return t === 'ADD TO CART' || t.indexOf('BUY NOW') === 0;
    });
    links.forEach(function (el) {
      el.addEventListener('click', addToCart);
      if (el.tagName === 'A') el.setAttribute('href', 'javascript:void(0)');
    });
    return links.length;
  }

  function init() {
    forceOneTime();
    var boxes = offerBoxes();
    applyPrices(boxes);
    wireSelection(boxes);
    var n = wireButtons();
    var sub = document.querySelector('.khSubOffer');
    console.log('[primecell] ' + boxes.length + ' packages, ' + n + ' buy buttons wired'
      + ', subscribe group ' + (sub ? getComputedStyle(sub).display : 'absent')
      + ', prices ' + boxes.map(function (b) {
        var s = b.querySelector('[data-cc-price]'); return s ? s.textContent.trim() : '?';
      }).join(' / '));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
