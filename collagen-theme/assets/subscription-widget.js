/** 
Wed Aug 26 2026 16:48:08 GMT+0000 (Coordinated Universal Time) - 610b0c0a91d0d4e96f97b71a5e9f4ab5433721f9
subscription-widget.js | © Recharge Inc.
**/
var su=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var dg=su((xg,ou)=>{/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const on=globalThis,Mo=on.ShadowRoot&&(on.ShadyCSS===void 0||on.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Eo=Symbol(),ra=new WeakMap;let Ls=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Eo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Mo&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=ra.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ra.set(r,e))}return e}toString(){return this.cssText}};const cu=t=>new Ls(typeof t=="string"?t:t+"",void 0,Eo),qe=(t,...e)=>{const r=t.length===1?t[0]:e.reduce(((n,i,o)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new Ls(r,t,Eo)},uu=(t,e)=>{if(Mo)t.adoptedStyleSheets=e.map((r=>r instanceof CSSStyleSheet?r:r.styleSheet));else for(const r of e){const n=document.createElement("style"),i=on.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)}},na=Mo?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return cu(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:lu,defineProperty:du,getOwnPropertyDescriptor:pu,getOwnPropertyNames:fu,getOwnPropertySymbols:hu,getPrototypeOf:gu}=Object,Mt=globalThis,ia=Mt.trustedTypes,yu=ia?ia.emptyScript:"",zn=Mt.reactiveElementPolyfillSupport,_r=(t,e)=>t,an={toAttribute(t,e){switch(e){case Boolean:t=t?yu:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Co=(t,e)=>!lu(t,e),oa={attribute:!0,type:String,converter:an,reflect:!1,hasChanged:Co};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Mt.litPropertyMetadata??(Mt.litPropertyMetadata=new WeakMap);class er extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=oa){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,r);i!==void 0&&du(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){const{get:i,set:o}=pu(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return i==null?void 0:i.call(this)},set(a){const s=i==null?void 0:i.call(this);o.call(this,a),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??oa}static _$Ei(){if(this.hasOwnProperty(_r("elementProperties")))return;const e=gu(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_r("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_r("properties"))){const r=this.properties,n=[...fu(r),...hu(r)];for(const i of n)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(na(i))}else e!==void 0&&r.push(na(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise((r=>this.enableUpdating=r)),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach((r=>r(this)))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return uu(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach((r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach((r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)}))}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EC(e,r){var o;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const a=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:an).toAttribute(r,n.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,r){var o;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=n.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:an;this._$Em=i,this[i]=s.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Co)(this[e],r))return;this.P(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,n){this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,a]of i)a.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach((i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)})),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach((n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach((r=>this._$EC(r,this[r])))),this._$EU()}updated(e){}firstUpdated(e){}}er.elementStyles=[],er.shadowRootOptions={mode:"open"},er[_r("elementProperties")]=new Map,er[_r("finalized")]=new Map,zn==null||zn({ReactiveElement:er}),(Mt.reactiveElementVersions??(Mt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vr=globalThis,sn=vr.trustedTypes,aa=sn?sn.createPolicy("lit-html",{createHTML:t=>t}):void 0,Bs="$lit$",St=`lit$${Math.random().toFixed(9).slice(2)}$`,js="?"+St,_u=`<${js}>`,Bt=document,Pr=()=>Bt.createComment(""),Mr=t=>t===null||typeof t!="object"&&typeof t!="function",qs=Array.isArray,vu=t=>qs(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Hn=`[ 	
\f\r]`,hr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sa=/-->/g,ca=/>/g,kt=RegExp(`>|${Hn}(?:([^\\s"'>=/]+)(${Hn}*=${Hn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ua=/'/g,la=/"/g,Us=/^(?:script|style|textarea|title)$/i,mu=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),C=mu(1),lt=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),da=new WeakMap,Rt=Bt.createTreeWalker(Bt,129);function Fs(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return aa!==void 0?aa.createHTML(e):e}const bu=(t,e)=>{const r=t.length-1,n=[];let i,o=e===2?"<svg>":"",a=hr;for(let s=0;s<r;s++){const c=t[s];let u,d,p=-1,v=0;for(;v<c.length&&(a.lastIndex=v,d=a.exec(c),d!==null);)v=a.lastIndex,a===hr?d[1]==="!--"?a=sa:d[1]!==void 0?a=ca:d[2]!==void 0?(Us.test(d[2])&&(i=RegExp("</"+d[2],"g")),a=kt):d[3]!==void 0&&(a=kt):a===kt?d[0]===">"?(a=i??hr,p=-1):d[1]===void 0?p=-2:(p=a.lastIndex-d[2].length,u=d[1],a=d[3]===void 0?kt:d[3]==='"'?la:ua):a===la||a===ua?a=kt:a===sa||a===ca?a=hr:(a=kt,i=void 0);const b=a===kt&&t[s+1].startsWith("/>")?" ":"";o+=a===hr?c+_u:p>=0?(n.push(u),c.slice(0,p)+Bs+c.slice(p)+St+b):c+St+(p===-2?s:b)}return[Fs(t,o+(t[r]||"<?>")+(e===2?"</svg>":"")),n]};class Er{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let o=0,a=0;const s=e.length-1,c=this.parts,[u,d]=bu(e,r);if(this.el=Er.createElement(u,n),Rt.currentNode=this.el.content,r===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=Rt.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(Bs)){const v=d[a++],b=i.getAttribute(p).split(St),O=/([.?@])?(.*)/.exec(v);c.push({type:1,index:o,name:O[2],strings:b,ctor:O[1]==="."?xu:O[1]==="?"?Su:O[1]==="@"?Ou:mn}),i.removeAttribute(p)}else p.startsWith(St)&&(c.push({type:6,index:o}),i.removeAttribute(p));if(Us.test(i.tagName)){const p=i.textContent.split(St),v=p.length-1;if(v>0){i.textContent=sn?sn.emptyScript:"";for(let b=0;b<v;b++)i.append(p[b],Pr()),Rt.nextNode(),c.push({type:2,index:++o});i.append(p[v],Pr())}}}else if(i.nodeType===8)if(i.data===js)c.push({type:2,index:o});else{let p=-1;for(;(p=i.data.indexOf(St,p+1))!==-1;)c.push({type:7,index:o}),p+=St.length-1}o++}}static createElement(e,r){const n=Bt.createElement("template");return n.innerHTML=e,n}}function nr(t,e,r=t,n){var a,s;if(e===lt)return e;let i=n!==void 0?(a=r._$Co)==null?void 0:a[n]:r._$Cl;const o=Mr(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((s=i==null?void 0:i._$AO)==null||s.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(e=nr(t,i._$AS(t,e.values),i,n)),e}class wu{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??Bt).importNode(r,!0);Rt.currentNode=i;let o=Rt.nextNode(),a=0,s=0,c=n[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new kr(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new Pu(o,this,e)),this._$AV.push(u),c=n[++s]}a!==(c==null?void 0:c.index)&&(o=Rt.nextNode(),a++)}return Rt.currentNode=Bt,i}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class kr{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,i){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=nr(this,e,r),Mr(e)?e===E||e==null||e===""?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==lt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):vu(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==E&&Mr(this._$AH)?this._$AA.nextSibling.data=e:this.T(Bt.createTextNode(e)),this._$AH=e}$(e){var o;const{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Er.createElement(Fs(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(r);else{const a=new wu(i,this),s=a.u(this.options);a.p(r),this.T(s),this._$AH=a}}_$AC(e){let r=da.get(e.strings);return r===void 0&&da.set(e.strings,r=new Er(e)),r}k(e){qs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of e)i===r.length?r.push(n=new kr(this.S(Pr()),this.S(Pr()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class mn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,i,o){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=E}_$AI(e,r=this,n,i){const o=this.strings;let a=!1;if(o===void 0)e=nr(this,e,r,0),a=!Mr(e)||e!==this._$AH&&e!==lt,a&&(this._$AH=e);else{const s=e;let c,u;for(e=o[0],c=0;c<o.length-1;c++)u=nr(this,s[n+c],r,c),u===lt&&(u=this._$AH[c]),a||(a=!Mr(u)||u!==this._$AH[c]),u===E?e=E:e!==E&&(e+=(u??"")+o[c+1]),this._$AH[c]=u}a&&!i&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class xu extends mn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}}class Su extends mn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==E)}}class Ou extends mn{constructor(e,r,n,i,o){super(e,r,n,i,o),this.type=5}_$AI(e,r=this){if((e=nr(this,e,r,0)??E)===lt)return;const n=this._$AH,i=e===E&&n!==E||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==E&&(n===E||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class Pu{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){nr(this,e)}}const Vn=vr.litHtmlPolyfillSupport;Vn==null||Vn(Er,kr),(vr.litHtmlVersions??(vr.litHtmlVersions=[])).push("3.1.4");const mr=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new kr(e.insertBefore(Pr(),o),o,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _e=class extends er{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=mr(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return lt}};var Rs;_e._$litElement$=!0,_e.finalized=!0,(Rs=globalThis.litElementHydrateSupport)==null||Rs.call(globalThis,{LitElement:_e});const Wn=globalThis.litElementPolyfillSupport;Wn==null||Wn({LitElement:_e});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=t=>(e,r)=>{r!==void 0?r.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mu={attribute:!0,type:String,converter:an,reflect:!1,hasChanged:Co},Eu=(t=Mu,e,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(r.name,t),n==="accessor"){const{name:a}=r;return{set(s){const c=e.get.call(this);e.set.call(this,s),this.requestUpdate(a,c,t)},init(s){return s!==void 0&&this.P(a,void 0,t),s}}}if(n==="setter"){const{name:a}=r;return function(s){const c=this[a];e.call(this,s),this.requestUpdate(a,c,t)}}throw Error("Unsupported decorator location: "+n)};function te(t){return(e,r)=>typeof r=="object"?Eu(t,e,r):((n,i,o)=>{const a=i.hasOwnProperty(o);return i.constructor.createProperty(o,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tt(t){return te({...t,state:!0,attribute:!1})}const zs="USD",Cu=new Map([["AED",2],["AFN",2],["ALL",2],["AMD",2],["ANG",2],["AOA",2],["ARS",2],["AUD",2],["AWG",2],["AZN",2],["BAM",2],["BBD",2],["BDT",2],["BGN",2],["BHD",3],["BIF",0],["BMD",2],["BND",2],["BOB",2],["BOV",2],["BRL",2],["BSD",2],["BTN",2],["BWP",2],["BYN",2],["BYR",0],["BZD",2],["CAD",2],["CDF",2],["CHE",2],["CHF",2],["CHW",2],["CLF",4],["CLP",0],["CNY",2],["COP",2],["COU",2],["CRC",2],["CUC",2],["CUP",2],["CVE",2],["CZK",2],["DJF",0],["DKK",2],["DOP",2],["DZD",2],["EGP",2],["ERN",2],["ETB",2],["EUR",2],["FJD",2],["FKP",2],["GBP",2],["GEL",2],["GHS",2],["GIP",2],["GMD",2],["GNF",0],["GTQ",2],["GYD",2],["HKD",2],["HNL",2],["HRK",2],["HTG",2],["HUF",2],["IDR",2],["ILS",2],["INR",2],["IQD",3],["IRR",2],["ISK",0],["JEP",2],["JMD",2],["JOD",3],["JPY",0],["KES",2],["KGS",2],["KHR",2],["KMF",0],["KPW",2],["KRW",0],["KWD",3],["KYD",2],["KZT",2],["LAK",2],["LBP",2],["LKR",2],["LRD",2],["LSL",2],["LYD",3],["MAD",2],["MDL",2],["MGA",2],["MKD",2],["MMK",2],["MNT",2],["MOP",2],["MRO",5],["MUR",2],["MVR",2],["MWK",2],["MXN",2],["MXV",2],["MYR",2],["MZN",2],["NAD",2],["NGN",2],["NIO",2],["NOK",2],["NPR",2],["NZD",2],["OMR",3],["PAB",2],["PEN",2],["PGK",2],["PHP",2],["PKR",2],["PLN",2],["PYG",0],["QAR",2],["RON",2],["RSD",2],["RUB",2],["RWF",0],["SAR",2],["SBD",2],["SCR",2],["SDG",2],["SEK",2],["SGD",2],["SHP",2],["SLL",2],["SOS",2],["SRD",2],["SSP",2],["STD",2],["STN",2],["SVC",2],["SYP",2],["SZL",2],["THB",2],["TJS",2],["TMT",2],["TND",3],["TOP",2],["TRY",2],["TTD",2],["TWD",2],["TZS",2],["UAH",2],["UGX",0],["USD",2],["USN",2],["UYI",0],["UYU",2],["UYW",4],["UZS",2],["VED",2],["VEF",2],["VES",2],["VND",0],["VUV",0],["WST",2],["XAF",0],["XAG",0],["XAU",0],["XBA",0],["XBB",0],["XBC",0],["XBD",0],["XCD",2],["XDR",0],["XOF",0],["XPD",0],["XPF",0],["XPT",0],["XSU",0],["XTS",0],["XUA",0],["YER",2],["ZAR",2],["ZMW",2],["ZWL",2]]),Qn=new Map;function $o(t,e){const r=$u(t,e);if(Qn.has(r))return Qn.get(r);const n=new Intl.NumberFormat(t,e);return Qn.set(r,n),n}function $u(t,e={}){return`${Array.isArray(t)?Array.from(t).sort().join("-"):t}-${JSON.stringify(e)}`}var Tu=Object.defineProperty,cn=Object.getOwnPropertySymbols,Hs=Object.prototype.hasOwnProperty,Vs=Object.prototype.propertyIsEnumerable,pa=(t,e,r)=>e in t?Tu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Du=(t,e)=>{for(var r in e||(e={}))Hs.call(e,r)&&pa(t,r,e[r]);if(cn)for(var r of cn(e))Vs.call(e,r)&&pa(t,r,e[r]);return t},Au=(t,e)=>{var r={};for(var n in t)Hs.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&cn)for(var n of cn(t))e.indexOf(n)<0&&Vs.call(t,n)&&(r[n]=t[n]);return r};function ku(t,e,r={}){var n=r,{as:i,precision:o}=n,a=Au(n,["as","precision"]);return i==="currency"&&a.currency==null?(console.error("formatNumber(amount, {as: 'currency'}) cannot be called without a currency code."),""):$o(e,Du({style:i,maximumFractionDigits:o},a)).format(t)}var Nu=Object.defineProperty,Iu=Object.defineProperties,Ru=Object.getOwnPropertyDescriptors,un=Object.getOwnPropertySymbols,Ws=Object.prototype.hasOwnProperty,Qs=Object.prototype.propertyIsEnumerable,fa=(t,e,r)=>e in t?Nu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ln=(t,e)=>{for(var r in e||(e={}))Ws.call(e,r)&&fa(t,r,e[r]);if(un)for(var r of un(e))Qs.call(e,r)&&fa(t,r,e[r]);return t},Lu=(t,e)=>Iu(t,Ru(e)),Bu=(t,e)=>{var r={};for(var n in t)Ws.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&un)for(var n of un(t))e.indexOf(n)<0&&Qs.call(t,n)&&(r[n]=t[n]);return r};function ju(t,e,r={}){var n=r,{form:i}=n,o=Bu(n,["form"]),a,s;switch(o=Lu(ln({},o),{currency:(s=(a=o.currency)!=null?a:o.defaultCurrency)!=null?s:zs}),i){case"auto":return qu(t,e,o,o.defaultCurrency);case"explicit":return Gs(t,e,o);case"short":return To(t,e,o);case"none":return Ys(t,e,o)}return ku(t,e,ln({as:"currency"},o))}function qu(t,e,r={},n=zs){return r.currency===n?To(t,e,r):Gs(t,e,r)}function Gs(t,e,r={}){const n=To(t,e,r),i=r.currency||"";return n.includes(i)?n:`${n} ${i}`}function To(t,e,r={}){const n=Ys(t,e,r),i=Uu(e,r),o=i.prefixed?`${i.shortSymbol}${n}`:`${n}${i.shortSymbol}`;return t<0?`-${o.replace(/[-−]/,"")}`:o}function Ys(t,e,r={}){let n=r.precision;if(n===void 0){const i=r.currency||"";n=Cu.get(i.toUpperCase())}return $o(e,ln({style:"decimal",minimumFractionDigits:n,maximumFractionDigits:n},r)).format(t)}function Uu(t,e){const n=/[\u200E\u200F]/,i=new RegExp("0[,.]*0*"),a=$o(t,ln({style:"currency"},e)).format(0).replace(n,""),s=i.exec(a);if(!s)throw new Error(`Number input in locale ${t} is currently not supported.`);const c=s[0],[u,d]=a.split(c),p=u||d,v=Fu(p,e.currency);return{symbol:p,shortSymbol:v,prefixed:u!=="",currencyCode:e.currency}}function Fu(t,e){var r;const n=(r=e.substring(0,2))!=null?r:"",i=t.replace(n,"");return/[A-Za-zÀ-ÖØ-öø-ÿĀ-ɏḂ-ỳ]/.exec(i)?t:i}var Je=(t=>(t.Load="rc_widget_load",t.TypeChanged="rc_widget_type_changed",t.VariantChanged="rc_widget_variant_changed",t.AddToCart="add_to_cart",t.LoadLog="rc_widget_load_log",t.SellingPlanChanged="selling_plan_changed",t.BuyNow="rc_widget_buy_now_clicked",t))(Je||{}),zu=Object.defineProperty,Hu=Object.defineProperties,Vu=Object.getOwnPropertyDescriptors,ha=Object.getOwnPropertySymbols,Wu=Object.prototype.hasOwnProperty,Qu=Object.prototype.propertyIsEnumerable,ga=(t,e,r)=>e in t?zu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,wt=(t,e)=>{for(var r in e||(e={}))Wu.call(e,r)&&ga(t,r,e[r]);if(ha)for(var r of ha(e))Qu.call(e,r)&&ga(t,r,e[r]);return t},Ks=(t,e)=>Hu(t,Vu(e)),H=(t=>(t.Subscription="subscription",t.Onetime="onetime",t.Prepaid="prepaid_subscription",t))(H||{}),G=(t=>(t.MaxDiscount="{maxDiscount}",t.Discount="{discount}",t.Interval="{interval}",t.PrepaidUnitPrice="{unitPrice}",t.PrepaidChargeInterval="{chargeInterval}",t.DiscountPrice="{discountPrice}",t.InitialDiscountAmount="{initialDiscountAmount}",t.InitialDiscountPercentage="{initialDiscountPercentage}",t.RecurringDiscountAmount="{recurringDiscountAmount}",t.RecurringDiscountPercentage="{recurringDiscountPercentage}",t.RecurringDiscountCount="{recurringDiscountCount}",t.RecurringDiscountCountWithInterval="{recurringDiscountCountWithInterval}",t.ShippingInterval="{shippingInterval}",t.Amount="{amount}",t))(G||{}),Ze=(t=>(t.Default="default",t.Recharge="recharge",t.RechargePreview="recharge_preview",t.MerchantOverride="merchant_override",t))(Ze||{});function Gu(t){if(!t)return!1;if(typeof t!="object")return console.error("Widget configuration is not an object"),!1;const e=new Set(["displayMode","benefitsImage","benefits","defaultSelection","firstSelectionOption","subscriptionWithDiscountLabel","subscriptionWithoutDiscountLabel","onetimeLabel","onetimeDrawbacks","frequencyLabel","learnMoreText","learnMoreContent","showStrikethroughPrice","staticPricingText","dynamicPricingText","badgeText","frequencyDisplayType","frequencyDisplayContent","frequencyIntervalTranslation","brand_color","brand_contrast_color","text_color","selected_bg_color","selected_text_color","badge_text_color","badge_bg_color","border_radius"]),r=t,n=Object.keys(r).filter(i=>!e.has(i));return n.length>0?(console.error("Invalid widget configuration keys:",n),!1):r.displayMode&&!["normal","compact"].includes(r.displayMode)?(console.error("Widget configuration displayMode is invalid"),!1):r.frequencyDisplayType&&!["dropdown","buttonGroup","buttonList"].includes(r.frequencyDisplayType)?(console.error("Widget configuration frequencyDisplayType is invalid"),!1):r.frequencyDisplayContent&&!["planName","interval"].includes(r.frequencyDisplayContent)?(console.error("Widget configuration frequencyDisplayContent is invalid"),!1):r.border_radius&&!["square","round","soft"].includes(r.border_radius)?(console.error("Widget configuration border_radius is invalid"),!1):!0}const Yu={badgeBestValue:!0,badgeBestValueText:"Best value",badgeBestValueTextColor:"#0BBB8D",badgeBestValueBackgroundColor:"#FFFFFF",badgeBestValueOutlineColor:"#0BBB8D",badgeRecommended:!0,badgeRecommendedText:"Recommended",badgeRecommendedTextColor:"#FFFFFF",badgeRecommendedBackgroundColor:"#0BBB8D",badgeRecommendedOutlineColor:"#0BBB8D",badgeSavingPercentage:!0,badgeSavingPercentageText:"Save {discount}",badgeSavingPercentageTextColor:"#FFFFFF",badgeSavingPercentageBackgroundColor:"#8A95A0",badgeSavingPercentageOutlineColor:"#8A95A0"},Ku={type:["default"],displayMode:"normal",benefitsImage:"",benefits:"<ul><li><p>Save {discount}</p></li><li><p>Free shipping</p></li><li><p>No commitment. Cancel anytime</p></li></ul>",onlyDisplayBenefitsOnSelected:!0,defaultSelection:"subscription",firstSelectionOption:"subscription",subscriptionWithoutDiscountLabel:"Subscribe",subscriptionWithDiscountLabel:"Subscribe & save",frequencyIntervalTranslation:{days:"{interval} days",day:"{interval} day",weeks:"{interval} weeks",week:"{interval} week",months:"{interval} months",month:"{interval} month",save:"save {discount}",prepaidUnit:"{unitPrice}/ea",chargeInterval:"Pay every {chargeInterval}"},onetimeLabel:"One-time",onetimeDrawbacks:"",frequencyLabel:"Deliver every:",learnMoreText:"Learn more",learnMoreContent:Xu(),showStrikethroughPrice:!0,staticPricingText:"{discountPrice}",badgeText:"Save up to {maxDiscount}",frequencyDisplayType:"buttonGroup",frequencyDisplayContent:"interval",showPoweredByRecharge:!0,customCSS:""},Ju={use_theme_styles:!1,brand_color:"#121212",brand_contrast_color:"#FFFFFF",text_color:"#121212",selected_bg_color:"#FFFFFF",selected_text_color:"#121212",badge_text_color:"#FFFFFF",badge_bg_color:"#0F866A",border_radius:"soft"},bn=De(Ku,Ju);De(bn,{benefits:"<ul><li>{amount} units shipped every {shippingInterval}</li><li>{discountPrice} saved every {shippingInterval}</li><li>{unitPrice} per unit</li></ul>",onetimeLabel:"One-time purchase",quantity_upsell:Yu});function X(){return window.SubscriptionWidgetConfig?window.SubscriptionWidgetConfig:(console.warn("SubscriptionWidgetConfig not found."),null)}function Zu(t){if(!t)return null;const e=window[t];return Gu(e)?Ks(wt({},e),{type:"merchant_override"}):null}function De(t,e){let r=[];Array.isArray(t.type)?r=t.type:t.type&&(r=[t.type]);const n=e!=null&&e.type?Array.isArray(e.type)?e.type:[e.type]:[],i=Array.from(new Set([...r,...n]));return Ks(wt(wt(wt({},t),e),i.length>0?{type:i}:{}),{frequencyIntervalTranslation:wt(wt({},t.frequencyIntervalTranslation),e==null?void 0:e.frequencyIntervalTranslation),quantity_upsell:t.quantity_upsell||e!=null&&e.quantity_upsell?wt(wt({},t.quantity_upsell),e==null?void 0:e.quantity_upsell):void 0})}function Xu(){return`<style>
  rc-learn-more-modal h1 {
    font-size: 40px;
    line-height: 48px;
    font-weight: 600;
    text-align: center;
    padding-bottom: 32px;
    margin: 0;
  }
  rc-learn-more-modal h2 {
    padding: 0;
    margin: 0;
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
  }
  rc-learn-more-modal p {
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 24px;
  }
  rc-learn-more-modal .learn-more-content {
    padding: 0 20px 20px;
  }
  rc-learn-more-modal .learn-more-footer button {
    background-color: var(--rc-widget-brand-color);
    color: var(--rc-widget-brand-contrast-color);
    border: none;
    border-radius: var(--rc-widget-button-radius);
    padding: 12px;
    min-width: 335px;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    cursor: pointer;
    transition: background-color 0.1s ease;
    font-family: inherit;
  }
  rc-learn-more-modal .learn-more-footer button:hover {
    background-color: var(--rc-widget-brand-color-80);
  }
  rc-learn-more-modal .learn-more-footer {
    display: flex;
    justify-content: center;
  }
  rc-learn-more-modal .learn-more-group {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 24px;
  }
  rc-learn-more-modal .learn-more-group-item {
    display: flex;
    gap: 32px;
    align-items: center;
  }
  rc-learn-more-modal .learn-more-group-icon-container {
    display: flex;
    padding: 32px;
    background-color: #f6f8f9;
    border-radius: var(--rc-widget-card-radius);
  }
  rc-learn-more-modal svg,
  rc-learn-more-modal img {
    height: 40px;
    width: 40px;
  }
  @media (max-width: 560px) {
    rc-learn-more-modal h1 {
      font-size: 26px;
      line-height: 32px;
      padding-bottom: 16px;
    }
    rc-learn-more-modal h2 {
      font-size: 16px;
      line-height: 24px;
    }
    rc-learn-more-modal p {
      font-size: 14px;
      line-height: 20px;
    }
    rc-learn-more-modal .learn-more-content {
      padding: 0;
    }
    rc-learn-more-modal svg,
    rc-learn-more-modal img {
      height: 32px;
      width: 32px;
    }
    rc-learn-more-modal .learn-more-group-item {
      gap: 16px;
    }
    rc-learn-more-modal .learn-more-group-icon-container {
      padding: 20px;
    }
  }
</style>
<div class="learn-more-content">
  <h1 class="learn-more-header">Great reasons to subscribe</h1>
  <ul class="learn-more-group">
    <li class="learn-more-group-item">
      <div class="learn-more-group-icon-container">
        <span rc-calendar-icon></span>
      </div>
      <div>
        <h2 style="margin: 0">Flexible frequency</h2>
        <p style="margin: 0">
          Not sure how much of something you need, or how often? Adjust
          quantities and frequencies any time.
        </p>
      </div>
    </li>
    <li class="learn-more-group-item">
      <div class="learn-more-group-icon-container">
        <span rc-bell-icon></span>
      </div>
      <div>
        <h2>Order reminders</h2>
        <p>
          We'll let you know before each shipment. Delay, reschedule or cancel
          if you need to - we'll only bill you when your order ships.
        </p>
      </div>
    </li>
    <li class="learn-more-group-item">
      <div class="learn-more-group-icon-container">
        <span rc-phone-icon></span>
      </div>
      <div>
        <h2>You're in control</h2>
        <p>
          Add or remove subscriptions, cancel orders, and edit frequencies and
          quantities through our user-friendly customer portal.
        </p>
      </div>
    </li>
  </ul>
</div>
<div class="learn-more-footer"><button data-dismiss-modal>Got it</button></div>`}function jt(){return window.Shopify?window.Shopify:(console.warn("Shopify instance not found."),null)}function el(t){var e;const r=(e=X())==null?void 0:e.product;switch(t){case"specific_product":if(!r)throw new Error("No product found on the SubscriptionWidgetConfig. This is required to preview a specific product.");return r;case"prepaid":return{external_product_id:1,hasOnetimePlan:!1,plans:[Yn.plan],variants:[{id:1,hasOnetimePlan:!1,external_variant_id:"1",option_values:["A"],prices:[{currency:"USD",unit_price:de.price.discounted_price,compare_at_price:null,plans:[Yn.price]}]}],variantLevelPlans:{1:[Yn.plan]}};case"subscription":return{external_product_id:1,hasOnetimePlan:!1,plans:[Be.plan,at.plan],variants:[{id:1,hasOnetimePlan:!1,external_variant_id:"1",option_values:["A"],prices:[{currency:"USD",unit_price:de.price.discounted_price,compare_at_price:null,plans:[Be.price,at.price]}]}],variantLevelPlans:{1:[Be.plan,at.plan]}};case"prepaid_v2":return{external_product_id:1,hasOnetimePlan:!0,plans:[de.plan,Be.plan,at.plan,Gn.plan],variants:[{id:1,hasOnetimePlan:!1,external_variant_id:"1",option_values:["A"],prices:[{currency:"USD",unit_price:de.price.discounted_price,compare_at_price:null,plans:[de.price,Be.price,at.price,Gn.price]}]}],variantLevelPlans:{1:[Be.plan,at.plan,Gn.plan]}};case"subscription-and-onetime":return{external_product_id:1,hasOnetimePlan:!0,plans:[de.plan,Be.plan,at.plan,Zn.plan,Kt.plan,Kn.plan,Jn.plan],variants:[{id:1,hasOnetimePlan:!1,external_variant_id:"1",option_values:["A"],prices:[{currency:"USD",unit_price:de.price.discounted_price,compare_at_price:null,plans:[de.price,Be.price,at.price,Zn.price,Kt.price,Kn.price,Jn.price]}]}],variantLevelPlans:{1:[Be.plan,at.plan,Zn.plan,Kt.plan,Kn.plan,Jn.plan]}};case"single_subscription":return{external_product_id:1,hasOnetimePlan:!0,plans:[de.plan,Be.plan],variants:[{id:1,hasOnetimePlan:!1,external_variant_id:"1",option_values:["A"],prices:[{currency:"USD",unit_price:de.price.discounted_price,compare_at_price:null,plans:[de.price,Be.price]}]}],variantLevelPlans:{1:[Be.plan]}};case"quantity-upsell":return{external_product_id:1,hasOnetimePlan:!0,plans:[de.plan,ni.plan,ri.plan,ti.plan],variants:[{id:1,hasOnetimePlan:!1,external_variant_id:"1",option_values:["A"],prices:[{currency:"USD",unit_price:de.price.discounted_price,compare_at_price:null,plans:[de.price,ni.price,ri.price,ti.price]}]}],variantLevelPlans:{1:[ri.plan,ni.plan,ti.plan]}};case"dynamic_pricing":return{external_product_id:1,hasOnetimePlan:!0,plans:[de.plan,Xn.plan,ei.plan,Kt.plan],variants:[{id:1,hasOnetimePlan:!1,external_variant_id:"1",option_values:["A"],prices:[{currency:"USD",unit_price:de.price.discounted_price,compare_at_price:null,plans:[de.price,Xn.price,ei.price,Kt.price]}]}],variantLevelPlans:{1:[Xn.plan,ei.plan,Kt.plan]}}}}const de={plan:{id:1,title:"Amazing Jerky Box",type:"onetime",discount_amount:null,discount_type:null,external_plan_id:null,external_plan_group_id:null,external_plan_name:null,sort_order:1,charge_interval_frequency:null,order_interval_frequency:null,interval_unit:null,external_variant_ids:[],has_variant_restrictions:!1,apply_custom_date_to_checkout:!1,pricing_progression:[]},price:{id:1,discounted_price:"29.99",discount_value:"0.00"}},Gn={plan:{id:2,title:"3 month prepaid subscription",type:"prepaid_v2",discount_amount:"15.00",discount_type:"percentage",external_plan_id:2,external_plan_group_id:78105215345,external_plan_name:"3 month prepaid subscription",sort_order:7,charge_interval_frequency:3,order_interval_frequency:1,interval_unit:"month",external_variant_ids:[],has_variant_restrictions:!1,apply_cutoff_date_to_checkout:!1,pricing_progression:[]},price:{id:2,discounted_price:"76.47",discount_value:"13.50"}},Yn={plan:{id:3,title:"3 month prepaid subscription",type:"prepaid",discount_amount:"15.00",discount_type:"percentage",external_plan_id:3,external_plan_group_id:78105018737,external_plan_name:"3 month prepaid subscription with 15% discount",sort_order:1,charge_interval_frequency:3,order_interval_frequency:1,interval_unit:"month",external_variant_ids:[],has_variant_restrictions:!1,apply_cutoff_date_to_checkout:!1,pricing_progression:[]},price:{id:3,discounted_price:"76.47",discount_value:"13.50"}},Be={plan:{id:4,title:"1 month subscription with 10% discount",type:"subscription",discount_amount:"10.00",discount_type:"percentage",external_plan_id:4,external_plan_group_id:78105051505,external_plan_name:"1 month subscription with 10% discount",sort_order:1,charge_interval_frequency:1,order_interval_frequency:1,interval_unit:"month",external_variant_ids:["51679065440625","51679065473393"],has_variant_restrictions:!0,apply_cutoff_date_to_checkout:!1,pricing_progression:[]},price:{id:4,discounted_price:"26.99",discount_value:"3.00"}},at={plan:{id:5,title:"2 month subscription with 5% discount",type:"subscription",discount_amount:"5.00",discount_type:"percentage",external_plan_id:5,external_plan_group_id:78105018737,external_plan_name:"2 month subscription with 5% discount",sort_order:2,charge_interval_frequency:2,order_interval_frequency:2,interval_unit:"month",external_variant_ids:[],has_variant_restrictions:!1,apply_cutoff_date_to_checkout:!1,pricing_progression:[]},price:{id:5,discounted_price:"28.49",discount_value:"1.50"}},Kn={plan:{id:6,title:"1 day subscription",type:"subscription",discount_amount:"0",discount_type:"percentage",external_plan_id:6,external_plan_group_id:78105018737,external_plan_name:"3 month subscription",sort_order:3,charge_interval_frequency:1,order_interval_frequency:1,interval_unit:"day",external_variant_ids:[],has_variant_restrictions:!1,apply_cutoff_date_to_checkout:!1,pricing_progression:[]},price:{id:6,discounted_price:"29.99",discount_value:"0.00"}},Jn={plan:{id:7,title:"2 day subscription",type:"subscription",discount_amount:"0",discount_type:"percentage",external_plan_id:7,external_plan_group_id:78105018737,external_plan_name:"3 month subscription",sort_order:4,charge_interval_frequency:2,order_interval_frequency:2,interval_unit:"day",external_variant_ids:[],has_variant_restrictions:!1,apply_cutoff_date_to_checkout:!1,pricing_progression:[]},price:{id:7,discounted_price:"29.99",discount_value:"0.00"}},Zn={plan:{id:8,title:"1 week subscription",type:"subscription",discount_amount:"0",discount_type:"percentage",external_plan_id:8,external_plan_group_id:78105018737,external_plan_name:"1 week subscription",sort_order:5,charge_interval_frequency:1,order_interval_frequency:1,interval_unit:"week",external_variant_ids:[],has_variant_restrictions:!1,apply_cutoff_date_to_checkout:!1,pricing_progression:[]},price:{id:8,discounted_price:"29.99",discount_value:"0.00"}},Kt={plan:{id:9,title:"2 week subscription",type:"subscription",discount_amount:"0",discount_type:"percentage",external_plan_id:9,external_plan_group_id:78105018737,external_plan_name:"2 week subscription",sort_order:6,charge_interval_frequency:2,order_interval_frequency:2,interval_unit:"week",external_variant_ids:[],has_variant_restrictions:!1,apply_cutoff_date_to_checkout:!1,pricing_progression:[]},price:{id:9,discounted_price:"29.99",discount_value:"0.00"}},Xn={plan:{id:4,title:"1 month subscription with 10% discount",type:"subscription",discount_amount:"20.00",discount_type:"percentage",external_plan_id:4,external_plan_group_id:78105051505,external_plan_name:"1 month subscription with 10% discount",sort_order:1,charge_interval_frequency:1,order_interval_frequency:1,interval_unit:"month",external_variant_ids:["51679065440625","51679065473393"],has_variant_restrictions:!0,apply_cutoff_date_to_checkout:!1,pricing_progression:[{recurring_discount_after_cycle:0,recurring_discount_amount:10,recurring_discount_type:"percentage"}]},price:{id:4,discounted_price:"23.99",discount_value:"10.00"}},ei={plan:{id:5,title:"2 month subscription with 10% discount",type:"subscription",discount_amount:"20.00",discount_type:"percentage",external_plan_id:5,external_plan_group_id:78105051506,external_plan_name:"2 month subscription with 10% discount",sort_order:1,charge_interval_frequency:2,order_interval_frequency:2,interval_unit:"month",external_variant_ids:["51679065440626","51679065473394"],has_variant_restrictions:!0,apply_cutoff_date_to_checkout:!1,pricing_progression:[{recurring_discount_after_cycle:1,recurring_discount_amount:10,recurring_discount_type:"percentage"}]},price:{id:5,discounted_price:"23.99",discount_value:"10.00"}},ti={plan:{id:2,title:"1 month subscription",type:"subscription",discount_amount:"0",discount_type:"percentage",external_plan_id:2,external_plan_group_id:78105018737,external_plan_name:"1 month subscription",sort_order:3,charge_interval_frequency:1,order_interval_frequency:1,interval_unit:"month",external_variant_ids:[],has_variant_restrictions:!1,apply_cutoff_date_to_checkout:!1,pricing_progression:[],product_quantity:1},price:{id:2,discounted_price:"29.99",discount_value:"0.00"}},ri={plan:{id:3,title:"2 month subscription with 5% discount",type:"subscription",discount_amount:"5",discount_type:"percentage",external_plan_id:3,external_plan_group_id:78205028737,external_plan_name:"2 month subscription with 5% discount",sort_order:2,charge_interval_frequency:2,order_interval_frequency:2,interval_unit:"month",external_variant_ids:[],has_variant_restrictions:!1,apply_cutoff_date_to_checkout:!1,pricing_progression:[],product_quantity:2},price:{id:3,discounted_price:"28.49",discount_value:"1.50"}},ni={plan:{id:4,title:"3 month subscription with 10% discount",type:"subscription",discount_amount:"10",discount_type:"percentage",external_plan_id:4,external_plan_group_id:78305038737,external_plan_name:"3 month subscription with 10% discount",sort_order:1,charge_interval_frequency:3,order_interval_frequency:3,interval_unit:"month",external_variant_ids:[],has_variant_restrictions:!1,apply_cutoff_date_to_checkout:!1,pricing_progression:[],product_quantity:3},price:{id:4,discounted_price:"26.99",discount_value:"3.00"}},ya=new Intl.NumberFormat("en-US",{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2});function wn(t){return t===null?ya.format(0):ya.format(typeof t=="string"?parseFloat(t)/100:t/100)}function Ot(t,e=(r=>(r=X())==null?void 0:r.shop.currency)()){return ju(Number(t)||0,window.navigator.language,{currency:e})}function Do(t){const{discount_amount:e,discount_type:r}=t;return Number(e)===0||isNaN(Number(e))?"":r==="percentage"?wn(e):Ot(e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Js=class extends Event{constructor(e,r,n){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=n??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _a=class{constructor(e,r,n,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(o,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=o,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(o,a)),this.unsubscribe=a},this.host=e,r.context!==void 0){const o=r;this.context=o.context,this.callback=o.callback,this.subscribe=o.subscribe??!1}else this.context=r,this.callback=n,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Js(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tl=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const n=r||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:n}]of this.subscriptions)r(this.o,n)},e!==void 0&&(this.value=e)}addCallback(e,r,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rl=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},va=class extends tl{constructor(e,r,n){var i,o;super(r.context!==void 0?r.initialValue:n),this.onContextRequest=a=>{const s=a.composedPath()[0];a.context===this.context&&s!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,s,a.subscribe))},this.onProviderRequest=a=>{const s=a.composedPath()[0];if(a.context!==this.context||s===this.host)return;const c=new Set;for(const[u,{consumerHost:d}]of this.subscriptions)c.has(u)||(c.add(u),d.dispatchEvent(new Js(this.context,u,!0)));a.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(o=(i=this.host).addController)==null||o.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new rl(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zs({context:t}){return(e,r)=>{const n=new WeakMap;if(typeof r=="object")return r.addInitializer((function(){n.set(this,new va(this,{context:t}))})),{get(){return e.get.call(this)},set(i){var o;return(o=n.get(this))==null||o.setValue(i),e.set.call(this,i)},init(i){var o;return(o=n.get(this))==null||o.setValue(i),i}};{e.constructor.addInitializer((a=>{n.set(a,new va(a,{context:t}))}));const i=Object.getOwnPropertyDescriptor(e,r);let o;if(i===void 0){const a=new WeakMap;o={get(){return a.get(this)},set(s){n.get(this).setValue(s),a.set(this,s)},configurable:!0,enumerable:!0}}else{const a=i.set;o={...i,set(s){n.get(this).setValue(s),a==null||a.call(this,s)}}}return void Object.defineProperty(e,r,o)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xn({context:t,subscribe:e}){return(r,n)=>{typeof n=="object"?n.addInitializer((function(){new _a(this,{context:t,callback:i=>{r.set.call(this,i)},subscribe:e})})):r.constructor.addInitializer((i=>{new _a(i,{context:t,callback:o=>{i[n]=o},subscribe:e})}))}}const Ao="production",nl=Ao==="development",Xs=Ao==="stage",il={release:"610b0c0a91d0d4e96f97b71a5e9f4ab5433721f9",dsn:"https://80d2f1d74a6745e273023731b2bd7304@o58632.ingest.us.sentry.io/4508846975680513",environment:Ao};function ec(t,e=null){return new URLSearchParams(window.location.search).get(t)??e}const ol="rcswConfigId",al="rcswSettings",sl="rcswDebug",cl="recharge",Fe=ul();function ul(){try{let t=window.sessionStorage.getItem(al);try{t=t?JSON.parse(t):void 0}catch{t=void 0}return{configId:window.sessionStorage.getItem(ol),settings:t,debug:window.sessionStorage.getItem(sl)==="true"||ec(cl)!=null||nl}}catch{return}}function dt(t,...e){console.error(`[Recharge Error] ${t}`,...e)}function Pe(t,...e){console.warn(`[Recharge Warning] ${t}`,...e)}function $(t,...e){Fe!=null&&Fe.debug&&console.info(`%c[Recharge Debug] ${t}${e.length?":":""}`,"color: #fffbf6; background: #3901f1;",...e)}const ll={887:"Dawn",1434:"Taste",1356:"Sense",1363:"Crave",1368:"Craft",1431:"Studio",1500:"Ride",1499:"Colorblock",1567:"Refresh"};function tc(){var r,n;const t=(r=jt())==null?void 0:r.theme;if(!t)return;const e=t.theme_store_id;return{id:t.id,themeStoreId:t.theme_store_id,themeName:t.name,baseThemeName:e&&ll[e]||"",isDesignMode:((n=jt())==null?void 0:n.designMode)||!1,tokens:dl(e)}}function dl(t){if(!t)return;const e=Jt("--color-button"),r=Jt("--color-button-text"),n=Jt("--color-background"),i=Jt("--color-foreground"),o=Jt("--buttons-radius-outset"),a=Jt("--badge-corner-radius"),s={brandColor:e?"rgba(var(--color-button), 1)":void 0,brandContrastColor:r?"rgba(var(--color-button-text), 1)":void 0,selectedBgColor:n&&i?"color-mix(in srgb,rgba(var(--color-background), 1) 97%, rgba(var(--color-foreground), 1))":void 0,selectedTextColor:i?"rgba(var(--color-foreground), 1)":void 0,borderRadius:o?"var(--buttons-radius-outset)":void 0,badgeBorderRadius:a?"var(--badge-corner-radius)":void 0};if(Object.values(s).some(c=>c))return s}function Jt(t,e=document.documentElement){return getComputedStyle(e).getPropertyValue(t).trim()!==""}var tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pl(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function fl(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var e=t.default;if(typeof e=="function"){var r=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var i=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:function(){return t[n]}})}),r}var ye=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof ye<"u"&&ye,Se={searchParams:"URLSearchParams"in ye,iterable:"Symbol"in ye&&"iterator"in Symbol,blob:"FileReader"in ye&&"Blob"in ye&&(function(){try{return new Blob,!0}catch{return!1}})(),formData:"FormData"in ye,arrayBuffer:"ArrayBuffer"in ye};function hl(t){return t&&DataView.prototype.isPrototypeOf(t)}if(Se.arrayBuffer)var gl=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],yl=ArrayBuffer.isView||function(t){return t&&gl.indexOf(Object.prototype.toString.call(t))>-1};function Nr(t){if(typeof t!="string"&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||t==="")throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function ko(t){return typeof t!="string"&&(t=String(t)),t}function No(t){var e={next:function(){var r=t.shift();return{done:r===void 0,value:r}}};return Se.iterable&&(e[Symbol.iterator]=function(){return e}),e}function oe(t){this.map={},t instanceof oe?t.forEach(function(e,r){this.append(r,e)},this):Array.isArray(t)?t.forEach(function(e){this.append(e[0],e[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}oe.prototype.append=function(t,e){t=Nr(t),e=ko(e);var r=this.map[t];this.map[t]=r?r+", "+e:e};oe.prototype.delete=function(t){delete this.map[Nr(t)]};oe.prototype.get=function(t){return t=Nr(t),this.has(t)?this.map[t]:null};oe.prototype.has=function(t){return this.map.hasOwnProperty(Nr(t))};oe.prototype.set=function(t,e){this.map[Nr(t)]=ko(e)};oe.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)};oe.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),No(t)};oe.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),No(t)};oe.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),No(t)};Se.iterable&&(oe.prototype[Symbol.iterator]=oe.prototype.entries);function ii(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function rc(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function _l(t){var e=new FileReader,r=rc(e);return e.readAsArrayBuffer(t),r}function vl(t){var e=new FileReader,r=rc(e);return e.readAsText(t),r}function ml(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function ma(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function nc(){return this.bodyUsed=!1,this._initBody=function(t){this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?typeof t=="string"?this._bodyText=t:Se.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:Se.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:Se.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():Se.arrayBuffer&&Se.blob&&hl(t)?(this._bodyArrayBuffer=ma(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):Se.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||yl(t))?this._bodyArrayBuffer=ma(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||(typeof t=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):Se.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},Se.blob&&(this.blob=function(){var t=ii(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=ii(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(_l)}),this.text=function(){var t=ii(this);if(t)return t;if(this._bodyBlob)return vl(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(ml(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},Se.formData&&(this.formData=function(){return this.text().then(xl)}),this.json=function(){return this.text().then(JSON.parse)},this}var bl=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function wl(t){var e=t.toUpperCase();return bl.indexOf(e)>-1?e:t}function qt(t,e){if(!(this instanceof qt))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e=e||{};var r=e.body;if(t instanceof qt){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new oe(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,!r&&t._bodyInit!=null&&(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",(e.headers||!this.headers)&&(this.headers=new oe(e.headers)),this.method=wl(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),(this.method==="GET"||this.method==="HEAD")&&(e.cache==="no-store"||e.cache==="no-cache")){var n=/([?&])_=[^&]*/;if(n.test(this.url))this.url=this.url.replace(n,"$1_="+new Date().getTime());else{var i=/\?/;this.url+=(i.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}qt.prototype.clone=function(){return new qt(this,{body:this._bodyInit})};function xl(t){var e=new FormData;return t.trim().split("&").forEach(function(r){if(r){var n=r.split("="),i=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(i),decodeURIComponent(o))}}),e}function Sl(t){var e=new oe,r=t.replace(/\r?\n[\t ]+/g," ");return r.split("\r").map(function(n){return n.indexOf(`
`)===0?n.substr(1,n.length):n}).forEach(function(n){var i=n.split(":"),o=i.shift().trim();if(o){var a=i.join(":").trim();e.append(o,a)}}),e}nc.call(qt.prototype);function Xe(t,e){if(!(this instanceof Xe))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=e.status===void 0?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText=e.statusText===void 0?"":""+e.statusText,this.headers=new oe(e.headers),this.url=e.url||"",this._initBody(t)}nc.call(Xe.prototype);Xe.prototype.clone=function(){return new Xe(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new oe(this.headers),url:this.url})};Xe.error=function(){var t=new Xe(null,{status:0,statusText:""});return t.type="error",t};var Ol=[301,302,303,307,308];Xe.redirect=function(t,e){if(Ol.indexOf(e)===-1)throw new RangeError("Invalid status code");return new Xe(null,{status:e,headers:{location:t}})};var Nt=ye.DOMException;try{new Nt}catch{Nt=function(e,r){this.message=e,this.name=r;var n=Error(e);this.stack=n.stack},Nt.prototype=Object.create(Error.prototype),Nt.prototype.constructor=Nt}function ic(t,e){return new Promise(function(r,n){var i=new qt(t,e);if(i.signal&&i.signal.aborted)return n(new Nt("Aborted","AbortError"));var o=new XMLHttpRequest;function a(){o.abort()}o.onload=function(){var c={status:o.status,statusText:o.statusText,headers:Sl(o.getAllResponseHeaders()||"")};c.url="responseURL"in o?o.responseURL:c.headers.get("X-Request-URL");var u="response"in o?o.response:o.responseText;setTimeout(function(){r(new Xe(u,c))},0)},o.onerror=function(){setTimeout(function(){n(new TypeError("Network request failed"))},0)},o.ontimeout=function(){setTimeout(function(){n(new TypeError("Network request failed"))},0)},o.onabort=function(){setTimeout(function(){n(new Nt("Aborted","AbortError"))},0)};function s(c){try{return c===""&&ye.location.href?ye.location.href:c}catch{return c}}o.open(i.method,s(i.url),!0),i.credentials==="include"?o.withCredentials=!0:i.credentials==="omit"&&(o.withCredentials=!1),"responseType"in o&&(Se.blob?o.responseType="blob":Se.arrayBuffer&&i.headers.get("Content-Type")&&i.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(o.responseType="arraybuffer")),e&&typeof e.headers=="object"&&!(e.headers instanceof oe)?Object.getOwnPropertyNames(e.headers).forEach(function(c){o.setRequestHeader(c,ko(e.headers[c]))}):i.headers.forEach(function(c,u){o.setRequestHeader(u,c)}),i.signal&&(i.signal.addEventListener("abort",a),o.onreadystatechange=function(){o.readyState===4&&i.signal.removeEventListener("abort",a)}),o.send(typeof i._bodyInit>"u"?null:i._bodyInit)})}ic.polyfill=!0;ye.fetch||(ye.fetch=ic,ye.Headers=oe,ye.Request=qt,ye.Response=Xe);var oi,ba;function Pl(){return ba||(ba=1,oi=self.fetch.bind(self)),oi}Pl();var ai,wa;function or(){return wa||(wa=1,ai=TypeError),ai}const Ml={},El=Object.freeze(Object.defineProperty({__proto__:null,default:Ml},Symbol.toStringTag,{value:"Module"})),Cl=fl(El);var si,xa;function Sn(){if(xa)return si;xa=1;var t=typeof Map=="function"&&Map.prototype,e=Object.getOwnPropertyDescriptor&&t?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,r=t&&e&&typeof e.get=="function"?e.get:null,n=t&&Map.prototype.forEach,i=typeof Set=="function"&&Set.prototype,o=Object.getOwnPropertyDescriptor&&i?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,a=i&&o&&typeof o.get=="function"?o.get:null,s=i&&Set.prototype.forEach,c=typeof WeakMap=="function"&&WeakMap.prototype,u=c?WeakMap.prototype.has:null,d=typeof WeakSet=="function"&&WeakSet.prototype,p=d?WeakSet.prototype.has:null,v=typeof WeakRef=="function"&&WeakRef.prototype,b=v?WeakRef.prototype.deref:null,O=Boolean.prototype.valueOf,P=Object.prototype.toString,f=Function.prototype.toString,w=String.prototype.match,x=String.prototype.slice,M=String.prototype.replace,A=String.prototype.toUpperCase,I=String.prototype.toLowerCase,k=RegExp.prototype.test,N=Array.prototype.concat,D=Array.prototype.join,ce=Array.prototype.slice,me=Math.floor,K=typeof BigInt=="function"?BigInt.prototype.valueOf:null,J=Object.getOwnPropertySymbols,ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,Z=typeof Symbol=="function"&&typeof Symbol.iterator=="object",ue=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===Z||!0)?Symbol.toStringTag:null,L=Object.prototype.propertyIsEnumerable,Ie=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(h){return h.__proto__}:null);function fe(h,_){if(h===1/0||h===-1/0||h!==h||h&&h>-1e3&&h<1e3||k.call(/e/,_))return _;var B=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof h=="number"){var j=h<0?-me(-h):me(h);if(j!==h){var F=String(j),R=x.call(_,F.length+1);return M.call(F,B,"$&_")+"."+M.call(M.call(R,/([0-9]{3})/g,"$&_"),/_$/,"")}}return M.call(_,B,"$&_")}var Ee=Cl,rt=Ee.custom,ht=be(rt)?rt:null,Re={__proto__:null,double:'"',single:"'"},he={__proto__:null,double:/(["\\])/g,single:/(['\\])/g};si=function h(_,B,j,F){var R=B||{};if(ge(R,"quoteStyle")&&!ge(Re,R.quoteStyle))throw new TypeError('option "quoteStyle" must be "single" or "double"');if(ge(R,"maxStringLength")&&(typeof R.maxStringLength=="number"?R.maxStringLength<0&&R.maxStringLength!==1/0:R.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var Ye=ge(R,"customInspect")?R.customInspect:!0;if(typeof Ye!="boolean"&&Ye!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(ge(R,"indent")&&R.indent!==null&&R.indent!=="	"&&!(parseInt(R.indent,10)===R.indent&&R.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(ge(R,"numericSeparator")&&typeof R.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var it=R.numericSeparator;if(typeof _>"u")return"undefined";if(_===null)return"null";if(typeof _=="boolean")return _?"true":"false";if(typeof _=="string")return qr(_,R);if(typeof _=="number"){if(_===0)return 1/0/_>0?"0":"-0";var we=String(_);return it?fe(_,we):we}if(typeof _=="bigint"){var Ke=String(_)+"n";return it?fe(_,Ke):Ke}var dr=typeof R.depth>"u"?5:R.depth;if(typeof j>"u"&&(j=0),j>=dr&&dr>0&&typeof _=="object")return ee(_)?"[Array]":"[Object]";var mt=Fn(R,j);if(typeof F>"u")F=[];else if(Qe(F,_)>=0)return"[Circular]";function Te(y,S,T){if(S&&(F=ce.call(F),F.push(S)),T){var z={depth:R.depth};return ge(R,"quoteStyle")&&(z.quoteStyle=R.quoteStyle),h(y,z,j+1,F)}return h(y,R,j+1,F)}if(typeof _=="function"&&!le(_)){var Fr=Ce(_),zr=Vt(_,Te);return"[Function"+(Fr?": "+Fr:" (anonymous)")+"]"+(zr.length>0?" { "+D.call(zr,", ")+" }":"")}if(be(_)){var Hr=Z?M.call(String(_),/^(Symbol\(.*\))_[^)]*$/,"$1"):ae.call(_);return typeof _=="object"&&!Z?Ge(Hr):Hr}if(jn(_)){for(var bt="<"+I.call(String(_.nodeName)),Dt=_.attributes||[],At=0;At<Dt.length;At++)bt+=" "+Dt[At].name+"="+Ve(nt(Dt[At].value),"double",R);return bt+=">",_.childNodes&&_.childNodes.length&&(bt+="..."),bt+="</"+I.call(String(_.nodeName))+">",bt}if(ee(_)){if(_.length===0)return"[]";var pr=Vt(_,Te);return mt&&!Un(pr)?"["+lr(pr,mt)+"]":"[ "+D.call(pr,", ")+" ]"}if(q(_)){var Wt=Vt(_,Te);return!("cause"in Error.prototype)&&"cause"in _&&!L.call(_,"cause")?"{ ["+String(_)+"] "+D.call(N.call("[cause]: "+Te(_.cause),Wt),", ")+" }":Wt.length===0?"["+String(_)+"]":"{ ["+String(_)+"] "+D.call(Wt,", ")+" }"}if(typeof _=="object"&&Ye){if(ht&&typeof _[ht]=="function"&&Ee)return Ee(_,{depth:dr-j});if(Ye!=="symbol"&&typeof _.inspect=="function")return _.inspect()}if($e(_)){var Vr=[];return n&&n.call(_,function(y,S){Vr.push(Te(S,_,!0)+" => "+Te(y,_))}),Ur("Map",r.call(_),Vr,mt)}if(vt(_)){var Qt=[];return s&&s.call(_,function(y){Qt.push(Te(y,_))}),Ur("Set",a.call(_),Qt,mt)}if(yt(_))return ur("WeakMap");if(Ht(_))return ur("WeakSet");if(_t(_))return ur("WeakRef");if(W(_))return Ge(Te(Number(_)));if(We(_))return Ge(Te(K.call(_)));if(Q(_))return Ge(O.call(_));if(V(_))return Ge(Te(String(_)));if(typeof window<"u"&&_===window)return"{ [object Window] }";if(typeof globalThis<"u"&&_===globalThis||typeof tr<"u"&&_===tr)return"{ [object globalThis] }";if(!gt(_)&&!le(_)){var Gt=Vt(_,Te),Wr=Ie?Ie(_)===Object.prototype:_ instanceof Object||_.constructor===Object,fr=_ instanceof Object?"":"null prototype",Qr=!Wr&&ue&&Object(_)===_&&ue in _?x.call(xe(_),8,-1):fr?"Object":"",Gr=Wr||typeof _.constructor!="function"?"":_.constructor.name?_.constructor.name+" ":"",l=Gr+(Qr||fr?"["+D.call(N.call([],Qr||[],fr||[]),": ")+"] ":"");return Gt.length===0?l+"{}":mt?l+"{"+lr(Gt,mt)+"}":l+"{ "+D.call(Gt,", ")+" }"}return String(_)};function Ve(h,_,B){var j=B.quoteStyle||_,F=Re[j];return F+h+F}function nt(h){return M.call(String(h),/"/g,"&quot;")}function ne(h){return!ue||!(typeof h=="object"&&(ue in h||typeof h[ue]<"u"))}function ee(h){return xe(h)==="[object Array]"&&ne(h)}function gt(h){return xe(h)==="[object Date]"&&ne(h)}function le(h){return xe(h)==="[object RegExp]"&&ne(h)}function q(h){return xe(h)==="[object Error]"&&ne(h)}function V(h){return xe(h)==="[object String]"&&ne(h)}function W(h){return xe(h)==="[object Number]"&&ne(h)}function Q(h){return xe(h)==="[object Boolean]"&&ne(h)}function be(h){if(Z)return h&&typeof h=="object"&&h instanceof Symbol;if(typeof h=="symbol")return!0;if(!h||typeof h!="object"||!ae)return!1;try{return ae.call(h),!0}catch{}return!1}function We(h){if(!h||typeof h!="object"||!K)return!1;try{return K.call(h),!0}catch{}return!1}var se=Object.prototype.hasOwnProperty||function(h){return h in this};function ge(h,_){return se.call(h,_)}function xe(h){return P.call(h)}function Ce(h){if(h.name)return h.name;var _=w.call(f.call(h),/^function\s*([\w$]+)/);return _?_[1]:null}function Qe(h,_){if(h.indexOf)return h.indexOf(_);for(var B=0,j=h.length;B<j;B++)if(h[B]===_)return B;return-1}function $e(h){if(!r||!h||typeof h!="object")return!1;try{r.call(h);try{a.call(h)}catch{return!0}return h instanceof Map}catch{}return!1}function yt(h){if(!u||!h||typeof h!="object")return!1;try{u.call(h,u);try{p.call(h,p)}catch{return!0}return h instanceof WeakMap}catch{}return!1}function _t(h){if(!b||!h||typeof h!="object")return!1;try{return b.call(h),!0}catch{}return!1}function vt(h){if(!a||!h||typeof h!="object")return!1;try{a.call(h);try{r.call(h)}catch{return!0}return h instanceof Set}catch{}return!1}function Ht(h){if(!p||!h||typeof h!="object")return!1;try{p.call(h,p);try{u.call(h,u)}catch{return!0}return h instanceof WeakSet}catch{}return!1}function jn(h){return!h||typeof h!="object"?!1:typeof HTMLElement<"u"&&h instanceof HTMLElement?!0:typeof h.nodeName=="string"&&typeof h.getAttribute=="function"}function qr(h,_){if(h.length>_.maxStringLength){var B=h.length-_.maxStringLength,j="... "+B+" more character"+(B>1?"s":"");return qr(x.call(h,0,_.maxStringLength),_)+j}var F=he[_.quoteStyle||"single"];F.lastIndex=0;var R=M.call(M.call(h,F,"\\$1"),/[\x00-\x1f]/g,qn);return Ve(R,"single",_)}function qn(h){var _=h.charCodeAt(0),B={8:"b",9:"t",10:"n",12:"f",13:"r"}[_];return B?"\\"+B:"\\x"+(_<16?"0":"")+A.call(_.toString(16))}function Ge(h){return"Object("+h+")"}function ur(h){return h+" { ? }"}function Ur(h,_,B,j){var F=j?lr(B,j):D.call(B,", ");return h+" ("+_+") {"+F+"}"}function Un(h){for(var _=0;_<h.length;_++)if(Qe(h[_],`
`)>=0)return!1;return!0}function Fn(h,_){var B;if(h.indent==="	")B="	";else if(typeof h.indent=="number"&&h.indent>0)B=D.call(Array(h.indent+1)," ");else return null;return{base:B,prev:D.call(Array(_+1),B)}}function lr(h,_){if(h.length===0)return"";var B=`
`+_.prev+_.base;return B+D.call(h,","+B)+`
`+_.prev}function Vt(h,_){var B=ee(h),j=[];if(B){j.length=h.length;for(var F=0;F<h.length;F++)j[F]=ge(h,F)?_(h[F],h):""}var R=typeof J=="function"?J(h):[],Ye;if(Z){Ye={};for(var it=0;it<R.length;it++)Ye["$"+R[it]]=R[it]}for(var we in h)ge(h,we)&&(B&&String(Number(we))===we&&we<h.length||Z&&Ye["$"+we]instanceof Symbol||(k.call(/[^\w$]/,we)?j.push(_(we,h)+": "+_(h[we],h)):j.push(we+": "+_(h[we],h))));if(typeof J=="function")for(var Ke=0;Ke<R.length;Ke++)L.call(h,R[Ke])&&j.push("["+_(R[Ke])+"]: "+_(h[R[Ke]],h));return j}return si}var ci,Sa;function $l(){if(Sa)return ci;Sa=1;var t=Sn(),e=or(),r=function(s,c,u){for(var d=s,p;(p=d.next)!=null;d=p)if(p.key===c)return d.next=p.next,u||(p.next=s.next,s.next=p),p},n=function(s,c){if(s){var u=r(s,c);return u&&u.value}},i=function(s,c,u){var d=r(s,c);d?d.value=u:s.next={key:c,next:s.next,value:u}},o=function(s,c){return s?!!r(s,c):!1},a=function(s,c){if(s)return r(s,c,!0)};return ci=function(){var c,u={assert:function(d){if(!u.has(d))throw new e("Side channel does not contain "+t(d))},delete:function(d){var p=a(c,d);return p&&c&&!c.next&&(c=void 0),!!p},get:function(d){return n(c,d)},has:function(d){return o(c,d)},set:function(d,p){c||(c={next:void 0}),i(c,d,p)}};return u},ci}var ui,Oa;function oc(){return Oa||(Oa=1,ui=Object),ui}var li,Pa;function Tl(){return Pa||(Pa=1,li=Error),li}var di,Ma;function Dl(){return Ma||(Ma=1,di=EvalError),di}var pi,Ea;function Al(){return Ea||(Ea=1,pi=RangeError),pi}var fi,Ca;function kl(){return Ca||(Ca=1,fi=ReferenceError),fi}var hi,$a;function Nl(){return $a||($a=1,hi=SyntaxError),hi}var gi,Ta;function Il(){return Ta||(Ta=1,gi=URIError),gi}var yi,Da;function Rl(){return Da||(Da=1,yi=Math.abs),yi}var _i,Aa;function Ll(){return Aa||(Aa=1,_i=Math.floor),_i}var vi,ka;function Bl(){return ka||(ka=1,vi=Math.max),vi}var mi,Na;function jl(){return Na||(Na=1,mi=Math.min),mi}var bi,Ia;function ql(){return Ia||(Ia=1,bi=Math.pow),bi}var wi,Ra;function Ul(){return Ra||(Ra=1,wi=Math.round),wi}var xi,La;function Fl(){return La||(La=1,xi=Number.isNaN||function(e){return e!==e}),xi}var Si,Ba;function zl(){if(Ba)return Si;Ba=1;var t=Fl();return Si=function(r){return t(r)||r===0?r:r<0?-1:1},Si}var Oi,ja;function Hl(){return ja||(ja=1,Oi=Object.getOwnPropertyDescriptor),Oi}var Pi,qa;function ac(){if(qa)return Pi;qa=1;var t=Hl();if(t)try{t([],"length")}catch{t=null}return Pi=t,Pi}var Mi,Ua;function Vl(){if(Ua)return Mi;Ua=1;var t=Object.defineProperty||!1;if(t)try{t({},"a",{value:1})}catch{t=!1}return Mi=t,Mi}var Ei,Fa;function Wl(){return Fa||(Fa=1,Ei=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},r=Symbol("test"),n=Object(r);if(typeof r=="string"||Object.prototype.toString.call(r)!=="[object Symbol]"||Object.prototype.toString.call(n)!=="[object Symbol]")return!1;var i=42;e[r]=i;for(var o in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var a=Object.getOwnPropertySymbols(e);if(a.length!==1||a[0]!==r||!Object.prototype.propertyIsEnumerable.call(e,r))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var s=Object.getOwnPropertyDescriptor(e,r);if(s.value!==i||s.enumerable!==!0)return!1}return!0}),Ei}var Ci,za;function Ql(){if(za)return Ci;za=1;var t=typeof Symbol<"u"&&Symbol,e=Wl();return Ci=function(){return typeof t!="function"||typeof Symbol!="function"||typeof t("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:e()},Ci}var $i,Ha;function sc(){return Ha||(Ha=1,$i=typeof Reflect<"u"&&Reflect.getPrototypeOf||null),$i}var Ti,Va;function cc(){if(Va)return Ti;Va=1;var t=oc();return Ti=t.getPrototypeOf||null,Ti}var Di,Wa;function Gl(){if(Wa)return Di;Wa=1;var t="Function.prototype.bind called on incompatible ",e=Object.prototype.toString,r=Math.max,n="[object Function]",i=function(c,u){for(var d=[],p=0;p<c.length;p+=1)d[p]=c[p];for(var v=0;v<u.length;v+=1)d[v+c.length]=u[v];return d},o=function(c,u){for(var d=[],p=u,v=0;p<c.length;p+=1,v+=1)d[v]=c[p];return d},a=function(s,c){for(var u="",d=0;d<s.length;d+=1)u+=s[d],d+1<s.length&&(u+=c);return u};return Di=function(c){var u=this;if(typeof u!="function"||e.apply(u)!==n)throw new TypeError(t+u);for(var d=o(arguments,1),p,v=function(){if(this instanceof p){var w=u.apply(this,i(d,arguments));return Object(w)===w?w:this}return u.apply(c,i(d,arguments))},b=r(0,u.length-d.length),O=[],P=0;P<b;P++)O[P]="$"+P;if(p=Function("binder","return function ("+a(O,",")+"){ return binder.apply(this,arguments); }")(v),u.prototype){var f=function(){};f.prototype=u.prototype,p.prototype=new f,f.prototype=null}return p},Di}var Ai,Qa;function On(){if(Qa)return Ai;Qa=1;var t=Gl();return Ai=Function.prototype.bind||t,Ai}var ki,Ga;function Io(){return Ga||(Ga=1,ki=Function.prototype.call),ki}var Ni,Ya;function uc(){return Ya||(Ya=1,Ni=Function.prototype.apply),Ni}var Ii,Ka;function Yl(){return Ka||(Ka=1,Ii=typeof Reflect<"u"&&Reflect&&Reflect.apply),Ii}var Ri,Ja;function Kl(){if(Ja)return Ri;Ja=1;var t=On(),e=uc(),r=Io(),n=Yl();return Ri=n||t.call(r,e),Ri}var Li,Za;function lc(){if(Za)return Li;Za=1;var t=On(),e=or(),r=Io(),n=Kl();return Li=function(o){if(o.length<1||typeof o[0]!="function")throw new e("a function is required");return n(t,r,o)},Li}var Bi,Xa;function Jl(){if(Xa)return Bi;Xa=1;var t=lc(),e=ac(),r;try{r=[].__proto__===Array.prototype}catch(a){if(!a||typeof a!="object"||!("code"in a)||a.code!=="ERR_PROTO_ACCESS")throw a}var n=!!r&&e&&e(Object.prototype,"__proto__"),i=Object,o=i.getPrototypeOf;return Bi=n&&typeof n.get=="function"?t([n.get]):typeof o=="function"?function(s){return o(s==null?s:i(s))}:!1,Bi}var ji,es;function Zl(){if(es)return ji;es=1;var t=sc(),e=cc(),r=Jl();return ji=t?function(i){return t(i)}:e?function(i){if(!i||typeof i!="object"&&typeof i!="function")throw new TypeError("getProto: not an object");return e(i)}:r?function(i){return r(i)}:null,ji}var qi,ts;function Xl(){if(ts)return qi;ts=1;var t=Function.prototype.call,e=Object.prototype.hasOwnProperty,r=On();return qi=r.call(t,e),qi}var Ui,rs;function Ro(){if(rs)return Ui;rs=1;var t,e=oc(),r=Tl(),n=Dl(),i=Al(),o=kl(),a=Nl(),s=or(),c=Il(),u=Rl(),d=Ll(),p=Bl(),v=jl(),b=ql(),O=Ul(),P=zl(),f=Function,w=function(le){try{return f('"use strict"; return ('+le+").constructor;")()}catch{}},x=ac(),M=Vl(),A=function(){throw new s},I=x?(function(){try{return arguments.callee,A}catch{try{return x(arguments,"callee").get}catch{return A}}})():A,k=Ql()(),N=Zl(),D=cc(),ce=sc(),me=uc(),K=Io(),J={},ae=typeof Uint8Array>"u"||!N?t:N(Uint8Array),Z={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?t:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?t:ArrayBuffer,"%ArrayIteratorPrototype%":k&&N?N([][Symbol.iterator]()):t,"%AsyncFromSyncIteratorPrototype%":t,"%AsyncFunction%":J,"%AsyncGenerator%":J,"%AsyncGeneratorFunction%":J,"%AsyncIteratorPrototype%":J,"%Atomics%":typeof Atomics>"u"?t:Atomics,"%BigInt%":typeof BigInt>"u"?t:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?t:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?t:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?t:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":r,"%eval%":eval,"%EvalError%":n,"%Float16Array%":typeof Float16Array>"u"?t:Float16Array,"%Float32Array%":typeof Float32Array>"u"?t:Float32Array,"%Float64Array%":typeof Float64Array>"u"?t:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?t:FinalizationRegistry,"%Function%":f,"%GeneratorFunction%":J,"%Int8Array%":typeof Int8Array>"u"?t:Int8Array,"%Int16Array%":typeof Int16Array>"u"?t:Int16Array,"%Int32Array%":typeof Int32Array>"u"?t:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":k&&N?N(N([][Symbol.iterator]())):t,"%JSON%":typeof JSON=="object"?JSON:t,"%Map%":typeof Map>"u"?t:Map,"%MapIteratorPrototype%":typeof Map>"u"||!k||!N?t:N(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":e,"%Object.getOwnPropertyDescriptor%":x,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?t:Promise,"%Proxy%":typeof Proxy>"u"?t:Proxy,"%RangeError%":i,"%ReferenceError%":o,"%Reflect%":typeof Reflect>"u"?t:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?t:Set,"%SetIteratorPrototype%":typeof Set>"u"||!k||!N?t:N(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?t:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":k&&N?N(""[Symbol.iterator]()):t,"%Symbol%":k?Symbol:t,"%SyntaxError%":a,"%ThrowTypeError%":I,"%TypedArray%":ae,"%TypeError%":s,"%Uint8Array%":typeof Uint8Array>"u"?t:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?t:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?t:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?t:Uint32Array,"%URIError%":c,"%WeakMap%":typeof WeakMap>"u"?t:WeakMap,"%WeakRef%":typeof WeakRef>"u"?t:WeakRef,"%WeakSet%":typeof WeakSet>"u"?t:WeakSet,"%Function.prototype.call%":K,"%Function.prototype.apply%":me,"%Object.defineProperty%":M,"%Object.getPrototypeOf%":D,"%Math.abs%":u,"%Math.floor%":d,"%Math.max%":p,"%Math.min%":v,"%Math.pow%":b,"%Math.round%":O,"%Math.sign%":P,"%Reflect.getPrototypeOf%":ce};if(N)try{null.error}catch(le){var ue=N(N(le));Z["%Error.prototype%"]=ue}var L=function le(q){var V;if(q==="%AsyncFunction%")V=w("async function () {}");else if(q==="%GeneratorFunction%")V=w("function* () {}");else if(q==="%AsyncGeneratorFunction%")V=w("async function* () {}");else if(q==="%AsyncGenerator%"){var W=le("%AsyncGeneratorFunction%");W&&(V=W.prototype)}else if(q==="%AsyncIteratorPrototype%"){var Q=le("%AsyncGenerator%");Q&&N&&(V=N(Q.prototype))}return Z[q]=V,V},Ie={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},fe=On(),Ee=Xl(),rt=fe.call(K,Array.prototype.concat),ht=fe.call(me,Array.prototype.splice),Re=fe.call(K,String.prototype.replace),he=fe.call(K,String.prototype.slice),Ve=fe.call(K,RegExp.prototype.exec),nt=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,ne=/\\(\\)?/g,ee=function(q){var V=he(q,0,1),W=he(q,-1);if(V==="%"&&W!=="%")throw new a("invalid intrinsic syntax, expected closing `%`");if(W==="%"&&V!=="%")throw new a("invalid intrinsic syntax, expected opening `%`");var Q=[];return Re(q,nt,function(be,We,se,ge){Q[Q.length]=se?Re(ge,ne,"$1"):We||be}),Q},gt=function(q,V){var W=q,Q;if(Ee(Ie,W)&&(Q=Ie[W],W="%"+Q[0]+"%"),Ee(Z,W)){var be=Z[W];if(be===J&&(be=L(W)),typeof be>"u"&&!V)throw new s("intrinsic "+q+" exists, but is not available. Please file an issue!");return{alias:Q,name:W,value:be}}throw new a("intrinsic "+q+" does not exist!")};return Ui=function(q,V){if(typeof q!="string"||q.length===0)throw new s("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof V!="boolean")throw new s('"allowMissing" argument must be a boolean');if(Ve(/^%?[^%]*%?$/,q)===null)throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var W=ee(q),Q=W.length>0?W[0]:"",be=gt("%"+Q+"%",V),We=be.name,se=be.value,ge=!1,xe=be.alias;xe&&(Q=xe[0],ht(W,rt([0,1],xe)));for(var Ce=1,Qe=!0;Ce<W.length;Ce+=1){var $e=W[Ce],yt=he($e,0,1),_t=he($e,-1);if((yt==='"'||yt==="'"||yt==="`"||_t==='"'||_t==="'"||_t==="`")&&yt!==_t)throw new a("property names with quotes must have matching quotes");if(($e==="constructor"||!Qe)&&(ge=!0),Q+="."+$e,We="%"+Q+"%",Ee(Z,We))se=Z[We];else if(se!=null){if(!($e in se)){if(!V)throw new s("base intrinsic for "+q+" exists, but the property is not available.");return}if(x&&Ce+1>=W.length){var vt=x(se,$e);Qe=!!vt,Qe&&"get"in vt&&!("originalValue"in vt.get)?se=vt.get:se=se[$e]}else Qe=Ee(se,$e),se=se[$e];Qe&&!ge&&(Z[We]=se)}}return se},Ui}var Fi,ns;function dc(){if(ns)return Fi;ns=1;var t=Ro(),e=lc(),r=e([t("%String.prototype.indexOf%")]);return Fi=function(i,o){var a=t(i,!!o);return typeof a=="function"&&r(i,".prototype.")>-1?e([a]):a},Fi}var zi,is;function pc(){if(is)return zi;is=1;var t=Ro(),e=dc(),r=Sn(),n=or(),i=t("%Map%",!0),o=e("Map.prototype.get",!0),a=e("Map.prototype.set",!0),s=e("Map.prototype.has",!0),c=e("Map.prototype.delete",!0),u=e("Map.prototype.size",!0);return zi=!!i&&function(){var p,v={assert:function(b){if(!v.has(b))throw new n("Side channel does not contain "+r(b))},delete:function(b){if(p){var O=c(p,b);return u(p)===0&&(p=void 0),O}return!1},get:function(b){if(p)return o(p,b)},has:function(b){return p?s(p,b):!1},set:function(b,O){p||(p=new i),a(p,b,O)}};return v},zi}var Hi,os;function ed(){if(os)return Hi;os=1;var t=Ro(),e=dc(),r=Sn(),n=pc(),i=or(),o=t("%WeakMap%",!0),a=e("WeakMap.prototype.get",!0),s=e("WeakMap.prototype.set",!0),c=e("WeakMap.prototype.has",!0),u=e("WeakMap.prototype.delete",!0);return Hi=o?function(){var p,v,b={assert:function(O){if(!b.has(O))throw new i("Side channel does not contain "+r(O))},delete:function(O){if(o&&O&&(typeof O=="object"||typeof O=="function")){if(p)return u(p,O)}else if(n&&v)return v.delete(O);return!1},get:function(O){return o&&O&&(typeof O=="object"||typeof O=="function")&&p?a(p,O):v&&v.get(O)},has:function(O){return o&&O&&(typeof O=="object"||typeof O=="function")&&p?c(p,O):!!v&&v.has(O)},set:function(O,P){o&&O&&(typeof O=="object"||typeof O=="function")?(p||(p=new o),s(p,O,P)):n&&(v||(v=n()),v.set(O,P))}};return b}:n,Hi}var Vi,as;function td(){if(as)return Vi;as=1;var t=or(),e=Sn(),r=$l(),n=pc(),i=ed(),o=i||n||r;return Vi=function(){var s,c={assert:function(u){if(!c.has(u)){var d=u&&Object(u)===u?"the given object key":e(u);throw new t("Side channel does not contain "+d)}},delete:function(u){return!!s&&s.delete(u)},get:function(u){return s&&s.get(u)},has:function(u){return!!s&&s.has(u)},set:function(u,d){s||(s=o()),s.set(u,d)}};return c},Vi}var Wi,ss;function fc(){if(ss)return Wi;ss=1;var t=String.prototype.replace,e=/%20/g,r={RFC1738:"RFC1738",RFC3986:"RFC3986"};return Wi={default:r.RFC3986,formatters:{RFC1738:function(n){return t.call(n,e,"+")},RFC3986:function(n){return String(n)}},RFC1738:r.RFC1738,RFC3986:r.RFC3986},Wi}var Qi,cs;function rd(){if(cs)return Qi;cs=1;var t=fc(),e=Object.prototype.hasOwnProperty,r=Array.isArray,n=(function(){for(var P=[],f=0;f<256;++f)P.push("%"+((f<16?"0":"")+f.toString(16)).toUpperCase());return P})(),i=function(f){for(;f.length>1;){var w=f.pop(),x=w.obj[w.prop];if(r(x)){for(var M=[],A=0;A<x.length;++A)typeof x[A]<"u"&&M.push(x[A]);w.obj[w.prop]=M}}},o=function(f,w){for(var x=w&&w.plainObjects?Object.create(null):{},M=0;M<f.length;++M)typeof f[M]<"u"&&(x[M]=f[M]);return x},a=function P(f,w,x){if(!w)return f;if(typeof w!="object"){if(r(f))f.push(w);else if(f&&typeof f=="object")(x&&(x.plainObjects||x.allowPrototypes)||!e.call(Object.prototype,w))&&(f[w]=!0);else return[f,w];return f}if(!f||typeof f!="object")return[f].concat(w);var M=f;return r(f)&&!r(w)&&(M=o(f,x)),r(f)&&r(w)?(w.forEach(function(A,I){if(e.call(f,I)){var k=f[I];k&&typeof k=="object"&&A&&typeof A=="object"?f[I]=P(k,A,x):f.push(A)}else f[I]=A}),f):Object.keys(w).reduce(function(A,I){var k=w[I];return e.call(A,I)?A[I]=P(A[I],k,x):A[I]=k,A},M)},s=function(f,w){return Object.keys(w).reduce(function(x,M){return x[M]=w[M],x},f)},c=function(P,f,w){var x=P.replace(/\+/g," ");if(w==="iso-8859-1")return x.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(x)}catch{return x}},u=function(f,w,x,M,A){if(f.length===0)return f;var I=f;if(typeof f=="symbol"?I=Symbol.prototype.toString.call(f):typeof f!="string"&&(I=String(f)),x==="iso-8859-1")return escape(I).replace(/%u[0-9a-f]{4}/gi,function(ce){return"%26%23"+parseInt(ce.slice(2),16)+"%3B"});for(var k="",N=0;N<I.length;++N){var D=I.charCodeAt(N);if(D===45||D===46||D===95||D===126||D>=48&&D<=57||D>=65&&D<=90||D>=97&&D<=122||A===t.RFC1738&&(D===40||D===41)){k+=I.charAt(N);continue}if(D<128){k=k+n[D];continue}if(D<2048){k=k+(n[192|D>>6]+n[128|D&63]);continue}if(D<55296||D>=57344){k=k+(n[224|D>>12]+n[128|D>>6&63]+n[128|D&63]);continue}N+=1,D=65536+((D&1023)<<10|I.charCodeAt(N)&1023),k+=n[240|D>>18]+n[128|D>>12&63]+n[128|D>>6&63]+n[128|D&63]}return k},d=function(f){for(var w=[{obj:{o:f},prop:"o"}],x=[],M=0;M<w.length;++M)for(var A=w[M],I=A.obj[A.prop],k=Object.keys(I),N=0;N<k.length;++N){var D=k[N],ce=I[D];typeof ce=="object"&&ce!==null&&x.indexOf(ce)===-1&&(w.push({obj:I,prop:D}),x.push(ce))}return i(w),f},p=function(f){return Object.prototype.toString.call(f)==="[object RegExp]"},v=function(f){return!f||typeof f!="object"?!1:!!(f.constructor&&f.constructor.isBuffer&&f.constructor.isBuffer(f))},b=function(f,w){return[].concat(f,w)},O=function(f,w){if(r(f)){for(var x=[],M=0;M<f.length;M+=1)x.push(w(f[M]));return x}return w(f)};return Qi={arrayToObject:o,assign:s,combine:b,compact:d,decode:c,encode:u,isBuffer:v,isRegExp:p,maybeMap:O,merge:a},Qi}var Gi,us;function nd(){if(us)return Gi;us=1;var t=td(),e=rd(),r=fc(),n=Object.prototype.hasOwnProperty,i={brackets:function(f){return f+"[]"},comma:"comma",indices:function(f,w){return f+"["+w+"]"},repeat:function(f){return f}},o=Array.isArray,a=Array.prototype.push,s=function(P,f){a.apply(P,o(f)?f:[f])},c=Date.prototype.toISOString,u=r.default,d={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:e.encode,encodeValuesOnly:!1,format:u,formatter:r.formatters[u],indices:!1,serializeDate:function(f){return c.call(f)},skipNulls:!1,strictNullHandling:!1},p=function(f){return typeof f=="string"||typeof f=="number"||typeof f=="boolean"||typeof f=="symbol"||typeof f=="bigint"},v={},b=function P(f,w,x,M,A,I,k,N,D,ce,me,K,J,ae,Z,ue){for(var L=f,Ie=ue,fe=0,Ee=!1;(Ie=Ie.get(v))!==void 0&&!Ee;){var rt=Ie.get(f);if(fe+=1,typeof rt<"u"){if(rt===fe)throw new RangeError("Cyclic object value");Ee=!0}typeof Ie.get(v)>"u"&&(fe=0)}if(typeof N=="function"?L=N(w,L):L instanceof Date?L=me(L):x==="comma"&&o(L)&&(L=e.maybeMap(L,function(V){return V instanceof Date?me(V):V})),L===null){if(A)return k&&!ae?k(w,d.encoder,Z,"key",K):w;L=""}if(p(L)||e.isBuffer(L)){if(k){var ht=ae?w:k(w,d.encoder,Z,"key",K);return[J(ht)+"="+J(k(L,d.encoder,Z,"value",K))]}return[J(w)+"="+J(String(L))]}var Re=[];if(typeof L>"u")return Re;var he;if(x==="comma"&&o(L))ae&&k&&(L=e.maybeMap(L,k)),he=[{value:L.length>0?L.join(",")||null:void 0}];else if(o(N))he=N;else{var Ve=Object.keys(L);he=D?Ve.sort(D):Ve}for(var nt=M&&o(L)&&L.length===1?w+"[]":w,ne=0;ne<he.length;++ne){var ee=he[ne],gt=typeof ee=="object"&&typeof ee.value<"u"?ee.value:L[ee];if(!(I&&gt===null)){var le=o(L)?typeof x=="function"?x(nt,ee):nt:nt+(ce?"."+ee:"["+ee+"]");ue.set(f,fe);var q=t();q.set(v,ue),s(Re,P(gt,le,x,M,A,I,x==="comma"&&ae&&o(L)?null:k,N,D,ce,me,K,J,ae,Z,q))}}return Re},O=function(f){if(!f)return d;if(f.encoder!==null&&typeof f.encoder<"u"&&typeof f.encoder!="function")throw new TypeError("Encoder has to be a function.");var w=f.charset||d.charset;if(typeof f.charset<"u"&&f.charset!=="utf-8"&&f.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var x=r.default;if(typeof f.format<"u"){if(!n.call(r.formatters,f.format))throw new TypeError("Unknown format option provided.");x=f.format}var M=r.formatters[x],A=d.filter;return(typeof f.filter=="function"||o(f.filter))&&(A=f.filter),{addQueryPrefix:typeof f.addQueryPrefix=="boolean"?f.addQueryPrefix:d.addQueryPrefix,allowDots:typeof f.allowDots>"u"?d.allowDots:!!f.allowDots,charset:w,charsetSentinel:typeof f.charsetSentinel=="boolean"?f.charsetSentinel:d.charsetSentinel,delimiter:typeof f.delimiter>"u"?d.delimiter:f.delimiter,encode:typeof f.encode=="boolean"?f.encode:d.encode,encoder:typeof f.encoder=="function"?f.encoder:d.encoder,encodeValuesOnly:typeof f.encodeValuesOnly=="boolean"?f.encodeValuesOnly:d.encodeValuesOnly,filter:A,format:x,formatter:M,serializeDate:typeof f.serializeDate=="function"?f.serializeDate:d.serializeDate,skipNulls:typeof f.skipNulls=="boolean"?f.skipNulls:d.skipNulls,sort:typeof f.sort=="function"?f.sort:null,strictNullHandling:typeof f.strictNullHandling=="boolean"?f.strictNullHandling:d.strictNullHandling}};return Gi=function(P,f){var w=P,x=O(f),M,A;typeof x.filter=="function"?(A=x.filter,w=A("",w)):o(x.filter)&&(A=x.filter,M=A);var I=[];if(typeof w!="object"||w===null)return"";var k;f&&f.arrayFormat in i?k=f.arrayFormat:f&&"indices"in f?k=f.indices?"indices":"repeat":k="indices";var N=i[k];if(f&&"commaRoundTrip"in f&&typeof f.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var D=N==="comma"&&f&&f.commaRoundTrip;M||(M=Object.keys(w)),x.sort&&M.sort(x.sort);for(var ce=t(),me=0;me<M.length;++me){var K=M[me];x.skipNulls&&w[K]===null||s(I,b(w[K],K,N,D,x.strictNullHandling,x.skipNulls,x.encode?x.encoder:null,x.filter,x.sort,x.allowDots,x.serializeDate,x.format,x.formatter,x.encodeValuesOnly,x.charset,ce))}var J=I.join(x.delimiter),ae=x.addQueryPrefix===!0?"?":"";return x.charsetSentinel&&(x.charset==="iso-8859-1"?ae+="utf8=%26%2310003%3B&":ae+="utf8=%E2%9C%93&"),J.length>0?ae+J:""},Gi}var id=nd();const od=pl(id);let hc={storeIdentifier:"",environment:"prod"};function ad(t){hc=t}function sd(){return hc}const cd=t=>{switch(t){case"prod":case"preprod":return"https://static.rechargecdn.com";case"stage":case"prestage":return"https://static.stage.rechargecdn.com"}};class Jr{constructor(e,r){this.name="RechargeRequestError",this.message=e,this.status=r}}function ud(t){return od(t,{encode:!1,indices:!1,arrayFormat:"comma"})}async function ld(t,e,r={}){const n=sd();return dd(t,`${cd(n.environment)}/store/${n.storeIdentifier}${e}`,r)}async function dd(t,e,{id:r,query:n,data:i,headers:o}={}){let a=e.trim();if(r&&(a=[a,`${r}`.trim()].join("/")),n){let p;[a,p]=a.split("?");const v=[p,ud(n)].join("&").replace(/^&/,"");a=`${a}${v?`?${v}`:""}`}let s;const c={Accept:"application/json","Content-Type":"application/json","X-Recharge-App":"storefront-client",...o||{}},u=await fetch(a,{method:t,headers:c,body:s});let d;try{d=await u.json()}catch{}if(!u.ok)throw u.status===502||u.status===504?new Jr("A gateway error occurred while making the request",u.status):d&&d.error?new Jr(d.error,u.status):d&&d.errors?new Jr(JSON.stringify(d.errors),u.status):new Jr("A connection error occurred while making the request");return d}var Yi,ls;function pd(){if(ls)return Yi;ls=1;var t=200,e="__lodash_hash_undefined__",r=9007199254740991,n="[object Arguments]",i="[object Function]",o="[object GeneratorFunction]",a="[object Symbol]",s=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,u=/^(?:0|[1-9]\d*)$/,d=typeof tr=="object"&&tr&&tr.Object===Object&&tr,p=typeof self=="object"&&self&&self.Object===Object&&self,v=d||p||Function("return this")();function b(l,y,S){switch(S.length){case 0:return l.call(y);case 1:return l.call(y,S[0]);case 2:return l.call(y,S[0],S[1]);case 3:return l.call(y,S[0],S[1],S[2])}return l.apply(y,S)}function O(l,y){var S=l?l.length:0;return!!S&&x(l,y,0)>-1}function P(l,y){for(var S=-1,T=l?l.length:0,z=Array(T);++S<T;)z[S]=y(l[S],S,l);return z}function f(l,y){for(var S=-1,T=y.length,z=l.length;++S<T;)l[z+S]=y[S];return l}function w(l,y,S,T){for(var z=l.length,re=S+-1;++re<z;)if(y(l[re],re,l))return re;return-1}function x(l,y,S){if(y!==y)return w(l,M,S);for(var T=S-1,z=l.length;++T<z;)if(l[T]===y)return T;return-1}function M(l){return l!==l}function A(l,y){for(var S=-1,T=Array(l);++S<l;)T[S]=y(S);return T}function I(l,y){return l.has(y)}function k(l,y){return l==null?void 0:l[y]}function N(l){var y=!1;if(l!=null&&typeof l.toString!="function")try{y=!!(l+"")}catch{}return y}function D(l,y){return function(S){return l(y(S))}}var ce=Array.prototype,me=Function.prototype,K=Object.prototype,J=v["__core-js_shared__"],ae=(function(){var l=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||"");return l?"Symbol(src)_1."+l:""})(),Z=me.toString,ue=K.hasOwnProperty,L=K.toString,Ie=RegExp("^"+Z.call(ue).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),fe=v.Symbol,Ee=D(Object.getPrototypeOf,Object),rt=K.propertyIsEnumerable,ht=ce.splice,Re=fe?fe.isConcatSpreadable:void 0,he=Object.getOwnPropertySymbols,Ve=Math.max,nt=F(v,"Map"),ne=F(Object,"create");function ee(l){var y=-1,S=l?l.length:0;for(this.clear();++y<S;){var T=l[y];this.set(T[0],T[1])}}function gt(){this.__data__=ne?ne(null):{}}function le(l){return this.has(l)&&delete this.__data__[l]}function q(l){var y=this.__data__;if(ne){var S=y[l];return S===e?void 0:S}return ue.call(y,l)?y[l]:void 0}function V(l){var y=this.__data__;return ne?y[l]!==void 0:ue.call(y,l)}function W(l,y){var S=this.__data__;return S[l]=ne&&y===void 0?e:y,this}ee.prototype.clear=gt,ee.prototype.delete=le,ee.prototype.get=q,ee.prototype.has=V,ee.prototype.set=W;function Q(l){var y=-1,S=l?l.length:0;for(this.clear();++y<S;){var T=l[y];this.set(T[0],T[1])}}function be(){this.__data__=[]}function We(l){var y=this.__data__,S=Ge(y,l);if(S<0)return!1;var T=y.length-1;return S==T?y.pop():ht.call(y,S,1),!0}function se(l){var y=this.__data__,S=Ge(y,l);return S<0?void 0:y[S][1]}function ge(l){return Ge(this.__data__,l)>-1}function xe(l,y){var S=this.__data__,T=Ge(S,l);return T<0?S.push([l,y]):S[T][1]=y,this}Q.prototype.clear=be,Q.prototype.delete=We,Q.prototype.get=se,Q.prototype.has=ge,Q.prototype.set=xe;function Ce(l){var y=-1,S=l?l.length:0;for(this.clear();++y<S;){var T=l[y];this.set(T[0],T[1])}}function Qe(){this.__data__={hash:new ee,map:new(nt||Q),string:new ee}}function $e(l){return j(this,l).delete(l)}function yt(l){return j(this,l).get(l)}function _t(l){return j(this,l).has(l)}function vt(l,y){return j(this,l).set(l,y),this}Ce.prototype.clear=Qe,Ce.prototype.delete=$e,Ce.prototype.get=yt,Ce.prototype.has=_t,Ce.prototype.set=vt;function Ht(l){var y=-1,S=l?l.length:0;for(this.__data__=new Ce;++y<S;)this.add(l[y])}function jn(l){return this.__data__.set(l,e),this}function qr(l){return this.__data__.has(l)}Ht.prototype.add=Ht.prototype.push=jn,Ht.prototype.has=qr;function qn(l,y){var S=Dt(l)||bt(l)?A(l.length,String):[],T=S.length,z=!!T;for(var re in l)z&&(re=="length"||we(re,T))||S.push(re);return S}function Ge(l,y){for(var S=l.length;S--;)if(Hr(l[S][0],y))return S;return-1}function ur(l,y,S,T){var z=-1,re=O,Le=!0,ot=l.length,Yr=[],au=y.length;if(!ot)return Yr;y.length>=t&&(re=I,Le=!1,y=new Ht(y));e:for(;++z<ot;){var Yt=l[z],Kr=Yt;if(Yt=Yt!==0?Yt:0,Le&&Kr===Kr){for(var ta=au;ta--;)if(y[ta]===Kr)continue e;Yr.push(Yt)}else re(y,Kr,T)||Yr.push(Yt)}return Yr}function Ur(l,y,S,T,z){var re=-1,Le=l.length;for(S||(S=it),z||(z=[]);++re<Le;){var ot=l[re];S(ot)?f(z,ot):z[z.length]=ot}return z}function Un(l,y,S){var T=y(l);return Dt(l)?T:f(T,S(l))}function Fn(l){if(!Qt(l)||dr(l))return!1;var y=Wt(l)||N(l)?Ie:c;return y.test(zr(l))}function lr(l){if(!Qt(l))return Te(l);var y=mt(l),S=[];for(var T in l)T=="constructor"&&(y||!ue.call(l,T))||S.push(T);return S}function Vt(l,y){return l=Object(l),h(l,y,function(S,T){return T in l})}function h(l,y,S){for(var T=-1,z=y.length,re={};++T<z;){var Le=y[T],ot=l[Le];S(ot,Le)&&(re[Le]=ot)}return re}function _(l,y){return y=Ve(y===void 0?l.length-1:y,0),function(){for(var S=arguments,T=-1,z=Ve(S.length-y,0),re=Array(z);++T<z;)re[T]=S[y+T];T=-1;for(var Le=Array(y+1);++T<y;)Le[T]=S[T];return Le[y]=re,b(l,this,Le)}}function B(l){return Un(l,fr,Ye)}function j(l,y){var S=l.__data__;return Ke(y)?S[typeof y=="string"?"string":"hash"]:S.map}function F(l,y){var S=k(l,y);return Fn(S)?S:void 0}var R=he?D(he,Object):Gr,Ye=he?function(l){for(var y=[];l;)f(y,R(l)),l=Ee(l);return y}:Gr;function it(l){return Dt(l)||bt(l)||!!(Re&&l&&l[Re])}function we(l,y){return y=y??r,!!y&&(typeof l=="number"||u.test(l))&&l>-1&&l%1==0&&l<y}function Ke(l){var y=typeof l;return y=="string"||y=="number"||y=="symbol"||y=="boolean"?l!=="__proto__":l===null}function dr(l){return!!ae&&ae in l}function mt(l){var y=l&&l.constructor,S=typeof y=="function"&&y.prototype||K;return l===S}function Te(l){var y=[];if(l!=null)for(var S in Object(l))y.push(S);return y}function Fr(l){if(typeof l=="string"||Wr(l))return l;var y=l+"";return y=="0"&&1/l==-1/0?"-0":y}function zr(l){if(l!=null){try{return Z.call(l)}catch{}try{return l+""}catch{}}return""}function Hr(l,y){return l===y||l!==l&&y!==y}function bt(l){return pr(l)&&ue.call(l,"callee")&&(!rt.call(l,"callee")||L.call(l)==n)}var Dt=Array.isArray;function At(l){return l!=null&&Vr(l.length)&&!Wt(l)}function pr(l){return Gt(l)&&At(l)}function Wt(l){var y=Qt(l)?L.call(l):"";return y==i||y==o}function Vr(l){return typeof l=="number"&&l>-1&&l%1==0&&l<=r}function Qt(l){var y=typeof l;return!!l&&(y=="object"||y=="function")}function Gt(l){return!!l&&typeof l=="object"}function Wr(l){return typeof l=="symbol"||Gt(l)&&L.call(l)==a}function fr(l){return At(l)?qn(l):lr(l)}var Qr=_(function(l,y){return l==null?{}:(y=P(Ur(y),Fr),Vt(l,ur(B(l),y)))});function Gr(){return[]}return Yi=Qr,Yi}pd();function fd(t){var r;const e=((r=t.subscription_options)==null?void 0:r.storefront_purchase_options)==="subscription_only";return{...t,is_subscription_only:e,isSubscriptionOnly:e}}const br=new Map;function hd(t,e){return br.has(t)||br.set(t,e()),br.get(t)}async function gc(t,e){if(t===void 0||t==="")throw new Error("ID is required");const r=(e==null?void 0:e.version)??"2020-12",{product:n}=await hd(`product.${t}.${r}`,()=>ld("get",`/product/${r}/${t}.json`));return r==="2020-12"?fd(n):n}async function gd(){return Array.from(br.keys()).forEach(t=>br.delete(t))}function yd(t){var r,n;if(t)return t;if((r=window==null?void 0:window.Shopify)!=null&&r.shop)return window.Shopify.shop;let e=window==null?void 0:window.domain;if(!e){const i=(n=location==null?void 0:location.href.match(/(?:http[s]*:\/\/)*(.*?)\.(?=admin\.rechargeapps\.com)/i))==null?void 0:n[1].replace(/-sp$/,"");i&&(e=`${i}.myshopify.com`)}if(e)return e;throw new Error("No storeIdentifier was passed into init.")}function yc(t={}){const e=t,{storefrontAccessToken:r}=t;if(r&&!r.startsWith("strfnt"))throw new Error("Incorrect storefront access token used. See https://storefront.rechargepayments.com/client/docs/getting_started/package_setup/#initialization-- for more information.");ad({storeIdentifier:yd(t.storeIdentifier),loginRetryFn:t.loginRetryFn,__unstable_twoFactorRetryFn:t.__unstable_twoFactorRetryFn,storefrontAccessToken:r,appName:t.appName,appVersion:t.appVersion,environment:e.environment?e.environment:"prod",environmentUri:e.environmentUri,customerHash:e.customerHash}),gd()}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ao=function(t,e){return ao=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)n.hasOwnProperty(i)&&(r[i]=n[i])},ao(t,e)};function Ir(t,e){ao(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var m=function(){return m=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},m.apply(this,arguments)};function Ut(t){var e=typeof Symbol=="function"&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ke(t,e){var r=typeof Symbol=="function"&&t[Symbol.iterator];if(!r)return t;var n=r.call(t),i,o=[],a;try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(s){a={error:s}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(a)throw a.error}}return o}function Oe(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(ke(arguments[e]));return t}var Et;(function(t){t.Fatal="fatal",t.Error="error",t.Warning="warning",t.Log="log",t.Info="info",t.Debug="debug",t.Critical="critical"})(Et||(Et={}));function _d(t){t.then(null,function(e){console.error(e)})}function vd(){return typeof __SENTRY_BROWSER_BUNDLE__<"u"&&!!__SENTRY_BROWSER_BUNDLE__}function Lo(){return!vd()&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]"}function md(t,e){return t.require(e)}var bd={};function pe(){return Lo()?global:typeof window<"u"?window:typeof self<"u"?self:bd}function Bo(t,e,r){var n=r||pe(),i=n.__SENTRY__=n.__SENTRY__||{},o=i[t]||(i[t]=e());return o}var _c=Object.prototype.toString;function jo(t){switch(_c.call(t)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return ar(t,Error)}}function Rr(t,e){return _c.call(t)==="[object "+e+"]"}function wd(t){return Rr(t,"ErrorEvent")}function ds(t){return Rr(t,"DOMError")}function xd(t){return Rr(t,"DOMException")}function so(t){return Rr(t,"String")}function vc(t){return t===null||typeof t!="object"&&typeof t!="function"}function ir(t){return Rr(t,"Object")}function Pn(t){return typeof Event<"u"&&ar(t,Event)}function Sd(t){return typeof Element<"u"&&ar(t,Element)}function qo(t){return!!(t&&t.then&&typeof t.then=="function")}function Od(t){return ir(t)&&"nativeEvent"in t&&"preventDefault"in t&&"stopPropagation"in t}function Pd(t){return typeof t=="number"&&t!==t}function ar(t,e){try{return t instanceof e}catch{return!1}}function co(t,e){try{for(var r=t,n=5,i=80,o=[],a=0,s=0,c=" > ",u=c.length,d=void 0;r&&a++<n&&(d=Md(r,e),!(d==="html"||a>1&&s+o.length*u+d.length>=i));)o.push(d),s+=d.length,r=r.parentNode;return o.reverse().join(c)}catch{return"<unknown>"}}function Md(t,e){var r=t,n=[],i,o,a,s,c;if(!r||!r.tagName)return"";n.push(r.tagName.toLowerCase());var u=e&&e.length?e.filter(function(p){return r.getAttribute(p)}).map(function(p){return[p,r.getAttribute(p)]}):null;if(u&&u.length)u.forEach(function(p){n.push("["+p[0]+'="'+p[1]+'"]')});else if(r.id&&n.push("#"+r.id),i=r.className,i&&so(i))for(o=i.split(/\s+/),c=0;c<o.length;c++)n.push("."+o[c]);var d=["type","name","title","alt"];for(c=0;c<d.length;c++)a=d[c],s=r.getAttribute(a),s&&n.push("["+a+'="'+s+'"]');return n.join("")}var Ed=Object.setPrototypeOf||({__proto__:[]}instanceof Array?Cd:$d);function Cd(t,e){return t.__proto__=e,t}function $d(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(t,r)||(t[r]=e[r]);return t}var ie=(function(t){Ir(e,t);function e(r){var n=this.constructor,i=t.call(this,r)||this;return i.message=r,i.name=n.prototype.constructor.name,Ed(i,n.prototype),i}return e})(Error),sr=typeof __SENTRY_DEBUG__>"u"?!0:__SENTRY_DEBUG__,Td=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;function Dd(t){return t==="http"||t==="https"}function Lr(t,e){e===void 0&&(e=!1);var r=t.host,n=t.path,i=t.pass,o=t.port,a=t.projectId,s=t.protocol,c=t.publicKey;return s+"://"+c+(e&&i?":"+i:"")+("@"+r+(o?":"+o:"")+"/"+(n&&n+"/")+a)}function Ad(t){var e=Td.exec(t);if(!e)throw new ie("Invalid Sentry Dsn: "+t);var r=ke(e.slice(1),6),n=r[0],i=r[1],o=r[2],a=o===void 0?"":o,s=r[3],c=r[4],u=c===void 0?"":c,d=r[5],p="",v=d,b=v.split("/");if(b.length>1&&(p=b.slice(0,-1).join("/"),v=b.pop()),v){var O=v.match(/^\d+/);O&&(v=O[0])}return mc({host:s,pass:a,path:p,projectId:v,port:u,protocol:n,publicKey:i})}function mc(t){return"user"in t&&!("publicKey"in t)&&(t.publicKey=t.user),{user:t.publicKey||"",protocol:t.protocol,publicKey:t.publicKey||"",pass:t.pass||"",host:t.host,port:t.port||"",path:t.path||"",projectId:t.projectId}}function kd(t){if(sr){var e=t.port,r=t.projectId,n=t.protocol,i=["protocol","publicKey","host","projectId"];if(i.forEach(function(o){if(!t[o])throw new ie("Invalid Sentry Dsn: "+o+" missing")}),!r.match(/^\d+$/))throw new ie("Invalid Sentry Dsn: Invalid projectId "+r);if(!Dd(n))throw new ie("Invalid Sentry Dsn: Invalid protocol "+n);if(e&&isNaN(parseInt(e,10)))throw new ie("Invalid Sentry Dsn: Invalid port "+e);return!0}}function Uo(t){var e=typeof t=="string"?Ad(t):mc(t);return kd(e),e}var Nd=["fatal","error","warning","log","info","debug","critical"],Id=pe(),Rd="Sentry Logger ",dn=["debug","info","warn","error","log","assert"];function bc(t){var e=pe();if(!("console"in e))return t();var r=e.console,n={};dn.forEach(function(i){var o=r[i]&&r[i].__sentry_original__;i in e.console&&o&&(n[i]=r[i],r[i]=o)});try{return t()}finally{Object.keys(n).forEach(function(i){r[i]=n[i]})}}function ps(){var t=!1,e={enable:function(){t=!0},disable:function(){t=!1}};return sr?dn.forEach(function(r){e[r]=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];t&&bc(function(){var o;(o=Id.console)[r].apply(o,Oe([Rd+"["+r+"]:"],n))})}}):dn.forEach(function(r){e[r]=function(){}}),e}var U;sr?U=Bo("logger",ps):U=ps();function wr(t,e){return e===void 0&&(e=0),typeof t!="string"||e===0||t.length<=e?t:t.substr(0,e)+"..."}function fs(t,e){if(!Array.isArray(t))return"";for(var r=[],n=0;n<t.length;n++){var i=t[n];try{r.push(String(i))}catch{r.push("[value cannot be serialized]")}}return r.join(e)}function ut(t,e,r){if(e in t){var n=t[e],i=r(n);if(typeof i=="function")try{Ld(i,n)}catch{}t[e]=i}}function Fo(t,e,r){Object.defineProperty(t,e,{value:r,writable:!0,configurable:!0})}function Ld(t,e){var r=e.prototype||{};t.prototype=e.prototype=r,Fo(t,"__sentry_original__",e)}function Bd(t){return Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}function wc(t){var e=t;if(jo(t))e=m({message:t.message,name:t.name,stack:t.stack},gs(t));else if(Pn(t)){var r=t;e=m({type:r.type,target:hs(r.target),currentTarget:hs(r.currentTarget)},gs(r)),typeof CustomEvent<"u"&&ar(t,CustomEvent)&&(e.detail=r.detail)}return e}function hs(t){try{return Sd(t)?co(t):Object.prototype.toString.call(t)}catch{return"<unknown>"}}function gs(t){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function jd(t,e){e===void 0&&(e=40);var r=Object.keys(wc(t));if(r.sort(),!r.length)return"[object has no keys]";if(r[0].length>=e)return wr(r[0],e);for(var n=r.length;n>0;n--){var i=r.slice(0,n).join(", ");if(!(i.length>e))return n===r.length?i:wr(i,e)}return""}function uo(t){var e,r;if(ir(t)){var n={};try{for(var i=Ut(Object.keys(t)),o=i.next();!o.done;o=i.next()){var a=o.value;typeof t[a]<"u"&&(n[a]=uo(t[a]))}}catch(s){e={error:s}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}return n}return Array.isArray(t)?t.map(uo):t}var qd=50;function Ud(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=t.sort(function(n,i){return n[0]-i[0]}).map(function(n){return n[1]});return function(n,i){var o,a,s,c;i===void 0&&(i=0);var u=[];try{for(var d=Ut(n.split(`
`).slice(i)),p=d.next();!p.done;p=d.next()){var v=p.value;try{for(var b=(s=void 0,Ut(r)),O=b.next();!O.done;O=b.next()){var P=O.value,f=P(v);if(f){u.push(f);break}}}catch(w){s={error:w}}finally{try{O&&!O.done&&(c=b.return)&&c.call(b)}finally{if(s)throw s.error}}}}catch(w){o={error:w}}finally{try{p&&!p.done&&(a=d.return)&&a.call(d)}finally{if(o)throw o.error}}return Fd(u)}}function Fd(t){if(!t.length)return[];var e=t,r=e[0].function||"",n=e[e.length-1].function||"";return(r.indexOf("captureMessage")!==-1||r.indexOf("captureException")!==-1)&&(e=e.slice(1)),n.indexOf("sentryWrapped")!==-1&&(e=e.slice(0,-1)),e.slice(0,qd).map(function(i){return m(m({},i),{filename:i.filename||e[0].filename,function:i.function||"?"})}).reverse()}var Ki="<anonymous>";function xc(t){try{return!t||typeof t!="function"?Ki:t.name||Ki}catch{return Ki}}function Mn(){if(!("fetch"in pe()))return!1;try{return new Headers,new Request(""),new Response,!0}catch{return!1}}function lo(t){return t&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())}function zd(){if(!Mn())return!1;var t=pe();if(lo(t.fetch))return!0;var e=!1,r=t.document;if(r&&typeof r.createElement=="function")try{var n=r.createElement("iframe");n.hidden=!0,r.head.appendChild(n),n.contentWindow&&n.contentWindow.fetch&&(e=lo(n.contentWindow.fetch)),r.head.removeChild(n)}catch(i){sr&&U.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",i)}return e}function Hd(){if(!Mn())return!1;try{return new Request("_",{referrerPolicy:"origin"}),!0}catch{return!1}}function Vd(){var t=pe(),e=t.chrome,r=e&&e.app&&e.app.runtime,n="history"in t&&!!t.history.pushState&&!!t.history.replaceState;return!r&&n}var Y=pe(),xr={},ys={};function Wd(t){if(!ys[t])switch(ys[t]=!0,t){case"console":Qd();break;case"dom":rp();break;case"xhr":Jd();break;case"fetch":Gd();break;case"history":Zd();break;case"error":np();break;case"unhandledrejection":ip();break;default:sr&&U.warn("unknown instrumentation type:",t);return}}function gr(t,e){xr[t]=xr[t]||[],xr[t].push(e),Wd(t)}function ze(t,e){var r,n;if(!(!t||!xr[t]))try{for(var i=Ut(xr[t]||[]),o=i.next();!o.done;o=i.next()){var a=o.value;try{a(e)}catch(s){sr&&U.error(`Error while triggering instrumentation handler.
Type: `+t+`
Name: `+xc(a)+`
Error:`,s)}}}catch(s){r={error:s}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}}function Qd(){"console"in Y&&dn.forEach(function(t){t in Y.console&&ut(Y.console,t,function(e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];ze("console",{args:r,level:t}),e&&e.apply(Y.console,r)}})})}function Gd(){zd()&&ut(Y,"fetch",function(t){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n={args:e,fetchData:{method:Yd(e),url:Kd(e)},startTimestamp:Date.now()};return ze("fetch",m({},n)),t.apply(Y,e).then(function(i){return ze("fetch",m(m({},n),{endTimestamp:Date.now(),response:i})),i},function(i){throw ze("fetch",m(m({},n),{endTimestamp:Date.now(),error:i})),i})}})}function Yd(t){return t===void 0&&(t=[]),"Request"in Y&&ar(t[0],Request)&&t[0].method?String(t[0].method).toUpperCase():t[1]&&t[1].method?String(t[1].method).toUpperCase():"GET"}function Kd(t){return t===void 0&&(t=[]),typeof t[0]=="string"?t[0]:"Request"in Y&&ar(t[0],Request)?t[0].url:String(t[0])}function Jd(){if("XMLHttpRequest"in Y){var t=XMLHttpRequest.prototype;ut(t,"open",function(e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=this,o=r[1],a=i.__sentry_xhr__={method:so(r[0])?r[0].toUpperCase():r[0],url:r[1]};so(o)&&a.method==="POST"&&o.match(/sentry_key/)&&(i.__sentry_own_request__=!0);var s=function(){if(i.readyState===4){try{a.status_code=i.status}catch{}ze("xhr",{args:r,endTimestamp:Date.now(),startTimestamp:Date.now(),xhr:i})}};return"onreadystatechange"in i&&typeof i.onreadystatechange=="function"?ut(i,"onreadystatechange",function(c){return function(){for(var u=[],d=0;d<arguments.length;d++)u[d]=arguments[d];return s(),c.apply(i,u)}}):i.addEventListener("readystatechange",s),e.apply(i,r)}}),ut(t,"send",function(e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return this.__sentry_xhr__&&r[0]!==void 0&&(this.__sentry_xhr__.body=r[0]),ze("xhr",{args:r,startTimestamp:Date.now(),xhr:this}),e.apply(this,r)}})}}var Zr;function Zd(){if(!Vd())return;var t=Y.onpopstate;Y.onpopstate=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=Y.location.href,o=Zr;if(Zr=i,ze("history",{from:o,to:i}),t)try{return t.apply(this,r)}catch{}};function e(r){return function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var o=n.length>2?n[2]:void 0;if(o){var a=Zr,s=String(o);Zr=s,ze("history",{from:a,to:s})}return r.apply(this,n)}}ut(Y.history,"pushState",e),ut(Y.history,"replaceState",e)}var Xd=1e3,Xr,en;function ep(t,e){if(!t||t.type!==e.type)return!0;try{if(t.target!==e.target)return!0}catch{}return!1}function tp(t){if(t.type!=="keypress")return!1;try{var e=t.target;if(!e||!e.tagName)return!0;if(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)return!1}catch{}return!0}function _s(t,e){return e===void 0&&(e=!1),function(r){if(!(!r||en===r)&&!tp(r)){var n=r.type==="keypress"?"input":r.type;Xr===void 0?(t({event:r,name:n,global:e}),en=r):ep(en,r)&&(t({event:r,name:n,global:e}),en=r),clearTimeout(Xr),Xr=Y.setTimeout(function(){Xr=void 0},Xd)}}}function rp(){if("document"in Y){var t=ze.bind(null,"dom"),e=_s(t,!0);Y.document.addEventListener("click",e,!1),Y.document.addEventListener("keypress",e,!1),["EventTarget","Node"].forEach(function(r){var n=Y[r]&&Y[r].prototype;!n||!n.hasOwnProperty||!n.hasOwnProperty("addEventListener")||(ut(n,"addEventListener",function(i){return function(o,a,s){if(o==="click"||o=="keypress")try{var c=this,u=c.__sentry_instrumentation_handlers__=c.__sentry_instrumentation_handlers__||{},d=u[o]=u[o]||{refCount:0};if(!d.handler){var p=_s(t);d.handler=p,i.call(this,o,p,s)}d.refCount+=1}catch{}return i.call(this,o,a,s)}}),ut(n,"removeEventListener",function(i){return function(o,a,s){if(o==="click"||o=="keypress")try{var c=this,u=c.__sentry_instrumentation_handlers__||{},d=u[o];d&&(d.refCount-=1,d.refCount<=0&&(i.call(this,o,d.handler,s),d.handler=void 0,delete u[o]),Object.keys(u).length===0&&delete c.__sentry_instrumentation_handlers__)}catch{}return i.call(this,o,a,s)}}))})}}var Ji=null;function np(){Ji=Y.onerror,Y.onerror=function(t,e,r,n,i){return ze("error",{column:n,error:i,line:r,msg:t,url:e}),Ji?Ji.apply(this,arguments):!1}}var Zi=null;function ip(){Zi=Y.onunhandledrejection,Y.onunhandledrejection=function(t){return ze("unhandledrejection",t),Zi?Zi.apply(this,arguments):!0}}function op(){var t=typeof WeakSet=="function",e=t?new WeakSet:[];function r(i){if(t)return e.has(i)?!0:(e.add(i),!1);for(var o=0;o<e.length;o++){var a=e[o];if(a===i)return!0}return e.push(i),!1}function n(i){if(t)e.delete(i);else for(var o=0;o<e.length;o++)if(e[o]===i){e.splice(o,1);break}}return[r,n]}function rr(){var t=pe(),e=t.crypto||t.msCrypto;if(e!==void 0&&e.getRandomValues){var r=new Uint16Array(8);e.getRandomValues(r),r[3]=r[3]&4095|16384,r[4]=r[4]&16383|32768;var n=function(i){for(var o=i.toString(16);o.length<4;)o="0"+o;return o};return n(r[0])+n(r[1])+n(r[2])+n(r[3])+n(r[4])+n(r[5])+n(r[6])+n(r[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(i){var o=Math.random()*16|0,a=i==="x"?o:o&3|8;return a.toString(16)})}function Xi(t){if(!t)return{};var e=t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!e)return{};var r=e[6]||"",n=e[8]||"";return{host:e[4],path:e[5],protocol:e[2],relative:e[5]+r+n}}function Sc(t){return t.exception&&t.exception.values?t.exception.values[0]:void 0}function ap(t){var e=t.message,r=t.event_id;if(e)return e;var n=Sc(t);return n?n.type&&n.value?n.type+": "+n.value:n.type||n.value||r||"<unknown>":r||"<unknown>"}function vs(t,e,r){var n=t.exception=t.exception||{},i=n.values=n.values||[],o=i[0]=i[0]||{};o.value||(o.value=e||""),o.type||(o.type="Error")}function po(t,e){var r=Sc(t);if(r){var n={type:"generic",handled:!0},i=r.mechanism;if(r.mechanism=m(m(m({},n),i),e),e&&"data"in e){var o=m(m({},i&&i.data),e.data);r.mechanism.data=o}}}function ms(t){if(t&&t.__sentry_captured__)return!0;try{Fo(t,"__sentry_captured__",!0)}catch{}return!1}function It(t,e,r){e===void 0&&(e=1/0),r===void 0&&(r=1/0);try{return Pc("",t,e,r)}catch(n){return{ERROR:"**non-serializable** ("+n+")"}}}function Oc(t,e,r){e===void 0&&(e=3),r===void 0&&(r=100*1024);var n=It(t,e);return up(n)>r?Oc(t,e-1,r):n}function Pc(t,e,r,n,i){r===void 0&&(r=1/0),n===void 0&&(n=1/0),i===void 0&&(i=op());var o=ke(i,2),a=o[0],s=o[1],c=e;if(c&&typeof c.toJSON=="function")try{return c.toJSON()}catch{}if(e===null||["number","boolean","string"].includes(typeof e)&&!Pd(e))return e;var u=sp(t,e);if(!u.startsWith("[object "))return u;if(r===0)return u.replace("object ","");if(a(e))return"[Circular ~]";var d=Array.isArray(e)?[]:{},p=0,v=jo(e)||Pn(e)?wc(e):e;for(var b in v)if(Object.prototype.hasOwnProperty.call(v,b)){if(p>=n){d[b]="[MaxProperties ~]";break}var O=v[b];d[b]=Pc(b,O,r-1,n,i),p+=1}return s(e),d}function sp(t,e){try{return t==="domain"&&e&&typeof e=="object"&&e._events?"[Domain]":t==="domainEmitter"?"[DomainEmitter]":typeof global<"u"&&e===global?"[Global]":typeof window<"u"&&e===window?"[Window]":typeof document<"u"&&e===document?"[Document]":Od(e)?"[SyntheticEvent]":typeof e=="number"&&e!==e?"[NaN]":e===void 0?"[undefined]":typeof e=="function"?"[Function: "+xc(e)+"]":typeof e=="symbol"?"["+String(e)+"]":typeof e=="bigint"?"[BigInt: "+String(e)+"]":"[object "+Object.getPrototypeOf(e).constructor.name+"]"}catch(r){return"**non-serializable** ("+r+")"}}function cp(t){return~-encodeURI(t).split(/%..|./).length}function up(t){return cp(JSON.stringify(t))}function Ft(t){return new Tt(function(e){e(t)})}function Cr(t){return new Tt(function(e,r){r(t)})}var Tt=(function(){function t(e){var r=this;this._state=0,this._handlers=[],this._resolve=function(n){r._setResult(1,n)},this._reject=function(n){r._setResult(2,n)},this._setResult=function(n,i){if(r._state===0){if(qo(i)){i.then(r._resolve,r._reject);return}r._state=n,r._value=i,r._executeHandlers()}},this._executeHandlers=function(){if(r._state!==0){var n=r._handlers.slice();r._handlers=[],n.forEach(function(i){i[0]||(r._state===1&&i[1](r._value),r._state===2&&i[2](r._value),i[0]=!0)})}};try{e(this._resolve,this._reject)}catch(n){this._reject(n)}}return t.prototype.then=function(e,r){var n=this;return new t(function(i,o){n._handlers.push([!1,function(a){if(!e)i(a);else try{i(e(a))}catch(s){o(s)}},function(a){if(!r)o(a);else try{i(r(a))}catch(s){o(s)}}]),n._executeHandlers()})},t.prototype.catch=function(e){return this.then(function(r){return r},e)},t.prototype.finally=function(e){var r=this;return new t(function(n,i){var o,a;return r.then(function(s){a=!1,o=s,e&&e()},function(s){a=!0,o=s,e&&e()}).then(function(){if(a){i(o);return}n(o)})})},t})();function Mc(t){var e=[];function r(){return t===void 0||e.length<t}function n(a){return e.splice(e.indexOf(a),1)[0]}function i(a){if(!r())return Cr(new ie("Not adding Promise due to buffer limit reached."));var s=a();return e.indexOf(s)===-1&&e.push(s),s.then(function(){return n(s)}).then(null,function(){return n(s).then(null,function(){})}),s}function o(a){return new Tt(function(s,c){var u=e.length;if(!u)return s(!0);var d=setTimeout(function(){a&&a>0&&s(!1)},a);e.forEach(function(p){Ft(p).then(function(){--u||(clearTimeout(d),s(!0))},c)})})}return{$:e,add:i,drain:o}}function lp(t){return Nd.indexOf(t)!==-1}function dp(t){return t==="warn"?Et.Warning:lp(t)?t:Et.Log}function Ec(t){return t>=200&&t<300?"success":t===429?"rate_limit":t>=400&&t<500?"invalid":t>=500?"failed":"unknown"}var fo={nowSeconds:function(){return Date.now()/1e3}};function pp(){var t=pe().performance;if(!(!t||!t.now)){var e=Date.now()-t.now();return{now:function(){return t.now()},timeOrigin:e}}}function fp(){try{var t=md(ou,"perf_hooks");return t.performance}catch{return}}var eo=Lo()?fp():pp(),bs=eo===void 0?fo:{nowSeconds:function(){return(eo.timeOrigin+eo.now())/1e3}},En=fo.nowSeconds.bind(fo),ws=bs.nowSeconds.bind(bs);(function(){var t=pe().performance;if(!(!t||!t.now)){var e=3600*1e3,r=t.now(),n=Date.now(),i=t.timeOrigin?Math.abs(t.timeOrigin+r-n):e,o=i<e,a=t.timing&&t.timing.navigationStart,s=typeof a=="number",c=s?Math.abs(a+r-n):e,u=c<e;return o||u?i<=c?t.timeOrigin:a:n}})();function Cn(t,e){return e===void 0&&(e=[]),[t,e]}function hp(t){var e=ke(t,2),r=ke(e[1],1),n=ke(r[0],1),i=n[0];return i.type}function $n(t){var e=ke(t,2),r=e[0],n=e[1],i=JSON.stringify(r);return n.reduce(function(o,a){var s=ke(a,2),c=s[0],u=s[1],d=vc(u)?String(u):JSON.stringify(u);return o+`
`+JSON.stringify(c)+`
`+d},i)}function gp(t,e,r){var n=[{type:"client_report"},{timestamp:En(),discarded_events:t}];return Cn(e?{dsn:e}:{},[n])}var yp=60*1e3;function _p(t,e){e===void 0&&(e=Date.now());var r=parseInt(""+t,10);if(!isNaN(r))return r*1e3;var n=Date.parse(""+t);return isNaN(n)?yp:n-e}function zo(t,e){return t[e]||t.all||0}function Cc(t,e,r){return r===void 0&&(r=Date.now()),zo(t,e)>r}function $c(t,e,r){var n,i,o,a;r===void 0&&(r=Date.now());var s=m({},t),c=e["x-sentry-rate-limits"],u=e["retry-after"];if(c)try{for(var d=Ut(c.trim().split(",")),p=d.next();!p.done;p=d.next()){var v=p.value,b=v.split(":",2),O=parseInt(b[0],10),P=(isNaN(O)?60:O)*1e3;if(!b[1])s.all=r+P;else try{for(var f=(o=void 0,Ut(b[1].split(";"))),w=f.next();!w.done;w=f.next()){var x=w.value;s[x]=r+P}}catch(M){o={error:M}}finally{try{w&&!w.done&&(a=f.return)&&a.call(f)}finally{if(o)throw o.error}}}}catch(M){n={error:M}}finally{try{p&&!p.done&&(i=d.return)&&i.call(d)}finally{if(n)throw n.error}}else u&&(s.all=r+_p(u,r));return s}var xs=100,pn=(function(){function t(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={}}return t.clone=function(e){var r=new t;return e&&(r._breadcrumbs=Oe(e._breadcrumbs),r._tags=m({},e._tags),r._extra=m({},e._extra),r._contexts=m({},e._contexts),r._user=e._user,r._level=e._level,r._span=e._span,r._session=e._session,r._transactionName=e._transactionName,r._fingerprint=e._fingerprint,r._eventProcessors=Oe(e._eventProcessors),r._requestSession=e._requestSession),r},t.prototype.addScopeListener=function(e){this._scopeListeners.push(e)},t.prototype.addEventProcessor=function(e){return this._eventProcessors.push(e),this},t.prototype.setUser=function(e){return this._user=e||{},this._session&&this._session.update({user:e}),this._notifyScopeListeners(),this},t.prototype.getUser=function(){return this._user},t.prototype.getRequestSession=function(){return this._requestSession},t.prototype.setRequestSession=function(e){return this._requestSession=e,this},t.prototype.setTags=function(e){return this._tags=m(m({},this._tags),e),this._notifyScopeListeners(),this},t.prototype.setTag=function(e,r){var n;return this._tags=m(m({},this._tags),(n={},n[e]=r,n)),this._notifyScopeListeners(),this},t.prototype.setExtras=function(e){return this._extra=m(m({},this._extra),e),this._notifyScopeListeners(),this},t.prototype.setExtra=function(e,r){var n;return this._extra=m(m({},this._extra),(n={},n[e]=r,n)),this._notifyScopeListeners(),this},t.prototype.setFingerprint=function(e){return this._fingerprint=e,this._notifyScopeListeners(),this},t.prototype.setLevel=function(e){return this._level=e,this._notifyScopeListeners(),this},t.prototype.setTransactionName=function(e){return this._transactionName=e,this._notifyScopeListeners(),this},t.prototype.setTransaction=function(e){return this.setTransactionName(e)},t.prototype.setContext=function(e,r){var n;return r===null?delete this._contexts[e]:this._contexts=m(m({},this._contexts),(n={},n[e]=r,n)),this._notifyScopeListeners(),this},t.prototype.setSpan=function(e){return this._span=e,this._notifyScopeListeners(),this},t.prototype.getSpan=function(){return this._span},t.prototype.getTransaction=function(){var e=this.getSpan();return e&&e.transaction},t.prototype.setSession=function(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this},t.prototype.getSession=function(){return this._session},t.prototype.update=function(e){if(!e)return this;if(typeof e=="function"){var r=e(this);return r instanceof t?r:this}return e instanceof t?(this._tags=m(m({},this._tags),e._tags),this._extra=m(m({},this._extra),e._extra),this._contexts=m(m({},this._contexts),e._contexts),e._user&&Object.keys(e._user).length&&(this._user=e._user),e._level&&(this._level=e._level),e._fingerprint&&(this._fingerprint=e._fingerprint),e._requestSession&&(this._requestSession=e._requestSession)):ir(e)&&(e=e,this._tags=m(m({},this._tags),e.tags),this._extra=m(m({},this._extra),e.extra),this._contexts=m(m({},this._contexts),e.contexts),e.user&&(this._user=e.user),e.level&&(this._level=e.level),e.fingerprint&&(this._fingerprint=e.fingerprint),e.requestSession&&(this._requestSession=e.requestSession)),this},t.prototype.clear=function(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this},t.prototype.addBreadcrumb=function(e,r){var n=typeof r=="number"?Math.min(r,xs):xs;if(n<=0)return this;var i=m({timestamp:En()},e);return this._breadcrumbs=Oe(this._breadcrumbs,[i]).slice(-n),this._notifyScopeListeners(),this},t.prototype.clearBreadcrumbs=function(){return this._breadcrumbs=[],this._notifyScopeListeners(),this},t.prototype.applyToEvent=function(e,r){if(this._extra&&Object.keys(this._extra).length&&(e.extra=m(m({},this._extra),e.extra)),this._tags&&Object.keys(this._tags).length&&(e.tags=m(m({},this._tags),e.tags)),this._user&&Object.keys(this._user).length&&(e.user=m(m({},this._user),e.user)),this._contexts&&Object.keys(this._contexts).length&&(e.contexts=m(m({},this._contexts),e.contexts)),this._level&&(e.level=this._level),this._transactionName&&(e.transaction=this._transactionName),this._span){e.contexts=m({trace:this._span.getTraceContext()},e.contexts);var n=this._span.transaction&&this._span.transaction.name;n&&(e.tags=m({transaction:n},e.tags))}return this._applyFingerprint(e),e.breadcrumbs=Oe(e.breadcrumbs||[],this._breadcrumbs),e.breadcrumbs=e.breadcrumbs.length>0?e.breadcrumbs:void 0,e.sdkProcessingMetadata=this._sdkProcessingMetadata,this._notifyEventProcessors(Oe(Tc(),this._eventProcessors),e,r)},t.prototype.setSDKProcessingMetadata=function(e){return this._sdkProcessingMetadata=m(m({},this._sdkProcessingMetadata),e),this},t.prototype._notifyEventProcessors=function(e,r,n,i){var o=this;return i===void 0&&(i=0),new Tt(function(a,s){var c=e[i];if(r===null||typeof c!="function")a(r);else{var u=c(m({},r),n);qo(u)?u.then(function(d){return o._notifyEventProcessors(e,d,n,i+1).then(a)}).then(null,s):o._notifyEventProcessors(e,u,n,i+1).then(a).then(null,s)}})},t.prototype._notifyScopeListeners=function(){var e=this;this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(function(r){r(e)}),this._notifyingListeners=!1)},t.prototype._applyFingerprint=function(e){e.fingerprint=e.fingerprint?Array.isArray(e.fingerprint)?e.fingerprint:[e.fingerprint]:[],this._fingerprint&&(e.fingerprint=e.fingerprint.concat(this._fingerprint)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint},t})();function Tc(){return Bo("globalEventProcessors",function(){return[]})}function Dc(t){Tc().push(t)}var vp=(function(){function t(e){this.errors=0,this.sid=rr(),this.duration=0,this.status="ok",this.init=!0,this.ignoreDuration=!1;var r=ws();this.timestamp=r,this.started=r,e&&this.update(e)}return t.prototype.update=function(e){if(e===void 0&&(e={}),e.user&&(!this.ipAddress&&e.user.ip_address&&(this.ipAddress=e.user.ip_address),!this.did&&!e.did&&(this.did=e.user.id||e.user.email||e.user.username)),this.timestamp=e.timestamp||ws(),e.ignoreDuration&&(this.ignoreDuration=e.ignoreDuration),e.sid&&(this.sid=e.sid.length===32?e.sid:rr()),e.init!==void 0&&(this.init=e.init),!this.did&&e.did&&(this.did=""+e.did),typeof e.started=="number"&&(this.started=e.started),this.ignoreDuration)this.duration=void 0;else if(typeof e.duration=="number")this.duration=e.duration;else{var r=this.timestamp-this.started;this.duration=r>=0?r:0}e.release&&(this.release=e.release),e.environment&&(this.environment=e.environment),!this.ipAddress&&e.ipAddress&&(this.ipAddress=e.ipAddress),!this.userAgent&&e.userAgent&&(this.userAgent=e.userAgent),typeof e.errors=="number"&&(this.errors=e.errors),e.status&&(this.status=e.status)},t.prototype.close=function(e){e?this.update({status:e}):this.status==="ok"?this.update({status:"exited"}):this.update()},t.prototype.toJSON=function(){return uo({sid:""+this.sid,init:this.init,started:new Date(this.started*1e3).toISOString(),timestamp:new Date(this.timestamp*1e3).toISOString(),status:this.status,errors:this.errors,did:typeof this.did=="number"||typeof this.did=="string"?""+this.did:void 0,duration:this.duration,attrs:{release:this.release,environment:this.environment,ip_address:this.ipAddress,user_agent:this.userAgent}})},t})(),Ss=typeof __SENTRY_DEBUG__>"u"?!0:__SENTRY_DEBUG__,Ho=4,mp=100,Tn=(function(){function t(e,r,n){r===void 0&&(r=new pn),n===void 0&&(n=Ho),this._version=n,this._stack=[{}],this.getStackTop().scope=r,e&&this.bindClient(e)}return t.prototype.isOlderThan=function(e){return this._version<e},t.prototype.bindClient=function(e){var r=this.getStackTop();r.client=e,e&&e.setupIntegrations&&e.setupIntegrations()},t.prototype.pushScope=function(){var e=pn.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:e}),e},t.prototype.popScope=function(){return this.getStack().length<=1?!1:!!this.getStack().pop()},t.prototype.withScope=function(e){var r=this.pushScope();try{e(r)}finally{this.popScope()}},t.prototype.getClient=function(){return this.getStackTop().client},t.prototype.getScope=function(){return this.getStackTop().scope},t.prototype.getStack=function(){return this._stack},t.prototype.getStackTop=function(){return this._stack[this._stack.length-1]},t.prototype.captureException=function(e,r){var n=this._lastEventId=r&&r.event_id?r.event_id:rr(),i=r;if(!r){var o=void 0;try{throw new Error("Sentry syntheticException")}catch(a){o=a}i={originalException:e,syntheticException:o}}return this._invokeClient("captureException",e,m(m({},i),{event_id:n})),n},t.prototype.captureMessage=function(e,r,n){var i=this._lastEventId=n&&n.event_id?n.event_id:rr(),o=n;if(!n){var a=void 0;try{throw new Error(e)}catch(s){a=s}o={originalException:e,syntheticException:a}}return this._invokeClient("captureMessage",e,r,m(m({},o),{event_id:i})),i},t.prototype.captureEvent=function(e,r){var n=r&&r.event_id?r.event_id:rr();return e.type!=="transaction"&&(this._lastEventId=n),this._invokeClient("captureEvent",e,m(m({},r),{event_id:n})),n},t.prototype.lastEventId=function(){return this._lastEventId},t.prototype.addBreadcrumb=function(e,r){var n=this.getStackTop(),i=n.scope,o=n.client;if(!(!i||!o)){var a=o.getOptions&&o.getOptions()||{},s=a.beforeBreadcrumb,c=s===void 0?null:s,u=a.maxBreadcrumbs,d=u===void 0?mp:u;if(!(d<=0)){var p=En(),v=m({timestamp:p},e),b=c?bc(function(){return c(v,r)}):v;b!==null&&i.addBreadcrumb(b,d)}}},t.prototype.setUser=function(e){var r=this.getScope();r&&r.setUser(e)},t.prototype.setTags=function(e){var r=this.getScope();r&&r.setTags(e)},t.prototype.setExtras=function(e){var r=this.getScope();r&&r.setExtras(e)},t.prototype.setTag=function(e,r){var n=this.getScope();n&&n.setTag(e,r)},t.prototype.setExtra=function(e,r){var n=this.getScope();n&&n.setExtra(e,r)},t.prototype.setContext=function(e,r){var n=this.getScope();n&&n.setContext(e,r)},t.prototype.configureScope=function(e){var r=this.getStackTop(),n=r.scope,i=r.client;n&&i&&e(n)},t.prototype.run=function(e){var r=Os(this);try{e(this)}finally{Os(r)}},t.prototype.getIntegration=function(e){var r=this.getClient();if(!r)return null;try{return r.getIntegration(e)}catch{return Ss&&U.warn("Cannot retrieve integration "+e.id+" from the current Hub"),null}},t.prototype.startSpan=function(e){return this._callExtensionMethod("startSpan",e)},t.prototype.startTransaction=function(e,r){return this._callExtensionMethod("startTransaction",e,r)},t.prototype.traceHeaders=function(){return this._callExtensionMethod("traceHeaders")},t.prototype.captureSession=function(e){if(e===void 0&&(e=!1),e)return this.endSession();this._sendSessionUpdate()},t.prototype.endSession=function(){var e=this.getStackTop(),r=e&&e.scope,n=r&&r.getSession();n&&n.close(),this._sendSessionUpdate(),r&&r.setSession()},t.prototype.startSession=function(e){var r=this.getStackTop(),n=r.scope,i=r.client,o=i&&i.getOptions()||{},a=o.release,s=o.environment,c=pe(),u=(c.navigator||{}).userAgent,d=new vp(m(m(m({release:a,environment:s},n&&{user:n.getUser()}),u&&{userAgent:u}),e));if(n){var p=n.getSession&&n.getSession();p&&p.status==="ok"&&p.update({status:"exited"}),this.endSession(),n.setSession(d)}return d},t.prototype._sendSessionUpdate=function(){var e=this.getStackTop(),r=e.scope,n=e.client;if(r){var i=r.getSession&&r.getSession();i&&n&&n.captureSession&&n.captureSession(i)}},t.prototype._invokeClient=function(e){for(var r,n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var o=this.getStackTop(),a=o.scope,s=o.client;s&&s[e]&&(r=s)[e].apply(r,Oe(n,[a]))},t.prototype._callExtensionMethod=function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var i=Dn(),o=i.__SENTRY__;if(o&&o.extensions&&typeof o.extensions[e]=="function")return o.extensions[e].apply(this,r);Ss&&U.warn("Extension method "+e+" couldn't be found, doing nothing.")},t})();function Dn(){var t=pe();return t.__SENTRY__=t.__SENTRY__||{extensions:{},hub:void 0},t}function Os(t){var e=Dn(),r=Pt(e);return Vo(e,t),r}function Ct(){var t=Dn();return(!Ac(t)||Pt(t).isOlderThan(Ho))&&Vo(t,new Tn),Lo()?bp(t):Pt(t)}function bp(t){try{var e=Dn().__SENTRY__,r=e&&e.extensions&&e.extensions.domain&&e.extensions.domain.active;if(!r)return Pt(t);if(!Ac(r)||Pt(r).isOlderThan(Ho)){var n=Pt(t).getStackTop();Vo(r,new Tn(n.client,pn.clone(n.scope)))}return Pt(r)}catch{return Pt(t)}}function Ac(t){return!!(t&&t.__SENTRY__&&t.__SENTRY__.hub)}function Pt(t){return Bo("hub",function(){return new Tn},t)}function Vo(t,e){if(!t)return!1;var r=t.__SENTRY__=t.__SENTRY__||{};return r.hub=e,!0}var wp="7";function fn(t,e,r){return{initDsn:t,metadata:e||{},dsn:Uo(t),tunnel:r}}function kc(t){var e=t.protocol?t.protocol+":":"",r=t.port?":"+t.port:"";return e+"//"+t.host+r+(t.path?"/"+t.path:"")+"/api/"}function Nc(t,e){return""+kc(t)+t.projectId+"/"+e+"/"}function Ic(t){return Bd({sentry_key:t.publicKey,sentry_version:wp})}function xp(t){return Nc(t,"store")}function Rc(t){return xp(t)+"?"+Ic(t)}function Sp(t){return Nc(t,"envelope")}function An(t,e){return e||Sp(t)+"?"+Ic(t)}function Op(t,e){var r=Uo(t),n=kc(r)+"embed/error-page/",i="dsn="+Lr(r);for(var o in e)if(o!=="dsn")if(o==="user"){if(!e.user)continue;e.user.name&&(i+="&name="+encodeURIComponent(e.user.name)),e.user.email&&(i+="&email="+encodeURIComponent(e.user.email))}else i+="&"+encodeURIComponent(o)+"="+encodeURIComponent(e[o]);return n+"?"+i}var Ae=typeof __SENTRY_DEBUG__>"u"?!0:__SENTRY_DEBUG__,Ps=[];function Ms(t){return t.reduce(function(e,r){return e.every(function(n){return r.name!==n.name})&&e.push(r),e},[])}function Pp(t){var e=t.defaultIntegrations&&Oe(t.defaultIntegrations)||[],r=t.integrations,n=Oe(Ms(e));Array.isArray(r)?n=Oe(n.filter(function(a){return r.every(function(s){return s.name!==a.name})}),Ms(r)):typeof r=="function"&&(n=r(n),n=Array.isArray(n)?n:[n]);var i=n.map(function(a){return a.name}),o="Debug";return i.indexOf(o)!==-1&&n.push.apply(n,Oe(n.splice(i.indexOf(o),1))),n}function Mp(t){Ps.indexOf(t.name)===-1&&(t.setupOnce(Dc,Ct),Ps.push(t.name),Ae&&U.log("Integration installed: "+t.name))}function Ep(t){var e={};return Pp(t).forEach(function(r){e[r.name]=r,Mp(r)}),Fo(e,"initialized",!0),e}var Es="Not capturing exception because it's already been captured.",Cp=(function(){function t(e,r){this._integrations={},this._numProcessing=0,this._backend=new e(r),this._options=r,r.dsn&&(this._dsn=Uo(r.dsn))}return t.prototype.captureException=function(e,r,n){var i=this;if(ms(e)){Ae&&U.log(Es);return}var o=r&&r.event_id;return this._process(this._getBackend().eventFromException(e,r).then(function(a){return i._captureEvent(a,r,n)}).then(function(a){o=a})),o},t.prototype.captureMessage=function(e,r,n,i){var o=this,a=n&&n.event_id,s=vc(e)?this._getBackend().eventFromMessage(String(e),r,n):this._getBackend().eventFromException(e,n);return this._process(s.then(function(c){return o._captureEvent(c,n,i)}).then(function(c){a=c})),a},t.prototype.captureEvent=function(e,r,n){if(r&&r.originalException&&ms(r.originalException)){Ae&&U.log(Es);return}var i=r&&r.event_id;return this._process(this._captureEvent(e,r,n).then(function(o){i=o})),i},t.prototype.captureSession=function(e){if(!this._isEnabled()){Ae&&U.warn("SDK not enabled, will not capture session.");return}typeof e.release!="string"?Ae&&U.warn("Discarded session because of missing or non-string release"):(this._sendSession(e),e.update({init:!1}))},t.prototype.getDsn=function(){return this._dsn},t.prototype.getOptions=function(){return this._options},t.prototype.getTransport=function(){return this._getBackend().getTransport()},t.prototype.flush=function(e){var r=this;return this._isClientDoneProcessing(e).then(function(n){return r.getTransport().close(e).then(function(i){return n&&i})})},t.prototype.close=function(e){var r=this;return this.flush(e).then(function(n){return r.getOptions().enabled=!1,n})},t.prototype.setupIntegrations=function(){this._isEnabled()&&!this._integrations.initialized&&(this._integrations=Ep(this._options))},t.prototype.getIntegration=function(e){try{return this._integrations[e.id]||null}catch{return Ae&&U.warn("Cannot retrieve integration "+e.id+" from the current Client"),null}},t.prototype._updateSessionFromEvent=function(e,r){var n,i,o=!1,a=!1,s=r.exception&&r.exception.values;if(s){a=!0;try{for(var c=Ut(s),u=c.next();!u.done;u=c.next()){var d=u.value,p=d.mechanism;if(p&&p.handled===!1){o=!0;break}}}catch(O){n={error:O}}finally{try{u&&!u.done&&(i=c.return)&&i.call(c)}finally{if(n)throw n.error}}}var v=e.status==="ok",b=v&&e.errors===0||v&&o;b&&(e.update(m(m({},o&&{status:"crashed"}),{errors:e.errors||Number(a||o)})),this.captureSession(e))},t.prototype._sendSession=function(e){this._getBackend().sendSession(e)},t.prototype._isClientDoneProcessing=function(e){var r=this;return new Tt(function(n){var i=0,o=1,a=setInterval(function(){r._numProcessing==0?(clearInterval(a),n(!0)):(i+=o,e&&i>=e&&(clearInterval(a),n(!1)))},o)})},t.prototype._getBackend=function(){return this._backend},t.prototype._isEnabled=function(){return this.getOptions().enabled!==!1&&this._dsn!==void 0},t.prototype._prepareEvent=function(e,r,n){var i=this,o=this.getOptions(),a=o.normalizeDepth,s=a===void 0?3:a,c=o.normalizeMaxBreadth,u=c===void 0?1e3:c,d=m(m({},e),{event_id:e.event_id||(n&&n.event_id?n.event_id:rr()),timestamp:e.timestamp||En()});this._applyClientOptions(d),this._applyIntegrationsMetadata(d);var p=r;n&&n.captureContext&&(p=pn.clone(p).update(n.captureContext));var v=Ft(d);return p&&(v=p.applyToEvent(d,n)),v.then(function(b){return b&&(b.sdkProcessingMetadata=m(m({},b.sdkProcessingMetadata),{normalizeDepth:It(s)+" ("+typeof s+")"})),typeof s=="number"&&s>0?i._normalizeEvent(b,s,u):b})},t.prototype._normalizeEvent=function(e,r,n){if(!e)return null;var i=m(m(m(m(m({},e),e.breadcrumbs&&{breadcrumbs:e.breadcrumbs.map(function(o){return m(m({},o),o.data&&{data:It(o.data,r,n)})})}),e.user&&{user:It(e.user,r,n)}),e.contexts&&{contexts:It(e.contexts,r,n)}),e.extra&&{extra:It(e.extra,r,n)});return e.contexts&&e.contexts.trace&&(i.contexts.trace=e.contexts.trace),i.sdkProcessingMetadata=m(m({},i.sdkProcessingMetadata),{baseClientNormalized:!0}),i},t.prototype._applyClientOptions=function(e){var r=this.getOptions(),n=r.environment,i=r.release,o=r.dist,a=r.maxValueLength,s=a===void 0?250:a;"environment"in e||(e.environment="environment"in r?n:"production"),e.release===void 0&&i!==void 0&&(e.release=i),e.dist===void 0&&o!==void 0&&(e.dist=o),e.message&&(e.message=wr(e.message,s));var c=e.exception&&e.exception.values&&e.exception.values[0];c&&c.value&&(c.value=wr(c.value,s));var u=e.request;u&&u.url&&(u.url=wr(u.url,s))},t.prototype._applyIntegrationsMetadata=function(e){var r=Object.keys(this._integrations);r.length>0&&(e.sdk=e.sdk||{},e.sdk.integrations=Oe(e.sdk.integrations||[],r))},t.prototype._sendEvent=function(e){this._getBackend().sendEvent(e)},t.prototype._captureEvent=function(e,r,n){return this._processEvent(e,r,n).then(function(i){return i.event_id},function(i){Ae&&U.error(i)})},t.prototype._processEvent=function(e,r,n){var i=this,o=this.getOptions(),a=o.beforeSend,s=o.sampleRate,c=this.getTransport();function u(p,v){c.recordLostEvent&&c.recordLostEvent(p,v)}if(!this._isEnabled())return Cr(new ie("SDK not enabled, will not capture event."));var d=e.type==="transaction";return!d&&typeof s=="number"&&Math.random()>s?(u("sample_rate","event"),Cr(new ie("Discarding event because it's not included in the random sample (sampling rate = "+s+")"))):this._prepareEvent(e,n,r).then(function(p){if(p===null)throw u("event_processor",e.type||"event"),new ie("An event processor returned null, will not send event.");var v=r&&r.data&&r.data.__sentry__===!0;if(v||d||!a)return p;var b=a(p,r);return $p(b)}).then(function(p){if(p===null)throw u("before_send",e.type||"event"),new ie("`beforeSend` returned `null`, will not send event.");var v=n&&n.getSession&&n.getSession();return!d&&v&&i._updateSessionFromEvent(v,p),i._sendEvent(p),p}).then(null,function(p){throw p instanceof ie?p:(i.captureException(p,{data:{__sentry__:!0},originalException:p}),new ie(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: `+p))})},t.prototype._process=function(e){var r=this;this._numProcessing+=1,e.then(function(n){return r._numProcessing-=1,n},function(n){return r._numProcessing-=1,n})},t})();function $p(t){var e="`beforeSend` method has to return `null` or a valid event.";if(qo(t))return t.then(function(r){if(!(ir(r)||r===null))throw new ie(e);return r},function(r){throw new ie("beforeSend rejected with "+r)});if(!(ir(t)||t===null))throw new ie(e);return t}function Wo(t){if(!(!t.metadata||!t.metadata.sdk)){var e=t.metadata.sdk,r=e.name,n=e.version;return{name:r,version:n}}}function Lc(t,e){return e&&(t.sdk=t.sdk||{},t.sdk.name=t.sdk.name||e.name,t.sdk.version=t.sdk.version||e.version,t.sdk.integrations=Oe(t.sdk.integrations||[],e.integrations||[]),t.sdk.packages=Oe(t.sdk.packages||[],e.packages||[])),t}function Bc(t,e){var r=Wo(e),n=m(m({sent_at:new Date().toISOString()},r&&{sdk:r}),!!e.tunnel&&{dsn:Lr(e.dsn)}),i="aggregates"in t?"sessions":"session",o=[{type:i},t],a=Cn(n,[o]);return[a,i]}function Tp(t,e){var r=ke(Bc(t,e),2),n=r[0],i=r[1];return{body:$n(n),type:i,url:An(e.dsn,e.tunnel)}}function Dp(t,e){var r=Wo(e),n=t.type||"event",i=(t.sdkProcessingMetadata||{}).transactionSampling,o=i||{},a=o.method,s=o.rate;Lc(t,e.metadata.sdk),t.tags=t.tags||{},t.extra=t.extra||{},t.sdkProcessingMetadata&&t.sdkProcessingMetadata.baseClientNormalized||(t.tags.skippedNormalization=!0,t.extra.normalizeDepth=t.sdkProcessingMetadata?t.sdkProcessingMetadata.normalizeDepth:"unset"),delete t.sdkProcessingMetadata;var c=m(m({event_id:t.event_id,sent_at:new Date().toISOString()},r&&{sdk:r}),!!e.tunnel&&{dsn:Lr(e.dsn)}),u=[{type:n,sample_rates:[{id:a,rate:s}]},t];return Cn(c,[u])}function Ap(t,e){var r=Wo(e),n=t.type||"event",i=n==="transaction"||!!e.tunnel,o=(t.sdkProcessingMetadata||{}).transactionSampling,a=o||{},s=a.method,c=a.rate;Lc(t,e.metadata.sdk),t.tags=t.tags||{},t.extra=t.extra||{},t.sdkProcessingMetadata&&t.sdkProcessingMetadata.baseClientNormalized||(t.tags.skippedNormalization=!0,t.extra.normalizeDepth=t.sdkProcessingMetadata?t.sdkProcessingMetadata.normalizeDepth:"unset"),delete t.sdkProcessingMetadata;var u;try{u=JSON.stringify(t)}catch(P){t.tags.JSONStringifyError=!0,t.extra.JSONStringifyError=P;try{u=JSON.stringify(It(t))}catch(f){var d=f;u=JSON.stringify({message:"JSON.stringify error after renormalization",extra:{message:d.message,stack:d.stack}})}}var p={body:u,type:n,url:i?An(e.dsn,e.tunnel):Rc(e.dsn)};if(i){var v=m(m({event_id:t.event_id,sent_at:new Date().toISOString()},r&&{sdk:r}),!!e.tunnel&&{dsn:Lr(e.dsn)}),b=[{type:n,sample_rates:[{id:s,rate:c}]},p.body],O=Cn(v,[b]);p.body=$n(O)}return p}var kp=(function(){function t(){}return t.prototype.sendEvent=function(e){return Ft({reason:"NoopTransport: Event has been skipped because no Dsn is configured.",status:"skipped"})},t.prototype.close=function(e){return Ft(!0)},t})(),Np=(function(){function t(e){this._options=e,this._options.dsn||Ae&&U.warn("No DSN provided, backend will not do anything."),this._transport=this._setupTransport()}return t.prototype.eventFromException=function(e,r){throw new ie("Backend has to implement `eventFromException` method")},t.prototype.eventFromMessage=function(e,r,n){throw new ie("Backend has to implement `eventFromMessage` method")},t.prototype.sendEvent=function(e){if(this._newTransport&&this._options.dsn&&this._options._experiments&&this._options._experiments.newTransport){var r=fn(this._options.dsn,this._options._metadata,this._options.tunnel),n=Dp(e,r);this._newTransport.send(n).then(null,function(i){Ae&&U.error("Error while sending event:",i)})}else this._transport.sendEvent(e).then(null,function(i){Ae&&U.error("Error while sending event:",i)})},t.prototype.sendSession=function(e){if(!this._transport.sendSession){Ae&&U.warn("Dropping session because custom transport doesn't implement sendSession");return}if(this._newTransport&&this._options.dsn&&this._options._experiments&&this._options._experiments.newTransport){var r=fn(this._options.dsn,this._options._metadata,this._options.tunnel),n=ke(Bc(e,r),1),i=n[0];this._newTransport.send(i).then(null,function(o){Ae&&U.error("Error while sending session:",o)})}else this._transport.sendSession(e).then(null,function(o){Ae&&U.error("Error while sending session:",o)})},t.prototype.getTransport=function(){return this._transport},t.prototype._setupTransport=function(){return new kp},t})(),Ip=30;function jc(t,e,r){r===void 0&&(r=Mc(t.bufferSize||Ip));var n={},i=function(a){return r.drain(a)};function o(a){var s=hp(a),c=s==="event"?"error":s,u={category:c,body:$n(a)};if(Cc(n,c))return Cr({status:"rate_limit",reason:Cs(n,c)});var d=function(){return e(u).then(function(p){var v=p.body,b=p.headers,O=p.reason,P=p.statusCode,f=Ec(P);return b&&(n=$c(n,b)),f==="success"?Ft({status:f,reason:O}):Cr({status:f,reason:O||v||(f==="rate_limit"?Cs(n,c):"Unknown transport error")})})};return r.add(d)}return{send:o,flush:i}}function Cs(t,e){return"Too many "+e+" requests, backing off until: "+new Date(zo(t,e)).toISOString()}var $s="6.19.6",cr="?",Rp=10,Lp=20,Bp=30,jp=40,qp=50;function Br(t,e,r,n){var i={filename:t,function:e,in_app:!0};return r!==void 0&&(i.lineno=r),n!==void 0&&(i.colno=n),i}var Up=/^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,Fp=/\((\S*)(?::(\d+))(?::(\d+))\)/,zp=function(t){var e=Up.exec(t);if(e){var r=e[2]&&e[2].indexOf("eval")===0;if(r){var n=Fp.exec(e[2]);n&&(e[2]=n[1],e[3]=n[2],e[4]=n[3])}var i=ke(qc(e[1]||cr,e[2]),2),o=i[0],a=i[1];return Br(a,o,e[3]?+e[3]:void 0,e[4]?+e[4]:void 0)}},Hp=[Bp,zp],Vp=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,Wp=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,Qp=function(t){var e,r=Vp.exec(t);if(r){var n=r[3]&&r[3].indexOf(" > eval")>-1;if(n){var i=Wp.exec(r[3]);i&&(r[1]=r[1]||"eval",r[3]=i[1],r[4]=i[2],r[5]="")}var o=r[3],a=r[1]||cr;return e=ke(qc(a,o),2),a=e[0],o=e[1],Br(o,a,r[4]?+r[4]:void 0,r[5]?+r[5]:void 0)}},Gp=[qp,Qp],Yp=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,Kp=function(t){var e=Yp.exec(t);return e?Br(e[2],e[1]||cr,+e[3],e[4]?+e[4]:void 0):void 0},Jp=[jp,Kp],Zp=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,Xp=function(t){var e=Zp.exec(t);return e?Br(e[2],e[3]||cr,+e[1]):void 0},ef=[Rp,Xp],tf=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,rf=function(t){var e=tf.exec(t);return e?Br(e[5],e[3]||e[4]||cr,+e[1],+e[2]):void 0},nf=[Lp,rf],qc=function(t,e){var r=t.indexOf("safari-extension")!==-1,n=t.indexOf("safari-web-extension")!==-1;return r||n?[t.indexOf("@")!==-1?t.split("@")[0]:cr,r?"safari-extension:"+e:"safari-web-extension:"+e]:[t,e]};function of(t){var e=Qo(t),r={type:t&&t.name,value:uf(t)};return e.length&&(r.stacktrace={frames:e}),r.type===void 0&&r.value===""&&(r.value="Unrecoverable error caught"),r}function af(t,e,r){var n={exception:{values:[{type:Pn(t)?t.constructor.name:r?"UnhandledRejection":"Error",value:"Non-Error exception captured with keys: "+jd(t)}]},extra:{__serialized__:Oc(t)}};if(e){var i=Qo(e);i.length&&(n.stacktrace={frames:i})}return n}function to(t){return{exception:{values:[of(t)]}}}function Qo(t){var e=t.stacktrace||t.stack||"",r=cf(t);try{return Ud(ef,nf,Hp,Jp,Gp)(e,r)}catch{}return[]}var sf=/Minified React error #\d+;/i;function cf(t){if(t){if(typeof t.framesToPop=="number")return t.framesToPop;if(sf.test(t.message))return 1}return 0}function uf(t){var e=t&&t.message;return e?e.error&&typeof e.error.message=="string"?e.error.message:e:"No error message"}function lf(t,e,r){var n=e&&e.syntheticException||void 0,i=pf(t,n,r);return po(i),i.level=Et.Error,e&&e.event_id&&(i.event_id=e.event_id),Ft(i)}function df(t,e,r,n){e===void 0&&(e=Et.Info);var i=r&&r.syntheticException||void 0,o=ho(t,i,n);return o.level=e,r&&r.event_id&&(o.event_id=r.event_id),Ft(o)}function pf(t,e,r,n){var i;if(wd(t)&&t.error){var o=t;return to(o.error)}if(ds(t)||xd(t)){var a=t;if("stack"in t)i=to(t);else{var s=a.name||(ds(a)?"DOMError":"DOMException"),c=a.message?s+": "+a.message:s;i=ho(c,e,r),vs(i,c)}return"code"in a&&(i.tags=m(m({},i.tags),{"DOMException.code":""+a.code})),i}if(jo(t))return to(t);if(ir(t)||Pn(t)){var u=t;return i=af(u,e,n),po(i,{synthetic:!0}),i}return i=ho(t,e,r),vs(i,""+t),po(i,{synthetic:!0}),i}function ho(t,e,r){var n={message:t};if(r&&e){var i=Qo(e);i.length&&(n.stacktrace={frames:i})}return n}var ct=typeof __SENTRY_DEBUG__>"u"?!0:__SENTRY_DEBUG__,Ue=pe(),tn;function Go(){if(tn)return tn;if(lo(Ue.fetch))return tn=Ue.fetch.bind(Ue);var t=Ue.document,e=Ue.fetch;if(t&&typeof t.createElement=="function")try{var r=t.createElement("iframe");r.hidden=!0,t.head.appendChild(r);var n=r.contentWindow;n&&n.fetch&&(e=n.fetch),t.head.removeChild(r)}catch(i){ct&&U.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",i)}return tn=e.bind(Ue)}function ff(t,e){var r=Object.prototype.toString.call(Ue&&Ue.navigator)==="[object Navigator]",n=r&&typeof Ue.navigator.sendBeacon=="function";if(n){var i=Ue.navigator.sendBeacon.bind(Ue.navigator);return i(t,e)}if(Mn()){var o=Go();return _d(o(t,{body:e,method:"POST",credentials:"omit",keepalive:!0}))}}function ro(t){var e=t;return e==="event"?"error":e}var no=pe(),Uc=(function(){function t(e){var r=this;this.options=e,this._buffer=Mc(30),this._rateLimits={},this._outcomes={},this._api=fn(e.dsn,e._metadata,e.tunnel),this.url=Rc(this._api.dsn),this.options.sendClientReports&&no.document&&no.document.addEventListener("visibilitychange",function(){no.document.visibilityState==="hidden"&&r._flushOutcomes()})}return t.prototype.sendEvent=function(e){return this._sendRequest(Ap(e,this._api),e)},t.prototype.sendSession=function(e){return this._sendRequest(Tp(e,this._api),e)},t.prototype.close=function(e){return this._buffer.drain(e)},t.prototype.recordLostEvent=function(e,r){var n;if(this.options.sendClientReports){var i=ro(r)+":"+e;ct&&U.log("Adding outcome: "+i),this._outcomes[i]=(n=this._outcomes[i],(n??0)+1)}},t.prototype._flushOutcomes=function(){if(this.options.sendClientReports){var e=this._outcomes;if(this._outcomes={},!Object.keys(e).length){ct&&U.log("No outcomes to flush");return}ct&&U.log(`Flushing outcomes:
`+JSON.stringify(e,null,2));var r=An(this._api.dsn,this._api.tunnel),n=Object.keys(e).map(function(o){var a=ke(o.split(":"),2),s=a[0],c=a[1];return{reason:c,category:s,quantity:e[o]}}),i=gp(n,this._api.tunnel&&Lr(this._api.dsn));try{ff(r,$n(i))}catch(o){ct&&U.error(o)}}},t.prototype._handleResponse=function(e){var r=e.requestType,n=e.response,i=e.headers,o=e.resolve,a=e.reject,s=Ec(n.status);if(this._rateLimits=$c(this._rateLimits,i),this._isRateLimited(r)&&ct&&U.warn("Too many "+r+" requests, backing off until: "+this._disabledUntil(r)),s==="success"){o({status:s});return}a(n)},t.prototype._disabledUntil=function(e){var r=ro(e);return new Date(zo(this._rateLimits,r))},t.prototype._isRateLimited=function(e){var r=ro(e);return Cc(this._rateLimits,r)},t})(),hf=(function(t){Ir(e,t);function e(r,n){n===void 0&&(n=Go());var i=t.call(this,r)||this;return i._fetch=n,i}return e.prototype._sendRequest=function(r,n){var i=this;if(this._isRateLimited(r.type))return this.recordLostEvent("ratelimit_backoff",r.type),Promise.reject({event:n,type:r.type,reason:"Transport for "+r.type+" requests locked till "+this._disabledUntil(r.type)+" due to too many requests.",status:429});var o={body:r.body,method:"POST",referrerPolicy:Hd()?"origin":""};return this.options.fetchParameters!==void 0&&Object.assign(o,this.options.fetchParameters),this.options.headers!==void 0&&(o.headers=this.options.headers),this._buffer.add(function(){return new Tt(function(a,s){i._fetch(r.url,o).then(function(c){var u={"x-sentry-rate-limits":c.headers.get("X-Sentry-Rate-Limits"),"retry-after":c.headers.get("Retry-After")};i._handleResponse({requestType:r.type,response:c,headers:u,resolve:a,reject:s})}).catch(s)})}).then(void 0,function(a){throw a instanceof ie?i.recordLostEvent("queue_overflow",r.type):i.recordLostEvent("network_error",r.type),a})},e})(Uc),gf=(function(t){Ir(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype._sendRequest=function(r,n){var i=this;return this._isRateLimited(r.type)?(this.recordLostEvent("ratelimit_backoff",r.type),Promise.reject({event:n,type:r.type,reason:"Transport for "+r.type+" requests locked till "+this._disabledUntil(r.type)+" due to too many requests.",status:429})):this._buffer.add(function(){return new Tt(function(o,a){var s=new XMLHttpRequest;s.onreadystatechange=function(){if(s.readyState===4){var u={"x-sentry-rate-limits":s.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":s.getResponseHeader("Retry-After")};i._handleResponse({requestType:r.type,response:s,headers:u,resolve:o,reject:a})}},s.open("POST",r.url);for(var c in i.options.headers)Object.prototype.hasOwnProperty.call(i.options.headers,c)&&s.setRequestHeader(c,i.options.headers[c]);s.send(r.body)})}).then(void 0,function(o){throw o instanceof ie?i.recordLostEvent("queue_overflow",r.type):i.recordLostEvent("network_error",r.type),o})},e})(Uc);function yf(t,e){e===void 0&&(e=Go());function r(n){var i=m({body:n.body,method:"POST",referrerPolicy:"origin"},t.requestOptions);return e(t.url,i).then(function(o){return o.text().then(function(a){return{body:a,headers:{"x-sentry-rate-limits":o.headers.get("X-Sentry-Rate-Limits"),"retry-after":o.headers.get("Retry-After")},reason:o.statusText,statusCode:o.status}})})}return jc({bufferSize:t.bufferSize},r)}var _f=4;function vf(t){function e(r){return new Tt(function(n,i){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===_f){var s={body:o.response,headers:{"x-sentry-rate-limits":o.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":o.getResponseHeader("Retry-After")},reason:o.statusText,statusCode:o.status};n(s)}},o.open("POST",t.url);for(var a in t.headers)Object.prototype.hasOwnProperty.call(t.headers,a)&&o.setRequestHeader(a,t.headers[a]);o.send(r.body)})}return jc({bufferSize:t.bufferSize},e)}var mf=(function(t){Ir(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.eventFromException=function(r,n){return lf(r,n,this._options.attachStacktrace)},e.prototype.eventFromMessage=function(r,n,i){return n===void 0&&(n=Et.Info),df(r,n,i,this._options.attachStacktrace)},e.prototype._setupTransport=function(){if(!this._options.dsn)return t.prototype._setupTransport.call(this);var r=m(m({},this._options.transportOptions),{dsn:this._options.dsn,tunnel:this._options.tunnel,sendClientReports:this._options.sendClientReports,_metadata:this._options._metadata}),n=fn(r.dsn,r._metadata,r.tunnel),i=An(n.dsn,n.tunnel);if(this._options.transport)return new this._options.transport(r);if(Mn()){var o=m({},r.fetchParameters);return this._newTransport=yf({requestOptions:o,url:i}),new hf(r)}return this._newTransport=vf({url:i,headers:r.headers}),new gf(r)},e})(Np),rn=pe();function bf(t){if(t===void 0&&(t={}),!!rn.document){if(!t.eventId){ct&&U.error("Missing eventId option in showReportDialog call");return}if(!t.dsn){ct&&U.error("Missing dsn option in showReportDialog call");return}var e=rn.document.createElement("script");e.async=!0,e.src=Op(t.dsn,t),t.onLoad&&(e.onload=t.onLoad);var r=rn.document.head||rn.document.body;r&&r.appendChild(e)}}var wf=(function(){function t(e){this.name=t.id,this._options=m({console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0},e)}return t.prototype.addSentryBreadcrumb=function(e){this._options.sentry&&Ct().addBreadcrumb({category:"sentry."+(e.type==="transaction"?"transaction":"event"),event_id:e.event_id,level:e.level,message:ap(e)},{event:e})},t.prototype.setupOnce=function(){this._options.console&&gr("console",Sf),this._options.dom&&gr("dom",xf(this._options.dom)),this._options.xhr&&gr("xhr",Of),this._options.fetch&&gr("fetch",Pf),this._options.history&&gr("history",Mf)},t.id="Breadcrumbs",t})();function xf(t){function e(r){var n,i=typeof t=="object"?t.serializeAttribute:void 0;typeof i=="string"&&(i=[i]);try{n=r.event.target?co(r.event.target,i):co(r.event,i)}catch{n="<unknown>"}n.length!==0&&Ct().addBreadcrumb({category:"ui."+r.name,message:n},{event:r.event,name:r.name,global:r.global})}return e}function Sf(t){var e={category:"console",data:{arguments:t.args,logger:"console"},level:dp(t.level),message:fs(t.args," ")};if(t.level==="assert")if(t.args[0]===!1)e.message="Assertion failed: "+(fs(t.args.slice(1)," ")||"console.assert"),e.data.arguments=t.args.slice(1);else return;Ct().addBreadcrumb(e,{input:t.args,level:t.level})}function Of(t){if(t.endTimestamp){if(t.xhr.__sentry_own_request__)return;var e=t.xhr.__sentry_xhr__||{},r=e.method,n=e.url,i=e.status_code,o=e.body;Ct().addBreadcrumb({category:"xhr",data:{method:r,url:n,status_code:i},type:"http"},{xhr:t.xhr,input:o});return}}function Pf(t){t.endTimestamp&&(t.fetchData.url.match(/sentry_key/)&&t.fetchData.method==="POST"||(t.error?Ct().addBreadcrumb({category:"fetch",data:t.fetchData,level:Et.Error,type:"http"},{data:t.error,input:t.args}):Ct().addBreadcrumb({category:"fetch",data:m(m({},t.fetchData),{status_code:t.response.status}),type:"http"},{input:t.args,response:t.response})))}function Mf(t){var e=pe(),r=t.from,n=t.to,i=Xi(e.location.href),o=Xi(r),a=Xi(n);o.path||(o=i),i.protocol===a.protocol&&i.host===a.host&&(n=a.relative),i.protocol===o.protocol&&i.host===o.host&&(r=o.relative),Ct().addBreadcrumb({category:"navigation",data:{from:r,to:n}})}var Ef=(function(t){Ir(e,t);function e(r){r===void 0&&(r={});var n=this;return r._metadata=r._metadata||{},r._metadata.sdk=r._metadata.sdk||{name:"sentry.javascript.browser",packages:[{name:"npm:@sentry/browser",version:$s}],version:$s},n=t.call(this,mf,r)||this,n}return e.prototype.showReportDialog=function(r){r===void 0&&(r={});var n=pe().document;if(n){if(!this._isEnabled()){ct&&U.error("Trying to call showReportDialog with Sentry Client disabled");return}bf(m(m({},r),{dsn:r.dsn||this.getDsn()}))}},e.prototype._prepareEvent=function(r,n,i){return r.platform=r.platform||"javascript",t.prototype._prepareEvent.call(this,r,n,i)},e.prototype._sendEvent=function(r){var n=this.getIntegration(wf);n&&n.addSentryBreadcrumb(r),t.prototype._sendEvent.call(this,r)},e})(Cp);const Or=class Or{constructor(){this.name=Or.id}setupOnce(){Dc(e=>{if(Tf().getIntegration(Or)){if(!window.navigator&&!window.location&&!window.document)return e;const r=e.request&&e.request.url||window.location&&window.location.href,{referrer:n}=window.document||{},{userAgent:i}=window.navigator||{},o={...e.request&&e.request.headers,...n&&{Referer:n},...i&&{"User-Agent":i}},a={...r&&{url:r},headers:o};return{...e,request:a}}return e})}};Or.id="UserAgent";let go=Or;const Cf=[Nf,If,Rf],$f=new Ef({integrations:[new go],autoSessionTracking:!1,...il,beforeSend(t){return Cf.some(e=>e(t))?null:t}}),et=new Tn($f);function Tf(){return et}function Df(t){var r;et.configureScope(function(n){n.setTag("shop",t),n.setTag("platform","web-component")}),((r=et.getScope())==null?void 0:r.getSession())||Af()}function st(t,e={}){typeof t=="string"?(dt(t),et.captureException(new Error(t),{captureContext:{contexts:e}})):(dt(t instanceof Error?t.message:`${t}`),et.captureException(t,{captureContext:{contexts:e}}))}var Fc=(t=>(t.DO_NOT_LOG_TO_SENTRY="DO NOT LOG TO SENTRY",t))(Fc||{});function je(t,e={},r="info"){switch(r){case"warning":Pe(t,e);break;case"error":case"fatal":case"critical":dt(t,e);break;default:$(t,e)}et.captureMessage(t,r,{captureContext:{contexts:e}})}function Af(){et.startSession({ignoreDuration:!0}),et.captureSession()}function Ts(t,e){et.setTag(t,e)}function kf(t,e){et.setContext(t,e)}function Nf(t){const r=["DO NOT LOG TO SENTRY"].some(n=>{var i,o;return(o=(i=t.exception)==null?void 0:i.values)==null?void 0:o.some(a=>a.value===n)});return r&&$("Filter dontLogErrors",t),r}function If(t){const e=["info","debug","log"];return t.level!=null&&e.includes(t.level)}function Rf(t){var n,i;const r=["Load failed","Failed to fetch","Cannot destructure property 'product' of '(intermediate value)' as it is undefined."].includes((i=(n=t.contexts)==null?void 0:n.error)==null?void 0:i.message);return r&&$("Filter fetch failure",t),r}function Lf(t,e){return t.sort_order>e.sort_order?1:t.sort_order<e.sort_order?-1:0}function Bf(t){return t.filter(e=>["prepaid","prepaid_v2","subscription","membership_subscription"].includes(e.type))}function jf(t,e){var n;const r={};for(const i of t){r[i.external_variant_id]=[];for(const o of e){if(!o.has_variant_restrictions){r[i.external_variant_id].push(o);continue}(n=o.external_variant_ids)!=null&&n.some(a=>String(a)===String(i.external_variant_id))&&r[i.external_variant_id].push(o)}}return r}function qf(t,e){return e?($("Using Shopify plan names",e),t.map(r=>{var i;const n=(i=e.find(o=>Number(o.id)===r.external_plan_id))==null?void 0:i.name;return n?{...r,title:n}:r})):(Pe("Shopify plans not found, unable to override Recharge plan titles with translated Shopify plan titles"),t)}function Uf(t){return t.plans!=null&&t.variants!=null&&t.variantLevelPlans==null}function Ff(t,e){const r=t.plans,n=t.experiment_plans??[];let i=r;return e&&e.length>0&&n.length>0&&(r.every(o=>e.some(a=>a.plan_id===o.id))?(i=e.flatMap(({plan_id:o,override_plan_id:a,is_visible:s})=>{const c=n.find(p=>p.id===a),u=r.find(p=>p.id===o);!c&&a&&dt(`Could not find experiment plan with id ${a}. Falling back to the normal plan.`);const d=c??u;return s&&d?[d]:[]}),$("Using experiment plans.",e,i)):dt("Invalid planConfigs provided. All the normal plans are not defined in the experiment configurations. Falling back to the normal plans.")),i}function zf(t,e,r){const n=Ff(t,e),i=t.variants.map(c=>({id:Number(c.external_variant_id),hasOnetimePlan:n.filter(u=>{var d;return u.has_variant_restrictions===!1||((d=u.external_variant_ids)==null?void 0:d.some(p=>p===c.external_variant_id))}).some(u=>u.type==="onetime"),...c})),o=Bf(n).filter(c=>c.external_plan_id).sort(Lf),a=qf(o,r),s=jf(i,a);return{external_product_id:Number(t.external_product_id),hasOnetimePlan:n.some(c=>c.type==="onetime"),plans:a,variants:i,variantLevelPlans:s}}function zc(t){return!!t.plans.some(e=>e.product_quantity)}async function Hf(t,e,r){try{return yc({storeIdentifier:e,environment:r?"stage":"prod",appName:"rc_internal-subscription-widget"}),$("Fetching product from the cdn",t),await gc(t,{version:"2022-06"})}catch(n){const i=n instanceof Error?{name:n.name,message:n.message,stack:n.stack,productId:`product/2022-06/${t}.json`}:{message:"Unknown fetch error"};je("Error fetching product from the cdn",{error:i},"warning")}}const yo=t=>{var p;const e={};let r=t.brand_color,n=t.brand_contrast_color,i=t.text_color,o=t.selected_bg_color,a=t.selected_text_color,s=t.badge_text_color,c=t.badge_bg_color;const u=t.quantity_upsell,d=t.use_theme_styles?(p=tc())==null?void 0:p.tokens:void 0;if(d&&(i="initial",d.brandColor&&(r=d.brandColor,c=d.brandColor),d.brandContrastColor&&(s=d.brandContrastColor,n=d.brandContrastColor),d.selectedBgColor&&(o=d.selectedBgColor),d.selectedTextColor&&(a=d.selectedTextColor)),r&&(e["--rc-widget-brand-color"]=r,e["--rc-widget-brand-color-10"]=`color-mix(in srgb, ${r} 10%, #ffffff)`,e["--rc-widget-brand-color-20"]=`color-mix(in srgb, ${r} 20%, #ffffff)`,e["--rc-widget-brand-color-50"]=`color-mix(in srgb, ${r} 50%, #ffffff)`,e["--rc-widget-brand-color-70"]=`color-mix(in srgb, ${r} 70%, #ffffff)`,e["--rc-widget-brand-color-80"]=`color-mix(in srgb, ${r} 80%, #ffffff)`),n&&(e["--rc-widget-brand-contrast-color"]=n),i&&(e["--rc-widget-text-color"]=i),o&&(e["--rc-widget-selected-bg-color"]=o),a&&(e["--rc-widget-selected-text-color"]=a),s&&(e["--rc-widget-badge-text-color"]=s),c&&(e["--rc-widget-badge-bg-color"]=c),d!=null&&d.borderRadius){const v=d.borderRadius,b=`calc(${d.borderRadius} * 2px)`;e["--rc-widget-card-radius"]=v,e["--rc-widget-button-radius"]=b,e["--rc-widget-badge-radius"]=d.badgeBorderRadius||v,e["--rc-widget-field-radius"]=b}else t.border_radius&&(e["--rc-widget-card-radius"]=t.border_radius==="square"?"0":t.border_radius==="round"?"16px":"8px",e["--rc-widget-button-radius"]=t.border_radius==="square"?"0":t.border_radius==="round"?"8px":"4px",e["--rc-widget-badge-radius"]=t.border_radius==="square"?"0":t.border_radius==="round"?"16px":"4px",e["--rc-widget-field-radius"]=t.border_radius==="square"?"0":t.border_radius==="round"?"8px":"4px");return u&&(e["--rc-widget-recommended-badge-bg-color"]=u.badgeRecommendedBackgroundColor,e["--rc-widget-recommended-badge-text-color"]=u.badgeRecommendedTextColor,e["--rc-widget-recommended-badge-outline-color"]=u.badgeRecommendedOutlineColor,e["--rc-widget-best-value-badge-bg-color"]=u.badgeBestValueBackgroundColor,e["--rc-widget-best-value-badge-text-color"]=u.badgeBestValueTextColor,e["--rc-widget-best-value-badge-outline-color"]=u.badgeBestValueOutlineColor,e["--rc-widget-savings-badge-bg-color"]=u.badgeSavingPercentageBackgroundColor,e["--rc-widget-savings-badge-text-color"]=u.badgeSavingPercentageTextColor,e["--rc-widget-savings-badge-outline-color"]=u.badgeSavingPercentageOutlineColor),e};function Zt(t,e){return(e==null?void 0:e.type)==null?!1:e.type===t||e.type.includes(t)}function Vf(t){let e;const r=[t[0].percentage];for(e=1;e<t.length;e++)r[e]=t[e].percentage+r[e-1];const n=Math.random()*r[r.length-1];for(e=0;e<r.length&&!(r[e]>n);e++);return t[e]}const Wf=t=>`rc_subscription_widget_config_${t.market_id}_${t.template}`,Qf=(t,e)=>`rc_subscription_widget_config_${t.market_id}_product_id_${e}`;function io(t,e){const r=Number(t);if(!r||isNaN(r))return null;for(const n of[...e.subscription_widget_v2.widget_configs,e.subscription_widget_v2.default_widget_config])for(const i of(n==null?void 0:n.ab_splits)??[]){const o=i.display_configs.find(a=>a.external_market_id==null);for(const a of i.display_configs)if(a.config_information.config_id===r)return{base:(o==null?void 0:o.config_information)??{},config:{...a.config_information,ab_split_id:i.ab_split_id,widget_flow_id:n==null?void 0:n.widget_flow_id,type:Ze.Recharge},market_id:a.external_market_id,plan_configs:i.plan_configs}}return null}async function Gf(t,e,r,n,i,o){var w,x;const{default_widget_config:a,widget_configs:s,quantity_upsell_widget_config:c}=n.subscription_widget_v2,u=s.find(M=>{var A;return M.trigger_type==="external_product_id"&&((A=M.trigger_values)==null?void 0:A.includes(String(r)))}),d=s.find(M=>{var A;return M.trigger_type==="product_template"&&((A=M.trigger_values)==null?void 0:A.includes(t))}),p=s.find(M=>{var A;return(A=M.product_template_ids)==null?void 0:A.includes(t)});d==null&&p&&$("Found legacy product template key in widget config",p);let v=(u||d||p)??a;if(c&&await Yf(r,o)&&(v=c),(v==null?void 0:v.ab_splits)==null||v.ab_splits.length===0)return{trigger_type:(v==null?void 0:v.trigger_type)??"product_template",plan_configs:null,config:null};const b=Vf(v.ab_splits),O=(w=b.display_configs.find(M=>M.external_market_id==null))==null?void 0:w.config_information;if(!O)return{trigger_type:v.trigger_type??"product_template",plan_configs:null,config:null};const P=De(i,O??{}),f=(x=b.display_configs.find(M=>M.external_market_id===e))==null?void 0:x.config_information;return f!=null?$("Using market specific configuration",e):$("Using the default market configuration"),{trigger_type:v.trigger_type??"product_template",plan_configs:b.plan_configs,config:De(P,{...f??{},ab_split_id:b.ab_split_id,widget_flow_id:v==null?void 0:v.widget_flow_id,type:Ze.Recharge})}}async function Yf(t,e){if(!t)return!1;const r=await Hf(t,e,Xs);return r?zc(r):!1}function Kf(t){return t!=null&&Object.keys(t).length>0}async function Jf(t,e,r){const{template:n,market_id:i,show_powered_by_recharge:o}=t.shop,a=bn;if(ec("recharge_preview")==="true"||r)if(t.preview_config==null)dt("The preview configuration was requested but is not defined: The preview will not be used.");else return $("Using preview configuration"),{plan_configs:null,config:De(a,{...t.preview_config.preview_config,showPoweredByRecharge:o,type:Ze.RechargePreview})};if(!Kf(t.configs))return dt("The configuration is invalid or null: the widget will not show because a configuration is required."),{plan_configs:null,config:null};const s=io(Fe==null?void 0:Fe.configId,t.configs);if(s)return $("Using test configuration"),s.market_id?$("Test configuration is for a specific market",s.market_id):$("Using the default market configuration"),{plan_configs:s.plan_configs,config:De(De(a,s.base),{...s.config,showPoweredByRecharge:o})};const c=Wf(t.shop),u=Qf(t.shop,e);function d(w){try{return window.sessionStorage.getItem(w)}catch{Pe("Failed to get session storage",{sessionKey:{key:w}},"warning")}}function p(w,x){try{window.sessionStorage.setItem(w,String(x)),$("Market configuration found - saving to sessionStorage",w)}catch{Pe("Failed to set session storage",{store:{sessionKey:w,configId:x}},"warning")}}const v=io(d(c),t.configs),b=io(d(u),t.configs);if(b!=null)return $("Loaded product configuration from sessionStorage",`Key: ${u}`,`Value: ${d(u)}`),b.market_id?$("Product configuration is for a specific market",b.market_id):$("Using the default market configuration"),{plan_configs:b.plan_configs,config:De(De(a,b.base),{...b.config,showPoweredByRecharge:o})};if(v!=null)return $("Loaded configuration from sessionStorage",`Key: ${c}`,`Value: ${d(c)}`),v.market_id?$("Template configuration is for a specific market",v.market_id):$("Using the default market configuration"),{plan_configs:v.plan_configs,config:De(De(a,v.base),{...v.config,showPoweredByRecharge:o})};const{trigger_type:O,config:P,plan_configs:f}=await Gf(n,i,e,t.configs,a,t.shop.identifier);return(P==null?void 0:P.config_id)!=null?p(O==="external_product_id"?u:c,P.config_id):$("No configuration found for market - The widget will not be visible",`Market: ${i}`,`Template: ${n}`),P?{plan_configs:f,config:{...P,showPoweredByRecharge:o}}:{plan_configs:f,config:P}}const jr="settings";class Zf{constructor(){this.listeners={}}addEventListener(e,r){var n;return e in this.listeners||(this.listeners[e]=[]),(n=this.listeners[e])==null||n.push(r),()=>this.removeEventListener(e,r)}removeEventListener(e,r){var n,i;e in this.listeners&&(this.listeners[e]=(n=this.listeners[e])==null?void 0:n.filter(o=>o!==r),((i=this.listeners[e])==null?void 0:i.length)===0&&delete this.listeners[e])}dispatchEvent(e,...r){var n;e in this.listeners&&((n=this.listeners[e])==null||n.forEach(i=>i.call(this,...r)))}reset(){this.listeners={}}}const pt=new Zf;function kn(t,e){return pt.addEventListener(`${t}:sellingPlan:change`,e),()=>pt.removeEventListener(`${t}:sellingPlan:change`,e)}function _o(t,e){return pt.addEventListener(`${t}:variant:change`,e),()=>pt.removeEventListener(`${t}:variant:change`,e)}function Hc(t,e){return pt.addEventListener(`${t}:purchaseOption:change`,e),()=>pt.removeEventListener(`${t}:purchaseOption:change`,e)}function Xf(t,e,r){pt.dispatchEvent(`${t}:sellingPlan:change`,e,r)}function eh(t,e){pt.dispatchEvent(`${t}:variant:change`,e)}function Ds(t,e){pt.dispatchEvent(`${t}:purchaseOption:change`,e)}function th(t){return{onSellingPlanChange:e=>kn(t,e),onVariantChange:e=>_o(t,e),onPurchaseOptionChange:e=>Hc(t,e)}}function rh(t,e){const r=e.toString();return`${t}${r?`?${r}`:""}`}function nh(t,e){try{const r=history.replaceState;history.replaceState=function(n,i,o){const[a="",s]=typeof o=="string"?o.split("?"):[o==null?void 0:o.pathname,o==null?void 0:o.search],c=new URLSearchParams(s),u=new URLSearchParams(window.location.search);return c.get("variant")!==u.get("variant")&&setTimeout(()=>{var b;const p=(b=Nn(t))==null?void 0:b.variantId,v=zt(e);p!==v&&mo(t,e)}),r.apply(history,[n,i,rh(a,c)])}}catch{}}function vo(t){return t?(new DOMParser().parseFromString(t,"text/html").body.textContent||"").trim()==="":!0}function Vc(t,e){const r=document.createElement("input"),n=e==null?"":typeof e=="object"?JSON.stringify(e):String(e);return r.name=t,r.type="hidden",r.value=n,r}function Yo(t){return new DOMParser().parseFromString(t,"text/html").body.textContent||""}function Wc(t,e){let r=t,n=0;for(;r.parentElement;){if(e){for(const i of e)if(r!=null&&r.contains(i))return i}else{const[i]=Array.from(r.querySelectorAll("form")).filter(o=>Qc(o));if(i)return i}if(r=r.parentElement,n++,n>=5)break}}function Qc(t,e=!0){var i;const r=(i=t.getAttribute("action"))==null?void 0:i.includes("/cart/add"),n=e?!!t.querySelector('button, [type="submit"]'):!0;return r&&n}function Gc(t=!0){return Array.from(document.forms).filter(e=>{const r=!!zt(e);return Qc(e,t)&&r})}function ih(t,e,r=!0){const n=Gc(r).filter(i=>zt(i)===e);if(n.length>1){Pe("Found multiple product forms for the same variant id",e,n);const i=Nn(t);if(i){const o=Wc(i,n);if(o)return $("Found product form that is part of the closest parent",o),o}}return n[0]}function zt(t){var e;return Number(new FormData(t).get("id")||((e=t.querySelector('[name="id"]'))==null?void 0:e.value))}function mo(t,e){const r=zt(e);return eh(t,r),$("Variant Changed",r),r}const As={};function oh(t,e){let r=zt(e);const n=e.querySelector('input[name="id"]');n&&new MutationObserver(()=>{As[t]=!0,mo(t,e)}).observe(n,{attributes:!0,childList:!1,attributeFilter:["value"]}),nh(t,e),e.addEventListener("change",()=>{setTimeout(()=>{As[t]||zt(e)!==r&&(r=mo(t,e),$("Variant Changed",r))})})}function ah(t,e){e.addEventListener("submit",()=>{const r=new FormData(e),n=Nn(t);if(n!=null&&n.sellingPlanId){const i=n.sellingPlanId,o=Number(r.get("selling_plan"))||"";if($("Selling Plan added to cart",o),i!==o){const a={productId:t,variantId:n.variantId,expectedSellingPlan:i,submittedSellingPlan:o};je("Expected a selling plan to be submitted, but an incorrect one was found",{data:a},"error")}}})}function Nn(t){const e=document.querySelectorAll(`recharge-subscription-widget[product-id="${t}"]`);e.length>1&&Pe("Found multiple widgets for the same product id",t,e);const r=Array.from(e).find(n=>{var i;return((i=n.checkVisibility)==null?void 0:i.call(n,{contentVisibilityAuto:!0}))??!0});return r||Pe("No visible widget found for product id",t,e),r}const sh=750,ks=75;async function bo(t,e,r=0,n=!0){if(r>=sh)return;const i=ih(t,e,n);return i||new Promise(o=>{setTimeout(()=>o(bo(t,e,r+ks,n)),ks)})}async function ch(t,e,r){let n=await bo(e,t,0,!0);if(!n&&(n=await bo(e,t,0,!1),!n)){const i=Nn(e);if(i)n=Wc(i);else return n}if(!n){const i=Gc(),o=i.map(zt);let a="No valid product forms found.";o.includes(t)||(a="Initial variant could not be found in any forms"),Pe('Could not infer a product form to dynamically add selling plans. Make sure you have a product form that has the variant associated with it ([name="id"]).',{details:{reason:a,inputs:{productId:e,initialVariantId:t,initialSellingPlanId:r},validProductForms:i,validProductFormVariants:o}})}return n}function Yc(t){return t.querySelector('input[name="quantity"]')}function uh(t){return t.variants.reduce((e,r)=>{const n=r.prices[0];return{...e,[r.external_variant_id]:{discounted:Ot(n.plans[0].discounted_price,n.currency),unit:Ot(n.unit_price,n.currency),sellingPlans:n.plans.reduce((i,o)=>{const a=t.plans.find(c=>c.id===o.id);if(!a)return i;const s=a.type==="prepaid_v2";return{...i,[a.external_plan_id]:{price:Ot(o.discounted_price,n.currency),discountType:s?"price":a.discount_type,discountValue:a.discount_type==="percentage"&&s?Number(o.discounted_price)*100:Number(a.discount_amount),quantityUpsell:a.product_quantity?{totalDiscountedPrice:Ot(Number(o.discounted_price)*a.product_quantity,n.currency),totalDiscountAmount:Ot(Number(a.discount_amount),n.currency)}:void 0}}},{})}}},{})}function Kc(t,e){const r=X();return(r==null?void 0:r.shop.identifier)!=="preview"&&Pe("Falling back to Recharge variant prices because the price didn't exist on the Shopify formatted prices",t,e),uh(t)[e]}function Ko(t,e,r){var s;const n=(s=X())==null?void 0:s.formattedPrices,i=(n==null?void 0:n[e])??Kc(t,e),o=i==null?void 0:i.sellingPlans[r],a=t==null?void 0:t.plans.find(c=>c.external_plan_id===r);if(o&&a)return{unit:lh(a,o,i.unit),discounted:Yo(o.price),adjustmentType:o.discountType,adjustmentValue:o.discountValue,quantityUpsell:o.quantityUpsell};throw je("Could not find selling plan price for variant",{details:{variantId:e,sellingPlanId:r}},"critical"),new Error(Fc.DO_NOT_LOG_TO_SENTRY)}function wo(t,e){var i;const r=X(),n=(i=r==null?void 0:r.formattedPrices)==null?void 0:i[t];if(n)return Yo(n.unit);{const o=Kc(e,t);return o?o.unit:(je("Could not find variant price for variant",{product:{external_product_id:e.external_product_id,variant_id:t}},"error"),"")}}function lh(t,e,r){const{shop:n}=X()??{},i=t.charge_interval_frequency,o=t.order_interval_frequency;return i&&o&&i>o&&i>1&&o>=1&&e.discountType==="price"?Ot(e.discountValue/(i/o)/100,n==null?void 0:n.currency):Yo(r)}function dh(t){return e=>t.reduce((r,n)=>n(r),e)}function xt(t,e){return r=>e?r.replace(t,e):""}function ph(t){return t.reduce((r,n)=>Number(n.discount_amount)>Number(r.discount_amount)?n:r,t[0])}function Jc(t,e,r){const n=ph(t),{discount_amount:i,discount_type:o}=n;if(!i||Number(i)<=0)return"";const{discounted:a}=Ko(e,r,n.external_plan_id);return o==="percentage"?wn(i):`${a}`}function fh(t,e,r,n){const i=Jc(e,r,n);return i?t.replace(G.MaxDiscount,i):""}function xo(t,e){const r=Do(e);return r?t.replace(G.Discount,r):""}function hh(t){var e,r;return(((r=(e=t.pricing_progression)==null?void 0:e[0])==null?void 0:r.recurring_discount_after_cycle)||0)+1}function gh(t){const{discount_amount:e,discount_type:r}=t;return!e||Number(e)<=0?"":r==="percentage"?wn(e):""}function yh(t){var n,i,o,a;const e=(i=(n=t.pricing_progression)==null?void 0:n[0])==null?void 0:i.recurring_discount_amount,r=(a=(o=t.pricing_progression)==null?void 0:o[0])==null?void 0:a.recurring_discount_type;return!e||Number(e)<=0?"":r==="percentage"?wn(e):""}function _h(t,e,r,n){var c,u,d,p;const i=((u=(c=t.pricing_progression)==null?void 0:c[0])==null?void 0:u.recurring_discount_amount)||0,o=e.variants.find(v=>v.external_variant_id===r),s=parseFloat(((p=(d=o==null?void 0:o.prices)==null?void 0:d[0])==null?void 0:p.unit_price)||"0")*(1-Number(i)/100);return Ot(s,n)}function vh(t,e,r){var n;return e[`${(n=t==null?void 0:t.interval_unit)==null?void 0:n.toLowerCase()}${r>1?"s":""}`]??""}function mh(t,e,r){const n=r*(t.order_interval_frequency||1),i=vh(t,e,n);return xt(G.Interval,n.toString())(i)}function hn(t,e,r){var i;const n=new DOMParser().parseFromString(t,"text/html");try{return(i=n.body.querySelectorAll("ul"))==null||i.forEach(o=>o.querySelectorAll("li").forEach(a=>{var s;(s=a.textContent)!=null&&s.includes(e)&&(r?a.innerHTML=a.innerHTML.replace(e,r):a.remove())})),typeof n.body.innerHTML.replaceAll!="function"?t:n.body.innerHTML.replaceAll(e,r)}catch(o){return st(o,{context:{html:n}}),t}}const Zc=qe`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    position: relative;
    padding-left: 1.75em;
  }
  li:not(:last-of-type) {
    margin-bottom: 8px;
  }
  li::before {
    content: '';
    height: 1em;
    width: 1em;
    position: absolute;
    top: 0.25em;
    left: 0;
    mask-image: var(--rc-widget-bullet-icon-image);
    mask-size: 140%;
    background-color: var(--rc-widget-bullet-icon-image-color, var(--rc-widget-brand-color));
    mask-position: calc(-0.25em + 1px) calc(-0.25em + 1px);
  }
  p:last-child {
    margin-bottom: 0;
  }
  .compact li {
    margin-bottom: 0;
  }
  .compact p {
    margin: 0.5em 0;
  }
`;var g=(t=>(t.BenefitsList="rc-benefits__list",t.BenefitsImage="rc-benefits__image",t.DesignModeBanner="rc-design-mode-banner",t.DesignModeBannerContent="rc-design-mode-banner__content",t.DesignModeBannerClose="rc-design-mode-banner__close",t.DesignModeBannerIcon="rc-design-mode-banner__icon",t.LearnMore="rc-learn-more",t.LearnMoreTrigger="rc-learn-more__trigger",t.LearnMoreTriggerCompact="rc-learn-more__trigger-compact",t.LearnMoreModal="rc-learn-more-modal",t.LearnMoreModalContent="rc-learn-more-modal__content",t.LearnMoreModalCloseButton="rc-learn-more-modal__close-button",t.LearnMoreModalContentBody="rc-learn-more-modal__content-body",t.LearnMoreModalContainer="rc-learn-more-modal__container",t.Loading="rc-loading",t.LoadingIcon="rc-loading__icon",t.Drawbacks="rc-drawbacks",t.PlansButton="rc-plans-button",t.PlansButtonSelected="rc-plans-button__selected",t.PlansButtonGroup="rc-plans-button-group",t.PlansButtonList="rc-plans-button-list",t.PlansLabel="rc-plans__label",t.PlansRadioButton="rc-plans-radio-button",t.PlansButtonDiscount="rc-plans-button__discount",t.PlansButtonInterval="rc-plans-button__interval",t.PlansDropdown="rc-plans-dropdown",t.PlansSelect="rc-plans-select",t.PurchaseOption="rc-purchase-option",t.PurchaseOptionGroup="rc-purchase-option-group",t.PurchaseOptionSelected="rc-purchase-option__selected",t.PurchaseOptionSelector="rc-purchase-option__selector",t.OnetimePurchaseOption="rc-purchase-option__onetime",t.OnetimePurchaseOptionLabel="rc-purchase-option__label",t.OnetimePurchaseOptionSelector="rc-purchase-option__selector_onetime",t.OnetimePurchaseOptionInput="rc-purchase-option__input",t.OnetimePurchaseOptionCheckedIndicator="rc-purchase-option__checked-indicator",t.OnetimePurchaseOptionPrice="rc-purchase-option__price",t.OnetimePurchaseOptionPrices="rc-purchase-option__prices",t.OnetimePurchaseOptionSubContainer="rc-purchase-option__sub-container",t.SubscriptionPurchaseOption="rc-purchase-option__subscription",t.SubscriptionPurchaseOptionLabel="rc-purchase-option__label",t.SubscriptionPurchaseOptionSelector="rc-purchase-option__selector_subscription",t.SubscriptionPurchaseOptionInput="rc-purchase-option__input",t.SubscriptionPurchaseOptionCheckedIndicator="rc-purchase-option__checked-indicator",t.SubscriptionPurchaseOptionSubContainer="rc-purchase-option__sub-container",t.SubscriptionPurchaseOptionOriginalPrice="rc-purchase-option__original-price",t.SubscriptionPurchaseOptionUnitPrice="rc-purchase-option__unit-price",t.SubscriptionPurchaseOptionPrices="rc-purchase-option__prices",t.SubscriptionPurchaseOptionDiscountedPrice="rc-purchase-option__discounted-price",t.SubscriptionPurchaseOptionDynamicPrice="rc-purchase-option__dynamic-price",t.SubscriptionBadge="rc-purchase-option__badge",t.PrepaidPlanTitle="rc-prepaid-plan__title",t.ContentWrap="rc-content-wrap",t.WidgetRoot="rc-widget__root",t.QuantityUpsellOption="rc-quantity-upsell-option",t.QuantityUpsellOptionSelected="rc-quantity-upsell-option__selected",t.QuantityUpsellOptionInput="rc-quantity-upsell-option__input",t.QuantityUpsellOptionLabel="rc-quantity-upsell-option__label",t.QuantityUpsellOptionSelector="rc-quantity-upsell-option__selector",t.QuantityUpsellOptionCheckedIndicator="rc-quantity-upsell-option__checked-indicator",t.QuantityUpsellRecommendedBadge="rc-quantity-upsell-badge__recommended",t.QuantityUpsellBestValueBadge="rc-quantity-upsell-badge__best-value",t.QuantityUpsellSavingsBadge="rc-quantity-upsell-badge__savings",t))(g||{}),bh=Object.defineProperty,wh=Object.getOwnPropertyDescriptor,In=(t,e,r,n)=>{for(var i=n>1?void 0:n?wh(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&bh(e,r,i),i};let $t=class extends _e{constructor(){super(...arguments),this.sellingPlans=[]}unitText(t,e){var i;const r=e??0,n=t.interval_unit;if(n)return(((i=this.settings)==null?void 0:i.frequencyIntervalTranslation[`${n.toLowerCase()}${r>1?"s":""}`])??"").replace(G.Interval,r.toString()).replace(G.Discount,Do(t))}get frequencyDisplayOptions(){var e;const t=(e=this.settings)==null?void 0:e.frequencyDisplayContent;return this.sellingPlans.map(r=>{var n,i,o;switch(t){case"interval":{if(r.type==="prepaid")return{interval:r.title,value:r.external_plan_id};if(r.type==="prepaid_v2"){const a=this.unitText(r,r.charge_interval_frequency);return{interval:this.unitText(r,r.order_interval_frequency),chargeInterval:a&&((n=this.settings)==null?void 0:n.frequencyIntervalTranslation.chargeInterval.replace(G.PrepaidChargeInterval,a)),discount:xo(((i=this.settings)==null?void 0:i.frequencyIntervalTranslation.save)??"",r),value:r.external_plan_id}}return{interval:this.unitText(r,r.order_interval_frequency),discount:xo(((o=this.settings)==null?void 0:o.frequencyIntervalTranslation.save)??"",r),value:r.external_plan_id}}case"planName":default:return{interval:r.title,value:r.external_plan_id}}})}handleSellingPlanChange(t){this.value=Number(t);const e=new CustomEvent($t.events.planChange,{detail:{sellingPlanId:this.value},bubbles:!0,composed:!0});this.dispatchEvent(e)}_buttonGroupOrList(){var t;return this.sellingPlans.some(e=>e.type==="prepaid_v2")?"buttonList":(t=this.settings)==null?void 0:t.frequencyDisplayType}render(){return this.settings==null||!this.sellingPlans.length?E:this.settings.frequencyDisplayType==="buttonGroup"||this.settings.frequencyDisplayType==="buttonList"?C`
        <fieldset
          class="${this._buttonGroupOrList()==="buttonGroup"?"rc-plans-button-group":"rc-plans-button-list"}"
          part="${g.PlansButtonGroup}"
        >
          <legend class="rc-plans__label" part="${g.PlansLabel}">${this.settings.frequencyLabel}</legend>
          ${this.frequencyDisplayOptions.map(t=>{const e=this.value===t.value,r=`rc-plan-${t.value}-option`;return C`<label part="${g.PlansRadioButton}">
              <input
                aria-label="${[t.interval,t.chargeInterval,t.discount].filter(Boolean).join(" ")}"
                id="${r}"
                type="radio"
                name="rc_plan"
                value=${t.value}
                ?checked=${e}
                @click=${()=>this.handleSellingPlanChange(t.value)}
              />
              <div
                class="rc-plans-button"
                ?data-checked=${e}
                aria-hidden="true"
                part="${g.PlansButton} ${e?g.PlansButtonSelected:""}"
              >
                <span class="rc-plans-button__interval" part="${g.PlansButtonInterval}">
                  ${t.interval}
                  ${t.chargeInterval?C`<span class="rc-plans-button__discount" part="${g.PlansButtonDiscount}"
                        >${t.chargeInterval}</span
                      >`:""}
                </span>
                ${t.discount?C`<span class="rc-plans-button__discount" part="${g.PlansButtonDiscount}"
                      >${t.discount}</span
                    >`:""}
              </div>
            </label>`})}
        </fieldset>
      `:C`<label class="rc-plans-dropdown" part="${g.PlansDropdown}">
      <span class="rc-plans__label" part="${g.PlansLabel}">${this.settings.frequencyLabel}</span>
      <div style="position: relative;">
        <select
          class="rc-plans-dropdown__select"
          name="rc_plan"
          part="${g.PlansSelect}"
          aria-label="${this.settings.frequencyLabel||bn.frequencyLabel}"
          @change=${t=>this.handleSellingPlanChange(t.target.value)}
        >
          ${this.frequencyDisplayOptions.map(t=>{const e=this.value===t.value;return C`<option value="${t.value}" ?selected=${e}>
              ${t.interval}${t.chargeInterval?`: ${t.chargeInterval}`:""}${t.discount?`: ${t.discount}`:""}
            </option>`})}
        </select>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="rc-plans-dropdown__icon">
          <path
            d="M4.16699 7.5L10.0003 13.3333L15.8337 7.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </label>`}};$t.events={planChange:"planChange"};$t.styles=qe`
    input {
      clip: rect(0, 0, 0, 0);
      border-width: 0;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    select {
      -moz-appearance: none;
      -webkit-appearance: none;
      padding: 8px 12px;

      background: transparent;
      color: inherit;
      border-radius: var(--rc-widget-field-radius);
      border: 1px solid var(--rc-widget-brand-color-50);
      width: 100%;
      padding-right: 28px;
    }

    select:focus-visible {
      outline: 0;
      box-shadow: 0 0 0 2px white, 0 0 0 3px var(--rc-widget-brand-color-50);
    }

    .rc-plans-dropdown {
      font-size: 14px;
      position: relative;
    }

    .rc-plans__label {
      font-size: 1em;
      font-weight: 600;
      line-height: 1.75em;
      padding: 0;
    }

    .rc-plans-dropdown__icon {
      color: var(--rc-widget-brand-color);
      position: absolute;
      right: 8px;
      bottom: 0px;
      height: 100%;
      width: 20px;
      pointer-events: none;
    }

    .rc-plans-button-group {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      border: none;
      margin: 0;
      padding: 0;
    }

    .rc-plans-button-group label {
      display: flex;
      flex-grow: 1;
      width: calc(33% - 12px);
      transition: background-color 0.1s ease;
    }

    .rc-plans-button-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      flex-wrap: wrap;
      border: none;
      margin: 0;
      padding: 0;
    }
    .rc-plans-button-list label {
      display: flex;
      flex-grow: 1;
      width: 100%;
      transition: background-color 0.1s ease;
    }
    .rc-plans-button-list .rc-plans-button {
      justify-content: space-between;
      flex-direction: row;
      width: 100%;
    }
    .rc-plans-button-list .rc-plans-button__interval {
      display: flex;
      flex-direction: column;
      text-align: left;
    }

    .rc-plans-button-list .rc-plans-button__discount {
      text-align: right;
    }

    .rc-plans-button {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: background-color 0.1s ease;
      cursor: pointer;
      background: var(--rc-widget-brand-color-10);
      padding: 0.5em;
      border-radius: var(--rc-widget-button-radius);
      color: var(--rc-widget-text-color);
      border: none;
      flex-grow: 1;
      width: calc(33% - 12px);
      transition: background-color 0.1s ease;
    }

    .rc-plans-button:hover {
      background: var(--rc-widget-brand-color-20);
    }

    .rc-plans-button-group label input:focus-visible + .rc-plans-button {
      box-shadow: 0 0 0 1.5px white, 0 0 0 3px var(--rc-widget-brand-color-50);
    }

    .rc-plans-button[data-checked] {
      background: var(--rc-widget-brand-color);
      color: var(--rc-widget-brand-contrast-color);
    }

    .rc-plans-button__interval {
      font-size: 1em;
      line-height: 1.5em;
      font-weight: 600;
      hyphens: auto;
    }

    .rc-plans-button__discount {
      font-size: 0.88em;
      line-height: 1.25em;
      font-weight: 400;
    }
  `;In([xn({context:jr})],$t.prototype,"settings",2);In([te({type:Array})],$t.prototype,"sellingPlans",2);In([te({type:Number})],$t.prototype,"value",2);$t=In([He("rc-selling-plans")],$t);var xh=Object.getOwnPropertyDescriptor,Sh=(t,e,r,n)=>{for(var i=n>1?void 0:n?xh(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=a(i)||i);return i};let So=class extends _e{render(){return C`
      <div class="rc-loading" part="${g.Loading}">
        <div class="rc-loading__icon" part="${g.LoadingIcon}"></div>
        <span class="visually-hidden">Loading...</span>
      </div>
    `}};So.styles=qe`
    .rc-loading {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%; /* Adjust height as needed */
    }

    .rc-loading__icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 3px solid var(--rc-widget-brand-color-50);
      border-top-color: var(--rc-widget-brand-color);
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .visually-hidden {
      border: 0px;
      clip: rect(0px, 0px, 0px, 0px);
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0px;
      overflow: hidden;
      white-space: nowrap;
      position: absolute;
    }
  `;So=Sh([He("rc-loading")],So);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oh=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rn={ATTRIBUTE:1,CHILD:2},Ln=t=>(...e)=>({_$litDirective$:t,values:e});let Bn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sr=(t,e)=>{var n;const r=t._$AN;if(r===void 0)return!1;for(const i of r)(n=i._$AO)==null||n.call(i,e,!1),Sr(i,e);return!0},gn=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},Xc=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),Eh(e)}};function Ph(t){this._$AN!==void 0?(gn(this),this._$AM=t,Xc(this)):this._$AM=t}function Mh(t,e=!1,r=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let o=r;o<n.length;o++)Sr(n[o],!1),gn(n[o]);else n!=null&&(Sr(n,!1),gn(n));else Sr(this,t)}const Eh=t=>{t.type==Rn.CHILD&&(t._$AP??(t._$AP=Mh),t._$AQ??(t._$AQ=Ph))};class Ch extends Bn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,n){super._$AT(e,r,n),Xc(this),this.isConnected=e._$AU}_$AO(e,r=!0){var n,i;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),r&&(Sr(this,e),gn(this))}setValue(e){if(Oh(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $h=()=>new Th;class Th{}const oo=new WeakMap,Dh=Ln(class extends Ch{render(t){return E}update(t,[e]){var n;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(n=t.options)==null?void 0:n.host,this.rt(this.ct=t.element)),E}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=oo.get(e);r===void 0&&(r=new WeakMap,oo.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=oo.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Oo=class extends Bn{constructor(e){if(super(e),this.it=E,e.type!==Rn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===E||e==null)return this._t=void 0,this.it=e;if(e===lt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Oo.directiveName="unsafeHTML",Oo.resultType=1;const Jo=Ln(Oo);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eu="important",Ah=" !"+eu,Po=Ln(class extends Bn{constructor(t){var e;if(super(t),t.type!==Rn.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const n=t[r];return n==null?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(t,[e]){const{style:r}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?r.removeProperty(n):r[n]=null);for(const n in e){const i=e[n];if(i!=null){this.ft.add(n);const o=typeof i=="string"&&i.endsWith(Ah);n.includes("-")||o?r.setProperty(n,o?i.slice(0,-11):i,o?eu:""):r[n]=i}}return lt}});var kh=Object.defineProperty,Nh=Object.getOwnPropertyDescriptor,tu=(t,e,r,n)=>{for(var i=n>1?void 0:n?Nh(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&kh(e,r,i),i};let yn=class extends _e{constructor(){super(...arguments),this.modalRef=$h()}onOpen(){if(this.settings==null)return E;if(this.modalRef.value)this.modalRef.value.show();else{const t=C`<rc-learn-more-modal
        ${Dh(this.modalRef)}
        exportparts="${g.LearnMoreModalContent}, ${g.LearnMoreModal}, ${g.LearnMoreModalCloseButton}, ${g.LearnMoreModalContentBody}, ${g.LearnMoreModalContainer}"
        ?show-powered-by-recharge=${this.settings.showPoweredByRecharge}
        style="${Po(yo(this.settings))}"
      >
        <div slot="body">
          ${this.settings.learnMoreContent?Jo(this.settings.learnMoreContent):Ih()}
        </div>
      </rc-learn-more-modal>`;mr(t,document.body)}}render(){return this.settings==null||!this.settings.learnMoreText?E:this.settings.displayMode==="compact"?C`<button
        class="rc-learn-more compact rc-learn-more__trigger"
        part="${g.LearnMoreTriggerCompact}"
        @click=${()=>this.onOpen()}
        aria-label=${this.settings.learnMoreText}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path
            d="M11.4584 15.7916H12.5417V11H11.4584V15.7916ZM11.9957 9.7404C12.1615 9.7404 12.302 9.68431 12.4171 9.57212C12.5322 9.45993 12.5898 9.32091 12.5898 9.15506C12.5898 8.98922 12.5337 8.84873 12.4215 8.7336C12.3093 8.61849 12.1703 8.56094 12.0045 8.56094C11.8386 8.56094 11.6981 8.61703 11.583 8.72923C11.4679 8.84142 11.4103 8.98044 11.4103 9.14629C11.4103 9.31214 11.4664 9.45262 11.5786 9.56773C11.6908 9.68284 11.8298 9.7404 11.9957 9.7404ZM12.0072 19.5833C10.964 19.5833 9.98148 19.386 9.05971 18.9912C8.13792 18.5965 7.3311 18.0534 6.63925 17.3619C5.94739 16.6703 5.40401 15.8642 5.0091 14.9434C4.6142 14.0226 4.41675 13.0388 4.41675 11.9919C4.41675 10.9449 4.61411 9.96406 5.00883 9.04923C5.40355 8.13438 5.94668 7.33104 6.63821 6.63919C7.32975 5.94733 8.13591 5.40394 9.05669 5.00904C9.97746 4.61414 10.9613 4.41669 12.0082 4.41669C13.0551 4.41669 14.036 4.61405 14.9508 5.00877C15.8657 5.40349 16.669 5.94662 17.3609 6.63815C18.0527 7.32969 18.5961 8.13422 18.991 9.05175C19.3859 9.96928 19.5834 10.9496 19.5834 11.9929C19.5834 13.0361 19.386 14.0186 18.9913 14.9404C18.5966 15.8621 18.0534 16.669 17.3619 17.3608C16.6704 18.0527 15.8658 18.5961 14.9483 18.991C14.0308 19.3859 13.0504 19.5833 12.0072 19.5833ZM12.0001 18.5C13.8056 18.5 15.3403 17.8681 16.6042 16.6042C17.8681 15.3403 18.5001 13.8056 18.5001 12C18.5001 10.1944 17.8681 8.65972 16.6042 7.39583C15.3403 6.13194 13.8056 5.5 12.0001 5.5C10.1945 5.5 8.65978 6.13194 7.39589 7.39583C6.132 8.65972 5.50006 10.1944 5.50006 12C5.50006 13.8056 6.132 15.3403 7.39589 16.6042C8.65978 17.8681 10.1945 18.5 12.0001 18.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>`:C`<div class="rc-learn-more" part="${g.LearnMore}">
      <button
        class="rc-learn-more__trigger"
        part="${g.LearnMoreTrigger}"
        @click=${()=>this.onOpen()}
        aria-label="Learn more about subscribe and save"
      >
        ${this.settings.learnMoreText}
      </button>
    </div>`}};yn.styles=qe`
    .rc-learn-more__trigger {
      cursor: pointer;
      padding: 0;
      font-size: 14px;
      color: var(--rc-widget-brand-color);
      background: transparent;
      border: 0;
      text-decoration: underline;
      text-underline-offset: 2px;
      font-family: inherit;
    }

    .rc-learn-more__trigger:focus-visible {
      outline: 0;
      box-shadow: 0 0 0 2px white, 0 0 0 3px var(--rc-widget-brand-color-50);
    }
    .rc-learn-more.compact {
      line-height: 0;
      display: inline-block;
    }
    .rc-learn-more.compact .rc-learn-more__trigger {
      line-height: 0;
    }
  `;tu([xn({context:jr})],yn.prototype,"settings",2);yn=tu([He("rc-learn-more")],yn);function Ih(){return C`
    <style>
      rc-learn-more-modal h1 {
        font-size: 40px;
        line-height: 48px;
        font-weight: 600;
        text-align: center;
        padding-bottom: 32px;
        margin: 0;
      }

      rc-learn-more-modal h2 {
        padding: 0;
        margin: 0;
        font-size: 20px;
        line-height: 28px;
        font-weight: 600;
      }

      rc-learn-more-modal p {
        margin: 0;
        padding: 0;
        font-size: 16px;
        line-height: 24px;
      }

      rc-learn-more-modal .learn-more-content {
        padding: 0 20px 20px;
      }

      rc-learn-more-modal .learn-more-footer button {
        background-color: var(--rc-widget-brand-color);
        color: var(--rc-widget-brand-contrast-color);
        border: none;
        border-radius: var(--rc-widget-button-radius);
        padding: 12px;
        min-width: 335px;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        cursor: pointer;
        transition: background-color 0.1s ease;
        font-family: inherit;
      }

      rc-learn-more-modal .learn-more-footer button:hover {
        background-color: var(--rc-widget-brand-color-80);
      }

      rc-learn-more-modal .learn-more-footer {
        display: flex;
        justify-content: center;
      }

      rc-learn-more-modal .learn-more-group {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-bottom: 24px;
      }

      rc-learn-more-modal .learn-more-group-item {
        display: flex;
        gap: 32px;
        align-items: center;
      }

      rc-learn-more-modal .learn-more-group-icon-container {
        display: flex;
        padding: 32px;
        background-color: #f6f8f9;
        border-radius: var(--rc-widget-card-radius);
      }

      rc-learn-more-modal svg, rc-learn-more-modal img {
        height: 40px;
        width: 40px;
      }

      @media (max-width: 560px) {
        rc-learn-more-modal h1 {
          font-size: 26px;
          line-height: 32px;
          padding-bottom: 16px;
        }


      rc-learn-more-modal h2 {
        font-size: 16px;
        line-height: 24px;
      }

      rc-learn-more-modal p {
        font-size: 14px;
        line-height: 20px;
      }

      rc-learn-more-modal .learn-more-content {
        padding: 0;
      }

      rc-learn-more-modal svg, rc-learn-more-modal img {
        height: 32px;
        width: 32px;
      }

      rc-learn-more-modal .learn-more-group-item {
        gap: 16px;
      }

      rc-learn-more-modal .learn-more-group-icon-container {
        padding: 20px;
      }
    }
    </style>
    <div class="learn-more-content">
      <h1 class="learn-more-header">Great reasons to subscribe</h1>
        <div class="learn-more-group">
          <div class="learn-more-group-item">
            <div class="learn-more-group-icon-container"><span rc-calendar-icon></span></div>
            <div>
              <h2 style="margin:0;">Flexible frequency</h2>
              <p style="margin:0;">
                Not sure how much of something you need, or how often? Adjust quantities and frequencies any time.
              </p>
            </div>
          </div>
          <div class="learn-more-group-item">
            <div class="learn-more-group-icon-container">
              <span rc-bell-icon></span>
            </div>
            <div>
              <h2>Order reminders</h2>
              <p>
                We'll let you know before each shipment. Delay, reschedule or cancel if you need to - we’ll only bill you
                when your order ships.
              </p>
            </div>
          </div>
          <div class="learn-more-group-item">
            <div class="learn-more-group-icon-container">
              <span rc-phone-icon></span>
            </div>
            <div>
              <h2>You're in control</h2>
              <p>
                Add or remove subscriptions, cancel orders, and edit frequencies and quantities through our user-friendly
                customer portal.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="learn-more-footer"><button data-dismiss-modal>Got it</button></div>
    </div>
  `}var Rh=Object.defineProperty,Lh=Object.getOwnPropertyDescriptor,ru=(t,e,r,n)=>{for(var i=n>1?void 0:n?Lh(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Rh(e,r,i),i};let $r=class extends _e{constructor(){super(),this.showPoweredByRecharge=!1,this.style.visibility="hidden"}show(){this.style.visibility="visible",document.body.style.overflow="hidden",this.toggleAttribute("data-open",!0),this.setAttribute("tabindex","-1"),setTimeout(()=>{this.focus()})}dismiss(){var e,r,n,i;this.toggleAttribute("data-open",!1),document.body.style.overflow="",setTimeout(()=>{this.style.visibility="hidden"},300);const t=(i=(n=(r=(e=document.querySelector("recharge-subscription-widget"))==null?void 0:e.shadowRoot)==null?void 0:r.querySelector("rc-learn-more"))==null?void 0:n.shadowRoot)==null?void 0:i.querySelector(".rc-learn-more__trigger");!t||!(t instanceof HTMLElement)||t.focus()}connectedCallback(){super.connectedCallback(),this.querySelectorAll("[data-dismiss-modal]").forEach(n=>n.addEventListener("click",()=>this.dismiss())),this.addEventListener("keydown",function(i){var d,p,v;if(i.key!=="Tab")return;const o="a[href], button:not([disabled]), textarea, input, select",a=[...((d=this.shadowRoot)==null?void 0:d.querySelectorAll(o))??[],...this.querySelectorAll(o)],s=a[0],c=a[a.length-1],u=((v=(p=document.activeElement)==null?void 0:p.shadowRoot)==null?void 0:v.activeElement)??document.activeElement;!(s instanceof HTMLElement)||!(c instanceof HTMLElement)||!(u instanceof HTMLElement)||(u===s&&i.shiftKey&&(i.preventDefault(),c.focus()),u===c&&!i.shiftKey&&(i.preventDefault(),s.focus()))});const t=this.querySelector("[rc-calendar-icon]"),e=this.querySelector("[rc-bell-icon]"),r=this.querySelector("[rc-phone-icon]");t&&mr(jh,t),e&&mr(qh,e),r&&mr(Uh,r),setTimeout(()=>this.show())}footer(){return this.showPoweredByRecharge?C`
      <footer class="rc-modal-content__footer" aria-label="Powered by Recharge">Powered by ${Bh}</footer>
    `:E}render(){return C`
      <div
        class="rc-modal"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        aria-label="Great reasons to subscribe"
        part="${g.LearnMoreModal}"
      >
        <section class="rc-modal-content" part="${g.LearnMoreModalContent}">
          <div class="rc-modal__close-container" part="${g.LearnMoreModalContainer}">
            <button
              type="button"
              class="rc-modal__close"
              @click=${this.dismiss}
              aria-label="Close"
              part="${g.LearnMoreModalCloseButton}"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="32" height="32" rx="16" fill="white" />
                <path d="M10 10L22 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M10 22L22 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </button>
          </div>
          <div class="rc-modal-content__body" part="${g.LearnMoreModalContentBody}">
            <slot name="body"></slot>
          </div>
          ${this.footer()}
        </section>
      </div>
    `}};$r.shadowRootOptions={..._e.shadowRootOptions,delegatesFocus:!0};$r.styles=qe`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(25, 29, 72, 0.25);
      z-index: 99998;
      opacity: 0;
      transition: opacity 0.1s ease-in-out;
    }

    :host([data-open]) {
      opacity: 1;
    }

    .rc-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 99999;
      transition: transform 0.3s ease-in-out; /* Animation for slide up */
    }

    rc-learn-more-modal[data-open] .rc-modal {
      opacity: 1;
    }

    .rc-modal-content {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border-radius: var(--rc-widget-card-radius);
      max-width: 752px;
      max-height: calc(100vh - 48px);
      position: relative;
      overflow: hidden;
      margin: 24px;
      box-shadow: 0px 0px 32px 0px rgba(25, 29, 72, 0.2), 0px 2px 4px 0px rgba(25, 29, 72, 0.1);
    }

    .rc-modal-content__body {
      flex: 1 1 0%;
      padding: 0 20px 40px;
      overflow-y: auto;
      max-height: calc(100% - 72px);
    }

    .rc-modal-content__footer {
      display: flex;
      margin-top: 16px;
      background: var(--rc-widget-brand-color-10);
      color: var(--rc-widget-brand-color-50);
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px;
    }

    .rc-modal__close-container {
      flex: 0 1 0%;
      display: flex;
      justify-content: flex-end;
      padding: 24px 24px 0;
    }

    .rc-modal__close {
      height: 32px;
      width: 32px;
      border: none;
      background-color: transparent;
      color: var(--rc-widget-brand-color);
      cursor: pointer;
      padding: 0;
    }

    .rc-modal-content__footer svg {
      margin-left: 8px;
    }

    @media (max-width: 580px) {
      .rc-modal-content {
        margin: 0px;
        max-height: 100vh;
        height: 100%;
        width: 100vw;
      }

      :host {
        opacity: 1;
      }

      :host([data-open]) .rc-modal {
        transform: translateY(0);
      }

      .rc-modal {
        transform: translateY(100%);
      }
    }
  `;ru([te({attribute:"show-powered-by-recharge",type:Boolean})],$r.prototype,"showPoweredByRecharge",2);$r=ru([He("rc-learn-more-modal")],$r);const Bh=C`<svg
  width="75"
  height="18"
  viewBox="0 0 75 18"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0.386866 4.02513H4.03777C4.2089 4.02513 4.32299 4.11989 4.28496 4.30941L4.0758 5.48443C4.79837 4.44207 5.8442 3.81666 6.90905 3.81666C7.44147 3.81666 8.01193 4.02513 8.31617 4.30941C8.4873 4.47998 8.4873 4.57474 8.37321 4.7453L7.30837 6.24251C7.17526 6.43203 7.08019 6.41308 6.87102 6.31832C6.66185 6.22356 6.39564 6.14775 6.11041 6.14775C4.8364 6.14775 3.77156 6.98164 3.27716 9.50225L2.53557 13.3116C2.47853 13.558 2.28838 13.6148 2.1933 13.6148H0.253761C0.10164 13.6148 -0.031466 13.4822 0.00656423 13.3116L1.45171 5.99613L0.234746 4.29046C0.13967 4.15779 0.21573 4.02513 0.386866 4.02513Z"
    fill="#3901F1"
  />
  <path
    d="M7.38431 8.74417C7.87871 5.76871 10.0654 3.81666 12.9177 3.81666C15.808 3.81666 17.1771 6.10985 16.7588 8.61151C16.6637 9.25587 16.4355 9.76758 15.9031 9.76758H9.74219C9.79923 11.17 10.769 11.8333 12.062 11.8333C12.9177 11.8333 13.7163 11.5112 14.3248 11.1132C14.477 10.9995 14.6481 10.9426 14.7622 11.1132L15.4657 12.2124C15.5798 12.3829 15.5228 12.4967 15.3516 12.6483C14.4389 13.4822 12.9557 13.8612 11.6057 13.8612C8.56325 13.8612 6.90894 11.6249 7.38431 8.74417ZM14.553 8.0998C14.6481 6.6026 13.6213 5.97718 12.6325 5.97718C11.3395 5.97718 10.3317 6.84897 9.95135 8.0998H14.553Z"
    fill="#3901F1"
  />
  <path
    d="M25.9621 13.3873L28.1678 2.16777L27.084 0.727424C27.0269 0.632664 27.103 0.5 27.2361 0.5h20.6208C30.8109 0.5 30.906 0.613712 30.868 0.78428L29.8792 5.73074C30.6398 4.59363 31.7807 3.81659 33.1117 3.81659C35.2414 3.81659 36.4584 5.63598 36.002 7.87232L34.8992 13.3115C34.8611 13.52 34.69 13.6148 34.5569 13.6148h22.5603C32.3702 13.6148 32.2751 13.5011 32.3131 13.3115L33.3019 8.40297C33.5681 7.07633 33.2068 6.2614 32.3892 6.2614C30.868 6.2614 29.67 7.96708 29.1566 10.374L28.5101 13.3873C28.4911 13.5011 28.396 13.6148 28.2629 13.6148H26.1522C26.0381 13.6148 25.9431 13.5011 25.9621 13.3873Z"
    fill="#3901F1"
  />
  <path
    d="M36.6866 8.85788C37.181 5.6929 39.4248 3.81666 42.0489 3.81666C43.437 3.81666 44.5208 4.44207 44.9392 5.48443L45.1673 4.32836C45.2054 4.11989 45.3575 4.02513 45.5286 4.02513H47.3731C47.5823 4.02513 47.6583 4.15779 47.6203 4.32836L45.8519 13.3305C45.8139 13.5011 45.6998 13.6148 45.4906 13.6148H43.6271C43.456 13.6148 43.3609 13.5201 43.3989 13.3305L43.5701 12.4019C42.6954 13.3874 41.6115 13.8802 40.4326 13.8802C37.7515 13.8802 36.2493 11.6628 36.6866 8.85788ZM41.1932 11.587C42.7334 11.587 43.8743 10.2982 44.1025 8.78207C44.3307 7.26592 43.513 6.1288 42.0869 6.1288C40.5657 6.1288 39.4628 7.36068 39.2156 8.80103C38.9684 10.2603 39.71 11.587 41.1932 11.587Z"
    fill="#3901F1"
  />
  <path
    d="M47.05 13.3116L48.8374 4.27151C48.8754 4.11989 48.9515 4.02513 49.0656 4.02513H51.0812C51.2523 4.02513 51.3664 4.11989 51.3284 4.30941L51.1192 5.48443C51.8418 4.44207 52.8876 3.81666 53.9525 3.81666C54.4849 3.81666 55.0554 4.02513 55.3596 4.30941C55.5307 4.47998 55.5307 4.57474 55.4166 4.7453L54.3518 6.24251C54.2187 6.43203 54.1236 6.41308 53.9144 6.31832C53.7053 6.22356 53.4391 6.14775 53.1538 6.14775C51.8798 6.14775 50.815 6.98164 50.3206 9.50225L49.579 13.3116C49.522 13.558 49.3318 13.6148 49.2367 13.6148H47.2972C47.1451 13.6148 47.012 13.4822 47.05 13.3116Z"
    fill="#3901F1"
  />
  <path
    d="M53.6862 16.3629C53.5721 16.2681 53.5721 16.1165 53.6482 15.9838L54.5419 14.5814C54.637 14.4298 54.7891 14.3919 54.9032 14.4866C55.7779 15.0362 56.6336 15.3774 57.6794 15.3774C59.5048 15.3774 61.026 14.6382 61.5585 12.1934C60.5507 13.141 59.6189 13.5959 58.2118 13.5959C55.4546 13.5959 54.0095 11.2837 54.4658 8.70627C54.9792 5.78766 57.166 3.81666 59.9232 3.81666C61.4444 3.81666 62.4902 4.6695 62.8135 5.37072L63.0416 4.32836C63.0797 4.11989 63.2128 4.02513 63.3649 4.02513H65.2284C65.4185 4.02513 65.5136 4.13884 65.4756 4.32836L63.9163 12.2503C63.2318 15.6995 60.8359 17.5 57.5843 17.5C56.2152 17.5 54.675 17.1588 53.6862 16.3629ZM58.9344 11.3785C60.4746 11.3785 61.6155 10.1466 61.8437 8.68731C62.0719 7.22801 61.2542 6.1288 59.8281 6.1288C58.3069 6.1288 57.204 7.32277 56.9568 8.70627C56.7096 10.1087 57.4512 11.3785 58.9344 11.3785Z"
    fill="#3901F1"
  />
  <path
    d="M65.5517 8.74417C66.0461 5.76871 68.2328 3.81666 71.0851 3.81666C73.9754 3.81666 75.3445 6.10985 74.9262 8.61151C74.8311 9.25587 74.6029 9.76758 74.0705 9.76758H67.9096C67.9666 11.17 68.9364 11.8333 70.2294 11.8333C71.0851 11.8333 71.8837 11.5112 72.4922 11.1132C72.6444 10.9995 72.8155 10.9426 72.9296 11.1132L73.6331 12.2124C73.7472 12.3829 73.6902 12.4967 73.5191 12.6483C72.6063 13.4822 71.1231 13.8612 69.7731 13.8612C66.7307 13.8612 65.0763 11.6249 65.5517 8.74417ZM72.7204 8.0998C72.8155 6.6026 71.7887 5.97718 70.7999 5.97718C69.5069 5.97718 68.4991 6.84897 68.1188 8.0998H72.7204Z"
    fill="#3901F1"
  />
  <path
    d="M21.7092 13.8802C22.9832 13.8802 24.2382 13.5201 25.3791 12.4398C25.5503 12.2882 25.5693 12.0797 25.4552 11.966L24.4094 10.8099C24.3143 10.6962 24.1622 10.6962 24.0291 10.791C23.5917 11.1132 22.8882 11.4922 22.0515 11.4922C20.5493 11.4922 19.7126 10.3172 19.9028 8.83893C20.0929 7.37963 21.2529 6.20461 22.717 6.20461C23.5157 6.20461 24.0291 6.48889 24.5995 7.05745C24.7516 7.20906 24.8467 7.20906 25.0179 7.0764L26.3679 5.92033C26.501 5.80662 26.5391 5.67395 26.444 5.52234C25.6263 4.36627 24.3523 3.81666 22.9452 3.81666C20.112 3.81666 17.8111 5.92033 17.4308 8.70627C17.0125 11.7386 19.0281 13.8802 21.7092 13.8802Z"
    fill="#3901F1"
  />
</svg> `,jh=C`
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M37.3438 35.0313C37.3438 36.2646 36.2646 37.3437 35.0313 37.3437H4.96875C3.73542 37.3437 2.65625 36.2646 2.65625 35.0313V9.59375C2.65625 8.36042 3.73542 7.28125 4.96875 7.28125h25.0313C36.2646 7.28125 37.3438 8.36042 37.3438 9.59375V35.0313Z"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.65625 16.5312h27.3438"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.9062 10.6729V2.65625"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.0938 10.6729V2.65625"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.0561 22.2354C9.74776 22.2354 9.43942 22.5437 9.43942 22.8521C9.43942 23.1604 9.74776 23.4687 10.0561 23.4687"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.0561 22.2354C10.3645 22.2354 10.6728 22.5437 10.6728 22.8521C10.6728 23.1604 10.3645 23.4687 10.0561 23.4687"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.0561 30.4062C9.74776 30.4062 9.43942 30.7146 9.43942 31.0229C9.43942 31.3313 9.74776 31.6396 10.0561 31.6396"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.0561 30.4062C10.3645 30.4062 10.6728 30.7146 10.6728 31.0229C10.6728 31.3313 10.3645 31.6396 10.0561 31.6396"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.9228 22.2354C19.6144 22.2354 19.3061 22.5437 19.3061 22.8521C19.3061 23.1604 19.6144 23.4687 19.9228 23.4687"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.9228 22.2354C20.2311 22.2354 20.5394 22.5437 20.5394 22.8521C20.5394 23.1604 20.2311 23.4687 19.9228 23.4687"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.9228 30.4062C19.6144 30.4062 19.3061 30.7146 19.3061 31.0229C19.3061 31.3313 19.6144 31.6396 19.9228 31.6396"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.9228 30.4062C20.2311 30.4062 20.5394 30.7146 20.5394 31.0229C20.5394 31.3313 20.2311 31.6396 19.9228 31.6396"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29.7896 30.4062C29.4812 30.4062 29.1729 30.7146 29.1729 31.0229C29.1729 31.3313 29.4812 31.6396 29.7896 31.6396"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29.7896 30.4062C30.0979 30.4062 30.4062 30.7146 30.4062 31.0229C30.4062 31.3313 30.0979 31.6396 29.7896 31.6396"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29.7894 20.0769C28.2478 20.0769 27.0144 21.3103 27.0144 22.8519C27.0144 24.3936 28.2478 25.6269 29.7894 25.6269C31.3311 25.6269 32.5644 24.3936 32.5644 22.8519C32.5644 21.3103 31.3311 20.0769 29.7894 20.0769Z"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`,qh=C`
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25.974 10.4833C25.974 11.7099 26.4612 12.8863 27.3286 13.7537C28.196 14.621 29.3723 15.1083 30.599 15.1083C31.8256 15.1083 33.002 14.621 33.8693 13.7537C34.7367 12.8863 35.224 11.7099 35.224 10.4833C35.224 9.25667 34.7367 8.08028 33.8693 7.21292C33.002 6.34557 31.8256 5.85829 30.599 5.85829C29.3723 5.85829 28.196 6.34557 27.3286 7.21292C26.4612 8.08028 25.974 9.25667 25.974 10.4833Z"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.5677 35.0312C15.7635 35.6983 16.1701 36.284 16.7267 36.7006C17.2832 37.1173 17.9597 37.3424 18.6549 37.3424C19.3501 37.3424 20.0266 37.1173 20.5831 36.7006C21.1397 36.284 21.5463 35.6983 21.7421 35.0312"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.651 6.125V2.65625"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.249 19.9399C30.5404 28.8137 32.526 30.4063 32.526 30.4063H4.77603C4.77603 30.4063 7.08853 27.4524 7.08853 17.6875C7.09026 15.8761 7.51716 14.0904 8.33488 12.4741C9.15259 10.8577 10.3383 9.4559 11.7966 8.38138C13.2549 7.30686 14.945 6.58965 16.731 6.28745C18.5171 5.98526 20.3491 6.10651 22.0797 6.64147"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`,Uh=C`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M25.7813 21.1563V33.1319C25.7813 33.6852 25.6723 34.233 25.4605 34.7441C25.2487 35.2552 24.9384 35.7196 24.5471 36.1107C24.1558 36.5018 23.6913 36.812 23.1801 37.0236C22.669 37.2352 22.1211 37.344 21.5679 37.3437H11.4946C10.9414 37.344 10.3935 37.2352 9.88235 37.0236C9.37117 36.812 8.90668 36.5018 8.51541 36.1107C8.12414 35.7196 7.81376 35.2552 7.602 34.7441C7.39024 34.233 7.28125 33.6852 7.28125 33.1319V9.18212C7.28125 8.06467 7.72516 6.99298 8.51532 6.20282C9.30548 5.41266 10.3772 4.96875 11.4946 4.96875H18.8438"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M7.28125 30.4062H25.7813"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M31.7629 8.23708L20 20L14.2188 21.1562L15.375 15.375L27.1379 3.61208C27.7497 3.00053 28.5792 2.65698 29.4442 2.65698C30.3093 2.65698 31.1388 3.00053 31.7506 3.61208L31.7629 3.62596C32.066 3.92853 32.3065 4.2879 32.4706 4.68352C32.6347 5.07913 32.7192 5.50323 32.7192 5.93152C32.7192 6.35981 32.6347 6.7839 32.4706 7.17952C32.3065 7.57514 32.066 7.93451 31.7629 8.23708Z"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`;var Fh=Object.defineProperty,zh=Object.getOwnPropertyDescriptor,nu=(t,e,r,n)=>{for(var i=n>1?void 0:n?zh(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Fh(e,r,i),i};let _n=class extends _e{render(){return this.settings==null||!this.settings.benefitsImage?E:C`<img
      src="${this.settings.benefitsImage}"
      name="Benefits"
      alt="Benefits"
      part="${g.BenefitsImage}"
    />`}};_n.styles=qe`
    img {
      width: 100%;
      border-radius: var(--rc-widget-card-radius);
    }
  `;nu([xn({context:jr})],_n.prototype,"settings",2);_n=nu([He("rc-benefits-image")],_n);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=Ln(class extends Bn{constructor(t){var e;if(super(t),t.type!==Rn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var n,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((o=>o!==""))));for(const o in e)e[o]&&!((n=this.nt)!=null&&n.has(o))&&this.st.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.st)o in e||(r.remove(o),this.st.delete(o));for(const o in e){const a=!!e[o];a===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(a?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return lt}});var Hh=Object.defineProperty,Vh=Object.getOwnPropertyDescriptor,Zo=(t,e,r,n)=>{for(var i=n>1?void 0:n?Vh(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Hh(e,r,i),i};let Tr=class extends _e{constructor(){super(...arguments),this.unsafeHTML="",this.compact=!1}get classes(){return{compact:this.compact,"rc-benefits__list":!0}}render(){return C`<div class=${Lt(this.classes)} part="${g.BenefitsList}">
      ${Jo(this.unsafeHTML)}
    </div>`}};Tr.styles=[qe`
      :host {
        --rc-widget-bullet-icon-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEwLjkyMTUgMTQuNzExNUwxNS42MDc0IDEwLjA0NjVMMTQuODMzNCA5LjI3MjQ2TDEwLjkyMTUgMTMuMTYzNUw5LjE1MDcxIDExLjQxMzVMOC4zNzY2OSAxMi4xODc1TDEwLjkyMTUgMTQuNzExNVpNMTIuMDAxNSAxOS41ODMzQzEwLjk2MjEgMTkuNTgzMyA5Ljk4MTQ4IDE5LjM4NiA5LjA1OTcxIDE4Ljk5MTJDOC4xMzc5MiAxOC41OTY1IDcuMzMxMSAxOC4wNTM0IDYuNjM5MjUgMTcuMzYxOUM1Ljk0NzM5IDE2LjY3MDMgNS40MDQwMSAxNS44NjM5IDUuMDA5MSAxNC45NDI1QzQuNjE0MiAxNC4wMjEyIDQuNDE2NzUgMTMuMDQwOCA0LjQxNjc1IDEyLjAwMTRDNC40MTY3NSAxMC45NDgxIDQuNjE0MTEgOS45NjQwNiA1LjAwODgzIDkuMDQ5MjNDNS40MDM1NSA4LjEzNDM4IDUuOTQ2NjggNy4zMzEwNCA2LjYzODIxIDYuNjM5MTlDNy4zMjk3NSA1Ljk0NzMzIDguMTM2MiA1LjQwMzk0IDkuMDU3NTYgNS4wMDkwNEM5Ljk3ODkxIDQuNjE0MTQgMTAuOTU5MyA0LjQxNjY5IDExLjk5ODcgNC40MTY2OUMxMy4wNTE5IDQuNDE2NjkgMTQuMDM2IDQuNjE0MDUgMTQuOTUwOCA1LjAwODc3QzE1Ljg2NTcgNS40MDM0OSAxNi42NjkgNS45NDY2MiAxNy4zNjA5IDYuNjM4MTVDMTguMDUyNyA3LjMyOTY5IDE4LjU5NjEgOC4xMzI2NyAxOC45OTEgOS4wNDcwOEMxOS4zODU5IDkuOTYxNDkgMTkuNTgzNCAxMC45NDUzIDE5LjU4MzQgMTEuOTk4NkMxOS41ODM0IDEzLjAzOCAxOS4zODYgMTQuMDE4NiAxOC45OTEzIDE0Ljk0MDRDMTguNTk2NiAxNS44NjIxIDE4LjA1MzQgMTYuNjY5IDE3LjM2MTkgMTcuMzYwOEMxNi42NzA0IDE4LjA1MjcgMTUuODY3NCAxOC41OTYxIDE0Ljk1MyAxOC45OTFDMTQuMDM4NiAxOS4zODU5IDEzLjA1NDcgMTkuNTgzMyAxMi4wMDE1IDE5LjU4MzNaTTEyLjAwMDEgMTguNUMxMy44MDU2IDE4LjUgMTUuMzQwMyAxNy44NjgxIDE2LjYwNDIgMTYuNjA0MkMxNy44NjgxIDE1LjM0MDMgMTguNTAwMSAxMy44MDU2IDE4LjUwMDEgMTJDMTguNTAwMSAxMC4xOTQ0IDE3Ljg2ODEgOC42NTk3MiAxNi42MDQyIDcuMzk1ODNDMTUuMzQwMyA2LjEzMTk0IDEzLjgwNTYgNS41IDEyLjAwMDEgNS41QzEwLjE5NDUgNS41IDguNjU5NzggNi4xMzE5NCA3LjM5NTg5IDcuMzk1ODNDNi4xMzIgOC42NTk3MiA1LjUwMDA2IDEwLjE5NDQgNS41MDAwNiAxMkM1LjUwMDA2IDEzLjgwNTYgNi4xMzIgMTUuMzQwMyA3LjM5NTg5IDE2LjYwNDJDOC42NTk3OCAxNy44NjgxIDEwLjE5NDUgMTguNSAxMi4wMDAxIDE4LjVaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4K);
        --rc-widget-bullet-icon-image-color: var(--rc-widget-brand-color);
      }
    `,Zc];Zo([te({type:String})],Tr.prototype,"unsafeHTML",2);Zo([te({type:Boolean})],Tr.prototype,"compact",2);Tr=Zo([He("rc-benefits")],Tr);const Wh="product";function yr(t){var e,r;$("Emitting Recharge Analytics",t.event_name,t),(r=(e=jt())==null?void 0:e.analytics)==null||r.publish(t.event_name,t)}let Xt=null;const Qh=["shopify-accelerated-checkout button","shopify-accelerated-checkout #more-payment-options-link","shopify-accelerated-checkout shop-pay-wallet-button","shopify-accelerated-checkout shopify-google-pay-button","shopify-accelerated-checkout shopify-apple-pay-button"];function nn(t){function e(){var r,n;if(Xt==null){Pe("NOT EMITTING Recharge Analytics - Buy Now Click context doesn't exist");return}$("Emitting Recharge Analytics - Buy Now Click",JSON.stringify(Xt)),(n=(r=jt())==null?void 0:r.analytics)==null||n.publish(Xt.event_name,Xt)}if(Xt==null){let r=!1;Qh.forEach(n=>{const i=document.querySelector(n);i!=null&&(i.addEventListener("click",e),$("Added event listener to buy now button",n,i),r=!0)}),r||$("No buy now buttons found")}Xt=t}function Gh(t,e){const r=Vc("selling_plan",e);return t&&kn(t,n=>{r.value=String(n??""),$("Selling Plan Changed",n)}),r}function Yh(t,e,r){r&&(r.value=String(e));const n=r??Vc("quantity",e);return kn(t,i=>{var s;const o=X();if(!o)return n;const a=(s=o.product)==null?void 0:s.plans.find(c=>c.external_plan_id===i);if(!a){n.removeAttribute("value");return}a.product_quantity&&(n.value=String(a.product_quantity))}),n}async function Kh({initialVariantId:t,initialSellingPlanId:e,productId:r,quantityUpsell:n}){var i;try{const o=tc();Ts("designMode",((i=jt())==null?void 0:i.designMode)??!1),o&&(kf("theme",o),Ts("theme",o.baseThemeName||o.themeName),$("Current Theme",o));const a=await ch(t,r,e);if(!a)return;ah(r,a),$("Product Form",a),oh(r,a);const s=Gh(r,e);if(a.prepend(s),$("Selling plan input created",s),n!=null&&n.isEnabled){const c=Yc(a),u=Yh(r,n.initialQuantity,c);a.prepend(u)}return a}catch(o){st(o)}}function Jh(t,e){var r;try{const n=window;typeof n.RechargeSubscriptionWidgetReady=="function"&&($("Calling RechargeSubscriptionWidgetReady"),(r=n.RechargeSubscriptionWidgetReady)==null||r.call(n,{...e,events:th(t)}))}catch(n){dt("Error calling RechargeSubscriptionWidgetReady",n)}}function Ns(t,e){return zc(t)?e.quantity_upsell?!0:(Pe("Plan with `product_quantity` encountered, but no accompanying quantity upsell config",e),!1):!1}function Zh(t,e,r,n,i){if(!t.interval_unit||!t.product_quantity)return r;const o=`${t.interval_unit.toLowerCase()}${Number(t.order_interval_frequency)>1?"s":""}`,a=e[o].replace(G.Interval,String(t.order_interval_frequency)),s={[G.Amount]:String(t.product_quantity),[G.ShippingInterval]:a,[G.DiscountPrice]:i,[G.PrepaidUnitPrice]:n};return Object.entries(s).reduce((u,[d,p])=>hn(u,d,p),r)}var Xh=Object.defineProperty,eg=Object.getOwnPropertyDescriptor,Me=(t,e,r,n)=>{for(var i=n>1?void 0:n?eg(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Xh(e,r,i),i};const Is="https://admin.rechargeapps.com/admin/login?next=/merchant/grow/product-page/overview?onboarding_redirect",tg=qe`
  :host {
    display: block;
    text-align: left;
    max-width: 44rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    --rc-widget-brand-color: #121212;
    --rc-widget-brand-color-10: #e7e7e7;
    --rc-widget-brand-color-20: #d0d0d0;
    --rc-widget-brand-color-50: #898989;
    --rc-widget-brand-color-70: #595959;
    --rc-widget-brand-color-80: #414141;
    --rc-widget-brand-contrast-color: #ffffff;
    --rc-widget-text-color: #121212;
    --rc-widget-selected-bg-color: #ffffff;
    --rc-widget-selected-text-color: #121212;
    --rc-widget-badge-text-color: #ffffff;
    --rc-widget-badge-bg-color: #0f866a;
    --rc-widget-card-radius: 8px;
    --rc-widget-button-radius: 4px;
    --rc-widget-badge-radius: 4px;
    --rc-widget-field-radius: 4px;
  }
  .rc-widget__root {
    color: var(--rc-widget-text-color);
  }

  .rc-selection__root {
    font-size: 16px;
    line-height: 24px;
  }
  .compact.rc-selection__root {
    font-size: 14px;
    line-height: 20px;
  }

  input {
    clip: rect(0, 0, 0, 0);
    border-width: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  input:focus-visible + .rc-purchase-option__checked-indicator {
    border-radius: 50%;
    box-shadow: 0 0 0 2px white, 0 0 0 3px var(--rc-widget-brand-color-50);
  }

  .rc-purchase-option__checked-indicator {
    margin-right: 8px;
  }

  .rc-purchase-option__label.single-selection {
    cursor: auto;
  }
  .rc-purchase-option__label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    cursor: pointer;
    padding: 12px 20px 8px 20px;
  }
  .rc-purchase-option__label.rc-dynamic-pricing {
    padding-bottom: 0;
  }
  .compact .rc-purchase-option__label {
    font-size: 1em;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .compact [rc-not-selected] .rc-purchase-option__label {
    padding: 12px 20px;
  }
  .compact .rc-purchase-option__prices {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .compact rc-learn-more {
    line-height: 0;
    margin-left: 0.5rem;
  }

  .rc-purchase-option__selector {
    font-size: 1.25em;
    padding: 3px 0;
    font-weight: 600;
    display: flex;
    align-items: center;
  }

  .rc-purchase-option__sub-container {
    padding: 0 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .rc-purchase-option {
    border: 1px solid var(--rc-widget-brand-color-50);
    border-radius: var(--rc-widget-card-radius);
    position: relative;
  }

  .rc-purchase-option[rc-selected] {
    border-color: var(--rc-widget-brand-color);
    background: var(--rc-widget-selected-bg-color);
    color: var(--rc-widget-selected-text-color);
  }

  .rc-purchase-option__badge {
    position: absolute;
    top: -1em;
    right: 1em;
    background: var(--rc-widget-badge-bg-color);
    color: var(--rc-widget-badge-text-color);
    font-size: 12px;
    line-height: 12px;
    padding: 0.5em;
    border-radius: var(--rc-widget-badge-radius);
  }

  .rc-purchase-option:not(:last-child) {
    margin-bottom: 1em;
  }

  .rc-purchase-option__prices {
    margin-left: 2em;
  }

  .rc-purchase-option__dynamic-price {
    margin-left: 3.3em;
    padding-bottom: 0.5em;
  }

  .rc-price {
    font-weight: 600;
    line-height: 1em;
  }

  .text-muted {
    color: var(--rc-widget-brand-color-70);
    font-weight: 400;
  }
  .strike-through {
    text-decoration-line: line-through;
  }

  .rc-subscription-only .rc-purchase-option__label {
    cursor: initial;
  }

  [rc-subscription-only] .rc-purchase-option__prices {
    margin-left: 0;
  }

  [rc-subscription-only] .rc-purchase-option__dynamic-price {
    margin-left: 1.2em;
  }

  .visually-hidden {
    border: 0px;
    clip: rect(0px, 0px, 0px, 0px);
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0px;
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
  }

  .rc-purchase-option-group {
    border: 0;
    padding: 0;
    margin: 0;
    min-width: 0;
  }
`;let ve=class extends _e{constructor(){super(...arguments),this.preview="",this.state="init",this.purchaseOption=H.Subscription,this.settings=bn,this.styleBlock=null}get classes(){var t;return{compact:((t=this.settings)==null?void 0:t.displayMode)==="compact","rc-selection__root":!0}}get variantPlans(){return this.product?this.product.variantLevelPlans[this.variantId]||[]:[]}get variant(){return this.product?this.product.variants.find(t=>t.id===this.variantId):null}get selectedVariantPlan(){return this.variantPlans.find(t=>t.external_plan_id===this.sellingPlanId)||this.variantPlans[0]}get badgeLabel(){var e,r;if(!((e=this.settings)!=null&&e.badgeText)||!((r=this.product)!=null&&r.hasOnetimePlan))return"";let t=fh(this.settings.badgeText,this.variantPlans,this.product,this.variantId);return Number(this.selectedVariantPlan.discount_amount)>0&&(t=xo(t,this.selectedVariantPlan)),t}get maxDiscount(){return this.product?Jc(this.variantPlans,this.product,this.variantId):null}get isSelectedPlanPrepaidType(){var t;return["prepaid_v2","prepaid"].includes((t=this.selectedVariantPlan)==null?void 0:t.type)&&this.purchaseOption!==H.Onetime}get prices(){return this.product?Ko(this.product,this.variantId,this.sellingPlanId||this.variantPlans[0].external_plan_id):null}get staticPricingText(){var t,e,r;return(t=this.settings)!=null&&t.staticPricingText?xt(G.DiscountPrice,(e=this.prices)==null?void 0:e.discounted)(this.settings.staticPricingText):(r=this.prices)==null?void 0:r.discounted}get dynamicPricingText(){var t,e,r,n,i;if(!this.product)return null;if((t=this.settings)!=null&&t.dynamicPricingText){const o=gh(this.selectedVariantPlan),a=hh(this.selectedVariantPlan),s=yh(this.selectedVariantPlan)||((e=this.prices)==null?void 0:e.discounted),c=_h(this.selectedVariantPlan,this.product,this.variantId.toString(),(n=(r=X())==null?void 0:r.shop)==null?void 0:n.currency),u=mh(this.selectedVariantPlan,this.settings.frequencyIntervalTranslation,a);return dh([xt(G.InitialDiscountAmount,(i=this.prices)==null?void 0:i.discounted),xt(G.InitialDiscountPercentage,o),xt(G.RecurringDiscountPercentage,s),xt(G.RecurringDiscountAmount,c),xt(G.RecurringDiscountCount,a.toString()),xt(G.RecurringDiscountCountWithInterval,u)])(this.settings.dynamicPricingText)}}async connectedCallback(){var t,e,r,n,i,o,a,s,c,u,d,p;try{super.connectedCallback();const v=X();if(Df(((t=v==null?void 0:v.shop)==null?void 0:t.identifier)??"UNKNOWN"),!this.productId)throw new Error("A productId is required to render the subscription widget");if(!this.defaultVariantId)throw new Error("A default variant id is required to render the subscription widget");if(!this._isConfigScriptTagValid()||!this._isWidgetVisibleInDOM()||v==null)return;this.defaultVariantId&&(this.variantId=this.defaultVariantId);const{config:b,plan_configs:O}=await Jf(v,this.productId,this.preview);if(this.settings=b,this.planConfigs=O,this.settings==null){$("No settings configuration found");return}Fe!=null&&Fe.settings&&($("Using test settings",Fe.settings),this.settings=De(this.settings,Fe.settings));const P=Zu(this.settings.overrideSettingKey);P&&($("Using merchant overrides",P),this.settings=De(this.settings,P)),$("Settings configuration used",this.settings),this.purchaseOption=this.settings.defaultSelection,await this.fetchProduct(v);const f=(e=this.product)==null?void 0:e.plans.find(x=>x.external_plan_id===this.sellingPlanId),w={productId:this.productId,initialVariantId:this.variantId,initialSellingPlanId:this.sellingPlanId,quantityUpsell:this.product?{isEnabled:Ns(this.product,this.settings),initialQuantity:(f==null?void 0:f.product_quantity)??1}:void 0};if(this.preview||(this.productForm=await Kh(w)),this._setupListeners(),this.defaultSellingPlanId?this.variantPlans.find(x=>x.external_plan_id===this.defaultSellingPlanId)==null?Pe("The default selling plan id does not exist in the variant plans. Defaulting to first plan",this.defaultSellingPlanId):($("Using the default selling plan assigned to the variant.",this.defaultSellingPlanId),this._handleSellingPlanChange(this.defaultSellingPlanId)):$("No default selling plan id provided. Defaulting to first plan."),!this.preview){const{order_frequency:x,charge_frequency:M,unit:A}=this._findOrderIntervalFrequency(this.sellingPlanId);if(this.product&&!Zt(Ze.RechargePreview,this.settings)){yr({event_name:Je.Load,rc_widget_config_id:((r=this.settings)==null?void 0:r.config_id)??null,ab_split_id:((n=this.settings)==null?void 0:n.ab_split_id)??null,widget_flow_id:((i=this.settings)==null?void 0:i.widget_flow_id)??null,external_product_id:this.productId.toString(),external_variant_id:this.variantId.toString(),widget_embed_template_name:(o=X())==null?void 0:o.shop.template,external_market_id:(a=X())==null?void 0:a.shop.market_id.toString(),onetime_item_type_option_displayed:this.product.hasOnetimePlan,subscription_item_type_option_displayed:this.variantPlans.some(I=>I.type==="subscription"),prepaid_subscription_item_type_option_displayed:this.variantPlans.some(I=>I.type==="prepaid_v2"||I.type==="prepaid"),preselected_item_type_option:this.isSelectedPlanPrepaidType?H.Prepaid:this.purchaseOption}),yr({event_name:Je.SellingPlanChanged,rc_widget_config_id:this.settings.config_id??null,order_interval_frequency:x,charge_interval_frequency:M,interval_unit:A,external_plan_id:this.sellingPlanId??null});try{nn({event_name:Je.BuyNow,widget_config:((s=this.settings)==null?void 0:s.config_id)??null,ext_market:(c=X())==null?void 0:c.shop.market_id.toString(),template_name:(u=X())==null?void 0:u.shop.template,item_type:this.isSelectedPlanPrepaidType?H.Prepaid:this.purchaseOption,ab_split_id:((d=this.settings)==null?void 0:d.ab_split_id)??null,widget_flow_id:((p=this.settings)==null?void 0:p.widget_flow_id)??null})}catch(I){st(I)}}}$("Widget created",{productId:this.productId,product:this.product,variantId:this.variantId,sellingPlanId:this.sellingPlanId}),Jh(this.productId,{product:this.product,variantId:this.variantId,sellingPlanId:this.sellingPlanId,purchaseOption:this.purchaseOption,settings:this.settings,planConfigs:this.planConfigs})}catch(v){st(v)}}_setupListeners(){_o(this.productId,t=>{var i,o;if(!this.product)return;const e=this.variantId,r=this.product.variantLevelPlans[e],n=r==null?void 0:r.find(a=>a.external_plan_id===this.sellingPlanId);if(this.variantId=t||Number(this.product.variants[0].external_variant_id),this.variantPlans.length===0&&!this.product.hasOnetimePlan&&$("The product does not have any plans or onetime."),this.purchaseOption===H.Subscription&&this.variantPlans.length===0)$("Selected product does not have subscription plans. Defaulting to onetime",this.productId),this._handlePurchaseOptionChange(H.Onetime);else if(e&&(r==null?void 0:r.length)===0&&this.variantPlans.length>0&&((i=this.settings)==null?void 0:i.defaultSelection)===H.Subscription)$("Previous product does not have subscription plans but current product does. defaulting to subscription"),this._handlePurchaseOptionChange(H.Subscription);else if(this.purchaseOption===H.Onetime&&!((o=this.variant)!=null&&o.hasOnetimePlan))$("Selected product does not have an onetime plan. Defaulting to subscription",this.productId),this._handlePurchaseOptionChange(H.Subscription);else if(this.purchaseOption===H.Subscription&&(!this.sellingPlanId||(n==null?void 0:n.type)!=="prepaid_v2"&&!this.variantPlans.map(a=>a.external_plan_id).includes(this.sellingPlanId)))$("Selected selling plan not found in variant plans. Defaulting to first plan",this.sellingPlanId),this._handlePurchaseOptionChange(H.Subscription);else if(this.purchaseOption===H.Subscription&&(n==null?void 0:n.type)==="prepaid_v2"&&this.sellingPlanId&&!this.variantPlans.map(a=>a.external_plan_id).includes(this.sellingPlanId)){$("Selected variant plan is prepaid_v2. Trying to find a similar plan",this.selectedVariantPlan);const a=this.variantPlans.find(s=>s.type==="prepaid_v2"&&s.order_interval_frequency===n.order_interval_frequency&&s.charge_interval_frequency===n.charge_interval_frequency&&s.interval_unit===n.interval_unit);a?($("Found a similar plan. Defaulting to it",a),this._handleSellingPlanChange(a.external_plan_id)):($("No similar plan found. Defaulting to first plan",this.variantPlans[0]),this._handlePurchaseOptionChange(H.Subscription))}}),Hc(this.productId,t=>{var e,r,n,i,o;if(this.product&&!this.preview&&!Zt(Ze.RechargePreview,this.settings))try{nn({event_name:Je.BuyNow,widget_config:((e=this.settings)==null?void 0:e.config_id)??null,ext_market:(r=X())==null?void 0:r.shop.market_id.toString(),template_name:(n=X())==null?void 0:n.shop.template,item_type:this.isSelectedPlanPrepaidType?H.Prepaid:this.purchaseOption,ab_split_id:((i=this.settings)==null?void 0:i.ab_split_id)??null,widget_flow_id:((o=this.settings)==null?void 0:o.widget_flow_id)??null})}catch(a){st(a)}}),_o(this.productId,t=>{var e,r,n,i,o,a;if(this.product&&!this.preview&&!Zt(Ze.RechargePreview,this.settings)){yr({event_name:Je.VariantChanged,rc_widget_config_id:((e=this.settings)==null?void 0:e.config_id)??null,external_product_id:this.productId.toString(),external_variant_id:t?t.toString():""});try{nn({event_name:Je.BuyNow,widget_config:((r=this.settings)==null?void 0:r.config_id)??null,ext_market:(n=X())==null?void 0:n.shop.market_id.toString(),template_name:(i=X())==null?void 0:i.shop.template,item_type:this.isSelectedPlanPrepaidType?H.Prepaid:this.purchaseOption,ab_split_id:((o=this.settings)==null?void 0:o.ab_split_id)??null,widget_flow_id:((a=this.settings)==null?void 0:a.widget_flow_id)??null})}catch(s){st(s)}}}),kn(this.productId,t=>{var i,o,a,s,c,u;if(this.productForm){const d=this.variantPlans.find(v=>v.external_plan_id===t),p=Yc(this.productForm);p&&d&&d.product_quantity&&(p.value=String(d.product_quantity))}const{order_frequency:e,charge_frequency:r,unit:n}=this._findOrderIntervalFrequency(t);if(this.product&&!this.preview&&!Zt(Ze.RechargePreview,this.settings)){yr({event_name:Je.SellingPlanChanged,rc_widget_config_id:((i=this.settings)==null?void 0:i.config_id)??null,order_interval_frequency:e,charge_interval_frequency:r,interval_unit:n,external_plan_id:t??null});try{nn({event_name:Je.BuyNow,widget_config:((o=this.settings)==null?void 0:o.config_id)??null,ext_market:(a=X())==null?void 0:a.shop.market_id.toString(),template_name:(s=X())==null?void 0:s.shop.template,item_type:this.isSelectedPlanPrepaidType?H.Prepaid:this.purchaseOption,ab_split_id:((c=this.settings)==null?void 0:c.ab_split_id)??null,widget_flow_id:((u=this.settings)==null?void 0:u.widget_flow_id)??null})}catch(d){st(d)}}})}_findOrderIntervalFrequency(t){const e=this.variantPlans.find(r=>r.external_plan_id===t);return e?{order_frequency:e.order_interval_frequency,charge_frequency:e.charge_interval_frequency,unit:e.interval_unit}:{order_frequency:null,charge_frequency:null,unit:null}}_handleSellingPlanChange(t){var n;const e=this.variantPlans.find(i=>i.external_plan_id===this.sellingPlanId),r=this.variantPlans.find(i=>i.external_plan_id===Number(t));this.sellingPlanId=t?Number(t):void 0,Xf(this.productId,this.sellingPlanId,this.variantPlans.find(i=>i.external_plan_id===this.sellingPlanId)),(e==null?void 0:e.type)!==(r==null?void 0:r.type)&&!this.preview&&!Zt(Ze.RechargePreview,this.settings)&&yr({event_name:Je.TypeChanged,rc_widget_config_id:((n=this.settings)==null?void 0:n.config_id)??null,selected_item_type_option:this.isSelectedPlanPrepaidType?H.Prepaid:this.purchaseOption})}_handlePurchaseOptionChange(t){this.purchaseOption=t,$("Purchase option changed",this.purchaseOption),Ds(this.productId,t),this._handleSellingPlanChange(this.purchaseOption===H.Subscription?this.variantPlans[0].external_plan_id:void 0)}async fetchProduct({shop:t}){var i;const e=X();this.state="loading";let r;if(this.preview){const o=el(this.preview);Uf(o)?r=o:this.product=o,$("Previewing product",this.preview,this.product)}else try{yc({storeIdentifier:t.identifier,environment:Xs?"stage":"prod",appName:"rc_internal-subscription-widget"}),$("Fetching product from the cdn",this.productId),r=await gc(this.productId,{version:"2022-06"})}catch(o){const a=o instanceof Error?{name:o.name,message:o.message,stack:o.stack,productId:`product/2022-06/${this.productId}.json`}:{message:"Unknown fetch error"};je("Error fetching product from the cdn",{error:a},"warning"),this.state="error";return}if(r&&(r.plans.some(o=>o.type!=="onetime"&&!o.external_plan_id)&&je("Product plan record has no external_plan_id",{inputs:{productId:r.external_product_id}},"warning"),this.product=zf(r,this.planConfigs,e==null?void 0:e.shopifyPlans)),!this.product){this.state="error",je("Product not found",{error:{productId:this.productId,cdnProduct:r,previewType:this.preview}},"warning");return}!this.product.hasOnetimePlan&&((i=this.settings)==null?void 0:i.defaultSelection)===H.Onetime&&(this.purchaseOption=H.Subscription);const n=this.product.variantLevelPlans[this.variantId];if(n==null){je("There are no variants for this product",{details:{productId:this.productId,variantId:this.variantId}},"critical"),this.state="error";return}!this.sellingPlanId&&n.length>0&&this.purchaseOption===H.Subscription&&this._handleSellingPlanChange(n[0].external_plan_id),this.state="ready"}_getOnetime(){var a;if(!((a=this.product)!=null&&a.hasOnetimePlan))return null;const t=wo(this.variantId,this.product),e=this.purchaseOption===H.Onetime;if(this.settings==null)return E;const r=e?` ${g.PurchaseOptionSelected}`:"",n=!vo(this.settings.onetimeDrawbacks),i=this.settings.onlyDisplayBenefitsOnSelected!==!1,o=n&&(i?e:!0);return C`
      <div
        class="rc-purchase-option rc-selection__onetime"
        part="${g.PurchaseOption} ${g.OnetimePurchaseOption}${r}"
        ?rc-selected=${e}
        ?rc-not-selected=${!e}
      >
        <label class="rc-purchase-option__label" part="${g.OnetimePurchaseOptionLabel}">
          <div
            class="rc-purchase-option__selector"
            part="${g.PurchaseOptionSelector} ${g.OnetimePurchaseOptionSelector}"
          >
            <input
              type="radio"
              part="${g.OnetimePurchaseOptionInput}"
              name="purchaseOption"
              value="onetime"
              class="rc-purchase-option__input"
              .checked=${e}
              @input=${s=>{this._handlePurchaseOptionChange(s.target.value)}}
              aria-details=${o?"rc-drawbacks":E}
            />
            <rc-radio-icon
              part="${g.OnetimePurchaseOptionCheckedIndicator}"
              ?checked=${e}
              class="rc-purchase-option__checked-indicator"
            ></rc-radio-icon>
            ${this.settings.onetimeLabel}
          </div>
          <div class="rc-purchase-option__prices" part="${g.OnetimePurchaseOptionPrices}">
            <span class="rc-price" part="${g.OnetimePurchaseOptionPrice}">${t}</span>
          </div>
        </label>
        ${o?C`<div class="rc-purchase-option__sub-container" part="${g.OnetimePurchaseOptionSubContainer}">
              <rc-onetime-drawbacks
                id="rc-drawbacks"
                .unsafeHTML=${hn(this.settings.onetimeDrawbacks,G.MaxDiscount,String(this.maxDiscount))}
                .compact=${this.settings.displayMode==="compact"}
                exportparts="${g.Drawbacks}"
              ></rc-onetime-drawbacks>
            </div>`:null}
      </div>
    `}_getSubscription(){var b,O,P,f,w;if(!this.product)return null;const t=this.purchaseOption===H.Subscription,e=!this.product.hasOnetimePlan,r=this.selectedVariantPlan.type==="prepaid_v2",n=((b=this.prices)==null?void 0:b.unit)!==((O=this.prices)==null?void 0:O.discounted)&&Number(this.selectedVariantPlan.discount_amount)>0,i=wo(this.variantId,this.product),o=((P=this.selectedVariantPlan.pricing_progression)==null?void 0:P.length)>0;if(this.settings==null)return E;const a=t?` ${g.PurchaseOptionSelected}`:"",s={"rc-purchase-option__label":!0,"single-selection":e,"rc-dynamic-pricing":o},c=!vo(this.settings.benefits),u=this.settings.onlyDisplayBenefitsOnSelected!==!1,d=c&&(u?t:!0),p=!!this.settings.benefitsImage&&(u?t:!0),v=!!this.badgeLabel;return C`
      <div
        class="rc-purchase-option rc-purchase-option__subscription"
        part="${g.PurchaseOption} ${g.SubscriptionPurchaseOption}${a}"
        ?rc-selected=${t}
        ?rc-not-selected=${!t}
      >
        ${v?C`<span
              id="rc-subscription-badge"
              class="rc-purchase-option__badge"
              part="${g.SubscriptionBadge}"
              >${this.badgeLabel}</span
            >`:null}
        <label class=${Lt(s)} part="${g.SubscriptionPurchaseOptionLabel}">
          <div
            class="rc-purchase-option__selector"
            part="${g.PurchaseOptionSelector} ${g.SubscriptionPurchaseOptionSelector}"
          >
            <input
              .hidden=${e}
              part="${g.SubscriptionPurchaseOptionInput}"
              type="radio"
              name="purchaseOption"
              value="subscription"
              class="rc-purchase-option__input"
              .checked=${t}
              @change=${x=>this._handlePurchaseOptionChange(x.target.value)}
              aria-details=${d?"rc-benefits":E}
              aria-describedby=${v?"rc-subscription-badge":E}
            />
            ${this.product.hasOnetimePlan?C`<rc-radio-icon
                  part="${g.SubscriptionPurchaseOptionCheckedIndicator}"
                  ?checked=${t}
                  class="rc-purchase-option__checked-indicator"
                ></rc-radio-icon>`:null}
            ${Number(this.selectedVariantPlan.discount_amount)?this.settings.subscriptionWithDiscountLabel:this.settings.subscriptionWithoutDiscountLabel}
            ${this.settings.displayMode==="compact"?this._getLearnMoreLink():null}
          </div>
          <div class="rc-purchase-option__prices" part="${g.SubscriptionPurchaseOptionPrices}">
            ${n&&this.settings.showStrikethroughPrice&&(!r||this.settings.displayMode!=="compact")?C`
                  <span class="visually-hidden">Original price strikethrough: </span>
                  <span
                    class="rc-price strike-through text-muted"
                    part="${g.SubscriptionPurchaseOptionOriginalPrice}"
                  >
                    ${r?i:(f=this.prices)==null?void 0:f.unit}
                  </span>
                `:null}
            ${r?C` <span class="visually-hidden">Unit price per shipment: </span>
                  <span class="rc-price text-muted" part="${g.SubscriptionPurchaseOptionUnitPrice}">
                    ${this.settings.frequencyIntervalTranslation.prepaidUnit.replace(G.PrepaidUnitPrice,((w=this.prices)==null?void 0:w.unit)??"")}</span
                  >`:null}
            ${o&&this.dynamicPricingText?E:C`<span class="rc-price" part="${g.SubscriptionPurchaseOptionDiscountedPrice}">
                  ${n?C`<span class="visually-hidden">, Discounted price:</span>`:E}
                  ${this.staticPricingText}
                </span>`}
          </div>
        </label>
        ${o&&this.dynamicPricingText?C`<div
              class="rc-purchase-option__dynamic-price"
              part="${g.SubscriptionPurchaseOptionDynamicPrice}"
            >
              ${this.dynamicPricingText}
            </div>`:E}
        ${p||d||t?C`<div
              class="rc-purchase-option__sub-container"
              part="${g.SubscriptionPurchaseOptionSubContainer}"
            >
              ${p?C`<rc-benefits-image exportparts="${g.BenefitsImage}"></rc-benefits-image>`:null}
              ${d?C`<rc-benefits
                    id="rc-benefits"
                    exportparts="${g.BenefitsList}"
                    .unsafeHTML=${hn(this.settings.benefits,G.Discount,Do(this.selectedVariantPlan))}
                    .compact=${this.settings.displayMode==="compact"}
                  ></rc-benefits>`:null}
              ${t&&this.settings.displayMode!=="compact"?this._getLearnMoreLink():null}
              ${t?C`<rc-selling-plans
                    exportparts="${g.PlansButton}, ${g.PlansButtonSelected}, ${g.PlansButtonGroup}, ${g.PlansButtonList}, ${g.PlansLabel}, ${g.PlansRadioButton}, ${g.PlansButtonDiscount}, ${g.PlansButtonInterval}, ${g.PlansDropdown}, ${g.PlansSelect}"
                    .sellingPlans=${this.variantPlans}
                    .value=${this.sellingPlanId}
                    @planChange=${x=>this._handleSellingPlanChange(x.detail.sellingPlanId)}
                  ></rc-selling-plans>`:null}
            </div>`:null}
      </div>
    `}_getLearnMoreLink(){var t;return(t=this.settings)!=null&&t.learnMoreText?C`<rc-learn-more
          exportparts="${g.LearnMoreModalContent}, ${g.LearnMoreModal}, ${g.LearnMoreModalCloseButton}, ${g.LearnMoreModalContentBody}, ${g.LearnMoreModalContainer}, ${g.LearnMore}, ${g.LearnMoreTrigger}, ${g.LearnMoreTriggerCompact}"
        ></rc-learn-more>`:E}_getDesignModeBanner(){var t;return this.preview?E:this.settings!=null&&Zt(Ze.RechargePreview,this.settings)?C`<rc-design-mode-banner
        exportparts="${g.DesignModeBanner}, ${g.DesignModeBannerContent}, ${g.DesignModeBannerClose}, ${g.DesignModeBannerIcon}"
        type="info"
      >
        This is a preview of the widget, not a live version.
      </rc-design-mode-banner>`:!((t=jt())!=null&&t.designMode)||this.settings==null?E:C`<rc-design-mode-banner
      exportparts="${g.DesignModeBanner}, ${g.DesignModeBannerContent}, ${g.DesignModeBannerClose}, ${g.DesignModeBannerIcon}"
      type="warning"
    >
      <div>
        This subscription widget is managed in Recharge. To modify this widget, please update the settings on your
        <a href="${Is}" target="_blank">Recharge Product Page</a>.${this.settings.use_theme_styles?" Colors can be modified in your Shopify theme settings.":E}
      </div>
    </rc-design-mode-banner>`}quantityUpsellTemplate(){var e;const t=[g.QuantityUpsellOption,g.QuantityUpsellOptionCheckedIndicator,g.QuantityUpsellOptionInput,g.QuantityUpsellOptionLabel,g.QuantityUpsellOptionSelected,g.QuantityUpsellOptionSelector,g.QuantityUpsellSavingsBadge,g.QuantityUpsellRecommendedBadge,g.QuantityUpsellBestValueBadge,g.BenefitsList,g.BenefitsImage,g.Drawbacks,g.LearnMore,g.LearnMoreTrigger,g.LearnMoreTriggerCompact,g.SubscriptionBadge].join(", ");return C`
      <div class=${Lt(this.classes)} part="${g.ContentWrap}" data-testid="quantity-upsell-container">
        <recharge-quantity-upsell
          .product=${this.product}
          .variantId=${this.variantId}
          .variantPlans=${this.variantPlans}
          .initialPlanId=${this.sellingPlanId}
          .hasOnetimePlan=${(e=this.product)==null?void 0:e.hasOnetimePlan}
          .maxDiscount=${this.maxDiscount}
          @quantityUpsellChange=${r=>{const n=r.detail,i=n.purchaseOption;this.purchaseOption!==i&&(this.purchaseOption=i,$("Purchase option changed",i),Ds(this.productId,this.purchaseOption)),this._handleSellingPlanChange(n.planId)}}
          exportparts="${t}"
        />
      </div>
    `}_applyCustomCssToRoot(){var t,e;try{const r=this.parentElement;this.styleBlock==null&&r&&r instanceof HTMLElement&&((t=this.settings)!=null&&t.customCSS)&&(this.styleBlock=document.createElement("style"),this.styleBlock.append(document.createTextNode(this.settings.customCSS)),r.append(this.styleBlock),$("Custom CSS applied to root",this.settings.customCSS))}catch(r){dt("Error applying custom CSS to root",r,(e=this.settings)==null?void 0:e.customCSS),st(r)}}_isConfigScriptTagValid(){var e,r,n,i,o,a,s,c;const t=X();return t==null?(this.preview?$("A subscription widget config is required to render the subscription widget. Please add a subscription widget config to your theme."):je("A subscription widget config is required to render the subscription widget. Please add a subscription widget config to your theme.",{scriptElement:{configScript:((r=(e=this.parentElement)==null?void 0:e.querySelector("script#SubscriptionWidgetConfig__shopify_settings"))==null?void 0:r.innerText)||"NO SCRIPT TAG FOUND!"}},"critical"),!1):t.shop==null?(je("The shopify context was not loaded correctly and the widget is not loading correctly",{scriptElement:{configScript:((i=(n=this.parentElement)==null?void 0:n.querySelector("script#SubscriptionWidgetConfig__shopify_settings"))==null?void 0:i.innerText)||"NO SCRIPT TAG FOUND!"}},"critical"),!1):(t.preview_config===void 0&&je("The preview config is not properly formatted",{scriptElement:{previewScript:((a=(o=this.parentElement)==null?void 0:o.querySelector("script#SubscriptionWidgetConfig__preview_config"))==null?void 0:a.innerText)||"NO SCRIPT TAG FOUND!"}},"warning"),t.configs===void 0?(je("The config is not properly formatted and the widget is not loading correctly",{scriptElement:{configScript:((c=(s=this.parentElement)==null?void 0:s.querySelector("script#SubscriptionWidgetConfig__configs"))==null?void 0:c.innerText)||"NO SCRIPT TAG FOUND!"}},"critical"),!1):!0)}_isWidgetVisibleInDOM(){const t=document.body.contains(this);return t||Pe("The widget element is not part of the document DOM. The widget will not be displayed"),t}render(){var t;try{if(this.settings==null){if((t=jt())!=null&&t.designMode)return C`<rc-design-mode-banner
            exportparts="${g.DesignModeBanner}, ${g.DesignModeBannerContent}, ${g.DesignModeBannerClose}, ${g.DesignModeBannerIcon}"
            type="warning"
          >
            <div>
              Please <a href="${Is}" target="_blank">activate a subscription widget</a> for this product
              template in Recharge to display subscription options.
            </div>
          </rc-design-mode-banner>`;{const r=this.closest(".shopify-block.recharge-subscription-widget");return r&&r instanceof HTMLElement&&(r.style.display="none"),null}}if(this.state==="init"||this.state==="error")return null;if(this._applyCustomCssToRoot(),this.state==="loading")return C`<div
          data-testid="style-root"
          style="${Po(yo(this.settings))}"
          part="${g.WidgetRoot}"
        >
          <rc-loading exportparts="${g.Loading}, ${g.LoadingIcon}"></rc-loading>
        </div>`;if(!this.product)return Pe("The product is not loaded. The widget will not be displayed"),null;if(this.variantPlans.length===0)return $("The selected variant does not have any plans. The widget will not be displayed"),null;let e;return Ns(this.product,this.settings)?e=this.quantityUpsellTemplate():this.selectedVariantPlan.type==="prepaid"?e=C`
          <div part="${g.PrepaidPlanTitle}">${this.selectedVariantPlan.title}</div>
          ${this._getLearnMoreLink()}
        `:this.settings.firstSelectionOption===H.Onetime?e=C`
          <div
            class=${Lt(this.classes)}
            ?rc-subscription-only=${!this.product.hasOnetimePlan}
            part="${g.ContentWrap}"
          >
            ${this._getOnetime()}${this._getSubscription()}
          </div>
        `:e=C`
          <div
            class=${Lt(this.classes)}
            ?rc-subscription-only=${!this.product.hasOnetimePlan}
            part="${g.ContentWrap}"
          >
            ${this._getSubscription()}${this._getOnetime()}
          </div>
        `,C`
        <div
          class="rc-widget__root"
          data-testid="style-root"
          style="${Po(yo(this.settings))}"
          part="${g.WidgetRoot}"
        >
          ${this._getDesignModeBanner()}
          <fieldset class="${g.PurchaseOptionGroup}" part="${g.PurchaseOptionGroup}">
            <legend class="visually-hidden">Purchase options</legend>
            ${e}
          </fieldset>
        </div>
      `}catch(e){return st(e),E}}};ve.styles=tg;Me([te({attribute:"product-id",type:Number})],ve.prototype,"productId",2);Me([te({attribute:"default-variant-id",type:Number})],ve.prototype,"defaultVariantId",2);Me([te({attribute:"default-selling-plan-id",type:Number})],ve.prototype,"defaultSellingPlanId",2);Me([te({attribute:"preview",type:String})],ve.prototype,"preview",2);Me([tt()],ve.prototype,"state",2);Me([tt()],ve.prototype,"sellingPlanId",2);Me([tt()],ve.prototype,"variantId",2);Me([tt()],ve.prototype,"purchaseOption",2);Me([Zs({context:jr}),tt()],ve.prototype,"settings",2);Me([Zs({context:Wh}),tt()],ve.prototype,"product",2);Me([tt()],ve.prototype,"planConfigs",2);Me([tt()],ve.prototype,"styleBlock",2);Me([tt()],ve.prototype,"productForm",2);ve=Me([He("recharge-subscription-widget")],ve);var rg=Object.defineProperty,ng=Object.getOwnPropertyDescriptor,iu=(t,e,r,n)=>{for(var i=n>1?void 0:n?ng(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&rg(e,r,i),i};let vn=class extends _e{constructor(){super(...arguments),this.isChecked=!1}render(){return this.isChecked?C`<svg width="1.15em" height="1.15em" viewBox="0 0 24 24" fill="none" class="rc-checked-icon">
        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="none" />
        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="var(--rc-widget-brand-color)" />
        <circle cx="12" cy="12" r="6" fill="var(--rc-widget-brand-color)" />
      </svg> `:C`<svg width="1.15em" height="1.15em" viewBox="0 0 24 24" fill="none" class="rc-unchecked-icon">
      <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="none" />
      <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="var(--rc-widget-brand-color-50)" />
    </svg>`}};vn.styles=qe`
    :host {
      display: flex;
    }
  `;iu([te({type:Boolean,attribute:"checked"})],vn.prototype,"isChecked",2);vn=iu([He("rc-radio-icon")],vn);var ig=Object.defineProperty,og=Object.getOwnPropertyDescriptor,Xo=(t,e,r,n)=>{for(var i=n>1?void 0:n?og(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&ig(e,r,i),i};let Dr=class extends _e{constructor(){super(...arguments),this.unsafeHTML="",this.compact=!1}get classes(){return{compact:this.compact,"rc-benefits__list":!0}}render(){return C`
      <div class=${Lt(this.classes)} part="${g.Drawbacks}">${Jo(this.unsafeHTML)}</div>
    `}};Dr.styles=[qe`
      :host {
        --rc-widget-bullet-icon-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTkuMDYyNTYgMTUuNzExNUwxMi4wMDAxIDEyLjc3NEwxNC45Mzc2IDE1LjcxMTVMMTUuNzExNiAxNC45Mzc1TDEyLjc3NDEgMTJMMTUuNzExNiA5LjA2MjVMMTQuOTM3NiA4LjI4ODQ4TDEyLjAwMDEgMTEuMjI2TDkuMDYyNTYgOC4yODg0OEw4LjI4ODU0IDkuMDYyNUwxMS4yMjYgMTJMOC4yODg1NCAxNC45Mzc1TDkuMDYyNTYgMTUuNzExNVpNMTIuMDAxNSAxOS41ODMzQzEwLjk2MjEgMTkuNTgzMyA5Ljk4MTQ4IDE5LjM4NiA5LjA1OTcxIDE4Ljk5MTJDOC4xMzc5MiAxOC41OTY1IDcuMzMxMSAxOC4wNTM0IDYuNjM5MjUgMTcuMzYxOUM1Ljk0NzM5IDE2LjY3MDMgNS40MDQwMSAxNS44NjM5IDUuMDA5MSAxNC45NDI1QzQuNjE0MiAxNC4wMjEyIDQuNDE2NzUgMTMuMDQwOCA0LjQxNjc1IDEyLjAwMTRDNC40MTY3NSAxMC45NDgxIDQuNjE0MTEgOS45NjQwNiA1LjAwODgzIDkuMDQ5MjNDNS40MDM1NSA4LjEzNDM4IDUuOTQ2NjggNy4zMzEwNCA2LjYzODIxIDYuNjM5MTlDNy4zMjk3NSA1Ljk0NzMzIDguMTM2MiA1LjQwMzk0IDkuMDU3NTYgNS4wMDkwNEM5Ljk3ODkxIDQuNjE0MTQgMTAuOTU5MyA0LjQxNjY5IDExLjk5ODcgNC40MTY2OUMxMy4wNTE5IDQuNDE2NjkgMTQuMDM2IDQuNjE0MDUgMTQuOTUwOCA1LjAwODc3QzE1Ljg2NTcgNS40MDM0OSAxNi42NjkgNS45NDY2MiAxNy4zNjA5IDYuNjM4MTVDMTguMDUyNyA3LjMyOTY5IDE4LjU5NjEgOC4xMzI2NyAxOC45OTEgOS4wNDcwOEMxOS4zODU5IDkuOTYxNDkgMTkuNTgzNCAxMC45NDUzIDE5LjU4MzQgMTEuOTk4NkMxOS41ODM0IDEzLjAzOCAxOS4zODYgMTQuMDE4NiAxOC45OTEzIDE0Ljk0MDRDMTguNTk2NiAxNS44NjIxIDE4LjA1MzQgMTYuNjY5IDE3LjM2MTkgMTcuMzYwOEMxNi42NzA0IDE4LjA1MjcgMTUuODY3NCAxOC41OTYxIDE0Ljk1MyAxOC45OTFDMTQuMDM4NiAxOS4zODU5IDEzLjA1NDcgMTkuNTgzMyAxMi4wMDE1IDE5LjU4MzNaTTEyLjAwMDEgMTguNUMxMy44MDU2IDE4LjUgMTUuMzQwMyAxNy44NjgxIDE2LjYwNDIgMTYuNjA0MkMxNy44NjgxIDE1LjM0MDMgMTguNTAwMSAxMy44MDU2IDE4LjUwMDEgMTJDMTguNTAwMSAxMC4xOTQ0IDE3Ljg2ODEgOC42NTk3MiAxNi42MDQyIDcuMzk1ODNDMTUuMzQwMyA2LjEzMTk0IDEzLjgwNTYgNS41IDEyLjAwMDEgNS41QzEwLjE5NDUgNS41IDguNjU5NzggNi4xMzE5NCA3LjM5NTg5IDcuMzk1ODNDNi4xMzIgOC42NTk3MiA1LjUwMDA2IDEwLjE5NDQgNS41MDAwNiAxMkM1LjUwMDA2IDEzLjgwNTYgNi4xMzIgMTUuMzQwMyA3LjM5NTg5IDE2LjYwNDJDOC42NTk3OCAxNy44NjgxIDEwLjE5NDUgMTguNSAxMi4wMDAxIDE4LjVaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4=);
        --rc-widget-bullet-icon-image-color: #d30000;
      }
    `,Zc];Xo([te({type:String})],Dr.prototype,"unsafeHTML",2);Xo([te({type:Boolean})],Dr.prototype,"compact",2);Dr=Xo([He("rc-onetime-drawbacks")],Dr);var ag=Object.defineProperty,sg=Object.getOwnPropertyDescriptor,ea=(t,e,r,n)=>{for(var i=n>1?void 0:n?sg(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&ag(e,r,i),i};let Ar=class extends _e{constructor(){super(...arguments),this.type="info",this.isVisible=!0}render(){const t={"rc-design-mode-banner":!0,[`rc_design-mode-banner__${this.type}`]:!0};return this.isVisible?C`
      <div
        role="alert"
        data-testid="design-mode-banner"
        class=${Lt(t)}
        part="${g.DesignModeBanner}"
      >
        <div style="display: flex; align-items: flex-start; gap: 4px" part="${g.DesignModeBannerContent}">
          <span class="icon" part="${g.DesignModeBannerIcon}">
            <svg viewBox="0 0 20 20" focusable="false" style="display:block">
              <path
                id="info"
                d="M11.4584 15.7917H12.5416V11.0001H11.4584V15.7917ZM11.9956 9.74046C12.1615 9.74046 12.302 9.68437 12.4171 9.57219C12.5322 9.45999 12.5897 9.32097 12.5897 9.15512C12.5897 8.98928 12.5336 8.84879 12.4214 8.73367C12.3093 8.61855 12.1702 8.561 12.0044 8.561C11.8385 8.561 11.698 8.6171 11.5829 8.72929C11.4678 8.84148 11.4103 8.9805 11.4103 9.14635C11.4103 9.3122 11.4664 9.45268 11.5786 9.56779C11.6907 9.6829 11.8298 9.74046 11.9956 9.74046ZM12.0071 19.5834C10.9639 19.5834 9.98142 19.386 9.05965 18.9913C8.13785 18.5966 7.33103 18.0534 6.63919 17.3619C5.94733 16.6704 5.40394 15.8642 5.00904 14.9434C4.61414 14.0227 4.41669 13.0388 4.41669 11.9919C4.41669 10.945 4.61405 9.96412 5.00877 9.04929C5.40349 8.13444 5.94662 7.3311 6.63815 6.63925C7.32969 5.94739 8.13585 5.40401 9.05662 5.0091C9.9774 4.6142 10.9612 4.41675 12.0081 4.41675C13.0551 4.41675 14.0359 4.61411 14.9508 5.00883C15.8656 5.40355 16.669 5.94668 17.3608 6.63821C18.0527 7.32975 18.5961 8.13428 18.991 9.05181C19.3859 9.96934 19.5833 10.9497 19.5833 11.9929C19.5833 13.0361 19.386 14.0186 18.9912 14.9404C18.5965 15.8622 18.0534 16.669 17.3619 17.3609C16.6703 18.0527 15.8658 18.5961 14.9482 18.991C14.0307 19.3859 13.0504 19.5834 12.0071 19.5834ZM12 18.5001C13.8056 18.5001 15.3403 17.8681 16.6042 16.6042C17.8681 15.3403 18.5 13.8056 18.5 12.0001C18.5 10.1945 17.8681 8.65978 16.6042 7.39589C15.3403 6.13201 13.8056 5.50006 12 5.50006C10.1944 5.50006 8.65972 6.13201 7.39583 7.39589C6.13194 8.65978 5.5 10.1945 5.5 12.0001C5.5 13.8056 6.13194 15.3403 7.39583 16.6042C8.65972 17.8681 10.1944 18.5001 12 18.5001Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <slot></slot>
        </div>
        <button
          type="button"
          class="close"
          part="${g.DesignModeBannerClose}"
          @click=${()=>this.isVisible=!1}
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.0625 14.7115L5.28848 13.9375L9.22598 9.99997L5.28848 6.06247L6.0625 5.28845L10 9.22595L13.9375 5.28845L14.7115 6.06247L10.774 9.99997L14.7115 13.9375L13.9375 14.7115L10 10.774L6.0625 14.7115Z"
              fill="#191D48"
            />
          </svg>
        </button>
      </div>
    `:E}};Ar.styles=qe`
    .rc-design-mode-banner {
      border-radius: 4px;
      display: flex;
      gap: 4px;
      font-size: 14px;
      padding: 12px 16px;
      margin-bottom: 12px;
      justify-content: space-between;
      color: #191d48;
    }
    .rc-design-mode-banner span.icon {
      flex-shrink: 0;
      width: 20px;
      height: 22px;
      display: inherit;
    }

    .rc-design-mode-banner button.close {
      border-radius: 6px;
      cursor: pointer;
      display: block;
      border: 1.5px solid transparent;
      background-color: transparent;
      padding: 4px;
      height: 100%;
      line-height: 8px;
    }
    .rc-design-mode-banner button.close:focus,
    .rc-design-mode-banner button.close:hover {
      background-color: #e2e3ed;
      border-color: #060820;
    }

    .rc_design-mode-banner__info {
      border: 1px solid #3901f1;
      background-color: #e2e3ed;
    }
    .rc_design-mode-banner__info span.icon {
      color: #3901f1;
    }

    .rc_design-mode-banner__warning {
      border: 1px solid #e2e8f0;
      background-color: #feebc8;
    }
    .rc_design-mode-banner__warning span.icon {
      color: #dd6b20;
    }
  `;ea([te({type:String,attribute:"type"})],Ar.prototype,"type",2);ea([tt()],Ar.prototype,"isVisible",2);Ar=ea([He("rc-design-mode-banner")],Ar);var cg=Object.defineProperty,ug=Object.getOwnPropertyDescriptor,ft=(t,e,r,n)=>{for(var i=n>1?void 0:n?ug(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&cg(e,r,i),i};const lg=qe`
  .rc-quantity-upsell-option__label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    cursor: pointer;
    padding: 20px;
  }

  .rc-quantity-upsell-option__selector {
    font-size: 0.875em;
    font-weight: 600;
    display: flex;
    align-items: start;
    line-height: 24px;
    width: 100%;
  }

  .rc-quantity-upsell-option__selector[rc-onetime] {
    line-height: 24px;
  }

  .rc-quantity-upsell-option {
    border: 1px solid var(--rc-widget-brand-color-50);
    border-radius: var(--rc-widget-card-radius);
    position: relative;
  }

  .rc-quantity-upsell-option[rc-selected] {
    border-color: var(--rc-widget-brand-color);
    background: var(--rc-widget-selected-bg-color);
    color: var(--rc-widget-selected-text-color);
  }

  .rc-quantity-upsell-option:not(:last-child) {
    margin-bottom: 1em;
  }

  input {
    clip: rect(0, 0, 0, 0);
    border-width: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  input:focus-visible + .rc-quantity-upsell-option__checked-indicator {
    border-radius: 50%;
    box-shadow: 0 0 0 2px white, 0 0 0 3px var(--rc-widget-brand-color-50);
  }

  .rc-quantity-upsell-option__checked-indicator {
    margin-right: 8px;
    font-size: 21px;
  }

  .rc-quantity-upsell-option__content-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  .rc-quantity-upsell-option__selector[rc-onetime] .rc-quantity-upsell-option__content-container {
    gap: 0px;
  }

  .rc-quantity-upsell-option__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .rc-quantity-upsell-option__title-container {
    display: flex;
    flex-direction: row;
  }

  .rc-quantity-upsell-option__title {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  ::part(rc-benefits__list),
  ::part(rc-drawbacks) {
    font-weight: 400;
  }

  .rc-purchase-option__recommended-badge {
    position: absolute;
    top: -0.875em;
    right: 1em;
    background: var(--rc-widget-recommended-badge-bg-color);
    color: var(--rc-widget-recommended-badge-text-color);
    font-size: 0.875em;
    font-weight: 600;
    line-height: 1.5em;
    border-radius: 16px;
    border: 1px solid var(--rc-widget-recommended-badge-outline-color);
    padding: 0 0.5em;
  }

  .rc-purchase-option__best-value-badge {
    position: absolute;
    top: -0.875em;
    right: 1em;
    background: var(--rc-widget-best-value-badge-bg-color);
    color: var(--rc-widget-best-value-badge-text-color);
    font-size: 0.875em;
    font-weight: 600;
    line-height: 1.5em;
    border-radius: 16px;
    border: 1px solid var(--rc-widget-best-value-badge-outline-color);
    padding: 0 0.5em;
  }

  .rc-purchase-option__plan-discount-badge {
    background: var(--rc-widget-savings-badge-bg-color);
    color: var(--rc-widget-savings-badge-text-color);
    font-size: 0.875em;
    font-weight: 600;
    line-height: 1.5em;
    border-radius: 16px;
    border: 1px solid var(--rc-widget-savings-badge-outline-color);
    padding: 0 0.5em;
    width: fit-content;
  }

  .learn-more__compact {
    height: 24px;
  }
`;let Ne=class extends _e{constructor(){super(...arguments),this.variantPlans=[],this.maxDiscount=""}connectedCallback(){super.connectedCallback(),this.value=this.initialPlanId}get isCompact(){var t;return((t=this.settings)==null?void 0:t.displayMode)==="compact"}handleChange(t){this.value=t.sellingPlanId;const e=new CustomEvent(Ne.events.quantityUpsellChange,{detail:{planId:this.value,purchaseOption:t.purchaseOption},bubbles:!0,composed:!0});this.dispatchEvent(e)}recommendedText(t){var e,r,n,i;if(!(t!==0||!((r=(e=this.settings)==null?void 0:e.quantity_upsell)!=null&&r.badgeRecommended)))return(i=(n=this.settings)==null?void 0:n.quantity_upsell)==null?void 0:i.badgeRecommendedText}bestValueText(t){var e,r,n,i;if(!(t!==1||!((r=(e=this.settings)==null?void 0:e.quantity_upsell)!=null&&r.badgeBestValue)))return(i=(n=this.settings)==null?void 0:n.quantity_upsell)==null?void 0:i.badgeBestValueText}savingsBadgeText(t){var e,r,n,i;if(!(!((r=(e=this.settings)==null?void 0:e.quantity_upsell)!=null&&r.badgeSavingPercentage)||!Number(t.discount_amount)))return(i=(n=this.settings)==null?void 0:n.quantity_upsell)==null?void 0:i.badgeSavingPercentageText.replace(G.Discount,`${Number(t.discount_amount)}%`)}getFormattedQuantityUpsellPrice(t,e){var n;const r=X();return r!=null&&r.formattedPrices?((n=r.formattedPrices[t].sellingPlans[e].quantityUpsell)==null?void 0:n.totalDiscountedPrice)??"":""}learnMoreLinkTemplate(){var t;return(t=this.settings)!=null&&t.learnMoreText?C`<rc-learn-more
          exportparts="${g.LearnMoreModalContent}, ${g.LearnMoreModal}, ${g.LearnMoreModalCloseButton}, ${g.LearnMoreModalContentBody}, ${g.LearnMoreModalContainer}, ${g.LearnMore}, ${g.LearnMoreTrigger}, ${g.LearnMoreTriggerCompact}"
          class="learn-more__compact"
        ></rc-learn-more>`:E}benefitsTemplate(t){if(!t.product_quantity||!t.interval_unit||!this.settings||!this.variantId||!this.product||vo(this.settings.benefits))return E;const e=Ko(this.product,this.variantId,t.external_plan_id);if(!e.quantityUpsell)return E;const r=Zh(t,this.settings.frequencyIntervalTranslation,this.settings.benefits,e.discounted,e.quantityUpsell.totalDiscountAmount);return C`<rc-benefits
      exportparts="${g.BenefitsList}"
      .unsafeHTML=${r}
      .compact=${this.isCompact}
    />`}drawbacksTemplate(){if(!this.settings)return E;const t=hn(this.settings.onetimeDrawbacks,G.MaxDiscount,this.maxDiscount);return C`<rc-onetime-drawbacks
      exportparts="${g.Drawbacks}"
      .unsafeHTML=${t}
      .compact=${this.isCompact}
    />`}subscriptionPlanTemplate(t,e,r,n,i,o,a){var u,d,p;const s=(u=this.settings)!=null&&u.onlyDisplayBenefitsOnSelected?t:!0,c=(d=this.settings)!=null&&d.benefitsImage?(p=this.settings)!=null&&p.onlyDisplayBenefitsOnSelected?t:!0:!1;return C`
      <div
        class="rc-quantity-upsell-option"
        part="${g.QuantityUpsellOption}${e}"
        ?rc-selected=${t}
        ?rc-not-selected=${!t}
      >
        ${i?C`<span
              class="rc-purchase-option__recommended-badge"
              aria-hidden="true"
              part="${g.QuantityUpsellRecommendedBadge} ${g.SubscriptionBadge}"
            >
              ${i}
            </span>`:E}
        ${o?C`<span
              class="rc-purchase-option__best-value-badge"
              aria-hidden="true"
              part="${g.QuantityUpsellBestValueBadge} ${g.SubscriptionBadge}"
            >
              ${o}
            </span>`:E}
        <label class="rc-quantity-upsell-option__label" part="${g.QuantityUpsellOptionLabel}">
          <div class="rc-quantity-upsell-option__selector" part="${g.QuantityUpsellOptionSelector}">
            <input
              part="${g.QuantityUpsellOptionInput}"
              type="radio"
              name="quantityUpsellOption"
              value=${r.external_plan_id}
              class="rc-quantity-upsell-option__input"
              .checked=${t}
              @change=${v=>this.handleChange({sellingPlanId:Number(v.target.value),purchaseOption:H.Subscription})}
            />
            <rc-radio-icon
              part="${g.QuantityUpsellOptionCheckedIndicator}"
              ?checked=${t}
              class="rc-quantity-upsell-option__checked-indicator"
            ></rc-radio-icon>
            <div class="rc-quantity-upsell-option__content-container">
              <div class="rc-quantity-upsell-option__header">
                <div class="rc-quantity-upsell-option__title-container">
                  <div class="rc-quantity-upsell-option__title">
                    ${r.title}
                    ${a?C`<span
                          class="rc-purchase-option__plan-discount-badge"
                          part="${g.QuantityUpsellSavingsBadge}"
                          >${a}</span
                        >`:E}
                  </div>
                  ${this.isCompact&&t?this.learnMoreLinkTemplate():E}
                </div>
                <div>${n}</div>
              </div>
              ${c?C`<rc-benefits-image exportparts="${g.BenefitsImage}"></rc-benefits-image>`:null}
              ${s?this.benefitsTemplate(r):E}
              ${this.isCompact?E:t?this.learnMoreLinkTemplate():E}
            </div>
          </div>
        </label>
      </div>
    `}onetimePlanTemplate(){var i,o;if(!this.variantId||!this.product)return E;const t=!this.value,e=t?` ${g.QuantityUpsellOptionSelected}`:"",r=wo(this.variantId,this.product),n=(i=this.settings)!=null&&i.onlyDisplayBenefitsOnSelected&&this.settings.onetimeDrawbacks.length?t:!0;return C`
      <div
        class="rc-quantity-upsell-option"
        part="${g.QuantityUpsellOption}${e}"
        ?rc-selected=${t}
        ?rc-not-selected=${!t}
      >
        <label class="rc-quantity-upsell-option__label" part="${g.QuantityUpsellOptionLabel}">
          <div
            class="rc-quantity-upsell-option__selector"
            part="${g.QuantityUpsellOptionSelector}"
            rc-onetime
          >
            <input
              part="${g.QuantityUpsellOptionInput}"
              type="radio"
              name="quantityUpsellOption"
              value=${void 0}
              class="rc-quantity-upsell-option__input"
              .checked=${t}
              @change=${()=>this.handleChange({purchaseOption:H.Onetime})}
            />
            <rc-radio-icon
              part="${g.QuantityUpsellOptionCheckedIndicator}"
              ?checked=${t}
              class="rc-quantity-upsell-option__checked-indicator"
            ></rc-radio-icon>
            <div class="rc-quantity-upsell-option__content-container">
              <div class="rc-quantity-upsell-option__header">
                <div>${((o=this.settings)==null?void 0:o.onetimeLabel)??"One-time purchase"}</div>
                <div>${r}</div>
              </div>
              ${n?this.drawbacksTemplate():E}
            </div>
          </div>
        </label>
      </div>
    `}render(){var t;return!((t=this.settings)!=null&&t.quantity_upsell)||!this.variantPlans.length||!this.product||!this.variantId?E:C`<div>
      ${this.variantPlans.map((e,r)=>{const n=e.external_plan_id===this.value,i=n?` ${g.QuantityUpsellOptionSelected}`:"",o=this.getFormattedQuantityUpsellPrice(this.variantId,e.external_plan_id)??"";return this.subscriptionPlanTemplate(n,i,e,o,this.recommendedText(r),this.bestValueText(r),this.savingsBadgeText(e))})}
      ${this.hasOnetimePlan?this.onetimePlanTemplate():E}
    </div>`}};Ne.events={quantityUpsellChange:"quantityUpsellChange"};Ne.styles=lg;ft([xn({context:jr})],Ne.prototype,"settings",2);ft([te({type:Object})],Ne.prototype,"product",2);ft([te({type:Number})],Ne.prototype,"variantId",2);ft([te({type:Array})],Ne.prototype,"variantPlans",2);ft([te({type:Number})],Ne.prototype,"initialPlanId",2);ft([te({type:Boolean})],Ne.prototype,"hasOnetimePlan",2);ft([te({type:Number})],Ne.prototype,"value",2);ft([te()],Ne.prototype,"maxDiscount",2);Ne=ft([He("recharge-quantity-upsell")],Ne)});export default dg();
