# The Standard Lab — NAC600 & NAD Daily Complex (local replica)

A self-contained HTML/CSS/JS copy of
<https://thestandardlab.com/en-us/products/nac-nad-combinados>.
Every stylesheet, script, font and image is served from `assets/`; the page makes no
network requests to any external host.

## Running it

The page needs to be served over HTTP (it fetches the cart-drawer templates, which
`file://` blocks). Any static server works:

```bash
python -m http.server 8899      # then open http://127.0.0.1:8899/index.html
```

```bash
npx serve .
```

## Layout

```
index.html            the page
assets/css/           40 theme stylesheets + sparkle.gif
assets/js/            40 theme scripts + local-cart.js
assets/img/           99 images (product shots, icons, payment marks, flags)
assets/fonts/         Assistant / DM Sans / Space Grotesk woff+woff2
assets/cart/          HTML templates for the cart drawer (see below)
```

## What works

Everything on the page is the site's own markup and its own JavaScript, so the
behaviour is the real behaviour:

- announcement bar + live countdown timer
- product gallery — thumbnails, prev/next arrows, zoom, mobile swipe
- the "SUMMER BLOWOUT" bundle tiers (Kaching Bundles), including the price swap on the
  product block
- Expert Reviews / Comparison / Ingredients tabs, all accordions, the FAQ
- ingredient carousel, statistics counters, roadmap timeline, testimonial carousel,
  scrolling ticker
- add to cart → cart drawer opens, quantity +/−, remove, item count badge, totals,
  "Cart Reserved for mm:ss" timer

## Deviations from the live page

Four, all forced by there being no Shopify backend:

1. **`assets/js/local-cart.js`** is the only file that is not from the original site. It
   intercepts `fetch`/`XMLHttpRequest` for `/cart.js`, `/cart/add`, `/cart/change`,
   `/cart/update` and the section-rendering endpoints, and answers them from a cart held
   in `localStorage`. The drawer HTML it returns comes from `assets/cart/*.tpl.html`,
   which were captured from the live store's section-rendering endpoint, so the rendered
   drawer is the store's own markup.
2. **Checkout goes nowhere.** On the live site the add-to-cart button adds the line and
   redirects to `/checkout`; here it adds the line and opens the cart drawer instead.
   The drawer's SECURE CHECKOUT button shows a notice.
3. **Navigation links are inert.** Every internal link (`/en-us/...`) was rewritten to
   `#`, with the original target kept in a `data-orig` attribute. In-page anchors still
   work.
4. **Analytics and third-party embeds were removed**: Heatmap, Shopify
   analytics/Trekkie/web pixels, TriplePixel, Klaviyo, a Facebook pixel, Judge.me, Shop
   Pay / Apple Pay wallet bootstrapping, and the captcha bootstrap. Nothing they rendered
   is visible on the page.

## Fidelity check

Rendered in headless Chrome at 1440px and 390px wide and compared against the live page
slice by slice:

| viewport | page height (local vs live) | pixels differing |
|---|---|---|
| 1440px | 11283 vs 11283 | 0.18% in the top slice, 0.00% in the other four |
| 390px | 13931 vs 13931 | 0.04%–0.14% per slice |

The residual difference is entirely the countdown timer's seconds digit and the
animation phase of the scrolling ticker — both move on their own between the two
captures.
