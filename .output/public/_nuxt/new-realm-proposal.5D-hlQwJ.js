import U from"./DisLogo.DY1uq62J.js";import j from"./CBTextField.CMZcExtD.js";import D from"./CBTextArea.CUjBeTGl.js";import F from"./CBToggleSwitch.Bceuo7OX.js";import{aa as $,a as I,r as v,u as O,a7 as E,m as H,ae as M,d as z,e as S,f as e,w as a,h as d,s as G,V as n,j as l,k as P,l as t,p as s,i as C,v as f,t as J,af as K,q as Q,_ as W,ag as X}from"./entry.BEHNrUNK.js";import{_ as Y}from"./nuxt-layout.C5dEy9wV.js";import{g as Z}from"./composables.CIgnywY2.js";import{V as ee}from"./VSnackbar.Cks4Z3dw.js";import"./VTextField.D8Pl20QP.js";/* empty css                   */import"./forwardRefs.XokMx-um.js";import"./index.CJvU49Ap.js";import"./VInput.Qty90ge8.js";import"./VSelectionControl.DbafjVkF.js";import"./VOverlay.BQuK-c3b.js";const ae=t("h1",{class:"text-h1 mb-5"},"Submit a New Realm",-1),te=t("p",{class:"text-body-1 ml-10"},"Form N-RLM:C1",-1),se=t("p",{class:"text-body-2 ml-10 mb-3"},"New Realm - Clearance 1",-1),le=t("ol",{class:"text-decoration-none"},[t("li",{class:"text-body-1 ml-10 mb-1"},"Use form N-RLM to submit a new realm to the archives."),t("li",{class:"text-body-1 ml-10"},"Submitted realms will be approved by a Director at the DIS.")],-1),oe=t("p",{class:"text-body-1 mb-1"},"Toggle Options",-1),re=t("p",{class:"text-body-2"},`Toggle "Has Semiotics" if you'd like the realm to be used in the Operator exam.`,-1),ne=t("p",{class:"text-body-2"},'Toggle "Accepting Submissions" if the realm should allow other Operators to submit imagery.',-1),ie={class:"d-flex align-center justify-space-between align-md-start"},me={class:"d-flex align-end justify-end"},ce={key:0,class:"text-body-1 text-right text-deep-orange-darken-4"},de=t("p",{class:"text-primary text-body-2"}," Upload Succeeded ",-1),Re={__name:"new-realm-proposal",async setup(ue){let m,h;const k=([m,h]=$(()=>Z()),m=await m,h(),m),N=I(),u=v(""),c=v(!1),w={title:"required|alphaAndSpace|min:5|max:20",abbTitle:"requiredAbbreviation:title,15|alphaSpaceAndDot|max:12",slug:"required|slug|min:3|max:20",narrative:"required|narrativeString|max:150",realmCode:"requiredIf:hasSemiotics"},{values:g,handleSubmit:V,errors:o,isSubmitting:_,resetForm:R}=O({initialValues:{hasSemiotics:!1,clearanceNeeded:!1,takingSubmissions:!1,title:"",abbTitle:"",narrative:"",slug:""},validationSchema:w}),T=E(()=>g.title.length>12?"Realm Name Truncation*":"Realm Name Truncation"),A=V(p=>{H(z(N,"realms",p.slug),{...p,iconNames:"",active:!1,submittedBy:k.displayName,lastUpdated:M()}).then(()=>{c.value=!0,R()}).catch(r=>{u.value=r})});return(p,r)=>{const B=U,i=j,q=D,b=F,x=W,L=Y;return d(),S("div",null,[e(L,{name:"sub-admin"},{default:a(()=>[e(G,{class:"my-5"},{default:a(()=>[e(n,null,{default:a(()=>[e(l,{cols:"12",sm:"2",class:"mb-5 d-flex align-center justify-center"},{default:a(()=>[e(B)]),_:1}),e(l,{cols:"12",sm:"5",class:"mb-5 d-flex align-center"},{default:a(()=>[ae]),_:1}),e(l,{cols:"12",sm:"5",class:"mb-5 d-flex align-center"},{default:a(()=>[e(P,{variant:"outlined",class:"pa-5 mr-5"},{default:a(()=>[te,se,le]),_:1})]),_:1})]),_:1}),t("form",null,[e(n,null,{default:a(()=>[e(l,{cols:"12",class:"mb-10"},{default:a(()=>[oe,re,ne]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(l,{cols:"12",md:"6",class:"mb-5 text-primary"},{default:a(()=>[e(i,{class:"mb-5",name:"title",errors:s(o).title,hint:"A proper noun case name for the realm.",label:"Realm Name*"},null,8,["errors"]),e(i,{class:"mb-5",name:"abbTitle",errors:s(o).abbTitle,hint:"A truncation to use in place of longer realm names. e.g. Agg. Lagoon, Inhb. Realm",label:T.value},null,8,["errors","label"]),e(i,{name:"subtitle",errors:s(o).subtitle,hint:"An adjective then noun works well here, e.g. Bountiful Archeology ",label:"Realm Subtitle*"},null,8,["errors"]),s(g).hasSemiotics?(d(),C(i,{key:0,name:"realmCode",errors:s(o).realmCode,hint:"If a realm has Semiotics it requires a 4 digit code comprised of 0 to 9, *, and # ",label:"Realm Code*"},null,8,["errors"])):f("",!0)]),_:1}),e(l,{cols:"12",md:"6"},{default:a(()=>[e(i,{class:"mb-5",name:"slug",errors:s(o).slug,hint:"A hyphenated URL path, lowercase letters & hyphens only. e.g. silent-shores",label:"Realm Slug*"},null,8,["errors"]),e(q,{name:"narrative",label:"Realm Narrative*",hint:"Should be musing information about the realm. Two short sentences or sentence fragments are appropriate.",errors:s(o).narrative},null,8,["errors"])]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(l,{cols:"12"},{default:a(()=>[t("div",ie,[e(b,{name:"hasSemiotics",label:"Has Semiotics"}),e(b,{name:"clearanceNeeded",label:"Clearance Needed"}),e(b,{name:"takingSubmissions",label:"Accepting Submissions"})])]),_:1})]),_:1}),e(n,{class:"mt-5"},{default:a(()=>[e(l,{cols:"6",xl:"6",class:"mb-1"},{default:a(()=>[e(x,{variant:"outlined","link-name":"/operations/control",disabled:s(_),text:"Cancel"},null,8,["disabled"])]),_:1}),e(l,{cols:"6",xl:"6",class:"mb-1"},{default:a(()=>[e(x,{onClick:s(A),color:"primary-darken-1",class:"text-primary",disabled:s(_),text:"Submit"},null,8,["onClick","disabled"])]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(l,{cols:"12",class:"mb-4"},{default:a(()=>[t("div",me,[s(_)?(d(),C(X,{key:0,size:"50",width:"6","bg-color":"primary-darken-1",color:"primary",indeterminate:"",class:"mb-3"})):f("",!0)]),u.value?(d(),S("div",ce,J(u.value),1)):f("",!0)]),_:1})]),_:1})]),e(ee,{modelValue:c.value,"onUpdate:modelValue":r[1]||(r[1]=y=>c.value=y)},{actions:a(()=>[e(K,{color:"primary",variant:"text",onClick:r[0]||(r[0]=y=>c.value=!1)},{default:a(()=>[Q(" Close ")]),_:1})]),default:a(()=>[de]),_:1},8,["modelValue"])]),_:1})]),_:1})])}}};export{Re as default};
