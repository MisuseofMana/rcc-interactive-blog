import{B as _,a6 as N,C as D,a3 as x,a2 as X,D as r,a as l,I as C,ag as S,E as H,a7 as J,j as P,z as A,a4 as Q,A as U}from"./entry.5d57cea4.js";import{m as W,u as Y,a as Z,b as ee}from"./group.715627b1.js";import{m as E}from"./VRow.a3334ae7.js";import{d as G,R as ae,a as le,m as te,b as ne,c as se,u as ie,e as oe,f as ue,g as de,h as ce,i as re,V as v}from"./router.a9193777.js";import{u as ve}from"./useRender.dd44c047.js";import{a as fe}from"./index.4b6653b4.js";import{m as me,u as pe}from"./rounded.f9bd3dac.js";import{m as ke,u as he,V as f}from"./VIcon.643e9184.js";import{V as B}from"./VAvatar.51dc3611.js";const L=Symbol.for("vuetify:v-chip-group");({valueComparator:N,...W({selectedClass:"v-chip--selected"}),...E(),...D(),...G({variant:"tonal"})});const Be=_({name:"VChip",directives:{Ripple:ae},props:{activeClass:String,appendAvatar:String,appendIcon:C,closable:Boolean,closeIcon:{type:C,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:C,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:S,onClickOnce:S,...le(),...te(),...ne(),...Z(),...me(),...se(),...ke(),...E({tag:"span"}),...D(),...G({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,m){let{attrs:o,emit:u,slots:t}=m;const{t:p}=H(),{borderClasses:k}=ie(e),{colorClasses:h,colorStyles:g,variantClasses:d}=oe(e),{densityClasses:R}=ue(e),{elevationClasses:$}=de(e),{roundedClasses:z}=pe(e),{sizeClasses:T}=he(e),{themeClasses:w}=x(e),V=J(e,"modelValue"),a=ee(e,L,!1),s=ce(e,o),F=P(()=>e.link!==!1&&s.isLink.value),i=P(()=>!e.disabled&&e.link!==!1&&(!!a||e.link||s.isClickable.value));function K(n){V.value=!1,u("click:close",n)}function b(n){var c;u("click",n),i.value&&((c=s.navigate)==null||c.call(s,n),a==null||a.toggle())}function O(n){(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),b(n))}return()=>{var n;const c=s.isLink.value?"a":e.tag,j=!!(t.append||e.appendIcon||e.appendAvatar),q=!!(t.close||e.closable),y=!!(t.filter||e.filter)&&a,M=!!(t.prepend||e.prependIcon||e.prependAvatar),I=!a||a.isSelected.value;return V.value&&A(l(c,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":i.value,"v-chip--filter":y,"v-chip--pill":e.pill},w.value,k.value,I?h.value:void 0,R.value,$.value,z.value,T.value,d.value,a==null?void 0:a.selectedClass.value],style:[I?g.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:s.href.value,tabindex:i.value?0:void 0,onClick:b,onKeydown:i.value&&!F.value&&O},{default:()=>[re(i.value,"v-chip"),y&&l(v,{key:"filter",defaults:{VIcon:{icon:e.filterIcon}}},{default:()=>[l(fe,null,{default:()=>[A(l("div",{class:"v-chip__filter"},[t.filter?t.filter():l(f,null,null)]),[[U,a.isSelected.value]])]})]}),M&&l(v,{key:"prepend",defaults:{VAvatar:{image:e.prependAvatar},VIcon:{icon:e.prependIcon}}},{default:()=>[t.prepend?l("div",{class:"v-chip__prepend"},[t.prepend()]):e.prependAvatar?l(B,{start:!0},null):e.prependIcon?l(f,{start:!0},null):void 0]}),((n=t.default)==null?void 0:n.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))??e.text,j&&l(v,{key:"append",defaults:{VAvatar:{image:e.appendAvatar},VIcon:{icon:e.appendIcon}}},{default:()=>[t.append?l("div",{class:"v-chip__append"},[t.append()]):e.appendAvatar?l(B,{end:!0},null):e.appendIcon?l(f,{end:!0},null):void 0]}),q&&l(v,{key:"close",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},{default:()=>[l("div",{class:"v-chip__close","aria-label":p(e.closeLabel),onClick:K},[t.close?t.close():l(f,null,null)])]})]}),[[Q("ripple"),i.value&&e.ripple,null]])}}});export{Be as V};