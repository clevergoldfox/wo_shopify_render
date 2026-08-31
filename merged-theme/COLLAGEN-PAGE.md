# Collagen PDP — replica of microingredients.com

Faithful port of
`microingredients.com/products/multi-collagen-complex-for-women-240-capsules`
into this theme, as the **`collagen`** product template.

Preview on any product without assigning it:

```
/products/<any-handle>?view=collagen
```

## Files

| | |
|---|---|
| `templates/product.collagen.json` | 16 sections, reference order |
| `sections/col-*.liquid` | the ported sections |
| `snippets/col-bootstrap.liquid` | stylesheets, fonts, and every scoped override |
| `assets/col-*` | Hyper's CSS, the Poppins faces, and the page images |

Everything is namespaced `col-` and scoped to a `.col-scope` class carried on each
section wrapper via its schema, so nothing here can affect the rest of the store.

## Parity, measured at 1600px against the live reference

| section | reference | ours |
|---|---|---|
| breadcrumbs | 62 | **62** |
| frequently bought together | 471 | 440 |
| scrolling promotion | 52 | **52** |
| rich text | 224 | **224** |
| image with text 1 | 487 | 483 |
| image with text 2 | 493 | 490 |
| multicolumn 1 | 322 | 321 |
| spacer 1 / 2 | 60 / 40 | **60 / 40** |
| custom 2 | 308 | **308** |
| you may also like | 529 | 527 |
| custom 3 | 348 | **348** |
| multicolumn 2 | 442 | 443 |
| customer reviews | 883 | 100 |

Buy box: quantity stepper **125×50** (reference 125×50), Add To Cart 342×50
(reference 347×50). Zero broken images, zero Liquid errors, zero JS errors.

## The three defects that cost the most to find

**1. Class-name collisions with this theme.** This theme ships its own
image-with-text and multicolumn sections using the same BEM names as the source, and
its `base.css` styled the ported markup as if it owned it:

```css
.image-with-text__content { display:flex; padding: 6rem 7rem 7rem; }
.multicolumn-card__info   { padding: 2.5rem; }
```

The 7rem inset squeezed the heading to 375px against the reference's 515px, wrapping
it onto a third line. The 2.5rem one narrowed multicolumn text from 413 to 363. Both
are reset inside `.col-scope`. An audit found 60 shared class names; only these two
changed layout, but the rest are latent.

**2. The scoping pass silently killed two rules.** Prefixing Hyper's stylesheet
rewrote its `html {}` and `body {}` rules to `.col-scope html` and `.col-scope body`
— selectors that can never match — so its base typography vanished and the page
inherited this theme's 400/28.8px instead of 500/26px. A prefixing pass is safe for
class and `:root` selectors and destructive for `html` and `body` ones.

**3. A wildcard that hid the buy button.** Hiding the Kaching tier block with
`[class*="kaching-bundles"]` also matched the product form, because Kaching stamps
`kaching-bundles-form--different` onto the form element itself. The page looked
correct and silently could not add to cart. The selectors are now exact class tokens
(`kaching-bundle`, `.kaching-bundles`).

## Deliberate differences from the reference

- **No bundle tiers.** The reference store runs no bundle app. Kaching's block is
  hidden on this template only; NAC, Selerb and magnesium keep theirs. Reverting is
  deleting three CSS lines in `col-bootstrap.liquid`.
  Note Kaching's *script* still runs — on a product that has an active offer it will
  still set the form quantity, even with the UI hidden.
- **Catalogue sections are driven by this store.** "Frequently bought together" and
  "You may also like" were ported from the source theme (they are theme sections, not
  app blocks) but rewired to this catalogue, so links, images, prices and variant ids
  are real. Seed products are skipped by handle (`example-product`) — there are eight
  of them in the catalogue and they should be deleted.
- **Hyper's JavaScript is not loaded.** All 32 custom elements it defines are already
  defined by this theme; loading both threw
  `Identifier 'QuantityInput' has already been declared`.

## Outstanding

1. **The product does not exist.** `colageno-multiple-avanzado-...` has been deleted
   from the catalogue, so `?view=collagen` 404s on its old handle. Recreate the
   product, then set **Theme template → `collagen`**.
