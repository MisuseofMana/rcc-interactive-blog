import{B as u,aL as v,T as p,aC as g,aB as x}from"./entry.5d57cea4.js";function S(i){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return u({name:i,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:l}},setup(o,a){let{slots:s}=a;return()=>{const t=o.group?v:p;return g(t,{name:i,mode:o.mode,onBeforeEnter(e){e.style.transformOrigin=o.origin},onLeave(e){if(o.leaveAbsolute){const{offsetTop:r,offsetLeft:f,offsetWidth:d,offsetHeight:y}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${r}px`,e.style.left=`${f}px`,e.style.width=`${d}px`,e.style.height=`${y}px`}o.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(o.leaveAbsolute&&e!=null&&e._transitionInitialStyles){const{position:r,top:f,left:d,width:y,height:c}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=r||"",e.style.top=f||"",e.style.left=d||"",e.style.width=y||"",e.style.height=c||""}}},s.default)}}})}function h(i,l){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return u({name:i,props:{mode:{type:String,default:n}},setup(o,a){let{slots:s}=a;return()=>g(p,{name:i,...l},s.default)}})}function m(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",o=x(`offset-${n}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[n]:t.style[n]}},onEnter(t){const e=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const r=`${t[o]}px`;t.style[n]="0",t.offsetHeight,t.style.transition=e.transition,i&&t._parent&&t._parent.classList.add(i),requestAnimationFrame(()=>{t.style[n]=r})},onAfterEnter:s,onEnterCancelled:s,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[n]:t.style[n]},t.style.overflow="hidden",t.style[n]=`${t[o]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[n]="0")},onAfterLeave:a,onLeaveCancelled:a};function a(t){i&&t._parent&&t._parent.classList.remove(i),s(t)}function s(t){const e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,e!=null&&(t.style[n]=e),delete t._initialStyle}}const w=S("slide-y-transition"),L=h("expand-transition",m()),T=h("expand-x-transition",m("",!0));export{L as V,T as a,w as b};