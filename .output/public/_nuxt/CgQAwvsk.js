import B from"./D_HojsHB.js";import N from"./C843Lzu_.js";import{u as V,g as U,a as v,r as f,o as S,n as _,c as $,b as A,m as E,d as q,e as F,f as e,w as a,h,i as O,V as x,j as t,k as T,l as o,p as r,t as I,q as L,s as W,v as z,_ as M}from"./ymP05iDs.js";import{_ as R}from"./ByqwasGV.js";import{_ as j}from"./CsiBUKW-.js";import{c as D,a as i}from"./CVmCmz1a.js";import"./1mw39wE6.js";/* empty css        */import"./Bgab4RHJ.js";import"./CJF_X7pu.js";import"./Bm93EVq9.js";import"./DWGaNmQL.js";const G=o("h1",{class:"text-h1 text-center mb-5"},"SIGN UP",-1),Y=o("p",{class:"text-body-1 mb-3"},"Well done, you are hereby granted category one Operator clearance, pending review.",-1),Z=o("p",{class:"text-body-1 mb-10"},"Submit the following form and await further instructions.",-1),H={class:"text-center text-deep-orange-darken-4 text-body-1 mb-3"},me={__name:"apply",setup(J){const{handleSubmit:y,values:b,errors:n}=V({initialValues:{username:"",email:"",password:"",confirmPassword:""},validationSchema:D().shape({username:i().matches(/^[a-zA-Z]+$/,'Username may only contain letters "a" to "z"').min(5).max(20).required().label("Username"),email:i().email().label("Email"),password:i().min(9).max(20).required().label("Password"),confirmPassword:i().test("passwords-match","Passwords must match",s=>b.password===s).required().label("Confirm Password")})}),m=U(),w=v(),c=f(""),d=f(!1);S(()=>{if(localStorage.passedExam==="true"){d.value=!0;return}_("/brainwash")});const g=y(s=>{const u=s.email?s.email:`${s.username}@CBArchives.com`;$(m,u,s.confirmPassword).then(()=>{A(m.currentUser,{displayName:s.username}),E(q(w,"users",m.currentUser.uid),{displayName:s.username}),_("/operations/control")}).catch(l=>{l&&(c.value="Sorry, something isn't quite right.")})});return(s,u)=>{const l=B,p=N,k=M,P=R,C=j;return h(),F("div",null,[e(C,{name:"signup"},{default:a(()=>[d.value?(h(),O(W,{key:0,class:"my-5"},{default:a(()=>[e(x,null,{default:a(()=>[e(t,{cols:"12"},{default:a(()=>[e(T,{variant:"outlined",color:"primary",width:"100%",class:"px-15 py-6 text-primary"},{default:a(()=>[G,Y,Z,o("form",null,[e(x,null,{default:a(()=>[e(t,{cols:"12",xl:"8",class:"offset-xl-2"},{default:a(()=>[e(l,{label:"Username *",name:"username",hint:"Your desired Operator identifier. Will be displayed alongside your realm submissions.","error-messages":r(n).username},null,8,["error-messages"])]),_:1}),e(t,{cols:"12",xl:"8",class:"offset-xl-2"},{default:a(()=>[e(l,{label:"Email",name:"email",hint:"An email to reach you at. Not necessary to make an account, though recommended.","error-messages":r(n).email},null,8,["error-messages"])]),_:1}),e(t,{cols:"12",xl:"8",class:"offset-xl-2"},{default:a(()=>[e(p,{name:"password",label:"Password *",autocomplete:"off",hint:"Make it secure.",errors:r(n).password},null,8,["errors"])]),_:1}),e(t,{cols:"12",xl:"8",class:"offset-xl-2"},{default:a(()=>[e(p,{name:"confirmPassword",autocomplete:"off",label:"Confirm Password *",hint:"Retype your password to make sure it's as intended.",errors:r(n).confirmPassword},null,8,["errors"])]),_:1}),e(t,{cols:"12",xl:"5",class:"offset-xl-2 mb-5"},{default:a(()=>[o("p",H,I(c.value),1),e(k,{onClick:r(g),caution:"",disabled:"",color:"primary-darken-1 mb-5",class:"text-primary",text:"Apply to the Operations Team"},null,8,["onClick"])]),_:1}),e(t,{cols:"12",xl:"3",class:"mb-10 text-right text-subtitle-1 text-primary"},{default:a(()=>[e(P,{class:"text-primary text-decoration-none",to:"/login"},{default:a(()=>[L(" Or Log In ")]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})):z("",!0)]),_:1})])}}};export{me as default};