import N from"./CBTextField.255ef873.js";import B from"./CBPasswordField.4448870b.js";import{_ as U}from"./backButton.b4a42b8e.js";import{_ as S}from"./nuxt-link.67e2efab.js";import{_ as $}from"./layout.11a375a8.js";import{k as v,l as A,m as q,r as f,q as E,s as _,v as F,x as O,y as T,z,o as x,c as h,w as t,a as e,e as s,u as a,t as I,d as L,g as W}from"./entry.94ffdeeb.js";import{c as M,a as i}from"./index.esm.f2d381c7.js";import{V as R}from"./VContainer.26342d42.js";import{a as o,V as y}from"./VRow.874663fa.js";import{V as D}from"./VCard.9eec5110.js";import"./VTextField.5390ceef.js";/* empty css                   */import"./forwardRefs.14bdb9d9.js";import"./index.108b6c93.js";import"./VInput.6e31d692.js";import"./useRender.ee02d324.js";import"./density.5a2b29f1.js";import"./VIcon.a89c1bf3.js";import"./tag.6e0eec08.js";import"./color.08edc865.js";import"./transition.7408c173.js";import"./loader.0e188cc9.js";import"./VProgressLinear.7e39016e.js";import"./rounded.a3340ae4.js";import"./index.66b8fb70.js";import"./VBtn.d2531af0.js";import"./router.12029284.js";import"./group.e7d6c6fc.js";import"./index.5bd91e98.js";import"./dimensions.2a8a239a.js";import"./position.048a6b63.js";import"./VProgressCircular.6669da86.js";import"./resizeObserver.16ca977f.js";import"./createSimpleFunctional.433ad74c.js";import"./VAvatar.7d2681a0.js";import"./VImg.9336a433.js";const G=s("h1",{class:"text-h1 text-center mb-5"},"SIGN UP",-1),Y=s("p",{class:"text-body-1 mb-3"},"Well done, you are hereby granted category one Operator clearance, pending review.",-1),Z=s("p",{class:"text-body-1 mb-10"},"Submit the following form and await further instructions.",-1),j={class:"text-center text-deep-orange-darken-4 text-body-1 mb-3"},Ae={__name:"apply",setup(H){const{handleSubmit:w,values:b,errors:m}=v({initialValues:{username:"",email:"",password:"",confirmPassword:""},validationSchema:M().shape({username:i().matches(/^[a-zA-Z]+$/,'Username may only contain letters "a" to "z"').min(5).max(20).required().label("Username"),email:i().email().label("Email"),password:i().min(9).max(20).required().label("Password"),confirmPassword:i().test("passwords-match","Passwords must match",r=>b.password===r).required().label("Confirm Password")})}),l=A(),g=q(),c=f(""),p=f(!1);E(()=>{if(localStorage.passedExam==="true"){p.value=!0;return}_("/brainwash")});const k=w(r=>{const d=r.email?r.email:`${r.username}@CBArchives.com`;F(l,d,r.confirmPassword).then(()=>{O(l.currentUser,{displayName:r.username}),T(z(g,"users",l.currentUser.uid),{displayName:r.username}),_("/operations/control")}).catch(n=>{n&&(c.value="Sorry, something isn't quite right.")})});return(r,d)=>{const n=N,u=B,P=U,C=S,V=$;return x(),h(V,{name:"signup"},{default:t(()=>[p.value?(x(),h(R,{key:0,class:"my-5"},{default:t(()=>[e(y,null,{default:t(()=>[e(o,{cols:"12"},{default:t(()=>[e(D,{variant:"outlined",color:"primary",width:"100%",class:"px-15 py-6 text-primary"},{default:t(()=>[G,Y,Z,s("form",null,[e(y,null,{default:t(()=>[e(o,{cols:"12",xl:"8",class:"offset-xl-2"},{default:t(()=>[e(n,{label:"Username *",name:"username",hint:"Your desired Operator identifier. Will be displayed alongside your realm submissions.","error-messages":a(m).username},null,8,["error-messages"])]),_:1}),e(o,{cols:"12",xl:"8",class:"offset-xl-2"},{default:t(()=>[e(n,{label:"Email",name:"email",hint:"An email to reach you at. Not necessary to make an account, though recommended.","error-messages":a(m).email},null,8,["error-messages"])]),_:1}),e(o,{cols:"12",xl:"8",class:"offset-xl-2"},{default:t(()=>[e(u,{name:"password",label:"Password *",autocomplete:"off",hint:"Make it secure.",errors:a(m).password},null,8,["errors"])]),_:1}),e(o,{cols:"12",xl:"8",class:"offset-xl-2"},{default:t(()=>[e(u,{name:"confirmPassword",autocomplete:"off",label:"Confirm Password *",hint:"Retype your password to make sure it's as intended.",errors:a(m).confirmPassword},null,8,["errors"])]),_:1}),e(o,{cols:"12",xl:"5",class:"offset-xl-2 mb-5"},{default:t(()=>[s("p",j,I(c.value),1),e(P,{onClick:a(k),color:"primary-darken-1 mb-5",class:"text-primary",text:"Apply to the Operations Team"},null,8,["onClick"])]),_:1}),e(o,{cols:"12",xl:"3",class:"mb-10 text-right text-subtitle-1 text-primary"},{default:t(()=>[e(C,{class:"text-primary text-decoration-none",to:"/login"},{default:t(()=>[L(" Or Log In ")]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})):W("",!0)]),_:1})}}};export{Ae as default};
