(function () {
  const CSS_URL =
    "https://cdn.shopify.com/s/files/1/0580/0486/5118/files/upsellkit.css?v=1763712852";
  const JS_URL =
    "https://cdn.shopify.com/s/files/1/0580/0486/5118/files/upsellkit.js?v=1787804509";

  // 1. Load CSS asynchronously
  function loadCSS(url) {
    return new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;

      link.onload = () => resolve();
      link.onerror = () => reject(`Failed to load CSS: ${url}`);

      document.head.appendChild(link);
    });
  }

  // 2. Load JS after CSS is ready
  function loadJS(url) {
    const script = document.createElement("script");
    script.type = "module";
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
  }

  // 3. Chain the load sequence
  loadCSS(CSS_URL)
    .then(() => {
      loadJS(JS_URL);
    })
    .catch((err) => {
      console.error(err);
      // Optionally still load JS
      loadJS(JS_URL);
    });
})();
