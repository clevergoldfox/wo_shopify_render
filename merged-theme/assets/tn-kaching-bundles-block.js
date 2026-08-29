(function() {
  try {
    if (typeof document != "undefined") {
      var Rt = document.createElement("style");
      Rt.id = "kaching-bundles-styles", Rt.appendChild(document.createTextNode(`.kaching-bundles .kaching-bundles__multiple-gifts-selector{position:relative}.kaching-bundles .kaching-bundles__multiple-gifts-selector__clickable-overlay{position:absolute;inset:0;cursor:pointer}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photos{position:relative;display:flex;align-items:center;flex-shrink:0;padding-block:2px}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photo{box-sizing:border-box;width:40px;height:40px;-o-object-fit:cover;object-fit:cover;background-color:#fff;border-radius:8px;border:1px solid var(--kaching-free-gift-background-color, #fff)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__multiple-gifts-selector__photo{border-color:var(--kaching-free-gift-selected-background-color, #000)}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photo:not(:first-child){margin-inline-start:-16px}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photo-count{box-sizing:border-box;position:absolute;top:0;inset-inline-end:0;transform:translate(18%,-3%);display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;border:1px solid var(--kaching-free-gift-text-color, #000);background-color:var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3));color:var(--kaching-free-gift-text-color, #000);font-size:calc(var(--kaching-free-gift-font-size, 13px) - 2px);font-weight:var(--kaching-free-gift-font-weight, bold);line-height:1}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__multiple-gifts-selector__photo-count{border-color:var(--kaching-free-gift-selected-text-color, #fff);background-color:var(--kaching-free-gift-selected-background-color, #000);color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__bundle-products{display:flex;justify-content:space-evenly;margin-top:12px;margin-bottom:4px;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:calc(var(--bar-border-radius, 0) * 3 / 4)}.kaching-bundles .kaching-bundles__bundle-products .kaching-bundles__bar-variant-selects{justify-content:center}.kaching-bundles .kaching-bundles__bundle-products__divider{display:flex;flex-direction:column;align-items:center;width:0;overflow:visible}.kaching-bundles .kaching-bundles__bundle-products__divider *{max-width:initial}.kaching-bundles .kaching-bundles__bundle-products__divider-line{display:flex;flex:1;width:1px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bundle-products__divider-icon{display:flex}.kaching-bundles .kaching-bundles__bundle-products__divider-icon svg{color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bundle-products__product{display:flex;flex:1;flex-direction:column;align-items:center;min-width:0;gap:5px;padding:12px}.kaching-bundles .kaching-bundles__bundle-products__product.kaching-bundles__bundle-products__product--placeholder{justify-content:center;text-align:center;font-size:13px;font-weight:700;color:#555}.kaching-bundles .kaching-bundles__bundle-products__wrapper{display:flex;align-items:center;gap:10px;min-width:0}.kaching-bundles .kaching-bundles__bundle-products__content{display:flex;flex-direction:column;align-items:flex-start;min-width:0}.kaching-bundles .kaching-bundles__bundle-products__link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__bundle-products__image{flex-shrink:0;height:50px;width:auto;max-width:100%;border-radius:var(--kaching-bundle-products-image-border-radius, 0)}.kaching-bundles .kaching-bundles__bundle-products__image-placeholder{flex-shrink:0;height:50px;width:50px}.kaching-bundles .kaching-bundles__bundle-products__title{overflow-wrap:break-word;text-align:center;font-size:13px;color:var(--bar-title-color);font-weight:var(--bar-title-font-weight, 700);font-style:var(--bar-title-font-style)}.kaching-bundles .kaching-bundles__bundle-products__pricing{display:flex;flex-shrink:0;flex-wrap:wrap;justify-content:center;align-items:baseline;gap:5px}.kaching-bundles .kaching-bundles__bundle-products__price{font-size:13px;font-weight:700;color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__bundle-products__full-price{text-decoration:line-through;font-size:12px;color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__bundle-products__unit-price{width:100%;text-align:center;font-size:12px;color:var(--bar-full-price-color, #555);text-transform:uppercase}.kaching-bundles .kaching-bundles__bundle-products--hidden{display:none}.kaching-bundles .kaching-bundles__bundle-products--vertical{flex-direction:column}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__divider{flex-direction:row;width:100%;height:0}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__divider-line{width:auto;height:1px}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__product{flex-direction:row;justify-content:space-between;padding:14px 12px}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__pricing{flex-direction:column;align-items:flex-end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__pricing--with-unit-price{flex-flow:row wrap;justify-content:flex-end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__unit-price{text-align:end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__title{text-align:start}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__image{width:50px;height:auto;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bar-variant-selects{justify-content:flex-start}.kaching-bundles .kaching-bundles__mix-and-match-products{display:flex;flex-direction:column;margin-top:12px;margin-bottom:4px;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:calc(var(--bar-border-radius, 0) * 3 / 4);overflow:hidden}.kaching-bundles .kaching-bundles__mix-and-match-products--hidden{display:none}.kaching-bundles .kaching-bundles__mix-and-match-products__divider{display:flex;flex-direction:row;align-items:center;gap:4px;width:100%;height:0;overflow:visible}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-line{display:flex;flex:1;width:auto;height:1px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-icon{display:flex}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-icon svg{color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__mix-and-match-product{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;gap:12px;align-items:center;padding:12px}.kaching-bundles .kaching-bundles__mix-and-match-product__content{display:flex;flex-direction:column;gap:6px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-product__pricing{display:flex;justify-content:flex-end}.kaching-bundles .kaching-bundles__mix-and-match-product__pricing .kaching-bundles__bundle-products__pricing{flex-direction:column;align-items:flex-end;gap:0}.kaching-bundles .kaching-bundles__mix-and-match-product__image-link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-product__image{flex-shrink:0;height:50px;width:auto;max-width:100%;border-radius:var(--kaching-bundle-products-image-border-radius, 0)}.kaching-bundles .kaching-bundles__mix-and-match-product__image-placeholder{height:50px;width:50px}.kaching-bundles .kaching-bundles__mix-and-match-product__title-link{align-self:flex-start;text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-product__title{overflow-wrap:break-word;text-align:start;font-size:13px;color:var(--bar-title-color);font-weight:var(--bar-title-font-weight, 700);font-style:var(--bar-title-font-style)}.kaching-bundles .kaching-bundles__mix-and-match-product__swap-button{display:inline-flex;align-items:center;justify-content:center;padding:8px 12px;border-radius:var(--bar-border-radius, 8px);background-color:var(--collection-product-button-color, #2b2b2b);color:var(--collection-product-button-text-color, #ffffff);font-size:13px;line-height:1.2;text-align:center;cursor:pointer;white-space:nowrap}.kaching-bundles .kaching-bundles__mix-and-match-products__placeholder{display:flex;align-items:center;justify-content:center;padding:14px 12px;color:#0006;font-style:italic}.kaching-bundles .kaching-bundles__checkbox-upsells__upsell .kaching-bundles__bar-main{gap:10px}.kaching-bundles .kaching-bundles__checkbox-upsells__upsell .kaching-bundles__selling-plan-select{margin-top:5px}.kaching-bundles .kaching-bundles__checkbox-upsells__checkbox{all:unset;display:flex;flex-shrink:0;width:20px;height:20px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__checkbox-upsells__checkbox.kaching-bundles__checkbox-upsells__checkbox--selected{border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__checkbox-upsells__image{width:initial;max-width:50px;max-height:50px;border-radius:calc(var(--bar-border-radius, 0) / 2)}.kaching-bundles .kaching-bundles__choose-multiple-gifts-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;justify-content:center;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-choose-multiple-gifts-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__choose-multiple-gifts-modal__content{position:relative;z-index:10000;min-width:min(470px,95%);max-width:700px;max-height:calc(100dvh - 20px);width:100%;display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__choose-multiple-gifts{display:flex;flex-direction:column;border-radius:10px;background-color:#fff;max-height:100%;overflow:hidden}.kaching-bundles .kaching-bundles__choose-multiple-gifts__header{display:flex;align-items:center;justify-content:space-between;padding:16px 16px 0;margin-block:2px 18px;color:var(--kaching-choose-multiple-gifts-text-color, #000);flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-multiple-gifts__products{display:flex;flex-direction:column;gap:16px;padding:0 16px;flex:1;overflow-y:auto;min-height:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{display:flex;align-items:center;justify-content:space-between;gap:20px}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{gap:12px}}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{flex-direction:column;align-items:stretch;gap:12px}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-container{display:flex;align-items:center;gap:12px;min-width:0;flex:1}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-container{gap:8px}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-choose-multiple-gifts-photo-size, 100px);max-height:calc(var(--kaching-choose-multiple-gifts-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-choose-multiple-gifts-text-size, 14px);color:var(--kaching-choose-multiple-gifts-text-color, #000)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selectors{display:flex;flex-direction:column;gap:8px;margin-top:8px;min-width:0;max-width:100%}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-row{display:flex;align-items:flex-start;gap:8px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-counter{display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:24px;height:24px;font-size:12px;color:#000}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-content{flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-with-counter{display:flex;align-items:center;gap:8px;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-wrapper{flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__subtitle{font-size:14px;font-weight:400;color:var(--kaching-choose-multiple-gifts-text-color, #000)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-price{font-size:14px;font-weight:650;color:var(--kaching-choose-multiple-gifts-price-color, #f04438)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-choose-multiple-gifts-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;display:flex;justify-content:center;align-items:center;border:none;font-weight:600;padding:10px 12px;line-height:1.4;border-radius:8px;cursor:pointer;font-size:var(--kaching-choose-multiple-gifts-button-size, 16px);background-color:var(--kaching-choose-multiple-gifts-button-color, #7f56d9);color:var(--kaching-choose-multiple-gifts-button-text-color, #fff)}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button{flex:1}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button--disabled{background-color:#eaecf0;color:#98a2b3;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button--selected{display:flex;align-items:center;gap:8px;background-color:#fff;color:#414651;border:1px solid #d5d7da}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px;margin-top:16px;padding:16px;border-top:1px solid #e5e5e3;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-text{font-size:14px;font-weight:400;color:#535862;flex:1;min-width:0;overflow-wrap:break-word}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-buttons{display:flex;gap:8px;flex:1;min-width:0;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;height:40px;min-width:80px;font-size:14px;font-weight:600;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:1;box-shadow:0 1px 2px #0a0d120d}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--cancel{background-color:#fff;border:1px solid #d5d7da;color:#414651}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--confirm{background-color:#000;color:#fff}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--confirm:disabled{background-color:#eaecf0;border:1px solid #e9eaeb;color:#98a2b3;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{display:flex;align-items:center;gap:12px;flex-shrink:0}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{gap:8px}}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{flex-direction:row-reverse;justify-content:space-between;flex-shrink:1}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity{display:flex;align-items:center;justify-content:space-between;width:72px;height:42px;border:1px solid #d6d6d6;border-radius:8px;overflow:hidden}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button{all:unset;display:flex;align-items:center;justify-content:center;width:28px;height:100%;cursor:pointer;color:#424242}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button[aria-disabled=true]{opacity:.4;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button img{filter:brightness(0) saturate(100%) invert(24%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(96%) contrast(89%)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-value{font-size:14px;font-weight:600;color:#414651}body:has(.kaching-bundles__choose-multiple-gifts-modal){overflow:hidden}.kaching-bundles .kaching-bundles__mix-and-match-choose-product-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-mix-and-match-choose-product-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__mix-and-match-choose-product-modal__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__mix-and-match-choose-product{display:flex;flex-direction:column;padding:16px;border-radius:10px;background-color:#fff}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__header{display:flex;align-items:center;justify-content:space-between;margin-block:2px 18px;color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__products{display:flex;flex-direction:column;gap:16px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__empty-state{display:flex;flex-direction:column;align-items:center;text-align:center;color:#4b5565}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product{display:flex;align-items:center;justify-content:space-between;gap:20px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-container{display:flex;align-items:center;gap:12px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-mix-and-match-choose-product-photo-size, 100px);max-height:calc(var(--kaching-mix-and-match-choose-product-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-mix-and-match-choose-product-text-size, 14px);color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__subtitle{font-size:14px;font-weight:400;color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-price{font-size:14px;font-weight:650;color:var(--kaching-mix-and-match-choose-product-price-color, #f04438)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-mix-and-match-choose-product-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-option-names.kaching-bundles__bar-variant-names{color:inherit;margin-block:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;border:none;font-weight:600;padding:12px;line-height:1.2;border-radius:8px;cursor:pointer;font-size:var(--kaching-mix-and-match-choose-product-button-size, 16px);background-color:var(--kaching-mix-and-match-choose-product-button-color, #7f56d9);color:var(--kaching-mix-and-match-choose-product-button-text-color, #fff)}body:has(.kaching-bundles__mix-and-match-choose-product-modal){overflow:hidden}.kaching-bundles .kaching-bundles__bar-collection-products{display:flex;flex-direction:column;gap:5px;margin-top:5px}.kaching-bundles .kaching-bundles__collection-product{display:flex;gap:16px;align-items:center;justify-content:space-between}.kaching-bundles .kaching-bundles__collection-product .kaching-bundles__bar-variant-names{display:none;margin-block:0}.kaching-bundles .kaching-bundles__collection-product__image--default{background-color:#fff;border:1px solid #e9e9e9;color:#000}.kaching-bundles .kaching-bundles__collection-product--require-selection{padding:8px;border-radius:12px;background-color:var(--kaching-collection-breaks-require-selection-background-color)}.kaching-bundles .kaching-bundles__collection-product--require-selection .kaching-bundles__collection-product__image--default{border-color:var(--kaching-collection-breaks-require-selection-text-color);color:var(--kaching-collection-breaks-require-selection-text-color)}.kaching-bundles .kaching-bundles__collection-breaks-alert{display:flex;align-items:center;gap:8px;margin-top:10px;padding:8px 12px;border-radius:12px;font-size:12px;background-color:var(--kaching-collection-breaks-require-selection-background-color, rgb(254, 228, 226));color:var(--kaching-collection-breaks-require-selection-text-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__collection-breaks-alert__icon{flex-shrink:0;width:16px;height:16px}.kaching-bundles .kaching-bundles__collection-product__main{display:flex;gap:16px;align-items:center;min-width:0}.kaching-bundles .kaching-bundles__collection-product__content{display:flex;flex-direction:column;gap:3px;min-width:0}.kaching-bundles .kaching-bundles__collection-product__link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__collection-product__image{flex-shrink:0;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-collection-breaks-product-photo-size, 40px);border-radius:var(--kaching-collection-breaks-image-border-radius, 0)}.kaching-bundles .kaching-bundles__collection-product__title{font-size:16px;color:var(--kaching-collection-breaks-product-title-color, #000)}.kaching-bundles .kaching-bundles__collection-product__choose-product-image{cursor:pointer;line-height:0}.kaching-bundles .kaching-bundles__collection-product__choose-product-button{cursor:pointer;color:#fff;font-size:12px;line-height:1.4;padding:6px 14px;border-radius:8px;background-color:var(--kaching-collection-breaks-button-color, #333)}.kaching-bundles .kaching-bundles__collection-product__remove-button{display:flex;align-items:center;justify-content:center;height:24px;width:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-choose-product-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__choose-product-modal__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__choose-product{display:flex;flex-direction:column;padding:16px;border-radius:10px;background-color:#fff}.kaching-bundles .kaching-bundles__choose-product__header{display:flex;align-items:center;justify-content:space-between;margin-block:2px 18px;color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__choose-product__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__products{display:flex;flex-direction:column;gap:16px}.kaching-bundles .kaching-bundles__choose-product__controls{display:flex;align-items:center;gap:10px;margin-bottom:14px}.kaching-bundles .kaching-bundles__choose-product__search-field{position:relative;flex:1 1 auto;min-width:0}.kaching-bundles .kaching-bundles__choose-product__search-icon{position:absolute;top:50%;left:12px;transform:translateY(-50%);width:16px;height:16px;pointer-events:none}.kaching-bundles .kaching-bundles__choose-product__search-input{box-sizing:border-box;width:100%;padding:10px 12px 10px 36px;border:1px solid #d5d7da;border-radius:8px;font-size:14px;color:var(--kaching-choose-product-text-color, #000);background-color:#fff}.kaching-bundles .kaching-bundles__choose-product__sort{position:relative;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-product__sort-button{display:inline-flex;align-items:center;gap:8px;padding:10px 12px;border:1px solid #d5d7da;border-radius:8px;background:#fff;color:var(--kaching-choose-product-text-color, #000);font-size:14px;line-height:1;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__sort-icon{width:16px;height:16px;display:block}.kaching-bundles .kaching-bundles__choose-product__sort-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:2;min-width:210px;display:flex;flex-direction:column;border:1px solid #d5d7da;border-radius:10px;background:#fff;box-shadow:0 8px 24px #10182824;overflow:hidden}.kaching-bundles .kaching-bundles__choose-product__sort-option{display:flex;align-items:center;justify-content:space-between;gap:12px;border:none;background:#fff;text-align:start;padding:10px 12px;font-size:14px;color:var(--kaching-choose-product-text-color, #000);cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__sort-option-check{flex-shrink:0;width:16px;height:16px;display:block}.kaching-bundles .kaching-bundles__choose-product__sort-option:hover{background:#f8fafc}.kaching-bundles .kaching-bundles__choose-product__empty-state{display:flex;flex-direction:column;align-items:center;text-align:center;color:#4b5565}.kaching-bundles .kaching-bundles__choose-product__empty-state-icon-wrapper{display:flex;align-items:center;justify-content:center;width:48px;height:48px;margin-bottom:16px}.kaching-bundles .kaching-bundles__choose-product__empty-state-icon{width:48px;height:48px}.kaching-bundles .kaching-bundles__choose-product__empty-state-title{font-size:18px;font-weight:500;color:#181d27}.kaching-bundles .kaching-bundles__choose-product__empty-state-description{margin-top:8px;font-size:14px;color:#535862}.kaching-bundles .kaching-bundles__choose-product__empty-state-clear-button{margin-top:16px;padding:10px 16px;border:1px solid #d5d7da;border-radius:8px;background:#fff;color:#414651;font-size:14px;font-weight:600}.kaching-bundles .kaching-bundles__choose-product__product{display:flex;align-items:center;justify-content:space-between;gap:20px}.kaching-bundles .kaching-bundles__choose-product__product-container{display:flex;align-items:center;gap:12px;min-width:0}.kaching-bundles .kaching-bundles__choose-product__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-product__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-choose-product-photo-size, 100px);max-height:calc(var(--kaching-choose-product-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__choose-product__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__choose-product__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__choose-product__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-choose-product-text-size, 14px);color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__subtitle{font-size:14px;font-weight:400;color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__choose-product__product-price{font-size:14px;font-weight:650;color:var(--kaching-choose-product-price-color, #f04438)}.kaching-bundles .kaching-bundles__choose-product__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-choose-product-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__choose-product__product-option-names.kaching-bundles__bar-variant-names{color:inherit;margin-block:0}.kaching-bundles .kaching-bundles__choose-product__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;border:none;font-weight:600;padding:12px;line-height:1.2;border-radius:8px;cursor:pointer;font-size:var(--kaching-choose-product-button-size, 16px);background-color:var(--kaching-choose-product-button-color, #7f56d9);color:var(--kaching-choose-product-button-text-color, #fff)}body:has(.kaching-bundles__choose-product-modal){overflow:hidden}.kaching-bundles .kaching-bundles__free-gift{display:flex;align-items:center;justify-content:space-between;margin-inline:1px;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);gap:5px 10px;background-color:var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__free-gift:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__free-gift.kaching-bundles__free-gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__free-gift__link{pointer-events:none}.kaching-bundles .kaching-bundles__free-gift__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__free-gift__main:has(.kaching-bundles__swatch-buttons){overflow-x:auto}.kaching-bundles .kaching-bundles__free-gift__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__free-gift__content--clickable{cursor:pointer}.kaching-bundles .kaching-bundles__free-gift__add-button{all:unset;display:flex;cursor:pointer;line-height:0;padding:4px;margin:-4px -4px -4px -6px;color:var(--kaching-free-gift-text-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__add-button{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__text{color:var(--kaching-free-gift-text-color, #000);font-size:var(--kaching-free-gift-font-size, 13px);font-weight:var(--kaching-free-gift-font-weight, bold);font-style:var(--kaching-free-gift-font-style, normal)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__text{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-free-gift-image-height, 30px);border-radius:var(--kaching-free-gift-image-border-radius, 0)}.kaching-bundles .kaching-bundles__free-gift__full-price{flex-shrink:0;text-decoration:line-through;font-size:calc(var(--kaching-free-gift-font-size, 13px) - 1px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--kaching-free-gift-text-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__full-price{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__divider{height:1px;display:flex}.kaching-bundles .kaching-bundles__free-gift-summary{gap:8px;justify-content:flex-start}.kaching-bundles .kaching-bundles__free-gift-summary__images{display:flex;flex-shrink:0;align-items:center}.kaching-bundles .kaching-bundles__free-gift-summary__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-free-gift-image-height, 30px);border-radius:var(--kaching-free-gift-image-border-radius, 0);margin-inline-start:-8px;border:1px solid var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__free-gift-summary__image:first-child{margin-inline-start:0}.kaching-bundles .kaching-bundles__free-gift-summary__image--no-border{border-color:transparent}.kaching-bundles .kaching-bundles__upsell{display:flex;align-items:center;justify-content:space-between;position:relative;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);margin-inline:1px;gap:5px 10px;background-color:var(--kaching-upsell-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__upsell.kaching-bundles__upsell--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__upsell--badge-border-all{margin:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-top{margin-top:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-bottom{margin-bottom:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-left{min-height:var(--badge-border-min-length, auto);margin-left:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-right{min-height:var(--badge-border-min-length, auto);margin-right:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--all{inset:calc(-1 * var(--badge-border-thickness, 22px))}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--top{inset:calc(-1 * var(--badge-border-thickness, 22px)) 0 auto;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--bottom{inset:auto 0 calc(-1 * var(--badge-border-thickness, 22px));height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--left{inset:0 auto 0 calc(-1 * var(--badge-border-thickness, 22px));width:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--right{inset:0 calc(-1 * var(--badge-border-thickness, 22px)) 0 auto;width:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__upsell__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__upsell__link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__upsell__image{width:auto;height:var(--kaching-upsell-image-height, 30px);border-radius:var(--kaching-upsell-image-border-radius, 0)}.kaching-bundles .kaching-bundles__upsell__checkbox{all:unset;display:flex;flex-shrink:0;width:16px;height:16px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;margin-inline-end:4px;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell__checkbox.kaching-bundles__upsell__checkbox--selected{border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell__text{display:flex;min-height:30px;align-items:center;cursor:pointer;overflow-wrap:break-word;color:var(--kaching-upsell-text-color, #000);font-size:var(--kaching-upsell-font-size, 13px);font-weight:var(--kaching-upsell-font-weight, bold);font-style:var(--kaching-upsell-font-style, normal)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell__text{color:var(--kaching-upsell-selected-text-color, #000)}.kaching-bundles .kaching-bundles__upsell__pricing{align-items:flex-end;display:flex;flex-direction:column;flex-shrink:0}.kaching-bundles .kaching-bundles__upsell__pricing-row{display:flex;align-items:baseline;gap:6px}.kaching-bundles .kaching-bundles__upsell__price{font-size:var(--kaching-upsell-font-size, 13px);font-weight:var(--bar-title-font-weight);font-style:var(--bar-title-font-style);color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__upsell__pricing-row--secondary .kaching-bundles__upsell__price{font-size:calc(var(--kaching-upsell-font-size, 13px) - 1px)}.kaching-bundles .kaching-bundles__upsell__full-price,.kaching-bundles .kaching-bundles__upsell__unit-price{font-size:calc(var(--kaching-upsell-font-size, 13px) - 1px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__upsell__full-price{text-decoration:line-through}.kaching-bundles .kaching-bundles__upsell__unit-price{text-transform:uppercase}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__free-gift{flex-direction:column;padding-inline-end:8px}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__upsell{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__upsell__pricing{flex-direction:row;gap:5px;align-items:center}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-free-gift-selected-background-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-all .kaching-bundles__free-gift:last-child,.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__free-gift:last-child{margin-inline:0;margin-block-end:0;border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__free-gift:last-child{border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-upsell-selected-background-color, rgba(0, 0, 0, .2))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-all,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-left{margin-left:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-all,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-right{margin-right:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-all:last-child,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-bottom:last-child{margin-block-end:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gifts{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift{display:flex;align-items:center;justify-content:space-between;margin-inline:1px;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);gap:5px 10px;background-color:var(--bar-border-color, #fff)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__link{pointer-events:none}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__main:has(.kaching-bundles__swatch-buttons){overflow-x:auto}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-deal-bar-progressive-gift-image-size, 40px);border-radius:var(--kaching-deal-bar-progressive-gift-corner-radius, 0)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__image--locked-product{opacity:.4}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-text-color, #000);font-size:var(--kaching-deal-bar-progressive-gift-text-size, 14px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-selected-text-color, #fff);font-weight:500}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__labels{display:flex;align-items:center;gap:5px}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__label{background-color:var(--kaching-deal-bar-progressive-gift-label-background-color);color:var(--kaching-deal-bar-progressive-gift-label-text-color);font-size:var(--kaching-deal-bar-progressive-gift-label-text-size, 12px);padding:2px 8px;border-radius:16px;white-space:nowrap;font-weight:500}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__label-crossed-out{text-decoration:line-through}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__lock-icon{display:flex;align-items:center;justify-content:center;color:var(--kaching-deal-bar-progressive-gift-locked-icon-color, #667085)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__lock-icon svg{width:auto;height:100%}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--locked .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-locked-text-color, #555);font-size:var(--kaching-deal-bar-progressive-gift-locked-text-size, 14px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--locked .kaching-bundles__deal-bar-progressive-gift__label{background-color:var(--kaching-deal-bar-progressive-gift-locked-label-background-color);color:var(--kaching-deal-bar-progressive-gift-locked-label-text-color);font-size:var(--kaching-deal-bar-progressive-gift-locked-label-text-size, 12px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--bar-selected-border-color)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__product-personalisation{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;gap:10px;background-color:#fafafa;border-radius:calc(var(--bar-border-radius, 10px) - 4px);border:1px dashed #d6d6d6;margin-top:12px;cursor:pointer}.kaching-bundles .kaching-bundles__product-personalisation--filled{border-style:solid}.kaching-bundles .kaching-bundles__product-personalisation__main{display:flex;align-items:center;gap:10px;min-width:0;flex:1}.kaching-bundles .kaching-bundles__product-personalisation__image-wrapper{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--kaching-product-personalisation-image-height, 40px);height:var(--kaching-product-personalisation-image-height, 40px);background-color:#fff;border-radius:calc(var(--bar-border-radius, 10px) - 6px);border:1px solid #d6d6d6}.kaching-bundles .kaching-bundles__product-personalisation__image{display:flex;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.kaching-bundles .kaching-bundles__product-personalisation__image--default{width:70%;height:70%;-o-object-fit:contain;object-fit:contain;opacity:.7;color:#000}.kaching-bundles .kaching-bundles__product-personalisation__content{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}.kaching-bundles .kaching-bundles__product-personalisation__title{color:#000;font-size:14px;font-weight:600;font-style:normal}.kaching-bundles .kaching-bundles__product-personalisation__subtitle{color:#555;font-size:13px;font-weight:400;font-style:normal}.kaching-bundles .kaching-bundles__product-personalisation__pricing{display:flex;flex-direction:column;align-items:flex-end;flex-shrink:0;gap:2px}.kaching-bundles .kaching-bundles__product-personalisation__price{font-size:14px;font-weight:500;font-style:normal;color:#000}.kaching-bundles .kaching-bundles__product-personalisation__compare-at-price{font-size:12px;font-weight:400;font-style:normal;color:#888;line-height:1.2;text-decoration:line-through}.kaching-bundles .kaching-bundles__product-personalisation__price .kaching-bundles__product-personalisation__unit-label{font-size:calc(var(--kaching-bundles-unit-label-font-size, 14px) - 4px);font-weight:var(--kaching-bundles-unit-label-font-weight, normal);font-style:var(--kaching-bundles-unit-label-font-style, normal)}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation{flex-direction:column;align-items:stretch;text-align:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation__main{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation__pricing{flex-direction:row;justify-content:center;gap:8px;align-items:baseline}.kaching-bundles .kaching-bundles__personalisation-modal-overlay{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-product-personalisation-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__personalisation-modal-overlay--inline{position:relative;z-index:auto;inset:auto;padding:20px;border-radius:var(--kaching-product-personalisation-radius, 16px)}.kaching-bundles .kaching-bundles__personalisation-modal-overlay__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__personalisation-modal{display:flex;flex-direction:column;padding:var(--kaching-product-personalisation-gap-0, 20px);border-radius:var(--kaching-product-personalisation-radius, 16px);background-color:#fff}.kaching-bundles .kaching-bundles__personalisation-modal__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--kaching-product-personalisation-gap-0, 20px);color:var(--kaching-product-personalisation-primary-text-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__heading{margin:0;font-weight:650;font-size:var(--kaching-product-personalisation-font-0, 24px)}.kaching-bundles .kaching-bundles__personalisation-modal__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__personalisation-modal__items{display:flex;flex-direction:column;gap:var(--kaching-product-personalisation-gap-1, 16px);padding:var(--kaching-product-personalisation-gap-1, 16px);border:1px solid #e9e9e9;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px)}.kaching-bundles .kaching-bundles__personalisation-modal__item{display:flex;flex-direction:column;gap:var(--kaching-product-personalisation-gap-2, 12px)}.kaching-bundles .kaching-bundles__personalisation-modal__item-info{display:flex;align-items:center;gap:var(--kaching-product-personalisation-gap-2, 12px)}.kaching-bundles .kaching-bundles__personalisation-modal__item-image-wrapper{flex-shrink:0;width:var(--kaching-product-personalisation-image-size, 48px);height:var(--kaching-product-personalisation-image-size, 48px);border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);border:1px solid #e9e9e9;overflow:hidden}.kaching-bundles .kaching-bundles__personalisation-modal__item-image{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__personalisation-modal__item-details{display:flex;flex-direction:column;gap:2px;min-width:0}.kaching-bundles .kaching-bundles__personalisation-modal__item-title{font-size:var(--kaching-product-personalisation-text-size, 16px);font-weight:600;color:var(--kaching-product-personalisation-primary-text-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__item-variant{font-size:var(--kaching-product-personalisation-font-3, 12px);color:var(--kaching-product-personalisation-secondary-text-color, rgb(115, 115, 115))}.kaching-bundles .kaching-bundles__personalisation-modal__input-wrapper{display:flex;flex-direction:column;gap:4px}.kaching-bundles .kaching-bundles__personalisation-modal__input-container{position:relative;display:flex;align-items:center}.kaching-bundles .kaching-bundles__personalisation-modal__input-clear{all:unset;position:absolute;right:12px;display:flex;align-items:center;justify-content:center;width:16px;height:16px;cursor:pointer}.kaching-bundles .kaching-bundles__personalisation-modal__input{width:100%;padding:10px 12px;border:1px solid #e9e9e9;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);font-size:var(--kaching-product-personalisation-font-2, 16px);outline:none!important;box-shadow:none!important;box-sizing:border-box}.kaching-bundles .kaching-bundles__personalisation-modal__input:focus{border-color:#333;outline:none!important;box-shadow:none!important}.kaching-bundles .kaching-bundles__personalisation-modal__input:focus-visible{outline:2px solid #333!important;outline-offset:-1px}.kaching-bundles .kaching-bundles__personalisation-modal__input::-moz-placeholder{color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input::placeholder{color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input--with-clear{padding-right:40px}.kaching-bundles .kaching-bundles__personalisation-modal__input--error{border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input--error:focus{border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input-counter{font-size:var(--kaching-product-personalisation-font-3, 12px);color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input-counter--error{color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input-error{font-size:var(--kaching-product-personalisation-font-3, 12px);color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__actions{display:flex;gap:var(--kaching-product-personalisation-gap-1, 16px);margin-top:var(--kaching-product-personalisation-gap-0, 20px)}.kaching-bundles .kaching-bundles__personalisation-modal__button{flex:1;padding:12px 16px;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);font-size:var(--kaching-product-personalisation-font-2, 16px);font-weight:500;cursor:pointer;border:none;box-shadow:0 1px 2px #0a0d120d}.kaching-bundles .kaching-bundles__personalisation-modal__button--cancel{background:#fff;color:#333;border:1px solid #d5d7da}.kaching-bundles .kaching-bundles__personalisation-modal__button--confirm{color:var(--kaching-product-personalisation-button-text-color, rgb(255, 255, 255));border:1px solid var(--kaching-product-personalisation-button-color, rgb(0, 0, 0));background:var(--kaching-product-personalisation-button-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__button--disabled{cursor:not-allowed;border:1px solid #e9eaeb;background:#eaecf0;color:#98a2b3}.kaching-bundles .kaching-bundles__progressive-gifts{display:flex;flex-direction:column;gap:calc(10px * var(--block-spacing, 1) + 4px);margin-top:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__header{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__progressive-gifts__title{color:var(--kaching-bundles-progressive-gifts-title-color, #000);text-align:var(--kaching-bundles-progressive-gifts-title-alignment, center);font-weight:var(--kaching-bundles-progressive-gifts-title-weight, bold);font-style:var(--kaching-bundles-progressive-gifts-title-style, normal);font-size:var(--kaching-bundles-progressive-gifts-title-size, 20px)}.kaching-bundles .kaching-bundles__progressive-gifts__subtitle{color:var(--kaching-bundles-progressive-gifts-subtitle-color, #000);text-align:var(--kaching-bundles-progressive-gifts-subtitle-alignment, center);font-weight:var(--kaching-bundles-progressive-gifts-subtitle-weight, 450);font-style:var(--kaching-bundles-progressive-gifts-subtitle-style, normal);font-size:var(--kaching-bundles-progressive-gifts-subtitle-size, 16px)}.kaching-bundles .kaching-bundles__progressive-gifts__gifts{display:grid;grid-template-columns:repeat(auto-fit,minmax(0,1fr));justify-content:center;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gift{position:relative;display:flex;flex-direction:column;align-items:center;padding:calc(10px * var(--block-spacing, 1));gap:calc(6px * var(--block-spacing, 1));border-radius:var(--kaching-bundles-progressive-gifts-border-radius);background-color:var(--kaching-bundles-progressive-gifts-background-color);box-shadow:inset 0 0 0 2px var(--kaching-bundles-progressive-gifts-border-color, #000)}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked{background-color:var(--kaching-bundles-progressive-gifts-locked-background-color);box-shadow:inset 0 0 0 1px var(--kaching-bundles-progressive-gifts-locked-border-color, rgba(0, 0, 0, .3));cursor:pointer}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:hover,.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:focus{box-shadow:inset 0 0 0 2px var(--kaching-bundles-progressive-gifts-locked-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:focus{outline:none}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__progressive-gifts__gift__content{display:flex;flex-direction:column;max-width:100%;gap:calc(6px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image-wrapper{display:flex;flex-shrink:0;align-items:center;justify-content:center;height:var(--kaching-bundles-progressive-gifts-image-size, 100px);width:initial;max-width:100%;margin-top:max(0px,(100px - var(--kaching-bundles-progressive-gifts-image-size, 100px)) / 5);color:var(--kaching-bundles-progressive-gifts-locked-icon-color, #667085);border-radius:calc(var(--kaching-bundles-progressive-gifts-border-radius) / 2);background-color:transparent}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image-wrapper svg{width:auto;height:100%}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image{-o-object-fit:contain;object-fit:contain;max-height:100%;max-width:100%;border-radius:calc(var(--kaching-bundles-progressive-gifts-border-radius) / 2);width:initial}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image--locked-product{opacity:.4}.kaching-bundles .kaching-bundles__progressive-gifts__gift__details{display:flex;flex-direction:column;gap:4px;align-items:center;min-width:0}.kaching-bundles .kaching-bundles__progressive-gifts__gift__details__content{display:flex;align-items:center;gap:8px}.kaching-bundles .kaching-bundles__progressive-gifts__gift__title{font-weight:500;text-align:center;color:var(--kaching-bundles-progressive-gifts-text-color, #000);font-size:var(--kaching-bundles-progressive-gifts-text-size, 14px)}.kaching-bundles .kaching-bundles__progressive-gifts__gift__title.kaching-bundles__progressive-gifts__gift__title--locked{color:var(--kaching-bundles-progressive-gifts-locked-text-color, #555);font-size:var(--kaching-bundles-progressive-gifts-locked-text-size, 14px)}.kaching-bundles .kaching-bundles__progressive-gifts__gift:not(.kaching-bundles__progressive-gifts__gift--locked) .kaching-bundles__progressive-gifts__gift__image,.kaching-bundles .kaching-bundles__progressive-gifts__gift:not(.kaching-bundles__progressive-gifts__gift--locked) .kaching-bundles__progressive-gifts__gift__title{animation:kaching-progressive-gift-unlock .6s ease-out}@keyframes kaching-progressive-gift-unlock{0%{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label{display:flex;flex-direction:row;align-items:center;position:absolute;top:-8px;left:50%;transform:translate(-50%);line-height:1;gap:calc(5px * var(--block-spacing, 1));padding:calc(8px * var(--block-spacing, 1));background-color:var(--kaching-bundles-progressive-gifts-label-background-color, #eee);border-radius:var(--kaching-bundles-progressive-gifts-border-radius)}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label__text{font-weight:450;color:var(--kaching-bundles-progressive-gifts-label-text-color, #777);font-size:var(--kaching-bundles-progressive-gifts-label-text-size, 12px);white-space:nowrap}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label__text.kaching-bundles__progressive-gifts__gift__label__text--crossed-out{text-decoration:line-through}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift{flex-direction:row;justify-content:space-between;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__content{flex-direction:row;align-items:center;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__details{align-items:flex-start}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__image-wrapper{margin-top:0;height:var(--kaching-bundles-progressive-gifts-image-size, 50px);width:var(--kaching-bundles-progressive-gifts-image-size, 50px)}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__title{text-align:start}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__label{position:initial;transform:none}.kaching-bundles .kaching-bundles-savings-summary{display:flex;align-items:center;justify-content:var(--kaching-bundles-savings-summary-alignment, flex-start);gap:8px;padding:12px 16px;margin-top:calc(10px * var(--block-spacing, 1));background-color:var(--kaching-bundles-savings-summary-background-color, #f5fcf7);color:var(--kaching-bundles-savings-summary-text-color, #1b5933);border-style:solid;border-color:var(--kaching-bundles-savings-summary-border-color, #457757);border-width:var(--kaching-bundles-savings-summary-border-width, 1px);border-radius:var(--kaching-bundles-savings-summary-border-radius, 8px);font-size:var(--kaching-bundles-savings-summary-title-font-size, 14px);font-style:var(--kaching-bundles-savings-summary-title-font-style, normal);font-weight:var(--kaching-bundles-savings-summary-title-font-weight, 500)}.kaching-bundles .kaching-bundles-savings-summary__icon{display:flex;align-items:center;width:1.2em;height:1.2em;flex-shrink:0;color:var(--kaching-bundles-savings-summary-icon-color, #1c5632)}.kaching-bundles .kaching-bundles-savings-summary__icon svg{width:100%;height:100%}.kaching-bundles .kaching-bundles-savings-summary__icon img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles-savings-summary__value{color:var(--kaching-bundles-savings-summary-value-color, #000000)}.kaching-bundles .kaching-bundles__scratch-off{position:relative;display:flex;flex-direction:column;gap:calc(10px * var(--block-spacing, 1));margin:calc(5px * var(--block-spacing, 1)) 0}.kaching-bundles .kaching-bundles__scratch-off>.kaching-bundles__bar{margin:0}.kaching-bundles .kaching-bundles__scratch-off--unscratched{-webkit-user-select:none;-moz-user-select:none;user-select:none}.kaching-bundles .kaching-bundles__scratch-off--unscratched .kaching-bundles__bar{pointer-events:none}.kaching-bundles .kaching-bundles__scratch-off--revealing .kaching-bundles__bar-most-popular{animation:kaching-scratch-off-badge-pop .3s cubic-bezier(.34,1.56,.64,1) both}@keyframes kaching-scratch-off-badge-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.kaching-bundles .kaching-bundles__scratch-off--unscratched:not(.kaching-bundles__scratch-off--revealing) .kaching-bundles__bar-most-popular{visibility:hidden}.kaching-bundles .kaching-bundles__scratch-off--loading{visibility:hidden}.kaching-bundles .kaching-bundles__scratch-off-canvas{position:absolute;inset:0;width:100%;height:100%;border-radius:var(--bar-border-radius, 8px);cursor:pointer;touch-action:none;transition:opacity .3s ease-out;z-index:11}.kaching-bundles .kaching-bundles__scratch-off-canvas--revealing{opacity:0;pointer-events:none}.kaching-bundles .kaching-bundles__scratch-off-hint{position:absolute;inset:0;margin:auto;width:calc(100% - 10px);height:calc(100% - 10px);max-width:317px;max-height:143px;pointer-events:none;opacity:.4;transition:opacity .3s ease-out;z-index:12}.kaching-bundles .kaching-bundles__scratch-off-hint--hidden{opacity:0}.kaching-bundles .kaching-bundles__scratch-off-hint-path{stroke-dasharray:1200;stroke-dashoffset:1200;animation:kaching-scratch-off-hint-draw 2.8s cubic-bezier(.4,0,.2,1) infinite}@keyframes kaching-scratch-off-hint-draw{0%{stroke-dashoffset:1200;opacity:1}60%{stroke-dashoffset:0;opacity:1}80%{stroke-dashoffset:0;opacity:1}to{stroke-dashoffset:0;opacity:0}}.kaching-bundles .kaching-bundles__scratch-off-title{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;color:var(--scratch-off-title-color);font-weight:700;font-size:var(--scratch-off-title-size);line-height:1.25;text-align:center;pointer-events:none;transition:opacity .3s ease-out;z-index:12}.kaching-bundles .kaching-bundles__scratch-off-title--hidden{opacity:0}.kaching-bundles .kaching-bundles-sticky-atc{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:16px;box-shadow:0 0 10px #00000040;background-color:var(--kaching-bundles-sticky-atc-background-color, #fff)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__content{display:flex;align-items:center;gap:16px}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__image{display:var(--kaching-bundles-sticky-atc-image-display, block);width:auto;height:var(--kaching-bundles-sticky-atc-product-photo-size, 40px);border-radius:var(--kaching-bundles-sticky-atc-product-photo-corner-radius, 0)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__title{color:var(--kaching-bundles-sticky-atc-title-color, #000);font-size:var(--kaching-bundles-sticky-atc-title-font-size, 16px);font-style:var(--kaching-bundles-sticky-atc-title-font-style, normal);font-weight:var(--kaching-bundles-sticky-atc-title-font-weight, 400)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__button{all:unset;white-space:nowrap;cursor:pointer;background-color:var(--kaching-bundles-sticky-atc-button-color, #303030);color:var(--kaching-bundles-sticky-atc-button-text-color, #fff);font-size:var(--kaching-bundles-sticky-atc-button-font-size, 16px);font-style:var(--kaching-bundles-sticky-atc-button-font-style, normal);font-weight:var(--kaching-bundles-sticky-atc-button-font-weight, 400);padding:var(--kaching-bundles-sticky-atc-button-padding, 15px);border-radius:var(--kaching-bundles-sticky-atc-button-corner-radius, 8px)}@media (width < 750px){.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__image{display:var(--kaching-bundles-sticky-atc-image-display-mobile, var(--kaching-bundles-sticky-atc-image-display, block));height:var(--kaching-bundles-sticky-atc-product-photo-size-mobile, var(--kaching-bundles-sticky-atc-product-photo-size, 40px));border-radius:var(--kaching-bundles-sticky-atc-product-photo-corner-radius-mobile, var(--kaching-bundles-sticky-atc-product-photo-corner-radius, 0))}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__title{font-size:var(--kaching-bundles-sticky-atc-title-font-size-mobile, var(--kaching-bundles-sticky-atc-title-font-size, 16px))}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__button{font-size:var(--kaching-bundles-sticky-atc-button-font-size-mobile, var(--kaching-bundles-sticky-atc-button-font-size, 16px));padding:var(--kaching-bundles-sticky-atc-button-padding-mobile, var(--kaching-bundles-sticky-atc-button-padding, 15px));border-radius:var(--kaching-bundles-sticky-atc-button-corner-radius-mobile, var(--kaching-bundles-sticky-atc-button-corner-radius, 8px))}}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal.kaching-bundles__bars{grid-template-columns:repeat(2,1fr)}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal .kaching-bundles__bar-wrapper{padding:10px 7px}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-container{border:2px dashed var(--bar-selected-border-color, #000);box-shadow:none}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-wrapper{margin:-2px}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-variants{display:flex}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__title{display:inline-block;overflow-wrap:break-word;font-weight:700;font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__subtitle{display:inline-block;overflow-wrap:break-word;font-size:var(--kaching-subscriptions-subtitle-font-size, 13px);color:var(--kaching-subscriptions-subtitle-color, #555)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__bar-price{font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__bar-full-price{font-size:var(--kaching-subscriptions-subtitle-font-size, 13px);color:var(--kaching-subscriptions-subtitle-color, #555)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__checkbox{all:unset;display:flex;flex-shrink:0;width:20px;height:20px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--link{display:flex;justify-content:center;align-items:center;padding:8px 0}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__link{all:unset;cursor:pointer;display:inline;text-decoration:underline;text-underline-offset:3px;font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__timer{display:flex;align-items:center;background-color:var(--kaching-bundles-timer-background-color, #000);color:var(--kaching-bundles-timer-text-color, #fff);padding:10px 20px;border-radius:var(--bar-border-radius, 8px);margin-bottom:calc(8px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__timer-title{flex:1;text-align:var(--kaching-bundles-timer-title-alignment, center);font-size:var(--kaching-bundles-timer-title-size, 13px);font-weight:var(--kaching-bundles-timer-title-font-weight, bold);font-style:var(--kaching-bundles-timer-title-font-style, normal)}.kaching-bundles .kaching-bundles__swatch-dropdown{display:flex;position:relative;min-width:0;margin:0}.kaching-bundles .kaching-bundles__swatch{display:flex;flex-shrink:0;background-size:cover;background-position:center;overflow:hidden;position:relative;width:var(--kaching-swatch-size, 20px);height:var(--kaching-swatch-size, 20px);border:1px solid var(--kaching-swatch-border-color, #c2cdd6);background-color:var(--kaching-swatch-color, #fff);background-image:var(--kaching-swatch-image-url, none);border-radius:var(--kaching-swatch-border-radius, 0)}.kaching-bundles .kaching-bundles__swatch.kaching-bundles__swatch--unavailable{border-color:#121212;opacity:.4}.kaching-bundles .kaching-bundles__swatch.kaching-bundles__swatch--unavailable:after{content:"";position:absolute;bottom:0;left:0;width:140%;height:1px;background-color:#121212;transform:rotate(-45deg);transform-origin:left}.kaching-bundles .kaching-bundles__swatches-dropdown__color{display:flex;width:20px;height:20px;border:1px solid #c2cdd6;background-size:cover;background-position:center}.kaching-bundles .kaching-bundles__swatch-dropdown__options{display:flex;flex-direction:column;max-width:400px;max-height:500px;overflow:auto;position:fixed;top:0;left:0;border:1px solid #ccc;background-color:#fff;z-index:1000;box-shadow:0 20px 20px #1a1a1a47}.kaching-bundles .kaching-bundles__swatch-dropdown__option{font-size:14px;font-weight:400;font-style:normal;display:flex;align-items:center;gap:10px;white-space:nowrap;padding-block:10px;padding-inline:10px 60px;border:none;border-bottom:1px solid #dfe3e8;cursor:pointer;color:#000;background:none}.kaching-bundles .kaching-bundles__swatch-dropdown__option:last-child{border-bottom:none}.kaching-bundles .kaching-bundles__swatch-dropdown__option:hover,.kaching-bundles .kaching-bundles__swatch-dropdown__option--focused{background-color:#f0f0f0}.kaching-bundles .kaching-bundles__swatch-buttons{display:flex;overflow:auto}.kaching-bundles .kaching-bundles__swatch-buttons__button{display:flex;align-items:center;box-sizing:border-box;border:none;padding:9px;background:#fff;cursor:pointer;border-top:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-bottom:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button:first-of-type{border-start-start-radius:var(--bar-variant-select-border-radius, 0);border-end-start-radius:var(--bar-variant-select-border-radius, 0);border-inline-start:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button:last-of-type{border-start-end-radius:var(--bar-variant-select-border-radius, 0);border-end-end-radius:var(--bar-variant-select-border-radius, 0);border-inline-end:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected{padding:8px 7px;border:2px solid var(--bar-selected-border-color, #50b83c)}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected:first-of-type{padding-inline-start:8px}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected:last-of-type{padding-inline-end:8px}.kaching-bundles .kaching-bundles__bar-variant__content.kaching-bundles__bar-variant__content--with-option-names{align-items:flex-start}.kaching-bundles .kaching-bundles__bar-variant-option{display:flex;flex-direction:column;align-items:flex-start;gap:4px;min-width:0;max-width:100%}.kaching-bundles .kaching-bundles__bar-variant-option__name{font-size:13px;line-height:1.3}.kaching-bundles .kaching-bundles__bar-variant-option__name-label{font-weight:600}.kaching-bundles .kaching-bundles__bar-variant-option__name-value{font-weight:400;opacity:.85}.kaching-bundles .kaching-bundles__quantity-selector{display:flex;width:-moz-fit-content;width:fit-content;border:1px solid #cccccc;box-sizing:border-box;overflow:hidden;margin-top:5px;border-radius:calc(var(--bar-border-radius, 0) / 2)}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button{display:flex;align-items:center;justify-content:center;width:30px;height:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;background-color:#fff;color:#000;border-radius:0}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button:hover{background-color:#eee}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button.kaching-bundles__quantity-selector__button--disabled{cursor:not-allowed;pointer-events:none}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button.kaching-bundles__quantity-selector__button--disabled img{opacity:.5}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input{all:unset;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;height:30px;width:30px;padding:0;border:1px solid #cccccc;border-top:none;border-bottom:none;background-color:#fff;color:#000;text-align:center;font-size:16px;font-weight:400;box-sizing:border-box}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input::-webkit-outer-spin-button,.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none;margin:0}.kaching-bundles .kaching-bundles__highlights{display:flex;flex-direction:column;gap:8px;padding:10px 0}.kaching-bundles .kaching-bundles__highlights--horizontal{flex-flow:row wrap}.kaching-bundles .kaching-bundles__highlights__item{display:flex;gap:8px}.kaching-bundles .kaching-bundles__highlights__icon{display:flex;align-items:center;flex-shrink:0;color:var(--kaching-highlights-icon-color, #000);width:var(--kaching-highlights-icon-size, 16px);height:var(--kaching-highlights-icon-size, 16px)}.kaching-bundles .kaching-bundles__highlights__icon svg{width:100%;height:100%}.kaching-bundles .kaching-bundles__highlights__icon img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__highlights__text{color:var(--kaching-highlights-text-color, #808080);font-size:var(--kaching-highlights-text-size, 16px);line-height:1.3}.kaching-bundles .kaching-bundles__low-stock-alert{color:var(--kaching-bundles-low-stock-alert-text-color, #ff0909);font-size:14px}.kaching-bundles img{width:initial}.kaching-bundles svg{width:initial;height:initial}.kaching-bundles .kaching-bundles__block{display:flex;flex-direction:column;width:100%;margin-top:15px;margin-bottom:10px;text-align:start;line-height:1.4;font-family:var(--block-font-family, inherit)}.kaching-bundles .kaching-bundles__block--hidden{display:none!important}.kaching-bundles .kaching-bundles__block.kaching-bundles__block--loaded{display:flex}.kaching-bundles .kaching-bundles__block-title{display:flex;align-items:center;text-align:center;gap:8px;margin-top:10px;margin-bottom:10px;color:var(--block-block-title-color, #000);font-size:var(--block-title-font-size, 14px);font-weight:var(--block-title-font-weight, bold);font-style:var(--block-title-font-style)}.kaching-bundles .kaching-bundles__block>.kaching-bundles__block-title:first-child{margin-top:0}.kaching-bundles .kaching-bundles__block-title:before,.kaching-bundles .kaching-bundles__block-title:after{content:"";flex-grow:1;height:2px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bars{display:flex;flex-direction:column;position:relative}.kaching-bundles .kaching-bundles__bars--badge-border-all{--badge-ring-outer: calc( var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px) );padding:var(--badge-ring-outer)}.kaching-bundles .kaching-bundles__bars--badge-border-top{padding-top:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-bottom{padding-bottom:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-left{padding-left:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-right{padding-right:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-left,.kaching-bundles .kaching-bundles__bars--badge-border-right{min-height:var(--badge-border-min-length, auto);border-radius:var(--bar-border-radius, 8px);box-shadow:0 1px 10px var(--badge-border-wrap-color, rgba(0, 0, 0, .12))}.kaching-bundles .kaching-bundles__bars--badge-border-all,.kaching-bundles .kaching-bundles__bars--badge-border-top,.kaching-bundles .kaching-bundles__bars--badge-border-bottom{row-gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__subscriptions-wrapper{position:relative}.kaching-bundles .kaching-bundles__bar{display:flex;flex:1;margin:calc(5px * var(--block-spacing, 1)) 0;position:relative}.kaching-bundles .kaching-bundles__bars--badge-border-all>.kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-all>.kaching-bundles__scratch-off,.kaching-bundles .kaching-bundles__bars--badge-border-top>.kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-top>.kaching-bundles__scratch-off,.kaching-bundles .kaching-bundles__bars--badge-border-bottom>.kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-bottom>.kaching-bundles__scratch-off{margin-block:0}.kaching-bundles .kaching-bundles__bar--disabled{opacity:.3}.kaching-bundles .kaching-bundles__bar-container--sold-out{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--kaching-bundles-show-as-sold-out-opacity, .3)}.kaching-bundles .kaching-bundles__bar-sold-out-badge{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:6px 12px;border-radius:8px;font-weight:600;background-color:var(--kaching-bundles-show-as-sold-out-background-color, #000);color:var(--kaching-bundles-show-as-sold-out-text-color, #fff);font-size:var(--kaching-bundles-show-as-sold-out-text-size, 13px);z-index:10;text-align:center}.kaching-bundles .kaching-bundles__bar>input[type=radio]{display:none}.kaching-bundles .kaching-bundles__bar-image{-o-object-fit:contain;object-fit:contain;height:var(--bar-image-size, 48px);width:var(--bar-image-size, 48px);border-radius:var(--bar-image-border-radius, 0)}.kaching-bundles .kaching-bundles__bar-radio{display:flex;flex-shrink:0;width:20px;height:20px;border-radius:50%;background:#fff;border:3px solid #fff;box-sizing:border-box;box-shadow:0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-radio{background:var(--bar-selected-border-color, #000);box-shadow:0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container{display:flex!important;flex-direction:column;justify-content:center;align-items:initial;position:relative;box-sizing:border-box;cursor:pointer;width:100%;margin:0;padding:0;border:none;background-color:var(--bar-background-color, #fff);border-radius:var(--bar-border-radius);box-shadow:inset 0 0 0 1px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-wrapper{padding:calc(10px * var(--block-spacing, 1)) calc(15px * var(--block-spacing, 1) + 5px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__bar-wrapper{position:relative;z-index:1;flex:1;box-sizing:border-box;min-height:var(--badge-border-min-length, auto);padding:calc(10px * var(--block-spacing, 1)) calc(15px * var(--block-spacing, 1) + 5px);background-color:var(--bar-background-color, #fff);border-radius:var(--bar-border-radius);display:flex;flex-direction:column;justify-content:center}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__bar-wrapper{margin-inline-start:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border-start-start-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__bar-wrapper{margin-inline-end:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border-start-end-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container:hover{opacity:1;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-container:has(:focus-visible){opacity:1;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-container *{letter-spacing:normal;text-transform:initial}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container{cursor:default;background-color:var(--bar-selected-background-color);box-shadow:inset 0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-most-popular{position:absolute;z-index:3}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--simple{top:-8px;right:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--fancy{top:-27px;right:-15px}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--custom{top:-25px;right:-15px}.kaching-bundles .kaching-bundles__bar-most-popular--custom .kaching-bundles__bar-most-popular__custom-image{max-height:var(--badge-size, 56px);width:auto;display:block}.kaching-bundles .kaching-bundles__bar-most-popular svg{color:var(--bar-most-popular-background-color)}.kaching-bundles .kaching-bundles__bar-most-popular svg .most-popular-text{fill:var(--bar-most-popular-color)}.kaching-bundles .kaching-bundles__bar-most-popular--fancy svg{width:var(--badge-size, 102px);height:auto}.kaching-bundles .kaching-bundles__bar-most-popular__content{margin:0 8px;padding:6px 8px;border-radius:0 0 5px 5px;font-family:sans-serif;font-size:var(--badge-text-size, 12px);font-weight:700;line-height:1;color:var(--bar-most-popular-color, #fff);background-color:var(--bar-most-popular-background-color)}.kaching-bundles .kaching-bundles__badge-border{position:absolute;z-index:1;display:flex;box-sizing:border-box;overflow:hidden;align-items:center;justify-content:center;font-family:sans-serif;font-size:max(6px,min(var(--badge-text-size, 12px),var(--badge-border-thickness, 22px) - 6px));font-weight:700;line-height:1;letter-spacing:normal;color:var(--bar-most-popular-color, #fff);background-color:var(--bar-most-popular-background-color, #000)}.kaching-bundles .kaching-bundles__badge-border--top{inset:0 0 auto;height:var(--badge-border-thickness, 22px);border-radius:var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0 0}.kaching-bundles .kaching-bundles__badge-border--bottom{inset:auto 0 0;height:var(--badge-border-thickness, 22px);border-radius:0 0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px)}.kaching-bundles .kaching-bundles__badge-border--left{inset:0 auto 0 0;width:var(--badge-border-thickness, 22px);border-radius:var(--bar-border-radius, 8px) 0 0 var(--bar-border-radius, 8px)}.kaching-bundles .kaching-bundles__badge-border__side{position:absolute;display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap}.kaching-bundles .kaching-bundles__badge-border .kaching-bundles__badge-border__text,.kaching-bundles .kaching-bundles__badge-border .kaching-bundles__badge-border__side{letter-spacing:normal}.kaching-bundles .kaching-bundles__badge-border__curve{position:absolute;inset:0;width:100%;height:100%}.kaching-bundles .kaching-bundles__badge-border__curve text{font-family:sans-serif;font-size:max(6px,min(var(--badge-text-size, 12px),var(--badge-border-thickness, 22px) - 6px));font-weight:700;letter-spacing:normal;fill:var(--bar-most-popular-color, #fff)}.kaching-bundles .kaching-bundles__badge-border--all{inset:0;background-color:transparent;pointer-events:none}.kaching-bundles .kaching-bundles__badge-border__band{display:block;position:absolute;inset:0;padding:var(--badge-border-thickness, 22px);border-radius:calc(var(--bar-border-radius, 8px) + var(--badge-ring-outer));background-color:var(--bar-most-popular-background-color, #000);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}.kaching-bundles .kaching-bundles__badge-border__side--top{inset:0 0 auto;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__badge-border__side--bottom{inset:auto 0 0;height:var(--badge-border-thickness, 22px);transform:rotate(180deg)}.kaching-bundles .kaching-bundles__badge-border__side--left{inset:var(--badge-border-thickness, 22px) auto var(--badge-border-thickness, 22px) 0;width:var(--badge-border-thickness, 22px);writing-mode:vertical-rl;transform:rotate(180deg)}.kaching-bundles .kaching-bundles__badge-border__side--right{inset:var(--badge-border-thickness, 22px) 0 var(--badge-border-thickness, 22px) auto;width:var(--badge-border-thickness, 22px);writing-mode:vertical-rl}.kaching-bundles .kaching-bundles__badge-border--left .kaching-bundles__badge-border__text{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap;text-align:center}.kaching-bundles .kaching-bundles__badge-border--right{inset:0 0 0 auto;width:var(--badge-border-thickness, 22px);border-radius:0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0}.kaching-bundles .kaching-bundles__badge-border--right .kaching-bundles__badge-border__text{writing-mode:vertical-rl;white-space:nowrap;text-align:center}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--all{inset:calc(-1 * var(--badge-ring-outer))}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--top{inset:0 0 auto;height:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0 0;display:flex;align-items:flex-start;justify-content:center;-webkit-mask:linear-gradient(#000,#000) left top/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat;mask:linear-gradient(#000,#000) left top/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--top .kaching-bundles__badge-border__text{display:flex;align-items:center;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--bottom{inset:auto 0 0;height:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:0 0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px);display:flex;align-items:flex-end;justify-content:center;-webkit-mask:linear-gradient(#000,#000) left bottom/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat;mask:linear-gradient(#000,#000) left bottom/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--bottom .kaching-bundles__badge-border__text{display:flex;align-items:center;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--left{inset:0 auto 0 0;width:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:var(--bar-border-radius, 8px) 0 0 var(--bar-border-radius, 8px);display:flex;align-items:center;justify-content:flex-start;-webkit-mask:linear-gradient(#000,#000) left top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat;mask:linear-gradient(#000,#000) left top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--right{inset:0 0 0 auto;width:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0;display:flex;align-items:center;justify-content:flex-end;-webkit-mask:linear-gradient(#000,#000) right top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat;mask:linear-gradient(#000,#000) right top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--left .kaching-bundles__badge-border__text,.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--right .kaching-bundles__badge-border__text{display:flex;align-items:center;justify-content:center;width:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-all{--badge-ring-outer: calc( var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px) );margin:var(--badge-ring-outer)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top,.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom,.kaching-bundles .kaching-bundles__bar-container--badge-border-left,.kaching-bundles .kaching-bundles__bar-container--badge-border-right{--badge-concave-extra: max( 0px, var(--badge-concave-depth, 8px) - var(--badge-border-gap, 0px) )}.kaching-bundles .kaching-bundles__bar-container--badge-border-top{box-shadow:none}.kaching-bundles .kaching-bundles__bar-container--badge-border-top:after{content:"";position:absolute;inset:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px)) 0 0;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-top:var(--badge-border-gap-border, none);border-start-start-radius:var(--badge-concave-depth, 8px);border-start-end-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-top:after{border-width:2px;border-color:var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom{box-shadow:none}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:after{content:"";position:absolute;inset:0 0 calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-bottom:var(--badge-border-gap-border, none);border-start-start-radius:var(--bar-border-radius);border-start-end-radius:var(--bar-border-radius);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-bottom:after{border-width:2px;border-color:var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left,.kaching-bundles .kaching-bundles__bar-container--badge-border-right{box-shadow:none;background-color:transparent;min-height:var(--badge-border-min-length, auto)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-top:has(:focus-visible),.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:has(:focus-visible),.kaching-bundles .kaching-bundles__bar-container--badge-border-left:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-left:has(:focus-visible),.kaching-bundles .kaching-bundles__bar-container--badge-border-right:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-right:has(:focus-visible),.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-top,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-bottom,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-left,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-right{box-shadow:none}.kaching-bundles .kaching-bundles__bar-container--badge-border-left:after{content:"";position:absolute;inset:0 0 0 calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-left:var(--badge-border-gap-border, none);border-start-start-radius:var(--badge-concave-depth, 8px);border-start-end-radius:var(--bar-border-radius);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar-container--badge-border-right:after{content:"";position:absolute;inset:0 calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px)) 0 0;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-right:var(--badge-border-gap-border, none);border-start-start-radius:var(--bar-border-radius);border-start-end-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-left:after,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-right:after{border-width:2px;border-color:var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-most-popular__content:before,.kaching-bundles .kaching-bundles__bar-most-popular__content:after{display:block;position:absolute;top:0;width:0;height:0;content:"";border-bottom:8px solid var(--bar-most-popular-background-color, transparent);filter:brightness(.7)}.kaching-bundles .kaching-bundles__bar-most-popular__content:before{left:0;border-left:8px solid transparent}.kaching-bundles .kaching-bundles__bar-most-popular__content:after{right:0;border-right:8px solid transparent}@media (width >= 750px){.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--fancy,.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--custom{right:-20px}}.kaching-bundles .kaching-bundles__bar-main{display:flex;align-items:center;gap:18px;min-height:55px}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-main{cursor:pointer}.kaching-bundles .kaching-bundles__bar-content{align-items:center;justify-content:space-between;display:flex;gap:8px;flex:1}.kaching-bundles .kaching-bundles__bar-content-left{display:flex;flex-direction:column;flex:1;align-items:flex-start}.kaching-bundles .kaching-bundles__bar-first-line{display:flex;flex-wrap:wrap;-moz-column-gap:8px;column-gap:8px;align-items:center}.kaching-bundles .kaching-bundles__bar-second-line{display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:10px;column-gap:10px}.kaching-bundles .kaching-bundles__bar-title{display:inline-block;overflow-wrap:break-word;font-size:var(--bar-title-font-size, 20px);font-weight:var(--bar-title-font-weight, 500);font-style:var(--bar-title-font-style);color:var(--bar-title-color, #000)}.kaching-bundles .kaching-bundles__bar-label{display:inline-flex;align-items:center;justify-content:center;gap:4px;vertical-align:top;padding:4px 8px;overflow-wrap:break-word;background-color:var(--bar-label-background-color, #eee);color:var(--bar-label-color, #777);font-size:var(--bar-label-font-size, 12px);font-weight:var(--bar-label-font-weight);font-style:var(--bar-label-font-style);border-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-subtitle{overflow-wrap:break-word;font-size:var(--bar-subtitle-font-size, 14px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-subtitle-color, #555)}.kaching-bundles .kaching-bundles__bar-pricing{align-items:flex-end;display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__bars--hide-prices .kaching-bundles__bar-pricing{display:none}.kaching-bundles .kaching-bundles__bar-pricing-row{display:flex;align-items:baseline;gap:6px}.kaching-bundles .kaching-bundles__bar-price{font-size:var(--bar-title-font-size, 20px);font-weight:var(--bar-title-font-weight, 500);font-style:var(--bar-title-font-style);color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__bar-price .kaching-bundles__bar-price__unit-label{font-size:var(--kaching-bundles-unit-label-font-size, 14px);font-weight:var(--kaching-bundles-unit-label-font-weight, normal);font-style:var(--kaching-bundles-unit-label-font-style)}.kaching-bundles .kaching-bundles__bar-pricing-row--secondary .kaching-bundles__bar-price{font-size:var(--bar-subtitle-font-size)}.kaching-bundles .kaching-bundles__bar-full-price,.kaching-bundles .kaching-bundles__bar-unit-price{font-size:var(--bar-subtitle-font-size, 14px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__bar-full-price{text-decoration:line-through}.kaching-bundles .kaching-bundles__bar-unit-price{text-transform:uppercase}.kaching-bundles .kaching-bundles__bar-variants{display:none;flex-direction:column;align-items:flex-start}.kaching-bundles .kaching-bundles__bar-variant{flex:1;max-width:100%}.kaching-bundles .kaching-bundles__bar-variants .kaching-bundles__bar-variant{margin-top:5px}.kaching-bundles .kaching-bundles__bar-variant__content{display:flex;align-items:center}.kaching-bundles .kaching-bundles__invalid-variant-error{color:red;font-size:12px;padding-bottom:2px}.kaching-bundles .kaching-bundles__bar-variant-names{font-size:12px;color:var(--bar-subtitle-color, #555);margin-block:3px}.kaching-bundles .kaching-bundles__bar-variant-names>span:not(:last-child):after{content:", "}.kaching-bundles .kaching-bundles__bar-variant-number{font-size:12px;margin-right:2px;min-width:20px;display:inline-flex;color:var(--bar-title-color, #000)}.kaching-bundles .kaching-bundles__bar-variant-image{width:initial;max-width:40px;max-height:40px;border-radius:calc(var(--bar-border-radius, 0) / 2);margin-right:7px}.kaching-bundles .kaching-bundles__bar-variant-main{display:flex;flex-direction:column;min-width:0}.kaching-bundles .kaching-bundles__bar-variant-selects{display:flex;min-width:0;margin-right:2px;margin-bottom:2px;flex-wrap:wrap;gap:7px}.kaching-bundles .kaching-bundles__bar-variant-select{font-size:14px;font-weight:400;font-style:normal;font-family:var(--block-font-family, inherit);-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:7px 25px 7px 7px;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;background-image:url("data:image/svg+xml;utf8,<svg width='10' height='4' viewBox='0 0 10 4' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 4L0.669872 0.25L9.33013 0.249999L5 4Z' fill='black'/></svg>")!important;background-repeat:no-repeat!important;background-position:right 8px center!important;background-color:#fff;background-size:initial;color:#000;outline:none;max-width:100%;width:auto;height:auto;min-height:auto;display:flex;align-items:center;gap:10px;cursor:pointer;box-shadow:inset 0 0 0 1px var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:var(--bar-variant-select-border-radius, 0)}.kaching-bundles .kaching-bundles__bar-variant-select span{overflow:hidden;text-overflow:ellipsis}.kaching-bundles .kaching-bundles__bar-variant-selector-wrapper{display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:10px;column-gap:10px;max-width:100%}.kaching-bundles .kaching-bundles__selling-plan-select{width:100%}.kaching-bundles .kaching-bundles__bar-selling-plan{margin-top:5px;margin-bottom:5px}.kaching-bundles .kaching-bundles__bar-variant--invalid .kaching-bundles__bar-variant-select{box-shadow:0 0 0 1px red}.kaching-bundles .kaching-bundles__bar-variant-select:hover{border:none;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-variant-select:focus{border:none;box-shadow:inset 0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-variant--invalid .kaching-bundles__bar-variant-select:is(:hover,:focus){box-shadow:0 0 0 2px red}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-variants,.kaching-bundles .kaching-bundles__bar-variants--visible{display:flex}.kaching-bundles .kaching-bundles__out-of-stock{background-color:#ff2d2d4d;border:1px solid #ff2c2c;color:#df2121;padding:8px 12px;margin:5px 0;font-size:14px}.kaching-bundles .kaching-bundles__bars--horizontal.kaching-bundles__bars{display:grid;grid-template-columns:repeat(var(--bundle-bars-per-row, 3),1fr);gap:calc(10px * var(--block-spacing, 1));overflow-x:auto}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar{position:relative}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 7px 10px;height:100%}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-main{flex-direction:column;gap:10px;text-align:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-content{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-content-left{align-items:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-second-line{justify-content:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-label{position:absolute;top:0;left:0;right:0;margin-right:0;border-top-left-radius:var(--bar-label-border-top-radius);border-top-right-radius:var(--bar-label-border-top-radius)}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-pricing{align-items:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-variants{align-items:center;margin-top:10px;margin-bottom:5px}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-variant-selector-wrapper{justify-content:center}.kaching-bundles .kaching-bundles__bars--grid.kaching-bundles__bars{display:grid;grid-template-columns:repeat(2,1fr);gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar{margin:0}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar-radio{display:none}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-container,.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-container:hover,.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar--selected .kaching-bundles__bar-container{box-shadow:none}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-pricing{flex-direction:row;gap:10px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--simple) .kaching-bundles__bar-main{margin-top:7px;margin-bottom:7px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--fancy) .kaching-bundles__bar-pricing{margin-top:18px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--custom) .kaching-bundles__bar-pricing{margin-top:18px}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--simple) .kaching-bundles__bar-variants{margin-top:-7px}.kaching-bundles .kaching-bundles__bar-full-price:before,.kaching-bundles .kaching-bundles__bar-price:before{content:attr(data-a11y-label);position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}@media (prefers-reduced-motion: reduce){.kaching-bundles *,.kaching-bundles *:before,.kaching-bundles *:after{transition-duration:.01ms!important;animation-duration:.01ms!important}}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__subscriptions-wrapper .kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-top .kaching-bundles__subscriptions-wrapper .kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-bottom .kaching-bundles__subscriptions-wrapper .kaching-bundles__bar{margin-block:0}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__subscriptions-wrapper .kaching-bundles__bars,.kaching-bundles .kaching-bundles__bars--badge-border-top .kaching-bundles__subscriptions-wrapper .kaching-bundles__bars,.kaching-bundles .kaching-bundles__bars--badge-border-bottom .kaching-bundles__subscriptions-wrapper .kaching-bundles__bars{row-gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__bar-container--badge-border-left:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar-container--badge-border-right:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper{border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-top .kaching-bundles__bar-wrapper{position:relative;z-index:1;margin-top:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));background-color:var(--bar-background-color, #fff);border-start-start-radius:var(--badge-concave-depth, 8px);border-start-end-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper{border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-top :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__bar-wrapper{position:relative;z-index:1;margin-bottom:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));background-color:var(--bar-background-color, #fff);border-start-start-radius:var(--bar-border-radius);border-start-end-radius:var(--bar-border-radius);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){position:relative;z-index:1}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper{margin-bottom:0;border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-bottom:var(--badge-border-thickness, 22px);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts),.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts),.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts),.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){margin-inline:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){position:relative;z-index:1;margin-inline-start:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){position:relative;z-index:1;margin-inline-end:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child,.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-block-end:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-inline-start:var(--badge-border-thickness, 22px);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-inline-end:var(--badge-border-thickness, 22px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:0;border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__deal-bar-progressive-gift:last-child,.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__deal-bar-progressive-gift:last-child{border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__deal-bar-progressive-gift:last-child{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top .kaching-bundles__deal-bar-progressive-gift,.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__deal-bar-progressive-gift,.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__deal-bar-progressive-gift,.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__deal-bar-progressive-gift{margin-inline:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__free-gift__divider{margin-inline-start:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__free-gift__divider{margin-inline-end:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-top .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-left .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-right .kaching-bundles__bar-wrapper{background-color:var(--bar-selected-background-color)}`)), document.head.appendChild(Rt);
    }
  } catch (sn) {
    console.error("vite-plugin-css-injected-by-js", sn);
  }
})();
var zm = Object.defineProperty, $m = Object.getPrototypeOf, Dm = Reflect.get, Bg = (Rt) => {
  throw TypeError(Rt);
}, Tm = (Rt, sn, Sn) => sn in Rt ? zm(Rt, sn, { enumerable: !0, configurable: !0, writable: !0, value: Sn }) : Rt[sn] = Sn, wn = (Rt, sn, Sn) => Tm(Rt, typeof sn != "symbol" ? sn + "" : sn, Sn), Wo = (Rt, sn, Sn) => sn.has(Rt) || Bg("Cannot " + Sn), Se = (Rt, sn, Sn) => (Wo(Rt, sn, "read from private field"), Sn ? Sn.call(Rt) : sn.get(Rt)), yt = (Rt, sn, Sn) => sn.has(Rt) ? Bg("Cannot add the same private member more than once") : sn instanceof WeakSet ? sn.add(Rt) : sn.set(Rt, Sn), wt = (Rt, sn, Sn, ws) => (Wo(Rt, sn, "write to private field"), sn.set(Rt, Sn), Sn), gn = (Rt, sn, Sn) => (Wo(Rt, sn, "access private method"), Sn), Vm = (Rt, sn, Sn) => Dm($m(Rt), Sn, sn);
(function(Rt) {
  var sn, Sn, ws, wl, Ri, Xr, Ni, Pl, si, Qi, oi, qa, Wi, Sl, Bl, ka, Uo, Cl, Ps, Rr, _r, Il, ea, ci, ta, Cr, cr, na, Ga, Oa, ma, ui, Fa, Ss, Bs, kr, Ho, Zo, Ml, zl, Cs, La, Ui, $l, Is, Jo, xa, Ir, Hi, Dl, Ms, zs, Yo, Zi, Nr, ja, $s, Tl, Ko, Xo, ra, aa, ya, Ds, ia, Ji, Vl, Al, ql;
  String.prototype.replaceAll || (String.prototype.replaceAll = function(n, t) {
    if (typeof n == "string") {
      const r = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return this.replace(new RegExp(r, "g"), t);
    }
    if (n instanceof RegExp) {
      if (!n.global) throw new TypeError("replaceAll must be called with a global RegExp");
      return this.replace(n, t);
    }
    return this.replace(n, t);
  }), typeof window != "undefined" && ((ws = (Sn = (sn = window.__svelte) != null ? sn : window.__svelte = {}).v) != null ? ws : Sn.v = /* @__PURE__ */ new Set()).add("5");
  const Gl = "[!", Ea = {}, zn = Symbol(), Cg = !1;
  var Yi = Array.isArray, Ig = Array.prototype.indexOf, Ts = Array.from, Ol = Object.keys, Ra = Object.defineProperty, Na = Object.getOwnPropertyDescriptor, ec = Object.getOwnPropertyDescriptors, tc = Object.prototype, Mg = Array.prototype, Fl = Object.getPrototypeOf, nc = Object.isExtensible;
  const Mr = () => {
  };
  function zg(n) {
    return n();
  }
  function Ll(n) {
    for (var t = 0; t < n.length; t++) n[t]();
  }
  const Ki = 16, jl = 32, rc = 64, zr = 256, Vs = 512, Qn = 1024, la = 2048, Qa = 4096, Qr = 8192, di = 16384, As = 32768, gi = 65536, $g = 1 << 17, ac = 1 << 19, qs = 1 << 21, Dg = 1 << 22, Wa = 1 << 23, sa = Symbol("$state"), ic = Symbol("legacy props"), Tg = Symbol(""), Gs = new class extends Error {
    constructor() {
      super(...arguments), wn(this, "name", "StaleReactionError"), wn(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
    }
  }();
  function lc(n) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  function Xi(n) {
    console.warn("https://svelte.dev/e/hydration_mismatch");
  }
  let Pt, _t = !1;
  function er(n) {
    _t = n;
  }
  function $n(n) {
    if (n === null) throw Xi(), Ea;
    return Pt = n;
  }
  function mr() {
    return $n(Dr(Pt));
  }
  function y(n) {
    if (_t) {
      if (Dr(Pt) !== null) throw Xi(), Ea;
      Pt = n;
    }
  }
  function wa(n = 1) {
    if (_t) {
      for (var t = n, r = Pt; t--; ) r = Dr(r);
      Pt = r;
    }
  }
  function El(n = !0) {
    for (var t = 0, r = Pt; ; ) {
      if (r.nodeType === 8) {
        var a = r.data;
        if (a === "]") {
          if (t === 0) return r;
          t -= 1;
        } else a !== "[" && a !== Gl || (t += 1);
      }
      var s = Dr(r);
      n && r.remove(), r = s;
    }
  }
  function sc(n) {
    if (!n || n.nodeType !== 8) throw Xi(), Ea;
    return n.data;
  }
  function oc(n) {
    return n === this.v;
  }
  function Rl(n, t) {
    return n != n ? t == t : n !== t || n !== null && typeof n == "object" || typeof n == "function";
  }
  function Vg(n, t) {
    return n !== t;
  }
  function cc(n) {
    return !Rl(n, this.v);
  }
  let hi = !1;
  const Ag = [];
  function Pa(n, t = !1, r = !1) {
    return Nl(n, /* @__PURE__ */ new Map(), "", Ag, null, r);
  }
  function Nl(n, t, r, a, s = null, o = !1) {
    if (typeof n == "object" && n !== null) {
      var c = t.get(n);
      if (c !== void 0) return c;
      if (n instanceof Map) return new Map(n);
      if (n instanceof Set) return new Set(n);
      if (Yi(n)) {
        var l = Array(n.length);
        t.set(n, l), s !== null && t.set(s, l);
        for (var i = 0; i < n.length; i += 1) {
          var u = n[i];
          i in n && (l[i] = Nl(u, t, r, a, null, o));
        }
        return l;
      }
      if (Fl(n) === tc) {
        for (var h in l = {}, t.set(n, l), s !== null && t.set(s, l), n) l[h] = Nl(n[h], t, r, a, null, o);
        return l;
      }
      if (n instanceof Date) return structuredClone(n);
      if (typeof n.toJSON == "function" && !o) return Nl(n.toJSON(), t, r, a, n);
    }
    if (n instanceof EventTarget) return n;
    try {
      return structuredClone(n);
    } catch {
      return n;
    }
  }
  let hn = null;
  function pi(n) {
    hn = n;
  }
  function bi(n) {
    return uc().get(n);
  }
  function fi(n, t) {
    return uc().set(n, t), t;
  }
  function tt(n, t = !1, r) {
    hn = { p: hn, c: null, e: null, s: n, x: null, l: hi && !t ? { s: null, u: null, $: [] } : null };
  }
  function nt(n) {
    var t = hn, r = t.e;
    if (r !== null) for (var a of (t.e = null, r)) Dc(a);
    return n !== void 0 && (t.x = n), hn = t.p, n != null ? n : {};
  }
  function vi() {
    return !hi || hn !== null && hn.l === null;
  }
  function uc(n) {
    var t;
    return hn === null && lc(), (t = hn.c) != null ? t : hn.c = new Map((function(r) {
      let a = r.p;
      for (; a !== null; ) {
        const s = a.c;
        if (s !== null) return s;
        a = a.p;
      }
      return null;
    })(hn) || void 0);
  }
  const qg = typeof requestIdleCallback == "undefined" ? (n) => setTimeout(n, 1) : requestIdleCallback;
  let Sa = [], _i = [];
  function dc() {
    var n = Sa;
    Sa = [], Ll(n);
  }
  function gc() {
    var n = _i;
    _i = [], Ll(n);
  }
  function Gg() {
    return Sa.length > 0 || _i.length > 0;
  }
  function Ua(n) {
    if (Sa.length === 0 && !tl) {
      var t = Sa;
      queueMicrotask(() => {
        t === Sa && dc();
      });
    }
    Sa.push(n);
  }
  function Og() {
    Sa.length > 0 && dc(), _i.length > 0 && gc();
  }
  const Fg = /* @__PURE__ */ new WeakMap();
  function hc(n) {
    var t = Gt;
    if (t === null) return Et.f |= Wa, n;
    if ((t.f & As) === 0) {
      if (!(128 & t.f)) throw !t.parent && n instanceof Error && pc(n), n;
      t.b.error(n);
    } else ki(n, t);
  }
  function ki(n, t) {
    for (; t !== null; ) {
      if (128 & t.f) try {
        return void t.b.error(n);
      } catch (r) {
        n = r;
      }
      t = t.parent;
    }
    throw n instanceof Error && pc(n), n;
  }
  function pc(n) {
    const t = Fg.get(n);
    t && (Ra(n, "message", { value: t.message }), Ra(n, "stack", { value: t.stack }));
  }
  const Os = /* @__PURE__ */ new Set();
  let kn = null, el = null, Fs = /* @__PURE__ */ new Set(), Ha = [], Ql = null, Ls = !1, tl = !1;
  wl = /* @__PURE__ */ new WeakMap(), Ri = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), Ni = /* @__PURE__ */ new WeakMap(), Pl = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap(), oi = /* @__PURE__ */ new WeakMap(), qa = /* @__PURE__ */ new WeakMap(), Wi = /* @__PURE__ */ new WeakMap(), Sl = /* @__PURE__ */ new WeakMap(), Bl = /* @__PURE__ */ new WeakMap(), ka = /* @__PURE__ */ new WeakSet(), Uo = function(n) {
    var t;
    n.f ^= Qn;
    for (var r = n.first; r !== null; ) {
      var a = r.f, s = !!(96 & a);
      if (!(s && (a & Qn) !== 0 || (a & Qr) !== 0 || this.skipped_effects.has(r)) && r.fn !== null) {
        s ? r.f ^= Qn : 4 & a ? Se(this, qa).push(r) : (a & Qn) === 0 && ((a & Dg) !== 0 ? ((t = r.b) != null && t.is_pending() ? Se(this, Qi) : Se(this, si)).push(r) : Zl(r) && ((r.f & Ki) !== 0 && Se(this, Wi).push(r), wi(r)));
        var o = r.first;
        if (o !== null) {
          r = o;
          continue;
        }
      }
      var c = r.parent;
      for (r = r.next; r === null && c !== null; ) r = c.next, c = c.parent;
    }
  }, Cl = function(n) {
    for (const t of n)
      ((t.f & la) !== 0 ? Se(this, Sl) : Se(this, Bl)).push(t), lr(t, Qn);
    n.length = 0;
  }, Ps = function() {
    if (!Se(this, Pl)) for (const n of Se(this, Ri)) n();
    Se(this, Ri).clear();
  };
  let Za = class Qo {
    constructor() {
      yt(this, ka), wn(this, "current", /* @__PURE__ */ new Map()), yt(this, wl, /* @__PURE__ */ new Map()), yt(this, Ri, /* @__PURE__ */ new Set()), yt(this, Xr, 0), yt(this, Ni, null), yt(this, Pl, !1), yt(this, si, []), yt(this, Qi, []), yt(this, oi, []), yt(this, qa, []), yt(this, Wi, []), yt(this, Sl, []), yt(this, Bl, []), wn(this, "skipped_effects", /* @__PURE__ */ new Set());
    }
    process(t) {
      var r;
      Ha = [], el = null;
      for (const o of t) gn(this, ka, Uo).call(this, o);
      if (Se(this, si).length === 0 && Se(this, Xr) === 0) {
        gn(this, ka, Ps).call(this);
        var a = Se(this, oi), s = Se(this, qa);
        wt(this, oi, []), wt(this, qa, []), wt(this, Wi, []), el = kn, kn = null, fc(a), fc(s), kn === null ? kn = this : Os.delete(this), (r = Se(this, Ni)) == null || r.resolve();
      } else gn(this, ka, Cl).call(this, Se(this, oi)), gn(this, ka, Cl).call(this, Se(this, qa)), gn(this, ka, Cl).call(this, Se(this, Wi));
      for (const o of Se(this, si)) wi(o);
      for (const o of Se(this, Qi)) wi(o);
      wt(this, si, []), wt(this, Qi, []);
    }
    capture(t, r) {
      Se(this, wl).has(t) || Se(this, wl).set(t, r), this.current.set(t, t.v);
    }
    activate() {
      kn = this;
    }
    deactivate() {
      kn = null, el = null;
      for (const t of Fs) if (Fs.delete(t), t(), kn !== null) break;
    }
    neuter() {
      wt(this, Pl, !0);
    }
    flush() {
      Ha.length > 0 ? bc() : gn(this, ka, Ps).call(this), kn === this && (Se(this, Xr) === 0 && Os.delete(this), this.deactivate());
    }
    increment() {
      wt(this, Xr, Se(this, Xr) + 1);
    }
    decrement() {
      if (wt(this, Xr, Se(this, Xr) - 1), Se(this, Xr) === 0) {
        for (const t of Se(this, Sl)) lr(t, la), mi(t);
        for (const t of Se(this, Bl)) lr(t, Qa), mi(t);
        wt(this, oi, []), wt(this, qa, []), this.flush();
      } else this.deactivate();
    }
    add_callback(t) {
      Se(this, Ri).add(t);
    }
    settled() {
      var t, r, a;
      return ((t = Se(this, Ni)) != null ? t : wt(this, Ni, { promise: new Promise((s, o) => {
        r = s, a = o;
      }), resolve: r, reject: a })).promise;
    }
    static ensure() {
      if (kn === null) {
        const t = kn = new Qo();
        Os.add(kn), tl || Qo.enqueue(() => {
          kn === t && t.flush();
        });
      }
      return kn;
    }
    static enqueue(t) {
      Ua(t);
    }
  };
  function v(n) {
    var t = tl;
    tl = !0;
    try {
      for (; ; ) {
        if (Og(), Ha.length === 0 && !Gg() && (kn == null || kn.flush(), Ha.length === 0)) return void (Ql = null);
        bc();
      }
    } finally {
      tl = t;
    }
  }
  function bc() {
    var n = yi;
    Ls = !0;
    try {
      var t = 0;
      for (Fc(!0); Ha.length > 0; ) {
        var r = Za.ensure();
        t++ > 1e3 && Lg(), r.process(Ha), Ca.clear();
      }
    } finally {
      Ls = !1, Fc(n), Ql = null;
    }
  }
  function Lg() {
    try {
      (function() {
        throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
      })();
    } catch (n) {
      ki(n, Ql);
    }
  }
  let Ba = null;
  function fc(n) {
    var t = n.length;
    if (t !== 0) {
      for (var r = 0; r < t; ) {
        var a = n[r++];
        if (!(24576 & a.f) && Zl(a) && (Ba = [], wi(a), a.deps === null && a.first === null && a.nodes_start === null && (a.teardown === null && a.ac === null ? qc(a) : a.fn = null), (Ba == null ? void 0 : Ba.length) > 0)) {
          Ca.clear();
          for (const s of Ba) wi(s);
          Ba = [];
        }
      }
      Ba = null;
    }
  }
  function mi(n) {
    for (var t = Ql = n; t.parent !== null; ) {
      var r = (t = t.parent).f;
      if (Ls && t === Gt && (r & Ki) !== 0) return;
      if (96 & r) {
        if ((r & Qn) === 0) return;
        t.f ^= Qn;
      }
    }
    Ha.push(t);
  }
  function vc(n) {
    let t, r = 0, a = oa(0);
    return () => {
      Et === null || Vr || (e(a), al(() => (r === 0 && (t = en(() => n(() => ur(a)))), r += 1, () => {
        Ua(() => {
          r -= 1, r === 0 && (t == null || t(), t = void 0, ur(a));
        });
      })));
    };
  }
  class jg {
    constructor(t, r, a) {
      yt(this, kr), wn(this, "parent"), yt(this, Rr, !1), yt(this, _r), yt(this, Il, _t ? Pt : null), yt(this, ea), yt(this, ci), yt(this, ta), yt(this, Cr, null), yt(this, cr, null), yt(this, na, null), yt(this, Ga, null), yt(this, Oa, 0), yt(this, ma, 0), yt(this, ui, !1), yt(this, Fa, null), yt(this, Ss, () => {
        Se(this, Fa) && xi(Se(this, Fa), Se(this, Oa));
      }), yt(this, Bs, vc(() => (wt(this, Fa, oa(Se(this, Oa))), () => {
        wt(this, Fa, null);
      }))), wt(this, _r, t), wt(this, ea, r), wt(this, ci, a), this.parent = Gt.b, wt(this, Rr, !!Se(this, ea).pending), wt(this, ta, ca(() => {
        if (Gt.b = this, _t) {
          const s = Se(this, Il);
          mr(), s.nodeType === 8 && s.data === Gl ? gn(this, kr, Zo).call(this) : gn(this, kr, Ho).call(this);
        } else {
          try {
            wt(this, Cr, An(() => a(Se(this, _r))));
          } catch (s) {
            this.error(s);
          }
          Se(this, ma) > 0 ? gn(this, kr, zl).call(this) : wt(this, Rr, !1);
        }
      }, 589952)), _t && wt(this, _r, Pt);
    }
    is_pending() {
      return Se(this, Rr) || !!this.parent && this.parent.is_pending();
    }
    has_pending_snippet() {
      return !!Se(this, ea).pending;
    }
    update_pending_count(t) {
      gn(this, kr, Cs).call(this, t), wt(this, Oa, Se(this, Oa) + t), Fs.add(Se(this, Ss));
    }
    get_effect_pending() {
      return Se(this, Bs).call(this), e(Se(this, Fa));
    }
    error(t) {
      var r = Se(this, ea).onerror;
      let a = Se(this, ea).failed;
      if (Se(this, ui) || !r && !a) throw t;
      Se(this, Cr) && (qn(Se(this, Cr)), wt(this, Cr, null)), Se(this, cr) && (qn(Se(this, cr)), wt(this, cr, null)), Se(this, na) && (qn(Se(this, na)), wt(this, na, null)), _t && ($n(Se(this, Il)), wa(), $n(El()));
      var s = !1, o = !1;
      const c = () => {
        s ? console.warn("https://svelte.dev/e/svelte_boundary_reset_noop") : (s = !0, o && (function() {
          throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
        })(), Za.ensure(), wt(this, Oa, 0), Se(this, na) !== null && ua(Se(this, na), () => {
          wt(this, na, null);
        }), wt(this, Rr, this.has_pending_snippet()), wt(this, Cr, gn(this, kr, Ml).call(this, () => (wt(this, ui, !1), An(() => Se(this, ci).call(this, Se(this, _r)))))), Se(this, ma) > 0 ? gn(this, kr, zl).call(this) : wt(this, Rr, !1));
      };
      var l = Et;
      try {
        Wn(null), o = !0, r == null || r(t, c), o = !1;
      } catch (i) {
        ki(i, Se(this, ta) && Se(this, ta).parent);
      } finally {
        Wn(l);
      }
      a && Ua(() => {
        wt(this, na, gn(this, kr, Ml).call(this, () => {
          wt(this, ui, !0);
          try {
            return An(() => {
              a(Se(this, _r), () => t, () => c);
            });
          } catch (i) {
            return ki(i, Se(this, ta).parent), null;
          } finally {
            wt(this, ui, !1);
          }
        }));
      });
    }
  }
  function _c(n, t, r) {
    const a = vi() ? nl : Wl;
    if (t.length !== 0) {
      var s = kn, o = Gt, c = (function() {
        var i = Gt, u = Et, h = hn, b = kn, g = _t;
        if (g) var f = Pt;
        return function() {
          Wr(i), Wn(u), pi(h), b == null || b.activate(), g && (er(!0), $n(f));
        };
      })(), l = _t;
      Promise.all(t.map((i) => Eg(i))).then((i) => {
        s == null || s.activate(), c();
        try {
          r([...n.map(a), ...i]);
        } catch (u) {
          (o.f & di) === 0 && ki(u, o);
        }
        l && er(!1), s == null || s.deactivate(), kc();
      }).catch((i) => {
        ki(i, o);
      });
    } else r(n.map(a));
  }
  function kc() {
    Wr(null), Wn(null), pi(null);
  }
  function nl(n) {
    var t = 2050, r = Et !== null && 2 & Et.f ? Et : null;
    return Gt === null || r !== null && (r.f & zr) !== 0 ? t |= zr : Gt.f |= ac, { ctx: hn, deps: null, effects: null, equals: oc, f: t, fn: n, reactions: null, rv: 0, v: zn, wv: 0, parent: r != null ? r : Gt, ac: null };
  }
  function Eg(n, t) {
    let r = Gt;
    r === null && (function() {
      throw new Error("https://svelte.dev/e/async_derived_orphan");
    })();
    var a = r.b, s = void 0, o = oa(zn), c = null, l = !Et;
    return (function(i) {
      Tr(4718592, i, !0);
    })(() => {
      var i;
      try {
        var u = n();
        c && Promise.resolve(u).catch(() => {
        });
      } catch (k) {
        u = Promise.reject(k);
      }
      var h = () => u;
      s = (i = c == null ? void 0 : c.then(h, h)) != null ? i : Promise.resolve(u), c = s;
      var b = kn, g = a.is_pending();
      l && (a.update_pending_count(1), g || b.increment());
      const f = (k, x = void 0) => {
        c = null, g || b.activate(), x ? x !== Gs && (o.f |= Wa, xi(o, x)) : ((o.f & Wa) !== 0 && (o.f ^= Wa), xi(o, k)), l && (a.update_pending_count(-1), g || b.decrement()), kc();
      };
      if (s.then(f, (k) => f(null, k || "unknown")), b) return () => {
        queueMicrotask(() => b.neuter());
      };
    }), new Promise((i) => {
      (function u(h) {
        function b() {
          h === s ? i(o) : u(s);
        }
        h.then(b, b);
      })(s);
    });
  }
  function d(n) {
    const t = nl(n);
    return jc(t), t;
  }
  function Wl(n) {
    const t = nl(n);
    return t.equals = cc, t;
  }
  function mc(n) {
    var t = n.effects;
    if (t !== null) {
      n.effects = null;
      for (var r = 0; r < t.length; r += 1) qn(t[r]);
    }
  }
  function js(n) {
    var t, r = Gt;
    Wr((function(a) {
      for (var s = a.parent; s !== null; ) {
        if (!(2 & s.f)) return s;
        s = s.parent;
      }
      return null;
    })(n));
    try {
      mc(n), t = Wc(n);
    } finally {
      Wr(r);
    }
    return t;
  }
  function xc(n) {
    var t = js(n);
    n.equals(t) || (n.v = t, n.wv = Nc()), Ja || lr(n, !Ia && (n.f & zr) === 0 || n.deps === null ? Qn : Qa);
  }
  Rr = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap(), Il = /* @__PURE__ */ new WeakMap(), ea = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), ta = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), na = /* @__PURE__ */ new WeakMap(), Ga = /* @__PURE__ */ new WeakMap(), Oa = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), Fa = /* @__PURE__ */ new WeakMap(), Ss = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakSet(), Ho = function() {
    try {
      wt(this, Cr, An(() => Se(this, ci).call(this, Se(this, _r))));
    } catch (n) {
      this.error(n);
    }
    wt(this, Rr, !1);
  }, Zo = function() {
    const n = Se(this, ea).pending;
    n && (wt(this, cr, An(() => n(Se(this, _r)))), Za.enqueue(() => {
      wt(this, Cr, gn(this, kr, Ml).call(this, () => (Za.ensure(), An(() => Se(this, ci).call(this, Se(this, _r)))))), Se(this, ma) > 0 ? gn(this, kr, zl).call(this) : (ua(Se(this, cr), () => {
        wt(this, cr, null);
      }), wt(this, Rr, !1));
    }));
  }, Ml = function(n) {
    var t = Gt, r = Et, a = hn;
    Wr(Se(this, ta)), Wn(Se(this, ta)), pi(Se(this, ta).ctx);
    try {
      return n();
    } catch (s) {
      return hc(s), null;
    } finally {
      Wr(t), Wn(r), pi(a);
    }
  }, zl = function() {
    const n = Se(this, ea).pending;
    Se(this, Cr) !== null && (wt(this, Ga, document.createDocumentFragment()), (function(t, r) {
      for (var a = t.nodes_start, s = t.nodes_end; a !== null; ) {
        var o = a === s ? null : Dr(a);
        r.append(a), a = o;
      }
    })(Se(this, Cr), Se(this, Ga))), Se(this, cr) === null && wt(this, cr, An(() => n(Se(this, _r))));
  }, Cs = function(n) {
    var t;
    this.has_pending_snippet() ? (wt(this, ma, Se(this, ma) + n), Se(this, ma) === 0 && (wt(this, Rr, !1), Se(this, cr) && ua(Se(this, cr), () => {
      wt(this, cr, null);
    }), Se(this, Ga) && (Se(this, _r).before(Se(this, Ga)), wt(this, Ga, null)))) : this.parent && gn(t = this.parent, kr, Cs).call(t, n);
  };
  const Ca = /* @__PURE__ */ new Map();
  function oa(n, t) {
    return { f: 0, v: n, reactions: null, equals: oc, rv: 0, wv: 0 };
  }
  function Ge(n, t) {
    const r = oa(n);
    return jc(r), r;
  }
  function Es(n, t = !1, r = !0) {
    var a, s;
    const o = oa(n);
    return t || (o.equals = cc), hi && r && hn !== null && hn.l !== null && ((s = (a = hn.l).s) != null ? s : a.s = []).push(o), o;
  }
  function te(n, t, r = !1) {
    return Et !== null && (!Vr || (Et.f & $g) !== 0) && vi() && 4325394 & Et.f && !(xr != null && xr.includes(n)) && (function() {
      throw new Error("https://svelte.dev/e/state_unsafe_mutation");
    })(), xi(n, r ? gt(t) : t);
  }
  function xi(n, t) {
    if (!n.equals(t)) {
      var r = n.v;
      Ja ? Ca.set(n, t) : Ca.set(n, r), n.v = t, Za.ensure().capture(n, r), 2 & n.f && ((n.f & la) !== 0 && js(n), lr(n, (n.f & zr) === 0 ? Qn : Qa)), n.wv = Nc(), yc(n, la), !vi() || Gt === null || (Gt.f & Qn) === 0 || 96 & Gt.f || (yr === null ? (function(a) {
        yr = a;
      })([n]) : yr.push(n));
    }
    return t;
  }
  function ur(n) {
    te(n, n.v + 1);
  }
  function yc(n, t) {
    var r = n.reactions;
    if (r !== null) for (var a = vi(), s = r.length, o = 0; o < s; o++) {
      var c = r[o], l = c.f;
      if (a || c !== Gt) {
        var i = (l & la) === 0;
        i && lr(c, t), 2 & l ? yc(c, Qa) : i && ((l & Ki) !== 0 && Ba !== null && Ba.push(c), mi(c));
      }
    }
  }
  function gt(n) {
    if (typeof n != "object" || n === null || sa in n) return n;
    const t = Fl(n);
    if (t !== tc && t !== Mg) return n;
    var r = /* @__PURE__ */ new Map(), a = Yi(n), s = Ge(0), o = Ar, c = (l) => {
      if (Ar === o) return l();
      var i = Et, u = Ar;
      Wn(null), Rc(o);
      var h = l();
      return Wn(i), Rc(u), h;
    };
    return a && r.set("length", Ge(n.length)), new Proxy(n, { defineProperty(l, i, u) {
      "value" in u && u.configurable !== !1 && u.enumerable !== !1 && u.writable !== !1 || (function() {
        throw new Error("https://svelte.dev/e/state_descriptors_fixed");
      })();
      var h = r.get(i);
      return h === void 0 ? h = c(() => {
        var b = Ge(u.value);
        return r.set(i, b), b;
      }) : te(h, u.value, !0), !0;
    }, deleteProperty(l, i) {
      var u = r.get(i);
      if (u === void 0) {
        if (i in l) {
          const h = c(() => Ge(zn));
          r.set(i, h), ur(s);
        }
      } else te(u, zn), ur(s);
      return !0;
    }, get(l, i, u) {
      var h;
      if (i === sa) return n;
      var b = r.get(i), g = i in l;
      if (b !== void 0 || g && !((h = Na(l, i)) != null && h.writable) || (b = c(() => Ge(gt(g ? l[i] : zn))), r.set(i, b)), b !== void 0) {
        var f = e(b);
        return f === zn ? void 0 : f;
      }
      return Reflect.get(l, i, u);
    }, getOwnPropertyDescriptor(l, i) {
      var u = Reflect.getOwnPropertyDescriptor(l, i);
      if (u && "value" in u) {
        var h = r.get(i);
        h && (u.value = e(h));
      } else if (u === void 0) {
        var b = r.get(i), g = b == null ? void 0 : b.v;
        if (b !== void 0 && g !== zn) return { enumerable: !0, configurable: !0, value: g, writable: !0 };
      }
      return u;
    }, has(l, i) {
      var u;
      if (i === sa) return !0;
      var h = r.get(i), b = h !== void 0 && h.v !== zn || Reflect.has(l, i);
      return (h !== void 0 || Gt !== null && (!b || (u = Na(l, i)) != null && u.writable)) && (h === void 0 && (h = c(() => Ge(b ? gt(l[i]) : zn)), r.set(i, h)), e(h) === zn) ? !1 : b;
    }, set(l, i, u, h) {
      var b, g = r.get(i), f = i in l;
      if (a && i === "length") for (var k = u; k < g.v; k += 1) {
        var x = r.get(k + "");
        x !== void 0 ? te(x, zn) : k in l && (x = c(() => Ge(zn)), r.set(k + "", x));
      }
      g === void 0 ? f && !((b = Na(l, i)) != null && b.writable) || (te(g = c(() => Ge(void 0)), gt(u)), r.set(i, g)) : (f = g.v !== zn, te(g, c(() => gt(u))));
      var m = Reflect.getOwnPropertyDescriptor(l, i);
      if (m != null && m.set && m.set.call(h, u), !f) {
        if (a && typeof i == "string") {
          var M = r.get("length"), C = Number(i);
          Number.isInteger(C) && C >= M.v && te(M, C + 1);
        }
        ur(s);
      }
      return !0;
    }, ownKeys(l) {
      e(s);
      var i = Reflect.ownKeys(l).filter((b) => {
        var g = r.get(b);
        return g === void 0 || g.v !== zn;
      });
      for (var [u, h] of r) h.v === zn || u in l || i.push(u);
      return i;
    }, setPrototypeOf() {
      (function() {
        throw new Error("https://svelte.dev/e/state_prototype_fixed");
      })();
    } });
  }
  function wc(n) {
    try {
      if (n !== null && typeof n == "object" && sa in n) return n[sa];
    } catch {
    }
    return n;
  }
  function Rg(n, t) {
    return Object.is(wc(n), wc(t));
  }
  var Pc, Sc, Bc, Cc;
  function Rs() {
    if (Pc === void 0) {
      Pc = window, Sc = /Firefox/.test(navigator.userAgent);
      var n = Element.prototype, t = Node.prototype, r = Text.prototype;
      Bc = Na(t, "firstChild").get, Cc = Na(t, "nextSibling").get, nc(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), nc(r) && (r.__t = void 0);
    }
  }
  function $r(n = "") {
    return document.createTextNode(n);
  }
  function jn(n) {
    return Bc.call(n);
  }
  function Dr(n) {
    return Cc.call(n);
  }
  function w(n, t) {
    if (!_t) return jn(n);
    var r = jn(Pt);
    if (r === null) r = Pt.appendChild($r());
    else if (t && r.nodeType !== 3) {
      var a = $r();
      return r == null || r.before(a), $n(a), a;
    }
    return $n(r), r;
  }
  function ve(n, t = !1) {
    if (!_t) {
      var r = jn(n);
      return r instanceof Comment && r.data === "" ? Dr(r) : r;
    }
    if (t && (Pt == null ? void 0 : Pt.nodeType) !== 3) {
      var a = $r();
      return Pt == null || Pt.before(a), $n(a), a;
    }
    return Pt;
  }
  function O(n, t = 1, r = !1) {
    let a = _t ? Pt : n;
    for (var s; t--; ) s = a, a = Dr(a);
    if (!_t) return a;
    if (r && (a == null ? void 0 : a.nodeType) !== 3) {
      var o = $r();
      return a === null ? s == null || s.after(o) : a.before(o), $n(o), o;
    }
    return $n(a), a;
  }
  function Ic(n) {
    n.textContent = "";
  }
  function Ng(n, t) {
    if (t) {
      const r = document.body;
      n.autofocus = !0, Ua(() => {
        document.activeElement === r && n.focus();
      });
    }
  }
  let Mc = !1;
  function zc() {
    Mc || (Mc = !0, document.addEventListener("reset", (n) => {
      Promise.resolve().then(() => {
        var t;
        if (!n.defaultPrevented) for (const r of n.target.elements) (t = r.__on_r) == null || t.call(r);
      });
    }, { capture: !0 }));
  }
  function Ul(n) {
    var t = Et, r = Gt;
    Wn(null), Wr(null);
    try {
      return n();
    } finally {
      Wn(t), Wr(r);
    }
  }
  function $c(n) {
    Gt === null && Et === null && (function() {
      throw new Error("https://svelte.dev/e/effect_orphan");
    })(), Et !== null && (Et.f & zr) !== 0 && Gt === null && (function() {
      throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
    })(), Ja && (function() {
      throw new Error("https://svelte.dev/e/effect_in_teardown");
    })();
  }
  function Tr(n, t, r, a = !0) {
    var s, o = Gt;
    o !== null && (o.f & Qr) !== 0 && (n |= Qr);
    var c = { ctx: hn, deps: null, nodes_start: null, nodes_end: null, f: n | la, first: null, fn: t, last: null, next: null, parent: o, b: o && o.b, prev: null, teardown: null, transitions: null, wv: 0, ac: null };
    if (r) try {
      wi(c), c.f |= As;
    } catch (u) {
      throw qn(c), u;
    }
    else t !== null && mi(c);
    if (a) {
      var l = c;
      if (r && l.deps === null && l.teardown === null && l.nodes_start === null && l.first === l.last && (l.f & ac) === 0 && (l = l.first), l !== null && (l.parent = o, o !== null && (function(u, h) {
        var b = h.last;
        b === null ? h.last = h.first = u : (b.next = u, u.prev = b, h.last = u);
      })(l, o), Et !== null && 2 & Et.f && (n & rc) === 0)) {
        var i = Et;
        ((s = i.effects) != null ? s : i.effects = []).push(l);
      }
    }
    return c;
  }
  function Ns(n) {
    const t = Tr(8, null, !1);
    return lr(t, Qn), t.teardown = n, t;
  }
  function Ye(n) {
    var t;
    $c();
    var r = Gt.f;
    if (!(!Et && (r & jl) !== 0 && (r & As) === 0)) return Dc(n);
    var a = hn;
    ((t = a.e) != null ? t : a.e = []).push(n);
  }
  function Dc(n) {
    return Tr(1048580, n, !1);
  }
  function dr(n) {
    return $c(), Tr(1048584, n, !0);
  }
  function rl(n) {
    return Tr(4, n, !1);
  }
  function al(n, t = 0) {
    return Tr(8 | t, n, !0);
  }
  function _e(n, t = [], r = []) {
    _c(t, r, (a) => {
      Tr(8, () => n(...a.map(e)), !0);
    });
  }
  function ca(n, t = 0) {
    return Tr(Ki | t, n, !0);
  }
  function An(n, t = !0) {
    return Tr(524320, n, !0, t);
  }
  function Tc(n) {
    var t = n.teardown;
    if (t !== null) {
      const r = Ja, a = Et;
      Lc(!0), Wn(null);
      try {
        t.call(null);
      } finally {
        Lc(r), Wn(a);
      }
    }
  }
  function Vc(n, t = !1) {
    var r = n.first;
    for (n.first = n.last = null; r !== null; ) {
      const s = r.ac;
      s !== null && Ul(() => {
        s.abort(Gs);
      });
      var a = r.next;
      (r.f & rc) !== 0 ? r.parent = null : qn(r, t), r = a;
    }
  }
  function qn(n, t = !0) {
    var r = !1;
    (t || 262144 & n.f) && n.nodes_start !== null && n.nodes_end !== null && (Ac(n.nodes_start, n.nodes_end), r = !0), Vc(n, t && !r), Jl(n, 0), lr(n, di);
    var a = n.transitions;
    if (a !== null) for (const o of a) o.stop();
    Tc(n);
    var s = n.parent;
    s !== null && s.first !== null && qc(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
  }
  function Ac(n, t) {
    for (; n !== null; ) {
      var r = n === t ? null : Dr(n);
      n.remove(), n = r;
    }
  }
  function qc(n) {
    var t = n.parent, r = n.prev, a = n.next;
    r !== null && (r.next = a), a !== null && (a.prev = r), t !== null && (t.first === n && (t.first = a), t.last === n && (t.last = r));
  }
  function ua(n, t) {
    var r = [];
    Qs(n, r, !0), Gc(r, () => {
      qn(n), t && t();
    });
  }
  function Gc(n, t) {
    var r = n.length;
    if (r > 0) {
      var a = () => --r || t();
      for (var s of n) s.out(a);
    } else t();
  }
  function Qs(n, t, r) {
    if ((n.f & Qr) === 0) {
      if (n.f ^= Qr, n.transitions !== null) for (const o of n.transitions) (o.is_global || r) && t.push(o);
      for (var a = n.first; a !== null; ) {
        var s = a.next;
        Qs(a, t, ((a.f & gi) !== 0 || (a.f & jl) !== 0) && r), a = s;
      }
    }
  }
  function Hl(n) {
    Oc(n, !0);
  }
  function Oc(n, t) {
    if ((n.f & Qr) !== 0) {
      n.f ^= Qr, (n.f & Qn) === 0 && (lr(n, la), mi(n));
      for (var r = n.first; r !== null; ) {
        var a = r.next;
        Oc(r, ((r.f & gi) !== 0 || (r.f & jl) !== 0) && t), r = a;
      }
      if (n.transitions !== null) for (const s of n.transitions) (s.is_global || t) && s.in();
    }
  }
  let yi = !1;
  function Fc(n) {
    yi = n;
  }
  let Ja = !1;
  function Lc(n) {
    Ja = n;
  }
  let Et = null, Vr = !1;
  function Wn(n) {
    Et = n;
  }
  let Gt = null;
  function Wr(n) {
    Gt = n;
  }
  let xr = null;
  function jc(n) {
    Et !== null && (xr === null ? xr = [n] : xr.push(n));
  }
  let tr = null, gr = 0, yr = null, Ec = 1, il = 0, Ar = il;
  function Rc(n) {
    Ar = n;
  }
  let Ia = !1;
  function Nc() {
    return ++Ec;
  }
  function Zl(n) {
    var t, r, a = n.f;
    if ((a & la) !== 0) return !0;
    if ((a & Qa) !== 0) {
      var s = n.deps, o = (a & zr) !== 0;
      if (s !== null) {
        var c, l, i = (a & Vs) !== 0, u = o && Gt !== null && !Ia, h = s.length;
        if ((i || u) && (Gt === null || (Gt.f & di) === 0)) {
          var b = n, g = b.parent;
          for (c = 0; c < h; c++) l = s[c], !i && ((t = l == null ? void 0 : l.reactions) != null && t.includes(b)) || ((r = l.reactions) != null ? r : l.reactions = []).push(b);
          i && (b.f ^= Vs), u && g !== null && (g.f & zr) === 0 && (b.f ^= zr);
        }
        for (c = 0; c < h; c++) if (Zl(l = s[c]) && xc(l), l.wv > n.wv) return !0;
      }
      o && (Gt === null || Ia) || lr(n, Qn);
    }
    return !1;
  }
  function Qc(n, t, r = !0) {
    var a = n.reactions;
    if (a !== null && !(xr != null && xr.includes(n))) for (var s = 0; s < a.length; s++) {
      var o = a[s];
      2 & o.f ? Qc(o, t, !1) : t === o && (r ? lr(o, la) : (o.f & Qn) !== 0 && lr(o, Qa), mi(o));
    }
  }
  function Wc(n) {
    var t, r, a = tr, s = gr, o = yr, c = Et, l = Ia, i = xr, u = hn, h = Vr, b = Ar, g = n.f;
    tr = null, gr = 0, yr = null, Ia = (g & zr) !== 0 && (Vr || !yi || Et === null), Et = 96 & g ? null : n, xr = null, pi(n.ctx), Vr = !1, Ar = ++il, n.ac !== null && (Ul(() => {
      n.ac.abort(Gs);
    }), n.ac = null);
    try {
      n.f |= qs;
      var f = (0, n.fn)(), k = n.deps;
      if (tr !== null) {
        var x;
        if (Jl(n, gr), k !== null && gr > 0) for (k.length = gr + tr.length, x = 0; x < tr.length; x++) k[gr + x] = tr[x];
        else n.deps = k = tr;
        if (!Ia || 2 & g && n.reactions !== null) for (x = gr; x < k.length; x++) ((r = (t = k[x]).reactions) != null ? r : t.reactions = []).push(n);
      } else k !== null && gr < k.length && (Jl(n, gr), k.length = gr);
      if (vi() && yr !== null && !Vr && k !== null && !(6146 & n.f)) for (x = 0; x < yr.length; x++) Qc(yr[x], n);
      return c !== null && c !== n && (il++, yr !== null && (o === null ? o = yr : o.push(...yr))), (n.f & Wa) !== 0 && (n.f ^= Wa), f;
    } catch (m) {
      return hc(m);
    } finally {
      n.f ^= qs, tr = a, gr = s, yr = o, Et = c, Ia = l, xr = i, pi(u), Vr = h, Ar = b;
    }
  }
  function Qg(n, t) {
    let r = t.reactions;
    if (r !== null) {
      var a = Ig.call(r, n);
      if (a !== -1) {
        var s = r.length - 1;
        s === 0 ? r = t.reactions = null : (r[a] = r[s], r.pop());
      }
    }
    r === null && 2 & t.f && (tr === null || !tr.includes(t)) && (lr(t, Qa), 768 & t.f || (t.f ^= Vs), mc(t), Jl(t, 0));
  }
  function Jl(n, t) {
    var r = n.deps;
    if (r !== null) for (var a = t; a < r.length; a++) Qg(n, r[a]);
  }
  function wi(n) {
    var t = n.f;
    if ((t & di) === 0) {
      lr(n, Qn);
      var r = Gt, a = yi;
      Gt = n, yi = !0;
      try {
        (t & Ki) !== 0 ? (function(o) {
          for (var c = o.first; c !== null; ) {
            var l = c.next;
            (c.f & jl) === 0 && qn(c), c = l;
          }
        })(n) : Vc(n), Tc(n);
        var s = Wc(n);
        n.teardown = typeof s == "function" ? s : null, n.wv = Ec;
      } finally {
        yi = a, Gt = r;
      }
    }
  }
  async function Ws() {
    await Promise.resolve(), v();
  }
  function e(n) {
    var t, r = !!(2 & n.f);
    if (Et === null || Vr) {
      if (r && n.deps === null && n.effects === null) {
        var a = n, s = a.parent;
        s !== null && (s.f & zr) === 0 && (a.f ^= zr);
      }
    } else if (!(Gt !== null && (Gt.f & di) !== 0) && !(xr != null && xr.includes(n))) {
      var o = Et.deps;
      if ((Et.f & qs) !== 0) n.rv < il && (n.rv = il, tr === null && o !== null && o[gr] === n ? gr++ : tr === null ? tr = [n] : Ia && tr.includes(n) || tr.push(n));
      else {
        ((t = Et.deps) != null ? t : Et.deps = []).push(n);
        var c = n.reactions;
        c === null ? n.reactions = [Et] : c.includes(Et) || c.push(Et);
      }
    }
    if (Ja) {
      if (Ca.has(n)) return Ca.get(n);
      if (r) {
        var l = (a = n).v;
        return ((a.f & Qn) === 0 && a.reactions !== null || Uc(a)) && (l = js(a)), Ca.set(a, l), l;
      }
    } else r && Zl(a = n) && xc(a);
    if ((n.f & Wa) !== 0) throw n.v;
    return n.v;
  }
  function Uc(n) {
    if (n.v === zn) return !0;
    if (n.deps === null) return !1;
    for (const t of n.deps)
      if (Ca.has(t) || 2 & t.f && Uc(t)) return !0;
    return !1;
  }
  function en(n) {
    var t = Vr;
    try {
      return Vr = !0, n();
    } finally {
      Vr = t;
    }
  }
  const Wg = -7169;
  function lr(n, t) {
    n.f = n.f & Wg | t;
  }
  function Hc(n) {
    if (typeof n == "object" && n && !(n instanceof EventTarget)) {
      if (sa in n) Us(n);
      else if (!Array.isArray(n)) for (let t in n) {
        const r = n[t];
        typeof r == "object" && r && sa in r && Us(r);
      }
    }
  }
  function Us(n, t = /* @__PURE__ */ new Set()) {
    if (!(typeof n != "object" || n === null || n instanceof EventTarget || t.has(n))) {
      t.add(n), n instanceof Date && n.getTime();
      for (let a in n) try {
        Us(n[a], t);
      } catch {
      }
      const r = Fl(n);
      if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
        const a = ec(r);
        for (let s in a) {
          const o = a[s].get;
          if (o) try {
            o.call(n);
          } catch {
          }
        }
      }
    }
  }
  const Zc = /* @__PURE__ */ new Set(), Hs = /* @__PURE__ */ new Set();
  function Zs(n, t, r, a = {}) {
    function s(o) {
      if (a.capture || ll.call(t, o), !o.cancelBubble) return Ul(() => r == null ? void 0 : r.call(this, o));
    }
    return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Ua(() => {
      t.addEventListener(n, s, a);
    }) : t.addEventListener(n, s, a), s;
  }
  function Yl(n, t, r, a, s) {
    var o = { capture: a, passive: s }, c = Zs(n, t, r, o);
    (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Ns(() => {
      t.removeEventListener(n, c, o);
    });
  }
  function Gn(n) {
    for (var t = 0; t < n.length; t++) Zc.add(n[t]);
    for (var r of Hs) r(n);
  }
  let Jc = null;
  function ll(n) {
    var t, r = this, a = r.ownerDocument, s = n.type, o = ((t = n.composedPath) == null ? void 0 : t.call(n)) || [], c = o[0] || n.target;
    Jc = n;
    var l = 0, i = Jc === n && n.__root;
    if (i) {
      var u = o.indexOf(i);
      if (u !== -1 && (r === document || r === window)) return void (n.__root = r);
      var h = o.indexOf(r);
      if (h === -1) return;
      u <= h && (l = u);
    }
    if ((c = o[l] || n.target) !== r) {
      Ra(n, "currentTarget", { configurable: !0, get: () => c || a });
      var b = Et, g = Gt;
      Wn(null), Wr(null);
      try {
        for (var f, k = []; c !== null; ) {
          var x = c.assignedSlot || c.parentNode || c.host || null;
          try {
            var m = c["__" + s];
            if (m != null && (!c.disabled || n.target === c)) if (Yi(m)) {
              var [M, ...C] = m;
              M.apply(c, [n, ...C]);
            } else m.call(c, n);
          } catch (V) {
            f ? k.push(V) : f = V;
          }
          if (n.cancelBubble || x === r || x === null) break;
          c = x;
        }
        if (f) {
          for (let V of k) queueMicrotask(() => {
            throw V;
          });
          throw f;
        }
      } finally {
        n.__root = r, delete n.currentTarget, Wn(b), Wr(g);
      }
    }
  }
  function Js(n) {
    var t = document.createElement("template");
    return t.innerHTML = n.replaceAll("<!>", "<!---->"), t.content;
  }
  function sr(n, t) {
    var r = Gt;
    r.nodes_start === null && (r.nodes_start = n, r.nodes_end = t);
  }
  function $(n, t) {
    var r, a = !!(1 & t), s = !!(2 & t), o = !n.startsWith("<!>");
    return () => {
      if (_t) return sr(Pt, null), Pt;
      r === void 0 && (r = Js(o ? n : "<!>" + n), a || (r = jn(r)));
      var c = s || Sc ? document.importNode(r, !0) : r.cloneNode(!0);
      return a ? sr(jn(c), c.lastChild) : sr(c, c), c;
    };
  }
  function Ug(n, t, r = "svg") {
    var a, s = !n.startsWith("<!>"), o = !!(1 & t), c = `<${r}>${s ? n : "<!>" + n}</${r}>`;
    return () => {
      if (_t) return sr(Pt, null), Pt;
      if (!a) {
        var l = jn(Js(c));
        if (o) for (a = document.createDocumentFragment(); jn(l); ) a.appendChild(jn(l));
        else a = jn(l);
      }
      var i = a.cloneNode(!0);
      return o ? sr(jn(i), i.lastChild) : sr(i, i), i;
    };
  }
  function Dn(n, t) {
    return Ug(n, t, "svg");
  }
  function Un(n = "") {
    if (!_t) {
      var t = $r(n + "");
      return sr(t, t), t;
    }
    var r = Pt;
    return r.nodeType !== 3 && (r.before(r = $r()), $n(r)), sr(r, r), r;
  }
  function ze() {
    if (_t) return sr(Pt, null), Pt;
    var n = document.createDocumentFragment(), t = document.createComment(""), r = $r();
    return n.append(t, r), sr(t, r), n;
  }
  function p(n, t) {
    if (_t) return Gt.nodes_end = Pt, void mr();
    n !== null && n.before(t);
  }
  function Hg(n) {
    return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
  }
  const Zg = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];
  function Jg(n) {
    return Zg.includes(n);
  }
  const Yg = { formnovalidate: "formNoValidate", ismap: "isMap", nomodule: "noModule", playsinline: "playsInline", readonly: "readOnly", defaultvalue: "defaultValue", defaultchecked: "defaultChecked", srcobject: "srcObject", novalidate: "noValidate", allowfullscreen: "allowFullscreen", disablepictureinpicture: "disablePictureInPicture", disableremoteplayback: "disableRemotePlayback" };
  function Kg(n) {
    var t;
    return n = n.toLowerCase(), (t = Yg[n]) != null ? t : n;
  }
  const Xg = ["touchstart", "touchmove"];
  function eh(n) {
    return Xg.includes(n);
  }
  const th = ["textarea", "script", "style", "title"];
  function kt(n, t) {
    var r, a = t == null ? "" : typeof t == "object" ? t + "" : t;
    a !== ((r = n.__t) != null ? r : n.__t = n.nodeValue) && (n.__t = a, n.nodeValue = a + "");
  }
  function Yc(n, t) {
    return Kc(n, t);
  }
  function nh(n, t) {
    var r;
    Rs(), t.intro = (r = t.intro) != null && r;
    const a = t.target, s = _t, o = Pt;
    try {
      for (var c = jn(a); c && (c.nodeType !== 8 || c.data !== "["); ) c = Dr(c);
      if (!c) throw Ea;
      er(!0), $n(c);
      const l = Kc(n, { ...t, anchor: c });
      return er(!1), l;
    } catch (l) {
      if (l instanceof Error && l.message.split(`
`).some((i) => i.startsWith("https://svelte.dev/e/"))) throw l;
      return l !== Ea && console.warn("Failed to hydrate: ", l), t.recover === !1 && (function() {
        throw new Error("https://svelte.dev/e/hydration_failed");
      })(), Rs(), Ic(a), er(!1), Yc(n, t);
    } finally {
      er(s), $n(o);
    }
  }
  const Pi = /* @__PURE__ */ new Map();
  function Kc(n, { target: t, anchor: r, props: a = {}, events: s, context: o, intro: c = !0 }) {
    Rs();
    var l = /* @__PURE__ */ new Set(), i = (b) => {
      for (var g = 0; g < b.length; g++) {
        var f = b[g];
        if (!l.has(f)) {
          l.add(f);
          var k = eh(f);
          t.addEventListener(f, ll, { passive: k });
          var x = Pi.get(f);
          x === void 0 ? (document.addEventListener(f, ll, { passive: k }), Pi.set(f, 1)) : Pi.set(f, x + 1);
        }
      }
    };
    i(Ts(Zc)), Hs.add(i);
    var u = void 0, h = (function(b) {
      Za.ensure();
      const g = Tr(524352, b, !0);
      return (f = {}) => new Promise((k) => {
        f.outro ? ua(g, () => {
          qn(g), k(void 0);
        }) : (qn(g), k(void 0));
      });
    })(() => {
      var b = r != null ? r : t.appendChild($r());
      return (function(g, f, k) {
        new jg(g, f, k);
      })(b, { pending: () => {
      } }, (g) => {
        if (o && (tt({}), hn.c = o), s && (a.$$events = s), _t && sr(g, null), u = n(g, a) || {}, _t && (Gt.nodes_end = Pt, Pt === null || Pt.nodeType !== 8 || Pt.data !== "]")) throw Xi(), Ea;
        o && nt();
      }), () => {
        var g;
        for (var f of l) {
          t.removeEventListener(f, ll);
          var k = Pi.get(f);
          --k === 0 ? (document.removeEventListener(f, ll), Pi.delete(f)) : Pi.set(f, k);
        }
        Hs.delete(i), b !== r && ((g = b.parentNode) == null || g.removeChild(b));
      };
    });
    return Ys.set(u, h), u;
  }
  let Ys = /* @__PURE__ */ new WeakMap();
  function Kl(n, t, ...r) {
    var a, s = n, o = Mr;
    ca(() => {
      o !== (o = t()) && (a && (qn(a), a = null), a = An(() => o(s, ...r)));
    }, gi), _t && (s = Pt);
  }
  function Ya(n) {
    var t, r, a;
    hn === null && lc(), hi && hn.l !== null ? (t = hn, a = t.l, (r = a.u) != null ? r : a.u = { a: [], b: [], m: [] }).m.push(n) : Ye(() => {
      const s = en(n);
      if (typeof s == "function") return s;
    });
  }
  function G(n, t, r = !1) {
    _t && mr();
    var a = n, s = null, o = null, c = zn, l = !1;
    const i = (b, g = !0) => {
      l = !0, h(g, b);
    };
    function u() {
      var b = c ? s : o, g = c ? o : s;
      b && Hl(b), g && ua(g, () => {
        c ? o = null : s = null;
      });
    }
    const h = (b, g) => {
      if (c === (c = b)) return;
      let f = !1;
      if (_t) {
        const x = sc(a) === Gl;
        !!c === x && ($n(a = El()), er(!1), f = !0);
      }
      var k = a;
      c ? s != null || (s = g && An(() => g(k))) : o != null || (o = g && An(() => g(k))), u(), f && er(!0);
    };
    ca(() => {
      l = !1, t(i), l || h(null, null);
    }, r ? gi : 0), _t && (a = Pt);
  }
  function lt(n, t, r) {
    _t && mr();
    var a, s, o = n, c = zn, l = vi() ? Vg : Rl;
    function i() {
      a && ua(a), a = s;
    }
    ca(() => {
      if (l(c, c = t())) {
        var u = o;
        s = An(() => r(u)), i();
      }
    }), _t && (o = Pt);
  }
  function qr(n, t) {
    return t;
  }
  function At(n, t, r, a, s, o = null) {
    var c = n, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
    if (4 & t) {
      var i = n;
      c = _t ? $n(jn(i)) : i.appendChild($r());
    }
    _t && mr();
    var u, h, b = null, g = !1, f = /* @__PURE__ */ new Map(), k = Wl(() => {
      var m = r();
      return Yi(m) ? m : m == null ? [] : Ts(m);
    });
    function x() {
      (function(m, M, C, V, D, A, H, ee, I) {
        var Z, B, E, ue, z, N, S, P, L, j, Y = !!(8 & H), de = !!(3 & H), T = M.length, q = C.items, se = C.first, le = se, W = null, oe = [], K = [];
        if (Y) for (j = 0; j < T; j += 1) P = ee(S = M[j], j), (L = q.get(P)) !== void 0 && ((Z = L.a) == null || Z.measure(), (N != null ? N : N = /* @__PURE__ */ new Set()).add(L));
        for (j = 0; j < T; j += 1) if (P = ee(S = M[j], j), (L = q.get(P)) !== void 0) {
          if (de && rh(L, S, j, H), (L.e.f & Qr) !== 0 && (Hl(L.e), Y && ((B = L.a) == null || B.unfix(), (N != null ? N : N = /* @__PURE__ */ new Set()).delete(L))), L !== le) {
            if (z !== void 0 && z.has(L)) {
              if (oe.length < K.length) {
                var Q, U = K[0];
                W = U.prev;
                var X = oe[0], ne = oe[oe.length - 1];
                for (Q = 0; Q < oe.length; Q += 1) Ks(oe[Q], U, D);
                for (Q = 0; Q < K.length; Q += 1) z.delete(K[Q]);
                Ur(C, X.prev, ne.next), Ur(C, W, X), Ur(C, ne, U), le = U, W = ne, j -= 1, oe = [], K = [];
              } else z.delete(L), Ks(L, le, D), Ur(C, L.prev, L.next), Ur(C, L, W === null ? C.first : W.next), Ur(C, W, L), W = L;
              continue;
            }
            for (oe = [], K = []; le !== null && le.k !== P; ) (le.e.f & Qr) === 0 && (z != null ? z : z = /* @__PURE__ */ new Set()).add(le), K.push(le), le = le.next;
            if (le === null) continue;
            L = le;
          }
          oe.push(L), W = L, le = L.next;
        } else {
          var J = V.get(P);
          if (J !== void 0) {
            V.delete(P), q.set(P, J);
            var F = W ? W.next : le;
            Ur(C, W, J), Ur(C, J, F), Ks(J, F, D), W = J;
          } else
            W = Xc(le ? le.e.nodes_start : D, C, W, W === null ? C.first : W.next, S, P, j, A, H, I);
          q.set(P, W), oe = [], K = [], le = W.next;
        }
        if (le !== null || z !== void 0) {
          for (var ae = z === void 0 ? [] : Ts(z); le !== null; ) (le.e.f & Qr) === 0 && ae.push(le), le = le.next;
          var ie = ae.length;
          if (ie > 0) {
            var ke = 4 & H && T === 0 ? D : null;
            if (Y) {
              for (j = 0; j < ie; j += 1) (E = ae[j].a) == null || E.measure();
              for (j = 0; j < ie; j += 1) (ue = ae[j].a) == null || ue.fix();
            }
            (function(pe, ge, me) {
              for (var ce = pe.items, fe = [], Fe = ge.length, $e = 0; $e < Fe; $e++) Qs(ge[$e].e, fe, !0);
              var Ce = Fe > 0 && fe.length === 0 && me !== null;
              if (Ce) {
                var Te = me.parentNode;
                Ic(Te), Te.append(me), ce.clear(), Ur(pe, ge[0].prev, ge[Fe - 1].next);
              }
              Gc(fe, () => {
                for (var R = 0; R < Fe; R++) {
                  var xe = ge[R];
                  Ce || (ce.delete(xe.k), Ur(pe, xe.prev, xe.next)), qn(xe.e, !Ce);
                }
              });
            })(C, ae, ke);
          }
        }
        Y && Ua(() => {
          var pe;
          if (N !== void 0) for (L of N) (pe = L.a) == null || pe.apply();
        });
        for (var re of (m.first = C.first && C.first.e, m.last = W && W.e, V.values())) qn(re.e);
        V.clear();
      })(h, u, l, f, c, s, t, a, r), o !== null && (u.length === 0 ? b ? Hl(b) : b = An(() => o(c)) : b !== null && ua(b, () => {
        b = null;
      }));
    }
    ca(() => {
      h != null || (h = Gt);
      var m = (u = e(k)).length;
      if (g && m === 0) return;
      g = m === 0;
      let M = !1;
      if (_t && sc(c) === Gl != (m === 0) && ($n(c = El()), er(!1), M = !0), _t) {
        for (var C, V = null, D = 0; D < m; D++) {
          if (Pt.nodeType === 8 && Pt.data === "]") {
            c = Pt, M = !0, er(!1);
            break;
          }
          var A = u[D], H = a(A, D);
          C = Xc(Pt, l, V, null, A, H, D, s, t, r), l.items.set(H, C), V = C;
        }
        m > 0 && $n(El());
      }
      _t ? m === 0 && o && (b = An(() => o(c))) : x(), M && er(!0), e(k);
    }), _t && (c = Pt);
  }
  function rh(n, t, r, a) {
    1 & a && xi(n.v, t), 2 & a ? xi(n.i, r) : n.i = r;
  }
  function Xc(n, t, r, a, s, o, c, l, i, u, h) {
    var b = 1 & i ? 16 & i ? oa(s) : Es(s, !1, !1) : s, g = 2 & i ? oa(c) : c, f = { i: g, v: b, k: o, a: null, e: null, prev: r, next: a };
    try {
      return n === null && document.createDocumentFragment().append(n = $r()), f.e = An(() => l(n, b, g, u), _t), f.e.prev = r && r.e, f.e.next = a && a.e, r === null ? h || (t.first = f) : (r.next = f, r.e.next = f.e), a !== null && (a.prev = f, a.e.prev = f.e), f;
    } finally {
    }
  }
  function Ks(n, t, r) {
    for (var a = n.next ? n.next.e.nodes_start : r, s = t ? t.e.nodes_start : r, o = n.e.nodes_start; o !== null && o !== a; ) {
      var c = Dr(o);
      s.before(o), o = c;
    }
  }
  function Ur(n, t, r) {
    t === null ? n.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
  }
  function Le(n, t, r = !1, a = !1, s = !1) {
    var o = n, c = "";
    _e(() => {
      var l, i = Gt;
      if (c !== (c = (l = t()) != null ? l : "")) {
        if (i.nodes_start !== null && (Ac(i.nodes_start, i.nodes_end), i.nodes_start = i.nodes_end = null), c !== "") {
          if (_t) {
            Pt.data;
            for (var u = mr(), h = u; u !== null && (u.nodeType !== 8 || u.data !== ""); ) h = u, u = Dr(u);
            if (u === null) throw Xi(), Ea;
            return sr(Pt, h), void (o = $n(u));
          }
          var b = c + "";
          r ? b = `<svg>${b}</svg>` : a && (b = `<math>${b}</math>`);
          var g = Js(b);
          if ((r || a) && (g = jn(g)), sr(jn(g), g.lastChild), r || a) for (; jn(g); ) o.before(jn(g));
          else o.before(g);
        }
      } else _t && mr();
    });
  }
  function eu(n, t, r, a, s) {
    var o;
    _t && mr();
    var c = (o = t.$$slots) == null ? void 0 : o[r], l = !1;
    c === !0 && (c = t.children, l = !0), c === void 0 || c(n, l ? () => a : a);
  }
  function tu(n, t, r) {
    _t && mr();
    var a, s, o = n, c = null;
    function l() {
      s && (ua(s), s = null), s = c, c = null;
    }
    ca(() => {
      if (a !== (a = t())) {
        if (a) {
          var i = o;
          c = An(() => r(i, a));
        }
        l();
      }
    }, gi), _t && (o = Pt);
  }
  function nu(n, t, r, a, s, o) {
    let c = _t;
    var l, i;
    _t && mr();
    var u = null;
    _t && Pt.nodeType === 1 && (u = Pt, mr());
    var h, b = _t ? Pt : n;
    ca(() => {
      const g = t() || null;
      var f = g === "svg" ? "http://www.w3.org/2000/svg" : null;
      g !== l && (h && (g === null ? ua(h, () => {
        h = null, i = null;
      }) : g === i ? Hl(h) : qn(h)), g && g !== i && (h = An(() => {
        if (sr(u = _t ? u : f ? document.createElementNS(f, g) : document.createElement(g), u), a) {
          _t && (x = g, th.includes(x)) && u.append(document.createComment(""));
          var k = _t ? jn(u) : u.appendChild($r());
          _t && (k === null ? er(!1) : $n(k)), a(u, k);
        }
        var x;
        Gt.nodes_end = u, b.before(u);
      })), (l = g) && (i = l));
    }, gi), c && (er(!0), $n(b));
  }
  function Xs(n, t, r) {
    rl(() => {
      var a = en(() => t(n, r == null ? void 0 : r()) || {});
      if (r && (a != null && a.update)) {
        var s = !1, o = {};
        al(() => {
          var c = r();
          Hc(c), s && Rl(o, c) && (o = c, a.update(c));
        }), s = !0;
      }
      if (a != null && a.destroy) return () => a.destroy();
    });
  }
  function ah(n, t) {
    var r, a = void 0;
    ca(() => {
      a !== (a = t()) && (r && (qn(r), r = null), a && (r = An(() => {
        rl(() => a(n));
      })));
    });
  }
  function ru(n) {
    var t, r, a = "";
    if (typeof n == "string" || typeof n == "number") a += n;
    else if (typeof n == "object") if (Array.isArray(n)) {
      var s = n.length;
      for (t = 0; t < s; t++) n[t] && (r = ru(n[t])) && (a && (a += " "), a += r);
    } else for (r in n) n[r] && (a && (a += " "), a += r);
    return a;
  }
  function sl(n) {
    return typeof n == "object" ? (function() {
      for (var t, r, a = 0, s = "", o = arguments.length; a < o; a++) (t = arguments[a]) && (r = ru(t)) && (s && (s += " "), s += r);
      return s;
    })(n) : n != null ? n : "";
  }
  const au = [...` 	
\r\f \v\uFEFF`];
  function iu(n, t = !1) {
    var r = t ? " !important;" : ";", a = "";
    for (var s in n) {
      var o = n[s];
      o != null && o !== "" && (a += " " + s + ": " + o + r);
    }
    return a;
  }
  function eo(n) {
    return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
  }
  function Nt(n, t, r, a, s, o) {
    var c = n.__className;
    if (_t || c !== r || c === void 0) {
      var l = (function(h, b, g) {
        var f = h == null ? "" : "" + h;
        if (b && (f = f ? f + " " + b : b), g) {
          for (var k in g) if (g[k]) f = f ? f + " " + k : k;
          else if (f.length) for (var x = k.length, m = 0; (m = f.indexOf(k, m)) >= 0; ) {
            var M = m + x;
            m !== 0 && !au.includes(f[m - 1]) || M !== f.length && !au.includes(f[M]) ? m = M : f = (m === 0 ? "" : f.substring(0, m)) + f.substring(M + 1);
          }
        }
        return f === "" ? null : f;
      })(r, a, o);
      _t && l === n.getAttribute("class") || (l == null ? n.removeAttribute("class") : t ? n.className = l : n.setAttribute("class", l)), n.__className = r;
    } else if (o && s !== o) for (var i in o) {
      var u = !!o[i];
      s != null && u === !!s[i] || n.classList.toggle(i, u);
    }
    return o;
  }
  function to(n, t = {}, r, a) {
    for (var s in r) {
      var o = r[s];
      t[s] !== o && (r[s] == null ? n.style.removeProperty(s) : n.style.setProperty(s, o, a));
    }
  }
  function Ot(n, t, r, a) {
    var s = n.__style;
    if (_t || s !== t) {
      var o = (function(c, l) {
        if (l) {
          var i, u, h = "";
          if (Array.isArray(l) ? (i = l[0], u = l[1]) : i = l, c) {
            c = String(c).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
            var b = !1, g = 0, f = !1, k = [];
            i && k.push(...Object.keys(i).map(eo)), u && k.push(...Object.keys(u).map(eo));
            var x = 0, m = -1;
            const D = c.length;
            for (var M = 0; M < D; M++) {
              var C = c[M];
              if (f ? C === "/" && c[M - 1] === "*" && (f = !1) : b ? b === C && (b = !1) : C === "/" && c[M + 1] === "*" ? f = !0 : C === '"' || C === "'" ? b = C : C === "(" ? g++ : C === ")" && g--, !f && b === !1 && g === 0) {
                if (C === ":" && m === -1) m = M;
                else if (C === ";" || M === D - 1) {
                  if (m !== -1) {
                    var V = eo(c.substring(x, m).trim());
                    k.includes(V) || (C !== ";" && M++, h += " " + c.substring(x, M).trim() + ";");
                  }
                  x = M + 1, m = -1;
                }
              }
            }
          }
          return i && (h += iu(i)), u && (h += iu(u, !0)), (h = h.trim()) === "" ? null : h;
        }
        return c == null ? null : String(c);
      })(t, a);
      _t && o === n.getAttribute("style") || (o == null ? n.removeAttribute("style") : n.style.cssText = o), n.__style = t;
    } else a && (Array.isArray(a) ? (to(n, r == null ? void 0 : r[0], a[0]), to(n, r == null ? void 0 : r[1], a[1], "important")) : to(n, r, a));
    return a;
  }
  function ol(n, t, r = !1) {
    if (n.multiple) {
      if (t == null) return;
      if (!Yi(t)) return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");
      for (var a of n.options) a.selected = t.includes(lu(a));
    } else {
      for (a of n.options)
        if (Rg(lu(a), t)) return void (a.selected = !0);
      r && t === void 0 || (n.selectedIndex = -1);
    }
  }
  function no(n) {
    var t = new MutationObserver(() => {
      ol(n, n.__value);
    });
    t.observe(n, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["value"] }), Ns(() => {
      t.disconnect();
    });
  }
  function lu(n) {
    return "__value" in n ? n.__value : n.value;
  }
  const Si = Symbol("class"), Bi = Symbol("style"), su = Symbol("is custom element"), ou = Symbol("is html");
  function da(n) {
    if (_t) {
      var t, r = !1, a = () => {
        if (!r) {
          if (r = !0, n.hasAttribute("value")) {
            var s = n.value;
            Be(n, "value", null), n.value = s;
          }
          if (n.hasAttribute("checked")) {
            var o = n.checked;
            Be(n, "checked", null), n.checked = o;
          }
        }
      };
      n.__on_r = a, t = a, _i.length === 0 && qg(gc), _i.push(t), zc();
    }
  }
  function Ka(n, t) {
    var r = Xl(n);
    r.value !== (r.value = t != null ? t : void 0) && (n.value !== t || t === 0 && n.nodeName === "PROGRESS") && (n.value = t != null ? t : "");
  }
  function cl(n, t) {
    var r = Xl(n);
    r.checked !== (r.checked = t != null ? t : void 0) && (n.checked = t);
  }
  function cu(n, t) {
    t ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
  }
  function Be(n, t, r, a) {
    var s = Xl(n);
    _t && (s[t] = n.getAttribute(t), t === "src" || t === "srcset" || t === "href" && n.nodeName === "LINK") || s[t] !== (s[t] = r) && (t === "loading" && (n[Tg] = r), r == null ? n.removeAttribute(t) : typeof r != "string" && gu(n).includes(t) ? n[t] = r : n.setAttribute(t, r));
  }
  function uu(n, t, r = [], a = [], s, o = !1, c = !1) {
    _c(r, a, (l) => {
      var i = void 0, u = {}, h = n.nodeName === "SELECT", b = !1;
      if (ca(() => {
        var f = t(...l.map(e)), k = (function(m, M, C, V, D = !1) {
          if (_t && D && m.tagName === "INPUT") {
            var A = m;
            (A.type === "checkbox" ? "defaultChecked" : "defaultValue") in C || da(A);
          }
          var H = Xl(m), ee = H[su], I = !H[ou];
          let Z = _t && ee;
          Z && er(!1);
          var B = M || {}, E = m.tagName === "OPTION";
          for (var ue in M) ue in C || (C[ue] = null);
          C.class ? C.class = sl(C.class) : C[Si] && (C.class = null), C[Bi] && (C.style != null || (C.style = null));
          var z = gu(m);
          for (const Y in C) {
            let de = C[Y];
            if (E && Y === "value" && de == null) m.value = m.__value = "", B[Y] = de;
            else if (Y !== "class") if (Y !== "style") {
              var N = B[Y];
              if (de !== N || de === void 0 && m.hasAttribute(Y)) {
                B[Y] = de;
                var S = Y[0] + Y[1];
                if (S !== "$$") if (S === "on") {
                  const T = {}, q = "$$" + Y;
                  let se = Y.slice(2);
                  var P = Jg(se);
                  if (Hg(se) && (se = se.slice(0, -7), T.capture = !0), !P && N) {
                    if (de != null) continue;
                    m.removeEventListener(se, B[q], T), B[q] = null;
                  }
                  if (de != null) if (P) m[`__${se}`] = de, Gn([se]);
                  else {
                    let le = function(W) {
                      B[Y].call(this, W);
                    };
                    B[q] = Zs(se, m, le, T);
                  }
                  else P && (m[`__${se}`] = void 0);
                } else if (Y === "style") Be(m, Y, de);
                else if (Y === "autofocus") Ng(m, !!de);
                else if (ee || Y !== "__value" && (Y !== "value" || de == null)) if (Y === "selected" && E) cu(m, de);
                else {
                  var L = Y;
                  I || (L = Kg(L));
                  var j = L === "defaultValue" || L === "defaultChecked";
                  if (de != null || ee || j) j || z.includes(L) && (ee || typeof de != "string") ? (m[L] = de, L in H && (H[L] = zn)) : typeof de != "function" && Be(m, L, de);
                  else if (H[Y] = null, L === "value" || L === "checked") {
                    let T = m;
                    const q = M === void 0;
                    if (L === "value") {
                      let se = T.defaultValue;
                      T.removeAttribute(L), T.defaultValue = se, T.value = T.__value = q ? se : null;
                    } else {
                      let se = T.defaultChecked;
                      T.removeAttribute(L), T.defaultChecked = se, T.checked = !!q && se;
                    }
                  } else m.removeAttribute(Y);
                }
                else m.value = m.__value = de;
              }
            } else Ot(m, de, M == null ? void 0 : M[Bi], C[Bi]), B[Y] = de, B[Bi] = C[Bi];
            else Nt(m, m.namespaceURI === "http://www.w3.org/1999/xhtml", de, V, M == null ? void 0 : M[Si], C[Si]), B[Y] = de, B[Si] = C[Si];
          }
          return Z && er(!0), B;
        })(n, i, f, s, o, c);
        b && h && "value" in f && ol(n, f.value);
        for (let m of Object.getOwnPropertySymbols(u)) f[m] || qn(u[m]);
        for (let m of Object.getOwnPropertySymbols(f)) {
          var x = f[m];
          m.description !== "@attach" || i && x === i[m] || (u[m] && qn(u[m]), u[m] = An(() => ah(n, () => x))), k[m] = x;
        }
        i = k;
      }), h) {
        var g = n;
        rl(() => {
          ol(g, i.value, !0), no(g);
        });
      }
      b = !0;
    });
  }
  function Xl(n) {
    var t;
    return (t = n.__attributes) != null ? t : n.__attributes = { [su]: n.nodeName.includes("-"), [ou]: n.namespaceURI === "http://www.w3.org/1999/xhtml" };
  }
  var du = /* @__PURE__ */ new Map();
  function gu(n) {
    var t, r = n.getAttribute("is") || n.nodeName, a = du.get(r);
    if (a) return a;
    du.set(r, a = []);
    for (var s = n, o = Element.prototype; o !== s; ) {
      for (var c in t = ec(s)) t[c].set && a.push(c);
      s = Fl(s);
    }
    return a;
  }
  function ih(n, t, r = t) {
    var a = /* @__PURE__ */ new WeakSet();
    (function(s, o, c, l = c) {
      s.addEventListener(o, () => Ul(c));
      const i = s.__on_r;
      s.__on_r = i ? () => {
        i(), l(!0);
      } : () => l(!0), zc();
    })(n, "input", async (s) => {
      var o = s ? n.defaultValue : n.value;
      if (o = ro(n) ? ao(o) : o, r(o), kn !== null && a.add(kn), await Ws(), o !== (o = t())) {
        var c = n.selectionStart, l = n.selectionEnd;
        n.value = o != null ? o : "", l !== null && (n.selectionStart = c, n.selectionEnd = Math.min(l, n.value.length));
      }
    }), (_t && n.defaultValue !== n.value || en(t) == null && n.value) && (r(ro(n) ? ao(n.value) : n.value), kn !== null && a.add(kn)), al(() => {
      var s = t();
      if (n === document.activeElement) {
        var o = el != null ? el : kn;
        if (a.has(o)) return;
      }
      ro(n) && s === ao(n.value) || (n.type !== "date" || s || n.value) && s !== n.value && (n.value = s != null ? s : "");
    });
  }
  function ro(n) {
    var t = n.type;
    return t === "number" || t === "range";
  }
  function ao(n) {
    return n === "" ? null : +n;
  }
  const io = class {
    constructor(n) {
      yt(this, Is), yt(this, La, /* @__PURE__ */ new WeakMap()), yt(this, Ui), yt(this, $l), wt(this, $l, n);
    }
    observe(n, t) {
      var r = Se(this, La).get(n) || /* @__PURE__ */ new Set();
      return r.add(t), Se(this, La).set(n, r), gn(this, Is, Jo).call(this).observe(n, Se(this, $l)), () => {
        var a = Se(this, La).get(n);
        a.delete(t), a.size === 0 && (Se(this, La).delete(n), Se(this, Ui).unobserve(n));
      };
    }
  };
  La = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakMap(), $l = /* @__PURE__ */ new WeakMap(), Is = /* @__PURE__ */ new WeakSet(), Jo = function() {
    var n;
    return (n = Se(this, Ui)) != null ? n : wt(this, Ui, new ResizeObserver((t) => {
      for (var r of t) for (var a of (io.entries.set(r.target, r), Se(this, La).get(r.target) || [])) a(r);
    }));
  }, wn(io, "entries", /* @__PURE__ */ new WeakMap());
  var lh = new io({ box: "border-box" });
  function es(n, t, r) {
    var a = lh.observe(n, () => r(n[t]));
    rl(() => (en(() => r(n[t])), a));
  }
  function hu(n, t) {
    return n === t || (n == null ? void 0 : n[sa]) === t;
  }
  function Ci(n = {}, t, r, a) {
    return rl(() => {
      var s, o;
      return al(() => {
        s = o, o = [], en(() => {
          n !== r(...o) && (t(n, ...o), s && hu(r(...s), n) && t(null, ...s));
        });
      }), () => {
        Ua(() => {
          o && hu(r(...o), n) && t(null, ...o);
        });
      };
    }), n;
  }
  function pu(n, t) {
    if (n.l.s) for (const r of n.l.s) e(r);
    t();
  }
  function bu(n, t, r) {
    if (n == null) return t(void 0), Mr;
    const a = en(() => n.subscribe(t, r));
    return a.unsubscribe ? () => a.unsubscribe() : a;
  }
  const Ii = [];
  function ga(n, t = Mr) {
    let r = null;
    const a = /* @__PURE__ */ new Set();
    function s(c) {
      if (Rl(n, c) && (n = c, r)) {
        const l = !Ii.length;
        for (const i of a) i[1](), Ii.push(i, n);
        if (l) {
          for (let i = 0; i < Ii.length; i += 2) Ii[i][0](Ii[i + 1]);
          Ii.length = 0;
        }
      }
    }
    function o(c) {
      s(c(n));
    }
    return { set: s, update: o, subscribe: function(c, l = Mr) {
      const i = [c, l];
      return a.add(i), a.size === 1 && (r = t(s, o) || Mr), c(n), () => {
        a.delete(i), a.size === 0 && r && (r(), r = null);
      };
    } };
  }
  let fu, ts = !1, lo = Symbol();
  function Ve(n, t, r) {
    var a;
    const s = (a = r[t]) != null ? a : r[t] = { store: null, source: Es(void 0), unsubscribe: Mr };
    if (s.store !== n && !(lo in r)) if (s.unsubscribe(), s.store = n != null ? n : null, n == null) s.source.v = void 0, s.unsubscribe = Mr;
    else {
      var o = !0;
      s.unsubscribe = bu(n, (c) => {
        o ? s.source.v = c : te(s.source, c);
      }), o = !1;
    }
    return n && lo in r ? (function(c) {
      let l;
      return bu(c, (i) => l = i)(), l;
    })(n) : e(s.source);
  }
  function mt() {
    const n = {};
    return [n, function() {
      Ns(() => {
        for (var t in n)
          n[t].unsubscribe();
        Ra(n, lo, { enumerable: !1, value: !0 });
      });
    }];
  }
  function _(n, t, r, a) {
    var s, o, c, l, i = !hi || !!(2 & r), u = !!(8 & r), h = !!(16 & r), b = a, g = !0, f = () => (g && (g = !1, b = h ? en(a) : a), b);
    if (u) {
      var k = sa in n || ic in n;
      c = (o = (s = Na(n, t)) == null ? void 0 : s.set) != null ? o : k && t in n ? (A) => n[t] = A : void 0;
    }
    var x, m = !1;
    if (u ? [l, m] = (function(A) {
      var H = ts;
      try {
        return ts = !1, [A(), ts];
      } finally {
        ts = H;
      }
    })(() => n[t]) : l = n[t], l === void 0 && a !== void 0 && (l = f(), c && (i && (function() {
      throw new Error("https://svelte.dev/e/props_invalid_value");
    })(), c(l))), x = i ? () => {
      var A = n[t];
      return A === void 0 ? f() : (g = !0, A);
    } : () => {
      var A = n[t];
      return A !== void 0 && (b = void 0), A === void 0 ? b : A;
    }, i && !(4 & r)) return x;
    if (c) {
      var M = n.$$legacy;
      return function(A, H) {
        return arguments.length > 0 ? (i && H && !M && !m || c(H ? x() : A), A) : x();
      };
    }
    var C = !1, V = (1 & r ? nl : Wl)(() => (C = !1, x()));
    u && e(V);
    var D = Gt;
    return function(A, H) {
      if (arguments.length > 0) {
        const ee = H ? e(V) : i && u ? gt(A) : A;
        return te(V, ee), C = !0, b !== void 0 && (b = ee), A;
      }
      return Ja && C || (D.f & di) !== 0 ? V.v : e(V);
    };
  }
  class sh {
    constructor(t) {
      var r, a;
      yt(this, xa), yt(this, Ir);
      var s = /* @__PURE__ */ new Map(), o = (l, i) => {
        var u = Es(i, !1, !1);
        return s.set(l, u), u;
      };
      const c = new Proxy({ ...t.props || {}, $$events: {} }, { get(l, i) {
        var u;
        return e((u = s.get(i)) != null ? u : o(i, Reflect.get(l, i)));
      }, has(l, i) {
        var u;
        return i === ic || (e((u = s.get(i)) != null ? u : o(i, Reflect.get(l, i))), Reflect.has(l, i));
      }, set(l, i, u) {
        var h;
        return te((h = s.get(i)) != null ? h : o(i, u), u), Reflect.set(l, i, u);
      } });
      wt(this, Ir, (t.hydrate ? nh : Yc)(t.component, { target: t.target, anchor: t.anchor, props: c, context: t.context, intro: (r = t.intro) != null && r, recover: t.recover })), (a = t == null ? void 0 : t.props) != null && a.$$host && t.sync !== !1 || v(), wt(this, xa, c.$$events);
      for (const l of Object.keys(Se(this, Ir))) l !== "$set" && l !== "$destroy" && l !== "$on" && Ra(this, l, { get() {
        return Se(this, Ir)[l];
      }, set(i) {
        Se(this, Ir)[l] = i;
      }, enumerable: !0 });
      Se(this, Ir).$set = (l) => {
        Object.assign(c, l);
      }, Se(this, Ir).$destroy = () => {
        (function(l, i) {
          const u = Ys.get(l);
          u ? (Ys.delete(l), u(i)) : Promise.resolve();
        })(Se(this, Ir));
      };
    }
    $set(t) {
      Se(this, Ir).$set(t);
    }
    $on(t, r) {
      Se(this, xa)[t] = Se(this, xa)[t] || [];
      const a = (...s) => r.call(this, ...s);
      return Se(this, xa)[t].push(a), () => {
        Se(this, xa)[t] = Se(this, xa)[t].filter((s) => s !== a);
      };
    }
    $destroy() {
      Se(this, Ir).$destroy();
    }
  }
  function ns(n, t, r, a) {
    var s;
    const o = (s = r[n]) == null ? void 0 : s.type;
    if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !a || !r[n]) return t;
    if (a === "toAttribute") switch (o) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t == null ? null : t;
      default:
        return t;
    }
    else switch (o) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
      default:
        return t;
      case "Number":
        return t != null ? +t : t;
    }
  }
  function Ze(n, t, r, a, s, o) {
    let c = class extends fu {
      constructor() {
        super(n, r, s), this.$$p_d = t;
      }
      static get observedAttributes() {
        return Ol(t).map((l) => (t[l].attribute || l).toLowerCase());
      }
    };
    return Ol(t).forEach((l) => {
      Ra(c.prototype, l, { get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      }, set(i) {
        var u;
        i = ns(l, i, t), this.$$d[l] = i;
        var h = this.$$c;
        h && ((u = Na(h, l)) != null && u.get ? h[l] = i : h.$set({ [l]: i }));
      } });
    }), a.forEach((l) => {
      Ra(c.prototype, l, { get() {
        var i;
        return (i = this.$$c) == null ? void 0 : i[l];
      } });
    }), o && (c = o(c)), n.element = c, c;
  }
  xa = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakMap(), typeof HTMLElement == "function" && (fu = class extends HTMLElement {
    constructor(n, t, r) {
      super(), wn(this, "$$ctor"), wn(this, "$$s"), wn(this, "$$c"), wn(this, "$$cn", !1), wn(this, "$$d", {}), wn(this, "$$r", !1), wn(this, "$$p_d", {}), wn(this, "$$l", {}), wn(this, "$$l_u", /* @__PURE__ */ new Map()), wn(this, "$$me"), this.$$ctor = n, this.$$s = t, r && this.attachShadow({ mode: "open" });
    }
    addEventListener(n, t, r) {
      if (this.$$l[n] = this.$$l[n] || [], this.$$l[n].push(t), this.$$c) {
        const a = this.$$c.$on(n, t);
        this.$$l_u.set(t, a);
      }
      super.addEventListener(n, t, r);
    }
    removeEventListener(n, t, r) {
      if (super.removeEventListener(n, t, r), this.$$c) {
        const a = this.$$l_u.get(t);
        a && (a(), this.$$l_u.delete(t));
      }
    }
    async connectedCallback() {
      if (this.$$cn = !0, !this.$$c) {
        let t = function(s) {
          return (o) => {
            const c = document.createElement("slot");
            s !== "default" && (c.name = s), p(o, c);
          };
        };
        if (await Promise.resolve(), !this.$$cn || this.$$c) return;
        const r = {}, a = (function(s) {
          const o = {};
          return s.childNodes.forEach((c) => {
            o[c.slot || "default"] = !0;
          }), o;
        })(this);
        for (const s of this.$$s) s in a && (s !== "default" || this.$$d.children ? r[s] = t(s) : (this.$$d.children = t(s), r.default = !0));
        for (const s of this.attributes) {
          const o = this.$$g_p(s.name);
          o in this.$$d || (this.$$d[o] = ns(o, s.value, this.$$p_d, "toProp"));
        }
        for (const s in this.$$p_d) s in this.$$d || this[s] === void 0 || (this.$$d[s] = this[s], delete this[s]);
        this.$$c = (n = { component: this.$$ctor, target: this.shadowRoot || this, props: { ...this.$$d, $$slots: r, $$host: this } }, new sh(n)), this.$$me = (function(s) {
          Za.ensure();
          const o = Tr(524352, s, !0);
          return () => {
            qn(o);
          };
        })(() => {
          al(() => {
            var s;
            this.$$r = !0;
            for (const o of Ol(this.$$c)) {
              if (!((s = this.$$p_d[o]) != null && s.reflect)) continue;
              this.$$d[o] = this.$$c[o];
              const c = ns(o, this.$$d[o], this.$$p_d, "toAttribute");
              c == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, c);
            }
            this.$$r = !1;
          });
        });
        for (const s in this.$$l) for (const o of this.$$l[s]) {
          const c = this.$$c.$on(s, o);
          this.$$l_u.set(o, c);
        }
        this.$$l = {};
      }
      var n;
    }
    attributeChangedCallback(n, t, r) {
      var a;
      this.$$r || (n = this.$$g_p(n), this.$$d[n] = ns(n, r, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [n]: this.$$d[n] }));
    }
    disconnectedCallback() {
      this.$$cn = !1, Promise.resolve().then(() => {
        !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
      });
    }
    $$g_p(n) {
      return Ol(this.$$p_d).find((t) => this.$$p_d[t].attribute === n || !this.$$p_d[t].attribute && t.toLowerCase() === n) || n;
    }
  });
  const oh = ["primaryBackground", "secondaryBackground", "primaryText", "secondaryText", "border", "overlay", "primaryAccent", "primaryAccentText", "badgeBackground", "badgeText", "error"].map((n) => `brand_${n}`), ch = { primaryBackground: "#EDEDED", secondaryBackground: "#FFFFFF", primaryText: "#000000", secondaryText: "#555555", border: "#0000004D", overlay: "#000000", primaryAccent: "#000000", primaryAccentText: "#FFFFFF", badgeBackground: "#000000", badgeText: "#FFFFFF", error: "#D72C2C" };
  function vu(n) {
    return typeof n == "string" && oh.includes(n);
  }
  function uh(n, t) {
    return vu(n) ? (function(r) {
      const a = r.slice(1).match(/../g).map((s) => parseInt(s, 16));
      return { red: a[0], green: a[1], blue: a[2], alpha: a.length > 3 ? a[3] / 255 : 1 };
    })((function(r, a) {
      var s;
      const o = (function(c) {
        return c.slice(6);
      })(r);
      return (s = a == null ? void 0 : a[o]) != null ? s : ch[o];
    })(n, t)) : n;
  }
  var ft = ((n) => (n.QuantityBreak = "quantity-break", n.Bxgy = "bxgy", n.Bundle = "bundle", n.MixAndMatch = "mix-and-match", n.Sku = "sku", n))(ft || {});
  function hr(n, t) {
    return vu(n) ? uh(n, t) : Array.isArray(n) ? n.map((r) => hr(r, t)) : n && typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r, a]) => [r, hr(a, t)])) : n;
  }
  const _u = "swatchSettings", ul = (n) => {
    const t = ga(n);
    return fi(_u, t), { swatchSettings: t, setSwatchSettings: (r) => {
      t.set(r);
    } };
  }, ku = () => {
    const n = bi(_u);
    if (!n) throw new Error("getSwatchSettings must be called within a component tree that has setupSwatchSettings initialized");
    return n;
  };
  var dh = $("<span> </span>"), gh = $("<div></div>");
  function ha(n, t) {
    tt(t, !0);
    const [r, a] = mt(), s = _(t, "product", 7), o = _(t, "class", 7, ""), c = ku(), l = d(() => Ve(c, "$swatchSettings", r).showSelectedSwatchName ? [] : s().options.map((f) => f.name));
    var i = { get product() {
      return s();
    }, set product(f) {
      s(f), v();
    }, get class() {
      return o();
    }, set class(f = "") {
      o(f), v();
    } }, u = ze(), h = ve(u), b = (f) => {
      var k = gh();
      At(k, 21, () => e(l), qr, (x, m) => {
        var M = dh(), C = w(M, !0);
        y(M), _e(() => kt(C, e(m))), p(x, M);
      }), y(k), _e(() => Nt(k, 1, sl(["kaching-bundles__bar-variant-names", o()]))), p(f, k);
    };
    G(h, (f) => {
      e(l).length && f(b);
    }), p(n, u);
    var g = nt(i);
    return a(), g;
  }
  Ze(ha, { product: {}, class: {} }, [], [], !0);
  const rs = Math.min, Xa = Math.max, as = Math.round, is = Math.floor, Hr = (n) => ({ x: n, y: n }), hh = { left: "right", right: "left", bottom: "top", top: "bottom" }, ph = { start: "end", end: "start" };
  function mu(n, t, r) {
    return Xa(n, rs(t, r));
  }
  function ls(n, t) {
    return typeof n == "function" ? n(t) : n;
  }
  function ei(n) {
    return n.split("-")[0];
  }
  function ss(n) {
    return n.split("-")[1];
  }
  function xu(n) {
    return n === "x" ? "y" : "x";
  }
  function yu(n) {
    return n === "y" ? "height" : "width";
  }
  const bh = /* @__PURE__ */ new Set(["top", "bottom"]);
  function Ma(n) {
    return bh.has(ei(n)) ? "y" : "x";
  }
  function wu(n) {
    return xu(Ma(n));
  }
  function so(n) {
    return n.replace(/start|end/g, (t) => ph[t]);
  }
  const Pu = ["left", "right"], Su = ["right", "left"], fh = ["top", "bottom"], vh = ["bottom", "top"];
  function _h(n, t, r, a) {
    const s = ss(n);
    let o = (function(c, l, i) {
      switch (c) {
        case "top":
        case "bottom":
          return i ? l ? Su : Pu : l ? Pu : Su;
        case "left":
        case "right":
          return l ? fh : vh;
        default:
          return [];
      }
    })(ei(n), r === "start", a);
    return s && (o = o.map((c) => c + "-" + s), t && (o = o.concat(o.map(so)))), o;
  }
  function os(n) {
    return n.replace(/left|right|bottom|top/g, (t) => hh[t]);
  }
  function cs(n) {
    const { x: t, y: r, width: a, height: s } = n;
    return { width: a, height: s, top: r, left: t, right: t + a, bottom: r + s, x: t, y: r };
  }
  function Bu(n, t, r) {
    let { reference: a, floating: s } = n;
    const o = Ma(t), c = wu(t), l = yu(c), i = ei(t), u = o === "y", h = a.x + a.width / 2 - s.width / 2, b = a.y + a.height / 2 - s.height / 2, g = a[l] / 2 - s[l] / 2;
    let f;
    switch (i) {
      case "top":
        f = { x: h, y: a.y - s.height };
        break;
      case "bottom":
        f = { x: h, y: a.y + a.height };
        break;
      case "right":
        f = { x: a.x + a.width, y: b };
        break;
      case "left":
        f = { x: a.x - s.width, y: b };
        break;
      default:
        f = { x: a.x, y: a.y };
    }
    switch (ss(t)) {
      case "start":
        f[c] -= g * (r && u ? -1 : 1);
        break;
      case "end":
        f[c] += g * (r && u ? -1 : 1);
    }
    return f;
  }
  async function Cu(n, t) {
    var r;
    t === void 0 && (t = {});
    const { x: a, y: s, platform: o, rects: c, elements: l, strategy: i } = n, { boundary: u = "clippingAncestors", rootBoundary: h = "viewport", elementContext: b = "floating", altBoundary: g = !1, padding: f = 0 } = ls(t, n), k = (function(A) {
      return typeof A != "number" ? (function(H) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...H };
      })(A) : { top: A, right: A, bottom: A, left: A };
    })(f), x = l[g ? b === "floating" ? "reference" : "floating" : b], m = cs(await o.getClippingRect({ element: (r = await (o.isElement == null ? void 0 : o.isElement(x))) == null || r ? x : x.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: u, rootBoundary: h, strategy: i })), M = b === "floating" ? { x: a, y: s, width: c.floating.width, height: c.floating.height } : c.reference, C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), V = await (o.isElement == null ? void 0 : o.isElement(C)) && await (o.getScale == null ? void 0 : o.getScale(C)) || { x: 1, y: 1 }, D = cs(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l, rect: M, offsetParent: C, strategy: i }) : M);
    return { top: (m.top - D.top + k.top) / V.y, bottom: (D.bottom - m.bottom + k.bottom) / V.y, left: (m.left - D.left + k.left) / V.x, right: (D.right - m.right + k.right) / V.x };
  }
  const kh = /* @__PURE__ */ new Set(["left", "top"]);
  function us() {
    return typeof window != "undefined";
  }
  function Mi(n) {
    return Iu(n) ? (n.nodeName || "").toLowerCase() : "#document";
  }
  function pr(n) {
    var t;
    return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
  }
  function Zr(n) {
    var t;
    return (t = (Iu(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
  }
  function Iu(n) {
    return !!us() && (n instanceof Node || n instanceof pr(n).Node);
  }
  function Gr(n) {
    return !!us() && (n instanceof Element || n instanceof pr(n).Element);
  }
  function Jr(n) {
    return !!us() && (n instanceof HTMLElement || n instanceof pr(n).HTMLElement);
  }
  function Mu(n) {
    return !(!us() || typeof ShadowRoot == "undefined") && (n instanceof ShadowRoot || n instanceof pr(n).ShadowRoot);
  }
  const mh = /* @__PURE__ */ new Set(["inline", "contents"]);
  function dl(n) {
    const { overflow: t, overflowX: r, overflowY: a, display: s } = Or(n);
    return /auto|scroll|overlay|hidden|clip/.test(t + a + r) && !mh.has(s);
  }
  const xh = /* @__PURE__ */ new Set(["table", "td", "th"]);
  function yh(n) {
    return xh.has(Mi(n));
  }
  const wh = [":popover-open", ":modal"];
  function ds(n) {
    return wh.some((t) => {
      try {
        return n.matches(t);
      } catch {
        return !1;
      }
    });
  }
  const Ph = ["transform", "translate", "scale", "rotate", "perspective"], Sh = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Bh = ["paint", "layout", "strict", "content"];
  function oo(n) {
    const t = co(), r = Gr(n) ? Or(n) : n;
    return Ph.some((a) => !!r[a] && r[a] !== "none") || !!r.containerType && r.containerType !== "normal" || !t && !!r.backdropFilter && r.backdropFilter !== "none" || !t && !!r.filter && r.filter !== "none" || Sh.some((a) => (r.willChange || "").includes(a)) || Bh.some((a) => (r.contain || "").includes(a));
  }
  function co() {
    return !(typeof CSS == "undefined" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
  }
  const Ch = /* @__PURE__ */ new Set(["html", "body", "#document"]);
  function zi(n) {
    return Ch.has(Mi(n));
  }
  function Or(n) {
    return pr(n).getComputedStyle(n);
  }
  function gs(n) {
    return Gr(n) ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop } : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
  }
  function za(n) {
    if (Mi(n) === "html") return n;
    const t = n.assignedSlot || n.parentNode || Mu(n) && n.host || Zr(n);
    return Mu(t) ? t.host : t;
  }
  function zu(n) {
    const t = za(n);
    return zi(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : Jr(t) && dl(t) ? t : zu(t);
  }
  function gl(n, t, r) {
    var a;
    t === void 0 && (t = []), r === void 0 && (r = !0);
    const s = zu(n), o = s === ((a = n.ownerDocument) == null ? void 0 : a.body), c = pr(s);
    if (o) {
      const l = uo(c);
      return t.concat(c, c.visualViewport || [], dl(s) ? s : [], l && r ? gl(l) : []);
    }
    return t.concat(s, gl(s, [], r));
  }
  function uo(n) {
    return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
  }
  function $u(n) {
    const t = Or(n);
    let r = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
    const s = Jr(n), o = s ? n.offsetWidth : r, c = s ? n.offsetHeight : a, l = as(r) !== o || as(a) !== c;
    return l && (r = o, a = c), { width: r, height: a, $: l };
  }
  function go(n) {
    return Gr(n) ? n : n.contextElement;
  }
  function $i(n) {
    const t = go(n);
    if (!Jr(t)) return Hr(1);
    const r = t.getBoundingClientRect(), { width: a, height: s, $: o } = $u(t);
    let c = (o ? as(r.width) : r.width) / a, l = (o ? as(r.height) : r.height) / s;
    return c && Number.isFinite(c) || (c = 1), l && Number.isFinite(l) || (l = 1), { x: c, y: l };
  }
  const Ih = Hr(0);
  function Du(n) {
    const t = pr(n);
    return co() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : Ih;
  }
  function ti(n, t, r, a) {
    t === void 0 && (t = !1), r === void 0 && (r = !1);
    const s = n.getBoundingClientRect(), o = go(n);
    let c = Hr(1);
    t && (a ? Gr(a) && (c = $i(a)) : c = $i(n));
    const l = (function(g, f, k) {
      return f === void 0 && (f = !1), !(!k || f && k !== pr(g)) && f;
    })(o, r, a) ? Du(o) : Hr(0);
    let i = (s.left + l.x) / c.x, u = (s.top + l.y) / c.y, h = s.width / c.x, b = s.height / c.y;
    if (o) {
      const g = pr(o), f = a && Gr(a) ? pr(a) : a;
      let k = g, x = uo(k);
      for (; x && a && f !== k; ) {
        const m = $i(x), M = x.getBoundingClientRect(), C = Or(x), V = M.left + (x.clientLeft + parseFloat(C.paddingLeft)) * m.x, D = M.top + (x.clientTop + parseFloat(C.paddingTop)) * m.y;
        i *= m.x, u *= m.y, h *= m.x, b *= m.y, i += V, u += D, k = pr(x), x = uo(k);
      }
    }
    return cs({ width: h, height: b, x: i, y: u });
  }
  function hs(n, t) {
    const r = gs(n).scrollLeft;
    return t ? t.left + r : ti(Zr(n)).left + r;
  }
  function Tu(n, t) {
    const r = n.getBoundingClientRect();
    return { x: r.left + t.scrollLeft - hs(n, r), y: r.top + t.scrollTop };
  }
  const Mh = /* @__PURE__ */ new Set(["absolute", "fixed"]);
  function Vu(n, t, r) {
    let a;
    if (t === "viewport") a = (function(s, o) {
      const c = pr(s), l = Zr(s), i = c.visualViewport;
      let u = l.clientWidth, h = l.clientHeight, b = 0, g = 0;
      if (i) {
        u = i.width, h = i.height;
        const k = co();
        (!k || k && o === "fixed") && (b = i.offsetLeft, g = i.offsetTop);
      }
      const f = hs(l);
      if (f <= 0) {
        const k = l.ownerDocument, x = k.body, m = getComputedStyle(x), M = k.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, C = Math.abs(l.clientWidth - x.clientWidth - M);
        C <= 25 && (u -= C);
      } else f <= 25 && (u += f);
      return { width: u, height: h, x: b, y: g };
    })(n, r);
    else if (t === "document") a = (function(s) {
      const o = Zr(s), c = gs(s), l = s.ownerDocument.body, i = Xa(o.scrollWidth, o.clientWidth, l.scrollWidth, l.clientWidth), u = Xa(o.scrollHeight, o.clientHeight, l.scrollHeight, l.clientHeight);
      let h = -c.scrollLeft + hs(s);
      const b = -c.scrollTop;
      return Or(l).direction === "rtl" && (h += Xa(o.clientWidth, l.clientWidth) - i), { width: i, height: u, x: h, y: b };
    })(Zr(n));
    else if (Gr(t)) a = (function(s, o) {
      const c = ti(s, !0, o === "fixed"), l = c.top + s.clientTop, i = c.left + s.clientLeft, u = Jr(s) ? $i(s) : Hr(1);
      return { width: s.clientWidth * u.x, height: s.clientHeight * u.y, x: i * u.x, y: l * u.y };
    })(t, r);
    else {
      const s = Du(n);
      a = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
    }
    return cs(a);
  }
  function Au(n, t) {
    const r = za(n);
    return !(r === t || !Gr(r) || zi(r)) && (Or(r).position === "fixed" || Au(r, t));
  }
  function zh(n, t, r) {
    const a = Jr(t), s = Zr(t), o = r === "fixed", c = ti(n, !0, o, t);
    let l = { scrollLeft: 0, scrollTop: 0 };
    const i = Hr(0);
    function u() {
      i.x = hs(s);
    }
    if (a || !a && !o) if ((Mi(t) !== "body" || dl(s)) && (l = gs(t)), a) {
      const b = ti(t, !0, o, t);
      i.x = b.x + t.clientLeft, i.y = b.y + t.clientTop;
    } else s && u();
    o && !a && s && u();
    const h = !s || a || o ? Hr(0) : Tu(s, l);
    return { x: c.left + l.scrollLeft - i.x - h.x, y: c.top + l.scrollTop - i.y - h.y, width: c.width, height: c.height };
  }
  function ho(n) {
    return Or(n).position === "static";
  }
  function qu(n, t) {
    if (!Jr(n) || Or(n).position === "fixed") return null;
    if (t) return t(n);
    let r = n.offsetParent;
    return Zr(n) === r && (r = r.ownerDocument.body), r;
  }
  function Gu(n, t) {
    const r = pr(n);
    if (ds(n)) return r;
    if (!Jr(n)) {
      let s = za(n);
      for (; s && !zi(s); ) {
        if (Gr(s) && !ho(s)) return s;
        s = za(s);
      }
      return r;
    }
    let a = qu(n, t);
    for (; a && yh(a) && ho(a); ) a = qu(a, t);
    return a && zi(a) && ho(a) && !oo(a) ? r : a || (function(s) {
      let o = za(s);
      for (; Jr(o) && !zi(o); ) {
        if (oo(o)) return o;
        if (ds(o)) return null;
        o = za(o);
      }
      return null;
    })(n) || r;
  }
  const $h = { convertOffsetParentRelativeRectToViewportRelativeRect: function(n) {
    let { elements: t, rect: r, offsetParent: a, strategy: s } = n;
    const o = s === "fixed", c = Zr(a), l = !!t && ds(t.floating);
    if (a === c || l && o) return r;
    let i = { scrollLeft: 0, scrollTop: 0 }, u = Hr(1);
    const h = Hr(0), b = Jr(a);
    if ((b || !b && !o) && ((Mi(a) !== "body" || dl(c)) && (i = gs(a)), Jr(a))) {
      const f = ti(a);
      u = $i(a), h.x = f.x + a.clientLeft, h.y = f.y + a.clientTop;
    }
    const g = !c || b || o ? Hr(0) : Tu(c, i);
    return { width: r.width * u.x, height: r.height * u.y, x: r.x * u.x - i.scrollLeft * u.x + h.x + g.x, y: r.y * u.y - i.scrollTop * u.y + h.y + g.y };
  }, getDocumentElement: Zr, getClippingRect: function(n) {
    let { element: t, boundary: r, rootBoundary: a, strategy: s } = n;
    const o = [...r === "clippingAncestors" ? ds(t) ? [] : (function(i, u) {
      const h = u.get(i);
      if (h) return h;
      let b = gl(i, [], !1).filter((x) => Gr(x) && Mi(x) !== "body"), g = null;
      const f = Or(i).position === "fixed";
      let k = f ? za(i) : i;
      for (; Gr(k) && !zi(k); ) {
        const x = Or(k), m = oo(k);
        m || x.position !== "fixed" || (g = null), (f ? !m && !g : !m && x.position === "static" && g && Mh.has(g.position) || dl(k) && !m && Au(i, k)) ? b = b.filter((M) => M !== k) : g = x, k = za(k);
      }
      return u.set(i, b), b;
    })(t, this._c) : [].concat(r), a], c = o[0], l = o.reduce((i, u) => {
      const h = Vu(t, u, s);
      return i.top = Xa(h.top, i.top), i.right = rs(h.right, i.right), i.bottom = rs(h.bottom, i.bottom), i.left = Xa(h.left, i.left), i;
    }, Vu(t, c, s));
    return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
  }, getOffsetParent: Gu, getElementRects: async function(n) {
    const t = this.getOffsetParent || Gu, r = this.getDimensions, a = await r(n.floating);
    return { reference: zh(n.reference, await t(n.floating), n.strategy), floating: { x: 0, y: 0, width: a.width, height: a.height } };
  }, getClientRects: function(n) {
    return Array.from(n.getClientRects());
  }, getDimensions: function(n) {
    const { width: t, height: r } = $u(n);
    return { width: t, height: r };
  }, getScale: $i, isElement: Gr, isRTL: function(n) {
    return Or(n).direction === "rtl";
  } };
  function Ou(n, t) {
    return n.x === t.x && n.y === t.y && n.width === t.width && n.height === t.height;
  }
  function Dh(n, t, r, a) {
    a === void 0 && (a = {});
    const { ancestorScroll: s = !0, ancestorResize: o = !0, elementResize: c = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: i = !1 } = a, u = go(n), h = s || o ? [...u ? gl(u) : [], ...gl(t)] : [];
    h.forEach((m) => {
      s && m.addEventListener("scroll", r, { passive: !0 }), o && m.addEventListener("resize", r);
    });
    const b = u && l ? (function(m, M) {
      let C, V = null;
      const D = Zr(m);
      function A() {
        var H;
        clearTimeout(C), (H = V) == null || H.disconnect(), V = null;
      }
      return (function H(ee, I) {
        ee === void 0 && (ee = !1), I === void 0 && (I = 1), A();
        const Z = m.getBoundingClientRect(), { left: B, top: E, width: ue, height: z } = Z;
        if (ee || M(), !ue || !z) return;
        const N = { rootMargin: -is(E) + "px " + -is(D.clientWidth - (B + ue)) + "px " + -is(D.clientHeight - (E + z)) + "px " + -is(B) + "px", threshold: Xa(0, rs(1, I)) || 1 };
        let S = !0;
        function P(L) {
          const j = L[0].intersectionRatio;
          if (j !== I) {
            if (!S) return H();
            j ? H(!1, j) : C = setTimeout(() => {
              H(!1, 1e-7);
            }, 1e3);
          }
          j !== 1 || Ou(Z, m.getBoundingClientRect()) || H(), S = !1;
        }
        try {
          V = new IntersectionObserver(P, { ...N, root: D.ownerDocument });
        } catch {
          V = new IntersectionObserver(P, N);
        }
        V.observe(m);
      })(!0), A;
    })(u, r) : null;
    let g, f = -1, k = null;
    c && (k = new ResizeObserver((m) => {
      let [M] = m;
      M && M.target === u && k && (k.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
        var C;
        (C = k) == null || C.observe(t);
      })), r();
    }), u && !i && k.observe(u), k.observe(t));
    let x = i ? ti(n) : null;
    return i && (function m() {
      const M = ti(n);
      x && !Ou(x, M) && r(), x = M, g = requestAnimationFrame(m);
    })(), r(), () => {
      var m;
      h.forEach((M) => {
        s && M.removeEventListener("scroll", r), o && M.removeEventListener("resize", r);
      }), b == null || b(), (m = k) == null || m.disconnect(), k = null, i && cancelAnimationFrame(g);
    };
  }
  const Th = function(n) {
    return { name: "offset", options: n, async fn(t) {
      var r, a;
      const { x: s, y: o, placement: c, middlewareData: l } = t, i = await (async function(u, h) {
        const { placement: b, platform: g, elements: f } = u, k = await (g.isRTL == null ? void 0 : g.isRTL(f.floating)), x = ei(b), m = ss(b), M = Ma(b) === "y", C = kh.has(x) ? -1 : 1, V = k && M ? -1 : 1, D = ls(h, u);
        let { mainAxis: A, crossAxis: H, alignmentAxis: ee } = typeof D == "number" ? { mainAxis: D, crossAxis: 0, alignmentAxis: null } : { mainAxis: D.mainAxis || 0, crossAxis: D.crossAxis || 0, alignmentAxis: D.alignmentAxis };
        return m && typeof ee == "number" && (H = m === "end" ? -1 * ee : ee), M ? { x: H * V, y: A * C } : { x: A * C, y: H * V };
      })(t, n);
      return c === ((r = l.offset) == null ? void 0 : r.placement) && (a = l.arrow) != null && a.alignmentOffset ? {} : { x: s + i.x, y: o + i.y, data: { ...i, placement: c } };
    } };
  }, Vh = function(n) {
    return n === void 0 && (n = {}), { name: "shift", options: n, async fn(t) {
      const { x: r, y: a, placement: s } = t, { mainAxis: o = !0, crossAxis: c = !1, limiter: l = { fn: (m) => {
        let { x: M, y: C } = m;
        return { x: M, y: C };
      } }, ...i } = ls(n, t), u = { x: r, y: a }, h = await Cu(t, i), b = Ma(ei(s)), g = xu(b);
      let f = u[g], k = u[b];
      if (o) {
        const m = g === "y" ? "bottom" : "right";
        f = mu(f + h[g === "y" ? "top" : "left"], f, f - h[m]);
      }
      if (c) {
        const m = b === "y" ? "bottom" : "right";
        k = mu(k + h[b === "y" ? "top" : "left"], k, k - h[m]);
      }
      const x = l.fn({ ...t, [g]: f, [b]: k });
      return { ...x, data: { x: x.x - r, y: x.y - a, enabled: { [g]: o, [b]: c } } };
    } };
  }, Ah = function(n) {
    return n === void 0 && (n = {}), { name: "flip", options: n, async fn(t) {
      var r, a;
      const { placement: s, middlewareData: o, rects: c, initialPlacement: l, platform: i, elements: u } = t, { mainAxis: h = !0, crossAxis: b = !0, fallbackPlacements: g, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: k = "none", flipAlignment: x = !0, ...m } = ls(n, t);
      if ((r = o.arrow) != null && r.alignmentOffset) return {};
      const M = ei(s), C = Ma(l), V = ei(l) === l, D = await (i.isRTL == null ? void 0 : i.isRTL(u.floating)), A = g || (V || !x ? [os(l)] : (function(N) {
        const S = os(N);
        return [so(N), S, so(S)];
      })(l)), H = k !== "none";
      !g && H && A.push(..._h(l, x, k, D));
      const ee = [l, ...A], I = await Cu(t, m), Z = [];
      let B = ((a = o.flip) == null ? void 0 : a.overflows) || [];
      if (h && Z.push(I[M]), b) {
        const N = (function(S, P, L) {
          L === void 0 && (L = !1);
          const j = ss(S), Y = wu(S), de = yu(Y);
          let T = Y === "x" ? j === (L ? "end" : "start") ? "right" : "left" : j === "start" ? "bottom" : "top";
          return P.reference[de] > P.floating[de] && (T = os(T)), [T, os(T)];
        })(s, c, D);
        Z.push(I[N[0]], I[N[1]]);
      }
      if (B = [...B, { placement: s, overflows: Z }], !Z.every((N) => N <= 0)) {
        var E, ue;
        const N = (((E = o.flip) == null ? void 0 : E.index) || 0) + 1, S = ee[N];
        if (S && (!(b === "alignment" && C !== Ma(S)) || B.every((L) => Ma(L.placement) !== C || L.overflows[0] > 0)))
          return { data: { index: N, overflows: B }, reset: { placement: S } };
        let P = (ue = B.filter((L) => L.overflows[0] <= 0).sort((L, j) => L.overflows[1] - j.overflows[1])[0]) == null ? void 0 : ue.placement;
        if (!P) switch (f) {
          case "bestFit": {
            var z;
            const L = (z = B.filter((j) => {
              if (H) {
                const Y = Ma(j.placement);
                return Y === C || Y === "y";
              }
              return !0;
            }).map((j) => [j.placement, j.overflows.filter((Y) => Y > 0).reduce((Y, de) => Y + de, 0)]).sort((j, Y) => j[1] - Y[1])[0]) == null ? void 0 : z[0];
            L && (P = L);
            break;
          }
          case "initialPlacement":
            P = l;
        }
        if (s !== P) return { reset: { placement: P } };
      }
      return {};
    } };
  }, qh = (n, t, r) => {
    const a = /* @__PURE__ */ new Map(), s = { platform: $h, ...r }, o = { ...s.platform, _c: a };
    return (async (c, l, i) => {
      const { placement: u = "bottom", strategy: h = "absolute", middleware: b = [], platform: g } = i, f = b.filter(Boolean), k = await (g.isRTL == null ? void 0 : g.isRTL(l));
      let x = await g.getElementRects({ reference: c, floating: l, strategy: h }), { x: m, y: M } = Bu(x, u, k), C = u, V = {}, D = 0;
      for (let A = 0; A < f.length; A++) {
        const { name: H, fn: ee } = f[A], { x: I, y: Z, data: B, reset: E } = await ee({ x: m, y: M, initialPlacement: u, placement: C, strategy: h, middlewareData: V, rects: x, platform: g, elements: { reference: c, floating: l } });
        m = I != null ? I : m, M = Z != null ? Z : M, V = { ...V, [H]: { ...V[H], ...B } }, E && D <= 50 && (D++, typeof E == "object" && (E.placement && (C = E.placement), E.rects && (x = E.rects === !0 ? await g.getElementRects({ reference: c, floating: l, strategy: h }) : E.rects), { x: m, y: M } = Bu(x, C, k)), A = -1);
      }
      return { x: m, y: M, placement: C, strategy: h, middlewareData: V };
    })(n, t, { ...s, platform: o });
  };
  function br(n) {
    const t = { bold: "bold", light: "300", medium: "500", regular: "normal" };
    for (const r in t) if (n.includes(r)) return t[r];
    return "normal";
  }
  function fr(n) {
    return n.includes("italic") ? "italic" : "normal";
  }
  function We(n) {
    return n ? `rgba(${n.red}, ${n.green}, ${n.blue}, ${n.alpha})` : "";
  }
  function Fu(n) {
    return n && n.text && n.background ? `--bar-most-popular-background-color: ${We(n.background)}; --bar-most-popular-color: ${We(n.text)};` : "";
  }
  const Gh = { "SF Mono": '"SF Mono", ui-monospace, Menlo, monospace', Helvetica: '"Helvetica Neue", Helvetica, -apple-system, sans-serif', "New York": '"New York", ui-serif, Georgia, serif', "System UI": "system-ui, -apple-system, BlinkMacSystemFont, sans-serif" };
  function Oh(n) {
    var t;
    return (t = Gh[n]) != null ? t : `"${n}"`;
  }
  function _n(n) {
    return Object.entries(n).reduce((t, [r, a]) => (a && t.push(`--${r}:${a}`), t), []).join(";");
  }
  function Lu(n) {
    var t, r;
    const { colors: a, fonts: s, cornerRadius: o, spacing: c, imageSize: l, imageCornerRadius: i, bundleBarsPerRow: u, dealBars: h } = n, b = a.border || a.primary, g = Math.min(h.length, u ? parseInt(u) : 3).toString();
    return _n({ "block-font-family": s.fontFamily ? Oh(s.fontFamily) : null, "block-title-color": We(a.title), "block-title-font-size": s.blockTitle.size + "px", "block-title-font-weight": br(s.blockTitle.style), "block-title-font-style": fr(s.blockTitle.style), "block-spacing": c == null ? void 0 : c.toString(), "bar-border-radius": (o || 0) + "px", "badge-concave-depth": Math.min(o || 0, 12) + "px", "bar-background-color": We(a.background), "bar-selected-background-color": We(a.selectedBackground || a.background), "bar-border-color": We({ ...b, alpha: 0.3 * b.alpha }), "bar-selected-border-color": We(b), "block-block-title-color": We(a.blockTitle || a.title), "bar-title-color": We(a.title), "bar-title-font-size": s.title.size + "px", "bar-title-font-weight": br(s.title.style), "bar-title-font-style": fr(s.title.style), "bar-subtitle-color": We(a.subtitle), "bar-subtitle-font-size": s.subtitle.size + "px", "bar-subtitle-font-weight": br(s.subtitle.style), "bar-subtitle-font-style": fr(s.subtitle.style), "bar-price-color": We(a.price || a.title), "bar-full-price-color": We(a.fullPrice || a.subtitle), "bar-label-border-top-radius": (o ? o - 1 : 0) + "px", "bar-label-background-color": We(a.labelBackground), "bar-label-color": We(a.label), "bar-label-font-size": s.label.size + "px", "bar-label-font-weight": br(s.label.style), "bar-label-font-style": fr(s.label.style), "bar-most-popular-background-color": We(a.badgeBackground), "bar-most-popular-color": We(a.badgeText), "bar-variant-select-border-radius": (o || 0) / 2 + "px", "bar-image-size": (l || 48) + "px", "bar-image-border-radius": (i || 0) + "px", "kaching-bundle-products-image-border-radius": (o || 0) / 2 + "px", "kaching-bundles-unit-label-font-size": s.unitLabel ? s.unitLabel.size + "px" : null, "kaching-bundles-unit-label-font-weight": s.unitLabel ? br(s.unitLabel.style) : null, "kaching-bundles-unit-label-font-style": s.unitLabel ? fr(s.unitLabel.style) : null, "bundle-bars-per-row": g, "kaching-collection-breaks-require-selection-background-color": ((t = n.collectionBreaks) == null ? void 0 : t.requireItemSelectionAlert) && We(n.collectionBreaks.requireItemSelectionAlert.backgroundColor), "kaching-collection-breaks-require-selection-text-color": ((r = n.collectionBreaks) == null ? void 0 : r.requireItemSelectionAlert) && We(n.collectionBreaks.requireItemSelectionAlert.textColor) });
  }
  const ju = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, Fh = (n) => {
    const t = n.replace(/[^a-zA-Z]+/g, "").toLowerCase();
    if (!(t in ju)) return;
    const r = ju[t];
    return { red: r[0], green: r[1], blue: r[2], alpha: 1 };
  }, Lh = (n, t) => ({ red: Math.max(0, n.red - Math.round(n.red * t)), green: Math.max(0, n.green - Math.round(n.green * t)), blue: Math.max(0, n.blue - Math.round(n.blue * t)), alpha: n.alpha });
  var jh = $("<div></div>");
  function ps(n, t) {
    tt(t, !0);
    let r = _(t, "color", 7), a = _(t, "image", 7), s = _(t, "size", 7), o = _(t, "shape", 7), c = _(t, "unavailable", 7, !1);
    const l = d(() => r() ? (function(g) {
      g = g.replace(/^#/, "");
      let f = parseInt(g, 16);
      return { red: f >> 16 & 255, green: f >> 8 & 255, blue: 255 & f, alpha: 1 };
    })(r()) : null), i = d(() => {
      let g = { "kaching-swatch-size": `${s() - 2}px` };
      const f = { rounded: 20, circle: 50 }[o()];
      return f && (g = { ...g, "kaching-swatch-border-radius": `${f}%` }), a() ? g = { ...g, "kaching-swatch-image-url": `url(${a()})` } : e(l) && (g = { ...g, "kaching-swatch-color": We(e(l)), "kaching-swatch-border-color": We(Lh(e(l), 0.1)) }), _n(g);
    });
    var u = { get color() {
      return r();
    }, set color(g) {
      r(g), v();
    }, get image() {
      return a();
    }, set image(g) {
      a(g), v();
    }, get size() {
      return s();
    }, set size(g) {
      s(g), v();
    }, get shape() {
      return o();
    }, set shape(g) {
      o(g), v();
    }, get unavailable() {
      return c();
    }, set unavailable(g = !1) {
      c(g), v();
    } }, h = jh();
    let b;
    return _e((g) => {
      b = Nt(h, 1, "kaching-bundles__swatch", null, b, g), Ot(h, e(i));
    }, [() => ({ "kaching-bundles__swatch--unavailable": c() })]), p(n, h), nt(u);
  }
  function Xt(n, t) {
    tt(t, !0);
    let r = _(t, "element", 7, "button"), a = _(t, "class", 7), s = _(t, "onclick", 7), o = _(t, "onkeydown", 7), c = _(t, "data-value", 7), l = _(t, "title", 7), i = _(t, "id", 7), u = _(t, "role", 7), h = _(t, "aria-label", 7), b = _(t, "aria-expanded", 7), g = _(t, "aria-haspopup", 7), f = _(t, "aria-selected", 7), k = _(t, "aria-checked", 7), x = _(t, "aria-activedescendant", 7), m = _(t, "aria-controls", 7), M = _(t, "tabindex", 7), C = _(t, "disabled", 7, !1), V = _(t, "ref", 15);
    function D(I) {
      o() && (o()(I), I.defaultPrevented) || C() || I.key !== "Enter" && I.key !== " " || (I.preventDefault(), I.currentTarget.click());
    }
    function A(I) {
      var Z;
      if (C()) return I.preventDefault(), void I.stopPropagation();
      (Z = s()) == null || Z(I);
    }
    var H = { get element() {
      return r();
    }, set element(I = "button") {
      r(I), v();
    }, get class() {
      return a();
    }, set class(I) {
      a(I), v();
    }, get onclick() {
      return s();
    }, set onclick(I) {
      s(I), v();
    }, get onkeydown() {
      return o();
    }, set onkeydown(I) {
      o(I), v();
    }, get "data-value"() {
      return c();
    }, set "data-value"(I) {
      c(I), v();
    }, get title() {
      return l();
    }, set title(I) {
      l(I), v();
    }, get id() {
      return i();
    }, set id(I) {
      i(I), v();
    }, get role() {
      return u();
    }, set role(I) {
      u(I), v();
    }, get "aria-label"() {
      return h();
    }, set "aria-label"(I) {
      h(I), v();
    }, get "aria-expanded"() {
      return b();
    }, set "aria-expanded"(I) {
      b(I), v();
    }, get "aria-haspopup"() {
      return g();
    }, set "aria-haspopup"(I) {
      g(I), v();
    }, get "aria-selected"() {
      return f();
    }, set "aria-selected"(I) {
      f(I), v();
    }, get "aria-checked"() {
      return k();
    }, set "aria-checked"(I) {
      k(I), v();
    }, get "aria-activedescendant"() {
      return x();
    }, set "aria-activedescendant"(I) {
      x(I), v();
    }, get "aria-controls"() {
      return m();
    }, set "aria-controls"(I) {
      m(I), v();
    }, get tabindex() {
      return M();
    }, set tabindex(I) {
      M(I), v();
    }, get disabled() {
      return C();
    }, set disabled(I = !1) {
      C(I), v();
    }, get ref() {
      return V();
    }, set ref(I) {
      V(I), v();
    } }, ee = ze();
    return nu(ve(ee), r, 0, (I, Z) => {
      Ci(I, (E) => V(E), () => V()), uu(I, () => {
        var E, ue;
        return { role: (E = u()) != null ? E : "button", tabindex: (ue = M()) != null ? ue : C() ? -1 : 0, class: a(), onclick: A, "data-value": c(), title: l(), id: i(), "aria-label": h(), "aria-expanded": b(), "aria-haspopup": g(), "aria-selected": f(), "aria-checked": k(), "aria-activedescendant": x(), "aria-controls": m(), "aria-disabled": C() ? "true" : void 0, onkeydown: D };
      });
      var B = ze();
      eu(ve(B), t, "default", {}), p(Z, B);
    }), p(n, ee), nt(H);
  }
  Ze(ps, { color: {}, image: {}, size: {}, shape: {}, unavailable: {} }, [], [], !0), Ze(Xt, { element: {}, class: {}, onclick: {}, onkeydown: {}, "data-value": {}, title: {}, id: {}, role: {}, "aria-label": {}, "aria-expanded": {}, "aria-haspopup": {}, "aria-selected": {}, "aria-checked": {}, "aria-activedescendant": {}, "aria-controls": {}, tabindex: {}, disabled: {}, ref: {} }, ["default"], [], !0);
  const Eu = "translations", ni = (n = {}) => {
    const t = ga(Ru(n));
    return fi(Eu, t), { translate: t, setTranslations: (r) => {
      t.set(Ru(r));
    } };
  }, zt = () => {
    const n = bi(Eu);
    if (!n) throw new Error("getTranslations must be called within a component tree that has setupTranslations initialized");
    return n;
  }, Ru = (n) => (t) => n[t] || t;
  async function wr(n, t, r = {}, a = !0) {
    a && await Ws();
    const s = new CustomEvent(t, { detail: r, bubbles: !0, cancelable: !0, composed: !0 });
    n.dispatchEvent(s);
  }
  function Kt(n) {
    return typeof n == "number" ? n : Number(n.split("/").pop());
  }
  function Nu(n, t) {
    return n.find((r) => r.options.every((a, s) => a === t[s]));
  }
  function Pr(n) {
    const t = n.variants.filter((r) => r.availableForSale);
    return t.length > 0 ? { ...n, variants: t } : n;
  }
  var Eh = $("<span> <!></span>"), Rh = $("<span> </span>"), Nh = $("<!> <!>", 1), Qh = $("<span> </span>"), Wh = $("<span> <!></span>"), Uh = $("<span> </span>"), Hh = $("<!> <!>", 1), Zh = $('<div class="kaching-bundles__swatch-dropdown__options" role="listbox"></div>'), Jh = $('<div class="kaching-bundles__swatch-dropdown kaching-bundles-option"><!> <!></div>');
  function Qu(n, t) {
    tt(t, !0);
    const r = () => Ve(C, "$translate", a), [a, s] = mt();
    let o = _(t, "option", 7), c = _(t, "swatchSize", 7), l = _(t, "swatchShape", 7), i = _(t, "value", 7), u = _(t, "placeholderText", 7, void 0), h = _(t, "onChange", 7), b = Ge(!1), g = Ge(-1), f = Ge(void 0), k = Ge(void 0), x = d(() => o().optionValues.find((N) => N.name === i()) || (u() != null ? null : o().optionValues[0]));
    const m = `swatch-dropdown-${Math.random().toString(16).slice(2)}`;
    function M(N) {
      return `${m}-option-${N}`;
    }
    const C = zt();
    function V() {
      te(b, !0), te(g, o().optionValues.findIndex((N) => N.name === i()), !0), e(g) === -1 && te(g, 0);
    }
    function D() {
      te(b, !1), te(g, -1);
    }
    function A() {
      var N;
      D(), (N = e(f)) == null || N.focus();
    }
    function H(N) {
      i(N), A();
      try {
        const S = o().optionValues.find((P) => P.name === N);
        S != null && S.unavailable && wr(document.body, "kaching-unavailable-option-value-selected", { swatch: "dropdown" });
      } catch (S) {
        console.error(S);
      }
      h()(i());
    }
    function ee(N, S) {
      const P = (L) => {
        N.contains(L.target) || S();
      };
      return document.addEventListener("click", P, !0), { destroy() {
        document.removeEventListener("click", P, !0);
      } };
    }
    Ye(() => {
      if (e(b) && e(f) && e(k)) return Dh(e(f), e(k), async () => {
        if (!e(f) || !e(k)) return;
        const N = e(k), { x: S, y: P } = await qh(e(f), N, { placement: "bottom-start", strategy: "fixed", middleware: [Th(2), Ah(), Vh({ padding: 8 })] });
        N.style.left = `${S}px`, N.style.top = `${P}px`;
      });
    });
    var I = { get option() {
      return o();
    }, set option(N) {
      o(N), v();
    }, get swatchSize() {
      return c();
    }, set swatchSize(N) {
      c(N), v();
    }, get swatchShape() {
      return l();
    }, set swatchShape(N) {
      l(N), v();
    }, get value() {
      return i();
    }, set value(N) {
      i(N), v();
    }, get placeholderText() {
      return u();
    }, set placeholderText(N = void 0) {
      u(N), v();
    }, get onChange() {
      return h();
    }, set onChange(N) {
      h(N), v();
    } }, Z = Jh(), B = w(Z);
    {
      let N = d(() => e(b) && e(g) >= 0 ? M(e(g)) : void 0);
      Xt(B, { element: "span", class: "kaching-bundles__bar-variant-select", role: "combobox", get "aria-label"() {
        return o().name;
      }, onclick: function(S) {
        e(b) ? (te(b, !1), te(g, -1)) : V(), S.preventDefault();
      }, onkeydown: function(S) {
        if (!e(b)) return void (S.key !== "ArrowDown" && S.key !== "ArrowUp" && S.key !== "Enter" && S.key !== " " || (S.preventDefault(), V()));
        const P = o().optionValues.length;
        switch (S.key) {
          case "Escape":
            S.preventDefault(), A();
            break;
          case "ArrowDown":
            S.preventDefault(), te(g, e(g) < P - 1 ? e(g) + 1 : 0, !0);
            break;
          case "ArrowUp":
            S.preventDefault(), te(g, e(g) > 0 ? e(g) - 1 : P - 1, !0);
            break;
          case "Home":
            S.preventDefault(), te(g, 0);
            break;
          case "End":
            S.preventDefault(), te(g, P - 1);
            break;
          case "Enter":
          case " ":
            S.preventDefault(), e(g) >= 0 && H(o().optionValues[e(g)].name);
        }
      }, get "aria-expanded"() {
        return e(b);
      }, "aria-haspopup": "listbox", get "aria-controls"() {
        return m;
      }, get "aria-activedescendant"() {
        return e(N);
      }, get ref() {
        return e(f);
      }, set ref(S) {
        te(f, S, !0);
      }, children: (S, P) => {
        var L = ze(), j = ve(L), Y = (T) => {
          var q = Nh(), se = ve(q);
          ps(se, { get color() {
            return e(x).swatch.color;
          }, get image() {
            return e(x).swatch.image;
          }, get size() {
            return c();
          }, get shape() {
            return l();
          }, get unavailable() {
            return e(x).unavailable;
          } }), lt(O(se, 2), () => e(x).name, (le) => {
            var W = ze(), oe = ve(W), K = (U) => {
              var X = Eh(), ne = w(X);
              Le(O(ne), () => r()("system.unavailable_option_value")), y(X), _e(() => {
                var J;
                return kt(ne, `${(J = e(x).name) != null ? J : ""} - `);
              }), p(U, X);
            }, Q = (U) => {
              var X = Rh(), ne = w(X, !0);
              y(X), _e(() => kt(ne, e(x).name)), p(U, X);
            };
            G(oe, (U) => {
              e(x).unavailable ? U(K) : U(Q, !1);
            }), p(le, W);
          }), p(T, q);
        }, de = (T) => {
          var q = Qh(), se = w(q, !0);
          y(q), _e(() => kt(se, u())), p(T, q);
        };
        G(j, (T) => {
          e(x) ? T(Y) : T(de, !1);
        }), p(S, L);
      }, $$slots: { default: !0 } });
    }
    var E = O(B, 2), ue = (N) => {
      var S = Zh();
      At(S, 23, () => o().optionValues, (P) => P.name, (P, L, j) => {
        {
          let Y = d(() => ["kaching-bundles__swatch-dropdown__option", "kaching-bundles-option-value", e(j) === e(g) && "kaching-bundles__swatch-dropdown__option--focused"]), de = d(() => M(e(j))), T = d(() => e(L).name === i());
          Xt(P, { element: "span", get class() {
            return e(Y);
          }, get id() {
            return e(de);
          }, role: "option", tabindex: -1, get "aria-selected"() {
            return e(T);
          }, get "data-value"() {
            return e(L).name;
          }, onclick: () => H(e(L).name), children: (q, se) => {
            var le = Hh(), W = ve(le);
            {
              let U = d(() => 1.333 * c());
              ps(W, { get color() {
                return e(L).swatch.color;
              }, get image() {
                return e(L).swatch.image;
              }, get size() {
                return e(U);
              }, get shape() {
                return l();
              }, get unavailable() {
                return e(L).unavailable;
              } });
            }
            var oe = O(W, 2), K = (U) => {
              var X = Wh(), ne = w(X);
              Le(O(ne), () => r()("system.unavailable_option_value")), y(X), _e(() => {
                var J;
                return kt(ne, `${(J = e(L).name) != null ? J : ""} - `);
              }), p(U, X);
            }, Q = (U) => {
              var X = Uh(), ne = w(X, !0);
              y(X), _e(() => kt(ne, e(L).name)), p(U, X);
            };
            G(oe, (U) => {
              e(L).unavailable ? U(K) : U(Q, !1);
            }), p(q, le);
          }, $$slots: { default: !0 } });
        }
      }), y(S), Ci(S, (P) => te(k, P), () => e(k)), _e(() => Be(S, "id", m)), p(N, S);
    };
    G(E, (N) => {
      e(b) && N(ue);
    }), y(Z), Xs(Z, (N, S) => ee == null ? void 0 : ee(N, S), () => D), _e(() => {
      var N;
      Be(Z, "data-name", o().name), Be(Z, "data-value", (N = i()) != null ? N : "");
    }), p(n, Z);
    var z = nt(I);
    return s(), z;
  }
  function Yh(n, t, r) {
    try {
      const a = t().optionValues.find((s) => s.name === n.target.value);
      a != null && a.unavailable && wr(document.body, "kaching-unavailable-option-value-selected", { swatch: "default" });
    } catch (a) {
      console.error(a);
    }
    r()(n.target.value);
  }
  Ze(Qu, { option: {}, swatchSize: {}, swatchShape: {}, value: {}, placeholderText: {}, onChange: {} }, [], [], !0);
  var Kh = $('<option class="kaching-bundles-option-value" disabled> </option>'), Xh = $(" <!>", 1), ep = $('<option class="kaching-bundles-option-value"><!></option>'), tp = $('<select class="kaching-bundles__bar-variant-select kaching-bundles-option"><!><!></select>');
  function Wu(n, t) {
    tt(t, !0);
    const [r, a] = mt();
    let s = _(t, "option", 7), o = _(t, "value", 7), c = _(t, "placeholderText", 7, void 0), l = _(t, "onChange", 7);
    const i = zt();
    var u = { get option() {
      return s();
    }, set option(x) {
      s(x), v();
    }, get value() {
      return o();
    }, set value(x) {
      o(x), v();
    }, get placeholderText() {
      return c();
    }, set placeholderText(x = void 0) {
      c(x), v();
    }, get onChange() {
      return l();
    }, set onChange(x) {
      l(x), v();
    } }, h = tp();
    h.__change = [Yh, s, l];
    var b, g = w(h), f = (x) => {
      var m = Kh(), M = w(m, !0);
      y(m), m.value = m.__value = "", _e(() => {
        cu(m, o() == null), Be(m, "hidden", o() != null), kt(M, c());
      }), p(x, m);
    };
    G(g, (x) => {
      c() != null && x(f);
    }), At(O(g), 17, () => s().optionValues, (x) => x.name, (x, m) => {
      var M = ep(), C = w(M), V = (H) => {
        var ee = Xh(), I = ve(ee);
        Le(O(I), () => Ve(i, "$translate", r)("system.unavailable_option_value")), _e(() => {
          var Z;
          return kt(I, `${(Z = e(m).name) != null ? Z : ""} - `);
        }), p(H, ee);
      }, D = (H) => {
        var ee = Un();
        _e(() => kt(ee, e(m).name)), p(H, ee);
      };
      G(C, (H) => {
        e(m).unavailable ? H(V) : H(D, !1);
      }), y(M);
      var A = {};
      _e(() => {
        var H;
        Be(M, "data-value", e(m).name), A !== (A = e(m).name) && (M.value = (H = M.__value = e(m).name) != null ? H : "");
      }), p(x, M);
    }), y(h), no(h), _e(() => {
      var x, m, M, C, V;
      Be(h, "aria-label", s().name), Be(h, "data-name", s().name), Be(h, "data-value", (x = o()) != null ? x : ""), b !== (b = (m = o()) != null ? m : "") && (h.value = (C = h.__value = (M = o()) != null ? M : "") != null ? C : "", ol(h, (V = o()) != null ? V : ""));
    }), p(n, h);
    var k = nt(u);
    return a(), k;
  }
  Gn(["change"]), Ze(Wu, { option: {}, value: {}, placeholderText: {}, onChange: {} }, [], [], !0);
  var np = $('<div class="kaching-bundles__swatch-buttons kaching-bundles-option"></div>');
  function Uu(n, t) {
    tt(t, !0);
    const [r, a] = mt();
    let s = _(t, "option", 7), o = _(t, "swatchSize", 7), c = _(t, "swatchShape", 7), l = _(t, "value", 7), i = _(t, "onChange", 7);
    const u = zt();
    var h = { get option() {
      return s();
    }, set option(f) {
      s(f), v();
    }, get swatchSize() {
      return o();
    }, set swatchSize(f) {
      o(f), v();
    }, get swatchShape() {
      return c();
    }, set swatchShape(f) {
      c(f), v();
    }, get value() {
      return l();
    }, set value(f) {
      l(f), v();
    }, get onChange() {
      return i();
    }, set onChange(f) {
      i(f), v();
    } }, b = np();
    At(b, 21, () => s().optionValues, (f) => f.name, (f, k) => {
      {
        let x = d(() => ["kaching-bundles__swatch-buttons__button", "kaching-bundles-option-value", e(k).name === l() && "kaching-bundles__swatch-buttons__button--selected"]), m = d(() => e(k).unavailable ? `${e(k).name} - ${Ve(u, "$translate", r)("system.unavailable_option_value")}` : e(k).name);
        Xt(f, { element: "span", get class() {
          return e(x);
        }, get title() {
          return e(k).name;
        }, get "aria-label"() {
          return e(m);
        }, get "data-value"() {
          return e(k).name;
        }, onclick: () => (function(M) {
          l(M);
          try {
            const C = s().optionValues.find((V) => V.name === M);
            C != null && C.unavailable && wr(document.body, "kaching-unavailable-option-value-selected", { swatch: "buttons" });
          } catch (C) {
            console.error(C);
          }
          i()(l());
        })(e(k).name), children: (M, C) => {
          ps(M, { get color() {
            return e(k).swatch.color;
          }, get image() {
            return e(k).swatch.image;
          }, get size() {
            return o();
          }, get shape() {
            return c();
          }, get unavailable() {
            return e(k).unavailable;
          } });
        }, $$slots: { default: !0 } });
      }
    }), y(b), _e(() => {
      Be(b, "data-name", s().name), Be(b, "data-value", l());
    }), p(n, b);
    var g = nt(h);
    return a(), g;
  }
  function Hu(n, t) {
    tt(t, !0);
    let r = _(t, "value", 7), a = _(t, "option", 7), s = _(t, "swatchSize", 7, 18), o = _(t, "swatchShape", 7, "circle"), c = _(t, "swatchType", 7), l = _(t, "placeholderText", 7, void 0), i = _(t, "onChange", 7);
    function u(x) {
      i()({ position: a().position, value: x });
    }
    var h = { get value() {
      return r();
    }, set value(x) {
      r(x), v();
    }, get option() {
      return a();
    }, set option(x) {
      a(x), v();
    }, get swatchSize() {
      return s();
    }, set swatchSize(x = 18) {
      s(x), v();
    }, get swatchShape() {
      return o();
    }, set swatchShape(x = "circle") {
      o(x), v();
    }, get swatchType() {
      return c();
    }, set swatchType(x) {
      c(x), v();
    }, get placeholderText() {
      return l();
    }, set placeholderText(x = void 0) {
      l(x), v();
    }, get onChange() {
      return i();
    }, set onChange(x) {
      i(x), v();
    } }, b = ze(), g = ve(b), f = (x) => {
      Qu(x, { get option() {
        return a();
      }, get swatchSize() {
        return s();
      }, get swatchShape() {
        return o();
      }, get value() {
        return r();
      }, get placeholderText() {
        return l();
      }, onChange: u });
    }, k = (x) => {
      var m = ze(), M = ve(m), C = (D) => {
        Uu(D, { get option() {
          return a();
        }, get swatchSize() {
          return s();
        }, get swatchShape() {
          return o();
        }, get value() {
          return r();
        }, onChange: u });
      }, V = (D) => {
        Wu(D, { get option() {
          return a();
        }, get value() {
          return r();
        }, get placeholderText() {
          return l();
        }, onChange: u });
      };
      G(M, (D) => {
        c() === "colorButtons" || c() === "imageButtons" || c() === "productImageButtons" ? D(C) : D(V, !1);
      }, !0), p(x, m);
    };
    return G(g, (x) => {
      c() === "colorDropdown" || c() === "imageDropdown" || c() === "productImageDropdown" || c() === "mixedDropdown" ? x(f) : x(k, !1);
    }), p(n, b), nt(h);
  }
  Ze(Uu, { option: {}, swatchSize: {}, swatchShape: {}, value: {}, onChange: {} }, [], [], !0), Ze(Hu, { value: {}, option: {}, swatchSize: {}, swatchShape: {}, swatchType: {}, placeholderText: {}, onChange: {} }, [], [], !0);
  const Zu = "mediaImages", hl = (n = []) => {
    const t = ga(Ju(n));
    return fi(Zu, t), { getMediaImageUrl: t, setMediaImages: (r) => {
      t.set(Ju(r));
    } };
  }, On = () => {
    const n = bi(Zu);
    if (!n) throw new Error("getMediaImages must be called within a component tree that has setupMediaImages initialized");
    return n;
  }, Ju = (n) => (t) => {
    if (!t) return;
    const r = n.find((a) => a.gid === t);
    return r == null ? void 0 : r.url;
  }, Yu = "config", ri = (n) => {
    const t = ga(n);
    return fi(Yu, t), { config: t, setConfig: (r) => {
      t.set(r);
    } };
  }, mn = () => {
    const n = bi(Yu);
    if (!n) throw new Error("getConfig must be called within a component tree that has setupConfig initialized");
    return n;
  };
  var rp = $('<img alt="" class="kaching-bundles__bar-variant-image"/>'), ap = $('<div class="kaching-bundles__bar-variant-number"><span>#</span> <span> </span></div>'), ip = $('<span class="kaching-bundles__bar-variant-option__name-value"> </span>'), lp = $('<div class="kaching-bundles__bar-variant-option"><span class="kaching-bundles__bar-variant-option__name"><span class="kaching-bundles__bar-variant-option__name-label"> </span> <!></span> <!></div>'), sp = $('<div class="kaching-bundles__invalid-variant-error"><!></div>'), op = $('<div><div><!> <div class="kaching-bundles__bar-variant-main"><div class="kaching-bundles__bar-variant-selects"></div> <!></div></div></div>');
  function Hn(n, t) {
    tt(t, !0);
    const r = () => Ve(M, "$config", s), a = () => Ve(C, "$swatchSettings", s), [s, o] = mt(), c = (J, F = Mr) => {
      {
        let ae = d(() => {
          var ie;
          return (ie = e(D)[F().position - 1]) != null ? ie : null;
        });
        Hu(J, { get option() {
          return F();
        }, get swatchSize() {
          return a().swatchSize;
        }, get swatchShape() {
          return a().swatchShape;
        }, get swatchType() {
          return F().swatchType;
        }, get value() {
          return e(ae);
        }, get placeholderText() {
          return u();
        }, onChange: z });
      }
    };
    let l = _(t, "product", 7), i = _(t, "selectedVariantId", 7), u = _(t, "placeholderText", 7, void 0), h = _(t, "number", 7, void 0), b = _(t, "showImage", 7, !1), g = _(t, "forceDropdown", 7, !1), f = _(t, "onChange", 7), k = _(t, "onOptionChange", 7);
    const x = zt(), m = On(), M = mn(), C = ku();
    let V = d(() => l().variants.find((J) => J.id === i())), D = Ge(gt([])), A = [], H = null;
    Ye(() => {
      if (e(V)) return H = i(), void te(D, [...e(V).options], !0);
      if (i() && r().featureFlags.hide_missing_variants && l().variants.length > 0) {
        const J = j(l().variants, 0, e(D));
        if (J) return te(D, [...J.options], !0), void en(() => f()(J.id));
      }
      if (u() != null) {
        const J = l().options.map((ie) => ie.name), F = A.length === J.length && A.every((ie, ke) => ie === J[ke]), ae = H != null;
        return H = null, void (F && !ae || (A = J, te(D, J.map(() => null), !0)));
      }
      te(D, [], !0);
    });
    let ee = d(() => e(D).length > 0 && e(D).every((J) => J != null)), I = d(() => u() != null ? e(ee) && (!e(V) || !e(V).availableForSale) : !e(V) || !e(V).availableForSale), Z = d(() => {
      return J = l(), F = e(D), ae = a().swatchOptions, ie = Ve(m, "$getMediaImageUrl", s), ke = g(), J.options.map((re) => ({ name: re.name, position: re.position, swatchType: N(re, ae, ke), optionValues: re.optionValues.map((pe) => {
        const ge = L(re.position, pe.name, F, J);
        if (r().featureFlags.hide_missing_variants && ge.length === 0) return null;
        const me = !ge.some((ce) => ce.availableForSale);
        return { name: pe.name, unavailable: me, swatch: S(re, pe, ae, ie, F, J) };
      }).filter((pe) => pe !== null) }));
      var J, F, ae, ie, ke;
    }), B = d(() => a().showSelectedSwatchName && !g());
    const E = ["colorButtons", "imageButtons", "productImageButtons"];
    let ue = d(() => {
      var J;
      return b() ? ((J = e(V)) == null ? void 0 : J.image) || l().image : null;
    });
    function z({ position: J, value: F }) {
      const ae = e(D)[J - 1];
      if (e(D)[J - 1] = F, u() != null && e(D).some((ke) => ke == null)) return;
      let ie = l().variants.find((ke) => e(D).every((re, pe) => ke.options[pe] === re));
      if (!ie && r().featureFlags.hide_missing_variants) {
        const ke = j(L(J, F, e(D), l()), J, e(D));
        ke && (ie = ke, te(D, [...ie.options], !0));
      }
      ie && (f()(ie.id), k() && k()(J, F, ae));
    }
    function N(J, F, ae) {
      var ie;
      const ke = (ie = F.find((re) => re.name === J.defaultName)) == null ? void 0 : ie.swatchType;
      if (ke && ke !== "default") return ae ? (function(re) {
        switch (re) {
          case "colorButtons":
            return "colorDropdown";
          case "imageButtons":
            return "imageDropdown";
          case "productImageButtons":
            return "productImageDropdown";
          default:
            return re;
        }
      })(ke) : ke;
      if (!r().featureFlags.native_swatches_disabled) {
        for (const re of J.optionValues) if (re.swatch.image || re.swatch.color) return "mixedDropdown";
      }
      return "default";
    }
    function S(J, F, ae, ie, ke, re) {
      var pe, ge;
      const me = r().featureFlags.native_swatches_disabled ? null : F.swatch, ce = ae.find((fe) => fe.name === J.defaultName);
      if (!ce || ce.swatchType === "default") return me || { color: null, image: null };
      if (ce.swatchType === "colorButtons" || ce.swatchType === "colorDropdown")
        return { color: P((pe = ce.colors.find((fe) => fe.name === F.defaultName)) == null ? void 0 : pe.color) || (me == null ? void 0 : me.color) || P(Fh(F.defaultName)) || null, image: null };
      if (ce.swatchType === "imageButtons" || ce.swatchType === "imageDropdown") {
        const fe = ie(((ge = ce.images.find((Fe) => Fe.name === F.defaultName)) == null ? void 0 : ge.mediaImageGID) || null);
        return { color: (me == null ? void 0 : me.color) || null, image: fe || (me == null ? void 0 : me.image) || null };
      }
      if (ce.swatchType === "productImageDropdown" || ce.swatchType === "productImageButtons") {
        const fe = J.position - 1, Fe = re.variants.filter((Te) => Te.image && Te.options[fe] === F.name);
        let $e = Fe[0], Ce = 0;
        for (const Te of Fe) {
          let R = 0;
          for (let xe = 0; xe < fe; xe++) Te.options[xe] === ke[xe] && R++;
          R > Ce && (Ce = R, $e = Te);
        }
        return { color: null, image: ($e == null ? void 0 : $e.image) || null };
      }
      return { color: null, image: null };
    }
    function P(J) {
      if (!J) return;
      const { red: F, green: ae, blue: ie } = J;
      return `#${F.toString(16).padStart(2, "0")}${ae.toString(16).padStart(2, "0")}${ie.toString(16).padStart(2, "0")}`;
    }
    function L(J, F, ae, ie) {
      const ke = J - 1, re = ae.slice(0, ke);
      return ie.variants.filter((pe) => pe.options[ke] === F && re.every((ge, me) => ge == null || pe.options[me] === ge));
    }
    function j(J, F, ae) {
      if (J.length === 0) return null;
      let ie = J[0], ke = -1;
      const re = ae.slice(F);
      for (const pe of J) {
        let ge = 0;
        for (let me = 0; me < re.length; me++) pe.options[F + me] === re[me] && (ge += re.length - me);
        ge > ke && (ke = ge, ie = pe);
      }
      return ie;
    }
    var Y = { get product() {
      return l();
    }, set product(J) {
      l(J), v();
    }, get selectedVariantId() {
      return i();
    }, set selectedVariantId(J) {
      i(J), v();
    }, get placeholderText() {
      return u();
    }, set placeholderText(J = void 0) {
      u(J), v();
    }, get number() {
      return h();
    }, set number(J = void 0) {
      h(J), v();
    }, get showImage() {
      return b();
    }, set showImage(J = !1) {
      b(J), v();
    }, get forceDropdown() {
      return g();
    }, set forceDropdown(J = !1) {
      g(J), v();
    }, get onChange() {
      return f();
    }, set onChange(J) {
      f(J), v();
    }, get onOptionChange() {
      return k();
    }, set onOptionChange(J) {
      k(J), v();
    } }, de = op();
    let T;
    var q = w(de);
    let se;
    var le = w(q), W = (J) => {
      var F = rp();
      _e(() => Be(F, "src", e(ue))), p(J, F);
    }, oe = (J) => {
      var F = ze(), ae = ve(F), ie = (ke) => {
        var re = ap(), pe = O(w(re), 2), ge = w(pe, !0);
        y(pe), y(re), _e(() => kt(ge, h())), p(ke, re);
      };
      G(ae, (ke) => {
        h() && ke(ie);
      }, !0), p(J, F);
    };
    G(le, (J) => {
      e(ue) ? J(W) : J(oe, !1);
    });
    var K = O(le, 2), Q = w(K);
    At(Q, 21, () => e(Z), (J) => J.name, (J, F) => {
      var ae = ze(), ie = ve(ae), ke = (pe) => {
        var ge = lp(), me = w(ge), ce = w(me), fe = w(ce);
        y(ce);
        var Fe = O(ce, 2), $e = (Te) => {
          var R = ip(), xe = w(R, !0);
          y(R), _e(() => {
            var Ie, be;
            return kt(xe, (be = (Ie = e(D)[e(F).position - 1]) != null ? Ie : u()) != null ? be : "");
          }), p(Te, R);
        };
        G(Fe, (Te) => {
          E.includes(e(F).swatchType) && Te($e);
        }), y(me);
        var Ce = O(me, 2);
        c(Ce, () => e(F)), y(ge), _e(() => {
          var Te;
          return kt(fe, `${(Te = e(F).name) != null ? Te : ""}:`);
        }), p(pe, ge);
      }, re = (pe) => {
        c(pe, () => e(F));
      };
      G(ie, (pe) => {
        e(B) ? pe(ke) : pe(re, !1);
      }), p(J, ae);
    }), y(Q);
    var U = O(Q, 2), X = (J) => {
      var F = sp();
      Le(w(F), () => Ve(x, "$translate", s)("system.invalid_variant")), y(F), p(J, F);
    };
    G(U, (J) => {
      e(I) && J(X);
    }), y(K), y(q), y(de), _e((J, F) => {
      T = Nt(de, 1, "kaching-bundles__bar-variant", null, T, J), se = Nt(q, 1, "kaching-bundles__bar-variant__content", null, se, F);
    }, [() => ({ "kaching-bundles__bar-variant--invalid": e(I) }), () => ({ "kaching-bundles__bar-variant__content--with-option-names": e(B) })]), p(n, de);
    var ne = nt(Y);
    return o(), ne;
  }
  Ze(Hn, { product: {}, selectedVariantId: {}, placeholderText: {}, number: {}, showImage: {}, forceDropdown: {}, onChange: {}, onOptionChange: {} }, [], [], !0);
  var cp = $('<a target="_blank"><!></a>'), up = $("<div><!></div>");
  function nr(n, t) {
    tt(t, !0);
    const r = _(t, "url", 7), a = _(t, "children", 7), s = _(t, "class", 7);
    var o = { get url() {
      return r();
    }, set url(h) {
      r(h), v();
    }, get children() {
      return a();
    }, set children(h) {
      a(h), v();
    }, get class() {
      return s();
    }, set class(h) {
      s(h), v();
    } }, c = ze(), l = ve(c), i = (h) => {
      var b = cp();
      Kl(w(b), a), y(b), _e(() => {
        Be(b, "href", r()), Nt(b, 1, sl(s()));
      }), p(h, b);
    }, u = (h) => {
      var b = up();
      Kl(w(b), a), y(b), _e(() => Nt(b, 1, sl(s()))), p(h, b);
    };
    return G(l, (h) => {
      r() ? h(i) : h(u, !1);
    }), p(n, c), nt(o);
  }
  Ze(nr, { url: {}, children: {}, class: {} }, [], [], !0);
  const Ku = "priceFormatter", Di = (n = "{{amount}}", t) => {
    const r = ga(Xu(n, t));
    return fi(Ku, r), { formatPrice: r, setMoneyFormat: (a, s) => {
      r.set(Xu(a, s));
    } };
  }, pn = () => {
    const n = bi(Ku);
    if (!n) throw new Error("getPriceFormatter must be called within a component tree that has setupPriceFormatter initialized");
    return n;
  }, Xu = (n, t) => (r, a) => dp(r, n, (!(a != null && a.preserveDecimals) || Math.round(r) % 100 == 0) && t), dp = (n, t, r) => {
    const a = ((i, u) => u ? i.includes("amount_no_decimals") ? i : i.replace(/\{\{.+\}\}/g, "{{ amount_no_decimals }}") : i)(t, r), s = { amount: (i) => i.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), amount_no_decimal: (i) => i.toLocaleString("en-US", { maximumFractionDigits: 0 }), amount_no_decimals: (i) => i.toLocaleString("en-US", { maximumFractionDigits: 0 }), amount_with_comma_separator: (i) => i.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), amount_no_decimals_with_comma_separator: (i) => i.toLocaleString("de-DE", { maximumFractionDigits: 0 }), amount_with_apostrophe_separator: (i) => i.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, "'"), amount_no_decimals_with_space_separator: (i) => i.toLocaleString("fr-FR", { maximumFractionDigits: 0 }).replace(/\s/g, " "), amount_with_space_separator: (i) => i.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, " "), amount_with_period_and_space_separator: (i) => i.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, " ").replace(",", ".") }, o = /{{\s*(\w+)\s*}}/, c = a.match(o), l = (s[c ? c[1] : "amount"] || s.amount)(n / 100);
    return a.replace(o, l);
  }, ed = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.08398%205H7.91732'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", td = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.00065%202.08337V7.91671M2.08398%205.00004H7.91732'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", gp = { new_price: ({ totalDiscountedPrice: n, quantity: t }) => ({ value: n / t, type: "price" }), new_total: ({ totalDiscountedPrice: n }) => ({ value: n, type: "price" }), original_price: ({ totalFullPrice: n, quantity: t }) => ({ value: n / t, type: "price" }), original_total: ({ totalFullPrice: n }) => ({ value: n, type: "price" }), saved_total: ({ totalCompareAtPrice: n, totalDiscountedPrice: t }) => ({ value: n - t, type: "price" }), saved_amount: ({ totalCompareAtPrice: n, totalDiscountedPrice: t, quantity: r }) => ({ value: (n - t) / r, type: "price" }), quantity: ({ quantity: n }) => ({ value: n, type: "number" }), gifts_count: ({ freeGiftsCount: n }) => {
    if (n !== void 0) return { value: n, type: "number" };
  }, buy_quantity: ({ dealBar: n, quantity: t }) => {
    if ((n == null ? void 0 : n.dealBarType) !== ft.Bxgy) return;
    const r = n.buyQuantity + n.getQuantity;
    return { value: t - Math.floor(t / r) * n.getQuantity, type: "number" };
  }, get_quantity: ({ dealBar: n, quantity: t }) => {
    if ((n == null ? void 0 : n.dealBarType) !== ft.Bxgy) return;
    const r = n.buyQuantity + n.getQuantity;
    return { value: Math.floor(t / r) * n.getQuantity, type: "number" };
  }, saved_percentage: ({ totalCompareAtPrice: n, totalDiscountedPrice: t, dealBar: r, legacySavedPercentage: a }) => {
    if (a && r && (r.dealBarType === ft.QuantityBreak || !r.dealBarType) && r.discountType === "percentage") return { value: Math.round(Number(r.discountValue)), type: "percentage" };
    if (n <= 0) return { value: 0, type: "percentage" };
    let s = (n - t) / n * 100;
    return s = Math.round(100 * s) / 100, { value: Math.round(s), type: "percentage" };
  }, new_unit_price: ({ totalDiscountedPrice: n, unitQuantity: t }) => {
    if (t) return { value: n / t, type: "price", preserveDecimals: !0 };
  }, saved_per_unit: ({ totalCompareAtPrice: n, totalDiscountedPrice: t, unitQuantity: r }) => {
    if (r) return { value: (n - t) / r, type: "price", preserveDecimals: !0 };
  }, original_unit_price: ({ totalFullPrice: n, unitQuantity: t }) => {
    if (t) return { value: n / t, type: "price", preserveDecimals: !0 };
  }, unit_quantity: ({ unitQuantity: n }) => {
    if (n) return { value: n, type: "number" };
  }, selling_plan_discount: ({ sellingPlan: n, totalFullPrice: t, quantity: r }) => {
    const a = n == null ? void 0 : n.priceAdjustment;
    if (a) switch (a.type) {
      case "percentage":
        return a.value <= 0 ? void 0 : { value: a.value, type: "percentage" };
      case "fixed_amount":
        return a.value <= 0 ? void 0 : { value: a.value, type: "price" };
      case "price": {
        const s = t / r - a.value;
        return s <= 0 ? void 0 : { value: s, type: "price" };
      }
    }
  } }, hp = (n) => {
    if (!n) return;
    const t = n.options.join(" / ");
    return t && t !== "Default Title" ? t : void 0;
  }, pp = ({ variable: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, sellingPlan: o }) => {
    var c, l;
    const i = n.match(/^product_(\d+)$/);
    if (i) {
      const u = Number(i[1]);
      return (c = r == null ? void 0 : r.get(u)) == null ? void 0 : c.title;
    }
    switch (n) {
      case "product":
        return (l = t == null ? void 0 : t.title) != null ? l : a && a.length > 0 ? a.join(", ") : void 0;
      case "variant_title":
        return ((u) => {
          if (!u) return;
          const h = [];
          for (const { variant: b, quantity: g } of u) {
            const f = hp(b);
            if (!f) continue;
            const k = h.find((x) => x.title === f);
            k ? k.count += g : h.push({ title: f, count: g });
          }
          return h.length !== 0 ? h.length === 1 && h[0].count === 1 ? h[0].title : h.map(({ title: b, count: g }) => `${g}× ${b}`).join(", ") : void 0;
        })(s);
      case "metafield":
        return (t == null ? void 0 : t.metafields.text) || void 0;
      case "metafield2":
        return (t == null ? void 0 : t.metafields.text2) || void 0;
      case "metafield3":
        return (t == null ? void 0 : t.metafields.text3) || void 0;
      case "metafield4":
        return (t == null ? void 0 : t.metafields.text4) || void 0;
      case "selling_plan":
        return (o == null ? void 0 : o.name) || void 0;
    }
  }, nd = /{{\s*([a-zA-Z0-9_.]+)\s*(?:([+\-*/])\s*(\d+(?:\.\d+)?)?)?\s*}}/g, rd = /\{\{[^}]*\}\}/g, bp = (n) => n.replace(rd, ""), fp = ({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, totalFullPrice: o, totalCompareAtPrice: c, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: h, unitQuantity: b, sellingPlan: g, freeGiftsCount: f }) => (k, x, m) => {
    const M = gp[k];
    if (M) {
      const C = M({ totalFullPrice: o, totalCompareAtPrice: c != null ? c : o, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: h, unitQuantity: b, sellingPlan: g, freeGiftsCount: f });
      if (!C) return;
      let V = C.value;
      if (x !== void 0 && m !== void 0) {
        const A = ((H, ee, I) => {
          switch (ee) {
            case "+":
              return H + I;
            case "-":
              return H - I;
            case "*":
              return H * I;
            case "/":
              return I === 0 ? void 0 : H / I;
          }
        })(V, x, C.type !== "price" || x !== "+" && x !== "-" ? m : 100 * m);
        if (A === void 0) return;
        V = A;
      }
      const D = x === "/" || C.preserveDecimals === !0;
      return ((A, H, ee, I) => {
        switch (H) {
          case "price":
            return ee(A, { preserveDecimals: I });
          case "number":
            return String(Math.round(100 * A) / 100);
          case "percentage":
            return `${Math.round(A)}%`;
        }
      })(V, C.type, n, D);
    }
    if (x === void 0) return pp({ variable: k, product: t, products: r, selectedProductTitles: a, selectedVariants: s, sellingPlan: g });
  }, bn = ({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, totalFullPrice: o, totalCompareAtPrice: c, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: h = !1, unitQuantity: b, sellingPlan: g, freeGiftsCount: f }) => (k) => {
    if (!k) return k;
    const x = fp({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, totalFullPrice: o, totalCompareAtPrice: c, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: h, unitQuantity: b, sellingPlan: g, freeGiftsCount: f });
    return k.replace(nd, (m, M, C, V) => {
      var D;
      if (C && V) {
        const A = parseFloat(V);
        return (D = x(M, C, A)) != null ? D : "";
      }
      return x(M) || "";
    }).replace(rd, "");
  };
  function po(n) {
    const { unitPriceMeasurement: t } = n;
    return t ? t.referenceValue == 1 ? t.referenceUnit : `${t.referenceValue}${t.referenceUnit}` : null;
  }
  function Sr(n) {
    return n.reduce((t, { variant: r, quantity: a }) => {
      const { unitPriceMeasurement: s } = r;
      if (!s) return t;
      const o = (function(c, l, i) {
        if (l === i) return c;
        if (l === "g" && i === "kg" || l === "ml" && i === "l") return c / 1e3;
      })(s.quantityValue, s.quantityUnit, s.referenceUnit);
      return o ? t + o / s.referenceValue * a : t;
    }, 0) || null;
  }
  var vp = $('<img class="kaching-bundles__choose-multiple-gifts__product-image" alt=""/>'), _p = $('<span class="kaching-bundles__choose-multiple-gifts__product-title"> </span>'), kp = $('<span class="kaching-bundles__choose-multiple-gifts__subtitle"><!></span>'), mp = $('<div class="kaching-bundles__choose-multiple-gifts__product-compare-at-price"><!></div>'), xp = $('<span class="kaching-bundles__choose-multiple-gifts__variant-counter"></span>'), yp = $('<div class="kaching-bundles__choose-multiple-gifts__variant-selector-row"><div class="kaching-bundles__choose-multiple-gifts__variant-selector-content"><!> <div class="kaching-bundles__choose-multiple-gifts__variant-selector-with-counter"><!> <div class="kaching-bundles__choose-multiple-gifts__variant-selector-wrapper"><!></div></div></div></div>'), wp = $('<div class="kaching-bundles__choose-multiple-gifts__variant-selectors"></div>'), Pp = $('<img alt="Decrease"/>'), Sp = $('<img alt="Increase"/>'), Bp = $('<div class="kaching-bundles__choose-multiple-gifts__gift-quantity"><!> <span class="kaching-bundles__choose-multiple-gifts__gift-quantity-value"> </span> <!></div>'), Cp = $("<img/>"), Ip = $("<!> <!>", 1), Mp = $('<div class="kaching-bundles__choose-multiple-gifts__product"><div class="kaching-bundles__choose-multiple-gifts__product-container"><!> <div class="kaching-bundles__choose-multiple-gifts__product-content"><!> <!> <div class="kaching-bundles__choose-multiple-gifts__product-price-container"><div class="kaching-bundles__choose-multiple-gifts__product-price"><!></div> <!></div> <!></div></div> <div class="kaching-bundles__choose-multiple-gifts__product-actions"><!> <!></div></div>');
  function ad(n, t) {
    tt(t, !0);
    const r = () => Ve(m, "$formatPrice", s), a = () => Ve(x, "$translate", s), [s, o] = mt(), c = _(t, "product", 7), l = _(t, "dealBlock", 7), i = _(t, "multipleGiftsSelector", 7), u = _(t, "selectedVariantIds", 7), h = _(t, "availableQuantity", 7), b = _(t, "onSelect", 7), g = _(t, "onRemove", 7), f = _(t, "onVariantChange", 7), k = _(t, "onQuantityChange", 7), x = zt(), m = pn();
    let M = Ge(!1);
    const C = d(() => u().length > 0), V = d(() => u().length || 1), D = d(() => !e(C) && h() === 0), A = d(() => c().variants.find((re) => re.id === u()[0]) || c().variants[0]), H = d(() => e(M) && e(A).image || c().image), ee = d(() => u().map((re) => c().variants.find((pe) => pe.id === re) || c().variants[0])), I = d(() => e(ee).length > 0 ? e(ee).reduce((re, pe) => re + N(l(), pe), 0) : N(l(), e(A))), Z = d(() => c().url ? `${c().url}?variant=${u()[0] || c().variants[0].id}` : void 0), B = d(() => l().chooseMultipleGiftsModal), E = d(() => bn({ priceFormatter: r(), product: c(), totalFullPrice: e(I), totalDiscountedPrice: 0, quantity: e(V), unitQuantity: Sr(e(ee).map((re) => ({ variant: re, quantity: 1 }))) })), ue = d(() => {
      var re;
      return e(E)(a()(((re = e(B)) == null ? void 0 : re.subtitle) || ""));
    }), z = d(() => {
      var re, pe;
      return e(C) ? (re = e(B)) == null ? void 0 : re.buttonTextAfterSelection : (pe = e(B)) == null ? void 0 : pe.buttonTextBeforeSelection;
    });
    function N(re, pe) {
      return re.useProductCompareAtPrice && pe.compareAtPrice ? Math.max(pe.price, pe.compareAtPrice) : pe.price;
    }
    function S() {
      e(V) <= 1 || k()(e(V) - 1);
    }
    function P() {
      e(V) >= h() || k()(e(V) + 1);
    }
    var L = { get product() {
      return c();
    }, set product(re) {
      c(re), v();
    }, get dealBlock() {
      return l();
    }, set dealBlock(re) {
      l(re), v();
    }, get multipleGiftsSelector() {
      return i();
    }, set multipleGiftsSelector(re) {
      i(re), v();
    }, get selectedVariantIds() {
      return u();
    }, set selectedVariantIds(re) {
      u(re), v();
    }, get availableQuantity() {
      return h();
    }, set availableQuantity(re) {
      h(re), v();
    }, get onSelect() {
      return b();
    }, set onSelect(re) {
      b(re), v();
    }, get onRemove() {
      return g();
    }, set onRemove(re) {
      g(re), v();
    }, get onVariantChange() {
      return f();
    }, set onVariantChange(re) {
      f(re), v();
    }, get onQuantityChange() {
      return k();
    }, set onQuantityChange(re) {
      k(re), v();
    } }, j = Mp(), Y = w(j), de = w(Y), T = (re) => {
      nr(re, { get url() {
        return e(Z);
      }, class: "kaching-bundles__choose-multiple-gifts__product-image-link", children: (pe, ge) => {
        var me = vp();
        Be(me, "width", 100), Be(me, "height", 100), _e(() => Be(me, "src", e(H))), p(pe, me);
      }, $$slots: { default: !0 } });
    };
    G(de, (re) => {
      e(H) && re(T);
    });
    var q = O(de, 2), se = w(q);
    nr(se, { get url() {
      return e(Z);
    }, class: "kaching-bundles__choose-multiple-gifts__product-link", children: (re, pe) => {
      var ge = _p(), me = w(ge, !0);
      y(ge), _e(() => kt(me, c().title)), p(re, ge);
    }, $$slots: { default: !0 } });
    var le = O(se, 2), W = (re) => {
      var pe = kp();
      Le(w(pe), () => e(ue)), y(pe), p(re, pe);
    };
    G(le, (re) => {
      e(ue) && re(W);
    });
    var oe = O(le, 2), K = w(oe);
    Le(w(K), () => a()("system.free")), y(K);
    var Q = O(K, 2), U = (re) => {
      var pe = ze();
      lt(ve(pe), () => e(I), (ge) => {
        var me = mp();
        Le(w(me), () => r()(e(I))), y(me), p(ge, me);
      }), p(re, pe);
    };
    G(Q, (re) => {
      i().showPrice && e(I) > 0 && re(U);
    }), y(oe);
    var X = O(oe, 2), ne = (re) => {
      var pe = wp();
      At(pe, 21, u, qr, (ge, me, ce) => {
        var fe = yp(), Fe = w(fe), $e = w(Fe), Ce = (be) => {
          ha(be, { get product() {
            return c();
          }, class: "kaching-bundles__choose-multiple-gifts__product-option-names" });
        };
        G($e, (be) => {
          ce === 0 && be(Ce);
        });
        var Te = O($e, 2), R = w(Te), xe = (be) => {
          var ye = xp();
          ye.textContent = `#${ce + 1}`, p(be, ye);
        };
        G(R, (be) => {
          u().length > 1 && be(xe);
        });
        var Ie = O(R, 2);
        Hn(w(Ie), { get product() {
          return c();
        }, get selectedVariantId() {
          return e(me);
        }, onChange: (be) => {
          te(M, !0), f()(ce, be);
        } }), y(Ie), y(Te), y(Fe), y(fe), p(ge, fe);
      }), y(pe), p(re, pe);
    };
    G(X, (re) => {
      c().variants.length > 1 && re(ne);
    }), y(q), y(Y);
    var J = O(Y, 2), F = w(J), ae = (re) => {
      var pe = Bp(), ge = w(pe);
      {
        let Fe = d(() => e(V) <= 1);
        Xt(ge, { element: "span", class: "kaching-bundles__choose-multiple-gifts__gift-quantity-button", onclick: S, get disabled() {
          return e(Fe);
        }, children: ($e, Ce) => {
          var Te = Pp();
          _e(() => Be(Te, "src", ed)), p($e, Te);
        }, $$slots: { default: !0 } });
      }
      var me = O(ge, 2), ce = w(me, !0);
      y(me);
      var fe = O(me, 2);
      {
        let Fe = d(() => e(V) >= h());
        Xt(fe, { element: "span", class: "kaching-bundles__choose-multiple-gifts__gift-quantity-button", onclick: P, get disabled() {
          return e(Fe);
        }, children: ($e, Ce) => {
          var Te = Sp();
          _e(() => Be(Te, "src", td)), p($e, Te);
        }, $$slots: { default: !0 } });
      }
      y(pe), _e(() => kt(ce, e(V))), p(re, pe);
    };
    G(F, (re) => {
      e(C) && i().maxQuantity > 1 && re(ae);
    });
    var ie = O(F, 2);
    {
      let re = d(() => ["kaching-bundles__choose-multiple-gifts__product-button", e(D) && "kaching-bundles__choose-multiple-gifts__product-button--disabled", e(C) && "kaching-bundles__choose-multiple-gifts__product-button--selected"]);
      Xt(ie, { element: "span", get class() {
        return e(re);
      }, onclick: function() {
        e(C) ? (te(M, !1), g()()) : b()();
      }, get disabled() {
        return e(D);
      }, children: (pe, ge) => {
        var me = Ip(), ce = ve(me), fe = (Te) => {
          var R = Cp();
          _e((xe) => {
            Be(R, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.3333%205.00008V4.33341C13.3333%203.39999%2013.3333%202.93328%2013.1517%202.57676C12.9919%202.26316%2012.7369%202.00819%2012.4233%201.8484C12.0668%201.66675%2011.6001%201.66675%2010.6667%201.66675H9.33333C8.39991%201.66675%207.9332%201.66675%207.57668%201.8484C7.26308%202.00819%207.00811%202.26316%206.84832%202.57676C6.66667%202.93328%206.66667%203.39999%206.66667%204.33341V5.00008M2.5%205.00008H17.5M15.8333%205.00008V14.3334C15.8333%2015.7335%2015.8333%2016.4336%2015.5608%2016.9684C15.3212%2017.4388%2014.9387%2017.8212%2014.4683%2018.0609C13.9335%2018.3334%2013.2335%2018.3334%2011.8333%2018.3334H8.16667C6.76654%2018.3334%206.06647%2018.3334%205.53169%2018.0609C5.06129%2017.8212%204.67883%2017.4388%204.43915%2016.9684C4.16667%2016.4336%204.16667%2015.7335%204.16667%2014.3334V5.00008'%20stroke='%23F04438'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), Be(R, "alt", xe);
          }, [() => a()("system.remove")]), p(Te, R);
        };
        G(ce, (Te) => {
          e(C) && Te(fe);
        });
        var Fe = O(ce, 2), $e = (Te) => {
          var R = Un();
          _e((xe) => kt(R, xe), [() => a()(e(z))]), p(Te, R);
        }, Ce = (Te) => {
          p(Te, Un("Choose"));
        };
        G(Fe, (Te) => {
          e(z) ? Te($e) : Te(Ce, !1);
        }), p(pe, me);
      }, $$slots: { default: !0 } });
    }
    y(J), y(j), p(n, j);
    var ke = nt(L);
    return o(), ke;
  }
  Ze(ad, { product: {}, dealBlock: {}, multipleGiftsSelector: {}, selectedVariantIds: {}, availableQuantity: {}, onSelect: {}, onRemove: {}, onVariantChange: {}, onQuantityChange: {} }, [], [], !0);
  const zp = { red: 0, green: 0, blue: 0, alpha: 0.5 };
  function $p(n, t) {
    var r;
    (r = t()) == null || r();
  }
  function Dp(n, t, r, a, s) {
    var o;
    const c = t();
    r()(a().id, c), (o = s()) == null || o();
  }
  var Tp = $('<img alt="Close"/>'), Vp = $('<div class="kaching-bundles__choose-multiple-gifts"><div class="kaching-bundles__choose-multiple-gifts__header"><h2 class="kaching-bundles__choose-multiple-gifts__heading"><!></h2> <!></div> <div class="kaching-bundles__choose-multiple-gifts__products"></div> <div class="kaching-bundles__choose-multiple-gifts__footer"><span class="kaching-bundles__choose-multiple-gifts__footer-text"> </span> <div class="kaching-bundles__choose-multiple-gifts__footer-buttons"><button class="kaching-bundles__choose-multiple-gifts__footer-button kaching-bundles__choose-multiple-gifts__footer-button--cancel"> </button> <button class="kaching-bundles__choose-multiple-gifts__footer-button kaching-bundles__choose-multiple-gifts__footer-button--confirm"> </button></div></div></div>');
  function bo(n, t) {
    tt(t, !0);
    const r = () => Ve(b, "$translate", a), [a, s] = mt(), o = _(t, "dealBlock", 7), c = _(t, "multipleGiftsSelector", 7), l = _(t, "products", 23, () => []), i = _(t, "initialSelectedGifts", 23, () => []), u = _(t, "onConfirm", 7, () => {
    }), h = _(t, "onClose", 7), b = zt();
    let g = Ge(gt((function(q) {
      const se = {};
      for (const le of q) {
        const W = le.product.id;
        se[W] || (se[W] = []), se[W].push(le.variant.id);
      }
      return se;
    })(i())));
    const f = d(() => o().chooseMultipleGiftsModal), k = d(() => ((q) => q ? _n({ "kaching-choose-multiple-gifts-button-size": q.buttonSize + "px", "kaching-choose-multiple-gifts-text-size": q.textSize + "px", "kaching-choose-multiple-gifts-price-color": We(q.priceColor), "kaching-choose-multiple-gifts-compare-at-price-color": We(q.compareAtPriceColor), "kaching-choose-multiple-gifts-text-color": We(q.textColor), "kaching-choose-multiple-gifts-button-color": We(q.buttonColor), "kaching-choose-multiple-gifts-button-text-color": We(q.buttonTextColor), "kaching-choose-multiple-gifts-photo-size": q.productPhotoSize + "px" }) : "")(e(f) || null)), x = d(() => c().maxQuantity), m = d(() => Object.values(e(g)).reduce((q, se) => q + se.length, 0));
    function M(q) {
      return e(g)[q] || [];
    }
    function C(q) {
      const se = q.variants.find((le) => le.availableForSale);
      return (se == null ? void 0 : se.id) || q.variants[0].id;
    }
    const V = d(() => {
      var q;
      return ((q = e(f)) == null ? void 0 : q.footerText) || "FREE gifts selected";
    });
    var D = { get dealBlock() {
      return o();
    }, set dealBlock(q) {
      o(q), v();
    }, get multipleGiftsSelector() {
      return c();
    }, set multipleGiftsSelector(q) {
      c(q), v();
    }, get products() {
      return l();
    }, set products(q = []) {
      l(q), v();
    }, get initialSelectedGifts() {
      return i();
    }, set initialSelectedGifts(q = []) {
      i(q), v();
    }, get onConfirm() {
      return u();
    }, set onConfirm(q = () => {
    }) {
      u(q), v();
    }, get onClose() {
      return h();
    }, set onClose(q) {
      h(q), v();
    } }, A = Vp(), H = w(A), ee = w(H), I = w(ee), Z = (q) => {
      var se = Un();
      _e((le) => kt(se, le), [() => r()(e(f).heading)]), p(q, se);
    };
    G(I, (q) => {
      var se;
      (se = e(f)) != null && se.heading && q(Z);
    }), y(ee);
    var B = O(ee, 2), E = (q) => {
      Xt(q, { element: "span", class: "kaching-bundles__choose-multiple-gifts__close", get onclick() {
        return h();
      }, children: (se, le) => {
        var W = Tp();
        _e(() => Be(W, "src", "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), p(se, W);
      }, $$slots: { default: !0 } });
    };
    G(B, (q) => {
      h() && q(E);
    }), y(H);
    var ue = O(H, 2);
    At(ue, 21, l, (q) => q.id, (q, se) => {
      {
        let le = d(() => M(e(se).id)), W = d(() => (function(oe) {
          const K = M(oe).length;
          return e(x) - e(m) + K;
        })(e(se).id));
        ad(q, { get dealBlock() {
          return o();
        }, get multipleGiftsSelector() {
          return c();
        }, get product() {
          return e(se);
        }, get selectedVariantIds() {
          return e(le);
        }, get availableQuantity() {
          return e(W);
        }, onSelect: () => (function(oe) {
          if (e(m) >= e(x)) return;
          const K = C(oe), Q = l().length === 1 ? e(x) : 1;
          te(g, { ...e(g), [oe.id]: Array(Q).fill(K) }, !0);
        })(e(se)), onRemove: () => (function(oe) {
          const { [oe]: K, ...Q } = e(g);
          te(g, Q, !0);
        })(e(se).id), onVariantChange: (oe, K) => (function(Q, U, X) {
          const ne = M(Q);
          if (U >= ne.length) return;
          const J = [...ne];
          J[U] = X, te(g, { ...e(g), [Q]: J }, !0);
        })(e(se).id, oe, K), onQuantityChange: (oe) => (function(K, Q) {
          const U = M(K.id), X = U.length;
          if (Q === X) return;
          let ne;
          if (Q > X) {
            const J = C(K), F = Q - X;
            ne = [...U, ...Array(F).fill(J)];
          } else ne = U.slice(0, Q);
          te(g, { ...e(g), [K.id]: ne }, !0);
        })(e(se), oe) });
      }
    }), y(ue);
    var z = O(ue, 2), N = w(z), S = w(N);
    y(N);
    var P = O(N, 2), L = w(P);
    L.__click = [$p, h];
    var j = w(L, !0);
    y(L);
    var Y = O(L, 2);
    Y.__click = [Dp, function() {
      const q = [];
      for (const se of l()) {
        const le = M(se.id);
        for (const W of le) {
          const oe = se.variants.find((Q) => Q.id === W);
          if (!oe) continue;
          const K = o().useProductCompareAtPrice && oe.compareAtPrice ? Math.max(oe.price, oe.compareAtPrice) : oe.price;
          q.push({ id: `${W}`, variant: oe, product: se, quantity: 1, fullPrice: K });
        }
      }
      return q;
    }, u, c, h];
    var de = w(Y, !0);
    y(Y), y(P), y(z), y(A), _e((q, se, le) => {
      var W, oe;
      Ot(A, e(k)), kt(S, `${(W = e(m)) != null ? W : ""}/${(oe = e(x)) != null ? oe : ""}
      ${q != null ? q : ""}`), kt(j, se), kt(de, le);
    }, [() => r()(e(V)), () => r()("system.cancel"), () => r()("system.confirm")]), p(n, A);
    var T = nt(D);
    return s(), T;
  }
  Gn(["click"]), Ze(bo, { dealBlock: {}, multipleGiftsSelector: {}, products: {}, initialSelectedGifts: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var Ap = $('<div class="kaching-bundles"><!></div>');
  function id(n, t) {
    var r;
    tt(t, !0);
    const a = _(t, "config", 7), s = _(t, "dealBlock", 7), o = _(t, "products", 23, () => []), c = _(t, "mediaImages", 7), l = _(t, "translations", 7), i = _(t, "multipleGiftsSelector", 7), u = d(() => hr(s(), a().brandColors)), h = d(() => hr(i(), a().brandColors)), { setConfig: b } = ri(a()), { setMoneyFormat: g } = Di(a().moneyFormat), { setTranslations: f } = ni(l()), { setMediaImages: k } = hl(c()), { setSwatchSettings: x } = ul({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (r = e(u).showSelectedSwatchName) != null && r });
    Ye(() => {
      b(a());
    }), Ye(() => {
      g(a().moneyFormat, !!e(u).showPricesWithoutDecimals);
    }), Ye(() => {
      f(l());
    }), Ye(() => {
      k(c());
    }), Ye(() => {
      var D;
      x({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (D = e(u).showSelectedSwatchName) != null && D });
    });
    var m = { get config() {
      return a();
    }, set config(D) {
      a(D), v();
    }, get dealBlock() {
      return s();
    }, set dealBlock(D) {
      s(D), v();
    }, get products() {
      return o();
    }, set products(D = []) {
      o(D), v();
    }, get mediaImages() {
      return c();
    }, set mediaImages(D) {
      c(D), v();
    }, get translations() {
      return l();
    }, set translations(D) {
      l(D), v();
    }, get multipleGiftsSelector() {
      return i();
    }, set multipleGiftsSelector(D) {
      i(D), v();
    } }, M = ze(), C = ve(M), V = (D) => {
      var A = Ap();
      bo(w(A), { get dealBlock() {
        return e(u);
      }, get products() {
        return o();
      }, get multipleGiftsSelector() {
        return e(h);
      } }), y(A), p(D, A);
    };
    return G(C, (D) => {
      e(h) && D(V);
    }), p(n, M), nt(m);
  }
  function pl(n, t) {
    var r;
    if (!t) return n.price;
    const a = n.sellingPlans.find((s) => s.id === t.id);
    return (r = a == null ? void 0 : a.price) != null ? r : n.price;
  }
  function fo(n, t) {
    const r = t.priceAdjustment;
    if (!r) return n;
    switch (r.type) {
      case "percentage":
        return n * (1 - r.value / 100);
      case "fixed_amount":
        return n - r.value;
      case "price":
        return r.value;
    }
  }
  function bl(n, t) {
    return n.sellingPlans.filter((r) => t.some((a) => a.sellingPlans.some((s) => s.id === r.id)));
  }
  function vo(n, t, r) {
    let a;
    if (n.sellingPlanGid) {
      const s = Kt(n.sellingPlanGid);
      a = t.find((o) => o.id === s);
    } else a = r || t[0];
    return a && t.some((s) => s.id === a.id) ? a : t[0];
  }
  function _o(n, t, r, a) {
    return n || (t ? r.some((s) => s.id === t.id) ? t : r[0] : a && r.length > 0 ? r[0] : void 0);
  }
  customElements.define("kaching-bundles-choose-multiple-gifts", Ze(id, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, multipleGiftsSelector: { attribute: "multiple-gifts-selector", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this;
    }
  }));
  const rr = (n, t, r) => qp(n, t, r) || Gp(n, t), qp = (n, t, r) => {
    if (!r || t.sellingPlans.length === 0) return;
    const a = new Set(t.sellingPlans.map((o) => o.id));
    return a.has(r.id) ? n.sellingPlans.find((o) => o.id === r.id) : n.sellingPlans.find((o) => a.has(o.id) && o.name === r.name) || n.sellingPlans.find((o) => o.id === t.sellingPlans[0].id);
  }, Gp = (n, t) => {
    if (!n.requiresSellingPlan || t.sellingPlans.length === 0) return;
    const r = t.sellingPlans[0].id;
    return n.sellingPlans.find((a) => a.id === r);
  };
  function pa({ discountType: n, discountValue: t, discountQuantity: r, variantQuantities: a, currencyRate: s, priceRounding: o, sellingPlan: c, percentageCentsRoundingWorkaround: l }) {
    const i = (function({ discountType: b, discountValue: g, discountQuantity: f, variantQuantities: k, currencyRate: x, sellingPlan: m, percentageCentsRoundingWorkaround: M }) {
      const C = k.map(({ variant: A, quantity: H }) => pl(A, m) * H), V = C.reduce((A, H) => A + H, 0), D = k.map(({ quantity: A }) => A).reduce((A, H) => A + H, 0);
      if (b === "specific") {
        let A = 100 * Number(g) * x;
        if (D > Number(f)) {
          const I = A / Number(f);
          A = Math.ceil(I * D);
        }
        const H = A / D;
        let ee = 0;
        for (const { variant: I, quantity: Z } of k) {
          if (m && I.sellingPlans.some((B) => B.id === m.id) && m.priceAdjustment) {
            ee += fo(H, m) * Z;
            continue;
          }
          ee += H * Z;
        }
        return Math.max(0, Math.min(ee, V));
      }
      if (b === "percentage") {
        if (M) {
          const H = V * (100 - Number(g)) / 100;
          return Math.max(0, Math.min(Math.ceil(H), V));
        }
        let A = 0;
        for (const { variant: H, quantity: ee } of k) {
          const I = pl(H, m);
          A += Math.ceil(I * (100 - Number(g)) / 100) * ee;
        }
        return Math.max(0, Math.min(A, V));
      }
      if (b === "amount") {
        const A = Math.round(100 * Number(g)) * x, H = A * D;
        return typeof document != "undefined" && V > 0 && H > V && document.dispatchEvent(new CustomEvent("kaching-bundles-amount-discount-exceeds-price", { detail: { totalDiscount: H, fullOrderPrice: V } })), Math.max(0, Math.min(V - A * D, V));
      }
      return V;
    })({ discountType: n, discountValue: t, discountQuantity: r, variantQuantities: a, currencyRate: s, sellingPlan: c, percentageCentsRoundingWorkaround: l }), u = a.map(({ variant: b, quantity: g }) => o != null && o.v2 ? pl(b, c) * g : b.price * g).reduce((b, g) => b + g, 0), h = a.map(({ quantity: b }) => b).reduce((b, g) => b + g, 0);
    if (o && (n !== "default" || o.v2)) {
      if (o.perItem) {
        const b = Ti(i / h, o.precision) * h;
        return o.v2 && Math.round(b) > Math.round(u) && i / h > 100 ? Ti(i / h - 100, o.precision) * h : b <= u ? b : i;
      }
      {
        const b = Ti(i, o.precision);
        return o.v2 && Math.round(b) > Math.round(u) && i > 100 ? Ti(i - 100, o.precision) : b <= u ? b : i;
      }
    }
    return i;
  }
  function ld(n, t, r, a, s, o) {
    return pa({ discountType: n.discountType, discountValue: n.discountValue, discountQuantity: n.quantity, variantQuantities: t, currencyRate: r, priceRounding: a, sellingPlan: s, percentageCentsRoundingWorkaround: o });
  }
  function sd(n, t, r, a, s) {
    var o, c, l, i;
    const u = [...t].sort((m, M) => m.variant.price - M.variant.price), h = u.reduce((m, M) => m + M.quantity, 0) >= n.buyQuantity + n.getQuantity ? n.getQuantity : 0, b = [], g = [];
    let f = h;
    for (const { variant: m, quantity: M } of u) {
      const C = Math.min(M, f), V = M - C;
      f -= C, C > 0 && b.push({ variant: m, quantity: C }), V > 0 && g.push({ variant: m, quantity: V });
    }
    const k = b.length > 0 ? pa({ discountType: (o = n.getDiscountType) != null ? o : "percentage", discountValue: (c = n.getDiscountValue) != null ? c : 100, discountQuantity: h, variantQuantities: b, currencyRate: r, priceRounding: a, sellingPlan: s }) : 0, x = g.reduce((m, M) => m + M.quantity, 0);
    return k + pa({ discountType: (l = n.buyDiscountType) != null ? l : "default", discountValue: (i = n.buyDiscountValue) != null ? i : 0, discountQuantity: x, variantQuantities: g, currencyRate: r, priceRounding: a, sellingPlan: s });
  }
  function ko(n, t, r, a, s) {
    return n.bundleProducts.filter(({ productGID: o }) => o).map((o) => {
      const c = t[o.id];
      if (!c) return 0;
      const l = rr(c.product, c.variant, s);
      return pa({ discountType: o.discountType, discountValue: o.discountValue, discountQuantity: o.quantity, variantQuantities: [c], currencyRate: r, priceRounding: a, sellingPlan: l });
    }).reduce((o, c) => o + c, 0);
  }
  function bs(n, t, r, a, s) {
    const o = n.bundleProducts.filter(({ productGID: i }) => i).reduce((i, u) => {
      const h = t[u.id];
      if (!h) return i;
      const b = rr(h.product, h.variant, s);
      return i + (b ? fo(h.variant.price, b) : h.variant.price);
    }, 0), c = Number(n.discountValue) || 0;
    let l;
    switch (n.discountType) {
      case "percentage":
        l = o * (1 - Math.min(Math.max(c, 0), 100) / 100);
        break;
      case "amount":
        l = o - Math.round(100 * c) * r;
        break;
      case "specific":
        l = Math.round(100 * c) * r;
        break;
      default:
        l = o;
    }
    if (l = Math.max(0, Math.min(l, o)), a && (n.discountType !== "default" || a.v2)) {
      const i = l;
      let u = Ti(i, a.precision);
      a.v2 && Math.round(u) > Math.round(o) && i > 100 && (u = Ti(i - 100, a.precision)), l = u <= o ? u : i;
    }
    return Math.max(0, Math.round(l));
  }
  function Ti(n, t = ".00") {
    switch (t) {
      case ".99":
        return n > 99 ? 100 * Math.ceil(n / 100) - 1 : n;
      case ".95":
        return n > 95 ? 100 * Math.ceil(n / 100) - 5 : n;
      case ".90":
        return n > 90 ? 100 * Math.ceil(n / 100) - 10 : n;
      case ".x9":
        return n > 9 ? 10 * Math.ceil(n / 10) - 1 : n;
      case ".x0":
        return 10 * Math.ceil(n / 10);
      default:
        return 100 * Math.ceil(n / 100);
    }
  }
  var Op = $('<img class="kaching-bundles__choose-product__product-image" alt=""/>'), Fp = $('<span class="kaching-bundles__choose-product__product-title"> </span>'), Lp = $('<span class="kaching-bundles__choose-product__subtitle"><!></span>'), jp = $('<div class="kaching-bundles__choose-product__product-price"><!></div>'), Ep = $('<div class="kaching-bundles__choose-product__product-compare-at-price"><!></div>'), Rp = $("<div><!> <!></div>"), Np = $('<div class="kaching-bundles__choose-product__product"><div class="kaching-bundles__choose-product__product-container"><!> <div class="kaching-bundles__choose-product__product-content"><!> <!> <div class="kaching-bundles__choose-product__product-price-container"><!> <!></div> <!></div></div> <!></div>');
  function od(n, t) {
    var r;
    tt(t, !0);
    const a = () => Ve(k, "$config", c), s = () => Ve(f, "$formatPrice", c), o = () => Ve(g, "$translate", c), [c, l] = mt(), i = _(t, "product", 7), u = _(t, "dealBlock", 7), h = _(t, "dealBar", 7), b = _(t, "onChoose", 7), g = zt(), f = pn(), k = mn();
    let x = Ge(!1), m = Ge(gt(((r = i().variants.find((Q) => Q.availableForSale)) == null ? void 0 : r.id) || i().variants[0].id));
    const M = d(() => i().variants.find((Q) => Q.id === e(m)) || i().variants[0]), C = d(() => {
      var Q;
      return e(x) || ((Q = u().chooseProductModal) == null ? void 0 : Q.showVariantImageByDefault);
    }), V = d(() => e(C) && e(M).image || i().image), D = d(() => u().priceRounding ? { perItem: !0, precision: u().priceRoundingPrecision, v2: a().featureFlags.price_rounding_v2 || !1 } : void 0), A = d(() => h().dealBarType === ft.Bxgy ? e(M).price : pa({ discountType: h().discountType, discountValue: h().discountValue, discountQuantity: 1, variantQuantities: [{ variant: e(M), quantity: 1 }], currencyRate: a().currencyRate, priceRounding: e(D) })), H = d(() => (function(Q, U) {
      return Q.useProductCompareAtPrice && U.compareAtPrice ? Math.max(U.price, U.compareAtPrice) : U.price;
    })(u(), e(M))), ee = d(() => i().url ? `${i().url}?variant=${e(m)}` : void 0), I = d(() => bn({ priceFormatter: s(), product: i(), totalFullPrice: e(H), totalDiscountedPrice: e(A), quantity: 1, unitQuantity: Sr([{ variant: e(M), quantity: 1 }]) })), Z = d(() => e(I)(o()(u().chooseProductModal.subtitle || ""))), B = d(() => u().chooseProductModal.buttonText);
    function E(Q) {
      te(x, !0), te(m, Q, !0);
    }
    var ue = { get product() {
      return i();
    }, set product(Q) {
      i(Q), v();
    }, get dealBlock() {
      return u();
    }, set dealBlock(Q) {
      u(Q), v();
    }, get dealBar() {
      return h();
    }, set dealBar(Q) {
      h(Q), v();
    }, get onChoose() {
      return b();
    }, set onChoose(Q) {
      b(Q), v();
    } }, z = Np(), N = w(z), S = w(N), P = (Q) => {
      nr(Q, { get url() {
        return e(ee);
      }, class: "kaching-bundles__choose-product__product-image-link", children: (U, X) => {
        var ne = Op();
        Be(ne, "width", 100), Be(ne, "height", 100), _e(() => Be(ne, "src", e(V))), p(U, ne);
      }, $$slots: { default: !0 } });
    };
    G(S, (Q) => {
      e(V) && Q(P);
    });
    var L = O(S, 2), j = w(L);
    nr(j, { get url() {
      return e(ee);
    }, class: "kaching-bundles__choose-product__product-link", children: (Q, U) => {
      var X = Fp(), ne = w(X, !0);
      y(X), _e(() => kt(ne, i().title)), p(Q, X);
    }, $$slots: { default: !0 } });
    var Y = O(j, 2), de = (Q) => {
      var U = Lp();
      Le(w(U), () => e(Z)), y(U), p(Q, U);
    };
    G(Y, (Q) => {
      e(Z) && Q(de);
    });
    var T = O(Y, 2), q = w(T);
    lt(q, () => e(A), (Q) => {
      var U = jp();
      Le(w(U), () => s()(e(A))), y(U), p(Q, U);
    });
    var se = O(q, 2), le = (Q) => {
      var U = ze();
      lt(ve(U), () => e(H), (X) => {
        var ne = Ep();
        Le(w(ne), () => s()(e(H))), y(ne), p(X, ne);
      }), p(Q, U);
    };
    G(se, (Q) => {
      e(H) && e(H) > e(A) && Q(le);
    }), y(T);
    var W = O(T, 2), oe = (Q) => {
      var U = Rp(), X = w(U);
      ha(X, { get product() {
        return i();
      }, class: "kaching-bundles__choose-product__product-option-names" }), Hn(O(X, 2), { get product() {
        return i();
      }, get selectedVariantId() {
        return e(m);
      }, onChange: E }), y(U), p(Q, U);
    };
    G(W, (Q) => {
      i().variants.length > 1 && Q(oe);
    }), y(L), y(N), Xt(O(N, 2), { element: "span", class: "kaching-bundles__choose-product__product-button", onclick: function() {
      b()({ product: i(), variant: e(M) });
    }, children: (Q, U) => {
      var X = ze(), ne = ve(X), J = (ae) => {
        var ie = Un();
        _e((ke) => kt(ie, ke), [() => o()(e(B))]), p(ae, ie);
      }, F = (ae) => {
        p(ae, Un("Choose"));
      };
      G(ne, (ae) => {
        e(B) ? ae(J) : ae(F, !1);
      }), p(Q, X);
    }, $$slots: { default: !0 } }), y(z), p(n, z);
    var K = nt(ue);
    return l(), K;
  }
  Ze(od, { product: {}, dealBlock: {}, dealBar: {}, onChoose: {} }, [], [], !0);
  const mo = "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
  var Qp = $('<img alt="Close"/>'), Wp = (n, t) => {
    te(t, !e(t));
  }, Up = (n, t, r, a) => {
    te(t, e(r).value, !0), te(a, !1);
  }, Hp = $('<img alt="" aria-hidden="true" class="kaching-bundles__choose-product__sort-option-check"/>'), Zp = $('<button type="button" class="kaching-bundles__choose-product__sort-option"><span> </span> <!></button>'), Jp = $('<div class="kaching-bundles__choose-product__sort-menu"></div>'), Yp = $('<div class="kaching-bundles__choose-product__controls"><div class="kaching-bundles__choose-product__search-field"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__search-icon"/> <input type="search" class="kaching-bundles__choose-product__search-input"/></div> <div class="kaching-bundles__choose-product__sort"><button type="button" class="kaching-bundles__choose-product__sort-button"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__sort-icon"/> </button> <!></div></div>'), Kp = (n, t) => {
    te(t, "");
  }, Xp = $('<div class="kaching-bundles__choose-product__empty-state-icon-wrapper"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__empty-state-icon"/></div> <h3 class="kaching-bundles__choose-product__empty-state-title"> </h3> <p class="kaching-bundles__choose-product__empty-state-description"> </p> <button type="button" class="kaching-bundles__choose-product__empty-state-clear-button"> </button>', 1), eb = $('<div class="kaching-bundles__choose-product__empty-state"><!></div>'), tb = $('<div class="kaching-bundles__choose-product"><div class="kaching-bundles__choose-product__header"><h2 class="kaching-bundles__choose-product__heading"><!></h2> <!></div> <!> <div class="kaching-bundles__choose-product__products"><!></div></div>');
  function xo(n, t) {
    var r;
    tt(t, !0);
    const a = () => Ve(b, "$translate", s), [s, o] = mt(), c = _(t, "dealBlock", 7), l = _(t, "dealBar", 7), i = _(t, "products", 23, () => []), u = _(t, "onChoose", 7), h = _(t, "onClose", 7), b = zt(), g = d(() => c().chooseProductModal), f = d(() => ((T) => _n({ "kaching-choose-product-button-size": T.buttonSize + "px", "kaching-choose-product-text-size": T.textSize + "px", "kaching-choose-product-price-color": We(T.priceColor), "kaching-choose-product-compare-at-price-color": We(T.compareAtPriceColor), "kaching-choose-product-text-color": We(T.textColor), "kaching-choose-product-button-color": We(T.buttonColor), "kaching-choose-product-button-text-color": We(T.buttonTextColor), "kaching-choose-product-photo-size": T.productPhotoSize + "px" }))(e(g)));
    let k = Ge(""), x = Ge(!1);
    const m = { Relevance: "relevance", NewestFirst: "newest-first", PriceLowToHigh: "price-low-to-high", PriceHighToLow: "price-high-to-low" }, M = d(() => [{ value: m.Relevance, label: a()("system.sort_relevance") }, { value: m.NewestFirst, label: a()("system.sort_newest_first") }, { value: m.PriceLowToHigh, label: a()("system.sort_price_low_to_high") }, { value: m.PriceHighToLow, label: a()("system.sort_price_high_to_low") }]);
    let C = Ge(gt(Object.values(m).includes((r = e(g).defaultSortOption) != null ? r : "") ? e(g).defaultSortOption : m.Relevance));
    const V = d(() => e(g).showSearchField ? i().filter((T) => T.title.toLowerCase().includes(e(k).toLowerCase().trim())) : i()), D = d(() => {
      const T = [...e(V)], q = (le) => {
        const W = le.variants.find((oe) => oe.availableForSale) || le.variants[0];
        return (W == null ? void 0 : W.price) || 0;
      }, se = (le) => {
        if (!le.createdAt) return 0;
        const W = Date.parse(le.createdAt);
        return Number.isNaN(W) ? 0 : W;
      };
      switch (e(C)) {
        case m.Relevance:
          return T;
        case m.NewestFirst:
          return T.sort((le, W) => {
            const oe = se(W) - se(le);
            return oe !== 0 ? oe : W.id - le.id;
          });
        case m.PriceLowToHigh:
          return T.sort((le, W) => q(le) - q(W));
        case m.PriceHighToLow:
          return T.sort((le, W) => q(W) - q(le));
        default:
          return T;
      }
    }), A = d(() => e(g).showSearchField && e(k).trim().length > 0 && e(D).length === 0);
    function H() {
      te(x, !1);
    }
    function ee(T, q) {
      const se = (le) => {
        T.contains(le.target) || q();
      };
      return document.addEventListener("click", se, !0), { destroy() {
        document.removeEventListener("click", se, !0);
      } };
    }
    var I = { get dealBlock() {
      return c();
    }, set dealBlock(T) {
      c(T), v();
    }, get dealBar() {
      return l();
    }, set dealBar(T) {
      l(T), v();
    }, get products() {
      return i();
    }, set products(T = []) {
      i(T), v();
    }, get onChoose() {
      return u();
    }, set onChoose(T) {
      u(T), v();
    }, get onClose() {
      return h();
    }, set onClose(T) {
      h(T), v();
    } }, Z = tb(), B = w(Z), E = w(B), ue = w(E), z = (T) => {
      var q = Un();
      _e((se) => kt(q, se), [() => a()(e(g).heading)]), p(T, q);
    };
    G(ue, (T) => {
      e(g).heading && T(z);
    }), y(E), Xt(O(E, 2), { element: "span", class: "kaching-bundles__choose-product__close", get onclick() {
      return h();
    }, children: (T, q) => {
      var se = Qp();
      _e(() => Be(se, "src", mo)), p(T, se);
    }, $$slots: { default: !0 } }), y(B);
    var N = O(B, 2), S = (T) => {
      var q = Yp(), se = w(q), le = w(se), W = O(le, 2);
      da(W), y(se);
      var oe = O(se, 2), K = w(oe);
      K.__click = [Wp, x];
      var Q = w(K), U = O(Q);
      y(K);
      var X = O(K, 2), ne = (J) => {
        var F = Jp();
        At(F, 21, () => e(M), (ae) => ae.value, (ae, ie) => {
          var ke = Zp();
          ke.__click = [Up, C, ie, x];
          var re = w(ke), pe = w(re, !0);
          y(re);
          var ge = O(re, 2), me = (ce) => {
            var fe = Hp();
            _e(() => Be(fe, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.6663%205L7.49967%2014.1667L3.33301%2010'%20stroke='%23344054'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), p(ce, fe);
          };
          G(ge, (ce) => {
            e(C) === e(ie).value && ce(me);
          }), y(ke), _e(() => kt(pe, e(ie).label)), p(ae, ke);
        }), y(F), p(J, F);
      };
      G(X, (J) => {
        e(x) && J(ne);
      }), y(oe), Xs(oe, (J, F) => ee == null ? void 0 : ee(J, F), () => H), y(q), _e((J, F, ae) => {
        Be(le, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.5%2017.5L13.875%2013.875M15.8333%209.16667C15.8333%2012.8486%2012.8486%2015.8333%209.16667%2015.8333C5.48477%2015.8333%202.5%2012.8486%202.5%209.16667C2.5%205.48477%205.48477%202.5%209.16667%202.5C12.8486%202.5%2015.8333%205.48477%2015.8333%209.16667Z'%20stroke='%23717680'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), Be(W, "aria-label", J), Be(W, "placeholder", F), Be(Q, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.1667%203.33337V16.6667M14.1667%2016.6667L10.8333%2013.3334M14.1667%2016.6667L17.5%2013.3334M5.83333%2016.6667V3.33337M5.83333%203.33337L2.5%206.66671M5.83333%203.33337L9.16667%206.66671'%20stroke='%23414651'%20stroke-width='1.67'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), kt(U, ` ${ae != null ? ae : ""}`);
      }, [() => a()("system.search"), () => a()("system.search"), () => a()("system.sort_by")]), ih(W, () => e(k), (J) => te(k, J)), p(T, q);
    };
    G(N, (T) => {
      e(g).showSearchField && T(S);
    });
    var P = O(N, 2), L = w(P), j = (T) => {
      var q = eb(), se = w(q), le = (oe) => {
        var K = Xp(), Q = ve(K), U = w(Q);
        y(Q);
        var X = O(Q, 2), ne = w(X, !0);
        y(X);
        var J = O(X, 2), F = w(J, !0);
        y(J);
        var ae = O(J, 2);
        ae.__click = [Kp, k];
        var ie = w(ae, !0);
        y(ae), _e((ke, re, pe) => {
          Be(U, "src", "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='4'%20y='4'%20width='48'%20height='48'%20rx='24'%20fill='%23F2F4F7'/%3e%3crect%20x='4'%20y='4'%20width='48'%20height='48'%20rx='24'%20stroke='%23F9FAFB'%20stroke-width='8'/%3e%3cpath%20d='M37%2037L32.65%2032.65M35%2027C35%2031.4183%2031.4183%2035%2027%2035C22.5817%2035%2019%2031.4183%2019%2027C19%2022.5817%2022.5817%2019%2027%2019C31.4183%2019%2035%2022.5817%2035%2027Z'%20stroke='%23475467'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), kt(ne, ke), kt(F, re), kt(ie, pe);
        }, [() => a()("system.no_results_found"), () => a()("system.no_results_description"), () => a()("system.clear_search")]), p(oe, K);
      }, W = (oe) => {
        var K = Un();
        _e((Q) => kt(K, Q), [() => a()("system.no_products_available")]), p(oe, K);
      };
      G(se, (oe) => {
        e(A) ? oe(le) : oe(W, !1);
      }), y(q), p(T, q);
    }, Y = (T) => {
      var q = ze();
      At(ve(q), 17, () => e(D), (se) => se.id, (se, le) => {
        od(se, { get dealBlock() {
          return c();
        }, get dealBar() {
          return l();
        }, get product() {
          return e(le);
        }, get onChoose() {
          return u();
        } });
      }), p(T, q);
    };
    G(L, (T) => {
      e(D).length === 0 ? T(j) : T(Y, !1);
    }), y(P), y(Z), _e(() => Ot(Z, e(f))), p(n, Z);
    var de = nt(I);
    return o(), de;
  }
  Gn(["click"]), Ze(xo, { dealBlock: {}, dealBar: {}, products: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var nb = $('<div class="kaching-bundles"><!></div>');
  function cd(n, t) {
    var r;
    tt(t, !0);
    const a = _(t, "config", 7), s = _(t, "dealBlock", 7), o = _(t, "dealBar", 7), c = _(t, "products", 23, () => []), l = _(t, "mediaImages", 7), i = _(t, "translations", 7), u = d(() => hr(s(), a().brandColors)), h = d(() => hr(o(), a().brandColors)), { setConfig: b } = ri(a()), { setMoneyFormat: g } = Di(a().moneyFormat), { setTranslations: f } = ni(i()), { setMediaImages: k } = hl(l()), { setSwatchSettings: x } = ul({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (r = e(u).showSelectedSwatchName) != null && r });
    Ye(() => {
      b(a());
    }), Ye(() => {
      g(a().moneyFormat, !!e(u).showPricesWithoutDecimals);
    }), Ye(() => {
      f(i());
    }), Ye(() => {
      k(l());
    }), Ye(() => {
      var C;
      x({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (C = e(u).showSelectedSwatchName) != null && C });
    });
    var m = { get config() {
      return a();
    }, set config(C) {
      a(C), v();
    }, get dealBlock() {
      return s();
    }, set dealBlock(C) {
      s(C), v();
    }, get dealBar() {
      return o();
    }, set dealBar(C) {
      o(C), v();
    }, get products() {
      return c();
    }, set products(C = []) {
      c(C), v();
    }, get mediaImages() {
      return l();
    }, set mediaImages(C) {
      l(C), v();
    }, get translations() {
      return i();
    }, set translations(C) {
      i(C), v();
    } }, M = nb();
    return xo(w(M), { get dealBlock() {
      return e(u);
    }, get dealBar() {
      return e(h);
    }, get products() {
      return c();
    }, onChoose: () => {
    }, onClose: () => {
    } }), y(M), p(n, M), nt(m);
  }
  customElements.define("kaching-bundles-choose-product", Ze(cd, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, dealBar: { attribute: "deal-bar", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this;
    }
  })), hi = !0;
  var rb = Dn('<svg width="102" height="60" viewBox="0 0 102 60" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 2)" fill="currentColor"></ellipse><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 2)" fill="#000" fill-opacity=".3"></ellipse><mask id="a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="5" width="96" height="48"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 0)" fill="currentColor"></ellipse></mask><g mask="url(#a)"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 0)" fill="currentColor"></ellipse></g><path class="most-popular-text" d="M28 15.4 25.4 24a.3.3 0 0 1 0 .1.2.2 0 0 1-.2.1c-.4.1-.7 0-.8-.4a1007.3 1007.3 0 0 1-3.9-9.2l-.8 7.6a.5.5 0 0 0 0 .2l.6.8a.7.7 0 0 1 0 .1.2.2 0 0 1 0 .1c0 .5-1.7.1-2 0-1 0 .1-1 .2-1.4l1.1-9c0-.4-.1-.7-.5-1a.4.4 0 0 1-.1-.2v-.2a.2.2 0 0 1 .1 0 15.2 15.2 0 0 1 3.1.2h.1c.1 0 0 0 0 .1.3.5-.5.7-.3 1.2a1361.6 1361.6 0 0 1 3.2 8.1l2.3-7.3a.7.7 0 0 0-.1-.6c-.3-.4-1-1 .1-1l2.7.4c.2 0 .3.2.2.4a.4.4 0 0 1-.1.2c-.3.3-.5.5-.4 1a771.7 771.7 0 0 0 2.5 10c.5.5.7 1-.3.8l-2.2-.3c-.5 0-.5-.4-.1-1a.7.7 0 0 0 .1-.6l-1.6-7.6c0-.2-.1-.2-.1 0zm24 4.7.1 4.5c0 1 .6 1.5 1.6 1.5.3 0 .5-.2.6-.5.1-.4.3-.5.5-.3h.1v.1c.1 1.1-.4 2-1.5 2-2.3.4-3.2-1.2-3.3-3.3l-.2-4.1c0-.4-.2-.5-.6-.5-.5 0-.8-.1-.7-.7a.2.2 0 0 1 .2-.1c1.3.2 2-.3 2-1.6a.2.2 0 0 1 .2-.1c1.1-.5.9 1.3.9 1.9a.1.1 0 0 0 .1.1l2.2.3.2.1c.1.3.1.5-.1.7a.2.2 0 0 1-.1 0 .4.4 0 0 1-.1 0l-2-.1a.1.1 0 0 0-.1 0zm-11.6 4.6c-.7.8-1.8 1.2-3 1.1-1.1 0-2.3-.5-3.3-1.4A5.7 5.7 0 0 1 33 23a5 5 0 0 1-.6-1.7 4 4 0 0 1 .1-1.7c.1-.5.4-1 .8-1.4.7-.7 1.7-1.2 2.9-1.1 1.2 0 2.4.6 3.3 1.4.5.4.9 1 1.2 1.5.3.5.5 1.1.5 1.7a4 4 0 0 1 0 1.6c-.2.6-.5 1-.8 1.4zm-2.4.4c.3 0 .5-.3.7-.5l.5-1v-1.4a6.4 6.4 0 0 0-.3-1.4 6.4 6.4 0 0 0-.6-1.4 4.7 4.7 0 0 0-.8-1 2.6 2.6 0 0 0-1-.6 1.5 1.5 0 0 0-.9 0c-.3 0-.5.3-.7.5l-.4 1a4.7 4.7 0 0 0 0 1.4 6.4 6.4 0 0 0 1.7 3.8c.3.3.6.5 1 .6.2 0 .5.1.8 0zm8-6c-1-.8-2.4-.4-2.3 1 0 .4.3.8.7 1l3 1.2c1.1.5 2.2 2.5 1.1 3.6-1.6 1.8-5.6.6-6.8-1.3-.2-.4-.1-.8.4-1 1.2-.5 1.5 1.5 2.3 2 1 .8 3 .6 2.4-1.1-.3-1-3.2-1.8-3.8-2.2-1.9-1.2-1.8-4 .8-4.3 1.6-.1 4.5.6 4.7 2.6a.3.3 0 0 1 0 .3c-1.1 1.3-1.9-1.3-2.5-1.8zM28.3 34.9c0 1.4 0 2 .8 3 .2.2.2.4 0 .6a.3.3 0 0 1-.2 0l-3.8-.3a.4.4 0 0 1-.3 0c-.3-.4-.3-.7 0-1a1 1 0 0 0 .4-.8L25 28c0-.4-.3-.9-.8-1.4a.3.3 0 0 1 0-.1.2.2 0 0 1 0-.1c0-.3.2-.4.6-.3 3.4.2 9.4.1 9.7 4.8.3 3.8-3 4.1-6 3.9zm-.2-6.7c0 1.4 0 3 .2 4.6 0 .3.2.5.5.6 3.4 1 2.5-3.2 1.6-4.6-.3-.5-.8-.9-1.5-1.1-.5-.2-.8 0-.8.5zM59.5 41c-1.7 1.3-4.3.4-5.2-1.4-1-1.8 0-4.1-1.3-5.8a.4.4 0 0 1 0-.2c0-.6.4-.5.8-.5a19.9 19.9 0 0 1 2.5 0 .4.4 0 0 1 .4.3l.2 5.3c0 .8.3 1.8 1.1 1.8 1.7.2 1-4.2 1-5.3a.5.5 0 0 0-.2-.2l-.5-.8c-.3-.3-.2-.5.3-.6h2.9c.3 0 .4 0 .4.4l.3 6c0 1.6 1.4 1.6 1.3-.2l-.3-7c0-.8-.3-1.2-.8-1.8a.3.3 0 0 1 0-.2.3.3 0 0 1 0-.2.3.3 0 0 1 .2 0l2.8-1.2c.5-.2.8 0 .8.6l.5 10.4c0 .5.2.8.6 1.2.3.4.4 1-.4.8-.9 0-3.1 0-3.9-.4a.4.4 0 0 0-.2 0c-.9 0-2.7.1-3.1-1a.1.1 0 0 0-.2 0zm-16.4-3c-.5 1-1.5 1.6-2.7 1.8-1.2.2-2.5 0-3.6-.7a5.7 5.7 0 0 1-1.5-1.2 5 5 0 0 1-.9-1.6 4.2 4.2 0 0 1-.2-1.7 3.5 3.5 0 0 1 .5-1.6c.5-.9 1.5-1.5 2.7-1.7 1.2-.2 2.5 0 3.6.7a5.7 5.7 0 0 1 1.4 1.2c.5.5.8 1 1 1.6.2.5.2 1.1.2 1.7a3.5 3.5 0 0 1-.5 1.5zm-3.3 1c.2 0 .3-.1.4-.4l.3-.8v-1.3a8.8 8.8 0 0 0-.3-1.3 8.8 8.8 0 0 0-.5-1.3 5.9 5.9 0 0 0-.6-1.1l-.6-.6c-.2-.2-.4-.2-.6-.2-.2 0-.3.2-.4.4l-.3 1v1.1a8.8 8.8 0 0 0 1.4 3.8l.6.6c.2.1.4.2.6.1z" fill="#FEFDFD"></path><path class="most-popular-text" d="M46.9 32.7a3 3 0 0 1 2.8-.3c2.5.8 3.6 2.5 3.5 5-.2 2.9-3.2 4.2-5.5 2.9-.2-.1-.2 0-.2 0 .1 1-.2 2.2.7 3 .3.2.4.5.1.7a.3.3 0 0 1-.2.1 401 401 0 0 0-3.5-.3c-.4 0-.6-.3-.7-.6a.3.3 0 0 1 0-.1.5.5 0 0 1 .1-.1l.5-.7a.4.4 0 0 0 0-.2l-.2-7.3c0-.6-1.1-.9-.9-1.6a.3.3 0 0 1 .2-.2l2.6-1a.2.2 0 0 1 .2 0c.2.1.4.4.4.7zM49 40c2.2 0 .5-5.5-.1-6.4-.7-.8-1.5-.7-1.7.4v3.4c.2.9.6 2.6 1.8 2.6zm24.5 2.7c-2.7 1.4-5.7-1-6.1-3.7-.7-3.5 2.8-5.8 5.8-3.8a.1.1 0 0 0 .1 0c.3-.7 2.3 0 2.9.2.4 0 .6.3.5.7a.3.3 0 0 1 0 .1.3.3 0 0 1-.1 0c-.4.4-.6.8-.6 1.2 0 2.3.2 3.7.2 4.2s1 1.2.7 1.7a.2.2 0 0 1-.1 0 .3.3 0 0 1-.2.1l-2.6-.3a.3.3 0 0 1-.2 0l-.2-.4a.1.1 0 0 0-.1 0zm-.4-5.2c-.2-1.8-2.7-3.4-2.8-.7-.1 1.5.3 4.6 1.9 5.5a.4.4 0 0 0 .2 0c1.4-.3.8-3.5.7-4.8zM80.5 36.5c.3-.3.5-.7 1-.9 3.8-1.6 3.6 4.9.9 2.9-.5-.4-.5-1.7-1.2-1.5a.3.3 0 0 0-.1 0 .3.3 0 0 0 0 .2c-.4.7-.4 4.6.1 5.2.2.3 1.5 1.2.2 1.2a52 52 0 0 1-3.5-.3c-.3 0-.5-.2-.5-.5a.4.4 0 0 1 0-.2c.4-.4.6-.7.6-1.2l-.2-3.5a.4.4 0 0 0 0-.2l-.9-1c-.2-.2 0-.4.3-.6l2.6-1c.3 0 .5 0 .5.4v1h.2z" fill="#FEFDFD"></path><path class="most-popular-text" fill-rule="evenodd" clip-rule="evenodd" d="m82.2 24.2-.7-6.2-.7 6.2-2.7-2.1 2 2.7-6.1.7 6.2.7L78 29l2.8-2.1.7 6.1.7-6.1L85 29l-2.2-2.8 6.2-.7-6.1-.7 2-2.7-2.7 2.1z" fill="#fff"></path><path class="most-popular-text" d="M45 4v1a2 2 0 0 0 2 2h1-1a2 2 0 0 0-2 2v1-1a2 2 0 0 0-2-2h-1 1a2 2 0 0 0 2-2V4zm12 41v1a2 2 0 0 0 2 2h1-1a2 2 0 0 0-2 2v1-1a2 2 0 0 0-2-2h-1 1a2 2 0 0 0 2-2v-1zM13 22v3a4 4 0 0 0 4 4h3-3a4 4 0 0 0-4 4v3-3a4 4 0 0 0-4-4H6h3a4 4 0 0 0 4-4v-3zM67 4v3a4 4 0 0 0 4 4h3-3a4 4 0 0 0-4 4v3-3a4 4 0 0 0-4-4h-3 3a4 4 0 0 0 4-4V4z" fill="#fff"></path></svg>');
  function ud(n) {
    p(n, rb());
  }
  Ze(ud, {}, [], [], !0);
  const dd = (n) => {
    const t = n.badgeStyle || "simple", r = n.badgeText || "", a = { type: "dealBar", dealBarId: n.id }, s = { id: `legacy-${n.id}`, attachedTo: a, text: r, colors: null };
    return t === "most-popular" ? { ...s, badgeType: "most-popular", size: 102 } : t === "custom" ? n.badgeImageGID ? { ...s, badgeType: "custom", imageGID: n.badgeImageGID, size: 56 } : null : r ? { ...s, badgeType: "simple", textSize: 12 } : null;
  }, fl = (n, t) => {
    if (n.blockLayout !== "vertical") return [];
    const r = fs(n);
    if (r.length > 0) return r.filter((s) => s.attachedTo.type === "dealBar" && s.attachedTo.dealBarId === t.id);
    if (n.badgesEnabled === !1) return [];
    const a = dd(t);
    return a ? [a] : [];
  }, ab = (n, t) => n.blockLayout !== "vertical" ? [] : fs(n).filter((r) => r.attachedTo.type === t), fs = (n) => n.badgesEnabled === !1 ? [] : n.badges || [], $a = (n, t, r) => ({ ...n, text: r(t(n.text)) }), ib = (n) => {
    const t = n.filter((r) => r.badgeType === "border").map((r) => r.thickness);
    return t.length === 0 ? 22 : Math.max(...t);
  }, lb = (n) => {
    const t = n.filter((r) => r.badgeType === "border").filter((r) => r.position === "all").map((r) => {
      var a;
      return (a = r.gap) != null ? a : 0;
    });
    return t.length === 0 ? 0 : Math.max(...t);
  };
  let vl = null;
  const gd = (n, t) => typeof document == "undefined" ? 0 : (vl || (vl = document.createElement("canvas").getContext("2d")), vl ? (vl.font = `bold ${t}px sans-serif`, vl.measureText(n).width + 0.5 * n.length) : 0), sb = (n) => {
    const t = n.flatMap((r) => r.badgeType !== "border" || r.position !== "left" && r.position !== "right" ? [] : [gd(r.text, r.textSize) + 24]);
    return t.length === 0 ? 0 : Math.max(...t);
  }, Da = (n) => ({ positions: new Set(n.flatMap((t) => t.badgeType === "border" ? [t.position] : [])), thickness: ib(n), gap: lb(n), sideLength: sb(n) });
  var ob = Dn('<animate attributeName="startOffset" repeatCount="indefinite"></animate>'), cb = Dn("<textPath><!> </textPath>"), ub = Dn("<!><!>", 1), db = Dn('<svg class="kaching-bundles__badge-border__curve"><path fill="none"></path><text text-anchor="middle"></text></svg>'), gb = $('<span class="kaching-bundles__badge-border__side kaching-bundles__badge-border__side--top"><!></span>'), hb = $('<div class="kaching-bundles__badge-border kaching-bundles__badge-border--all"><div class="kaching-bundles__badge-border__band"><span></span></div> <!></div>'), pb = $('<div><span class="kaching-bundles__badge-border__text"><!></span></div>');
  function hd(n, t) {
    const r = (function() {
      var S, P, L;
      if (_t && Pt && Pt.nodeType === 8 && ((S = Pt.textContent) != null && S.startsWith("$"))) {
        const j = Pt.textContent.substring(1);
        return mr(), j;
      }
      return (L = (P = window.__svelte) != null ? P : window.__svelte = {}).uid != null || (L.uid = 1), "c" + window.__svelte.uid++;
    })();
    tt(t, !0);
    const a = _(t, "badge", 7), s = typeof window != "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, o = d(() => Fu(a().colors)), c = d(() => {
      var S;
      return `--badge-border-thickness: ${a().thickness}px; --badge-text-size: ${a().textSize}px; --badge-ring-outer: ${a().thickness + ((S = a().gap) != null ? S : 0)}px;`;
    });
    let l = Ge(0), i = Ge(0);
    const u = d(() => a().position === "left" || a().position === "right"), h = d(() => {
      const S = Math.max(6, a().thickness - 6), P = e(u) ? e(i) : e(l), L = Math.max(1, a().text.trim().length), j = P > 0 ? (P - 16) / (0.62 * L) : 1 / 0;
      return Math.max(6, Math.min(a().textSize, S, j));
    }), b = d(() => `--badge-border-thickness: ${a().thickness}px; --badge-text-size: ${e(h)}px;`);
    let g = Ge(void 0), f = Ge(gt({ count: 0, slot: 0, pathLength: 0 })), k = Ge(void 0), x = Ge(0), m = Ge(0);
    const M = d(() => Math.max(6, Math.min(a().textSize, a().thickness - 6))), C = d(() => 0.32 * e(M)), V = d(() => 0.4 * e(M) + a().spacing), D = d(() => a().delimiter || ""), A = d(() => (gd(a().text.trim(), e(M)) || a().text.trim().length * e(M) * 0.7) + (e(D) ? e(M) : 0) + 2 * e(V));
    Ye(() => {
      if (e(H), e(A), !e(g)) return;
      const S = e(g).getTotalLength() / 2;
      if (S <= 0 || e(A) <= 0) return;
      const P = Math.max(1, Math.floor(S / e(A)));
      te(f, { count: P, slot: S / P, pathLength: S }, !0);
    });
    const H = d(() => {
      if (!e(k) || !e(x) || !e(m)) return "";
      const S = getComputedStyle(e(k)), P = parseFloat(S.getPropertyValue("--bar-border-radius")) || 8, L = parseFloat(S.getPropertyValue("--badge-border-gap")) || 0, j = a().thickness / 2 + e(C), Y = e(x) - j, de = e(m) - j, T = Math.min(P + L + j, Math.max(0, Math.min(Y - j, de - j) / 2)), q = ["H " + (Y - T), `A ${T} ${T} 0 0 1 ${Y} ${j + T}`, "V " + (de - T), `A ${T} ${T} 0 0 1 ${Y - T} ${de}`, `H ${j + T}`, `A ${T} ${T} 0 0 1 ${j} ${de - T}`, `V ${j + T}`, `A ${T} ${T} 0 0 1 ${j + T} ${j}`].join(" ");
      return `M ${j + T} ${j} ${q} ${q} Z`;
    }), ee = `kaching-badge-ring-${r}`, I = d(() => a().repeatText && a().animated && a().spinSpeed > 0 && !s && e(f).pathLength > 0), Z = d(() => e(I) ? Math.max(2, e(f).pathLength / Math.max(1, a().spinSpeed)) : 0);
    var B = { get badge() {
      return a();
    }, set badge(S) {
      a(S), v();
    } }, E = ze(), ue = ve(E), z = (S) => {
      var P = hb(), L = O(w(P), 2), j = (de) => {
        var T = ze();
        lt(ve(T), () => e(H), (q) => {
          var se = ze(), le = ve(se), W = (oe) => {
            var K = db();
            {
              const X = (ne, J = Mr, F = Mr) => {
                var ae = cb(), ie = w(ae), ke = (pe) => {
                  var ge = ob();
                  _e(() => {
                    var me;
                    Be(ge, "from", a().spinDirection === "clockwise" ? J() : J() + e(f).pathLength), Be(ge, "to", a().spinDirection === "clockwise" ? J() + e(f).pathLength : J()), Be(ge, "dur", `${(me = e(Z)) != null ? me : ""}s`);
                  }), p(pe, ge);
                };
                G(ie, (pe) => {
                  e(I) && pe(ke);
                });
                var re = O(ie, 1, !0);
                y(ae), _e(() => {
                  Be(ae, "href", `#${ee}`), Be(ae, "startOffset", J()), kt(re, F());
                }), p(ne, ae);
              };
              var Q = w(K);
              Ci(Q, (ne) => te(g, ne), () => e(g));
              var U = O(Q);
              At(U, 21, () => ({ length: e(f).count }), qr, (ne, J, F) => {
                var ae = ub(), ie = ve(ae);
                X(ie, () => F * e(f).slot + e(f).slot / 2, () => a().text);
                var ke = O(ie), re = (pe) => {
                  X(pe, () => F * e(f).slot + e(f).slot, () => e(D));
                };
                G(ke, (pe) => {
                  e(D) && pe(re);
                }), p(ne, ae);
              }), y(U), y(K), _e(() => {
                Be(Q, "id", ee), Be(Q, "d", e(H));
              });
            }
            _e(() => {
              var X, ne;
              return Be(K, "viewBox", `0 0 ${(X = e(x)) != null ? X : ""} ${(ne = e(m)) != null ? ne : ""}`);
            }), p(oe, K);
          };
          G(le, (oe) => {
            e(H) && oe(W);
          }), p(q, se);
        }), p(de, T);
      }, Y = (de) => {
        var T = gb();
        Le(w(T), () => a().text), y(T), p(de, T);
      };
      G(L, (de) => {
        a().repeatText && a().text.trim() ? de(j) : de(Y, !1);
      }), y(P), Ci(P, (de) => te(k, de), () => e(k)), _e(() => {
        var de, T;
        return Ot(P, `${(de = e(o)) != null ? de : ""} ${(T = e(c)) != null ? T : ""}`);
      }), es(P, "clientWidth", (de) => te(x, de)), es(P, "clientHeight", (de) => te(m, de)), p(S, P);
    }, N = (S) => {
      var P = pb(), L = w(P);
      Le(w(L), () => a().text), y(L), y(P), _e(() => {
        var j, Y, de;
        Nt(P, 1, `kaching-bundles__badge-border kaching-bundles__badge-border--${(j = a().position) != null ? j : ""}`), Ot(P, `${(Y = e(o)) != null ? Y : ""} ${(de = e(b)) != null ? de : ""}`);
      }), es(P, "clientWidth", (j) => te(l, j)), es(P, "clientHeight", (j) => te(i, j)), p(S, P);
    };
    return G(ue, (S) => {
      a().position === "all" ? S(z) : S(N, !1);
    }), p(n, E), nt(B);
  }
  Ze(hd, { badge: {} }, [], [], !0);
  var bb = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--custom"><img class="kaching-bundles__bar-most-popular__custom-image"/></div>'), fb = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--fancy"><!></div>'), vb = $('<div class="kaching-bundles__bar-most-popular__content"><!></div>'), _b = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--simple"><!></div>');
  function ba(n, t) {
    tt(t, !0);
    const [r, a] = mt(), s = _(t, "badge", 7), o = _(t, "blockLayout", 7), c = On(), l = d(() => s().badgeType === "custom" ? Ve(c, "$getMediaImageUrl", r)(s().imageGID) : void 0), i = d(() => o() === "vertical"), u = d(() => {
      switch (s().badgeType) {
        case "most-popular":
        case "border":
          return !0;
        case "simple":
          return !!s().text;
        case "custom":
          return !!e(l);
      }
    }), h = d(() => e(i) && e(u)), b = d(() => Fu(s().colors)), g = d(() => s().badgeType === "simple" ? `--badge-text-size: ${s().textSize}px;` : ""), f = d(() => s().badgeType === "most-popular" || s().badgeType === "custom" ? `--badge-size: ${s().size}px;` : "");
    var k = { get badge() {
      return s();
    }, set badge(V) {
      s(V), v();
    }, get blockLayout() {
      return o();
    }, set blockLayout(V) {
      o(V), v();
    } }, x = ze(), m = ve(x), M = (V) => {
      var D = ze(), A = ve(D), H = (I) => {
        hd(I, { get badge() {
          return s();
        } });
      }, ee = (I) => {
        var Z = ze(), B = ve(Z), E = (z) => {
          var N = bb(), S = w(N);
          y(N), _e(() => {
            Ot(N, e(f)), Be(S, "alt", s().text || "Badge"), Be(S, "src", e(l));
          }), p(z, N);
        }, ue = (z) => {
          var N = ze(), S = ve(N), P = (j) => {
            var Y = fb();
            ud(w(Y)), y(Y), _e(() => {
              var de, T;
              return Ot(Y, `${(de = e(b)) != null ? de : ""} ${(T = e(f)) != null ? T : ""}`);
            }), p(j, Y);
          }, L = (j) => {
            var Y = _b();
            lt(w(Y), () => s().text, (de) => {
              var T = vb();
              Le(w(T), () => s().text), y(T), p(de, T);
            }), y(Y), _e(() => {
              var de, T;
              return Ot(Y, `${(de = e(b)) != null ? de : ""} ${(T = e(g)) != null ? T : ""}`);
            }), p(j, Y);
          };
          G(S, (j) => {
            s().badgeType === "most-popular" ? j(P) : j(L, !1);
          }, !0), p(z, N);
        };
        G(B, (z) => {
          s().badgeType === "custom" && e(l) ? z(E) : z(ue, !1);
        }, !0), p(I, Z);
      };
      G(A, (I) => {
        s().badgeType === "border" ? I(H) : I(ee, !1);
      }), p(V, D);
    };
    G(m, (V) => {
      e(h) && V(M);
    }), p(n, x);
    var C = nt(k);
    return a(), C;
  }
  function ai(n, t) {
    tt(t, !0);
    let r = _(t, "element", 7, "label"), a = _(t, "for", 7, void 0), s = _(t, "soldOut", 7, !1), o = _(t, "borderHost", 7), c = _(t, "children", 7);
    var l = { get element() {
      return r();
    }, set element(u = "label") {
      r(u), v();
    }, get for() {
      return a();
    }, set for(u = void 0) {
      a(u), v();
    }, get soldOut() {
      return s();
    }, set soldOut(u = !1) {
      s(u), v();
    }, get borderHost() {
      return o();
    }, set borderHost(u) {
      o(u), v();
    }, get children() {
      return c();
    }, set children(u) {
      c(u), v();
    } }, i = ze();
    return nu(ve(i), r, 0, (u, h) => {
      uu(u, (g, f) => ({ for: a(), class: "kaching-bundles__bar-container", style: "", [Si]: g, [Bi]: f }), [() => ({ "kaching-bundles__bar-container--sold-out": s(), "kaching-bundles__bar-container--badge-border-all": o().positions.has("all"), "kaching-bundles__bar-container--badge-border-top": o().positions.has("top"), "kaching-bundles__bar-container--badge-border-bottom": o().positions.has("bottom"), "kaching-bundles__bar-container--badge-border-left": o().positions.has("left"), "kaching-bundles__bar-container--badge-border-right": o().positions.has("right") }), () => {
        var g, f;
        return { "--badge-border-thickness": `${(g = o().thickness) != null ? g : ""}px`, "--badge-border-gap": `${(f = o().gap) != null ? f : ""}px`, "--badge-border-gap-border": o().gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": o().sideLength ? `${o().sideLength}px` : void 0 };
      }]);
      var b = ze();
      Kl(ve(b), c), p(h, b);
    }), p(n, i), nt(l);
  }
  function _l(n, t, r) {
    return n + t.reduce((a, s) => s.includeInCompareAt ? a + s.fullPrice : a, 0) + r.reduce((a, s) => s.includeInCompareAt ? a + s.fullPrice * s.quantity : a, 0);
  }
  function yo(n, t, r) {
    return n ? t : r;
  }
  Ze(ba, { badge: {}, blockLayout: {} }, [], [], !0), Ze(ai, { element: {}, for: {}, soldOut: {}, borderHost: {}, children: {} }, [], [], !0);
  const kl = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3e%3crect%20width='100'%20height='100'%20fill='transparent'%20/%3e%3c/svg%3e", wo = ({ dealBlock: n, imageSize: t }) => {
    const { fonts: r, colors: a, cornerRadius: s } = n;
    return _n({ "kaching-free-gift-background-color": a.freeGiftBackground && We(a.freeGiftBackground), "kaching-free-gift-text-color": a.freeGiftText && We(a.freeGiftText), "kaching-free-gift-selected-background-color": a.freeGiftSelectedBackground && We(a.freeGiftSelectedBackground), "kaching-free-gift-selected-text-color": a.freeGiftSelectedText && We(a.freeGiftSelectedText), "kaching-free-gift-font-size": r.freeGift && r.freeGift.size + "px", "kaching-free-gift-font-weight": r.freeGift && br(r.freeGift.style), "kaching-free-gift-font-style": r.freeGift && fr(r.freeGift.style), "kaching-free-gift-image-border-radius": (s || 0) / 2 + "px", "kaching-free-gift-image-height": t + "px" });
  }, Po = "data:image/webp;base64,UklGRoQYAABXRUJQVlA4WAoAAAAQAAAAVwEANAEAQUxQSPkFAAABBj/OtslttP9f5fcCagm1hVpF7YEJox4UKGYkeAMMGPfwDLTDZ1D2vIMIqAcB7VRSYECAAaEnwXBEmSwGHlrieL+jrjsiJgAn/5/8f/L/yf8n/w9iMzrDs9DBioEmgInM6NV1BfjS38jnJRbyl/z0anTfwYrRQgD4xYxeVQf15f0b+QwssfjtlYg8ExEHawBoId4gM3pV1dOX8AAqAJ+xRAb89pOcARg5wIrRQmAEM3p1XTXeAzefsVzIX/KTvBoBcIA10ELAMDOj366r1vXl/RuRz1gust9eicgzEXGwBtBCGD7m2avrqv19CcADFT4DS2T4TeQMeCbiYMVAC2FQkHn203XVyb563H8Glgv5S34SORsBcLBioAlAXyMz+q3qm+X9G5HPy4X89dsrkdEziIMVo0WE0IfIPHt1XfXc8mGP6jOwzH4TkTMAz0ScFTG9hORZdl31bo/Ko3rwM4DlT7Z30Cj7XA1D1zPot2o42l5BZ9WA/KlX2JshsdB9YlQOieW/woitwFY0TAjGOgRPdPd1x2BQlEurHcIoeSdS3S8gkMc/uW6hYVG9+wJUB/dr3SkYGEfeB1zlI7Y5undMVVwotvFHuk3cfSsGWoTuMxF2hQgArO5nAFIksUho+KOJvvLAZkz89KDfXxBPAfsJV2FvuAoXbLU2XIULzVW4NFyFc7bKHVdBiKvygKtwSVyVB1wF0W3iWCEft8mIFXCpW8TxQj5ukREvAKY9HDPk5y1ywwvILVfhnK1yx1bnxFTIHVfhnLgqD7gKl5qr8oCrcKm5Kp9wFXLDVZiwVW7ZatI8yxTIXeMcW6SNs1yB3HEVzomr8glX4ZK4Kh9zFS51sz4zRj7mKuSGqzBhK5gGGd7IJw2yvIFcmmOYA+dslVuuwuT/DpgRVyFgK6GmLNnDB1yFOTVDM4gPmmEYBHNqhOYQBGw1I67yAVdhRlzlHVdhTlyFoAELJpkRV3nHVmOuwpy4aq3rRnxi/mfOX/+rBa8YShsrIvxkL+ayB1Bxk5N9te+Ocgggc/UwUlade7fveX7vahFUHS37XuNxHPiUaiEddX/fXwC/PwrmfQeQ/gL4fgdIf4FHv+vp7OMPt+Ye+IPN2efwa80+nq0O/t8VHFsFPEN1cBzjJ4qB/EE+GX7araeJjLXioAeL3WqWxlHgrBZSdeWPTRqFzhqCqjt7+Ilq6r/vjP/tyjZGhtaVZClqtTaNodndsCnkkassTaLQWUNKv6vThWquWVflQClkt1pMkyiIEDhrNKlHKa7Rftwg6OSuHBjFbiVZEofOGk1QhwzrZJsEuFlV9r/i3ipDmkShs5rUUeVdbfwFNQsUbe76WyGyw9UUSRQ4azSpWka12Qeq8Ta962HFDqssjSV01mhStZZ3dZnr5oHGm7JH3V5lSKPQWaNJNTOsiR+rVjRJiV5TiOBWFtNEIgerSTWb4nrMqR0AN7vrJ4XsbldZLFHgjBZS7Sjv6rB3qjV1dFf2i1tZZWkSwllNUC0r747nJ6pN7awqu68Abq8W0yQKnDWaFEi1ssTH8hfUKqBgXXbdpyh01mhS7e/eHWemVdvai7su2i7eASh2K0mM6k7t4sWBygozo1o4WHdN7GC1IJHQGa06lmwYv/uhsgJSrVpZkrJTNkZ1vLZh/G57+wRgFajWdvNyQN0nG8bZpqgAwSzSqsUpKrvjk/SB+2TD8QShJdXyJu2MGfWF7qRgXXbDRA1vnZZd4MMBBrh1F9hBBh0dbSu3QCGyQ2M+6WEG2OmBtrKYJnHorAkTiQEri4b4RA12CrZPk8U0iQIHo0n9YNQQuOEGmHh7K1cyjSV01mhSB7bbZmQ05EDWQTRBHTlpxlgxqN02YaM5BHETJopF9aJ+K80jsNu6+UBxaVi3lNgE43ptjGLUoFZOsapd1GesmFXH25pEil9tXItIsaybHq0YK6YltzhKsQkU3+rw6nBFahTr6ujqMMVqTIp7TXT1Y8Uq0oqDTZTtnrLbTENRXCw2SJHdTyfOKGYmLUZInfx/8v/J/yf/n/xfUwBWUDggZBIAABBuAJ0BKlgBNQE+kUSdS6WjoyKjsKo4sBIJY27PfD3SSyKUjHn6I/9g+wnp1XR9XeHo4f/o+c8+z/svWv5h/PG/dj1H/tl6znpI/wG+5eif50XrR/4/0x7lbtfWHf5TxH7Mfb7NRhu8olZENf8uT5T92PZPIW8X7T682rzd4lnfXm1ebvEs7682rzd4lnfXm1ebvEs7682cCffkKj/0t06JEArP+RShHR4v2n15tXgarCFNF1ibE7/5+j/5Eo0NQ71kF8hWki+N0nFn4jermljPNs27mUeI5uTXaZCzZcqM9AZ31VHNeqhmXSx23Z8dlZD8ZLgOnx2CihtqzmhwsRfw/eimox4+fV6eEJSdr6tkyKOTLOnvmStQTaPNLcVmD06I09Zy8EdqnfHY/1ThdMVchaQQV9Czk/i57RyGMsSMid4Y5ZOoPpStMmO8jZqSCSIW4/wUhOsJe0AZ6WDNd9x5zXViysoni6q6+atjpl5A4ZI62UyqCiLbYjoKnTB7xff5zuxt3G0QiDSsrujnM51e8UgSobndmKsG7c87GZH5co4+UWdNOodvlgpKvlr7hqlF1cRHNor9k7pt9pIiAEYeVwoSNvwFplyxFu65+r+nXIwUbLR8xF9LPeZ2oTVkeqIkflO/9CzgZ7RhB6LLduY5ORVBLovgTZu3/QSKkDFShUs2FVKnB9lmICdwUzmUNmRSe0Ga6FsxyfdT/gQrVJY2mpe+QnRjhSbGOZcUpMsoVwsFkw3byx7SAunIxFL1TxePhC6fUfxCcdqHww8KiOjXdEXZJcLI7GUTe0nviV7Z/qFPWXNlIDS/JIszeV7nM8HpdPmdLEDK+MYaGUEL/wZsFblu2q1mU0SC8gaf+iYsqqUR2ld74gez3le4VQSRtOB9B/YLTsZfqcOjzW3/m6EHXNHKBFFsVFTpZmn4qMgVjJwf9P8cnItR6Fq7fOAslEO4e30AHZzsht3FP8GTJU1rAoYDv8k41Bg3f/c3i4TQIPpSjW5RcJV8JNBN1eawaXo9ZbN31YZSVQw8Ops/2bVbq9/s1Q1s9PunHUU+2ut0DDvCY/6iQ+2YthZQQ1GyDGUCpfQ3eJaANqy/p8rAbnON/3LplJEi/afXm1ebqaKUavN3iWd9ebV5u8SzvrzavN3iWd9ebV5u8SzvrzavN3iWd9ebV5u8LgAA/vvbO+3sHnP/IdkpDnbh3TvfXYAB5WzWlLuMAAKgIwAABAsU14K4XnDjt+rrb+D2R0m2FHkZuG6rmV+6YFzI/Ls2EEst1oHCIDkSkVmJwdSN9EIhanLXNhfekK1Iqx1IvcdGU5Q6TPJ89BkFWsH4P6w+AEaw8K0furvg3C+MmCPSi39Pk9u+gxEye7RHQx3e7sJBZSlSVpmGjma6gAJaYWfuB78fJroBwKlaJ0mMNd4azeh/Wa3EotpAl4KB176JCBofnI39MAuoo85WpbZ9xjxDQYsob4zBW0Iz7pbo/HiIkhee6DRpkJIr6wM5Ky5hmYHwSSvj+7kH1iIOCj6tAbabEAQCNQeVRTORaxyDAr7/GtCLaDWcs/7oXWIweUfirzVQ7ThYMPR9h8IVWCJYs5dn/dfu56GMoeSVL3vuDT8eOkQLrvbk7h5UKTxL57kgt6N+KFtV/n39fyoZGVhshZgWcPcsGXFGajPTSTOUlsZ/vewlCzkR+ALaPvm4/+MGM7HT0B28wt+z1iFe68rT2C3wDvd2pkd4kwT1ZXXhgCaP8IHGlcRLWtK0/KEVZ1ugqmbOqoEiTwSRYuEmJ28JT53qpD9rvw4bWSCRVmp6vS1i+OAvuw7ChW+RkrYvU/D24QzjPCHYio+CkhfgXvVO46aZf7HZ/APLJHJJzVT1j4OLgCKZ/+Ak1e0EKDPh4rTJsaT3s8WtTy5XH+4Ar6xg6I3WtxR+uRF26LUw4qh9rDq9Tp7vxD5TzVPNkmLExWNGgR6eVQ2GooMqhjhD639FbbGvPBA3ybzgr7n5Ci9s6Wz++LCWHCwK1Z6DT19WpGRfIsCWCkYCRTKxUtMZSIT8ucXjOXLVCOftRCEKFT4b6uZ65Ag8l6ZwGA9vBgVH4yjz3rhaTMXAVN8ZtMN+Peal4ByXEaarmBZHcjINdGAHfq/Oon/WJPDl1La0sZ/z7NnwnicGzYjOu/+E9PY1uiQDBcmka2MieoJp36IbjfvQLURbGUMf1OX6zyYoVSC8wZfYlktDUkqM9WhYE1c4nOaHYtnrCuOiEPng8J2pRFr5NeR4lIsiH6Z4wQDzOZbpOftV8uUhurbz6TTohG7rdsM3Jkpsl7NlcnTwTwO/wnsAVgCAexRRUegE8kK7ZBn9DYsKHGisummSWwi9LxZqPCQbjrkXNuWFu1L7NvVwRU/SFadxboS/0qrszn85S44QntIQB/YirAkqb9zp8cndyKm1JSLqd+B0ytCADHpsJ5tIRIRlqWiK5Z3mRpnoZ41mgopa3mx70p3vl/4dB9U/HbNxwGMVZwzqOJ1gtobOcYv4N4GE/9/PioYppduKcYUonHSe4/3qQSrq/d8AMj5fRlAEPwNdWGsNJAtAr1IMC662V61JfHP8ENdFsTmbbcZ6QaXRBgGH3IZfWJHt4aQK/pLXOPF01GqrLm+KfuiYRg9SdihgVqnSnWiOz5QJcoQdFYrwvdJTA3IDamLNiUdka/z2iBOCQPtqrUEsiyPhVyMRGkBWUEXUS8aojpuiFrHqEeODgQNvYmA4SrXVoiOOIDOC57cNsP1/N9GN0jE8bIPAwth4nEv26clftxesbpcO5CbbOPhk+4teaVMLwqEMkQ9YcYDhAn1UQm/P3PukbCh6OquvhSA8q9YvD80J2p4qMfqHujubJy+pt0+o+mrxgsrcdHWv4sSkPBRdjMUrDPZLvblU1bnNHivzRvFcaJLGb6GIGfB6O/ZKp1jWBT6xmKAeZWVJ8oOesDrGaYK0ecPFQz1Kuy5kORX5BCtS2qmcP0EA33Ytva164kYbJLPQqbkznx1MLByN1pC1Ik6afVhXF4Md0RY17gT2UjnSVYPmF/zPGsMRWvrtiSQRKgwUoxqgtEcfS49Laz2JMIExQJFfV3WrYgNICYlRLAYmV9ubjRL8xrrPJOxg49X/PpZMbndQYIsESJm+IzeXnBMrbIsdeaxHjknEDGyHgeDWKezmv60AaqcaQzwPQfmnJvj9esFQK1oEZOAhVQaNG82I3acJJ+sM/lNmSPy/iKzYyMHrpWAtqMiD/VbxffYGWdktLKJ6DnzcchVzvgkPeJ/AEYySCs/AJwxoZMCEcYNAyPbSOeIhrSZ7oiwkixKsfLQ+uMIecj3dpwHtZBxKdw3H1agydVHgrcDu2Q1YIvCW0l+YCBgLgVvKCQiJZrmECgugPITyU+7JPijpmGi92sUJDZaFi8AXbjw0XOTvpGBzk6SOQWbZRs0FTUb1nAizq0zZPFxm8JaADC02BSHVQUCf4x6YZrJ5DIRFyxt9Jv0pVBaCRRKAOO3/X/UVpzCGUfhHdRWh93s5eWczTMyYN1GHakkA3lEvMckdz9VSeaYVHWgbgR/SsKqHaFBCMqYnbGNHYulIdrf/P7sy9/cTd8B+MlqRCwfCgJvjATta1MfBNGzKLERRjPb2v9em/Re5JPZCtt6Yyn8Vql2CdRL+7z8oYczxwxTA3/QfjLD78pZ6RpVkzBIHLkMQf93Il10CGh5IawlF+d1dkgebUndWPL12ydwc0PVR3b0c0e8OlgN2vakaDpQEKqKPiIukcoIpAlgclG5W5zjdiPbIbF0uWeULQsvMvI9c5T6P9sRjv+FZz51d19aWCdbLU/fCFJ53MbT0+42wMhRj23n/iD+LlPYOSgdtfo9WiiRfl2Mt//MJzOsz8sFwteelxQEjbCqNE0JmRx+KBefHBDl8C78WHTaIIzN5gmbehbTat1ShJBF5hxBrYRIh2z4mEop3uaCco1qsvq44TnxUsBnbY1n8ApxtHL+I927cLgdz4OLFqdmFjrJQrQi6drim9ZhKNKblZRY6Nm6Xxw8AG31CjKw5Usm7EwX3dSh1ZsqmnI5qEjffuCX44g/SOzQqJVR7Fdb8JeHLF12m738y3FF8Mzs16Oc/2LwNUHONGYkVtr+DKAaGl5Hj/eNrGgDwmZkDKFiMx6NDt1/fJ5DJujHYvfqnc306fF1hqAKGhRaX6mkQAFTvdvjKAE6D2qcOgzuA8OW9wA45u64gX+kFxY0AS6eqgGGChj5Z/p1Hbf5M9a/gKoaZ7B+Tcnn9Qe9zU00N7zH8lyWGJ2TkauTtQK1NiJyMXrdamQmMdapyOTWCQuByf81ArLtC/bleHgTwNM7WM3WcgxuY0K+tM/GlMB3o4c6KXobq+gT4beks4Z0bY30MI8bvJO+Oxwdaw3i25dbrmfZF24MJSjUBqBgpoCPEKbOE1B0kKa0DivLYosxKI+LGXKRTQfmdgrSTks4ug6urIa/bOM7wPLDJGRj0VqBthQyVN68yQX1AJQMB25WapBsPo/4lBu682ATODwomExed5azFmo1uS1oR8yjjVguvGk0aXC8rbqCnjsujXvMr17GDqUjHgKsOJdqUSlNjxu2YRrqyCQqeDKyGUDulKhhtJLO/4E34Re0lA8JnM1OWPAEB4UWa3wXhCn7tYRx/NdlCvHEXRgHuU1x9vbx8wJIw9x9YMaMqgUz6XhCa9CHfb8w6Zw2YtPEVQ9evaBn1Z9D6FOmIHGya7+VzN5NHL4+s6mM/hIagdT2DfDbr34+S/pRYO0OTY2kNLBk7H0A60bCCr+dUfc3D4aiAWmcyJy06sV91x0NyHNPAl1cPP9yMhUpsXuSRb8G+rZqQPmfsDeGv8OazizGLy6WH/kvfkOHUSaX/OhgunoJ9VeEOXibNKy82aKQbeO0Ha7UVsW4XgQgLdDlwVIalDeTNcwE6nmQ9txE1hmG+EiJvFI4qtHDI9DsVu9oD7B+cGL3mjjXVHfSwugESEFWLTK5H6wNsIpftM4OHEYWyaeUeZ7JJE1eDJQ9Zf+5vZtZh3myMRpA2qFbL0Z1XGffNF+rkMit+fjRpAjeYiJtbPXt1caN1R1abhCgztNuwREE8wupCjEm+NE+bKPiOqlykwKJ3P/3sgKhNseT14hUvrpWzccNtRuPDNOunCTAmbmLE7WagpIdGYD1/+3+5jJokGgYMTKPDtGcyL2UcCJbWhsr29Eb7GipPp2p1cQ+vehDwOEv3Zy1JrpGaND/5dRLHQTBHj6cgEpGQusdOTAdDDuz3bIG0bjvrZlGPLGuLFq+K3yADMtsjQQcuZzrWixor2wnfJtn15LHqkqakk4OIH4/MIXBGBWj9Ew3Y10HyG9ozFVfGMMh335PDmgh/DSu4AxehAoAqANVIJksDFYdub1wWo8yYh9Bj1+NUJynOVXk1qJZ8+B0QUVbJwcTOnM/fCsUt191Vky7IpF3Ar+L7eVM3PjlEJmI9gteoSeJw1gQCSMn/vaR0rn0ffVV6ozTkXntDBDGW52GLCy/g/BPvfHCJ+mj59BncgboXK3Fld7/4HRTyIAexwL2dRVvPHlg99XnjymrE4zUzJo+KycEBb83WPH/fOR5kEC3NqBEAmTeVYw8LJ+ocQMM2lE8kDjcyA12K+DfSgIhetLBZ/x7e4hD9A4gQgdFg8Ooa3bg/sPXFSwRjyiDQM/CZXMUaKtADyJ4CAx3/pYYzgOk2cLMZz5FMWFjbA/Q1LtDuQH7DkigDvOhb4Fmu7+H2b5J+4EKM8Yq+n06V/1tcpC4eeFk9xnMQluO1WqGwpuaoJCMP6qbU+yD7yNgJf9w5qrzxpGutPV9IhfsC4fqgGPBE3L7RVEgzeANeYJVlr36U8sZvtXG4PB4Hja+RPLUAO+eRxzRZy42p9LU83OprZBeO7230dieMH5Zoi0kR9fsCoTSMaa2nRhSiCb2tdJ4Z1lzYagv4odW8u2KOdSTmmMx6fuTxSqnpbix/IM1tyQ87iEvmLgKbKxxoq7jMWMGVKnT3/sYDe1Gh7sGkfO8X+SU8A6uPjQ5O60Qodizt/a/N+H663+1H+KNqX9JG3V8a4DIr7ksqFOrG4vcwrmMfGNKzZEqY3YdfhK186TnkB4qAAAAAAAAUL6grl/NBh0xCf2j3r4dOzXRh7I2aCCSe5vWpAob7xObCtSNwZb2vrH2mGahZz5v19m0OpjZMD/eZuwAQT9lzRvhNLg3peoff6JaWOXAZuxTigRvsWkffJzmaqRu1XRn2I5Q8LDKQ102v7qO1JV8AAAAAAAAAAAAAAAAAAAA=", pd = ({ freeGift: n, product: t, variantImage: r, getMediaImageUrl: a }) => n.mediaImageGID ? a(n.mediaImageGID) : n.giftType === "shipping" ? Po : r || (t == null ? void 0 : t.image), So = (n, t, r) => {
    var a, s;
    const o = (s = (a = t.variantGIDs) == null ? void 0 : a.map(Kt)) != null ? s : null;
    return n.variants.filter((c) => (r || c.availableForSale) && (!o || o.includes(c.id)));
  };
  var kb = $('<img alt="" class="kaching-bundles__free-gift__image"/>'), mb = $('<div class="kaching-bundles__free-gift__image"></div>'), xb = $('<span class="kaching-bundles__free-gift__text"><!></span>'), yb = $('<div class="kaching-bundles__free-gift__full-price"><!></div>'), wb = $('<div><div class="kaching-bundles__free-gift__main"><!> <div class="kaching-bundles__free-gift__content"><!> <!></div></div> <!></div>');
  function bd(n, t) {
    tt(t, !0);
    const r = () => Ve(k, "$config", s), a = () => Ve(m, "$formatPrice", s), [s, o] = mt();
    let c = _(t, "dealBlock", 7), l = _(t, "freeGift", 7), i = _(t, "product", 7), u = _(t, "dealBarSelected", 7, !1), h = _(t, "collapsed", 7, !1), b = _(t, "sets", 7), g = _(t, "mainProductVariantId", 7), f = _(t, "onChange", 7);
    const k = mn(), x = zt(), m = pn(), M = On(), C = d(() => {
      if (i()) return { ...i(), variants: So(i(), l(), r().preview) };
    });
    let V = Ge(void 0);
    const D = d(() => (function(T, q) {
      if (T !== void 0) return T;
      if (q != null && q.availableForSale && q.variants.length > 0) return q.variants[0].id;
    })(e(V), e(C))), A = d(() => e(C) && e(D) ? e(C).variants.find((T) => T.id === e(D)) : void 0), H = d(() => {
      var T;
      return pd({ freeGift: l(), product: i(), variantImage: (T = e(A)) == null ? void 0 : T.image, getMediaImageUrl: Ve(M, "$getMediaImageUrl", s) });
    }), ee = d(() => l().quantity * b()), I = d(() => (function(T, q) {
      if (!q) return 0;
      let se = q.price;
      return q.compareAtPrice && T.useProductCompareAtPrice && (se = Math.max(se, q.compareAtPrice)), se * e(ee);
    })(c(), e(A))), Z = d(() => wo({ dealBlock: c(), imageSize: l().imageSize })), B = d(() => bn({ priceFormatter: a(), product: i(), totalFullPrice: e(I), totalDiscountedPrice: 0, quantity: e(ee), unitQuantity: e(A) ? Sr([{ variant: e(A), quantity: e(ee) }]) : null })), E = d(() => l() ? e(B)(Ve(x, "$translate", s)(l().text)) : ""), ue = d(() => {
      var T;
      if ((T = i()) != null && T.url) return e(D) ? `${i().url}?variant=${e(D)}` : i().url;
    });
    function z(T) {
      te(V, T, !0);
    }
    let N;
    dr(() => {
      l().productGID, te(V, void 0), N = void 0;
    }), dr(() => {
      if (c().disableVariantOptionSync || !g() || !e(C) || g() === N) return;
      const T = N;
      N = g(), e(C).variants.some((q) => q.id === g()) && (e(V) !== void 0 && e(V) !== T || te(V, g(), !0));
    }), Ye(() => {
      var T;
      e(A) && ((T = i()) != null && T.availableForSale) && e(ee) && en(() => {
        f()({ variant: e(A), product: i(), fullPrice: e(I) });
      });
    });
    const S = d(() => !(!i() || i().availableForSale && So(i(), l(), !1).length !== 0));
    var P = { get dealBlock() {
      return c();
    }, set dealBlock(T) {
      c(T), v();
    }, get freeGift() {
      return l();
    }, set freeGift(T) {
      l(T), v();
    }, get product() {
      return i();
    }, set product(T) {
      i(T), v();
    }, get dealBarSelected() {
      return u();
    }, set dealBarSelected(T = !1) {
      u(T), v();
    }, get collapsed() {
      return h();
    }, set collapsed(T = !1) {
      h(T), v();
    }, get sets() {
      return b();
    }, set sets(T) {
      b(T), v();
    }, get mainProductVariantId() {
      return g();
    }, set mainProductVariantId(T) {
      g(T), v();
    }, get onChange() {
      return f();
    }, set onChange(T) {
      f(T), v();
    } }, L = ze(), j = ve(L), Y = (T) => {
      var q = wb();
      let se;
      var le = w(q), W = w(le);
      {
        let F = d(() => u() ? e(ue) : void 0);
        nr(W, { get url() {
          return e(F);
        }, class: "kaching-bundles__free-gift__link", children: (ae, ie) => {
          var ke = ze(), re = ve(ke), pe = (me) => {
            var ce = kb();
            _e(() => {
              Be(ce, "src", e(H)), Be(ce, "height", l().imageSize || 0);
            }), p(me, ce);
          }, ge = (me) => {
            var ce = mb();
            let fe;
            _e((Fe) => fe = Ot(ce, "", fe, Fe), [() => {
              var Fe, $e;
              return { height: `${(Fe = l().imageSize || 0) != null ? Fe : ""}px`, width: `${($e = (i() || l().mediaImageGID) && l().imageSize || 0) != null ? $e : ""}px` };
            }]), p(me, ce);
          };
          G(re, (me) => {
            e(H) ? me(pe) : me(ge, !1);
          }), p(ae, ke);
        }, $$slots: { default: !0 } });
      }
      var oe = O(W, 2), K = w(oe), Q = (F) => {
        var ae = ze();
        lt(ve(ae), () => e(E), (ie) => {
          var ke = xb();
          Le(w(ke), () => e(E)), y(ke), p(ie, ke);
        }), p(F, ae);
      };
      G(K, (F) => {
        e(E) && F(Q);
      });
      var U = O(K, 2), X = (F) => {
        Hn(F, { get product() {
          return e(C);
        }, get selectedVariantId() {
          return e(D);
        }, onChange: z });
      };
      G(U, (F) => {
        u() && e(C) && e(C).variants.length > 1 && e(D) && F(X);
      }), y(oe), y(le);
      var ne = O(le, 2), J = (F) => {
        var ae = ze();
        lt(ve(ae), () => e(I), (ie) => {
          var ke = yb();
          Le(w(ke), () => a()(e(I))), y(ke), p(ie, ke);
        }), p(F, ae);
      };
      G(ne, (F) => {
        l().showPrice && e(I) > 0 && F(J);
      }), y(q), _e((F) => {
        se = Nt(q, 1, "kaching-bundles__free-gift", null, se, F), Be(q, "data-free-gift-id", l().id), Ot(q, e(Z));
      }, [() => ({ "kaching-bundles__free-gift--out-of-stock": r().preview && e(S) })]), p(T, q);
    };
    G(j, (T) => {
      !h() && (!l().productGID || e(A) || r().preview && e(S)) && T(Y);
    }), p(n, L);
    var de = nt(P);
    return o(), de;
  }
  Ze(bd, { dealBlock: {}, freeGift: {}, product: {}, dealBarSelected: {}, collapsed: {}, sets: {}, mainProductVariantId: {}, onChange: {} }, [], [], !0);
  var Pb = $('<img alt=""/>'), Sb = $('<div class="kaching-bundles__free-gift-summary__images"></div>'), Bb = $('<span class="kaching-bundles__free-gift__text"><!></span>'), Cb = $('<div class="kaching-bundles__free-gift kaching-bundles__free-gift-summary"><!> <!></div>');
  function fd(n, t) {
    tt(t, !0);
    const [r, a] = mt();
    let s = _(t, "dealBlock", 7), o = _(t, "images", 7), c = _(t, "count", 7), l = _(t, "title", 7), i = _(t, "imageSize", 7);
    const u = zt(), h = pn(), b = d(() => bn({ priceFormatter: Ve(h, "$formatPrice", r), product: void 0, totalFullPrice: 0, totalDiscountedPrice: 0, quantity: 1, unitQuantity: null, freeGiftsCount: c() })(Ve(u, "$translate", r)(l()))), g = d(() => wo({ dealBlock: s(), imageSize: i() }));
    var f = { get dealBlock() {
      return s();
    }, set dealBlock(D) {
      s(D), v();
    }, get images() {
      return o();
    }, set images(D) {
      o(D), v();
    }, get count() {
      return c();
    }, set count(D) {
      c(D), v();
    }, get title() {
      return l();
    }, set title(D) {
      l(D), v();
    }, get imageSize() {
      return i();
    }, set imageSize(D) {
      i(D), v();
    } }, k = Cb(), x = w(k), m = (D) => {
      var A = Sb();
      At(A, 21, o, qr, (H, ee) => {
        var I = Pb();
        let Z;
        _e((B) => {
          Be(I, "src", e(ee).source), Be(I, "height", i() || 0), Z = Nt(I, 1, "kaching-bundles__free-gift-summary__image", null, Z, B);
        }, [() => ({ "kaching-bundles__free-gift-summary__image--no-border": !e(ee).bordered })]), p(H, I);
      }), y(A), p(D, A);
    };
    G(x, (D) => {
      o().length && D(m);
    });
    var M = O(x, 2), C = (D) => {
      var A = ze();
      lt(ve(A), () => e(b), (H) => {
        var ee = Bb();
        Le(w(ee), () => e(b)), y(ee), p(H, ee);
      }), p(D, A);
    };
    G(M, (D) => {
      e(b) && D(C);
    }), y(k), _e(() => Ot(k, e(g))), p(n, k);
    var V = nt(f);
    return a(), V;
  }
  Ze(fd, { dealBlock: {}, images: {}, count: {}, title: {}, imageSize: {} }, [], [], !0);
  var Ib = $('<div class="kaching-bundles__free-gift__divider"></div>'), Mb = $("<!> <!>", 1), zb = $("<!> <!>", 1);
  function Vi(n, t) {
    tt(t, !0);
    const r = () => Ve(k, "$config", a), [a, s] = mt();
    let o = _(t, "dealBlock", 7), c = _(t, "freeGifts", 7), l = _(t, "otherProducts", 7), i = _(t, "dealBarSelected", 7), u = _(t, "freeGiftsSummary", 7), h = _(t, "sellingPlan", 7), b = _(t, "sets", 7, 1), g = _(t, "mainProductVariantId", 7), f = _(t, "onChange", 7);
    const k = mn(), x = On();
    let m = Ge(gt({})), M = d(() => c().filter((E) => !E.applyOnlyForSubscriptions || h()));
    const C = d(() => e(M).flatMap((E) => {
      const ue = E.productGID ? l().find((N) => N.id === Kt(E.productGID)) : void 0;
      if (!r().preview && E.productGID && !(ue != null && ue.availableForSale)) return [];
      const z = ue && !r().preview ? Pr(ue) : ue;
      return { freeGift: E, product: z };
    })), V = d(() => {
      var E, ue;
      return (ue = (E = u()) == null ? void 0 : E.enabled) != null && ue;
    }), D = d(() => !i() && e(V) && e(C).length >= 2), A = d(() => {
      var E, ue;
      return (ue = (E = u()) == null ? void 0 : E.showImages) != null && ue ? e(C).flatMap(({ freeGift: z, product: N }) => {
        const S = ((L, j, { preview: Y, mainProductVariantId: de, disableVariantOptionSync: T }) => {
          if (!L) return;
          const q = So(L, j, Y);
          if (q.length !== 0) {
            if (!T && de) {
              const se = q.find((le) => le.id === de);
              if (se) return se;
            }
            return q[0];
          }
        })(N, z, { preview: r().preview, mainProductVariantId: g(), disableVariantOptionSync: o().disableVariantOptionSync }), P = pd({ freeGift: z, product: N, variantImage: S == null ? void 0 : S.image, getMediaImageUrl: Ve(x, "$getMediaImageUrl", a) });
        return P ? [{ source: P, bordered: z.giftType !== "shipping" }] : [];
      }) : [];
    });
    Ye(() => {
      (function(E, ue) {
        if (!c().length) return;
        const z = E.filter((N) => N.id in ue).map((N) => ({ id: N.id, variant: ue[N.id].variant, product: ue[N.id].product, quantity: N.quantity * b(), fullPrice: ue[N.id].fullPrice, showPrice: N.showPrice, includeInCompareAt: N.includeInCompareAt === !0, applyOnlyForSubscriptions: N.applyOnlyForSubscriptions }));
        f()(z);
      })(e(M), e(m));
    });
    var H = { get dealBlock() {
      return o();
    }, set dealBlock(E) {
      o(E), v();
    }, get freeGifts() {
      return c();
    }, set freeGifts(E) {
      c(E), v();
    }, get otherProducts() {
      return l();
    }, set otherProducts(E) {
      l(E), v();
    }, get dealBarSelected() {
      return i();
    }, set dealBarSelected(E) {
      i(E), v();
    }, get freeGiftsSummary() {
      return u();
    }, set freeGiftsSummary(E) {
      u(E), v();
    }, get sellingPlan() {
      return h();
    }, set sellingPlan(E) {
      h(E), v();
    }, get sets() {
      return b();
    }, set sets(E = 1) {
      b(E), v();
    }, get mainProductVariantId() {
      return g();
    }, set mainProductVariantId(E) {
      g(E), v();
    }, get onChange() {
      return f();
    }, set onChange(E) {
      f(E), v();
    } }, ee = zb(), I = ve(ee), Z = (E) => {
      {
        let ue = d(() => {
          var N, S;
          return (S = (N = u()) == null ? void 0 : N.title) != null ? S : "";
        }), z = d(() => {
          var N, S;
          return (S = (N = e(C)[0]) == null ? void 0 : N.freeGift.imageSize) != null ? S : 30;
        });
        fd(E, { get dealBlock() {
          return o();
        }, get images() {
          return e(A);
        }, get count() {
          return e(C).length;
        }, get title() {
          return e(ue);
        }, get imageSize() {
          return e(z);
        } });
      }
    };
    G(I, (E) => {
      e(D) && E(Z);
    }), At(O(I, 2), 19, () => e(C), ({ freeGift: E, product: ue }) => E.id, (E, ue, z) => {
      let N = () => e(ue).freeGift;
      var S = Mb(), P = ve(S);
      bd(P, { get dealBlock() {
        return o();
      }, get freeGift() {
        return N();
      }, get product() {
        return e(ue).product;
      }, get dealBarSelected() {
        return i();
      }, get collapsed() {
        return e(D);
      }, get sets() {
        return b();
      }, get mainProductVariantId() {
        return g();
      }, onChange: (Y) => (function(de, T) {
        T.variant ? e(m)[de] = T : delete e(m)[de];
      })(N().id, Y) });
      var L = O(P, 2), j = (Y) => {
        p(Y, Ib());
      };
      G(L, (Y) => {
        !e(D) && e(z) < e(C).length - 1 && Y(j);
      }), p(E, S);
    }), p(n, ee);
    var B = nt(H);
    return s(), B;
  }
  function vd(n, t = "body") {
    let r;
    async function a(s) {
      if (typeof (t = s) == "string") {
        if (r = document.querySelector(t), r === null && (await Ws(), r = document.querySelector(t)), r === null) throw new Error(`No element found matching css selector: "${t}"`);
      } else {
        if (!(t instanceof HTMLElement)) throw new TypeError(`Unknown portal target type: ${t === null ? "null" : typeof t}. Allowed types: string (CSS selector) or HTMLElement.`);
        r = t;
      }
      r.appendChild(n), n.hidden = !1;
    }
    return a(t), { update: a, destroy: function() {
      n.parentNode && n.parentNode.removeChild(n);
    } };
  }
  Ze(Vi, { dealBlock: {}, freeGifts: {}, otherProducts: {}, dealBarSelected: {}, freeGiftsSummary: {}, sellingPlan: {}, sets: {}, mainProductVariantId: {}, onChange: {} }, [], [], !0);
  var $b = $('<div hidden=""><!></div>');
  function ml(n, t) {
    tt(t, !1);
    let r = _(t, "target", 12, "body");
    var a = { get target() {
      return r();
    }, set target(o) {
      r(o), v();
    } };
    (function(o = !1) {
      const c = hn, l = c.l.u;
      if (!l) return;
      let i = () => Hc(c.s);
      if (o) {
        let u = 0, h = {};
        const b = nl(() => {
          let g = !1;
          const f = c.s;
          for (const k in f) f[k] !== h[k] && (h[k] = f[k], g = !0);
          return g && u++, u;
        });
        i = () => e(b);
      }
      l.b.length && dr(() => {
        pu(c, i), Ll(l.b);
      }), Ye(() => {
        const u = en(() => l.m.map(zg));
        return () => {
          for (const h of u) typeof h == "function" && h();
        };
      }), l.a.length && Ye(() => {
        pu(c, i), Ll(l.a);
      });
    })();
    var s = $b();
    return eu(w(s), t, "default", {}), y(s), Xs(s, (o, c) => vd == null ? void 0 : vd(o, c), r), p(n, s), nt(a);
  }
  Ze(ml, { target: {} }, ["default"], [], !0);
  var _d = !1;
  const kd = class extends Date {
    constructor(...n) {
      super(...n), yt(this, zs), yt(this, Hi, Ge(super.getTime())), yt(this, Dl, /* @__PURE__ */ new Map()), yt(this, Ms, Et), _d || gn(this, zs, Yo).call(this);
    }
  };
  Hi = /* @__PURE__ */ new WeakMap(), Dl = /* @__PURE__ */ new WeakMap(), Ms = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ new WeakSet(), Yo = function() {
    _d = !0;
    var n = kd.prototype, t = Date.prototype, r = Object.getOwnPropertyNames(t);
    for (const a of r) (a.startsWith("get") || a.startsWith("to") || a === "valueOf") && (n[a] = function(...s) {
      if (s.length > 0) return e(Se(this, Hi)), t[a].apply(this, s);
      var o = Se(this, Dl).get(a);
      if (o === void 0) {
        const c = Et;
        Wn(Se(this, Ms)), o = d(() => (e(Se(this, Hi)), t[a].apply(this, s))), Se(this, Dl).set(a, o), Wn(c);
      }
      return e(o);
    }), a.startsWith("set") && (n[a] = function(...s) {
      var o = t[a].apply(this, s);
      return te(Se(this, Hi), t.getTime.call(this)), o;
    });
  };
  let Bo = kd;
  var Db = ["forEach", "isDisjointFrom", "isSubsetOf", "isSupersetOf"], Tb = ["difference", "intersection", "symmetricDifference", "union"], md = !1;
  const Co = class extends Set {
    constructor(n) {
      if (super(), yt(this, Tl), yt(this, Zi, /* @__PURE__ */ new Map()), yt(this, Nr, Ge(0)), yt(this, ja, Ge(0)), yt(this, $s, Ar || -1), n) {
        for (var t of n) super.add(t);
        Se(this, ja).v = super.size;
      }
      md || gn(this, Tl, Xo).call(this);
    }
    has(n) {
      var t = super.has(n), r = Se(this, Zi), a = r.get(n);
      if (a === void 0) {
        if (!t) return e(Se(this, Nr)), !1;
        a = gn(this, Tl, Ko).call(this, !0), r.set(n, a);
      }
      return e(a), t;
    }
    add(n) {
      return super.has(n) || (super.add(n), te(Se(this, ja), super.size), ur(Se(this, Nr))), this;
    }
    delete(n) {
      var t = super.delete(n), r = Se(this, Zi), a = r.get(n);
      return a !== void 0 && (r.delete(n), te(a, !1)), t && (te(Se(this, ja), super.size), ur(Se(this, Nr))), t;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var n = Se(this, Zi);
        for (var t of n.values()) te(t, !1);
        n.clear(), te(Se(this, ja), 0), ur(Se(this, Nr));
      }
    }
    keys() {
      return this.values();
    }
    values() {
      return e(Se(this, Nr)), super.values();
    }
    entries() {
      return e(Se(this, Nr)), super.entries();
    }
    [Symbol.iterator]() {
      return this.keys();
    }
    get size() {
      return e(Se(this, ja));
    }
  };
  Zi = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), ja = /* @__PURE__ */ new WeakMap(), $s = /* @__PURE__ */ new WeakMap(), Tl = /* @__PURE__ */ new WeakSet(), Ko = function(n) {
    return Ar === Se(this, $s) ? Ge(n) : oa(n);
  }, Xo = function() {
    md = !0;
    var n = Co.prototype, t = Set.prototype;
    for (const r of Db) n[r] = function(...a) {
      return e(Se(this, Nr)), t[r].apply(this, a);
    };
    for (const r of Tb) n[r] = function(...a) {
      e(Se(this, Nr));
      var s = t[r].apply(this, a);
      return new Co(s);
    };
  };
  let Vb = Co;
  const xd = class extends Map {
    constructor(n) {
      if (super(), yt(this, ia), yt(this, ra, /* @__PURE__ */ new Map()), yt(this, aa, Ge(0)), yt(this, ya, Ge(0)), yt(this, Ds, Ar || -1), n) {
        for (var [t, r] of n) super.set(t, r);
        Se(this, ya).v = super.size;
      }
    }
    has(n) {
      var t = Se(this, ra), r = t.get(n);
      if (r === void 0) {
        if (super.get(n) === void 0) return e(Se(this, aa)), !1;
        r = gn(this, ia, Ji).call(this, 0), t.set(n, r);
      }
      return e(r), !0;
    }
    forEach(n, t) {
      gn(this, ia, Vl).call(this), super.forEach(n, t);
    }
    get(n) {
      var t = Se(this, ra), r = t.get(n);
      if (r === void 0) {
        if (super.get(n) === void 0) return void e(Se(this, aa));
        r = gn(this, ia, Ji).call(this, 0), t.set(n, r);
      }
      return e(r), super.get(n);
    }
    set(n, t) {
      var r, a = Se(this, ra), s = a.get(n), o = super.get(n), c = super.set(n, t), l = Se(this, aa);
      if (s === void 0) s = gn(this, ia, Ji).call(this, 0), a.set(n, s), te(Se(this, ya), super.size), ur(l);
      else if (o !== t) {
        ur(s);
        var i = l.reactions === null ? null : new Set(l.reactions);
        (i === null || !((r = s.reactions) != null && r.every((u) => i.has(u)))) && ur(l);
      }
      return c;
    }
    delete(n) {
      var t = Se(this, ra), r = t.get(n), a = super.delete(n);
      return r !== void 0 && (t.delete(n), te(Se(this, ya), super.size), te(r, -1), ur(Se(this, aa))), a;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var n = Se(this, ra);
        for (var t of (te(Se(this, ya), 0), n.values())) te(t, -1);
        ur(Se(this, aa)), n.clear();
      }
    }
    keys() {
      return e(Se(this, aa)), super.keys();
    }
    values() {
      return gn(this, ia, Vl).call(this), super.values();
    }
    entries() {
      return gn(this, ia, Vl).call(this), super.entries();
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    get size() {
      return e(Se(this, ya)), super.size;
    }
  };
  ra = /* @__PURE__ */ new WeakMap(), aa = /* @__PURE__ */ new WeakMap(), ya = /* @__PURE__ */ new WeakMap(), Ds = /* @__PURE__ */ new WeakMap(), ia = /* @__PURE__ */ new WeakSet(), Ji = function(n) {
    return Ar === Se(this, Ds) ? Ge(n) : oa(n);
  }, Vl = function() {
    e(Se(this, aa));
    var n = Se(this, ra);
    if (Se(this, ya).v !== n.size) {
      for (var t of Vm(xd.prototype, this, "keys").call(this)) if (!n.has(t)) {
        var r = gn(this, ia, Ji).call(this, 0);
        n.set(t, r);
      }
    }
    for ([, r] of Se(this, ra)) e(r);
  };
  let Io = xd;
  class Ab {
    constructor(t, r) {
      yt(this, Al), yt(this, ql), wt(this, Al, t), wt(this, ql, vc(r));
    }
    get current() {
      return Se(this, ql).call(this), Se(this, Al).call(this);
    }
  }
  Al = /* @__PURE__ */ new WeakMap(), ql = /* @__PURE__ */ new WeakMap();
  const qb = /\(.+\)/, Gb = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
  class Ob extends Ab {
    constructor(t, r) {
      let a = qb.test(t) || t.split(/[\s,]+/).some((o) => Gb.has(o.trim())) ? t : `(${t})`;
      const s = window.matchMedia(a);
      super(() => s.matches, (o) => (function(c, l, i, u = {}) {
        var h = Zs(l, c, i, u);
        return () => {
          c.removeEventListener(l, h, u);
        };
      })(s, "change", o));
    }
  }
  const yd = [{ fonts: [20, 16, 12, 10], gaps: [16, 12, 8], image: 36 }, { fonts: [24, 20, 16, 12], gaps: [20, 16, 12], image: 48 }, { fonts: [28, 24, 20, 16], gaps: [24, 20, 16], image: 60 }, { fonts: [32, 28, 24, 20], gaps: [28, 24, 20], image: 80 }], wd = [0, 12, 16, 20, 24, 28], Fb = /\p{L}\p{M}*/gu, Lb = /\p{N}/gu, Pd = ({ lettersAllowed: n, numbersAllowed: t }) => n !== t, jb = ({ previousValue: n, nextValue: t, caretPosition: r }, a, s) => {
    const o = t.slice(r), c = t.slice(0, r), l = c.slice(0, Eb(n, c)), i = c.slice(l.length), u = ((g, f) => Pd(f) ? f.lettersAllowed ? g.replace(Lb, "") : g.replace(Fb, "") : g)(i, a), h = s === void 0 ? u.length : Math.max(0, s - l.length - o.length), b = u.slice(0, h);
    return { value: l + b + o, caretPosition: l.length + b.length, rejected: u.length < i.length };
  }, Eb = (n, t) => {
    const r = Math.min(n.length, t.length);
    let a = 0;
    for (; a < r && n[a] === t[a]; ) a += 1;
    return a;
  };
  var Rb = (n, t) => {
    n.target === n.currentTarget && t()();
  }, Nb = $('<img alt="Close"/>'), Qb = $('<span class="kaching-bundles__personalisation-modal__item-variant"> </span>'), Wb = (n, t, r) => t(r(), n.currentTarget), Ub = $('<img alt="Clear"/>'), Hb = $('<span class="kaching-bundles__personalisation-modal__input-error"> </span>'), Zb = $("<span> </span>"), Jb = $('<div class="kaching-bundles__personalisation-modal__item"><div class="kaching-bundles__personalisation-modal__item-info"><div class="kaching-bundles__personalisation-modal__item-image-wrapper"><img class="kaching-bundles__personalisation-modal__item-image" alt=""/></div> <div class="kaching-bundles__personalisation-modal__item-details"><span class="kaching-bundles__personalisation-modal__item-title"> </span> <!></div></div> <div class="kaching-bundles__personalisation-modal__input-wrapper"><div class="kaching-bundles__personalisation-modal__input-container"><input type="text"/> <!></div> <!> <!></div></div>'), Yb = $('<div role="none"><div class="kaching-bundles__personalisation-modal-overlay__content"><div class="kaching-bundles__personalisation-modal"><div class="kaching-bundles__personalisation-modal__header"><h2 class="kaching-bundles__personalisation-modal__heading"> </h2> <!></div> <div class="kaching-bundles__personalisation-modal__items"></div> <div class="kaching-bundles__personalisation-modal__actions"><!> <!></div></div></div></div>');
  function Mo(n, t) {
    tt(t, !0);
    const r = () => Ve(b, "$translate", a), [a, s] = mt(), o = _(t, "selectedVariants", 7), c = _(t, "personalisationValues", 7), l = _(t, "addPersonalisationModal", 7), i = _(t, "inline", 7, !1), u = _(t, "onConfirm", 7), h = _(t, "onClose", 7), b = zt(), g = d(() => ((X) => {
      var ne, J;
      return { lettersAllowed: (ne = X == null ? void 0 : X.lettersAllowed) == null || ne, numbersAllowed: (J = X == null ? void 0 : X.numbersAllowed) == null || J };
    })(l())), f = d(() => !e(g).lettersAllowed && e(g).numbersAllowed), k = d(() => Pd(e(g))), x = d(() => e(f) ? "system.numbers_only" : "system.letters_only"), m = d(() => {
      var X, ne;
      return (ne = (X = l()) == null ? void 0 : X.characterLimitEnabled) != null && ne;
    }), M = d(() => {
      var X, ne;
      return e(m) ? (ne = (X = l()) == null ? void 0 : X.characterLimit) != null ? ne : 30 : void 0;
    }), C = d(() => o().map(({ product: X, index: ne }) => `${ne}:${X.id}`)), V = d(() => o().map(({ product: X }, ne) => {
      const J = o().slice(0, ne + 1).filter((F) => F.product.id === X.id).length;
      return `${X.title} #${J}`;
    })), D = new Io(), A = d(() => o().map(({ index: X }) => {
      var ne, J;
      return (J = (ne = D.get(e(C)[X])) != null ? ne : c()[X]) != null ? J : "";
    })), H = d(() => new Set(o().filter(({ index: X }) => (c()[X] || "").trim() !== "").map(({ index: X }) => X))), ee = d(() => l() ? (({ size: X, roundness: ne, imageSize: J, textSize: F, overlayColor: ae, primaryTextColor: ie, secondaryTextColor: ke, buttonColor: re, buttonTextColor: pe, errorColor: ge }) => {
      const me = Math.min(Math.max(0, X), yd.length - 1), ce = Math.min(Math.max(0, ne), wd.length - 1), fe = yd[me], Fe = wd[ce];
      return _n({ "kaching-product-personalisation-font-0": fe.fonts[0] + "px", "kaching-product-personalisation-font-1": fe.fonts[1] + "px", "kaching-product-personalisation-font-2": fe.fonts[2] + "px", "kaching-product-personalisation-font-3": fe.fonts[3] + "px", "kaching-product-personalisation-gap-0": fe.gaps[0] + "px", "kaching-product-personalisation-gap-1": fe.gaps[1] + "px", "kaching-product-personalisation-gap-2": fe.gaps[2] + "px", "kaching-product-personalisation-image-size": (J != null ? J : fe.image) + "px", "kaching-product-personalisation-radius": Fe + "px", "kaching-product-personalisation-text-size": F + "px", "kaching-product-personalisation-overlay-color": We(ae), "kaching-product-personalisation-primary-text-color": We(ie), "kaching-product-personalisation-secondary-text-color": We(ke), "kaching-product-personalisation-button-color": We(re), "kaching-product-personalisation-button-text-color": We(pe), "kaching-product-personalisation-error-color": We(ge) });
    })(l()) : "");
    let I = !1, Z = Ge(gt([]));
    function B(X, ne) {
      var J;
      if (I) return;
      const F = jb({ previousValue: e(A)[X], nextValue: ne.value, caretPosition: (J = ne.selectionStart) != null ? J : ne.value.length }, e(g), e(M));
      ne.value !== F.value && (ne.value = F.value, ne.setSelectionRange(F.caretPosition, F.caretPosition)), E(X, F.value), ue(X, F.rejected);
    }
    function E(X, ne) {
      D.set(e(C)[X], ne);
    }
    function ue(X, ne) {
      if (!!e(Z)[X] === ne) return;
      const J = [...e(Z)];
      J[X] = ne, te(Z, J, !0);
    }
    function z(X) {
      return e(H).has(X) && e(A)[X].trim() !== "";
    }
    const N = d(() => e(A).some((X) => X.trim() !== "")), S = d(() => e(H).size > 0), P = d(() => !e(N) && !e(S));
    var L = { get selectedVariants() {
      return o();
    }, set selectedVariants(X) {
      o(X), v();
    }, get personalisationValues() {
      return c();
    }, set personalisationValues(X) {
      c(X), v();
    }, get addPersonalisationModal() {
      return l();
    }, set addPersonalisationModal(X) {
      l(X), v();
    }, get inline() {
      return i();
    }, set inline(X = !1) {
      i(X), v();
    }, get onConfirm() {
      return u();
    }, set onConfirm(X) {
      u(X), v();
    }, get onClose() {
      return h();
    }, set onClose(X) {
      h(X), v();
    } }, j = Yb();
    let Y;
    j.__click = [Rb, h];
    var de = w(j), T = w(de), q = w(T), se = w(q), le = w(se, !0);
    y(se), Xt(O(se, 2), { element: "span", class: "kaching-bundles__personalisation-modal__close", get onclick() {
      return h();
    }, children: (X, ne) => {
      var J = Nb();
      _e(() => Be(J, "src", mo)), p(X, J);
    }, $$slots: { default: !0 } }), y(q);
    var W = O(q, 2);
    At(W, 21, o, ({ product: X, variant: ne, index: J }) => J, (X, ne) => {
      let J = () => e(ne).product, F = () => e(ne).variant, ae = () => e(ne).index;
      var ie = Jb(), ke = w(ie), re = w(ke), pe = w(re);
      y(re);
      var ge = O(re, 2), me = w(ge), ce = w(me, !0);
      y(me);
      var fe = O(me, 2), Fe = (Me) => {
        var Ae = Qb(), Oe = w(Ae, !0);
        y(Ae), _e((je) => kt(Oe, je), [() => F().options.join(", ")]), p(Me, Ae);
      };
      G(fe, (Me) => {
        J().variants.length > 1 && Me(Fe);
      }), y(ge), y(ke);
      var $e = O(ke, 2), Ce = w($e), Te = w(Ce);
      let R;
      da(Te), Te.__input = [Wb, B, ae];
      var xe = O(Te, 2), Ie = (Me) => {
        Xt(Me, { element: "span", class: "kaching-bundles__personalisation-modal__input-clear", onclick: () => (function(Ae) {
          E(Ae, ""), ue(Ae, !1);
        })(ae()), children: (Ae, Oe) => {
          var je = Ub();
          _e(() => Be(je, "src", "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.6667%203.99992V3.46659C10.6667%202.71985%2010.6667%202.34648%2010.5213%202.06126C10.3935%201.81038%2010.1895%201.60641%209.93865%201.47858C9.65344%201.33325%209.28007%201.33325%208.53333%201.33325H7.46667C6.71993%201.33325%206.34656%201.33325%206.06135%201.47858C5.81046%201.60641%205.60649%201.81038%205.47866%202.06126C5.33333%202.34648%205.33333%202.71985%205.33333%203.46659V3.99992M2%203.99992H14M12.6667%203.99992V11.4666C12.6667%2012.5867%2012.6667%2013.1467%2012.4487%2013.5746C12.2569%2013.9509%2011.951%2014.2569%2011.5746%2014.4486C11.1468%2014.6666%2010.5868%2014.6666%209.46667%2014.6666H6.53333C5.41323%2014.6666%204.85318%2014.6666%204.42535%2014.4486C4.04903%2014.2569%203.74307%2013.9509%203.55132%2013.5746C3.33333%2013.1467%203.33333%2012.5867%203.33333%2011.4666V3.99992'%20stroke='%23F04438'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), p(Ae, je);
        }, $$slots: { default: !0 } });
      };
      G(xe, (Me) => {
        z(ae()) && Me(Ie);
      }), y(Ce);
      var be = O(Ce, 2), ye = (Me) => {
        var Ae = Hb(), Oe = w(Ae, !0);
        y(Ae), _e((je) => kt(Oe, je), [() => r()(e(x))]), p(Me, Ae);
      };
      G(be, (Me) => {
        e(k) && e(Z)[ae()] && Me(ye);
      });
      var qe = O(be, 2), De = (Me) => {
        var Ae = Zb();
        let Oe;
        var je = w(Ae);
        y(Ae), _e((Ke) => {
          var Ue, ot;
          Oe = Nt(Ae, 1, "kaching-bundles__personalisation-modal__input-counter", null, Oe, Ke), kt(je, `${(Ue = e(A)[ae()].length) != null ? Ue : ""}/${(ot = e(M)) != null ? ot : ""}`);
        }, [() => ({ "kaching-bundles__personalisation-modal__input-counter--error": e(M) !== void 0 && e(A)[ae()].length >= e(M) })]), p(Me, Ae);
      };
      G(qe, (Me) => {
        e(m) && Me(De);
      }), y($e), y(ie), _e((Me, Ae) => {
        Be(pe, "src", F().image || J().image), kt(ce, e(V)[ae()]), R = Nt(Te, 1, "kaching-bundles__personalisation-modal__input", null, R, Me), Be(Te, "placeholder", Ae), Ka(Te, e(A)[ae()]), Be(Te, "maxlength", e(k) ? void 0 : e(M)), Be(Te, "inputmode", e(f) ? "numeric" : void 0);
      }, [() => ({ "kaching-bundles__personalisation-modal__input--with-clear": z(ae()), "kaching-bundles__personalisation-modal__input--error": e(M) !== void 0 && e(A)[ae()].length >= e(M) }), () => {
        var Me;
        return (Me = l()) != null && Me.placeholderText ? r()(l().placeholderText) : "";
      }]), Yl("compositionstart", Te, () => I = !0), Yl("compositionend", Te, (Me) => (function(Ae, Oe) {
        I = !1, B(Ae, Oe);
      })(ae(), Me.currentTarget)), p(X, ie);
    }), y(W);
    var oe = O(W, 2), K = w(oe);
    Xt(K, { element: "button", class: "kaching-bundles__personalisation-modal__button kaching-bundles__personalisation-modal__button--cancel", get onclick() {
      return h();
    }, children: (X, ne) => {
      wa();
      var J = Un();
      _e((F) => kt(J, F), [() => r()("system.cancel")]), p(X, J);
    }, $$slots: { default: !0 } });
    var Q = O(K, 2);
    {
      let X = d(() => ["kaching-bundles__personalisation-modal__button", "kaching-bundles__personalisation-modal__button--confirm", e(P) && "kaching-bundles__personalisation-modal__button--disabled"]);
      Xt(Q, { element: "button", get class() {
        return e(X);
      }, get disabled() {
        return e(P);
      }, onclick: () => u()(e(A)), children: (ne, J) => {
        wa();
        var F = Un();
        _e((ae) => kt(F, ae), [() => r()("system.confirm")]), p(ne, F);
      }, $$slots: { default: !0 } });
    }
    y(oe), y(T), y(de), y(j), _e((X, ne) => {
      Y = Nt(j, 1, "kaching-bundles__personalisation-modal-overlay", null, Y, X), Ot(j, e(ee)), kt(le, ne);
    }, [() => ({ "kaching-bundles__personalisation-modal-overlay--inline": i() }), () => {
      var X;
      return (X = l()) != null && X.heading ? r()(l().heading) : "";
    }]), p(n, j);
    var U = nt(L);
    return s(), U;
  }
  Gn(["click", "input"]), Ze(Mo, { selectedVariants: {}, personalisationValues: {}, addPersonalisationModal: {}, inline: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var Kb = (n, t) => {
    te(t, !0);
  }, Xb = (n, t) => {
    n.key !== "Enter" && n.key !== " " || (n.preventDefault(), te(t, !0));
  }, ef = $('<div class="kaching-bundles__product-personalisation__image-wrapper"><img alt="" class="kaching-bundles__product-personalisation__image"/></div>'), tf = $('<div class="kaching-bundles__product-personalisation__image-wrapper"><img alt="" class="kaching-bundles__product-personalisation__image kaching-bundles__product-personalisation__image--default"/></div>'), nf = $('<span class="kaching-bundles__product-personalisation__title"><!> <span class="kaching-bundles__product-personalisation__subtitle"> </span></span>'), rf = $('<span class="kaching-bundles__product-personalisation__title"><!></span>'), af = $('<span class="kaching-bundles__product-personalisation__subtitle"><!></span>'), lf = $("<!> <!>", 1), sf = $('<span class="kaching-bundles__product-personalisation__unit-label"> </span>'), of = $('<span class="kaching-bundles__product-personalisation__price"><!> <!></span>'), cf = $('<span class="kaching-bundles__product-personalisation__compare-at-price"><!></span>'), uf = $('<div class="kaching-bundles"><!></div>'), df = $('<div role="button" tabindex="0"><div class="kaching-bundles__product-personalisation__main"><!> <div class="kaching-bundles__product-personalisation__content"><!></div></div> <div class="kaching-bundles__product-personalisation__pricing"><!> <!></div></div> <!>', 1);
  function ii(n, t) {
    tt(t, !0);
    const r = () => Ve(x, "$config", o), a = () => Ve(M, "$formatPrice", o), s = () => Ve(m, "$translate", o), [o, c] = mt();
    let l = _(t, "productPersonalisation", 7), i = _(t, "product", 7), u = _(t, "selectedVariantIds", 23, () => []), h = _(t, "personalisationItems", 7), b = _(t, "quantity", 7), g = _(t, "addPersonalisationModal", 7), f = _(t, "onPersonalisationsChange", 7), k = _(t, "initialValues", 23, () => []);
    const x = mn(), m = zt(), M = pn(), C = On();
    let V = Ge(!1);
    const D = new Io();
    let A;
    const H = d(() => {
      if (l().mediaImageGID) return Ve(C, "$getMediaImageUrl", o)(l().mediaImageGID);
    }), ee = d(() => !e(H) && l().imageSize > 0), I = d(() => Math.round(100 * parseFloat(l().pricePerItem || "0") * r().currencyRate)), Z = d(() => Math.round(100 * parseFloat(l().compareAtPrice || "0") * r().currencyRate)), B = d(() => e(I)), E = d(() => e(Z)), ue = d(() => e(E) > 0 && e(E) > e(B)), z = d(() => ((R) => _n({ "kaching-product-personalisation-image-height": R.imageSize + "px" }))(l())), N = d(() => bn({ priceFormatter: a(), product: void 0, totalFullPrice: e(E) || e(B), totalDiscountedPrice: e(B), quantity: b(), unitQuantity: null })), S = d(() => e(N)(s()(l().title))), P = d(() => l().subtitle ? e(N)(s()(l().subtitle)) : ""), L = d(() => (function(R) {
      const { personalisationItems: xe, product: Ie, selectedVariantIds: be } = R;
      return xe != null ? xe : be.map((ye, qe) => ({ key: String(qe), product: Ie, variant: Ie.variants.find((De) => De.id === ye) || Ie.variants[0] }));
    })({ personalisationItems: h(), product: i(), selectedVariantIds: u() })), j = d(() => e(L).map((R) => `${R.key}:${R.product.id}`)), Y = d(() => e(L).map((R) => `${R.key}:${R.product.id}:${R.variant.id}`).join("|")), de = d(() => e(j).map((R) => D.get(R) || "")), T = d(() => e(L).map((R, xe) => ({ product: R.product, variant: R.variant, index: xe })));
    Ye(() => {
      l().id, k(), en(() => {
        D.clear(), k().forEach((R, xe) => {
          R && e(j)[xe] && D.set(e(j)[xe], R);
        });
      });
    }), Ye(() => {
      if (!h()) return;
      const R = e(Y);
      en(() => {
        if (R === A) return;
        const xe = A === void 0;
        A = R, xe && k().length <= e(j).length || oe(e(de));
      });
    });
    const q = d(() => e(de).some((R) => R.trim() !== "")), se = d(() => e(de).map((R, xe) => ({ value: R, index: xe })).filter(({ value: R }) => R.trim() !== "")), le = d(() => b() === 1);
    function W(R) {
      const xe = e(j).map((Ie, be) => {
        const ye = R[be] || "";
        return ye ? D.set(Ie, ye) : D.delete(Ie), ye;
      });
      te(V, !1), oe(xe);
    }
    function oe(R) {
      var xe;
      if (!l().variantGID) return;
      const Ie = Kt(l().variantGID);
      if (!Ie) return;
      const be = s()(l().valueLabel || "Value"), ye = R.map((qe, De) => ({ id: l().id, variantId: Ie, text: qe, valueLabel: be, productIndex: De, parentVariantId: h() ? e(L)[De].variant.id : void 0 })).filter((qe) => qe.text.trim() !== "");
      (xe = f()) == null || xe(ye);
    }
    var K = { get productPersonalisation() {
      return l();
    }, set productPersonalisation(R) {
      l(R), v();
    }, get product() {
      return i();
    }, set product(R) {
      i(R), v();
    }, get selectedVariantIds() {
      return u();
    }, set selectedVariantIds(R = []) {
      u(R), v();
    }, get personalisationItems() {
      return h();
    }, set personalisationItems(R) {
      h(R), v();
    }, get quantity() {
      return b();
    }, set quantity(R) {
      b(R), v();
    }, get addPersonalisationModal() {
      return g();
    }, set addPersonalisationModal(R) {
      g(R), v();
    }, get onPersonalisationsChange() {
      return f();
    }, set onPersonalisationsChange(R) {
      f(R), v();
    }, get initialValues() {
      return k();
    }, set initialValues(R = []) {
      k(R), v();
    } }, Q = df(), U = ve(Q);
    let X;
    U.__click = [Kb, V], U.__keydown = [Xb, V];
    var ne = w(U), J = w(ne), F = (R) => {
      var xe = ef(), Ie = w(xe);
      y(xe), _e(() => {
        Be(Ie, "src", e(H)), Be(Ie, "height", l().imageSize || 0);
      }), p(R, xe);
    }, ae = (R) => {
      var xe = ze(), Ie = ve(xe), be = (ye) => {
        var qe = tf(), De = w(qe);
        y(qe), _e(() => {
          Be(De, "src", "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.0476%206.95032C24.6473%206.55003%2024.1722%206.23251%2023.6492%206.01588C23.1262%205.79924%2022.5657%205.68774%2021.9996%205.68774C21.4335%205.68774%2020.873%205.79924%2020.35%206.01588C19.8271%206.23251%2019.3519%206.55003%2018.9516%206.95032L17.9932%207.90872L17.9788%207.89432L16.2828%209.59032L16.2972%209.60632L6.88921%2019.0143C6.06394%2019.8391%205.60007%2020.9579%205.59961%2022.1247V25.1999C5.59961%2025.5182%205.72604%2025.8234%205.95108%2026.0484C6.17612%2026.2735%206.48135%2026.3999%206.79961%2026.3999H9.87481C11.0416%2026.3995%2012.1604%2025.9356%2012.9852%2025.1103L25.0492%2013.0463C25.4495%2012.6461%2025.767%2012.1709%2025.9837%2011.6479C26.2003%2011.1249%2026.3118%2010.5644%2026.3118%209.99832C26.3118%209.43225%2026.2003%208.87172%2025.9837%208.34874C25.767%207.82576%2025.4495%207.35058%2025.0492%206.95032H25.0476ZM17.9932%2011.3023L8.58521%2020.7103C8.3995%2020.8961%208.25221%2021.1166%208.15173%2021.3593C8.05125%2021.602%207.99956%2021.8621%207.99961%2022.1247V23.9999H9.87481C10.4044%2023.9999%2010.9148%2023.7887%2011.2876%2023.4143L20.6956%2014.0063L17.9932%2011.3023ZM22.3932%2012.3087L23.3516%2011.3503C23.6865%2010.9871%2023.8678%2010.5084%2023.8578%2010.0144C23.8477%209.52049%2023.647%209.04957%2023.2977%208.70023C22.9484%208.35089%2022.4774%208.15019%2021.9835%208.14015C21.4896%208.1301%2021.0109%208.31147%2020.6476%208.64632L19.6908%209.60632L22.3932%2012.3087Z'%20fill='black'/%3e%3c/svg%3e"), Be(De, "height", l().imageSize || 0);
        }), p(ye, qe);
      };
      G(Ie, (ye) => {
        e(ee) && ye(be);
      }, !0), p(R, xe);
    };
    G(J, (R) => {
      e(H) ? R(F) : R(ae, !1);
    });
    var ie = O(J, 2), ke = w(ie), re = (R) => {
      var xe = ze();
      At(ve(xe), 17, () => e(se), ({ value: Ie, index: be }) => be, (Ie, be) => {
        var ye = nf(), qe = w(ye), De = (Oe) => {
          var je = Un();
          _e(() => kt(je, `#${e(be).index + 1}`)), p(Oe, je);
        };
        G(qe, (Oe) => {
          e(le) || Oe(De);
        });
        var Me = O(qe, 2), Ae = w(Me, !0);
        y(Me), y(ye), _e(() => kt(Ae, e(be).value)), p(Ie, ye);
      }), p(R, xe);
    }, pe = (R) => {
      var xe = lf(), Ie = ve(xe), be = (De) => {
        var Me = rf();
        Le(w(Me), () => e(S)), y(Me), p(De, Me);
      };
      G(Ie, (De) => {
        e(S) && De(be);
      });
      var ye = O(Ie, 2), qe = (De) => {
        var Me = af();
        Le(w(Me), () => e(P)), y(Me), p(De, Me);
      };
      G(ye, (De) => {
        e(P) && De(qe);
      }), p(R, xe);
    };
    G(ke, (R) => {
      e(q) ? R(re) : R(pe, !1);
    }), y(ie), y(ne);
    var ge = O(ne, 2), me = w(ge), ce = (R) => {
      var xe = of(), Ie = w(xe);
      Le(Ie, () => a()(e(B)));
      var be = O(Ie, 2), ye = (qe) => {
        var De = sf(), Me = w(De, !0);
        y(De), _e(() => kt(Me, l().pricePerItemUnitLabel)), p(qe, De);
      };
      G(be, (qe) => {
        l().pricePerItemUnitLabel && qe(ye);
      }), y(xe), p(R, xe);
    };
    G(me, (R) => {
      e(B) > 0 && R(ce);
    });
    var fe = O(me, 2), Fe = (R) => {
      var xe = cf();
      Le(w(xe), () => a()(e(E))), y(xe), p(R, xe);
    };
    G(fe, (R) => {
      e(ue) && R(Fe);
    }), y(ge), y(U);
    var $e = O(U, 2), Ce = (R) => {
      ml(R, { target: "body", children: (xe, Ie) => {
        var be = uf();
        Mo(w(be), { get selectedVariants() {
          return e(T);
        }, get personalisationValues() {
          return e(de);
        }, get addPersonalisationModal() {
          return g();
        }, onConfirm: W, onClose: () => {
          te(V, !1);
        } }), y(be), p(xe, be);
      }, $$slots: { default: !0 } });
    };
    G($e, (R) => {
      e(V) && R(Ce);
    }), _e((R) => {
      X = Nt(U, 1, "kaching-bundles__product-personalisation", null, X, R), Be(U, "data-product-personalisation-id", l().id), Ot(U, e(z));
    }, [() => ({ "kaching-bundles__product-personalisation--filled": e(q) })]), p(n, Q);
    var Te = nt(K);
    return c(), Te;
  }
  function gf(n, t, r) {
    const a = Number(n.target.value), s = t().find((o) => o.id === a);
    r()(s);
  }
  Gn(["click", "keydown"]), Ze(ii, { productPersonalisation: {}, product: {}, selectedVariantIds: {}, personalisationItems: {}, quantity: {}, addPersonalisationModal: {}, onPersonalisationsChange: {}, initialValues: {} }, [], [], !0);
  var hf = (n) => n.stopPropagation(), pf = $("<option> </option>"), bf = $('<select class="kaching-bundles__bar-variant-select kaching-bundles__selling-plan-select"></select>');
  function Ta(n, t) {
    tt(t, !0);
    const [r, a] = mt(), s = _(t, "sellingPlans", 7), o = _(t, "selectedSellingPlan", 7), c = _(t, "onChange", 7), l = zt();
    var i, u = { get sellingPlans() {
      return s();
    }, set sellingPlans(g) {
      s(g), v();
    }, get selectedSellingPlan() {
      return o();
    }, set selectedSellingPlan(g) {
      o(g), v();
    }, get onChange() {
      return c();
    }, set onChange(g) {
      c(g), v();
    } }, h = bf();
    h.__change = [gf, s, c], h.__click = [hf], At(h, 21, s, (g) => g.id, (g, f) => {
      var k = pf(), x = w(k, !0);
      y(k);
      var m = {};
      _e(() => {
        var M;
        kt(x, e(f).name), m !== (m = e(f).id) && (k.value = (M = k.__value = e(f).id) != null ? M : "");
      }), p(g, k);
    }), y(h), no(h), _e((g) => {
      var f;
      Be(h, "aria-label", g), i !== (i = o().id) && (h.value = (f = h.__value = o().id) != null ? f : "", ol(h, o().id));
    }, [() => Ve(l, "$translate", r)("system.subscription_plan")]), p(n, h);
    var b = nt(u);
    return a(), b;
  }
  Gn(["change", "click"]), Ze(Ta, { sellingPlans: {}, selectedSellingPlan: {}, onChange: {} }, [], [], !0);
  var ff = Dn('<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.334 1 5 8.333 1.667 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function vs(n) {
    p(n, ff());
  }
  Ze(vs, {}, [], [], !0);
  var vf = $('<img alt="" class="kaching-bundles__upsell__image"/>'), _f = $('<div class="kaching-bundles__upsell__price"><!></div>'), kf = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), mf = $('<div class="kaching-bundles__upsell__price"><!></div>'), xf = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), yf = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--secondary"><!> <!></div>'), wf = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--main"><!> <!></div> <!>', 1), Pf = $('<div class="kaching-bundles__upsell__price"><!></div>'), Sf = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), Bf = $('<div class="kaching-bundles__upsell__unit-price"><!> </div>'), Cf = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--main"><!> <!></div> <div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--secondary"><!></div>', 1), If = $('<div class="kaching-bundles__upsell__price"><!></div>'), Mf = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), zf = $("<!> <!>", 1), $f = $('<div><!> <div class="kaching-bundles__upsell__main"><!> <!> <div class="kaching-bundles__upsell__content"><!> <!> <!></div></div> <div class="kaching-bundles__upsell__pricing"><!></div></div>');
  function Sd(n, t) {
    tt(t, !0);
    const r = () => Ve(C, "$config", o), a = () => Ve(m, "$formatPrice", o), s = () => Ve(x, "$translate", o), [o, c] = mt();
    let l = _(t, "dealBlock", 7), i = _(t, "dealBarId", 7), u = _(t, "upsell", 7), h = _(t, "product", 7), b = _(t, "dealBarSelected", 7, !1), g = _(t, "dealSellingPlan", 7), f = _(t, "sets", 7), k = _(t, "onChange", 7);
    const x = zt(), m = pn(), M = On(), C = mn();
    let V = Ge(gt(u().preselected)), D = Ge(void 0), A = Ge(void 0);
    const H = d(() => u().variantGIDs ? u().variantGIDs.map(Kt) : h().variants.map((ce) => ce.id)), ee = d(() => ({ ...h(), variants: h().variants.filter((ce) => (r().preview || ce.availableForSale) && e(H).includes(ce.id)) })), I = d(() => (function(ce, fe) {
      if (ce !== void 0) return ce;
      if (fe != null && fe.availableForSale && fe.variants.length > 0) return fe.variants[0].id;
    })(e(D), e(ee))), Z = d(() => e(ee).variants.find((ce) => ce.id === e(I))), B = d(() => Ve(M, "$getMediaImageUrl", o)(u().mediaImageGID)), E = d(() => ((ce, fe) => {
      const { fonts: Fe, colors: $e, cornerRadius: Ce } = ce;
      return _n({ "kaching-upsell-background-color": $e.upsellBackground && We($e.upsellBackground), "kaching-upsell-text-color": $e.upsellText && We($e.upsellText), "kaching-upsell-selected-background-color": $e.upsellSelectedBackground && We($e.upsellSelectedBackground), "kaching-upsell-selected-text-color": $e.upsellSelectedText && We($e.upsellSelectedText), "kaching-upsell-font-size": Fe.upsell && Fe.upsell.size + "px", "kaching-upsell-font-weight": Fe.upsell && br(Fe.upsell.style), "kaching-upsell-font-style": Fe.upsell && fr(Fe.upsell.style), "kaching-upsell-image-border-radius": (Ce || 0) / 2 + "px", "kaching-upsell-image-height": fe.imageSize + "px" });
    })(l(), u())), ue = d(() => h().url ? `${h().url}?variant=${e(I)}` : void 0), z = d(() => l().priceRounding ? { perItem: l().showPricesPerItem, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), N = d(() => u().quantity * f()), S = d(() => (function(ce) {
      if (!ce) return 0;
      let fe = ce.price;
      return l().useProductCompareAtPrice && ce.compareAtPrice && (fe = Math.max(fe, ce.compareAtPrice)), fe * e(N);
    })(e(Z))), P = d(() => Math.ceil(e(S) / e(N))), L = d(() => {
      var ce;
      return (ce = u().subscriptionEnabled) == null || ce;
    }), j = d(() => {
      var ce;
      return (ce = u().subscriptionType) != null ? ce : "deal";
    }), Y = d(() => {
      if (!e(L) || e(j) !== "always" || !e(Z)) return [];
      const ce = new Set(e(Z).sellingPlans.map((fe) => fe.id));
      return h().sellingPlans.filter((fe) => ce.has(fe.id));
    }), de = d(() => e(Y).find((ce) => ce.id === e(A)) || e(Y)[0]);
    Ye(() => {
      var ce;
      e(Y).some((fe) => {
        var Fe;
        return fe.id === ((Fe = g()) == null ? void 0 : Fe.id);
      }) && te(A, (ce = g()) == null ? void 0 : ce.id, !0);
    });
    const T = d(() => {
      if (e(Z) && e(L))
        return e(j) === "deal" ? g() ? rr(h(), e(Z), g()) : void 0 : e(de);
    }), q = d(() => pa({ discountType: u().discountType, discountValue: u().discountValue, discountQuantity: u().quantity, variantQuantities: e(Z) ? [{ variant: e(Z), quantity: e(N) }] : [], currencyRate: r().currencyRate, priceRounding: e(z), sellingPlan: e(T) })), se = d(() => Math.ceil(e(q) / e(N))), le = d(() => e(S) > e(q)), W = d(() => e(Z) && po(e(Z))), oe = d(() => e(Z) ? Sr([{ variant: e(Z), quantity: e(N) }]) : null), K = d(() => e(oe) ? e(q) / e(oe) : null), Q = d(() => bn({ priceFormatter: a(), product: h(), totalFullPrice: e(S), totalDiscountedPrice: e(q), quantity: e(N), unitQuantity: e(oe), sellingPlan: e(T) })), U = d(() => e(Q)(s()(u().text))), X = d(() => ((ce, fe, Fe) => ce.blockLayout !== "vertical" ? [] : fs(ce).filter(($e) => $e.attachedTo.type === "barUpsell" && $e.attachedTo.dealBarId === fe && $e.attachedTo.upsellId === Fe))(l(), i(), u().id).map((ce) => $a(ce, s(), e(Q)))), ne = d(() => Da(e(X))), J = d(() => e(ne).positions.size > 0);
    function F(ce) {
      te(D, ce, !0);
    }
    function ae() {
      b() && te(V, !e(V));
    }
    dr(() => {
      u().productGID, te(D, void 0);
    }), Ye(() => {
      if (e(Z) && h().availableForSale && e(N)) {
        const ce = e(V), fe = e(T);
        en(() => {
          k()({ variant: ce ? e(Z) : null, product: ce ? h() : null, discountedPrice: ce ? e(q) : 0, fullPrice: ce ? e(S) : 0, sellingPlan: ce ? fe : void 0 });
        });
      }
    });
    const ie = d(() => !h().availableForSale || h().variants.filter((ce) => ce.availableForSale && e(H).includes(ce.id)).length === 0);
    var ke = { get dealBlock() {
      return l();
    }, set dealBlock(ce) {
      l(ce), v();
    }, get dealBarId() {
      return i();
    }, set dealBarId(ce) {
      i(ce), v();
    }, get upsell() {
      return u();
    }, set upsell(ce) {
      u(ce), v();
    }, get product() {
      return h();
    }, set product(ce) {
      h(ce), v();
    }, get dealBarSelected() {
      return b();
    }, set dealBarSelected(ce = !1) {
      b(ce), v();
    }, get dealSellingPlan() {
      return g();
    }, set dealSellingPlan(ce) {
      g(ce), v();
    }, get sets() {
      return f();
    }, set sets(ce) {
      f(ce), v();
    }, get onChange() {
      return k();
    }, set onChange(ce) {
      k(ce), v();
    } }, re = ze(), pe = ve(re), ge = (ce) => {
      var fe = $f();
      let Fe, $e;
      var Ce = w(fe);
      At(Ce, 17, () => e(X), (bt) => bt.id, (bt, qt) => {
        ba(bt, { get badge() {
          return e(qt);
        }, get blockLayout() {
          return l().blockLayout;
        } });
      });
      var Te = O(Ce, 2), R = w(Te), xe = (bt) => {
        {
          let qt = d(() => ["kaching-bundles__upsell__checkbox", e(V) && "kaching-bundles__upsell__checkbox--selected"]);
          Xt(bt, { element: "span", get class() {
            return e(qt);
          }, onclick: ae, children: (nn, Pe) => {
            var He = ze(), ht = ve(He), ut = (st) => {
              vs(st);
            };
            G(ht, (st) => {
              e(V) && st(ut);
            }), p(nn, He);
          }, $$slots: { default: !0 } });
        }
      };
      G(R, (bt) => {
        b() && bt(xe);
      });
      var Ie = O(R, 2), be = (bt) => {
        {
          let qt = d(() => b() ? e(ue) : void 0);
          nr(bt, { get url() {
            return e(qt);
          }, class: "kaching-bundles__upsell__link", children: (nn, Pe) => {
            var He = vf();
            _e(() => {
              var ht;
              Be(He, "src", e(B) || ((ht = e(Z)) == null ? void 0 : ht.image) || h().image), Be(He, "height", u().imageSize);
            }), p(nn, He);
          }, $$slots: { default: !0 } });
        }
      };
      G(Ie, (bt) => {
        u().imageSize > 0 && bt(be);
      });
      var ye = O(Ie, 2), qe = w(ye), De = (bt) => {
        Xt(bt, { element: "span", class: "kaching-bundles__upsell__text", onclick: ae, children: (qt, nn) => {
          var Pe = ze();
          Le(ve(Pe), () => e(U)), p(qt, Pe);
        }, $$slots: { default: !0 } });
      };
      G(qe, (bt) => {
        e(U) && bt(De);
      });
      var Me = O(qe, 2), Ae = (bt) => {
        Hn(bt, { get product() {
          return e(ee);
        }, get selectedVariantId() {
          return e(I);
        }, onChange: F });
      };
      G(Me, (bt) => {
        b() && e(ee) && e(ee).variants.length > 1 && e(I) && bt(Ae);
      });
      var Oe = O(Me, 2), je = (bt) => {
        Ta(bt, { get sellingPlans() {
          return e(Y);
        }, get selectedSellingPlan() {
          return e(de);
        }, onChange: (qt) => te(A, qt.id, !0) });
      };
      G(Oe, (bt) => {
        b() && e(V) && e(Y).length > 1 && e(de) && bt(je);
      }), y(ye), y(Te);
      var Ke = O(Te, 2), Ue = w(Ke), ot = (bt) => {
        var qt = wf(), nn = ve(qt), Pe = w(nn);
        lt(Pe, () => e(se), (rt) => {
          var et = _f();
          Le(w(et), () => a()(e(se))), y(et), p(rt, et);
        });
        var He = O(Pe, 2), ht = (rt) => {
          var et = ze();
          lt(ve(et), () => e(P), (Dt) => {
            var we = kf();
            Le(w(we), () => a()(e(P))), y(we), p(Dt, we);
          }), p(rt, et);
        };
        G(He, (rt) => {
          e(le) && rt(ht);
        }), y(nn);
        var ut = O(nn, 2), st = (rt) => {
          var et = yf(), Dt = w(et);
          lt(Dt, () => e(q), (Ee) => {
            var Je = mf();
            Le(w(Je), () => a()(e(q))), y(Je), p(Ee, Je);
          });
          var we = O(Dt, 2), Xe = (Ee) => {
            var Je = ze();
            lt(ve(Je), () => e(S), (vt) => {
              var ct = xf();
              Le(w(ct), () => a()(e(S))), y(ct), p(vt, ct);
            }), p(Ee, Je);
          };
          G(we, (Ee) => {
            e(le) && Ee(Xe);
          }), y(et), p(rt, et);
        };
        G(ut, (rt) => {
          e(N) > 1 && rt(st);
        }), p(bt, qt);
      }, Wt = (bt) => {
        var qt = ze(), nn = ve(qt), Pe = (ht) => {
          var ut = Cf(), st = ve(ut), rt = w(st);
          lt(rt, () => e(q), (Xe) => {
            var Ee = Pf();
            Le(w(Ee), () => a()(l().showPricesPerItem ? e(se) : e(q))), y(Ee), p(Xe, Ee);
          });
          var et = O(rt, 2), Dt = (Xe) => {
            var Ee = ze();
            lt(ve(Ee), () => e(S), (Je) => {
              var vt = Sf();
              Le(w(vt), () => a()(l().showPricesPerItem ? e(P) : e(S))), y(vt), p(Je, vt);
            }), p(Xe, Ee);
          };
          G(et, (Xe) => {
            e(le) && Xe(Dt);
          }), y(st);
          var we = O(st, 2);
          lt(w(we), () => e(K), (Xe) => {
            var Ee = Bf(), Je = w(Ee);
            Le(Je, () => a()(e(K), { preserveDecimals: !0 }));
            var vt = O(Je);
            y(Ee), _e(() => {
              var ct;
              return kt(vt, ` / ${(ct = e(W)) != null ? ct : ""}`);
            }), p(Xe, Ee);
          }), y(we), p(ht, ut);
        }, He = (ht) => {
          var ut = zf(), st = ve(ut);
          lt(st, () => e(q), (Dt) => {
            var we = If();
            Le(w(we), () => a()(l().showPricesPerItem ? e(se) : e(q))), y(we), p(Dt, we);
          });
          var rt = O(st, 2), et = (Dt) => {
            var we = ze();
            lt(ve(we), () => e(S), (Xe) => {
              var Ee = Mf();
              Le(w(Ee), () => a()(l().showPricesPerItem ? e(P) : e(S))), y(Ee), p(Xe, Ee);
            }), p(Dt, we);
          };
          G(rt, (Dt) => {
            e(le) && Dt(et);
          }), p(ht, ut);
        };
        G(nn, (ht) => {
          e(K) && e(W) && !r().ignoreUnitPrice ? ht(Pe) : ht(He, !1);
        }, !0), p(bt, qt);
      };
      G(Ue, (bt) => {
        l().showBothPrices ? bt(ot) : bt(Wt, !1);
      }), y(Ke), y(fe), _e((bt, qt) => {
        Fe = Nt(fe, 1, "kaching-bundles__upsell", null, Fe, bt), Be(fe, "data-upsell-id", u().id), $e = Ot(fe, e(E), $e, qt);
      }, [() => ({ "kaching-bundles__upsell--out-of-stock": r().preview && e(ie), "kaching-bundles__upsell--badge-border-all": e(ne).positions.has("all"), "kaching-bundles__upsell--badge-border-top": e(ne).positions.has("top"), "kaching-bundles__upsell--badge-border-bottom": e(ne).positions.has("bottom"), "kaching-bundles__upsell--badge-border-left": e(ne).positions.has("left"), "kaching-bundles__upsell--badge-border-right": e(ne).positions.has("right") }), () => ({ "--badge-border-thickness": e(J) ? `${e(ne).thickness}px` : void 0, "--badge-border-gap": e(J) ? `${e(ne).gap}px` : void 0, "--badge-border-gap-border": e(ne).gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": e(ne).sideLength ? `${e(ne).sideLength}px` : void 0 })]), p(ce, fe);
    };
    G(pe, (ce) => {
      !(e(Z) || r().preview && e(ie)) || u().visibleOnlyWhenDealBarSelected && !b() || ce(ge);
    }), p(n, re);
    var me = nt(ke);
    return c(), me;
  }
  Ze(Sd, { dealBlock: {}, dealBarId: {}, upsell: {}, product: {}, dealBarSelected: {}, dealSellingPlan: {}, sets: {}, onChange: {} }, [], [], !0);
  var Df = $('<div class="kaching-bundles__free-gift__divider"></div>'), Tf = $("<!> <!>", 1);
  function Ai(n, t) {
    tt(t, !0);
    const r = () => Ve(k, "$config", a), [a, s] = mt();
    let o = _(t, "dealBlock", 7), c = _(t, "dealBarId", 7), l = _(t, "upsells", 7), i = _(t, "otherProducts", 7), u = _(t, "complementaryProducts", 7), h = _(t, "dealBarSelected", 7), b = _(t, "dealSellingPlan", 7), g = _(t, "sets", 7, 1), f = _(t, "onChange", 7);
    const k = mn();
    let x = Ge(gt({}));
    const m = d(() => r().preview ? i() : i().map(Pr)), M = d(() => r().preview ? u() : u().map(Pr)), C = Math.floor(1e3 * Math.random()), V = d(() => l().flatMap((ee, I) => {
      if (ee.productSource === "complementary") {
        const B = e(M)[(I + C) % (e(M).length || 1)];
        return B && (r().preview || B.availableForSale) ? { upsell: ee, product: B } : [];
      }
      if (!ee.productGID) return [];
      const Z = e(m).find((B) => B.id === Kt(ee.productGID));
      if (!Z) return [];
      if (!r().preview) {
        if (!Z.availableForSale) return [];
        const B = ee.variantGIDs ? ee.variantGIDs.map(Kt) : Z.variants.map((E) => E.id);
        if (!Z.variants.some((E) => E.availableForSale && B.includes(E.id))) return [];
      }
      return { upsell: ee, product: Z };
    }));
    var D = { get dealBlock() {
      return o();
    }, set dealBlock(ee) {
      o(ee), v();
    }, get dealBarId() {
      return c();
    }, set dealBarId(ee) {
      c(ee), v();
    }, get upsells() {
      return l();
    }, set upsells(ee) {
      l(ee), v();
    }, get otherProducts() {
      return i();
    }, set otherProducts(ee) {
      i(ee), v();
    }, get complementaryProducts() {
      return u();
    }, set complementaryProducts(ee) {
      u(ee), v();
    }, get dealBarSelected() {
      return h();
    }, set dealBarSelected(ee) {
      h(ee), v();
    }, get dealSellingPlan() {
      return b();
    }, set dealSellingPlan(ee) {
      b(ee), v();
    }, get sets() {
      return g();
    }, set sets(ee = 1) {
      g(ee), v();
    }, get onChange() {
      return f();
    }, set onChange(ee) {
      f(ee), v();
    } }, A = ze();
    At(ve(A), 19, () => e(V), ({ upsell: ee, product: I }) => ee.id, (ee, I, Z) => {
      let B = () => e(I).upsell;
      var E = Tf(), ue = ve(E);
      Sd(ue, { get dealBarId() {
        return c();
      }, get dealBlock() {
        return o();
      }, get upsell() {
        return B();
      }, get product() {
        return e(I).product;
      }, get dealBarSelected() {
        return h();
      }, get dealSellingPlan() {
        return b();
      }, get sets() {
        return g();
      }, onChange: (S) => (function(P, L) {
        const { variant: j, product: Y, discountedPrice: de, fullPrice: T, sellingPlan: q } = L;
        j && Y ? e(x)[P] = { variant: j, product: Y, discountedPrice: de, fullPrice: T, sellingPlan: q } : delete e(x)[P];
        const se = l().filter((le) => le.id in e(x)).map((le) => ({ id: le.id, variant: e(x)[le.id].variant, product: e(x)[le.id].product, quantity: le.quantity * g(), discountedPrice: e(x)[le.id].discountedPrice, fullPrice: e(x)[le.id].fullPrice, sellingPlan: e(x)[le.id].sellingPlan }));
        f()(se);
      })(B().id, S) });
      var z = O(ue, 2), N = (S) => {
        p(S, Df());
      };
      G(z, (S) => {
        e(Z) < e(V).length - 1 && S(N);
      }), p(ee, E);
    }), p(n, A);
    var H = nt(D);
    return s(), H;
  }
  Ze(Ai, { dealBlock: {}, dealBarId: {}, upsells: {}, otherProducts: {}, complementaryProducts: {}, dealBarSelected: {}, dealSellingPlan: {}, sets: {}, onChange: {} }, [], [], !0);
  const zo = ga({}), $o = ga(!1);
  function fa(n) {
    $o.set(n);
  }
  function _s(n, t) {
    zo.update((r) => ({ ...r, [n]: t }));
  }
  var Vf = $('<span class="kaching-bundles__bar-price__unit-label"><!></span>'), Af = $('<div class="kaching-bundles__bar-price"><!> <!></div>');
  function Yr(n, t) {
    tt(t, !0);
    const r = () => Ve(i, "$translate", a), [a, s] = mt(), o = _(t, "amount", 7), c = _(t, "showPricesPerItem", 7), l = _(t, "unitLabel", 7, ""), i = zt(), u = pn();
    var h = { get amount() {
      return o();
    }, set amount(m) {
      o(m), v();
    }, get showPricesPerItem() {
      return c();
    }, set showPricesPerItem(m) {
      c(m), v();
    }, get unitLabel() {
      return l();
    }, set unitLabel(m = "") {
      l(m), v();
    } }, b = Af(), g = w(b);
    Le(g, () => Ve(u, "$formatPrice", a)(o()));
    var f = O(g, 2), k = (m) => {
      var M = Vf();
      Le(w(M), () => r()(l())), y(M), p(m, M);
    };
    G(f, (m) => {
      c() && l() && m(k);
    }), y(b), _e((m) => Be(b, "data-a11y-label", m), [() => r()("system.price")]), p(n, b);
    var x = nt(h);
    return s(), x;
  }
  Ze(Yr, { amount: {}, showPricesPerItem: {}, unitLabel: {} }, [], [], !0);
  const Bd = "variantBadges";
  function Cd(n = []) {
    const t = ga(Id(n));
    return fi(Bd, t), { setVariantBadges: (r) => {
      t.set(Id(r));
    } };
  }
  function Id(n) {
    const t = new Map(n.map((r) => [r.variantId, r.badgeHtml]));
    return (r) => r === void 0 ? void 0 : t.get(r);
  }
  var qf = $('<div class="kaching-bundles__low-stock-alert"><!></div>');
  function Md(n, t) {
    tt(t, !0);
    const [r, a] = mt(), s = _(t, "lowStockAlert", 7), o = _(t, "inventoryQuantity", 7), c = zt(), l = d(() => {
      return k = Ve(c, "$translate", r)(s().message), x = { stock: o() ? o().toString() : null }, k.replace(/\{\{\s*(\w+)\s*\}\}/g, (m, M) => {
        var C;
        return (C = x[M]) != null ? C : "";
      });
      var k, x;
    }), i = d(() => ((k) => {
      const { textColor: x } = k;
      return _n({ "kaching-bundles-low-stock-alert-text-color": We(x) });
    })(s()));
    var u = { get lowStockAlert() {
      return s();
    }, set lowStockAlert(k) {
      s(k), v();
    }, get inventoryQuantity() {
      return o();
    }, set inventoryQuantity(k) {
      o(k), v();
    } }, h = ze(), b = ve(h), g = (k) => {
      var x = qf();
      Le(w(x), () => e(l)), y(x), _e(() => Ot(x, e(i))), p(k, x);
    };
    G(b, (k) => {
      o() && o() > 0 && o() < s().threshold && k(g);
    }), p(n, h);
    var f = nt(u);
    return a(), f;
  }
  Ze(Md, { lowStockAlert: {}, inventoryQuantity: {} }, [], [], !0);
  var Gf = $("<div><!></div>");
  function va(n, t) {
    tt(t, !0);
    const [r, a] = mt(), s = _(t, "dealBlock", 7), o = _(t, "variant", 7), c = (function() {
      const k = bi(Bd);
      if (!k) throw new Error("getVariantBadges must be called within a component tree that has setupVariantBadges initialized");
      return k;
    })(), l = d(() => {
      var k;
      return Ve(c, "$variantBadgeLookup", r)((k = o()) == null ? void 0 : k.id);
    });
    var i = { get dealBlock() {
      return s();
    }, set dealBlock(k) {
      s(k), v();
    }, get variant() {
      return o();
    }, set variant(k) {
      o(k), v();
    } }, u = ze(), h = ve(u), b = (k) => {
      var x = Gf();
      Le(w(x), () => e(l)), y(x), p(k, x);
    }, g = (k) => {
      var x = ze(), m = ve(x), M = (C) => {
        {
          let V = d(() => {
            var D, A;
            return (A = (D = o()) == null ? void 0 : D.inventoryQuantity) != null ? A : null;
          });
          Md(C, { get lowStockAlert() {
            return s().lowStockAlert;
          }, get inventoryQuantity() {
            return e(V);
          } });
        }
      };
      G(m, (C) => {
        s().lowStockAlertEnabled && s().lowStockAlert && C(M);
      }, !0), p(k, x);
    };
    G(h, (k) => {
      e(l) ? k(b) : k(g, !1);
    }), p(n, u);
    var f = nt(i);
    return a(), f;
  }
  Ze(va, { dealBlock: {}, variant: {} }, [], [], !0);
  var Of = $('<div class="kaching-bundles__bar-sold-out-badge"><!></div>');
  function qi(n, t) {
    tt(t, !0);
    const [r, a] = mt(), s = _(t, "showAsSoldOut", 7), o = _(t, "replaceLiquid", 7), c = zt(), l = d(() => o()(Ve(c, "$translate", r)(s().label)));
    var i = { get showAsSoldOut() {
      return s();
    }, set showAsSoldOut(b) {
      s(b), v();
    }, get replaceLiquid() {
      return o();
    }, set replaceLiquid(b) {
      o(b), v();
    } }, u = Of();
    Le(w(u), () => e(l)), y(u), p(n, u);
    var h = nt(i);
    return a(), h;
  }
  Ze(qi, { showAsSoldOut: {}, replaceLiquid: {} }, [], [], !0);
  const xl = (n) => {
    const { opacity: t, backgroundColor: r, textColor: a, textSize: s } = n;
    return _n({ "kaching-bundles-show-as-sold-out-opacity": t.toString(), "kaching-bundles-show-as-sold-out-background-color": We(r), "kaching-bundles-show-as-sold-out-text-color": We(a), "kaching-bundles-show-as-sold-out-text-size": s + "px" });
  };
  var Ff = $('<img alt="Decrease"/>'), Lf = $('<img alt="Increase"/>'), jf = $('<div class="kaching-bundles__quantity-selector"><!> <input type="number" class="kaching-bundles__quantity-selector__input" step="1"/> <!></div>');
  function yl(n, t) {
    tt(t, !0);
    const [r, a] = mt();
    let s = _(t, "value", 7), o = _(t, "onChange", 7), c = _(t, "min", 7, 1);
    const l = zt(), i = d(() => s() <= c());
    var u = { get value() {
      return s();
    }, set value(k) {
      s(k), v();
    }, get onChange() {
      return o();
    }, set onChange(k) {
      o(k), v();
    }, get min() {
      return c();
    }, set min(k = 1) {
      c(k), v();
    } }, h = jf(), b = w(h);
    {
      let k = d(() => ["kaching-bundles__quantity-selector__button", e(i) && "kaching-bundles__quantity-selector__button--disabled"]);
      Xt(b, { element: "div", get class() {
        return e(k);
      }, onclick: function(x) {
        x.stopPropagation(), o()(Math.max(s() - 1, c()));
      }, get disabled() {
        return e(i);
      }, children: (x, m) => {
        var M = Ff();
        _e(() => Be(M, "src", ed)), p(x, M);
      }, $$slots: { default: !0 } });
    }
    var g = O(b, 2);
    da(g), Xt(O(g, 2), { element: "div", class: "kaching-bundles__quantity-selector__button", onclick: function(k) {
      k.stopPropagation(), o()(s() + 1);
    }, children: (k, x) => {
      var m = Lf();
      _e(() => Be(m, "src", td)), p(k, m);
    }, $$slots: { default: !0 } }), y(h), _e((k) => {
      Be(g, "aria-label", k), Ka(g, s()), Be(g, "min", c());
    }, [() => Ve(l, "$translate", r)("system.quantity")]), Yl("blur", g, function(k) {
      const x = k.target, m = parseInt(x.value);
      o()(isNaN(m) ? c() : Math.max(m, c()));
    }), p(n, h);
    var f = nt(u);
    return a(), f;
  }
  function Ef(n, t) {
    n.target === n.currentTarget && t()();
  }
  Ze(yl, { value: {}, onChange: {}, min: {} }, [], [], !0);
  var Rf = $('<div class="kaching-bundles"><div class="kaching-bundles__choose-multiple-gifts-modal" role="none"><div class="kaching-bundles__choose-multiple-gifts-modal__content"><!></div></div></div>');
  function zd(n, t) {
    tt(t, !0);
    const r = _(t, "dealBlock", 7), a = _(t, "multipleGiftsSelector", 7), s = _(t, "products", 23, () => []), o = _(t, "initialSelectedGifts", 7), c = _(t, "isOpen", 7), l = _(t, "onConfirm", 7), i = _(t, "onClose", 7);
    var u = { get dealBlock() {
      return r();
    }, set dealBlock(f) {
      r(f), v();
    }, get multipleGiftsSelector() {
      return a();
    }, set multipleGiftsSelector(f) {
      a(f), v();
    }, get products() {
      return s();
    }, set products(f = []) {
      s(f), v();
    }, get initialSelectedGifts() {
      return o();
    }, set initialSelectedGifts(f) {
      o(f), v();
    }, get isOpen() {
      return c();
    }, set isOpen(f) {
      c(f), v();
    }, get onConfirm() {
      return l();
    }, set onConfirm(f) {
      l(f), v();
    }, get onClose() {
      return i();
    }, set onClose(f) {
      i(f), v();
    } }, h = ze(), b = ve(h), g = (f) => {
      ml(f, { target: "body", children: (k, x) => {
        var m = Rf(), M = w(m);
        M.__click = [Ef, i];
        var C = w(M);
        bo(w(C), { get dealBlock() {
          return r();
        }, get multipleGiftsSelector() {
          return a();
        }, get products() {
          return s();
        }, get initialSelectedGifts() {
          return o();
        }, get onConfirm() {
          return l();
        }, get onClose() {
          return i();
        } }), y(C), y(M), y(m), _e((V) => Ot(M, V), [() => (function(V) {
          var D;
          return _n({ "kaching-choose-multiple-gifts-overlay-color": We(((D = V.chooseMultipleGiftsModal) == null ? void 0 : D.overlayColor) || zp) });
        })(r())]), p(k, m);
      }, $$slots: { default: !0 } });
    };
    return G(b, (f) => {
      c() && f(g);
    }), p(n, h), nt(u);
  }
  Gn(["click"]), Ze(zd, { dealBlock: {}, multipleGiftsSelector: {}, products: {}, initialSelectedGifts: {}, isOpen: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var Nf = Dn('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 5.33337V10.6667M5.33398 8.00004H10.6673M14.6673 8.00004C14.6673 11.6819 11.6825 14.6667 8.00065 14.6667C4.31875 14.6667 1.33398 11.6819 1.33398 8.00004C1.33398 4.31814 4.31875 1.33337 8.00065 1.33337C11.6825 1.33337 14.6673 4.31814 14.6673 8.00004Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function $d(n) {
    p(n, Nf());
  }
  Ze($d, {}, [], [], !0);
  var Qf = $('<img alt="" class="kaching-bundles__multiple-gifts-selector__photo"/>'), Wf = $('<span class="kaching-bundles__multiple-gifts-selector__photo-count"> </span>'), Uf = $('<div class="kaching-bundles__multiple-gifts-selector__photos"><!> <!></div>'), Hf = $('<img alt="" class="kaching-bundles__free-gift__image"/>'), Zf = $('<div class="kaching-bundles__free-gift__image"></div>'), Jf = $('<span class="kaching-bundles__free-gift__text"><!></span>'), Yf = $('<span class="kaching-bundles__free-gift__add-button"><!></span>'), Kf = $('<div class="kaching-bundles__free-gift__full-price"><!></div>'), Xf = $('<div class="kaching-bundles__multiple-gifts-selector kaching-bundles__free-gift"><!> <div class="kaching-bundles__free-gift__main"><!> <span class="kaching-bundles__free-gift__content"><!> <!></span></div> <!> <!></div>');
  function Dd(n, t) {
    tt(t, !0);
    const r = () => Ve(f, "$formatPrice", s), a = () => Ve(k, "$translate", s), [s, o] = mt();
    let c = _(t, "dealBlock", 7), l = _(t, "multipleGiftsSelector", 7), i = _(t, "selectedVariants", 7), u = _(t, "otherProducts", 7), h = _(t, "onConfirm", 7), b = Ge(!1);
    const g = d(() => (l().products || []).flatMap((Q) => {
      const U = Kt(Q.id), X = u().find((J) => J.id === U);
      if (!X || !X.availableForSale) return [];
      const ne = Pr(X);
      if (Q.variantGIDs && Q.variantGIDs.length > 0) {
        const J = Q.variantGIDs.map(Kt);
        return { ...ne, variants: ne.variants.filter((F) => J.includes(F.id)) };
      }
      return ne;
    })), f = pn(), k = zt(), x = On(), m = d(() => wo({ dealBlock: c(), imageSize: l().imageSize })), M = d(() => {
      if (l().mediaImageGID) return Ve(x, "$getMediaImageUrl", s)(l().mediaImageGID);
    }), C = d(() => l().showProductPhotos === !0), V = d(() => i().flatMap((Q) => Array.from({ length: Q.quantity }, () => Q.variant.image || Q.product.image)).filter((Q) => !!Q)), D = d(() => e(V).slice(0, 3)), A = d(() => e(V).length - e(D).length), H = d(() => i().reduce((Q, U) => Q + U.quantity, 0)), ee = d(() => e(H) >= l().maxQuantity), I = d(() => (function(Q, U) {
      if (!U.length) return 0;
      let X = U.reduce((ne, J) => ne + J.fullPrice * J.quantity, 0);
      return U.some((ne) => ne.variant.compareAtPrice) && Q.useProductCompareAtPrice && (X = Math.max(X, U.reduce((ne, J) => ne + (J.variant.compareAtPrice || 0), 0))), X;
    })(c(), i())), Z = d(() => new Map((l().products || []).flatMap((Q) => {
      const U = u().find((X) => X.id === Kt(Q.id));
      return U ? [[U.id, U]] : [];
    }))), B = d(() => i().flatMap((Q) => Array.from({ length: Q.quantity }, () => Q.product.title))), E = d(() => bn({ priceFormatter: r(), product: void 0, products: e(Z), selectedProductTitles: e(B), totalFullPrice: e(I), totalDiscountedPrice: 0, quantity: e(H), unitQuantity: null })), ue = d(() => e(ee) ? e(E)(a()(l().textAfterSelection)) : e(E)(a()(l().textBeforeSelection)));
    var z = { get dealBlock() {
      return c();
    }, set dealBlock(Q) {
      c(Q), v();
    }, get multipleGiftsSelector() {
      return l();
    }, set multipleGiftsSelector(Q) {
      l(Q), v();
    }, get selectedVariants() {
      return i();
    }, set selectedVariants(Q) {
      i(Q), v();
    }, get otherProducts() {
      return u();
    }, set otherProducts(Q) {
      u(Q), v();
    }, get onConfirm() {
      return h();
    }, set onConfirm(Q) {
      h(Q), v();
    } }, N = Xf(), S = w(N);
    {
      let Q = d(() => {
        var U;
        return (U = e(ue)) == null ? void 0 : U.replace(/<[^>]*>/g, "");
      });
      Xt(S, { element: "span", class: "kaching-bundles__multiple-gifts-selector__clickable-overlay", get "aria-label"() {
        return e(Q);
      }, onclick: () => te(b, !0) });
    }
    var P = O(S, 2), L = w(P), j = (Q) => {
      var U = Uf(), X = w(U);
      At(X, 17, () => e(D), qr, (F, ae) => {
        var ie = Qf();
        _e(() => Be(ie, "src", e(ae))), p(F, ie);
      });
      var ne = O(X, 2), J = (F) => {
        var ae = Wf(), ie = w(ae);
        y(ae), _e(() => {
          var ke;
          return kt(ie, `+${(ke = e(A)) != null ? ke : ""}`);
        }), p(F, ae);
      };
      G(ne, (F) => {
        e(A) > 0 && F(J);
      }), y(U), p(Q, U);
    }, Y = (Q) => {
      var U = ze(), X = ve(U), ne = (F) => {
        var ae = Hf();
        _e(() => {
          Be(ae, "src", e(M)), Be(ae, "height", l().imageSize || 0);
        }), p(F, ae);
      }, J = (F) => {
        var ae = ze(), ie = ve(ae), ke = (re) => {
          var pe = Zf();
          let ge;
          _e((me) => ge = Ot(pe, "", ge, me), [() => {
            var me;
            return { height: `${(me = l().imageSize) != null ? me : ""}px` };
          }]), p(re, pe);
        };
        G(ie, (re) => {
          l().imageSize && re(ke);
        }, !0), p(F, ae);
      };
      G(X, (F) => {
        e(M) ? F(ne) : F(J, !1);
      }, !0), p(Q, U);
    };
    G(L, (Q) => {
      e(C) && e(D).length > 0 ? Q(j) : Q(Y, !1);
    });
    var de = O(L, 2), T = w(de), q = (Q) => {
      var U = ze();
      lt(ve(U), () => e(ue), (X) => {
        var ne = Jf();
        Le(w(ne), () => e(ue)), y(ne), p(X, ne);
      }), p(Q, U);
    };
    G(T, (Q) => {
      e(ue) && Q(q);
    });
    var se = O(T, 2), le = (Q) => {
      var U = Yf();
      $d(w(U)), y(U), p(Q, U);
    };
    G(se, (Q) => {
      e(ee) || Q(le);
    }), y(de), y(P);
    var W = O(P, 2), oe = (Q) => {
      var U = ze();
      lt(ve(U), () => e(I), (X) => {
        var ne = Kf();
        Le(w(ne), () => r()(e(I))), y(ne), p(X, ne);
      }), p(Q, U);
    };
    G(W, (Q) => {
      l().showPrice && e(I) > 0 && Q(oe);
    }), zd(O(W, 2), { get dealBlock() {
      return c();
    }, get multipleGiftsSelector() {
      return l();
    }, get isOpen() {
      return e(b);
    }, get products() {
      return e(g);
    }, get initialSelectedGifts() {
      return i();
    }, get onConfirm() {
      return h();
    }, onClose: () => te(b, !1) }), y(N), _e(() => {
      Be(N, "data-multiple-gifts-selector-id", l().id), Ot(N, e(m));
    }), p(n, N);
    var K = nt(z);
    return o(), K;
  }
  Ze(Dd, { dealBlock: {}, multipleGiftsSelector: {}, selectedVariants: {}, otherProducts: {}, onConfirm: {} }, [], [], !0);
  var ev = $('<div class="kaching-bundles__free-gift__divider"></div>'), tv = $("<!> <!>", 1);
  function Gi(n, t) {
    tt(t, !0);
    let r = _(t, "dealBlock", 7), a = _(t, "multipleGiftsSelectors", 7), s = _(t, "sellingPlan", 7), o = _(t, "otherProducts", 7), c = _(t, "onChange", 7), l = Ge(gt({})), i = d(() => a().filter((g) => !g.applyOnlyForSubscriptions || s()));
    function u(g, f) {
      const k = a().find((x) => x.id === g);
      k && (f.reduce((x, m) => x + m.quantity, 0) > k.maxQuantity || (e(l)[g] = f));
    }
    Ye(() => {
      const g = new Set(e(i).map((k) => k.id)), f = Object.entries(e(l)).filter(([k]) => g.has(k)).flatMap(([k, x]) => {
        const m = e(i).find((C) => C.id === k), M = (m == null ? void 0 : m.includeInCompareAt) === !0;
        return x.map((C) => ({ id: C.id, quantity: C.quantity, variant: C.variant, product: C.product, fullPrice: C.fullPrice, includeInCompareAt: M }));
      });
      c()(f);
    });
    var h = { get dealBlock() {
      return r();
    }, set dealBlock(g) {
      r(g), v();
    }, get multipleGiftsSelectors() {
      return a();
    }, set multipleGiftsSelectors(g) {
      a(g), v();
    }, get sellingPlan() {
      return s();
    }, set sellingPlan(g) {
      s(g), v();
    }, get otherProducts() {
      return o();
    }, set otherProducts(g) {
      o(g), v();
    }, get onChange() {
      return c();
    }, set onChange(g) {
      c(g), v();
    } }, b = ze();
    return At(ve(b), 19, () => e(i), (g) => g.id, (g, f, k) => {
      var x = tv(), m = ve(x);
      {
        let V = d(() => e(l)[e(f).id] || []);
        Dd(m, { get dealBlock() {
          return r();
        }, get multipleGiftsSelector() {
          return e(f);
        }, get selectedVariants() {
          return e(V);
        }, onConfirm: u, get otherProducts() {
          return o();
        } });
      }
      var M = O(m, 2), C = (V) => {
        p(V, ev());
      };
      G(M, (V) => {
        e(k) < e(i).length - 1 && V(C);
      }), p(g, x);
    }), p(n, b), nt(h);
  }
  Ze(Gi, { dealBlock: {}, multipleGiftsSelectors: {}, sellingPlan: {}, otherProducts: {}, onChange: {} }, [], [], !0);
  const Do = (n, t) => n.unlockAtBarOnly ? t === n.unlockAtBar : t >= n.unlockAtBar, Td = (n, t) => !!n.applyOnlyForSubscriptions && !t;
  var nv = Dn('<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.584 21H42.834V14C42.834 6.279 36.555 0 28.834 0C21.113 0 14.834 6.279 14.834 14V21H13.084C10.1907 21 7.83398 23.3543 7.83398 26.25V50.75C7.83398 53.6457 10.1907 56 13.084 56H44.584C47.4773 56 49.834 53.6457 49.834 50.75V26.25C49.834 23.3543 47.4773 21 44.584 21ZM19.5007 14C19.5007 8.85267 23.6867 4.66667 28.834 4.66667C33.9813 4.66667 38.1673 8.85267 38.1673 14V21H19.5007V14ZM31.1673 39.018V44.3333C31.1673 45.6213 30.1243 46.6667 28.834 46.6667C27.5436 46.6667 26.5007 45.6213 26.5007 44.3333V39.018C25.1123 38.2083 24.1673 36.7197 24.1673 35C24.1673 32.4263 26.2603 30.3333 28.834 30.3333C31.4076 30.3333 33.5007 32.4263 33.5007 35C33.5007 36.7197 32.5557 38.2083 31.1673 39.018Z" fill="currentColor" transform="translate(21.5, 22)"></path></svg>');
  function Vd(n) {
    p(n, nv());
  }
  Ze(Vd, {}, [], [], !0);
  var rv = $('<img alt="" class="kaching-bundles__deal-bar-progressive-gift__image"/>'), av = $('<img class="kaching-bundles__deal-bar-progressive-gift__image kaching-bundles__deal-bar-progressive-gift__image--locked-product"/>'), iv = $('<span class="kaching-bundles__deal-bar-progressive-gift__lock-icon kaching-bundles__deal-bar-progressive-gift__image"><!></span>'), lv = $('<img class="kaching-bundles__deal-bar-progressive-gift__image"/>'), sv = $('<span class="kaching-bundles__deal-bar-progressive-gift__text"><!></span>'), ov = $('<span class="kaching-bundles__deal-bar-progressive-gift__text"><!></span>'), cv = $('<span class="kaching-bundles__deal-bar-progressive-gift__label-crossed-out"><!></span>'), uv = $('<span class="kaching-bundles__deal-bar-progressive-gift__label"><!> <!></span>'), dv = $('<div><div class="kaching-bundles__deal-bar-progressive-gift__main"><!> <div class="kaching-bundles__deal-bar-progressive-gift__content"><!> <!></div></div> <!></div>');
  function Ad(n, t) {
    tt(t, !0);
    const r = () => Ve(M, "$config", o), a = () => Ve(k, "$translate", o), s = () => Ve(m, "$getMediaImageUrl", o), [o, c] = mt(), l = _(t, "progressiveGifts", 7), i = _(t, "gift", 7), u = _(t, "product", 7), h = _(t, "selectedDealBarIndex", 7), b = _(t, "sellingPlan", 7), g = _(t, "selected", 7), f = _(t, "onChange", 7), k = zt(), x = pn(), m = On(), M = mn(), C = d(() => i().differentVariantsEnabled), V = d(() => {
      var W;
      return u() ? i().variantGIDs ? i().variantGIDs.map(Kt) : (W = u()) == null ? void 0 : W.variants.map((oe) => oe.id) : null;
    }), D = d(() => {
      if (u()) return { ...u(), variants: u().variants.filter((W) => (r().preview || W.availableForSale) && (!e(V) || e(V).includes(W.id))) };
    });
    let A = Ge(gt([]));
    const H = d(() => (function(W, oe, K) {
      return W.length > 0 ? W : oe != null && oe.availableForSale && oe.variants.length > 0 ? Array.from({ length: K }, () => oe.variants[0].id) : [];
    })(e(A), e(D), i().quantity)), ee = d(() => u() && e(H).length > 0 ? e(H).map((W) => u().variants.find((oe) => oe.id === W)).filter((W) => W !== void 0) : []), I = d(() => {
      var W;
      return bn({ priceFormatter: Ve(x, "$formatPrice", o), product: u(), totalFullPrice: ((W = e(ee)) == null ? void 0 : W.reduce((oe, K) => {
        var Q;
        return oe + ((Q = K == null ? void 0 : K.price) != null ? Q : 0);
      }, 0)) || 0, totalDiscountedPrice: 0, quantity: i().quantity, unitQuantity: Sr(e(ee).map((oe) => ({ variant: oe, quantity: 1 }))) });
    }), Z = d(() => e(I)(a()(i().title))), B = d(() => e(I)(a()(i().lockedTitle))), E = d(() => e(I)(a()(i().label))), ue = d(() => e(I)(a()(i().labelCrossedOut))), z = d(() => h() === null || !Do(i(), h() + 1) || Td(i(), b())), N = d(() => {
      var W, oe, K;
      return i().giftType === "shipping" ? Po : ((oe = (W = e(ee)) == null ? void 0 : W[0]) == null ? void 0 : oe.image) || ((K = u()) == null ? void 0 : K.image);
    }), S = d(() => i().mediaImageGID ? s()(i().mediaImageGID) : e(N)), P = d(() => l().dealBarStyle && s()(l().dealBarStyle.lockedMediaImageGID)), L = d(() => l().showLockedGiftProducts && !e(P)), j = d(() => e(L) && !!e(S));
    Ye(() => {
      if (g()) if (u() && e(ee) && !e(z)) {
        const W = Object.values(e(ee).reduce((oe, K) => (oe[K.id] ? oe[K.id].quantity += 1 : oe[K.id] = { variant: K, quantity: 1 }, oe), {}));
        en(() => f()({ product: u(), variants: W }));
      } else en(() => f()(void 0));
      else en(() => f()(void 0));
    }), dr(() => {
      i().productGID, te(A, [], !0);
    }), Ye(() => {
      e(z) && e(S) && (new Image().src = e(S));
    });
    const Y = d(() => {
      var W;
      return i().giftType === "product" && !((W = u()) != null && W.availableForSale);
    });
    var de = { get progressiveGifts() {
      return l();
    }, set progressiveGifts(W) {
      l(W), v();
    }, get gift() {
      return i();
    }, set gift(W) {
      i(W), v();
    }, get product() {
      return u();
    }, set product(W) {
      u(W), v();
    }, get selectedDealBarIndex() {
      return h();
    }, set selectedDealBarIndex(W) {
      h(W), v();
    }, get sellingPlan() {
      return b();
    }, set sellingPlan(W) {
      b(W), v();
    }, get selected() {
      return g();
    }, set selected(W) {
      g(W), v();
    }, get onChange() {
      return f();
    }, set onChange(W) {
      f(W), v();
    } }, T = ze(), q = ve(T), se = (W) => {
      var oe = ze(), K = ve(oe), Q = (U) => {
        var X = dv();
        let ne;
        var J = w(X), F = w(J), ae = ($e) => {
          var Ce = ze(), Te = ve(Ce), R = (Ie) => {
            var be = rv();
            _e(() => Be(be, "src", e(P))), p(Ie, be);
          }, xe = (Ie) => {
            var be = ze(), ye = ve(be), qe = (Me) => {
              var Ae = av();
              _e(() => {
                var Oe, je;
                Be(Ae, "src", e(S)), Be(Ae, "alt", (je = (Oe = u()) == null ? void 0 : Oe.title) != null ? je : "");
              }), p(Me, Ae);
            }, De = (Me) => {
              var Ae = ze(), Oe = ve(Ae), je = (Ke) => {
                var Ue = iv();
                Vd(w(Ue)), y(Ue), p(Ke, Ue);
              };
              G(Oe, (Ke) => {
                e(L) || Ke(je);
              }, !0), p(Me, Ae);
            };
            G(ye, (Me) => {
              e(j) ? Me(qe) : Me(De, !1);
            }, !0), p(Ie, be);
          };
          G(Te, (Ie) => {
            e(P) ? Ie(R) : Ie(xe, !1);
          }), p($e, Ce);
        }, ie = ($e) => {
          var Ce = ze(), Te = ve(Ce), R = (xe) => {
            var Ie = lv();
            _e(() => {
              var be, ye;
              Be(Ie, "src", e(S)), Be(Ie, "alt", (ye = (be = u()) == null ? void 0 : be.title) != null ? ye : "");
            }), p(xe, Ie);
          };
          G(Te, (xe) => {
            e(S) && xe(R);
          }, !0), p($e, Ce);
        };
        G(F, ($e) => {
          e(z) ? $e(ae) : $e(ie, !1);
        });
        var ke = O(F, 2), re = w(ke), pe = ($e) => {
          var Ce = sv();
          Le(w(Ce), () => e(B)), y(Ce), p($e, Ce);
        }, ge = ($e) => {
          var Ce = ze(), Te = ve(Ce), R = (xe) => {
            var Ie = ov();
            Le(w(Ie), () => e(Z)), y(Ie), p(xe, Ie);
          };
          G(Te, (xe) => {
            e(Z) && xe(R);
          }, !0), p($e, Ce);
        };
        G(re, ($e) => {
          e(z) && !e(L) ? $e(pe) : $e(ge, !1);
        });
        var me = O(re, 2), ce = ($e) => {
          var Ce = ze();
          At(ve(Ce), 17, () => ({ length: e(C) ? i().quantity : 1 }), qr, (Te, R, xe) => {
            var Ie = ze(), be = ve(Ie), ye = (qe) => {
              {
                let De = d(() => e(C) ? xe + 1 : void 0);
                Hn(qe, { get product() {
                  return e(D);
                }, get selectedVariantId() {
                  return e(H)[xe];
                }, get number() {
                  return e(De);
                }, forceDropdown: !0, onChange: (Me) => (function(Ae, Oe) {
                  e(C) ? te(A, [...e(H).slice(0, Oe), Ae, ...e(H).slice(Oe + 1)], !0) : te(A, Array.from({ length: i().quantity }, () => Ae), !0);
                })(Me, xe) });
              }
            };
            G(be, (qe) => {
              e(H)[xe] !== void 0 && qe(ye);
            }), p(Te, Ie);
          }), p($e, Ce);
        };
        G(me, ($e) => {
          g() && !e(z) && e(D) && e(D).variants.length > 1 && e(H).length > 0 && $e(ce);
        }), y(ke), y(J);
        var fe = O(J, 2), Fe = ($e) => {
          var Ce = ze(), Te = ve(Ce), R = (xe) => {
            var Ie = uv(), be = w(Ie), ye = (Me) => {
              var Ae = ze();
              Le(ve(Ae), () => e(E)), p(Me, Ae);
            };
            G(be, (Me) => {
              e(E) && Me(ye);
            });
            var qe = O(be, 2), De = (Me) => {
              var Ae = cv();
              Le(w(Ae), () => e(ue)), y(Ae), p(Me, Ae);
            };
            G(qe, (Me) => {
              e(ue) && Me(De);
            }), y(Ie), p(xe, Ie);
          };
          G(Te, (xe) => {
            e(z) && !l().showLockedGiftLabels || xe(R);
          }), p($e, Ce);
        };
        G(fe, ($e) => {
          (e(E) || e(ue)) && $e(Fe);
        }), y(X), _e(($e) => ne = Nt(X, 1, "kaching-bundles__deal-bar-progressive-gift", null, ne, $e), [() => ({ "kaching-bundles__deal-bar-progressive-gift--locked": e(z), "kaching-bundles__deal-bar-progressive-gift--out-of-stock": r().preview && e(Y) })]), p(U, X);
      };
      G(K, (U) => {
        var X;
        (u() && ((X = e(ee)) != null && X.length) || i().giftType === "shipping") && U(Q);
      }), p(W, oe);
    };
    G(q, (W) => {
      e(z) && l().hideLockedGifts || W(se);
    }), p(n, T);
    var le = nt(de);
    return c(), le;
  }
  Ze(Ad, { progressiveGifts: {}, gift: {}, product: {}, selectedDealBarIndex: {}, sellingPlan: {}, selected: {}, onChange: {} }, [], [], !0);
  var gv = $('<div class="kaching-bundles__deal-bar-progressive-gifts"></div>');
  function Oi(n, t) {
    tt(t, !0);
    const [r, a] = mt(), s = _(t, "progressiveGifts", 7), o = _(t, "dealBlock", 7), c = _(t, "dealBar", 7), l = _(t, "otherProducts", 7), i = _(t, "selectedDealBarIndex", 7), u = _(t, "sellingPlan", 7), h = _(t, "selected", 7), b = _(t, "onChange", 7), g = d(() => o().dealBars.findIndex((I) => I.id === c().id)), f = mn();
    let k = Ge(gt({}));
    const x = d(() => {
      var I, Z;
      return ((B) => B ? _n({ "kaching-deal-bar-progressive-gift-image-size": B.imageSize + "px", "kaching-deal-bar-progressive-gift-corner-radius": B.cornerRadius + "px", "kaching-deal-bar-progressive-gift-label-background-color": We(B.labelBackgroundColor), "kaching-deal-bar-progressive-gift-label-text-color": We(B.labelTextColor), "kaching-deal-bar-progressive-gift-label-text-size": B.labelTextSize + "px", "kaching-deal-bar-progressive-gift-text-color": We(B.textColor), "kaching-deal-bar-progressive-gift-selected-text-color": We(B.selectedTextColor), "kaching-deal-bar-progressive-gift-text-size": B.textSize + "px", "kaching-deal-bar-progressive-gift-locked-label-background-color": We(B.lockedLabelBackgroundColor), "kaching-deal-bar-progressive-gift-locked-label-text-color": We(B.lockedLabelTextColor), "kaching-deal-bar-progressive-gift-locked-label-text-size": B.lockedLabelTextSize + "px", "kaching-deal-bar-progressive-gift-locked-text-color": We(B.lockedTextColor), "kaching-deal-bar-progressive-gift-locked-text-size": B.lockedTextSize + "px", "kaching-deal-bar-progressive-gift-locked-icon-color": We(B.lockedIconColor) }) : "")((Z = (I = o().progressiveGifts) == null ? void 0 : I.dealBarStyle) != null ? Z : null);
    });
    function m() {
      const I = Object.entries(e(k)).map(([Z, B]) => ({ id: Z, variants: B.variants, product: B.product }));
      b()(I);
    }
    const M = d(() => {
      var I, Z, B;
      return (B = (Z = (I = s()) == null ? void 0 : I.gifts) == null ? void 0 : Z.filter((E) => Do(E, e(g) + 1))) != null ? B : [];
    }), C = d(() => e(M).flatMap((I) => {
      const Z = I.giftType === "product" && I.productGID ? l().find((E) => E.id === Kt(I.productGID)) : void 0;
      if (!Ve(f, "$config", r).preview && I.giftType === "product" && !(Z != null && Z.availableForSale)) return [];
      const B = Z && Pr(Z);
      return { gift: I, product: B };
    }));
    Ye(() => {
      const I = new Set(e(M).map((B) => B.id)), Z = Object.keys(e(k)).filter((B) => !I.has(B));
      if (Z.length) {
        for (const B of Z) delete e(k)[B];
        h() && m();
      }
    });
    var V = { get progressiveGifts() {
      return s();
    }, set progressiveGifts(I) {
      s(I), v();
    }, get dealBlock() {
      return o();
    }, set dealBlock(I) {
      o(I), v();
    }, get dealBar() {
      return c();
    }, set dealBar(I) {
      c(I), v();
    }, get otherProducts() {
      return l();
    }, set otherProducts(I) {
      l(I), v();
    }, get selectedDealBarIndex() {
      return i();
    }, set selectedDealBarIndex(I) {
      i(I), v();
    }, get sellingPlan() {
      return u();
    }, set sellingPlan(I) {
      u(I), v();
    }, get selected() {
      return h();
    }, set selected(I) {
      h(I), v();
    }, get onChange() {
      return b();
    }, set onChange(I) {
      b(I), v();
    } }, D = ze(), A = ve(D), H = (I) => {
      var Z = gv();
      At(Z, 21, () => e(C), ({ gift: B, product: E }) => B.id, (B, E) => {
        let ue = () => e(E).gift;
        Ad(B, { get selectedDealBarIndex() {
          return i();
        }, get selected() {
          return h();
        }, get gift() {
          return ue();
        }, get product() {
          return e(E).product;
        }, get progressiveGifts() {
          return s();
        }, get sellingPlan() {
          return u();
        }, onChange: (z) => (function(N, S) {
          S ? e(k)[N] = S : delete e(k)[N], h() && m();
        })(ue().id, z) });
      }), y(Z), _e(() => Ot(Z, e(x))), p(I, Z);
    };
    G(A, (I) => {
      var Z;
      o().progressiveGiftsEnabled && ((Z = s()) == null ? void 0 : Z.layout) === "deal-bar" && e(C).length > 0 && I(H);
    }), p(n, D);
    var ee = nt(V);
    return a(), ee;
  }
  Ze(Oi, { progressiveGifts: {}, dealBlock: {}, dealBar: {}, otherProducts: {}, selectedDealBarIndex: {}, sellingPlan: {}, selected: {}, onChange: {} }, [], [], !0);
  var hv = Dn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function qd(n) {
    p(n, hv());
  }
  Ze(qd, {}, [], [], !0);
  var pv = Dn('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3307 4L5.9974 11.3333L2.66406 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Gd(n) {
    p(n, pv());
  }
  Ze(Gd, {}, [], [], !0);
  var bv = Dn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>');
  function Od(n) {
    p(n, bv());
  }
  Ze(Od, {}, [], [], !0);
  var fv = Dn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Fd(n) {
    p(n, fv());
  }
  Ze(Fd, {}, [], [], !0);
  var vv = Dn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2787 3.45332C11.5092 2.98638 11.6245 2.75291 11.7809 2.67831C11.917 2.61341 12.0752 2.61341 12.2113 2.67831C12.3677 2.75291 12.483 2.98638 12.7135 3.45332L14.9002 7.88328C14.9682 8.02113 15.0022 8.09006 15.0519 8.14358C15.096 8.19096 15.1488 8.22935 15.2074 8.25662C15.2736 8.28742 15.3497 8.29854 15.5018 8.32077L20.3931 9.03571C20.9082 9.11099 21.1657 9.14863 21.2849 9.27444C21.3886 9.38389 21.4373 9.5343 21.4176 9.68377C21.3949 9.85558 21.2085 10.0372 20.8356 10.4004L17.2975 13.8464C17.1873 13.9538 17.1321 14.0076 17.0965 14.0715C17.065 14.128 17.0448 14.1902 17.037 14.2545C17.0282 14.3271 17.0412 14.403 17.0672 14.5547L17.9021 19.4221C17.9901 19.9355 18.0341 20.1922 17.9514 20.3445C17.8794 20.477 17.7514 20.57 17.6032 20.5975C17.4327 20.6291 17.2022 20.5078 16.7412 20.2654L12.3685 17.9658C12.2322 17.8942 12.1641 17.8584 12.0923 17.8443C12.0288 17.8318 11.9634 17.8318 11.8999 17.8443C11.8281 17.8584 11.76 17.8942 11.6237 17.9658L7.25102 20.2654C6.79001 20.5078 6.55951 20.6291 6.38907 20.5975C6.24078 20.57 6.11282 20.477 6.04083 20.3445C5.95809 20.1922 6.00212 19.9355 6.09017 19.4221L6.92498 14.5547C6.95101 14.403 6.96402 14.3271 6.95521 14.2545C6.94742 14.1902 6.92721 14.128 6.8957 14.0715C6.86012 14.0076 6.80497 13.9538 6.69468 13.8464L3.15665 10.4004C2.78376 10.0372 2.59731 9.85558 2.57462 9.68377C2.55488 9.5343 2.60365 9.38389 2.70734 9.27444C2.82653 9.14863 3.08407 9.11099 3.59914 9.03571L8.4904 8.32077C8.64252 8.29854 8.71857 8.28742 8.78481 8.25662C8.84346 8.22935 8.89626 8.19096 8.94028 8.14358C8.99 8.09006 9.02402 8.02113 9.09207 7.88328L11.2787 3.45332Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Ld(n) {
    p(n, vv());
  }
  Ze(Ld, {}, [], [], !0);
  var _v = Dn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function jd(n) {
    p(n, _v());
  }
  Ze(jd, {}, [], [], !0);
  const Ed = { checkmark: Gd, dot: Od, arrow: qd, star: Ld, heart: Fd, "thumbs-up": jd };
  var kv = $('<span class="kaching-bundles__highlights__icon"><img alt=""/></span>'), mv = $('<span class="kaching-bundles__highlights__icon"><!></span>'), xv = $('<div class="kaching-bundles__highlights__item"><!> <span class="kaching-bundles__highlights__text"><!></span></div>'), yv = $("<div></div>");
  function Va(n, t) {
    tt(t, !0);
    const [r, a] = mt(), s = _(t, "highlights", 7), o = _(t, "isSelected", 7), c = _(t, "replaceLiquid", 7), l = On(), i = zt(), u = d(() => s().items.map((D) => Ve(i, "$translate", r)(D)).map((D) => c() ? c()(D) : D).filter((D) => D !== "")), h = d(() => ((D) => _n({ "kaching-highlights-icon-color": We(D.iconColor), "kaching-highlights-text-color": We(D.textColor), "kaching-highlights-icon-size": D.size + 2 + "px", "kaching-highlights-text-size": D.size + "px" }))(s())), b = d(() => {
      var D;
      return (D = s().layout) != null ? D : "vertical";
    }), g = d(() => {
      var D;
      return (D = s().iconType) != null ? D : "checkmark";
    }), f = d(() => Ed[e(g)]), k = d(() => {
      var D;
      return e(g) === "custom" ? Ve(l, "$getMediaImageUrl", r)((D = s().customIconGID) != null ? D : null) : void 0;
    });
    var x = { get highlights() {
      return s();
    }, set highlights(D) {
      s(D), v();
    }, get isSelected() {
      return o();
    }, set isSelected(D) {
      o(D), v();
    }, get replaceLiquid() {
      return c();
    }, set replaceLiquid(D) {
      c(D), v();
    } }, m = ze(), M = ve(m), C = (D) => {
      var A = yv();
      let H;
      At(A, 21, () => e(u), qr, (ee, I) => {
        var Z = xv(), B = w(Z), E = (N) => {
          var S = kv(), P = w(S);
          y(S), _e(() => Be(P, "src", e(k))), p(N, S);
        }, ue = (N) => {
          var S = ze(), P = ve(S), L = (j) => {
            var Y = mv();
            tu(w(Y), () => e(f), (de, T) => {
              T(de, {});
            }), y(Y), p(j, Y);
          };
          G(P, (j) => {
            e(f) && j(L);
          }, !0), p(N, S);
        };
        G(B, (N) => {
          e(g) === "custom" && e(k) ? N(E) : N(ue, !1);
        });
        var z = O(B, 2);
        Le(w(z), () => e(I)), y(z), y(Z), p(ee, Z);
      }), y(A), _e((ee) => {
        H = Nt(A, 1, "kaching-bundles__highlights", null, H, ee), Ot(A, e(h));
      }, [() => ({ "kaching-bundles__highlights--horizontal": e(b) === "horizontal" })]), p(D, A);
    };
    G(M, (D) => {
      e(u).length > 0 && (!s().showOnlyWhenSelected || o()) && D(C);
    }), p(n, m);
    var V = nt(x);
    return a(), V;
  }
  function wv(n, t, r, a) {
    t()({ dealBarId: r().id, dealBarQuantity: a(r()), preselected: !1 });
  }
  Ze(Va, { highlights: {}, isSelected: {}, replaceLiquid: {} }, [], [], !0);
  var Pv = $('<img class="kaching-bundles__bar-image" alt=""/>'), Sv = $('<div class="kaching-bundles__bar-radio"></div>'), Bv = $('<span class="kaching-bundles__bar-title"><!></span>'), Cv = $('<span class="kaching-bundles__bar-label"><!></span>'), Iv = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), Mv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), zv = $('<div class="kaching-bundles__bar-price"><!></div>'), $v = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Dv = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), Tv = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), Vv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Av = $('<div class="kaching-bundles__bar-unit-price"><!> </div>'), qv = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--primary"><!> <!></div> <div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!></div>', 1), Gv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Ov = $("<!> <!>", 1), Fv = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <div class="kaching-bundles__bar-second-line"><!> <!></div></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), Lv = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), jv = $('<div class="kaching-bundles__bar-variant-selector-wrapper"><!> <!></div>'), Ev = $('<div class="kaching-bundles__bar-variants"><!> <!></div>'), Rv = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), Nv = $('<div><input type="radio"/> <!> <!></div>');
  function To(n, t) {
    tt(t, !0);
    const r = () => Ve(z, "$config", o), a = () => Ve(E, "$formatPrice", o), s = () => Ve(B, "$translate", o), [o, c] = mt();
    let l = _(t, "dealBlock", 7), i = _(t, "dealBar", 7), u = _(t, "product", 7), h = _(t, "otherProducts", 23, () => []), b = _(t, "complementaryProducts", 23, () => []), g = _(t, "customQuantity", 7, void 0), f = _(t, "currentVariantId", 7, void 0), k = _(t, "currentVariantSource", 7, void 0), x = _(t, "componentId", 7), m = _(t, "selected", 7, !1), M = _(t, "globalSellingPlan", 7, void 0), C = _(t, "selectedDealBarIndex", 7), V = _(t, "onProgressiveGiftsChange", 7), D = _(t, "onDealBarSelect", 7), A = _(t, "onDealBarDeselect", 7), H = _(t, "onVariantSelect", 7), ee = _(t, "onVariantsChange", 7), I = _(t, "onPersonalisationsChange", 7), Z = _(t, "personalisationInitialValues", 23, () => []);
    const B = zt(), E = pn(), ue = On(), z = mn();
    let N = Ge(gt([])), S = Ge(gt([])), P = Ge(gt([]));
    const L = d(() => l().priceRounding ? { perItem: l().showPricesPerItem, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), j = d(() => {
      var we, Xe;
      return l() && ((Xe = (we = l().defaultVariantsV2) == null ? void 0 : we.find((Ee) => Kt(Ee.productGID) === u().id && Ee.dealBarId === i().id)) == null ? void 0 : Xe.variantGIDs) || [];
    });
    let Y = d(() => se(i())), de = Ge(gt(se(i())));
    dr(() => {
      te(de, e(Y), !0);
    });
    const T = d(() => g() || e(de)), q = d(() => e(T) && (function(we) {
      return !we.differentVariantsEnabled || u().variants.length === 1 ? !1 : we.hideVariantPicker ? !0 : !(e(T) == 1 && !we.showVariantsForSingleQuantity);
    })(l()));
    function se(we) {
      return we.dealBarType === ft.Bxgy ? we.buyQuantity + we.getQuantity : Number(we.quantity);
    }
    let le, W = Ge(gt([])), oe = Ge(gt([])), K = !1;
    Ye(() => {
      const we = Wt(e(T), e(j), f());
      if (JSON.stringify(e(W)) !== JSON.stringify(we)) {
        const Xe = e(W).length === we.length;
        te(W, we, !0), e(oe).length === 0 ? te(oe, we, !0) : Xe ? r().featureFlags.preserve_variant_selections && l().differentVariantsEnabled && new Set(e(oe)).size !== 1 || r().featureFlags.propagate_picker_option_changes && k() === "bar" || te(oe, we, !0) : te(oe, (function(Ee, Je) {
          const vt = e(Q) ? null : Ee[Ee.length - 1];
          if (Ee.length < Je) {
            const ct = Je - Ee.length;
            return [...Ee, ...Array(ct).fill(vt)];
          }
          return Ee.slice(0, Je);
        })(e(oe), e(T)), !0);
      }
    }), Ye(() => {
      if (!r().featureFlags.propagate_picker_option_changes) return;
      const we = f(), Xe = k(), Ee = le;
      we && (le = we), Ee && we && Ee !== we && Xe !== "bar" && (r().featureFlags.preserve_variant_selections && l().differentVariantsEnabled && K || en(() => {
        te(oe, (function(Je, vt, ct) {
          const $t = e(ie).get(vt), rn = e(ie).get(ct);
          if (!$t || !rn) return Je;
          const Ft = rn.options.flatMap((Lt, dt) => Lt === $t.options[dt] ? [] : [dt]);
          if (Ft.length === 0) return Je;
          let Bt = !1;
          const Ut = Je.map((Lt) => {
            const dt = Lt != null ? e(ie).get(Lt) : void 0;
            if (!dt) return Lt;
            const at = [...dt.options];
            for (const Ct of Ft) at[Ct] = rn.options[Ct];
            const it = Nu(u().variants, at);
            return it && it.id !== Lt ? (Bt = !0, it.id) : Lt;
          });
          return Bt ? Ut : Je;
        })(e(oe), Ee, we), !0);
      }));
    });
    const Q = d(() => {
      var we;
      return (we = i().requireVariantSelectionEnabled) != null && we && !!e(q);
    });
    let U = !1;
    dr(() => {
      const we = !!e(q);
      we && !U && e(Q) && en(() => {
        te(oe, Wt(e(T), e(j), f()), !0);
      }), U = we;
    });
    const X = d(() => e(Q) ? Wt(e(T), e(j), f(), { fillUnselectedSlots: !0 }) : []), ne = d(() => e(oe).filter((we) => we != null)), J = d(() => e(Q) ? e(oe).map((we, Xe) => {
      var Ee;
      return (Ee = we != null ? we : e(X)[Xe]) != null ? Ee : null;
    }) : e(oe)), F = d(() => e(J).filter((we) => we != null)), ae = d(() => bt(e(F))), ie = d(() => new Map(u().variants.map((we) => [we.id, we])));
    let ke = Ge(void 0);
    const re = d(() => bl(u(), e(ae).map((we) => we.variant))), pe = d(() => {
      var we, Xe;
      return (i().sellingPlanEnabled || l().subscriptionsEnabled && ((we = l().subscriptions) == null ? void 0 : we.layout) === "link" && ((Xe = l().subscriptions) == null ? void 0 : Xe.subscribeByDefault)) && (!l().subscriptionsEnabled || !!M());
    }), ge = d(() => e(pe) ? vo(i(), e(re), e(ke)) : void 0), me = d(() => _o(e(ge), M(), e(re), u().requiresSellingPlan)), ce = d(() => (function(we, Xe, Ee, Je) {
      return Ee.map(({ variant: ct, quantity: $t }) => {
        let rn = (function(Bt, Ut) {
          var Lt;
          if (!Ut) return Bt.price;
          const dt = Bt.sellingPlans.find((at) => at.id === Ut.id);
          return dt && dt.perDeliveryPrice !== dt.price ? Math.max((Lt = dt.compareAtPrice) != null ? Lt : Bt.price, Bt.price) : Bt.price;
        })(ct, Je);
        const Ft = we.useProductCompareAtPrice || (Xe.dealBarType === void 0 || Xe.dealBarType === ft.QuantityBreak) && Xe.discountType === "default";
        return ct.compareAtPrice && Ft && (rn = Math.max(rn, ct.compareAtPrice)), rn * $t;
      }).reduce((ct, $t) => ct + $t, 0);
    })(l(), i(), e(ae), e(me))), fe = d(() => _l(e(ce), e(N), e(S))), Fe = d(() => Math.ceil(e(ce) / e(T))), $e = d(() => yo(e(T) === 1, e(fe), e(Fe))), Ce = d(() => l() && Ae(e(ae), e(me))), Te = d(() => e(ae)[0] && po(e(ae)[0].variant)), R = d(() => Sr(e(ae))), xe = d(() => e(R) ? e(Ce) / e(R) : null), Ie = d(() => bn({ priceFormatter: a(), product: u(), selectedVariants: e(ae), totalFullPrice: e(ce), totalCompareAtPrice: e(fe), totalDiscountedPrice: e(Ce), quantity: e(T), dealBar: i(), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: e(R), sellingPlan: e(me) })), be = d(() => e(Ie)(s()(i().title))), ye = d(() => e(Ie)(s()(i().subtitle))), qe = d(() => e(Ie)(s()(i().label))), De = d(() => fl(l(), i()).map((we) => $a(we, s(), e(Ie)))), Me = d(() => Da(e(De)));
    function Ae(we, Xe) {
      switch (i().dealBarType) {
        case void 0:
        case ft.QuantityBreak:
          return ld(i(), we, r().currencyRate, e(L), Xe, r().featureFlags.percentage_cents_rounding_workaround);
        case ft.Bxgy:
          return sd(i(), we, r().currencyRate, e(L), Xe);
      }
    }
    const Oe = d(() => Math.ceil(e(Ce) / e(T))), je = d(() => e(fe) > e(Ce)), Ke = d(() => r().featureFlags.variant_images && new Set(u().variants.map((we) => we.image).filter((we) => we)).size > 1), Ue = d(() => `${i().id}_${x()}`);
    function ot(we) {
      m() && (we.preventDefault(), we.stopPropagation(), A()());
    }
    function Wt(we, Xe, Ee, { fillUnselectedSlots: Je = !1 } = {}) {
      let vt = [];
      for (let ct = 0; ct < we; ct++) {
        let $t = Xe[ct];
        if (!$t && we > se(i()) && Xe.filter((rn) => rn).length === se(i()) && ($t = Xe[Xe.length - 1]), $t) {
          const rn = Kt($t);
          if (u().variants.find((Ft) => Ft.id == rn)) {
            vt.push(rn);
            continue;
          }
        }
        e(Q) ? vt.push(Je && Ee != null ? Ee : null) : Ee && vt.push(Ee);
      }
      return vt;
    }
    function bt(we) {
      return we.reduce((Xe, Ee) => {
        const Je = Xe.find(({ variant: vt }) => vt.id === Ee);
        if (Je) Je.quantity += 1;
        else {
          const vt = u().variants.find((ct) => ct.id === Ee);
          if (!vt) return Xe;
          Xe.push({ variant: vt, quantity: 1 });
        }
        return Xe;
      }, []);
    }
    Ya(() => {
      m() && D()({ dealBarId: i().id, dealBarQuantity: se(i()), preselected: !0 });
    });
    const qt = d(() => Ve(ue, "$getMediaImageUrl", o)(i().mediaImageGID) || kl);
    Ye(() => {
      m() && (e(oe), e(F), e(P), e(N), e(S), e(me), en(() => {
        (function() {
          if (!e(oe).length) return;
          const we = bt(e(ne)), Xe = e(Ce) + e(P).reduce((Ft, Bt) => Ft + Bt.discountedPrice, 0), Ee = e(N).reduce((Ft, Bt) => Bt.showPrice ? Ft + Bt.fullPrice : Ft, 0) + e(S).reduce((Ft, Bt) => Ft + Bt.fullPrice * Bt.quantity, 0), Je = e(ce) + e(P).reduce((Ft, Bt) => Ft + Bt.fullPrice, 0) + Ee, vt = Ae(e(ae), void 0), ct = u().sellingPlans.map((Ft) => ({ sellingPlanId: Ft.id, discountedPrice: Ae(e(ae), Ft) })), $t = { discountedPrice: Xe, fullPrice: Je, giftValue: Ee, discountedPricePerItem: e(Oe), fullPricePerItem: e(Fe), discountedPriceWithoutSellingPlan: vt, discountedPricesForSellingPlans: ct }, rn = e(ne).length;
          ee()({ variants: we, freeGifts: [...e(N), ...e(S)], upsells: e(P), dealBarSellingPlan: e(ge), pricing: $t, validation: { requiresItemSelection: e(Q), allItemsSelected: !e(Q) || rn >= e(T), missingItemsCount: e(Q) ? Math.max(0, e(T) - rn) : 0 } });
        })();
      }));
    });
    const nn = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? xl(i().showAsSoldOut) : "");
    var Pe = { get dealBlock() {
      return l();
    }, set dealBlock(we) {
      l(we), v();
    }, get dealBar() {
      return i();
    }, set dealBar(we) {
      i(we), v();
    }, get product() {
      return u();
    }, set product(we) {
      u(we), v();
    }, get otherProducts() {
      return h();
    }, set otherProducts(we = []) {
      h(we), v();
    }, get complementaryProducts() {
      return b();
    }, set complementaryProducts(we = []) {
      b(we), v();
    }, get customQuantity() {
      return g();
    }, set customQuantity(we = void 0) {
      g(we), v();
    }, get currentVariantId() {
      return f();
    }, set currentVariantId(we = void 0) {
      f(we), v();
    }, get currentVariantSource() {
      return k();
    }, set currentVariantSource(we = void 0) {
      k(we), v();
    }, get componentId() {
      return x();
    }, set componentId(we) {
      x(we), v();
    }, get selected() {
      return m();
    }, set selected(we = !1) {
      m(we), v();
    }, get globalSellingPlan() {
      return M();
    }, set globalSellingPlan(we = void 0) {
      M(we), v();
    }, get selectedDealBarIndex() {
      return C();
    }, set selectedDealBarIndex(we) {
      C(we), v();
    }, get onProgressiveGiftsChange() {
      return V();
    }, set onProgressiveGiftsChange(we) {
      V(we), v();
    }, get onDealBarSelect() {
      return D();
    }, set onDealBarSelect(we) {
      D(we), v();
    }, get onDealBarDeselect() {
      return A();
    }, set onDealBarDeselect(we) {
      A(we), v();
    }, get onVariantSelect() {
      return H();
    }, set onVariantSelect(we) {
      H(we), v();
    }, get onVariantsChange() {
      return ee();
    }, set onVariantsChange(we) {
      ee(we), v();
    }, get onPersonalisationsChange() {
      return I();
    }, set onPersonalisationsChange(we) {
      I(we), v();
    }, get personalisationInitialValues() {
      return Z();
    }, set personalisationInitialValues(we = []) {
      Z(we), v();
    } }, He = Nv();
    let ht;
    var ut = w(He);
    da(ut), ut.__change = [wv, D, i, se];
    var st = O(ut, 2);
    ai(st, { get for() {
      return e(Ue);
    }, get soldOut() {
      return i().showAsSoldOutEnabled;
    }, get borderHost() {
      return e(Me);
    }, children: (we, Xe) => {
      var Ee = Rv(), Je = ve(Ee);
      At(Je, 17, () => e(De), (pt) => pt.id, (pt, jt) => {
        ba(pt, { get badge() {
          return e(jt);
        }, get blockLayout() {
          return l().blockLayout;
        } });
      });
      var vt = O(Je, 2), ct = w(vt);
      Xt(ct, { element: "div", class: "kaching-bundles__bar-main", onclick: ot, children: (pt, jt) => {
        var Tt = Fv(), Bn = ve(Tt), Tn = (St) => {
          var tn = Pv();
          _e(() => Be(tn, "src", e(qt))), p(St, tn);
        }, xn = (St) => {
          p(St, Sv());
        };
        G(Bn, (St) => {
          i().mediaImageGID ? St(Tn) : St(xn, !1);
        });
        var Fn = O(Bn, 2), Zn = w(Fn), ar = w(Zn), fn = w(ar);
        lt(fn, () => e(be), (St) => {
          var tn = Bv();
          Le(w(tn), () => e(be)), y(tn), p(St, tn);
        });
        var Ht = O(fn, 2), on = (St) => {
          var tn = ze();
          lt(ve(tn), () => e(qe), (yn) => {
            var un = Cv();
            Le(w(un), () => e(qe)), y(un), p(yn, un);
          }), p(St, tn);
        };
        G(Ht, (St) => {
          e(qe) && St(on);
        }), y(ar);
        var Zt = O(ar, 2), an = w(Zt), Ln = (St) => {
          var tn = ze();
          lt(ve(tn), () => e(ye), (yn) => {
            var un = Iv();
            Le(w(un), () => e(ye)), y(un), p(yn, un);
          }), p(St, tn);
        };
        G(an, (St) => {
          e(ye) && St(Ln);
        });
        var dn = O(an, 2), En = (St) => {
          {
            let tn = d(() => {
              var yn, un;
              return (un = (yn = e(ae)) == null ? void 0 : yn[0]) == null ? void 0 : un.variant;
            });
            va(St, { get dealBlock() {
              return l();
            }, get variant() {
              return e(tn);
            } });
          }
        };
        G(dn, (St) => {
          e(q) || St(En);
        }), y(Zt), y(Zn);
        var Rn = O(Zn, 2), cn = w(Rn), Cn = (St) => {
          var tn = Tv(), yn = ve(tn), un = w(yn);
          lt(un, () => e(Oe), (Kn) => {
            Yr(Kn, { get amount() {
              return e(Oe);
            }, get showPricesPerItem() {
              return l().showPricesPerItem;
            }, get unitLabel() {
              return l().unitLabel;
            } });
          });
          var Fr = O(un, 2), Yn = (Kn) => {
            var vr = ze();
            lt(ve(vr), () => e($e), (or) => {
              var Nn = Mv();
              Le(w(Nn), () => a()(e($e))), y(Nn), _e((ir) => Be(Nn, "data-a11y-label", ir), [() => s()("system.original_price")]), p(or, Nn);
            }), p(Kn, vr);
          };
          G(Fr, (Kn) => {
            e(je) && Kn(Yn);
          }), y(yn);
          var Lr = O(yn, 2), jr = (Kn) => {
            var vr = Dv(), or = w(vr);
            lt(or, () => e(Ce), (In) => {
              var Xn = zv();
              Le(w(Xn), () => a()(e(Ce))), y(Xn), _e((Br) => Be(Xn, "data-a11y-label", Br), [() => s()("system.price")]), p(In, Xn);
            });
            var Nn = O(or, 2), ir = (In) => {
              var Xn = ze();
              lt(ve(Xn), () => e(fe), (Br) => {
                var Er = $v();
                Le(w(Er), () => a()(e(fe))), y(Er), _e((he) => Be(Er, "data-a11y-label", he), [() => s()("system.original_price")]), p(Br, Er);
              }), p(In, Xn);
            };
            G(Nn, (In) => {
              e(je) && In(ir);
            }), y(vr), p(Kn, vr);
          };
          G(Lr, (Kn) => {
            e(T) > 1 && Kn(jr);
          }), p(St, tn);
        }, Jn = (St) => {
          var tn = ze(), yn = ve(tn), un = (Yn) => {
            var Lr = qv(), jr = ve(Lr), Kn = w(jr);
            lt(Kn, () => e(Ce), (ir) => {
              {
                let In = d(() => l().showPricesPerItem ? e(Oe) : e(Ce));
                Yr(ir, { get amount() {
                  return e(In);
                }, get showPricesPerItem() {
                  return l().showPricesPerItem;
                }, get unitLabel() {
                  return l().unitLabel;
                } });
              }
            });
            var vr = O(Kn, 2), or = (ir) => {
              var In = ze();
              lt(ve(In), () => l().showPricesPerItem ? e($e) : e(fe), (Xn) => {
                var Br = Vv();
                Le(w(Br), () => a()(l().showPricesPerItem ? e($e) : e(fe))), y(Br), _e((Er) => Be(Br, "data-a11y-label", Er), [() => s()("system.original_price")]), p(Xn, Br);
              }), p(ir, In);
            };
            G(vr, (ir) => {
              e(je) && ir(or);
            }), y(jr);
            var Nn = O(jr, 2);
            lt(w(Nn), () => e(xe), (ir) => {
              var In = Av(), Xn = w(In);
              Le(Xn, () => a()(e(xe), { preserveDecimals: !0 }));
              var Br = O(Xn);
              y(In), _e(() => {
                var Er;
                return kt(Br, ` /
                    ${(Er = e(Te)) != null ? Er : ""}`);
              }), p(ir, In);
            }), y(Nn), p(Yn, Lr);
          }, Fr = (Yn) => {
            var Lr = Ov(), jr = ve(Lr);
            lt(jr, () => e(Ce), (or) => {
              {
                let Nn = d(() => l().showPricesPerItem ? e(Oe) : e(Ce));
                Yr(or, { get amount() {
                  return e(Nn);
                }, get showPricesPerItem() {
                  return l().showPricesPerItem;
                }, get unitLabel() {
                  return l().unitLabel;
                } });
              }
            });
            var Kn = O(jr, 2), vr = (or) => {
              var Nn = ze();
              lt(ve(Nn), () => l().showPricesPerItem ? e($e) : e(fe), (ir) => {
                var In = Gv();
                Le(w(In), () => a()(l().showPricesPerItem ? e($e) : e(fe))), y(In), _e((Xn) => Be(In, "data-a11y-label", Xn), [() => s()("system.original_price")]), p(ir, In);
              }), p(or, Nn);
            };
            G(Kn, (or) => {
              e(je) && or(vr);
            }), p(Yn, Lr);
          };
          G(yn, (Yn) => {
            e(xe) && !r().ignoreUnitPrice ? Yn(un) : Yn(Fr, !1);
          }, !0), p(St, tn);
        };
        G(cn, (St) => {
          l().showBothPrices ? St(Cn) : St(Jn, !1);
        }), y(Rn), y(Fn), p(pt, Tt);
      }, $$slots: { default: !0 } });
      var $t = O(ct, 2), rn = (pt) => {
        Va(pt, { get highlights() {
          return i().highlights;
        }, get isSelected() {
          return m();
        }, get replaceLiquid() {
          return e(Ie);
        } });
      };
      G($t, (pt) => {
        i().highlights && pt(rn);
      });
      var Ft = O($t, 2), Bt = (pt) => {
        var jt = Lv(), Tt = w(jt);
        {
          let Bn = d(() => e(ge) || e(re)[0]);
          Ta(Tt, { get sellingPlans() {
            return e(re);
          }, get selectedSellingPlan() {
            return e(Bn);
          }, onChange: (Tn) => {
            te(ke, Tn, !0);
          } });
        }
        y(jt), p(pt, jt);
      };
      G(Ft, (pt) => {
        m() && e(pe) && !i().sellingPlanGid && e(re).length > 1 && pt(Bt);
      });
      var Ut = O(Ft, 2), Lt = (pt) => {
        var jt = Ev(), Tt = w(jt);
        ha(Tt, { get product() {
          return u();
        } }), At(O(Tt, 2), 17, () => ({ length: e(T) }), qr, (Bn, Tn, xn) => {
          var Fn = jv(), Zn = w(Fn);
          {
            let fn = d(() => {
              var Zt;
              return (Zt = e(oe)[xn]) != null ? Zt : null;
            }), Ht = d(() => e(Q) ? s()("system.select_variant_placeholder") : void 0), on = d(() => e(T) > 1 ? xn + 1 : void 0);
            Hn(Zn, { get product() {
              return u();
            }, get selectedVariantId() {
              return e(fn);
            }, get placeholderText() {
              return e(Ht);
            }, get showImage() {
              return e(Ke);
            }, get number() {
              return e(on);
            }, onChange: (Zt) => (function(an, Ln) {
              const dn = [...e(oe)];
              dn[an] = Ln, te(oe, dn, !0), K = !0, fa(!1), m() && (H()({ variantId: Ln }), le = Ln);
            })(xn, Zt), onOptionChange: (Zt, an, Ln) => (function(dn, En, Rn, cn) {
              if (l().disableVariantOptionSync || dn !== 0) return;
              const Cn = En - 1, Jn = e(oe).map((St) => u().variants.find((tn) => tn.id === St)).filter((St) => St != null).slice(1);
              Jn.length !== 0 && Jn.every((St) => St.options[Cn] === cn) && te(oe, e(oe).map((St) => {
                const tn = u().variants.find((Fr) => Fr.id === St);
                if (!tn || tn.options[Cn] !== cn) return St;
                const yn = [...tn.options];
                yn[Cn] = Rn;
                const un = Nu(u().variants, yn);
                return un ? un.id : St;
              }), !0);
            })(xn, Zt, an, Ln) });
          }
          var ar = O(Zn, 2);
          {
            let fn = d(() => e(oe)[xn] != null ? e(ie).get(e(oe)[xn]) : void 0);
            va(ar, { get dealBlock() {
              return l();
            }, get variant() {
              return e(fn);
            } });
          }
          y(Fn), p(Bn, Fn);
        }), y(jt), p(pt, jt);
      };
      G(Ut, (pt) => {
        e(q) && pt(Lt);
      });
      var dt = O(Ut, 2), at = (pt) => {
        {
          let jt = d(() => se(i()));
          yl(pt, { get value() {
            return e(de);
          }, get min() {
            return e(jt);
          }, onChange: (Tt) => te(de, Tt, !0) });
        }
      };
      G(dt, (pt) => {
        m() && i().dealBarType === ft.QuantityBreak && i().quantitySelector && pt(at);
      });
      var it = O(dt, 2), Ct = (pt) => {
        ii(pt, { get product() {
          return u();
        }, get selectedVariantIds() {
          return e(F);
        }, get productPersonalisation() {
          return i().productPersonalisation;
        }, get quantity() {
          return e(Y);
        }, get addPersonalisationModal() {
          return l().addPersonalisationModal;
        }, get onPersonalisationsChange() {
          return I();
        }, get initialValues() {
          return Z();
        } });
      };
      G(it, (pt) => {
        m() && i().productPersonalisation && (l().blockLayout === "vertical" || l().blockLayout === "plain") && pt(Ct);
      }), y(vt);
      var It = O(vt, 2);
      {
        let pt = d(() => i().upsells || []);
        Ai(It, { get dealBlock() {
          return l();
        }, get dealBarId() {
          return i().id;
        }, get upsells() {
          return e(pt);
        }, get otherProducts() {
          return h();
        }, get complementaryProducts() {
          return b();
        }, get dealBarSelected() {
          return m();
        }, get dealSellingPlan() {
          return e(me);
        }, onChange: (jt) => {
          te(P, jt, !0);
        } });
      }
      var ln = O(It, 2);
      Oi(ln, { get selectedDealBarIndex() {
        return C();
      }, get onChange() {
        return V();
      }, get dealBlock() {
        return l();
      }, get dealBar() {
        return i();
      }, get selected() {
        return m();
      }, get otherProducts() {
        return h();
      }, get sellingPlan() {
        return e(me);
      }, get progressiveGifts() {
        return l().progressiveGifts;
      } });
      var Mt = O(ln, 2);
      {
        let pt = d(() => i().freeGifts || []), jt = d(() => {
          var Tt;
          return (Tt = e(J)[0]) != null ? Tt : void 0;
        });
        Vi(Mt, { get dealBlock() {
          return l();
        }, get freeGifts() {
          return e(pt);
        }, get freeGiftsSummary() {
          return i().freeGiftsSummary;
        }, get otherProducts() {
          return h();
        }, get dealBarSelected() {
          return m();
        }, get sellingPlan() {
          return e(me);
        }, get mainProductVariantId() {
          return e(jt);
        }, onChange: (Tt) => {
          te(N, Tt, !0);
        } });
      }
      var Qt = O(Mt, 2);
      {
        let pt = d(() => i().multipleGiftsSelectors || []);
        Gi(Qt, { get dealBlock() {
          return l();
        }, get multipleGiftsSelectors() {
          return e(pt);
        }, get sellingPlan() {
          return e(me);
        }, get otherProducts() {
          return h();
        }, onChange: (jt) => {
          te(S, jt, !0);
        } });
      }
      p(we, Ee);
    }, $$slots: { default: !0 } });
    var rt = O(st, 2), et = (we) => {
      qi(we, { get showAsSoldOut() {
        return i().showAsSoldOut;
      }, get replaceLiquid() {
        return e(Ie);
      } });
    };
    G(rt, (we) => {
      i().showAsSoldOutEnabled && i().showAsSoldOut && we(et);
    }), y(He), _e((we) => {
      var Xe;
      ht = Nt(He, 1, "kaching-bundles__bar", null, ht, we), Be(He, "data-deal-bar-id", i().id), Ot(He, e(nn)), Be(ut, "name", `kaching-bundles-deal-${(Xe = x()) != null ? Xe : ""}`), Ka(ut, i().id), Be(ut, "id", e(Ue)), cl(ut, m()), ut.disabled = i().showAsSoldOutEnabled;
    }, [() => ({ "kaching-bundles__bar--selected": m() })]), p(n, He);
    var Dt = nt(Pe);
    return c(), Dt;
  }
  Gn(["change"]), Ze(To, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, customQuantity: {}, currentVariantId: {}, currentVariantSource: {}, componentId: {}, selected: {}, globalSellingPlan: {}, selectedDealBarIndex: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var Qv = $('<div class="kaching-bundles"><!></div>');
  function Rd(n, t) {
    var r;
    tt(t, !0);
    const a = _(t, "config", 7), s = _(t, "dealBlock", 7), o = _(t, "dealBar", 7), c = _(t, "translations", 7), l = _(t, "product", 7), i = _(t, "mediaImages", 23, () => []), u = _(t, "currentVariantId", 7), h = _(t, "currentVariantSource", 7, void 0), b = _(t, "variantBadges", 23, () => []), g = d(() => hr(s(), a().brandColors)), f = d(() => hr(o(), a().brandColors)), k = Math.random().toString(16).slice(2), { setConfig: x } = ri(a()), { setMoneyFormat: m } = Di(a().moneyFormat), { setTranslations: M } = ni(c()), { setMediaImages: C } = hl(i()), { setSwatchSettings: V } = ul({ swatchOptions: e(g).swatchOptions || [], swatchSize: e(g).swatchSize, swatchShape: e(g).swatchShape, showSelectedSwatchName: (r = e(g).showSelectedSwatchName) != null && r }), { setVariantBadges: D } = Cd(b());
    Ye(() => {
      x(a());
    }), Ye(() => {
      m(a().moneyFormat, !!e(g).showPricesWithoutDecimals);
    }), Ye(() => {
      M(c());
    }), Ye(() => {
      C(i());
    }), Ye(() => {
      var B;
      V({ swatchOptions: e(g).swatchOptions || [], swatchSize: e(g).swatchSize, swatchShape: e(g).swatchShape, showSelectedSwatchName: (B = e(g).showSelectedSwatchName) != null && B });
    }), Ye(() => {
      D(b());
    });
    const A = d(() => e(g) && Lu(e(g)));
    var H = { get config() {
      return a();
    }, set config(B) {
      a(B), v();
    }, get dealBlock() {
      return s();
    }, set dealBlock(B) {
      s(B), v();
    }, get dealBar() {
      return o();
    }, set dealBar(B) {
      o(B), v();
    }, get translations() {
      return c();
    }, set translations(B) {
      c(B), v();
    }, get product() {
      return l();
    }, set product(B) {
      l(B), v();
    }, get mediaImages() {
      return i();
    }, set mediaImages(B = []) {
      i(B), v();
    }, get currentVariantId() {
      return u();
    }, set currentVariantId(B) {
      u(B), v();
    }, get currentVariantSource() {
      return h();
    }, set currentVariantSource(B = void 0) {
      h(B), v();
    }, get variantBadges() {
      return b();
    }, set variantBadges(B = []) {
      b(B), v();
    } }, ee = Qv(), I = w(ee), Z = (B) => {
      To(B, { selectedDealBarIndex: null, get dealBlock() {
        return e(g);
      }, get dealBar() {
        return e(f);
      }, get product() {
        return l();
      }, get currentVariantId() {
        return u();
      }, get currentVariantSource() {
        return h();
      }, get componentId() {
        return k;
      }, selected: !0, onProgressiveGiftsChange: () => {
      }, onDealBarSelect: () => {
      }, onDealBarDeselect: () => {
      }, onVariantSelect: () => {
      }, onVariantsChange: () => {
      } });
    };
    return G(I, (B) => {
      e(f).dealBarType && e(f).dealBarType !== ft.QuantityBreak && e(f).dealBarType !== ft.Bxgy || B(Z);
    }), y(ee), _e(() => Ot(ee, e(A))), p(n, ee), nt(H);
  }
  customElements.define("kaching-bundles-bar", Ze(Rd, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, dealBar: { attribute: "deal-bar", type: "Object" }, translations: { attribute: "translations", type: "Object" }, product: { attribute: "product", type: "Object" }, mediaImages: { attribute: "media-images", type: "Array" }, currentVariantId: { attribute: "current-variant-id", type: "Number" }, currentVariantSource: { attribute: "current-variant-source", type: "String" }, variantBadges: { attribute: "variant-badges", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this;
    }
  }));
  var Wv = $('<img alt="" class="kaching-bundles__bundle-products__image"/>'), Uv = $('<div class="kaching-bundles__bundle-products__image-placeholder"></div>');
  function Vo(n, t) {
    tt(t, !0);
    const r = _(t, "image", 7), a = _(t, "linkUrl", 7);
    var s = { get image() {
      return r();
    }, set image(u) {
      r(u), v();
    }, get linkUrl() {
      return a();
    }, set linkUrl(u) {
      a(u), v();
    } }, o = ze(), c = ve(o), l = (u) => {
      nr(u, { get url() {
        return a();
      }, class: "kaching-bundles__bundle-products__link", children: (h, b) => {
        var g = Wv();
        Be(g, "height", 50), Be(g, "width", 50), _e(() => Be(g, "src", r())), p(h, g);
      }, $$slots: { default: !0 } });
    }, i = (u) => {
      p(u, Uv());
    };
    return G(c, (u) => {
      r() ? u(l) : u(i, !1);
    }), p(n, o), nt(s);
  }
  Ze(Vo, { image: {}, linkUrl: {} }, [], [], !0);
  var Hv = $('<span class="kaching-bundles__bundle-products__quantity"> </span>'), Zv = $('<div class="kaching-bundles__bundle-products__title"><!> <span> </span></div>');
  function Ao(n, t) {
    tt(t, !0);
    const r = _(t, "title", 7), a = _(t, "quantity", 7), s = _(t, "linkUrl", 7);
    var o = { get title() {
      return r();
    }, set title(c) {
      r(c), v();
    }, get quantity() {
      return a();
    }, set quantity(c) {
      a(c), v();
    }, get linkUrl() {
      return s();
    }, set linkUrl(c) {
      s(c), v();
    } };
    return nr(n, { get url() {
      return s();
    }, class: "kaching-bundles__bundle-products__link", children: (c, l) => {
      var i = Zv(), u = w(i), h = (f) => {
        var k = Hv(), x = w(k);
        y(k), _e(() => {
          var m;
          return kt(x, `${(m = a()) != null ? m : ""}x`);
        }), p(f, k);
      };
      G(u, (f) => {
        a() > 1 && f(h);
      });
      var b = O(u, 2), g = w(b, !0);
      y(b), y(i), _e(() => kt(g, r())), p(c, i);
    }, $$slots: { default: !0 } }), nt(o);
  }
  Ze(Ao, { title: {}, quantity: {}, linkUrl: {} }, [], [], !0);
  var Jv = $('<span class="kaching-bundles__bundle-products__price"><!></span>'), Yv = $('<span class="kaching-bundles__bundle-products__full-price"><!></span>'), Kv = $('<span class="kaching-bundles__bundle-products__unit-price"><!> </span>'), Xv = $("<div><!> <!> <!></div>");
  function ks(n, t) {
    tt(t, !0);
    const r = () => Ve(h, "$formatPrice", a), [a, s] = mt();
    let o = _(t, "discountedPrice", 7), c = _(t, "fullPrice", 7), l = _(t, "unitPrice", 7), i = _(t, "unitPriceReference", 7), u = _(t, "ignoreUnitPrice", 7);
    const h = pn(), b = d(() => !!l() && !!i() && !u());
    var g = { get discountedPrice() {
      return o();
    }, set discountedPrice(A) {
      o(A), v();
    }, get fullPrice() {
      return c();
    }, set fullPrice(A) {
      c(A), v();
    }, get unitPrice() {
      return l();
    }, set unitPrice(A) {
      l(A), v();
    }, get unitPriceReference() {
      return i();
    }, set unitPriceReference(A) {
      i(A), v();
    }, get ignoreUnitPrice() {
      return u();
    }, set ignoreUnitPrice(A) {
      u(A), v();
    } }, f = Xv();
    let k;
    var x = w(f);
    lt(x, o, (A) => {
      var H = Jv();
      Le(w(H), () => r()(o())), y(H), p(A, H);
    });
    var m = O(x, 2), M = (A) => {
      var H = ze();
      lt(ve(H), c, (ee) => {
        var I = Yv();
        Le(w(I), () => r()(c())), y(I), p(ee, I);
      }), p(A, H);
    };
    G(m, (A) => {
      o() < c() && A(M);
    });
    var C = O(m, 2), V = (A) => {
      var H = ze();
      lt(ve(H), l, (ee) => {
        var I = Kv(), Z = w(I);
        Le(Z, () => r()(l(), { preserveDecimals: !0 }));
        var B = O(Z);
        y(I), _e(() => {
          var E;
          return kt(B, ` / ${(E = i()) != null ? E : ""}`);
        }), p(ee, I);
      }), p(A, H);
    };
    G(C, (A) => {
      l() && i() && !u() && A(V);
    }), y(f), _e((A) => k = Nt(f, 1, "kaching-bundles__bundle-products__pricing", null, k, A), [() => ({ "kaching-bundles__bundle-products__pricing--with-unit-price": e(b) })]), p(n, f);
    var D = nt(g);
    return s(), D;
  }
  Ze(ks, { discountedPrice: {}, fullPrice: {}, unitPrice: {}, unitPriceReference: {}, ignoreUnitPrice: {} }, [], [], !0);
  var e_ = $("<!> <!> <!> <!> <!>", 1), t_ = $("<!> <!>", 1), n_ = $('<div class="kaching-bundles__bundle-products__wrapper"><!> <div class="kaching-bundles__bundle-products__content"><!> <!> <!></div></div> <!>', 1), r_ = $('<div class="kaching-bundles__bundle-products__product"><!></div>');
  function Nd(n, t) {
    tt(t, !0);
    const r = () => Ve(C, "$config", s), a = () => Ve(D, "$translate", s), [s, o] = mt();
    let c = _(t, "dealBlock", 7), l = _(t, "layout", 7), i = _(t, "bundleProduct", 7), u = _(t, "product", 7), h = _(t, "dealBarSelected", 7), b = _(t, "currentVariantId", 7), g = _(t, "mainVariantId", 7), f = _(t, "priceRounding", 7), k = _(t, "sellingPlan", 7), x = _(t, "dealBar", 7), m = _(t, "sets", 7), M = _(t, "onChange", 7);
    const C = mn(), V = pn(), D = zt();
    let A = Ge(void 0);
    const H = d(() => !!i().variantGIDs), ee = d(() => {
      var F, ae;
      return e(H) && u() ? u().variants.filter((ie) => i().variantGIDs.some((ke) => Kt(ke) === ie.id)) : (ae = (F = u()) == null ? void 0 : F.variants) != null ? ae : [];
    }), I = d(() => {
      var F, ae, ie, ke;
      const re = i().productGID === "default", pe = !!((F = c().defaultVariantsV2) != null && F.length);
      if (re && pe && u()) {
        const ge = u().id, me = (ke = (ie = (ae = c().defaultVariantsV2) == null ? void 0 : ae.find((ce) => Kt(ce.productGID) === ge && ce.dealBarId === x().id)) == null ? void 0 : ie.variantGIDs) == null ? void 0 : ke[0];
        if (me) return Kt(me);
      }
      if (i().defaultVariantGID) return Kt(i().defaultVariantGID);
    }), Z = d(() => {
      var F;
      return (F = x().requireVariantSelectionEnabled) != null && F && e(ee).length > 1;
    }), B = d(() => {
      const F = e(A) || e(I);
      if (F !== void 0 && e(ee).some(({ id: ae }) => ae === F))
        return F;
    }), E = d(() => e(Z) && e(B) === void 0), ue = d(() => {
      const F = e(A) || e(I);
      return F !== void 0 && e(ee).some(({ id: ae }) => ae === F) ? F : i().productGID === "default" && b() ? b() : i().variantGIDs ? i().variantGIDs.length === 0 ? void 0 : Kt(i().variantGIDs[0]) : e(ee).length > 0 ? e(ee)[0].id : void 0;
    }), z = d(() => {
      var F;
      return e(ue) ? (F = u()) == null ? void 0 : F.variants.find((ae) => ae.id === e(ue)) : void 0;
    }), N = d(() => u() && e(z) && rr(u(), e(z), k())), S = d(() => i().quantity * m()), P = d(() => pa({ discountType: i().discountType, discountValue: i().discountValue, discountQuantity: i().quantity, variantQuantities: e(z) ? [{ variant: e(z), quantity: e(S) }] : [], currencyRate: r().currencyRate, priceRounding: f(), sellingPlan: e(N) })), L = d(() => (function(F) {
      if (!F) return 0;
      let ae = F.price;
      return c().useProductCompareAtPrice && F.compareAtPrice && (ae = Math.max(ae, F.compareAtPrice)), ae * e(S);
    })(e(z))), j = d(() => e(z) ? po(e(z)) : null), Y = d(() => e(z) ? Sr([{ variant: e(z), quantity: e(S) }]) : null), de = d(() => e(Y) ? e(P) / e(Y) : null), T = d(() => {
      var F;
      return (F = u()) != null && F.url && e(z) ? `${u().url}?variant=${e(z).id}` : void 0;
    }), q = d(() => {
      var F, ae;
      return ((F = e(z)) == null ? void 0 : F.image) || ((ae = u()) == null ? void 0 : ae.image);
    }), se = d(() => h() && u() && e(ee).length > 1 && (e(ue) || e(Z))), le = d(() => h() && i().productGID !== "default" ? e(T) : void 0), W = d(() => u() ? i().title ? bn({ priceFormatter: Ve(V, "$formatPrice", s), product: u(), totalFullPrice: e(L), totalDiscountedPrice: e(P), quantity: e(S), unitQuantity: e(Y) })(i().title) : u().title : "");
    function oe(F) {
      te(A, F, !0), fa(!1);
    }
    let K;
    Ye(() => {
      e(z) && e(S) && (e(E), en(() => {
        M()({ variant: e(z), product: u(), quantity: e(S), variantSelectionPending: e(E) });
      }));
    }), dr(() => {
      i().productGID, te(A, void 0), K = void 0;
    }), dr(() => {
      if (e(Z)) return void (K !== void 0 && e(A) === K && (te(A, void 0), K = void 0));
      const F = i().productGID === "default";
      if (!(F || !c().disableVariantOptionSync)) return;
      const ae = F ? b() : g();
      if (!ae || !u() || ae === K) return;
      const ie = K;
      if (K = ae, !e(ee).some((pe) => pe.id === ae)) return;
      const ke = e(A) === void 0 && e(I) === void 0, re = e(A) === ie && ie !== void 0;
      (ke || re) && te(A, ae, !0);
    });
    var Q = { get dealBlock() {
      return c();
    }, set dealBlock(F) {
      c(F), v();
    }, get layout() {
      return l();
    }, set layout(F) {
      l(F), v();
    }, get bundleProduct() {
      return i();
    }, set bundleProduct(F) {
      i(F), v();
    }, get product() {
      return u();
    }, set product(F) {
      u(F), v();
    }, get dealBarSelected() {
      return h();
    }, set dealBarSelected(F) {
      h(F), v();
    }, get currentVariantId() {
      return b();
    }, set currentVariantId(F) {
      b(F), v();
    }, get mainVariantId() {
      return g();
    }, set mainVariantId(F) {
      g(F), v();
    }, get priceRounding() {
      return f();
    }, set priceRounding(F) {
      f(F), v();
    }, get sellingPlan() {
      return k();
    }, set sellingPlan(F) {
      k(F), v();
    }, get dealBar() {
      return x();
    }, set dealBar(F) {
      x(F), v();
    }, get sets() {
      return m();
    }, set sets(F) {
      m(F), v();
    }, get onChange() {
      return M();
    }, set onChange(F) {
      M(F), v();
    } }, U = ze(), X = ve(U), ne = (F) => {
      var ae = r_(), ie = w(ae), ke = (pe) => {
        var ge = e_(), me = ve(ge);
        Vo(me, { get image() {
          return e(q);
        }, get linkUrl() {
          return e(le);
        } });
        var ce = O(me, 2);
        Ao(ce, { get title() {
          return e(W);
        }, get quantity() {
          return e(S);
        }, get linkUrl() {
          return e(le);
        } });
        var fe = O(ce, 2), Fe = (R) => {
          ks(R, { get discountedPrice() {
            return e(P);
          }, get fullPrice() {
            return e(L);
          }, get unitPrice() {
            return e(de);
          }, get unitPriceReference() {
            return e(j);
          }, get ignoreUnitPrice() {
            return r().ignoreUnitPrice;
          } });
        };
        G(fe, (R) => {
          i().hidePrice || R(Fe);
        });
        var $e = O(fe, 2);
        va($e, { get dealBlock() {
          return c();
        }, get variant() {
          return e(z);
        } });
        var Ce = O($e, 2), Te = (R) => {
          {
            let xe = d(() => ({ ...u(), variants: e(ee) })), Ie = d(() => {
              var ye;
              return e(Z) ? (ye = e(B)) != null ? ye : null : e(ue) || 0;
            }), be = d(() => e(Z) ? a()("system.select_variant_placeholder") : void 0);
            Hn(R, { get product() {
              return e(xe);
            }, get selectedVariantId() {
              return e(Ie);
            }, get placeholderText() {
              return e(be);
            }, onChange: oe });
          }
        };
        G(Ce, (R) => {
          e(se) && R(Te);
        }), p(pe, ge);
      }, re = (pe) => {
        var ge = n_(), me = ve(ge), ce = w(me);
        Vo(ce, { get image() {
          return e(q);
        }, get linkUrl() {
          return e(le);
        } });
        var fe = O(ce, 2), Fe = w(fe);
        Ao(Fe, { get title() {
          return e(W);
        }, get quantity() {
          return e(S);
        }, get linkUrl() {
          return e(le);
        } });
        var $e = O(Fe, 2);
        va($e, { get dealBlock() {
          return c();
        }, get variant() {
          return e(z);
        } });
        var Ce = O($e, 2), Te = (Ie) => {
          var be = t_(), ye = ve(be);
          {
            let De = d(() => ({ ...u(), variants: e(ee) }));
            ha(ye, { get product() {
              return e(De);
            } });
          }
          var qe = O(ye, 2);
          {
            let De = d(() => ({ ...u(), variants: e(ee) })), Me = d(() => {
              var Oe;
              return e(Z) ? (Oe = e(B)) != null ? Oe : null : e(ue) || 0;
            }), Ae = d(() => e(Z) ? a()("system.select_variant_placeholder") : void 0);
            Hn(qe, { get product() {
              return e(De);
            }, get selectedVariantId() {
              return e(Me);
            }, get placeholderText() {
              return e(Ae);
            }, onChange: oe });
          }
          p(Ie, be);
        };
        G(Ce, (Ie) => {
          e(se) && Ie(Te);
        }), y(fe), y(me);
        var R = O(me, 2), xe = (Ie) => {
          ks(Ie, { get discountedPrice() {
            return e(P);
          }, get fullPrice() {
            return e(L);
          }, get unitPrice() {
            return e(de);
          }, get unitPriceReference() {
            return e(j);
          }, get ignoreUnitPrice() {
            return r().ignoreUnitPrice;
          } });
        };
        G(R, (Ie) => {
          i().hidePrice || Ie(xe);
        }), p(pe, ge);
      };
      G(ie, (pe) => {
        l() === "horizontal" ? pe(ke) : pe(re, !1);
      }), y(ae), p(F, ae);
    };
    G(X, (F) => {
      u() && F(ne);
    }), p(n, U);
    var J = nt(Q);
    return o(), J;
  }
  Ze(Nd, { dealBlock: {}, layout: {}, bundleProduct: {}, product: {}, dealBarSelected: {}, currentVariantId: {}, mainVariantId: {}, priceRounding: {}, sellingPlan: {}, dealBar: {}, sets: {}, onChange: {} }, [], [], !0);
  var a_ = Dn('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" d="M5 9h10v2H5z"></path><path fill="#fff" d="M11 5v10H9V5z"></path></svg>');
  function Qd(n) {
    p(n, a_());
  }
  function i_(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  Ze(Qd, {}, [], [], !0);
  var l_ = $('<img class="kaching-bundles__bar-image" alt=""/>'), s_ = $('<div class="kaching-bundles__bar-radio"></div>'), o_ = $('<span class="kaching-bundles__bar-title"><!></span>'), c_ = $('<span class="kaching-bundles__bar-label"><!></span>'), u_ = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), d_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), g_ = $('<div class="kaching-bundles__bar-price"><!></div>'), h_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), p_ = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), b_ = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), f_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), v_ = $("<!> <!>", 1), __ = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), k_ = $('<div class="kaching-bundles__bundle-products__product kaching-bundles__bundle-products__product--placeholder"><span>Select product</span></div>'), m_ = $('<div class="kaching-bundles__bundle-products__divider"><div class="kaching-bundles__bundle-products__divider-line">&ZeroWidthSpace;</div> <div class="kaching-bundles__bundle-products__divider-icon"><!></div> <div class="kaching-bundles__bundle-products__divider-line">&ZeroWidthSpace;</div></div>'), x_ = $("<!> <!>", 1), y_ = $("<div></div>"), w_ = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), P_ = $('<div><input type="radio"/> <!> <!></div>');
  function Wd(n, t) {
    tt(t, !0);
    const r = () => Ve(E, "$config", o), a = () => Ve(Z, "$formatPrice", o), s = () => Ve(I, "$translate", o), [o, c] = mt(), l = _(t, "dealBlock", 7), i = _(t, "dealBar", 7), u = _(t, "product", 7), h = _(t, "otherProducts", 23, () => []), b = _(t, "complementaryProducts", 23, () => []), g = _(t, "currentVariantId", 7), f = _(t, "componentId", 7), k = _(t, "selectedDealBarIndex", 7), x = _(t, "selected", 7, !1), m = _(t, "sellingPlan", 7), M = _(t, "onProgressiveGiftsChange", 7), C = _(t, "onDealBarSelect", 7), V = _(t, "onDealBarDeselect", 7), D = _(t, "onVariantSelect", 7), A = _(t, "onVariantsChange", 7), H = _(t, "onPersonalisationsChange", 7), ee = _(t, "personalisationInitialValues", 23, () => []), I = zt(), Z = pn(), B = On(), E = mn();
    let ue = Ge(gt({})), z = Ge(gt([])), N = Ge(gt([])), S = Ge(gt([])), P = Ge(1);
    const L = d(() => `${i().id}_${f()}`), j = d(() => i().bundleProducts.filter(({ productGID: be }) => be)), Y = d(() => e(j).every((be) => Fe(be, u(), h()))), de = d(() => i().showProductsOnlyWhenSelected && !x()), T = d(() => e(j).every((be) => {
      var ye;
      const qe = Fe(be, u(), h());
      return (ye = qe == null ? void 0 : qe.availableForSale) != null && ye;
    })), q = d(() => l() ? (function(be, ye) {
      return i().bundleProducts.map((De) => {
        const Me = ye[De.id];
        if (!Me) return 0;
        const { variant: Ae, quantity: Oe } = Me;
        let je = Ae.price;
        return Ae.compareAtPrice && be.useProductCompareAtPrice && (je = Math.max(je, Ae.compareAtPrice)), je * Oe;
      }).reduce((De, Me) => De + Me, 0);
    })(l(), e(ue)) : 0), se = d(() => _l(e(q), e(z), e(N))), le = d(() => l().priceRounding ? { perItem: l().showPricesPerItem, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), W = d(() => l() ? ko(i(), e(ue), r().currencyRate, e(le), m()) : 0), oe = d(() => e(j).reduce((be, ye) => be + ye.quantity, 0) * e(P)), K = d(() => Math.ceil(e(W) / (e(oe) || 1))), Q = d(() => Math.ceil(e(q) / (e(oe) || 1))), U = d(() => yo(e(oe) === 1, e(se), e(Q))), X = d(() => e(se) > e(W)), ne = d(() => Sr(Object.values(e(ue)))), J = d(() => e(j).every((be) => be.productGID === "default" || Kt(be.productGID) === u().id)), F = d(() => {
      var be;
      const ye = e(j)[0];
      if (ye) return (be = e(ue)[ye.id]) == null ? void 0 : be.variant.id;
    }), ae = d(() => l().showPricesPerItem && e(J)), ie = d(() => bn({ priceFormatter: a(), product: u(), dealBar: i(), totalFullPrice: e(q), totalCompareAtPrice: e(se), totalDiscountedPrice: e(W), quantity: 1, unitQuantity: e(ne), sellingPlan: m() })), ke = d(() => e(ie)(s()(i().title))), re = d(() => e(ie)(s()(i().subtitle))), pe = d(() => e(ie)(s()(i().label))), ge = d(() => fl(l(), i()).map((be) => $a(be, s(), e(ie)))), me = d(() => Da(e(ge))), ce = d(() => Ve(B, "$getMediaImageUrl", o)(i().mediaImageGID) || kl);
    function fe(be) {
      x() && (be.preventDefault(), be.stopPropagation(), V()());
    }
    function Fe(be, ye, qe) {
      if (be.productGID) return be.productGID === "default" ? ye : qe.find((De) => De.id === Kt(be.productGID));
    }
    Ya(() => {
      x() && C()({ dealBarId: i().id, preselected: !0 });
    }), Ye(() => {
      x() && (Pa(e(ue)), Pa(e(S)), Pa(e(z)), Pa(e(N)), m(), en(() => {
        (function() {
          var be;
          if (!i().bundleProducts.map(({ id: Ue }) => Ue).every((Ue) => e(ue)[Ue])) return;
          const ye = [];
          for (const Ue of i().bundleProducts) {
            const ot = e(ue)[Ue.id];
            ot && ye.push({ id: Ue.id, variant: ot.variant, product: ot.product, quantity: ot.quantity, variantSelectionPending: ot.variantSelectionPending });
          }
          if (ye.length === 0) return;
          const qe = e(W) + e(S).reduce((Ue, ot) => Ue + ot.discountedPrice, 0), De = e(z).reduce((Ue, ot) => ot.showPrice ? Ue + ot.fullPrice : Ue, 0) + e(N).reduce((Ue, ot) => Ue + ot.fullPrice * ot.quantity, 0), Me = e(q) + e(S).reduce((Ue, ot) => Ue + ot.fullPrice, 0) + De, Ae = ko(i(), e(ue), r().currencyRate, e(le), void 0), Oe = u().sellingPlans.map((Ue) => ({ sellingPlanId: Ue.id, discountedPrice: ko(i(), e(ue), r().currencyRate, e(le), Ue) })), je = (be = i().requireVariantSelectionEnabled) != null && be, Ke = je ? i().bundleProducts.filter(({ id: Ue }) => {
            var ot;
            return (ot = e(ue)[Ue]) == null ? void 0 : ot.variantSelectionPending;
          }).length : 0;
          A()({ bundleProducts: ye, freeGifts: [...e(z), ...e(N)], upsells: e(S), pricing: { discountedPrice: qe, fullPrice: Me, giftValue: De, discountedPricePerItem: e(W), fullPricePerItem: e(q), discountedPriceWithoutSellingPlan: Ae, discountedPricesForSellingPlans: Oe }, validation: { requiresItemSelection: je, allItemsSelected: Ke === 0, missingItemsCount: Ke } });
        })();
      }));
    });
    const $e = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? xl(i().showAsSoldOut) : "");
    var Ce = { get dealBlock() {
      return l();
    }, set dealBlock(be) {
      l(be), v();
    }, get dealBar() {
      return i();
    }, set dealBar(be) {
      i(be), v();
    }, get product() {
      return u();
    }, set product(be) {
      u(be), v();
    }, get otherProducts() {
      return h();
    }, set otherProducts(be = []) {
      h(be), v();
    }, get complementaryProducts() {
      return b();
    }, set complementaryProducts(be = []) {
      b(be), v();
    }, get currentVariantId() {
      return g();
    }, set currentVariantId(be) {
      g(be), v();
    }, get componentId() {
      return f();
    }, set componentId(be) {
      f(be), v();
    }, get selectedDealBarIndex() {
      return k();
    }, set selectedDealBarIndex(be) {
      k(be), v();
    }, get selected() {
      return x();
    }, set selected(be = !1) {
      x(be), v();
    }, get sellingPlan() {
      return m();
    }, set sellingPlan(be) {
      m(be), v();
    }, get onProgressiveGiftsChange() {
      return M();
    }, set onProgressiveGiftsChange(be) {
      M(be), v();
    }, get onDealBarSelect() {
      return C();
    }, set onDealBarSelect(be) {
      C(be), v();
    }, get onDealBarDeselect() {
      return V();
    }, set onDealBarDeselect(be) {
      V(be), v();
    }, get onVariantSelect() {
      return D();
    }, set onVariantSelect(be) {
      D(be), v();
    }, get onVariantsChange() {
      return A();
    }, set onVariantsChange(be) {
      A(be), v();
    }, get onPersonalisationsChange() {
      return H();
    }, set onPersonalisationsChange(be) {
      H(be), v();
    }, get personalisationInitialValues() {
      return ee();
    }, set personalisationInitialValues(be = []) {
      ee(be), v();
    } }, Te = ze(), R = ve(Te), xe = (be) => {
      var ye = P_();
      let qe;
      var De = w(ye);
      da(De), De.__change = [i_, C, i];
      var Me = O(De, 2);
      ai(Me, { get for() {
        return e(L);
      }, get soldOut() {
        return i().showAsSoldOutEnabled;
      }, get borderHost() {
        return e(me);
      }, children: (je, Ke) => {
        var Ue = w_(), ot = ve(Ue);
        At(ot, 17, () => e(ge), (Ee) => Ee.id, (Ee, Je) => {
          ba(Ee, { get badge() {
            return e(Je);
          }, get blockLayout() {
            return l().blockLayout;
          } });
        });
        var Wt = O(ot, 2), bt = w(Wt);
        Xt(bt, { element: "div", class: "kaching-bundles__bar-main", onclick: fe, children: (Ee, Je) => {
          var vt = __(), ct = ve(vt), $t = (Qt) => {
            var pt = l_();
            _e(() => Be(pt, "src", e(ce))), p(Qt, pt);
          }, rn = (Qt) => {
            p(Qt, s_());
          };
          G(ct, (Qt) => {
            i().mediaImageGID ? Qt($t) : Qt(rn, !1);
          });
          var Ft = O(ct, 2), Bt = w(Ft), Ut = w(Bt), Lt = w(Ut);
          lt(Lt, () => e(ke), (Qt) => {
            var pt = o_();
            Le(w(pt), () => e(ke)), y(pt), p(Qt, pt);
          });
          var dt = O(Lt, 2), at = (Qt) => {
            var pt = ze();
            lt(ve(pt), () => e(pe), (jt) => {
              var Tt = c_();
              Le(w(Tt), () => e(pe)), y(Tt), p(jt, Tt);
            }), p(Qt, pt);
          };
          G(dt, (Qt) => {
            e(pe) && Qt(at);
          }), y(Ut);
          var it = O(Ut, 2), Ct = (Qt) => {
            var pt = ze();
            lt(ve(pt), () => e(re), (jt) => {
              var Tt = u_();
              Le(w(Tt), () => e(re)), y(Tt), p(jt, Tt);
            }), p(Qt, pt);
          };
          G(it, (Qt) => {
            e(re) && Qt(Ct);
          }), y(Bt);
          var It = O(Bt, 2), ln = w(It), Mt = (Qt) => {
            var pt = ze(), jt = ve(pt), Tt = (Tn) => {
              var xn = b_(), Fn = ve(xn), Zn = w(Fn);
              lt(Zn, () => e(K), (Zt) => {
                Yr(Zt, { get amount() {
                  return e(K);
                }, get showPricesPerItem() {
                  return e(ae);
                }, get unitLabel() {
                  return l().unitLabel;
                } });
              });
              var ar = O(Zn, 2), fn = (Zt) => {
                var an = ze();
                lt(ve(an), () => e(U), (Ln) => {
                  var dn = d_();
                  Le(w(dn), () => a()(e(U))), y(dn), _e((En) => Be(dn, "data-a11y-label", En), [() => s()("system.original_price")]), p(Ln, dn);
                }), p(Zt, an);
              };
              G(ar, (Zt) => {
                e(X) && Zt(fn);
              }), y(Fn);
              var Ht = O(Fn, 2), on = (Zt) => {
                var an = p_(), Ln = w(an);
                lt(Ln, () => e(W), (Rn) => {
                  var cn = g_();
                  Le(w(cn), () => a()(e(W))), y(cn), _e((Cn) => Be(cn, "data-a11y-label", Cn), [() => s()("system.price")]), p(Rn, cn);
                });
                var dn = O(Ln, 2), En = (Rn) => {
                  var cn = ze();
                  lt(ve(cn), () => e(se), (Cn) => {
                    var Jn = h_();
                    Le(w(Jn), () => a()(e(se))), y(Jn), _e((St) => Be(Jn, "data-a11y-label", St), [() => s()("system.original_price")]), p(Cn, Jn);
                  }), p(Rn, cn);
                };
                G(dn, (Rn) => {
                  e(X) && Rn(En);
                }), y(an), p(Zt, an);
              };
              G(Ht, (Zt) => {
                e(oe) > 1 && Zt(on);
              }), p(Tn, xn);
            }, Bn = (Tn) => {
              var xn = v_(), Fn = ve(xn);
              lt(Fn, () => e(W), (fn) => {
                {
                  let Ht = d(() => e(ae) ? e(K) : e(W));
                  Yr(fn, { get amount() {
                    return e(Ht);
                  }, get showPricesPerItem() {
                    return e(ae);
                  }, get unitLabel() {
                    return l().unitLabel;
                  } });
                }
              });
              var Zn = O(Fn, 2), ar = (fn) => {
                var Ht = ze();
                lt(ve(Ht), () => e(ae) ? e(U) : e(se), (on) => {
                  var Zt = f_();
                  Le(w(Zt), () => a()(e(ae) ? e(U) : e(se))), y(Zt), _e((an) => Be(Zt, "data-a11y-label", an), [() => s()("system.original_price")]), p(on, Zt);
                }), p(fn, Ht);
              };
              G(Zn, (fn) => {
                e(X) && fn(ar);
              }), p(Tn, xn);
            };
            G(jt, (Tn) => {
              l().showBothPrices && e(J) ? Tn(Tt) : Tn(Bn, !1);
            }), p(Qt, pt);
          };
          G(ln, (Qt) => {
            e(Y) && Qt(Mt);
          }), y(It), y(Ft), p(Ee, vt);
        }, $$slots: { default: !0 } });
        var qt = O(bt, 2), nn = (Ee) => {
          Va(Ee, { get highlights() {
            return i().highlights;
          }, get isSelected() {
            return x();
          }, get replaceLiquid() {
            return e(ie);
          } });
        };
        G(qt, (Ee) => {
          i().highlights && Ee(nn);
        });
        var Pe = O(qt, 2), He = (Ee) => {
          yl(Ee, { get value() {
            return e(P);
          }, onChange: (Je) => {
            te(P, Je, !0);
          } });
        };
        G(Pe, (Ee) => {
          x() && i().quantitySelector && Ee(He);
        });
        var ht = O(Pe, 2), ut = (Ee) => {
          var Je = y_();
          let vt;
          At(Je, 23, () => i().bundleProducts, (ct) => ct.id, (ct, $t, rn) => {
            var Ft = x_(), Bt = ve(Ft), Ut = (it) => {
              {
                let Ct = d(() => Fe(e($t), u(), h())), It = d(() => i().layout || "horizontal");
                Nd(it, { get dealBar() {
                  return i();
                }, get bundleProduct() {
                  return e($t);
                }, get product() {
                  return e(Ct);
                }, get dealBlock() {
                  return l();
                }, get layout() {
                  return e(It);
                }, get dealBarSelected() {
                  return x();
                }, get priceRounding() {
                  return e(le);
                }, get currentVariantId() {
                  return g();
                }, get mainVariantId() {
                  return e(F);
                }, get sellingPlan() {
                  return m();
                }, get sets() {
                  return e(P);
                }, onChange: (ln) => (function(Mt, Qt) {
                  const { variant: pt, product: jt, quantity: Tt, variantSelectionPending: Bn } = Qt;
                  e(ue)[Mt] = { variant: pt, product: jt, quantity: Tt, variantSelectionPending: Bn }, x() && i().bundleProducts.map(({ id: Tn }) => Tn).every((Tn) => e(ue)[Tn]) && (Mt !== i().bundleProducts[0].id || Bn || D()({ variantId: pt.id }));
                })(e($t).id, ln) });
              }
            }, Lt = (it) => {
              var Ct = ze(), It = ve(Ct), ln = (Mt) => {
                p(Mt, k_());
              };
              G(It, (Mt) => {
                r().preview && Mt(ln);
              }, !0), p(it, Ct);
            };
            G(Bt, (it) => {
              e($t).productGID ? it(Ut) : it(Lt, !1);
            });
            var dt = O(Bt, 2), at = (it) => {
              var Ct = m_(), It = O(w(Ct), 2);
              Qd(w(It)), y(It), wa(2), y(Ct), p(it, Ct);
            };
            G(dt, (it) => {
              e(rn) < i().bundleProducts.length - 1 && it(at);
            }), p(ct, Ft);
          }), y(Je), _e((ct) => vt = Nt(Je, 1, "kaching-bundles__bundle-products", null, vt, ct), [() => ({ "kaching-bundles__bundle-products--vertical": i().layout === "vertical", "kaching-bundles__bundle-products--hidden": e(de) })]), p(Ee, Je);
        };
        G(ht, (Ee) => {
          e(Y) && Ee(ut);
        });
        var st = O(ht, 2), rt = (Ee) => {
          {
            let Je = d(() => e(F) ? [e(F)] : []);
            ii(Ee, { get product() {
              return u();
            }, get productPersonalisation() {
              return i().productPersonalisation;
            }, get selectedVariantIds() {
              return e(Je);
            }, get quantity() {
              return e(P);
            }, get addPersonalisationModal() {
              return l().addPersonalisationModal;
            }, get onPersonalisationsChange() {
              return H();
            }, get initialValues() {
              return ee();
            } });
          }
        };
        G(st, (Ee) => {
          x() && i().productPersonalisation && (l().blockLayout === "vertical" || l().blockLayout === "plain") && Ee(rt);
        }), y(Wt);
        var et = O(Wt, 2);
        {
          let Ee = d(() => i().upsells || []);
          Ai(et, { get dealBlock() {
            return l();
          }, get dealBarId() {
            return i().id;
          }, get upsells() {
            return e(Ee);
          }, get otherProducts() {
            return h();
          }, get complementaryProducts() {
            return b();
          }, get dealBarSelected() {
            return x();
          }, get dealSellingPlan() {
            return m();
          }, get sets() {
            return e(P);
          }, onChange: (Je) => {
            te(S, Je, !0);
          } });
        }
        var Dt = O(et, 2);
        Oi(Dt, { get selectedDealBarIndex() {
          return k();
        }, get onChange() {
          return M();
        }, get dealBlock() {
          return l();
        }, get dealBar() {
          return i();
        }, get otherProducts() {
          return h();
        }, get selected() {
          return x();
        }, get sellingPlan() {
          return m();
        }, get progressiveGifts() {
          return l().progressiveGifts;
        } });
        var we = O(Dt, 2);
        {
          let Ee = d(() => i().freeGifts || []);
          Vi(we, { get dealBlock() {
            return l();
          }, get freeGifts() {
            return e(Ee);
          }, get freeGiftsSummary() {
            return i().freeGiftsSummary;
          }, get otherProducts() {
            return h();
          }, get dealBarSelected() {
            return x();
          }, get sellingPlan() {
            return m();
          }, get sets() {
            return e(P);
          }, onChange: (Je) => {
            te(z, Je, !0);
          } });
        }
        var Xe = O(we, 2);
        {
          let Ee = d(() => i().multipleGiftsSelectors || []);
          Gi(Xe, { get dealBlock() {
            return l();
          }, get multipleGiftsSelectors() {
            return e(Ee);
          }, get sellingPlan() {
            return m();
          }, get otherProducts() {
            return h();
          }, onChange: (Je) => {
            te(N, Je, !0);
          } });
        }
        p(je, Ue);
      }, $$slots: { default: !0 } });
      var Ae = O(Me, 2), Oe = (je) => {
        qi(je, { get showAsSoldOut() {
          return i().showAsSoldOut;
        }, get replaceLiquid() {
          return e(ie);
        } });
      };
      G(Ae, (je) => {
        i().showAsSoldOutEnabled && i().showAsSoldOut && je(Oe);
      }), y(ye), _e((je) => {
        var Ke;
        qe = Nt(ye, 1, "kaching-bundles__bar", null, qe, je), Be(ye, "data-deal-bar-id", i().id), Ot(ye, e($e)), Be(De, "name", `kaching-bundles-deal-${(Ke = f()) != null ? Ke : ""}`), Ka(De, i().id), Be(De, "id", e(L)), cl(De, x()), De.disabled = i().showAsSoldOutEnabled;
      }, [() => ({ "kaching-bundles__bar--selected": x(), "kaching-bundles__bar--disabled": !e(T) && r().preview })]), p(be, ye);
    };
    G(R, (be) => {
      (e(T) || r().preview) && be(xe);
    }), p(n, Te);
    var Ie = nt(Ce);
    return c(), Ie;
  }
  Gn(["change"]), Ze(Wd, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, currentVariantId: {}, componentId: {}, selectedDealBarIndex: {}, selected: {}, sellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var S_ = $('<img class="kaching-bundles__mix-and-match-choose-product__product-image" alt=""/>'), B_ = $('<span class="kaching-bundles__mix-and-match-choose-product__product-title"> </span>'), C_ = $('<span class="kaching-bundles__mix-and-match-choose-product__subtitle"><!></span>'), I_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product-price"><!></div>'), M_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product-compare-at-price"><!></div>'), z_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product-price-container"><!> <!></div>'), $_ = $("<div><!> <!></div>"), D_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product"><div class="kaching-bundles__mix-and-match-choose-product__product-container"><!> <div class="kaching-bundles__mix-and-match-choose-product__product-content"><!> <!> <!> <!></div></div> <!></div>');
  function Ud(n, t) {
    var r;
    tt(t, !0);
    const a = () => Ve(x, "$config", c), s = () => Ve(k, "$formatPrice", c), o = () => Ve(f, "$translate", c), [c, l] = mt(), i = _(t, "product", 7), u = _(t, "dealBlock", 7), h = _(t, "dealBar", 7), b = _(t, "modal", 7), g = _(t, "onChoose", 7), f = zt(), k = pn(), x = mn();
    let m = Ge(gt(((r = i().variants.find((le) => le.availableForSale)) == null ? void 0 : r.id) || i().variants[0].id));
    const M = d(() => i().variants.find((le) => le.id === e(m)) || i().variants[0]), C = d(() => u().priceRounding ? { perItem: !1, precision: u().priceRoundingPrecision, v2: a().featureFlags.price_rounding_v2 || !1 } : void 0), V = d(() => h().discountType === "percentage" ? pa({ discountType: h().discountType, discountValue: h().discountValue, discountQuantity: 1, variantQuantities: [{ variant: e(M), quantity: 1 }], currencyRate: a().currencyRate, priceRounding: e(C) }) : e(M).price), D = d(() => u().useProductCompareAtPrice && e(M).compareAtPrice ? Math.max(e(M).price, e(M).compareAtPrice) : e(M).price), A = d(() => i().url ? `${i().url}?variant=${e(m)}` : void 0), H = d(() => bn({ priceFormatter: s(), product: i(), totalFullPrice: e(D), totalDiscountedPrice: e(V), quantity: 1, unitQuantity: null })), ee = d(() => e(H)(o()(b().subtitle || ""))), I = d(() => b().buttonText);
    function Z(le) {
      te(m, le, !0);
    }
    var B = { get product() {
      return i();
    }, set product(le) {
      i(le), v();
    }, get dealBlock() {
      return u();
    }, set dealBlock(le) {
      u(le), v();
    }, get dealBar() {
      return h();
    }, set dealBar(le) {
      h(le), v();
    }, get modal() {
      return b();
    }, set modal(le) {
      b(le), v();
    }, get onChoose() {
      return g();
    }, set onChoose(le) {
      g(le), v();
    } }, E = D_(), ue = w(E), z = w(ue), N = (le) => {
      nr(le, { get url() {
        return e(A);
      }, class: "kaching-bundles__mix-and-match-choose-product__product-image-link", children: (W, oe) => {
        var K = S_();
        Be(K, "width", 100), Be(K, "height", 100), _e(() => Be(K, "src", i().image)), p(W, K);
      }, $$slots: { default: !0 } });
    };
    G(z, (le) => {
      i().image && le(N);
    });
    var S = O(z, 2), P = w(S);
    nr(P, { get url() {
      return e(A);
    }, class: "kaching-bundles__mix-and-match-choose-product__product-link", children: (le, W) => {
      var oe = B_(), K = w(oe, !0);
      y(oe), _e(() => kt(K, i().title)), p(le, oe);
    }, $$slots: { default: !0 } });
    var L = O(P, 2), j = (le) => {
      var W = C_();
      Le(w(W), () => e(ee)), y(W), p(le, W);
    };
    G(L, (le) => {
      e(ee) && le(j);
    });
    var Y = O(L, 2), de = (le) => {
      var W = z_(), oe = w(W);
      lt(oe, () => e(V), (U) => {
        var X = I_();
        Le(w(X), () => s()(e(V))), y(X), p(U, X);
      });
      var K = O(oe, 2), Q = (U) => {
        var X = ze();
        lt(ve(X), () => e(D), (ne) => {
          var J = M_();
          Le(w(J), () => s()(e(D))), y(J), p(ne, J);
        }), p(U, X);
      };
      G(K, (U) => {
        e(D) && e(D) > e(V) && U(Q);
      }), y(W), p(le, W);
    };
    G(Y, (le) => {
      h().discountType !== "specific" && le(de);
    });
    var T = O(Y, 2), q = (le) => {
      var W = $_(), oe = w(W);
      ha(oe, { get product() {
        return i();
      }, class: "kaching-bundles__mix-and-match-choose-product__product-option-names" }), Hn(O(oe, 2), { get product() {
        return i();
      }, get selectedVariantId() {
        return e(m);
      }, onChange: Z }), y(W), p(le, W);
    };
    G(T, (le) => {
      i().variants.length > 1 && le(q);
    }), y(S), y(ue), Xt(O(ue, 2), { element: "span", class: "kaching-bundles__mix-and-match-choose-product__product-button", onclick: function() {
      g()({ product: i(), variant: e(M) });
    }, children: (le, W) => {
      wa();
      var oe = Un();
      _e((K) => kt(oe, K), [() => o()(e(I))]), p(le, oe);
    }, $$slots: { default: !0 } }), y(E), p(n, E);
    var se = nt(B);
    return l(), se;
  }
  Ze(Ud, { product: {}, dealBlock: {}, dealBar: {}, modal: {}, onChoose: {} }, [], [], !0);
  const T_ = { red: 0, green: 0, blue: 0, alpha: 0.5 }, V_ = { buttonSize: 16, textSize: 14, overlayColor: { red: 0, green: 0, blue: 0, alpha: 0.5 }, priceColor: { red: 0, green: 0, blue: 0, alpha: 1 }, compareAtPriceColor: { red: 128, green: 128, blue: 128, alpha: 1 }, textColor: { red: 0, green: 0, blue: 0, alpha: 1 }, buttonColor: { red: 0, green: 0, blue: 0, alpha: 1 }, buttonTextColor: { red: 255, green: 255, blue: 255, alpha: 1 }, productPhotoSize: 100, heading: "Select product", buttonText: "Choose" };
  var A_ = $('<img alt="Close"/>'), q_ = $('<div class="kaching-bundles__mix-and-match-choose-product__empty-state"> </div>'), G_ = $('<div class="kaching-bundles__mix-and-match-choose-product"><div class="kaching-bundles__mix-and-match-choose-product__header"><h2 class="kaching-bundles__mix-and-match-choose-product__heading"><!></h2> <!></div> <div class="kaching-bundles__mix-and-match-choose-product__products"><!></div></div>');
  function qo(n, t) {
    tt(t, !0);
    const r = () => Ve(h, "$translate", a), [a, s] = mt(), o = _(t, "dealBlock", 7), c = _(t, "dealBar", 7), l = _(t, "products", 23, () => []), i = _(t, "onChoose", 7), u = _(t, "onClose", 7), h = zt(), b = d(() => {
      var B;
      return (B = o().mixAndMatchChooseProductModal) != null ? B : V_;
    }), g = d(() => ((B) => _n({ "kaching-mix-and-match-choose-product-button-size": B.buttonSize + "px", "kaching-mix-and-match-choose-product-text-size": B.textSize + "px", "kaching-mix-and-match-choose-product-price-color": We(B.priceColor), "kaching-mix-and-match-choose-product-compare-at-price-color": We(B.compareAtPriceColor), "kaching-mix-and-match-choose-product-text-color": We(B.textColor), "kaching-mix-and-match-choose-product-button-color": We(B.buttonColor), "kaching-mix-and-match-choose-product-button-text-color": We(B.buttonTextColor), "kaching-mix-and-match-choose-product-photo-size": B.productPhotoSize + "px" }))(e(b)));
    var f = { get dealBlock() {
      return o();
    }, set dealBlock(B) {
      o(B), v();
    }, get dealBar() {
      return c();
    }, set dealBar(B) {
      c(B), v();
    }, get products() {
      return l();
    }, set products(B = []) {
      l(B), v();
    }, get onChoose() {
      return i();
    }, set onChoose(B) {
      i(B), v();
    }, get onClose() {
      return u();
    }, set onClose(B) {
      u(B), v();
    } }, k = G_(), x = w(k), m = w(x), M = w(m), C = (B) => {
      var E = Un();
      _e((ue) => kt(E, ue), [() => r()(e(b).heading)]), p(B, E);
    };
    G(M, (B) => {
      e(b).heading && B(C);
    }), y(m);
    var V = O(m, 2), D = (B) => {
      Xt(B, { element: "span", class: "kaching-bundles__mix-and-match-choose-product__close", get onclick() {
        return u();
      }, children: (E, ue) => {
        var z = A_();
        _e(() => Be(z, "src", mo)), p(E, z);
      }, $$slots: { default: !0 } });
    };
    G(V, (B) => {
      u() && B(D);
    }), y(x);
    var A = O(x, 2), H = w(A), ee = (B) => {
      var E = q_(), ue = w(E, !0);
      y(E), _e((z) => kt(ue, z), [() => r()("system.no_products_available")]), p(B, E);
    }, I = (B) => {
      var E = ze();
      At(ve(E), 17, l, (ue) => ue.id, (ue, z) => {
        Ud(ue, { get dealBlock() {
          return o();
        }, get dealBar() {
          return c();
        }, get modal() {
          return e(b);
        }, get product() {
          return e(z);
        }, get onChoose() {
          return i();
        } });
      }), p(B, E);
    };
    G(H, (B) => {
      l().length === 0 ? B(ee) : B(I, !1);
    }), y(A), y(k), _e(() => Ot(k, e(g))), p(n, k);
    var Z = nt(f);
    return s(), Z;
  }
  function O_(n, t) {
    n.target === n.currentTarget && t()();
  }
  Ze(qo, { dealBlock: {}, dealBar: {}, products: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var F_ = $('<div class="kaching-bundles"><div class="kaching-bundles__mix-and-match-choose-product-modal" role="none"><div class="kaching-bundles__mix-and-match-choose-product-modal__content"><!></div></div></div>');
  function Hd(n, t) {
    tt(t, !0);
    const r = _(t, "dealBlock", 7), a = _(t, "dealBar", 7), s = _(t, "products", 23, () => []), o = _(t, "isOpen", 7), c = _(t, "onChoose", 7), l = _(t, "onClose", 7);
    var i = { get dealBlock() {
      return r();
    }, set dealBlock(g) {
      r(g), v();
    }, get dealBar() {
      return a();
    }, set dealBar(g) {
      a(g), v();
    }, get products() {
      return s();
    }, set products(g = []) {
      s(g), v();
    }, get isOpen() {
      return o();
    }, set isOpen(g) {
      o(g), v();
    }, get onChoose() {
      return c();
    }, set onChoose(g) {
      c(g), v();
    }, get onClose() {
      return l();
    }, set onClose(g) {
      l(g), v();
    } }, u = ze(), h = ve(u), b = (g) => {
      ml(g, { target: "body", children: (f, k) => {
        var x = F_(), m = w(x);
        m.__click = [O_, l];
        var M = w(m);
        qo(w(M), { get dealBlock() {
          return r();
        }, get dealBar() {
          return a();
        }, get products() {
          return s();
        }, get onChoose() {
          return c();
        }, get onClose() {
          return l();
        } }), y(M), y(m), y(x), _e((C) => Ot(m, C), [() => (function(C) {
          var V;
          return _n({ "kaching-mix-and-match-choose-product-overlay-color": We(((V = C.mixAndMatchChooseProductModal) == null ? void 0 : V.overlayColor) || T_) });
        })(r())]), p(f, x);
      }, $$slots: { default: !0 } });
    };
    return G(h, (g) => {
      o() && g(b);
    }), p(n, u), nt(i);
  }
  Gn(["click"]), Ze(Hd, { dealBlock: {}, dealBar: {}, products: {}, isOpen: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var L_ = $('<img alt="" class="kaching-bundles__mix-and-match-product__image"/>'), j_ = $('<div class="kaching-bundles__mix-and-match-product__image-placeholder"></div>'), E_ = $('<div class="kaching-bundles__mix-and-match-product__title"> </div>'), R_ = $('<div class="kaching-bundles__mix-and-match-product__pricing"><!></div>'), N_ = $('<div class="kaching-bundles__mix-and-match-product"><!> <div class="kaching-bundles__mix-and-match-product__content"><!> <!> <!></div> <!> <!></div> <!>', 1);
  function Zd(n, t) {
    tt(t, !0);
    const r = () => Ve(M, "$translate", a), [a, s] = mt();
    let o = _(t, "dealBlock", 7), c = _(t, "dealBar", 7), l = _(t, "bundleProduct", 7), i = _(t, "product", 7), u = _(t, "swapProducts", 7), h = _(t, "dealBarSelected", 7), b = _(t, "currentVariantId", 7), g = _(t, "mainVariantId", 7), f = _(t, "pricing", 7), k = _(t, "onSwap", 7), x = _(t, "onChange", 7);
    const m = pn(), M = zt();
    let C = Ge(void 0), V = Ge(!1);
    const D = d(() => h() && u().length > 1), A = d(() => r()(c().buttonText || "Change"));
    function H() {
      te(V, !0);
    }
    function ee(K) {
      te(V, !1), te(C, K.variant.id, !0), fa(!1), k()(K.product);
    }
    function I() {
      te(V, !1);
    }
    const Z = d(() => {
      var K, Q;
      return (Q = (K = i()) == null ? void 0 : K.variants) != null ? Q : [];
    }), B = d(() => {
      var K;
      return (K = c().requireVariantSelectionEnabled) != null && K && e(Z).length > 1;
    }), E = d(() => {
      if (e(C) !== void 0 && e(Z).some(({ id: K }) => K === e(C)))
        return e(C);
    }), ue = d(() => e(B) && e(E) === void 0), z = d(() => {
      var K, Q;
      return e(C) !== void 0 && e(Z).some(({ id: U }) => U === e(C)) ? e(C) : l().productGID === "default" && b() && e(Z).some(({ id: U }) => U === b()) ? b() : e(Z).length > 0 ? (Q = (K = e(Z).find((U) => U.availableForSale)) == null ? void 0 : K.id) != null ? Q : e(Z)[0].id : void 0;
    }), N = d(() => {
      var K;
      return e(z) ? (K = i()) == null ? void 0 : K.variants.find((Q) => Q.id === e(z)) : void 0;
    }), S = d(() => {
      var K;
      return (K = i()) != null && K.url && e(N) ? `${i().url}?variant=${e(N).id}` : void 0;
    }), P = d(() => {
      var K, Q;
      return ((K = e(N)) == null ? void 0 : K.image) || ((Q = i()) == null ? void 0 : Q.image);
    }), L = d(() => h() && i() && e(Z).length > 1 && (e(z) || e(B))), j = d(() => h() && l().productGID !== "default" ? e(S) : void 0), Y = d(() => i() ? l().title ? bn({ priceFormatter: Ve(m, "$formatPrice", a), product: i(), totalFullPrice: 0, totalDiscountedPrice: 0, quantity: 1, unitQuantity: null })(l().title) : i().title : "");
    function de(K) {
      te(C, K, !0), fa(!1);
    }
    let T;
    Ye(() => {
      e(N) && (e(ue), en(() => {
        x()({ variant: e(N), product: i(), variantSelectionPending: e(ue) });
      }));
    }), dr(() => {
      l().productGID, te(C, void 0), T = void 0;
    }), dr(() => {
      if (e(B)) return void (T !== void 0 && e(C) === T && (te(C, void 0), T = void 0));
      const K = l().productGID === "default";
      if (!(K || !o().disableVariantOptionSync)) return;
      const Q = K ? b() : g();
      if (!Q || !i() || Q === T) return;
      const U = T;
      if (T = Q, !e(Z).some((J) => J.id === Q)) return;
      const X = e(C) === void 0, ne = e(C) === U && U !== void 0;
      (X || ne) && te(C, Q, !0);
    });
    var q = { get dealBlock() {
      return o();
    }, set dealBlock(K) {
      o(K), v();
    }, get dealBar() {
      return c();
    }, set dealBar(K) {
      c(K), v();
    }, get bundleProduct() {
      return l();
    }, set bundleProduct(K) {
      l(K), v();
    }, get product() {
      return i();
    }, set product(K) {
      i(K), v();
    }, get swapProducts() {
      return u();
    }, set swapProducts(K) {
      u(K), v();
    }, get dealBarSelected() {
      return h();
    }, set dealBarSelected(K) {
      h(K), v();
    }, get currentVariantId() {
      return b();
    }, set currentVariantId(K) {
      b(K), v();
    }, get mainVariantId() {
      return g();
    }, set mainVariantId(K) {
      g(K), v();
    }, get pricing() {
      return f();
    }, set pricing(K) {
      f(K), v();
    }, get onSwap() {
      return k();
    }, set onSwap(K) {
      k(K), v();
    }, get onChange() {
      return x();
    }, set onChange(K) {
      x(K), v();
    } }, se = ze(), le = ve(se), W = (K) => {
      var Q = N_(), U = ve(Q), X = w(U), ne = (fe) => {
        nr(fe, { get url() {
          return e(j);
        }, class: "kaching-bundles__mix-and-match-product__image-link", children: (Fe, $e) => {
          var Ce = L_();
          Be(Ce, "height", 50), Be(Ce, "width", 50), _e(() => Be(Ce, "src", e(P))), p(Fe, Ce);
        }, $$slots: { default: !0 } });
      }, J = (fe) => {
        p(fe, j_());
      };
      G(X, (fe) => {
        e(P) ? fe(ne) : fe(J, !1);
      });
      var F = O(X, 2), ae = w(F);
      nr(ae, { get url() {
        return e(j);
      }, class: "kaching-bundles__mix-and-match-product__title-link", children: (fe, Fe) => {
        var $e = E_(), Ce = w($e, !0);
        y($e), _e(() => kt(Ce, e(Y))), p(fe, $e);
      }, $$slots: { default: !0 } });
      var ie = O(ae, 2);
      va(ie, { get dealBlock() {
        return o();
      }, get variant() {
        return e(N);
      } });
      var ke = O(ie, 2), re = (fe) => {
        {
          let Fe = d(() => {
            var Ce;
            return e(B) ? (Ce = e(E)) != null ? Ce : null : e(z) || 0;
          }), $e = d(() => e(B) ? r()("system.select_variant_placeholder") : void 0);
          Hn(fe, { get product() {
            return i();
          }, get selectedVariantId() {
            return e(Fe);
          }, get placeholderText() {
            return e($e);
          }, onChange: de });
        }
      };
      G(ke, (fe) => {
        e(L) && fe(re);
      }), y(F);
      var pe = O(F, 2), ge = (fe) => {
        var Fe = R_();
        ks(w(Fe), { get discountedPrice() {
          return f().discountedPrice;
        }, get fullPrice() {
          return f().fullPrice;
        }, unitPrice: null, unitPriceReference: null, ignoreUnitPrice: !0 }), y(Fe), p(fe, Fe);
      };
      G(pe, (fe) => {
        f() && fe(ge);
      });
      var me = O(pe, 2), ce = (fe) => {
        Xt(fe, { element: "div", class: "kaching-bundles__mix-and-match-product__swap-button", onclick: H, children: (Fe, $e) => {
          wa();
          var Ce = Un();
          _e(() => kt(Ce, e(A))), p(Fe, Ce);
        }, $$slots: { default: !0 } });
      };
      G(me, (fe) => {
        e(D) && fe(ce);
      }), y(U), Hd(O(U, 2), { get dealBlock() {
        return o();
      }, get dealBar() {
        return c();
      }, get products() {
        return u();
      }, get isOpen() {
        return e(V);
      }, onChoose: ee, onClose: I }), p(K, Q);
    };
    G(le, (K) => {
      i() && K(W);
    }), p(n, se);
    var oe = nt(q);
    return s(), oe;
  }
  Ze(Zd, { dealBlock: {}, dealBar: {}, bundleProduct: {}, product: {}, swapProducts: {}, dealBarSelected: {}, currentVariantId: {}, mainVariantId: {}, pricing: {}, onSwap: {}, onChange: {} }, [], [], !0);
  const Jd = (n, t) => {
    if (!t || t.length === 0) return n;
    const r = t.map(Kt);
    return { ...n, variants: n.variants.filter((a) => r.includes(a.id)) };
  };
  var Q_ = Dn('<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 6.5V14.5M6.5 10.5H14.5M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Yd(n) {
    p(n, Q_());
  }
  function W_(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  Ze(Yd, {}, [], [], !0);
  var U_ = $('<img class="kaching-bundles__bar-image" alt=""/>'), H_ = $('<div class="kaching-bundles__bar-radio"></div>'), Z_ = $('<span class="kaching-bundles__bar-title"><!></span>'), J_ = $('<span class="kaching-bundles__bar-label"><!></span>'), Y_ = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), K_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), X_ = $("<!> <!>", 1), e0 = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), t0 = $('<div class="kaching-bundles__mix-and-match-products__placeholder"><span>Select product</span></div>'), n0 = $('<div class="kaching-bundles__mix-and-match-products__divider"><div class="kaching-bundles__mix-and-match-products__divider-line">&ZeroWidthSpace;</div> <div class="kaching-bundles__mix-and-match-products__divider-icon"><!></div> <div class="kaching-bundles__mix-and-match-products__divider-line">&ZeroWidthSpace;</div></div>'), r0 = $("<!> <!>", 1), a0 = $("<div></div>"), i0 = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!></div> <!> <!> <!> <!>', 1), l0 = $('<div><input type="radio"/> <!> <!></div>');
  function Kd(n, t) {
    tt(t, !0);
    const r = () => Ve(E, "$config", o), a = () => Ve(Z, "$formatPrice", o), s = () => Ve(I, "$translate", o), [o, c] = mt(), l = _(t, "dealBlock", 7), i = _(t, "dealBar", 7), u = _(t, "product", 7), h = _(t, "otherProducts", 23, () => []), b = _(t, "complementaryProducts", 23, () => []), g = _(t, "currentVariantId", 7), f = _(t, "componentId", 7), k = _(t, "selectedDealBarIndex", 7), x = _(t, "selected", 7, !1), m = _(t, "sellingPlan", 7), M = _(t, "onProgressiveGiftsChange", 7), C = _(t, "onDealBarSelect", 7), V = _(t, "onDealBarDeselect", 7), D = _(t, "onVariantSelect", 7), A = _(t, "onVariantsChange", 7), H = _(t, "onPersonalisationsChange", 7), ee = _(t, "personalisationInitialValues", 23, () => []), I = zt(), Z = pn(), B = On(), E = mn();
    let ue = Ge(gt({})), z = Ge(gt({}));
    const N = d(() => Object.fromEntries(i().bundleProducts.map((R) => [R.id, S(R).filter(P)])));
    function S(R) {
      var xe;
      const Ie = new Map(((xe = R.selectedProducts) != null ? xe : []).map((qe) => [Kt(qe.id), qe.variantGIDs])), be = h().filter((qe) => Ie.has(qe.id)).map((qe) => Jd(qe, Ie.get(qe.id))), ye = (function(qe) {
        if (!qe) return;
        if (qe === "default") return u();
        const De = Kt(qe);
        return h().find((Me) => Me.id === De);
      })(R.productGID);
      return ye ? [Jd(ye, R.variantGIDs), ...be.filter((qe) => qe.id !== ye.id)] : be;
    }
    function P(R) {
      return R.availableForSale && R.variants.some((xe) => xe.availableForSale);
    }
    let L = Ge(gt([])), j = Ge(gt([])), Y = Ge(gt([]));
    const de = d(() => `${i().id}_${f()}`), T = d(() => i().bundleProducts.filter(({ productGID: R }) => R)), q = d(() => e(T).every((R) => me(R))), se = d(() => i().showProductsOnlyWhenSelected && !x()), le = d(() => e(T).every((R) => {
      var xe, Ie;
      return ((Ie = (xe = e(N)[R.id]) == null ? void 0 : xe.length) != null ? Ie : 0) > 0;
    })), W = d(() => {
      return l() ? (R = l(), xe = e(ue), i().bundleProducts.map((Ie) => {
        const be = xe[Ie.id];
        if (!be) return 0;
        const { variant: ye } = be;
        let qe = ye.price;
        return ye.compareAtPrice && R.useProductCompareAtPrice && (qe = Math.max(qe, ye.compareAtPrice)), qe;
      }).reduce((Ie, be) => Ie + be, 0)) : 0;
      var R, xe;
    }), oe = d(() => _l(e(W), e(L), e(j))), K = d(() => l().priceRounding ? { perItem: !1, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), Q = d(() => l() ? bs(i(), e(ue), r().currencyRate, e(K), m()) : 0), U = d(() => e(oe) > e(Q)), X = d(() => i().showProductPrices ? (function(R, xe, Ie, be, ye, qe) {
      const De = R.bundleProducts.filter(({ productGID: Ke }) => Ke).flatMap((Ke) => {
        const Ue = xe[Ke.id];
        if (!Ue) return [];
        const ot = rr(Ue.product, Ue.variant, ye), Wt = ot ? fo(Ue.variant.price, ot) : Ue.variant.price, { price: bt, compareAtPrice: qt } = Ue.variant, nn = qe && qt ? Math.max(bt, qt) : bt;
        return [{ id: Ke.id, basisPrice: Wt, fullPrice: nn }];
      }), Me = De.reduce((Ke, Ue) => Ke + Ue.basisPrice, 0);
      if (Me === 0) return Object.fromEntries(De.map((Ke) => [Ke.id, { discountedPrice: 0, fullPrice: Ke.fullPrice }]));
      const Ae = bs(R, xe, Ie, be, ye), Oe = De.map((Ke) => {
        const Ue = Ae * Ke.basisPrice / Me;
        return { ...Ke, share: Math.floor(Ue), remainder: Ue % 1 };
      });
      let je = Ae - Oe.reduce((Ke, { share: Ue }) => Ke + Ue, 0);
      for (const Ke of [...Oe].sort((Ue, ot) => ot.remainder - Ue.remainder)) {
        if (je <= 0) break;
        Ke.share += 1, je -= 1;
      }
      return Object.fromEntries(Oe.map((Ke) => [Ke.id, { discountedPrice: Ke.share, fullPrice: Ke.fullPrice }]));
    })(i(), e(ue), r().currencyRate, e(K), m(), l().useProductCompareAtPrice) : void 0), ne = d(() => {
      var R;
      const xe = e(T)[0];
      if (xe) return (R = e(ue)[xe.id]) == null ? void 0 : R.variant.id;
    }), J = d(() => bn({ priceFormatter: a(), product: u(), dealBar: i(), totalFullPrice: e(W), totalCompareAtPrice: e(oe), totalDiscountedPrice: e(Q), quantity: 1, unitQuantity: null, sellingPlan: m() })), F = d(() => e(J)(s()(i().title))), ae = d(() => e(J)(s()(i().subtitle))), ie = d(() => e(J)(s()(i().label))), ke = d(() => fl(l(), i()).map((R) => $a(R, s(), e(J)))), re = d(() => Da(e(ke))), pe = d(() => Ve(B, "$getMediaImageUrl", o)(i().mediaImageGID) || kl);
    function ge(R) {
      x() && (R.preventDefault(), R.stopPropagation(), V()());
    }
    function me(R) {
      var xe, Ie;
      return (Ie = e(z)[R.id]) != null ? Ie : (xe = e(N)[R.id]) == null ? void 0 : xe[0];
    }
    Ya(() => {
      x() && C()({ dealBarId: i().id, preselected: !0 });
    }), Ye(() => {
      x() && (Pa(e(ue)), Pa(e(Y)), Pa(e(L)), Pa(e(j)), m(), en(() => {
        (function() {
          var R;
          if (!i().bundleProducts.map(({ id: Oe }) => Oe).every((Oe) => e(ue)[Oe])) return;
          const xe = [];
          for (const Oe of i().bundleProducts) {
            const je = e(ue)[Oe.id];
            je && xe.push({ id: Oe.id, variant: je.variant, product: je.product, quantity: 1, variantSelectionPending: je.variantSelectionPending });
          }
          if (xe.length === 0) return;
          const Ie = e(Q) + e(Y).reduce((Oe, je) => Oe + je.discountedPrice, 0), be = e(L).reduce((Oe, je) => je.showPrice ? Oe + je.fullPrice : Oe, 0) + e(j).reduce((Oe, je) => Oe + je.fullPrice * je.quantity, 0), ye = e(W) + e(Y).reduce((Oe, je) => Oe + je.fullPrice, 0) + be, qe = bs(i(), e(ue), r().currencyRate, e(K), void 0), De = u().sellingPlans.map((Oe) => ({ sellingPlanId: Oe.id, discountedPrice: bs(i(), e(ue), r().currencyRate, e(K), Oe) })), Me = (R = i().requireVariantSelectionEnabled) != null && R, Ae = Me ? i().bundleProducts.filter(({ id: Oe }) => {
            var je;
            return (je = e(ue)[Oe]) == null ? void 0 : je.variantSelectionPending;
          }).length : 0;
          A()({ bundleProducts: xe, freeGifts: [...e(L), ...e(j)], upsells: e(Y), pricing: { discountedPrice: Ie, fullPrice: ye, giftValue: be, discountedPricePerItem: e(Q), fullPricePerItem: e(W), discountedPriceWithoutSellingPlan: qe, discountedPricesForSellingPlans: De }, validation: { requiresItemSelection: Me, allItemsSelected: Ae === 0, missingItemsCount: Ae } });
        })();
      }));
    });
    const ce = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? xl(i().showAsSoldOut) : "");
    var fe = { get dealBlock() {
      return l();
    }, set dealBlock(R) {
      l(R), v();
    }, get dealBar() {
      return i();
    }, set dealBar(R) {
      i(R), v();
    }, get product() {
      return u();
    }, set product(R) {
      u(R), v();
    }, get otherProducts() {
      return h();
    }, set otherProducts(R = []) {
      h(R), v();
    }, get complementaryProducts() {
      return b();
    }, set complementaryProducts(R = []) {
      b(R), v();
    }, get currentVariantId() {
      return g();
    }, set currentVariantId(R) {
      g(R), v();
    }, get componentId() {
      return f();
    }, set componentId(R) {
      f(R), v();
    }, get selectedDealBarIndex() {
      return k();
    }, set selectedDealBarIndex(R) {
      k(R), v();
    }, get selected() {
      return x();
    }, set selected(R = !1) {
      x(R), v();
    }, get sellingPlan() {
      return m();
    }, set sellingPlan(R) {
      m(R), v();
    }, get onProgressiveGiftsChange() {
      return M();
    }, set onProgressiveGiftsChange(R) {
      M(R), v();
    }, get onDealBarSelect() {
      return C();
    }, set onDealBarSelect(R) {
      C(R), v();
    }, get onDealBarDeselect() {
      return V();
    }, set onDealBarDeselect(R) {
      V(R), v();
    }, get onVariantSelect() {
      return D();
    }, set onVariantSelect(R) {
      D(R), v();
    }, get onVariantsChange() {
      return A();
    }, set onVariantsChange(R) {
      A(R), v();
    }, get onPersonalisationsChange() {
      return H();
    }, set onPersonalisationsChange(R) {
      H(R), v();
    }, get personalisationInitialValues() {
      return ee();
    }, set personalisationInitialValues(R = []) {
      ee(R), v();
    } }, Fe = ze(), $e = ve(Fe), Ce = (R) => {
      var xe = l0();
      let Ie;
      var be = w(xe);
      da(be), be.__change = [W_, C, i];
      var ye = O(be, 2);
      ai(ye, { get for() {
        return e(de);
      }, get soldOut() {
        return i().showAsSoldOutEnabled;
      }, get borderHost() {
        return e(re);
      }, children: (Me, Ae) => {
        var Oe = i0(), je = ve(Oe);
        At(je, 17, () => e(ke), (rt) => rt.id, (rt, et) => {
          ba(rt, { get badge() {
            return e(et);
          }, get blockLayout() {
            return l().blockLayout;
          } });
        });
        var Ke = O(je, 2), Ue = w(Ke);
        Xt(Ue, { element: "div", class: "kaching-bundles__bar-main", onclick: ge, children: (rt, et) => {
          var Dt = e0(), we = ve(Dt), Xe = (it) => {
            var Ct = U_();
            _e(() => Be(Ct, "src", e(pe))), p(it, Ct);
          }, Ee = (it) => {
            p(it, H_());
          };
          G(we, (it) => {
            i().mediaImageGID ? it(Xe) : it(Ee, !1);
          });
          var Je = O(we, 2), vt = w(Je), ct = w(vt), $t = w(ct);
          lt($t, () => e(F), (it) => {
            var Ct = Z_();
            Le(w(Ct), () => e(F)), y(Ct), p(it, Ct);
          });
          var rn = O($t, 2), Ft = (it) => {
            var Ct = ze();
            lt(ve(Ct), () => e(ie), (It) => {
              var ln = J_();
              Le(w(ln), () => e(ie)), y(ln), p(It, ln);
            }), p(it, Ct);
          };
          G(rn, (it) => {
            e(ie) && it(Ft);
          }), y(ct);
          var Bt = O(ct, 2), Ut = (it) => {
            var Ct = ze();
            lt(ve(Ct), () => e(ae), (It) => {
              var ln = Y_();
              Le(w(ln), () => e(ae)), y(ln), p(It, ln);
            }), p(it, Ct);
          };
          G(Bt, (it) => {
            e(ae) && it(Ut);
          }), y(vt);
          var Lt = O(vt, 2), dt = w(Lt), at = (it) => {
            var Ct = X_(), It = ve(Ct);
            lt(It, () => e(Q), (Qt) => {
              Yr(Qt, { get amount() {
                return e(Q);
              }, showPricesPerItem: !1, get unitLabel() {
                return l().unitLabel;
              } });
            });
            var ln = O(It, 2), Mt = (Qt) => {
              var pt = ze();
              lt(ve(pt), () => e(oe), (jt) => {
                var Tt = K_();
                Le(w(Tt), () => a()(e(oe))), y(Tt), _e((Bn) => Be(Tt, "data-a11y-label", Bn), [() => s()("system.original_price")]), p(jt, Tt);
              }), p(Qt, pt);
            };
            G(ln, (Qt) => {
              e(U) && Qt(Mt);
            }), p(it, Ct);
          };
          G(dt, (it) => {
            e(q) && it(at);
          }), y(Lt), y(Je), p(rt, Dt);
        }, $$slots: { default: !0 } });
        var ot = O(Ue, 2), Wt = (rt) => {
          Va(rt, { get highlights() {
            return i().highlights;
          }, get isSelected() {
            return x();
          }, get replaceLiquid() {
            return e(J);
          } });
        };
        G(ot, (rt) => {
          i().highlights && rt(Wt);
        });
        var bt = O(ot, 2), qt = (rt) => {
          var et = a0();
          let Dt;
          At(et, 23, () => i().bundleProducts, (we) => we.id, (we, Xe, Ee) => {
            var Je = r0(), vt = ve(Je), ct = (Bt) => {
              {
                let Ut = d(() => me(e(Xe))), Lt = d(() => {
                  var dt;
                  return (dt = e(X)) == null ? void 0 : dt[e(Xe).id];
                });
                Zd(Bt, { get bundleProduct() {
                  return e(Xe);
                }, get product() {
                  return e(Ut);
                }, get swapProducts() {
                  return e(N)[e(Xe).id];
                }, get dealBlock() {
                  return l();
                }, get dealBar() {
                  return i();
                }, get dealBarSelected() {
                  return x();
                }, get currentVariantId() {
                  return g();
                }, get mainVariantId() {
                  return e(ne);
                }, get pricing() {
                  return e(Lt);
                }, onSwap: (dt) => (function(at, it) {
                  e(z)[at] = it;
                })(e(Xe).id, dt), onChange: (dt) => (function(at, it) {
                  const { variant: Ct, product: It, variantSelectionPending: ln } = it;
                  e(ue)[at] = { variant: Ct, product: It, variantSelectionPending: ln }, x() && i().bundleProducts.map(({ id: Mt }) => Mt).every((Mt) => e(ue)[Mt]) && (at !== i().bundleProducts[0].id || ln || D()({ variantId: Ct.id }));
                })(e(Xe).id, dt) });
              }
            }, $t = (Bt) => {
              var Ut = ze(), Lt = ve(Ut), dt = (at) => {
                p(at, t0());
              };
              G(Lt, (at) => {
                r().preview && at(dt);
              }, !0), p(Bt, Ut);
            };
            G(vt, (Bt) => {
              e(Xe).productGID ? Bt(ct) : Bt($t, !1);
            });
            var rn = O(vt, 2), Ft = (Bt) => {
              var Ut = n0(), Lt = O(w(Ut), 2);
              Yd(w(Lt)), y(Lt), wa(2), y(Ut), p(Bt, Ut);
            };
            G(rn, (Bt) => {
              e(Ee) < i().bundleProducts.length - 1 && Bt(Ft);
            }), p(we, Je);
          }), y(et), _e((we) => Dt = Nt(et, 1, "kaching-bundles__mix-and-match-products", null, Dt, we), [() => ({ "kaching-bundles__mix-and-match-products--hidden": e(se) })]), p(rt, et);
        };
        G(bt, (rt) => {
          e(q) && rt(qt);
        });
        var nn = O(bt, 2), Pe = (rt) => {
          {
            let et = d(() => e(ne) ? [e(ne)] : []);
            ii(rt, { get product() {
              return u();
            }, get productPersonalisation() {
              return i().productPersonalisation;
            }, get selectedVariantIds() {
              return e(et);
            }, quantity: 1, get addPersonalisationModal() {
              return l().addPersonalisationModal;
            }, get onPersonalisationsChange() {
              return H();
            }, get initialValues() {
              return ee();
            } });
          }
        };
        G(nn, (rt) => {
          x() && i().productPersonalisation && (l().blockLayout === "vertical" || l().blockLayout === "plain") && rt(Pe);
        }), y(Ke);
        var He = O(Ke, 2);
        {
          let rt = d(() => i().upsells || []);
          Ai(He, { get dealBlock() {
            return l();
          }, get dealBarId() {
            return i().id;
          }, get upsells() {
            return e(rt);
          }, get otherProducts() {
            return h();
          }, get complementaryProducts() {
            return b();
          }, get dealBarSelected() {
            return x();
          }, get dealSellingPlan() {
            return m();
          }, sets: 1, onChange: (et) => {
            te(Y, et, !0);
          } });
        }
        var ht = O(He, 2);
        {
          let rt = d(() => ({ ...i(), dealBarType: ft.Bundle, quantitySelector: !1, bundleProducts: i().bundleProducts.map((et) => ({ ...et, quantity: 1, variantGIDs: null, defaultVariantGID: null, mediaImageGID: null, discountType: "default", discountValue: 0 })) }));
          Oi(ht, { get selectedDealBarIndex() {
            return k();
          }, get onChange() {
            return M();
          }, get dealBlock() {
            return l();
          }, get sellingPlan() {
            return m();
          }, get dealBar() {
            return e(rt);
          }, get otherProducts() {
            return h();
          }, get selected() {
            return x();
          }, get progressiveGifts() {
            return l().progressiveGifts;
          } });
        }
        var ut = O(ht, 2);
        {
          let rt = d(() => i().freeGifts || []);
          Vi(ut, { get dealBlock() {
            return l();
          }, get freeGifts() {
            return e(rt);
          }, get freeGiftsSummary() {
            return i().freeGiftsSummary;
          }, get otherProducts() {
            return h();
          }, get dealBarSelected() {
            return x();
          }, get sellingPlan() {
            return m();
          }, sets: 1, onChange: (et) => {
            te(L, et, !0);
          } });
        }
        var st = O(ut, 2);
        {
          let rt = d(() => i().multipleGiftsSelectors || []);
          Gi(st, { get dealBlock() {
            return l();
          }, get multipleGiftsSelectors() {
            return e(rt);
          }, get sellingPlan() {
            return m();
          }, get otherProducts() {
            return h();
          }, onChange: (et) => {
            te(j, et, !0);
          } });
        }
        p(Me, Oe);
      }, $$slots: { default: !0 } });
      var qe = O(ye, 2), De = (Me) => {
        qi(Me, { get showAsSoldOut() {
          return i().showAsSoldOut;
        }, get replaceLiquid() {
          return e(J);
        } });
      };
      G(qe, (Me) => {
        i().showAsSoldOutEnabled && i().showAsSoldOut && Me(De);
      }), y(xe), _e((Me) => {
        var Ae;
        Ie = Nt(xe, 1, "kaching-bundles__bar", null, Ie, Me), Be(xe, "data-deal-bar-id", i().id), Ot(xe, e(ce)), Be(be, "name", `kaching-bundles-deal-${(Ae = f()) != null ? Ae : ""}`), Ka(be, i().id), Be(be, "id", e(de)), cl(be, x()), be.disabled = i().showAsSoldOutEnabled;
      }, [() => ({ "kaching-bundles__bar--selected": x(), "kaching-bundles__bar--disabled": !e(le) && r().preview })]), p(R, xe);
    };
    G($e, (R) => {
      (e(le) || r().preview) && R(Ce);
    }), p(n, Fe);
    var Te = nt(fe);
    return c(), Te;
  }
  Gn(["change"]), Ze(Kd, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, currentVariantId: {}, componentId: {}, selectedDealBarIndex: {}, selected: {}, sellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var s0 = Dn('<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.2008 16C27.2008 18.9705 26.0208 21.8192 23.9204 23.9196C21.82 26.0201 18.9712 27.2 16.0008 27.2C13.0304 27.2 10.1816 26.0201 8.08119 23.9196C5.98078 21.8192 4.80078 18.9705 4.80078 16C4.80078 13.0296 5.98078 10.1809 8.08119 8.08045C10.1816 5.98005 13.0304 4.80005 16.0008 4.80005C18.9712 4.80005 21.82 5.98005 23.9204 8.08045C26.0208 10.1809 27.2008 13.0296 27.2008 16ZM10.0008 16C10.0008 15.6818 10.1272 15.3766 10.3523 15.1515C10.5773 14.9265 10.8825 14.8 11.2008 14.8H14.8008V11.2C14.8008 10.8818 14.9272 10.5766 15.1523 10.3515C15.3773 10.1265 15.6825 10 16.0008 10C16.319 10 16.6243 10.1265 16.8493 10.3515C17.0744 10.5766 17.2008 10.8818 17.2008 11.2V14.8H20.8008C21.119 14.8 21.4243 14.9265 21.6493 15.1515C21.8744 15.3766 22.0008 15.6818 22.0008 16C22.0008 16.3183 21.8744 16.6235 21.6493 16.8486C21.4243 17.0736 21.119 17.2 20.8008 17.2H17.2008V20.8C17.2008 21.1183 17.0744 21.4235 16.8493 21.6486C16.6243 21.8736 16.319 22 16.0008 22C15.6825 22 15.3773 21.8736 15.1523 21.6486C14.9272 21.4235 14.8008 21.1183 14.8008 20.8V17.2H11.2008C10.8825 17.2 10.5773 17.0736 10.3523 16.8486C10.1272 16.6235 10.0008 16.3183 10.0008 16Z" fill="currentColor"></path></svg>');
  function Xd(n, t) {
    tt(t, !0);
    let r = _(t, "class", 7);
    var a = { get class() {
      return r();
    }, set class(o) {
      r(o), v();
    } }, s = s0();
    return _e(() => Nt(s, 0, sl(r()))), p(n, s), nt(a);
  }
  Ze(Xd, { class: {} }, [], [], !0);
  const o0 = (n) => {
    const { collectionBreaks: t, colors: r, cornerRadius: a } = n;
    return t ? _n({ "kaching-collection-breaks-product-photo-size": t.productPhotoSize + "px", "kaching-collection-breaks-button-color": t.buttonColor && We(t.buttonColor), "kaching-collection-breaks-product-title-color": We(r.title), "kaching-collection-breaks-image-border-radius": (a || 0) / 2 + "px" }) : "";
  };
  function c0(n, t) {
    n.target === n.currentTarget && te(t, !1);
  }
  var u0 = $('<img class="kaching-bundles__collection-product__image" alt=""/>'), d0 = $('<span class="kaching-bundles__collection-product__title"> </span>'), g0 = $("<!> <!>", 1), h0 = $('<img alt=""/>'), p0 = $('<div class="kaching-bundles__collection-product"><div class="kaching-bundles__collection-product__main"><!> <div class="kaching-bundles__collection-product__content"><!> <!> <!></div></div> <!></div>'), b0 = $('<img class="kaching-bundles__collection-product__image" alt="" height="40" width="40"/>'), f0 = $('<div class="kaching-bundles"><div class="kaching-bundles__choose-product-modal" role="none"><div class="kaching-bundles__choose-product-modal__content"><!></div></div></div>'), v0 = $('<div><div class="kaching-bundles__collection-product__main"><!> <!></div> <!></div>');
  function Go(n, t) {
    tt(t, !0);
    const r = () => Ve(k, "$config", a), [a, s] = mt(), o = _(t, "dealBlock", 7), c = _(t, "dealBar", 7), l = _(t, "mainProduct", 7, null), i = _(t, "products", 7), u = _(t, "selectedProductVariant", 7, null), h = _(t, "onChange", 7), b = _(t, "onRemove", 7), g = zt(), f = On(), k = mn();
    let x = Ge(!1);
    const m = d(() => o().collectionBreaks), M = d(() => {
      var j;
      return ((j = u()) == null ? void 0 : j.product) || l();
    }), C = d(() => {
      var j, Y;
      return ((j = u()) == null ? void 0 : j.variant) || ((Y = e(M)) == null ? void 0 : Y.variants[0]) || null;
    }), V = d(() => Ve(f, "$getMediaImageUrl", a)(e(m).mediaImageGID)), D = d(() => Ve(g, "$translate", a)(e(m).buttonText)), A = d(() => e(m).requireItemSelectionAlert), H = d(() => e(m).requireItemSelectionEnabled), ee = d(() => r().preview && r().previewAlerts || Ve($o, "$requireSelectionError", a)), I = d(() => {
      var j, Y;
      return (j = e(M)) != null && j.url ? `${e(M).url}?variant=${(Y = e(C)) == null ? void 0 : Y.id}` : void 0;
    });
    function Z(j) {
      te(x, !1), h()(j);
    }
    function B() {
      var j;
      (j = b()) == null || j();
    }
    function E(j) {
      const Y = e(M).variants.find((de) => de.id === j);
      Y && h()({ product: e(M), variant: Y });
    }
    var ue = { get dealBlock() {
      return o();
    }, set dealBlock(j) {
      o(j), v();
    }, get dealBar() {
      return c();
    }, set dealBar(j) {
      c(j), v();
    }, get mainProduct() {
      return l();
    }, set mainProduct(j = null) {
      l(j), v();
    }, get products() {
      return i();
    }, set products(j) {
      i(j), v();
    }, get selectedProductVariant() {
      return u();
    }, set selectedProductVariant(j = null) {
      u(j), v();
    }, get onChange() {
      return h();
    }, set onChange(j) {
      h(j), v();
    }, get onRemove() {
      return b();
    }, set onRemove(j) {
      b(j), v();
    } }, z = ze(), N = ve(z), S = (j) => {
      var Y = p0(), de = w(Y), T = w(de);
      {
        let U = d(() => l() ? void 0 : e(I));
        nr(T, { get url() {
          return e(U);
        }, class: "kaching-bundles__collection-product__link", children: (X, ne) => {
          var J = u0();
          _e(() => Be(J, "src", e(C).image || e(M).image)), p(X, J);
        }, $$slots: { default: !0 } });
      }
      var q = O(T, 2), se = w(q), le = (U) => {
        {
          let X = d(() => l() ? void 0 : e(I));
          nr(U, { get url() {
            return e(X);
          }, class: "kaching-bundles__collection-product__link", children: (ne, J) => {
            var F = d0(), ae = w(F, !0);
            y(F), _e(() => kt(ae, e(M).title)), p(ne, F);
          }, $$slots: { default: !0 } });
        }
      };
      G(se, (U) => {
        e(m).showProductName && U(le);
      });
      var W = O(se, 2), oe = (U) => {
        var X = g0(), ne = ve(X);
        ha(ne, { get product() {
          return e(M);
        } });
        var J = O(ne, 2);
        {
          let F = d(() => {
            var ae;
            return (ae = e(C)) == null ? void 0 : ae.id;
          });
          Hn(J, { get product() {
            return e(M);
          }, get selectedVariantId() {
            return e(F);
          }, onChange: E });
        }
        p(U, X);
      };
      G(W, (U) => {
        e(M).variants.length > 1 && U(oe);
      }), va(O(W, 2), { get dealBlock() {
        return o();
      }, get variant() {
        return e(C);
      } }), y(q), y(de);
      var K = O(de, 2), Q = (U) => {
        Xt(U, { element: "div", class: "kaching-bundles__collection-product__remove-button", "aria-label": "Remove product", onclick: B, children: (X, ne) => {
          var J = h0();
          _e(() => Be(J, "src", "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), p(X, J);
        }, $$slots: { default: !0 } });
      };
      G(K, (U) => {
        l() || U(Q);
      }), y(Y), p(j, Y);
    }, P = (j) => {
      var Y = v0();
      let de;
      var T = w(Y), q = w(T);
      Xt(q, { element: "div", class: "kaching-bundles__collection-product__choose-product-image", onclick: () => {
        te(x, !0);
      }, children: (K, Q) => {
        var U = ze(), X = ve(U), ne = (F) => {
          var ae = ze(), ie = ve(ae), ke = (re) => {
            var pe = b0();
            _e(() => Be(pe, "src", e(V))), p(re, pe);
          };
          G(ie, (re) => {
            e(V) && re(ke);
          }), p(F, ae);
        }, J = (F) => {
          Xd(F, { class: "kaching-bundles__collection-product__image kaching-bundles__collection-product__image--default" });
        };
        G(X, (F) => {
          e(m).mediaImageGID ? F(ne) : F(J, !1);
        }), p(K, U);
      }, $$slots: { default: !0 } });
      var se = O(q, 2), le = (K) => {
        Xt(K, { element: "div", class: "kaching-bundles__collection-product__choose-product-button", onclick: () => {
          te(x, !0);
        }, children: (Q, U) => {
          wa();
          var X = Un();
          _e(() => kt(X, e(D))), p(Q, X);
        }, $$slots: { default: !0 } });
      };
      G(se, (K) => {
        e(D) && K(le);
      }), y(T);
      var W = O(T, 2), oe = (K) => {
        ml(K, { target: "body", children: (Q, U) => {
          var X = f0(), ne = w(X);
          ne.__click = [c0, x];
          var J = w(ne);
          xo(w(J), { get dealBlock() {
            return o();
          }, get dealBar() {
            return c();
          }, get products() {
            return i();
          }, onChoose: Z, onClose: () => {
            te(x, !1);
          } }), y(J), y(ne), y(X), _e((F) => Ot(ne, F), [() => (function(F) {
            return _n({ "kaching-choose-product-overlay-color": We(F.chooseProductModal.overlayColor) });
          })(o())]), p(Q, X);
        }, $$slots: { default: !0 } });
      };
      G(W, (K) => {
        e(x) && K(oe);
      }), y(Y), _e((K) => de = Nt(Y, 1, "kaching-bundles__collection-product", null, de, K), [() => ({ "kaching-bundles__collection-product--require-selection": e(ee) && e(H) && e(A) })]), p(j, Y);
    };
    G(N, (j) => {
      e(M) && e(C) ? j(S) : j(P, !1);
    }), p(n, z);
    var L = nt(ue);
    return s(), L;
  }
  function _0(n, t, r, a) {
    t()({ dealBarId: r().id, dealBarQuantity: a(r()), preselected: !1 });
  }
  Gn(["click"]), Ze(Go, { dealBlock: {}, dealBar: {}, mainProduct: {}, products: {}, selectedProductVariant: {}, onChange: {}, onRemove: {} }, [], [], !0);
  var k0 = $('<img class="kaching-bundles__bar-image" alt=""/>'), m0 = $('<div class="kaching-bundles__bar-radio"></div>'), x0 = $('<span class="kaching-bundles__bar-title"><!></span>'), y0 = $('<span class="kaching-bundles__bar-label"><!></span>'), w0 = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), P0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), S0 = $('<div class="kaching-bundles__bar-price"><!></div>'), B0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), C0 = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), I0 = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), M0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), z0 = $("<!> <!>", 1), $0 = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), D0 = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), T0 = $('<div class="kaching-bundles__bar-collection-products"></div>'), V0 = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), A0 = $('<div><input type="radio"/> <!> <!></div>');
  function eg(n, t) {
    tt(t, !0);
    const r = () => Ve(N, "$config", c), a = () => Ve(zo, "$chosenCollectionBreaksProducts", c), s = () => Ve(ue, "$formatPrice", c), o = () => Ve(E, "$translate", c), [c, l] = mt();
    let i = _(t, "dealBlock", 7), u = _(t, "dealBar", 7), h = _(t, "product", 7), b = _(t, "collectionBreaksProducts", 23, () => []), g = _(t, "otherProducts", 23, () => []), f = _(t, "selectedDealBarIndex", 7, null), k = _(t, "complementaryProducts", 23, () => []), x = _(t, "customQuantity", 7, void 0), m = _(t, "currentVariantId", 7, void 0), M = _(t, "componentId", 7), C = _(t, "selected", 7, !1), V = _(t, "globalSellingPlan", 7, void 0), D = _(t, "onDealBarSelect", 7), A = _(t, "onDealBarDeselect", 7), H = _(t, "onVariantSelect", 7), ee = _(t, "onVariantsChange", 7), I = _(t, "onPersonalisationsChange", 7), Z = _(t, "personalisationInitialValues", 23, () => []), B = _(t, "onProgressiveGiftsChange", 7);
    const E = zt(), ue = pn(), z = On(), N = mn();
    let S = Ge(gt([])), P = Ge(gt([])), L = Ge(gt([]));
    const j = new Vb(), Y = d(() => {
      var Pe, He;
      return (He = (Pe = i().collectionBreaks) == null ? void 0 : Pe.autoFillNotChosenItems) != null && He;
    }), de = d(() => i().priceRounding ? { perItem: i().showPricesPerItem, precision: i().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), T = d(() => {
      var Pe, He;
      return i() && ((He = (Pe = i().defaultVariantsV2) == null ? void 0 : Pe.find((ht) => Kt(ht.productGID) === h().id && ht.dealBarId === u().id)) == null ? void 0 : He.variantGIDs) || [];
    });
    let q = d(() => W(u())), se = Ge(gt(W(u())));
    dr(() => {
      te(se, e(q), !0);
    });
    const le = d(() => x() || e(se));
    function W(Pe) {
      return Pe.dealBarType === ft.Bxgy ? Pe.buyQuantity + Pe.getQuantity : Number(Pe.quantity);
    }
    Ye(() => {
      m() && en(() => {
        (function(Pe, He) {
          if (Object.keys(a()).length === 0 && Pe[0]) {
            const ut = Kt(Pe[0]), st = h().variants.find((rt) => rt.id == ut);
            if (st) return void _s(0, { product: h(), variant: st });
          }
          const ht = h().variants.find((ut) => ut.id == He);
          if (ht) return void _s(0, { product: h(), variant: ht });
          Object.keys(a()).length === 0 && h().variants[0] && _s(0, { product: h(), variant: h().variants[0] });
        })(e(T), m());
      });
    }), Ye(() => {
      C() || j.clear();
    });
    const oe = d(() => b().length === 0 || b().some((Pe) => Pe.id === h().id)), K = d(() => {
      const Pe = Object.fromEntries(Object.entries(a()).filter(([ht]) => Number(ht) < e(le)));
      if (!C() || !e(Y)) return Pe;
      const He = { ...Pe };
      for (let ht = 1; ht < e(le); ht++) He[ht] || j.has(ht) || (e(oe) && Pe[0] ? He[ht] = { product: h(), variant: Pe[0].variant } : Pe[1] && (He[ht] = { product: Pe[1].product, variant: Pe[1].variant }));
      return He;
    }), Q = d(() => C() ? Object.values(e(K)).map((Pe) => ({ variant: Pe.variant, quantity: 1 })) : []), U = d(() => (function({ selectedProductVariants: Pe, mainProductIsInCollection: He, collectionBreaksProducts: ht, dealBlock: ut, quantity: st }) {
      var rt;
      const et = Pe.map((Je) => ({ quantity: 1, variant: Je.variant }));
      if (et.length === 0 || et.length >= st || (rt = ut.collectionBreaks) != null && rt.showChosenProductsPriceOnly) return et;
      const Dt = st - et.length;
      if (He) {
        const Je = Array.from({ length: Dt }, () => et[0]);
        return [...et, ...Je];
      }
      const we = ht.flatMap((Je) => Je.variants).filter((Je) => Je.availableForSale);
      if (we.length === 0) return et;
      const Xe = we.reduce((Je, vt) => vt.price < Je.price ? vt : Je, we[0]), Ee = Array.from({ length: Dt }, () => ({ quantity: 1, variant: Xe }));
      return [...et, ...Ee];
    })({ selectedProductVariants: Object.values(e(K)), mainProductIsInCollection: e(oe), collectionBreaksProducts: b(), dealBlock: i(), quantity: e(le) }));
    let X = Ge(void 0);
    const ne = d(() => bl(h(), e(U).map((Pe) => Pe.variant))), J = d(() => {
      var Pe, He;
      return (u().sellingPlanEnabled || i().subscriptionsEnabled && ((Pe = i().subscriptions) == null ? void 0 : Pe.layout) === "link" && ((He = i().subscriptions) == null ? void 0 : He.subscribeByDefault)) && (!i().subscriptionsEnabled || !!V());
    }), F = d(() => e(J) ? vo(u(), e(ne), e(X)) : void 0), ae = d(() => _o(e(F), V(), e(ne), h().requiresSellingPlan)), ie = d(() => Object.entries(e(K)).sort(([Pe], [He]) => Number(Pe) - Number(He)).map(([Pe, He]) => ({ key: Pe, product: He.product, variant: He.variant }))), ke = d(() => (function(Pe, He, ht) {
      return ht.map(({ variant: st, quantity: rt }) => {
        let et = st.price;
        const Dt = Pe.useProductCompareAtPrice || (He.dealBarType === void 0 || He.dealBarType === ft.QuantityBreak) && He.discountType === "default";
        return st.compareAtPrice && Dt && (et = Math.max(et, st.compareAtPrice)), et * rt;
      }).reduce((st, rt) => st + rt, 0);
    })(i(), u(), e(U))), re = d(() => _l(e(ke), e(S), e(P))), pe = d(() => Math.ceil(e(ke) / e(U).length)), ge = d(() => yo(e(le) === 1, e(re), e(pe))), me = d(() => i() && R(e(U), e(ae))), ce = d(() => bn({ priceFormatter: s(), product: h(), selectedVariants: e(Q), dealBar: u(), totalFullPrice: e(ke), totalCompareAtPrice: e(re), totalDiscountedPrice: e(me), quantity: e(le), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: Sr(e(U)), sellingPlan: e(ae) })), fe = d(() => e(ce)(o()(u().title))), Fe = d(() => e(ce)(o()(u().subtitle))), $e = d(() => e(ce)(o()(u().label))), Ce = d(() => fl(i(), u()).map((Pe) => $a(Pe, o(), e(ce)))), Te = d(() => Da(e(Ce)));
    function R(Pe, He) {
      switch (u().dealBarType) {
        case void 0:
        case ft.QuantityBreak:
          return ld(u(), Pe, r().currencyRate, e(de), He, r().featureFlags.percentage_cents_rounding_workaround);
        case ft.Bxgy:
          return sd(u(), Pe, r().currencyRate, e(de), He);
      }
    }
    const xe = d(() => Math.ceil(e(me) / e(U).length)), Ie = d(() => e(re) > e(me)), be = d(() => `${u().id}_${M()}`);
    function ye(Pe) {
      C() && (Pe.preventDefault(), Pe.stopPropagation(), A()());
    }
    Ya(() => {
      C() && D()({ dealBarId: u().id, dealBarQuantity: W(u()), preselected: !0 });
    });
    const qe = d(() => Ve(z, "$getMediaImageUrl", c)(u().mediaImageGID) || kl);
    Ye(() => {
      var Pe;
      C() && Object.keys(e(K)).length > 0 && (e(L), e(S), e(P), e(ae), (Pe = i().collectionBreaks) == null || Pe.requireItemSelectionEnabled, en(() => {
        (function() {
          var He, ht;
          const ut = Object.values(e(K)).map((ct) => ({ variant: ct.variant, product: ct.product, quantity: 1 })), st = e(me) + e(L).reduce((ct, $t) => ct + $t.discountedPrice, 0), rt = e(S).reduce((ct, $t) => $t.showPrice ? ct + $t.fullPrice : ct, 0) + e(P).reduce((ct, $t) => ct + $t.fullPrice * $t.quantity, 0), et = e(ke) + e(L).reduce((ct, $t) => ct + $t.fullPrice, 0) + rt, Dt = R(e(U), void 0), we = h().sellingPlans.map((ct) => ({ sellingPlanId: ct.id, discountedPrice: R(e(U), ct) })), Xe = (ht = (He = i().collectionBreaks) == null ? void 0 : He.requireItemSelectionEnabled) != null && ht, Ee = ut.length, Je = !Xe || Ee >= e(le), vt = Xe ? Math.max(0, e(le) - Ee) : 0;
          ee()({ variants: ut, personalisationItems: e(ie), freeGifts: [...e(S), ...e(P)], upsells: e(L), dealBarSellingPlan: e(F), pricing: { discountedPrice: st, fullPrice: et, giftValue: rt, discountedPricePerItem: e(xe), fullPricePerItem: e(pe), discountedPriceWithoutSellingPlan: Dt, discountedPricesForSellingPlans: we }, validation: { requiresItemSelection: Xe, allItemsSelected: Je, missingItemsCount: vt } });
        })();
      }));
    });
    const De = d(() => u().showAsSoldOutEnabled && u().showAsSoldOut ? xl(u().showAsSoldOut) : ""), Me = d(() => [o0(i()), e(De)].filter(Boolean).join(";"));
    function Ae(Pe, He) {
      Pe === 0 && H()({ variantId: He.variant.id }), _s(Pe, He), fa(!1), e(Y) && j.delete(Pe);
    }
    function Oe(Pe) {
      (function(He) {
        zo.update((ht) => {
          const { [He]: ut, ...st } = ht;
          return st;
        });
      })(Pe), e(Y) && j.add(Pe);
    }
    var je = { get dealBlock() {
      return i();
    }, set dealBlock(Pe) {
      i(Pe), v();
    }, get dealBar() {
      return u();
    }, set dealBar(Pe) {
      u(Pe), v();
    }, get product() {
      return h();
    }, set product(Pe) {
      h(Pe), v();
    }, get collectionBreaksProducts() {
      return b();
    }, set collectionBreaksProducts(Pe = []) {
      b(Pe), v();
    }, get otherProducts() {
      return g();
    }, set otherProducts(Pe = []) {
      g(Pe), v();
    }, get selectedDealBarIndex() {
      return f();
    }, set selectedDealBarIndex(Pe = null) {
      f(Pe), v();
    }, get complementaryProducts() {
      return k();
    }, set complementaryProducts(Pe = []) {
      k(Pe), v();
    }, get customQuantity() {
      return x();
    }, set customQuantity(Pe = void 0) {
      x(Pe), v();
    }, get currentVariantId() {
      return m();
    }, set currentVariantId(Pe = void 0) {
      m(Pe), v();
    }, get componentId() {
      return M();
    }, set componentId(Pe) {
      M(Pe), v();
    }, get selected() {
      return C();
    }, set selected(Pe = !1) {
      C(Pe), v();
    }, get globalSellingPlan() {
      return V();
    }, set globalSellingPlan(Pe = void 0) {
      V(Pe), v();
    }, get onDealBarSelect() {
      return D();
    }, set onDealBarSelect(Pe) {
      D(Pe), v();
    }, get onDealBarDeselect() {
      return A();
    }, set onDealBarDeselect(Pe) {
      A(Pe), v();
    }, get onVariantSelect() {
      return H();
    }, set onVariantSelect(Pe) {
      H(Pe), v();
    }, get onVariantsChange() {
      return ee();
    }, set onVariantsChange(Pe) {
      ee(Pe), v();
    }, get onPersonalisationsChange() {
      return I();
    }, set onPersonalisationsChange(Pe) {
      I(Pe), v();
    }, get personalisationInitialValues() {
      return Z();
    }, set personalisationInitialValues(Pe = []) {
      Z(Pe), v();
    }, get onProgressiveGiftsChange() {
      return B();
    }, set onProgressiveGiftsChange(Pe) {
      B(Pe), v();
    } }, Ke = A0();
    let Ue;
    var ot = w(Ke);
    da(ot), ot.__change = [_0, D, u, W];
    var Wt = O(ot, 2);
    ai(Wt, { get for() {
      return e(be);
    }, get soldOut() {
      return u().showAsSoldOutEnabled;
    }, get borderHost() {
      return e(Te);
    }, children: (Pe, He) => {
      var ht = V0(), ut = ve(ht);
      At(ut, 17, () => e(Ce), (dt) => dt.id, (dt, at) => {
        ba(dt, { get badge() {
          return e(at);
        }, get blockLayout() {
          return i().blockLayout;
        } });
      });
      var st = O(ut, 2), rt = w(st);
      Xt(rt, { element: "div", class: "kaching-bundles__bar-main", onclick: ye, children: (dt, at) => {
        var it = $0(), Ct = ve(it), It = (Ht) => {
          var on = k0();
          _e(() => Be(on, "src", e(qe))), p(Ht, on);
        }, ln = (Ht) => {
          p(Ht, m0());
        };
        G(Ct, (Ht) => {
          u().mediaImageGID ? Ht(It) : Ht(ln, !1);
        });
        var Mt = O(Ct, 2), Qt = w(Mt), pt = w(Qt), jt = w(pt);
        lt(jt, () => e(fe), (Ht) => {
          var on = x0();
          Le(w(on), () => e(fe)), y(on), p(Ht, on);
        });
        var Tt = O(jt, 2), Bn = (Ht) => {
          var on = ze();
          lt(ve(on), () => e($e), (Zt) => {
            var an = y0();
            Le(w(an), () => e($e)), y(an), p(Zt, an);
          }), p(Ht, on);
        };
        G(Tt, (Ht) => {
          e($e) && Ht(Bn);
        }), y(pt);
        var Tn = O(pt, 2), xn = (Ht) => {
          var on = ze();
          lt(ve(on), () => e(Fe), (Zt) => {
            var an = w0();
            Le(w(an), () => e(Fe)), y(an), p(Zt, an);
          }), p(Ht, on);
        };
        G(Tn, (Ht) => {
          e(Fe) && Ht(xn);
        }), y(Qt);
        var Fn = O(Qt, 2), Zn = w(Fn), ar = (Ht) => {
          var on = I0(), Zt = ve(on), an = w(Zt);
          lt(an, () => e(xe), (cn) => {
            Yr(cn, { get amount() {
              return e(xe);
            }, get showPricesPerItem() {
              return i().showPricesPerItem;
            }, get unitLabel() {
              return i().unitLabel;
            } });
          });
          var Ln = O(an, 2), dn = (cn) => {
            var Cn = ze();
            lt(ve(Cn), () => e(ge), (Jn) => {
              var St = P0();
              Le(w(St), () => s()(e(ge))), y(St), _e((tn) => Be(St, "data-a11y-label", tn), [() => o()("system.original_price")]), p(Jn, St);
            }), p(cn, Cn);
          };
          G(Ln, (cn) => {
            e(Ie) && cn(dn);
          }), y(Zt);
          var En = O(Zt, 2), Rn = (cn) => {
            var Cn = C0(), Jn = w(Cn);
            lt(Jn, () => e(me), (yn) => {
              var un = S0();
              Le(w(un), () => s()(e(me))), y(un), _e((Fr) => Be(un, "data-a11y-label", Fr), [() => o()("system.price")]), p(yn, un);
            });
            var St = O(Jn, 2), tn = (yn) => {
              var un = ze();
              lt(ve(un), () => e(re), (Fr) => {
                var Yn = B0();
                Le(w(Yn), () => s()(e(re))), y(Yn), _e((Lr) => Be(Yn, "data-a11y-label", Lr), [() => o()("system.original_price")]), p(Fr, Yn);
              }), p(yn, un);
            };
            G(St, (yn) => {
              e(Ie) && yn(tn);
            }), y(Cn), p(cn, Cn);
          };
          G(En, (cn) => {
            e(le) > 1 && cn(Rn);
          }), p(Ht, on);
        }, fn = (Ht) => {
          var on = z0(), Zt = ve(on);
          lt(Zt, () => e(me), (dn) => {
            {
              let En = d(() => i().showPricesPerItem ? e(xe) : e(me));
              Yr(dn, { get amount() {
                return e(En);
              }, get showPricesPerItem() {
                return i().showPricesPerItem;
              }, get unitLabel() {
                return i().unitLabel;
              } });
            }
          });
          var an = O(Zt, 2), Ln = (dn) => {
            var En = ze();
            lt(ve(En), () => i().showPricesPerItem ? e(ge) : e(re), (Rn) => {
              var cn = M0();
              Le(w(cn), () => s()(i().showPricesPerItem ? e(ge) : e(re))), y(cn), _e((Cn) => Be(cn, "data-a11y-label", Cn), [() => o()("system.original_price")]), p(Rn, cn);
            }), p(dn, En);
          };
          G(an, (dn) => {
            e(Ie) && dn(Ln);
          }), p(Ht, on);
        };
        G(Zn, (Ht) => {
          i().showBothPrices ? Ht(ar) : Ht(fn, !1);
        }), y(Fn), y(Mt), p(dt, it);
      }, $$slots: { default: !0 } });
      var et = O(rt, 2), Dt = (dt) => {
        Va(dt, { get highlights() {
          return u().highlights;
        }, get isSelected() {
          return C();
        }, get replaceLiquid() {
          return e(ce);
        } });
      };
      G(et, (dt) => {
        u().highlights && dt(Dt);
      });
      var we = O(et, 2), Xe = (dt) => {
        var at = D0(), it = w(at);
        {
          let Ct = d(() => e(F) || e(ne)[0]);
          Ta(it, { get sellingPlans() {
            return e(ne);
          }, get selectedSellingPlan() {
            return e(Ct);
          }, onChange: (It) => {
            te(X, It, !0);
          } });
        }
        y(at), p(dt, at);
      };
      G(we, (dt) => {
        C() && e(J) && !u().sellingPlanGid && e(ne).length > 1 && dt(Xe);
      });
      var Ee = O(we, 2), Je = (dt) => {
        var at = T0();
        At(at, 21, () => ({ length: e(le) }), qr, (it, Ct, It) => {
          var ln = ze(), Mt = ve(ln), Qt = (jt) => {
            {
              let Tt = d(() => e(K)[It] || null);
              Go(jt, { get dealBlock() {
                return i();
              }, get dealBar() {
                return u();
              }, get mainProduct() {
                return h();
              }, products: [], get selectedProductVariant() {
                return e(Tt);
              }, onChange: (Bn) => Ae(It, Bn) });
            }
          }, pt = (jt) => {
            {
              let Tt = d(() => e(K)[It] || null);
              Go(jt, { get dealBlock() {
                return i();
              }, get dealBar() {
                return u();
              }, get products() {
                return b();
              }, get selectedProductVariant() {
                return e(Tt);
              }, onChange: (Bn) => Ae(It, Bn), onRemove: () => Oe(It) });
            }
          };
          G(Mt, (jt) => {
            It === 0 ? jt(Qt) : jt(pt, !1);
          }), p(it, ln);
        }), y(at), p(dt, at);
      };
      G(Ee, (dt) => {
        C() && dt(Je);
      });
      var vt = O(Ee, 2), ct = (dt) => {
        {
          let at = d(() => W(u()));
          yl(dt, { get value() {
            return e(se);
          }, get min() {
            return e(at);
          }, onChange: (it) => te(se, it, !0) });
        }
      };
      G(vt, (dt) => {
        C() && u().dealBarType === ft.QuantityBreak && u().quantitySelector && dt(ct);
      });
      var $t = O(vt, 2), rn = (dt) => {
        ii(dt, { get product() {
          return h();
        }, get productPersonalisation() {
          return u().productPersonalisation;
        }, get personalisationItems() {
          return e(ie);
        }, get quantity() {
          return e(ie).length;
        }, get addPersonalisationModal() {
          return i().addPersonalisationModal;
        }, get onPersonalisationsChange() {
          return I();
        }, get initialValues() {
          return Z();
        } });
      };
      G($t, (dt) => {
        C() && u().productPersonalisation && (i().blockLayout === "vertical" || i().blockLayout === "plain") && dt(rn);
      }), y(st);
      var Ft = O(st, 2);
      {
        let dt = d(() => u().upsells || []);
        Ai(Ft, { get dealBlock() {
          return i();
        }, get dealBarId() {
          return u().id;
        }, get upsells() {
          return e(dt);
        }, get otherProducts() {
          return g();
        }, get complementaryProducts() {
          return k();
        }, get dealBarSelected() {
          return C();
        }, get dealSellingPlan() {
          return e(ae);
        }, onChange: (at) => {
          te(L, at, !0);
        } });
      }
      var Bt = O(Ft, 2);
      Oi(Bt, { get selectedDealBarIndex() {
        return f();
      }, get onChange() {
        return B();
      }, get dealBlock() {
        return i();
      }, get dealBar() {
        return u();
      }, get otherProducts() {
        return g();
      }, get selected() {
        return C();
      }, get sellingPlan() {
        return e(ae);
      }, get progressiveGifts() {
        return i().progressiveGifts;
      } });
      var Ut = O(Bt, 2);
      {
        let dt = d(() => u().freeGifts || []);
        Vi(Ut, { get dealBlock() {
          return i();
        }, get freeGifts() {
          return e(dt);
        }, get freeGiftsSummary() {
          return u().freeGiftsSummary;
        }, get otherProducts() {
          return g();
        }, get dealBarSelected() {
          return C();
        }, get sellingPlan() {
          return e(ae);
        }, onChange: (at) => {
          te(S, at, !0);
        } });
      }
      var Lt = O(Ut, 2);
      {
        let dt = d(() => u().multipleGiftsSelectors || []);
        Gi(Lt, { get dealBlock() {
          return i();
        }, get multipleGiftsSelectors() {
          return e(dt);
        }, get sellingPlan() {
          return e(ae);
        }, get otherProducts() {
          return g();
        }, onChange: (at) => {
          te(P, at, !0);
        } });
      }
      p(Pe, ht);
    }, $$slots: { default: !0 } });
    var bt = O(Wt, 2), qt = (Pe) => {
      qi(Pe, { get showAsSoldOut() {
        return u().showAsSoldOut;
      }, get replaceLiquid() {
        return e(ce);
      } });
    };
    G(bt, (Pe) => {
      u().showAsSoldOutEnabled && u().showAsSoldOut && Pe(qt);
    }), y(Ke), _e((Pe) => {
      var He;
      Ue = Nt(Ke, 1, "kaching-bundles__bar", null, Ue, Pe), Be(Ke, "data-deal-bar-id", u().id), Ot(Ke, e(Me)), Be(ot, "name", `kaching-bundles-deal-${(He = M()) != null ? He : ""}`), Ka(ot, u().id), Be(ot, "id", e(be)), cl(ot, C()), ot.disabled = u().showAsSoldOutEnabled;
    }, [() => ({ "kaching-bundles__bar--selected": C() })]), p(n, Ke);
    var nn = nt(je);
    return l(), nn;
  }
  Gn(["change"]), Ze(eg, { dealBlock: {}, dealBar: {}, product: {}, collectionBreaksProducts: {}, otherProducts: {}, selectedDealBarIndex: {}, complementaryProducts: {}, customQuantity: {}, currentVariantId: {}, componentId: {}, selected: {}, globalSellingPlan: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {}, onProgressiveGiftsChange: {} }, [], [], !0);
  var Oo = {};
  (function n(t, r, a, s) {
    var o = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL), c = typeof Path2D == "function" && typeof DOMMatrix == "function";
    function l() {
    }
    function i(S) {
      var P = r.exports.Promise, L = P !== void 0 ? P : t.Promise;
      return typeof L == "function" ? new L(S) : (S(l, l), null);
    }
    var u, h, b, g, f, k, x = /* @__PURE__ */ (function(S, P) {
      return { transform: function(L) {
        if (S) return L;
        if (P.has(L)) return P.get(L);
        var j = new OffscreenCanvas(L.width, L.height);
        return j.getContext("2d").drawImage(L, 0, 0), P.set(L, j), j;
      }, clear: function() {
        P.clear();
      } };
    })((function() {
      if (!t.OffscreenCanvas) return !1;
      try {
        var S = new OffscreenCanvas(1, 1), P = S.getContext("2d");
        P.fillRect(0, 0, 1, 1);
        var L = S.transferToImageBitmap();
        P.createPattern(L, "no-repeat");
      } catch {
        return !1;
      }
      return !0;
    })(), /* @__PURE__ */ new Map()), m = (b = Math.floor(1e3 / 60), g = {}, f = 0, typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (u = function(S) {
      var P = Math.random();
      return g[P] = requestAnimationFrame(function L(j) {
        f === j || f + b - 1 < j ? (f = j, delete g[P], S()) : g[P] = requestAnimationFrame(L);
      }), P;
    }, h = function(S) {
      g[S] && cancelAnimationFrame(g[S]);
    }) : (u = function(S) {
      return setTimeout(S, b);
    }, h = function(S) {
      return clearTimeout(S);
    }), { frame: u, cancel: h }), M = /* @__PURE__ */ (function() {
      var S, P, L = {};
      return function() {
        if (S) return S;
        if (!a && o) {
          var j = ["var CONFETTI, SIZE = {}, module = {};", "(" + n.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join(`
`);
          try {
            S = new Worker(URL.createObjectURL(new Blob([j])));
          } catch (Y) {
            return typeof console != "undefined" && typeof console.warn == "function" && console.warn("🎊 Could not load worker", Y), null;
          }
          (function(Y) {
            function de(T, q) {
              Y.postMessage({ options: T || {}, callback: q });
            }
            Y.init = function(T) {
              var q = T.transferControlToOffscreen();
              Y.postMessage({ canvas: q }, [q]);
            }, Y.fire = function(T, q, se) {
              if (P) return de(T, null), P;
              var le = Math.random().toString(36).slice(2);
              return P = i(function(W) {
                function oe(K) {
                  K.data.callback === le && (delete L[le], Y.removeEventListener("message", oe), P = null, x.clear(), se(), W());
                }
                Y.addEventListener("message", oe), de(T, le), L[le] = oe.bind(null, { data: { callback: le } });
              });
            }, Y.reset = function() {
              for (var T in Y.postMessage({ reset: !0 }), L) L[T](), delete L[T];
            };
          })(S);
        }
        return S;
      };
    })(), C = { particleCount: 50, angle: 90, spread: 45, startVelocity: 45, decay: 0.9, gravity: 1, drift: 0, ticks: 200, x: 0.5, y: 0.5, shapes: ["square", "circle"], zIndex: 100, colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"], disableForReducedMotion: !1, scalar: 1 };
    function V(S, P, L) {
      return (function(j, Y) {
        return Y ? Y(j) : j;
      })(S && S[P] != null ? S[P] : C[P], L);
    }
    function D(S) {
      return S < 0 ? 0 : Math.floor(S);
    }
    function A(S, P) {
      return Math.floor(Math.random() * (P - S)) + S;
    }
    function H(S) {
      return parseInt(S, 16);
    }
    function ee(S) {
      return S.map(I);
    }
    function I(S) {
      var P = String(S).replace(/[^0-9a-f]/gi, "");
      return P.length < 6 && (P = P[0] + P[0] + P[1] + P[1] + P[2] + P[2]), { r: H(P.substring(0, 2)), g: H(P.substring(2, 4)), b: H(P.substring(4, 6)) };
    }
    function Z(S) {
      S.width = document.documentElement.clientWidth, S.height = document.documentElement.clientHeight;
    }
    function B(S) {
      var P = S.getBoundingClientRect();
      S.width = P.width, S.height = P.height;
    }
    function E(S) {
      var P = S.angle * (Math.PI / 180), L = S.spread * (Math.PI / 180);
      return { x: S.x, y: S.y, wobble: 10 * Math.random(), wobbleSpeed: Math.min(0.11, 0.1 * Math.random() + 0.05), velocity: 0.5 * S.startVelocity + Math.random() * S.startVelocity, angle2D: -P + (0.5 * L - Math.random() * L), tiltAngle: (0.5 * Math.random() + 0.25) * Math.PI, color: S.color, shape: S.shape, tick: 0, totalTicks: S.ticks, decay: S.decay, drift: S.drift, random: Math.random() + 2, tiltSin: 0, tiltCos: 0, wobbleX: 0, wobbleY: 0, gravity: 3 * S.gravity, ovalScalar: 0.6, scalar: S.scalar, flat: S.flat };
    }
    function ue(S, P) {
      P.x += Math.cos(P.angle2D) * P.velocity + P.drift, P.y += Math.sin(P.angle2D) * P.velocity + P.gravity, P.velocity *= P.decay, P.flat ? (P.wobble = 0, P.wobbleX = P.x + 10 * P.scalar, P.wobbleY = P.y + 10 * P.scalar, P.tiltSin = 0, P.tiltCos = 0, P.random = 1) : (P.wobble += P.wobbleSpeed, P.wobbleX = P.x + 10 * P.scalar * Math.cos(P.wobble), P.wobbleY = P.y + 10 * P.scalar * Math.sin(P.wobble), P.tiltAngle += 0.1, P.tiltSin = Math.sin(P.tiltAngle), P.tiltCos = Math.cos(P.tiltAngle), P.random = Math.random() + 2);
      var L = P.tick++ / P.totalTicks, j = P.x + P.random * P.tiltCos, Y = P.y + P.random * P.tiltSin, de = P.wobbleX + P.random * P.tiltCos, T = P.wobbleY + P.random * P.tiltSin;
      if (S.fillStyle = "rgba(" + P.color.r + ", " + P.color.g + ", " + P.color.b + ", " + (1 - L) + ")", S.beginPath(), c && P.shape.type === "path" && typeof P.shape.path == "string" && Array.isArray(P.shape.matrix)) S.fill((function(ke, re, pe, ge, me, ce, fe) {
        var Fe = new Path2D(ke), $e = new Path2D();
        $e.addPath(Fe, new DOMMatrix(re));
        var Ce = new Path2D();
        return Ce.addPath($e, new DOMMatrix([Math.cos(fe) * me, Math.sin(fe) * me, -Math.sin(fe) * ce, Math.cos(fe) * ce, pe, ge])), Ce;
      })(P.shape.path, P.shape.matrix, P.x, P.y, 0.1 * Math.abs(de - j), 0.1 * Math.abs(T - Y), Math.PI / 10 * P.wobble));
      else if (P.shape.type === "bitmap") {
        var q = Math.PI / 10 * P.wobble, se = 0.1 * Math.abs(de - j), le = 0.1 * Math.abs(T - Y), W = P.shape.bitmap.width * P.scalar, oe = P.shape.bitmap.height * P.scalar, K = new DOMMatrix([Math.cos(q) * se, Math.sin(q) * se, -Math.sin(q) * le, Math.cos(q) * le, P.x, P.y]);
        K.multiplySelf(new DOMMatrix(P.shape.matrix));
        var Q = S.createPattern(x.transform(P.shape.bitmap), "no-repeat");
        Q.setTransform(K), S.globalAlpha = 1 - L, S.fillStyle = Q, S.fillRect(P.x - W / 2, P.y - oe / 2, W, oe), S.globalAlpha = 1;
      } else if (P.shape === "circle") S.ellipse ? S.ellipse(P.x, P.y, Math.abs(de - j) * P.ovalScalar, Math.abs(T - Y) * P.ovalScalar, Math.PI / 10 * P.wobble, 0, 2 * Math.PI) : (function(ke, re, pe, ge, me, ce, fe, Fe, $e) {
        ke.save(), ke.translate(re, pe), ke.rotate(ce), ke.scale(ge, me), ke.arc(0, 0, 1, fe, Fe, $e), ke.restore();
      })(S, P.x, P.y, Math.abs(de - j) * P.ovalScalar, Math.abs(T - Y) * P.ovalScalar, Math.PI / 10 * P.wobble, 0, 2 * Math.PI);
      else if (P.shape === "star") for (var U = Math.PI / 2 * 3, X = 4 * P.scalar, ne = 8 * P.scalar, J = P.x, F = P.y, ae = 5, ie = Math.PI / ae; ae--; ) J = P.x + Math.cos(U) * ne, F = P.y + Math.sin(U) * ne, S.lineTo(J, F), U += ie, J = P.x + Math.cos(U) * X, F = P.y + Math.sin(U) * X, S.lineTo(J, F), U += ie;
      else S.moveTo(Math.floor(P.x), Math.floor(P.y)), S.lineTo(Math.floor(P.wobbleX), Math.floor(Y)), S.lineTo(Math.floor(de), Math.floor(T)), S.lineTo(Math.floor(j), Math.floor(P.wobbleY));
      return S.closePath(), S.fill(), P.tick < P.totalTicks;
    }
    function z(S, P) {
      var L, j = !S, Y = !!V(P || {}, "resize"), de = !1, T = V(P, "disableForReducedMotion", Boolean), q = o && V(P || {}, "useWorker") ? M() : null, se = j ? Z : B, le = !(!S || !q) && !!S.__confetti_initialized, W = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches;
      function oe(Q, U, X) {
        for (var ne = V(Q, "particleCount", D), J = V(Q, "angle", Number), F = V(Q, "spread", Number), ae = V(Q, "startVelocity", Number), ie = V(Q, "decay", Number), ke = V(Q, "gravity", Number), re = V(Q, "drift", Number), pe = V(Q, "colors", ee), ge = V(Q, "ticks", Number), me = V(Q, "shapes"), ce = V(Q, "scalar"), fe = !!V(Q, "flat"), Fe = (function(xe) {
          var Ie = V(xe, "origin", Object);
          return Ie.x = V(Ie, "x", Number), Ie.y = V(Ie, "y", Number), Ie;
        })(Q), $e = ne, Ce = [], Te = S.width * Fe.x, R = S.height * Fe.y; $e--; ) Ce.push(E({ x: Te, y: R, angle: J, spread: F, startVelocity: ae, color: pe[$e % pe.length], shape: me[A(0, me.length)], ticks: ge, decay: ie, gravity: ke, drift: re, scalar: ce, flat: fe }));
        return L ? L.addFettis(Ce) : (L = (function(xe, Ie, be, ye, qe) {
          var De, Me, Ae = Ie.slice(), Oe = xe.getContext("2d"), je = i(function(Ke) {
            function Ue() {
              De = Me = null, Oe.clearRect(0, 0, ye.width, ye.height), x.clear(), qe(), Ke();
            }
            De = m.frame(function ot() {
              !a || ye.width === s.width && ye.height === s.height || (ye.width = xe.width = s.width, ye.height = xe.height = s.height), ye.width || ye.height || (be(xe), ye.width = xe.width, ye.height = xe.height), Oe.clearRect(0, 0, ye.width, ye.height), (Ae = Ae.filter(function(Wt) {
                return ue(Oe, Wt);
              })).length ? De = m.frame(ot) : Ue();
            }), Me = Ue;
          });
          return { addFettis: function(Ke) {
            return Ae = Ae.concat(Ke), je;
          }, canvas: xe, promise: je, reset: function() {
            De && m.cancel(De), Me && Me();
          } };
        })(S, Ce, se, U, X), L.promise);
      }
      function K(Q) {
        var U = T || V(Q, "disableForReducedMotion", Boolean), X = V(Q, "zIndex", Number);
        if (U && W) return i(function(ae) {
          ae();
        });
        j && L ? S = L.canvas : j && !S && (S = (function(ae) {
          var ie = document.createElement("canvas");
          return ie.style.position = "fixed", ie.style.top = "0px", ie.style.left = "0px", ie.style.pointerEvents = "none", ie.style.zIndex = ae, ie;
        })(X), document.body.appendChild(S)), Y && !le && se(S);
        var ne = { width: S.width, height: S.height };
        function J() {
          if (q) {
            var ae = { getBoundingClientRect: function() {
              if (!j) return S.getBoundingClientRect();
            } };
            return se(ae), void q.postMessage({ resize: { width: ae.width, height: ae.height } });
          }
          ne.width = ne.height = null;
        }
        function F() {
          L = null, Y && (de = !1, t.removeEventListener("resize", J)), j && S && (document.body.contains(S) && document.body.removeChild(S), S = null, le = !1);
        }
        return q && !le && q.init(S), le = !0, q && (S.__confetti_initialized = !0), Y && !de && (de = !0, t.addEventListener("resize", J, !1)), q ? q.fire(Q, ne, F) : oe(Q, ne, F);
      }
      return K.reset = function() {
        q && q.reset(), L && L.reset();
      }, K;
    }
    function N() {
      return k || (k = z(null, { useWorker: !0, resize: !0 })), k;
    }
    r.exports = function() {
      return N().apply(this, arguments);
    }, r.exports.reset = function() {
      N().reset();
    }, r.exports.create = z, r.exports.shapeFromPath = function(S) {
      if (!c) throw new Error("path confetti are not supported in this browser");
      var P, L;
      typeof S == "string" ? P = S : (P = S.path, L = S.matrix);
      var j = new Path2D(P), Y = document.createElement("canvas").getContext("2d");
      if (!L) {
        for (var de, T, q = 1e3, se = q, le = q, W = 0, oe = 0, K = 0; K < q; K += 2) for (var Q = 0; Q < q; Q += 2) Y.isPointInPath(j, K, Q, "nonzero") && (se = Math.min(se, K), le = Math.min(le, Q), W = Math.max(W, K), oe = Math.max(oe, Q));
        de = W - se, T = oe - le;
        var U = Math.min(10 / de, 10 / T);
        L = [U, 0, 0, U, -Math.round(de / 2 + se) * U, -Math.round(T / 2 + le) * U];
      }
      return { type: "path", path: P, matrix: L };
    }, r.exports.shapeFromText = function(S) {
      var P, L = 1, j = "#000000", Y = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
      typeof S == "string" ? P = S : (P = S.text, L = "scalar" in S ? S.scalar : L, Y = "fontFamily" in S ? S.fontFamily : Y, j = "color" in S ? S.color : j);
      var de = 10 * L, T = de + "px " + Y, q = new OffscreenCanvas(de, de), se = q.getContext("2d");
      se.font = T;
      var le = se.measureText(P), W = Math.ceil(le.actualBoundingBoxRight + le.actualBoundingBoxLeft), oe = Math.ceil(le.actualBoundingBoxAscent + le.actualBoundingBoxDescent), K = le.actualBoundingBoxLeft + 2, Q = le.actualBoundingBoxAscent + 2;
      W += 4, oe += 4, (se = (q = new OffscreenCanvas(W, oe)).getContext("2d")).font = T, se.fillStyle = j, se.fillText(P, K, Q);
      var U = 1 / L;
      return { type: "bitmap", bitmap: q.transferToImageBitmap(), matrix: [U, 0, 0, U, -W * U / 2, -oe * U / 2] };
    };
  })(/* @__PURE__ */ (function() {
    return typeof window != "undefined" ? window : typeof self != "undefined" ? self : this || {};
  })(), Oo, !1);
  const q0 = Oo.exports;
  Oo.exports.create;
  var G0 = Dn('<svg viewBox="0 0 361 163" fill="none" aria-hidden="true"><path class="kaching-bundles__scratch-off-hint-path" d="M22 113.859C23.9107 84.035 22.7293 20.8901 54.8299 45.9835C94.9555 77.3502 81.1193 164.847 101.209 103.575C108.48 64.2518 127.202 -4.91471 143.923 33.0046C164.824 80.4037 155.535 144.223 184.564 113.859C213.593 83.495 160.179 15.685 201.982 45.9835C243.784 76.2821 263.524 183.445 278.619 122.651C293.714 61.8562 268.168 7.24414 303.004 33.0046C337.839 58.765 330.872 64.2534 339 92.7687" stroke="white" stroke-opacity="0.7" stroke-width="44" stroke-linecap="round"></path></svg>');
  function tg(n, t) {
    tt(t, !0);
    let r = _(t, "hidden", 7);
    var a = { get hidden() {
      return r();
    }, set hidden(c) {
      r(c), v();
    } }, s = G0();
    let o;
    return _e((c) => o = Nt(s, 0, "kaching-bundles__scratch-off-hint", null, o, c), [() => ({ "kaching-bundles__scratch-off-hint--hidden": r() })]), p(n, s), nt(a);
  }
  function O0(n, t) {
    n.key !== "Enter" && n.key !== " " || (n.preventDefault(), t());
  }
  Ze(tg, { hidden: {} }, [], [], !0);
  var F0 = $('<canvas role="button" tabindex="0"></canvas> <!> <div aria-hidden="true"> </div>', 1), L0 = $("<div><!> <!></div>");
  function ng(n, t) {
    tt(t, !0);
    const r = () => Ve(u, "$config", a), [a, s] = mt(), o = 317 / 361;
    let c = _(t, "settings", 7), l = _(t, "onReveal", 7), i = _(t, "children", 7);
    const u = mn(), h = zt();
    let b = d(() => Ve(h, "$translate", a)(c().title)), g = Ge(gt(r().preview && !r().previewScratchOff)), f = Ge(!1), k = Ge(void 0), x = Ge(!1), m = d(() => _n({ "scratch-off-title-color": We(c().titleColor), "scratch-off-title-size": `${c().titleSize}px` })), M = !1, C = null, V = null, D = 22, A = null, H = Ge(!1), ee = Ge(!1);
    const I = new Image();
    I.src = "https://bundles-assets.kachingappz.app/widget/scratch-off-background-v2.webp", A = I, I.complete ? te(H, !0) : (I.addEventListener("load", () => {
      te(H, !0);
    }, { once: !0 }), I.addEventListener("error", () => {
      te(ee, !0);
    }, { once: !0 }));
    let Z = d(() => e(H) || e(ee));
    function B() {
      if (!e(k)) return;
      const W = e(k).getBoundingClientRect();
      if (W.width === 0 || W.height === 0) return;
      const oe = window.devicePixelRatio || 1;
      e(k).width = Math.floor(W.width * oe), e(k).height = Math.floor(W.height * oe);
      const K = e(k).getContext("2d");
      if (!K) return;
      K.scale(oe, oe), D = 44 * Math.min((W.width - 10) / 361, (W.height - 10) / 163, o) / 2, K.fillStyle = We(c().backgroundColor), K.fillRect(0, 0, W.width, W.height), e(H) && A && (K.globalAlpha = 0.6, K.drawImage(A, 0, 0, W.width, W.height), K.globalAlpha = 1), K.globalCompositeOperation = "destination-out";
    }
    function E(W) {
      if (!e(k)) return null;
      const oe = e(k).getBoundingClientRect();
      return { x: W.clientX - oe.left, y: W.clientY - oe.top };
    }
    function ue(W) {
      var oe;
      e(g) || e(f) || (M = !0, te(x, !0), V === null && (V = setTimeout(P, 1500)), (oe = e(k)) == null || oe.setPointerCapture(W.pointerId), C = E(W), (function(K) {
        if (!e(k) || !K) return;
        const Q = e(k).getContext("2d");
        Q && (Q.beginPath(), Q.arc(K.x, K.y, D, 0, 2 * Math.PI), Q.fill());
      })(C));
    }
    function z(W) {
      if (!M || e(g) || e(f)) return;
      const oe = E(W);
      oe && C && ((function(K, Q) {
        if (!e(k)) return;
        const U = e(k).getContext("2d");
        if (!U) return;
        const X = Q.x - K.x, ne = Q.y - K.y, J = Math.hypot(X, ne), F = Math.max(1, Math.ceil(J / 4));
        for (let ae = 0; ae <= F; ae++) {
          const ie = ae / F;
          U.beginPath(), U.arc(K.x + X * ie, K.y + ne * ie, D, 0, 2 * Math.PI), U.fill();
        }
      })(C, oe), C = oe);
    }
    function N(W) {
      var oe;
      M = !1, (oe = e(k)) == null || oe.releasePointerCapture(W.pointerId), C = null, P();
    }
    function S() {
      V !== null && (clearTimeout(V), V = null);
    }
    function P() {
      var W;
      e(g) || e(f) || (S(), te(f, !0), (function() {
        if (!e(k)) return;
        const oe = e(k).getBoundingClientRect();
        q0({ particleCount: 120, spread: 70, startVelocity: 45, origin: { x: (oe.left + oe.width / 2) / window.innerWidth, y: (oe.top + oe.height / 2) / window.innerHeight } });
      })(), (W = l()) == null || W(), setTimeout(() => {
        te(g, !0), te(f, !1);
      }, 300));
    }
    Ye(() => {
      if (e(Z)) return;
      const W = setTimeout(() => {
        te(ee, !0);
      }, 5e3);
      return () => clearTimeout(W);
    }), Ye(() => () => S()), Ye(() => {
      if (e(g) || e(f) || !e(k)) return;
      B();
      const W = new ResizeObserver(() => {
        e(g) || e(f) || B();
      });
      return W.observe(e(k)), () => W.disconnect();
    });
    let L = JSON.stringify(c());
    Ye(() => {
      const W = JSON.stringify(c());
      W !== L && (L = W, r().preview && r().previewScratchOff && (te(g, !1), te(f, !1), te(x, !1), S()));
    });
    var j = { get settings() {
      return c();
    }, set settings(W) {
      c(W), v();
    }, get onReveal() {
      return l();
    }, set onReveal(W) {
      l(W), v();
    }, get children() {
      return i();
    }, set children(W) {
      i(W), v();
    } }, Y = L0();
    let de;
    var T = w(Y);
    Kl(T, i);
    var q = O(T, 2), se = (W) => {
      var oe = F0(), K = ve(oe);
      let Q;
      K.__pointerdown = ue, K.__pointermove = z, K.__pointerup = N, K.__keydown = [O0, P], Ci(K, (F) => te(k, F), () => e(k));
      var U = O(K, 2);
      {
        let F = d(() => e(x) || e(f));
        tg(U, { get hidden() {
          return e(F);
        } });
      }
      var X = O(U, 2);
      let ne;
      var J = w(X, !0);
      y(X), _e((F, ae) => {
        Q = Nt(K, 1, "kaching-bundles__scratch-off-canvas", null, Q, F), Be(K, "aria-label", e(b)), ne = Nt(X, 1, "kaching-bundles__scratch-off-title", null, ne, ae), kt(J, e(b));
      }, [() => ({ "kaching-bundles__scratch-off-canvas--revealing": e(f) }), () => ({ "kaching-bundles__scratch-off-title--hidden": e(x) || e(f) })]), Yl("pointercancel", K, N), p(W, oe);
    };
    G(q, (W) => {
      e(g) || W(se);
    }), y(Y), _e((W) => {
      de = Nt(Y, 1, "kaching-bundles__scratch-off", null, de, W), Ot(Y, e(m));
    }, [() => ({ "kaching-bundles__scratch-off--unscratched": !e(g), "kaching-bundles__scratch-off--revealing": e(f), "kaching-bundles__scratch-off--loading": !e(g) && !e(Z) })]), p(n, Y);
    var le = nt(j);
    return s(), le;
  }
  Gn(["pointerdown", "pointermove", "pointerup", "keydown"]), Ze(ng, { settings: {}, onReveal: {}, children: {} }, [], [], !0);
  var j0 = $('<div class="kaching-bundles__bar-price"><!></div>'), E0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), R0 = $('<div class="kaching-bundles__bar-pricing"><!> <!></div>');
  function ms(n, t) {
    tt(t, !0);
    const r = () => Ve(i, "$translate", s), a = () => Ve(u, "$formatPrice", s), [s, o] = mt(), c = _(t, "discountedPrice", 7), l = _(t, "fullPrice", 7), i = zt(), u = pn();
    var h = { get discountedPrice() {
      return c();
    }, set discountedPrice(m) {
      c(m), v();
    }, get fullPrice() {
      return l();
    }, set fullPrice(m) {
      l(m), v();
    } }, b = R0(), g = w(b);
    lt(g, c, (m) => {
      var M = j0();
      Le(w(M), () => a()(c())), y(M), _e((C) => Be(M, "data-a11y-label", C), [() => r()("system.price")]), p(m, M);
    });
    var f = O(g, 2), k = (m) => {
      var M = ze();
      lt(ve(M), l, (C) => {
        var V = E0();
        Le(w(V), () => a()(l())), y(V), _e((D) => Be(V, "data-a11y-label", D), [() => r()("system.original_price")]), p(C, V);
      }), p(m, M);
    };
    G(f, (m) => {
      l() > c() && m(k);
    }), y(b), p(n, b);
    var x = nt(h);
    return o(), x;
  }
  Ze(ms, { discountedPrice: {}, fullPrice: {} }, [], [], !0);
  const li = ga(null), Fo = (n) => _n({ "kaching-subscriptions-title-color": We(n.titleColor), "kaching-subscriptions-subtitle-color": We(n.subtitleColor), "kaching-subscriptions-title-font-size": n.titleSize + "px", "kaching-subscriptions-subtitle-font-size": n.subtitleSize + "px" });
  var N0 = $('<div class="kaching-bundles__bar-radio"></div>'), Q0 = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), W0 = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), U0 = $('<div class="kaching-bundles__bar-variants"><!></div>'), H0 = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div> <!> <!></div></div>'), Z0 = $('<div class="kaching-bundles__bar-radio"></div>'), J0 = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), Y0 = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), K0 = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div></div></div>'), X0 = $("<div></div>");
  function rg(n, t) {
    tt(t, !0);
    const r = () => Ve(li, "$selectedDealBarStore", o), a = () => Ve(f, "$formatPrice", o), s = () => Ve(g, "$translate", o), [o, c] = mt(), l = _(t, "subscriptions", 7), i = _(t, "sellingPlans", 7), u = _(t, "selectedSellingPlan", 7), h = _(t, "hideSellingPlanSelector", 7, !1), b = _(t, "onChange", 7), g = zt(), f = pn();
    let k = Ge(gt(l().subscribeByDefault || u() ? "subscribe" : "one-time")), x = Ge(gt(u() || i()[0])), m = Ge(!1), M = d(() => l().subscribeByDefault), C = d(() => e(M) ? ["subscribe", "one-time"] : ["one-time", "subscribe"]);
    const V = d(() => Fo(l())), D = d(() => {
      var L, j;
      const Y = (j = (L = r()) == null ? void 0 : L.dealBar) == null ? void 0 : j.sellingPlanGid;
      if (Y) return i().find((de) => de.id === Kt(Y));
    }), A = d(() => {
      var L;
      return (L = e(D)) != null ? L : e(x);
    }), H = d(() => {
      var L, j, Y, de, T;
      return (T = (de = (j = (L = r()) == null ? void 0 : L.pricing.discountedPricesForSellingPlans.find((q) => {
        var se;
        return q.sellingPlanId === ((se = e(A)) == null ? void 0 : se.id);
      })) == null ? void 0 : j.discountedPrice) != null ? de : (Y = r()) == null ? void 0 : Y.pricing.discountedPrice) != null ? T : 0;
    }), ee = d(() => {
      var L, j;
      return (j = (L = r()) == null ? void 0 : L.pricing.discountedPriceWithoutSellingPlan) != null ? j : 0;
    }), I = d(() => {
      var L, j;
      return (j = (L = r()) == null ? void 0 : L.pricing.fullPrice) != null ? j : 0;
    }), Z = d(() => {
      var L, j, Y;
      return bn({ priceFormatter: a(), product: (L = r()) == null ? void 0 : L.product, totalFullPrice: e(I), totalDiscountedPrice: e(H), quantity: (Y = (j = r()) == null ? void 0 : j.quantity) != null ? Y : 1, sellingPlan: e(A), unitQuantity: null });
    }), B = d(() => {
      var L, j, Y;
      return bn({ priceFormatter: a(), product: (L = r()) == null ? void 0 : L.product, totalFullPrice: e(I), totalDiscountedPrice: e(ee), quantity: (Y = (j = r()) == null ? void 0 : j.quantity) != null ? Y : 1, unitQuantity: null });
    });
    function E(L) {
      te(m, !0), te(k, L, !0), b()(L === "subscribe" ? e(x) : void 0);
    }
    function ue(L) {
      te(x, L, !0), e(k) === "subscribe" && b()(L);
    }
    Ya(() => {
      e(k) === "subscribe" && b()(e(x));
    }), Ye(() => {
      if (u()) return te(x, u(), !0), void te(k, "subscribe");
      if (i().length === 0) return void te(k, "one-time");
      i().some((L) => {
        var j;
        return L.id === ((j = e(x)) == null ? void 0 : j.id);
      }) || te(x, i()[0], !0), e(m) || te(k, e(M) ? "subscribe" : "one-time", !0), b()(e(k) === "subscribe" ? e(x) : void 0);
    });
    var z = { get subscriptions() {
      return l();
    }, set subscriptions(L) {
      l(L), v();
    }, get sellingPlans() {
      return i();
    }, set sellingPlans(L) {
      i(L), v();
    }, get selectedSellingPlan() {
      return u();
    }, set selectedSellingPlan(L) {
      u(L), v();
    }, get hideSellingPlanSelector() {
      return h();
    }, set hideSellingPlanSelector(L = !1) {
      h(L), v();
    }, get onChange() {
      return b();
    }, set onChange(L) {
      b(L), v();
    } }, N = X0();
    let S;
    At(N, 20, () => e(C), (L) => L, (L, j) => {
      var Y = ze(), de = ve(Y), T = (se) => {
        {
          let le = d(() => ["kaching-bundles__bar", i().length === 0 && "kaching-bundles__bar--disabled", e(k) === "subscribe" && "kaching-bundles__bar--selected"]);
          Xt(se, { element: "div", get class() {
            return e(le);
          }, onclick: () => E("subscribe"), children: (W, oe) => {
            var K = H0(), Q = w(K), U = w(Q), X = w(U), ne = (Ce) => {
              p(Ce, N0());
            };
            G(X, (Ce) => {
              l().layout === "vertical" && Ce(ne);
            });
            var J = O(X, 2), F = w(J), ae = w(F), ie = w(ae), ke = (Ce) => {
              var Te = Q0();
              Le(w(Te), () => e(Z)(s()(l().subscribeTitle))), y(Te), p(Ce, Te);
            };
            G(ie, (Ce) => {
              l().subscribeTitle && Ce(ke);
            }), y(ae);
            var re = O(ae, 2), pe = (Ce) => {
              var Te = W0();
              Le(w(Te), () => e(Z)(s()(l().subscribeSubtitle))), y(Te), p(Ce, Te);
            };
            G(re, (Ce) => {
              l().subscribeSubtitle && Ce(pe);
            }), y(F);
            var ge = O(F, 2), me = (Ce) => {
              ms(Ce, { get discountedPrice() {
                return e(H);
              }, get fullPrice() {
                return e(I);
              } });
            };
            G(ge, (Ce) => {
              l().showPrices && r() && Ce(me);
            }), y(J), y(U);
            var ce = O(U, 2), fe = (Ce) => {
              {
                let Te = d(() => e(k) === "subscribe");
                Va(Ce, { get highlights() {
                  return l().highlights;
                }, get isSelected() {
                  return e(Te);
                }, get replaceLiquid() {
                  return e(Z);
                } });
              }
            };
            G(ce, (Ce) => {
              l().highlights && Ce(fe);
            });
            var Fe = O(ce, 2), $e = (Ce) => {
              var Te = U0();
              Ta(w(Te), { get sellingPlans() {
                return i();
              }, get selectedSellingPlan() {
                return e(x);
              }, onChange: ue }), y(Te), p(Ce, Te);
            };
            G(Fe, (Ce) => {
              e(k) === "subscribe" && i().length > 1 && e(x) && !h() && Ce($e);
            }), y(Q), y(K), p(W, K);
          }, $$slots: { default: !0 } });
        }
      }, q = (se) => {
        {
          let le = d(() => ["kaching-bundles__bar", i().length === 0 && "kaching-bundles__bar--disabled", e(k) === "one-time" && "kaching-bundles__bar--selected"]);
          Xt(se, { element: "div", get class() {
            return e(le);
          }, onclick: () => E("one-time"), children: (W, oe) => {
            var K = K0(), Q = w(K), U = w(Q), X = w(U), ne = (ce) => {
              p(ce, Z0());
            };
            G(X, (ce) => {
              l().layout === "vertical" && ce(ne);
            });
            var J = O(X, 2), F = w(J), ae = w(F), ie = w(ae), ke = (ce) => {
              var fe = J0();
              Le(w(fe), () => e(B)(s()(l().oneTimeTitle))), y(fe), p(ce, fe);
            };
            G(ie, (ce) => {
              l().oneTimeTitle && ce(ke);
            }), y(ae);
            var re = O(ae, 2), pe = (ce) => {
              var fe = Y0();
              Le(w(fe), () => e(B)(s()(l().oneTimeSubtitle))), y(fe), p(ce, fe);
            };
            G(re, (ce) => {
              l().oneTimeSubtitle && ce(pe);
            }), y(F);
            var ge = O(F, 2), me = (ce) => {
              ms(ce, { get discountedPrice() {
                return e(ee);
              }, get fullPrice() {
                return e(I);
              } });
            };
            G(ge, (ce) => {
              l().showPrices && r() && ce(me);
            }), y(J), y(U), y(Q), y(K), p(W, K);
          }, $$slots: { default: !0 } });
        }
      };
      G(de, (se) => {
        j === "subscribe" ? se(T) : se(q, !1);
      }), p(L, Y);
    }), y(N), _e((L) => {
      S = Nt(N, 1, "kaching-bundles__subscriptions kaching-bundles__bars", null, S, L), Ot(N, e(V));
    }, [() => ({ "kaching-bundles__bars--horizontal": l().layout === "horizontal" })]), p(n, N);
    var P = nt(z);
    return c(), P;
  }
  Ze(rg, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0);
  var ek = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), tk = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), nk = $('<div class="kaching-bundles__bar-variants"><!></div>'), rk = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><span class="kaching-bundles__subscriptions__checkbox"><!></span> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div> <!> <!></div></div>'), ak = $('<div class="kaching-bundles__subscriptions kaching-bundles__bars kaching-bundles__subscriptions--checkbox"><!></div>');
  function ag(n, t) {
    tt(t, !0);
    const r = () => Ve(li, "$selectedDealBarStore", s), a = () => Ve(b, "$translate", s), [s, o] = mt(), c = _(t, "subscriptions", 7), l = _(t, "sellingPlans", 7), i = _(t, "selectedSellingPlan", 7), u = _(t, "hideSellingPlanSelector", 7, !1), h = _(t, "onChange", 7), b = zt(), g = pn();
    let f = Ge(gt(c().subscribeByDefault || !!i())), k = Ge(gt(i() || l()[0])), x = Ge(!1);
    const m = d(() => Fo(c())), M = d(() => {
      var E, ue;
      const z = (ue = (E = r()) == null ? void 0 : E.dealBar) == null ? void 0 : ue.sellingPlanGid;
      if (z) return l().find((N) => N.id === Kt(z));
    }), C = d(() => {
      var E;
      return (E = e(M)) != null ? E : e(k);
    }), V = d(() => {
      var E, ue, z, N, S;
      return (S = (N = (ue = (E = r()) == null ? void 0 : E.pricing.discountedPricesForSellingPlans.find((P) => {
        var L;
        return P.sellingPlanId === ((L = e(C)) == null ? void 0 : L.id);
      })) == null ? void 0 : ue.discountedPrice) != null ? N : (z = r()) == null ? void 0 : z.pricing.discountedPrice) != null ? S : 0;
    }), D = d(() => {
      var E, ue;
      return (ue = (E = r()) == null ? void 0 : E.pricing.fullPrice) != null ? ue : 0;
    }), A = d(() => {
      var E, ue, z;
      return bn({ priceFormatter: Ve(g, "$formatPrice", s), product: (E = r()) == null ? void 0 : E.product, totalFullPrice: e(D), totalDiscountedPrice: e(V), quantity: (z = (ue = r()) == null ? void 0 : ue.quantity) != null ? z : 1, sellingPlan: e(C), unitQuantity: null });
    });
    function H(E) {
      te(k, E, !0), h()(E);
    }
    Ye(() => {
      if (i()) return te(k, i(), !0), void te(f, !0);
      if (l().length === 0) return void te(f, !1);
      e(k) && l().some((E) => E.id === e(k).id) || te(k, l()[0], !0), e(x) || te(f, c().subscribeByDefault, !0), h()(e(f) ? e(k) : void 0);
    }), Ya(() => {
      e(f) && h()(e(k));
    });
    var ee = { get subscriptions() {
      return c();
    }, set subscriptions(E) {
      c(E), v();
    }, get sellingPlans() {
      return l();
    }, set sellingPlans(E) {
      l(E), v();
    }, get selectedSellingPlan() {
      return i();
    }, set selectedSellingPlan(E) {
      i(E), v();
    }, get hideSellingPlanSelector() {
      return u();
    }, set hideSellingPlanSelector(E = !1) {
      u(E), v();
    }, get onChange() {
      return h();
    }, set onChange(E) {
      h(E), v();
    } }, I = ak(), Z = w(I);
    {
      let E = d(() => ["kaching-bundles__bar", l().length === 0 && "kaching-bundles__bar--disabled"]);
      Xt(Z, { element: "div", get class() {
        return e(E);
      }, role: "checkbox", get "aria-checked"() {
        return e(f);
      }, onclick: function() {
        te(x, !0), te(f, !e(f)), h()(e(f) ? e(k) : void 0);
      }, children: (ue, z) => {
        var N = rk(), S = w(N), P = w(S), L = w(P), j = w(L), Y = (F) => {
          vs(F);
        };
        G(j, (F) => {
          e(f) && F(Y);
        }), y(L);
        var de = O(L, 2), T = w(de), q = w(T), se = w(q), le = (F) => {
          var ae = ek();
          Le(w(ae), () => e(A)(a()(c().subscribeTitle))), y(ae), p(F, ae);
        };
        G(se, (F) => {
          c().subscribeTitle && F(le);
        }), y(q);
        var W = O(q, 2), oe = (F) => {
          var ae = tk();
          Le(w(ae), () => e(A)(a()(c().subscribeSubtitle))), y(ae), p(F, ae);
        };
        G(W, (F) => {
          c().subscribeSubtitle && F(oe);
        }), y(T);
        var K = O(T, 2), Q = (F) => {
          ms(F, { get discountedPrice() {
            return e(V);
          }, get fullPrice() {
            return e(D);
          } });
        };
        G(K, (F) => {
          c().showPrices && r() && F(Q);
        }), y(de), y(P);
        var U = O(P, 2), X = (F) => {
          Va(F, { get highlights() {
            return c().highlights;
          }, get isSelected() {
            return e(f);
          }, get replaceLiquid() {
            return e(A);
          } });
        };
        G(U, (F) => {
          c().highlights && F(X);
        });
        var ne = O(U, 2), J = (F) => {
          var ae = nk();
          Ta(w(ae), { get sellingPlans() {
            return l();
          }, get selectedSellingPlan() {
            return e(k);
          }, onChange: H }), y(ae), p(F, ae);
        };
        G(ne, (F) => {
          e(f) && l().length > 1 && e(k) && !u() && F(J);
        }), y(S), y(N), p(ue, N);
      }, $$slots: { default: !0 } });
    }
    y(I), _e(() => Ot(I, e(m))), p(n, I);
    var B = nt(ee);
    return o(), B;
  }
  function ik(n, t, r, a) {
    t()(r().subscribeByDefault ? void 0 : e(a));
  }
  Ze(ag, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0);
  var lk = $('<div class="kaching-bundles__subscriptions kaching-bundles__subscriptions--link"><button type="button" class="kaching-bundles__subscriptions__link"><!><!></button></div>');
  function ig(n, t) {
    tt(t, !0);
    const r = () => Ve(li, "$selectedDealBarStore", s), a = () => Ve(g, "$formatPrice", s), [s, o] = mt(), c = _(t, "subscriptions", 7), l = _(t, "sellingPlans", 7), i = _(t, "selectedSellingPlan", 7), u = _(t, "onChange", 7), h = _(t, "onRequestAddToCart", 7), b = zt(), g = pn(), f = d(() => Fo(c())), k = d(() => {
      var z, N;
      const S = (N = (z = r()) == null ? void 0 : z.dealBar) == null ? void 0 : N.sellingPlanGid;
      if (S) return l().find((P) => P.id === Kt(S));
    }), x = d(() => {
      var z, N;
      return (N = (z = e(k)) != null ? z : i()) != null ? N : l()[0];
    }), m = d(() => {
      var z, N, S, P, L;
      return (L = (P = (N = (z = r()) == null ? void 0 : z.pricing.discountedPricesForSellingPlans.find((j) => {
        var Y;
        return j.sellingPlanId === ((Y = e(x)) == null ? void 0 : Y.id);
      })) == null ? void 0 : N.discountedPrice) != null ? P : (S = r()) == null ? void 0 : S.pricing.discountedPrice) != null ? L : 0;
    }), M = d(() => {
      var z, N;
      return (N = (z = r()) == null ? void 0 : z.pricing.discountedPriceWithoutSellingPlan) != null ? N : 0;
    }), C = d(() => {
      var z, N;
      return (N = (z = r()) == null ? void 0 : z.pricing.fullPrice) != null ? N : 0;
    }), V = d(() => {
      var z, N, S;
      return bn({ priceFormatter: a(), product: (z = r()) == null ? void 0 : z.product, totalFullPrice: e(C), totalDiscountedPrice: c().subscribeByDefault ? e(M) : e(m), quantity: (S = (N = r()) == null ? void 0 : N.quantity) != null ? S : 1, sellingPlan: c().subscribeByDefault ? void 0 : e(x), unitQuantity: null });
    }), D = d(() => c().subscribeByDefault ? e(M) : e(m)), A = d(() => {
      const z = c().subscribeByDefault ? c().oneTimeTitle : c().subscribeTitle;
      return z ? e(V)(Ve(b, "$translate", s)(z)) : "";
    });
    let H, ee = !1;
    Ye(() => {
      const z = l().length !== 0 && c().subscribeByDefault ? e(x) : void 0;
      ee && (z == null ? void 0 : z.id) === H || (H = z == null ? void 0 : z.id, ee = !0, u()(z));
    });
    var I = { get subscriptions() {
      return c();
    }, set subscriptions(z) {
      c(z), v();
    }, get sellingPlans() {
      return l();
    }, set sellingPlans(z) {
      l(z), v();
    }, get selectedSellingPlan() {
      return i();
    }, set selectedSellingPlan(z) {
      i(z), v();
    }, get onChange() {
      return u();
    }, set onChange(z) {
      u(z), v();
    }, get onRequestAddToCart() {
      return h();
    }, set onRequestAddToCart(z) {
      h(z), v();
    } }, Z = ze(), B = ve(Z), E = (z) => {
      var N = lk(), S = w(N);
      S.__click = [ik, h, c, x];
      var P = w(S);
      Le(P, () => e(A));
      var L = O(P), j = (Y) => {
        var de = Un();
        _e((T) => kt(de, T), [() => " • " + a()(e(D))]), p(Y, de);
      };
      G(L, (Y) => {
        c().showPrices && r() && Y(j);
      }), y(S), y(N), _e(() => Ot(N, e(f))), p(z, N);
    };
    G(B, (z) => {
      l().length > 0 && e(A) && z(E);
    }), p(n, Z);
    var ue = nt(I);
    return o(), ue;
  }
  Gn(["click"]), Ze(ig, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, onChange: {}, onRequestAddToCart: {} }, [], [], !0);
  var sk = $('<div class="kaching-bundles__block-title"><!></div>'), ok = $('<!> <div class="kaching-bundles__subscriptions-wrapper"><!></div>', 1);
  function lg(n, t) {
    tt(t, !0);
    const [r, a] = mt(), s = _(t, "subscriptions", 7), o = _(t, "sellingPlans", 7), c = _(t, "selectedSellingPlan", 7), l = _(t, "hideSellingPlanSelector", 7, !1), i = _(t, "hideTitle", 7, !1), u = _(t, "onChange", 7), h = _(t, "onRequestAddToCart", 7), b = zt(), g = d(() => s().title ? Ve(b, "$translate", r)(s().title) : "");
    var f = { get subscriptions() {
      return s();
    }, set subscriptions(H) {
      s(H), v();
    }, get sellingPlans() {
      return o();
    }, set sellingPlans(H) {
      o(H), v();
    }, get selectedSellingPlan() {
      return c();
    }, set selectedSellingPlan(H) {
      c(H), v();
    }, get hideSellingPlanSelector() {
      return l();
    }, set hideSellingPlanSelector(H = !1) {
      l(H), v();
    }, get hideTitle() {
      return i();
    }, set hideTitle(H = !1) {
      i(H), v();
    }, get onChange() {
      return u();
    }, set onChange(H) {
      u(H), v();
    }, get onRequestAddToCart() {
      return h();
    }, set onRequestAddToCart(H) {
      h(H), v();
    } }, k = ok(), x = ve(k), m = (H) => {
      var ee = sk();
      Le(w(ee), () => e(g)), y(ee), p(H, ee);
    };
    G(x, (H) => {
      e(g) && !i() && H(m);
    });
    var M = O(x, 2), C = w(M), V = (H) => {
      ag(H, { get subscriptions() {
        return s();
      }, get sellingPlans() {
        return o();
      }, get selectedSellingPlan() {
        return c();
      }, get hideSellingPlanSelector() {
        return l();
      }, get onChange() {
        return u();
      } });
    }, D = (H) => {
      var ee = ze(), I = ve(ee), Z = (E) => {
        ig(E, { get subscriptions() {
          return s();
        }, get sellingPlans() {
          return o();
        }, get selectedSellingPlan() {
          return c();
        }, get onChange() {
          return u();
        }, get onRequestAddToCart() {
          return h();
        } });
      }, B = (E) => {
        rg(E, { get subscriptions() {
          return s();
        }, get sellingPlans() {
          return o();
        }, get selectedSellingPlan() {
          return c();
        }, get hideSellingPlanSelector() {
          return l();
        }, get onChange() {
          return u();
        } });
      };
      G(I, (E) => {
        s().layout === "link" ? E(Z) : E(B, !1);
      }, !0), p(H, ee);
    };
    G(C, (H) => {
      s().layout === "checkbox" ? H(V) : H(D, !1);
    }), y(M), p(n, k);
    var A = nt(f);
    return a(), A;
  }
  Ze(lg, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, hideTitle: {}, onChange: {}, onRequestAddToCart: {} }, [], [], !0);
  var ck = Dn('<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.584 21H42.834V14C42.834 6.279 36.555 0 28.834 0C21.113 0 14.834 6.279 14.834 14V21H13.084C10.1907 21 7.83398 23.3543 7.83398 26.25V50.75C7.83398 53.6457 10.1907 56 13.084 56H44.584C47.4773 56 49.834 53.6457 49.834 50.75V26.25C49.834 23.3543 47.4773 21 44.584 21ZM19.5007 14C19.5007 8.85267 23.6867 4.66667 28.834 4.66667C33.9813 4.66667 38.1673 8.85267 38.1673 14V21H19.5007V14ZM31.1673 39.018V44.3333C31.1673 45.6213 30.1243 46.6667 28.834 46.6667C27.5436 46.6667 26.5007 45.6213 26.5007 44.3333V39.018C25.1123 38.2083 24.1673 36.7197 24.1673 35C24.1673 32.4263 26.2603 30.3333 28.834 30.3333C31.4076 30.3333 33.5007 32.4263 33.5007 35C33.5007 36.7197 32.5557 38.2083 31.1673 39.018Z" fill="currentColor" transform="translate(21.5, 22)"></path></svg>');
  function sg(n) {
    p(n, ck());
  }
  Ze(sg, {}, [], [], !0);
  var uk = $('<img alt="Locked" class="kaching-bundles__progressive-gifts__gift__image"/>'), dk = $('<img class="kaching-bundles__progressive-gifts__gift__image kaching-bundles__progressive-gifts__gift__image--locked-product"/>'), gk = $('<div class="kaching-bundles__progressive-gifts__gift__image-wrapper"><!></div>'), hk = $('<div class="kaching-bundles__progressive-gifts__gift__title kaching-bundles__progressive-gifts__gift__title--locked"><!></div>'), pk = $('<div class="kaching-bundles__progressive-gifts__gift__title kaching-bundles__progressive-gifts__gift__title--locked"><!></div>'), bk = $('<span class="kaching-bundles__progressive-gifts__gift__label__text"><!></span>'), fk = $('<span class="kaching-bundles__progressive-gifts__gift__label__text kaching-bundles__progressive-gifts__gift__label__text--crossed-out"><!></span>'), vk = $('<div class="kaching-bundles__progressive-gifts__gift__label"><!> <!></div>'), _k = $('<div class="kaching-bundles__progressive-gifts__gift__content"><!> <!> <!></div>'), kk = $('<div class="kaching-bundles__progressive-gifts__gift__image-wrapper"><img class="kaching-bundles__progressive-gifts__gift__image"/></div>'), mk = $('<span class="kaching-bundles__progressive-gifts__gift__title"><!></span>'), xk = $('<span class="kaching-bundles__progressive-gifts__gift__label__text"><!></span>'), yk = $('<span class="kaching-bundles__progressive-gifts__gift__label__text kaching-bundles__progressive-gifts__gift__label__text--crossed-out"><!></span>'), wk = $('<div class="kaching-bundles__progressive-gifts__gift__label"><!> <!></div>'), Pk = $('<div><div class="kaching-bundles__progressive-gifts__gift__content"><!> <div class="kaching-bundles__progressive-gifts__gift__details"><div class="kaching-bundles__progressive-gifts__gift__details__content"><!> <!></div> <!></div></div></div>');
  function og(n, t) {
    tt(t, !0);
    const r = () => Ve(C, "$config", o), a = () => Ve(x, "$translate", o), s = () => Ve(M, "$getMediaImageUrl", o), [o, c] = mt(), l = _(t, "progressiveGifts", 7), i = _(t, "gift", 7), u = _(t, "product", 7), h = _(t, "selectedDealBarIndex", 7), b = _(t, "sellingPlan", 7), g = _(t, "onChange", 7), f = _(t, "onUnlock", 7), k = _(t, "onSubscribe", 7), x = zt(), m = pn(), M = On(), C = mn(), V = d(() => i().differentVariantsEnabled), D = d(() => {
      var U;
      return u() ? i().variantGIDs ? i().variantGIDs.map(Kt) : (U = u()) == null ? void 0 : U.variants.map((X) => X.id) : null;
    }), A = d(() => {
      if (u()) return { ...u(), variants: u().variants.filter((U) => (r().preview || U.availableForSale) && (!e(D) || e(D).includes(U.id))) };
    });
    let H = Ge(gt([]));
    const ee = d(() => (function(U, X, ne) {
      return U.length > 0 ? U : X != null && X.availableForSale && X.variants.length > 0 ? Array.from({ length: ne }, () => X.variants[0].id) : [];
    })(e(H), e(A), i().quantity)), I = d(() => u() && e(ee).length > 0 ? e(ee).map((U) => u().variants.find((X) => X.id === U)).filter((U) => U !== void 0) : []), Z = d(() => {
      var U;
      return bn({ priceFormatter: Ve(m, "$formatPrice", o), product: u(), totalFullPrice: ((U = e(I)) == null ? void 0 : U.reduce((X, ne) => {
        var J;
        return X + ((J = ne == null ? void 0 : ne.price) != null ? J : 0);
      }, 0)) || 0, totalDiscountedPrice: 0, quantity: i().quantity, unitQuantity: Sr(e(I).map((X) => ({ variant: X, quantity: 1 }))) });
    }), B = d(() => e(Z)(a()(i().title))), E = d(() => e(Z)(a()(i().lockedTitle))), ue = d(() => e(Z)(a()(i().label))), z = d(() => e(Z)(a()(i().labelCrossedOut))), N = d(() => h() === null || !Do(i(), h() + 1)), S = d(() => Td(i(), b())), P = d(() => e(N) || e(S));
    function L() {
      e(N) && f()(), e(S) && k()();
    }
    const j = d(() => {
      var U, X, ne;
      return i().giftType === "shipping" ? Po : ((X = (U = e(I)) == null ? void 0 : U[0]) == null ? void 0 : X.image) || ((ne = u()) == null ? void 0 : ne.image);
    }), Y = d(() => i().mediaImageGID ? s()(i().mediaImageGID) : e(j)), de = d(() => !l().inheritStyle && l().style && s()(l().style.lockedMediaImageGID)), T = d(() => l().showLockedGiftProducts && !e(de)), q = d(() => e(T) && !!e(Y));
    Ye(() => {
      if (u() && e(I) && !e(P)) {
        const U = Object.values(e(I).reduce((X, ne) => (X[ne.id] ? X[ne.id].quantity += 1 : X[ne.id] = { variant: ne, quantity: 1 }, X), {}));
        en(() => g()({ product: u(), variants: U }));
      } else en(() => g()(void 0));
    }), dr(() => {
      i().productGID;
    }), Ye(() => {
      e(P) && e(Y) && (new Image().src = e(Y));
    });
    const se = d(() => !(i().giftType !== "product" || !u() || u().availableForSale && u().variants.filter((U) => U.availableForSale && (!e(D) || e(D).includes(U.id))).length !== 0));
    var le = { get progressiveGifts() {
      return l();
    }, set progressiveGifts(U) {
      l(U), v();
    }, get gift() {
      return i();
    }, set gift(U) {
      i(U), v();
    }, get product() {
      return u();
    }, set product(U) {
      u(U), v();
    }, get selectedDealBarIndex() {
      return h();
    }, set selectedDealBarIndex(U) {
      h(U), v();
    }, get sellingPlan() {
      return b();
    }, set sellingPlan(U) {
      b(U), v();
    }, get onChange() {
      return g();
    }, set onChange(U) {
      g(U), v();
    }, get onUnlock() {
      return f();
    }, set onUnlock(U) {
      f(U), v();
    }, get onSubscribe() {
      return k();
    }, set onSubscribe(U) {
      k(U), v();
    } }, W = ze(), oe = ve(W), K = (U) => {
      var X = ze(), ne = ve(X), J = (F) => {
        var ae = ze(), ie = ve(ae), ke = (pe) => {
          Xt(pe, { element: "div", class: "kaching-bundles__progressive-gifts__gift kaching-bundles__progressive-gifts__gift--locked", onclick: L, children: (ge, me) => {
            var ce = _k(), fe = w(ce), Fe = (Ie) => {
              var be = gk(), ye = w(be), qe = (Me) => {
                var Ae = uk();
                _e(() => Be(Ae, "src", e(de))), p(Me, Ae);
              }, De = (Me) => {
                var Ae = ze(), Oe = ve(Ae), je = (Ue) => {
                  var ot = dk();
                  _e(() => {
                    var Wt, bt;
                    Be(ot, "src", e(Y)), Be(ot, "alt", (bt = (Wt = u()) == null ? void 0 : Wt.title) != null ? bt : "");
                  }), p(Ue, ot);
                }, Ke = (Ue) => {
                  sg(Ue);
                };
                G(Oe, (Ue) => {
                  e(q) ? Ue(je) : Ue(Ke, !1);
                }, !0), p(Me, Ae);
              };
              G(ye, (Me) => {
                e(de) ? Me(qe) : Me(De, !1);
              }), y(be), p(Ie, be);
            };
            G(fe, (Ie) => {
              !e(q) && e(T) || Ie(Fe);
            });
            var $e = O(fe, 2), Ce = (Ie) => {
              var be = hk();
              Le(w(be), () => e(E)), y(be), p(Ie, be);
            }, Te = (Ie) => {
              var be = ze(), ye = ve(be), qe = (De) => {
                var Me = pk();
                Le(w(Me), () => e(B)), y(Me), p(De, Me);
              };
              G(ye, (De) => {
                e(B) && De(qe);
              }, !0), p(Ie, be);
            };
            G($e, (Ie) => {
              e(T) ? Ie(Te, !1) : Ie(Ce);
            });
            var R = O($e, 2), xe = (Ie) => {
              var be = vk(), ye = w(be), qe = (Ae) => {
                var Oe = bk();
                Le(w(Oe), () => e(ue)), y(Oe), p(Ae, Oe);
              };
              G(ye, (Ae) => {
                e(ue) && Ae(qe);
              });
              var De = O(ye, 2), Me = (Ae) => {
                var Oe = fk();
                Le(w(Oe), () => e(z)), y(Oe), p(Ae, Oe);
              };
              G(De, (Ae) => {
                e(z) && Ae(Me);
              }), y(be), p(Ie, be);
            };
            G(R, (Ie) => {
              (e(ue) || e(z)) && l().showLockedGiftLabels && Ie(xe);
            }), y(ce), p(ge, ce);
          }, $$slots: { default: !0 } });
        }, re = (pe) => {
          var ge = Pk();
          let me;
          var ce = w(ge), fe = w(ce), Fe = (qe) => {
            var De = kk(), Me = w(De);
            y(De), _e(() => {
              var Ae, Oe;
              Be(Me, "src", e(Y)), Be(Me, "alt", (Oe = (Ae = u()) == null ? void 0 : Ae.title) != null ? Oe : "");
            }), p(qe, De);
          };
          G(fe, (qe) => {
            e(Y) && qe(Fe);
          });
          var $e = O(fe, 2), Ce = w($e), Te = w(Ce), R = (qe) => {
            var De = mk();
            Le(w(De), () => e(B)), y(De), p(qe, De);
          };
          G(Te, (qe) => {
            e(B) && qe(R);
          });
          var xe = O(Te, 2), Ie = (qe) => {
            var De = wk(), Me = w(De), Ae = (Ke) => {
              var Ue = xk();
              Le(w(Ue), () => e(ue)), y(Ue), p(Ke, Ue);
            };
            G(Me, (Ke) => {
              e(ue) && Ke(Ae);
            });
            var Oe = O(Me, 2), je = (Ke) => {
              var Ue = yk();
              Le(w(Ue), () => e(z)), y(Ue), p(Ke, Ue);
            };
            G(Oe, (Ke) => {
              e(z) && Ke(je);
            }), y(De), p(qe, De);
          };
          G(xe, (qe) => {
            (e(ue) || e(z)) && qe(Ie);
          }), y(Ce);
          var be = O(Ce, 2), ye = (qe) => {
            var De = ze();
            At(ve(De), 17, () => ({ length: e(V) ? i().quantity : 1 }), qr, (Me, Ae, Oe) => {
              var je = ze(), Ke = ve(je), Ue = (ot) => {
                {
                  let Wt = d(() => e(V) ? Oe + 1 : void 0);
                  Hn(ot, { get product() {
                    return e(A);
                  }, get selectedVariantId() {
                    return e(ee)[Oe];
                  }, get number() {
                    return e(Wt);
                  }, forceDropdown: !0, onChange: (bt) => (function(qt, nn) {
                    e(V) ? te(H, [...e(ee).slice(0, nn), qt, ...e(ee).slice(nn + 1)], !0) : te(H, Array.from({ length: i().quantity }, () => qt), !0);
                  })(bt, Oe) });
                }
              };
              G(Ke, (ot) => {
                e(ee)[Oe] !== void 0 && ot(Ue);
              }), p(Me, je);
            }), p(qe, De);
          };
          G(be, (qe) => {
            e(A) && e(A).variants.length > 1 && e(ee).length > 0 && qe(ye);
          }), y($e), y(ce), y(ge), _e((qe) => me = Nt(ge, 1, "kaching-bundles__progressive-gifts__gift", null, me, qe), [() => ({ "kaching-bundles__progressive-gifts__gift--out-of-stock": r().preview && e(se) })]), p(pe, ge);
        };
        G(ie, (pe) => {
          e(P) ? pe(ke) : pe(re, !1);
        }), p(F, ae);
      };
      G(ne, (F) => {
        var ae;
        (u() && ((ae = e(I)) != null && ae.length || r().preview && e(se)) || i().giftType === "shipping") && F(J);
      }), p(U, X);
    };
    G(oe, (U) => {
      e(P) && l().hideLockedGifts || U(K);
    }), p(n, W);
    var Q = nt(le);
    return c(), Q;
  }
  Ze(og, { progressiveGifts: {}, gift: {}, product: {}, selectedDealBarIndex: {}, sellingPlan: {}, onChange: {}, onUnlock: {}, onSubscribe: {} }, [], [], !0);
  var Sk = $('<span class="kaching-bundles__progressive-gifts__title"><!></span>'), Bk = $('<span class="kaching-bundles__progressive-gifts__subtitle"><!></span>'), Ck = $('<div class="kaching-bundles__progressive-gifts"><div class="kaching-bundles__progressive-gifts__header"><!> <!></div> <div></div></div>');
  function cg(n, t) {
    tt(t, !0);
    const r = () => Ve(x, "$config", s), a = () => Ve(k, "$translate", s), [s, o] = mt(), c = _(t, "progressiveGifts", 7), l = _(t, "dealBlock", 7), i = _(t, "otherProducts", 7), u = _(t, "selectedDealBarIndex", 7), h = _(t, "sellingPlan", 7), b = _(t, "onChange", 7), g = _(t, "onUnlock", 7), f = _(t, "onSubscribe", 7), k = zt(), x = mn();
    let m = Ge(gt({}));
    const M = d(() => ((Z) => {
      const { progressiveGifts: B, colors: E, fonts: ue } = Z, z = (B == null ? void 0 : B.inheritStyle) || !(B != null && B.style);
      return _n({ "kaching-bundles-progressive-gifts-title-color": We(B.titleColor), "kaching-bundles-progressive-gifts-title-alignment": B.titleAlignment, "kaching-bundles-progressive-gifts-title-size": B.titleSize + "px", "kaching-bundles-progressive-gifts-title-weight": br(B.titleStyle), "kaching-bundles-progressive-gifts-title-style": fr(B.titleStyle), "kaching-bundles-progressive-gifts-subtitle-color": We(B.subtitleColor), "kaching-bundles-progressive-gifts-subtitle-alignment": B.subtitleAlignment, "kaching-bundles-progressive-gifts-subtitle-size": B.subtitleSize + "px", "kaching-bundles-progressive-gifts-subtitle-weight": br(B.subtitleStyle), "kaching-bundles-progressive-gifts-subtitle-style": fr(B.subtitleStyle), "kaching-bundles-progressive-gifts-image-size": z ? void 0 : B.style.imageSize + "px", "kaching-bundles-progressive-gifts-border-radius": (z ? Z.cornerRadius : B.style.cornerRadius) + "px", "kaching-bundles-progressive-gifts-label-background-color": We(z ? E.progressiveGiftsLabelBackground || E.labelBackground : B.style.labelBackgroundColor), "kaching-bundles-progressive-gifts-label-text-color": We(z ? E.label : B.style.labelTextColor), "kaching-bundles-progressive-gifts-label-text-size": (z ? ue.label.size : B.style.labelTextSize) + "px", "kaching-bundles-progressive-gifts-background-color": We(z ? E.selectedBackground : B.style.backgroundColor), "kaching-bundles-progressive-gifts-border-color": We(z ? E.border : B.style.borderColor), "kaching-bundles-progressive-gifts-text-color": We(z ? E.title : B.style.textColor), "kaching-bundles-progressive-gifts-text-size": z ? void 0 : B.style.textSize + "px", "kaching-bundles-progressive-gifts-locked-background-color": We(z ? E.background : B.style.lockedBackgroundColor), "kaching-bundles-progressive-gifts-locked-border-color": We(z ? { ...E.border, alpha: 0.3 * E.border.alpha } : B.style.lockedBorderColor), "kaching-bundles-progressive-gifts-locked-text-color": z ? void 0 : We(B.style.lockedTextColor), "kaching-bundles-progressive-gifts-locked-text-size": z ? void 0 : B.style.lockedTextSize + "px", "kaching-bundles-progressive-gifts-locked-icon-color": z ? void 0 : We(B.style.lockedIconColor) });
    })(l()));
    function C() {
      const Z = Object.entries(e(m)).map(([B, E]) => ({ id: B, variants: E.variants, product: E.product }));
      b()(Z);
    }
    const V = d(() => c().gifts.flatMap((Z) => {
      const B = Z.giftType === "product" && Z.productGID ? i().find((ue) => ue.id === Kt(Z.productGID)) : void 0;
      if (!r().preview && Z.giftType === "product" && !(B != null && B.availableForSale)) return [];
      const E = B && !r().preview ? Pr(B) : B;
      return { gift: Z, product: E };
    }));
    Ye(() => {
      const Z = new Set(c().gifts.map((E) => E.id)), B = Object.keys(e(m)).filter((E) => !Z.has(E));
      if (B.length) {
        for (const E of B) delete e(m)[E];
        C();
      }
    });
    var D = { get progressiveGifts() {
      return c();
    }, set progressiveGifts(Z) {
      c(Z), v();
    }, get dealBlock() {
      return l();
    }, set dealBlock(Z) {
      l(Z), v();
    }, get otherProducts() {
      return i();
    }, set otherProducts(Z) {
      i(Z), v();
    }, get selectedDealBarIndex() {
      return u();
    }, set selectedDealBarIndex(Z) {
      u(Z), v();
    }, get sellingPlan() {
      return h();
    }, set sellingPlan(Z) {
      h(Z), v();
    }, get onChange() {
      return b();
    }, set onChange(Z) {
      b(Z), v();
    }, get onUnlock() {
      return g();
    }, set onUnlock(Z) {
      g(Z), v();
    }, get onSubscribe() {
      return f();
    }, set onSubscribe(Z) {
      f(Z), v();
    } }, A = ze(), H = ve(A), ee = (Z) => {
      var B = Ck(), E = w(B), ue = w(E), z = (j) => {
        var Y = Sk();
        Le(w(Y), () => a()(c().title)), y(Y), p(j, Y);
      };
      G(ue, (j) => {
        c().title && j(z);
      });
      var N = O(ue, 2), S = (j) => {
        var Y = Bk();
        Le(w(Y), () => a()(c().subtitle)), y(Y), p(j, Y);
      };
      G(N, (j) => {
        c().subtitle && j(S);
      }), y(E);
      var P = O(E, 2);
      let L;
      At(P, 21, () => e(V), ({ gift: j, product: Y }) => j.id, (j, Y) => {
        let de = () => e(Y).gift;
        og(j, { get progressiveGifts() {
          return c();
        }, get gift() {
          return de();
        }, get product() {
          return e(Y).product;
        }, get selectedDealBarIndex() {
          return u();
        }, get sellingPlan() {
          return h();
        }, onChange: (T) => (function(q, se) {
          se ? e(m)[q] = se : delete e(m)[q], C();
        })(de().id, T), onUnlock: () => g()(de().unlockAtBar - 1), get onSubscribe() {
          return f();
        } });
      }), y(P), y(B), _e((j) => {
        Ot(B, e(M)), L = Nt(P, 1, "kaching-bundles__progressive-gifts__gifts", null, L, j);
      }, [() => ({ "kaching-bundles__progressive-gifts__gifts--vertical": c().layout === "vertical" })]), p(Z, B);
    };
    G(H, (Z) => {
      c().gifts.length > 0 && Z(ee);
    }), p(n, A);
    var I = nt(D);
    return o(), I;
  }
  Ze(cg, { progressiveGifts: {}, dealBlock: {}, otherProducts: {}, selectedDealBarIndex: {}, sellingPlan: {}, onChange: {}, onUnlock: {}, onSubscribe: {} }, [], [], !0);
  var Ik = $('<span class="kaching-bundles__bar-title"><!></span>'), Mk = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), zk = $('<div class="kaching-bundles__bar-price"><!></div>'), $k = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Dk = $('<span><!></span> <img class="kaching-bundles__checkbox-upsells__image"/> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div></div> <div class="kaching-bundles__bar-pricing"><!> <!></div>', 1), Tk = $('<div class="kaching-bundles__bar-variants kaching-bundles__bar-variants--visible"><!> <!></div>'), Vk = $('<div class="kaching-bundles__bar-variants kaching-bundles__bar-variants--visible"><!></div>'), Ak = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!></div>', 1), qk = $("<div><!></div>");
  function ug(n, t) {
    tt(t, !0);
    const r = () => Ve(x, "$config", o), a = () => Ve(f, "$formatPrice", o), s = () => Ve(oe, "$translate", o), [o, c] = mt(), l = _(t, "checkboxUpsell", 7), i = _(t, "product", 7), u = _(t, "dealBlock", 7), h = _(t, "dealSellingPlan", 7), b = _(t, "dealBarQuantity", 7), g = _(t, "onChange", 7), f = pn(), k = On(), x = mn();
    let m = Ge(!1), M = Ge(1), C = Ge(gt({})), V = Ge(void 0);
    const D = d(() => {
      var ge;
      return (ge = l().preselected) != null && ge;
    }), A = d(() => {
      var ge;
      return e(m) || !((ge = l().showProductOptionsOnlyWhenSelected) == null || ge);
    });
    Ye(() => {
      te(m, e(D), !0);
    }), Ye(() => {
      l().matchQuantityWithDealBar && te(M, b(), !0);
    });
    const H = d(() => !!l().variantGIDs), ee = d(() => {
      var ge, me;
      return e(H) && i() ? i().variants.filter((ce) => l().variantGIDs.some((fe) => Kt(fe) === ce.id)) : (me = (ge = i()) == null ? void 0 : ge.variants) != null ? me : [];
    }), I = d(() => e(M) > 1 && e(ee).length > 1), Z = d(() => (function(ge, me) {
      if (ge.variantGIDs)
        return ge.variantGIDs.length === 0 ? void 0 : Kt(ge.variantGIDs[0]);
      if (me != null && me.availableForSale && me.variants.length > 0) return me.variants[0].id;
    })(l(), i())), B = d(() => {
      if (e(Z) === void 0) return [];
      const ge = [];
      for (let me = 0; me < e(M); me++) {
        const ce = e(C)[me];
        ce !== void 0 ? ge.push(ce) : ge.push(e(Z));
      }
      return ge;
    }), E = d(() => (function(ge, me) {
      if (!me) return [];
      const ce = {};
      for (const fe of ge) {
        const Fe = ce[fe];
        if (Fe) {
          Fe.quantity += 1;
          continue;
        }
        const $e = me.variants.find((Ce) => Ce.id === fe);
        $e && (ce[fe] = { variant: $e, quantity: 1 });
      }
      return Object.values(ce);
    })(e(B), i())), ue = d(() => {
      var ge;
      return (ge = e(E)[0]) == null ? void 0 : ge.variant;
    }), z = d(() => {
      var ge;
      return (ge = l().subscriptionEnabled) == null || ge;
    }), N = d(() => {
      var ge;
      return (ge = l().subscriptionType) != null ? ge : "deal";
    }), S = d(() => e(z) && e(N) === "always" && i() && e(ue) ? bl(i(), [e(ue)]) : []), P = d(() => e(S).find((ge) => ge.id === e(V)) || e(S)[0]);
    Ye(() => {
      var ge;
      e(S).some((me) => {
        var ce;
        return me.id === ((ce = h()) == null ? void 0 : ce.id);
      }) && te(V, (ge = h()) == null ? void 0 : ge.id, !0);
    });
    const L = d(() => {
      if (i() && e(ue) && e(z))
        return e(N) === "deal" ? h() ? rr(i(), e(ue), h()) : void 0 : e(P);
    }), j = d(() => u().priceRounding ? { perItem: u().showPricesPerItem, precision: u().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0);
    function Y(ge) {
      return pa({ discountType: l().discountType, discountValue: l().discountValue, discountQuantity: 1, variantQuantities: e(E), currencyRate: r().currencyRate, priceRounding: e(j), sellingPlan: ge });
    }
    let de = d(() => Y(e(L))), T = d(() => e(E).reduce((ge, { variant: me, quantity: ce }) => ge + Math.max(me.price, me.compareAtPrice || 0) * ce, 0));
    const q = d(() => i() && e(ue) ? rr(i(), e(ue), void 0) : void 0), se = d(() => e(z) && e(N) === "always" ? e(de) : Y(e(q))), le = d(() => !i() || !e(ue) ? [] : bl(i(), [e(ue)]).map((ge) => {
      let me;
      return me = e(z) ? e(N) === "always" ? e(P) : ge : e(q), { sellingPlanId: ge.id, discountedPrice: Y(me) };
    })), W = d(() => bn({ priceFormatter: a(), product: i(), totalFullPrice: e(T), totalDiscountedPrice: e(de), quantity: e(M), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: Sr(e(E)), sellingPlan: e(L) })), oe = zt();
    let K = d(() => e(W)(s()(l().title))), Q = d(() => e(W)(s()(l().subtitle))), U = d(() => e(T) && e(T) > e(de));
    const X = d(() => Ve(k, "$getMediaImageUrl", o)(l().mediaImageGID)), ne = d(() => ((ge, me) => {
      const ce = fs(ge);
      if (ce.length > 0) return ce.filter((Fe) => Fe.attachedTo.type === "checkboxUpsell" && Fe.attachedTo.upsellId === me.id);
      if (ge.badgesEnabled === !1) return [];
      const fe = dd(me);
      return fe ? [fe] : [];
    })(u(), { id: l().id, badgeStyle: l().badgeStyle, badgeText: l().badgeText, badgeImageGID: l().badgeImageGID }).map((ge) => $a(ge, s(), e(W)))), J = d(() => Da(e(ne)));
    function F() {
      te(m, !e(m));
    }
    function ae(ge, me) {
      te(C, { ...e(C), [ge]: me }, !0);
    }
    Ye(() => {
      if (i() && e(E).length > 0 && e(m)) {
        const ge = e(L);
        en(() => g()({ product: i(), variants: e(E), sellingPlan: ge, pricing: { discountedPrice: e(de), fullPrice: e(T), discountedPriceWithoutSellingPlan: e(se), discountedPricesForSellingPlans: e(le) } }));
      } else en(() => g()(void 0));
    });
    var ie = { get checkboxUpsell() {
      return l();
    }, set checkboxUpsell(ge) {
      l(ge), v();
    }, get product() {
      return i();
    }, set product(ge) {
      i(ge), v();
    }, get dealBlock() {
      return u();
    }, set dealBlock(ge) {
      u(ge), v();
    }, get dealSellingPlan() {
      return h();
    }, set dealSellingPlan(ge) {
      h(ge), v();
    }, get dealBarQuantity() {
      return b();
    }, set dealBarQuantity(ge) {
      b(ge), v();
    }, get onChange() {
      return g();
    }, set onChange(ge) {
      g(ge), v();
    } }, ke = qk();
    let re;
    ai(w(ke), { element: "div", get borderHost() {
      return e(J);
    }, children: (ge, me) => {
      var ce = Ak(), fe = ve(ce);
      At(fe, 17, () => e(ne), (ye) => ye.id, (ye, qe) => {
        ba(ye, { get badge() {
          return e(qe);
        }, blockLayout: "vertical" });
      });
      var Fe = O(fe, 2), $e = w(Fe);
      Xt($e, { element: "div", class: "kaching-bundles__bar-main", role: "checkbox", get "aria-checked"() {
        return e(m);
      }, onclick: F, children: (ye, qe) => {
        var De = Dk(), Me = ve(De);
        let Ae;
        var Oe = w(Me), je = (ut) => {
          vs(ut);
        };
        G(Oe, (ut) => {
          e(m) && ut(je);
        }), y(Me);
        var Ke = O(Me, 2), Ue = O(Ke, 2), ot = w(Ue), Wt = w(ot);
        lt(w(Wt), () => e(K), (ut) => {
          var st = Ik();
          Le(w(st), () => e(K)), y(st), p(ut, st);
        }), y(Wt);
        var bt = O(Wt, 2), qt = (ut) => {
          var st = ze();
          lt(ve(st), () => e(Q), (rt) => {
            var et = Mk();
            Le(w(et), () => e(Q)), y(et), p(rt, et);
          }), p(ut, st);
        };
        G(bt, (ut) => {
          e(Q) && ut(qt);
        }), y(ot), y(Ue);
        var nn = O(Ue, 2), Pe = w(nn);
        lt(Pe, () => e(de), (ut) => {
          var st = zk();
          Le(w(st), () => a()(e(de))), y(st), _e((rt) => Be(st, "data-a11y-label", rt), [() => s()("system.price")]), p(ut, st);
        });
        var He = O(Pe, 2), ht = (ut) => {
          var st = ze();
          lt(ve(st), () => e(T), (rt) => {
            var et = $k();
            Le(w(et), () => a()(e(T))), y(et), _e((Dt) => Be(et, "data-a11y-label", Dt), [() => s()("system.original_price")]), p(rt, et);
          }), p(ut, st);
        };
        G(He, (ut) => {
          e(U) && ut(ht);
        }), y(nn), _e((ut) => {
          var st, rt, et;
          Ae = Nt(Me, 1, "kaching-bundles__checkbox-upsells__checkbox", null, Ae, ut), Be(Ke, "src", e(X) || ((st = e(ue)) == null ? void 0 : st.image) || ((rt = i()) == null ? void 0 : rt.image)), Be(Ke, "alt", (et = i()) == null ? void 0 : et.title);
        }, [() => ({ "kaching-bundles__checkbox-upsells__checkbox--selected": e(m) })]), p(ye, De);
      }, $$slots: { default: !0 } });
      var Ce = O($e, 2), Te = (ye) => {
        var qe = Tk(), De = w(qe);
        {
          let je = d(() => ({ ...i(), variants: e(ee) }));
          ha(De, { get product() {
            return e(je);
          } });
        }
        var Me = O(De, 2), Ae = (je) => {
          var Ke = ze();
          At(ve(Ke), 17, () => ({ length: e(M) }), qr, (Ue, ot, Wt) => {
            {
              let bt = d(() => ({ ...i(), variants: e(ee) })), qt = d(() => e(M) > 1 ? Wt + 1 : void 0);
              Hn(Ue, { get product() {
                return e(bt);
              }, get selectedVariantId() {
                return e(B)[Wt];
              }, get number() {
                return e(qt);
              }, onChange: (nn) => ae(Wt, nn) });
            }
          }), p(je, Ke);
        }, Oe = (je) => {
          {
            let Ke = d(() => ({ ...i(), variants: e(ee) }));
            Hn(je, { get product() {
              return e(Ke);
            }, get selectedVariantId() {
              return e(B)[0];
            }, onChange: (Ue) => ae(0, Ue) });
          }
        };
        G(Me, (je) => {
          e(I) ? je(Ae) : je(Oe, !1);
        }), y(qe), p(ye, qe);
      };
      G(Ce, (ye) => {
        e(A) && e(ee).length > 1 && e(B).length > 0 && ye(Te);
      });
      var R = O(Ce, 2), xe = (ye) => {
        var qe = Vk();
        Ta(w(qe), { get sellingPlans() {
          return e(S);
        }, get selectedSellingPlan() {
          return e(P);
        }, onChange: (De) => te(V, De.id, !0) }), y(qe), p(ye, qe);
      };
      G(R, (ye) => {
        e(A) && e(S).length > 1 && e(P) && ye(xe);
      });
      var Ie = O(R, 2), be = (ye) => {
        yl(ye, { get value() {
          return e(M);
        }, min: 1, onChange: (qe) => te(M, qe, !0) });
      };
      G(Ie, (ye) => {
        e(A) && l().quantitySelector && ye(be);
      }), y(Fe), p(ge, ce);
    }, $$slots: { default: !0 } }), y(ke), _e((ge) => re = Nt(ke, 1, "kaching-bundles__checkbox-upsells__upsell kaching-bundles__bar", null, re, ge), [() => {
      var ge;
      return { "kaching-bundles__bar--selected": e(m), "kaching-bundles__bar--disabled": r().preview && !((ge = i()) != null && ge.availableForSale) };
    }]), p(n, ke);
    var pe = nt(ie);
    return c(), pe;
  }
  Ze(ug, { checkboxUpsell: {}, product: {}, dealBlock: {}, dealSellingPlan: {}, dealBarQuantity: {}, onChange: {} }, [], [], !0);
  var Gk = $('<div class="kaching-bundles__block-title"><!></div>'), Ok = $('<div class="kaching-bundles__checkbox-upsells"><!> <div class="kaching-bundles__checkbox-upsells__upsells"></div></div>');
  function dg(n, t) {
    tt(t, !0);
    const [r, a] = mt(), s = _(t, "checkboxUpsells", 7), o = _(t, "dealBlock", 7), c = _(t, "otherProducts", 7), l = _(t, "complementaryProducts", 7), i = _(t, "dealSellingPlan", 7), u = _(t, "dealBarQuantity", 7), h = _(t, "onChange", 7), b = mn(), g = zt(), f = d(() => s().title ? Ve(g, "$translate", r)(s().title) : "");
    let k = Ge(gt({}));
    const x = d(() => l().map(Pr)), m = Math.floor(1e3 * Math.random()), M = d(() => s().upsells.flatMap((I, Z) => {
      if (I.productSource === "complementary") {
        const ue = e(x)[(Z + m) % (e(x).length || 1)];
        return ue ? { upsell: I, product: ue } : [];
      }
      const B = I.productGID ? c().find((ue) => ue.id === Kt(I.productGID)) : void 0;
      if (!Ve(b, "$config", r).preview && !(B != null && B.availableForSale)) return [];
      const E = B && Pr(B);
      return { upsell: I, product: E };
    }));
    var C = { get checkboxUpsells() {
      return s();
    }, set checkboxUpsells(I) {
      s(I), v();
    }, get dealBlock() {
      return o();
    }, set dealBlock(I) {
      o(I), v();
    }, get otherProducts() {
      return c();
    }, set otherProducts(I) {
      c(I), v();
    }, get complementaryProducts() {
      return l();
    }, set complementaryProducts(I) {
      l(I), v();
    }, get dealSellingPlan() {
      return i();
    }, set dealSellingPlan(I) {
      i(I), v();
    }, get dealBarQuantity() {
      return u();
    }, set dealBarQuantity(I) {
      u(I), v();
    }, get onChange() {
      return h();
    }, set onChange(I) {
      h(I), v();
    } }, V = Ok(), D = w(V), A = (I) => {
      var Z = Gk();
      Le(w(Z), () => e(f)), y(Z), p(I, Z);
    };
    G(D, (I) => {
      e(f) && I(A);
    });
    var H = O(D, 2);
    At(H, 21, () => e(M), ({ upsell: I, product: Z }) => I.id, (I, Z) => {
      let B = () => e(Z).upsell;
      ug(I, { get checkboxUpsell() {
        return B();
      }, get product() {
        return e(Z).product;
      }, get dealBlock() {
        return o();
      }, get dealSellingPlan() {
        return i();
      }, get dealBarQuantity() {
        return u();
      }, onChange: (E) => (function(ue, z) {
        var N;
        z ? e(k)[ue] = z : delete e(k)[ue];
        const S = Object.entries(e(k)).flatMap(([T, q]) => q.variants.map(({ variant: se, quantity: le }) => ({ id: T, variant: se, product: q.product, quantity: le, sellingPlan: q.sellingPlan })));
        let P = 0, L = 0, j = 0;
        const Y = /* @__PURE__ */ new Map();
        for (const T of Object.values(e(k))) {
          P += T.pricing.discountedPrice, L += T.pricing.fullPrice, j += T.pricing.discountedPriceWithoutSellingPlan;
          for (const q of T.pricing.discountedPricesForSellingPlans) Y.set(q.sellingPlanId, ((N = Y.get(q.sellingPlanId)) != null ? N : 0) + q.discountedPrice);
        }
        const de = Array.from(Y, ([T, q]) => ({ sellingPlanId: T, discountedPrice: q }));
        h()(S, { discountedPrice: P, fullPrice: L, discountedPriceWithoutSellingPlan: j, discountedPricesForSellingPlans: de });
      })(B().id, E) });
    }), y(H), y(V), p(n, V);
    var ee = nt(C);
    return a(), ee;
  }
  Ze(dg, { checkboxUpsells: {}, dealBlock: {}, otherProducts: {}, complementaryProducts: {}, dealSellingPlan: {}, dealBarQuantity: {}, onChange: {} }, [], [], !0);
  var Fk = $('<div class="kaching-bundles__timer" role="timer"><div class="kaching-bundles__timer-title"><!></div></div>');
  function gg(n, t) {
    tt(t, !0);
    const [r, a] = mt(), s = _(t, "timer", 7), o = zt(), c = d(() => ((A) => {
      const { textColor: H, backgroundColor: ee, titleAlignment: I, titleStyle: Z, titleSize: B } = A;
      return _n({ "kaching-bundles-timer-background-color": We(ee), "kaching-bundles-timer-text-color": We(H), "kaching-bundles-timer-title-alignment": I, "kaching-bundles-timer-title-font-weight": Z ? br(Z) : null, "kaching-bundles-timer-title-font-style": Z ? fr(Z) : null, "kaching-bundles-timer-title-size": B ? B + "px" : null });
    })(s()));
    function l() {
      const A = new Bo(), H = new Bo(A);
      return H.setHours(24, 0, 0, 0), Math.floor((H.getTime() - A.getTime()) / 1e3);
    }
    function i() {
      if (!s().endTimestamp) return 0;
      const A = new Bo();
      return Math.max(0, Math.floor((s().endTimestamp - A.getTime()) / 1e3));
    }
    function u() {
      return s().type === "midnight" ? l() : s().type === "custom" ? i() : 60 * s().minutes;
    }
    let h = Ge(gt(u())), b = d(() => s().type !== "custom" || e(h) > 0);
    Ye(() => {
      te(h, u(), !0);
    }), Ye(() => {
      const A = window.setInterval(() => {
        s().type === "midnight" ? te(h, l(), !0) : s().type === "custom" ? te(h, i(), !0) : te(h, e(h) <= 1 ? u() : e(h) - 1, !0);
      }, 1e3);
      return () => window.clearInterval(A);
    });
    const g = d(() => Ve(o, "$translate", r)(s().title)), f = d(() => (function(A) {
      const H = Math.floor(A / 86400), ee = Math.floor(A % 86400 / 3600), I = Math.floor(A % 3600 / 60), Z = A % 60, B = (E) => E.toString().padStart(2, "0");
      return s().type === "custom" && H > 0 ? `${Intl.NumberFormat(navigator.language, { style: "unit", unit: "day", unitDisplay: "narrow" }).format(H)} ${B(ee)}:${B(I)}:${B(Z)}` : ee > 0 ? `${B(ee)}:${B(I)}:${B(Z)}` : `${B(I)}:${B(Z)}`;
    })(e(h))), k = d(() => e(g).replace(/\{\{\s*\w+\s*\}\}/g, '<span class="kaching-bundles__timer-value" translate="no"></span>'));
    let x = Ge(void 0);
    Ye(() => {
      !e(x) || !e(k) || e(x).querySelectorAll(".kaching-bundles__timer-value").forEach((A) => {
        A.textContent = ` ${e(f)} `;
      });
    });
    var m = { get timer() {
      return s();
    }, set timer(A) {
      s(A), v();
    } }, M = ze(), C = ve(M), V = (A) => {
      var H = Fk(), ee = w(H);
      Le(w(ee), () => e(k)), y(ee), Ci(ee, (I) => te(x, I), () => e(x)), y(H), _e(() => Ot(H, e(c))), p(A, H);
    };
    G(C, (A) => {
      e(b) && A(V);
    }), p(n, M);
    var D = nt(m);
    return a(), D;
  }
  function hg(n, t) {
    tt(t, !0);
    const r = _(t, "dealBlockId", 7), a = _(t, "shopCustomStyles", 7), s = _(t, "customStyles", 7), o = d(() => {
      const h = [a(), s()].filter((b) => b == null ? void 0 : b.trim()).join(`
`);
      return h ? `
      <style id="kaching-bundles-custom-styles-${r()}">
        kaching-bundles-block[deal-block-id="${r()}"] {
          ${h}
        }
      </style>
    ` : "";
    });
    var c = { get dealBlockId() {
      return r();
    }, set dealBlockId(h) {
      r(h), v();
    }, get shopCustomStyles() {
      return a();
    }, set shopCustomStyles(h) {
      a(h), v();
    }, get customStyles() {
      return s();
    }, set customStyles(h) {
      s(h), v();
    } }, l = ze(), i = ve(l), u = (h) => {
      var b = ze();
      Le(ve(b), () => e(o)), p(h, b);
    };
    return G(i, (h) => {
      e(o) && h(u);
    }), p(n, l), nt(c);
  }
  Ze(gg, { timer: {} }, [], [], !0), Ze(hg, { dealBlockId: {}, shopCustomStyles: {}, customStyles: {} }, [], [], !0);
  function Lk(n, t = 4) {
    const r = (function(a) {
      let s = 2166136261;
      for (let o = 0; o < a.length; o++) s ^= a.charCodeAt(o), s = Math.imul(s, 16777619) >>> 0;
      return s >>> 0;
    })(n);
    return (function(a, s) {
      let o = "";
      for (let c = 0; c < s; c++) o = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[a % 62] + o, a = Math.floor(a / 62);
      return o;
    })(r, t);
  }
  function pg(n) {
    var t, r, a, s, o, c, l;
    const { dealBlock: i, product: u, pageProductId: h = u.id, selectedDealBarId: b, selectedVariantQuantities: g, selectedBundleProducts: f, selectedCollectionBreaksProducts: k, selectedFreeGifts: x, selectedProgressiveGifts: m, selectedCheckboxUpsells: M, selectedUpsells: C, selectedPersonalisations: V, selectedSellingPlan: D, dealBarSellingPlan: A, nativeBundleProductIds: H } = n, ee = (function(ie) {
      var ke;
      const { product: re, selectedVariantQuantities: pe, selectedBundleProducts: ge, selectedCollectionBreaksProducts: me, selectedFreeGifts: ce, selectedProgressiveGifts: fe, selectedCheckboxUpsells: Fe, selectedUpsells: $e, selectedSellingPlan: Ce, dealBarSellingPlan: Te, selectedDealBarId: R, dealBlock: xe, bundleNonce: Ie } = ie, be = ge.length > 0 || me.length > 0 || ce.length > 0 || fe.length > 0 || $e.length > 0, ye = ce.length > 0 || fe.length > 0 || $e.length > 0, qe = ((ke = xe.dealBars.find((Ae) => Ae.id === R)) == null ? void 0 : ke.dealBarType) === "mix-and-match", De = ye || qe, Me = JSON.stringify([be ? pe.map(({ variant: Ae, quantity: Oe }) => ({ variantId: Ae.id, quantity: Oe })) : re.id, ge.map(({ id: Ae, variant: Oe, quantity: je }) => ({ id: Ae, variantId: Oe.id, quantity: je })), me.map(({ variant: Ae, quantity: Oe }) => ({ variantId: Ae.id, quantity: Oe })), ce.map(({ id: Ae, variant: Oe, quantity: je }) => ({ id: Ae, variantId: Oe.id, quantity: je })), fe.map(({ id: Ae, variants: Oe }) => Oe.map((je) => ({ id: Ae, variantId: je.variant.id, quantity: je.quantity })).flat()).flat(), Fe.map(({ id: Ae, variant: Oe }) => ({ id: Ae, variantId: Oe.id })), $e.map(({ id: Ae, variant: Oe, quantity: je }) => ({ id: Ae, variantId: Oe.id, quantity: je })), Ce == null ? void 0 : Ce.id, Te == null ? void 0 : Te.id, R, ...De ? [Ie] : []]);
      return Lk(Me);
    })(n), I = i.dealBars.find((ie) => ie.id === b);
    let Z = !1;
    I && (!I.dealBarType || I.dealBarType === ft.QuantityBreak || I.dealBarType === ft.Bxgy) && i.dealBars.filter((ie) => !ie.dealBarType || ie.dealBarType === ft.QuantityBreak || ie.dealBarType === ft.Bxgy).filter((ie) => fg(ie) === fg(I) && ie.id !== b).length > 0 && (Z = !0);
    const B = A != null ? A : D, E = (I == null ? void 0 : I.dealBarType) === ft.Bxgy, ue = g.some(({ variant: ie }) => ie.sellingPlans.length > 0), z = E && (ue || n.splitBxgy), N = i.dealBars.some((ie) => (ie.freeGifts || []).filter((ke) => ke.productGID).length > 0), S = !(!i.progressiveGiftsEnabled || !i.progressiveGifts) && i.progressiveGifts.gifts.some((ie) => ie.giftType === "product"), P = i.dealBars.some((ie) => (ie.upsells || []).length > 0), L = i.nanoId || i.id, j = i.abTestVariantId, Y = (t = i.abTestVariantLetter) != null ? t : i.abTestVariantNumber ? String.fromCharCode(64 + i.abTestVariantNumber) : void 0, de = (I == null ? void 0 : I.dealBarType) === ft.Sku || (I == null ? void 0 : I.dealBarType) === ft.Bundle || (I == null ? void 0 : I.dealBarType) === ft.MixAndMatch || Z || z, T = { deal: L, pp: h, main: !0 };
    i.marketId && (T.market = i.marketId), i.versionId && (T.v = i.versionId), de ? (T.id = ee, T.bar = b) : (E || x.length > 0 || m.length > 0 || M.length > 0 || C.length > 0 || k.length > 0 || V.length > 0 || N || S || P) && (T.id = ee), !T.bar && b && (T.bid = b), j && (T.abid = j), Y && (T.ab = Y);
    const q = !b && T.id === void 0, se = { id: ee, deal: L, bar: b };
    i.versionId && (se.v = i.versionId), j && (se.abid = j), Y && (se.ab = Y);
    const le = (I == null ? void 0 : I.dealBarType) === ft.MixAndMatch ? I.bundleProducts.length : void 0, W = [];
    let oe = g, K = [];
    if (z && k.length === 0) {
      const { buy: ie, get: ke } = _g(g, I.getQuantity);
      oe = ie, K = ke;
    }
    for (const { variant: ie, quantity: ke } of oe) {
      const re = { ...T };
      le && (re.mixAndMatchItems = le);
      const pe = rr(u, ie, B);
      pe != null && pe.priceAdjustment && I && vg(I) && (re.sellingPlan = { id: pe.id, priceAdjustment: pe.priceAdjustment });
      const ge = { id: ie.id, quantity: ke, properties: q ? {} : { __kaching_bundles: JSON.stringify(re) } };
      pe && (ge.selling_plan = pe.id), W.push(ge);
    }
    const Q = !n.disableNestedCartLines && oe.length > 0 && !bg(u, H) && (I == null ? void 0 : I.dealBarType) !== ft.MixAndMatch ? oe[0].variant.id : void 0;
    for (const { variant: ie, quantity: ke } of K) {
      const re = { ...se, main: !0, bxgy: !0 }, pe = rr(u, ie, B);
      pe != null && pe.priceAdjustment && (I == null ? void 0 : I.dealBarType) === ft.Bxgy && I.getDiscountType === "specific" && (re.sellingPlan = { id: pe.id, priceAdjustment: pe.priceAdjustment });
      const ge = { id: ie.id, quantity: ke, properties: { __kaching_bundles: JSON.stringify(re) } };
      Fi(ge, Q, u, H), pe && (ge.selling_plan = pe.id), W.push(ge);
    }
    for (const ie of f) {
      const ke = { ...se, bundleProduct: ie.id };
      le && (ke.mixAndMatchItems = le);
      const re = rr(ie.product, ie.variant, B);
      re != null && re.priceAdjustment && (I == null ? void 0 : I.dealBarType) === ft.Bundle && ((r = I == null ? void 0 : I.bundleProducts.find((ge) => ge.id === ie.id)) == null ? void 0 : r.discountType) === "specific" && (ke.sellingPlan = { id: re.id, priceAdjustment: re.priceAdjustment });
      const pe = { id: ie.variant.id, quantity: ie.quantity, properties: { __kaching_bundles: JSON.stringify(ke) } };
      Fi(pe, Q, ie.product, H), re && (pe.selling_plan = re.id), W.push(pe);
    }
    let U = k, X = [];
    if (z && k.length > 0) {
      const { buy: ie, get: ke } = _g(k, I.getQuantity);
      U = ie, X = ke;
    }
    const ne = ((a = i.collectionBreaks) == null ? void 0 : a.visibility) === "deal-products";
    for (const ie of U) {
      if (ne) {
        const ge = W.find((me) => me.id === ie.variant.id);
        if (ge) {
          ge.quantity += ie.quantity;
          continue;
        }
      }
      const ke = { ...se, collectionBreaksProduct: !0 };
      de || delete ke.bar;
      const re = rr(ie.product, ie.variant, B);
      re != null && re.priceAdjustment && I && vg(I) && (ke.sellingPlan = { id: re.id, priceAdjustment: re.priceAdjustment });
      const pe = { id: ie.variant.id, quantity: ie.quantity, properties: { __kaching_bundles: JSON.stringify(ke) } };
      re && (pe.selling_plan = re.id), W.push(pe);
    }
    for (const ie of X) {
      const ke = { ...se, collectionBreaksProduct: !0 };
      de || delete ke.bar, ke.bxgy = !0;
      const re = rr(ie.product, ie.variant, B);
      re != null && re.priceAdjustment && (I == null ? void 0 : I.dealBarType) === ft.Bxgy && I.getDiscountType === "specific" && (ke.sellingPlan = { id: re.id, priceAdjustment: re.priceAdjustment });
      const pe = { id: ie.variant.id, quantity: ie.quantity, properties: { __kaching_bundles: JSON.stringify(ke) } };
      re && (pe.selling_plan = re.id), W.push(pe);
    }
    for (const ie of x) {
      if (ie.applyOnlyForSubscriptions && !B) continue;
      const ke = { ...se, gift: ie.id };
      delete ke.bar;
      const re = { id: ie.variant.id, quantity: ie.quantity, properties: { __kaching_bundles: JSON.stringify(ke) } };
      Fi(re, Q, ie.product, H);
      const pe = rr(ie.product, ie.variant, B);
      pe && (re.selling_plan = pe.id), W.push(re);
    }
    for (const ie of m) {
      const ke = { ...se, gift: ie.id };
      delete ke.bar;
      for (const re of ie.variants) {
        const pe = { id: re.variant.id, quantity: re.quantity, properties: { __kaching_bundles: JSON.stringify(ke) } };
        Fi(pe, Q, ie.product, H);
        const ge = rr(ie.product, re.variant, B);
        ge && (pe.selling_plan = ge.id), W.push(pe);
      }
    }
    for (const ie of M) {
      const ke = { ...se, checkboxUpsell: ie.id };
      delete ke.bar;
      const re = ie.sellingPlan, pe = (s = i.checkboxUpsells) == null ? void 0 : s.upsells.find((me) => me.id === ie.id);
      re != null && re.priceAdjustment && (pe == null ? void 0 : pe.discountType) === "specific" && (ke.sellingPlan = { id: re.id, priceAdjustment: re.priceAdjustment });
      const ge = { id: ie.variant.id, quantity: ie.quantity, properties: { __kaching_bundles: JSON.stringify(ke) } };
      Fi(ge, Q, ie.product, H), re && (ge.selling_plan = re.id), W.push(ge);
    }
    for (const ie of C) {
      const ke = { ...se, upsell: ie.id };
      delete ke.bar;
      const re = ie.sellingPlan;
      re != null && re.priceAdjustment && ((c = (o = I == null ? void 0 : I.upsells) == null ? void 0 : o.find((ge) => ge.id === ie.id)) == null ? void 0 : c.discountType) === "specific" && (ke.sellingPlan = { id: re.id, priceAdjustment: re.priceAdjustment });
      const pe = { id: ie.variant.id, quantity: ie.quantity, properties: { __kaching_bundles: JSON.stringify(ke) } };
      Fi(pe, Q, ie.product, H), re && (pe.selling_plan = re.id), W.push(pe);
    }
    const J = [];
    for (const { variant: ie, quantity: ke } of oe) for (let re = 0; re < ke; re++) J.push(ie.id);
    for (const ie of V) {
      const ke = { ...se, personalisation: ie.id };
      delete ke.bar;
      const re = { id: ie.variantId, quantity: 1, properties: { __kaching_bundles: JSON.stringify(ke), [ie.valueLabel]: ie.text } }, pe = (l = ie.parentVariantId) != null ? l : J[ie.productIndex];
      pe && !n.disableNestedCartLines && (re.parent_id = pe), W.push(re);
    }
    const F = W.filter((ie) => !ie.parent_id), ae = W.filter((ie) => ie.parent_id);
    return [...F.reverse(), ...ae];
  }
  function bg(n, t) {
    return t.includes(n.id) || n.isNativeBundle === !0;
  }
  function Fi(n, t, r, a) {
    t && t !== n.id && (bg(r, a) || (n.parent_id = t));
  }
  function fg(n) {
    switch (n.dealBarType) {
      case void 0:
      case ft.QuantityBreak:
        return Number(n.quantity);
      case ft.Bxgy:
        return Number(n.buyQuantity) + Number(n.getQuantity);
      case ft.Bundle:
        return n.bundleProducts[0].quantity;
      case ft.MixAndMatch:
      case ft.Sku:
        return 1;
    }
  }
  function vg(n) {
    switch (n.dealBarType) {
      case void 0:
      case ft.QuantityBreak:
        return n.discountType === "specific";
      case ft.Bundle:
        return n.bundleProducts[0].discountType === "specific";
      case ft.Bxgy:
        return n.buyDiscountType === "specific";
      case ft.MixAndMatch:
        return n.discountType === "specific";
      case ft.Sku:
        return !1;
    }
  }
  function _g(n, t) {
    const r = [...n].sort((c, l) => c.variant.price - l.variant.price), a = [], s = [];
    let o = t;
    for (const c of r) {
      const l = Math.min(o, c.quantity), i = c.quantity - l;
      l > 0 && s.push({ ...c, quantity: l }), i > 0 && a.push({ ...c, quantity: i }), o -= l;
    }
    return { buy: a, get: s };
  }
  function jk(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  var Ek = $('<img class="kaching-bundles__bar-image" alt=""/>'), Rk = $('<div class="kaching-bundles__bar-radio"></div>'), Nk = $('<span class="kaching-bundles__bar-title"><!></span>'), Qk = $('<span class="kaching-bundles__bar-label"><!></span>'), Wk = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), Uk = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Hk = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <div class="kaching-bundles__bar-second-line"><!> <!></div></div> <div class="kaching-bundles__bar-pricing"><!> <!></div></div>', 1), Zk = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), Jk = $('<div class="kaching-bundles__bar-variants"><!> <div class="kaching-bundles__bar-variant-selector-wrapper"><!> <!></div></div>'), Yk = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), Kk = $('<div><input type="radio"/> <!> <!></div>');
  function kg(n, t) {
    tt(t, !0);
    const r = () => Ve(A, "$formatPrice", s), a = () => Ve(D, "$translate", s), [s, o] = mt();
    let c = _(t, "dealBlock", 7), l = _(t, "dealBar", 7), i = _(t, "otherProducts", 23, () => []), u = _(t, "complementaryProducts", 23, () => []), h = _(t, "selectedDealBarIndex", 7, null), b = _(t, "componentId", 7), g = _(t, "selected", 7, !1), f = _(t, "globalSellingPlan", 7, void 0), k = _(t, "onProgressiveGiftsChange", 7), x = _(t, "onDealBarSelect", 7), m = _(t, "onDealBarDeselect", 7), M = _(t, "onVariantsChange", 7), C = _(t, "onPersonalisationsChange", 7), V = _(t, "personalisationInitialValues", 23, () => []);
    const D = zt(), A = pn(), H = On();
    let ee = Ge(gt([])), I = Ge(gt([])), Z = Ge(gt([])), B = !1;
    const E = d(() => l().productGID ? i().find((R) => R.id === Kt(l().productGID)) : void 0);
    let ue = Ge(void 0);
    const z = d(() => (function(R, xe, Ie) {
      if (R !== void 0 && Ie && Ie.variants.some((be) => be.id === R))
        return R;
      if (xe.variantGID) return Kt(xe.variantGID);
      if (Ie && Ie.variants.length > 0) return Ie.variants[0].id;
    })(e(ue), l(), e(E))), N = d(() => e(z) && e(E) ? e(E).variants.find((R) => R.id === e(z)) : void 0), S = d(() => e(N) ? [{ variant: e(N), quantity: 1 }] : []);
    let P = Ge(void 0);
    const L = d(() => e(E) && e(N) ? bl(e(E), [e(N)]) : []), j = d(() => {
      var R, xe;
      return (l().sellingPlanEnabled || c().subscriptionsEnabled && ((R = c().subscriptions) == null ? void 0 : R.layout) === "link" && ((xe = c().subscriptions) == null ? void 0 : xe.subscribeByDefault)) && (!c().subscriptionsEnabled || !!f());
    }), Y = d(() => e(j) ? vo(l(), e(L), e(P)) : void 0), de = d(() => {
      var R;
      return (R = e(Y)) != null ? R : e(E) && e(N) ? rr(e(E), e(N), f()) : void 0;
    }), T = d(() => e(N) ? pl(e(N), e(de)) : 0), q = d(() => e(N) ? (function(R, xe) {
      return R.useProductCompareAtPrice && xe.compareAtPrice ? Math.max(xe.price, xe.compareAtPrice) : xe.price;
    })(c(), e(N)) : 0), se = d(() => _l(e(q), e(ee), e(I))), le = d(() => e(se) > e(T)), W = d(() => bn({ priceFormatter: r(), product: e(E), dealBar: l(), totalFullPrice: e(q), totalCompareAtPrice: e(se), totalDiscountedPrice: e(T), quantity: 1, unitQuantity: Sr(e(S)), sellingPlan: e(de) })), oe = d(() => e(W)(a()(l().title))), K = d(() => e(W)(a()(l().subtitle))), Q = d(() => e(W)(a()(l().label))), U = d(() => fl(c(), l()).map((R) => $a(R, a(), e(W)))), X = d(() => Da(e(U))), ne = d(() => `${l().id}_${b()}`), J = d(() => Ve(H, "$getMediaImageUrl", s)(l().mediaImageGID) || kl), F = mn(), ae = d(() => e(E) && e(E).variants.length > 1 && !l().variantGID && g()), ie = d(() => e(E) && Ve(F, "$config", s).featureFlags.variant_images && new Set(e(E).variants.map((R) => R.image).filter((R) => R)).size > 1), ke = d(() => l().showAsSoldOutEnabled && l().showAsSoldOut ? xl(l().showAsSoldOut) : "");
    function re(R) {
      g() && (R.preventDefault(), R.stopPropagation(), m()());
    }
    function pe(R) {
      te(ue, R, !0);
    }
    Ye(() => {
      !g() || !e(N) && e(E) || (e(ee), e(Z), e(I), e(z), e(de), en(() => {
        B || (B = !0, x()({ dealBarId: l().id, preselected: !0 })), (function() {
          const R = e(T) + e(Z).reduce((De, Me) => De + Me.discountedPrice, 0), xe = e(ee).reduce((De, Me) => Me.showPrice ? De + Me.fullPrice : De, 0) + e(I).reduce((De, Me) => De + Me.fullPrice * Me.quantity, 0), Ie = e(q) + e(Z).reduce((De, Me) => De + Me.fullPrice, 0) + xe, be = e(N) ? e(N).price : 0, ye = e(N) ? e(N).sellingPlans.map((De) => ({ sellingPlanId: De.id, discountedPrice: De.price })) : [], qe = { discountedPrice: R, fullPrice: Ie, giftValue: xe, discountedPricePerItem: e(T), fullPricePerItem: e(q), discountedPriceWithoutSellingPlan: be, discountedPricesForSellingPlans: ye };
          M()({ variants: e(S), freeGifts: [...e(ee), ...e(I)], upsells: e(Z), dealBarSellingPlan: e(Y), pricing: qe, product: e(E) });
        })();
      }));
    });
    var ge = { get dealBlock() {
      return c();
    }, set dealBlock(R) {
      c(R), v();
    }, get dealBar() {
      return l();
    }, set dealBar(R) {
      l(R), v();
    }, get otherProducts() {
      return i();
    }, set otherProducts(R = []) {
      i(R), v();
    }, get complementaryProducts() {
      return u();
    }, set complementaryProducts(R = []) {
      u(R), v();
    }, get selectedDealBarIndex() {
      return h();
    }, set selectedDealBarIndex(R = null) {
      h(R), v();
    }, get componentId() {
      return b();
    }, set componentId(R) {
      b(R), v();
    }, get selected() {
      return g();
    }, set selected(R = !1) {
      g(R), v();
    }, get globalSellingPlan() {
      return f();
    }, set globalSellingPlan(R = void 0) {
      f(R), v();
    }, get onProgressiveGiftsChange() {
      return k();
    }, set onProgressiveGiftsChange(R) {
      k(R), v();
    }, get onDealBarSelect() {
      return x();
    }, set onDealBarSelect(R) {
      x(R), v();
    }, get onDealBarDeselect() {
      return m();
    }, set onDealBarDeselect(R) {
      m(R), v();
    }, get onVariantsChange() {
      return M();
    }, set onVariantsChange(R) {
      M(R), v();
    }, get onPersonalisationsChange() {
      return C();
    }, set onPersonalisationsChange(R) {
      C(R), v();
    }, get personalisationInitialValues() {
      return V();
    }, set personalisationInitialValues(R = []) {
      V(R), v();
    } }, me = Kk();
    let ce;
    var fe = w(me);
    da(fe), fe.__change = [jk, x, l];
    var Fe = O(fe, 2);
    ai(Fe, { get for() {
      return e(ne);
    }, get soldOut() {
      return l().showAsSoldOutEnabled;
    }, get borderHost() {
      return e(X);
    }, children: (R, xe) => {
      var Ie = Yk(), be = ve(Ie);
      At(be, 17, () => e(U), (Pe) => Pe.id, (Pe, He) => {
        ba(Pe, { get badge() {
          return e(He);
        }, get blockLayout() {
          return c().blockLayout;
        } });
      });
      var ye = O(be, 2), qe = w(ye);
      Xt(qe, { element: "div", class: "kaching-bundles__bar-main", onclick: re, children: (Pe, He) => {
        var ht = Hk(), ut = ve(ht), st = (at) => {
          var it = Ek();
          _e(() => Be(it, "src", e(J))), p(at, it);
        }, rt = (at) => {
          p(at, Rk());
        };
        G(ut, (at) => {
          l().mediaImageGID ? at(st) : at(rt, !1);
        });
        var et = O(ut, 2), Dt = w(et), we = w(Dt), Xe = w(we);
        lt(Xe, () => e(oe), (at) => {
          var it = Nk();
          Le(w(it), () => e(oe)), y(it), p(at, it);
        });
        var Ee = O(Xe, 2), Je = (at) => {
          var it = ze();
          lt(ve(it), () => e(Q), (Ct) => {
            var It = Qk();
            Le(w(It), () => e(Q)), y(It), p(Ct, It);
          }), p(at, it);
        };
        G(Ee, (at) => {
          e(Q) && at(Je);
        }), y(we);
        var vt = O(we, 2), ct = w(vt), $t = (at) => {
          var it = ze();
          lt(ve(it), () => e(K), (Ct) => {
            var It = Wk();
            Le(w(It), () => e(K)), y(It), p(Ct, It);
          }), p(at, it);
        };
        G(ct, (at) => {
          e(K) && at($t);
        });
        var rn = O(ct, 2), Ft = (at) => {
          va(at, { get dealBlock() {
            return c();
          }, get variant() {
            return e(N);
          } });
        };
        G(rn, (at) => {
          e(ae) || at(Ft);
        }), y(vt), y(Dt);
        var Bt = O(Dt, 2), Ut = w(Bt);
        lt(Ut, () => e(T), (at) => {
          Yr(at, { get amount() {
            return e(T);
          }, get showPricesPerItem() {
            return c().showPricesPerItem;
          }, get unitLabel() {
            return c().unitLabel;
          } });
        });
        var Lt = O(Ut, 2), dt = (at) => {
          var it = ze();
          lt(ve(it), () => e(se), (Ct) => {
            var It = Uk();
            Le(w(It), () => r()(e(se))), y(It), _e((ln) => Be(It, "data-a11y-label", ln), [() => a()("system.original_price")]), p(Ct, It);
          }), p(at, it);
        };
        G(Lt, (at) => {
          e(le) && at(dt);
        }), y(Bt), y(et), p(Pe, ht);
      }, $$slots: { default: !0 } });
      var De = O(qe, 2), Me = (Pe) => {
        Va(Pe, { get highlights() {
          return l().highlights;
        }, get isSelected() {
          return g();
        }, get replaceLiquid() {
          return e(W);
        } });
      };
      G(De, (Pe) => {
        l().highlights && Pe(Me);
      });
      var Ae = O(De, 2), Oe = (Pe) => {
        var He = Zk(), ht = w(He);
        {
          let ut = d(() => e(Y) || e(L)[0]);
          Ta(ht, { get sellingPlans() {
            return e(L);
          }, get selectedSellingPlan() {
            return e(ut);
          }, onChange: (st) => {
            te(P, st, !0);
          } });
        }
        y(He), p(Pe, He);
      };
      G(Ae, (Pe) => {
        g() && e(j) && !l().sellingPlanGid && e(L).length > 1 && Pe(Oe);
      });
      var je = O(Ae, 2), Ke = (Pe) => {
        var He = Jk(), ht = w(He);
        ha(ht, { get product() {
          return e(E);
        } });
        var ut = O(ht, 2), st = w(ut);
        {
          let rt = d(() => e(z) || 0);
          Hn(st, { get product() {
            return e(E);
          }, get selectedVariantId() {
            return e(rt);
          }, get showImage() {
            return e(ie);
          }, onChange: pe });
        }
        va(O(st, 2), { get dealBlock() {
          return c();
        }, get variant() {
          return e(N);
        } }), y(ut), y(He), p(Pe, He);
      };
      G(je, (Pe) => {
        e(ae) && e(E) && Pe(Ke);
      });
      var Ue = O(je, 2), ot = (Pe) => {
        {
          let He = d(() => [e(z)]);
          ii(Pe, { get productPersonalisation() {
            return l().productPersonalisation;
          }, get product() {
            return e(E);
          }, get selectedVariantIds() {
            return e(He);
          }, quantity: 1, get addPersonalisationModal() {
            return c().addPersonalisationModal;
          }, get onPersonalisationsChange() {
            return C();
          }, get initialValues() {
            return V();
          } });
        }
      };
      G(Ue, (Pe) => {
        g() && l().productPersonalisation && e(E) && e(z) && (c().blockLayout === "vertical" || c().blockLayout === "plain") && Pe(ot);
      }), y(ye);
      var Wt = O(ye, 2);
      {
        let Pe = d(() => l().upsells || []);
        Ai(Wt, { get dealBlock() {
          return c();
        }, get dealBarId() {
          return l().id;
        }, get upsells() {
          return e(Pe);
        }, get otherProducts() {
          return i();
        }, get complementaryProducts() {
          return u();
        }, get dealBarSelected() {
          return g();
        }, get dealSellingPlan() {
          return e(de);
        }, onChange: (He) => {
          te(Z, He, !0);
        } });
      }
      var bt = O(Wt, 2);
      Oi(bt, { get selectedDealBarIndex() {
        return h();
      }, get onChange() {
        return k();
      }, get dealBlock() {
        return c();
      }, get dealBar() {
        return l();
      }, get selected() {
        return g();
      }, get otherProducts() {
        return i();
      }, get sellingPlan() {
        return e(de);
      }, get progressiveGifts() {
        return c().progressiveGifts;
      } });
      var qt = O(bt, 2);
      {
        let Pe = d(() => l().freeGifts || []);
        Vi(qt, { get dealBlock() {
          return c();
        }, get freeGifts() {
          return e(Pe);
        }, get freeGiftsSummary() {
          return l().freeGiftsSummary;
        }, get otherProducts() {
          return i();
        }, get dealBarSelected() {
          return g();
        }, get sellingPlan() {
          return e(de);
        }, onChange: (He) => {
          te(ee, He, !0);
        } });
      }
      var nn = O(qt, 2);
      {
        let Pe = d(() => l().multipleGiftsSelectors || []);
        Gi(nn, { get dealBlock() {
          return c();
        }, get multipleGiftsSelectors() {
          return e(Pe);
        }, get sellingPlan() {
          return e(de);
        }, get otherProducts() {
          return i();
        }, onChange: (He) => {
          te(I, He, !0);
        } });
      }
      p(R, Ie);
    }, $$slots: { default: !0 } });
    var $e = O(Fe, 2), Ce = (R) => {
      qi(R, { get showAsSoldOut() {
        return l().showAsSoldOut;
      }, get replaceLiquid() {
        return e(W);
      } });
    };
    G($e, (R) => {
      l().showAsSoldOutEnabled && l().showAsSoldOut && R(Ce);
    }), y(me), _e((R) => {
      var xe;
      ce = Nt(me, 1, "kaching-bundles__bar", null, ce, R), Be(me, "data-deal-bar-id", l().id), Ot(me, e(ke)), Be(fe, "name", `kaching-bundles-deal-${(xe = b()) != null ? xe : ""}`), Ka(fe, l().id), Be(fe, "id", e(ne)), cl(fe, g()), fe.disabled = l().showAsSoldOutEnabled;
    }, [() => ({ "kaching-bundles__bar--selected": g() })]), p(n, me);
    var Te = nt(ge);
    return o(), Te;
  }
  Gn(["change"]), Ze(kg, { dealBlock: {}, dealBar: {}, otherProducts: {}, complementaryProducts: {}, selectedDealBarIndex: {}, componentId: {}, selected: {}, globalSellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var Xk = $('<div class="kaching-bundles__collection-breaks-alert"><svg class="kaching-bundles__collection-breaks-alert__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 5.33325V7.99992M8.00065 10.6666H8.00732M14.6673 7.99992C14.6673 11.6818 11.6825 14.6666 8.00065 14.6666C4.31875 14.6666 1.33398 11.6818 1.33398 7.99992C1.33398 4.31802 4.31875 1.33325 8.00065 1.33325C11.6825 1.33325 14.6673 4.31802 14.6673 7.99992Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div>');
  function mg(n, t) {
    tt(t, !0);
    const r = () => Ve(u, "$config", a), [a, s] = mt();
    let o = _(t, "alertText", 7), c = _(t, "enabled", 7), l = _(t, "hasItemsToSelect", 7);
    const i = zt(), u = mn(), h = d(() => r().preview && r().previewAlerts || Ve($o, "$requireSelectionError", a)), b = d(() => e(h) && c() && o() && l());
    var g = { get alertText() {
      return o();
    }, set alertText(M) {
      o(M), v();
    }, get enabled() {
      return c();
    }, set enabled(M) {
      c(M), v();
    }, get hasItemsToSelect() {
      return l();
    }, set hasItemsToSelect(M) {
      l(M), v();
    } }, f = ze(), k = ve(f), x = (M) => {
      var C = Xk(), V = O(w(C));
      y(C), _e((D) => kt(V, ` ${D != null ? D : ""}`), [() => Ve(i, "$translate", a)(o())]), p(M, C);
    };
    G(k, (M) => {
      e(b) && o() && M(x);
    }), p(n, f);
    var m = nt(g);
    return s(), m;
  }
  Ze(mg, { alertText: {}, enabled: {}, hasItemsToSelect: {} }, [], [], !0);
  var em = $('<span class="kaching-bundles-savings-summary__icon"><img alt=""/></span>'), tm = $('<span class="kaching-bundles-savings-summary__icon"><!></span>'), nm = $('<div class="kaching-bundles-savings-summary"><!> <span class="kaching-bundles-savings-summary__title"><!></span></div>');
  function xg(n, t) {
    tt(t, !0);
    const [r, a] = mt(), s = _(t, "savingsSummary", 7), o = _(t, "totalFullPrice", 7), c = _(t, "totalDiscountedPrice", 7), l = _(t, "quantity", 7), i = _(t, "product", 7), u = pn(), h = zt(), b = On(), g = d(() => ((B) => _n({ "kaching-bundles-savings-summary-background-color": We(B.backgroundColor), "kaching-bundles-savings-summary-text-color": We(B.textColor), "kaching-bundles-savings-summary-value-color": We(B.valueColor), "kaching-bundles-savings-summary-icon-color": We(B.iconColor), "kaching-bundles-savings-summary-border-color": We(B.borderColor), "kaching-bundles-savings-summary-alignment": { start: "flex-start", center: "center", end: "flex-end" }[B.titleAlignment], "kaching-bundles-savings-summary-border-width": B.borderWidth + "px", "kaching-bundles-savings-summary-border-radius": B.borderRadius + "px", "kaching-bundles-savings-summary-title-font-size": B.titleFont.size + "px", "kaching-bundles-savings-summary-title-font-style": fr(B.titleFont.style), "kaching-bundles-savings-summary-title-font-weight": br(B.titleFont.style) }))(s())), f = d(() => s().iconType), k = d(() => Ed[e(f)]), x = d(() => e(f) === "custom" ? Ve(b, "$getMediaImageUrl", r)(s().customIconGID) : void 0), m = d(() => bn({ priceFormatter: Ve(u, "$formatPrice", r), product: i(), totalFullPrice: o(), totalDiscountedPrice: c(), quantity: l(), unitQuantity: null })), M = d(() => ((B) => B.replace(nd, '<span class="kaching-bundles-savings-summary__value">$&</span>'))(Ve(h, "$translate", r)(s().title))), C = d(() => e(m)(e(M)));
    var V = { get savingsSummary() {
      return s();
    }, set savingsSummary(B) {
      s(B), v();
    }, get totalFullPrice() {
      return o();
    }, set totalFullPrice(B) {
      o(B), v();
    }, get totalDiscountedPrice() {
      return c();
    }, set totalDiscountedPrice(B) {
      c(B), v();
    }, get quantity() {
      return l();
    }, set quantity(B) {
      l(B), v();
    }, get product() {
      return i();
    }, set product(B) {
      i(B), v();
    } }, D = nm(), A = w(D), H = (B) => {
      var E = em(), ue = w(E);
      y(E), _e(() => Be(ue, "src", e(x))), p(B, E);
    }, ee = (B) => {
      var E = ze(), ue = ve(E), z = (N) => {
        var S = tm();
        tu(w(S), () => e(k), (P, L) => {
          L(P, {});
        }), y(S), p(N, S);
      };
      G(ue, (N) => {
        e(k) && N(z);
      }, !0), p(B, E);
    };
    G(A, (B) => {
      e(f) === "custom" && e(x) ? B(H) : B(ee, !1);
    });
    var I = O(A, 2);
    Le(w(I), () => e(C)), y(I), y(D), _e(() => Ot(D, e(g))), p(n, D);
    var Z = nt(V);
    return a(), Z;
  }
  Ze(xg, { savingsSummary: {}, totalFullPrice: {}, totalDiscountedPrice: {}, quantity: {}, product: {} }, [], [], !0);
  var rm = $('<div class="kaching-bundles__block-title"><!></div>'), am = $("<!> <!>", 1), im = $('<div class="kaching-bundles__out-of-stock"><!></div>'), lm = $('<div class="kaching-bundles"><div><!> <!> <div><!> <!> <!> <!></div> <!> <!> <!> <!> <!> <!> <!></div></div> <!>', 1);
  function yg(n, t) {
    var r, a, s, o, c, l;
    tt(t, !0);
    const i = () => Ve(Y, "$formatPrice", h), u = () => Ve(T, "$translate", h), [h, b] = mt();
    let g = _(t, "component", 7), f = _(t, "config", 7), k = _(t, "translations", 23, () => ({})), x = _(t, "dealBlock", 7), m = _(t, "product", 7), M = _(t, "currentVariantId", 7), C = _(t, "currentVariantSource", 7, void 0), V = _(t, "sellingPlanId", 15), D = _(t, "selectedDealBarId", 15), A = _(t, "quantity", 15), H = _(t, "mediaImages", 23, () => []), ee = _(t, "otherProducts", 23, () => []), I = _(t, "collectionBreaksProducts", 23, () => []), Z = _(t, "complementaryProducts", 23, () => []), B = _(t, "nativeBundleProductIds", 23, () => []), E = _(t, "compact", 7, !1), ue = _(t, "variantBadges", 23, () => []);
    const z = d(() => hr(x(), f().brandColors)), N = d(() => e(z).hideUnavailableOptions ? Pr(m()) : m()), S = d(() => e(z).hideUnavailableOptions ? ee().map(Pr) : ee()), P = d(() => e(z).hideUnavailableOptions ? Z().map(Pr) : Z()), L = d(() => e(z).hideUnavailableOptions ? I().map(Pr) : I()), { setConfig: j } = ri(f()), { formatPrice: Y, setMoneyFormat: de } = Di(f().moneyFormat, (r = e(z)) == null ? void 0 : r.showPricesWithoutDecimals), { translate: T, setTranslations: q } = ni(k()), { setMediaImages: se } = hl(H()), { setVariantBadges: le } = Cd(ue()), { setSwatchSettings: W } = ul({ swatchOptions: ((a = e(z)) == null ? void 0 : a.swatchOptions) || [], swatchSize: (s = e(z)) == null ? void 0 : s.swatchSize, swatchShape: (o = e(z)) == null ? void 0 : o.swatchShape, showSelectedSwatchName: (l = (c = e(z)) == null ? void 0 : c.showSelectedSwatchName) != null && l });
    let oe = Ge(gt(Math.random()));
    function K() {
      const he = e(Ce).requiresItemSelection && !e(Ce).allItemsSelected;
      return { dealBlock: e(z), product: e(Xe), pageProductId: m().id, selectedDealBarId: D(), selectedVariantQuantities: e(ne), selectedBundleProducts: e(J), selectedCollectionBreaksProducts: e(F), selectedFreeGifts: e(ae), selectedProgressiveGifts: he ? [] : e(ie), selectedCheckboxUpsells: he ? [] : e(ke), selectedUpsells: e(re), selectedPersonalisations: he ? [] : e(ge), selectedSellingPlan: e(Je), dealBarSellingPlan: e(ce), nativeBundleProductIds: B(), bundleNonce: e(oe), splitBxgy: f().featureFlags.split_bxgy_items, disableNestedCartLines: f().featureFlags.disable_nested_cart_lines };
    }
    function Q() {
      return pg(K());
    }
    Ya(() => {
      wr(g(), "kaching-bundles-block-loaded", { component: g() }, !1);
    }), Ye(() => {
      j(f());
    }), Ye(() => {
      de(f().moneyFormat, !!e(z).showPricesWithoutDecimals);
    }), Ye(() => {
      q(k());
    }), Ye(() => {
      se(H());
    }), Ye(() => {
      le(ue());
    }), Ye(() => {
      var he;
      W({ swatchOptions: e(z).swatchOptions || [], swatchSize: e(z).swatchSize, swatchShape: e(z).swatchShape, showSelectedSwatchName: (he = e(z).showSelectedSwatchName) != null && he });
    });
    let U = 0;
    Ye(() => {
      U === 0 && B().length > 0 && we({ pricing: e(Te) }), U = B().length;
    });
    let X = Math.random().toString(16).slice(2), ne = Ge(gt([])), J = Ge(gt([])), F = Ge(gt([])), ae = Ge(gt([])), ie = Ge(gt([])), ke = Ge(gt([])), re = Ge(gt([])), pe = Ge(gt([])), ge = Ge(gt([])), me = new Io(), ce = Ge(void 0), fe = Ge(gt({ discountedPrice: 0, fullPrice: 0, discountedPriceWithoutSellingPlan: 0, discountedPricesForSellingPlans: [] })), Fe = Ge(void 0), $e = Ge(!1), Ce = Ge(gt({ requiresItemSelection: !1, allItemsSelected: !0, missingItemsCount: 0, alertText: null })), Te = Ge(gt({ discountedPrice: 0, fullPrice: 0, giftValue: 0, discountedPricePerItem: 0, fullPricePerItem: 0, discountedPriceWithoutSellingPlan: 0, discountedPricesForSellingPlans: [] }));
    Ye(() => {
      M() && !D() && (e(Je), en(() => {
        (function() {
          te(Ce, { requiresItemSelection: !1, allItemsSelected: !0, missingItemsCount: 0, alertText: null }, !0);
          const he = m().variants.find((Re) => Re.id === M());
          if (!he) return;
          te(ne, [{ variant: he, quantity: 1 }], !0);
          let Qe = he.price;
          if (e(Je)) {
            const Re = he.sellingPlans.find((Ne) => Ne.id === e(Je).id);
            Re && (Qe = Re.price);
          }
          const xt = he.compareAtPrice && he.compareAtPrice > he.price ? he.compareAtPrice : he.price, Vt = m().sellingPlans.map((Re) => ({ sellingPlanId: Re.id, discountedPrice: pl(he, Re) }));
          te(Te, { discountedPrice: Qe, fullPrice: xt, giftValue: 0, discountedPricePerItem: Qe, fullPricePerItem: xt, discountedPriceWithoutSellingPlan: he.price, discountedPricesForSellingPlans: Vt }, !0), we({ pricing: e(Te) });
        })();
      }));
    });
    let R = d(() => Lu(e(z))), xe = d(() => u()(e(z).blockTitle));
    const Ie = d(() => e(Mt) ? bn({ priceFormatter: i(), product: e(N), selectedVariants: e(ne), totalFullPrice: e(Te).fullPrice, totalDiscountedPrice: e(Te).discountedPrice, quantity: A() || Ae(e(Mt)), dealBar: e(Mt), legacySavedPercentage: f().featureFlags.legacy_saved_percentage || !1, unitQuantity: null, sellingPlan: e(Je) }) : bp), be = d(() => ((he) => ab(he, "block"))(e(z)).map((he) => $a(he, u(), e(Ie)))), ye = d(() => Da(e(be))), qe = d(() => {
      var he;
      const Qe = e(be).find((xt) => xt.badgeType === "border" && (xt.position === "left" || xt.position === "right"));
      if ((he = Qe == null ? void 0 : Qe.colors) != null && he.background) return We({ ...Qe.colors.background, alpha: 0.15 });
    }), De = e(z).preselectedDealBarId ? e(z).dealBars.find((he) => he.id === e(z).preselectedDealBarId) : void 0;
    function Me(he) {
      return !he.dealBarType || he.dealBarType === ft.QuantityBreak || he.dealBarType === ft.Bxgy;
    }
    function Ae(he) {
      switch (he.dealBarType) {
        case void 0:
        case ft.QuantityBreak:
          return Number(he.quantity);
        case ft.Bxgy:
          return Number(he.buyQuantity) + Number(he.getQuantity);
        case ft.Bundle:
          return he.bundleProducts[0].quantity;
        case ft.MixAndMatch:
        case ft.Sku:
          return 1;
      }
    }
    function Oe(he) {
      var Qe, xt;
      D() !== he && (D() && me.set(D(), e(ge)), te(ge, (Qe = me.get(he)) != null ? Qe : [], !0), ((xt = e(z).progressiveGifts) == null ? void 0 : xt.layout) === "deal-bar" && te(ie, [], !0)), D(he);
    }
    function je(he) {
      const { dealBarId: Qe, dealBarQuantity: xt, preselected: Vt } = he;
      Oe(Qe), fa(!1), te(Ce, { requiresItemSelection: !1, allItemsSelected: !0, missingItemsCount: 0, alertText: null }, !0), f().keepQuantityInput && xt && A(xt), wr(g(), "deal-bar-selected", { dealBarId: Qe, preselected: Vt });
    }
    function Ke(he) {
      const Qe = e(z).dealBars[he];
      Qe && Oe(Qe.id);
    }
    function Ue() {
      f().ignoreDeselect || (D(void 0), te(ae, [], !0), te(ie, [], !0), te(re, [], !0), te(J, [], !0), te(F, [], !0), te(pe, [], !0), te(ge, [], !0), me.clear(), te(ce, void 0), fa(!1), te(Ce, { requiresItemSelection: !1, allItemsSelected: !0, missingItemsCount: 0, alertText: null }, !0), wr(g(), "deal-bar-selected", { dealBarId: null, preselected: !1 }));
    }
    function ot(he) {
      const { variantId: Qe } = he;
      wr(g(), "variant-selected", { variantId: Qe });
    }
    function Wt(he) {
      const { bundleProducts: Qe, freeGifts: xt, upsells: Vt, pricing: Re, validation: Ne } = he;
      te(Ce, { ...Ne, alertText: Ne.requiresItemSelection ? "system.select_variant_alert" : null }, !0);
      const Jt = Ne.requiresItemSelection && !Ne.allItemsSelected, Vn = Qe[0].variantSelectionPending ? [] : [{ variant: Qe[0].variant, quantity: Qe[0].quantity }];
      te(ne, Vn, !0), te(J, Qe.slice(1).filter((vn) => !vn.variantSelectionPending), !0), te(ae, Jt ? [] : xt, !0), te(re, Jt ? [] : Vt, !0), te(F, [], !0), te(pe, [], !0), te(ce, void 0), te(Fe, void 0), te(Te, Re, !0), te($e, Dt(e(ne)), !0), we({ pricing: Re });
    }
    function bt(he) {
      var Qe, xt;
      const { variants: Vt, freeGifts: Re, upsells: Ne, pricing: Jt, validation: Vn } = he;
      te(Ce, { ...Vn, alertText: ((xt = (Qe = e(z).collectionBreaks) == null ? void 0 : Qe.requireItemSelectionAlert) == null ? void 0 : xt.text) || null }, !0), te(pe, he.personalisationItems, !0);
      const vn = [{ variant: Vt[0].variant, quantity: Vt[0].quantity }], Pn = Vt.slice(1);
      te(ne, vn, !0), te(ae, Re, !0), te(re, Ne, !0), te(J, [], !0), te(F, Pn, !0), te(ce, he.dealBarSellingPlan, !0), te(Fe, void 0), te(Te, Jt, !0), te($e, Dt(e(ne)), !0), we({ pricing: Jt });
    }
    function qt(he) {
      const { variants: Qe, freeGifts: xt, upsells: Vt, pricing: Re, validation: Ne } = he;
      te(Ce, { ...Ne, alertText: Ne.requiresItemSelection ? "system.select_variant_alert" : null }, !0);
      const Jt = Ne.requiresItemSelection && !Ne.allItemsSelected;
      te(ne, Qe, !0), te(ae, Jt ? [] : xt, !0), te(re, Jt ? [] : Vt, !0), te(J, [], !0), te(F, [], !0), te(pe, [], !0), te(ce, he.dealBarSellingPlan, !0), te(Fe, void 0), te(Te, Re, !0), te($e, Dt(e(ne)), !0), we({ pricing: Re });
    }
    function nn(he) {
      var Qe;
      const { variants: xt, freeGifts: Vt, upsells: Re, pricing: Ne, product: Jt } = he;
      te(Ce, { requiresItemSelection: !1, allItemsSelected: !0, missingItemsCount: 0, alertText: null }, !0), te(ne, xt, !0), te(ae, Vt, !0), te(re, Re, !0), te(J, [], !0), te(F, [], !0), te(pe, [], !0), te(ce, he.dealBarSellingPlan, !0), ((Qe = e(Fe)) == null ? void 0 : Qe.id) !== (Jt == null ? void 0 : Jt.id) && te(Fe, Jt, !0), te(Te, Ne, !0), te($e, Dt(e(ne)), !0), we({ pricing: Ne });
    }
    function Pe(he) {
      V(he == null ? void 0 : he.id);
    }
    De != null && De.hideBehindScratchOff && e(z).scratchOffEnabled && (f().preview ? f().previewScratchOff : m().availableForSale) || D(D() || e(z).preselectedDealBarId || void 0), Ye(() => {
      A() && e(z) && en(() => {
        if (!D()) return;
        const he = e(z).dealBars.find((Qe) => Qe.id === D());
        he && Me(he) && Ae(he) !== A() && (function(Qe, xt) {
          if (!D()) return;
          const Vt = Qe.dealBars.slice().sort((Ne, Jt) => Ae(Ne) - Ae(Jt));
          let Re = Vt[0];
          for (const Ne of Vt) if (Me(Ne)) {
            if (Ae(Ne) > xt) break;
            Re = Ne;
          }
          Re.id !== D() && (Oe(Re.id), wr(g(), "deal-bar-selected", { dealBarId: Re.id, preselected: !1 }));
        })(e(z), A());
      });
    });
    let He = Ge(void 0);
    function ht() {
      if (!e(Ut) || e(Ee).length === 0) return;
      const he = e(Ee).find((Qe) => Qe.id === e(He));
      Pe(he != null ? he : e(Ee)[0]);
    }
    function ut(he) {
      wr(g(), "add-to-cart-requested", { items: pg({ ...K(), selectedSellingPlan: he, dealBarSellingPlan: void 0 }) });
    }
    function st(he) {
      te(ie, he, !0), we({ pricing: e(Te) });
    }
    function rt(he, Qe) {
      te(ke, he, !0), te(fe, Qe, !0), we({ pricing: e(Te) });
    }
    function et(he) {
      te(ge, he, !0), we({ pricing: e(Te) });
    }
    function Dt(he) {
      return he.some(({ variant: Qe, quantity: xt }) => !!Qe && !!Qe.inventoryManagement && Qe.inventoryPolicy === "deny" && Qe.inventoryQuantity !== null && xt > Qe.inventoryQuantity);
    }
    function we({ pricing: he }) {
      const Qe = e(ne).map(({ variant: vn, quantity: Pn }) => ({ variantId: vn.id, quantity: Pn })), xt = e(ae).map(({ id: vn, variant: Pn, quantity: Yt }) => ({ id: vn, variantId: Pn.id, quantity: Yt })), Vt = e(re).map(({ id: vn, variant: Pn, quantity: Yt }) => ({ id: vn, variantId: Pn.id, quantity: Yt })), Re = e(J).map(({ id: vn, variant: Pn, quantity: Yt }) => ({ id: vn, variantId: Pn.id, quantity: Yt })), Ne = he.discountedPrice + e(fe).discountedPrice, Jt = he.fullPrice + e(fe).fullPrice, Vn = { discountedPrice: Ne, fullPrice: Jt, discountedPriceWithoutSellingPlan: he.discountedPriceWithoutSellingPlan + e(fe).discountedPriceWithoutSellingPlan, discountedPricesForSellingPlans: he.discountedPricesForSellingPlans.map((vn) => {
        var Pn, Yt;
        const Mn = (Yt = (Pn = e(fe).discountedPricesForSellingPlans.find((Kr) => Kr.sellingPlanId === vn.sellingPlanId)) == null ? void 0 : Pn.discountedPrice) != null ? Yt : e(fe).discountedPriceWithoutSellingPlan;
        return { sellingPlanId: vn.sellingPlanId, discountedPrice: vn.discountedPrice + Mn };
      }) };
      D() && e(Mt) ? li.set({ id: D(), dealBar: e(Mt), product: e(Xe), quantity: e(ne).reduce((vn, { quantity: Pn }) => vn + Pn, 0), pricing: Vn }) : li.set({ id: null, dealBar: null, product: e(Xe), quantity: 1, pricing: Vn }), wr(g(), "variants-changed", { variantIdQuantities: Qe, freeGifts: xt, upsells: Vt, bundleProducts: Re, pricing: { discountedPrice: { amount: Ne, formatted: i()(Ne) }, fullPrice: { amount: Jt, formatted: i()(Jt) }, discountedPricePerItem: { amount: he.discountedPricePerItem, formatted: i()(he.discountedPricePerItem) }, fullPricePerItem: { amount: he.fullPricePerItem, formatted: i()(he.fullPricePerItem) } }, formattedPrice: i()(he.discountedPrice), validation: e(Ce) }), wr(g(), "items-changed", {});
    }
    Ye(() => {
      V() && te(He, V(), !0);
    });
    const Xe = d(() => e(Fe) || m()), Ee = d(() => {
      const he = e(ne).map(({ variant: Qe }) => Qe);
      return e(Xe).sellingPlans.filter((Qe) => he.some((xt) => xt.sellingPlans.some((Vt) => Vt.id === Qe.id)));
    }), Je = d(() => e(Ee).find((he) => he.id === V())), vt = d(() => V() ? e(Xe).sellingPlans.find((he) => he.id === V()) : void 0), ct = d(() => _o(e(ce), e(vt), e(Ee), e(Xe).requiresSellingPlan)), $t = d(() => e(Te).giftValue + e(ie).reduce((he, Qe) => he + Qe.variants.reduce((xt, { variant: Vt, quantity: Re }) => xt + Vt.price * Re, 0), 0)), rn = d(() => {
      var he, Qe;
      return (Qe = (he = e(z).savingsSummary) == null ? void 0 : he.includeGiftValue) != null && Qe;
    }), Ft = d(() => ((he, Qe, xt, Vt) => {
      const Re = he.fullPrice - he.giftValue + Qe.fullPrice + (Vt ? xt : 0), Ne = he.discountedPrice + Qe.discountedPrice;
      return { fullPrice: Re, discountedPrice: Ne, saved: Re - Ne };
    })(e(Te), e(fe), e($t), e(rn))), Bt = d(() => {
      var he;
      return ((Qe, xt) => Qe + xt.reduce((Vt, { quantity: Re }) => Vt + Re, 0))(((he = Ve(li, "$selectedDealBarStore", h)) == null ? void 0 : he.quantity) || 1, e(ke));
    });
    let Ut = d(() => e(z).subscriptionsEnabled && e(z).subscriptions && (e(Ee).length > 0 || f().preview));
    const Lt = d(() => {
      if (!e(z).progressiveGifts || e(Ee).length > 0) return e(z);
      const he = e(z).progressiveGifts.gifts.filter((Qe) => !Qe.applyOnlyForSubscriptions);
      return he.length === e(z).progressiveGifts.gifts.length ? e(z) : { ...e(z), progressiveGifts: { ...e(z).progressiveGifts, gifts: he } };
    });
    let dt = d(() => {
      var he, Qe;
      return e(Ut) && ((he = e(z).subscriptions) == null ? void 0 : he.showPrices) && ((Qe = e(z).subscriptions) == null ? void 0 : Qe.hideDealBarPrices);
    }), at = d(() => D() ? e(z).dealBars.findIndex((he) => he.id === D()) : null);
    const it = d(() => e(z).scratchOffEnabled ? e(z).scratchOff : null), Ct = d(() => (e(z).blockLayout === "vertical" || e(z).blockLayout === "plain") && (f().preview || m().availableForSale)), It = d(() => e(z).dealBars.reduce((he, Qe) => {
      const xt = e(it) && e(Ct) && Qe.hideBehindScratchOff, Vt = he[he.length - 1];
      return xt && (Vt == null ? void 0 : Vt.type) === "scratch" ? Vt.bars.push(Qe) : xt ? he.push({ type: "scratch", key: Qe.id, bars: [Qe] }) : he.push({ type: "visible", key: Qe.id, bar: Qe }), he;
    }, [])), ln = d(() => [...e(ne), ...e(F)].reduce((he, { quantity: Qe }) => he + Qe, 0) || 1), Mt = d(() => D() ? e(z).dealBars.find((he) => he.id === D()) : void 0), Qt = d(() => {
      var he, Qe;
      return !!((he = e(Mt)) != null && he.sellingPlanEnabled) && !!((Qe = e(Mt)) != null && Qe.sellingPlanGid);
    }), pt = d(() => {
      var he;
      return ((he = e(Mt)) == null ? void 0 : he.productPersonalisation) && (e(z).blockLayout === "horizontal" || e(z).blockLayout === "grid");
    }), jt = d(() => !(!e(z).collectionBreaksEnabled || !e(z).collectionBreaks || !e(Mt) || e(Mt).dealBarType && e(Mt).dealBarType !== ft.QuantityBreak && e(Mt).dealBarType !== ft.Bxgy)), Tt = d(() => e(jt) ? e(pe) : void 0), Bn = d(() => e(Tt) ? e(Tt).length : e(Mt) ? e(Mt).dealBarType === void 0 || e(Mt).dealBarType === ft.QuantityBreak ? A() || Number(e(Mt).quantity) || 1 : e(Mt).dealBarType === ft.Bxgy ? A() || e(Mt).buyQuantity + e(Mt).getQuantity : e(Mt).dealBarType === ft.Bundle ? 1 : A() || 1 : A() || 1), Tn = d(() => e(ne).flatMap(({ variant: he, quantity: Qe }) => Array(Qe).fill(he.id))), xn = d(() => {
      if (e(ge).length === 0) return [];
      const he = e(ge).reduce((Vt, Re) => Math.max(Vt, Re.productIndex), -1), Qe = e(Tt) ? Math.min(he + 1, e(Tt).length) : he + 1, xt = Array.from({ length: Qe }, () => "");
      for (const Vt of e(ge)) Vt.productIndex < Qe && (xt[Vt.productIndex] = Vt.text);
      return xt;
    });
    var Fn = { rotateBundleNonce: function() {
      te(oe, Math.random(), !0);
    }, selectedVariants: function() {
      return Q().map((he) => ({ variantId: he.id, quantity: he.quantity, properties: he.properties }));
    }, items: Q, pricing: function() {
      const he = e(Te).discountedPrice + e(fe).discountedPrice, Qe = e(Te).fullPrice + e(fe).fullPrice;
      return { discountedPrice: { amount: he / 100, formatted: i()(he) }, fullPrice: { amount: Qe / 100, formatted: i()(Qe) }, discountedPricePerItem: { amount: e(Te).discountedPricePerItem / 100, formatted: i()(e(Te).discountedPricePerItem) }, fullPricePerItem: { amount: e(Te).fullPricePerItem / 100, formatted: i()(e(Te).fullPricePerItem) }, discountedPriceWithoutSellingPlan: { amount: (e(Te).discountedPriceWithoutSellingPlan + e(fe).discountedPriceWithoutSellingPlan) / 100, formatted: i()(e(Te).discountedPriceWithoutSellingPlan + e(fe).discountedPriceWithoutSellingPlan) }, discountedPricesForSellingPlans: e(Te).discountedPricesForSellingPlans.map((xt) => {
        var Vt, Re;
        const Ne = (Re = (Vt = e(fe).discountedPricesForSellingPlans.find((Vn) => Vn.sellingPlanId === xt.sellingPlanId)) == null ? void 0 : Vt.discountedPrice) != null ? Re : e(fe).discountedPriceWithoutSellingPlan, Jt = xt.discountedPrice + Ne;
        return { sellingPlanId: xt.sellingPlanId, amount: Jt / 100, formatted: i()(Jt) };
      }) };
    }, deal: function() {
      return { subscriptionsEnabled: e(z).subscriptionsEnabled || e(z).dealBars.some((he) => he.sellingPlanEnabled) };
    }, isItemSelectionValid: function() {
      const { requiresItemSelection: he, allItemsSelected: Qe } = e(Ce);
      return !he || Qe;
    }, validateItemSelection: function() {
      const { requiresItemSelection: he, allItemsSelected: Qe, alertText: xt } = e(Ce);
      return he && !Qe ? (fa(!0), { valid: !1, message: xt ? u()(xt) : null }) : (fa(!1), { valid: !0, message: null });
    }, get component() {
      return g();
    }, set component(he) {
      g(he), v();
    }, get config() {
      return f();
    }, set config(he) {
      f(he), v();
    }, get translations() {
      return k();
    }, set translations(he = {}) {
      k(he), v();
    }, get dealBlock() {
      return x();
    }, set dealBlock(he) {
      x(he), v();
    }, get product() {
      return m();
    }, set product(he) {
      m(he), v();
    }, get currentVariantId() {
      return M();
    }, set currentVariantId(he) {
      M(he), v();
    }, get currentVariantSource() {
      return C();
    }, set currentVariantSource(he = void 0) {
      C(he), v();
    }, get sellingPlanId() {
      return V();
    }, set sellingPlanId(he) {
      V(he), v();
    }, get selectedDealBarId() {
      return D();
    }, set selectedDealBarId(he) {
      D(he), v();
    }, get quantity() {
      return A();
    }, set quantity(he) {
      A(he), v();
    }, get mediaImages() {
      return H();
    }, set mediaImages(he = []) {
      H(he), v();
    }, get otherProducts() {
      return ee();
    }, set otherProducts(he = []) {
      ee(he), v();
    }, get collectionBreaksProducts() {
      return I();
    }, set collectionBreaksProducts(he = []) {
      I(he), v();
    }, get complementaryProducts() {
      return Z();
    }, set complementaryProducts(he = []) {
      Z(he), v();
    }, get nativeBundleProductIds() {
      return B();
    }, set nativeBundleProductIds(he = []) {
      B(he), v();
    }, get compact() {
      return E();
    }, set compact(he = !1) {
      E(he), v();
    }, get variantBadges() {
      return ue();
    }, set variantBadges(he = []) {
      ue(he), v();
    } }, Zn = lm(), ar = ve(Zn), fn = w(ar);
    let Ht;
    {
      const he = (Re, Ne) => {
        let Jt = Wl(() => (function(Yt, Mn, Kr = !1) {
          return Yt === void 0 ? Kr ? Mn() : Mn : Yt;
        })(Ne == null ? void 0 : Ne(), !1));
        var Vn = ze(), vn = ve(Vn), Pn = (Yt) => {
          lg(Yt, { get subscriptions() {
            return e(z).subscriptions;
          }, get sellingPlans() {
            return e(Ee);
          }, get selectedSellingPlan() {
            return e(Je);
          }, get hideSellingPlanSelector() {
            return e(Qt);
          }, get hideTitle() {
            return e(Jt);
          }, onChange: Pe, onRequestAddToCart: ut });
        };
        G(vn, (Yt) => {
          e(z).subscriptions && Yt(Pn);
        }), p(Re, Vn);
      }, Qe = (Re, Ne = Mr) => {
        var Jt = ze(), Vn = ve(Jt), vn = (Yt) => {
          {
            let Mn = d(() => Ne().id === D()), Kr = d(() => Ne().id === D() ? e(xn) : []);
            Kd(Yt, { get selectedDealBarIndex() {
              return e(at);
            }, get dealBlock() {
              return e(Lt);
            }, get dealBar() {
              return Ne();
            }, get product() {
              return e(N);
            }, get otherProducts() {
              return e(S);
            }, get complementaryProducts() {
              return e(P);
            }, get selected() {
              return e(Mn);
            }, get currentVariantId() {
              return M();
            }, get componentId() {
              return X;
            }, get sellingPlan() {
              return e(vt);
            }, onProgressiveGiftsChange: st, onDealBarSelect: je, onDealBarDeselect: Ue, onVariantSelect: ot, onVariantsChange: Wt, onPersonalisationsChange: et, get personalisationInitialValues() {
              return e(Kr);
            } });
          }
        }, Pn = (Yt) => {
          var Mn = ze(), Kr = ve(Mn), Li = (Aa) => {
            {
              let xs = d(() => Ne().id === D()), Lo = d(() => Ne().id === D() ? e(xn) : []);
              Wd(Aa, { get selectedDealBarIndex() {
                return e(at);
              }, get dealBlock() {
                return e(Lt);
              }, get dealBar() {
                return Ne();
              }, get product() {
                return e(N);
              }, get otherProducts() {
                return e(S);
              }, get complementaryProducts() {
                return e(P);
              }, get selected() {
                return e(xs);
              }, get currentVariantId() {
                return M();
              }, get componentId() {
                return X;
              }, get sellingPlan() {
                return e(vt);
              }, onProgressiveGiftsChange: st, onDealBarSelect: je, onDealBarDeselect: Ue, onVariantSelect: ot, onVariantsChange: Wt, onPersonalisationsChange: et, get personalisationInitialValues() {
                return e(Lo);
              } });
            }
          }, _a = (Aa) => {
            var xs = ze(), Lo = ve(xs), Bm = (ji) => {
              {
                let ys = d(() => Ne().id === D()), jo = d(() => Ne().id === D() ? e(xn) : []);
                kg(ji, { get dealBlock() {
                  return e(Lt);
                }, get dealBar() {
                  return Ne();
                }, get selectedDealBarIndex() {
                  return e(at);
                }, get otherProducts() {
                  return e(S);
                }, get complementaryProducts() {
                  return e(P);
                }, get componentId() {
                  return X;
                }, get selected() {
                  return e(ys);
                }, get globalSellingPlan() {
                  return e(vt);
                }, onProgressiveGiftsChange: st, onDealBarSelect: je, onDealBarDeselect: Ue, onVariantsChange: nn, onPersonalisationsChange: et, get personalisationInitialValues() {
                  return e(jo);
                } });
              }
            }, Cm = (ji) => {
              var ys = ze(), jo = ve(ys), Im = (Ei) => {
                {
                  let Eo = d(() => Ne().id === D() ? A() && Number(A()) : void 0), Ro = d(() => Ne().id === D()), No = d(() => Ne().id === D() ? e(xn) : []);
                  eg(Ei, { get dealBlock() {
                    return e(Lt);
                  }, get dealBar() {
                    return Ne();
                  }, get selectedDealBarIndex() {
                    return e(at);
                  }, get product() {
                    return e(N);
                  }, get collectionBreaksProducts() {
                    return e(L);
                  }, get otherProducts() {
                    return e(S);
                  }, get complementaryProducts() {
                    return e(P);
                  }, get customQuantity() {
                    return e(Eo);
                  }, get selected() {
                    return e(Ro);
                  }, onProgressiveGiftsChange: st, get currentVariantId() {
                    return M();
                  }, get componentId() {
                    return X;
                  }, get globalSellingPlan() {
                    return e(vt);
                  }, onDealBarSelect: je, onDealBarDeselect: Ue, onVariantSelect: ot, onVariantsChange: bt, onPersonalisationsChange: et, get personalisationInitialValues() {
                    return e(No);
                  } });
                }
              }, Mm = (Ei) => {
                {
                  let Eo = d(() => Ne().id === D() ? A() && Number(A()) : void 0), Ro = d(() => Ne().id === D()), No = d(() => Ne().id === D() ? e(xn) : []);
                  To(Ei, { get selectedDealBarIndex() {
                    return e(at);
                  }, get dealBlock() {
                    return e(Lt);
                  }, get dealBar() {
                    return Ne();
                  }, get product() {
                    return e(N);
                  }, get otherProducts() {
                    return e(S);
                  }, get complementaryProducts() {
                    return e(P);
                  }, get customQuantity() {
                    return e(Eo);
                  }, get selected() {
                    return e(Ro);
                  }, get currentVariantId() {
                    return M();
                  }, get currentVariantSource() {
                    return C();
                  }, get componentId() {
                    return X;
                  }, get globalSellingPlan() {
                    return e(vt);
                  }, onProgressiveGiftsChange: st, onDealBarSelect: je, onDealBarDeselect: Ue, onVariantSelect: ot, onVariantsChange: qt, onPersonalisationsChange: et, get personalisationInitialValues() {
                    return e(No);
                  } });
                }
              };
              G(jo, (Ei) => {
                !e(z).collectionBreaksEnabled || !e(z).collectionBreaks || Ne().dealBarType && Ne().dealBarType !== ft.QuantityBreak && Ne().dealBarType !== ft.Bxgy ? Ei(Mm, !1) : Ei(Im);
              }, !0), p(ji, ys);
            };
            G(Lo, (ji) => {
              Ne().dealBarType === ft.Sku ? ji(Bm) : ji(Cm, !1);
            }, !0), p(Aa, xs);
          };
          G(Kr, (Aa) => {
            Ne().dealBarType === ft.Bundle ? Aa(Li) : Aa(_a, !1);
          }, !0), p(Yt, Mn);
        };
        G(Vn, (Yt) => {
          Ne().dealBarType === ft.MixAndMatch ? Yt(vn) : Yt(Pn, !1);
        }), p(Re, Jt);
      };
      var on = w(fn), Zt = (Re) => {
        var Ne = am(), Jt = ve(Ne), Vn = (Yt) => {
          var Mn = rm();
          Le(w(Mn), () => e(xe)), y(Mn), p(Yt, Mn);
        };
        G(Jt, (Yt) => {
          e(xe) && Yt(Vn);
        });
        var vn = O(Jt, 2), Pn = (Yt) => {
          gg(Yt, { get timer() {
            return e(z).timer;
          } });
        };
        G(vn, (Yt) => {
          e(z).timerEnabled && e(z).timer && Yt(Pn);
        }), p(Re, Ne);
      };
      G(on, (Re) => {
        E() || Re(Zt);
      });
      var an = O(on, 2), Ln = (Re) => {
        he(Re);
      };
      G(an, (Re) => {
        var Ne;
        e(Ut) && ((Ne = e(z).subscriptions) == null ? void 0 : Ne.position) === "above" && e(ye).positions.size === 0 && Re(Ln);
      });
      var dn = O(an, 2);
      let xt, Vt;
      var En = w(dn);
      At(En, 17, () => e(be), (Re) => Re.id, (Re, Ne) => {
        ba(Re, { get badge() {
          return e(Ne);
        }, get blockLayout() {
          return e(z).blockLayout;
        } });
      });
      var Rn = O(En, 2), cn = (Re) => {
        {
          let Ne = d(() => e(ye).positions.has("all"));
          he(Re, () => e(Ne));
        }
      };
      G(Rn, (Re) => {
        var Ne;
        e(Ut) && ((Ne = e(z).subscriptions) == null ? void 0 : Ne.position) === "above" && e(ye).positions.size > 0 && Re(cn);
      });
      var Cn = O(Rn, 2);
      At(Cn, 17, () => e(It), (Re) => Re.key, (Re, Ne) => {
        var Jt = ze(), Vn = ve(Jt), vn = (Yt) => {
          ng(Yt, { get settings() {
            return e(it);
          }, onReveal: () => {
            return Mn = e(Ne).bars, void (!D() && De && Mn.includes(De) && je({ dealBarId: De.id, dealBarQuantity: Ae(De), preselected: !0 }));
            var Mn;
          }, children: (Mn, Kr) => {
            var Li = ze();
            At(ve(Li), 17, () => e(Ne).bars, (_a) => _a.id, (_a, Aa) => {
              Qe(_a, () => e(Aa));
            }), p(Mn, Li);
          }, $$slots: { default: !0 } });
        }, Pn = (Yt) => {
          var Mn = ze(), Kr = ve(Mn), Li = (_a) => {
            Qe(_a, () => e(Ne).bar);
          };
          G(Kr, (_a) => {
            e(Ne).type === "visible" && _a(Li);
          }, !0), p(Yt, Mn);
        };
        G(Vn, (Yt) => {
          e(Ne).type === "scratch" && e(it) ? Yt(vn) : Yt(Pn, !1);
        }), p(Re, Jt);
      });
      var Jn = O(Cn, 2), St = (Re) => {
        {
          let Ne = d(() => e(ye).positions.has("all"));
          he(Re, () => e(Ne));
        }
      };
      G(Jn, (Re) => {
        var Ne;
        e(Ut) && ((Ne = e(z).subscriptions) == null ? void 0 : Ne.position) === "below" && e(ye).positions.size > 0 && Re(St);
      }), y(dn);
      var tn = O(dn, 2), yn = (Re) => {
        ii(Re, { get product() {
          return e(Xe);
        }, get productPersonalisation() {
          return e(Mt).productPersonalisation;
        }, get selectedVariantIds() {
          return e(Tn);
        }, get personalisationItems() {
          return e(Tt);
        }, get quantity() {
          return e(Bn);
        }, get addPersonalisationModal() {
          return e(z).addPersonalisationModal;
        }, onPersonalisationsChange: et, get initialValues() {
          return e(xn);
        } });
      };
      G(tn, (Re) => {
        var Ne;
        e(pt) && ((Ne = e(Mt)) != null && Ne.productPersonalisation) && Re(yn);
      });
      var un = O(tn, 2), Fr = (Re) => {
        he(Re);
      };
      G(un, (Re) => {
        var Ne;
        e(Ut) && ((Ne = e(z).subscriptions) == null ? void 0 : Ne.position) === "below" && e(ye).positions.size === 0 && Re(Fr);
      });
      var Yn = O(un, 2), Lr = (Re) => {
        var Ne = im();
        Le(w(Ne), () => u()("system.out_of_stock")), y(Ne), p(Re, Ne);
      };
      G(Yn, (Re) => {
        e($e) && (e(ne).length > 1 || e(ne)[0].quantity > 1) && Re(Lr);
      });
      var jr = O(Yn, 2), Kn = (Re) => {
        dg(Re, { get checkboxUpsells() {
          return e(z).checkboxUpsells;
        }, get dealBlock() {
          return e(z);
        }, get otherProducts() {
          return e(S);
        }, get complementaryProducts() {
          return e(P);
        }, get dealSellingPlan() {
          return e(ct);
        }, get dealBarQuantity() {
          return e(ln);
        }, onChange: rt });
      };
      G(jr, (Re) => {
        !E() && e(z).checkboxUpsellsEnabled && e(z).checkboxUpsells && Re(Kn);
      });
      var vr = O(jr, 2), or = (Re) => {
        cg(Re, { get progressiveGifts() {
          return e(Lt).progressiveGifts;
        }, get dealBlock() {
          return e(z);
        }, get otherProducts() {
          return e(S);
        }, get selectedDealBarIndex() {
          return e(at);
        }, get sellingPlan() {
          return e(ct);
        }, onChange: st, onUnlock: Ke, onSubscribe: ht });
      };
      G(vr, (Re) => {
        e(z).progressiveGiftsEnabled && e(Lt).progressiveGifts && e(Lt).progressiveGifts.layout !== "deal-bar" && Re(or);
      });
      var Nn = O(vr, 2);
      {
        let Re = d(() => e(Ce).missingItemsCount > 0);
        mg(Nn, { get alertText() {
          return e(Ce).alertText;
        }, get enabled() {
          return e(Ce).requiresItemSelection;
        }, get hasItemsToSelect() {
          return e(Re);
        } });
      }
      var ir = O(Nn, 2), In = (Re) => {
        xg(Re, { get savingsSummary() {
          return e(z).savingsSummary;
        }, get totalFullPrice() {
          return e(Ft).fullPrice;
        }, get totalDiscountedPrice() {
          return e(Ft).discountedPrice;
        }, get quantity() {
          return e(Bt);
        }, get product() {
          return e(Xe);
        } });
      };
      G(ir, (Re) => {
        var Ne, Jt;
        !E() && e(z).savingsSummaryEnabled && e(z).savingsSummary && (Ne = e(Ft).saved, Jt = e(z).savingsSummary.hideWhenZeroSavings, Ne > 0 || !Jt) && Re(In);
      }), y(fn), _e((Re, Ne, Jt, Vn) => {
        xt = Nt(dn, 1, "kaching-bundles__bars", null, xt, Jt), Vt = Ot(dn, "", Vt, Vn);
      }, [() => ({ "kaching-bundles__block--horizontal": e(z).blockLayout === "horizontal", "kaching-bundles__block--grid": e(z).blockLayout === "grid", "kaching-bundles__block--plain": e(z).blockLayout === "plain" }), () => {
        var Re;
        return (Re = e(z).abTestVariantLetter) != null ? Re : e(z).abTestVariantNumber ? String.fromCharCode(64 + e(z).abTestVariantNumber) : void 0;
      }, () => ({ "kaching-bundles__bars--horizontal": e(z).blockLayout === "horizontal", "kaching-bundles__bars--grid": e(z).blockLayout === "grid", "kaching-bundles__bars--plain": e(z).blockLayout === "plain", "kaching-bundles__bars--hide-prices": e(dt), "kaching-bundles__bars--badge-border-all": e(ye).positions.has("all"), "kaching-bundles__bars--badge-border-top": e(ye).positions.has("top"), "kaching-bundles__bars--badge-border-bottom": e(ye).positions.has("bottom"), "kaching-bundles__bars--badge-border-left": e(ye).positions.has("left"), "kaching-bundles__bars--badge-border-right": e(ye).positions.has("right") }), () => {
        var Re, Ne;
        return { "--badge-border-thickness": `${(Re = e(ye).thickness) != null ? Re : ""}px`, "--badge-border-gap": `${(Ne = e(ye).gap) != null ? Ne : ""}px`, "--badge-border-gap-border": e(ye).gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": e(ye).sideLength ? `${e(ye).sideLength}px` : void 0, "--badge-border-wrap-color": e(qe) };
      }]);
    }
    y(ar);
    var Xn = O(ar, 2), Br = (he) => {
      hg(he, { get shopCustomStyles() {
        return f().shopCustomStyles;
      }, get customStyles() {
        return e(z).customStyles;
      }, get dealBlockId() {
        return e(z).id;
      } });
    };
    G(Xn, (he) => {
      e(z).customStylesEnabled && he(Br);
    }), _e((he, Qe, xt, Vt) => {
      var Re;
      Ht = Nt(fn, 1, "kaching-bundles__block kaching-bundles__block--loaded", null, Ht, he), Be(fn, "data-deal-block-id", e(z).id), Be(fn, "data-ab-test-variant-id", e(z).abTestVariantId), Be(fn, "data-ab-test-variant", Qe), Be(fn, "data-selling-plan-id", (Re = e(ct)) == null ? void 0 : Re.id), Ot(fn, e(R));
    }, [() => ({ "kaching-bundles__block--horizontal": e(z).blockLayout === "horizontal", "kaching-bundles__block--grid": e(z).blockLayout === "grid", "kaching-bundles__block--plain": e(z).blockLayout === "plain" }), () => {
      var he;
      return (he = e(z).abTestVariantLetter) != null ? he : e(z).abTestVariantNumber ? String.fromCharCode(64 + e(z).abTestVariantNumber) : void 0;
    }, () => ({ "kaching-bundles__bars--horizontal": e(z).blockLayout === "horizontal", "kaching-bundles__bars--grid": e(z).blockLayout === "grid", "kaching-bundles__bars--plain": e(z).blockLayout === "plain", "kaching-bundles__bars--hide-prices": e(dt), "kaching-bundles__bars--badge-border-all": e(ye).positions.has("all"), "kaching-bundles__bars--badge-border-top": e(ye).positions.has("top"), "kaching-bundles__bars--badge-border-bottom": e(ye).positions.has("bottom"), "kaching-bundles__bars--badge-border-left": e(ye).positions.has("left"), "kaching-bundles__bars--badge-border-right": e(ye).positions.has("right") }), () => {
      var he, Qe;
      return { "--badge-border-thickness": `${(he = e(ye).thickness) != null ? he : ""}px`, "--badge-border-gap": `${(Qe = e(ye).gap) != null ? Qe : ""}px`, "--badge-border-gap-border": e(ye).gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": e(ye).sideLength ? `${e(ye).sideLength}px` : void 0, "--badge-border-wrap-color": e(qe) };
    }]), p(n, Zn);
    var Er = nt(Fn);
    return b(), Er;
  }
  customElements.define("kaching-bundles-block", Ze(yg, { config: { attribute: "config", type: "Object" }, translations: { attribute: "translations", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, product: { attribute: "product", type: "Object" }, otherProducts: { attribute: "other-products", type: "Array" }, collectionBreaksProducts: { attribute: "collection-breaks-products", type: "Array" }, complementaryProducts: { attribute: "complementary-products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" }, currentVariantId: { attribute: "current-variant-id", type: "Number" }, currentVariantSource: { attribute: "current-variant-source", type: "String" }, sellingPlanId: { attribute: "selling-plan-id", type: "Number" }, selectedDealBarId: { attribute: "selected-deal-bar-id", type: "String" }, quantity: { attribute: "quantity", type: "Number" }, nativeBundleProductIds: { attribute: "native-bundle-product-ids", type: "Array" }, compact: { attribute: "compact", type: "Boolean" }, variantBadges: { attribute: "variant-badges", type: "Array" }, component: {} }, [], ["rotateBundleNonce", "selectedVariants", "items", "pricing", "deal", "isItemSelectionValid", "validateItemSelection"], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this, this.innerHTML && (wr(this, "kaching-bundles-block-hydrated"), this.innerHTML = "");
    }
  }));
  var sm = $('<div class="kaching-bundles"><!></div>');
  function wg(n, t) {
    var r;
    tt(t, !0);
    const a = _(t, "config", 7), s = _(t, "dealBlock", 7), o = _(t, "products", 23, () => []), c = _(t, "mediaImages", 7), l = _(t, "translations", 7), i = d(() => hr(s(), a().brandColors)), { setConfig: u } = ri(a()), { setMoneyFormat: h } = Di(a().moneyFormat), { setTranslations: b } = ni(l()), { setMediaImages: g } = hl(c()), { setSwatchSettings: f } = ul({ swatchOptions: e(i).swatchOptions || [], swatchSize: e(i).swatchSize, swatchShape: e(i).swatchShape, showSelectedSwatchName: (r = e(i).showSelectedSwatchName) != null && r });
    Ye(() => {
      u(a());
    }), Ye(() => {
      h(a().moneyFormat, !!e(i).showPricesWithoutDecimals);
    }), Ye(() => {
      b(l());
    }), Ye(() => {
      g(c());
    }), Ye(() => {
      var V;
      f({ swatchOptions: e(i).swatchOptions || [], swatchSize: e(i).swatchSize, swatchShape: e(i).swatchShape, showSelectedSwatchName: (V = e(i).showSelectedSwatchName) != null && V });
    });
    const k = d(() => e(i).dealBars.find((V) => V.dealBarType === ft.MixAndMatch));
    var x = { get config() {
      return a();
    }, set config(V) {
      a(V), v();
    }, get dealBlock() {
      return s();
    }, set dealBlock(V) {
      s(V), v();
    }, get products() {
      return o();
    }, set products(V = []) {
      o(V), v();
    }, get mediaImages() {
      return c();
    }, set mediaImages(V) {
      c(V), v();
    }, get translations() {
      return l();
    }, set translations(V) {
      l(V), v();
    } }, m = sm(), M = w(m), C = (V) => {
      qo(V, { get dealBlock() {
        return e(i);
      }, get dealBar() {
        return e(k);
      }, get products() {
        return o();
      }, onChoose: () => {
      } });
    };
    return G(M, (V) => {
      e(k) && V(C);
    }), y(m), p(n, m), nt(x);
  }
  customElements.define("kaching-bundles-mix-and-match-choose-product", Ze(wg, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this;
    }
  }));
  var om = $('<div class="kaching-bundles"><!></div>');
  function Pg(n, t) {
    tt(t, !0);
    const r = _(t, "config", 7), a = _(t, "product", 7), s = _(t, "translations", 7), o = _(t, "addPersonalisationModal", 7), c = d(() => hr(o(), r().brandColors)), { setConfig: l } = ri(r()), { setTranslations: i } = ni(s());
    Ye(() => {
      l(r()), i(s());
    });
    const u = d(() => {
      var g, f;
      return (f = (g = a()) == null ? void 0 : g.variants) != null && f[0] ? [{ product: a(), variant: a().variants[0], index: 0 }, { product: a(), variant: a().variants[0], index: 1 }] : [];
    });
    var h = { get config() {
      return r();
    }, set config(g) {
      r(g), v();
    }, get product() {
      return a();
    }, set product(g) {
      a(g), v();
    }, get translations() {
      return s();
    }, set translations(g) {
      s(g), v();
    }, get addPersonalisationModal() {
      return o();
    }, set addPersonalisationModal(g) {
      o(g), v();
    } }, b = om();
    return Mo(w(b), { get selectedVariants() {
      return e(u);
    }, get addPersonalisationModal() {
      return e(c);
    }, inline: !0, personalisationValues: [], onConfirm: () => {
    }, onClose: () => {
    } }), y(b), p(n, b), nt(h);
  }
  customElements.define("kaching-bundles-personalisation-modal", Ze(Pg, { config: { attribute: "config", type: "Object" }, product: { attribute: "product", type: "Object" }, translations: { attribute: "translations", type: "Object" }, addPersonalisationModal: { attribute: "add-personalisation-modal", type: "Object" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this;
    }
  }));
  function cm(n, t) {
    t().dispatchEvent(new CustomEvent("kaching-bundles-sticky-atc-clicked", { bubbles: !0, composed: !0 }));
  }
  var um = $('<img class="kaching-bundles-sticky-atc__image"/>'), dm = $('<button class="kaching-bundles-sticky-atc__button"><!></button>'), gm = $('<div class="kaching-bundles"><div class="kaching-bundles-sticky-atc"><div class="kaching-bundles-sticky-atc__content"><!> <div class="kaching-bundles-sticky-atc__title"><!></div></div> <!></div></div>');
  function Sg(n, t) {
    var r;
    tt(t, !0);
    const a = () => Ve(li, "$selectedDealBarStore", o), s = () => Ve(m, "$translate", o), [o, c] = mt(), l = _(t, "component", 7), i = _(t, "config", 7), u = _(t, "stickyAtc", 7), h = _(t, "translations", 7), b = _(t, "product", 7), g = _(t, "dealBlock", 7), f = d(() => hr(u(), i().brandColors)), k = d(() => hr(g(), i().brandColors)), { setConfig: x } = ri(i()), { translate: m, setTranslations: M } = ni(h()), { formatPrice: C, setMoneyFormat: V } = Di(i().moneyFormat, (r = e(k)) == null ? void 0 : r.showPricesWithoutDecimals);
    Ye(() => {
      x(i());
    }), Ye(() => {
      var q;
      V(i().moneyFormat, !!((q = e(k)) != null && q.showPricesWithoutDecimals));
    }), Ye(() => {
      M(h());
    });
    const D = d(() => ((q) => {
      const se = { "kaching-bundles-sticky-atc-background-color": We(q.backgroundColor), "kaching-bundles-sticky-atc-title-color": We(q.titleColor), "kaching-bundles-sticky-atc-button-color": We(q.buttonColor), "kaching-bundles-sticky-atc-button-text-color": We(q.buttonTextColor), "kaching-bundles-sticky-atc-title-font-size": q.titleFont.size + "px", "kaching-bundles-sticky-atc-button-font-size": q.buttonFont.size + "px", "kaching-bundles-sticky-atc-title-font-style": fr(q.titleFont.style), "kaching-bundles-sticky-atc-title-font-weight": br(q.titleFont.style), "kaching-bundles-sticky-atc-button-font-style": fr(q.buttonFont.style), "kaching-bundles-sticky-atc-button-font-weight": br(q.buttonFont.style), "kaching-bundles-sticky-atc-product-photo-size": q.productPhotoSize + "px", "kaching-bundles-sticky-atc-button-padding": q.buttonPadding + "px", "kaching-bundles-sticky-atc-product-photo-corner-radius": q.productPhotoCornerRadius + "px", "kaching-bundles-sticky-atc-button-corner-radius": q.buttonCornerRadius + "px" };
      if (q.sameSizeOnMobile || !q.mobile) return _n(se);
      const le = q.mobile;
      return _n({ ...se, "kaching-bundles-sticky-atc-image-display": q.productPhotoSize > 0 ? "block" : "none", "kaching-bundles-sticky-atc-image-display-mobile": le.productPhotoSize > 0 ? "block" : "none", "kaching-bundles-sticky-atc-title-font-size-mobile": le.titleFontSize + "px", "kaching-bundles-sticky-atc-button-font-size-mobile": le.buttonFontSize + "px", "kaching-bundles-sticky-atc-product-photo-size-mobile": le.productPhotoSize + "px", "kaching-bundles-sticky-atc-button-padding-mobile": le.buttonPadding + "px", "kaching-bundles-sticky-atc-product-photo-corner-radius-mobile": le.productPhotoCornerRadius + "px", "kaching-bundles-sticky-atc-button-corner-radius-mobile": le.buttonCornerRadius + "px" });
    })(e(f))), A = d(() => {
      var q;
      return ((q = a()) == null ? void 0 : q.pricing.fullPrice) || b().variants[0].compareAtPrice || b().variants[0].price;
    }), H = d(() => {
      var q;
      return ((q = a()) == null ? void 0 : q.pricing.discountedPrice) || b().variants[0].price;
    }), ee = d(() => {
      var q;
      return ((q = a()) == null ? void 0 : q.quantity) || 1;
    }), I = d(() => bn({ priceFormatter: Ve(C, "$formatPrice", o), product: b(), totalFullPrice: e(A), totalDiscountedPrice: e(H), quantity: e(ee), unitQuantity: null })), Z = d(() => e(I)(s()(e(f).title))), B = new Ob("(width < 750px)"), E = d(() => (B.current && !e(f).sameSizeOnMobile && e(f).mobile ? e(f).mobile.productPhotoSize : e(f).productPhotoSize) > 0);
    var ue = { get component() {
      return l();
    }, set component(q) {
      l(q), v();
    }, get config() {
      return i();
    }, set config(q) {
      i(q), v();
    }, get stickyAtc() {
      return u();
    }, set stickyAtc(q) {
      u(q), v();
    }, get translations() {
      return h();
    }, set translations(q) {
      h(q), v();
    }, get product() {
      return b();
    }, set product(q) {
      b(q), v();
    }, get dealBlock() {
      return g();
    }, set dealBlock(q) {
      g(q), v();
    } }, z = gm(), N = w(z), S = w(N), P = w(S), L = (q) => {
      var se = um();
      _e(() => {
        Be(se, "src", b().image), Be(se, "alt", b().title);
      }), p(q, se);
    };
    G(P, (q) => {
      e(E) && q(L);
    });
    var j = O(P, 2);
    Le(w(j), () => e(Z)), y(j), y(S);
    var Y = O(S, 2), de = (q) => {
      var se = dm();
      se.__click = [cm, l], Le(w(se), () => s()(e(f).buttonText)), y(se), p(q, se);
    };
    G(Y, (q) => {
      e(f).buttonText && q(de);
    }), y(N), y(z), _e(() => Ot(N, e(D))), p(n, z);
    var T = nt(ue);
    return c(), T;
  }
  Gn(["click"]), customElements.define("kaching-bundles-sticky-atc", Ze(Sg, { config: { attribute: "config", type: "Object" }, stickyAtc: { attribute: "sticky-atc", type: "Object" }, translations: { attribute: "translations", type: "Object" }, product: { attribute: "product", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, component: {} }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this;
    }
  }));
  const hm = cd, pm = id, bm = yg, fm = wg, vm = Pg, _m = Sg, km = Rd.element, mm = hm.element, xm = pm.element, ym = bm.element, wm = fm.element, Pm = vm.element, Sm = _m.element;
  return Rt.ChooseMultipleGifts = xm, Rt.ChooseProduct = mm, Rt.DealBar = km, Rt.DealBlock = ym, Rt.MixAndMatchChooseProduct = wm, Rt.PersonalisationModal = Pm, Rt.StickyAtc = Sm, Object.defineProperty(Rt, Symbol.toStringTag, { value: "Module" }), Rt;
})({});
