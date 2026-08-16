(function() {
  try {
    if (typeof document != "undefined") {
      var jt = document.createElement("style");
      jt.id = "kaching-bundles-styles", jt.appendChild(document.createTextNode(`.kaching-bundles .kaching-bundles__multiple-gifts-selector{position:relative}.kaching-bundles .kaching-bundles__multiple-gifts-selector__clickable-overlay{position:absolute;inset:0;cursor:pointer}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photos{position:relative;display:flex;align-items:center;flex-shrink:0;padding-block:2px}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photo{box-sizing:border-box;width:40px;height:40px;-o-object-fit:cover;object-fit:cover;background-color:#fff;border-radius:8px;border:1px solid var(--kaching-free-gift-background-color, #fff)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__multiple-gifts-selector__photo{border-color:var(--kaching-free-gift-selected-background-color, #000)}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photo:not(:first-child){margin-inline-start:-16px}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photo-count{box-sizing:border-box;position:absolute;top:0;inset-inline-end:0;transform:translate(18%,-3%);display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;border:1px solid var(--kaching-free-gift-text-color, #000);background-color:var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3));color:var(--kaching-free-gift-text-color, #000);font-size:calc(var(--kaching-free-gift-font-size, 13px) - 2px);font-weight:var(--kaching-free-gift-font-weight, bold);line-height:1}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__multiple-gifts-selector__photo-count{border-color:var(--kaching-free-gift-selected-text-color, #fff);background-color:var(--kaching-free-gift-selected-background-color, #000);color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__bundle-products{display:flex;justify-content:space-evenly;margin-top:12px;margin-bottom:4px;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:calc(var(--bar-border-radius, 0) * 3 / 4)}.kaching-bundles .kaching-bundles__bundle-products .kaching-bundles__bar-variant-selects{justify-content:center}.kaching-bundles .kaching-bundles__bundle-products__divider{display:flex;flex-direction:column;align-items:center;width:0;overflow:visible}.kaching-bundles .kaching-bundles__bundle-products__divider *{max-width:initial}.kaching-bundles .kaching-bundles__bundle-products__divider-line{display:flex;flex:1;width:1px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bundle-products__divider-icon{display:flex}.kaching-bundles .kaching-bundles__bundle-products__divider-icon svg{color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bundle-products__product{display:flex;flex:1;flex-direction:column;align-items:center;min-width:0;gap:5px;padding:12px}.kaching-bundles .kaching-bundles__bundle-products__product.kaching-bundles__bundle-products__product--placeholder{justify-content:center;text-align:center;font-size:13px;font-weight:700;color:#555}.kaching-bundles .kaching-bundles__bundle-products__wrapper{display:flex;align-items:center;gap:10px;min-width:0}.kaching-bundles .kaching-bundles__bundle-products__content{display:flex;flex-direction:column;align-items:flex-start;min-width:0}.kaching-bundles .kaching-bundles__bundle-products__link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__bundle-products__image{flex-shrink:0;height:50px;width:auto;max-width:100%;border-radius:var(--kaching-bundle-products-image-border-radius, 0)}.kaching-bundles .kaching-bundles__bundle-products__image-placeholder{flex-shrink:0;height:50px;width:50px}.kaching-bundles .kaching-bundles__bundle-products__title{overflow-wrap:break-word;text-align:center;font-size:13px;color:var(--bar-title-color);font-weight:var(--bar-title-font-weight, 700);font-style:var(--bar-title-font-style)}.kaching-bundles .kaching-bundles__bundle-products__pricing{display:flex;flex-shrink:0;flex-wrap:wrap;justify-content:center;align-items:baseline;gap:5px}.kaching-bundles .kaching-bundles__bundle-products__price{font-size:13px;font-weight:700;color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__bundle-products__full-price{text-decoration:line-through;font-size:12px;color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__bundle-products__unit-price{width:100%;text-align:center;font-size:12px;color:var(--bar-full-price-color, #555);text-transform:uppercase}.kaching-bundles .kaching-bundles__bundle-products--hidden{display:none}.kaching-bundles .kaching-bundles__bundle-products--vertical{flex-direction:column}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__divider{flex-direction:row;width:100%;height:0}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__divider-line{width:auto;height:1px}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__product{flex-direction:row;justify-content:space-between;padding:14px 12px}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__pricing{flex-direction:column;align-items:flex-end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__pricing--with-unit-price{flex-flow:row wrap;justify-content:flex-end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__unit-price{text-align:end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__title{text-align:start}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__image{width:50px;height:auto;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bar-variant-selects{justify-content:flex-start}.kaching-bundles .kaching-bundles__mix-and-match-products{display:flex;flex-direction:column;margin-top:12px;margin-bottom:4px;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:calc(var(--bar-border-radius, 0) * 3 / 4);overflow:hidden}.kaching-bundles .kaching-bundles__mix-and-match-products--hidden{display:none}.kaching-bundles .kaching-bundles__mix-and-match-products__divider{display:flex;flex-direction:row;align-items:center;gap:4px;width:100%;height:0;overflow:visible}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-line{display:flex;flex:1;width:auto;height:1px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-icon{display:flex}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-icon svg{color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__mix-and-match-product{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;gap:12px;align-items:center;padding:12px}.kaching-bundles .kaching-bundles__mix-and-match-product__content{display:flex;flex-direction:column;gap:6px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-product__pricing{display:flex;justify-content:flex-end}.kaching-bundles .kaching-bundles__mix-and-match-product__pricing .kaching-bundles__bundle-products__pricing{flex-direction:column;align-items:flex-end;gap:0}.kaching-bundles .kaching-bundles__mix-and-match-product__image-link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-product__image{flex-shrink:0;height:50px;width:auto;max-width:100%;border-radius:var(--kaching-bundle-products-image-border-radius, 0)}.kaching-bundles .kaching-bundles__mix-and-match-product__image-placeholder{height:50px;width:50px}.kaching-bundles .kaching-bundles__mix-and-match-product__title-link{align-self:flex-start;text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-product__title{overflow-wrap:break-word;text-align:start;font-size:13px;color:var(--bar-title-color);font-weight:var(--bar-title-font-weight, 700);font-style:var(--bar-title-font-style)}.kaching-bundles .kaching-bundles__mix-and-match-product__swap-button{display:inline-flex;align-items:center;justify-content:center;padding:8px 12px;border-radius:var(--bar-border-radius, 8px);background-color:var(--collection-product-button-color, #2b2b2b);color:var(--collection-product-button-text-color, #ffffff);font-size:13px;line-height:1.2;text-align:center;cursor:pointer;white-space:nowrap}.kaching-bundles .kaching-bundles__mix-and-match-products__placeholder{display:flex;align-items:center;justify-content:center;padding:14px 12px;color:#0006;font-style:italic}.kaching-bundles .kaching-bundles__checkbox-upsells__upsell .kaching-bundles__bar-main{gap:10px}.kaching-bundles .kaching-bundles__checkbox-upsells__upsell .kaching-bundles__selling-plan-select{margin-top:5px}.kaching-bundles .kaching-bundles__checkbox-upsells__checkbox{all:unset;display:flex;flex-shrink:0;width:20px;height:20px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__checkbox-upsells__checkbox.kaching-bundles__checkbox-upsells__checkbox--selected{border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__checkbox-upsells__image{width:initial;max-width:50px;max-height:50px;border-radius:calc(var(--bar-border-radius, 0) / 2)}.kaching-bundles .kaching-bundles__choose-multiple-gifts-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;justify-content:center;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-choose-multiple-gifts-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__choose-multiple-gifts-modal__content{position:relative;z-index:10000;min-width:min(470px,95%);max-width:700px;max-height:calc(100dvh - 20px);width:100%;display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__choose-multiple-gifts{display:flex;flex-direction:column;border-radius:10px;background-color:#fff;max-height:100%;overflow:hidden}.kaching-bundles .kaching-bundles__choose-multiple-gifts__header{display:flex;align-items:center;justify-content:space-between;padding:16px 16px 0;margin-block:2px 18px;color:var(--kaching-choose-multiple-gifts-text-color, #000);flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-multiple-gifts__products{display:flex;flex-direction:column;gap:16px;padding:0 16px;flex:1;overflow-y:auto;min-height:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{display:flex;align-items:center;justify-content:space-between;gap:20px}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{gap:12px}}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{flex-direction:column;align-items:stretch;gap:12px}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-container{display:flex;align-items:center;gap:12px;min-width:0;flex:1}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-container{gap:8px}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-choose-multiple-gifts-photo-size, 100px);max-height:calc(var(--kaching-choose-multiple-gifts-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-choose-multiple-gifts-text-size, 14px);color:var(--kaching-choose-multiple-gifts-text-color, #000)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selectors{display:flex;flex-direction:column;gap:8px;margin-top:8px;min-width:0;max-width:100%}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-row{display:flex;align-items:flex-start;gap:8px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-counter{display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:24px;height:24px;font-size:12px;color:#000}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-content{flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-with-counter{display:flex;align-items:center;gap:8px;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-wrapper{flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__subtitle{font-size:14px;font-weight:400;color:var(--kaching-choose-multiple-gifts-text-color, #000)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-price{font-size:14px;font-weight:650;color:var(--kaching-choose-multiple-gifts-price-color, #f04438)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-choose-multiple-gifts-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;display:flex;justify-content:center;align-items:center;border:none;font-weight:600;padding:10px 12px;line-height:1.4;border-radius:8px;cursor:pointer;font-size:var(--kaching-choose-multiple-gifts-button-size, 16px);background-color:var(--kaching-choose-multiple-gifts-button-color, #7f56d9);color:var(--kaching-choose-multiple-gifts-button-text-color, #fff)}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button{flex:1}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button--disabled{background-color:#eaecf0;color:#98a2b3;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button--selected{display:flex;align-items:center;gap:8px;background-color:#fff;color:#414651;border:1px solid #d5d7da}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px;margin-top:16px;padding:16px;border-top:1px solid #e5e5e3;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-text{font-size:14px;font-weight:400;color:#535862;flex:1;min-width:0;overflow-wrap:break-word}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-buttons{display:flex;gap:8px;flex:1;min-width:0;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;height:40px;min-width:80px;font-size:14px;font-weight:600;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:1;box-shadow:0 1px 2px #0a0d120d}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--cancel{background-color:#fff;border:1px solid #d5d7da;color:#414651}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--confirm{background-color:#000;color:#fff}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--confirm:disabled{background-color:#eaecf0;border:1px solid #e9eaeb;color:#98a2b3;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{display:flex;align-items:center;gap:12px;flex-shrink:0}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{gap:8px}}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{flex-direction:row-reverse;justify-content:space-between;flex-shrink:1}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity{display:flex;align-items:center;justify-content:space-between;width:72px;height:42px;border:1px solid #d6d6d6;border-radius:8px;overflow:hidden}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button{all:unset;display:flex;align-items:center;justify-content:center;width:28px;height:100%;cursor:pointer;color:#424242}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button[aria-disabled=true]{opacity:.4;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button img{filter:brightness(0) saturate(100%) invert(24%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(96%) contrast(89%)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-value{font-size:14px;font-weight:600;color:#414651}body:has(.kaching-bundles__choose-multiple-gifts-modal){overflow:hidden}.kaching-bundles .kaching-bundles__mix-and-match-choose-product-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-mix-and-match-choose-product-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__mix-and-match-choose-product-modal__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__mix-and-match-choose-product{display:flex;flex-direction:column;padding:16px;border-radius:10px;background-color:#fff}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__header{display:flex;align-items:center;justify-content:space-between;margin-block:2px 18px;color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__products{display:flex;flex-direction:column;gap:16px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__empty-state{display:flex;flex-direction:column;align-items:center;text-align:center;color:#4b5565}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product{display:flex;align-items:center;justify-content:space-between;gap:20px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-container{display:flex;align-items:center;gap:12px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-mix-and-match-choose-product-photo-size, 100px);max-height:calc(var(--kaching-mix-and-match-choose-product-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-mix-and-match-choose-product-text-size, 14px);color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__subtitle{font-size:14px;font-weight:400;color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-price{font-size:14px;font-weight:650;color:var(--kaching-mix-and-match-choose-product-price-color, #f04438)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-mix-and-match-choose-product-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-option-names.kaching-bundles__bar-variant-names{color:inherit;margin-block:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;border:none;font-weight:600;padding:12px;line-height:1.2;border-radius:8px;cursor:pointer;font-size:var(--kaching-mix-and-match-choose-product-button-size, 16px);background-color:var(--kaching-mix-and-match-choose-product-button-color, #7f56d9);color:var(--kaching-mix-and-match-choose-product-button-text-color, #fff)}body:has(.kaching-bundles__mix-and-match-choose-product-modal){overflow:hidden}.kaching-bundles .kaching-bundles__bar-collection-products{display:flex;flex-direction:column;gap:5px;margin-top:5px}.kaching-bundles .kaching-bundles__collection-product{display:flex;gap:16px;align-items:center;justify-content:space-between}.kaching-bundles .kaching-bundles__collection-product .kaching-bundles__bar-variant-names{display:none;margin-block:0}.kaching-bundles .kaching-bundles__collection-product__image--default{background-color:#fff;border:1px solid #e9e9e9;color:#000}.kaching-bundles .kaching-bundles__collection-product--require-selection{padding:8px;border-radius:12px;background-color:var(--kaching-collection-breaks-require-selection-background-color)}.kaching-bundles .kaching-bundles__collection-product--require-selection .kaching-bundles__collection-product__image--default{border-color:var(--kaching-collection-breaks-require-selection-text-color);color:var(--kaching-collection-breaks-require-selection-text-color)}.kaching-bundles .kaching-bundles__collection-breaks-alert{display:flex;align-items:center;gap:8px;margin-top:10px;padding:8px 12px;border-radius:12px;font-size:12px;background-color:var(--kaching-collection-breaks-require-selection-background-color);color:var(--kaching-collection-breaks-require-selection-text-color)}.kaching-bundles .kaching-bundles__collection-breaks-alert__icon{flex-shrink:0;width:16px;height:16px}.kaching-bundles .kaching-bundles__collection-product__main{display:flex;gap:16px;align-items:center;min-width:0}.kaching-bundles .kaching-bundles__collection-product__content{display:flex;flex-direction:column;gap:3px;min-width:0}.kaching-bundles .kaching-bundles__collection-product__link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__collection-product__image{flex-shrink:0;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-collection-breaks-product-photo-size, 40px);border-radius:var(--kaching-collection-breaks-image-border-radius, 0)}.kaching-bundles .kaching-bundles__collection-product__title{font-size:16px;color:var(--kaching-collection-breaks-product-title-color, #000)}.kaching-bundles .kaching-bundles__collection-product__choose-product-image{cursor:pointer;line-height:0}.kaching-bundles .kaching-bundles__collection-product__choose-product-button{cursor:pointer;color:#fff;font-size:12px;line-height:1.4;padding:6px 14px;border-radius:8px;background-color:var(--kaching-collection-breaks-button-color, #333)}.kaching-bundles .kaching-bundles__collection-product__remove-button{display:flex;align-items:center;justify-content:center;height:24px;width:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-choose-product-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__choose-product-modal__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__choose-product{display:flex;flex-direction:column;padding:16px;border-radius:10px;background-color:#fff}.kaching-bundles .kaching-bundles__choose-product__header{display:flex;align-items:center;justify-content:space-between;margin-block:2px 18px;color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__choose-product__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__products{display:flex;flex-direction:column;gap:16px}.kaching-bundles .kaching-bundles__choose-product__controls{display:flex;align-items:center;gap:10px;margin-bottom:14px}.kaching-bundles .kaching-bundles__choose-product__search-field{position:relative;flex:1 1 auto;min-width:0}.kaching-bundles .kaching-bundles__choose-product__search-icon{position:absolute;top:50%;left:12px;transform:translateY(-50%);width:16px;height:16px;pointer-events:none}.kaching-bundles .kaching-bundles__choose-product__search-input{box-sizing:border-box;width:100%;padding:10px 12px 10px 36px;border:1px solid #d5d7da;border-radius:8px;font-size:14px;color:var(--kaching-choose-product-text-color, #000);background-color:#fff}.kaching-bundles .kaching-bundles__choose-product__sort{position:relative;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-product__sort-button{display:inline-flex;align-items:center;gap:8px;padding:10px 12px;border:1px solid #d5d7da;border-radius:8px;background:#fff;color:var(--kaching-choose-product-text-color, #000);font-size:14px;line-height:1;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__sort-icon{width:16px;height:16px;display:block}.kaching-bundles .kaching-bundles__choose-product__sort-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:2;min-width:210px;display:flex;flex-direction:column;border:1px solid #d5d7da;border-radius:10px;background:#fff;box-shadow:0 8px 24px #10182824;overflow:hidden}.kaching-bundles .kaching-bundles__choose-product__sort-option{display:flex;align-items:center;justify-content:space-between;gap:12px;border:none;background:#fff;text-align:start;padding:10px 12px;font-size:14px;color:var(--kaching-choose-product-text-color, #000);cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__sort-option-check{flex-shrink:0;width:16px;height:16px;display:block}.kaching-bundles .kaching-bundles__choose-product__sort-option:hover{background:#f8fafc}.kaching-bundles .kaching-bundles__choose-product__empty-state{display:flex;flex-direction:column;align-items:center;text-align:center;color:#4b5565}.kaching-bundles .kaching-bundles__choose-product__empty-state-icon-wrapper{display:flex;align-items:center;justify-content:center;width:48px;height:48px;margin-bottom:16px}.kaching-bundles .kaching-bundles__choose-product__empty-state-icon{width:48px;height:48px}.kaching-bundles .kaching-bundles__choose-product__empty-state-title{font-size:18px;font-weight:500;color:#181d27}.kaching-bundles .kaching-bundles__choose-product__empty-state-description{margin-top:8px;font-size:14px;color:#535862}.kaching-bundles .kaching-bundles__choose-product__empty-state-clear-button{margin-top:16px;padding:10px 16px;border:1px solid #d5d7da;border-radius:8px;background:#fff;color:#414651;font-size:14px;font-weight:600}.kaching-bundles .kaching-bundles__choose-product__product{display:flex;align-items:center;justify-content:space-between;gap:20px}.kaching-bundles .kaching-bundles__choose-product__product-container{display:flex;align-items:center;gap:12px;min-width:0}.kaching-bundles .kaching-bundles__choose-product__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-product__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-choose-product-photo-size, 100px);max-height:calc(var(--kaching-choose-product-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__choose-product__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__choose-product__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__choose-product__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-choose-product-text-size, 14px);color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__subtitle{font-size:14px;font-weight:400;color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__choose-product__product-price{font-size:14px;font-weight:650;color:var(--kaching-choose-product-price-color, #f04438)}.kaching-bundles .kaching-bundles__choose-product__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-choose-product-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__choose-product__product-option-names.kaching-bundles__bar-variant-names{color:inherit;margin-block:0}.kaching-bundles .kaching-bundles__choose-product__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;border:none;font-weight:600;padding:12px;line-height:1.2;border-radius:8px;cursor:pointer;font-size:var(--kaching-choose-product-button-size, 16px);background-color:var(--kaching-choose-product-button-color, #7f56d9);color:var(--kaching-choose-product-button-text-color, #fff)}body:has(.kaching-bundles__choose-product-modal){overflow:hidden}.kaching-bundles .kaching-bundles__free-gift{display:flex;align-items:center;justify-content:space-between;margin-inline:1px;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);gap:5px 10px;background-color:var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__free-gift:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__free-gift.kaching-bundles__free-gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__free-gift__link{pointer-events:none}.kaching-bundles .kaching-bundles__free-gift__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__free-gift__main:has(.kaching-bundles__swatch-buttons){overflow-x:auto}.kaching-bundles .kaching-bundles__free-gift__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__free-gift__content--clickable{cursor:pointer}.kaching-bundles .kaching-bundles__free-gift__add-button{all:unset;display:flex;cursor:pointer;line-height:0;padding:4px;margin:-4px -4px -4px -6px;color:var(--kaching-free-gift-text-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__add-button{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__text{color:var(--kaching-free-gift-text-color, #000);font-size:var(--kaching-free-gift-font-size, 13px);font-weight:var(--kaching-free-gift-font-weight, bold);font-style:var(--kaching-free-gift-font-style, normal)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__text{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-free-gift-image-height, 30px);border-radius:var(--kaching-free-gift-image-border-radius, 0)}.kaching-bundles .kaching-bundles__free-gift__full-price{flex-shrink:0;text-decoration:line-through;font-size:calc(var(--kaching-free-gift-font-size, 13px) - 1px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--kaching-free-gift-text-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__full-price{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__divider{height:1px;display:flex}.kaching-bundles .kaching-bundles__free-gift-summary{gap:8px;justify-content:flex-start}.kaching-bundles .kaching-bundles__free-gift-summary__images{display:flex;flex-shrink:0;align-items:center}.kaching-bundles .kaching-bundles__free-gift-summary__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-free-gift-image-height, 30px);border-radius:var(--kaching-free-gift-image-border-radius, 0);margin-inline-start:-8px;border:1px solid var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__free-gift-summary__image:first-child{margin-inline-start:0}.kaching-bundles .kaching-bundles__free-gift-summary__image--no-border{border-color:transparent}.kaching-bundles .kaching-bundles__upsell{display:flex;align-items:center;justify-content:space-between;position:relative;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);margin-inline:1px;gap:5px 10px;background-color:var(--kaching-upsell-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__upsell.kaching-bundles__upsell--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__upsell--badge-border-all{margin:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-top{margin-top:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-bottom{margin-bottom:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-left{min-height:var(--badge-border-min-length, auto);margin-left:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-right{min-height:var(--badge-border-min-length, auto);margin-right:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--all{inset:calc(-1 * var(--badge-border-thickness, 22px))}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--top{inset:calc(-1 * var(--badge-border-thickness, 22px)) 0 auto;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--bottom{inset:auto 0 calc(-1 * var(--badge-border-thickness, 22px));height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--left{inset:0 auto 0 calc(-1 * var(--badge-border-thickness, 22px));width:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--right{inset:0 calc(-1 * var(--badge-border-thickness, 22px)) 0 auto;width:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__upsell__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__upsell__link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__upsell__image{width:auto;height:var(--kaching-upsell-image-height, 30px);border-radius:var(--kaching-upsell-image-border-radius, 0)}.kaching-bundles .kaching-bundles__upsell__checkbox{all:unset;display:flex;flex-shrink:0;width:16px;height:16px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;margin-inline-end:4px;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell__checkbox.kaching-bundles__upsell__checkbox--selected{border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell__text{display:flex;min-height:30px;align-items:center;cursor:pointer;overflow-wrap:break-word;color:var(--kaching-upsell-text-color, #000);font-size:var(--kaching-upsell-font-size, 13px);font-weight:var(--kaching-upsell-font-weight, bold);font-style:var(--kaching-upsell-font-style, normal)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell__text{color:var(--kaching-upsell-selected-text-color, #000)}.kaching-bundles .kaching-bundles__upsell__pricing{align-items:flex-end;display:flex;flex-direction:column;flex-shrink:0}.kaching-bundles .kaching-bundles__upsell__pricing-row{display:flex;align-items:baseline;gap:6px}.kaching-bundles .kaching-bundles__upsell__price{font-size:var(--kaching-upsell-font-size, 13px);font-weight:var(--bar-title-font-weight);font-style:var(--bar-title-font-style);color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__upsell__pricing-row--secondary .kaching-bundles__upsell__price{font-size:calc(var(--kaching-upsell-font-size, 13px) - 1px)}.kaching-bundles .kaching-bundles__upsell__full-price,.kaching-bundles .kaching-bundles__upsell__unit-price{font-size:calc(var(--kaching-upsell-font-size, 13px) - 1px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__upsell__full-price{text-decoration:line-through}.kaching-bundles .kaching-bundles__upsell__unit-price{text-transform:uppercase}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__free-gift{flex-direction:column;padding-inline-end:8px}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__upsell{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__upsell__pricing{flex-direction:row;gap:5px;align-items:center}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-free-gift-selected-background-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-all .kaching-bundles__free-gift:last-child,.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__free-gift:last-child{margin-inline:0;margin-block-end:0;border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__free-gift:last-child{border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-upsell-selected-background-color, rgba(0, 0, 0, .2))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-all,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-left{margin-left:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-all,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-right{margin-right:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-all:last-child,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-bottom:last-child{margin-block-end:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gifts{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift{display:flex;align-items:center;justify-content:space-between;margin-inline:1px;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);gap:5px 10px;background-color:var(--bar-border-color, #fff)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__link{pointer-events:none}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__main:has(.kaching-bundles__swatch-buttons){overflow-x:auto}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-deal-bar-progressive-gift-image-size, 40px);border-radius:var(--kaching-deal-bar-progressive-gift-corner-radius, 0)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-text-color, #000);font-size:var(--kaching-deal-bar-progressive-gift-text-size, 14px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-selected-text-color, #fff);font-weight:500}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__labels{display:flex;align-items:center;gap:5px}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__label{background-color:var(--kaching-deal-bar-progressive-gift-label-background-color);color:var(--kaching-deal-bar-progressive-gift-label-text-color);font-size:var(--kaching-deal-bar-progressive-gift-label-text-size, 12px);padding:2px 8px;border-radius:16px;white-space:nowrap;font-weight:500}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__label-crossed-out{text-decoration:line-through}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__lock-icon{display:flex;align-items:center;justify-content:center;color:var(--kaching-deal-bar-progressive-gift-locked-icon-color, #667085)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__lock-icon svg{width:auto;height:100%}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--locked .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-locked-text-color, #555);font-size:var(--kaching-deal-bar-progressive-gift-locked-text-size, 14px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--locked .kaching-bundles__deal-bar-progressive-gift__label{background-color:var(--kaching-deal-bar-progressive-gift-locked-label-background-color);color:var(--kaching-deal-bar-progressive-gift-locked-label-text-color);font-size:var(--kaching-deal-bar-progressive-gift-locked-label-text-size, 12px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--bar-selected-border-color)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__product-personalisation{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;gap:10px;background-color:#fafafa;border-radius:calc(var(--bar-border-radius, 10px) - 4px);border:1px dashed #d6d6d6;margin-top:12px;cursor:pointer}.kaching-bundles .kaching-bundles__product-personalisation--filled{border-style:solid}.kaching-bundles .kaching-bundles__product-personalisation__main{display:flex;align-items:center;gap:10px;min-width:0;flex:1}.kaching-bundles .kaching-bundles__product-personalisation__image-wrapper{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--kaching-product-personalisation-image-height, 40px);height:var(--kaching-product-personalisation-image-height, 40px);background-color:#fff;border-radius:calc(var(--bar-border-radius, 10px) - 6px);border:1px solid #d6d6d6}.kaching-bundles .kaching-bundles__product-personalisation__image{display:flex;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.kaching-bundles .kaching-bundles__product-personalisation__image--default{width:70%;height:70%;-o-object-fit:contain;object-fit:contain;opacity:.7;color:#000}.kaching-bundles .kaching-bundles__product-personalisation__content{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}.kaching-bundles .kaching-bundles__product-personalisation__title{color:#000;font-size:14px;font-weight:600;font-style:normal}.kaching-bundles .kaching-bundles__product-personalisation__subtitle{color:#555;font-size:13px;font-weight:400;font-style:normal}.kaching-bundles .kaching-bundles__product-personalisation__pricing{display:flex;flex-direction:column;align-items:flex-end;flex-shrink:0;gap:2px}.kaching-bundles .kaching-bundles__product-personalisation__price{font-size:14px;font-weight:500;font-style:normal;color:#000}.kaching-bundles .kaching-bundles__product-personalisation__compare-at-price{font-size:12px;font-weight:400;font-style:normal;color:#888;line-height:1.2;text-decoration:line-through}.kaching-bundles .kaching-bundles__product-personalisation__price .kaching-bundles__product-personalisation__unit-label{font-size:calc(var(--kaching-bundles-unit-label-font-size, 14px) - 4px);font-weight:var(--kaching-bundles-unit-label-font-weight, normal);font-style:var(--kaching-bundles-unit-label-font-style, normal)}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation{flex-direction:column;align-items:stretch;text-align:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation__main{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation__pricing{flex-direction:row;justify-content:center;gap:8px;align-items:baseline}.kaching-bundles .kaching-bundles__personalisation-modal-overlay{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-product-personalisation-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__personalisation-modal-overlay--inline{position:relative;z-index:auto;inset:auto;padding:20px;border-radius:var(--kaching-product-personalisation-radius, 16px)}.kaching-bundles .kaching-bundles__personalisation-modal-overlay__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__personalisation-modal{display:flex;flex-direction:column;padding:var(--kaching-product-personalisation-gap-0, 20px);border-radius:var(--kaching-product-personalisation-radius, 16px);background-color:#fff}.kaching-bundles .kaching-bundles__personalisation-modal__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--kaching-product-personalisation-gap-0, 20px);color:var(--kaching-product-personalisation-primary-text-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__heading{margin:0;font-weight:650;font-size:var(--kaching-product-personalisation-font-0, 24px)}.kaching-bundles .kaching-bundles__personalisation-modal__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__personalisation-modal__items{display:flex;flex-direction:column;gap:var(--kaching-product-personalisation-gap-1, 16px);padding:var(--kaching-product-personalisation-gap-1, 16px);border:1px solid #e9e9e9;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px)}.kaching-bundles .kaching-bundles__personalisation-modal__item{display:flex;flex-direction:column;gap:var(--kaching-product-personalisation-gap-2, 12px)}.kaching-bundles .kaching-bundles__personalisation-modal__item-info{display:flex;align-items:center;gap:var(--kaching-product-personalisation-gap-2, 12px)}.kaching-bundles .kaching-bundles__personalisation-modal__item-image-wrapper{flex-shrink:0;width:var(--kaching-product-personalisation-image-size, 48px);height:var(--kaching-product-personalisation-image-size, 48px);border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);border:1px solid #e9e9e9;overflow:hidden}.kaching-bundles .kaching-bundles__personalisation-modal__item-image{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__personalisation-modal__item-details{display:flex;flex-direction:column;gap:2px;min-width:0}.kaching-bundles .kaching-bundles__personalisation-modal__item-title{font-size:var(--kaching-product-personalisation-text-size, 16px);font-weight:600;color:var(--kaching-product-personalisation-primary-text-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__item-variant{font-size:var(--kaching-product-personalisation-font-3, 12px);color:var(--kaching-product-personalisation-secondary-text-color, rgb(115, 115, 115))}.kaching-bundles .kaching-bundles__personalisation-modal__input-wrapper{display:flex;flex-direction:column;gap:4px}.kaching-bundles .kaching-bundles__personalisation-modal__input-container{position:relative;display:flex;align-items:center}.kaching-bundles .kaching-bundles__personalisation-modal__input-clear{all:unset;position:absolute;right:12px;display:flex;align-items:center;justify-content:center;width:16px;height:16px;cursor:pointer}.kaching-bundles .kaching-bundles__personalisation-modal__input{width:100%;padding:10px 12px;border:1px solid #e9e9e9;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);font-size:var(--kaching-product-personalisation-font-2, 16px);outline:none!important;box-shadow:none!important;box-sizing:border-box}.kaching-bundles .kaching-bundles__personalisation-modal__input:focus{border-color:#333;outline:none!important;box-shadow:none!important}.kaching-bundles .kaching-bundles__personalisation-modal__input:focus-visible{outline:2px solid #333!important;outline-offset:-1px}.kaching-bundles .kaching-bundles__personalisation-modal__input::-moz-placeholder{color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input::placeholder{color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input--with-clear{padding-right:40px}.kaching-bundles .kaching-bundles__personalisation-modal__input--error{border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input--error:focus{border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input-counter{font-size:var(--kaching-product-personalisation-font-3, 12px);color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input-counter--error{color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input-error{font-size:var(--kaching-product-personalisation-font-3, 12px);color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__actions{display:flex;gap:var(--kaching-product-personalisation-gap-1, 16px);margin-top:var(--kaching-product-personalisation-gap-0, 20px)}.kaching-bundles .kaching-bundles__personalisation-modal__button{flex:1;padding:12px 16px;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);font-size:var(--kaching-product-personalisation-font-2, 16px);font-weight:500;cursor:pointer;border:none;box-shadow:0 1px 2px #0a0d120d}.kaching-bundles .kaching-bundles__personalisation-modal__button--cancel{background:#fff;color:#333;border:1px solid #d5d7da}.kaching-bundles .kaching-bundles__personalisation-modal__button--confirm{color:var(--kaching-product-personalisation-button-text-color, rgb(255, 255, 255));border:1px solid var(--kaching-product-personalisation-button-color, rgb(0, 0, 0));background:var(--kaching-product-personalisation-button-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__button--disabled{cursor:not-allowed;border:1px solid #e9eaeb;background:#eaecf0;color:#98a2b3}.kaching-bundles .kaching-bundles__progressive-gifts{display:flex;flex-direction:column;gap:calc(10px * var(--block-spacing, 1) + 4px);margin-top:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__header{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__progressive-gifts__title{color:var(--kaching-bundles-progressive-gifts-title-color, #000);text-align:var(--kaching-bundles-progressive-gifts-title-alignment, center);font-weight:var(--kaching-bundles-progressive-gifts-title-weight, bold);font-style:var(--kaching-bundles-progressive-gifts-title-style, normal);font-size:var(--kaching-bundles-progressive-gifts-title-size, 20px)}.kaching-bundles .kaching-bundles__progressive-gifts__subtitle{color:var(--kaching-bundles-progressive-gifts-subtitle-color, #000);text-align:var(--kaching-bundles-progressive-gifts-subtitle-alignment, center);font-weight:var(--kaching-bundles-progressive-gifts-subtitle-weight, 450);font-style:var(--kaching-bundles-progressive-gifts-subtitle-style, normal);font-size:var(--kaching-bundles-progressive-gifts-subtitle-size, 16px)}.kaching-bundles .kaching-bundles__progressive-gifts__gifts{display:grid;grid-template-columns:repeat(auto-fit,minmax(0,1fr));justify-content:center;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gift{position:relative;display:flex;flex-direction:column;align-items:center;padding:calc(10px * var(--block-spacing, 1));gap:calc(6px * var(--block-spacing, 1));border-radius:var(--kaching-bundles-progressive-gifts-border-radius);background-color:var(--kaching-bundles-progressive-gifts-background-color);box-shadow:inset 0 0 0 2px var(--kaching-bundles-progressive-gifts-border-color, #000)}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked{background-color:var(--kaching-bundles-progressive-gifts-locked-background-color);box-shadow:inset 0 0 0 1px var(--kaching-bundles-progressive-gifts-locked-border-color, rgba(0, 0, 0, .3));cursor:pointer}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:hover,.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:focus{box-shadow:inset 0 0 0 2px var(--kaching-bundles-progressive-gifts-locked-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:focus{outline:none}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__progressive-gifts__gift__content{display:flex;flex-direction:column;max-width:100%;gap:calc(6px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image-wrapper{display:flex;flex-shrink:0;align-items:center;justify-content:center;height:var(--kaching-bundles-progressive-gifts-image-size, 100px);width:initial;max-width:100%;margin-top:max(0px,(100px - var(--kaching-bundles-progressive-gifts-image-size, 100px)) / 5);color:var(--kaching-bundles-progressive-gifts-locked-icon-color, #667085);border-radius:calc(var(--kaching-bundles-progressive-gifts-border-radius) / 2);background-color:transparent}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image-wrapper svg{width:auto;height:100%}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image{-o-object-fit:contain;object-fit:contain;max-height:100%;max-width:100%;border-radius:calc(var(--kaching-bundles-progressive-gifts-border-radius) / 2);width:initial}.kaching-bundles .kaching-bundles__progressive-gifts__gift__details{display:flex;flex-direction:column;gap:4px;align-items:center;min-width:0}.kaching-bundles .kaching-bundles__progressive-gifts__gift__details__content{display:flex;align-items:center;gap:8px}.kaching-bundles .kaching-bundles__progressive-gifts__gift__title{font-weight:500;text-align:center;color:var(--kaching-bundles-progressive-gifts-text-color, #000);font-size:var(--kaching-bundles-progressive-gifts-text-size, 14px)}.kaching-bundles .kaching-bundles__progressive-gifts__gift__title.kaching-bundles__progressive-gifts__gift__title--locked{color:var(--kaching-bundles-progressive-gifts-locked-text-color, #555);font-size:var(--kaching-bundles-progressive-gifts-locked-text-size, 14px)}.kaching-bundles .kaching-bundles__progressive-gifts__gift:not(.kaching-bundles__progressive-gifts__gift--locked) .kaching-bundles__progressive-gifts__gift__image,.kaching-bundles .kaching-bundles__progressive-gifts__gift:not(.kaching-bundles__progressive-gifts__gift--locked) .kaching-bundles__progressive-gifts__gift__title{animation:kaching-progressive-gift-unlock .6s ease-out}@keyframes kaching-progressive-gift-unlock{0%{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label{display:flex;flex-direction:row;align-items:center;position:absolute;top:-8px;left:50%;transform:translate(-50%);line-height:1;gap:calc(5px * var(--block-spacing, 1));padding:calc(8px * var(--block-spacing, 1));background-color:var(--kaching-bundles-progressive-gifts-label-background-color, #eee);border-radius:var(--kaching-bundles-progressive-gifts-border-radius)}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label__text{font-weight:450;color:var(--kaching-bundles-progressive-gifts-label-text-color, #777);font-size:var(--kaching-bundles-progressive-gifts-label-text-size, 12px);white-space:nowrap}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label__text.kaching-bundles__progressive-gifts__gift__label__text--crossed-out{text-decoration:line-through}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift{flex-direction:row;justify-content:space-between;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__content{flex-direction:row;align-items:center;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__details{align-items:flex-start}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__image-wrapper{margin-top:0;height:var(--kaching-bundles-progressive-gifts-image-size, 50px);width:var(--kaching-bundles-progressive-gifts-image-size, 50px)}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__title{text-align:start}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__label{position:initial;transform:none}.kaching-bundles .kaching-bundles-savings-summary{display:flex;align-items:center;justify-content:var(--kaching-bundles-savings-summary-alignment, flex-start);gap:8px;padding:12px 16px;margin-top:calc(10px * var(--block-spacing, 1));background-color:var(--kaching-bundles-savings-summary-background-color, #f5fcf7);color:var(--kaching-bundles-savings-summary-text-color, #1b5933);border-style:solid;border-color:var(--kaching-bundles-savings-summary-border-color, #457757);border-width:var(--kaching-bundles-savings-summary-border-width, 1px);border-radius:var(--kaching-bundles-savings-summary-border-radius, 8px);font-size:var(--kaching-bundles-savings-summary-title-font-size, 14px);font-style:var(--kaching-bundles-savings-summary-title-font-style, normal);font-weight:var(--kaching-bundles-savings-summary-title-font-weight, 500)}.kaching-bundles .kaching-bundles-savings-summary__icon{display:flex;align-items:center;width:1.2em;height:1.2em;flex-shrink:0;color:var(--kaching-bundles-savings-summary-icon-color, #1c5632)}.kaching-bundles .kaching-bundles-savings-summary__icon svg{width:100%;height:100%}.kaching-bundles .kaching-bundles-savings-summary__icon img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles-savings-summary__value{color:var(--kaching-bundles-savings-summary-value-color, #000000)}.kaching-bundles .kaching-bundles__scratch-off{position:relative;display:flex;flex-direction:column;gap:calc(10px * var(--block-spacing, 1));margin:calc(5px * var(--block-spacing, 1)) 0}.kaching-bundles .kaching-bundles__scratch-off>.kaching-bundles__bar{margin:0}.kaching-bundles .kaching-bundles__scratch-off--unscratched{-webkit-user-select:none;-moz-user-select:none;user-select:none}.kaching-bundles .kaching-bundles__scratch-off--unscratched .kaching-bundles__bar{pointer-events:none}.kaching-bundles .kaching-bundles__scratch-off--revealing .kaching-bundles__bar-most-popular{animation:kaching-scratch-off-badge-pop .3s cubic-bezier(.34,1.56,.64,1) both}@keyframes kaching-scratch-off-badge-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.kaching-bundles .kaching-bundles__scratch-off--unscratched:not(.kaching-bundles__scratch-off--revealing) .kaching-bundles__bar-most-popular{visibility:hidden}.kaching-bundles .kaching-bundles__scratch-off--loading{visibility:hidden}.kaching-bundles .kaching-bundles__scratch-off-canvas{position:absolute;inset:0;width:100%;height:100%;border-radius:var(--bar-border-radius, 8px);cursor:pointer;touch-action:none;transition:opacity .3s ease-out;z-index:11}.kaching-bundles .kaching-bundles__scratch-off-canvas--revealing{opacity:0;pointer-events:none}.kaching-bundles .kaching-bundles__scratch-off-hint{position:absolute;inset:0;margin:auto;width:calc(100% - 10px);height:calc(100% - 10px);max-width:317px;max-height:143px;pointer-events:none;opacity:.4;transition:opacity .3s ease-out;z-index:12}.kaching-bundles .kaching-bundles__scratch-off-hint--hidden{opacity:0}.kaching-bundles .kaching-bundles__scratch-off-hint-path{stroke-dasharray:1200;stroke-dashoffset:1200;animation:kaching-scratch-off-hint-draw 2.8s cubic-bezier(.4,0,.2,1) infinite}@keyframes kaching-scratch-off-hint-draw{0%{stroke-dashoffset:1200;opacity:1}60%{stroke-dashoffset:0;opacity:1}80%{stroke-dashoffset:0;opacity:1}to{stroke-dashoffset:0;opacity:0}}.kaching-bundles .kaching-bundles__scratch-off-title{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;color:var(--scratch-off-title-color);font-weight:700;font-size:var(--scratch-off-title-size);line-height:1.25;text-align:center;pointer-events:none;transition:opacity .3s ease-out;z-index:12}.kaching-bundles .kaching-bundles__scratch-off-title--hidden{opacity:0}.kaching-bundles .kaching-bundles-sticky-atc{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:16px;box-shadow:0 0 10px #00000040;background-color:var(--kaching-bundles-sticky-atc-background-color, #fff)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__content{display:flex;align-items:center;gap:16px}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__image{display:var(--kaching-bundles-sticky-atc-image-display, block);width:auto;height:var(--kaching-bundles-sticky-atc-product-photo-size, 40px);border-radius:var(--kaching-bundles-sticky-atc-product-photo-corner-radius, 0)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__title{color:var(--kaching-bundles-sticky-atc-title-color, #000);font-size:var(--kaching-bundles-sticky-atc-title-font-size, 16px);font-style:var(--kaching-bundles-sticky-atc-title-font-style, normal);font-weight:var(--kaching-bundles-sticky-atc-title-font-weight, 400)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__button{all:unset;white-space:nowrap;cursor:pointer;background-color:var(--kaching-bundles-sticky-atc-button-color, #303030);color:var(--kaching-bundles-sticky-atc-button-text-color, #fff);font-size:var(--kaching-bundles-sticky-atc-button-font-size, 16px);font-style:var(--kaching-bundles-sticky-atc-button-font-style, normal);font-weight:var(--kaching-bundles-sticky-atc-button-font-weight, 400);padding:var(--kaching-bundles-sticky-atc-button-padding, 15px);border-radius:var(--kaching-bundles-sticky-atc-button-corner-radius, 8px)}@media (width < 750px){.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__image{display:var(--kaching-bundles-sticky-atc-image-display-mobile, var(--kaching-bundles-sticky-atc-image-display, block));height:var(--kaching-bundles-sticky-atc-product-photo-size-mobile, var(--kaching-bundles-sticky-atc-product-photo-size, 40px));border-radius:var(--kaching-bundles-sticky-atc-product-photo-corner-radius-mobile, var(--kaching-bundles-sticky-atc-product-photo-corner-radius, 0))}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__title{font-size:var(--kaching-bundles-sticky-atc-title-font-size-mobile, var(--kaching-bundles-sticky-atc-title-font-size, 16px))}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__button{font-size:var(--kaching-bundles-sticky-atc-button-font-size-mobile, var(--kaching-bundles-sticky-atc-button-font-size, 16px));padding:var(--kaching-bundles-sticky-atc-button-padding-mobile, var(--kaching-bundles-sticky-atc-button-padding, 15px));border-radius:var(--kaching-bundles-sticky-atc-button-corner-radius-mobile, var(--kaching-bundles-sticky-atc-button-corner-radius, 8px))}}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal.kaching-bundles__bars{grid-template-columns:repeat(2,1fr)}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal .kaching-bundles__bar-wrapper{padding:10px 7px}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-container{border:2px dashed var(--bar-selected-border-color, #000);box-shadow:none}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-wrapper{margin:-2px}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-variants{display:flex}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__title{display:inline-block;overflow-wrap:break-word;font-weight:700;font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__subtitle{display:inline-block;overflow-wrap:break-word;font-size:var(--kaching-subscriptions-subtitle-font-size, 13px);color:var(--kaching-subscriptions-subtitle-color, #555)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__bar-price{font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__bar-full-price{font-size:var(--kaching-subscriptions-subtitle-font-size, 13px);color:var(--kaching-subscriptions-subtitle-color, #555)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__checkbox{all:unset;display:flex;flex-shrink:0;width:20px;height:20px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--link{display:flex;justify-content:center;align-items:center;padding:8px 0}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__link{all:unset;cursor:pointer;display:inline;text-decoration:underline;text-underline-offset:3px;font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__timer{display:flex;align-items:center;background-color:var(--kaching-bundles-timer-background-color, #000);color:var(--kaching-bundles-timer-text-color, #fff);padding:10px 20px;border-radius:var(--bar-border-radius, 8px);margin-bottom:calc(8px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__timer-title{flex:1;text-align:var(--kaching-bundles-timer-title-alignment, center);font-size:var(--kaching-bundles-timer-title-size, 13px);font-weight:var(--kaching-bundles-timer-title-font-weight, bold);font-style:var(--kaching-bundles-timer-title-font-style, normal)}.kaching-bundles .kaching-bundles__swatch-dropdown{display:flex;position:relative;min-width:0;margin:0}.kaching-bundles .kaching-bundles__swatch{display:flex;flex-shrink:0;background-size:cover;background-position:center;overflow:hidden;position:relative;width:var(--kaching-swatch-size, 20px);height:var(--kaching-swatch-size, 20px);border:1px solid var(--kaching-swatch-border-color, #c2cdd6);background-color:var(--kaching-swatch-color, #fff);background-image:var(--kaching-swatch-image-url, none);border-radius:var(--kaching-swatch-border-radius, 0)}.kaching-bundles .kaching-bundles__swatch.kaching-bundles__swatch--unavailable{border-color:#121212;opacity:.4}.kaching-bundles .kaching-bundles__swatch.kaching-bundles__swatch--unavailable:after{content:"";position:absolute;bottom:0;left:0;width:140%;height:1px;background-color:#121212;transform:rotate(-45deg);transform-origin:left}.kaching-bundles .kaching-bundles__swatches-dropdown__color{display:flex;width:20px;height:20px;border:1px solid #c2cdd6;background-size:cover;background-position:center}.kaching-bundles .kaching-bundles__swatch-dropdown__options{display:flex;flex-direction:column;max-width:400px;max-height:500px;overflow:auto;position:fixed;top:0;left:0;border:1px solid #ccc;background-color:#fff;z-index:1000;box-shadow:0 20px 20px #1a1a1a47}.kaching-bundles .kaching-bundles__swatch-dropdown__option{font-size:14px;font-weight:400;font-style:normal;display:flex;align-items:center;gap:10px;white-space:nowrap;padding-block:10px;padding-inline:10px 60px;border:none;border-bottom:1px solid #dfe3e8;cursor:pointer;color:#000;background:none}.kaching-bundles .kaching-bundles__swatch-dropdown__option:last-child{border-bottom:none}.kaching-bundles .kaching-bundles__swatch-dropdown__option:hover,.kaching-bundles .kaching-bundles__swatch-dropdown__option--focused{background-color:#f0f0f0}.kaching-bundles .kaching-bundles__swatch-buttons{display:flex;overflow:auto}.kaching-bundles .kaching-bundles__swatch-buttons__button{display:flex;align-items:center;box-sizing:border-box;border:none;padding:9px;background:#fff;cursor:pointer;border-top:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-bottom:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button:first-of-type{border-start-start-radius:var(--bar-variant-select-border-radius, 0);border-end-start-radius:var(--bar-variant-select-border-radius, 0);border-inline-start:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button:last-of-type{border-start-end-radius:var(--bar-variant-select-border-radius, 0);border-end-end-radius:var(--bar-variant-select-border-radius, 0);border-inline-end:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected{padding:8px 7px;border:2px solid var(--bar-selected-border-color, #50b83c)}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected:first-of-type{padding-inline-start:8px}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected:last-of-type{padding-inline-end:8px}.kaching-bundles .kaching-bundles__bar-variant__content.kaching-bundles__bar-variant__content--with-option-names{align-items:flex-start}.kaching-bundles .kaching-bundles__bar-variant-option{display:flex;flex-direction:column;align-items:flex-start;gap:4px;min-width:0;max-width:100%}.kaching-bundles .kaching-bundles__bar-variant-option__name{font-size:13px;line-height:1.3}.kaching-bundles .kaching-bundles__bar-variant-option__name-label{font-weight:600}.kaching-bundles .kaching-bundles__bar-variant-option__name-value{font-weight:400;opacity:.85}.kaching-bundles .kaching-bundles__quantity-selector{display:flex;width:-moz-fit-content;width:fit-content;border:1px solid #cccccc;box-sizing:border-box;overflow:hidden;margin-top:5px;border-radius:calc(var(--bar-border-radius, 0) / 2)}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button{display:flex;align-items:center;justify-content:center;width:30px;height:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;background-color:#fff;color:#000;border-radius:0}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button:hover{background-color:#eee}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button.kaching-bundles__quantity-selector__button--disabled{cursor:not-allowed;pointer-events:none}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button.kaching-bundles__quantity-selector__button--disabled img{opacity:.5}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input{all:unset;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;height:30px;width:30px;padding:0;border:1px solid #cccccc;border-top:none;border-bottom:none;background-color:#fff;color:#000;text-align:center;font-size:16px;font-weight:400;box-sizing:border-box}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input::-webkit-outer-spin-button,.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none;margin:0}.kaching-bundles .kaching-bundles__highlights{display:flex;flex-direction:column;gap:8px;padding:10px 0}.kaching-bundles .kaching-bundles__highlights--horizontal{flex-flow:row wrap}.kaching-bundles .kaching-bundles__highlights__item{display:flex;gap:8px}.kaching-bundles .kaching-bundles__highlights__icon{display:flex;align-items:center;flex-shrink:0;color:var(--kaching-highlights-icon-color, #000);width:var(--kaching-highlights-icon-size, 16px);height:var(--kaching-highlights-icon-size, 16px)}.kaching-bundles .kaching-bundles__highlights__icon svg{width:100%;height:100%}.kaching-bundles .kaching-bundles__highlights__icon img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__highlights__text{color:var(--kaching-highlights-text-color, #808080);font-size:var(--kaching-highlights-text-size, 16px);line-height:1.3}.kaching-bundles .kaching-bundles__low-stock-alert{color:var(--kaching-bundles-low-stock-alert-text-color, #ff0909);font-size:14px}.kaching-bundles img{width:initial}.kaching-bundles svg{width:initial;height:initial}.kaching-bundles .kaching-bundles__block{display:flex;flex-direction:column;width:100%;margin-top:15px;margin-bottom:10px;text-align:start;line-height:1.4;font-family:var(--block-font-family, inherit)}.kaching-bundles .kaching-bundles__block--hidden{display:none!important}.kaching-bundles .kaching-bundles__block.kaching-bundles__block--loaded{display:flex}.kaching-bundles .kaching-bundles__block-title{display:flex;align-items:center;text-align:center;gap:8px;margin-top:10px;margin-bottom:10px;color:var(--block-block-title-color, #000);font-size:var(--block-title-font-size, 14px);font-weight:var(--block-title-font-weight, bold);font-style:var(--block-title-font-style)}.kaching-bundles .kaching-bundles__block>.kaching-bundles__block-title:first-child{margin-top:0}.kaching-bundles .kaching-bundles__block-title:before,.kaching-bundles .kaching-bundles__block-title:after{content:"";flex-grow:1;height:2px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bars{display:flex;flex-direction:column;position:relative}.kaching-bundles .kaching-bundles__bars--badge-border-all{--badge-ring-outer: calc( var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px) );padding:var(--badge-ring-outer)}.kaching-bundles .kaching-bundles__bars--badge-border-top{padding-top:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-bottom{padding-bottom:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-left{padding-left:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-right{padding-right:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-left,.kaching-bundles .kaching-bundles__bars--badge-border-right{min-height:var(--badge-border-min-length, auto);border-radius:var(--bar-border-radius, 8px);box-shadow:0 1px 10px var(--badge-border-wrap-color, rgba(0, 0, 0, .12))}.kaching-bundles .kaching-bundles__bars--badge-border-all,.kaching-bundles .kaching-bundles__bars--badge-border-top,.kaching-bundles .kaching-bundles__bars--badge-border-bottom{row-gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__subscriptions-wrapper{position:relative}.kaching-bundles .kaching-bundles__bar{display:flex;flex:1;margin:calc(5px * var(--block-spacing, 1)) 0;position:relative}.kaching-bundles .kaching-bundles__bars--badge-border-all>.kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-all>.kaching-bundles__scratch-off,.kaching-bundles .kaching-bundles__bars--badge-border-top>.kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-top>.kaching-bundles__scratch-off,.kaching-bundles .kaching-bundles__bars--badge-border-bottom>.kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-bottom>.kaching-bundles__scratch-off{margin-block:0}.kaching-bundles .kaching-bundles__bar--disabled{opacity:.3}.kaching-bundles .kaching-bundles__bar-container--sold-out{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--kaching-bundles-show-as-sold-out-opacity, .3)}.kaching-bundles .kaching-bundles__bar-sold-out-badge{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:6px 12px;border-radius:8px;font-weight:600;background-color:var(--kaching-bundles-show-as-sold-out-background-color, #000);color:var(--kaching-bundles-show-as-sold-out-text-color, #fff);font-size:var(--kaching-bundles-show-as-sold-out-text-size, 13px);z-index:10;text-align:center}.kaching-bundles .kaching-bundles__bar>input[type=radio]{display:none}.kaching-bundles .kaching-bundles__bar-image{-o-object-fit:contain;object-fit:contain;height:var(--bar-image-size, 48px);width:var(--bar-image-size, 48px);border-radius:var(--bar-image-border-radius, 0)}.kaching-bundles .kaching-bundles__bar-radio{display:flex;flex-shrink:0;width:20px;height:20px;border-radius:50%;background:#fff;border:3px solid #fff;box-sizing:border-box;box-shadow:0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-radio{background:var(--bar-selected-border-color, #000);box-shadow:0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container{display:flex!important;flex-direction:column;justify-content:center;align-items:initial;position:relative;box-sizing:border-box;cursor:pointer;width:100%;margin:0;padding:0;border:none;background-color:var(--bar-background-color, #fff);border-radius:var(--bar-border-radius);box-shadow:inset 0 0 0 1px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-wrapper{padding:calc(10px * var(--block-spacing, 1)) calc(15px * var(--block-spacing, 1) + 5px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__bar-wrapper{position:relative;z-index:1;flex:1;box-sizing:border-box;min-height:var(--badge-border-min-length, auto);padding:calc(10px * var(--block-spacing, 1)) calc(15px * var(--block-spacing, 1) + 5px);background-color:var(--bar-background-color, #fff);border-radius:var(--bar-border-radius);display:flex;flex-direction:column;justify-content:center}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__bar-wrapper{margin-inline-start:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border-start-start-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__bar-wrapper{margin-inline-end:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border-start-end-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container:hover{opacity:1;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-container:has(:focus-visible){opacity:1;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-container *{letter-spacing:normal;text-transform:initial}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container{cursor:default;background-color:var(--bar-selected-background-color);box-shadow:inset 0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-most-popular{position:absolute;z-index:3}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--simple{top:-8px;right:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--fancy{top:-27px;right:-15px}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--custom{top:-25px;right:-15px}.kaching-bundles .kaching-bundles__bar-most-popular--custom .kaching-bundles__bar-most-popular__custom-image{max-height:var(--badge-size, 56px);width:auto;display:block}.kaching-bundles .kaching-bundles__bar-most-popular svg{color:var(--bar-most-popular-background-color)}.kaching-bundles .kaching-bundles__bar-most-popular svg .most-popular-text{fill:var(--bar-most-popular-color)}.kaching-bundles .kaching-bundles__bar-most-popular--fancy svg{width:var(--badge-size, 102px);height:auto}.kaching-bundles .kaching-bundles__bar-most-popular__content{margin:0 8px;padding:6px 8px;border-radius:0 0 5px 5px;font-family:sans-serif;font-size:var(--badge-text-size, 12px);font-weight:700;line-height:1;color:var(--bar-most-popular-color, #fff);background-color:var(--bar-most-popular-background-color)}.kaching-bundles .kaching-bundles__badge-border{position:absolute;z-index:1;display:flex;box-sizing:border-box;overflow:hidden;align-items:center;justify-content:center;font-family:sans-serif;font-size:max(6px,min(var(--badge-text-size, 12px),var(--badge-border-thickness, 22px) - 6px));font-weight:700;line-height:1;letter-spacing:normal;color:var(--bar-most-popular-color, #fff);background-color:var(--bar-most-popular-background-color, #000)}.kaching-bundles .kaching-bundles__badge-border--top{inset:0 0 auto;height:var(--badge-border-thickness, 22px);border-radius:var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0 0}.kaching-bundles .kaching-bundles__badge-border--bottom{inset:auto 0 0;height:var(--badge-border-thickness, 22px);border-radius:0 0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px)}.kaching-bundles .kaching-bundles__badge-border--left{inset:0 auto 0 0;width:var(--badge-border-thickness, 22px);border-radius:var(--bar-border-radius, 8px) 0 0 var(--bar-border-radius, 8px)}.kaching-bundles .kaching-bundles__badge-border__side{position:absolute;display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap}.kaching-bundles .kaching-bundles__badge-border .kaching-bundles__badge-border__text,.kaching-bundles .kaching-bundles__badge-border .kaching-bundles__badge-border__side{letter-spacing:normal}.kaching-bundles .kaching-bundles__badge-border__curve{position:absolute;inset:0;width:100%;height:100%}.kaching-bundles .kaching-bundles__badge-border__curve text{font-family:sans-serif;font-size:max(6px,min(var(--badge-text-size, 12px),var(--badge-border-thickness, 22px) - 6px));font-weight:700;letter-spacing:normal;fill:var(--bar-most-popular-color, #fff)}.kaching-bundles .kaching-bundles__badge-border--all{inset:0;background-color:transparent;pointer-events:none}.kaching-bundles .kaching-bundles__badge-border__band{display:block;position:absolute;inset:0;padding:var(--badge-border-thickness, 22px);border-radius:calc(var(--bar-border-radius, 8px) + var(--badge-ring-outer));background-color:var(--bar-most-popular-background-color, #000);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}.kaching-bundles .kaching-bundles__badge-border__side--top{inset:0 0 auto;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__badge-border__side--bottom{inset:auto 0 0;height:var(--badge-border-thickness, 22px);transform:rotate(180deg)}.kaching-bundles .kaching-bundles__badge-border__side--left{inset:var(--badge-border-thickness, 22px) auto var(--badge-border-thickness, 22px) 0;width:var(--badge-border-thickness, 22px);writing-mode:vertical-rl;transform:rotate(180deg)}.kaching-bundles .kaching-bundles__badge-border__side--right{inset:var(--badge-border-thickness, 22px) 0 var(--badge-border-thickness, 22px) auto;width:var(--badge-border-thickness, 22px);writing-mode:vertical-rl}.kaching-bundles .kaching-bundles__badge-border--left .kaching-bundles__badge-border__text{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap;text-align:center}.kaching-bundles .kaching-bundles__badge-border--right{inset:0 0 0 auto;width:var(--badge-border-thickness, 22px);border-radius:0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0}.kaching-bundles .kaching-bundles__badge-border--right .kaching-bundles__badge-border__text{writing-mode:vertical-rl;white-space:nowrap;text-align:center}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--all{inset:calc(-1 * var(--badge-ring-outer))}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--top{inset:0 0 auto;height:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0 0;display:flex;align-items:flex-start;justify-content:center;-webkit-mask:linear-gradient(#000,#000) left top/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat;mask:linear-gradient(#000,#000) left top/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--top .kaching-bundles__badge-border__text{display:flex;align-items:center;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--bottom{inset:auto 0 0;height:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:0 0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px);display:flex;align-items:flex-end;justify-content:center;-webkit-mask:linear-gradient(#000,#000) left bottom/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat;mask:linear-gradient(#000,#000) left bottom/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--bottom .kaching-bundles__badge-border__text{display:flex;align-items:center;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--left{inset:0 auto 0 0;width:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:var(--bar-border-radius, 8px) 0 0 var(--bar-border-radius, 8px);display:flex;align-items:center;justify-content:flex-start;-webkit-mask:linear-gradient(#000,#000) left top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat;mask:linear-gradient(#000,#000) left top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--right{inset:0 0 0 auto;width:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0;display:flex;align-items:center;justify-content:flex-end;-webkit-mask:linear-gradient(#000,#000) right top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat;mask:linear-gradient(#000,#000) right top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--left .kaching-bundles__badge-border__text,.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--right .kaching-bundles__badge-border__text{display:flex;align-items:center;justify-content:center;width:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-all{--badge-ring-outer: calc( var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px) );margin:var(--badge-ring-outer)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top,.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom,.kaching-bundles .kaching-bundles__bar-container--badge-border-left,.kaching-bundles .kaching-bundles__bar-container--badge-border-right{--badge-concave-extra: max( 0px, var(--badge-concave-depth, 8px) - var(--badge-border-gap, 0px) )}.kaching-bundles .kaching-bundles__bar-container--badge-border-top{box-shadow:none}.kaching-bundles .kaching-bundles__bar-container--badge-border-top:after{content:"";position:absolute;inset:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px)) 0 0;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-top:var(--badge-border-gap-border, none);border-start-start-radius:var(--badge-concave-depth, 8px);border-start-end-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-top:after{border-width:2px;border-color:var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom{box-shadow:none}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:after{content:"";position:absolute;inset:0 0 calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-bottom:var(--badge-border-gap-border, none);border-start-start-radius:var(--bar-border-radius);border-start-end-radius:var(--bar-border-radius);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-bottom:after{border-width:2px;border-color:var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left,.kaching-bundles .kaching-bundles__bar-container--badge-border-right{box-shadow:none;background-color:transparent;min-height:var(--badge-border-min-length, auto)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-top:has(:focus-visible),.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:has(:focus-visible),.kaching-bundles .kaching-bundles__bar-container--badge-border-left:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-left:has(:focus-visible),.kaching-bundles .kaching-bundles__bar-container--badge-border-right:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-right:has(:focus-visible),.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-top,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-bottom,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-left,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-right{box-shadow:none}.kaching-bundles .kaching-bundles__bar-container--badge-border-left:after{content:"";position:absolute;inset:0 0 0 calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-left:var(--badge-border-gap-border, none);border-start-start-radius:var(--badge-concave-depth, 8px);border-start-end-radius:var(--bar-border-radius);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar-container--badge-border-right:after{content:"";position:absolute;inset:0 calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px)) 0 0;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-right:var(--badge-border-gap-border, none);border-start-start-radius:var(--bar-border-radius);border-start-end-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-left:after,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-right:after{border-width:2px;border-color:var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-most-popular__content:before,.kaching-bundles .kaching-bundles__bar-most-popular__content:after{display:block;position:absolute;top:0;width:0;height:0;content:"";border-bottom:8px solid var(--bar-most-popular-background-color, transparent);filter:brightness(.7)}.kaching-bundles .kaching-bundles__bar-most-popular__content:before{left:0;border-left:8px solid transparent}.kaching-bundles .kaching-bundles__bar-most-popular__content:after{right:0;border-right:8px solid transparent}@media (width >= 750px){.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--fancy,.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--custom{right:-20px}}.kaching-bundles .kaching-bundles__bar-main{display:flex;align-items:center;gap:18px;min-height:55px}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-main{cursor:pointer}.kaching-bundles .kaching-bundles__bar-content{align-items:center;justify-content:space-between;display:flex;gap:8px;flex:1}.kaching-bundles .kaching-bundles__bar-content-left{display:flex;flex-direction:column;flex:1;align-items:flex-start}.kaching-bundles .kaching-bundles__bar-first-line{display:flex;flex-wrap:wrap;-moz-column-gap:8px;column-gap:8px;align-items:center}.kaching-bundles .kaching-bundles__bar-second-line{display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:10px;column-gap:10px}.kaching-bundles .kaching-bundles__bar-title{display:inline-block;overflow-wrap:break-word;font-size:var(--bar-title-font-size, 20px);font-weight:var(--bar-title-font-weight, 500);font-style:var(--bar-title-font-style);color:var(--bar-title-color, #000)}.kaching-bundles .kaching-bundles__bar-label{display:inline-flex;align-items:center;justify-content:center;gap:4px;vertical-align:top;padding:4px 8px;overflow-wrap:break-word;background-color:var(--bar-label-background-color, #eee);color:var(--bar-label-color, #777);font-size:var(--bar-label-font-size, 12px);font-weight:var(--bar-label-font-weight);font-style:var(--bar-label-font-style);border-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-subtitle{overflow-wrap:break-word;font-size:var(--bar-subtitle-font-size, 14px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-subtitle-color, #555)}.kaching-bundles .kaching-bundles__bar-pricing{align-items:flex-end;display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__bars--hide-prices .kaching-bundles__bar-pricing{display:none}.kaching-bundles .kaching-bundles__bar-pricing-row{display:flex;align-items:baseline;gap:6px}.kaching-bundles .kaching-bundles__bar-price{font-size:var(--bar-title-font-size, 20px);font-weight:var(--bar-title-font-weight, 500);font-style:var(--bar-title-font-style);color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__bar-price .kaching-bundles__bar-price__unit-label{font-size:var(--kaching-bundles-unit-label-font-size, 14px);font-weight:var(--kaching-bundles-unit-label-font-weight, normal);font-style:var(--kaching-bundles-unit-label-font-style)}.kaching-bundles .kaching-bundles__bar-pricing-row--secondary .kaching-bundles__bar-price{font-size:var(--bar-subtitle-font-size)}.kaching-bundles .kaching-bundles__bar-full-price,.kaching-bundles .kaching-bundles__bar-unit-price{font-size:var(--bar-subtitle-font-size, 14px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__bar-full-price{text-decoration:line-through}.kaching-bundles .kaching-bundles__bar-unit-price{text-transform:uppercase}.kaching-bundles .kaching-bundles__bar-variants{display:none;flex-direction:column;align-items:flex-start}.kaching-bundles .kaching-bundles__bar-variant{flex:1;max-width:100%}.kaching-bundles .kaching-bundles__bar-variants .kaching-bundles__bar-variant{margin-top:5px}.kaching-bundles .kaching-bundles__bar-variant__content{display:flex;align-items:center}.kaching-bundles .kaching-bundles__invalid-variant-error{color:red;font-size:12px;padding-bottom:2px}.kaching-bundles .kaching-bundles__bar-variant-names{font-size:12px;color:var(--bar-subtitle-color, #555);margin-block:3px}.kaching-bundles .kaching-bundles__bar-variant-names>span:not(:last-child):after{content:", "}.kaching-bundles .kaching-bundles__bar-variant-number{font-size:12px;margin-right:2px;min-width:20px;display:inline-flex;color:var(--bar-title-color, #000)}.kaching-bundles .kaching-bundles__bar-variant-image{width:initial;max-width:40px;max-height:40px;border-radius:calc(var(--bar-border-radius, 0) / 2);margin-right:7px}.kaching-bundles .kaching-bundles__bar-variant-main{display:flex;flex-direction:column;min-width:0}.kaching-bundles .kaching-bundles__bar-variant-selects{display:flex;min-width:0;margin-right:2px;margin-bottom:2px;flex-wrap:wrap;gap:7px}.kaching-bundles .kaching-bundles__bar-variant-select{font-size:14px;font-weight:400;font-style:normal;font-family:var(--block-font-family, inherit);-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:7px 25px 7px 7px;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;background-image:url("data:image/svg+xml;utf8,<svg width='10' height='4' viewBox='0 0 10 4' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 4L0.669872 0.25L9.33013 0.249999L5 4Z' fill='black'/></svg>")!important;background-repeat:no-repeat!important;background-position:right 8px center!important;background-color:#fff;background-size:initial;color:#000;outline:none;max-width:100%;width:auto;height:auto;min-height:auto;display:flex;align-items:center;gap:10px;cursor:pointer;box-shadow:inset 0 0 0 1px var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:var(--bar-variant-select-border-radius, 0)}.kaching-bundles .kaching-bundles__bar-variant-select span{overflow:hidden;text-overflow:ellipsis}.kaching-bundles .kaching-bundles__bar-variant-selector-wrapper{display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:10px;column-gap:10px;max-width:100%}.kaching-bundles .kaching-bundles__selling-plan-select{width:100%}.kaching-bundles .kaching-bundles__bar-selling-plan{margin-top:5px;margin-bottom:5px}.kaching-bundles .kaching-bundles__bar-variant--invalid .kaching-bundles__bar-variant-select{box-shadow:0 0 0 1px red}.kaching-bundles .kaching-bundles__bar-variant-select:hover{border:none;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-variant-select:focus{border:none;box-shadow:inset 0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-variant--invalid .kaching-bundles__bar-variant-select:is(:hover,:focus){box-shadow:0 0 0 2px red}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-variants,.kaching-bundles .kaching-bundles__bar-variants--visible{display:flex}.kaching-bundles .kaching-bundles__out-of-stock{background-color:#ff2d2d4d;border:1px solid #ff2c2c;color:#df2121;padding:8px 12px;margin:5px 0;font-size:14px}.kaching-bundles .kaching-bundles__bars--horizontal.kaching-bundles__bars{display:grid;grid-template-columns:repeat(var(--bundle-bars-per-row, 3),1fr);gap:calc(10px * var(--block-spacing, 1));overflow-x:auto}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar{position:relative}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 7px 10px;height:100%}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-main{flex-direction:column;gap:10px;text-align:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-content{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-content-left{align-items:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-second-line{justify-content:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-label{position:absolute;top:0;left:0;right:0;margin-right:0;border-top-left-radius:var(--bar-label-border-top-radius);border-top-right-radius:var(--bar-label-border-top-radius)}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-pricing{align-items:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-variants{align-items:center;margin-top:10px;margin-bottom:5px}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-variant-selector-wrapper{justify-content:center}.kaching-bundles .kaching-bundles__bars--grid.kaching-bundles__bars{display:grid;grid-template-columns:repeat(2,1fr);gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar{margin:0}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar-radio{display:none}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-container,.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-container:hover,.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar--selected .kaching-bundles__bar-container{box-shadow:none}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-pricing{flex-direction:row;gap:10px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--simple) .kaching-bundles__bar-main{margin-top:7px;margin-bottom:7px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--fancy) .kaching-bundles__bar-pricing{margin-top:18px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--custom) .kaching-bundles__bar-pricing{margin-top:18px}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--simple) .kaching-bundles__bar-variants{margin-top:-7px}.kaching-bundles .kaching-bundles__bar-full-price:before,.kaching-bundles .kaching-bundles__bar-price:before{content:attr(data-a11y-label);position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}@media (prefers-reduced-motion: reduce){.kaching-bundles *,.kaching-bundles *:before,.kaching-bundles *:after{transition-duration:.01ms!important;animation-duration:.01ms!important}}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__subscriptions-wrapper .kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-top .kaching-bundles__subscriptions-wrapper .kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-bottom .kaching-bundles__subscriptions-wrapper .kaching-bundles__bar{margin-block:0}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__subscriptions-wrapper .kaching-bundles__bars,.kaching-bundles .kaching-bundles__bars--badge-border-top .kaching-bundles__subscriptions-wrapper .kaching-bundles__bars,.kaching-bundles .kaching-bundles__bars--badge-border-bottom .kaching-bundles__subscriptions-wrapper .kaching-bundles__bars{row-gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__bar-container--badge-border-left:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar-container--badge-border-right:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper{border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-top .kaching-bundles__bar-wrapper{position:relative;z-index:1;margin-top:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));background-color:var(--bar-background-color, #fff);border-start-start-radius:var(--badge-concave-depth, 8px);border-start-end-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper{border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-top :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__bar-wrapper{position:relative;z-index:1;margin-bottom:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));background-color:var(--bar-background-color, #fff);border-start-start-radius:var(--bar-border-radius);border-start-end-radius:var(--bar-border-radius);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){position:relative;z-index:1}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper{margin-bottom:0;border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-bottom:var(--badge-border-thickness, 22px);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts),.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts),.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts),.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){margin-inline:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){position:relative;z-index:1;margin-inline-start:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){position:relative;z-index:1;margin-inline-end:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child,.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-block-end:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-inline-start:var(--badge-border-thickness, 22px);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-inline-end:var(--badge-border-thickness, 22px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:0;border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__deal-bar-progressive-gift:last-child,.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__deal-bar-progressive-gift:last-child{border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__deal-bar-progressive-gift:last-child{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top .kaching-bundles__deal-bar-progressive-gift,.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__deal-bar-progressive-gift,.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__deal-bar-progressive-gift,.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__deal-bar-progressive-gift{margin-inline:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__free-gift__divider{margin-inline-start:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__free-gift__divider{margin-inline-end:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-top .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-left .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-right .kaching-bundles__bar-wrapper{background-color:var(--bar-selected-background-color)}`)), document.head.appendChild(jt);
    }
  } catch (Xt) {
    console.error("vite-plugin-css-injected-by-js", Xt);
  }
})();
var xm = Object.defineProperty, ym = Object.getPrototypeOf, wm = Reflect.get, _g = (jt) => {
  throw TypeError(jt);
}, Pm = (jt, Xt, Cn) => Xt in jt ? xm(jt, Xt, { enumerable: !0, configurable: !0, writable: !0, value: Cn }) : jt[Xt] = Cn, Sn = (jt, Xt, Cn) => Pm(jt, typeof Xt != "symbol" ? Xt + "" : Xt, Cn), Oo = (jt, Xt, Cn) => Xt.has(jt) || _g("Cannot " + Cn), ke = (jt, Xt, Cn) => (Oo(jt, Xt, "read from private field"), Cn ? Cn.call(jt) : Xt.get(jt)), xt = (jt, Xt, Cn) => Xt.has(jt) ? _g("Cannot add the same private member more than once") : Xt instanceof WeakSet ? Xt.add(jt) : Xt.set(jt, Cn), yt = (jt, Xt, Cn, bs) => (Oo(jt, Xt, "write to private field"), Xt.set(jt, Cn), Cn), sn = (jt, Xt, Cn) => (Oo(jt, Xt, "access private method"), Cn), Sm = (jt, Xt, Cn) => wm(ym(jt), Cn, Xt);
(function(jt) {
  var Xt, Cn, bs, bl, Vi, Qr, Ti, fl, Ka, qi, Xa, Ca, Gi, vl, _l, ua, Lo, kl, fs, Tr, gr, ml, Wr, ei, Ur, yr, ir, Hr, Ia, Ma, da, ti, za, vs, _s, hr, jo, Eo, xl, yl, ks, $a, Fi, wl, ms, Ro, ga, wr, Oi, Pl, xs, ys, No, Li, qr, Da, ws, Sl, Qo, Wo, Zr, Jr, ha, Ps, Yr, ji, Bl, Cl, Il;
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
  }), typeof window != "undefined" && ((bs = (Cn = (Xt = window.__svelte) != null ? Xt : window.__svelte = {}).v) != null ? bs : Cn.v = /* @__PURE__ */ new Set()).add("5");
  const Ml = "[!", Aa = {}, An = Symbol(), kg = !1;
  var Ei = Array.isArray, mg = Array.prototype.indexOf, Ss = Array.from, zl = Object.keys, Va = Object.defineProperty, Ta = Object.getOwnPropertyDescriptor, Uo = Object.getOwnPropertyDescriptors, Ho = Object.prototype, xg = Array.prototype, $l = Object.getPrototypeOf, Zo = Object.isExtensible;
  const Pr = () => {
  };
  function yg(n) {
    return n();
  }
  function Dl(n) {
    for (var t = 0; t < n.length; t++) n[t]();
  }
  const Ri = 16, Al = 32, Jo = 64, Sr = 256, Bs = 512, Qn = 1024, Kr = 2048, qa = 4096, Gr = 8192, ni = 16384, Cs = 32768, ri = 65536, wg = 1 << 17, Yo = 1 << 19, Is = 1 << 21, Pg = 1 << 22, Ga = 1 << 23, Xr = Symbol("$state"), Ko = Symbol("legacy props"), Sg = Symbol(""), Ms = new class extends Error {
    constructor() {
      super(...arguments), Sn(this, "name", "StaleReactionError"), Sn(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
    }
  }();
  function Xo(n) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  function Ni(n) {
    console.warn("https://svelte.dev/e/hydration_mismatch");
  }
  let St, dt = !1;
  function Zn(n) {
    dt = n;
  }
  function Vn(n) {
    if (n === null) throw Ni(), Aa;
    return St = n;
  }
  function pr() {
    return Vn(Cr(St));
  }
  function x(n) {
    if (dt) {
      if (Cr(St) !== null) throw Ni(), Aa;
      St = n;
    }
  }
  function pa(n = 1) {
    if (dt) {
      for (var t = n, r = St; t--; ) r = Cr(r);
      St = r;
    }
  }
  function Vl(n = !0) {
    for (var t = 0, r = St; ; ) {
      if (r.nodeType === 8) {
        var a = r.data;
        if (a === "]") {
          if (t === 0) return r;
          t -= 1;
        } else a !== "[" && a !== Ml || (t += 1);
      }
      var s = Cr(r);
      n && r.remove(), r = s;
    }
  }
  function ec(n) {
    if (!n || n.nodeType !== 8) throw Ni(), Aa;
    return n.data;
  }
  function tc(n) {
    return n === this.v;
  }
  function Tl(n, t) {
    return n != n ? t == t : n !== t || n !== null && typeof n == "object" || typeof n == "function";
  }
  function Bg(n, t) {
    return n !== t;
  }
  function nc(n) {
    return !Tl(n, this.v);
  }
  let ai = !1;
  const Cg = [];
  function ba(n, t = !1, r = !1) {
    return ql(n, /* @__PURE__ */ new Map(), "", Cg, null, r);
  }
  function ql(n, t, r, a, s = null, o = !1) {
    if (typeof n == "object" && n !== null) {
      var c = t.get(n);
      if (c !== void 0) return c;
      if (n instanceof Map) return new Map(n);
      if (n instanceof Set) return new Set(n);
      if (Ei(n)) {
        var l = Array(n.length);
        t.set(n, l), s !== null && t.set(s, l);
        for (var i = 0; i < n.length; i += 1) {
          var u = n[i];
          i in n && (l[i] = ql(u, t, r, a, null, o));
        }
        return l;
      }
      if ($l(n) === Ho) {
        for (var h in l = {}, t.set(n, l), s !== null && t.set(s, l), n) l[h] = ql(n[h], t, r, a, null, o);
        return l;
      }
      if (n instanceof Date) return structuredClone(n);
      if (typeof n.toJSON == "function" && !o) return ql(n.toJSON(), t, r, a, n);
    }
    if (n instanceof EventTarget) return n;
    try {
      return structuredClone(n);
    } catch {
      return n;
    }
  }
  let cn = null;
  function ii(n) {
    cn = n;
  }
  function li(n) {
    return rc().get(n);
  }
  function si(n, t) {
    return rc().set(n, t), t;
  }
  function et(n, t = !1, r) {
    cn = { p: cn, c: null, e: null, s: n, x: null, l: ai && !t ? { s: null, u: null, $: [] } : null };
  }
  function tt(n) {
    var t = cn, r = t.e;
    if (r !== null) for (var a of (t.e = null, r)) Sc(a);
    return n !== void 0 && (t.x = n), cn = t.p, n != null ? n : {};
  }
  function oi() {
    return !ai || cn !== null && cn.l === null;
  }
  function rc(n) {
    var t;
    return cn === null && Xo(), (t = cn.c) != null ? t : cn.c = new Map((function(r) {
      let a = r.p;
      for (; a !== null; ) {
        const s = a.c;
        if (s !== null) return s;
        a = a.p;
      }
      return null;
    })(cn) || void 0);
  }
  const Ig = typeof requestIdleCallback == "undefined" ? (n) => setTimeout(n, 1) : requestIdleCallback;
  let fa = [], ci = [];
  function ac() {
    var n = fa;
    fa = [], Dl(n);
  }
  function ic() {
    var n = ci;
    ci = [], Dl(n);
  }
  function Mg() {
    return fa.length > 0 || ci.length > 0;
  }
  function Fa(n) {
    if (fa.length === 0 && !Wi) {
      var t = fa;
      queueMicrotask(() => {
        t === fa && ac();
      });
    }
    fa.push(n);
  }
  function zg() {
    fa.length > 0 && ac(), ci.length > 0 && ic();
  }
  const $g = /* @__PURE__ */ new WeakMap();
  function lc(n) {
    var t = Vt;
    if (t === null) return qt.f |= Ga, n;
    if ((t.f & Cs) === 0) {
      if (!(128 & t.f)) throw !t.parent && n instanceof Error && sc(n), n;
      t.b.error(n);
    } else ui(n, t);
  }
  function ui(n, t) {
    for (; t !== null; ) {
      if (128 & t.f) try {
        return void t.b.error(n);
      } catch (r) {
        n = r;
      }
      t = t.parent;
    }
    throw n instanceof Error && sc(n), n;
  }
  function sc(n) {
    const t = $g.get(n);
    t && (Va(n, "message", { value: t.message }), Va(n, "stack", { value: t.stack }));
  }
  const zs = /* @__PURE__ */ new Set();
  let _n = null, Qi = null, $s = /* @__PURE__ */ new Set(), Oa = [], Gl = null, Ds = !1, Wi = !1;
  bl = /* @__PURE__ */ new WeakMap(), Vi = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new WeakMap(), fl = /* @__PURE__ */ new WeakMap(), Ka = /* @__PURE__ */ new WeakMap(), qi = /* @__PURE__ */ new WeakMap(), Xa = /* @__PURE__ */ new WeakMap(), Ca = /* @__PURE__ */ new WeakMap(), Gi = /* @__PURE__ */ new WeakMap(), vl = /* @__PURE__ */ new WeakMap(), _l = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ new WeakSet(), Lo = function(n) {
    var t;
    n.f ^= Qn;
    for (var r = n.first; r !== null; ) {
      var a = r.f, s = !!(96 & a);
      if (!(s && (a & Qn) !== 0 || (a & Gr) !== 0 || this.skipped_effects.has(r)) && r.fn !== null) {
        s ? r.f ^= Qn : 4 & a ? ke(this, Ca).push(r) : (a & Qn) === 0 && ((a & Pg) !== 0 ? ((t = r.b) != null && t.is_pending() ? ke(this, qi) : ke(this, Ka)).push(r) : jl(r) && ((r.f & Ri) !== 0 && ke(this, Gi).push(r), pi(r)));
        var o = r.first;
        if (o !== null) {
          r = o;
          continue;
        }
      }
      var c = r.parent;
      for (r = r.next; r === null && c !== null; ) r = c.next, c = c.parent;
    }
  }, kl = function(n) {
    for (const t of n)
      ((t.f & Kr) !== 0 ? ke(this, vl) : ke(this, _l)).push(t), nr(t, Qn);
    n.length = 0;
  }, fs = function() {
    if (!ke(this, fl)) for (const n of ke(this, Vi)) n();
    ke(this, Vi).clear();
  };
  let La = class Fo {
    constructor() {
      xt(this, ua), Sn(this, "current", /* @__PURE__ */ new Map()), xt(this, bl, /* @__PURE__ */ new Map()), xt(this, Vi, /* @__PURE__ */ new Set()), xt(this, Qr, 0), xt(this, Ti, null), xt(this, fl, !1), xt(this, Ka, []), xt(this, qi, []), xt(this, Xa, []), xt(this, Ca, []), xt(this, Gi, []), xt(this, vl, []), xt(this, _l, []), Sn(this, "skipped_effects", /* @__PURE__ */ new Set());
    }
    process(t) {
      var r;
      Oa = [], Qi = null;
      for (const o of t) sn(this, ua, Lo).call(this, o);
      if (ke(this, Ka).length === 0 && ke(this, Qr) === 0) {
        sn(this, ua, fs).call(this);
        var a = ke(this, Xa), s = ke(this, Ca);
        yt(this, Xa, []), yt(this, Ca, []), yt(this, Gi, []), Qi = _n, _n = null, cc(a), cc(s), _n === null ? _n = this : zs.delete(this), (r = ke(this, Ti)) == null || r.resolve();
      } else sn(this, ua, kl).call(this, ke(this, Xa)), sn(this, ua, kl).call(this, ke(this, Ca)), sn(this, ua, kl).call(this, ke(this, Gi));
      for (const o of ke(this, Ka)) pi(o);
      for (const o of ke(this, qi)) pi(o);
      yt(this, Ka, []), yt(this, qi, []);
    }
    capture(t, r) {
      ke(this, bl).has(t) || ke(this, bl).set(t, r), this.current.set(t, t.v);
    }
    activate() {
      _n = this;
    }
    deactivate() {
      _n = null, Qi = null;
      for (const t of $s) if ($s.delete(t), t(), _n !== null) break;
    }
    neuter() {
      yt(this, fl, !0);
    }
    flush() {
      Oa.length > 0 ? oc() : sn(this, ua, fs).call(this), _n === this && (ke(this, Qr) === 0 && zs.delete(this), this.deactivate());
    }
    increment() {
      yt(this, Qr, ke(this, Qr) + 1);
    }
    decrement() {
      if (yt(this, Qr, ke(this, Qr) - 1), ke(this, Qr) === 0) {
        for (const t of ke(this, vl)) nr(t, Kr), di(t);
        for (const t of ke(this, _l)) nr(t, qa), di(t);
        yt(this, Xa, []), yt(this, Ca, []), this.flush();
      } else this.deactivate();
    }
    add_callback(t) {
      ke(this, Vi).add(t);
    }
    settled() {
      var t, r, a;
      return ((t = ke(this, Ti)) != null ? t : yt(this, Ti, { promise: new Promise((s, o) => {
        r = s, a = o;
      }), resolve: r, reject: a })).promise;
    }
    static ensure() {
      if (_n === null) {
        const t = _n = new Fo();
        zs.add(_n), Wi || Fo.enqueue(() => {
          _n === t && t.flush();
        });
      }
      return _n;
    }
    static enqueue(t) {
      Fa(t);
    }
  };
  function _(n) {
    var t = Wi;
    Wi = !0;
    try {
      for (; ; ) {
        if (zg(), Oa.length === 0 && !Mg() && (_n == null || _n.flush(), Oa.length === 0)) return void (Gl = null);
        oc();
      }
    } finally {
      Wi = t;
    }
  }
  function oc() {
    var n = hi;
    Ds = !0;
    try {
      var t = 0;
      for (Dc(!0); Oa.length > 0; ) {
        var r = La.ensure();
        t++ > 1e3 && Dg(), r.process(Oa), _a.clear();
      }
    } finally {
      Ds = !1, Dc(n), Gl = null;
    }
  }
  function Dg() {
    try {
      (function() {
        throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
      })();
    } catch (n) {
      ui(n, Gl);
    }
  }
  let va = null;
  function cc(n) {
    var t = n.length;
    if (t !== 0) {
      for (var r = 0; r < t; ) {
        var a = n[r++];
        if (!(24576 & a.f) && jl(a) && (va = [], pi(a), a.deps === null && a.first === null && a.nodes_start === null && (a.teardown === null && a.ac === null ? Mc(a) : a.fn = null), (va == null ? void 0 : va.length) > 0)) {
          _a.clear();
          for (const s of va) pi(s);
          va = [];
        }
      }
      va = null;
    }
  }
  function di(n) {
    for (var t = Gl = n; t.parent !== null; ) {
      var r = (t = t.parent).f;
      if (Ds && t === Vt && (r & Ri) !== 0) return;
      if (96 & r) {
        if ((r & Qn) === 0) return;
        t.f ^= Qn;
      }
    }
    Oa.push(t);
  }
  function uc(n) {
    let t, r = 0, a = ea(0);
    return () => {
      qt === null || Mr || (e(a), Zi(() => (r === 0 && (t = Jt(() => n(() => lr(a)))), r += 1, () => {
        Fa(() => {
          r -= 1, r === 0 && (t == null || t(), t = void 0, lr(a));
        });
      })));
    };
  }
  class Ag {
    constructor(t, r, a) {
      xt(this, hr), Sn(this, "parent"), xt(this, Tr, !1), xt(this, gr), xt(this, ml, dt ? St : null), xt(this, Wr), xt(this, ei), xt(this, Ur), xt(this, yr, null), xt(this, ir, null), xt(this, Hr, null), xt(this, Ia, null), xt(this, Ma, 0), xt(this, da, 0), xt(this, ti, !1), xt(this, za, null), xt(this, vs, () => {
        ke(this, za) && gi(ke(this, za), ke(this, Ma));
      }), xt(this, _s, uc(() => (yt(this, za, ea(ke(this, Ma))), () => {
        yt(this, za, null);
      }))), yt(this, gr, t), yt(this, Wr, r), yt(this, ei, a), this.parent = Vt.b, yt(this, Tr, !!ke(this, Wr).pending), yt(this, Ur, ta(() => {
        if (Vt.b = this, dt) {
          const s = ke(this, ml);
          pr(), s.nodeType === 8 && s.data === Ml ? sn(this, hr, Eo).call(this) : sn(this, hr, jo).call(this);
        } else {
          try {
            yt(this, yr, Gn(() => a(ke(this, gr))));
          } catch (s) {
            this.error(s);
          }
          ke(this, da) > 0 ? sn(this, hr, yl).call(this) : yt(this, Tr, !1);
        }
      }, 589952)), dt && yt(this, gr, St);
    }
    is_pending() {
      return ke(this, Tr) || !!this.parent && this.parent.is_pending();
    }
    has_pending_snippet() {
      return !!ke(this, Wr).pending;
    }
    update_pending_count(t) {
      sn(this, hr, ks).call(this, t), yt(this, Ma, ke(this, Ma) + t), $s.add(ke(this, vs));
    }
    get_effect_pending() {
      return ke(this, _s).call(this), e(ke(this, za));
    }
    error(t) {
      var r = ke(this, Wr).onerror;
      let a = ke(this, Wr).failed;
      if (ke(this, ti) || !r && !a) throw t;
      ke(this, yr) && (Fn(ke(this, yr)), yt(this, yr, null)), ke(this, ir) && (Fn(ke(this, ir)), yt(this, ir, null)), ke(this, Hr) && (Fn(ke(this, Hr)), yt(this, Hr, null)), dt && (Vn(ke(this, ml)), pa(), Vn(Vl()));
      var s = !1, o = !1;
      const c = () => {
        s ? console.warn("https://svelte.dev/e/svelte_boundary_reset_noop") : (s = !0, o && (function() {
          throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
        })(), La.ensure(), yt(this, Ma, 0), ke(this, Hr) !== null && na(ke(this, Hr), () => {
          yt(this, Hr, null);
        }), yt(this, Tr, this.has_pending_snippet()), yt(this, yr, sn(this, hr, xl).call(this, () => (yt(this, ti, !1), Gn(() => ke(this, ei).call(this, ke(this, gr)))))), ke(this, da) > 0 ? sn(this, hr, yl).call(this) : yt(this, Tr, !1));
      };
      var l = qt;
      try {
        Wn(null), o = !0, r == null || r(t, c), o = !1;
      } catch (i) {
        ui(i, ke(this, Ur) && ke(this, Ur).parent);
      } finally {
        Wn(l);
      }
      a && Fa(() => {
        yt(this, Hr, sn(this, hr, xl).call(this, () => {
          yt(this, ti, !0);
          try {
            return Gn(() => {
              a(ke(this, gr), () => t, () => c);
            });
          } catch (i) {
            return ui(i, ke(this, Ur).parent), null;
          } finally {
            yt(this, ti, !1);
          }
        }));
      });
    }
  }
  function dc(n, t, r) {
    const a = oi() ? Ui : Fl;
    if (t.length !== 0) {
      var s = _n, o = Vt, c = (function() {
        var i = Vt, u = qt, h = cn, b = _n, g = dt;
        if (g) var f = St;
        return function() {
          Fr(i), Wn(u), ii(h), b == null || b.activate(), g && (Zn(!0), Vn(f));
        };
      })(), l = dt;
      Promise.all(t.map((i) => Vg(i))).then((i) => {
        s == null || s.activate(), c();
        try {
          r([...n.map(a), ...i]);
        } catch (u) {
          (o.f & ni) === 0 && ui(u, o);
        }
        l && Zn(!1), s == null || s.deactivate(), gc();
      }).catch((i) => {
        ui(i, o);
      });
    } else r(n.map(a));
  }
  function gc() {
    Fr(null), Wn(null), ii(null);
  }
  function Ui(n) {
    var t = 2050, r = qt !== null && 2 & qt.f ? qt : null;
    return Vt === null || r !== null && (r.f & Sr) !== 0 ? t |= Sr : Vt.f |= Yo, { ctx: cn, deps: null, effects: null, equals: tc, f: t, fn: n, reactions: null, rv: 0, v: An, wv: 0, parent: r != null ? r : Vt, ac: null };
  }
  function Vg(n, t) {
    let r = Vt;
    r === null && (function() {
      throw new Error("https://svelte.dev/e/async_derived_orphan");
    })();
    var a = r.b, s = void 0, o = ea(An), c = null, l = !qt;
    return (function(i) {
      Ir(4718592, i, !0);
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
      var b = _n, g = a.is_pending();
      l && (a.update_pending_count(1), g || b.increment());
      const f = (v, w = void 0) => {
        c = null, g || b.activate(), w ? w !== Ms && (o.f |= Ga, gi(o, w)) : ((o.f & Ga) !== 0 && (o.f ^= Ga), gi(o, v)), l && (a.update_pending_count(-1), g || b.decrement()), gc();
      };
      if (s.then(f, (v) => f(null, v || "unknown")), b) return () => {
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
    const t = Ui(n);
    return Vc(t), t;
  }
  function Fl(n) {
    const t = Ui(n);
    return t.equals = nc, t;
  }
  function hc(n) {
    var t = n.effects;
    if (t !== null) {
      n.effects = null;
      for (var r = 0; r < t.length; r += 1) Fn(t[r]);
    }
  }
  function As(n) {
    var t, r = Vt;
    Fr((function(a) {
      for (var s = a.parent; s !== null; ) {
        if (!(2 & s.f)) return s;
        s = s.parent;
      }
      return null;
    })(n));
    try {
      hc(n), t = Oc(n);
    } finally {
      Fr(r);
    }
    return t;
  }
  function pc(n) {
    var t = As(n);
    n.equals(t) || (n.v = t, n.wv = Gc()), ja || nr(n, !ka && (n.f & Sr) === 0 || n.deps === null ? Qn : qa);
  }
  Tr = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), ml = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap(), Ma = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap(), za = /* @__PURE__ */ new WeakMap(), vs = /* @__PURE__ */ new WeakMap(), _s = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakSet(), jo = function() {
    try {
      yt(this, yr, Gn(() => ke(this, ei).call(this, ke(this, gr))));
    } catch (n) {
      this.error(n);
    }
    yt(this, Tr, !1);
  }, Eo = function() {
    const n = ke(this, Wr).pending;
    n && (yt(this, ir, Gn(() => n(ke(this, gr)))), La.enqueue(() => {
      yt(this, yr, sn(this, hr, xl).call(this, () => (La.ensure(), Gn(() => ke(this, ei).call(this, ke(this, gr)))))), ke(this, da) > 0 ? sn(this, hr, yl).call(this) : (na(ke(this, ir), () => {
        yt(this, ir, null);
      }), yt(this, Tr, !1));
    }));
  }, xl = function(n) {
    var t = Vt, r = qt, a = cn;
    Fr(ke(this, Ur)), Wn(ke(this, Ur)), ii(ke(this, Ur).ctx);
    try {
      return n();
    } catch (s) {
      return lc(s), null;
    } finally {
      Fr(t), Wn(r), ii(a);
    }
  }, yl = function() {
    const n = ke(this, Wr).pending;
    ke(this, yr) !== null && (yt(this, Ia, document.createDocumentFragment()), (function(t, r) {
      for (var a = t.nodes_start, s = t.nodes_end; a !== null; ) {
        var o = a === s ? null : Cr(a);
        r.append(a), a = o;
      }
    })(ke(this, yr), ke(this, Ia))), ke(this, ir) === null && yt(this, ir, Gn(() => n(ke(this, gr))));
  }, ks = function(n) {
    var t;
    this.has_pending_snippet() ? (yt(this, da, ke(this, da) + n), ke(this, da) === 0 && (yt(this, Tr, !1), ke(this, ir) && na(ke(this, ir), () => {
      yt(this, ir, null);
    }), ke(this, Ia) && (ke(this, gr).before(ke(this, Ia)), yt(this, Ia, null)))) : this.parent && sn(t = this.parent, hr, ks).call(t, n);
  };
  const _a = /* @__PURE__ */ new Map();
  function ea(n, t) {
    return { f: 0, v: n, reactions: null, equals: tc, rv: 0, wv: 0 };
  }
  function Ae(n, t) {
    const r = ea(n);
    return Vc(r), r;
  }
  function Vs(n, t = !1, r = !0) {
    var a, s;
    const o = ea(n);
    return t || (o.equals = nc), ai && r && cn !== null && cn.l !== null && ((s = (a = cn.l).s) != null ? s : a.s = []).push(o), o;
  }
  function se(n, t, r = !1) {
    return qt !== null && (!Mr || (qt.f & wg) !== 0) && oi() && 4325394 & qt.f && !(fr != null && fr.includes(n)) && (function() {
      throw new Error("https://svelte.dev/e/state_unsafe_mutation");
    })(), gi(n, r ? lt(t) : t);
  }
  function gi(n, t) {
    if (!n.equals(t)) {
      var r = n.v;
      ja ? _a.set(n, t) : _a.set(n, r), n.v = t, La.ensure().capture(n, r), 2 & n.f && ((n.f & Kr) !== 0 && As(n), nr(n, (n.f & Sr) === 0 ? Qn : qa)), n.wv = Gc(), bc(n, Kr), !oi() || Vt === null || (Vt.f & Qn) === 0 || 96 & Vt.f || (vr === null ? (function(a) {
        vr = a;
      })([n]) : vr.push(n));
    }
    return t;
  }
  function lr(n) {
    se(n, n.v + 1);
  }
  function bc(n, t) {
    var r = n.reactions;
    if (r !== null) for (var a = oi(), s = r.length, o = 0; o < s; o++) {
      var c = r[o], l = c.f;
      if (a || c !== Vt) {
        var i = (l & Kr) === 0;
        i && nr(c, t), 2 & l ? bc(c, qa) : i && ((l & Ri) !== 0 && va !== null && va.push(c), di(c));
      }
    }
  }
  function lt(n) {
    if (typeof n != "object" || n === null || Xr in n) return n;
    const t = $l(n);
    if (t !== Ho && t !== xg) return n;
    var r = /* @__PURE__ */ new Map(), a = Ei(n), s = Ae(0), o = zr, c = (l) => {
      if (zr === o) return l();
      var i = qt, u = zr;
      Wn(null), qc(o);
      var h = l();
      return Wn(i), qc(u), h;
    };
    return a && r.set("length", Ae(n.length)), new Proxy(n, { defineProperty(l, i, u) {
      "value" in u && u.configurable !== !1 && u.enumerable !== !1 && u.writable !== !1 || (function() {
        throw new Error("https://svelte.dev/e/state_descriptors_fixed");
      })();
      var h = r.get(i);
      return h === void 0 ? h = c(() => {
        var b = Ae(u.value);
        return r.set(i, b), b;
      }) : se(h, u.value, !0), !0;
    }, deleteProperty(l, i) {
      var u = r.get(i);
      if (u === void 0) {
        if (i in l) {
          const h = c(() => Ae(An));
          r.set(i, h), lr(s);
        }
      } else se(u, An), lr(s);
      return !0;
    }, get(l, i, u) {
      var h;
      if (i === Xr) return n;
      var b = r.get(i), g = i in l;
      if (b !== void 0 || g && !((h = Ta(l, i)) != null && h.writable) || (b = c(() => Ae(lt(g ? l[i] : An))), r.set(i, b)), b !== void 0) {
        var f = e(b);
        return f === An ? void 0 : f;
      }
      return Reflect.get(l, i, u);
    }, getOwnPropertyDescriptor(l, i) {
      var u = Reflect.getOwnPropertyDescriptor(l, i);
      if (u && "value" in u) {
        var h = r.get(i);
        h && (u.value = e(h));
      } else if (u === void 0) {
        var b = r.get(i), g = b == null ? void 0 : b.v;
        if (b !== void 0 && g !== An) return { enumerable: !0, configurable: !0, value: g, writable: !0 };
      }
      return u;
    }, has(l, i) {
      var u;
      if (i === Xr) return !0;
      var h = r.get(i), b = h !== void 0 && h.v !== An || Reflect.has(l, i);
      return (h !== void 0 || Vt !== null && (!b || (u = Ta(l, i)) != null && u.writable)) && (h === void 0 && (h = c(() => Ae(b ? lt(l[i]) : An)), r.set(i, h)), e(h) === An) ? !1 : b;
    }, set(l, i, u, h) {
      var b, g = r.get(i), f = i in l;
      if (a && i === "length") for (var v = u; v < g.v; v += 1) {
        var w = r.get(v + "");
        w !== void 0 ? se(w, An) : v in l && (w = c(() => Ae(An)), r.set(v + "", w));
      }
      g === void 0 ? f && !((b = Ta(l, i)) != null && b.writable) || (se(g = c(() => Ae(void 0)), lt(u)), r.set(i, g)) : (f = g.v !== An, se(g, c(() => lt(u))));
      var m = Reflect.getOwnPropertyDescriptor(l, i);
      if (m != null && m.set && m.set.call(h, u), !f) {
        if (a && typeof i == "string") {
          var z = r.get("length"), S = Number(i);
          Number.isInteger(S) && S >= z.v && se(z, S + 1);
        }
        lr(s);
      }
      return !0;
    }, ownKeys(l) {
      e(s);
      var i = Reflect.ownKeys(l).filter((b) => {
        var g = r.get(b);
        return g === void 0 || g.v !== An;
      });
      for (var [u, h] of r) h.v === An || u in l || i.push(u);
      return i;
    }, setPrototypeOf() {
      (function() {
        throw new Error("https://svelte.dev/e/state_prototype_fixed");
      })();
    } });
  }
  function fc(n) {
    try {
      if (n !== null && typeof n == "object" && Xr in n) return n[Xr];
    } catch {
    }
    return n;
  }
  function Tg(n, t) {
    return Object.is(fc(n), fc(t));
  }
  var vc, _c, kc, mc;
  function Ts() {
    if (vc === void 0) {
      vc = window, _c = /Firefox/.test(navigator.userAgent);
      var n = Element.prototype, t = Node.prototype, r = Text.prototype;
      kc = Ta(t, "firstChild").get, mc = Ta(t, "nextSibling").get, Zo(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), Zo(r) && (r.__t = void 0);
    }
  }
  function Br(n = "") {
    return document.createTextNode(n);
  }
  function Rn(n) {
    return kc.call(n);
  }
  function Cr(n) {
    return mc.call(n);
  }
  function y(n, t) {
    if (!dt) return Rn(n);
    var r = Rn(St);
    if (r === null) r = St.appendChild(Br());
    else if (t && r.nodeType !== 3) {
      var a = Br();
      return r == null || r.before(a), Vn(a), a;
    }
    return Vn(r), r;
  }
  function pe(n, t = !1) {
    if (!dt) {
      var r = Rn(n);
      return r instanceof Comment && r.data === "" ? Cr(r) : r;
    }
    if (t && (St == null ? void 0 : St.nodeType) !== 3) {
      var a = Br();
      return St == null || St.before(a), Vn(a), a;
    }
    return St;
  }
  function j(n, t = 1, r = !1) {
    let a = dt ? St : n;
    for (var s; t--; ) s = a, a = Cr(a);
    if (!dt) return a;
    if (r && (a == null ? void 0 : a.nodeType) !== 3) {
      var o = Br();
      return a === null ? s == null || s.after(o) : a.before(o), Vn(o), o;
    }
    return Vn(a), a;
  }
  function xc(n) {
    n.textContent = "";
  }
  function qg(n, t) {
    if (t) {
      const r = document.body;
      n.autofocus = !0, Fa(() => {
        document.activeElement === r && n.focus();
      });
    }
  }
  let yc = !1;
  function wc() {
    yc || (yc = !0, document.addEventListener("reset", (n) => {
      Promise.resolve().then(() => {
        var t;
        if (!n.defaultPrevented) for (const r of n.target.elements) (t = r.__on_r) == null || t.call(r);
      });
    }, { capture: !0 }));
  }
  function Ol(n) {
    var t = qt, r = Vt;
    Wn(null), Fr(null);
    try {
      return n();
    } finally {
      Wn(t), Fr(r);
    }
  }
  function Pc(n) {
    Vt === null && qt === null && (function() {
      throw new Error("https://svelte.dev/e/effect_orphan");
    })(), qt !== null && (qt.f & Sr) !== 0 && Vt === null && (function() {
      throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
    })(), ja && (function() {
      throw new Error("https://svelte.dev/e/effect_in_teardown");
    })();
  }
  function Ir(n, t, r, a = !0) {
    var s, o = Vt;
    o !== null && (o.f & Gr) !== 0 && (n |= Gr);
    var c = { ctx: cn, deps: null, nodes_start: null, nodes_end: null, f: n | Kr, first: null, fn: t, last: null, next: null, parent: o, b: o && o.b, prev: null, teardown: null, transitions: null, wv: 0, ac: null };
    if (r) try {
      pi(c), c.f |= Cs;
    } catch (u) {
      throw Fn(c), u;
    }
    else t !== null && di(c);
    if (a) {
      var l = c;
      if (r && l.deps === null && l.teardown === null && l.nodes_start === null && l.first === l.last && (l.f & Yo) === 0 && (l = l.first), l !== null && (l.parent = o, o !== null && (function(u, h) {
        var b = h.last;
        b === null ? h.last = h.first = u : (b.next = u, u.prev = b, h.last = u);
      })(l, o), qt !== null && 2 & qt.f && (n & Jo) === 0)) {
        var i = qt;
        ((s = i.effects) != null ? s : i.effects = []).push(l);
      }
    }
    return c;
  }
  function qs(n) {
    const t = Ir(8, null, !1);
    return nr(t, Qn), t.teardown = n, t;
  }
  function Xe(n) {
    var t;
    Pc();
    var r = Vt.f;
    if (!(!qt && (r & Al) !== 0 && (r & Cs) === 0)) return Sc(n);
    var a = cn;
    ((t = a.e) != null ? t : a.e = []).push(n);
  }
  function Sc(n) {
    return Ir(1048580, n, !1);
  }
  function br(n) {
    return Pc(), Ir(1048584, n, !0);
  }
  function Hi(n) {
    return Ir(4, n, !1);
  }
  function Zi(n, t = 0) {
    return Ir(8 | t, n, !0);
  }
  function be(n, t = [], r = []) {
    dc(t, r, (a) => {
      Ir(8, () => n(...a.map(e)), !0);
    });
  }
  function ta(n, t = 0) {
    return Ir(Ri | t, n, !0);
  }
  function Gn(n, t = !0) {
    return Ir(524320, n, !0, t);
  }
  function Bc(n) {
    var t = n.teardown;
    if (t !== null) {
      const r = ja, a = qt;
      Ac(!0), Wn(null);
      try {
        t.call(null);
      } finally {
        Ac(r), Wn(a);
      }
    }
  }
  function Cc(n, t = !1) {
    var r = n.first;
    for (n.first = n.last = null; r !== null; ) {
      const s = r.ac;
      s !== null && Ol(() => {
        s.abort(Ms);
      });
      var a = r.next;
      (r.f & Jo) !== 0 ? r.parent = null : Fn(r, t), r = a;
    }
  }
  function Fn(n, t = !0) {
    var r = !1;
    (t || 262144 & n.f) && n.nodes_start !== null && n.nodes_end !== null && (Ic(n.nodes_start, n.nodes_end), r = !0), Cc(n, t && !r), El(n, 0), nr(n, ni);
    var a = n.transitions;
    if (a !== null) for (const o of a) o.stop();
    Bc(n);
    var s = n.parent;
    s !== null && s.first !== null && Mc(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
  }
  function Ic(n, t) {
    for (; n !== null; ) {
      var r = n === t ? null : Cr(n);
      n.remove(), n = r;
    }
  }
  function Mc(n) {
    var t = n.parent, r = n.prev, a = n.next;
    r !== null && (r.next = a), a !== null && (a.prev = r), t !== null && (t.first === n && (t.first = a), t.last === n && (t.last = r));
  }
  function na(n, t) {
    var r = [];
    Gs(n, r, !0), zc(r, () => {
      Fn(n), t && t();
    });
  }
  function zc(n, t) {
    var r = n.length;
    if (r > 0) {
      var a = () => --r || t();
      for (var s of n) s.out(a);
    } else t();
  }
  function Gs(n, t, r) {
    if ((n.f & Gr) === 0) {
      if (n.f ^= Gr, n.transitions !== null) for (const o of n.transitions) (o.is_global || r) && t.push(o);
      for (var a = n.first; a !== null; ) {
        var s = a.next;
        Gs(a, t, ((a.f & ri) !== 0 || (a.f & Al) !== 0) && r), a = s;
      }
    }
  }
  function Ll(n) {
    $c(n, !0);
  }
  function $c(n, t) {
    if ((n.f & Gr) !== 0) {
      n.f ^= Gr, (n.f & Qn) === 0 && (nr(n, Kr), di(n));
      for (var r = n.first; r !== null; ) {
        var a = r.next;
        $c(r, ((r.f & ri) !== 0 || (r.f & Al) !== 0) && t), r = a;
      }
      if (n.transitions !== null) for (const s of n.transitions) (s.is_global || t) && s.in();
    }
  }
  let hi = !1;
  function Dc(n) {
    hi = n;
  }
  let ja = !1;
  function Ac(n) {
    ja = n;
  }
  let qt = null, Mr = !1;
  function Wn(n) {
    qt = n;
  }
  let Vt = null;
  function Fr(n) {
    Vt = n;
  }
  let fr = null;
  function Vc(n) {
    qt !== null && (fr === null ? fr = [n] : fr.push(n));
  }
  let Jn = null, sr = 0, vr = null, Tc = 1, Ji = 0, zr = Ji;
  function qc(n) {
    zr = n;
  }
  let ka = !1;
  function Gc() {
    return ++Tc;
  }
  function jl(n) {
    var t, r, a = n.f;
    if ((a & Kr) !== 0) return !0;
    if ((a & qa) !== 0) {
      var s = n.deps, o = (a & Sr) !== 0;
      if (s !== null) {
        var c, l, i = (a & Bs) !== 0, u = o && Vt !== null && !ka, h = s.length;
        if ((i || u) && (Vt === null || (Vt.f & ni) === 0)) {
          var b = n, g = b.parent;
          for (c = 0; c < h; c++) l = s[c], !i && ((t = l == null ? void 0 : l.reactions) != null && t.includes(b)) || ((r = l.reactions) != null ? r : l.reactions = []).push(b);
          i && (b.f ^= Bs), u && g !== null && (g.f & Sr) === 0 && (b.f ^= Sr);
        }
        for (c = 0; c < h; c++) if (jl(l = s[c]) && pc(l), l.wv > n.wv) return !0;
      }
      o && (Vt === null || ka) || nr(n, Qn);
    }
    return !1;
  }
  function Fc(n, t, r = !0) {
    var a = n.reactions;
    if (a !== null && !(fr != null && fr.includes(n))) for (var s = 0; s < a.length; s++) {
      var o = a[s];
      2 & o.f ? Fc(o, t, !1) : t === o && (r ? nr(o, Kr) : (o.f & Qn) !== 0 && nr(o, qa), di(o));
    }
  }
  function Oc(n) {
    var t, r, a = Jn, s = sr, o = vr, c = qt, l = ka, i = fr, u = cn, h = Mr, b = zr, g = n.f;
    Jn = null, sr = 0, vr = null, ka = (g & Sr) !== 0 && (Mr || !hi || qt === null), qt = 96 & g ? null : n, fr = null, ii(n.ctx), Mr = !1, zr = ++Ji, n.ac !== null && (Ol(() => {
      n.ac.abort(Ms);
    }), n.ac = null);
    try {
      n.f |= Is;
      var f = (0, n.fn)(), v = n.deps;
      if (Jn !== null) {
        var w;
        if (El(n, sr), v !== null && sr > 0) for (v.length = sr + Jn.length, w = 0; w < Jn.length; w++) v[sr + w] = Jn[w];
        else n.deps = v = Jn;
        if (!ka || 2 & g && n.reactions !== null) for (w = sr; w < v.length; w++) ((r = (t = v[w]).reactions) != null ? r : t.reactions = []).push(n);
      } else v !== null && sr < v.length && (El(n, sr), v.length = sr);
      if (oi() && vr !== null && !Mr && v !== null && !(6146 & n.f)) for (w = 0; w < vr.length; w++) Fc(vr[w], n);
      return c !== null && c !== n && (Ji++, vr !== null && (o === null ? o = vr : o.push(...vr))), (n.f & Ga) !== 0 && (n.f ^= Ga), f;
    } catch (m) {
      return lc(m);
    } finally {
      n.f ^= Is, Jn = a, sr = s, vr = o, qt = c, ka = l, fr = i, ii(u), Mr = h, zr = b;
    }
  }
  function Gg(n, t) {
    let r = t.reactions;
    if (r !== null) {
      var a = mg.call(r, n);
      if (a !== -1) {
        var s = r.length - 1;
        s === 0 ? r = t.reactions = null : (r[a] = r[s], r.pop());
      }
    }
    r === null && 2 & t.f && (Jn === null || !Jn.includes(t)) && (nr(t, qa), 768 & t.f || (t.f ^= Bs), hc(t), El(t, 0));
  }
  function El(n, t) {
    var r = n.deps;
    if (r !== null) for (var a = t; a < r.length; a++) Gg(n, r[a]);
  }
  function pi(n) {
    var t = n.f;
    if ((t & ni) === 0) {
      nr(n, Qn);
      var r = Vt, a = hi;
      Vt = n, hi = !0;
      try {
        (t & Ri) !== 0 ? (function(o) {
          for (var c = o.first; c !== null; ) {
            var l = c.next;
            (c.f & Al) === 0 && Fn(c), c = l;
          }
        })(n) : Cc(n), Bc(n);
        var s = Oc(n);
        n.teardown = typeof s == "function" ? s : null, n.wv = Tc;
      } finally {
        hi = a, Vt = r;
      }
    }
  }
  async function Fs() {
    await Promise.resolve(), _();
  }
  function e(n) {
    var t, r = !!(2 & n.f);
    if (qt === null || Mr) {
      if (r && n.deps === null && n.effects === null) {
        var a = n, s = a.parent;
        s !== null && (s.f & Sr) === 0 && (a.f ^= Sr);
      }
    } else if (!(Vt !== null && (Vt.f & ni) !== 0) && !(fr != null && fr.includes(n))) {
      var o = qt.deps;
      if ((qt.f & Is) !== 0) n.rv < Ji && (n.rv = Ji, Jn === null && o !== null && o[sr] === n ? sr++ : Jn === null ? Jn = [n] : ka && Jn.includes(n) || Jn.push(n));
      else {
        ((t = qt.deps) != null ? t : qt.deps = []).push(n);
        var c = n.reactions;
        c === null ? n.reactions = [qt] : c.includes(qt) || c.push(qt);
      }
    }
    if (ja) {
      if (_a.has(n)) return _a.get(n);
      if (r) {
        var l = (a = n).v;
        return ((a.f & Qn) === 0 && a.reactions !== null || Lc(a)) && (l = As(a)), _a.set(a, l), l;
      }
    } else r && jl(a = n) && pc(a);
    if ((n.f & Ga) !== 0) throw n.v;
    return n.v;
  }
  function Lc(n) {
    if (n.v === An) return !0;
    if (n.deps === null) return !1;
    for (const t of n.deps)
      if (_a.has(t) || 2 & t.f && Lc(t)) return !0;
    return !1;
  }
  function Jt(n) {
    var t = Mr;
    try {
      return Mr = !0, n();
    } finally {
      Mr = t;
    }
  }
  const Fg = -7169;
  function nr(n, t) {
    n.f = n.f & Fg | t;
  }
  function jc(n) {
    if (typeof n == "object" && n && !(n instanceof EventTarget)) {
      if (Xr in n) Os(n);
      else if (!Array.isArray(n)) for (let t in n) {
        const r = n[t];
        typeof r == "object" && r && Xr in r && Os(r);
      }
    }
  }
  function Os(n, t = /* @__PURE__ */ new Set()) {
    if (!(typeof n != "object" || n === null || n instanceof EventTarget || t.has(n))) {
      t.add(n), n instanceof Date && n.getTime();
      for (let a in n) try {
        Os(n[a], t);
      } catch {
      }
      const r = $l(n);
      if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
        const a = Uo(r);
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
  const Ec = /* @__PURE__ */ new Set(), Ls = /* @__PURE__ */ new Set();
  function js(n, t, r, a = {}) {
    function s(o) {
      if (a.capture || Yi.call(t, o), !o.cancelBubble) return Ol(() => r == null ? void 0 : r.call(this, o));
    }
    return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Fa(() => {
      t.addEventListener(n, s, a);
    }) : t.addEventListener(n, s, a), s;
  }
  function Rl(n, t, r, a, s) {
    var o = { capture: a, passive: s }, c = js(n, t, r, o);
    (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && qs(() => {
      t.removeEventListener(n, c, o);
    });
  }
  function On(n) {
    for (var t = 0; t < n.length; t++) Ec.add(n[t]);
    for (var r of Ls) r(n);
  }
  let Rc = null;
  function Yi(n) {
    var t, r = this, a = r.ownerDocument, s = n.type, o = ((t = n.composedPath) == null ? void 0 : t.call(n)) || [], c = o[0] || n.target;
    Rc = n;
    var l = 0, i = Rc === n && n.__root;
    if (i) {
      var u = o.indexOf(i);
      if (u !== -1 && (r === document || r === window)) return void (n.__root = r);
      var h = o.indexOf(r);
      if (h === -1) return;
      u <= h && (l = u);
    }
    if ((c = o[l] || n.target) !== r) {
      Va(n, "currentTarget", { configurable: !0, get: () => c || a });
      var b = qt, g = Vt;
      Wn(null), Fr(null);
      try {
        for (var f, v = []; c !== null; ) {
          var w = c.assignedSlot || c.parentNode || c.host || null;
          try {
            var m = c["__" + s];
            if (m != null && (!c.disabled || n.target === c)) if (Ei(m)) {
              var [z, ...S] = m;
              z.apply(c, [n, ...S]);
            } else m.call(c, n);
          } catch (B) {
            f ? v.push(B) : f = B;
          }
          if (n.cancelBubble || w === r || w === null) break;
          c = w;
        }
        if (f) {
          for (let B of v) queueMicrotask(() => {
            throw B;
          });
          throw f;
        }
      } finally {
        n.__root = r, delete n.currentTarget, Wn(b), Fr(g);
      }
    }
  }
  function Es(n) {
    var t = document.createElement("template");
    return t.innerHTML = n.replaceAll("<!>", "<!---->"), t.content;
  }
  function rr(n, t) {
    var r = Vt;
    r.nodes_start === null && (r.nodes_start = n, r.nodes_end = t);
  }
  function $(n, t) {
    var r, a = !!(1 & t), s = !!(2 & t), o = !n.startsWith("<!>");
    return () => {
      if (dt) return rr(St, null), St;
      r === void 0 && (r = Es(o ? n : "<!>" + n), a || (r = Rn(r)));
      var c = s || _c ? document.importNode(r, !0) : r.cloneNode(!0);
      return a ? rr(Rn(c), c.lastChild) : rr(c, c), c;
    };
  }
  function Og(n, t, r = "svg") {
    var a, s = !n.startsWith("<!>"), o = !!(1 & t), c = `<${r}>${s ? n : "<!>" + n}</${r}>`;
    return () => {
      if (dt) return rr(St, null), St;
      if (!a) {
        var l = Rn(Es(c));
        if (o) for (a = document.createDocumentFragment(); Rn(l); ) a.appendChild(Rn(l));
        else a = Rn(l);
      }
      var i = a.cloneNode(!0);
      return o ? rr(Rn(i), i.lastChild) : rr(i, i), i;
    };
  }
  function Tn(n, t) {
    return Og(n, t, "svg");
  }
  function Un(n = "") {
    if (!dt) {
      var t = Br(n + "");
      return rr(t, t), t;
    }
    var r = St;
    return r.nodeType !== 3 && (r.before(r = Br()), Vn(r)), rr(r, r), r;
  }
  function Me() {
    if (dt) return rr(St, null), St;
    var n = document.createDocumentFragment(), t = document.createComment(""), r = Br();
    return n.append(t, r), rr(t, r), n;
  }
  function p(n, t) {
    if (dt) return Vt.nodes_end = St, void pr();
    n !== null && n.before(t);
  }
  function Lg(n) {
    return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
  }
  const jg = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];
  function Eg(n) {
    return jg.includes(n);
  }
  const Rg = { formnovalidate: "formNoValidate", ismap: "isMap", nomodule: "noModule", playsinline: "playsInline", readonly: "readOnly", defaultvalue: "defaultValue", defaultchecked: "defaultChecked", srcobject: "srcObject", novalidate: "noValidate", allowfullscreen: "allowFullscreen", disablepictureinpicture: "disablePictureInPicture", disableremoteplayback: "disableRemotePlayback" };
  function Ng(n) {
    var t;
    return n = n.toLowerCase(), (t = Rg[n]) != null ? t : n;
  }
  const Qg = ["touchstart", "touchmove"];
  function Wg(n) {
    return Qg.includes(n);
  }
  const Ug = ["textarea", "script", "style", "title"];
  function ht(n, t) {
    var r, a = t == null ? "" : typeof t == "object" ? t + "" : t;
    a !== ((r = n.__t) != null ? r : n.__t = n.nodeValue) && (n.__t = a, n.nodeValue = a + "");
  }
  function Nc(n, t) {
    return Qc(n, t);
  }
  function Hg(n, t) {
    var r;
    Ts(), t.intro = (r = t.intro) != null && r;
    const a = t.target, s = dt, o = St;
    try {
      for (var c = Rn(a); c && (c.nodeType !== 8 || c.data !== "["); ) c = Cr(c);
      if (!c) throw Aa;
      Zn(!0), Vn(c);
      const l = Qc(n, { ...t, anchor: c });
      return Zn(!1), l;
    } catch (l) {
      if (l instanceof Error && l.message.split(`
`).some((i) => i.startsWith("https://svelte.dev/e/"))) throw l;
      return l !== Aa && console.warn("Failed to hydrate: ", l), t.recover === !1 && (function() {
        throw new Error("https://svelte.dev/e/hydration_failed");
      })(), Ts(), xc(a), Zn(!1), Nc(n, t);
    } finally {
      Zn(s), Vn(o);
    }
  }
  const bi = /* @__PURE__ */ new Map();
  function Qc(n, { target: t, anchor: r, props: a = {}, events: s, context: o, intro: c = !0 }) {
    Ts();
    var l = /* @__PURE__ */ new Set(), i = (b) => {
      for (var g = 0; g < b.length; g++) {
        var f = b[g];
        if (!l.has(f)) {
          l.add(f);
          var v = Wg(f);
          t.addEventListener(f, Yi, { passive: v });
          var w = bi.get(f);
          w === void 0 ? (document.addEventListener(f, Yi, { passive: v }), bi.set(f, 1)) : bi.set(f, w + 1);
        }
      }
    };
    i(Ss(Ec)), Ls.add(i);
    var u = void 0, h = (function(b) {
      La.ensure();
      const g = Ir(524352, b, !0);
      return (f = {}) => new Promise((v) => {
        f.outro ? na(g, () => {
          Fn(g), v(void 0);
        }) : (Fn(g), v(void 0));
      });
    })(() => {
      var b = r != null ? r : t.appendChild(Br());
      return (function(g, f, v) {
        new Ag(g, f, v);
      })(b, { pending: () => {
      } }, (g) => {
        if (o && (et({}), cn.c = o), s && (a.$$events = s), dt && rr(g, null), u = n(g, a) || {}, dt && (Vt.nodes_end = St, St === null || St.nodeType !== 8 || St.data !== "]")) throw Ni(), Aa;
        o && tt();
      }), () => {
        var g;
        for (var f of l) {
          t.removeEventListener(f, Yi);
          var v = bi.get(f);
          --v === 0 ? (document.removeEventListener(f, Yi), bi.delete(f)) : bi.set(f, v);
        }
        Ls.delete(i), b !== r && ((g = b.parentNode) == null || g.removeChild(b));
      };
    });
    return Rs.set(u, h), u;
  }
  let Rs = /* @__PURE__ */ new WeakMap();
  function Nl(n, t, ...r) {
    var a, s = n, o = Pr;
    ta(() => {
      o !== (o = t()) && (a && (Fn(a), a = null), a = Gn(() => o(s, ...r)));
    }, ri), dt && (s = St);
  }
  function Ea(n) {
    var t, r, a;
    cn === null && Xo(), ai && cn.l !== null ? (t = cn, a = t.l, (r = a.u) != null ? r : a.u = { a: [], b: [], m: [] }).m.push(n) : Xe(() => {
      const s = Jt(n);
      if (typeof s == "function") return s;
    });
  }
  function E(n, t, r = !1) {
    dt && pr();
    var a = n, s = null, o = null, c = An, l = !1;
    const i = (b, g = !0) => {
      l = !0, h(g, b);
    };
    function u() {
      var b = c ? s : o, g = c ? o : s;
      b && Ll(b), g && na(g, () => {
        c ? o = null : s = null;
      });
    }
    const h = (b, g) => {
      if (c === (c = b)) return;
      let f = !1;
      if (dt) {
        const w = ec(a) === Ml;
        !!c === w && (Vn(a = Vl()), Zn(!1), f = !0);
      }
      var v = a;
      c ? s != null || (s = g && Gn(() => g(v))) : o != null || (o = g && Gn(() => g(v))), u(), f && Zn(!0);
    };
    ta(() => {
      l = !1, t(i), l || h(null, null);
    }, r ? ri : 0), dt && (a = St);
  }
  function rt(n, t, r) {
    dt && pr();
    var a, s, o = n, c = An, l = oi() ? Bg : Tl;
    function i() {
      a && na(a), a = s;
    }
    ta(() => {
      if (l(c, c = t())) {
        var u = o;
        s = Gn(() => r(u)), i();
      }
    }), dt && (o = St);
  }
  function $r(n, t) {
    return t;
  }
  function At(n, t, r, a, s, o = null) {
    var c = n, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
    if (4 & t) {
      var i = n;
      c = dt ? Vn(Rn(i)) : i.appendChild(Br());
    }
    dt && pr();
    var u, h, b = null, g = !1, f = /* @__PURE__ */ new Map(), v = Fl(() => {
      var m = r();
      return Ei(m) ? m : m == null ? [] : Ss(m);
    });
    function w() {
      (function(m, z, S, B, q, Q, W, re, M) {
        var K, A, U, O, X, Z, I, C, N, H, J = !!(8 & W), oe = !!(3 & W), G = z.length, V = S.items, F = S.first, L = F, te = null, ue = [], R = [];
        if (J) for (H = 0; H < G; H += 1) C = re(I = z[H], H), (N = V.get(C)) !== void 0 && ((K = N.a) == null || K.measure(), (Z != null ? Z : Z = /* @__PURE__ */ new Set()).add(N));
        for (H = 0; H < G; H += 1) if (C = re(I = z[H], H), (N = V.get(C)) !== void 0) {
          if (oe && Zg(N, I, H, W), (N.e.f & Gr) !== 0 && (Ll(N.e), J && ((A = N.a) == null || A.unfix(), (Z != null ? Z : Z = /* @__PURE__ */ new Set()).delete(N))), N !== L) {
            if (X !== void 0 && X.has(N)) {
              if (ue.length < R.length) {
                var P, D = R[0];
                te = D.prev;
                var ae = ue[0], T = ue[ue.length - 1];
                for (P = 0; P < ue.length; P += 1) Ns(ue[P], D, q);
                for (P = 0; P < R.length; P += 1) X.delete(R[P]);
                Or(S, ae.prev, T.next), Or(S, te, ae), Or(S, T, D), L = D, te = T, H -= 1, ue = [], R = [];
              } else X.delete(N), Ns(N, L, q), Or(S, N.prev, N.next), Or(S, N, te === null ? S.first : te.next), Or(S, te, N), te = N;
              continue;
            }
            for (ue = [], R = []; L !== null && L.k !== C; ) (L.e.f & Gr) === 0 && (X != null ? X : X = /* @__PURE__ */ new Set()).add(L), R.push(L), L = L.next;
            if (L === null) continue;
            N = L;
          }
          ue.push(N), te = N, L = N.next;
        } else {
          var ee = B.get(C);
          if (ee !== void 0) {
            B.delete(C), V.set(C, ee);
            var Y = te ? te.next : L;
            Or(S, te, ee), Or(S, ee, Y), Ns(ee, Y, q), te = ee;
          } else
            te = Wc(L ? L.e.nodes_start : q, S, te, te === null ? S.first : te.next, I, C, H, Q, W, M);
          V.set(C, te), ue = [], R = [], L = te.next;
        }
        if (L !== null || X !== void 0) {
          for (var ie = X === void 0 ? [] : Ss(X); L !== null; ) (L.e.f & Gr) === 0 && ie.push(L), L = L.next;
          var me = ie.length;
          if (me > 0) {
            var Ce = 4 & W && G === 0 ? q : null;
            if (J) {
              for (H = 0; H < me; H += 1) (U = ie[H].a) == null || U.measure();
              for (H = 0; H < me; H += 1) (O = ie[H].a) == null || O.fix();
            }
            (function(xe, fe, ce) {
              for (var ne = xe.items, ge = [], Be = fe.length, Se = 0; Se < Be; Se++) Gs(fe[Se].e, ge, !0);
              var Le = Be > 0 && ge.length === 0 && ce !== null;
              if (Le) {
                var Ve = ce.parentNode;
                xc(Ve), Ve.append(ce), ne.clear(), Or(xe, fe[0].prev, fe[Be - 1].next);
              }
              zc(ge, () => {
                for (var le = 0; le < Be; le++) {
                  var De = fe[le];
                  Le || (ne.delete(De.k), Or(xe, De.prev, De.next)), Fn(De.e, !Le);
                }
              });
            })(S, ie, Ce);
          }
        }
        J && Fa(() => {
          var xe;
          if (Z !== void 0) for (N of Z) (xe = N.a) == null || xe.apply();
        });
        for (var ve of (m.first = S.first && S.first.e, m.last = te && te.e, B.values())) Fn(ve.e);
        B.clear();
      })(h, u, l, f, c, s, t, a, r), o !== null && (u.length === 0 ? b ? Ll(b) : b = Gn(() => o(c)) : b !== null && na(b, () => {
        b = null;
      }));
    }
    ta(() => {
      h != null || (h = Vt);
      var m = (u = e(v)).length;
      if (g && m === 0) return;
      g = m === 0;
      let z = !1;
      if (dt && ec(c) === Ml != (m === 0) && (Vn(c = Vl()), Zn(!1), z = !0), dt) {
        for (var S, B = null, q = 0; q < m; q++) {
          if (St.nodeType === 8 && St.data === "]") {
            c = St, z = !0, Zn(!1);
            break;
          }
          var Q = u[q], W = a(Q, q);
          S = Wc(St, l, B, null, Q, W, q, s, t, r), l.items.set(W, S), B = S;
        }
        m > 0 && Vn(Vl());
      }
      dt ? m === 0 && o && (b = Gn(() => o(c))) : w(), z && Zn(!0), e(v);
    }), dt && (c = St);
  }
  function Zg(n, t, r, a) {
    1 & a && gi(n.v, t), 2 & a ? gi(n.i, r) : n.i = r;
  }
  function Wc(n, t, r, a, s, o, c, l, i, u, h) {
    var b = 1 & i ? 16 & i ? ea(s) : Vs(s, !1, !1) : s, g = 2 & i ? ea(c) : c, f = { i: g, v: b, k: o, a: null, e: null, prev: r, next: a };
    try {
      return n === null && document.createDocumentFragment().append(n = Br()), f.e = Gn(() => l(n, b, g, u), dt), f.e.prev = r && r.e, f.e.next = a && a.e, r === null ? h || (t.first = f) : (r.next = f, r.e.next = f.e), a !== null && (a.prev = f, a.e.prev = f.e), f;
    } finally {
    }
  }
  function Ns(n, t, r) {
    for (var a = n.next ? n.next.e.nodes_start : r, s = t ? t.e.nodes_start : r, o = n.e.nodes_start; o !== null && o !== a; ) {
      var c = Cr(o);
      s.before(o), o = c;
    }
  }
  function Or(n, t, r) {
    t === null ? n.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
  }
  function Te(n, t, r = !1, a = !1, s = !1) {
    var o = n, c = "";
    be(() => {
      var l, i = Vt;
      if (c !== (c = (l = t()) != null ? l : "")) {
        if (i.nodes_start !== null && (Ic(i.nodes_start, i.nodes_end), i.nodes_start = i.nodes_end = null), c !== "") {
          if (dt) {
            St.data;
            for (var u = pr(), h = u; u !== null && (u.nodeType !== 8 || u.data !== ""); ) h = u, u = Cr(u);
            if (u === null) throw Ni(), Aa;
            return rr(St, h), void (o = Vn(u));
          }
          var b = c + "";
          r ? b = `<svg>${b}</svg>` : a && (b = `<math>${b}</math>`);
          var g = Es(b);
          if ((r || a) && (g = Rn(g)), rr(Rn(g), g.lastChild), r || a) for (; Rn(g); ) o.before(Rn(g));
          else o.before(g);
        }
      } else dt && pr();
    });
  }
  function Uc(n, t, r, a, s) {
    var o;
    dt && pr();
    var c = (o = t.$$slots) == null ? void 0 : o[r], l = !1;
    c === !0 && (c = t.children, l = !0), c === void 0 || c(n, l ? () => a : a);
  }
  function Hc(n, t, r) {
    dt && pr();
    var a, s, o = n, c = null;
    function l() {
      s && (na(s), s = null), s = c, c = null;
    }
    ta(() => {
      if (a !== (a = t())) {
        if (a) {
          var i = o;
          c = Gn(() => r(i, a));
        }
        l();
      }
    }, ri), dt && (o = St);
  }
  function Zc(n, t, r, a, s, o) {
    let c = dt;
    var l, i;
    dt && pr();
    var u = null;
    dt && St.nodeType === 1 && (u = St, pr());
    var h, b = dt ? St : n;
    ta(() => {
      const g = t() || null;
      var f = g === "svg" ? "http://www.w3.org/2000/svg" : null;
      g !== l && (h && (g === null ? na(h, () => {
        h = null, i = null;
      }) : g === i ? Ll(h) : Fn(h)), g && g !== i && (h = Gn(() => {
        if (rr(u = dt ? u : f ? document.createElementNS(f, g) : document.createElement(g), u), a) {
          dt && (w = g, Ug.includes(w)) && u.append(document.createComment(""));
          var v = dt ? Rn(u) : u.appendChild(Br());
          dt && (v === null ? Zn(!1) : Vn(v)), a(u, v);
        }
        var w;
        Vt.nodes_end = u, b.before(u);
      })), (l = g) && (i = l));
    }, ri), c && (Zn(!0), Vn(b));
  }
  function Qs(n, t, r) {
    Hi(() => {
      var a = Jt(() => t(n, r == null ? void 0 : r()) || {});
      if (r && (a != null && a.update)) {
        var s = !1, o = {};
        Zi(() => {
          var c = r();
          jc(c), s && Tl(o, c) && (o = c, a.update(c));
        }), s = !0;
      }
      if (a != null && a.destroy) return () => a.destroy();
    });
  }
  function Jg(n, t) {
    var r, a = void 0;
    ta(() => {
      a !== (a = t()) && (r && (Fn(r), r = null), a && (r = Gn(() => {
        Hi(() => a(n));
      })));
    });
  }
  function Jc(n) {
    var t, r, a = "";
    if (typeof n == "string" || typeof n == "number") a += n;
    else if (typeof n == "object") if (Array.isArray(n)) {
      var s = n.length;
      for (t = 0; t < s; t++) n[t] && (r = Jc(n[t])) && (a && (a += " "), a += r);
    } else for (r in n) n[r] && (a && (a += " "), a += r);
    return a;
  }
  function Ki(n) {
    return typeof n == "object" ? (function() {
      for (var t, r, a = 0, s = "", o = arguments.length; a < o; a++) (t = arguments[a]) && (r = Jc(t)) && (s && (s += " "), s += r);
      return s;
    })(n) : n != null ? n : "";
  }
  const Yc = [...` 	
\r\f \v\uFEFF`];
  function Kc(n, t = !1) {
    var r = t ? " !important;" : ";", a = "";
    for (var s in n) {
      var o = n[s];
      o != null && o !== "" && (a += " " + s + ": " + o + r);
    }
    return a;
  }
  function Ws(n) {
    return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
  }
  function Et(n, t, r, a, s, o) {
    var c = n.__className;
    if (dt || c !== r || c === void 0) {
      var l = (function(h, b, g) {
        var f = h == null ? "" : "" + h;
        if (b && (f = f ? f + " " + b : b), g) {
          for (var v in g) if (g[v]) f = f ? f + " " + v : v;
          else if (f.length) for (var w = v.length, m = 0; (m = f.indexOf(v, m)) >= 0; ) {
            var z = m + w;
            m !== 0 && !Yc.includes(f[m - 1]) || z !== f.length && !Yc.includes(f[z]) ? m = z : f = (m === 0 ? "" : f.substring(0, m)) + f.substring(z + 1);
          }
        }
        return f === "" ? null : f;
      })(r, a, o);
      dt && l === n.getAttribute("class") || (l == null ? n.removeAttribute("class") : t ? n.className = l : n.setAttribute("class", l)), n.__className = r;
    } else if (o && s !== o) for (var i in o) {
      var u = !!o[i];
      s != null && u === !!s[i] || n.classList.toggle(i, u);
    }
    return o;
  }
  function Us(n, t = {}, r, a) {
    for (var s in r) {
      var o = r[s];
      t[s] !== o && (r[s] == null ? n.style.removeProperty(s) : n.style.setProperty(s, o, a));
    }
  }
  function Tt(n, t, r, a) {
    var s = n.__style;
    if (dt || s !== t) {
      var o = (function(c, l) {
        if (l) {
          var i, u, h = "";
          if (Array.isArray(l) ? (i = l[0], u = l[1]) : i = l, c) {
            c = String(c).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
            var b = !1, g = 0, f = !1, v = [];
            i && v.push(...Object.keys(i).map(Ws)), u && v.push(...Object.keys(u).map(Ws));
            var w = 0, m = -1;
            const q = c.length;
            for (var z = 0; z < q; z++) {
              var S = c[z];
              if (f ? S === "/" && c[z - 1] === "*" && (f = !1) : b ? b === S && (b = !1) : S === "/" && c[z + 1] === "*" ? f = !0 : S === '"' || S === "'" ? b = S : S === "(" ? g++ : S === ")" && g--, !f && b === !1 && g === 0) {
                if (S === ":" && m === -1) m = z;
                else if (S === ";" || z === q - 1) {
                  if (m !== -1) {
                    var B = Ws(c.substring(w, m).trim());
                    v.includes(B) || (S !== ";" && z++, h += " " + c.substring(w, z).trim() + ";");
                  }
                  w = z + 1, m = -1;
                }
              }
            }
          }
          return i && (h += Kc(i)), u && (h += Kc(u, !0)), (h = h.trim()) === "" ? null : h;
        }
        return c == null ? null : String(c);
      })(t, a);
      dt && o === n.getAttribute("style") || (o == null ? n.removeAttribute("style") : n.style.cssText = o), n.__style = t;
    } else a && (Array.isArray(a) ? (Us(n, r == null ? void 0 : r[0], a[0]), Us(n, r == null ? void 0 : r[1], a[1], "important")) : Us(n, r, a));
    return a;
  }
  function Xi(n, t, r = !1) {
    if (n.multiple) {
      if (t == null) return;
      if (!Ei(t)) return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");
      for (var a of n.options) a.selected = t.includes(Xc(a));
    } else {
      for (a of n.options)
        if (Tg(Xc(a), t)) return void (a.selected = !0);
      r && t === void 0 || (n.selectedIndex = -1);
    }
  }
  function Hs(n) {
    var t = new MutationObserver(() => {
      Xi(n, n.__value);
    });
    t.observe(n, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["value"] }), qs(() => {
      t.disconnect();
    });
  }
  function Xc(n) {
    return "__value" in n ? n.__value : n.value;
  }
  const fi = Symbol("class"), vi = Symbol("style"), eu = Symbol("is custom element"), tu = Symbol("is html");
  function ra(n) {
    if (dt) {
      var t, r = !1, a = () => {
        if (!r) {
          if (r = !0, n.hasAttribute("value")) {
            var s = n.value;
            we(n, "value", null), n.value = s;
          }
          if (n.hasAttribute("checked")) {
            var o = n.checked;
            we(n, "checked", null), n.checked = o;
          }
        }
      };
      n.__on_r = a, t = a, ci.length === 0 && Ig(ic), ci.push(t), wc();
    }
  }
  function Ra(n, t) {
    var r = Ql(n);
    r.value !== (r.value = t != null ? t : void 0) && (n.value !== t || t === 0 && n.nodeName === "PROGRESS") && (n.value = t != null ? t : "");
  }
  function el(n, t) {
    var r = Ql(n);
    r.checked !== (r.checked = t != null ? t : void 0) && (n.checked = t);
  }
  function Yg(n, t) {
    t ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
  }
  function we(n, t, r, a) {
    var s = Ql(n);
    dt && (s[t] = n.getAttribute(t), t === "src" || t === "srcset" || t === "href" && n.nodeName === "LINK") || s[t] !== (s[t] = r) && (t === "loading" && (n[Sg] = r), r == null ? n.removeAttribute(t) : typeof r != "string" && au(n).includes(t) ? n[t] = r : n.setAttribute(t, r));
  }
  function nu(n, t, r = [], a = [], s, o = !1, c = !1) {
    dc(r, a, (l) => {
      var i = void 0, u = {}, h = n.nodeName === "SELECT", b = !1;
      if (ta(() => {
        var f = t(...l.map(e)), v = (function(m, z, S, B, q = !1) {
          if (dt && q && m.tagName === "INPUT") {
            var Q = m;
            (Q.type === "checkbox" ? "defaultChecked" : "defaultValue") in S || ra(Q);
          }
          var W = Ql(m), re = W[eu], M = !W[tu];
          let K = dt && re;
          K && Zn(!1);
          var A = z || {}, U = m.tagName === "OPTION";
          for (var O in z) O in S || (S[O] = null);
          S.class ? S.class = Ki(S.class) : S[fi] && (S.class = null), S[vi] && (S.style != null || (S.style = null));
          var X = au(m);
          for (const J in S) {
            let oe = S[J];
            if (U && J === "value" && oe == null) m.value = m.__value = "", A[J] = oe;
            else if (J !== "class") if (J !== "style") {
              var Z = A[J];
              if (oe !== Z || oe === void 0 && m.hasAttribute(J)) {
                A[J] = oe;
                var I = J[0] + J[1];
                if (I !== "$$") if (I === "on") {
                  const G = {}, V = "$$" + J;
                  let F = J.slice(2);
                  var C = Eg(F);
                  if (Lg(F) && (F = F.slice(0, -7), G.capture = !0), !C && Z) {
                    if (oe != null) continue;
                    m.removeEventListener(F, A[V], G), A[V] = null;
                  }
                  if (oe != null) if (C) m[`__${F}`] = oe, On([F]);
                  else {
                    let L = function(te) {
                      A[J].call(this, te);
                    };
                    A[V] = js(F, m, L, G);
                  }
                  else C && (m[`__${F}`] = void 0);
                } else if (J === "style") we(m, J, oe);
                else if (J === "autofocus") qg(m, !!oe);
                else if (re || J !== "__value" && (J !== "value" || oe == null)) if (J === "selected" && U) Yg(m, oe);
                else {
                  var N = J;
                  M || (N = Ng(N));
                  var H = N === "defaultValue" || N === "defaultChecked";
                  if (oe != null || re || H) H || X.includes(N) && (re || typeof oe != "string") ? (m[N] = oe, N in W && (W[N] = An)) : typeof oe != "function" && we(m, N, oe);
                  else if (W[J] = null, N === "value" || N === "checked") {
                    let G = m;
                    const V = z === void 0;
                    if (N === "value") {
                      let F = G.defaultValue;
                      G.removeAttribute(N), G.defaultValue = F, G.value = G.__value = V ? F : null;
                    } else {
                      let F = G.defaultChecked;
                      G.removeAttribute(N), G.defaultChecked = F, G.checked = !!V && F;
                    }
                  } else m.removeAttribute(J);
                }
                else m.value = m.__value = oe;
              }
            } else Tt(m, oe, z == null ? void 0 : z[vi], S[vi]), A[J] = oe, A[vi] = S[vi];
            else Et(m, m.namespaceURI === "http://www.w3.org/1999/xhtml", oe, B, z == null ? void 0 : z[fi], S[fi]), A[J] = oe, A[fi] = S[fi];
          }
          return K && Zn(!0), A;
        })(n, i, f, s, o, c);
        b && h && "value" in f && Xi(n, f.value);
        for (let m of Object.getOwnPropertySymbols(u)) f[m] || Fn(u[m]);
        for (let m of Object.getOwnPropertySymbols(f)) {
          var w = f[m];
          m.description !== "@attach" || i && w === i[m] || (u[m] && Fn(u[m]), u[m] = Gn(() => Jg(n, () => w))), v[m] = w;
        }
        i = v;
      }), h) {
        var g = n;
        Hi(() => {
          Xi(g, i.value, !0), Hs(g);
        });
      }
      b = !0;
    });
  }
  function Ql(n) {
    var t;
    return (t = n.__attributes) != null ? t : n.__attributes = { [eu]: n.nodeName.includes("-"), [tu]: n.namespaceURI === "http://www.w3.org/1999/xhtml" };
  }
  var ru = /* @__PURE__ */ new Map();
  function au(n) {
    var t, r = n.getAttribute("is") || n.nodeName, a = ru.get(r);
    if (a) return a;
    ru.set(r, a = []);
    for (var s = n, o = Element.prototype; o !== s; ) {
      for (var c in t = Uo(s)) t[c].set && a.push(c);
      s = $l(s);
    }
    return a;
  }
  function Kg(n, t, r = t) {
    var a = /* @__PURE__ */ new WeakSet();
    (function(s, o, c, l = c) {
      s.addEventListener(o, () => Ol(c));
      const i = s.__on_r;
      s.__on_r = i ? () => {
        i(), l(!0);
      } : () => l(!0), wc();
    })(n, "input", async (s) => {
      var o = s ? n.defaultValue : n.value;
      if (o = Zs(n) ? Js(o) : o, r(o), _n !== null && a.add(_n), await Fs(), o !== (o = t())) {
        var c = n.selectionStart, l = n.selectionEnd;
        n.value = o != null ? o : "", l !== null && (n.selectionStart = c, n.selectionEnd = Math.min(l, n.value.length));
      }
    }), (dt && n.defaultValue !== n.value || Jt(t) == null && n.value) && (r(Zs(n) ? Js(n.value) : n.value), _n !== null && a.add(_n)), Zi(() => {
      var s = t();
      if (n === document.activeElement) {
        var o = Qi != null ? Qi : _n;
        if (a.has(o)) return;
      }
      Zs(n) && s === Js(n.value) || (n.type !== "date" || s || n.value) && s !== n.value && (n.value = s != null ? s : "");
    });
  }
  function Zs(n) {
    var t = n.type;
    return t === "number" || t === "range";
  }
  function Js(n) {
    return n === "" ? null : +n;
  }
  const Ys = class {
    constructor(n) {
      xt(this, ms), xt(this, $a, /* @__PURE__ */ new WeakMap()), xt(this, Fi), xt(this, wl), yt(this, wl, n);
    }
    observe(n, t) {
      var r = ke(this, $a).get(n) || /* @__PURE__ */ new Set();
      return r.add(t), ke(this, $a).set(n, r), sn(this, ms, Ro).call(this).observe(n, ke(this, wl)), () => {
        var a = ke(this, $a).get(n);
        a.delete(t), a.size === 0 && (ke(this, $a).delete(n), ke(this, Fi).unobserve(n));
      };
    }
  };
  $a = /* @__PURE__ */ new WeakMap(), Fi = /* @__PURE__ */ new WeakMap(), wl = /* @__PURE__ */ new WeakMap(), ms = /* @__PURE__ */ new WeakSet(), Ro = function() {
    var n;
    return (n = ke(this, Fi)) != null ? n : yt(this, Fi, new ResizeObserver((t) => {
      for (var r of t) for (var a of (Ys.entries.set(r.target, r), ke(this, $a).get(r.target) || [])) a(r);
    }));
  }, Sn(Ys, "entries", /* @__PURE__ */ new WeakMap());
  var Xg = new Ys({ box: "border-box" });
  function Wl(n, t, r) {
    var a = Xg.observe(n, () => r(n[t]));
    Hi(() => (Jt(() => r(n[t])), a));
  }
  function iu(n, t) {
    return n === t || (n == null ? void 0 : n[Xr]) === t;
  }
  function _i(n = {}, t, r, a) {
    return Hi(() => {
      var s, o;
      return Zi(() => {
        s = o, o = [], Jt(() => {
          n !== r(...o) && (t(n, ...o), s && iu(r(...s), n) && t(null, ...s));
        });
      }), () => {
        Fa(() => {
          o && iu(r(...o), n) && t(null, ...o);
        });
      };
    }), n;
  }
  function lu(n, t) {
    if (n.l.s) for (const r of n.l.s) e(r);
    t();
  }
  function su(n, t, r) {
    if (n == null) return t(void 0), Pr;
    const a = Jt(() => n.subscribe(t, r));
    return a.unsubscribe ? () => a.unsubscribe() : a;
  }
  const ki = [];
  function aa(n, t = Pr) {
    let r = null;
    const a = /* @__PURE__ */ new Set();
    function s(c) {
      if (Tl(n, c) && (n = c, r)) {
        const l = !ki.length;
        for (const i of a) i[1](), ki.push(i, n);
        if (l) {
          for (let i = 0; i < ki.length; i += 2) ki[i][0](ki[i + 1]);
          ki.length = 0;
        }
      }
    }
    function o(c) {
      s(c(n));
    }
    return { set: s, update: o, subscribe: function(c, l = Pr) {
      const i = [c, l];
      return a.add(i), a.size === 1 && (r = t(s, o) || Pr), c(n), () => {
        a.delete(i), a.size === 0 && r && (r(), r = null);
      };
    } };
  }
  let ou, Ul = !1, Ks = Symbol();
  function ze(n, t, r) {
    var a;
    const s = (a = r[t]) != null ? a : r[t] = { store: null, source: Vs(void 0), unsubscribe: Pr };
    if (s.store !== n && !(Ks in r)) if (s.unsubscribe(), s.store = n != null ? n : null, n == null) s.source.v = void 0, s.unsubscribe = Pr;
    else {
      var o = !0;
      s.unsubscribe = su(n, (c) => {
        o ? s.source.v = c : se(s.source, c);
      }), o = !1;
    }
    return n && Ks in r ? (function(c) {
      let l;
      return su(c, (i) => l = i)(), l;
    })(n) : e(s.source);
  }
  function vt() {
    const n = {};
    return [n, function() {
      qs(() => {
        for (var t in n)
          n[t].unsubscribe();
        Va(n, Ks, { enumerable: !1, value: !0 });
      });
    }];
  }
  function k(n, t, r, a) {
    var s, o, c, l, i = !ai || !!(2 & r), u = !!(8 & r), h = !!(16 & r), b = a, g = !0, f = () => (g && (g = !1, b = h ? Jt(a) : a), b);
    if (u) {
      var v = Xr in n || Ko in n;
      c = (o = (s = Ta(n, t)) == null ? void 0 : s.set) != null ? o : v && t in n ? (Q) => n[t] = Q : void 0;
    }
    var w, m = !1;
    if (u ? [l, m] = (function(Q) {
      var W = Ul;
      try {
        return Ul = !1, [Q(), Ul];
      } finally {
        Ul = W;
      }
    })(() => n[t]) : l = n[t], l === void 0 && a !== void 0 && (l = f(), c && (i && (function() {
      throw new Error("https://svelte.dev/e/props_invalid_value");
    })(), c(l))), w = i ? () => {
      var Q = n[t];
      return Q === void 0 ? f() : (g = !0, Q);
    } : () => {
      var Q = n[t];
      return Q !== void 0 && (b = void 0), Q === void 0 ? b : Q;
    }, i && !(4 & r)) return w;
    if (c) {
      var z = n.$$legacy;
      return function(Q, W) {
        return arguments.length > 0 ? (i && W && !z && !m || c(W ? w() : Q), Q) : w();
      };
    }
    var S = !1, B = (1 & r ? Ui : Fl)(() => (S = !1, w()));
    u && e(B);
    var q = Vt;
    return function(Q, W) {
      if (arguments.length > 0) {
        const re = W ? e(B) : i && u ? lt(Q) : Q;
        return se(B, re), S = !0, b !== void 0 && (b = re), Q;
      }
      return ja && S || (q.f & ni) !== 0 ? B.v : e(B);
    };
  }
  class eh {
    constructor(t) {
      var r, a;
      xt(this, ga), xt(this, wr);
      var s = /* @__PURE__ */ new Map(), o = (l, i) => {
        var u = Vs(i, !1, !1);
        return s.set(l, u), u;
      };
      const c = new Proxy({ ...t.props || {}, $$events: {} }, { get(l, i) {
        var u;
        return e((u = s.get(i)) != null ? u : o(i, Reflect.get(l, i)));
      }, has(l, i) {
        var u;
        return i === Ko || (e((u = s.get(i)) != null ? u : o(i, Reflect.get(l, i))), Reflect.has(l, i));
      }, set(l, i, u) {
        var h;
        return se((h = s.get(i)) != null ? h : o(i, u), u), Reflect.set(l, i, u);
      } });
      yt(this, wr, (t.hydrate ? Hg : Nc)(t.component, { target: t.target, anchor: t.anchor, props: c, context: t.context, intro: (r = t.intro) != null && r, recover: t.recover })), (a = t == null ? void 0 : t.props) != null && a.$$host && t.sync !== !1 || _(), yt(this, ga, c.$$events);
      for (const l of Object.keys(ke(this, wr))) l !== "$set" && l !== "$destroy" && l !== "$on" && Va(this, l, { get() {
        return ke(this, wr)[l];
      }, set(i) {
        ke(this, wr)[l] = i;
      }, enumerable: !0 });
      ke(this, wr).$set = (l) => {
        Object.assign(c, l);
      }, ke(this, wr).$destroy = () => {
        (function(l, i) {
          const u = Rs.get(l);
          u ? (Rs.delete(l), u(i)) : Promise.resolve();
        })(ke(this, wr));
      };
    }
    $set(t) {
      ke(this, wr).$set(t);
    }
    $on(t, r) {
      ke(this, ga)[t] = ke(this, ga)[t] || [];
      const a = (...s) => r.call(this, ...s);
      return ke(this, ga)[t].push(a), () => {
        ke(this, ga)[t] = ke(this, ga)[t].filter((s) => s !== a);
      };
    }
    $destroy() {
      ke(this, wr).$destroy();
    }
  }
  function Hl(n, t, r, a) {
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
  function He(n, t, r, a, s, o) {
    let c = class extends ou {
      constructor() {
        super(n, r, s), this.$$p_d = t;
      }
      static get observedAttributes() {
        return zl(t).map((l) => (t[l].attribute || l).toLowerCase());
      }
    };
    return zl(t).forEach((l) => {
      Va(c.prototype, l, { get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      }, set(i) {
        var u;
        i = Hl(l, i, t), this.$$d[l] = i;
        var h = this.$$c;
        h && ((u = Ta(h, l)) != null && u.get ? h[l] = i : h.$set({ [l]: i }));
      } });
    }), a.forEach((l) => {
      Va(c.prototype, l, { get() {
        var i;
        return (i = this.$$c) == null ? void 0 : i[l];
      } });
    }), o && (c = o(c)), n.element = c, c;
  }
  ga = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), typeof HTMLElement == "function" && (ou = class extends HTMLElement {
    constructor(n, t, r) {
      super(), Sn(this, "$$ctor"), Sn(this, "$$s"), Sn(this, "$$c"), Sn(this, "$$cn", !1), Sn(this, "$$d", {}), Sn(this, "$$r", !1), Sn(this, "$$p_d", {}), Sn(this, "$$l", {}), Sn(this, "$$l_u", /* @__PURE__ */ new Map()), Sn(this, "$$me"), this.$$ctor = n, this.$$s = t, r && this.attachShadow({ mode: "open" });
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
          o in this.$$d || (this.$$d[o] = Hl(o, s.value, this.$$p_d, "toProp"));
        }
        for (const s in this.$$p_d) s in this.$$d || this[s] === void 0 || (this.$$d[s] = this[s], delete this[s]);
        this.$$c = (n = { component: this.$$ctor, target: this.shadowRoot || this, props: { ...this.$$d, $$slots: r, $$host: this } }, new eh(n)), this.$$me = (function(s) {
          La.ensure();
          const o = Ir(524352, s, !0);
          return () => {
            Fn(o);
          };
        })(() => {
          Zi(() => {
            var s;
            this.$$r = !0;
            for (const o of zl(this.$$c)) {
              if (!((s = this.$$p_d[o]) != null && s.reflect)) continue;
              this.$$d[o] = this.$$c[o];
              const c = Hl(o, this.$$d[o], this.$$p_d, "toAttribute");
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
      this.$$r || (n = this.$$g_p(n), this.$$d[n] = Hl(n, r, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [n]: this.$$d[n] }));
    }
    disconnectedCallback() {
      this.$$cn = !1, Promise.resolve().then(() => {
        !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
      });
    }
    $$g_p(n) {
      return zl(this.$$p_d).find((t) => this.$$p_d[t].attribute === n || !this.$$p_d[t].attribute && t.toLowerCase() === n) || n;
    }
  });
  const th = ["primaryBackground", "secondaryBackground", "primaryText", "secondaryText", "border", "overlay", "primaryAccent", "primaryAccentText", "badgeBackground", "badgeText", "error"].map((n) => `brand_${n}`), nh = { primaryBackground: "#EDEDED", secondaryBackground: "#FFFFFF", primaryText: "#000000", secondaryText: "#555555", border: "#E3E3E3", overlay: "#000000", primaryAccent: "#000000", primaryAccentText: "#FFFFFF", badgeBackground: "#000000", badgeText: "#FFFFFF", error: "#D72C2C" };
  function cu(n) {
    return typeof n == "string" && th.includes(n);
  }
  function rh(n, t) {
    return cu(n) ? (function(r) {
      const a = r.slice(1).match(/../g).map((s) => parseInt(s, 16));
      return { red: a[0], green: a[1], blue: a[2], alpha: a.length > 3 ? a[3] / 255 : 1 };
    })((function(r, a) {
      var s;
      const o = (function(c) {
        return c.slice(6);
      })(r);
      return (s = a == null ? void 0 : a[o]) != null ? s : nh[o];
    })(n, t)) : n;
  }
  var gt = ((n) => (n.QuantityBreak = "quantity-break", n.Bxgy = "bxgy", n.Bundle = "bundle", n.MixAndMatch = "mix-and-match", n.Sku = "sku", n))(gt || {});
  function or(n, t) {
    return cu(n) ? rh(n, t) : Array.isArray(n) ? n.map((r) => or(r, t)) : n && typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r, a]) => [r, or(a, t)])) : n;
  }
  const uu = "swatchSettings", tl = (n) => {
    const t = aa(n);
    return si(uu, t), { swatchSettings: t, setSwatchSettings: (r) => {
      t.set(r);
    } };
  }, du = () => {
    const n = li(uu);
    if (!n) throw new Error("getSwatchSettings must be called within a component tree that has setupSwatchSettings initialized");
    return n;
  };
  var ah = $("<span> </span>"), ih = $("<div></div>");
  function ia(n, t) {
    et(t, !0);
    const [r, a] = vt(), s = k(t, "product", 7), o = k(t, "class", 7, ""), c = du(), l = d(() => ze(c, "$swatchSettings", r).showSelectedSwatchName ? [] : s().options.map((f) => f.name));
    var i = { get product() {
      return s();
    }, set product(f) {
      s(f), _();
    }, get class() {
      return o();
    }, set class(f = "") {
      o(f), _();
    } }, u = Me(), h = pe(u), b = (f) => {
      var v = ih();
      At(v, 21, () => e(l), $r, (w, m) => {
        var z = ah(), S = y(z, !0);
        x(z), be(() => ht(S, e(m))), p(w, z);
      }), x(v), be(() => Et(v, 1, Ki(["kaching-bundles__bar-variant-names", o()]))), p(f, v);
    };
    E(h, (f) => {
      e(l).length && f(b);
    }), p(n, u);
    var g = tt(i);
    return a(), g;
  }
  He(ia, { product: {}, class: {} }, [], [], !0);
  const Zl = Math.min, Na = Math.max, Jl = Math.round, Yl = Math.floor, Lr = (n) => ({ x: n, y: n }), lh = { left: "right", right: "left", bottom: "top", top: "bottom" }, sh = { start: "end", end: "start" };
  function gu(n, t, r) {
    return Na(n, Zl(t, r));
  }
  function Kl(n, t) {
    return typeof n == "function" ? n(t) : n;
  }
  function Qa(n) {
    return n.split("-")[0];
  }
  function Xl(n) {
    return n.split("-")[1];
  }
  function hu(n) {
    return n === "x" ? "y" : "x";
  }
  function pu(n) {
    return n === "y" ? "height" : "width";
  }
  const oh = /* @__PURE__ */ new Set(["top", "bottom"]);
  function ma(n) {
    return oh.has(Qa(n)) ? "y" : "x";
  }
  function bu(n) {
    return hu(ma(n));
  }
  function Xs(n) {
    return n.replace(/start|end/g, (t) => sh[t]);
  }
  const fu = ["left", "right"], vu = ["right", "left"], ch = ["top", "bottom"], uh = ["bottom", "top"];
  function dh(n, t, r, a) {
    const s = Xl(n);
    let o = (function(c, l, i) {
      switch (c) {
        case "top":
        case "bottom":
          return i ? l ? vu : fu : l ? fu : vu;
        case "left":
        case "right":
          return l ? ch : uh;
        default:
          return [];
      }
    })(Qa(n), r === "start", a);
    return s && (o = o.map((c) => c + "-" + s), t && (o = o.concat(o.map(Xs)))), o;
  }
  function es(n) {
    return n.replace(/left|right|bottom|top/g, (t) => lh[t]);
  }
  function ts(n) {
    const { x: t, y: r, width: a, height: s } = n;
    return { width: a, height: s, top: r, left: t, right: t + a, bottom: r + s, x: t, y: r };
  }
  function _u(n, t, r) {
    let { reference: a, floating: s } = n;
    const o = ma(t), c = bu(t), l = pu(c), i = Qa(t), u = o === "y", h = a.x + a.width / 2 - s.width / 2, b = a.y + a.height / 2 - s.height / 2, g = a[l] / 2 - s[l] / 2;
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
    switch (Xl(t)) {
      case "start":
        f[c] -= g * (r && u ? -1 : 1);
        break;
      case "end":
        f[c] += g * (r && u ? -1 : 1);
    }
    return f;
  }
  async function ku(n, t) {
    var r;
    t === void 0 && (t = {});
    const { x: a, y: s, platform: o, rects: c, elements: l, strategy: i } = n, { boundary: u = "clippingAncestors", rootBoundary: h = "viewport", elementContext: b = "floating", altBoundary: g = !1, padding: f = 0 } = Kl(t, n), v = (function(Q) {
      return typeof Q != "number" ? (function(W) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...W };
      })(Q) : { top: Q, right: Q, bottom: Q, left: Q };
    })(f), w = l[g ? b === "floating" ? "reference" : "floating" : b], m = ts(await o.getClippingRect({ element: (r = await (o.isElement == null ? void 0 : o.isElement(w))) == null || r ? w : w.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: u, rootBoundary: h, strategy: i })), z = b === "floating" ? { x: a, y: s, width: c.floating.width, height: c.floating.height } : c.reference, S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), B = await (o.isElement == null ? void 0 : o.isElement(S)) && await (o.getScale == null ? void 0 : o.getScale(S)) || { x: 1, y: 1 }, q = ts(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l, rect: z, offsetParent: S, strategy: i }) : z);
    return { top: (m.top - q.top + v.top) / B.y, bottom: (q.bottom - m.bottom + v.bottom) / B.y, left: (m.left - q.left + v.left) / B.x, right: (q.right - m.right + v.right) / B.x };
  }
  const gh = /* @__PURE__ */ new Set(["left", "top"]);
  function ns() {
    return typeof window != "undefined";
  }
  function mi(n) {
    return mu(n) ? (n.nodeName || "").toLowerCase() : "#document";
  }
  function cr(n) {
    var t;
    return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
  }
  function jr(n) {
    var t;
    return (t = (mu(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
  }
  function mu(n) {
    return !!ns() && (n instanceof Node || n instanceof cr(n).Node);
  }
  function Dr(n) {
    return !!ns() && (n instanceof Element || n instanceof cr(n).Element);
  }
  function Er(n) {
    return !!ns() && (n instanceof HTMLElement || n instanceof cr(n).HTMLElement);
  }
  function xu(n) {
    return !(!ns() || typeof ShadowRoot == "undefined") && (n instanceof ShadowRoot || n instanceof cr(n).ShadowRoot);
  }
  const hh = /* @__PURE__ */ new Set(["inline", "contents"]);
  function nl(n) {
    const { overflow: t, overflowX: r, overflowY: a, display: s } = Ar(n);
    return /auto|scroll|overlay|hidden|clip/.test(t + a + r) && !hh.has(s);
  }
  const ph = /* @__PURE__ */ new Set(["table", "td", "th"]);
  function bh(n) {
    return ph.has(mi(n));
  }
  const fh = [":popover-open", ":modal"];
  function rs(n) {
    return fh.some((t) => {
      try {
        return n.matches(t);
      } catch {
        return !1;
      }
    });
  }
  const vh = ["transform", "translate", "scale", "rotate", "perspective"], _h = ["transform", "translate", "scale", "rotate", "perspective", "filter"], kh = ["paint", "layout", "strict", "content"];
  function eo(n) {
    const t = to(), r = Dr(n) ? Ar(n) : n;
    return vh.some((a) => !!r[a] && r[a] !== "none") || !!r.containerType && r.containerType !== "normal" || !t && !!r.backdropFilter && r.backdropFilter !== "none" || !t && !!r.filter && r.filter !== "none" || _h.some((a) => (r.willChange || "").includes(a)) || kh.some((a) => (r.contain || "").includes(a));
  }
  function to() {
    return !(typeof CSS == "undefined" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
  }
  const mh = /* @__PURE__ */ new Set(["html", "body", "#document"]);
  function xi(n) {
    return mh.has(mi(n));
  }
  function Ar(n) {
    return cr(n).getComputedStyle(n);
  }
  function as(n) {
    return Dr(n) ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop } : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
  }
  function xa(n) {
    if (mi(n) === "html") return n;
    const t = n.assignedSlot || n.parentNode || xu(n) && n.host || jr(n);
    return xu(t) ? t.host : t;
  }
  function yu(n) {
    const t = xa(n);
    return xi(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : Er(t) && nl(t) ? t : yu(t);
  }
  function rl(n, t, r) {
    var a;
    t === void 0 && (t = []), r === void 0 && (r = !0);
    const s = yu(n), o = s === ((a = n.ownerDocument) == null ? void 0 : a.body), c = cr(s);
    if (o) {
      const l = no(c);
      return t.concat(c, c.visualViewport || [], nl(s) ? s : [], l && r ? rl(l) : []);
    }
    return t.concat(s, rl(s, [], r));
  }
  function no(n) {
    return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
  }
  function wu(n) {
    const t = Ar(n);
    let r = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
    const s = Er(n), o = s ? n.offsetWidth : r, c = s ? n.offsetHeight : a, l = Jl(r) !== o || Jl(a) !== c;
    return l && (r = o, a = c), { width: r, height: a, $: l };
  }
  function ro(n) {
    return Dr(n) ? n : n.contextElement;
  }
  function yi(n) {
    const t = ro(n);
    if (!Er(t)) return Lr(1);
    const r = t.getBoundingClientRect(), { width: a, height: s, $: o } = wu(t);
    let c = (o ? Jl(r.width) : r.width) / a, l = (o ? Jl(r.height) : r.height) / s;
    return c && Number.isFinite(c) || (c = 1), l && Number.isFinite(l) || (l = 1), { x: c, y: l };
  }
  const xh = Lr(0);
  function Pu(n) {
    const t = cr(n);
    return to() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : xh;
  }
  function Wa(n, t, r, a) {
    t === void 0 && (t = !1), r === void 0 && (r = !1);
    const s = n.getBoundingClientRect(), o = ro(n);
    let c = Lr(1);
    t && (a ? Dr(a) && (c = yi(a)) : c = yi(n));
    const l = (function(g, f, v) {
      return f === void 0 && (f = !1), !(!v || f && v !== cr(g)) && f;
    })(o, r, a) ? Pu(o) : Lr(0);
    let i = (s.left + l.x) / c.x, u = (s.top + l.y) / c.y, h = s.width / c.x, b = s.height / c.y;
    if (o) {
      const g = cr(o), f = a && Dr(a) ? cr(a) : a;
      let v = g, w = no(v);
      for (; w && a && f !== v; ) {
        const m = yi(w), z = w.getBoundingClientRect(), S = Ar(w), B = z.left + (w.clientLeft + parseFloat(S.paddingLeft)) * m.x, q = z.top + (w.clientTop + parseFloat(S.paddingTop)) * m.y;
        i *= m.x, u *= m.y, h *= m.x, b *= m.y, i += B, u += q, v = cr(w), w = no(v);
      }
    }
    return ts({ width: h, height: b, x: i, y: u });
  }
  function is(n, t) {
    const r = as(n).scrollLeft;
    return t ? t.left + r : Wa(jr(n)).left + r;
  }
  function Su(n, t) {
    const r = n.getBoundingClientRect();
    return { x: r.left + t.scrollLeft - is(n, r), y: r.top + t.scrollTop };
  }
  const yh = /* @__PURE__ */ new Set(["absolute", "fixed"]);
  function Bu(n, t, r) {
    let a;
    if (t === "viewport") a = (function(s, o) {
      const c = cr(s), l = jr(s), i = c.visualViewport;
      let u = l.clientWidth, h = l.clientHeight, b = 0, g = 0;
      if (i) {
        u = i.width, h = i.height;
        const v = to();
        (!v || v && o === "fixed") && (b = i.offsetLeft, g = i.offsetTop);
      }
      const f = is(l);
      if (f <= 0) {
        const v = l.ownerDocument, w = v.body, m = getComputedStyle(w), z = v.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, S = Math.abs(l.clientWidth - w.clientWidth - z);
        S <= 25 && (u -= S);
      } else f <= 25 && (u += f);
      return { width: u, height: h, x: b, y: g };
    })(n, r);
    else if (t === "document") a = (function(s) {
      const o = jr(s), c = as(s), l = s.ownerDocument.body, i = Na(o.scrollWidth, o.clientWidth, l.scrollWidth, l.clientWidth), u = Na(o.scrollHeight, o.clientHeight, l.scrollHeight, l.clientHeight);
      let h = -c.scrollLeft + is(s);
      const b = -c.scrollTop;
      return Ar(l).direction === "rtl" && (h += Na(o.clientWidth, l.clientWidth) - i), { width: i, height: u, x: h, y: b };
    })(jr(n));
    else if (Dr(t)) a = (function(s, o) {
      const c = Wa(s, !0, o === "fixed"), l = c.top + s.clientTop, i = c.left + s.clientLeft, u = Er(s) ? yi(s) : Lr(1);
      return { width: s.clientWidth * u.x, height: s.clientHeight * u.y, x: i * u.x, y: l * u.y };
    })(t, r);
    else {
      const s = Pu(n);
      a = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
    }
    return ts(a);
  }
  function Cu(n, t) {
    const r = xa(n);
    return !(r === t || !Dr(r) || xi(r)) && (Ar(r).position === "fixed" || Cu(r, t));
  }
  function wh(n, t, r) {
    const a = Er(t), s = jr(t), o = r === "fixed", c = Wa(n, !0, o, t);
    let l = { scrollLeft: 0, scrollTop: 0 };
    const i = Lr(0);
    function u() {
      i.x = is(s);
    }
    if (a || !a && !o) if ((mi(t) !== "body" || nl(s)) && (l = as(t)), a) {
      const b = Wa(t, !0, o, t);
      i.x = b.x + t.clientLeft, i.y = b.y + t.clientTop;
    } else s && u();
    o && !a && s && u();
    const h = !s || a || o ? Lr(0) : Su(s, l);
    return { x: c.left + l.scrollLeft - i.x - h.x, y: c.top + l.scrollTop - i.y - h.y, width: c.width, height: c.height };
  }
  function ao(n) {
    return Ar(n).position === "static";
  }
  function Iu(n, t) {
    if (!Er(n) || Ar(n).position === "fixed") return null;
    if (t) return t(n);
    let r = n.offsetParent;
    return jr(n) === r && (r = r.ownerDocument.body), r;
  }
  function Mu(n, t) {
    const r = cr(n);
    if (rs(n)) return r;
    if (!Er(n)) {
      let s = xa(n);
      for (; s && !xi(s); ) {
        if (Dr(s) && !ao(s)) return s;
        s = xa(s);
      }
      return r;
    }
    let a = Iu(n, t);
    for (; a && bh(a) && ao(a); ) a = Iu(a, t);
    return a && xi(a) && ao(a) && !eo(a) ? r : a || (function(s) {
      let o = xa(s);
      for (; Er(o) && !xi(o); ) {
        if (eo(o)) return o;
        if (rs(o)) return null;
        o = xa(o);
      }
      return null;
    })(n) || r;
  }
  const Ph = { convertOffsetParentRelativeRectToViewportRelativeRect: function(n) {
    let { elements: t, rect: r, offsetParent: a, strategy: s } = n;
    const o = s === "fixed", c = jr(a), l = !!t && rs(t.floating);
    if (a === c || l && o) return r;
    let i = { scrollLeft: 0, scrollTop: 0 }, u = Lr(1);
    const h = Lr(0), b = Er(a);
    if ((b || !b && !o) && ((mi(a) !== "body" || nl(c)) && (i = as(a)), Er(a))) {
      const f = Wa(a);
      u = yi(a), h.x = f.x + a.clientLeft, h.y = f.y + a.clientTop;
    }
    const g = !c || b || o ? Lr(0) : Su(c, i);
    return { width: r.width * u.x, height: r.height * u.y, x: r.x * u.x - i.scrollLeft * u.x + h.x + g.x, y: r.y * u.y - i.scrollTop * u.y + h.y + g.y };
  }, getDocumentElement: jr, getClippingRect: function(n) {
    let { element: t, boundary: r, rootBoundary: a, strategy: s } = n;
    const o = [...r === "clippingAncestors" ? rs(t) ? [] : (function(i, u) {
      const h = u.get(i);
      if (h) return h;
      let b = rl(i, [], !1).filter((w) => Dr(w) && mi(w) !== "body"), g = null;
      const f = Ar(i).position === "fixed";
      let v = f ? xa(i) : i;
      for (; Dr(v) && !xi(v); ) {
        const w = Ar(v), m = eo(v);
        m || w.position !== "fixed" || (g = null), (f ? !m && !g : !m && w.position === "static" && g && yh.has(g.position) || nl(v) && !m && Cu(i, v)) ? b = b.filter((z) => z !== v) : g = w, v = xa(v);
      }
      return u.set(i, b), b;
    })(t, this._c) : [].concat(r), a], c = o[0], l = o.reduce((i, u) => {
      const h = Bu(t, u, s);
      return i.top = Na(h.top, i.top), i.right = Zl(h.right, i.right), i.bottom = Zl(h.bottom, i.bottom), i.left = Na(h.left, i.left), i;
    }, Bu(t, c, s));
    return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
  }, getOffsetParent: Mu, getElementRects: async function(n) {
    const t = this.getOffsetParent || Mu, r = this.getDimensions, a = await r(n.floating);
    return { reference: wh(n.reference, await t(n.floating), n.strategy), floating: { x: 0, y: 0, width: a.width, height: a.height } };
  }, getClientRects: function(n) {
    return Array.from(n.getClientRects());
  }, getDimensions: function(n) {
    const { width: t, height: r } = wu(n);
    return { width: t, height: r };
  }, getScale: yi, isElement: Dr, isRTL: function(n) {
    return Ar(n).direction === "rtl";
  } };
  function zu(n, t) {
    return n.x === t.x && n.y === t.y && n.width === t.width && n.height === t.height;
  }
  function Sh(n, t, r, a) {
    a === void 0 && (a = {});
    const { ancestorScroll: s = !0, ancestorResize: o = !0, elementResize: c = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: i = !1 } = a, u = ro(n), h = s || o ? [...u ? rl(u) : [], ...rl(t)] : [];
    h.forEach((m) => {
      s && m.addEventListener("scroll", r, { passive: !0 }), o && m.addEventListener("resize", r);
    });
    const b = u && l ? (function(m, z) {
      let S, B = null;
      const q = jr(m);
      function Q() {
        var W;
        clearTimeout(S), (W = B) == null || W.disconnect(), B = null;
      }
      return (function W(re, M) {
        re === void 0 && (re = !1), M === void 0 && (M = 1), Q();
        const K = m.getBoundingClientRect(), { left: A, top: U, width: O, height: X } = K;
        if (re || z(), !O || !X) return;
        const Z = { rootMargin: -Yl(U) + "px " + -Yl(q.clientWidth - (A + O)) + "px " + -Yl(q.clientHeight - (U + X)) + "px " + -Yl(A) + "px", threshold: Na(0, Zl(1, M)) || 1 };
        let I = !0;
        function C(N) {
          const H = N[0].intersectionRatio;
          if (H !== M) {
            if (!I) return W();
            H ? W(!1, H) : S = setTimeout(() => {
              W(!1, 1e-7);
            }, 1e3);
          }
          H !== 1 || zu(K, m.getBoundingClientRect()) || W(), I = !1;
        }
        try {
          B = new IntersectionObserver(C, { ...Z, root: q.ownerDocument });
        } catch {
          B = new IntersectionObserver(C, Z);
        }
        B.observe(m);
      })(!0), Q;
    })(u, r) : null;
    let g, f = -1, v = null;
    c && (v = new ResizeObserver((m) => {
      let [z] = m;
      z && z.target === u && v && (v.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
        var S;
        (S = v) == null || S.observe(t);
      })), r();
    }), u && !i && v.observe(u), v.observe(t));
    let w = i ? Wa(n) : null;
    return i && (function m() {
      const z = Wa(n);
      w && !zu(w, z) && r(), w = z, g = requestAnimationFrame(m);
    })(), r(), () => {
      var m;
      h.forEach((z) => {
        s && z.removeEventListener("scroll", r), o && z.removeEventListener("resize", r);
      }), b == null || b(), (m = v) == null || m.disconnect(), v = null, i && cancelAnimationFrame(g);
    };
  }
  const Bh = function(n) {
    return { name: "offset", options: n, async fn(t) {
      var r, a;
      const { x: s, y: o, placement: c, middlewareData: l } = t, i = await (async function(u, h) {
        const { placement: b, platform: g, elements: f } = u, v = await (g.isRTL == null ? void 0 : g.isRTL(f.floating)), w = Qa(b), m = Xl(b), z = ma(b) === "y", S = gh.has(w) ? -1 : 1, B = v && z ? -1 : 1, q = Kl(h, u);
        let { mainAxis: Q, crossAxis: W, alignmentAxis: re } = typeof q == "number" ? { mainAxis: q, crossAxis: 0, alignmentAxis: null } : { mainAxis: q.mainAxis || 0, crossAxis: q.crossAxis || 0, alignmentAxis: q.alignmentAxis };
        return m && typeof re == "number" && (W = m === "end" ? -1 * re : re), z ? { x: W * B, y: Q * S } : { x: Q * S, y: W * B };
      })(t, n);
      return c === ((r = l.offset) == null ? void 0 : r.placement) && (a = l.arrow) != null && a.alignmentOffset ? {} : { x: s + i.x, y: o + i.y, data: { ...i, placement: c } };
    } };
  }, Ch = function(n) {
    return n === void 0 && (n = {}), { name: "shift", options: n, async fn(t) {
      const { x: r, y: a, placement: s } = t, { mainAxis: o = !0, crossAxis: c = !1, limiter: l = { fn: (m) => {
        let { x: z, y: S } = m;
        return { x: z, y: S };
      } }, ...i } = Kl(n, t), u = { x: r, y: a }, h = await ku(t, i), b = ma(Qa(s)), g = hu(b);
      let f = u[g], v = u[b];
      if (o) {
        const m = g === "y" ? "bottom" : "right";
        f = gu(f + h[g === "y" ? "top" : "left"], f, f - h[m]);
      }
      if (c) {
        const m = b === "y" ? "bottom" : "right";
        v = gu(v + h[b === "y" ? "top" : "left"], v, v - h[m]);
      }
      const w = l.fn({ ...t, [g]: f, [b]: v });
      return { ...w, data: { x: w.x - r, y: w.y - a, enabled: { [g]: o, [b]: c } } };
    } };
  }, Ih = function(n) {
    return n === void 0 && (n = {}), { name: "flip", options: n, async fn(t) {
      var r, a;
      const { placement: s, middlewareData: o, rects: c, initialPlacement: l, platform: i, elements: u } = t, { mainAxis: h = !0, crossAxis: b = !0, fallbackPlacements: g, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: v = "none", flipAlignment: w = !0, ...m } = Kl(n, t);
      if ((r = o.arrow) != null && r.alignmentOffset) return {};
      const z = Qa(s), S = ma(l), B = Qa(l) === l, q = await (i.isRTL == null ? void 0 : i.isRTL(u.floating)), Q = g || (B || !w ? [es(l)] : (function(Z) {
        const I = es(Z);
        return [Xs(Z), I, Xs(I)];
      })(l)), W = v !== "none";
      !g && W && Q.push(...dh(l, w, v, q));
      const re = [l, ...Q], M = await ku(t, m), K = [];
      let A = ((a = o.flip) == null ? void 0 : a.overflows) || [];
      if (h && K.push(M[z]), b) {
        const Z = (function(I, C, N) {
          N === void 0 && (N = !1);
          const H = Xl(I), J = bu(I), oe = pu(J);
          let G = J === "x" ? H === (N ? "end" : "start") ? "right" : "left" : H === "start" ? "bottom" : "top";
          return C.reference[oe] > C.floating[oe] && (G = es(G)), [G, es(G)];
        })(s, c, q);
        K.push(M[Z[0]], M[Z[1]]);
      }
      if (A = [...A, { placement: s, overflows: K }], !K.every((Z) => Z <= 0)) {
        var U, O;
        const Z = (((U = o.flip) == null ? void 0 : U.index) || 0) + 1, I = re[Z];
        if (I && (!(b === "alignment" && S !== ma(I)) || A.every((N) => ma(N.placement) !== S || N.overflows[0] > 0)))
          return { data: { index: Z, overflows: A }, reset: { placement: I } };
        let C = (O = A.filter((N) => N.overflows[0] <= 0).sort((N, H) => N.overflows[1] - H.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!C) switch (f) {
          case "bestFit": {
            var X;
            const N = (X = A.filter((H) => {
              if (W) {
                const J = ma(H.placement);
                return J === S || J === "y";
              }
              return !0;
            }).map((H) => [H.placement, H.overflows.filter((J) => J > 0).reduce((J, oe) => J + oe, 0)]).sort((H, J) => H[1] - J[1])[0]) == null ? void 0 : X[0];
            N && (C = N);
            break;
          }
          case "initialPlacement":
            C = l;
        }
        if (s !== C) return { reset: { placement: C } };
      }
      return {};
    } };
  }, Mh = (n, t, r) => {
    const a = /* @__PURE__ */ new Map(), s = { platform: Ph, ...r }, o = { ...s.platform, _c: a };
    return (async (c, l, i) => {
      const { placement: u = "bottom", strategy: h = "absolute", middleware: b = [], platform: g } = i, f = b.filter(Boolean), v = await (g.isRTL == null ? void 0 : g.isRTL(l));
      let w = await g.getElementRects({ reference: c, floating: l, strategy: h }), { x: m, y: z } = _u(w, u, v), S = u, B = {}, q = 0;
      for (let Q = 0; Q < f.length; Q++) {
        const { name: W, fn: re } = f[Q], { x: M, y: K, data: A, reset: U } = await re({ x: m, y: z, initialPlacement: u, placement: S, strategy: h, middlewareData: B, rects: w, platform: g, elements: { reference: c, floating: l } });
        m = M != null ? M : m, z = K != null ? K : z, B = { ...B, [W]: { ...B[W], ...A } }, U && q <= 50 && (q++, typeof U == "object" && (U.placement && (S = U.placement), U.rects && (w = U.rects === !0 ? await g.getElementRects({ reference: c, floating: l, strategy: h }) : U.rects), { x: m, y: z } = _u(w, S, v)), Q = -1);
      }
      return { x: m, y: z, placement: S, strategy: h, middlewareData: B };
    })(n, t, { ...s, platform: o });
  };
  function ur(n) {
    const t = { bold: "bold", light: "300", medium: "500", regular: "normal" };
    for (const r in t) if (n.includes(r)) return t[r];
    return "normal";
  }
  function dr(n) {
    return n.includes("italic") ? "italic" : "normal";
  }
  function Re(n) {
    return n ? `rgba(${n.red}, ${n.green}, ${n.blue}, ${n.alpha})` : "";
  }
  function $u(n) {
    return n && n.text && n.background ? `--bar-most-popular-background-color: ${Re(n.background)}; --bar-most-popular-color: ${Re(n.text)};` : "";
  }
  const zh = { "SF Mono": '"SF Mono", ui-monospace, Menlo, monospace', Helvetica: '"Helvetica Neue", Helvetica, -apple-system, sans-serif', "New York": '"New York", ui-serif, Georgia, serif', "System UI": "system-ui, -apple-system, BlinkMacSystemFont, sans-serif" };
  function $h(n) {
    var t;
    return (t = zh[n]) != null ? t : `"${n}"`;
  }
  function bn(n) {
    return Object.entries(n).reduce((t, [r, a]) => (a && t.push(`--${r}:${a}`), t), []).join(";");
  }
  function Du(n) {
    var t, r;
    const { colors: a, fonts: s, cornerRadius: o, spacing: c, imageSize: l, imageCornerRadius: i, bundleBarsPerRow: u, dealBars: h } = n, b = a.border || a.primary, g = Math.min(h.length, u ? parseInt(u) : 3).toString();
    return bn({ "block-font-family": s.fontFamily ? $h(s.fontFamily) : null, "block-title-color": Re(a.title), "block-title-font-size": s.blockTitle.size + "px", "block-title-font-weight": ur(s.blockTitle.style), "block-title-font-style": dr(s.blockTitle.style), "block-spacing": c == null ? void 0 : c.toString(), "bar-border-radius": (o || 0) + "px", "badge-concave-depth": Math.min(o || 0, 12) + "px", "bar-background-color": Re(a.background), "bar-selected-background-color": Re(a.selectedBackground || a.background), "bar-border-color": Re({ ...b, alpha: 0.3 * b.alpha }), "bar-selected-border-color": Re(b), "block-block-title-color": Re(a.blockTitle || a.title), "bar-title-color": Re(a.title), "bar-title-font-size": s.title.size + "px", "bar-title-font-weight": ur(s.title.style), "bar-title-font-style": dr(s.title.style), "bar-subtitle-color": Re(a.subtitle), "bar-subtitle-font-size": s.subtitle.size + "px", "bar-subtitle-font-weight": ur(s.subtitle.style), "bar-subtitle-font-style": dr(s.subtitle.style), "bar-price-color": Re(a.price || a.title), "bar-full-price-color": Re(a.fullPrice || a.subtitle), "bar-label-border-top-radius": (o ? o - 1 : 0) + "px", "bar-label-background-color": Re(a.labelBackground), "bar-label-color": Re(a.label), "bar-label-font-size": s.label.size + "px", "bar-label-font-weight": ur(s.label.style), "bar-label-font-style": dr(s.label.style), "bar-most-popular-background-color": Re(a.badgeBackground), "bar-most-popular-color": Re(a.badgeText), "bar-variant-select-border-radius": (o || 0) / 2 + "px", "bar-image-size": (l || 48) + "px", "bar-image-border-radius": (i || 0) + "px", "kaching-bundle-products-image-border-radius": (o || 0) / 2 + "px", "kaching-bundles-unit-label-font-size": s.unitLabel ? s.unitLabel.size + "px" : null, "kaching-bundles-unit-label-font-weight": s.unitLabel ? ur(s.unitLabel.style) : null, "kaching-bundles-unit-label-font-style": s.unitLabel ? dr(s.unitLabel.style) : null, "bundle-bars-per-row": g, "kaching-collection-breaks-require-selection-background-color": ((t = n.collectionBreaks) == null ? void 0 : t.requireItemSelectionAlert) && Re(n.collectionBreaks.requireItemSelectionAlert.backgroundColor), "kaching-collection-breaks-require-selection-text-color": ((r = n.collectionBreaks) == null ? void 0 : r.requireItemSelectionAlert) && Re(n.collectionBreaks.requireItemSelectionAlert.textColor) });
  }
  const Au = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, Dh = (n) => {
    const t = n.replace(/[^a-zA-Z]+/g, "").toLowerCase();
    if (!(t in Au)) return;
    const r = Au[t];
    return { red: r[0], green: r[1], blue: r[2], alpha: 1 };
  }, Ah = (n, t) => ({ red: Math.max(0, n.red - Math.round(n.red * t)), green: Math.max(0, n.green - Math.round(n.green * t)), blue: Math.max(0, n.blue - Math.round(n.blue * t)), alpha: n.alpha });
  var Vh = $("<div></div>");
  function ls(n, t) {
    et(t, !0);
    let r = k(t, "color", 7), a = k(t, "image", 7), s = k(t, "size", 7), o = k(t, "shape", 7), c = k(t, "unavailable", 7, !1);
    const l = d(() => r() ? (function(g) {
      g = g.replace(/^#/, "");
      let f = parseInt(g, 16);
      return { red: f >> 16 & 255, green: f >> 8 & 255, blue: 255 & f, alpha: 1 };
    })(r()) : null), i = d(() => {
      let g = { "kaching-swatch-size": `${s() - 2}px` };
      const f = { rounded: 20, circle: 50 }[o()];
      return f && (g = { ...g, "kaching-swatch-border-radius": `${f}%` }), a() ? g = { ...g, "kaching-swatch-image-url": `url(${a()})` } : e(l) && (g = { ...g, "kaching-swatch-color": Re(e(l)), "kaching-swatch-border-color": Re(Ah(e(l), 0.1)) }), bn(g);
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
    } }, h = Vh();
    let b;
    return be((g) => {
      b = Et(h, 1, "kaching-bundles__swatch", null, b, g), Tt(h, e(i));
    }, [() => ({ "kaching-bundles__swatch--unavailable": c() })]), p(n, h), tt(u);
  }
  function Ut(n, t) {
    et(t, !0);
    let r = k(t, "element", 7, "button"), a = k(t, "class", 7), s = k(t, "onclick", 7), o = k(t, "onkeydown", 7), c = k(t, "data-value", 7), l = k(t, "title", 7), i = k(t, "id", 7), u = k(t, "role", 7), h = k(t, "aria-label", 7), b = k(t, "aria-expanded", 7), g = k(t, "aria-haspopup", 7), f = k(t, "aria-selected", 7), v = k(t, "aria-checked", 7), w = k(t, "aria-activedescendant", 7), m = k(t, "aria-controls", 7), z = k(t, "tabindex", 7), S = k(t, "disabled", 7, !1), B = k(t, "ref", 15);
    function q(M) {
      o() && (o()(M), M.defaultPrevented) || S() || M.key !== "Enter" && M.key !== " " || (M.preventDefault(), M.currentTarget.click());
    }
    function Q(M) {
      var K;
      if (S()) return M.preventDefault(), void M.stopPropagation();
      (K = s()) == null || K(M);
    }
    var W = { get element() {
      return r();
    }, set element(M = "button") {
      r(M), _();
    }, get class() {
      return a();
    }, set class(M) {
      a(M), _();
    }, get onclick() {
      return s();
    }, set onclick(M) {
      s(M), _();
    }, get onkeydown() {
      return o();
    }, set onkeydown(M) {
      o(M), _();
    }, get "data-value"() {
      return c();
    }, set "data-value"(M) {
      c(M), _();
    }, get title() {
      return l();
    }, set title(M) {
      l(M), _();
    }, get id() {
      return i();
    }, set id(M) {
      i(M), _();
    }, get role() {
      return u();
    }, set role(M) {
      u(M), _();
    }, get "aria-label"() {
      return h();
    }, set "aria-label"(M) {
      h(M), _();
    }, get "aria-expanded"() {
      return b();
    }, set "aria-expanded"(M) {
      b(M), _();
    }, get "aria-haspopup"() {
      return g();
    }, set "aria-haspopup"(M) {
      g(M), _();
    }, get "aria-selected"() {
      return f();
    }, set "aria-selected"(M) {
      f(M), _();
    }, get "aria-checked"() {
      return v();
    }, set "aria-checked"(M) {
      v(M), _();
    }, get "aria-activedescendant"() {
      return w();
    }, set "aria-activedescendant"(M) {
      w(M), _();
    }, get "aria-controls"() {
      return m();
    }, set "aria-controls"(M) {
      m(M), _();
    }, get tabindex() {
      return z();
    }, set tabindex(M) {
      z(M), _();
    }, get disabled() {
      return S();
    }, set disabled(M = !1) {
      S(M), _();
    }, get ref() {
      return B();
    }, set ref(M) {
      B(M), _();
    } }, re = Me();
    return Zc(pe(re), r, 0, (M, K) => {
      _i(M, (U) => B(U), () => B()), nu(M, () => {
        var U, O;
        return { role: (U = u()) != null ? U : "button", tabindex: (O = z()) != null ? O : S() ? -1 : 0, class: a(), onclick: Q, "data-value": c(), title: l(), id: i(), "aria-label": h(), "aria-expanded": b(), "aria-haspopup": g(), "aria-selected": f(), "aria-checked": v(), "aria-activedescendant": w(), "aria-controls": m(), "aria-disabled": S() ? "true" : void 0, onkeydown: q };
      });
      var A = Me();
      Uc(pe(A), t, "default", {}), p(K, A);
    }), p(n, re), tt(W);
  }
  He(ls, { color: {}, image: {}, size: {}, shape: {}, unavailable: {} }, [], [], !0), He(Ut, { element: {}, class: {}, onclick: {}, onkeydown: {}, "data-value": {}, title: {}, id: {}, role: {}, "aria-label": {}, "aria-expanded": {}, "aria-haspopup": {}, "aria-selected": {}, "aria-checked": {}, "aria-activedescendant": {}, "aria-controls": {}, tabindex: {}, disabled: {}, ref: {} }, ["default"], [], !0);
  const Vu = "translations", Ua = (n = {}) => {
    const t = aa(Tu(n));
    return si(Vu, t), { translate: t, setTranslations: (r) => {
      t.set(Tu(r));
    } };
  }, It = () => {
    const n = li(Vu);
    if (!n) throw new Error("getTranslations must be called within a component tree that has setupTranslations initialized");
    return n;
  }, Tu = (n) => (t) => n[t] || t;
  function io(n) {
    return String.fromCharCode(64 + n);
  }
  async function _r(n, t, r = {}, a = !0) {
    a && await Fs();
    const s = new CustomEvent(t, { detail: r, bubbles: !0, cancelable: !0, composed: !0 });
    n.dispatchEvent(s);
  }
  function Qt(n) {
    return typeof n == "number" ? n : Number(n.split("/").pop());
  }
  function qu(n, t) {
    return n.find((r) => r.options.every((a, s) => a === t[s]));
  }
  function kr(n) {
    const t = n.variants.filter((r) => r.availableForSale);
    return t.length > 0 ? { ...n, variants: t } : n;
  }
  var Th = $("<span> <!></span>"), qh = $("<span> </span>"), Gh = $("<!> <!>", 1), Fh = $("<span> <!></span>"), Oh = $("<span> </span>"), Lh = $("<!> <!>", 1), jh = $('<div class="kaching-bundles__swatch-dropdown__options" role="listbox"></div>'), Eh = $('<div class="kaching-bundles__swatch-dropdown kaching-bundles-option"><!> <!></div>');
  function Gu(n, t) {
    et(t, !0);
    const r = () => ze(z, "$translate", a), [a, s] = vt();
    let o = k(t, "option", 7), c = k(t, "swatchSize", 7), l = k(t, "swatchShape", 7), i = k(t, "value", 7), u = k(t, "onChange", 7), h = Ae(!1), b = Ae(-1), g = Ae(void 0), f = Ae(void 0), v = d(() => o().optionValues.find((X) => X.name === i()) || o().optionValues[0]);
    const w = `swatch-dropdown-${Math.random().toString(16).slice(2)}`;
    function m(X) {
      return `${w}-option-${X}`;
    }
    const z = It();
    function S() {
      se(h, !0), se(b, o().optionValues.findIndex((X) => X.name === i()), !0), e(b) === -1 && se(b, 0);
    }
    function B() {
      se(h, !1), se(b, -1);
    }
    function q() {
      var X;
      B(), (X = e(g)) == null || X.focus();
    }
    function Q(X) {
      i(X), q();
      try {
        const Z = o().optionValues.find((I) => I.name === X);
        Z != null && Z.unavailable && _r(document.body, "kaching-unavailable-option-value-selected", { swatch: "dropdown" });
      } catch (Z) {
        console.error(Z);
      }
      u()(i());
    }
    function W(X, Z) {
      const I = (C) => {
        X.contains(C.target) || Z();
      };
      return document.addEventListener("click", I, !0), { destroy() {
        document.removeEventListener("click", I, !0);
      } };
    }
    Xe(() => {
      if (e(h) && e(g) && e(f)) return Sh(e(g), e(f), async () => {
        if (!e(g) || !e(f)) return;
        const X = e(f), { x: Z, y: I } = await Mh(e(g), X, { placement: "bottom-start", strategy: "fixed", middleware: [Bh(2), Ih(), Ch({ padding: 8 })] });
        X.style.left = `${Z}px`, X.style.top = `${I}px`;
      });
    });
    var re = { get option() {
      return o();
    }, set option(X) {
      o(X), _();
    }, get swatchSize() {
      return c();
    }, set swatchSize(X) {
      c(X), _();
    }, get swatchShape() {
      return l();
    }, set swatchShape(X) {
      l(X), _();
    }, get value() {
      return i();
    }, set value(X) {
      i(X), _();
    }, get onChange() {
      return u();
    }, set onChange(X) {
      u(X), _();
    } }, M = Eh(), K = y(M);
    {
      let X = d(() => e(h) && e(b) >= 0 ? m(e(b)) : void 0);
      Ut(K, { element: "span", class: "kaching-bundles__bar-variant-select", role: "combobox", get "aria-label"() {
        return o().name;
      }, onclick: function(Z) {
        e(h) ? (se(h, !1), se(b, -1)) : S(), Z.preventDefault();
      }, onkeydown: function(Z) {
        if (!e(h)) return void (Z.key !== "ArrowDown" && Z.key !== "ArrowUp" && Z.key !== "Enter" && Z.key !== " " || (Z.preventDefault(), S()));
        const I = o().optionValues.length;
        switch (Z.key) {
          case "Escape":
            Z.preventDefault(), q();
            break;
          case "ArrowDown":
            Z.preventDefault(), se(b, e(b) < I - 1 ? e(b) + 1 : 0, !0);
            break;
          case "ArrowUp":
            Z.preventDefault(), se(b, e(b) > 0 ? e(b) - 1 : I - 1, !0);
            break;
          case "Home":
            Z.preventDefault(), se(b, 0);
            break;
          case "End":
            Z.preventDefault(), se(b, I - 1);
            break;
          case "Enter":
          case " ":
            Z.preventDefault(), e(b) >= 0 && Q(o().optionValues[e(b)].name);
        }
      }, get "aria-expanded"() {
        return e(h);
      }, "aria-haspopup": "listbox", get "aria-controls"() {
        return w;
      }, get "aria-activedescendant"() {
        return e(X);
      }, get ref() {
        return e(g);
      }, set ref(Z) {
        se(g, Z, !0);
      }, children: (Z, I) => {
        var C = Gh(), N = pe(C);
        ls(N, { get color() {
          return e(v).swatch.color;
        }, get image() {
          return e(v).swatch.image;
        }, get size() {
          return c();
        }, get shape() {
          return l();
        }, get unavailable() {
          return e(v).unavailable;
        } }), rt(j(N, 2), () => e(v).name, (H) => {
          var J = Me(), oe = pe(J), G = (F) => {
            var L = Th(), te = y(L);
            Te(j(te), () => r()("system.unavailable_option_value")), x(L), be(() => {
              var ue;
              return ht(te, `${(ue = e(v).name) != null ? ue : ""} - `);
            }), p(F, L);
          }, V = (F) => {
            var L = qh(), te = y(L, !0);
            x(L), be(() => ht(te, e(v).name)), p(F, L);
          };
          E(oe, (F) => {
            e(v).unavailable ? F(G) : F(V, !1);
          }), p(H, J);
        }), p(Z, C);
      }, $$slots: { default: !0 } });
    }
    var A = j(K, 2), U = (X) => {
      var Z = jh();
      At(Z, 23, () => o().optionValues, (I) => I.name, (I, C, N) => {
        {
          let H = d(() => ["kaching-bundles__swatch-dropdown__option", "kaching-bundles-option-value", e(N) === e(b) && "kaching-bundles__swatch-dropdown__option--focused"]), J = d(() => m(e(N))), oe = d(() => e(C).name === i());
          Ut(I, { element: "span", get class() {
            return e(H);
          }, get id() {
            return e(J);
          }, role: "option", tabindex: -1, get "aria-selected"() {
            return e(oe);
          }, get "data-value"() {
            return e(C).name;
          }, onclick: () => Q(e(C).name), children: (G, V) => {
            var F = Lh(), L = pe(F);
            {
              let P = d(() => 1.333 * c());
              ls(L, { get color() {
                return e(C).swatch.color;
              }, get image() {
                return e(C).swatch.image;
              }, get size() {
                return e(P);
              }, get shape() {
                return l();
              }, get unavailable() {
                return e(C).unavailable;
              } });
            }
            var te = j(L, 2), ue = (P) => {
              var D = Fh(), ae = y(D);
              Te(j(ae), () => r()("system.unavailable_option_value")), x(D), be(() => {
                var T;
                return ht(ae, `${(T = e(C).name) != null ? T : ""} - `);
              }), p(P, D);
            }, R = (P) => {
              var D = Oh(), ae = y(D, !0);
              x(D), be(() => ht(ae, e(C).name)), p(P, D);
            };
            E(te, (P) => {
              e(C).unavailable ? P(ue) : P(R, !1);
            }), p(G, F);
          }, $$slots: { default: !0 } });
        }
      }), x(Z), _i(Z, (I) => se(f, I), () => e(f)), be(() => we(Z, "id", w)), p(X, Z);
    };
    E(A, (X) => {
      e(h) && X(U);
    }), x(M), Qs(M, (X, Z) => W == null ? void 0 : W(X, Z), () => B), be(() => {
      we(M, "data-name", o().name), we(M, "data-value", i());
    }), p(n, M);
    var O = tt(re);
    return s(), O;
  }
  function Rh(n, t, r) {
    try {
      const a = t().optionValues.find((s) => s.name === n.target.value);
      a != null && a.unavailable && _r(document.body, "kaching-unavailable-option-value-selected", { swatch: "default" });
    } catch (a) {
      console.error(a);
    }
    r()(n.target.value);
  }
  He(Gu, { option: {}, swatchSize: {}, swatchShape: {}, value: {}, onChange: {} }, [], [], !0);
  var Nh = $(" <!>", 1), Qh = $('<option class="kaching-bundles-option-value"><!></option>'), Wh = $('<select class="kaching-bundles__bar-variant-select kaching-bundles-option"></select>');
  function Fu(n, t) {
    et(t, !0);
    const [r, a] = vt();
    let s = k(t, "option", 7), o = k(t, "value", 7), c = k(t, "onChange", 7);
    const l = It();
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
    } }, h = Wh();
    h.__change = [Rh, s, c], At(h, 21, () => s().optionValues, (g) => g.name, (g, f) => {
      var v = Qh(), w = y(v), m = (B) => {
        var q = Nh(), Q = pe(q);
        Te(j(Q), () => ze(l, "$translate", r)("system.unavailable_option_value")), be(() => {
          var W;
          return ht(Q, `${(W = e(f).name) != null ? W : ""} - `);
        }), p(B, q);
      }, z = (B) => {
        var q = Un();
        be(() => ht(q, e(f).name)), p(B, q);
      };
      E(w, (B) => {
        e(f).unavailable ? B(m) : B(z, !1);
      }), x(v);
      var S = {};
      be(() => {
        var B;
        we(v, "data-value", e(f).name), S !== (S = e(f).name) && (v.value = (B = v.__value = e(f).name) != null ? B : "");
      }), p(g, v);
    }), x(h), Hs(h), be(() => {
      var g;
      we(h, "aria-label", s().name), we(h, "data-name", s().name), we(h, "data-value", o()), i !== (i = o()) && (h.value = (g = h.__value = o()) != null ? g : "", Xi(h, o()));
    }), p(n, h);
    var b = tt(u);
    return a(), b;
  }
  On(["change"]), He(Fu, { option: {}, value: {}, onChange: {} }, [], [], !0);
  var Uh = $('<div class="kaching-bundles__swatch-buttons kaching-bundles-option"></div>');
  function Ou(n, t) {
    et(t, !0);
    const [r, a] = vt();
    let s = k(t, "option", 7), o = k(t, "swatchSize", 7), c = k(t, "swatchShape", 7), l = k(t, "value", 7), i = k(t, "onChange", 7);
    const u = It();
    var h = { get option() {
      return s();
    }, set option(f) {
      s(f), _();
    }, get swatchSize() {
      return o();
    }, set swatchSize(f) {
      o(f), _();
    }, get swatchShape() {
      return c();
    }, set swatchShape(f) {
      c(f), _();
    }, get value() {
      return l();
    }, set value(f) {
      l(f), _();
    }, get onChange() {
      return i();
    }, set onChange(f) {
      i(f), _();
    } }, b = Uh();
    At(b, 21, () => s().optionValues, (f) => f.name, (f, v) => {
      {
        let w = d(() => ["kaching-bundles__swatch-buttons__button", "kaching-bundles-option-value", e(v).name === l() && "kaching-bundles__swatch-buttons__button--selected"]), m = d(() => e(v).unavailable ? `${e(v).name} - ${ze(u, "$translate", r)("system.unavailable_option_value")}` : e(v).name);
        Ut(f, { element: "span", get class() {
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
            const S = s().optionValues.find((B) => B.name === z);
            S != null && S.unavailable && _r(document.body, "kaching-unavailable-option-value-selected", { swatch: "buttons" });
          } catch (S) {
            console.error(S);
          }
          i()(l());
        })(e(v).name), children: (z, S) => {
          ls(z, { get color() {
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
    }), x(b), be(() => {
      we(b, "data-name", s().name), we(b, "data-value", l());
    }), p(n, b);
    var g = tt(h);
    return a(), g;
  }
  function Lu(n, t) {
    et(t, !0);
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
    } }, h = Me(), b = pe(h), g = (v) => {
      Gu(v, { get option() {
        return a();
      }, get swatchSize() {
        return s();
      }, get swatchShape() {
        return o();
      }, get value() {
        return r();
      }, onChange: i });
    }, f = (v) => {
      var w = Me(), m = pe(w), z = (B) => {
        Ou(B, { get option() {
          return a();
        }, get swatchSize() {
          return s();
        }, get swatchShape() {
          return o();
        }, get value() {
          return r();
        }, onChange: i });
      }, S = (B) => {
        Fu(B, { get option() {
          return a();
        }, get value() {
          return r();
        }, onChange: i });
      };
      E(m, (B) => {
        c() === "colorButtons" || c() === "imageButtons" || c() === "productImageButtons" ? B(z) : B(S, !1);
      }, !0), p(v, w);
    };
    return E(b, (v) => {
      c() === "colorDropdown" || c() === "imageDropdown" || c() === "productImageDropdown" || c() === "mixedDropdown" ? v(g) : v(f, !1);
    }), p(n, h), tt(u);
  }
  He(Ou, { option: {}, swatchSize: {}, swatchShape: {}, value: {}, onChange: {} }, [], [], !0), He(Lu, { value: {}, option: {}, swatchSize: {}, swatchShape: {}, swatchType: {}, onChange: {} }, [], [], !0);
  const ju = "mediaImages", al = (n = []) => {
    const t = aa(Eu(n));
    return si(ju, t), { getMediaImageUrl: t, setMediaImages: (r) => {
      t.set(Eu(r));
    } };
  }, Ln = () => {
    const n = li(ju);
    if (!n) throw new Error("getMediaImages must be called within a component tree that has setupMediaImages initialized");
    return n;
  }, Eu = (n) => (t) => {
    if (!t) return;
    const r = n.find((a) => a.gid === t);
    return r == null ? void 0 : r.url;
  }, Ru = "config", Ha = (n) => {
    const t = aa(n);
    return si(Ru, t), { config: t, setConfig: (r) => {
      t.set(r);
    } };
  }, kn = () => {
    const n = li(Ru);
    if (!n) throw new Error("getConfig must be called within a component tree that has setupConfig initialized");
    return n;
  };
  var Hh = $('<img alt="" class="kaching-bundles__bar-variant-image"/>'), Zh = $('<div class="kaching-bundles__bar-variant-number"><span>#</span> <span> </span></div>'), Jh = $('<span class="kaching-bundles__bar-variant-option__name-value"> </span>'), Yh = $('<div class="kaching-bundles__bar-variant-option"><span class="kaching-bundles__bar-variant-option__name"><span class="kaching-bundles__bar-variant-option__name-label"> </span> <!></span> <!></div>'), Kh = $('<div class="kaching-bundles__invalid-variant-error"><!></div>'), Xh = $('<div><div><!> <div class="kaching-bundles__bar-variant-main"><div class="kaching-bundles__bar-variant-selects"></div> <!></div></div></div>');
  function Hn(n, t) {
    et(t, !0);
    const r = () => ze(m, "$config", s), a = () => ze(z, "$swatchSettings", s), [s, o] = vt(), c = (R, P = Pr) => {
      Lu(R, { get option() {
        return P();
      }, get swatchSize() {
        return a().swatchSize;
      }, get swatchShape() {
        return a().swatchShape;
      }, get swatchType() {
        return P().swatchType;
      }, get value() {
        return e(B)[P().position - 1];
      }, onChange: M });
    };
    let l = k(t, "product", 7), i = k(t, "selectedVariantId", 7), u = k(t, "number", 7, void 0), h = k(t, "showImage", 7, !1), b = k(t, "forceDropdown", 7, !1), g = k(t, "onChange", 7), f = k(t, "onOptionChange", 7);
    const v = It(), w = Ln(), m = kn(), z = du();
    let S = d(() => l().variants.find((R) => R.id === i())), B = Ae(lt([]));
    Xe(() => {
      if (e(S)) se(B, [...e(S).options], !0);
      else {
        if (i() && r().featureFlags.hide_missing_variants && l().variants.length > 0) {
          const R = X(l().variants, 0, e(B));
          if (R) return se(B, [...R.options], !0), void Jt(() => g()(R.id));
        }
        se(B, [], !0);
      }
    });
    let q = d(() => {
      return R = l(), P = e(B), D = a().swatchOptions, ae = ze(w, "$getMediaImageUrl", s), T = b(), R.options.map((ee) => ({ name: ee.name, position: ee.position, swatchType: K(ee, D, T), optionValues: ee.optionValues.map((Y) => {
        const ie = O(ee.position, Y.name, P, R);
        if (r().featureFlags.hide_missing_variants && ie.length === 0) return null;
        const me = !ie.some((Ce) => Ce.availableForSale);
        return { name: Y.name, unavailable: me, swatch: A(ee, Y, D, ae, P, R) };
      }).filter((Y) => Y !== null) }));
      var R, P, D, ae, T;
    }), Q = d(() => a().showSelectedSwatchName && !b());
    const W = ["colorButtons", "imageButtons", "productImageButtons"];
    let re = d(() => {
      var R;
      return h() ? ((R = e(S)) == null ? void 0 : R.image) || l().image : null;
    });
    function M({ position: R, value: P }) {
      const D = e(B)[R - 1];
      e(B)[R - 1] = P;
      let ae = l().variants.find((T) => e(B).every((ee, Y) => T.options[Y] === ee));
      if (!ae && r().featureFlags.hide_missing_variants) {
        const T = X(O(R, P, e(B), l()), R, e(B));
        T && (ae = T, se(B, [...ae.options], !0));
      }
      ae && (g()(ae.id), f() && f()(R, P, D));
    }
    function K(R, P, D) {
      var ae;
      const T = (ae = P.find((ee) => ee.name === R.defaultName)) == null ? void 0 : ae.swatchType;
      if (T && T !== "default") return D ? (function(ee) {
        switch (ee) {
          case "colorButtons":
            return "colorDropdown";
          case "imageButtons":
            return "imageDropdown";
          case "productImageButtons":
            return "productImageDropdown";
          default:
            return ee;
        }
      })(T) : T;
      if (!r().featureFlags.native_swatches_disabled) {
        for (const ee of R.optionValues) if (ee.swatch.image || ee.swatch.color) return "mixedDropdown";
      }
      return "default";
    }
    function A(R, P, D, ae, T, ee) {
      var Y, ie;
      const me = r().featureFlags.native_swatches_disabled ? null : P.swatch, Ce = D.find((ve) => ve.name === R.defaultName);
      if (!Ce || Ce.swatchType === "default") return me || { color: null, image: null };
      if (Ce.swatchType === "colorButtons" || Ce.swatchType === "colorDropdown")
        return { color: U((Y = Ce.colors.find((ve) => ve.name === P.defaultName)) == null ? void 0 : Y.color) || (me == null ? void 0 : me.color) || U(Dh(P.defaultName)) || null, image: null };
      if (Ce.swatchType === "imageButtons" || Ce.swatchType === "imageDropdown") {
        const ve = ae(((ie = Ce.images.find((xe) => xe.name === P.defaultName)) == null ? void 0 : ie.mediaImageGID) || null);
        return { color: (me == null ? void 0 : me.color) || null, image: ve || (me == null ? void 0 : me.image) || null };
      }
      if (Ce.swatchType === "productImageDropdown" || Ce.swatchType === "productImageButtons") {
        const ve = R.position - 1, xe = ee.variants.filter((ne) => ne.image && ne.options[ve] === P.name);
        let fe = xe[0], ce = 0;
        for (const ne of xe) {
          let ge = 0;
          for (let Be = 0; Be < ve; Be++) ne.options[Be] === T[Be] && ge++;
          ge > ce && (ce = ge, fe = ne);
        }
        return { color: null, image: (fe == null ? void 0 : fe.image) || null };
      }
      return { color: null, image: null };
    }
    function U(R) {
      if (!R) return;
      const { red: P, green: D, blue: ae } = R;
      return `#${P.toString(16).padStart(2, "0")}${D.toString(16).padStart(2, "0")}${ae.toString(16).padStart(2, "0")}`;
    }
    function O(R, P, D, ae) {
      const T = R - 1, ee = D.slice(0, T);
      return ae.variants.filter((Y) => Y.options[T] === P && ee.every((ie, me) => Y.options[me] === ie));
    }
    function X(R, P, D) {
      if (R.length === 0) return null;
      let ae = R[0], T = -1;
      const ee = D.slice(P);
      for (const Y of R) {
        let ie = 0;
        for (let me = 0; me < ee.length; me++) Y.options[P + me] === ee[me] && (ie += ee.length - me);
        ie > T && (T = ie, ae = Y);
      }
      return ae;
    }
    var Z = { get product() {
      return l();
    }, set product(R) {
      l(R), _();
    }, get selectedVariantId() {
      return i();
    }, set selectedVariantId(R) {
      i(R), _();
    }, get number() {
      return u();
    }, set number(R = void 0) {
      u(R), _();
    }, get showImage() {
      return h();
    }, set showImage(R = !1) {
      h(R), _();
    }, get forceDropdown() {
      return b();
    }, set forceDropdown(R = !1) {
      b(R), _();
    }, get onChange() {
      return g();
    }, set onChange(R) {
      g(R), _();
    }, get onOptionChange() {
      return f();
    }, set onOptionChange(R) {
      f(R), _();
    } }, I = Xh();
    let C;
    var N = y(I);
    let H;
    var J = y(N), oe = (R) => {
      var P = Hh();
      be(() => we(P, "src", e(re))), p(R, P);
    }, G = (R) => {
      var P = Me(), D = pe(P), ae = (T) => {
        var ee = Zh(), Y = j(y(ee), 2), ie = y(Y, !0);
        x(Y), x(ee), be(() => ht(ie, u())), p(T, ee);
      };
      E(D, (T) => {
        u() && T(ae);
      }, !0), p(R, P);
    };
    E(J, (R) => {
      e(re) ? R(oe) : R(G, !1);
    });
    var V = j(J, 2), F = y(V);
    At(F, 21, () => e(q), (R) => R.name, (R, P) => {
      var D = Me(), ae = pe(D), T = (Y) => {
        var ie = Yh(), me = y(ie), Ce = y(me), ve = y(Ce);
        x(Ce);
        var xe = j(Ce, 2), fe = (ne) => {
          var ge = Jh(), Be = y(ge, !0);
          x(ge), be(() => ht(Be, e(B)[e(P).position - 1])), p(ne, ge);
        };
        E(xe, (ne) => {
          W.includes(e(P).swatchType) && ne(fe);
        }), x(me);
        var ce = j(me, 2);
        c(ce, () => e(P)), x(ie), be(() => {
          var ne;
          return ht(ve, `${(ne = e(P).name) != null ? ne : ""}:`);
        }), p(Y, ie);
      }, ee = (Y) => {
        c(Y, () => e(P));
      };
      E(ae, (Y) => {
        e(Q) ? Y(T) : Y(ee, !1);
      }), p(R, D);
    }), x(F);
    var L = j(F, 2), te = (R) => {
      var P = Kh();
      Te(y(P), () => ze(v, "$translate", s)("system.invalid_variant")), x(P), p(R, P);
    };
    E(L, (R) => {
      e(S) && e(S).availableForSale || R(te);
    }), x(V), x(N), x(I), be((R, P) => {
      C = Et(I, 1, "kaching-bundles__bar-variant", null, C, R), H = Et(N, 1, "kaching-bundles__bar-variant__content", null, H, P);
    }, [() => ({ "kaching-bundles__bar-variant--invalid": !e(S) || !e(S).availableForSale }), () => ({ "kaching-bundles__bar-variant__content--with-option-names": e(Q) })]), p(n, I);
    var ue = tt(Z);
    return o(), ue;
  }
  He(Hn, { product: {}, selectedVariantId: {}, number: {}, showImage: {}, forceDropdown: {}, onChange: {}, onOptionChange: {} }, [], [], !0);
  var ep = $('<a target="_blank"><!></a>'), tp = $("<div><!></div>");
  function Yn(n, t) {
    et(t, !0);
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
    } }, c = Me(), l = pe(c), i = (h) => {
      var b = ep();
      Nl(y(b), a), x(b), be(() => {
        we(b, "href", r()), Et(b, 1, Ki(s()));
      }), p(h, b);
    }, u = (h) => {
      var b = tp();
      Nl(y(b), a), x(b), be(() => Et(b, 1, Ki(s()))), p(h, b);
    };
    return E(l, (h) => {
      r() ? h(i) : h(u, !1);
    }), p(n, c), tt(o);
  }
  He(Yn, { url: {}, children: {}, class: {} }, [], [], !0);
  const Nu = "priceFormatter", wi = (n = "{{amount}}", t) => {
    const r = aa(Qu(n, t));
    return si(Nu, r), { formatPrice: r, setMoneyFormat: (a, s) => {
      r.set(Qu(a, s));
    } };
  }, un = () => {
    const n = li(Nu);
    if (!n) throw new Error("getPriceFormatter must be called within a component tree that has setupPriceFormatter initialized");
    return n;
  }, Qu = (n, t) => (r, a) => np(r, n, (!(a != null && a.preserveDecimals) || Math.round(r) % 100 == 0) && t), np = (n, t, r) => {
    const a = ((i, u) => u ? i.includes("amount_no_decimals") ? i : i.replace(/\{\{.+\}\}/g, "{{ amount_no_decimals }}") : i)(t, r), s = { amount: (i) => i.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), amount_no_decimal: (i) => i.toLocaleString("en-US", { maximumFractionDigits: 0 }), amount_no_decimals: (i) => i.toLocaleString("en-US", { maximumFractionDigits: 0 }), amount_with_comma_separator: (i) => i.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), amount_no_decimals_with_comma_separator: (i) => i.toLocaleString("de-DE", { maximumFractionDigits: 0 }), amount_with_apostrophe_separator: (i) => i.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, "'"), amount_no_decimals_with_space_separator: (i) => i.toLocaleString("fr-FR", { maximumFractionDigits: 0 }).replace(/\s/g, " "), amount_with_space_separator: (i) => i.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, " "), amount_with_period_and_space_separator: (i) => i.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, " ").replace(",", ".") }, o = /{{\s*(\w+)\s*}}/, c = a.match(o), l = (s[c ? c[1] : "amount"] || s.amount)(n / 100);
    return a.replace(o, l);
  }, Wu = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.08398%205H7.91732'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Uu = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.00065%202.08337V7.91671M2.08398%205.00004H7.91732'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", rp = { new_price: ({ totalDiscountedPrice: n, quantity: t }) => ({ value: n / t, type: "price" }), new_total: ({ totalDiscountedPrice: n }) => ({ value: n, type: "price" }), original_price: ({ totalFullPrice: n, quantity: t }) => ({ value: n / t, type: "price" }), original_total: ({ totalFullPrice: n }) => ({ value: n, type: "price" }), saved_total: ({ totalCompareAtPrice: n, totalDiscountedPrice: t }) => ({ value: n - t, type: "price" }), saved_amount: ({ totalCompareAtPrice: n, totalDiscountedPrice: t, quantity: r }) => ({ value: (n - t) / r, type: "price" }), quantity: ({ quantity: n }) => ({ value: n, type: "number" }), gifts_count: ({ freeGiftsCount: n }) => {
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
  } }, ap = (n) => {
    if (!n) return;
    const t = n.options.join(" / ");
    return t && t !== "Default Title" ? t : void 0;
  }, ip = ({ variable: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, sellingPlan: o }) => {
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
            const f = ap(b);
            if (!f) continue;
            const v = h.find((w) => w.title === f);
            v ? v.count += g : h.push({ title: f, count: g });
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
  }, Hu = /{{\s*([a-zA-Z0-9_.]+)\s*(?:([+\-*/])\s*(\d+(?:\.\d+)?)?)?\s*}}/g, Zu = /\{\{[^}]*\}\}/g, lp = (n) => n.replace(Zu, ""), sp = ({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, totalFullPrice: o, totalCompareAtPrice: c, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: h, unitQuantity: b, sellingPlan: g, freeGiftsCount: f }) => (v, w, m) => {
    const z = rp[v];
    if (z) {
      const S = z({ totalFullPrice: o, totalCompareAtPrice: c != null ? c : o, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: h, unitQuantity: b, sellingPlan: g, freeGiftsCount: f });
      if (!S) return;
      let B = S.value;
      if (w !== void 0 && m !== void 0) {
        const Q = ((W, re, M) => {
          switch (re) {
            case "+":
              return W + M;
            case "-":
              return W - M;
            case "*":
              return W * M;
            case "/":
              return M === 0 ? void 0 : W / M;
          }
        })(B, w, S.type !== "price" || w !== "+" && w !== "-" ? m : 100 * m);
        if (Q === void 0) return;
        B = Q;
      }
      const q = w === "/" || S.preserveDecimals === !0;
      return ((Q, W, re, M) => {
        switch (W) {
          case "price":
            return re(Q, { preserveDecimals: M });
          case "number":
            return String(Math.round(100 * Q) / 100);
          case "percentage":
            return `${Math.round(Q)}%`;
        }
      })(B, S.type, n, q);
    }
    if (w === void 0) return ip({ variable: v, product: t, products: r, selectedProductTitles: a, selectedVariants: s, sellingPlan: g });
  }, dn = ({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, totalFullPrice: o, totalCompareAtPrice: c, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: h = !1, unitQuantity: b, sellingPlan: g, freeGiftsCount: f }) => (v) => {
    if (!v) return v;
    const w = sp({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, totalFullPrice: o, totalCompareAtPrice: c, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: h, unitQuantity: b, sellingPlan: g, freeGiftsCount: f });
    return v.replace(Hu, (m, z, S, B) => {
      var q;
      if (S && B) {
        const Q = parseFloat(B);
        return (q = w(z, S, Q)) != null ? q : "";
      }
      return w(z) || "";
    }).replace(Zu, "");
  };
  function lo(n) {
    const { unitPriceMeasurement: t } = n;
    return t ? t.referenceValue == 1 ? t.referenceUnit : `${t.referenceValue}${t.referenceUnit}` : null;
  }
  function mr(n) {
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
  var op = $('<img class="kaching-bundles__choose-multiple-gifts__product-image" alt=""/>'), cp = $('<span class="kaching-bundles__choose-multiple-gifts__product-title"> </span>'), up = $('<span class="kaching-bundles__choose-multiple-gifts__subtitle"><!></span>'), dp = $('<div class="kaching-bundles__choose-multiple-gifts__product-compare-at-price"><!></div>'), gp = $('<span class="kaching-bundles__choose-multiple-gifts__variant-counter"></span>'), hp = $('<div class="kaching-bundles__choose-multiple-gifts__variant-selector-row"><div class="kaching-bundles__choose-multiple-gifts__variant-selector-content"><!> <div class="kaching-bundles__choose-multiple-gifts__variant-selector-with-counter"><!> <div class="kaching-bundles__choose-multiple-gifts__variant-selector-wrapper"><!></div></div></div></div>'), pp = $('<div class="kaching-bundles__choose-multiple-gifts__variant-selectors"></div>'), bp = $('<img alt="Decrease"/>'), fp = $('<img alt="Increase"/>'), vp = $('<div class="kaching-bundles__choose-multiple-gifts__gift-quantity"><!> <span class="kaching-bundles__choose-multiple-gifts__gift-quantity-value"> </span> <!></div>'), _p = $("<img/>"), kp = $("<!> <!>", 1), mp = $('<div class="kaching-bundles__choose-multiple-gifts__product"><div class="kaching-bundles__choose-multiple-gifts__product-container"><!> <div class="kaching-bundles__choose-multiple-gifts__product-content"><!> <!> <div class="kaching-bundles__choose-multiple-gifts__product-price-container"><div class="kaching-bundles__choose-multiple-gifts__product-price"><!></div> <!></div> <!></div></div> <div class="kaching-bundles__choose-multiple-gifts__product-actions"><!> <!></div></div>');
  function Ju(n, t) {
    et(t, !0);
    const r = () => ze(m, "$formatPrice", s), a = () => ze(w, "$translate", s), [s, o] = vt(), c = k(t, "product", 7), l = k(t, "dealBlock", 7), i = k(t, "multipleGiftsSelector", 7), u = k(t, "selectedVariantIds", 7), h = k(t, "availableQuantity", 7), b = k(t, "onSelect", 7), g = k(t, "onRemove", 7), f = k(t, "onVariantChange", 7), v = k(t, "onQuantityChange", 7), w = It(), m = un();
    let z = Ae(!1);
    const S = d(() => u().length > 0), B = d(() => u().length || 1), q = d(() => !e(S) && h() === 0), Q = d(() => c().variants.find((ve) => ve.id === u()[0]) || c().variants[0]), W = d(() => e(z) && e(Q).image || c().image), re = d(() => u().map((ve) => c().variants.find((xe) => xe.id === ve) || c().variants[0])), M = d(() => e(re).length > 0 ? e(re).reduce((ve, xe) => ve + Z(l(), xe), 0) : Z(l(), e(Q))), K = d(() => c().url ? `${c().url}?variant=${u()[0] || c().variants[0].id}` : void 0), A = d(() => l().chooseMultipleGiftsModal), U = d(() => dn({ priceFormatter: r(), product: c(), totalFullPrice: e(M), totalDiscountedPrice: 0, quantity: e(B), unitQuantity: mr(e(re).map((ve) => ({ variant: ve, quantity: 1 }))) })), O = d(() => {
      var ve;
      return e(U)(a()(((ve = e(A)) == null ? void 0 : ve.subtitle) || ""));
    }), X = d(() => {
      var ve, xe;
      return e(S) ? (ve = e(A)) == null ? void 0 : ve.buttonTextAfterSelection : (xe = e(A)) == null ? void 0 : xe.buttonTextBeforeSelection;
    });
    function Z(ve, xe) {
      return ve.useProductCompareAtPrice && xe.compareAtPrice ? Math.max(xe.price, xe.compareAtPrice) : xe.price;
    }
    function I() {
      e(B) <= 1 || v()(e(B) - 1);
    }
    function C() {
      e(B) >= h() || v()(e(B) + 1);
    }
    var N = { get product() {
      return c();
    }, set product(ve) {
      c(ve), _();
    }, get dealBlock() {
      return l();
    }, set dealBlock(ve) {
      l(ve), _();
    }, get multipleGiftsSelector() {
      return i();
    }, set multipleGiftsSelector(ve) {
      i(ve), _();
    }, get selectedVariantIds() {
      return u();
    }, set selectedVariantIds(ve) {
      u(ve), _();
    }, get availableQuantity() {
      return h();
    }, set availableQuantity(ve) {
      h(ve), _();
    }, get onSelect() {
      return b();
    }, set onSelect(ve) {
      b(ve), _();
    }, get onRemove() {
      return g();
    }, set onRemove(ve) {
      g(ve), _();
    }, get onVariantChange() {
      return f();
    }, set onVariantChange(ve) {
      f(ve), _();
    }, get onQuantityChange() {
      return v();
    }, set onQuantityChange(ve) {
      v(ve), _();
    } }, H = mp(), J = y(H), oe = y(J), G = (ve) => {
      Yn(ve, { get url() {
        return e(K);
      }, class: "kaching-bundles__choose-multiple-gifts__product-image-link", children: (xe, fe) => {
        var ce = op();
        we(ce, "width", 100), we(ce, "height", 100), be(() => we(ce, "src", e(W))), p(xe, ce);
      }, $$slots: { default: !0 } });
    };
    E(oe, (ve) => {
      e(W) && ve(G);
    });
    var V = j(oe, 2), F = y(V);
    Yn(F, { get url() {
      return e(K);
    }, class: "kaching-bundles__choose-multiple-gifts__product-link", children: (ve, xe) => {
      var fe = cp(), ce = y(fe, !0);
      x(fe), be(() => ht(ce, c().title)), p(ve, fe);
    }, $$slots: { default: !0 } });
    var L = j(F, 2), te = (ve) => {
      var xe = up();
      Te(y(xe), () => e(O)), x(xe), p(ve, xe);
    };
    E(L, (ve) => {
      e(O) && ve(te);
    });
    var ue = j(L, 2), R = y(ue);
    Te(y(R), () => a()("system.free")), x(R);
    var P = j(R, 2), D = (ve) => {
      var xe = Me();
      rt(pe(xe), () => e(M), (fe) => {
        var ce = dp();
        Te(y(ce), () => r()(e(M))), x(ce), p(fe, ce);
      }), p(ve, xe);
    };
    E(P, (ve) => {
      i().showPrice && e(M) > 0 && ve(D);
    }), x(ue);
    var ae = j(ue, 2), T = (ve) => {
      var xe = pp();
      At(xe, 21, u, $r, (fe, ce, ne) => {
        var ge = hp(), Be = y(ge), Se = y(Be), Le = (_e) => {
          ia(_e, { get product() {
            return c();
          }, class: "kaching-bundles__choose-multiple-gifts__product-option-names" });
        };
        E(Se, (_e) => {
          ne === 0 && _e(Le);
        });
        var Ve = j(Se, 2), le = y(Ve), De = (_e) => {
          var Ie = gp();
          Ie.textContent = `#${ne + 1}`, p(_e, Ie);
        };
        E(le, (_e) => {
          u().length > 1 && _e(De);
        });
        var qe = j(le, 2);
        Hn(y(qe), { get product() {
          return c();
        }, get selectedVariantId() {
          return e(ce);
        }, onChange: (_e) => {
          se(z, !0), f()(ne, _e);
        } }), x(qe), x(Ve), x(Be), x(ge), p(fe, ge);
      }), x(xe), p(ve, xe);
    };
    E(ae, (ve) => {
      c().variants.length > 1 && ve(T);
    }), x(V), x(J);
    var ee = j(J, 2), Y = y(ee), ie = (ve) => {
      var xe = vp(), fe = y(xe);
      {
        let Be = d(() => e(B) <= 1);
        Ut(fe, { element: "span", class: "kaching-bundles__choose-multiple-gifts__gift-quantity-button", onclick: I, get disabled() {
          return e(Be);
        }, children: (Se, Le) => {
          var Ve = bp();
          be(() => we(Ve, "src", Wu)), p(Se, Ve);
        }, $$slots: { default: !0 } });
      }
      var ce = j(fe, 2), ne = y(ce, !0);
      x(ce);
      var ge = j(ce, 2);
      {
        let Be = d(() => e(B) >= h());
        Ut(ge, { element: "span", class: "kaching-bundles__choose-multiple-gifts__gift-quantity-button", onclick: C, get disabled() {
          return e(Be);
        }, children: (Se, Le) => {
          var Ve = fp();
          be(() => we(Ve, "src", Uu)), p(Se, Ve);
        }, $$slots: { default: !0 } });
      }
      x(xe), be(() => ht(ne, e(B))), p(ve, xe);
    };
    E(Y, (ve) => {
      e(S) && i().maxQuantity > 1 && ve(ie);
    });
    var me = j(Y, 2);
    {
      let ve = d(() => ["kaching-bundles__choose-multiple-gifts__product-button", e(q) && "kaching-bundles__choose-multiple-gifts__product-button--disabled", e(S) && "kaching-bundles__choose-multiple-gifts__product-button--selected"]);
      Ut(me, { element: "span", get class() {
        return e(ve);
      }, onclick: function() {
        e(S) ? (se(z, !1), g()()) : b()();
      }, get disabled() {
        return e(q);
      }, children: (xe, fe) => {
        var ce = kp(), ne = pe(ce), ge = (Ve) => {
          var le = _p();
          be((De) => {
            we(le, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.3333%205.00008V4.33341C13.3333%203.39999%2013.3333%202.93328%2013.1517%202.57676C12.9919%202.26316%2012.7369%202.00819%2012.4233%201.8484C12.0668%201.66675%2011.6001%201.66675%2010.6667%201.66675H9.33333C8.39991%201.66675%207.9332%201.66675%207.57668%201.8484C7.26308%202.00819%207.00811%202.26316%206.84832%202.57676C6.66667%202.93328%206.66667%203.39999%206.66667%204.33341V5.00008M2.5%205.00008H17.5M15.8333%205.00008V14.3334C15.8333%2015.7335%2015.8333%2016.4336%2015.5608%2016.9684C15.3212%2017.4388%2014.9387%2017.8212%2014.4683%2018.0609C13.9335%2018.3334%2013.2335%2018.3334%2011.8333%2018.3334H8.16667C6.76654%2018.3334%206.06647%2018.3334%205.53169%2018.0609C5.06129%2017.8212%204.67883%2017.4388%204.43915%2016.9684C4.16667%2016.4336%204.16667%2015.7335%204.16667%2014.3334V5.00008'%20stroke='%23F04438'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), we(le, "alt", De);
          }, [() => a()("system.remove")]), p(Ve, le);
        };
        E(ne, (Ve) => {
          e(S) && Ve(ge);
        });
        var Be = j(ne, 2), Se = (Ve) => {
          var le = Un();
          be((De) => ht(le, De), [() => a()(e(X))]), p(Ve, le);
        }, Le = (Ve) => {
          p(Ve, Un("Choose"));
        };
        E(Be, (Ve) => {
          e(X) ? Ve(Se) : Ve(Le, !1);
        }), p(xe, ce);
      }, $$slots: { default: !0 } });
    }
    x(ee), x(H), p(n, H);
    var Ce = tt(N);
    return o(), Ce;
  }
  He(Ju, { product: {}, dealBlock: {}, multipleGiftsSelector: {}, selectedVariantIds: {}, availableQuantity: {}, onSelect: {}, onRemove: {}, onVariantChange: {}, onQuantityChange: {} }, [], [], !0);
  const xp = { red: 0, green: 0, blue: 0, alpha: 0.5 };
  function yp(n, t) {
    var r;
    (r = t()) == null || r();
  }
  function wp(n, t, r, a, s) {
    var o;
    const c = t();
    r()(a().id, c), (o = s()) == null || o();
  }
  var Pp = $('<img alt="Close"/>'), Sp = $('<div class="kaching-bundles__choose-multiple-gifts"><div class="kaching-bundles__choose-multiple-gifts__header"><h2 class="kaching-bundles__choose-multiple-gifts__heading"><!></h2> <!></div> <div class="kaching-bundles__choose-multiple-gifts__products"></div> <div class="kaching-bundles__choose-multiple-gifts__footer"><span class="kaching-bundles__choose-multiple-gifts__footer-text"> </span> <div class="kaching-bundles__choose-multiple-gifts__footer-buttons"><button class="kaching-bundles__choose-multiple-gifts__footer-button kaching-bundles__choose-multiple-gifts__footer-button--cancel"> </button> <button class="kaching-bundles__choose-multiple-gifts__footer-button kaching-bundles__choose-multiple-gifts__footer-button--confirm"> </button></div></div></div>');
  function so(n, t) {
    et(t, !0);
    const r = () => ze(b, "$translate", a), [a, s] = vt(), o = k(t, "dealBlock", 7), c = k(t, "multipleGiftsSelector", 7), l = k(t, "products", 23, () => []), i = k(t, "initialSelectedGifts", 23, () => []), u = k(t, "onConfirm", 7, () => {
    }), h = k(t, "onClose", 7), b = It();
    let g = Ae(lt((function(V) {
      const F = {};
      for (const L of V) {
        const te = L.product.id;
        F[te] || (F[te] = []), F[te].push(L.variant.id);
      }
      return F;
    })(i())));
    const f = d(() => o().chooseMultipleGiftsModal), v = d(() => ((V) => V ? bn({ "kaching-choose-multiple-gifts-button-size": V.buttonSize + "px", "kaching-choose-multiple-gifts-text-size": V.textSize + "px", "kaching-choose-multiple-gifts-price-color": Re(V.priceColor), "kaching-choose-multiple-gifts-compare-at-price-color": Re(V.compareAtPriceColor), "kaching-choose-multiple-gifts-text-color": Re(V.textColor), "kaching-choose-multiple-gifts-button-color": Re(V.buttonColor), "kaching-choose-multiple-gifts-button-text-color": Re(V.buttonTextColor), "kaching-choose-multiple-gifts-photo-size": V.productPhotoSize + "px" }) : "")(e(f) || null)), w = d(() => c().maxQuantity), m = d(() => Object.values(e(g)).reduce((V, F) => V + F.length, 0));
    function z(V) {
      return e(g)[V] || [];
    }
    function S(V) {
      const F = V.variants.find((L) => L.availableForSale);
      return (F == null ? void 0 : F.id) || V.variants[0].id;
    }
    const B = d(() => {
      var V;
      return ((V = e(f)) == null ? void 0 : V.footerText) || "FREE gifts selected";
    });
    var q = { get dealBlock() {
      return o();
    }, set dealBlock(V) {
      o(V), _();
    }, get multipleGiftsSelector() {
      return c();
    }, set multipleGiftsSelector(V) {
      c(V), _();
    }, get products() {
      return l();
    }, set products(V = []) {
      l(V), _();
    }, get initialSelectedGifts() {
      return i();
    }, set initialSelectedGifts(V = []) {
      i(V), _();
    }, get onConfirm() {
      return u();
    }, set onConfirm(V = () => {
    }) {
      u(V), _();
    }, get onClose() {
      return h();
    }, set onClose(V) {
      h(V), _();
    } }, Q = Sp(), W = y(Q), re = y(W), M = y(re), K = (V) => {
      var F = Un();
      be((L) => ht(F, L), [() => r()(e(f).heading)]), p(V, F);
    };
    E(M, (V) => {
      var F;
      (F = e(f)) != null && F.heading && V(K);
    }), x(re);
    var A = j(re, 2), U = (V) => {
      Ut(V, { element: "span", class: "kaching-bundles__choose-multiple-gifts__close", get onclick() {
        return h();
      }, children: (F, L) => {
        var te = Pp();
        be(() => we(te, "src", "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), p(F, te);
      }, $$slots: { default: !0 } });
    };
    E(A, (V) => {
      h() && V(U);
    }), x(W);
    var O = j(W, 2);
    At(O, 21, l, (V) => V.id, (V, F) => {
      {
        let L = d(() => z(e(F).id)), te = d(() => (function(ue) {
          const R = z(ue).length;
          return e(w) - e(m) + R;
        })(e(F).id));
        Ju(V, { get dealBlock() {
          return o();
        }, get multipleGiftsSelector() {
          return c();
        }, get product() {
          return e(F);
        }, get selectedVariantIds() {
          return e(L);
        }, get availableQuantity() {
          return e(te);
        }, onSelect: () => (function(ue) {
          if (e(m) >= e(w)) return;
          const R = S(ue), P = l().length === 1 ? e(w) : 1;
          se(g, { ...e(g), [ue.id]: Array(P).fill(R) }, !0);
        })(e(F)), onRemove: () => (function(ue) {
          const { [ue]: R, ...P } = e(g);
          se(g, P, !0);
        })(e(F).id), onVariantChange: (ue, R) => (function(P, D, ae) {
          const T = z(P);
          if (D >= T.length) return;
          const ee = [...T];
          ee[D] = ae, se(g, { ...e(g), [P]: ee }, !0);
        })(e(F).id, ue, R), onQuantityChange: (ue) => (function(R, P) {
          const D = z(R.id), ae = D.length;
          if (P === ae) return;
          let T;
          if (P > ae) {
            const ee = S(R), Y = P - ae;
            T = [...D, ...Array(Y).fill(ee)];
          } else T = D.slice(0, P);
          se(g, { ...e(g), [R.id]: T }, !0);
        })(e(F), ue) });
      }
    }), x(O);
    var X = j(O, 2), Z = y(X), I = y(Z);
    x(Z);
    var C = j(Z, 2), N = y(C);
    N.__click = [yp, h];
    var H = y(N, !0);
    x(N);
    var J = j(N, 2);
    J.__click = [wp, function() {
      const V = [];
      for (const F of l()) {
        const L = z(F.id);
        for (const te of L) {
          const ue = F.variants.find((P) => P.id === te);
          if (!ue) continue;
          const R = o().useProductCompareAtPrice && ue.compareAtPrice ? Math.max(ue.price, ue.compareAtPrice) : ue.price;
          V.push({ id: `${te}`, variant: ue, product: F, quantity: 1, fullPrice: R });
        }
      }
      return V;
    }, u, c, h];
    var oe = y(J, !0);
    x(J), x(C), x(X), x(Q), be((V, F, L) => {
      var te, ue;
      Tt(Q, e(v)), ht(I, `${(te = e(m)) != null ? te : ""}/${(ue = e(w)) != null ? ue : ""}
      ${V != null ? V : ""}`), ht(H, F), ht(oe, L);
    }, [() => r()(e(B)), () => r()("system.cancel"), () => r()("system.confirm")]), p(n, Q);
    var G = tt(q);
    return s(), G;
  }
  On(["click"]), He(so, { dealBlock: {}, multipleGiftsSelector: {}, products: {}, initialSelectedGifts: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var Bp = $('<div class="kaching-bundles"><!></div>');
  function Yu(n, t) {
    var r;
    et(t, !0);
    const a = k(t, "config", 7), s = k(t, "dealBlock", 7), o = k(t, "products", 23, () => []), c = k(t, "mediaImages", 7), l = k(t, "translations", 7), i = k(t, "multipleGiftsSelector", 7), u = d(() => or(s(), a().brandColors)), h = d(() => or(i(), a().brandColors)), { setConfig: b } = Ha(a()), { setMoneyFormat: g } = wi(a().moneyFormat), { setTranslations: f } = Ua(l()), { setMediaImages: v } = al(c()), { setSwatchSettings: w } = tl({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (r = e(u).showSelectedSwatchName) != null && r });
    Xe(() => {
      b(a());
    }), Xe(() => {
      g(a().moneyFormat, !!e(u).showPricesWithoutDecimals);
    }), Xe(() => {
      f(l());
    }), Xe(() => {
      v(c());
    }), Xe(() => {
      var q;
      w({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (q = e(u).showSelectedSwatchName) != null && q });
    });
    var m = { get config() {
      return a();
    }, set config(q) {
      a(q), _();
    }, get dealBlock() {
      return s();
    }, set dealBlock(q) {
      s(q), _();
    }, get products() {
      return o();
    }, set products(q = []) {
      o(q), _();
    }, get mediaImages() {
      return c();
    }, set mediaImages(q) {
      c(q), _();
    }, get translations() {
      return l();
    }, set translations(q) {
      l(q), _();
    }, get multipleGiftsSelector() {
      return i();
    }, set multipleGiftsSelector(q) {
      i(q), _();
    } }, z = Me(), S = pe(z), B = (q) => {
      var Q = Bp();
      so(y(Q), { get dealBlock() {
        return e(u);
      }, get products() {
        return o();
      }, get multipleGiftsSelector() {
        return e(h);
      } }), x(Q), p(q, Q);
    };
    return E(S, (q) => {
      e(h) && q(B);
    }), p(n, z), tt(m);
  }
  function il(n, t) {
    var r;
    if (!t) return n.price;
    const a = n.sellingPlans.find((s) => s.id === t.id);
    return (r = a == null ? void 0 : a.price) != null ? r : n.price;
  }
  function oo(n, t) {
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
  function ll(n, t) {
    return n.sellingPlans.filter((r) => t.some((a) => a.sellingPlans.some((s) => s.id === r.id)));
  }
  function co(n, t, r) {
    let a;
    if (n.sellingPlanGid) {
      const s = Qt(n.sellingPlanGid);
      a = t.find((o) => o.id === s);
    } else a = r || t[0];
    return a && t.some((s) => s.id === a.id) ? a : t[0];
  }
  function uo(n, t, r, a) {
    return n || (t ? r.some((s) => s.id === t.id) ? t : r[0] : a && r.length > 0 ? r[0] : void 0);
  }
  customElements.define("kaching-bundles-choose-multiple-gifts", He(Yu, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, multipleGiftsSelector: { attribute: "multiple-gifts-selector", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), Sn(this, "component"), this.component = this;
    }
  }));
  const Kn = (n, t, r) => Cp(n, t, r) || Ip(n, t), Cp = (n, t, r) => {
    if (!r || t.sellingPlans.length === 0) return;
    const a = new Set(t.sellingPlans.map((o) => o.id));
    return a.has(r.id) ? n.sellingPlans.find((o) => o.id === r.id) : n.sellingPlans.find((o) => a.has(o.id) && o.name === r.name) || n.sellingPlans.find((o) => o.id === t.sellingPlans[0].id);
  }, Ip = (n, t) => {
    if (!n.requiresSellingPlan || t.sellingPlans.length === 0) return;
    const r = t.sellingPlans[0].id;
    return n.sellingPlans.find((a) => a.id === r);
  };
  function la({ discountType: n, discountValue: t, discountQuantity: r, variantQuantities: a, currencyRate: s, priceRounding: o, sellingPlan: c, percentageCentsRoundingWorkaround: l }) {
    const i = (function({ discountType: b, discountValue: g, discountQuantity: f, variantQuantities: v, currencyRate: w, sellingPlan: m, percentageCentsRoundingWorkaround: z }) {
      const S = v.map(({ variant: Q, quantity: W }) => il(Q, m) * W), B = S.reduce((Q, W) => Q + W, 0), q = v.map(({ quantity: Q }) => Q).reduce((Q, W) => Q + W, 0);
      if (b === "specific") {
        let Q = 100 * Number(g) * w;
        if (q > Number(f)) {
          const M = Q / Number(f);
          Q = Math.ceil(M * q);
        }
        const W = Q / q;
        let re = 0;
        for (const { variant: M, quantity: K } of v) {
          if (m && M.sellingPlans.some((A) => A.id === m.id) && m.priceAdjustment) {
            re += oo(W, m) * K;
            continue;
          }
          re += W * K;
        }
        return Math.max(0, Math.min(re, B));
      }
      if (b === "percentage") {
        if (z) {
          const W = B * (100 - Number(g)) / 100;
          return Math.max(0, Math.min(Math.ceil(W), B));
        }
        let Q = 0;
        for (const { variant: W, quantity: re } of v) {
          const M = il(W, m);
          Q += Math.ceil(M * (100 - Number(g)) / 100) * re;
        }
        return Math.max(0, Math.min(Q, B));
      }
      if (b === "amount") {
        const Q = Math.round(100 * Number(g)) * w, W = Q * q;
        return typeof document != "undefined" && B > 0 && W > B && document.dispatchEvent(new CustomEvent("kaching-bundles-amount-discount-exceeds-price", { detail: { totalDiscount: W, fullOrderPrice: B } })), Math.max(0, Math.min(B - Q * q, B));
      }
      return B;
    })({ discountType: n, discountValue: t, discountQuantity: r, variantQuantities: a, currencyRate: s, sellingPlan: c, percentageCentsRoundingWorkaround: l }), u = a.map(({ variant: b, quantity: g }) => o != null && o.v2 ? il(b, c) * g : b.price * g).reduce((b, g) => b + g, 0), h = a.map(({ quantity: b }) => b).reduce((b, g) => b + g, 0);
    if (o && (n !== "default" || o.v2)) {
      if (o.perItem) {
        const b = Pi(i / h, o.precision) * h;
        return o.v2 && Math.round(b) > Math.round(u) && i / h > 100 ? Pi(i / h - 100, o.precision) * h : b <= u ? b : i;
      }
      {
        const b = Pi(i, o.precision);
        return o.v2 && Math.round(b) > Math.round(u) && i > 100 ? Pi(i - 100, o.precision) : b <= u ? b : i;
      }
    }
    return i;
  }
  function Ku(n, t, r, a, s, o) {
    return la({ discountType: n.discountType, discountValue: n.discountValue, discountQuantity: n.quantity, variantQuantities: t, currencyRate: r, priceRounding: a, sellingPlan: s, percentageCentsRoundingWorkaround: o });
  }
  function Xu(n, t, r, a, s) {
    var o, c, l, i;
    const u = [...t].sort((m, z) => m.variant.price - z.variant.price), h = u.reduce((m, z) => m + z.quantity, 0) >= n.buyQuantity + n.getQuantity ? n.getQuantity : 0, b = [], g = [];
    let f = h;
    for (const { variant: m, quantity: z } of u) {
      const S = Math.min(z, f), B = z - S;
      f -= S, S > 0 && b.push({ variant: m, quantity: S }), B > 0 && g.push({ variant: m, quantity: B });
    }
    const v = b.length > 0 ? la({ discountType: (o = n.getDiscountType) != null ? o : "percentage", discountValue: (c = n.getDiscountValue) != null ? c : 100, discountQuantity: h, variantQuantities: b, currencyRate: r, priceRounding: a, sellingPlan: s }) : 0, w = g.reduce((m, z) => m + z.quantity, 0);
    return v + la({ discountType: (l = n.buyDiscountType) != null ? l : "default", discountValue: (i = n.buyDiscountValue) != null ? i : 0, discountQuantity: w, variantQuantities: g, currencyRate: r, priceRounding: a, sellingPlan: s });
  }
  function go(n, t, r, a, s) {
    return n.bundleProducts.filter(({ productGID: o }) => o).map((o) => {
      const c = t[o.id];
      if (!c) return 0;
      const l = Kn(c.product, c.variant, s);
      return la({ discountType: o.discountType, discountValue: o.discountValue, discountQuantity: o.quantity, variantQuantities: [c], currencyRate: r, priceRounding: a, sellingPlan: l });
    }).reduce((o, c) => o + c, 0);
  }
  function ss(n, t, r, a, s) {
    const o = n.bundleProducts.filter(({ productGID: i }) => i).reduce((i, u) => {
      const h = t[u.id];
      if (!h) return i;
      const b = Kn(h.product, h.variant, s);
      return i + (b ? oo(h.variant.price, b) : h.variant.price);
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
      let u = Pi(i, a.precision);
      a.v2 && Math.round(u) > Math.round(o) && i > 100 && (u = Pi(i - 100, a.precision)), l = u <= o ? u : i;
    }
    return Math.max(0, Math.round(l));
  }
  function Pi(n, t = ".00") {
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
  var Mp = $('<img class="kaching-bundles__choose-product__product-image" alt=""/>'), zp = $('<span class="kaching-bundles__choose-product__product-title"> </span>'), $p = $('<span class="kaching-bundles__choose-product__subtitle"><!></span>'), Dp = $('<div class="kaching-bundles__choose-product__product-price"><!></div>'), Ap = $('<div class="kaching-bundles__choose-product__product-compare-at-price"><!></div>'), Vp = $("<div><!> <!></div>"), Tp = $('<div class="kaching-bundles__choose-product__product"><div class="kaching-bundles__choose-product__product-container"><!> <div class="kaching-bundles__choose-product__product-content"><!> <!> <div class="kaching-bundles__choose-product__product-price-container"><!> <!></div> <!></div></div> <!></div>');
  function ed(n, t) {
    var r;
    et(t, !0);
    const a = () => ze(v, "$config", c), s = () => ze(f, "$formatPrice", c), o = () => ze(g, "$translate", c), [c, l] = vt(), i = k(t, "product", 7), u = k(t, "dealBlock", 7), h = k(t, "dealBar", 7), b = k(t, "onChoose", 7), g = It(), f = un(), v = kn();
    let w = Ae(!1), m = Ae(lt(((r = i().variants.find((P) => P.availableForSale)) == null ? void 0 : r.id) || i().variants[0].id));
    const z = d(() => i().variants.find((P) => P.id === e(m)) || i().variants[0]), S = d(() => {
      var P;
      return e(w) || ((P = u().chooseProductModal) == null ? void 0 : P.showVariantImageByDefault);
    }), B = d(() => e(S) && e(z).image || i().image), q = d(() => u().priceRounding ? { perItem: !0, precision: u().priceRoundingPrecision, v2: a().featureFlags.price_rounding_v2 || !1 } : void 0), Q = d(() => h().dealBarType === gt.Bxgy ? e(z).price : la({ discountType: h().discountType, discountValue: h().discountValue, discountQuantity: 1, variantQuantities: [{ variant: e(z), quantity: 1 }], currencyRate: a().currencyRate, priceRounding: e(q) })), W = d(() => (function(P, D) {
      return P.useProductCompareAtPrice && D.compareAtPrice ? Math.max(D.price, D.compareAtPrice) : D.price;
    })(u(), e(z))), re = d(() => i().url ? `${i().url}?variant=${e(m)}` : void 0), M = d(() => dn({ priceFormatter: s(), product: i(), totalFullPrice: e(W), totalDiscountedPrice: e(Q), quantity: 1, unitQuantity: mr([{ variant: e(z), quantity: 1 }]) })), K = d(() => e(M)(o()(u().chooseProductModal.subtitle || ""))), A = d(() => u().chooseProductModal.buttonText);
    function U(P) {
      se(w, !0), se(m, P, !0);
    }
    var O = { get product() {
      return i();
    }, set product(P) {
      i(P), _();
    }, get dealBlock() {
      return u();
    }, set dealBlock(P) {
      u(P), _();
    }, get dealBar() {
      return h();
    }, set dealBar(P) {
      h(P), _();
    }, get onChoose() {
      return b();
    }, set onChoose(P) {
      b(P), _();
    } }, X = Tp(), Z = y(X), I = y(Z), C = (P) => {
      Yn(P, { get url() {
        return e(re);
      }, class: "kaching-bundles__choose-product__product-image-link", children: (D, ae) => {
        var T = Mp();
        we(T, "width", 100), we(T, "height", 100), be(() => we(T, "src", e(B))), p(D, T);
      }, $$slots: { default: !0 } });
    };
    E(I, (P) => {
      e(B) && P(C);
    });
    var N = j(I, 2), H = y(N);
    Yn(H, { get url() {
      return e(re);
    }, class: "kaching-bundles__choose-product__product-link", children: (P, D) => {
      var ae = zp(), T = y(ae, !0);
      x(ae), be(() => ht(T, i().title)), p(P, ae);
    }, $$slots: { default: !0 } });
    var J = j(H, 2), oe = (P) => {
      var D = $p();
      Te(y(D), () => e(K)), x(D), p(P, D);
    };
    E(J, (P) => {
      e(K) && P(oe);
    });
    var G = j(J, 2), V = y(G);
    rt(V, () => e(Q), (P) => {
      var D = Dp();
      Te(y(D), () => s()(e(Q))), x(D), p(P, D);
    });
    var F = j(V, 2), L = (P) => {
      var D = Me();
      rt(pe(D), () => e(W), (ae) => {
        var T = Ap();
        Te(y(T), () => s()(e(W))), x(T), p(ae, T);
      }), p(P, D);
    };
    E(F, (P) => {
      e(W) && e(W) > e(Q) && P(L);
    }), x(G);
    var te = j(G, 2), ue = (P) => {
      var D = Vp(), ae = y(D);
      ia(ae, { get product() {
        return i();
      }, class: "kaching-bundles__choose-product__product-option-names" }), Hn(j(ae, 2), { get product() {
        return i();
      }, get selectedVariantId() {
        return e(m);
      }, onChange: U }), x(D), p(P, D);
    };
    E(te, (P) => {
      i().variants.length > 1 && P(ue);
    }), x(N), x(Z), Ut(j(Z, 2), { element: "span", class: "kaching-bundles__choose-product__product-button", onclick: function() {
      b()({ product: i(), variant: e(z) });
    }, children: (P, D) => {
      var ae = Me(), T = pe(ae), ee = (ie) => {
        var me = Un();
        be((Ce) => ht(me, Ce), [() => o()(e(A))]), p(ie, me);
      }, Y = (ie) => {
        p(ie, Un("Choose"));
      };
      E(T, (ie) => {
        e(A) ? ie(ee) : ie(Y, !1);
      }), p(P, ae);
    }, $$slots: { default: !0 } }), x(X), p(n, X);
    var R = tt(O);
    return l(), R;
  }
  He(ed, { product: {}, dealBlock: {}, dealBar: {}, onChoose: {} }, [], [], !0);
  const ho = "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
  var qp = $('<img alt="Close"/>'), Gp = (n, t) => {
    se(t, !e(t));
  }, Fp = (n, t, r, a) => {
    se(t, e(r).value, !0), se(a, !1);
  }, Op = $('<img alt="" aria-hidden="true" class="kaching-bundles__choose-product__sort-option-check"/>'), Lp = $('<button type="button" class="kaching-bundles__choose-product__sort-option"><span> </span> <!></button>'), jp = $('<div class="kaching-bundles__choose-product__sort-menu"></div>'), Ep = $('<div class="kaching-bundles__choose-product__controls"><div class="kaching-bundles__choose-product__search-field"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__search-icon"/> <input type="search" class="kaching-bundles__choose-product__search-input"/></div> <div class="kaching-bundles__choose-product__sort"><button type="button" class="kaching-bundles__choose-product__sort-button"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__sort-icon"/> </button> <!></div></div>'), Rp = (n, t) => {
    se(t, "");
  }, Np = $('<div class="kaching-bundles__choose-product__empty-state-icon-wrapper"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__empty-state-icon"/></div> <h3 class="kaching-bundles__choose-product__empty-state-title"> </h3> <p class="kaching-bundles__choose-product__empty-state-description"> </p> <button type="button" class="kaching-bundles__choose-product__empty-state-clear-button"> </button>', 1), Qp = $('<div class="kaching-bundles__choose-product__empty-state"><!></div>'), Wp = $('<div class="kaching-bundles__choose-product"><div class="kaching-bundles__choose-product__header"><h2 class="kaching-bundles__choose-product__heading"><!></h2> <!></div> <!> <div class="kaching-bundles__choose-product__products"><!></div></div>');
  function po(n, t) {
    var r;
    et(t, !0);
    const a = () => ze(b, "$translate", s), [s, o] = vt(), c = k(t, "dealBlock", 7), l = k(t, "dealBar", 7), i = k(t, "products", 23, () => []), u = k(t, "onChoose", 7), h = k(t, "onClose", 7), b = It(), g = d(() => c().chooseProductModal), f = d(() => ((G) => bn({ "kaching-choose-product-button-size": G.buttonSize + "px", "kaching-choose-product-text-size": G.textSize + "px", "kaching-choose-product-price-color": Re(G.priceColor), "kaching-choose-product-compare-at-price-color": Re(G.compareAtPriceColor), "kaching-choose-product-text-color": Re(G.textColor), "kaching-choose-product-button-color": Re(G.buttonColor), "kaching-choose-product-button-text-color": Re(G.buttonTextColor), "kaching-choose-product-photo-size": G.productPhotoSize + "px" }))(e(g)));
    let v = Ae(""), w = Ae(!1);
    const m = { Relevance: "relevance", NewestFirst: "newest-first", PriceLowToHigh: "price-low-to-high", PriceHighToLow: "price-high-to-low" }, z = d(() => [{ value: m.Relevance, label: a()("system.sort_relevance") }, { value: m.NewestFirst, label: a()("system.sort_newest_first") }, { value: m.PriceLowToHigh, label: a()("system.sort_price_low_to_high") }, { value: m.PriceHighToLow, label: a()("system.sort_price_high_to_low") }]);
    let S = Ae(lt(Object.values(m).includes((r = e(g).defaultSortOption) != null ? r : "") ? e(g).defaultSortOption : m.Relevance));
    const B = d(() => e(g).showSearchField ? i().filter((G) => G.title.toLowerCase().includes(e(v).toLowerCase().trim())) : i()), q = d(() => {
      const G = [...e(B)], V = (L) => {
        const te = L.variants.find((ue) => ue.availableForSale) || L.variants[0];
        return (te == null ? void 0 : te.price) || 0;
      }, F = (L) => {
        if (!L.createdAt) return 0;
        const te = Date.parse(L.createdAt);
        return Number.isNaN(te) ? 0 : te;
      };
      switch (e(S)) {
        case m.Relevance:
          return G;
        case m.NewestFirst:
          return G.sort((L, te) => {
            const ue = F(te) - F(L);
            return ue !== 0 ? ue : te.id - L.id;
          });
        case m.PriceLowToHigh:
          return G.sort((L, te) => V(L) - V(te));
        case m.PriceHighToLow:
          return G.sort((L, te) => V(te) - V(L));
        default:
          return G;
      }
    }), Q = d(() => e(g).showSearchField && e(v).trim().length > 0 && e(q).length === 0);
    function W() {
      se(w, !1);
    }
    function re(G, V) {
      const F = (L) => {
        G.contains(L.target) || V();
      };
      return document.addEventListener("click", F, !0), { destroy() {
        document.removeEventListener("click", F, !0);
      } };
    }
    var M = { get dealBlock() {
      return c();
    }, set dealBlock(G) {
      c(G), _();
    }, get dealBar() {
      return l();
    }, set dealBar(G) {
      l(G), _();
    }, get products() {
      return i();
    }, set products(G = []) {
      i(G), _();
    }, get onChoose() {
      return u();
    }, set onChoose(G) {
      u(G), _();
    }, get onClose() {
      return h();
    }, set onClose(G) {
      h(G), _();
    } }, K = Wp(), A = y(K), U = y(A), O = y(U), X = (G) => {
      var V = Un();
      be((F) => ht(V, F), [() => a()(e(g).heading)]), p(G, V);
    };
    E(O, (G) => {
      e(g).heading && G(X);
    }), x(U), Ut(j(U, 2), { element: "span", class: "kaching-bundles__choose-product__close", get onclick() {
      return h();
    }, children: (G, V) => {
      var F = qp();
      be(() => we(F, "src", ho)), p(G, F);
    }, $$slots: { default: !0 } }), x(A);
    var Z = j(A, 2), I = (G) => {
      var V = Ep(), F = y(V), L = y(F), te = j(L, 2);
      ra(te), x(F);
      var ue = j(F, 2), R = y(ue);
      R.__click = [Gp, w];
      var P = y(R), D = j(P);
      x(R);
      var ae = j(R, 2), T = (ee) => {
        var Y = jp();
        At(Y, 21, () => e(z), (ie) => ie.value, (ie, me) => {
          var Ce = Lp();
          Ce.__click = [Fp, S, me, w];
          var ve = y(Ce), xe = y(ve, !0);
          x(ve);
          var fe = j(ve, 2), ce = (ne) => {
            var ge = Op();
            be(() => we(ge, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.6663%205L7.49967%2014.1667L3.33301%2010'%20stroke='%23344054'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), p(ne, ge);
          };
          E(fe, (ne) => {
            e(S) === e(me).value && ne(ce);
          }), x(Ce), be(() => ht(xe, e(me).label)), p(ie, Ce);
        }), x(Y), p(ee, Y);
      };
      E(ae, (ee) => {
        e(w) && ee(T);
      }), x(ue), Qs(ue, (ee, Y) => re == null ? void 0 : re(ee, Y), () => W), x(V), be((ee, Y, ie) => {
        we(L, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.5%2017.5L13.875%2013.875M15.8333%209.16667C15.8333%2012.8486%2012.8486%2015.8333%209.16667%2015.8333C5.48477%2015.8333%202.5%2012.8486%202.5%209.16667C2.5%205.48477%205.48477%202.5%209.16667%202.5C12.8486%202.5%2015.8333%205.48477%2015.8333%209.16667Z'%20stroke='%23717680'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), we(te, "aria-label", ee), we(te, "placeholder", Y), we(P, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.1667%203.33337V16.6667M14.1667%2016.6667L10.8333%2013.3334M14.1667%2016.6667L17.5%2013.3334M5.83333%2016.6667V3.33337M5.83333%203.33337L2.5%206.66671M5.83333%203.33337L9.16667%206.66671'%20stroke='%23414651'%20stroke-width='1.67'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), ht(D, ` ${ie != null ? ie : ""}`);
      }, [() => a()("system.search"), () => a()("system.search"), () => a()("system.sort_by")]), Kg(te, () => e(v), (ee) => se(v, ee)), p(G, V);
    };
    E(Z, (G) => {
      e(g).showSearchField && G(I);
    });
    var C = j(Z, 2), N = y(C), H = (G) => {
      var V = Qp(), F = y(V), L = (ue) => {
        var R = Np(), P = pe(R), D = y(P);
        x(P);
        var ae = j(P, 2), T = y(ae, !0);
        x(ae);
        var ee = j(ae, 2), Y = y(ee, !0);
        x(ee);
        var ie = j(ee, 2);
        ie.__click = [Rp, v];
        var me = y(ie, !0);
        x(ie), be((Ce, ve, xe) => {
          we(D, "src", "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='4'%20y='4'%20width='48'%20height='48'%20rx='24'%20fill='%23F2F4F7'/%3e%3crect%20x='4'%20y='4'%20width='48'%20height='48'%20rx='24'%20stroke='%23F9FAFB'%20stroke-width='8'/%3e%3cpath%20d='M37%2037L32.65%2032.65M35%2027C35%2031.4183%2031.4183%2035%2027%2035C22.5817%2035%2019%2031.4183%2019%2027C19%2022.5817%2022.5817%2019%2027%2019C31.4183%2019%2035%2022.5817%2035%2027Z'%20stroke='%23475467'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), ht(T, Ce), ht(Y, ve), ht(me, xe);
        }, [() => a()("system.no_results_found"), () => a()("system.no_results_description"), () => a()("system.clear_search")]), p(ue, R);
      }, te = (ue) => {
        var R = Un();
        be((P) => ht(R, P), [() => a()("system.no_products_available")]), p(ue, R);
      };
      E(F, (ue) => {
        e(Q) ? ue(L) : ue(te, !1);
      }), x(V), p(G, V);
    }, J = (G) => {
      var V = Me();
      At(pe(V), 17, () => e(q), (F) => F.id, (F, L) => {
        ed(F, { get dealBlock() {
          return c();
        }, get dealBar() {
          return l();
        }, get product() {
          return e(L);
        }, get onChoose() {
          return u();
        } });
      }), p(G, V);
    };
    E(N, (G) => {
      e(q).length === 0 ? G(H) : G(J, !1);
    }), x(C), x(K), be(() => Tt(K, e(f))), p(n, K);
    var oe = tt(M);
    return o(), oe;
  }
  On(["click"]), He(po, { dealBlock: {}, dealBar: {}, products: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var Up = $('<div class="kaching-bundles"><!></div>');
  function td(n, t) {
    var r;
    et(t, !0);
    const a = k(t, "config", 7), s = k(t, "dealBlock", 7), o = k(t, "dealBar", 7), c = k(t, "products", 23, () => []), l = k(t, "mediaImages", 7), i = k(t, "translations", 7), u = d(() => or(s(), a().brandColors)), h = d(() => or(o(), a().brandColors)), { setConfig: b } = Ha(a()), { setMoneyFormat: g } = wi(a().moneyFormat), { setTranslations: f } = Ua(i()), { setMediaImages: v } = al(l()), { setSwatchSettings: w } = tl({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (r = e(u).showSelectedSwatchName) != null && r });
    Xe(() => {
      b(a());
    }), Xe(() => {
      g(a().moneyFormat, !!e(u).showPricesWithoutDecimals);
    }), Xe(() => {
      f(i());
    }), Xe(() => {
      v(l());
    }), Xe(() => {
      var S;
      w({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (S = e(u).showSelectedSwatchName) != null && S });
    });
    var m = { get config() {
      return a();
    }, set config(S) {
      a(S), _();
    }, get dealBlock() {
      return s();
    }, set dealBlock(S) {
      s(S), _();
    }, get dealBar() {
      return o();
    }, set dealBar(S) {
      o(S), _();
    }, get products() {
      return c();
    }, set products(S = []) {
      c(S), _();
    }, get mediaImages() {
      return l();
    }, set mediaImages(S) {
      l(S), _();
    }, get translations() {
      return i();
    }, set translations(S) {
      i(S), _();
    } }, z = Up();
    return po(y(z), { get dealBlock() {
      return e(u);
    }, get dealBar() {
      return e(h);
    }, get products() {
      return c();
    }, onChoose: () => {
    }, onClose: () => {
    } }), x(z), p(n, z), tt(m);
  }
  customElements.define("kaching-bundles-choose-product", He(td, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, dealBar: { attribute: "deal-bar", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), Sn(this, "component"), this.component = this;
    }
  })), ai = !0;
  var Hp = Tn('<svg width="102" height="60" viewBox="0 0 102 60" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 2)" fill="currentColor"></ellipse><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 2)" fill="#000" fill-opacity=".3"></ellipse><mask id="a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="5" width="96" height="48"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 0)" fill="currentColor"></ellipse></mask><g mask="url(#a)"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 0)" fill="currentColor"></ellipse></g><path class="most-popular-text" d="M28 15.4 25.4 24a.3.3 0 0 1 0 .1.2.2 0 0 1-.2.1c-.4.1-.7 0-.8-.4a1007.3 1007.3 0 0 1-3.9-9.2l-.8 7.6a.5.5 0 0 0 0 .2l.6.8a.7.7 0 0 1 0 .1.2.2 0 0 1 0 .1c0 .5-1.7.1-2 0-1 0 .1-1 .2-1.4l1.1-9c0-.4-.1-.7-.5-1a.4.4 0 0 1-.1-.2v-.2a.2.2 0 0 1 .1 0 15.2 15.2 0 0 1 3.1.2h.1c.1 0 0 0 0 .1.3.5-.5.7-.3 1.2a1361.6 1361.6 0 0 1 3.2 8.1l2.3-7.3a.7.7 0 0 0-.1-.6c-.3-.4-1-1 .1-1l2.7.4c.2 0 .3.2.2.4a.4.4 0 0 1-.1.2c-.3.3-.5.5-.4 1a771.7 771.7 0 0 0 2.5 10c.5.5.7 1-.3.8l-2.2-.3c-.5 0-.5-.4-.1-1a.7.7 0 0 0 .1-.6l-1.6-7.6c0-.2-.1-.2-.1 0zm24 4.7.1 4.5c0 1 .6 1.5 1.6 1.5.3 0 .5-.2.6-.5.1-.4.3-.5.5-.3h.1v.1c.1 1.1-.4 2-1.5 2-2.3.4-3.2-1.2-3.3-3.3l-.2-4.1c0-.4-.2-.5-.6-.5-.5 0-.8-.1-.7-.7a.2.2 0 0 1 .2-.1c1.3.2 2-.3 2-1.6a.2.2 0 0 1 .2-.1c1.1-.5.9 1.3.9 1.9a.1.1 0 0 0 .1.1l2.2.3.2.1c.1.3.1.5-.1.7a.2.2 0 0 1-.1 0 .4.4 0 0 1-.1 0l-2-.1a.1.1 0 0 0-.1 0zm-11.6 4.6c-.7.8-1.8 1.2-3 1.1-1.1 0-2.3-.5-3.3-1.4A5.7 5.7 0 0 1 33 23a5 5 0 0 1-.6-1.7 4 4 0 0 1 .1-1.7c.1-.5.4-1 .8-1.4.7-.7 1.7-1.2 2.9-1.1 1.2 0 2.4.6 3.3 1.4.5.4.9 1 1.2 1.5.3.5.5 1.1.5 1.7a4 4 0 0 1 0 1.6c-.2.6-.5 1-.8 1.4zm-2.4.4c.3 0 .5-.3.7-.5l.5-1v-1.4a6.4 6.4 0 0 0-.3-1.4 6.4 6.4 0 0 0-.6-1.4 4.7 4.7 0 0 0-.8-1 2.6 2.6 0 0 0-1-.6 1.5 1.5 0 0 0-.9 0c-.3 0-.5.3-.7.5l-.4 1a4.7 4.7 0 0 0 0 1.4 6.4 6.4 0 0 0 1.7 3.8c.3.3.6.5 1 .6.2 0 .5.1.8 0zm8-6c-1-.8-2.4-.4-2.3 1 0 .4.3.8.7 1l3 1.2c1.1.5 2.2 2.5 1.1 3.6-1.6 1.8-5.6.6-6.8-1.3-.2-.4-.1-.8.4-1 1.2-.5 1.5 1.5 2.3 2 1 .8 3 .6 2.4-1.1-.3-1-3.2-1.8-3.8-2.2-1.9-1.2-1.8-4 .8-4.3 1.6-.1 4.5.6 4.7 2.6a.3.3 0 0 1 0 .3c-1.1 1.3-1.9-1.3-2.5-1.8zM28.3 34.9c0 1.4 0 2 .8 3 .2.2.2.4 0 .6a.3.3 0 0 1-.2 0l-3.8-.3a.4.4 0 0 1-.3 0c-.3-.4-.3-.7 0-1a1 1 0 0 0 .4-.8L25 28c0-.4-.3-.9-.8-1.4a.3.3 0 0 1 0-.1.2.2 0 0 1 0-.1c0-.3.2-.4.6-.3 3.4.2 9.4.1 9.7 4.8.3 3.8-3 4.1-6 3.9zm-.2-6.7c0 1.4 0 3 .2 4.6 0 .3.2.5.5.6 3.4 1 2.5-3.2 1.6-4.6-.3-.5-.8-.9-1.5-1.1-.5-.2-.8 0-.8.5zM59.5 41c-1.7 1.3-4.3.4-5.2-1.4-1-1.8 0-4.1-1.3-5.8a.4.4 0 0 1 0-.2c0-.6.4-.5.8-.5a19.9 19.9 0 0 1 2.5 0 .4.4 0 0 1 .4.3l.2 5.3c0 .8.3 1.8 1.1 1.8 1.7.2 1-4.2 1-5.3a.5.5 0 0 0-.2-.2l-.5-.8c-.3-.3-.2-.5.3-.6h2.9c.3 0 .4 0 .4.4l.3 6c0 1.6 1.4 1.6 1.3-.2l-.3-7c0-.8-.3-1.2-.8-1.8a.3.3 0 0 1 0-.2.3.3 0 0 1 0-.2.3.3 0 0 1 .2 0l2.8-1.2c.5-.2.8 0 .8.6l.5 10.4c0 .5.2.8.6 1.2.3.4.4 1-.4.8-.9 0-3.1 0-3.9-.4a.4.4 0 0 0-.2 0c-.9 0-2.7.1-3.1-1a.1.1 0 0 0-.2 0zm-16.4-3c-.5 1-1.5 1.6-2.7 1.8-1.2.2-2.5 0-3.6-.7a5.7 5.7 0 0 1-1.5-1.2 5 5 0 0 1-.9-1.6 4.2 4.2 0 0 1-.2-1.7 3.5 3.5 0 0 1 .5-1.6c.5-.9 1.5-1.5 2.7-1.7 1.2-.2 2.5 0 3.6.7a5.7 5.7 0 0 1 1.4 1.2c.5.5.8 1 1 1.6.2.5.2 1.1.2 1.7a3.5 3.5 0 0 1-.5 1.5zm-3.3 1c.2 0 .3-.1.4-.4l.3-.8v-1.3a8.8 8.8 0 0 0-.3-1.3 8.8 8.8 0 0 0-.5-1.3 5.9 5.9 0 0 0-.6-1.1l-.6-.6c-.2-.2-.4-.2-.6-.2-.2 0-.3.2-.4.4l-.3 1v1.1a8.8 8.8 0 0 0 1.4 3.8l.6.6c.2.1.4.2.6.1z" fill="#FEFDFD"></path><path class="most-popular-text" d="M46.9 32.7a3 3 0 0 1 2.8-.3c2.5.8 3.6 2.5 3.5 5-.2 2.9-3.2 4.2-5.5 2.9-.2-.1-.2 0-.2 0 .1 1-.2 2.2.7 3 .3.2.4.5.1.7a.3.3 0 0 1-.2.1 401 401 0 0 0-3.5-.3c-.4 0-.6-.3-.7-.6a.3.3 0 0 1 0-.1.5.5 0 0 1 .1-.1l.5-.7a.4.4 0 0 0 0-.2l-.2-7.3c0-.6-1.1-.9-.9-1.6a.3.3 0 0 1 .2-.2l2.6-1a.2.2 0 0 1 .2 0c.2.1.4.4.4.7zM49 40c2.2 0 .5-5.5-.1-6.4-.7-.8-1.5-.7-1.7.4v3.4c.2.9.6 2.6 1.8 2.6zm24.5 2.7c-2.7 1.4-5.7-1-6.1-3.7-.7-3.5 2.8-5.8 5.8-3.8a.1.1 0 0 0 .1 0c.3-.7 2.3 0 2.9.2.4 0 .6.3.5.7a.3.3 0 0 1 0 .1.3.3 0 0 1-.1 0c-.4.4-.6.8-.6 1.2 0 2.3.2 3.7.2 4.2s1 1.2.7 1.7a.2.2 0 0 1-.1 0 .3.3 0 0 1-.2.1l-2.6-.3a.3.3 0 0 1-.2 0l-.2-.4a.1.1 0 0 0-.1 0zm-.4-5.2c-.2-1.8-2.7-3.4-2.8-.7-.1 1.5.3 4.6 1.9 5.5a.4.4 0 0 0 .2 0c1.4-.3.8-3.5.7-4.8zM80.5 36.5c.3-.3.5-.7 1-.9 3.8-1.6 3.6 4.9.9 2.9-.5-.4-.5-1.7-1.2-1.5a.3.3 0 0 0-.1 0 .3.3 0 0 0 0 .2c-.4.7-.4 4.6.1 5.2.2.3 1.5 1.2.2 1.2a52 52 0 0 1-3.5-.3c-.3 0-.5-.2-.5-.5a.4.4 0 0 1 0-.2c.4-.4.6-.7.6-1.2l-.2-3.5a.4.4 0 0 0 0-.2l-.9-1c-.2-.2 0-.4.3-.6l2.6-1c.3 0 .5 0 .5.4v1h.2z" fill="#FEFDFD"></path><path class="most-popular-text" fill-rule="evenodd" clip-rule="evenodd" d="m82.2 24.2-.7-6.2-.7 6.2-2.7-2.1 2 2.7-6.1.7 6.2.7L78 29l2.8-2.1.7 6.1.7-6.1L85 29l-2.2-2.8 6.2-.7-6.1-.7 2-2.7-2.7 2.1z" fill="#fff"></path><path class="most-popular-text" d="M45 4v1a2 2 0 0 0 2 2h1-1a2 2 0 0 0-2 2v1-1a2 2 0 0 0-2-2h-1 1a2 2 0 0 0 2-2V4zm12 41v1a2 2 0 0 0 2 2h1-1a2 2 0 0 0-2 2v1-1a2 2 0 0 0-2-2h-1 1a2 2 0 0 0 2-2v-1zM13 22v3a4 4 0 0 0 4 4h3-3a4 4 0 0 0-4 4v3-3a4 4 0 0 0-4-4H6h3a4 4 0 0 0 4-4v-3zM67 4v3a4 4 0 0 0 4 4h3-3a4 4 0 0 0-4 4v3-3a4 4 0 0 0-4-4h-3 3a4 4 0 0 0 4-4V4z" fill="#fff"></path></svg>');
  function nd(n) {
    p(n, Hp());
  }
  He(nd, {}, [], [], !0);
  const rd = (n) => {
    const t = n.badgeStyle || "simple", r = n.badgeText || "", a = { type: "dealBar", dealBarId: n.id }, s = { id: `legacy-${n.id}`, attachedTo: a, text: r, colors: null };
    return t === "most-popular" ? { ...s, badgeType: "most-popular", size: 102 } : t === "custom" ? n.badgeImageGID ? { ...s, badgeType: "custom", imageGID: n.badgeImageGID, size: 56 } : null : r ? { ...s, badgeType: "simple", textSize: 12 } : null;
  }, sl = (n, t) => {
    if (n.blockLayout !== "vertical") return [];
    const r = os(n);
    if (r.length > 0) return r.filter((s) => s.attachedTo.type === "dealBar" && s.attachedTo.dealBarId === t.id);
    if (n.badgesEnabled === !1) return [];
    const a = rd(t);
    return a ? [a] : [];
  }, Zp = (n, t) => n.blockLayout !== "vertical" ? [] : os(n).filter((r) => r.attachedTo.type === t), os = (n) => n.badgesEnabled === !1 ? [] : n.badges || [], ya = (n, t, r) => ({ ...n, text: r(t(n.text)) }), Jp = (n) => {
    const t = n.filter((r) => r.badgeType === "border").map((r) => r.thickness);
    return t.length === 0 ? 22 : Math.max(...t);
  }, Yp = (n) => {
    const t = n.filter((r) => r.badgeType === "border").filter((r) => r.position === "all").map((r) => {
      var a;
      return (a = r.gap) != null ? a : 0;
    });
    return t.length === 0 ? 0 : Math.max(...t);
  };
  let ol = null;
  const ad = (n, t) => typeof document == "undefined" ? 0 : (ol || (ol = document.createElement("canvas").getContext("2d")), ol ? (ol.font = `bold ${t}px sans-serif`, ol.measureText(n).width + 0.5 * n.length) : 0), Kp = (n) => {
    const t = n.flatMap((r) => r.badgeType !== "border" || r.position !== "left" && r.position !== "right" ? [] : [ad(r.text, r.textSize) + 24]);
    return t.length === 0 ? 0 : Math.max(...t);
  }, wa = (n) => ({ positions: new Set(n.flatMap((t) => t.badgeType === "border" ? [t.position] : [])), thickness: Jp(n), gap: Yp(n), sideLength: Kp(n) });
  var Xp = Tn('<animate attributeName="startOffset" repeatCount="indefinite"></animate>'), eb = Tn("<textPath><!> </textPath>"), tb = Tn("<!><!>", 1), nb = Tn('<svg class="kaching-bundles__badge-border__curve"><path fill="none"></path><text text-anchor="middle"></text></svg>'), rb = $('<span class="kaching-bundles__badge-border__side kaching-bundles__badge-border__side--top"><!></span>'), ab = $('<div class="kaching-bundles__badge-border kaching-bundles__badge-border--all"><div class="kaching-bundles__badge-border__band"><span></span></div> <!></div>'), ib = $('<div><span class="kaching-bundles__badge-border__text"><!></span></div>');
  function id(n, t) {
    const r = (function() {
      var I, C, N;
      if (dt && St && St.nodeType === 8 && ((I = St.textContent) != null && I.startsWith("$"))) {
        const H = St.textContent.substring(1);
        return pr(), H;
      }
      return (N = (C = window.__svelte) != null ? C : window.__svelte = {}).uid != null || (N.uid = 1), "c" + window.__svelte.uid++;
    })();
    et(t, !0);
    const a = k(t, "badge", 7), s = typeof window != "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, o = d(() => $u(a().colors)), c = d(() => {
      var I;
      return `--badge-border-thickness: ${a().thickness}px; --badge-text-size: ${a().textSize}px; --badge-ring-outer: ${a().thickness + ((I = a().gap) != null ? I : 0)}px;`;
    });
    let l = Ae(0), i = Ae(0);
    const u = d(() => a().position === "left" || a().position === "right"), h = d(() => {
      const I = Math.max(6, a().thickness - 6), C = e(u) ? e(i) : e(l), N = Math.max(1, a().text.trim().length), H = C > 0 ? (C - 16) / (0.62 * N) : 1 / 0;
      return Math.max(6, Math.min(a().textSize, I, H));
    }), b = d(() => `--badge-border-thickness: ${a().thickness}px; --badge-text-size: ${e(h)}px;`);
    let g = Ae(void 0), f = Ae(lt({ count: 0, slot: 0, pathLength: 0 })), v = Ae(void 0), w = Ae(0), m = Ae(0);
    const z = d(() => Math.max(6, Math.min(a().textSize, a().thickness - 6))), S = d(() => 0.32 * e(z)), B = d(() => 0.4 * e(z) + a().spacing), q = d(() => a().delimiter || ""), Q = d(() => (ad(a().text.trim(), e(z)) || a().text.trim().length * e(z) * 0.7) + (e(q) ? e(z) : 0) + 2 * e(B));
    Xe(() => {
      if (e(W), e(Q), !e(g)) return;
      const I = e(g).getTotalLength() / 2;
      if (I <= 0 || e(Q) <= 0) return;
      const C = Math.max(1, Math.floor(I / e(Q)));
      se(f, { count: C, slot: I / C, pathLength: I }, !0);
    });
    const W = d(() => {
      if (!e(v) || !e(w) || !e(m)) return "";
      const I = getComputedStyle(e(v)), C = parseFloat(I.getPropertyValue("--bar-border-radius")) || 8, N = parseFloat(I.getPropertyValue("--badge-border-gap")) || 0, H = a().thickness / 2 + e(S), J = e(w) - H, oe = e(m) - H, G = Math.min(C + N + H, Math.max(0, Math.min(J - H, oe - H) / 2)), V = ["H " + (J - G), `A ${G} ${G} 0 0 1 ${J} ${H + G}`, "V " + (oe - G), `A ${G} ${G} 0 0 1 ${J - G} ${oe}`, `H ${H + G}`, `A ${G} ${G} 0 0 1 ${H} ${oe - G}`, `V ${H + G}`, `A ${G} ${G} 0 0 1 ${H + G} ${H}`].join(" ");
      return `M ${H + G} ${H} ${V} ${V} Z`;
    }), re = `kaching-badge-ring-${r}`, M = d(() => a().repeatText && a().animated && a().spinSpeed > 0 && !s && e(f).pathLength > 0), K = d(() => e(M) ? Math.max(2, e(f).pathLength / Math.max(1, a().spinSpeed)) : 0);
    var A = { get badge() {
      return a();
    }, set badge(I) {
      a(I), _();
    } }, U = Me(), O = pe(U), X = (I) => {
      var C = ab(), N = j(y(C), 2), H = (oe) => {
        var G = Me();
        rt(pe(G), () => e(W), (V) => {
          var F = Me(), L = pe(F), te = (ue) => {
            var R = nb();
            {
              const ae = (T, ee = Pr, Y = Pr) => {
                var ie = eb(), me = y(ie), Ce = (xe) => {
                  var fe = Xp();
                  be(() => {
                    var ce;
                    we(fe, "from", a().spinDirection === "clockwise" ? ee() : ee() + e(f).pathLength), we(fe, "to", a().spinDirection === "clockwise" ? ee() + e(f).pathLength : ee()), we(fe, "dur", `${(ce = e(K)) != null ? ce : ""}s`);
                  }), p(xe, fe);
                };
                E(me, (xe) => {
                  e(M) && xe(Ce);
                });
                var ve = j(me, 1, !0);
                x(ie), be(() => {
                  we(ie, "href", `#${re}`), we(ie, "startOffset", ee()), ht(ve, Y());
                }), p(T, ie);
              };
              var P = y(R);
              _i(P, (T) => se(g, T), () => e(g));
              var D = j(P);
              At(D, 21, () => ({ length: e(f).count }), $r, (T, ee, Y) => {
                var ie = tb(), me = pe(ie);
                ae(me, () => Y * e(f).slot + e(f).slot / 2, () => a().text);
                var Ce = j(me), ve = (xe) => {
                  ae(xe, () => Y * e(f).slot + e(f).slot, () => e(q));
                };
                E(Ce, (xe) => {
                  e(q) && xe(ve);
                }), p(T, ie);
              }), x(D), x(R), be(() => {
                we(P, "id", re), we(P, "d", e(W));
              });
            }
            be(() => {
              var ae, T;
              return we(R, "viewBox", `0 0 ${(ae = e(w)) != null ? ae : ""} ${(T = e(m)) != null ? T : ""}`);
            }), p(ue, R);
          };
          E(L, (ue) => {
            e(W) && ue(te);
          }), p(V, F);
        }), p(oe, G);
      }, J = (oe) => {
        var G = rb();
        Te(y(G), () => a().text), x(G), p(oe, G);
      };
      E(N, (oe) => {
        a().repeatText && a().text.trim() ? oe(H) : oe(J, !1);
      }), x(C), _i(C, (oe) => se(v, oe), () => e(v)), be(() => {
        var oe, G;
        return Tt(C, `${(oe = e(o)) != null ? oe : ""} ${(G = e(c)) != null ? G : ""}`);
      }), Wl(C, "clientWidth", (oe) => se(w, oe)), Wl(C, "clientHeight", (oe) => se(m, oe)), p(I, C);
    }, Z = (I) => {
      var C = ib(), N = y(C);
      Te(y(N), () => a().text), x(N), x(C), be(() => {
        var H, J, oe;
        Et(C, 1, `kaching-bundles__badge-border kaching-bundles__badge-border--${(H = a().position) != null ? H : ""}`), Tt(C, `${(J = e(o)) != null ? J : ""} ${(oe = e(b)) != null ? oe : ""}`);
      }), Wl(C, "clientWidth", (H) => se(l, H)), Wl(C, "clientHeight", (H) => se(i, H)), p(I, C);
    };
    return E(O, (I) => {
      a().position === "all" ? I(X) : I(Z, !1);
    }), p(n, U), tt(A);
  }
  He(id, { badge: {} }, [], [], !0);
  var lb = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--custom"><img class="kaching-bundles__bar-most-popular__custom-image"/></div>'), sb = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--fancy"><!></div>'), ob = $('<div class="kaching-bundles__bar-most-popular__content"><!></div>'), cb = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--simple"><!></div>');
  function sa(n, t) {
    et(t, !0);
    const [r, a] = vt(), s = k(t, "badge", 7), o = k(t, "blockLayout", 7), c = Ln(), l = d(() => s().badgeType === "custom" ? ze(c, "$getMediaImageUrl", r)(s().imageGID) : void 0), i = d(() => o() === "vertical"), u = d(() => {
      switch (s().badgeType) {
        case "most-popular":
        case "border":
          return !0;
        case "simple":
          return !!s().text;
        case "custom":
          return !!e(l);
      }
    }), h = d(() => e(i) && e(u)), b = d(() => $u(s().colors)), g = d(() => s().badgeType === "simple" ? `--badge-text-size: ${s().textSize}px;` : ""), f = d(() => s().badgeType === "most-popular" || s().badgeType === "custom" ? `--badge-size: ${s().size}px;` : "");
    var v = { get badge() {
      return s();
    }, set badge(B) {
      s(B), _();
    }, get blockLayout() {
      return o();
    }, set blockLayout(B) {
      o(B), _();
    } }, w = Me(), m = pe(w), z = (B) => {
      var q = Me(), Q = pe(q), W = (M) => {
        id(M, { get badge() {
          return s();
        } });
      }, re = (M) => {
        var K = Me(), A = pe(K), U = (X) => {
          var Z = lb(), I = y(Z);
          x(Z), be(() => {
            Tt(Z, e(f)), we(I, "alt", s().text || "Badge"), we(I, "src", e(l));
          }), p(X, Z);
        }, O = (X) => {
          var Z = Me(), I = pe(Z), C = (H) => {
            var J = sb();
            nd(y(J)), x(J), be(() => {
              var oe, G;
              return Tt(J, `${(oe = e(b)) != null ? oe : ""} ${(G = e(f)) != null ? G : ""}`);
            }), p(H, J);
          }, N = (H) => {
            var J = cb();
            rt(y(J), () => s().text, (oe) => {
              var G = ob();
              Te(y(G), () => s().text), x(G), p(oe, G);
            }), x(J), be(() => {
              var oe, G;
              return Tt(J, `${(oe = e(b)) != null ? oe : ""} ${(G = e(g)) != null ? G : ""}`);
            }), p(H, J);
          };
          E(I, (H) => {
            s().badgeType === "most-popular" ? H(C) : H(N, !1);
          }, !0), p(X, Z);
        };
        E(A, (X) => {
          s().badgeType === "custom" && e(l) ? X(U) : X(O, !1);
        }, !0), p(M, K);
      };
      E(Q, (M) => {
        s().badgeType === "border" ? M(W) : M(re, !1);
      }), p(B, q);
    };
    E(m, (B) => {
      e(h) && B(z);
    }), p(n, w);
    var S = tt(v);
    return a(), S;
  }
  function Za(n, t) {
    et(t, !0);
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
    } }, i = Me();
    return Zc(pe(i), r, 0, (u, h) => {
      nu(u, (g, f) => ({ for: a(), class: "kaching-bundles__bar-container", style: "", [fi]: g, [vi]: f }), [() => ({ "kaching-bundles__bar-container--sold-out": s(), "kaching-bundles__bar-container--badge-border-all": o().positions.has("all"), "kaching-bundles__bar-container--badge-border-top": o().positions.has("top"), "kaching-bundles__bar-container--badge-border-bottom": o().positions.has("bottom"), "kaching-bundles__bar-container--badge-border-left": o().positions.has("left"), "kaching-bundles__bar-container--badge-border-right": o().positions.has("right") }), () => {
        var g, f;
        return { "--badge-border-thickness": `${(g = o().thickness) != null ? g : ""}px`, "--badge-border-gap": `${(f = o().gap) != null ? f : ""}px`, "--badge-border-gap-border": o().gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": o().sideLength ? `${o().sideLength}px` : void 0 };
      }]);
      var b = Me();
      Nl(pe(b), c), p(h, b);
    }), p(n, i), tt(l);
  }
  function cl(n, t, r) {
    return n + t.reduce((a, s) => s.includeInCompareAt ? a + s.fullPrice : a, 0) + r.reduce((a, s) => s.includeInCompareAt ? a + s.fullPrice * s.quantity : a, 0);
  }
  function bo(n, t, r) {
    return n ? t : r;
  }
  He(sa, { badge: {}, blockLayout: {} }, [], [], !0), He(Za, { element: {}, for: {}, soldOut: {}, borderHost: {}, children: {} }, [], [], !0);
  const ul = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3e%3crect%20width='100'%20height='100'%20fill='transparent'%20/%3e%3c/svg%3e", fo = ({ dealBlock: n, imageSize: t }) => {
    const { fonts: r, colors: a, cornerRadius: s } = n;
    return bn({ "kaching-free-gift-background-color": a.freeGiftBackground && Re(a.freeGiftBackground), "kaching-free-gift-text-color": a.freeGiftText && Re(a.freeGiftText), "kaching-free-gift-selected-background-color": a.freeGiftSelectedBackground && Re(a.freeGiftSelectedBackground), "kaching-free-gift-selected-text-color": a.freeGiftSelectedText && Re(a.freeGiftSelectedText), "kaching-free-gift-font-size": r.freeGift && r.freeGift.size + "px", "kaching-free-gift-font-weight": r.freeGift && ur(r.freeGift.style), "kaching-free-gift-font-style": r.freeGift && dr(r.freeGift.style), "kaching-free-gift-image-border-radius": (s || 0) / 2 + "px", "kaching-free-gift-image-height": t + "px" });
  }, vo = "data:image/webp;base64,UklGRoQYAABXRUJQVlA4WAoAAAAQAAAAVwEANAEAQUxQSPkFAAABBj/OtslttP9f5fcCagm1hVpF7YEJox4UKGYkeAMMGPfwDLTDZ1D2vIMIqAcB7VRSYECAAaEnwXBEmSwGHlrieL+jrjsiJgAn/5/8f/L/yf8n/w9iMzrDs9DBioEmgInM6NV1BfjS38jnJRbyl/z0anTfwYrRQgD4xYxeVQf15f0b+QwssfjtlYg8ExEHawBoId4gM3pV1dOX8AAqAJ+xRAb89pOcARg5wIrRQmAEM3p1XTXeAzefsVzIX/KTvBoBcIA10ELAMDOj366r1vXl/RuRz1gust9eicgzEXGwBtBCGD7m2avrqv19CcADFT4DS2T4TeQMeCbiYMVAC2FQkHn203XVyb563H8Glgv5S34SORsBcLBioAlAXyMz+q3qm+X9G5HPy4X89dsrkdEziIMVo0WE0IfIPHt1XfXc8mGP6jOwzH4TkTMAz0ScFTG9hORZdl31bo/Ko3rwM4DlT7Z30Cj7XA1D1zPot2o42l5BZ9WA/KlX2JshsdB9YlQOieW/woitwFY0TAjGOgRPdPd1x2BQlEurHcIoeSdS3S8gkMc/uW6hYVG9+wJUB/dr3SkYGEfeB1zlI7Y5undMVVwotvFHuk3cfSsGWoTuMxF2hQgArO5nAFIksUho+KOJvvLAZkz89KDfXxBPAfsJV2FvuAoXbLU2XIULzVW4NFyFc7bKHVdBiKvygKtwSVyVB1wF0W3iWCEft8mIFXCpW8TxQj5ukREvAKY9HDPk5y1ywwvILVfhnK1yx1bnxFTIHVfhnLgqD7gKl5qr8oCrcKm5Kp9wFXLDVZiwVW7ZatI8yxTIXeMcW6SNs1yB3HEVzomr8glX4ZK4Kh9zFS51sz4zRj7mKuSGqzBhK5gGGd7IJw2yvIFcmmOYA+dslVuuwuT/DpgRVyFgK6GmLNnDB1yFOTVDM4gPmmEYBHNqhOYQBGw1I67yAVdhRlzlHVdhTlyFoAELJpkRV3nHVmOuwpy4aq3rRnxi/mfOX/+rBa8YShsrIvxkL+ayB1Bxk5N9te+Ocgggc/UwUlade7fveX7vahFUHS37XuNxHPiUaiEddX/fXwC/PwrmfQeQ/gL4fgdIf4FHv+vp7OMPt+Ye+IPN2efwa80+nq0O/t8VHFsFPEN1cBzjJ4qB/EE+GX7araeJjLXioAeL3WqWxlHgrBZSdeWPTRqFzhqCqjt7+Ilq6r/vjP/tyjZGhtaVZClqtTaNodndsCnkkassTaLQWUNKv6vThWquWVflQClkt1pMkyiIEDhrNKlHKa7Rftwg6OSuHBjFbiVZEofOGk1QhwzrZJsEuFlV9r/i3ipDmkShs5rUUeVdbfwFNQsUbe76WyGyw9UUSRQ4azSpWka12Qeq8Ta962HFDqssjSV01mhStZZ3dZnr5oHGm7JH3V5lSKPQWaNJNTOsiR+rVjRJiV5TiOBWFtNEIgerSTWb4nrMqR0AN7vrJ4XsbldZLFHgjBZS7Sjv6rB3qjV1dFf2i1tZZWkSwllNUC0r747nJ6pN7awqu68Abq8W0yQKnDWaFEi1ssTH8hfUKqBgXXbdpyh01mhS7e/eHWemVdvai7su2i7eASh2K0mM6k7t4sWBygozo1o4WHdN7GC1IJHQGa06lmwYv/uhsgJSrVpZkrJTNkZ1vLZh/G57+wRgFajWdvNyQN0nG8bZpqgAwSzSqsUpKrvjk/SB+2TD8QShJdXyJu2MGfWF7qRgXXbDRA1vnZZd4MMBBrh1F9hBBh0dbSu3QCGyQ2M+6WEG2OmBtrKYJnHorAkTiQEri4b4RA12CrZPk8U0iQIHo0n9YNQQuOEGmHh7K1cyjSV01mhSB7bbZmQ05EDWQTRBHTlpxlgxqN02YaM5BHETJopF9aJ+K80jsNu6+UBxaVi3lNgE43ptjGLUoFZOsapd1GesmFXH25pEil9tXItIsaybHq0YK6YltzhKsQkU3+rw6nBFahTr6ujqMMVqTIp7TXT1Y8Uq0oqDTZTtnrLbTENRXCw2SJHdTyfOKGYmLUZInfx/8v/J/yf/n/xfUwBWUDggZBIAABBuAJ0BKlgBNQE+kUSdS6WjoyKjsKo4sBIJY27PfD3SSyKUjHn6I/9g+wnp1XR9XeHo4f/o+c8+z/svWv5h/PG/dj1H/tl6znpI/wG+5eif50XrR/4/0x7lbtfWHf5TxH7Mfb7NRhu8olZENf8uT5T92PZPIW8X7T682rzd4lnfXm1ebvEs7682rzd4lnfXm1ebvEs7682cCffkKj/0t06JEArP+RShHR4v2n15tXgarCFNF1ibE7/5+j/5Eo0NQ71kF8hWki+N0nFn4jermljPNs27mUeI5uTXaZCzZcqM9AZ31VHNeqhmXSx23Z8dlZD8ZLgOnx2CihtqzmhwsRfw/eimox4+fV6eEJSdr6tkyKOTLOnvmStQTaPNLcVmD06I09Zy8EdqnfHY/1ThdMVchaQQV9Czk/i57RyGMsSMid4Y5ZOoPpStMmO8jZqSCSIW4/wUhOsJe0AZ6WDNd9x5zXViysoni6q6+atjpl5A4ZI62UyqCiLbYjoKnTB7xff5zuxt3G0QiDSsrujnM51e8UgSobndmKsG7c87GZH5co4+UWdNOodvlgpKvlr7hqlF1cRHNor9k7pt9pIiAEYeVwoSNvwFplyxFu65+r+nXIwUbLR8xF9LPeZ2oTVkeqIkflO/9CzgZ7RhB6LLduY5ORVBLovgTZu3/QSKkDFShUs2FVKnB9lmICdwUzmUNmRSe0Ga6FsxyfdT/gQrVJY2mpe+QnRjhSbGOZcUpMsoVwsFkw3byx7SAunIxFL1TxePhC6fUfxCcdqHww8KiOjXdEXZJcLI7GUTe0nviV7Z/qFPWXNlIDS/JIszeV7nM8HpdPmdLEDK+MYaGUEL/wZsFblu2q1mU0SC8gaf+iYsqqUR2ld74gez3le4VQSRtOB9B/YLTsZfqcOjzW3/m6EHXNHKBFFsVFTpZmn4qMgVjJwf9P8cnItR6Fq7fOAslEO4e30AHZzsht3FP8GTJU1rAoYDv8k41Bg3f/c3i4TQIPpSjW5RcJV8JNBN1eawaXo9ZbN31YZSVQw8Ops/2bVbq9/s1Q1s9PunHUU+2ut0DDvCY/6iQ+2YthZQQ1GyDGUCpfQ3eJaANqy/p8rAbnON/3LplJEi/afXm1ebqaKUavN3iWd9ebV5u8SzvrzavN3iWd9ebV5u8SzvrzavN3iWd9ebV5u8LgAA/vvbO+3sHnP/IdkpDnbh3TvfXYAB5WzWlLuMAAKgIwAABAsU14K4XnDjt+rrb+D2R0m2FHkZuG6rmV+6YFzI/Ls2EEst1oHCIDkSkVmJwdSN9EIhanLXNhfekK1Iqx1IvcdGU5Q6TPJ89BkFWsH4P6w+AEaw8K0furvg3C+MmCPSi39Pk9u+gxEye7RHQx3e7sJBZSlSVpmGjma6gAJaYWfuB78fJroBwKlaJ0mMNd4azeh/Wa3EotpAl4KB176JCBofnI39MAuoo85WpbZ9xjxDQYsob4zBW0Iz7pbo/HiIkhee6DRpkJIr6wM5Ky5hmYHwSSvj+7kH1iIOCj6tAbabEAQCNQeVRTORaxyDAr7/GtCLaDWcs/7oXWIweUfirzVQ7ThYMPR9h8IVWCJYs5dn/dfu56GMoeSVL3vuDT8eOkQLrvbk7h5UKTxL57kgt6N+KFtV/n39fyoZGVhshZgWcPcsGXFGajPTSTOUlsZ/vewlCzkR+ALaPvm4/+MGM7HT0B28wt+z1iFe68rT2C3wDvd2pkd4kwT1ZXXhgCaP8IHGlcRLWtK0/KEVZ1ugqmbOqoEiTwSRYuEmJ28JT53qpD9rvw4bWSCRVmp6vS1i+OAvuw7ChW+RkrYvU/D24QzjPCHYio+CkhfgXvVO46aZf7HZ/APLJHJJzVT1j4OLgCKZ/+Ak1e0EKDPh4rTJsaT3s8WtTy5XH+4Ar6xg6I3WtxR+uRF26LUw4qh9rDq9Tp7vxD5TzVPNkmLExWNGgR6eVQ2GooMqhjhD639FbbGvPBA3ybzgr7n5Ci9s6Wz++LCWHCwK1Z6DT19WpGRfIsCWCkYCRTKxUtMZSIT8ucXjOXLVCOftRCEKFT4b6uZ65Ag8l6ZwGA9vBgVH4yjz3rhaTMXAVN8ZtMN+Peal4ByXEaarmBZHcjINdGAHfq/Oon/WJPDl1La0sZ/z7NnwnicGzYjOu/+E9PY1uiQDBcmka2MieoJp36IbjfvQLURbGUMf1OX6zyYoVSC8wZfYlktDUkqM9WhYE1c4nOaHYtnrCuOiEPng8J2pRFr5NeR4lIsiH6Z4wQDzOZbpOftV8uUhurbz6TTohG7rdsM3Jkpsl7NlcnTwTwO/wnsAVgCAexRRUegE8kK7ZBn9DYsKHGisummSWwi9LxZqPCQbjrkXNuWFu1L7NvVwRU/SFadxboS/0qrszn85S44QntIQB/YirAkqb9zp8cndyKm1JSLqd+B0ytCADHpsJ5tIRIRlqWiK5Z3mRpnoZ41mgopa3mx70p3vl/4dB9U/HbNxwGMVZwzqOJ1gtobOcYv4N4GE/9/PioYppduKcYUonHSe4/3qQSrq/d8AMj5fRlAEPwNdWGsNJAtAr1IMC662V61JfHP8ENdFsTmbbcZ6QaXRBgGH3IZfWJHt4aQK/pLXOPF01GqrLm+KfuiYRg9SdihgVqnSnWiOz5QJcoQdFYrwvdJTA3IDamLNiUdka/z2iBOCQPtqrUEsiyPhVyMRGkBWUEXUS8aojpuiFrHqEeODgQNvYmA4SrXVoiOOIDOC57cNsP1/N9GN0jE8bIPAwth4nEv26clftxesbpcO5CbbOPhk+4teaVMLwqEMkQ9YcYDhAn1UQm/P3PukbCh6OquvhSA8q9YvD80J2p4qMfqHujubJy+pt0+o+mrxgsrcdHWv4sSkPBRdjMUrDPZLvblU1bnNHivzRvFcaJLGb6GIGfB6O/ZKp1jWBT6xmKAeZWVJ8oOesDrGaYK0ecPFQz1Kuy5kORX5BCtS2qmcP0EA33Ytva164kYbJLPQqbkznx1MLByN1pC1Ik6afVhXF4Md0RY17gT2UjnSVYPmF/zPGsMRWvrtiSQRKgwUoxqgtEcfS49Laz2JMIExQJFfV3WrYgNICYlRLAYmV9ubjRL8xrrPJOxg49X/PpZMbndQYIsESJm+IzeXnBMrbIsdeaxHjknEDGyHgeDWKezmv60AaqcaQzwPQfmnJvj9esFQK1oEZOAhVQaNG82I3acJJ+sM/lNmSPy/iKzYyMHrpWAtqMiD/VbxffYGWdktLKJ6DnzcchVzvgkPeJ/AEYySCs/AJwxoZMCEcYNAyPbSOeIhrSZ7oiwkixKsfLQ+uMIecj3dpwHtZBxKdw3H1agydVHgrcDu2Q1YIvCW0l+YCBgLgVvKCQiJZrmECgugPITyU+7JPijpmGi92sUJDZaFi8AXbjw0XOTvpGBzk6SOQWbZRs0FTUb1nAizq0zZPFxm8JaADC02BSHVQUCf4x6YZrJ5DIRFyxt9Jv0pVBaCRRKAOO3/X/UVpzCGUfhHdRWh93s5eWczTMyYN1GHakkA3lEvMckdz9VSeaYVHWgbgR/SsKqHaFBCMqYnbGNHYulIdrf/P7sy9/cTd8B+MlqRCwfCgJvjATta1MfBNGzKLERRjPb2v9em/Re5JPZCtt6Yyn8Vql2CdRL+7z8oYczxwxTA3/QfjLD78pZ6RpVkzBIHLkMQf93Il10CGh5IawlF+d1dkgebUndWPL12ydwc0PVR3b0c0e8OlgN2vakaDpQEKqKPiIukcoIpAlgclG5W5zjdiPbIbF0uWeULQsvMvI9c5T6P9sRjv+FZz51d19aWCdbLU/fCFJ53MbT0+42wMhRj23n/iD+LlPYOSgdtfo9WiiRfl2Mt//MJzOsz8sFwteelxQEjbCqNE0JmRx+KBefHBDl8C78WHTaIIzN5gmbehbTat1ShJBF5hxBrYRIh2z4mEop3uaCco1qsvq44TnxUsBnbY1n8ApxtHL+I927cLgdz4OLFqdmFjrJQrQi6drim9ZhKNKblZRY6Nm6Xxw8AG31CjKw5Usm7EwX3dSh1ZsqmnI5qEjffuCX44g/SOzQqJVR7Fdb8JeHLF12m738y3FF8Mzs16Oc/2LwNUHONGYkVtr+DKAaGl5Hj/eNrGgDwmZkDKFiMx6NDt1/fJ5DJujHYvfqnc306fF1hqAKGhRaX6mkQAFTvdvjKAE6D2qcOgzuA8OW9wA45u64gX+kFxY0AS6eqgGGChj5Z/p1Hbf5M9a/gKoaZ7B+Tcnn9Qe9zU00N7zH8lyWGJ2TkauTtQK1NiJyMXrdamQmMdapyOTWCQuByf81ArLtC/bleHgTwNM7WM3WcgxuY0K+tM/GlMB3o4c6KXobq+gT4beks4Z0bY30MI8bvJO+Oxwdaw3i25dbrmfZF24MJSjUBqBgpoCPEKbOE1B0kKa0DivLYosxKI+LGXKRTQfmdgrSTks4ug6urIa/bOM7wPLDJGRj0VqBthQyVN68yQX1AJQMB25WapBsPo/4lBu682ATODwomExed5azFmo1uS1oR8yjjVguvGk0aXC8rbqCnjsujXvMr17GDqUjHgKsOJdqUSlNjxu2YRrqyCQqeDKyGUDulKhhtJLO/4E34Re0lA8JnM1OWPAEB4UWa3wXhCn7tYRx/NdlCvHEXRgHuU1x9vbx8wJIw9x9YMaMqgUz6XhCa9CHfb8w6Zw2YtPEVQ9evaBn1Z9D6FOmIHGya7+VzN5NHL4+s6mM/hIagdT2DfDbr34+S/pRYO0OTY2kNLBk7H0A60bCCr+dUfc3D4aiAWmcyJy06sV91x0NyHNPAl1cPP9yMhUpsXuSRb8G+rZqQPmfsDeGv8OazizGLy6WH/kvfkOHUSaX/OhgunoJ9VeEOXibNKy82aKQbeO0Ha7UVsW4XgQgLdDlwVIalDeTNcwE6nmQ9txE1hmG+EiJvFI4qtHDI9DsVu9oD7B+cGL3mjjXVHfSwugESEFWLTK5H6wNsIpftM4OHEYWyaeUeZ7JJE1eDJQ9Zf+5vZtZh3myMRpA2qFbL0Z1XGffNF+rkMit+fjRpAjeYiJtbPXt1caN1R1abhCgztNuwREE8wupCjEm+NE+bKPiOqlykwKJ3P/3sgKhNseT14hUvrpWzccNtRuPDNOunCTAmbmLE7WagpIdGYD1/+3+5jJokGgYMTKPDtGcyL2UcCJbWhsr29Eb7GipPp2p1cQ+vehDwOEv3Zy1JrpGaND/5dRLHQTBHj6cgEpGQusdOTAdDDuz3bIG0bjvrZlGPLGuLFq+K3yADMtsjQQcuZzrWixor2wnfJtn15LHqkqakk4OIH4/MIXBGBWj9Ew3Y10HyG9ozFVfGMMh335PDmgh/DSu4AxehAoAqANVIJksDFYdub1wWo8yYh9Bj1+NUJynOVXk1qJZ8+B0QUVbJwcTOnM/fCsUt191Vky7IpF3Ar+L7eVM3PjlEJmI9gteoSeJw1gQCSMn/vaR0rn0ffVV6ozTkXntDBDGW52GLCy/g/BPvfHCJ+mj59BncgboXK3Fld7/4HRTyIAexwL2dRVvPHlg99XnjymrE4zUzJo+KycEBb83WPH/fOR5kEC3NqBEAmTeVYw8LJ+ocQMM2lE8kDjcyA12K+DfSgIhetLBZ/x7e4hD9A4gQgdFg8Ooa3bg/sPXFSwRjyiDQM/CZXMUaKtADyJ4CAx3/pYYzgOk2cLMZz5FMWFjbA/Q1LtDuQH7DkigDvOhb4Fmu7+H2b5J+4EKM8Yq+n06V/1tcpC4eeFk9xnMQluO1WqGwpuaoJCMP6qbU+yD7yNgJf9w5qrzxpGutPV9IhfsC4fqgGPBE3L7RVEgzeANeYJVlr36U8sZvtXG4PB4Hja+RPLUAO+eRxzRZy42p9LU83OprZBeO7230dieMH5Zoi0kR9fsCoTSMaa2nRhSiCb2tdJ4Z1lzYagv4odW8u2KOdSTmmMx6fuTxSqnpbix/IM1tyQ87iEvmLgKbKxxoq7jMWMGVKnT3/sYDe1Gh7sGkfO8X+SU8A6uPjQ5O60Qodizt/a/N+H663+1H+KNqX9JG3V8a4DIr7ksqFOrG4vcwrmMfGNKzZEqY3YdfhK186TnkB4qAAAAAAAAUL6grl/NBh0xCf2j3r4dOzXRh7I2aCCSe5vWpAob7xObCtSNwZb2vrH2mGahZz5v19m0OpjZMD/eZuwAQT9lzRvhNLg3peoff6JaWOXAZuxTigRvsWkffJzmaqRu1XRn2I5Q8LDKQ102v7qO1JV8AAAAAAAAAAAAAAAAAAAA=", ld = ({ freeGift: n, product: t, variantImage: r, getMediaImageUrl: a }) => n.mediaImageGID ? a(n.mediaImageGID) : n.giftType === "shipping" ? vo : r || (t == null ? void 0 : t.image), _o = (n, t, r) => {
    var a, s;
    const o = (s = (a = t.variantGIDs) == null ? void 0 : a.map(Qt)) != null ? s : null;
    return n.variants.filter((c) => (r || c.availableForSale) && (!o || o.includes(c.id)));
  };
  var ub = $('<img alt="" class="kaching-bundles__free-gift__image"/>'), db = $('<div class="kaching-bundles__free-gift__image"></div>'), gb = $('<span class="kaching-bundles__free-gift__text"><!></span>'), hb = $('<div class="kaching-bundles__free-gift__full-price"><!></div>'), pb = $('<div><div class="kaching-bundles__free-gift__main"><!> <div class="kaching-bundles__free-gift__content"><!> <!></div></div> <!></div>');
  function sd(n, t) {
    et(t, !0);
    const r = () => ze(v, "$config", s), a = () => ze(m, "$formatPrice", s), [s, o] = vt();
    let c = k(t, "dealBlock", 7), l = k(t, "freeGift", 7), i = k(t, "product", 7), u = k(t, "dealBarSelected", 7, !1), h = k(t, "collapsed", 7, !1), b = k(t, "sets", 7), g = k(t, "mainProductVariantId", 7), f = k(t, "onChange", 7);
    const v = kn(), w = It(), m = un(), z = Ln(), S = d(() => {
      if (i()) return { ...i(), variants: _o(i(), l(), r().preview) };
    });
    let B = Ae(void 0);
    const q = d(() => (function(G, V) {
      if (G !== void 0) return G;
      if (V != null && V.availableForSale && V.variants.length > 0) return V.variants[0].id;
    })(e(B), e(S))), Q = d(() => e(S) && e(q) ? e(S).variants.find((G) => G.id === e(q)) : void 0), W = d(() => {
      var G;
      return ld({ freeGift: l(), product: i(), variantImage: (G = e(Q)) == null ? void 0 : G.image, getMediaImageUrl: ze(z, "$getMediaImageUrl", s) });
    }), re = d(() => l().quantity * b()), M = d(() => (function(G, V) {
      if (!V) return 0;
      let F = V.price;
      return V.compareAtPrice && G.useProductCompareAtPrice && (F = Math.max(F, V.compareAtPrice)), F * e(re);
    })(c(), e(Q))), K = d(() => fo({ dealBlock: c(), imageSize: l().imageSize })), A = d(() => dn({ priceFormatter: a(), product: i(), totalFullPrice: e(M), totalDiscountedPrice: 0, quantity: e(re), unitQuantity: e(Q) ? mr([{ variant: e(Q), quantity: e(re) }]) : null })), U = d(() => l() ? e(A)(ze(w, "$translate", s)(l().text)) : ""), O = d(() => {
      var G;
      if ((G = i()) != null && G.url) return e(q) ? `${i().url}?variant=${e(q)}` : i().url;
    });
    function X(G) {
      se(B, G, !0);
    }
    let Z;
    br(() => {
      l().productGID, se(B, void 0), Z = void 0;
    }), br(() => {
      if (c().disableVariantOptionSync || !g() || !e(S) || g() === Z) return;
      const G = Z;
      Z = g(), e(S).variants.some((V) => V.id === g()) && (e(B) !== void 0 && e(B) !== G || se(B, g(), !0));
    }), Xe(() => {
      var G;
      e(Q) && ((G = i()) != null && G.availableForSale) && e(re) && Jt(() => {
        f()({ variant: e(Q), product: i(), fullPrice: e(M) });
      });
    });
    const I = d(() => !(!i() || i().availableForSale && _o(i(), l(), !1).length !== 0));
    var C = { get dealBlock() {
      return c();
    }, set dealBlock(G) {
      c(G), _();
    }, get freeGift() {
      return l();
    }, set freeGift(G) {
      l(G), _();
    }, get product() {
      return i();
    }, set product(G) {
      i(G), _();
    }, get dealBarSelected() {
      return u();
    }, set dealBarSelected(G = !1) {
      u(G), _();
    }, get collapsed() {
      return h();
    }, set collapsed(G = !1) {
      h(G), _();
    }, get sets() {
      return b();
    }, set sets(G) {
      b(G), _();
    }, get mainProductVariantId() {
      return g();
    }, set mainProductVariantId(G) {
      g(G), _();
    }, get onChange() {
      return f();
    }, set onChange(G) {
      f(G), _();
    } }, N = Me(), H = pe(N), J = (G) => {
      var V = pb();
      let F;
      var L = y(V), te = y(L);
      {
        let Y = d(() => u() ? e(O) : void 0);
        Yn(te, { get url() {
          return e(Y);
        }, class: "kaching-bundles__free-gift__link", children: (ie, me) => {
          var Ce = Me(), ve = pe(Ce), xe = (ce) => {
            var ne = ub();
            be(() => {
              we(ne, "src", e(W)), we(ne, "height", l().imageSize || 0);
            }), p(ce, ne);
          }, fe = (ce) => {
            var ne = db();
            let ge;
            be((Be) => ge = Tt(ne, "", ge, Be), [() => {
              var Be, Se;
              return { height: `${(Be = l().imageSize || 0) != null ? Be : ""}px`, width: `${(Se = (i() || l().mediaImageGID) && l().imageSize || 0) != null ? Se : ""}px` };
            }]), p(ce, ne);
          };
          E(ve, (ce) => {
            e(W) ? ce(xe) : ce(fe, !1);
          }), p(ie, Ce);
        }, $$slots: { default: !0 } });
      }
      var ue = j(te, 2), R = y(ue), P = (Y) => {
        var ie = Me();
        rt(pe(ie), () => e(U), (me) => {
          var Ce = gb();
          Te(y(Ce), () => e(U)), x(Ce), p(me, Ce);
        }), p(Y, ie);
      };
      E(R, (Y) => {
        e(U) && Y(P);
      });
      var D = j(R, 2), ae = (Y) => {
        Hn(Y, { get product() {
          return e(S);
        }, get selectedVariantId() {
          return e(q);
        }, onChange: X });
      };
      E(D, (Y) => {
        u() && e(S) && e(S).variants.length > 1 && e(q) && Y(ae);
      }), x(ue), x(L);
      var T = j(L, 2), ee = (Y) => {
        var ie = Me();
        rt(pe(ie), () => e(M), (me) => {
          var Ce = hb();
          Te(y(Ce), () => a()(e(M))), x(Ce), p(me, Ce);
        }), p(Y, ie);
      };
      E(T, (Y) => {
        l().showPrice && e(M) > 0 && Y(ee);
      }), x(V), be((Y) => {
        F = Et(V, 1, "kaching-bundles__free-gift", null, F, Y), we(V, "data-free-gift-id", l().id), Tt(V, e(K));
      }, [() => ({ "kaching-bundles__free-gift--out-of-stock": r().preview && e(I) })]), p(G, V);
    };
    E(H, (G) => {
      !h() && (!l().productGID || e(Q) || r().preview && e(I)) && G(J);
    }), p(n, N);
    var oe = tt(C);
    return o(), oe;
  }
  He(sd, { dealBlock: {}, freeGift: {}, product: {}, dealBarSelected: {}, collapsed: {}, sets: {}, mainProductVariantId: {}, onChange: {} }, [], [], !0);
  var bb = $('<img alt=""/>'), fb = $('<div class="kaching-bundles__free-gift-summary__images"></div>'), vb = $('<span class="kaching-bundles__free-gift__text"><!></span>'), _b = $('<div class="kaching-bundles__free-gift kaching-bundles__free-gift-summary"><!> <!></div>');
  function od(n, t) {
    et(t, !0);
    const [r, a] = vt();
    let s = k(t, "dealBlock", 7), o = k(t, "images", 7), c = k(t, "count", 7), l = k(t, "title", 7), i = k(t, "imageSize", 7);
    const u = It(), h = un(), b = d(() => dn({ priceFormatter: ze(h, "$formatPrice", r), product: void 0, totalFullPrice: 0, totalDiscountedPrice: 0, quantity: 1, unitQuantity: null, freeGiftsCount: c() })(ze(u, "$translate", r)(l()))), g = d(() => fo({ dealBlock: s(), imageSize: i() }));
    var f = { get dealBlock() {
      return s();
    }, set dealBlock(q) {
      s(q), _();
    }, get images() {
      return o();
    }, set images(q) {
      o(q), _();
    }, get count() {
      return c();
    }, set count(q) {
      c(q), _();
    }, get title() {
      return l();
    }, set title(q) {
      l(q), _();
    }, get imageSize() {
      return i();
    }, set imageSize(q) {
      i(q), _();
    } }, v = _b(), w = y(v), m = (q) => {
      var Q = fb();
      At(Q, 21, o, $r, (W, re) => {
        var M = bb();
        let K;
        be((A) => {
          we(M, "src", e(re).source), we(M, "height", i() || 0), K = Et(M, 1, "kaching-bundles__free-gift-summary__image", null, K, A);
        }, [() => ({ "kaching-bundles__free-gift-summary__image--no-border": !e(re).bordered })]), p(W, M);
      }), x(Q), p(q, Q);
    };
    E(w, (q) => {
      o().length && q(m);
    });
    var z = j(w, 2), S = (q) => {
      var Q = Me();
      rt(pe(Q), () => e(b), (W) => {
        var re = vb();
        Te(y(re), () => e(b)), x(re), p(W, re);
      }), p(q, Q);
    };
    E(z, (q) => {
      e(b) && q(S);
    }), x(v), be(() => Tt(v, e(g))), p(n, v);
    var B = tt(f);
    return a(), B;
  }
  He(od, { dealBlock: {}, images: {}, count: {}, title: {}, imageSize: {} }, [], [], !0);
  var kb = $('<div class="kaching-bundles__free-gift__divider"></div>'), mb = $("<!> <!>", 1), xb = $("<!> <!>", 1);
  function Si(n, t) {
    et(t, !0);
    const r = () => ze(v, "$config", a), [a, s] = vt();
    let o = k(t, "dealBlock", 7), c = k(t, "freeGifts", 7), l = k(t, "otherProducts", 7), i = k(t, "dealBarSelected", 7), u = k(t, "freeGiftsSummary", 7), h = k(t, "sellingPlan", 7), b = k(t, "sets", 7, 1), g = k(t, "mainProductVariantId", 7), f = k(t, "onChange", 7);
    const v = kn(), w = Ln();
    let m = Ae(lt({})), z = d(() => c().filter((U) => !U.applyOnlyForSubscriptions || h()));
    const S = d(() => e(z).flatMap((U) => {
      const O = U.productGID ? l().find((Z) => Z.id === Qt(U.productGID)) : void 0;
      if (!r().preview && U.productGID && !(O != null && O.availableForSale)) return [];
      const X = O && !r().preview ? kr(O) : O;
      return { freeGift: U, product: X };
    })), B = d(() => {
      var U, O;
      return (O = (U = u()) == null ? void 0 : U.enabled) != null && O;
    }), q = d(() => !i() && e(B) && e(S).length >= 2), Q = d(() => {
      var U, O;
      return (O = (U = u()) == null ? void 0 : U.showImages) != null && O ? e(S).flatMap(({ freeGift: X, product: Z }) => {
        const I = ((N, H, { preview: J, mainProductVariantId: oe, disableVariantOptionSync: G }) => {
          if (!N) return;
          const V = _o(N, H, J);
          if (V.length !== 0) {
            if (!G && oe) {
              const F = V.find((L) => L.id === oe);
              if (F) return F;
            }
            return V[0];
          }
        })(Z, X, { preview: r().preview, mainProductVariantId: g(), disableVariantOptionSync: o().disableVariantOptionSync }), C = ld({ freeGift: X, product: Z, variantImage: I == null ? void 0 : I.image, getMediaImageUrl: ze(w, "$getMediaImageUrl", a) });
        return C ? [{ source: C, bordered: X.giftType !== "shipping" }] : [];
      }) : [];
    });
    Xe(() => {
      (function(U, O) {
        if (!c().length) return;
        const X = U.filter((Z) => Z.id in O).map((Z) => ({ id: Z.id, variant: O[Z.id].variant, product: O[Z.id].product, quantity: Z.quantity * b(), fullPrice: O[Z.id].fullPrice, showPrice: Z.showPrice, includeInCompareAt: Z.includeInCompareAt === !0, applyOnlyForSubscriptions: Z.applyOnlyForSubscriptions }));
        f()(X);
      })(e(z), e(m));
    });
    var W = { get dealBlock() {
      return o();
    }, set dealBlock(U) {
      o(U), _();
    }, get freeGifts() {
      return c();
    }, set freeGifts(U) {
      c(U), _();
    }, get otherProducts() {
      return l();
    }, set otherProducts(U) {
      l(U), _();
    }, get dealBarSelected() {
      return i();
    }, set dealBarSelected(U) {
      i(U), _();
    }, get freeGiftsSummary() {
      return u();
    }, set freeGiftsSummary(U) {
      u(U), _();
    }, get sellingPlan() {
      return h();
    }, set sellingPlan(U) {
      h(U), _();
    }, get sets() {
      return b();
    }, set sets(U = 1) {
      b(U), _();
    }, get mainProductVariantId() {
      return g();
    }, set mainProductVariantId(U) {
      g(U), _();
    }, get onChange() {
      return f();
    }, set onChange(U) {
      f(U), _();
    } }, re = xb(), M = pe(re), K = (U) => {
      {
        let O = d(() => {
          var Z, I;
          return (I = (Z = u()) == null ? void 0 : Z.title) != null ? I : "";
        }), X = d(() => {
          var Z, I;
          return (I = (Z = e(S)[0]) == null ? void 0 : Z.freeGift.imageSize) != null ? I : 30;
        });
        od(U, { get dealBlock() {
          return o();
        }, get images() {
          return e(Q);
        }, get count() {
          return e(S).length;
        }, get title() {
          return e(O);
        }, get imageSize() {
          return e(X);
        } });
      }
    };
    E(M, (U) => {
      e(q) && U(K);
    }), At(j(M, 2), 19, () => e(S), ({ freeGift: U, product: O }) => U.id, (U, O, X) => {
      let Z = () => e(O).freeGift;
      var I = mb(), C = pe(I);
      sd(C, { get dealBlock() {
        return o();
      }, get freeGift() {
        return Z();
      }, get product() {
        return e(O).product;
      }, get dealBarSelected() {
        return i();
      }, get collapsed() {
        return e(q);
      }, get sets() {
        return b();
      }, get mainProductVariantId() {
        return g();
      }, onChange: (J) => (function(oe, G) {
        G.variant ? e(m)[oe] = G : delete e(m)[oe];
      })(Z().id, J) });
      var N = j(C, 2), H = (J) => {
        p(J, kb());
      };
      E(N, (J) => {
        !e(q) && e(X) < e(S).length - 1 && J(H);
      }), p(U, I);
    }), p(n, re);
    var A = tt(W);
    return s(), A;
  }
  function cd(n, t = "body") {
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
  He(Si, { dealBlock: {}, freeGifts: {}, otherProducts: {}, dealBarSelected: {}, freeGiftsSummary: {}, sellingPlan: {}, sets: {}, mainProductVariantId: {}, onChange: {} }, [], [], !0);
  var yb = $('<div hidden=""><!></div>');
  function dl(n, t) {
    et(t, !1);
    let r = k(t, "target", 12, "body");
    var a = { get target() {
      return r();
    }, set target(o) {
      r(o), _();
    } };
    (function(o = !1) {
      const c = cn, l = c.l.u;
      if (!l) return;
      let i = () => jc(c.s);
      if (o) {
        let u = 0, h = {};
        const b = Ui(() => {
          let g = !1;
          const f = c.s;
          for (const v in f) f[v] !== h[v] && (h[v] = f[v], g = !0);
          return g && u++, u;
        });
        i = () => e(b);
      }
      l.b.length && br(() => {
        lu(c, i), Dl(l.b);
      }), Xe(() => {
        const u = Jt(() => l.m.map(yg));
        return () => {
          for (const h of u) typeof h == "function" && h();
        };
      }), l.a.length && Xe(() => {
        lu(c, i), Dl(l.a);
      });
    })();
    var s = yb();
    return Uc(y(s), t, "default", {}), x(s), Qs(s, (o, c) => cd == null ? void 0 : cd(o, c), r), p(n, s), tt(a);
  }
  He(dl, { target: {} }, ["default"], [], !0);
  const ud = [{ fonts: [20, 16, 12, 10], gaps: [16, 12, 8], image: 36 }, { fonts: [24, 20, 16, 12], gaps: [20, 16, 12], image: 48 }, { fonts: [28, 24, 20, 16], gaps: [24, 20, 16], image: 60 }, { fonts: [32, 28, 24, 20], gaps: [28, 24, 20], image: 80 }], dd = [0, 12, 16, 20, 24, 28], wb = /\p{L}\p{M}*/gu, Pb = /\p{N}/gu, gd = ({ lettersAllowed: n, numbersAllowed: t }) => n !== t, Sb = ({ previousValue: n, nextValue: t, caretPosition: r }, a, s) => {
    const o = t.slice(r), c = t.slice(0, r), l = c.slice(0, Bb(n, c)), i = c.slice(l.length), u = ((g, f) => gd(f) ? f.lettersAllowed ? g.replace(Pb, "") : g.replace(wb, "") : g)(i, a), h = s === void 0 ? u.length : Math.max(0, s - l.length - o.length), b = u.slice(0, h);
    return { value: l + b + o, caretPosition: l.length + b.length, rejected: u.length < i.length };
  }, Bb = (n, t) => {
    const r = Math.min(n.length, t.length);
    let a = 0;
    for (; a < r && n[a] === t[a]; ) a += 1;
    return a;
  };
  var Cb = (n, t) => {
    n.target === n.currentTarget && t()();
  }, Ib = $('<img alt="Close"/>'), Mb = $('<span class="kaching-bundles__personalisation-modal__item-variant"> </span>'), zb = (n, t, r) => t(r(), n.currentTarget), $b = $('<img alt="Clear"/>'), Db = $('<span class="kaching-bundles__personalisation-modal__input-error"> </span>'), Ab = $("<span> </span>"), Vb = $('<div class="kaching-bundles__personalisation-modal__item"><div class="kaching-bundles__personalisation-modal__item-info"><div class="kaching-bundles__personalisation-modal__item-image-wrapper"><img class="kaching-bundles__personalisation-modal__item-image" alt=""/></div> <div class="kaching-bundles__personalisation-modal__item-details"><span class="kaching-bundles__personalisation-modal__item-title"> </span> <!></div></div> <div class="kaching-bundles__personalisation-modal__input-wrapper"><div class="kaching-bundles__personalisation-modal__input-container"><input type="text"/> <!></div> <!> <!></div></div>'), Tb = $('<div role="none"><div class="kaching-bundles__personalisation-modal-overlay__content"><div class="kaching-bundles__personalisation-modal"><div class="kaching-bundles__personalisation-modal__header"><h2 class="kaching-bundles__personalisation-modal__heading"> </h2> <!></div> <div class="kaching-bundles__personalisation-modal__items"></div> <div class="kaching-bundles__personalisation-modal__actions"><!> <!></div></div></div></div>');
  function ko(n, t) {
    et(t, !0);
    const r = () => ze(g, "$translate", a), [a, s] = vt(), o = k(t, "product", 7), c = k(t, "selectedVariants", 7), l = k(t, "personalisationValues", 7), i = k(t, "addPersonalisationModal", 7), u = k(t, "inline", 7, !1), h = k(t, "onConfirm", 7), b = k(t, "onClose", 7), g = It(), f = d(() => ((D) => {
      var ae, T;
      return { lettersAllowed: (ae = D == null ? void 0 : D.lettersAllowed) == null || ae, numbersAllowed: (T = D == null ? void 0 : D.numbersAllowed) == null || T };
    })(i())), v = d(() => !e(f).lettersAllowed && e(f).numbersAllowed), w = d(() => gd(e(f))), m = d(() => e(v) ? "system.numbers_only" : "system.letters_only"), z = d(() => {
      var D, ae;
      return (ae = (D = i()) == null ? void 0 : D.characterLimitEnabled) != null && ae;
    }), S = d(() => {
      var D, ae;
      return e(z) ? (ae = (D = i()) == null ? void 0 : D.characterLimit) != null ? ae : 30 : void 0;
    }), B = Math.max(...c().map(({ index: D }) => D), -1);
    let q = Ae(lt(Array.from({ length: B + 1 }, (D, ae) => l()[ae] || "")));
    const Q = new Set(l().map((D, ae) => D && D.trim() !== "" ? ae : -1).filter((D) => D !== -1)), W = d(() => i() ? (({ size: D, roundness: ae, imageSize: T, textSize: ee, overlayColor: Y, primaryTextColor: ie, secondaryTextColor: me, buttonColor: Ce, buttonTextColor: ve, errorColor: xe }) => {
      const fe = Math.min(Math.max(0, D), ud.length - 1), ce = Math.min(Math.max(0, ae), dd.length - 1), ne = ud[fe], ge = dd[ce];
      return bn({ "kaching-product-personalisation-font-0": ne.fonts[0] + "px", "kaching-product-personalisation-font-1": ne.fonts[1] + "px", "kaching-product-personalisation-font-2": ne.fonts[2] + "px", "kaching-product-personalisation-font-3": ne.fonts[3] + "px", "kaching-product-personalisation-gap-0": ne.gaps[0] + "px", "kaching-product-personalisation-gap-1": ne.gaps[1] + "px", "kaching-product-personalisation-gap-2": ne.gaps[2] + "px", "kaching-product-personalisation-image-size": (T != null ? T : ne.image) + "px", "kaching-product-personalisation-radius": ge + "px", "kaching-product-personalisation-text-size": ee + "px", "kaching-product-personalisation-overlay-color": Re(Y), "kaching-product-personalisation-primary-text-color": Re(ie), "kaching-product-personalisation-secondary-text-color": Re(me), "kaching-product-personalisation-button-color": Re(Ce), "kaching-product-personalisation-button-text-color": Re(ve), "kaching-product-personalisation-error-color": Re(xe) });
    })(i()) : "");
    let re = !1, M = Ae(lt([]));
    function K(D, ae) {
      var T;
      if (re) return;
      const ee = Sb({ previousValue: e(q)[D] || "", nextValue: ae.value, caretPosition: (T = ae.selectionStart) != null ? T : ae.value.length }, e(f), e(S));
      ae.value !== ee.value && (ae.value = ee.value, ae.setSelectionRange(ee.caretPosition, ee.caretPosition)), A(D, ee.value), U(D, ee.rejected);
    }
    function A(D, ae) {
      const T = [...e(q)];
      T[D] = ae, se(q, T, !0);
    }
    function U(D, ae) {
      if (!!e(M)[D] === ae) return;
      const T = [...e(M)];
      T[D] = ae, se(M, T, !0);
    }
    function O(D) {
      return Q.has(D) && !!e(q)[D] && e(q)[D].trim() !== "";
    }
    const X = d(() => e(q).some((D) => D && D.trim() !== "")), Z = d(() => Q.size > 0), I = d(() => !e(X) && !e(Z));
    var C = { get product() {
      return o();
    }, set product(D) {
      o(D), _();
    }, get selectedVariants() {
      return c();
    }, set selectedVariants(D) {
      c(D), _();
    }, get personalisationValues() {
      return l();
    }, set personalisationValues(D) {
      l(D), _();
    }, get addPersonalisationModal() {
      return i();
    }, set addPersonalisationModal(D) {
      i(D), _();
    }, get inline() {
      return u();
    }, set inline(D = !1) {
      u(D), _();
    }, get onConfirm() {
      return h();
    }, set onConfirm(D) {
      h(D), _();
    }, get onClose() {
      return b();
    }, set onClose(D) {
      b(D), _();
    } }, N = Tb();
    let H;
    N.__click = [Cb, b];
    var J = y(N), oe = y(J), G = y(oe), V = y(G), F = y(V, !0);
    x(V), Ut(j(V, 2), { element: "span", class: "kaching-bundles__personalisation-modal__close", get onclick() {
      return b();
    }, children: (D, ae) => {
      var T = Ib();
      be(() => we(T, "src", ho)), p(D, T);
    }, $$slots: { default: !0 } }), x(G);
    var L = j(G, 2);
    At(L, 21, c, ({ variant: D, index: ae }) => ae, (D, ae) => {
      let T = () => e(ae).variant, ee = () => e(ae).index;
      var Y = Vb(), ie = y(Y), me = y(ie), Ce = y(me);
      x(me);
      var ve = j(me, 2), xe = y(ve), fe = y(xe);
      x(xe);
      var ce = j(xe, 2), ne = ($e) => {
        var Pe = Mb(), Ge = y(Pe, !0);
        x(Pe), be((bt) => ht(Ge, bt), [() => T().options.join(", ")]), p($e, Pe);
      };
      E(ce, ($e) => {
        o().variants.length > 1 && $e(ne);
      }), x(ve), x(ie);
      var ge = j(ie, 2), Be = y(ge), Se = y(Be);
      let Le;
      ra(Se), Se.__input = [zb, K, ee];
      var Ve = j(Se, 2), le = ($e) => {
        Ut($e, { element: "span", class: "kaching-bundles__personalisation-modal__input-clear", onclick: () => (function(Pe) {
          A(Pe, ""), U(Pe, !1);
        })(ee()), children: (Pe, Ge) => {
          var bt = $b();
          be(() => we(bt, "src", "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.6667%203.99992V3.46659C10.6667%202.71985%2010.6667%202.34648%2010.5213%202.06126C10.3935%201.81038%2010.1895%201.60641%209.93865%201.47858C9.65344%201.33325%209.28007%201.33325%208.53333%201.33325H7.46667C6.71993%201.33325%206.34656%201.33325%206.06135%201.47858C5.81046%201.60641%205.60649%201.81038%205.47866%202.06126C5.33333%202.34648%205.33333%202.71985%205.33333%203.46659V3.99992M2%203.99992H14M12.6667%203.99992V11.4666C12.6667%2012.5867%2012.6667%2013.1467%2012.4487%2013.5746C12.2569%2013.9509%2011.951%2014.2569%2011.5746%2014.4486C11.1468%2014.6666%2010.5868%2014.6666%209.46667%2014.6666H6.53333C5.41323%2014.6666%204.85318%2014.6666%204.42535%2014.4486C4.04903%2014.2569%203.74307%2013.9509%203.55132%2013.5746C3.33333%2013.1467%203.33333%2012.5867%203.33333%2011.4666V3.99992'%20stroke='%23F04438'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), p(Pe, bt);
        }, $$slots: { default: !0 } });
      };
      E(Ve, ($e) => {
        O(ee()) && $e(le);
      }), x(Be);
      var De = j(Be, 2), qe = ($e) => {
        var Pe = Db(), Ge = y(Pe, !0);
        x(Pe), be((bt) => ht(Ge, bt), [() => r()(e(m))]), p($e, Pe);
      };
      E(De, ($e) => {
        e(w) && e(M)[ee()] && $e(qe);
      });
      var _e = j(De, 2), Ie = ($e) => {
        var Pe = Ab();
        let Ge;
        var bt = y(Pe);
        x(Pe), be((ot) => {
          var nt, it;
          Ge = Et(Pe, 1, "kaching-bundles__personalisation-modal__input-counter", null, Ge, ot), ht(bt, `${(nt = (e(q)[ee()] || "").length) != null ? nt : ""}/${(it = e(S)) != null ? it : ""}`);
        }, [() => ({ "kaching-bundles__personalisation-modal__input-counter--error": e(S) !== void 0 && (e(q)[ee()] || "").length >= e(S) })]), p($e, Pe);
      };
      E(_e, ($e) => {
        e(z) && $e(Ie);
      }), x(ge), x(Y), be(($e, Pe) => {
        var Ge;
        we(Ce, "src", T().image || o().image), ht(fe, `${(Ge = o().title) != null ? Ge : ""} #${ee() + 1}`), Le = Et(Se, 1, "kaching-bundles__personalisation-modal__input", null, Le, $e), we(Se, "placeholder", Pe), Ra(Se, e(q)[ee()] || ""), we(Se, "maxlength", e(w) ? void 0 : e(S)), we(Se, "inputmode", e(v) ? "numeric" : void 0);
      }, [() => ({ "kaching-bundles__personalisation-modal__input--with-clear": O(ee()), "kaching-bundles__personalisation-modal__input--error": e(S) !== void 0 && (e(q)[ee()] || "").length >= e(S) }), () => {
        var $e;
        return ($e = i()) != null && $e.placeholderText ? r()(i().placeholderText) : "";
      }]), Rl("compositionstart", Se, () => re = !0), Rl("compositionend", Se, ($e) => (function(Pe, Ge) {
        re = !1, K(Pe, Ge);
      })(ee(), $e.currentTarget)), p(D, Y);
    }), x(L);
    var te = j(L, 2), ue = y(te);
    Ut(ue, { element: "button", class: "kaching-bundles__personalisation-modal__button kaching-bundles__personalisation-modal__button--cancel", get onclick() {
      return b();
    }, children: (D, ae) => {
      pa();
      var T = Un();
      be((ee) => ht(T, ee), [() => r()("system.cancel")]), p(D, T);
    }, $$slots: { default: !0 } });
    var R = j(ue, 2);
    {
      let D = d(() => ["kaching-bundles__personalisation-modal__button", "kaching-bundles__personalisation-modal__button--confirm", e(I) && "kaching-bundles__personalisation-modal__button--disabled"]);
      Ut(R, { element: "button", get class() {
        return e(D);
      }, get disabled() {
        return e(I);
      }, onclick: () => h()(e(q)), children: (ae, T) => {
        pa();
        var ee = Un();
        be((Y) => ht(ee, Y), [() => r()("system.confirm")]), p(ae, ee);
      }, $$slots: { default: !0 } });
    }
    x(te), x(oe), x(J), x(N), be((D, ae) => {
      H = Et(N, 1, "kaching-bundles__personalisation-modal-overlay", null, H, D), Tt(N, e(W)), ht(F, ae);
    }, [() => ({ "kaching-bundles__personalisation-modal-overlay--inline": u() }), () => {
      var D;
      return (D = i()) != null && D.heading ? r()(i().heading) : "";
    }]), p(n, N);
    var P = tt(C);
    return s(), P;
  }
  On(["click", "input"]), He(ko, { product: {}, selectedVariants: {}, personalisationValues: {}, addPersonalisationModal: {}, inline: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var qb = (n, t) => {
    se(t, !0);
  }, Gb = (n, t) => {
    n.key !== "Enter" && n.key !== " " || (n.preventDefault(), se(t, !0));
  }, Fb = $('<div class="kaching-bundles__product-personalisation__image-wrapper"><img alt="" class="kaching-bundles__product-personalisation__image"/></div>'), Ob = $('<div class="kaching-bundles__product-personalisation__image-wrapper"><img alt="" class="kaching-bundles__product-personalisation__image kaching-bundles__product-personalisation__image--default"/></div>'), Lb = $('<span class="kaching-bundles__product-personalisation__title"><!> <span class="kaching-bundles__product-personalisation__subtitle"> </span></span>'), jb = $('<span class="kaching-bundles__product-personalisation__title"><!></span>'), Eb = $('<span class="kaching-bundles__product-personalisation__subtitle"><!></span>'), Rb = $("<!> <!>", 1), Nb = $('<span class="kaching-bundles__product-personalisation__unit-label"> </span>'), Qb = $('<span class="kaching-bundles__product-personalisation__price"><!> <!></span>'), Wb = $('<span class="kaching-bundles__product-personalisation__compare-at-price"><!></span>'), Ub = $('<div class="kaching-bundles"><!></div>'), Hb = $('<div role="button" tabindex="0"><div class="kaching-bundles__product-personalisation__main"><!> <div class="kaching-bundles__product-personalisation__content"><!></div></div> <div class="kaching-bundles__product-personalisation__pricing"><!> <!></div></div> <!>', 1);
  function Ja(n, t) {
    et(t, !0);
    const r = () => ze(v, "$config", o), a = () => ze(m, "$formatPrice", o), s = () => ze(w, "$translate", o), [o, c] = vt();
    let l = k(t, "productPersonalisation", 7), i = k(t, "product", 7), u = k(t, "selectedVariantIds", 7), h = k(t, "quantity", 7), b = k(t, "addPersonalisationModal", 7), g = k(t, "onPersonalisationsChange", 7), f = k(t, "initialValues", 23, () => []);
    const v = kn(), w = It(), m = un(), z = Ln();
    let S = Ae(!1), B = Ae(lt([]));
    Xe(() => {
      l().id, f(), se(B, f().map((ce) => ce || ""), !0);
    });
    const q = d(() => {
      if (l().mediaImageGID) return ze(z, "$getMediaImageUrl", o)(l().mediaImageGID);
    }), Q = d(() => !e(q) && l().imageSize > 0), W = d(() => Math.round(100 * parseFloat(l().pricePerItem || "0") * r().currencyRate)), re = d(() => Math.round(100 * parseFloat(l().compareAtPrice || "0") * r().currencyRate)), M = d(() => e(W)), K = d(() => e(re)), A = d(() => e(K) > 0 && e(K) > e(M)), U = d(() => ((ce) => bn({ "kaching-product-personalisation-image-height": ce.imageSize + "px" }))(l())), O = d(() => dn({ priceFormatter: a(), product: void 0, totalFullPrice: e(K) || e(M), totalDiscountedPrice: e(M), quantity: h(), unitQuantity: null })), X = d(() => e(O)(s()(l().title))), Z = d(() => l().subtitle ? e(O)(s()(l().subtitle)) : ""), I = d(() => u().map((ce, ne) => ({ variant: i().variants.find((ge) => ge.id === ce) || i().variants[0], index: ne }))), C = d(() => e(B).some((ce) => (ce || "").trim() !== "")), N = d(() => e(B).map((ce, ne) => ({ value: ce, index: ne })).filter(({ value: ce }) => (ce || "").trim() !== "")), H = d(() => h() === 1);
    function J(ce) {
      var ne;
      const ge = ce.map((Ve) => Ve || "");
      if (se(B, ge, !0), se(S, !1), !l().variantGID) return;
      const Be = Qt(l().variantGID);
      if (!Be) return;
      const Se = s()(l().valueLabel || "Value"), Le = ge.map((Ve, le) => ({ id: l().id, variantId: Be, text: Ve, valueLabel: Se, productIndex: le })).filter((Ve) => Ve.text.trim() !== "");
      (ne = g()) == null || ne(Le);
    }
    var oe = { get productPersonalisation() {
      return l();
    }, set productPersonalisation(ce) {
      l(ce), _();
    }, get product() {
      return i();
    }, set product(ce) {
      i(ce), _();
    }, get selectedVariantIds() {
      return u();
    }, set selectedVariantIds(ce) {
      u(ce), _();
    }, get quantity() {
      return h();
    }, set quantity(ce) {
      h(ce), _();
    }, get addPersonalisationModal() {
      return b();
    }, set addPersonalisationModal(ce) {
      b(ce), _();
    }, get onPersonalisationsChange() {
      return g();
    }, set onPersonalisationsChange(ce) {
      g(ce), _();
    }, get initialValues() {
      return f();
    }, set initialValues(ce = []) {
      f(ce), _();
    } }, G = Hb(), V = pe(G);
    let F;
    V.__click = [qb, S], V.__keydown = [Gb, S];
    var L = y(V), te = y(L), ue = (ce) => {
      var ne = Fb(), ge = y(ne);
      x(ne), be(() => {
        we(ge, "src", e(q)), we(ge, "height", l().imageSize || 0);
      }), p(ce, ne);
    }, R = (ce) => {
      var ne = Me(), ge = pe(ne), Be = (Se) => {
        var Le = Ob(), Ve = y(Le);
        x(Le), be(() => {
          we(Ve, "src", "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.0476%206.95032C24.6473%206.55003%2024.1722%206.23251%2023.6492%206.01588C23.1262%205.79924%2022.5657%205.68774%2021.9996%205.68774C21.4335%205.68774%2020.873%205.79924%2020.35%206.01588C19.8271%206.23251%2019.3519%206.55003%2018.9516%206.95032L17.9932%207.90872L17.9788%207.89432L16.2828%209.59032L16.2972%209.60632L6.88921%2019.0143C6.06394%2019.8391%205.60007%2020.9579%205.59961%2022.1247V25.1999C5.59961%2025.5182%205.72604%2025.8234%205.95108%2026.0484C6.17612%2026.2735%206.48135%2026.3999%206.79961%2026.3999H9.87481C11.0416%2026.3995%2012.1604%2025.9356%2012.9852%2025.1103L25.0492%2013.0463C25.4495%2012.6461%2025.767%2012.1709%2025.9837%2011.6479C26.2003%2011.1249%2026.3118%2010.5644%2026.3118%209.99832C26.3118%209.43225%2026.2003%208.87172%2025.9837%208.34874C25.767%207.82576%2025.4495%207.35058%2025.0492%206.95032H25.0476ZM17.9932%2011.3023L8.58521%2020.7103C8.3995%2020.8961%208.25221%2021.1166%208.15173%2021.3593C8.05125%2021.602%207.99956%2021.8621%207.99961%2022.1247V23.9999H9.87481C10.4044%2023.9999%2010.9148%2023.7887%2011.2876%2023.4143L20.6956%2014.0063L17.9932%2011.3023ZM22.3932%2012.3087L23.3516%2011.3503C23.6865%2010.9871%2023.8678%2010.5084%2023.8578%2010.0144C23.8477%209.52049%2023.647%209.04957%2023.2977%208.70023C22.9484%208.35089%2022.4774%208.15019%2021.9835%208.14015C21.4896%208.1301%2021.0109%208.31147%2020.6476%208.64632L19.6908%209.60632L22.3932%2012.3087Z'%20fill='black'/%3e%3c/svg%3e"), we(Ve, "height", l().imageSize || 0);
        }), p(Se, Le);
      };
      E(ge, (Se) => {
        e(Q) && Se(Be);
      }, !0), p(ce, ne);
    };
    E(te, (ce) => {
      e(q) ? ce(ue) : ce(R, !1);
    });
    var P = j(te, 2), D = y(P), ae = (ce) => {
      var ne = Me();
      At(pe(ne), 17, () => e(N), ({ value: ge, index: Be }) => Be, (ge, Be) => {
        var Se = Lb(), Le = y(Se), Ve = (qe) => {
          var _e = Un();
          be(() => ht(_e, `#${e(Be).index + 1}`)), p(qe, _e);
        };
        E(Le, (qe) => {
          e(H) || qe(Ve);
        });
        var le = j(Le, 2), De = y(le, !0);
        x(le), x(Se), be(() => ht(De, e(Be).value)), p(ge, Se);
      }), p(ce, ne);
    }, T = (ce) => {
      var ne = Rb(), ge = pe(ne), Be = (Ve) => {
        var le = jb();
        Te(y(le), () => e(X)), x(le), p(Ve, le);
      };
      E(ge, (Ve) => {
        e(X) && Ve(Be);
      });
      var Se = j(ge, 2), Le = (Ve) => {
        var le = Eb();
        Te(y(le), () => e(Z)), x(le), p(Ve, le);
      };
      E(Se, (Ve) => {
        e(Z) && Ve(Le);
      }), p(ce, ne);
    };
    E(D, (ce) => {
      e(C) ? ce(ae) : ce(T, !1);
    }), x(P), x(L);
    var ee = j(L, 2), Y = y(ee), ie = (ce) => {
      var ne = Qb(), ge = y(ne);
      Te(ge, () => a()(e(M)));
      var Be = j(ge, 2), Se = (Le) => {
        var Ve = Nb(), le = y(Ve, !0);
        x(Ve), be(() => ht(le, l().pricePerItemUnitLabel)), p(Le, Ve);
      };
      E(Be, (Le) => {
        l().pricePerItemUnitLabel && Le(Se);
      }), x(ne), p(ce, ne);
    };
    E(Y, (ce) => {
      e(M) > 0 && ce(ie);
    });
    var me = j(Y, 2), Ce = (ce) => {
      var ne = Wb();
      Te(y(ne), () => a()(e(K))), x(ne), p(ce, ne);
    };
    E(me, (ce) => {
      e(A) && ce(Ce);
    }), x(ee), x(V);
    var ve = j(V, 2), xe = (ce) => {
      dl(ce, { target: "body", children: (ne, ge) => {
        var Be = Ub();
        ko(y(Be), { get product() {
          return i();
        }, get selectedVariants() {
          return e(I);
        }, get personalisationValues() {
          return e(B);
        }, get addPersonalisationModal() {
          return b();
        }, onConfirm: J, onClose: () => {
          se(S, !1);
        } }), x(Be), p(ne, Be);
      }, $$slots: { default: !0 } });
    };
    E(ve, (ce) => {
      e(S) && ce(xe);
    }), be((ce) => {
      F = Et(V, 1, "kaching-bundles__product-personalisation", null, F, ce), we(V, "data-product-personalisation-id", l().id), Tt(V, e(U));
    }, [() => ({ "kaching-bundles__product-personalisation--filled": e(C) })]), p(n, G);
    var fe = tt(oe);
    return c(), fe;
  }
  function Zb(n, t, r) {
    const a = Number(n.target.value), s = t().find((o) => o.id === a);
    r()(s);
  }
  On(["click", "keydown"]), He(Ja, { productPersonalisation: {}, product: {}, selectedVariantIds: {}, quantity: {}, addPersonalisationModal: {}, onPersonalisationsChange: {}, initialValues: {} }, [], [], !0);
  var Jb = (n) => n.stopPropagation(), Yb = $("<option> </option>"), Kb = $('<select class="kaching-bundles__bar-variant-select kaching-bundles__selling-plan-select"></select>');
  function Pa(n, t) {
    et(t, !0);
    const [r, a] = vt(), s = k(t, "sellingPlans", 7), o = k(t, "selectedSellingPlan", 7), c = k(t, "onChange", 7), l = It();
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
    } }, h = Kb();
    h.__change = [Zb, s, c], h.__click = [Jb], At(h, 21, s, (g) => g.id, (g, f) => {
      var v = Yb(), w = y(v, !0);
      x(v);
      var m = {};
      be(() => {
        var z;
        ht(w, e(f).name), m !== (m = e(f).id) && (v.value = (z = v.__value = e(f).id) != null ? z : "");
      }), p(g, v);
    }), x(h), Hs(h), be((g) => {
      var f;
      we(h, "aria-label", g), i !== (i = o().id) && (h.value = (f = h.__value = o().id) != null ? f : "", Xi(h, o().id));
    }, [() => ze(l, "$translate", r)("system.subscription_plan")]), p(n, h);
    var b = tt(u);
    return a(), b;
  }
  On(["change", "click"]), He(Pa, { sellingPlans: {}, selectedSellingPlan: {}, onChange: {} }, [], [], !0);
  var Xb = Tn('<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.334 1 5 8.333 1.667 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function cs(n) {
    p(n, Xb());
  }
  He(cs, {}, [], [], !0);
  var ef = $('<img alt="" class="kaching-bundles__upsell__image"/>'), tf = $('<div class="kaching-bundles__upsell__price"><!></div>'), nf = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), rf = $('<div class="kaching-bundles__upsell__price"><!></div>'), af = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), lf = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--secondary"><!> <!></div>'), sf = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--main"><!> <!></div> <!>', 1), of = $('<div class="kaching-bundles__upsell__price"><!></div>'), cf = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), uf = $('<div class="kaching-bundles__upsell__unit-price"><!> </div>'), df = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--main"><!> <!></div> <div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--secondary"><!></div>', 1), gf = $('<div class="kaching-bundles__upsell__price"><!></div>'), hf = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), pf = $("<!> <!>", 1), bf = $('<div><!> <div class="kaching-bundles__upsell__main"><!> <!> <div class="kaching-bundles__upsell__content"><!> <!> <!></div></div> <div class="kaching-bundles__upsell__pricing"><!></div></div>');
  function hd(n, t) {
    et(t, !0);
    const r = () => ze(S, "$config", o), a = () => ze(m, "$formatPrice", o), s = () => ze(w, "$translate", o), [o, c] = vt();
    let l = k(t, "dealBlock", 7), i = k(t, "dealBarId", 7), u = k(t, "upsell", 7), h = k(t, "product", 7), b = k(t, "dealBarSelected", 7, !1), g = k(t, "dealSellingPlan", 7), f = k(t, "sets", 7), v = k(t, "onChange", 7);
    const w = It(), m = un(), z = Ln(), S = kn();
    let B = Ae(lt(u().preselected)), q = Ae(void 0), Q = Ae(void 0);
    const W = d(() => u().variantGIDs ? u().variantGIDs.map(Qt) : h().variants.map((ne) => ne.id)), re = d(() => ({ ...h(), variants: h().variants.filter((ne) => (r().preview || ne.availableForSale) && e(W).includes(ne.id)) })), M = d(() => (function(ne, ge) {
      if (ne !== void 0) return ne;
      if (ge != null && ge.availableForSale && ge.variants.length > 0) return ge.variants[0].id;
    })(e(q), e(re))), K = d(() => e(re).variants.find((ne) => ne.id === e(M))), A = d(() => ze(z, "$getMediaImageUrl", o)(u().mediaImageGID)), U = d(() => ((ne, ge) => {
      const { fonts: Be, colors: Se, cornerRadius: Le } = ne;
      return bn({ "kaching-upsell-background-color": Se.upsellBackground && Re(Se.upsellBackground), "kaching-upsell-text-color": Se.upsellText && Re(Se.upsellText), "kaching-upsell-selected-background-color": Se.upsellSelectedBackground && Re(Se.upsellSelectedBackground), "kaching-upsell-selected-text-color": Se.upsellSelectedText && Re(Se.upsellSelectedText), "kaching-upsell-font-size": Be.upsell && Be.upsell.size + "px", "kaching-upsell-font-weight": Be.upsell && ur(Be.upsell.style), "kaching-upsell-font-style": Be.upsell && dr(Be.upsell.style), "kaching-upsell-image-border-radius": (Le || 0) / 2 + "px", "kaching-upsell-image-height": ge.imageSize + "px" });
    })(l(), u())), O = d(() => h().url ? `${h().url}?variant=${e(M)}` : void 0), X = d(() => l().priceRounding ? { perItem: l().showPricesPerItem, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), Z = d(() => u().quantity * f()), I = d(() => (function(ne) {
      if (!ne) return 0;
      let ge = ne.price;
      return l().useProductCompareAtPrice && ne.compareAtPrice && (ge = Math.max(ge, ne.compareAtPrice)), ge * e(Z);
    })(e(K))), C = d(() => Math.ceil(e(I) / e(Z))), N = d(() => {
      var ne;
      return (ne = u().subscriptionEnabled) == null || ne;
    }), H = d(() => {
      var ne;
      return (ne = u().subscriptionType) != null ? ne : "deal";
    }), J = d(() => {
      if (!e(N) || e(H) !== "always" || !e(K)) return [];
      const ne = new Set(e(K).sellingPlans.map((ge) => ge.id));
      return h().sellingPlans.filter((ge) => ne.has(ge.id));
    }), oe = d(() => e(J).find((ne) => ne.id === e(Q)) || e(J)[0]);
    Xe(() => {
      var ne;
      e(J).some((ge) => {
        var Be;
        return ge.id === ((Be = g()) == null ? void 0 : Be.id);
      }) && se(Q, (ne = g()) == null ? void 0 : ne.id, !0);
    });
    const G = d(() => {
      if (e(K) && e(N))
        return e(H) === "deal" ? g() ? Kn(h(), e(K), g()) : void 0 : e(oe);
    }), V = d(() => la({ discountType: u().discountType, discountValue: u().discountValue, discountQuantity: u().quantity, variantQuantities: e(K) ? [{ variant: e(K), quantity: e(Z) }] : [], currencyRate: r().currencyRate, priceRounding: e(X), sellingPlan: e(G) })), F = d(() => Math.ceil(e(V) / e(Z))), L = d(() => e(I) > e(V)), te = d(() => e(K) && lo(e(K))), ue = d(() => e(K) ? mr([{ variant: e(K), quantity: e(Z) }]) : null), R = d(() => e(ue) ? e(V) / e(ue) : null), P = d(() => dn({ priceFormatter: a(), product: h(), totalFullPrice: e(I), totalDiscountedPrice: e(V), quantity: e(Z), unitQuantity: e(ue), sellingPlan: e(G) })), D = d(() => e(P)(s()(u().text))), ae = d(() => ((ne, ge, Be) => ne.blockLayout !== "vertical" ? [] : os(ne).filter((Se) => Se.attachedTo.type === "barUpsell" && Se.attachedTo.dealBarId === ge && Se.attachedTo.upsellId === Be))(l(), i(), u().id).map((ne) => ya(ne, s(), e(P)))), T = d(() => wa(e(ae))), ee = d(() => e(T).positions.size > 0);
    function Y(ne) {
      se(q, ne, !0);
    }
    function ie() {
      b() && se(B, !e(B));
    }
    br(() => {
      u().productGID, se(q, void 0);
    }), Xe(() => {
      if (e(K) && h().availableForSale && e(Z)) {
        const ne = e(B), ge = e(G);
        Jt(() => {
          v()({ variant: ne ? e(K) : null, product: ne ? h() : null, discountedPrice: ne ? e(V) : 0, fullPrice: ne ? e(I) : 0, sellingPlan: ne ? ge : void 0 });
        });
      }
    });
    const me = d(() => !h().availableForSale || h().variants.filter((ne) => ne.availableForSale && e(W).includes(ne.id)).length === 0);
    var Ce = { get dealBlock() {
      return l();
    }, set dealBlock(ne) {
      l(ne), _();
    }, get dealBarId() {
      return i();
    }, set dealBarId(ne) {
      i(ne), _();
    }, get upsell() {
      return u();
    }, set upsell(ne) {
      u(ne), _();
    }, get product() {
      return h();
    }, set product(ne) {
      h(ne), _();
    }, get dealBarSelected() {
      return b();
    }, set dealBarSelected(ne = !1) {
      b(ne), _();
    }, get dealSellingPlan() {
      return g();
    }, set dealSellingPlan(ne) {
      g(ne), _();
    }, get sets() {
      return f();
    }, set sets(ne) {
      f(ne), _();
    }, get onChange() {
      return v();
    }, set onChange(ne) {
      v(ne), _();
    } }, ve = Me(), xe = pe(ve), fe = (ne) => {
      var ge = bf();
      let Be, Se;
      var Le = y(ge);
      At(Le, 17, () => e(ae), (ut) => ut.id, (ut, Ft) => {
        sa(ut, { get badge() {
          return e(Ft);
        }, get blockLayout() {
          return l().blockLayout;
        } });
      });
      var Ve = j(Le, 2), le = y(Ve), De = (ut) => {
        {
          let Ft = d(() => ["kaching-bundles__upsell__checkbox", e(B) && "kaching-bundles__upsell__checkbox--selected"]);
          Ut(ut, { element: "span", get class() {
            return e(Ft);
          }, onclick: ie, children: (Yt, ye) => {
            var he = Me(), Fe = pe(he), Ue = (Je) => {
              cs(Je);
            };
            E(Fe, (Je) => {
              e(B) && Je(Ue);
            }), p(Yt, he);
          }, $$slots: { default: !0 } });
        }
      };
      E(le, (ut) => {
        b() && ut(De);
      });
      var qe = j(le, 2), _e = (ut) => {
        {
          let Ft = d(() => b() ? e(O) : void 0);
          Yn(ut, { get url() {
            return e(Ft);
          }, class: "kaching-bundles__upsell__link", children: (Yt, ye) => {
            var he = ef();
            be(() => {
              var Fe;
              we(he, "src", e(A) || ((Fe = e(K)) == null ? void 0 : Fe.image) || h().image), we(he, "height", u().imageSize);
            }), p(Yt, he);
          }, $$slots: { default: !0 } });
        }
      };
      E(qe, (ut) => {
        u().imageSize > 0 && ut(_e);
      });
      var Ie = j(qe, 2), $e = y(Ie), Pe = (ut) => {
        Ut(ut, { element: "span", class: "kaching-bundles__upsell__text", onclick: ie, children: (Ft, Yt) => {
          var ye = Me();
          Te(pe(ye), () => e(D)), p(Ft, ye);
        }, $$slots: { default: !0 } });
      };
      E($e, (ut) => {
        e(D) && ut(Pe);
      });
      var Ge = j($e, 2), bt = (ut) => {
        Hn(ut, { get product() {
          return e(re);
        }, get selectedVariantId() {
          return e(M);
        }, onChange: Y });
      };
      E(Ge, (ut) => {
        b() && e(re) && e(re).variants.length > 1 && e(M) && ut(bt);
      });
      var ot = j(Ge, 2), nt = (ut) => {
        Pa(ut, { get sellingPlans() {
          return e(J);
        }, get selectedSellingPlan() {
          return e(oe);
        }, onChange: (Ft) => se(Q, Ft.id, !0) });
      };
      E(ot, (ut) => {
        b() && e(B) && e(J).length > 1 && e(oe) && ut(nt);
      }), x(Ie), x(Ve);
      var it = j(Ve, 2), wt = y(it), Wt = (ut) => {
        var Ft = sf(), Yt = pe(Ft), ye = y(Yt);
        rt(ye, () => e(F), (Oe) => {
          var Qe = tf();
          Te(y(Qe), () => a()(e(F))), x(Qe), p(Oe, Qe);
        });
        var he = j(ye, 2), Fe = (Oe) => {
          var Qe = Me();
          rt(pe(Qe), () => e(C), (Ke) => {
            var at = nf();
            Te(y(at), () => a()(e(C))), x(at), p(Ke, at);
          }), p(Oe, Qe);
        };
        E(he, (Oe) => {
          e(L) && Oe(Fe);
        }), x(Yt);
        var Ue = j(Yt, 2), Je = (Oe) => {
          var Qe = lf(), Ke = y(Qe);
          rt(Ke, () => e(V), (Ye) => {
            var ct = rf();
            Te(y(ct), () => a()(e(V))), x(ct), p(Ye, ct);
          });
          var at = j(Ke, 2), kt = (Ye) => {
            var ct = Me();
            rt(pe(ct), () => e(I), (Pt) => {
              var zt = af();
              Te(y(zt), () => a()(e(I))), x(zt), p(Pt, zt);
            }), p(Ye, ct);
          };
          E(at, (Ye) => {
            e(L) && Ye(kt);
          }), x(Qe), p(Oe, Qe);
        };
        E(Ue, (Oe) => {
          e(Z) > 1 && Oe(Je);
        }), p(ut, Ft);
      }, Gt = (ut) => {
        var Ft = Me(), Yt = pe(Ft), ye = (Fe) => {
          var Ue = df(), Je = pe(Ue), Oe = y(Je);
          rt(Oe, () => e(V), (kt) => {
            var Ye = of();
            Te(y(Ye), () => a()(l().showPricesPerItem ? e(F) : e(V))), x(Ye), p(kt, Ye);
          });
          var Qe = j(Oe, 2), Ke = (kt) => {
            var Ye = Me();
            rt(pe(Ye), () => e(I), (ct) => {
              var Pt = cf();
              Te(y(Pt), () => a()(l().showPricesPerItem ? e(C) : e(I))), x(Pt), p(ct, Pt);
            }), p(kt, Ye);
          };
          E(Qe, (kt) => {
            e(L) && kt(Ke);
          }), x(Je);
          var at = j(Je, 2);
          rt(y(at), () => e(R), (kt) => {
            var Ye = uf(), ct = y(Ye);
            Te(ct, () => a()(e(R), { preserveDecimals: !0 }));
            var Pt = j(ct);
            x(Ye), be(() => {
              var zt;
              return ht(Pt, ` / ${(zt = e(te)) != null ? zt : ""}`);
            }), p(kt, Ye);
          }), x(at), p(Fe, Ue);
        }, he = (Fe) => {
          var Ue = pf(), Je = pe(Ue);
          rt(Je, () => e(V), (Ke) => {
            var at = gf();
            Te(y(at), () => a()(l().showPricesPerItem ? e(F) : e(V))), x(at), p(Ke, at);
          });
          var Oe = j(Je, 2), Qe = (Ke) => {
            var at = Me();
            rt(pe(at), () => e(I), (kt) => {
              var Ye = hf();
              Te(y(Ye), () => a()(l().showPricesPerItem ? e(C) : e(I))), x(Ye), p(kt, Ye);
            }), p(Ke, at);
          };
          E(Oe, (Ke) => {
            e(L) && Ke(Qe);
          }), p(Fe, Ue);
        };
        E(Yt, (Fe) => {
          e(R) && e(te) && !r().ignoreUnitPrice ? Fe(ye) : Fe(he, !1);
        }, !0), p(ut, Ft);
      };
      E(wt, (ut) => {
        l().showBothPrices ? ut(Wt) : ut(Gt, !1);
      }), x(it), x(ge), be((ut, Ft) => {
        Be = Et(ge, 1, "kaching-bundles__upsell", null, Be, ut), we(ge, "data-upsell-id", u().id), Se = Tt(ge, e(U), Se, Ft);
      }, [() => ({ "kaching-bundles__upsell--out-of-stock": r().preview && e(me), "kaching-bundles__upsell--badge-border-all": e(T).positions.has("all"), "kaching-bundles__upsell--badge-border-top": e(T).positions.has("top"), "kaching-bundles__upsell--badge-border-bottom": e(T).positions.has("bottom"), "kaching-bundles__upsell--badge-border-left": e(T).positions.has("left"), "kaching-bundles__upsell--badge-border-right": e(T).positions.has("right") }), () => ({ "--badge-border-thickness": e(ee) ? `${e(T).thickness}px` : void 0, "--badge-border-gap": e(ee) ? `${e(T).gap}px` : void 0, "--badge-border-gap-border": e(T).gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": e(T).sideLength ? `${e(T).sideLength}px` : void 0 })]), p(ne, ge);
    };
    E(xe, (ne) => {
      !(e(K) || r().preview && e(me)) || u().visibleOnlyWhenDealBarSelected && !b() || ne(fe);
    }), p(n, ve);
    var ce = tt(Ce);
    return c(), ce;
  }
  He(hd, { dealBlock: {}, dealBarId: {}, upsell: {}, product: {}, dealBarSelected: {}, dealSellingPlan: {}, sets: {}, onChange: {} }, [], [], !0);
  var ff = $('<div class="kaching-bundles__free-gift__divider"></div>'), vf = $("<!> <!>", 1);
  function Bi(n, t) {
    et(t, !0);
    const r = () => ze(v, "$config", a), [a, s] = vt();
    let o = k(t, "dealBlock", 7), c = k(t, "dealBarId", 7), l = k(t, "upsells", 7), i = k(t, "otherProducts", 7), u = k(t, "complementaryProducts", 7), h = k(t, "dealBarSelected", 7), b = k(t, "dealSellingPlan", 7), g = k(t, "sets", 7, 1), f = k(t, "onChange", 7);
    const v = kn();
    let w = Ae(lt({}));
    const m = d(() => r().preview ? i() : i().map(kr)), z = d(() => r().preview ? u() : u().map(kr)), S = Math.floor(1e3 * Math.random()), B = d(() => l().flatMap((re, M) => {
      if (re.productSource === "complementary") {
        const A = e(z)[(M + S) % (e(z).length || 1)];
        return A && (r().preview || A.availableForSale) ? { upsell: re, product: A } : [];
      }
      if (!re.productGID) return [];
      const K = e(m).find((A) => A.id === Qt(re.productGID));
      if (!K) return [];
      if (!r().preview) {
        if (!K.availableForSale) return [];
        const A = re.variantGIDs ? re.variantGIDs.map(Qt) : K.variants.map((U) => U.id);
        if (!K.variants.some((U) => U.availableForSale && A.includes(U.id))) return [];
      }
      return { upsell: re, product: K };
    }));
    var q = { get dealBlock() {
      return o();
    }, set dealBlock(re) {
      o(re), _();
    }, get dealBarId() {
      return c();
    }, set dealBarId(re) {
      c(re), _();
    }, get upsells() {
      return l();
    }, set upsells(re) {
      l(re), _();
    }, get otherProducts() {
      return i();
    }, set otherProducts(re) {
      i(re), _();
    }, get complementaryProducts() {
      return u();
    }, set complementaryProducts(re) {
      u(re), _();
    }, get dealBarSelected() {
      return h();
    }, set dealBarSelected(re) {
      h(re), _();
    }, get dealSellingPlan() {
      return b();
    }, set dealSellingPlan(re) {
      b(re), _();
    }, get sets() {
      return g();
    }, set sets(re = 1) {
      g(re), _();
    }, get onChange() {
      return f();
    }, set onChange(re) {
      f(re), _();
    } }, Q = Me();
    At(pe(Q), 19, () => e(B), ({ upsell: re, product: M }) => re.id, (re, M, K) => {
      let A = () => e(M).upsell;
      var U = vf(), O = pe(U);
      hd(O, { get dealBarId() {
        return c();
      }, get dealBlock() {
        return o();
      }, get upsell() {
        return A();
      }, get product() {
        return e(M).product;
      }, get dealBarSelected() {
        return h();
      }, get dealSellingPlan() {
        return b();
      }, get sets() {
        return g();
      }, onChange: (I) => (function(C, N) {
        const { variant: H, product: J, discountedPrice: oe, fullPrice: G, sellingPlan: V } = N;
        H && J ? e(w)[C] = { variant: H, product: J, discountedPrice: oe, fullPrice: G, sellingPlan: V } : delete e(w)[C];
        const F = l().filter((L) => L.id in e(w)).map((L) => ({ id: L.id, variant: e(w)[L.id].variant, product: e(w)[L.id].product, quantity: L.quantity * g(), discountedPrice: e(w)[L.id].discountedPrice, fullPrice: e(w)[L.id].fullPrice, sellingPlan: e(w)[L.id].sellingPlan }));
        f()(F);
      })(A().id, I) });
      var X = j(O, 2), Z = (I) => {
        p(I, ff());
      };
      E(X, (I) => {
        e(K) < e(B).length - 1 && I(Z);
      }), p(re, U);
    }), p(n, Q);
    var W = tt(q);
    return s(), W;
  }
  He(Bi, { dealBlock: {}, dealBarId: {}, upsells: {}, otherProducts: {}, complementaryProducts: {}, dealBarSelected: {}, dealSellingPlan: {}, sets: {}, onChange: {} }, [], [], !0);
  var _f = $('<span class="kaching-bundles__bar-price__unit-label"><!></span>'), kf = $('<div class="kaching-bundles__bar-price"><!> <!></div>');
  function Rr(n, t) {
    et(t, !0);
    const r = () => ze(i, "$translate", a), [a, s] = vt(), o = k(t, "amount", 7), c = k(t, "showPricesPerItem", 7), l = k(t, "unitLabel", 7, ""), i = It(), u = un();
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
    } }, b = kf(), g = y(b);
    Te(g, () => ze(u, "$formatPrice", a)(o()));
    var f = j(g, 2), v = (m) => {
      var z = _f();
      Te(y(z), () => r()(l())), x(z), p(m, z);
    };
    E(f, (m) => {
      c() && l() && m(v);
    }), x(b), be((m) => we(b, "data-a11y-label", m), [() => r()("system.price")]), p(n, b);
    var w = tt(h);
    return s(), w;
  }
  He(Rr, { amount: {}, showPricesPerItem: {}, unitLabel: {} }, [], [], !0);
  const pd = "variantBadges";
  function bd(n = []) {
    const t = aa(fd(n));
    return si(pd, t), { setVariantBadges: (r) => {
      t.set(fd(r));
    } };
  }
  function fd(n) {
    const t = new Map(n.map((r) => [r.variantId, r.badgeHtml]));
    return (r) => r === void 0 ? void 0 : t.get(r);
  }
  var mf = $('<div class="kaching-bundles__low-stock-alert"><!></div>');
  function vd(n, t) {
    et(t, !0);
    const [r, a] = vt(), s = k(t, "lowStockAlert", 7), o = k(t, "inventoryQuantity", 7), c = It(), l = d(() => {
      return v = ze(c, "$translate", r)(s().message), w = { stock: o() ? o().toString() : null }, v.replace(/\{\{\s*(\w+)\s*\}\}/g, (m, z) => {
        var S;
        return (S = w[z]) != null ? S : "";
      });
      var v, w;
    }), i = d(() => ((v) => {
      const { textColor: w } = v;
      return bn({ "kaching-bundles-low-stock-alert-text-color": Re(w) });
    })(s()));
    var u = { get lowStockAlert() {
      return s();
    }, set lowStockAlert(v) {
      s(v), _();
    }, get inventoryQuantity() {
      return o();
    }, set inventoryQuantity(v) {
      o(v), _();
    } }, h = Me(), b = pe(h), g = (v) => {
      var w = mf();
      Te(y(w), () => e(l)), x(w), be(() => Tt(w, e(i))), p(v, w);
    };
    E(b, (v) => {
      o() && o() > 0 && o() < s().threshold && v(g);
    }), p(n, h);
    var f = tt(u);
    return a(), f;
  }
  He(vd, { lowStockAlert: {}, inventoryQuantity: {} }, [], [], !0);
  var xf = $("<div><!></div>");
  function oa(n, t) {
    et(t, !0);
    const [r, a] = vt(), s = k(t, "dealBlock", 7), o = k(t, "variant", 7), c = (function() {
      const v = li(pd);
      if (!v) throw new Error("getVariantBadges must be called within a component tree that has setupVariantBadges initialized");
      return v;
    })(), l = d(() => {
      var v;
      return ze(c, "$variantBadgeLookup", r)((v = o()) == null ? void 0 : v.id);
    });
    var i = { get dealBlock() {
      return s();
    }, set dealBlock(v) {
      s(v), _();
    }, get variant() {
      return o();
    }, set variant(v) {
      o(v), _();
    } }, u = Me(), h = pe(u), b = (v) => {
      var w = xf();
      Te(y(w), () => e(l)), x(w), p(v, w);
    }, g = (v) => {
      var w = Me(), m = pe(w), z = (S) => {
        {
          let B = d(() => {
            var q, Q;
            return (Q = (q = o()) == null ? void 0 : q.inventoryQuantity) != null ? Q : null;
          });
          vd(S, { get lowStockAlert() {
            return s().lowStockAlert;
          }, get inventoryQuantity() {
            return e(B);
          } });
        }
      };
      E(m, (S) => {
        s().lowStockAlertEnabled && s().lowStockAlert && S(z);
      }, !0), p(v, w);
    };
    E(h, (v) => {
      e(l) ? v(b) : v(g, !1);
    }), p(n, u);
    var f = tt(i);
    return a(), f;
  }
  He(oa, { dealBlock: {}, variant: {} }, [], [], !0);
  var yf = $('<div class="kaching-bundles__bar-sold-out-badge"><!></div>');
  function Ci(n, t) {
    et(t, !0);
    const [r, a] = vt(), s = k(t, "showAsSoldOut", 7), o = k(t, "replaceLiquid", 7), c = It(), l = d(() => o()(ze(c, "$translate", r)(s().label)));
    var i = { get showAsSoldOut() {
      return s();
    }, set showAsSoldOut(b) {
      s(b), _();
    }, get replaceLiquid() {
      return o();
    }, set replaceLiquid(b) {
      o(b), _();
    } }, u = yf();
    Te(y(u), () => e(l)), x(u), p(n, u);
    var h = tt(i);
    return a(), h;
  }
  He(Ci, { showAsSoldOut: {}, replaceLiquid: {} }, [], [], !0);
  const gl = (n) => {
    const { opacity: t, backgroundColor: r, textColor: a, textSize: s } = n;
    return bn({ "kaching-bundles-show-as-sold-out-opacity": t.toString(), "kaching-bundles-show-as-sold-out-background-color": Re(r), "kaching-bundles-show-as-sold-out-text-color": Re(a), "kaching-bundles-show-as-sold-out-text-size": s + "px" });
  };
  var wf = $('<img alt="Decrease"/>'), Pf = $('<img alt="Increase"/>'), Sf = $('<div class="kaching-bundles__quantity-selector"><!> <input type="number" class="kaching-bundles__quantity-selector__input" step="1"/> <!></div>');
  function hl(n, t) {
    et(t, !0);
    const [r, a] = vt();
    let s = k(t, "value", 7), o = k(t, "onChange", 7), c = k(t, "min", 7, 1);
    const l = It(), i = d(() => s() <= c());
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
    } }, h = Sf(), b = y(h);
    {
      let v = d(() => ["kaching-bundles__quantity-selector__button", e(i) && "kaching-bundles__quantity-selector__button--disabled"]);
      Ut(b, { element: "div", get class() {
        return e(v);
      }, onclick: function(w) {
        w.stopPropagation(), o()(Math.max(s() - 1, c()));
      }, get disabled() {
        return e(i);
      }, children: (w, m) => {
        var z = wf();
        be(() => we(z, "src", Wu)), p(w, z);
      }, $$slots: { default: !0 } });
    }
    var g = j(b, 2);
    ra(g), Ut(j(g, 2), { element: "div", class: "kaching-bundles__quantity-selector__button", onclick: function(v) {
      v.stopPropagation(), o()(s() + 1);
    }, children: (v, w) => {
      var m = Pf();
      be(() => we(m, "src", Uu)), p(v, m);
    }, $$slots: { default: !0 } }), x(h), be((v) => {
      we(g, "aria-label", v), Ra(g, s()), we(g, "min", c());
    }, [() => ze(l, "$translate", r)("system.quantity")]), Rl("blur", g, function(v) {
      const w = v.target, m = parseInt(w.value);
      o()(isNaN(m) ? c() : Math.max(m, c()));
    }), p(n, h);
    var f = tt(u);
    return a(), f;
  }
  function Bf(n, t) {
    n.target === n.currentTarget && t()();
  }
  He(hl, { value: {}, onChange: {}, min: {} }, [], [], !0);
  var Cf = $('<div class="kaching-bundles"><div class="kaching-bundles__choose-multiple-gifts-modal" role="none"><div class="kaching-bundles__choose-multiple-gifts-modal__content"><!></div></div></div>');
  function _d(n, t) {
    et(t, !0);
    const r = k(t, "dealBlock", 7), a = k(t, "multipleGiftsSelector", 7), s = k(t, "products", 23, () => []), o = k(t, "initialSelectedGifts", 7), c = k(t, "isOpen", 7), l = k(t, "onConfirm", 7), i = k(t, "onClose", 7);
    var u = { get dealBlock() {
      return r();
    }, set dealBlock(f) {
      r(f), _();
    }, get multipleGiftsSelector() {
      return a();
    }, set multipleGiftsSelector(f) {
      a(f), _();
    }, get products() {
      return s();
    }, set products(f = []) {
      s(f), _();
    }, get initialSelectedGifts() {
      return o();
    }, set initialSelectedGifts(f) {
      o(f), _();
    }, get isOpen() {
      return c();
    }, set isOpen(f) {
      c(f), _();
    }, get onConfirm() {
      return l();
    }, set onConfirm(f) {
      l(f), _();
    }, get onClose() {
      return i();
    }, set onClose(f) {
      i(f), _();
    } }, h = Me(), b = pe(h), g = (f) => {
      dl(f, { target: "body", children: (v, w) => {
        var m = Cf(), z = y(m);
        z.__click = [Bf, i];
        var S = y(z);
        so(y(S), { get dealBlock() {
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
        } }), x(S), x(z), x(m), be((B) => Tt(z, B), [() => (function(B) {
          var q;
          return bn({ "kaching-choose-multiple-gifts-overlay-color": Re(((q = B.chooseMultipleGiftsModal) == null ? void 0 : q.overlayColor) || xp) });
        })(r())]), p(v, m);
      }, $$slots: { default: !0 } });
    };
    return E(b, (f) => {
      c() && f(g);
    }), p(n, h), tt(u);
  }
  On(["click"]), He(_d, { dealBlock: {}, multipleGiftsSelector: {}, products: {}, initialSelectedGifts: {}, isOpen: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var If = Tn('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 5.33337V10.6667M5.33398 8.00004H10.6673M14.6673 8.00004C14.6673 11.6819 11.6825 14.6667 8.00065 14.6667C4.31875 14.6667 1.33398 11.6819 1.33398 8.00004C1.33398 4.31814 4.31875 1.33337 8.00065 1.33337C11.6825 1.33337 14.6673 4.31814 14.6673 8.00004Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function kd(n) {
    p(n, If());
  }
  He(kd, {}, [], [], !0);
  var Mf = $('<img alt="" class="kaching-bundles__multiple-gifts-selector__photo"/>'), zf = $('<span class="kaching-bundles__multiple-gifts-selector__photo-count"> </span>'), $f = $('<div class="kaching-bundles__multiple-gifts-selector__photos"><!> <!></div>'), Df = $('<img alt="" class="kaching-bundles__free-gift__image"/>'), Af = $('<div class="kaching-bundles__free-gift__image"></div>'), Vf = $('<span class="kaching-bundles__free-gift__text"><!></span>'), Tf = $('<span class="kaching-bundles__free-gift__add-button"><!></span>'), qf = $('<div class="kaching-bundles__free-gift__full-price"><!></div>'), Gf = $('<div class="kaching-bundles__multiple-gifts-selector kaching-bundles__free-gift"><!> <div class="kaching-bundles__free-gift__main"><!> <span class="kaching-bundles__free-gift__content"><!> <!></span></div> <!> <!></div>');
  function md(n, t) {
    et(t, !0);
    const r = () => ze(f, "$formatPrice", s), a = () => ze(v, "$translate", s), [s, o] = vt();
    let c = k(t, "dealBlock", 7), l = k(t, "multipleGiftsSelector", 7), i = k(t, "selectedVariants", 7), u = k(t, "otherProducts", 7), h = k(t, "onConfirm", 7), b = Ae(!1);
    const g = d(() => (l().products || []).flatMap((P) => {
      const D = Qt(P.id), ae = u().find((ee) => ee.id === D);
      if (!ae || !ae.availableForSale) return [];
      const T = kr(ae);
      if (P.variantGIDs && P.variantGIDs.length > 0) {
        const ee = P.variantGIDs.map(Qt);
        return { ...T, variants: T.variants.filter((Y) => ee.includes(Y.id)) };
      }
      return T;
    })), f = un(), v = It(), w = Ln(), m = d(() => fo({ dealBlock: c(), imageSize: l().imageSize })), z = d(() => {
      if (l().mediaImageGID) return ze(w, "$getMediaImageUrl", s)(l().mediaImageGID);
    }), S = d(() => l().showProductPhotos === !0), B = d(() => i().flatMap((P) => Array.from({ length: P.quantity }, () => P.variant.image || P.product.image)).filter((P) => !!P)), q = d(() => e(B).slice(0, 3)), Q = d(() => e(B).length - e(q).length), W = d(() => i().reduce((P, D) => P + D.quantity, 0)), re = d(() => e(W) >= l().maxQuantity), M = d(() => (function(P, D) {
      if (!D.length) return 0;
      let ae = D.reduce((T, ee) => T + ee.fullPrice * ee.quantity, 0);
      return D.some((T) => T.variant.compareAtPrice) && P.useProductCompareAtPrice && (ae = Math.max(ae, D.reduce((T, ee) => T + (ee.variant.compareAtPrice || 0), 0))), ae;
    })(c(), i())), K = d(() => new Map((l().products || []).flatMap((P) => {
      const D = u().find((ae) => ae.id === Qt(P.id));
      return D ? [[D.id, D]] : [];
    }))), A = d(() => i().flatMap((P) => Array.from({ length: P.quantity }, () => P.product.title))), U = d(() => dn({ priceFormatter: r(), product: void 0, products: e(K), selectedProductTitles: e(A), totalFullPrice: e(M), totalDiscountedPrice: 0, quantity: e(W), unitQuantity: null })), O = d(() => e(re) ? e(U)(a()(l().textAfterSelection)) : e(U)(a()(l().textBeforeSelection)));
    var X = { get dealBlock() {
      return c();
    }, set dealBlock(P) {
      c(P), _();
    }, get multipleGiftsSelector() {
      return l();
    }, set multipleGiftsSelector(P) {
      l(P), _();
    }, get selectedVariants() {
      return i();
    }, set selectedVariants(P) {
      i(P), _();
    }, get otherProducts() {
      return u();
    }, set otherProducts(P) {
      u(P), _();
    }, get onConfirm() {
      return h();
    }, set onConfirm(P) {
      h(P), _();
    } }, Z = Gf(), I = y(Z);
    {
      let P = d(() => {
        var D;
        return (D = e(O)) == null ? void 0 : D.replace(/<[^>]*>/g, "");
      });
      Ut(I, { element: "span", class: "kaching-bundles__multiple-gifts-selector__clickable-overlay", get "aria-label"() {
        return e(P);
      }, onclick: () => se(b, !0) });
    }
    var C = j(I, 2), N = y(C), H = (P) => {
      var D = $f(), ae = y(D);
      At(ae, 17, () => e(q), $r, (Y, ie) => {
        var me = Mf();
        be(() => we(me, "src", e(ie))), p(Y, me);
      });
      var T = j(ae, 2), ee = (Y) => {
        var ie = zf(), me = y(ie);
        x(ie), be(() => {
          var Ce;
          return ht(me, `+${(Ce = e(Q)) != null ? Ce : ""}`);
        }), p(Y, ie);
      };
      E(T, (Y) => {
        e(Q) > 0 && Y(ee);
      }), x(D), p(P, D);
    }, J = (P) => {
      var D = Me(), ae = pe(D), T = (Y) => {
        var ie = Df();
        be(() => {
          we(ie, "src", e(z)), we(ie, "height", l().imageSize || 0);
        }), p(Y, ie);
      }, ee = (Y) => {
        var ie = Me(), me = pe(ie), Ce = (ve) => {
          var xe = Af();
          let fe;
          be((ce) => fe = Tt(xe, "", fe, ce), [() => {
            var ce;
            return { height: `${(ce = l().imageSize) != null ? ce : ""}px` };
          }]), p(ve, xe);
        };
        E(me, (ve) => {
          l().imageSize && ve(Ce);
        }, !0), p(Y, ie);
      };
      E(ae, (Y) => {
        e(z) ? Y(T) : Y(ee, !1);
      }, !0), p(P, D);
    };
    E(N, (P) => {
      e(S) && e(q).length > 0 ? P(H) : P(J, !1);
    });
    var oe = j(N, 2), G = y(oe), V = (P) => {
      var D = Me();
      rt(pe(D), () => e(O), (ae) => {
        var T = Vf();
        Te(y(T), () => e(O)), x(T), p(ae, T);
      }), p(P, D);
    };
    E(G, (P) => {
      e(O) && P(V);
    });
    var F = j(G, 2), L = (P) => {
      var D = Tf();
      kd(y(D)), x(D), p(P, D);
    };
    E(F, (P) => {
      e(re) || P(L);
    }), x(oe), x(C);
    var te = j(C, 2), ue = (P) => {
      var D = Me();
      rt(pe(D), () => e(M), (ae) => {
        var T = qf();
        Te(y(T), () => r()(e(M))), x(T), p(ae, T);
      }), p(P, D);
    };
    E(te, (P) => {
      l().showPrice && e(M) > 0 && P(ue);
    }), _d(j(te, 2), { get dealBlock() {
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
    }, onClose: () => se(b, !1) }), x(Z), be(() => {
      we(Z, "data-multiple-gifts-selector-id", l().id), Tt(Z, e(m));
    }), p(n, Z);
    var R = tt(X);
    return o(), R;
  }
  He(md, { dealBlock: {}, multipleGiftsSelector: {}, selectedVariants: {}, otherProducts: {}, onConfirm: {} }, [], [], !0);
  var Ff = $('<div class="kaching-bundles__free-gift__divider"></div>'), Of = $("<!> <!>", 1);
  function Ii(n, t) {
    et(t, !0);
    let r = k(t, "dealBlock", 7), a = k(t, "multipleGiftsSelectors", 7), s = k(t, "sellingPlan", 7), o = k(t, "otherProducts", 7), c = k(t, "onChange", 7), l = Ae(lt({})), i = d(() => a().filter((g) => !g.applyOnlyForSubscriptions || s()));
    function u(g, f) {
      const v = a().find((w) => w.id === g);
      v && (f.reduce((w, m) => w + m.quantity, 0) > v.maxQuantity || (e(l)[g] = f));
    }
    Xe(() => {
      const g = new Set(e(i).map((v) => v.id)), f = Object.entries(e(l)).filter(([v]) => g.has(v)).flatMap(([v, w]) => {
        const m = e(i).find((S) => S.id === v), z = (m == null ? void 0 : m.includeInCompareAt) === !0;
        return w.map((S) => ({ id: S.id, quantity: S.quantity, variant: S.variant, product: S.product, fullPrice: S.fullPrice, includeInCompareAt: z }));
      });
      c()(f);
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
    } }, b = Me();
    return At(pe(b), 19, () => e(i), (g) => g.id, (g, f, v) => {
      var w = Of(), m = pe(w);
      {
        let B = d(() => e(l)[e(f).id] || []);
        md(m, { get dealBlock() {
          return r();
        }, get multipleGiftsSelector() {
          return e(f);
        }, get selectedVariants() {
          return e(B);
        }, onConfirm: u, get otherProducts() {
          return o();
        } });
      }
      var z = j(m, 2), S = (B) => {
        p(B, Ff());
      };
      E(z, (B) => {
        e(v) < e(i).length - 1 && B(S);
      }), p(g, w);
    }), p(n, b), tt(h);
  }
  He(Ii, { dealBlock: {}, multipleGiftsSelectors: {}, sellingPlan: {}, otherProducts: {}, onChange: {} }, [], [], !0);
  const mo = (n, t) => n.unlockAtBarOnly ? t === n.unlockAtBar : t >= n.unlockAtBar, xd = (n, t) => !!n.applyOnlyForSubscriptions && !t;
  var Lf = Tn('<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.584 21H42.834V14C42.834 6.279 36.555 0 28.834 0C21.113 0 14.834 6.279 14.834 14V21H13.084C10.1907 21 7.83398 23.3543 7.83398 26.25V50.75C7.83398 53.6457 10.1907 56 13.084 56H44.584C47.4773 56 49.834 53.6457 49.834 50.75V26.25C49.834 23.3543 47.4773 21 44.584 21ZM19.5007 14C19.5007 8.85267 23.6867 4.66667 28.834 4.66667C33.9813 4.66667 38.1673 8.85267 38.1673 14V21H19.5007V14ZM31.1673 39.018V44.3333C31.1673 45.6213 30.1243 46.6667 28.834 46.6667C27.5436 46.6667 26.5007 45.6213 26.5007 44.3333V39.018C25.1123 38.2083 24.1673 36.7197 24.1673 35C24.1673 32.4263 26.2603 30.3333 28.834 30.3333C31.4076 30.3333 33.5007 32.4263 33.5007 35C33.5007 36.7197 32.5557 38.2083 31.1673 39.018Z" fill="currentColor" transform="translate(21.5, 22)"></path></svg>');
  function yd(n) {
    p(n, Lf());
  }
  He(yd, {}, [], [], !0);
  var jf = $('<img alt="" class="kaching-bundles__deal-bar-progressive-gift__image"/>'), Ef = $('<span class="kaching-bundles__deal-bar-progressive-gift__lock-icon kaching-bundles__deal-bar-progressive-gift__image"><!></span>'), Rf = $('<img class="kaching-bundles__deal-bar-progressive-gift__image"/>'), Nf = $('<span class="kaching-bundles__deal-bar-progressive-gift__text"><!></span>'), Qf = $('<span class="kaching-bundles__deal-bar-progressive-gift__text"><!></span>'), Wf = $('<span class="kaching-bundles__deal-bar-progressive-gift__label-crossed-out"><!></span>'), Uf = $('<span class="kaching-bundles__deal-bar-progressive-gift__label"><!> <!></span>'), Hf = $('<div><div class="kaching-bundles__deal-bar-progressive-gift__main"><!> <div class="kaching-bundles__deal-bar-progressive-gift__content"><!> <!></div></div> <!></div>');
  function wd(n, t) {
    et(t, !0);
    const r = () => ze(z, "$config", o), a = () => ze(v, "$translate", o), s = () => ze(m, "$getMediaImageUrl", o), [o, c] = vt(), l = k(t, "progressiveGifts", 7), i = k(t, "gift", 7), u = k(t, "product", 7), h = k(t, "selectedDealBarIndex", 7), b = k(t, "sellingPlan", 7), g = k(t, "selected", 7), f = k(t, "onChange", 7), v = It(), w = un(), m = Ln(), z = kn(), S = d(() => i().differentVariantsEnabled), B = d(() => {
      var F;
      return u() ? i().variantGIDs ? i().variantGIDs.map(Qt) : (F = u()) == null ? void 0 : F.variants.map((L) => L.id) : null;
    }), q = d(() => {
      if (u()) return { ...u(), variants: u().variants.filter((F) => (r().preview || F.availableForSale) && (!e(B) || e(B).includes(F.id))) };
    });
    let Q = Ae(lt([]));
    const W = d(() => (function(F, L, te) {
      return F.length > 0 ? F : L != null && L.availableForSale && L.variants.length > 0 ? Array.from({ length: te }, () => L.variants[0].id) : [];
    })(e(Q), e(q), i().quantity)), re = d(() => u() && e(W).length > 0 ? e(W).map((F) => u().variants.find((L) => L.id === F)).filter((F) => F !== void 0) : []), M = d(() => {
      var F;
      return dn({ priceFormatter: ze(w, "$formatPrice", o), product: u(), totalFullPrice: ((F = e(re)) == null ? void 0 : F.reduce((L, te) => {
        var ue;
        return L + ((ue = te == null ? void 0 : te.price) != null ? ue : 0);
      }, 0)) || 0, totalDiscountedPrice: 0, quantity: i().quantity, unitQuantity: mr(e(re).map((L) => ({ variant: L, quantity: 1 }))) });
    }), K = d(() => e(M)(a()(i().title))), A = d(() => e(M)(a()(i().lockedTitle))), U = d(() => e(M)(a()(i().label))), O = d(() => e(M)(a()(i().labelCrossedOut))), X = d(() => h() === null || !mo(i(), h() + 1) || xd(i(), b())), Z = d(() => {
      var F, L, te;
      return i().giftType === "shipping" ? vo : ((L = (F = e(re)) == null ? void 0 : F[0]) == null ? void 0 : L.image) || ((te = u()) == null ? void 0 : te.image);
    }), I = d(() => i().mediaImageGID ? s()(i().mediaImageGID) : e(Z)), C = d(() => l().dealBarStyle && s()(l().dealBarStyle.lockedMediaImageGID));
    Xe(() => {
      if (g()) if (u() && e(re) && !e(X)) {
        const F = Object.values(e(re).reduce((L, te) => (L[te.id] ? L[te.id].quantity += 1 : L[te.id] = { variant: te, quantity: 1 }, L), {}));
        Jt(() => f()({ product: u(), variants: F }));
      } else Jt(() => f()(void 0));
      else Jt(() => f()(void 0));
    }), br(() => {
      i().productGID, se(Q, [], !0);
    }), Xe(() => {
      e(X) && e(I) && (new Image().src = e(I));
    });
    const N = d(() => {
      var F;
      return i().giftType === "product" && !((F = u()) != null && F.availableForSale);
    });
    var H = { get progressiveGifts() {
      return l();
    }, set progressiveGifts(F) {
      l(F), _();
    }, get gift() {
      return i();
    }, set gift(F) {
      i(F), _();
    }, get product() {
      return u();
    }, set product(F) {
      u(F), _();
    }, get selectedDealBarIndex() {
      return h();
    }, set selectedDealBarIndex(F) {
      h(F), _();
    }, get sellingPlan() {
      return b();
    }, set sellingPlan(F) {
      b(F), _();
    }, get selected() {
      return g();
    }, set selected(F) {
      g(F), _();
    }, get onChange() {
      return f();
    }, set onChange(F) {
      f(F), _();
    } }, J = Me(), oe = pe(J), G = (F) => {
      var L = Me(), te = pe(L), ue = (R) => {
        var P = Hf();
        let D;
        var ae = y(P), T = y(ae), ee = (ge) => {
          var Be = Me(), Se = pe(Be), Le = (le) => {
            var De = jf();
            be(() => we(De, "src", e(C))), p(le, De);
          }, Ve = (le) => {
            var De = Ef();
            yd(y(De)), x(De), p(le, De);
          };
          E(Se, (le) => {
            e(C) ? le(Le) : le(Ve, !1);
          }), p(ge, Be);
        }, Y = (ge) => {
          var Be = Me(), Se = pe(Be), Le = (Ve) => {
            var le = Rf();
            be(() => {
              var De, qe;
              we(le, "src", e(I)), we(le, "alt", (qe = (De = u()) == null ? void 0 : De.title) != null ? qe : "");
            }), p(Ve, le);
          };
          E(Se, (Ve) => {
            e(I) && Ve(Le);
          }, !0), p(ge, Be);
        };
        E(T, (ge) => {
          e(X) ? ge(ee) : ge(Y, !1);
        });
        var ie = j(T, 2), me = y(ie), Ce = (ge) => {
          var Be = Nf();
          Te(y(Be), () => e(A)), x(Be), p(ge, Be);
        }, ve = (ge) => {
          var Be = Me(), Se = pe(Be), Le = (Ve) => {
            var le = Qf();
            Te(y(le), () => e(K)), x(le), p(Ve, le);
          };
          E(Se, (Ve) => {
            e(K) && Ve(Le);
          }, !0), p(ge, Be);
        };
        E(me, (ge) => {
          e(X) ? ge(Ce) : ge(ve, !1);
        });
        var xe = j(me, 2), fe = (ge) => {
          var Be = Me();
          At(pe(Be), 17, () => ({ length: e(S) ? i().quantity : 1 }), $r, (Se, Le, Ve) => {
            var le = Me(), De = pe(le), qe = (_e) => {
              {
                let Ie = d(() => e(S) ? Ve + 1 : void 0);
                Hn(_e, { get product() {
                  return e(q);
                }, get selectedVariantId() {
                  return e(W)[Ve];
                }, get number() {
                  return e(Ie);
                }, forceDropdown: !0, onChange: ($e) => (function(Pe, Ge) {
                  e(S) ? se(Q, [...e(W).slice(0, Ge), Pe, ...e(W).slice(Ge + 1)], !0) : se(Q, Array.from({ length: i().quantity }, () => Pe), !0);
                })($e, Ve) });
              }
            };
            E(De, (_e) => {
              e(W)[Ve] !== void 0 && _e(qe);
            }), p(Se, le);
          }), p(ge, Be);
        };
        E(xe, (ge) => {
          g() && !e(X) && e(q) && e(q).variants.length > 1 && e(W).length > 0 && ge(fe);
        }), x(ie), x(ae);
        var ce = j(ae, 2), ne = (ge) => {
          var Be = Me(), Se = pe(Be), Le = (Ve) => {
            var le = Uf(), De = y(le), qe = ($e) => {
              var Pe = Me();
              Te(pe(Pe), () => e(U)), p($e, Pe);
            };
            E(De, ($e) => {
              e(U) && $e(qe);
            });
            var _e = j(De, 2), Ie = ($e) => {
              var Pe = Wf();
              Te(y(Pe), () => e(O)), x(Pe), p($e, Pe);
            };
            E(_e, ($e) => {
              e(O) && $e(Ie);
            }), x(le), p(Ve, le);
          };
          E(Se, (Ve) => {
            e(X) && !l().showLockedGiftLabels || Ve(Le);
          }), p(ge, Be);
        };
        E(ce, (ge) => {
          (e(U) || e(O)) && ge(ne);
        }), x(P), be((ge) => D = Et(P, 1, "kaching-bundles__deal-bar-progressive-gift", null, D, ge), [() => ({ "kaching-bundles__deal-bar-progressive-gift--locked": e(X), "kaching-bundles__deal-bar-progressive-gift--out-of-stock": r().preview && e(N) })]), p(R, P);
      };
      E(te, (R) => {
        var P;
        (u() && ((P = e(re)) != null && P.length) || i().giftType === "shipping") && R(ue);
      }), p(F, L);
    };
    E(oe, (F) => {
      e(X) && l().hideLockedGifts || F(G);
    }), p(n, J);
    var V = tt(H);
    return c(), V;
  }
  He(wd, { progressiveGifts: {}, gift: {}, product: {}, selectedDealBarIndex: {}, sellingPlan: {}, selected: {}, onChange: {} }, [], [], !0);
  var Zf = $('<div class="kaching-bundles__deal-bar-progressive-gifts"></div>');
  function Mi(n, t) {
    et(t, !0);
    const [r, a] = vt(), s = k(t, "progressiveGifts", 7), o = k(t, "dealBlock", 7), c = k(t, "dealBar", 7), l = k(t, "otherProducts", 7), i = k(t, "selectedDealBarIndex", 7), u = k(t, "sellingPlan", 7), h = k(t, "selected", 7), b = k(t, "onChange", 7), g = d(() => o().dealBars.findIndex((M) => M.id === c().id)), f = kn();
    let v = Ae(lt({}));
    const w = d(() => {
      var M, K;
      return ((A) => A ? bn({ "kaching-deal-bar-progressive-gift-image-size": A.imageSize + "px", "kaching-deal-bar-progressive-gift-corner-radius": A.cornerRadius + "px", "kaching-deal-bar-progressive-gift-label-background-color": Re(A.labelBackgroundColor), "kaching-deal-bar-progressive-gift-label-text-color": Re(A.labelTextColor), "kaching-deal-bar-progressive-gift-label-text-size": A.labelTextSize + "px", "kaching-deal-bar-progressive-gift-text-color": Re(A.textColor), "kaching-deal-bar-progressive-gift-selected-text-color": Re(A.selectedTextColor), "kaching-deal-bar-progressive-gift-text-size": A.textSize + "px", "kaching-deal-bar-progressive-gift-locked-label-background-color": Re(A.lockedLabelBackgroundColor), "kaching-deal-bar-progressive-gift-locked-label-text-color": Re(A.lockedLabelTextColor), "kaching-deal-bar-progressive-gift-locked-label-text-size": A.lockedLabelTextSize + "px", "kaching-deal-bar-progressive-gift-locked-text-color": Re(A.lockedTextColor), "kaching-deal-bar-progressive-gift-locked-text-size": A.lockedTextSize + "px", "kaching-deal-bar-progressive-gift-locked-icon-color": Re(A.lockedIconColor) }) : "")((K = (M = o().progressiveGifts) == null ? void 0 : M.dealBarStyle) != null ? K : null);
    });
    function m() {
      const M = Object.entries(e(v)).map(([K, A]) => ({ id: K, variants: A.variants, product: A.product }));
      b()(M);
    }
    const z = d(() => {
      var M, K, A;
      return (A = (K = (M = s()) == null ? void 0 : M.gifts) == null ? void 0 : K.filter((U) => mo(U, e(g) + 1))) != null ? A : [];
    }), S = d(() => e(z).flatMap((M) => {
      const K = M.giftType === "product" && M.productGID ? l().find((U) => U.id === Qt(M.productGID)) : void 0;
      if (!ze(f, "$config", r).preview && M.giftType === "product" && !(K != null && K.availableForSale)) return [];
      const A = K && kr(K);
      return { gift: M, product: A };
    }));
    Xe(() => {
      const M = new Set(e(z).map((A) => A.id)), K = Object.keys(e(v)).filter((A) => !M.has(A));
      if (K.length) {
        for (const A of K) delete e(v)[A];
        h() && m();
      }
    });
    var B = { get progressiveGifts() {
      return s();
    }, set progressiveGifts(M) {
      s(M), _();
    }, get dealBlock() {
      return o();
    }, set dealBlock(M) {
      o(M), _();
    }, get dealBar() {
      return c();
    }, set dealBar(M) {
      c(M), _();
    }, get otherProducts() {
      return l();
    }, set otherProducts(M) {
      l(M), _();
    }, get selectedDealBarIndex() {
      return i();
    }, set selectedDealBarIndex(M) {
      i(M), _();
    }, get sellingPlan() {
      return u();
    }, set sellingPlan(M) {
      u(M), _();
    }, get selected() {
      return h();
    }, set selected(M) {
      h(M), _();
    }, get onChange() {
      return b();
    }, set onChange(M) {
      b(M), _();
    } }, q = Me(), Q = pe(q), W = (M) => {
      var K = Zf();
      At(K, 21, () => e(S), ({ gift: A, product: U }) => A.id, (A, U) => {
        let O = () => e(U).gift;
        wd(A, { get selectedDealBarIndex() {
          return i();
        }, get selected() {
          return h();
        }, get gift() {
          return O();
        }, get product() {
          return e(U).product;
        }, get progressiveGifts() {
          return s();
        }, get sellingPlan() {
          return u();
        }, onChange: (X) => (function(Z, I) {
          I ? e(v)[Z] = I : delete e(v)[Z], h() && m();
        })(O().id, X) });
      }), x(K), be(() => Tt(K, e(w))), p(M, K);
    };
    E(Q, (M) => {
      var K;
      o().progressiveGiftsEnabled && ((K = s()) == null ? void 0 : K.layout) === "deal-bar" && e(S).length > 0 && M(W);
    }), p(n, q);
    var re = tt(B);
    return a(), re;
  }
  He(Mi, { progressiveGifts: {}, dealBlock: {}, dealBar: {}, otherProducts: {}, selectedDealBarIndex: {}, sellingPlan: {}, selected: {}, onChange: {} }, [], [], !0);
  var Jf = Tn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Pd(n) {
    p(n, Jf());
  }
  He(Pd, {}, [], [], !0);
  var Yf = Tn('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3307 4L5.9974 11.3333L2.66406 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Sd(n) {
    p(n, Yf());
  }
  He(Sd, {}, [], [], !0);
  var Kf = Tn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>');
  function Bd(n) {
    p(n, Kf());
  }
  He(Bd, {}, [], [], !0);
  var Xf = Tn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Cd(n) {
    p(n, Xf());
  }
  He(Cd, {}, [], [], !0);
  var ev = Tn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2787 3.45332C11.5092 2.98638 11.6245 2.75291 11.7809 2.67831C11.917 2.61341 12.0752 2.61341 12.2113 2.67831C12.3677 2.75291 12.483 2.98638 12.7135 3.45332L14.9002 7.88328C14.9682 8.02113 15.0022 8.09006 15.0519 8.14358C15.096 8.19096 15.1488 8.22935 15.2074 8.25662C15.2736 8.28742 15.3497 8.29854 15.5018 8.32077L20.3931 9.03571C20.9082 9.11099 21.1657 9.14863 21.2849 9.27444C21.3886 9.38389 21.4373 9.5343 21.4176 9.68377C21.3949 9.85558 21.2085 10.0372 20.8356 10.4004L17.2975 13.8464C17.1873 13.9538 17.1321 14.0076 17.0965 14.0715C17.065 14.128 17.0448 14.1902 17.037 14.2545C17.0282 14.3271 17.0412 14.403 17.0672 14.5547L17.9021 19.4221C17.9901 19.9355 18.0341 20.1922 17.9514 20.3445C17.8794 20.477 17.7514 20.57 17.6032 20.5975C17.4327 20.6291 17.2022 20.5078 16.7412 20.2654L12.3685 17.9658C12.2322 17.8942 12.1641 17.8584 12.0923 17.8443C12.0288 17.8318 11.9634 17.8318 11.8999 17.8443C11.8281 17.8584 11.76 17.8942 11.6237 17.9658L7.25102 20.2654C6.79001 20.5078 6.55951 20.6291 6.38907 20.5975C6.24078 20.57 6.11282 20.477 6.04083 20.3445C5.95809 20.1922 6.00212 19.9355 6.09017 19.4221L6.92498 14.5547C6.95101 14.403 6.96402 14.3271 6.95521 14.2545C6.94742 14.1902 6.92721 14.128 6.8957 14.0715C6.86012 14.0076 6.80497 13.9538 6.69468 13.8464L3.15665 10.4004C2.78376 10.0372 2.59731 9.85558 2.57462 9.68377C2.55488 9.5343 2.60365 9.38389 2.70734 9.27444C2.82653 9.14863 3.08407 9.11099 3.59914 9.03571L8.4904 8.32077C8.64252 8.29854 8.71857 8.28742 8.78481 8.25662C8.84346 8.22935 8.89626 8.19096 8.94028 8.14358C8.99 8.09006 9.02402 8.02113 9.09207 7.88328L11.2787 3.45332Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Id(n) {
    p(n, ev());
  }
  He(Id, {}, [], [], !0);
  var tv = Tn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Md(n) {
    p(n, tv());
  }
  He(Md, {}, [], [], !0);
  const zd = { checkmark: Sd, dot: Bd, arrow: Pd, star: Id, heart: Cd, "thumbs-up": Md };
  var nv = $('<span class="kaching-bundles__highlights__icon"><img alt=""/></span>'), rv = $('<span class="kaching-bundles__highlights__icon"><!></span>'), av = $('<div class="kaching-bundles__highlights__item"><!> <span class="kaching-bundles__highlights__text"><!></span></div>'), iv = $("<div></div>");
  function Sa(n, t) {
    et(t, !0);
    const [r, a] = vt(), s = k(t, "highlights", 7), o = k(t, "isSelected", 7), c = k(t, "replaceLiquid", 7), l = Ln(), i = It(), u = d(() => s().items.map((q) => ze(i, "$translate", r)(q)).map((q) => c() ? c()(q) : q).filter((q) => q !== "")), h = d(() => ((q) => bn({ "kaching-highlights-icon-color": Re(q.iconColor), "kaching-highlights-text-color": Re(q.textColor), "kaching-highlights-icon-size": q.size + 2 + "px", "kaching-highlights-text-size": q.size + "px" }))(s())), b = d(() => {
      var q;
      return (q = s().layout) != null ? q : "vertical";
    }), g = d(() => {
      var q;
      return (q = s().iconType) != null ? q : "checkmark";
    }), f = d(() => zd[e(g)]), v = d(() => {
      var q;
      return e(g) === "custom" ? ze(l, "$getMediaImageUrl", r)((q = s().customIconGID) != null ? q : null) : void 0;
    });
    var w = { get highlights() {
      return s();
    }, set highlights(q) {
      s(q), _();
    }, get isSelected() {
      return o();
    }, set isSelected(q) {
      o(q), _();
    }, get replaceLiquid() {
      return c();
    }, set replaceLiquid(q) {
      c(q), _();
    } }, m = Me(), z = pe(m), S = (q) => {
      var Q = iv();
      let W;
      At(Q, 21, () => e(u), $r, (re, M) => {
        var K = av(), A = y(K), U = (Z) => {
          var I = nv(), C = y(I);
          x(I), be(() => we(C, "src", e(v))), p(Z, I);
        }, O = (Z) => {
          var I = Me(), C = pe(I), N = (H) => {
            var J = rv();
            Hc(y(J), () => e(f), (oe, G) => {
              G(oe, {});
            }), x(J), p(H, J);
          };
          E(C, (H) => {
            e(f) && H(N);
          }, !0), p(Z, I);
        };
        E(A, (Z) => {
          e(g) === "custom" && e(v) ? Z(U) : Z(O, !1);
        });
        var X = j(A, 2);
        Te(y(X), () => e(M)), x(X), x(K), p(re, K);
      }), x(Q), be((re) => {
        W = Et(Q, 1, "kaching-bundles__highlights", null, W, re), Tt(Q, e(h));
      }, [() => ({ "kaching-bundles__highlights--horizontal": e(b) === "horizontal" })]), p(q, Q);
    };
    E(z, (q) => {
      e(u).length > 0 && (!s().showOnlyWhenSelected || o()) && q(S);
    }), p(n, m);
    var B = tt(w);
    return a(), B;
  }
  function lv(n, t, r, a) {
    t()({ dealBarId: r().id, dealBarQuantity: a(r()), preselected: !1 });
  }
  He(Sa, { highlights: {}, isSelected: {}, replaceLiquid: {} }, [], [], !0);
  var sv = $('<img class="kaching-bundles__bar-image" alt=""/>'), ov = $('<div class="kaching-bundles__bar-radio"></div>'), cv = $('<span class="kaching-bundles__bar-title"><!></span>'), uv = $('<span class="kaching-bundles__bar-label"><!></span>'), dv = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), gv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), hv = $('<div class="kaching-bundles__bar-price"><!></div>'), pv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), bv = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), fv = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), vv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), _v = $('<div class="kaching-bundles__bar-unit-price"><!> </div>'), kv = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--primary"><!> <!></div> <div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!></div>', 1), mv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), xv = $("<!> <!>", 1), yv = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <div class="kaching-bundles__bar-second-line"><!> <!></div></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), wv = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), Pv = $('<div class="kaching-bundles__bar-variant-selector-wrapper"><!> <!></div>'), Sv = $('<div class="kaching-bundles__bar-variants"><!> <!></div>'), Bv = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), Cv = $('<div><input type="radio"/> <!> <!></div>');
  function xo(n, t) {
    et(t, !0);
    const r = () => ze(O, "$config", o), a = () => ze(A, "$formatPrice", o), s = () => ze(K, "$translate", o), [o, c] = vt();
    let l = k(t, "dealBlock", 7), i = k(t, "dealBar", 7), u = k(t, "product", 7), h = k(t, "otherProducts", 23, () => []), b = k(t, "complementaryProducts", 23, () => []), g = k(t, "customQuantity", 7, void 0), f = k(t, "currentVariantId", 7, void 0), v = k(t, "componentId", 7), w = k(t, "selected", 7, !1), m = k(t, "globalSellingPlan", 7, void 0), z = k(t, "selectedDealBarIndex", 7), S = k(t, "onProgressiveGiftsChange", 7), B = k(t, "onDealBarSelect", 7), q = k(t, "onDealBarDeselect", 7), Q = k(t, "onVariantSelect", 7), W = k(t, "onVariantsChange", 7), re = k(t, "onPersonalisationsChange", 7), M = k(t, "personalisationInitialValues", 23, () => []);
    const K = It(), A = un(), U = Ln(), O = kn();
    let X = Ae(lt([])), Z = Ae(lt([])), I = Ae(lt([]));
    const C = d(() => l().priceRounding ? { perItem: l().showPricesPerItem, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), N = d(() => {
      var ye, he;
      return l() && ((he = (ye = l().defaultVariantsV2) == null ? void 0 : ye.find((Fe) => Qt(Fe.productGID) === u().id && Fe.dealBarId === i().id)) == null ? void 0 : he.variantGIDs) || [];
    });
    let H = d(() => G(i())), J = Ae(lt(G(i())));
    br(() => {
      se(J, e(H), !0);
    });
    const oe = d(() => g() || e(J));
    function G(ye) {
      return ye.dealBarType === gt.Bxgy ? ye.buyQuantity + ye.getQuantity : Number(ye.quantity);
    }
    let V, F = Ae(lt([])), L = Ae(lt([])), te = !1;
    Xe(() => {
      const ye = (function(he, Fe, Ue) {
        let Je = [];
        for (let Oe = 0; Oe < he; Oe++) {
          let Qe = Fe[Oe];
          if (!Qe && he > G(i()) && Fe.filter((Ke) => Ke).length === G(i()) && (Qe = Fe[Fe.length - 1]), Qe) {
            const Ke = Qt(Qe);
            if (u().variants.find((at) => at.id == Ke)) {
              Je.push(Ke);
              continue;
            }
          }
          Ue && Je.push(Ue);
        }
        return Je;
      })(e(oe), e(N), f());
      if (JSON.stringify(e(F)) !== JSON.stringify(ye)) {
        const he = e(F).length === ye.length;
        se(F, ye, !0), e(L).length === 0 ? se(L, ye, !0) : he ? r().featureFlags.preserve_variant_selections && l().differentVariantsEnabled && new Set(e(L)).size !== 1 || se(L, ye, !0) : se(L, (function(Fe, Ue) {
          const Je = Fe[Fe.length - 1];
          if (Fe.length < Ue) {
            const Oe = Ue - Fe.length;
            return [...Fe, ...Array(Oe).fill(Je)];
          }
          return Fe.slice(0, Ue);
        })(e(L), e(oe)), !0);
      }
    }), Xe(() => {
      if (!r().featureFlags.propagate_picker_option_changes) return;
      const ye = f(), he = V;
      ye && (V = ye), he && ye && he !== ye && (r().featureFlags.preserve_variant_selections && l().differentVariantsEnabled && te || Jt(() => {
        se(L, (function(Fe, Ue, Je) {
          const Oe = e(R).get(Ue), Qe = e(R).get(Je);
          if (!Oe || !Qe) return Fe;
          const Ke = Qe.options.flatMap((Ye, ct) => Ye === Oe.options[ct] ? [] : [ct]);
          if (Ke.length === 0) return Fe;
          let at = !1;
          const kt = Fe.map((Ye) => {
            const ct = e(R).get(Ye);
            if (!ct) return Ye;
            const Pt = [...ct.options];
            for (const Ot of Ke) Pt[Ot] = Qe.options[Ot];
            const zt = qu(u().variants, Pt);
            return zt && zt.id !== Ye ? (at = !0, zt.id) : Ye;
          });
          return at ? kt : Fe;
        })(e(L), he, ye), !0);
      }));
    });
    const ue = d(() => Ge(e(L))), R = d(() => new Map(u().variants.map((ye) => [ye.id, ye])));
    let P = Ae(void 0);
    const D = d(() => ll(u(), e(ue).map((ye) => ye.variant))), ae = d(() => {
      var ye, he;
      return (i().sellingPlanEnabled || l().subscriptionsEnabled && ((ye = l().subscriptions) == null ? void 0 : ye.layout) === "link" && ((he = l().subscriptions) == null ? void 0 : he.subscribeByDefault)) && (!l().subscriptionsEnabled || !!m());
    }), T = d(() => e(ae) ? co(i(), e(D), e(P)) : void 0), ee = d(() => uo(e(T), m(), e(D), u().requiresSellingPlan)), Y = d(() => (function(ye, he, Fe, Ue) {
      return Fe.map(({ variant: Oe, quantity: Qe }) => {
        let Ke = (function(kt, Ye) {
          var ct;
          if (!Ye) return kt.price;
          const Pt = kt.sellingPlans.find((zt) => zt.id === Ye.id);
          return Pt && Pt.perDeliveryPrice !== Pt.price ? Math.max((ct = Pt.compareAtPrice) != null ? ct : kt.price, kt.price) : kt.price;
        })(Oe, Ue);
        const at = ye.useProductCompareAtPrice || (he.dealBarType === void 0 || he.dealBarType === gt.QuantityBreak) && he.discountType === "default";
        return Oe.compareAtPrice && at && (Ke = Math.max(Ke, Oe.compareAtPrice)), Ke * Qe;
      }).reduce((Oe, Qe) => Oe + Qe, 0);
    })(l(), i(), e(ue), e(ee))), ie = d(() => cl(e(Y), e(X), e(Z))), me = d(() => Math.ceil(e(Y) / e(oe))), Ce = d(() => bo(e(oe) === 1, e(ie), e(me))), ve = d(() => l() && le(e(ue), e(ee))), xe = d(() => e(ue)[0] && lo(e(ue)[0].variant)), fe = d(() => mr(e(ue))), ce = d(() => e(fe) ? e(ve) / e(fe) : null), ne = d(() => dn({ priceFormatter: a(), product: u(), selectedVariants: e(ue), totalFullPrice: e(Y), totalCompareAtPrice: e(ie), totalDiscountedPrice: e(ve), quantity: e(oe), dealBar: i(), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: e(fe), sellingPlan: e(ee) })), ge = d(() => e(ne)(s()(i().title))), Be = d(() => e(ne)(s()(i().subtitle))), Se = d(() => e(ne)(s()(i().label))), Le = d(() => sl(l(), i()).map((ye) => ya(ye, s(), e(ne)))), Ve = d(() => wa(e(Le)));
    function le(ye, he) {
      switch (i().dealBarType) {
        case void 0:
        case gt.QuantityBreak:
          return Ku(i(), ye, r().currencyRate, e(C), he, r().featureFlags.percentage_cents_rounding_workaround);
        case gt.Bxgy:
          return Xu(i(), ye, r().currencyRate, e(C), he);
      }
    }
    const De = d(() => Math.ceil(e(ve) / e(oe))), qe = d(() => e(ie) > e(ve)), _e = d(() => e(oe) && (function(ye) {
      return !ye.differentVariantsEnabled || u().variants.length === 1 ? !1 : ye.hideVariantPicker ? !0 : !(e(oe) == 1 && !ye.showVariantsForSingleQuantity);
    })(l())), Ie = d(() => r().featureFlags.variant_images && new Set(u().variants.map((ye) => ye.image).filter((ye) => ye)).size > 1), $e = d(() => `${i().id}_${v()}`);
    function Pe(ye) {
      w() && (ye.preventDefault(), ye.stopPropagation(), q()());
    }
    function Ge(ye) {
      return ye.reduce((he, Fe) => {
        const Ue = he.find(({ variant: Je }) => Je.id === Fe);
        if (Ue) Ue.quantity += 1;
        else {
          const Je = u().variants.find((Oe) => Oe.id === Fe);
          if (!Je) return he;
          he.push({ variant: Je, quantity: 1 });
        }
        return he;
      }, []);
    }
    Ea(() => {
      w() && B()({ dealBarId: i().id, dealBarQuantity: G(i()), preselected: !0 });
    });
    const bt = d(() => ze(U, "$getMediaImageUrl", o)(i().mediaImageGID) || ul);
    Xe(() => {
      w() && (e(L), e(I), e(X), e(Z), e(ee), Jt(() => {
        (function() {
          if (!e(L).length) return;
          const ye = Ge(e(L)), he = e(ve) + e(I).reduce((Ke, at) => Ke + at.discountedPrice, 0), Fe = e(X).reduce((Ke, at) => at.showPrice ? Ke + at.fullPrice : Ke, 0) + e(Z).reduce((Ke, at) => Ke + at.fullPrice * at.quantity, 0), Ue = e(Y) + e(I).reduce((Ke, at) => Ke + at.fullPrice, 0) + Fe, Je = le(e(ue), void 0), Oe = u().sellingPlans.map((Ke) => ({ sellingPlanId: Ke.id, discountedPrice: le(e(ue), Ke) })), Qe = { discountedPrice: he, fullPrice: Ue, giftValue: Fe, discountedPricePerItem: e(De), fullPricePerItem: e(me), discountedPriceWithoutSellingPlan: Je, discountedPricesForSellingPlans: Oe };
          W()({ variants: ye, freeGifts: [...e(X), ...e(Z)], upsells: e(I), dealBarSellingPlan: e(T), pricing: Qe });
        })();
      }));
    });
    const ot = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? gl(i().showAsSoldOut) : "");
    var nt = { get dealBlock() {
      return l();
    }, set dealBlock(ye) {
      l(ye), _();
    }, get dealBar() {
      return i();
    }, set dealBar(ye) {
      i(ye), _();
    }, get product() {
      return u();
    }, set product(ye) {
      u(ye), _();
    }, get otherProducts() {
      return h();
    }, set otherProducts(ye = []) {
      h(ye), _();
    }, get complementaryProducts() {
      return b();
    }, set complementaryProducts(ye = []) {
      b(ye), _();
    }, get customQuantity() {
      return g();
    }, set customQuantity(ye = void 0) {
      g(ye), _();
    }, get currentVariantId() {
      return f();
    }, set currentVariantId(ye = void 0) {
      f(ye), _();
    }, get componentId() {
      return v();
    }, set componentId(ye) {
      v(ye), _();
    }, get selected() {
      return w();
    }, set selected(ye = !1) {
      w(ye), _();
    }, get globalSellingPlan() {
      return m();
    }, set globalSellingPlan(ye = void 0) {
      m(ye), _();
    }, get selectedDealBarIndex() {
      return z();
    }, set selectedDealBarIndex(ye) {
      z(ye), _();
    }, get onProgressiveGiftsChange() {
      return S();
    }, set onProgressiveGiftsChange(ye) {
      S(ye), _();
    }, get onDealBarSelect() {
      return B();
    }, set onDealBarSelect(ye) {
      B(ye), _();
    }, get onDealBarDeselect() {
      return q();
    }, set onDealBarDeselect(ye) {
      q(ye), _();
    }, get onVariantSelect() {
      return Q();
    }, set onVariantSelect(ye) {
      Q(ye), _();
    }, get onVariantsChange() {
      return W();
    }, set onVariantsChange(ye) {
      W(ye), _();
    }, get onPersonalisationsChange() {
      return re();
    }, set onPersonalisationsChange(ye) {
      re(ye), _();
    }, get personalisationInitialValues() {
      return M();
    }, set personalisationInitialValues(ye = []) {
      M(ye), _();
    } }, it = Cv();
    let wt;
    var Wt = y(it);
    ra(Wt), Wt.__change = [lv, B, i, G];
    var Gt = j(Wt, 2);
    Za(Gt, { get for() {
      return e($e);
    }, get soldOut() {
      return i().showAsSoldOutEnabled;
    }, get borderHost() {
      return e(Ve);
    }, children: (ye, he) => {
      var Fe = Bv(), Ue = pe(Fe);
      At(Ue, 17, () => e(Le), (ft) => ft.id, (ft, Ne) => {
        sa(ft, { get badge() {
          return e(Ne);
        }, get blockLayout() {
          return l().blockLayout;
        } });
      });
      var Je = j(Ue, 2), Oe = y(Je);
      Ut(Oe, { element: "div", class: "kaching-bundles__bar-main", onclick: Pe, children: (ft, Ne) => {
        var Ze = yv(), pt = pe(Ze), st = (_t) => {
          var Mt = sv();
          be(() => we(Mt, "src", e(bt))), p(_t, Mt);
        }, $t = (_t) => {
          p(_t, ov());
        };
        E(pt, (_t) => {
          i().mediaImageGID ? _t(st) : _t($t, !1);
        });
        var fn = j(pt, 2), Dt = y(fn), Ht = y(Dt), en = y(Ht);
        rt(en, () => e(ge), (_t) => {
          var Mt = cv();
          Te(y(Mt), () => e(ge)), x(Mt), p(_t, Mt);
        });
        var Zt = j(en, 2), Bn = (_t) => {
          var Mt = Me();
          rt(pe(Mt), () => e(Se), (an) => {
            var tn = uv();
            Te(y(tn), () => e(Se)), x(tn), p(an, tn);
          }), p(_t, Mt);
        };
        E(Zt, (_t) => {
          e(Se) && _t(Bn);
        }), x(Ht);
        var hn = j(Ht, 2), vn = y(hn), Xn = (_t) => {
          var Mt = Me();
          rt(pe(Mt), () => e(Be), (an) => {
            var tn = dv();
            Te(y(tn), () => e(Be)), x(tn), p(an, tn);
          }), p(_t, Mt);
        };
        E(vn, (_t) => {
          e(Be) && _t(Xn);
        });
        var ar = j(vn, 2), xr = (_t) => {
          {
            let Mt = d(() => {
              var an, tn;
              return (tn = (an = e(ue)) == null ? void 0 : an[0]) == null ? void 0 : tn.variant;
            });
            oa(_t, { get dealBlock() {
              return l();
            }, get variant() {
              return e(Mt);
            } });
          }
        };
        E(ar, (_t) => {
          e(_e) || _t(xr);
        }), x(hn), x(Dt);
        var qn = j(Dt, 2), er = y(qn), Bt = (_t) => {
          var Mt = fv(), an = pe(Mt), tn = y(an);
          rt(tn, () => e(De), (yn) => {
            Rr(yn, { get amount() {
              return e(De);
            }, get showPricesPerItem() {
              return l().showPricesPerItem;
            }, get unitLabel() {
              return l().unitLabel;
            } });
          });
          var jn = j(tn, 2), xn = (yn) => {
            var $n = Me();
            rt(pe($n), () => e(Ce), (En) => {
              var wn = gv();
              Te(y(wn), () => a()(e(Ce))), x(wn), be((Pn) => we(wn, "data-a11y-label", Pn), [() => s()("system.original_price")]), p(En, wn);
            }), p(yn, $n);
          };
          E(jn, (yn) => {
            e(qe) && yn(xn);
          }), x(an);
          var ln = j(an, 2), pn = (yn) => {
            var $n = bv(), En = y($n);
            rt(En, () => e(ve), (on) => {
              var In = hv();
              Te(y(In), () => a()(e(ve))), x(In), be((tr) => we(In, "data-a11y-label", tr), [() => s()("system.price")]), p(on, In);
            });
            var wn = j(En, 2), Pn = (on) => {
              var In = Me();
              rt(pe(In), () => e(ie), (tr) => {
                var Vr = pv();
                Te(y(Vr), () => a()(e(ie))), x(Vr), be((Do) => we(Vr, "data-a11y-label", Do), [() => s()("system.original_price")]), p(tr, Vr);
              }), p(on, In);
            };
            E(wn, (on) => {
              e(qe) && on(Pn);
            }), x($n), p(yn, $n);
          };
          E(ln, (yn) => {
            e(oe) > 1 && yn(pn);
          }), p(_t, Mt);
        }, Ct = (_t) => {
          var Mt = Me(), an = pe(Mt), tn = (xn) => {
            var ln = kv(), pn = pe(ln), yn = y(pn);
            rt(yn, () => e(ve), (Pn) => {
              {
                let on = d(() => l().showPricesPerItem ? e(De) : e(ve));
                Rr(Pn, { get amount() {
                  return e(on);
                }, get showPricesPerItem() {
                  return l().showPricesPerItem;
                }, get unitLabel() {
                  return l().unitLabel;
                } });
              }
            });
            var $n = j(yn, 2), En = (Pn) => {
              var on = Me();
              rt(pe(on), () => l().showPricesPerItem ? e(Ce) : e(ie), (In) => {
                var tr = vv();
                Te(y(tr), () => a()(l().showPricesPerItem ? e(Ce) : e(ie))), x(tr), be((Vr) => we(tr, "data-a11y-label", Vr), [() => s()("system.original_price")]), p(In, tr);
              }), p(Pn, on);
            };
            E($n, (Pn) => {
              e(qe) && Pn(En);
            }), x(pn);
            var wn = j(pn, 2);
            rt(y(wn), () => e(ce), (Pn) => {
              var on = _v(), In = y(on);
              Te(In, () => a()(e(ce), { preserveDecimals: !0 }));
              var tr = j(In);
              x(on), be(() => {
                var Vr;
                return ht(tr, ` /
                    ${(Vr = e(xe)) != null ? Vr : ""}`);
              }), p(Pn, on);
            }), x(wn), p(xn, ln);
          }, jn = (xn) => {
            var ln = xv(), pn = pe(ln);
            rt(pn, () => e(ve), (En) => {
              {
                let wn = d(() => l().showPricesPerItem ? e(De) : e(ve));
                Rr(En, { get amount() {
                  return e(wn);
                }, get showPricesPerItem() {
                  return l().showPricesPerItem;
                }, get unitLabel() {
                  return l().unitLabel;
                } });
              }
            });
            var yn = j(pn, 2), $n = (En) => {
              var wn = Me();
              rt(pe(wn), () => l().showPricesPerItem ? e(Ce) : e(ie), (Pn) => {
                var on = mv();
                Te(y(on), () => a()(l().showPricesPerItem ? e(Ce) : e(ie))), x(on), be((In) => we(on, "data-a11y-label", In), [() => s()("system.original_price")]), p(Pn, on);
              }), p(En, wn);
            };
            E(yn, (En) => {
              e(qe) && En($n);
            }), p(xn, ln);
          };
          E(an, (xn) => {
            e(ce) && !r().ignoreUnitPrice ? xn(tn) : xn(jn, !1);
          }, !0), p(_t, Mt);
        };
        E(er, (_t) => {
          l().showBothPrices ? _t(Bt) : _t(Ct, !1);
        }), x(qn), x(fn), p(ft, Ze);
      }, $$slots: { default: !0 } });
      var Qe = j(Oe, 2), Ke = (ft) => {
        Sa(ft, { get highlights() {
          return i().highlights;
        }, get isSelected() {
          return w();
        }, get replaceLiquid() {
          return e(ne);
        } });
      };
      E(Qe, (ft) => {
        i().highlights && ft(Ke);
      });
      var at = j(Qe, 2), kt = (ft) => {
        var Ne = wv(), Ze = y(Ne);
        {
          let pt = d(() => e(T) || e(D)[0]);
          Pa(Ze, { get sellingPlans() {
            return e(D);
          }, get selectedSellingPlan() {
            return e(pt);
          }, onChange: (st) => {
            se(P, st, !0);
          } });
        }
        x(Ne), p(ft, Ne);
      };
      E(at, (ft) => {
        w() && e(ae) && !i().sellingPlanGid && e(D).length > 1 && ft(kt);
      });
      var Ye = j(at, 2), ct = (ft) => {
        var Ne = Sv(), Ze = y(Ne);
        ia(Ze, { get product() {
          return u();
        } }), At(j(Ze, 2), 17, () => ({ length: e(oe) }), $r, (pt, st, $t) => {
          var fn = Pv(), Dt = y(fn);
          {
            let en = d(() => e(oe) > 1 ? $t + 1 : void 0);
            Hn(Dt, { get product() {
              return u();
            }, get selectedVariantId() {
              return e(L)[$t];
            }, get showImage() {
              return e(Ie);
            }, get number() {
              return e(en);
            }, onChange: (Zt) => (function(Bn, hn) {
              const vn = [...e(L)];
              vn[Bn] = hn, se(L, vn, !0), te = !0, w() && (Q()({ variantId: hn }), V = hn);
            })($t, Zt), onOptionChange: (Zt, Bn, hn) => (function(vn, Xn, ar, xr) {
              if (l().disableVariantOptionSync || vn !== 0) return;
              const qn = Xn - 1, er = e(L).map((Bt) => u().variants.find((Ct) => Ct.id === Bt)).filter((Bt) => Bt != null).slice(1);
              er.length !== 0 && er.every((Bt) => Bt.options[qn] === xr) && se(L, e(L).map((Bt) => {
                const Ct = u().variants.find((an) => an.id === Bt);
                if (!Ct || Ct.options[qn] !== xr) return Bt;
                const _t = [...Ct.options];
                _t[qn] = ar;
                const Mt = qu(u().variants, _t);
                return Mt ? Mt.id : Bt;
              }), !0);
            })($t, Zt, Bn, hn) });
          }
          var Ht = j(Dt, 2);
          {
            let en = d(() => e(R).get(e(L)[$t]));
            oa(Ht, { get dealBlock() {
              return l();
            }, get variant() {
              return e(en);
            } });
          }
          x(fn), p(pt, fn);
        }), x(Ne), p(ft, Ne);
      };
      E(Ye, (ft) => {
        e(_e) && ft(ct);
      });
      var Pt = j(Ye, 2), zt = (ft) => {
        {
          let Ne = d(() => G(i()));
          hl(ft, { get value() {
            return e(J);
          }, get min() {
            return e(Ne);
          }, onChange: (Ze) => se(J, Ze, !0) });
        }
      };
      E(Pt, (ft) => {
        w() && i().dealBarType === gt.QuantityBreak && i().quantitySelector && ft(zt);
      });
      var Ot = j(Pt, 2), gn = (ft) => {
        Ja(ft, { get product() {
          return u();
        }, get selectedVariantIds() {
          return e(L);
        }, get productPersonalisation() {
          return i().productPersonalisation;
        }, get quantity() {
          return e(H);
        }, get addPersonalisationModal() {
          return l().addPersonalisationModal;
        }, get onPersonalisationsChange() {
          return re();
        }, get initialValues() {
          return M();
        } });
      };
      E(Ot, (ft) => {
        w() && i().productPersonalisation && (l().blockLayout === "vertical" || l().blockLayout === "plain") && ft(gn);
      }), x(Je);
      var mn = j(Je, 2);
      {
        let ft = d(() => i().upsells || []);
        Bi(mn, { get dealBlock() {
          return l();
        }, get dealBarId() {
          return i().id;
        }, get upsells() {
          return e(ft);
        }, get otherProducts() {
          return h();
        }, get complementaryProducts() {
          return b();
        }, get dealBarSelected() {
          return w();
        }, get dealSellingPlan() {
          return e(ee);
        }, onChange: (Ne) => {
          se(I, Ne, !0);
        } });
      }
      var Rt = j(mn, 2);
      Mi(Rt, { get selectedDealBarIndex() {
        return z();
      }, get onChange() {
        return S();
      }, get dealBlock() {
        return l();
      }, get dealBar() {
        return i();
      }, get selected() {
        return w();
      }, get otherProducts() {
        return h();
      }, get sellingPlan() {
        return e(ee);
      }, get progressiveGifts() {
        return l().progressiveGifts;
      } });
      var nn = j(Rt, 2);
      {
        let ft = d(() => i().freeGifts || []);
        Si(nn, { get dealBlock() {
          return l();
        }, get freeGifts() {
          return e(ft);
        }, get freeGiftsSummary() {
          return i().freeGiftsSummary;
        }, get otherProducts() {
          return h();
        }, get dealBarSelected() {
          return w();
        }, get sellingPlan() {
          return e(ee);
        }, get mainProductVariantId() {
          return e(L)[0];
        }, onChange: (Ne) => {
          se(X, Ne, !0);
        } });
      }
      var rn = j(nn, 2);
      {
        let ft = d(() => i().multipleGiftsSelectors || []);
        Ii(rn, { get dealBlock() {
          return l();
        }, get multipleGiftsSelectors() {
          return e(ft);
        }, get sellingPlan() {
          return e(ee);
        }, get otherProducts() {
          return h();
        }, onChange: (Ne) => {
          se(Z, Ne, !0);
        } });
      }
      p(ye, Fe);
    }, $$slots: { default: !0 } });
    var ut = j(Gt, 2), Ft = (ye) => {
      Ci(ye, { get showAsSoldOut() {
        return i().showAsSoldOut;
      }, get replaceLiquid() {
        return e(ne);
      } });
    };
    E(ut, (ye) => {
      i().showAsSoldOutEnabled && i().showAsSoldOut && ye(Ft);
    }), x(it), be((ye) => {
      var he;
      wt = Et(it, 1, "kaching-bundles__bar", null, wt, ye), we(it, "data-deal-bar-id", i().id), Tt(it, e(ot)), we(Wt, "name", `kaching-bundles-deal-${(he = v()) != null ? he : ""}`), Ra(Wt, i().id), we(Wt, "id", e($e)), el(Wt, w()), Wt.disabled = i().showAsSoldOutEnabled;
    }, [() => ({ "kaching-bundles__bar--selected": w() })]), p(n, it);
    var Yt = tt(nt);
    return c(), Yt;
  }
  On(["change"]), He(xo, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, customQuantity: {}, currentVariantId: {}, componentId: {}, selected: {}, globalSellingPlan: {}, selectedDealBarIndex: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var Iv = $('<div class="kaching-bundles"><!></div>');
  function $d(n, t) {
    var r;
    et(t, !0);
    const a = k(t, "config", 7), s = k(t, "dealBlock", 7), o = k(t, "dealBar", 7), c = k(t, "translations", 7), l = k(t, "product", 7), i = k(t, "mediaImages", 23, () => []), u = k(t, "currentVariantId", 7), h = k(t, "variantBadges", 23, () => []), b = d(() => or(s(), a().brandColors)), g = d(() => or(o(), a().brandColors)), f = Math.random().toString(16).slice(2), { setConfig: v } = Ha(a()), { setMoneyFormat: w } = wi(a().moneyFormat), { setTranslations: m } = Ua(c()), { setMediaImages: z } = al(i()), { setSwatchSettings: S } = tl({ swatchOptions: e(b).swatchOptions || [], swatchSize: e(b).swatchSize, swatchShape: e(b).swatchShape, showSelectedSwatchName: (r = e(b).showSelectedSwatchName) != null && r }), { setVariantBadges: B } = bd(h());
    Xe(() => {
      v(a());
    }), Xe(() => {
      w(a().moneyFormat, !!e(b).showPricesWithoutDecimals);
    }), Xe(() => {
      m(c());
    }), Xe(() => {
      z(i());
    }), Xe(() => {
      var K;
      S({ swatchOptions: e(b).swatchOptions || [], swatchSize: e(b).swatchSize, swatchShape: e(b).swatchShape, showSelectedSwatchName: (K = e(b).showSelectedSwatchName) != null && K });
    }), Xe(() => {
      B(h());
    });
    const q = d(() => e(b) && Du(e(b)));
    var Q = { get config() {
      return a();
    }, set config(K) {
      a(K), _();
    }, get dealBlock() {
      return s();
    }, set dealBlock(K) {
      s(K), _();
    }, get dealBar() {
      return o();
    }, set dealBar(K) {
      o(K), _();
    }, get translations() {
      return c();
    }, set translations(K) {
      c(K), _();
    }, get product() {
      return l();
    }, set product(K) {
      l(K), _();
    }, get mediaImages() {
      return i();
    }, set mediaImages(K = []) {
      i(K), _();
    }, get currentVariantId() {
      return u();
    }, set currentVariantId(K) {
      u(K), _();
    }, get variantBadges() {
      return h();
    }, set variantBadges(K = []) {
      h(K), _();
    } }, W = Iv(), re = y(W), M = (K) => {
      xo(K, { selectedDealBarIndex: null, get dealBlock() {
        return e(b);
      }, get dealBar() {
        return e(g);
      }, get product() {
        return l();
      }, get currentVariantId() {
        return u();
      }, get componentId() {
        return f;
      }, selected: !0, onProgressiveGiftsChange: () => {
      }, onDealBarSelect: () => {
      }, onDealBarDeselect: () => {
      }, onVariantSelect: () => {
      }, onVariantsChange: () => {
      } });
    };
    return E(re, (K) => {
      e(g).dealBarType && e(g).dealBarType !== gt.QuantityBreak && e(g).dealBarType !== gt.Bxgy || K(M);
    }), x(W), be(() => Tt(W, e(q))), p(n, W), tt(Q);
  }
  customElements.define("kaching-bundles-bar", He($d, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, dealBar: { attribute: "deal-bar", type: "Object" }, translations: { attribute: "translations", type: "Object" }, product: { attribute: "product", type: "Object" }, mediaImages: { attribute: "media-images", type: "Array" }, currentVariantId: { attribute: "current-variant-id", type: "Number" }, variantBadges: { attribute: "variant-badges", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), Sn(this, "component"), this.component = this;
    }
  }));
  var Dd = !1;
  const Ad = class extends Date {
    constructor(...n) {
      super(...n), xt(this, ys), xt(this, Oi, Ae(super.getTime())), xt(this, Pl, /* @__PURE__ */ new Map()), xt(this, xs, qt), Dd || sn(this, ys, No).call(this);
    }
  };
  Oi = /* @__PURE__ */ new WeakMap(), Pl = /* @__PURE__ */ new WeakMap(), xs = /* @__PURE__ */ new WeakMap(), ys = /* @__PURE__ */ new WeakSet(), No = function() {
    Dd = !0;
    var n = Ad.prototype, t = Date.prototype, r = Object.getOwnPropertyNames(t);
    for (const a of r) (a.startsWith("get") || a.startsWith("to") || a === "valueOf") && (n[a] = function(...s) {
      if (s.length > 0) return e(ke(this, Oi)), t[a].apply(this, s);
      var o = ke(this, Pl).get(a);
      if (o === void 0) {
        const c = qt;
        Wn(ke(this, xs)), o = d(() => (e(ke(this, Oi)), t[a].apply(this, s))), ke(this, Pl).set(a, o), Wn(c);
      }
      return e(o);
    }), a.startsWith("set") && (n[a] = function(...s) {
      var o = t[a].apply(this, s);
      return se(ke(this, Oi), t.getTime.call(this)), o;
    });
  };
  let yo = Ad;
  var Mv = ["forEach", "isDisjointFrom", "isSubsetOf", "isSupersetOf"], zv = ["difference", "intersection", "symmetricDifference", "union"], Vd = !1;
  const wo = class extends Set {
    constructor(n) {
      if (super(), xt(this, Sl), xt(this, Li, /* @__PURE__ */ new Map()), xt(this, qr, Ae(0)), xt(this, Da, Ae(0)), xt(this, ws, zr || -1), n) {
        for (var t of n) super.add(t);
        ke(this, Da).v = super.size;
      }
      Vd || sn(this, Sl, Wo).call(this);
    }
    has(n) {
      var t = super.has(n), r = ke(this, Li), a = r.get(n);
      if (a === void 0) {
        if (!t) return e(ke(this, qr)), !1;
        a = sn(this, Sl, Qo).call(this, !0), r.set(n, a);
      }
      return e(a), t;
    }
    add(n) {
      return super.has(n) || (super.add(n), se(ke(this, Da), super.size), lr(ke(this, qr))), this;
    }
    delete(n) {
      var t = super.delete(n), r = ke(this, Li), a = r.get(n);
      return a !== void 0 && (r.delete(n), se(a, !1)), t && (se(ke(this, Da), super.size), lr(ke(this, qr))), t;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var n = ke(this, Li);
        for (var t of n.values()) se(t, !1);
        n.clear(), se(ke(this, Da), 0), lr(ke(this, qr));
      }
    }
    keys() {
      return this.values();
    }
    values() {
      return e(ke(this, qr)), super.values();
    }
    entries() {
      return e(ke(this, qr)), super.entries();
    }
    [Symbol.iterator]() {
      return this.keys();
    }
    get size() {
      return e(ke(this, Da));
    }
  };
  Li = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap(), Da = /* @__PURE__ */ new WeakMap(), ws = /* @__PURE__ */ new WeakMap(), Sl = /* @__PURE__ */ new WeakSet(), Qo = function(n) {
    return zr === ke(this, ws) ? Ae(n) : ea(n);
  }, Wo = function() {
    Vd = !0;
    var n = wo.prototype, t = Set.prototype;
    for (const r of Mv) n[r] = function(...a) {
      return e(ke(this, qr)), t[r].apply(this, a);
    };
    for (const r of zv) n[r] = function(...a) {
      e(ke(this, qr));
      var s = t[r].apply(this, a);
      return new wo(s);
    };
  };
  let $v = wo;
  const Td = class extends Map {
    constructor(n) {
      if (super(), xt(this, Yr), xt(this, Zr, /* @__PURE__ */ new Map()), xt(this, Jr, Ae(0)), xt(this, ha, Ae(0)), xt(this, Ps, zr || -1), n) {
        for (var [t, r] of n) super.set(t, r);
        ke(this, ha).v = super.size;
      }
    }
    has(n) {
      var t = ke(this, Zr), r = t.get(n);
      if (r === void 0) {
        if (super.get(n) === void 0) return e(ke(this, Jr)), !1;
        r = sn(this, Yr, ji).call(this, 0), t.set(n, r);
      }
      return e(r), !0;
    }
    forEach(n, t) {
      sn(this, Yr, Bl).call(this), super.forEach(n, t);
    }
    get(n) {
      var t = ke(this, Zr), r = t.get(n);
      if (r === void 0) {
        if (super.get(n) === void 0) return void e(ke(this, Jr));
        r = sn(this, Yr, ji).call(this, 0), t.set(n, r);
      }
      return e(r), super.get(n);
    }
    set(n, t) {
      var r, a = ke(this, Zr), s = a.get(n), o = super.get(n), c = super.set(n, t), l = ke(this, Jr);
      if (s === void 0) s = sn(this, Yr, ji).call(this, 0), a.set(n, s), se(ke(this, ha), super.size), lr(l);
      else if (o !== t) {
        lr(s);
        var i = l.reactions === null ? null : new Set(l.reactions);
        (i === null || !((r = s.reactions) != null && r.every((u) => i.has(u)))) && lr(l);
      }
      return c;
    }
    delete(n) {
      var t = ke(this, Zr), r = t.get(n), a = super.delete(n);
      return r !== void 0 && (t.delete(n), se(ke(this, ha), super.size), se(r, -1), lr(ke(this, Jr))), a;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var n = ke(this, Zr);
        for (var t of (se(ke(this, ha), 0), n.values())) se(t, -1);
        lr(ke(this, Jr)), n.clear();
      }
    }
    keys() {
      return e(ke(this, Jr)), super.keys();
    }
    values() {
      return sn(this, Yr, Bl).call(this), super.values();
    }
    entries() {
      return sn(this, Yr, Bl).call(this), super.entries();
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    get size() {
      return e(ke(this, ha)), super.size;
    }
  };
  Zr = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), ha = /* @__PURE__ */ new WeakMap(), Ps = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakSet(), ji = function(n) {
    return zr === ke(this, Ps) ? Ae(n) : ea(n);
  }, Bl = function() {
    e(ke(this, Jr));
    var n = ke(this, Zr);
    if (ke(this, ha).v !== n.size) {
      for (var t of Sm(Td.prototype, this, "keys").call(this)) if (!n.has(t)) {
        var r = sn(this, Yr, ji).call(this, 0);
        n.set(t, r);
      }
    }
    for ([, r] of ke(this, Zr)) e(r);
  };
  let Dv = Td;
  class Av {
    constructor(t, r) {
      xt(this, Cl), xt(this, Il), yt(this, Cl, t), yt(this, Il, uc(r));
    }
    get current() {
      return ke(this, Il).call(this), ke(this, Cl).call(this);
    }
  }
  Cl = /* @__PURE__ */ new WeakMap(), Il = /* @__PURE__ */ new WeakMap();
  const Vv = /\(.+\)/, Tv = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
  class qv extends Av {
    constructor(t, r) {
      let a = Vv.test(t) || t.split(/[\s,]+/).some((o) => Tv.has(o.trim())) ? t : `(${t})`;
      const s = window.matchMedia(a);
      super(() => s.matches, (o) => (function(c, l, i, u = {}) {
        var h = js(l, c, i, u);
        return () => {
          c.removeEventListener(l, h, u);
        };
      })(s, "change", o));
    }
  }
  var Gv = $('<img alt="" class="kaching-bundles__bundle-products__image"/>'), Fv = $('<div class="kaching-bundles__bundle-products__image-placeholder"></div>');
  function Po(n, t) {
    et(t, !0);
    const r = k(t, "image", 7), a = k(t, "linkUrl", 7);
    var s = { get image() {
      return r();
    }, set image(u) {
      r(u), _();
    }, get linkUrl() {
      return a();
    }, set linkUrl(u) {
      a(u), _();
    } }, o = Me(), c = pe(o), l = (u) => {
      Yn(u, { get url() {
        return a();
      }, class: "kaching-bundles__bundle-products__link", children: (h, b) => {
        var g = Gv();
        we(g, "height", 50), we(g, "width", 50), be(() => we(g, "src", r())), p(h, g);
      }, $$slots: { default: !0 } });
    }, i = (u) => {
      p(u, Fv());
    };
    return E(c, (u) => {
      r() ? u(l) : u(i, !1);
    }), p(n, o), tt(s);
  }
  He(Po, { image: {}, linkUrl: {} }, [], [], !0);
  var Ov = $('<span class="kaching-bundles__bundle-products__quantity"> </span>'), Lv = $('<div class="kaching-bundles__bundle-products__title"><!> <span> </span></div>');
  function So(n, t) {
    et(t, !0);
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
    return Yn(n, { get url() {
      return s();
    }, class: "kaching-bundles__bundle-products__link", children: (c, l) => {
      var i = Lv(), u = y(i), h = (f) => {
        var v = Ov(), w = y(v);
        x(v), be(() => {
          var m;
          return ht(w, `${(m = a()) != null ? m : ""}x`);
        }), p(f, v);
      };
      E(u, (f) => {
        a() > 1 && f(h);
      });
      var b = j(u, 2), g = y(b, !0);
      x(b), x(i), be(() => ht(g, r())), p(c, i);
    }, $$slots: { default: !0 } }), tt(o);
  }
  He(So, { title: {}, quantity: {}, linkUrl: {} }, [], [], !0);
  var jv = $('<span class="kaching-bundles__bundle-products__price"><!></span>'), Ev = $('<span class="kaching-bundles__bundle-products__full-price"><!></span>'), Rv = $('<span class="kaching-bundles__bundle-products__unit-price"><!> </span>'), Nv = $("<div><!> <!> <!></div>");
  function us(n, t) {
    et(t, !0);
    const r = () => ze(h, "$formatPrice", a), [a, s] = vt();
    let o = k(t, "discountedPrice", 7), c = k(t, "fullPrice", 7), l = k(t, "unitPrice", 7), i = k(t, "unitPriceReference", 7), u = k(t, "ignoreUnitPrice", 7);
    const h = un(), b = d(() => !!l() && !!i() && !u());
    var g = { get discountedPrice() {
      return o();
    }, set discountedPrice(Q) {
      o(Q), _();
    }, get fullPrice() {
      return c();
    }, set fullPrice(Q) {
      c(Q), _();
    }, get unitPrice() {
      return l();
    }, set unitPrice(Q) {
      l(Q), _();
    }, get unitPriceReference() {
      return i();
    }, set unitPriceReference(Q) {
      i(Q), _();
    }, get ignoreUnitPrice() {
      return u();
    }, set ignoreUnitPrice(Q) {
      u(Q), _();
    } }, f = Nv();
    let v;
    var w = y(f);
    rt(w, o, (Q) => {
      var W = jv();
      Te(y(W), () => r()(o())), x(W), p(Q, W);
    });
    var m = j(w, 2), z = (Q) => {
      var W = Me();
      rt(pe(W), c, (re) => {
        var M = Ev();
        Te(y(M), () => r()(c())), x(M), p(re, M);
      }), p(Q, W);
    };
    E(m, (Q) => {
      o() < c() && Q(z);
    });
    var S = j(m, 2), B = (Q) => {
      var W = Me();
      rt(pe(W), l, (re) => {
        var M = Rv(), K = y(M);
        Te(K, () => r()(l(), { preserveDecimals: !0 }));
        var A = j(K);
        x(M), be(() => {
          var U;
          return ht(A, ` / ${(U = i()) != null ? U : ""}`);
        }), p(re, M);
      }), p(Q, W);
    };
    E(S, (Q) => {
      l() && i() && !u() && Q(B);
    }), x(f), be((Q) => v = Et(f, 1, "kaching-bundles__bundle-products__pricing", null, v, Q), [() => ({ "kaching-bundles__bundle-products__pricing--with-unit-price": e(b) })]), p(n, f);
    var q = tt(g);
    return s(), q;
  }
  He(us, { discountedPrice: {}, fullPrice: {}, unitPrice: {}, unitPriceReference: {}, ignoreUnitPrice: {} }, [], [], !0);
  var Qv = $("<!> <!> <!> <!> <!>", 1), Wv = $("<!> <!>", 1), Uv = $('<div class="kaching-bundles__bundle-products__wrapper"><!> <div class="kaching-bundles__bundle-products__content"><!> <!> <!></div></div> <!>', 1), Hv = $('<div class="kaching-bundles__bundle-products__product"><!></div>');
  function qd(n, t) {
    et(t, !0);
    const r = () => ze(z, "$config", a), [a, s] = vt();
    let o = k(t, "dealBlock", 7), c = k(t, "layout", 7), l = k(t, "bundleProduct", 7), i = k(t, "product", 7), u = k(t, "dealBarSelected", 7), h = k(t, "currentVariantId", 7), b = k(t, "mainVariantId", 7), g = k(t, "priceRounding", 7), f = k(t, "sellingPlan", 7), v = k(t, "dealBar", 7), w = k(t, "sets", 7), m = k(t, "onChange", 7);
    const z = kn(), S = un();
    let B = Ae(void 0);
    const q = d(() => !!l().variantGIDs), Q = d(() => {
      var P, D;
      return e(q) && i() ? i().variants.filter((ae) => l().variantGIDs.some((T) => Qt(T) === ae.id)) : (D = (P = i()) == null ? void 0 : P.variants) != null ? D : [];
    }), W = d(() => {
      var P, D, ae, T;
      const ee = l().productGID === "default", Y = !!((P = o().defaultVariantsV2) != null && P.length);
      if (ee && Y && i()) {
        const ie = i().id, me = (T = (ae = (D = o().defaultVariantsV2) == null ? void 0 : D.find((Ce) => Qt(Ce.productGID) === ie && Ce.dealBarId === v().id)) == null ? void 0 : ae.variantGIDs) == null ? void 0 : T[0];
        if (me) return Qt(me);
      }
      if (l().defaultVariantGID) return Qt(l().defaultVariantGID);
    }), re = d(() => {
      const P = e(B) || e(W);
      return P !== void 0 && e(Q).some(({ id: D }) => D === P) ? P : l().productGID === "default" && h() ? h() : l().variantGIDs ? l().variantGIDs.length === 0 ? void 0 : Qt(l().variantGIDs[0]) : e(Q).length > 0 ? e(Q)[0].id : void 0;
    }), M = d(() => {
      var P;
      return e(re) ? (P = i()) == null ? void 0 : P.variants.find((D) => D.id === e(re)) : void 0;
    }), K = d(() => i() && e(M) && Kn(i(), e(M), f())), A = d(() => l().quantity * w()), U = d(() => la({ discountType: l().discountType, discountValue: l().discountValue, discountQuantity: l().quantity, variantQuantities: e(M) ? [{ variant: e(M), quantity: e(A) }] : [], currencyRate: r().currencyRate, priceRounding: g(), sellingPlan: e(K) })), O = d(() => (function(P) {
      if (!P) return 0;
      let D = P.price;
      return o().useProductCompareAtPrice && P.compareAtPrice && (D = Math.max(D, P.compareAtPrice)), D * e(A);
    })(e(M))), X = d(() => e(M) ? lo(e(M)) : null), Z = d(() => e(M) ? mr([{ variant: e(M), quantity: e(A) }]) : null), I = d(() => e(Z) ? e(U) / e(Z) : null), C = d(() => {
      var P;
      return (P = i()) != null && P.url && e(M) ? `${i().url}?variant=${e(M).id}` : void 0;
    }), N = d(() => {
      var P, D;
      return ((P = e(M)) == null ? void 0 : P.image) || ((D = i()) == null ? void 0 : D.image);
    }), H = d(() => u() && i() && e(Q).length > 1 && e(re)), J = d(() => u() && l().productGID !== "default" ? e(C) : void 0), oe = d(() => i() ? l().title ? dn({ priceFormatter: ze(S, "$formatPrice", a), product: i(), totalFullPrice: e(O), totalDiscountedPrice: e(U), quantity: e(A), unitQuantity: e(Z) })(l().title) : i().title : "");
    function G(P) {
      se(B, P, !0);
    }
    let V;
    Xe(() => {
      e(M) && e(A) && Jt(() => {
        m()({ variant: e(M), product: i(), quantity: e(A) });
      });
    }), br(() => {
      l().productGID, se(B, void 0), V = void 0;
    }), br(() => {
      const P = l().productGID === "default";
      if (!(P || !o().disableVariantOptionSync)) return;
      const D = P ? h() : b();
      if (!D || !i() || D === V) return;
      const ae = V;
      if (V = D, !e(Q).some((Y) => Y.id === D)) return;
      const T = e(B) === void 0 && e(W) === void 0, ee = e(B) === ae && ae !== void 0;
      (T || ee) && se(B, D, !0);
    });
    var F = { get dealBlock() {
      return o();
    }, set dealBlock(P) {
      o(P), _();
    }, get layout() {
      return c();
    }, set layout(P) {
      c(P), _();
    }, get bundleProduct() {
      return l();
    }, set bundleProduct(P) {
      l(P), _();
    }, get product() {
      return i();
    }, set product(P) {
      i(P), _();
    }, get dealBarSelected() {
      return u();
    }, set dealBarSelected(P) {
      u(P), _();
    }, get currentVariantId() {
      return h();
    }, set currentVariantId(P) {
      h(P), _();
    }, get mainVariantId() {
      return b();
    }, set mainVariantId(P) {
      b(P), _();
    }, get priceRounding() {
      return g();
    }, set priceRounding(P) {
      g(P), _();
    }, get sellingPlan() {
      return f();
    }, set sellingPlan(P) {
      f(P), _();
    }, get dealBar() {
      return v();
    }, set dealBar(P) {
      v(P), _();
    }, get sets() {
      return w();
    }, set sets(P) {
      w(P), _();
    }, get onChange() {
      return m();
    }, set onChange(P) {
      m(P), _();
    } }, L = Me(), te = pe(L), ue = (P) => {
      var D = Hv(), ae = y(D), T = (Y) => {
        var ie = Qv(), me = pe(ie);
        Po(me, { get image() {
          return e(N);
        }, get linkUrl() {
          return e(J);
        } });
        var Ce = j(me, 2);
        So(Ce, { get title() {
          return e(oe);
        }, get quantity() {
          return e(A);
        }, get linkUrl() {
          return e(J);
        } });
        var ve = j(Ce, 2), xe = (ge) => {
          us(ge, { get discountedPrice() {
            return e(U);
          }, get fullPrice() {
            return e(O);
          }, get unitPrice() {
            return e(I);
          }, get unitPriceReference() {
            return e(X);
          }, get ignoreUnitPrice() {
            return r().ignoreUnitPrice;
          } });
        };
        E(ve, (ge) => {
          l().hidePrice || ge(xe);
        });
        var fe = j(ve, 2);
        oa(fe, { get dealBlock() {
          return o();
        }, get variant() {
          return e(M);
        } });
        var ce = j(fe, 2), ne = (ge) => {
          {
            let Be = d(() => ({ ...i(), variants: e(Q) })), Se = d(() => e(re) || 0);
            Hn(ge, { get product() {
              return e(Be);
            }, get selectedVariantId() {
              return e(Se);
            }, onChange: G });
          }
        };
        E(ce, (ge) => {
          e(H) && ge(ne);
        }), p(Y, ie);
      }, ee = (Y) => {
        var ie = Uv(), me = pe(ie), Ce = y(me);
        Po(Ce, { get image() {
          return e(N);
        }, get linkUrl() {
          return e(J);
        } });
        var ve = j(Ce, 2), xe = y(ve);
        So(xe, { get title() {
          return e(oe);
        }, get quantity() {
          return e(A);
        }, get linkUrl() {
          return e(J);
        } });
        var fe = j(xe, 2);
        oa(fe, { get dealBlock() {
          return o();
        }, get variant() {
          return e(M);
        } });
        var ce = j(fe, 2), ne = (Se) => {
          var Le = Wv(), Ve = pe(Le);
          {
            let De = d(() => ({ ...i(), variants: e(Q) }));
            ia(Ve, { get product() {
              return e(De);
            } });
          }
          var le = j(Ve, 2);
          {
            let De = d(() => ({ ...i(), variants: e(Q) })), qe = d(() => e(re) || 0);
            Hn(le, { get product() {
              return e(De);
            }, get selectedVariantId() {
              return e(qe);
            }, onChange: G });
          }
          p(Se, Le);
        };
        E(ce, (Se) => {
          e(H) && Se(ne);
        }), x(ve), x(me);
        var ge = j(me, 2), Be = (Se) => {
          us(Se, { get discountedPrice() {
            return e(U);
          }, get fullPrice() {
            return e(O);
          }, get unitPrice() {
            return e(I);
          }, get unitPriceReference() {
            return e(X);
          }, get ignoreUnitPrice() {
            return r().ignoreUnitPrice;
          } });
        };
        E(ge, (Se) => {
          l().hidePrice || Se(Be);
        }), p(Y, ie);
      };
      E(ae, (Y) => {
        c() === "horizontal" ? Y(T) : Y(ee, !1);
      }), x(D), p(P, D);
    };
    E(te, (P) => {
      i() && P(ue);
    }), p(n, L);
    var R = tt(F);
    return s(), R;
  }
  He(qd, { dealBlock: {}, layout: {}, bundleProduct: {}, product: {}, dealBarSelected: {}, currentVariantId: {}, mainVariantId: {}, priceRounding: {}, sellingPlan: {}, dealBar: {}, sets: {}, onChange: {} }, [], [], !0);
  var Zv = Tn('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" d="M5 9h10v2H5z"></path><path fill="#fff" d="M11 5v10H9V5z"></path></svg>');
  function Gd(n) {
    p(n, Zv());
  }
  function Jv(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  He(Gd, {}, [], [], !0);
  var Yv = $('<img class="kaching-bundles__bar-image" alt=""/>'), Kv = $('<div class="kaching-bundles__bar-radio"></div>'), Xv = $('<span class="kaching-bundles__bar-title"><!></span>'), e_ = $('<span class="kaching-bundles__bar-label"><!></span>'), t_ = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), n_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), r_ = $('<div class="kaching-bundles__bar-price"><!></div>'), a_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), i_ = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), l_ = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), s_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), o_ = $("<!> <!>", 1), c_ = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), u_ = $('<div class="kaching-bundles__bundle-products__product kaching-bundles__bundle-products__product--placeholder"><span>Select product</span></div>'), d_ = $('<div class="kaching-bundles__bundle-products__divider"><div class="kaching-bundles__bundle-products__divider-line">&ZeroWidthSpace;</div> <div class="kaching-bundles__bundle-products__divider-icon"><!></div> <div class="kaching-bundles__bundle-products__divider-line">&ZeroWidthSpace;</div></div>'), g_ = $("<!> <!>", 1), h_ = $("<div></div>"), p_ = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), b_ = $('<div><input type="radio"/> <!> <!></div>');
  function Fd(n, t) {
    et(t, !0);
    const r = () => ze(U, "$config", o), a = () => ze(K, "$formatPrice", o), s = () => ze(M, "$translate", o), [o, c] = vt(), l = k(t, "dealBlock", 7), i = k(t, "dealBar", 7), u = k(t, "product", 7), h = k(t, "otherProducts", 23, () => []), b = k(t, "complementaryProducts", 23, () => []), g = k(t, "currentVariantId", 7), f = k(t, "componentId", 7), v = k(t, "selectedDealBarIndex", 7), w = k(t, "selected", 7, !1), m = k(t, "sellingPlan", 7), z = k(t, "onProgressiveGiftsChange", 7), S = k(t, "onDealBarSelect", 7), B = k(t, "onDealBarDeselect", 7), q = k(t, "onVariantSelect", 7), Q = k(t, "onVariantsChange", 7), W = k(t, "onPersonalisationsChange", 7), re = k(t, "personalisationInitialValues", 23, () => []), M = It(), K = un(), A = Ln(), U = kn();
    let O = Ae(lt({})), X = Ae(lt([])), Z = Ae(lt([])), I = Ae(lt([])), C = Ae(1);
    const N = d(() => `${i().id}_${f()}`), H = d(() => i().bundleProducts.filter(({ productGID: _e }) => _e)), J = d(() => e(H).every((_e) => Be(_e, u(), h()))), oe = d(() => i().showProductsOnlyWhenSelected && !w()), G = d(() => e(H).every((_e) => {
      var Ie;
      const $e = Be(_e, u(), h());
      return (Ie = $e == null ? void 0 : $e.availableForSale) != null && Ie;
    })), V = d(() => l() ? (function(_e, Ie) {
      return i().bundleProducts.map((Pe) => {
        const Ge = Ie[Pe.id];
        if (!Ge) return 0;
        const { variant: bt, quantity: ot } = Ge;
        let nt = bt.price;
        return bt.compareAtPrice && _e.useProductCompareAtPrice && (nt = Math.max(nt, bt.compareAtPrice)), nt * ot;
      }).reduce((Pe, Ge) => Pe + Ge, 0);
    })(l(), e(O)) : 0), F = d(() => cl(e(V), e(X), e(Z))), L = d(() => l().priceRounding ? { perItem: l().showPricesPerItem, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), te = d(() => l() ? go(i(), e(O), r().currencyRate, e(L), m()) : 0), ue = d(() => e(H).reduce((_e, Ie) => _e + Ie.quantity, 0) * e(C)), R = d(() => Math.ceil(e(te) / (e(ue) || 1))), P = d(() => Math.ceil(e(V) / (e(ue) || 1))), D = d(() => bo(e(ue) === 1, e(F), e(P))), ae = d(() => e(F) > e(te)), T = d(() => mr(Object.values(e(O)))), ee = d(() => e(H).every((_e) => _e.productGID === "default" || Qt(_e.productGID) === u().id)), Y = d(() => {
      var _e;
      const Ie = e(H)[0];
      if (Ie) return (_e = e(O)[Ie.id]) == null ? void 0 : _e.variant.id;
    }), ie = d(() => l().showPricesPerItem && e(ee)), me = d(() => dn({ priceFormatter: a(), product: u(), dealBar: i(), totalFullPrice: e(V), totalCompareAtPrice: e(F), totalDiscountedPrice: e(te), quantity: 1, unitQuantity: e(T), sellingPlan: m() })), Ce = d(() => e(me)(s()(i().title))), ve = d(() => e(me)(s()(i().subtitle))), xe = d(() => e(me)(s()(i().label))), fe = d(() => sl(l(), i()).map((_e) => ya(_e, s(), e(me)))), ce = d(() => wa(e(fe))), ne = d(() => ze(A, "$getMediaImageUrl", o)(i().mediaImageGID) || ul);
    function ge(_e) {
      w() && (_e.preventDefault(), _e.stopPropagation(), B()());
    }
    function Be(_e, Ie, $e) {
      if (_e.productGID) return _e.productGID === "default" ? Ie : $e.find((Pe) => Pe.id === Qt(_e.productGID));
    }
    Ea(() => {
      w() && S()({ dealBarId: i().id, preselected: !0 });
    }), Xe(() => {
      w() && (ba(e(O)), ba(e(I)), ba(e(X)), ba(e(Z)), m(), Jt(() => {
        (function() {
          if (!i().bundleProducts.map(({ id: ot }) => ot).every((ot) => e(O)[ot])) return;
          const _e = [];
          for (const ot of i().bundleProducts) {
            const nt = e(O)[ot.id];
            nt && _e.push({ id: ot.id, variant: nt.variant, product: nt.product, quantity: nt.quantity });
          }
          if (_e.length === 0) return;
          const Ie = e(te) + e(I).reduce((ot, nt) => ot + nt.discountedPrice, 0), $e = e(X).reduce((ot, nt) => nt.showPrice ? ot + nt.fullPrice : ot, 0) + e(Z).reduce((ot, nt) => ot + nt.fullPrice * nt.quantity, 0), Pe = e(V) + e(I).reduce((ot, nt) => ot + nt.fullPrice, 0) + $e, Ge = go(i(), e(O), r().currencyRate, e(L), void 0), bt = u().sellingPlans.map((ot) => ({ sellingPlanId: ot.id, discountedPrice: go(i(), e(O), r().currencyRate, e(L), ot) }));
          Q()({ bundleProducts: _e, freeGifts: [...e(X), ...e(Z)], upsells: e(I), pricing: { discountedPrice: Ie, fullPrice: Pe, giftValue: $e, discountedPricePerItem: e(te), fullPricePerItem: e(V), discountedPriceWithoutSellingPlan: Ge, discountedPricesForSellingPlans: bt } });
        })();
      }));
    });
    const Se = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? gl(i().showAsSoldOut) : "");
    var Le = { get dealBlock() {
      return l();
    }, set dealBlock(_e) {
      l(_e), _();
    }, get dealBar() {
      return i();
    }, set dealBar(_e) {
      i(_e), _();
    }, get product() {
      return u();
    }, set product(_e) {
      u(_e), _();
    }, get otherProducts() {
      return h();
    }, set otherProducts(_e = []) {
      h(_e), _();
    }, get complementaryProducts() {
      return b();
    }, set complementaryProducts(_e = []) {
      b(_e), _();
    }, get currentVariantId() {
      return g();
    }, set currentVariantId(_e) {
      g(_e), _();
    }, get componentId() {
      return f();
    }, set componentId(_e) {
      f(_e), _();
    }, get selectedDealBarIndex() {
      return v();
    }, set selectedDealBarIndex(_e) {
      v(_e), _();
    }, get selected() {
      return w();
    }, set selected(_e = !1) {
      w(_e), _();
    }, get sellingPlan() {
      return m();
    }, set sellingPlan(_e) {
      m(_e), _();
    }, get onProgressiveGiftsChange() {
      return z();
    }, set onProgressiveGiftsChange(_e) {
      z(_e), _();
    }, get onDealBarSelect() {
      return S();
    }, set onDealBarSelect(_e) {
      S(_e), _();
    }, get onDealBarDeselect() {
      return B();
    }, set onDealBarDeselect(_e) {
      B(_e), _();
    }, get onVariantSelect() {
      return q();
    }, set onVariantSelect(_e) {
      q(_e), _();
    }, get onVariantsChange() {
      return Q();
    }, set onVariantsChange(_e) {
      Q(_e), _();
    }, get onPersonalisationsChange() {
      return W();
    }, set onPersonalisationsChange(_e) {
      W(_e), _();
    }, get personalisationInitialValues() {
      return re();
    }, set personalisationInitialValues(_e = []) {
      re(_e), _();
    } }, Ve = Me(), le = pe(Ve), De = (_e) => {
      var Ie = b_();
      let $e;
      var Pe = y(Ie);
      ra(Pe), Pe.__change = [Jv, S, i];
      var Ge = j(Pe, 2);
      Za(Ge, { get for() {
        return e(N);
      }, get soldOut() {
        return i().showAsSoldOutEnabled;
      }, get borderHost() {
        return e(ce);
      }, children: (nt, it) => {
        var wt = p_(), Wt = pe(wt);
        At(Wt, 17, () => e(fe), (Ye) => Ye.id, (Ye, ct) => {
          sa(Ye, { get badge() {
            return e(ct);
          }, get blockLayout() {
            return l().blockLayout;
          } });
        });
        var Gt = j(Wt, 2), ut = y(Gt);
        Ut(ut, { element: "div", class: "kaching-bundles__bar-main", onclick: ge, children: (Ye, ct) => {
          var Pt = c_(), zt = pe(Pt), Ot = (Dt) => {
            var Ht = Yv();
            be(() => we(Ht, "src", e(ne))), p(Dt, Ht);
          }, gn = (Dt) => {
            p(Dt, Kv());
          };
          E(zt, (Dt) => {
            i().mediaImageGID ? Dt(Ot) : Dt(gn, !1);
          });
          var mn = j(zt, 2), Rt = y(mn), nn = y(Rt), rn = y(nn);
          rt(rn, () => e(Ce), (Dt) => {
            var Ht = Xv();
            Te(y(Ht), () => e(Ce)), x(Ht), p(Dt, Ht);
          });
          var ft = j(rn, 2), Ne = (Dt) => {
            var Ht = Me();
            rt(pe(Ht), () => e(xe), (en) => {
              var Zt = e_();
              Te(y(Zt), () => e(xe)), x(Zt), p(en, Zt);
            }), p(Dt, Ht);
          };
          E(ft, (Dt) => {
            e(xe) && Dt(Ne);
          }), x(nn);
          var Ze = j(nn, 2), pt = (Dt) => {
            var Ht = Me();
            rt(pe(Ht), () => e(ve), (en) => {
              var Zt = t_();
              Te(y(Zt), () => e(ve)), x(Zt), p(en, Zt);
            }), p(Dt, Ht);
          };
          E(Ze, (Dt) => {
            e(ve) && Dt(pt);
          }), x(Rt);
          var st = j(Rt, 2), $t = y(st), fn = (Dt) => {
            var Ht = Me(), en = pe(Ht), Zt = (hn) => {
              var vn = l_(), Xn = pe(vn), ar = y(Xn);
              rt(ar, () => e(R), (Ct) => {
                Rr(Ct, { get amount() {
                  return e(R);
                }, get showPricesPerItem() {
                  return e(ie);
                }, get unitLabel() {
                  return l().unitLabel;
                } });
              });
              var xr = j(ar, 2), qn = (Ct) => {
                var _t = Me();
                rt(pe(_t), () => e(D), (Mt) => {
                  var an = n_();
                  Te(y(an), () => a()(e(D))), x(an), be((tn) => we(an, "data-a11y-label", tn), [() => s()("system.original_price")]), p(Mt, an);
                }), p(Ct, _t);
              };
              E(xr, (Ct) => {
                e(ae) && Ct(qn);
              }), x(Xn);
              var er = j(Xn, 2), Bt = (Ct) => {
                var _t = i_(), Mt = y(_t);
                rt(Mt, () => e(te), (jn) => {
                  var xn = r_();
                  Te(y(xn), () => a()(e(te))), x(xn), be((ln) => we(xn, "data-a11y-label", ln), [() => s()("system.price")]), p(jn, xn);
                });
                var an = j(Mt, 2), tn = (jn) => {
                  var xn = Me();
                  rt(pe(xn), () => e(F), (ln) => {
                    var pn = a_();
                    Te(y(pn), () => a()(e(F))), x(pn), be((yn) => we(pn, "data-a11y-label", yn), [() => s()("system.original_price")]), p(ln, pn);
                  }), p(jn, xn);
                };
                E(an, (jn) => {
                  e(ae) && jn(tn);
                }), x(_t), p(Ct, _t);
              };
              E(er, (Ct) => {
                e(ue) > 1 && Ct(Bt);
              }), p(hn, vn);
            }, Bn = (hn) => {
              var vn = o_(), Xn = pe(vn);
              rt(Xn, () => e(te), (qn) => {
                {
                  let er = d(() => e(ie) ? e(R) : e(te));
                  Rr(qn, { get amount() {
                    return e(er);
                  }, get showPricesPerItem() {
                    return e(ie);
                  }, get unitLabel() {
                    return l().unitLabel;
                  } });
                }
              });
              var ar = j(Xn, 2), xr = (qn) => {
                var er = Me();
                rt(pe(er), () => e(ie) ? e(D) : e(F), (Bt) => {
                  var Ct = s_();
                  Te(y(Ct), () => a()(e(ie) ? e(D) : e(F))), x(Ct), be((_t) => we(Ct, "data-a11y-label", _t), [() => s()("system.original_price")]), p(Bt, Ct);
                }), p(qn, er);
              };
              E(ar, (qn) => {
                e(ae) && qn(xr);
              }), p(hn, vn);
            };
            E(en, (hn) => {
              l().showBothPrices && e(ee) ? hn(Zt) : hn(Bn, !1);
            }), p(Dt, Ht);
          };
          E($t, (Dt) => {
            e(J) && Dt(fn);
          }), x(st), x(mn), p(Ye, Pt);
        }, $$slots: { default: !0 } });
        var Ft = j(ut, 2), Yt = (Ye) => {
          Sa(Ye, { get highlights() {
            return i().highlights;
          }, get isSelected() {
            return w();
          }, get replaceLiquid() {
            return e(me);
          } });
        };
        E(Ft, (Ye) => {
          i().highlights && Ye(Yt);
        });
        var ye = j(Ft, 2), he = (Ye) => {
          hl(Ye, { get value() {
            return e(C);
          }, onChange: (ct) => {
            se(C, ct, !0);
          } });
        };
        E(ye, (Ye) => {
          w() && i().quantitySelector && Ye(he);
        });
        var Fe = j(ye, 2), Ue = (Ye) => {
          var ct = h_();
          let Pt;
          At(ct, 23, () => i().bundleProducts, (zt) => zt.id, (zt, Ot, gn) => {
            var mn = g_(), Rt = pe(mn), nn = (Ze) => {
              {
                let pt = d(() => Be(e(Ot), u(), h())), st = d(() => i().layout || "horizontal");
                qd(Ze, { get dealBar() {
                  return i();
                }, get bundleProduct() {
                  return e(Ot);
                }, get product() {
                  return e(pt);
                }, get dealBlock() {
                  return l();
                }, get layout() {
                  return e(st);
                }, get dealBarSelected() {
                  return w();
                }, get priceRounding() {
                  return e(L);
                }, get currentVariantId() {
                  return g();
                }, get mainVariantId() {
                  return e(Y);
                }, get sellingPlan() {
                  return m();
                }, get sets() {
                  return e(C);
                }, onChange: ($t) => (function(fn, Dt) {
                  const { variant: Ht, product: en, quantity: Zt } = Dt;
                  e(O)[fn] = { variant: Ht, product: en, quantity: Zt }, w() && i().bundleProducts.map(({ id: Bn }) => Bn).every((Bn) => e(O)[Bn]) && fn === i().bundleProducts[0].id && q()({ variantId: Ht.id });
                })(e(Ot).id, $t) });
              }
            }, rn = (Ze) => {
              var pt = Me(), st = pe(pt), $t = (fn) => {
                p(fn, u_());
              };
              E(st, (fn) => {
                r().preview && fn($t);
              }, !0), p(Ze, pt);
            };
            E(Rt, (Ze) => {
              e(Ot).productGID ? Ze(nn) : Ze(rn, !1);
            });
            var ft = j(Rt, 2), Ne = (Ze) => {
              var pt = d_(), st = j(y(pt), 2);
              Gd(y(st)), x(st), pa(2), x(pt), p(Ze, pt);
            };
            E(ft, (Ze) => {
              e(gn) < i().bundleProducts.length - 1 && Ze(Ne);
            }), p(zt, mn);
          }), x(ct), be((zt) => Pt = Et(ct, 1, "kaching-bundles__bundle-products", null, Pt, zt), [() => ({ "kaching-bundles__bundle-products--vertical": i().layout === "vertical", "kaching-bundles__bundle-products--hidden": e(oe) })]), p(Ye, ct);
        };
        E(Fe, (Ye) => {
          e(J) && Ye(Ue);
        });
        var Je = j(Fe, 2), Oe = (Ye) => {
          {
            let ct = d(() => e(Y) ? [e(Y)] : []);
            Ja(Ye, { get product() {
              return u();
            }, get productPersonalisation() {
              return i().productPersonalisation;
            }, get selectedVariantIds() {
              return e(ct);
            }, get quantity() {
              return e(C);
            }, get addPersonalisationModal() {
              return l().addPersonalisationModal;
            }, get onPersonalisationsChange() {
              return W();
            }, get initialValues() {
              return re();
            } });
          }
        };
        E(Je, (Ye) => {
          w() && i().productPersonalisation && (l().blockLayout === "vertical" || l().blockLayout === "plain") && Ye(Oe);
        }), x(Gt);
        var Qe = j(Gt, 2);
        {
          let Ye = d(() => i().upsells || []);
          Bi(Qe, { get dealBlock() {
            return l();
          }, get dealBarId() {
            return i().id;
          }, get upsells() {
            return e(Ye);
          }, get otherProducts() {
            return h();
          }, get complementaryProducts() {
            return b();
          }, get dealBarSelected() {
            return w();
          }, get dealSellingPlan() {
            return m();
          }, get sets() {
            return e(C);
          }, onChange: (ct) => {
            se(I, ct, !0);
          } });
        }
        var Ke = j(Qe, 2);
        Mi(Ke, { get selectedDealBarIndex() {
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
        var at = j(Ke, 2);
        {
          let Ye = d(() => i().freeGifts || []);
          Si(at, { get dealBlock() {
            return l();
          }, get freeGifts() {
            return e(Ye);
          }, get freeGiftsSummary() {
            return i().freeGiftsSummary;
          }, get otherProducts() {
            return h();
          }, get dealBarSelected() {
            return w();
          }, get sellingPlan() {
            return m();
          }, get sets() {
            return e(C);
          }, onChange: (ct) => {
            se(X, ct, !0);
          } });
        }
        var kt = j(at, 2);
        {
          let Ye = d(() => i().multipleGiftsSelectors || []);
          Ii(kt, { get dealBlock() {
            return l();
          }, get multipleGiftsSelectors() {
            return e(Ye);
          }, get sellingPlan() {
            return m();
          }, get otherProducts() {
            return h();
          }, onChange: (ct) => {
            se(Z, ct, !0);
          } });
        }
        p(nt, wt);
      }, $$slots: { default: !0 } });
      var bt = j(Ge, 2), ot = (nt) => {
        Ci(nt, { get showAsSoldOut() {
          return i().showAsSoldOut;
        }, get replaceLiquid() {
          return e(me);
        } });
      };
      E(bt, (nt) => {
        i().showAsSoldOutEnabled && i().showAsSoldOut && nt(ot);
      }), x(Ie), be((nt) => {
        var it;
        $e = Et(Ie, 1, "kaching-bundles__bar", null, $e, nt), we(Ie, "data-deal-bar-id", i().id), Tt(Ie, e(Se)), we(Pe, "name", `kaching-bundles-deal-${(it = f()) != null ? it : ""}`), Ra(Pe, i().id), we(Pe, "id", e(N)), el(Pe, w()), Pe.disabled = i().showAsSoldOutEnabled;
      }, [() => ({ "kaching-bundles__bar--selected": w(), "kaching-bundles__bar--disabled": !e(G) && r().preview })]), p(_e, Ie);
    };
    E(le, (_e) => {
      (e(G) || r().preview) && _e(De);
    }), p(n, Ve);
    var qe = tt(Le);
    return c(), qe;
  }
  On(["change"]), He(Fd, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, currentVariantId: {}, componentId: {}, selectedDealBarIndex: {}, selected: {}, sellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var f_ = $('<img class="kaching-bundles__mix-and-match-choose-product__product-image" alt=""/>'), v_ = $('<span class="kaching-bundles__mix-and-match-choose-product__product-title"> </span>'), __ = $('<span class="kaching-bundles__mix-and-match-choose-product__subtitle"><!></span>'), k_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product-price"><!></div>'), m_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product-compare-at-price"><!></div>'), x_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product-price-container"><!> <!></div>'), y_ = $("<div><!> <!></div>"), w_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product"><div class="kaching-bundles__mix-and-match-choose-product__product-container"><!> <div class="kaching-bundles__mix-and-match-choose-product__product-content"><!> <!> <!> <!></div></div> <!></div>');
  function Od(n, t) {
    var r;
    et(t, !0);
    const a = () => ze(w, "$config", c), s = () => ze(v, "$formatPrice", c), o = () => ze(f, "$translate", c), [c, l] = vt(), i = k(t, "product", 7), u = k(t, "dealBlock", 7), h = k(t, "dealBar", 7), b = k(t, "modal", 7), g = k(t, "onChoose", 7), f = It(), v = un(), w = kn();
    let m = Ae(lt(((r = i().variants.find((L) => L.availableForSale)) == null ? void 0 : r.id) || i().variants[0].id));
    const z = d(() => i().variants.find((L) => L.id === e(m)) || i().variants[0]), S = d(() => u().priceRounding ? { perItem: !1, precision: u().priceRoundingPrecision, v2: a().featureFlags.price_rounding_v2 || !1 } : void 0), B = d(() => h().discountType === "percentage" ? la({ discountType: h().discountType, discountValue: h().discountValue, discountQuantity: 1, variantQuantities: [{ variant: e(z), quantity: 1 }], currencyRate: a().currencyRate, priceRounding: e(S) }) : e(z).price), q = d(() => u().useProductCompareAtPrice && e(z).compareAtPrice ? Math.max(e(z).price, e(z).compareAtPrice) : e(z).price), Q = d(() => i().url ? `${i().url}?variant=${e(m)}` : void 0), W = d(() => dn({ priceFormatter: s(), product: i(), totalFullPrice: e(q), totalDiscountedPrice: e(B), quantity: 1, unitQuantity: null })), re = d(() => e(W)(o()(b().subtitle || ""))), M = d(() => b().buttonText);
    function K(L) {
      se(m, L, !0);
    }
    var A = { get product() {
      return i();
    }, set product(L) {
      i(L), _();
    }, get dealBlock() {
      return u();
    }, set dealBlock(L) {
      u(L), _();
    }, get dealBar() {
      return h();
    }, set dealBar(L) {
      h(L), _();
    }, get modal() {
      return b();
    }, set modal(L) {
      b(L), _();
    }, get onChoose() {
      return g();
    }, set onChoose(L) {
      g(L), _();
    } }, U = w_(), O = y(U), X = y(O), Z = (L) => {
      Yn(L, { get url() {
        return e(Q);
      }, class: "kaching-bundles__mix-and-match-choose-product__product-image-link", children: (te, ue) => {
        var R = f_();
        we(R, "width", 100), we(R, "height", 100), be(() => we(R, "src", i().image)), p(te, R);
      }, $$slots: { default: !0 } });
    };
    E(X, (L) => {
      i().image && L(Z);
    });
    var I = j(X, 2), C = y(I);
    Yn(C, { get url() {
      return e(Q);
    }, class: "kaching-bundles__mix-and-match-choose-product__product-link", children: (L, te) => {
      var ue = v_(), R = y(ue, !0);
      x(ue), be(() => ht(R, i().title)), p(L, ue);
    }, $$slots: { default: !0 } });
    var N = j(C, 2), H = (L) => {
      var te = __();
      Te(y(te), () => e(re)), x(te), p(L, te);
    };
    E(N, (L) => {
      e(re) && L(H);
    });
    var J = j(N, 2), oe = (L) => {
      var te = x_(), ue = y(te);
      rt(ue, () => e(B), (D) => {
        var ae = k_();
        Te(y(ae), () => s()(e(B))), x(ae), p(D, ae);
      });
      var R = j(ue, 2), P = (D) => {
        var ae = Me();
        rt(pe(ae), () => e(q), (T) => {
          var ee = m_();
          Te(y(ee), () => s()(e(q))), x(ee), p(T, ee);
        }), p(D, ae);
      };
      E(R, (D) => {
        e(q) && e(q) > e(B) && D(P);
      }), x(te), p(L, te);
    };
    E(J, (L) => {
      h().discountType !== "specific" && L(oe);
    });
    var G = j(J, 2), V = (L) => {
      var te = y_(), ue = y(te);
      ia(ue, { get product() {
        return i();
      }, class: "kaching-bundles__mix-and-match-choose-product__product-option-names" }), Hn(j(ue, 2), { get product() {
        return i();
      }, get selectedVariantId() {
        return e(m);
      }, onChange: K }), x(te), p(L, te);
    };
    E(G, (L) => {
      i().variants.length > 1 && L(V);
    }), x(I), x(O), Ut(j(O, 2), { element: "span", class: "kaching-bundles__mix-and-match-choose-product__product-button", onclick: function() {
      g()({ product: i(), variant: e(z) });
    }, children: (L, te) => {
      pa();
      var ue = Un();
      be((R) => ht(ue, R), [() => o()(e(M))]), p(L, ue);
    }, $$slots: { default: !0 } }), x(U), p(n, U);
    var F = tt(A);
    return l(), F;
  }
  He(Od, { product: {}, dealBlock: {}, dealBar: {}, modal: {}, onChoose: {} }, [], [], !0);
  const P_ = { red: 0, green: 0, blue: 0, alpha: 0.5 }, S_ = { buttonSize: 16, textSize: 14, overlayColor: { red: 0, green: 0, blue: 0, alpha: 0.5 }, priceColor: { red: 0, green: 0, blue: 0, alpha: 1 }, compareAtPriceColor: { red: 128, green: 128, blue: 128, alpha: 1 }, textColor: { red: 0, green: 0, blue: 0, alpha: 1 }, buttonColor: { red: 0, green: 0, blue: 0, alpha: 1 }, buttonTextColor: { red: 255, green: 255, blue: 255, alpha: 1 }, productPhotoSize: 100, heading: "Select product", buttonText: "Choose" };
  var B_ = $('<img alt="Close"/>'), C_ = $('<div class="kaching-bundles__mix-and-match-choose-product__empty-state"> </div>'), I_ = $('<div class="kaching-bundles__mix-and-match-choose-product"><div class="kaching-bundles__mix-and-match-choose-product__header"><h2 class="kaching-bundles__mix-and-match-choose-product__heading"><!></h2> <!></div> <div class="kaching-bundles__mix-and-match-choose-product__products"><!></div></div>');
  function Bo(n, t) {
    et(t, !0);
    const r = () => ze(h, "$translate", a), [a, s] = vt(), o = k(t, "dealBlock", 7), c = k(t, "dealBar", 7), l = k(t, "products", 23, () => []), i = k(t, "onChoose", 7), u = k(t, "onClose", 7), h = It(), b = d(() => {
      var A;
      return (A = o().mixAndMatchChooseProductModal) != null ? A : S_;
    }), g = d(() => ((A) => bn({ "kaching-mix-and-match-choose-product-button-size": A.buttonSize + "px", "kaching-mix-and-match-choose-product-text-size": A.textSize + "px", "kaching-mix-and-match-choose-product-price-color": Re(A.priceColor), "kaching-mix-and-match-choose-product-compare-at-price-color": Re(A.compareAtPriceColor), "kaching-mix-and-match-choose-product-text-color": Re(A.textColor), "kaching-mix-and-match-choose-product-button-color": Re(A.buttonColor), "kaching-mix-and-match-choose-product-button-text-color": Re(A.buttonTextColor), "kaching-mix-and-match-choose-product-photo-size": A.productPhotoSize + "px" }))(e(b)));
    var f = { get dealBlock() {
      return o();
    }, set dealBlock(A) {
      o(A), _();
    }, get dealBar() {
      return c();
    }, set dealBar(A) {
      c(A), _();
    }, get products() {
      return l();
    }, set products(A = []) {
      l(A), _();
    }, get onChoose() {
      return i();
    }, set onChoose(A) {
      i(A), _();
    }, get onClose() {
      return u();
    }, set onClose(A) {
      u(A), _();
    } }, v = I_(), w = y(v), m = y(w), z = y(m), S = (A) => {
      var U = Un();
      be((O) => ht(U, O), [() => r()(e(b).heading)]), p(A, U);
    };
    E(z, (A) => {
      e(b).heading && A(S);
    }), x(m);
    var B = j(m, 2), q = (A) => {
      Ut(A, { element: "span", class: "kaching-bundles__mix-and-match-choose-product__close", get onclick() {
        return u();
      }, children: (U, O) => {
        var X = B_();
        be(() => we(X, "src", ho)), p(U, X);
      }, $$slots: { default: !0 } });
    };
    E(B, (A) => {
      u() && A(q);
    }), x(w);
    var Q = j(w, 2), W = y(Q), re = (A) => {
      var U = C_(), O = y(U, !0);
      x(U), be((X) => ht(O, X), [() => r()("system.no_products_available")]), p(A, U);
    }, M = (A) => {
      var U = Me();
      At(pe(U), 17, l, (O) => O.id, (O, X) => {
        Od(O, { get dealBlock() {
          return o();
        }, get dealBar() {
          return c();
        }, get modal() {
          return e(b);
        }, get product() {
          return e(X);
        }, get onChoose() {
          return i();
        } });
      }), p(A, U);
    };
    E(W, (A) => {
      l().length === 0 ? A(re) : A(M, !1);
    }), x(Q), x(v), be(() => Tt(v, e(g))), p(n, v);
    var K = tt(f);
    return s(), K;
  }
  function M_(n, t) {
    n.target === n.currentTarget && t()();
  }
  He(Bo, { dealBlock: {}, dealBar: {}, products: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var z_ = $('<div class="kaching-bundles"><div class="kaching-bundles__mix-and-match-choose-product-modal" role="none"><div class="kaching-bundles__mix-and-match-choose-product-modal__content"><!></div></div></div>');
  function Ld(n, t) {
    et(t, !0);
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
    } }, u = Me(), h = pe(u), b = (g) => {
      dl(g, { target: "body", children: (f, v) => {
        var w = z_(), m = y(w);
        m.__click = [M_, l];
        var z = y(m);
        Bo(y(z), { get dealBlock() {
          return r();
        }, get dealBar() {
          return a();
        }, get products() {
          return s();
        }, get onChoose() {
          return c();
        }, get onClose() {
          return l();
        } }), x(z), x(m), x(w), be((S) => Tt(m, S), [() => (function(S) {
          var B;
          return bn({ "kaching-mix-and-match-choose-product-overlay-color": Re(((B = S.mixAndMatchChooseProductModal) == null ? void 0 : B.overlayColor) || P_) });
        })(r())]), p(f, w);
      }, $$slots: { default: !0 } });
    };
    return E(h, (g) => {
      o() && g(b);
    }), p(n, u), tt(i);
  }
  On(["click"]), He(Ld, { dealBlock: {}, dealBar: {}, products: {}, isOpen: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var $_ = $('<img alt="" class="kaching-bundles__mix-and-match-product__image"/>'), D_ = $('<div class="kaching-bundles__mix-and-match-product__image-placeholder"></div>'), A_ = $('<div class="kaching-bundles__mix-and-match-product__title"> </div>'), V_ = $('<div class="kaching-bundles__mix-and-match-product__pricing"><!></div>'), T_ = $('<div class="kaching-bundles__mix-and-match-product"><!> <div class="kaching-bundles__mix-and-match-product__content"><!> <!> <!></div> <!> <!></div> <!>', 1);
  function jd(n, t) {
    et(t, !0);
    const [r, a] = vt();
    let s = k(t, "dealBlock", 7), o = k(t, "dealBar", 7), c = k(t, "bundleProduct", 7), l = k(t, "product", 7), i = k(t, "swapProducts", 7), u = k(t, "dealBarSelected", 7), h = k(t, "currentVariantId", 7), b = k(t, "mainVariantId", 7), g = k(t, "pricing", 7), f = k(t, "onSwap", 7), v = k(t, "onChange", 7);
    const w = un(), m = It();
    let z = Ae(void 0), S = Ae(!1);
    const B = d(() => u() && i().length > 1), q = d(() => ze(m, "$translate", r)(o().buttonText || "Change"));
    function Q() {
      se(S, !0);
    }
    function W(F) {
      se(S, !1), se(z, F.variant.id, !0), f()(F.product);
    }
    function re() {
      se(S, !1);
    }
    const M = d(() => {
      var F, L;
      return (L = (F = l()) == null ? void 0 : F.variants) != null ? L : [];
    }), K = d(() => {
      var F, L;
      return e(z) !== void 0 && e(M).some(({ id: te }) => te === e(z)) ? e(z) : c().productGID === "default" && h() && e(M).some(({ id: te }) => te === h()) ? h() : e(M).length > 0 ? (L = (F = e(M).find((te) => te.availableForSale)) == null ? void 0 : F.id) != null ? L : e(M)[0].id : void 0;
    }), A = d(() => {
      var F;
      return e(K) ? (F = l()) == null ? void 0 : F.variants.find((L) => L.id === e(K)) : void 0;
    }), U = d(() => {
      var F;
      return (F = l()) != null && F.url && e(A) ? `${l().url}?variant=${e(A).id}` : void 0;
    }), O = d(() => {
      var F, L;
      return ((F = e(A)) == null ? void 0 : F.image) || ((L = l()) == null ? void 0 : L.image);
    }), X = d(() => u() && l() && e(M).length > 1 && e(K)), Z = d(() => u() && c().productGID !== "default" ? e(U) : void 0), I = d(() => l() ? c().title ? dn({ priceFormatter: ze(w, "$formatPrice", r), product: l(), totalFullPrice: 0, totalDiscountedPrice: 0, quantity: 1, unitQuantity: null })(c().title) : l().title : "");
    function C(F) {
      se(z, F, !0);
    }
    let N;
    Xe(() => {
      e(A) && Jt(() => {
        v()({ variant: e(A), product: l() });
      });
    }), br(() => {
      c().productGID, se(z, void 0), N = void 0;
    }), br(() => {
      const F = c().productGID === "default";
      if (!(F || !s().disableVariantOptionSync)) return;
      const L = F ? h() : b();
      if (!L || !l() || L === N) return;
      const te = N;
      if (N = L, !e(M).some((P) => P.id === L)) return;
      const ue = e(z) === void 0, R = e(z) === te && te !== void 0;
      (ue || R) && se(z, L, !0);
    });
    var H = { get dealBlock() {
      return s();
    }, set dealBlock(F) {
      s(F), _();
    }, get dealBar() {
      return o();
    }, set dealBar(F) {
      o(F), _();
    }, get bundleProduct() {
      return c();
    }, set bundleProduct(F) {
      c(F), _();
    }, get product() {
      return l();
    }, set product(F) {
      l(F), _();
    }, get swapProducts() {
      return i();
    }, set swapProducts(F) {
      i(F), _();
    }, get dealBarSelected() {
      return u();
    }, set dealBarSelected(F) {
      u(F), _();
    }, get currentVariantId() {
      return h();
    }, set currentVariantId(F) {
      h(F), _();
    }, get mainVariantId() {
      return b();
    }, set mainVariantId(F) {
      b(F), _();
    }, get pricing() {
      return g();
    }, set pricing(F) {
      g(F), _();
    }, get onSwap() {
      return f();
    }, set onSwap(F) {
      f(F), _();
    }, get onChange() {
      return v();
    }, set onChange(F) {
      v(F), _();
    } }, J = Me(), oe = pe(J), G = (F) => {
      var L = T_(), te = pe(L), ue = y(te), R = (xe) => {
        Yn(xe, { get url() {
          return e(Z);
        }, class: "kaching-bundles__mix-and-match-product__image-link", children: (fe, ce) => {
          var ne = $_();
          we(ne, "height", 50), we(ne, "width", 50), be(() => we(ne, "src", e(O))), p(fe, ne);
        }, $$slots: { default: !0 } });
      }, P = (xe) => {
        p(xe, D_());
      };
      E(ue, (xe) => {
        e(O) ? xe(R) : xe(P, !1);
      });
      var D = j(ue, 2), ae = y(D);
      Yn(ae, { get url() {
        return e(Z);
      }, class: "kaching-bundles__mix-and-match-product__title-link", children: (xe, fe) => {
        var ce = A_(), ne = y(ce, !0);
        x(ce), be(() => ht(ne, e(I))), p(xe, ce);
      }, $$slots: { default: !0 } });
      var T = j(ae, 2);
      oa(T, { get dealBlock() {
        return s();
      }, get variant() {
        return e(A);
      } });
      var ee = j(T, 2), Y = (xe) => {
        {
          let fe = d(() => e(K) || 0);
          Hn(xe, { get product() {
            return l();
          }, get selectedVariantId() {
            return e(fe);
          }, onChange: C });
        }
      };
      E(ee, (xe) => {
        e(X) && xe(Y);
      }), x(D);
      var ie = j(D, 2), me = (xe) => {
        var fe = V_();
        us(y(fe), { get discountedPrice() {
          return g().discountedPrice;
        }, get fullPrice() {
          return g().fullPrice;
        }, unitPrice: null, unitPriceReference: null, ignoreUnitPrice: !0 }), x(fe), p(xe, fe);
      };
      E(ie, (xe) => {
        g() && xe(me);
      });
      var Ce = j(ie, 2), ve = (xe) => {
        Ut(xe, { element: "div", class: "kaching-bundles__mix-and-match-product__swap-button", onclick: Q, children: (fe, ce) => {
          pa();
          var ne = Un();
          be(() => ht(ne, e(q))), p(fe, ne);
        }, $$slots: { default: !0 } });
      };
      E(Ce, (xe) => {
        e(B) && xe(ve);
      }), x(te), Ld(j(te, 2), { get dealBlock() {
        return s();
      }, get dealBar() {
        return o();
      }, get products() {
        return i();
      }, get isOpen() {
        return e(S);
      }, onChoose: W, onClose: re }), p(F, L);
    };
    E(oe, (F) => {
      l() && F(G);
    }), p(n, J);
    var V = tt(H);
    return a(), V;
  }
  He(jd, { dealBlock: {}, dealBar: {}, bundleProduct: {}, product: {}, swapProducts: {}, dealBarSelected: {}, currentVariantId: {}, mainVariantId: {}, pricing: {}, onSwap: {}, onChange: {} }, [], [], !0);
  const Ed = (n, t) => {
    if (!t || t.length === 0) return n;
    const r = t.map(Qt);
    return { ...n, variants: n.variants.filter((a) => r.includes(a.id)) };
  };
  var q_ = Tn('<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 6.5V14.5M6.5 10.5H14.5M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Rd(n) {
    p(n, q_());
  }
  function G_(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  He(Rd, {}, [], [], !0);
  var F_ = $('<img class="kaching-bundles__bar-image" alt=""/>'), O_ = $('<div class="kaching-bundles__bar-radio"></div>'), L_ = $('<span class="kaching-bundles__bar-title"><!></span>'), j_ = $('<span class="kaching-bundles__bar-label"><!></span>'), E_ = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), R_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), N_ = $("<!> <!>", 1), Q_ = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), W_ = $('<div class="kaching-bundles__mix-and-match-products__placeholder"><span>Select product</span></div>'), U_ = $('<div class="kaching-bundles__mix-and-match-products__divider"><div class="kaching-bundles__mix-and-match-products__divider-line">&ZeroWidthSpace;</div> <div class="kaching-bundles__mix-and-match-products__divider-icon"><!></div> <div class="kaching-bundles__mix-and-match-products__divider-line">&ZeroWidthSpace;</div></div>'), H_ = $("<!> <!>", 1), Z_ = $("<div></div>"), J_ = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!></div> <!> <!> <!> <!>', 1), Y_ = $('<div><input type="radio"/> <!> <!></div>');
  function Nd(n, t) {
    et(t, !0);
    const r = () => ze(U, "$config", o), a = () => ze(K, "$formatPrice", o), s = () => ze(M, "$translate", o), [o, c] = vt(), l = k(t, "dealBlock", 7), i = k(t, "dealBar", 7), u = k(t, "product", 7), h = k(t, "otherProducts", 23, () => []), b = k(t, "complementaryProducts", 23, () => []), g = k(t, "currentVariantId", 7), f = k(t, "componentId", 7), v = k(t, "selectedDealBarIndex", 7), w = k(t, "selected", 7, !1), m = k(t, "sellingPlan", 7), z = k(t, "onProgressiveGiftsChange", 7), S = k(t, "onDealBarSelect", 7), B = k(t, "onDealBarDeselect", 7), q = k(t, "onVariantSelect", 7), Q = k(t, "onVariantsChange", 7), W = k(t, "onPersonalisationsChange", 7), re = k(t, "personalisationInitialValues", 23, () => []), M = It(), K = un(), A = Ln(), U = kn();
    let O = Ae(lt({})), X = Ae(lt({}));
    const Z = d(() => Object.fromEntries(i().bundleProducts.map((le) => [le.id, I(le).filter(C)])));
    function I(le) {
      var De;
      const qe = new Map(((De = le.selectedProducts) != null ? De : []).map(($e) => [Qt($e.id), $e.variantGIDs])), _e = h().filter(($e) => qe.has($e.id)).map(($e) => Ed($e, qe.get($e.id))), Ie = (function($e) {
        if (!$e) return;
        if ($e === "default") return u();
        const Pe = Qt($e);
        return h().find((Ge) => Ge.id === Pe);
      })(le.productGID);
      return Ie ? [Ed(Ie, le.variantGIDs), ..._e.filter(($e) => $e.id !== Ie.id)] : _e;
    }
    function C(le) {
      return le.availableForSale && le.variants.some((De) => De.availableForSale);
    }
    let N = Ae(lt([])), H = Ae(lt([])), J = Ae(lt([]));
    const oe = d(() => `${i().id}_${f()}`), G = d(() => i().bundleProducts.filter(({ productGID: le }) => le)), V = d(() => e(G).every((le) => ce(le))), F = d(() => i().showProductsOnlyWhenSelected && !w()), L = d(() => e(G).every((le) => {
      var De, qe;
      return ((qe = (De = e(Z)[le.id]) == null ? void 0 : De.length) != null ? qe : 0) > 0;
    })), te = d(() => {
      return l() ? (le = l(), De = e(O), i().bundleProducts.map((qe) => {
        const _e = De[qe.id];
        if (!_e) return 0;
        const { variant: Ie } = _e;
        let $e = Ie.price;
        return Ie.compareAtPrice && le.useProductCompareAtPrice && ($e = Math.max($e, Ie.compareAtPrice)), $e;
      }).reduce((qe, _e) => qe + _e, 0)) : 0;
      var le, De;
    }), ue = d(() => cl(e(te), e(N), e(H))), R = d(() => l().priceRounding ? { perItem: !1, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), P = d(() => l() ? ss(i(), e(O), r().currencyRate, e(R), m()) : 0), D = d(() => e(ue) > e(P)), ae = d(() => i().showProductPrices ? (function(le, De, qe, _e, Ie, $e) {
      const Pe = le.bundleProducts.filter(({ productGID: it }) => it).flatMap((it) => {
        const wt = De[it.id];
        if (!wt) return [];
        const Wt = Kn(wt.product, wt.variant, Ie), Gt = Wt ? oo(wt.variant.price, Wt) : wt.variant.price, { price: ut, compareAtPrice: Ft } = wt.variant, Yt = $e && Ft ? Math.max(ut, Ft) : ut;
        return [{ id: it.id, basisPrice: Gt, fullPrice: Yt }];
      }), Ge = Pe.reduce((it, wt) => it + wt.basisPrice, 0);
      if (Ge === 0) return Object.fromEntries(Pe.map((it) => [it.id, { discountedPrice: 0, fullPrice: it.fullPrice }]));
      const bt = ss(le, De, qe, _e, Ie), ot = Pe.map((it) => {
        const wt = bt * it.basisPrice / Ge;
        return { ...it, share: Math.floor(wt), remainder: wt % 1 };
      });
      let nt = bt - ot.reduce((it, { share: wt }) => it + wt, 0);
      for (const it of [...ot].sort((wt, Wt) => Wt.remainder - wt.remainder)) {
        if (nt <= 0) break;
        it.share += 1, nt -= 1;
      }
      return Object.fromEntries(ot.map((it) => [it.id, { discountedPrice: it.share, fullPrice: it.fullPrice }]));
    })(i(), e(O), r().currencyRate, e(R), m(), l().useProductCompareAtPrice) : void 0), T = d(() => {
      var le;
      const De = e(G)[0];
      if (De) return (le = e(O)[De.id]) == null ? void 0 : le.variant.id;
    }), ee = d(() => dn({ priceFormatter: a(), product: u(), dealBar: i(), totalFullPrice: e(te), totalCompareAtPrice: e(ue), totalDiscountedPrice: e(P), quantity: 1, unitQuantity: null, sellingPlan: m() })), Y = d(() => e(ee)(s()(i().title))), ie = d(() => e(ee)(s()(i().subtitle))), me = d(() => e(ee)(s()(i().label))), Ce = d(() => sl(l(), i()).map((le) => ya(le, s(), e(ee)))), ve = d(() => wa(e(Ce))), xe = d(() => ze(A, "$getMediaImageUrl", o)(i().mediaImageGID) || ul);
    function fe(le) {
      w() && (le.preventDefault(), le.stopPropagation(), B()());
    }
    function ce(le) {
      var De, qe;
      return (qe = e(X)[le.id]) != null ? qe : (De = e(Z)[le.id]) == null ? void 0 : De[0];
    }
    Ea(() => {
      w() && S()({ dealBarId: i().id, preselected: !0 });
    }), Xe(() => {
      w() && (ba(e(O)), ba(e(J)), ba(e(N)), ba(e(H)), m(), Jt(() => {
        (function() {
          if (!i().bundleProducts.map(({ id: Pe }) => Pe).every((Pe) => e(O)[Pe])) return;
          const le = [];
          for (const Pe of i().bundleProducts) {
            const Ge = e(O)[Pe.id];
            Ge && le.push({ id: Pe.id, variant: Ge.variant, product: Ge.product, quantity: 1 });
          }
          if (le.length === 0) return;
          const De = e(P) + e(J).reduce((Pe, Ge) => Pe + Ge.discountedPrice, 0), qe = e(N).reduce((Pe, Ge) => Ge.showPrice ? Pe + Ge.fullPrice : Pe, 0) + e(H).reduce((Pe, Ge) => Pe + Ge.fullPrice * Ge.quantity, 0), _e = e(te) + e(J).reduce((Pe, Ge) => Pe + Ge.fullPrice, 0) + qe, Ie = ss(i(), e(O), r().currencyRate, e(R), void 0), $e = u().sellingPlans.map((Pe) => ({ sellingPlanId: Pe.id, discountedPrice: ss(i(), e(O), r().currencyRate, e(R), Pe) }));
          Q()({ bundleProducts: le, freeGifts: [...e(N), ...e(H)], upsells: e(J), pricing: { discountedPrice: De, fullPrice: _e, giftValue: qe, discountedPricePerItem: e(P), fullPricePerItem: e(te), discountedPriceWithoutSellingPlan: Ie, discountedPricesForSellingPlans: $e } });
        })();
      }));
    });
    const ne = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? gl(i().showAsSoldOut) : "");
    var ge = { get dealBlock() {
      return l();
    }, set dealBlock(le) {
      l(le), _();
    }, get dealBar() {
      return i();
    }, set dealBar(le) {
      i(le), _();
    }, get product() {
      return u();
    }, set product(le) {
      u(le), _();
    }, get otherProducts() {
      return h();
    }, set otherProducts(le = []) {
      h(le), _();
    }, get complementaryProducts() {
      return b();
    }, set complementaryProducts(le = []) {
      b(le), _();
    }, get currentVariantId() {
      return g();
    }, set currentVariantId(le) {
      g(le), _();
    }, get componentId() {
      return f();
    }, set componentId(le) {
      f(le), _();
    }, get selectedDealBarIndex() {
      return v();
    }, set selectedDealBarIndex(le) {
      v(le), _();
    }, get selected() {
      return w();
    }, set selected(le = !1) {
      w(le), _();
    }, get sellingPlan() {
      return m();
    }, set sellingPlan(le) {
      m(le), _();
    }, get onProgressiveGiftsChange() {
      return z();
    }, set onProgressiveGiftsChange(le) {
      z(le), _();
    }, get onDealBarSelect() {
      return S();
    }, set onDealBarSelect(le) {
      S(le), _();
    }, get onDealBarDeselect() {
      return B();
    }, set onDealBarDeselect(le) {
      B(le), _();
    }, get onVariantSelect() {
      return q();
    }, set onVariantSelect(le) {
      q(le), _();
    }, get onVariantsChange() {
      return Q();
    }, set onVariantsChange(le) {
      Q(le), _();
    }, get onPersonalisationsChange() {
      return W();
    }, set onPersonalisationsChange(le) {
      W(le), _();
    }, get personalisationInitialValues() {
      return re();
    }, set personalisationInitialValues(le = []) {
      re(le), _();
    } }, Be = Me(), Se = pe(Be), Le = (le) => {
      var De = Y_();
      let qe;
      var _e = y(De);
      ra(_e), _e.__change = [G_, S, i];
      var Ie = j(_e, 2);
      Za(Ie, { get for() {
        return e(oe);
      }, get soldOut() {
        return i().showAsSoldOutEnabled;
      }, get borderHost() {
        return e(ve);
      }, children: (Ge, bt) => {
        var ot = J_(), nt = pe(ot);
        At(nt, 17, () => e(Ce), (Oe) => Oe.id, (Oe, Qe) => {
          sa(Oe, { get badge() {
            return e(Qe);
          }, get blockLayout() {
            return l().blockLayout;
          } });
        });
        var it = j(nt, 2), wt = y(it);
        Ut(wt, { element: "div", class: "kaching-bundles__bar-main", onclick: fe, children: (Oe, Qe) => {
          var Ke = Q_(), at = pe(Ke), kt = (Ze) => {
            var pt = F_();
            be(() => we(pt, "src", e(xe))), p(Ze, pt);
          }, Ye = (Ze) => {
            p(Ze, O_());
          };
          E(at, (Ze) => {
            i().mediaImageGID ? Ze(kt) : Ze(Ye, !1);
          });
          var ct = j(at, 2), Pt = y(ct), zt = y(Pt), Ot = y(zt);
          rt(Ot, () => e(Y), (Ze) => {
            var pt = L_();
            Te(y(pt), () => e(Y)), x(pt), p(Ze, pt);
          });
          var gn = j(Ot, 2), mn = (Ze) => {
            var pt = Me();
            rt(pe(pt), () => e(me), (st) => {
              var $t = j_();
              Te(y($t), () => e(me)), x($t), p(st, $t);
            }), p(Ze, pt);
          };
          E(gn, (Ze) => {
            e(me) && Ze(mn);
          }), x(zt);
          var Rt = j(zt, 2), nn = (Ze) => {
            var pt = Me();
            rt(pe(pt), () => e(ie), (st) => {
              var $t = E_();
              Te(y($t), () => e(ie)), x($t), p(st, $t);
            }), p(Ze, pt);
          };
          E(Rt, (Ze) => {
            e(ie) && Ze(nn);
          }), x(Pt);
          var rn = j(Pt, 2), ft = y(rn), Ne = (Ze) => {
            var pt = N_(), st = pe(pt);
            rt(st, () => e(P), (Dt) => {
              Rr(Dt, { get amount() {
                return e(P);
              }, showPricesPerItem: !1, get unitLabel() {
                return l().unitLabel;
              } });
            });
            var $t = j(st, 2), fn = (Dt) => {
              var Ht = Me();
              rt(pe(Ht), () => e(ue), (en) => {
                var Zt = R_();
                Te(y(Zt), () => a()(e(ue))), x(Zt), be((Bn) => we(Zt, "data-a11y-label", Bn), [() => s()("system.original_price")]), p(en, Zt);
              }), p(Dt, Ht);
            };
            E($t, (Dt) => {
              e(D) && Dt(fn);
            }), p(Ze, pt);
          };
          E(ft, (Ze) => {
            e(V) && Ze(Ne);
          }), x(rn), x(ct), p(Oe, Ke);
        }, $$slots: { default: !0 } });
        var Wt = j(wt, 2), Gt = (Oe) => {
          Sa(Oe, { get highlights() {
            return i().highlights;
          }, get isSelected() {
            return w();
          }, get replaceLiquid() {
            return e(ee);
          } });
        };
        E(Wt, (Oe) => {
          i().highlights && Oe(Gt);
        });
        var ut = j(Wt, 2), Ft = (Oe) => {
          var Qe = Z_();
          let Ke;
          At(Qe, 23, () => i().bundleProducts, (at) => at.id, (at, kt, Ye) => {
            var ct = H_(), Pt = pe(ct), zt = (Rt) => {
              {
                let nn = d(() => ce(e(kt))), rn = d(() => {
                  var ft;
                  return (ft = e(ae)) == null ? void 0 : ft[e(kt).id];
                });
                jd(Rt, { get bundleProduct() {
                  return e(kt);
                }, get product() {
                  return e(nn);
                }, get swapProducts() {
                  return e(Z)[e(kt).id];
                }, get dealBlock() {
                  return l();
                }, get dealBar() {
                  return i();
                }, get dealBarSelected() {
                  return w();
                }, get currentVariantId() {
                  return g();
                }, get mainVariantId() {
                  return e(T);
                }, get pricing() {
                  return e(rn);
                }, onSwap: (ft) => (function(Ne, Ze) {
                  e(X)[Ne] = Ze;
                })(e(kt).id, ft), onChange: (ft) => (function(Ne, Ze) {
                  const { variant: pt, product: st } = Ze;
                  e(O)[Ne] = { variant: pt, product: st }, w() && i().bundleProducts.map(({ id: $t }) => $t).every(($t) => e(O)[$t]) && Ne === i().bundleProducts[0].id && q()({ variantId: pt.id });
                })(e(kt).id, ft) });
              }
            }, Ot = (Rt) => {
              var nn = Me(), rn = pe(nn), ft = (Ne) => {
                p(Ne, W_());
              };
              E(rn, (Ne) => {
                r().preview && Ne(ft);
              }, !0), p(Rt, nn);
            };
            E(Pt, (Rt) => {
              e(kt).productGID ? Rt(zt) : Rt(Ot, !1);
            });
            var gn = j(Pt, 2), mn = (Rt) => {
              var nn = U_(), rn = j(y(nn), 2);
              Rd(y(rn)), x(rn), pa(2), x(nn), p(Rt, nn);
            };
            E(gn, (Rt) => {
              e(Ye) < i().bundleProducts.length - 1 && Rt(mn);
            }), p(at, ct);
          }), x(Qe), be((at) => Ke = Et(Qe, 1, "kaching-bundles__mix-and-match-products", null, Ke, at), [() => ({ "kaching-bundles__mix-and-match-products--hidden": e(F) })]), p(Oe, Qe);
        };
        E(ut, (Oe) => {
          e(V) && Oe(Ft);
        });
        var Yt = j(ut, 2), ye = (Oe) => {
          {
            let Qe = d(() => e(T) ? [e(T)] : []);
            Ja(Oe, { get product() {
              return u();
            }, get productPersonalisation() {
              return i().productPersonalisation;
            }, get selectedVariantIds() {
              return e(Qe);
            }, quantity: 1, get addPersonalisationModal() {
              return l().addPersonalisationModal;
            }, get onPersonalisationsChange() {
              return W();
            }, get initialValues() {
              return re();
            } });
          }
        };
        E(Yt, (Oe) => {
          w() && i().productPersonalisation && (l().blockLayout === "vertical" || l().blockLayout === "plain") && Oe(ye);
        }), x(it);
        var he = j(it, 2);
        {
          let Oe = d(() => i().upsells || []);
          Bi(he, { get dealBlock() {
            return l();
          }, get dealBarId() {
            return i().id;
          }, get upsells() {
            return e(Oe);
          }, get otherProducts() {
            return h();
          }, get complementaryProducts() {
            return b();
          }, get dealBarSelected() {
            return w();
          }, get dealSellingPlan() {
            return m();
          }, sets: 1, onChange: (Qe) => {
            se(J, Qe, !0);
          } });
        }
        var Fe = j(he, 2);
        {
          let Oe = d(() => ({ ...i(), dealBarType: gt.Bundle, quantitySelector: !1, bundleProducts: i().bundleProducts.map((Qe) => ({ ...Qe, quantity: 1, variantGIDs: null, defaultVariantGID: null, mediaImageGID: null, discountType: "default", discountValue: 0 })) }));
          Mi(Fe, { get selectedDealBarIndex() {
            return v();
          }, get onChange() {
            return z();
          }, get dealBlock() {
            return l();
          }, get sellingPlan() {
            return m();
          }, get dealBar() {
            return e(Oe);
          }, get otherProducts() {
            return h();
          }, get selected() {
            return w();
          }, get progressiveGifts() {
            return l().progressiveGifts;
          } });
        }
        var Ue = j(Fe, 2);
        {
          let Oe = d(() => i().freeGifts || []);
          Si(Ue, { get dealBlock() {
            return l();
          }, get freeGifts() {
            return e(Oe);
          }, get freeGiftsSummary() {
            return i().freeGiftsSummary;
          }, get otherProducts() {
            return h();
          }, get dealBarSelected() {
            return w();
          }, get sellingPlan() {
            return m();
          }, sets: 1, onChange: (Qe) => {
            se(N, Qe, !0);
          } });
        }
        var Je = j(Ue, 2);
        {
          let Oe = d(() => i().multipleGiftsSelectors || []);
          Ii(Je, { get dealBlock() {
            return l();
          }, get multipleGiftsSelectors() {
            return e(Oe);
          }, get sellingPlan() {
            return m();
          }, get otherProducts() {
            return h();
          }, onChange: (Qe) => {
            se(H, Qe, !0);
          } });
        }
        p(Ge, ot);
      }, $$slots: { default: !0 } });
      var $e = j(Ie, 2), Pe = (Ge) => {
        Ci(Ge, { get showAsSoldOut() {
          return i().showAsSoldOut;
        }, get replaceLiquid() {
          return e(ee);
        } });
      };
      E($e, (Ge) => {
        i().showAsSoldOutEnabled && i().showAsSoldOut && Ge(Pe);
      }), x(De), be((Ge) => {
        var bt;
        qe = Et(De, 1, "kaching-bundles__bar", null, qe, Ge), we(De, "data-deal-bar-id", i().id), Tt(De, e(ne)), we(_e, "name", `kaching-bundles-deal-${(bt = f()) != null ? bt : ""}`), Ra(_e, i().id), we(_e, "id", e(oe)), el(_e, w()), _e.disabled = i().showAsSoldOutEnabled;
      }, [() => ({ "kaching-bundles__bar--selected": w(), "kaching-bundles__bar--disabled": !e(L) && r().preview })]), p(le, De);
    };
    E(Se, (le) => {
      (e(L) || r().preview) && le(Le);
    }), p(n, Be);
    var Ve = tt(ge);
    return c(), Ve;
  }
  On(["change"]), He(Nd, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, currentVariantId: {}, componentId: {}, selectedDealBarIndex: {}, selected: {}, sellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var K_ = Tn('<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.2008 16C27.2008 18.9705 26.0208 21.8192 23.9204 23.9196C21.82 26.0201 18.9712 27.2 16.0008 27.2C13.0304 27.2 10.1816 26.0201 8.08119 23.9196C5.98078 21.8192 4.80078 18.9705 4.80078 16C4.80078 13.0296 5.98078 10.1809 8.08119 8.08045C10.1816 5.98005 13.0304 4.80005 16.0008 4.80005C18.9712 4.80005 21.82 5.98005 23.9204 8.08045C26.0208 10.1809 27.2008 13.0296 27.2008 16ZM10.0008 16C10.0008 15.6818 10.1272 15.3766 10.3523 15.1515C10.5773 14.9265 10.8825 14.8 11.2008 14.8H14.8008V11.2C14.8008 10.8818 14.9272 10.5766 15.1523 10.3515C15.3773 10.1265 15.6825 10 16.0008 10C16.319 10 16.6243 10.1265 16.8493 10.3515C17.0744 10.5766 17.2008 10.8818 17.2008 11.2V14.8H20.8008C21.119 14.8 21.4243 14.9265 21.6493 15.1515C21.8744 15.3766 22.0008 15.6818 22.0008 16C22.0008 16.3183 21.8744 16.6235 21.6493 16.8486C21.4243 17.0736 21.119 17.2 20.8008 17.2H17.2008V20.8C17.2008 21.1183 17.0744 21.4235 16.8493 21.6486C16.6243 21.8736 16.319 22 16.0008 22C15.6825 22 15.3773 21.8736 15.1523 21.6486C14.9272 21.4235 14.8008 21.1183 14.8008 20.8V17.2H11.2008C10.8825 17.2 10.5773 17.0736 10.3523 16.8486C10.1272 16.6235 10.0008 16.3183 10.0008 16Z" fill="currentColor"></path></svg>');
  function Qd(n, t) {
    et(t, !0);
    let r = k(t, "class", 7);
    var a = { get class() {
      return r();
    }, set class(o) {
      r(o), _();
    } }, s = K_();
    return be(() => Et(s, 0, Ki(r()))), p(n, s), tt(a);
  }
  He(Qd, { class: {} }, [], [], !0);
  const Co = aa({}), Io = aa(!1);
  function pl(n) {
    Io.set(n);
  }
  function ds(n, t) {
    Co.update((r) => ({ ...r, [n]: t }));
  }
  const X_ = (n) => {
    const { collectionBreaks: t, colors: r, cornerRadius: a } = n;
    return t ? bn({ "kaching-collection-breaks-product-photo-size": t.productPhotoSize + "px", "kaching-collection-breaks-button-color": t.buttonColor && Re(t.buttonColor), "kaching-collection-breaks-product-title-color": Re(r.title), "kaching-collection-breaks-image-border-radius": (a || 0) / 2 + "px" }) : "";
  };
  function e0(n, t) {
    n.target === n.currentTarget && se(t, !1);
  }
  var t0 = $('<img class="kaching-bundles__collection-product__image" alt=""/>'), n0 = $('<span class="kaching-bundles__collection-product__title"> </span>'), r0 = $("<!> <!>", 1), a0 = $('<img alt=""/>'), i0 = $('<div class="kaching-bundles__collection-product"><div class="kaching-bundles__collection-product__main"><!> <div class="kaching-bundles__collection-product__content"><!> <!> <!></div></div> <!></div>'), l0 = $('<img class="kaching-bundles__collection-product__image" alt="" height="40" width="40"/>'), s0 = $('<div class="kaching-bundles"><div class="kaching-bundles__choose-product-modal" role="none"><div class="kaching-bundles__choose-product-modal__content"><!></div></div></div>'), o0 = $('<div><div class="kaching-bundles__collection-product__main"><!> <!></div> <!></div>');
  function Mo(n, t) {
    et(t, !0);
    const r = () => ze(v, "$config", a), [a, s] = vt(), o = k(t, "dealBlock", 7), c = k(t, "dealBar", 7), l = k(t, "mainProduct", 7, null), i = k(t, "products", 7), u = k(t, "selectedProductVariant", 7, null), h = k(t, "onChange", 7), b = k(t, "onRemove", 7), g = It(), f = Ln(), v = kn();
    let w = Ae(!1);
    const m = d(() => o().collectionBreaks), z = d(() => {
      var H;
      return ((H = u()) == null ? void 0 : H.product) || l();
    }), S = d(() => {
      var H, J;
      return ((H = u()) == null ? void 0 : H.variant) || ((J = e(z)) == null ? void 0 : J.variants[0]) || null;
    }), B = d(() => ze(f, "$getMediaImageUrl", a)(e(m).mediaImageGID)), q = d(() => ze(g, "$translate", a)(e(m).buttonText)), Q = d(() => e(m).requireItemSelectionAlert), W = d(() => e(m).requireItemSelectionEnabled), re = d(() => r().preview && r().previewAlerts || ze(Io, "$requireSelectionError", a)), M = d(() => {
      var H, J;
      return (H = e(z)) != null && H.url ? `${e(z).url}?variant=${(J = e(S)) == null ? void 0 : J.id}` : void 0;
    });
    function K(H) {
      se(w, !1), h()(H);
    }
    function A() {
      var H;
      (H = b()) == null || H();
    }
    function U(H) {
      const J = e(z).variants.find((oe) => oe.id === H);
      J && h()({ product: e(z), variant: J });
    }
    var O = { get dealBlock() {
      return o();
    }, set dealBlock(H) {
      o(H), _();
    }, get dealBar() {
      return c();
    }, set dealBar(H) {
      c(H), _();
    }, get mainProduct() {
      return l();
    }, set mainProduct(H = null) {
      l(H), _();
    }, get products() {
      return i();
    }, set products(H) {
      i(H), _();
    }, get selectedProductVariant() {
      return u();
    }, set selectedProductVariant(H = null) {
      u(H), _();
    }, get onChange() {
      return h();
    }, set onChange(H) {
      h(H), _();
    }, get onRemove() {
      return b();
    }, set onRemove(H) {
      b(H), _();
    } }, X = Me(), Z = pe(X), I = (H) => {
      var J = i0(), oe = y(J), G = y(oe);
      {
        let D = d(() => l() ? void 0 : e(M));
        Yn(G, { get url() {
          return e(D);
        }, class: "kaching-bundles__collection-product__link", children: (ae, T) => {
          var ee = t0();
          be(() => we(ee, "src", e(S).image || e(z).image)), p(ae, ee);
        }, $$slots: { default: !0 } });
      }
      var V = j(G, 2), F = y(V), L = (D) => {
        {
          let ae = d(() => l() ? void 0 : e(M));
          Yn(D, { get url() {
            return e(ae);
          }, class: "kaching-bundles__collection-product__link", children: (T, ee) => {
            var Y = n0(), ie = y(Y, !0);
            x(Y), be(() => ht(ie, e(z).title)), p(T, Y);
          }, $$slots: { default: !0 } });
        }
      };
      E(F, (D) => {
        e(m).showProductName && D(L);
      });
      var te = j(F, 2), ue = (D) => {
        var ae = r0(), T = pe(ae);
        ia(T, { get product() {
          return e(z);
        } });
        var ee = j(T, 2);
        {
          let Y = d(() => {
            var ie;
            return (ie = e(S)) == null ? void 0 : ie.id;
          });
          Hn(ee, { get product() {
            return e(z);
          }, get selectedVariantId() {
            return e(Y);
          }, onChange: U });
        }
        p(D, ae);
      };
      E(te, (D) => {
        e(z).variants.length > 1 && D(ue);
      }), oa(j(te, 2), { get dealBlock() {
        return o();
      }, get variant() {
        return e(S);
      } }), x(V), x(oe);
      var R = j(oe, 2), P = (D) => {
        Ut(D, { element: "div", class: "kaching-bundles__collection-product__remove-button", "aria-label": "Remove product", onclick: A, children: (ae, T) => {
          var ee = a0();
          be(() => we(ee, "src", "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), p(ae, ee);
        }, $$slots: { default: !0 } });
      };
      E(R, (D) => {
        l() || D(P);
      }), x(J), p(H, J);
    }, C = (H) => {
      var J = o0();
      let oe;
      var G = y(J), V = y(G);
      Ut(V, { element: "div", class: "kaching-bundles__collection-product__choose-product-image", onclick: () => {
        se(w, !0);
      }, children: (R, P) => {
        var D = Me(), ae = pe(D), T = (Y) => {
          var ie = Me(), me = pe(ie), Ce = (ve) => {
            var xe = l0();
            be(() => we(xe, "src", e(B))), p(ve, xe);
          };
          E(me, (ve) => {
            e(B) && ve(Ce);
          }), p(Y, ie);
        }, ee = (Y) => {
          Qd(Y, { class: "kaching-bundles__collection-product__image kaching-bundles__collection-product__image--default" });
        };
        E(ae, (Y) => {
          e(m).mediaImageGID ? Y(T) : Y(ee, !1);
        }), p(R, D);
      }, $$slots: { default: !0 } });
      var F = j(V, 2), L = (R) => {
        Ut(R, { element: "div", class: "kaching-bundles__collection-product__choose-product-button", onclick: () => {
          se(w, !0);
        }, children: (P, D) => {
          pa();
          var ae = Un();
          be(() => ht(ae, e(q))), p(P, ae);
        }, $$slots: { default: !0 } });
      };
      E(F, (R) => {
        e(q) && R(L);
      }), x(G);
      var te = j(G, 2), ue = (R) => {
        dl(R, { target: "body", children: (P, D) => {
          var ae = s0(), T = y(ae);
          T.__click = [e0, w];
          var ee = y(T);
          po(y(ee), { get dealBlock() {
            return o();
          }, get dealBar() {
            return c();
          }, get products() {
            return i();
          }, onChoose: K, onClose: () => {
            se(w, !1);
          } }), x(ee), x(T), x(ae), be((Y) => Tt(T, Y), [() => (function(Y) {
            return bn({ "kaching-choose-product-overlay-color": Re(Y.chooseProductModal.overlayColor) });
          })(o())]), p(P, ae);
        }, $$slots: { default: !0 } });
      };
      E(te, (R) => {
        e(w) && R(ue);
      }), x(J), be((R) => oe = Et(J, 1, "kaching-bundles__collection-product", null, oe, R), [() => ({ "kaching-bundles__collection-product--require-selection": e(re) && e(W) && e(Q) })]), p(H, J);
    };
    E(Z, (H) => {
      e(z) && e(S) ? H(I) : H(C, !1);
    }), p(n, X);
    var N = tt(O);
    return s(), N;
  }
  function c0(n, t, r, a) {
    t()({ dealBarId: r().id, dealBarQuantity: a(r()), preselected: !1 });
  }
  On(["click"]), He(Mo, { dealBlock: {}, dealBar: {}, mainProduct: {}, products: {}, selectedProductVariant: {}, onChange: {}, onRemove: {} }, [], [], !0);
  var u0 = $('<img class="kaching-bundles__bar-image" alt=""/>'), d0 = $('<div class="kaching-bundles__bar-radio"></div>'), g0 = $('<span class="kaching-bundles__bar-title"><!></span>'), h0 = $('<span class="kaching-bundles__bar-label"><!></span>'), p0 = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), b0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), f0 = $('<div class="kaching-bundles__bar-price"><!></div>'), v0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), _0 = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), k0 = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), m0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), x0 = $("<!> <!>", 1), y0 = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), w0 = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), P0 = $('<div class="kaching-bundles__bar-collection-products"></div>'), S0 = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), B0 = $('<div><input type="radio"/> <!> <!></div>');
  function Wd(n, t) {
    et(t, !0);
    const r = () => ze(Z, "$config", c), a = () => ze(Co, "$chosenCollectionBreaksProducts", c), s = () => ze(O, "$formatPrice", c), o = () => ze(U, "$translate", c), [c, l] = vt();
    let i = k(t, "dealBlock", 7), u = k(t, "dealBar", 7), h = k(t, "product", 7), b = k(t, "collectionBreaksProducts", 23, () => []), g = k(t, "otherProducts", 23, () => []), f = k(t, "selectedDealBarIndex", 7, null), v = k(t, "complementaryProducts", 23, () => []), w = k(t, "customQuantity", 7, void 0), m = k(t, "currentVariantId", 7, void 0), z = k(t, "componentId", 7), S = k(t, "selected", 7, !1), B = k(t, "globalSellingPlan", 7, void 0), q = k(t, "onDealBarSelect", 7), Q = k(t, "onDealBarDeselect", 7), W = k(t, "onVariantSelect", 7), re = k(t, "onVariantsChange", 7), M = k(t, "onPersonalisationsChange", 7), K = k(t, "personalisationInitialValues", 23, () => []), A = k(t, "onProgressiveGiftsChange", 7);
    const U = It(), O = un(), X = Ln(), Z = kn();
    let I = Ae(lt([])), C = Ae(lt([])), N = Ae(lt([]));
    const H = new $v(), J = d(() => {
      var he, Fe;
      return (Fe = (he = i().collectionBreaks) == null ? void 0 : he.autoFillNotChosenItems) != null && Fe;
    }), oe = d(() => i().priceRounding ? { perItem: i().showPricesPerItem, precision: i().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), G = d(() => {
      var he, Fe;
      return i() && ((Fe = (he = i().defaultVariantsV2) == null ? void 0 : he.find((Ue) => Qt(Ue.productGID) === h().id && Ue.dealBarId === u().id)) == null ? void 0 : Fe.variantGIDs) || [];
    });
    let V = d(() => te(u())), F = Ae(lt(te(u())));
    br(() => {
      se(F, e(V), !0);
    });
    const L = d(() => w() || e(F));
    function te(he) {
      return he.dealBarType === gt.Bxgy ? he.buyQuantity + he.getQuantity : Number(he.quantity);
    }
    Xe(() => {
      m() && Jt(() => {
        (function(he, Fe) {
          if (Object.keys(a()).length === 0 && he[0]) {
            const Je = Qt(he[0]), Oe = h().variants.find((Qe) => Qe.id == Je);
            if (Oe) return void ds(0, { product: h(), variant: Oe });
          }
          const Ue = h().variants.find((Je) => Je.id == Fe);
          if (Ue) return void ds(0, { product: h(), variant: Ue });
          Object.keys(a()).length === 0 && h().variants[0] && ds(0, { product: h(), variant: h().variants[0] });
        })(e(G), m());
      });
    }), Xe(() => {
      S() || H.clear();
    });
    const ue = d(() => b().length === 0 || b().some((he) => he.id === h().id)), R = d(() => {
      const he = Object.fromEntries(Object.entries(a()).filter(([Ue]) => Number(Ue) < e(L)));
      if (!S() || !e(J)) return he;
      const Fe = { ...he };
      for (let Ue = 1; Ue < e(L); Ue++) Fe[Ue] || H.has(Ue) || (e(ue) && he[0] ? Fe[Ue] = { product: h(), variant: he[0].variant } : he[1] && (Fe[Ue] = { product: he[1].product, variant: he[1].variant }));
      return Fe;
    }), P = d(() => S() ? Object.values(e(R)).map((he) => ({ variant: he.variant, quantity: 1 })) : []), D = d(() => (function({ selectedProductVariants: he, mainProductIsInCollection: Fe, collectionBreaksProducts: Ue, dealBlock: Je, quantity: Oe }) {
      var Qe;
      const Ke = he.map((Pt) => ({ quantity: 1, variant: Pt.variant }));
      if (Ke.length === 0 || Ke.length >= Oe || (Qe = Je.collectionBreaks) != null && Qe.showChosenProductsPriceOnly) return Ke;
      const at = Oe - Ke.length;
      if (Fe) {
        const Pt = Array.from({ length: at }, () => Ke[0]);
        return [...Ke, ...Pt];
      }
      const kt = Ue.flatMap((Pt) => Pt.variants).filter((Pt) => Pt.availableForSale);
      if (kt.length === 0) return Ke;
      const Ye = kt.reduce((Pt, zt) => zt.price < Pt.price ? zt : Pt, kt[0]), ct = Array.from({ length: at }, () => ({ quantity: 1, variant: Ye }));
      return [...Ke, ...ct];
    })({ selectedProductVariants: Object.values(e(R)), mainProductIsInCollection: e(ue), collectionBreaksProducts: b(), dealBlock: i(), quantity: e(L) }));
    let ae = Ae(void 0);
    const T = d(() => ll(h(), e(D).map((he) => he.variant))), ee = d(() => {
      var he, Fe;
      return (u().sellingPlanEnabled || i().subscriptionsEnabled && ((he = i().subscriptions) == null ? void 0 : he.layout) === "link" && ((Fe = i().subscriptions) == null ? void 0 : Fe.subscribeByDefault)) && (!i().subscriptionsEnabled || !!B());
    }), Y = d(() => e(ee) ? co(u(), e(T), e(ae)) : void 0), ie = d(() => uo(e(Y), B(), e(T), h().requiresSellingPlan)), me = d(() => new Set(h().variants.map((he) => he.id))), Ce = d(() => Object.values(e(R)).filter((he) => e(me).has(he.variant.id))), ve = d(() => (function(he, Fe, Ue) {
      return Ue.map(({ variant: Oe, quantity: Qe }) => {
        let Ke = Oe.price;
        const at = he.useProductCompareAtPrice || (Fe.dealBarType === void 0 || Fe.dealBarType === gt.QuantityBreak) && Fe.discountType === "default";
        return Oe.compareAtPrice && at && (Ke = Math.max(Ke, Oe.compareAtPrice)), Ke * Qe;
      }).reduce((Oe, Qe) => Oe + Qe, 0);
    })(i(), u(), e(D))), xe = d(() => cl(e(ve), e(I), e(C))), fe = d(() => Math.ceil(e(ve) / e(D).length)), ce = d(() => bo(e(L) === 1, e(xe), e(fe))), ne = d(() => i() && De(e(D), e(ie))), ge = d(() => dn({ priceFormatter: s(), product: h(), selectedVariants: e(P), dealBar: u(), totalFullPrice: e(ve), totalCompareAtPrice: e(xe), totalDiscountedPrice: e(ne), quantity: e(L), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: mr(e(D)), sellingPlan: e(ie) })), Be = d(() => e(ge)(o()(u().title))), Se = d(() => e(ge)(o()(u().subtitle))), Le = d(() => e(ge)(o()(u().label))), Ve = d(() => sl(i(), u()).map((he) => ya(he, o(), e(ge)))), le = d(() => wa(e(Ve)));
    function De(he, Fe) {
      switch (u().dealBarType) {
        case void 0:
        case gt.QuantityBreak:
          return Ku(u(), he, r().currencyRate, e(oe), Fe, r().featureFlags.percentage_cents_rounding_workaround);
        case gt.Bxgy:
          return Xu(u(), he, r().currencyRate, e(oe), Fe);
      }
    }
    const qe = d(() => Math.ceil(e(ne) / e(D).length)), _e = d(() => e(xe) > e(ne)), Ie = d(() => `${u().id}_${z()}`);
    function $e(he) {
      S() && (he.preventDefault(), he.stopPropagation(), Q()());
    }
    Ea(() => {
      S() && q()({ dealBarId: u().id, dealBarQuantity: te(u()), preselected: !0 });
    });
    const Pe = d(() => ze(X, "$getMediaImageUrl", c)(u().mediaImageGID) || ul);
    Xe(() => {
      var he;
      S() && Object.keys(e(R)).length > 0 && (e(N), e(I), e(C), e(ie), (he = i().collectionBreaks) == null || he.requireItemSelectionEnabled, Jt(() => {
        (function() {
          var Fe, Ue;
          const Je = Object.values(e(R)).map((Ot) => ({ variant: Ot.variant, product: Ot.product, quantity: 1 })), Oe = e(ne) + e(N).reduce((Ot, gn) => Ot + gn.discountedPrice, 0), Qe = e(I).reduce((Ot, gn) => gn.showPrice ? Ot + gn.fullPrice : Ot, 0) + e(C).reduce((Ot, gn) => Ot + gn.fullPrice * gn.quantity, 0), Ke = e(ve) + e(N).reduce((Ot, gn) => Ot + gn.fullPrice, 0) + Qe, at = De(e(D), void 0), kt = h().sellingPlans.map((Ot) => ({ sellingPlanId: Ot.id, discountedPrice: De(e(D), Ot) })), Ye = (Ue = (Fe = i().collectionBreaks) == null ? void 0 : Fe.requireItemSelectionEnabled) != null && Ue, ct = Je.length, Pt = !Ye || ct >= e(L), zt = Ye ? Math.max(0, e(L) - ct) : 0;
          re()({ variants: Je, freeGifts: [...e(I), ...e(C)], upsells: e(N), dealBarSellingPlan: e(Y), pricing: { discountedPrice: Oe, fullPrice: Ke, giftValue: Qe, discountedPricePerItem: e(qe), fullPricePerItem: e(fe), discountedPriceWithoutSellingPlan: at, discountedPricesForSellingPlans: kt }, validation: { requiresItemSelection: Ye, allItemsSelected: Pt, missingItemsCount: zt } });
        })();
      }));
    });
    const Ge = d(() => u().showAsSoldOutEnabled && u().showAsSoldOut ? gl(u().showAsSoldOut) : ""), bt = d(() => [X_(i()), e(Ge)].filter(Boolean).join(";"));
    function ot(he, Fe) {
      he === 0 && W()({ variantId: Fe.variant.id }), ds(he, Fe), pl(!1), e(J) && H.delete(he);
    }
    function nt(he) {
      (function(Fe) {
        Co.update((Ue) => {
          const { [Fe]: Je, ...Oe } = Ue;
          return Oe;
        });
      })(he), e(J) && H.add(he);
    }
    var it = { get dealBlock() {
      return i();
    }, set dealBlock(he) {
      i(he), _();
    }, get dealBar() {
      return u();
    }, set dealBar(he) {
      u(he), _();
    }, get product() {
      return h();
    }, set product(he) {
      h(he), _();
    }, get collectionBreaksProducts() {
      return b();
    }, set collectionBreaksProducts(he = []) {
      b(he), _();
    }, get otherProducts() {
      return g();
    }, set otherProducts(he = []) {
      g(he), _();
    }, get selectedDealBarIndex() {
      return f();
    }, set selectedDealBarIndex(he = null) {
      f(he), _();
    }, get complementaryProducts() {
      return v();
    }, set complementaryProducts(he = []) {
      v(he), _();
    }, get customQuantity() {
      return w();
    }, set customQuantity(he = void 0) {
      w(he), _();
    }, get currentVariantId() {
      return m();
    }, set currentVariantId(he = void 0) {
      m(he), _();
    }, get componentId() {
      return z();
    }, set componentId(he) {
      z(he), _();
    }, get selected() {
      return S();
    }, set selected(he = !1) {
      S(he), _();
    }, get globalSellingPlan() {
      return B();
    }, set globalSellingPlan(he = void 0) {
      B(he), _();
    }, get onDealBarSelect() {
      return q();
    }, set onDealBarSelect(he) {
      q(he), _();
    }, get onDealBarDeselect() {
      return Q();
    }, set onDealBarDeselect(he) {
      Q(he), _();
    }, get onVariantSelect() {
      return W();
    }, set onVariantSelect(he) {
      W(he), _();
    }, get onVariantsChange() {
      return re();
    }, set onVariantsChange(he) {
      re(he), _();
    }, get onPersonalisationsChange() {
      return M();
    }, set onPersonalisationsChange(he) {
      M(he), _();
    }, get personalisationInitialValues() {
      return K();
    }, set personalisationInitialValues(he = []) {
      K(he), _();
    }, get onProgressiveGiftsChange() {
      return A();
    }, set onProgressiveGiftsChange(he) {
      A(he), _();
    } }, wt = B0();
    let Wt;
    var Gt = y(wt);
    ra(Gt), Gt.__change = [c0, q, u, te];
    var ut = j(Gt, 2);
    Za(ut, { get for() {
      return e(Ie);
    }, get soldOut() {
      return u().showAsSoldOutEnabled;
    }, get borderHost() {
      return e(le);
    }, children: (he, Fe) => {
      var Ue = S0(), Je = pe(Ue);
      At(Je, 17, () => e(Ve), (Ne) => Ne.id, (Ne, Ze) => {
        sa(Ne, { get badge() {
          return e(Ze);
        }, get blockLayout() {
          return i().blockLayout;
        } });
      });
      var Oe = j(Je, 2), Qe = y(Oe);
      Ut(Qe, { element: "div", class: "kaching-bundles__bar-main", onclick: $e, children: (Ne, Ze) => {
        var pt = y0(), st = pe(pt), $t = (Bt) => {
          var Ct = u0();
          be(() => we(Ct, "src", e(Pe))), p(Bt, Ct);
        }, fn = (Bt) => {
          p(Bt, d0());
        };
        E(st, (Bt) => {
          u().mediaImageGID ? Bt($t) : Bt(fn, !1);
        });
        var Dt = j(st, 2), Ht = y(Dt), en = y(Ht), Zt = y(en);
        rt(Zt, () => e(Be), (Bt) => {
          var Ct = g0();
          Te(y(Ct), () => e(Be)), x(Ct), p(Bt, Ct);
        });
        var Bn = j(Zt, 2), hn = (Bt) => {
          var Ct = Me();
          rt(pe(Ct), () => e(Le), (_t) => {
            var Mt = h0();
            Te(y(Mt), () => e(Le)), x(Mt), p(_t, Mt);
          }), p(Bt, Ct);
        };
        E(Bn, (Bt) => {
          e(Le) && Bt(hn);
        }), x(en);
        var vn = j(en, 2), Xn = (Bt) => {
          var Ct = Me();
          rt(pe(Ct), () => e(Se), (_t) => {
            var Mt = p0();
            Te(y(Mt), () => e(Se)), x(Mt), p(_t, Mt);
          }), p(Bt, Ct);
        };
        E(vn, (Bt) => {
          e(Se) && Bt(Xn);
        }), x(Ht);
        var ar = j(Ht, 2), xr = y(ar), qn = (Bt) => {
          var Ct = k0(), _t = pe(Ct), Mt = y(_t);
          rt(Mt, () => e(qe), (ln) => {
            Rr(ln, { get amount() {
              return e(qe);
            }, get showPricesPerItem() {
              return i().showPricesPerItem;
            }, get unitLabel() {
              return i().unitLabel;
            } });
          });
          var an = j(Mt, 2), tn = (ln) => {
            var pn = Me();
            rt(pe(pn), () => e(ce), (yn) => {
              var $n = b0();
              Te(y($n), () => s()(e(ce))), x($n), be((En) => we($n, "data-a11y-label", En), [() => o()("system.original_price")]), p(yn, $n);
            }), p(ln, pn);
          };
          E(an, (ln) => {
            e(_e) && ln(tn);
          }), x(_t);
          var jn = j(_t, 2), xn = (ln) => {
            var pn = _0(), yn = y(pn);
            rt(yn, () => e(ne), (wn) => {
              var Pn = f0();
              Te(y(Pn), () => s()(e(ne))), x(Pn), be((on) => we(Pn, "data-a11y-label", on), [() => o()("system.price")]), p(wn, Pn);
            });
            var $n = j(yn, 2), En = (wn) => {
              var Pn = Me();
              rt(pe(Pn), () => e(xe), (on) => {
                var In = v0();
                Te(y(In), () => s()(e(xe))), x(In), be((tr) => we(In, "data-a11y-label", tr), [() => o()("system.original_price")]), p(on, In);
              }), p(wn, Pn);
            };
            E($n, (wn) => {
              e(_e) && wn(En);
            }), x(pn), p(ln, pn);
          };
          E(jn, (ln) => {
            e(L) > 1 && ln(xn);
          }), p(Bt, Ct);
        }, er = (Bt) => {
          var Ct = x0(), _t = pe(Ct);
          rt(_t, () => e(ne), (tn) => {
            {
              let jn = d(() => i().showPricesPerItem ? e(qe) : e(ne));
              Rr(tn, { get amount() {
                return e(jn);
              }, get showPricesPerItem() {
                return i().showPricesPerItem;
              }, get unitLabel() {
                return i().unitLabel;
              } });
            }
          });
          var Mt = j(_t, 2), an = (tn) => {
            var jn = Me();
            rt(pe(jn), () => i().showPricesPerItem ? e(ce) : e(xe), (xn) => {
              var ln = m0();
              Te(y(ln), () => s()(i().showPricesPerItem ? e(ce) : e(xe))), x(ln), be((pn) => we(ln, "data-a11y-label", pn), [() => o()("system.original_price")]), p(xn, ln);
            }), p(tn, jn);
          };
          E(Mt, (tn) => {
            e(_e) && tn(an);
          }), p(Bt, Ct);
        };
        E(xr, (Bt) => {
          i().showBothPrices ? Bt(qn) : Bt(er, !1);
        }), x(ar), x(Dt), p(Ne, pt);
      }, $$slots: { default: !0 } });
      var Ke = j(Qe, 2), at = (Ne) => {
        Sa(Ne, { get highlights() {
          return u().highlights;
        }, get isSelected() {
          return S();
        }, get replaceLiquid() {
          return e(ge);
        } });
      };
      E(Ke, (Ne) => {
        u().highlights && Ne(at);
      });
      var kt = j(Ke, 2), Ye = (Ne) => {
        var Ze = w0(), pt = y(Ze);
        {
          let st = d(() => e(Y) || e(T)[0]);
          Pa(pt, { get sellingPlans() {
            return e(T);
          }, get selectedSellingPlan() {
            return e(st);
          }, onChange: ($t) => {
            se(ae, $t, !0);
          } });
        }
        x(Ze), p(Ne, Ze);
      };
      E(kt, (Ne) => {
        S() && e(ee) && !u().sellingPlanGid && e(T).length > 1 && Ne(Ye);
      });
      var ct = j(kt, 2), Pt = (Ne) => {
        var Ze = P0();
        At(Ze, 21, () => ({ length: e(L) }), $r, (pt, st, $t) => {
          var fn = Me(), Dt = pe(fn), Ht = (Zt) => {
            {
              let Bn = d(() => e(R)[$t] || null);
              Mo(Zt, { get dealBlock() {
                return i();
              }, get dealBar() {
                return u();
              }, get mainProduct() {
                return h();
              }, products: [], get selectedProductVariant() {
                return e(Bn);
              }, onChange: (hn) => ot($t, hn) });
            }
          }, en = (Zt) => {
            {
              let Bn = d(() => e(R)[$t] || null);
              Mo(Zt, { get dealBlock() {
                return i();
              }, get dealBar() {
                return u();
              }, get products() {
                return b();
              }, get selectedProductVariant() {
                return e(Bn);
              }, onChange: (hn) => ot($t, hn), onRemove: () => nt($t) });
            }
          };
          E(Dt, (Zt) => {
            $t === 0 ? Zt(Ht) : Zt(en, !1);
          }), p(pt, fn);
        }), x(Ze), p(Ne, Ze);
      };
      E(ct, (Ne) => {
        S() && Ne(Pt);
      });
      var zt = j(ct, 2), Ot = (Ne) => {
        {
          let Ze = d(() => te(u()));
          hl(Ne, { get value() {
            return e(F);
          }, get min() {
            return e(Ze);
          }, onChange: (pt) => se(F, pt, !0) });
        }
      };
      E(zt, (Ne) => {
        S() && u().dealBarType === gt.QuantityBreak && u().quantitySelector && Ne(Ot);
      });
      var gn = j(zt, 2), mn = (Ne) => {
        {
          let Ze = d(() => e(Ce).map((pt) => pt.variant.id));
          Ja(Ne, { get product() {
            return h();
          }, get productPersonalisation() {
            return u().productPersonalisation;
          }, get selectedVariantIds() {
            return e(Ze);
          }, get quantity() {
            return e(Ce).length;
          }, get addPersonalisationModal() {
            return i().addPersonalisationModal;
          }, get onPersonalisationsChange() {
            return M();
          }, get initialValues() {
            return K();
          } });
        }
      };
      E(gn, (Ne) => {
        S() && u().productPersonalisation && (i().blockLayout === "vertical" || i().blockLayout === "plain") && Ne(mn);
      }), x(Oe);
      var Rt = j(Oe, 2);
      {
        let Ne = d(() => u().upsells || []);
        Bi(Rt, { get dealBlock() {
          return i();
        }, get dealBarId() {
          return u().id;
        }, get upsells() {
          return e(Ne);
        }, get otherProducts() {
          return g();
        }, get complementaryProducts() {
          return v();
        }, get dealBarSelected() {
          return S();
        }, get dealSellingPlan() {
          return e(ie);
        }, onChange: (Ze) => {
          se(N, Ze, !0);
        } });
      }
      var nn = j(Rt, 2);
      Mi(nn, { get selectedDealBarIndex() {
        return f();
      }, get onChange() {
        return A();
      }, get dealBlock() {
        return i();
      }, get dealBar() {
        return u();
      }, get otherProducts() {
        return g();
      }, get selected() {
        return S();
      }, get sellingPlan() {
        return e(ie);
      }, get progressiveGifts() {
        return i().progressiveGifts;
      } });
      var rn = j(nn, 2);
      {
        let Ne = d(() => u().freeGifts || []);
        Si(rn, { get dealBlock() {
          return i();
        }, get freeGifts() {
          return e(Ne);
        }, get freeGiftsSummary() {
          return u().freeGiftsSummary;
        }, get otherProducts() {
          return g();
        }, get dealBarSelected() {
          return S();
        }, get sellingPlan() {
          return e(ie);
        }, onChange: (Ze) => {
          se(I, Ze, !0);
        } });
      }
      var ft = j(rn, 2);
      {
        let Ne = d(() => u().multipleGiftsSelectors || []);
        Ii(ft, { get dealBlock() {
          return i();
        }, get multipleGiftsSelectors() {
          return e(Ne);
        }, get sellingPlan() {
          return e(ie);
        }, get otherProducts() {
          return g();
        }, onChange: (Ze) => {
          se(C, Ze, !0);
        } });
      }
      p(he, Ue);
    }, $$slots: { default: !0 } });
    var Ft = j(ut, 2), Yt = (he) => {
      Ci(he, { get showAsSoldOut() {
        return u().showAsSoldOut;
      }, get replaceLiquid() {
        return e(ge);
      } });
    };
    E(Ft, (he) => {
      u().showAsSoldOutEnabled && u().showAsSoldOut && he(Yt);
    }), x(wt), be((he) => {
      var Fe;
      Wt = Et(wt, 1, "kaching-bundles__bar", null, Wt, he), we(wt, "data-deal-bar-id", u().id), Tt(wt, e(bt)), we(Gt, "name", `kaching-bundles-deal-${(Fe = z()) != null ? Fe : ""}`), Ra(Gt, u().id), we(Gt, "id", e(Ie)), el(Gt, S()), Gt.disabled = u().showAsSoldOutEnabled;
    }, [() => ({ "kaching-bundles__bar--selected": S() })]), p(n, wt);
    var ye = tt(it);
    return l(), ye;
  }
  On(["change"]), He(Wd, { dealBlock: {}, dealBar: {}, product: {}, collectionBreaksProducts: {}, otherProducts: {}, selectedDealBarIndex: {}, complementaryProducts: {}, customQuantity: {}, currentVariantId: {}, componentId: {}, selected: {}, globalSellingPlan: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {}, onProgressiveGiftsChange: {} }, [], [], !0);
  var zo = {};
  (function n(t, r, a, s) {
    var o = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL), c = typeof Path2D == "function" && typeof DOMMatrix == "function";
    function l() {
    }
    function i(I) {
      var C = r.exports.Promise, N = C !== void 0 ? C : t.Promise;
      return typeof N == "function" ? new N(I) : (I(l, l), null);
    }
    var u, h, b, g, f, v, w = /* @__PURE__ */ (function(I, C) {
      return { transform: function(N) {
        if (I) return N;
        if (C.has(N)) return C.get(N);
        var H = new OffscreenCanvas(N.width, N.height);
        return H.getContext("2d").drawImage(N, 0, 0), C.set(N, H), H;
      }, clear: function() {
        C.clear();
      } };
    })((function() {
      if (!t.OffscreenCanvas) return !1;
      try {
        var I = new OffscreenCanvas(1, 1), C = I.getContext("2d");
        C.fillRect(0, 0, 1, 1);
        var N = I.transferToImageBitmap();
        C.createPattern(N, "no-repeat");
      } catch {
        return !1;
      }
      return !0;
    })(), /* @__PURE__ */ new Map()), m = (b = Math.floor(1e3 / 60), g = {}, f = 0, typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (u = function(I) {
      var C = Math.random();
      return g[C] = requestAnimationFrame(function N(H) {
        f === H || f + b - 1 < H ? (f = H, delete g[C], I()) : g[C] = requestAnimationFrame(N);
      }), C;
    }, h = function(I) {
      g[I] && cancelAnimationFrame(g[I]);
    }) : (u = function(I) {
      return setTimeout(I, b);
    }, h = function(I) {
      return clearTimeout(I);
    }), { frame: u, cancel: h }), z = /* @__PURE__ */ (function() {
      var I, C, N = {};
      return function() {
        if (I) return I;
        if (!a && o) {
          var H = ["var CONFETTI, SIZE = {}, module = {};", "(" + n.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join(`
`);
          try {
            I = new Worker(URL.createObjectURL(new Blob([H])));
          } catch (J) {
            return typeof console != "undefined" && typeof console.warn == "function" && console.warn("🎊 Could not load worker", J), null;
          }
          (function(J) {
            function oe(G, V) {
              J.postMessage({ options: G || {}, callback: V });
            }
            J.init = function(G) {
              var V = G.transferControlToOffscreen();
              J.postMessage({ canvas: V }, [V]);
            }, J.fire = function(G, V, F) {
              if (C) return oe(G, null), C;
              var L = Math.random().toString(36).slice(2);
              return C = i(function(te) {
                function ue(R) {
                  R.data.callback === L && (delete N[L], J.removeEventListener("message", ue), C = null, w.clear(), F(), te());
                }
                J.addEventListener("message", ue), oe(G, L), N[L] = ue.bind(null, { data: { callback: L } });
              });
            }, J.reset = function() {
              for (var G in J.postMessage({ reset: !0 }), N) N[G](), delete N[G];
            };
          })(I);
        }
        return I;
      };
    })(), S = { particleCount: 50, angle: 90, spread: 45, startVelocity: 45, decay: 0.9, gravity: 1, drift: 0, ticks: 200, x: 0.5, y: 0.5, shapes: ["square", "circle"], zIndex: 100, colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"], disableForReducedMotion: !1, scalar: 1 };
    function B(I, C, N) {
      return (function(H, J) {
        return J ? J(H) : H;
      })(I && I[C] != null ? I[C] : S[C], N);
    }
    function q(I) {
      return I < 0 ? 0 : Math.floor(I);
    }
    function Q(I, C) {
      return Math.floor(Math.random() * (C - I)) + I;
    }
    function W(I) {
      return parseInt(I, 16);
    }
    function re(I) {
      return I.map(M);
    }
    function M(I) {
      var C = String(I).replace(/[^0-9a-f]/gi, "");
      return C.length < 6 && (C = C[0] + C[0] + C[1] + C[1] + C[2] + C[2]), { r: W(C.substring(0, 2)), g: W(C.substring(2, 4)), b: W(C.substring(4, 6)) };
    }
    function K(I) {
      I.width = document.documentElement.clientWidth, I.height = document.documentElement.clientHeight;
    }
    function A(I) {
      var C = I.getBoundingClientRect();
      I.width = C.width, I.height = C.height;
    }
    function U(I) {
      var C = I.angle * (Math.PI / 180), N = I.spread * (Math.PI / 180);
      return { x: I.x, y: I.y, wobble: 10 * Math.random(), wobbleSpeed: Math.min(0.11, 0.1 * Math.random() + 0.05), velocity: 0.5 * I.startVelocity + Math.random() * I.startVelocity, angle2D: -C + (0.5 * N - Math.random() * N), tiltAngle: (0.5 * Math.random() + 0.25) * Math.PI, color: I.color, shape: I.shape, tick: 0, totalTicks: I.ticks, decay: I.decay, drift: I.drift, random: Math.random() + 2, tiltSin: 0, tiltCos: 0, wobbleX: 0, wobbleY: 0, gravity: 3 * I.gravity, ovalScalar: 0.6, scalar: I.scalar, flat: I.flat };
    }
    function O(I, C) {
      C.x += Math.cos(C.angle2D) * C.velocity + C.drift, C.y += Math.sin(C.angle2D) * C.velocity + C.gravity, C.velocity *= C.decay, C.flat ? (C.wobble = 0, C.wobbleX = C.x + 10 * C.scalar, C.wobbleY = C.y + 10 * C.scalar, C.tiltSin = 0, C.tiltCos = 0, C.random = 1) : (C.wobble += C.wobbleSpeed, C.wobbleX = C.x + 10 * C.scalar * Math.cos(C.wobble), C.wobbleY = C.y + 10 * C.scalar * Math.sin(C.wobble), C.tiltAngle += 0.1, C.tiltSin = Math.sin(C.tiltAngle), C.tiltCos = Math.cos(C.tiltAngle), C.random = Math.random() + 2);
      var N = C.tick++ / C.totalTicks, H = C.x + C.random * C.tiltCos, J = C.y + C.random * C.tiltSin, oe = C.wobbleX + C.random * C.tiltCos, G = C.wobbleY + C.random * C.tiltSin;
      if (I.fillStyle = "rgba(" + C.color.r + ", " + C.color.g + ", " + C.color.b + ", " + (1 - N) + ")", I.beginPath(), c && C.shape.type === "path" && typeof C.shape.path == "string" && Array.isArray(C.shape.matrix)) I.fill((function(Ce, ve, xe, fe, ce, ne, ge) {
        var Be = new Path2D(Ce), Se = new Path2D();
        Se.addPath(Be, new DOMMatrix(ve));
        var Le = new Path2D();
        return Le.addPath(Se, new DOMMatrix([Math.cos(ge) * ce, Math.sin(ge) * ce, -Math.sin(ge) * ne, Math.cos(ge) * ne, xe, fe])), Le;
      })(C.shape.path, C.shape.matrix, C.x, C.y, 0.1 * Math.abs(oe - H), 0.1 * Math.abs(G - J), Math.PI / 10 * C.wobble));
      else if (C.shape.type === "bitmap") {
        var V = Math.PI / 10 * C.wobble, F = 0.1 * Math.abs(oe - H), L = 0.1 * Math.abs(G - J), te = C.shape.bitmap.width * C.scalar, ue = C.shape.bitmap.height * C.scalar, R = new DOMMatrix([Math.cos(V) * F, Math.sin(V) * F, -Math.sin(V) * L, Math.cos(V) * L, C.x, C.y]);
        R.multiplySelf(new DOMMatrix(C.shape.matrix));
        var P = I.createPattern(w.transform(C.shape.bitmap), "no-repeat");
        P.setTransform(R), I.globalAlpha = 1 - N, I.fillStyle = P, I.fillRect(C.x - te / 2, C.y - ue / 2, te, ue), I.globalAlpha = 1;
      } else if (C.shape === "circle") I.ellipse ? I.ellipse(C.x, C.y, Math.abs(oe - H) * C.ovalScalar, Math.abs(G - J) * C.ovalScalar, Math.PI / 10 * C.wobble, 0, 2 * Math.PI) : (function(Ce, ve, xe, fe, ce, ne, ge, Be, Se) {
        Ce.save(), Ce.translate(ve, xe), Ce.rotate(ne), Ce.scale(fe, ce), Ce.arc(0, 0, 1, ge, Be, Se), Ce.restore();
      })(I, C.x, C.y, Math.abs(oe - H) * C.ovalScalar, Math.abs(G - J) * C.ovalScalar, Math.PI / 10 * C.wobble, 0, 2 * Math.PI);
      else if (C.shape === "star") for (var D = Math.PI / 2 * 3, ae = 4 * C.scalar, T = 8 * C.scalar, ee = C.x, Y = C.y, ie = 5, me = Math.PI / ie; ie--; ) ee = C.x + Math.cos(D) * T, Y = C.y + Math.sin(D) * T, I.lineTo(ee, Y), D += me, ee = C.x + Math.cos(D) * ae, Y = C.y + Math.sin(D) * ae, I.lineTo(ee, Y), D += me;
      else I.moveTo(Math.floor(C.x), Math.floor(C.y)), I.lineTo(Math.floor(C.wobbleX), Math.floor(J)), I.lineTo(Math.floor(oe), Math.floor(G)), I.lineTo(Math.floor(H), Math.floor(C.wobbleY));
      return I.closePath(), I.fill(), C.tick < C.totalTicks;
    }
    function X(I, C) {
      var N, H = !I, J = !!B(C || {}, "resize"), oe = !1, G = B(C, "disableForReducedMotion", Boolean), V = o && B(C || {}, "useWorker") ? z() : null, F = H ? K : A, L = !(!I || !V) && !!I.__confetti_initialized, te = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches;
      function ue(P, D, ae) {
        for (var T = B(P, "particleCount", q), ee = B(P, "angle", Number), Y = B(P, "spread", Number), ie = B(P, "startVelocity", Number), me = B(P, "decay", Number), Ce = B(P, "gravity", Number), ve = B(P, "drift", Number), xe = B(P, "colors", re), fe = B(P, "ticks", Number), ce = B(P, "shapes"), ne = B(P, "scalar"), ge = !!B(P, "flat"), Be = (function(De) {
          var qe = B(De, "origin", Object);
          return qe.x = B(qe, "x", Number), qe.y = B(qe, "y", Number), qe;
        })(P), Se = T, Le = [], Ve = I.width * Be.x, le = I.height * Be.y; Se--; ) Le.push(U({ x: Ve, y: le, angle: ee, spread: Y, startVelocity: ie, color: xe[Se % xe.length], shape: ce[Q(0, ce.length)], ticks: fe, decay: me, gravity: Ce, drift: ve, scalar: ne, flat: ge }));
        return N ? N.addFettis(Le) : (N = (function(De, qe, _e, Ie, $e) {
          var Pe, Ge, bt = qe.slice(), ot = De.getContext("2d"), nt = i(function(it) {
            function wt() {
              Pe = Ge = null, ot.clearRect(0, 0, Ie.width, Ie.height), w.clear(), $e(), it();
            }
            Pe = m.frame(function Wt() {
              !a || Ie.width === s.width && Ie.height === s.height || (Ie.width = De.width = s.width, Ie.height = De.height = s.height), Ie.width || Ie.height || (_e(De), Ie.width = De.width, Ie.height = De.height), ot.clearRect(0, 0, Ie.width, Ie.height), (bt = bt.filter(function(Gt) {
                return O(ot, Gt);
              })).length ? Pe = m.frame(Wt) : wt();
            }), Ge = wt;
          });
          return { addFettis: function(it) {
            return bt = bt.concat(it), nt;
          }, canvas: De, promise: nt, reset: function() {
            Pe && m.cancel(Pe), Ge && Ge();
          } };
        })(I, Le, F, D, ae), N.promise);
      }
      function R(P) {
        var D = G || B(P, "disableForReducedMotion", Boolean), ae = B(P, "zIndex", Number);
        if (D && te) return i(function(ie) {
          ie();
        });
        H && N ? I = N.canvas : H && !I && (I = (function(ie) {
          var me = document.createElement("canvas");
          return me.style.position = "fixed", me.style.top = "0px", me.style.left = "0px", me.style.pointerEvents = "none", me.style.zIndex = ie, me;
        })(ae), document.body.appendChild(I)), J && !L && F(I);
        var T = { width: I.width, height: I.height };
        function ee() {
          if (V) {
            var ie = { getBoundingClientRect: function() {
              if (!H) return I.getBoundingClientRect();
            } };
            return F(ie), void V.postMessage({ resize: { width: ie.width, height: ie.height } });
          }
          T.width = T.height = null;
        }
        function Y() {
          N = null, J && (oe = !1, t.removeEventListener("resize", ee)), H && I && (document.body.contains(I) && document.body.removeChild(I), I = null, L = !1);
        }
        return V && !L && V.init(I), L = !0, V && (I.__confetti_initialized = !0), J && !oe && (oe = !0, t.addEventListener("resize", ee, !1)), V ? V.fire(P, T, Y) : ue(P, T, Y);
      }
      return R.reset = function() {
        V && V.reset(), N && N.reset();
      }, R;
    }
    function Z() {
      return v || (v = X(null, { useWorker: !0, resize: !0 })), v;
    }
    r.exports = function() {
      return Z().apply(this, arguments);
    }, r.exports.reset = function() {
      Z().reset();
    }, r.exports.create = X, r.exports.shapeFromPath = function(I) {
      if (!c) throw new Error("path confetti are not supported in this browser");
      var C, N;
      typeof I == "string" ? C = I : (C = I.path, N = I.matrix);
      var H = new Path2D(C), J = document.createElement("canvas").getContext("2d");
      if (!N) {
        for (var oe, G, V = 1e3, F = V, L = V, te = 0, ue = 0, R = 0; R < V; R += 2) for (var P = 0; P < V; P += 2) J.isPointInPath(H, R, P, "nonzero") && (F = Math.min(F, R), L = Math.min(L, P), te = Math.max(te, R), ue = Math.max(ue, P));
        oe = te - F, G = ue - L;
        var D = Math.min(10 / oe, 10 / G);
        N = [D, 0, 0, D, -Math.round(oe / 2 + F) * D, -Math.round(G / 2 + L) * D];
      }
      return { type: "path", path: C, matrix: N };
    }, r.exports.shapeFromText = function(I) {
      var C, N = 1, H = "#000000", J = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
      typeof I == "string" ? C = I : (C = I.text, N = "scalar" in I ? I.scalar : N, J = "fontFamily" in I ? I.fontFamily : J, H = "color" in I ? I.color : H);
      var oe = 10 * N, G = oe + "px " + J, V = new OffscreenCanvas(oe, oe), F = V.getContext("2d");
      F.font = G;
      var L = F.measureText(C), te = Math.ceil(L.actualBoundingBoxRight + L.actualBoundingBoxLeft), ue = Math.ceil(L.actualBoundingBoxAscent + L.actualBoundingBoxDescent), R = L.actualBoundingBoxLeft + 2, P = L.actualBoundingBoxAscent + 2;
      te += 4, ue += 4, (F = (V = new OffscreenCanvas(te, ue)).getContext("2d")).font = G, F.fillStyle = H, F.fillText(C, R, P);
      var D = 1 / N;
      return { type: "bitmap", bitmap: V.transferToImageBitmap(), matrix: [D, 0, 0, D, -te * D / 2, -ue * D / 2] };
    };
  })(/* @__PURE__ */ (function() {
    return typeof window != "undefined" ? window : typeof self != "undefined" ? self : this || {};
  })(), zo, !1);
  const C0 = zo.exports;
  zo.exports.create;
  var I0 = Tn('<svg viewBox="0 0 361 163" fill="none" aria-hidden="true"><path class="kaching-bundles__scratch-off-hint-path" d="M22 113.859C23.9107 84.035 22.7293 20.8901 54.8299 45.9835C94.9555 77.3502 81.1193 164.847 101.209 103.575C108.48 64.2518 127.202 -4.91471 143.923 33.0046C164.824 80.4037 155.535 144.223 184.564 113.859C213.593 83.495 160.179 15.685 201.982 45.9835C243.784 76.2821 263.524 183.445 278.619 122.651C293.714 61.8562 268.168 7.24414 303.004 33.0046C337.839 58.765 330.872 64.2534 339 92.7687" stroke="white" stroke-opacity="0.7" stroke-width="44" stroke-linecap="round"></path></svg>');
  function Ud(n, t) {
    et(t, !0);
    let r = k(t, "hidden", 7);
    var a = { get hidden() {
      return r();
    }, set hidden(c) {
      r(c), _();
    } }, s = I0();
    let o;
    return be((c) => o = Et(s, 0, "kaching-bundles__scratch-off-hint", null, o, c), [() => ({ "kaching-bundles__scratch-off-hint--hidden": r() })]), p(n, s), tt(a);
  }
  function M0(n, t) {
    n.key !== "Enter" && n.key !== " " || (n.preventDefault(), t());
  }
  He(Ud, { hidden: {} }, [], [], !0);
  var z0 = $('<canvas role="button" tabindex="0"></canvas> <!> <div aria-hidden="true"> </div>', 1), $0 = $("<div><!> <!></div>");
  function Hd(n, t) {
    et(t, !0);
    const r = () => ze(u, "$config", a), [a, s] = vt(), o = 317 / 361;
    let c = k(t, "settings", 7), l = k(t, "onReveal", 7), i = k(t, "children", 7);
    const u = kn(), h = It();
    let b = d(() => ze(h, "$translate", a)(c().title)), g = Ae(lt(r().preview && !r().previewScratchOff)), f = Ae(!1), v = Ae(void 0), w = Ae(!1), m = d(() => bn({ "scratch-off-title-color": Re(c().titleColor), "scratch-off-title-size": `${c().titleSize}px` })), z = !1, S = null, B = null, q = 22, Q = null, W = Ae(!1), re = Ae(!1);
    const M = new Image();
    M.src = "https://bundles-assets.kachingappz.app/widget/scratch-off-background-v2.webp", Q = M, M.complete ? se(W, !0) : (M.addEventListener("load", () => {
      se(W, !0);
    }, { once: !0 }), M.addEventListener("error", () => {
      se(re, !0);
    }, { once: !0 }));
    let K = d(() => e(W) || e(re));
    function A() {
      if (!e(v)) return;
      const te = e(v).getBoundingClientRect();
      if (te.width === 0 || te.height === 0) return;
      const ue = window.devicePixelRatio || 1;
      e(v).width = Math.floor(te.width * ue), e(v).height = Math.floor(te.height * ue);
      const R = e(v).getContext("2d");
      if (!R) return;
      R.scale(ue, ue), q = 44 * Math.min((te.width - 10) / 361, (te.height - 10) / 163, o) / 2, R.fillStyle = Re(c().backgroundColor), R.fillRect(0, 0, te.width, te.height), e(W) && Q && (R.globalAlpha = 0.6, R.drawImage(Q, 0, 0, te.width, te.height), R.globalAlpha = 1), R.globalCompositeOperation = "destination-out";
    }
    function U(te) {
      if (!e(v)) return null;
      const ue = e(v).getBoundingClientRect();
      return { x: te.clientX - ue.left, y: te.clientY - ue.top };
    }
    function O(te) {
      var ue;
      e(g) || e(f) || (z = !0, se(w, !0), B === null && (B = setTimeout(C, 1500)), (ue = e(v)) == null || ue.setPointerCapture(te.pointerId), S = U(te), (function(R) {
        if (!e(v) || !R) return;
        const P = e(v).getContext("2d");
        P && (P.beginPath(), P.arc(R.x, R.y, q, 0, 2 * Math.PI), P.fill());
      })(S));
    }
    function X(te) {
      if (!z || e(g) || e(f)) return;
      const ue = U(te);
      ue && S && ((function(R, P) {
        if (!e(v)) return;
        const D = e(v).getContext("2d");
        if (!D) return;
        const ae = P.x - R.x, T = P.y - R.y, ee = Math.hypot(ae, T), Y = Math.max(1, Math.ceil(ee / 4));
        for (let ie = 0; ie <= Y; ie++) {
          const me = ie / Y;
          D.beginPath(), D.arc(R.x + ae * me, R.y + T * me, q, 0, 2 * Math.PI), D.fill();
        }
      })(S, ue), S = ue);
    }
    function Z(te) {
      var ue;
      z = !1, (ue = e(v)) == null || ue.releasePointerCapture(te.pointerId), S = null, C();
    }
    function I() {
      B !== null && (clearTimeout(B), B = null);
    }
    function C() {
      var te;
      e(g) || e(f) || (I(), se(f, !0), (function() {
        if (!e(v)) return;
        const ue = e(v).getBoundingClientRect();
        C0({ particleCount: 120, spread: 70, startVelocity: 45, origin: { x: (ue.left + ue.width / 2) / window.innerWidth, y: (ue.top + ue.height / 2) / window.innerHeight } });
      })(), (te = l()) == null || te(), setTimeout(() => {
        se(g, !0), se(f, !1);
      }, 300));
    }
    Xe(() => {
      if (e(K)) return;
      const te = setTimeout(() => {
        se(re, !0);
      }, 5e3);
      return () => clearTimeout(te);
    }), Xe(() => () => I()), Xe(() => {
      if (e(g) || e(f) || !e(v)) return;
      A();
      const te = new ResizeObserver(() => {
        e(g) || e(f) || A();
      });
      return te.observe(e(v)), () => te.disconnect();
    });
    let N = JSON.stringify(c());
    Xe(() => {
      const te = JSON.stringify(c());
      te !== N && (N = te, r().preview && r().previewScratchOff && (se(g, !1), se(f, !1), se(w, !1), I()));
    });
    var H = { get settings() {
      return c();
    }, set settings(te) {
      c(te), _();
    }, get onReveal() {
      return l();
    }, set onReveal(te) {
      l(te), _();
    }, get children() {
      return i();
    }, set children(te) {
      i(te), _();
    } }, J = $0();
    let oe;
    var G = y(J);
    Nl(G, i);
    var V = j(G, 2), F = (te) => {
      var ue = z0(), R = pe(ue);
      let P;
      R.__pointerdown = O, R.__pointermove = X, R.__pointerup = Z, R.__keydown = [M0, C], _i(R, (Y) => se(v, Y), () => e(v));
      var D = j(R, 2);
      {
        let Y = d(() => e(w) || e(f));
        Ud(D, { get hidden() {
          return e(Y);
        } });
      }
      var ae = j(D, 2);
      let T;
      var ee = y(ae, !0);
      x(ae), be((Y, ie) => {
        P = Et(R, 1, "kaching-bundles__scratch-off-canvas", null, P, Y), we(R, "aria-label", e(b)), T = Et(ae, 1, "kaching-bundles__scratch-off-title", null, T, ie), ht(ee, e(b));
      }, [() => ({ "kaching-bundles__scratch-off-canvas--revealing": e(f) }), () => ({ "kaching-bundles__scratch-off-title--hidden": e(w) || e(f) })]), Rl("pointercancel", R, Z), p(te, ue);
    };
    E(V, (te) => {
      e(g) || te(F);
    }), x(J), be((te) => {
      oe = Et(J, 1, "kaching-bundles__scratch-off", null, oe, te), Tt(J, e(m));
    }, [() => ({ "kaching-bundles__scratch-off--unscratched": !e(g), "kaching-bundles__scratch-off--revealing": e(f), "kaching-bundles__scratch-off--loading": !e(g) && !e(K) })]), p(n, J);
    var L = tt(H);
    return s(), L;
  }
  On(["pointerdown", "pointermove", "pointerup", "keydown"]), He(Hd, { settings: {}, onReveal: {}, children: {} }, [], [], !0);
  var D0 = $('<div class="kaching-bundles__bar-price"><!></div>'), A0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), V0 = $('<div class="kaching-bundles__bar-pricing"><!> <!></div>');
  function gs(n, t) {
    et(t, !0);
    const r = () => ze(i, "$translate", s), a = () => ze(u, "$formatPrice", s), [s, o] = vt(), c = k(t, "discountedPrice", 7), l = k(t, "fullPrice", 7), i = It(), u = un();
    var h = { get discountedPrice() {
      return c();
    }, set discountedPrice(m) {
      c(m), _();
    }, get fullPrice() {
      return l();
    }, set fullPrice(m) {
      l(m), _();
    } }, b = V0(), g = y(b);
    rt(g, c, (m) => {
      var z = D0();
      Te(y(z), () => a()(c())), x(z), be((S) => we(z, "data-a11y-label", S), [() => r()("system.price")]), p(m, z);
    });
    var f = j(g, 2), v = (m) => {
      var z = Me();
      rt(pe(z), l, (S) => {
        var B = A0();
        Te(y(B), () => a()(l())), x(B), be((q) => we(B, "data-a11y-label", q), [() => r()("system.original_price")]), p(S, B);
      }), p(m, z);
    };
    E(f, (m) => {
      l() > c() && m(v);
    }), x(b), p(n, b);
    var w = tt(h);
    return o(), w;
  }
  He(gs, { discountedPrice: {}, fullPrice: {} }, [], [], !0);
  const Ya = aa(null), $o = (n) => bn({ "kaching-subscriptions-title-color": Re(n.titleColor), "kaching-subscriptions-subtitle-color": Re(n.subtitleColor), "kaching-subscriptions-title-font-size": n.titleSize + "px", "kaching-subscriptions-subtitle-font-size": n.subtitleSize + "px" });
  var T0 = $('<div class="kaching-bundles__bar-radio"></div>'), q0 = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), G0 = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), F0 = $('<div class="kaching-bundles__bar-variants"><!></div>'), O0 = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div> <!> <!></div></div>'), L0 = $('<div class="kaching-bundles__bar-radio"></div>'), j0 = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), E0 = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), R0 = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div></div></div>'), N0 = $("<div></div>");
  function Zd(n, t) {
    et(t, !0);
    const r = () => ze(Ya, "$selectedDealBarStore", o), a = () => ze(f, "$formatPrice", o), s = () => ze(g, "$translate", o), [o, c] = vt(), l = k(t, "subscriptions", 7), i = k(t, "sellingPlans", 7), u = k(t, "selectedSellingPlan", 7), h = k(t, "hideSellingPlanSelector", 7, !1), b = k(t, "onChange", 7), g = It(), f = un();
    let v = Ae(lt(l().subscribeByDefault || u() ? "subscribe" : "one-time")), w = Ae(lt(u() || i()[0])), m = Ae(!1), z = d(() => l().subscribeByDefault), S = d(() => e(z) ? ["subscribe", "one-time"] : ["one-time", "subscribe"]);
    const B = d(() => $o(l())), q = d(() => {
      var N, H;
      const J = (H = (N = r()) == null ? void 0 : N.dealBar) == null ? void 0 : H.sellingPlanGid;
      if (J) return i().find((oe) => oe.id === Qt(J));
    }), Q = d(() => {
      var N;
      return (N = e(q)) != null ? N : e(w);
    }), W = d(() => {
      var N, H, J, oe, G;
      return (G = (oe = (H = (N = r()) == null ? void 0 : N.pricing.discountedPricesForSellingPlans.find((V) => {
        var F;
        return V.sellingPlanId === ((F = e(Q)) == null ? void 0 : F.id);
      })) == null ? void 0 : H.discountedPrice) != null ? oe : (J = r()) == null ? void 0 : J.pricing.discountedPrice) != null ? G : 0;
    }), re = d(() => {
      var N, H;
      return (H = (N = r()) == null ? void 0 : N.pricing.discountedPriceWithoutSellingPlan) != null ? H : 0;
    }), M = d(() => {
      var N, H;
      return (H = (N = r()) == null ? void 0 : N.pricing.fullPrice) != null ? H : 0;
    }), K = d(() => {
      var N, H, J;
      return dn({ priceFormatter: a(), product: (N = r()) == null ? void 0 : N.product, totalFullPrice: e(M), totalDiscountedPrice: e(W), quantity: (J = (H = r()) == null ? void 0 : H.quantity) != null ? J : 1, sellingPlan: e(Q), unitQuantity: null });
    }), A = d(() => {
      var N, H, J;
      return dn({ priceFormatter: a(), product: (N = r()) == null ? void 0 : N.product, totalFullPrice: e(M), totalDiscountedPrice: e(re), quantity: (J = (H = r()) == null ? void 0 : H.quantity) != null ? J : 1, unitQuantity: null });
    });
    function U(N) {
      se(m, !0), se(v, N, !0), b()(N === "subscribe" ? e(w) : void 0);
    }
    function O(N) {
      se(w, N, !0), e(v) === "subscribe" && b()(N);
    }
    Ea(() => {
      e(v) === "subscribe" && b()(e(w));
    }), Xe(() => {
      if (u()) return se(w, u(), !0), void se(v, "subscribe");
      if (i().length === 0) return void se(v, "one-time");
      i().some((N) => {
        var H;
        return N.id === ((H = e(w)) == null ? void 0 : H.id);
      }) || se(w, i()[0], !0), e(m) || se(v, e(z) ? "subscribe" : "one-time", !0), b()(e(v) === "subscribe" ? e(w) : void 0);
    });
    var X = { get subscriptions() {
      return l();
    }, set subscriptions(N) {
      l(N), _();
    }, get sellingPlans() {
      return i();
    }, set sellingPlans(N) {
      i(N), _();
    }, get selectedSellingPlan() {
      return u();
    }, set selectedSellingPlan(N) {
      u(N), _();
    }, get hideSellingPlanSelector() {
      return h();
    }, set hideSellingPlanSelector(N = !1) {
      h(N), _();
    }, get onChange() {
      return b();
    }, set onChange(N) {
      b(N), _();
    } }, Z = N0();
    let I;
    At(Z, 20, () => e(S), (N) => N, (N, H) => {
      var J = Me(), oe = pe(J), G = (F) => {
        {
          let L = d(() => ["kaching-bundles__bar", i().length === 0 && "kaching-bundles__bar--disabled", e(v) === "subscribe" && "kaching-bundles__bar--selected"]);
          Ut(F, { element: "div", get class() {
            return e(L);
          }, onclick: () => U("subscribe"), children: (te, ue) => {
            var R = O0(), P = y(R), D = y(P), ae = y(D), T = (Le) => {
              p(Le, T0());
            };
            E(ae, (Le) => {
              l().layout === "vertical" && Le(T);
            });
            var ee = j(ae, 2), Y = y(ee), ie = y(Y), me = y(ie), Ce = (Le) => {
              var Ve = q0();
              Te(y(Ve), () => e(K)(s()(l().subscribeTitle))), x(Ve), p(Le, Ve);
            };
            E(me, (Le) => {
              l().subscribeTitle && Le(Ce);
            }), x(ie);
            var ve = j(ie, 2), xe = (Le) => {
              var Ve = G0();
              Te(y(Ve), () => e(K)(s()(l().subscribeSubtitle))), x(Ve), p(Le, Ve);
            };
            E(ve, (Le) => {
              l().subscribeSubtitle && Le(xe);
            }), x(Y);
            var fe = j(Y, 2), ce = (Le) => {
              gs(Le, { get discountedPrice() {
                return e(W);
              }, get fullPrice() {
                return e(M);
              } });
            };
            E(fe, (Le) => {
              l().showPrices && r() && Le(ce);
            }), x(ee), x(D);
            var ne = j(D, 2), ge = (Le) => {
              {
                let Ve = d(() => e(v) === "subscribe");
                Sa(Le, { get highlights() {
                  return l().highlights;
                }, get isSelected() {
                  return e(Ve);
                }, get replaceLiquid() {
                  return e(K);
                } });
              }
            };
            E(ne, (Le) => {
              l().highlights && Le(ge);
            });
            var Be = j(ne, 2), Se = (Le) => {
              var Ve = F0();
              Pa(y(Ve), { get sellingPlans() {
                return i();
              }, get selectedSellingPlan() {
                return e(w);
              }, onChange: O }), x(Ve), p(Le, Ve);
            };
            E(Be, (Le) => {
              e(v) === "subscribe" && i().length > 1 && e(w) && !h() && Le(Se);
            }), x(P), x(R), p(te, R);
          }, $$slots: { default: !0 } });
        }
      }, V = (F) => {
        {
          let L = d(() => ["kaching-bundles__bar", i().length === 0 && "kaching-bundles__bar--disabled", e(v) === "one-time" && "kaching-bundles__bar--selected"]);
          Ut(F, { element: "div", get class() {
            return e(L);
          }, onclick: () => U("one-time"), children: (te, ue) => {
            var R = R0(), P = y(R), D = y(P), ae = y(D), T = (ne) => {
              p(ne, L0());
            };
            E(ae, (ne) => {
              l().layout === "vertical" && ne(T);
            });
            var ee = j(ae, 2), Y = y(ee), ie = y(Y), me = y(ie), Ce = (ne) => {
              var ge = j0();
              Te(y(ge), () => e(A)(s()(l().oneTimeTitle))), x(ge), p(ne, ge);
            };
            E(me, (ne) => {
              l().oneTimeTitle && ne(Ce);
            }), x(ie);
            var ve = j(ie, 2), xe = (ne) => {
              var ge = E0();
              Te(y(ge), () => e(A)(s()(l().oneTimeSubtitle))), x(ge), p(ne, ge);
            };
            E(ve, (ne) => {
              l().oneTimeSubtitle && ne(xe);
            }), x(Y);
            var fe = j(Y, 2), ce = (ne) => {
              gs(ne, { get discountedPrice() {
                return e(re);
              }, get fullPrice() {
                return e(M);
              } });
            };
            E(fe, (ne) => {
              l().showPrices && r() && ne(ce);
            }), x(ee), x(D), x(P), x(R), p(te, R);
          }, $$slots: { default: !0 } });
        }
      };
      E(oe, (F) => {
        H === "subscribe" ? F(G) : F(V, !1);
      }), p(N, J);
    }), x(Z), be((N) => {
      I = Et(Z, 1, "kaching-bundles__subscriptions kaching-bundles__bars", null, I, N), Tt(Z, e(B));
    }, [() => ({ "kaching-bundles__bars--horizontal": l().layout === "horizontal" })]), p(n, Z);
    var C = tt(X);
    return c(), C;
  }
  He(Zd, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0);
  var Q0 = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), W0 = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), U0 = $('<div class="kaching-bundles__bar-variants"><!></div>'), H0 = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><span class="kaching-bundles__subscriptions__checkbox"><!></span> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div> <!> <!></div></div>'), Z0 = $('<div class="kaching-bundles__subscriptions kaching-bundles__bars kaching-bundles__subscriptions--checkbox"><!></div>');
  function Jd(n, t) {
    et(t, !0);
    const r = () => ze(Ya, "$selectedDealBarStore", s), a = () => ze(b, "$translate", s), [s, o] = vt(), c = k(t, "subscriptions", 7), l = k(t, "sellingPlans", 7), i = k(t, "selectedSellingPlan", 7), u = k(t, "hideSellingPlanSelector", 7, !1), h = k(t, "onChange", 7), b = It(), g = un();
    let f = Ae(lt(c().subscribeByDefault || !!i())), v = Ae(lt(i() || l()[0])), w = Ae(!1);
    const m = d(() => $o(c())), z = d(() => {
      var U, O;
      const X = (O = (U = r()) == null ? void 0 : U.dealBar) == null ? void 0 : O.sellingPlanGid;
      if (X) return l().find((Z) => Z.id === Qt(X));
    }), S = d(() => {
      var U;
      return (U = e(z)) != null ? U : e(v);
    }), B = d(() => {
      var U, O, X, Z, I;
      return (I = (Z = (O = (U = r()) == null ? void 0 : U.pricing.discountedPricesForSellingPlans.find((C) => {
        var N;
        return C.sellingPlanId === ((N = e(S)) == null ? void 0 : N.id);
      })) == null ? void 0 : O.discountedPrice) != null ? Z : (X = r()) == null ? void 0 : X.pricing.discountedPrice) != null ? I : 0;
    }), q = d(() => {
      var U, O;
      return (O = (U = r()) == null ? void 0 : U.pricing.fullPrice) != null ? O : 0;
    }), Q = d(() => {
      var U, O, X;
      return dn({ priceFormatter: ze(g, "$formatPrice", s), product: (U = r()) == null ? void 0 : U.product, totalFullPrice: e(q), totalDiscountedPrice: e(B), quantity: (X = (O = r()) == null ? void 0 : O.quantity) != null ? X : 1, sellingPlan: e(S), unitQuantity: null });
    });
    function W(U) {
      se(v, U, !0), h()(U);
    }
    Xe(() => {
      if (i()) return se(v, i(), !0), void se(f, !0);
      if (l().length === 0) return void se(f, !1);
      e(v) && l().some((U) => U.id === e(v).id) || se(v, l()[0], !0), e(w) || se(f, c().subscribeByDefault, !0), h()(e(f) ? e(v) : void 0);
    }), Ea(() => {
      e(f) && h()(e(v));
    });
    var re = { get subscriptions() {
      return c();
    }, set subscriptions(U) {
      c(U), _();
    }, get sellingPlans() {
      return l();
    }, set sellingPlans(U) {
      l(U), _();
    }, get selectedSellingPlan() {
      return i();
    }, set selectedSellingPlan(U) {
      i(U), _();
    }, get hideSellingPlanSelector() {
      return u();
    }, set hideSellingPlanSelector(U = !1) {
      u(U), _();
    }, get onChange() {
      return h();
    }, set onChange(U) {
      h(U), _();
    } }, M = Z0(), K = y(M);
    {
      let U = d(() => ["kaching-bundles__bar", l().length === 0 && "kaching-bundles__bar--disabled"]);
      Ut(K, { element: "div", get class() {
        return e(U);
      }, role: "checkbox", get "aria-checked"() {
        return e(f);
      }, onclick: function() {
        se(w, !0), se(f, !e(f)), h()(e(f) ? e(v) : void 0);
      }, children: (O, X) => {
        var Z = H0(), I = y(Z), C = y(I), N = y(C), H = y(N), J = (Y) => {
          cs(Y);
        };
        E(H, (Y) => {
          e(f) && Y(J);
        }), x(N);
        var oe = j(N, 2), G = y(oe), V = y(G), F = y(V), L = (Y) => {
          var ie = Q0();
          Te(y(ie), () => e(Q)(a()(c().subscribeTitle))), x(ie), p(Y, ie);
        };
        E(F, (Y) => {
          c().subscribeTitle && Y(L);
        }), x(V);
        var te = j(V, 2), ue = (Y) => {
          var ie = W0();
          Te(y(ie), () => e(Q)(a()(c().subscribeSubtitle))), x(ie), p(Y, ie);
        };
        E(te, (Y) => {
          c().subscribeSubtitle && Y(ue);
        }), x(G);
        var R = j(G, 2), P = (Y) => {
          gs(Y, { get discountedPrice() {
            return e(B);
          }, get fullPrice() {
            return e(q);
          } });
        };
        E(R, (Y) => {
          c().showPrices && r() && Y(P);
        }), x(oe), x(C);
        var D = j(C, 2), ae = (Y) => {
          Sa(Y, { get highlights() {
            return c().highlights;
          }, get isSelected() {
            return e(f);
          }, get replaceLiquid() {
            return e(Q);
          } });
        };
        E(D, (Y) => {
          c().highlights && Y(ae);
        });
        var T = j(D, 2), ee = (Y) => {
          var ie = U0();
          Pa(y(ie), { get sellingPlans() {
            return l();
          }, get selectedSellingPlan() {
            return e(v);
          }, onChange: W }), x(ie), p(Y, ie);
        };
        E(T, (Y) => {
          e(f) && l().length > 1 && e(v) && !u() && Y(ee);
        }), x(I), x(Z), p(O, Z);
      }, $$slots: { default: !0 } });
    }
    x(M), be(() => Tt(M, e(m))), p(n, M);
    var A = tt(re);
    return o(), A;
  }
  function J0(n, t, r, a) {
    t()(r().subscribeByDefault ? void 0 : e(a));
  }
  He(Jd, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0);
  var Y0 = $('<div class="kaching-bundles__subscriptions kaching-bundles__subscriptions--link"><button type="button" class="kaching-bundles__subscriptions__link"><!><!></button></div>');
  function Yd(n, t) {
    et(t, !0);
    const r = () => ze(Ya, "$selectedDealBarStore", s), a = () => ze(g, "$formatPrice", s), [s, o] = vt(), c = k(t, "subscriptions", 7), l = k(t, "sellingPlans", 7), i = k(t, "selectedSellingPlan", 7), u = k(t, "onChange", 7), h = k(t, "onRequestAddToCart", 7), b = It(), g = un(), f = d(() => $o(c())), v = d(() => {
      var X, Z;
      const I = (Z = (X = r()) == null ? void 0 : X.dealBar) == null ? void 0 : Z.sellingPlanGid;
      if (I) return l().find((C) => C.id === Qt(I));
    }), w = d(() => {
      var X, Z;
      return (Z = (X = e(v)) != null ? X : i()) != null ? Z : l()[0];
    }), m = d(() => {
      var X, Z, I, C, N;
      return (N = (C = (Z = (X = r()) == null ? void 0 : X.pricing.discountedPricesForSellingPlans.find((H) => {
        var J;
        return H.sellingPlanId === ((J = e(w)) == null ? void 0 : J.id);
      })) == null ? void 0 : Z.discountedPrice) != null ? C : (I = r()) == null ? void 0 : I.pricing.discountedPrice) != null ? N : 0;
    }), z = d(() => {
      var X, Z;
      return (Z = (X = r()) == null ? void 0 : X.pricing.discountedPriceWithoutSellingPlan) != null ? Z : 0;
    }), S = d(() => {
      var X, Z;
      return (Z = (X = r()) == null ? void 0 : X.pricing.fullPrice) != null ? Z : 0;
    }), B = d(() => {
      var X, Z, I;
      return dn({ priceFormatter: a(), product: (X = r()) == null ? void 0 : X.product, totalFullPrice: e(S), totalDiscountedPrice: c().subscribeByDefault ? e(z) : e(m), quantity: (I = (Z = r()) == null ? void 0 : Z.quantity) != null ? I : 1, sellingPlan: c().subscribeByDefault ? void 0 : e(w), unitQuantity: null });
    }), q = d(() => c().subscribeByDefault ? e(z) : e(m)), Q = d(() => {
      const X = c().subscribeByDefault ? c().oneTimeTitle : c().subscribeTitle;
      return X ? e(B)(ze(b, "$translate", s)(X)) : "";
    });
    let W, re = !1;
    Xe(() => {
      const X = l().length !== 0 && c().subscribeByDefault ? e(w) : void 0;
      re && (X == null ? void 0 : X.id) === W || (W = X == null ? void 0 : X.id, re = !0, u()(X));
    });
    var M = { get subscriptions() {
      return c();
    }, set subscriptions(X) {
      c(X), _();
    }, get sellingPlans() {
      return l();
    }, set sellingPlans(X) {
      l(X), _();
    }, get selectedSellingPlan() {
      return i();
    }, set selectedSellingPlan(X) {
      i(X), _();
    }, get onChange() {
      return u();
    }, set onChange(X) {
      u(X), _();
    }, get onRequestAddToCart() {
      return h();
    }, set onRequestAddToCart(X) {
      h(X), _();
    } }, K = Me(), A = pe(K), U = (X) => {
      var Z = Y0(), I = y(Z);
      I.__click = [J0, h, c, w];
      var C = y(I);
      Te(C, () => e(Q));
      var N = j(C), H = (J) => {
        var oe = Un();
        be((G) => ht(oe, G), [() => " • " + a()(e(q))]), p(J, oe);
      };
      E(N, (J) => {
        c().showPrices && r() && J(H);
      }), x(I), x(Z), be(() => Tt(Z, e(f))), p(X, Z);
    };
    E(A, (X) => {
      l().length > 0 && e(Q) && X(U);
    }), p(n, K);
    var O = tt(M);
    return o(), O;
  }
  On(["click"]), He(Yd, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, onChange: {}, onRequestAddToCart: {} }, [], [], !0);
  var K0 = $('<div class="kaching-bundles__block-title"><!></div>'), X0 = $('<!> <div class="kaching-bundles__subscriptions-wrapper"><!></div>', 1);
  function Kd(n, t) {
    et(t, !0);
    const [r, a] = vt(), s = k(t, "subscriptions", 7), o = k(t, "sellingPlans", 7), c = k(t, "selectedSellingPlan", 7), l = k(t, "hideSellingPlanSelector", 7, !1), i = k(t, "hideTitle", 7, !1), u = k(t, "onChange", 7), h = k(t, "onRequestAddToCart", 7), b = It(), g = d(() => s().title ? ze(b, "$translate", r)(s().title) : "");
    var f = { get subscriptions() {
      return s();
    }, set subscriptions(W) {
      s(W), _();
    }, get sellingPlans() {
      return o();
    }, set sellingPlans(W) {
      o(W), _();
    }, get selectedSellingPlan() {
      return c();
    }, set selectedSellingPlan(W) {
      c(W), _();
    }, get hideSellingPlanSelector() {
      return l();
    }, set hideSellingPlanSelector(W = !1) {
      l(W), _();
    }, get hideTitle() {
      return i();
    }, set hideTitle(W = !1) {
      i(W), _();
    }, get onChange() {
      return u();
    }, set onChange(W) {
      u(W), _();
    }, get onRequestAddToCart() {
      return h();
    }, set onRequestAddToCart(W) {
      h(W), _();
    } }, v = X0(), w = pe(v), m = (W) => {
      var re = K0();
      Te(y(re), () => e(g)), x(re), p(W, re);
    };
    E(w, (W) => {
      e(g) && !i() && W(m);
    });
    var z = j(w, 2), S = y(z), B = (W) => {
      Jd(W, { get subscriptions() {
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
    }, q = (W) => {
      var re = Me(), M = pe(re), K = (U) => {
        Yd(U, { get subscriptions() {
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
      }, A = (U) => {
        Zd(U, { get subscriptions() {
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
      E(M, (U) => {
        s().layout === "link" ? U(K) : U(A, !1);
      }, !0), p(W, re);
    };
    E(S, (W) => {
      s().layout === "checkbox" ? W(B) : W(q, !1);
    }), x(z), p(n, v);
    var Q = tt(f);
    return a(), Q;
  }
  He(Kd, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, hideTitle: {}, onChange: {}, onRequestAddToCart: {} }, [], [], !0);
  var ek = Tn('<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.584 21H42.834V14C42.834 6.279 36.555 0 28.834 0C21.113 0 14.834 6.279 14.834 14V21H13.084C10.1907 21 7.83398 23.3543 7.83398 26.25V50.75C7.83398 53.6457 10.1907 56 13.084 56H44.584C47.4773 56 49.834 53.6457 49.834 50.75V26.25C49.834 23.3543 47.4773 21 44.584 21ZM19.5007 14C19.5007 8.85267 23.6867 4.66667 28.834 4.66667C33.9813 4.66667 38.1673 8.85267 38.1673 14V21H19.5007V14ZM31.1673 39.018V44.3333C31.1673 45.6213 30.1243 46.6667 28.834 46.6667C27.5436 46.6667 26.5007 45.6213 26.5007 44.3333V39.018C25.1123 38.2083 24.1673 36.7197 24.1673 35C24.1673 32.4263 26.2603 30.3333 28.834 30.3333C31.4076 30.3333 33.5007 32.4263 33.5007 35C33.5007 36.7197 32.5557 38.2083 31.1673 39.018Z" fill="currentColor" transform="translate(21.5, 22)"></path></svg>');
  function Xd(n) {
    p(n, ek());
  }
  He(Xd, {}, [], [], !0);
  var tk = $('<img alt="Locked" class="kaching-bundles__progressive-gifts__gift__image"/>'), nk = $('<span class="kaching-bundles__progressive-gifts__gift__label__text"><!></span>'), rk = $('<span class="kaching-bundles__progressive-gifts__gift__label__text kaching-bundles__progressive-gifts__gift__label__text--crossed-out"><!></span>'), ak = $('<div class="kaching-bundles__progressive-gifts__gift__label"><!> <!></div>'), ik = $('<div class="kaching-bundles__progressive-gifts__gift__content"><div class="kaching-bundles__progressive-gifts__gift__image-wrapper"><!></div> <div class="kaching-bundles__progressive-gifts__gift__title kaching-bundles__progressive-gifts__gift__title--locked"><!></div> <!></div>'), lk = $('<div class="kaching-bundles__progressive-gifts__gift__image-wrapper"><img class="kaching-bundles__progressive-gifts__gift__image"/></div>'), sk = $('<span class="kaching-bundles__progressive-gifts__gift__title"><!></span>'), ok = $('<span class="kaching-bundles__progressive-gifts__gift__label__text"><!></span>'), ck = $('<span class="kaching-bundles__progressive-gifts__gift__label__text kaching-bundles__progressive-gifts__gift__label__text--crossed-out"><!></span>'), uk = $('<div class="kaching-bundles__progressive-gifts__gift__label"><!> <!></div>'), dk = $('<div><div class="kaching-bundles__progressive-gifts__gift__content"><!> <div class="kaching-bundles__progressive-gifts__gift__details"><div class="kaching-bundles__progressive-gifts__gift__details__content"><!> <!></div> <!></div></div></div>');
  function eg(n, t) {
    et(t, !0);
    const r = () => ze(S, "$config", o), a = () => ze(w, "$translate", o), s = () => ze(z, "$getMediaImageUrl", o), [o, c] = vt(), l = k(t, "progressiveGifts", 7), i = k(t, "gift", 7), u = k(t, "product", 7), h = k(t, "selectedDealBarIndex", 7), b = k(t, "sellingPlan", 7), g = k(t, "onChange", 7), f = k(t, "onUnlock", 7), v = k(t, "onSubscribe", 7), w = It(), m = un(), z = Ln(), S = kn(), B = d(() => i().differentVariantsEnabled), q = d(() => {
      var R;
      return u() ? i().variantGIDs ? i().variantGIDs.map(Qt) : (R = u()) == null ? void 0 : R.variants.map((P) => P.id) : null;
    }), Q = d(() => {
      if (u()) return { ...u(), variants: u().variants.filter((R) => (r().preview || R.availableForSale) && (!e(q) || e(q).includes(R.id))) };
    });
    let W = Ae(lt([]));
    const re = d(() => (function(R, P, D) {
      return R.length > 0 ? R : P != null && P.availableForSale && P.variants.length > 0 ? Array.from({ length: D }, () => P.variants[0].id) : [];
    })(e(W), e(Q), i().quantity)), M = d(() => u() && e(re).length > 0 ? e(re).map((R) => u().variants.find((P) => P.id === R)).filter((R) => R !== void 0) : []), K = d(() => {
      var R;
      return dn({ priceFormatter: ze(m, "$formatPrice", o), product: u(), totalFullPrice: ((R = e(M)) == null ? void 0 : R.reduce((P, D) => {
        var ae;
        return P + ((ae = D == null ? void 0 : D.price) != null ? ae : 0);
      }, 0)) || 0, totalDiscountedPrice: 0, quantity: i().quantity, unitQuantity: mr(e(M).map((P) => ({ variant: P, quantity: 1 }))) });
    }), A = d(() => e(K)(a()(i().title))), U = d(() => e(K)(a()(i().lockedTitle))), O = d(() => e(K)(a()(i().label))), X = d(() => e(K)(a()(i().labelCrossedOut))), Z = d(() => h() === null || !mo(i(), h() + 1)), I = d(() => xd(i(), b())), C = d(() => e(Z) || e(I));
    function N() {
      e(Z) && f()(), e(I) && v()();
    }
    const H = d(() => {
      var R, P, D;
      return i().giftType === "shipping" ? vo : ((P = (R = e(M)) == null ? void 0 : R[0]) == null ? void 0 : P.image) || ((D = u()) == null ? void 0 : D.image);
    }), J = d(() => i().mediaImageGID ? s()(i().mediaImageGID) : e(H)), oe = d(() => !l().inheritStyle && l().style && s()(l().style.lockedMediaImageGID));
    Xe(() => {
      if (u() && e(M) && !e(C)) {
        const R = Object.values(e(M).reduce((P, D) => (P[D.id] ? P[D.id].quantity += 1 : P[D.id] = { variant: D, quantity: 1 }, P), {}));
        Jt(() => g()({ product: u(), variants: R }));
      } else Jt(() => g()(void 0));
    }), br(() => {
      i().productGID;
    }), Xe(() => {
      e(C) && e(J) && (new Image().src = e(J));
    });
    const G = d(() => !(i().giftType !== "product" || !u() || u().availableForSale && u().variants.filter((R) => R.availableForSale && (!e(q) || e(q).includes(R.id))).length !== 0));
    var V = { get progressiveGifts() {
      return l();
    }, set progressiveGifts(R) {
      l(R), _();
    }, get gift() {
      return i();
    }, set gift(R) {
      i(R), _();
    }, get product() {
      return u();
    }, set product(R) {
      u(R), _();
    }, get selectedDealBarIndex() {
      return h();
    }, set selectedDealBarIndex(R) {
      h(R), _();
    }, get sellingPlan() {
      return b();
    }, set sellingPlan(R) {
      b(R), _();
    }, get onChange() {
      return g();
    }, set onChange(R) {
      g(R), _();
    }, get onUnlock() {
      return f();
    }, set onUnlock(R) {
      f(R), _();
    }, get onSubscribe() {
      return v();
    }, set onSubscribe(R) {
      v(R), _();
    } }, F = Me(), L = pe(F), te = (R) => {
      var P = Me(), D = pe(P), ae = (T) => {
        var ee = Me(), Y = pe(ee), ie = (Ce) => {
          Ut(Ce, { element: "div", class: "kaching-bundles__progressive-gifts__gift kaching-bundles__progressive-gifts__gift--locked", onclick: N, children: (ve, xe) => {
            var fe = ik(), ce = y(fe), ne = y(ce), ge = (le) => {
              var De = tk();
              be(() => we(De, "src", e(oe))), p(le, De);
            }, Be = (le) => {
              Xd(le);
            };
            E(ne, (le) => {
              e(oe) ? le(ge) : le(Be, !1);
            }), x(ce);
            var Se = j(ce, 2);
            Te(y(Se), () => e(U)), x(Se);
            var Le = j(Se, 2), Ve = (le) => {
              var De = ak(), qe = y(De), _e = (Pe) => {
                var Ge = nk();
                Te(y(Ge), () => e(O)), x(Ge), p(Pe, Ge);
              };
              E(qe, (Pe) => {
                e(O) && Pe(_e);
              });
              var Ie = j(qe, 2), $e = (Pe) => {
                var Ge = rk();
                Te(y(Ge), () => e(X)), x(Ge), p(Pe, Ge);
              };
              E(Ie, (Pe) => {
                e(X) && Pe($e);
              }), x(De), p(le, De);
            };
            E(Le, (le) => {
              (e(O) || e(X)) && l().showLockedGiftLabels && le(Ve);
            }), x(fe), p(ve, fe);
          }, $$slots: { default: !0 } });
        }, me = (Ce) => {
          var ve = dk();
          let xe;
          var fe = y(ve), ce = y(fe), ne = (_e) => {
            var Ie = lk(), $e = y(Ie);
            x(Ie), be(() => {
              var Pe, Ge;
              we($e, "src", e(J)), we($e, "alt", (Ge = (Pe = u()) == null ? void 0 : Pe.title) != null ? Ge : "");
            }), p(_e, Ie);
          };
          E(ce, (_e) => {
            e(J) && _e(ne);
          });
          var ge = j(ce, 2), Be = y(ge), Se = y(Be), Le = (_e) => {
            var Ie = sk();
            Te(y(Ie), () => e(A)), x(Ie), p(_e, Ie);
          };
          E(Se, (_e) => {
            e(A) && _e(Le);
          });
          var Ve = j(Se, 2), le = (_e) => {
            var Ie = uk(), $e = y(Ie), Pe = (ot) => {
              var nt = ok();
              Te(y(nt), () => e(O)), x(nt), p(ot, nt);
            };
            E($e, (ot) => {
              e(O) && ot(Pe);
            });
            var Ge = j($e, 2), bt = (ot) => {
              var nt = ck();
              Te(y(nt), () => e(X)), x(nt), p(ot, nt);
            };
            E(Ge, (ot) => {
              e(X) && ot(bt);
            }), x(Ie), p(_e, Ie);
          };
          E(Ve, (_e) => {
            (e(O) || e(X)) && _e(le);
          }), x(Be);
          var De = j(Be, 2), qe = (_e) => {
            var Ie = Me();
            At(pe(Ie), 17, () => ({ length: e(B) ? i().quantity : 1 }), $r, ($e, Pe, Ge) => {
              var bt = Me(), ot = pe(bt), nt = (it) => {
                {
                  let wt = d(() => e(B) ? Ge + 1 : void 0);
                  Hn(it, { get product() {
                    return e(Q);
                  }, get selectedVariantId() {
                    return e(re)[Ge];
                  }, get number() {
                    return e(wt);
                  }, forceDropdown: !0, onChange: (Wt) => (function(Gt, ut) {
                    e(B) ? se(W, [...e(re).slice(0, ut), Gt, ...e(re).slice(ut + 1)], !0) : se(W, Array.from({ length: i().quantity }, () => Gt), !0);
                  })(Wt, Ge) });
                }
              };
              E(ot, (it) => {
                e(re)[Ge] !== void 0 && it(nt);
              }), p($e, bt);
            }), p(_e, Ie);
          };
          E(De, (_e) => {
            e(Q) && e(Q).variants.length > 1 && e(re).length > 0 && _e(qe);
          }), x(ge), x(fe), x(ve), be((_e) => xe = Et(ve, 1, "kaching-bundles__progressive-gifts__gift", null, xe, _e), [() => ({ "kaching-bundles__progressive-gifts__gift--out-of-stock": r().preview && e(G) })]), p(Ce, ve);
        };
        E(Y, (Ce) => {
          e(C) ? Ce(ie) : Ce(me, !1);
        }), p(T, ee);
      };
      E(D, (T) => {
        var ee;
        (u() && ((ee = e(M)) != null && ee.length || r().preview && e(G)) || i().giftType === "shipping") && T(ae);
      }), p(R, P);
    };
    E(L, (R) => {
      e(C) && l().hideLockedGifts || R(te);
    }), p(n, F);
    var ue = tt(V);
    return c(), ue;
  }
  He(eg, { progressiveGifts: {}, gift: {}, product: {}, selectedDealBarIndex: {}, sellingPlan: {}, onChange: {}, onUnlock: {}, onSubscribe: {} }, [], [], !0);
  var gk = $('<span class="kaching-bundles__progressive-gifts__title"><!></span>'), hk = $('<span class="kaching-bundles__progressive-gifts__subtitle"><!></span>'), pk = $('<div class="kaching-bundles__progressive-gifts"><div class="kaching-bundles__progressive-gifts__header"><!> <!></div> <div></div></div>');
  function tg(n, t) {
    et(t, !0);
    const r = () => ze(w, "$config", s), a = () => ze(v, "$translate", s), [s, o] = vt(), c = k(t, "progressiveGifts", 7), l = k(t, "dealBlock", 7), i = k(t, "otherProducts", 7), u = k(t, "selectedDealBarIndex", 7), h = k(t, "sellingPlan", 7), b = k(t, "onChange", 7), g = k(t, "onUnlock", 7), f = k(t, "onSubscribe", 7), v = It(), w = kn();
    let m = Ae(lt({}));
    const z = d(() => ((K) => {
      const { progressiveGifts: A, colors: U, fonts: O } = K, X = (A == null ? void 0 : A.inheritStyle) || !(A != null && A.style);
      return bn({ "kaching-bundles-progressive-gifts-title-color": Re(A.titleColor), "kaching-bundles-progressive-gifts-title-alignment": A.titleAlignment, "kaching-bundles-progressive-gifts-title-size": A.titleSize + "px", "kaching-bundles-progressive-gifts-title-weight": ur(A.titleStyle), "kaching-bundles-progressive-gifts-title-style": dr(A.titleStyle), "kaching-bundles-progressive-gifts-subtitle-color": Re(A.subtitleColor), "kaching-bundles-progressive-gifts-subtitle-alignment": A.subtitleAlignment, "kaching-bundles-progressive-gifts-subtitle-size": A.subtitleSize + "px", "kaching-bundles-progressive-gifts-subtitle-weight": ur(A.subtitleStyle), "kaching-bundles-progressive-gifts-subtitle-style": dr(A.subtitleStyle), "kaching-bundles-progressive-gifts-image-size": X ? void 0 : A.style.imageSize + "px", "kaching-bundles-progressive-gifts-border-radius": (X ? K.cornerRadius : A.style.cornerRadius) + "px", "kaching-bundles-progressive-gifts-label-background-color": Re(X ? U.progressiveGiftsLabelBackground || U.labelBackground : A.style.labelBackgroundColor), "kaching-bundles-progressive-gifts-label-text-color": Re(X ? U.label : A.style.labelTextColor), "kaching-bundles-progressive-gifts-label-text-size": (X ? O.label.size : A.style.labelTextSize) + "px", "kaching-bundles-progressive-gifts-background-color": Re(X ? U.selectedBackground : A.style.backgroundColor), "kaching-bundles-progressive-gifts-border-color": Re(X ? U.border : A.style.borderColor), "kaching-bundles-progressive-gifts-text-color": Re(X ? U.title : A.style.textColor), "kaching-bundles-progressive-gifts-text-size": X ? void 0 : A.style.textSize + "px", "kaching-bundles-progressive-gifts-locked-background-color": Re(X ? U.background : A.style.lockedBackgroundColor), "kaching-bundles-progressive-gifts-locked-border-color": Re(X ? { ...U.border, alpha: 0.3 * U.border.alpha } : A.style.lockedBorderColor), "kaching-bundles-progressive-gifts-locked-text-color": X ? void 0 : Re(A.style.lockedTextColor), "kaching-bundles-progressive-gifts-locked-text-size": X ? void 0 : A.style.lockedTextSize + "px", "kaching-bundles-progressive-gifts-locked-icon-color": X ? void 0 : Re(A.style.lockedIconColor) });
    })(l()));
    function S() {
      const K = Object.entries(e(m)).map(([A, U]) => ({ id: A, variants: U.variants, product: U.product }));
      b()(K);
    }
    const B = d(() => c().gifts.flatMap((K) => {
      const A = K.giftType === "product" && K.productGID ? i().find((O) => O.id === Qt(K.productGID)) : void 0;
      if (!r().preview && K.giftType === "product" && !(A != null && A.availableForSale)) return [];
      const U = A && !r().preview ? kr(A) : A;
      return { gift: K, product: U };
    }));
    Xe(() => {
      const K = new Set(c().gifts.map((U) => U.id)), A = Object.keys(e(m)).filter((U) => !K.has(U));
      if (A.length) {
        for (const U of A) delete e(m)[U];
        S();
      }
    });
    var q = { get progressiveGifts() {
      return c();
    }, set progressiveGifts(K) {
      c(K), _();
    }, get dealBlock() {
      return l();
    }, set dealBlock(K) {
      l(K), _();
    }, get otherProducts() {
      return i();
    }, set otherProducts(K) {
      i(K), _();
    }, get selectedDealBarIndex() {
      return u();
    }, set selectedDealBarIndex(K) {
      u(K), _();
    }, get sellingPlan() {
      return h();
    }, set sellingPlan(K) {
      h(K), _();
    }, get onChange() {
      return b();
    }, set onChange(K) {
      b(K), _();
    }, get onUnlock() {
      return g();
    }, set onUnlock(K) {
      g(K), _();
    }, get onSubscribe() {
      return f();
    }, set onSubscribe(K) {
      f(K), _();
    } }, Q = Me(), W = pe(Q), re = (K) => {
      var A = pk(), U = y(A), O = y(U), X = (H) => {
        var J = gk();
        Te(y(J), () => a()(c().title)), x(J), p(H, J);
      };
      E(O, (H) => {
        c().title && H(X);
      });
      var Z = j(O, 2), I = (H) => {
        var J = hk();
        Te(y(J), () => a()(c().subtitle)), x(J), p(H, J);
      };
      E(Z, (H) => {
        c().subtitle && H(I);
      }), x(U);
      var C = j(U, 2);
      let N;
      At(C, 21, () => e(B), ({ gift: H, product: J }) => H.id, (H, J) => {
        let oe = () => e(J).gift;
        eg(H, { get progressiveGifts() {
          return c();
        }, get gift() {
          return oe();
        }, get product() {
          return e(J).product;
        }, get selectedDealBarIndex() {
          return u();
        }, get sellingPlan() {
          return h();
        }, onChange: (G) => (function(V, F) {
          F ? e(m)[V] = F : delete e(m)[V], S();
        })(oe().id, G), onUnlock: () => g()(oe().unlockAtBar - 1), get onSubscribe() {
          return f();
        } });
      }), x(C), x(A), be((H) => {
        Tt(A, e(z)), N = Et(C, 1, "kaching-bundles__progressive-gifts__gifts", null, N, H);
      }, [() => ({ "kaching-bundles__progressive-gifts__gifts--vertical": c().layout === "vertical" })]), p(K, A);
    };
    E(W, (K) => {
      c().gifts.length > 0 && K(re);
    }), p(n, Q);
    var M = tt(q);
    return o(), M;
  }
  He(tg, { progressiveGifts: {}, dealBlock: {}, otherProducts: {}, selectedDealBarIndex: {}, sellingPlan: {}, onChange: {}, onUnlock: {}, onSubscribe: {} }, [], [], !0);
  var bk = $('<span class="kaching-bundles__bar-title"><!></span>'), fk = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), vk = $('<div class="kaching-bundles__bar-price"><!></div>'), _k = $('<div class="kaching-bundles__bar-full-price"><!></div>'), kk = $('<span><!></span> <img class="kaching-bundles__checkbox-upsells__image"/> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div></div> <div class="kaching-bundles__bar-pricing"><!> <!></div>', 1), mk = $('<div class="kaching-bundles__bar-variants kaching-bundles__bar-variants--visible"><!> <!></div>'), xk = $('<div class="kaching-bundles__bar-variants kaching-bundles__bar-variants--visible"><!></div>'), yk = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!></div>', 1), wk = $("<div><!></div>");
  function ng(n, t) {
    et(t, !0);
    const r = () => ze(w, "$config", o), a = () => ze(f, "$formatPrice", o), s = () => ze(ue, "$translate", o), [o, c] = vt(), l = k(t, "checkboxUpsell", 7), i = k(t, "product", 7), u = k(t, "dealBlock", 7), h = k(t, "dealSellingPlan", 7), b = k(t, "dealBarQuantity", 7), g = k(t, "onChange", 7), f = un(), v = Ln(), w = kn();
    let m = Ae(!1), z = Ae(1), S = Ae(lt({})), B = Ae(void 0);
    const q = d(() => {
      var fe;
      return (fe = l().preselected) != null && fe;
    }), Q = d(() => {
      var fe;
      return e(m) || !((fe = l().showProductOptionsOnlyWhenSelected) == null || fe);
    });
    Xe(() => {
      se(m, e(q), !0);
    }), Xe(() => {
      l().matchQuantityWithDealBar && se(z, b(), !0);
    });
    const W = d(() => !!l().variantGIDs), re = d(() => {
      var fe, ce;
      return e(W) && i() ? i().variants.filter((ne) => l().variantGIDs.some((ge) => Qt(ge) === ne.id)) : (ce = (fe = i()) == null ? void 0 : fe.variants) != null ? ce : [];
    }), M = d(() => e(z) > 1 && e(re).length > 1), K = d(() => (function(fe, ce) {
      if (fe.variantGIDs)
        return fe.variantGIDs.length === 0 ? void 0 : Qt(fe.variantGIDs[0]);
      if (ce != null && ce.availableForSale && ce.variants.length > 0) return ce.variants[0].id;
    })(l(), i())), A = d(() => {
      if (e(K) === void 0) return [];
      const fe = [];
      for (let ce = 0; ce < e(z); ce++) {
        const ne = e(S)[ce];
        ne !== void 0 ? fe.push(ne) : fe.push(e(K));
      }
      return fe;
    }), U = d(() => (function(fe, ce) {
      if (!ce) return [];
      const ne = {};
      for (const ge of fe) {
        const Be = ne[ge];
        if (Be) {
          Be.quantity += 1;
          continue;
        }
        const Se = ce.variants.find((Le) => Le.id === ge);
        Se && (ne[ge] = { variant: Se, quantity: 1 });
      }
      return Object.values(ne);
    })(e(A), i())), O = d(() => {
      var fe;
      return (fe = e(U)[0]) == null ? void 0 : fe.variant;
    }), X = d(() => {
      var fe;
      return (fe = l().subscriptionEnabled) == null || fe;
    }), Z = d(() => {
      var fe;
      return (fe = l().subscriptionType) != null ? fe : "deal";
    }), I = d(() => e(X) && e(Z) === "always" && i() && e(O) ? ll(i(), [e(O)]) : []), C = d(() => e(I).find((fe) => fe.id === e(B)) || e(I)[0]);
    Xe(() => {
      var fe;
      e(I).some((ce) => {
        var ne;
        return ce.id === ((ne = h()) == null ? void 0 : ne.id);
      }) && se(B, (fe = h()) == null ? void 0 : fe.id, !0);
    });
    const N = d(() => {
      if (i() && e(O) && e(X))
        return e(Z) === "deal" ? h() ? Kn(i(), e(O), h()) : void 0 : e(C);
    }), H = d(() => u().priceRounding ? { perItem: u().showPricesPerItem, precision: u().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0);
    function J(fe) {
      return la({ discountType: l().discountType, discountValue: l().discountValue, discountQuantity: 1, variantQuantities: e(U), currencyRate: r().currencyRate, priceRounding: e(H), sellingPlan: fe });
    }
    let oe = d(() => J(e(N))), G = d(() => e(U).reduce((fe, { variant: ce, quantity: ne }) => fe + Math.max(ce.price, ce.compareAtPrice || 0) * ne, 0));
    const V = d(() => i() && e(O) ? Kn(i(), e(O), void 0) : void 0), F = d(() => e(X) && e(Z) === "always" ? e(oe) : J(e(V))), L = d(() => !i() || !e(O) ? [] : ll(i(), [e(O)]).map((fe) => {
      let ce;
      return ce = e(X) ? e(Z) === "always" ? e(C) : fe : e(V), { sellingPlanId: fe.id, discountedPrice: J(ce) };
    })), te = d(() => dn({ priceFormatter: a(), product: i(), totalFullPrice: e(G), totalDiscountedPrice: e(oe), quantity: e(z), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: mr(e(U)), sellingPlan: e(N) })), ue = It();
    let R = d(() => e(te)(s()(l().title))), P = d(() => e(te)(s()(l().subtitle))), D = d(() => e(G) && e(G) > e(oe));
    const ae = d(() => ze(v, "$getMediaImageUrl", o)(l().mediaImageGID)), T = d(() => ((fe, ce) => {
      const ne = os(fe);
      if (ne.length > 0) return ne.filter((Be) => Be.attachedTo.type === "checkboxUpsell" && Be.attachedTo.upsellId === ce.id);
      if (fe.badgesEnabled === !1) return [];
      const ge = rd(ce);
      return ge ? [ge] : [];
    })(u(), { id: l().id, badgeStyle: l().badgeStyle, badgeText: l().badgeText, badgeImageGID: l().badgeImageGID }).map((fe) => ya(fe, s(), e(te)))), ee = d(() => wa(e(T)));
    function Y() {
      se(m, !e(m));
    }
    function ie(fe, ce) {
      se(S, { ...e(S), [fe]: ce }, !0);
    }
    Xe(() => {
      if (i() && e(U).length > 0 && e(m)) {
        const fe = e(N);
        Jt(() => g()({ product: i(), variants: e(U), sellingPlan: fe, pricing: { discountedPrice: e(oe), fullPrice: e(G), discountedPriceWithoutSellingPlan: e(F), discountedPricesForSellingPlans: e(L) } }));
      } else Jt(() => g()(void 0));
    });
    var me = { get checkboxUpsell() {
      return l();
    }, set checkboxUpsell(fe) {
      l(fe), _();
    }, get product() {
      return i();
    }, set product(fe) {
      i(fe), _();
    }, get dealBlock() {
      return u();
    }, set dealBlock(fe) {
      u(fe), _();
    }, get dealSellingPlan() {
      return h();
    }, set dealSellingPlan(fe) {
      h(fe), _();
    }, get dealBarQuantity() {
      return b();
    }, set dealBarQuantity(fe) {
      b(fe), _();
    }, get onChange() {
      return g();
    }, set onChange(fe) {
      g(fe), _();
    } }, Ce = wk();
    let ve;
    Za(y(Ce), { element: "div", get borderHost() {
      return e(ee);
    }, children: (fe, ce) => {
      var ne = yk(), ge = pe(ne);
      At(ge, 17, () => e(T), (Ie) => Ie.id, (Ie, $e) => {
        sa(Ie, { get badge() {
          return e($e);
        }, blockLayout: "vertical" });
      });
      var Be = j(ge, 2), Se = y(Be);
      Ut(Se, { element: "div", class: "kaching-bundles__bar-main", role: "checkbox", get "aria-checked"() {
        return e(m);
      }, onclick: Y, children: (Ie, $e) => {
        var Pe = kk(), Ge = pe(Pe);
        let bt;
        var ot = y(Ge), nt = (Ue) => {
          cs(Ue);
        };
        E(ot, (Ue) => {
          e(m) && Ue(nt);
        }), x(Ge);
        var it = j(Ge, 2), wt = j(it, 2), Wt = y(wt), Gt = y(Wt);
        rt(y(Gt), () => e(R), (Ue) => {
          var Je = bk();
          Te(y(Je), () => e(R)), x(Je), p(Ue, Je);
        }), x(Gt);
        var ut = j(Gt, 2), Ft = (Ue) => {
          var Je = Me();
          rt(pe(Je), () => e(P), (Oe) => {
            var Qe = fk();
            Te(y(Qe), () => e(P)), x(Qe), p(Oe, Qe);
          }), p(Ue, Je);
        };
        E(ut, (Ue) => {
          e(P) && Ue(Ft);
        }), x(Wt), x(wt);
        var Yt = j(wt, 2), ye = y(Yt);
        rt(ye, () => e(oe), (Ue) => {
          var Je = vk();
          Te(y(Je), () => a()(e(oe))), x(Je), be((Oe) => we(Je, "data-a11y-label", Oe), [() => s()("system.price")]), p(Ue, Je);
        });
        var he = j(ye, 2), Fe = (Ue) => {
          var Je = Me();
          rt(pe(Je), () => e(G), (Oe) => {
            var Qe = _k();
            Te(y(Qe), () => a()(e(G))), x(Qe), be((Ke) => we(Qe, "data-a11y-label", Ke), [() => s()("system.original_price")]), p(Oe, Qe);
          }), p(Ue, Je);
        };
        E(he, (Ue) => {
          e(D) && Ue(Fe);
        }), x(Yt), be((Ue) => {
          var Je, Oe, Qe;
          bt = Et(Ge, 1, "kaching-bundles__checkbox-upsells__checkbox", null, bt, Ue), we(it, "src", e(ae) || ((Je = e(O)) == null ? void 0 : Je.image) || ((Oe = i()) == null ? void 0 : Oe.image)), we(it, "alt", (Qe = i()) == null ? void 0 : Qe.title);
        }, [() => ({ "kaching-bundles__checkbox-upsells__checkbox--selected": e(m) })]), p(Ie, Pe);
      }, $$slots: { default: !0 } });
      var Le = j(Se, 2), Ve = (Ie) => {
        var $e = mk(), Pe = y($e);
        {
          let nt = d(() => ({ ...i(), variants: e(re) }));
          ia(Pe, { get product() {
            return e(nt);
          } });
        }
        var Ge = j(Pe, 2), bt = (nt) => {
          var it = Me();
          At(pe(it), 17, () => ({ length: e(z) }), $r, (wt, Wt, Gt) => {
            {
              let ut = d(() => ({ ...i(), variants: e(re) })), Ft = d(() => e(z) > 1 ? Gt + 1 : void 0);
              Hn(wt, { get product() {
                return e(ut);
              }, get selectedVariantId() {
                return e(A)[Gt];
              }, get number() {
                return e(Ft);
              }, onChange: (Yt) => ie(Gt, Yt) });
            }
          }), p(nt, it);
        }, ot = (nt) => {
          {
            let it = d(() => ({ ...i(), variants: e(re) }));
            Hn(nt, { get product() {
              return e(it);
            }, get selectedVariantId() {
              return e(A)[0];
            }, onChange: (wt) => ie(0, wt) });
          }
        };
        E(Ge, (nt) => {
          e(M) ? nt(bt) : nt(ot, !1);
        }), x($e), p(Ie, $e);
      };
      E(Le, (Ie) => {
        e(Q) && e(re).length > 1 && e(A).length > 0 && Ie(Ve);
      });
      var le = j(Le, 2), De = (Ie) => {
        var $e = xk();
        Pa(y($e), { get sellingPlans() {
          return e(I);
        }, get selectedSellingPlan() {
          return e(C);
        }, onChange: (Pe) => se(B, Pe.id, !0) }), x($e), p(Ie, $e);
      };
      E(le, (Ie) => {
        e(Q) && e(I).length > 1 && e(C) && Ie(De);
      });
      var qe = j(le, 2), _e = (Ie) => {
        hl(Ie, { get value() {
          return e(z);
        }, min: 1, onChange: ($e) => se(z, $e, !0) });
      };
      E(qe, (Ie) => {
        e(Q) && l().quantitySelector && Ie(_e);
      }), x(Be), p(fe, ne);
    }, $$slots: { default: !0 } }), x(Ce), be((fe) => ve = Et(Ce, 1, "kaching-bundles__checkbox-upsells__upsell kaching-bundles__bar", null, ve, fe), [() => {
      var fe;
      return { "kaching-bundles__bar--selected": e(m), "kaching-bundles__bar--disabled": r().preview && !((fe = i()) != null && fe.availableForSale) };
    }]), p(n, Ce);
    var xe = tt(me);
    return c(), xe;
  }
  He(ng, { checkboxUpsell: {}, product: {}, dealBlock: {}, dealSellingPlan: {}, dealBarQuantity: {}, onChange: {} }, [], [], !0);
  var Pk = $('<div class="kaching-bundles__block-title"><!></div>'), Sk = $('<div class="kaching-bundles__checkbox-upsells"><!> <div class="kaching-bundles__checkbox-upsells__upsells"></div></div>');
  function rg(n, t) {
    et(t, !0);
    const [r, a] = vt(), s = k(t, "checkboxUpsells", 7), o = k(t, "dealBlock", 7), c = k(t, "otherProducts", 7), l = k(t, "complementaryProducts", 7), i = k(t, "dealSellingPlan", 7), u = k(t, "dealBarQuantity", 7), h = k(t, "onChange", 7), b = kn(), g = It(), f = d(() => s().title ? ze(g, "$translate", r)(s().title) : "");
    let v = Ae(lt({}));
    const w = d(() => l().map(kr)), m = Math.floor(1e3 * Math.random()), z = d(() => s().upsells.flatMap((M, K) => {
      if (M.productSource === "complementary") {
        const O = e(w)[(K + m) % (e(w).length || 1)];
        return O ? { upsell: M, product: O } : [];
      }
      const A = M.productGID ? c().find((O) => O.id === Qt(M.productGID)) : void 0;
      if (!ze(b, "$config", r).preview && !(A != null && A.availableForSale)) return [];
      const U = A && kr(A);
      return { upsell: M, product: U };
    }));
    var S = { get checkboxUpsells() {
      return s();
    }, set checkboxUpsells(M) {
      s(M), _();
    }, get dealBlock() {
      return o();
    }, set dealBlock(M) {
      o(M), _();
    }, get otherProducts() {
      return c();
    }, set otherProducts(M) {
      c(M), _();
    }, get complementaryProducts() {
      return l();
    }, set complementaryProducts(M) {
      l(M), _();
    }, get dealSellingPlan() {
      return i();
    }, set dealSellingPlan(M) {
      i(M), _();
    }, get dealBarQuantity() {
      return u();
    }, set dealBarQuantity(M) {
      u(M), _();
    }, get onChange() {
      return h();
    }, set onChange(M) {
      h(M), _();
    } }, B = Sk(), q = y(B), Q = (M) => {
      var K = Pk();
      Te(y(K), () => e(f)), x(K), p(M, K);
    };
    E(q, (M) => {
      e(f) && M(Q);
    });
    var W = j(q, 2);
    At(W, 21, () => e(z), ({ upsell: M, product: K }) => M.id, (M, K) => {
      let A = () => e(K).upsell;
      ng(M, { get checkboxUpsell() {
        return A();
      }, get product() {
        return e(K).product;
      }, get dealBlock() {
        return o();
      }, get dealSellingPlan() {
        return i();
      }, get dealBarQuantity() {
        return u();
      }, onChange: (U) => (function(O, X) {
        var Z;
        X ? e(v)[O] = X : delete e(v)[O];
        const I = Object.entries(e(v)).flatMap(([G, V]) => V.variants.map(({ variant: F, quantity: L }) => ({ id: G, variant: F, product: V.product, quantity: L, sellingPlan: V.sellingPlan })));
        let C = 0, N = 0, H = 0;
        const J = /* @__PURE__ */ new Map();
        for (const G of Object.values(e(v))) {
          C += G.pricing.discountedPrice, N += G.pricing.fullPrice, H += G.pricing.discountedPriceWithoutSellingPlan;
          for (const V of G.pricing.discountedPricesForSellingPlans) J.set(V.sellingPlanId, ((Z = J.get(V.sellingPlanId)) != null ? Z : 0) + V.discountedPrice);
        }
        const oe = Array.from(J, ([G, V]) => ({ sellingPlanId: G, discountedPrice: V }));
        h()(I, { discountedPrice: C, fullPrice: N, discountedPriceWithoutSellingPlan: H, discountedPricesForSellingPlans: oe });
      })(A().id, U) });
    }), x(W), x(B), p(n, B);
    var re = tt(S);
    return a(), re;
  }
  He(rg, { checkboxUpsells: {}, dealBlock: {}, otherProducts: {}, complementaryProducts: {}, dealSellingPlan: {}, dealBarQuantity: {}, onChange: {} }, [], [], !0);
  var Bk = $('<div class="kaching-bundles__timer" role="timer"><div class="kaching-bundles__timer-title"><!></div></div>');
  function ag(n, t) {
    et(t, !0);
    const [r, a] = vt(), s = k(t, "timer", 7), o = It(), c = d(() => ((Q) => {
      const { textColor: W, backgroundColor: re, titleAlignment: M, titleStyle: K, titleSize: A } = Q;
      return bn({ "kaching-bundles-timer-background-color": Re(re), "kaching-bundles-timer-text-color": Re(W), "kaching-bundles-timer-title-alignment": M, "kaching-bundles-timer-title-font-weight": K ? ur(K) : null, "kaching-bundles-timer-title-font-style": K ? dr(K) : null, "kaching-bundles-timer-title-size": A ? A + "px" : null });
    })(s()));
    function l() {
      const Q = new yo(), W = new yo(Q);
      return W.setHours(24, 0, 0, 0), Math.floor((W.getTime() - Q.getTime()) / 1e3);
    }
    function i() {
      if (!s().endTimestamp) return 0;
      const Q = new yo();
      return Math.max(0, Math.floor((s().endTimestamp - Q.getTime()) / 1e3));
    }
    function u() {
      return s().type === "midnight" ? l() : s().type === "custom" ? i() : 60 * s().minutes;
    }
    let h = Ae(lt(u())), b = d(() => s().type !== "custom" || e(h) > 0);
    Xe(() => {
      se(h, u(), !0);
    }), Xe(() => {
      const Q = window.setInterval(() => {
        s().type === "midnight" ? se(h, l(), !0) : s().type === "custom" ? se(h, i(), !0) : se(h, e(h) <= 1 ? u() : e(h) - 1, !0);
      }, 1e3);
      return () => window.clearInterval(Q);
    });
    const g = d(() => ze(o, "$translate", r)(s().title)), f = d(() => (function(Q) {
      const W = Math.floor(Q / 86400), re = Math.floor(Q % 86400 / 3600), M = Math.floor(Q % 3600 / 60), K = Q % 60, A = (U) => U.toString().padStart(2, "0");
      return s().type === "custom" && W > 0 ? `${Intl.NumberFormat(navigator.language, { style: "unit", unit: "day", unitDisplay: "narrow" }).format(W)} ${A(re)}:${A(M)}:${A(K)}` : re > 0 ? `${A(re)}:${A(M)}:${A(K)}` : `${A(M)}:${A(K)}`;
    })(e(h))), v = d(() => e(g).replace(/\{\{\s*\w+\s*\}\}/g, '<span class="kaching-bundles__timer-value" translate="no"></span>'));
    let w = Ae(void 0);
    Xe(() => {
      !e(w) || !e(v) || e(w).querySelectorAll(".kaching-bundles__timer-value").forEach((Q) => {
        Q.textContent = ` ${e(f)} `;
      });
    });
    var m = { get timer() {
      return s();
    }, set timer(Q) {
      s(Q), _();
    } }, z = Me(), S = pe(z), B = (Q) => {
      var W = Bk(), re = y(W);
      Te(y(re), () => e(v)), x(re), _i(re, (M) => se(w, M), () => e(w)), x(W), be(() => Tt(W, e(c))), p(Q, W);
    };
    E(S, (Q) => {
      e(b) && Q(B);
    }), p(n, z);
    var q = tt(m);
    return a(), q;
  }
  function ig(n, t) {
    et(t, !0);
    const r = k(t, "dealBlockId", 7), a = k(t, "shopCustomStyles", 7), s = k(t, "customStyles", 7), o = d(() => {
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
      r(h), _();
    }, get shopCustomStyles() {
      return a();
    }, set shopCustomStyles(h) {
      a(h), _();
    }, get customStyles() {
      return s();
    }, set customStyles(h) {
      s(h), _();
    } }, l = Me(), i = pe(l), u = (h) => {
      var b = Me();
      Te(pe(b), () => e(o)), p(h, b);
    };
    return E(i, (h) => {
      e(o) && h(u);
    }), p(n, l), tt(c);
  }
  He(ag, { timer: {} }, [], [], !0), He(ig, { dealBlockId: {}, shopCustomStyles: {}, customStyles: {} }, [], [], !0);
  function Ck(n, t = 4) {
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
  function lg(n) {
    var t, r, a, s, o;
    const { dealBlock: c, product: l, pageProductId: i = l.id, selectedDealBarId: u, selectedVariantQuantities: h, selectedBundleProducts: b, selectedCollectionBreaksProducts: g, selectedFreeGifts: f, selectedProgressiveGifts: v, selectedCheckboxUpsells: w, selectedUpsells: m, selectedPersonalisations: z, selectedSellingPlan: S, dealBarSellingPlan: B, nativeBundleProductIds: q } = n, Q = (function(T) {
      var ee;
      const { product: Y, selectedVariantQuantities: ie, selectedBundleProducts: me, selectedCollectionBreaksProducts: Ce, selectedFreeGifts: ve, selectedProgressiveGifts: xe, selectedCheckboxUpsells: fe, selectedUpsells: ce, selectedSellingPlan: ne, dealBarSellingPlan: ge, selectedDealBarId: Be, dealBlock: Se, bundleNonce: Le } = T, Ve = me.length > 0 || Ce.length > 0 || ve.length > 0 || xe.length > 0 || ce.length > 0, le = ve.length > 0 || xe.length > 0 || ce.length > 0, De = ((ee = Se.dealBars.find((Ie) => Ie.id === Be)) == null ? void 0 : ee.dealBarType) === "mix-and-match", qe = le || De, _e = JSON.stringify([Ve ? ie.map(({ variant: Ie, quantity: $e }) => ({ variantId: Ie.id, quantity: $e })) : Y.id, me.map(({ id: Ie, variant: $e, quantity: Pe }) => ({ id: Ie, variantId: $e.id, quantity: Pe })), Ce.map(({ variant: Ie, quantity: $e }) => ({ variantId: Ie.id, quantity: $e })), ve.map(({ id: Ie, variant: $e, quantity: Pe }) => ({ id: Ie, variantId: $e.id, quantity: Pe })), xe.map(({ id: Ie, variants: $e }) => $e.map((Pe) => ({ id: Ie, variantId: Pe.variant.id, quantity: Pe.quantity })).flat()).flat(), fe.map(({ id: Ie, variant: $e }) => ({ id: Ie, variantId: $e.id })), ce.map(({ id: Ie, variant: $e, quantity: Pe }) => ({ id: Ie, variantId: $e.id, quantity: Pe })), ne == null ? void 0 : ne.id, ge == null ? void 0 : ge.id, Be, ...qe ? [Le] : []]);
      return Ck(_e);
    })(n), W = c.dealBars.find((T) => T.id === u);
    let re = !1;
    W && (!W.dealBarType || W.dealBarType === gt.QuantityBreak || W.dealBarType === gt.Bxgy) && c.dealBars.filter((T) => !T.dealBarType || T.dealBarType === gt.QuantityBreak || T.dealBarType === gt.Bxgy).filter((T) => og(T) === og(W) && T.id !== u).length > 0 && (re = !0);
    const M = B != null ? B : S, K = (W == null ? void 0 : W.dealBarType) === gt.Bxgy, A = h.some(({ variant: T }) => T.sellingPlans.length > 0), U = K && (A || n.splitBxgy), O = c.dealBars.some((T) => (T.freeGifts || []).filter((ee) => ee.productGID).length > 0), X = !(!c.progressiveGiftsEnabled || !c.progressiveGifts) && c.progressiveGifts.gifts.some((T) => T.giftType === "product"), Z = c.dealBars.some((T) => (T.upsells || []).length > 0), I = c.nanoId || c.id, C = c.abTestVariantNumber ? io(c.abTestVariantNumber) : void 0, N = (W == null ? void 0 : W.dealBarType) === gt.Sku || (W == null ? void 0 : W.dealBarType) === gt.Bundle || (W == null ? void 0 : W.dealBarType) === gt.MixAndMatch || re || U, H = { deal: I, pp: i, main: !0 };
    c.marketId && (H.market = c.marketId), c.versionId && (H.v = c.versionId), N ? (H.id = Q, H.bar = u) : (K || f.length > 0 || v.length > 0 || w.length > 0 || m.length > 0 || g.length > 0 || z.length > 0 || O || X || Z) && (H.id = Q), !H.bar && u && (H.bid = u), C && (H.ab = C);
    const J = { id: Q, deal: I, bar: u };
    c.versionId && (J.v = c.versionId), C && (J.ab = C);
    const oe = (W == null ? void 0 : W.dealBarType) === gt.MixAndMatch ? W.bundleProducts.length : void 0, G = [];
    let V = h, F = [];
    if (U && g.length === 0) {
      const { buy: T, get: ee } = ug(h, W.getQuantity);
      V = T, F = ee;
    }
    for (const { variant: T, quantity: ee } of V) {
      const Y = { ...H };
      oe && (Y.mixAndMatchItems = oe);
      const ie = Kn(l, T, M);
      ie != null && ie.priceAdjustment && W && cg(W) && (Y.sellingPlan = { id: ie.id, priceAdjustment: ie.priceAdjustment });
      const me = { id: T.id, quantity: ee, properties: { __kaching_bundles: JSON.stringify(Y) } };
      ie && (me.selling_plan = ie.id), G.push(me);
    }
    const L = !n.disableNestedCartLines && V.length > 0 && !sg(l, q) && (W == null ? void 0 : W.dealBarType) !== gt.MixAndMatch ? V[0].variant.id : void 0;
    for (const { variant: T, quantity: ee } of F) {
      const Y = { ...J, main: !0, bxgy: !0 }, ie = Kn(l, T, M);
      ie != null && ie.priceAdjustment && (W == null ? void 0 : W.dealBarType) === gt.Bxgy && W.getDiscountType === "specific" && (Y.sellingPlan = { id: ie.id, priceAdjustment: ie.priceAdjustment });
      const me = { id: T.id, quantity: ee, properties: { __kaching_bundles: JSON.stringify(Y) } };
      zi(me, L, l, q), ie && (me.selling_plan = ie.id), G.push(me);
    }
    for (const T of b) {
      const ee = { ...J, bundleProduct: T.id };
      oe && (ee.mixAndMatchItems = oe);
      const Y = Kn(T.product, T.variant, M);
      Y != null && Y.priceAdjustment && (W == null ? void 0 : W.dealBarType) === gt.Bundle && ((t = W == null ? void 0 : W.bundleProducts.find((me) => me.id === T.id)) == null ? void 0 : t.discountType) === "specific" && (ee.sellingPlan = { id: Y.id, priceAdjustment: Y.priceAdjustment });
      const ie = { id: T.variant.id, quantity: T.quantity, properties: { __kaching_bundles: JSON.stringify(ee) } };
      zi(ie, L, T.product, q), Y && (ie.selling_plan = Y.id), G.push(ie);
    }
    let te = g, ue = [];
    if (U && g.length > 0) {
      const { buy: T, get: ee } = ug(g, W.getQuantity);
      te = T, ue = ee;
    }
    const R = ((r = c.collectionBreaks) == null ? void 0 : r.visibility) === "deal-products";
    for (const T of te) {
      if (R) {
        const me = G.find((Ce) => Ce.id === T.variant.id);
        if (me) {
          me.quantity += T.quantity;
          continue;
        }
      }
      const ee = { ...J, collectionBreaksProduct: !0 };
      N || delete ee.bar;
      const Y = Kn(T.product, T.variant, M);
      Y != null && Y.priceAdjustment && W && cg(W) && (ee.sellingPlan = { id: Y.id, priceAdjustment: Y.priceAdjustment });
      const ie = { id: T.variant.id, quantity: T.quantity, properties: { __kaching_bundles: JSON.stringify(ee) } };
      Y && (ie.selling_plan = Y.id), G.push(ie);
    }
    for (const T of ue) {
      const ee = { ...J, collectionBreaksProduct: !0 };
      N || delete ee.bar, ee.bxgy = !0;
      const Y = Kn(T.product, T.variant, M);
      Y != null && Y.priceAdjustment && (W == null ? void 0 : W.dealBarType) === gt.Bxgy && W.getDiscountType === "specific" && (ee.sellingPlan = { id: Y.id, priceAdjustment: Y.priceAdjustment });
      const ie = { id: T.variant.id, quantity: T.quantity, properties: { __kaching_bundles: JSON.stringify(ee) } };
      Y && (ie.selling_plan = Y.id), G.push(ie);
    }
    for (const T of f) {
      if (T.applyOnlyForSubscriptions && !M) continue;
      const ee = { ...J, gift: T.id };
      delete ee.bar;
      const Y = { id: T.variant.id, quantity: T.quantity, properties: { __kaching_bundles: JSON.stringify(ee) } };
      zi(Y, L, T.product, q);
      const ie = Kn(T.product, T.variant, M);
      ie && (Y.selling_plan = ie.id), G.push(Y);
    }
    for (const T of v) {
      const ee = { ...J, gift: T.id };
      delete ee.bar;
      for (const Y of T.variants) {
        const ie = { id: Y.variant.id, quantity: Y.quantity, properties: { __kaching_bundles: JSON.stringify(ee) } };
        zi(ie, L, T.product, q);
        const me = Kn(T.product, Y.variant, M);
        me && (ie.selling_plan = me.id), G.push(ie);
      }
    }
    for (const T of w) {
      const ee = { ...J, checkboxUpsell: T.id };
      delete ee.bar;
      const Y = T.sellingPlan, ie = (a = c.checkboxUpsells) == null ? void 0 : a.upsells.find((Ce) => Ce.id === T.id);
      Y != null && Y.priceAdjustment && (ie == null ? void 0 : ie.discountType) === "specific" && (ee.sellingPlan = { id: Y.id, priceAdjustment: Y.priceAdjustment });
      const me = { id: T.variant.id, quantity: T.quantity, properties: { __kaching_bundles: JSON.stringify(ee) } };
      zi(me, L, T.product, q), Y && (me.selling_plan = Y.id), G.push(me);
    }
    for (const T of m) {
      const ee = { ...J, upsell: T.id };
      delete ee.bar;
      const Y = T.sellingPlan;
      Y != null && Y.priceAdjustment && ((o = (s = W == null ? void 0 : W.upsells) == null ? void 0 : s.find((me) => me.id === T.id)) == null ? void 0 : o.discountType) === "specific" && (ee.sellingPlan = { id: Y.id, priceAdjustment: Y.priceAdjustment });
      const ie = { id: T.variant.id, quantity: T.quantity, properties: { __kaching_bundles: JSON.stringify(ee) } };
      zi(ie, L, T.product, q), Y && (ie.selling_plan = Y.id), G.push(ie);
    }
    const P = [];
    for (const { variant: T, quantity: ee } of V) for (let Y = 0; Y < ee; Y++) P.push(T.id);
    for (const T of z) {
      const ee = { ...J, personalisation: T.id };
      delete ee.bar;
      const Y = { id: T.variantId, quantity: 1, properties: { __kaching_bundles: JSON.stringify(ee), [T.valueLabel]: T.text } }, ie = P[T.productIndex];
      ie && !n.disableNestedCartLines && (Y.parent_id = ie), G.push(Y);
    }
    const D = G.filter((T) => !T.parent_id), ae = G.filter((T) => T.parent_id);
    return [...D.reverse(), ...ae];
  }
  function sg(n, t) {
    return t.includes(n.id) || n.isNativeBundle === !0;
  }
  function zi(n, t, r, a) {
    t && t !== n.id && (sg(r, a) || (n.parent_id = t));
  }
  function og(n) {
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
  function cg(n) {
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
  function ug(n, t) {
    const r = [...n].sort((c, l) => c.variant.price - l.variant.price), a = [], s = [];
    let o = t;
    for (const c of r) {
      const l = Math.min(o, c.quantity), i = c.quantity - l;
      l > 0 && s.push({ ...c, quantity: l }), i > 0 && a.push({ ...c, quantity: i }), o -= l;
    }
    return { buy: a, get: s };
  }
  function Ik(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  var Mk = $('<img class="kaching-bundles__bar-image" alt=""/>'), zk = $('<div class="kaching-bundles__bar-radio"></div>'), $k = $('<span class="kaching-bundles__bar-title"><!></span>'), Dk = $('<span class="kaching-bundles__bar-label"><!></span>'), Ak = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), Vk = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Tk = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <div class="kaching-bundles__bar-second-line"><!> <!></div></div> <div class="kaching-bundles__bar-pricing"><!> <!></div></div>', 1), qk = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), Gk = $('<div class="kaching-bundles__bar-variants"><!> <div class="kaching-bundles__bar-variant-selector-wrapper"><!> <!></div></div>'), Fk = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), Ok = $('<div><input type="radio"/> <!> <!></div>');
  function dg(n, t) {
    et(t, !0);
    const r = () => ze(Q, "$formatPrice", s), a = () => ze(q, "$translate", s), [s, o] = vt();
    let c = k(t, "dealBlock", 7), l = k(t, "dealBar", 7), i = k(t, "otherProducts", 23, () => []), u = k(t, "complementaryProducts", 23, () => []), h = k(t, "selectedDealBarIndex", 7, null), b = k(t, "componentId", 7), g = k(t, "selected", 7, !1), f = k(t, "globalSellingPlan", 7, void 0), v = k(t, "onProgressiveGiftsChange", 7), w = k(t, "onDealBarSelect", 7), m = k(t, "onDealBarDeselect", 7), z = k(t, "onVariantsChange", 7), S = k(t, "onPersonalisationsChange", 7), B = k(t, "personalisationInitialValues", 23, () => []);
    const q = It(), Q = un(), W = Ln();
    let re = Ae(lt([])), M = Ae(lt([])), K = Ae(lt([])), A = !1;
    const U = d(() => l().productGID ? i().find((le) => le.id === Qt(l().productGID)) : void 0);
    let O = Ae(void 0);
    const X = d(() => (function(le, De, qe) {
      if (le !== void 0 && qe && qe.variants.some((_e) => _e.id === le))
        return le;
      if (De.variantGID) return Qt(De.variantGID);
      if (qe && qe.variants.length > 0) return qe.variants[0].id;
    })(e(O), l(), e(U))), Z = d(() => e(X) && e(U) ? e(U).variants.find((le) => le.id === e(X)) : void 0), I = d(() => e(Z) ? [{ variant: e(Z), quantity: 1 }] : []);
    let C = Ae(void 0);
    const N = d(() => e(U) && e(Z) ? ll(e(U), [e(Z)]) : []), H = d(() => {
      var le, De;
      return (l().sellingPlanEnabled || c().subscriptionsEnabled && ((le = c().subscriptions) == null ? void 0 : le.layout) === "link" && ((De = c().subscriptions) == null ? void 0 : De.subscribeByDefault)) && (!c().subscriptionsEnabled || !!f());
    }), J = d(() => e(H) ? co(l(), e(N), e(C)) : void 0), oe = d(() => {
      var le;
      return (le = e(J)) != null ? le : e(U) && e(Z) ? Kn(e(U), e(Z), f()) : void 0;
    }), G = d(() => e(Z) ? il(e(Z), e(oe)) : 0), V = d(() => e(Z) ? (function(le, De) {
      return le.useProductCompareAtPrice && De.compareAtPrice ? Math.max(De.price, De.compareAtPrice) : De.price;
    })(c(), e(Z)) : 0), F = d(() => cl(e(V), e(re), e(M))), L = d(() => e(F) > e(G)), te = d(() => dn({ priceFormatter: r(), product: e(U), dealBar: l(), totalFullPrice: e(V), totalCompareAtPrice: e(F), totalDiscountedPrice: e(G), quantity: 1, unitQuantity: mr(e(I)), sellingPlan: e(oe) })), ue = d(() => e(te)(a()(l().title))), R = d(() => e(te)(a()(l().subtitle))), P = d(() => e(te)(a()(l().label))), D = d(() => sl(c(), l()).map((le) => ya(le, a(), e(te)))), ae = d(() => wa(e(D))), T = d(() => `${l().id}_${b()}`), ee = d(() => ze(W, "$getMediaImageUrl", s)(l().mediaImageGID) || ul), Y = kn(), ie = d(() => e(U) && e(U).variants.length > 1 && !l().variantGID && g()), me = d(() => e(U) && ze(Y, "$config", s).featureFlags.variant_images && new Set(e(U).variants.map((le) => le.image).filter((le) => le)).size > 1), Ce = d(() => l().showAsSoldOutEnabled && l().showAsSoldOut ? gl(l().showAsSoldOut) : "");
    function ve(le) {
      g() && (le.preventDefault(), le.stopPropagation(), m()());
    }
    function xe(le) {
      se(O, le, !0);
    }
    Xe(() => {
      !g() || !e(Z) && e(U) || (e(re), e(K), e(M), e(X), e(oe), Jt(() => {
        A || (A = !0, w()({ dealBarId: l().id, preselected: !0 })), (function() {
          const le = e(G) + e(K).reduce((Pe, Ge) => Pe + Ge.discountedPrice, 0), De = e(re).reduce((Pe, Ge) => Ge.showPrice ? Pe + Ge.fullPrice : Pe, 0) + e(M).reduce((Pe, Ge) => Pe + Ge.fullPrice * Ge.quantity, 0), qe = e(V) + e(K).reduce((Pe, Ge) => Pe + Ge.fullPrice, 0) + De, _e = e(Z) ? e(Z).price : 0, Ie = e(Z) ? e(Z).sellingPlans.map((Pe) => ({ sellingPlanId: Pe.id, discountedPrice: Pe.price })) : [], $e = { discountedPrice: le, fullPrice: qe, giftValue: De, discountedPricePerItem: e(G), fullPricePerItem: e(V), discountedPriceWithoutSellingPlan: _e, discountedPricesForSellingPlans: Ie };
          z()({ variants: e(I), freeGifts: [...e(re), ...e(M)], upsells: e(K), dealBarSellingPlan: e(J), pricing: $e, product: e(U) });
        })();
      }));
    });
    var fe = { get dealBlock() {
      return c();
    }, set dealBlock(le) {
      c(le), _();
    }, get dealBar() {
      return l();
    }, set dealBar(le) {
      l(le), _();
    }, get otherProducts() {
      return i();
    }, set otherProducts(le = []) {
      i(le), _();
    }, get complementaryProducts() {
      return u();
    }, set complementaryProducts(le = []) {
      u(le), _();
    }, get selectedDealBarIndex() {
      return h();
    }, set selectedDealBarIndex(le = null) {
      h(le), _();
    }, get componentId() {
      return b();
    }, set componentId(le) {
      b(le), _();
    }, get selected() {
      return g();
    }, set selected(le = !1) {
      g(le), _();
    }, get globalSellingPlan() {
      return f();
    }, set globalSellingPlan(le = void 0) {
      f(le), _();
    }, get onProgressiveGiftsChange() {
      return v();
    }, set onProgressiveGiftsChange(le) {
      v(le), _();
    }, get onDealBarSelect() {
      return w();
    }, set onDealBarSelect(le) {
      w(le), _();
    }, get onDealBarDeselect() {
      return m();
    }, set onDealBarDeselect(le) {
      m(le), _();
    }, get onVariantsChange() {
      return z();
    }, set onVariantsChange(le) {
      z(le), _();
    }, get onPersonalisationsChange() {
      return S();
    }, set onPersonalisationsChange(le) {
      S(le), _();
    }, get personalisationInitialValues() {
      return B();
    }, set personalisationInitialValues(le = []) {
      B(le), _();
    } }, ce = Ok();
    let ne;
    var ge = y(ce);
    ra(ge), ge.__change = [Ik, w, l];
    var Be = j(ge, 2);
    Za(Be, { get for() {
      return e(T);
    }, get soldOut() {
      return l().showAsSoldOutEnabled;
    }, get borderHost() {
      return e(ae);
    }, children: (le, De) => {
      var qe = Fk(), _e = pe(qe);
      At(_e, 17, () => e(D), (ye) => ye.id, (ye, he) => {
        sa(ye, { get badge() {
          return e(he);
        }, get blockLayout() {
          return c().blockLayout;
        } });
      });
      var Ie = j(_e, 2), $e = y(Ie);
      Ut($e, { element: "div", class: "kaching-bundles__bar-main", onclick: ve, children: (ye, he) => {
        var Fe = Tk(), Ue = pe(Fe), Je = (Ne) => {
          var Ze = Mk();
          be(() => we(Ze, "src", e(ee))), p(Ne, Ze);
        }, Oe = (Ne) => {
          p(Ne, zk());
        };
        E(Ue, (Ne) => {
          l().mediaImageGID ? Ne(Je) : Ne(Oe, !1);
        });
        var Qe = j(Ue, 2), Ke = y(Qe), at = y(Ke), kt = y(at);
        rt(kt, () => e(ue), (Ne) => {
          var Ze = $k();
          Te(y(Ze), () => e(ue)), x(Ze), p(Ne, Ze);
        });
        var Ye = j(kt, 2), ct = (Ne) => {
          var Ze = Me();
          rt(pe(Ze), () => e(P), (pt) => {
            var st = Dk();
            Te(y(st), () => e(P)), x(st), p(pt, st);
          }), p(Ne, Ze);
        };
        E(Ye, (Ne) => {
          e(P) && Ne(ct);
        }), x(at);
        var Pt = j(at, 2), zt = y(Pt), Ot = (Ne) => {
          var Ze = Me();
          rt(pe(Ze), () => e(R), (pt) => {
            var st = Ak();
            Te(y(st), () => e(R)), x(st), p(pt, st);
          }), p(Ne, Ze);
        };
        E(zt, (Ne) => {
          e(R) && Ne(Ot);
        });
        var gn = j(zt, 2), mn = (Ne) => {
          oa(Ne, { get dealBlock() {
            return c();
          }, get variant() {
            return e(Z);
          } });
        };
        E(gn, (Ne) => {
          e(ie) || Ne(mn);
        }), x(Pt), x(Ke);
        var Rt = j(Ke, 2), nn = y(Rt);
        rt(nn, () => e(G), (Ne) => {
          Rr(Ne, { get amount() {
            return e(G);
          }, get showPricesPerItem() {
            return c().showPricesPerItem;
          }, get unitLabel() {
            return c().unitLabel;
          } });
        });
        var rn = j(nn, 2), ft = (Ne) => {
          var Ze = Me();
          rt(pe(Ze), () => e(F), (pt) => {
            var st = Vk();
            Te(y(st), () => r()(e(F))), x(st), be(($t) => we(st, "data-a11y-label", $t), [() => a()("system.original_price")]), p(pt, st);
          }), p(Ne, Ze);
        };
        E(rn, (Ne) => {
          e(L) && Ne(ft);
        }), x(Rt), x(Qe), p(ye, Fe);
      }, $$slots: { default: !0 } });
      var Pe = j($e, 2), Ge = (ye) => {
        Sa(ye, { get highlights() {
          return l().highlights;
        }, get isSelected() {
          return g();
        }, get replaceLiquid() {
          return e(te);
        } });
      };
      E(Pe, (ye) => {
        l().highlights && ye(Ge);
      });
      var bt = j(Pe, 2), ot = (ye) => {
        var he = qk(), Fe = y(he);
        {
          let Ue = d(() => e(J) || e(N)[0]);
          Pa(Fe, { get sellingPlans() {
            return e(N);
          }, get selectedSellingPlan() {
            return e(Ue);
          }, onChange: (Je) => {
            se(C, Je, !0);
          } });
        }
        x(he), p(ye, he);
      };
      E(bt, (ye) => {
        g() && e(H) && !l().sellingPlanGid && e(N).length > 1 && ye(ot);
      });
      var nt = j(bt, 2), it = (ye) => {
        var he = Gk(), Fe = y(he);
        ia(Fe, { get product() {
          return e(U);
        } });
        var Ue = j(Fe, 2), Je = y(Ue);
        {
          let Oe = d(() => e(X) || 0);
          Hn(Je, { get product() {
            return e(U);
          }, get selectedVariantId() {
            return e(Oe);
          }, get showImage() {
            return e(me);
          }, onChange: xe });
        }
        oa(j(Je, 2), { get dealBlock() {
          return c();
        }, get variant() {
          return e(Z);
        } }), x(Ue), x(he), p(ye, he);
      };
      E(nt, (ye) => {
        e(ie) && e(U) && ye(it);
      });
      var wt = j(nt, 2), Wt = (ye) => {
        {
          let he = d(() => [e(X)]);
          Ja(ye, { get productPersonalisation() {
            return l().productPersonalisation;
          }, get product() {
            return e(U);
          }, get selectedVariantIds() {
            return e(he);
          }, quantity: 1, get addPersonalisationModal() {
            return c().addPersonalisationModal;
          }, get onPersonalisationsChange() {
            return S();
          }, get initialValues() {
            return B();
          } });
        }
      };
      E(wt, (ye) => {
        g() && l().productPersonalisation && e(U) && e(X) && (c().blockLayout === "vertical" || c().blockLayout === "plain") && ye(Wt);
      }), x(Ie);
      var Gt = j(Ie, 2);
      {
        let ye = d(() => l().upsells || []);
        Bi(Gt, { get dealBlock() {
          return c();
        }, get dealBarId() {
          return l().id;
        }, get upsells() {
          return e(ye);
        }, get otherProducts() {
          return i();
        }, get complementaryProducts() {
          return u();
        }, get dealBarSelected() {
          return g();
        }, get dealSellingPlan() {
          return e(oe);
        }, onChange: (he) => {
          se(K, he, !0);
        } });
      }
      var ut = j(Gt, 2);
      Mi(ut, { get selectedDealBarIndex() {
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
        return e(oe);
      }, get progressiveGifts() {
        return c().progressiveGifts;
      } });
      var Ft = j(ut, 2);
      {
        let ye = d(() => l().freeGifts || []);
        Si(Ft, { get dealBlock() {
          return c();
        }, get freeGifts() {
          return e(ye);
        }, get freeGiftsSummary() {
          return l().freeGiftsSummary;
        }, get otherProducts() {
          return i();
        }, get dealBarSelected() {
          return g();
        }, get sellingPlan() {
          return e(oe);
        }, onChange: (he) => {
          se(re, he, !0);
        } });
      }
      var Yt = j(Ft, 2);
      {
        let ye = d(() => l().multipleGiftsSelectors || []);
        Ii(Yt, { get dealBlock() {
          return c();
        }, get multipleGiftsSelectors() {
          return e(ye);
        }, get sellingPlan() {
          return e(oe);
        }, get otherProducts() {
          return i();
        }, onChange: (he) => {
          se(M, he, !0);
        } });
      }
      p(le, qe);
    }, $$slots: { default: !0 } });
    var Se = j(Be, 2), Le = (le) => {
      Ci(le, { get showAsSoldOut() {
        return l().showAsSoldOut;
      }, get replaceLiquid() {
        return e(te);
      } });
    };
    E(Se, (le) => {
      l().showAsSoldOutEnabled && l().showAsSoldOut && le(Le);
    }), x(ce), be((le) => {
      var De;
      ne = Et(ce, 1, "kaching-bundles__bar", null, ne, le), we(ce, "data-deal-bar-id", l().id), Tt(ce, e(Ce)), we(ge, "name", `kaching-bundles-deal-${(De = b()) != null ? De : ""}`), Ra(ge, l().id), we(ge, "id", e(T)), el(ge, g()), ge.disabled = l().showAsSoldOutEnabled;
    }, [() => ({ "kaching-bundles__bar--selected": g() })]), p(n, ce);
    var Ve = tt(fe);
    return o(), Ve;
  }
  On(["change"]), He(dg, { dealBlock: {}, dealBar: {}, otherProducts: {}, complementaryProducts: {}, selectedDealBarIndex: {}, componentId: {}, selected: {}, globalSellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var Lk = $('<div class="kaching-bundles__collection-breaks-alert"><svg class="kaching-bundles__collection-breaks-alert__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 5.33325V7.99992M8.00065 10.6666H8.00732M14.6673 7.99992C14.6673 11.6818 11.6825 14.6666 8.00065 14.6666C4.31875 14.6666 1.33398 11.6818 1.33398 7.99992C1.33398 4.31802 4.31875 1.33325 8.00065 1.33325C11.6825 1.33325 14.6673 4.31802 14.6673 7.99992Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div>');
  function gg(n, t) {
    et(t, !0);
    const r = () => ze(i, "$config", a), [a, s] = vt();
    let o = k(t, "collectionBreaks", 7), c = k(t, "hasItemsToSelect", 7);
    const l = It(), i = kn(), u = d(() => {
      var z;
      return (z = o()) == null ? void 0 : z.requireItemSelectionAlert;
    }), h = d(() => r().preview && r().previewAlerts || ze(Io, "$requireSelectionError", a)), b = d(() => {
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
    } }, f = Me(), v = pe(f), w = (z) => {
      var S = Lk(), B = j(y(S));
      x(S), be((q) => ht(B, ` ${q != null ? q : ""}`), [() => ze(l, "$translate", a)(e(u).text)]), p(z, S);
    };
    E(v, (z) => {
      e(b) && e(u) && z(w);
    }), p(n, f);
    var m = tt(g);
    return s(), m;
  }
  He(gg, { collectionBreaks: {}, hasItemsToSelect: {} }, [], [], !0);
  var jk = $('<span class="kaching-bundles-savings-summary__icon"><img alt=""/></span>'), Ek = $('<span class="kaching-bundles-savings-summary__icon"><!></span>'), Rk = $('<div class="kaching-bundles-savings-summary"><!> <span class="kaching-bundles-savings-summary__title"><!></span></div>');
  function hg(n, t) {
    et(t, !0);
    const [r, a] = vt(), s = k(t, "savingsSummary", 7), o = k(t, "totalFullPrice", 7), c = k(t, "totalDiscountedPrice", 7), l = k(t, "quantity", 7), i = k(t, "product", 7), u = un(), h = It(), b = Ln(), g = d(() => ((A) => bn({ "kaching-bundles-savings-summary-background-color": Re(A.backgroundColor), "kaching-bundles-savings-summary-text-color": Re(A.textColor), "kaching-bundles-savings-summary-value-color": Re(A.valueColor), "kaching-bundles-savings-summary-icon-color": Re(A.iconColor), "kaching-bundles-savings-summary-border-color": Re(A.borderColor), "kaching-bundles-savings-summary-alignment": { start: "flex-start", center: "center", end: "flex-end" }[A.titleAlignment], "kaching-bundles-savings-summary-border-width": A.borderWidth + "px", "kaching-bundles-savings-summary-border-radius": A.borderRadius + "px", "kaching-bundles-savings-summary-title-font-size": A.titleFont.size + "px", "kaching-bundles-savings-summary-title-font-style": dr(A.titleFont.style), "kaching-bundles-savings-summary-title-font-weight": ur(A.titleFont.style) }))(s())), f = d(() => s().iconType), v = d(() => zd[e(f)]), w = d(() => e(f) === "custom" ? ze(b, "$getMediaImageUrl", r)(s().customIconGID) : void 0), m = d(() => dn({ priceFormatter: ze(u, "$formatPrice", r), product: i(), totalFullPrice: o(), totalDiscountedPrice: c(), quantity: l(), unitQuantity: null })), z = d(() => ((A) => A.replace(Hu, '<span class="kaching-bundles-savings-summary__value">$&</span>'))(ze(h, "$translate", r)(s().title))), S = d(() => e(m)(e(z)));
    var B = { get savingsSummary() {
      return s();
    }, set savingsSummary(A) {
      s(A), _();
    }, get totalFullPrice() {
      return o();
    }, set totalFullPrice(A) {
      o(A), _();
    }, get totalDiscountedPrice() {
      return c();
    }, set totalDiscountedPrice(A) {
      c(A), _();
    }, get quantity() {
      return l();
    }, set quantity(A) {
      l(A), _();
    }, get product() {
      return i();
    }, set product(A) {
      i(A), _();
    } }, q = Rk(), Q = y(q), W = (A) => {
      var U = jk(), O = y(U);
      x(U), be(() => we(O, "src", e(w))), p(A, U);
    }, re = (A) => {
      var U = Me(), O = pe(U), X = (Z) => {
        var I = Ek();
        Hc(y(I), () => e(v), (C, N) => {
          N(C, {});
        }), x(I), p(Z, I);
      };
      E(O, (Z) => {
        e(v) && Z(X);
      }, !0), p(A, U);
    };
    E(Q, (A) => {
      e(f) === "custom" && e(w) ? A(W) : A(re, !1);
    });
    var M = j(Q, 2);
    Te(y(M), () => e(S)), x(M), x(q), be(() => Tt(q, e(g))), p(n, q);
    var K = tt(B);
    return a(), K;
  }
  He(hg, { savingsSummary: {}, totalFullPrice: {}, totalDiscountedPrice: {}, quantity: {}, product: {} }, [], [], !0);
  var Nk = $('<div class="kaching-bundles__block-title"><!></div>'), Qk = $("<!> <!>", 1), Wk = $('<div class="kaching-bundles__out-of-stock"><!></div>'), Uk = $('<div class="kaching-bundles"><div><!> <!> <div><!> <!> <!> <!></div> <!> <!> <!> <!> <!> <!> <!></div></div> <!>', 1);
  function pg(n, t) {
    var r, a, s, o, c, l;
    et(t, !0);
    const i = () => ze(H, "$formatPrice", h), u = () => ze(oe, "$translate", h), [h, b] = vt();
    let g = k(t, "component", 7), f = k(t, "config", 7), v = k(t, "translations", 23, () => ({})), w = k(t, "dealBlock", 7), m = k(t, "product", 7), z = k(t, "currentVariantId", 7), S = k(t, "sellingPlanId", 15), B = k(t, "selectedDealBarId", 15), q = k(t, "quantity", 15), Q = k(t, "mediaImages", 23, () => []), W = k(t, "otherProducts", 23, () => []), re = k(t, "collectionBreaksProducts", 23, () => []), M = k(t, "complementaryProducts", 23, () => []), K = k(t, "nativeBundleProductIds", 23, () => []), A = k(t, "compact", 7, !1), U = k(t, "variantBadges", 23, () => []);
    const O = d(() => or(w(), f().brandColors)), X = d(() => e(O).hideUnavailableOptions ? kr(m()) : m()), Z = d(() => e(O).hideUnavailableOptions ? W().map(kr) : W()), I = d(() => e(O).hideUnavailableOptions ? M().map(kr) : M()), C = d(() => e(O).hideUnavailableOptions ? re().map(kr) : re()), { setConfig: N } = Ha(f()), { formatPrice: H, setMoneyFormat: J } = wi(f().moneyFormat, (r = e(O)) == null ? void 0 : r.showPricesWithoutDecimals), { translate: oe, setTranslations: G } = Ua(v()), { setMediaImages: V } = al(Q()), { setVariantBadges: F } = bd(U()), { setSwatchSettings: L } = tl({ swatchOptions: ((a = e(O)) == null ? void 0 : a.swatchOptions) || [], swatchSize: (s = e(O)) == null ? void 0 : s.swatchSize, swatchShape: (o = e(O)) == null ? void 0 : o.swatchShape, showSelectedSwatchName: (l = (c = e(O)) == null ? void 0 : c.showSelectedSwatchName) != null && l });
    let te = Ae(lt(Math.random()));
    function ue() {
      return { dealBlock: e(O), product: e(Ke), pageProductId: m().id, selectedDealBarId: B(), selectedVariantQuantities: e(ae), selectedBundleProducts: e(T), selectedCollectionBreaksProducts: e(ee), selectedFreeGifts: e(Y), selectedProgressiveGifts: e(ie), selectedCheckboxUpsells: e(me), selectedUpsells: e(Ce), selectedPersonalisations: e(ve), selectedSellingPlan: e(kt), dealBarSellingPlan: e(fe), nativeBundleProductIds: K(), bundleNonce: e(te), splitBxgy: f().featureFlags.split_bxgy_items, disableNestedCartLines: f().featureFlags.disable_nested_cart_lines };
    }
    function R() {
      return lg(ue());
    }
    Ea(() => {
      _r(g(), "kaching-bundles-block-loaded", { component: g() }, !1);
    }), Xe(() => {
      N(f());
    }), Xe(() => {
      J(f().moneyFormat, !!e(O).showPricesWithoutDecimals);
    }), Xe(() => {
      G(v());
    }), Xe(() => {
      V(Q());
    }), Xe(() => {
      F(U());
    }), Xe(() => {
      var de;
      L({ swatchOptions: e(O).swatchOptions || [], swatchSize: e(O).swatchSize, swatchShape: e(O).swatchShape, showSelectedSwatchName: (de = e(O).showSelectedSwatchName) != null && de });
    });
    let P = 0;
    Xe(() => {
      P === 0 && K().length > 0 && Qe({ pricing: e(Se) }), P = K().length;
    });
    let D = Math.random().toString(16).slice(2), ae = Ae(lt([])), T = Ae(lt([])), ee = Ae(lt([])), Y = Ae(lt([])), ie = Ae(lt([])), me = Ae(lt([])), Ce = Ae(lt([])), ve = Ae(lt([])), xe = new Dv(), fe = Ae(void 0), ce = Ae(lt({ discountedPrice: 0, fullPrice: 0, discountedPriceWithoutSellingPlan: 0, discountedPricesForSellingPlans: [] })), ne = Ae(void 0), ge = Ae(!1), Be = Ae(lt({ requiresItemSelection: !1, allItemsSelected: !0, missingItemsCount: 0 })), Se = Ae(lt({ discountedPrice: 0, fullPrice: 0, giftValue: 0, discountedPricePerItem: 0, fullPricePerItem: 0, discountedPriceWithoutSellingPlan: 0, discountedPricesForSellingPlans: [] }));
    Xe(() => {
      z() && !B() && (e(kt), Jt(() => {
        (function() {
          const de = m().variants.find((Ee) => Ee.id === z());
          if (!de) return;
          se(ae, [{ variant: de, quantity: 1 }], !0);
          let je = de.price;
          if (e(kt)) {
            const Ee = de.sellingPlans.find((We) => We.id === e(kt).id);
            Ee && (je = Ee.price);
          }
          const mt = de.compareAtPrice && de.compareAtPrice > de.price ? de.compareAtPrice : de.price, Lt = m().sellingPlans.map((Ee) => ({ sellingPlanId: Ee.id, discountedPrice: il(de, Ee) }));
          se(Se, { discountedPrice: je, fullPrice: mt, giftValue: 0, discountedPricePerItem: je, fullPricePerItem: mt, discountedPriceWithoutSellingPlan: de.price, discountedPricesForSellingPlans: Lt }, !0), Qe({ pricing: e(Se) });
        })();
      }));
    });
    let Le = d(() => Du(e(O))), Ve = d(() => u()(e(O).blockTitle));
    const le = d(() => e(st) ? dn({ priceFormatter: i(), product: e(X), selectedVariants: e(ae), totalFullPrice: e(Se).fullPrice, totalDiscountedPrice: e(Se).discountedPrice, quantity: q() || Pe(e(st)), dealBar: e(st), legacySavedPercentage: f().featureFlags.legacy_saved_percentage || !1, unitQuantity: null, sellingPlan: e(kt) }) : lp), De = d(() => ((de) => Zp(de, "block"))(e(O)).map((de) => ya(de, u(), e(le)))), qe = d(() => wa(e(De))), _e = d(() => {
      var de;
      const je = e(De).find((mt) => mt.badgeType === "border" && (mt.position === "left" || mt.position === "right"));
      if ((de = je == null ? void 0 : je.colors) != null && de.background) return Re({ ...je.colors.background, alpha: 0.15 });
    }), Ie = e(O).preselectedDealBarId ? e(O).dealBars.find((de) => de.id === e(O).preselectedDealBarId) : void 0;
    function $e(de) {
      return !de.dealBarType || de.dealBarType === gt.QuantityBreak || de.dealBarType === gt.Bxgy;
    }
    function Pe(de) {
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
    function Ge(de) {
      var je, mt;
      B() !== de && (B() && xe.set(B(), e(ve)), se(ve, (je = xe.get(de)) != null ? je : [], !0), ((mt = e(O).progressiveGifts) == null ? void 0 : mt.layout) === "deal-bar" && se(ie, [], !0)), B(de);
    }
    function bt(de) {
      const { dealBarId: je, dealBarQuantity: mt, preselected: Lt } = de;
      Ge(je), pl(!1), f().keepQuantityInput && mt && q(mt), _r(g(), "deal-bar-selected", { dealBarId: je, preselected: Lt });
    }
    function ot(de) {
      const je = e(O).dealBars[de];
      je && Ge(je.id);
    }
    function nt() {
      f().ignoreDeselect || (B(void 0), se(Y, [], !0), se(ie, [], !0), se(Ce, [], !0), se(T, [], !0), se(ee, [], !0), se(ve, [], !0), xe.clear(), se(fe, void 0), pl(!1), _r(g(), "deal-bar-selected", { dealBarId: null, preselected: !1 }));
    }
    function it(de) {
      const { variantId: je } = de;
      _r(g(), "variant-selected", { variantId: je });
    }
    function wt(de) {
      const { bundleProducts: je, freeGifts: mt, upsells: Lt, pricing: Ee } = de, We = [{ variant: je[0].variant, quantity: je[0].quantity }];
      se(ae, We, !0), se(T, je.slice(1), !0), se(Y, mt, !0), se(Ce, Lt, !0), se(ee, [], !0), se(fe, void 0), se(ne, void 0), se(Se, Ee, !0), se(ge, Oe(e(ae)), !0), Qe({ pricing: Ee });
    }
    function Wt(de) {
      const { variants: je, freeGifts: mt, upsells: Lt, pricing: Ee, validation: We } = de;
      se(Be, We, !0);
      const Kt = [{ variant: je[0].variant, quantity: je[0].quantity }], Nn = je.slice(1);
      se(ae, Kt, !0), se(Y, mt, !0), se(Ce, Lt, !0), se(T, [], !0), se(ee, Nn, !0), se(fe, de.dealBarSellingPlan, !0), se(ne, void 0), se(Se, Ee, !0), se(ge, Oe(e(ae)), !0), Qe({ pricing: Ee });
    }
    function Gt(de) {
      const { variants: je, freeGifts: mt, upsells: Lt, pricing: Ee } = de;
      se(ae, je, !0), se(Y, mt, !0), se(Ce, Lt, !0), se(T, [], !0), se(ee, [], !0), se(fe, de.dealBarSellingPlan, !0), se(ne, void 0), se(Se, Ee, !0), se(ge, Oe(e(ae)), !0), Qe({ pricing: Ee });
    }
    function ut(de) {
      var je;
      const { variants: mt, freeGifts: Lt, upsells: Ee, pricing: We, product: Kt } = de;
      se(ae, mt, !0), se(Y, Lt, !0), se(Ce, Ee, !0), se(T, [], !0), se(ee, [], !0), se(fe, de.dealBarSellingPlan, !0), ((je = e(ne)) == null ? void 0 : je.id) !== (Kt == null ? void 0 : Kt.id) && se(ne, Kt, !0), se(Se, We, !0), se(ge, Oe(e(ae)), !0), Qe({ pricing: We });
    }
    function Ft(de) {
      S(de == null ? void 0 : de.id);
    }
    Ie != null && Ie.hideBehindScratchOff && e(O).scratchOffEnabled && (f().preview ? f().previewScratchOff : m().availableForSale) || B(B() || e(O).preselectedDealBarId || void 0), Xe(() => {
      q() && e(O) && Jt(() => {
        if (!B()) return;
        const de = e(O).dealBars.find((je) => je.id === B());
        de && $e(de) && Pe(de) !== q() && (function(je, mt) {
          if (!B()) return;
          const Lt = je.dealBars.slice().sort((We, Kt) => Pe(We) - Pe(Kt));
          let Ee = Lt[0];
          for (const We of Lt) if ($e(We)) {
            if (Pe(We) > mt) break;
            Ee = We;
          }
          Ee.id !== B() && (Ge(Ee.id), _r(g(), "deal-bar-selected", { dealBarId: Ee.id, preselected: !1 }));
        })(e(O), q());
      });
    });
    let Yt = Ae(void 0);
    function ye() {
      if (!e(mn) || e(at).length === 0) return;
      const de = e(at).find((je) => je.id === e(Yt));
      Ft(de != null ? de : e(at)[0]);
    }
    function he(de) {
      _r(g(), "add-to-cart-requested", { items: lg({ ...ue(), selectedSellingPlan: de, dealBarSellingPlan: void 0 }) });
    }
    function Fe(de) {
      se(ie, de, !0), Qe({ pricing: e(Se) });
    }
    function Ue(de, je) {
      se(me, de, !0), se(ce, je, !0), Qe({ pricing: e(Se) });
    }
    function Je(de) {
      se(ve, de, !0), Qe({ pricing: e(Se) });
    }
    function Oe(de) {
      return de.some(({ variant: je, quantity: mt }) => !!je && !!je.inventoryManagement && je.inventoryPolicy === "deny" && je.inventoryQuantity !== null && mt > je.inventoryQuantity);
    }
    function Qe({ pricing: de }) {
      const je = e(ae).map(({ variant: Mn, quantity: Dn }) => ({ variantId: Mn.id, quantity: Dn })), mt = e(Y).map(({ id: Mn, variant: Dn, quantity: Nt }) => ({ id: Mn, variantId: Dn.id, quantity: Nt })), Lt = e(Ce).map(({ id: Mn, variant: Dn, quantity: Nt }) => ({ id: Mn, variantId: Dn.id, quantity: Nt })), Ee = e(T).map(({ id: Mn, variant: Dn, quantity: Nt }) => ({ id: Mn, variantId: Dn.id, quantity: Nt })), We = de.discountedPrice + e(ce).discountedPrice, Kt = de.fullPrice + e(ce).fullPrice, Nn = { discountedPrice: We, fullPrice: Kt, discountedPriceWithoutSellingPlan: de.discountedPriceWithoutSellingPlan + e(ce).discountedPriceWithoutSellingPlan, discountedPricesForSellingPlans: de.discountedPricesForSellingPlans.map((Mn) => {
        var Dn, Nt;
        const zn = (Nt = (Dn = e(ce).discountedPricesForSellingPlans.find((Nr) => Nr.sellingPlanId === Mn.sellingPlanId)) == null ? void 0 : Dn.discountedPrice) != null ? Nt : e(ce).discountedPriceWithoutSellingPlan;
        return { sellingPlanId: Mn.sellingPlanId, discountedPrice: Mn.discountedPrice + zn };
      }) };
      B() && e(st) ? Ya.set({ id: B(), dealBar: e(st), product: e(Ke), quantity: e(ae).reduce((Mn, { quantity: Dn }) => Mn + Dn, 0), pricing: Nn }) : Ya.set({ id: null, dealBar: null, product: e(Ke), quantity: 1, pricing: Nn }), _r(g(), "variants-changed", { variantIdQuantities: je, freeGifts: mt, upsells: Lt, bundleProducts: Ee, pricing: { discountedPrice: { amount: We, formatted: i()(We) }, fullPrice: { amount: Kt, formatted: i()(Kt) }, discountedPricePerItem: { amount: de.discountedPricePerItem, formatted: i()(de.discountedPricePerItem) }, fullPricePerItem: { amount: de.fullPricePerItem, formatted: i()(de.fullPricePerItem) } }, formattedPrice: i()(de.discountedPrice), validation: e(Be) }), _r(g(), "items-changed", {});
    }
    Xe(() => {
      S() && se(Yt, S(), !0);
    });
    const Ke = d(() => e(ne) || m()), at = d(() => {
      const de = e(ae).map(({ variant: je }) => je);
      return e(Ke).sellingPlans.filter((je) => de.some((mt) => mt.sellingPlans.some((Lt) => Lt.id === je.id)));
    }), kt = d(() => e(at).find((de) => de.id === S())), Ye = d(() => S() ? e(Ke).sellingPlans.find((de) => de.id === S()) : void 0), ct = d(() => uo(e(fe), e(Ye), e(at), e(Ke).requiresSellingPlan)), Pt = d(() => e(Se).giftValue + e(ie).reduce((de, je) => de + je.variants.reduce((mt, { variant: Lt, quantity: Ee }) => mt + Lt.price * Ee, 0), 0)), zt = d(() => {
      var de, je;
      return (je = (de = e(O).savingsSummary) == null ? void 0 : de.includeGiftValue) != null && je;
    }), Ot = d(() => ((de, je, mt, Lt) => {
      const Ee = de.fullPrice - de.giftValue + je.fullPrice + (Lt ? mt : 0), We = de.discountedPrice + je.discountedPrice;
      return { fullPrice: Ee, discountedPrice: We, saved: Ee - We };
    })(e(Se), e(ce), e(Pt), e(zt))), gn = d(() => {
      var de;
      return ((je, mt) => je + mt.reduce((Lt, { quantity: Ee }) => Lt + Ee, 0))(((de = ze(Ya, "$selectedDealBarStore", h)) == null ? void 0 : de.quantity) || 1, e(me));
    });
    let mn = d(() => e(O).subscriptionsEnabled && e(O).subscriptions && (e(at).length > 0 || f().preview));
    const Rt = d(() => {
      if (!e(O).progressiveGifts || e(at).length > 0) return e(O);
      const de = e(O).progressiveGifts.gifts.filter((je) => !je.applyOnlyForSubscriptions);
      return de.length === e(O).progressiveGifts.gifts.length ? e(O) : { ...e(O), progressiveGifts: { ...e(O).progressiveGifts, gifts: de } };
    });
    let nn = d(() => {
      var de, je;
      return e(mn) && ((de = e(O).subscriptions) == null ? void 0 : de.showPrices) && ((je = e(O).subscriptions) == null ? void 0 : je.hideDealBarPrices);
    }), rn = d(() => B() ? e(O).dealBars.findIndex((de) => de.id === B()) : null);
    const ft = d(() => e(O).scratchOffEnabled ? e(O).scratchOff : null), Ne = d(() => (e(O).blockLayout === "vertical" || e(O).blockLayout === "plain") && (f().preview || m().availableForSale)), Ze = d(() => e(O).dealBars.reduce((de, je) => {
      const mt = e(ft) && e(Ne) && je.hideBehindScratchOff, Lt = de[de.length - 1];
      return mt && (Lt == null ? void 0 : Lt.type) === "scratch" ? Lt.bars.push(je) : mt ? de.push({ type: "scratch", key: je.id, bars: [je] }) : de.push({ type: "visible", key: je.id, bar: je }), de;
    }, [])), pt = d(() => e(ae).reduce((de, { quantity: je }) => de + je, 0) || 1), st = d(() => B() ? e(O).dealBars.find((de) => de.id === B()) : void 0), $t = d(() => {
      var de, je;
      return !!((de = e(st)) != null && de.sellingPlanEnabled) && !!((je = e(st)) != null && je.sellingPlanGid);
    }), fn = d(() => {
      var de;
      return ((de = e(st)) == null ? void 0 : de.productPersonalisation) && (e(O).blockLayout === "horizontal" || e(O).blockLayout === "grid");
    }), Dt = d(() => e(st) ? e(st).dealBarType === void 0 || e(st).dealBarType === gt.QuantityBreak ? q() || Number(e(st).quantity) || 1 : e(st).dealBarType === gt.Bxgy ? q() || e(st).buyQuantity + e(st).getQuantity : e(st).dealBarType === gt.Bundle ? 1 : q() || 1 : q() || 1), Ht = d(() => e(ae).flatMap(({ variant: de, quantity: je }) => Array(je).fill(de.id))), en = d(() => {
      if (e(ve).length === 0) return [];
      const de = e(ve).reduce((mt, Lt) => Math.max(mt, Lt.productIndex), -1), je = Array.from({ length: de + 1 }, () => "");
      for (const mt of e(ve)) je[mt.productIndex] = mt.text;
      return je;
    });
    var Zt = { rotateBundleNonce: function() {
      se(te, Math.random(), !0);
    }, selectedVariants: function() {
      return R().map((de) => ({ variantId: de.id, quantity: de.quantity, properties: de.properties }));
    }, items: R, pricing: function() {
      const de = e(Se).discountedPrice + e(ce).discountedPrice, je = e(Se).fullPrice + e(ce).fullPrice;
      return { discountedPrice: { amount: de / 100, formatted: i()(de) }, fullPrice: { amount: je / 100, formatted: i()(je) }, discountedPricePerItem: { amount: e(Se).discountedPricePerItem / 100, formatted: i()(e(Se).discountedPricePerItem) }, fullPricePerItem: { amount: e(Se).fullPricePerItem / 100, formatted: i()(e(Se).fullPricePerItem) }, discountedPriceWithoutSellingPlan: { amount: (e(Se).discountedPriceWithoutSellingPlan + e(ce).discountedPriceWithoutSellingPlan) / 100, formatted: i()(e(Se).discountedPriceWithoutSellingPlan + e(ce).discountedPriceWithoutSellingPlan) }, discountedPricesForSellingPlans: e(Se).discountedPricesForSellingPlans.map((mt) => {
        var Lt, Ee;
        const We = (Ee = (Lt = e(ce).discountedPricesForSellingPlans.find((Nn) => Nn.sellingPlanId === mt.sellingPlanId)) == null ? void 0 : Lt.discountedPrice) != null ? Ee : e(ce).discountedPriceWithoutSellingPlan, Kt = mt.discountedPrice + We;
        return { sellingPlanId: mt.sellingPlanId, amount: Kt / 100, formatted: i()(Kt) };
      }) };
    }, deal: function() {
      return { subscriptionsEnabled: e(O).subscriptionsEnabled || e(O).dealBars.some((de) => de.sellingPlanEnabled) };
    }, isItemSelectionValid: function() {
      const { requiresItemSelection: de, allItemsSelected: je } = e(Be);
      return !de || je;
    }, validateItemSelection: function() {
      var de, je;
      const { requiresItemSelection: mt, allItemsSelected: Lt } = e(Be);
      return mt && !Lt ? (pl(!0), { valid: !1, message: ((je = (de = e(O).collectionBreaks) == null ? void 0 : de.requireItemSelectionAlert) == null ? void 0 : je.text) || null }) : (pl(!1), { valid: !0, message: null });
    }, get component() {
      return g();
    }, set component(de) {
      g(de), _();
    }, get config() {
      return f();
    }, set config(de) {
      f(de), _();
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
    }, get sellingPlanId() {
      return S();
    }, set sellingPlanId(de) {
      S(de), _();
    }, get selectedDealBarId() {
      return B();
    }, set selectedDealBarId(de) {
      B(de), _();
    }, get quantity() {
      return q();
    }, set quantity(de) {
      q(de), _();
    }, get mediaImages() {
      return Q();
    }, set mediaImages(de = []) {
      Q(de), _();
    }, get otherProducts() {
      return W();
    }, set otherProducts(de = []) {
      W(de), _();
    }, get collectionBreaksProducts() {
      return re();
    }, set collectionBreaksProducts(de = []) {
      re(de), _();
    }, get complementaryProducts() {
      return M();
    }, set complementaryProducts(de = []) {
      M(de), _();
    }, get nativeBundleProductIds() {
      return K();
    }, set nativeBundleProductIds(de = []) {
      K(de), _();
    }, get compact() {
      return A();
    }, set compact(de = !1) {
      A(de), _();
    }, get variantBadges() {
      return U();
    }, set variantBadges(de = []) {
      U(de), _();
    } }, Bn = Uk(), hn = pe(Bn), vn = y(hn);
    let Xn;
    {
      const de = (Ee, We) => {
        let Kt = Fl(() => (function(Nt, zn, Nr = !1) {
          return Nt === void 0 ? Nr ? zn() : zn : Nt;
        })(We == null ? void 0 : We(), !1));
        var Nn = Me(), Mn = pe(Nn), Dn = (Nt) => {
          Kd(Nt, { get subscriptions() {
            return e(O).subscriptions;
          }, get sellingPlans() {
            return e(at);
          }, get selectedSellingPlan() {
            return e(kt);
          }, get hideSellingPlanSelector() {
            return e($t);
          }, get hideTitle() {
            return e(Kt);
          }, onChange: Ft, onRequestAddToCart: he });
        };
        E(Mn, (Nt) => {
          e(O).subscriptions && Nt(Dn);
        }), p(Ee, Nn);
      }, je = (Ee, We = Pr) => {
        var Kt = Me(), Nn = pe(Kt), Mn = (Nt) => {
          {
            let zn = d(() => We().id === B()), Nr = d(() => We().id === B() ? e(en) : []);
            Nd(Nt, { get selectedDealBarIndex() {
              return e(rn);
            }, get dealBlock() {
              return e(Rt);
            }, get dealBar() {
              return We();
            }, get product() {
              return e(X);
            }, get otherProducts() {
              return e(Z);
            }, get complementaryProducts() {
              return e(I);
            }, get selected() {
              return e(zn);
            }, get currentVariantId() {
              return z();
            }, get componentId() {
              return D;
            }, get sellingPlan() {
              return e(Ye);
            }, onProgressiveGiftsChange: Fe, onDealBarSelect: bt, onDealBarDeselect: nt, onVariantSelect: it, onVariantsChange: wt, onPersonalisationsChange: Je, get personalisationInitialValues() {
              return e(Nr);
            } });
          }
        }, Dn = (Nt) => {
          var zn = Me(), Nr = pe(zn), $i = (Ba) => {
            {
              let hs = d(() => We().id === B()), Ao = d(() => We().id === B() ? e(en) : []);
              Fd(Ba, { get selectedDealBarIndex() {
                return e(rn);
              }, get dealBlock() {
                return e(Rt);
              }, get dealBar() {
                return We();
              }, get product() {
                return e(X);
              }, get otherProducts() {
                return e(Z);
              }, get complementaryProducts() {
                return e(I);
              }, get selected() {
                return e(hs);
              }, get currentVariantId() {
                return z();
              }, get componentId() {
                return D;
              }, get sellingPlan() {
                return e(Ye);
              }, onProgressiveGiftsChange: Fe, onDealBarSelect: bt, onDealBarDeselect: nt, onVariantSelect: it, onVariantsChange: wt, onPersonalisationsChange: Je, get personalisationInitialValues() {
                return e(Ao);
              } });
            }
          }, ca = (Ba) => {
            var hs = Me(), Ao = pe(hs), vm = (Di) => {
              {
                let ps = d(() => We().id === B()), Vo = d(() => We().id === B() ? e(en) : []);
                dg(Di, { get dealBlock() {
                  return e(Rt);
                }, get dealBar() {
                  return We();
                }, get selectedDealBarIndex() {
                  return e(rn);
                }, get otherProducts() {
                  return e(Z);
                }, get complementaryProducts() {
                  return e(I);
                }, get componentId() {
                  return D;
                }, get selected() {
                  return e(ps);
                }, get globalSellingPlan() {
                  return e(Ye);
                }, onProgressiveGiftsChange: Fe, onDealBarSelect: bt, onDealBarDeselect: nt, onVariantsChange: ut, onPersonalisationsChange: Je, get personalisationInitialValues() {
                  return e(Vo);
                } });
              }
            }, _m = (Di) => {
              var ps = Me(), Vo = pe(ps), km = (Ai) => {
                {
                  let To = d(() => We().id === B() ? q() && Number(q()) : void 0), qo = d(() => We().id === B()), Go = d(() => We().id === B() ? e(en) : []);
                  Wd(Ai, { get dealBlock() {
                    return e(Rt);
                  }, get dealBar() {
                    return We();
                  }, get selectedDealBarIndex() {
                    return e(rn);
                  }, get product() {
                    return e(X);
                  }, get collectionBreaksProducts() {
                    return e(C);
                  }, get otherProducts() {
                    return e(Z);
                  }, get complementaryProducts() {
                    return e(I);
                  }, get customQuantity() {
                    return e(To);
                  }, get selected() {
                    return e(qo);
                  }, onProgressiveGiftsChange: Fe, get currentVariantId() {
                    return z();
                  }, get componentId() {
                    return D;
                  }, get globalSellingPlan() {
                    return e(Ye);
                  }, onDealBarSelect: bt, onDealBarDeselect: nt, onVariantSelect: it, onVariantsChange: Wt, onPersonalisationsChange: Je, get personalisationInitialValues() {
                    return e(Go);
                  } });
                }
              }, mm = (Ai) => {
                {
                  let To = d(() => We().id === B() ? q() && Number(q()) : void 0), qo = d(() => We().id === B()), Go = d(() => We().id === B() ? e(en) : []);
                  xo(Ai, { get selectedDealBarIndex() {
                    return e(rn);
                  }, get dealBlock() {
                    return e(Rt);
                  }, get dealBar() {
                    return We();
                  }, get product() {
                    return e(X);
                  }, get otherProducts() {
                    return e(Z);
                  }, get complementaryProducts() {
                    return e(I);
                  }, get customQuantity() {
                    return e(To);
                  }, get selected() {
                    return e(qo);
                  }, get currentVariantId() {
                    return z();
                  }, get componentId() {
                    return D;
                  }, get globalSellingPlan() {
                    return e(Ye);
                  }, onProgressiveGiftsChange: Fe, onDealBarSelect: bt, onDealBarDeselect: nt, onVariantSelect: it, onVariantsChange: Gt, onPersonalisationsChange: Je, get personalisationInitialValues() {
                    return e(Go);
                  } });
                }
              };
              E(Vo, (Ai) => {
                !e(O).collectionBreaksEnabled || !e(O).collectionBreaks || We().dealBarType && We().dealBarType !== gt.QuantityBreak && We().dealBarType !== gt.Bxgy ? Ai(mm, !1) : Ai(km);
              }, !0), p(Di, ps);
            };
            E(Ao, (Di) => {
              We().dealBarType === gt.Sku ? Di(vm) : Di(_m, !1);
            }, !0), p(Ba, hs);
          };
          E(Nr, (Ba) => {
            We().dealBarType === gt.Bundle ? Ba($i) : Ba(ca, !1);
          }, !0), p(Nt, zn);
        };
        E(Nn, (Nt) => {
          We().dealBarType === gt.MixAndMatch ? Nt(Mn) : Nt(Dn, !1);
        }), p(Ee, Kt);
      };
      var ar = y(vn), xr = (Ee) => {
        var We = Qk(), Kt = pe(We), Nn = (Nt) => {
          var zn = Nk();
          Te(y(zn), () => e(Ve)), x(zn), p(Nt, zn);
        };
        E(Kt, (Nt) => {
          e(Ve) && Nt(Nn);
        });
        var Mn = j(Kt, 2), Dn = (Nt) => {
          ag(Nt, { get timer() {
            return e(O).timer;
          } });
        };
        E(Mn, (Nt) => {
          e(O).timerEnabled && e(O).timer && Nt(Dn);
        }), p(Ee, We);
      };
      E(ar, (Ee) => {
        A() || Ee(xr);
      });
      var qn = j(ar, 2), er = (Ee) => {
        de(Ee);
      };
      E(qn, (Ee) => {
        var We;
        e(mn) && ((We = e(O).subscriptions) == null ? void 0 : We.position) === "above" && e(qe).positions.size === 0 && Ee(er);
      });
      var Bt = j(qn, 2);
      let mt, Lt;
      var Ct = y(Bt);
      At(Ct, 17, () => e(De), (Ee) => Ee.id, (Ee, We) => {
        sa(Ee, { get badge() {
          return e(We);
        }, get blockLayout() {
          return e(O).blockLayout;
        } });
      });
      var _t = j(Ct, 2), Mt = (Ee) => {
        {
          let We = d(() => e(qe).positions.has("all"));
          de(Ee, () => e(We));
        }
      };
      E(_t, (Ee) => {
        var We;
        e(mn) && ((We = e(O).subscriptions) == null ? void 0 : We.position) === "above" && e(qe).positions.size > 0 && Ee(Mt);
      });
      var an = j(_t, 2);
      At(an, 17, () => e(Ze), (Ee) => Ee.key, (Ee, We) => {
        var Kt = Me(), Nn = pe(Kt), Mn = (Nt) => {
          Hd(Nt, { get settings() {
            return e(ft);
          }, onReveal: () => {
            return zn = e(We).bars, void (!B() && Ie && zn.includes(Ie) && bt({ dealBarId: Ie.id, dealBarQuantity: Pe(Ie), preselected: !0 }));
            var zn;
          }, children: (zn, Nr) => {
            var $i = Me();
            At(pe($i), 17, () => e(We).bars, (ca) => ca.id, (ca, Ba) => {
              je(ca, () => e(Ba));
            }), p(zn, $i);
          }, $$slots: { default: !0 } });
        }, Dn = (Nt) => {
          var zn = Me(), Nr = pe(zn), $i = (ca) => {
            je(ca, () => e(We).bar);
          };
          E(Nr, (ca) => {
            e(We).type === "visible" && ca($i);
          }, !0), p(Nt, zn);
        };
        E(Nn, (Nt) => {
          e(We).type === "scratch" && e(ft) ? Nt(Mn) : Nt(Dn, !1);
        }), p(Ee, Kt);
      });
      var tn = j(an, 2), jn = (Ee) => {
        {
          let We = d(() => e(qe).positions.has("all"));
          de(Ee, () => e(We));
        }
      };
      E(tn, (Ee) => {
        var We;
        e(mn) && ((We = e(O).subscriptions) == null ? void 0 : We.position) === "below" && e(qe).positions.size > 0 && Ee(jn);
      }), x(Bt);
      var xn = j(Bt, 2), ln = (Ee) => {
        Ja(Ee, { get product() {
          return e(Ke);
        }, get productPersonalisation() {
          return e(st).productPersonalisation;
        }, get selectedVariantIds() {
          return e(Ht);
        }, get quantity() {
          return e(Dt);
        }, get addPersonalisationModal() {
          return e(O).addPersonalisationModal;
        }, onPersonalisationsChange: Je, get initialValues() {
          return e(en);
        } });
      };
      E(xn, (Ee) => {
        var We;
        e(fn) && ((We = e(st)) != null && We.productPersonalisation) && Ee(ln);
      });
      var pn = j(xn, 2), yn = (Ee) => {
        de(Ee);
      };
      E(pn, (Ee) => {
        var We;
        e(mn) && ((We = e(O).subscriptions) == null ? void 0 : We.position) === "below" && e(qe).positions.size === 0 && Ee(yn);
      });
      var $n = j(pn, 2), En = (Ee) => {
        var We = Wk();
        Te(y(We), () => u()("system.out_of_stock")), x(We), p(Ee, We);
      };
      E($n, (Ee) => {
        e(ge) && (e(ae).length > 1 || e(ae)[0].quantity > 1) && Ee(En);
      });
      var wn = j($n, 2), Pn = (Ee) => {
        rg(Ee, { get checkboxUpsells() {
          return e(O).checkboxUpsells;
        }, get dealBlock() {
          return e(O);
        }, get otherProducts() {
          return e(Z);
        }, get complementaryProducts() {
          return e(I);
        }, get dealSellingPlan() {
          return e(ct);
        }, get dealBarQuantity() {
          return e(pt);
        }, onChange: Ue });
      };
      E(wn, (Ee) => {
        !A() && e(O).checkboxUpsellsEnabled && e(O).checkboxUpsells && Ee(Pn);
      });
      var on = j(wn, 2), In = (Ee) => {
        tg(Ee, { get progressiveGifts() {
          return e(Rt).progressiveGifts;
        }, get dealBlock() {
          return e(O);
        }, get otherProducts() {
          return e(Z);
        }, get selectedDealBarIndex() {
          return e(rn);
        }, get sellingPlan() {
          return e(ct);
        }, onChange: Fe, onUnlock: ot, onSubscribe: ye });
      };
      E(on, (Ee) => {
        e(O).progressiveGiftsEnabled && e(Rt).progressiveGifts && e(Rt).progressiveGifts.layout !== "deal-bar" && Ee(In);
      });
      var tr = j(on, 2), Vr = (Ee) => {
        {
          let We = d(() => e(Be).missingItemsCount > 0);
          gg(Ee, { get collectionBreaks() {
            return e(O).collectionBreaks;
          }, get hasItemsToSelect() {
            return e(We);
          } });
        }
      };
      E(tr, (Ee) => {
        e(O).collectionBreaksEnabled && Ee(Vr);
      });
      var Do = j(tr, 2), hm = (Ee) => {
        hg(Ee, { get savingsSummary() {
          return e(O).savingsSummary;
        }, get totalFullPrice() {
          return e(Ot).fullPrice;
        }, get totalDiscountedPrice() {
          return e(Ot).discountedPrice;
        }, get quantity() {
          return e(gn);
        }, get product() {
          return e(Ke);
        } });
      };
      E(Do, (Ee) => {
        var We, Kt;
        !A() && e(O).savingsSummaryEnabled && e(O).savingsSummary && (We = e(Ot).saved, Kt = e(O).savingsSummary.hideWhenZeroSavings, We > 0 || !Kt) && Ee(hm);
      }), x(vn), be((Ee, We, Kt, Nn) => {
        mt = Et(Bt, 1, "kaching-bundles__bars", null, mt, Kt), Lt = Tt(Bt, "", Lt, Nn);
      }, [() => ({ "kaching-bundles__block--horizontal": e(O).blockLayout === "horizontal", "kaching-bundles__block--grid": e(O).blockLayout === "grid", "kaching-bundles__block--plain": e(O).blockLayout === "plain" }), () => e(O).abTestVariantNumber ? io(e(O).abTestVariantNumber) : void 0, () => ({ "kaching-bundles__bars--horizontal": e(O).blockLayout === "horizontal", "kaching-bundles__bars--grid": e(O).blockLayout === "grid", "kaching-bundles__bars--plain": e(O).blockLayout === "plain", "kaching-bundles__bars--hide-prices": e(nn), "kaching-bundles__bars--badge-border-all": e(qe).positions.has("all"), "kaching-bundles__bars--badge-border-top": e(qe).positions.has("top"), "kaching-bundles__bars--badge-border-bottom": e(qe).positions.has("bottom"), "kaching-bundles__bars--badge-border-left": e(qe).positions.has("left"), "kaching-bundles__bars--badge-border-right": e(qe).positions.has("right") }), () => {
        var Ee, We;
        return { "--badge-border-thickness": `${(Ee = e(qe).thickness) != null ? Ee : ""}px`, "--badge-border-gap": `${(We = e(qe).gap) != null ? We : ""}px`, "--badge-border-gap-border": e(qe).gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": e(qe).sideLength ? `${e(qe).sideLength}px` : void 0, "--badge-border-wrap-color": e(_e) };
      }]);
    }
    x(hn);
    var pm = j(hn, 2), bm = (de) => {
      ig(de, { get shopCustomStyles() {
        return f().shopCustomStyles;
      }, get customStyles() {
        return e(O).customStyles;
      }, get dealBlockId() {
        return e(O).id;
      } });
    };
    E(pm, (de) => {
      e(O).customStylesEnabled && de(bm);
    }), be((de, je, mt, Lt) => {
      var Ee;
      Xn = Et(vn, 1, "kaching-bundles__block kaching-bundles__block--loaded", null, Xn, de), we(vn, "data-deal-block-id", e(O).id), we(vn, "data-ab-test-variant-id", e(O).abTestVariantId), we(vn, "data-ab-test-variant", je), we(vn, "data-selling-plan-id", (Ee = e(ct)) == null ? void 0 : Ee.id), Tt(vn, e(Le));
    }, [() => ({ "kaching-bundles__block--horizontal": e(O).blockLayout === "horizontal", "kaching-bundles__block--grid": e(O).blockLayout === "grid", "kaching-bundles__block--plain": e(O).blockLayout === "plain" }), () => e(O).abTestVariantNumber ? io(e(O).abTestVariantNumber) : void 0, () => ({ "kaching-bundles__bars--horizontal": e(O).blockLayout === "horizontal", "kaching-bundles__bars--grid": e(O).blockLayout === "grid", "kaching-bundles__bars--plain": e(O).blockLayout === "plain", "kaching-bundles__bars--hide-prices": e(nn), "kaching-bundles__bars--badge-border-all": e(qe).positions.has("all"), "kaching-bundles__bars--badge-border-top": e(qe).positions.has("top"), "kaching-bundles__bars--badge-border-bottom": e(qe).positions.has("bottom"), "kaching-bundles__bars--badge-border-left": e(qe).positions.has("left"), "kaching-bundles__bars--badge-border-right": e(qe).positions.has("right") }), () => {
      var de, je;
      return { "--badge-border-thickness": `${(de = e(qe).thickness) != null ? de : ""}px`, "--badge-border-gap": `${(je = e(qe).gap) != null ? je : ""}px`, "--badge-border-gap-border": e(qe).gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": e(qe).sideLength ? `${e(qe).sideLength}px` : void 0, "--badge-border-wrap-color": e(_e) };
    }]), p(n, Bn);
    var fm = tt(Zt);
    return b(), fm;
  }
  customElements.define("kaching-bundles-block", He(pg, { config: { attribute: "config", type: "Object" }, translations: { attribute: "translations", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, product: { attribute: "product", type: "Object" }, otherProducts: { attribute: "other-products", type: "Array" }, collectionBreaksProducts: { attribute: "collection-breaks-products", type: "Array" }, complementaryProducts: { attribute: "complementary-products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" }, currentVariantId: { attribute: "current-variant-id", type: "Number" }, sellingPlanId: { attribute: "selling-plan-id", type: "Number" }, selectedDealBarId: { attribute: "selected-deal-bar-id", type: "String" }, quantity: { attribute: "quantity", type: "Number" }, nativeBundleProductIds: { attribute: "native-bundle-product-ids", type: "Array" }, compact: { attribute: "compact", type: "Boolean" }, variantBadges: { attribute: "variant-badges", type: "Array" }, component: {} }, [], ["rotateBundleNonce", "selectedVariants", "items", "pricing", "deal", "isItemSelectionValid", "validateItemSelection"], !1, (n) => class extends n {
    constructor() {
      super(), Sn(this, "component"), this.component = this, this.innerHTML && (_r(this, "kaching-bundles-block-hydrated"), this.innerHTML = "");
    }
  }));
  var Hk = $('<div class="kaching-bundles"><!></div>');
  function bg(n, t) {
    var r;
    et(t, !0);
    const a = k(t, "config", 7), s = k(t, "dealBlock", 7), o = k(t, "products", 23, () => []), c = k(t, "mediaImages", 7), l = k(t, "translations", 7), i = d(() => or(s(), a().brandColors)), { setConfig: u } = Ha(a()), { setMoneyFormat: h } = wi(a().moneyFormat), { setTranslations: b } = Ua(l()), { setMediaImages: g } = al(c()), { setSwatchSettings: f } = tl({ swatchOptions: e(i).swatchOptions || [], swatchSize: e(i).swatchSize, swatchShape: e(i).swatchShape, showSelectedSwatchName: (r = e(i).showSelectedSwatchName) != null && r });
    Xe(() => {
      u(a());
    }), Xe(() => {
      h(a().moneyFormat, !!e(i).showPricesWithoutDecimals);
    }), Xe(() => {
      b(l());
    }), Xe(() => {
      g(c());
    }), Xe(() => {
      var B;
      f({ swatchOptions: e(i).swatchOptions || [], swatchSize: e(i).swatchSize, swatchShape: e(i).swatchShape, showSelectedSwatchName: (B = e(i).showSelectedSwatchName) != null && B });
    });
    const v = d(() => e(i).dealBars.find((B) => B.dealBarType === gt.MixAndMatch));
    var w = { get config() {
      return a();
    }, set config(B) {
      a(B), _();
    }, get dealBlock() {
      return s();
    }, set dealBlock(B) {
      s(B), _();
    }, get products() {
      return o();
    }, set products(B = []) {
      o(B), _();
    }, get mediaImages() {
      return c();
    }, set mediaImages(B) {
      c(B), _();
    }, get translations() {
      return l();
    }, set translations(B) {
      l(B), _();
    } }, m = Hk(), z = y(m), S = (B) => {
      Bo(B, { get dealBlock() {
        return e(i);
      }, get dealBar() {
        return e(v);
      }, get products() {
        return o();
      }, onChoose: () => {
      } });
    };
    return E(z, (B) => {
      e(v) && B(S);
    }), x(m), p(n, m), tt(w);
  }
  customElements.define("kaching-bundles-mix-and-match-choose-product", He(bg, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), Sn(this, "component"), this.component = this;
    }
  }));
  var Zk = $('<div class="kaching-bundles"><!></div>');
  function fg(n, t) {
    et(t, !0);
    const r = k(t, "config", 7), a = k(t, "product", 7), s = k(t, "translations", 7), o = k(t, "addPersonalisationModal", 7), c = d(() => or(o(), r().brandColors)), { setConfig: l } = Ha(r()), { setTranslations: i } = Ua(s());
    Xe(() => {
      l(r()), i(s());
    });
    const u = d(() => {
      var g, f;
      return (f = (g = a()) == null ? void 0 : g.variants) != null && f[0] ? [{ variant: a().variants[0], index: 0 }, { variant: a().variants[0], index: 1 }] : [];
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
    } }, b = Zk();
    return ko(y(b), { get product() {
      return a();
    }, get selectedVariants() {
      return e(u);
    }, get addPersonalisationModal() {
      return e(c);
    }, inline: !0, personalisationValues: [], onConfirm: () => {
    }, onClose: () => {
    } }), x(b), p(n, b), tt(h);
  }
  customElements.define("kaching-bundles-personalisation-modal", He(fg, { config: { attribute: "config", type: "Object" }, product: { attribute: "product", type: "Object" }, translations: { attribute: "translations", type: "Object" }, addPersonalisationModal: { attribute: "add-personalisation-modal", type: "Object" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), Sn(this, "component"), this.component = this;
    }
  }));
  function Jk(n, t) {
    t().dispatchEvent(new CustomEvent("kaching-bundles-sticky-atc-clicked", { bubbles: !0, composed: !0 }));
  }
  var Yk = $('<img class="kaching-bundles-sticky-atc__image"/>'), Kk = $('<button class="kaching-bundles-sticky-atc__button"><!></button>'), Xk = $('<div class="kaching-bundles"><div class="kaching-bundles-sticky-atc"><div class="kaching-bundles-sticky-atc__content"><!> <div class="kaching-bundles-sticky-atc__title"><!></div></div> <!></div></div>');
  function vg(n, t) {
    var r;
    et(t, !0);
    const a = () => ze(Ya, "$selectedDealBarStore", o), s = () => ze(m, "$translate", o), [o, c] = vt(), l = k(t, "component", 7), i = k(t, "config", 7), u = k(t, "stickyAtc", 7), h = k(t, "translations", 7), b = k(t, "product", 7), g = k(t, "dealBlock", 7), f = d(() => or(u(), i().brandColors)), v = d(() => or(g(), i().brandColors)), { setConfig: w } = Ha(i()), { translate: m, setTranslations: z } = Ua(h()), { formatPrice: S, setMoneyFormat: B } = wi(i().moneyFormat, (r = e(v)) == null ? void 0 : r.showPricesWithoutDecimals);
    Xe(() => {
      w(i());
    }), Xe(() => {
      var V;
      B(i().moneyFormat, !!((V = e(v)) != null && V.showPricesWithoutDecimals));
    }), Xe(() => {
      z(h());
    });
    const q = d(() => ((V) => {
      const F = { "kaching-bundles-sticky-atc-background-color": Re(V.backgroundColor), "kaching-bundles-sticky-atc-title-color": Re(V.titleColor), "kaching-bundles-sticky-atc-button-color": Re(V.buttonColor), "kaching-bundles-sticky-atc-button-text-color": Re(V.buttonTextColor), "kaching-bundles-sticky-atc-title-font-size": V.titleFont.size + "px", "kaching-bundles-sticky-atc-button-font-size": V.buttonFont.size + "px", "kaching-bundles-sticky-atc-title-font-style": dr(V.titleFont.style), "kaching-bundles-sticky-atc-title-font-weight": ur(V.titleFont.style), "kaching-bundles-sticky-atc-button-font-style": dr(V.buttonFont.style), "kaching-bundles-sticky-atc-button-font-weight": ur(V.buttonFont.style), "kaching-bundles-sticky-atc-product-photo-size": V.productPhotoSize + "px", "kaching-bundles-sticky-atc-button-padding": V.buttonPadding + "px", "kaching-bundles-sticky-atc-product-photo-corner-radius": V.productPhotoCornerRadius + "px", "kaching-bundles-sticky-atc-button-corner-radius": V.buttonCornerRadius + "px" };
      if (V.sameSizeOnMobile || !V.mobile) return bn(F);
      const L = V.mobile;
      return bn({ ...F, "kaching-bundles-sticky-atc-image-display": V.productPhotoSize > 0 ? "block" : "none", "kaching-bundles-sticky-atc-image-display-mobile": L.productPhotoSize > 0 ? "block" : "none", "kaching-bundles-sticky-atc-title-font-size-mobile": L.titleFontSize + "px", "kaching-bundles-sticky-atc-button-font-size-mobile": L.buttonFontSize + "px", "kaching-bundles-sticky-atc-product-photo-size-mobile": L.productPhotoSize + "px", "kaching-bundles-sticky-atc-button-padding-mobile": L.buttonPadding + "px", "kaching-bundles-sticky-atc-product-photo-corner-radius-mobile": L.productPhotoCornerRadius + "px", "kaching-bundles-sticky-atc-button-corner-radius-mobile": L.buttonCornerRadius + "px" });
    })(e(f))), Q = d(() => {
      var V;
      return ((V = a()) == null ? void 0 : V.pricing.fullPrice) || b().variants[0].compareAtPrice || b().variants[0].price;
    }), W = d(() => {
      var V;
      return ((V = a()) == null ? void 0 : V.pricing.discountedPrice) || b().variants[0].price;
    }), re = d(() => {
      var V;
      return ((V = a()) == null ? void 0 : V.quantity) || 1;
    }), M = d(() => dn({ priceFormatter: ze(S, "$formatPrice", o), product: b(), totalFullPrice: e(Q), totalDiscountedPrice: e(W), quantity: e(re), unitQuantity: null })), K = d(() => e(M)(s()(e(f).title))), A = new qv("(width < 750px)"), U = d(() => (A.current && !e(f).sameSizeOnMobile && e(f).mobile ? e(f).mobile.productPhotoSize : e(f).productPhotoSize) > 0);
    var O = { get component() {
      return l();
    }, set component(V) {
      l(V), _();
    }, get config() {
      return i();
    }, set config(V) {
      i(V), _();
    }, get stickyAtc() {
      return u();
    }, set stickyAtc(V) {
      u(V), _();
    }, get translations() {
      return h();
    }, set translations(V) {
      h(V), _();
    }, get product() {
      return b();
    }, set product(V) {
      b(V), _();
    }, get dealBlock() {
      return g();
    }, set dealBlock(V) {
      g(V), _();
    } }, X = Xk(), Z = y(X), I = y(Z), C = y(I), N = (V) => {
      var F = Yk();
      be(() => {
        we(F, "src", b().image), we(F, "alt", b().title);
      }), p(V, F);
    };
    E(C, (V) => {
      e(U) && V(N);
    });
    var H = j(C, 2);
    Te(y(H), () => e(K)), x(H), x(I);
    var J = j(I, 2), oe = (V) => {
      var F = Kk();
      F.__click = [Jk, l], Te(y(F), () => s()(e(f).buttonText)), x(F), p(V, F);
    };
    E(J, (V) => {
      e(f).buttonText && V(oe);
    }), x(Z), x(X), be(() => Tt(Z, e(q))), p(n, X);
    var G = tt(O);
    return c(), G;
  }
  On(["click"]), customElements.define("kaching-bundles-sticky-atc", He(vg, { config: { attribute: "config", type: "Object" }, stickyAtc: { attribute: "sticky-atc", type: "Object" }, translations: { attribute: "translations", type: "Object" }, product: { attribute: "product", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, component: {} }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), Sn(this, "component"), this.component = this;
    }
  }));
  const em = td, tm = Yu, nm = pg, rm = bg, am = fg, im = vg, lm = $d.element, sm = em.element, om = tm.element, cm = nm.element, um = rm.element, dm = am.element, gm = im.element;
  return jt.ChooseMultipleGifts = om, jt.ChooseProduct = sm, jt.DealBar = lm, jt.DealBlock = cm, jt.MixAndMatchChooseProduct = um, jt.PersonalisationModal = dm, jt.StickyAtc = gm, Object.defineProperty(jt, Symbol.toStringTag, { value: "Module" }), jt;
})({});
