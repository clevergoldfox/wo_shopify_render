(function() {
  try {
    if (typeof document != "undefined") {
      var jt = document.createElement("style");
      jt.id = "kaching-bundles-styles", jt.appendChild(document.createTextNode(`.kaching-bundles .kaching-bundles__multiple-gifts-selector{position:relative}.kaching-bundles .kaching-bundles__multiple-gifts-selector__clickable-overlay{position:absolute;inset:0;cursor:pointer}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photos{position:relative;display:flex;align-items:center;flex-shrink:0;padding-block:2px}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photo{box-sizing:border-box;width:40px;height:40px;-o-object-fit:cover;object-fit:cover;background-color:#fff;border-radius:8px;border:1px solid var(--kaching-free-gift-background-color, #fff)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__multiple-gifts-selector__photo{border-color:var(--kaching-free-gift-selected-background-color, #000)}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photo:not(:first-child){margin-inline-start:-16px}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photo-count{box-sizing:border-box;position:absolute;top:0;inset-inline-end:0;transform:translate(18%,-3%);display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;border:1px solid var(--kaching-free-gift-text-color, #000);background-color:var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3));color:var(--kaching-free-gift-text-color, #000);font-size:calc(var(--kaching-free-gift-font-size, 13px) - 2px);font-weight:var(--kaching-free-gift-font-weight, bold);line-height:1}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__multiple-gifts-selector__photo-count{border-color:var(--kaching-free-gift-selected-text-color, #fff);background-color:var(--kaching-free-gift-selected-background-color, #000);color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__bundle-products{display:flex;justify-content:space-evenly;margin-top:12px;margin-bottom:4px;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:calc(var(--bar-border-radius, 0) * 3 / 4)}.kaching-bundles .kaching-bundles__bundle-products .kaching-bundles__bar-variant-selects{justify-content:center}.kaching-bundles .kaching-bundles__bundle-products__divider{display:flex;flex-direction:column;align-items:center;width:0;overflow:visible}.kaching-bundles .kaching-bundles__bundle-products__divider *{max-width:initial}.kaching-bundles .kaching-bundles__bundle-products__divider-line{display:flex;flex:1;width:1px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bundle-products__divider-icon{display:flex}.kaching-bundles .kaching-bundles__bundle-products__divider-icon svg{color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bundle-products__product{display:flex;flex:1;flex-direction:column;align-items:center;min-width:0;gap:5px;padding:12px}.kaching-bundles .kaching-bundles__bundle-products__product.kaching-bundles__bundle-products__product--placeholder{justify-content:center;text-align:center;font-size:13px;font-weight:700;color:#555}.kaching-bundles .kaching-bundles__bundle-products__wrapper{display:flex;align-items:center;gap:10px;min-width:0}.kaching-bundles .kaching-bundles__bundle-products__content{display:flex;flex-direction:column;align-items:flex-start;min-width:0}.kaching-bundles .kaching-bundles__bundle-products__link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__bundle-products__image{flex-shrink:0;height:50px;width:auto;max-width:100%;border-radius:var(--kaching-bundle-products-image-border-radius, 0)}.kaching-bundles .kaching-bundles__bundle-products__image-placeholder{flex-shrink:0;height:50px;width:50px}.kaching-bundles .kaching-bundles__bundle-products__title{overflow-wrap:break-word;text-align:center;font-size:13px;color:var(--bar-title-color);font-weight:var(--bar-title-font-weight, 700);font-style:var(--bar-title-font-style)}.kaching-bundles .kaching-bundles__bundle-products__pricing{display:flex;flex-shrink:0;flex-wrap:wrap;justify-content:center;align-items:baseline;gap:5px}.kaching-bundles .kaching-bundles__bundle-products__price{font-size:13px;font-weight:700;color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__bundle-products__full-price{text-decoration:line-through;font-size:12px;color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__bundle-products__unit-price{width:100%;text-align:center;font-size:12px;color:var(--bar-full-price-color, #555);text-transform:uppercase}.kaching-bundles .kaching-bundles__bundle-products--hidden{display:none}.kaching-bundles .kaching-bundles__bundle-products--vertical{flex-direction:column}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__divider{flex-direction:row;width:100%;height:0}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__divider-line{width:auto;height:1px}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__product{flex-direction:row;justify-content:space-between;padding:14px 12px}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__pricing{flex-direction:column;align-items:flex-end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__pricing--with-unit-price{flex-flow:row wrap;justify-content:flex-end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__unit-price{text-align:end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__title{text-align:start}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__image{width:50px;height:auto;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bar-variant-selects{justify-content:flex-start}.kaching-bundles .kaching-bundles__mix-and-match-products{display:flex;flex-direction:column;margin-top:12px;margin-bottom:4px;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:calc(var(--bar-border-radius, 0) * 3 / 4);overflow:hidden}.kaching-bundles .kaching-bundles__mix-and-match-products--hidden{display:none}.kaching-bundles .kaching-bundles__mix-and-match-products__divider{display:flex;flex-direction:row;align-items:center;gap:4px;width:100%;height:0;overflow:visible}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-line{display:flex;flex:1;width:auto;height:1px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-icon{display:flex}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-icon svg{color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__mix-and-match-product{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;gap:12px;align-items:center;padding:12px}.kaching-bundles .kaching-bundles__mix-and-match-product__content{display:flex;flex-direction:column;gap:6px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-product__pricing{display:flex;justify-content:flex-end}.kaching-bundles .kaching-bundles__mix-and-match-product__pricing .kaching-bundles__bundle-products__pricing{flex-direction:column;align-items:flex-end;gap:0}.kaching-bundles .kaching-bundles__mix-and-match-product__image-link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-product__image{flex-shrink:0;height:50px;width:auto;max-width:100%;border-radius:var(--kaching-bundle-products-image-border-radius, 0)}.kaching-bundles .kaching-bundles__mix-and-match-product__image-placeholder{height:50px;width:50px}.kaching-bundles .kaching-bundles__mix-and-match-product__title-link{align-self:flex-start;text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-product__title{overflow-wrap:break-word;text-align:start;font-size:13px;color:var(--bar-title-color);font-weight:var(--bar-title-font-weight, 700);font-style:var(--bar-title-font-style)}.kaching-bundles .kaching-bundles__mix-and-match-product__swap-button{display:inline-flex;align-items:center;justify-content:center;padding:8px 12px;border-radius:var(--bar-border-radius, 8px);background-color:var(--collection-product-button-color, #2b2b2b);color:var(--collection-product-button-text-color, #ffffff);font-size:13px;line-height:1.2;text-align:center;cursor:pointer;white-space:nowrap}.kaching-bundles .kaching-bundles__mix-and-match-products__placeholder{display:flex;align-items:center;justify-content:center;padding:14px 12px;color:#0006;font-style:italic}.kaching-bundles .kaching-bundles__checkbox-upsells__upsell .kaching-bundles__bar-main{gap:10px}.kaching-bundles .kaching-bundles__checkbox-upsells__upsell .kaching-bundles__selling-plan-select{margin-top:5px}.kaching-bundles .kaching-bundles__checkbox-upsells__checkbox{all:unset;display:flex;flex-shrink:0;width:20px;height:20px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__checkbox-upsells__checkbox.kaching-bundles__checkbox-upsells__checkbox--selected{border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__checkbox-upsells__image{width:initial;max-width:50px;max-height:50px;border-radius:calc(var(--bar-border-radius, 0) / 2)}.kaching-bundles .kaching-bundles__choose-multiple-gifts-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;justify-content:center;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-choose-multiple-gifts-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__choose-multiple-gifts-modal__content{position:relative;z-index:10000;min-width:min(470px,95%);max-width:700px;max-height:calc(100dvh - 20px);width:100%;display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__choose-multiple-gifts{display:flex;flex-direction:column;border-radius:10px;background-color:#fff;max-height:100%;overflow:hidden}.kaching-bundles .kaching-bundles__choose-multiple-gifts__header{display:flex;align-items:center;justify-content:space-between;padding:16px 16px 0;margin-block:2px 18px;color:var(--kaching-choose-multiple-gifts-text-color, #000);flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-multiple-gifts__products{display:flex;flex-direction:column;gap:16px;padding:0 16px;flex:1;overflow-y:auto;min-height:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{display:flex;align-items:center;justify-content:space-between;gap:20px}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{gap:12px}}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{flex-direction:column;align-items:stretch;gap:12px}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-container{display:flex;align-items:center;gap:12px;min-width:0;flex:1}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-container{gap:8px}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-choose-multiple-gifts-photo-size, 100px);max-height:calc(var(--kaching-choose-multiple-gifts-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-choose-multiple-gifts-text-size, 14px);color:var(--kaching-choose-multiple-gifts-text-color, #000)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selectors{display:flex;flex-direction:column;gap:8px;margin-top:8px;min-width:0;max-width:100%}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-row{display:flex;align-items:flex-start;gap:8px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-counter{display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:24px;height:24px;font-size:12px;color:#000}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-content{flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-with-counter{display:flex;align-items:center;gap:8px;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-wrapper{flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__subtitle{font-size:14px;font-weight:400;color:var(--kaching-choose-multiple-gifts-text-color, #000)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-price{font-size:14px;font-weight:650;color:var(--kaching-choose-multiple-gifts-price-color, #f04438)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-choose-multiple-gifts-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;display:flex;justify-content:center;align-items:center;border:none;font-weight:600;padding:10px 12px;line-height:1.4;border-radius:8px;cursor:pointer;font-size:var(--kaching-choose-multiple-gifts-button-size, 16px);background-color:var(--kaching-choose-multiple-gifts-button-color, #7f56d9);color:var(--kaching-choose-multiple-gifts-button-text-color, #fff)}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button{flex:1}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button--disabled{background-color:#eaecf0;color:#98a2b3;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button--selected{display:flex;align-items:center;gap:8px;background-color:#fff;color:#414651;border:1px solid #d5d7da}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px;margin-top:16px;padding:16px;border-top:1px solid #e5e5e3;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-text{font-size:14px;font-weight:400;color:#535862;flex:1;min-width:0;overflow-wrap:break-word}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-buttons{display:flex;gap:8px;flex:1;min-width:0;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;height:40px;min-width:80px;font-size:14px;font-weight:600;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:1;box-shadow:0 1px 2px #0a0d120d}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--cancel{background-color:#fff;border:1px solid #d5d7da;color:#414651}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--confirm{background-color:#000;color:#fff}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--confirm:disabled{background-color:#eaecf0;border:1px solid #e9eaeb;color:#98a2b3;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{display:flex;align-items:center;gap:12px;flex-shrink:0}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{gap:8px}}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{flex-direction:row-reverse;justify-content:space-between;flex-shrink:1}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity{display:flex;align-items:center;justify-content:space-between;width:72px;height:42px;border:1px solid #d6d6d6;border-radius:8px;overflow:hidden}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button{all:unset;display:flex;align-items:center;justify-content:center;width:28px;height:100%;cursor:pointer;color:#424242}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button[aria-disabled=true]{opacity:.4;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button img{filter:brightness(0) saturate(100%) invert(24%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(96%) contrast(89%)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-value{font-size:14px;font-weight:600;color:#414651}body:has(.kaching-bundles__choose-multiple-gifts-modal){overflow:hidden}.kaching-bundles .kaching-bundles__mix-and-match-choose-product-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-mix-and-match-choose-product-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__mix-and-match-choose-product-modal__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__mix-and-match-choose-product{display:flex;flex-direction:column;padding:16px;border-radius:10px;background-color:#fff}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__header{display:flex;align-items:center;justify-content:space-between;margin-block:2px 18px;color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__products{display:flex;flex-direction:column;gap:16px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__empty-state{display:flex;flex-direction:column;align-items:center;text-align:center;color:#4b5565}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product{display:flex;align-items:center;justify-content:space-between;gap:20px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-container{display:flex;align-items:center;gap:12px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-mix-and-match-choose-product-photo-size, 100px);max-height:calc(var(--kaching-mix-and-match-choose-product-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-mix-and-match-choose-product-text-size, 14px);color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__subtitle{font-size:14px;font-weight:400;color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-price{font-size:14px;font-weight:650;color:var(--kaching-mix-and-match-choose-product-price-color, #f04438)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-mix-and-match-choose-product-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-option-names.kaching-bundles__bar-variant-names{color:inherit;margin-block:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;border:none;font-weight:600;padding:12px;line-height:1.2;border-radius:8px;cursor:pointer;font-size:var(--kaching-mix-and-match-choose-product-button-size, 16px);background-color:var(--kaching-mix-and-match-choose-product-button-color, #7f56d9);color:var(--kaching-mix-and-match-choose-product-button-text-color, #fff)}body:has(.kaching-bundles__mix-and-match-choose-product-modal){overflow:hidden}.kaching-bundles .kaching-bundles__bar-collection-products{display:flex;flex-direction:column;gap:5px;margin-top:5px}.kaching-bundles .kaching-bundles__collection-product{display:flex;gap:16px;align-items:center;justify-content:space-between}.kaching-bundles .kaching-bundles__collection-product .kaching-bundles__bar-variant-names{display:none;margin-block:0}.kaching-bundles .kaching-bundles__collection-product__image--default{background-color:#fff;border:1px solid #e9e9e9;color:#000}.kaching-bundles .kaching-bundles__collection-product--require-selection{padding:8px;border-radius:12px;background-color:var(--kaching-collection-breaks-require-selection-background-color)}.kaching-bundles .kaching-bundles__collection-product--require-selection .kaching-bundles__collection-product__image--default{border-color:var(--kaching-collection-breaks-require-selection-text-color);color:var(--kaching-collection-breaks-require-selection-text-color)}.kaching-bundles .kaching-bundles__collection-breaks-alert{display:flex;align-items:center;gap:8px;margin-top:10px;padding:8px 12px;border-radius:12px;font-size:12px;background-color:var(--kaching-collection-breaks-require-selection-background-color);color:var(--kaching-collection-breaks-require-selection-text-color)}.kaching-bundles .kaching-bundles__collection-breaks-alert__icon{flex-shrink:0;width:16px;height:16px}.kaching-bundles .kaching-bundles__collection-product__main{display:flex;gap:16px;align-items:center;min-width:0}.kaching-bundles .kaching-bundles__collection-product__content{display:flex;flex-direction:column;gap:3px;min-width:0}.kaching-bundles .kaching-bundles__collection-product__link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__collection-product__image{flex-shrink:0;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-collection-breaks-product-photo-size, 40px);border-radius:var(--kaching-collection-breaks-image-border-radius, 0)}.kaching-bundles .kaching-bundles__collection-product__title{font-size:16px;color:var(--kaching-collection-breaks-product-title-color, #000)}.kaching-bundles .kaching-bundles__collection-product__choose-product-image{cursor:pointer;line-height:0}.kaching-bundles .kaching-bundles__collection-product__choose-product-button{cursor:pointer;color:#fff;font-size:12px;line-height:1.4;padding:6px 14px;border-radius:8px;background-color:var(--kaching-collection-breaks-button-color, #333)}.kaching-bundles .kaching-bundles__collection-product__remove-button{display:flex;align-items:center;justify-content:center;height:24px;width:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-choose-product-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__choose-product-modal__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__choose-product{display:flex;flex-direction:column;padding:16px;border-radius:10px;background-color:#fff}.kaching-bundles .kaching-bundles__choose-product__header{display:flex;align-items:center;justify-content:space-between;margin-block:2px 18px;color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__choose-product__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__products{display:flex;flex-direction:column;gap:16px}.kaching-bundles .kaching-bundles__choose-product__controls{display:flex;align-items:center;gap:10px;margin-bottom:14px}.kaching-bundles .kaching-bundles__choose-product__search-field{position:relative;flex:1 1 auto;min-width:0}.kaching-bundles .kaching-bundles__choose-product__search-icon{position:absolute;top:50%;left:12px;transform:translateY(-50%);width:16px;height:16px;pointer-events:none}.kaching-bundles .kaching-bundles__choose-product__search-input{box-sizing:border-box;width:100%;padding:10px 12px 10px 36px;border:1px solid #d5d7da;border-radius:8px;font-size:14px;color:var(--kaching-choose-product-text-color, #000);background-color:#fff}.kaching-bundles .kaching-bundles__choose-product__sort{position:relative;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-product__sort-button{display:inline-flex;align-items:center;gap:8px;padding:10px 12px;border:1px solid #d5d7da;border-radius:8px;background:#fff;color:var(--kaching-choose-product-text-color, #000);font-size:14px;line-height:1;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__sort-icon{width:16px;height:16px;display:block}.kaching-bundles .kaching-bundles__choose-product__sort-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:2;min-width:210px;display:flex;flex-direction:column;border:1px solid #d5d7da;border-radius:10px;background:#fff;box-shadow:0 8px 24px #10182824;overflow:hidden}.kaching-bundles .kaching-bundles__choose-product__sort-option{display:flex;align-items:center;justify-content:space-between;gap:12px;border:none;background:#fff;text-align:start;padding:10px 12px;font-size:14px;color:var(--kaching-choose-product-text-color, #000);cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__sort-option-check{flex-shrink:0;width:16px;height:16px;display:block}.kaching-bundles .kaching-bundles__choose-product__sort-option:hover{background:#f8fafc}.kaching-bundles .kaching-bundles__choose-product__empty-state{display:flex;flex-direction:column;align-items:center;text-align:center;color:#4b5565}.kaching-bundles .kaching-bundles__choose-product__empty-state-icon-wrapper{display:flex;align-items:center;justify-content:center;width:48px;height:48px;margin-bottom:16px}.kaching-bundles .kaching-bundles__choose-product__empty-state-icon{width:48px;height:48px}.kaching-bundles .kaching-bundles__choose-product__empty-state-title{font-size:18px;font-weight:500;color:#181d27}.kaching-bundles .kaching-bundles__choose-product__empty-state-description{margin-top:8px;font-size:14px;color:#535862}.kaching-bundles .kaching-bundles__choose-product__empty-state-clear-button{margin-top:16px;padding:10px 16px;border:1px solid #d5d7da;border-radius:8px;background:#fff;color:#414651;font-size:14px;font-weight:600}.kaching-bundles .kaching-bundles__choose-product__product{display:flex;align-items:center;justify-content:space-between;gap:20px}.kaching-bundles .kaching-bundles__choose-product__product-container{display:flex;align-items:center;gap:12px;min-width:0}.kaching-bundles .kaching-bundles__choose-product__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-product__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-choose-product-photo-size, 100px);max-height:calc(var(--kaching-choose-product-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__choose-product__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__choose-product__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__choose-product__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-choose-product-text-size, 14px);color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__subtitle{font-size:14px;font-weight:400;color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__choose-product__product-price{font-size:14px;font-weight:650;color:var(--kaching-choose-product-price-color, #f04438)}.kaching-bundles .kaching-bundles__choose-product__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-choose-product-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__choose-product__product-option-names.kaching-bundles__bar-variant-names{color:inherit;margin-block:0}.kaching-bundles .kaching-bundles__choose-product__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;border:none;font-weight:600;padding:12px;line-height:1.2;border-radius:8px;cursor:pointer;font-size:var(--kaching-choose-product-button-size, 16px);background-color:var(--kaching-choose-product-button-color, #7f56d9);color:var(--kaching-choose-product-button-text-color, #fff)}body:has(.kaching-bundles__choose-product-modal){overflow:hidden}.kaching-bundles .kaching-bundles__free-gift{display:flex;align-items:center;justify-content:space-between;margin-inline:1px;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);gap:5px 10px;background-color:var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__free-gift:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__free-gift.kaching-bundles__free-gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__free-gift__link{pointer-events:none}.kaching-bundles .kaching-bundles__free-gift__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__free-gift__main:has(.kaching-bundles__swatch-buttons){overflow-x:auto}.kaching-bundles .kaching-bundles__free-gift__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__free-gift__content--clickable{cursor:pointer}.kaching-bundles .kaching-bundles__free-gift__add-button{all:unset;display:flex;cursor:pointer;line-height:0;padding:4px;margin:-4px -4px -4px -6px;color:var(--kaching-free-gift-text-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__add-button{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__text{color:var(--kaching-free-gift-text-color, #000);font-size:var(--kaching-free-gift-font-size, 13px);font-weight:var(--kaching-free-gift-font-weight, bold);font-style:var(--kaching-free-gift-font-style, normal)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__text{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-free-gift-image-height, 30px);border-radius:var(--kaching-free-gift-image-border-radius, 0)}.kaching-bundles .kaching-bundles__free-gift__full-price{flex-shrink:0;text-decoration:line-through;font-size:calc(var(--kaching-free-gift-font-size, 13px) - 1px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--kaching-free-gift-text-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__full-price{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__divider{height:1px;display:flex}.kaching-bundles .kaching-bundles__free-gift-summary{gap:8px;justify-content:flex-start}.kaching-bundles .kaching-bundles__free-gift-summary__images{display:flex;flex-shrink:0;align-items:center}.kaching-bundles .kaching-bundles__free-gift-summary__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-free-gift-image-height, 30px);border-radius:var(--kaching-free-gift-image-border-radius, 0);margin-inline-start:-8px;border:1px solid var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__free-gift-summary__image:first-child{margin-inline-start:0}.kaching-bundles .kaching-bundles__free-gift-summary__image--no-border{border-color:transparent}.kaching-bundles .kaching-bundles__upsell{display:flex;align-items:center;justify-content:space-between;position:relative;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);margin-inline:1px;gap:5px 10px;background-color:var(--kaching-upsell-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__upsell.kaching-bundles__upsell--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__upsell--badge-border-all{margin:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-top{margin-top:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-bottom{margin-bottom:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-left{min-height:var(--badge-border-min-length, auto);margin-left:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-right{min-height:var(--badge-border-min-length, auto);margin-right:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--all{inset:calc(-1 * var(--badge-border-thickness, 22px))}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--top{inset:calc(-1 * var(--badge-border-thickness, 22px)) 0 auto;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--bottom{inset:auto 0 calc(-1 * var(--badge-border-thickness, 22px));height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--left{inset:0 auto 0 calc(-1 * var(--badge-border-thickness, 22px));width:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--right{inset:0 calc(-1 * var(--badge-border-thickness, 22px)) 0 auto;width:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__upsell__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__upsell__link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__upsell__image{width:auto;height:var(--kaching-upsell-image-height, 30px);border-radius:var(--kaching-upsell-image-border-radius, 0)}.kaching-bundles .kaching-bundles__upsell__checkbox{all:unset;display:flex;flex-shrink:0;width:16px;height:16px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;margin-inline-end:4px;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell__checkbox.kaching-bundles__upsell__checkbox--selected{border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell__text{display:flex;min-height:30px;align-items:center;cursor:pointer;overflow-wrap:break-word;color:var(--kaching-upsell-text-color, #000);font-size:var(--kaching-upsell-font-size, 13px);font-weight:var(--kaching-upsell-font-weight, bold);font-style:var(--kaching-upsell-font-style, normal)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell__text{color:var(--kaching-upsell-selected-text-color, #000)}.kaching-bundles .kaching-bundles__upsell__pricing{align-items:flex-end;display:flex;flex-direction:column;flex-shrink:0}.kaching-bundles .kaching-bundles__upsell__pricing-row{display:flex;align-items:baseline;gap:6px}.kaching-bundles .kaching-bundles__upsell__price{font-size:var(--kaching-upsell-font-size, 13px);font-weight:var(--bar-title-font-weight);font-style:var(--bar-title-font-style);color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__upsell__pricing-row--secondary .kaching-bundles__upsell__price{font-size:calc(var(--kaching-upsell-font-size, 13px) - 1px)}.kaching-bundles .kaching-bundles__upsell__full-price,.kaching-bundles .kaching-bundles__upsell__unit-price{font-size:calc(var(--kaching-upsell-font-size, 13px) - 1px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__upsell__full-price{text-decoration:line-through}.kaching-bundles .kaching-bundles__upsell__unit-price{text-transform:uppercase}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__free-gift{flex-direction:column;padding-inline-end:8px}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__upsell{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__upsell__pricing{flex-direction:row;gap:5px;align-items:center}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-free-gift-selected-background-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-all .kaching-bundles__free-gift:last-child,.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__free-gift:last-child{margin-inline:0;margin-block-end:0;border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__free-gift:last-child{border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-upsell-selected-background-color, rgba(0, 0, 0, .2))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-all,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-left{margin-left:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-all,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-right{margin-right:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-all:last-child,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-bottom:last-child{margin-block-end:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gifts{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift{display:flex;align-items:center;justify-content:space-between;margin-inline:1px;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);gap:5px 10px;background-color:var(--bar-border-color, #fff)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__link{pointer-events:none}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__main:has(.kaching-bundles__swatch-buttons){overflow-x:auto}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-deal-bar-progressive-gift-image-size, 40px);border-radius:var(--kaching-deal-bar-progressive-gift-corner-radius, 0)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__image--locked-product{opacity:.4}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-text-color, #000);font-size:var(--kaching-deal-bar-progressive-gift-text-size, 14px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-selected-text-color, #fff);font-weight:500}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__labels{display:flex;align-items:center;gap:5px}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__label{background-color:var(--kaching-deal-bar-progressive-gift-label-background-color);color:var(--kaching-deal-bar-progressive-gift-label-text-color);font-size:var(--kaching-deal-bar-progressive-gift-label-text-size, 12px);padding:2px 8px;border-radius:16px;white-space:nowrap;font-weight:500}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__label-crossed-out{text-decoration:line-through}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__lock-icon{display:flex;align-items:center;justify-content:center;color:var(--kaching-deal-bar-progressive-gift-locked-icon-color, #667085)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__lock-icon svg{width:auto;height:100%}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--locked .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-locked-text-color, #555);font-size:var(--kaching-deal-bar-progressive-gift-locked-text-size, 14px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--locked .kaching-bundles__deal-bar-progressive-gift__label{background-color:var(--kaching-deal-bar-progressive-gift-locked-label-background-color);color:var(--kaching-deal-bar-progressive-gift-locked-label-text-color);font-size:var(--kaching-deal-bar-progressive-gift-locked-label-text-size, 12px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--bar-selected-border-color)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__product-personalisation{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;gap:10px;background-color:#fafafa;border-radius:calc(var(--bar-border-radius, 10px) - 4px);border:1px dashed #d6d6d6;margin-top:12px;cursor:pointer}.kaching-bundles .kaching-bundles__product-personalisation--filled{border-style:solid}.kaching-bundles .kaching-bundles__product-personalisation__main{display:flex;align-items:center;gap:10px;min-width:0;flex:1}.kaching-bundles .kaching-bundles__product-personalisation__image-wrapper{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--kaching-product-personalisation-image-height, 40px);height:var(--kaching-product-personalisation-image-height, 40px);background-color:#fff;border-radius:calc(var(--bar-border-radius, 10px) - 6px);border:1px solid #d6d6d6}.kaching-bundles .kaching-bundles__product-personalisation__image{display:flex;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.kaching-bundles .kaching-bundles__product-personalisation__image--default{width:70%;height:70%;-o-object-fit:contain;object-fit:contain;opacity:.7;color:#000}.kaching-bundles .kaching-bundles__product-personalisation__content{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}.kaching-bundles .kaching-bundles__product-personalisation__title{color:#000;font-size:14px;font-weight:600;font-style:normal}.kaching-bundles .kaching-bundles__product-personalisation__subtitle{color:#555;font-size:13px;font-weight:400;font-style:normal}.kaching-bundles .kaching-bundles__product-personalisation__pricing{display:flex;flex-direction:column;align-items:flex-end;flex-shrink:0;gap:2px}.kaching-bundles .kaching-bundles__product-personalisation__price{font-size:14px;font-weight:500;font-style:normal;color:#000}.kaching-bundles .kaching-bundles__product-personalisation__compare-at-price{font-size:12px;font-weight:400;font-style:normal;color:#888;line-height:1.2;text-decoration:line-through}.kaching-bundles .kaching-bundles__product-personalisation__price .kaching-bundles__product-personalisation__unit-label{font-size:calc(var(--kaching-bundles-unit-label-font-size, 14px) - 4px);font-weight:var(--kaching-bundles-unit-label-font-weight, normal);font-style:var(--kaching-bundles-unit-label-font-style, normal)}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation{flex-direction:column;align-items:stretch;text-align:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation__main{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation__pricing{flex-direction:row;justify-content:center;gap:8px;align-items:baseline}.kaching-bundles .kaching-bundles__personalisation-modal-overlay{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-product-personalisation-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__personalisation-modal-overlay--inline{position:relative;z-index:auto;inset:auto;padding:20px;border-radius:var(--kaching-product-personalisation-radius, 16px)}.kaching-bundles .kaching-bundles__personalisation-modal-overlay__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__personalisation-modal{display:flex;flex-direction:column;padding:var(--kaching-product-personalisation-gap-0, 20px);border-radius:var(--kaching-product-personalisation-radius, 16px);background-color:#fff}.kaching-bundles .kaching-bundles__personalisation-modal__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--kaching-product-personalisation-gap-0, 20px);color:var(--kaching-product-personalisation-primary-text-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__heading{margin:0;font-weight:650;font-size:var(--kaching-product-personalisation-font-0, 24px)}.kaching-bundles .kaching-bundles__personalisation-modal__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__personalisation-modal__items{display:flex;flex-direction:column;gap:var(--kaching-product-personalisation-gap-1, 16px);padding:var(--kaching-product-personalisation-gap-1, 16px);border:1px solid #e9e9e9;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px)}.kaching-bundles .kaching-bundles__personalisation-modal__item{display:flex;flex-direction:column;gap:var(--kaching-product-personalisation-gap-2, 12px)}.kaching-bundles .kaching-bundles__personalisation-modal__item-info{display:flex;align-items:center;gap:var(--kaching-product-personalisation-gap-2, 12px)}.kaching-bundles .kaching-bundles__personalisation-modal__item-image-wrapper{flex-shrink:0;width:var(--kaching-product-personalisation-image-size, 48px);height:var(--kaching-product-personalisation-image-size, 48px);border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);border:1px solid #e9e9e9;overflow:hidden}.kaching-bundles .kaching-bundles__personalisation-modal__item-image{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__personalisation-modal__item-details{display:flex;flex-direction:column;gap:2px;min-width:0}.kaching-bundles .kaching-bundles__personalisation-modal__item-title{font-size:var(--kaching-product-personalisation-text-size, 16px);font-weight:600;color:var(--kaching-product-personalisation-primary-text-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__item-variant{font-size:var(--kaching-product-personalisation-font-3, 12px);color:var(--kaching-product-personalisation-secondary-text-color, rgb(115, 115, 115))}.kaching-bundles .kaching-bundles__personalisation-modal__input-wrapper{display:flex;flex-direction:column;gap:4px}.kaching-bundles .kaching-bundles__personalisation-modal__input-container{position:relative;display:flex;align-items:center}.kaching-bundles .kaching-bundles__personalisation-modal__input-clear{all:unset;position:absolute;right:12px;display:flex;align-items:center;justify-content:center;width:16px;height:16px;cursor:pointer}.kaching-bundles .kaching-bundles__personalisation-modal__input{width:100%;padding:10px 12px;border:1px solid #e9e9e9;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);font-size:var(--kaching-product-personalisation-font-2, 16px);outline:none!important;box-shadow:none!important;box-sizing:border-box}.kaching-bundles .kaching-bundles__personalisation-modal__input:focus{border-color:#333;outline:none!important;box-shadow:none!important}.kaching-bundles .kaching-bundles__personalisation-modal__input:focus-visible{outline:2px solid #333!important;outline-offset:-1px}.kaching-bundles .kaching-bundles__personalisation-modal__input::-moz-placeholder{color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input::placeholder{color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input--with-clear{padding-right:40px}.kaching-bundles .kaching-bundles__personalisation-modal__input--error{border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input--error:focus{border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input-counter{font-size:var(--kaching-product-personalisation-font-3, 12px);color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input-counter--error{color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input-error{font-size:var(--kaching-product-personalisation-font-3, 12px);color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__actions{display:flex;gap:var(--kaching-product-personalisation-gap-1, 16px);margin-top:var(--kaching-product-personalisation-gap-0, 20px)}.kaching-bundles .kaching-bundles__personalisation-modal__button{flex:1;padding:12px 16px;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);font-size:var(--kaching-product-personalisation-font-2, 16px);font-weight:500;cursor:pointer;border:none;box-shadow:0 1px 2px #0a0d120d}.kaching-bundles .kaching-bundles__personalisation-modal__button--cancel{background:#fff;color:#333;border:1px solid #d5d7da}.kaching-bundles .kaching-bundles__personalisation-modal__button--confirm{color:var(--kaching-product-personalisation-button-text-color, rgb(255, 255, 255));border:1px solid var(--kaching-product-personalisation-button-color, rgb(0, 0, 0));background:var(--kaching-product-personalisation-button-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__button--disabled{cursor:not-allowed;border:1px solid #e9eaeb;background:#eaecf0;color:#98a2b3}.kaching-bundles .kaching-bundles__progressive-gifts{display:flex;flex-direction:column;gap:calc(10px * var(--block-spacing, 1) + 4px);margin-top:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__header{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__progressive-gifts__title{color:var(--kaching-bundles-progressive-gifts-title-color, #000);text-align:var(--kaching-bundles-progressive-gifts-title-alignment, center);font-weight:var(--kaching-bundles-progressive-gifts-title-weight, bold);font-style:var(--kaching-bundles-progressive-gifts-title-style, normal);font-size:var(--kaching-bundles-progressive-gifts-title-size, 20px)}.kaching-bundles .kaching-bundles__progressive-gifts__subtitle{color:var(--kaching-bundles-progressive-gifts-subtitle-color, #000);text-align:var(--kaching-bundles-progressive-gifts-subtitle-alignment, center);font-weight:var(--kaching-bundles-progressive-gifts-subtitle-weight, 450);font-style:var(--kaching-bundles-progressive-gifts-subtitle-style, normal);font-size:var(--kaching-bundles-progressive-gifts-subtitle-size, 16px)}.kaching-bundles .kaching-bundles__progressive-gifts__gifts{display:grid;grid-template-columns:repeat(auto-fit,minmax(0,1fr));justify-content:center;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gift{position:relative;display:flex;flex-direction:column;align-items:center;padding:calc(10px * var(--block-spacing, 1));gap:calc(6px * var(--block-spacing, 1));border-radius:var(--kaching-bundles-progressive-gifts-border-radius);background-color:var(--kaching-bundles-progressive-gifts-background-color);box-shadow:inset 0 0 0 2px var(--kaching-bundles-progressive-gifts-border-color, #000)}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked{background-color:var(--kaching-bundles-progressive-gifts-locked-background-color);box-shadow:inset 0 0 0 1px var(--kaching-bundles-progressive-gifts-locked-border-color, rgba(0, 0, 0, .3));cursor:pointer}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:hover,.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:focus{box-shadow:inset 0 0 0 2px var(--kaching-bundles-progressive-gifts-locked-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:focus{outline:none}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__progressive-gifts__gift__content{display:flex;flex-direction:column;max-width:100%;gap:calc(6px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image-wrapper{display:flex;flex-shrink:0;align-items:center;justify-content:center;height:var(--kaching-bundles-progressive-gifts-image-size, 100px);width:initial;max-width:100%;margin-top:max(0px,(100px - var(--kaching-bundles-progressive-gifts-image-size, 100px)) / 5);color:var(--kaching-bundles-progressive-gifts-locked-icon-color, #667085);border-radius:calc(var(--kaching-bundles-progressive-gifts-border-radius) / 2);background-color:transparent}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image-wrapper svg{width:auto;height:100%}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image{-o-object-fit:contain;object-fit:contain;max-height:100%;max-width:100%;border-radius:calc(var(--kaching-bundles-progressive-gifts-border-radius) / 2);width:initial}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image--locked-product{opacity:.4}.kaching-bundles .kaching-bundles__progressive-gifts__gift__details{display:flex;flex-direction:column;gap:4px;align-items:center;min-width:0}.kaching-bundles .kaching-bundles__progressive-gifts__gift__details__content{display:flex;align-items:center;gap:8px}.kaching-bundles .kaching-bundles__progressive-gifts__gift__title{font-weight:500;text-align:center;color:var(--kaching-bundles-progressive-gifts-text-color, #000);font-size:var(--kaching-bundles-progressive-gifts-text-size, 14px)}.kaching-bundles .kaching-bundles__progressive-gifts__gift__title.kaching-bundles__progressive-gifts__gift__title--locked{color:var(--kaching-bundles-progressive-gifts-locked-text-color, #555);font-size:var(--kaching-bundles-progressive-gifts-locked-text-size, 14px)}.kaching-bundles .kaching-bundles__progressive-gifts__gift:not(.kaching-bundles__progressive-gifts__gift--locked) .kaching-bundles__progressive-gifts__gift__image,.kaching-bundles .kaching-bundles__progressive-gifts__gift:not(.kaching-bundles__progressive-gifts__gift--locked) .kaching-bundles__progressive-gifts__gift__title{animation:kaching-progressive-gift-unlock .6s ease-out}@keyframes kaching-progressive-gift-unlock{0%{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label{display:flex;flex-direction:row;align-items:center;position:absolute;top:-8px;left:50%;transform:translate(-50%);line-height:1;gap:calc(5px * var(--block-spacing, 1));padding:calc(8px * var(--block-spacing, 1));background-color:var(--kaching-bundles-progressive-gifts-label-background-color, #eee);border-radius:var(--kaching-bundles-progressive-gifts-border-radius)}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label__text{font-weight:450;color:var(--kaching-bundles-progressive-gifts-label-text-color, #777);font-size:var(--kaching-bundles-progressive-gifts-label-text-size, 12px);white-space:nowrap}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label__text.kaching-bundles__progressive-gifts__gift__label__text--crossed-out{text-decoration:line-through}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift{flex-direction:row;justify-content:space-between;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__content{flex-direction:row;align-items:center;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__details{align-items:flex-start}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__image-wrapper{margin-top:0;height:var(--kaching-bundles-progressive-gifts-image-size, 50px);width:var(--kaching-bundles-progressive-gifts-image-size, 50px)}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__title{text-align:start}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__label{position:initial;transform:none}.kaching-bundles .kaching-bundles-savings-summary{display:flex;align-items:center;justify-content:var(--kaching-bundles-savings-summary-alignment, flex-start);gap:8px;padding:12px 16px;margin-top:calc(10px * var(--block-spacing, 1));background-color:var(--kaching-bundles-savings-summary-background-color, #f5fcf7);color:var(--kaching-bundles-savings-summary-text-color, #1b5933);border-style:solid;border-color:var(--kaching-bundles-savings-summary-border-color, #457757);border-width:var(--kaching-bundles-savings-summary-border-width, 1px);border-radius:var(--kaching-bundles-savings-summary-border-radius, 8px);font-size:var(--kaching-bundles-savings-summary-title-font-size, 14px);font-style:var(--kaching-bundles-savings-summary-title-font-style, normal);font-weight:var(--kaching-bundles-savings-summary-title-font-weight, 500)}.kaching-bundles .kaching-bundles-savings-summary__icon{display:flex;align-items:center;width:1.2em;height:1.2em;flex-shrink:0;color:var(--kaching-bundles-savings-summary-icon-color, #1c5632)}.kaching-bundles .kaching-bundles-savings-summary__icon svg{width:100%;height:100%}.kaching-bundles .kaching-bundles-savings-summary__icon img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles-savings-summary__value{color:var(--kaching-bundles-savings-summary-value-color, #000000)}.kaching-bundles .kaching-bundles__scratch-off{position:relative;display:flex;flex-direction:column;gap:calc(10px * var(--block-spacing, 1));margin:calc(5px * var(--block-spacing, 1)) 0}.kaching-bundles .kaching-bundles__scratch-off>.kaching-bundles__bar{margin:0}.kaching-bundles .kaching-bundles__scratch-off--unscratched{-webkit-user-select:none;-moz-user-select:none;user-select:none}.kaching-bundles .kaching-bundles__scratch-off--unscratched .kaching-bundles__bar{pointer-events:none}.kaching-bundles .kaching-bundles__scratch-off--revealing .kaching-bundles__bar-most-popular{animation:kaching-scratch-off-badge-pop .3s cubic-bezier(.34,1.56,.64,1) both}@keyframes kaching-scratch-off-badge-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.kaching-bundles .kaching-bundles__scratch-off--unscratched:not(.kaching-bundles__scratch-off--revealing) .kaching-bundles__bar-most-popular{visibility:hidden}.kaching-bundles .kaching-bundles__scratch-off--loading{visibility:hidden}.kaching-bundles .kaching-bundles__scratch-off-canvas{position:absolute;inset:0;width:100%;height:100%;border-radius:var(--bar-border-radius, 8px);cursor:pointer;touch-action:none;transition:opacity .3s ease-out;z-index:11}.kaching-bundles .kaching-bundles__scratch-off-canvas--revealing{opacity:0;pointer-events:none}.kaching-bundles .kaching-bundles__scratch-off-hint{position:absolute;inset:0;margin:auto;width:calc(100% - 10px);height:calc(100% - 10px);max-width:317px;max-height:143px;pointer-events:none;opacity:.4;transition:opacity .3s ease-out;z-index:12}.kaching-bundles .kaching-bundles__scratch-off-hint--hidden{opacity:0}.kaching-bundles .kaching-bundles__scratch-off-hint-path{stroke-dasharray:1200;stroke-dashoffset:1200;animation:kaching-scratch-off-hint-draw 2.8s cubic-bezier(.4,0,.2,1) infinite}@keyframes kaching-scratch-off-hint-draw{0%{stroke-dashoffset:1200;opacity:1}60%{stroke-dashoffset:0;opacity:1}80%{stroke-dashoffset:0;opacity:1}to{stroke-dashoffset:0;opacity:0}}.kaching-bundles .kaching-bundles__scratch-off-title{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;color:var(--scratch-off-title-color);font-weight:700;font-size:var(--scratch-off-title-size);line-height:1.25;text-align:center;pointer-events:none;transition:opacity .3s ease-out;z-index:12}.kaching-bundles .kaching-bundles__scratch-off-title--hidden{opacity:0}.kaching-bundles .kaching-bundles-sticky-atc{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:16px;box-shadow:0 0 10px #00000040;background-color:var(--kaching-bundles-sticky-atc-background-color, #fff)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__content{display:flex;align-items:center;gap:16px}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__image{display:var(--kaching-bundles-sticky-atc-image-display, block);width:auto;height:var(--kaching-bundles-sticky-atc-product-photo-size, 40px);border-radius:var(--kaching-bundles-sticky-atc-product-photo-corner-radius, 0)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__title{color:var(--kaching-bundles-sticky-atc-title-color, #000);font-size:var(--kaching-bundles-sticky-atc-title-font-size, 16px);font-style:var(--kaching-bundles-sticky-atc-title-font-style, normal);font-weight:var(--kaching-bundles-sticky-atc-title-font-weight, 400)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__button{all:unset;white-space:nowrap;cursor:pointer;background-color:var(--kaching-bundles-sticky-atc-button-color, #303030);color:var(--kaching-bundles-sticky-atc-button-text-color, #fff);font-size:var(--kaching-bundles-sticky-atc-button-font-size, 16px);font-style:var(--kaching-bundles-sticky-atc-button-font-style, normal);font-weight:var(--kaching-bundles-sticky-atc-button-font-weight, 400);padding:var(--kaching-bundles-sticky-atc-button-padding, 15px);border-radius:var(--kaching-bundles-sticky-atc-button-corner-radius, 8px)}@media (width < 750px){.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__image{display:var(--kaching-bundles-sticky-atc-image-display-mobile, var(--kaching-bundles-sticky-atc-image-display, block));height:var(--kaching-bundles-sticky-atc-product-photo-size-mobile, var(--kaching-bundles-sticky-atc-product-photo-size, 40px));border-radius:var(--kaching-bundles-sticky-atc-product-photo-corner-radius-mobile, var(--kaching-bundles-sticky-atc-product-photo-corner-radius, 0))}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__title{font-size:var(--kaching-bundles-sticky-atc-title-font-size-mobile, var(--kaching-bundles-sticky-atc-title-font-size, 16px))}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__button{font-size:var(--kaching-bundles-sticky-atc-button-font-size-mobile, var(--kaching-bundles-sticky-atc-button-font-size, 16px));padding:var(--kaching-bundles-sticky-atc-button-padding-mobile, var(--kaching-bundles-sticky-atc-button-padding, 15px));border-radius:var(--kaching-bundles-sticky-atc-button-corner-radius-mobile, var(--kaching-bundles-sticky-atc-button-corner-radius, 8px))}}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal.kaching-bundles__bars{grid-template-columns:repeat(2,1fr)}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal .kaching-bundles__bar-wrapper{padding:10px 7px}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-container{border:2px dashed var(--bar-selected-border-color, #000);box-shadow:none}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-wrapper{margin:-2px}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-variants{display:flex}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__title{display:inline-block;overflow-wrap:break-word;font-weight:700;font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__subtitle{display:inline-block;overflow-wrap:break-word;font-size:var(--kaching-subscriptions-subtitle-font-size, 13px);color:var(--kaching-subscriptions-subtitle-color, #555)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__bar-price{font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__bar-full-price{font-size:var(--kaching-subscriptions-subtitle-font-size, 13px);color:var(--kaching-subscriptions-subtitle-color, #555)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__checkbox{all:unset;display:flex;flex-shrink:0;width:20px;height:20px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--link{display:flex;justify-content:center;align-items:center;padding:8px 0}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__link{all:unset;cursor:pointer;display:inline;text-decoration:underline;text-underline-offset:3px;font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__timer{display:flex;align-items:center;background-color:var(--kaching-bundles-timer-background-color, #000);color:var(--kaching-bundles-timer-text-color, #fff);padding:10px 20px;border-radius:var(--bar-border-radius, 8px);margin-bottom:calc(8px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__timer-title{flex:1;text-align:var(--kaching-bundles-timer-title-alignment, center);font-size:var(--kaching-bundles-timer-title-size, 13px);font-weight:var(--kaching-bundles-timer-title-font-weight, bold);font-style:var(--kaching-bundles-timer-title-font-style, normal)}.kaching-bundles .kaching-bundles__swatch-dropdown{display:flex;position:relative;min-width:0;margin:0}.kaching-bundles .kaching-bundles__swatch{display:flex;flex-shrink:0;background-size:cover;background-position:center;overflow:hidden;position:relative;width:var(--kaching-swatch-size, 20px);height:var(--kaching-swatch-size, 20px);border:1px solid var(--kaching-swatch-border-color, #c2cdd6);background-color:var(--kaching-swatch-color, #fff);background-image:var(--kaching-swatch-image-url, none);border-radius:var(--kaching-swatch-border-radius, 0)}.kaching-bundles .kaching-bundles__swatch.kaching-bundles__swatch--unavailable{border-color:#121212;opacity:.4}.kaching-bundles .kaching-bundles__swatch.kaching-bundles__swatch--unavailable:after{content:"";position:absolute;bottom:0;left:0;width:140%;height:1px;background-color:#121212;transform:rotate(-45deg);transform-origin:left}.kaching-bundles .kaching-bundles__swatches-dropdown__color{display:flex;width:20px;height:20px;border:1px solid #c2cdd6;background-size:cover;background-position:center}.kaching-bundles .kaching-bundles__swatch-dropdown__options{display:flex;flex-direction:column;max-width:400px;max-height:500px;overflow:auto;position:fixed;top:0;left:0;border:1px solid #ccc;background-color:#fff;z-index:1000;box-shadow:0 20px 20px #1a1a1a47}.kaching-bundles .kaching-bundles__swatch-dropdown__option{font-size:14px;font-weight:400;font-style:normal;display:flex;align-items:center;gap:10px;white-space:nowrap;padding-block:10px;padding-inline:10px 60px;border:none;border-bottom:1px solid #dfe3e8;cursor:pointer;color:#000;background:none}.kaching-bundles .kaching-bundles__swatch-dropdown__option:last-child{border-bottom:none}.kaching-bundles .kaching-bundles__swatch-dropdown__option:hover,.kaching-bundles .kaching-bundles__swatch-dropdown__option--focused{background-color:#f0f0f0}.kaching-bundles .kaching-bundles__swatch-buttons{display:flex;overflow:auto}.kaching-bundles .kaching-bundles__swatch-buttons__button{display:flex;align-items:center;box-sizing:border-box;border:none;padding:9px;background:#fff;cursor:pointer;border-top:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-bottom:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button:first-of-type{border-start-start-radius:var(--bar-variant-select-border-radius, 0);border-end-start-radius:var(--bar-variant-select-border-radius, 0);border-inline-start:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button:last-of-type{border-start-end-radius:var(--bar-variant-select-border-radius, 0);border-end-end-radius:var(--bar-variant-select-border-radius, 0);border-inline-end:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected{padding:8px 7px;border:2px solid var(--bar-selected-border-color, #50b83c)}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected:first-of-type{padding-inline-start:8px}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected:last-of-type{padding-inline-end:8px}.kaching-bundles .kaching-bundles__bar-variant__content.kaching-bundles__bar-variant__content--with-option-names{align-items:flex-start}.kaching-bundles .kaching-bundles__bar-variant-option{display:flex;flex-direction:column;align-items:flex-start;gap:4px;min-width:0;max-width:100%}.kaching-bundles .kaching-bundles__bar-variant-option__name{font-size:13px;line-height:1.3}.kaching-bundles .kaching-bundles__bar-variant-option__name-label{font-weight:600}.kaching-bundles .kaching-bundles__bar-variant-option__name-value{font-weight:400;opacity:.85}.kaching-bundles .kaching-bundles__quantity-selector{display:flex;width:-moz-fit-content;width:fit-content;border:1px solid #cccccc;box-sizing:border-box;overflow:hidden;margin-top:5px;border-radius:calc(var(--bar-border-radius, 0) / 2)}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button{display:flex;align-items:center;justify-content:center;width:30px;height:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;background-color:#fff;color:#000;border-radius:0}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button:hover{background-color:#eee}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button.kaching-bundles__quantity-selector__button--disabled{cursor:not-allowed;pointer-events:none}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button.kaching-bundles__quantity-selector__button--disabled img{opacity:.5}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input{all:unset;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;height:30px;width:30px;padding:0;border:1px solid #cccccc;border-top:none;border-bottom:none;background-color:#fff;color:#000;text-align:center;font-size:16px;font-weight:400;box-sizing:border-box}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input::-webkit-outer-spin-button,.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none;margin:0}.kaching-bundles .kaching-bundles__highlights{display:flex;flex-direction:column;gap:8px;padding:10px 0}.kaching-bundles .kaching-bundles__highlights--horizontal{flex-flow:row wrap}.kaching-bundles .kaching-bundles__highlights__item{display:flex;gap:8px}.kaching-bundles .kaching-bundles__highlights__icon{display:flex;align-items:center;flex-shrink:0;color:var(--kaching-highlights-icon-color, #000);width:var(--kaching-highlights-icon-size, 16px);height:var(--kaching-highlights-icon-size, 16px)}.kaching-bundles .kaching-bundles__highlights__icon svg{width:100%;height:100%}.kaching-bundles .kaching-bundles__highlights__icon img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__highlights__text{color:var(--kaching-highlights-text-color, #808080);font-size:var(--kaching-highlights-text-size, 16px);line-height:1.3}.kaching-bundles .kaching-bundles__low-stock-alert{color:var(--kaching-bundles-low-stock-alert-text-color, #ff0909);font-size:14px}.kaching-bundles img{width:initial}.kaching-bundles svg{width:initial;height:initial}.kaching-bundles .kaching-bundles__block{display:flex;flex-direction:column;width:100%;margin-top:15px;margin-bottom:10px;text-align:start;line-height:1.4;font-family:var(--block-font-family, inherit)}.kaching-bundles .kaching-bundles__block--hidden{display:none!important}.kaching-bundles .kaching-bundles__block.kaching-bundles__block--loaded{display:flex}.kaching-bundles .kaching-bundles__block-title{display:flex;align-items:center;text-align:center;gap:8px;margin-top:10px;margin-bottom:10px;color:var(--block-block-title-color, #000);font-size:var(--block-title-font-size, 14px);font-weight:var(--block-title-font-weight, bold);font-style:var(--block-title-font-style)}.kaching-bundles .kaching-bundles__block>.kaching-bundles__block-title:first-child{margin-top:0}.kaching-bundles .kaching-bundles__block-title:before,.kaching-bundles .kaching-bundles__block-title:after{content:"";flex-grow:1;height:2px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bars{display:flex;flex-direction:column;position:relative}.kaching-bundles .kaching-bundles__bars--badge-border-all{--badge-ring-outer: calc( var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px) );padding:var(--badge-ring-outer)}.kaching-bundles .kaching-bundles__bars--badge-border-top{padding-top:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-bottom{padding-bottom:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-left{padding-left:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-right{padding-right:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-left,.kaching-bundles .kaching-bundles__bars--badge-border-right{min-height:var(--badge-border-min-length, auto);border-radius:var(--bar-border-radius, 8px);box-shadow:0 1px 10px var(--badge-border-wrap-color, rgba(0, 0, 0, .12))}.kaching-bundles .kaching-bundles__bars--badge-border-all,.kaching-bundles .kaching-bundles__bars--badge-border-top,.kaching-bundles .kaching-bundles__bars--badge-border-bottom{row-gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__subscriptions-wrapper{position:relative}.kaching-bundles .kaching-bundles__bar{display:flex;flex:1;margin:calc(5px * var(--block-spacing, 1)) 0;position:relative}.kaching-bundles .kaching-bundles__bars--badge-border-all>.kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-all>.kaching-bundles__scratch-off,.kaching-bundles .kaching-bundles__bars--badge-border-top>.kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-top>.kaching-bundles__scratch-off,.kaching-bundles .kaching-bundles__bars--badge-border-bottom>.kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-bottom>.kaching-bundles__scratch-off{margin-block:0}.kaching-bundles .kaching-bundles__bar--disabled{opacity:.3}.kaching-bundles .kaching-bundles__bar-container--sold-out{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--kaching-bundles-show-as-sold-out-opacity, .3)}.kaching-bundles .kaching-bundles__bar-sold-out-badge{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:6px 12px;border-radius:8px;font-weight:600;background-color:var(--kaching-bundles-show-as-sold-out-background-color, #000);color:var(--kaching-bundles-show-as-sold-out-text-color, #fff);font-size:var(--kaching-bundles-show-as-sold-out-text-size, 13px);z-index:10;text-align:center}.kaching-bundles .kaching-bundles__bar>input[type=radio]{display:none}.kaching-bundles .kaching-bundles__bar-image{-o-object-fit:contain;object-fit:contain;height:var(--bar-image-size, 48px);width:var(--bar-image-size, 48px);border-radius:var(--bar-image-border-radius, 0)}.kaching-bundles .kaching-bundles__bar-radio{display:flex;flex-shrink:0;width:20px;height:20px;border-radius:50%;background:#fff;border:3px solid #fff;box-sizing:border-box;box-shadow:0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-radio{background:var(--bar-selected-border-color, #000);box-shadow:0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container{display:flex!important;flex-direction:column;justify-content:center;align-items:initial;position:relative;box-sizing:border-box;cursor:pointer;width:100%;margin:0;padding:0;border:none;background-color:var(--bar-background-color, #fff);border-radius:var(--bar-border-radius);box-shadow:inset 0 0 0 1px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-wrapper{padding:calc(10px * var(--block-spacing, 1)) calc(15px * var(--block-spacing, 1) + 5px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__bar-wrapper{position:relative;z-index:1;flex:1;box-sizing:border-box;min-height:var(--badge-border-min-length, auto);padding:calc(10px * var(--block-spacing, 1)) calc(15px * var(--block-spacing, 1) + 5px);background-color:var(--bar-background-color, #fff);border-radius:var(--bar-border-radius);display:flex;flex-direction:column;justify-content:center}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__bar-wrapper{margin-inline-start:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border-start-start-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__bar-wrapper{margin-inline-end:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border-start-end-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container:hover{opacity:1;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-container:has(:focus-visible){opacity:1;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-container *{letter-spacing:normal;text-transform:initial}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container{cursor:default;background-color:var(--bar-selected-background-color);box-shadow:inset 0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-most-popular{position:absolute;z-index:3}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--simple{top:-8px;right:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--fancy{top:-27px;right:-15px}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--custom{top:-25px;right:-15px}.kaching-bundles .kaching-bundles__bar-most-popular--custom .kaching-bundles__bar-most-popular__custom-image{max-height:var(--badge-size, 56px);width:auto;display:block}.kaching-bundles .kaching-bundles__bar-most-popular svg{color:var(--bar-most-popular-background-color)}.kaching-bundles .kaching-bundles__bar-most-popular svg .most-popular-text{fill:var(--bar-most-popular-color)}.kaching-bundles .kaching-bundles__bar-most-popular--fancy svg{width:var(--badge-size, 102px);height:auto}.kaching-bundles .kaching-bundles__bar-most-popular__content{margin:0 8px;padding:6px 8px;border-radius:0 0 5px 5px;font-family:sans-serif;font-size:var(--badge-text-size, 12px);font-weight:700;line-height:1;color:var(--bar-most-popular-color, #fff);background-color:var(--bar-most-popular-background-color)}.kaching-bundles .kaching-bundles__badge-border{position:absolute;z-index:1;display:flex;box-sizing:border-box;overflow:hidden;align-items:center;justify-content:center;font-family:sans-serif;font-size:max(6px,min(var(--badge-text-size, 12px),var(--badge-border-thickness, 22px) - 6px));font-weight:700;line-height:1;letter-spacing:normal;color:var(--bar-most-popular-color, #fff);background-color:var(--bar-most-popular-background-color, #000)}.kaching-bundles .kaching-bundles__badge-border--top{inset:0 0 auto;height:var(--badge-border-thickness, 22px);border-radius:var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0 0}.kaching-bundles .kaching-bundles__badge-border--bottom{inset:auto 0 0;height:var(--badge-border-thickness, 22px);border-radius:0 0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px)}.kaching-bundles .kaching-bundles__badge-border--left{inset:0 auto 0 0;width:var(--badge-border-thickness, 22px);border-radius:var(--bar-border-radius, 8px) 0 0 var(--bar-border-radius, 8px)}.kaching-bundles .kaching-bundles__badge-border__side{position:absolute;display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap}.kaching-bundles .kaching-bundles__badge-border .kaching-bundles__badge-border__text,.kaching-bundles .kaching-bundles__badge-border .kaching-bundles__badge-border__side{letter-spacing:normal}.kaching-bundles .kaching-bundles__badge-border__curve{position:absolute;inset:0;width:100%;height:100%}.kaching-bundles .kaching-bundles__badge-border__curve text{font-family:sans-serif;font-size:max(6px,min(var(--badge-text-size, 12px),var(--badge-border-thickness, 22px) - 6px));font-weight:700;letter-spacing:normal;fill:var(--bar-most-popular-color, #fff)}.kaching-bundles .kaching-bundles__badge-border--all{inset:0;background-color:transparent;pointer-events:none}.kaching-bundles .kaching-bundles__badge-border__band{display:block;position:absolute;inset:0;padding:var(--badge-border-thickness, 22px);border-radius:calc(var(--bar-border-radius, 8px) + var(--badge-ring-outer));background-color:var(--bar-most-popular-background-color, #000);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}.kaching-bundles .kaching-bundles__badge-border__side--top{inset:0 0 auto;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__badge-border__side--bottom{inset:auto 0 0;height:var(--badge-border-thickness, 22px);transform:rotate(180deg)}.kaching-bundles .kaching-bundles__badge-border__side--left{inset:var(--badge-border-thickness, 22px) auto var(--badge-border-thickness, 22px) 0;width:var(--badge-border-thickness, 22px);writing-mode:vertical-rl;transform:rotate(180deg)}.kaching-bundles .kaching-bundles__badge-border__side--right{inset:var(--badge-border-thickness, 22px) 0 var(--badge-border-thickness, 22px) auto;width:var(--badge-border-thickness, 22px);writing-mode:vertical-rl}.kaching-bundles .kaching-bundles__badge-border--left .kaching-bundles__badge-border__text{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap;text-align:center}.kaching-bundles .kaching-bundles__badge-border--right{inset:0 0 0 auto;width:var(--badge-border-thickness, 22px);border-radius:0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0}.kaching-bundles .kaching-bundles__badge-border--right .kaching-bundles__badge-border__text{writing-mode:vertical-rl;white-space:nowrap;text-align:center}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--all{inset:calc(-1 * var(--badge-ring-outer))}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--top{inset:0 0 auto;height:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0 0;display:flex;align-items:flex-start;justify-content:center;-webkit-mask:linear-gradient(#000,#000) left top/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat;mask:linear-gradient(#000,#000) left top/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--top .kaching-bundles__badge-border__text{display:flex;align-items:center;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--bottom{inset:auto 0 0;height:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:0 0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px);display:flex;align-items:flex-end;justify-content:center;-webkit-mask:linear-gradient(#000,#000) left bottom/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat;mask:linear-gradient(#000,#000) left bottom/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--bottom .kaching-bundles__badge-border__text{display:flex;align-items:center;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--left{inset:0 auto 0 0;width:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:var(--bar-border-radius, 8px) 0 0 var(--bar-border-radius, 8px);display:flex;align-items:center;justify-content:flex-start;-webkit-mask:linear-gradient(#000,#000) left top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat;mask:linear-gradient(#000,#000) left top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--right{inset:0 0 0 auto;width:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0;display:flex;align-items:center;justify-content:flex-end;-webkit-mask:linear-gradient(#000,#000) right top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat;mask:linear-gradient(#000,#000) right top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--left .kaching-bundles__badge-border__text,.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--right .kaching-bundles__badge-border__text{display:flex;align-items:center;justify-content:center;width:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-all{--badge-ring-outer: calc( var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px) );margin:var(--badge-ring-outer)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top,.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom,.kaching-bundles .kaching-bundles__bar-container--badge-border-left,.kaching-bundles .kaching-bundles__bar-container--badge-border-right{--badge-concave-extra: max( 0px, var(--badge-concave-depth, 8px) - var(--badge-border-gap, 0px) )}.kaching-bundles .kaching-bundles__bar-container--badge-border-top{box-shadow:none}.kaching-bundles .kaching-bundles__bar-container--badge-border-top:after{content:"";position:absolute;inset:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px)) 0 0;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-top:var(--badge-border-gap-border, none);border-start-start-radius:var(--badge-concave-depth, 8px);border-start-end-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-top:after{border-width:2px;border-color:var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom{box-shadow:none}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:after{content:"";position:absolute;inset:0 0 calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-bottom:var(--badge-border-gap-border, none);border-start-start-radius:var(--bar-border-radius);border-start-end-radius:var(--bar-border-radius);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-bottom:after{border-width:2px;border-color:var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left,.kaching-bundles .kaching-bundles__bar-container--badge-border-right{box-shadow:none;background-color:transparent;min-height:var(--badge-border-min-length, auto)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-top:has(:focus-visible),.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:has(:focus-visible),.kaching-bundles .kaching-bundles__bar-container--badge-border-left:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-left:has(:focus-visible),.kaching-bundles .kaching-bundles__bar-container--badge-border-right:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-right:has(:focus-visible),.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-top,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-bottom,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-left,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-right{box-shadow:none}.kaching-bundles .kaching-bundles__bar-container--badge-border-left:after{content:"";position:absolute;inset:0 0 0 calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-left:var(--badge-border-gap-border, none);border-start-start-radius:var(--badge-concave-depth, 8px);border-start-end-radius:var(--bar-border-radius);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar-container--badge-border-right:after{content:"";position:absolute;inset:0 calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px)) 0 0;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-right:var(--badge-border-gap-border, none);border-start-start-radius:var(--bar-border-radius);border-start-end-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-left:after,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-right:after{border-width:2px;border-color:var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-most-popular__content:before,.kaching-bundles .kaching-bundles__bar-most-popular__content:after{display:block;position:absolute;top:0;width:0;height:0;content:"";border-bottom:8px solid var(--bar-most-popular-background-color, transparent);filter:brightness(.7)}.kaching-bundles .kaching-bundles__bar-most-popular__content:before{left:0;border-left:8px solid transparent}.kaching-bundles .kaching-bundles__bar-most-popular__content:after{right:0;border-right:8px solid transparent}@media (width >= 750px){.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--fancy,.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--custom{right:-20px}}.kaching-bundles .kaching-bundles__bar-main{display:flex;align-items:center;gap:18px;min-height:55px}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-main{cursor:pointer}.kaching-bundles .kaching-bundles__bar-content{align-items:center;justify-content:space-between;display:flex;gap:8px;flex:1}.kaching-bundles .kaching-bundles__bar-content-left{display:flex;flex-direction:column;flex:1;align-items:flex-start}.kaching-bundles .kaching-bundles__bar-first-line{display:flex;flex-wrap:wrap;-moz-column-gap:8px;column-gap:8px;align-items:center}.kaching-bundles .kaching-bundles__bar-second-line{display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:10px;column-gap:10px}.kaching-bundles .kaching-bundles__bar-title{display:inline-block;overflow-wrap:break-word;font-size:var(--bar-title-font-size, 20px);font-weight:var(--bar-title-font-weight, 500);font-style:var(--bar-title-font-style);color:var(--bar-title-color, #000)}.kaching-bundles .kaching-bundles__bar-label{display:inline-flex;align-items:center;justify-content:center;gap:4px;vertical-align:top;padding:4px 8px;overflow-wrap:break-word;background-color:var(--bar-label-background-color, #eee);color:var(--bar-label-color, #777);font-size:var(--bar-label-font-size, 12px);font-weight:var(--bar-label-font-weight);font-style:var(--bar-label-font-style);border-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-subtitle{overflow-wrap:break-word;font-size:var(--bar-subtitle-font-size, 14px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-subtitle-color, #555)}.kaching-bundles .kaching-bundles__bar-pricing{align-items:flex-end;display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__bars--hide-prices .kaching-bundles__bar-pricing{display:none}.kaching-bundles .kaching-bundles__bar-pricing-row{display:flex;align-items:baseline;gap:6px}.kaching-bundles .kaching-bundles__bar-price{font-size:var(--bar-title-font-size, 20px);font-weight:var(--bar-title-font-weight, 500);font-style:var(--bar-title-font-style);color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__bar-price .kaching-bundles__bar-price__unit-label{font-size:var(--kaching-bundles-unit-label-font-size, 14px);font-weight:var(--kaching-bundles-unit-label-font-weight, normal);font-style:var(--kaching-bundles-unit-label-font-style)}.kaching-bundles .kaching-bundles__bar-pricing-row--secondary .kaching-bundles__bar-price{font-size:var(--bar-subtitle-font-size)}.kaching-bundles .kaching-bundles__bar-full-price,.kaching-bundles .kaching-bundles__bar-unit-price{font-size:var(--bar-subtitle-font-size, 14px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__bar-full-price{text-decoration:line-through}.kaching-bundles .kaching-bundles__bar-unit-price{text-transform:uppercase}.kaching-bundles .kaching-bundles__bar-variants{display:none;flex-direction:column;align-items:flex-start}.kaching-bundles .kaching-bundles__bar-variant{flex:1;max-width:100%}.kaching-bundles .kaching-bundles__bar-variants .kaching-bundles__bar-variant{margin-top:5px}.kaching-bundles .kaching-bundles__bar-variant__content{display:flex;align-items:center}.kaching-bundles .kaching-bundles__invalid-variant-error{color:red;font-size:12px;padding-bottom:2px}.kaching-bundles .kaching-bundles__bar-variant-names{font-size:12px;color:var(--bar-subtitle-color, #555);margin-block:3px}.kaching-bundles .kaching-bundles__bar-variant-names>span:not(:last-child):after{content:", "}.kaching-bundles .kaching-bundles__bar-variant-number{font-size:12px;margin-right:2px;min-width:20px;display:inline-flex;color:var(--bar-title-color, #000)}.kaching-bundles .kaching-bundles__bar-variant-image{width:initial;max-width:40px;max-height:40px;border-radius:calc(var(--bar-border-radius, 0) / 2);margin-right:7px}.kaching-bundles .kaching-bundles__bar-variant-main{display:flex;flex-direction:column;min-width:0}.kaching-bundles .kaching-bundles__bar-variant-selects{display:flex;min-width:0;margin-right:2px;margin-bottom:2px;flex-wrap:wrap;gap:7px}.kaching-bundles .kaching-bundles__bar-variant-select{font-size:14px;font-weight:400;font-style:normal;font-family:var(--block-font-family, inherit);-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:7px 25px 7px 7px;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;background-image:url("data:image/svg+xml;utf8,<svg width='10' height='4' viewBox='0 0 10 4' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 4L0.669872 0.25L9.33013 0.249999L5 4Z' fill='black'/></svg>")!important;background-repeat:no-repeat!important;background-position:right 8px center!important;background-color:#fff;background-size:initial;color:#000;outline:none;max-width:100%;width:auto;height:auto;min-height:auto;display:flex;align-items:center;gap:10px;cursor:pointer;box-shadow:inset 0 0 0 1px var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:var(--bar-variant-select-border-radius, 0)}.kaching-bundles .kaching-bundles__bar-variant-select span{overflow:hidden;text-overflow:ellipsis}.kaching-bundles .kaching-bundles__bar-variant-selector-wrapper{display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:10px;column-gap:10px;max-width:100%}.kaching-bundles .kaching-bundles__selling-plan-select{width:100%}.kaching-bundles .kaching-bundles__bar-selling-plan{margin-top:5px;margin-bottom:5px}.kaching-bundles .kaching-bundles__bar-variant--invalid .kaching-bundles__bar-variant-select{box-shadow:0 0 0 1px red}.kaching-bundles .kaching-bundles__bar-variant-select:hover{border:none;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-variant-select:focus{border:none;box-shadow:inset 0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-variant--invalid .kaching-bundles__bar-variant-select:is(:hover,:focus){box-shadow:0 0 0 2px red}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-variants,.kaching-bundles .kaching-bundles__bar-variants--visible{display:flex}.kaching-bundles .kaching-bundles__out-of-stock{background-color:#ff2d2d4d;border:1px solid #ff2c2c;color:#df2121;padding:8px 12px;margin:5px 0;font-size:14px}.kaching-bundles .kaching-bundles__bars--horizontal.kaching-bundles__bars{display:grid;grid-template-columns:repeat(var(--bundle-bars-per-row, 3),1fr);gap:calc(10px * var(--block-spacing, 1));overflow-x:auto}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar{position:relative}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 7px 10px;height:100%}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-main{flex-direction:column;gap:10px;text-align:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-content{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-content-left{align-items:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-second-line{justify-content:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-label{position:absolute;top:0;left:0;right:0;margin-right:0;border-top-left-radius:var(--bar-label-border-top-radius);border-top-right-radius:var(--bar-label-border-top-radius)}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-pricing{align-items:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-variants{align-items:center;margin-top:10px;margin-bottom:5px}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-variant-selector-wrapper{justify-content:center}.kaching-bundles .kaching-bundles__bars--grid.kaching-bundles__bars{display:grid;grid-template-columns:repeat(2,1fr);gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar{margin:0}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar-radio{display:none}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-container,.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-container:hover,.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar--selected .kaching-bundles__bar-container{box-shadow:none}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-pricing{flex-direction:row;gap:10px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--simple) .kaching-bundles__bar-main{margin-top:7px;margin-bottom:7px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--fancy) .kaching-bundles__bar-pricing{margin-top:18px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--custom) .kaching-bundles__bar-pricing{margin-top:18px}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--simple) .kaching-bundles__bar-variants{margin-top:-7px}.kaching-bundles .kaching-bundles__bar-full-price:before,.kaching-bundles .kaching-bundles__bar-price:before{content:attr(data-a11y-label);position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}@media (prefers-reduced-motion: reduce){.kaching-bundles *,.kaching-bundles *:before,.kaching-bundles *:after{transition-duration:.01ms!important;animation-duration:.01ms!important}}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__subscriptions-wrapper .kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-top .kaching-bundles__subscriptions-wrapper .kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-bottom .kaching-bundles__subscriptions-wrapper .kaching-bundles__bar{margin-block:0}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__subscriptions-wrapper .kaching-bundles__bars,.kaching-bundles .kaching-bundles__bars--badge-border-top .kaching-bundles__subscriptions-wrapper .kaching-bundles__bars,.kaching-bundles .kaching-bundles__bars--badge-border-bottom .kaching-bundles__subscriptions-wrapper .kaching-bundles__bars{row-gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__bar-container--badge-border-left:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar-container--badge-border-right:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper{border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-top .kaching-bundles__bar-wrapper{position:relative;z-index:1;margin-top:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));background-color:var(--bar-background-color, #fff);border-start-start-radius:var(--badge-concave-depth, 8px);border-start-end-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper{border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-top :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__bar-wrapper{position:relative;z-index:1;margin-bottom:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));background-color:var(--bar-background-color, #fff);border-start-start-radius:var(--bar-border-radius);border-start-end-radius:var(--bar-border-radius);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){position:relative;z-index:1}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper{margin-bottom:0;border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-bottom:var(--badge-border-thickness, 22px);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts),.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts),.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts),.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){margin-inline:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){position:relative;z-index:1;margin-inline-start:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){position:relative;z-index:1;margin-inline-end:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child,.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-block-end:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-inline-start:var(--badge-border-thickness, 22px);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-inline-end:var(--badge-border-thickness, 22px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:0;border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__deal-bar-progressive-gift:last-child,.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__deal-bar-progressive-gift:last-child{border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__deal-bar-progressive-gift:last-child{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top .kaching-bundles__deal-bar-progressive-gift,.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__deal-bar-progressive-gift,.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__deal-bar-progressive-gift,.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__deal-bar-progressive-gift{margin-inline:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__free-gift__divider{margin-inline-start:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__free-gift__divider{margin-inline-end:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-top .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-left .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-right .kaching-bundles__bar-wrapper{background-color:var(--bar-selected-background-color)}`)), document.head.appendChild(jt);
    }
  } catch (an) {
    console.error("vite-plugin-css-injected-by-js", an);
  }
})();
var zm = Object.defineProperty, $m = Object.getPrototypeOf, Dm = Reflect.get, xg = (jt) => {
  throw TypeError(jt);
}, Vm = (jt, an, Pn) => an in jt ? zm(jt, an, { enumerable: !0, configurable: !0, writable: !0, value: Pn }) : jt[an] = Pn, wn = (jt, an, Pn) => Vm(jt, typeof an != "symbol" ? an + "" : an, Pn), jo = (jt, an, Pn) => an.has(jt) || xg("Cannot " + Pn), Be = (jt, an, Pn) => (jo(jt, an, "read from private field"), Pn ? Pn.call(jt) : an.get(jt)), mt = (jt, an, Pn) => an.has(jt) ? xg("Cannot add the same private member more than once") : an instanceof WeakSet ? an.add(jt) : an.set(jt, Pn), xt = (jt, an, Pn, fs) => (jo(jt, an, "write to private field"), an.set(jt, Pn), Pn), un = (jt, an, Pn) => (jo(jt, an, "access private method"), Pn), Am = (jt, an, Pn) => Dm($m(jt), Pn, an);
(function(jt) {
  var an, Pn, fs, fl, Ti, Wr, qi, vl, Xa, Gi, ei, Ia, Oi, _l, kl, da, Eo, ml, vs, qr, hr, xl, Ur, ti, Hr, Pr, ar, Zr, Ma, za, ga, ni, $a, _s, ks, pr, Ro, No, yl, wl, ms, Da, Fi, Pl, xs, Qo, ha, Sr, Li, Sl, ys, ws, Wo, ji, Gr, Va, Ps, Bl, Uo, Ho, Jr, Yr, pa, Ss, Kr, Ei, Cl, Il, Ml;
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
  }), typeof window != "undefined" && ((fs = (Pn = (an = window.__svelte) != null ? an : window.__svelte = {}).v) != null ? fs : Pn.v = /* @__PURE__ */ new Set()).add("5");
  const zl = "[!", Aa = {}, Dn = Symbol(), yg = !1;
  var Ri = Array.isArray, wg = Array.prototype.indexOf, Bs = Array.from, $l = Object.keys, Ta = Object.defineProperty, qa = Object.getOwnPropertyDescriptor, Zo = Object.getOwnPropertyDescriptors, Jo = Object.prototype, Pg = Array.prototype, Dl = Object.getPrototypeOf, Yo = Object.isExtensible;
  const Br = () => {
  };
  function Sg(n) {
    return n();
  }
  function Vl(n) {
    for (var t = 0; t < n.length; t++) n[t]();
  }
  const Ni = 16, Al = 32, Ko = 64, Cr = 256, Cs = 512, Un = 1024, Xr = 2048, Ga = 4096, Or = 8192, ri = 16384, Is = 32768, ai = 65536, Bg = 1 << 17, Xo = 1 << 19, Ms = 1 << 21, Cg = 1 << 22, Oa = 1 << 23, ea = Symbol("$state"), ec = Symbol("legacy props"), Ig = Symbol(""), zs = new class extends Error {
    constructor() {
      super(...arguments), wn(this, "name", "StaleReactionError"), wn(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
    }
  }();
  function tc(n) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  function Qi(n) {
    console.warn("https://svelte.dev/e/hydration_mismatch");
  }
  let St, bt = !1;
  function Kn(n) {
    bt = n;
  }
  function Vn(n) {
    if (n === null) throw Qi(), Aa;
    return St = n;
  }
  function br() {
    return Vn(Mr(St));
  }
  function x(n) {
    if (bt) {
      if (Mr(St) !== null) throw Qi(), Aa;
      St = n;
    }
  }
  function ba(n = 1) {
    if (bt) {
      for (var t = n, r = St; t--; ) r = Mr(r);
      St = r;
    }
  }
  function Tl(n = !0) {
    for (var t = 0, r = St; ; ) {
      if (r.nodeType === 8) {
        var a = r.data;
        if (a === "]") {
          if (t === 0) return r;
          t -= 1;
        } else a !== "[" && a !== zl || (t += 1);
      }
      var s = Mr(r);
      n && r.remove(), r = s;
    }
  }
  function nc(n) {
    if (!n || n.nodeType !== 8) throw Qi(), Aa;
    return n.data;
  }
  function rc(n) {
    return n === this.v;
  }
  function ql(n, t) {
    return n != n ? t == t : n !== t || n !== null && typeof n == "object" || typeof n == "function";
  }
  function Mg(n, t) {
    return n !== t;
  }
  function ac(n) {
    return !ql(n, this.v);
  }
  let ii = !1;
  const zg = [];
  function fa(n, t = !1, r = !1) {
    return Gl(n, /* @__PURE__ */ new Map(), "", zg, null, r);
  }
  function Gl(n, t, r, a, s = null, o = !1) {
    if (typeof n == "object" && n !== null) {
      var c = t.get(n);
      if (c !== void 0) return c;
      if (n instanceof Map) return new Map(n);
      if (n instanceof Set) return new Set(n);
      if (Ri(n)) {
        var l = Array(n.length);
        t.set(n, l), s !== null && t.set(s, l);
        for (var i = 0; i < n.length; i += 1) {
          var u = n[i];
          i in n && (l[i] = Gl(u, t, r, a, null, o));
        }
        return l;
      }
      if (Dl(n) === Jo) {
        for (var h in l = {}, t.set(n, l), s !== null && t.set(s, l), n) l[h] = Gl(n[h], t, r, a, null, o);
        return l;
      }
      if (n instanceof Date) return structuredClone(n);
      if (typeof n.toJSON == "function" && !o) return Gl(n.toJSON(), t, r, a, n);
    }
    if (n instanceof EventTarget) return n;
    try {
      return structuredClone(n);
    } catch {
      return n;
    }
  }
  let dn = null;
  function li(n) {
    dn = n;
  }
  function si(n) {
    return ic().get(n);
  }
  function oi(n, t) {
    return ic().set(n, t), t;
  }
  function it(n, t = !1, r) {
    dn = { p: dn, c: null, e: null, s: n, x: null, l: ii && !t ? { s: null, u: null, $: [] } : null };
  }
  function lt(n) {
    var t = dn, r = t.e;
    if (r !== null) for (var a of (t.e = null, r)) Cc(a);
    return n !== void 0 && (t.x = n), dn = t.p, n != null ? n : {};
  }
  function ci() {
    return !ii || dn !== null && dn.l === null;
  }
  function ic(n) {
    var t;
    return dn === null && tc(), (t = dn.c) != null ? t : dn.c = new Map((function(r) {
      let a = r.p;
      for (; a !== null; ) {
        const s = a.c;
        if (s !== null) return s;
        a = a.p;
      }
      return null;
    })(dn) || void 0);
  }
  const $g = typeof requestIdleCallback == "undefined" ? (n) => setTimeout(n, 1) : requestIdleCallback;
  let va = [], ui = [];
  function lc() {
    var n = va;
    va = [], Vl(n);
  }
  function sc() {
    var n = ui;
    ui = [], Vl(n);
  }
  function Dg() {
    return va.length > 0 || ui.length > 0;
  }
  function Fa(n) {
    if (va.length === 0 && !Ui) {
      var t = va;
      queueMicrotask(() => {
        t === va && lc();
      });
    }
    va.push(n);
  }
  function Vg() {
    va.length > 0 && lc(), ui.length > 0 && sc();
  }
  const Ag = /* @__PURE__ */ new WeakMap();
  function oc(n) {
    var t = qt;
    if (t === null) return Lt.f |= Oa, n;
    if ((t.f & Is) === 0) {
      if (!(128 & t.f)) throw !t.parent && n instanceof Error && cc(n), n;
      t.b.error(n);
    } else di(n, t);
  }
  function di(n, t) {
    for (; t !== null; ) {
      if (128 & t.f) try {
        return void t.b.error(n);
      } catch (r) {
        n = r;
      }
      t = t.parent;
    }
    throw n instanceof Error && cc(n), n;
  }
  function cc(n) {
    const t = Ag.get(n);
    t && (Ta(n, "message", { value: t.message }), Ta(n, "stack", { value: t.stack }));
  }
  const $s = /* @__PURE__ */ new Set();
  let fn = null, Wi = null, Ds = /* @__PURE__ */ new Set(), La = [], Ol = null, Vs = !1, Ui = !1;
  fl = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), qi = /* @__PURE__ */ new WeakMap(), vl = /* @__PURE__ */ new WeakMap(), Xa = /* @__PURE__ */ new WeakMap(), Gi = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap(), Oi = /* @__PURE__ */ new WeakMap(), _l = /* @__PURE__ */ new WeakMap(), kl = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakSet(), Eo = function(n) {
    var t;
    n.f ^= Un;
    for (var r = n.first; r !== null; ) {
      var a = r.f, s = !!(96 & a);
      if (!(s && (a & Un) !== 0 || (a & Or) !== 0 || this.skipped_effects.has(r)) && r.fn !== null) {
        s ? r.f ^= Un : 4 & a ? Be(this, Ia).push(r) : (a & Un) === 0 && ((a & Cg) !== 0 ? ((t = r.b) != null && t.is_pending() ? Be(this, Gi) : Be(this, Xa)).push(r) : El(r) && ((r.f & Ni) !== 0 && Be(this, Oi).push(r), bi(r)));
        var o = r.first;
        if (o !== null) {
          r = o;
          continue;
        }
      }
      var c = r.parent;
      for (r = r.next; r === null && c !== null; ) r = c.next, c = c.parent;
    }
  }, ml = function(n) {
    for (const t of n)
      ((t.f & Xr) !== 0 ? Be(this, _l) : Be(this, kl)).push(t), nr(t, Un);
    n.length = 0;
  }, vs = function() {
    if (!Be(this, vl)) for (const n of Be(this, Ti)) n();
    Be(this, Ti).clear();
  };
  let ja = class Lo {
    constructor() {
      mt(this, da), wn(this, "current", /* @__PURE__ */ new Map()), mt(this, fl, /* @__PURE__ */ new Map()), mt(this, Ti, /* @__PURE__ */ new Set()), mt(this, Wr, 0), mt(this, qi, null), mt(this, vl, !1), mt(this, Xa, []), mt(this, Gi, []), mt(this, ei, []), mt(this, Ia, []), mt(this, Oi, []), mt(this, _l, []), mt(this, kl, []), wn(this, "skipped_effects", /* @__PURE__ */ new Set());
    }
    process(t) {
      var r;
      La = [], Wi = null;
      for (const o of t) un(this, da, Eo).call(this, o);
      if (Be(this, Xa).length === 0 && Be(this, Wr) === 0) {
        un(this, da, vs).call(this);
        var a = Be(this, ei), s = Be(this, Ia);
        xt(this, ei, []), xt(this, Ia, []), xt(this, Oi, []), Wi = fn, fn = null, dc(a), dc(s), fn === null ? fn = this : $s.delete(this), (r = Be(this, qi)) == null || r.resolve();
      } else un(this, da, ml).call(this, Be(this, ei)), un(this, da, ml).call(this, Be(this, Ia)), un(this, da, ml).call(this, Be(this, Oi));
      for (const o of Be(this, Xa)) bi(o);
      for (const o of Be(this, Gi)) bi(o);
      xt(this, Xa, []), xt(this, Gi, []);
    }
    capture(t, r) {
      Be(this, fl).has(t) || Be(this, fl).set(t, r), this.current.set(t, t.v);
    }
    activate() {
      fn = this;
    }
    deactivate() {
      fn = null, Wi = null;
      for (const t of Ds) if (Ds.delete(t), t(), fn !== null) break;
    }
    neuter() {
      xt(this, vl, !0);
    }
    flush() {
      La.length > 0 ? uc() : un(this, da, vs).call(this), fn === this && (Be(this, Wr) === 0 && $s.delete(this), this.deactivate());
    }
    increment() {
      xt(this, Wr, Be(this, Wr) + 1);
    }
    decrement() {
      if (xt(this, Wr, Be(this, Wr) - 1), Be(this, Wr) === 0) {
        for (const t of Be(this, _l)) nr(t, Xr), gi(t);
        for (const t of Be(this, kl)) nr(t, Ga), gi(t);
        xt(this, ei, []), xt(this, Ia, []), this.flush();
      } else this.deactivate();
    }
    add_callback(t) {
      Be(this, Ti).add(t);
    }
    settled() {
      var t, r, a;
      return ((t = Be(this, qi)) != null ? t : xt(this, qi, { promise: new Promise((s, o) => {
        r = s, a = o;
      }), resolve: r, reject: a })).promise;
    }
    static ensure() {
      if (fn === null) {
        const t = fn = new Lo();
        $s.add(fn), Ui || Lo.enqueue(() => {
          fn === t && t.flush();
        });
      }
      return fn;
    }
    static enqueue(t) {
      Fa(t);
    }
  };
  function _(n) {
    var t = Ui;
    Ui = !0;
    try {
      for (; ; ) {
        if (Vg(), La.length === 0 && !Dg() && (fn == null || fn.flush(), La.length === 0)) return void (Ol = null);
        uc();
      }
    } finally {
      Ui = t;
    }
  }
  function uc() {
    var n = pi;
    Vs = !0;
    try {
      var t = 0;
      for (Ac(!0); La.length > 0; ) {
        var r = ja.ensure();
        t++ > 1e3 && Tg(), r.process(La), ka.clear();
      }
    } finally {
      Vs = !1, Ac(n), Ol = null;
    }
  }
  function Tg() {
    try {
      (function() {
        throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
      })();
    } catch (n) {
      di(n, Ol);
    }
  }
  let _a = null;
  function dc(n) {
    var t = n.length;
    if (t !== 0) {
      for (var r = 0; r < t; ) {
        var a = n[r++];
        if (!(24576 & a.f) && El(a) && (_a = [], bi(a), a.deps === null && a.first === null && a.nodes_start === null && (a.teardown === null && a.ac === null ? $c(a) : a.fn = null), (_a == null ? void 0 : _a.length) > 0)) {
          ka.clear();
          for (const s of _a) bi(s);
          _a = [];
        }
      }
      _a = null;
    }
  }
  function gi(n) {
    for (var t = Ol = n; t.parent !== null; ) {
      var r = (t = t.parent).f;
      if (Vs && t === qt && (r & Ni) !== 0) return;
      if (96 & r) {
        if ((r & Un) === 0) return;
        t.f ^= Un;
      }
    }
    La.push(t);
  }
  function gc(n) {
    let t, r = 0, a = ta(0);
    return () => {
      Lt === null || $r || (e(a), Ji(() => (r === 0 && (t = Jt(() => n(() => ir(a)))), r += 1, () => {
        Fa(() => {
          r -= 1, r === 0 && (t == null || t(), t = void 0, ir(a));
        });
      })));
    };
  }
  class qg {
    constructor(t, r, a) {
      mt(this, pr), wn(this, "parent"), mt(this, qr, !1), mt(this, hr), mt(this, xl, bt ? St : null), mt(this, Ur), mt(this, ti), mt(this, Hr), mt(this, Pr, null), mt(this, ar, null), mt(this, Zr, null), mt(this, Ma, null), mt(this, za, 0), mt(this, ga, 0), mt(this, ni, !1), mt(this, $a, null), mt(this, _s, () => {
        Be(this, $a) && hi(Be(this, $a), Be(this, za));
      }), mt(this, ks, gc(() => (xt(this, $a, ta(Be(this, za))), () => {
        xt(this, $a, null);
      }))), xt(this, hr, t), xt(this, Ur, r), xt(this, ti, a), this.parent = qt.b, xt(this, qr, !!Be(this, Ur).pending), xt(this, Hr, na(() => {
        if (qt.b = this, bt) {
          const s = Be(this, xl);
          br(), s.nodeType === 8 && s.data === zl ? un(this, pr, No).call(this) : un(this, pr, Ro).call(this);
        } else {
          try {
            xt(this, Pr, Fn(() => a(Be(this, hr))));
          } catch (s) {
            this.error(s);
          }
          Be(this, ga) > 0 ? un(this, pr, wl).call(this) : xt(this, qr, !1);
        }
      }, 589952)), bt && xt(this, hr, St);
    }
    is_pending() {
      return Be(this, qr) || !!this.parent && this.parent.is_pending();
    }
    has_pending_snippet() {
      return !!Be(this, Ur).pending;
    }
    update_pending_count(t) {
      un(this, pr, ms).call(this, t), xt(this, za, Be(this, za) + t), Ds.add(Be(this, _s));
    }
    get_effect_pending() {
      return Be(this, ks).call(this), e(Be(this, $a));
    }
    error(t) {
      var r = Be(this, Ur).onerror;
      let a = Be(this, Ur).failed;
      if (Be(this, ni) || !r && !a) throw t;
      Be(this, Pr) && (Ln(Be(this, Pr)), xt(this, Pr, null)), Be(this, ar) && (Ln(Be(this, ar)), xt(this, ar, null)), Be(this, Zr) && (Ln(Be(this, Zr)), xt(this, Zr, null)), bt && (Vn(Be(this, xl)), ba(), Vn(Tl()));
      var s = !1, o = !1;
      const c = () => {
        s ? console.warn("https://svelte.dev/e/svelte_boundary_reset_noop") : (s = !0, o && (function() {
          throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
        })(), ja.ensure(), xt(this, za, 0), Be(this, Zr) !== null && ra(Be(this, Zr), () => {
          xt(this, Zr, null);
        }), xt(this, qr, this.has_pending_snippet()), xt(this, Pr, un(this, pr, yl).call(this, () => (xt(this, ni, !1), Fn(() => Be(this, ti).call(this, Be(this, hr)))))), Be(this, ga) > 0 ? un(this, pr, wl).call(this) : xt(this, qr, !1));
      };
      var l = Lt;
      try {
        Hn(null), o = !0, r == null || r(t, c), o = !1;
      } catch (i) {
        di(i, Be(this, Hr) && Be(this, Hr).parent);
      } finally {
        Hn(l);
      }
      a && Fa(() => {
        xt(this, Zr, un(this, pr, yl).call(this, () => {
          xt(this, ni, !0);
          try {
            return Fn(() => {
              a(Be(this, hr), () => t, () => c);
            });
          } catch (i) {
            return di(i, Be(this, Hr).parent), null;
          } finally {
            xt(this, ni, !1);
          }
        }));
      });
    }
  }
  function hc(n, t, r) {
    const a = ci() ? Hi : Fl;
    if (t.length !== 0) {
      var s = fn, o = qt, c = (function() {
        var i = qt, u = Lt, h = dn, f = fn, g = bt;
        if (g) var b = St;
        return function() {
          Fr(i), Hn(u), li(h), f == null || f.activate(), g && (Kn(!0), Vn(b));
        };
      })(), l = bt;
      Promise.all(t.map((i) => Gg(i))).then((i) => {
        s == null || s.activate(), c();
        try {
          r([...n.map(a), ...i]);
        } catch (u) {
          (o.f & ri) === 0 && di(u, o);
        }
        l && Kn(!1), s == null || s.deactivate(), pc();
      }).catch((i) => {
        di(i, o);
      });
    } else r(n.map(a));
  }
  function pc() {
    Fr(null), Hn(null), li(null);
  }
  function Hi(n) {
    var t = 2050, r = Lt !== null && 2 & Lt.f ? Lt : null;
    return qt === null || r !== null && (r.f & Cr) !== 0 ? t |= Cr : qt.f |= Xo, { ctx: dn, deps: null, effects: null, equals: rc, f: t, fn: n, reactions: null, rv: 0, v: Dn, wv: 0, parent: r != null ? r : qt, ac: null };
  }
  function Gg(n, t) {
    let r = qt;
    r === null && (function() {
      throw new Error("https://svelte.dev/e/async_derived_orphan");
    })();
    var a = r.b, s = void 0, o = ta(Dn), c = null, l = !Lt;
    return (function(i) {
      zr(4718592, i, !0);
    })(() => {
      var i;
      try {
        var u = n();
        c && Promise.resolve(u).catch(() => {
        });
      } catch (v) {
        u = Promise.reject(v);
      }
      var h = () => u;
      s = (i = c == null ? void 0 : c.then(h, h)) != null ? i : Promise.resolve(u), c = s;
      var f = fn, g = a.is_pending();
      l && (a.update_pending_count(1), g || f.increment());
      const b = (v, w = void 0) => {
        c = null, g || f.activate(), w ? w !== zs && (o.f |= Oa, hi(o, w)) : ((o.f & Oa) !== 0 && (o.f ^= Oa), hi(o, v)), l && (a.update_pending_count(-1), g || f.decrement()), pc();
      };
      if (s.then(b, (v) => b(null, v || "unknown")), f) return () => {
        queueMicrotask(() => f.neuter());
      };
    }), new Promise((i) => {
      (function u(h) {
        function f() {
          h === s ? i(o) : u(s);
        }
        h.then(f, f);
      })(s);
    });
  }
  function d(n) {
    const t = Hi(n);
    return qc(t), t;
  }
  function Fl(n) {
    const t = Hi(n);
    return t.equals = ac, t;
  }
  function bc(n) {
    var t = n.effects;
    if (t !== null) {
      n.effects = null;
      for (var r = 0; r < t.length; r += 1) Ln(t[r]);
    }
  }
  function As(n) {
    var t, r = qt;
    Fr((function(a) {
      for (var s = a.parent; s !== null; ) {
        if (!(2 & s.f)) return s;
        s = s.parent;
      }
      return null;
    })(n));
    try {
      bc(n), t = jc(n);
    } finally {
      Fr(r);
    }
    return t;
  }
  function fc(n) {
    var t = As(n);
    n.equals(t) || (n.v = t, n.wv = Fc()), Ea || nr(n, !ma && (n.f & Cr) === 0 || n.deps === null ? Un : Ga);
  }
  qr = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), xl = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), Ma = /* @__PURE__ */ new WeakMap(), za = /* @__PURE__ */ new WeakMap(), ga = /* @__PURE__ */ new WeakMap(), ni = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap(), _s = /* @__PURE__ */ new WeakMap(), ks = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakSet(), Ro = function() {
    try {
      xt(this, Pr, Fn(() => Be(this, ti).call(this, Be(this, hr))));
    } catch (n) {
      this.error(n);
    }
    xt(this, qr, !1);
  }, No = function() {
    const n = Be(this, Ur).pending;
    n && (xt(this, ar, Fn(() => n(Be(this, hr)))), ja.enqueue(() => {
      xt(this, Pr, un(this, pr, yl).call(this, () => (ja.ensure(), Fn(() => Be(this, ti).call(this, Be(this, hr)))))), Be(this, ga) > 0 ? un(this, pr, wl).call(this) : (ra(Be(this, ar), () => {
        xt(this, ar, null);
      }), xt(this, qr, !1));
    }));
  }, yl = function(n) {
    var t = qt, r = Lt, a = dn;
    Fr(Be(this, Hr)), Hn(Be(this, Hr)), li(Be(this, Hr).ctx);
    try {
      return n();
    } catch (s) {
      return oc(s), null;
    } finally {
      Fr(t), Hn(r), li(a);
    }
  }, wl = function() {
    const n = Be(this, Ur).pending;
    Be(this, Pr) !== null && (xt(this, Ma, document.createDocumentFragment()), (function(t, r) {
      for (var a = t.nodes_start, s = t.nodes_end; a !== null; ) {
        var o = a === s ? null : Mr(a);
        r.append(a), a = o;
      }
    })(Be(this, Pr), Be(this, Ma))), Be(this, ar) === null && xt(this, ar, Fn(() => n(Be(this, hr))));
  }, ms = function(n) {
    var t;
    this.has_pending_snippet() ? (xt(this, ga, Be(this, ga) + n), Be(this, ga) === 0 && (xt(this, qr, !1), Be(this, ar) && ra(Be(this, ar), () => {
      xt(this, ar, null);
    }), Be(this, Ma) && (Be(this, hr).before(Be(this, Ma)), xt(this, Ma, null)))) : this.parent && un(t = this.parent, pr, ms).call(t, n);
  };
  const ka = /* @__PURE__ */ new Map();
  function ta(n, t) {
    return { f: 0, v: n, reactions: null, equals: rc, rv: 0, wv: 0 };
  }
  function Ve(n, t) {
    const r = ta(n);
    return qc(r), r;
  }
  function Ts(n, t = !1, r = !0) {
    var a, s;
    const o = ta(n);
    return t || (o.equals = ac), ii && r && dn !== null && dn.l !== null && ((s = (a = dn.l).s) != null ? s : a.s = []).push(o), o;
  }
  function ae(n, t, r = !1) {
    return Lt !== null && (!$r || (Lt.f & Bg) !== 0) && ci() && 4325394 & Lt.f && !(vr != null && vr.includes(n)) && (function() {
      throw new Error("https://svelte.dev/e/state_unsafe_mutation");
    })(), hi(n, r ? ct(t) : t);
  }
  function hi(n, t) {
    if (!n.equals(t)) {
      var r = n.v;
      Ea ? ka.set(n, t) : ka.set(n, r), n.v = t, ja.ensure().capture(n, r), 2 & n.f && ((n.f & Xr) !== 0 && As(n), nr(n, (n.f & Cr) === 0 ? Un : Ga)), n.wv = Fc(), vc(n, Xr), !ci() || qt === null || (qt.f & Un) === 0 || 96 & qt.f || (_r === null ? (function(a) {
        _r = a;
      })([n]) : _r.push(n));
    }
    return t;
  }
  function ir(n) {
    ae(n, n.v + 1);
  }
  function vc(n, t) {
    var r = n.reactions;
    if (r !== null) for (var a = ci(), s = r.length, o = 0; o < s; o++) {
      var c = r[o], l = c.f;
      if (a || c !== qt) {
        var i = (l & Xr) === 0;
        i && nr(c, t), 2 & l ? vc(c, Ga) : i && ((l & Ni) !== 0 && _a !== null && _a.push(c), gi(c));
      }
    }
  }
  function ct(n) {
    if (typeof n != "object" || n === null || ea in n) return n;
    const t = Dl(n);
    if (t !== Jo && t !== Pg) return n;
    var r = /* @__PURE__ */ new Map(), a = Ri(n), s = Ve(0), o = Dr, c = (l) => {
      if (Dr === o) return l();
      var i = Lt, u = Dr;
      Hn(null), Oc(o);
      var h = l();
      return Hn(i), Oc(u), h;
    };
    return a && r.set("length", Ve(n.length)), new Proxy(n, { defineProperty(l, i, u) {
      "value" in u && u.configurable !== !1 && u.enumerable !== !1 && u.writable !== !1 || (function() {
        throw new Error("https://svelte.dev/e/state_descriptors_fixed");
      })();
      var h = r.get(i);
      return h === void 0 ? h = c(() => {
        var f = Ve(u.value);
        return r.set(i, f), f;
      }) : ae(h, u.value, !0), !0;
    }, deleteProperty(l, i) {
      var u = r.get(i);
      if (u === void 0) {
        if (i in l) {
          const h = c(() => Ve(Dn));
          r.set(i, h), ir(s);
        }
      } else ae(u, Dn), ir(s);
      return !0;
    }, get(l, i, u) {
      var h;
      if (i === ea) return n;
      var f = r.get(i), g = i in l;
      if (f !== void 0 || g && !((h = qa(l, i)) != null && h.writable) || (f = c(() => Ve(ct(g ? l[i] : Dn))), r.set(i, f)), f !== void 0) {
        var b = e(f);
        return b === Dn ? void 0 : b;
      }
      return Reflect.get(l, i, u);
    }, getOwnPropertyDescriptor(l, i) {
      var u = Reflect.getOwnPropertyDescriptor(l, i);
      if (u && "value" in u) {
        var h = r.get(i);
        h && (u.value = e(h));
      } else if (u === void 0) {
        var f = r.get(i), g = f == null ? void 0 : f.v;
        if (f !== void 0 && g !== Dn) return { enumerable: !0, configurable: !0, value: g, writable: !0 };
      }
      return u;
    }, has(l, i) {
      var u;
      if (i === ea) return !0;
      var h = r.get(i), f = h !== void 0 && h.v !== Dn || Reflect.has(l, i);
      return (h !== void 0 || qt !== null && (!f || (u = qa(l, i)) != null && u.writable)) && (h === void 0 && (h = c(() => Ve(f ? ct(l[i]) : Dn)), r.set(i, h)), e(h) === Dn) ? !1 : f;
    }, set(l, i, u, h) {
      var f, g = r.get(i), b = i in l;
      if (a && i === "length") for (var v = u; v < g.v; v += 1) {
        var w = r.get(v + "");
        w !== void 0 ? ae(w, Dn) : v in l && (w = c(() => Ve(Dn)), r.set(v + "", w));
      }
      g === void 0 ? b && !((f = qa(l, i)) != null && f.writable) || (ae(g = c(() => Ve(void 0)), ct(u)), r.set(i, g)) : (b = g.v !== Dn, ae(g, c(() => ct(u))));
      var m = Reflect.getOwnPropertyDescriptor(l, i);
      if (m != null && m.set && m.set.call(h, u), !b) {
        if (a && typeof i == "string") {
          var z = r.get("length"), I = Number(i);
          Number.isInteger(I) && I >= z.v && ae(z, I + 1);
        }
        ir(s);
      }
      return !0;
    }, ownKeys(l) {
      e(s);
      var i = Reflect.ownKeys(l).filter((f) => {
        var g = r.get(f);
        return g === void 0 || g.v !== Dn;
      });
      for (var [u, h] of r) h.v === Dn || u in l || i.push(u);
      return i;
    }, setPrototypeOf() {
      (function() {
        throw new Error("https://svelte.dev/e/state_prototype_fixed");
      })();
    } });
  }
  function _c(n) {
    try {
      if (n !== null && typeof n == "object" && ea in n) return n[ea];
    } catch {
    }
    return n;
  }
  function Og(n, t) {
    return Object.is(_c(n), _c(t));
  }
  var kc, mc, xc, yc;
  function qs() {
    if (kc === void 0) {
      kc = window, mc = /Firefox/.test(navigator.userAgent);
      var n = Element.prototype, t = Node.prototype, r = Text.prototype;
      xc = qa(t, "firstChild").get, yc = qa(t, "nextSibling").get, Yo(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), Yo(r) && (r.__t = void 0);
    }
  }
  function Ir(n = "") {
    return document.createTextNode(n);
  }
  function Nn(n) {
    return xc.call(n);
  }
  function Mr(n) {
    return yc.call(n);
  }
  function y(n, t) {
    if (!bt) return Nn(n);
    var r = Nn(St);
    if (r === null) r = St.appendChild(Ir());
    else if (t && r.nodeType !== 3) {
      var a = Ir();
      return r == null || r.before(a), Vn(a), a;
    }
    return Vn(r), r;
  }
  function fe(n, t = !1) {
    if (!bt) {
      var r = Nn(n);
      return r instanceof Comment && r.data === "" ? Mr(r) : r;
    }
    if (t && (St == null ? void 0 : St.nodeType) !== 3) {
      var a = Ir();
      return St == null || St.before(a), Vn(a), a;
    }
    return St;
  }
  function L(n, t = 1, r = !1) {
    let a = bt ? St : n;
    for (var s; t--; ) s = a, a = Mr(a);
    if (!bt) return a;
    if (r && (a == null ? void 0 : a.nodeType) !== 3) {
      var o = Ir();
      return a === null ? s == null || s.after(o) : a.before(o), Vn(o), o;
    }
    return Vn(a), a;
  }
  function wc(n) {
    n.textContent = "";
  }
  function Fg(n, t) {
    if (t) {
      const r = document.body;
      n.autofocus = !0, Fa(() => {
        document.activeElement === r && n.focus();
      });
    }
  }
  let Pc = !1;
  function Sc() {
    Pc || (Pc = !0, document.addEventListener("reset", (n) => {
      Promise.resolve().then(() => {
        var t;
        if (!n.defaultPrevented) for (const r of n.target.elements) (t = r.__on_r) == null || t.call(r);
      });
    }, { capture: !0 }));
  }
  function Ll(n) {
    var t = Lt, r = qt;
    Hn(null), Fr(null);
    try {
      return n();
    } finally {
      Hn(t), Fr(r);
    }
  }
  function Bc(n) {
    qt === null && Lt === null && (function() {
      throw new Error("https://svelte.dev/e/effect_orphan");
    })(), Lt !== null && (Lt.f & Cr) !== 0 && qt === null && (function() {
      throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
    })(), Ea && (function() {
      throw new Error("https://svelte.dev/e/effect_in_teardown");
    })();
  }
  function zr(n, t, r, a = !0) {
    var s, o = qt;
    o !== null && (o.f & Or) !== 0 && (n |= Or);
    var c = { ctx: dn, deps: null, nodes_start: null, nodes_end: null, f: n | Xr, first: null, fn: t, last: null, next: null, parent: o, b: o && o.b, prev: null, teardown: null, transitions: null, wv: 0, ac: null };
    if (r) try {
      bi(c), c.f |= Is;
    } catch (u) {
      throw Ln(c), u;
    }
    else t !== null && gi(c);
    if (a) {
      var l = c;
      if (r && l.deps === null && l.teardown === null && l.nodes_start === null && l.first === l.last && (l.f & Xo) === 0 && (l = l.first), l !== null && (l.parent = o, o !== null && (function(u, h) {
        var f = h.last;
        f === null ? h.last = h.first = u : (f.next = u, u.prev = f, h.last = u);
      })(l, o), Lt !== null && 2 & Lt.f && (n & Ko) === 0)) {
        var i = Lt;
        ((s = i.effects) != null ? s : i.effects = []).push(l);
      }
    }
    return c;
  }
  function Gs(n) {
    const t = zr(8, null, !1);
    return nr(t, Un), t.teardown = n, t;
  }
  function tt(n) {
    var t;
    Bc();
    var r = qt.f;
    if (!(!Lt && (r & Al) !== 0 && (r & Is) === 0)) return Cc(n);
    var a = dn;
    ((t = a.e) != null ? t : a.e = []).push(n);
  }
  function Cc(n) {
    return zr(1048580, n, !1);
  }
  function fr(n) {
    return Bc(), zr(1048584, n, !0);
  }
  function Zi(n) {
    return zr(4, n, !1);
  }
  function Ji(n, t = 0) {
    return zr(8 | t, n, !0);
  }
  function ve(n, t = [], r = []) {
    hc(t, r, (a) => {
      zr(8, () => n(...a.map(e)), !0);
    });
  }
  function na(n, t = 0) {
    return zr(Ni | t, n, !0);
  }
  function Fn(n, t = !0) {
    return zr(524320, n, !0, t);
  }
  function Ic(n) {
    var t = n.teardown;
    if (t !== null) {
      const r = Ea, a = Lt;
      Tc(!0), Hn(null);
      try {
        t.call(null);
      } finally {
        Tc(r), Hn(a);
      }
    }
  }
  function Mc(n, t = !1) {
    var r = n.first;
    for (n.first = n.last = null; r !== null; ) {
      const s = r.ac;
      s !== null && Ll(() => {
        s.abort(zs);
      });
      var a = r.next;
      (r.f & Ko) !== 0 ? r.parent = null : Ln(r, t), r = a;
    }
  }
  function Ln(n, t = !0) {
    var r = !1;
    (t || 262144 & n.f) && n.nodes_start !== null && n.nodes_end !== null && (zc(n.nodes_start, n.nodes_end), r = !0), Mc(n, t && !r), Rl(n, 0), nr(n, ri);
    var a = n.transitions;
    if (a !== null) for (const o of a) o.stop();
    Ic(n);
    var s = n.parent;
    s !== null && s.first !== null && $c(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
  }
  function zc(n, t) {
    for (; n !== null; ) {
      var r = n === t ? null : Mr(n);
      n.remove(), n = r;
    }
  }
  function $c(n) {
    var t = n.parent, r = n.prev, a = n.next;
    r !== null && (r.next = a), a !== null && (a.prev = r), t !== null && (t.first === n && (t.first = a), t.last === n && (t.last = r));
  }
  function ra(n, t) {
    var r = [];
    Os(n, r, !0), Dc(r, () => {
      Ln(n), t && t();
    });
  }
  function Dc(n, t) {
    var r = n.length;
    if (r > 0) {
      var a = () => --r || t();
      for (var s of n) s.out(a);
    } else t();
  }
  function Os(n, t, r) {
    if ((n.f & Or) === 0) {
      if (n.f ^= Or, n.transitions !== null) for (const o of n.transitions) (o.is_global || r) && t.push(o);
      for (var a = n.first; a !== null; ) {
        var s = a.next;
        Os(a, t, ((a.f & ai) !== 0 || (a.f & Al) !== 0) && r), a = s;
      }
    }
  }
  function jl(n) {
    Vc(n, !0);
  }
  function Vc(n, t) {
    if ((n.f & Or) !== 0) {
      n.f ^= Or, (n.f & Un) === 0 && (nr(n, Xr), gi(n));
      for (var r = n.first; r !== null; ) {
        var a = r.next;
        Vc(r, ((r.f & ai) !== 0 || (r.f & Al) !== 0) && t), r = a;
      }
      if (n.transitions !== null) for (const s of n.transitions) (s.is_global || t) && s.in();
    }
  }
  let pi = !1;
  function Ac(n) {
    pi = n;
  }
  let Ea = !1;
  function Tc(n) {
    Ea = n;
  }
  let Lt = null, $r = !1;
  function Hn(n) {
    Lt = n;
  }
  let qt = null;
  function Fr(n) {
    qt = n;
  }
  let vr = null;
  function qc(n) {
    Lt !== null && (vr === null ? vr = [n] : vr.push(n));
  }
  let Xn = null, lr = 0, _r = null, Gc = 1, Yi = 0, Dr = Yi;
  function Oc(n) {
    Dr = n;
  }
  let ma = !1;
  function Fc() {
    return ++Gc;
  }
  function El(n) {
    var t, r, a = n.f;
    if ((a & Xr) !== 0) return !0;
    if ((a & Ga) !== 0) {
      var s = n.deps, o = (a & Cr) !== 0;
      if (s !== null) {
        var c, l, i = (a & Cs) !== 0, u = o && qt !== null && !ma, h = s.length;
        if ((i || u) && (qt === null || (qt.f & ri) === 0)) {
          var f = n, g = f.parent;
          for (c = 0; c < h; c++) l = s[c], !i && ((t = l == null ? void 0 : l.reactions) != null && t.includes(f)) || ((r = l.reactions) != null ? r : l.reactions = []).push(f);
          i && (f.f ^= Cs), u && g !== null && (g.f & Cr) === 0 && (f.f ^= Cr);
        }
        for (c = 0; c < h; c++) if (El(l = s[c]) && fc(l), l.wv > n.wv) return !0;
      }
      o && (qt === null || ma) || nr(n, Un);
    }
    return !1;
  }
  function Lc(n, t, r = !0) {
    var a = n.reactions;
    if (a !== null && !(vr != null && vr.includes(n))) for (var s = 0; s < a.length; s++) {
      var o = a[s];
      2 & o.f ? Lc(o, t, !1) : t === o && (r ? nr(o, Xr) : (o.f & Un) !== 0 && nr(o, Ga), gi(o));
    }
  }
  function jc(n) {
    var t, r, a = Xn, s = lr, o = _r, c = Lt, l = ma, i = vr, u = dn, h = $r, f = Dr, g = n.f;
    Xn = null, lr = 0, _r = null, ma = (g & Cr) !== 0 && ($r || !pi || Lt === null), Lt = 96 & g ? null : n, vr = null, li(n.ctx), $r = !1, Dr = ++Yi, n.ac !== null && (Ll(() => {
      n.ac.abort(zs);
    }), n.ac = null);
    try {
      n.f |= Ms;
      var b = (0, n.fn)(), v = n.deps;
      if (Xn !== null) {
        var w;
        if (Rl(n, lr), v !== null && lr > 0) for (v.length = lr + Xn.length, w = 0; w < Xn.length; w++) v[lr + w] = Xn[w];
        else n.deps = v = Xn;
        if (!ma || 2 & g && n.reactions !== null) for (w = lr; w < v.length; w++) ((r = (t = v[w]).reactions) != null ? r : t.reactions = []).push(n);
      } else v !== null && lr < v.length && (Rl(n, lr), v.length = lr);
      if (ci() && _r !== null && !$r && v !== null && !(6146 & n.f)) for (w = 0; w < _r.length; w++) Lc(_r[w], n);
      return c !== null && c !== n && (Yi++, _r !== null && (o === null ? o = _r : o.push(..._r))), (n.f & Oa) !== 0 && (n.f ^= Oa), b;
    } catch (m) {
      return oc(m);
    } finally {
      n.f ^= Ms, Xn = a, lr = s, _r = o, Lt = c, ma = l, vr = i, li(u), $r = h, Dr = f;
    }
  }
  function Lg(n, t) {
    let r = t.reactions;
    if (r !== null) {
      var a = wg.call(r, n);
      if (a !== -1) {
        var s = r.length - 1;
        s === 0 ? r = t.reactions = null : (r[a] = r[s], r.pop());
      }
    }
    r === null && 2 & t.f && (Xn === null || !Xn.includes(t)) && (nr(t, Ga), 768 & t.f || (t.f ^= Cs), bc(t), Rl(t, 0));
  }
  function Rl(n, t) {
    var r = n.deps;
    if (r !== null) for (var a = t; a < r.length; a++) Lg(n, r[a]);
  }
  function bi(n) {
    var t = n.f;
    if ((t & ri) === 0) {
      nr(n, Un);
      var r = qt, a = pi;
      qt = n, pi = !0;
      try {
        (t & Ni) !== 0 ? (function(o) {
          for (var c = o.first; c !== null; ) {
            var l = c.next;
            (c.f & Al) === 0 && Ln(c), c = l;
          }
        })(n) : Mc(n), Ic(n);
        var s = jc(n);
        n.teardown = typeof s == "function" ? s : null, n.wv = Gc;
      } finally {
        pi = a, qt = r;
      }
    }
  }
  async function Fs() {
    await Promise.resolve(), _();
  }
  function e(n) {
    var t, r = !!(2 & n.f);
    if (Lt === null || $r) {
      if (r && n.deps === null && n.effects === null) {
        var a = n, s = a.parent;
        s !== null && (s.f & Cr) === 0 && (a.f ^= Cr);
      }
    } else if (!(qt !== null && (qt.f & ri) !== 0) && !(vr != null && vr.includes(n))) {
      var o = Lt.deps;
      if ((Lt.f & Ms) !== 0) n.rv < Yi && (n.rv = Yi, Xn === null && o !== null && o[lr] === n ? lr++ : Xn === null ? Xn = [n] : ma && Xn.includes(n) || Xn.push(n));
      else {
        ((t = Lt.deps) != null ? t : Lt.deps = []).push(n);
        var c = n.reactions;
        c === null ? n.reactions = [Lt] : c.includes(Lt) || c.push(Lt);
      }
    }
    if (Ea) {
      if (ka.has(n)) return ka.get(n);
      if (r) {
        var l = (a = n).v;
        return ((a.f & Un) === 0 && a.reactions !== null || Ec(a)) && (l = As(a)), ka.set(a, l), l;
      }
    } else r && El(a = n) && fc(a);
    if ((n.f & Oa) !== 0) throw n.v;
    return n.v;
  }
  function Ec(n) {
    if (n.v === Dn) return !0;
    if (n.deps === null) return !1;
    for (const t of n.deps)
      if (ka.has(t) || 2 & t.f && Ec(t)) return !0;
    return !1;
  }
  function Jt(n) {
    var t = $r;
    try {
      return $r = !0, n();
    } finally {
      $r = t;
    }
  }
  const jg = -7169;
  function nr(n, t) {
    n.f = n.f & jg | t;
  }
  function Rc(n) {
    if (typeof n == "object" && n && !(n instanceof EventTarget)) {
      if (ea in n) Ls(n);
      else if (!Array.isArray(n)) for (let t in n) {
        const r = n[t];
        typeof r == "object" && r && ea in r && Ls(r);
      }
    }
  }
  function Ls(n, t = /* @__PURE__ */ new Set()) {
    if (!(typeof n != "object" || n === null || n instanceof EventTarget || t.has(n))) {
      t.add(n), n instanceof Date && n.getTime();
      for (let a in n) try {
        Ls(n[a], t);
      } catch {
      }
      const r = Dl(n);
      if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
        const a = Zo(r);
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
  const Nc = /* @__PURE__ */ new Set(), js = /* @__PURE__ */ new Set();
  function Es(n, t, r, a = {}) {
    function s(o) {
      if (a.capture || Ki.call(t, o), !o.cancelBubble) return Ll(() => r == null ? void 0 : r.call(this, o));
    }
    return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Fa(() => {
      t.addEventListener(n, s, a);
    }) : t.addEventListener(n, s, a), s;
  }
  function Nl(n, t, r, a, s) {
    var o = { capture: a, passive: s }, c = Es(n, t, r, o);
    (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Gs(() => {
      t.removeEventListener(n, c, o);
    });
  }
  function jn(n) {
    for (var t = 0; t < n.length; t++) Nc.add(n[t]);
    for (var r of js) r(n);
  }
  let Qc = null;
  function Ki(n) {
    var t, r = this, a = r.ownerDocument, s = n.type, o = ((t = n.composedPath) == null ? void 0 : t.call(n)) || [], c = o[0] || n.target;
    Qc = n;
    var l = 0, i = Qc === n && n.__root;
    if (i) {
      var u = o.indexOf(i);
      if (u !== -1 && (r === document || r === window)) return void (n.__root = r);
      var h = o.indexOf(r);
      if (h === -1) return;
      u <= h && (l = u);
    }
    if ((c = o[l] || n.target) !== r) {
      Ta(n, "currentTarget", { configurable: !0, get: () => c || a });
      var f = Lt, g = qt;
      Hn(null), Fr(null);
      try {
        for (var b, v = []; c !== null; ) {
          var w = c.assignedSlot || c.parentNode || c.host || null;
          try {
            var m = c["__" + s];
            if (m != null && (!c.disabled || n.target === c)) if (Ri(m)) {
              var [z, ...I] = m;
              z.apply(c, [n, ...I]);
            } else m.call(c, n);
          } catch (V) {
            b ? v.push(V) : b = V;
          }
          if (n.cancelBubble || w === r || w === null) break;
          c = w;
        }
        if (b) {
          for (let V of v) queueMicrotask(() => {
            throw V;
          });
          throw b;
        }
      } finally {
        n.__root = r, delete n.currentTarget, Hn(f), Fr(g);
      }
    }
  }
  function Rs(n) {
    var t = document.createElement("template");
    return t.innerHTML = n.replaceAll("<!>", "<!---->"), t.content;
  }
  function rr(n, t) {
    var r = qt;
    r.nodes_start === null && (r.nodes_start = n, r.nodes_end = t);
  }
  function $(n, t) {
    var r, a = !!(1 & t), s = !!(2 & t), o = !n.startsWith("<!>");
    return () => {
      if (bt) return rr(St, null), St;
      r === void 0 && (r = Rs(o ? n : "<!>" + n), a || (r = Nn(r)));
      var c = s || mc ? document.importNode(r, !0) : r.cloneNode(!0);
      return a ? rr(Nn(c), c.lastChild) : rr(c, c), c;
    };
  }
  function Eg(n, t, r = "svg") {
    var a, s = !n.startsWith("<!>"), o = !!(1 & t), c = `<${r}>${s ? n : "<!>" + n}</${r}>`;
    return () => {
      if (bt) return rr(St, null), St;
      if (!a) {
        var l = Nn(Rs(c));
        if (o) for (a = document.createDocumentFragment(); Nn(l); ) a.appendChild(Nn(l));
        else a = Nn(l);
      }
      var i = a.cloneNode(!0);
      return o ? rr(Nn(i), i.lastChild) : rr(i, i), i;
    };
  }
  function An(n, t) {
    return Eg(n, t, "svg");
  }
  function Zn(n = "") {
    if (!bt) {
      var t = Ir(n + "");
      return rr(t, t), t;
    }
    var r = St;
    return r.nodeType !== 3 && (r.before(r = Ir()), Vn(r)), rr(r, r), r;
  }
  function ze() {
    if (bt) return rr(St, null), St;
    var n = document.createDocumentFragment(), t = document.createComment(""), r = Ir();
    return n.append(t, r), rr(t, r), n;
  }
  function p(n, t) {
    if (bt) return qt.nodes_end = St, void br();
    n !== null && n.before(t);
  }
  function Rg(n) {
    return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
  }
  const Ng = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];
  function Qg(n) {
    return Ng.includes(n);
  }
  const Wg = { formnovalidate: "formNoValidate", ismap: "isMap", nomodule: "noModule", playsinline: "playsInline", readonly: "readOnly", defaultvalue: "defaultValue", defaultchecked: "defaultChecked", srcobject: "srcObject", novalidate: "noValidate", allowfullscreen: "allowFullscreen", disablepictureinpicture: "disablePictureInPicture", disableremoteplayback: "disableRemotePlayback" };
  function Ug(n) {
    var t;
    return n = n.toLowerCase(), (t = Wg[n]) != null ? t : n;
  }
  const Hg = ["touchstart", "touchmove"];
  function Zg(n) {
    return Hg.includes(n);
  }
  const Jg = ["textarea", "script", "style", "title"];
  function ft(n, t) {
    var r, a = t == null ? "" : typeof t == "object" ? t + "" : t;
    a !== ((r = n.__t) != null ? r : n.__t = n.nodeValue) && (n.__t = a, n.nodeValue = a + "");
  }
  function Wc(n, t) {
    return Uc(n, t);
  }
  function Yg(n, t) {
    var r;
    qs(), t.intro = (r = t.intro) != null && r;
    const a = t.target, s = bt, o = St;
    try {
      for (var c = Nn(a); c && (c.nodeType !== 8 || c.data !== "["); ) c = Mr(c);
      if (!c) throw Aa;
      Kn(!0), Vn(c);
      const l = Uc(n, { ...t, anchor: c });
      return Kn(!1), l;
    } catch (l) {
      if (l instanceof Error && l.message.split(`
`).some((i) => i.startsWith("https://svelte.dev/e/"))) throw l;
      return l !== Aa && console.warn("Failed to hydrate: ", l), t.recover === !1 && (function() {
        throw new Error("https://svelte.dev/e/hydration_failed");
      })(), qs(), wc(a), Kn(!1), Wc(n, t);
    } finally {
      Kn(s), Vn(o);
    }
  }
  const fi = /* @__PURE__ */ new Map();
  function Uc(n, { target: t, anchor: r, props: a = {}, events: s, context: o, intro: c = !0 }) {
    qs();
    var l = /* @__PURE__ */ new Set(), i = (f) => {
      for (var g = 0; g < f.length; g++) {
        var b = f[g];
        if (!l.has(b)) {
          l.add(b);
          var v = Zg(b);
          t.addEventListener(b, Ki, { passive: v });
          var w = fi.get(b);
          w === void 0 ? (document.addEventListener(b, Ki, { passive: v }), fi.set(b, 1)) : fi.set(b, w + 1);
        }
      }
    };
    i(Bs(Nc)), js.add(i);
    var u = void 0, h = (function(f) {
      ja.ensure();
      const g = zr(524352, f, !0);
      return (b = {}) => new Promise((v) => {
        b.outro ? ra(g, () => {
          Ln(g), v(void 0);
        }) : (Ln(g), v(void 0));
      });
    })(() => {
      var f = r != null ? r : t.appendChild(Ir());
      return (function(g, b, v) {
        new qg(g, b, v);
      })(f, { pending: () => {
      } }, (g) => {
        if (o && (it({}), dn.c = o), s && (a.$$events = s), bt && rr(g, null), u = n(g, a) || {}, bt && (qt.nodes_end = St, St === null || St.nodeType !== 8 || St.data !== "]")) throw Qi(), Aa;
        o && lt();
      }), () => {
        var g;
        for (var b of l) {
          t.removeEventListener(b, Ki);
          var v = fi.get(b);
          --v === 0 ? (document.removeEventListener(b, Ki), fi.delete(b)) : fi.set(b, v);
        }
        js.delete(i), f !== r && ((g = f.parentNode) == null || g.removeChild(f));
      };
    });
    return Ns.set(u, h), u;
  }
  let Ns = /* @__PURE__ */ new WeakMap();
  function Ql(n, t, ...r) {
    var a, s = n, o = Br;
    na(() => {
      o !== (o = t()) && (a && (Ln(a), a = null), a = Fn(() => o(s, ...r)));
    }, ai), bt && (s = St);
  }
  function Ra(n) {
    var t, r, a;
    dn === null && tc(), ii && dn.l !== null ? (t = dn, a = t.l, (r = a.u) != null ? r : a.u = { a: [], b: [], m: [] }).m.push(n) : tt(() => {
      const s = Jt(n);
      if (typeof s == "function") return s;
    });
  }
  function O(n, t, r = !1) {
    bt && br();
    var a = n, s = null, o = null, c = Dn, l = !1;
    const i = (f, g = !0) => {
      l = !0, h(g, f);
    };
    function u() {
      var f = c ? s : o, g = c ? o : s;
      f && jl(f), g && ra(g, () => {
        c ? o = null : s = null;
      });
    }
    const h = (f, g) => {
      if (c === (c = f)) return;
      let b = !1;
      if (bt) {
        const w = nc(a) === zl;
        !!c === w && (Vn(a = Tl()), Kn(!1), b = !0);
      }
      var v = a;
      c ? s != null || (s = g && Fn(() => g(v))) : o != null || (o = g && Fn(() => g(v))), u(), b && Kn(!0);
    };
    na(() => {
      l = !1, t(i), l || h(null, null);
    }, r ? ai : 0), bt && (a = St);
  }
  function st(n, t, r) {
    bt && br();
    var a, s, o = n, c = Dn, l = ci() ? Mg : ql;
    function i() {
      a && ra(a), a = s;
    }
    na(() => {
      if (l(c, c = t())) {
        var u = o;
        s = Fn(() => r(u)), i();
      }
    }), bt && (o = St);
  }
  function Vr(n, t) {
    return t;
  }
  function Vt(n, t, r, a, s, o = null) {
    var c = n, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
    if (4 & t) {
      var i = n;
      c = bt ? Vn(Nn(i)) : i.appendChild(Ir());
    }
    bt && br();
    var u, h, f = null, g = !1, b = /* @__PURE__ */ new Map(), v = Fl(() => {
      var m = r();
      return Ri(m) ? m : m == null ? [] : Bs(m);
    });
    function w() {
      (function(m, z, I, V, T, q, ee, H, D) {
        var ne, B, N, se, S, Z, M, P, R, Q, K = !!(8 & ee), ce = !!(3 & ee), F = z.length, G = I.items, U = I.first, te = U, E = null, ie = [], J = [];
        if (K) for (Q = 0; Q < F; Q += 1) P = H(M = z[Q], Q), (R = G.get(P)) !== void 0 && ((ne = R.a) == null || ne.measure(), (Z != null ? Z : Z = /* @__PURE__ */ new Set()).add(R));
        for (Q = 0; Q < F; Q += 1) if (P = H(M = z[Q], Q), (R = G.get(P)) !== void 0) {
          if (ce && Kg(R, M, Q, ee), (R.e.f & Or) !== 0 && (jl(R.e), K && ((B = R.a) == null || B.unfix(), (Z != null ? Z : Z = /* @__PURE__ */ new Set()).delete(R))), R !== te) {
            if (S !== void 0 && S.has(R)) {
              if (ie.length < J.length) {
                var C, j = J[0];
                E = j.prev;
                var W = ie[0], X = ie[ie.length - 1];
                for (C = 0; C < ie.length; C += 1) Qs(ie[C], j, T);
                for (C = 0; C < J.length; C += 1) S.delete(J[C]);
                Lr(I, W.prev, X.next), Lr(I, E, W), Lr(I, X, j), te = j, E = X, Q -= 1, ie = [], J = [];
              } else S.delete(R), Qs(R, te, T), Lr(I, R.prev, R.next), Lr(I, R, E === null ? I.first : E.next), Lr(I, E, R), E = R;
              continue;
            }
            for (ie = [], J = []; te !== null && te.k !== P; ) (te.e.f & Or) === 0 && (S != null ? S : S = /* @__PURE__ */ new Set()).add(te), J.push(te), te = te.next;
            if (te === null) continue;
            R = te;
          }
          ie.push(R), E = R, te = R.next;
        } else {
          var le = V.get(P);
          if (le !== void 0) {
            V.delete(P), G.set(P, le);
            var A = E ? E.next : te;
            Lr(I, E, le), Lr(I, le, A), Qs(le, A, T), E = le;
          } else
            E = Hc(te ? te.e.nodes_start : T, I, E, E === null ? I.first : E.next, M, P, Q, q, ee, D);
          G.set(P, E), ie = [], J = [], te = E.next;
        }
        if (te !== null || S !== void 0) {
          for (var re = S === void 0 ? [] : Bs(S); te !== null; ) (te.e.f & Or) === 0 && re.push(te), te = te.next;
          var ue = re.length;
          if (ue > 0) {
            var _e = 4 & ee && F === 0 ? T : null;
            if (K) {
              for (Q = 0; Q < ue; Q += 1) (N = re[Q].a) == null || N.measure();
              for (Q = 0; Q < ue; Q += 1) (se = re[Q].a) == null || se.fix();
            }
            (function(ke, pe, Ce) {
              for (var oe = ke.items, xe = [], Fe = pe.length, Ae = 0; Ae < Fe; Ae++) Os(pe[Ae].e, xe, !0);
              var Oe = Fe > 0 && xe.length === 0 && Ce !== null;
              if (Oe) {
                var Te = Ce.parentNode;
                wc(Te), Te.append(Ce), oe.clear(), Lr(ke, pe[0].prev, pe[Fe - 1].next);
              }
              Dc(xe, () => {
                for (var Y = 0; Y < Fe; Y++) {
                  var ye = pe[Y];
                  Oe || (oe.delete(ye.k), Lr(ke, ye.prev, ye.next)), Ln(ye.e, !Oe);
                }
              });
            })(I, re, _e);
          }
        }
        K && Fa(() => {
          var ke;
          if (Z !== void 0) for (R of Z) (ke = R.a) == null || ke.apply();
        });
        for (var ge of (m.first = I.first && I.first.e, m.last = E && E.e, V.values())) Ln(ge.e);
        V.clear();
      })(h, u, l, b, c, s, t, a, r), o !== null && (u.length === 0 ? f ? jl(f) : f = Fn(() => o(c)) : f !== null && ra(f, () => {
        f = null;
      }));
    }
    na(() => {
      h != null || (h = qt);
      var m = (u = e(v)).length;
      if (g && m === 0) return;
      g = m === 0;
      let z = !1;
      if (bt && nc(c) === zl != (m === 0) && (Vn(c = Tl()), Kn(!1), z = !0), bt) {
        for (var I, V = null, T = 0; T < m; T++) {
          if (St.nodeType === 8 && St.data === "]") {
            c = St, z = !0, Kn(!1);
            break;
          }
          var q = u[T], ee = a(q, T);
          I = Hc(St, l, V, null, q, ee, T, s, t, r), l.items.set(ee, I), V = I;
        }
        m > 0 && Vn(Tl());
      }
      bt ? m === 0 && o && (f = Fn(() => o(c))) : w(), z && Kn(!0), e(v);
    }), bt && (c = St);
  }
  function Kg(n, t, r, a) {
    1 & a && hi(n.v, t), 2 & a ? hi(n.i, r) : n.i = r;
  }
  function Hc(n, t, r, a, s, o, c, l, i, u, h) {
    var f = 1 & i ? 16 & i ? ta(s) : Ts(s, !1, !1) : s, g = 2 & i ? ta(c) : c, b = { i: g, v: f, k: o, a: null, e: null, prev: r, next: a };
    try {
      return n === null && document.createDocumentFragment().append(n = Ir()), b.e = Fn(() => l(n, f, g, u), bt), b.e.prev = r && r.e, b.e.next = a && a.e, r === null ? h || (t.first = b) : (r.next = b, r.e.next = b.e), a !== null && (a.prev = b, a.e.prev = b.e), b;
    } finally {
    }
  }
  function Qs(n, t, r) {
    for (var a = n.next ? n.next.e.nodes_start : r, s = t ? t.e.nodes_start : r, o = n.e.nodes_start; o !== null && o !== a; ) {
      var c = Mr(o);
      s.before(o), o = c;
    }
  }
  function Lr(n, t, r) {
    t === null ? n.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
  }
  function Ge(n, t, r = !1, a = !1, s = !1) {
    var o = n, c = "";
    ve(() => {
      var l, i = qt;
      if (c !== (c = (l = t()) != null ? l : "")) {
        if (i.nodes_start !== null && (zc(i.nodes_start, i.nodes_end), i.nodes_start = i.nodes_end = null), c !== "") {
          if (bt) {
            St.data;
            for (var u = br(), h = u; u !== null && (u.nodeType !== 8 || u.data !== ""); ) h = u, u = Mr(u);
            if (u === null) throw Qi(), Aa;
            return rr(St, h), void (o = Vn(u));
          }
          var f = c + "";
          r ? f = `<svg>${f}</svg>` : a && (f = `<math>${f}</math>`);
          var g = Rs(f);
          if ((r || a) && (g = Nn(g)), rr(Nn(g), g.lastChild), r || a) for (; Nn(g); ) o.before(Nn(g));
          else o.before(g);
        }
      } else bt && br();
    });
  }
  function Zc(n, t, r, a, s) {
    var o;
    bt && br();
    var c = (o = t.$$slots) == null ? void 0 : o[r], l = !1;
    c === !0 && (c = t.children, l = !0), c === void 0 || c(n, l ? () => a : a);
  }
  function Jc(n, t, r) {
    bt && br();
    var a, s, o = n, c = null;
    function l() {
      s && (ra(s), s = null), s = c, c = null;
    }
    na(() => {
      if (a !== (a = t())) {
        if (a) {
          var i = o;
          c = Fn(() => r(i, a));
        }
        l();
      }
    }, ai), bt && (o = St);
  }
  function Yc(n, t, r, a, s, o) {
    let c = bt;
    var l, i;
    bt && br();
    var u = null;
    bt && St.nodeType === 1 && (u = St, br());
    var h, f = bt ? St : n;
    na(() => {
      const g = t() || null;
      var b = g === "svg" ? "http://www.w3.org/2000/svg" : null;
      g !== l && (h && (g === null ? ra(h, () => {
        h = null, i = null;
      }) : g === i ? jl(h) : Ln(h)), g && g !== i && (h = Fn(() => {
        if (rr(u = bt ? u : b ? document.createElementNS(b, g) : document.createElement(g), u), a) {
          bt && (w = g, Jg.includes(w)) && u.append(document.createComment(""));
          var v = bt ? Nn(u) : u.appendChild(Ir());
          bt && (v === null ? Kn(!1) : Vn(v)), a(u, v);
        }
        var w;
        qt.nodes_end = u, f.before(u);
      })), (l = g) && (i = l));
    }, ai), c && (Kn(!0), Vn(f));
  }
  function Ws(n, t, r) {
    Zi(() => {
      var a = Jt(() => t(n, r == null ? void 0 : r()) || {});
      if (r && (a != null && a.update)) {
        var s = !1, o = {};
        Ji(() => {
          var c = r();
          Rc(c), s && ql(o, c) && (o = c, a.update(c));
        }), s = !0;
      }
      if (a != null && a.destroy) return () => a.destroy();
    });
  }
  function Xg(n, t) {
    var r, a = void 0;
    na(() => {
      a !== (a = t()) && (r && (Ln(r), r = null), a && (r = Fn(() => {
        Zi(() => a(n));
      })));
    });
  }
  function Kc(n) {
    var t, r, a = "";
    if (typeof n == "string" || typeof n == "number") a += n;
    else if (typeof n == "object") if (Array.isArray(n)) {
      var s = n.length;
      for (t = 0; t < s; t++) n[t] && (r = Kc(n[t])) && (a && (a += " "), a += r);
    } else for (r in n) n[r] && (a && (a += " "), a += r);
    return a;
  }
  function Xi(n) {
    return typeof n == "object" ? (function() {
      for (var t, r, a = 0, s = "", o = arguments.length; a < o; a++) (t = arguments[a]) && (r = Kc(t)) && (s && (s += " "), s += r);
      return s;
    })(n) : n != null ? n : "";
  }
  const Xc = [...` 	
\r\f \v\uFEFF`];
  function eu(n, t = !1) {
    var r = t ? " !important;" : ";", a = "";
    for (var s in n) {
      var o = n[s];
      o != null && o !== "" && (a += " " + s + ": " + o + r);
    }
    return a;
  }
  function Us(n) {
    return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
  }
  function Et(n, t, r, a, s, o) {
    var c = n.__className;
    if (bt || c !== r || c === void 0) {
      var l = (function(h, f, g) {
        var b = h == null ? "" : "" + h;
        if (f && (b = b ? b + " " + f : f), g) {
          for (var v in g) if (g[v]) b = b ? b + " " + v : v;
          else if (b.length) for (var w = v.length, m = 0; (m = b.indexOf(v, m)) >= 0; ) {
            var z = m + w;
            m !== 0 && !Xc.includes(b[m - 1]) || z !== b.length && !Xc.includes(b[z]) ? m = z : b = (m === 0 ? "" : b.substring(0, m)) + b.substring(z + 1);
          }
        }
        return b === "" ? null : b;
      })(r, a, o);
      bt && l === n.getAttribute("class") || (l == null ? n.removeAttribute("class") : t ? n.className = l : n.setAttribute("class", l)), n.__className = r;
    } else if (o && s !== o) for (var i in o) {
      var u = !!o[i];
      s != null && u === !!s[i] || n.classList.toggle(i, u);
    }
    return o;
  }
  function Hs(n, t = {}, r, a) {
    for (var s in r) {
      var o = r[s];
      t[s] !== o && (r[s] == null ? n.style.removeProperty(s) : n.style.setProperty(s, o, a));
    }
  }
  function Gt(n, t, r, a) {
    var s = n.__style;
    if (bt || s !== t) {
      var o = (function(c, l) {
        if (l) {
          var i, u, h = "";
          if (Array.isArray(l) ? (i = l[0], u = l[1]) : i = l, c) {
            c = String(c).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
            var f = !1, g = 0, b = !1, v = [];
            i && v.push(...Object.keys(i).map(Us)), u && v.push(...Object.keys(u).map(Us));
            var w = 0, m = -1;
            const T = c.length;
            for (var z = 0; z < T; z++) {
              var I = c[z];
              if (b ? I === "/" && c[z - 1] === "*" && (b = !1) : f ? f === I && (f = !1) : I === "/" && c[z + 1] === "*" ? b = !0 : I === '"' || I === "'" ? f = I : I === "(" ? g++ : I === ")" && g--, !b && f === !1 && g === 0) {
                if (I === ":" && m === -1) m = z;
                else if (I === ";" || z === T - 1) {
                  if (m !== -1) {
                    var V = Us(c.substring(w, m).trim());
                    v.includes(V) || (I !== ";" && z++, h += " " + c.substring(w, z).trim() + ";");
                  }
                  w = z + 1, m = -1;
                }
              }
            }
          }
          return i && (h += eu(i)), u && (h += eu(u, !0)), (h = h.trim()) === "" ? null : h;
        }
        return c == null ? null : String(c);
      })(t, a);
      bt && o === n.getAttribute("style") || (o == null ? n.removeAttribute("style") : n.style.cssText = o), n.__style = t;
    } else a && (Array.isArray(a) ? (Hs(n, r == null ? void 0 : r[0], a[0]), Hs(n, r == null ? void 0 : r[1], a[1], "important")) : Hs(n, r, a));
    return a;
  }
  function el(n, t, r = !1) {
    if (n.multiple) {
      if (t == null) return;
      if (!Ri(t)) return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");
      for (var a of n.options) a.selected = t.includes(tu(a));
    } else {
      for (a of n.options)
        if (Og(tu(a), t)) return void (a.selected = !0);
      r && t === void 0 || (n.selectedIndex = -1);
    }
  }
  function Zs(n) {
    var t = new MutationObserver(() => {
      el(n, n.__value);
    });
    t.observe(n, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["value"] }), Gs(() => {
      t.disconnect();
    });
  }
  function tu(n) {
    return "__value" in n ? n.__value : n.value;
  }
  const vi = Symbol("class"), _i = Symbol("style"), nu = Symbol("is custom element"), ru = Symbol("is html");
  function aa(n) {
    if (bt) {
      var t, r = !1, a = () => {
        if (!r) {
          if (r = !0, n.hasAttribute("value")) {
            var s = n.value;
            Ie(n, "value", null), n.value = s;
          }
          if (n.hasAttribute("checked")) {
            var o = n.checked;
            Ie(n, "checked", null), n.checked = o;
          }
        }
      };
      n.__on_r = a, t = a, ui.length === 0 && $g(sc), ui.push(t), Sc();
    }
  }
  function Na(n, t) {
    var r = Wl(n);
    r.value !== (r.value = t != null ? t : void 0) && (n.value !== t || t === 0 && n.nodeName === "PROGRESS") && (n.value = t != null ? t : "");
  }
  function tl(n, t) {
    var r = Wl(n);
    r.checked !== (r.checked = t != null ? t : void 0) && (n.checked = t);
  }
  function eh(n, t) {
    t ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
  }
  function Ie(n, t, r, a) {
    var s = Wl(n);
    bt && (s[t] = n.getAttribute(t), t === "src" || t === "srcset" || t === "href" && n.nodeName === "LINK") || s[t] !== (s[t] = r) && (t === "loading" && (n[Ig] = r), r == null ? n.removeAttribute(t) : typeof r != "string" && lu(n).includes(t) ? n[t] = r : n.setAttribute(t, r));
  }
  function au(n, t, r = [], a = [], s, o = !1, c = !1) {
    hc(r, a, (l) => {
      var i = void 0, u = {}, h = n.nodeName === "SELECT", f = !1;
      if (na(() => {
        var b = t(...l.map(e)), v = (function(m, z, I, V, T = !1) {
          if (bt && T && m.tagName === "INPUT") {
            var q = m;
            (q.type === "checkbox" ? "defaultChecked" : "defaultValue") in I || aa(q);
          }
          var ee = Wl(m), H = ee[nu], D = !ee[ru];
          let ne = bt && H;
          ne && Kn(!1);
          var B = z || {}, N = m.tagName === "OPTION";
          for (var se in z) se in I || (I[se] = null);
          I.class ? I.class = Xi(I.class) : I[vi] && (I.class = null), I[_i] && (I.style != null || (I.style = null));
          var S = lu(m);
          for (const K in I) {
            let ce = I[K];
            if (N && K === "value" && ce == null) m.value = m.__value = "", B[K] = ce;
            else if (K !== "class") if (K !== "style") {
              var Z = B[K];
              if (ce !== Z || ce === void 0 && m.hasAttribute(K)) {
                B[K] = ce;
                var M = K[0] + K[1];
                if (M !== "$$") if (M === "on") {
                  const F = {}, G = "$$" + K;
                  let U = K.slice(2);
                  var P = Qg(U);
                  if (Rg(U) && (U = U.slice(0, -7), F.capture = !0), !P && Z) {
                    if (ce != null) continue;
                    m.removeEventListener(U, B[G], F), B[G] = null;
                  }
                  if (ce != null) if (P) m[`__${U}`] = ce, jn([U]);
                  else {
                    let te = function(E) {
                      B[K].call(this, E);
                    };
                    B[G] = Es(U, m, te, F);
                  }
                  else P && (m[`__${U}`] = void 0);
                } else if (K === "style") Ie(m, K, ce);
                else if (K === "autofocus") Fg(m, !!ce);
                else if (H || K !== "__value" && (K !== "value" || ce == null)) if (K === "selected" && N) eh(m, ce);
                else {
                  var R = K;
                  D || (R = Ug(R));
                  var Q = R === "defaultValue" || R === "defaultChecked";
                  if (ce != null || H || Q) Q || S.includes(R) && (H || typeof ce != "string") ? (m[R] = ce, R in ee && (ee[R] = Dn)) : typeof ce != "function" && Ie(m, R, ce);
                  else if (ee[K] = null, R === "value" || R === "checked") {
                    let F = m;
                    const G = z === void 0;
                    if (R === "value") {
                      let U = F.defaultValue;
                      F.removeAttribute(R), F.defaultValue = U, F.value = F.__value = G ? U : null;
                    } else {
                      let U = F.defaultChecked;
                      F.removeAttribute(R), F.defaultChecked = U, F.checked = !!G && U;
                    }
                  } else m.removeAttribute(K);
                }
                else m.value = m.__value = ce;
              }
            } else Gt(m, ce, z == null ? void 0 : z[_i], I[_i]), B[K] = ce, B[_i] = I[_i];
            else Et(m, m.namespaceURI === "http://www.w3.org/1999/xhtml", ce, V, z == null ? void 0 : z[vi], I[vi]), B[K] = ce, B[vi] = I[vi];
          }
          return ne && Kn(!0), B;
        })(n, i, b, s, o, c);
        f && h && "value" in b && el(n, b.value);
        for (let m of Object.getOwnPropertySymbols(u)) b[m] || Ln(u[m]);
        for (let m of Object.getOwnPropertySymbols(b)) {
          var w = b[m];
          m.description !== "@attach" || i && w === i[m] || (u[m] && Ln(u[m]), u[m] = Fn(() => Xg(n, () => w))), v[m] = w;
        }
        i = v;
      }), h) {
        var g = n;
        Zi(() => {
          el(g, i.value, !0), Zs(g);
        });
      }
      f = !0;
    });
  }
  function Wl(n) {
    var t;
    return (t = n.__attributes) != null ? t : n.__attributes = { [nu]: n.nodeName.includes("-"), [ru]: n.namespaceURI === "http://www.w3.org/1999/xhtml" };
  }
  var iu = /* @__PURE__ */ new Map();
  function lu(n) {
    var t, r = n.getAttribute("is") || n.nodeName, a = iu.get(r);
    if (a) return a;
    iu.set(r, a = []);
    for (var s = n, o = Element.prototype; o !== s; ) {
      for (var c in t = Zo(s)) t[c].set && a.push(c);
      s = Dl(s);
    }
    return a;
  }
  function th(n, t, r = t) {
    var a = /* @__PURE__ */ new WeakSet();
    (function(s, o, c, l = c) {
      s.addEventListener(o, () => Ll(c));
      const i = s.__on_r;
      s.__on_r = i ? () => {
        i(), l(!0);
      } : () => l(!0), Sc();
    })(n, "input", async (s) => {
      var o = s ? n.defaultValue : n.value;
      if (o = Js(n) ? Ys(o) : o, r(o), fn !== null && a.add(fn), await Fs(), o !== (o = t())) {
        var c = n.selectionStart, l = n.selectionEnd;
        n.value = o != null ? o : "", l !== null && (n.selectionStart = c, n.selectionEnd = Math.min(l, n.value.length));
      }
    }), (bt && n.defaultValue !== n.value || Jt(t) == null && n.value) && (r(Js(n) ? Ys(n.value) : n.value), fn !== null && a.add(fn)), Ji(() => {
      var s = t();
      if (n === document.activeElement) {
        var o = Wi != null ? Wi : fn;
        if (a.has(o)) return;
      }
      Js(n) && s === Ys(n.value) || (n.type !== "date" || s || n.value) && s !== n.value && (n.value = s != null ? s : "");
    });
  }
  function Js(n) {
    var t = n.type;
    return t === "number" || t === "range";
  }
  function Ys(n) {
    return n === "" ? null : +n;
  }
  const Ks = class {
    constructor(n) {
      mt(this, xs), mt(this, Da, /* @__PURE__ */ new WeakMap()), mt(this, Fi), mt(this, Pl), xt(this, Pl, n);
    }
    observe(n, t) {
      var r = Be(this, Da).get(n) || /* @__PURE__ */ new Set();
      return r.add(t), Be(this, Da).set(n, r), un(this, xs, Qo).call(this).observe(n, Be(this, Pl)), () => {
        var a = Be(this, Da).get(n);
        a.delete(t), a.size === 0 && (Be(this, Da).delete(n), Be(this, Fi).unobserve(n));
      };
    }
  };
  Da = /* @__PURE__ */ new WeakMap(), Fi = /* @__PURE__ */ new WeakMap(), Pl = /* @__PURE__ */ new WeakMap(), xs = /* @__PURE__ */ new WeakSet(), Qo = function() {
    var n;
    return (n = Be(this, Fi)) != null ? n : xt(this, Fi, new ResizeObserver((t) => {
      for (var r of t) for (var a of (Ks.entries.set(r.target, r), Be(this, Da).get(r.target) || [])) a(r);
    }));
  }, wn(Ks, "entries", /* @__PURE__ */ new WeakMap());
  var nh = new Ks({ box: "border-box" });
  function Ul(n, t, r) {
    var a = nh.observe(n, () => r(n[t]));
    Zi(() => (Jt(() => r(n[t])), a));
  }
  function su(n, t) {
    return n === t || (n == null ? void 0 : n[ea]) === t;
  }
  function ki(n = {}, t, r, a) {
    return Zi(() => {
      var s, o;
      return Ji(() => {
        s = o, o = [], Jt(() => {
          n !== r(...o) && (t(n, ...o), s && su(r(...s), n) && t(null, ...s));
        });
      }), () => {
        Fa(() => {
          o && su(r(...o), n) && t(null, ...o);
        });
      };
    }), n;
  }
  function ou(n, t) {
    if (n.l.s) for (const r of n.l.s) e(r);
    t();
  }
  function cu(n, t, r) {
    if (n == null) return t(void 0), Br;
    const a = Jt(() => n.subscribe(t, r));
    return a.unsubscribe ? () => a.unsubscribe() : a;
  }
  const mi = [];
  function ia(n, t = Br) {
    let r = null;
    const a = /* @__PURE__ */ new Set();
    function s(c) {
      if (ql(n, c) && (n = c, r)) {
        const l = !mi.length;
        for (const i of a) i[1](), mi.push(i, n);
        if (l) {
          for (let i = 0; i < mi.length; i += 2) mi[i][0](mi[i + 1]);
          mi.length = 0;
        }
      }
    }
    function o(c) {
      s(c(n));
    }
    return { set: s, update: o, subscribe: function(c, l = Br) {
      const i = [c, l];
      return a.add(i), a.size === 1 && (r = t(s, o) || Br), c(n), () => {
        a.delete(i), a.size === 0 && r && (r(), r = null);
      };
    } };
  }
  let uu, Hl = !1, Xs = Symbol();
  function $e(n, t, r) {
    var a;
    const s = (a = r[t]) != null ? a : r[t] = { store: null, source: Ts(void 0), unsubscribe: Br };
    if (s.store !== n && !(Xs in r)) if (s.unsubscribe(), s.store = n != null ? n : null, n == null) s.source.v = void 0, s.unsubscribe = Br;
    else {
      var o = !0;
      s.unsubscribe = cu(n, (c) => {
        o ? s.source.v = c : ae(s.source, c);
      }), o = !1;
    }
    return n && Xs in r ? (function(c) {
      let l;
      return cu(c, (i) => l = i)(), l;
    })(n) : e(s.source);
  }
  function vt() {
    const n = {};
    return [n, function() {
      Gs(() => {
        for (var t in n)
          n[t].unsubscribe();
        Ta(n, Xs, { enumerable: !1, value: !0 });
      });
    }];
  }
  function k(n, t, r, a) {
    var s, o, c, l, i = !ii || !!(2 & r), u = !!(8 & r), h = !!(16 & r), f = a, g = !0, b = () => (g && (g = !1, f = h ? Jt(a) : a), f);
    if (u) {
      var v = ea in n || ec in n;
      c = (o = (s = qa(n, t)) == null ? void 0 : s.set) != null ? o : v && t in n ? (q) => n[t] = q : void 0;
    }
    var w, m = !1;
    if (u ? [l, m] = (function(q) {
      var ee = Hl;
      try {
        return Hl = !1, [q(), Hl];
      } finally {
        Hl = ee;
      }
    })(() => n[t]) : l = n[t], l === void 0 && a !== void 0 && (l = b(), c && (i && (function() {
      throw new Error("https://svelte.dev/e/props_invalid_value");
    })(), c(l))), w = i ? () => {
      var q = n[t];
      return q === void 0 ? b() : (g = !0, q);
    } : () => {
      var q = n[t];
      return q !== void 0 && (f = void 0), q === void 0 ? f : q;
    }, i && !(4 & r)) return w;
    if (c) {
      var z = n.$$legacy;
      return function(q, ee) {
        return arguments.length > 0 ? (i && ee && !z && !m || c(ee ? w() : q), q) : w();
      };
    }
    var I = !1, V = (1 & r ? Hi : Fl)(() => (I = !1, w()));
    u && e(V);
    var T = qt;
    return function(q, ee) {
      if (arguments.length > 0) {
        const H = ee ? e(V) : i && u ? ct(q) : q;
        return ae(V, H), I = !0, f !== void 0 && (f = H), q;
      }
      return Ea && I || (T.f & ri) !== 0 ? V.v : e(V);
    };
  }
  class rh {
    constructor(t) {
      var r, a;
      mt(this, ha), mt(this, Sr);
      var s = /* @__PURE__ */ new Map(), o = (l, i) => {
        var u = Ts(i, !1, !1);
        return s.set(l, u), u;
      };
      const c = new Proxy({ ...t.props || {}, $$events: {} }, { get(l, i) {
        var u;
        return e((u = s.get(i)) != null ? u : o(i, Reflect.get(l, i)));
      }, has(l, i) {
        var u;
        return i === ec || (e((u = s.get(i)) != null ? u : o(i, Reflect.get(l, i))), Reflect.has(l, i));
      }, set(l, i, u) {
        var h;
        return ae((h = s.get(i)) != null ? h : o(i, u), u), Reflect.set(l, i, u);
      } });
      xt(this, Sr, (t.hydrate ? Yg : Wc)(t.component, { target: t.target, anchor: t.anchor, props: c, context: t.context, intro: (r = t.intro) != null && r, recover: t.recover })), (a = t == null ? void 0 : t.props) != null && a.$$host && t.sync !== !1 || _(), xt(this, ha, c.$$events);
      for (const l of Object.keys(Be(this, Sr))) l !== "$set" && l !== "$destroy" && l !== "$on" && Ta(this, l, { get() {
        return Be(this, Sr)[l];
      }, set(i) {
        Be(this, Sr)[l] = i;
      }, enumerable: !0 });
      Be(this, Sr).$set = (l) => {
        Object.assign(c, l);
      }, Be(this, Sr).$destroy = () => {
        (function(l, i) {
          const u = Ns.get(l);
          u ? (Ns.delete(l), u(i)) : Promise.resolve();
        })(Be(this, Sr));
      };
    }
    $set(t) {
      Be(this, Sr).$set(t);
    }
    $on(t, r) {
      Be(this, ha)[t] = Be(this, ha)[t] || [];
      const a = (...s) => r.call(this, ...s);
      return Be(this, ha)[t].push(a), () => {
        Be(this, ha)[t] = Be(this, ha)[t].filter((s) => s !== a);
      };
    }
    $destroy() {
      Be(this, Sr).$destroy();
    }
  }
  function Zl(n, t, r, a) {
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
  function Je(n, t, r, a, s, o) {
    let c = class extends uu {
      constructor() {
        super(n, r, s), this.$$p_d = t;
      }
      static get observedAttributes() {
        return $l(t).map((l) => (t[l].attribute || l).toLowerCase());
      }
    };
    return $l(t).forEach((l) => {
      Ta(c.prototype, l, { get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      }, set(i) {
        var u;
        i = Zl(l, i, t), this.$$d[l] = i;
        var h = this.$$c;
        h && ((u = qa(h, l)) != null && u.get ? h[l] = i : h.$set({ [l]: i }));
      } });
    }), a.forEach((l) => {
      Ta(c.prototype, l, { get() {
        var i;
        return (i = this.$$c) == null ? void 0 : i[l];
      } });
    }), o && (c = o(c)), n.element = c, c;
  }
  ha = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), typeof HTMLElement == "function" && (uu = class extends HTMLElement {
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
          o in this.$$d || (this.$$d[o] = Zl(o, s.value, this.$$p_d, "toProp"));
        }
        for (const s in this.$$p_d) s in this.$$d || this[s] === void 0 || (this.$$d[s] = this[s], delete this[s]);
        this.$$c = (n = { component: this.$$ctor, target: this.shadowRoot || this, props: { ...this.$$d, $$slots: r, $$host: this } }, new rh(n)), this.$$me = (function(s) {
          ja.ensure();
          const o = zr(524352, s, !0);
          return () => {
            Ln(o);
          };
        })(() => {
          Ji(() => {
            var s;
            this.$$r = !0;
            for (const o of $l(this.$$c)) {
              if (!((s = this.$$p_d[o]) != null && s.reflect)) continue;
              this.$$d[o] = this.$$c[o];
              const c = Zl(o, this.$$d[o], this.$$p_d, "toAttribute");
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
      this.$$r || (n = this.$$g_p(n), this.$$d[n] = Zl(n, r, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [n]: this.$$d[n] }));
    }
    disconnectedCallback() {
      this.$$cn = !1, Promise.resolve().then(() => {
        !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
      });
    }
    $$g_p(n) {
      return $l(this.$$p_d).find((t) => this.$$p_d[t].attribute === n || !this.$$p_d[t].attribute && t.toLowerCase() === n) || n;
    }
  });
  const ah = ["primaryBackground", "secondaryBackground", "primaryText", "secondaryText", "border", "overlay", "primaryAccent", "primaryAccentText", "badgeBackground", "badgeText", "error"].map((n) => `brand_${n}`), ih = { primaryBackground: "#EDEDED", secondaryBackground: "#FFFFFF", primaryText: "#000000", secondaryText: "#555555", border: "#0000004D", overlay: "#000000", primaryAccent: "#000000", primaryAccentText: "#FFFFFF", badgeBackground: "#000000", badgeText: "#FFFFFF", error: "#D72C2C" };
  function du(n) {
    return typeof n == "string" && ah.includes(n);
  }
  function lh(n, t) {
    return du(n) ? (function(r) {
      const a = r.slice(1).match(/../g).map((s) => parseInt(s, 16));
      return { red: a[0], green: a[1], blue: a[2], alpha: a.length > 3 ? a[3] / 255 : 1 };
    })((function(r, a) {
      var s;
      const o = (function(c) {
        return c.slice(6);
      })(r);
      return (s = a == null ? void 0 : a[o]) != null ? s : ih[o];
    })(n, t)) : n;
  }
  var gt = ((n) => (n.QuantityBreak = "quantity-break", n.Bxgy = "bxgy", n.Bundle = "bundle", n.MixAndMatch = "mix-and-match", n.Sku = "sku", n))(gt || {});
  function sr(n, t) {
    return du(n) ? lh(n, t) : Array.isArray(n) ? n.map((r) => sr(r, t)) : n && typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r, a]) => [r, sr(a, t)])) : n;
  }
  const gu = "swatchSettings", nl = (n) => {
    const t = ia(n);
    return oi(gu, t), { swatchSettings: t, setSwatchSettings: (r) => {
      t.set(r);
    } };
  }, hu = () => {
    const n = si(gu);
    if (!n) throw new Error("getSwatchSettings must be called within a component tree that has setupSwatchSettings initialized");
    return n;
  };
  var sh = $("<span> </span>"), oh = $("<div></div>");
  function la(n, t) {
    it(t, !0);
    const [r, a] = vt(), s = k(t, "product", 7), o = k(t, "class", 7, ""), c = hu(), l = d(() => $e(c, "$swatchSettings", r).showSelectedSwatchName ? [] : s().options.map((b) => b.name));
    var i = { get product() {
      return s();
    }, set product(b) {
      s(b), _();
    }, get class() {
      return o();
    }, set class(b = "") {
      o(b), _();
    } }, u = ze(), h = fe(u), f = (b) => {
      var v = oh();
      Vt(v, 21, () => e(l), Vr, (w, m) => {
        var z = sh(), I = y(z, !0);
        x(z), ve(() => ft(I, e(m))), p(w, z);
      }), x(v), ve(() => Et(v, 1, Xi(["kaching-bundles__bar-variant-names", o()]))), p(b, v);
    };
    O(h, (b) => {
      e(l).length && b(f);
    }), p(n, u);
    var g = lt(i);
    return a(), g;
  }
  Je(la, { product: {}, class: {} }, [], [], !0);
  const Jl = Math.min, Qa = Math.max, Yl = Math.round, Kl = Math.floor, jr = (n) => ({ x: n, y: n }), ch = { left: "right", right: "left", bottom: "top", top: "bottom" }, uh = { start: "end", end: "start" };
  function pu(n, t, r) {
    return Qa(n, Jl(t, r));
  }
  function Xl(n, t) {
    return typeof n == "function" ? n(t) : n;
  }
  function Wa(n) {
    return n.split("-")[0];
  }
  function es(n) {
    return n.split("-")[1];
  }
  function bu(n) {
    return n === "x" ? "y" : "x";
  }
  function fu(n) {
    return n === "y" ? "height" : "width";
  }
  const dh = /* @__PURE__ */ new Set(["top", "bottom"]);
  function xa(n) {
    return dh.has(Wa(n)) ? "y" : "x";
  }
  function vu(n) {
    return bu(xa(n));
  }
  function eo(n) {
    return n.replace(/start|end/g, (t) => uh[t]);
  }
  const _u = ["left", "right"], ku = ["right", "left"], gh = ["top", "bottom"], hh = ["bottom", "top"];
  function ph(n, t, r, a) {
    const s = es(n);
    let o = (function(c, l, i) {
      switch (c) {
        case "top":
        case "bottom":
          return i ? l ? ku : _u : l ? _u : ku;
        case "left":
        case "right":
          return l ? gh : hh;
        default:
          return [];
      }
    })(Wa(n), r === "start", a);
    return s && (o = o.map((c) => c + "-" + s), t && (o = o.concat(o.map(eo)))), o;
  }
  function ts(n) {
    return n.replace(/left|right|bottom|top/g, (t) => ch[t]);
  }
  function ns(n) {
    const { x: t, y: r, width: a, height: s } = n;
    return { width: a, height: s, top: r, left: t, right: t + a, bottom: r + s, x: t, y: r };
  }
  function mu(n, t, r) {
    let { reference: a, floating: s } = n;
    const o = xa(t), c = vu(t), l = fu(c), i = Wa(t), u = o === "y", h = a.x + a.width / 2 - s.width / 2, f = a.y + a.height / 2 - s.height / 2, g = a[l] / 2 - s[l] / 2;
    let b;
    switch (i) {
      case "top":
        b = { x: h, y: a.y - s.height };
        break;
      case "bottom":
        b = { x: h, y: a.y + a.height };
        break;
      case "right":
        b = { x: a.x + a.width, y: f };
        break;
      case "left":
        b = { x: a.x - s.width, y: f };
        break;
      default:
        b = { x: a.x, y: a.y };
    }
    switch (es(t)) {
      case "start":
        b[c] -= g * (r && u ? -1 : 1);
        break;
      case "end":
        b[c] += g * (r && u ? -1 : 1);
    }
    return b;
  }
  async function xu(n, t) {
    var r;
    t === void 0 && (t = {});
    const { x: a, y: s, platform: o, rects: c, elements: l, strategy: i } = n, { boundary: u = "clippingAncestors", rootBoundary: h = "viewport", elementContext: f = "floating", altBoundary: g = !1, padding: b = 0 } = Xl(t, n), v = (function(q) {
      return typeof q != "number" ? (function(ee) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...ee };
      })(q) : { top: q, right: q, bottom: q, left: q };
    })(b), w = l[g ? f === "floating" ? "reference" : "floating" : f], m = ns(await o.getClippingRect({ element: (r = await (o.isElement == null ? void 0 : o.isElement(w))) == null || r ? w : w.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: u, rootBoundary: h, strategy: i })), z = f === "floating" ? { x: a, y: s, width: c.floating.width, height: c.floating.height } : c.reference, I = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), V = await (o.isElement == null ? void 0 : o.isElement(I)) && await (o.getScale == null ? void 0 : o.getScale(I)) || { x: 1, y: 1 }, T = ns(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l, rect: z, offsetParent: I, strategy: i }) : z);
    return { top: (m.top - T.top + v.top) / V.y, bottom: (T.bottom - m.bottom + v.bottom) / V.y, left: (m.left - T.left + v.left) / V.x, right: (T.right - m.right + v.right) / V.x };
  }
  const bh = /* @__PURE__ */ new Set(["left", "top"]);
  function rs() {
    return typeof window != "undefined";
  }
  function xi(n) {
    return yu(n) ? (n.nodeName || "").toLowerCase() : "#document";
  }
  function or(n) {
    var t;
    return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
  }
  function Er(n) {
    var t;
    return (t = (yu(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
  }
  function yu(n) {
    return !!rs() && (n instanceof Node || n instanceof or(n).Node);
  }
  function Ar(n) {
    return !!rs() && (n instanceof Element || n instanceof or(n).Element);
  }
  function Rr(n) {
    return !!rs() && (n instanceof HTMLElement || n instanceof or(n).HTMLElement);
  }
  function wu(n) {
    return !(!rs() || typeof ShadowRoot == "undefined") && (n instanceof ShadowRoot || n instanceof or(n).ShadowRoot);
  }
  const fh = /* @__PURE__ */ new Set(["inline", "contents"]);
  function rl(n) {
    const { overflow: t, overflowX: r, overflowY: a, display: s } = Tr(n);
    return /auto|scroll|overlay|hidden|clip/.test(t + a + r) && !fh.has(s);
  }
  const vh = /* @__PURE__ */ new Set(["table", "td", "th"]);
  function _h(n) {
    return vh.has(xi(n));
  }
  const kh = [":popover-open", ":modal"];
  function as(n) {
    return kh.some((t) => {
      try {
        return n.matches(t);
      } catch {
        return !1;
      }
    });
  }
  const mh = ["transform", "translate", "scale", "rotate", "perspective"], xh = ["transform", "translate", "scale", "rotate", "perspective", "filter"], yh = ["paint", "layout", "strict", "content"];
  function to(n) {
    const t = no(), r = Ar(n) ? Tr(n) : n;
    return mh.some((a) => !!r[a] && r[a] !== "none") || !!r.containerType && r.containerType !== "normal" || !t && !!r.backdropFilter && r.backdropFilter !== "none" || !t && !!r.filter && r.filter !== "none" || xh.some((a) => (r.willChange || "").includes(a)) || yh.some((a) => (r.contain || "").includes(a));
  }
  function no() {
    return !(typeof CSS == "undefined" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
  }
  const wh = /* @__PURE__ */ new Set(["html", "body", "#document"]);
  function yi(n) {
    return wh.has(xi(n));
  }
  function Tr(n) {
    return or(n).getComputedStyle(n);
  }
  function is(n) {
    return Ar(n) ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop } : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
  }
  function ya(n) {
    if (xi(n) === "html") return n;
    const t = n.assignedSlot || n.parentNode || wu(n) && n.host || Er(n);
    return wu(t) ? t.host : t;
  }
  function Pu(n) {
    const t = ya(n);
    return yi(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : Rr(t) && rl(t) ? t : Pu(t);
  }
  function al(n, t, r) {
    var a;
    t === void 0 && (t = []), r === void 0 && (r = !0);
    const s = Pu(n), o = s === ((a = n.ownerDocument) == null ? void 0 : a.body), c = or(s);
    if (o) {
      const l = ro(c);
      return t.concat(c, c.visualViewport || [], rl(s) ? s : [], l && r ? al(l) : []);
    }
    return t.concat(s, al(s, [], r));
  }
  function ro(n) {
    return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
  }
  function Su(n) {
    const t = Tr(n);
    let r = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
    const s = Rr(n), o = s ? n.offsetWidth : r, c = s ? n.offsetHeight : a, l = Yl(r) !== o || Yl(a) !== c;
    return l && (r = o, a = c), { width: r, height: a, $: l };
  }
  function ao(n) {
    return Ar(n) ? n : n.contextElement;
  }
  function wi(n) {
    const t = ao(n);
    if (!Rr(t)) return jr(1);
    const r = t.getBoundingClientRect(), { width: a, height: s, $: o } = Su(t);
    let c = (o ? Yl(r.width) : r.width) / a, l = (o ? Yl(r.height) : r.height) / s;
    return c && Number.isFinite(c) || (c = 1), l && Number.isFinite(l) || (l = 1), { x: c, y: l };
  }
  const Ph = jr(0);
  function Bu(n) {
    const t = or(n);
    return no() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : Ph;
  }
  function Ua(n, t, r, a) {
    t === void 0 && (t = !1), r === void 0 && (r = !1);
    const s = n.getBoundingClientRect(), o = ao(n);
    let c = jr(1);
    t && (a ? Ar(a) && (c = wi(a)) : c = wi(n));
    const l = (function(g, b, v) {
      return b === void 0 && (b = !1), !(!v || b && v !== or(g)) && b;
    })(o, r, a) ? Bu(o) : jr(0);
    let i = (s.left + l.x) / c.x, u = (s.top + l.y) / c.y, h = s.width / c.x, f = s.height / c.y;
    if (o) {
      const g = or(o), b = a && Ar(a) ? or(a) : a;
      let v = g, w = ro(v);
      for (; w && a && b !== v; ) {
        const m = wi(w), z = w.getBoundingClientRect(), I = Tr(w), V = z.left + (w.clientLeft + parseFloat(I.paddingLeft)) * m.x, T = z.top + (w.clientTop + parseFloat(I.paddingTop)) * m.y;
        i *= m.x, u *= m.y, h *= m.x, f *= m.y, i += V, u += T, v = or(w), w = ro(v);
      }
    }
    return ns({ width: h, height: f, x: i, y: u });
  }
  function ls(n, t) {
    const r = is(n).scrollLeft;
    return t ? t.left + r : Ua(Er(n)).left + r;
  }
  function Cu(n, t) {
    const r = n.getBoundingClientRect();
    return { x: r.left + t.scrollLeft - ls(n, r), y: r.top + t.scrollTop };
  }
  const Sh = /* @__PURE__ */ new Set(["absolute", "fixed"]);
  function Iu(n, t, r) {
    let a;
    if (t === "viewport") a = (function(s, o) {
      const c = or(s), l = Er(s), i = c.visualViewport;
      let u = l.clientWidth, h = l.clientHeight, f = 0, g = 0;
      if (i) {
        u = i.width, h = i.height;
        const v = no();
        (!v || v && o === "fixed") && (f = i.offsetLeft, g = i.offsetTop);
      }
      const b = ls(l);
      if (b <= 0) {
        const v = l.ownerDocument, w = v.body, m = getComputedStyle(w), z = v.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, I = Math.abs(l.clientWidth - w.clientWidth - z);
        I <= 25 && (u -= I);
      } else b <= 25 && (u += b);
      return { width: u, height: h, x: f, y: g };
    })(n, r);
    else if (t === "document") a = (function(s) {
      const o = Er(s), c = is(s), l = s.ownerDocument.body, i = Qa(o.scrollWidth, o.clientWidth, l.scrollWidth, l.clientWidth), u = Qa(o.scrollHeight, o.clientHeight, l.scrollHeight, l.clientHeight);
      let h = -c.scrollLeft + ls(s);
      const f = -c.scrollTop;
      return Tr(l).direction === "rtl" && (h += Qa(o.clientWidth, l.clientWidth) - i), { width: i, height: u, x: h, y: f };
    })(Er(n));
    else if (Ar(t)) a = (function(s, o) {
      const c = Ua(s, !0, o === "fixed"), l = c.top + s.clientTop, i = c.left + s.clientLeft, u = Rr(s) ? wi(s) : jr(1);
      return { width: s.clientWidth * u.x, height: s.clientHeight * u.y, x: i * u.x, y: l * u.y };
    })(t, r);
    else {
      const s = Bu(n);
      a = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
    }
    return ns(a);
  }
  function Mu(n, t) {
    const r = ya(n);
    return !(r === t || !Ar(r) || yi(r)) && (Tr(r).position === "fixed" || Mu(r, t));
  }
  function Bh(n, t, r) {
    const a = Rr(t), s = Er(t), o = r === "fixed", c = Ua(n, !0, o, t);
    let l = { scrollLeft: 0, scrollTop: 0 };
    const i = jr(0);
    function u() {
      i.x = ls(s);
    }
    if (a || !a && !o) if ((xi(t) !== "body" || rl(s)) && (l = is(t)), a) {
      const f = Ua(t, !0, o, t);
      i.x = f.x + t.clientLeft, i.y = f.y + t.clientTop;
    } else s && u();
    o && !a && s && u();
    const h = !s || a || o ? jr(0) : Cu(s, l);
    return { x: c.left + l.scrollLeft - i.x - h.x, y: c.top + l.scrollTop - i.y - h.y, width: c.width, height: c.height };
  }
  function io(n) {
    return Tr(n).position === "static";
  }
  function zu(n, t) {
    if (!Rr(n) || Tr(n).position === "fixed") return null;
    if (t) return t(n);
    let r = n.offsetParent;
    return Er(n) === r && (r = r.ownerDocument.body), r;
  }
  function $u(n, t) {
    const r = or(n);
    if (as(n)) return r;
    if (!Rr(n)) {
      let s = ya(n);
      for (; s && !yi(s); ) {
        if (Ar(s) && !io(s)) return s;
        s = ya(s);
      }
      return r;
    }
    let a = zu(n, t);
    for (; a && _h(a) && io(a); ) a = zu(a, t);
    return a && yi(a) && io(a) && !to(a) ? r : a || (function(s) {
      let o = ya(s);
      for (; Rr(o) && !yi(o); ) {
        if (to(o)) return o;
        if (as(o)) return null;
        o = ya(o);
      }
      return null;
    })(n) || r;
  }
  const Ch = { convertOffsetParentRelativeRectToViewportRelativeRect: function(n) {
    let { elements: t, rect: r, offsetParent: a, strategy: s } = n;
    const o = s === "fixed", c = Er(a), l = !!t && as(t.floating);
    if (a === c || l && o) return r;
    let i = { scrollLeft: 0, scrollTop: 0 }, u = jr(1);
    const h = jr(0), f = Rr(a);
    if ((f || !f && !o) && ((xi(a) !== "body" || rl(c)) && (i = is(a)), Rr(a))) {
      const b = Ua(a);
      u = wi(a), h.x = b.x + a.clientLeft, h.y = b.y + a.clientTop;
    }
    const g = !c || f || o ? jr(0) : Cu(c, i);
    return { width: r.width * u.x, height: r.height * u.y, x: r.x * u.x - i.scrollLeft * u.x + h.x + g.x, y: r.y * u.y - i.scrollTop * u.y + h.y + g.y };
  }, getDocumentElement: Er, getClippingRect: function(n) {
    let { element: t, boundary: r, rootBoundary: a, strategy: s } = n;
    const o = [...r === "clippingAncestors" ? as(t) ? [] : (function(i, u) {
      const h = u.get(i);
      if (h) return h;
      let f = al(i, [], !1).filter((w) => Ar(w) && xi(w) !== "body"), g = null;
      const b = Tr(i).position === "fixed";
      let v = b ? ya(i) : i;
      for (; Ar(v) && !yi(v); ) {
        const w = Tr(v), m = to(v);
        m || w.position !== "fixed" || (g = null), (b ? !m && !g : !m && w.position === "static" && g && Sh.has(g.position) || rl(v) && !m && Mu(i, v)) ? f = f.filter((z) => z !== v) : g = w, v = ya(v);
      }
      return u.set(i, f), f;
    })(t, this._c) : [].concat(r), a], c = o[0], l = o.reduce((i, u) => {
      const h = Iu(t, u, s);
      return i.top = Qa(h.top, i.top), i.right = Jl(h.right, i.right), i.bottom = Jl(h.bottom, i.bottom), i.left = Qa(h.left, i.left), i;
    }, Iu(t, c, s));
    return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
  }, getOffsetParent: $u, getElementRects: async function(n) {
    const t = this.getOffsetParent || $u, r = this.getDimensions, a = await r(n.floating);
    return { reference: Bh(n.reference, await t(n.floating), n.strategy), floating: { x: 0, y: 0, width: a.width, height: a.height } };
  }, getClientRects: function(n) {
    return Array.from(n.getClientRects());
  }, getDimensions: function(n) {
    const { width: t, height: r } = Su(n);
    return { width: t, height: r };
  }, getScale: wi, isElement: Ar, isRTL: function(n) {
    return Tr(n).direction === "rtl";
  } };
  function Du(n, t) {
    return n.x === t.x && n.y === t.y && n.width === t.width && n.height === t.height;
  }
  function Ih(n, t, r, a) {
    a === void 0 && (a = {});
    const { ancestorScroll: s = !0, ancestorResize: o = !0, elementResize: c = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: i = !1 } = a, u = ao(n), h = s || o ? [...u ? al(u) : [], ...al(t)] : [];
    h.forEach((m) => {
      s && m.addEventListener("scroll", r, { passive: !0 }), o && m.addEventListener("resize", r);
    });
    const f = u && l ? (function(m, z) {
      let I, V = null;
      const T = Er(m);
      function q() {
        var ee;
        clearTimeout(I), (ee = V) == null || ee.disconnect(), V = null;
      }
      return (function ee(H, D) {
        H === void 0 && (H = !1), D === void 0 && (D = 1), q();
        const ne = m.getBoundingClientRect(), { left: B, top: N, width: se, height: S } = ne;
        if (H || z(), !se || !S) return;
        const Z = { rootMargin: -Kl(N) + "px " + -Kl(T.clientWidth - (B + se)) + "px " + -Kl(T.clientHeight - (N + S)) + "px " + -Kl(B) + "px", threshold: Qa(0, Jl(1, D)) || 1 };
        let M = !0;
        function P(R) {
          const Q = R[0].intersectionRatio;
          if (Q !== D) {
            if (!M) return ee();
            Q ? ee(!1, Q) : I = setTimeout(() => {
              ee(!1, 1e-7);
            }, 1e3);
          }
          Q !== 1 || Du(ne, m.getBoundingClientRect()) || ee(), M = !1;
        }
        try {
          V = new IntersectionObserver(P, { ...Z, root: T.ownerDocument });
        } catch {
          V = new IntersectionObserver(P, Z);
        }
        V.observe(m);
      })(!0), q;
    })(u, r) : null;
    let g, b = -1, v = null;
    c && (v = new ResizeObserver((m) => {
      let [z] = m;
      z && z.target === u && v && (v.unobserve(t), cancelAnimationFrame(b), b = requestAnimationFrame(() => {
        var I;
        (I = v) == null || I.observe(t);
      })), r();
    }), u && !i && v.observe(u), v.observe(t));
    let w = i ? Ua(n) : null;
    return i && (function m() {
      const z = Ua(n);
      w && !Du(w, z) && r(), w = z, g = requestAnimationFrame(m);
    })(), r(), () => {
      var m;
      h.forEach((z) => {
        s && z.removeEventListener("scroll", r), o && z.removeEventListener("resize", r);
      }), f == null || f(), (m = v) == null || m.disconnect(), v = null, i && cancelAnimationFrame(g);
    };
  }
  const Mh = function(n) {
    return { name: "offset", options: n, async fn(t) {
      var r, a;
      const { x: s, y: o, placement: c, middlewareData: l } = t, i = await (async function(u, h) {
        const { placement: f, platform: g, elements: b } = u, v = await (g.isRTL == null ? void 0 : g.isRTL(b.floating)), w = Wa(f), m = es(f), z = xa(f) === "y", I = bh.has(w) ? -1 : 1, V = v && z ? -1 : 1, T = Xl(h, u);
        let { mainAxis: q, crossAxis: ee, alignmentAxis: H } = typeof T == "number" ? { mainAxis: T, crossAxis: 0, alignmentAxis: null } : { mainAxis: T.mainAxis || 0, crossAxis: T.crossAxis || 0, alignmentAxis: T.alignmentAxis };
        return m && typeof H == "number" && (ee = m === "end" ? -1 * H : H), z ? { x: ee * V, y: q * I } : { x: q * I, y: ee * V };
      })(t, n);
      return c === ((r = l.offset) == null ? void 0 : r.placement) && (a = l.arrow) != null && a.alignmentOffset ? {} : { x: s + i.x, y: o + i.y, data: { ...i, placement: c } };
    } };
  }, zh = function(n) {
    return n === void 0 && (n = {}), { name: "shift", options: n, async fn(t) {
      const { x: r, y: a, placement: s } = t, { mainAxis: o = !0, crossAxis: c = !1, limiter: l = { fn: (m) => {
        let { x: z, y: I } = m;
        return { x: z, y: I };
      } }, ...i } = Xl(n, t), u = { x: r, y: a }, h = await xu(t, i), f = xa(Wa(s)), g = bu(f);
      let b = u[g], v = u[f];
      if (o) {
        const m = g === "y" ? "bottom" : "right";
        b = pu(b + h[g === "y" ? "top" : "left"], b, b - h[m]);
      }
      if (c) {
        const m = f === "y" ? "bottom" : "right";
        v = pu(v + h[f === "y" ? "top" : "left"], v, v - h[m]);
      }
      const w = l.fn({ ...t, [g]: b, [f]: v });
      return { ...w, data: { x: w.x - r, y: w.y - a, enabled: { [g]: o, [f]: c } } };
    } };
  }, $h = function(n) {
    return n === void 0 && (n = {}), { name: "flip", options: n, async fn(t) {
      var r, a;
      const { placement: s, middlewareData: o, rects: c, initialPlacement: l, platform: i, elements: u } = t, { mainAxis: h = !0, crossAxis: f = !0, fallbackPlacements: g, fallbackStrategy: b = "bestFit", fallbackAxisSideDirection: v = "none", flipAlignment: w = !0, ...m } = Xl(n, t);
      if ((r = o.arrow) != null && r.alignmentOffset) return {};
      const z = Wa(s), I = xa(l), V = Wa(l) === l, T = await (i.isRTL == null ? void 0 : i.isRTL(u.floating)), q = g || (V || !w ? [ts(l)] : (function(Z) {
        const M = ts(Z);
        return [eo(Z), M, eo(M)];
      })(l)), ee = v !== "none";
      !g && ee && q.push(...ph(l, w, v, T));
      const H = [l, ...q], D = await xu(t, m), ne = [];
      let B = ((a = o.flip) == null ? void 0 : a.overflows) || [];
      if (h && ne.push(D[z]), f) {
        const Z = (function(M, P, R) {
          R === void 0 && (R = !1);
          const Q = es(M), K = vu(M), ce = fu(K);
          let F = K === "x" ? Q === (R ? "end" : "start") ? "right" : "left" : Q === "start" ? "bottom" : "top";
          return P.reference[ce] > P.floating[ce] && (F = ts(F)), [F, ts(F)];
        })(s, c, T);
        ne.push(D[Z[0]], D[Z[1]]);
      }
      if (B = [...B, { placement: s, overflows: ne }], !ne.every((Z) => Z <= 0)) {
        var N, se;
        const Z = (((N = o.flip) == null ? void 0 : N.index) || 0) + 1, M = H[Z];
        if (M && (!(f === "alignment" && I !== xa(M)) || B.every((R) => xa(R.placement) !== I || R.overflows[0] > 0)))
          return { data: { index: Z, overflows: B }, reset: { placement: M } };
        let P = (se = B.filter((R) => R.overflows[0] <= 0).sort((R, Q) => R.overflows[1] - Q.overflows[1])[0]) == null ? void 0 : se.placement;
        if (!P) switch (b) {
          case "bestFit": {
            var S;
            const R = (S = B.filter((Q) => {
              if (ee) {
                const K = xa(Q.placement);
                return K === I || K === "y";
              }
              return !0;
            }).map((Q) => [Q.placement, Q.overflows.filter((K) => K > 0).reduce((K, ce) => K + ce, 0)]).sort((Q, K) => Q[1] - K[1])[0]) == null ? void 0 : S[0];
            R && (P = R);
            break;
          }
          case "initialPlacement":
            P = l;
        }
        if (s !== P) return { reset: { placement: P } };
      }
      return {};
    } };
  }, Dh = (n, t, r) => {
    const a = /* @__PURE__ */ new Map(), s = { platform: Ch, ...r }, o = { ...s.platform, _c: a };
    return (async (c, l, i) => {
      const { placement: u = "bottom", strategy: h = "absolute", middleware: f = [], platform: g } = i, b = f.filter(Boolean), v = await (g.isRTL == null ? void 0 : g.isRTL(l));
      let w = await g.getElementRects({ reference: c, floating: l, strategy: h }), { x: m, y: z } = mu(w, u, v), I = u, V = {}, T = 0;
      for (let q = 0; q < b.length; q++) {
        const { name: ee, fn: H } = b[q], { x: D, y: ne, data: B, reset: N } = await H({ x: m, y: z, initialPlacement: u, placement: I, strategy: h, middlewareData: V, rects: w, platform: g, elements: { reference: c, floating: l } });
        m = D != null ? D : m, z = ne != null ? ne : z, V = { ...V, [ee]: { ...V[ee], ...B } }, N && T <= 50 && (T++, typeof N == "object" && (N.placement && (I = N.placement), N.rects && (w = N.rects === !0 ? await g.getElementRects({ reference: c, floating: l, strategy: h }) : N.rects), { x: m, y: z } = mu(w, I, v)), q = -1);
      }
      return { x: m, y: z, placement: I, strategy: h, middlewareData: V };
    })(n, t, { ...s, platform: o });
  };
  function cr(n) {
    const t = { bold: "bold", light: "300", medium: "500", regular: "normal" };
    for (const r in t) if (n.includes(r)) return t[r];
    return "normal";
  }
  function ur(n) {
    return n.includes("italic") ? "italic" : "normal";
  }
  function Ne(n) {
    return n ? `rgba(${n.red}, ${n.green}, ${n.blue}, ${n.alpha})` : "";
  }
  function Vu(n) {
    return n && n.text && n.background ? `--bar-most-popular-background-color: ${Ne(n.background)}; --bar-most-popular-color: ${Ne(n.text)};` : "";
  }
  const Vh = { "SF Mono": '"SF Mono", ui-monospace, Menlo, monospace', Helvetica: '"Helvetica Neue", Helvetica, -apple-system, sans-serif', "New York": '"New York", ui-serif, Georgia, serif', "System UI": "system-ui, -apple-system, BlinkMacSystemFont, sans-serif" };
  function Ah(n) {
    var t;
    return (t = Vh[n]) != null ? t : `"${n}"`;
  }
  function pn(n) {
    return Object.entries(n).reduce((t, [r, a]) => (a && t.push(`--${r}:${a}`), t), []).join(";");
  }
  function Au(n) {
    var t, r;
    const { colors: a, fonts: s, cornerRadius: o, spacing: c, imageSize: l, imageCornerRadius: i, bundleBarsPerRow: u, dealBars: h } = n, f = a.border || a.primary, g = Math.min(h.length, u ? parseInt(u) : 3).toString();
    return pn({ "block-font-family": s.fontFamily ? Ah(s.fontFamily) : null, "block-title-color": Ne(a.title), "block-title-font-size": s.blockTitle.size + "px", "block-title-font-weight": cr(s.blockTitle.style), "block-title-font-style": ur(s.blockTitle.style), "block-spacing": c == null ? void 0 : c.toString(), "bar-border-radius": (o || 0) + "px", "badge-concave-depth": Math.min(o || 0, 12) + "px", "bar-background-color": Ne(a.background), "bar-selected-background-color": Ne(a.selectedBackground || a.background), "bar-border-color": Ne({ ...f, alpha: 0.3 * f.alpha }), "bar-selected-border-color": Ne(f), "block-block-title-color": Ne(a.blockTitle || a.title), "bar-title-color": Ne(a.title), "bar-title-font-size": s.title.size + "px", "bar-title-font-weight": cr(s.title.style), "bar-title-font-style": ur(s.title.style), "bar-subtitle-color": Ne(a.subtitle), "bar-subtitle-font-size": s.subtitle.size + "px", "bar-subtitle-font-weight": cr(s.subtitle.style), "bar-subtitle-font-style": ur(s.subtitle.style), "bar-price-color": Ne(a.price || a.title), "bar-full-price-color": Ne(a.fullPrice || a.subtitle), "bar-label-border-top-radius": (o ? o - 1 : 0) + "px", "bar-label-background-color": Ne(a.labelBackground), "bar-label-color": Ne(a.label), "bar-label-font-size": s.label.size + "px", "bar-label-font-weight": cr(s.label.style), "bar-label-font-style": ur(s.label.style), "bar-most-popular-background-color": Ne(a.badgeBackground), "bar-most-popular-color": Ne(a.badgeText), "bar-variant-select-border-radius": (o || 0) / 2 + "px", "bar-image-size": (l || 48) + "px", "bar-image-border-radius": (i || 0) + "px", "kaching-bundle-products-image-border-radius": (o || 0) / 2 + "px", "kaching-bundles-unit-label-font-size": s.unitLabel ? s.unitLabel.size + "px" : null, "kaching-bundles-unit-label-font-weight": s.unitLabel ? cr(s.unitLabel.style) : null, "kaching-bundles-unit-label-font-style": s.unitLabel ? ur(s.unitLabel.style) : null, "bundle-bars-per-row": g, "kaching-collection-breaks-require-selection-background-color": ((t = n.collectionBreaks) == null ? void 0 : t.requireItemSelectionAlert) && Ne(n.collectionBreaks.requireItemSelectionAlert.backgroundColor), "kaching-collection-breaks-require-selection-text-color": ((r = n.collectionBreaks) == null ? void 0 : r.requireItemSelectionAlert) && Ne(n.collectionBreaks.requireItemSelectionAlert.textColor) });
  }
  const Tu = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, Th = (n) => {
    const t = n.replace(/[^a-zA-Z]+/g, "").toLowerCase();
    if (!(t in Tu)) return;
    const r = Tu[t];
    return { red: r[0], green: r[1], blue: r[2], alpha: 1 };
  }, qh = (n, t) => ({ red: Math.max(0, n.red - Math.round(n.red * t)), green: Math.max(0, n.green - Math.round(n.green * t)), blue: Math.max(0, n.blue - Math.round(n.blue * t)), alpha: n.alpha });
  var Gh = $("<div></div>");
  function ss(n, t) {
    it(t, !0);
    let r = k(t, "color", 7), a = k(t, "image", 7), s = k(t, "size", 7), o = k(t, "shape", 7), c = k(t, "unavailable", 7, !1);
    const l = d(() => r() ? (function(g) {
      g = g.replace(/^#/, "");
      let b = parseInt(g, 16);
      return { red: b >> 16 & 255, green: b >> 8 & 255, blue: 255 & b, alpha: 1 };
    })(r()) : null), i = d(() => {
      let g = { "kaching-swatch-size": `${s() - 2}px` };
      const b = { rounded: 20, circle: 50 }[o()];
      return b && (g = { ...g, "kaching-swatch-border-radius": `${b}%` }), a() ? g = { ...g, "kaching-swatch-image-url": `url(${a()})` } : e(l) && (g = { ...g, "kaching-swatch-color": Ne(e(l)), "kaching-swatch-border-color": Ne(qh(e(l), 0.1)) }), pn(g);
    });
    var u = { get color() {
      return r();
    }, set color(g) {
      r(g), _();
    }, get image() {
      return a();
    }, set image(g) {
      a(g), _();
    }, get size() {
      return s();
    }, set size(g) {
      s(g), _();
    }, get shape() {
      return o();
    }, set shape(g) {
      o(g), _();
    }, get unavailable() {
      return c();
    }, set unavailable(g = !1) {
      c(g), _();
    } }, h = Gh();
    let f;
    return ve((g) => {
      f = Et(h, 1, "kaching-bundles__swatch", null, f, g), Gt(h, e(i));
    }, [() => ({ "kaching-bundles__swatch--unavailable": c() })]), p(n, h), lt(u);
  }
  function Wt(n, t) {
    it(t, !0);
    let r = k(t, "element", 7, "button"), a = k(t, "class", 7), s = k(t, "onclick", 7), o = k(t, "onkeydown", 7), c = k(t, "data-value", 7), l = k(t, "title", 7), i = k(t, "id", 7), u = k(t, "role", 7), h = k(t, "aria-label", 7), f = k(t, "aria-expanded", 7), g = k(t, "aria-haspopup", 7), b = k(t, "aria-selected", 7), v = k(t, "aria-checked", 7), w = k(t, "aria-activedescendant", 7), m = k(t, "aria-controls", 7), z = k(t, "tabindex", 7), I = k(t, "disabled", 7, !1), V = k(t, "ref", 15);
    function T(D) {
      o() && (o()(D), D.defaultPrevented) || I() || D.key !== "Enter" && D.key !== " " || (D.preventDefault(), D.currentTarget.click());
    }
    function q(D) {
      var ne;
      if (I()) return D.preventDefault(), void D.stopPropagation();
      (ne = s()) == null || ne(D);
    }
    var ee = { get element() {
      return r();
    }, set element(D = "button") {
      r(D), _();
    }, get class() {
      return a();
    }, set class(D) {
      a(D), _();
    }, get onclick() {
      return s();
    }, set onclick(D) {
      s(D), _();
    }, get onkeydown() {
      return o();
    }, set onkeydown(D) {
      o(D), _();
    }, get "data-value"() {
      return c();
    }, set "data-value"(D) {
      c(D), _();
    }, get title() {
      return l();
    }, set title(D) {
      l(D), _();
    }, get id() {
      return i();
    }, set id(D) {
      i(D), _();
    }, get role() {
      return u();
    }, set role(D) {
      u(D), _();
    }, get "aria-label"() {
      return h();
    }, set "aria-label"(D) {
      h(D), _();
    }, get "aria-expanded"() {
      return f();
    }, set "aria-expanded"(D) {
      f(D), _();
    }, get "aria-haspopup"() {
      return g();
    }, set "aria-haspopup"(D) {
      g(D), _();
    }, get "aria-selected"() {
      return b();
    }, set "aria-selected"(D) {
      b(D), _();
    }, get "aria-checked"() {
      return v();
    }, set "aria-checked"(D) {
      v(D), _();
    }, get "aria-activedescendant"() {
      return w();
    }, set "aria-activedescendant"(D) {
      w(D), _();
    }, get "aria-controls"() {
      return m();
    }, set "aria-controls"(D) {
      m(D), _();
    }, get tabindex() {
      return z();
    }, set tabindex(D) {
      z(D), _();
    }, get disabled() {
      return I();
    }, set disabled(D = !1) {
      I(D), _();
    }, get ref() {
      return V();
    }, set ref(D) {
      V(D), _();
    } }, H = ze();
    return Yc(fe(H), r, 0, (D, ne) => {
      ki(D, (N) => V(N), () => V()), au(D, () => {
        var N, se;
        return { role: (N = u()) != null ? N : "button", tabindex: (se = z()) != null ? se : I() ? -1 : 0, class: a(), onclick: q, "data-value": c(), title: l(), id: i(), "aria-label": h(), "aria-expanded": f(), "aria-haspopup": g(), "aria-selected": b(), "aria-checked": v(), "aria-activedescendant": w(), "aria-controls": m(), "aria-disabled": I() ? "true" : void 0, onkeydown: T };
      });
      var B = ze();
      Zc(fe(B), t, "default", {}), p(ne, B);
    }), p(n, H), lt(ee);
  }
  Je(ss, { color: {}, image: {}, size: {}, shape: {}, unavailable: {} }, [], [], !0), Je(Wt, { element: {}, class: {}, onclick: {}, onkeydown: {}, "data-value": {}, title: {}, id: {}, role: {}, "aria-label": {}, "aria-expanded": {}, "aria-haspopup": {}, "aria-selected": {}, "aria-checked": {}, "aria-activedescendant": {}, "aria-controls": {}, tabindex: {}, disabled: {}, ref: {} }, ["default"], [], !0);
  const qu = "translations", Ha = (n = {}) => {
    const t = ia(Gu(n));
    return oi(qu, t), { translate: t, setTranslations: (r) => {
      t.set(Gu(r));
    } };
  }, Mt = () => {
    const n = si(qu);
    if (!n) throw new Error("getTranslations must be called within a component tree that has setupTranslations initialized");
    return n;
  }, Gu = (n) => (t) => n[t] || t;
  function lo(n) {
    return String.fromCharCode(64 + n);
  }
  async function kr(n, t, r = {}, a = !0) {
    a && await Fs();
    const s = new CustomEvent(t, { detail: r, bubbles: !0, cancelable: !0, composed: !0 });
    n.dispatchEvent(s);
  }
  function Nt(n) {
    return typeof n == "number" ? n : Number(n.split("/").pop());
  }
  function Ou(n, t) {
    return n.find((r) => r.options.every((a, s) => a === t[s]));
  }
  function mr(n) {
    const t = n.variants.filter((r) => r.availableForSale);
    return t.length > 0 ? { ...n, variants: t } : n;
  }
  var Oh = $("<span> <!></span>"), Fh = $("<span> </span>"), Lh = $("<!> <!>", 1), jh = $("<span> <!></span>"), Eh = $("<span> </span>"), Rh = $("<!> <!>", 1), Nh = $('<div class="kaching-bundles__swatch-dropdown__options" role="listbox"></div>'), Qh = $('<div class="kaching-bundles__swatch-dropdown kaching-bundles-option"><!> <!></div>');
  function Fu(n, t) {
    it(t, !0);
    const r = () => $e(z, "$translate", a), [a, s] = vt();
    let o = k(t, "option", 7), c = k(t, "swatchSize", 7), l = k(t, "swatchShape", 7), i = k(t, "value", 7), u = k(t, "onChange", 7), h = Ve(!1), f = Ve(-1), g = Ve(void 0), b = Ve(void 0), v = d(() => o().optionValues.find((S) => S.name === i()) || o().optionValues[0]);
    const w = `swatch-dropdown-${Math.random().toString(16).slice(2)}`;
    function m(S) {
      return `${w}-option-${S}`;
    }
    const z = Mt();
    function I() {
      ae(h, !0), ae(f, o().optionValues.findIndex((S) => S.name === i()), !0), e(f) === -1 && ae(f, 0);
    }
    function V() {
      ae(h, !1), ae(f, -1);
    }
    function T() {
      var S;
      V(), (S = e(g)) == null || S.focus();
    }
    function q(S) {
      i(S), T();
      try {
        const Z = o().optionValues.find((M) => M.name === S);
        Z != null && Z.unavailable && kr(document.body, "kaching-unavailable-option-value-selected", { swatch: "dropdown" });
      } catch (Z) {
        console.error(Z);
      }
      u()(i());
    }
    function ee(S, Z) {
      const M = (P) => {
        S.contains(P.target) || Z();
      };
      return document.addEventListener("click", M, !0), { destroy() {
        document.removeEventListener("click", M, !0);
      } };
    }
    tt(() => {
      if (e(h) && e(g) && e(b)) return Ih(e(g), e(b), async () => {
        if (!e(g) || !e(b)) return;
        const S = e(b), { x: Z, y: M } = await Dh(e(g), S, { placement: "bottom-start", strategy: "fixed", middleware: [Mh(2), $h(), zh({ padding: 8 })] });
        S.style.left = `${Z}px`, S.style.top = `${M}px`;
      });
    });
    var H = { get option() {
      return o();
    }, set option(S) {
      o(S), _();
    }, get swatchSize() {
      return c();
    }, set swatchSize(S) {
      c(S), _();
    }, get swatchShape() {
      return l();
    }, set swatchShape(S) {
      l(S), _();
    }, get value() {
      return i();
    }, set value(S) {
      i(S), _();
    }, get onChange() {
      return u();
    }, set onChange(S) {
      u(S), _();
    } }, D = Qh(), ne = y(D);
    {
      let S = d(() => e(h) && e(f) >= 0 ? m(e(f)) : void 0);
      Wt(ne, { element: "span", class: "kaching-bundles__bar-variant-select", role: "combobox", get "aria-label"() {
        return o().name;
      }, onclick: function(Z) {
        e(h) ? (ae(h, !1), ae(f, -1)) : I(), Z.preventDefault();
      }, onkeydown: function(Z) {
        if (!e(h)) return void (Z.key !== "ArrowDown" && Z.key !== "ArrowUp" && Z.key !== "Enter" && Z.key !== " " || (Z.preventDefault(), I()));
        const M = o().optionValues.length;
        switch (Z.key) {
          case "Escape":
            Z.preventDefault(), T();
            break;
          case "ArrowDown":
            Z.preventDefault(), ae(f, e(f) < M - 1 ? e(f) + 1 : 0, !0);
            break;
          case "ArrowUp":
            Z.preventDefault(), ae(f, e(f) > 0 ? e(f) - 1 : M - 1, !0);
            break;
          case "Home":
            Z.preventDefault(), ae(f, 0);
            break;
          case "End":
            Z.preventDefault(), ae(f, M - 1);
            break;
          case "Enter":
          case " ":
            Z.preventDefault(), e(f) >= 0 && q(o().optionValues[e(f)].name);
        }
      }, get "aria-expanded"() {
        return e(h);
      }, "aria-haspopup": "listbox", get "aria-controls"() {
        return w;
      }, get "aria-activedescendant"() {
        return e(S);
      }, get ref() {
        return e(g);
      }, set ref(Z) {
        ae(g, Z, !0);
      }, children: (Z, M) => {
        var P = Lh(), R = fe(P);
        ss(R, { get color() {
          return e(v).swatch.color;
        }, get image() {
          return e(v).swatch.image;
        }, get size() {
          return c();
        }, get shape() {
          return l();
        }, get unavailable() {
          return e(v).unavailable;
        } }), st(L(R, 2), () => e(v).name, (Q) => {
          var K = ze(), ce = fe(K), F = (U) => {
            var te = Oh(), E = y(te);
            Ge(L(E), () => r()("system.unavailable_option_value")), x(te), ve(() => {
              var ie;
              return ft(E, `${(ie = e(v).name) != null ? ie : ""} - `);
            }), p(U, te);
          }, G = (U) => {
            var te = Fh(), E = y(te, !0);
            x(te), ve(() => ft(E, e(v).name)), p(U, te);
          };
          O(ce, (U) => {
            e(v).unavailable ? U(F) : U(G, !1);
          }), p(Q, K);
        }), p(Z, P);
      }, $$slots: { default: !0 } });
    }
    var B = L(ne, 2), N = (S) => {
      var Z = Nh();
      Vt(Z, 23, () => o().optionValues, (M) => M.name, (M, P, R) => {
        {
          let Q = d(() => ["kaching-bundles__swatch-dropdown__option", "kaching-bundles-option-value", e(R) === e(f) && "kaching-bundles__swatch-dropdown__option--focused"]), K = d(() => m(e(R))), ce = d(() => e(P).name === i());
          Wt(M, { element: "span", get class() {
            return e(Q);
          }, get id() {
            return e(K);
          }, role: "option", tabindex: -1, get "aria-selected"() {
            return e(ce);
          }, get "data-value"() {
            return e(P).name;
          }, onclick: () => q(e(P).name), children: (F, G) => {
            var U = Rh(), te = fe(U);
            {
              let C = d(() => 1.333 * c());
              ss(te, { get color() {
                return e(P).swatch.color;
              }, get image() {
                return e(P).swatch.image;
              }, get size() {
                return e(C);
              }, get shape() {
                return l();
              }, get unavailable() {
                return e(P).unavailable;
              } });
            }
            var E = L(te, 2), ie = (C) => {
              var j = jh(), W = y(j);
              Ge(L(W), () => r()("system.unavailable_option_value")), x(j), ve(() => {
                var X;
                return ft(W, `${(X = e(P).name) != null ? X : ""} - `);
              }), p(C, j);
            }, J = (C) => {
              var j = Eh(), W = y(j, !0);
              x(j), ve(() => ft(W, e(P).name)), p(C, j);
            };
            O(E, (C) => {
              e(P).unavailable ? C(ie) : C(J, !1);
            }), p(F, U);
          }, $$slots: { default: !0 } });
        }
      }), x(Z), ki(Z, (M) => ae(b, M), () => e(b)), ve(() => Ie(Z, "id", w)), p(S, Z);
    };
    O(B, (S) => {
      e(h) && S(N);
    }), x(D), Ws(D, (S, Z) => ee == null ? void 0 : ee(S, Z), () => V), ve(() => {
      Ie(D, "data-name", o().name), Ie(D, "data-value", i());
    }), p(n, D);
    var se = lt(H);
    return s(), se;
  }
  function Wh(n, t, r) {
    try {
      const a = t().optionValues.find((s) => s.name === n.target.value);
      a != null && a.unavailable && kr(document.body, "kaching-unavailable-option-value-selected", { swatch: "default" });
    } catch (a) {
      console.error(a);
    }
    r()(n.target.value);
  }
  Je(Fu, { option: {}, swatchSize: {}, swatchShape: {}, value: {}, onChange: {} }, [], [], !0);
  var Uh = $(" <!>", 1), Hh = $('<option class="kaching-bundles-option-value"><!></option>'), Zh = $('<select class="kaching-bundles__bar-variant-select kaching-bundles-option"></select>');
  function Lu(n, t) {
    it(t, !0);
    const [r, a] = vt();
    let s = k(t, "option", 7), o = k(t, "value", 7), c = k(t, "onChange", 7);
    const l = Mt();
    var i, u = { get option() {
      return s();
    }, set option(g) {
      s(g), _();
    }, get value() {
      return o();
    }, set value(g) {
      o(g), _();
    }, get onChange() {
      return c();
    }, set onChange(g) {
      c(g), _();
    } }, h = Zh();
    h.__change = [Wh, s, c], Vt(h, 21, () => s().optionValues, (g) => g.name, (g, b) => {
      var v = Hh(), w = y(v), m = (V) => {
        var T = Uh(), q = fe(T);
        Ge(L(q), () => $e(l, "$translate", r)("system.unavailable_option_value")), ve(() => {
          var ee;
          return ft(q, `${(ee = e(b).name) != null ? ee : ""} - `);
        }), p(V, T);
      }, z = (V) => {
        var T = Zn();
        ve(() => ft(T, e(b).name)), p(V, T);
      };
      O(w, (V) => {
        e(b).unavailable ? V(m) : V(z, !1);
      }), x(v);
      var I = {};
      ve(() => {
        var V;
        Ie(v, "data-value", e(b).name), I !== (I = e(b).name) && (v.value = (V = v.__value = e(b).name) != null ? V : "");
      }), p(g, v);
    }), x(h), Zs(h), ve(() => {
      var g;
      Ie(h, "aria-label", s().name), Ie(h, "data-name", s().name), Ie(h, "data-value", o()), i !== (i = o()) && (h.value = (g = h.__value = o()) != null ? g : "", el(h, o()));
    }), p(n, h);
    var f = lt(u);
    return a(), f;
  }
  jn(["change"]), Je(Lu, { option: {}, value: {}, onChange: {} }, [], [], !0);
  var Jh = $('<div class="kaching-bundles__swatch-buttons kaching-bundles-option"></div>');
  function ju(n, t) {
    it(t, !0);
    const [r, a] = vt();
    let s = k(t, "option", 7), o = k(t, "swatchSize", 7), c = k(t, "swatchShape", 7), l = k(t, "value", 7), i = k(t, "onChange", 7);
    const u = Mt();
    var h = { get option() {
      return s();
    }, set option(b) {
      s(b), _();
    }, get swatchSize() {
      return o();
    }, set swatchSize(b) {
      o(b), _();
    }, get swatchShape() {
      return c();
    }, set swatchShape(b) {
      c(b), _();
    }, get value() {
      return l();
    }, set value(b) {
      l(b), _();
    }, get onChange() {
      return i();
    }, set onChange(b) {
      i(b), _();
    } }, f = Jh();
    Vt(f, 21, () => s().optionValues, (b) => b.name, (b, v) => {
      {
        let w = d(() => ["kaching-bundles__swatch-buttons__button", "kaching-bundles-option-value", e(v).name === l() && "kaching-bundles__swatch-buttons__button--selected"]), m = d(() => e(v).unavailable ? `${e(v).name} - ${$e(u, "$translate", r)("system.unavailable_option_value")}` : e(v).name);
        Wt(b, { element: "span", get class() {
          return e(w);
        }, get title() {
          return e(v).name;
        }, get "aria-label"() {
          return e(m);
        }, get "data-value"() {
          return e(v).name;
        }, onclick: () => (function(z) {
          l(z);
          try {
            const I = s().optionValues.find((V) => V.name === z);
            I != null && I.unavailable && kr(document.body, "kaching-unavailable-option-value-selected", { swatch: "buttons" });
          } catch (I) {
            console.error(I);
          }
          i()(l());
        })(e(v).name), children: (z, I) => {
          ss(z, { get color() {
            return e(v).swatch.color;
          }, get image() {
            return e(v).swatch.image;
          }, get size() {
            return o();
          }, get shape() {
            return c();
          }, get unavailable() {
            return e(v).unavailable;
          } });
        }, $$slots: { default: !0 } });
      }
    }), x(f), ve(() => {
      Ie(f, "data-name", s().name), Ie(f, "data-value", l());
    }), p(n, f);
    var g = lt(h);
    return a(), g;
  }
  function Eu(n, t) {
    it(t, !0);
    let r = k(t, "value", 7), a = k(t, "option", 7), s = k(t, "swatchSize", 7, 18), o = k(t, "swatchShape", 7, "circle"), c = k(t, "swatchType", 7), l = k(t, "onChange", 7);
    function i(v) {
      l()({ position: a().position, value: v });
    }
    var u = { get value() {
      return r();
    }, set value(v) {
      r(v), _();
    }, get option() {
      return a();
    }, set option(v) {
      a(v), _();
    }, get swatchSize() {
      return s();
    }, set swatchSize(v = 18) {
      s(v), _();
    }, get swatchShape() {
      return o();
    }, set swatchShape(v = "circle") {
      o(v), _();
    }, get swatchType() {
      return c();
    }, set swatchType(v) {
      c(v), _();
    }, get onChange() {
      return l();
    }, set onChange(v) {
      l(v), _();
    } }, h = ze(), f = fe(h), g = (v) => {
      Fu(v, { get option() {
        return a();
      }, get swatchSize() {
        return s();
      }, get swatchShape() {
        return o();
      }, get value() {
        return r();
      }, onChange: i });
    }, b = (v) => {
      var w = ze(), m = fe(w), z = (V) => {
        ju(V, { get option() {
          return a();
        }, get swatchSize() {
          return s();
        }, get swatchShape() {
          return o();
        }, get value() {
          return r();
        }, onChange: i });
      }, I = (V) => {
        Lu(V, { get option() {
          return a();
        }, get value() {
          return r();
        }, onChange: i });
      };
      O(m, (V) => {
        c() === "colorButtons" || c() === "imageButtons" || c() === "productImageButtons" ? V(z) : V(I, !1);
      }, !0), p(v, w);
    };
    return O(f, (v) => {
      c() === "colorDropdown" || c() === "imageDropdown" || c() === "productImageDropdown" || c() === "mixedDropdown" ? v(g) : v(b, !1);
    }), p(n, h), lt(u);
  }
  Je(ju, { option: {}, swatchSize: {}, swatchShape: {}, value: {}, onChange: {} }, [], [], !0), Je(Eu, { value: {}, option: {}, swatchSize: {}, swatchShape: {}, swatchType: {}, onChange: {} }, [], [], !0);
  const Ru = "mediaImages", il = (n = []) => {
    const t = ia(Nu(n));
    return oi(Ru, t), { getMediaImageUrl: t, setMediaImages: (r) => {
      t.set(Nu(r));
    } };
  }, En = () => {
    const n = si(Ru);
    if (!n) throw new Error("getMediaImages must be called within a component tree that has setupMediaImages initialized");
    return n;
  }, Nu = (n) => (t) => {
    if (!t) return;
    const r = n.find((a) => a.gid === t);
    return r == null ? void 0 : r.url;
  }, Qu = "config", Za = (n) => {
    const t = ia(n);
    return oi(Qu, t), { config: t, setConfig: (r) => {
      t.set(r);
    } };
  }, vn = () => {
    const n = si(Qu);
    if (!n) throw new Error("getConfig must be called within a component tree that has setupConfig initialized");
    return n;
  };
  var Yh = $('<img alt="" class="kaching-bundles__bar-variant-image"/>'), Kh = $('<div class="kaching-bundles__bar-variant-number"><span>#</span> <span> </span></div>'), Xh = $('<span class="kaching-bundles__bar-variant-option__name-value"> </span>'), ep = $('<div class="kaching-bundles__bar-variant-option"><span class="kaching-bundles__bar-variant-option__name"><span class="kaching-bundles__bar-variant-option__name-label"> </span> <!></span> <!></div>'), tp = $('<div class="kaching-bundles__invalid-variant-error"><!></div>'), np = $('<div><div><!> <div class="kaching-bundles__bar-variant-main"><div class="kaching-bundles__bar-variant-selects"></div> <!></div></div></div>');
  function Jn(n, t) {
    it(t, !0);
    const r = () => $e(m, "$config", s), a = () => $e(z, "$swatchSettings", s), [s, o] = vt(), c = (J, C = Br) => {
      Eu(J, { get option() {
        return C();
      }, get swatchSize() {
        return a().swatchSize;
      }, get swatchShape() {
        return a().swatchShape;
      }, get swatchType() {
        return C().swatchType;
      }, get value() {
        return e(V)[C().position - 1];
      }, onChange: D });
    };
    let l = k(t, "product", 7), i = k(t, "selectedVariantId", 7), u = k(t, "number", 7, void 0), h = k(t, "showImage", 7, !1), f = k(t, "forceDropdown", 7, !1), g = k(t, "onChange", 7), b = k(t, "onOptionChange", 7);
    const v = Mt(), w = En(), m = vn(), z = hu();
    let I = d(() => l().variants.find((J) => J.id === i())), V = Ve(ct([]));
    tt(() => {
      if (e(I)) ae(V, [...e(I).options], !0);
      else {
        if (i() && r().featureFlags.hide_missing_variants && l().variants.length > 0) {
          const J = S(l().variants, 0, e(V));
          if (J) return ae(V, [...J.options], !0), void Jt(() => g()(J.id));
        }
        ae(V, [], !0);
      }
    });
    let T = d(() => {
      return J = l(), C = e(V), j = a().swatchOptions, W = $e(w, "$getMediaImageUrl", s), X = f(), J.options.map((le) => ({ name: le.name, position: le.position, swatchType: ne(le, j, X), optionValues: le.optionValues.map((A) => {
        const re = se(le.position, A.name, C, J);
        if (r().featureFlags.hide_missing_variants && re.length === 0) return null;
        const ue = !re.some((_e) => _e.availableForSale);
        return { name: A.name, unavailable: ue, swatch: B(le, A, j, W, C, J) };
      }).filter((A) => A !== null) }));
      var J, C, j, W, X;
    }), q = d(() => a().showSelectedSwatchName && !f());
    const ee = ["colorButtons", "imageButtons", "productImageButtons"];
    let H = d(() => {
      var J;
      return h() ? ((J = e(I)) == null ? void 0 : J.image) || l().image : null;
    });
    function D({ position: J, value: C }) {
      const j = e(V)[J - 1];
      e(V)[J - 1] = C;
      let W = l().variants.find((X) => e(V).every((le, A) => X.options[A] === le));
      if (!W && r().featureFlags.hide_missing_variants) {
        const X = S(se(J, C, e(V), l()), J, e(V));
        X && (W = X, ae(V, [...W.options], !0));
      }
      W && (g()(W.id), b() && b()(J, C, j));
    }
    function ne(J, C, j) {
      var W;
      const X = (W = C.find((le) => le.name === J.defaultName)) == null ? void 0 : W.swatchType;
      if (X && X !== "default") return j ? (function(le) {
        switch (le) {
          case "colorButtons":
            return "colorDropdown";
          case "imageButtons":
            return "imageDropdown";
          case "productImageButtons":
            return "productImageDropdown";
          default:
            return le;
        }
      })(X) : X;
      if (!r().featureFlags.native_swatches_disabled) {
        for (const le of J.optionValues) if (le.swatch.image || le.swatch.color) return "mixedDropdown";
      }
      return "default";
    }
    function B(J, C, j, W, X, le) {
      var A, re;
      const ue = r().featureFlags.native_swatches_disabled ? null : C.swatch, _e = j.find((ge) => ge.name === J.defaultName);
      if (!_e || _e.swatchType === "default") return ue || { color: null, image: null };
      if (_e.swatchType === "colorButtons" || _e.swatchType === "colorDropdown")
        return { color: N((A = _e.colors.find((ge) => ge.name === C.defaultName)) == null ? void 0 : A.color) || (ue == null ? void 0 : ue.color) || N(Th(C.defaultName)) || null, image: null };
      if (_e.swatchType === "imageButtons" || _e.swatchType === "imageDropdown") {
        const ge = W(((re = _e.images.find((ke) => ke.name === C.defaultName)) == null ? void 0 : re.mediaImageGID) || null);
        return { color: (ue == null ? void 0 : ue.color) || null, image: ge || (ue == null ? void 0 : ue.image) || null };
      }
      if (_e.swatchType === "productImageDropdown" || _e.swatchType === "productImageButtons") {
        const ge = J.position - 1, ke = le.variants.filter((oe) => oe.image && oe.options[ge] === C.name);
        let pe = ke[0], Ce = 0;
        for (const oe of ke) {
          let xe = 0;
          for (let Fe = 0; Fe < ge; Fe++) oe.options[Fe] === X[Fe] && xe++;
          xe > Ce && (Ce = xe, pe = oe);
        }
        return { color: null, image: (pe == null ? void 0 : pe.image) || null };
      }
      return { color: null, image: null };
    }
    function N(J) {
      if (!J) return;
      const { red: C, green: j, blue: W } = J;
      return `#${C.toString(16).padStart(2, "0")}${j.toString(16).padStart(2, "0")}${W.toString(16).padStart(2, "0")}`;
    }
    function se(J, C, j, W) {
      const X = J - 1, le = j.slice(0, X);
      return W.variants.filter((A) => A.options[X] === C && le.every((re, ue) => A.options[ue] === re));
    }
    function S(J, C, j) {
      if (J.length === 0) return null;
      let W = J[0], X = -1;
      const le = j.slice(C);
      for (const A of J) {
        let re = 0;
        for (let ue = 0; ue < le.length; ue++) A.options[C + ue] === le[ue] && (re += le.length - ue);
        re > X && (X = re, W = A);
      }
      return W;
    }
    var Z = { get product() {
      return l();
    }, set product(J) {
      l(J), _();
    }, get selectedVariantId() {
      return i();
    }, set selectedVariantId(J) {
      i(J), _();
    }, get number() {
      return u();
    }, set number(J = void 0) {
      u(J), _();
    }, get showImage() {
      return h();
    }, set showImage(J = !1) {
      h(J), _();
    }, get forceDropdown() {
      return f();
    }, set forceDropdown(J = !1) {
      f(J), _();
    }, get onChange() {
      return g();
    }, set onChange(J) {
      g(J), _();
    }, get onOptionChange() {
      return b();
    }, set onOptionChange(J) {
      b(J), _();
    } }, M = np();
    let P;
    var R = y(M);
    let Q;
    var K = y(R), ce = (J) => {
      var C = Yh();
      ve(() => Ie(C, "src", e(H))), p(J, C);
    }, F = (J) => {
      var C = ze(), j = fe(C), W = (X) => {
        var le = Kh(), A = L(y(le), 2), re = y(A, !0);
        x(A), x(le), ve(() => ft(re, u())), p(X, le);
      };
      O(j, (X) => {
        u() && X(W);
      }, !0), p(J, C);
    };
    O(K, (J) => {
      e(H) ? J(ce) : J(F, !1);
    });
    var G = L(K, 2), U = y(G);
    Vt(U, 21, () => e(T), (J) => J.name, (J, C) => {
      var j = ze(), W = fe(j), X = (A) => {
        var re = ep(), ue = y(re), _e = y(ue), ge = y(_e);
        x(_e);
        var ke = L(_e, 2), pe = (oe) => {
          var xe = Xh(), Fe = y(xe, !0);
          x(xe), ve(() => ft(Fe, e(V)[e(C).position - 1])), p(oe, xe);
        };
        O(ke, (oe) => {
          ee.includes(e(C).swatchType) && oe(pe);
        }), x(ue);
        var Ce = L(ue, 2);
        c(Ce, () => e(C)), x(re), ve(() => {
          var oe;
          return ft(ge, `${(oe = e(C).name) != null ? oe : ""}:`);
        }), p(A, re);
      }, le = (A) => {
        c(A, () => e(C));
      };
      O(W, (A) => {
        e(q) ? A(X) : A(le, !1);
      }), p(J, j);
    }), x(U);
    var te = L(U, 2), E = (J) => {
      var C = tp();
      Ge(y(C), () => $e(v, "$translate", s)("system.invalid_variant")), x(C), p(J, C);
    };
    O(te, (J) => {
      e(I) && e(I).availableForSale || J(E);
    }), x(G), x(R), x(M), ve((J, C) => {
      P = Et(M, 1, "kaching-bundles__bar-variant", null, P, J), Q = Et(R, 1, "kaching-bundles__bar-variant__content", null, Q, C);
    }, [() => ({ "kaching-bundles__bar-variant--invalid": !e(I) || !e(I).availableForSale }), () => ({ "kaching-bundles__bar-variant__content--with-option-names": e(q) })]), p(n, M);
    var ie = lt(Z);
    return o(), ie;
  }
  Je(Jn, { product: {}, selectedVariantId: {}, number: {}, showImage: {}, forceDropdown: {}, onChange: {}, onOptionChange: {} }, [], [], !0);
  var rp = $('<a target="_blank"><!></a>'), ap = $("<div><!></div>");
  function er(n, t) {
    it(t, !0);
    const r = k(t, "url", 7), a = k(t, "children", 7), s = k(t, "class", 7);
    var o = { get url() {
      return r();
    }, set url(h) {
      r(h), _();
    }, get children() {
      return a();
    }, set children(h) {
      a(h), _();
    }, get class() {
      return s();
    }, set class(h) {
      s(h), _();
    } }, c = ze(), l = fe(c), i = (h) => {
      var f = rp();
      Ql(y(f), a), x(f), ve(() => {
        Ie(f, "href", r()), Et(f, 1, Xi(s()));
      }), p(h, f);
    }, u = (h) => {
      var f = ap();
      Ql(y(f), a), x(f), ve(() => Et(f, 1, Xi(s()))), p(h, f);
    };
    return O(l, (h) => {
      r() ? h(i) : h(u, !1);
    }), p(n, c), lt(o);
  }
  Je(er, { url: {}, children: {}, class: {} }, [], [], !0);
  const Wu = "priceFormatter", Pi = (n = "{{amount}}", t) => {
    const r = ia(Uu(n, t));
    return oi(Wu, r), { formatPrice: r, setMoneyFormat: (a, s) => {
      r.set(Uu(a, s));
    } };
  }, gn = () => {
    const n = si(Wu);
    if (!n) throw new Error("getPriceFormatter must be called within a component tree that has setupPriceFormatter initialized");
    return n;
  }, Uu = (n, t) => (r, a) => ip(r, n, (!(a != null && a.preserveDecimals) || Math.round(r) % 100 == 0) && t), ip = (n, t, r) => {
    const a = ((i, u) => u ? i.includes("amount_no_decimals") ? i : i.replace(/\{\{.+\}\}/g, "{{ amount_no_decimals }}") : i)(t, r), s = { amount: (i) => i.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), amount_no_decimal: (i) => i.toLocaleString("en-US", { maximumFractionDigits: 0 }), amount_no_decimals: (i) => i.toLocaleString("en-US", { maximumFractionDigits: 0 }), amount_with_comma_separator: (i) => i.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), amount_no_decimals_with_comma_separator: (i) => i.toLocaleString("de-DE", { maximumFractionDigits: 0 }), amount_with_apostrophe_separator: (i) => i.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, "'"), amount_no_decimals_with_space_separator: (i) => i.toLocaleString("fr-FR", { maximumFractionDigits: 0 }).replace(/\s/g, " "), amount_with_space_separator: (i) => i.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, " "), amount_with_period_and_space_separator: (i) => i.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, " ").replace(",", ".") }, o = /{{\s*(\w+)\s*}}/, c = a.match(o), l = (s[c ? c[1] : "amount"] || s.amount)(n / 100);
    return a.replace(o, l);
  }, Hu = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.08398%205H7.91732'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Zu = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.00065%202.08337V7.91671M2.08398%205.00004H7.91732'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", lp = { new_price: ({ totalDiscountedPrice: n, quantity: t }) => ({ value: n / t, type: "price" }), new_total: ({ totalDiscountedPrice: n }) => ({ value: n, type: "price" }), original_price: ({ totalFullPrice: n, quantity: t }) => ({ value: n / t, type: "price" }), original_total: ({ totalFullPrice: n }) => ({ value: n, type: "price" }), saved_total: ({ totalCompareAtPrice: n, totalDiscountedPrice: t }) => ({ value: n - t, type: "price" }), saved_amount: ({ totalCompareAtPrice: n, totalDiscountedPrice: t, quantity: r }) => ({ value: (n - t) / r, type: "price" }), quantity: ({ quantity: n }) => ({ value: n, type: "number" }), gifts_count: ({ freeGiftsCount: n }) => {
    if (n !== void 0) return { value: n, type: "number" };
  }, buy_quantity: ({ dealBar: n, quantity: t }) => {
    if ((n == null ? void 0 : n.dealBarType) !== gt.Bxgy) return;
    const r = n.buyQuantity + n.getQuantity;
    return { value: t - Math.floor(t / r) * n.getQuantity, type: "number" };
  }, get_quantity: ({ dealBar: n, quantity: t }) => {
    if ((n == null ? void 0 : n.dealBarType) !== gt.Bxgy) return;
    const r = n.buyQuantity + n.getQuantity;
    return { value: Math.floor(t / r) * n.getQuantity, type: "number" };
  }, saved_percentage: ({ totalCompareAtPrice: n, totalDiscountedPrice: t, dealBar: r, legacySavedPercentage: a }) => {
    if (a && r && (r.dealBarType === gt.QuantityBreak || !r.dealBarType) && r.discountType === "percentage") return { value: Math.round(Number(r.discountValue)), type: "percentage" };
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
  } }, sp = (n) => {
    if (!n) return;
    const t = n.options.join(" / ");
    return t && t !== "Default Title" ? t : void 0;
  }, op = ({ variable: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, sellingPlan: o }) => {
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
          for (const { variant: f, quantity: g } of u) {
            const b = sp(f);
            if (!b) continue;
            const v = h.find((w) => w.title === b);
            v ? v.count += g : h.push({ title: b, count: g });
          }
          return h.length !== 0 ? h.length === 1 && h[0].count === 1 ? h[0].title : h.map(({ title: f, count: g }) => `${g}× ${f}`).join(", ") : void 0;
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
  }, Ju = /{{\s*([a-zA-Z0-9_.]+)\s*(?:([+\-*/])\s*(\d+(?:\.\d+)?)?)?\s*}}/g, Yu = /\{\{[^}]*\}\}/g, cp = (n) => n.replace(Yu, ""), up = ({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, totalFullPrice: o, totalCompareAtPrice: c, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: h, unitQuantity: f, sellingPlan: g, freeGiftsCount: b }) => (v, w, m) => {
    const z = lp[v];
    if (z) {
      const I = z({ totalFullPrice: o, totalCompareAtPrice: c != null ? c : o, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: h, unitQuantity: f, sellingPlan: g, freeGiftsCount: b });
      if (!I) return;
      let V = I.value;
      if (w !== void 0 && m !== void 0) {
        const q = ((ee, H, D) => {
          switch (H) {
            case "+":
              return ee + D;
            case "-":
              return ee - D;
            case "*":
              return ee * D;
            case "/":
              return D === 0 ? void 0 : ee / D;
          }
        })(V, w, I.type !== "price" || w !== "+" && w !== "-" ? m : 100 * m);
        if (q === void 0) return;
        V = q;
      }
      const T = w === "/" || I.preserveDecimals === !0;
      return ((q, ee, H, D) => {
        switch (ee) {
          case "price":
            return H(q, { preserveDecimals: D });
          case "number":
            return String(Math.round(100 * q) / 100);
          case "percentage":
            return `${Math.round(q)}%`;
        }
      })(V, I.type, n, T);
    }
    if (w === void 0) return op({ variable: v, product: t, products: r, selectedProductTitles: a, selectedVariants: s, sellingPlan: g });
  }, hn = ({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, totalFullPrice: o, totalCompareAtPrice: c, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: h = !1, unitQuantity: f, sellingPlan: g, freeGiftsCount: b }) => (v) => {
    if (!v) return v;
    const w = up({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, totalFullPrice: o, totalCompareAtPrice: c, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: h, unitQuantity: f, sellingPlan: g, freeGiftsCount: b });
    return v.replace(Ju, (m, z, I, V) => {
      var T;
      if (I && V) {
        const q = parseFloat(V);
        return (T = w(z, I, q)) != null ? T : "";
      }
      return w(z) || "";
    }).replace(Yu, "");
  };
  function so(n) {
    const { unitPriceMeasurement: t } = n;
    return t ? t.referenceValue == 1 ? t.referenceUnit : `${t.referenceValue}${t.referenceUnit}` : null;
  }
  function xr(n) {
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
  var dp = $('<img class="kaching-bundles__choose-multiple-gifts__product-image" alt=""/>'), gp = $('<span class="kaching-bundles__choose-multiple-gifts__product-title"> </span>'), hp = $('<span class="kaching-bundles__choose-multiple-gifts__subtitle"><!></span>'), pp = $('<div class="kaching-bundles__choose-multiple-gifts__product-compare-at-price"><!></div>'), bp = $('<span class="kaching-bundles__choose-multiple-gifts__variant-counter"></span>'), fp = $('<div class="kaching-bundles__choose-multiple-gifts__variant-selector-row"><div class="kaching-bundles__choose-multiple-gifts__variant-selector-content"><!> <div class="kaching-bundles__choose-multiple-gifts__variant-selector-with-counter"><!> <div class="kaching-bundles__choose-multiple-gifts__variant-selector-wrapper"><!></div></div></div></div>'), vp = $('<div class="kaching-bundles__choose-multiple-gifts__variant-selectors"></div>'), _p = $('<img alt="Decrease"/>'), kp = $('<img alt="Increase"/>'), mp = $('<div class="kaching-bundles__choose-multiple-gifts__gift-quantity"><!> <span class="kaching-bundles__choose-multiple-gifts__gift-quantity-value"> </span> <!></div>'), xp = $("<img/>"), yp = $("<!> <!>", 1), wp = $('<div class="kaching-bundles__choose-multiple-gifts__product"><div class="kaching-bundles__choose-multiple-gifts__product-container"><!> <div class="kaching-bundles__choose-multiple-gifts__product-content"><!> <!> <div class="kaching-bundles__choose-multiple-gifts__product-price-container"><div class="kaching-bundles__choose-multiple-gifts__product-price"><!></div> <!></div> <!></div></div> <div class="kaching-bundles__choose-multiple-gifts__product-actions"><!> <!></div></div>');
  function Ku(n, t) {
    it(t, !0);
    const r = () => $e(m, "$formatPrice", s), a = () => $e(w, "$translate", s), [s, o] = vt(), c = k(t, "product", 7), l = k(t, "dealBlock", 7), i = k(t, "multipleGiftsSelector", 7), u = k(t, "selectedVariantIds", 7), h = k(t, "availableQuantity", 7), f = k(t, "onSelect", 7), g = k(t, "onRemove", 7), b = k(t, "onVariantChange", 7), v = k(t, "onQuantityChange", 7), w = Mt(), m = gn();
    let z = Ve(!1);
    const I = d(() => u().length > 0), V = d(() => u().length || 1), T = d(() => !e(I) && h() === 0), q = d(() => c().variants.find((ge) => ge.id === u()[0]) || c().variants[0]), ee = d(() => e(z) && e(q).image || c().image), H = d(() => u().map((ge) => c().variants.find((ke) => ke.id === ge) || c().variants[0])), D = d(() => e(H).length > 0 ? e(H).reduce((ge, ke) => ge + Z(l(), ke), 0) : Z(l(), e(q))), ne = d(() => c().url ? `${c().url}?variant=${u()[0] || c().variants[0].id}` : void 0), B = d(() => l().chooseMultipleGiftsModal), N = d(() => hn({ priceFormatter: r(), product: c(), totalFullPrice: e(D), totalDiscountedPrice: 0, quantity: e(V), unitQuantity: xr(e(H).map((ge) => ({ variant: ge, quantity: 1 }))) })), se = d(() => {
      var ge;
      return e(N)(a()(((ge = e(B)) == null ? void 0 : ge.subtitle) || ""));
    }), S = d(() => {
      var ge, ke;
      return e(I) ? (ge = e(B)) == null ? void 0 : ge.buttonTextAfterSelection : (ke = e(B)) == null ? void 0 : ke.buttonTextBeforeSelection;
    });
    function Z(ge, ke) {
      return ge.useProductCompareAtPrice && ke.compareAtPrice ? Math.max(ke.price, ke.compareAtPrice) : ke.price;
    }
    function M() {
      e(V) <= 1 || v()(e(V) - 1);
    }
    function P() {
      e(V) >= h() || v()(e(V) + 1);
    }
    var R = { get product() {
      return c();
    }, set product(ge) {
      c(ge), _();
    }, get dealBlock() {
      return l();
    }, set dealBlock(ge) {
      l(ge), _();
    }, get multipleGiftsSelector() {
      return i();
    }, set multipleGiftsSelector(ge) {
      i(ge), _();
    }, get selectedVariantIds() {
      return u();
    }, set selectedVariantIds(ge) {
      u(ge), _();
    }, get availableQuantity() {
      return h();
    }, set availableQuantity(ge) {
      h(ge), _();
    }, get onSelect() {
      return f();
    }, set onSelect(ge) {
      f(ge), _();
    }, get onRemove() {
      return g();
    }, set onRemove(ge) {
      g(ge), _();
    }, get onVariantChange() {
      return b();
    }, set onVariantChange(ge) {
      b(ge), _();
    }, get onQuantityChange() {
      return v();
    }, set onQuantityChange(ge) {
      v(ge), _();
    } }, Q = wp(), K = y(Q), ce = y(K), F = (ge) => {
      er(ge, { get url() {
        return e(ne);
      }, class: "kaching-bundles__choose-multiple-gifts__product-image-link", children: (ke, pe) => {
        var Ce = dp();
        Ie(Ce, "width", 100), Ie(Ce, "height", 100), ve(() => Ie(Ce, "src", e(ee))), p(ke, Ce);
      }, $$slots: { default: !0 } });
    };
    O(ce, (ge) => {
      e(ee) && ge(F);
    });
    var G = L(ce, 2), U = y(G);
    er(U, { get url() {
      return e(ne);
    }, class: "kaching-bundles__choose-multiple-gifts__product-link", children: (ge, ke) => {
      var pe = gp(), Ce = y(pe, !0);
      x(pe), ve(() => ft(Ce, c().title)), p(ge, pe);
    }, $$slots: { default: !0 } });
    var te = L(U, 2), E = (ge) => {
      var ke = hp();
      Ge(y(ke), () => e(se)), x(ke), p(ge, ke);
    };
    O(te, (ge) => {
      e(se) && ge(E);
    });
    var ie = L(te, 2), J = y(ie);
    Ge(y(J), () => a()("system.free")), x(J);
    var C = L(J, 2), j = (ge) => {
      var ke = ze();
      st(fe(ke), () => e(D), (pe) => {
        var Ce = pp();
        Ge(y(Ce), () => r()(e(D))), x(Ce), p(pe, Ce);
      }), p(ge, ke);
    };
    O(C, (ge) => {
      i().showPrice && e(D) > 0 && ge(j);
    }), x(ie);
    var W = L(ie, 2), X = (ge) => {
      var ke = vp();
      Vt(ke, 21, u, Vr, (pe, Ce, oe) => {
        var xe = fp(), Fe = y(xe), Ae = y(Fe), Oe = (he) => {
          la(he, { get product() {
            return c();
          }, class: "kaching-bundles__choose-multiple-gifts__product-option-names" });
        };
        O(Ae, (he) => {
          oe === 0 && he(Oe);
        });
        var Te = L(Ae, 2), Y = y(Te), ye = (he) => {
          var Pe = bp();
          Pe.textContent = `#${oe + 1}`, p(he, Pe);
        };
        O(Y, (he) => {
          u().length > 1 && he(ye);
        });
        var Me = L(Y, 2);
        Jn(y(Me), { get product() {
          return c();
        }, get selectedVariantId() {
          return e(Ce);
        }, onChange: (he) => {
          ae(z, !0), b()(oe, he);
        } }), x(Me), x(Te), x(Fe), x(xe), p(pe, xe);
      }), x(ke), p(ge, ke);
    };
    O(W, (ge) => {
      c().variants.length > 1 && ge(X);
    }), x(G), x(K);
    var le = L(K, 2), A = y(le), re = (ge) => {
      var ke = mp(), pe = y(ke);
      {
        let Fe = d(() => e(V) <= 1);
        Wt(pe, { element: "span", class: "kaching-bundles__choose-multiple-gifts__gift-quantity-button", onclick: M, get disabled() {
          return e(Fe);
        }, children: (Ae, Oe) => {
          var Te = _p();
          ve(() => Ie(Te, "src", Hu)), p(Ae, Te);
        }, $$slots: { default: !0 } });
      }
      var Ce = L(pe, 2), oe = y(Ce, !0);
      x(Ce);
      var xe = L(Ce, 2);
      {
        let Fe = d(() => e(V) >= h());
        Wt(xe, { element: "span", class: "kaching-bundles__choose-multiple-gifts__gift-quantity-button", onclick: P, get disabled() {
          return e(Fe);
        }, children: (Ae, Oe) => {
          var Te = kp();
          ve(() => Ie(Te, "src", Zu)), p(Ae, Te);
        }, $$slots: { default: !0 } });
      }
      x(ke), ve(() => ft(oe, e(V))), p(ge, ke);
    };
    O(A, (ge) => {
      e(I) && i().maxQuantity > 1 && ge(re);
    });
    var ue = L(A, 2);
    {
      let ge = d(() => ["kaching-bundles__choose-multiple-gifts__product-button", e(T) && "kaching-bundles__choose-multiple-gifts__product-button--disabled", e(I) && "kaching-bundles__choose-multiple-gifts__product-button--selected"]);
      Wt(ue, { element: "span", get class() {
        return e(ge);
      }, onclick: function() {
        e(I) ? (ae(z, !1), g()()) : f()();
      }, get disabled() {
        return e(T);
      }, children: (ke, pe) => {
        var Ce = yp(), oe = fe(Ce), xe = (Te) => {
          var Y = xp();
          ve((ye) => {
            Ie(Y, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.3333%205.00008V4.33341C13.3333%203.39999%2013.3333%202.93328%2013.1517%202.57676C12.9919%202.26316%2012.7369%202.00819%2012.4233%201.8484C12.0668%201.66675%2011.6001%201.66675%2010.6667%201.66675H9.33333C8.39991%201.66675%207.9332%201.66675%207.57668%201.8484C7.26308%202.00819%207.00811%202.26316%206.84832%202.57676C6.66667%202.93328%206.66667%203.39999%206.66667%204.33341V5.00008M2.5%205.00008H17.5M15.8333%205.00008V14.3334C15.8333%2015.7335%2015.8333%2016.4336%2015.5608%2016.9684C15.3212%2017.4388%2014.9387%2017.8212%2014.4683%2018.0609C13.9335%2018.3334%2013.2335%2018.3334%2011.8333%2018.3334H8.16667C6.76654%2018.3334%206.06647%2018.3334%205.53169%2018.0609C5.06129%2017.8212%204.67883%2017.4388%204.43915%2016.9684C4.16667%2016.4336%204.16667%2015.7335%204.16667%2014.3334V5.00008'%20stroke='%23F04438'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), Ie(Y, "alt", ye);
          }, [() => a()("system.remove")]), p(Te, Y);
        };
        O(oe, (Te) => {
          e(I) && Te(xe);
        });
        var Fe = L(oe, 2), Ae = (Te) => {
          var Y = Zn();
          ve((ye) => ft(Y, ye), [() => a()(e(S))]), p(Te, Y);
        }, Oe = (Te) => {
          p(Te, Zn("Choose"));
        };
        O(Fe, (Te) => {
          e(S) ? Te(Ae) : Te(Oe, !1);
        }), p(ke, Ce);
      }, $$slots: { default: !0 } });
    }
    x(le), x(Q), p(n, Q);
    var _e = lt(R);
    return o(), _e;
  }
  Je(Ku, { product: {}, dealBlock: {}, multipleGiftsSelector: {}, selectedVariantIds: {}, availableQuantity: {}, onSelect: {}, onRemove: {}, onVariantChange: {}, onQuantityChange: {} }, [], [], !0);
  const Pp = { red: 0, green: 0, blue: 0, alpha: 0.5 };
  function Sp(n, t) {
    var r;
    (r = t()) == null || r();
  }
  function Bp(n, t, r, a, s) {
    var o;
    const c = t();
    r()(a().id, c), (o = s()) == null || o();
  }
  var Cp = $('<img alt="Close"/>'), Ip = $('<div class="kaching-bundles__choose-multiple-gifts"><div class="kaching-bundles__choose-multiple-gifts__header"><h2 class="kaching-bundles__choose-multiple-gifts__heading"><!></h2> <!></div> <div class="kaching-bundles__choose-multiple-gifts__products"></div> <div class="kaching-bundles__choose-multiple-gifts__footer"><span class="kaching-bundles__choose-multiple-gifts__footer-text"> </span> <div class="kaching-bundles__choose-multiple-gifts__footer-buttons"><button class="kaching-bundles__choose-multiple-gifts__footer-button kaching-bundles__choose-multiple-gifts__footer-button--cancel"> </button> <button class="kaching-bundles__choose-multiple-gifts__footer-button kaching-bundles__choose-multiple-gifts__footer-button--confirm"> </button></div></div></div>');
  function oo(n, t) {
    it(t, !0);
    const r = () => $e(f, "$translate", a), [a, s] = vt(), o = k(t, "dealBlock", 7), c = k(t, "multipleGiftsSelector", 7), l = k(t, "products", 23, () => []), i = k(t, "initialSelectedGifts", 23, () => []), u = k(t, "onConfirm", 7, () => {
    }), h = k(t, "onClose", 7), f = Mt();
    let g = Ve(ct((function(G) {
      const U = {};
      for (const te of G) {
        const E = te.product.id;
        U[E] || (U[E] = []), U[E].push(te.variant.id);
      }
      return U;
    })(i())));
    const b = d(() => o().chooseMultipleGiftsModal), v = d(() => ((G) => G ? pn({ "kaching-choose-multiple-gifts-button-size": G.buttonSize + "px", "kaching-choose-multiple-gifts-text-size": G.textSize + "px", "kaching-choose-multiple-gifts-price-color": Ne(G.priceColor), "kaching-choose-multiple-gifts-compare-at-price-color": Ne(G.compareAtPriceColor), "kaching-choose-multiple-gifts-text-color": Ne(G.textColor), "kaching-choose-multiple-gifts-button-color": Ne(G.buttonColor), "kaching-choose-multiple-gifts-button-text-color": Ne(G.buttonTextColor), "kaching-choose-multiple-gifts-photo-size": G.productPhotoSize + "px" }) : "")(e(b) || null)), w = d(() => c().maxQuantity), m = d(() => Object.values(e(g)).reduce((G, U) => G + U.length, 0));
    function z(G) {
      return e(g)[G] || [];
    }
    function I(G) {
      const U = G.variants.find((te) => te.availableForSale);
      return (U == null ? void 0 : U.id) || G.variants[0].id;
    }
    const V = d(() => {
      var G;
      return ((G = e(b)) == null ? void 0 : G.footerText) || "FREE gifts selected";
    });
    var T = { get dealBlock() {
      return o();
    }, set dealBlock(G) {
      o(G), _();
    }, get multipleGiftsSelector() {
      return c();
    }, set multipleGiftsSelector(G) {
      c(G), _();
    }, get products() {
      return l();
    }, set products(G = []) {
      l(G), _();
    }, get initialSelectedGifts() {
      return i();
    }, set initialSelectedGifts(G = []) {
      i(G), _();
    }, get onConfirm() {
      return u();
    }, set onConfirm(G = () => {
    }) {
      u(G), _();
    }, get onClose() {
      return h();
    }, set onClose(G) {
      h(G), _();
    } }, q = Ip(), ee = y(q), H = y(ee), D = y(H), ne = (G) => {
      var U = Zn();
      ve((te) => ft(U, te), [() => r()(e(b).heading)]), p(G, U);
    };
    O(D, (G) => {
      var U;
      (U = e(b)) != null && U.heading && G(ne);
    }), x(H);
    var B = L(H, 2), N = (G) => {
      Wt(G, { element: "span", class: "kaching-bundles__choose-multiple-gifts__close", get onclick() {
        return h();
      }, children: (U, te) => {
        var E = Cp();
        ve(() => Ie(E, "src", "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), p(U, E);
      }, $$slots: { default: !0 } });
    };
    O(B, (G) => {
      h() && G(N);
    }), x(ee);
    var se = L(ee, 2);
    Vt(se, 21, l, (G) => G.id, (G, U) => {
      {
        let te = d(() => z(e(U).id)), E = d(() => (function(ie) {
          const J = z(ie).length;
          return e(w) - e(m) + J;
        })(e(U).id));
        Ku(G, { get dealBlock() {
          return o();
        }, get multipleGiftsSelector() {
          return c();
        }, get product() {
          return e(U);
        }, get selectedVariantIds() {
          return e(te);
        }, get availableQuantity() {
          return e(E);
        }, onSelect: () => (function(ie) {
          if (e(m) >= e(w)) return;
          const J = I(ie), C = l().length === 1 ? e(w) : 1;
          ae(g, { ...e(g), [ie.id]: Array(C).fill(J) }, !0);
        })(e(U)), onRemove: () => (function(ie) {
          const { [ie]: J, ...C } = e(g);
          ae(g, C, !0);
        })(e(U).id), onVariantChange: (ie, J) => (function(C, j, W) {
          const X = z(C);
          if (j >= X.length) return;
          const le = [...X];
          le[j] = W, ae(g, { ...e(g), [C]: le }, !0);
        })(e(U).id, ie, J), onQuantityChange: (ie) => (function(J, C) {
          const j = z(J.id), W = j.length;
          if (C === W) return;
          let X;
          if (C > W) {
            const le = I(J), A = C - W;
            X = [...j, ...Array(A).fill(le)];
          } else X = j.slice(0, C);
          ae(g, { ...e(g), [J.id]: X }, !0);
        })(e(U), ie) });
      }
    }), x(se);
    var S = L(se, 2), Z = y(S), M = y(Z);
    x(Z);
    var P = L(Z, 2), R = y(P);
    R.__click = [Sp, h];
    var Q = y(R, !0);
    x(R);
    var K = L(R, 2);
    K.__click = [Bp, function() {
      const G = [];
      for (const U of l()) {
        const te = z(U.id);
        for (const E of te) {
          const ie = U.variants.find((C) => C.id === E);
          if (!ie) continue;
          const J = o().useProductCompareAtPrice && ie.compareAtPrice ? Math.max(ie.price, ie.compareAtPrice) : ie.price;
          G.push({ id: `${E}`, variant: ie, product: U, quantity: 1, fullPrice: J });
        }
      }
      return G;
    }, u, c, h];
    var ce = y(K, !0);
    x(K), x(P), x(S), x(q), ve((G, U, te) => {
      var E, ie;
      Gt(q, e(v)), ft(M, `${(E = e(m)) != null ? E : ""}/${(ie = e(w)) != null ? ie : ""}
      ${G != null ? G : ""}`), ft(Q, U), ft(ce, te);
    }, [() => r()(e(V)), () => r()("system.cancel"), () => r()("system.confirm")]), p(n, q);
    var F = lt(T);
    return s(), F;
  }
  jn(["click"]), Je(oo, { dealBlock: {}, multipleGiftsSelector: {}, products: {}, initialSelectedGifts: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var Mp = $('<div class="kaching-bundles"><!></div>');
  function Xu(n, t) {
    var r;
    it(t, !0);
    const a = k(t, "config", 7), s = k(t, "dealBlock", 7), o = k(t, "products", 23, () => []), c = k(t, "mediaImages", 7), l = k(t, "translations", 7), i = k(t, "multipleGiftsSelector", 7), u = d(() => sr(s(), a().brandColors)), h = d(() => sr(i(), a().brandColors)), { setConfig: f } = Za(a()), { setMoneyFormat: g } = Pi(a().moneyFormat), { setTranslations: b } = Ha(l()), { setMediaImages: v } = il(c()), { setSwatchSettings: w } = nl({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (r = e(u).showSelectedSwatchName) != null && r });
    tt(() => {
      f(a());
    }), tt(() => {
      g(a().moneyFormat, !!e(u).showPricesWithoutDecimals);
    }), tt(() => {
      b(l());
    }), tt(() => {
      v(c());
    }), tt(() => {
      var T;
      w({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (T = e(u).showSelectedSwatchName) != null && T });
    });
    var m = { get config() {
      return a();
    }, set config(T) {
      a(T), _();
    }, get dealBlock() {
      return s();
    }, set dealBlock(T) {
      s(T), _();
    }, get products() {
      return o();
    }, set products(T = []) {
      o(T), _();
    }, get mediaImages() {
      return c();
    }, set mediaImages(T) {
      c(T), _();
    }, get translations() {
      return l();
    }, set translations(T) {
      l(T), _();
    }, get multipleGiftsSelector() {
      return i();
    }, set multipleGiftsSelector(T) {
      i(T), _();
    } }, z = ze(), I = fe(z), V = (T) => {
      var q = Mp();
      oo(y(q), { get dealBlock() {
        return e(u);
      }, get products() {
        return o();
      }, get multipleGiftsSelector() {
        return e(h);
      } }), x(q), p(T, q);
    };
    return O(I, (T) => {
      e(h) && T(V);
    }), p(n, z), lt(m);
  }
  function ll(n, t) {
    var r;
    if (!t) return n.price;
    const a = n.sellingPlans.find((s) => s.id === t.id);
    return (r = a == null ? void 0 : a.price) != null ? r : n.price;
  }
  function co(n, t) {
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
  function sl(n, t) {
    return n.sellingPlans.filter((r) => t.some((a) => a.sellingPlans.some((s) => s.id === r.id)));
  }
  function uo(n, t, r) {
    let a;
    if (n.sellingPlanGid) {
      const s = Nt(n.sellingPlanGid);
      a = t.find((o) => o.id === s);
    } else a = r || t[0];
    return a && t.some((s) => s.id === a.id) ? a : t[0];
  }
  function go(n, t, r, a) {
    return n || (t ? r.some((s) => s.id === t.id) ? t : r[0] : a && r.length > 0 ? r[0] : void 0);
  }
  customElements.define("kaching-bundles-choose-multiple-gifts", Je(Xu, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, multipleGiftsSelector: { attribute: "multiple-gifts-selector", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this;
    }
  }));
  const tr = (n, t, r) => zp(n, t, r) || $p(n, t), zp = (n, t, r) => {
    if (!r || t.sellingPlans.length === 0) return;
    const a = new Set(t.sellingPlans.map((o) => o.id));
    return a.has(r.id) ? n.sellingPlans.find((o) => o.id === r.id) : n.sellingPlans.find((o) => a.has(o.id) && o.name === r.name) || n.sellingPlans.find((o) => o.id === t.sellingPlans[0].id);
  }, $p = (n, t) => {
    if (!n.requiresSellingPlan || t.sellingPlans.length === 0) return;
    const r = t.sellingPlans[0].id;
    return n.sellingPlans.find((a) => a.id === r);
  };
  function sa({ discountType: n, discountValue: t, discountQuantity: r, variantQuantities: a, currencyRate: s, priceRounding: o, sellingPlan: c, percentageCentsRoundingWorkaround: l }) {
    const i = (function({ discountType: f, discountValue: g, discountQuantity: b, variantQuantities: v, currencyRate: w, sellingPlan: m, percentageCentsRoundingWorkaround: z }) {
      const I = v.map(({ variant: q, quantity: ee }) => ll(q, m) * ee), V = I.reduce((q, ee) => q + ee, 0), T = v.map(({ quantity: q }) => q).reduce((q, ee) => q + ee, 0);
      if (f === "specific") {
        let q = 100 * Number(g) * w;
        if (T > Number(b)) {
          const D = q / Number(b);
          q = Math.ceil(D * T);
        }
        const ee = q / T;
        let H = 0;
        for (const { variant: D, quantity: ne } of v) {
          if (m && D.sellingPlans.some((B) => B.id === m.id) && m.priceAdjustment) {
            H += co(ee, m) * ne;
            continue;
          }
          H += ee * ne;
        }
        return Math.max(0, Math.min(H, V));
      }
      if (f === "percentage") {
        if (z) {
          const ee = V * (100 - Number(g)) / 100;
          return Math.max(0, Math.min(Math.ceil(ee), V));
        }
        let q = 0;
        for (const { variant: ee, quantity: H } of v) {
          const D = ll(ee, m);
          q += Math.ceil(D * (100 - Number(g)) / 100) * H;
        }
        return Math.max(0, Math.min(q, V));
      }
      if (f === "amount") {
        const q = Math.round(100 * Number(g)) * w, ee = q * T;
        return typeof document != "undefined" && V > 0 && ee > V && document.dispatchEvent(new CustomEvent("kaching-bundles-amount-discount-exceeds-price", { detail: { totalDiscount: ee, fullOrderPrice: V } })), Math.max(0, Math.min(V - q * T, V));
      }
      return V;
    })({ discountType: n, discountValue: t, discountQuantity: r, variantQuantities: a, currencyRate: s, sellingPlan: c, percentageCentsRoundingWorkaround: l }), u = a.map(({ variant: f, quantity: g }) => o != null && o.v2 ? ll(f, c) * g : f.price * g).reduce((f, g) => f + g, 0), h = a.map(({ quantity: f }) => f).reduce((f, g) => f + g, 0);
    if (o && (n !== "default" || o.v2)) {
      if (o.perItem) {
        const f = Si(i / h, o.precision) * h;
        return o.v2 && Math.round(f) > Math.round(u) && i / h > 100 ? Si(i / h - 100, o.precision) * h : f <= u ? f : i;
      }
      {
        const f = Si(i, o.precision);
        return o.v2 && Math.round(f) > Math.round(u) && i > 100 ? Si(i - 100, o.precision) : f <= u ? f : i;
      }
    }
    return i;
  }
  function ed(n, t, r, a, s, o) {
    return sa({ discountType: n.discountType, discountValue: n.discountValue, discountQuantity: n.quantity, variantQuantities: t, currencyRate: r, priceRounding: a, sellingPlan: s, percentageCentsRoundingWorkaround: o });
  }
  function td(n, t, r, a, s) {
    var o, c, l, i;
    const u = [...t].sort((m, z) => m.variant.price - z.variant.price), h = u.reduce((m, z) => m + z.quantity, 0) >= n.buyQuantity + n.getQuantity ? n.getQuantity : 0, f = [], g = [];
    let b = h;
    for (const { variant: m, quantity: z } of u) {
      const I = Math.min(z, b), V = z - I;
      b -= I, I > 0 && f.push({ variant: m, quantity: I }), V > 0 && g.push({ variant: m, quantity: V });
    }
    const v = f.length > 0 ? sa({ discountType: (o = n.getDiscountType) != null ? o : "percentage", discountValue: (c = n.getDiscountValue) != null ? c : 100, discountQuantity: h, variantQuantities: f, currencyRate: r, priceRounding: a, sellingPlan: s }) : 0, w = g.reduce((m, z) => m + z.quantity, 0);
    return v + sa({ discountType: (l = n.buyDiscountType) != null ? l : "default", discountValue: (i = n.buyDiscountValue) != null ? i : 0, discountQuantity: w, variantQuantities: g, currencyRate: r, priceRounding: a, sellingPlan: s });
  }
  function ho(n, t, r, a, s) {
    return n.bundleProducts.filter(({ productGID: o }) => o).map((o) => {
      const c = t[o.id];
      if (!c) return 0;
      const l = tr(c.product, c.variant, s);
      return sa({ discountType: o.discountType, discountValue: o.discountValue, discountQuantity: o.quantity, variantQuantities: [c], currencyRate: r, priceRounding: a, sellingPlan: l });
    }).reduce((o, c) => o + c, 0);
  }
  function os(n, t, r, a, s) {
    const o = n.bundleProducts.filter(({ productGID: i }) => i).reduce((i, u) => {
      const h = t[u.id];
      if (!h) return i;
      const f = tr(h.product, h.variant, s);
      return i + (f ? co(h.variant.price, f) : h.variant.price);
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
      let u = Si(i, a.precision);
      a.v2 && Math.round(u) > Math.round(o) && i > 100 && (u = Si(i - 100, a.precision)), l = u <= o ? u : i;
    }
    return Math.max(0, Math.round(l));
  }
  function Si(n, t = ".00") {
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
  var Dp = $('<img class="kaching-bundles__choose-product__product-image" alt=""/>'), Vp = $('<span class="kaching-bundles__choose-product__product-title"> </span>'), Ap = $('<span class="kaching-bundles__choose-product__subtitle"><!></span>'), Tp = $('<div class="kaching-bundles__choose-product__product-price"><!></div>'), qp = $('<div class="kaching-bundles__choose-product__product-compare-at-price"><!></div>'), Gp = $("<div><!> <!></div>"), Op = $('<div class="kaching-bundles__choose-product__product"><div class="kaching-bundles__choose-product__product-container"><!> <div class="kaching-bundles__choose-product__product-content"><!> <!> <div class="kaching-bundles__choose-product__product-price-container"><!> <!></div> <!></div></div> <!></div>');
  function nd(n, t) {
    var r;
    it(t, !0);
    const a = () => $e(v, "$config", c), s = () => $e(b, "$formatPrice", c), o = () => $e(g, "$translate", c), [c, l] = vt(), i = k(t, "product", 7), u = k(t, "dealBlock", 7), h = k(t, "dealBar", 7), f = k(t, "onChoose", 7), g = Mt(), b = gn(), v = vn();
    let w = Ve(!1), m = Ve(ct(((r = i().variants.find((C) => C.availableForSale)) == null ? void 0 : r.id) || i().variants[0].id));
    const z = d(() => i().variants.find((C) => C.id === e(m)) || i().variants[0]), I = d(() => {
      var C;
      return e(w) || ((C = u().chooseProductModal) == null ? void 0 : C.showVariantImageByDefault);
    }), V = d(() => e(I) && e(z).image || i().image), T = d(() => u().priceRounding ? { perItem: !0, precision: u().priceRoundingPrecision, v2: a().featureFlags.price_rounding_v2 || !1 } : void 0), q = d(() => h().dealBarType === gt.Bxgy ? e(z).price : sa({ discountType: h().discountType, discountValue: h().discountValue, discountQuantity: 1, variantQuantities: [{ variant: e(z), quantity: 1 }], currencyRate: a().currencyRate, priceRounding: e(T) })), ee = d(() => (function(C, j) {
      return C.useProductCompareAtPrice && j.compareAtPrice ? Math.max(j.price, j.compareAtPrice) : j.price;
    })(u(), e(z))), H = d(() => i().url ? `${i().url}?variant=${e(m)}` : void 0), D = d(() => hn({ priceFormatter: s(), product: i(), totalFullPrice: e(ee), totalDiscountedPrice: e(q), quantity: 1, unitQuantity: xr([{ variant: e(z), quantity: 1 }]) })), ne = d(() => e(D)(o()(u().chooseProductModal.subtitle || ""))), B = d(() => u().chooseProductModal.buttonText);
    function N(C) {
      ae(w, !0), ae(m, C, !0);
    }
    var se = { get product() {
      return i();
    }, set product(C) {
      i(C), _();
    }, get dealBlock() {
      return u();
    }, set dealBlock(C) {
      u(C), _();
    }, get dealBar() {
      return h();
    }, set dealBar(C) {
      h(C), _();
    }, get onChoose() {
      return f();
    }, set onChoose(C) {
      f(C), _();
    } }, S = Op(), Z = y(S), M = y(Z), P = (C) => {
      er(C, { get url() {
        return e(H);
      }, class: "kaching-bundles__choose-product__product-image-link", children: (j, W) => {
        var X = Dp();
        Ie(X, "width", 100), Ie(X, "height", 100), ve(() => Ie(X, "src", e(V))), p(j, X);
      }, $$slots: { default: !0 } });
    };
    O(M, (C) => {
      e(V) && C(P);
    });
    var R = L(M, 2), Q = y(R);
    er(Q, { get url() {
      return e(H);
    }, class: "kaching-bundles__choose-product__product-link", children: (C, j) => {
      var W = Vp(), X = y(W, !0);
      x(W), ve(() => ft(X, i().title)), p(C, W);
    }, $$slots: { default: !0 } });
    var K = L(Q, 2), ce = (C) => {
      var j = Ap();
      Ge(y(j), () => e(ne)), x(j), p(C, j);
    };
    O(K, (C) => {
      e(ne) && C(ce);
    });
    var F = L(K, 2), G = y(F);
    st(G, () => e(q), (C) => {
      var j = Tp();
      Ge(y(j), () => s()(e(q))), x(j), p(C, j);
    });
    var U = L(G, 2), te = (C) => {
      var j = ze();
      st(fe(j), () => e(ee), (W) => {
        var X = qp();
        Ge(y(X), () => s()(e(ee))), x(X), p(W, X);
      }), p(C, j);
    };
    O(U, (C) => {
      e(ee) && e(ee) > e(q) && C(te);
    }), x(F);
    var E = L(F, 2), ie = (C) => {
      var j = Gp(), W = y(j);
      la(W, { get product() {
        return i();
      }, class: "kaching-bundles__choose-product__product-option-names" }), Jn(L(W, 2), { get product() {
        return i();
      }, get selectedVariantId() {
        return e(m);
      }, onChange: N }), x(j), p(C, j);
    };
    O(E, (C) => {
      i().variants.length > 1 && C(ie);
    }), x(R), x(Z), Wt(L(Z, 2), { element: "span", class: "kaching-bundles__choose-product__product-button", onclick: function() {
      f()({ product: i(), variant: e(z) });
    }, children: (C, j) => {
      var W = ze(), X = fe(W), le = (re) => {
        var ue = Zn();
        ve((_e) => ft(ue, _e), [() => o()(e(B))]), p(re, ue);
      }, A = (re) => {
        p(re, Zn("Choose"));
      };
      O(X, (re) => {
        e(B) ? re(le) : re(A, !1);
      }), p(C, W);
    }, $$slots: { default: !0 } }), x(S), p(n, S);
    var J = lt(se);
    return l(), J;
  }
  Je(nd, { product: {}, dealBlock: {}, dealBar: {}, onChoose: {} }, [], [], !0);
  const po = "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
  var Fp = $('<img alt="Close"/>'), Lp = (n, t) => {
    ae(t, !e(t));
  }, jp = (n, t, r, a) => {
    ae(t, e(r).value, !0), ae(a, !1);
  }, Ep = $('<img alt="" aria-hidden="true" class="kaching-bundles__choose-product__sort-option-check"/>'), Rp = $('<button type="button" class="kaching-bundles__choose-product__sort-option"><span> </span> <!></button>'), Np = $('<div class="kaching-bundles__choose-product__sort-menu"></div>'), Qp = $('<div class="kaching-bundles__choose-product__controls"><div class="kaching-bundles__choose-product__search-field"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__search-icon"/> <input type="search" class="kaching-bundles__choose-product__search-input"/></div> <div class="kaching-bundles__choose-product__sort"><button type="button" class="kaching-bundles__choose-product__sort-button"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__sort-icon"/> </button> <!></div></div>'), Wp = (n, t) => {
    ae(t, "");
  }, Up = $('<div class="kaching-bundles__choose-product__empty-state-icon-wrapper"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__empty-state-icon"/></div> <h3 class="kaching-bundles__choose-product__empty-state-title"> </h3> <p class="kaching-bundles__choose-product__empty-state-description"> </p> <button type="button" class="kaching-bundles__choose-product__empty-state-clear-button"> </button>', 1), Hp = $('<div class="kaching-bundles__choose-product__empty-state"><!></div>'), Zp = $('<div class="kaching-bundles__choose-product"><div class="kaching-bundles__choose-product__header"><h2 class="kaching-bundles__choose-product__heading"><!></h2> <!></div> <!> <div class="kaching-bundles__choose-product__products"><!></div></div>');
  function bo(n, t) {
    var r;
    it(t, !0);
    const a = () => $e(f, "$translate", s), [s, o] = vt(), c = k(t, "dealBlock", 7), l = k(t, "dealBar", 7), i = k(t, "products", 23, () => []), u = k(t, "onChoose", 7), h = k(t, "onClose", 7), f = Mt(), g = d(() => c().chooseProductModal), b = d(() => ((F) => pn({ "kaching-choose-product-button-size": F.buttonSize + "px", "kaching-choose-product-text-size": F.textSize + "px", "kaching-choose-product-price-color": Ne(F.priceColor), "kaching-choose-product-compare-at-price-color": Ne(F.compareAtPriceColor), "kaching-choose-product-text-color": Ne(F.textColor), "kaching-choose-product-button-color": Ne(F.buttonColor), "kaching-choose-product-button-text-color": Ne(F.buttonTextColor), "kaching-choose-product-photo-size": F.productPhotoSize + "px" }))(e(g)));
    let v = Ve(""), w = Ve(!1);
    const m = { Relevance: "relevance", NewestFirst: "newest-first", PriceLowToHigh: "price-low-to-high", PriceHighToLow: "price-high-to-low" }, z = d(() => [{ value: m.Relevance, label: a()("system.sort_relevance") }, { value: m.NewestFirst, label: a()("system.sort_newest_first") }, { value: m.PriceLowToHigh, label: a()("system.sort_price_low_to_high") }, { value: m.PriceHighToLow, label: a()("system.sort_price_high_to_low") }]);
    let I = Ve(ct(Object.values(m).includes((r = e(g).defaultSortOption) != null ? r : "") ? e(g).defaultSortOption : m.Relevance));
    const V = d(() => e(g).showSearchField ? i().filter((F) => F.title.toLowerCase().includes(e(v).toLowerCase().trim())) : i()), T = d(() => {
      const F = [...e(V)], G = (te) => {
        const E = te.variants.find((ie) => ie.availableForSale) || te.variants[0];
        return (E == null ? void 0 : E.price) || 0;
      }, U = (te) => {
        if (!te.createdAt) return 0;
        const E = Date.parse(te.createdAt);
        return Number.isNaN(E) ? 0 : E;
      };
      switch (e(I)) {
        case m.Relevance:
          return F;
        case m.NewestFirst:
          return F.sort((te, E) => {
            const ie = U(E) - U(te);
            return ie !== 0 ? ie : E.id - te.id;
          });
        case m.PriceLowToHigh:
          return F.sort((te, E) => G(te) - G(E));
        case m.PriceHighToLow:
          return F.sort((te, E) => G(E) - G(te));
        default:
          return F;
      }
    }), q = d(() => e(g).showSearchField && e(v).trim().length > 0 && e(T).length === 0);
    function ee() {
      ae(w, !1);
    }
    function H(F, G) {
      const U = (te) => {
        F.contains(te.target) || G();
      };
      return document.addEventListener("click", U, !0), { destroy() {
        document.removeEventListener("click", U, !0);
      } };
    }
    var D = { get dealBlock() {
      return c();
    }, set dealBlock(F) {
      c(F), _();
    }, get dealBar() {
      return l();
    }, set dealBar(F) {
      l(F), _();
    }, get products() {
      return i();
    }, set products(F = []) {
      i(F), _();
    }, get onChoose() {
      return u();
    }, set onChoose(F) {
      u(F), _();
    }, get onClose() {
      return h();
    }, set onClose(F) {
      h(F), _();
    } }, ne = Zp(), B = y(ne), N = y(B), se = y(N), S = (F) => {
      var G = Zn();
      ve((U) => ft(G, U), [() => a()(e(g).heading)]), p(F, G);
    };
    O(se, (F) => {
      e(g).heading && F(S);
    }), x(N), Wt(L(N, 2), { element: "span", class: "kaching-bundles__choose-product__close", get onclick() {
      return h();
    }, children: (F, G) => {
      var U = Fp();
      ve(() => Ie(U, "src", po)), p(F, U);
    }, $$slots: { default: !0 } }), x(B);
    var Z = L(B, 2), M = (F) => {
      var G = Qp(), U = y(G), te = y(U), E = L(te, 2);
      aa(E), x(U);
      var ie = L(U, 2), J = y(ie);
      J.__click = [Lp, w];
      var C = y(J), j = L(C);
      x(J);
      var W = L(J, 2), X = (le) => {
        var A = Np();
        Vt(A, 21, () => e(z), (re) => re.value, (re, ue) => {
          var _e = Rp();
          _e.__click = [jp, I, ue, w];
          var ge = y(_e), ke = y(ge, !0);
          x(ge);
          var pe = L(ge, 2), Ce = (oe) => {
            var xe = Ep();
            ve(() => Ie(xe, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.6663%205L7.49967%2014.1667L3.33301%2010'%20stroke='%23344054'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), p(oe, xe);
          };
          O(pe, (oe) => {
            e(I) === e(ue).value && oe(Ce);
          }), x(_e), ve(() => ft(ke, e(ue).label)), p(re, _e);
        }), x(A), p(le, A);
      };
      O(W, (le) => {
        e(w) && le(X);
      }), x(ie), Ws(ie, (le, A) => H == null ? void 0 : H(le, A), () => ee), x(G), ve((le, A, re) => {
        Ie(te, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.5%2017.5L13.875%2013.875M15.8333%209.16667C15.8333%2012.8486%2012.8486%2015.8333%209.16667%2015.8333C5.48477%2015.8333%202.5%2012.8486%202.5%209.16667C2.5%205.48477%205.48477%202.5%209.16667%202.5C12.8486%202.5%2015.8333%205.48477%2015.8333%209.16667Z'%20stroke='%23717680'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), Ie(E, "aria-label", le), Ie(E, "placeholder", A), Ie(C, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.1667%203.33337V16.6667M14.1667%2016.6667L10.8333%2013.3334M14.1667%2016.6667L17.5%2013.3334M5.83333%2016.6667V3.33337M5.83333%203.33337L2.5%206.66671M5.83333%203.33337L9.16667%206.66671'%20stroke='%23414651'%20stroke-width='1.67'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), ft(j, ` ${re != null ? re : ""}`);
      }, [() => a()("system.search"), () => a()("system.search"), () => a()("system.sort_by")]), th(E, () => e(v), (le) => ae(v, le)), p(F, G);
    };
    O(Z, (F) => {
      e(g).showSearchField && F(M);
    });
    var P = L(Z, 2), R = y(P), Q = (F) => {
      var G = Hp(), U = y(G), te = (ie) => {
        var J = Up(), C = fe(J), j = y(C);
        x(C);
        var W = L(C, 2), X = y(W, !0);
        x(W);
        var le = L(W, 2), A = y(le, !0);
        x(le);
        var re = L(le, 2);
        re.__click = [Wp, v];
        var ue = y(re, !0);
        x(re), ve((_e, ge, ke) => {
          Ie(j, "src", "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='4'%20y='4'%20width='48'%20height='48'%20rx='24'%20fill='%23F2F4F7'/%3e%3crect%20x='4'%20y='4'%20width='48'%20height='48'%20rx='24'%20stroke='%23F9FAFB'%20stroke-width='8'/%3e%3cpath%20d='M37%2037L32.65%2032.65M35%2027C35%2031.4183%2031.4183%2035%2027%2035C22.5817%2035%2019%2031.4183%2019%2027C19%2022.5817%2022.5817%2019%2027%2019C31.4183%2019%2035%2022.5817%2035%2027Z'%20stroke='%23475467'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), ft(X, _e), ft(A, ge), ft(ue, ke);
        }, [() => a()("system.no_results_found"), () => a()("system.no_results_description"), () => a()("system.clear_search")]), p(ie, J);
      }, E = (ie) => {
        var J = Zn();
        ve((C) => ft(J, C), [() => a()("system.no_products_available")]), p(ie, J);
      };
      O(U, (ie) => {
        e(q) ? ie(te) : ie(E, !1);
      }), x(G), p(F, G);
    }, K = (F) => {
      var G = ze();
      Vt(fe(G), 17, () => e(T), (U) => U.id, (U, te) => {
        nd(U, { get dealBlock() {
          return c();
        }, get dealBar() {
          return l();
        }, get product() {
          return e(te);
        }, get onChoose() {
          return u();
        } });
      }), p(F, G);
    };
    O(R, (F) => {
      e(T).length === 0 ? F(Q) : F(K, !1);
    }), x(P), x(ne), ve(() => Gt(ne, e(b))), p(n, ne);
    var ce = lt(D);
    return o(), ce;
  }
  jn(["click"]), Je(bo, { dealBlock: {}, dealBar: {}, products: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var Jp = $('<div class="kaching-bundles"><!></div>');
  function rd(n, t) {
    var r;
    it(t, !0);
    const a = k(t, "config", 7), s = k(t, "dealBlock", 7), o = k(t, "dealBar", 7), c = k(t, "products", 23, () => []), l = k(t, "mediaImages", 7), i = k(t, "translations", 7), u = d(() => sr(s(), a().brandColors)), h = d(() => sr(o(), a().brandColors)), { setConfig: f } = Za(a()), { setMoneyFormat: g } = Pi(a().moneyFormat), { setTranslations: b } = Ha(i()), { setMediaImages: v } = il(l()), { setSwatchSettings: w } = nl({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (r = e(u).showSelectedSwatchName) != null && r });
    tt(() => {
      f(a());
    }), tt(() => {
      g(a().moneyFormat, !!e(u).showPricesWithoutDecimals);
    }), tt(() => {
      b(i());
    }), tt(() => {
      v(l());
    }), tt(() => {
      var I;
      w({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (I = e(u).showSelectedSwatchName) != null && I });
    });
    var m = { get config() {
      return a();
    }, set config(I) {
      a(I), _();
    }, get dealBlock() {
      return s();
    }, set dealBlock(I) {
      s(I), _();
    }, get dealBar() {
      return o();
    }, set dealBar(I) {
      o(I), _();
    }, get products() {
      return c();
    }, set products(I = []) {
      c(I), _();
    }, get mediaImages() {
      return l();
    }, set mediaImages(I) {
      l(I), _();
    }, get translations() {
      return i();
    }, set translations(I) {
      i(I), _();
    } }, z = Jp();
    return bo(y(z), { get dealBlock() {
      return e(u);
    }, get dealBar() {
      return e(h);
    }, get products() {
      return c();
    }, onChoose: () => {
    }, onClose: () => {
    } }), x(z), p(n, z), lt(m);
  }
  customElements.define("kaching-bundles-choose-product", Je(rd, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, dealBar: { attribute: "deal-bar", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this;
    }
  })), ii = !0;
  var Yp = An('<svg width="102" height="60" viewBox="0 0 102 60" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 2)" fill="currentColor"></ellipse><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 2)" fill="#000" fill-opacity=".3"></ellipse><mask id="a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="5" width="96" height="48"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 0)" fill="currentColor"></ellipse></mask><g mask="url(#a)"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 0)" fill="currentColor"></ellipse></g><path class="most-popular-text" d="M28 15.4 25.4 24a.3.3 0 0 1 0 .1.2.2 0 0 1-.2.1c-.4.1-.7 0-.8-.4a1007.3 1007.3 0 0 1-3.9-9.2l-.8 7.6a.5.5 0 0 0 0 .2l.6.8a.7.7 0 0 1 0 .1.2.2 0 0 1 0 .1c0 .5-1.7.1-2 0-1 0 .1-1 .2-1.4l1.1-9c0-.4-.1-.7-.5-1a.4.4 0 0 1-.1-.2v-.2a.2.2 0 0 1 .1 0 15.2 15.2 0 0 1 3.1.2h.1c.1 0 0 0 0 .1.3.5-.5.7-.3 1.2a1361.6 1361.6 0 0 1 3.2 8.1l2.3-7.3a.7.7 0 0 0-.1-.6c-.3-.4-1-1 .1-1l2.7.4c.2 0 .3.2.2.4a.4.4 0 0 1-.1.2c-.3.3-.5.5-.4 1a771.7 771.7 0 0 0 2.5 10c.5.5.7 1-.3.8l-2.2-.3c-.5 0-.5-.4-.1-1a.7.7 0 0 0 .1-.6l-1.6-7.6c0-.2-.1-.2-.1 0zm24 4.7.1 4.5c0 1 .6 1.5 1.6 1.5.3 0 .5-.2.6-.5.1-.4.3-.5.5-.3h.1v.1c.1 1.1-.4 2-1.5 2-2.3.4-3.2-1.2-3.3-3.3l-.2-4.1c0-.4-.2-.5-.6-.5-.5 0-.8-.1-.7-.7a.2.2 0 0 1 .2-.1c1.3.2 2-.3 2-1.6a.2.2 0 0 1 .2-.1c1.1-.5.9 1.3.9 1.9a.1.1 0 0 0 .1.1l2.2.3.2.1c.1.3.1.5-.1.7a.2.2 0 0 1-.1 0 .4.4 0 0 1-.1 0l-2-.1a.1.1 0 0 0-.1 0zm-11.6 4.6c-.7.8-1.8 1.2-3 1.1-1.1 0-2.3-.5-3.3-1.4A5.7 5.7 0 0 1 33 23a5 5 0 0 1-.6-1.7 4 4 0 0 1 .1-1.7c.1-.5.4-1 .8-1.4.7-.7 1.7-1.2 2.9-1.1 1.2 0 2.4.6 3.3 1.4.5.4.9 1 1.2 1.5.3.5.5 1.1.5 1.7a4 4 0 0 1 0 1.6c-.2.6-.5 1-.8 1.4zm-2.4.4c.3 0 .5-.3.7-.5l.5-1v-1.4a6.4 6.4 0 0 0-.3-1.4 6.4 6.4 0 0 0-.6-1.4 4.7 4.7 0 0 0-.8-1 2.6 2.6 0 0 0-1-.6 1.5 1.5 0 0 0-.9 0c-.3 0-.5.3-.7.5l-.4 1a4.7 4.7 0 0 0 0 1.4 6.4 6.4 0 0 0 1.7 3.8c.3.3.6.5 1 .6.2 0 .5.1.8 0zm8-6c-1-.8-2.4-.4-2.3 1 0 .4.3.8.7 1l3 1.2c1.1.5 2.2 2.5 1.1 3.6-1.6 1.8-5.6.6-6.8-1.3-.2-.4-.1-.8.4-1 1.2-.5 1.5 1.5 2.3 2 1 .8 3 .6 2.4-1.1-.3-1-3.2-1.8-3.8-2.2-1.9-1.2-1.8-4 .8-4.3 1.6-.1 4.5.6 4.7 2.6a.3.3 0 0 1 0 .3c-1.1 1.3-1.9-1.3-2.5-1.8zM28.3 34.9c0 1.4 0 2 .8 3 .2.2.2.4 0 .6a.3.3 0 0 1-.2 0l-3.8-.3a.4.4 0 0 1-.3 0c-.3-.4-.3-.7 0-1a1 1 0 0 0 .4-.8L25 28c0-.4-.3-.9-.8-1.4a.3.3 0 0 1 0-.1.2.2 0 0 1 0-.1c0-.3.2-.4.6-.3 3.4.2 9.4.1 9.7 4.8.3 3.8-3 4.1-6 3.9zm-.2-6.7c0 1.4 0 3 .2 4.6 0 .3.2.5.5.6 3.4 1 2.5-3.2 1.6-4.6-.3-.5-.8-.9-1.5-1.1-.5-.2-.8 0-.8.5zM59.5 41c-1.7 1.3-4.3.4-5.2-1.4-1-1.8 0-4.1-1.3-5.8a.4.4 0 0 1 0-.2c0-.6.4-.5.8-.5a19.9 19.9 0 0 1 2.5 0 .4.4 0 0 1 .4.3l.2 5.3c0 .8.3 1.8 1.1 1.8 1.7.2 1-4.2 1-5.3a.5.5 0 0 0-.2-.2l-.5-.8c-.3-.3-.2-.5.3-.6h2.9c.3 0 .4 0 .4.4l.3 6c0 1.6 1.4 1.6 1.3-.2l-.3-7c0-.8-.3-1.2-.8-1.8a.3.3 0 0 1 0-.2.3.3 0 0 1 0-.2.3.3 0 0 1 .2 0l2.8-1.2c.5-.2.8 0 .8.6l.5 10.4c0 .5.2.8.6 1.2.3.4.4 1-.4.8-.9 0-3.1 0-3.9-.4a.4.4 0 0 0-.2 0c-.9 0-2.7.1-3.1-1a.1.1 0 0 0-.2 0zm-16.4-3c-.5 1-1.5 1.6-2.7 1.8-1.2.2-2.5 0-3.6-.7a5.7 5.7 0 0 1-1.5-1.2 5 5 0 0 1-.9-1.6 4.2 4.2 0 0 1-.2-1.7 3.5 3.5 0 0 1 .5-1.6c.5-.9 1.5-1.5 2.7-1.7 1.2-.2 2.5 0 3.6.7a5.7 5.7 0 0 1 1.4 1.2c.5.5.8 1 1 1.6.2.5.2 1.1.2 1.7a3.5 3.5 0 0 1-.5 1.5zm-3.3 1c.2 0 .3-.1.4-.4l.3-.8v-1.3a8.8 8.8 0 0 0-.3-1.3 8.8 8.8 0 0 0-.5-1.3 5.9 5.9 0 0 0-.6-1.1l-.6-.6c-.2-.2-.4-.2-.6-.2-.2 0-.3.2-.4.4l-.3 1v1.1a8.8 8.8 0 0 0 1.4 3.8l.6.6c.2.1.4.2.6.1z" fill="#FEFDFD"></path><path class="most-popular-text" d="M46.9 32.7a3 3 0 0 1 2.8-.3c2.5.8 3.6 2.5 3.5 5-.2 2.9-3.2 4.2-5.5 2.9-.2-.1-.2 0-.2 0 .1 1-.2 2.2.7 3 .3.2.4.5.1.7a.3.3 0 0 1-.2.1 401 401 0 0 0-3.5-.3c-.4 0-.6-.3-.7-.6a.3.3 0 0 1 0-.1.5.5 0 0 1 .1-.1l.5-.7a.4.4 0 0 0 0-.2l-.2-7.3c0-.6-1.1-.9-.9-1.6a.3.3 0 0 1 .2-.2l2.6-1a.2.2 0 0 1 .2 0c.2.1.4.4.4.7zM49 40c2.2 0 .5-5.5-.1-6.4-.7-.8-1.5-.7-1.7.4v3.4c.2.9.6 2.6 1.8 2.6zm24.5 2.7c-2.7 1.4-5.7-1-6.1-3.7-.7-3.5 2.8-5.8 5.8-3.8a.1.1 0 0 0 .1 0c.3-.7 2.3 0 2.9.2.4 0 .6.3.5.7a.3.3 0 0 1 0 .1.3.3 0 0 1-.1 0c-.4.4-.6.8-.6 1.2 0 2.3.2 3.7.2 4.2s1 1.2.7 1.7a.2.2 0 0 1-.1 0 .3.3 0 0 1-.2.1l-2.6-.3a.3.3 0 0 1-.2 0l-.2-.4a.1.1 0 0 0-.1 0zm-.4-5.2c-.2-1.8-2.7-3.4-2.8-.7-.1 1.5.3 4.6 1.9 5.5a.4.4 0 0 0 .2 0c1.4-.3.8-3.5.7-4.8zM80.5 36.5c.3-.3.5-.7 1-.9 3.8-1.6 3.6 4.9.9 2.9-.5-.4-.5-1.7-1.2-1.5a.3.3 0 0 0-.1 0 .3.3 0 0 0 0 .2c-.4.7-.4 4.6.1 5.2.2.3 1.5 1.2.2 1.2a52 52 0 0 1-3.5-.3c-.3 0-.5-.2-.5-.5a.4.4 0 0 1 0-.2c.4-.4.6-.7.6-1.2l-.2-3.5a.4.4 0 0 0 0-.2l-.9-1c-.2-.2 0-.4.3-.6l2.6-1c.3 0 .5 0 .5.4v1h.2z" fill="#FEFDFD"></path><path class="most-popular-text" fill-rule="evenodd" clip-rule="evenodd" d="m82.2 24.2-.7-6.2-.7 6.2-2.7-2.1 2 2.7-6.1.7 6.2.7L78 29l2.8-2.1.7 6.1.7-6.1L85 29l-2.2-2.8 6.2-.7-6.1-.7 2-2.7-2.7 2.1z" fill="#fff"></path><path class="most-popular-text" d="M45 4v1a2 2 0 0 0 2 2h1-1a2 2 0 0 0-2 2v1-1a2 2 0 0 0-2-2h-1 1a2 2 0 0 0 2-2V4zm12 41v1a2 2 0 0 0 2 2h1-1a2 2 0 0 0-2 2v1-1a2 2 0 0 0-2-2h-1 1a2 2 0 0 0 2-2v-1zM13 22v3a4 4 0 0 0 4 4h3-3a4 4 0 0 0-4 4v3-3a4 4 0 0 0-4-4H6h3a4 4 0 0 0 4-4v-3zM67 4v3a4 4 0 0 0 4 4h3-3a4 4 0 0 0-4 4v3-3a4 4 0 0 0-4-4h-3 3a4 4 0 0 0 4-4V4z" fill="#fff"></path></svg>');
  function ad(n) {
    p(n, Yp());
  }
  Je(ad, {}, [], [], !0);
  const id = (n) => {
    const t = n.badgeStyle || "simple", r = n.badgeText || "", a = { type: "dealBar", dealBarId: n.id }, s = { id: `legacy-${n.id}`, attachedTo: a, text: r, colors: null };
    return t === "most-popular" ? { ...s, badgeType: "most-popular", size: 102 } : t === "custom" ? n.badgeImageGID ? { ...s, badgeType: "custom", imageGID: n.badgeImageGID, size: 56 } : null : r ? { ...s, badgeType: "simple", textSize: 12 } : null;
  }, ol = (n, t) => {
    if (n.blockLayout !== "vertical") return [];
    const r = cs(n);
    if (r.length > 0) return r.filter((s) => s.attachedTo.type === "dealBar" && s.attachedTo.dealBarId === t.id);
    if (n.badgesEnabled === !1) return [];
    const a = id(t);
    return a ? [a] : [];
  }, Kp = (n, t) => n.blockLayout !== "vertical" ? [] : cs(n).filter((r) => r.attachedTo.type === t), cs = (n) => n.badgesEnabled === !1 ? [] : n.badges || [], wa = (n, t, r) => ({ ...n, text: r(t(n.text)) }), Xp = (n) => {
    const t = n.filter((r) => r.badgeType === "border").map((r) => r.thickness);
    return t.length === 0 ? 22 : Math.max(...t);
  }, eb = (n) => {
    const t = n.filter((r) => r.badgeType === "border").filter((r) => r.position === "all").map((r) => {
      var a;
      return (a = r.gap) != null ? a : 0;
    });
    return t.length === 0 ? 0 : Math.max(...t);
  };
  let cl = null;
  const ld = (n, t) => typeof document == "undefined" ? 0 : (cl || (cl = document.createElement("canvas").getContext("2d")), cl ? (cl.font = `bold ${t}px sans-serif`, cl.measureText(n).width + 0.5 * n.length) : 0), tb = (n) => {
    const t = n.flatMap((r) => r.badgeType !== "border" || r.position !== "left" && r.position !== "right" ? [] : [ld(r.text, r.textSize) + 24]);
    return t.length === 0 ? 0 : Math.max(...t);
  }, Pa = (n) => ({ positions: new Set(n.flatMap((t) => t.badgeType === "border" ? [t.position] : [])), thickness: Xp(n), gap: eb(n), sideLength: tb(n) });
  var nb = An('<animate attributeName="startOffset" repeatCount="indefinite"></animate>'), rb = An("<textPath><!> </textPath>"), ab = An("<!><!>", 1), ib = An('<svg class="kaching-bundles__badge-border__curve"><path fill="none"></path><text text-anchor="middle"></text></svg>'), lb = $('<span class="kaching-bundles__badge-border__side kaching-bundles__badge-border__side--top"><!></span>'), sb = $('<div class="kaching-bundles__badge-border kaching-bundles__badge-border--all"><div class="kaching-bundles__badge-border__band"><span></span></div> <!></div>'), ob = $('<div><span class="kaching-bundles__badge-border__text"><!></span></div>');
  function sd(n, t) {
    const r = (function() {
      var M, P, R;
      if (bt && St && St.nodeType === 8 && ((M = St.textContent) != null && M.startsWith("$"))) {
        const Q = St.textContent.substring(1);
        return br(), Q;
      }
      return (R = (P = window.__svelte) != null ? P : window.__svelte = {}).uid != null || (R.uid = 1), "c" + window.__svelte.uid++;
    })();
    it(t, !0);
    const a = k(t, "badge", 7), s = typeof window != "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, o = d(() => Vu(a().colors)), c = d(() => {
      var M;
      return `--badge-border-thickness: ${a().thickness}px; --badge-text-size: ${a().textSize}px; --badge-ring-outer: ${a().thickness + ((M = a().gap) != null ? M : 0)}px;`;
    });
    let l = Ve(0), i = Ve(0);
    const u = d(() => a().position === "left" || a().position === "right"), h = d(() => {
      const M = Math.max(6, a().thickness - 6), P = e(u) ? e(i) : e(l), R = Math.max(1, a().text.trim().length), Q = P > 0 ? (P - 16) / (0.62 * R) : 1 / 0;
      return Math.max(6, Math.min(a().textSize, M, Q));
    }), f = d(() => `--badge-border-thickness: ${a().thickness}px; --badge-text-size: ${e(h)}px;`);
    let g = Ve(void 0), b = Ve(ct({ count: 0, slot: 0, pathLength: 0 })), v = Ve(void 0), w = Ve(0), m = Ve(0);
    const z = d(() => Math.max(6, Math.min(a().textSize, a().thickness - 6))), I = d(() => 0.32 * e(z)), V = d(() => 0.4 * e(z) + a().spacing), T = d(() => a().delimiter || ""), q = d(() => (ld(a().text.trim(), e(z)) || a().text.trim().length * e(z) * 0.7) + (e(T) ? e(z) : 0) + 2 * e(V));
    tt(() => {
      if (e(ee), e(q), !e(g)) return;
      const M = e(g).getTotalLength() / 2;
      if (M <= 0 || e(q) <= 0) return;
      const P = Math.max(1, Math.floor(M / e(q)));
      ae(b, { count: P, slot: M / P, pathLength: M }, !0);
    });
    const ee = d(() => {
      if (!e(v) || !e(w) || !e(m)) return "";
      const M = getComputedStyle(e(v)), P = parseFloat(M.getPropertyValue("--bar-border-radius")) || 8, R = parseFloat(M.getPropertyValue("--badge-border-gap")) || 0, Q = a().thickness / 2 + e(I), K = e(w) - Q, ce = e(m) - Q, F = Math.min(P + R + Q, Math.max(0, Math.min(K - Q, ce - Q) / 2)), G = ["H " + (K - F), `A ${F} ${F} 0 0 1 ${K} ${Q + F}`, "V " + (ce - F), `A ${F} ${F} 0 0 1 ${K - F} ${ce}`, `H ${Q + F}`, `A ${F} ${F} 0 0 1 ${Q} ${ce - F}`, `V ${Q + F}`, `A ${F} ${F} 0 0 1 ${Q + F} ${Q}`].join(" ");
      return `M ${Q + F} ${Q} ${G} ${G} Z`;
    }), H = `kaching-badge-ring-${r}`, D = d(() => a().repeatText && a().animated && a().spinSpeed > 0 && !s && e(b).pathLength > 0), ne = d(() => e(D) ? Math.max(2, e(b).pathLength / Math.max(1, a().spinSpeed)) : 0);
    var B = { get badge() {
      return a();
    }, set badge(M) {
      a(M), _();
    } }, N = ze(), se = fe(N), S = (M) => {
      var P = sb(), R = L(y(P), 2), Q = (ce) => {
        var F = ze();
        st(fe(F), () => e(ee), (G) => {
          var U = ze(), te = fe(U), E = (ie) => {
            var J = ib();
            {
              const W = (X, le = Br, A = Br) => {
                var re = rb(), ue = y(re), _e = (ke) => {
                  var pe = nb();
                  ve(() => {
                    var Ce;
                    Ie(pe, "from", a().spinDirection === "clockwise" ? le() : le() + e(b).pathLength), Ie(pe, "to", a().spinDirection === "clockwise" ? le() + e(b).pathLength : le()), Ie(pe, "dur", `${(Ce = e(ne)) != null ? Ce : ""}s`);
                  }), p(ke, pe);
                };
                O(ue, (ke) => {
                  e(D) && ke(_e);
                });
                var ge = L(ue, 1, !0);
                x(re), ve(() => {
                  Ie(re, "href", `#${H}`), Ie(re, "startOffset", le()), ft(ge, A());
                }), p(X, re);
              };
              var C = y(J);
              ki(C, (X) => ae(g, X), () => e(g));
              var j = L(C);
              Vt(j, 21, () => ({ length: e(b).count }), Vr, (X, le, A) => {
                var re = ab(), ue = fe(re);
                W(ue, () => A * e(b).slot + e(b).slot / 2, () => a().text);
                var _e = L(ue), ge = (ke) => {
                  W(ke, () => A * e(b).slot + e(b).slot, () => e(T));
                };
                O(_e, (ke) => {
                  e(T) && ke(ge);
                }), p(X, re);
              }), x(j), x(J), ve(() => {
                Ie(C, "id", H), Ie(C, "d", e(ee));
              });
            }
            ve(() => {
              var W, X;
              return Ie(J, "viewBox", `0 0 ${(W = e(w)) != null ? W : ""} ${(X = e(m)) != null ? X : ""}`);
            }), p(ie, J);
          };
          O(te, (ie) => {
            e(ee) && ie(E);
          }), p(G, U);
        }), p(ce, F);
      }, K = (ce) => {
        var F = lb();
        Ge(y(F), () => a().text), x(F), p(ce, F);
      };
      O(R, (ce) => {
        a().repeatText && a().text.trim() ? ce(Q) : ce(K, !1);
      }), x(P), ki(P, (ce) => ae(v, ce), () => e(v)), ve(() => {
        var ce, F;
        return Gt(P, `${(ce = e(o)) != null ? ce : ""} ${(F = e(c)) != null ? F : ""}`);
      }), Ul(P, "clientWidth", (ce) => ae(w, ce)), Ul(P, "clientHeight", (ce) => ae(m, ce)), p(M, P);
    }, Z = (M) => {
      var P = ob(), R = y(P);
      Ge(y(R), () => a().text), x(R), x(P), ve(() => {
        var Q, K, ce;
        Et(P, 1, `kaching-bundles__badge-border kaching-bundles__badge-border--${(Q = a().position) != null ? Q : ""}`), Gt(P, `${(K = e(o)) != null ? K : ""} ${(ce = e(f)) != null ? ce : ""}`);
      }), Ul(P, "clientWidth", (Q) => ae(l, Q)), Ul(P, "clientHeight", (Q) => ae(i, Q)), p(M, P);
    };
    return O(se, (M) => {
      a().position === "all" ? M(S) : M(Z, !1);
    }), p(n, N), lt(B);
  }
  Je(sd, { badge: {} }, [], [], !0);
  var cb = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--custom"><img class="kaching-bundles__bar-most-popular__custom-image"/></div>'), ub = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--fancy"><!></div>'), db = $('<div class="kaching-bundles__bar-most-popular__content"><!></div>'), gb = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--simple"><!></div>');
  function oa(n, t) {
    it(t, !0);
    const [r, a] = vt(), s = k(t, "badge", 7), o = k(t, "blockLayout", 7), c = En(), l = d(() => s().badgeType === "custom" ? $e(c, "$getMediaImageUrl", r)(s().imageGID) : void 0), i = d(() => o() === "vertical"), u = d(() => {
      switch (s().badgeType) {
        case "most-popular":
        case "border":
          return !0;
        case "simple":
          return !!s().text;
        case "custom":
          return !!e(l);
      }
    }), h = d(() => e(i) && e(u)), f = d(() => Vu(s().colors)), g = d(() => s().badgeType === "simple" ? `--badge-text-size: ${s().textSize}px;` : ""), b = d(() => s().badgeType === "most-popular" || s().badgeType === "custom" ? `--badge-size: ${s().size}px;` : "");
    var v = { get badge() {
      return s();
    }, set badge(V) {
      s(V), _();
    }, get blockLayout() {
      return o();
    }, set blockLayout(V) {
      o(V), _();
    } }, w = ze(), m = fe(w), z = (V) => {
      var T = ze(), q = fe(T), ee = (D) => {
        sd(D, { get badge() {
          return s();
        } });
      }, H = (D) => {
        var ne = ze(), B = fe(ne), N = (S) => {
          var Z = cb(), M = y(Z);
          x(Z), ve(() => {
            Gt(Z, e(b)), Ie(M, "alt", s().text || "Badge"), Ie(M, "src", e(l));
          }), p(S, Z);
        }, se = (S) => {
          var Z = ze(), M = fe(Z), P = (Q) => {
            var K = ub();
            ad(y(K)), x(K), ve(() => {
              var ce, F;
              return Gt(K, `${(ce = e(f)) != null ? ce : ""} ${(F = e(b)) != null ? F : ""}`);
            }), p(Q, K);
          }, R = (Q) => {
            var K = gb();
            st(y(K), () => s().text, (ce) => {
              var F = db();
              Ge(y(F), () => s().text), x(F), p(ce, F);
            }), x(K), ve(() => {
              var ce, F;
              return Gt(K, `${(ce = e(f)) != null ? ce : ""} ${(F = e(g)) != null ? F : ""}`);
            }), p(Q, K);
          };
          O(M, (Q) => {
            s().badgeType === "most-popular" ? Q(P) : Q(R, !1);
          }, !0), p(S, Z);
        };
        O(B, (S) => {
          s().badgeType === "custom" && e(l) ? S(N) : S(se, !1);
        }, !0), p(D, ne);
      };
      O(q, (D) => {
        s().badgeType === "border" ? D(ee) : D(H, !1);
      }), p(V, T);
    };
    O(m, (V) => {
      e(h) && V(z);
    }), p(n, w);
    var I = lt(v);
    return a(), I;
  }
  function Ja(n, t) {
    it(t, !0);
    let r = k(t, "element", 7, "label"), a = k(t, "for", 7, void 0), s = k(t, "soldOut", 7, !1), o = k(t, "borderHost", 7), c = k(t, "children", 7);
    var l = { get element() {
      return r();
    }, set element(u = "label") {
      r(u), _();
    }, get for() {
      return a();
    }, set for(u = void 0) {
      a(u), _();
    }, get soldOut() {
      return s();
    }, set soldOut(u = !1) {
      s(u), _();
    }, get borderHost() {
      return o();
    }, set borderHost(u) {
      o(u), _();
    }, get children() {
      return c();
    }, set children(u) {
      c(u), _();
    } }, i = ze();
    return Yc(fe(i), r, 0, (u, h) => {
      au(u, (g, b) => ({ for: a(), class: "kaching-bundles__bar-container", style: "", [vi]: g, [_i]: b }), [() => ({ "kaching-bundles__bar-container--sold-out": s(), "kaching-bundles__bar-container--badge-border-all": o().positions.has("all"), "kaching-bundles__bar-container--badge-border-top": o().positions.has("top"), "kaching-bundles__bar-container--badge-border-bottom": o().positions.has("bottom"), "kaching-bundles__bar-container--badge-border-left": o().positions.has("left"), "kaching-bundles__bar-container--badge-border-right": o().positions.has("right") }), () => {
        var g, b;
        return { "--badge-border-thickness": `${(g = o().thickness) != null ? g : ""}px`, "--badge-border-gap": `${(b = o().gap) != null ? b : ""}px`, "--badge-border-gap-border": o().gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": o().sideLength ? `${o().sideLength}px` : void 0 };
      }]);
      var f = ze();
      Ql(fe(f), c), p(h, f);
    }), p(n, i), lt(l);
  }
  function ul(n, t, r) {
    return n + t.reduce((a, s) => s.includeInCompareAt ? a + s.fullPrice : a, 0) + r.reduce((a, s) => s.includeInCompareAt ? a + s.fullPrice * s.quantity : a, 0);
  }
  function fo(n, t, r) {
    return n ? t : r;
  }
  Je(oa, { badge: {}, blockLayout: {} }, [], [], !0), Je(Ja, { element: {}, for: {}, soldOut: {}, borderHost: {}, children: {} }, [], [], !0);
  const dl = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3e%3crect%20width='100'%20height='100'%20fill='transparent'%20/%3e%3c/svg%3e", vo = ({ dealBlock: n, imageSize: t }) => {
    const { fonts: r, colors: a, cornerRadius: s } = n;
    return pn({ "kaching-free-gift-background-color": a.freeGiftBackground && Ne(a.freeGiftBackground), "kaching-free-gift-text-color": a.freeGiftText && Ne(a.freeGiftText), "kaching-free-gift-selected-background-color": a.freeGiftSelectedBackground && Ne(a.freeGiftSelectedBackground), "kaching-free-gift-selected-text-color": a.freeGiftSelectedText && Ne(a.freeGiftSelectedText), "kaching-free-gift-font-size": r.freeGift && r.freeGift.size + "px", "kaching-free-gift-font-weight": r.freeGift && cr(r.freeGift.style), "kaching-free-gift-font-style": r.freeGift && ur(r.freeGift.style), "kaching-free-gift-image-border-radius": (s || 0) / 2 + "px", "kaching-free-gift-image-height": t + "px" });
  }, _o = "data:image/webp;base64,UklGRoQYAABXRUJQVlA4WAoAAAAQAAAAVwEANAEAQUxQSPkFAAABBj/OtslttP9f5fcCagm1hVpF7YEJox4UKGYkeAMMGPfwDLTDZ1D2vIMIqAcB7VRSYECAAaEnwXBEmSwGHlrieL+jrjsiJgAn/5/8f/L/yf8n/w9iMzrDs9DBioEmgInM6NV1BfjS38jnJRbyl/z0anTfwYrRQgD4xYxeVQf15f0b+QwssfjtlYg8ExEHawBoId4gM3pV1dOX8AAqAJ+xRAb89pOcARg5wIrRQmAEM3p1XTXeAzefsVzIX/KTvBoBcIA10ELAMDOj366r1vXl/RuRz1gust9eicgzEXGwBtBCGD7m2avrqv19CcADFT4DS2T4TeQMeCbiYMVAC2FQkHn203XVyb563H8Glgv5S34SORsBcLBioAlAXyMz+q3qm+X9G5HPy4X89dsrkdEziIMVo0WE0IfIPHt1XfXc8mGP6jOwzH4TkTMAz0ScFTG9hORZdl31bo/Ko3rwM4DlT7Z30Cj7XA1D1zPot2o42l5BZ9WA/KlX2JshsdB9YlQOieW/woitwFY0TAjGOgRPdPd1x2BQlEurHcIoeSdS3S8gkMc/uW6hYVG9+wJUB/dr3SkYGEfeB1zlI7Y5undMVVwotvFHuk3cfSsGWoTuMxF2hQgArO5nAFIksUho+KOJvvLAZkz89KDfXxBPAfsJV2FvuAoXbLU2XIULzVW4NFyFc7bKHVdBiKvygKtwSVyVB1wF0W3iWCEft8mIFXCpW8TxQj5ukREvAKY9HDPk5y1ywwvILVfhnK1yx1bnxFTIHVfhnLgqD7gKl5qr8oCrcKm5Kp9wFXLDVZiwVW7ZatI8yxTIXeMcW6SNs1yB3HEVzomr8glX4ZK4Kh9zFS51sz4zRj7mKuSGqzBhK5gGGd7IJw2yvIFcmmOYA+dslVuuwuT/DpgRVyFgK6GmLNnDB1yFOTVDM4gPmmEYBHNqhOYQBGw1I67yAVdhRlzlHVdhTlyFoAELJpkRV3nHVmOuwpy4aq3rRnxi/mfOX/+rBa8YShsrIvxkL+ayB1Bxk5N9te+Ocgggc/UwUlade7fveX7vahFUHS37XuNxHPiUaiEddX/fXwC/PwrmfQeQ/gL4fgdIf4FHv+vp7OMPt+Ye+IPN2efwa80+nq0O/t8VHFsFPEN1cBzjJ4qB/EE+GX7araeJjLXioAeL3WqWxlHgrBZSdeWPTRqFzhqCqjt7+Ilq6r/vjP/tyjZGhtaVZClqtTaNodndsCnkkassTaLQWUNKv6vThWquWVflQClkt1pMkyiIEDhrNKlHKa7Rftwg6OSuHBjFbiVZEofOGk1QhwzrZJsEuFlV9r/i3ipDmkShs5rUUeVdbfwFNQsUbe76WyGyw9UUSRQ4azSpWka12Qeq8Ta962HFDqssjSV01mhStZZ3dZnr5oHGm7JH3V5lSKPQWaNJNTOsiR+rVjRJiV5TiOBWFtNEIgerSTWb4nrMqR0AN7vrJ4XsbldZLFHgjBZS7Sjv6rB3qjV1dFf2i1tZZWkSwllNUC0r747nJ6pN7awqu68Abq8W0yQKnDWaFEi1ssTH8hfUKqBgXXbdpyh01mhS7e/eHWemVdvai7su2i7eASh2K0mM6k7t4sWBygozo1o4WHdN7GC1IJHQGa06lmwYv/uhsgJSrVpZkrJTNkZ1vLZh/G57+wRgFajWdvNyQN0nG8bZpqgAwSzSqsUpKrvjk/SB+2TD8QShJdXyJu2MGfWF7qRgXXbDRA1vnZZd4MMBBrh1F9hBBh0dbSu3QCGyQ2M+6WEG2OmBtrKYJnHorAkTiQEri4b4RA12CrZPk8U0iQIHo0n9YNQQuOEGmHh7K1cyjSV01mhSB7bbZmQ05EDWQTRBHTlpxlgxqN02YaM5BHETJopF9aJ+K80jsNu6+UBxaVi3lNgE43ptjGLUoFZOsapd1GesmFXH25pEil9tXItIsaybHq0YK6YltzhKsQkU3+rw6nBFahTr6ujqMMVqTIp7TXT1Y8Uq0oqDTZTtnrLbTENRXCw2SJHdTyfOKGYmLUZInfx/8v/J/yf/n/xfUwBWUDggZBIAABBuAJ0BKlgBNQE+kUSdS6WjoyKjsKo4sBIJY27PfD3SSyKUjHn6I/9g+wnp1XR9XeHo4f/o+c8+z/svWv5h/PG/dj1H/tl6znpI/wG+5eif50XrR/4/0x7lbtfWHf5TxH7Mfb7NRhu8olZENf8uT5T92PZPIW8X7T682rzd4lnfXm1ebvEs7682rzd4lnfXm1ebvEs7682cCffkKj/0t06JEArP+RShHR4v2n15tXgarCFNF1ibE7/5+j/5Eo0NQ71kF8hWki+N0nFn4jermljPNs27mUeI5uTXaZCzZcqM9AZ31VHNeqhmXSx23Z8dlZD8ZLgOnx2CihtqzmhwsRfw/eimox4+fV6eEJSdr6tkyKOTLOnvmStQTaPNLcVmD06I09Zy8EdqnfHY/1ThdMVchaQQV9Czk/i57RyGMsSMid4Y5ZOoPpStMmO8jZqSCSIW4/wUhOsJe0AZ6WDNd9x5zXViysoni6q6+atjpl5A4ZI62UyqCiLbYjoKnTB7xff5zuxt3G0QiDSsrujnM51e8UgSobndmKsG7c87GZH5co4+UWdNOodvlgpKvlr7hqlF1cRHNor9k7pt9pIiAEYeVwoSNvwFplyxFu65+r+nXIwUbLR8xF9LPeZ2oTVkeqIkflO/9CzgZ7RhB6LLduY5ORVBLovgTZu3/QSKkDFShUs2FVKnB9lmICdwUzmUNmRSe0Ga6FsxyfdT/gQrVJY2mpe+QnRjhSbGOZcUpMsoVwsFkw3byx7SAunIxFL1TxePhC6fUfxCcdqHww8KiOjXdEXZJcLI7GUTe0nviV7Z/qFPWXNlIDS/JIszeV7nM8HpdPmdLEDK+MYaGUEL/wZsFblu2q1mU0SC8gaf+iYsqqUR2ld74gez3le4VQSRtOB9B/YLTsZfqcOjzW3/m6EHXNHKBFFsVFTpZmn4qMgVjJwf9P8cnItR6Fq7fOAslEO4e30AHZzsht3FP8GTJU1rAoYDv8k41Bg3f/c3i4TQIPpSjW5RcJV8JNBN1eawaXo9ZbN31YZSVQw8Ops/2bVbq9/s1Q1s9PunHUU+2ut0DDvCY/6iQ+2YthZQQ1GyDGUCpfQ3eJaANqy/p8rAbnON/3LplJEi/afXm1ebqaKUavN3iWd9ebV5u8SzvrzavN3iWd9ebV5u8SzvrzavN3iWd9ebV5u8LgAA/vvbO+3sHnP/IdkpDnbh3TvfXYAB5WzWlLuMAAKgIwAABAsU14K4XnDjt+rrb+D2R0m2FHkZuG6rmV+6YFzI/Ls2EEst1oHCIDkSkVmJwdSN9EIhanLXNhfekK1Iqx1IvcdGU5Q6TPJ89BkFWsH4P6w+AEaw8K0furvg3C+MmCPSi39Pk9u+gxEye7RHQx3e7sJBZSlSVpmGjma6gAJaYWfuB78fJroBwKlaJ0mMNd4azeh/Wa3EotpAl4KB176JCBofnI39MAuoo85WpbZ9xjxDQYsob4zBW0Iz7pbo/HiIkhee6DRpkJIr6wM5Ky5hmYHwSSvj+7kH1iIOCj6tAbabEAQCNQeVRTORaxyDAr7/GtCLaDWcs/7oXWIweUfirzVQ7ThYMPR9h8IVWCJYs5dn/dfu56GMoeSVL3vuDT8eOkQLrvbk7h5UKTxL57kgt6N+KFtV/n39fyoZGVhshZgWcPcsGXFGajPTSTOUlsZ/vewlCzkR+ALaPvm4/+MGM7HT0B28wt+z1iFe68rT2C3wDvd2pkd4kwT1ZXXhgCaP8IHGlcRLWtK0/KEVZ1ugqmbOqoEiTwSRYuEmJ28JT53qpD9rvw4bWSCRVmp6vS1i+OAvuw7ChW+RkrYvU/D24QzjPCHYio+CkhfgXvVO46aZf7HZ/APLJHJJzVT1j4OLgCKZ/+Ak1e0EKDPh4rTJsaT3s8WtTy5XH+4Ar6xg6I3WtxR+uRF26LUw4qh9rDq9Tp7vxD5TzVPNkmLExWNGgR6eVQ2GooMqhjhD639FbbGvPBA3ybzgr7n5Ci9s6Wz++LCWHCwK1Z6DT19WpGRfIsCWCkYCRTKxUtMZSIT8ucXjOXLVCOftRCEKFT4b6uZ65Ag8l6ZwGA9vBgVH4yjz3rhaTMXAVN8ZtMN+Peal4ByXEaarmBZHcjINdGAHfq/Oon/WJPDl1La0sZ/z7NnwnicGzYjOu/+E9PY1uiQDBcmka2MieoJp36IbjfvQLURbGUMf1OX6zyYoVSC8wZfYlktDUkqM9WhYE1c4nOaHYtnrCuOiEPng8J2pRFr5NeR4lIsiH6Z4wQDzOZbpOftV8uUhurbz6TTohG7rdsM3Jkpsl7NlcnTwTwO/wnsAVgCAexRRUegE8kK7ZBn9DYsKHGisummSWwi9LxZqPCQbjrkXNuWFu1L7NvVwRU/SFadxboS/0qrszn85S44QntIQB/YirAkqb9zp8cndyKm1JSLqd+B0ytCADHpsJ5tIRIRlqWiK5Z3mRpnoZ41mgopa3mx70p3vl/4dB9U/HbNxwGMVZwzqOJ1gtobOcYv4N4GE/9/PioYppduKcYUonHSe4/3qQSrq/d8AMj5fRlAEPwNdWGsNJAtAr1IMC662V61JfHP8ENdFsTmbbcZ6QaXRBgGH3IZfWJHt4aQK/pLXOPF01GqrLm+KfuiYRg9SdihgVqnSnWiOz5QJcoQdFYrwvdJTA3IDamLNiUdka/z2iBOCQPtqrUEsiyPhVyMRGkBWUEXUS8aojpuiFrHqEeODgQNvYmA4SrXVoiOOIDOC57cNsP1/N9GN0jE8bIPAwth4nEv26clftxesbpcO5CbbOPhk+4teaVMLwqEMkQ9YcYDhAn1UQm/P3PukbCh6OquvhSA8q9YvD80J2p4qMfqHujubJy+pt0+o+mrxgsrcdHWv4sSkPBRdjMUrDPZLvblU1bnNHivzRvFcaJLGb6GIGfB6O/ZKp1jWBT6xmKAeZWVJ8oOesDrGaYK0ecPFQz1Kuy5kORX5BCtS2qmcP0EA33Ytva164kYbJLPQqbkznx1MLByN1pC1Ik6afVhXF4Md0RY17gT2UjnSVYPmF/zPGsMRWvrtiSQRKgwUoxqgtEcfS49Laz2JMIExQJFfV3WrYgNICYlRLAYmV9ubjRL8xrrPJOxg49X/PpZMbndQYIsESJm+IzeXnBMrbIsdeaxHjknEDGyHgeDWKezmv60AaqcaQzwPQfmnJvj9esFQK1oEZOAhVQaNG82I3acJJ+sM/lNmSPy/iKzYyMHrpWAtqMiD/VbxffYGWdktLKJ6DnzcchVzvgkPeJ/AEYySCs/AJwxoZMCEcYNAyPbSOeIhrSZ7oiwkixKsfLQ+uMIecj3dpwHtZBxKdw3H1agydVHgrcDu2Q1YIvCW0l+YCBgLgVvKCQiJZrmECgugPITyU+7JPijpmGi92sUJDZaFi8AXbjw0XOTvpGBzk6SOQWbZRs0FTUb1nAizq0zZPFxm8JaADC02BSHVQUCf4x6YZrJ5DIRFyxt9Jv0pVBaCRRKAOO3/X/UVpzCGUfhHdRWh93s5eWczTMyYN1GHakkA3lEvMckdz9VSeaYVHWgbgR/SsKqHaFBCMqYnbGNHYulIdrf/P7sy9/cTd8B+MlqRCwfCgJvjATta1MfBNGzKLERRjPb2v9em/Re5JPZCtt6Yyn8Vql2CdRL+7z8oYczxwxTA3/QfjLD78pZ6RpVkzBIHLkMQf93Il10CGh5IawlF+d1dkgebUndWPL12ydwc0PVR3b0c0e8OlgN2vakaDpQEKqKPiIukcoIpAlgclG5W5zjdiPbIbF0uWeULQsvMvI9c5T6P9sRjv+FZz51d19aWCdbLU/fCFJ53MbT0+42wMhRj23n/iD+LlPYOSgdtfo9WiiRfl2Mt//MJzOsz8sFwteelxQEjbCqNE0JmRx+KBefHBDl8C78WHTaIIzN5gmbehbTat1ShJBF5hxBrYRIh2z4mEop3uaCco1qsvq44TnxUsBnbY1n8ApxtHL+I927cLgdz4OLFqdmFjrJQrQi6drim9ZhKNKblZRY6Nm6Xxw8AG31CjKw5Usm7EwX3dSh1ZsqmnI5qEjffuCX44g/SOzQqJVR7Fdb8JeHLF12m738y3FF8Mzs16Oc/2LwNUHONGYkVtr+DKAaGl5Hj/eNrGgDwmZkDKFiMx6NDt1/fJ5DJujHYvfqnc306fF1hqAKGhRaX6mkQAFTvdvjKAE6D2qcOgzuA8OW9wA45u64gX+kFxY0AS6eqgGGChj5Z/p1Hbf5M9a/gKoaZ7B+Tcnn9Qe9zU00N7zH8lyWGJ2TkauTtQK1NiJyMXrdamQmMdapyOTWCQuByf81ArLtC/bleHgTwNM7WM3WcgxuY0K+tM/GlMB3o4c6KXobq+gT4beks4Z0bY30MI8bvJO+Oxwdaw3i25dbrmfZF24MJSjUBqBgpoCPEKbOE1B0kKa0DivLYosxKI+LGXKRTQfmdgrSTks4ug6urIa/bOM7wPLDJGRj0VqBthQyVN68yQX1AJQMB25WapBsPo/4lBu682ATODwomExed5azFmo1uS1oR8yjjVguvGk0aXC8rbqCnjsujXvMr17GDqUjHgKsOJdqUSlNjxu2YRrqyCQqeDKyGUDulKhhtJLO/4E34Re0lA8JnM1OWPAEB4UWa3wXhCn7tYRx/NdlCvHEXRgHuU1x9vbx8wJIw9x9YMaMqgUz6XhCa9CHfb8w6Zw2YtPEVQ9evaBn1Z9D6FOmIHGya7+VzN5NHL4+s6mM/hIagdT2DfDbr34+S/pRYO0OTY2kNLBk7H0A60bCCr+dUfc3D4aiAWmcyJy06sV91x0NyHNPAl1cPP9yMhUpsXuSRb8G+rZqQPmfsDeGv8OazizGLy6WH/kvfkOHUSaX/OhgunoJ9VeEOXibNKy82aKQbeO0Ha7UVsW4XgQgLdDlwVIalDeTNcwE6nmQ9txE1hmG+EiJvFI4qtHDI9DsVu9oD7B+cGL3mjjXVHfSwugESEFWLTK5H6wNsIpftM4OHEYWyaeUeZ7JJE1eDJQ9Zf+5vZtZh3myMRpA2qFbL0Z1XGffNF+rkMit+fjRpAjeYiJtbPXt1caN1R1abhCgztNuwREE8wupCjEm+NE+bKPiOqlykwKJ3P/3sgKhNseT14hUvrpWzccNtRuPDNOunCTAmbmLE7WagpIdGYD1/+3+5jJokGgYMTKPDtGcyL2UcCJbWhsr29Eb7GipPp2p1cQ+vehDwOEv3Zy1JrpGaND/5dRLHQTBHj6cgEpGQusdOTAdDDuz3bIG0bjvrZlGPLGuLFq+K3yADMtsjQQcuZzrWixor2wnfJtn15LHqkqakk4OIH4/MIXBGBWj9Ew3Y10HyG9ozFVfGMMh335PDmgh/DSu4AxehAoAqANVIJksDFYdub1wWo8yYh9Bj1+NUJynOVXk1qJZ8+B0QUVbJwcTOnM/fCsUt191Vky7IpF3Ar+L7eVM3PjlEJmI9gteoSeJw1gQCSMn/vaR0rn0ffVV6ozTkXntDBDGW52GLCy/g/BPvfHCJ+mj59BncgboXK3Fld7/4HRTyIAexwL2dRVvPHlg99XnjymrE4zUzJo+KycEBb83WPH/fOR5kEC3NqBEAmTeVYw8LJ+ocQMM2lE8kDjcyA12K+DfSgIhetLBZ/x7e4hD9A4gQgdFg8Ooa3bg/sPXFSwRjyiDQM/CZXMUaKtADyJ4CAx3/pYYzgOk2cLMZz5FMWFjbA/Q1LtDuQH7DkigDvOhb4Fmu7+H2b5J+4EKM8Yq+n06V/1tcpC4eeFk9xnMQluO1WqGwpuaoJCMP6qbU+yD7yNgJf9w5qrzxpGutPV9IhfsC4fqgGPBE3L7RVEgzeANeYJVlr36U8sZvtXG4PB4Hja+RPLUAO+eRxzRZy42p9LU83OprZBeO7230dieMH5Zoi0kR9fsCoTSMaa2nRhSiCb2tdJ4Z1lzYagv4odW8u2KOdSTmmMx6fuTxSqnpbix/IM1tyQ87iEvmLgKbKxxoq7jMWMGVKnT3/sYDe1Gh7sGkfO8X+SU8A6uPjQ5O60Qodizt/a/N+H663+1H+KNqX9JG3V8a4DIr7ksqFOrG4vcwrmMfGNKzZEqY3YdfhK186TnkB4qAAAAAAAAUL6grl/NBh0xCf2j3r4dOzXRh7I2aCCSe5vWpAob7xObCtSNwZb2vrH2mGahZz5v19m0OpjZMD/eZuwAQT9lzRvhNLg3peoff6JaWOXAZuxTigRvsWkffJzmaqRu1XRn2I5Q8LDKQ102v7qO1JV8AAAAAAAAAAAAAAAAAAAA=", od = ({ freeGift: n, product: t, variantImage: r, getMediaImageUrl: a }) => n.mediaImageGID ? a(n.mediaImageGID) : n.giftType === "shipping" ? _o : r || (t == null ? void 0 : t.image), ko = (n, t, r) => {
    var a, s;
    const o = (s = (a = t.variantGIDs) == null ? void 0 : a.map(Nt)) != null ? s : null;
    return n.variants.filter((c) => (r || c.availableForSale) && (!o || o.includes(c.id)));
  };
  var hb = $('<img alt="" class="kaching-bundles__free-gift__image"/>'), pb = $('<div class="kaching-bundles__free-gift__image"></div>'), bb = $('<span class="kaching-bundles__free-gift__text"><!></span>'), fb = $('<div class="kaching-bundles__free-gift__full-price"><!></div>'), vb = $('<div><div class="kaching-bundles__free-gift__main"><!> <div class="kaching-bundles__free-gift__content"><!> <!></div></div> <!></div>');
  function cd(n, t) {
    it(t, !0);
    const r = () => $e(v, "$config", s), a = () => $e(m, "$formatPrice", s), [s, o] = vt();
    let c = k(t, "dealBlock", 7), l = k(t, "freeGift", 7), i = k(t, "product", 7), u = k(t, "dealBarSelected", 7, !1), h = k(t, "collapsed", 7, !1), f = k(t, "sets", 7), g = k(t, "mainProductVariantId", 7), b = k(t, "onChange", 7);
    const v = vn(), w = Mt(), m = gn(), z = En(), I = d(() => {
      if (i()) return { ...i(), variants: ko(i(), l(), r().preview) };
    });
    let V = Ve(void 0);
    const T = d(() => (function(F, G) {
      if (F !== void 0) return F;
      if (G != null && G.availableForSale && G.variants.length > 0) return G.variants[0].id;
    })(e(V), e(I))), q = d(() => e(I) && e(T) ? e(I).variants.find((F) => F.id === e(T)) : void 0), ee = d(() => {
      var F;
      return od({ freeGift: l(), product: i(), variantImage: (F = e(q)) == null ? void 0 : F.image, getMediaImageUrl: $e(z, "$getMediaImageUrl", s) });
    }), H = d(() => l().quantity * f()), D = d(() => (function(F, G) {
      if (!G) return 0;
      let U = G.price;
      return G.compareAtPrice && F.useProductCompareAtPrice && (U = Math.max(U, G.compareAtPrice)), U * e(H);
    })(c(), e(q))), ne = d(() => vo({ dealBlock: c(), imageSize: l().imageSize })), B = d(() => hn({ priceFormatter: a(), product: i(), totalFullPrice: e(D), totalDiscountedPrice: 0, quantity: e(H), unitQuantity: e(q) ? xr([{ variant: e(q), quantity: e(H) }]) : null })), N = d(() => l() ? e(B)($e(w, "$translate", s)(l().text)) : ""), se = d(() => {
      var F;
      if ((F = i()) != null && F.url) return e(T) ? `${i().url}?variant=${e(T)}` : i().url;
    });
    function S(F) {
      ae(V, F, !0);
    }
    let Z;
    fr(() => {
      l().productGID, ae(V, void 0), Z = void 0;
    }), fr(() => {
      if (c().disableVariantOptionSync || !g() || !e(I) || g() === Z) return;
      const F = Z;
      Z = g(), e(I).variants.some((G) => G.id === g()) && (e(V) !== void 0 && e(V) !== F || ae(V, g(), !0));
    }), tt(() => {
      var F;
      e(q) && ((F = i()) != null && F.availableForSale) && e(H) && Jt(() => {
        b()({ variant: e(q), product: i(), fullPrice: e(D) });
      });
    });
    const M = d(() => !(!i() || i().availableForSale && ko(i(), l(), !1).length !== 0));
    var P = { get dealBlock() {
      return c();
    }, set dealBlock(F) {
      c(F), _();
    }, get freeGift() {
      return l();
    }, set freeGift(F) {
      l(F), _();
    }, get product() {
      return i();
    }, set product(F) {
      i(F), _();
    }, get dealBarSelected() {
      return u();
    }, set dealBarSelected(F = !1) {
      u(F), _();
    }, get collapsed() {
      return h();
    }, set collapsed(F = !1) {
      h(F), _();
    }, get sets() {
      return f();
    }, set sets(F) {
      f(F), _();
    }, get mainProductVariantId() {
      return g();
    }, set mainProductVariantId(F) {
      g(F), _();
    }, get onChange() {
      return b();
    }, set onChange(F) {
      b(F), _();
    } }, R = ze(), Q = fe(R), K = (F) => {
      var G = vb();
      let U;
      var te = y(G), E = y(te);
      {
        let A = d(() => u() ? e(se) : void 0);
        er(E, { get url() {
          return e(A);
        }, class: "kaching-bundles__free-gift__link", children: (re, ue) => {
          var _e = ze(), ge = fe(_e), ke = (Ce) => {
            var oe = hb();
            ve(() => {
              Ie(oe, "src", e(ee)), Ie(oe, "height", l().imageSize || 0);
            }), p(Ce, oe);
          }, pe = (Ce) => {
            var oe = pb();
            let xe;
            ve((Fe) => xe = Gt(oe, "", xe, Fe), [() => {
              var Fe, Ae;
              return { height: `${(Fe = l().imageSize || 0) != null ? Fe : ""}px`, width: `${(Ae = (i() || l().mediaImageGID) && l().imageSize || 0) != null ? Ae : ""}px` };
            }]), p(Ce, oe);
          };
          O(ge, (Ce) => {
            e(ee) ? Ce(ke) : Ce(pe, !1);
          }), p(re, _e);
        }, $$slots: { default: !0 } });
      }
      var ie = L(E, 2), J = y(ie), C = (A) => {
        var re = ze();
        st(fe(re), () => e(N), (ue) => {
          var _e = bb();
          Ge(y(_e), () => e(N)), x(_e), p(ue, _e);
        }), p(A, re);
      };
      O(J, (A) => {
        e(N) && A(C);
      });
      var j = L(J, 2), W = (A) => {
        Jn(A, { get product() {
          return e(I);
        }, get selectedVariantId() {
          return e(T);
        }, onChange: S });
      };
      O(j, (A) => {
        u() && e(I) && e(I).variants.length > 1 && e(T) && A(W);
      }), x(ie), x(te);
      var X = L(te, 2), le = (A) => {
        var re = ze();
        st(fe(re), () => e(D), (ue) => {
          var _e = fb();
          Ge(y(_e), () => a()(e(D))), x(_e), p(ue, _e);
        }), p(A, re);
      };
      O(X, (A) => {
        l().showPrice && e(D) > 0 && A(le);
      }), x(G), ve((A) => {
        U = Et(G, 1, "kaching-bundles__free-gift", null, U, A), Ie(G, "data-free-gift-id", l().id), Gt(G, e(ne));
      }, [() => ({ "kaching-bundles__free-gift--out-of-stock": r().preview && e(M) })]), p(F, G);
    };
    O(Q, (F) => {
      !h() && (!l().productGID || e(q) || r().preview && e(M)) && F(K);
    }), p(n, R);
    var ce = lt(P);
    return o(), ce;
  }
  Je(cd, { dealBlock: {}, freeGift: {}, product: {}, dealBarSelected: {}, collapsed: {}, sets: {}, mainProductVariantId: {}, onChange: {} }, [], [], !0);
  var _b = $('<img alt=""/>'), kb = $('<div class="kaching-bundles__free-gift-summary__images"></div>'), mb = $('<span class="kaching-bundles__free-gift__text"><!></span>'), xb = $('<div class="kaching-bundles__free-gift kaching-bundles__free-gift-summary"><!> <!></div>');
  function ud(n, t) {
    it(t, !0);
    const [r, a] = vt();
    let s = k(t, "dealBlock", 7), o = k(t, "images", 7), c = k(t, "count", 7), l = k(t, "title", 7), i = k(t, "imageSize", 7);
    const u = Mt(), h = gn(), f = d(() => hn({ priceFormatter: $e(h, "$formatPrice", r), product: void 0, totalFullPrice: 0, totalDiscountedPrice: 0, quantity: 1, unitQuantity: null, freeGiftsCount: c() })($e(u, "$translate", r)(l()))), g = d(() => vo({ dealBlock: s(), imageSize: i() }));
    var b = { get dealBlock() {
      return s();
    }, set dealBlock(T) {
      s(T), _();
    }, get images() {
      return o();
    }, set images(T) {
      o(T), _();
    }, get count() {
      return c();
    }, set count(T) {
      c(T), _();
    }, get title() {
      return l();
    }, set title(T) {
      l(T), _();
    }, get imageSize() {
      return i();
    }, set imageSize(T) {
      i(T), _();
    } }, v = xb(), w = y(v), m = (T) => {
      var q = kb();
      Vt(q, 21, o, Vr, (ee, H) => {
        var D = _b();
        let ne;
        ve((B) => {
          Ie(D, "src", e(H).source), Ie(D, "height", i() || 0), ne = Et(D, 1, "kaching-bundles__free-gift-summary__image", null, ne, B);
        }, [() => ({ "kaching-bundles__free-gift-summary__image--no-border": !e(H).bordered })]), p(ee, D);
      }), x(q), p(T, q);
    };
    O(w, (T) => {
      o().length && T(m);
    });
    var z = L(w, 2), I = (T) => {
      var q = ze();
      st(fe(q), () => e(f), (ee) => {
        var H = mb();
        Ge(y(H), () => e(f)), x(H), p(ee, H);
      }), p(T, q);
    };
    O(z, (T) => {
      e(f) && T(I);
    }), x(v), ve(() => Gt(v, e(g))), p(n, v);
    var V = lt(b);
    return a(), V;
  }
  Je(ud, { dealBlock: {}, images: {}, count: {}, title: {}, imageSize: {} }, [], [], !0);
  var yb = $('<div class="kaching-bundles__free-gift__divider"></div>'), wb = $("<!> <!>", 1), Pb = $("<!> <!>", 1);
  function Bi(n, t) {
    it(t, !0);
    const r = () => $e(v, "$config", a), [a, s] = vt();
    let o = k(t, "dealBlock", 7), c = k(t, "freeGifts", 7), l = k(t, "otherProducts", 7), i = k(t, "dealBarSelected", 7), u = k(t, "freeGiftsSummary", 7), h = k(t, "sellingPlan", 7), f = k(t, "sets", 7, 1), g = k(t, "mainProductVariantId", 7), b = k(t, "onChange", 7);
    const v = vn(), w = En();
    let m = Ve(ct({})), z = d(() => c().filter((N) => !N.applyOnlyForSubscriptions || h()));
    const I = d(() => e(z).flatMap((N) => {
      const se = N.productGID ? l().find((Z) => Z.id === Nt(N.productGID)) : void 0;
      if (!r().preview && N.productGID && !(se != null && se.availableForSale)) return [];
      const S = se && !r().preview ? mr(se) : se;
      return { freeGift: N, product: S };
    })), V = d(() => {
      var N, se;
      return (se = (N = u()) == null ? void 0 : N.enabled) != null && se;
    }), T = d(() => !i() && e(V) && e(I).length >= 2), q = d(() => {
      var N, se;
      return (se = (N = u()) == null ? void 0 : N.showImages) != null && se ? e(I).flatMap(({ freeGift: S, product: Z }) => {
        const M = ((R, Q, { preview: K, mainProductVariantId: ce, disableVariantOptionSync: F }) => {
          if (!R) return;
          const G = ko(R, Q, K);
          if (G.length !== 0) {
            if (!F && ce) {
              const U = G.find((te) => te.id === ce);
              if (U) return U;
            }
            return G[0];
          }
        })(Z, S, { preview: r().preview, mainProductVariantId: g(), disableVariantOptionSync: o().disableVariantOptionSync }), P = od({ freeGift: S, product: Z, variantImage: M == null ? void 0 : M.image, getMediaImageUrl: $e(w, "$getMediaImageUrl", a) });
        return P ? [{ source: P, bordered: S.giftType !== "shipping" }] : [];
      }) : [];
    });
    tt(() => {
      (function(N, se) {
        if (!c().length) return;
        const S = N.filter((Z) => Z.id in se).map((Z) => ({ id: Z.id, variant: se[Z.id].variant, product: se[Z.id].product, quantity: Z.quantity * f(), fullPrice: se[Z.id].fullPrice, showPrice: Z.showPrice, includeInCompareAt: Z.includeInCompareAt === !0, applyOnlyForSubscriptions: Z.applyOnlyForSubscriptions }));
        b()(S);
      })(e(z), e(m));
    });
    var ee = { get dealBlock() {
      return o();
    }, set dealBlock(N) {
      o(N), _();
    }, get freeGifts() {
      return c();
    }, set freeGifts(N) {
      c(N), _();
    }, get otherProducts() {
      return l();
    }, set otherProducts(N) {
      l(N), _();
    }, get dealBarSelected() {
      return i();
    }, set dealBarSelected(N) {
      i(N), _();
    }, get freeGiftsSummary() {
      return u();
    }, set freeGiftsSummary(N) {
      u(N), _();
    }, get sellingPlan() {
      return h();
    }, set sellingPlan(N) {
      h(N), _();
    }, get sets() {
      return f();
    }, set sets(N = 1) {
      f(N), _();
    }, get mainProductVariantId() {
      return g();
    }, set mainProductVariantId(N) {
      g(N), _();
    }, get onChange() {
      return b();
    }, set onChange(N) {
      b(N), _();
    } }, H = Pb(), D = fe(H), ne = (N) => {
      {
        let se = d(() => {
          var Z, M;
          return (M = (Z = u()) == null ? void 0 : Z.title) != null ? M : "";
        }), S = d(() => {
          var Z, M;
          return (M = (Z = e(I)[0]) == null ? void 0 : Z.freeGift.imageSize) != null ? M : 30;
        });
        ud(N, { get dealBlock() {
          return o();
        }, get images() {
          return e(q);
        }, get count() {
          return e(I).length;
        }, get title() {
          return e(se);
        }, get imageSize() {
          return e(S);
        } });
      }
    };
    O(D, (N) => {
      e(T) && N(ne);
    }), Vt(L(D, 2), 19, () => e(I), ({ freeGift: N, product: se }) => N.id, (N, se, S) => {
      let Z = () => e(se).freeGift;
      var M = wb(), P = fe(M);
      cd(P, { get dealBlock() {
        return o();
      }, get freeGift() {
        return Z();
      }, get product() {
        return e(se).product;
      }, get dealBarSelected() {
        return i();
      }, get collapsed() {
        return e(T);
      }, get sets() {
        return f();
      }, get mainProductVariantId() {
        return g();
      }, onChange: (K) => (function(ce, F) {
        F.variant ? e(m)[ce] = F : delete e(m)[ce];
      })(Z().id, K) });
      var R = L(P, 2), Q = (K) => {
        p(K, yb());
      };
      O(R, (K) => {
        !e(T) && e(S) < e(I).length - 1 && K(Q);
      }), p(N, M);
    }), p(n, H);
    var B = lt(ee);
    return s(), B;
  }
  function dd(n, t = "body") {
    let r;
    async function a(s) {
      if (typeof (t = s) == "string") {
        if (r = document.querySelector(t), r === null && (await Fs(), r = document.querySelector(t)), r === null) throw new Error(`No element found matching css selector: "${t}"`);
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
  Je(Bi, { dealBlock: {}, freeGifts: {}, otherProducts: {}, dealBarSelected: {}, freeGiftsSummary: {}, sellingPlan: {}, sets: {}, mainProductVariantId: {}, onChange: {} }, [], [], !0);
  var Sb = $('<div hidden=""><!></div>');
  function gl(n, t) {
    it(t, !1);
    let r = k(t, "target", 12, "body");
    var a = { get target() {
      return r();
    }, set target(o) {
      r(o), _();
    } };
    (function(o = !1) {
      const c = dn, l = c.l.u;
      if (!l) return;
      let i = () => Rc(c.s);
      if (o) {
        let u = 0, h = {};
        const f = Hi(() => {
          let g = !1;
          const b = c.s;
          for (const v in b) b[v] !== h[v] && (h[v] = b[v], g = !0);
          return g && u++, u;
        });
        i = () => e(f);
      }
      l.b.length && fr(() => {
        ou(c, i), Vl(l.b);
      }), tt(() => {
        const u = Jt(() => l.m.map(Sg));
        return () => {
          for (const h of u) typeof h == "function" && h();
        };
      }), l.a.length && tt(() => {
        ou(c, i), Vl(l.a);
      });
    })();
    var s = Sb();
    return Zc(y(s), t, "default", {}), x(s), Ws(s, (o, c) => dd == null ? void 0 : dd(o, c), r), p(n, s), lt(a);
  }
  Je(gl, { target: {} }, ["default"], [], !0);
  var gd = !1;
  const hd = class extends Date {
    constructor(...n) {
      super(...n), mt(this, ws), mt(this, Li, Ve(super.getTime())), mt(this, Sl, /* @__PURE__ */ new Map()), mt(this, ys, Lt), gd || un(this, ws, Wo).call(this);
    }
  };
  Li = /* @__PURE__ */ new WeakMap(), Sl = /* @__PURE__ */ new WeakMap(), ys = /* @__PURE__ */ new WeakMap(), ws = /* @__PURE__ */ new WeakSet(), Wo = function() {
    gd = !0;
    var n = hd.prototype, t = Date.prototype, r = Object.getOwnPropertyNames(t);
    for (const a of r) (a.startsWith("get") || a.startsWith("to") || a === "valueOf") && (n[a] = function(...s) {
      if (s.length > 0) return e(Be(this, Li)), t[a].apply(this, s);
      var o = Be(this, Sl).get(a);
      if (o === void 0) {
        const c = Lt;
        Hn(Be(this, ys)), o = d(() => (e(Be(this, Li)), t[a].apply(this, s))), Be(this, Sl).set(a, o), Hn(c);
      }
      return e(o);
    }), a.startsWith("set") && (n[a] = function(...s) {
      var o = t[a].apply(this, s);
      return ae(Be(this, Li), t.getTime.call(this)), o;
    });
  };
  let mo = hd;
  var Bb = ["forEach", "isDisjointFrom", "isSubsetOf", "isSupersetOf"], Cb = ["difference", "intersection", "symmetricDifference", "union"], pd = !1;
  const xo = class extends Set {
    constructor(n) {
      if (super(), mt(this, Bl), mt(this, ji, /* @__PURE__ */ new Map()), mt(this, Gr, Ve(0)), mt(this, Va, Ve(0)), mt(this, Ps, Dr || -1), n) {
        for (var t of n) super.add(t);
        Be(this, Va).v = super.size;
      }
      pd || un(this, Bl, Ho).call(this);
    }
    has(n) {
      var t = super.has(n), r = Be(this, ji), a = r.get(n);
      if (a === void 0) {
        if (!t) return e(Be(this, Gr)), !1;
        a = un(this, Bl, Uo).call(this, !0), r.set(n, a);
      }
      return e(a), t;
    }
    add(n) {
      return super.has(n) || (super.add(n), ae(Be(this, Va), super.size), ir(Be(this, Gr))), this;
    }
    delete(n) {
      var t = super.delete(n), r = Be(this, ji), a = r.get(n);
      return a !== void 0 && (r.delete(n), ae(a, !1)), t && (ae(Be(this, Va), super.size), ir(Be(this, Gr))), t;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var n = Be(this, ji);
        for (var t of n.values()) ae(t, !1);
        n.clear(), ae(Be(this, Va), 0), ir(Be(this, Gr));
      }
    }
    keys() {
      return this.values();
    }
    values() {
      return e(Be(this, Gr)), super.values();
    }
    entries() {
      return e(Be(this, Gr)), super.entries();
    }
    [Symbol.iterator]() {
      return this.keys();
    }
    get size() {
      return e(Be(this, Va));
    }
  };
  ji = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), Va = /* @__PURE__ */ new WeakMap(), Ps = /* @__PURE__ */ new WeakMap(), Bl = /* @__PURE__ */ new WeakSet(), Uo = function(n) {
    return Dr === Be(this, Ps) ? Ve(n) : ta(n);
  }, Ho = function() {
    pd = !0;
    var n = xo.prototype, t = Set.prototype;
    for (const r of Bb) n[r] = function(...a) {
      return e(Be(this, Gr)), t[r].apply(this, a);
    };
    for (const r of Cb) n[r] = function(...a) {
      e(Be(this, Gr));
      var s = t[r].apply(this, a);
      return new xo(s);
    };
  };
  let Ib = xo;
  const bd = class extends Map {
    constructor(n) {
      if (super(), mt(this, Kr), mt(this, Jr, /* @__PURE__ */ new Map()), mt(this, Yr, Ve(0)), mt(this, pa, Ve(0)), mt(this, Ss, Dr || -1), n) {
        for (var [t, r] of n) super.set(t, r);
        Be(this, pa).v = super.size;
      }
    }
    has(n) {
      var t = Be(this, Jr), r = t.get(n);
      if (r === void 0) {
        if (super.get(n) === void 0) return e(Be(this, Yr)), !1;
        r = un(this, Kr, Ei).call(this, 0), t.set(n, r);
      }
      return e(r), !0;
    }
    forEach(n, t) {
      un(this, Kr, Cl).call(this), super.forEach(n, t);
    }
    get(n) {
      var t = Be(this, Jr), r = t.get(n);
      if (r === void 0) {
        if (super.get(n) === void 0) return void e(Be(this, Yr));
        r = un(this, Kr, Ei).call(this, 0), t.set(n, r);
      }
      return e(r), super.get(n);
    }
    set(n, t) {
      var r, a = Be(this, Jr), s = a.get(n), o = super.get(n), c = super.set(n, t), l = Be(this, Yr);
      if (s === void 0) s = un(this, Kr, Ei).call(this, 0), a.set(n, s), ae(Be(this, pa), super.size), ir(l);
      else if (o !== t) {
        ir(s);
        var i = l.reactions === null ? null : new Set(l.reactions);
        (i === null || !((r = s.reactions) != null && r.every((u) => i.has(u)))) && ir(l);
      }
      return c;
    }
    delete(n) {
      var t = Be(this, Jr), r = t.get(n), a = super.delete(n);
      return r !== void 0 && (t.delete(n), ae(Be(this, pa), super.size), ae(r, -1), ir(Be(this, Yr))), a;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var n = Be(this, Jr);
        for (var t of (ae(Be(this, pa), 0), n.values())) ae(t, -1);
        ir(Be(this, Yr)), n.clear();
      }
    }
    keys() {
      return e(Be(this, Yr)), super.keys();
    }
    values() {
      return un(this, Kr, Cl).call(this), super.values();
    }
    entries() {
      return un(this, Kr, Cl).call(this), super.entries();
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    get size() {
      return e(Be(this, pa)), super.size;
    }
  };
  Jr = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ new WeakMap(), Ss = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakSet(), Ei = function(n) {
    return Dr === Be(this, Ss) ? Ve(n) : ta(n);
  }, Cl = function() {
    e(Be(this, Yr));
    var n = Be(this, Jr);
    if (Be(this, pa).v !== n.size) {
      for (var t of Am(bd.prototype, this, "keys").call(this)) if (!n.has(t)) {
        var r = un(this, Kr, Ei).call(this, 0);
        n.set(t, r);
      }
    }
    for ([, r] of Be(this, Jr)) e(r);
  };
  let yo = bd;
  class Mb {
    constructor(t, r) {
      mt(this, Il), mt(this, Ml), xt(this, Il, t), xt(this, Ml, gc(r));
    }
    get current() {
      return Be(this, Ml).call(this), Be(this, Il).call(this);
    }
  }
  Il = /* @__PURE__ */ new WeakMap(), Ml = /* @__PURE__ */ new WeakMap();
  const zb = /\(.+\)/, $b = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
  class Db extends Mb {
    constructor(t, r) {
      let a = zb.test(t) || t.split(/[\s,]+/).some((o) => $b.has(o.trim())) ? t : `(${t})`;
      const s = window.matchMedia(a);
      super(() => s.matches, (o) => (function(c, l, i, u = {}) {
        var h = Es(l, c, i, u);
        return () => {
          c.removeEventListener(l, h, u);
        };
      })(s, "change", o));
    }
  }
  const fd = [{ fonts: [20, 16, 12, 10], gaps: [16, 12, 8], image: 36 }, { fonts: [24, 20, 16, 12], gaps: [20, 16, 12], image: 48 }, { fonts: [28, 24, 20, 16], gaps: [24, 20, 16], image: 60 }, { fonts: [32, 28, 24, 20], gaps: [28, 24, 20], image: 80 }], vd = [0, 12, 16, 20, 24, 28], Vb = /\p{L}\p{M}*/gu, Ab = /\p{N}/gu, _d = ({ lettersAllowed: n, numbersAllowed: t }) => n !== t, Tb = ({ previousValue: n, nextValue: t, caretPosition: r }, a, s) => {
    const o = t.slice(r), c = t.slice(0, r), l = c.slice(0, qb(n, c)), i = c.slice(l.length), u = ((g, b) => _d(b) ? b.lettersAllowed ? g.replace(Ab, "") : g.replace(Vb, "") : g)(i, a), h = s === void 0 ? u.length : Math.max(0, s - l.length - o.length), f = u.slice(0, h);
    return { value: l + f + o, caretPosition: l.length + f.length, rejected: u.length < i.length };
  }, qb = (n, t) => {
    const r = Math.min(n.length, t.length);
    let a = 0;
    for (; a < r && n[a] === t[a]; ) a += 1;
    return a;
  };
  var Gb = (n, t) => {
    n.target === n.currentTarget && t()();
  }, Ob = $('<img alt="Close"/>'), Fb = $('<span class="kaching-bundles__personalisation-modal__item-variant"> </span>'), Lb = (n, t, r) => t(r(), n.currentTarget), jb = $('<img alt="Clear"/>'), Eb = $('<span class="kaching-bundles__personalisation-modal__input-error"> </span>'), Rb = $("<span> </span>"), Nb = $('<div class="kaching-bundles__personalisation-modal__item"><div class="kaching-bundles__personalisation-modal__item-info"><div class="kaching-bundles__personalisation-modal__item-image-wrapper"><img class="kaching-bundles__personalisation-modal__item-image" alt=""/></div> <div class="kaching-bundles__personalisation-modal__item-details"><span class="kaching-bundles__personalisation-modal__item-title"> </span> <!></div></div> <div class="kaching-bundles__personalisation-modal__input-wrapper"><div class="kaching-bundles__personalisation-modal__input-container"><input type="text"/> <!></div> <!> <!></div></div>'), Qb = $('<div role="none"><div class="kaching-bundles__personalisation-modal-overlay__content"><div class="kaching-bundles__personalisation-modal"><div class="kaching-bundles__personalisation-modal__header"><h2 class="kaching-bundles__personalisation-modal__heading"> </h2> <!></div> <div class="kaching-bundles__personalisation-modal__items"></div> <div class="kaching-bundles__personalisation-modal__actions"><!> <!></div></div></div></div>');
  function wo(n, t) {
    it(t, !0);
    const r = () => $e(f, "$translate", a), [a, s] = vt(), o = k(t, "selectedVariants", 7), c = k(t, "personalisationValues", 7), l = k(t, "addPersonalisationModal", 7), i = k(t, "inline", 7, !1), u = k(t, "onConfirm", 7), h = k(t, "onClose", 7), f = Mt(), g = d(() => ((W) => {
      var X, le;
      return { lettersAllowed: (X = W == null ? void 0 : W.lettersAllowed) == null || X, numbersAllowed: (le = W == null ? void 0 : W.numbersAllowed) == null || le };
    })(l())), b = d(() => !e(g).lettersAllowed && e(g).numbersAllowed), v = d(() => _d(e(g))), w = d(() => e(b) ? "system.numbers_only" : "system.letters_only"), m = d(() => {
      var W, X;
      return (X = (W = l()) == null ? void 0 : W.characterLimitEnabled) != null && X;
    }), z = d(() => {
      var W, X;
      return e(m) ? (X = (W = l()) == null ? void 0 : W.characterLimit) != null ? X : 30 : void 0;
    }), I = d(() => o().map(({ product: W, index: X }) => `${X}:${W.id}`)), V = d(() => o().map(({ product: W }, X) => {
      const le = o().slice(0, X + 1).filter((A) => A.product.id === W.id).length;
      return `${W.title} #${le}`;
    })), T = new yo(), q = d(() => o().map(({ index: W }) => {
      var X, le;
      return (le = (X = T.get(e(I)[W])) != null ? X : c()[W]) != null ? le : "";
    })), ee = d(() => new Set(o().filter(({ index: W }) => (c()[W] || "").trim() !== "").map(({ index: W }) => W))), H = d(() => l() ? (({ size: W, roundness: X, imageSize: le, textSize: A, overlayColor: re, primaryTextColor: ue, secondaryTextColor: _e, buttonColor: ge, buttonTextColor: ke, errorColor: pe }) => {
      const Ce = Math.min(Math.max(0, W), fd.length - 1), oe = Math.min(Math.max(0, X), vd.length - 1), xe = fd[Ce], Fe = vd[oe];
      return pn({ "kaching-product-personalisation-font-0": xe.fonts[0] + "px", "kaching-product-personalisation-font-1": xe.fonts[1] + "px", "kaching-product-personalisation-font-2": xe.fonts[2] + "px", "kaching-product-personalisation-font-3": xe.fonts[3] + "px", "kaching-product-personalisation-gap-0": xe.gaps[0] + "px", "kaching-product-personalisation-gap-1": xe.gaps[1] + "px", "kaching-product-personalisation-gap-2": xe.gaps[2] + "px", "kaching-product-personalisation-image-size": (le != null ? le : xe.image) + "px", "kaching-product-personalisation-radius": Fe + "px", "kaching-product-personalisation-text-size": A + "px", "kaching-product-personalisation-overlay-color": Ne(re), "kaching-product-personalisation-primary-text-color": Ne(ue), "kaching-product-personalisation-secondary-text-color": Ne(_e), "kaching-product-personalisation-button-color": Ne(ge), "kaching-product-personalisation-button-text-color": Ne(ke), "kaching-product-personalisation-error-color": Ne(pe) });
    })(l()) : "");
    let D = !1, ne = Ve(ct([]));
    function B(W, X) {
      var le;
      if (D) return;
      const A = Tb({ previousValue: e(q)[W], nextValue: X.value, caretPosition: (le = X.selectionStart) != null ? le : X.value.length }, e(g), e(z));
      X.value !== A.value && (X.value = A.value, X.setSelectionRange(A.caretPosition, A.caretPosition)), N(W, A.value), se(W, A.rejected);
    }
    function N(W, X) {
      T.set(e(I)[W], X);
    }
    function se(W, X) {
      if (!!e(ne)[W] === X) return;
      const le = [...e(ne)];
      le[W] = X, ae(ne, le, !0);
    }
    function S(W) {
      return e(ee).has(W) && e(q)[W].trim() !== "";
    }
    const Z = d(() => e(q).some((W) => W.trim() !== "")), M = d(() => e(ee).size > 0), P = d(() => !e(Z) && !e(M));
    var R = { get selectedVariants() {
      return o();
    }, set selectedVariants(W) {
      o(W), _();
    }, get personalisationValues() {
      return c();
    }, set personalisationValues(W) {
      c(W), _();
    }, get addPersonalisationModal() {
      return l();
    }, set addPersonalisationModal(W) {
      l(W), _();
    }, get inline() {
      return i();
    }, set inline(W = !1) {
      i(W), _();
    }, get onConfirm() {
      return u();
    }, set onConfirm(W) {
      u(W), _();
    }, get onClose() {
      return h();
    }, set onClose(W) {
      h(W), _();
    } }, Q = Qb();
    let K;
    Q.__click = [Gb, h];
    var ce = y(Q), F = y(ce), G = y(F), U = y(G), te = y(U, !0);
    x(U), Wt(L(U, 2), { element: "span", class: "kaching-bundles__personalisation-modal__close", get onclick() {
      return h();
    }, children: (W, X) => {
      var le = Ob();
      ve(() => Ie(le, "src", po)), p(W, le);
    }, $$slots: { default: !0 } }), x(G);
    var E = L(G, 2);
    Vt(E, 21, o, ({ product: W, variant: X, index: le }) => le, (W, X) => {
      let le = () => e(X).product, A = () => e(X).variant, re = () => e(X).index;
      var ue = Nb(), _e = y(ue), ge = y(_e), ke = y(ge);
      x(ge);
      var pe = L(ge, 2), Ce = y(pe), oe = y(Ce, !0);
      x(Ce);
      var xe = L(Ce, 2), Fe = (me) => {
        var qe = Fb(), Ue = y(qe, !0);
        x(qe), ve((Ye) => ft(Ue, Ye), [() => A().options.join(", ")]), p(me, qe);
      };
      O(xe, (me) => {
        le().variants.length > 1 && me(Fe);
      }), x(pe), x(_e);
      var Ae = L(_e, 2), Oe = y(Ae), Te = y(Oe);
      let Y;
      aa(Te), Te.__input = [Lb, B, re];
      var ye = L(Te, 2), Me = (me) => {
        Wt(me, { element: "span", class: "kaching-bundles__personalisation-modal__input-clear", onclick: () => (function(qe) {
          N(qe, ""), se(qe, !1);
        })(re()), children: (qe, Ue) => {
          var Ye = jb();
          ve(() => Ie(Ye, "src", "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.6667%203.99992V3.46659C10.6667%202.71985%2010.6667%202.34648%2010.5213%202.06126C10.3935%201.81038%2010.1895%201.60641%209.93865%201.47858C9.65344%201.33325%209.28007%201.33325%208.53333%201.33325H7.46667C6.71993%201.33325%206.34656%201.33325%206.06135%201.47858C5.81046%201.60641%205.60649%201.81038%205.47866%202.06126C5.33333%202.34648%205.33333%202.71985%205.33333%203.46659V3.99992M2%203.99992H14M12.6667%203.99992V11.4666C12.6667%2012.5867%2012.6667%2013.1467%2012.4487%2013.5746C12.2569%2013.9509%2011.951%2014.2569%2011.5746%2014.4486C11.1468%2014.6666%2010.5868%2014.6666%209.46667%2014.6666H6.53333C5.41323%2014.6666%204.85318%2014.6666%204.42535%2014.4486C4.04903%2014.2569%203.74307%2013.9509%203.55132%2013.5746C3.33333%2013.1467%203.33333%2012.5867%203.33333%2011.4666V3.99992'%20stroke='%23F04438'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), p(qe, Ye);
        }, $$slots: { default: !0 } });
      };
      O(ye, (me) => {
        S(re()) && me(Me);
      }), x(Oe);
      var he = L(Oe, 2), Pe = (me) => {
        var qe = Eb(), Ue = y(qe, !0);
        x(qe), ve((Ye) => ft(Ue, Ye), [() => r()(e(w))]), p(me, qe);
      };
      O(he, (me) => {
        e(v) && e(ne)[re()] && me(Pe);
      });
      var De = L(he, 2), we = (me) => {
        var qe = Rb();
        let Ue;
        var Ye = y(qe);
        x(qe), ve((at) => {
          var rt, Bt;
          Ue = Et(qe, 1, "kaching-bundles__personalisation-modal__input-counter", null, Ue, at), ft(Ye, `${(rt = e(q)[re()].length) != null ? rt : ""}/${(Bt = e(z)) != null ? Bt : ""}`);
        }, [() => ({ "kaching-bundles__personalisation-modal__input-counter--error": e(z) !== void 0 && e(q)[re()].length >= e(z) })]), p(me, qe);
      };
      O(De, (me) => {
        e(m) && me(we);
      }), x(Ae), x(ue), ve((me, qe) => {
        Ie(ke, "src", A().image || le().image), ft(oe, e(V)[re()]), Y = Et(Te, 1, "kaching-bundles__personalisation-modal__input", null, Y, me), Ie(Te, "placeholder", qe), Na(Te, e(q)[re()]), Ie(Te, "maxlength", e(v) ? void 0 : e(z)), Ie(Te, "inputmode", e(b) ? "numeric" : void 0);
      }, [() => ({ "kaching-bundles__personalisation-modal__input--with-clear": S(re()), "kaching-bundles__personalisation-modal__input--error": e(z) !== void 0 && e(q)[re()].length >= e(z) }), () => {
        var me;
        return (me = l()) != null && me.placeholderText ? r()(l().placeholderText) : "";
      }]), Nl("compositionstart", Te, () => D = !0), Nl("compositionend", Te, (me) => (function(qe, Ue) {
        D = !1, B(qe, Ue);
      })(re(), me.currentTarget)), p(W, ue);
    }), x(E);
    var ie = L(E, 2), J = y(ie);
    Wt(J, { element: "button", class: "kaching-bundles__personalisation-modal__button kaching-bundles__personalisation-modal__button--cancel", get onclick() {
      return h();
    }, children: (W, X) => {
      ba();
      var le = Zn();
      ve((A) => ft(le, A), [() => r()("system.cancel")]), p(W, le);
    }, $$slots: { default: !0 } });
    var C = L(J, 2);
    {
      let W = d(() => ["kaching-bundles__personalisation-modal__button", "kaching-bundles__personalisation-modal__button--confirm", e(P) && "kaching-bundles__personalisation-modal__button--disabled"]);
      Wt(C, { element: "button", get class() {
        return e(W);
      }, get disabled() {
        return e(P);
      }, onclick: () => u()(e(q)), children: (X, le) => {
        ba();
        var A = Zn();
        ve((re) => ft(A, re), [() => r()("system.confirm")]), p(X, A);
      }, $$slots: { default: !0 } });
    }
    x(ie), x(F), x(ce), x(Q), ve((W, X) => {
      K = Et(Q, 1, "kaching-bundles__personalisation-modal-overlay", null, K, W), Gt(Q, e(H)), ft(te, X);
    }, [() => ({ "kaching-bundles__personalisation-modal-overlay--inline": i() }), () => {
      var W;
      return (W = l()) != null && W.heading ? r()(l().heading) : "";
    }]), p(n, Q);
    var j = lt(R);
    return s(), j;
  }
  jn(["click", "input"]), Je(wo, { selectedVariants: {}, personalisationValues: {}, addPersonalisationModal: {}, inline: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var Wb = (n, t) => {
    ae(t, !0);
  }, Ub = (n, t) => {
    n.key !== "Enter" && n.key !== " " || (n.preventDefault(), ae(t, !0));
  }, Hb = $('<div class="kaching-bundles__product-personalisation__image-wrapper"><img alt="" class="kaching-bundles__product-personalisation__image"/></div>'), Zb = $('<div class="kaching-bundles__product-personalisation__image-wrapper"><img alt="" class="kaching-bundles__product-personalisation__image kaching-bundles__product-personalisation__image--default"/></div>'), Jb = $('<span class="kaching-bundles__product-personalisation__title"><!> <span class="kaching-bundles__product-personalisation__subtitle"> </span></span>'), Yb = $('<span class="kaching-bundles__product-personalisation__title"><!></span>'), Kb = $('<span class="kaching-bundles__product-personalisation__subtitle"><!></span>'), Xb = $("<!> <!>", 1), ef = $('<span class="kaching-bundles__product-personalisation__unit-label"> </span>'), tf = $('<span class="kaching-bundles__product-personalisation__price"><!> <!></span>'), nf = $('<span class="kaching-bundles__product-personalisation__compare-at-price"><!></span>'), rf = $('<div class="kaching-bundles"><!></div>'), af = $('<div role="button" tabindex="0"><div class="kaching-bundles__product-personalisation__main"><!> <div class="kaching-bundles__product-personalisation__content"><!></div></div> <div class="kaching-bundles__product-personalisation__pricing"><!> <!></div></div> <!>', 1);
  function Ya(n, t) {
    it(t, !0);
    const r = () => $e(w, "$config", o), a = () => $e(z, "$formatPrice", o), s = () => $e(m, "$translate", o), [o, c] = vt();
    let l = k(t, "productPersonalisation", 7), i = k(t, "product", 7), u = k(t, "selectedVariantIds", 23, () => []), h = k(t, "personalisationItems", 7), f = k(t, "quantity", 7), g = k(t, "addPersonalisationModal", 7), b = k(t, "onPersonalisationsChange", 7), v = k(t, "initialValues", 23, () => []);
    const w = vn(), m = Mt(), z = gn(), I = En();
    let V = Ve(!1);
    const T = new yo();
    let q;
    const ee = d(() => {
      if (l().mediaImageGID) return $e(I, "$getMediaImageUrl", o)(l().mediaImageGID);
    }), H = d(() => !e(ee) && l().imageSize > 0), D = d(() => Math.round(100 * parseFloat(l().pricePerItem || "0") * r().currencyRate)), ne = d(() => Math.round(100 * parseFloat(l().compareAtPrice || "0") * r().currencyRate)), B = d(() => e(D)), N = d(() => e(ne)), se = d(() => e(N) > 0 && e(N) > e(B)), S = d(() => ((Y) => pn({ "kaching-product-personalisation-image-height": Y.imageSize + "px" }))(l())), Z = d(() => hn({ priceFormatter: a(), product: void 0, totalFullPrice: e(N) || e(B), totalDiscountedPrice: e(B), quantity: f(), unitQuantity: null })), M = d(() => e(Z)(s()(l().title))), P = d(() => l().subtitle ? e(Z)(s()(l().subtitle)) : ""), R = d(() => (function(Y) {
      const { personalisationItems: ye, product: Me, selectedVariantIds: he } = Y;
      return ye != null ? ye : he.map((Pe, De) => ({ key: String(De), product: Me, variant: Me.variants.find((we) => we.id === Pe) || Me.variants[0] }));
    })({ personalisationItems: h(), product: i(), selectedVariantIds: u() })), Q = d(() => e(R).map((Y) => `${Y.key}:${Y.product.id}`)), K = d(() => e(R).map((Y) => `${Y.key}:${Y.product.id}:${Y.variant.id}`).join("|")), ce = d(() => e(Q).map((Y) => T.get(Y) || "")), F = d(() => e(R).map((Y, ye) => ({ product: Y.product, variant: Y.variant, index: ye })));
    tt(() => {
      l().id, v(), Jt(() => {
        T.clear(), v().forEach((Y, ye) => {
          Y && e(Q)[ye] && T.set(e(Q)[ye], Y);
        });
      });
    }), tt(() => {
      if (!h()) return;
      const Y = e(K);
      Jt(() => {
        if (Y === q) return;
        const ye = q === void 0;
        q = Y, ye && v().length <= e(Q).length || ie(e(ce));
      });
    });
    const G = d(() => e(ce).some((Y) => Y.trim() !== "")), U = d(() => e(ce).map((Y, ye) => ({ value: Y, index: ye })).filter(({ value: Y }) => Y.trim() !== "")), te = d(() => f() === 1);
    function E(Y) {
      const ye = e(Q).map((Me, he) => {
        const Pe = Y[he] || "";
        return Pe ? T.set(Me, Pe) : T.delete(Me), Pe;
      });
      ae(V, !1), ie(ye);
    }
    function ie(Y) {
      var ye;
      if (!l().variantGID) return;
      const Me = Nt(l().variantGID);
      if (!Me) return;
      const he = s()(l().valueLabel || "Value"), Pe = Y.map((De, we) => ({ id: l().id, variantId: Me, text: De, valueLabel: he, productIndex: we, parentVariantId: h() ? e(R)[we].variant.id : void 0 })).filter((De) => De.text.trim() !== "");
      (ye = b()) == null || ye(Pe);
    }
    var J = { get productPersonalisation() {
      return l();
    }, set productPersonalisation(Y) {
      l(Y), _();
    }, get product() {
      return i();
    }, set product(Y) {
      i(Y), _();
    }, get selectedVariantIds() {
      return u();
    }, set selectedVariantIds(Y = []) {
      u(Y), _();
    }, get personalisationItems() {
      return h();
    }, set personalisationItems(Y) {
      h(Y), _();
    }, get quantity() {
      return f();
    }, set quantity(Y) {
      f(Y), _();
    }, get addPersonalisationModal() {
      return g();
    }, set addPersonalisationModal(Y) {
      g(Y), _();
    }, get onPersonalisationsChange() {
      return b();
    }, set onPersonalisationsChange(Y) {
      b(Y), _();
    }, get initialValues() {
      return v();
    }, set initialValues(Y = []) {
      v(Y), _();
    } }, C = af(), j = fe(C);
    let W;
    j.__click = [Wb, V], j.__keydown = [Ub, V];
    var X = y(j), le = y(X), A = (Y) => {
      var ye = Hb(), Me = y(ye);
      x(ye), ve(() => {
        Ie(Me, "src", e(ee)), Ie(Me, "height", l().imageSize || 0);
      }), p(Y, ye);
    }, re = (Y) => {
      var ye = ze(), Me = fe(ye), he = (Pe) => {
        var De = Zb(), we = y(De);
        x(De), ve(() => {
          Ie(we, "src", "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.0476%206.95032C24.6473%206.55003%2024.1722%206.23251%2023.6492%206.01588C23.1262%205.79924%2022.5657%205.68774%2021.9996%205.68774C21.4335%205.68774%2020.873%205.79924%2020.35%206.01588C19.8271%206.23251%2019.3519%206.55003%2018.9516%206.95032L17.9932%207.90872L17.9788%207.89432L16.2828%209.59032L16.2972%209.60632L6.88921%2019.0143C6.06394%2019.8391%205.60007%2020.9579%205.59961%2022.1247V25.1999C5.59961%2025.5182%205.72604%2025.8234%205.95108%2026.0484C6.17612%2026.2735%206.48135%2026.3999%206.79961%2026.3999H9.87481C11.0416%2026.3995%2012.1604%2025.9356%2012.9852%2025.1103L25.0492%2013.0463C25.4495%2012.6461%2025.767%2012.1709%2025.9837%2011.6479C26.2003%2011.1249%2026.3118%2010.5644%2026.3118%209.99832C26.3118%209.43225%2026.2003%208.87172%2025.9837%208.34874C25.767%207.82576%2025.4495%207.35058%2025.0492%206.95032H25.0476ZM17.9932%2011.3023L8.58521%2020.7103C8.3995%2020.8961%208.25221%2021.1166%208.15173%2021.3593C8.05125%2021.602%207.99956%2021.8621%207.99961%2022.1247V23.9999H9.87481C10.4044%2023.9999%2010.9148%2023.7887%2011.2876%2023.4143L20.6956%2014.0063L17.9932%2011.3023ZM22.3932%2012.3087L23.3516%2011.3503C23.6865%2010.9871%2023.8678%2010.5084%2023.8578%2010.0144C23.8477%209.52049%2023.647%209.04957%2023.2977%208.70023C22.9484%208.35089%2022.4774%208.15019%2021.9835%208.14015C21.4896%208.1301%2021.0109%208.31147%2020.6476%208.64632L19.6908%209.60632L22.3932%2012.3087Z'%20fill='black'/%3e%3c/svg%3e"), Ie(we, "height", l().imageSize || 0);
        }), p(Pe, De);
      };
      O(Me, (Pe) => {
        e(H) && Pe(he);
      }, !0), p(Y, ye);
    };
    O(le, (Y) => {
      e(ee) ? Y(A) : Y(re, !1);
    });
    var ue = L(le, 2), _e = y(ue), ge = (Y) => {
      var ye = ze();
      Vt(fe(ye), 17, () => e(U), ({ value: Me, index: he }) => he, (Me, he) => {
        var Pe = Jb(), De = y(Pe), we = (Ue) => {
          var Ye = Zn();
          ve(() => ft(Ye, `#${e(he).index + 1}`)), p(Ue, Ye);
        };
        O(De, (Ue) => {
          e(te) || Ue(we);
        });
        var me = L(De, 2), qe = y(me, !0);
        x(me), x(Pe), ve(() => ft(qe, e(he).value)), p(Me, Pe);
      }), p(Y, ye);
    }, ke = (Y) => {
      var ye = Xb(), Me = fe(ye), he = (we) => {
        var me = Yb();
        Ge(y(me), () => e(M)), x(me), p(we, me);
      };
      O(Me, (we) => {
        e(M) && we(he);
      });
      var Pe = L(Me, 2), De = (we) => {
        var me = Kb();
        Ge(y(me), () => e(P)), x(me), p(we, me);
      };
      O(Pe, (we) => {
        e(P) && we(De);
      }), p(Y, ye);
    };
    O(_e, (Y) => {
      e(G) ? Y(ge) : Y(ke, !1);
    }), x(ue), x(X);
    var pe = L(X, 2), Ce = y(pe), oe = (Y) => {
      var ye = tf(), Me = y(ye);
      Ge(Me, () => a()(e(B)));
      var he = L(Me, 2), Pe = (De) => {
        var we = ef(), me = y(we, !0);
        x(we), ve(() => ft(me, l().pricePerItemUnitLabel)), p(De, we);
      };
      O(he, (De) => {
        l().pricePerItemUnitLabel && De(Pe);
      }), x(ye), p(Y, ye);
    };
    O(Ce, (Y) => {
      e(B) > 0 && Y(oe);
    });
    var xe = L(Ce, 2), Fe = (Y) => {
      var ye = nf();
      Ge(y(ye), () => a()(e(N))), x(ye), p(Y, ye);
    };
    O(xe, (Y) => {
      e(se) && Y(Fe);
    }), x(pe), x(j);
    var Ae = L(j, 2), Oe = (Y) => {
      gl(Y, { target: "body", children: (ye, Me) => {
        var he = rf();
        wo(y(he), { get selectedVariants() {
          return e(F);
        }, get personalisationValues() {
          return e(ce);
        }, get addPersonalisationModal() {
          return g();
        }, onConfirm: E, onClose: () => {
          ae(V, !1);
        } }), x(he), p(ye, he);
      }, $$slots: { default: !0 } });
    };
    O(Ae, (Y) => {
      e(V) && Y(Oe);
    }), ve((Y) => {
      W = Et(j, 1, "kaching-bundles__product-personalisation", null, W, Y), Ie(j, "data-product-personalisation-id", l().id), Gt(j, e(S));
    }, [() => ({ "kaching-bundles__product-personalisation--filled": e(G) })]), p(n, C);
    var Te = lt(J);
    return c(), Te;
  }
  function lf(n, t, r) {
    const a = Number(n.target.value), s = t().find((o) => o.id === a);
    r()(s);
  }
  jn(["click", "keydown"]), Je(Ya, { productPersonalisation: {}, product: {}, selectedVariantIds: {}, personalisationItems: {}, quantity: {}, addPersonalisationModal: {}, onPersonalisationsChange: {}, initialValues: {} }, [], [], !0);
  var sf = (n) => n.stopPropagation(), of = $("<option> </option>"), cf = $('<select class="kaching-bundles__bar-variant-select kaching-bundles__selling-plan-select"></select>');
  function Sa(n, t) {
    it(t, !0);
    const [r, a] = vt(), s = k(t, "sellingPlans", 7), o = k(t, "selectedSellingPlan", 7), c = k(t, "onChange", 7), l = Mt();
    var i, u = { get sellingPlans() {
      return s();
    }, set sellingPlans(g) {
      s(g), _();
    }, get selectedSellingPlan() {
      return o();
    }, set selectedSellingPlan(g) {
      o(g), _();
    }, get onChange() {
      return c();
    }, set onChange(g) {
      c(g), _();
    } }, h = cf();
    h.__change = [lf, s, c], h.__click = [sf], Vt(h, 21, s, (g) => g.id, (g, b) => {
      var v = of(), w = y(v, !0);
      x(v);
      var m = {};
      ve(() => {
        var z;
        ft(w, e(b).name), m !== (m = e(b).id) && (v.value = (z = v.__value = e(b).id) != null ? z : "");
      }), p(g, v);
    }), x(h), Zs(h), ve((g) => {
      var b;
      Ie(h, "aria-label", g), i !== (i = o().id) && (h.value = (b = h.__value = o().id) != null ? b : "", el(h, o().id));
    }, [() => $e(l, "$translate", r)("system.subscription_plan")]), p(n, h);
    var f = lt(u);
    return a(), f;
  }
  jn(["change", "click"]), Je(Sa, { sellingPlans: {}, selectedSellingPlan: {}, onChange: {} }, [], [], !0);
  var uf = An('<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.334 1 5 8.333 1.667 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function us(n) {
    p(n, uf());
  }
  Je(us, {}, [], [], !0);
  var df = $('<img alt="" class="kaching-bundles__upsell__image"/>'), gf = $('<div class="kaching-bundles__upsell__price"><!></div>'), hf = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), pf = $('<div class="kaching-bundles__upsell__price"><!></div>'), bf = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), ff = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--secondary"><!> <!></div>'), vf = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--main"><!> <!></div> <!>', 1), _f = $('<div class="kaching-bundles__upsell__price"><!></div>'), kf = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), mf = $('<div class="kaching-bundles__upsell__unit-price"><!> </div>'), xf = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--main"><!> <!></div> <div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--secondary"><!></div>', 1), yf = $('<div class="kaching-bundles__upsell__price"><!></div>'), wf = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), Pf = $("<!> <!>", 1), Sf = $('<div><!> <div class="kaching-bundles__upsell__main"><!> <!> <div class="kaching-bundles__upsell__content"><!> <!> <!></div></div> <div class="kaching-bundles__upsell__pricing"><!></div></div>');
  function kd(n, t) {
    it(t, !0);
    const r = () => $e(I, "$config", o), a = () => $e(m, "$formatPrice", o), s = () => $e(w, "$translate", o), [o, c] = vt();
    let l = k(t, "dealBlock", 7), i = k(t, "dealBarId", 7), u = k(t, "upsell", 7), h = k(t, "product", 7), f = k(t, "dealBarSelected", 7, !1), g = k(t, "dealSellingPlan", 7), b = k(t, "sets", 7), v = k(t, "onChange", 7);
    const w = Mt(), m = gn(), z = En(), I = vn();
    let V = Ve(ct(u().preselected)), T = Ve(void 0), q = Ve(void 0);
    const ee = d(() => u().variantGIDs ? u().variantGIDs.map(Nt) : h().variants.map((oe) => oe.id)), H = d(() => ({ ...h(), variants: h().variants.filter((oe) => (r().preview || oe.availableForSale) && e(ee).includes(oe.id)) })), D = d(() => (function(oe, xe) {
      if (oe !== void 0) return oe;
      if (xe != null && xe.availableForSale && xe.variants.length > 0) return xe.variants[0].id;
    })(e(T), e(H))), ne = d(() => e(H).variants.find((oe) => oe.id === e(D))), B = d(() => $e(z, "$getMediaImageUrl", o)(u().mediaImageGID)), N = d(() => ((oe, xe) => {
      const { fonts: Fe, colors: Ae, cornerRadius: Oe } = oe;
      return pn({ "kaching-upsell-background-color": Ae.upsellBackground && Ne(Ae.upsellBackground), "kaching-upsell-text-color": Ae.upsellText && Ne(Ae.upsellText), "kaching-upsell-selected-background-color": Ae.upsellSelectedBackground && Ne(Ae.upsellSelectedBackground), "kaching-upsell-selected-text-color": Ae.upsellSelectedText && Ne(Ae.upsellSelectedText), "kaching-upsell-font-size": Fe.upsell && Fe.upsell.size + "px", "kaching-upsell-font-weight": Fe.upsell && cr(Fe.upsell.style), "kaching-upsell-font-style": Fe.upsell && ur(Fe.upsell.style), "kaching-upsell-image-border-radius": (Oe || 0) / 2 + "px", "kaching-upsell-image-height": xe.imageSize + "px" });
    })(l(), u())), se = d(() => h().url ? `${h().url}?variant=${e(D)}` : void 0), S = d(() => l().priceRounding ? { perItem: l().showPricesPerItem, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), Z = d(() => u().quantity * b()), M = d(() => (function(oe) {
      if (!oe) return 0;
      let xe = oe.price;
      return l().useProductCompareAtPrice && oe.compareAtPrice && (xe = Math.max(xe, oe.compareAtPrice)), xe * e(Z);
    })(e(ne))), P = d(() => Math.ceil(e(M) / e(Z))), R = d(() => {
      var oe;
      return (oe = u().subscriptionEnabled) == null || oe;
    }), Q = d(() => {
      var oe;
      return (oe = u().subscriptionType) != null ? oe : "deal";
    }), K = d(() => {
      if (!e(R) || e(Q) !== "always" || !e(ne)) return [];
      const oe = new Set(e(ne).sellingPlans.map((xe) => xe.id));
      return h().sellingPlans.filter((xe) => oe.has(xe.id));
    }), ce = d(() => e(K).find((oe) => oe.id === e(q)) || e(K)[0]);
    tt(() => {
      var oe;
      e(K).some((xe) => {
        var Fe;
        return xe.id === ((Fe = g()) == null ? void 0 : Fe.id);
      }) && ae(q, (oe = g()) == null ? void 0 : oe.id, !0);
    });
    const F = d(() => {
      if (e(ne) && e(R))
        return e(Q) === "deal" ? g() ? tr(h(), e(ne), g()) : void 0 : e(ce);
    }), G = d(() => sa({ discountType: u().discountType, discountValue: u().discountValue, discountQuantity: u().quantity, variantQuantities: e(ne) ? [{ variant: e(ne), quantity: e(Z) }] : [], currencyRate: r().currencyRate, priceRounding: e(S), sellingPlan: e(F) })), U = d(() => Math.ceil(e(G) / e(Z))), te = d(() => e(M) > e(G)), E = d(() => e(ne) && so(e(ne))), ie = d(() => e(ne) ? xr([{ variant: e(ne), quantity: e(Z) }]) : null), J = d(() => e(ie) ? e(G) / e(ie) : null), C = d(() => hn({ priceFormatter: a(), product: h(), totalFullPrice: e(M), totalDiscountedPrice: e(G), quantity: e(Z), unitQuantity: e(ie), sellingPlan: e(F) })), j = d(() => e(C)(s()(u().text))), W = d(() => ((oe, xe, Fe) => oe.blockLayout !== "vertical" ? [] : cs(oe).filter((Ae) => Ae.attachedTo.type === "barUpsell" && Ae.attachedTo.dealBarId === xe && Ae.attachedTo.upsellId === Fe))(l(), i(), u().id).map((oe) => wa(oe, s(), e(C)))), X = d(() => Pa(e(W))), le = d(() => e(X).positions.size > 0);
    function A(oe) {
      ae(T, oe, !0);
    }
    function re() {
      f() && ae(V, !e(V));
    }
    fr(() => {
      u().productGID, ae(T, void 0);
    }), tt(() => {
      if (e(ne) && h().availableForSale && e(Z)) {
        const oe = e(V), xe = e(F);
        Jt(() => {
          v()({ variant: oe ? e(ne) : null, product: oe ? h() : null, discountedPrice: oe ? e(G) : 0, fullPrice: oe ? e(M) : 0, sellingPlan: oe ? xe : void 0 });
        });
      }
    });
    const ue = d(() => !h().availableForSale || h().variants.filter((oe) => oe.availableForSale && e(ee).includes(oe.id)).length === 0);
    var _e = { get dealBlock() {
      return l();
    }, set dealBlock(oe) {
      l(oe), _();
    }, get dealBarId() {
      return i();
    }, set dealBarId(oe) {
      i(oe), _();
    }, get upsell() {
      return u();
    }, set upsell(oe) {
      u(oe), _();
    }, get product() {
      return h();
    }, set product(oe) {
      h(oe), _();
    }, get dealBarSelected() {
      return f();
    }, set dealBarSelected(oe = !1) {
      f(oe), _();
    }, get dealSellingPlan() {
      return g();
    }, set dealSellingPlan(oe) {
      g(oe), _();
    }, get sets() {
      return b();
    }, set sets(oe) {
      b(oe), _();
    }, get onChange() {
      return v();
    }, set onChange(oe) {
      v(oe), _();
    } }, ge = ze(), ke = fe(ge), pe = (oe) => {
      var xe = Sf();
      let Fe, Ae;
      var Oe = y(xe);
      Vt(Oe, 17, () => e(W), (dt) => dt.id, (dt, At) => {
        oa(dt, { get badge() {
          return e(At);
        }, get blockLayout() {
          return l().blockLayout;
        } });
      });
      var Te = L(Oe, 2), Y = y(Te), ye = (dt) => {
        {
          let At = d(() => ["kaching-bundles__upsell__checkbox", e(V) && "kaching-bundles__upsell__checkbox--selected"]);
          Wt(dt, { element: "span", get class() {
            return e(At);
          }, onclick: re, children: (Yt, Se) => {
            var be = ze(), Ze = fe(be), Ke = (He) => {
              us(He);
            };
            O(Ze, (He) => {
              e(V) && He(Ke);
            }), p(Yt, be);
          }, $$slots: { default: !0 } });
        }
      };
      O(Y, (dt) => {
        f() && dt(ye);
      });
      var Me = L(Y, 2), he = (dt) => {
        {
          let At = d(() => f() ? e(se) : void 0);
          er(dt, { get url() {
            return e(At);
          }, class: "kaching-bundles__upsell__link", children: (Yt, Se) => {
            var be = df();
            ve(() => {
              var Ze;
              Ie(be, "src", e(B) || ((Ze = e(ne)) == null ? void 0 : Ze.image) || h().image), Ie(be, "height", u().imageSize);
            }), p(Yt, be);
          }, $$slots: { default: !0 } });
        }
      };
      O(Me, (dt) => {
        u().imageSize > 0 && dt(he);
      });
      var Pe = L(Me, 2), De = y(Pe), we = (dt) => {
        Wt(dt, { element: "span", class: "kaching-bundles__upsell__text", onclick: re, children: (At, Yt) => {
          var Se = ze();
          Ge(fe(Se), () => e(j)), p(At, Se);
        }, $$slots: { default: !0 } });
      };
      O(De, (dt) => {
        e(j) && dt(we);
      });
      var me = L(De, 2), qe = (dt) => {
        Jn(dt, { get product() {
          return e(H);
        }, get selectedVariantId() {
          return e(D);
        }, onChange: A });
      };
      O(me, (dt) => {
        f() && e(H) && e(H).variants.length > 1 && e(D) && dt(qe);
      });
      var Ue = L(me, 2), Ye = (dt) => {
        Sa(dt, { get sellingPlans() {
          return e(K);
        }, get selectedSellingPlan() {
          return e(ce);
        }, onChange: (At) => ae(q, At.id, !0) });
      };
      O(Ue, (dt) => {
        f() && e(V) && e(K).length > 1 && e(ce) && dt(Ye);
      }), x(Pe), x(Te);
      var at = L(Te, 2), rt = y(at), Bt = (dt) => {
        var At = vf(), Yt = fe(At), Se = y(Yt);
        st(Se, () => e(U), (We) => {
          var Re = gf();
          Ge(y(Re), () => a()(e(U))), x(Re), p(We, Re);
        });
        var be = L(Se, 2), Ze = (We) => {
          var Re = ze();
          st(fe(Re), () => e(P), (pt) => {
            var nt = hf();
            Ge(y(nt), () => a()(e(P))), x(nt), p(pt, nt);
          }), p(We, Re);
        };
        O(be, (We) => {
          e(te) && We(Ze);
        }), x(Yt);
        var Ke = L(Yt, 2), He = (We) => {
          var Re = ff(), pt = y(Re);
          st(pt, () => e(G), (et) => {
            var ot = pf();
            Ge(y(ot), () => a()(e(G))), x(ot), p(et, ot);
          });
          var nt = L(pt, 2), ut = (et) => {
            var ot = ze();
            st(fe(ot), () => e(M), (wt) => {
              var ht = bf();
              Ge(y(ht), () => a()(e(M))), x(ht), p(wt, ht);
            }), p(et, ot);
          };
          O(nt, (et) => {
            e(te) && et(ut);
          }), x(Re), p(We, Re);
        };
        O(Ke, (We) => {
          e(Z) > 1 && We(He);
        }), p(dt, At);
      }, Dt = (dt) => {
        var At = ze(), Yt = fe(At), Se = (Ze) => {
          var Ke = xf(), He = fe(Ke), We = y(He);
          st(We, () => e(G), (ut) => {
            var et = _f();
            Ge(y(et), () => a()(l().showPricesPerItem ? e(U) : e(G))), x(et), p(ut, et);
          });
          var Re = L(We, 2), pt = (ut) => {
            var et = ze();
            st(fe(et), () => e(M), (ot) => {
              var wt = kf();
              Ge(y(wt), () => a()(l().showPricesPerItem ? e(P) : e(M))), x(wt), p(ot, wt);
            }), p(ut, et);
          };
          O(Re, (ut) => {
            e(te) && ut(pt);
          }), x(He);
          var nt = L(He, 2);
          st(y(nt), () => e(J), (ut) => {
            var et = mf(), ot = y(et);
            Ge(ot, () => a()(e(J), { preserveDecimals: !0 }));
            var wt = L(ot);
            x(et), ve(() => {
              var ht;
              return ft(wt, ` / ${(ht = e(E)) != null ? ht : ""}`);
            }), p(ut, et);
          }), x(nt), p(Ze, Ke);
        }, be = (Ze) => {
          var Ke = Pf(), He = fe(Ke);
          st(He, () => e(G), (pt) => {
            var nt = yf();
            Ge(y(nt), () => a()(l().showPricesPerItem ? e(U) : e(G))), x(nt), p(pt, nt);
          });
          var We = L(He, 2), Re = (pt) => {
            var nt = ze();
            st(fe(nt), () => e(M), (ut) => {
              var et = wf();
              Ge(y(et), () => a()(l().showPricesPerItem ? e(P) : e(M))), x(et), p(ut, et);
            }), p(pt, nt);
          };
          O(We, (pt) => {
            e(te) && pt(Re);
          }), p(Ze, Ke);
        };
        O(Yt, (Ze) => {
          e(J) && e(E) && !r().ignoreUnitPrice ? Ze(Se) : Ze(be, !1);
        }, !0), p(dt, At);
      };
      O(rt, (dt) => {
        l().showBothPrices ? dt(Bt) : dt(Dt, !1);
      }), x(at), x(xe), ve((dt, At) => {
        Fe = Et(xe, 1, "kaching-bundles__upsell", null, Fe, dt), Ie(xe, "data-upsell-id", u().id), Ae = Gt(xe, e(N), Ae, At);
      }, [() => ({ "kaching-bundles__upsell--out-of-stock": r().preview && e(ue), "kaching-bundles__upsell--badge-border-all": e(X).positions.has("all"), "kaching-bundles__upsell--badge-border-top": e(X).positions.has("top"), "kaching-bundles__upsell--badge-border-bottom": e(X).positions.has("bottom"), "kaching-bundles__upsell--badge-border-left": e(X).positions.has("left"), "kaching-bundles__upsell--badge-border-right": e(X).positions.has("right") }), () => ({ "--badge-border-thickness": e(le) ? `${e(X).thickness}px` : void 0, "--badge-border-gap": e(le) ? `${e(X).gap}px` : void 0, "--badge-border-gap-border": e(X).gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": e(X).sideLength ? `${e(X).sideLength}px` : void 0 })]), p(oe, xe);
    };
    O(ke, (oe) => {
      !(e(ne) || r().preview && e(ue)) || u().visibleOnlyWhenDealBarSelected && !f() || oe(pe);
    }), p(n, ge);
    var Ce = lt(_e);
    return c(), Ce;
  }
  Je(kd, { dealBlock: {}, dealBarId: {}, upsell: {}, product: {}, dealBarSelected: {}, dealSellingPlan: {}, sets: {}, onChange: {} }, [], [], !0);
  var Bf = $('<div class="kaching-bundles__free-gift__divider"></div>'), Cf = $("<!> <!>", 1);
  function Ci(n, t) {
    it(t, !0);
    const r = () => $e(v, "$config", a), [a, s] = vt();
    let o = k(t, "dealBlock", 7), c = k(t, "dealBarId", 7), l = k(t, "upsells", 7), i = k(t, "otherProducts", 7), u = k(t, "complementaryProducts", 7), h = k(t, "dealBarSelected", 7), f = k(t, "dealSellingPlan", 7), g = k(t, "sets", 7, 1), b = k(t, "onChange", 7);
    const v = vn();
    let w = Ve(ct({}));
    const m = d(() => r().preview ? i() : i().map(mr)), z = d(() => r().preview ? u() : u().map(mr)), I = Math.floor(1e3 * Math.random()), V = d(() => l().flatMap((H, D) => {
      if (H.productSource === "complementary") {
        const B = e(z)[(D + I) % (e(z).length || 1)];
        return B && (r().preview || B.availableForSale) ? { upsell: H, product: B } : [];
      }
      if (!H.productGID) return [];
      const ne = e(m).find((B) => B.id === Nt(H.productGID));
      if (!ne) return [];
      if (!r().preview) {
        if (!ne.availableForSale) return [];
        const B = H.variantGIDs ? H.variantGIDs.map(Nt) : ne.variants.map((N) => N.id);
        if (!ne.variants.some((N) => N.availableForSale && B.includes(N.id))) return [];
      }
      return { upsell: H, product: ne };
    }));
    var T = { get dealBlock() {
      return o();
    }, set dealBlock(H) {
      o(H), _();
    }, get dealBarId() {
      return c();
    }, set dealBarId(H) {
      c(H), _();
    }, get upsells() {
      return l();
    }, set upsells(H) {
      l(H), _();
    }, get otherProducts() {
      return i();
    }, set otherProducts(H) {
      i(H), _();
    }, get complementaryProducts() {
      return u();
    }, set complementaryProducts(H) {
      u(H), _();
    }, get dealBarSelected() {
      return h();
    }, set dealBarSelected(H) {
      h(H), _();
    }, get dealSellingPlan() {
      return f();
    }, set dealSellingPlan(H) {
      f(H), _();
    }, get sets() {
      return g();
    }, set sets(H = 1) {
      g(H), _();
    }, get onChange() {
      return b();
    }, set onChange(H) {
      b(H), _();
    } }, q = ze();
    Vt(fe(q), 19, () => e(V), ({ upsell: H, product: D }) => H.id, (H, D, ne) => {
      let B = () => e(D).upsell;
      var N = Cf(), se = fe(N);
      kd(se, { get dealBarId() {
        return c();
      }, get dealBlock() {
        return o();
      }, get upsell() {
        return B();
      }, get product() {
        return e(D).product;
      }, get dealBarSelected() {
        return h();
      }, get dealSellingPlan() {
        return f();
      }, get sets() {
        return g();
      }, onChange: (M) => (function(P, R) {
        const { variant: Q, product: K, discountedPrice: ce, fullPrice: F, sellingPlan: G } = R;
        Q && K ? e(w)[P] = { variant: Q, product: K, discountedPrice: ce, fullPrice: F, sellingPlan: G } : delete e(w)[P];
        const U = l().filter((te) => te.id in e(w)).map((te) => ({ id: te.id, variant: e(w)[te.id].variant, product: e(w)[te.id].product, quantity: te.quantity * g(), discountedPrice: e(w)[te.id].discountedPrice, fullPrice: e(w)[te.id].fullPrice, sellingPlan: e(w)[te.id].sellingPlan }));
        b()(U);
      })(B().id, M) });
      var S = L(se, 2), Z = (M) => {
        p(M, Bf());
      };
      O(S, (M) => {
        e(ne) < e(V).length - 1 && M(Z);
      }), p(H, N);
    }), p(n, q);
    var ee = lt(T);
    return s(), ee;
  }
  Je(Ci, { dealBlock: {}, dealBarId: {}, upsells: {}, otherProducts: {}, complementaryProducts: {}, dealBarSelected: {}, dealSellingPlan: {}, sets: {}, onChange: {} }, [], [], !0);
  var If = $('<span class="kaching-bundles__bar-price__unit-label"><!></span>'), Mf = $('<div class="kaching-bundles__bar-price"><!> <!></div>');
  function Nr(n, t) {
    it(t, !0);
    const r = () => $e(i, "$translate", a), [a, s] = vt(), o = k(t, "amount", 7), c = k(t, "showPricesPerItem", 7), l = k(t, "unitLabel", 7, ""), i = Mt(), u = gn();
    var h = { get amount() {
      return o();
    }, set amount(m) {
      o(m), _();
    }, get showPricesPerItem() {
      return c();
    }, set showPricesPerItem(m) {
      c(m), _();
    }, get unitLabel() {
      return l();
    }, set unitLabel(m = "") {
      l(m), _();
    } }, f = Mf(), g = y(f);
    Ge(g, () => $e(u, "$formatPrice", a)(o()));
    var b = L(g, 2), v = (m) => {
      var z = If();
      Ge(y(z), () => r()(l())), x(z), p(m, z);
    };
    O(b, (m) => {
      c() && l() && m(v);
    }), x(f), ve((m) => Ie(f, "data-a11y-label", m), [() => r()("system.price")]), p(n, f);
    var w = lt(h);
    return s(), w;
  }
  Je(Nr, { amount: {}, showPricesPerItem: {}, unitLabel: {} }, [], [], !0);
  const md = "variantBadges";
  function xd(n = []) {
    const t = ia(yd(n));
    return oi(md, t), { setVariantBadges: (r) => {
      t.set(yd(r));
    } };
  }
  function yd(n) {
    const t = new Map(n.map((r) => [r.variantId, r.badgeHtml]));
    return (r) => r === void 0 ? void 0 : t.get(r);
  }
  var zf = $('<div class="kaching-bundles__low-stock-alert"><!></div>');
  function wd(n, t) {
    it(t, !0);
    const [r, a] = vt(), s = k(t, "lowStockAlert", 7), o = k(t, "inventoryQuantity", 7), c = Mt(), l = d(() => {
      return v = $e(c, "$translate", r)(s().message), w = { stock: o() ? o().toString() : null }, v.replace(/\{\{\s*(\w+)\s*\}\}/g, (m, z) => {
        var I;
        return (I = w[z]) != null ? I : "";
      });
      var v, w;
    }), i = d(() => ((v) => {
      const { textColor: w } = v;
      return pn({ "kaching-bundles-low-stock-alert-text-color": Ne(w) });
    })(s()));
    var u = { get lowStockAlert() {
      return s();
    }, set lowStockAlert(v) {
      s(v), _();
    }, get inventoryQuantity() {
      return o();
    }, set inventoryQuantity(v) {
      o(v), _();
    } }, h = ze(), f = fe(h), g = (v) => {
      var w = zf();
      Ge(y(w), () => e(l)), x(w), ve(() => Gt(w, e(i))), p(v, w);
    };
    O(f, (v) => {
      o() && o() > 0 && o() < s().threshold && v(g);
    }), p(n, h);
    var b = lt(u);
    return a(), b;
  }
  Je(wd, { lowStockAlert: {}, inventoryQuantity: {} }, [], [], !0);
  var $f = $("<div><!></div>");
  function ca(n, t) {
    it(t, !0);
    const [r, a] = vt(), s = k(t, "dealBlock", 7), o = k(t, "variant", 7), c = (function() {
      const v = si(md);
      if (!v) throw new Error("getVariantBadges must be called within a component tree that has setupVariantBadges initialized");
      return v;
    })(), l = d(() => {
      var v;
      return $e(c, "$variantBadgeLookup", r)((v = o()) == null ? void 0 : v.id);
    });
    var i = { get dealBlock() {
      return s();
    }, set dealBlock(v) {
      s(v), _();
    }, get variant() {
      return o();
    }, set variant(v) {
      o(v), _();
    } }, u = ze(), h = fe(u), f = (v) => {
      var w = $f();
      Ge(y(w), () => e(l)), x(w), p(v, w);
    }, g = (v) => {
      var w = ze(), m = fe(w), z = (I) => {
        {
          let V = d(() => {
            var T, q;
            return (q = (T = o()) == null ? void 0 : T.inventoryQuantity) != null ? q : null;
          });
          wd(I, { get lowStockAlert() {
            return s().lowStockAlert;
          }, get inventoryQuantity() {
            return e(V);
          } });
        }
      };
      O(m, (I) => {
        s().lowStockAlertEnabled && s().lowStockAlert && I(z);
      }, !0), p(v, w);
    };
    O(h, (v) => {
      e(l) ? v(f) : v(g, !1);
    }), p(n, u);
    var b = lt(i);
    return a(), b;
  }
  Je(ca, { dealBlock: {}, variant: {} }, [], [], !0);
  var Df = $('<div class="kaching-bundles__bar-sold-out-badge"><!></div>');
  function Ii(n, t) {
    it(t, !0);
    const [r, a] = vt(), s = k(t, "showAsSoldOut", 7), o = k(t, "replaceLiquid", 7), c = Mt(), l = d(() => o()($e(c, "$translate", r)(s().label)));
    var i = { get showAsSoldOut() {
      return s();
    }, set showAsSoldOut(f) {
      s(f), _();
    }, get replaceLiquid() {
      return o();
    }, set replaceLiquid(f) {
      o(f), _();
    } }, u = Df();
    Ge(y(u), () => e(l)), x(u), p(n, u);
    var h = lt(i);
    return a(), h;
  }
  Je(Ii, { showAsSoldOut: {}, replaceLiquid: {} }, [], [], !0);
  const hl = (n) => {
    const { opacity: t, backgroundColor: r, textColor: a, textSize: s } = n;
    return pn({ "kaching-bundles-show-as-sold-out-opacity": t.toString(), "kaching-bundles-show-as-sold-out-background-color": Ne(r), "kaching-bundles-show-as-sold-out-text-color": Ne(a), "kaching-bundles-show-as-sold-out-text-size": s + "px" });
  };
  var Vf = $('<img alt="Decrease"/>'), Af = $('<img alt="Increase"/>'), Tf = $('<div class="kaching-bundles__quantity-selector"><!> <input type="number" class="kaching-bundles__quantity-selector__input" step="1"/> <!></div>');
  function pl(n, t) {
    it(t, !0);
    const [r, a] = vt();
    let s = k(t, "value", 7), o = k(t, "onChange", 7), c = k(t, "min", 7, 1);
    const l = Mt(), i = d(() => s() <= c());
    var u = { get value() {
      return s();
    }, set value(v) {
      s(v), _();
    }, get onChange() {
      return o();
    }, set onChange(v) {
      o(v), _();
    }, get min() {
      return c();
    }, set min(v = 1) {
      c(v), _();
    } }, h = Tf(), f = y(h);
    {
      let v = d(() => ["kaching-bundles__quantity-selector__button", e(i) && "kaching-bundles__quantity-selector__button--disabled"]);
      Wt(f, { element: "div", get class() {
        return e(v);
      }, onclick: function(w) {
        w.stopPropagation(), o()(Math.max(s() - 1, c()));
      }, get disabled() {
        return e(i);
      }, children: (w, m) => {
        var z = Vf();
        ve(() => Ie(z, "src", Hu)), p(w, z);
      }, $$slots: { default: !0 } });
    }
    var g = L(f, 2);
    aa(g), Wt(L(g, 2), { element: "div", class: "kaching-bundles__quantity-selector__button", onclick: function(v) {
      v.stopPropagation(), o()(s() + 1);
    }, children: (v, w) => {
      var m = Af();
      ve(() => Ie(m, "src", Zu)), p(v, m);
    }, $$slots: { default: !0 } }), x(h), ve((v) => {
      Ie(g, "aria-label", v), Na(g, s()), Ie(g, "min", c());
    }, [() => $e(l, "$translate", r)("system.quantity")]), Nl("blur", g, function(v) {
      const w = v.target, m = parseInt(w.value);
      o()(isNaN(m) ? c() : Math.max(m, c()));
    }), p(n, h);
    var b = lt(u);
    return a(), b;
  }
  function qf(n, t) {
    n.target === n.currentTarget && t()();
  }
  Je(pl, { value: {}, onChange: {}, min: {} }, [], [], !0);
  var Gf = $('<div class="kaching-bundles"><div class="kaching-bundles__choose-multiple-gifts-modal" role="none"><div class="kaching-bundles__choose-multiple-gifts-modal__content"><!></div></div></div>');
  function Pd(n, t) {
    it(t, !0);
    const r = k(t, "dealBlock", 7), a = k(t, "multipleGiftsSelector", 7), s = k(t, "products", 23, () => []), o = k(t, "initialSelectedGifts", 7), c = k(t, "isOpen", 7), l = k(t, "onConfirm", 7), i = k(t, "onClose", 7);
    var u = { get dealBlock() {
      return r();
    }, set dealBlock(b) {
      r(b), _();
    }, get multipleGiftsSelector() {
      return a();
    }, set multipleGiftsSelector(b) {
      a(b), _();
    }, get products() {
      return s();
    }, set products(b = []) {
      s(b), _();
    }, get initialSelectedGifts() {
      return o();
    }, set initialSelectedGifts(b) {
      o(b), _();
    }, get isOpen() {
      return c();
    }, set isOpen(b) {
      c(b), _();
    }, get onConfirm() {
      return l();
    }, set onConfirm(b) {
      l(b), _();
    }, get onClose() {
      return i();
    }, set onClose(b) {
      i(b), _();
    } }, h = ze(), f = fe(h), g = (b) => {
      gl(b, { target: "body", children: (v, w) => {
        var m = Gf(), z = y(m);
        z.__click = [qf, i];
        var I = y(z);
        oo(y(I), { get dealBlock() {
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
        } }), x(I), x(z), x(m), ve((V) => Gt(z, V), [() => (function(V) {
          var T;
          return pn({ "kaching-choose-multiple-gifts-overlay-color": Ne(((T = V.chooseMultipleGiftsModal) == null ? void 0 : T.overlayColor) || Pp) });
        })(r())]), p(v, m);
      }, $$slots: { default: !0 } });
    };
    return O(f, (b) => {
      c() && b(g);
    }), p(n, h), lt(u);
  }
  jn(["click"]), Je(Pd, { dealBlock: {}, multipleGiftsSelector: {}, products: {}, initialSelectedGifts: {}, isOpen: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var Of = An('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 5.33337V10.6667M5.33398 8.00004H10.6673M14.6673 8.00004C14.6673 11.6819 11.6825 14.6667 8.00065 14.6667C4.31875 14.6667 1.33398 11.6819 1.33398 8.00004C1.33398 4.31814 4.31875 1.33337 8.00065 1.33337C11.6825 1.33337 14.6673 4.31814 14.6673 8.00004Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Sd(n) {
    p(n, Of());
  }
  Je(Sd, {}, [], [], !0);
  var Ff = $('<img alt="" class="kaching-bundles__multiple-gifts-selector__photo"/>'), Lf = $('<span class="kaching-bundles__multiple-gifts-selector__photo-count"> </span>'), jf = $('<div class="kaching-bundles__multiple-gifts-selector__photos"><!> <!></div>'), Ef = $('<img alt="" class="kaching-bundles__free-gift__image"/>'), Rf = $('<div class="kaching-bundles__free-gift__image"></div>'), Nf = $('<span class="kaching-bundles__free-gift__text"><!></span>'), Qf = $('<span class="kaching-bundles__free-gift__add-button"><!></span>'), Wf = $('<div class="kaching-bundles__free-gift__full-price"><!></div>'), Uf = $('<div class="kaching-bundles__multiple-gifts-selector kaching-bundles__free-gift"><!> <div class="kaching-bundles__free-gift__main"><!> <span class="kaching-bundles__free-gift__content"><!> <!></span></div> <!> <!></div>');
  function Bd(n, t) {
    it(t, !0);
    const r = () => $e(b, "$formatPrice", s), a = () => $e(v, "$translate", s), [s, o] = vt();
    let c = k(t, "dealBlock", 7), l = k(t, "multipleGiftsSelector", 7), i = k(t, "selectedVariants", 7), u = k(t, "otherProducts", 7), h = k(t, "onConfirm", 7), f = Ve(!1);
    const g = d(() => (l().products || []).flatMap((C) => {
      const j = Nt(C.id), W = u().find((le) => le.id === j);
      if (!W || !W.availableForSale) return [];
      const X = mr(W);
      if (C.variantGIDs && C.variantGIDs.length > 0) {
        const le = C.variantGIDs.map(Nt);
        return { ...X, variants: X.variants.filter((A) => le.includes(A.id)) };
      }
      return X;
    })), b = gn(), v = Mt(), w = En(), m = d(() => vo({ dealBlock: c(), imageSize: l().imageSize })), z = d(() => {
      if (l().mediaImageGID) return $e(w, "$getMediaImageUrl", s)(l().mediaImageGID);
    }), I = d(() => l().showProductPhotos === !0), V = d(() => i().flatMap((C) => Array.from({ length: C.quantity }, () => C.variant.image || C.product.image)).filter((C) => !!C)), T = d(() => e(V).slice(0, 3)), q = d(() => e(V).length - e(T).length), ee = d(() => i().reduce((C, j) => C + j.quantity, 0)), H = d(() => e(ee) >= l().maxQuantity), D = d(() => (function(C, j) {
      if (!j.length) return 0;
      let W = j.reduce((X, le) => X + le.fullPrice * le.quantity, 0);
      return j.some((X) => X.variant.compareAtPrice) && C.useProductCompareAtPrice && (W = Math.max(W, j.reduce((X, le) => X + (le.variant.compareAtPrice || 0), 0))), W;
    })(c(), i())), ne = d(() => new Map((l().products || []).flatMap((C) => {
      const j = u().find((W) => W.id === Nt(C.id));
      return j ? [[j.id, j]] : [];
    }))), B = d(() => i().flatMap((C) => Array.from({ length: C.quantity }, () => C.product.title))), N = d(() => hn({ priceFormatter: r(), product: void 0, products: e(ne), selectedProductTitles: e(B), totalFullPrice: e(D), totalDiscountedPrice: 0, quantity: e(ee), unitQuantity: null })), se = d(() => e(H) ? e(N)(a()(l().textAfterSelection)) : e(N)(a()(l().textBeforeSelection)));
    var S = { get dealBlock() {
      return c();
    }, set dealBlock(C) {
      c(C), _();
    }, get multipleGiftsSelector() {
      return l();
    }, set multipleGiftsSelector(C) {
      l(C), _();
    }, get selectedVariants() {
      return i();
    }, set selectedVariants(C) {
      i(C), _();
    }, get otherProducts() {
      return u();
    }, set otherProducts(C) {
      u(C), _();
    }, get onConfirm() {
      return h();
    }, set onConfirm(C) {
      h(C), _();
    } }, Z = Uf(), M = y(Z);
    {
      let C = d(() => {
        var j;
        return (j = e(se)) == null ? void 0 : j.replace(/<[^>]*>/g, "");
      });
      Wt(M, { element: "span", class: "kaching-bundles__multiple-gifts-selector__clickable-overlay", get "aria-label"() {
        return e(C);
      }, onclick: () => ae(f, !0) });
    }
    var P = L(M, 2), R = y(P), Q = (C) => {
      var j = jf(), W = y(j);
      Vt(W, 17, () => e(T), Vr, (A, re) => {
        var ue = Ff();
        ve(() => Ie(ue, "src", e(re))), p(A, ue);
      });
      var X = L(W, 2), le = (A) => {
        var re = Lf(), ue = y(re);
        x(re), ve(() => {
          var _e;
          return ft(ue, `+${(_e = e(q)) != null ? _e : ""}`);
        }), p(A, re);
      };
      O(X, (A) => {
        e(q) > 0 && A(le);
      }), x(j), p(C, j);
    }, K = (C) => {
      var j = ze(), W = fe(j), X = (A) => {
        var re = Ef();
        ve(() => {
          Ie(re, "src", e(z)), Ie(re, "height", l().imageSize || 0);
        }), p(A, re);
      }, le = (A) => {
        var re = ze(), ue = fe(re), _e = (ge) => {
          var ke = Rf();
          let pe;
          ve((Ce) => pe = Gt(ke, "", pe, Ce), [() => {
            var Ce;
            return { height: `${(Ce = l().imageSize) != null ? Ce : ""}px` };
          }]), p(ge, ke);
        };
        O(ue, (ge) => {
          l().imageSize && ge(_e);
        }, !0), p(A, re);
      };
      O(W, (A) => {
        e(z) ? A(X) : A(le, !1);
      }, !0), p(C, j);
    };
    O(R, (C) => {
      e(I) && e(T).length > 0 ? C(Q) : C(K, !1);
    });
    var ce = L(R, 2), F = y(ce), G = (C) => {
      var j = ze();
      st(fe(j), () => e(se), (W) => {
        var X = Nf();
        Ge(y(X), () => e(se)), x(X), p(W, X);
      }), p(C, j);
    };
    O(F, (C) => {
      e(se) && C(G);
    });
    var U = L(F, 2), te = (C) => {
      var j = Qf();
      Sd(y(j)), x(j), p(C, j);
    };
    O(U, (C) => {
      e(H) || C(te);
    }), x(ce), x(P);
    var E = L(P, 2), ie = (C) => {
      var j = ze();
      st(fe(j), () => e(D), (W) => {
        var X = Wf();
        Ge(y(X), () => r()(e(D))), x(X), p(W, X);
      }), p(C, j);
    };
    O(E, (C) => {
      l().showPrice && e(D) > 0 && C(ie);
    }), Pd(L(E, 2), { get dealBlock() {
      return c();
    }, get multipleGiftsSelector() {
      return l();
    }, get isOpen() {
      return e(f);
    }, get products() {
      return e(g);
    }, get initialSelectedGifts() {
      return i();
    }, get onConfirm() {
      return h();
    }, onClose: () => ae(f, !1) }), x(Z), ve(() => {
      Ie(Z, "data-multiple-gifts-selector-id", l().id), Gt(Z, e(m));
    }), p(n, Z);
    var J = lt(S);
    return o(), J;
  }
  Je(Bd, { dealBlock: {}, multipleGiftsSelector: {}, selectedVariants: {}, otherProducts: {}, onConfirm: {} }, [], [], !0);
  var Hf = $('<div class="kaching-bundles__free-gift__divider"></div>'), Zf = $("<!> <!>", 1);
  function Mi(n, t) {
    it(t, !0);
    let r = k(t, "dealBlock", 7), a = k(t, "multipleGiftsSelectors", 7), s = k(t, "sellingPlan", 7), o = k(t, "otherProducts", 7), c = k(t, "onChange", 7), l = Ve(ct({})), i = d(() => a().filter((g) => !g.applyOnlyForSubscriptions || s()));
    function u(g, b) {
      const v = a().find((w) => w.id === g);
      v && (b.reduce((w, m) => w + m.quantity, 0) > v.maxQuantity || (e(l)[g] = b));
    }
    tt(() => {
      const g = new Set(e(i).map((v) => v.id)), b = Object.entries(e(l)).filter(([v]) => g.has(v)).flatMap(([v, w]) => {
        const m = e(i).find((I) => I.id === v), z = (m == null ? void 0 : m.includeInCompareAt) === !0;
        return w.map((I) => ({ id: I.id, quantity: I.quantity, variant: I.variant, product: I.product, fullPrice: I.fullPrice, includeInCompareAt: z }));
      });
      c()(b);
    });
    var h = { get dealBlock() {
      return r();
    }, set dealBlock(g) {
      r(g), _();
    }, get multipleGiftsSelectors() {
      return a();
    }, set multipleGiftsSelectors(g) {
      a(g), _();
    }, get sellingPlan() {
      return s();
    }, set sellingPlan(g) {
      s(g), _();
    }, get otherProducts() {
      return o();
    }, set otherProducts(g) {
      o(g), _();
    }, get onChange() {
      return c();
    }, set onChange(g) {
      c(g), _();
    } }, f = ze();
    return Vt(fe(f), 19, () => e(i), (g) => g.id, (g, b, v) => {
      var w = Zf(), m = fe(w);
      {
        let V = d(() => e(l)[e(b).id] || []);
        Bd(m, { get dealBlock() {
          return r();
        }, get multipleGiftsSelector() {
          return e(b);
        }, get selectedVariants() {
          return e(V);
        }, onConfirm: u, get otherProducts() {
          return o();
        } });
      }
      var z = L(m, 2), I = (V) => {
        p(V, Hf());
      };
      O(z, (V) => {
        e(v) < e(i).length - 1 && V(I);
      }), p(g, w);
    }), p(n, f), lt(h);
  }
  Je(Mi, { dealBlock: {}, multipleGiftsSelectors: {}, sellingPlan: {}, otherProducts: {}, onChange: {} }, [], [], !0);
  const Po = (n, t) => n.unlockAtBarOnly ? t === n.unlockAtBar : t >= n.unlockAtBar, Cd = (n, t) => !!n.applyOnlyForSubscriptions && !t;
  var Jf = An('<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.584 21H42.834V14C42.834 6.279 36.555 0 28.834 0C21.113 0 14.834 6.279 14.834 14V21H13.084C10.1907 21 7.83398 23.3543 7.83398 26.25V50.75C7.83398 53.6457 10.1907 56 13.084 56H44.584C47.4773 56 49.834 53.6457 49.834 50.75V26.25C49.834 23.3543 47.4773 21 44.584 21ZM19.5007 14C19.5007 8.85267 23.6867 4.66667 28.834 4.66667C33.9813 4.66667 38.1673 8.85267 38.1673 14V21H19.5007V14ZM31.1673 39.018V44.3333C31.1673 45.6213 30.1243 46.6667 28.834 46.6667C27.5436 46.6667 26.5007 45.6213 26.5007 44.3333V39.018C25.1123 38.2083 24.1673 36.7197 24.1673 35C24.1673 32.4263 26.2603 30.3333 28.834 30.3333C31.4076 30.3333 33.5007 32.4263 33.5007 35C33.5007 36.7197 32.5557 38.2083 31.1673 39.018Z" fill="currentColor" transform="translate(21.5, 22)"></path></svg>');
  function Id(n) {
    p(n, Jf());
  }
  Je(Id, {}, [], [], !0);
  var Yf = $('<img alt="" class="kaching-bundles__deal-bar-progressive-gift__image"/>'), Kf = $('<img class="kaching-bundles__deal-bar-progressive-gift__image kaching-bundles__deal-bar-progressive-gift__image--locked-product"/>'), Xf = $('<span class="kaching-bundles__deal-bar-progressive-gift__lock-icon kaching-bundles__deal-bar-progressive-gift__image"><!></span>'), ev = $('<img class="kaching-bundles__deal-bar-progressive-gift__image"/>'), tv = $('<span class="kaching-bundles__deal-bar-progressive-gift__text"><!></span>'), nv = $('<span class="kaching-bundles__deal-bar-progressive-gift__text"><!></span>'), rv = $('<span class="kaching-bundles__deal-bar-progressive-gift__label-crossed-out"><!></span>'), av = $('<span class="kaching-bundles__deal-bar-progressive-gift__label"><!> <!></span>'), iv = $('<div><div class="kaching-bundles__deal-bar-progressive-gift__main"><!> <div class="kaching-bundles__deal-bar-progressive-gift__content"><!> <!></div></div> <!></div>');
  function Md(n, t) {
    it(t, !0);
    const r = () => $e(z, "$config", o), a = () => $e(v, "$translate", o), s = () => $e(m, "$getMediaImageUrl", o), [o, c] = vt(), l = k(t, "progressiveGifts", 7), i = k(t, "gift", 7), u = k(t, "product", 7), h = k(t, "selectedDealBarIndex", 7), f = k(t, "sellingPlan", 7), g = k(t, "selected", 7), b = k(t, "onChange", 7), v = Mt(), w = gn(), m = En(), z = vn(), I = d(() => i().differentVariantsEnabled), V = d(() => {
      var E;
      return u() ? i().variantGIDs ? i().variantGIDs.map(Nt) : (E = u()) == null ? void 0 : E.variants.map((ie) => ie.id) : null;
    }), T = d(() => {
      if (u()) return { ...u(), variants: u().variants.filter((E) => (r().preview || E.availableForSale) && (!e(V) || e(V).includes(E.id))) };
    });
    let q = Ve(ct([]));
    const ee = d(() => (function(E, ie, J) {
      return E.length > 0 ? E : ie != null && ie.availableForSale && ie.variants.length > 0 ? Array.from({ length: J }, () => ie.variants[0].id) : [];
    })(e(q), e(T), i().quantity)), H = d(() => u() && e(ee).length > 0 ? e(ee).map((E) => u().variants.find((ie) => ie.id === E)).filter((E) => E !== void 0) : []), D = d(() => {
      var E;
      return hn({ priceFormatter: $e(w, "$formatPrice", o), product: u(), totalFullPrice: ((E = e(H)) == null ? void 0 : E.reduce((ie, J) => {
        var C;
        return ie + ((C = J == null ? void 0 : J.price) != null ? C : 0);
      }, 0)) || 0, totalDiscountedPrice: 0, quantity: i().quantity, unitQuantity: xr(e(H).map((ie) => ({ variant: ie, quantity: 1 }))) });
    }), ne = d(() => e(D)(a()(i().title))), B = d(() => e(D)(a()(i().lockedTitle))), N = d(() => e(D)(a()(i().label))), se = d(() => e(D)(a()(i().labelCrossedOut))), S = d(() => h() === null || !Po(i(), h() + 1) || Cd(i(), f())), Z = d(() => {
      var E, ie, J;
      return i().giftType === "shipping" ? _o : ((ie = (E = e(H)) == null ? void 0 : E[0]) == null ? void 0 : ie.image) || ((J = u()) == null ? void 0 : J.image);
    }), M = d(() => i().mediaImageGID ? s()(i().mediaImageGID) : e(Z)), P = d(() => l().dealBarStyle && s()(l().dealBarStyle.lockedMediaImageGID)), R = d(() => l().showLockedGiftProducts && !e(P)), Q = d(() => e(R) && !!e(M));
    tt(() => {
      if (g()) if (u() && e(H) && !e(S)) {
        const E = Object.values(e(H).reduce((ie, J) => (ie[J.id] ? ie[J.id].quantity += 1 : ie[J.id] = { variant: J, quantity: 1 }, ie), {}));
        Jt(() => b()({ product: u(), variants: E }));
      } else Jt(() => b()(void 0));
      else Jt(() => b()(void 0));
    }), fr(() => {
      i().productGID, ae(q, [], !0);
    }), tt(() => {
      e(S) && e(M) && (new Image().src = e(M));
    });
    const K = d(() => {
      var E;
      return i().giftType === "product" && !((E = u()) != null && E.availableForSale);
    });
    var ce = { get progressiveGifts() {
      return l();
    }, set progressiveGifts(E) {
      l(E), _();
    }, get gift() {
      return i();
    }, set gift(E) {
      i(E), _();
    }, get product() {
      return u();
    }, set product(E) {
      u(E), _();
    }, get selectedDealBarIndex() {
      return h();
    }, set selectedDealBarIndex(E) {
      h(E), _();
    }, get sellingPlan() {
      return f();
    }, set sellingPlan(E) {
      f(E), _();
    }, get selected() {
      return g();
    }, set selected(E) {
      g(E), _();
    }, get onChange() {
      return b();
    }, set onChange(E) {
      b(E), _();
    } }, F = ze(), G = fe(F), U = (E) => {
      var ie = ze(), J = fe(ie), C = (j) => {
        var W = iv();
        let X;
        var le = y(W), A = y(le), re = (Ae) => {
          var Oe = ze(), Te = fe(Oe), Y = (Me) => {
            var he = Yf();
            ve(() => Ie(he, "src", e(P))), p(Me, he);
          }, ye = (Me) => {
            var he = ze(), Pe = fe(he), De = (me) => {
              var qe = Kf();
              ve(() => {
                var Ue, Ye;
                Ie(qe, "src", e(M)), Ie(qe, "alt", (Ye = (Ue = u()) == null ? void 0 : Ue.title) != null ? Ye : "");
              }), p(me, qe);
            }, we = (me) => {
              var qe = ze(), Ue = fe(qe), Ye = (at) => {
                var rt = Xf();
                Id(y(rt)), x(rt), p(at, rt);
              };
              O(Ue, (at) => {
                e(R) || at(Ye);
              }, !0), p(me, qe);
            };
            O(Pe, (me) => {
              e(Q) ? me(De) : me(we, !1);
            }, !0), p(Me, he);
          };
          O(Te, (Me) => {
            e(P) ? Me(Y) : Me(ye, !1);
          }), p(Ae, Oe);
        }, ue = (Ae) => {
          var Oe = ze(), Te = fe(Oe), Y = (ye) => {
            var Me = ev();
            ve(() => {
              var he, Pe;
              Ie(Me, "src", e(M)), Ie(Me, "alt", (Pe = (he = u()) == null ? void 0 : he.title) != null ? Pe : "");
            }), p(ye, Me);
          };
          O(Te, (ye) => {
            e(M) && ye(Y);
          }, !0), p(Ae, Oe);
        };
        O(A, (Ae) => {
          e(S) ? Ae(re) : Ae(ue, !1);
        });
        var _e = L(A, 2), ge = y(_e), ke = (Ae) => {
          var Oe = tv();
          Ge(y(Oe), () => e(B)), x(Oe), p(Ae, Oe);
        }, pe = (Ae) => {
          var Oe = ze(), Te = fe(Oe), Y = (ye) => {
            var Me = nv();
            Ge(y(Me), () => e(ne)), x(Me), p(ye, Me);
          };
          O(Te, (ye) => {
            e(ne) && ye(Y);
          }, !0), p(Ae, Oe);
        };
        O(ge, (Ae) => {
          e(S) && !e(R) ? Ae(ke) : Ae(pe, !1);
        });
        var Ce = L(ge, 2), oe = (Ae) => {
          var Oe = ze();
          Vt(fe(Oe), 17, () => ({ length: e(I) ? i().quantity : 1 }), Vr, (Te, Y, ye) => {
            var Me = ze(), he = fe(Me), Pe = (De) => {
              {
                let we = d(() => e(I) ? ye + 1 : void 0);
                Jn(De, { get product() {
                  return e(T);
                }, get selectedVariantId() {
                  return e(ee)[ye];
                }, get number() {
                  return e(we);
                }, forceDropdown: !0, onChange: (me) => (function(qe, Ue) {
                  e(I) ? ae(q, [...e(ee).slice(0, Ue), qe, ...e(ee).slice(Ue + 1)], !0) : ae(q, Array.from({ length: i().quantity }, () => qe), !0);
                })(me, ye) });
              }
            };
            O(he, (De) => {
              e(ee)[ye] !== void 0 && De(Pe);
            }), p(Te, Me);
          }), p(Ae, Oe);
        };
        O(Ce, (Ae) => {
          g() && !e(S) && e(T) && e(T).variants.length > 1 && e(ee).length > 0 && Ae(oe);
        }), x(_e), x(le);
        var xe = L(le, 2), Fe = (Ae) => {
          var Oe = ze(), Te = fe(Oe), Y = (ye) => {
            var Me = av(), he = y(Me), Pe = (me) => {
              var qe = ze();
              Ge(fe(qe), () => e(N)), p(me, qe);
            };
            O(he, (me) => {
              e(N) && me(Pe);
            });
            var De = L(he, 2), we = (me) => {
              var qe = rv();
              Ge(y(qe), () => e(se)), x(qe), p(me, qe);
            };
            O(De, (me) => {
              e(se) && me(we);
            }), x(Me), p(ye, Me);
          };
          O(Te, (ye) => {
            e(S) && !l().showLockedGiftLabels || ye(Y);
          }), p(Ae, Oe);
        };
        O(xe, (Ae) => {
          (e(N) || e(se)) && Ae(Fe);
        }), x(W), ve((Ae) => X = Et(W, 1, "kaching-bundles__deal-bar-progressive-gift", null, X, Ae), [() => ({ "kaching-bundles__deal-bar-progressive-gift--locked": e(S), "kaching-bundles__deal-bar-progressive-gift--out-of-stock": r().preview && e(K) })]), p(j, W);
      };
      O(J, (j) => {
        var W;
        (u() && ((W = e(H)) != null && W.length) || i().giftType === "shipping") && j(C);
      }), p(E, ie);
    };
    O(G, (E) => {
      e(S) && l().hideLockedGifts || E(U);
    }), p(n, F);
    var te = lt(ce);
    return c(), te;
  }
  Je(Md, { progressiveGifts: {}, gift: {}, product: {}, selectedDealBarIndex: {}, sellingPlan: {}, selected: {}, onChange: {} }, [], [], !0);
  var lv = $('<div class="kaching-bundles__deal-bar-progressive-gifts"></div>');
  function zi(n, t) {
    it(t, !0);
    const [r, a] = vt(), s = k(t, "progressiveGifts", 7), o = k(t, "dealBlock", 7), c = k(t, "dealBar", 7), l = k(t, "otherProducts", 7), i = k(t, "selectedDealBarIndex", 7), u = k(t, "sellingPlan", 7), h = k(t, "selected", 7), f = k(t, "onChange", 7), g = d(() => o().dealBars.findIndex((D) => D.id === c().id)), b = vn();
    let v = Ve(ct({}));
    const w = d(() => {
      var D, ne;
      return ((B) => B ? pn({ "kaching-deal-bar-progressive-gift-image-size": B.imageSize + "px", "kaching-deal-bar-progressive-gift-corner-radius": B.cornerRadius + "px", "kaching-deal-bar-progressive-gift-label-background-color": Ne(B.labelBackgroundColor), "kaching-deal-bar-progressive-gift-label-text-color": Ne(B.labelTextColor), "kaching-deal-bar-progressive-gift-label-text-size": B.labelTextSize + "px", "kaching-deal-bar-progressive-gift-text-color": Ne(B.textColor), "kaching-deal-bar-progressive-gift-selected-text-color": Ne(B.selectedTextColor), "kaching-deal-bar-progressive-gift-text-size": B.textSize + "px", "kaching-deal-bar-progressive-gift-locked-label-background-color": Ne(B.lockedLabelBackgroundColor), "kaching-deal-bar-progressive-gift-locked-label-text-color": Ne(B.lockedLabelTextColor), "kaching-deal-bar-progressive-gift-locked-label-text-size": B.lockedLabelTextSize + "px", "kaching-deal-bar-progressive-gift-locked-text-color": Ne(B.lockedTextColor), "kaching-deal-bar-progressive-gift-locked-text-size": B.lockedTextSize + "px", "kaching-deal-bar-progressive-gift-locked-icon-color": Ne(B.lockedIconColor) }) : "")((ne = (D = o().progressiveGifts) == null ? void 0 : D.dealBarStyle) != null ? ne : null);
    });
    function m() {
      const D = Object.entries(e(v)).map(([ne, B]) => ({ id: ne, variants: B.variants, product: B.product }));
      f()(D);
    }
    const z = d(() => {
      var D, ne, B;
      return (B = (ne = (D = s()) == null ? void 0 : D.gifts) == null ? void 0 : ne.filter((N) => Po(N, e(g) + 1))) != null ? B : [];
    }), I = d(() => e(z).flatMap((D) => {
      const ne = D.giftType === "product" && D.productGID ? l().find((N) => N.id === Nt(D.productGID)) : void 0;
      if (!$e(b, "$config", r).preview && D.giftType === "product" && !(ne != null && ne.availableForSale)) return [];
      const B = ne && mr(ne);
      return { gift: D, product: B };
    }));
    tt(() => {
      const D = new Set(e(z).map((B) => B.id)), ne = Object.keys(e(v)).filter((B) => !D.has(B));
      if (ne.length) {
        for (const B of ne) delete e(v)[B];
        h() && m();
      }
    });
    var V = { get progressiveGifts() {
      return s();
    }, set progressiveGifts(D) {
      s(D), _();
    }, get dealBlock() {
      return o();
    }, set dealBlock(D) {
      o(D), _();
    }, get dealBar() {
      return c();
    }, set dealBar(D) {
      c(D), _();
    }, get otherProducts() {
      return l();
    }, set otherProducts(D) {
      l(D), _();
    }, get selectedDealBarIndex() {
      return i();
    }, set selectedDealBarIndex(D) {
      i(D), _();
    }, get sellingPlan() {
      return u();
    }, set sellingPlan(D) {
      u(D), _();
    }, get selected() {
      return h();
    }, set selected(D) {
      h(D), _();
    }, get onChange() {
      return f();
    }, set onChange(D) {
      f(D), _();
    } }, T = ze(), q = fe(T), ee = (D) => {
      var ne = lv();
      Vt(ne, 21, () => e(I), ({ gift: B, product: N }) => B.id, (B, N) => {
        let se = () => e(N).gift;
        Md(B, { get selectedDealBarIndex() {
          return i();
        }, get selected() {
          return h();
        }, get gift() {
          return se();
        }, get product() {
          return e(N).product;
        }, get progressiveGifts() {
          return s();
        }, get sellingPlan() {
          return u();
        }, onChange: (S) => (function(Z, M) {
          M ? e(v)[Z] = M : delete e(v)[Z], h() && m();
        })(se().id, S) });
      }), x(ne), ve(() => Gt(ne, e(w))), p(D, ne);
    };
    O(q, (D) => {
      var ne;
      o().progressiveGiftsEnabled && ((ne = s()) == null ? void 0 : ne.layout) === "deal-bar" && e(I).length > 0 && D(ee);
    }), p(n, T);
    var H = lt(V);
    return a(), H;
  }
  Je(zi, { progressiveGifts: {}, dealBlock: {}, dealBar: {}, otherProducts: {}, selectedDealBarIndex: {}, sellingPlan: {}, selected: {}, onChange: {} }, [], [], !0);
  var sv = An('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function zd(n) {
    p(n, sv());
  }
  Je(zd, {}, [], [], !0);
  var ov = An('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3307 4L5.9974 11.3333L2.66406 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function $d(n) {
    p(n, ov());
  }
  Je($d, {}, [], [], !0);
  var cv = An('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>');
  function Dd(n) {
    p(n, cv());
  }
  Je(Dd, {}, [], [], !0);
  var uv = An('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Vd(n) {
    p(n, uv());
  }
  Je(Vd, {}, [], [], !0);
  var dv = An('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2787 3.45332C11.5092 2.98638 11.6245 2.75291 11.7809 2.67831C11.917 2.61341 12.0752 2.61341 12.2113 2.67831C12.3677 2.75291 12.483 2.98638 12.7135 3.45332L14.9002 7.88328C14.9682 8.02113 15.0022 8.09006 15.0519 8.14358C15.096 8.19096 15.1488 8.22935 15.2074 8.25662C15.2736 8.28742 15.3497 8.29854 15.5018 8.32077L20.3931 9.03571C20.9082 9.11099 21.1657 9.14863 21.2849 9.27444C21.3886 9.38389 21.4373 9.5343 21.4176 9.68377C21.3949 9.85558 21.2085 10.0372 20.8356 10.4004L17.2975 13.8464C17.1873 13.9538 17.1321 14.0076 17.0965 14.0715C17.065 14.128 17.0448 14.1902 17.037 14.2545C17.0282 14.3271 17.0412 14.403 17.0672 14.5547L17.9021 19.4221C17.9901 19.9355 18.0341 20.1922 17.9514 20.3445C17.8794 20.477 17.7514 20.57 17.6032 20.5975C17.4327 20.6291 17.2022 20.5078 16.7412 20.2654L12.3685 17.9658C12.2322 17.8942 12.1641 17.8584 12.0923 17.8443C12.0288 17.8318 11.9634 17.8318 11.8999 17.8443C11.8281 17.8584 11.76 17.8942 11.6237 17.9658L7.25102 20.2654C6.79001 20.5078 6.55951 20.6291 6.38907 20.5975C6.24078 20.57 6.11282 20.477 6.04083 20.3445C5.95809 20.1922 6.00212 19.9355 6.09017 19.4221L6.92498 14.5547C6.95101 14.403 6.96402 14.3271 6.95521 14.2545C6.94742 14.1902 6.92721 14.128 6.8957 14.0715C6.86012 14.0076 6.80497 13.9538 6.69468 13.8464L3.15665 10.4004C2.78376 10.0372 2.59731 9.85558 2.57462 9.68377C2.55488 9.5343 2.60365 9.38389 2.70734 9.27444C2.82653 9.14863 3.08407 9.11099 3.59914 9.03571L8.4904 8.32077C8.64252 8.29854 8.71857 8.28742 8.78481 8.25662C8.84346 8.22935 8.89626 8.19096 8.94028 8.14358C8.99 8.09006 9.02402 8.02113 9.09207 7.88328L11.2787 3.45332Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Ad(n) {
    p(n, dv());
  }
  Je(Ad, {}, [], [], !0);
  var gv = An('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Td(n) {
    p(n, gv());
  }
  Je(Td, {}, [], [], !0);
  const qd = { checkmark: $d, dot: Dd, arrow: zd, star: Ad, heart: Vd, "thumbs-up": Td };
  var hv = $('<span class="kaching-bundles__highlights__icon"><img alt=""/></span>'), pv = $('<span class="kaching-bundles__highlights__icon"><!></span>'), bv = $('<div class="kaching-bundles__highlights__item"><!> <span class="kaching-bundles__highlights__text"><!></span></div>'), fv = $("<div></div>");
  function Ba(n, t) {
    it(t, !0);
    const [r, a] = vt(), s = k(t, "highlights", 7), o = k(t, "isSelected", 7), c = k(t, "replaceLiquid", 7), l = En(), i = Mt(), u = d(() => s().items.map((T) => $e(i, "$translate", r)(T)).map((T) => c() ? c()(T) : T).filter((T) => T !== "")), h = d(() => ((T) => pn({ "kaching-highlights-icon-color": Ne(T.iconColor), "kaching-highlights-text-color": Ne(T.textColor), "kaching-highlights-icon-size": T.size + 2 + "px", "kaching-highlights-text-size": T.size + "px" }))(s())), f = d(() => {
      var T;
      return (T = s().layout) != null ? T : "vertical";
    }), g = d(() => {
      var T;
      return (T = s().iconType) != null ? T : "checkmark";
    }), b = d(() => qd[e(g)]), v = d(() => {
      var T;
      return e(g) === "custom" ? $e(l, "$getMediaImageUrl", r)((T = s().customIconGID) != null ? T : null) : void 0;
    });
    var w = { get highlights() {
      return s();
    }, set highlights(T) {
      s(T), _();
    }, get isSelected() {
      return o();
    }, set isSelected(T) {
      o(T), _();
    }, get replaceLiquid() {
      return c();
    }, set replaceLiquid(T) {
      c(T), _();
    } }, m = ze(), z = fe(m), I = (T) => {
      var q = fv();
      let ee;
      Vt(q, 21, () => e(u), Vr, (H, D) => {
        var ne = bv(), B = y(ne), N = (Z) => {
          var M = hv(), P = y(M);
          x(M), ve(() => Ie(P, "src", e(v))), p(Z, M);
        }, se = (Z) => {
          var M = ze(), P = fe(M), R = (Q) => {
            var K = pv();
            Jc(y(K), () => e(b), (ce, F) => {
              F(ce, {});
            }), x(K), p(Q, K);
          };
          O(P, (Q) => {
            e(b) && Q(R);
          }, !0), p(Z, M);
        };
        O(B, (Z) => {
          e(g) === "custom" && e(v) ? Z(N) : Z(se, !1);
        });
        var S = L(B, 2);
        Ge(y(S), () => e(D)), x(S), x(ne), p(H, ne);
      }), x(q), ve((H) => {
        ee = Et(q, 1, "kaching-bundles__highlights", null, ee, H), Gt(q, e(h));
      }, [() => ({ "kaching-bundles__highlights--horizontal": e(f) === "horizontal" })]), p(T, q);
    };
    O(z, (T) => {
      e(u).length > 0 && (!s().showOnlyWhenSelected || o()) && T(I);
    }), p(n, m);
    var V = lt(w);
    return a(), V;
  }
  function vv(n, t, r, a) {
    t()({ dealBarId: r().id, dealBarQuantity: a(r()), preselected: !1 });
  }
  Je(Ba, { highlights: {}, isSelected: {}, replaceLiquid: {} }, [], [], !0);
  var _v = $('<img class="kaching-bundles__bar-image" alt=""/>'), kv = $('<div class="kaching-bundles__bar-radio"></div>'), mv = $('<span class="kaching-bundles__bar-title"><!></span>'), xv = $('<span class="kaching-bundles__bar-label"><!></span>'), yv = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), wv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Pv = $('<div class="kaching-bundles__bar-price"><!></div>'), Sv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Bv = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), Cv = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), Iv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Mv = $('<div class="kaching-bundles__bar-unit-price"><!> </div>'), zv = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--primary"><!> <!></div> <div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!></div>', 1), $v = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Dv = $("<!> <!>", 1), Vv = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <div class="kaching-bundles__bar-second-line"><!> <!></div></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), Av = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), Tv = $('<div class="kaching-bundles__bar-variant-selector-wrapper"><!> <!></div>'), qv = $('<div class="kaching-bundles__bar-variants"><!> <!></div>'), Gv = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), Ov = $('<div><input type="radio"/> <!> <!></div>');
  function So(n, t) {
    it(t, !0);
    const r = () => $e(S, "$config", o), a = () => $e(N, "$formatPrice", o), s = () => $e(B, "$translate", o), [o, c] = vt();
    let l = k(t, "dealBlock", 7), i = k(t, "dealBar", 7), u = k(t, "product", 7), h = k(t, "otherProducts", 23, () => []), f = k(t, "complementaryProducts", 23, () => []), g = k(t, "customQuantity", 7, void 0), b = k(t, "currentVariantId", 7, void 0), v = k(t, "currentVariantSource", 7, void 0), w = k(t, "componentId", 7), m = k(t, "selected", 7, !1), z = k(t, "globalSellingPlan", 7, void 0), I = k(t, "selectedDealBarIndex", 7), V = k(t, "onProgressiveGiftsChange", 7), T = k(t, "onDealBarSelect", 7), q = k(t, "onDealBarDeselect", 7), ee = k(t, "onVariantSelect", 7), H = k(t, "onVariantsChange", 7), D = k(t, "onPersonalisationsChange", 7), ne = k(t, "personalisationInitialValues", 23, () => []);
    const B = Mt(), N = gn(), se = En(), S = vn();
    let Z = Ve(ct([])), M = Ve(ct([])), P = Ve(ct([]));
    const R = d(() => l().priceRounding ? { perItem: l().showPricesPerItem, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), Q = d(() => {
      var be, Ze;
      return l() && ((Ze = (be = l().defaultVariantsV2) == null ? void 0 : be.find((Ke) => Nt(Ke.productGID) === u().id && Ke.dealBarId === i().id)) == null ? void 0 : Ze.variantGIDs) || [];
    });
    let K = d(() => G(i())), ce = Ve(ct(G(i())));
    fr(() => {
      ae(ce, e(K), !0);
    });
    const F = d(() => g() || e(ce));
    function G(be) {
      return be.dealBarType === gt.Bxgy ? be.buyQuantity + be.getQuantity : Number(be.quantity);
    }
    let U, te = Ve(ct([])), E = Ve(ct([])), ie = !1;
    tt(() => {
      const be = (function(Ze, Ke, He) {
        let We = [];
        for (let Re = 0; Re < Ze; Re++) {
          let pt = Ke[Re];
          if (!pt && Ze > G(i()) && Ke.filter((nt) => nt).length === G(i()) && (pt = Ke[Ke.length - 1]), pt) {
            const nt = Nt(pt);
            if (u().variants.find((ut) => ut.id == nt)) {
              We.push(nt);
              continue;
            }
          }
          He && We.push(He);
        }
        return We;
      })(e(F), e(Q), b());
      if (JSON.stringify(e(te)) !== JSON.stringify(be)) {
        const Ze = e(te).length === be.length;
        ae(te, be, !0), e(E).length === 0 ? ae(E, be, !0) : Ze ? r().featureFlags.preserve_variant_selections && l().differentVariantsEnabled && new Set(e(E)).size !== 1 || r().featureFlags.propagate_picker_option_changes && v() === "bar" || ae(E, be, !0) : ae(E, (function(Ke, He) {
          const We = Ke[Ke.length - 1];
          if (Ke.length < He) {
            const Re = He - Ke.length;
            return [...Ke, ...Array(Re).fill(We)];
          }
          return Ke.slice(0, He);
        })(e(E), e(F)), !0);
      }
    }), tt(() => {
      if (!r().featureFlags.propagate_picker_option_changes) return;
      const be = b(), Ze = v(), Ke = U;
      be && (U = be), Ke && be && Ke !== be && Ze !== "bar" && (r().featureFlags.preserve_variant_selections && l().differentVariantsEnabled && ie || Jt(() => {
        ae(E, (function(He, We, Re) {
          const pt = e(C).get(We), nt = e(C).get(Re);
          if (!pt || !nt) return He;
          const ut = nt.options.flatMap((wt, ht) => wt === pt.options[ht] ? [] : [ht]);
          if (ut.length === 0) return He;
          let et = !1;
          const ot = He.map((wt) => {
            const ht = e(C).get(wt);
            if (!ht) return wt;
            const Ht = [...ht.options];
            for (const _n of ut) Ht[_n] = nt.options[_n];
            const Tn = Ou(u().variants, Ht);
            return Tn && Tn.id !== wt ? (et = !0, Tn.id) : wt;
          });
          return et ? ot : He;
        })(e(E), Ke, be), !0);
      }));
    });
    const J = d(() => qe(e(E))), C = d(() => new Map(u().variants.map((be) => [be.id, be])));
    let j = Ve(void 0);
    const W = d(() => sl(u(), e(J).map((be) => be.variant))), X = d(() => {
      var be, Ze;
      return (i().sellingPlanEnabled || l().subscriptionsEnabled && ((be = l().subscriptions) == null ? void 0 : be.layout) === "link" && ((Ze = l().subscriptions) == null ? void 0 : Ze.subscribeByDefault)) && (!l().subscriptionsEnabled || !!z());
    }), le = d(() => e(X) ? uo(i(), e(W), e(j)) : void 0), A = d(() => go(e(le), z(), e(W), u().requiresSellingPlan)), re = d(() => (function(be, Ze, Ke, He) {
      return Ke.map(({ variant: Re, quantity: pt }) => {
        let nt = (function(et, ot) {
          var wt;
          if (!ot) return et.price;
          const ht = et.sellingPlans.find((Ht) => Ht.id === ot.id);
          return ht && ht.perDeliveryPrice !== ht.price ? Math.max((wt = ht.compareAtPrice) != null ? wt : et.price, et.price) : et.price;
        })(Re, He);
        const ut = be.useProductCompareAtPrice || (Ze.dealBarType === void 0 || Ze.dealBarType === gt.QuantityBreak) && Ze.discountType === "default";
        return Re.compareAtPrice && ut && (nt = Math.max(nt, Re.compareAtPrice)), nt * pt;
      }).reduce((Re, pt) => Re + pt, 0);
    })(l(), i(), e(J), e(A))), ue = d(() => ul(e(re), e(Z), e(M))), _e = d(() => Math.ceil(e(re) / e(F))), ge = d(() => fo(e(F) === 1, e(ue), e(_e))), ke = d(() => l() && ye(e(J), e(A))), pe = d(() => e(J)[0] && so(e(J)[0].variant)), Ce = d(() => xr(e(J))), oe = d(() => e(Ce) ? e(ke) / e(Ce) : null), xe = d(() => hn({ priceFormatter: a(), product: u(), selectedVariants: e(J), totalFullPrice: e(re), totalCompareAtPrice: e(ue), totalDiscountedPrice: e(ke), quantity: e(F), dealBar: i(), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: e(Ce), sellingPlan: e(A) })), Fe = d(() => e(xe)(s()(i().title))), Ae = d(() => e(xe)(s()(i().subtitle))), Oe = d(() => e(xe)(s()(i().label))), Te = d(() => ol(l(), i()).map((be) => wa(be, s(), e(xe)))), Y = d(() => Pa(e(Te)));
    function ye(be, Ze) {
      switch (i().dealBarType) {
        case void 0:
        case gt.QuantityBreak:
          return ed(i(), be, r().currencyRate, e(R), Ze, r().featureFlags.percentage_cents_rounding_workaround);
        case gt.Bxgy:
          return td(i(), be, r().currencyRate, e(R), Ze);
      }
    }
    const Me = d(() => Math.ceil(e(ke) / e(F))), he = d(() => e(ue) > e(ke)), Pe = d(() => e(F) && (function(be) {
      return !be.differentVariantsEnabled || u().variants.length === 1 ? !1 : be.hideVariantPicker ? !0 : !(e(F) == 1 && !be.showVariantsForSingleQuantity);
    })(l())), De = d(() => r().featureFlags.variant_images && new Set(u().variants.map((be) => be.image).filter((be) => be)).size > 1), we = d(() => `${i().id}_${w()}`);
    function me(be) {
      m() && (be.preventDefault(), be.stopPropagation(), q()());
    }
    function qe(be) {
      return be.reduce((Ze, Ke) => {
        const He = Ze.find(({ variant: We }) => We.id === Ke);
        if (He) He.quantity += 1;
        else {
          const We = u().variants.find((Re) => Re.id === Ke);
          if (!We) return Ze;
          Ze.push({ variant: We, quantity: 1 });
        }
        return Ze;
      }, []);
    }
    Ra(() => {
      m() && T()({ dealBarId: i().id, dealBarQuantity: G(i()), preselected: !0 });
    });
    const Ue = d(() => $e(se, "$getMediaImageUrl", o)(i().mediaImageGID) || dl);
    tt(() => {
      m() && (e(E), e(P), e(Z), e(M), e(A), Jt(() => {
        (function() {
          if (!e(E).length) return;
          const be = qe(e(E)), Ze = e(ke) + e(P).reduce((nt, ut) => nt + ut.discountedPrice, 0), Ke = e(Z).reduce((nt, ut) => ut.showPrice ? nt + ut.fullPrice : nt, 0) + e(M).reduce((nt, ut) => nt + ut.fullPrice * ut.quantity, 0), He = e(re) + e(P).reduce((nt, ut) => nt + ut.fullPrice, 0) + Ke, We = ye(e(J), void 0), Re = u().sellingPlans.map((nt) => ({ sellingPlanId: nt.id, discountedPrice: ye(e(J), nt) })), pt = { discountedPrice: Ze, fullPrice: He, giftValue: Ke, discountedPricePerItem: e(Me), fullPricePerItem: e(_e), discountedPriceWithoutSellingPlan: We, discountedPricesForSellingPlans: Re };
          H()({ variants: be, freeGifts: [...e(Z), ...e(M)], upsells: e(P), dealBarSellingPlan: e(le), pricing: pt });
        })();
      }));
    });
    const Ye = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? hl(i().showAsSoldOut) : "");
    var at = { get dealBlock() {
      return l();
    }, set dealBlock(be) {
      l(be), _();
    }, get dealBar() {
      return i();
    }, set dealBar(be) {
      i(be), _();
    }, get product() {
      return u();
    }, set product(be) {
      u(be), _();
    }, get otherProducts() {
      return h();
    }, set otherProducts(be = []) {
      h(be), _();
    }, get complementaryProducts() {
      return f();
    }, set complementaryProducts(be = []) {
      f(be), _();
    }, get customQuantity() {
      return g();
    }, set customQuantity(be = void 0) {
      g(be), _();
    }, get currentVariantId() {
      return b();
    }, set currentVariantId(be = void 0) {
      b(be), _();
    }, get currentVariantSource() {
      return v();
    }, set currentVariantSource(be = void 0) {
      v(be), _();
    }, get componentId() {
      return w();
    }, set componentId(be) {
      w(be), _();
    }, get selected() {
      return m();
    }, set selected(be = !1) {
      m(be), _();
    }, get globalSellingPlan() {
      return z();
    }, set globalSellingPlan(be = void 0) {
      z(be), _();
    }, get selectedDealBarIndex() {
      return I();
    }, set selectedDealBarIndex(be) {
      I(be), _();
    }, get onProgressiveGiftsChange() {
      return V();
    }, set onProgressiveGiftsChange(be) {
      V(be), _();
    }, get onDealBarSelect() {
      return T();
    }, set onDealBarSelect(be) {
      T(be), _();
    }, get onDealBarDeselect() {
      return q();
    }, set onDealBarDeselect(be) {
      q(be), _();
    }, get onVariantSelect() {
      return ee();
    }, set onVariantSelect(be) {
      ee(be), _();
    }, get onVariantsChange() {
      return H();
    }, set onVariantsChange(be) {
      H(be), _();
    }, get onPersonalisationsChange() {
      return D();
    }, set onPersonalisationsChange(be) {
      D(be), _();
    }, get personalisationInitialValues() {
      return ne();
    }, set personalisationInitialValues(be = []) {
      ne(be), _();
    } }, rt = Ov();
    let Bt;
    var Dt = y(rt);
    aa(Dt), Dt.__change = [vv, T, i, G];
    var dt = L(Dt, 2);
    Ja(dt, { get for() {
      return e(we);
    }, get soldOut() {
      return i().showAsSoldOutEnabled;
    }, get borderHost() {
      return e(Y);
    }, children: (be, Ze) => {
      var Ke = Gv(), He = fe(Ke);
      Vt(He, 17, () => e(Te), (je) => je.id, (je, Xe) => {
        oa(je, { get badge() {
          return e(Xe);
        }, get blockLayout() {
          return l().blockLayout;
        } });
      });
      var We = L(He, 2), Re = y(We);
      Wt(Re, { element: "div", class: "kaching-bundles__bar-main", onclick: me, children: (je, Xe) => {
        var kt = Vv(), yt = fe(kt), Zt = (Tt) => {
          var It = _v();
          ve(() => Ie(It, "src", e(Ue))), p(Tt, It);
        }, Ct = (Tt) => {
          p(Tt, kv());
        };
        O(yt, (Tt) => {
          i().mediaImageGID ? Tt(Zt) : Tt(Ct, !1);
        });
        var zt = L(yt, 2), Qt = y(zt), cn = y(Qt), Ut = y(cn);
        st(Ut, () => e(Fe), (Tt) => {
          var It = mv();
          Ge(y(It), () => e(Fe)), x(It), p(Tt, It);
        });
        var Sn = L(Ut, 2), Yn = (Tt) => {
          var It = ze();
          st(fe(It), () => e(Oe), (ln) => {
            var sn = xv();
            Ge(y(sn), () => e(Oe)), x(sn), p(ln, sn);
          }), p(Tt, It);
        };
        O(Sn, (Tt) => {
          e(Oe) && Tt(Yn);
        }), x(cn);
        var kn = L(cn, 2), qn = y(kn), dr = (Tt) => {
          var It = ze();
          st(fe(It), () => e(Ae), (ln) => {
            var sn = yv();
            Ge(y(sn), () => e(Ae)), x(sn), p(ln, sn);
          }), p(Tt, It);
        };
        O(qn, (Tt) => {
          e(Ae) && Tt(dr);
        });
        var gr = L(qn, 2), mn = (Tt) => {
          {
            let It = d(() => {
              var ln, sn;
              return (sn = (ln = e(J)) == null ? void 0 : ln[0]) == null ? void 0 : sn.variant;
            });
            ca(Tt, { get dealBlock() {
              return l();
            }, get variant() {
              return e(It);
            } });
          }
        };
        O(gr, (Tt) => {
          e(Pe) || Tt(mn);
        }), x(kn), x(Qt);
        var Ot = L(Qt, 2), nn = y(Ot), Ft = (Tt) => {
          var It = Cv(), ln = fe(It), sn = y(ln);
          st(sn, () => e(Me), (Bn) => {
            Nr(Bn, { get amount() {
              return e(Me);
            }, get showPricesPerItem() {
              return l().showPricesPerItem;
            }, get unitLabel() {
              return l().unitLabel;
            } });
          });
          var on = L(sn, 2), bn = (Bn) => {
            var Rn = ze();
            st(fe(Rn), () => e(ge), (xn) => {
              var zn = wv();
              Ge(y(zn), () => a()(e(ge))), x(zn), ve((Cn) => Ie(zn, "data-a11y-label", Cn), [() => s()("system.original_price")]), p(xn, zn);
            }), p(Bn, Rn);
          };
          O(on, (Bn) => {
            e(he) && Bn(bn);
          }), x(ln);
          var Gn = L(ln, 2), On = (Bn) => {
            var Rn = Bv(), xn = y(Rn);
            st(xn, () => e(ke), (yn) => {
              var Qn = Pv();
              Ge(y(Qn), () => a()(e(ke))), x(Qn), ve((yr) => Ie(Qn, "data-a11y-label", yr), [() => s()("system.price")]), p(yn, Qn);
            });
            var zn = L(xn, 2), Cn = (yn) => {
              var Qn = ze();
              st(fe(Qn), () => e(ue), (yr) => {
                var wr = Sv();
                Ge(y(wr), () => a()(e(ue))), x(wr), ve((Ao) => Ie(wr, "data-a11y-label", Ao), [() => s()("system.original_price")]), p(yr, wr);
              }), p(yn, Qn);
            };
            O(zn, (yn) => {
              e(he) && yn(Cn);
            }), x(Rn), p(Bn, Rn);
          };
          O(Gn, (Bn) => {
            e(F) > 1 && Bn(On);
          }), p(Tt, It);
        }, Xt = (Tt) => {
          var It = ze(), ln = fe(It), sn = (bn) => {
            var Gn = zv(), On = fe(Gn), Bn = y(On);
            st(Bn, () => e(ke), (Cn) => {
              {
                let yn = d(() => l().showPricesPerItem ? e(Me) : e(ke));
                Nr(Cn, { get amount() {
                  return e(yn);
                }, get showPricesPerItem() {
                  return l().showPricesPerItem;
                }, get unitLabel() {
                  return l().unitLabel;
                } });
              }
            });
            var Rn = L(Bn, 2), xn = (Cn) => {
              var yn = ze();
              st(fe(yn), () => l().showPricesPerItem ? e(ge) : e(ue), (Qn) => {
                var yr = Iv();
                Ge(y(yr), () => a()(l().showPricesPerItem ? e(ge) : e(ue))), x(yr), ve((wr) => Ie(yr, "data-a11y-label", wr), [() => s()("system.original_price")]), p(Qn, yr);
              }), p(Cn, yn);
            };
            O(Rn, (Cn) => {
              e(he) && Cn(xn);
            }), x(On);
            var zn = L(On, 2);
            st(y(zn), () => e(oe), (Cn) => {
              var yn = Mv(), Qn = y(yn);
              Ge(Qn, () => a()(e(oe), { preserveDecimals: !0 }));
              var yr = L(Qn);
              x(yn), ve(() => {
                var wr;
                return ft(yr, ` /
                    ${(wr = e(pe)) != null ? wr : ""}`);
              }), p(Cn, yn);
            }), x(zn), p(bn, Gn);
          }, on = (bn) => {
            var Gn = Dv(), On = fe(Gn);
            st(On, () => e(ke), (xn) => {
              {
                let zn = d(() => l().showPricesPerItem ? e(Me) : e(ke));
                Nr(xn, { get amount() {
                  return e(zn);
                }, get showPricesPerItem() {
                  return l().showPricesPerItem;
                }, get unitLabel() {
                  return l().unitLabel;
                } });
              }
            });
            var Bn = L(On, 2), Rn = (xn) => {
              var zn = ze();
              st(fe(zn), () => l().showPricesPerItem ? e(ge) : e(ue), (Cn) => {
                var yn = $v();
                Ge(y(yn), () => a()(l().showPricesPerItem ? e(ge) : e(ue))), x(yn), ve((Qn) => Ie(yn, "data-a11y-label", Qn), [() => s()("system.original_price")]), p(Cn, yn);
              }), p(xn, zn);
            };
            O(Bn, (xn) => {
              e(he) && xn(Rn);
            }), p(bn, Gn);
          };
          O(ln, (bn) => {
            e(oe) && !r().ignoreUnitPrice ? bn(sn) : bn(on, !1);
          }, !0), p(Tt, It);
        };
        O(nn, (Tt) => {
          l().showBothPrices ? Tt(Ft) : Tt(Xt, !1);
        }), x(Ot), x(zt), p(je, kt);
      }, $$slots: { default: !0 } });
      var pt = L(Re, 2), nt = (je) => {
        Ba(je, { get highlights() {
          return i().highlights;
        }, get isSelected() {
          return m();
        }, get replaceLiquid() {
          return e(xe);
        } });
      };
      O(pt, (je) => {
        i().highlights && je(nt);
      });
      var ut = L(pt, 2), et = (je) => {
        var Xe = Av(), kt = y(Xe);
        {
          let yt = d(() => e(le) || e(W)[0]);
          Sa(kt, { get sellingPlans() {
            return e(W);
          }, get selectedSellingPlan() {
            return e(yt);
          }, onChange: (Zt) => {
            ae(j, Zt, !0);
          } });
        }
        x(Xe), p(je, Xe);
      };
      O(ut, (je) => {
        m() && e(X) && !i().sellingPlanGid && e(W).length > 1 && je(et);
      });
      var ot = L(ut, 2), wt = (je) => {
        var Xe = qv(), kt = y(Xe);
        la(kt, { get product() {
          return u();
        } }), Vt(L(kt, 2), 17, () => ({ length: e(F) }), Vr, (yt, Zt, Ct) => {
          var zt = Tv(), Qt = y(zt);
          {
            let Ut = d(() => e(F) > 1 ? Ct + 1 : void 0);
            Jn(Qt, { get product() {
              return u();
            }, get selectedVariantId() {
              return e(E)[Ct];
            }, get showImage() {
              return e(De);
            }, get number() {
              return e(Ut);
            }, onChange: (Sn) => (function(Yn, kn) {
              const qn = [...e(E)];
              qn[Yn] = kn, ae(E, qn, !0), ie = !0, m() && (ee()({ variantId: kn }), U = kn);
            })(Ct, Sn), onOptionChange: (Sn, Yn, kn) => (function(qn, dr, gr, mn) {
              if (l().disableVariantOptionSync || qn !== 0) return;
              const Ot = dr - 1, nn = e(E).map((Ft) => u().variants.find((Xt) => Xt.id === Ft)).filter((Ft) => Ft != null).slice(1);
              nn.length !== 0 && nn.every((Ft) => Ft.options[Ot] === mn) && ae(E, e(E).map((Ft) => {
                const Xt = u().variants.find((ln) => ln.id === Ft);
                if (!Xt || Xt.options[Ot] !== mn) return Ft;
                const Tt = [...Xt.options];
                Tt[Ot] = gr;
                const It = Ou(u().variants, Tt);
                return It ? It.id : Ft;
              }), !0);
            })(Ct, Sn, Yn, kn) });
          }
          var cn = L(Qt, 2);
          {
            let Ut = d(() => e(C).get(e(E)[Ct]));
            ca(cn, { get dealBlock() {
              return l();
            }, get variant() {
              return e(Ut);
            } });
          }
          x(zt), p(yt, zt);
        }), x(Xe), p(je, Xe);
      };
      O(ot, (je) => {
        e(Pe) && je(wt);
      });
      var ht = L(ot, 2), Ht = (je) => {
        {
          let Xe = d(() => G(i()));
          pl(je, { get value() {
            return e(ce);
          }, get min() {
            return e(Xe);
          }, onChange: (kt) => ae(ce, kt, !0) });
        }
      };
      O(ht, (je) => {
        m() && i().dealBarType === gt.QuantityBreak && i().quantitySelector && je(Ht);
      });
      var Tn = L(ht, 2), _n = (je) => {
        Ya(je, { get product() {
          return u();
        }, get selectedVariantIds() {
          return e(E);
        }, get productPersonalisation() {
          return i().productPersonalisation;
        }, get quantity() {
          return e(K);
        }, get addPersonalisationModal() {
          return l().addPersonalisationModal;
        }, get onPersonalisationsChange() {
          return D();
        }, get initialValues() {
          return ne();
        } });
      };
      O(Tn, (je) => {
        m() && i().productPersonalisation && (l().blockLayout === "vertical" || l().blockLayout === "plain") && je(_n);
      }), x(We);
      var en = L(We, 2);
      {
        let je = d(() => i().upsells || []);
        Ci(en, { get dealBlock() {
          return l();
        }, get dealBarId() {
          return i().id;
        }, get upsells() {
          return e(je);
        }, get otherProducts() {
          return h();
        }, get complementaryProducts() {
          return f();
        }, get dealBarSelected() {
          return m();
        }, get dealSellingPlan() {
          return e(A);
        }, onChange: (Xe) => {
          ae(P, Xe, !0);
        } });
      }
      var Kt = L(en, 2);
      zi(Kt, { get selectedDealBarIndex() {
        return I();
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
        return e(A);
      }, get progressiveGifts() {
        return l().progressiveGifts;
      } });
      var tn = L(Kt, 2);
      {
        let je = d(() => i().freeGifts || []);
        Bi(tn, { get dealBlock() {
          return l();
        }, get freeGifts() {
          return e(je);
        }, get freeGiftsSummary() {
          return i().freeGiftsSummary;
        }, get otherProducts() {
          return h();
        }, get dealBarSelected() {
          return m();
        }, get sellingPlan() {
          return e(A);
        }, get mainProductVariantId() {
          return e(E)[0];
        }, onChange: (Xe) => {
          ae(Z, Xe, !0);
        } });
      }
      var _t = L(tn, 2);
      {
        let je = d(() => i().multipleGiftsSelectors || []);
        Mi(_t, { get dealBlock() {
          return l();
        }, get multipleGiftsSelectors() {
          return e(je);
        }, get sellingPlan() {
          return e(A);
        }, get otherProducts() {
          return h();
        }, onChange: (Xe) => {
          ae(M, Xe, !0);
        } });
      }
      p(be, Ke);
    }, $$slots: { default: !0 } });
    var At = L(dt, 2), Yt = (be) => {
      Ii(be, { get showAsSoldOut() {
        return i().showAsSoldOut;
      }, get replaceLiquid() {
        return e(xe);
      } });
    };
    O(At, (be) => {
      i().showAsSoldOutEnabled && i().showAsSoldOut && be(Yt);
    }), x(rt), ve((be) => {
      var Ze;
      Bt = Et(rt, 1, "kaching-bundles__bar", null, Bt, be), Ie(rt, "data-deal-bar-id", i().id), Gt(rt, e(Ye)), Ie(Dt, "name", `kaching-bundles-deal-${(Ze = w()) != null ? Ze : ""}`), Na(Dt, i().id), Ie(Dt, "id", e(we)), tl(Dt, m()), Dt.disabled = i().showAsSoldOutEnabled;
    }, [() => ({ "kaching-bundles__bar--selected": m() })]), p(n, rt);
    var Se = lt(at);
    return c(), Se;
  }
  jn(["change"]), Je(So, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, customQuantity: {}, currentVariantId: {}, currentVariantSource: {}, componentId: {}, selected: {}, globalSellingPlan: {}, selectedDealBarIndex: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var Fv = $('<div class="kaching-bundles"><!></div>');
  function Gd(n, t) {
    var r;
    it(t, !0);
    const a = k(t, "config", 7), s = k(t, "dealBlock", 7), o = k(t, "dealBar", 7), c = k(t, "translations", 7), l = k(t, "product", 7), i = k(t, "mediaImages", 23, () => []), u = k(t, "currentVariantId", 7), h = k(t, "currentVariantSource", 7, void 0), f = k(t, "variantBadges", 23, () => []), g = d(() => sr(s(), a().brandColors)), b = d(() => sr(o(), a().brandColors)), v = Math.random().toString(16).slice(2), { setConfig: w } = Za(a()), { setMoneyFormat: m } = Pi(a().moneyFormat), { setTranslations: z } = Ha(c()), { setMediaImages: I } = il(i()), { setSwatchSettings: V } = nl({ swatchOptions: e(g).swatchOptions || [], swatchSize: e(g).swatchSize, swatchShape: e(g).swatchShape, showSelectedSwatchName: (r = e(g).showSelectedSwatchName) != null && r }), { setVariantBadges: T } = xd(f());
    tt(() => {
      w(a());
    }), tt(() => {
      m(a().moneyFormat, !!e(g).showPricesWithoutDecimals);
    }), tt(() => {
      z(c());
    }), tt(() => {
      I(i());
    }), tt(() => {
      var B;
      V({ swatchOptions: e(g).swatchOptions || [], swatchSize: e(g).swatchSize, swatchShape: e(g).swatchShape, showSelectedSwatchName: (B = e(g).showSelectedSwatchName) != null && B });
    }), tt(() => {
      T(f());
    });
    const q = d(() => e(g) && Au(e(g)));
    var ee = { get config() {
      return a();
    }, set config(B) {
      a(B), _();
    }, get dealBlock() {
      return s();
    }, set dealBlock(B) {
      s(B), _();
    }, get dealBar() {
      return o();
    }, set dealBar(B) {
      o(B), _();
    }, get translations() {
      return c();
    }, set translations(B) {
      c(B), _();
    }, get product() {
      return l();
    }, set product(B) {
      l(B), _();
    }, get mediaImages() {
      return i();
    }, set mediaImages(B = []) {
      i(B), _();
    }, get currentVariantId() {
      return u();
    }, set currentVariantId(B) {
      u(B), _();
    }, get currentVariantSource() {
      return h();
    }, set currentVariantSource(B = void 0) {
      h(B), _();
    }, get variantBadges() {
      return f();
    }, set variantBadges(B = []) {
      f(B), _();
    } }, H = Fv(), D = y(H), ne = (B) => {
      So(B, { selectedDealBarIndex: null, get dealBlock() {
        return e(g);
      }, get dealBar() {
        return e(b);
      }, get product() {
        return l();
      }, get currentVariantId() {
        return u();
      }, get currentVariantSource() {
        return h();
      }, get componentId() {
        return v;
      }, selected: !0, onProgressiveGiftsChange: () => {
      }, onDealBarSelect: () => {
      }, onDealBarDeselect: () => {
      }, onVariantSelect: () => {
      }, onVariantsChange: () => {
      } });
    };
    return O(D, (B) => {
      e(b).dealBarType && e(b).dealBarType !== gt.QuantityBreak && e(b).dealBarType !== gt.Bxgy || B(ne);
    }), x(H), ve(() => Gt(H, e(q))), p(n, H), lt(ee);
  }
  customElements.define("kaching-bundles-bar", Je(Gd, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, dealBar: { attribute: "deal-bar", type: "Object" }, translations: { attribute: "translations", type: "Object" }, product: { attribute: "product", type: "Object" }, mediaImages: { attribute: "media-images", type: "Array" }, currentVariantId: { attribute: "current-variant-id", type: "Number" }, currentVariantSource: { attribute: "current-variant-source", type: "String" }, variantBadges: { attribute: "variant-badges", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this;
    }
  }));
  var Lv = $('<img alt="" class="kaching-bundles__bundle-products__image"/>'), jv = $('<div class="kaching-bundles__bundle-products__image-placeholder"></div>');
  function Bo(n, t) {
    it(t, !0);
    const r = k(t, "image", 7), a = k(t, "linkUrl", 7);
    var s = { get image() {
      return r();
    }, set image(u) {
      r(u), _();
    }, get linkUrl() {
      return a();
    }, set linkUrl(u) {
      a(u), _();
    } }, o = ze(), c = fe(o), l = (u) => {
      er(u, { get url() {
        return a();
      }, class: "kaching-bundles__bundle-products__link", children: (h, f) => {
        var g = Lv();
        Ie(g, "height", 50), Ie(g, "width", 50), ve(() => Ie(g, "src", r())), p(h, g);
      }, $$slots: { default: !0 } });
    }, i = (u) => {
      p(u, jv());
    };
    return O(c, (u) => {
      r() ? u(l) : u(i, !1);
    }), p(n, o), lt(s);
  }
  Je(Bo, { image: {}, linkUrl: {} }, [], [], !0);
  var Ev = $('<span class="kaching-bundles__bundle-products__quantity"> </span>'), Rv = $('<div class="kaching-bundles__bundle-products__title"><!> <span> </span></div>');
  function Co(n, t) {
    it(t, !0);
    const r = k(t, "title", 7), a = k(t, "quantity", 7), s = k(t, "linkUrl", 7);
    var o = { get title() {
      return r();
    }, set title(c) {
      r(c), _();
    }, get quantity() {
      return a();
    }, set quantity(c) {
      a(c), _();
    }, get linkUrl() {
      return s();
    }, set linkUrl(c) {
      s(c), _();
    } };
    return er(n, { get url() {
      return s();
    }, class: "kaching-bundles__bundle-products__link", children: (c, l) => {
      var i = Rv(), u = y(i), h = (b) => {
        var v = Ev(), w = y(v);
        x(v), ve(() => {
          var m;
          return ft(w, `${(m = a()) != null ? m : ""}x`);
        }), p(b, v);
      };
      O(u, (b) => {
        a() > 1 && b(h);
      });
      var f = L(u, 2), g = y(f, !0);
      x(f), x(i), ve(() => ft(g, r())), p(c, i);
    }, $$slots: { default: !0 } }), lt(o);
  }
  Je(Co, { title: {}, quantity: {}, linkUrl: {} }, [], [], !0);
  var Nv = $('<span class="kaching-bundles__bundle-products__price"><!></span>'), Qv = $('<span class="kaching-bundles__bundle-products__full-price"><!></span>'), Wv = $('<span class="kaching-bundles__bundle-products__unit-price"><!> </span>'), Uv = $("<div><!> <!> <!></div>");
  function ds(n, t) {
    it(t, !0);
    const r = () => $e(h, "$formatPrice", a), [a, s] = vt();
    let o = k(t, "discountedPrice", 7), c = k(t, "fullPrice", 7), l = k(t, "unitPrice", 7), i = k(t, "unitPriceReference", 7), u = k(t, "ignoreUnitPrice", 7);
    const h = gn(), f = d(() => !!l() && !!i() && !u());
    var g = { get discountedPrice() {
      return o();
    }, set discountedPrice(q) {
      o(q), _();
    }, get fullPrice() {
      return c();
    }, set fullPrice(q) {
      c(q), _();
    }, get unitPrice() {
      return l();
    }, set unitPrice(q) {
      l(q), _();
    }, get unitPriceReference() {
      return i();
    }, set unitPriceReference(q) {
      i(q), _();
    }, get ignoreUnitPrice() {
      return u();
    }, set ignoreUnitPrice(q) {
      u(q), _();
    } }, b = Uv();
    let v;
    var w = y(b);
    st(w, o, (q) => {
      var ee = Nv();
      Ge(y(ee), () => r()(o())), x(ee), p(q, ee);
    });
    var m = L(w, 2), z = (q) => {
      var ee = ze();
      st(fe(ee), c, (H) => {
        var D = Qv();
        Ge(y(D), () => r()(c())), x(D), p(H, D);
      }), p(q, ee);
    };
    O(m, (q) => {
      o() < c() && q(z);
    });
    var I = L(m, 2), V = (q) => {
      var ee = ze();
      st(fe(ee), l, (H) => {
        var D = Wv(), ne = y(D);
        Ge(ne, () => r()(l(), { preserveDecimals: !0 }));
        var B = L(ne);
        x(D), ve(() => {
          var N;
          return ft(B, ` / ${(N = i()) != null ? N : ""}`);
        }), p(H, D);
      }), p(q, ee);
    };
    O(I, (q) => {
      l() && i() && !u() && q(V);
    }), x(b), ve((q) => v = Et(b, 1, "kaching-bundles__bundle-products__pricing", null, v, q), [() => ({ "kaching-bundles__bundle-products__pricing--with-unit-price": e(f) })]), p(n, b);
    var T = lt(g);
    return s(), T;
  }
  Je(ds, { discountedPrice: {}, fullPrice: {}, unitPrice: {}, unitPriceReference: {}, ignoreUnitPrice: {} }, [], [], !0);
  var Hv = $("<!> <!> <!> <!> <!>", 1), Zv = $("<!> <!>", 1), Jv = $('<div class="kaching-bundles__bundle-products__wrapper"><!> <div class="kaching-bundles__bundle-products__content"><!> <!> <!></div></div> <!>', 1), Yv = $('<div class="kaching-bundles__bundle-products__product"><!></div>');
  function Od(n, t) {
    it(t, !0);
    const r = () => $e(z, "$config", a), [a, s] = vt();
    let o = k(t, "dealBlock", 7), c = k(t, "layout", 7), l = k(t, "bundleProduct", 7), i = k(t, "product", 7), u = k(t, "dealBarSelected", 7), h = k(t, "currentVariantId", 7), f = k(t, "mainVariantId", 7), g = k(t, "priceRounding", 7), b = k(t, "sellingPlan", 7), v = k(t, "dealBar", 7), w = k(t, "sets", 7), m = k(t, "onChange", 7);
    const z = vn(), I = gn();
    let V = Ve(void 0);
    const T = d(() => !!l().variantGIDs), q = d(() => {
      var C, j;
      return e(T) && i() ? i().variants.filter((W) => l().variantGIDs.some((X) => Nt(X) === W.id)) : (j = (C = i()) == null ? void 0 : C.variants) != null ? j : [];
    }), ee = d(() => {
      var C, j, W, X;
      const le = l().productGID === "default", A = !!((C = o().defaultVariantsV2) != null && C.length);
      if (le && A && i()) {
        const re = i().id, ue = (X = (W = (j = o().defaultVariantsV2) == null ? void 0 : j.find((_e) => Nt(_e.productGID) === re && _e.dealBarId === v().id)) == null ? void 0 : W.variantGIDs) == null ? void 0 : X[0];
        if (ue) return Nt(ue);
      }
      if (l().defaultVariantGID) return Nt(l().defaultVariantGID);
    }), H = d(() => {
      const C = e(V) || e(ee);
      return C !== void 0 && e(q).some(({ id: j }) => j === C) ? C : l().productGID === "default" && h() ? h() : l().variantGIDs ? l().variantGIDs.length === 0 ? void 0 : Nt(l().variantGIDs[0]) : e(q).length > 0 ? e(q)[0].id : void 0;
    }), D = d(() => {
      var C;
      return e(H) ? (C = i()) == null ? void 0 : C.variants.find((j) => j.id === e(H)) : void 0;
    }), ne = d(() => i() && e(D) && tr(i(), e(D), b())), B = d(() => l().quantity * w()), N = d(() => sa({ discountType: l().discountType, discountValue: l().discountValue, discountQuantity: l().quantity, variantQuantities: e(D) ? [{ variant: e(D), quantity: e(B) }] : [], currencyRate: r().currencyRate, priceRounding: g(), sellingPlan: e(ne) })), se = d(() => (function(C) {
      if (!C) return 0;
      let j = C.price;
      return o().useProductCompareAtPrice && C.compareAtPrice && (j = Math.max(j, C.compareAtPrice)), j * e(B);
    })(e(D))), S = d(() => e(D) ? so(e(D)) : null), Z = d(() => e(D) ? xr([{ variant: e(D), quantity: e(B) }]) : null), M = d(() => e(Z) ? e(N) / e(Z) : null), P = d(() => {
      var C;
      return (C = i()) != null && C.url && e(D) ? `${i().url}?variant=${e(D).id}` : void 0;
    }), R = d(() => {
      var C, j;
      return ((C = e(D)) == null ? void 0 : C.image) || ((j = i()) == null ? void 0 : j.image);
    }), Q = d(() => u() && i() && e(q).length > 1 && e(H)), K = d(() => u() && l().productGID !== "default" ? e(P) : void 0), ce = d(() => i() ? l().title ? hn({ priceFormatter: $e(I, "$formatPrice", a), product: i(), totalFullPrice: e(se), totalDiscountedPrice: e(N), quantity: e(B), unitQuantity: e(Z) })(l().title) : i().title : "");
    function F(C) {
      ae(V, C, !0);
    }
    let G;
    tt(() => {
      e(D) && e(B) && Jt(() => {
        m()({ variant: e(D), product: i(), quantity: e(B) });
      });
    }), fr(() => {
      l().productGID, ae(V, void 0), G = void 0;
    }), fr(() => {
      const C = l().productGID === "default";
      if (!(C || !o().disableVariantOptionSync)) return;
      const j = C ? h() : f();
      if (!j || !i() || j === G) return;
      const W = G;
      if (G = j, !e(q).some((A) => A.id === j)) return;
      const X = e(V) === void 0 && e(ee) === void 0, le = e(V) === W && W !== void 0;
      (X || le) && ae(V, j, !0);
    });
    var U = { get dealBlock() {
      return o();
    }, set dealBlock(C) {
      o(C), _();
    }, get layout() {
      return c();
    }, set layout(C) {
      c(C), _();
    }, get bundleProduct() {
      return l();
    }, set bundleProduct(C) {
      l(C), _();
    }, get product() {
      return i();
    }, set product(C) {
      i(C), _();
    }, get dealBarSelected() {
      return u();
    }, set dealBarSelected(C) {
      u(C), _();
    }, get currentVariantId() {
      return h();
    }, set currentVariantId(C) {
      h(C), _();
    }, get mainVariantId() {
      return f();
    }, set mainVariantId(C) {
      f(C), _();
    }, get priceRounding() {
      return g();
    }, set priceRounding(C) {
      g(C), _();
    }, get sellingPlan() {
      return b();
    }, set sellingPlan(C) {
      b(C), _();
    }, get dealBar() {
      return v();
    }, set dealBar(C) {
      v(C), _();
    }, get sets() {
      return w();
    }, set sets(C) {
      w(C), _();
    }, get onChange() {
      return m();
    }, set onChange(C) {
      m(C), _();
    } }, te = ze(), E = fe(te), ie = (C) => {
      var j = Yv(), W = y(j), X = (A) => {
        var re = Hv(), ue = fe(re);
        Bo(ue, { get image() {
          return e(R);
        }, get linkUrl() {
          return e(K);
        } });
        var _e = L(ue, 2);
        Co(_e, { get title() {
          return e(ce);
        }, get quantity() {
          return e(B);
        }, get linkUrl() {
          return e(K);
        } });
        var ge = L(_e, 2), ke = (xe) => {
          ds(xe, { get discountedPrice() {
            return e(N);
          }, get fullPrice() {
            return e(se);
          }, get unitPrice() {
            return e(M);
          }, get unitPriceReference() {
            return e(S);
          }, get ignoreUnitPrice() {
            return r().ignoreUnitPrice;
          } });
        };
        O(ge, (xe) => {
          l().hidePrice || xe(ke);
        });
        var pe = L(ge, 2);
        ca(pe, { get dealBlock() {
          return o();
        }, get variant() {
          return e(D);
        } });
        var Ce = L(pe, 2), oe = (xe) => {
          {
            let Fe = d(() => ({ ...i(), variants: e(q) })), Ae = d(() => e(H) || 0);
            Jn(xe, { get product() {
              return e(Fe);
            }, get selectedVariantId() {
              return e(Ae);
            }, onChange: F });
          }
        };
        O(Ce, (xe) => {
          e(Q) && xe(oe);
        }), p(A, re);
      }, le = (A) => {
        var re = Jv(), ue = fe(re), _e = y(ue);
        Bo(_e, { get image() {
          return e(R);
        }, get linkUrl() {
          return e(K);
        } });
        var ge = L(_e, 2), ke = y(ge);
        Co(ke, { get title() {
          return e(ce);
        }, get quantity() {
          return e(B);
        }, get linkUrl() {
          return e(K);
        } });
        var pe = L(ke, 2);
        ca(pe, { get dealBlock() {
          return o();
        }, get variant() {
          return e(D);
        } });
        var Ce = L(pe, 2), oe = (Ae) => {
          var Oe = Zv(), Te = fe(Oe);
          {
            let ye = d(() => ({ ...i(), variants: e(q) }));
            la(Te, { get product() {
              return e(ye);
            } });
          }
          var Y = L(Te, 2);
          {
            let ye = d(() => ({ ...i(), variants: e(q) })), Me = d(() => e(H) || 0);
            Jn(Y, { get product() {
              return e(ye);
            }, get selectedVariantId() {
              return e(Me);
            }, onChange: F });
          }
          p(Ae, Oe);
        };
        O(Ce, (Ae) => {
          e(Q) && Ae(oe);
        }), x(ge), x(ue);
        var xe = L(ue, 2), Fe = (Ae) => {
          ds(Ae, { get discountedPrice() {
            return e(N);
          }, get fullPrice() {
            return e(se);
          }, get unitPrice() {
            return e(M);
          }, get unitPriceReference() {
            return e(S);
          }, get ignoreUnitPrice() {
            return r().ignoreUnitPrice;
          } });
        };
        O(xe, (Ae) => {
          l().hidePrice || Ae(Fe);
        }), p(A, re);
      };
      O(W, (A) => {
        c() === "horizontal" ? A(X) : A(le, !1);
      }), x(j), p(C, j);
    };
    O(E, (C) => {
      i() && C(ie);
    }), p(n, te);
    var J = lt(U);
    return s(), J;
  }
  Je(Od, { dealBlock: {}, layout: {}, bundleProduct: {}, product: {}, dealBarSelected: {}, currentVariantId: {}, mainVariantId: {}, priceRounding: {}, sellingPlan: {}, dealBar: {}, sets: {}, onChange: {} }, [], [], !0);
  var Kv = An('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" d="M5 9h10v2H5z"></path><path fill="#fff" d="M11 5v10H9V5z"></path></svg>');
  function Fd(n) {
    p(n, Kv());
  }
  function Xv(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  Je(Fd, {}, [], [], !0);
  var e_ = $('<img class="kaching-bundles__bar-image" alt=""/>'), t_ = $('<div class="kaching-bundles__bar-radio"></div>'), n_ = $('<span class="kaching-bundles__bar-title"><!></span>'), r_ = $('<span class="kaching-bundles__bar-label"><!></span>'), a_ = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), i_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), l_ = $('<div class="kaching-bundles__bar-price"><!></div>'), s_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), o_ = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), c_ = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), u_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), d_ = $("<!> <!>", 1), g_ = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), h_ = $('<div class="kaching-bundles__bundle-products__product kaching-bundles__bundle-products__product--placeholder"><span>Select product</span></div>'), p_ = $('<div class="kaching-bundles__bundle-products__divider"><div class="kaching-bundles__bundle-products__divider-line">&ZeroWidthSpace;</div> <div class="kaching-bundles__bundle-products__divider-icon"><!></div> <div class="kaching-bundles__bundle-products__divider-line">&ZeroWidthSpace;</div></div>'), b_ = $("<!> <!>", 1), f_ = $("<div></div>"), v_ = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), __ = $('<div><input type="radio"/> <!> <!></div>');
  function Ld(n, t) {
    it(t, !0);
    const r = () => $e(N, "$config", o), a = () => $e(ne, "$formatPrice", o), s = () => $e(D, "$translate", o), [o, c] = vt(), l = k(t, "dealBlock", 7), i = k(t, "dealBar", 7), u = k(t, "product", 7), h = k(t, "otherProducts", 23, () => []), f = k(t, "complementaryProducts", 23, () => []), g = k(t, "currentVariantId", 7), b = k(t, "componentId", 7), v = k(t, "selectedDealBarIndex", 7), w = k(t, "selected", 7, !1), m = k(t, "sellingPlan", 7), z = k(t, "onProgressiveGiftsChange", 7), I = k(t, "onDealBarSelect", 7), V = k(t, "onDealBarDeselect", 7), T = k(t, "onVariantSelect", 7), q = k(t, "onVariantsChange", 7), ee = k(t, "onPersonalisationsChange", 7), H = k(t, "personalisationInitialValues", 23, () => []), D = Mt(), ne = gn(), B = En(), N = vn();
    let se = Ve(ct({})), S = Ve(ct([])), Z = Ve(ct([])), M = Ve(ct([])), P = Ve(1);
    const R = d(() => `${i().id}_${b()}`), Q = d(() => i().bundleProducts.filter(({ productGID: he }) => he)), K = d(() => e(Q).every((he) => Fe(he, u(), h()))), ce = d(() => i().showProductsOnlyWhenSelected && !w()), F = d(() => e(Q).every((he) => {
      var Pe;
      const De = Fe(he, u(), h());
      return (Pe = De == null ? void 0 : De.availableForSale) != null && Pe;
    })), G = d(() => l() ? (function(he, Pe) {
      return i().bundleProducts.map((we) => {
        const me = Pe[we.id];
        if (!me) return 0;
        const { variant: qe, quantity: Ue } = me;
        let Ye = qe.price;
        return qe.compareAtPrice && he.useProductCompareAtPrice && (Ye = Math.max(Ye, qe.compareAtPrice)), Ye * Ue;
      }).reduce((we, me) => we + me, 0);
    })(l(), e(se)) : 0), U = d(() => ul(e(G), e(S), e(Z))), te = d(() => l().priceRounding ? { perItem: l().showPricesPerItem, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), E = d(() => l() ? ho(i(), e(se), r().currencyRate, e(te), m()) : 0), ie = d(() => e(Q).reduce((he, Pe) => he + Pe.quantity, 0) * e(P)), J = d(() => Math.ceil(e(E) / (e(ie) || 1))), C = d(() => Math.ceil(e(G) / (e(ie) || 1))), j = d(() => fo(e(ie) === 1, e(U), e(C))), W = d(() => e(U) > e(E)), X = d(() => xr(Object.values(e(se)))), le = d(() => e(Q).every((he) => he.productGID === "default" || Nt(he.productGID) === u().id)), A = d(() => {
      var he;
      const Pe = e(Q)[0];
      if (Pe) return (he = e(se)[Pe.id]) == null ? void 0 : he.variant.id;
    }), re = d(() => l().showPricesPerItem && e(le)), ue = d(() => hn({ priceFormatter: a(), product: u(), dealBar: i(), totalFullPrice: e(G), totalCompareAtPrice: e(U), totalDiscountedPrice: e(E), quantity: 1, unitQuantity: e(X), sellingPlan: m() })), _e = d(() => e(ue)(s()(i().title))), ge = d(() => e(ue)(s()(i().subtitle))), ke = d(() => e(ue)(s()(i().label))), pe = d(() => ol(l(), i()).map((he) => wa(he, s(), e(ue)))), Ce = d(() => Pa(e(pe))), oe = d(() => $e(B, "$getMediaImageUrl", o)(i().mediaImageGID) || dl);
    function xe(he) {
      w() && (he.preventDefault(), he.stopPropagation(), V()());
    }
    function Fe(he, Pe, De) {
      if (he.productGID) return he.productGID === "default" ? Pe : De.find((we) => we.id === Nt(he.productGID));
    }
    Ra(() => {
      w() && I()({ dealBarId: i().id, preselected: !0 });
    }), tt(() => {
      w() && (fa(e(se)), fa(e(M)), fa(e(S)), fa(e(Z)), m(), Jt(() => {
        (function() {
          if (!i().bundleProducts.map(({ id: Ue }) => Ue).every((Ue) => e(se)[Ue])) return;
          const he = [];
          for (const Ue of i().bundleProducts) {
            const Ye = e(se)[Ue.id];
            Ye && he.push({ id: Ue.id, variant: Ye.variant, product: Ye.product, quantity: Ye.quantity });
          }
          if (he.length === 0) return;
          const Pe = e(E) + e(M).reduce((Ue, Ye) => Ue + Ye.discountedPrice, 0), De = e(S).reduce((Ue, Ye) => Ye.showPrice ? Ue + Ye.fullPrice : Ue, 0) + e(Z).reduce((Ue, Ye) => Ue + Ye.fullPrice * Ye.quantity, 0), we = e(G) + e(M).reduce((Ue, Ye) => Ue + Ye.fullPrice, 0) + De, me = ho(i(), e(se), r().currencyRate, e(te), void 0), qe = u().sellingPlans.map((Ue) => ({ sellingPlanId: Ue.id, discountedPrice: ho(i(), e(se), r().currencyRate, e(te), Ue) }));
          q()({ bundleProducts: he, freeGifts: [...e(S), ...e(Z)], upsells: e(M), pricing: { discountedPrice: Pe, fullPrice: we, giftValue: De, discountedPricePerItem: e(E), fullPricePerItem: e(G), discountedPriceWithoutSellingPlan: me, discountedPricesForSellingPlans: qe } });
        })();
      }));
    });
    const Ae = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? hl(i().showAsSoldOut) : "");
    var Oe = { get dealBlock() {
      return l();
    }, set dealBlock(he) {
      l(he), _();
    }, get dealBar() {
      return i();
    }, set dealBar(he) {
      i(he), _();
    }, get product() {
      return u();
    }, set product(he) {
      u(he), _();
    }, get otherProducts() {
      return h();
    }, set otherProducts(he = []) {
      h(he), _();
    }, get complementaryProducts() {
      return f();
    }, set complementaryProducts(he = []) {
      f(he), _();
    }, get currentVariantId() {
      return g();
    }, set currentVariantId(he) {
      g(he), _();
    }, get componentId() {
      return b();
    }, set componentId(he) {
      b(he), _();
    }, get selectedDealBarIndex() {
      return v();
    }, set selectedDealBarIndex(he) {
      v(he), _();
    }, get selected() {
      return w();
    }, set selected(he = !1) {
      w(he), _();
    }, get sellingPlan() {
      return m();
    }, set sellingPlan(he) {
      m(he), _();
    }, get onProgressiveGiftsChange() {
      return z();
    }, set onProgressiveGiftsChange(he) {
      z(he), _();
    }, get onDealBarSelect() {
      return I();
    }, set onDealBarSelect(he) {
      I(he), _();
    }, get onDealBarDeselect() {
      return V();
    }, set onDealBarDeselect(he) {
      V(he), _();
    }, get onVariantSelect() {
      return T();
    }, set onVariantSelect(he) {
      T(he), _();
    }, get onVariantsChange() {
      return q();
    }, set onVariantsChange(he) {
      q(he), _();
    }, get onPersonalisationsChange() {
      return ee();
    }, set onPersonalisationsChange(he) {
      ee(he), _();
    }, get personalisationInitialValues() {
      return H();
    }, set personalisationInitialValues(he = []) {
      H(he), _();
    } }, Te = ze(), Y = fe(Te), ye = (he) => {
      var Pe = __();
      let De;
      var we = y(Pe);
      aa(we), we.__change = [Xv, I, i];
      var me = L(we, 2);
      Ja(me, { get for() {
        return e(R);
      }, get soldOut() {
        return i().showAsSoldOutEnabled;
      }, get borderHost() {
        return e(Ce);
      }, children: (Ye, at) => {
        var rt = v_(), Bt = fe(rt);
        Vt(Bt, 17, () => e(pe), (et) => et.id, (et, ot) => {
          oa(et, { get badge() {
            return e(ot);
          }, get blockLayout() {
            return l().blockLayout;
          } });
        });
        var Dt = L(Bt, 2), dt = y(Dt);
        Wt(dt, { element: "div", class: "kaching-bundles__bar-main", onclick: xe, children: (et, ot) => {
          var wt = g_(), ht = fe(wt), Ht = (zt) => {
            var Qt = e_();
            ve(() => Ie(Qt, "src", e(oe))), p(zt, Qt);
          }, Tn = (zt) => {
            p(zt, t_());
          };
          O(ht, (zt) => {
            i().mediaImageGID ? zt(Ht) : zt(Tn, !1);
          });
          var _n = L(ht, 2), en = y(_n), Kt = y(en), tn = y(Kt);
          st(tn, () => e(_e), (zt) => {
            var Qt = n_();
            Ge(y(Qt), () => e(_e)), x(Qt), p(zt, Qt);
          });
          var _t = L(tn, 2), je = (zt) => {
            var Qt = ze();
            st(fe(Qt), () => e(ke), (cn) => {
              var Ut = r_();
              Ge(y(Ut), () => e(ke)), x(Ut), p(cn, Ut);
            }), p(zt, Qt);
          };
          O(_t, (zt) => {
            e(ke) && zt(je);
          }), x(Kt);
          var Xe = L(Kt, 2), kt = (zt) => {
            var Qt = ze();
            st(fe(Qt), () => e(ge), (cn) => {
              var Ut = a_();
              Ge(y(Ut), () => e(ge)), x(Ut), p(cn, Ut);
            }), p(zt, Qt);
          };
          O(Xe, (zt) => {
            e(ge) && zt(kt);
          }), x(en);
          var yt = L(en, 2), Zt = y(yt), Ct = (zt) => {
            var Qt = ze(), cn = fe(Qt), Ut = (Yn) => {
              var kn = c_(), qn = fe(kn), dr = y(qn);
              st(dr, () => e(J), (Ft) => {
                Nr(Ft, { get amount() {
                  return e(J);
                }, get showPricesPerItem() {
                  return e(re);
                }, get unitLabel() {
                  return l().unitLabel;
                } });
              });
              var gr = L(dr, 2), mn = (Ft) => {
                var Xt = ze();
                st(fe(Xt), () => e(j), (Tt) => {
                  var It = i_();
                  Ge(y(It), () => a()(e(j))), x(It), ve((ln) => Ie(It, "data-a11y-label", ln), [() => s()("system.original_price")]), p(Tt, It);
                }), p(Ft, Xt);
              };
              O(gr, (Ft) => {
                e(W) && Ft(mn);
              }), x(qn);
              var Ot = L(qn, 2), nn = (Ft) => {
                var Xt = o_(), Tt = y(Xt);
                st(Tt, () => e(E), (sn) => {
                  var on = l_();
                  Ge(y(on), () => a()(e(E))), x(on), ve((bn) => Ie(on, "data-a11y-label", bn), [() => s()("system.price")]), p(sn, on);
                });
                var It = L(Tt, 2), ln = (sn) => {
                  var on = ze();
                  st(fe(on), () => e(U), (bn) => {
                    var Gn = s_();
                    Ge(y(Gn), () => a()(e(U))), x(Gn), ve((On) => Ie(Gn, "data-a11y-label", On), [() => s()("system.original_price")]), p(bn, Gn);
                  }), p(sn, on);
                };
                O(It, (sn) => {
                  e(W) && sn(ln);
                }), x(Xt), p(Ft, Xt);
              };
              O(Ot, (Ft) => {
                e(ie) > 1 && Ft(nn);
              }), p(Yn, kn);
            }, Sn = (Yn) => {
              var kn = d_(), qn = fe(kn);
              st(qn, () => e(E), (mn) => {
                {
                  let Ot = d(() => e(re) ? e(J) : e(E));
                  Nr(mn, { get amount() {
                    return e(Ot);
                  }, get showPricesPerItem() {
                    return e(re);
                  }, get unitLabel() {
                    return l().unitLabel;
                  } });
                }
              });
              var dr = L(qn, 2), gr = (mn) => {
                var Ot = ze();
                st(fe(Ot), () => e(re) ? e(j) : e(U), (nn) => {
                  var Ft = u_();
                  Ge(y(Ft), () => a()(e(re) ? e(j) : e(U))), x(Ft), ve((Xt) => Ie(Ft, "data-a11y-label", Xt), [() => s()("system.original_price")]), p(nn, Ft);
                }), p(mn, Ot);
              };
              O(dr, (mn) => {
                e(W) && mn(gr);
              }), p(Yn, kn);
            };
            O(cn, (Yn) => {
              l().showBothPrices && e(le) ? Yn(Ut) : Yn(Sn, !1);
            }), p(zt, Qt);
          };
          O(Zt, (zt) => {
            e(K) && zt(Ct);
          }), x(yt), x(_n), p(et, wt);
        }, $$slots: { default: !0 } });
        var At = L(dt, 2), Yt = (et) => {
          Ba(et, { get highlights() {
            return i().highlights;
          }, get isSelected() {
            return w();
          }, get replaceLiquid() {
            return e(ue);
          } });
        };
        O(At, (et) => {
          i().highlights && et(Yt);
        });
        var Se = L(At, 2), be = (et) => {
          pl(et, { get value() {
            return e(P);
          }, onChange: (ot) => {
            ae(P, ot, !0);
          } });
        };
        O(Se, (et) => {
          w() && i().quantitySelector && et(be);
        });
        var Ze = L(Se, 2), Ke = (et) => {
          var ot = f_();
          let wt;
          Vt(ot, 23, () => i().bundleProducts, (ht) => ht.id, (ht, Ht, Tn) => {
            var _n = b_(), en = fe(_n), Kt = (Xe) => {
              {
                let kt = d(() => Fe(e(Ht), u(), h())), yt = d(() => i().layout || "horizontal");
                Od(Xe, { get dealBar() {
                  return i();
                }, get bundleProduct() {
                  return e(Ht);
                }, get product() {
                  return e(kt);
                }, get dealBlock() {
                  return l();
                }, get layout() {
                  return e(yt);
                }, get dealBarSelected() {
                  return w();
                }, get priceRounding() {
                  return e(te);
                }, get currentVariantId() {
                  return g();
                }, get mainVariantId() {
                  return e(A);
                }, get sellingPlan() {
                  return m();
                }, get sets() {
                  return e(P);
                }, onChange: (Zt) => (function(Ct, zt) {
                  const { variant: Qt, product: cn, quantity: Ut } = zt;
                  e(se)[Ct] = { variant: Qt, product: cn, quantity: Ut }, w() && i().bundleProducts.map(({ id: Sn }) => Sn).every((Sn) => e(se)[Sn]) && Ct === i().bundleProducts[0].id && T()({ variantId: Qt.id });
                })(e(Ht).id, Zt) });
              }
            }, tn = (Xe) => {
              var kt = ze(), yt = fe(kt), Zt = (Ct) => {
                p(Ct, h_());
              };
              O(yt, (Ct) => {
                r().preview && Ct(Zt);
              }, !0), p(Xe, kt);
            };
            O(en, (Xe) => {
              e(Ht).productGID ? Xe(Kt) : Xe(tn, !1);
            });
            var _t = L(en, 2), je = (Xe) => {
              var kt = p_(), yt = L(y(kt), 2);
              Fd(y(yt)), x(yt), ba(2), x(kt), p(Xe, kt);
            };
            O(_t, (Xe) => {
              e(Tn) < i().bundleProducts.length - 1 && Xe(je);
            }), p(ht, _n);
          }), x(ot), ve((ht) => wt = Et(ot, 1, "kaching-bundles__bundle-products", null, wt, ht), [() => ({ "kaching-bundles__bundle-products--vertical": i().layout === "vertical", "kaching-bundles__bundle-products--hidden": e(ce) })]), p(et, ot);
        };
        O(Ze, (et) => {
          e(K) && et(Ke);
        });
        var He = L(Ze, 2), We = (et) => {
          {
            let ot = d(() => e(A) ? [e(A)] : []);
            Ya(et, { get product() {
              return u();
            }, get productPersonalisation() {
              return i().productPersonalisation;
            }, get selectedVariantIds() {
              return e(ot);
            }, get quantity() {
              return e(P);
            }, get addPersonalisationModal() {
              return l().addPersonalisationModal;
            }, get onPersonalisationsChange() {
              return ee();
            }, get initialValues() {
              return H();
            } });
          }
        };
        O(He, (et) => {
          w() && i().productPersonalisation && (l().blockLayout === "vertical" || l().blockLayout === "plain") && et(We);
        }), x(Dt);
        var Re = L(Dt, 2);
        {
          let et = d(() => i().upsells || []);
          Ci(Re, { get dealBlock() {
            return l();
          }, get dealBarId() {
            return i().id;
          }, get upsells() {
            return e(et);
          }, get otherProducts() {
            return h();
          }, get complementaryProducts() {
            return f();
          }, get dealBarSelected() {
            return w();
          }, get dealSellingPlan() {
            return m();
          }, get sets() {
            return e(P);
          }, onChange: (ot) => {
            ae(M, ot, !0);
          } });
        }
        var pt = L(Re, 2);
        zi(pt, { get selectedDealBarIndex() {
          return v();
        }, get onChange() {
          return z();
        }, get dealBlock() {
          return l();
        }, get dealBar() {
          return i();
        }, get otherProducts() {
          return h();
        }, get selected() {
          return w();
        }, get sellingPlan() {
          return m();
        }, get progressiveGifts() {
          return l().progressiveGifts;
        } });
        var nt = L(pt, 2);
        {
          let et = d(() => i().freeGifts || []);
          Bi(nt, { get dealBlock() {
            return l();
          }, get freeGifts() {
            return e(et);
          }, get freeGiftsSummary() {
            return i().freeGiftsSummary;
          }, get otherProducts() {
            return h();
          }, get dealBarSelected() {
            return w();
          }, get sellingPlan() {
            return m();
          }, get sets() {
            return e(P);
          }, onChange: (ot) => {
            ae(S, ot, !0);
          } });
        }
        var ut = L(nt, 2);
        {
          let et = d(() => i().multipleGiftsSelectors || []);
          Mi(ut, { get dealBlock() {
            return l();
          }, get multipleGiftsSelectors() {
            return e(et);
          }, get sellingPlan() {
            return m();
          }, get otherProducts() {
            return h();
          }, onChange: (ot) => {
            ae(Z, ot, !0);
          } });
        }
        p(Ye, rt);
      }, $$slots: { default: !0 } });
      var qe = L(me, 2), Ue = (Ye) => {
        Ii(Ye, { get showAsSoldOut() {
          return i().showAsSoldOut;
        }, get replaceLiquid() {
          return e(ue);
        } });
      };
      O(qe, (Ye) => {
        i().showAsSoldOutEnabled && i().showAsSoldOut && Ye(Ue);
      }), x(Pe), ve((Ye) => {
        var at;
        De = Et(Pe, 1, "kaching-bundles__bar", null, De, Ye), Ie(Pe, "data-deal-bar-id", i().id), Gt(Pe, e(Ae)), Ie(we, "name", `kaching-bundles-deal-${(at = b()) != null ? at : ""}`), Na(we, i().id), Ie(we, "id", e(R)), tl(we, w()), we.disabled = i().showAsSoldOutEnabled;
      }, [() => ({ "kaching-bundles__bar--selected": w(), "kaching-bundles__bar--disabled": !e(F) && r().preview })]), p(he, Pe);
    };
    O(Y, (he) => {
      (e(F) || r().preview) && he(ye);
    }), p(n, Te);
    var Me = lt(Oe);
    return c(), Me;
  }
  jn(["change"]), Je(Ld, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, currentVariantId: {}, componentId: {}, selectedDealBarIndex: {}, selected: {}, sellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var k_ = $('<img class="kaching-bundles__mix-and-match-choose-product__product-image" alt=""/>'), m_ = $('<span class="kaching-bundles__mix-and-match-choose-product__product-title"> </span>'), x_ = $('<span class="kaching-bundles__mix-and-match-choose-product__subtitle"><!></span>'), y_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product-price"><!></div>'), w_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product-compare-at-price"><!></div>'), P_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product-price-container"><!> <!></div>'), S_ = $("<div><!> <!></div>"), B_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product"><div class="kaching-bundles__mix-and-match-choose-product__product-container"><!> <div class="kaching-bundles__mix-and-match-choose-product__product-content"><!> <!> <!> <!></div></div> <!></div>');
  function jd(n, t) {
    var r;
    it(t, !0);
    const a = () => $e(w, "$config", c), s = () => $e(v, "$formatPrice", c), o = () => $e(b, "$translate", c), [c, l] = vt(), i = k(t, "product", 7), u = k(t, "dealBlock", 7), h = k(t, "dealBar", 7), f = k(t, "modal", 7), g = k(t, "onChoose", 7), b = Mt(), v = gn(), w = vn();
    let m = Ve(ct(((r = i().variants.find((te) => te.availableForSale)) == null ? void 0 : r.id) || i().variants[0].id));
    const z = d(() => i().variants.find((te) => te.id === e(m)) || i().variants[0]), I = d(() => u().priceRounding ? { perItem: !1, precision: u().priceRoundingPrecision, v2: a().featureFlags.price_rounding_v2 || !1 } : void 0), V = d(() => h().discountType === "percentage" ? sa({ discountType: h().discountType, discountValue: h().discountValue, discountQuantity: 1, variantQuantities: [{ variant: e(z), quantity: 1 }], currencyRate: a().currencyRate, priceRounding: e(I) }) : e(z).price), T = d(() => u().useProductCompareAtPrice && e(z).compareAtPrice ? Math.max(e(z).price, e(z).compareAtPrice) : e(z).price), q = d(() => i().url ? `${i().url}?variant=${e(m)}` : void 0), ee = d(() => hn({ priceFormatter: s(), product: i(), totalFullPrice: e(T), totalDiscountedPrice: e(V), quantity: 1, unitQuantity: null })), H = d(() => e(ee)(o()(f().subtitle || ""))), D = d(() => f().buttonText);
    function ne(te) {
      ae(m, te, !0);
    }
    var B = { get product() {
      return i();
    }, set product(te) {
      i(te), _();
    }, get dealBlock() {
      return u();
    }, set dealBlock(te) {
      u(te), _();
    }, get dealBar() {
      return h();
    }, set dealBar(te) {
      h(te), _();
    }, get modal() {
      return f();
    }, set modal(te) {
      f(te), _();
    }, get onChoose() {
      return g();
    }, set onChoose(te) {
      g(te), _();
    } }, N = B_(), se = y(N), S = y(se), Z = (te) => {
      er(te, { get url() {
        return e(q);
      }, class: "kaching-bundles__mix-and-match-choose-product__product-image-link", children: (E, ie) => {
        var J = k_();
        Ie(J, "width", 100), Ie(J, "height", 100), ve(() => Ie(J, "src", i().image)), p(E, J);
      }, $$slots: { default: !0 } });
    };
    O(S, (te) => {
      i().image && te(Z);
    });
    var M = L(S, 2), P = y(M);
    er(P, { get url() {
      return e(q);
    }, class: "kaching-bundles__mix-and-match-choose-product__product-link", children: (te, E) => {
      var ie = m_(), J = y(ie, !0);
      x(ie), ve(() => ft(J, i().title)), p(te, ie);
    }, $$slots: { default: !0 } });
    var R = L(P, 2), Q = (te) => {
      var E = x_();
      Ge(y(E), () => e(H)), x(E), p(te, E);
    };
    O(R, (te) => {
      e(H) && te(Q);
    });
    var K = L(R, 2), ce = (te) => {
      var E = P_(), ie = y(E);
      st(ie, () => e(V), (j) => {
        var W = y_();
        Ge(y(W), () => s()(e(V))), x(W), p(j, W);
      });
      var J = L(ie, 2), C = (j) => {
        var W = ze();
        st(fe(W), () => e(T), (X) => {
          var le = w_();
          Ge(y(le), () => s()(e(T))), x(le), p(X, le);
        }), p(j, W);
      };
      O(J, (j) => {
        e(T) && e(T) > e(V) && j(C);
      }), x(E), p(te, E);
    };
    O(K, (te) => {
      h().discountType !== "specific" && te(ce);
    });
    var F = L(K, 2), G = (te) => {
      var E = S_(), ie = y(E);
      la(ie, { get product() {
        return i();
      }, class: "kaching-bundles__mix-and-match-choose-product__product-option-names" }), Jn(L(ie, 2), { get product() {
        return i();
      }, get selectedVariantId() {
        return e(m);
      }, onChange: ne }), x(E), p(te, E);
    };
    O(F, (te) => {
      i().variants.length > 1 && te(G);
    }), x(M), x(se), Wt(L(se, 2), { element: "span", class: "kaching-bundles__mix-and-match-choose-product__product-button", onclick: function() {
      g()({ product: i(), variant: e(z) });
    }, children: (te, E) => {
      ba();
      var ie = Zn();
      ve((J) => ft(ie, J), [() => o()(e(D))]), p(te, ie);
    }, $$slots: { default: !0 } }), x(N), p(n, N);
    var U = lt(B);
    return l(), U;
  }
  Je(jd, { product: {}, dealBlock: {}, dealBar: {}, modal: {}, onChoose: {} }, [], [], !0);
  const C_ = { red: 0, green: 0, blue: 0, alpha: 0.5 }, I_ = { buttonSize: 16, textSize: 14, overlayColor: { red: 0, green: 0, blue: 0, alpha: 0.5 }, priceColor: { red: 0, green: 0, blue: 0, alpha: 1 }, compareAtPriceColor: { red: 128, green: 128, blue: 128, alpha: 1 }, textColor: { red: 0, green: 0, blue: 0, alpha: 1 }, buttonColor: { red: 0, green: 0, blue: 0, alpha: 1 }, buttonTextColor: { red: 255, green: 255, blue: 255, alpha: 1 }, productPhotoSize: 100, heading: "Select product", buttonText: "Choose" };
  var M_ = $('<img alt="Close"/>'), z_ = $('<div class="kaching-bundles__mix-and-match-choose-product__empty-state"> </div>'), $_ = $('<div class="kaching-bundles__mix-and-match-choose-product"><div class="kaching-bundles__mix-and-match-choose-product__header"><h2 class="kaching-bundles__mix-and-match-choose-product__heading"><!></h2> <!></div> <div class="kaching-bundles__mix-and-match-choose-product__products"><!></div></div>');
  function Io(n, t) {
    it(t, !0);
    const r = () => $e(h, "$translate", a), [a, s] = vt(), o = k(t, "dealBlock", 7), c = k(t, "dealBar", 7), l = k(t, "products", 23, () => []), i = k(t, "onChoose", 7), u = k(t, "onClose", 7), h = Mt(), f = d(() => {
      var B;
      return (B = o().mixAndMatchChooseProductModal) != null ? B : I_;
    }), g = d(() => ((B) => pn({ "kaching-mix-and-match-choose-product-button-size": B.buttonSize + "px", "kaching-mix-and-match-choose-product-text-size": B.textSize + "px", "kaching-mix-and-match-choose-product-price-color": Ne(B.priceColor), "kaching-mix-and-match-choose-product-compare-at-price-color": Ne(B.compareAtPriceColor), "kaching-mix-and-match-choose-product-text-color": Ne(B.textColor), "kaching-mix-and-match-choose-product-button-color": Ne(B.buttonColor), "kaching-mix-and-match-choose-product-button-text-color": Ne(B.buttonTextColor), "kaching-mix-and-match-choose-product-photo-size": B.productPhotoSize + "px" }))(e(f)));
    var b = { get dealBlock() {
      return o();
    }, set dealBlock(B) {
      o(B), _();
    }, get dealBar() {
      return c();
    }, set dealBar(B) {
      c(B), _();
    }, get products() {
      return l();
    }, set products(B = []) {
      l(B), _();
    }, get onChoose() {
      return i();
    }, set onChoose(B) {
      i(B), _();
    }, get onClose() {
      return u();
    }, set onClose(B) {
      u(B), _();
    } }, v = $_(), w = y(v), m = y(w), z = y(m), I = (B) => {
      var N = Zn();
      ve((se) => ft(N, se), [() => r()(e(f).heading)]), p(B, N);
    };
    O(z, (B) => {
      e(f).heading && B(I);
    }), x(m);
    var V = L(m, 2), T = (B) => {
      Wt(B, { element: "span", class: "kaching-bundles__mix-and-match-choose-product__close", get onclick() {
        return u();
      }, children: (N, se) => {
        var S = M_();
        ve(() => Ie(S, "src", po)), p(N, S);
      }, $$slots: { default: !0 } });
    };
    O(V, (B) => {
      u() && B(T);
    }), x(w);
    var q = L(w, 2), ee = y(q), H = (B) => {
      var N = z_(), se = y(N, !0);
      x(N), ve((S) => ft(se, S), [() => r()("system.no_products_available")]), p(B, N);
    }, D = (B) => {
      var N = ze();
      Vt(fe(N), 17, l, (se) => se.id, (se, S) => {
        jd(se, { get dealBlock() {
          return o();
        }, get dealBar() {
          return c();
        }, get modal() {
          return e(f);
        }, get product() {
          return e(S);
        }, get onChoose() {
          return i();
        } });
      }), p(B, N);
    };
    O(ee, (B) => {
      l().length === 0 ? B(H) : B(D, !1);
    }), x(q), x(v), ve(() => Gt(v, e(g))), p(n, v);
    var ne = lt(b);
    return s(), ne;
  }
  function D_(n, t) {
    n.target === n.currentTarget && t()();
  }
  Je(Io, { dealBlock: {}, dealBar: {}, products: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var V_ = $('<div class="kaching-bundles"><div class="kaching-bundles__mix-and-match-choose-product-modal" role="none"><div class="kaching-bundles__mix-and-match-choose-product-modal__content"><!></div></div></div>');
  function Ed(n, t) {
    it(t, !0);
    const r = k(t, "dealBlock", 7), a = k(t, "dealBar", 7), s = k(t, "products", 23, () => []), o = k(t, "isOpen", 7), c = k(t, "onChoose", 7), l = k(t, "onClose", 7);
    var i = { get dealBlock() {
      return r();
    }, set dealBlock(g) {
      r(g), _();
    }, get dealBar() {
      return a();
    }, set dealBar(g) {
      a(g), _();
    }, get products() {
      return s();
    }, set products(g = []) {
      s(g), _();
    }, get isOpen() {
      return o();
    }, set isOpen(g) {
      o(g), _();
    }, get onChoose() {
      return c();
    }, set onChoose(g) {
      c(g), _();
    }, get onClose() {
      return l();
    }, set onClose(g) {
      l(g), _();
    } }, u = ze(), h = fe(u), f = (g) => {
      gl(g, { target: "body", children: (b, v) => {
        var w = V_(), m = y(w);
        m.__click = [D_, l];
        var z = y(m);
        Io(y(z), { get dealBlock() {
          return r();
        }, get dealBar() {
          return a();
        }, get products() {
          return s();
        }, get onChoose() {
          return c();
        }, get onClose() {
          return l();
        } }), x(z), x(m), x(w), ve((I) => Gt(m, I), [() => (function(I) {
          var V;
          return pn({ "kaching-mix-and-match-choose-product-overlay-color": Ne(((V = I.mixAndMatchChooseProductModal) == null ? void 0 : V.overlayColor) || C_) });
        })(r())]), p(b, w);
      }, $$slots: { default: !0 } });
    };
    return O(h, (g) => {
      o() && g(f);
    }), p(n, u), lt(i);
  }
  jn(["click"]), Je(Ed, { dealBlock: {}, dealBar: {}, products: {}, isOpen: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var A_ = $('<img alt="" class="kaching-bundles__mix-and-match-product__image"/>'), T_ = $('<div class="kaching-bundles__mix-and-match-product__image-placeholder"></div>'), q_ = $('<div class="kaching-bundles__mix-and-match-product__title"> </div>'), G_ = $('<div class="kaching-bundles__mix-and-match-product__pricing"><!></div>'), O_ = $('<div class="kaching-bundles__mix-and-match-product"><!> <div class="kaching-bundles__mix-and-match-product__content"><!> <!> <!></div> <!> <!></div> <!>', 1);
  function Rd(n, t) {
    it(t, !0);
    const [r, a] = vt();
    let s = k(t, "dealBlock", 7), o = k(t, "dealBar", 7), c = k(t, "bundleProduct", 7), l = k(t, "product", 7), i = k(t, "swapProducts", 7), u = k(t, "dealBarSelected", 7), h = k(t, "currentVariantId", 7), f = k(t, "mainVariantId", 7), g = k(t, "pricing", 7), b = k(t, "onSwap", 7), v = k(t, "onChange", 7);
    const w = gn(), m = Mt();
    let z = Ve(void 0), I = Ve(!1);
    const V = d(() => u() && i().length > 1), T = d(() => $e(m, "$translate", r)(o().buttonText || "Change"));
    function q() {
      ae(I, !0);
    }
    function ee(U) {
      ae(I, !1), ae(z, U.variant.id, !0), b()(U.product);
    }
    function H() {
      ae(I, !1);
    }
    const D = d(() => {
      var U, te;
      return (te = (U = l()) == null ? void 0 : U.variants) != null ? te : [];
    }), ne = d(() => {
      var U, te;
      return e(z) !== void 0 && e(D).some(({ id: E }) => E === e(z)) ? e(z) : c().productGID === "default" && h() && e(D).some(({ id: E }) => E === h()) ? h() : e(D).length > 0 ? (te = (U = e(D).find((E) => E.availableForSale)) == null ? void 0 : U.id) != null ? te : e(D)[0].id : void 0;
    }), B = d(() => {
      var U;
      return e(ne) ? (U = l()) == null ? void 0 : U.variants.find((te) => te.id === e(ne)) : void 0;
    }), N = d(() => {
      var U;
      return (U = l()) != null && U.url && e(B) ? `${l().url}?variant=${e(B).id}` : void 0;
    }), se = d(() => {
      var U, te;
      return ((U = e(B)) == null ? void 0 : U.image) || ((te = l()) == null ? void 0 : te.image);
    }), S = d(() => u() && l() && e(D).length > 1 && e(ne)), Z = d(() => u() && c().productGID !== "default" ? e(N) : void 0), M = d(() => l() ? c().title ? hn({ priceFormatter: $e(w, "$formatPrice", r), product: l(), totalFullPrice: 0, totalDiscountedPrice: 0, quantity: 1, unitQuantity: null })(c().title) : l().title : "");
    function P(U) {
      ae(z, U, !0);
    }
    let R;
    tt(() => {
      e(B) && Jt(() => {
        v()({ variant: e(B), product: l() });
      });
    }), fr(() => {
      c().productGID, ae(z, void 0), R = void 0;
    }), fr(() => {
      const U = c().productGID === "default";
      if (!(U || !s().disableVariantOptionSync)) return;
      const te = U ? h() : f();
      if (!te || !l() || te === R) return;
      const E = R;
      if (R = te, !e(D).some((C) => C.id === te)) return;
      const ie = e(z) === void 0, J = e(z) === E && E !== void 0;
      (ie || J) && ae(z, te, !0);
    });
    var Q = { get dealBlock() {
      return s();
    }, set dealBlock(U) {
      s(U), _();
    }, get dealBar() {
      return o();
    }, set dealBar(U) {
      o(U), _();
    }, get bundleProduct() {
      return c();
    }, set bundleProduct(U) {
      c(U), _();
    }, get product() {
      return l();
    }, set product(U) {
      l(U), _();
    }, get swapProducts() {
      return i();
    }, set swapProducts(U) {
      i(U), _();
    }, get dealBarSelected() {
      return u();
    }, set dealBarSelected(U) {
      u(U), _();
    }, get currentVariantId() {
      return h();
    }, set currentVariantId(U) {
      h(U), _();
    }, get mainVariantId() {
      return f();
    }, set mainVariantId(U) {
      f(U), _();
    }, get pricing() {
      return g();
    }, set pricing(U) {
      g(U), _();
    }, get onSwap() {
      return b();
    }, set onSwap(U) {
      b(U), _();
    }, get onChange() {
      return v();
    }, set onChange(U) {
      v(U), _();
    } }, K = ze(), ce = fe(K), F = (U) => {
      var te = O_(), E = fe(te), ie = y(E), J = (ke) => {
        er(ke, { get url() {
          return e(Z);
        }, class: "kaching-bundles__mix-and-match-product__image-link", children: (pe, Ce) => {
          var oe = A_();
          Ie(oe, "height", 50), Ie(oe, "width", 50), ve(() => Ie(oe, "src", e(se))), p(pe, oe);
        }, $$slots: { default: !0 } });
      }, C = (ke) => {
        p(ke, T_());
      };
      O(ie, (ke) => {
        e(se) ? ke(J) : ke(C, !1);
      });
      var j = L(ie, 2), W = y(j);
      er(W, { get url() {
        return e(Z);
      }, class: "kaching-bundles__mix-and-match-product__title-link", children: (ke, pe) => {
        var Ce = q_(), oe = y(Ce, !0);
        x(Ce), ve(() => ft(oe, e(M))), p(ke, Ce);
      }, $$slots: { default: !0 } });
      var X = L(W, 2);
      ca(X, { get dealBlock() {
        return s();
      }, get variant() {
        return e(B);
      } });
      var le = L(X, 2), A = (ke) => {
        {
          let pe = d(() => e(ne) || 0);
          Jn(ke, { get product() {
            return l();
          }, get selectedVariantId() {
            return e(pe);
          }, onChange: P });
        }
      };
      O(le, (ke) => {
        e(S) && ke(A);
      }), x(j);
      var re = L(j, 2), ue = (ke) => {
        var pe = G_();
        ds(y(pe), { get discountedPrice() {
          return g().discountedPrice;
        }, get fullPrice() {
          return g().fullPrice;
        }, unitPrice: null, unitPriceReference: null, ignoreUnitPrice: !0 }), x(pe), p(ke, pe);
      };
      O(re, (ke) => {
        g() && ke(ue);
      });
      var _e = L(re, 2), ge = (ke) => {
        Wt(ke, { element: "div", class: "kaching-bundles__mix-and-match-product__swap-button", onclick: q, children: (pe, Ce) => {
          ba();
          var oe = Zn();
          ve(() => ft(oe, e(T))), p(pe, oe);
        }, $$slots: { default: !0 } });
      };
      O(_e, (ke) => {
        e(V) && ke(ge);
      }), x(E), Ed(L(E, 2), { get dealBlock() {
        return s();
      }, get dealBar() {
        return o();
      }, get products() {
        return i();
      }, get isOpen() {
        return e(I);
      }, onChoose: ee, onClose: H }), p(U, te);
    };
    O(ce, (U) => {
      l() && U(F);
    }), p(n, K);
    var G = lt(Q);
    return a(), G;
  }
  Je(Rd, { dealBlock: {}, dealBar: {}, bundleProduct: {}, product: {}, swapProducts: {}, dealBarSelected: {}, currentVariantId: {}, mainVariantId: {}, pricing: {}, onSwap: {}, onChange: {} }, [], [], !0);
  const Nd = (n, t) => {
    if (!t || t.length === 0) return n;
    const r = t.map(Nt);
    return { ...n, variants: n.variants.filter((a) => r.includes(a.id)) };
  };
  var F_ = An('<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 6.5V14.5M6.5 10.5H14.5M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Qd(n) {
    p(n, F_());
  }
  function L_(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  Je(Qd, {}, [], [], !0);
  var j_ = $('<img class="kaching-bundles__bar-image" alt=""/>'), E_ = $('<div class="kaching-bundles__bar-radio"></div>'), R_ = $('<span class="kaching-bundles__bar-title"><!></span>'), N_ = $('<span class="kaching-bundles__bar-label"><!></span>'), Q_ = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), W_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), U_ = $("<!> <!>", 1), H_ = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), Z_ = $('<div class="kaching-bundles__mix-and-match-products__placeholder"><span>Select product</span></div>'), J_ = $('<div class="kaching-bundles__mix-and-match-products__divider"><div class="kaching-bundles__mix-and-match-products__divider-line">&ZeroWidthSpace;</div> <div class="kaching-bundles__mix-and-match-products__divider-icon"><!></div> <div class="kaching-bundles__mix-and-match-products__divider-line">&ZeroWidthSpace;</div></div>'), Y_ = $("<!> <!>", 1), K_ = $("<div></div>"), X_ = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!></div> <!> <!> <!> <!>', 1), e0 = $('<div><input type="radio"/> <!> <!></div>');
  function Wd(n, t) {
    it(t, !0);
    const r = () => $e(N, "$config", o), a = () => $e(ne, "$formatPrice", o), s = () => $e(D, "$translate", o), [o, c] = vt(), l = k(t, "dealBlock", 7), i = k(t, "dealBar", 7), u = k(t, "product", 7), h = k(t, "otherProducts", 23, () => []), f = k(t, "complementaryProducts", 23, () => []), g = k(t, "currentVariantId", 7), b = k(t, "componentId", 7), v = k(t, "selectedDealBarIndex", 7), w = k(t, "selected", 7, !1), m = k(t, "sellingPlan", 7), z = k(t, "onProgressiveGiftsChange", 7), I = k(t, "onDealBarSelect", 7), V = k(t, "onDealBarDeselect", 7), T = k(t, "onVariantSelect", 7), q = k(t, "onVariantsChange", 7), ee = k(t, "onPersonalisationsChange", 7), H = k(t, "personalisationInitialValues", 23, () => []), D = Mt(), ne = gn(), B = En(), N = vn();
    let se = Ve(ct({})), S = Ve(ct({}));
    const Z = d(() => Object.fromEntries(i().bundleProducts.map((Y) => [Y.id, M(Y).filter(P)])));
    function M(Y) {
      var ye;
      const Me = new Map(((ye = Y.selectedProducts) != null ? ye : []).map((De) => [Nt(De.id), De.variantGIDs])), he = h().filter((De) => Me.has(De.id)).map((De) => Nd(De, Me.get(De.id))), Pe = (function(De) {
        if (!De) return;
        if (De === "default") return u();
        const we = Nt(De);
        return h().find((me) => me.id === we);
      })(Y.productGID);
      return Pe ? [Nd(Pe, Y.variantGIDs), ...he.filter((De) => De.id !== Pe.id)] : he;
    }
    function P(Y) {
      return Y.availableForSale && Y.variants.some((ye) => ye.availableForSale);
    }
    let R = Ve(ct([])), Q = Ve(ct([])), K = Ve(ct([]));
    const ce = d(() => `${i().id}_${b()}`), F = d(() => i().bundleProducts.filter(({ productGID: Y }) => Y)), G = d(() => e(F).every((Y) => Ce(Y))), U = d(() => i().showProductsOnlyWhenSelected && !w()), te = d(() => e(F).every((Y) => {
      var ye, Me;
      return ((Me = (ye = e(Z)[Y.id]) == null ? void 0 : ye.length) != null ? Me : 0) > 0;
    })), E = d(() => {
      return l() ? (Y = l(), ye = e(se), i().bundleProducts.map((Me) => {
        const he = ye[Me.id];
        if (!he) return 0;
        const { variant: Pe } = he;
        let De = Pe.price;
        return Pe.compareAtPrice && Y.useProductCompareAtPrice && (De = Math.max(De, Pe.compareAtPrice)), De;
      }).reduce((Me, he) => Me + he, 0)) : 0;
      var Y, ye;
    }), ie = d(() => ul(e(E), e(R), e(Q))), J = d(() => l().priceRounding ? { perItem: !1, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), C = d(() => l() ? os(i(), e(se), r().currencyRate, e(J), m()) : 0), j = d(() => e(ie) > e(C)), W = d(() => i().showProductPrices ? (function(Y, ye, Me, he, Pe, De) {
      const we = Y.bundleProducts.filter(({ productGID: at }) => at).flatMap((at) => {
        const rt = ye[at.id];
        if (!rt) return [];
        const Bt = tr(rt.product, rt.variant, Pe), Dt = Bt ? co(rt.variant.price, Bt) : rt.variant.price, { price: dt, compareAtPrice: At } = rt.variant, Yt = De && At ? Math.max(dt, At) : dt;
        return [{ id: at.id, basisPrice: Dt, fullPrice: Yt }];
      }), me = we.reduce((at, rt) => at + rt.basisPrice, 0);
      if (me === 0) return Object.fromEntries(we.map((at) => [at.id, { discountedPrice: 0, fullPrice: at.fullPrice }]));
      const qe = os(Y, ye, Me, he, Pe), Ue = we.map((at) => {
        const rt = qe * at.basisPrice / me;
        return { ...at, share: Math.floor(rt), remainder: rt % 1 };
      });
      let Ye = qe - Ue.reduce((at, { share: rt }) => at + rt, 0);
      for (const at of [...Ue].sort((rt, Bt) => Bt.remainder - rt.remainder)) {
        if (Ye <= 0) break;
        at.share += 1, Ye -= 1;
      }
      return Object.fromEntries(Ue.map((at) => [at.id, { discountedPrice: at.share, fullPrice: at.fullPrice }]));
    })(i(), e(se), r().currencyRate, e(J), m(), l().useProductCompareAtPrice) : void 0), X = d(() => {
      var Y;
      const ye = e(F)[0];
      if (ye) return (Y = e(se)[ye.id]) == null ? void 0 : Y.variant.id;
    }), le = d(() => hn({ priceFormatter: a(), product: u(), dealBar: i(), totalFullPrice: e(E), totalCompareAtPrice: e(ie), totalDiscountedPrice: e(C), quantity: 1, unitQuantity: null, sellingPlan: m() })), A = d(() => e(le)(s()(i().title))), re = d(() => e(le)(s()(i().subtitle))), ue = d(() => e(le)(s()(i().label))), _e = d(() => ol(l(), i()).map((Y) => wa(Y, s(), e(le)))), ge = d(() => Pa(e(_e))), ke = d(() => $e(B, "$getMediaImageUrl", o)(i().mediaImageGID) || dl);
    function pe(Y) {
      w() && (Y.preventDefault(), Y.stopPropagation(), V()());
    }
    function Ce(Y) {
      var ye, Me;
      return (Me = e(S)[Y.id]) != null ? Me : (ye = e(Z)[Y.id]) == null ? void 0 : ye[0];
    }
    Ra(() => {
      w() && I()({ dealBarId: i().id, preselected: !0 });
    }), tt(() => {
      w() && (fa(e(se)), fa(e(K)), fa(e(R)), fa(e(Q)), m(), Jt(() => {
        (function() {
          if (!i().bundleProducts.map(({ id: we }) => we).every((we) => e(se)[we])) return;
          const Y = [];
          for (const we of i().bundleProducts) {
            const me = e(se)[we.id];
            me && Y.push({ id: we.id, variant: me.variant, product: me.product, quantity: 1 });
          }
          if (Y.length === 0) return;
          const ye = e(C) + e(K).reduce((we, me) => we + me.discountedPrice, 0), Me = e(R).reduce((we, me) => me.showPrice ? we + me.fullPrice : we, 0) + e(Q).reduce((we, me) => we + me.fullPrice * me.quantity, 0), he = e(E) + e(K).reduce((we, me) => we + me.fullPrice, 0) + Me, Pe = os(i(), e(se), r().currencyRate, e(J), void 0), De = u().sellingPlans.map((we) => ({ sellingPlanId: we.id, discountedPrice: os(i(), e(se), r().currencyRate, e(J), we) }));
          q()({ bundleProducts: Y, freeGifts: [...e(R), ...e(Q)], upsells: e(K), pricing: { discountedPrice: ye, fullPrice: he, giftValue: Me, discountedPricePerItem: e(C), fullPricePerItem: e(E), discountedPriceWithoutSellingPlan: Pe, discountedPricesForSellingPlans: De } });
        })();
      }));
    });
    const oe = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? hl(i().showAsSoldOut) : "");
    var xe = { get dealBlock() {
      return l();
    }, set dealBlock(Y) {
      l(Y), _();
    }, get dealBar() {
      return i();
    }, set dealBar(Y) {
      i(Y), _();
    }, get product() {
      return u();
    }, set product(Y) {
      u(Y), _();
    }, get otherProducts() {
      return h();
    }, set otherProducts(Y = []) {
      h(Y), _();
    }, get complementaryProducts() {
      return f();
    }, set complementaryProducts(Y = []) {
      f(Y), _();
    }, get currentVariantId() {
      return g();
    }, set currentVariantId(Y) {
      g(Y), _();
    }, get componentId() {
      return b();
    }, set componentId(Y) {
      b(Y), _();
    }, get selectedDealBarIndex() {
      return v();
    }, set selectedDealBarIndex(Y) {
      v(Y), _();
    }, get selected() {
      return w();
    }, set selected(Y = !1) {
      w(Y), _();
    }, get sellingPlan() {
      return m();
    }, set sellingPlan(Y) {
      m(Y), _();
    }, get onProgressiveGiftsChange() {
      return z();
    }, set onProgressiveGiftsChange(Y) {
      z(Y), _();
    }, get onDealBarSelect() {
      return I();
    }, set onDealBarSelect(Y) {
      I(Y), _();
    }, get onDealBarDeselect() {
      return V();
    }, set onDealBarDeselect(Y) {
      V(Y), _();
    }, get onVariantSelect() {
      return T();
    }, set onVariantSelect(Y) {
      T(Y), _();
    }, get onVariantsChange() {
      return q();
    }, set onVariantsChange(Y) {
      q(Y), _();
    }, get onPersonalisationsChange() {
      return ee();
    }, set onPersonalisationsChange(Y) {
      ee(Y), _();
    }, get personalisationInitialValues() {
      return H();
    }, set personalisationInitialValues(Y = []) {
      H(Y), _();
    } }, Fe = ze(), Ae = fe(Fe), Oe = (Y) => {
      var ye = e0();
      let Me;
      var he = y(ye);
      aa(he), he.__change = [L_, I, i];
      var Pe = L(he, 2);
      Ja(Pe, { get for() {
        return e(ce);
      }, get soldOut() {
        return i().showAsSoldOutEnabled;
      }, get borderHost() {
        return e(ge);
      }, children: (me, qe) => {
        var Ue = X_(), Ye = fe(Ue);
        Vt(Ye, 17, () => e(_e), (We) => We.id, (We, Re) => {
          oa(We, { get badge() {
            return e(Re);
          }, get blockLayout() {
            return l().blockLayout;
          } });
        });
        var at = L(Ye, 2), rt = y(at);
        Wt(rt, { element: "div", class: "kaching-bundles__bar-main", onclick: pe, children: (We, Re) => {
          var pt = H_(), nt = fe(pt), ut = (Xe) => {
            var kt = j_();
            ve(() => Ie(kt, "src", e(ke))), p(Xe, kt);
          }, et = (Xe) => {
            p(Xe, E_());
          };
          O(nt, (Xe) => {
            i().mediaImageGID ? Xe(ut) : Xe(et, !1);
          });
          var ot = L(nt, 2), wt = y(ot), ht = y(wt), Ht = y(ht);
          st(Ht, () => e(A), (Xe) => {
            var kt = R_();
            Ge(y(kt), () => e(A)), x(kt), p(Xe, kt);
          });
          var Tn = L(Ht, 2), _n = (Xe) => {
            var kt = ze();
            st(fe(kt), () => e(ue), (yt) => {
              var Zt = N_();
              Ge(y(Zt), () => e(ue)), x(Zt), p(yt, Zt);
            }), p(Xe, kt);
          };
          O(Tn, (Xe) => {
            e(ue) && Xe(_n);
          }), x(ht);
          var en = L(ht, 2), Kt = (Xe) => {
            var kt = ze();
            st(fe(kt), () => e(re), (yt) => {
              var Zt = Q_();
              Ge(y(Zt), () => e(re)), x(Zt), p(yt, Zt);
            }), p(Xe, kt);
          };
          O(en, (Xe) => {
            e(re) && Xe(Kt);
          }), x(wt);
          var tn = L(wt, 2), _t = y(tn), je = (Xe) => {
            var kt = U_(), yt = fe(kt);
            st(yt, () => e(C), (zt) => {
              Nr(zt, { get amount() {
                return e(C);
              }, showPricesPerItem: !1, get unitLabel() {
                return l().unitLabel;
              } });
            });
            var Zt = L(yt, 2), Ct = (zt) => {
              var Qt = ze();
              st(fe(Qt), () => e(ie), (cn) => {
                var Ut = W_();
                Ge(y(Ut), () => a()(e(ie))), x(Ut), ve((Sn) => Ie(Ut, "data-a11y-label", Sn), [() => s()("system.original_price")]), p(cn, Ut);
              }), p(zt, Qt);
            };
            O(Zt, (zt) => {
              e(j) && zt(Ct);
            }), p(Xe, kt);
          };
          O(_t, (Xe) => {
            e(G) && Xe(je);
          }), x(tn), x(ot), p(We, pt);
        }, $$slots: { default: !0 } });
        var Bt = L(rt, 2), Dt = (We) => {
          Ba(We, { get highlights() {
            return i().highlights;
          }, get isSelected() {
            return w();
          }, get replaceLiquid() {
            return e(le);
          } });
        };
        O(Bt, (We) => {
          i().highlights && We(Dt);
        });
        var dt = L(Bt, 2), At = (We) => {
          var Re = K_();
          let pt;
          Vt(Re, 23, () => i().bundleProducts, (nt) => nt.id, (nt, ut, et) => {
            var ot = Y_(), wt = fe(ot), ht = (en) => {
              {
                let Kt = d(() => Ce(e(ut))), tn = d(() => {
                  var _t;
                  return (_t = e(W)) == null ? void 0 : _t[e(ut).id];
                });
                Rd(en, { get bundleProduct() {
                  return e(ut);
                }, get product() {
                  return e(Kt);
                }, get swapProducts() {
                  return e(Z)[e(ut).id];
                }, get dealBlock() {
                  return l();
                }, get dealBar() {
                  return i();
                }, get dealBarSelected() {
                  return w();
                }, get currentVariantId() {
                  return g();
                }, get mainVariantId() {
                  return e(X);
                }, get pricing() {
                  return e(tn);
                }, onSwap: (_t) => (function(je, Xe) {
                  e(S)[je] = Xe;
                })(e(ut).id, _t), onChange: (_t) => (function(je, Xe) {
                  const { variant: kt, product: yt } = Xe;
                  e(se)[je] = { variant: kt, product: yt }, w() && i().bundleProducts.map(({ id: Zt }) => Zt).every((Zt) => e(se)[Zt]) && je === i().bundleProducts[0].id && T()({ variantId: kt.id });
                })(e(ut).id, _t) });
              }
            }, Ht = (en) => {
              var Kt = ze(), tn = fe(Kt), _t = (je) => {
                p(je, Z_());
              };
              O(tn, (je) => {
                r().preview && je(_t);
              }, !0), p(en, Kt);
            };
            O(wt, (en) => {
              e(ut).productGID ? en(ht) : en(Ht, !1);
            });
            var Tn = L(wt, 2), _n = (en) => {
              var Kt = J_(), tn = L(y(Kt), 2);
              Qd(y(tn)), x(tn), ba(2), x(Kt), p(en, Kt);
            };
            O(Tn, (en) => {
              e(et) < i().bundleProducts.length - 1 && en(_n);
            }), p(nt, ot);
          }), x(Re), ve((nt) => pt = Et(Re, 1, "kaching-bundles__mix-and-match-products", null, pt, nt), [() => ({ "kaching-bundles__mix-and-match-products--hidden": e(U) })]), p(We, Re);
        };
        O(dt, (We) => {
          e(G) && We(At);
        });
        var Yt = L(dt, 2), Se = (We) => {
          {
            let Re = d(() => e(X) ? [e(X)] : []);
            Ya(We, { get product() {
              return u();
            }, get productPersonalisation() {
              return i().productPersonalisation;
            }, get selectedVariantIds() {
              return e(Re);
            }, quantity: 1, get addPersonalisationModal() {
              return l().addPersonalisationModal;
            }, get onPersonalisationsChange() {
              return ee();
            }, get initialValues() {
              return H();
            } });
          }
        };
        O(Yt, (We) => {
          w() && i().productPersonalisation && (l().blockLayout === "vertical" || l().blockLayout === "plain") && We(Se);
        }), x(at);
        var be = L(at, 2);
        {
          let We = d(() => i().upsells || []);
          Ci(be, { get dealBlock() {
            return l();
          }, get dealBarId() {
            return i().id;
          }, get upsells() {
            return e(We);
          }, get otherProducts() {
            return h();
          }, get complementaryProducts() {
            return f();
          }, get dealBarSelected() {
            return w();
          }, get dealSellingPlan() {
            return m();
          }, sets: 1, onChange: (Re) => {
            ae(K, Re, !0);
          } });
        }
        var Ze = L(be, 2);
        {
          let We = d(() => ({ ...i(), dealBarType: gt.Bundle, quantitySelector: !1, bundleProducts: i().bundleProducts.map((Re) => ({ ...Re, quantity: 1, variantGIDs: null, defaultVariantGID: null, mediaImageGID: null, discountType: "default", discountValue: 0 })) }));
          zi(Ze, { get selectedDealBarIndex() {
            return v();
          }, get onChange() {
            return z();
          }, get dealBlock() {
            return l();
          }, get sellingPlan() {
            return m();
          }, get dealBar() {
            return e(We);
          }, get otherProducts() {
            return h();
          }, get selected() {
            return w();
          }, get progressiveGifts() {
            return l().progressiveGifts;
          } });
        }
        var Ke = L(Ze, 2);
        {
          let We = d(() => i().freeGifts || []);
          Bi(Ke, { get dealBlock() {
            return l();
          }, get freeGifts() {
            return e(We);
          }, get freeGiftsSummary() {
            return i().freeGiftsSummary;
          }, get otherProducts() {
            return h();
          }, get dealBarSelected() {
            return w();
          }, get sellingPlan() {
            return m();
          }, sets: 1, onChange: (Re) => {
            ae(R, Re, !0);
          } });
        }
        var He = L(Ke, 2);
        {
          let We = d(() => i().multipleGiftsSelectors || []);
          Mi(He, { get dealBlock() {
            return l();
          }, get multipleGiftsSelectors() {
            return e(We);
          }, get sellingPlan() {
            return m();
          }, get otherProducts() {
            return h();
          }, onChange: (Re) => {
            ae(Q, Re, !0);
          } });
        }
        p(me, Ue);
      }, $$slots: { default: !0 } });
      var De = L(Pe, 2), we = (me) => {
        Ii(me, { get showAsSoldOut() {
          return i().showAsSoldOut;
        }, get replaceLiquid() {
          return e(le);
        } });
      };
      O(De, (me) => {
        i().showAsSoldOutEnabled && i().showAsSoldOut && me(we);
      }), x(ye), ve((me) => {
        var qe;
        Me = Et(ye, 1, "kaching-bundles__bar", null, Me, me), Ie(ye, "data-deal-bar-id", i().id), Gt(ye, e(oe)), Ie(he, "name", `kaching-bundles-deal-${(qe = b()) != null ? qe : ""}`), Na(he, i().id), Ie(he, "id", e(ce)), tl(he, w()), he.disabled = i().showAsSoldOutEnabled;
      }, [() => ({ "kaching-bundles__bar--selected": w(), "kaching-bundles__bar--disabled": !e(te) && r().preview })]), p(Y, ye);
    };
    O(Ae, (Y) => {
      (e(te) || r().preview) && Y(Oe);
    }), p(n, Fe);
    var Te = lt(xe);
    return c(), Te;
  }
  jn(["change"]), Je(Wd, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, currentVariantId: {}, componentId: {}, selectedDealBarIndex: {}, selected: {}, sellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var t0 = An('<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.2008 16C27.2008 18.9705 26.0208 21.8192 23.9204 23.9196C21.82 26.0201 18.9712 27.2 16.0008 27.2C13.0304 27.2 10.1816 26.0201 8.08119 23.9196C5.98078 21.8192 4.80078 18.9705 4.80078 16C4.80078 13.0296 5.98078 10.1809 8.08119 8.08045C10.1816 5.98005 13.0304 4.80005 16.0008 4.80005C18.9712 4.80005 21.82 5.98005 23.9204 8.08045C26.0208 10.1809 27.2008 13.0296 27.2008 16ZM10.0008 16C10.0008 15.6818 10.1272 15.3766 10.3523 15.1515C10.5773 14.9265 10.8825 14.8 11.2008 14.8H14.8008V11.2C14.8008 10.8818 14.9272 10.5766 15.1523 10.3515C15.3773 10.1265 15.6825 10 16.0008 10C16.319 10 16.6243 10.1265 16.8493 10.3515C17.0744 10.5766 17.2008 10.8818 17.2008 11.2V14.8H20.8008C21.119 14.8 21.4243 14.9265 21.6493 15.1515C21.8744 15.3766 22.0008 15.6818 22.0008 16C22.0008 16.3183 21.8744 16.6235 21.6493 16.8486C21.4243 17.0736 21.119 17.2 20.8008 17.2H17.2008V20.8C17.2008 21.1183 17.0744 21.4235 16.8493 21.6486C16.6243 21.8736 16.319 22 16.0008 22C15.6825 22 15.3773 21.8736 15.1523 21.6486C14.9272 21.4235 14.8008 21.1183 14.8008 20.8V17.2H11.2008C10.8825 17.2 10.5773 17.0736 10.3523 16.8486C10.1272 16.6235 10.0008 16.3183 10.0008 16Z" fill="currentColor"></path></svg>');
  function Ud(n, t) {
    it(t, !0);
    let r = k(t, "class", 7);
    var a = { get class() {
      return r();
    }, set class(o) {
      r(o), _();
    } }, s = t0();
    return ve(() => Et(s, 0, Xi(r()))), p(n, s), lt(a);
  }
  Je(Ud, { class: {} }, [], [], !0);
  const Mo = ia({}), zo = ia(!1);
  function bl(n) {
    zo.set(n);
  }
  function gs(n, t) {
    Mo.update((r) => ({ ...r, [n]: t }));
  }
  const n0 = (n) => {
    const { collectionBreaks: t, colors: r, cornerRadius: a } = n;
    return t ? pn({ "kaching-collection-breaks-product-photo-size": t.productPhotoSize + "px", "kaching-collection-breaks-button-color": t.buttonColor && Ne(t.buttonColor), "kaching-collection-breaks-product-title-color": Ne(r.title), "kaching-collection-breaks-image-border-radius": (a || 0) / 2 + "px" }) : "";
  };
  function r0(n, t) {
    n.target === n.currentTarget && ae(t, !1);
  }
  var a0 = $('<img class="kaching-bundles__collection-product__image" alt=""/>'), i0 = $('<span class="kaching-bundles__collection-product__title"> </span>'), l0 = $("<!> <!>", 1), s0 = $('<img alt=""/>'), o0 = $('<div class="kaching-bundles__collection-product"><div class="kaching-bundles__collection-product__main"><!> <div class="kaching-bundles__collection-product__content"><!> <!> <!></div></div> <!></div>'), c0 = $('<img class="kaching-bundles__collection-product__image" alt="" height="40" width="40"/>'), u0 = $('<div class="kaching-bundles"><div class="kaching-bundles__choose-product-modal" role="none"><div class="kaching-bundles__choose-product-modal__content"><!></div></div></div>'), d0 = $('<div><div class="kaching-bundles__collection-product__main"><!> <!></div> <!></div>');
  function $o(n, t) {
    it(t, !0);
    const r = () => $e(v, "$config", a), [a, s] = vt(), o = k(t, "dealBlock", 7), c = k(t, "dealBar", 7), l = k(t, "mainProduct", 7, null), i = k(t, "products", 7), u = k(t, "selectedProductVariant", 7, null), h = k(t, "onChange", 7), f = k(t, "onRemove", 7), g = Mt(), b = En(), v = vn();
    let w = Ve(!1);
    const m = d(() => o().collectionBreaks), z = d(() => {
      var Q;
      return ((Q = u()) == null ? void 0 : Q.product) || l();
    }), I = d(() => {
      var Q, K;
      return ((Q = u()) == null ? void 0 : Q.variant) || ((K = e(z)) == null ? void 0 : K.variants[0]) || null;
    }), V = d(() => $e(b, "$getMediaImageUrl", a)(e(m).mediaImageGID)), T = d(() => $e(g, "$translate", a)(e(m).buttonText)), q = d(() => e(m).requireItemSelectionAlert), ee = d(() => e(m).requireItemSelectionEnabled), H = d(() => r().preview && r().previewAlerts || $e(zo, "$requireSelectionError", a)), D = d(() => {
      var Q, K;
      return (Q = e(z)) != null && Q.url ? `${e(z).url}?variant=${(K = e(I)) == null ? void 0 : K.id}` : void 0;
    });
    function ne(Q) {
      ae(w, !1), h()(Q);
    }
    function B() {
      var Q;
      (Q = f()) == null || Q();
    }
    function N(Q) {
      const K = e(z).variants.find((ce) => ce.id === Q);
      K && h()({ product: e(z), variant: K });
    }
    var se = { get dealBlock() {
      return o();
    }, set dealBlock(Q) {
      o(Q), _();
    }, get dealBar() {
      return c();
    }, set dealBar(Q) {
      c(Q), _();
    }, get mainProduct() {
      return l();
    }, set mainProduct(Q = null) {
      l(Q), _();
    }, get products() {
      return i();
    }, set products(Q) {
      i(Q), _();
    }, get selectedProductVariant() {
      return u();
    }, set selectedProductVariant(Q = null) {
      u(Q), _();
    }, get onChange() {
      return h();
    }, set onChange(Q) {
      h(Q), _();
    }, get onRemove() {
      return f();
    }, set onRemove(Q) {
      f(Q), _();
    } }, S = ze(), Z = fe(S), M = (Q) => {
      var K = o0(), ce = y(K), F = y(ce);
      {
        let j = d(() => l() ? void 0 : e(D));
        er(F, { get url() {
          return e(j);
        }, class: "kaching-bundles__collection-product__link", children: (W, X) => {
          var le = a0();
          ve(() => Ie(le, "src", e(I).image || e(z).image)), p(W, le);
        }, $$slots: { default: !0 } });
      }
      var G = L(F, 2), U = y(G), te = (j) => {
        {
          let W = d(() => l() ? void 0 : e(D));
          er(j, { get url() {
            return e(W);
          }, class: "kaching-bundles__collection-product__link", children: (X, le) => {
            var A = i0(), re = y(A, !0);
            x(A), ve(() => ft(re, e(z).title)), p(X, A);
          }, $$slots: { default: !0 } });
        }
      };
      O(U, (j) => {
        e(m).showProductName && j(te);
      });
      var E = L(U, 2), ie = (j) => {
        var W = l0(), X = fe(W);
        la(X, { get product() {
          return e(z);
        } });
        var le = L(X, 2);
        {
          let A = d(() => {
            var re;
            return (re = e(I)) == null ? void 0 : re.id;
          });
          Jn(le, { get product() {
            return e(z);
          }, get selectedVariantId() {
            return e(A);
          }, onChange: N });
        }
        p(j, W);
      };
      O(E, (j) => {
        e(z).variants.length > 1 && j(ie);
      }), ca(L(E, 2), { get dealBlock() {
        return o();
      }, get variant() {
        return e(I);
      } }), x(G), x(ce);
      var J = L(ce, 2), C = (j) => {
        Wt(j, { element: "div", class: "kaching-bundles__collection-product__remove-button", "aria-label": "Remove product", onclick: B, children: (W, X) => {
          var le = s0();
          ve(() => Ie(le, "src", "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), p(W, le);
        }, $$slots: { default: !0 } });
      };
      O(J, (j) => {
        l() || j(C);
      }), x(K), p(Q, K);
    }, P = (Q) => {
      var K = d0();
      let ce;
      var F = y(K), G = y(F);
      Wt(G, { element: "div", class: "kaching-bundles__collection-product__choose-product-image", onclick: () => {
        ae(w, !0);
      }, children: (J, C) => {
        var j = ze(), W = fe(j), X = (A) => {
          var re = ze(), ue = fe(re), _e = (ge) => {
            var ke = c0();
            ve(() => Ie(ke, "src", e(V))), p(ge, ke);
          };
          O(ue, (ge) => {
            e(V) && ge(_e);
          }), p(A, re);
        }, le = (A) => {
          Ud(A, { class: "kaching-bundles__collection-product__image kaching-bundles__collection-product__image--default" });
        };
        O(W, (A) => {
          e(m).mediaImageGID ? A(X) : A(le, !1);
        }), p(J, j);
      }, $$slots: { default: !0 } });
      var U = L(G, 2), te = (J) => {
        Wt(J, { element: "div", class: "kaching-bundles__collection-product__choose-product-button", onclick: () => {
          ae(w, !0);
        }, children: (C, j) => {
          ba();
          var W = Zn();
          ve(() => ft(W, e(T))), p(C, W);
        }, $$slots: { default: !0 } });
      };
      O(U, (J) => {
        e(T) && J(te);
      }), x(F);
      var E = L(F, 2), ie = (J) => {
        gl(J, { target: "body", children: (C, j) => {
          var W = u0(), X = y(W);
          X.__click = [r0, w];
          var le = y(X);
          bo(y(le), { get dealBlock() {
            return o();
          }, get dealBar() {
            return c();
          }, get products() {
            return i();
          }, onChoose: ne, onClose: () => {
            ae(w, !1);
          } }), x(le), x(X), x(W), ve((A) => Gt(X, A), [() => (function(A) {
            return pn({ "kaching-choose-product-overlay-color": Ne(A.chooseProductModal.overlayColor) });
          })(o())]), p(C, W);
        }, $$slots: { default: !0 } });
      };
      O(E, (J) => {
        e(w) && J(ie);
      }), x(K), ve((J) => ce = Et(K, 1, "kaching-bundles__collection-product", null, ce, J), [() => ({ "kaching-bundles__collection-product--require-selection": e(H) && e(ee) && e(q) })]), p(Q, K);
    };
    O(Z, (Q) => {
      e(z) && e(I) ? Q(M) : Q(P, !1);
    }), p(n, S);
    var R = lt(se);
    return s(), R;
  }
  function g0(n, t, r, a) {
    t()({ dealBarId: r().id, dealBarQuantity: a(r()), preselected: !1 });
  }
  jn(["click"]), Je($o, { dealBlock: {}, dealBar: {}, mainProduct: {}, products: {}, selectedProductVariant: {}, onChange: {}, onRemove: {} }, [], [], !0);
  var h0 = $('<img class="kaching-bundles__bar-image" alt=""/>'), p0 = $('<div class="kaching-bundles__bar-radio"></div>'), b0 = $('<span class="kaching-bundles__bar-title"><!></span>'), f0 = $('<span class="kaching-bundles__bar-label"><!></span>'), v0 = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), _0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), k0 = $('<div class="kaching-bundles__bar-price"><!></div>'), m0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), x0 = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), y0 = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), w0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), P0 = $("<!> <!>", 1), S0 = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), B0 = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), C0 = $('<div class="kaching-bundles__bar-collection-products"></div>'), I0 = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), M0 = $('<div><input type="radio"/> <!> <!></div>');
  function Hd(n, t) {
    it(t, !0);
    const r = () => $e(Z, "$config", c), a = () => $e(Mo, "$chosenCollectionBreaksProducts", c), s = () => $e(se, "$formatPrice", c), o = () => $e(N, "$translate", c), [c, l] = vt();
    let i = k(t, "dealBlock", 7), u = k(t, "dealBar", 7), h = k(t, "product", 7), f = k(t, "collectionBreaksProducts", 23, () => []), g = k(t, "otherProducts", 23, () => []), b = k(t, "selectedDealBarIndex", 7, null), v = k(t, "complementaryProducts", 23, () => []), w = k(t, "customQuantity", 7, void 0), m = k(t, "currentVariantId", 7, void 0), z = k(t, "componentId", 7), I = k(t, "selected", 7, !1), V = k(t, "globalSellingPlan", 7, void 0), T = k(t, "onDealBarSelect", 7), q = k(t, "onDealBarDeselect", 7), ee = k(t, "onVariantSelect", 7), H = k(t, "onVariantsChange", 7), D = k(t, "onPersonalisationsChange", 7), ne = k(t, "personalisationInitialValues", 23, () => []), B = k(t, "onProgressiveGiftsChange", 7);
    const N = Mt(), se = gn(), S = En(), Z = vn();
    let M = Ve(ct([])), P = Ve(ct([])), R = Ve(ct([]));
    const Q = new Ib(), K = d(() => {
      var Se, be;
      return (be = (Se = i().collectionBreaks) == null ? void 0 : Se.autoFillNotChosenItems) != null && be;
    }), ce = d(() => i().priceRounding ? { perItem: i().showPricesPerItem, precision: i().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), F = d(() => {
      var Se, be;
      return i() && ((be = (Se = i().defaultVariantsV2) == null ? void 0 : Se.find((Ze) => Nt(Ze.productGID) === h().id && Ze.dealBarId === u().id)) == null ? void 0 : be.variantGIDs) || [];
    });
    let G = d(() => E(u())), U = Ve(ct(E(u())));
    fr(() => {
      ae(U, e(G), !0);
    });
    const te = d(() => w() || e(U));
    function E(Se) {
      return Se.dealBarType === gt.Bxgy ? Se.buyQuantity + Se.getQuantity : Number(Se.quantity);
    }
    tt(() => {
      m() && Jt(() => {
        (function(Se, be) {
          if (Object.keys(a()).length === 0 && Se[0]) {
            const Ke = Nt(Se[0]), He = h().variants.find((We) => We.id == Ke);
            if (He) return void gs(0, { product: h(), variant: He });
          }
          const Ze = h().variants.find((Ke) => Ke.id == be);
          if (Ze) return void gs(0, { product: h(), variant: Ze });
          Object.keys(a()).length === 0 && h().variants[0] && gs(0, { product: h(), variant: h().variants[0] });
        })(e(F), m());
      });
    }), tt(() => {
      I() || Q.clear();
    });
    const ie = d(() => f().length === 0 || f().some((Se) => Se.id === h().id)), J = d(() => {
      const Se = Object.fromEntries(Object.entries(a()).filter(([Ze]) => Number(Ze) < e(te)));
      if (!I() || !e(K)) return Se;
      const be = { ...Se };
      for (let Ze = 1; Ze < e(te); Ze++) be[Ze] || Q.has(Ze) || (e(ie) && Se[0] ? be[Ze] = { product: h(), variant: Se[0].variant } : Se[1] && (be[Ze] = { product: Se[1].product, variant: Se[1].variant }));
      return be;
    }), C = d(() => I() ? Object.values(e(J)).map((Se) => ({ variant: Se.variant, quantity: 1 })) : []), j = d(() => (function({ selectedProductVariants: Se, mainProductIsInCollection: be, collectionBreaksProducts: Ze, dealBlock: Ke, quantity: He }) {
      var We;
      const Re = Se.map((ot) => ({ quantity: 1, variant: ot.variant }));
      if (Re.length === 0 || Re.length >= He || (We = Ke.collectionBreaks) != null && We.showChosenProductsPriceOnly) return Re;
      const pt = He - Re.length;
      if (be) {
        const ot = Array.from({ length: pt }, () => Re[0]);
        return [...Re, ...ot];
      }
      const nt = Ze.flatMap((ot) => ot.variants).filter((ot) => ot.availableForSale);
      if (nt.length === 0) return Re;
      const ut = nt.reduce((ot, wt) => wt.price < ot.price ? wt : ot, nt[0]), et = Array.from({ length: pt }, () => ({ quantity: 1, variant: ut }));
      return [...Re, ...et];
    })({ selectedProductVariants: Object.values(e(J)), mainProductIsInCollection: e(ie), collectionBreaksProducts: f(), dealBlock: i(), quantity: e(te) }));
    let W = Ve(void 0);
    const X = d(() => sl(h(), e(j).map((Se) => Se.variant))), le = d(() => {
      var Se, be;
      return (u().sellingPlanEnabled || i().subscriptionsEnabled && ((Se = i().subscriptions) == null ? void 0 : Se.layout) === "link" && ((be = i().subscriptions) == null ? void 0 : be.subscribeByDefault)) && (!i().subscriptionsEnabled || !!V());
    }), A = d(() => e(le) ? uo(u(), e(X), e(W)) : void 0), re = d(() => go(e(A), V(), e(X), h().requiresSellingPlan)), ue = d(() => Object.entries(e(J)).sort(([Se], [be]) => Number(Se) - Number(be)).map(([Se, be]) => ({ key: Se, product: be.product, variant: be.variant }))), _e = d(() => (function(Se, be, Ze) {
      return Ze.map(({ variant: He, quantity: We }) => {
        let Re = He.price;
        const pt = Se.useProductCompareAtPrice || (be.dealBarType === void 0 || be.dealBarType === gt.QuantityBreak) && be.discountType === "default";
        return He.compareAtPrice && pt && (Re = Math.max(Re, He.compareAtPrice)), Re * We;
      }).reduce((He, We) => He + We, 0);
    })(i(), u(), e(j))), ge = d(() => ul(e(_e), e(M), e(P))), ke = d(() => Math.ceil(e(_e) / e(j).length)), pe = d(() => fo(e(te) === 1, e(ge), e(ke))), Ce = d(() => i() && Y(e(j), e(re))), oe = d(() => hn({ priceFormatter: s(), product: h(), selectedVariants: e(C), dealBar: u(), totalFullPrice: e(_e), totalCompareAtPrice: e(ge), totalDiscountedPrice: e(Ce), quantity: e(te), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: xr(e(j)), sellingPlan: e(re) })), xe = d(() => e(oe)(o()(u().title))), Fe = d(() => e(oe)(o()(u().subtitle))), Ae = d(() => e(oe)(o()(u().label))), Oe = d(() => ol(i(), u()).map((Se) => wa(Se, o(), e(oe)))), Te = d(() => Pa(e(Oe)));
    function Y(Se, be) {
      switch (u().dealBarType) {
        case void 0:
        case gt.QuantityBreak:
          return ed(u(), Se, r().currencyRate, e(ce), be, r().featureFlags.percentage_cents_rounding_workaround);
        case gt.Bxgy:
          return td(u(), Se, r().currencyRate, e(ce), be);
      }
    }
    const ye = d(() => Math.ceil(e(Ce) / e(j).length)), Me = d(() => e(ge) > e(Ce)), he = d(() => `${u().id}_${z()}`);
    function Pe(Se) {
      I() && (Se.preventDefault(), Se.stopPropagation(), q()());
    }
    Ra(() => {
      I() && T()({ dealBarId: u().id, dealBarQuantity: E(u()), preselected: !0 });
    });
    const De = d(() => $e(S, "$getMediaImageUrl", c)(u().mediaImageGID) || dl);
    tt(() => {
      var Se;
      I() && Object.keys(e(J)).length > 0 && (e(R), e(M), e(P), e(re), (Se = i().collectionBreaks) == null || Se.requireItemSelectionEnabled, Jt(() => {
        (function() {
          var be, Ze;
          const Ke = Object.values(e(J)).map((ht) => ({ variant: ht.variant, product: ht.product, quantity: 1 })), He = e(Ce) + e(R).reduce((ht, Ht) => ht + Ht.discountedPrice, 0), We = e(M).reduce((ht, Ht) => Ht.showPrice ? ht + Ht.fullPrice : ht, 0) + e(P).reduce((ht, Ht) => ht + Ht.fullPrice * Ht.quantity, 0), Re = e(_e) + e(R).reduce((ht, Ht) => ht + Ht.fullPrice, 0) + We, pt = Y(e(j), void 0), nt = h().sellingPlans.map((ht) => ({ sellingPlanId: ht.id, discountedPrice: Y(e(j), ht) })), ut = (Ze = (be = i().collectionBreaks) == null ? void 0 : be.requireItemSelectionEnabled) != null && Ze, et = Ke.length, ot = !ut || et >= e(te), wt = ut ? Math.max(0, e(te) - et) : 0;
          H()({ variants: Ke, personalisationItems: e(ue), freeGifts: [...e(M), ...e(P)], upsells: e(R), dealBarSellingPlan: e(A), pricing: { discountedPrice: He, fullPrice: Re, giftValue: We, discountedPricePerItem: e(ye), fullPricePerItem: e(ke), discountedPriceWithoutSellingPlan: pt, discountedPricesForSellingPlans: nt }, validation: { requiresItemSelection: ut, allItemsSelected: ot, missingItemsCount: wt } });
        })();
      }));
    });
    const we = d(() => u().showAsSoldOutEnabled && u().showAsSoldOut ? hl(u().showAsSoldOut) : ""), me = d(() => [n0(i()), e(we)].filter(Boolean).join(";"));
    function qe(Se, be) {
      Se === 0 && ee()({ variantId: be.variant.id }), gs(Se, be), bl(!1), e(K) && Q.delete(Se);
    }
    function Ue(Se) {
      (function(be) {
        Mo.update((Ze) => {
          const { [be]: Ke, ...He } = Ze;
          return He;
        });
      })(Se), e(K) && Q.add(Se);
    }
    var Ye = { get dealBlock() {
      return i();
    }, set dealBlock(Se) {
      i(Se), _();
    }, get dealBar() {
      return u();
    }, set dealBar(Se) {
      u(Se), _();
    }, get product() {
      return h();
    }, set product(Se) {
      h(Se), _();
    }, get collectionBreaksProducts() {
      return f();
    }, set collectionBreaksProducts(Se = []) {
      f(Se), _();
    }, get otherProducts() {
      return g();
    }, set otherProducts(Se = []) {
      g(Se), _();
    }, get selectedDealBarIndex() {
      return b();
    }, set selectedDealBarIndex(Se = null) {
      b(Se), _();
    }, get complementaryProducts() {
      return v();
    }, set complementaryProducts(Se = []) {
      v(Se), _();
    }, get customQuantity() {
      return w();
    }, set customQuantity(Se = void 0) {
      w(Se), _();
    }, get currentVariantId() {
      return m();
    }, set currentVariantId(Se = void 0) {
      m(Se), _();
    }, get componentId() {
      return z();
    }, set componentId(Se) {
      z(Se), _();
    }, get selected() {
      return I();
    }, set selected(Se = !1) {
      I(Se), _();
    }, get globalSellingPlan() {
      return V();
    }, set globalSellingPlan(Se = void 0) {
      V(Se), _();
    }, get onDealBarSelect() {
      return T();
    }, set onDealBarSelect(Se) {
      T(Se), _();
    }, get onDealBarDeselect() {
      return q();
    }, set onDealBarDeselect(Se) {
      q(Se), _();
    }, get onVariantSelect() {
      return ee();
    }, set onVariantSelect(Se) {
      ee(Se), _();
    }, get onVariantsChange() {
      return H();
    }, set onVariantsChange(Se) {
      H(Se), _();
    }, get onPersonalisationsChange() {
      return D();
    }, set onPersonalisationsChange(Se) {
      D(Se), _();
    }, get personalisationInitialValues() {
      return ne();
    }, set personalisationInitialValues(Se = []) {
      ne(Se), _();
    }, get onProgressiveGiftsChange() {
      return B();
    }, set onProgressiveGiftsChange(Se) {
      B(Se), _();
    } }, at = M0();
    let rt;
    var Bt = y(at);
    aa(Bt), Bt.__change = [g0, T, u, E];
    var Dt = L(Bt, 2);
    Ja(Dt, { get for() {
      return e(he);
    }, get soldOut() {
      return u().showAsSoldOutEnabled;
    }, get borderHost() {
      return e(Te);
    }, children: (Se, be) => {
      var Ze = I0(), Ke = fe(Ze);
      Vt(Ke, 17, () => e(Oe), (_t) => _t.id, (_t, je) => {
        oa(_t, { get badge() {
          return e(je);
        }, get blockLayout() {
          return i().blockLayout;
        } });
      });
      var He = L(Ke, 2), We = y(He);
      Wt(We, { element: "div", class: "kaching-bundles__bar-main", onclick: Pe, children: (_t, je) => {
        var Xe = S0(), kt = fe(Xe), yt = (Ot) => {
          var nn = h0();
          ve(() => Ie(nn, "src", e(De))), p(Ot, nn);
        }, Zt = (Ot) => {
          p(Ot, p0());
        };
        O(kt, (Ot) => {
          u().mediaImageGID ? Ot(yt) : Ot(Zt, !1);
        });
        var Ct = L(kt, 2), zt = y(Ct), Qt = y(zt), cn = y(Qt);
        st(cn, () => e(xe), (Ot) => {
          var nn = b0();
          Ge(y(nn), () => e(xe)), x(nn), p(Ot, nn);
        });
        var Ut = L(cn, 2), Sn = (Ot) => {
          var nn = ze();
          st(fe(nn), () => e(Ae), (Ft) => {
            var Xt = f0();
            Ge(y(Xt), () => e(Ae)), x(Xt), p(Ft, Xt);
          }), p(Ot, nn);
        };
        O(Ut, (Ot) => {
          e(Ae) && Ot(Sn);
        }), x(Qt);
        var Yn = L(Qt, 2), kn = (Ot) => {
          var nn = ze();
          st(fe(nn), () => e(Fe), (Ft) => {
            var Xt = v0();
            Ge(y(Xt), () => e(Fe)), x(Xt), p(Ft, Xt);
          }), p(Ot, nn);
        };
        O(Yn, (Ot) => {
          e(Fe) && Ot(kn);
        }), x(zt);
        var qn = L(zt, 2), dr = y(qn), gr = (Ot) => {
          var nn = y0(), Ft = fe(nn), Xt = y(Ft);
          st(Xt, () => e(ye), (on) => {
            Nr(on, { get amount() {
              return e(ye);
            }, get showPricesPerItem() {
              return i().showPricesPerItem;
            }, get unitLabel() {
              return i().unitLabel;
            } });
          });
          var Tt = L(Xt, 2), It = (on) => {
            var bn = ze();
            st(fe(bn), () => e(pe), (Gn) => {
              var On = _0();
              Ge(y(On), () => s()(e(pe))), x(On), ve((Bn) => Ie(On, "data-a11y-label", Bn), [() => o()("system.original_price")]), p(Gn, On);
            }), p(on, bn);
          };
          O(Tt, (on) => {
            e(Me) && on(It);
          }), x(Ft);
          var ln = L(Ft, 2), sn = (on) => {
            var bn = x0(), Gn = y(bn);
            st(Gn, () => e(Ce), (Rn) => {
              var xn = k0();
              Ge(y(xn), () => s()(e(Ce))), x(xn), ve((zn) => Ie(xn, "data-a11y-label", zn), [() => o()("system.price")]), p(Rn, xn);
            });
            var On = L(Gn, 2), Bn = (Rn) => {
              var xn = ze();
              st(fe(xn), () => e(ge), (zn) => {
                var Cn = m0();
                Ge(y(Cn), () => s()(e(ge))), x(Cn), ve((yn) => Ie(Cn, "data-a11y-label", yn), [() => o()("system.original_price")]), p(zn, Cn);
              }), p(Rn, xn);
            };
            O(On, (Rn) => {
              e(Me) && Rn(Bn);
            }), x(bn), p(on, bn);
          };
          O(ln, (on) => {
            e(te) > 1 && on(sn);
          }), p(Ot, nn);
        }, mn = (Ot) => {
          var nn = P0(), Ft = fe(nn);
          st(Ft, () => e(Ce), (It) => {
            {
              let ln = d(() => i().showPricesPerItem ? e(ye) : e(Ce));
              Nr(It, { get amount() {
                return e(ln);
              }, get showPricesPerItem() {
                return i().showPricesPerItem;
              }, get unitLabel() {
                return i().unitLabel;
              } });
            }
          });
          var Xt = L(Ft, 2), Tt = (It) => {
            var ln = ze();
            st(fe(ln), () => i().showPricesPerItem ? e(pe) : e(ge), (sn) => {
              var on = w0();
              Ge(y(on), () => s()(i().showPricesPerItem ? e(pe) : e(ge))), x(on), ve((bn) => Ie(on, "data-a11y-label", bn), [() => o()("system.original_price")]), p(sn, on);
            }), p(It, ln);
          };
          O(Xt, (It) => {
            e(Me) && It(Tt);
          }), p(Ot, nn);
        };
        O(dr, (Ot) => {
          i().showBothPrices ? Ot(gr) : Ot(mn, !1);
        }), x(qn), x(Ct), p(_t, Xe);
      }, $$slots: { default: !0 } });
      var Re = L(We, 2), pt = (_t) => {
        Ba(_t, { get highlights() {
          return u().highlights;
        }, get isSelected() {
          return I();
        }, get replaceLiquid() {
          return e(oe);
        } });
      };
      O(Re, (_t) => {
        u().highlights && _t(pt);
      });
      var nt = L(Re, 2), ut = (_t) => {
        var je = B0(), Xe = y(je);
        {
          let kt = d(() => e(A) || e(X)[0]);
          Sa(Xe, { get sellingPlans() {
            return e(X);
          }, get selectedSellingPlan() {
            return e(kt);
          }, onChange: (yt) => {
            ae(W, yt, !0);
          } });
        }
        x(je), p(_t, je);
      };
      O(nt, (_t) => {
        I() && e(le) && !u().sellingPlanGid && e(X).length > 1 && _t(ut);
      });
      var et = L(nt, 2), ot = (_t) => {
        var je = C0();
        Vt(je, 21, () => ({ length: e(te) }), Vr, (Xe, kt, yt) => {
          var Zt = ze(), Ct = fe(Zt), zt = (cn) => {
            {
              let Ut = d(() => e(J)[yt] || null);
              $o(cn, { get dealBlock() {
                return i();
              }, get dealBar() {
                return u();
              }, get mainProduct() {
                return h();
              }, products: [], get selectedProductVariant() {
                return e(Ut);
              }, onChange: (Sn) => qe(yt, Sn) });
            }
          }, Qt = (cn) => {
            {
              let Ut = d(() => e(J)[yt] || null);
              $o(cn, { get dealBlock() {
                return i();
              }, get dealBar() {
                return u();
              }, get products() {
                return f();
              }, get selectedProductVariant() {
                return e(Ut);
              }, onChange: (Sn) => qe(yt, Sn), onRemove: () => Ue(yt) });
            }
          };
          O(Ct, (cn) => {
            yt === 0 ? cn(zt) : cn(Qt, !1);
          }), p(Xe, Zt);
        }), x(je), p(_t, je);
      };
      O(et, (_t) => {
        I() && _t(ot);
      });
      var wt = L(et, 2), ht = (_t) => {
        {
          let je = d(() => E(u()));
          pl(_t, { get value() {
            return e(U);
          }, get min() {
            return e(je);
          }, onChange: (Xe) => ae(U, Xe, !0) });
        }
      };
      O(wt, (_t) => {
        I() && u().dealBarType === gt.QuantityBreak && u().quantitySelector && _t(ht);
      });
      var Ht = L(wt, 2), Tn = (_t) => {
        Ya(_t, { get product() {
          return h();
        }, get productPersonalisation() {
          return u().productPersonalisation;
        }, get personalisationItems() {
          return e(ue);
        }, get quantity() {
          return e(ue).length;
        }, get addPersonalisationModal() {
          return i().addPersonalisationModal;
        }, get onPersonalisationsChange() {
          return D();
        }, get initialValues() {
          return ne();
        } });
      };
      O(Ht, (_t) => {
        I() && u().productPersonalisation && (i().blockLayout === "vertical" || i().blockLayout === "plain") && _t(Tn);
      }), x(He);
      var _n = L(He, 2);
      {
        let _t = d(() => u().upsells || []);
        Ci(_n, { get dealBlock() {
          return i();
        }, get dealBarId() {
          return u().id;
        }, get upsells() {
          return e(_t);
        }, get otherProducts() {
          return g();
        }, get complementaryProducts() {
          return v();
        }, get dealBarSelected() {
          return I();
        }, get dealSellingPlan() {
          return e(re);
        }, onChange: (je) => {
          ae(R, je, !0);
        } });
      }
      var en = L(_n, 2);
      zi(en, { get selectedDealBarIndex() {
        return b();
      }, get onChange() {
        return B();
      }, get dealBlock() {
        return i();
      }, get dealBar() {
        return u();
      }, get otherProducts() {
        return g();
      }, get selected() {
        return I();
      }, get sellingPlan() {
        return e(re);
      }, get progressiveGifts() {
        return i().progressiveGifts;
      } });
      var Kt = L(en, 2);
      {
        let _t = d(() => u().freeGifts || []);
        Bi(Kt, { get dealBlock() {
          return i();
        }, get freeGifts() {
          return e(_t);
        }, get freeGiftsSummary() {
          return u().freeGiftsSummary;
        }, get otherProducts() {
          return g();
        }, get dealBarSelected() {
          return I();
        }, get sellingPlan() {
          return e(re);
        }, onChange: (je) => {
          ae(M, je, !0);
        } });
      }
      var tn = L(Kt, 2);
      {
        let _t = d(() => u().multipleGiftsSelectors || []);
        Mi(tn, { get dealBlock() {
          return i();
        }, get multipleGiftsSelectors() {
          return e(_t);
        }, get sellingPlan() {
          return e(re);
        }, get otherProducts() {
          return g();
        }, onChange: (je) => {
          ae(P, je, !0);
        } });
      }
      p(Se, Ze);
    }, $$slots: { default: !0 } });
    var dt = L(Dt, 2), At = (Se) => {
      Ii(Se, { get showAsSoldOut() {
        return u().showAsSoldOut;
      }, get replaceLiquid() {
        return e(oe);
      } });
    };
    O(dt, (Se) => {
      u().showAsSoldOutEnabled && u().showAsSoldOut && Se(At);
    }), x(at), ve((Se) => {
      var be;
      rt = Et(at, 1, "kaching-bundles__bar", null, rt, Se), Ie(at, "data-deal-bar-id", u().id), Gt(at, e(me)), Ie(Bt, "name", `kaching-bundles-deal-${(be = z()) != null ? be : ""}`), Na(Bt, u().id), Ie(Bt, "id", e(he)), tl(Bt, I()), Bt.disabled = u().showAsSoldOutEnabled;
    }, [() => ({ "kaching-bundles__bar--selected": I() })]), p(n, at);
    var Yt = lt(Ye);
    return l(), Yt;
  }
  jn(["change"]), Je(Hd, { dealBlock: {}, dealBar: {}, product: {}, collectionBreaksProducts: {}, otherProducts: {}, selectedDealBarIndex: {}, complementaryProducts: {}, customQuantity: {}, currentVariantId: {}, componentId: {}, selected: {}, globalSellingPlan: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {}, onProgressiveGiftsChange: {} }, [], [], !0);
  var Do = {};
  (function n(t, r, a, s) {
    var o = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL), c = typeof Path2D == "function" && typeof DOMMatrix == "function";
    function l() {
    }
    function i(M) {
      var P = r.exports.Promise, R = P !== void 0 ? P : t.Promise;
      return typeof R == "function" ? new R(M) : (M(l, l), null);
    }
    var u, h, f, g, b, v, w = /* @__PURE__ */ (function(M, P) {
      return { transform: function(R) {
        if (M) return R;
        if (P.has(R)) return P.get(R);
        var Q = new OffscreenCanvas(R.width, R.height);
        return Q.getContext("2d").drawImage(R, 0, 0), P.set(R, Q), Q;
      }, clear: function() {
        P.clear();
      } };
    })((function() {
      if (!t.OffscreenCanvas) return !1;
      try {
        var M = new OffscreenCanvas(1, 1), P = M.getContext("2d");
        P.fillRect(0, 0, 1, 1);
        var R = M.transferToImageBitmap();
        P.createPattern(R, "no-repeat");
      } catch {
        return !1;
      }
      return !0;
    })(), /* @__PURE__ */ new Map()), m = (f = Math.floor(1e3 / 60), g = {}, b = 0, typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (u = function(M) {
      var P = Math.random();
      return g[P] = requestAnimationFrame(function R(Q) {
        b === Q || b + f - 1 < Q ? (b = Q, delete g[P], M()) : g[P] = requestAnimationFrame(R);
      }), P;
    }, h = function(M) {
      g[M] && cancelAnimationFrame(g[M]);
    }) : (u = function(M) {
      return setTimeout(M, f);
    }, h = function(M) {
      return clearTimeout(M);
    }), { frame: u, cancel: h }), z = /* @__PURE__ */ (function() {
      var M, P, R = {};
      return function() {
        if (M) return M;
        if (!a && o) {
          var Q = ["var CONFETTI, SIZE = {}, module = {};", "(" + n.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join(`
`);
          try {
            M = new Worker(URL.createObjectURL(new Blob([Q])));
          } catch (K) {
            return typeof console != "undefined" && typeof console.warn == "function" && console.warn("🎊 Could not load worker", K), null;
          }
          (function(K) {
            function ce(F, G) {
              K.postMessage({ options: F || {}, callback: G });
            }
            K.init = function(F) {
              var G = F.transferControlToOffscreen();
              K.postMessage({ canvas: G }, [G]);
            }, K.fire = function(F, G, U) {
              if (P) return ce(F, null), P;
              var te = Math.random().toString(36).slice(2);
              return P = i(function(E) {
                function ie(J) {
                  J.data.callback === te && (delete R[te], K.removeEventListener("message", ie), P = null, w.clear(), U(), E());
                }
                K.addEventListener("message", ie), ce(F, te), R[te] = ie.bind(null, { data: { callback: te } });
              });
            }, K.reset = function() {
              for (var F in K.postMessage({ reset: !0 }), R) R[F](), delete R[F];
            };
          })(M);
        }
        return M;
      };
    })(), I = { particleCount: 50, angle: 90, spread: 45, startVelocity: 45, decay: 0.9, gravity: 1, drift: 0, ticks: 200, x: 0.5, y: 0.5, shapes: ["square", "circle"], zIndex: 100, colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"], disableForReducedMotion: !1, scalar: 1 };
    function V(M, P, R) {
      return (function(Q, K) {
        return K ? K(Q) : Q;
      })(M && M[P] != null ? M[P] : I[P], R);
    }
    function T(M) {
      return M < 0 ? 0 : Math.floor(M);
    }
    function q(M, P) {
      return Math.floor(Math.random() * (P - M)) + M;
    }
    function ee(M) {
      return parseInt(M, 16);
    }
    function H(M) {
      return M.map(D);
    }
    function D(M) {
      var P = String(M).replace(/[^0-9a-f]/gi, "");
      return P.length < 6 && (P = P[0] + P[0] + P[1] + P[1] + P[2] + P[2]), { r: ee(P.substring(0, 2)), g: ee(P.substring(2, 4)), b: ee(P.substring(4, 6)) };
    }
    function ne(M) {
      M.width = document.documentElement.clientWidth, M.height = document.documentElement.clientHeight;
    }
    function B(M) {
      var P = M.getBoundingClientRect();
      M.width = P.width, M.height = P.height;
    }
    function N(M) {
      var P = M.angle * (Math.PI / 180), R = M.spread * (Math.PI / 180);
      return { x: M.x, y: M.y, wobble: 10 * Math.random(), wobbleSpeed: Math.min(0.11, 0.1 * Math.random() + 0.05), velocity: 0.5 * M.startVelocity + Math.random() * M.startVelocity, angle2D: -P + (0.5 * R - Math.random() * R), tiltAngle: (0.5 * Math.random() + 0.25) * Math.PI, color: M.color, shape: M.shape, tick: 0, totalTicks: M.ticks, decay: M.decay, drift: M.drift, random: Math.random() + 2, tiltSin: 0, tiltCos: 0, wobbleX: 0, wobbleY: 0, gravity: 3 * M.gravity, ovalScalar: 0.6, scalar: M.scalar, flat: M.flat };
    }
    function se(M, P) {
      P.x += Math.cos(P.angle2D) * P.velocity + P.drift, P.y += Math.sin(P.angle2D) * P.velocity + P.gravity, P.velocity *= P.decay, P.flat ? (P.wobble = 0, P.wobbleX = P.x + 10 * P.scalar, P.wobbleY = P.y + 10 * P.scalar, P.tiltSin = 0, P.tiltCos = 0, P.random = 1) : (P.wobble += P.wobbleSpeed, P.wobbleX = P.x + 10 * P.scalar * Math.cos(P.wobble), P.wobbleY = P.y + 10 * P.scalar * Math.sin(P.wobble), P.tiltAngle += 0.1, P.tiltSin = Math.sin(P.tiltAngle), P.tiltCos = Math.cos(P.tiltAngle), P.random = Math.random() + 2);
      var R = P.tick++ / P.totalTicks, Q = P.x + P.random * P.tiltCos, K = P.y + P.random * P.tiltSin, ce = P.wobbleX + P.random * P.tiltCos, F = P.wobbleY + P.random * P.tiltSin;
      if (M.fillStyle = "rgba(" + P.color.r + ", " + P.color.g + ", " + P.color.b + ", " + (1 - R) + ")", M.beginPath(), c && P.shape.type === "path" && typeof P.shape.path == "string" && Array.isArray(P.shape.matrix)) M.fill((function(_e, ge, ke, pe, Ce, oe, xe) {
        var Fe = new Path2D(_e), Ae = new Path2D();
        Ae.addPath(Fe, new DOMMatrix(ge));
        var Oe = new Path2D();
        return Oe.addPath(Ae, new DOMMatrix([Math.cos(xe) * Ce, Math.sin(xe) * Ce, -Math.sin(xe) * oe, Math.cos(xe) * oe, ke, pe])), Oe;
      })(P.shape.path, P.shape.matrix, P.x, P.y, 0.1 * Math.abs(ce - Q), 0.1 * Math.abs(F - K), Math.PI / 10 * P.wobble));
      else if (P.shape.type === "bitmap") {
        var G = Math.PI / 10 * P.wobble, U = 0.1 * Math.abs(ce - Q), te = 0.1 * Math.abs(F - K), E = P.shape.bitmap.width * P.scalar, ie = P.shape.bitmap.height * P.scalar, J = new DOMMatrix([Math.cos(G) * U, Math.sin(G) * U, -Math.sin(G) * te, Math.cos(G) * te, P.x, P.y]);
        J.multiplySelf(new DOMMatrix(P.shape.matrix));
        var C = M.createPattern(w.transform(P.shape.bitmap), "no-repeat");
        C.setTransform(J), M.globalAlpha = 1 - R, M.fillStyle = C, M.fillRect(P.x - E / 2, P.y - ie / 2, E, ie), M.globalAlpha = 1;
      } else if (P.shape === "circle") M.ellipse ? M.ellipse(P.x, P.y, Math.abs(ce - Q) * P.ovalScalar, Math.abs(F - K) * P.ovalScalar, Math.PI / 10 * P.wobble, 0, 2 * Math.PI) : (function(_e, ge, ke, pe, Ce, oe, xe, Fe, Ae) {
        _e.save(), _e.translate(ge, ke), _e.rotate(oe), _e.scale(pe, Ce), _e.arc(0, 0, 1, xe, Fe, Ae), _e.restore();
      })(M, P.x, P.y, Math.abs(ce - Q) * P.ovalScalar, Math.abs(F - K) * P.ovalScalar, Math.PI / 10 * P.wobble, 0, 2 * Math.PI);
      else if (P.shape === "star") for (var j = Math.PI / 2 * 3, W = 4 * P.scalar, X = 8 * P.scalar, le = P.x, A = P.y, re = 5, ue = Math.PI / re; re--; ) le = P.x + Math.cos(j) * X, A = P.y + Math.sin(j) * X, M.lineTo(le, A), j += ue, le = P.x + Math.cos(j) * W, A = P.y + Math.sin(j) * W, M.lineTo(le, A), j += ue;
      else M.moveTo(Math.floor(P.x), Math.floor(P.y)), M.lineTo(Math.floor(P.wobbleX), Math.floor(K)), M.lineTo(Math.floor(ce), Math.floor(F)), M.lineTo(Math.floor(Q), Math.floor(P.wobbleY));
      return M.closePath(), M.fill(), P.tick < P.totalTicks;
    }
    function S(M, P) {
      var R, Q = !M, K = !!V(P || {}, "resize"), ce = !1, F = V(P, "disableForReducedMotion", Boolean), G = o && V(P || {}, "useWorker") ? z() : null, U = Q ? ne : B, te = !(!M || !G) && !!M.__confetti_initialized, E = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches;
      function ie(C, j, W) {
        for (var X = V(C, "particleCount", T), le = V(C, "angle", Number), A = V(C, "spread", Number), re = V(C, "startVelocity", Number), ue = V(C, "decay", Number), _e = V(C, "gravity", Number), ge = V(C, "drift", Number), ke = V(C, "colors", H), pe = V(C, "ticks", Number), Ce = V(C, "shapes"), oe = V(C, "scalar"), xe = !!V(C, "flat"), Fe = (function(ye) {
          var Me = V(ye, "origin", Object);
          return Me.x = V(Me, "x", Number), Me.y = V(Me, "y", Number), Me;
        })(C), Ae = X, Oe = [], Te = M.width * Fe.x, Y = M.height * Fe.y; Ae--; ) Oe.push(N({ x: Te, y: Y, angle: le, spread: A, startVelocity: re, color: ke[Ae % ke.length], shape: Ce[q(0, Ce.length)], ticks: pe, decay: ue, gravity: _e, drift: ge, scalar: oe, flat: xe }));
        return R ? R.addFettis(Oe) : (R = (function(ye, Me, he, Pe, De) {
          var we, me, qe = Me.slice(), Ue = ye.getContext("2d"), Ye = i(function(at) {
            function rt() {
              we = me = null, Ue.clearRect(0, 0, Pe.width, Pe.height), w.clear(), De(), at();
            }
            we = m.frame(function Bt() {
              !a || Pe.width === s.width && Pe.height === s.height || (Pe.width = ye.width = s.width, Pe.height = ye.height = s.height), Pe.width || Pe.height || (he(ye), Pe.width = ye.width, Pe.height = ye.height), Ue.clearRect(0, 0, Pe.width, Pe.height), (qe = qe.filter(function(Dt) {
                return se(Ue, Dt);
              })).length ? we = m.frame(Bt) : rt();
            }), me = rt;
          });
          return { addFettis: function(at) {
            return qe = qe.concat(at), Ye;
          }, canvas: ye, promise: Ye, reset: function() {
            we && m.cancel(we), me && me();
          } };
        })(M, Oe, U, j, W), R.promise);
      }
      function J(C) {
        var j = F || V(C, "disableForReducedMotion", Boolean), W = V(C, "zIndex", Number);
        if (j && E) return i(function(re) {
          re();
        });
        Q && R ? M = R.canvas : Q && !M && (M = (function(re) {
          var ue = document.createElement("canvas");
          return ue.style.position = "fixed", ue.style.top = "0px", ue.style.left = "0px", ue.style.pointerEvents = "none", ue.style.zIndex = re, ue;
        })(W), document.body.appendChild(M)), K && !te && U(M);
        var X = { width: M.width, height: M.height };
        function le() {
          if (G) {
            var re = { getBoundingClientRect: function() {
              if (!Q) return M.getBoundingClientRect();
            } };
            return U(re), void G.postMessage({ resize: { width: re.width, height: re.height } });
          }
          X.width = X.height = null;
        }
        function A() {
          R = null, K && (ce = !1, t.removeEventListener("resize", le)), Q && M && (document.body.contains(M) && document.body.removeChild(M), M = null, te = !1);
        }
        return G && !te && G.init(M), te = !0, G && (M.__confetti_initialized = !0), K && !ce && (ce = !0, t.addEventListener("resize", le, !1)), G ? G.fire(C, X, A) : ie(C, X, A);
      }
      return J.reset = function() {
        G && G.reset(), R && R.reset();
      }, J;
    }
    function Z() {
      return v || (v = S(null, { useWorker: !0, resize: !0 })), v;
    }
    r.exports = function() {
      return Z().apply(this, arguments);
    }, r.exports.reset = function() {
      Z().reset();
    }, r.exports.create = S, r.exports.shapeFromPath = function(M) {
      if (!c) throw new Error("path confetti are not supported in this browser");
      var P, R;
      typeof M == "string" ? P = M : (P = M.path, R = M.matrix);
      var Q = new Path2D(P), K = document.createElement("canvas").getContext("2d");
      if (!R) {
        for (var ce, F, G = 1e3, U = G, te = G, E = 0, ie = 0, J = 0; J < G; J += 2) for (var C = 0; C < G; C += 2) K.isPointInPath(Q, J, C, "nonzero") && (U = Math.min(U, J), te = Math.min(te, C), E = Math.max(E, J), ie = Math.max(ie, C));
        ce = E - U, F = ie - te;
        var j = Math.min(10 / ce, 10 / F);
        R = [j, 0, 0, j, -Math.round(ce / 2 + U) * j, -Math.round(F / 2 + te) * j];
      }
      return { type: "path", path: P, matrix: R };
    }, r.exports.shapeFromText = function(M) {
      var P, R = 1, Q = "#000000", K = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
      typeof M == "string" ? P = M : (P = M.text, R = "scalar" in M ? M.scalar : R, K = "fontFamily" in M ? M.fontFamily : K, Q = "color" in M ? M.color : Q);
      var ce = 10 * R, F = ce + "px " + K, G = new OffscreenCanvas(ce, ce), U = G.getContext("2d");
      U.font = F;
      var te = U.measureText(P), E = Math.ceil(te.actualBoundingBoxRight + te.actualBoundingBoxLeft), ie = Math.ceil(te.actualBoundingBoxAscent + te.actualBoundingBoxDescent), J = te.actualBoundingBoxLeft + 2, C = te.actualBoundingBoxAscent + 2;
      E += 4, ie += 4, (U = (G = new OffscreenCanvas(E, ie)).getContext("2d")).font = F, U.fillStyle = Q, U.fillText(P, J, C);
      var j = 1 / R;
      return { type: "bitmap", bitmap: G.transferToImageBitmap(), matrix: [j, 0, 0, j, -E * j / 2, -ie * j / 2] };
    };
  })(/* @__PURE__ */ (function() {
    return typeof window != "undefined" ? window : typeof self != "undefined" ? self : this || {};
  })(), Do, !1);
  const z0 = Do.exports;
  Do.exports.create;
  var $0 = An('<svg viewBox="0 0 361 163" fill="none" aria-hidden="true"><path class="kaching-bundles__scratch-off-hint-path" d="M22 113.859C23.9107 84.035 22.7293 20.8901 54.8299 45.9835C94.9555 77.3502 81.1193 164.847 101.209 103.575C108.48 64.2518 127.202 -4.91471 143.923 33.0046C164.824 80.4037 155.535 144.223 184.564 113.859C213.593 83.495 160.179 15.685 201.982 45.9835C243.784 76.2821 263.524 183.445 278.619 122.651C293.714 61.8562 268.168 7.24414 303.004 33.0046C337.839 58.765 330.872 64.2534 339 92.7687" stroke="white" stroke-opacity="0.7" stroke-width="44" stroke-linecap="round"></path></svg>');
  function Zd(n, t) {
    it(t, !0);
    let r = k(t, "hidden", 7);
    var a = { get hidden() {
      return r();
    }, set hidden(c) {
      r(c), _();
    } }, s = $0();
    let o;
    return ve((c) => o = Et(s, 0, "kaching-bundles__scratch-off-hint", null, o, c), [() => ({ "kaching-bundles__scratch-off-hint--hidden": r() })]), p(n, s), lt(a);
  }
  function D0(n, t) {
    n.key !== "Enter" && n.key !== " " || (n.preventDefault(), t());
  }
  Je(Zd, { hidden: {} }, [], [], !0);
  var V0 = $('<canvas role="button" tabindex="0"></canvas> <!> <div aria-hidden="true"> </div>', 1), A0 = $("<div><!> <!></div>");
  function Jd(n, t) {
    it(t, !0);
    const r = () => $e(u, "$config", a), [a, s] = vt(), o = 317 / 361;
    let c = k(t, "settings", 7), l = k(t, "onReveal", 7), i = k(t, "children", 7);
    const u = vn(), h = Mt();
    let f = d(() => $e(h, "$translate", a)(c().title)), g = Ve(ct(r().preview && !r().previewScratchOff)), b = Ve(!1), v = Ve(void 0), w = Ve(!1), m = d(() => pn({ "scratch-off-title-color": Ne(c().titleColor), "scratch-off-title-size": `${c().titleSize}px` })), z = !1, I = null, V = null, T = 22, q = null, ee = Ve(!1), H = Ve(!1);
    const D = new Image();
    D.src = "https://bundles-assets.kachingappz.app/widget/scratch-off-background-v2.webp", q = D, D.complete ? ae(ee, !0) : (D.addEventListener("load", () => {
      ae(ee, !0);
    }, { once: !0 }), D.addEventListener("error", () => {
      ae(H, !0);
    }, { once: !0 }));
    let ne = d(() => e(ee) || e(H));
    function B() {
      if (!e(v)) return;
      const E = e(v).getBoundingClientRect();
      if (E.width === 0 || E.height === 0) return;
      const ie = window.devicePixelRatio || 1;
      e(v).width = Math.floor(E.width * ie), e(v).height = Math.floor(E.height * ie);
      const J = e(v).getContext("2d");
      if (!J) return;
      J.scale(ie, ie), T = 44 * Math.min((E.width - 10) / 361, (E.height - 10) / 163, o) / 2, J.fillStyle = Ne(c().backgroundColor), J.fillRect(0, 0, E.width, E.height), e(ee) && q && (J.globalAlpha = 0.6, J.drawImage(q, 0, 0, E.width, E.height), J.globalAlpha = 1), J.globalCompositeOperation = "destination-out";
    }
    function N(E) {
      if (!e(v)) return null;
      const ie = e(v).getBoundingClientRect();
      return { x: E.clientX - ie.left, y: E.clientY - ie.top };
    }
    function se(E) {
      var ie;
      e(g) || e(b) || (z = !0, ae(w, !0), V === null && (V = setTimeout(P, 1500)), (ie = e(v)) == null || ie.setPointerCapture(E.pointerId), I = N(E), (function(J) {
        if (!e(v) || !J) return;
        const C = e(v).getContext("2d");
        C && (C.beginPath(), C.arc(J.x, J.y, T, 0, 2 * Math.PI), C.fill());
      })(I));
    }
    function S(E) {
      if (!z || e(g) || e(b)) return;
      const ie = N(E);
      ie && I && ((function(J, C) {
        if (!e(v)) return;
        const j = e(v).getContext("2d");
        if (!j) return;
        const W = C.x - J.x, X = C.y - J.y, le = Math.hypot(W, X), A = Math.max(1, Math.ceil(le / 4));
        for (let re = 0; re <= A; re++) {
          const ue = re / A;
          j.beginPath(), j.arc(J.x + W * ue, J.y + X * ue, T, 0, 2 * Math.PI), j.fill();
        }
      })(I, ie), I = ie);
    }
    function Z(E) {
      var ie;
      z = !1, (ie = e(v)) == null || ie.releasePointerCapture(E.pointerId), I = null, P();
    }
    function M() {
      V !== null && (clearTimeout(V), V = null);
    }
    function P() {
      var E;
      e(g) || e(b) || (M(), ae(b, !0), (function() {
        if (!e(v)) return;
        const ie = e(v).getBoundingClientRect();
        z0({ particleCount: 120, spread: 70, startVelocity: 45, origin: { x: (ie.left + ie.width / 2) / window.innerWidth, y: (ie.top + ie.height / 2) / window.innerHeight } });
      })(), (E = l()) == null || E(), setTimeout(() => {
        ae(g, !0), ae(b, !1);
      }, 300));
    }
    tt(() => {
      if (e(ne)) return;
      const E = setTimeout(() => {
        ae(H, !0);
      }, 5e3);
      return () => clearTimeout(E);
    }), tt(() => () => M()), tt(() => {
      if (e(g) || e(b) || !e(v)) return;
      B();
      const E = new ResizeObserver(() => {
        e(g) || e(b) || B();
      });
      return E.observe(e(v)), () => E.disconnect();
    });
    let R = JSON.stringify(c());
    tt(() => {
      const E = JSON.stringify(c());
      E !== R && (R = E, r().preview && r().previewScratchOff && (ae(g, !1), ae(b, !1), ae(w, !1), M()));
    });
    var Q = { get settings() {
      return c();
    }, set settings(E) {
      c(E), _();
    }, get onReveal() {
      return l();
    }, set onReveal(E) {
      l(E), _();
    }, get children() {
      return i();
    }, set children(E) {
      i(E), _();
    } }, K = A0();
    let ce;
    var F = y(K);
    Ql(F, i);
    var G = L(F, 2), U = (E) => {
      var ie = V0(), J = fe(ie);
      let C;
      J.__pointerdown = se, J.__pointermove = S, J.__pointerup = Z, J.__keydown = [D0, P], ki(J, (A) => ae(v, A), () => e(v));
      var j = L(J, 2);
      {
        let A = d(() => e(w) || e(b));
        Zd(j, { get hidden() {
          return e(A);
        } });
      }
      var W = L(j, 2);
      let X;
      var le = y(W, !0);
      x(W), ve((A, re) => {
        C = Et(J, 1, "kaching-bundles__scratch-off-canvas", null, C, A), Ie(J, "aria-label", e(f)), X = Et(W, 1, "kaching-bundles__scratch-off-title", null, X, re), ft(le, e(f));
      }, [() => ({ "kaching-bundles__scratch-off-canvas--revealing": e(b) }), () => ({ "kaching-bundles__scratch-off-title--hidden": e(w) || e(b) })]), Nl("pointercancel", J, Z), p(E, ie);
    };
    O(G, (E) => {
      e(g) || E(U);
    }), x(K), ve((E) => {
      ce = Et(K, 1, "kaching-bundles__scratch-off", null, ce, E), Gt(K, e(m));
    }, [() => ({ "kaching-bundles__scratch-off--unscratched": !e(g), "kaching-bundles__scratch-off--revealing": e(b), "kaching-bundles__scratch-off--loading": !e(g) && !e(ne) })]), p(n, K);
    var te = lt(Q);
    return s(), te;
  }
  jn(["pointerdown", "pointermove", "pointerup", "keydown"]), Je(Jd, { settings: {}, onReveal: {}, children: {} }, [], [], !0);
  var T0 = $('<div class="kaching-bundles__bar-price"><!></div>'), q0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), G0 = $('<div class="kaching-bundles__bar-pricing"><!> <!></div>');
  function hs(n, t) {
    it(t, !0);
    const r = () => $e(i, "$translate", s), a = () => $e(u, "$formatPrice", s), [s, o] = vt(), c = k(t, "discountedPrice", 7), l = k(t, "fullPrice", 7), i = Mt(), u = gn();
    var h = { get discountedPrice() {
      return c();
    }, set discountedPrice(m) {
      c(m), _();
    }, get fullPrice() {
      return l();
    }, set fullPrice(m) {
      l(m), _();
    } }, f = G0(), g = y(f);
    st(g, c, (m) => {
      var z = T0();
      Ge(y(z), () => a()(c())), x(z), ve((I) => Ie(z, "data-a11y-label", I), [() => r()("system.price")]), p(m, z);
    });
    var b = L(g, 2), v = (m) => {
      var z = ze();
      st(fe(z), l, (I) => {
        var V = q0();
        Ge(y(V), () => a()(l())), x(V), ve((T) => Ie(V, "data-a11y-label", T), [() => r()("system.original_price")]), p(I, V);
      }), p(m, z);
    };
    O(b, (m) => {
      l() > c() && m(v);
    }), x(f), p(n, f);
    var w = lt(h);
    return o(), w;
  }
  Je(hs, { discountedPrice: {}, fullPrice: {} }, [], [], !0);
  const Ka = ia(null), Vo = (n) => pn({ "kaching-subscriptions-title-color": Ne(n.titleColor), "kaching-subscriptions-subtitle-color": Ne(n.subtitleColor), "kaching-subscriptions-title-font-size": n.titleSize + "px", "kaching-subscriptions-subtitle-font-size": n.subtitleSize + "px" });
  var O0 = $('<div class="kaching-bundles__bar-radio"></div>'), F0 = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), L0 = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), j0 = $('<div class="kaching-bundles__bar-variants"><!></div>'), E0 = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div> <!> <!></div></div>'), R0 = $('<div class="kaching-bundles__bar-radio"></div>'), N0 = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), Q0 = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), W0 = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div></div></div>'), U0 = $("<div></div>");
  function Yd(n, t) {
    it(t, !0);
    const r = () => $e(Ka, "$selectedDealBarStore", o), a = () => $e(b, "$formatPrice", o), s = () => $e(g, "$translate", o), [o, c] = vt(), l = k(t, "subscriptions", 7), i = k(t, "sellingPlans", 7), u = k(t, "selectedSellingPlan", 7), h = k(t, "hideSellingPlanSelector", 7, !1), f = k(t, "onChange", 7), g = Mt(), b = gn();
    let v = Ve(ct(l().subscribeByDefault || u() ? "subscribe" : "one-time")), w = Ve(ct(u() || i()[0])), m = Ve(!1), z = d(() => l().subscribeByDefault), I = d(() => e(z) ? ["subscribe", "one-time"] : ["one-time", "subscribe"]);
    const V = d(() => Vo(l())), T = d(() => {
      var R, Q;
      const K = (Q = (R = r()) == null ? void 0 : R.dealBar) == null ? void 0 : Q.sellingPlanGid;
      if (K) return i().find((ce) => ce.id === Nt(K));
    }), q = d(() => {
      var R;
      return (R = e(T)) != null ? R : e(w);
    }), ee = d(() => {
      var R, Q, K, ce, F;
      return (F = (ce = (Q = (R = r()) == null ? void 0 : R.pricing.discountedPricesForSellingPlans.find((G) => {
        var U;
        return G.sellingPlanId === ((U = e(q)) == null ? void 0 : U.id);
      })) == null ? void 0 : Q.discountedPrice) != null ? ce : (K = r()) == null ? void 0 : K.pricing.discountedPrice) != null ? F : 0;
    }), H = d(() => {
      var R, Q;
      return (Q = (R = r()) == null ? void 0 : R.pricing.discountedPriceWithoutSellingPlan) != null ? Q : 0;
    }), D = d(() => {
      var R, Q;
      return (Q = (R = r()) == null ? void 0 : R.pricing.fullPrice) != null ? Q : 0;
    }), ne = d(() => {
      var R, Q, K;
      return hn({ priceFormatter: a(), product: (R = r()) == null ? void 0 : R.product, totalFullPrice: e(D), totalDiscountedPrice: e(ee), quantity: (K = (Q = r()) == null ? void 0 : Q.quantity) != null ? K : 1, sellingPlan: e(q), unitQuantity: null });
    }), B = d(() => {
      var R, Q, K;
      return hn({ priceFormatter: a(), product: (R = r()) == null ? void 0 : R.product, totalFullPrice: e(D), totalDiscountedPrice: e(H), quantity: (K = (Q = r()) == null ? void 0 : Q.quantity) != null ? K : 1, unitQuantity: null });
    });
    function N(R) {
      ae(m, !0), ae(v, R, !0), f()(R === "subscribe" ? e(w) : void 0);
    }
    function se(R) {
      ae(w, R, !0), e(v) === "subscribe" && f()(R);
    }
    Ra(() => {
      e(v) === "subscribe" && f()(e(w));
    }), tt(() => {
      if (u()) return ae(w, u(), !0), void ae(v, "subscribe");
      if (i().length === 0) return void ae(v, "one-time");
      i().some((R) => {
        var Q;
        return R.id === ((Q = e(w)) == null ? void 0 : Q.id);
      }) || ae(w, i()[0], !0), e(m) || ae(v, e(z) ? "subscribe" : "one-time", !0), f()(e(v) === "subscribe" ? e(w) : void 0);
    });
    var S = { get subscriptions() {
      return l();
    }, set subscriptions(R) {
      l(R), _();
    }, get sellingPlans() {
      return i();
    }, set sellingPlans(R) {
      i(R), _();
    }, get selectedSellingPlan() {
      return u();
    }, set selectedSellingPlan(R) {
      u(R), _();
    }, get hideSellingPlanSelector() {
      return h();
    }, set hideSellingPlanSelector(R = !1) {
      h(R), _();
    }, get onChange() {
      return f();
    }, set onChange(R) {
      f(R), _();
    } }, Z = U0();
    let M;
    Vt(Z, 20, () => e(I), (R) => R, (R, Q) => {
      var K = ze(), ce = fe(K), F = (U) => {
        {
          let te = d(() => ["kaching-bundles__bar", i().length === 0 && "kaching-bundles__bar--disabled", e(v) === "subscribe" && "kaching-bundles__bar--selected"]);
          Wt(U, { element: "div", get class() {
            return e(te);
          }, onclick: () => N("subscribe"), children: (E, ie) => {
            var J = E0(), C = y(J), j = y(C), W = y(j), X = (Oe) => {
              p(Oe, O0());
            };
            O(W, (Oe) => {
              l().layout === "vertical" && Oe(X);
            });
            var le = L(W, 2), A = y(le), re = y(A), ue = y(re), _e = (Oe) => {
              var Te = F0();
              Ge(y(Te), () => e(ne)(s()(l().subscribeTitle))), x(Te), p(Oe, Te);
            };
            O(ue, (Oe) => {
              l().subscribeTitle && Oe(_e);
            }), x(re);
            var ge = L(re, 2), ke = (Oe) => {
              var Te = L0();
              Ge(y(Te), () => e(ne)(s()(l().subscribeSubtitle))), x(Te), p(Oe, Te);
            };
            O(ge, (Oe) => {
              l().subscribeSubtitle && Oe(ke);
            }), x(A);
            var pe = L(A, 2), Ce = (Oe) => {
              hs(Oe, { get discountedPrice() {
                return e(ee);
              }, get fullPrice() {
                return e(D);
              } });
            };
            O(pe, (Oe) => {
              l().showPrices && r() && Oe(Ce);
            }), x(le), x(j);
            var oe = L(j, 2), xe = (Oe) => {
              {
                let Te = d(() => e(v) === "subscribe");
                Ba(Oe, { get highlights() {
                  return l().highlights;
                }, get isSelected() {
                  return e(Te);
                }, get replaceLiquid() {
                  return e(ne);
                } });
              }
            };
            O(oe, (Oe) => {
              l().highlights && Oe(xe);
            });
            var Fe = L(oe, 2), Ae = (Oe) => {
              var Te = j0();
              Sa(y(Te), { get sellingPlans() {
                return i();
              }, get selectedSellingPlan() {
                return e(w);
              }, onChange: se }), x(Te), p(Oe, Te);
            };
            O(Fe, (Oe) => {
              e(v) === "subscribe" && i().length > 1 && e(w) && !h() && Oe(Ae);
            }), x(C), x(J), p(E, J);
          }, $$slots: { default: !0 } });
        }
      }, G = (U) => {
        {
          let te = d(() => ["kaching-bundles__bar", i().length === 0 && "kaching-bundles__bar--disabled", e(v) === "one-time" && "kaching-bundles__bar--selected"]);
          Wt(U, { element: "div", get class() {
            return e(te);
          }, onclick: () => N("one-time"), children: (E, ie) => {
            var J = W0(), C = y(J), j = y(C), W = y(j), X = (oe) => {
              p(oe, R0());
            };
            O(W, (oe) => {
              l().layout === "vertical" && oe(X);
            });
            var le = L(W, 2), A = y(le), re = y(A), ue = y(re), _e = (oe) => {
              var xe = N0();
              Ge(y(xe), () => e(B)(s()(l().oneTimeTitle))), x(xe), p(oe, xe);
            };
            O(ue, (oe) => {
              l().oneTimeTitle && oe(_e);
            }), x(re);
            var ge = L(re, 2), ke = (oe) => {
              var xe = Q0();
              Ge(y(xe), () => e(B)(s()(l().oneTimeSubtitle))), x(xe), p(oe, xe);
            };
            O(ge, (oe) => {
              l().oneTimeSubtitle && oe(ke);
            }), x(A);
            var pe = L(A, 2), Ce = (oe) => {
              hs(oe, { get discountedPrice() {
                return e(H);
              }, get fullPrice() {
                return e(D);
              } });
            };
            O(pe, (oe) => {
              l().showPrices && r() && oe(Ce);
            }), x(le), x(j), x(C), x(J), p(E, J);
          }, $$slots: { default: !0 } });
        }
      };
      O(ce, (U) => {
        Q === "subscribe" ? U(F) : U(G, !1);
      }), p(R, K);
    }), x(Z), ve((R) => {
      M = Et(Z, 1, "kaching-bundles__subscriptions kaching-bundles__bars", null, M, R), Gt(Z, e(V));
    }, [() => ({ "kaching-bundles__bars--horizontal": l().layout === "horizontal" })]), p(n, Z);
    var P = lt(S);
    return c(), P;
  }
  Je(Yd, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0);
  var H0 = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), Z0 = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), J0 = $('<div class="kaching-bundles__bar-variants"><!></div>'), Y0 = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><span class="kaching-bundles__subscriptions__checkbox"><!></span> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div> <!> <!></div></div>'), K0 = $('<div class="kaching-bundles__subscriptions kaching-bundles__bars kaching-bundles__subscriptions--checkbox"><!></div>');
  function Kd(n, t) {
    it(t, !0);
    const r = () => $e(Ka, "$selectedDealBarStore", s), a = () => $e(f, "$translate", s), [s, o] = vt(), c = k(t, "subscriptions", 7), l = k(t, "sellingPlans", 7), i = k(t, "selectedSellingPlan", 7), u = k(t, "hideSellingPlanSelector", 7, !1), h = k(t, "onChange", 7), f = Mt(), g = gn();
    let b = Ve(ct(c().subscribeByDefault || !!i())), v = Ve(ct(i() || l()[0])), w = Ve(!1);
    const m = d(() => Vo(c())), z = d(() => {
      var N, se;
      const S = (se = (N = r()) == null ? void 0 : N.dealBar) == null ? void 0 : se.sellingPlanGid;
      if (S) return l().find((Z) => Z.id === Nt(S));
    }), I = d(() => {
      var N;
      return (N = e(z)) != null ? N : e(v);
    }), V = d(() => {
      var N, se, S, Z, M;
      return (M = (Z = (se = (N = r()) == null ? void 0 : N.pricing.discountedPricesForSellingPlans.find((P) => {
        var R;
        return P.sellingPlanId === ((R = e(I)) == null ? void 0 : R.id);
      })) == null ? void 0 : se.discountedPrice) != null ? Z : (S = r()) == null ? void 0 : S.pricing.discountedPrice) != null ? M : 0;
    }), T = d(() => {
      var N, se;
      return (se = (N = r()) == null ? void 0 : N.pricing.fullPrice) != null ? se : 0;
    }), q = d(() => {
      var N, se, S;
      return hn({ priceFormatter: $e(g, "$formatPrice", s), product: (N = r()) == null ? void 0 : N.product, totalFullPrice: e(T), totalDiscountedPrice: e(V), quantity: (S = (se = r()) == null ? void 0 : se.quantity) != null ? S : 1, sellingPlan: e(I), unitQuantity: null });
    });
    function ee(N) {
      ae(v, N, !0), h()(N);
    }
    tt(() => {
      if (i()) return ae(v, i(), !0), void ae(b, !0);
      if (l().length === 0) return void ae(b, !1);
      e(v) && l().some((N) => N.id === e(v).id) || ae(v, l()[0], !0), e(w) || ae(b, c().subscribeByDefault, !0), h()(e(b) ? e(v) : void 0);
    }), Ra(() => {
      e(b) && h()(e(v));
    });
    var H = { get subscriptions() {
      return c();
    }, set subscriptions(N) {
      c(N), _();
    }, get sellingPlans() {
      return l();
    }, set sellingPlans(N) {
      l(N), _();
    }, get selectedSellingPlan() {
      return i();
    }, set selectedSellingPlan(N) {
      i(N), _();
    }, get hideSellingPlanSelector() {
      return u();
    }, set hideSellingPlanSelector(N = !1) {
      u(N), _();
    }, get onChange() {
      return h();
    }, set onChange(N) {
      h(N), _();
    } }, D = K0(), ne = y(D);
    {
      let N = d(() => ["kaching-bundles__bar", l().length === 0 && "kaching-bundles__bar--disabled"]);
      Wt(ne, { element: "div", get class() {
        return e(N);
      }, role: "checkbox", get "aria-checked"() {
        return e(b);
      }, onclick: function() {
        ae(w, !0), ae(b, !e(b)), h()(e(b) ? e(v) : void 0);
      }, children: (se, S) => {
        var Z = Y0(), M = y(Z), P = y(M), R = y(P), Q = y(R), K = (A) => {
          us(A);
        };
        O(Q, (A) => {
          e(b) && A(K);
        }), x(R);
        var ce = L(R, 2), F = y(ce), G = y(F), U = y(G), te = (A) => {
          var re = H0();
          Ge(y(re), () => e(q)(a()(c().subscribeTitle))), x(re), p(A, re);
        };
        O(U, (A) => {
          c().subscribeTitle && A(te);
        }), x(G);
        var E = L(G, 2), ie = (A) => {
          var re = Z0();
          Ge(y(re), () => e(q)(a()(c().subscribeSubtitle))), x(re), p(A, re);
        };
        O(E, (A) => {
          c().subscribeSubtitle && A(ie);
        }), x(F);
        var J = L(F, 2), C = (A) => {
          hs(A, { get discountedPrice() {
            return e(V);
          }, get fullPrice() {
            return e(T);
          } });
        };
        O(J, (A) => {
          c().showPrices && r() && A(C);
        }), x(ce), x(P);
        var j = L(P, 2), W = (A) => {
          Ba(A, { get highlights() {
            return c().highlights;
          }, get isSelected() {
            return e(b);
          }, get replaceLiquid() {
            return e(q);
          } });
        };
        O(j, (A) => {
          c().highlights && A(W);
        });
        var X = L(j, 2), le = (A) => {
          var re = J0();
          Sa(y(re), { get sellingPlans() {
            return l();
          }, get selectedSellingPlan() {
            return e(v);
          }, onChange: ee }), x(re), p(A, re);
        };
        O(X, (A) => {
          e(b) && l().length > 1 && e(v) && !u() && A(le);
        }), x(M), x(Z), p(se, Z);
      }, $$slots: { default: !0 } });
    }
    x(D), ve(() => Gt(D, e(m))), p(n, D);
    var B = lt(H);
    return o(), B;
  }
  function X0(n, t, r, a) {
    t()(r().subscribeByDefault ? void 0 : e(a));
  }
  Je(Kd, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0);
  var ek = $('<div class="kaching-bundles__subscriptions kaching-bundles__subscriptions--link"><button type="button" class="kaching-bundles__subscriptions__link"><!><!></button></div>');
  function Xd(n, t) {
    it(t, !0);
    const r = () => $e(Ka, "$selectedDealBarStore", s), a = () => $e(g, "$formatPrice", s), [s, o] = vt(), c = k(t, "subscriptions", 7), l = k(t, "sellingPlans", 7), i = k(t, "selectedSellingPlan", 7), u = k(t, "onChange", 7), h = k(t, "onRequestAddToCart", 7), f = Mt(), g = gn(), b = d(() => Vo(c())), v = d(() => {
      var S, Z;
      const M = (Z = (S = r()) == null ? void 0 : S.dealBar) == null ? void 0 : Z.sellingPlanGid;
      if (M) return l().find((P) => P.id === Nt(M));
    }), w = d(() => {
      var S, Z;
      return (Z = (S = e(v)) != null ? S : i()) != null ? Z : l()[0];
    }), m = d(() => {
      var S, Z, M, P, R;
      return (R = (P = (Z = (S = r()) == null ? void 0 : S.pricing.discountedPricesForSellingPlans.find((Q) => {
        var K;
        return Q.sellingPlanId === ((K = e(w)) == null ? void 0 : K.id);
      })) == null ? void 0 : Z.discountedPrice) != null ? P : (M = r()) == null ? void 0 : M.pricing.discountedPrice) != null ? R : 0;
    }), z = d(() => {
      var S, Z;
      return (Z = (S = r()) == null ? void 0 : S.pricing.discountedPriceWithoutSellingPlan) != null ? Z : 0;
    }), I = d(() => {
      var S, Z;
      return (Z = (S = r()) == null ? void 0 : S.pricing.fullPrice) != null ? Z : 0;
    }), V = d(() => {
      var S, Z, M;
      return hn({ priceFormatter: a(), product: (S = r()) == null ? void 0 : S.product, totalFullPrice: e(I), totalDiscountedPrice: c().subscribeByDefault ? e(z) : e(m), quantity: (M = (Z = r()) == null ? void 0 : Z.quantity) != null ? M : 1, sellingPlan: c().subscribeByDefault ? void 0 : e(w), unitQuantity: null });
    }), T = d(() => c().subscribeByDefault ? e(z) : e(m)), q = d(() => {
      const S = c().subscribeByDefault ? c().oneTimeTitle : c().subscribeTitle;
      return S ? e(V)($e(f, "$translate", s)(S)) : "";
    });
    let ee, H = !1;
    tt(() => {
      const S = l().length !== 0 && c().subscribeByDefault ? e(w) : void 0;
      H && (S == null ? void 0 : S.id) === ee || (ee = S == null ? void 0 : S.id, H = !0, u()(S));
    });
    var D = { get subscriptions() {
      return c();
    }, set subscriptions(S) {
      c(S), _();
    }, get sellingPlans() {
      return l();
    }, set sellingPlans(S) {
      l(S), _();
    }, get selectedSellingPlan() {
      return i();
    }, set selectedSellingPlan(S) {
      i(S), _();
    }, get onChange() {
      return u();
    }, set onChange(S) {
      u(S), _();
    }, get onRequestAddToCart() {
      return h();
    }, set onRequestAddToCart(S) {
      h(S), _();
    } }, ne = ze(), B = fe(ne), N = (S) => {
      var Z = ek(), M = y(Z);
      M.__click = [X0, h, c, w];
      var P = y(M);
      Ge(P, () => e(q));
      var R = L(P), Q = (K) => {
        var ce = Zn();
        ve((F) => ft(ce, F), [() => " • " + a()(e(T))]), p(K, ce);
      };
      O(R, (K) => {
        c().showPrices && r() && K(Q);
      }), x(M), x(Z), ve(() => Gt(Z, e(b))), p(S, Z);
    };
    O(B, (S) => {
      l().length > 0 && e(q) && S(N);
    }), p(n, ne);
    var se = lt(D);
    return o(), se;
  }
  jn(["click"]), Je(Xd, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, onChange: {}, onRequestAddToCart: {} }, [], [], !0);
  var tk = $('<div class="kaching-bundles__block-title"><!></div>'), nk = $('<!> <div class="kaching-bundles__subscriptions-wrapper"><!></div>', 1);
  function eg(n, t) {
    it(t, !0);
    const [r, a] = vt(), s = k(t, "subscriptions", 7), o = k(t, "sellingPlans", 7), c = k(t, "selectedSellingPlan", 7), l = k(t, "hideSellingPlanSelector", 7, !1), i = k(t, "hideTitle", 7, !1), u = k(t, "onChange", 7), h = k(t, "onRequestAddToCart", 7), f = Mt(), g = d(() => s().title ? $e(f, "$translate", r)(s().title) : "");
    var b = { get subscriptions() {
      return s();
    }, set subscriptions(ee) {
      s(ee), _();
    }, get sellingPlans() {
      return o();
    }, set sellingPlans(ee) {
      o(ee), _();
    }, get selectedSellingPlan() {
      return c();
    }, set selectedSellingPlan(ee) {
      c(ee), _();
    }, get hideSellingPlanSelector() {
      return l();
    }, set hideSellingPlanSelector(ee = !1) {
      l(ee), _();
    }, get hideTitle() {
      return i();
    }, set hideTitle(ee = !1) {
      i(ee), _();
    }, get onChange() {
      return u();
    }, set onChange(ee) {
      u(ee), _();
    }, get onRequestAddToCart() {
      return h();
    }, set onRequestAddToCart(ee) {
      h(ee), _();
    } }, v = nk(), w = fe(v), m = (ee) => {
      var H = tk();
      Ge(y(H), () => e(g)), x(H), p(ee, H);
    };
    O(w, (ee) => {
      e(g) && !i() && ee(m);
    });
    var z = L(w, 2), I = y(z), V = (ee) => {
      Kd(ee, { get subscriptions() {
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
    }, T = (ee) => {
      var H = ze(), D = fe(H), ne = (N) => {
        Xd(N, { get subscriptions() {
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
      }, B = (N) => {
        Yd(N, { get subscriptions() {
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
      O(D, (N) => {
        s().layout === "link" ? N(ne) : N(B, !1);
      }, !0), p(ee, H);
    };
    O(I, (ee) => {
      s().layout === "checkbox" ? ee(V) : ee(T, !1);
    }), x(z), p(n, v);
    var q = lt(b);
    return a(), q;
  }
  Je(eg, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, hideTitle: {}, onChange: {}, onRequestAddToCart: {} }, [], [], !0);
  var rk = An('<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.584 21H42.834V14C42.834 6.279 36.555 0 28.834 0C21.113 0 14.834 6.279 14.834 14V21H13.084C10.1907 21 7.83398 23.3543 7.83398 26.25V50.75C7.83398 53.6457 10.1907 56 13.084 56H44.584C47.4773 56 49.834 53.6457 49.834 50.75V26.25C49.834 23.3543 47.4773 21 44.584 21ZM19.5007 14C19.5007 8.85267 23.6867 4.66667 28.834 4.66667C33.9813 4.66667 38.1673 8.85267 38.1673 14V21H19.5007V14ZM31.1673 39.018V44.3333C31.1673 45.6213 30.1243 46.6667 28.834 46.6667C27.5436 46.6667 26.5007 45.6213 26.5007 44.3333V39.018C25.1123 38.2083 24.1673 36.7197 24.1673 35C24.1673 32.4263 26.2603 30.3333 28.834 30.3333C31.4076 30.3333 33.5007 32.4263 33.5007 35C33.5007 36.7197 32.5557 38.2083 31.1673 39.018Z" fill="currentColor" transform="translate(21.5, 22)"></path></svg>');
  function tg(n) {
    p(n, rk());
  }
  Je(tg, {}, [], [], !0);
  var ak = $('<img alt="Locked" class="kaching-bundles__progressive-gifts__gift__image"/>'), ik = $('<img class="kaching-bundles__progressive-gifts__gift__image kaching-bundles__progressive-gifts__gift__image--locked-product"/>'), lk = $('<div class="kaching-bundles__progressive-gifts__gift__image-wrapper"><!></div>'), sk = $('<div class="kaching-bundles__progressive-gifts__gift__title kaching-bundles__progressive-gifts__gift__title--locked"><!></div>'), ok = $('<div class="kaching-bundles__progressive-gifts__gift__title kaching-bundles__progressive-gifts__gift__title--locked"><!></div>'), ck = $('<span class="kaching-bundles__progressive-gifts__gift__label__text"><!></span>'), uk = $('<span class="kaching-bundles__progressive-gifts__gift__label__text kaching-bundles__progressive-gifts__gift__label__text--crossed-out"><!></span>'), dk = $('<div class="kaching-bundles__progressive-gifts__gift__label"><!> <!></div>'), gk = $('<div class="kaching-bundles__progressive-gifts__gift__content"><!> <!> <!></div>'), hk = $('<div class="kaching-bundles__progressive-gifts__gift__image-wrapper"><img class="kaching-bundles__progressive-gifts__gift__image"/></div>'), pk = $('<span class="kaching-bundles__progressive-gifts__gift__title"><!></span>'), bk = $('<span class="kaching-bundles__progressive-gifts__gift__label__text"><!></span>'), fk = $('<span class="kaching-bundles__progressive-gifts__gift__label__text kaching-bundles__progressive-gifts__gift__label__text--crossed-out"><!></span>'), vk = $('<div class="kaching-bundles__progressive-gifts__gift__label"><!> <!></div>'), _k = $('<div><div class="kaching-bundles__progressive-gifts__gift__content"><!> <div class="kaching-bundles__progressive-gifts__gift__details"><div class="kaching-bundles__progressive-gifts__gift__details__content"><!> <!></div> <!></div></div></div>');
  function ng(n, t) {
    it(t, !0);
    const r = () => $e(I, "$config", o), a = () => $e(w, "$translate", o), s = () => $e(z, "$getMediaImageUrl", o), [o, c] = vt(), l = k(t, "progressiveGifts", 7), i = k(t, "gift", 7), u = k(t, "product", 7), h = k(t, "selectedDealBarIndex", 7), f = k(t, "sellingPlan", 7), g = k(t, "onChange", 7), b = k(t, "onUnlock", 7), v = k(t, "onSubscribe", 7), w = Mt(), m = gn(), z = En(), I = vn(), V = d(() => i().differentVariantsEnabled), T = d(() => {
      var j;
      return u() ? i().variantGIDs ? i().variantGIDs.map(Nt) : (j = u()) == null ? void 0 : j.variants.map((W) => W.id) : null;
    }), q = d(() => {
      if (u()) return { ...u(), variants: u().variants.filter((j) => (r().preview || j.availableForSale) && (!e(T) || e(T).includes(j.id))) };
    });
    let ee = Ve(ct([]));
    const H = d(() => (function(j, W, X) {
      return j.length > 0 ? j : W != null && W.availableForSale && W.variants.length > 0 ? Array.from({ length: X }, () => W.variants[0].id) : [];
    })(e(ee), e(q), i().quantity)), D = d(() => u() && e(H).length > 0 ? e(H).map((j) => u().variants.find((W) => W.id === j)).filter((j) => j !== void 0) : []), ne = d(() => {
      var j;
      return hn({ priceFormatter: $e(m, "$formatPrice", o), product: u(), totalFullPrice: ((j = e(D)) == null ? void 0 : j.reduce((W, X) => {
        var le;
        return W + ((le = X == null ? void 0 : X.price) != null ? le : 0);
      }, 0)) || 0, totalDiscountedPrice: 0, quantity: i().quantity, unitQuantity: xr(e(D).map((W) => ({ variant: W, quantity: 1 }))) });
    }), B = d(() => e(ne)(a()(i().title))), N = d(() => e(ne)(a()(i().lockedTitle))), se = d(() => e(ne)(a()(i().label))), S = d(() => e(ne)(a()(i().labelCrossedOut))), Z = d(() => h() === null || !Po(i(), h() + 1)), M = d(() => Cd(i(), f())), P = d(() => e(Z) || e(M));
    function R() {
      e(Z) && b()(), e(M) && v()();
    }
    const Q = d(() => {
      var j, W, X;
      return i().giftType === "shipping" ? _o : ((W = (j = e(D)) == null ? void 0 : j[0]) == null ? void 0 : W.image) || ((X = u()) == null ? void 0 : X.image);
    }), K = d(() => i().mediaImageGID ? s()(i().mediaImageGID) : e(Q)), ce = d(() => !l().inheritStyle && l().style && s()(l().style.lockedMediaImageGID)), F = d(() => l().showLockedGiftProducts && !e(ce)), G = d(() => e(F) && !!e(K));
    tt(() => {
      if (u() && e(D) && !e(P)) {
        const j = Object.values(e(D).reduce((W, X) => (W[X.id] ? W[X.id].quantity += 1 : W[X.id] = { variant: X, quantity: 1 }, W), {}));
        Jt(() => g()({ product: u(), variants: j }));
      } else Jt(() => g()(void 0));
    }), fr(() => {
      i().productGID;
    }), tt(() => {
      e(P) && e(K) && (new Image().src = e(K));
    });
    const U = d(() => !(i().giftType !== "product" || !u() || u().availableForSale && u().variants.filter((j) => j.availableForSale && (!e(T) || e(T).includes(j.id))).length !== 0));
    var te = { get progressiveGifts() {
      return l();
    }, set progressiveGifts(j) {
      l(j), _();
    }, get gift() {
      return i();
    }, set gift(j) {
      i(j), _();
    }, get product() {
      return u();
    }, set product(j) {
      u(j), _();
    }, get selectedDealBarIndex() {
      return h();
    }, set selectedDealBarIndex(j) {
      h(j), _();
    }, get sellingPlan() {
      return f();
    }, set sellingPlan(j) {
      f(j), _();
    }, get onChange() {
      return g();
    }, set onChange(j) {
      g(j), _();
    }, get onUnlock() {
      return b();
    }, set onUnlock(j) {
      b(j), _();
    }, get onSubscribe() {
      return v();
    }, set onSubscribe(j) {
      v(j), _();
    } }, E = ze(), ie = fe(E), J = (j) => {
      var W = ze(), X = fe(W), le = (A) => {
        var re = ze(), ue = fe(re), _e = (ke) => {
          Wt(ke, { element: "div", class: "kaching-bundles__progressive-gifts__gift kaching-bundles__progressive-gifts__gift--locked", onclick: R, children: (pe, Ce) => {
            var oe = gk(), xe = y(oe), Fe = (Me) => {
              var he = lk(), Pe = y(he), De = (me) => {
                var qe = ak();
                ve(() => Ie(qe, "src", e(ce))), p(me, qe);
              }, we = (me) => {
                var qe = ze(), Ue = fe(qe), Ye = (rt) => {
                  var Bt = ik();
                  ve(() => {
                    var Dt, dt;
                    Ie(Bt, "src", e(K)), Ie(Bt, "alt", (dt = (Dt = u()) == null ? void 0 : Dt.title) != null ? dt : "");
                  }), p(rt, Bt);
                }, at = (rt) => {
                  tg(rt);
                };
                O(Ue, (rt) => {
                  e(G) ? rt(Ye) : rt(at, !1);
                }, !0), p(me, qe);
              };
              O(Pe, (me) => {
                e(ce) ? me(De) : me(we, !1);
              }), x(he), p(Me, he);
            };
            O(xe, (Me) => {
              !e(G) && e(F) || Me(Fe);
            });
            var Ae = L(xe, 2), Oe = (Me) => {
              var he = sk();
              Ge(y(he), () => e(N)), x(he), p(Me, he);
            }, Te = (Me) => {
              var he = ze(), Pe = fe(he), De = (we) => {
                var me = ok();
                Ge(y(me), () => e(B)), x(me), p(we, me);
              };
              O(Pe, (we) => {
                e(B) && we(De);
              }, !0), p(Me, he);
            };
            O(Ae, (Me) => {
              e(F) ? Me(Te, !1) : Me(Oe);
            });
            var Y = L(Ae, 2), ye = (Me) => {
              var he = dk(), Pe = y(he), De = (qe) => {
                var Ue = ck();
                Ge(y(Ue), () => e(se)), x(Ue), p(qe, Ue);
              };
              O(Pe, (qe) => {
                e(se) && qe(De);
              });
              var we = L(Pe, 2), me = (qe) => {
                var Ue = uk();
                Ge(y(Ue), () => e(S)), x(Ue), p(qe, Ue);
              };
              O(we, (qe) => {
                e(S) && qe(me);
              }), x(he), p(Me, he);
            };
            O(Y, (Me) => {
              (e(se) || e(S)) && l().showLockedGiftLabels && Me(ye);
            }), x(oe), p(pe, oe);
          }, $$slots: { default: !0 } });
        }, ge = (ke) => {
          var pe = _k();
          let Ce;
          var oe = y(pe), xe = y(oe), Fe = (De) => {
            var we = hk(), me = y(we);
            x(we), ve(() => {
              var qe, Ue;
              Ie(me, "src", e(K)), Ie(me, "alt", (Ue = (qe = u()) == null ? void 0 : qe.title) != null ? Ue : "");
            }), p(De, we);
          };
          O(xe, (De) => {
            e(K) && De(Fe);
          });
          var Ae = L(xe, 2), Oe = y(Ae), Te = y(Oe), Y = (De) => {
            var we = pk();
            Ge(y(we), () => e(B)), x(we), p(De, we);
          };
          O(Te, (De) => {
            e(B) && De(Y);
          });
          var ye = L(Te, 2), Me = (De) => {
            var we = vk(), me = y(we), qe = (at) => {
              var rt = bk();
              Ge(y(rt), () => e(se)), x(rt), p(at, rt);
            };
            O(me, (at) => {
              e(se) && at(qe);
            });
            var Ue = L(me, 2), Ye = (at) => {
              var rt = fk();
              Ge(y(rt), () => e(S)), x(rt), p(at, rt);
            };
            O(Ue, (at) => {
              e(S) && at(Ye);
            }), x(we), p(De, we);
          };
          O(ye, (De) => {
            (e(se) || e(S)) && De(Me);
          }), x(Oe);
          var he = L(Oe, 2), Pe = (De) => {
            var we = ze();
            Vt(fe(we), 17, () => ({ length: e(V) ? i().quantity : 1 }), Vr, (me, qe, Ue) => {
              var Ye = ze(), at = fe(Ye), rt = (Bt) => {
                {
                  let Dt = d(() => e(V) ? Ue + 1 : void 0);
                  Jn(Bt, { get product() {
                    return e(q);
                  }, get selectedVariantId() {
                    return e(H)[Ue];
                  }, get number() {
                    return e(Dt);
                  }, forceDropdown: !0, onChange: (dt) => (function(At, Yt) {
                    e(V) ? ae(ee, [...e(H).slice(0, Yt), At, ...e(H).slice(Yt + 1)], !0) : ae(ee, Array.from({ length: i().quantity }, () => At), !0);
                  })(dt, Ue) });
                }
              };
              O(at, (Bt) => {
                e(H)[Ue] !== void 0 && Bt(rt);
              }), p(me, Ye);
            }), p(De, we);
          };
          O(he, (De) => {
            e(q) && e(q).variants.length > 1 && e(H).length > 0 && De(Pe);
          }), x(Ae), x(oe), x(pe), ve((De) => Ce = Et(pe, 1, "kaching-bundles__progressive-gifts__gift", null, Ce, De), [() => ({ "kaching-bundles__progressive-gifts__gift--out-of-stock": r().preview && e(U) })]), p(ke, pe);
        };
        O(ue, (ke) => {
          e(P) ? ke(_e) : ke(ge, !1);
        }), p(A, re);
      };
      O(X, (A) => {
        var re;
        (u() && ((re = e(D)) != null && re.length || r().preview && e(U)) || i().giftType === "shipping") && A(le);
      }), p(j, W);
    };
    O(ie, (j) => {
      e(P) && l().hideLockedGifts || j(J);
    }), p(n, E);
    var C = lt(te);
    return c(), C;
  }
  Je(ng, { progressiveGifts: {}, gift: {}, product: {}, selectedDealBarIndex: {}, sellingPlan: {}, onChange: {}, onUnlock: {}, onSubscribe: {} }, [], [], !0);
  var kk = $('<span class="kaching-bundles__progressive-gifts__title"><!></span>'), mk = $('<span class="kaching-bundles__progressive-gifts__subtitle"><!></span>'), xk = $('<div class="kaching-bundles__progressive-gifts"><div class="kaching-bundles__progressive-gifts__header"><!> <!></div> <div></div></div>');
  function rg(n, t) {
    it(t, !0);
    const r = () => $e(w, "$config", s), a = () => $e(v, "$translate", s), [s, o] = vt(), c = k(t, "progressiveGifts", 7), l = k(t, "dealBlock", 7), i = k(t, "otherProducts", 7), u = k(t, "selectedDealBarIndex", 7), h = k(t, "sellingPlan", 7), f = k(t, "onChange", 7), g = k(t, "onUnlock", 7), b = k(t, "onSubscribe", 7), v = Mt(), w = vn();
    let m = Ve(ct({}));
    const z = d(() => ((ne) => {
      const { progressiveGifts: B, colors: N, fonts: se } = ne, S = (B == null ? void 0 : B.inheritStyle) || !(B != null && B.style);
      return pn({ "kaching-bundles-progressive-gifts-title-color": Ne(B.titleColor), "kaching-bundles-progressive-gifts-title-alignment": B.titleAlignment, "kaching-bundles-progressive-gifts-title-size": B.titleSize + "px", "kaching-bundles-progressive-gifts-title-weight": cr(B.titleStyle), "kaching-bundles-progressive-gifts-title-style": ur(B.titleStyle), "kaching-bundles-progressive-gifts-subtitle-color": Ne(B.subtitleColor), "kaching-bundles-progressive-gifts-subtitle-alignment": B.subtitleAlignment, "kaching-bundles-progressive-gifts-subtitle-size": B.subtitleSize + "px", "kaching-bundles-progressive-gifts-subtitle-weight": cr(B.subtitleStyle), "kaching-bundles-progressive-gifts-subtitle-style": ur(B.subtitleStyle), "kaching-bundles-progressive-gifts-image-size": S ? void 0 : B.style.imageSize + "px", "kaching-bundles-progressive-gifts-border-radius": (S ? ne.cornerRadius : B.style.cornerRadius) + "px", "kaching-bundles-progressive-gifts-label-background-color": Ne(S ? N.progressiveGiftsLabelBackground || N.labelBackground : B.style.labelBackgroundColor), "kaching-bundles-progressive-gifts-label-text-color": Ne(S ? N.label : B.style.labelTextColor), "kaching-bundles-progressive-gifts-label-text-size": (S ? se.label.size : B.style.labelTextSize) + "px", "kaching-bundles-progressive-gifts-background-color": Ne(S ? N.selectedBackground : B.style.backgroundColor), "kaching-bundles-progressive-gifts-border-color": Ne(S ? N.border : B.style.borderColor), "kaching-bundles-progressive-gifts-text-color": Ne(S ? N.title : B.style.textColor), "kaching-bundles-progressive-gifts-text-size": S ? void 0 : B.style.textSize + "px", "kaching-bundles-progressive-gifts-locked-background-color": Ne(S ? N.background : B.style.lockedBackgroundColor), "kaching-bundles-progressive-gifts-locked-border-color": Ne(S ? { ...N.border, alpha: 0.3 * N.border.alpha } : B.style.lockedBorderColor), "kaching-bundles-progressive-gifts-locked-text-color": S ? void 0 : Ne(B.style.lockedTextColor), "kaching-bundles-progressive-gifts-locked-text-size": S ? void 0 : B.style.lockedTextSize + "px", "kaching-bundles-progressive-gifts-locked-icon-color": S ? void 0 : Ne(B.style.lockedIconColor) });
    })(l()));
    function I() {
      const ne = Object.entries(e(m)).map(([B, N]) => ({ id: B, variants: N.variants, product: N.product }));
      f()(ne);
    }
    const V = d(() => c().gifts.flatMap((ne) => {
      const B = ne.giftType === "product" && ne.productGID ? i().find((se) => se.id === Nt(ne.productGID)) : void 0;
      if (!r().preview && ne.giftType === "product" && !(B != null && B.availableForSale)) return [];
      const N = B && !r().preview ? mr(B) : B;
      return { gift: ne, product: N };
    }));
    tt(() => {
      const ne = new Set(c().gifts.map((N) => N.id)), B = Object.keys(e(m)).filter((N) => !ne.has(N));
      if (B.length) {
        for (const N of B) delete e(m)[N];
        I();
      }
    });
    var T = { get progressiveGifts() {
      return c();
    }, set progressiveGifts(ne) {
      c(ne), _();
    }, get dealBlock() {
      return l();
    }, set dealBlock(ne) {
      l(ne), _();
    }, get otherProducts() {
      return i();
    }, set otherProducts(ne) {
      i(ne), _();
    }, get selectedDealBarIndex() {
      return u();
    }, set selectedDealBarIndex(ne) {
      u(ne), _();
    }, get sellingPlan() {
      return h();
    }, set sellingPlan(ne) {
      h(ne), _();
    }, get onChange() {
      return f();
    }, set onChange(ne) {
      f(ne), _();
    }, get onUnlock() {
      return g();
    }, set onUnlock(ne) {
      g(ne), _();
    }, get onSubscribe() {
      return b();
    }, set onSubscribe(ne) {
      b(ne), _();
    } }, q = ze(), ee = fe(q), H = (ne) => {
      var B = xk(), N = y(B), se = y(N), S = (Q) => {
        var K = kk();
        Ge(y(K), () => a()(c().title)), x(K), p(Q, K);
      };
      O(se, (Q) => {
        c().title && Q(S);
      });
      var Z = L(se, 2), M = (Q) => {
        var K = mk();
        Ge(y(K), () => a()(c().subtitle)), x(K), p(Q, K);
      };
      O(Z, (Q) => {
        c().subtitle && Q(M);
      }), x(N);
      var P = L(N, 2);
      let R;
      Vt(P, 21, () => e(V), ({ gift: Q, product: K }) => Q.id, (Q, K) => {
        let ce = () => e(K).gift;
        ng(Q, { get progressiveGifts() {
          return c();
        }, get gift() {
          return ce();
        }, get product() {
          return e(K).product;
        }, get selectedDealBarIndex() {
          return u();
        }, get sellingPlan() {
          return h();
        }, onChange: (F) => (function(G, U) {
          U ? e(m)[G] = U : delete e(m)[G], I();
        })(ce().id, F), onUnlock: () => g()(ce().unlockAtBar - 1), get onSubscribe() {
          return b();
        } });
      }), x(P), x(B), ve((Q) => {
        Gt(B, e(z)), R = Et(P, 1, "kaching-bundles__progressive-gifts__gifts", null, R, Q);
      }, [() => ({ "kaching-bundles__progressive-gifts__gifts--vertical": c().layout === "vertical" })]), p(ne, B);
    };
    O(ee, (ne) => {
      c().gifts.length > 0 && ne(H);
    }), p(n, q);
    var D = lt(T);
    return o(), D;
  }
  Je(rg, { progressiveGifts: {}, dealBlock: {}, otherProducts: {}, selectedDealBarIndex: {}, sellingPlan: {}, onChange: {}, onUnlock: {}, onSubscribe: {} }, [], [], !0);
  var yk = $('<span class="kaching-bundles__bar-title"><!></span>'), wk = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), Pk = $('<div class="kaching-bundles__bar-price"><!></div>'), Sk = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Bk = $('<span><!></span> <img class="kaching-bundles__checkbox-upsells__image"/> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div></div> <div class="kaching-bundles__bar-pricing"><!> <!></div>', 1), Ck = $('<div class="kaching-bundles__bar-variants kaching-bundles__bar-variants--visible"><!> <!></div>'), Ik = $('<div class="kaching-bundles__bar-variants kaching-bundles__bar-variants--visible"><!></div>'), Mk = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!></div>', 1), zk = $("<div><!></div>");
  function ag(n, t) {
    it(t, !0);
    const r = () => $e(w, "$config", o), a = () => $e(b, "$formatPrice", o), s = () => $e(ie, "$translate", o), [o, c] = vt(), l = k(t, "checkboxUpsell", 7), i = k(t, "product", 7), u = k(t, "dealBlock", 7), h = k(t, "dealSellingPlan", 7), f = k(t, "dealBarQuantity", 7), g = k(t, "onChange", 7), b = gn(), v = En(), w = vn();
    let m = Ve(!1), z = Ve(1), I = Ve(ct({})), V = Ve(void 0);
    const T = d(() => {
      var pe;
      return (pe = l().preselected) != null && pe;
    }), q = d(() => {
      var pe;
      return e(m) || !((pe = l().showProductOptionsOnlyWhenSelected) == null || pe);
    });
    tt(() => {
      ae(m, e(T), !0);
    }), tt(() => {
      l().matchQuantityWithDealBar && ae(z, f(), !0);
    });
    const ee = d(() => !!l().variantGIDs), H = d(() => {
      var pe, Ce;
      return e(ee) && i() ? i().variants.filter((oe) => l().variantGIDs.some((xe) => Nt(xe) === oe.id)) : (Ce = (pe = i()) == null ? void 0 : pe.variants) != null ? Ce : [];
    }), D = d(() => e(z) > 1 && e(H).length > 1), ne = d(() => (function(pe, Ce) {
      if (pe.variantGIDs)
        return pe.variantGIDs.length === 0 ? void 0 : Nt(pe.variantGIDs[0]);
      if (Ce != null && Ce.availableForSale && Ce.variants.length > 0) return Ce.variants[0].id;
    })(l(), i())), B = d(() => {
      if (e(ne) === void 0) return [];
      const pe = [];
      for (let Ce = 0; Ce < e(z); Ce++) {
        const oe = e(I)[Ce];
        oe !== void 0 ? pe.push(oe) : pe.push(e(ne));
      }
      return pe;
    }), N = d(() => (function(pe, Ce) {
      if (!Ce) return [];
      const oe = {};
      for (const xe of pe) {
        const Fe = oe[xe];
        if (Fe) {
          Fe.quantity += 1;
          continue;
        }
        const Ae = Ce.variants.find((Oe) => Oe.id === xe);
        Ae && (oe[xe] = { variant: Ae, quantity: 1 });
      }
      return Object.values(oe);
    })(e(B), i())), se = d(() => {
      var pe;
      return (pe = e(N)[0]) == null ? void 0 : pe.variant;
    }), S = d(() => {
      var pe;
      return (pe = l().subscriptionEnabled) == null || pe;
    }), Z = d(() => {
      var pe;
      return (pe = l().subscriptionType) != null ? pe : "deal";
    }), M = d(() => e(S) && e(Z) === "always" && i() && e(se) ? sl(i(), [e(se)]) : []), P = d(() => e(M).find((pe) => pe.id === e(V)) || e(M)[0]);
    tt(() => {
      var pe;
      e(M).some((Ce) => {
        var oe;
        return Ce.id === ((oe = h()) == null ? void 0 : oe.id);
      }) && ae(V, (pe = h()) == null ? void 0 : pe.id, !0);
    });
    const R = d(() => {
      if (i() && e(se) && e(S))
        return e(Z) === "deal" ? h() ? tr(i(), e(se), h()) : void 0 : e(P);
    }), Q = d(() => u().priceRounding ? { perItem: u().showPricesPerItem, precision: u().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0);
    function K(pe) {
      return sa({ discountType: l().discountType, discountValue: l().discountValue, discountQuantity: 1, variantQuantities: e(N), currencyRate: r().currencyRate, priceRounding: e(Q), sellingPlan: pe });
    }
    let ce = d(() => K(e(R))), F = d(() => e(N).reduce((pe, { variant: Ce, quantity: oe }) => pe + Math.max(Ce.price, Ce.compareAtPrice || 0) * oe, 0));
    const G = d(() => i() && e(se) ? tr(i(), e(se), void 0) : void 0), U = d(() => e(S) && e(Z) === "always" ? e(ce) : K(e(G))), te = d(() => !i() || !e(se) ? [] : sl(i(), [e(se)]).map((pe) => {
      let Ce;
      return Ce = e(S) ? e(Z) === "always" ? e(P) : pe : e(G), { sellingPlanId: pe.id, discountedPrice: K(Ce) };
    })), E = d(() => hn({ priceFormatter: a(), product: i(), totalFullPrice: e(F), totalDiscountedPrice: e(ce), quantity: e(z), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: xr(e(N)), sellingPlan: e(R) })), ie = Mt();
    let J = d(() => e(E)(s()(l().title))), C = d(() => e(E)(s()(l().subtitle))), j = d(() => e(F) && e(F) > e(ce));
    const W = d(() => $e(v, "$getMediaImageUrl", o)(l().mediaImageGID)), X = d(() => ((pe, Ce) => {
      const oe = cs(pe);
      if (oe.length > 0) return oe.filter((Fe) => Fe.attachedTo.type === "checkboxUpsell" && Fe.attachedTo.upsellId === Ce.id);
      if (pe.badgesEnabled === !1) return [];
      const xe = id(Ce);
      return xe ? [xe] : [];
    })(u(), { id: l().id, badgeStyle: l().badgeStyle, badgeText: l().badgeText, badgeImageGID: l().badgeImageGID }).map((pe) => wa(pe, s(), e(E)))), le = d(() => Pa(e(X)));
    function A() {
      ae(m, !e(m));
    }
    function re(pe, Ce) {
      ae(I, { ...e(I), [pe]: Ce }, !0);
    }
    tt(() => {
      if (i() && e(N).length > 0 && e(m)) {
        const pe = e(R);
        Jt(() => g()({ product: i(), variants: e(N), sellingPlan: pe, pricing: { discountedPrice: e(ce), fullPrice: e(F), discountedPriceWithoutSellingPlan: e(U), discountedPricesForSellingPlans: e(te) } }));
      } else Jt(() => g()(void 0));
    });
    var ue = { get checkboxUpsell() {
      return l();
    }, set checkboxUpsell(pe) {
      l(pe), _();
    }, get product() {
      return i();
    }, set product(pe) {
      i(pe), _();
    }, get dealBlock() {
      return u();
    }, set dealBlock(pe) {
      u(pe), _();
    }, get dealSellingPlan() {
      return h();
    }, set dealSellingPlan(pe) {
      h(pe), _();
    }, get dealBarQuantity() {
      return f();
    }, set dealBarQuantity(pe) {
      f(pe), _();
    }, get onChange() {
      return g();
    }, set onChange(pe) {
      g(pe), _();
    } }, _e = zk();
    let ge;
    Ja(y(_e), { element: "div", get borderHost() {
      return e(le);
    }, children: (pe, Ce) => {
      var oe = Mk(), xe = fe(oe);
      Vt(xe, 17, () => e(X), (Pe) => Pe.id, (Pe, De) => {
        oa(Pe, { get badge() {
          return e(De);
        }, blockLayout: "vertical" });
      });
      var Fe = L(xe, 2), Ae = y(Fe);
      Wt(Ae, { element: "div", class: "kaching-bundles__bar-main", role: "checkbox", get "aria-checked"() {
        return e(m);
      }, onclick: A, children: (Pe, De) => {
        var we = Bk(), me = fe(we);
        let qe;
        var Ue = y(me), Ye = (Ke) => {
          us(Ke);
        };
        O(Ue, (Ke) => {
          e(m) && Ke(Ye);
        }), x(me);
        var at = L(me, 2), rt = L(at, 2), Bt = y(rt), Dt = y(Bt);
        st(y(Dt), () => e(J), (Ke) => {
          var He = yk();
          Ge(y(He), () => e(J)), x(He), p(Ke, He);
        }), x(Dt);
        var dt = L(Dt, 2), At = (Ke) => {
          var He = ze();
          st(fe(He), () => e(C), (We) => {
            var Re = wk();
            Ge(y(Re), () => e(C)), x(Re), p(We, Re);
          }), p(Ke, He);
        };
        O(dt, (Ke) => {
          e(C) && Ke(At);
        }), x(Bt), x(rt);
        var Yt = L(rt, 2), Se = y(Yt);
        st(Se, () => e(ce), (Ke) => {
          var He = Pk();
          Ge(y(He), () => a()(e(ce))), x(He), ve((We) => Ie(He, "data-a11y-label", We), [() => s()("system.price")]), p(Ke, He);
        });
        var be = L(Se, 2), Ze = (Ke) => {
          var He = ze();
          st(fe(He), () => e(F), (We) => {
            var Re = Sk();
            Ge(y(Re), () => a()(e(F))), x(Re), ve((pt) => Ie(Re, "data-a11y-label", pt), [() => s()("system.original_price")]), p(We, Re);
          }), p(Ke, He);
        };
        O(be, (Ke) => {
          e(j) && Ke(Ze);
        }), x(Yt), ve((Ke) => {
          var He, We, Re;
          qe = Et(me, 1, "kaching-bundles__checkbox-upsells__checkbox", null, qe, Ke), Ie(at, "src", e(W) || ((He = e(se)) == null ? void 0 : He.image) || ((We = i()) == null ? void 0 : We.image)), Ie(at, "alt", (Re = i()) == null ? void 0 : Re.title);
        }, [() => ({ "kaching-bundles__checkbox-upsells__checkbox--selected": e(m) })]), p(Pe, we);
      }, $$slots: { default: !0 } });
      var Oe = L(Ae, 2), Te = (Pe) => {
        var De = Ck(), we = y(De);
        {
          let Ye = d(() => ({ ...i(), variants: e(H) }));
          la(we, { get product() {
            return e(Ye);
          } });
        }
        var me = L(we, 2), qe = (Ye) => {
          var at = ze();
          Vt(fe(at), 17, () => ({ length: e(z) }), Vr, (rt, Bt, Dt) => {
            {
              let dt = d(() => ({ ...i(), variants: e(H) })), At = d(() => e(z) > 1 ? Dt + 1 : void 0);
              Jn(rt, { get product() {
                return e(dt);
              }, get selectedVariantId() {
                return e(B)[Dt];
              }, get number() {
                return e(At);
              }, onChange: (Yt) => re(Dt, Yt) });
            }
          }), p(Ye, at);
        }, Ue = (Ye) => {
          {
            let at = d(() => ({ ...i(), variants: e(H) }));
            Jn(Ye, { get product() {
              return e(at);
            }, get selectedVariantId() {
              return e(B)[0];
            }, onChange: (rt) => re(0, rt) });
          }
        };
        O(me, (Ye) => {
          e(D) ? Ye(qe) : Ye(Ue, !1);
        }), x(De), p(Pe, De);
      };
      O(Oe, (Pe) => {
        e(q) && e(H).length > 1 && e(B).length > 0 && Pe(Te);
      });
      var Y = L(Oe, 2), ye = (Pe) => {
        var De = Ik();
        Sa(y(De), { get sellingPlans() {
          return e(M);
        }, get selectedSellingPlan() {
          return e(P);
        }, onChange: (we) => ae(V, we.id, !0) }), x(De), p(Pe, De);
      };
      O(Y, (Pe) => {
        e(q) && e(M).length > 1 && e(P) && Pe(ye);
      });
      var Me = L(Y, 2), he = (Pe) => {
        pl(Pe, { get value() {
          return e(z);
        }, min: 1, onChange: (De) => ae(z, De, !0) });
      };
      O(Me, (Pe) => {
        e(q) && l().quantitySelector && Pe(he);
      }), x(Fe), p(pe, oe);
    }, $$slots: { default: !0 } }), x(_e), ve((pe) => ge = Et(_e, 1, "kaching-bundles__checkbox-upsells__upsell kaching-bundles__bar", null, ge, pe), [() => {
      var pe;
      return { "kaching-bundles__bar--selected": e(m), "kaching-bundles__bar--disabled": r().preview && !((pe = i()) != null && pe.availableForSale) };
    }]), p(n, _e);
    var ke = lt(ue);
    return c(), ke;
  }
  Je(ag, { checkboxUpsell: {}, product: {}, dealBlock: {}, dealSellingPlan: {}, dealBarQuantity: {}, onChange: {} }, [], [], !0);
  var $k = $('<div class="kaching-bundles__block-title"><!></div>'), Dk = $('<div class="kaching-bundles__checkbox-upsells"><!> <div class="kaching-bundles__checkbox-upsells__upsells"></div></div>');
  function ig(n, t) {
    it(t, !0);
    const [r, a] = vt(), s = k(t, "checkboxUpsells", 7), o = k(t, "dealBlock", 7), c = k(t, "otherProducts", 7), l = k(t, "complementaryProducts", 7), i = k(t, "dealSellingPlan", 7), u = k(t, "dealBarQuantity", 7), h = k(t, "onChange", 7), f = vn(), g = Mt(), b = d(() => s().title ? $e(g, "$translate", r)(s().title) : "");
    let v = Ve(ct({}));
    const w = d(() => l().map(mr)), m = Math.floor(1e3 * Math.random()), z = d(() => s().upsells.flatMap((D, ne) => {
      if (D.productSource === "complementary") {
        const se = e(w)[(ne + m) % (e(w).length || 1)];
        return se ? { upsell: D, product: se } : [];
      }
      const B = D.productGID ? c().find((se) => se.id === Nt(D.productGID)) : void 0;
      if (!$e(f, "$config", r).preview && !(B != null && B.availableForSale)) return [];
      const N = B && mr(B);
      return { upsell: D, product: N };
    }));
    var I = { get checkboxUpsells() {
      return s();
    }, set checkboxUpsells(D) {
      s(D), _();
    }, get dealBlock() {
      return o();
    }, set dealBlock(D) {
      o(D), _();
    }, get otherProducts() {
      return c();
    }, set otherProducts(D) {
      c(D), _();
    }, get complementaryProducts() {
      return l();
    }, set complementaryProducts(D) {
      l(D), _();
    }, get dealSellingPlan() {
      return i();
    }, set dealSellingPlan(D) {
      i(D), _();
    }, get dealBarQuantity() {
      return u();
    }, set dealBarQuantity(D) {
      u(D), _();
    }, get onChange() {
      return h();
    }, set onChange(D) {
      h(D), _();
    } }, V = Dk(), T = y(V), q = (D) => {
      var ne = $k();
      Ge(y(ne), () => e(b)), x(ne), p(D, ne);
    };
    O(T, (D) => {
      e(b) && D(q);
    });
    var ee = L(T, 2);
    Vt(ee, 21, () => e(z), ({ upsell: D, product: ne }) => D.id, (D, ne) => {
      let B = () => e(ne).upsell;
      ag(D, { get checkboxUpsell() {
        return B();
      }, get product() {
        return e(ne).product;
      }, get dealBlock() {
        return o();
      }, get dealSellingPlan() {
        return i();
      }, get dealBarQuantity() {
        return u();
      }, onChange: (N) => (function(se, S) {
        var Z;
        S ? e(v)[se] = S : delete e(v)[se];
        const M = Object.entries(e(v)).flatMap(([F, G]) => G.variants.map(({ variant: U, quantity: te }) => ({ id: F, variant: U, product: G.product, quantity: te, sellingPlan: G.sellingPlan })));
        let P = 0, R = 0, Q = 0;
        const K = /* @__PURE__ */ new Map();
        for (const F of Object.values(e(v))) {
          P += F.pricing.discountedPrice, R += F.pricing.fullPrice, Q += F.pricing.discountedPriceWithoutSellingPlan;
          for (const G of F.pricing.discountedPricesForSellingPlans) K.set(G.sellingPlanId, ((Z = K.get(G.sellingPlanId)) != null ? Z : 0) + G.discountedPrice);
        }
        const ce = Array.from(K, ([F, G]) => ({ sellingPlanId: F, discountedPrice: G }));
        h()(M, { discountedPrice: P, fullPrice: R, discountedPriceWithoutSellingPlan: Q, discountedPricesForSellingPlans: ce });
      })(B().id, N) });
    }), x(ee), x(V), p(n, V);
    var H = lt(I);
    return a(), H;
  }
  Je(ig, { checkboxUpsells: {}, dealBlock: {}, otherProducts: {}, complementaryProducts: {}, dealSellingPlan: {}, dealBarQuantity: {}, onChange: {} }, [], [], !0);
  var Vk = $('<div class="kaching-bundles__timer" role="timer"><div class="kaching-bundles__timer-title"><!></div></div>');
  function lg(n, t) {
    it(t, !0);
    const [r, a] = vt(), s = k(t, "timer", 7), o = Mt(), c = d(() => ((q) => {
      const { textColor: ee, backgroundColor: H, titleAlignment: D, titleStyle: ne, titleSize: B } = q;
      return pn({ "kaching-bundles-timer-background-color": Ne(H), "kaching-bundles-timer-text-color": Ne(ee), "kaching-bundles-timer-title-alignment": D, "kaching-bundles-timer-title-font-weight": ne ? cr(ne) : null, "kaching-bundles-timer-title-font-style": ne ? ur(ne) : null, "kaching-bundles-timer-title-size": B ? B + "px" : null });
    })(s()));
    function l() {
      const q = new mo(), ee = new mo(q);
      return ee.setHours(24, 0, 0, 0), Math.floor((ee.getTime() - q.getTime()) / 1e3);
    }
    function i() {
      if (!s().endTimestamp) return 0;
      const q = new mo();
      return Math.max(0, Math.floor((s().endTimestamp - q.getTime()) / 1e3));
    }
    function u() {
      return s().type === "midnight" ? l() : s().type === "custom" ? i() : 60 * s().minutes;
    }
    let h = Ve(ct(u())), f = d(() => s().type !== "custom" || e(h) > 0);
    tt(() => {
      ae(h, u(), !0);
    }), tt(() => {
      const q = window.setInterval(() => {
        s().type === "midnight" ? ae(h, l(), !0) : s().type === "custom" ? ae(h, i(), !0) : ae(h, e(h) <= 1 ? u() : e(h) - 1, !0);
      }, 1e3);
      return () => window.clearInterval(q);
    });
    const g = d(() => $e(o, "$translate", r)(s().title)), b = d(() => (function(q) {
      const ee = Math.floor(q / 86400), H = Math.floor(q % 86400 / 3600), D = Math.floor(q % 3600 / 60), ne = q % 60, B = (N) => N.toString().padStart(2, "0");
      return s().type === "custom" && ee > 0 ? `${Intl.NumberFormat(navigator.language, { style: "unit", unit: "day", unitDisplay: "narrow" }).format(ee)} ${B(H)}:${B(D)}:${B(ne)}` : H > 0 ? `${B(H)}:${B(D)}:${B(ne)}` : `${B(D)}:${B(ne)}`;
    })(e(h))), v = d(() => e(g).replace(/\{\{\s*\w+\s*\}\}/g, '<span class="kaching-bundles__timer-value" translate="no"></span>'));
    let w = Ve(void 0);
    tt(() => {
      !e(w) || !e(v) || e(w).querySelectorAll(".kaching-bundles__timer-value").forEach((q) => {
        q.textContent = ` ${e(b)} `;
      });
    });
    var m = { get timer() {
      return s();
    }, set timer(q) {
      s(q), _();
    } }, z = ze(), I = fe(z), V = (q) => {
      var ee = Vk(), H = y(ee);
      Ge(y(H), () => e(v)), x(H), ki(H, (D) => ae(w, D), () => e(w)), x(ee), ve(() => Gt(ee, e(c))), p(q, ee);
    };
    O(I, (q) => {
      e(f) && q(V);
    }), p(n, z);
    var T = lt(m);
    return a(), T;
  }
  function sg(n, t) {
    it(t, !0);
    const r = k(t, "dealBlockId", 7), a = k(t, "shopCustomStyles", 7), s = k(t, "customStyles", 7), o = d(() => {
      const h = [a(), s()].filter((f) => f == null ? void 0 : f.trim()).join(`
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
      r(h), _();
    }, get shopCustomStyles() {
      return a();
    }, set shopCustomStyles(h) {
      a(h), _();
    }, get customStyles() {
      return s();
    }, set customStyles(h) {
      s(h), _();
    } }, l = ze(), i = fe(l), u = (h) => {
      var f = ze();
      Ge(fe(f), () => e(o)), p(h, f);
    };
    return O(i, (h) => {
      e(o) && h(u);
    }), p(n, l), lt(c);
  }
  Je(lg, { timer: {} }, [], [], !0), Je(sg, { dealBlockId: {}, shopCustomStyles: {}, customStyles: {} }, [], [], !0);
  function Ak(n, t = 4) {
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
  function og(n) {
    var t, r, a, s, o, c;
    const { dealBlock: l, product: i, pageProductId: u = i.id, selectedDealBarId: h, selectedVariantQuantities: f, selectedBundleProducts: g, selectedCollectionBreaksProducts: b, selectedFreeGifts: v, selectedProgressiveGifts: w, selectedCheckboxUpsells: m, selectedUpsells: z, selectedPersonalisations: I, selectedSellingPlan: V, dealBarSellingPlan: T, nativeBundleProductIds: q } = n, ee = (function(A) {
      var re;
      const { product: ue, selectedVariantQuantities: _e, selectedBundleProducts: ge, selectedCollectionBreaksProducts: ke, selectedFreeGifts: pe, selectedProgressiveGifts: Ce, selectedCheckboxUpsells: oe, selectedUpsells: xe, selectedSellingPlan: Fe, dealBarSellingPlan: Ae, selectedDealBarId: Oe, dealBlock: Te, bundleNonce: Y } = A, ye = ge.length > 0 || ke.length > 0 || pe.length > 0 || Ce.length > 0 || xe.length > 0, Me = pe.length > 0 || Ce.length > 0 || xe.length > 0, he = ((re = Te.dealBars.find((we) => we.id === Oe)) == null ? void 0 : re.dealBarType) === "mix-and-match", Pe = Me || he, De = JSON.stringify([ye ? _e.map(({ variant: we, quantity: me }) => ({ variantId: we.id, quantity: me })) : ue.id, ge.map(({ id: we, variant: me, quantity: qe }) => ({ id: we, variantId: me.id, quantity: qe })), ke.map(({ variant: we, quantity: me }) => ({ variantId: we.id, quantity: me })), pe.map(({ id: we, variant: me, quantity: qe }) => ({ id: we, variantId: me.id, quantity: qe })), Ce.map(({ id: we, variants: me }) => me.map((qe) => ({ id: we, variantId: qe.variant.id, quantity: qe.quantity })).flat()).flat(), oe.map(({ id: we, variant: me }) => ({ id: we, variantId: me.id })), xe.map(({ id: we, variant: me, quantity: qe }) => ({ id: we, variantId: me.id, quantity: qe })), Fe == null ? void 0 : Fe.id, Ae == null ? void 0 : Ae.id, Oe, ...Pe ? [Y] : []]);
      return Ak(De);
    })(n), H = l.dealBars.find((A) => A.id === h);
    let D = !1;
    H && (!H.dealBarType || H.dealBarType === gt.QuantityBreak || H.dealBarType === gt.Bxgy) && l.dealBars.filter((A) => !A.dealBarType || A.dealBarType === gt.QuantityBreak || A.dealBarType === gt.Bxgy).filter((A) => ug(A) === ug(H) && A.id !== h).length > 0 && (D = !0);
    const ne = T != null ? T : V, B = (H == null ? void 0 : H.dealBarType) === gt.Bxgy, N = f.some(({ variant: A }) => A.sellingPlans.length > 0), se = B && (N || n.splitBxgy), S = l.dealBars.some((A) => (A.freeGifts || []).filter((re) => re.productGID).length > 0), Z = !(!l.progressiveGiftsEnabled || !l.progressiveGifts) && l.progressiveGifts.gifts.some((A) => A.giftType === "product"), M = l.dealBars.some((A) => (A.upsells || []).length > 0), P = l.nanoId || l.id, R = l.abTestVariantNumber ? lo(l.abTestVariantNumber) : void 0, Q = (H == null ? void 0 : H.dealBarType) === gt.Sku || (H == null ? void 0 : H.dealBarType) === gt.Bundle || (H == null ? void 0 : H.dealBarType) === gt.MixAndMatch || D || se, K = { deal: P, pp: u, main: !0 };
    l.marketId && (K.market = l.marketId), l.versionId && (K.v = l.versionId), Q ? (K.id = ee, K.bar = h) : (B || v.length > 0 || w.length > 0 || m.length > 0 || z.length > 0 || b.length > 0 || I.length > 0 || S || Z || M) && (K.id = ee), !K.bar && h && (K.bid = h), R && (K.ab = R);
    const ce = !h && K.id === void 0, F = { id: ee, deal: P, bar: h };
    l.versionId && (F.v = l.versionId), R && (F.ab = R);
    const G = (H == null ? void 0 : H.dealBarType) === gt.MixAndMatch ? H.bundleProducts.length : void 0, U = [];
    let te = f, E = [];
    if (se && b.length === 0) {
      const { buy: A, get: re } = gg(f, H.getQuantity);
      te = A, E = re;
    }
    for (const { variant: A, quantity: re } of te) {
      const ue = { ...K };
      G && (ue.mixAndMatchItems = G);
      const _e = tr(i, A, ne);
      _e != null && _e.priceAdjustment && H && dg(H) && (ue.sellingPlan = { id: _e.id, priceAdjustment: _e.priceAdjustment });
      const ge = { id: A.id, quantity: re, properties: ce ? {} : { __kaching_bundles: JSON.stringify(ue) } };
      _e && (ge.selling_plan = _e.id), U.push(ge);
    }
    const ie = !n.disableNestedCartLines && te.length > 0 && !cg(i, q) && (H == null ? void 0 : H.dealBarType) !== gt.MixAndMatch ? te[0].variant.id : void 0;
    for (const { variant: A, quantity: re } of E) {
      const ue = { ...F, main: !0, bxgy: !0 }, _e = tr(i, A, ne);
      _e != null && _e.priceAdjustment && (H == null ? void 0 : H.dealBarType) === gt.Bxgy && H.getDiscountType === "specific" && (ue.sellingPlan = { id: _e.id, priceAdjustment: _e.priceAdjustment });
      const ge = { id: A.id, quantity: re, properties: { __kaching_bundles: JSON.stringify(ue) } };
      $i(ge, ie, i, q), _e && (ge.selling_plan = _e.id), U.push(ge);
    }
    for (const A of g) {
      const re = { ...F, bundleProduct: A.id };
      G && (re.mixAndMatchItems = G);
      const ue = tr(A.product, A.variant, ne);
      ue != null && ue.priceAdjustment && (H == null ? void 0 : H.dealBarType) === gt.Bundle && ((t = H == null ? void 0 : H.bundleProducts.find((ge) => ge.id === A.id)) == null ? void 0 : t.discountType) === "specific" && (re.sellingPlan = { id: ue.id, priceAdjustment: ue.priceAdjustment });
      const _e = { id: A.variant.id, quantity: A.quantity, properties: { __kaching_bundles: JSON.stringify(re) } };
      $i(_e, ie, A.product, q), ue && (_e.selling_plan = ue.id), U.push(_e);
    }
    let J = b, C = [];
    if (se && b.length > 0) {
      const { buy: A, get: re } = gg(b, H.getQuantity);
      J = A, C = re;
    }
    const j = ((r = l.collectionBreaks) == null ? void 0 : r.visibility) === "deal-products";
    for (const A of J) {
      if (j) {
        const ge = U.find((ke) => ke.id === A.variant.id);
        if (ge) {
          ge.quantity += A.quantity;
          continue;
        }
      }
      const re = { ...F, collectionBreaksProduct: !0 };
      Q || delete re.bar;
      const ue = tr(A.product, A.variant, ne);
      ue != null && ue.priceAdjustment && H && dg(H) && (re.sellingPlan = { id: ue.id, priceAdjustment: ue.priceAdjustment });
      const _e = { id: A.variant.id, quantity: A.quantity, properties: { __kaching_bundles: JSON.stringify(re) } };
      ue && (_e.selling_plan = ue.id), U.push(_e);
    }
    for (const A of C) {
      const re = { ...F, collectionBreaksProduct: !0 };
      Q || delete re.bar, re.bxgy = !0;
      const ue = tr(A.product, A.variant, ne);
      ue != null && ue.priceAdjustment && (H == null ? void 0 : H.dealBarType) === gt.Bxgy && H.getDiscountType === "specific" && (re.sellingPlan = { id: ue.id, priceAdjustment: ue.priceAdjustment });
      const _e = { id: A.variant.id, quantity: A.quantity, properties: { __kaching_bundles: JSON.stringify(re) } };
      ue && (_e.selling_plan = ue.id), U.push(_e);
    }
    for (const A of v) {
      if (A.applyOnlyForSubscriptions && !ne) continue;
      const re = { ...F, gift: A.id };
      delete re.bar;
      const ue = { id: A.variant.id, quantity: A.quantity, properties: { __kaching_bundles: JSON.stringify(re) } };
      $i(ue, ie, A.product, q);
      const _e = tr(A.product, A.variant, ne);
      _e && (ue.selling_plan = _e.id), U.push(ue);
    }
    for (const A of w) {
      const re = { ...F, gift: A.id };
      delete re.bar;
      for (const ue of A.variants) {
        const _e = { id: ue.variant.id, quantity: ue.quantity, properties: { __kaching_bundles: JSON.stringify(re) } };
        $i(_e, ie, A.product, q);
        const ge = tr(A.product, ue.variant, ne);
        ge && (_e.selling_plan = ge.id), U.push(_e);
      }
    }
    for (const A of m) {
      const re = { ...F, checkboxUpsell: A.id };
      delete re.bar;
      const ue = A.sellingPlan, _e = (a = l.checkboxUpsells) == null ? void 0 : a.upsells.find((ke) => ke.id === A.id);
      ue != null && ue.priceAdjustment && (_e == null ? void 0 : _e.discountType) === "specific" && (re.sellingPlan = { id: ue.id, priceAdjustment: ue.priceAdjustment });
      const ge = { id: A.variant.id, quantity: A.quantity, properties: { __kaching_bundles: JSON.stringify(re) } };
      $i(ge, ie, A.product, q), ue && (ge.selling_plan = ue.id), U.push(ge);
    }
    for (const A of z) {
      const re = { ...F, upsell: A.id };
      delete re.bar;
      const ue = A.sellingPlan;
      ue != null && ue.priceAdjustment && ((o = (s = H == null ? void 0 : H.upsells) == null ? void 0 : s.find((ge) => ge.id === A.id)) == null ? void 0 : o.discountType) === "specific" && (re.sellingPlan = { id: ue.id, priceAdjustment: ue.priceAdjustment });
      const _e = { id: A.variant.id, quantity: A.quantity, properties: { __kaching_bundles: JSON.stringify(re) } };
      $i(_e, ie, A.product, q), ue && (_e.selling_plan = ue.id), U.push(_e);
    }
    const W = [];
    for (const { variant: A, quantity: re } of te) for (let ue = 0; ue < re; ue++) W.push(A.id);
    for (const A of I) {
      const re = { ...F, personalisation: A.id };
      delete re.bar;
      const ue = { id: A.variantId, quantity: 1, properties: { __kaching_bundles: JSON.stringify(re), [A.valueLabel]: A.text } }, _e = (c = A.parentVariantId) != null ? c : W[A.productIndex];
      _e && !n.disableNestedCartLines && (ue.parent_id = _e), U.push(ue);
    }
    const X = U.filter((A) => !A.parent_id), le = U.filter((A) => A.parent_id);
    return [...X.reverse(), ...le];
  }
  function cg(n, t) {
    return t.includes(n.id) || n.isNativeBundle === !0;
  }
  function $i(n, t, r, a) {
    t && t !== n.id && (cg(r, a) || (n.parent_id = t));
  }
  function ug(n) {
    switch (n.dealBarType) {
      case void 0:
      case gt.QuantityBreak:
        return Number(n.quantity);
      case gt.Bxgy:
        return Number(n.buyQuantity) + Number(n.getQuantity);
      case gt.Bundle:
        return n.bundleProducts[0].quantity;
      case gt.MixAndMatch:
      case gt.Sku:
        return 1;
    }
  }
  function dg(n) {
    switch (n.dealBarType) {
      case void 0:
      case gt.QuantityBreak:
        return n.discountType === "specific";
      case gt.Bundle:
        return n.bundleProducts[0].discountType === "specific";
      case gt.Bxgy:
        return n.buyDiscountType === "specific";
      case gt.MixAndMatch:
        return n.discountType === "specific";
      case gt.Sku:
        return !1;
    }
  }
  function gg(n, t) {
    const r = [...n].sort((c, l) => c.variant.price - l.variant.price), a = [], s = [];
    let o = t;
    for (const c of r) {
      const l = Math.min(o, c.quantity), i = c.quantity - l;
      l > 0 && s.push({ ...c, quantity: l }), i > 0 && a.push({ ...c, quantity: i }), o -= l;
    }
    return { buy: a, get: s };
  }
  function Tk(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  var qk = $('<img class="kaching-bundles__bar-image" alt=""/>'), Gk = $('<div class="kaching-bundles__bar-radio"></div>'), Ok = $('<span class="kaching-bundles__bar-title"><!></span>'), Fk = $('<span class="kaching-bundles__bar-label"><!></span>'), Lk = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), jk = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Ek = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <div class="kaching-bundles__bar-second-line"><!> <!></div></div> <div class="kaching-bundles__bar-pricing"><!> <!></div></div>', 1), Rk = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), Nk = $('<div class="kaching-bundles__bar-variants"><!> <div class="kaching-bundles__bar-variant-selector-wrapper"><!> <!></div></div>'), Qk = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), Wk = $('<div><input type="radio"/> <!> <!></div>');
  function hg(n, t) {
    it(t, !0);
    const r = () => $e(q, "$formatPrice", s), a = () => $e(T, "$translate", s), [s, o] = vt();
    let c = k(t, "dealBlock", 7), l = k(t, "dealBar", 7), i = k(t, "otherProducts", 23, () => []), u = k(t, "complementaryProducts", 23, () => []), h = k(t, "selectedDealBarIndex", 7, null), f = k(t, "componentId", 7), g = k(t, "selected", 7, !1), b = k(t, "globalSellingPlan", 7, void 0), v = k(t, "onProgressiveGiftsChange", 7), w = k(t, "onDealBarSelect", 7), m = k(t, "onDealBarDeselect", 7), z = k(t, "onVariantsChange", 7), I = k(t, "onPersonalisationsChange", 7), V = k(t, "personalisationInitialValues", 23, () => []);
    const T = Mt(), q = gn(), ee = En();
    let H = Ve(ct([])), D = Ve(ct([])), ne = Ve(ct([])), B = !1;
    const N = d(() => l().productGID ? i().find((Y) => Y.id === Nt(l().productGID)) : void 0);
    let se = Ve(void 0);
    const S = d(() => (function(Y, ye, Me) {
      if (Y !== void 0 && Me && Me.variants.some((he) => he.id === Y))
        return Y;
      if (ye.variantGID) return Nt(ye.variantGID);
      if (Me && Me.variants.length > 0) return Me.variants[0].id;
    })(e(se), l(), e(N))), Z = d(() => e(S) && e(N) ? e(N).variants.find((Y) => Y.id === e(S)) : void 0), M = d(() => e(Z) ? [{ variant: e(Z), quantity: 1 }] : []);
    let P = Ve(void 0);
    const R = d(() => e(N) && e(Z) ? sl(e(N), [e(Z)]) : []), Q = d(() => {
      var Y, ye;
      return (l().sellingPlanEnabled || c().subscriptionsEnabled && ((Y = c().subscriptions) == null ? void 0 : Y.layout) === "link" && ((ye = c().subscriptions) == null ? void 0 : ye.subscribeByDefault)) && (!c().subscriptionsEnabled || !!b());
    }), K = d(() => e(Q) ? uo(l(), e(R), e(P)) : void 0), ce = d(() => {
      var Y;
      return (Y = e(K)) != null ? Y : e(N) && e(Z) ? tr(e(N), e(Z), b()) : void 0;
    }), F = d(() => e(Z) ? ll(e(Z), e(ce)) : 0), G = d(() => e(Z) ? (function(Y, ye) {
      return Y.useProductCompareAtPrice && ye.compareAtPrice ? Math.max(ye.price, ye.compareAtPrice) : ye.price;
    })(c(), e(Z)) : 0), U = d(() => ul(e(G), e(H), e(D))), te = d(() => e(U) > e(F)), E = d(() => hn({ priceFormatter: r(), product: e(N), dealBar: l(), totalFullPrice: e(G), totalCompareAtPrice: e(U), totalDiscountedPrice: e(F), quantity: 1, unitQuantity: xr(e(M)), sellingPlan: e(ce) })), ie = d(() => e(E)(a()(l().title))), J = d(() => e(E)(a()(l().subtitle))), C = d(() => e(E)(a()(l().label))), j = d(() => ol(c(), l()).map((Y) => wa(Y, a(), e(E)))), W = d(() => Pa(e(j))), X = d(() => `${l().id}_${f()}`), le = d(() => $e(ee, "$getMediaImageUrl", s)(l().mediaImageGID) || dl), A = vn(), re = d(() => e(N) && e(N).variants.length > 1 && !l().variantGID && g()), ue = d(() => e(N) && $e(A, "$config", s).featureFlags.variant_images && new Set(e(N).variants.map((Y) => Y.image).filter((Y) => Y)).size > 1), _e = d(() => l().showAsSoldOutEnabled && l().showAsSoldOut ? hl(l().showAsSoldOut) : "");
    function ge(Y) {
      g() && (Y.preventDefault(), Y.stopPropagation(), m()());
    }
    function ke(Y) {
      ae(se, Y, !0);
    }
    tt(() => {
      !g() || !e(Z) && e(N) || (e(H), e(ne), e(D), e(S), e(ce), Jt(() => {
        B || (B = !0, w()({ dealBarId: l().id, preselected: !0 })), (function() {
          const Y = e(F) + e(ne).reduce((we, me) => we + me.discountedPrice, 0), ye = e(H).reduce((we, me) => me.showPrice ? we + me.fullPrice : we, 0) + e(D).reduce((we, me) => we + me.fullPrice * me.quantity, 0), Me = e(G) + e(ne).reduce((we, me) => we + me.fullPrice, 0) + ye, he = e(Z) ? e(Z).price : 0, Pe = e(Z) ? e(Z).sellingPlans.map((we) => ({ sellingPlanId: we.id, discountedPrice: we.price })) : [], De = { discountedPrice: Y, fullPrice: Me, giftValue: ye, discountedPricePerItem: e(F), fullPricePerItem: e(G), discountedPriceWithoutSellingPlan: he, discountedPricesForSellingPlans: Pe };
          z()({ variants: e(M), freeGifts: [...e(H), ...e(D)], upsells: e(ne), dealBarSellingPlan: e(K), pricing: De, product: e(N) });
        })();
      }));
    });
    var pe = { get dealBlock() {
      return c();
    }, set dealBlock(Y) {
      c(Y), _();
    }, get dealBar() {
      return l();
    }, set dealBar(Y) {
      l(Y), _();
    }, get otherProducts() {
      return i();
    }, set otherProducts(Y = []) {
      i(Y), _();
    }, get complementaryProducts() {
      return u();
    }, set complementaryProducts(Y = []) {
      u(Y), _();
    }, get selectedDealBarIndex() {
      return h();
    }, set selectedDealBarIndex(Y = null) {
      h(Y), _();
    }, get componentId() {
      return f();
    }, set componentId(Y) {
      f(Y), _();
    }, get selected() {
      return g();
    }, set selected(Y = !1) {
      g(Y), _();
    }, get globalSellingPlan() {
      return b();
    }, set globalSellingPlan(Y = void 0) {
      b(Y), _();
    }, get onProgressiveGiftsChange() {
      return v();
    }, set onProgressiveGiftsChange(Y) {
      v(Y), _();
    }, get onDealBarSelect() {
      return w();
    }, set onDealBarSelect(Y) {
      w(Y), _();
    }, get onDealBarDeselect() {
      return m();
    }, set onDealBarDeselect(Y) {
      m(Y), _();
    }, get onVariantsChange() {
      return z();
    }, set onVariantsChange(Y) {
      z(Y), _();
    }, get onPersonalisationsChange() {
      return I();
    }, set onPersonalisationsChange(Y) {
      I(Y), _();
    }, get personalisationInitialValues() {
      return V();
    }, set personalisationInitialValues(Y = []) {
      V(Y), _();
    } }, Ce = Wk();
    let oe;
    var xe = y(Ce);
    aa(xe), xe.__change = [Tk, w, l];
    var Fe = L(xe, 2);
    Ja(Fe, { get for() {
      return e(X);
    }, get soldOut() {
      return l().showAsSoldOutEnabled;
    }, get borderHost() {
      return e(W);
    }, children: (Y, ye) => {
      var Me = Qk(), he = fe(Me);
      Vt(he, 17, () => e(j), (Se) => Se.id, (Se, be) => {
        oa(Se, { get badge() {
          return e(be);
        }, get blockLayout() {
          return c().blockLayout;
        } });
      });
      var Pe = L(he, 2), De = y(Pe);
      Wt(De, { element: "div", class: "kaching-bundles__bar-main", onclick: ge, children: (Se, be) => {
        var Ze = Ek(), Ke = fe(Ze), He = (je) => {
          var Xe = qk();
          ve(() => Ie(Xe, "src", e(le))), p(je, Xe);
        }, We = (je) => {
          p(je, Gk());
        };
        O(Ke, (je) => {
          l().mediaImageGID ? je(He) : je(We, !1);
        });
        var Re = L(Ke, 2), pt = y(Re), nt = y(pt), ut = y(nt);
        st(ut, () => e(ie), (je) => {
          var Xe = Ok();
          Ge(y(Xe), () => e(ie)), x(Xe), p(je, Xe);
        });
        var et = L(ut, 2), ot = (je) => {
          var Xe = ze();
          st(fe(Xe), () => e(C), (kt) => {
            var yt = Fk();
            Ge(y(yt), () => e(C)), x(yt), p(kt, yt);
          }), p(je, Xe);
        };
        O(et, (je) => {
          e(C) && je(ot);
        }), x(nt);
        var wt = L(nt, 2), ht = y(wt), Ht = (je) => {
          var Xe = ze();
          st(fe(Xe), () => e(J), (kt) => {
            var yt = Lk();
            Ge(y(yt), () => e(J)), x(yt), p(kt, yt);
          }), p(je, Xe);
        };
        O(ht, (je) => {
          e(J) && je(Ht);
        });
        var Tn = L(ht, 2), _n = (je) => {
          ca(je, { get dealBlock() {
            return c();
          }, get variant() {
            return e(Z);
          } });
        };
        O(Tn, (je) => {
          e(re) || je(_n);
        }), x(wt), x(pt);
        var en = L(pt, 2), Kt = y(en);
        st(Kt, () => e(F), (je) => {
          Nr(je, { get amount() {
            return e(F);
          }, get showPricesPerItem() {
            return c().showPricesPerItem;
          }, get unitLabel() {
            return c().unitLabel;
          } });
        });
        var tn = L(Kt, 2), _t = (je) => {
          var Xe = ze();
          st(fe(Xe), () => e(U), (kt) => {
            var yt = jk();
            Ge(y(yt), () => r()(e(U))), x(yt), ve((Zt) => Ie(yt, "data-a11y-label", Zt), [() => a()("system.original_price")]), p(kt, yt);
          }), p(je, Xe);
        };
        O(tn, (je) => {
          e(te) && je(_t);
        }), x(en), x(Re), p(Se, Ze);
      }, $$slots: { default: !0 } });
      var we = L(De, 2), me = (Se) => {
        Ba(Se, { get highlights() {
          return l().highlights;
        }, get isSelected() {
          return g();
        }, get replaceLiquid() {
          return e(E);
        } });
      };
      O(we, (Se) => {
        l().highlights && Se(me);
      });
      var qe = L(we, 2), Ue = (Se) => {
        var be = Rk(), Ze = y(be);
        {
          let Ke = d(() => e(K) || e(R)[0]);
          Sa(Ze, { get sellingPlans() {
            return e(R);
          }, get selectedSellingPlan() {
            return e(Ke);
          }, onChange: (He) => {
            ae(P, He, !0);
          } });
        }
        x(be), p(Se, be);
      };
      O(qe, (Se) => {
        g() && e(Q) && !l().sellingPlanGid && e(R).length > 1 && Se(Ue);
      });
      var Ye = L(qe, 2), at = (Se) => {
        var be = Nk(), Ze = y(be);
        la(Ze, { get product() {
          return e(N);
        } });
        var Ke = L(Ze, 2), He = y(Ke);
        {
          let We = d(() => e(S) || 0);
          Jn(He, { get product() {
            return e(N);
          }, get selectedVariantId() {
            return e(We);
          }, get showImage() {
            return e(ue);
          }, onChange: ke });
        }
        ca(L(He, 2), { get dealBlock() {
          return c();
        }, get variant() {
          return e(Z);
        } }), x(Ke), x(be), p(Se, be);
      };
      O(Ye, (Se) => {
        e(re) && e(N) && Se(at);
      });
      var rt = L(Ye, 2), Bt = (Se) => {
        {
          let be = d(() => [e(S)]);
          Ya(Se, { get productPersonalisation() {
            return l().productPersonalisation;
          }, get product() {
            return e(N);
          }, get selectedVariantIds() {
            return e(be);
          }, quantity: 1, get addPersonalisationModal() {
            return c().addPersonalisationModal;
          }, get onPersonalisationsChange() {
            return I();
          }, get initialValues() {
            return V();
          } });
        }
      };
      O(rt, (Se) => {
        g() && l().productPersonalisation && e(N) && e(S) && (c().blockLayout === "vertical" || c().blockLayout === "plain") && Se(Bt);
      }), x(Pe);
      var Dt = L(Pe, 2);
      {
        let Se = d(() => l().upsells || []);
        Ci(Dt, { get dealBlock() {
          return c();
        }, get dealBarId() {
          return l().id;
        }, get upsells() {
          return e(Se);
        }, get otherProducts() {
          return i();
        }, get complementaryProducts() {
          return u();
        }, get dealBarSelected() {
          return g();
        }, get dealSellingPlan() {
          return e(ce);
        }, onChange: (be) => {
          ae(ne, be, !0);
        } });
      }
      var dt = L(Dt, 2);
      zi(dt, { get selectedDealBarIndex() {
        return h();
      }, get onChange() {
        return v();
      }, get dealBlock() {
        return c();
      }, get dealBar() {
        return l();
      }, get selected() {
        return g();
      }, get otherProducts() {
        return i();
      }, get sellingPlan() {
        return e(ce);
      }, get progressiveGifts() {
        return c().progressiveGifts;
      } });
      var At = L(dt, 2);
      {
        let Se = d(() => l().freeGifts || []);
        Bi(At, { get dealBlock() {
          return c();
        }, get freeGifts() {
          return e(Se);
        }, get freeGiftsSummary() {
          return l().freeGiftsSummary;
        }, get otherProducts() {
          return i();
        }, get dealBarSelected() {
          return g();
        }, get sellingPlan() {
          return e(ce);
        }, onChange: (be) => {
          ae(H, be, !0);
        } });
      }
      var Yt = L(At, 2);
      {
        let Se = d(() => l().multipleGiftsSelectors || []);
        Mi(Yt, { get dealBlock() {
          return c();
        }, get multipleGiftsSelectors() {
          return e(Se);
        }, get sellingPlan() {
          return e(ce);
        }, get otherProducts() {
          return i();
        }, onChange: (be) => {
          ae(D, be, !0);
        } });
      }
      p(Y, Me);
    }, $$slots: { default: !0 } });
    var Ae = L(Fe, 2), Oe = (Y) => {
      Ii(Y, { get showAsSoldOut() {
        return l().showAsSoldOut;
      }, get replaceLiquid() {
        return e(E);
      } });
    };
    O(Ae, (Y) => {
      l().showAsSoldOutEnabled && l().showAsSoldOut && Y(Oe);
    }), x(Ce), ve((Y) => {
      var ye;
      oe = Et(Ce, 1, "kaching-bundles__bar", null, oe, Y), Ie(Ce, "data-deal-bar-id", l().id), Gt(Ce, e(_e)), Ie(xe, "name", `kaching-bundles-deal-${(ye = f()) != null ? ye : ""}`), Na(xe, l().id), Ie(xe, "id", e(X)), tl(xe, g()), xe.disabled = l().showAsSoldOutEnabled;
    }, [() => ({ "kaching-bundles__bar--selected": g() })]), p(n, Ce);
    var Te = lt(pe);
    return o(), Te;
  }
  jn(["change"]), Je(hg, { dealBlock: {}, dealBar: {}, otherProducts: {}, complementaryProducts: {}, selectedDealBarIndex: {}, componentId: {}, selected: {}, globalSellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var Uk = $('<div class="kaching-bundles__collection-breaks-alert"><svg class="kaching-bundles__collection-breaks-alert__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 5.33325V7.99992M8.00065 10.6666H8.00732M14.6673 7.99992C14.6673 11.6818 11.6825 14.6666 8.00065 14.6666C4.31875 14.6666 1.33398 11.6818 1.33398 7.99992C1.33398 4.31802 4.31875 1.33325 8.00065 1.33325C11.6825 1.33325 14.6673 4.31802 14.6673 7.99992Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div>');
  function pg(n, t) {
    it(t, !0);
    const r = () => $e(i, "$config", a), [a, s] = vt();
    let o = k(t, "collectionBreaks", 7), c = k(t, "hasItemsToSelect", 7);
    const l = Mt(), i = vn(), u = d(() => {
      var z;
      return (z = o()) == null ? void 0 : z.requireItemSelectionAlert;
    }), h = d(() => r().preview && r().previewAlerts || $e(zo, "$requireSelectionError", a)), f = d(() => {
      var z;
      return e(h) && ((z = o()) == null ? void 0 : z.requireItemSelectionEnabled) && e(u) && c();
    });
    var g = { get collectionBreaks() {
      return o();
    }, set collectionBreaks(z) {
      o(z), _();
    }, get hasItemsToSelect() {
      return c();
    }, set hasItemsToSelect(z) {
      c(z), _();
    } }, b = ze(), v = fe(b), w = (z) => {
      var I = Uk(), V = L(y(I));
      x(I), ve((T) => ft(V, ` ${T != null ? T : ""}`), [() => $e(l, "$translate", a)(e(u).text)]), p(z, I);
    };
    O(v, (z) => {
      e(f) && e(u) && z(w);
    }), p(n, b);
    var m = lt(g);
    return s(), m;
  }
  Je(pg, { collectionBreaks: {}, hasItemsToSelect: {} }, [], [], !0);
  var Hk = $('<span class="kaching-bundles-savings-summary__icon"><img alt=""/></span>'), Zk = $('<span class="kaching-bundles-savings-summary__icon"><!></span>'), Jk = $('<div class="kaching-bundles-savings-summary"><!> <span class="kaching-bundles-savings-summary__title"><!></span></div>');
  function bg(n, t) {
    it(t, !0);
    const [r, a] = vt(), s = k(t, "savingsSummary", 7), o = k(t, "totalFullPrice", 7), c = k(t, "totalDiscountedPrice", 7), l = k(t, "quantity", 7), i = k(t, "product", 7), u = gn(), h = Mt(), f = En(), g = d(() => ((B) => pn({ "kaching-bundles-savings-summary-background-color": Ne(B.backgroundColor), "kaching-bundles-savings-summary-text-color": Ne(B.textColor), "kaching-bundles-savings-summary-value-color": Ne(B.valueColor), "kaching-bundles-savings-summary-icon-color": Ne(B.iconColor), "kaching-bundles-savings-summary-border-color": Ne(B.borderColor), "kaching-bundles-savings-summary-alignment": { start: "flex-start", center: "center", end: "flex-end" }[B.titleAlignment], "kaching-bundles-savings-summary-border-width": B.borderWidth + "px", "kaching-bundles-savings-summary-border-radius": B.borderRadius + "px", "kaching-bundles-savings-summary-title-font-size": B.titleFont.size + "px", "kaching-bundles-savings-summary-title-font-style": ur(B.titleFont.style), "kaching-bundles-savings-summary-title-font-weight": cr(B.titleFont.style) }))(s())), b = d(() => s().iconType), v = d(() => qd[e(b)]), w = d(() => e(b) === "custom" ? $e(f, "$getMediaImageUrl", r)(s().customIconGID) : void 0), m = d(() => hn({ priceFormatter: $e(u, "$formatPrice", r), product: i(), totalFullPrice: o(), totalDiscountedPrice: c(), quantity: l(), unitQuantity: null })), z = d(() => ((B) => B.replace(Ju, '<span class="kaching-bundles-savings-summary__value">$&</span>'))($e(h, "$translate", r)(s().title))), I = d(() => e(m)(e(z)));
    var V = { get savingsSummary() {
      return s();
    }, set savingsSummary(B) {
      s(B), _();
    }, get totalFullPrice() {
      return o();
    }, set totalFullPrice(B) {
      o(B), _();
    }, get totalDiscountedPrice() {
      return c();
    }, set totalDiscountedPrice(B) {
      c(B), _();
    }, get quantity() {
      return l();
    }, set quantity(B) {
      l(B), _();
    }, get product() {
      return i();
    }, set product(B) {
      i(B), _();
    } }, T = Jk(), q = y(T), ee = (B) => {
      var N = Hk(), se = y(N);
      x(N), ve(() => Ie(se, "src", e(w))), p(B, N);
    }, H = (B) => {
      var N = ze(), se = fe(N), S = (Z) => {
        var M = Zk();
        Jc(y(M), () => e(v), (P, R) => {
          R(P, {});
        }), x(M), p(Z, M);
      };
      O(se, (Z) => {
        e(v) && Z(S);
      }, !0), p(B, N);
    };
    O(q, (B) => {
      e(b) === "custom" && e(w) ? B(ee) : B(H, !1);
    });
    var D = L(q, 2);
    Ge(y(D), () => e(I)), x(D), x(T), ve(() => Gt(T, e(g))), p(n, T);
    var ne = lt(V);
    return a(), ne;
  }
  Je(bg, { savingsSummary: {}, totalFullPrice: {}, totalDiscountedPrice: {}, quantity: {}, product: {} }, [], [], !0);
  var Yk = $('<div class="kaching-bundles__block-title"><!></div>'), Kk = $("<!> <!>", 1), Xk = $('<div class="kaching-bundles__out-of-stock"><!></div>'), em = $('<div class="kaching-bundles"><div><!> <!> <div><!> <!> <!> <!></div> <!> <!> <!> <!> <!> <!> <!></div></div> <!>', 1);
  function fg(n, t) {
    var r, a, s, o, c, l;
    it(t, !0);
    const i = () => $e(K, "$formatPrice", h), u = () => $e(F, "$translate", h), [h, f] = vt();
    let g = k(t, "component", 7), b = k(t, "config", 7), v = k(t, "translations", 23, () => ({})), w = k(t, "dealBlock", 7), m = k(t, "product", 7), z = k(t, "currentVariantId", 7), I = k(t, "currentVariantSource", 7, void 0), V = k(t, "sellingPlanId", 15), T = k(t, "selectedDealBarId", 15), q = k(t, "quantity", 15), ee = k(t, "mediaImages", 23, () => []), H = k(t, "otherProducts", 23, () => []), D = k(t, "collectionBreaksProducts", 23, () => []), ne = k(t, "complementaryProducts", 23, () => []), B = k(t, "nativeBundleProductIds", 23, () => []), N = k(t, "compact", 7, !1), se = k(t, "variantBadges", 23, () => []);
    const S = d(() => sr(w(), b().brandColors)), Z = d(() => e(S).hideUnavailableOptions ? mr(m()) : m()), M = d(() => e(S).hideUnavailableOptions ? H().map(mr) : H()), P = d(() => e(S).hideUnavailableOptions ? ne().map(mr) : ne()), R = d(() => e(S).hideUnavailableOptions ? D().map(mr) : D()), { setConfig: Q } = Za(b()), { formatPrice: K, setMoneyFormat: ce } = Pi(b().moneyFormat, (r = e(S)) == null ? void 0 : r.showPricesWithoutDecimals), { translate: F, setTranslations: G } = Ha(v()), { setMediaImages: U } = il(ee()), { setVariantBadges: te } = xd(se()), { setSwatchSettings: E } = nl({ swatchOptions: ((a = e(S)) == null ? void 0 : a.swatchOptions) || [], swatchSize: (s = e(S)) == null ? void 0 : s.swatchSize, swatchShape: (o = e(S)) == null ? void 0 : o.swatchShape, showSelectedSwatchName: (l = (c = e(S)) == null ? void 0 : c.showSelectedSwatchName) != null && l });
    let ie = Ve(ct(Math.random()));
    function J() {
      return { dealBlock: e(S), product: e(ut), pageProductId: m().id, selectedDealBarId: T(), selectedVariantQuantities: e(X), selectedBundleProducts: e(le), selectedCollectionBreaksProducts: e(A), selectedFreeGifts: e(re), selectedProgressiveGifts: e(ue), selectedCheckboxUpsells: e(_e), selectedUpsells: e(ge), selectedPersonalisations: e(pe), selectedSellingPlan: e(ot), dealBarSellingPlan: e(oe), nativeBundleProductIds: B(), bundleNonce: e(ie), splitBxgy: b().featureFlags.split_bxgy_items, disableNestedCartLines: b().featureFlags.disable_nested_cart_lines };
    }
    function C() {
      return og(J());
    }
    Ra(() => {
      kr(g(), "kaching-bundles-block-loaded", { component: g() }, !1);
    }), tt(() => {
      Q(b());
    }), tt(() => {
      ce(b().moneyFormat, !!e(S).showPricesWithoutDecimals);
    }), tt(() => {
      G(v());
    }), tt(() => {
      U(ee());
    }), tt(() => {
      te(se());
    }), tt(() => {
      var de;
      E({ swatchOptions: e(S).swatchOptions || [], swatchSize: e(S).swatchSize, swatchShape: e(S).swatchShape, showSelectedSwatchName: (de = e(S).showSelectedSwatchName) != null && de });
    });
    let j = 0;
    tt(() => {
      j === 0 && B().length > 0 && nt({ pricing: e(Te) }), j = B().length;
    });
    let W = Math.random().toString(16).slice(2), X = Ve(ct([])), le = Ve(ct([])), A = Ve(ct([])), re = Ve(ct([])), ue = Ve(ct([])), _e = Ve(ct([])), ge = Ve(ct([])), ke = Ve(ct([])), pe = Ve(ct([])), Ce = new yo(), oe = Ve(void 0), xe = Ve(ct({ discountedPrice: 0, fullPrice: 0, discountedPriceWithoutSellingPlan: 0, discountedPricesForSellingPlans: [] })), Fe = Ve(void 0), Ae = Ve(!1), Oe = Ve(ct({ requiresItemSelection: !1, allItemsSelected: !0, missingItemsCount: 0 })), Te = Ve(ct({ discountedPrice: 0, fullPrice: 0, giftValue: 0, discountedPricePerItem: 0, fullPricePerItem: 0, discountedPriceWithoutSellingPlan: 0, discountedPricesForSellingPlans: [] }));
    tt(() => {
      z() && !T() && (e(ot), Jt(() => {
        (function() {
          const de = m().variants.find((Le) => Le.id === z());
          if (!de) return;
          ae(X, [{ variant: de, quantity: 1 }], !0);
          let Ee = de.price;
          if (e(ot)) {
            const Le = de.sellingPlans.find((Qe) => Qe.id === e(ot).id);
            Le && (Ee = Le.price);
          }
          const Pt = de.compareAtPrice && de.compareAtPrice > de.price ? de.compareAtPrice : de.price, $t = m().sellingPlans.map((Le) => ({ sellingPlanId: Le.id, discountedPrice: ll(de, Le) }));
          ae(Te, { discountedPrice: Ee, fullPrice: Pt, giftValue: 0, discountedPricePerItem: Ee, fullPricePerItem: Pt, discountedPriceWithoutSellingPlan: de.price, discountedPricesForSellingPlans: $t }, !0), nt({ pricing: e(Te) });
        })();
      }));
    });
    let Y = d(() => Au(e(S))), ye = d(() => u()(e(S).blockTitle));
    const Me = d(() => e(Ct) ? hn({ priceFormatter: i(), product: e(Z), selectedVariants: e(X), totalFullPrice: e(Te).fullPrice, totalDiscountedPrice: e(Te).discountedPrice, quantity: q() || qe(e(Ct)), dealBar: e(Ct), legacySavedPercentage: b().featureFlags.legacy_saved_percentage || !1, unitQuantity: null, sellingPlan: e(ot) }) : cp), he = d(() => ((de) => Kp(de, "block"))(e(S)).map((de) => wa(de, u(), e(Me)))), Pe = d(() => Pa(e(he))), De = d(() => {
      var de;
      const Ee = e(he).find((Pt) => Pt.badgeType === "border" && (Pt.position === "left" || Pt.position === "right"));
      if ((de = Ee == null ? void 0 : Ee.colors) != null && de.background) return Ne({ ...Ee.colors.background, alpha: 0.15 });
    }), we = e(S).preselectedDealBarId ? e(S).dealBars.find((de) => de.id === e(S).preselectedDealBarId) : void 0;
    function me(de) {
      return !de.dealBarType || de.dealBarType === gt.QuantityBreak || de.dealBarType === gt.Bxgy;
    }
    function qe(de) {
      switch (de.dealBarType) {
        case void 0:
        case gt.QuantityBreak:
          return Number(de.quantity);
        case gt.Bxgy:
          return Number(de.buyQuantity) + Number(de.getQuantity);
        case gt.Bundle:
          return de.bundleProducts[0].quantity;
        case gt.MixAndMatch:
        case gt.Sku:
          return 1;
      }
    }
    function Ue(de) {
      var Ee, Pt;
      T() !== de && (T() && Ce.set(T(), e(pe)), ae(pe, (Ee = Ce.get(de)) != null ? Ee : [], !0), ((Pt = e(S).progressiveGifts) == null ? void 0 : Pt.layout) === "deal-bar" && ae(ue, [], !0)), T(de);
    }
    function Ye(de) {
      const { dealBarId: Ee, dealBarQuantity: Pt, preselected: $t } = de;
      Ue(Ee), bl(!1), b().keepQuantityInput && Pt && q(Pt), kr(g(), "deal-bar-selected", { dealBarId: Ee, preselected: $t });
    }
    function at(de) {
      const Ee = e(S).dealBars[de];
      Ee && Ue(Ee.id);
    }
    function rt() {
      b().ignoreDeselect || (T(void 0), ae(re, [], !0), ae(ue, [], !0), ae(ge, [], !0), ae(le, [], !0), ae(A, [], !0), ae(ke, [], !0), ae(pe, [], !0), Ce.clear(), ae(oe, void 0), bl(!1), kr(g(), "deal-bar-selected", { dealBarId: null, preselected: !1 }));
    }
    function Bt(de) {
      const { variantId: Ee } = de;
      kr(g(), "variant-selected", { variantId: Ee });
    }
    function Dt(de) {
      const { bundleProducts: Ee, freeGifts: Pt, upsells: $t, pricing: Le } = de, Qe = [{ variant: Ee[0].variant, quantity: Ee[0].quantity }];
      ae(X, Qe, !0), ae(le, Ee.slice(1), !0), ae(re, Pt, !0), ae(ge, $t, !0), ae(A, [], !0), ae(ke, [], !0), ae(oe, void 0), ae(Fe, void 0), ae(Te, Le, !0), ae(Ae, pt(e(X)), !0), nt({ pricing: Le });
    }
    function dt(de) {
      const { variants: Ee, freeGifts: Pt, upsells: $t, pricing: Le, validation: Qe } = de;
      ae(Oe, Qe, !0), ae(ke, de.personalisationItems, !0);
      const rn = [{ variant: Ee[0].variant, quantity: Ee[0].quantity }], Wn = Ee.slice(1);
      ae(X, rn, !0), ae(re, Pt, !0), ae(ge, $t, !0), ae(le, [], !0), ae(A, Wn, !0), ae(oe, de.dealBarSellingPlan, !0), ae(Fe, void 0), ae(Te, Le, !0), ae(Ae, pt(e(X)), !0), nt({ pricing: Le });
    }
    function At(de) {
      const { variants: Ee, freeGifts: Pt, upsells: $t, pricing: Le } = de;
      ae(X, Ee, !0), ae(re, Pt, !0), ae(ge, $t, !0), ae(le, [], !0), ae(A, [], !0), ae(ke, [], !0), ae(oe, de.dealBarSellingPlan, !0), ae(Fe, void 0), ae(Te, Le, !0), ae(Ae, pt(e(X)), !0), nt({ pricing: Le });
    }
    function Yt(de) {
      var Ee;
      const { variants: Pt, freeGifts: $t, upsells: Le, pricing: Qe, product: rn } = de;
      ae(X, Pt, !0), ae(re, $t, !0), ae(ge, Le, !0), ae(le, [], !0), ae(A, [], !0), ae(ke, [], !0), ae(oe, de.dealBarSellingPlan, !0), ((Ee = e(Fe)) == null ? void 0 : Ee.id) !== (rn == null ? void 0 : rn.id) && ae(Fe, rn, !0), ae(Te, Qe, !0), ae(Ae, pt(e(X)), !0), nt({ pricing: Qe });
    }
    function Se(de) {
      V(de == null ? void 0 : de.id);
    }
    we != null && we.hideBehindScratchOff && e(S).scratchOffEnabled && (b().preview ? b().previewScratchOff : m().availableForSale) || T(T() || e(S).preselectedDealBarId || void 0), tt(() => {
      q() && e(S) && Jt(() => {
        if (!T()) return;
        const de = e(S).dealBars.find((Ee) => Ee.id === T());
        de && me(de) && qe(de) !== q() && (function(Ee, Pt) {
          if (!T()) return;
          const $t = Ee.dealBars.slice().sort((Qe, rn) => qe(Qe) - qe(rn));
          let Le = $t[0];
          for (const Qe of $t) if (me(Qe)) {
            if (qe(Qe) > Pt) break;
            Le = Qe;
          }
          Le.id !== T() && (Ue(Le.id), kr(g(), "deal-bar-selected", { dealBarId: Le.id, preselected: !1 }));
        })(e(S), q());
      });
    });
    let be = Ve(void 0);
    function Ze() {
      if (!e(Kt) || e(et).length === 0) return;
      const de = e(et).find((Ee) => Ee.id === e(be));
      Se(de != null ? de : e(et)[0]);
    }
    function Ke(de) {
      kr(g(), "add-to-cart-requested", { items: og({ ...J(), selectedSellingPlan: de, dealBarSellingPlan: void 0 }) });
    }
    function He(de) {
      ae(ue, de, !0), nt({ pricing: e(Te) });
    }
    function We(de, Ee) {
      ae(_e, de, !0), ae(xe, Ee, !0), nt({ pricing: e(Te) });
    }
    function Re(de) {
      ae(pe, de, !0), nt({ pricing: e(Te) });
    }
    function pt(de) {
      return de.some(({ variant: Ee, quantity: Pt }) => !!Ee && !!Ee.inventoryManagement && Ee.inventoryPolicy === "deny" && Ee.inventoryQuantity !== null && Pt > Ee.inventoryQuantity);
    }
    function nt({ pricing: de }) {
      const Ee = e(X).map(({ variant: In, quantity: $n }) => ({ variantId: In.id, quantity: $n })), Pt = e(re).map(({ id: In, variant: $n, quantity: Rt }) => ({ id: In, variantId: $n.id, quantity: Rt })), $t = e(ge).map(({ id: In, variant: $n, quantity: Rt }) => ({ id: In, variantId: $n.id, quantity: Rt })), Le = e(le).map(({ id: In, variant: $n, quantity: Rt }) => ({ id: In, variantId: $n.id, quantity: Rt })), Qe = de.discountedPrice + e(xe).discountedPrice, rn = de.fullPrice + e(xe).fullPrice, Wn = { discountedPrice: Qe, fullPrice: rn, discountedPriceWithoutSellingPlan: de.discountedPriceWithoutSellingPlan + e(xe).discountedPriceWithoutSellingPlan, discountedPricesForSellingPlans: de.discountedPricesForSellingPlans.map((In) => {
        var $n, Rt;
        const Mn = (Rt = ($n = e(xe).discountedPricesForSellingPlans.find((Qr) => Qr.sellingPlanId === In.sellingPlanId)) == null ? void 0 : $n.discountedPrice) != null ? Rt : e(xe).discountedPriceWithoutSellingPlan;
        return { sellingPlanId: In.sellingPlanId, discountedPrice: In.discountedPrice + Mn };
      }) };
      T() && e(Ct) ? Ka.set({ id: T(), dealBar: e(Ct), product: e(ut), quantity: e(X).reduce((In, { quantity: $n }) => In + $n, 0), pricing: Wn }) : Ka.set({ id: null, dealBar: null, product: e(ut), quantity: 1, pricing: Wn }), kr(g(), "variants-changed", { variantIdQuantities: Ee, freeGifts: Pt, upsells: $t, bundleProducts: Le, pricing: { discountedPrice: { amount: Qe, formatted: i()(Qe) }, fullPrice: { amount: rn, formatted: i()(rn) }, discountedPricePerItem: { amount: de.discountedPricePerItem, formatted: i()(de.discountedPricePerItem) }, fullPricePerItem: { amount: de.fullPricePerItem, formatted: i()(de.fullPricePerItem) } }, formattedPrice: i()(de.discountedPrice), validation: e(Oe) }), kr(g(), "items-changed", {});
    }
    tt(() => {
      V() && ae(be, V(), !0);
    });
    const ut = d(() => e(Fe) || m()), et = d(() => {
      const de = e(X).map(({ variant: Ee }) => Ee);
      return e(ut).sellingPlans.filter((Ee) => de.some((Pt) => Pt.sellingPlans.some(($t) => $t.id === Ee.id)));
    }), ot = d(() => e(et).find((de) => de.id === V())), wt = d(() => V() ? e(ut).sellingPlans.find((de) => de.id === V()) : void 0), ht = d(() => go(e(oe), e(wt), e(et), e(ut).requiresSellingPlan)), Ht = d(() => e(Te).giftValue + e(ue).reduce((de, Ee) => de + Ee.variants.reduce((Pt, { variant: $t, quantity: Le }) => Pt + $t.price * Le, 0), 0)), Tn = d(() => {
      var de, Ee;
      return (Ee = (de = e(S).savingsSummary) == null ? void 0 : de.includeGiftValue) != null && Ee;
    }), _n = d(() => ((de, Ee, Pt, $t) => {
      const Le = de.fullPrice - de.giftValue + Ee.fullPrice + ($t ? Pt : 0), Qe = de.discountedPrice + Ee.discountedPrice;
      return { fullPrice: Le, discountedPrice: Qe, saved: Le - Qe };
    })(e(Te), e(xe), e(Ht), e(Tn))), en = d(() => {
      var de;
      return ((Ee, Pt) => Ee + Pt.reduce(($t, { quantity: Le }) => $t + Le, 0))(((de = $e(Ka, "$selectedDealBarStore", h)) == null ? void 0 : de.quantity) || 1, e(_e));
    });
    let Kt = d(() => e(S).subscriptionsEnabled && e(S).subscriptions && (e(et).length > 0 || b().preview));
    const tn = d(() => {
      if (!e(S).progressiveGifts || e(et).length > 0) return e(S);
      const de = e(S).progressiveGifts.gifts.filter((Ee) => !Ee.applyOnlyForSubscriptions);
      return de.length === e(S).progressiveGifts.gifts.length ? e(S) : { ...e(S), progressiveGifts: { ...e(S).progressiveGifts, gifts: de } };
    });
    let _t = d(() => {
      var de, Ee;
      return e(Kt) && ((de = e(S).subscriptions) == null ? void 0 : de.showPrices) && ((Ee = e(S).subscriptions) == null ? void 0 : Ee.hideDealBarPrices);
    }), je = d(() => T() ? e(S).dealBars.findIndex((de) => de.id === T()) : null);
    const Xe = d(() => e(S).scratchOffEnabled ? e(S).scratchOff : null), kt = d(() => (e(S).blockLayout === "vertical" || e(S).blockLayout === "plain") && (b().preview || m().availableForSale)), yt = d(() => e(S).dealBars.reduce((de, Ee) => {
      const Pt = e(Xe) && e(kt) && Ee.hideBehindScratchOff, $t = de[de.length - 1];
      return Pt && ($t == null ? void 0 : $t.type) === "scratch" ? $t.bars.push(Ee) : Pt ? de.push({ type: "scratch", key: Ee.id, bars: [Ee] }) : de.push({ type: "visible", key: Ee.id, bar: Ee }), de;
    }, [])), Zt = d(() => [...e(X), ...e(A)].reduce((de, { quantity: Ee }) => de + Ee, 0) || 1), Ct = d(() => T() ? e(S).dealBars.find((de) => de.id === T()) : void 0), zt = d(() => {
      var de, Ee;
      return !!((de = e(Ct)) != null && de.sellingPlanEnabled) && !!((Ee = e(Ct)) != null && Ee.sellingPlanGid);
    }), Qt = d(() => {
      var de;
      return ((de = e(Ct)) == null ? void 0 : de.productPersonalisation) && (e(S).blockLayout === "horizontal" || e(S).blockLayout === "grid");
    }), cn = d(() => !(!e(S).collectionBreaksEnabled || !e(S).collectionBreaks || !e(Ct) || e(Ct).dealBarType && e(Ct).dealBarType !== gt.QuantityBreak && e(Ct).dealBarType !== gt.Bxgy)), Ut = d(() => e(cn) ? e(ke) : void 0), Sn = d(() => e(Ut) ? e(Ut).length : e(Ct) ? e(Ct).dealBarType === void 0 || e(Ct).dealBarType === gt.QuantityBreak ? q() || Number(e(Ct).quantity) || 1 : e(Ct).dealBarType === gt.Bxgy ? q() || e(Ct).buyQuantity + e(Ct).getQuantity : e(Ct).dealBarType === gt.Bundle ? 1 : q() || 1 : q() || 1), Yn = d(() => e(X).flatMap(({ variant: de, quantity: Ee }) => Array(Ee).fill(de.id))), kn = d(() => {
      if (e(pe).length === 0) return [];
      const de = e(pe).reduce(($t, Le) => Math.max($t, Le.productIndex), -1), Ee = e(Ut) ? Math.min(de + 1, e(Ut).length) : de + 1, Pt = Array.from({ length: Ee }, () => "");
      for (const $t of e(pe)) $t.productIndex < Ee && (Pt[$t.productIndex] = $t.text);
      return Pt;
    });
    var qn = { rotateBundleNonce: function() {
      ae(ie, Math.random(), !0);
    }, selectedVariants: function() {
      return C().map((de) => ({ variantId: de.id, quantity: de.quantity, properties: de.properties }));
    }, items: C, pricing: function() {
      const de = e(Te).discountedPrice + e(xe).discountedPrice, Ee = e(Te).fullPrice + e(xe).fullPrice;
      return { discountedPrice: { amount: de / 100, formatted: i()(de) }, fullPrice: { amount: Ee / 100, formatted: i()(Ee) }, discountedPricePerItem: { amount: e(Te).discountedPricePerItem / 100, formatted: i()(e(Te).discountedPricePerItem) }, fullPricePerItem: { amount: e(Te).fullPricePerItem / 100, formatted: i()(e(Te).fullPricePerItem) }, discountedPriceWithoutSellingPlan: { amount: (e(Te).discountedPriceWithoutSellingPlan + e(xe).discountedPriceWithoutSellingPlan) / 100, formatted: i()(e(Te).discountedPriceWithoutSellingPlan + e(xe).discountedPriceWithoutSellingPlan) }, discountedPricesForSellingPlans: e(Te).discountedPricesForSellingPlans.map((Pt) => {
        var $t, Le;
        const Qe = (Le = ($t = e(xe).discountedPricesForSellingPlans.find((Wn) => Wn.sellingPlanId === Pt.sellingPlanId)) == null ? void 0 : $t.discountedPrice) != null ? Le : e(xe).discountedPriceWithoutSellingPlan, rn = Pt.discountedPrice + Qe;
        return { sellingPlanId: Pt.sellingPlanId, amount: rn / 100, formatted: i()(rn) };
      }) };
    }, deal: function() {
      return { subscriptionsEnabled: e(S).subscriptionsEnabled || e(S).dealBars.some((de) => de.sellingPlanEnabled) };
    }, isItemSelectionValid: function() {
      const { requiresItemSelection: de, allItemsSelected: Ee } = e(Oe);
      return !de || Ee;
    }, validateItemSelection: function() {
      var de, Ee;
      const { requiresItemSelection: Pt, allItemsSelected: $t } = e(Oe);
      return Pt && !$t ? (bl(!0), { valid: !1, message: ((Ee = (de = e(S).collectionBreaks) == null ? void 0 : de.requireItemSelectionAlert) == null ? void 0 : Ee.text) || null }) : (bl(!1), { valid: !0, message: null });
    }, get component() {
      return g();
    }, set component(de) {
      g(de), _();
    }, get config() {
      return b();
    }, set config(de) {
      b(de), _();
    }, get translations() {
      return v();
    }, set translations(de = {}) {
      v(de), _();
    }, get dealBlock() {
      return w();
    }, set dealBlock(de) {
      w(de), _();
    }, get product() {
      return m();
    }, set product(de) {
      m(de), _();
    }, get currentVariantId() {
      return z();
    }, set currentVariantId(de) {
      z(de), _();
    }, get currentVariantSource() {
      return I();
    }, set currentVariantSource(de = void 0) {
      I(de), _();
    }, get sellingPlanId() {
      return V();
    }, set sellingPlanId(de) {
      V(de), _();
    }, get selectedDealBarId() {
      return T();
    }, set selectedDealBarId(de) {
      T(de), _();
    }, get quantity() {
      return q();
    }, set quantity(de) {
      q(de), _();
    }, get mediaImages() {
      return ee();
    }, set mediaImages(de = []) {
      ee(de), _();
    }, get otherProducts() {
      return H();
    }, set otherProducts(de = []) {
      H(de), _();
    }, get collectionBreaksProducts() {
      return D();
    }, set collectionBreaksProducts(de = []) {
      D(de), _();
    }, get complementaryProducts() {
      return ne();
    }, set complementaryProducts(de = []) {
      ne(de), _();
    }, get nativeBundleProductIds() {
      return B();
    }, set nativeBundleProductIds(de = []) {
      B(de), _();
    }, get compact() {
      return N();
    }, set compact(de = !1) {
      N(de), _();
    }, get variantBadges() {
      return se();
    }, set variantBadges(de = []) {
      se(de), _();
    } }, dr = em(), gr = fe(dr), mn = y(gr);
    let Ot;
    {
      const de = (Le, Qe) => {
        let rn = Fl(() => (function(Rt, Mn, Qr = !1) {
          return Rt === void 0 ? Qr ? Mn() : Mn : Rt;
        })(Qe == null ? void 0 : Qe(), !1));
        var Wn = ze(), In = fe(Wn), $n = (Rt) => {
          eg(Rt, { get subscriptions() {
            return e(S).subscriptions;
          }, get sellingPlans() {
            return e(et);
          }, get selectedSellingPlan() {
            return e(ot);
          }, get hideSellingPlanSelector() {
            return e(zt);
          }, get hideTitle() {
            return e(rn);
          }, onChange: Se, onRequestAddToCart: Ke });
        };
        O(In, (Rt) => {
          e(S).subscriptions && Rt($n);
        }), p(Le, Wn);
      }, Ee = (Le, Qe = Br) => {
        var rn = ze(), Wn = fe(rn), In = (Rt) => {
          {
            let Mn = d(() => Qe().id === T()), Qr = d(() => Qe().id === T() ? e(kn) : []);
            Wd(Rt, { get selectedDealBarIndex() {
              return e(je);
            }, get dealBlock() {
              return e(tn);
            }, get dealBar() {
              return Qe();
            }, get product() {
              return e(Z);
            }, get otherProducts() {
              return e(M);
            }, get complementaryProducts() {
              return e(P);
            }, get selected() {
              return e(Mn);
            }, get currentVariantId() {
              return z();
            }, get componentId() {
              return W;
            }, get sellingPlan() {
              return e(wt);
            }, onProgressiveGiftsChange: He, onDealBarSelect: Ye, onDealBarDeselect: rt, onVariantSelect: Bt, onVariantsChange: Dt, onPersonalisationsChange: Re, get personalisationInitialValues() {
              return e(Qr);
            } });
          }
        }, $n = (Rt) => {
          var Mn = ze(), Qr = fe(Mn), Di = (Ca) => {
            {
              let ps = d(() => Qe().id === T()), To = d(() => Qe().id === T() ? e(kn) : []);
              Ld(Ca, { get selectedDealBarIndex() {
                return e(je);
              }, get dealBlock() {
                return e(tn);
              }, get dealBar() {
                return Qe();
              }, get product() {
                return e(Z);
              }, get otherProducts() {
                return e(M);
              }, get complementaryProducts() {
                return e(P);
              }, get selected() {
                return e(ps);
              }, get currentVariantId() {
                return z();
              }, get componentId() {
                return W;
              }, get sellingPlan() {
                return e(wt);
              }, onProgressiveGiftsChange: He, onDealBarSelect: Ye, onDealBarDeselect: rt, onVariantSelect: Bt, onVariantsChange: Dt, onPersonalisationsChange: Re, get personalisationInitialValues() {
                return e(To);
              } });
            }
          }, ua = (Ca) => {
            var ps = ze(), To = fe(ps), Bm = (Vi) => {
              {
                let bs = d(() => Qe().id === T()), qo = d(() => Qe().id === T() ? e(kn) : []);
                hg(Vi, { get dealBlock() {
                  return e(tn);
                }, get dealBar() {
                  return Qe();
                }, get selectedDealBarIndex() {
                  return e(je);
                }, get otherProducts() {
                  return e(M);
                }, get complementaryProducts() {
                  return e(P);
                }, get componentId() {
                  return W;
                }, get selected() {
                  return e(bs);
                }, get globalSellingPlan() {
                  return e(wt);
                }, onProgressiveGiftsChange: He, onDealBarSelect: Ye, onDealBarDeselect: rt, onVariantsChange: Yt, onPersonalisationsChange: Re, get personalisationInitialValues() {
                  return e(qo);
                } });
              }
            }, Cm = (Vi) => {
              var bs = ze(), qo = fe(bs), Im = (Ai) => {
                {
                  let Go = d(() => Qe().id === T() ? q() && Number(q()) : void 0), Oo = d(() => Qe().id === T()), Fo = d(() => Qe().id === T() ? e(kn) : []);
                  Hd(Ai, { get dealBlock() {
                    return e(tn);
                  }, get dealBar() {
                    return Qe();
                  }, get selectedDealBarIndex() {
                    return e(je);
                  }, get product() {
                    return e(Z);
                  }, get collectionBreaksProducts() {
                    return e(R);
                  }, get otherProducts() {
                    return e(M);
                  }, get complementaryProducts() {
                    return e(P);
                  }, get customQuantity() {
                    return e(Go);
                  }, get selected() {
                    return e(Oo);
                  }, onProgressiveGiftsChange: He, get currentVariantId() {
                    return z();
                  }, get componentId() {
                    return W;
                  }, get globalSellingPlan() {
                    return e(wt);
                  }, onDealBarSelect: Ye, onDealBarDeselect: rt, onVariantSelect: Bt, onVariantsChange: dt, onPersonalisationsChange: Re, get personalisationInitialValues() {
                    return e(Fo);
                  } });
                }
              }, Mm = (Ai) => {
                {
                  let Go = d(() => Qe().id === T() ? q() && Number(q()) : void 0), Oo = d(() => Qe().id === T()), Fo = d(() => Qe().id === T() ? e(kn) : []);
                  So(Ai, { get selectedDealBarIndex() {
                    return e(je);
                  }, get dealBlock() {
                    return e(tn);
                  }, get dealBar() {
                    return Qe();
                  }, get product() {
                    return e(Z);
                  }, get otherProducts() {
                    return e(M);
                  }, get complementaryProducts() {
                    return e(P);
                  }, get customQuantity() {
                    return e(Go);
                  }, get selected() {
                    return e(Oo);
                  }, get currentVariantId() {
                    return z();
                  }, get currentVariantSource() {
                    return I();
                  }, get componentId() {
                    return W;
                  }, get globalSellingPlan() {
                    return e(wt);
                  }, onProgressiveGiftsChange: He, onDealBarSelect: Ye, onDealBarDeselect: rt, onVariantSelect: Bt, onVariantsChange: At, onPersonalisationsChange: Re, get personalisationInitialValues() {
                    return e(Fo);
                  } });
                }
              };
              O(qo, (Ai) => {
                !e(S).collectionBreaksEnabled || !e(S).collectionBreaks || Qe().dealBarType && Qe().dealBarType !== gt.QuantityBreak && Qe().dealBarType !== gt.Bxgy ? Ai(Mm, !1) : Ai(Im);
              }, !0), p(Vi, bs);
            };
            O(To, (Vi) => {
              Qe().dealBarType === gt.Sku ? Vi(Bm) : Vi(Cm, !1);
            }, !0), p(Ca, ps);
          };
          O(Qr, (Ca) => {
            Qe().dealBarType === gt.Bundle ? Ca(Di) : Ca(ua, !1);
          }, !0), p(Rt, Mn);
        };
        O(Wn, (Rt) => {
          Qe().dealBarType === gt.MixAndMatch ? Rt(In) : Rt($n, !1);
        }), p(Le, rn);
      };
      var nn = y(mn), Ft = (Le) => {
        var Qe = Kk(), rn = fe(Qe), Wn = (Rt) => {
          var Mn = Yk();
          Ge(y(Mn), () => e(ye)), x(Mn), p(Rt, Mn);
        };
        O(rn, (Rt) => {
          e(ye) && Rt(Wn);
        });
        var In = L(rn, 2), $n = (Rt) => {
          lg(Rt, { get timer() {
            return e(S).timer;
          } });
        };
        O(In, (Rt) => {
          e(S).timerEnabled && e(S).timer && Rt($n);
        }), p(Le, Qe);
      };
      O(nn, (Le) => {
        N() || Le(Ft);
      });
      var Xt = L(nn, 2), Tt = (Le) => {
        de(Le);
      };
      O(Xt, (Le) => {
        var Qe;
        e(Kt) && ((Qe = e(S).subscriptions) == null ? void 0 : Qe.position) === "above" && e(Pe).positions.size === 0 && Le(Tt);
      });
      var It = L(Xt, 2);
      let Pt, $t;
      var ln = y(It);
      Vt(ln, 17, () => e(he), (Le) => Le.id, (Le, Qe) => {
        oa(Le, { get badge() {
          return e(Qe);
        }, get blockLayout() {
          return e(S).blockLayout;
        } });
      });
      var sn = L(ln, 2), on = (Le) => {
        {
          let Qe = d(() => e(Pe).positions.has("all"));
          de(Le, () => e(Qe));
        }
      };
      O(sn, (Le) => {
        var Qe;
        e(Kt) && ((Qe = e(S).subscriptions) == null ? void 0 : Qe.position) === "above" && e(Pe).positions.size > 0 && Le(on);
      });
      var bn = L(sn, 2);
      Vt(bn, 17, () => e(yt), (Le) => Le.key, (Le, Qe) => {
        var rn = ze(), Wn = fe(rn), In = (Rt) => {
          Jd(Rt, { get settings() {
            return e(Xe);
          }, onReveal: () => {
            return Mn = e(Qe).bars, void (!T() && we && Mn.includes(we) && Ye({ dealBarId: we.id, dealBarQuantity: qe(we), preselected: !0 }));
            var Mn;
          }, children: (Mn, Qr) => {
            var Di = ze();
            Vt(fe(Di), 17, () => e(Qe).bars, (ua) => ua.id, (ua, Ca) => {
              Ee(ua, () => e(Ca));
            }), p(Mn, Di);
          }, $$slots: { default: !0 } });
        }, $n = (Rt) => {
          var Mn = ze(), Qr = fe(Mn), Di = (ua) => {
            Ee(ua, () => e(Qe).bar);
          };
          O(Qr, (ua) => {
            e(Qe).type === "visible" && ua(Di);
          }, !0), p(Rt, Mn);
        };
        O(Wn, (Rt) => {
          e(Qe).type === "scratch" && e(Xe) ? Rt(In) : Rt($n, !1);
        }), p(Le, rn);
      });
      var Gn = L(bn, 2), On = (Le) => {
        {
          let Qe = d(() => e(Pe).positions.has("all"));
          de(Le, () => e(Qe));
        }
      };
      O(Gn, (Le) => {
        var Qe;
        e(Kt) && ((Qe = e(S).subscriptions) == null ? void 0 : Qe.position) === "below" && e(Pe).positions.size > 0 && Le(On);
      }), x(It);
      var Bn = L(It, 2), Rn = (Le) => {
        Ya(Le, { get product() {
          return e(ut);
        }, get productPersonalisation() {
          return e(Ct).productPersonalisation;
        }, get selectedVariantIds() {
          return e(Yn);
        }, get personalisationItems() {
          return e(Ut);
        }, get quantity() {
          return e(Sn);
        }, get addPersonalisationModal() {
          return e(S).addPersonalisationModal;
        }, onPersonalisationsChange: Re, get initialValues() {
          return e(kn);
        } });
      };
      O(Bn, (Le) => {
        var Qe;
        e(Qt) && ((Qe = e(Ct)) != null && Qe.productPersonalisation) && Le(Rn);
      });
      var xn = L(Bn, 2), zn = (Le) => {
        de(Le);
      };
      O(xn, (Le) => {
        var Qe;
        e(Kt) && ((Qe = e(S).subscriptions) == null ? void 0 : Qe.position) === "below" && e(Pe).positions.size === 0 && Le(zn);
      });
      var Cn = L(xn, 2), yn = (Le) => {
        var Qe = Xk();
        Ge(y(Qe), () => u()("system.out_of_stock")), x(Qe), p(Le, Qe);
      };
      O(Cn, (Le) => {
        e(Ae) && (e(X).length > 1 || e(X)[0].quantity > 1) && Le(yn);
      });
      var Qn = L(Cn, 2), yr = (Le) => {
        ig(Le, { get checkboxUpsells() {
          return e(S).checkboxUpsells;
        }, get dealBlock() {
          return e(S);
        }, get otherProducts() {
          return e(M);
        }, get complementaryProducts() {
          return e(P);
        }, get dealSellingPlan() {
          return e(ht);
        }, get dealBarQuantity() {
          return e(Zt);
        }, onChange: We });
      };
      O(Qn, (Le) => {
        !N() && e(S).checkboxUpsellsEnabled && e(S).checkboxUpsells && Le(yr);
      });
      var wr = L(Qn, 2), Ao = (Le) => {
        rg(Le, { get progressiveGifts() {
          return e(tn).progressiveGifts;
        }, get dealBlock() {
          return e(S);
        }, get otherProducts() {
          return e(M);
        }, get selectedDealBarIndex() {
          return e(je);
        }, get sellingPlan() {
          return e(ht);
        }, onChange: He, onUnlock: at, onSubscribe: Ze });
      };
      O(wr, (Le) => {
        e(S).progressiveGiftsEnabled && e(tn).progressiveGifts && e(tn).progressiveGifts.layout !== "deal-bar" && Le(Ao);
      });
      var mg = L(wr, 2), mm = (Le) => {
        {
          let Qe = d(() => e(Oe).missingItemsCount > 0);
          pg(Le, { get collectionBreaks() {
            return e(S).collectionBreaks;
          }, get hasItemsToSelect() {
            return e(Qe);
          } });
        }
      };
      O(mg, (Le) => {
        e(S).collectionBreaksEnabled && Le(mm);
      });
      var xm = L(mg, 2), ym = (Le) => {
        bg(Le, { get savingsSummary() {
          return e(S).savingsSummary;
        }, get totalFullPrice() {
          return e(_n).fullPrice;
        }, get totalDiscountedPrice() {
          return e(_n).discountedPrice;
        }, get quantity() {
          return e(en);
        }, get product() {
          return e(ut);
        } });
      };
      O(xm, (Le) => {
        var Qe, rn;
        !N() && e(S).savingsSummaryEnabled && e(S).savingsSummary && (Qe = e(_n).saved, rn = e(S).savingsSummary.hideWhenZeroSavings, Qe > 0 || !rn) && Le(ym);
      }), x(mn), ve((Le, Qe, rn, Wn) => {
        Pt = Et(It, 1, "kaching-bundles__bars", null, Pt, rn), $t = Gt(It, "", $t, Wn);
      }, [() => ({ "kaching-bundles__block--horizontal": e(S).blockLayout === "horizontal", "kaching-bundles__block--grid": e(S).blockLayout === "grid", "kaching-bundles__block--plain": e(S).blockLayout === "plain" }), () => e(S).abTestVariantNumber ? lo(e(S).abTestVariantNumber) : void 0, () => ({ "kaching-bundles__bars--horizontal": e(S).blockLayout === "horizontal", "kaching-bundles__bars--grid": e(S).blockLayout === "grid", "kaching-bundles__bars--plain": e(S).blockLayout === "plain", "kaching-bundles__bars--hide-prices": e(_t), "kaching-bundles__bars--badge-border-all": e(Pe).positions.has("all"), "kaching-bundles__bars--badge-border-top": e(Pe).positions.has("top"), "kaching-bundles__bars--badge-border-bottom": e(Pe).positions.has("bottom"), "kaching-bundles__bars--badge-border-left": e(Pe).positions.has("left"), "kaching-bundles__bars--badge-border-right": e(Pe).positions.has("right") }), () => {
        var Le, Qe;
        return { "--badge-border-thickness": `${(Le = e(Pe).thickness) != null ? Le : ""}px`, "--badge-border-gap": `${(Qe = e(Pe).gap) != null ? Qe : ""}px`, "--badge-border-gap-border": e(Pe).gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": e(Pe).sideLength ? `${e(Pe).sideLength}px` : void 0, "--badge-border-wrap-color": e(De) };
      }]);
    }
    x(gr);
    var wm = L(gr, 2), Pm = (de) => {
      sg(de, { get shopCustomStyles() {
        return b().shopCustomStyles;
      }, get customStyles() {
        return e(S).customStyles;
      }, get dealBlockId() {
        return e(S).id;
      } });
    };
    O(wm, (de) => {
      e(S).customStylesEnabled && de(Pm);
    }), ve((de, Ee, Pt, $t) => {
      var Le;
      Ot = Et(mn, 1, "kaching-bundles__block kaching-bundles__block--loaded", null, Ot, de), Ie(mn, "data-deal-block-id", e(S).id), Ie(mn, "data-ab-test-variant-id", e(S).abTestVariantId), Ie(mn, "data-ab-test-variant", Ee), Ie(mn, "data-selling-plan-id", (Le = e(ht)) == null ? void 0 : Le.id), Gt(mn, e(Y));
    }, [() => ({ "kaching-bundles__block--horizontal": e(S).blockLayout === "horizontal", "kaching-bundles__block--grid": e(S).blockLayout === "grid", "kaching-bundles__block--plain": e(S).blockLayout === "plain" }), () => e(S).abTestVariantNumber ? lo(e(S).abTestVariantNumber) : void 0, () => ({ "kaching-bundles__bars--horizontal": e(S).blockLayout === "horizontal", "kaching-bundles__bars--grid": e(S).blockLayout === "grid", "kaching-bundles__bars--plain": e(S).blockLayout === "plain", "kaching-bundles__bars--hide-prices": e(_t), "kaching-bundles__bars--badge-border-all": e(Pe).positions.has("all"), "kaching-bundles__bars--badge-border-top": e(Pe).positions.has("top"), "kaching-bundles__bars--badge-border-bottom": e(Pe).positions.has("bottom"), "kaching-bundles__bars--badge-border-left": e(Pe).positions.has("left"), "kaching-bundles__bars--badge-border-right": e(Pe).positions.has("right") }), () => {
      var de, Ee;
      return { "--badge-border-thickness": `${(de = e(Pe).thickness) != null ? de : ""}px`, "--badge-border-gap": `${(Ee = e(Pe).gap) != null ? Ee : ""}px`, "--badge-border-gap-border": e(Pe).gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": e(Pe).sideLength ? `${e(Pe).sideLength}px` : void 0, "--badge-border-wrap-color": e(De) };
    }]), p(n, dr);
    var Sm = lt(qn);
    return f(), Sm;
  }
  customElements.define("kaching-bundles-block", Je(fg, { config: { attribute: "config", type: "Object" }, translations: { attribute: "translations", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, product: { attribute: "product", type: "Object" }, otherProducts: { attribute: "other-products", type: "Array" }, collectionBreaksProducts: { attribute: "collection-breaks-products", type: "Array" }, complementaryProducts: { attribute: "complementary-products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" }, currentVariantId: { attribute: "current-variant-id", type: "Number" }, currentVariantSource: { attribute: "current-variant-source", type: "String" }, sellingPlanId: { attribute: "selling-plan-id", type: "Number" }, selectedDealBarId: { attribute: "selected-deal-bar-id", type: "String" }, quantity: { attribute: "quantity", type: "Number" }, nativeBundleProductIds: { attribute: "native-bundle-product-ids", type: "Array" }, compact: { attribute: "compact", type: "Boolean" }, variantBadges: { attribute: "variant-badges", type: "Array" }, component: {} }, [], ["rotateBundleNonce", "selectedVariants", "items", "pricing", "deal", "isItemSelectionValid", "validateItemSelection"], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this, this.innerHTML && (kr(this, "kaching-bundles-block-hydrated"), this.innerHTML = "");
    }
  }));
  var tm = $('<div class="kaching-bundles"><!></div>');
  function vg(n, t) {
    var r;
    it(t, !0);
    const a = k(t, "config", 7), s = k(t, "dealBlock", 7), o = k(t, "products", 23, () => []), c = k(t, "mediaImages", 7), l = k(t, "translations", 7), i = d(() => sr(s(), a().brandColors)), { setConfig: u } = Za(a()), { setMoneyFormat: h } = Pi(a().moneyFormat), { setTranslations: f } = Ha(l()), { setMediaImages: g } = il(c()), { setSwatchSettings: b } = nl({ swatchOptions: e(i).swatchOptions || [], swatchSize: e(i).swatchSize, swatchShape: e(i).swatchShape, showSelectedSwatchName: (r = e(i).showSelectedSwatchName) != null && r });
    tt(() => {
      u(a());
    }), tt(() => {
      h(a().moneyFormat, !!e(i).showPricesWithoutDecimals);
    }), tt(() => {
      f(l());
    }), tt(() => {
      g(c());
    }), tt(() => {
      var V;
      b({ swatchOptions: e(i).swatchOptions || [], swatchSize: e(i).swatchSize, swatchShape: e(i).swatchShape, showSelectedSwatchName: (V = e(i).showSelectedSwatchName) != null && V });
    });
    const v = d(() => e(i).dealBars.find((V) => V.dealBarType === gt.MixAndMatch));
    var w = { get config() {
      return a();
    }, set config(V) {
      a(V), _();
    }, get dealBlock() {
      return s();
    }, set dealBlock(V) {
      s(V), _();
    }, get products() {
      return o();
    }, set products(V = []) {
      o(V), _();
    }, get mediaImages() {
      return c();
    }, set mediaImages(V) {
      c(V), _();
    }, get translations() {
      return l();
    }, set translations(V) {
      l(V), _();
    } }, m = tm(), z = y(m), I = (V) => {
      Io(V, { get dealBlock() {
        return e(i);
      }, get dealBar() {
        return e(v);
      }, get products() {
        return o();
      }, onChoose: () => {
      } });
    };
    return O(z, (V) => {
      e(v) && V(I);
    }), x(m), p(n, m), lt(w);
  }
  customElements.define("kaching-bundles-mix-and-match-choose-product", Je(vg, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this;
    }
  }));
  var nm = $('<div class="kaching-bundles"><!></div>');
  function _g(n, t) {
    it(t, !0);
    const r = k(t, "config", 7), a = k(t, "product", 7), s = k(t, "translations", 7), o = k(t, "addPersonalisationModal", 7), c = d(() => sr(o(), r().brandColors)), { setConfig: l } = Za(r()), { setTranslations: i } = Ha(s());
    tt(() => {
      l(r()), i(s());
    });
    const u = d(() => {
      var g, b;
      return (b = (g = a()) == null ? void 0 : g.variants) != null && b[0] ? [{ product: a(), variant: a().variants[0], index: 0 }, { product: a(), variant: a().variants[0], index: 1 }] : [];
    });
    var h = { get config() {
      return r();
    }, set config(g) {
      r(g), _();
    }, get product() {
      return a();
    }, set product(g) {
      a(g), _();
    }, get translations() {
      return s();
    }, set translations(g) {
      s(g), _();
    }, get addPersonalisationModal() {
      return o();
    }, set addPersonalisationModal(g) {
      o(g), _();
    } }, f = nm();
    return wo(y(f), { get selectedVariants() {
      return e(u);
    }, get addPersonalisationModal() {
      return e(c);
    }, inline: !0, personalisationValues: [], onConfirm: () => {
    }, onClose: () => {
    } }), x(f), p(n, f), lt(h);
  }
  customElements.define("kaching-bundles-personalisation-modal", Je(_g, { config: { attribute: "config", type: "Object" }, product: { attribute: "product", type: "Object" }, translations: { attribute: "translations", type: "Object" }, addPersonalisationModal: { attribute: "add-personalisation-modal", type: "Object" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this;
    }
  }));
  function rm(n, t) {
    t().dispatchEvent(new CustomEvent("kaching-bundles-sticky-atc-clicked", { bubbles: !0, composed: !0 }));
  }
  var am = $('<img class="kaching-bundles-sticky-atc__image"/>'), im = $('<button class="kaching-bundles-sticky-atc__button"><!></button>'), lm = $('<div class="kaching-bundles"><div class="kaching-bundles-sticky-atc"><div class="kaching-bundles-sticky-atc__content"><!> <div class="kaching-bundles-sticky-atc__title"><!></div></div> <!></div></div>');
  function kg(n, t) {
    var r;
    it(t, !0);
    const a = () => $e(Ka, "$selectedDealBarStore", o), s = () => $e(m, "$translate", o), [o, c] = vt(), l = k(t, "component", 7), i = k(t, "config", 7), u = k(t, "stickyAtc", 7), h = k(t, "translations", 7), f = k(t, "product", 7), g = k(t, "dealBlock", 7), b = d(() => sr(u(), i().brandColors)), v = d(() => sr(g(), i().brandColors)), { setConfig: w } = Za(i()), { translate: m, setTranslations: z } = Ha(h()), { formatPrice: I, setMoneyFormat: V } = Pi(i().moneyFormat, (r = e(v)) == null ? void 0 : r.showPricesWithoutDecimals);
    tt(() => {
      w(i());
    }), tt(() => {
      var G;
      V(i().moneyFormat, !!((G = e(v)) != null && G.showPricesWithoutDecimals));
    }), tt(() => {
      z(h());
    });
    const T = d(() => ((G) => {
      const U = { "kaching-bundles-sticky-atc-background-color": Ne(G.backgroundColor), "kaching-bundles-sticky-atc-title-color": Ne(G.titleColor), "kaching-bundles-sticky-atc-button-color": Ne(G.buttonColor), "kaching-bundles-sticky-atc-button-text-color": Ne(G.buttonTextColor), "kaching-bundles-sticky-atc-title-font-size": G.titleFont.size + "px", "kaching-bundles-sticky-atc-button-font-size": G.buttonFont.size + "px", "kaching-bundles-sticky-atc-title-font-style": ur(G.titleFont.style), "kaching-bundles-sticky-atc-title-font-weight": cr(G.titleFont.style), "kaching-bundles-sticky-atc-button-font-style": ur(G.buttonFont.style), "kaching-bundles-sticky-atc-button-font-weight": cr(G.buttonFont.style), "kaching-bundles-sticky-atc-product-photo-size": G.productPhotoSize + "px", "kaching-bundles-sticky-atc-button-padding": G.buttonPadding + "px", "kaching-bundles-sticky-atc-product-photo-corner-radius": G.productPhotoCornerRadius + "px", "kaching-bundles-sticky-atc-button-corner-radius": G.buttonCornerRadius + "px" };
      if (G.sameSizeOnMobile || !G.mobile) return pn(U);
      const te = G.mobile;
      return pn({ ...U, "kaching-bundles-sticky-atc-image-display": G.productPhotoSize > 0 ? "block" : "none", "kaching-bundles-sticky-atc-image-display-mobile": te.productPhotoSize > 0 ? "block" : "none", "kaching-bundles-sticky-atc-title-font-size-mobile": te.titleFontSize + "px", "kaching-bundles-sticky-atc-button-font-size-mobile": te.buttonFontSize + "px", "kaching-bundles-sticky-atc-product-photo-size-mobile": te.productPhotoSize + "px", "kaching-bundles-sticky-atc-button-padding-mobile": te.buttonPadding + "px", "kaching-bundles-sticky-atc-product-photo-corner-radius-mobile": te.productPhotoCornerRadius + "px", "kaching-bundles-sticky-atc-button-corner-radius-mobile": te.buttonCornerRadius + "px" });
    })(e(b))), q = d(() => {
      var G;
      return ((G = a()) == null ? void 0 : G.pricing.fullPrice) || f().variants[0].compareAtPrice || f().variants[0].price;
    }), ee = d(() => {
      var G;
      return ((G = a()) == null ? void 0 : G.pricing.discountedPrice) || f().variants[0].price;
    }), H = d(() => {
      var G;
      return ((G = a()) == null ? void 0 : G.quantity) || 1;
    }), D = d(() => hn({ priceFormatter: $e(I, "$formatPrice", o), product: f(), totalFullPrice: e(q), totalDiscountedPrice: e(ee), quantity: e(H), unitQuantity: null })), ne = d(() => e(D)(s()(e(b).title))), B = new Db("(width < 750px)"), N = d(() => (B.current && !e(b).sameSizeOnMobile && e(b).mobile ? e(b).mobile.productPhotoSize : e(b).productPhotoSize) > 0);
    var se = { get component() {
      return l();
    }, set component(G) {
      l(G), _();
    }, get config() {
      return i();
    }, set config(G) {
      i(G), _();
    }, get stickyAtc() {
      return u();
    }, set stickyAtc(G) {
      u(G), _();
    }, get translations() {
      return h();
    }, set translations(G) {
      h(G), _();
    }, get product() {
      return f();
    }, set product(G) {
      f(G), _();
    }, get dealBlock() {
      return g();
    }, set dealBlock(G) {
      g(G), _();
    } }, S = lm(), Z = y(S), M = y(Z), P = y(M), R = (G) => {
      var U = am();
      ve(() => {
        Ie(U, "src", f().image), Ie(U, "alt", f().title);
      }), p(G, U);
    };
    O(P, (G) => {
      e(N) && G(R);
    });
    var Q = L(P, 2);
    Ge(y(Q), () => e(ne)), x(Q), x(M);
    var K = L(M, 2), ce = (G) => {
      var U = im();
      U.__click = [rm, l], Ge(y(U), () => s()(e(b).buttonText)), x(U), p(G, U);
    };
    O(K, (G) => {
      e(b).buttonText && G(ce);
    }), x(Z), x(S), ve(() => Gt(Z, e(T))), p(n, S);
    var F = lt(se);
    return c(), F;
  }
  jn(["click"]), customElements.define("kaching-bundles-sticky-atc", Je(kg, { config: { attribute: "config", type: "Object" }, stickyAtc: { attribute: "sticky-atc", type: "Object" }, translations: { attribute: "translations", type: "Object" }, product: { attribute: "product", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, component: {} }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this;
    }
  }));
  const sm = rd, om = Xu, cm = fg, um = vg, dm = _g, gm = kg, hm = Gd.element, pm = sm.element, bm = om.element, fm = cm.element, vm = um.element, _m = dm.element, km = gm.element;
  return jt.ChooseMultipleGifts = bm, jt.ChooseProduct = pm, jt.DealBar = hm, jt.DealBlock = fm, jt.MixAndMatchChooseProduct = vm, jt.PersonalisationModal = _m, jt.StickyAtc = km, Object.defineProperty(jt, Symbol.toStringTag, { value: "Module" }), jt;
})({});
