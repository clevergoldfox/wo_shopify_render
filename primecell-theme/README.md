# PrimeCell H2 replica — standalone theme

Theme **#188075639113 "PrimeCell H2 replica"**, unpublished.

```
Preview:  https://nuviralab.com/products/<any-handle>?view=primecell&preview_theme_id=188075639113
Editor:   https://aqyfkx-dn.myshopify.com/admin/themes/188075639113/editor
```

A standalone port of `shop.getamalahealth.com/pch/gn/sp`. It gets its own theme rather
than joining the collagen replica: that page is a Hyper Shopify theme, this one is a
**Checkout Champ funnel** built on Bootstrap 4 + jQuery, and the two stylesheets share
enough class names (`.section`, `.btn`, `.container`, `.row`) to wreck each other.

The replica lives at `templates/product.primecell.json`, so it applies only to a product
whose Theme template is set to `primecell`. Everything else falls back to
`templates/product.json` -> `sections/generic-product.liquid`.

## Structure

| | |
|---|---|
| `layout/theme.liquid` | the captured head and body chrome, 226KB |
| `sections/pc-hero.liquid` | the hero, gallery and buy box |
| `sections/pc-01 … pc-14` | the fourteen content sections, in page order |
| `assets/` | 50 files — the funnel's CSS, Bootstrap, jQuery, Swiper, fonts and images |
| `assets/pc-cart.js` | the buy box, rewired to Shopify |

Rendered height is **6753px, exactly the source's**. 171 images, none broken.

## The buy box had to be rebuilt

The page's three packages were driven by Checkout Champ's `index.js` against their
order API, using a funnel session token in the URL
(`?w8ik4t35fq6usvckj1qm7lhs`). None of that transfers, so that script is not carried
across and `pc-cart.js` takes over the same markup:

- `.khOneOffer .khOfferBox` — the three packages, in page order, mapped to variants 1–3
- clicking a package sets `.of_selected_box`, as the original did
- ADD TO CART and the four BUY NOW & SAVE links post the selected variant to
  `{{ routes.cart_add_url }}` and then go to the cart
- package prices are written from the product, so the page cannot advertise a price the
  cart will not honour

**Subscribe & Save is hidden, not wired.** A real subscription needs a selling plan from
a subscription app; showing a "Save 10%" option that then checks out at full price would
misprice the order. The markup is intact, so it can be re-enabled once such an app is in
place. The group is force-hidden with `!important` — the funnel's own CSS decides group
visibility by class, and setting `display` alone was not enough. My first attempt hid the
wrong group and updated prices on the invisible one; the script now works on whichever
group is actually on screen.

## Removed

Tracking and platform scripts belonging to the source funnel: the Facebook pixel and its
`fbevents.js`, `pixel.wetracked.io` (which reports to `npmm0x-xn.myshopify.com`, their
store), and Checkout Champ's `index.js`. Six script blocks and five assets in total.
Leaving them in would have sent this store's visitors to their analytics.

## Creating the product

`primecell-product.csv` (parent folder) creates the product with the three packages as
variants, in the order `pc-cart.js` expects:

| Option "Package" | price | compare-at | SKU |
|---|---|---|---|
| Buy 1 | 29.95 | 32.95 | PCH2-1 |
| Buy 2 + Get 1 FREE | 59.95 | 64.95 | PCH2-3 |
| Buy 3 + Get 2 FREE | 89.95 | 98.95 | PCH2-5 |

1. **Products → Import →** upload the CSV.
2. Open the product → **Theme template → `primecell`**
   (the dropdown lists templates from the *published* theme, so publish this one first
   or set it while previewing).

**Variant order matters.** Package 1/2/3 map to variant 1/2/3 by position. If you
reorder them in the admin, reorder the packages too.

**Check the prices.** 29.95 / 59.95 / 89.95 are the source's USD figures; this store
prices in EUR.

## Content still to replace

Copy, photography, the AMALA Health branding, the "Total Value: $358+" and "TODAY ONLY"
claims, the 90-day guarantee and the FDA disclaimers are all Amala Health's. The
guarantee in particular is a commitment this store would be making.
