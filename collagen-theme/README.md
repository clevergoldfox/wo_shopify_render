# Collagen exact replica — standalone theme

Theme **#188072853833 "Collagen exact replica"**, unpublished.

```
Preview the replica:  https://nuviralab.com/products/<any-handle>?view=collagen&preview_theme_id=188072853833
Editor:               https://aqyfkx-dn.myshopify.com/admin/themes/188072853833/editor
```

A standalone port of
`microingredients.com/products/multi-collagen-complex-for-women-240-capsules` —
its own layout, header, footer, stylesheets and JavaScript. It does not touch and is
not derived from the live theme.

The replica lives at **`templates/product.collagen.json`**, so it applies only to a
product whose Theme template is set to `collagen`. Every other product falls back to
`templates/product.json` -> `sections/generic-product.liquid`, a plain title / gallery /
price / add-to-cart page.

It was briefly the default product template, which made it every product's page; that
is no longer the case.

## Why standalone beats the merged version

The merged build fought the destination theme on three fronts, all of which simply do
not exist here:

| problem in the merged build | here |
|---|---|
| `base.css` restyled the ported markup — `.image-with-text__content{padding:6rem 7rem}`, `.multicolumn-card__info{padding:2.5rem}` — because both themes use the same BEM names | no second stylesheet, so no collision and no overrides |
| the source's `theme.js` could not load: all 32 of its custom elements were already defined, throwing `Identifier 'QuantityInput' has already been declared` | **the source's own JS runs**, so the gallery, accordions, sticky bar and drawers behave exactly as on the reference |
| Kaching Bundles injected a tier block over the buy box, and hiding it by class hid the product form with it | no app embeds — `config/settings_data.json` is empty |
| the source's `:root`/`body` CSS had to be rewritten to `.col-scope`, which silently killed its `html{}` and `body{}` rules | its stylesheets load unmodified |

## What is dynamic

Copy and imagery are the reference's — that is the point of a replica — but everything
that has to be true of *this* store is wired to it:

- prices and compare-at prices (`{{ product.price | money }}`), so they render in EUR
- variant and product ids, cart routes, `{{ product.url }}`, `{{ canonical_url }}`
- product structured data: price, currency, urls
- "Frequently bought together" and "You may also like" list **this** catalogue, so
  every link, image and price is real and Add Selected To Bag works
- footer copyright reads `{{ shop.name }}`

Zero broken images. All 385 page assets are served from the theme.

## Known differences from the reference

1. **No "Subscribe & Save" box.** The reference's dark-green subscription card is
   rendered by a subscription app on their store. The markup and `subscription-widget.js`
   are present but there is no app to feed them.
2. **Customer reviews render empty** (100px against the reference's 883px). The capture
   contains no review content at all — the block is an app shell that fetches at
   runtime. It needs a review app. The reference's three reviews are Micro Ingredients'
   and are not this product's.
3. **Console noise from the source store's apps** — Shogun, UpPromote, AliExpress
   Reviews. They 403/404 because those apps are not installed here. Nothing visible
   depends on them.
4. Platform bundles that Shopify itself injects (Shop Pay, payment terms, cart sync,
   the consent API, the analytics bootstrap) were **removed** from the captured head.
   They were the source store's copies and lazily imported ~20 sibling chunks that were
   never captured, so each 404'd. `{{ content_for_header }}` supplies the correct ones.

## Do not publish this as the storefront

`templates/index.liquid` and the other templates are deliberate stubs — there is no
home page, collection or cart design. It is built to preview and to be lifted from,
not to run a shop.

## Content still to replace before any commercial use

The bottle, photography, testimonial wall, copy, the `5.0 (3 reviews)` in the hero and
the dollar figures in the trust copy (`Free Shipping Over $59`, `$35.00`,
`orders over $500`) all belong to Micro Ingredients and do not match EUR pricing.

## Creating the product

The collagen product was deleted from the catalogue, so nothing currently uses this
template. `collagen-product.csv` (in the parent folder) recreates it in one import —
the data comes from the captured page, and the six gallery images are pulled straight
from their public CDN, so Shopify copies them into the product on import.

1. **Products → Import → upload `collagen-product.csv` → Upload and continue.**
2. Open the imported product and set **Theme template → `collagen`**.
   The dropdown only lists templates from the **published** theme, so either publish
   this theme first or set the suffix while previewing it.
3. Preview: `/products/multi-collagen-complex-240-capsules?preview_theme_id=188072853833`

What the CSV contains, straight from the source page:

| field | value |
|---|---|
| Handle | `multi-collagen-complex-240-capsules` |
| Title | Micro Ingredients Multi Collagen Complex, 240 Capsules |
| SKU / weight | `BA-MI-MCC0300` / 113 g |
| Price / compare-at | 24.95 / 29.95 |
| Images | 6, in the reference's order |

**Check the price before importing.** 24.95 / 29.95 are the reference store's USD
figures; this store prices in EUR (its other products sit at €25.95–€41.95). The
vendor is set to "Micro Ingredients" for the same reason the copy is theirs — change
both when the content is replaced.
