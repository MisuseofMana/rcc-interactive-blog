import{_ as A}from"./backButton.28bbcb55.js";import{_ as D}from"./layout.ad08f5f1.js";import{B as L,I as F,C as M,D as V,E,G as H,H as U,a as t,z as X,A as Y,J as B,_ as G,v as J,K,r as W,e as q,j as O,o as r,c as u,w as o,d as l,t as i,u as N,i as S,f as w,b as R,g as $,F as I,p as Q,h as Z}from"./entry.c9a1c00a.js";import{pages as ee}from"./realms.data.6da3aeac.js";import{u as te}from"./useClassifyRealm.dfde8f45.js";import{m as ae,a as m,V as b}from"./VRow.a8fe4de2.js";import{m as se,M as oe,V as T}from"./VImg.a6597b63.js";import{V as h}from"./VIcon.841c5f5e.js";import{m as le,u as ne}from"./VProgressLinear.7c2c19e7.js";import{m as re,u as ie}from"./rounded.bd53d349.js";import{u as ce,a as ue}from"./color.1908574c.js";import{u as me}from"./useRender.0a1b1031.js";import"./router.800d2d63.js";import"./group.8e7627f9.js";import"./dimensions.23812d78.js";import"./position.828f3fad.js";import"./resizeObserver.6bcd5f10.js";const de=L({name:"VBadge",inheritAttrs:!1,props:{bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:F,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...le({location:"top end"}),...re(),...ae(),...M(),...se({transition:"scale-rotate-transition"})},setup(e,c){const{backgroundColorClasses:v,backgroundColorStyles:x}=ce(V(e,"color")),{roundedClasses:s}=ie(e),{t:d}=E(),{textColorClasses:f,textColorStyles:y}=ue(V(e,"textColor")),{themeClasses:_}=H(),{locationStyles:p}=ne(e,!0,a=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(a)?+(e.offsetY??0):["left","right"].includes(a)?+(e.offsetX??0):0));return me(()=>{var a,n,k,C;const g=Number(e.content),P=!e.max||isNaN(g)?e.content:g<=e.max?g:`${e.max}+`,[z,j]=U(c.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(e.tag,B({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline}]},j),{default:()=>[t("div",{class:"v-badge__wrapper"},[(a=(n=c.slots).default)==null?void 0:a.call(n),t(oe,{transition:e.transition},{default:()=>[X(t("span",B({class:["v-badge__badge",_.value,v.value,s.value,f.value],style:[x.value,y.value,e.inline?{}:p.value],"aria-atomic":"true","aria-label":d(e.label,g),"aria-live":"polite",role:"status"},z),[e.dot?void 0:c.slots.badge?(k=(C=c.slots).badge)==null?void 0:k.call(C):e.icon?t(h,{icon:e.icon},null):P]),[[Y,e.modelValue]])]})])]})}),{}}}),fe=e=>(Q("data-v-0c407c01"),e=e(),Z(),e),_e={class:"text-h2"},ge={class:"text-h3"},be={class:"text-body-1"},ve={class:"d-flex justify-space-between align-center"},xe={class:"text-subtitle-1"},pe=fe(()=>l("p",{class:"text-subtitle-1"},null,-1)),he={class:"pl-2 mr-5 mt-n2 mb-1 zUp text-primary text-subtitle-1 d-flex align-center justify-space-between"},ye={class:"text-primary minHeight text-body-1 mx-8 px-5 py-5 text-center"},ke={__name:"[realm]",setup(e){const{smAndDown:c}=J(),{classifiedRealms:v}=te(ee),x=K(),s=W({});q(()=>{s.value=v.value.find(f=>f.slug===x.params.realm)});const d=O(()=>c?"40px":"32px");return(f,y)=>{const _=A,p=D;return r(),u(p,{name:"default"},{default:o(()=>[t(b,{class:"mt-1 mb-15"},{default:o(()=>[t(m,{cols:"12",md:"4"},{default:o(()=>[t(_,{frontIcon:"mdi-arrow-left",text:"Abandon This Realm",linkName:"/realms"})]),_:1})]),_:1}),t(b,{class:"mb-1"},{default:o(()=>[t(m,{cols:"4",sm:"5",md:"4"},{default:o(()=>[t(T,{class:"abberation","max-height":"500","max-width":"500",src:`/images/icons/${s.value.slug}.png`,alt:"a radial icon representing the realm you're visiting"},null,8,["src"])]),_:1}),t(m,{cols:"12",sm:"7",md:"5",class:"mb-2"},{default:o(()=>[l("div",null,[l("h2",_e,i(s.value.title),1),l("h3",ge,i(s.value.subtitle),1),l("p",be,i(s.value.narrative),1),l("div",ve,[l("p",xe,i(s.value.lastUpdated),1),pe]),s.value.publishedRecently?(r(),u(h,{key:0,class:"mr-4",size:N(d),color:"yellow"},{default:o(()=>[S("mdi-alert-decagram")]),_:1},8,["size"])):w("",!0),(r(!0),R(I,null,$(s.value.iconNames,(a,n)=>(r(),u(h,{class:"my-5",size:N(d),key:a+n,color:"primary"},{default:o(()=>[S("mdi-"+i(a),1)]),_:2},1032,["size"]))),128))])]),_:1})]),_:1}),t(b,{class:"mb-10"},{default:o(()=>[(r(!0),R(I,null,$(s.value.documents,(a,n)=>(r(),u(m,{cols:"12",sm:"12",lg:"6",key:n+a.filePath,class:"d-flex justify-center flex-column"},{default:o(()=>[t(T,{contain:"",class:"realmImage","lazy-src":"/images/mocks/placeholder.jpg","aspect-ratio":"1.5",src:`/images/${s.value.slug}/${a.filePath}.jpg`},null,8,["src"]),l("span",he,[l("p",null,i(a.operator),1),a.hint?(r(),u(de,{key:0,floating:"",dot:"",color:"primary"})):w("",!0)]),l("p",ye,i(a.copy),1)]),_:2},1024))),128))]),_:1}),t(b,{dense:"",class:"mb-1"},{default:o(()=>[t(m,{cols:"4",class:"offset-xl-8"},{default:o(()=>[t(_,{frontIcon:"mdi-arrow-left",text:"Return From This Realm",linkName:"/realms"})]),_:1})]),_:1})]),_:1})}}},Me=G(ke,[["__scopeId","data-v-0c407c01"]]);export{Me as default};