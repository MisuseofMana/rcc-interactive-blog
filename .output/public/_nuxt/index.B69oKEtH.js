import X from"./CBToggleSwitch.Bceuo7OX.js";import Y from"./CBTextField.CMZcExtD.js";import Z from"./CBTextArea.CUjBeTGl.js";import K from"./CBFileInput.DXAs4muT.js";import{M as ee,aE as ae,O as se,aF as le,ax as oe,P as te,aG as ie,Q as ne,R as re,S as ue,W as me,as as ce,X as de,Y as pe,aH as ge,aI as he,aA as fe,a2 as be,aJ as ve,Z as _e,a3 as Se,f as e,x as ye,r as b,a as ke,a9 as xe,L as Ce,D as Ae,u as Re,a7 as q,ab as Le,ac as Ie,ad as Ve,ae as we,m as Ne,d as Pe,e as $,w as i,h as L,l as I,t as Te,k as Be,V as E,j as v,p as s,F as Ue,z as Fe,i as j,v as qe,B as $e,af as Ee,q as je,_ as Me,C as De,H as He,I as ze}from"./entry.BEHNrUNK.js";import{_ as Ge}from"./nuxt-layout.C5dEy9wV.js";import{u as Oe}from"./useRealmData.B1f58Lyx.js";import{V as Je}from"./VSnackbar.Cks4Z3dw.js";import"./index.CJvU49Ap.js";import"./VInput.Qty90ge8.js";import"./VSelectionControl.DbafjVkF.js";import"./VTextField.D8Pl20QP.js";/* empty css                   */import"./forwardRefs.XokMx-um.js";import"./VChip.DaGGqcHW.js";import"./useSiteStore.DpxSRdPB.js";import"./VOverlay.BQuK-c3b.js";const Qe=ee({color:String,...ae(),...se(),...le(),...oe(),...te(),...ie(),...ne(),...re(),...ue()},"VSheet"),We=me()({name:"VSheet",props:Qe(),setup(l,m){let{slots:V}=m;const{themeClasses:w}=ce(l),{backgroundColorClasses:c,backgroundColorStyles:_}=de(pe(l,"color")),{borderClasses:p}=ge(l),{dimensionStyles:g}=he(l),{elevationClasses:h}=fe(l),{locationStyles:N}=be(l),{positionClasses:P}=ve(l),{roundedClasses:S}=_e(l);return Se(()=>e(l.tag,{class:["v-sheet",w.value,c.value,p.value,h.value,P.value,S.value,l.class],style:[_.value,g.value,N.value,l.style]},V)),{}}}),Xe=l=>(He("data-v-fde1ea42"),l=l(),ze(),l),Ye={class:"text-h4 mb-3"},Ze={class:"d-flex align-center justify-space-between align-md-start"},Ke={class:"d-flex"},ea=Xe(()=>I("p",{class:"text-primary text-body-2"}," Upload Succeeded ",-1)),aa={__name:"index",setup(l){const m=b({}),V=ke(),w=xe(),c=b(!1),_=b([]),p=b(!1),g=b(!1),h=b(!1),N=Ce();Ae(()=>{Oe(N.params.realm,{noMusic:!0}).then(({realmData:a})=>{m.value=a.value,_.value=[a.value.sigilImageLink],a.value.sigilImageLink&&(g.value=a.value.sigilImageLink||!1),a.value.audioLink&&(h.value=a.value.audioLink||!1),B({touched:!1,values:a.value})})});const P={title:"required|alphaAndSpace|min:5|max:20",abbTitle:"requiredAbbreviation:title,15|alphaSpaceAndDot|max:12",slug:"required|slug|min:3|max:20",narrative:"required|narrativeString|max:150",realmCode:"requiredIf:hasSemiotics",iconNames:"required"},{values:S,handleSubmit:M,errors:n,setFieldValue:D,meta:x,resetForm:B}=Re({initialValues:{hasSemiotics:!1,clearanceNeeded:!1,acceptingSubmissions:!1,title:"",abbTitle:"",narrative:"",iconNames:"",slug:"",realmSigil:[],realmAudio:[],realmCode:null,audioLicenseLink:null,audioAuthorLink:null,audioAuthorName:null},validationSchema:P}),U=async(a,o)=>{D(o,[a.target.files[0]]),o==="realmSigil"&&(_.value=[URL.createObjectURL(a.target.files[0])],g.value=!1),o==="realmAudio"&&(h.value=!1)},H=q(()=>{var a;return(a=S.iconNames)==null?void 0:a.split(",")}),z=q(()=>{var a;return((a=S.title)==null?void 0:a.length)>12?"Realm Name Truncation*":"Realm Name Truncation"}),G=()=>{B({touched:!1,values:m.value})},O=M(async a=>{var k,u;if(c.value||!x.value.dirty)return;c.value=!0;const o=[],f=(k=a==null?void 0:a.realmSigil)!=null&&k.length?{inputType:"sigil",file:a.realmSigil[0],storageRef:`${m.value.slug}/sigil`}:null,r=(u=a==null?void 0:a.realmAudio)!=null&&u.length?{inputType:"audio",file:a.realmAudio[0],storageRef:`${m.value.slug}/audio`}:null;let C=[f,r].filter(t=>t);C.length>=0&&C.map(t=>{const J=new Promise((T,Q)=>{if((t==null?void 0:t.inputType)==="sigil"&&g.value)T({sigil:g.value});else if((t==null?void 0:t.inputType)==="audio"&&h.value)T({audio:h.value});else{const W=Le(w,t.storageRef),F=Ie(W,t.file);F.on("state_changed",null,R=>{Q(R),alert(R)},()=>{Ve(F.snapshot.ref).then(R=>{T({[t.inputType]:R})})})}});o.push(J)});const A=await Promise.all(o);let d={};A.forEach(t=>{d={...d,...t}});const y={...a,sigilImageLink:d.sigil||null,audioLink:d.audio||null,lastUpdated:we()};delete y.realmSigil,delete y.realmAudio,Ne(Pe(V,"realms",m.value.slug),{...y},{merge:!0}).then(()=>{p.value=!0,c.value=!1})});return(a,o)=>{const f=X,r=Y,C=Z,A=K,d=Me,y=Ge;return L(),$("div",null,[e(y,{name:"realm-editing"},{default:i(()=>{var k;return[I("h4",Ye,Te((k=m.value)==null?void 0:k.title)+" Data",1),e(Be,{variant:"outlined",color:"primary-darken-1",class:"pa-15 text-primary mb-15"},{default:i(()=>[e(E,null,{default:i(()=>[e(v,{cols:"12",md:"12",class:"mb-5 text-primary"},{default:i(()=>[I("div",Ze,[e(f,{name:"hasSemiotics",label:"Has Semiotics"}),e(f,{name:"clearanceNeeded",label:"Clearance Needed"}),e(f,{name:"takingSubmissions",label:"Accepting Submissions"})])]),_:1})]),_:1}),e(E,null,{default:i(()=>[e(v,{cols:"12",md:"6",class:"mb-5 text-primary"},{default:i(()=>[e(r,{class:"mb-5",name:"title",errors:s(n).title,hint:"A proper noun case name for the realm.",label:"Realm Name*"},null,8,["errors"]),e(r,{class:"mb-5",name:"abbTitle",errors:s(n).abbTitle,hint:"A truncation to use in place of longer realm names. e.g. Agg. Lagoon, Inhb. Realm",label:z.value},null,8,["errors","label"]),e(r,{class:"mb-5",name:"subtitle",errors:s(n).subtitle,hint:"An adjective then noun works well here, e.g. Bountiful Archeology ",label:"Realm Subtitle*"},null,8,["errors"]),e(We,{class:"text-primary mb-2 d-flex align-center justify-start",height:"30px"},{default:i(()=>[(L(!0),$(Ue,null,Fe(H.value,(u,t)=>(L(),j(De,{size:"25px",class:"mr-2",key:`icon${t}`,icon:`mdi-${u}`},null,8,["icon"]))),128))]),_:1}),e(r,{class:"mb-5",name:"iconNames",errors:s(n).iconNames,hint:"Comma separated values of Material Design Icon names. If the icons display above your input is valid.",label:"Realm Icons*"},null,8,["errors"]),s(S).hasSemiotics?(L(),j(r,{key:0,class:"mb-5",name:"realmCode",errors:s(n).realmCode,hint:"If a realm has Semiotics it requires a 4 digit code comprised of 0 to 9, *, and # ",label:"Realm Code*"},null,8,["errors"])):qe("",!0)]),_:1}),e(v,{cols:"12",md:"6",class:"text-primary"},{default:i(()=>[e(r,{class:"mb-5",name:"slug",errors:s(n).slug,hint:"A hyphenated URL path, lowercase letters & hyphens only. e.g. silent-shores",label:"Realm Slug*"},null,8,["errors"]),e(C,{class:"mb-5",name:"narrative",label:"Realm Narrative*",hint:"Should be musing information about the realm. Two short sentences or sentence fragments are appropriate.",errors:s(n).narrative},null,8,["errors"]),I("div",Ke,[e(A,{class:"mb-5 mr-4",errors:s(n).realmSigil,hint:"Upload an image representing one of the existing realms.",label:"Realm Sigil",name:"realmSigil",onChange:o[0]||(o[0]=u=>U(u,"realmSigil"))},null,8,["errors"]),e($e,{class:"abberation mb-8",contain:"","max-width":"100px",src:_.value[0],alt:"geometric shape"},null,8,["src"])]),e(A,{class:"mb-5",errors:s(n).realmAudio,hint:"Upload a looping audio file in MP3 format which will play when viewing the realm.",label:"Realm Audio",name:"realmAudio",onChange:o[1]||(o[1]=u=>U(u,"realmAudio"))},null,8,["errors"]),e(r,{class:"mb-5",name:"audioLicenseLink",errors:s(n).audioLicenseLink,hint:"Input a url to the CC License if sourced from somewhere requiring attribution.",label:"Audio License URL"},null,8,["errors"]),e(r,{class:"mb-5",name:"audioAuthorLink",errors:s(n).audioAuthorLink,hint:"Input a url to the original audio posted by the audio author if sourced from somewhere requiring attribution.",label:"Audio Author URL"},null,8,["errors"]),e(r,{class:"mb-5",name:"audioAuthorName",errors:s(n).audioAuthorName,hint:"Input the name of the author if sourced from somewhere requiring attribution.",label:"Audio Author Name"},null,8,["errors"])]),_:1}),e(v,{cols:"12",md:"4",class:"text-primary"},{default:i(()=>[e(f,{name:"isPublished",label:"Is Published"})]),_:1}),e(v,{cols:"12",md:"4"},{default:i(()=>[e(d,{class:"mr-2 mb-3",variant:"outlined",text:"Undo Edits",rounded:"","realm-icons":["undo"],disabled:!s(x).dirty||c.value,loading:c.value,onClick:G},null,8,["disabled","loading"])]),_:1}),e(v,{cols:"12",md:"4"},{default:i(()=>[e(d,{class:"mr-2",rounded:"",variant:"elevated",text:s(x).dirty?"Save Changes":"No Changes Made",caution:c.value||!s(x).dirty,"realm-icons":["floppy"],onClick:s(O)},null,8,["text","caution","onClick"])]),_:1})]),_:1})]),_:1}),e(Je,{modelValue:p.value,"onUpdate:modelValue":o[3]||(o[3]=u=>p.value=u)},{actions:i(()=>[e(Ee,{color:"primary",variant:"text",onClick:o[2]||(o[2]=u=>p.value=!1)},{default:i(()=>[je(" Close ")]),_:1})]),default:i(()=>[ea]),_:1},8,["modelValue"])]}),_:1})])}}},_a=ye(aa,[["__scopeId","data-v-fde1ea42"]]);export{_a as default};
