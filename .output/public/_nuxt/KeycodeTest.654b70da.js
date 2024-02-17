import{pages as $}from"./realms.data.f6a12340.js";import{u as b}from"./usePlaySound.dccf20a1.js";import{_ as g,r as v,j,o as i,c as x,w as m,a as f,e as s,b as l,F as y,h as _,u as k,t as w}from"./entry.94ffdeeb.js";import{a as V,V as h}from"./VRow.874663fa.js";import{V as D}from"./VCard.9eec5110.js";import{V as N}from"./VIcon.a89c1bf3.js";import"./howler.5070fb36.js";import"./tag.6e0eec08.js";import"./useRender.ee02d324.js";import"./createSimpleFunctional.433ad74c.js";import"./density.5a2b29f1.js";import"./router.12029284.js";import"./color.08edc865.js";import"./VAvatar.7d2681a0.js";import"./rounded.a3340ae4.js";import"./VImg.9336a433.js";import"./index.66b8fb70.js";import"./transition.7408c173.js";import"./dimensions.2a8a239a.js";import"./index.5bd91e98.js";import"./loader.0e188cc9.js";import"./VProgressLinear.7e39016e.js";import"./position.048a6b63.js";const T={class:"d-flex align-center justify-center mb-8"},K={class:"text-primary text-h3 d-flex justify-space-around align-end mb-6 inputReadout"},R={class:"d-flex justify-space-between mb-2"},S={class:"d-flex justify-space-between mb-2"},A={class:"d-flex justify-space-between mb-2"},E={class:"d-flex justify-space-between"},F={__name:"KeycodeTest",emits:["solved","failed"],setup(I,{emit:d}){const C=$.filter(r=>{if(r.semiotics)return r}),u=v(!1),p=C[new Date().getDay()],o=r=>{u.value||(n.value.push(`${r}`),p.realmCode===n.value.join("")?d("solved"):n.value.length>=c.length&&(u.value=!0,b("disconnected",()=>{d("failed")})))},n=v([]),c=["_ ","_ ","_ ","_ "],B=j(()=>{const r=[];return c.forEach((t,e)=>{r[e]=n.value[e]||"_"}),r});return(r,t)=>(i(),x(h,{class:"mt-5"},{default:m(()=>[f(V,{class:"d-flex justify-center"},{default:m(()=>[f(D,{"max-width":"400px",variant:"outlined",color:"primary-darken-1",class:"pa-15 text-primary"},{default:m(()=>[s("div",T,[(i(!0),l(y,null,_(k(p).iconNames,(e,a)=>(i(),x(N,{icon:`mdi-${e}`,size:"30px",key:e+a,color:"primary"},null,8,["icon"]))),128))]),s("div",K,[(i(!0),l(y,null,_(k(B),(e,a)=>(i(),l("div",{key:`entry-${a}`},w(e),1))),128))]),s("div",R,[s("div",{onClick:t[0]||(t[0]=e=>o("1")),class:"customButton mr-2 text-primary text-h3"},"1"),s("div",{onClick:t[1]||(t[1]=e=>o("2")),class:"customButton mr-2 text-primary text-h3"},"2"),s("div",{onClick:t[2]||(t[2]=e=>o("3")),class:"customButton text-primary text-h3"},"3")]),s("div",S,[s("div",{onClick:t[3]||(t[3]=e=>o("4")),class:"customButton mr-2 text-primary text-h3"},"4"),s("div",{onClick:t[4]||(t[4]=e=>o("5")),class:"customButton mr-2 text-primary text-h3"},"5"),s("div",{onClick:t[5]||(t[5]=e=>o("6")),class:"customButton text-primary text-h3"},"6")]),s("div",A,[s("div",{onClick:t[6]||(t[6]=e=>o("7")),class:"customButton mr-2 text-primary text-h3"},"7"),s("div",{onClick:t[7]||(t[7]=e=>o("8")),class:"customButton mr-2 text-primary text-h3"},"8"),s("div",{onClick:t[8]||(t[8]=e=>o("9")),class:"customButton text-primary text-h3"},"9")]),s("div",E,[s("div",{onClick:t[9]||(t[9]=e=>o("*")),class:"customButton mr-2 text-primary text-h3"},"*"),s("div",{onClick:t[10]||(t[10]=e=>o("0")),class:"customButton mr-2 text-primary text-h3"},"0"),s("div",{onClick:t[11]||(t[11]=e=>o("#")),class:"customButton text-primary text-h3"},"#")])]),_:1})]),_:1})]),_:1}))}},mt=g(F,[["__scopeId","data-v-d453b2a5"]]);export{mt as default};
