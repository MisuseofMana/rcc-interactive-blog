import{_ as u}from"./backButton.b4a42b8e.js";import{_ as f,r as c,f as b,o as h,c as x,w as o,a as e,e as t,t as g,p as v,i as y,d as m}from"./entry.94ffdeeb.js";import{V as d,a as i}from"./VRow.874663fa.js";import{V as w}from"./VCard.9eec5110.js";import{V as k}from"./VContainer.26342d42.js";import"./VIcon.a89c1bf3.js";import"./tag.6e0eec08.js";import"./color.08edc865.js";import"./useRender.ee02d324.js";import"./VBtn.d2531af0.js";import"./router.12029284.js";import"./density.5a2b29f1.js";import"./rounded.a3340ae4.js";import"./group.e7d6c6fc.js";import"./index.5bd91e98.js";import"./dimensions.2a8a239a.js";import"./loader.0e188cc9.js";import"./VProgressLinear.7e39016e.js";import"./position.048a6b63.js";import"./VProgressCircular.6669da86.js";import"./resizeObserver.16ca977f.js";import"./createSimpleFunctional.433ad74c.js";import"./VAvatar.7d2681a0.js";import"./VImg.9336a433.js";import"./index.66b8fb70.js";import"./transition.7408c173.js";const a=s=>(v("data-v-e8b7c6d3"),s=s(),y(),s),S={class:"d-flex flex-column align-center justify-center"},V=a(()=>t("h1",{class:"text-h1 mb-10"}," OPERATOR EXAM ",-1)),B=a(()=>t("p",{class:"text-body-1 mb-8"},"This exam will test the following:",-1)),A=a(()=>t("ul",{class:"text-body-1 mb-8"},[t("li",{class:"mb-1"}," Are you knowledgeable of the core realms? "),t("li",{class:"mb-1"}," Do you understand the semiotics? "),t("li",{class:"mb-1"}," Can you intuit the path when there is little guidance? ")],-1)),E=a(()=>t("p",{class:"text-body-1 mb-3"},"Still feeling lost or uncertain?",-1)),C=a(()=>t("p",{class:"text-body-1 mb-3"},[m("It would be best to brush up in "),t("strong",{class:"font-weight-black"},"/briefing"),m(" before the exam.")],-1)),I=a(()=>t("p",{class:"text-body-1 mb-6"},"Once started you will have 30 seconds to answer each question.",-1)),D={class:"text-body-1 mb-15"},N={__name:"ExamStart",emits:["solved"],setup(s,{emit:p}){const _=()=>{localStorage.remainingAttempts--,p("solved")},l=c(!1),r=c(0);return b(()=>{r.value=localStorage.remainingAttempts||5,localStorage.remainingAttempts<=0&&(l.value=!0)}),(O,R)=>{const n=u;return h(),x(k,{class:"my-5"},{default:o(()=>[e(d,null,{default:o(()=>[e(i,{cols:"12",sm:"12",md:"12",lg:"10",xl:"8",class:"offset-lg-1 offset-xl-2"},{default:o(()=>[t("div",null,[e(w,{variant:"outlined",color:"deep-orange-darken-4",class:"pa-15 text-deep-orange-darken-4"},{default:o(()=>[t("div",S,[V,B,A,E,C,I,t("p",D,"You have "+g(r.value)+" attempts remaining today.",1),e(d,null,{default:o(()=>[e(i,{cols:"12",sm:"12"},{default:o(()=>[e(n,{class:"mr-2",variant:"outlined",text:"Back to /Briefing","realm-icons":["map-search-outline"],"link-name":"/briefing"})]),_:1}),e(i,{cols:"12",sm:"12"},{default:o(()=>[e(n,{class:"mr-2",warning:"",variant:"outlined",text:"Begin Exam",disabled:l.value,"realm-icons":["key"],onClick:_},null,8,["disabled"])]),_:1})]),_:1})])]),_:1})])]),_:1})]),_:1})]),_:1})}}},rt=f(N,[["__scopeId","data-v-e8b7c6d3"]]);export{rt as default};
