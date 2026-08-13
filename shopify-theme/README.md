# Standard Lab — NAC600 & NAD (Shopify theme)

A standalone Shopify theme built from the static replica in `../`. The page content is
hardcoded: the marketing copy, images and layout are baked into the section files rather
than exposed as schema settings.

## Deployed

Pushed to `aqyfkx-dn.myshopify.com` as theme **#187482046793**, unpublished. The live
theme (`shrine-pro-100-secciones`) was not touched.

- Preview: https://aqyfkx-dn.myshopify.com?preview_theme_id=187482046793
- Editor: https://aqyfkx-dn.myshopify.com/admin/themes/187482046793/editor

To re-push after a change:

```bash
cd shopify-theme
shopify theme push --store aqyfkx-dn.myshopify.com --theme 187482046793
```

`--theme <id>` updates in place. Using `--unpublished` creates a second theme.

If you have edited theme settings in the admin, pull them first so a push doesn't
overwrite your edits:

```bash
shopify theme pull --store aqyfkx-dn.myshopify.com --theme 187482046793 --only config/settings_data.json
```

## Structure

```
layout/theme.liquid       head, header group, cart drawer, footer, content_for_header
layout/password.liquid    minimal password-page layout
sections/                 20 sections; the product page is 15 of them
templates/product.json    the product page, in order
templates/*.liquid        stubs for every other storefront route
config/settings_schema.json  theme info + the product mapping below
config/settings_data.json    mapping values + the Kaching app embed toggle
locales/en.default.json   the strings the theme JS reads
assets/                   180 files, flattened (Shopify's assets/ has no subdirectories)
```

## Product mapping

**Theme settings → Product mapping**, already pointed at this store's catalogue:

| Field | Value |
|---|---|
| Product ID | 10344956428617 |
| Variant ID — Buy One | 55042567799113 |
| Variant ID — Buy 2 Get 1 FREE | 55042567831881 |
| Variant ID — Buy 3 Get 2 FREE | 55042567864649 |
| Product handle — Shipping Protection | `shipping-protection` |

Shipping Protection is looked up by handle rather than pinned to a variant id, so the
theme derives both the variant id and the displayed price from the product itself.

## Apps

The captured page carried six app embed blocks belonging to the source store — two
Kaching (v1 and v2, the duplicate its own loader warns about), plus Judge.me, Triple
Whale, Klaviyo and a Facebook pixel — and ~900 KB of Kaching's JavaScript vendored into
`assets/`. All of it has been removed. Shopify injects app embeds itself from
`config/settings_data.json`, so carrying their rendered output as static markup only
created conflicts.

Kaching Bundles is enabled for this theme in `settings_data.json`:

```json
"blocks": {
  "kaching_bundles_app_embed": {
    "type": "shopify://apps/kaching-bundles/blocks/app-embed-block-v2/6c637362-a106-4a32-94ac-94dcfd68cdb8",
    "disabled": false
  }
}
```

Confirmed loading — the storefront pulls the app from
`cdn.shopify.com/extensions/019ff57b-.../kaching-bundles-1942/`.

`sections/shop-product-details.liquid` accepts app blocks (`"blocks": [{"type": "@app"}]`)
and renders them where the bundle widget used to sit, so the Kaching block can be placed
from the theme editor.

## Known issues

**The bundle tiers are not rendering.** The app embed loads but no `<kaching-bundle>`
element appears. Two likely causes, in order: no bundle offer is configured in the
Kaching admin for product `10344956428617`, or the app block needs placing in the theme
editor (Product details section → Add block → Kaching Bundles).

**Displayed prices are hardcoded and do not match the catalogue.** The `€34,99` on the
page comes from a variant JSON blob baked into the markup at capture time, not from the
product. The storefront Ajax API reports different prices for these products — 195 for
`nac-nad-combinados` and 95 for `shipping-protection`, against 34.99 and 5.00 in
`products.json`. That discrepancy is a store/Markets configuration question, not a theme
one, but while it stands the page will advertise a price the cart does not charge. Worth
resolving before this goes anywhere near customers. (I could not complete a cart-based
confirmation — the store started returning HTTP 429.)

**Replace the imagery and copy.** All of it is The Standard Lab's.

**Other hardcoded claims.** "69,708+ Clientes", the review quotes, the 30-day guarantee
and the countdown are literal text from the source page.

## What was changed from the captured markup

- **Assets flattened and rewritten** to `{{ 'file' | asset_url }}`. CSS siblings such as
  `url(sparkle.gif)` still resolve — Shopify serves assets from one flat path.
- **Section ids made dynamic.** Scoped CSS and `getElementById` calls embedded ids like
  `template--28017316692332__roadmap_kUe7Ke`; those are now `{{ section.id }}`. The cart
  drawer was excluded deliberately — its id is the bare string `cart-drawer`, which also
  occurs as a class name and a custom element.
- **Cart drawer rewritten in Liquid.** Loops `cart.items`, renders real totals and item
  count, switches between empty and filled states. The filled markup was captured from
  the source store's own section-rendering endpoint.
- **Routes** go through `routes.cart_url`, `routes.cart_add_url`, `routes.root_url`.
- **Store config from the platform**: `shop.money_format`, `window.routes`,
  `shop.permanent_domain`, translation strings. The bundle app's own `moneyFormat` too —
  left literal it printed `$34.99` on this EUR store.
- **Braces escaped.** The bundle config's `{{amount}}` / `{{product}}` are wrapped in
  `{% raw %}`.
- **Analytics removed**: Trekkie/web pixels, TriplePixel, Klaviyo, a Facebook pixel,
  Judge.me, Heatmap, captcha bootstrap, wallet bootstrapping, and the source store's
  canonical/og/hreflang tags.

## Validation

`shopify theme check` reports 10 offenses, all inherited from the source markup:
`ImgWidthAndHeight` ×6 and `ParserBlockingScript` ×4. Fixing either changes the rendered
markup or script execution order.

Theme check does **not** catch two classes of error the storefront rejects on upload, so
the build has two extra local checks:

- `check-liquid-tokens.ps1` — Liquid ends a variable at the first single `}`, so
  `{{ '}' }}` truncates to `{{ '}` and fails to parse. Theme check passes it happily.
  Use `{% raw %}` instead.
- `check-schema.ps1` — `theme_name` and `theme_author` cap at 25 characters; also
  verifies sections referenced by templates exist, schemas are valid JSON, and every
  `asset_url` resolves.

Run both before pushing.
