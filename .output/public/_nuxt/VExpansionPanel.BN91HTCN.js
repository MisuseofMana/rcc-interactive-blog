import{M as m,O as y,aq as A,R as E,S as R,W as P,ar as _,as as L,a7 as r,at as h,Y as v,a3 as V,f as t,au as S,J as k,K as D,N as g,av as G,X as C,aw as j,C as M,ax as N,ay as $,Q as z,az as O,aA as q,Z as F,aB as J}from"./entry.ChAOt23L.js";import{V as K}from"./index.DyE5CYnW.js";import{m as I,u as Q}from"./VOverlay.DeNzZdw9.js";let U=e=>crypto.getRandomValues(new Uint8Array(e)),W=(e,l,n)=>{let a=(2<<Math.log(e.length-1)/Math.LN2)-1,i=-~(1.6*a*l/e.length);return(d=l)=>{let s="";for(;;){let u=n(i),p=i;for(;p--;)if(s+=e[u[p]&a]||"",s.length===d)return s}}},se=(e,l=21)=>W(e,l,U);const x=Symbol.for("vuetify:v-expansion-panel"),X=["default","accordion","inset","popout"],Y=m({color:String,flat:Boolean,focusable:Boolean,static:Boolean,tile:Boolean,variant:{type:String,default:"default",validator:e=>X.includes(e)},readonly:Boolean,...y(),...A(),...E(),...R()},"VExpansionPanels"),oe=P()({name:"VExpansionPanels",props:Y(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:n}=l;_(e,x);const{themeClasses:a}=L(e),i=r(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return h({VExpansionPanel:{color:v(e,"color"),readonly:v(e,"readonly")},VExpansionPanelTitle:{focusable:v(e,"focusable"),static:v(e,"static")}}),V(()=>t(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},a.value,i.value,e.class],style:e.style},n)),{}}}),Z=m({...y(),...I()},"VExpansionPanelText"),H=P()({name:"VExpansionPanelText",props:Z(),setup(e,l){let{slots:n}=l;const a=S(x);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:d}=Q(e,a.isSelected);return V(()=>t(K,{onAfterLeave:d},{default:()=>{var s;return[k(t("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&i.value&&t("div",{class:"v-expansion-panel-text__wrapper"},[(s=n.default)==null?void 0:s.call(n)])]),[[D,a.isSelected.value]])]}})),{}}}),T=m({color:String,expandIcon:{type:g,default:"$expand"},collapseIcon:{type:g,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...y()},"VExpansionPanelTitle"),ee=P()({name:"VExpansionPanelTitle",directives:{Ripple:G},props:T(),setup(e,l){let{slots:n}=l;const a=S(x);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:d}=C(e,"color"),s=r(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return V(()=>{var u;return k(t("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},i.value,e.class],style:[d.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[t("span",{class:"v-expansion-panel-title__overlay"},null),(u=n.default)==null?void 0:u.call(n,s.value),!e.hideActions&&t("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(s.value):t(M,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[j("ripple"),e.ripple]])}),{}}}),ae=m({title:String,text:String,bgColor:String,...y(),...N(),...$(),...I(),...z(),...E(),...T()},"VExpansionPanel"),ie=P()({name:"VExpansionPanel",props:ae(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:n}=l;const a=O(e,x),{backgroundColorClasses:i,backgroundColorStyles:d}=C(e,"bgColor"),{elevationClasses:s}=q(e),{roundedClasses:u}=F(e),p=r(()=>(a==null?void 0:a.disabled.value)||e.disabled),b=r(()=>a.group.items.value.reduce((c,o,f)=>(a.group.selected.value.includes(o.id)&&c.push(f),c),[])),w=r(()=>{const c=a.group.items.value.findIndex(o=>o.id===a.id);return!a.isSelected.value&&b.value.some(o=>o-c===1)}),B=r(()=>{const c=a.group.items.value.findIndex(o=>o.id===a.id);return!a.isSelected.value&&b.value.some(o=>o-c===-1)});return J(x,a),h({VExpansionPanelText:{eager:v(e,"eager")},VExpansionPanelTitle:{readonly:v(e,"readonly")}}),V(()=>{const c=!!(n.text||e.text),o=!!(n.title||e.title);return t(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":w.value,"v-expansion-panel--after-active":B.value,"v-expansion-panel--disabled":p.value},u.value,i.value,e.class],style:[d.value,e.style]},{default:()=>{var f;return[t("div",{class:["v-expansion-panel__shadow",...s.value]},null),o&&t(ee,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),c&&t(H,{key:"text"},{default:()=>[n.text?n.text():e.text]}),(f=n.default)==null?void 0:f.call(n)]}})}),{}}});export{oe as V,ie as a,ee as b,se as c,H as d};
