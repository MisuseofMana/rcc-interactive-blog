/* empty css                   */import{m as Q,c as U,V as q,e as G,f as J}from"./forwardRefs.a44f5a39.js";import{m as K,a as L,f as W,V as X}from"./VInput.6cafeb98.js";import{I as Y}from"./index.26545022.js";import{aa as Z,ag as ee,ac as te,j as f,r as g,aP as ne,a as n,N as V,C as le,a9 as ae,F as k,aQ as ue,ar as ie,aR as oe,M as re}from"./entry.af4b25f0.js";import{u as se}from"./useRender.711bb119.js";const ce=["color","file","time","date","datetime-local","week","month"],de=Z({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...K(),...Q()},"v-text-field"),fe=ee()({name:"VTextField",directives:{Intersect:Y},inheritAttrs:!1,props:de(),emits:{"click:control":e=>!0,"click:input":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,I){let{attrs:v,emit:C,slots:l}=I;const a=te(e,"modelValue"),{isFocused:u,focus:b,blur:S}=L(e),_=f(()=>typeof e.counterValue=="function"?e.counterValue(a.value):(a.value??"").toString().length),B=f(()=>{if(v.maxlength)return v.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function D(t,x){var o,s;!e.autofocus||!t||(o=x[0].target)==null||(s=o.focus)==null||s.call(o)}const p=g(),h=g(),i=g(),R=f(()=>ce.includes(e.type)||e.persistentPlaceholder||u.value),T=f(()=>e.messages.length?e.messages:u.value||e.persistentHint?e.hint:"");function m(){if(i.value!==document.activeElement){var t;(t=i.value)==null||t.focus()}u.value||b()}function A(t){m(),C("click:control",t)}function N(t){t.stopPropagation(),m(),ie(()=>{a.value=null,oe(e["onClick:clear"],t)})}function $(t){a.value=t.target.value}return se(()=>{const t=!!(l.counter||e.counter||e.counterValue),x=!!(t||l.details),[o,s]=ne(v),[{modelValue:ve,...w}]=W(e),[M]=U(e);return n(X,V({ref:p,modelValue:a.value,"onUpdate:modelValue":r=>a.value=r,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},o,w,{focused:u.value,messages:T.value}),{...l,default:r=>{let{id:c,isDisabled:j,isDirty:y,isReadonly:E,isValid:H}=r;return n(q,V({ref:h,onMousedown:d=>{d.target!==i.value&&d.preventDefault()},"onClick:control":A,"onClick:clear":N,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},M,{id:c.value,active:R.value||y.value,dirty:y.value||e.dirty,focused:u.value,error:H.value===!1}),{...l,default:d=>{let{props:{class:F,...z}}=d;const P=le(n("input",V({ref:i,value:a.value,onInput:$,autofocus:e.autofocus,readonly:E.value,disabled:j.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:m,onBlur:S},z,s),null),[[ae("intersect"),{handler:D},null,{once:!0}]]);return n(k,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[e.prefix]),l.default?n("div",{class:F,onClick:O=>C("click:input",O),"data-no-activator":""},[l.default(),P]):ue(P,{class:F}),e.suffix&&n("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:x?r=>{var c;return n(k,null,[(c=l.details)==null?void 0:c.call(l,r),t&&n(k,null,[n("span",null,null),n(G,{active:e.persistentCounter||u.value,value:_.value,max:B.value},l.counter)])])}:void 0})}),J({},p,h,i)}});function pe(e){return re(e,Object.keys(fe.props))}export{fe as V,pe as f,de as m};
