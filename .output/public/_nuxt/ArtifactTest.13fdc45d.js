import{pages as V}from"./realms.data.6da3aeac.js";import{u as l}from"./useRandomNumber.d50ddb30.js";import{u as R}from"./useClassifyRealm.dfde8f45.js";import{a as h,V as w}from"./VRow.a8fe4de2.js";import{V as A}from"./VImg.a6597b63.js";import{r as m,e as I,o as r,c as o,w as i,a as P,f as g,b as v,F as b,g as N,n as B}from"./entry.c9a1c00a.js";import{V as j}from"./VIcon.841c5f5e.js";import"./dimensions.23812d78.js";import"./useRender.0a1b1031.js";import"./color.1908574c.js";const $=["onClick"],J={__name:"ArtifactTest",emits:["solved","failed"],setup(z,{emit:f}){const c=m(null),u=m(null),n=m(null),y=e=>{e===u.value?f("solved"):f("failed")},{classifiedRealms:_}=R(V);return I(()=>{let e=[{},{},{},{}],a=[..._.value].filter(p=>p.artifacts.length);e.forEach((p,k)=>{const t=a.splice(l(a.length),1)[0],C=t.documents.length;e[k]={documentPath:t.documents[l(C)].filePath,realmName:t.title,folderPath:t.slug,realmCipher:t.realmCipher,realmIcons:t.iconNames,artifacts:t.artifacts}});const s=e[l(e.length)],d=l(s.artifacts.length);c.value=s.artifacts[d],u.value=s.folderPath,n.value=e}),(e,x)=>(r(),o(w,null,{default:i(()=>[P(h,{cols:"12",md:"8",lg:"6",xl:"4",class:"offset-md-2 offset-lg-3 offset-xl-4 d-flex align-center justify-center"},{default:i(()=>[c.value?(r(),o(A,{key:0,class:"realmImage",cover:"","max-width":"500px","aspect-ratio":"1.5",src:`/images/artifacts/${c.value.path}.jpg`,alt:"an image representing an artifact of the realm"},null,8,["src"])):g("",!0)]),_:1}),n.value!=null?(r(),o(h,{key:0,cols:"10",class:"offset-1 d-flex justify-center"},{default:i(()=>[(r(!0),v(b,null,N(n.value,(a,s)=>(r(),v("div",{onClick:d=>y(a.folderPath),key:a.documentPath,class:B([s<=2?"mr-8":"","customButton text-primary text-body-1"])},[(r(),o(j,{size:"30px",icon:`mdi-${a.realmIcons[0]}`,key:e.icon+s,color:"primary"},null,8,["icon"]))],10,$))),128))]),_:1})):g("",!0)]),_:1}))}};export{J as default};