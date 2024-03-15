import O from"./DisLogo.Bbh_vPcN.js";import{V as W,a as v,_ as H}from"./CBDropdownSelect.BV4LXBan.js";import J from"./CBFileInput.CLrxmnXp.js";import K from"./CBTextField.IYujbuPa.js";import Q from"./CBTextArea.DCFtSest.js";import{a as X,a9 as Y,aa as Z,r as g,u as ee,ab as te,ac as ae,ad as se,m as le,ae as oe,d as re,e as k,f as e,w as t,h as C,s as ie,V as u,j as m,k as ne,q as A,l as i,p as o,B as me,t as S,i as ce,G as de,v as B,af as ue,_ as fe}from"./entry.ChAOt23L.js";import{_ as pe}from"./nuxt-layout.DzOhEKpg.js";import{g as be}from"./composables.DzwuPr63.js";import{c as ge,a as w,b as _e}from"./index.esm.tasc2V0i.js";import{a as he}from"./useRealmNames.NDbBi-9B.js";import{c as xe,V as ye,a as ve,b as we,d as Ve}from"./VExpansionPanel.BN91HTCN.js";import{V as Te}from"./VSnackbar.C6x9cdym.js";import"./VTextField.BbbjzV6O.js";/* empty css                   */import"./forwardRefs.DBkb97Kd.js";import"./index.DyE5CYnW.js";import"./VInput.BunHh4GF.js";import"./VOverlay.DeNzZdw9.js";import"./ssrBoot.CGlZkHq_.js";import"./VSelectionControl.D32WVPZV.js";import"./VChip.I-1oQ-CN.js";import"./_commonjsHelpers.Cpj98o6Y.js";import"./useSiteStore.Cb1hoYNs.js";const Ce=i("h1",{class:"text-h1 mb-5"},"Submit New Artifact",-1),Ie=i("p",{class:"text-body-1 ml-10"},"Form N-RTFCT:C1",-1),Ne=i("p",{class:"text-body-2 ml-10 mb-3"},"New Artifact - Clearance 1",-1),ke=i("ol",{class:"text-decoration-none"},[i("li",{class:"text-body-1 ml-10 mb-1"},"Use form N-RTFCT to submit a new artifact to the archives."),i("li",{class:"text-body-1 ml-10"},"Submitted artifacts will be approved by a Director at the DIS.")],-1),Ae=i("p",{class:"text-subtitle-1"},"Read N-RTFCT Submission Guidelines before using this form.",-1),Se=i("p",{class:"text-subtitle-1"},"Improper submissions will be rejected and potentially lead to forefiture of your clearance.",-1),Be={class:"text-primary minHeight text-body-1 mx-8 px-5 py-5 text-center"},Re={key:1,class:"text-body-1 text-deep-orange-darken-4"},Fe=i("p",{class:"text-primary text-body-2"}," Upload Succeeded ",-1),Le=i("canvas",{class:"d-none",id:"compression-canvas",width:"500",height:"500"},null,-1),ot={__name:"artifact-submission",async setup(Ue){let _,I;const R=xe("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",15),{nameList:F}=he(),L=X(),U=Y(),$=([_,I]=Z(()=>be()),_=await _,I(),_),h=g(0),x=g([]),V=g(""),y=g(!1),T=g(!1),E={realm:"",imageFile:[],lore:"",altText:""},P=async s=>{x.value[0]=URL.createObjectURL(s.target.files[0]);const a=new Image;a.src=x.value[0],a.onload=()=>{const[n,r]=q(a,700,700),l=document.getElementById("compression-canvas");l.width=a.width,l.height=a.height,l.getContext("2d").drawImage(a,0,0,n,r)}},q=(s,a,n)=>{let r=s.width,l=s.height;return r>l?(T.value=!1,r>a&&(l=Math.round(l*a/r),r=a)):(T.value=!0,l>n&&(r=Math.round(r*n/l),l=n)),[r,l]},{values:D,handleSubmit:j,errors:f,resetForm:G,isSubmitting:p}=ee({initialValues:E,validationSchema:ge().shape({realm:w().required().label("Realm Name"),imageFile:_e().required().label("Image Upload"),altText:w().nullable().max(150).label("Image Alt Text"),lore:w().max(200).required().label("Image Lore"),imageName:w().label("Image Name")})}),z=j(s=>{h.value=0;const a=R(),n=te(U,`${s.realm}/artifacts/${a}`);document.getElementById("compression-canvas").toBlob(l=>{let b=new File([l],s.imageFile[0].name);ae(n,b).on("state_changed",c=>{h.value=c.bytesTransferred/c.totalBytes*100},c=>{V.value=c},()=>{se(n).then(c=>{le(re(L,"realms",s.realm,"artifacts",a),{realmId:s.realm,altText:s.altText?s.altText:s.lore,lore:s.lore,submittedAt:oe(),submittedBy:$.displayName,published:!1,imageLink:c,title:s.imageName,isVertical:T.value}).then(()=>{G({values:{realm:s.realm,imageFile:[],lore:"",altText:"",imageName:""}}),x.value=[]})}),y.value=!0})},"image/webp",1)});return(s,a)=>{const n=O,r=H,l=J,b=K,N=Q,c=fe,M=pe;return C(),k("div",null,[e(M,{name:"sub-admin"},{default:t(()=>[e(ie,{class:"my-5"},{default:t(()=>[e(u,null,{default:t(()=>[e(m,{cols:"12",sm:"2",class:"mb-5 d-flex align-center justify-center"},{default:t(()=>[e(n)]),_:1}),e(m,{cols:"12",sm:"5",class:"mb-5 d-flex align-center"},{default:t(()=>[Ce]),_:1}),e(m,{cols:"12",sm:"5",class:"mb-5 d-flex align-center"},{default:t(()=>[e(ne,{variant:"outlined",class:"pa-5 mr-5"},{default:t(()=>[Ie,Ne,ke]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(m,{cols:"12",class:"mb-5 text-info"},{default:t(()=>[Ae,Se]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(m,{class:"mb-5"},{default:t(()=>[e(ye,null,{default:t(()=>[e(ve,null,{default:t(()=>[e(we,null,{default:t(()=>[A(" N-RTFCT Submission Guidelines ")]),_:1}),e(Ve,null,{default:t(()=>[e(W,{lines:"two"},{default:t(()=>[e(v,{title:"Briefing",subtitle:"Artifacts are intended to be narrative aids for the realms. When submitting artifacts, they must be imagery taken from thrifted publications, vintage illustrations, or otherwise physical scans of historic media."}),e(v,{title:"Preservation",subtitle:"The aim of archiving these thrifted or otherwise images is to preserve and repurpose old imagery that would have otherwise gone to waste."}),e(v,{title:"Requirements",subtitle:"All submitted artifacts must be categorized and submitted to the appropriate realm. If you are uncertain which realm to submit to, select UNCERTAIN."}),e(v,{title:"Appearance",subtitle:"Artifacts must be high quality scans, aim for 300dpi. Artifacts should be preferrably of illustrative imagery, and be submitted in black and white."})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i("form",null,[e(u,null,{default:t(()=>[e(m,{cols:"12",md:"5",class:"mb-5 text-primary"},{default:t(()=>[e(r,{class:"mb-5",errors:o(f).realm,hint:"Select the realm you wish to submit to.",items:o(F),label:"Submit To Which Realm?",name:"realm"},null,8,["errors","items"]),e(l,{class:"mb-5",errors:o(f).imageFile,hint:"Upload an image representing one of the existing realms.",label:"Artifact Image Upload",name:"imageFile",onChange:a[0]||(a[0]=d=>P(d))},null,8,["errors"]),e(b,{class:"mb-5",label:"Artifact Image Name",name:"imageName",hint:"A name to display alongside the artifact.","error-messages":o(f).imageName},null,8,["error-messages"]),e(b,{class:"mb-5",label:"Artifact Image Alt Text",name:"altText",hint:"The alternative text to be used by screen readers. If left blank, Artifact Lore will become the alt text. ","error-messages":o(f).altText},null,8,["error-messages"]),e(N,{name:"lore",label:"Artifact Lore",counter:"200",errors:o(f).lore,hint:"Should be musing information about the artifact. One or two short sentences or sentence fragments are appropriate."},null,8,["errors"])]),_:1}),e(m,{cols:"12",md:"7"},{default:t(()=>[e(me,{src:x.value[0],id:"imagePreview",class:"realmImage","lazy-src":"/images/mocks/placeholder-wide.jpg",alt:"an image to submit documented from another realm"},null,8,["src"]),i("p",Be,S(o(D).lore),1)]),_:1})]),_:1}),e(u,{class:"mt-10"},{default:t(()=>[e(m,{cols:"6",xl:"6"},{default:t(()=>[e(c,{warning:"",variant:"outlined","link-name":"/operations/control",isLoading:o(p),disabled:o(p),text:"Cancel"},null,8,["isLoading","disabled"])]),_:1}),e(m,{cols:"6",xl:"6"},{default:t(()=>[e(c,{onClick:o(z),color:"primary-darken-1",class:"text-primary",isLoading:o(p),disabled:o(p),text:"Submit"},null,8,["onClick","isLoading","disabled"])]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(m,{cols:"12",md:"8",class:"mb-4 offset-md-3"},{default:t(()=>[o(p)?(C(),ce(de,{key:0,"bg-color":"primary",color:"primary",rounded:"",stream:"",height:"12px",modelValue:h.value,"onUpdate:modelValue":a[1]||(a[1]=d=>h.value=d),class:"mb-3"},null,8,["modelValue"])):B("",!0),V.value?(C(),k("div",Re,S(V.value),1)):B("",!0)]),_:1})]),_:1})]),e(Te,{modelValue:y.value,"onUpdate:modelValue":a[3]||(a[3]=d=>y.value=d)},{actions:t(()=>[e(ue,{color:"primary",variant:"text",onClick:a[2]||(a[2]=d=>y.value=!1)},{default:t(()=>[A(" Close ")]),_:1})]),default:t(()=>[Fe]),_:1},8,["modelValue"])]),_:1}),Le]),_:1})])}}};export{ot as default};