2. **Customer reviews render empty** (100px against the reference's 883px). The
   capture contains no review content at all — the block is an app shell that fetches
   at runtime, and `/apps/aliexpress_reviews` 404s here. It needs a review app. The
   reference's three reviews belong to Micro Ingredients and are not this product's.
3. **Copy and imagery are Micro Ingredients'**, including the bottle, the testimonial
   wall, the hardcoded `5.0 (3 reviews)` in the hero, and dollar figures
   (`Free Shipping Over $59`, `$35.00`, `orders over $500`) that do not match EUR
   pricing. Replace before this is used commercially.

---

# Vitamin D3 & K2 (True Nutra) — `truenutra` template

Ported from `truenutrawellness.com/products/fb-en-vdk001?view=fb-en-vdk001`. Unlike the
PrimeCell funnel this is a Shopify PDP, so it split into sections the same way the
collagen page did, and it uses this store's header, footer and cart.

| | |
|---|---|
| `templates/product.truenutra.json` | 7 sections |
| `sections/tn-main.liquid` | gallery, offers, buy box — **365KB, split into 4 snippets** |
| `sections/tn-collapsible-1/2` | How to use / Shipping / Guarantee, and the FAQs |
| `sections/tn-rich-text-1/2`, `tn-custom-1/2` | supporting blocks |
| `snippets/tn-inline-css-1..3` | the source theme's stylesheet, scoped |
| `assets/tn-*` | 21 files |

Renders at 4020px with **273 images, none broken, zero Liquid errors, zero JS errors**.

## Scoping

The source theme kept 135KB of CSS inline in the head. All of it is rewritten under
`.tn-scope`, a class every `tn-*` section carries via its schema, with `html`/`body`/
`:root` mapped to the scope root itself. Split into three snippets so no Liquid file
approaches the size where uploads have failed silently.

`tn-main` at 365KB is well past that ceiling, so it is four snippets rendered in order,
cut only between top-level tags and never inside a Liquid tag.

## App blocks are not vendored

Six app embeds were stripped: Kaching Bundles, Judge.me, Klaviyo, ABConvert, Simprosys
and GemPages. **Kaching matters most** — it is installed on this store under the same
extension id, so its own embed drives the offer widget. A vendored copy would render a
second one. The rendered page confirms a single Kaching block with five bars.

## What is dynamic, and what is not

Dynamic: product and variant ids, cart routes, `product.url`. 479 substitutions. The buy
form carries this store's variant, verified.

**Not dynamic: the offer prices.** `$28.95`, `$38.95`, `$70.00`, `$140.00` and the
`SAVE 51%` / `SAVE 59%` badges are baked into the captured Kaching markup. They are the
source store's numbers and the cart will not honour them. Until a matching Kaching offer
is configured for this product, that block is decorative — the page advertises
"Buy 2, Get 2 FREE" but the cart adds one unit at this store's price.

That is the one thing to fix before this page is used commercially.

## Expected empty sections

- `tn-custom-1` — the **Judge.me** review widget ("All Reviews", 2,142 reviews on the
  source). Judge.me is not installed here, so it renders nothing. Same situation as the
  collagen page's review block.
- `tn-rich-text-2` and `tn-custom-2` are empty containers on the source too.

This accounts for the height difference against the source (5526 vs 4020).

## Creating the product

`truenutra-product.csv` imports it: handle `vitamin-d3-k2`, SKU `TN-VDK001`, 28.95 with
a 70.00 compare-at, 11 gallery images pulled from their CDN. Then set
**Theme template → `truenutra`**.

Price is the source's USD figure; this store prices in EUR.

## Content

Copy, photography, the True Nutra branding, the "#1 Vitamin D brand in the USA" and
"Trusted by 80,000+" claims, the 4.8/5 from 2,142 reviews, the Trustpilot and Light Labs
references, and the 90-day guarantee all belong to True Nutra. The review count and
rating in particular are theirs, not this product's.

---

# Stick de Sombra Tricolor 3 en 1 (Brevonnio) — `brevonnio` template

Ported from `brevonnio.com/products/stick-de-sombra-tricolor-3-en-1`. A Shopify PDP, so
the same pipeline as the True Nutra page; it uses this store's header, footer and cart.

| | |
|---|---|
| `templates/product.brevonnio.json` | 2 sections |
| `sections/bv-main.liquid` | gallery, offers, buy box — 209KB, fits in one file |
| `sections/bv-custom-1.liquid` | everything below the fold: testimonials, comparison table, FAQ, reviews |
| `snippets/bv-inline-css-1.liquid` | the source theme's inline head CSS, scoped |
| `assets/bv-*` | 64 files |

Renders at 8751px with **294 images, none broken, zero Liquid errors**.

## The custom-element collision, again

The source theme is Dawn-derived and so is this one. **All 33 custom elements it
defines** — `product-form`, `quantity-input`, `media-gallery`, `cart-drawer`,
`search-form` and the rest — are already defined here, so loading both threw
`Identifier 'QuantityInput' has already been declared` and killed the rest of the
script. Exactly the collagen failure.

Seven files are therefore not loaded: `custom-elements.min.js`, `global.min.js`
(re-declares `subscribers`), `media-gallery.js`, `product-modal.js`, `search-form.js`,
`cart-notification.js` and `scripts.js`. This theme hydrates the identical markup.

Kept, because none of them define elements: the bundle/offer engine
(`bundle.min.js`), the progressive gift monitor, Swiper and the sizing plugin.

**Visible consequence:** the gallery renders as a stack rather than the source's
carousel, because its slider was `media-gallery.js`. All six images are present and in
order.

Eleven more scripts are dropped as before — Shopify platform bundles that lazily import
chunks the capture never saw, and app scripts for apps this store does not run. The two
`kaching-subscriptions` files go too: this store has that app embedded already.

## What is dynamic, and what is not

Dynamic: product id, the three offer variants mapped in page order, cart routes,
`product.url`. 63 substitutions; the buy form carries this store's variant.

**Not dynamic: the offer prices.** `$499.00`, `$998.00`, `$1,497.00` and the crossed-out
`$1,998.00` / `$4,995.00` / `$7,992.00` are the source store's MXN figures, baked into
the markup. Same caveat as the True Nutra page — until the product carries matching
prices, the block advertises numbers the cart will not honour.

## Two widgets that are this store's, not the source's

The screenshot shows a second offer block ("ÚLTIMAS UNIDADES CON DESCUENTO") and a
"Suscríbete & Ahorra 10%" selector below the ported offers. Those are **this store's own
Kaching Bundles and subscription embeds** firing on the test product. They will not
appear on the Brevonnio product unless offers are configured for it.

## Creating the product

`brevonnio-product.csv` — handle `stick-de-sombra-tricolor-3-en-1`, three variants on a
`Paquete` option matching the offers in page order (the template maps offer 1/2/3 to
variant 1/2/3 by position, so do not reorder them), 10 gallery images.

Then set **Theme template → `brevonnio`**.

## Content

Copy, photography, the Brevonnio branding, the "Amado por +50.000 mujeres" claim, the
named testimonials, the 98% / 97% / 95% statistics and the comparison table are all
Brevonnio's. The statistics and testimonials in particular are claims this store would
be making.
