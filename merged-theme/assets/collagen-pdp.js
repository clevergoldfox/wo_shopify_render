/* =========================================================
   Collagen PDP — behaviour
   Vanilla JS, no dependencies. Every module bails out
   quietly if its markup isn't on the page, so the same file
   is safe to load site-wide in Shopify.
   ========================================================= */
(function () {
  'use strict';

  window.Shopify = window.Shopify || {};
  window.Shopify.routes = window.Shopify.routes || { root: '/' };

  var $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  var money = function (cents) {
    return '$' + (cents / 100).toFixed(2);
  };

  /* ---------------------------------------------------------
     Toast
     --------------------------------------------------------- */
  var toastTimer;
  function toast(message) {
    var el = $('#toast');
    if (!el) return;
    $('.toast__text', el).textContent = message;
    el.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('is-visible'); }, 2600);
  }

  /* ---------------------------------------------------------
     Announcement rotator
     --------------------------------------------------------- */
  function initAnnouncement() {
    var bar = $('[data-announcement]');
    if (!bar) return;
    var slides = $$('.announcement__slide', bar);
    if (slides.length < 2) return;
    var i = 0;
    var timer;

    function show(next) {
      slides[i].classList.remove('is-active');
      i = (next + slides.length) % slides.length;
      slides[i].classList.add('is-active');
    }
    function auto() { timer = setInterval(function () { show(i + 1); }, 5000); }
    function reset() { clearInterval(timer); auto(); }

    $$('[data-announcement-nav]', bar).forEach(function (btn) {
      btn.addEventListener('click', function () {
        show(i + (btn.dataset.announcementNav === 'next' ? 1 : -1));
        reset();
      });
    });
    auto();
  }

  /* ---------------------------------------------------------
     Mobile drawer
     --------------------------------------------------------- */
  function initDrawer() {
    var drawer = $('#drawer');
    var scrim  = $('#scrim');
    if (!drawer || !scrim) return;

    function open()  { drawer.classList.add('is-open');  scrim.classList.add('is-open');  document.body.style.overflow = 'hidden'; }
    function close() { drawer.classList.remove('is-open'); scrim.classList.remove('is-open'); document.body.style.overflow = ''; }

    $$('[data-drawer-open]').forEach(function (b) { b.addEventListener('click', open); });
    $$('[data-drawer-close]').forEach(function (b) { b.addEventListener('click', close); });
    scrim.addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* ---------------------------------------------------------
     Product gallery: thumbs, arrows, keyboard, lightbox
     --------------------------------------------------------- */
  function initGallery() {
    var gallery = $('[data-gallery]');
    if (!gallery) return;

    var slides = $$('[data-gallery-slide]', gallery);
    var thumbs = $$('[data-gallery-thumb]', gallery);
    var index  = slides.findIndex(function (s) { return !s.classList.contains('is-hidden'); });
    if (index < 0) index = 0;

    function go(next) {
      index = (next + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle('is-hidden', i !== index); });
      thumbs.forEach(function (t, i) {
        t.classList.toggle('is-active', i === index);
        t.setAttribute('aria-selected', i === index ? 'true' : 'false');
      });
    }

    thumbs.forEach(function (t, i) {
      t.addEventListener('click', function () { go(i); });
    });
    $$('[data-gallery-arrow]', gallery).forEach(function (btn) {
      btn.addEventListener('click', function () {
        go(index + (btn.dataset.galleryArrow === 'next' ? 1 : -1));
      });
    });
    gallery.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { go(index + 1); }
      if (e.key === 'ArrowLeft')  { go(index - 1); }
    });

    /* swipe */
    var startX = null;
    gallery.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    gallery.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 45) go(index + (dx < 0 ? 1 : -1));
      startX = null;
    });

    /* lightbox */
    var box = $('#lightbox');
    if (box) {
      var boxImg = $('img', box);
      var openBox = function () {
        boxImg.src = slides[index].src;
        boxImg.alt = slides[index].alt;
        box.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      };
      var closeBox = function () {
        box.classList.remove('is-open');
        document.body.style.overflow = '';
      };
      slides.forEach(function (s) { s.addEventListener('click', openBox); });
      $$('[data-zoom]', gallery).forEach(function (b) { b.addEventListener('click', openBox); });
      $$('[data-lightbox-close]', box).forEach(function (b) { b.addEventListener('click', closeBox); });
      box.addEventListener('click', function (e) { if (e.target === box) closeBox(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeBox(); });
    }
  }

  /* ---------------------------------------------------------
     Quantity stepper
     --------------------------------------------------------- */
  function initQty() {
    $$('[data-qty]').forEach(function (widget) {
      var input = $('input', widget);
      if (!input) return;
      var min = parseInt(input.min, 10) || 1;
      var max = parseInt(input.max, 10) || 999;

      function set(v) {
        var n = Math.min(max, Math.max(min, v));
        input.value = n;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }
      $$('[data-qty-step]', widget).forEach(function (btn) {
        btn.addEventListener('click', function () {
          set((parseInt(input.value, 10) || min) + parseInt(btn.dataset.qtyStep, 10));
        });
      });
      input.addEventListener('change', function () {
        var n = parseInt(input.value, 10);
        input.value = isNaN(n) ? min : Math.min(max, Math.max(min, n));
      });
    });
  }

  /* ---------------------------------------------------------
     Variant + purchase-type pricing
     Updates the price block, sticky bar and subscribe rows
     from data-* attributes on the selected inputs.
     --------------------------------------------------------- */
  function initPricing() {
    var form = $('[data-product-form]');
    if (!form) return;

    var priceNow  = $('[data-price-now]');
    var priceWas  = $('[data-price-was]');
    var priceSave = $('[data-price-save]');
    var priceUnit = $('[data-price-unit]');
    var stickyNow = $('[data-sticky-price]');
    var subPrice  = $('[data-subscribe-price]');
    var oncePrice = $('[data-onetime-price]');
    var freq      = $('[data-subscribe-freq]');

    /* Inputs are addressed by data-attribute, not by name, so the same file
       works standalone (name="variant") and in Shopify (name="id"). */
    function selectedVariant() {
      var input = $('[data-variant-input]:checked', form);
      if (!input) return null;
      return {
        price:   parseInt(input.dataset.price, 10),
        compare: parseInt(input.dataset.compare, 10) || 0,
        count:   parseInt(input.dataset.count, 10) || 0
      };
    }
    function discountRate() {
      var input = $('[data-purchase-input]:checked', form);
      return input ? (parseFloat(input.dataset.discount) || 0) : 0;
    }

    function render() {
      var v = selectedVariant();
      if (!v) return;
      var rate = discountRate();
      var now  = Math.round(v.price * (1 - rate));

      if (priceNow) priceNow.textContent = money(now);

      if (priceWas) {
        var showWas = v.compare > now;
        priceWas.textContent = showWas ? money(v.compare) : '';
        priceWas.hidden = !showWas;
      }
      if (priceSave) {
        var save = v.compare > now ? Math.round((1 - now / v.compare) * 100) : 0;
        priceSave.textContent = 'Save ' + save + '%';
        priceSave.hidden = save <= 0;
      }
      if (priceUnit && v.count) {
        priceUnit.textContent = money(Math.round(now / v.count)) + ' per capsule · ' + v.count + ' capsules';
      }
      if (stickyNow) stickyNow.textContent = money(now);
      if (oncePrice) oncePrice.textContent = money(v.price);
      if (subPrice) {
        var subInput = $('[data-purchase-input][data-subscribe]', form);
        var subRate = subInput ? (parseFloat(subInput.dataset.discount) || 0) : 0;
        subPrice.textContent = money(Math.round(v.price * (1 - subRate)));
      }
      if (freq) {
        var current = $('[data-purchase-input]:checked', form);
        freq.hidden = !current || !('subscribe' in current.dataset);
      }
    }

    form.addEventListener('change', render);
    render();
  }

  /* ---------------------------------------------------------
     Cart — Shopify AJAX API
     --------------------------------------------------------- */
  function cartAdd(items) {
    return fetch(window.Shopify.routes.root + 'cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ items: items })
    }).then(function (res) {
      return res.json().then(function (data) {
        if (!res.ok) throw new Error(data.description || data.message || 'Could not add to cart');
        return data;
      });
    });
  }

  function refreshCartCount() {
    return fetch(window.Shopify.routes.root + 'cart.js', { headers: { Accept: 'application/json' } })
      .then(function (r) { return r.json(); })
      .then(function (cart) {
        $$('[data-cart-count], .cart-count-bubble span, #cart-icon-bubble span').forEach(function (el) {
          if (el.hasAttribute('data-cart-count') || /^\d+$/.test(el.textContent.trim())) {
            el.textContent = cart.item_count;
          }
        });
        document.dispatchEvent(new CustomEvent('cart:updated', { detail: { cart: cart } }));
        return cart;
      });
  }

  function withBusyButton(btn, work) {
    var original = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Adding…';
    return work().then(function (result) {
      btn.disabled = false;
      btn.textContent = original;
      return result;
    }).catch(function (err) {
      btn.disabled = false;
      btn.textContent = original;
      toast(err.message || 'Something went wrong');
      throw err;
    });
  }

  /* Main product form — intercept submit and add without a page reload. */
  function initProductForm() {
    var form = $('[data-product-form]');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = e.submitter || $('[name="add"]', form);
      var data = new FormData(form);
      var payload = { id: data.get('id'), quantity: parseInt(data.get('quantity'), 10) || 1 };
      var plan = data.get('selling_plan');
      if (plan) payload.selling_plan = plan;

      withBusyButton(btn, function () { return cartAdd([payload]); })
        .then(function () { return refreshCartCount(); })
        .then(function () { toast('Added to your bag'); })
        .catch(function () {});
    });

    /* The sticky bar submits this form via form="..."; nothing extra needed. */
  }

  /* ---------------------------------------------------------
     Frequently bought together
     --------------------------------------------------------- */
  function initFbt() {
    var fbt = $('[data-fbt]');
    if (!fbt) return;

    var cards = $$('[data-fbt-item]', fbt);
    var totalEl = $('[data-fbt-total]', fbt);
    var saveEl  = $('[data-fbt-save]', fbt);
    var countEl = $('[data-fbt-count]', fbt);
    var addBtn  = $('[data-fbt-add]', fbt);

    function render() {
      var total = 0, compare = 0, n = 0;
      cards.forEach(function (card) {
        var box = $('input', card);
        var on = box.checked;
        card.classList.toggle('is-off', !on);
        if (!on) return;
        n += 1;
        total   += parseInt(card.dataset.price, 10) || 0;
        compare += parseInt(card.dataset.compare, 10) || parseInt(card.dataset.price, 10) || 0;
      });
      if (totalEl) totalEl.textContent = money(total);
      if (countEl) countEl.textContent = n;
      if (saveEl) {
        var saved = compare - total;
        saveEl.textContent = saved > 0 ? 'You save ' + money(saved) : '';
        saveEl.hidden = saved <= 0;
      }
      if (addBtn) addBtn.disabled = n === 0;
    }

    cards.forEach(function (card) {
      $('input', card).addEventListener('change', render);
    });

    if (addBtn) {
      addBtn.addEventListener('click', function () {
        var items = cards
          .filter(function (c) { return $('input', c).checked; })
          .map(function (c) { return { id: c.dataset.id, quantity: 1 }; })
          .filter(function (i) { return i.id; });
        if (!items.length) return;

        withBusyButton(addBtn, function () { return cartAdd(items); })
          .then(function () { return refreshCartCount(); })
          .then(function () { toast(items.length + ' items added to your bag'); })
          .catch(function () {});
      });
    }

    render();
  }

  /* ---------------------------------------------------------
     Tabs
     --------------------------------------------------------- */
  function initTabs() {
    $$('[data-tabs]').forEach(function (root) {
      var btns   = $$('[data-tab-btn]', root);
      var panels = $$('[data-tab-panel]', root);

      function activate(id) {
        btns.forEach(function (b) {
          b.setAttribute('aria-selected', b.dataset.tabBtn === id ? 'true' : 'false');
        });
        panels.forEach(function (p) {
          p.classList.toggle('is-active', p.dataset.tabPanel === id);
        });
      }
      btns.forEach(function (b) {
        b.addEventListener('click', function () { activate(b.dataset.tabBtn); });
        b.addEventListener('keydown', function (e) {
          var i = btns.indexOf(b);
          if (e.key === 'ArrowRight') { e.preventDefault(); btns[(i + 1) % btns.length].focus(); btns[(i + 1) % btns.length].click(); }
          if (e.key === 'ArrowLeft')  { e.preventDefault(); btns[(i - 1 + btns.length) % btns.length].focus(); btns[(i - 1 + btns.length) % btns.length].click(); }
        });
      });
    });
  }

  /* ---------------------------------------------------------
     FAQ accordion
     --------------------------------------------------------- */
  function initFaq() {
    $$('[data-faq]').forEach(function (root) {
      var single = root.dataset.faq === 'single';
      $$('[data-faq-q]', root).forEach(function (btn) {
        btn.addEventListener('click', function () {
          var item = btn.closest('.faq__item');
          var open = item.classList.contains('is-open');
          if (single) {
            $$('.faq__item', root).forEach(function (other) {
              other.classList.remove('is-open');
              $('[data-faq-q]', other).setAttribute('aria-expanded', 'false');
            });
          }
          item.classList.toggle('is-open', !open);
          btn.setAttribute('aria-expanded', String(!open));
        });
      });
    });
  }

  /* ---------------------------------------------------------
     Carousels
     --------------------------------------------------------- */
  function initCarousels() {
    $$('[data-carousel]').forEach(function (root) {
      var track = $('[data-carousel-track]', root);
      var prev  = $('[data-carousel-nav="prev"]', root);
      var next  = $('[data-carousel-nav="next"]', root);
      if (!track) return;

      function step() {
        var first = track.firstElementChild;
        if (!first) return 240;
        var gap = parseFloat(getComputedStyle(track).columnGap) || 18;
        return (first.getBoundingClientRect().width + gap) * 2;
      }
      function sync() {
        var max = track.scrollWidth - track.clientWidth - 2;
        if (prev) prev.disabled = track.scrollLeft <= 2;
        if (next) next.disabled = track.scrollLeft >= max;
      }
      if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
      if (next) next.addEventListener('click', function () { track.scrollBy({ left:  step(), behavior: 'smooth' }); });
      track.addEventListener('scroll', sync, { passive: true });
      window.addEventListener('resize', sync);
      sync();
    });
  }

  /* ---------------------------------------------------------
     Sticky add-to-cart bar
     --------------------------------------------------------- */
  function initStickyBar() {
    var bar = $('#stickybar');
    var anchor = $('[data-sticky-anchor]');
    if (!bar || !anchor || !('IntersectionObserver' in window)) return;

    new IntersectionObserver(function (entries) {
      bar.classList.toggle('is-visible', !entries[0].isIntersecting);
    }, { rootMargin: '-120px 0px 0px 0px' }).observe(anchor);
  }

  /* ---------------------------------------------------------
     Reveal on scroll
     --------------------------------------------------------- */
  function initReveal() {
    var items = $$('[data-reveal]');
    if (!items.length) return;
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(function (el) { el.style.opacity = 1; });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.style.transition = 'opacity .6s ease, translate .6s ease';
        entry.target.style.opacity = 1;
        entry.target.style.translate = '0 0';
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    items.forEach(function (el) {
      el.style.opacity = 0;
      el.style.translate = '0 18px';
      io.observe(el);
    });
  }

  /* ---------------------------------------------------------
     Newsletter (demo)
     --------------------------------------------------------- */
  function initNewsletter() {
    $$('[data-newsletter]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = $('input[type="email"]', form);
        if (!input || !input.value) return;
        form.reset();
        toast('Thanks — check your inbox to confirm.');
      });
    });
  }

  /* ---------------------------------------------------------
     Product recommendations (Section Rendering API)
     --------------------------------------------------------- */
  function initRecommendations() {
    var section = $('[data-recommendations-url]');
    if (!section) return;

    fetch(section.dataset.recommendationsUrl)
      .then(function (r) { return r.text(); })
      .then(function (html) {
        var fresh = new DOMParser().parseFromString(html, 'text/html').querySelector('.carousel');
        if (!fresh) return;
        var current = $('.carousel', section);
        if (current) current.replaceWith(fresh);
        initCarousels();
      })
      .catch(function () { /* leave the fallback markup in place */ });
  }

  /* --------------------------------------------------------- */
  function boot() {
    initAnnouncement();
    initDrawer();
    initGallery();
    initQty();
    initPricing();
    initProductForm();
    initFbt();
    initTabs();
    initFaq();
    initCarousels();
    initStickyBar();
    initRecommendations();
    initReveal();
    initNewsletter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
