import{_ as A}from"./BV8Um6wC.js";import{N as D,O as F,P as M,Q as E,R as H,S as O,U as W,W as X,X as Y,Y as q,Z as R,$ as K,a0 as Q,a1 as Z,a2 as G,a3 as J,a4 as ee,a5 as ae,f as a,a6 as te,K as se,L as oe,a7 as P,C as S,x as le,M as ne,y as ie,r as L,E as re,a8 as ce,e as k,w as t,h as l,V as p,j as g,B as T,l as n,t as c,p as I,i as m,q as z,v as N,F as U,z as $,_ as de}from"./ymP05iDs.js";import ue from"./Dso05R5i.js";import{_ as me}from"./CsiBUKW-.js";import{u as _e,b as fe}from"./_bhByt0o.js";import{a as j}from"./CrC8TmrK.js";const ge=D({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:F,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...M(),...E({location:"top end"}),...H(),...O(),...W(),...X({transition:"scale-rotate-transition"})},"VBadge"),be=Y()({name:"VBadge",inheritAttrs:!1,props:ge(),setup(e,r){const{backgroundColorClasses:B,backgroundColorStyles:s}=q(R(e,"color")),{roundedClasses:b}=K(e),{t:v}=Q(),{textColorClasses:d,textColorStyles:V}=Z(R(e,"textColor")),{themeClasses:C}=G(),{locationStyles:h}=J(e,!0,i=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(i)?+(e.offsetY??0):["left","right"].includes(i)?+(e.offsetX??0):0));return ee(()=>{const i=Number(e.content),x=!e.max||isNaN(i)?e.content:i<=+e.max?i:`${e.max}+`,[o,u]=ae(r.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return a(e.tag,P({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},u,{style:e.style}),{default:()=>{var _,f;return[a("div",{class:"v-badge__wrapper"},[(f=(_=r.slots).default)==null?void 0:f.call(_),a(te,{transition:e.transition},{default:()=>{var y,w;return[se(a("span",P({class:["v-badge__badge",C.value,B.value,b.value,d.value],style:[s.value,V.value,e.inline?{}:h.value],"aria-atomic":"true","aria-label":v(e.label,i),"aria-live":"polite",role:"status"},o),[e.dot?void 0:r.slots.badge?(w=(y=r.slots).badge)==null?void 0:w.call(y):e.icon?a(S,{icon:e.icon},null):x]),[[oe,e.modelValue]])]}})])]}})}),{}}}),ve={class:"text-h2 mb-2"},he={class:"text-h3 mb-4"},xe={class:"text-body-1 mb-4"},ye={class:"d-flex justify-space-between align-center"},ke={class:"d-flex align-center"},pe={key:1},Be={class:"text-h4"},Ce={class:"pl-2 mr-5 mt-n2 mb-1 zUp text-subtitle-2 text-subtitle-1 d-flex align-center justify-space-between"},Ne={class:"text-subtitle-2 text-primary-darken-3 mt-2"},Se={class:"text-primary minHeight text-body-1 mx-8 py-1 text-center"},Ve={__name:"index",setup(e){const r=ne(),{smAndDown:B}=ie(),s=L({}),b=L({});re(()=>{_e(r.params.realm).then(({realmData:d})=>{s.value=d.value}),fe(r.params.realm).then(({realmPhotosData:d})=>{b.value=d.value})});const v=ce(()=>B?"40px":"32px");return(d,V)=>{const C=A,h=de,i=ue,x=me;return l(),k("div",null,[a(x,{name:"realm-viewing"},{default:t(()=>[a(C,{text:"REALM PHOTOS"}),a(p,{class:"mb-1"},{default:t(()=>[a(g,{cols:"4",sm:"5",md:"4"},{default:t(()=>[a(T,{class:"abberation","max-height":"500","max-width":"500",src:s.value.sigilImageLink||"/images/icons/placeholder-sigil.png",alt:"a radial icon representing the realm you're visiting"},null,8,["src"])]),_:1}),a(g,{cols:"12",sm:"7",md:"6",class:"mb-2"},{default:t(()=>{var o,u,_;return[n("div",null,[n("h2",ve,c(s.value.title),1),n("h3",he,c(s.value.subtitle),1),n("p",xe,c(s.value.narrative),1),n("div",ye,[n("div",ke,[I(j)(s.value.lastUpdated).isRecent.value?(l(),m(S,{key:0,class:"mr-2",size:v.value,color:"yellow"},{default:t(()=>[z("mdi-alert-decagram")]),_:1},8,["size"])):N("",!0),(u=(o=s.value)==null?void 0:o.iconNames)!=null&&u.length?(l(),k("div",pe,[(l(!0),k(U,null,$((_=s.value)==null?void 0:_.iconNames.split(","),(f,y)=>(l(),m(S,{class:"mr-2",size:v.value,key:f+y,color:"primary"},{default:t(()=>[z("mdi-"+c(f),1)]),_:2},1032,["size"]))),128))])):N("",!0)]),n("p",Be,c(I(j)(s.value.lastUpdated).lastUpdated.value),1)])])]}),_:1})]),_:1}),a(p,{class:"mt-1 mb-15"},{default:t(()=>[a(g,{cols:"12",md:"5"},{default:t(()=>[a(h,{frontIcon:"arrow-left",text:"Abandon This Realm",linkName:"/realms"})]),_:1})]),_:1}),a(p,{class:"mb-10"},{default:t(()=>[(l(!0),k(U,null,$(b.value,(o,u)=>(l(),m(g,{cols:"12",sm:"12",lg:"6",key:u+"photo",class:"d-flex justify-center flex-column"},{default:t(()=>[o.hasSemiotic?(l(),m(i,{key:1,photo:o},null,8,["photo"])):(l(),m(T,{key:0,contain:"",class:"realmImage","lazy-src":"/images/mocks/placeholder-wide.jpg","aspect-ratio":"1.5",src:o.imageLink},null,8,["src"])),n("span",Ce,[n("p",Ne,c(o.submittedBy),1),o.hasSemiotic?(l(),m(be,{key:0,floating:"",dot:"",color:"primary"})):N("",!0)]),n("p",Se,c(o.lore),1)]),_:2},1024))),128))]),_:1}),a(p,{dense:"",class:"mb-1"},{default:t(()=>[a(g,{cols:"12",md:"5",class:"offset-xl-8"},{default:t(()=>[a(h,{frontIcon:"arrow-left",text:"Return From This Realm",linkName:"/realms"})]),_:1})]),_:1})]),_:1})])}}},ze=le(Ve,[["__scopeId","data-v-569b9e8a"]]);export{ze as default};