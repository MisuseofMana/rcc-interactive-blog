import{m as w,u as T,a as _,b as A}from"./group.e7d6c6fc.js";import{m as V}from"./tag.6e0eec08.js";import{G as x,H as R,a6 as $,j as c,a7 as B,J as y,a as t,a8 as P,C as h,a9 as D,aa as G,I as b,D as L,ab as j}from"./entry.94ffdeeb.js";import{u as m}from"./useRender.ee02d324.js";import{R as M}from"./index.5bd91e98.js";import{u as S}from"./color.08edc865.js";import{V as N}from"./VIcon.a89c1bf3.js";import{V as z}from"./index.108b6c93.js";import{m as I,u as F}from"./VOverlay.a8c9058d.js";import{m as H,u as J}from"./router.12029284.js";import{m as O,u as U}from"./rounded.a3340ae4.js";let q=e=>crypto.getRandomValues(new Uint8Array(e)),K=(e,l,n)=>{let a=(2<<Math.log(e.length-1)/Math.LN2)-1,i=-~(1.6*a*l/e.length);return(r=l)=>{let o="";for(;;){let u=n(i),v=i;for(;v--;)if(o+=e[u[v]&a]||"",o.length===r)return o}}},re=(e,l=21)=>K(e,l,q);const p=Symbol.for("vuetify:v-expansion-panel"),Q=["default","accordion","inset","popout"],ue=x({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:e=>Q.includes(e)},readonly:Boolean,...w(),...V(),...R()},emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:n}=l;T(e,p);const{themeClasses:a}=$(e),i=c(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return B({VExpansionPanel:{color:y(e,"color")},VExpansionPanelTitle:{readonly:y(e,"readonly")}}),m(()=>t(e.tag,{class:["v-expansion-panels",a.value,i.value]},n)),{}}}),E=G({color:String,expandIcon:{type:b,default:"$expand"},collapseIcon:{type:b,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean},"v-expansion-panel-title"),W=x({name:"VExpansionPanelTitle",directives:{Ripple:M},props:{...E()},setup(e,l){let{slots:n}=l;const a=P(p);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:r}=S(e,"color"),o=c(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return m(()=>{var u;return h(t("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value},i.value],style:r.value,type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[t("span",{class:"v-expansion-panel-title__overlay"},null),(u=n.default)==null?void 0:u.call(n,o.value),!e.hideActions&&t("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(o.value):t(N,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[D("ripple"),e.ripple]])}),{}}}),X=x({name:"VExpansionPanelText",props:{...I()},setup(e,l){let{slots:n}=l;const a=P(p);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:r}=F(e,a.isSelected);return m(()=>{var o;return t(z,{onAfterLeave:r},{default:()=>[h(t("div",{class:"v-expansion-panel-text"},[n.default&&i.value&&t("div",{class:"v-expansion-panel-text__wrapper"},[(o=n.default)==null?void 0:o.call(n)])]),[[L,a.isSelected.value]])]})}),{}}}),ce=x({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...H(),..._(),...I(),...O(),...V(),...E()},emits:{"group:selected":e=>!0},setup(e,l){let{slots:n}=l;const a=A(e,p),{backgroundColorClasses:i,backgroundColorStyles:r}=S(e,"bgColor"),{elevationClasses:o}=J(e),{roundedClasses:u}=U(e),v=c(()=>(a==null?void 0:a.disabled.value)||e.disabled),g=c(()=>a.group.items.value.reduce((d,s,f)=>(a.group.selected.value.includes(s.id)&&d.push(f),d),[])),k=c(()=>{const d=a.group.items.value.findIndex(s=>s.id===a.id);return!a.isSelected.value&&g.value.some(s=>s-d===1)}),C=c(()=>{const d=a.group.items.value.findIndex(s=>s.id===a.id);return!a.isSelected.value&&g.value.some(s=>s-d===-1)});return j(p,a),m(()=>{var d;const s=!!(n.text||e.text),f=!!(n.title||e.title);return t(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":k.value,"v-expansion-panel--after-active":C.value,"v-expansion-panel--disabled":v.value},u.value,i.value],style:r.value,"aria-expanded":a.isSelected.value},{default:()=>[t("div",{class:["v-expansion-panel__shadow",...o.value]},null),f&&t(W,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),s&&t(X,{key:"text",eager:e.eager},{default:()=>[n.text?n.text():e.text]}),(d=n.default)==null?void 0:d.call(n)]})}),{}}});export{ue as V,ce as a,W as b,re as c,X as d};
