import{M as h,N as D,bp as H,O as U,bi as J,S as O,W as N,aN as R,be as _,a7 as o,aB as W,aT as Y,at as z,Y as u,a3 as M,f as d,av as K,aP as T,r as Q,bX as Z,a6 as G,J as p,aw as ee,F as le,C as ae,au as te,bl as ne,bB as I,a0 as oe,X as ue,bD as ie,aU as re}from"./entry.BEHNrUNK.js";import{b as ce}from"./VInput.Qty90ge8.js";const E=Symbol.for("vuetify:selection-control-group"),L=h({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:D,trueIcon:D,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:H},...U(),...J(),...O()},"SelectionControlGroup"),se=h({...L({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");N()({name:"VSelectionControlGroup",props:se(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:v}=i;const l=R(e,"modelValue"),t=_(),y=o(()=>e.id||`v-selection-control-group-${t}`),c=o(()=>e.name||y.value),a=new Set;return W(E,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),Y(()=>{a.delete(n)})}}),z({[e.defaultsTarget]:{color:u(e,"color"),disabled:u(e,"disabled"),density:u(e,"density"),error:u(e,"error"),inline:u(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:u(e,"falseIcon"),trueIcon:u(e,"trueIcon"),readonly:u(e,"readonly"),ripple:u(e,"ripple"),type:u(e,"type"),valueComparator:u(e,"valueComparator")}}),M(()=>{var n;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=v.default)==null?void 0:n.call(v)])}),{}}});const de=h({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...U(),...L()},"VSelectionControl");function ve(e){const i=te(E,void 0),{densityClasses:v}=ne(e),l=R(e,"modelValue"),t=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),y=o(()=>e.falseValue!==void 0?e.falseValue:!1),c=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=o({get(){const f=i?i.modelValue.value:l.value;return c.value?I(f).some(r=>e.valueComparator(r,t.value)):e.valueComparator(f,t.value)},set(f){if(e.readonly)return;const r=f?t.value:y.value;let m=r;c.value&&(m=f?[...I(l.value),r]:I(l.value).filter(b=>!e.valueComparator(b,t.value))),i?i.modelValue.value=m:l.value=m}}),{textColorClasses:n,textColorStyles:C}=oe(o(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:V,backgroundColorStyles:S}=ue(o(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),k=o(()=>a.value?e.trueIcon:e.falseIcon);return{group:i,densityClasses:v,trueValue:t,falseValue:y,model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:S,icon:k}}const ye=N()({name:"VSelectionControl",directives:{Ripple:K},inheritAttrs:!1,props:de(),emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:v,slots:l}=i;const{group:t,densityClasses:y,icon:c,model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:S,trueValue:k}=ve(e),f=_(),r=T(!1),m=T(!1),b=Q(),g=o(()=>e.id||`input-${f}`),B=o(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{b.value&&(b.value.checked=a.value)});function F(s){B.value&&(r.value=!0,ie(s.target,":focus-visible")!==!1&&(m.value=!0))}function P(){r.value=!1,m.value=!1}function X(s){s.stopPropagation()}function $(s){B.value&&(e.readonly&&t&&re(()=>t.forceUpdate()),a.value=s.target.checked)}return M(()=>{var A,w;const s=l.label?l.label({label:e.label,props:{for:g.value}}):e.label,[j,q]=Z(v),x=d("input",G({ref:b,checked:a.value,disabled:!!e.disabled,id:g.value,onBlur:P,onFocus:F,onInput:$,"aria-disabled":!!e.disabled,type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},q),null);return d("div",G({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":r.value,"v-selection-control--focus-visible":m.value,"v-selection-control--inline":e.inline},y.value,e.class]},j,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",n.value],style:C.value},[(A=l.default)==null?void 0:A.call(l,{backgroundColorClasses:V,backgroundColorStyles:S}),p(d("div",{class:["v-selection-control__input"]},[((w=l.input)==null?void 0:w.call(l,{model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:S,inputNode:x,icon:c.value,props:{onFocus:F,onBlur:P,id:g.value}}))??d(le,null,[c.value&&d(ae,{key:"icon",icon:c.value},null),x])]),[[ee("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),s&&d(ce,{for:g.value,onClick:X},{default:()=>[s]})])}),{isFocused:r,input:b}}});export{ye as V,de as m};