Array.prototype.flat || (Array.prototype.flat = function(t = 1) {
  return t > 0 ? (
    // @ts-expect-error - Polyfill for older browsers
    this.reduce(
      (e, s) => e.concat(Array.isArray(s) ? s.flat(t - 1) : s),
      []
    )
  ) : (
    // @ts-expect-error - Polyfill for older browsers
    this.slice()
  );
});
Array.prototype.flatMap || (Array.prototype.flatMap = function(t, e) {
  return this.map(t, e).flat();
});
const jt = (t) => {
  const e = window.Shopify.currency;
  e && (t.currencyRate = Number(e.rate));
  const s = window.Shopify.country;
  s && (t.country = s);
  const n = window.Shopify.locale;
  n && (t.locale = n);
}, B = () => {
  try {
    const t = "kaching_local_storage_test";
    return localStorage.setItem(t, t), localStorage.removeItem(t), !0;
  } catch {
    return !1;
  }
}, v = B() ? window.localStorage : window.sessionStorage, G = () => new URLSearchParams(window.location.search).get("kaching");
let A;
const Vt = () => (A === void 0 && (A = G() === "off"), A);
let N;
const D = () => (N === void 0 && (N = G() === "debug"), N);
let T;
const j = () => (T === void 0 && (T = G() === "dev"), T);
let O;
const tt = () => (O === void 0 && (O = G() === "info"), O), Pt = async (t, e, s, n, o, a) => {
  try {
    const c = "kaching_visited_deal_blocks", l = v.getItem(c), f = l ? JSON.parse(l) : [];
    if (f.includes(e))
      return;
    f.push(e), v.setItem(c, JSON.stringify(f)), await fetch("https://bundles-stats.kachingappz.app/impressions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        shopDomain: t,
        dealBlockId: e,
        productId: s,
        abTestVariantId: n,
        dealBlockVersionId: o,
        sessionId: a
      }),
      keepalive: !0
    });
  } catch (c) {
    console.error(c);
  }
}, et = "https://storefront-events.kachingappz.app", nt = () => {
  if (D() || j())
    try {
      const t = localStorage.getItem("kaching_storefront_events_host");
      if (t) return t;
    } catch {
    }
  return et;
}, st = 16e3, rt = (t, e) => {
  const s = JSON.stringify(t), n = new Blob([s]).size;
  return n <= st ? s : JSON.stringify(e(n));
}, V = async (t, e, s, { sampleRate: n = 1, keepalive: o = !0, once: a = !0 }) => {
  if (Math.random() > n)
    return;
  if (a) {
    if (e.sent.has(e.key))
      return;
    e.sent.add(e.key);
  }
  return await fetch(`${nt()}${t}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: rt(s.full, s.truncated),
    keepalive: o
  });
}, ot = /* @__PURE__ */ new Set(), at = async (t, e = {}, s = {}) => {
  k("sendStorefrontEvent", { name: t, data: e });
  const n = window.location.href, o = window.Shopify.shop;
  return V(
    "/bundles/events",
    { key: t, sent: ot },
    {
      full: { event: { name: t, data: e, url: n, shop: o } },
      truncated: (a) => ({
        event: { name: t, data: { truncated: !0, size: a }, url: n, shop: o }
      })
    },
    s
  );
}, it = /* @__PURE__ */ new Set(), qt = async (t, e = {}, s = {}) => {
  k("sendStorefrontMetric", { name: t, data: e });
  const n = window.location.href, o = window.Shopify.shop;
  return V(
    "/bundles/metrics",
    { key: t, sent: it },
    {
      full: { event: { name: t, data: e, url: n, shop: o } },
      truncated: (a) => ({
        event: { name: t, data: { truncated: !0, size: a }, url: n, shop: o }
      })
    },
    s
  );
}, ct = /* @__PURE__ */ new Set(), R = async (t, e, s = {}) => {
  if (t === "Failed to fetch" || t && (t.includes(
    "Cannot define multiple custom elements with the same tag name"
  ) || t.includes(
    "Failed to execute 'define' on 'CustomElementRegistry'"
  ) || t.includes("CustomElementRegistry.define")))
    return;
  const n = window.location.href, o = window.Shopify.shop;
  return V(
    "/bundles/errors",
    { key: t, sent: ct },
    {
      full: { error: { message: t, stack: e, url: n, shop: o } },
      truncated: (a) => ({
        error: { message: t, stack: `[truncated ${a} bytes]`, url: n, shop: o }
      })
    },
    { sampleRate: 0.1, ...s }
  );
}, Mt = (t) => t instanceof Error ? t.message : String(t), Ct = () => {
  const t = ["kaching-bundles.js", "kaching-bundles-block.js"];
  window.addEventListener("error", async function(e) {
    const s = async (n) => {
      const { filename: o, message: a, error: c } = n;
      for (const l of t)
        if (o.includes(l)) {
          if (D() || J()) {
            k("Error", n);
            return;
          }
          await R(a, c.stack);
        }
    };
    try {
      await s(e);
    } catch (n) {
      console.error(n);
    }
  }), window.addEventListener("unhandledrejection", async function(e) {
    const s = async (n) => {
      if (typeof n.reason != "object")
        return;
      const { message: o, stack: a } = n.reason;
      if (a) {
        for (const c of t)
          if (a.includes(c)) {
            if (D() || J()) {
              k("Unhandled rejection", n);
              return;
            }
            await R(o, a);
          }
      }
    };
    try {
      await s(e);
    } catch (n) {
      console.error(n);
    }
  });
};
function k(t, e = null) {
  !D() && !j() || console.debug("[Kaching Bundles]", t, e);
}
function Ft(t, e = null) {
  !tt() && !D() && !j() || console.info("[Kaching Bundles]", t, e);
}
const Ut = () => {
  const t = (n) => {
    window.dispatchEvent(new Event(n));
  }, e = history.pushState;
  history.pushState = function(...o) {
    const a = e.apply(this, o);
    return t("pushstate"), t("locationchange"), a;
  };
  const s = history.replaceState;
  history.replaceState = function(...o) {
    const a = s.apply(this, o);
    return t("replacestate"), t("locationchange"), a;
  }, lt(window, "popstate", () => {
    t("locationchange");
  });
}, xt = (t, e, s, n = 0) => {
  let o = Object.getPrototypeOf(t), a;
  for (; o && (a = Object.getOwnPropertyDescriptor(o, e), !a); )
    o = Object.getPrototypeOf(o);
  if (a) {
    if (!a.configurable)
      return;
    Object.defineProperty(t, e, {
      configurable: !0,
      get: function(...c) {
        return a.get.apply(this, c);
      },
      set: function(...c) {
        const l = this[e];
        a.set.apply(this, c);
        const f = this[e];
        return typeof s == "function" && setTimeout(s.bind(this, l, f), n), f;
      }
    });
  }
}, ut = (t, e = document) => {
  try {
    return e.querySelector(t);
  } catch {
    return null;
  }
}, Lt = (t, e = document) => {
  try {
    return [...e.querySelectorAll(t)];
  } catch {
    return [];
  }
}, lt = (t, e, s) => t.addEventListener(e, s), zt = (t) => document.createElement(t), Kt = (t, e) => t && t.classList.add(e), $t = (t, e, s) => t.setAttribute(e, s), Rt = (t) => Number(t.split("/").pop()), Jt = (t) => t.dataset, Qt = (t) => {
  const e = ut(t);
  if (!e)
    return;
  const s = JSON.parse(e.textContent);
  return k("jsonFromElement", s), s;
}, dt = (t, e) => {
  let s = 0, n = t;
  for (; n && n !== e && n !== document.body; )
    s++, n = n.parentNode;
  return n !== e ? 1 / 0 : s;
}, ft = (t, e) => {
  if (t === e)
    return t;
  const s = /* @__PURE__ */ new Set();
  let n = t;
  for (; n; )
    s.add(n), n = n.parentElement;
  for (n = e; n; ) {
    if (s.has(n))
      return n;
    n = n.parentElement;
  }
  return document.documentElement;
}, Ht = (t, e, s = 1 / 0) => {
  let n = null, o = 1 / 0;
  for (const a of e) {
    const c = ft(t, a);
    if (c === document.body || c === document.documentElement)
      continue;
    const l = dt(t, c);
    l > s || l < o && (n = a, o = l);
  }
  return n;
}, J = () => {
  const t = document.currentScript;
  return t ? t.src.includes("kaching-bundles-dev") : !1;
}, H = (t, e = {}) => {
  const s = window.Shopify.routes, o = (s && s.root || "/") + t, a = new URLSearchParams();
  for (const [l, f] of Object.entries(e))
    a.append(l, f);
  const c = a.toString();
  return c ? `${o}?${c}` : o;
}, Wt = (t, e) => {
  new MutationObserver((n, o) => {
    for (const a of n)
      a.type === "childList" && a.removedNodes.forEach((c) => {
        c.contains(t) && (o.disconnect(), e());
      });
  }).observe(document.body, { childList: !0, subtree: !0 });
}, Xt = (t, e = 300, s = 100) => {
  let n = 0;
  const o = () => {
    window.Shopify.analytics ? t() : n < e ? (n++, setTimeout(o, s)) : at(
      "shopify_analytics_missing",
      {
        userAgent: navigator.userAgent
      },
      { sampleRate: 0.1 }
    );
  };
  o();
}, pt = async (t, {
  useExternalMetafieldNamespace: e,
  useMetaobjects: s
}) => s ? yt(
  t
) : ht(t), ht = async (t, e) => {
  var n;
  const s = (n = (await t.query(
    `
      query FetchDealBlocks($metafieldNamespace: String!) {
        shop {
          metafield(namespace: $metafieldNamespace, key: "deal_blocks") {
            value
          }
        }
      }
    `,
    {
      variables: {
        metafieldNamespace: "$app:kaching_bundles"
      }
    }
  )).shop.metafield) == null ? void 0 : n.value;
  return s ? JSON.parse(s) : [];
}, yt = async (t, e) => {
  const s = "$app:deal_block", n = [];
  let o = null;
  for (; ; ) {
    const a = await t.query(
      `
        query FetchDealBlockMetaobjects($type: String!, $cursor: String) {
          metaobjects(type: $type, first: 250, after: $cursor) {
            nodes {
              fields {
                key
                value
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      `,
      {
        variables: {
          type: s,
          cursor: o
        }
      }
    );
    for (const c of a.metaobjects.nodes) {
      const l = c.fields.find(
        (f) => f.key === "settings"
      );
      l != null && l.value && n.push(JSON.parse(l.value));
    }
    if (!a.metaobjects.pageInfo.hasNextPage)
      break;
    o = a.metaobjects.pageInfo.endCursor;
  }
  return n;
};
class mt {
  constructor(e, s) {
    this.storefrontApiVersion = "2026-01", this.storefrontAccessToken = s, this.shopifyDomain = e;
  }
  async query(e, s) {
    var l, f;
    const n = (l = s == null ? void 0 : s.variables) != null ? l : {};
    let o = `https://${this.shopifyDomain}/api/${this.storefrontApiVersion}/graphql.json`;
    const a = (f = e.match(/query\s+(\w+)/)) == null ? void 0 : f[1];
    a && (o += `?operation_name=${a}`);
    const c = await (await fetch(o, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": this.storefrontAccessToken
      },
      body: JSON.stringify({
        query: e,
        variables: n
      })
    })).text();
    if (!c)
      throw new Error("Empty graphql response");
    return JSON.parse(c).data;
  }
}
var h = /* @__PURE__ */ ((t) => (t.QuantityBreak = "quantity-break", t.Bxgy = "bxgy", t.Bundle = "bundle", t.MixAndMatch = "mix-and-match", t.Sku = "sku", t))(h || {});
class W extends Error {
  constructor(e) {
    super(e), this.name = "CartFetchError";
  }
}
const P = "kaching_session_id", Yt = async () => {
  try {
    gt();
    const t = X();
    await wt() !== t && await vt(t);
  } catch (t) {
    if (t instanceof W)
      console.error(t);
    else
      throw t;
  }
}, gt = () => {
  const t = new URL(window.location.href), e = new URLSearchParams(t.search), s = e.get("preview_kaching_session_id");
  s && (v.setItem(P, s), e.delete("preview_kaching_session_id"), t.search = e.toString(), window.history.replaceState({}, "", t.toString()));
}, X = () => v.getItem(P) || It(), It = () => {
  const t = St();
  return v.setItem(P, t), t;
}, St = () => typeof crypto != "undefined" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : bt(), bt = () => "10000000-1000-4000-8000-100000000000".replace(
  /[018]/g,
  (t) => (+t ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +t / 4).toString(16)
), wt = async () => {
  const t = await fetch(H("cart.js"));
  if (!t.ok)
    throw new W("Failed to fetch cart");
  return (await t.json()).attributes._kaching_session_id;
}, vt = async (t) => await fetch(H("cart/update.js"), {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    attributes: {
      _kaching_session_id: t
    }
  })
}), Q = 256, _ = 100, Dt = (t, e) => {
  const s = kt(e), n = t.abTestVariantRange;
  return n ? s >= n[0] && s < n[1] : Et(t, s);
}, kt = (t) => {
  const e = parseInt(t.replace(/-/g, "").slice(0, 4), 16) % Q;
  return Math.floor(e * _ / Q);
}, Et = (t, e) => {
  const { abTestVariantNumber: s, abTestVariantsCount: n, abTestTrafficAllocation: o } = t;
  return !s || !n ? !1 : s === Gt(e, n, o);
}, Gt = (t, e, s) => {
  if (!s)
    return Math.min(
      Math.floor(t / (_ / e)) + 1,
      e
    );
  const n = _ - s;
  if (t < n) return 1;
  const o = e - 1;
  if (o === 0) return 1;
  const a = s / o;
  return Math.min(
    Math.floor((t - n) / a) + 2,
    e
  );
};
let y, b = null, Y, Z = [];
const Zt = (t) => {
  Z = t;
}, At = async () => {
  if (b)
    return b;
  b = (async () => {
    if (!y.storefrontAccessToken)
      return;
    const t = new mt(
      y.shopifyDomain,
      y.storefrontAccessToken
    );
    Y = await pt(t, {
      useExternalMetafieldNamespace: !1,
      useMetaobjects: y.featureFlags.storefront_metaobjects
    });
  })();
  try {
    await b;
  } catch (t) {
    throw b = null, t;
  }
}, Nt = async () => {
  var s;
  await At();
  const t = Y.filter((n) => n.abTestVariantId ? Dt(n, X()) : !0), e = (s = Z.find(
    (n) => n.locale === y.locale
  )) == null ? void 0 : s.translations;
  return t.map((n) => {
    const o = (e == null ? void 0 : e.dealBlocks[n.id]) || {};
    return Tt(n, o);
  });
}, Tt = (t, e) => {
  var q, M, C, F, U, x, L, z;
  const s = /* @__PURE__ */ new Map();
  for (const r of (q = t.defaultVariantsV2) != null ? q : []) {
    const i = [
      ...new Set(
        r.variantGIDs.filter((I) => I !== null).map(p)
      )
    ];
    if (i.length === 0)
      continue;
    const u = (M = s.get(r.dealBarId)) != null ? M : [];
    u.push({
      productId: p(r.productGID),
      variantIds: i
    }), s.set(r.dealBarId, u);
  }
  const n = (r) => {
    switch (r.dealBarType) {
      case void 0:
      case h.QuantityBreak:
        return o(r);
      case h.Bxgy:
        return a(r);
      case h.Bundle:
        return c(r);
      case h.Sku:
        return l(r);
      default:
        return null;
    }
  }, o = (r) => {
    var i;
    return {
      id: r.id,
      title: e[r.title] || r.title,
      mediaImageGID: r.mediaImageGID,
      defaultVariants: (i = s.get(r.id)) != null ? i : null,
      freeGifts: [
        ...m(r.freeGifts),
        ...g(r.id, t.progressiveGifts)
      ],
      upsells: E(r.upsells),
      dealBarType: h.QuantityBreak,
      quantity: Number(r.quantity),
      discount: w(r.discountType, r.discountValue)
    };
  }, a = (r) => {
    var i;
    return {
      id: r.id,
      title: e[r.title] || r.title,
      mediaImageGID: r.mediaImageGID,
      defaultVariants: (i = s.get(r.id)) != null ? i : null,
      freeGifts: [
        ...m(r.freeGifts),
        ...g(r.id, t.progressiveGifts)
      ],
      upsells: E(r.upsells),
      dealBarType: h.Bxgy,
      buyQuantity: Number(r.buyQuantity),
      buyDiscount: w(
        r.buyDiscountType,
        r.buyDiscountValue
      ),
      getQuantity: Number(r.getQuantity),
      getDiscount: w(
        r.getDiscountType,
        r.getDiscountValue
      )
    };
  }, c = (r) => {
    var i;
    return {
      id: r.id,
      title: e[r.title] || r.title,
      mediaImageGID: r.mediaImageGID,
      defaultVariants: (i = s.get(r.id)) != null ? i : null,
      freeGifts: [
        ...m(r.freeGifts),
        ...g(r.id, t.progressiveGifts)
      ],
      upsells: E(r.upsells),
      dealBarType: h.Bundle,
      bundleProducts: f(r.bundleProducts)
    };
  }, l = (r) => {
    var i;
    return {
      id: r.id,
      title: e[r.title] || r.title,
      mediaImageGID: r.mediaImageGID,
      defaultVariants: (i = s.get(r.id)) != null ? i : null,
      freeGifts: [
        ...m(r.freeGifts),
        ...g(r.id, t.progressiveGifts)
      ],
      upsells: E(r.upsells),
      dealBarType: h.Sku
    };
  }, f = (r) => r.map((i) => {
    var u;
    return {
      id: i.id,
      productId: i.productGID === "default" ? "default" : p(i.productGID),
      variantId: i.variantGIDs && ((u = i.variantGIDs) != null && u[0]) ? p(i.variantGIDs[0]) : null,
      variantIds: i.variantGIDs ? i.variantGIDs.map(p) : null,
      quantity: Number(i.quantity),
      discount: w(
        i.discountType,
        i.discountValue
      )
    };
  }), m = (r) => r ? r.filter((u) => u.productGID).map((u) => {
    var I, d, S;
    return {
      id: u.id,
      productId: p(u.productGID),
      variantId: u.variantGIDs && ((I = u.variantGIDs) != null && I[0]) ? p(u.variantGIDs[0]) : null,
      variantIds: u.variantGIDs ? u.variantGIDs.map(p) : null,
      mediaImageGID: (d = u.mediaImageGID) != null ? d : null,
      quantity: Number(u.quantity),
      applyOnlyForSubscriptions: (S = u.applyOnlyForSubscriptions) != null ? S : !1
    };
  }) : [], g = (r, i) => {
    if (!i)
      return [];
    const u = t.dealBars.findIndex((d) => d.id === r) + 1;
    return i.gifts.filter(
      (d) => d.giftType === "product" && d.productGID && Ot(d, u)
    ).map((d) => {
      var S, K, $;
      return {
        id: d.id,
        productId: p(d.productGID),
        variantId: d.variantGIDs && ((S = d.variantGIDs) != null && S[0]) ? p(d.variantGIDs[0]) : null,
        variantIds: d.variantGIDs ? d.variantGIDs.map(p) : null,
        mediaImageGID: (K = d.mediaImageGID) != null ? K : null,
        quantity: Number(d.quantity),
        applyOnlyForSubscriptions: ($ = d.applyOnlyForSubscriptions) != null ? $ : !1
      };
    });
  }, E = (r) => r ? r.map((i) => {
    var u;
    return {
      id: i.id,
      productId: i.productGID ? p(i.productGID) : null,
      variantId: i.variantGIDs && i.variantGIDs[0] ? p(i.variantGIDs[0]) : null,
      variantIds: i.variantGIDs ? i.variantGIDs.map(p) : null,
      mediaImageGID: (u = i.mediaImageGID) != null ? u : null,
      quantity: Number(i.quantity),
      discount: w(i.discountType, i.discountValue)
    };
  }) : [];
  return {
    id: t.id,
    nanoId: t.nanoId,
    discountName: (C = t.discountName) != null ? C : null,
    collectionBreaksEnabled: (F = t.collectionBreaksEnabled) != null ? F : !1,
    collectionBreaksDealProducts: !!t.collectionBreaksEnabled && ((U = t.collectionBreaks) == null ? void 0 : U.visibility) === "deal-products",
    differentVariantsEnabled: t.differentVariantsEnabled,
    marketId: (x = t.marketId) != null ? x : null,
    excludedMarketIds: (L = t.excludedMarketIds) != null ? L : null,
    currency: (z = t.currency) != null ? z : null,
    dealBars: t.dealBars.filter((r) => "showAsSoldOutEnabled" in r ? !r.showAsSoldOutEnabled : !0).map(n).filter((r) => r !== null)
  };
}, Ot = (t, e) => t.unlockAtBarOnly ? e === t.unlockAtBar : e >= t.unlockAtBar, w = (t, e) => !t || t === "default" ? null : {
  type: t,
  value: Number(e)
}, p = (t) => typeof t == "number" ? t : Number(t.split("/").pop()), Bt = (t) => (y = t, {
  fetchDeals: Nt
});
export {
  Dt as A,
  Zt as B,
  Kt as C,
  Vt as D,
  Ct as E,
  h as F,
  jt as G,
  Bt as H,
  At as I,
  qt as J,
  H as a,
  Rt as b,
  lt as c,
  k as d,
  Mt as e,
  $t as f,
  X as g,
  mt as h,
  Ft as i,
  Ut as j,
  Lt as k,
  R as l,
  zt as m,
  Ht as n,
  xt as o,
  Wt as p,
  ut as q,
  D as r,
  at as s,
  j as t,
  Yt as u,
  Qt as v,
  Xt as w,
  Jt as x,
  Pt as y,
  pt as z
};
