import{B as V,a as r,j as b,aU as p,a5 as D,aC as E,J as M,T as q,r as _,O as z,y as x,R as H,z as O,a4 as U,F as L,ae as J,A as G}from"./entry.c9a1c00a.js";import{m as K,u as Q}from"./dimensions.23812d78.js";import{u as B}from"./useRender.0a1b1031.js";function X(e){return{aspectStyles:b(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const Y=V({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...K()},setup(e,l){let{slots:i}=l;const{aspectStyles:n}=X(e),{dimensionStyles:v}=Q(e);return B(()=>{var a;return r("div",{class:"v-responsive",style:v.value},[r("div",{class:"v-responsive__sizer",style:n.value},null),(a=i.additional)==null?void 0:a.call(i),i.default&&r("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}});function Z(e,l){if(!p)return;const i=l.modifiers||{},n=l.value,{handler:v,options:a}=typeof n=="object"?n:{handler:n,options:{}},s=new IntersectionObserver(function(){var d;let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const c=(d=e._observe)==null?void 0:d[l.instance.$.uid];if(!c)return;const f=g.some(S=>S.isIntersecting);v&&(!i.quiet||c.init)&&(!i.once||f||c.init)&&v(f,g,u),f&&i.once?C(e,l):c.init=!0},a);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:s},s.observe(e)}function C(e,l){var i;const n=(i=e._observe)==null?void 0:i[l.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const ee={mounted:Z,unmounted:C},te=ee,ne=D({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),y=(e,l)=>{let{slots:i}=l;const{transition:n,...v}=e,{component:a=q,...s}=typeof n=="object"?n:{};return E(a,M(typeof n=="string"?{name:n}:s,v),i)},le=V({name:"VImg",directives:{intersect:te},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...ne()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:i,slots:n}=l;const v=_(""),a=_(),s=_(e.eager?"loading":"idle"),d=_(),g=_(),u=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),c=b(()=>u.value.aspect||d.value/g.value||0);z(()=>e.src,()=>{f(s.value!=="idle")}),z(c,(t,o)=>{!t&&o&&a.value&&h(a.value)}),x(()=>f());function f(t){if(!(e.eager&&t)&&!(p&&!t&&!e.eager)){if(s.value="loading",u.value.lazySrc){const o=new Image;o.src=u.value.lazySrc,h(o,null)}u.value.src&&H(()=>{var o,m;if(i("loadstart",((o=a.value)==null?void 0:o.currentSrc)||u.value.src),(m=a.value)!=null&&m.complete){if(a.value.naturalWidth||$(),s.value==="error")return;c.value||h(a.value,null),S()}else c.value||h(a.value),I()})}}function S(){var t;I(),s.value="loaded",i("load",((t=a.value)==null?void 0:t.currentSrc)||u.value.src)}function $(){var t;s.value="error",i("error",((t=a.value)==null?void 0:t.currentSrc)||u.value.src)}function I(){const t=a.value;t&&(v.value=t.currentSrc||t.src)}let R=-1;function h(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{clearTimeout(R);const{naturalHeight:N,naturalWidth:j}=t;N||j?(d.value=j,g.value=N):!t.complete&&s.value==="loading"&&o!=null?R=window.setTimeout(m,o):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,g.value=1)};m()}const w=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),F=()=>{var t;if(!u.value.src||s.value==="idle")return null;const o=r("img",{class:["v-img__img",w.value],src:u.value.src,srcset:u.value.srcset,alt:"",sizes:e.sizes,ref:a,onLoad:S,onError:$},null),m=(t=n.sources)==null?void 0:t.call(n);return r(y,{transition:e.transition,appear:!0},{default:()=>[O(m?r("picture",{class:"v-img__picture"},[m,o]):o,[[G,s.value==="loaded"]])]})},P=()=>r(y,{transition:e.transition},{default:()=>[u.value.lazySrc&&s.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",w.value],src:u.value.lazySrc,alt:""},null)]}),W=()=>n.placeholder?r(y,{transition:e.transition,appear:!0},{default:()=>[(s.value==="loading"||s.value==="error"&&!n.error)&&r("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,k=()=>n.error?r(y,{transition:e.transition,appear:!0},{default:()=>[s.value==="error"&&r("div",{class:"v-img__error"},[n.error()])]}):null,A=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,T=_(!1);{const t=z(c,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{T.value=!0})}),t())})}return B(()=>O(r(Y,{class:["v-img",{"v-img--booting":!T.value}],style:{width:J(e.width==="auto"?d.value:e.width)},aspectRatio:c.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>r(L,null,[r(F,null,null),r(P,null,null),r(A,null,null),r(W,null,null),r(k,null,null)]),default:n.default}),[[U("intersect"),{handler:f,options:e.options},null,{once:!0}]])),{currentSrc:v,image:a,state:s,naturalWidth:d,naturalHeight:g}}});export{te as I,y as M,le as V,ne as m};
