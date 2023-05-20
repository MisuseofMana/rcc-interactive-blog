import{_ as y}from"./backButton.dd1217ac.js";import{_ as b}from"./nuxt-link.6a6e083f.js";import{_ as U}from"./layout.cccb4692.js";import{k as P,l as k,m as v,q as C,o as N,c as M,w as a,a as t,d as _,u as r,i as A,s as B}from"./entry.5d57cea4.js";import{u as S,a as u}from"./vee-validate.esm.8548a3a3.js";import{V as x,a as l}from"./VRow.a3334ae7.js";import{V as T}from"./VCard.7c7f6f5b.js";import{V as d}from"./VTextField.1c39bc00.js";import{V as $}from"./VContainer.52278e88.js";import"./VIcon.643e9184.js";import"./color.4347dc26.js";import"./useRender.dd44c047.js";import"./router.a9193777.js";import"./rounded.f9bd3dac.js";import"./group.715627b1.js";import"./dimensions.a29b2802.js";import"./position.e8174993.js";import"./VProgressLinear.14bb13fb.js";import"./resizeObserver.a48c6051.js";import"./createSimpleFunctional.a108c35b.js";import"./VAvatar.51dc3611.js";import"./VImg.caa78565.js";import"./index.4b6653b4.js";const E=_("h1",{class:"text-h1 text-center mb-10"},"SIGN UP",-1),le={__name:"apply",setup(F){const{handleSubmit:h}=S({validationSchema:{username(e){return/^[A-Za-z]+$/.test(e)?(e==null?void 0:e.length)<3?"Username must be more than 2 characters.":(e==null?void 0:e.length)>20?"Username must be under 21 characters.":e?!0:"Username is required.":'Username may only contain the letters "a" to "z".'},email(e){return/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e)?!0:"Must be a valid email."},password(e){return(e==null?void 0:e.length)<9?"Password must be at least 9 characters.":(e==null?void 0:e.length)>20?"Password cannot be greater than 20 characters.":!0},confirmPassword(e){return e!=m.value.value?"Passwords do not match. Please double check.":(e==null?void 0:e.length)>20?"Password cannot be greater than 20 characters.":!0}}}),g=P(),n=u("username"),m=u("password"),c=u("email"),f=u("confirmPassword"),p=h(e=>{const o=`${n.value}@CBArchives.com`;k(g,o,m.value).then(()=>{v(g.currentUser,{displayName:n.value}),C("/operations/control")}).catch(i=>{console.log(i.code),console.log(i.message)})});return(e,o)=>{const i=y,V=b,w=U;return N(),M(w,{name:"admin"},{default:a(()=>[t($,{class:"my-5"},{default:a(()=>[t(x,null,{default:a(()=>[t(l,{cols:"12",sm:"12",md:"12",lg:"10",xl:"10",class:"offset-lg-1"},{default:a(()=>[t(T,{variant:"outlined",color:"primary",width:"100%",class:"pa-15 text-primary"},{default:a(()=>[E,_("form",{onSubmit:o[4]||(o[4]=B((...s)=>r(p)&&r(p)(...s),["prevent"]))},[t(x,null,{default:a(()=>[t(l,{cols:"12",xl:"6",class:"offset-xl-3"},{default:a(()=>[t(d,{variant:"outlined",counter:"20",label:"Username *",hint:"Your desired Operator identifier. Will be obfuscated and displayed alongside submissions.","error-messages":r(n).errorMessage.value,modelValue:r(n).value.value,"onUpdate:modelValue":o[0]||(o[0]=s=>r(n).value.value=s)},null,8,["error-messages","modelValue"])]),_:1}),t(l,{cols:"12",xl:"6",class:"offset-xl-3"},{default:a(()=>[t(d,{variant:"outlined",counter:"20",label:"Email",hint:"An email to reach you at. Not necessary to make an account, though recommended.","error-messages":r(c).errorMessage.value,modelValue:r(c).value.value,"onUpdate:modelValue":o[1]||(o[1]=s=>r(c).value.value=s)},null,8,["error-messages","modelValue"])]),_:1}),t(l,{cols:"12",xl:"6",class:"offset-xl-3"},{default:a(()=>[t(d,{variant:"outlined",counter:"20",label:"Password *",hint:"Make it secure.","error-messages":r(m).errorMessage.value,modelValue:r(m).value.value,"onUpdate:modelValue":o[2]||(o[2]=s=>r(m).value.value=s)},null,8,["error-messages","modelValue"])]),_:1}),t(l,{cols:"12",xl:"6",class:"offset-xl-3"},{default:a(()=>[t(d,{variant:"outlined",counter:"20",label:"Confirm Password *",hint:"Confirm your password.","error-messages":r(f).errorMessage.value,modelValue:r(f).value.value,"onUpdate:modelValue":o[3]||(o[3]=s=>r(f).value.value=s)},null,8,["error-messages","modelValue"])]),_:1}),t(l,{cols:"12",xl:"3"},{default:a(()=>[t(i,{color:"primary-darken-1",class:"text-primary",text:"Apply to the Operations Team",onClick:r(p)},null,8,["onClick"])]),_:1}),t(l,{cols:"12",xl:"2",class:"offset-xl-1 text-right text-h6 text-primary d-flex align-center justify-end"},{default:a(()=>[t(V,{class:"text-primary text-decoration-none",to:"/login"},{default:a(()=>[A(" Or Log In ")]),_:1})]),_:1})]),_:1})],32)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{le as default};