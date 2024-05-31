import{_ as R}from"./BV8Um6wC.js";import{_ as z}from"./ByqwasGV.js";import{_ as I}from"./CsiBUKW-.js";import{a as k}from"./CrC8TmrK.js";import{p as g,x as D,D as P,r as N,E as $,e as x,f as o,w as r,h as n,V as A,F as w,z as C,i as p,j as E,l as t,A as i,t as c,q as f,C as v,v as V,B as M}from"./ymP05iDs.js";import{b as T}from"./CHZeja5a.js";import{d as q}from"./_bhByt0o.js";import{V as S}from"./BqoW6UOo.js";import"./CJF_X7pu.js";function F(d){const{dPassed:m}=k(d),s=g(m);if(s<=3)return"Shifting";if(s<=6)return"Adjusting";if(s<=10)return"Balancing";if(s<=15)return"Settling";if(s<=20)return"Docile";if(s<=30)return"Stagnant";if(s>=31)return"Dormant"}const U=["c","r","i","k","b","u","r","o","w","a","d","e","f","g","h","j","l","m","n","p","q","s","t","u","v","x","y","z"];function H(d){if(!d)return;const m=d.split(" ")[0].split(""),s=m.length;return{realmCipher:`${m.splice(0,5).map(b=>{const u=U.indexOf(b.toLowerCase())+3,y=u>25?u%25:u;return U[y]}).join("")}-${s}`}}const O={class:"border mx-5"},G={class:"px-8"},J={class:"d-flex justify-space-between align-end mb-1"},K={class:"d-flex justify-space-between align-center mb-3"},Q={class:"d-flex justify-space-between align-center mb-2"},W={class:"px-8 mt-n5"},X={__name:"realms",setup(d){P().$patch(a=>{a.currentSound={soundLink:"audio/realms.mp3",volume:.1}});const s=N([]),h=N([]);return $(()=>{T().then(({realmListData:a})=>{h.value=a.value}),q().then(({coverPhotosData:a})=>{s.value=a.value})}),(a,b)=>{const L=R,u=z,y=I;return n(),x("div",null,[o(y,{name:"default"},{default:r(()=>[o(L,{text:"REALMS"}),o(A,{class:"mt-15"},{default:r(()=>[(n(!0),x(w,null,C(h.value,(e,j)=>(n(),p(E,{key:j,cols:"12",sm:"8",md:"6",lg:"4",xl:"4",class:"mb-15 offset-sm-2 offset-md-0"},{default:r(()=>[t("div",O,[t("div",G,[t("div",J,[t("h3",{class:i(["text-h4",[e.clearanceNeeded?"text-grey-darken-1":"text-primary"]])},c(e.abbTitle?e.abbTitle:e.title),3)]),t("div",null,[t("p",{class:i(["text-body-2 mb-4",[e.clearanceNeeded?"text-grey-darken-1":"text-primary"]])},c(e.subtitle),3)]),t("div",K,[o(S,{class:i(["text-subtitle-1",[e.clearanceNeeded?"text-grey-darken-1":"text-info"]])},{default:r(()=>[f(c(g(H)(e.title).realmCipher),1)]),_:2},1032,["class"]),o(S,{class:i(["text-subtitle-1",[e.clearanceNeeded?"text-grey-darken-1":"text-primary"]])},{default:r(()=>[f(c(("useRealmDesignation"in a?a.useRealmDesignation:g(F))(e.lastUpdated)),1)]),_:2},1032,["class"])]),t("div",Q,[t("h4",{class:i(["text-h5",[e.clearanceNeeded?"text-grey-darken-1":"text-primary"]])},c(("useLastUpdated"in a?a.useLastUpdated:g(k))(e.lastUpdated).lastUpdated.value),3),t("div",null,[e.hasSemiotics?(n(),p(v,{key:0,class:"mr-2",color:e.clearanceNeeded?"grey-darken-1":"teal-accent-3",size:"20px"},{default:r(()=>[f(" mdi-eye-circle ")]),_:2},1032,["color"])):V("",!0),("useLastUpdated"in a?a.useLastUpdated:g(k))(e.lastUpdated).isRecent.value?(n(),p(v,{key:1,color:e.clearanceNeeded?"grey-darken-1":"yellow-accent-3",size:"20px"},{default:r(()=>[f(" mdi-alert-decagram ")]),_:2},1032,["color"])):V("",!0)])])]),t("div",{class:i(["shadow mt-n6",[e.clearanceNeeded?"":"grow"]])},[(n(),p(u,{key:0,to:`/insights/${e.slug}`},{default:r(()=>{var l,_;return[o(M,{cover:"",class:"realmImage","min-width":"300","min-height":"300","lazy-src":"/images/mocks/placeholder.jpg",src:(_=(l=s.value)==null?void 0:l.find(B=>B.realmId===e.id))==null?void 0:_.imageLink,alt:"a photo representing the realm you're visiting"},null,8,["src"])]}),_:2},1032,["to"]))],2),t("div",W,[t("div",null,[(n(!0),x(w,null,C(e.iconNames.split(","),(l,_)=>(n(),p(v,{class:"p-0 mr-2",color:e.clearanceNeeded?"grey-darken-1":"primary",key:l+_,size:"40px"},{default:r(()=>[f("mdi-"+c(l),1)]),_:2},1032,["color"]))),128))])])])]),_:2},1024))),128))]),_:1})]),_:1})])}}},oe=D(X,[["__scopeId","data-v-eb2ce582"]]);export{oe as default};