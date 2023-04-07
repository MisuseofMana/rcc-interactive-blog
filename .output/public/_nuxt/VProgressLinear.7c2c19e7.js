import{aV as S,r as _,aU as A,x as M,O as z,a5 as E,aq as R,j as s,B as Y,C as j,a7 as q,a3 as D,a as u,ae as r,T as G}from"./entry.c9a1c00a.js";import{m as H,u as J}from"./rounded.bd53d349.js";import{m as K}from"./VRow.a8fe4de2.js";import{a as Q,u as P}from"./color.1908574c.js";import{u as W}from"./useRender.0a1b1031.js";const V=["top","bottom"],Z=["start","end","left","right"];function ee(e,a){let[n,l]=e.split(" ");return l||(l=S(V,n)?"start":S(Z,n)?"top":"center"),{side:T(n,a),align:T(l,a)}}function T(e,a){return e==="start"?a?"right":"left":e==="end"?a?"left":"right":e}function ue(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function ce(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function de(e){return{side:e.align,align:e.side}}function fe(e){return S(V,e.side)?"y":"x"}function te(e){const a=_(),n=_(!1);if(A){const l=new IntersectionObserver(i=>{e==null||e(i,l),n.value=!!i.find(t=>t.isIntersecting)});M(()=>{l.disconnect()}),z(a,(i,t)=>{t&&(l.unobserve(t),n.value=!1),i&&l.observe(i)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const O={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},ae=E({location:String},"location");function ne(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:l}=R();return{locationStyles:s(()=>{if(!e.location)return{};const{side:t,align:c}=ee(e.location.split(" ").length>1?e.location:`${e.location} center`,l.value);function g(m){return n?n(m):0}const o={};return t!=="center"&&(a?o[O[t]]=`calc(100% - ${g(t)}px)`:o[t]=0),c!=="center"?a?o[O[c]]=`calc(100% - ${g(c)}px)`:o[c]=0:(t==="center"?o.top=o.left="50%":o[{top:"left",bottom:"left",left:"top",right:"top"}[t]]="50%",o.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[t]),o})}}const ge=Y({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...ae({location:"top"}),...H(),...K(),...j()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const l=q(e,"modelValue"),{isRtl:i}=R(),{themeClasses:t}=D(e),{locationStyles:c}=ne(e),{textColorClasses:g,textColorStyles:o}=Q(e,"color"),{backgroundColorClasses:m,backgroundColorStyles:I}=P(s(()=>e.bgColor||e.color)),{backgroundColorClasses:k,backgroundColorStyles:x}=P(e,"color"),{roundedClasses:N}=J(e),{intersectionRef:b,isIntersecting:w}=te(),h=s(()=>parseInt(e.max,10)),d=s(()=>parseInt(e.height,10)),y=s(()=>parseFloat(e.bufferValue)/h.value*100),C=s(()=>parseFloat(l.value)/h.value*100),v=s(()=>i.value!==e.reverse),$=s(()=>e.indeterminate?"fade-transition":"slide-x-transition"),B=s(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function L(f){if(!b.value)return;const{left:F,right:U,width:p}=b.value.getBoundingClientRect(),X=v.value?p-f.clientX+(U-p):f.clientX-F;l.value=Math.round(X/p*h.value)}return W(()=>u(e.tag,{ref:b,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&w.value,"v-progress-linear--reverse":v.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},N.value,t.value],style:{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?r(d.value):0,"--v-progress-linear-height":r(d.value),...c.value},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:C.value,onClick:e.clickable&&L},{default:()=>[e.stream&&u("div",{key:"stream",class:["v-progress-linear__stream",g.value],style:{...o.value,[v.value?"left":"right"]:r(-d.value),borderTop:`${r(d.value/2)} dotted`,opacity:B.value,top:`calc(50% - ${r(d.value/4)})`,width:r(100-y.value,"%"),"--v-progress-linear-stream-to":r(d.value*(v.value?1:-1))}},null),u("div",{class:["v-progress-linear__background",m.value],style:[I.value,{opacity:B.value,width:r(e.stream?y.value:100,"%")}]},null),u(G,{name:$.value},{default:()=>[e.indeterminate?u("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(f=>u("div",{key:f,class:["v-progress-linear__indeterminate",f,k.value],style:x.value},null))]):u("div",{class:["v-progress-linear__determinate",k.value],style:[x.value,{width:r(C.value,"%")}]},null)]}),n.default&&u("div",{class:"v-progress-linear__content"},[n.default({value:C.value,buffer:y.value})])]})),{}}});export{ge as V,ce as a,de as b,te as c,ue as f,fe as g,ae as m,ee as p,ne as u};
