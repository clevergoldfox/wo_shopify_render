(()=>{var zl=`:is(lightlabs-widget, lightlabs-sticker) .lightlabs {
  --ll-color-text: #2b2b2b;
  --ll-color-border: #d4d4d4;
  --ll-color-shadow: #2b2b2b29;
  --ll-color-background: rgba(255, 255, 255, 0.75);
  --ll-color-backdrop: #dee2ec;
  --ll-color-primary: #577cff;
  --ll-color-stroke: #364153;
  --ll-spacing-xs: 4px;
  --ll-spacing-sm: 6px;
  --ll-spacing-md: 8px;
  --ll-spacing-lg: 12px;
  --ll-spacing-xl: 16px;
  --ll-spacing-xxl: 20px;
  --ll-border-radius: 4px;
  --ll-font-family: sans-serif;
}
`;var Sl=`:is(lightlabs-widget, lightlabs-sticker) .ll-preview-container {
    position: relative;
}

:is(lightlabs-widget, lightlabs-sticker) .ll-preview-badge {
    position: absolute;
    top: -9px;
    right: 12px;
    z-index: 1;
    padding: 2px 8px;
    border-radius: 999px;
    background: var(--ll-color-primary);
    color: #ffffff;
    font-family: var(--ll-font-family);
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.4px;
    line-height: 14px;
    text-transform: uppercase;
    white-space: nowrap;
    pointer-events: none;
}

:is(lightlabs-widget, lightlabs-sticker) .ll-preview-badge-left {
    right: auto;
    left: 12px;
}
`;var ll,f,Bl,Bt,Z,Gl,Wl,Zl,bl,q,A,Hl,fl,cl,hl,Yl,R={},j=[],Wt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,tl=Array.isArray;function E(t,l){for(var i in l)t[i]=l[i];return t}function ml(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Zt(t,l,i){var o,r,e,a={};for(e in l)e=="key"?o=l[e]:e=="ref"?r=l[e]:a[e]=l[e];if(arguments.length>2&&(a.children=arguments.length>3?ll.call(arguments,2):i),typeof t=="function"&&t.defaultProps!=null)for(e in t.defaultProps)a[e]===void 0&&(a[e]=t.defaultProps[e]);return D(t,a,o,r,null)}function D(t,l,i,o,r){var e={type:t,props:l,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r==null?++Bl:r,__i:-1,__u:0};return r==null&&f.vnode!=null&&f.vnode(e),e}function X(t){return t.children}function O(t,l){this.props=t,this.context=l}function Q(t,l){if(l==null)return t.__?Q(t.__,t.__i+1):null;for(var i;l<t.__k.length;l++)if((i=t.__k[l])!=null&&i.__e!=null)return i.__e;return typeof t.type=="function"?Q(t):null}function Ht(t){if(t.__P&&t.__d){var l=t.__v,i=l.__e,o=[],r=[],e=E({},l);e.__v=l.__v+1,f.vnode&&f.vnode(e),pl(t.__P,e,l,t.__n,t.__P.namespaceURI,32&l.__u?[i]:null,o,i==null?Q(l):i,!!(32&l.__u),r),e.__v=l.__v,e.__.__k[e.__i]=e,Jl(o,e,r),l.__e=l.__=null,e.__e!=i&&Ul(e)}}function Ul(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(l){if(l!=null&&l.__e!=null)return t.__e=t.__c.base=l.__e}),Ul(t)}function wl(t){(!t.__d&&(t.__d=!0)&&Z.push(t)&&!u.__r++||Gl!=f.debounceRendering)&&((Gl=f.debounceRendering)||Wl)(u)}function u(){try{for(var t,l=1;Z.length;)Z.length>l&&Z.sort(Zl),t=Z.shift(),l=Z.length,Ht(t)}finally{Z.length=u.__r=0}}function Pl(t,l,i,o,r,e,a,g,c,b,w){var m,d,h,y,k,x,p,v=o&&o.__k||j,V=l.length;for(c=Yt(i,l,v,c,V),m=0;m<V;m++)(h=i.__k[m])!=null&&(d=h.__i!=-1&&v[h.__i]||R,h.__i=m,x=pl(t,h,d,r,e,a,g,c,b,w),y=h.__e,h.ref&&d.ref!=h.ref&&(d.ref&&xl(d.ref,null,h),w.push(h.ref,h.__c||y,h)),k==null&&y!=null&&(k=y),(p=!!(4&h.__u))||d.__k===h.__k?(c=$l(h,c,t,p),p&&d.__e&&(d.__e=null)):typeof h.type=="function"&&x!==void 0?c=x:y&&(c=y.nextSibling),h.__u&=-7);return i.__e=k,c}function Yt(t,l,i,o,r){var e,a,g,c,b,w=i.length,m=w,d=0;for(t.__k=Array(r),e=0;e<r;e++)(a=l[e])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=t.__k[e]=D(null,a,null,null,null):tl(a)?a=t.__k[e]=D(X,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=t.__k[e]=D(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):t.__k[e]=a,c=e+d,a.__=t,a.__b=t.__b+1,g=null,(b=a.__i=Ut(a,i,c,m))!=-1&&(m--,(g=i[b])&&(g.__u|=2)),g==null||g.__v==null?(b==-1&&(r>w?d--:r<w&&d++),typeof a.type!="function"&&(a.__u|=4)):b!=c&&(b==c-1?d--:b==c+1?d++:(b>c?d--:d++,a.__u|=4))):t.__k[e]=null;if(m)for(e=0;e<w;e++)(g=i[e])!=null&&(2&g.__u)==0&&(g.__e==o&&(o=Q(g)),Xl(g,g));return o}function $l(t,l,i,o){var r,e;if(typeof t.type=="function"){for(r=t.__k,e=0;r&&e<r.length;e++)r[e]&&(r[e].__=t,l=$l(r[e],l,i,o));return l}t.__e!=l&&(o&&(l&&t.type&&!l.parentNode&&(l=Q(t)),i.insertBefore(t.__e,l||null)),l=t.__e);do l=l&&l.nextSibling;while(l!=null&&l.nodeType==8);return l}function Ut(t,l,i,o){var r,e,a,g=t.key,c=t.type,b=l[i],w=b!=null&&(2&b.__u)==0;if(b===null&&g==null||w&&g==b.key&&c==b.type)return i;if(o>(w?1:0)){for(r=i-1,e=i+1;r>=0||e<l.length;)if((b=l[a=r>=0?r--:e++])!=null&&(2&b.__u)==0&&g==b.key&&c==b.type)return a}return-1}function Il(t,l,i){l[0]=="-"?t.setProperty(l,i==null?"":i):t[l]=i==null?"":typeof i!="number"||Wt.test(l)?i:i+"px"}function _(t,l,i,o,r){var e,a;l:if(l=="style")if(typeof i=="string")t.style.cssText=i;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(l in o)i&&l in i||Il(t.style,l,"");if(i)for(l in i)o&&i[l]==o[l]||Il(t.style,l,i[l])}else if(l[0]=="o"&&l[1]=="n")e=l!=(l=l.replace(Hl,"$1")),a=l.toLowerCase(),l=a in t||l=="onFocusOut"||l=="onFocusIn"?a.slice(2):l.slice(2),t.l||(t.l={}),t.l[l+e]=i,i?o?i[A]=o[A]:(i[A]=fl,t.addEventListener(l,e?hl:cl,e)):t.removeEventListener(l,e?hl:cl,e);else{if(r=="http://www.w3.org/2000/svg")l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(l!="width"&&l!="height"&&l!="href"&&l!="list"&&l!="form"&&l!="tabIndex"&&l!="download"&&l!="rowSpan"&&l!="colSpan"&&l!="role"&&l!="popover"&&l in t)try{t[l]=i==null?"":i;break l}catch(g){}typeof i=="function"||(i==null||i===!1&&l[4]!="-"?t.removeAttribute(l):t.setAttribute(l,l=="popover"&&i==1?"":i))}}function El(t){return function(l){if(this.l){var i=this.l[l.type+t];if(l[q]==null)l[q]=fl++;else if(l[q]<i[A])return;return i(f.event?f.event(l):l)}}}function pl(t,l,i,o,r,e,a,g,c,b){var w,m,d,h,y,k,x,p,v,V,P,W,C,F,Y,$,G=l.type;if(l.constructor!==void 0)return null;128&i.__u&&(c=!!(32&i.__u),e=[g=l.__e=i.__e]),(w=f.__b)&&w(l);l:if(typeof G=="function"){m=a.length;try{if(v=l.props,V=G.prototype&&G.prototype.render,P=(w=G.contextType)&&o[w.__c],W=w?P?P.props.value:w.__:o,i.__c?p=(d=l.__c=i.__c).__=d.__E:(V?l.__c=d=new G(v,W):(l.__c=d=new O(v,W),d.constructor=G,d.render=$t),P&&P.sub(d),d.state||(d.state={}),d.__n=o,h=d.__d=!0,d.__h=[],d._sb=[]),V&&d.__s==null&&(d.__s=d.state),V&&G.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=E({},d.__s)),E(d.__s,G.getDerivedStateFromProps(v,d.__s))),y=d.props,k=d.state,d.__v=l,h)V&&G.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),V&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(V&&G.getDerivedStateFromProps==null&&v!==y&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(v,W),l.__v==i.__v||!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(v,d.__s,W)===!1){l.__v!=i.__v&&(d.props=v,d.state=d.__s,d.__d=!1),l.__e=i.__e,l.__k=i.__k,l.__k.some(function(J){J&&(J.__=l)}),j.push.apply(d.__h,d._sb),d._sb=[],d.__h.length&&a.push(d);break l}d.componentWillUpdate!=null&&d.componentWillUpdate(v,d.__s,W),V&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(y,k,x)})}if(d.context=W,d.props=v,d.__P=t,d.__e=!1,C=f.__r,F=0,V)d.state=d.__s,d.__d=!1,C&&C(l),w=d.render(d.props,d.state,d.context),j.push.apply(d.__h,d._sb),d._sb=[];else do d.__d=!1,C&&C(l),w=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++F<25);d.state=d.__s,d.getChildContext!=null&&(o=E(E({},o),d.getChildContext())),V&&!h&&d.getSnapshotBeforeUpdate!=null&&(x=d.getSnapshotBeforeUpdate(y,k)),Y=w!=null&&w.type===X&&w.key==null?Ql(w.props.children):w,g=Pl(t,tl(Y)?Y:[Y],l,i,o,r,e,a,g,c,b),d.base=l.__e,l.__u&=-161,d.__h.length&&a.push(d),p&&(d.__E=d.__=null)}catch(J){if(a.length=m,l.__v=null,c||e!=null)if(J.then){for(l.__u|=c?160:128;g&&g.nodeType==8&&g.nextSibling;)g=g.nextSibling;e!=null&&(e[e.indexOf(g)]=null),l.__e=g}else{if(e!=null)for($=e.length;$--;)ml(e[$]);vl(l)}else l.__e=i.__e,!l.__k&&i.__k&&(l.__k=i.__k),J.then||vl(l);f.__e(J,l,i)}}else e==null&&l.__v==i.__v?(l.__k=i.__k,l.__e=i.__e):g=l.__e=Pt(i.__e,l,i,o,r,e,a,c,b);return(w=f.diffed)&&w(l),128&l.__u?void 0:g}function vl(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(vl))}function Jl(t,l,i){for(var o=0;o<i.length;o++)xl(i[o],i[++o],i[++o]);f.__c&&f.__c(l,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(e){e.call(r)})}catch(e){f.__e(e,r.__v)}})}function Ql(t){return typeof t!="object"||t==null||t.__b>0?t:tl(t)?t.map(Ql):t.constructor!==void 0?null:E({},t)}function Pt(t,l,i,o,r,e,a,g,c){var b,w,m,d,h,y,k,x=i.props||R,p=l.props,v=l.type;if(v=="svg"?r="http://www.w3.org/2000/svg":v=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),e!=null){for(b=0;b<e.length;b++)if((h=e[b])&&"setAttribute"in h==!!v&&(v?h.localName==v:h.nodeType==3)){t=h,e[b]=null;break}}if(t==null){if(v==null)return document.createTextNode(p);t=document.createElementNS(r,v,p.is&&p),g&&(f.__m&&f.__m(l,e),g=!1),e=null}if(v==null)x===p||g&&t.data==p||(t.data=p);else{if(e=v=="textarea"&&p.defaultValue!=null?null:e&&ll.call(t.childNodes),!g&&e!=null)for(x={},b=0;b<t.attributes.length;b++)x[(h=t.attributes[b]).name]=h.value;for(b in x)h=x[b],b=="dangerouslySetInnerHTML"?m=h:b=="children"||(b in p)||b=="value"&&("defaultValue"in p)||b=="checked"&&("defaultChecked"in p)||_(t,b,null,h,r);for(b in p)h=p[b],b=="children"?d=h:b=="dangerouslySetInnerHTML"?w=h:b=="value"?y=h:b=="checked"?k=h:g&&typeof h!="function"||x[b]===h||_(t,b,h,x[b],r);if(w)g||m&&(w.__html==m.__html||w.__html==t.innerHTML)||(t.innerHTML=w.__html),l.__k=[];else if(m&&(t.innerHTML=""),Pl(l.type=="template"?t.content:t,tl(d)?d:[d],l,i,o,v=="foreignObject"?"http://www.w3.org/1999/xhtml":r,e,a,e?e[0]:i.__k&&Q(i,0),g,c),e!=null)for(b=e.length;b--;)ml(e[b]);g&&v!="textarea"||(b="value",v=="progress"&&y==null?t.removeAttribute("value"):y!=null&&(y!==t[b]||v=="progress"&&!y||v=="option"&&y!=x[b])&&_(t,b,y,x[b],r),b="checked",k!=null&&k!=t[b]&&_(t,b,k,x[b],r))}return t}function xl(t,l,i){try{if(typeof t=="function"){var o=typeof t.__u=="function";o&&t.__u(),o&&l==null||(t.__u=t(l))}else t.current=l}catch(r){f.__e(r,i)}}function Xl(t,l,i){var o,r;if(f.unmount&&f.unmount(t),(o=t.ref)&&(o.current&&o.current!=t.__e||xl(o,null,l)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){f.__e(e,l)}o.base=o.__P=o.__n=null}if(o=t.__k)for(r=0;r<o.length;r++)o[r]&&Xl(o[r],l,i||typeof t.type!="function");i||ml(t.__e),t.__c=t.__=t.__e=void 0}function $t(t,l,i){return this.constructor(t,i)}function Tl(t,l,i){var o,r,e,a;l==document&&(l=document.documentElement),f.__&&f.__(t,l),r=(o=typeof i=="function")?null:i&&i.__k||l.__k,e=[],a=[],pl(l,t=(!o&&i||l).__k=Zt(X,null,[t]),r||R,R,l.namespaceURI,!o&&i?[i]:r?null:l.firstChild?ll.call(l.childNodes):null,e,!o&&i?i:r?r.__e:l.firstChild,o,a),Jl(e,t,a),t.props.children=null}function il(t){function l(i){var o,r;return this.getChildContext||(o=new Set,(r={})[l.__c]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){o=null},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&o.forEach(function(a){a.__e=!0,wl(a)})},this.sub=function(e){o.add(e);var a=e.componentWillUnmount;e.componentWillUnmount=function(){o&&o.delete(e),a&&a.call(e)}}),i.children}return l.__c="__cC"+Yl++,l.__=t,l.Provider=l.__l=(l.Consumer=function(i,o){return i.children(o)}).contextType=l,l}ll=j.slice,f={__e:function(t,l,i,o){for(var r,e,a;l=l.__;)if((r=l.__c)&&!r.__)try{if((e=r.constructor)&&e.getDerivedStateFromError!=null&&(r.setState(e.getDerivedStateFromError(t)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,o||{}),a=r.__d),a)return r.__E=r}catch(g){t=g}throw t}},Bl=0,Bt=function(t){return t!=null&&t.constructor===void 0},O.prototype.setState=function(t,l){var i;i=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=E({},this.state),typeof t=="function"&&(t=t(E({},i),this.props)),t&&E(i,t),t!=null&&this.__v&&(l&&this._sb.push(l),wl(this))},O.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),wl(this))},O.prototype.render=X,Z=[],Wl=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Zl=function(t,l){return t.__v.__b-l.__v.__b},u.__r=0,bl=Math.random().toString(8),q="__d"+bl,A="__a"+bl,Hl=/(PointerCapture)$|Capture$/i,fl=0,cl=El(!1),hl=El(!0),Yl=0;var U,n,yl,Fl,T=0,jl=[],L=f,Al=L.__b,Ml=L.__r,Kl=L.diffed,_l=L.__c,ql=L.unmount,Dl=L.__;function M(t,l){L.__h&&L.__h(n,t,T||l),T=0;var i=n.__H||(n.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function z(t){return T=1,Jt(lt,t)}function Jt(t,l,i){var o=M(U++,2);if(o.t=t,!o.__c&&(o.__=[i?i(l):lt(void 0,l),function(g){var c=o.__N?o.__N[0]:o.__[0],b=o.t(c,g);c!==b&&(o.__N=[b,o.__[1]],o.__c.setState({}))}],o.__c=n,!n.__f)){var r=function(g,c,b){if(!o.__c.__H)return!0;var w=!1,m=o.__c.props!==g;if(o.__c.__H.__.some(function(h){if(h.__N){w=!0;var y=h.__[0];h.__=h.__N,h.__N=void 0,y!==h.__[0]&&(m=!0)}}),e){var d=e.call(this,g,c,b);return w?d||m:d}return!w||m};n.__f=!0;var{shouldComponentUpdate:e,componentWillUpdate:a}=n;n.componentWillUpdate=function(g,c,b){if(this.__e){var w=e;e=void 0,r(g,c,b),e=w}a&&a.call(this,g,c,b)},n.shouldComponentUpdate=r}return o.__N||o.__}function B(t,l){var i=M(U++,3);!L.__s&&Ll(i.__H,l)&&(i.__=t,i.u=l,n.__H.__h.push(i))}function Qt(t,l){var i=M(U++,4);!L.__s&&Ll(i.__H,l)&&(i.__=t,i.u=l,n.__h.push(i))}function S(t){return T=5,ol(function(){return{current:t}},[])}function el(t,l,i){T=6,Qt(function(){if(typeof t=="function"){var o=t(l());return function(){t(null),o&&typeof o=="function"&&o()}}if(t)return t.current=l(),function(){return t.current=null}},i==null?i:i.concat(t))}function ol(t,l){var i=M(U++,7);return Ll(i.__H,l)&&(i.__=t(),i.__H=l,i.__h=t),i.__}function nl(t,l){return T=8,ol(function(){return t},l)}function al(t){var l=n.context[t.__c],i=M(U++,9);return i.c=t,l?(i.__==null&&(i.__=!0,l.sub(n)),l.props.value):t.__}function Ol(){for(var t;t=jl.shift();){var l=t.__H;if(t.__P&&l)try{l.__h.some(Cl),l.__h.some(ul),l.__h=[]}catch(i){l.__h=[],L.__e(i,t.__v)}}}L.__b=function(t){n=null,Al&&Al(t)},L.__=function(t,l){t&&l.__k&&l.__k.__m&&(t.__m=l.__k.__m),Dl&&Dl(t,l)},L.__r=function(t){Ml&&Ml(t),U=0;var l=(n=t.__c).__H;l&&(yl===n?(l.__h=[],n.__h=[],l.__.some(function(i){i.__N&&(i.__=i.__N),i.u=i.__N=void 0})):(l.__h.length&&Ol(),U=0)),yl=n},L.diffed=function(t){Kl&&Kl(t);var l=t.__c;l&&l.__H&&(l.__H.__h.length&&(jl.push(l)!==1&&Fl===L.requestAnimationFrame||((Fl=L.requestAnimationFrame)||Xt)(Ol)),l.__H.__.some(function(i){i.u&&(i.__H=i.u,i.u=void 0)})),yl=n=null},L.__c=function(t,l){l.some(function(i){try{i.__h.some(Cl),i.__h=i.__h.filter(function(o){return!o.__||ul(o)})}catch(o){l.some(function(r){r.__h&&(r.__h=[])}),l=[],L.__e(o,i.__v)}}),_l&&_l(t,l)},L.unmount=function(t){ql&&ql(t);var l,i=t.__c;i&&i.__H&&(i.__H.__.some(function(o){try{Cl(o)}catch(r){l=r}}),i.__H=void 0,l&&L.__e(l,i.__v))};var Rl=typeof requestAnimationFrame=="function";function Xt(t){var l,i=function(){clearTimeout(o),Rl&&cancelAnimationFrame(l),setTimeout(t)},o=setTimeout(i,35);Rl&&(l=requestAnimationFrame(i))}function Cl(t){var l=n,i=t.__c;typeof i=="function"&&(t.__c=void 0,i()),n=l}function ul(t){var l=n;t.__c=t.__(),n=l}function Ll(t,l){return!t||t.length!==l.length||l.some(function(i,o){return i!==t[o]})}function lt(t,l){return typeof l=="function"?l(t):l}var kl=il({}),I=()=>al(kl);var tt="light-labs |",Tt=(t,...l)=>{if(window.lightlabs.logs.push({message:l.join(" "),args:l}),window.lightlabs.debug)console?.[t](tt,...l)},N=["log","debug","info","warn","error"].reduce((t,l)=>({...t,[l]:(...i)=>Tt(l,...i)}),{}),it=(t)=>{return tt=`${t} |`,N};var et=(t,l)=>{let i=new URLSearchParams(window.location.search);if(!i.get(t))i.set(t,l),window.history.replaceState({},"",`${window.location.pathname}?${i.toString()}`)},ot=(t)=>{let l=new URLSearchParams(window.location.search);if(l.get(t))l.delete(t),window.history.replaceState({},"",`${window.location.pathname}?${l.toString()}`)},rl=(t)=>{return new URLSearchParams(window.location.search).get(t)};var dl=()=>window.Shopify?.designMode===!0,rt="https://app.lightlabs.com",at=".myshopify.com",dt=(t)=>{if(!t)return null;let l=t.trim().toLowerCase();if(!l)return null;return l.endsWith(at)?l:`${l}${at}`},gt=()=>{window.lightlabs||={debug:!!rl("ll-debug"),logs:[],externalId:null,setExternalId:(t)=>{window.lightlabs.externalId=t,window.dispatchEvent(new CustomEvent("lightlabs:externalIdChanged"))}}},H=(t,l)=>{let i=t.getAttribute(l);return N.log(l,i),i},st=(t,l)=>{let i=document.createElement("style");i.textContent=l,t.appendChild(i)},bt=(t,l)=>{if(customElements.get(t))return;customElements.define(t,l)};var ct=({companyId:t,shopDomain:l,apiUrl:i,widgetType:o})=>{let[r,e]=z(null);return B(()=>{if(dl())return;if(!(t||l))return;let g=new AbortController;return(async()=>{try{let b=t?`company_id=${encodeURIComponent(t)}`:`shop_domain=${encodeURIComponent(l)}`,w=await fetch(`${i}/pip_api/products?${b}&referrer_url=${encodeURIComponent(window.location.origin+window.location.pathname)}&widget_type=${o}`,{signal:g.signal});if(!w.ok)return;let m=await w.json();N.log("useProducts",m),e(m)}catch(b){if(b instanceof DOMException&&b.name==="AbortError")return;N.error(b)}})(),()=>g.abort()},[t,l,i,o]),r};var Ft=0;function s(t,l,i,o,r,e){l||(l={});var a,g,c=l;if("ref"in c)for(g in c={},l)g=="ref"?a=l[g]:c[g]=l[g];var b={type:t,props:c,key:i,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Ft,__i:-1,__u:0,__source:r,__self:e};if(typeof t=="function"&&(a=t.defaultProps))for(g in a)c[g]===void 0&&(c[g]=a[g]);return f.vnode&&f.vnode(b),b}var ht=il(null),wt=()=>al(ht),vt=({config:t,children:l})=>{let i=ct(t),o=t.companyId||i?.companyId?.toString()||null;return s(kl.Provider,{value:{...t,companyId:o},children:s(ht.Provider,{value:i,children:l})})};var ft=`:is(lightlabs-widget, lightlabs-sticker) .lightlabs {
  .ll-dialog {
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-family: var(--ll-font-family);
    cursor: default;

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      border: none;
      text-decoration: none;
      list-style: none;
      appearance: none;
    }

    svg,
    img {
      width: auto;
      height: auto;
      max-width: 100%;
    }

    .ll-backdrop {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: rgb(0 0 0 / 25%);
    }

    .ll-dialog-content {
      width: 100%;
      max-width: 600px;
      height: 90%;
      max-height: 800px;
      background: #fff;
      border-radius: 10px;
      overflow: hidden;
      overscroll-behavior: contain;
      position: relative;

      @media (max-width: 600px) {
        height: 100%;
        max-height: 100%;
        border-radius: 0;
      }

      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--ll-spacing-xl);
        border-bottom: 1px solid var(--ll-color-border);
        background: white;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
      }
    }

    .ll-dialog-content.ll-coa {
      max-width: 800px;
      max-height: 900px;
      padding-top: 30px;

      header {
        background: transparent;
        border-bottom: none;
        justify-content: flex-end;
      }
    }

    .ll-logo {
      all: unset;
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
    }

    .ll-logo img {
      width: 128px;
      height: 25px;
    }

    .ll-logo:focus-visible {
      outline: 2px solid var(--ll-color-primary);
      outline-offset: 2px;
    }

    .ll-close-button {
      all: unset;
      box-sizing: border-box;
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .ll-close-button:focus-visible {
      outline: 2px solid var(--ll-color-primary);
      outline-offset: 2px;
    }

    .ll-share-button {
      all: unset;
      box-sizing: border-box;
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background: var(--ll-color-primary);
      border-radius: var(--ll-border-radius);
    }

    .ll-share-button:focus-visible {
      outline: 2px solid var(--ll-color-stroke);
      outline-offset: 2px;
    }

    .ll-go-back-button {
      all: unset;
      box-sizing: border-box;
      height: 38px;
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 1px solid var(--ll-color-border);
      border-radius: var(--ll-border-radius);
      gap: 10px;
      font-family: var(--ll-font-family);
      color: var(--ll-color-text);
    }

    .ll-go-back-button:focus-visible {
      outline: 2px solid var(--ll-color-primary);
      outline-offset: 2px;
    }

    .ll-toast-container {
      position: absolute;
      top: 88px;
      left: 0;
      right: 0;
      z-index: 2;
      display: flex;
      justify-content: center;

      .ll-toast {
        background: #fff;
        border: 1px solid var(--ll-color-border);
        border-radius: 100px;
        padding: var(--ll-spacing-lg) var(--ll-spacing-xl);
        color: #333;
        box-shadow: 0px 4px 8px 0px var(--ll-color-shadow);
        transition:
          opacity 0.2s ease,
          transform 0.2s ease;
        transform: translateY(-8px);

        .ll-toast-content {
          margin: 0;
          padding: 0;
        }
      }

      .ll-fade-in {
        opacity: 1;
        transform: translateY(0);
      }

      .ll-fade-out {
        opacity: 0;
        transform: translateY(-8px);
      }
    }
  }

  .ll-dialog,
  .ll-dialog::backdrop {
    transition:
      display 0.2s allow-discrete,
      overlay 0.2s allow-discrete,
      opacity 0.2s;
    opacity: 0;
  }

  .ll-dialog[open],
  .ll-dialog[open]::backdrop {
    opacity: 1;
  }

  @starting-style {
    .ll-dialog[open],
    .ll-dialog[open]::backdrop {
      opacity: 0;
    }
  }
}

html:has(dialog[open].ll-dialog) {
  overflow: hidden;
}
`;var K=(t)=>s("svg",{"aria-hidden":"true",focusable:"false",width:"15",height:"10",viewBox:"0 0 15 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[s("title",{children:"Right Arrow"}),s("path",{d:"M13.8086 5.21484L10.0898 8.93359C9.81641 9.20703 9.40625 9.20703 9.16016 8.93359C8.88672 8.6875 8.88672 8.27734 9.16016 8.00391L11.7578 5.40625H0.65625C0.273438 5.40625 0 5.13281 0 4.75C0 4.39453 0.273438 4.09375 0.65625 4.09375H11.7578L9.16016 1.49609C8.88672 1.25 8.88672 0.839844 9.16016 0.566406C9.40625 0.320312 9.81641 0.320312 10.0898 0.566406L13.8086 4.3125C14.0547 4.55859 14.0547 4.96875 13.8086 5.21484Z",fill:"currentColor"})]});var Mt=316,Kt=290,mt=(t)=>t.closest("lightlabs-sticker")?.parentElement??null,gl=(t,{resolveTarget:l=(o)=>o,attachKey:i=null}={})=>{let[o,r]=z("");return B(()=>{let e=t.current;if(!e)return;let a=l(e);if(!a)return;let g=new ResizeObserver((c)=>{let b=c[0]?.contentRect.width??0;if(b<=Kt)r("ll-extra-compact");else if(b<=Mt)r("ll-compact");else r("")});return g.observe(a),()=>g.disconnect()},[i]),o};var pt="84 substances tested for quality",_t=()=>{let t=new Date;return`${t.toLocaleString("en-US",{month:"short"}).toUpperCase()} ${t.getFullYear()}`},xt=()=>{let{apiUrl:t,widgetType:l}=I(),i=_t(),o=`${t}/brand/icon.svg`,r=S(null),e=gl(r,{resolveTarget:l==="sticker"?mt:void 0});if(l==="sticker")return s("div",{ref:r,className:`lightlabs lightlabs-sticker ${e}`,children:s("div",{className:"ll-sticker-container ll-preview-container",children:[s("div",{className:"ll-preview-badge ll-preview-badge-left",children:"Preview only"}),s("div",{className:"ll-sticker-body",children:[s("span",{className:"ll-sticker-logo-link",children:s("img",{src:o,width:31,height:22,style:{minWidth:31},alt:"Light Labs"})}),s("div",{className:"ll-sticker-content ll-text-ellipsis",children:[s("div",{className:"ll-sticker-text-row",children:[s("p",{className:"ll-sticker-tested-by ll-text-ellipsis",children:"Tested by Light Labs in"}),s("div",{className:"ll-sticker-time-pill",children:i})]}),s("div",{className:"ll-sticker-text-row",children:[s("p",{className:"ll-sticker-test-results ll-text-ellipsis",children:pt}),s(K,{})]})]})]}),s("div",{className:"ll-sticker-ribbon"})]})});return s("div",{ref:r,className:`lightlabs lightlabs-widget ${e}`,children:s("div",{className:"ll-container ll-preview-container",children:[s("div",{className:"ll-preview-badge",children:"Preview only"}),s("span",{className:"ll-logo-link",children:s("img",{src:o,width:31,height:22,style:{minWidth:31},alt:"Light Labs"})}),s("div",{className:"ll-divider"}),s("div",{className:"ll-content",children:[s("div",{className:"ll-text-row",children:[s("p",{className:"ll-text-tested-by ll-text-ellipsis",children:"Tested by Light Labs in"}),s("div",{className:"ll-time-pill",children:i})]}),s("div",{className:"ll-text-row",children:[s("p",{className:"ll-test-results ll-text-ellipsis",children:pt}),s(K,{})]})]})]})})};var sl=()=>{let[t,l]=z(window.lightlabs?.externalId??null),[i,o]=z(null),{externalId:r}=I(),e=!!r;if(B(()=>{if(e)return;let a=()=>l(window.lightlabs.externalId);return window.addEventListener("lightlabs:externalIdChanged",a),()=>window.removeEventListener("lightlabs:externalIdChanged",a)},[e]),B(()=>{if(e)return;if(t!==null)return;let a=setInterval(()=>{let g=window.ShopifyAnalytics?.meta?.selectedVariantId?.toString();if(g&&g!==i)N.log("Applying variant",{shopifyVariant:g,variant:i}),o(g)},1000);return()=>{clearInterval(a)}},[i,t,e]),e)return r;return t??i};var yt=(t)=>{let l=sl(),{productId:i}=I();return ol(()=>{if(!t)return N.log("No products loaded"),null;if(i){let a=t.find((g)=>g.id===parseInt(i));if(a)return N.log("Matched product by ID:",a),a}if(l){let a=t.find((g)=>g.externalIds.includes(l));if(a)return N.log("Matched product by external ID:",a),a}let o=decodeURIComponent(location.href).toLowerCase(),r=t.map((a)=>{let g=a.slugsToMatch.find((c)=>o.includes(c.toLowerCase()));return g?{product:a,slug:g}:null}).filter(Boolean).sort((a,g)=>g.slug.length-a.slug.length);if(l&&r.length>1){let a=r.find((g)=>g.product.externalIds.includes(l));if(a)return N.log("Matched product by slug + external ID:",a.product),a.product}let e=r[0]?.product;if(e)return N.log("Matched product by slug:",e),e;return N.log("No match found for URL:",location.href),null},[t,i,l])};var Ct=(t,l)=>{let i=new Date(t);if(i instanceof Date&&i.toString()!=="Invalid Date")return i.toLocaleDateString("default",{month:"long",year:"numeric",day:"numeric",...l});return null};var nt=({width:t=10,height:l=10,stroke:i="black",strokeWidth:o=1.5})=>s("svg",{width:t,height:l,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s("title",{children:"Close"}),s("path",{d:"M1 1L8 8M1 8L8 1",stroke:i,strokeWidth:o})]});var Lt=(t)=>s("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[s("title",{children:"Left Arrow"}),s("path",{d:"M0.601562 5.10156L5.10156 0.625C5.3125 0.390625 5.66406 0.390625 5.89844 0.625C6.10938 0.835938 6.10938 1.1875 5.89844 1.39844L1.77344 5.5L5.875 9.625C6.10938 9.83594 6.10938 10.1875 5.875 10.3984C5.66406 10.6328 5.3125 10.6328 5.10156 10.3984L0.601562 5.89844C0.367188 5.6875 0.367188 5.33594 0.601562 5.10156Z",fill:"#2B2B2B"})]});var kt=({width:t=10,height:l=10})=>s("svg",{width:t,height:l,viewBox:"0 0 14 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s("title",{children:"Share"}),s("path",{d:"M7.875 5.8125H8.53125C8.88672 5.8125 9.1875 6.11328 9.1875 6.46875V7.125V7.91797L12.4688 4.9375L9.1875 1.98438V2.75V3.40625C9.1875 3.78906 8.88672 4.0625 8.53125 4.0625H7.875H4.8125C2.87109 4.0625 1.3125 5.64844 1.3125 7.5625C1.3125 8 1.33984 8.38281 1.44922 8.71094C1.91406 7.04297 3.41797 5.8125 5.25 5.8125H7.875ZM7.875 7.125V7.15234H6.5625H5.25C3.80078 7.15234 2.625 8.32812 2.625 9.77734C2.625 10.2422 2.73438 10.5977 2.87109 10.8711C2.92578 10.9531 2.95312 11.0078 3.00781 11.0898C3.08984 11.1719 3.14453 11.2539 3.22656 11.3086C3.22656 11.3359 3.25391 11.3359 3.25391 11.3633C3.39062 11.5 3.47266 11.6641 3.47266 11.8555C3.47266 12.1562 3.25391 12.375 2.95312 12.375C2.87109 12.375 2.78906 12.375 2.73438 12.3477C2.65234 12.293 2.54297 12.2383 2.43359 12.1562C2.35156 12.1016 2.26953 12.0469 2.1875 11.9922C2.07812 11.9102 1.96875 11.8281 1.85938 11.7461C1.03906 11.0352 0 9.69531 0 7.5625C0 4.91016 2.13281 2.75 4.8125 2.75H6.5625H7.875V1.4375V1C7.875 0.671875 8.06641 0.34375 8.39453 0.207031C8.69531 0.0703125 9.07812 0.125 9.32422 0.371094L13.6992 4.30859C13.8906 4.47266 14 4.69141 14 4.9375C14 5.21094 13.8906 5.42969 13.6992 5.59375L9.32422 9.53125C9.07812 9.77734 8.69531 9.83203 8.39453 9.69531C8.06641 9.55859 7.875 9.23047 7.875 8.875V8.4375V7.125Z",fill:"white"})]});var Nt=({toastRef:t})=>{let[l,i]=z(!1),[o,r]=z(null),e=S(void 0),a=S(void 0);return el(t,()=>({open:(g,c=2000)=>{clearTimeout(e.current),clearTimeout(a.current),r(g),i(!0),e.current=setTimeout(()=>i(!1),c),a.current=setTimeout(()=>r(null),c+300)}})),s("div",{className:"ll-toast-container",children:s("div",{className:`ll-toast ${l?"ll-fade-in":"ll-fade-out"}`,children:!!o&&s("div",{className:"ll-toast-content",children:o})})})};var qt="lightlabs-widget, lightlabs-sticker",Vt=new Set,Nl=({product:t,dialogRef:l})=>{let[i,o]=z(!1),[r,e]=z("index"),{apiUrl:a,companyId:g,shopDomain:c,widgetType:b}=I(),w=g||c,m=sl(),d=S(null),h=S(null),y=S(null),k=S(),x=`ll-${b}-open`,p=nl(()=>{clearTimeout(k.current),h.current?.showModal(),o(!0),et(x,String(t.id))},[x,t.id]),v=nl(()=>{h.current?.close(),ot(x),k.current=setTimeout(()=>o(!1),200)},[x]);return el(l,()=>({open:p,close:v})),B(()=>{let C=h.current?.closest(qt);if(C)C.openModal=p,C.closeModal=v;window.lightlabs.openModal=p;let F,Y=`${x}=${t.id}`;if(rl(x)===String(t.id)&&!Vt.has(Y))Vt.add(Y),F=setTimeout(p,1000);let $=(G)=>{switch(G.data){case"LL_INDEX_PAGE":return e("index");case"LL_HISTORY_PAGE":return e("history")}};return window.addEventListener("message",$),()=>{if(clearTimeout(F),window.removeEventListener("message",$),C?.openModal===p)C.openModal=void 0;if(C?.closeModal===v)C.closeModal=void 0}},[p,v,x,t.id]),s("dialog",{className:"ll-dialog",ref:h,onClick:(C)=>{if(C.target===h.current)C.stopPropagation(),v()},"aria-label":"Light Labs testing report",children:s("div",{className:"ll-backdrop",onClick:(C)=>{C.stopPropagation(),v()},onKeyDown:(C)=>C.key==="Escape"&&v(),children:s("div",{className:"ll-dialog-content",onClick:(C)=>C.stopPropagation(),children:[s("header",{children:[r==="index"?s("button",{type:"button",className:"ll-share-button",onClick:()=>{navigator.clipboard.writeText(window.location.href),y.current?.open("Share link copied to clipboard")},"aria-label":"Share",children:s(kt,{width:14,height:13})}):s("button",{type:"button",className:"ll-go-back-button",onClick:()=>{d?.current?.contentWindow?.postMessage("LL_GO_BACK","*")},children:[s(Lt,{}),"Back"]}),s("button",{type:"button",className:"ll-logo","aria-label":"Light Labs home (opens in new tab)",onClick:()=>{window.open(`https://lightlabs.com/?utm_medium=modal&utm_campaign=pip_logo_click&utm_source=${window.location.hostname}&utm_content=${w?`${w}_${t.id}`:t.id}`)},children:s("img",{src:`${a}/brand/logo.svg`,width:128,height:25,alt:"Light Labs"})}),s("button",{type:"button",className:"ll-close-button","aria-label":"Close",onClick:(C)=>{C.preventDefault(),v()},children:s(nt,{width:20,height:20,stroke:"#364153"})})]}),i&&s("iframe",{ref:d,title:"Light Labs Comprehensive Testing Report",src:`${a}/comprehensive-testing-report/${w}/${t.id}?hide_header=1&external_id=${m||""}&referrer_url=${encodeURIComponent(window.location.origin+window.location.pathname)}`}),s(Nt,{toastRef:y})]})})})};function Vl(t,...l){let i=[...t],o=[],{isArray:r}=Array,e=0;while(e<l.length){let c=l[e];if(typeof c==="string")i[e]+=c+i[e+1],i.splice(e+1,1),l.splice(e,1);else e++}l.forEach((c,b)=>{if(typeof c==="number")l[b]=[c,c];else if(r(c))if(typeof c[0]==="number")l[b]=[c[0],typeof c[1]==="function"?c[1](c[0]):null];else throw TypeError("First item in array must be a Number")});let a=l.find(r),g;for(let c of i){if(r(g)&&g[1]==null)c=c.replace(/^\s+/,"");if(a)o.push(c.replace(/\[([^|]*)\|([^\]]*)\]/g,a[0]===1?"$1":"$2"));else o.push(c);if(!l.length)break;a=l.find(r)||a,g=l.shift(),o.push(g===a?a?.[1]:g)}return o.join("")}var zt=()=>{let{apiUrl:t,visible:l,companyId:i}=I(),o=wt(),{products:r,theme:e}=o||{},a=yt(r),g=a?.testsCount,c=a?.lastTestDate,b=S(null),w=S(null),m=gl(w,{attachKey:a});if(dl())return s(xt,{});if(!a)return null;if(!l)return s("div",{className:"lightlabs lightlabs-widget",children:s(Nl,{dialogRef:b,product:a})});let d=i?`${i}_${a.id}`:String(a.id),h=`https://lightlabs.com/?utm_medium=widget&utm_campaign=pip_logo_click&utm_source=${window.location.hostname}&utm_content=${d}`;return s("div",{ref:w,className:`lightlabs lightlabs-widget ${e||""} ${m}`,children:[s("div",{className:"ll-container",children:[s("a",{className:"ll-logo-link",target:"_blank",rel:"noopener noreferrer",href:h,"aria-label":"Visit Light Labs website (opens in new tab)",children:s("img",{src:`${t}/brand/icon.svg`,width:31,height:22,style:{minWidth:31},alt:"Light Labs"})}),s("div",{className:"ll-divider"}),s("button",{type:"button",className:"ll-content ll-text-ellipsis",onClick:()=>b.current?.open(),children:[s("div",{className:"ll-text-row",children:[s("p",{className:"ll-text-tested-by ll-text-ellipsis",children:["Tested by Light Labs"," ",c?s("span",{className:"ll-animate-opacity",children:"in"}):""]}),c&&s("div",{className:"ll-time-pill ll-animate-opacity",children:Ct(c,{day:void 0,month:"short"})})]}),s("div",{className:"ll-text-row",children:[s("p",{className:"ll-test-results ll-text-ellipsis",children:g!=null?Vl`${g} substance[|s] tested for quality`:"Loading test results..."}),g!=null&&s(K,{})]})]})]}),s(Nl,{dialogRef:b,product:a})]})};var St=`lightlabs-widget .lightlabs.lightlabs-widget {
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    border: none;
    text-decoration: none;
    list-style: none;
    appearance: none;
  }

  svg,
  img {
    width: auto;
    height: auto;
    max-width: 100%;
  }

  .ll-animate-opacity {
    opacity: 0;
    animation: llOpacityUp 0.1s ease 0.1s forwards;
  }

  .ll-container {
    display: flex;
    align-items: center;
    margin: var(--ll-spacing-md) 0;
    min-width: 300px;
    max-width: 600px;
    height: 68px;
    border-radius: var(--ll-border-radius);
    border: 1px solid var(--ll-color-border);
    box-shadow: 0px 4px 8px 0px var(--ll-color-shadow);
    background: var(--ll-color-background);
    user-select: none;
    font-family: var(--ll-font-family);
    box-sizing: border-box;

    @media (max-width: 400px) {
      min-width: unset;
    }

    .ll-logo-link {
      display: inline-flex;
      align-items: center;
      padding: 0 var(--ll-spacing-xl);
      height: 68px;
      text-decoration: none;
      background: none;
    }

    .ll-logo-link:focus-visible {
      outline: 2px solid var(--ll-color-primary);
      outline-offset: -2px;
    }

    .ll-divider {
      display: block;
      width: 0.6px;
      height: 44px;
      background: transparent;
      backdrop-filter: brightness(0.8);
    }

    .ll-content:focus-visible {
      outline: 2px solid var(--ll-color-primary);
      outline-offset: -2px;
    }

    .ll-content {
      all: unset;
      text-transform: none;
      box-sizing: border-box;
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: var(--ll-spacing-xs);
      padding: var(--ll-spacing-lg) var(--ll-spacing-xxl);
      cursor: pointer;
      -webkit-font-smoothing: antialiased;
      letter-spacing: normal;
      font-style: normal;
      font-family: var(--ll-font-family);
      text-align: left;

      .ll-text-row {
        display: flex;
        align-items: center;
        gap: var(--ll-spacing-sm);
        color: var(--ll-color-text);

        svg {
          color: inherit;
        }
      }

      .ll-text-tested-by {
        color: var(--ll-color-text);
        margin: 0;
        font-weight: 400;
        font-size: 13.5px;
        line-height: 20px;
      }

      .ll-test-results {
        color: var(--ll-color-text);
        margin: 0;
        font-weight: 300;
        font-size: 13.5px;
        line-height: 20px;
      }

      .ll-time-pill {
        color: black;
        height: 18px;
        border-radius: var(--ll-border-radius);
        padding: 1px var(--ll-spacing-sm);
        background: var(--ll-color-backdrop);
        line-height: 15px;
        font-weight: 400;
        font-size: 10.5px;
        text-align: center;
        text-transform: uppercase;
        white-space: nowrap;
      }
    } /* .ll-content */

    .ll-text-ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

  } /* .ll-container */

  &.ll-compact .ll-container {
    .ll-logo-link {
      padding: 0 0 0 var(--ll-spacing-lg);
    }

    .ll-divider {
      display: none;
    }

    .ll-content {
      padding: var(--ll-spacing-lg);
    }
  }

  &.ll-extra-compact .ll-container {
    .ll-logo-link {
      padding: 0 0 0 var(--ll-spacing-md);
    }

    .ll-divider {
      display: none;
    }

    .ll-content {
      padding: var(--ll-spacing-md);
    }

    .ll-text-row {
      gap: var(--ll-spacing-xs);
    }
  }
} /* .lightlabs.lightlabs-widget */

@keyframes llOpacityUp {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Custom themes */
lightlabs-widget .lightlabs.lightlabs-widget.dark {
  .ll-container {
    --ll-color-text: #e8e8e8;
    --ll-color-border: rgba(255, 255, 255, 0.08);
    --ll-color-shadow: rgba(0, 0, 0, 0.5);
    --ll-color-background: rgba(35, 35, 40, 0.92);
    --ll-color-backdrop: rgba(87, 124, 255, 0.18);

    .ll-content {
      .ll-time-pill {
        color: #b5caff;
      }
    }

    .ll-divider {
      background: rgba(255, 255, 255, 0.1);
    }
  }
}
`;gt();var Ot=it("lightlabs-widget");class Gt extends HTMLElement{static get observedAttributes(){return["external-id"]}openModal;closeModal;initialized=!1;renderConfig=null;connectedCallback(){if(this.initialized)return;this.initialized=!0,window.lightlabs.debug||=!!H(this,"debug");let t=H(this,"company-id"),l=dt(H(this,"shop-domain"));if(!(t||l))return;let i=H(this,"api-url")||rt,o=H(this,"product-id"),r=H(this,"visible")!=="false",e=H(this,"external-id");st(this,zl+St+ft+Sl),this.renderConfig={companyId:t,shopDomain:l,apiUrl:i,productId:o,visible:r,externalId:e},this.renderWidget()}attributeChangedCallback(t,l,i){if(t==="external-id"&&l!==i&&this.renderConfig)this.renderConfig.externalId=i,this.renderWidget()}renderWidget(){let{companyId:t,shopDomain:l,apiUrl:i,productId:o,visible:r,externalId:e}=this.renderConfig;Tl(s(vt,{config:{companyId:t,shopDomain:l,apiUrl:i,productId:o,visible:r,widgetType:"widget",externalId:e},children:s(zt,{})}),this)}}bt("lightlabs-widget",Gt);Ot.log("Initialized");})();
