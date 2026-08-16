# Selerb NAD+ (Shopify theme)

A standalone Shopify theme built from `vernu.shop/products/selerb-nad`, with the page
content hardcoded. Static replica of the same page lives in `../selerb-nad/`.

## Deployed

Theme **#187526971721 "Selerb NAD+"** on `aqyfkx-dn.myshopify.com`, unpublished. Neither
the live theme nor the NAC600 theme was touched.

- Preview: https://aqyfkx-dn.myshopify.com?preview_theme_id=187526971721
- Editor: https://aqyfkx-dn.myshopify.com/admin/themes/187526971721/editor

```bash
cd selerb-nad-theme
shopify theme push --store aqyfkx-dn.myshopify.com --theme 187526971721
```

## Source page

Built with **GemPages** on **Shrine PRO 1.3.0**, currency MXN. The page body is eight
GemPages sections; the buy box tiers come from **Kaching Bundles**. Also present on the
source and removed here: Klaviyo, Kaching Cart, Microsoft Clarity.

## Structure

```
layout/theme.liquid          head, hidden header group, cart drawer, footer
sections/                    14 sections; the landing page is gp-section-1 .. gp-section-8
snippets/                    gp-section-2 split into 3 parts (see below)
templates/product.selerb.json  the eight GemPages sections -- the landing page
templates/product.json         plain default for every other product
assets/                      170 files, 25.6 MB, flattened
```

## Assigning the landing page

The captured page is on a **named template**, so it only applies to products you opt in.
A JSON template called `product.json` applies to every product in the store, which is not
what you want for a single-product landing page.

To put a product on it: **Products → Selerb NAD+ → Theme template → `selerb` → Save.**
Everything else falls back to `templates/product.json`, a minimal title / price / gallery /
add-to-cart page rendered by `sections/main-product.liquid`.

## Two things worth knowing about the conversion

**Section wrapper classes are load-bearing.** Every GemPages section's opening tag
carried `class="shopify-section gps-<id> gps gpsil"`, and *all* of GemPages' CSS is
scoped under `.gps` / `.gps-<id>`. Shopify emits its own wrapper, so those classes are
handed back through the schema's `class` property:

```json
{ "name": "Gp Section 2", "class": "gps-631706233078088632 gps gpsil", "settings": [] }
```

Dropping them renders the page unstyled and roughly nine times too tall.

**gp-section-2 exceeds Shopify's per-file limit.** At 345 KB it silently fails to upload
(`Section type 'gp-section-2' does not refer to an existing section file`). It is split
across three snippets of ~150 KB rendered in sequence. Liquid concatenates snippet output
as strings, so the cuts do not need to be balanced HTML — they are made between a `>` and
the next `<`, never inside a script, style or Liquid tag. `section.id` is out of scope
inside a snippet, so it is passed in as `section_id`.

## Product mapping

Wired to this store's catalogue. All 81 occurrences of vernu's ids in the captured markup
now read from **Theme settings → Product mapping**:

| Field | Value | Source store's |
|---|---|---|
| Product ID | 10347301372233 | 11167010783574 |
| Variant ID | 55056669999433 | 54938302447958 |
| Product handle | `selerb-nad` | `selerb-nad` |

Verified: adding to cart from the rendered page produces a line item "Selerb NAD+".

Two further ids are still vernu's — `11171753132374` (Guía Recupera tu Energía Masculina)
and `11172302258518` (Vernu Magnesium Free Gift). They appear only inside the Kaching
bundle config as the free gifts on the 2× and 3× tiers. They are inert until a bundle
offer is configured, and the app supplies its own product references once one is.

## Still outstanding

**The bundle tiers do not render.** Kaching Bundles loads, but no offer is configured for
the product, so the "ÚLTIMAS UNIDADES CON DESCUENTO" block is empty. The source tiers are
1× $549, 2× $749 (+ free guide), 3× $999 (+ guide + magnesium). Same gap as the NAC600
theme.

**Your catalogue is priced in MXN but the storefront presents EUR.** The product was
created at 649.00 and the cart charges 3395 — €33.95, which is 649 MXN converted. This
also explains the discrepancy flagged on the NAC600 theme: `products.json` reports
base-currency (MXN) amounts while the storefront converts. Every price baked into this
page's copy is a peso figure, so the page will advertise `$ 549.00` while the cart charges
roughly €28. Resolve the Markets/currency setup before this is shown to customers.

**Content and imagery are Vernu's.** Replace before this goes public.

## Validation

`shopify theme check`: 20× `ImgWidthAndHeight`, 4× `RemoteAsset` (a Google Fonts link the
source also loads remotely), 3× `AssetPreload` — all inherited from the source markup. No
Liquid syntax errors, no hardcoded routes.

Two extra local checks catch what theme check misses, both reused from the NAC600 build:

- `selerb-check-liquid-tokens.ps1` — Liquid ends a variable at the first single `}`, so
  `{{ '}' }}` fails to parse while theme check passes it. Kaching's `{{amount}}`,
  `{{product}}` and `{{saved_total}}` placeholders are wrapped in `{% raw %}`.
- `selerb-check-schema.ps1` — 25-character caps on `theme_name` / `theme_author`, plus
  section, template and asset-reference resolution.

## Fidelity

Rendered at 1440px: 6,264px tall against the live page's 6,869px. The ~600px difference
is the missing bundle-tier block. Everything else — two-column layout, gallery and
thumbnails, trust badges, accordions, customer photos, testimonials — matches.
