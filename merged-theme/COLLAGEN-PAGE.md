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
