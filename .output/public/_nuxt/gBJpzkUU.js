import{_ as w}from"./BV8Um6wC.js";import{x as B,y as I,M as N,r as h,E as A,e as p,f as e,w as s,h as o,l as n,i as x,j as t,A as v,p as u,B as y,t as r,F as b,z as k,V as m,v as C,_ as T,C as D,q as F,k as L}from"./ymP05iDs.js";import{_ as $}from"./CsiBUKW-.js";import{u as j,a as z}from"./_bhByt0o.js";import"./CrC8TmrK.js";const E={class:"mb-15"},M={class:"text-primary text-h3"},S={class:"text-primary text-body-1 mb-4"},q={class:"text-primary text-body-1 mb-3"},H={class:"text-h4 mb-8"},P={class:"text-body-1 mb-3"},G={__name:"artifacts",setup(J){const{smAndDown:g}=I(),c=N(),l=h({}),_=h({});return A(()=>{j(c.params.realm).then(({realmData:i})=>{l.value=i.value}),z(c.params.realm).then(({artifactsData:i})=>{_.value=i.value})}),(i,K)=>{const V=w,d=T,R=$;return o(),p("div",null,[e(R,{name:"realm-viewing"},{default:s(()=>[e(V,{text:"ARTIFACTS"}),n("div",E,[_.value.length>0?(o(),x(m,{key:0,align:"end",class:"mb-5"},{default:s(()=>[e(t,{cols:"8",sm:"6",md:"3",lg:"3",xl:"3",class:v(["offset-2 offset-sm-3 offset-md-1 offset-lg-0 offset-xl-0",u(g)?"d-flex justify-center":""])},{default:s(()=>[e(y,{class:"abberation","aspect-ratio":"1",src:l.value.sigilImageLink,alt:"an icon representing the currently viewed realm"},null,8,["src"])]),_:1},8,["class"]),e(t,{cols:"8",sm:"6",md:"6",lg:"6",xl:"5",class:v(["offset-2 offset-sm-3 offset-md-0 offset-xl-0",u(g)?"text-center":""])},{default:s(()=>[n("h3",M,r(l.value.title),1),n("p",S,r(l.value.subtitle),1),n("p",q,r(l.value.narrative),1),(o(!0),p(b,null,k(l.value.iconNames,(a,f)=>(o(),x(D,{class:"p-0 mr-2",color:"primary",key:a+f},{default:s(()=>[F("mdi-"+r(a),1)]),_:2},1024))),128))]),_:1},8,["class"])]),_:1})):C("",!0),e(m,{class:"mt-1"},{default:s(()=>[e(t,{cols:"12",md:"5"},{default:s(()=>[e(d,{frontIcon:"arrow-left",text:"Abandon This Realm",linkName:"/realms"})]),_:1})]),_:1}),e(m,null,{default:s(()=>[e(t,{cols:"4"},{default:s(()=>[e(d,{text:"/Realm Photos","realm-icons":["camera"],"link-name":`/insights/${u(c).params.realm}`},null,8,["link-name"])]),_:1}),e(t,{cols:"4"},{default:s(()=>[e(d,{text:"/Realm Artifacts","realm-icons":["diamond-stone"],disabled:"","link-name":`/insights/${u(c).params.realm}/artifacts`},null,8,["link-name"])]),_:1})]),_:1}),e(m,{class:"mb-5"},{default:s(()=>[(o(!0),p(b,null,k(_.value,(a,f)=>(o(),x(t,{key:f,cols:"12",sm:"10",md:"6",lg:"6",xl:"6",class:"offset-sm-1 offset-md-0"},{default:s(()=>[e(L,{color:"primary-darken-1",class:"pa-5 text-primary",height:"100%"},{default:s(()=>[e(m,{dense:""},{default:s(()=>[e(t,{cols:"12",md:"12",lg:a!=null&&a.isVertical?"6":"12",class:"pa-5"},{default:s(()=>[n("h4",H,r(a.title),1),n("p",P,r(a.lore),1)]),_:2},1032,["lg"]),e(t,{cols:"12",md:"12",lg:a!=null&&a.isVertical?"6":"12"},{default:s(()=>[e(y,{class:"artifactImage",cover:"","aspect-ratio":a.isVertical?"1/5":"8/3",src:a.imageLink,alt:"an image representing an artifact of the realm"},null,8,["aspect-ratio","src"])]),_:2},1032,["lg"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(m,{dense:"",class:"mb-1"},{default:s(()=>[e(t,{cols:"5",class:"offset-xl-8"},{default:s(()=>[e(d,{frontIcon:"arrow-left",text:"Return From This Realm",linkName:"/realms"})]),_:1})]),_:1})])]),_:1})])}}},Y=B(G,[["__scopeId","data-v-706961da"]]);export{Y as default};