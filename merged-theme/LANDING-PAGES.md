# Landing pages merged into shrine-pro-100-secciones

This is a **copy of your live theme** with two captured landing pages added as named
product templates. Everything else — layout, header, footer, cart, your 335 sections,
your existing `gp-template-*` and `nac-600mg-spanish` templates, `config/settings_data.json`
— is byte-identical to what was pulled from `shrine-pro-100-secciones` (#182520086857).

## Deployed

Theme **#187529298249 "Shrine + landing pages"**, unpublished.

- Preview: https://aqyfkx-dn.myshopify.com?preview_theme_id=187529298249
- Editor: https://aqyfkx-dn.myshopify.com/admin/themes/187529298249/editor

Preview the two pages without publishing:

```
/products/selerb-nad?preview_theme_id=187529298249&view=selerb
/products/nac-nad-combinados?preview_theme_id=187529298249&view=nac
```

## What was added

| | |
|---|---|
| `templates/product.selerb.json` | Selerb NAD+ landing page |
| `templates/product.nac.json` | NAC600 & NAD landing page |
| `sections/gp-section-631706233*.liquid` | 8 GemPages sections (Selerb) |
| `snippets/gp-section-631706233078088632-p1..3.liquid` | the oversized section, split |
| `sections/nac-*.liquid` | 15 sections (NAC600) |
| `assets/` | 161 images, none overwriting an existing file |

Nothing was overwritten. Every added file is a new name; the merge aborts on collision.

## Why these names

The Selerb sections keep vernu's own GemPages ids (`gp-section-631706233078219704`
etc.) so they match the convention your theme already uses for
`gp-section-619175656629994331` and friends, and so each file's name lines up with the
`"class": "gps-<id> gps gpsil"` in its schema. That class is what all GemPages CSS is
scoped under — without it the page renders unstyled and about nine times too tall.

NAC sections are prefixed `nac-` because `testimonials.liquid` would otherwise collide
with yours.

## Differences from the standalone themes

- **No vendored app runtime.** Your theme already enables the GemPages and Kaching
  Bundles app embeds (same extension UUIDs as the source stores), so ~2 MB of vendored
  `gp-*.js` and `kaching-*.js` was dropped. The apps supply it.
- **Product ids are literals, not settings.** The standalone themes had a "Product
  mapping" settings group; adding one here would mean editing your `settings_schema.json`.
  The ids are baked into the sections instead:
  - Selerb: product `10347301372233`, variant `55056669999433`
  - NAC: product `10344956428617`, variants `55042567799113` / `55042567831881` / `55042567864649`
- **The `<kaching-bundle>` mount point is restored on the NAC page.** In the standalone
  theme it had been replaced with a `{% for block in section.blocks %}` loop, which never
  rendered — that is why its tiers never appeared. Both pages now carry the element the
  app hydrates.

## To go live

1. Preview the storefront broadly on this theme and confirm it matches your current one.
2. Publish it. Only then do `selerb` and `nac` appear in the product Theme template
   dropdown — Shopify populates that field from the published theme.
3. **Products → Selerb NAD+ → Theme template → `selerb`**, and
   **Products → NAC & NAD+ Combinados → Theme template → `nac`**.

## Known, pre-existing

`sections/main-product line 429: invalid url input` appears on products with no image —
on your live theme too, identically. Adding a product image clears it.

Six assets referenced by `spotlight-block`, `special-banner` and `spotlight-products`
sections do not exist in the theme. Also pre-existing; those sections appear unused.

## Still outstanding

Neither page's bundle tiers render until a **Kaching Bundles offer** is configured for the
product. Source tiers for Selerb: 1× $549, 2× $749 (+ free guide), 3× $999 (+ guide +
magnesium), block title `ÚLTIMAS UNIDADES CON DESCUENTO`.

Copy and imagery on both pages belong to vernu.shop and thestandardlab.com. Replace before
these go public.

---

# Magnesium Complex (added later)

Captured from `byzani.store/products/magnesium-complex-for-women` — a **Shrine 1.2.4**
store with no page builder, so the sections are native Shrine markup rather than
GemPages. That made it the cleanest of the three to port into this theme.

| | |
|---|---|
| `templates/product.magnesium.json` | the landing page, 4 sections |
| `sections/mag-main.liquid` | gallery, price, bundle mount, accordions |
| `sections/mag-image-with-text.liquid` | the 800mg feature block |
| `sections/mag-testimonials.liquid` | "Real Ingredients, Real Results" |
| `sections/mag-collapsible.liquid` | collapsible content |

## Notes specific to this build

- **Prices are dynamic.** The capture had `$30.00` / `$40.00` hardcoded in the Shrine
  price markup, the variant `<option>` label and the product structured data. All now read
  from the product, so the page shows this store's €36,95 / €46,95 and cannot drift.
- **Product and variant ids are dynamic** too (`{{ product.id }}`,
  `{{ product.selected_or_first_available_variant.id }}`) rather than the source store's.
- **Colliding assets are namespaced.** 40 filenames clashed with this theme's own
  (`base.css`, `component-price.css`, and other Shrine components at a different version).
  Those were copied as `mag-<name>` and the section references rewritten, so the source's
  1.2.4 assets can never override this theme's 1.3.0 ones.
- **Three empty sections dropped.** The source rendered `177010137860770d8d`,
  `17701026347de6fc7e` and `1770101380c7a7530d` as empty divs; they carry no content.
- **The source store's support email** (`contact@byzani.store`) appeared in the returns
  copy and now renders `{{ shop.email }}`.
- **Kaching is not vendored** — the store's own app embed drives the bundle block, and it
  already renders (COMPRA 1 / COMPRA 1 Y LLÉVATE 1 GRATIS / COMPRA 2 Y LLÉVATE 2 GRATIS).

## This product already had a landing page

`Complejo de Magnesio` (`10234669760841`) is on a GemPages template with 6 sections. That
is untouched and still what the product serves. The new page is a **separate template**, so
you can compare before switching:

```
https://nuviralab.com/products/complejo-de-magnesio-descanso-relajacion-y-recuperacion-diaria?view=magnesium
```

To switch: **Products → Complejo de Magnesio → Theme template → `magnesium`**.

## Content

The photography is Byzani's, and the bottle shown is branded **microingredients** — a
third party. The testimonials (Michelle R., Rachel T., Lily M.) are theirs too. Same
caveat as the other two pages: replace before this is used commercially.
