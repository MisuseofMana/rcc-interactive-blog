import{_ as f}from"./backButton.b4a42b8e.js";import{_ as u}from"./layout.11a375a8.js";import{u as _}from"./useSiteStore.7e6abfbd.js";import{V as n,a as o}from"./VRow.874663fa.js";import{V as g}from"./VCard.9eec5110.js";import{V as x}from"./VImg.9336a433.js";import{V as h}from"./VContainer.26342d42.js";import{r as b,f as k,o as r,c as y,w as e,a as t,e as a,b as l,t as v}from"./entry.94ffdeeb.js";import"./VIcon.a89c1bf3.js";import"./tag.6e0eec08.js";import"./color.08edc865.js";import"./useRender.ee02d324.js";import"./VBtn.d2531af0.js";import"./router.12029284.js";import"./density.5a2b29f1.js";import"./rounded.a3340ae4.js";import"./group.e7d6c6fc.js";import"./index.5bd91e98.js";import"./dimensions.2a8a239a.js";import"./loader.0e188cc9.js";import"./VProgressLinear.7e39016e.js";import"./position.048a6b63.js";import"./VProgressCircular.6669da86.js";import"./resizeObserver.16ca977f.js";import"./createSimpleFunctional.433ad74c.js";import"./VAvatar.7d2681a0.js";import"./index.66b8fb70.js";import"./transition.7408c173.js";const V=a("h2",{class:"text-h2 mb-3"},"Not quite right,",-1),w=a("h3",{class:"text-h3 mb-10"},"that's a shame.",-1),B={key:0,class:"text-body-1 mb-5"},S={key:1},C=a("p",{class:"text-body-1 mb-5"},"You're grasping at straws, now.",-1),A=a("p",{class:"text-body-1 mb-10"},"Your Trial Operator access is revoked for today.",-1),N=[C,A],mt={__name:"debriefing",setup(E){const c=_(),s=b(5);k(()=>{s.value=localStorage.remainingAttempts});const p=()=>{c.examAutoStart=!0};return(j,i)=>{const m=f,d=u;return r(),y(d,{name:"landing"},{default:e(()=>[t(h,{class:"my-5"},{default:e(()=>[t(n,null,{default:e(()=>[t(o,{cols:"12",sm:"12",md:"12",lg:"10",xl:"8",class:"offset-lg-1 offset-xl-2"},{default:e(()=>[a("div",null,[t(g,{variant:"outlined",color:"deep-orange-darken-4",class:"pa-15 text-deep-orange-darken-4"},{default:e(()=>[t(o,{cols:"12",sm:"8",md:"10",lg:"10",xl:"10",class:"offset-sm-2 offset-md-1 offset-lg-1 text-center","justify-self":"center"},{default:e(()=>[V,w,s.value>=1?(r(),l("p",B,"However, you have "+v(s.value)+" attempts remaining today.",1)):(r(),l("div",S,N))]),_:1}),t(o,{cols:"12",sm:"8",md:"4",lg:"4",xl:"4",class:"offset-sm-2 offset-md-4 offset-lg-4 mb-10","justify-self":"center"},{default:e(()=>[t(x,{class:"errorAbberation",src:"/images/mocks/hidscrap1.png",alt:"a scrap of paper with an illustration of a tangled knot, the words 'are you paying attention' are written on the paper."})]),_:1}),t(n,null,{default:e(()=>[t(o,{cols:"12",sm:"6"},{default:e(()=>[t(m,{class:"mr-2",variant:"outlined",text:"/Briefing","realm-icons":["map-search-outline"],"link-name":"/briefing"})]),_:1}),t(o,{cols:"12",sm:"6"},{default:e(()=>[t(m,{class:"mr-2",warning:"",variant:"outlined",text:"Retake Exam","realm-icons":["key"],disabled:s.value<=0,onClick:i[0]||(i[0]=I=>p()),"link-name":"/operator-exam"},null,8,["disabled"])]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{mt as default};
