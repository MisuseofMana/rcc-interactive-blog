import{G as C,a,j as h,r as v,ai as z,B as M,aq as O,ar as P,C as B,a9 as q,F as x,ad as A,D as H}from"./entry.af4b25f0.js";import{I as L}from"./index.26545022.js";import{m as U,M as _}from"./transition.c0b5a353.js";import{m as G,u as J}from"./dimensions.85878954.js";import{u as W}from"./useRender.711bb119.js";function K(e){return{aspectStyles:h(()=>{const c=Number(e.aspectRatio);return c?{paddingBottom:String(1/c*100)+"%"}:void 0})}}const Q=C({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...G()},setup(e,c){let{slots:u}=c;const{aspectStyles:s}=K(e),{dimensionStyles:g}=J(e);return W(()=>{var r;return a("div",{class:"v-responsive",style:g.value},[a("div",{class:"v-responsive__sizer",style:s.value},null),(r=u.additional)==null?void 0:r.call(u),u.default&&a("div",{class:["v-responsive__content",e.contentClass]},[u.default()])])}),{}}}),te=C({name:"VImg",directives:{intersect:L},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...U()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,c){let{emit:u,slots:s}=c;const g=v(""),r=v(),n=v(e.eager?"loading":"idle"),d=v(),f=v(),i=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=h(()=>i.value.aspect||d.value/f.value||0);z(()=>e.src,()=>{y(n.value!=="idle")}),z(m,(t,l)=>{!t&&l&&r.value&&S(r.value)}),M(()=>y());function y(t){if(!(e.eager&&t)&&!(O&&!t&&!e.eager)){if(n.value="loading",i.value.lazySrc){const l=new Image;l.src=i.value.lazySrc,S(l,null)}i.value.src&&P(()=>{var l,o;if(u("loadstart",((l=r.value)==null?void 0:l.currentSrc)||i.value.src),(o=r.value)!=null&&o.complete){if(r.value.naturalWidth||R(),n.value==="error")return;m.value||S(r.value,null),b()}else m.value||S(r.value),w()})}}function b(){var t;w(),n.value="loaded",u("load",((t=r.value)==null?void 0:t.currentSrc)||i.value.src)}function R(){var t;n.value="error",u("error",((t=r.value)==null?void 0:t.currentSrc)||i.value.src)}function w(){const t=r.value;t&&(g.value=t.currentSrc||t.src)}let I=-1;function S(t){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const o=()=>{clearTimeout(I);const{naturalHeight:$,naturalWidth:V}=t;$||V?(d.value=V,f.value=$):!t.complete&&n.value==="loading"&&l!=null?I=window.setTimeout(o,l):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,f.value=1)};o()}const N=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),D=()=>{var t;if(!i.value.src||n.value==="idle")return null;const l=a("img",{class:["v-img__img",N.value],src:i.value.src,srcset:i.value.srcset,alt:"",sizes:e.sizes,ref:r,onLoad:b,onError:R},null),o=(t=s.sources)==null?void 0:t.call(s);return a(_,{transition:e.transition,appear:!0},{default:()=>[B(o?a("picture",{class:"v-img__picture"},[o,l]):l,[[H,n.value==="loaded"]])]})},F=()=>a(_,{transition:e.transition},{default:()=>[i.value.lazySrc&&n.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",N.value],src:i.value.lazySrc,alt:""},null)]}),j=()=>s.placeholder?a(_,{transition:e.transition,appear:!0},{default:()=>[(n.value==="loading"||n.value==="error"&&!s.error)&&a("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,k=()=>s.error?a(_,{transition:e.transition,appear:!0},{default:()=>[n.value==="error"&&a("div",{class:"v-img__error"},[s.error()])]}):null,E=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,T=v(!1);{const t=z(m,l=>{l&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{T.value=!0})}),t())})}return W(()=>B(a(Q,{class:["v-img",{"v-img--booting":!T.value}],style:{width:A(e.width==="auto"?d.value:e.width)},aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>a(x,null,[a(D,null,null),a(F,null,null),a(E,null,null),a(j,null,null),a(k,null,null)]),default:s.default}),[[q("intersect"),{handler:y,options:e.options},null,{once:!0}]])),{currentSrc:g,image:r,state:n,naturalWidth:d,naturalHeight:f}}});export{te as V};
