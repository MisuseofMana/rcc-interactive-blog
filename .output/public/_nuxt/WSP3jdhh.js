import{x as K,M as Q,aM as Y,a as Z,r as z,u as ee,E as ae,ai as le,e as $,f as a,w as l,h as o,s as se,V as E,j as c,i as v,v as m,aq as te,F as re,z as ne,p as f,ag as x,q as U,aF as ie,d as T,_ as oe,k as q,A as ue,l as d,C as A,t as g,K as ce,L as me,B as de,I as ve,J as fe,aj as pe}from"./DAMA_ESs.js";import _e from"./DuvuUfuH.js";import ge from"./-NWVzZw-.js";import{_ as be}from"./oG9SPVU0.js";import{a as ye}from"./sL6slM7m.js";import{b as xe}from"./BMEhnFaW.js";import{V as ke}from"./BCyg1Fcu.js";import{V as F}from"./Bmd-quIJ.js";import"./fgkmzgPu.js";import"./DAWpG5iD.js";import"./BpeefcnJ.js";/* empty css        */import"./CAm4HU8_.js";import"./DWGaNmQL.js";import"./mmhWJu_n.js";const L=k=>(ve("data-v-9867ff3f"),k=k(),fe(),k),Ce=L(()=>d("h4",{class:"text-h4 mb-8 mt-15"},"Realm Photographs",-1)),Ve={class:"d-flex justify-space-between"},he={class:"mb-5 text-primary"},Se={class:"text-subtitle-1 text-primary mb-2"},we={key:0,class:"text-h5 text-paragraph text-primary"},Ie={key:1,class:"text-h5 text-paragraph text-primary"},$e={class:"text-h5 text-paragraph mb-5"},Ue=L(()=>d("h4",{class:"text-h4 text-primary mb-1"},"Submitted by",-1)),Ae={class:"text-primary text-paragraph mb-5"},Le=L(()=>d("h5",{class:"text-h5 text-primary mb-1"},"Lore",-1)),Be={class:"text-primary text-paragraph"},ze=L(()=>d("p",{class:"text-primary text-body-2"}," Upload Succeeded ",-1)),Ee={__name:"photographs",setup(k){const H=Q(),W=Y(),B=Z(),r=z(!1),p=z([]),C=z(!1),{resetForm:X}=ee();ae(()=>{xe(H.params.realm).then(({realmPhotosData:i})=>{i.value.forEach(s=>{p.value.push(s)}),p.value=i.value,X({values:{photos:p.value}})})});const{fields:V,update:D,swap:R,move:P}=le("photos"),G=i=>{D(i,p.value[i])},J=async(i,s)=>{const{realmId:u,id:_,lore:b,hasSemiotic:h,useAsCoverImage:e,published:n}=i,S=T(B,"realms",u,"photographs",_);await pe(S,{lore:b,useAsCoverImage:e,published:n,hasSemiotic:h||!1,order:s}).then(()=>{p.value[s]=i,C.value=!0})},M=async()=>{const i=ie(B);V.value.forEach((s,u)=>{var b;const _=T(B,"realms",s.value.realmId,"photographs",s.value.id);(s.key!==u||((b=s==null?void 0:s.value)==null?void 0:b.order)===null)&&i.update(_,{order:u})}),await i.commit().then(()=>{r.value=!1}),W.go()};return(i,s)=>{const u=oe,_=_e,b=ge,h=be;return o(),$("div",null,[a(h,{name:"realm-editing"},{default:l(()=>[a(se,null,{default:l(()=>[Ce,a(E,null,{default:l(()=>[a(c,{cols:"12",lg:"6"},{default:l(()=>[a(u,{class:"mr-2 mb-10",text:r.value?"Exit Rearrange Mode":"Enter Rearrange Mode",rounded:"","realm-icons":r.value?["close-circle"]:["check-circle"],warning:r.value,onClick:s[0]||(s[0]=e=>r.value=!r.value)},null,8,["text","realm-icons","warning"])]),_:1}),r.value?(o(),v(c,{key:0,cols:"12",lg:"6"},{default:l(()=>[a(u,{class:"mr-2 mb-10",text:"Save Order Of All Images",rounded:"","realm-icons":["floppy"],onClick:s[1]||(s[1]=e=>M())})]),_:1})):m("",!0)]),_:1}),a(te,{name:"list",tag:"div"},{default:l(()=>[(o(!0),$(re,null,ne(f(V),(e,n)=>{var S;return o(),v(q,{variant:"outlined",class:ue(["pa-15 mb-8",(S=e==null?void 0:e.value)!=null&&S.hasSemiotic?"text-teal-accent-3":"text-primary"]),key:e==null?void 0:e.key},{default:l(()=>[a(E,null,{default:l(()=>[r.value?m("",!0):(o(),v(c,{key:0,cols:"12"},{default:l(()=>[d("div",Ve,[a(_,{class:"text-primary primary mr-5",color:"primary",name:`photos[${n}].hasSemiotic`,modelValue:e.value.hasSemiotic,"onUpdate:modelValue":t=>e.value.hasSemiotic=t,label:"Image Has Semiotic"},null,8,["name","modelValue","onUpdate:modelValue"]),a(_,{class:"text-primary mr-5",name:`photos[${n}].published`,modelValue:e.value.published,"onUpdate:modelValue":t=>e.value.published=t,label:"Is Published"},null,8,["name","modelValue","onUpdate:modelValue"]),a(_,{class:"text-primary",name:`photos[${n}].useAsCoverImage`,modelValue:e.value.useAsCoverImage,"onUpdate:modelValue":t=>e.value.useAsCoverImage=t,label:"Use As Cover Image"},null,8,["name","modelValue","onUpdate:modelValue"])])]),_:2},1024)),r.value?(o(),v(c,{key:1,cols:"12",lg:"1",class:"d-flex align-center flex-column justify-center"},{default:l(()=>[a(x,{class:"mb-2",variant:"plain",size:"x-large",disabled:e.isFirst,color:e.isFirst?"red":"primary",onClick:t=>f(P)(n,0)},{default:l(()=>[a(A,{icon:"mdi-format-vertical-align-top",size:"50px"})]),_:2},1032,["disabled","color","onClick"]),a(x,{class:"mb-5",variant:"plain",size:"x-large",disabled:e.isFirst,color:e.isFirst?"red":"primary",onClick:t=>f(R)(n,n-1)},{default:l(()=>[a(A,{icon:"mdi-arrow-up-bold-hexagon-outline",size:"50px"})]),_:2},1032,["disabled","color","onClick"]),d("p",he,g(`${n+1}/${f(V).length} `),1),a(x,{class:"mb-2",variant:"plain",size:"x-large",disabled:e.isLast,color:e.isLast?"red":"primary",onClick:t=>f(R)(n,n+1)},{default:l(()=>[a(A,{icon:"mdi-arrow-down-bold-hexagon-outline",size:"50px"})]),_:2},1032,["disabled","color","onClick"]),a(x,{variant:"plain",size:"x-large",disabled:e.isLast,color:e.isLast?"red":"primary",onClick:t=>f(P)(n,f(V).length-1)},{default:l(()=>[a(A,{icon:"mdi-format-vertical-align-bottom",size:"50px"})]),_:2},1032,["disabled","color","onClick"])]),_:2},1024)):m("",!0),ce(a(c,{cols:"12",lg:"6"},{default:l(()=>{var t,y,w;return[d("p",Se,"Submitted by "+g(e.value.submittedBy),1),a(q,{color:"primary-darken-3",class:"mb-5 pa-3"},{default:l(()=>{var I,N,j;return[a(F,{class:"mr-2",color:(I=p.value[n])!=null&&I.published?"primary":"red",variant:"elevated"},{default:l(()=>{var O;return[U(g((O=p.value[n])!=null&&O.published?"Published":"Not Published"),1)]}),_:2},1032,["color"]),("useLastUpdated"in i?i.useLastUpdated:f(ye))((N=e==null?void 0:e.value)==null?void 0:N.submittedAt).isRecent.value?(o(),v(F,{key:0,color:"yellow",variant:"elevated",class:"mr-2"},{default:l(()=>[U(" Newly Published ")]),_:1})):m("",!0),(j=e==null?void 0:e.value)!=null&&j.hasSemiotic?(o(),v(F,{key:1,class:"mr-2",color:"teal-accent-3",variant:"elevated"},{default:l(()=>[U(" Has Semiotic ")]),_:1})):m("",!0)]}),_:2},1024),a(b,{class:"mb-5",name:`photos[${n}].lore`,label:"Image Lore",modelValue:e.value.lore,"onUpdate:modelValue":I=>e.value.lore=I,counter:"200",hint:"One or two musing sentences about the image."},null,8,["name","modelValue","onUpdate:modelValue"]),((t=e.value)==null?void 0:t.order)!=null?(o(),$("h5",we,"Archived as #"+g(((y=e.value)==null?void 0:y.order)>=0?e.value.order:"X"),1)):m("",!0),((w=e.value)==null?void 0:w.order)===null?(o(),$("h5",Ie,"No Order Recorded")):m("",!0)]}),_:2},1536),[[me,!r.value]]),a(c,{cols:"12",lg:"6"},{default:l(()=>{var t;return[a(de,{class:"realmImage noCursor",contain:"",src:(t=e==null?void 0:e.value)==null?void 0:t.imageLink,"lazy-src":"/images/mocks/placeholder-wide.jpg",alt:"geometric shape"},null,8,["src"])]}),_:2},1024),r.value?(o(),v(c,{key:2,cols:"12",lg:"5",class:"d-flex flex-column justify-center"},{default:l(()=>{var t;return[d("h5",$e,"Archived as #"+g(((t=e.value)==null?void 0:t.order)>=0?e.value.order:"X"),1),Ue,d("p",Ae,g(e.value.submittedBy),1),Le,d("p",Be,g(e.value.lore),1)]}),_:2},1024)):m("",!0),r.value?m("",!0):(o(),v(c,{key:3,cols:"12",lg:"6",class:"d-md-flex"},{default:l(()=>{var t,y;return[a(u,{color:"primary-darken-2",variant:"outlined",text:"Undo Edits",rounded:"","realm-icons":["undo"],onClick:w=>G(n)},null,8,["onClick"]),a(u,{class:"ml-10 mb-3",rounded:"",warning:(t=e==null?void 0:e.value)==null?void 0:t.hasSemiotic,text:(y=e==null?void 0:e.value)!=null&&y.hasSemiotic?"Save With Caution":"Save Changes","realm-icons":["floppy"],onClick:w=>J(e.value,n)},null,8,["warning","text","onClick"])]}),_:2},1024))]),_:2},1024)]),_:2},1032,["class"])}),128))]),_:1}),a(E,null,{default:l(()=>[a(c,{cols:"12",lg:"6"},{default:l(()=>[a(u,{class:"mr-2 mb-10",text:r.value?"Exit Rearrange Mode":"Enter Rearrange Mode",rounded:"","realm-icons":r.value?["close-circle"]:["check-circle"],warning:r.value,onClick:s[2]||(s[2]=e=>r.value=!r.value)},null,8,["text","realm-icons","warning"])]),_:1}),r.value?(o(),v(c,{key:0,cols:"12",lg:"6"},{default:l(()=>[a(u,{class:"mr-2 mb-10",text:"Save Order Of All Images",rounded:"","realm-icons":["floppy"],onClick:s[3]||(s[3]=e=>M())})]),_:1})):m("",!0)]),_:1}),a(ke,{modelValue:C.value,"onUpdate:modelValue":s[5]||(s[5]=e=>C.value=e),timer:"primary",timeout:"1500"},{actions:l(()=>[a(x,{color:"primary",variant:"text",onClick:s[4]||(s[4]=e=>C.value=!1)},{default:l(()=>[U(" Close ")]),_:1})]),default:l(()=>[ze]),_:1},8,["modelValue"])]),_:1})]),_:1})])}}},Ke=K(Ee,[["__scopeId","data-v-9867ff3f"]]);export{Ke as default};
