import{aa as W,aI as $,r as T,j as P,a8 as Ee,ai as A,aM as re,ar as X,aU as Ae,ae as le,aV as Se,aJ as _,aW as Le,aT as ie,ay as Te,aX as _e,ad as B,aY as ce,as as ke,ab as Fe,aO as Be,H as Re,ag as De,ac as Ie,a6 as Me,aw as He,J as Ne,a as D,N as U,aZ as Z,a_ as Ve,C as We,D as $e,a9 as je,F as qe,M as ze,T as Ue}from"./entry.af4b25f0.js";import{m as Ye,u as Ge}from"./dimensions.85878954.js";import{B as K,g as ue,n as Je,a as Xe,s as Ze}from"./forwardRefs.a44f5a39.js";import{p as fe,f as Q,b as ee,c as ve,g as de}from"./VProgressLinear.58e0b888.js";import{m as Ke,M as Qe}from"./transition.c0b5a353.js";import{c as et,d as tt}from"./router.4d4a04cb.js";import{u as nt}from"./color.16bf09b2.js";import{u as ot}from"./hydration.80aaf091.js";import{u as at}from"./useRender.711bb119.js";function pe(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function rt(e){for(;e;){if(se(e))return e;e=e.parentElement}return document.scrollingElement}function G(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(se(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function se(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function lt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const it=W({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function st(e,t){const n={},o=a=>()=>{if(!$)return Promise.resolve(!0);const c=a==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(l=>{const i=parseInt(e[a]??0,10);n[a]=window.setTimeout(()=>{t==null||t(c),l(c)},i)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const ct=Symbol.for("vuetify:v-menu"),ut=W({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...it()},"v-overlay-activator");function ft(e,t){let{isActive:n,isTop:o}=t;const a=T();let c=!1,l=!1,i=!0;const u=P(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=P(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!u.value),{runOpenDelay:s,runCloseDelay:g}=st(e,r=>{r===(e.openOnHover&&c||u.value&&l)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==r&&(i=!0),n.value=r)}),b={click:r=>{r.stopPropagation(),a.value=r.currentTarget||r.target,n.value=!n.value},mouseenter:r=>{c=!0,a.value=r.currentTarget||r.target,s()},mouseleave:r=>{c=!1,g()},focus:r=>{Le&&!r.target.matches(":focus-visible")||(l=!0,r.stopPropagation(),a.value=r.currentTarget||r.target,s())},blur:r=>{l=!1,r.stopPropagation(),g()}},S=P(()=>{const r={};return f.value&&(r.click=b.click),e.openOnHover&&(r.mouseenter=b.mouseenter,r.mouseleave=b.mouseleave),u.value&&(r.focus=b.focus,r.blur=b.blur),r}),d=P(()=>{const r={};if(e.openOnHover&&(r.mouseenter=()=>{c=!0,s()},r.mouseleave=()=>{c=!1,g()}),e.closeOnContentClick){const I=Ee(ct,null);r.click=()=>{n.value=!1,I==null||I.closeParents()}}return r}),v=P(()=>{const r={};return e.openOnHover&&(r.mouseenter=()=>{i&&(c=!0,i=!1,s())},r.mouseleave=()=>{c=!1,g()}),r});A(o,r=>{r&&(e.openOnHover&&!c&&(!u.value||!l)||u.value&&!l&&(!e.openOnHover||!c))&&(n.value=!1)});const x=T();re(()=>{x.value&&X(()=>{const r=x.value;a.value=Ae(r)?r.$el:r})});const O=le("useActivator");let E;return A(()=>!!e.activator,r=>{r&&$?(E=Se(),E.run(()=>{vt(e,O,{activatorEl:a,activatorEvents:S})})):E&&E.stop()},{flush:"post",immediate:!0}),_(()=>{var r;(r=E)==null||r.stop()}),{activatorEl:a,activatorRef:x,activatorEvents:S,contentEvents:d,scrimEvents:v}}function vt(e,t,n){let{activatorEl:o,activatorEvents:a}=n;A(()=>e.activator,(u,f)=>{if(f&&u!==f){const s=i(f);s&&l(s)}u&&X(()=>c())},{immediate:!0}),A(()=>e.activatorProps,()=>{c()}),_(()=>{l()});function c(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&(Object.entries(a.value).forEach(s=>{let[g,b]=s;u.addEventListener(g,b)}),Object.keys(f).forEach(s=>{f[s]==null?u.removeAttribute(s):u.setAttribute(s,f[s])}))}function l(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&(Object.entries(a.value).forEach(s=>{let[g,b]=s;u.removeEventListener(g,b)}),Object.keys(f).forEach(s=>{u.removeAttribute(s)}))}function i(){var u;let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,s;if(f)if(f==="parent"){var g,b;let S=t==null||(g=t.proxy)==null||(b=g.$el)==null?void 0:b.parentNode;for(;S.hasAttribute("data-no-activator");)S=S.parentNode;s=S}else typeof f=="string"?s=document.querySelector(f):"$el"in f?s=f.$el:s=f;return o.value=((u=s)==null?void 0:u.nodeType)===Node.ELEMENT_NODE?s:null,o.value}}const dt=W({eager:Boolean},"lazy");function mt(e,t){const n=T(!1),o=P(()=>n.value||e.eager||t.value);A(t,()=>n.value=!0);function a(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:o,onAfterLeave:a}}function te(e,t){return{x:e.x+t.x,y:e.y+t.y}}function yt(e,t){return{x:e.x-t.x,y:e.y-t.y}}function me(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,c=n==="top"?0:n==="bottom"?t.height:n;return te({x:a,y:c},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,c=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return te({x:a,y:c},t)}return te({x:t.width/2,y:t.height/2},t)}const Oe={static:bt,connected:Et},gt=W({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Oe},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function ht(e,t){const n=T({}),o=T();$&&(ie(()=>!!(t.isActive.value&&e.locationStrategy),c=>{if(A(()=>e.locationStrategy,c),_(()=>{o.value=void 0}),typeof e.locationStrategy=="function"){var l;o.value=(l=e.locationStrategy(t,e,n))==null?void 0:l.updateLocation}else{var i;o.value=(i=Oe[e.locationStrategy](t,e,n))==null?void 0:i.updateLocation}}),window.addEventListener("resize",a,{passive:!0}),_(()=>{window.removeEventListener("resize",a),o.value=void 0}));function a(c){var l;(l=o.value)==null||l.call(o,c)}return{contentStyles:n,updateLocation:o}}function bt(){}function wt(e){const t=Je(e);return t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Et(e,t,n){lt(e.activatorEl.value)&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:a,preferredOrigin:c}=Te(()=>{const d=fe(t.location,e.isRtl.value),v=t.origin==="overlap"?d:t.origin==="auto"?Q(d):fe(t.origin,e.isRtl.value);return d.side===v.side&&d.align===ee(v).align?{preferredAnchor:ve(d),preferredOrigin:ve(v)}:{preferredAnchor:d,preferredOrigin:v}}),[l,i,u,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>P(()=>{const v=parseFloat(t[d]);return isNaN(v)?1/0:v})),s=P(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const d=t.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let g=!1;const b=new ResizeObserver(()=>{g&&S()});A([e.activatorEl,e.contentEl],(d,v)=>{let[x,O]=d,[E,r]=v;E&&b.unobserve(E),x&&b.observe(x),r&&b.unobserve(r),O&&b.observe(O)},{immediate:!0}),_(()=>{b.disconnect()});function S(){if(g=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>g=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const d=e.activatorEl.value.getBoundingClientRect(),v=wt(e.contentEl.value),x=G(e.contentEl.value),O=12;x.length||(x.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const E=x.reduce((k,w)=>{const m=w.getBoundingClientRect(),h=new K({x:w===document.documentElement?0:m.x,y:w===document.documentElement?0:m.y,width:w.clientWidth,height:w.clientHeight});return k?new K({x:Math.max(k.left,h.left),y:Math.max(k.top,h.top),width:Math.min(k.right,h.right)-Math.max(k.left,h.left),height:Math.min(k.bottom,h.bottom)-Math.max(k.top,h.top)}):h},void 0);E.x+=O,E.y+=O,E.width-=O*2,E.height-=O*2;let r={anchor:a.value,origin:c.value};function I(k){const w=new K(v),m=me(k.anchor,d),h=me(k.origin,w);let{x:C,y:L}=yt(m,h);switch(k.anchor.side){case"top":L-=s.value[0];break;case"bottom":L+=s.value[0];break;case"left":C-=s.value[0];break;case"right":C+=s.value[0];break}switch(k.anchor.align){case"top":L-=s.value[1];break;case"bottom":L+=s.value[1];break;case"left":C-=s.value[1];break;case"right":C+=s.value[1];break}return w.x+=C,w.y+=L,w.width=Math.min(w.width,u.value),w.height=Math.min(w.height,f.value),{overflows:ue(w,E),x:C,y:L}}let M=0,H=0;const N={x:0,y:0},j={x:!1,y:!1};let q=-1;for(;;){if(q++>10){_e("Infinite loop detected in connectedLocationStrategy");break}const{x:k,y:w,overflows:m}=I(r);M+=k,H+=w,v.x+=k,v.y+=w;{const h=de(r.anchor),C=m.x.before||m.x.after,L=m.y.before||m.y.after;let V=!1;if(["x","y"].forEach(p=>{if(p==="x"&&C&&!j.x||p==="y"&&L&&!j.y){const y={anchor:{...r.anchor},origin:{...r.origin}},F=p==="x"?h==="y"?ee:Q:h==="y"?Q:ee;y.anchor=F(y.anchor),y.origin=F(y.origin);const{overflows:Y}=I(y);(Y[p].before<=m[p].before&&Y[p].after<=m[p].after||Y[p].before+Y[p].after<(m[p].before+m[p].after)/2)&&(r=y,V=j[p]=!0)}}),V)continue}m.x.before&&(M+=m.x.before,v.x+=m.x.before),m.x.after&&(M-=m.x.after,v.x-=m.x.after),m.y.before&&(H+=m.y.before,v.y+=m.y.before),m.y.after&&(H-=m.y.after,v.y-=m.y.after);{const h=ue(v,E);N.x=E.width-h.x.before-h.x.after,N.y=E.height-h.y.before-h.y.after,M+=h.x.before,v.x+=h.x.before,H+=h.y.before,v.y+=h.y.before}break}const R=de(r.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${r.anchor.side} ${r.anchor.align}`,transformOrigin:`${r.origin.side} ${r.origin.align}`,top:B(ye(H)),left:B(ye(M)),minWidth:B(R==="y"?Math.min(l.value,d.width):l.value),maxWidth:B(ge(ce(N.x,l.value===1/0?0:l.value,u.value))),maxHeight:B(ge(ce(N.y,i.value===1/0?0:i.value,f.value)))}),{available:N,contentBox:v}}return A(()=>[a.value,c.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>S()),X(()=>{const d=S();if(!d)return;const{available:v,contentBox:x}=d;x.height>v.y&&requestAnimationFrame(()=>{S(),requestAnimationFrame(()=>{S()})})}),{updateLocation:S}}function ye(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function ge(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ne=!0;const J=[];function St(e){!ne||J.length?(J.push(e),oe()):(ne=!1,e(),oe())}let he=-1;function oe(){cancelAnimationFrame(he),he=requestAnimationFrame(()=>{const e=J.shift();e&&e(),J.length?oe():ne=!0})}const ae={none:null,close:Ot,block:xt,reposition:Pt},kt=W({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ae}},"v-overlay-scroll-strategies");function pt(e,t){if(!$)return;let n;re(async()=>{var o;(o=n)==null||o.stop(),t.isActive.value&&e.scrollStrategy&&(n=Se(),await X(),n.run(()=>{if(typeof e.scrollStrategy=="function")e.scrollStrategy(t,e,n);else{var a;(a=ae[e.scrollStrategy])==null||a.call(ae,t,e,n)}}))}),_(()=>{var o;(o=n)==null||o.stop()})}function Ot(e){function t(n){e.isActive.value=!1}xe(e.activatorEl.value??e.contentEl.value,t)}function xt(e,t){var n;const o=(n=e.root.value)==null?void 0:n.offsetParent,a=[...new Set([...G(e.activatorEl.value,t.contained?o:void 0),...G(e.contentEl.value,t.contained?o:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),c=window.innerWidth-document.documentElement.offsetWidth,l=(i=>se(i)&&i)(o||document.documentElement);l&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((i,u)=>{i.style.setProperty("--v-body-scroll-x",B(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",B(-i.scrollTop)),i.style.setProperty("--v-scrollbar-offset",B(c)),i.classList.add("v-overlay-scroll-blocked")}),_(()=>{a.forEach((i,u)=>{const f=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),s=parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-f,i.scrollTop=-s}),l&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Pt(e,t,n){let o=!1,a=-1,c=-1;function l(i){St(()=>{var u,f;const s=performance.now();(u=(f=e.updateLocation).value)==null||u.call(f,i),o=(performance.now()-s)/(1e3/60)>2})}c=requestIdleCallback(()=>{n.run(()=>{xe(e.activatorEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{l(i)})})):l(i)})})}),_(()=>{cancelIdleCallback(c),cancelAnimationFrame(a)})}function xe(e,t){const n=[document,...G(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),_(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}function Ct(){const t=le("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const be=Symbol.for("vuetify:stack"),z=ke([]);function At(e,t,n){const o=le("useStack"),a=!n,c=Ee(be,void 0),l=ke({activeChildren:new Set});Fe(be,l);const i=T(+t.value);ie(e,()=>{var s;const g=(s=z.at(-1))==null?void 0:s[1];i.value=g?g+10:+t.value,a&&z.push([o.uid,i.value]),c==null||c.activeChildren.add(o.uid),_(()=>{if(a){const b=z.findIndex(S=>S[0]===o.uid);z.splice(b,1)}c==null||c.activeChildren.delete(o.uid)})});const u=T(!0);a&&re(()=>{var s;const g=((s=z.at(-1))==null?void 0:s[0])===o.uid;setTimeout(()=>u.value=g)});const f=P(()=>!l.activeChildren.size);return{globalTop:Be(u),localTop:f,stackStyles:P(()=>({zIndex:i.value}))}}function Lt(e){return{teleportTarget:P(()=>{const n=e.value;if(n===!0||!$)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let a=o.querySelector(".v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Tt(){return!0}function Pe(e,t,n){if(!e||Ce(e,n)===!1)return!1;const o=pe(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(c=>c==null?void 0:c.contains(e.target))}function Ce(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Tt)(e)}function _t(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Pe(e,t,n)&&setTimeout(()=>{Ce(e,n)&&o&&o(e)},0)}function we(e,t){const n=pe(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Ft={mounted(e,t){const n=a=>_t(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=Pe(a,e,t)};we(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(we(e,n=>{var o;if(!n||!((o=e._clickOutside)!=null&&o[t.instance.$.uid]))return;const{onClick:a,onMousedown:c}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",a,!0),n.removeEventListener("mousedown",c,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Bt(e){const{modelValue:t,color:n,...o}=e;return D(Ue,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&D("div",U({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Rt=W({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...ut(),...Ye(),...dt(),...gt(),...kt(),...Re(),...Ke()},"v-overlay"),Dt=De()({name:"VOverlay",directives:{ClickOutside:Ft},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Rt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const c=Ie(e,"modelValue"),l=P({get:()=>c.value,set:y=>{y&&e.disabled||(c.value=y)}}),{teleportTarget:i}=Lt(P(()=>e.attach||e.contained)),{themeClasses:u}=Me(e),{rtlClasses:f,isRtl:s}=He(),{hasContent:g,onAfterLeave:b}=mt(e,l),S=nt(P(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:v,stackStyles:x}=At(l,Ne(e,"zIndex"),e._disableGlobalStack),{activatorEl:O,activatorRef:E,activatorEvents:r,contentEvents:I,scrimEvents:M}=ft(e,{isActive:l,isTop:v}),{dimensionStyles:H}=Ge(e),N=ot(),{scopeId:j}=Ct();A(()=>e.disabled,y=>{y&&(l.value=!1)});const q=T(),R=T(),{contentStyles:k,updateLocation:w}=ht(e,{isRtl:s,contentEl:R,activatorEl:O,isActive:l});pt(e,{root:q,contentEl:R,activatorEl:O,isActive:l,updateLocation:w});function m(y){a("click:outside",y),e.persistent?p():l.value=!1}function h(){return l.value&&d.value}$&&A(l,y=>{y?window.addEventListener("keydown",C):window.removeEventListener("keydown",C)},{immediate:!0});function C(y){y.key==="Escape"&&d.value&&(e.persistent?p():l.value=!1)}const L=et();ie(()=>e.closeOnBack,()=>{tt(L,y=>{d.value&&l.value?(y(!1),e.persistent?p():l.value=!1):y()})});const V=T();A(()=>l.value&&(e.absolute||e.contained)&&i.value==null,y=>{if(y){const F=rt(q.value);F&&F!==document.scrollingElement&&(V.value=F.scrollTop)}});function p(){e.noClickAnimation||R.value&&Xe(R.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Ze})}return at(()=>{var y,F;return D(qe,null,[(y=n.activator)==null?void 0:y.call(n,{isActive:l.value,props:U({ref:E},Z(r.value),e.activatorProps)}),N.value&&D(Ve,{disabled:!i.value,to:i.value},{default:()=>[g.value&&D("div",U({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},u.value,f.value],style:[x.value,{top:B(V.value)}],ref:q},j,o),[D(Bt,U({color:S,modelValue:l.value&&!!e.scrim},Z(M.value)),null),D(Qe,{appear:!0,persisted:!0,transition:e.transition,target:O.value,onAfterLeave:()=>{b(),a("afterLeave")}},{default:()=>[We(D("div",U({ref:R,class:["v-overlay__content",e.contentClass],style:[H.value,k.value]},Z(I.value),e.contentProps),[(F=n.default)==null?void 0:F.call(n,{isActive:l})]),[[$e,l.value],[je("click-outside"),{handler:m,closeConditional:h,include:()=>[O.value]}]])]})])]})])}),{activatorEl:O,animateClick:p,contentEl:R,globalTop:d,localTop:v,updateLocation:w}}});function zt(e){return ze(e,Object.keys(Dt.props))}export{Dt as V,Rt as a,Ct as b,ct as c,zt as f,dt as m,mt as u};
