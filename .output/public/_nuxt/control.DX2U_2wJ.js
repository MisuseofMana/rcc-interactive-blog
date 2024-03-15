import{_ as u}from"./controlButton.DZbXWqDk.js";import{_}from"./nuxt-layout.DzOhEKpg.js";import{g as b}from"./composables.DzwuPr63.js";import{r as f,o as x,n as h,e as g,f as e,w as t,h as y,s as k,V as i,j as n,l as s,q as w,t as m,p as N}from"./entry.ChAOt23L.js";import{u as v}from"./useRandomNumber.CdlJy9SV.js";const C={class:"text-body-1 mb-2 text-center"},V={class:"text-deep-orange-darken-4"},S={class:"text-subtitle-1 mb-4 text-center"},B=s("h1",{class:"text-h1 text-center mb-3"},"Control Panel",-1),O=s("p",{class:"text-primary text-body-1 mb-3"},"Operator Clearance Options",-1),R=s("p",{class:"text-primary text-body-1 mb-3"},"Director Clearance Options",-1),c=!0,Y={__name:"control",setup(D){const l=f("...");x(async()=>{const o=await b();l.value=o.displayName,o.displayName!=="Operations"&&h("/brainwash")});const r=["Stumble upon any new realms?","The realms seem calm today. What's in store?","Remember to submit to the appropriate realm.","You seem focused. Did you discover a new realm?","So glad to see you.","You are paying attention, aren't you?","What's next?","Instabilities detected today, be cautious in the realms."],d=v(r.length);return(o,P)=>{const a=u,p=_;return y(),g("div",null,[e(p,{name:"admin"},{default:t(()=>[e(k,{class:"my-5"},{default:t(()=>[e(i,null,{default:t(()=>[e(n,{cols:"12",sm:"8",md:"6",lg:"8",xl:"8",class:"offset-sm-2 offset-md-3 offset-lg-2"},{default:t(()=>[s("p",C,[w("Hello "),s("span",V,m(l.value),1)]),s("p",S,m(r[N(d)]),1),B]),_:1})]),_:1}),e(i,null,{default:t(()=>[e(n,{cols:"12",sm:"6",md:"6",lg:"6",xl:"6"},{default:t(()=>[O,e(a,{class:"mb-3",text:">: Submit Photo Evidence","realm-icons":["camera"],disabled:"","link-name":"/operations/photo-submission"}),e(a,{class:"mb-3",text:">: Artifact Submission",disabled:"","realm-icons":["diamond-stone"],"link-name":"/operations/artifact-submission"}),e(a,{text:">: Operator Settings","realm-icons":["cog"],disabled:""})]),_:1}),e(n,{cols:"12",sm:"6",md:"6",lg:"6",xl:"6"},{default:t(()=>[R,e(a,{class:"mb-3",text:">: Realm Management","realm-icons":["home-edit"],disabled:!c,"link-name":"/operations/realm-management"},null,8,["disabled"]),e(a,{class:"mb-3",text:">: New Realm Proposal","realm-icons":["earth"],disabled:!c,"link-name":"/operations/new-realm-proposal"},null,8,["disabled"]),e(a,{text:">: Photo Approval","realm-icons":["check-decagram-outline"],disabled:"","link-name":"/operations/photo-approval"})]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{Y as default};
