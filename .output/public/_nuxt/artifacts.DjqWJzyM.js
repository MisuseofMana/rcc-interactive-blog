import{x as X,L as q,a as G,r as R,u as J,ah as K,aC as Q,i as u,w as l,h as c,f as a,j as m,v,V as $,e as Y,z as Z,p as f,F as ee,ap as ae,aD as le,d as N,_ as se,k as M,A as te,l as d,af as S,C as w,t as p,J as re,q as A,K as ne,B as ie,H as oe,I as ce,ai as ue}from"./entry.BEHNrUNK.js";import me from"./CBToggleSwitch.Bceuo7OX.js";import de from"./CBTextArea.CUjBeTGl.js";import{_ as ve}from"./nuxt-layout.C5dEy9wV.js";import{u as fe,a as ge}from"./useSiteStore.DpxSRdPB.js";import{b as _e}from"./useRealmData.B1f58Lyx.js";import{V as L}from"./VChip.DaGGqcHW.js";import"./index.CJvU49Ap.js";import"./VInput.Qty90ge8.js";import"./VSelectionControl.DbafjVkF.js";/* empty css                   */import"./forwardRefs.XokMx-um.js";const U=x=>(oe("data-v-6d3a207c"),x=x(),ce(),x),pe=U(()=>d("h4",{class:"text-h4 mb-8 mt-15"},"Realm Photographs",-1)),be={class:"d-flex"},ye={class:"mb-5 text-primary"},xe={class:"text-subtitle-1 text-primary mb-2"},ke={class:"text-h5 text-paragraph text-primary"},Ce={class:"text-h5 text-paragraph mb-5"},Ve=U(()=>d("h4",{class:"text-h4 text-primary mb-1"},"Submitted by",-1)),he={class:"text-primary text-paragraph mb-5"},Se=U(()=>d("h5",{class:"text-h5 text-primary mb-1"},"Lore",-1)),we={class:"text-primary text-paragraph"},Ie={__name:"artifacts",setup(x){const O=q(),I=G();fe();const{photos:j}=_e(O.params.realm),r=R(!1),b=R([]),{resetForm:T}=J(),{fields:k,update:D,swap:B,move:z}=K("photos");Q(j,async i=>{i.forEach(t=>{b.value.push(t)}),T({values:{photos:b.value}})});const H=i=>{D(i,b.value[i])},W=async(i,t)=>{const{realmId:o,id:g,lore:y,hasSemiotic:C,useAsCoverImage:e,published:n}=i,V=N(I,"realms",o,"photographs",g);await ue(V,{lore:y,useAsCoverImage:e,published:n,hasSemiotic:C||!1,order:t}).then(()=>{b.value[t]=i})},P=async()=>{const i=le(I);k.value.forEach((t,o)=>{var y;const g=N(I,"realms",t.value.realmId,"photographs",t.value.id);(t.key!==o||((y=t==null?void 0:t.value)==null?void 0:y.order)<0)&&(console.log("updating"),i.update(g,{order:o}))}),await i.commit().then(()=>{r.value=!1})};return(i,t)=>{const o=se,g=me,y=de,C=ve;return c(),u(C,{name:"realm-editing"},{default:l(()=>[pe,a($,null,{default:l(()=>[a(m,{cols:"12",lg:"6"},{default:l(()=>[a(o,{class:"mr-2 mb-10",text:r.value?"Exit Rearrange Mode":"Enter Rearrange Mode",rounded:"","realm-icons":r.value?["close-circle"]:["check-circle"],warning:r.value,onClick:t[0]||(t[0]=e=>r.value=!r.value)},null,8,["text","realm-icons","warning"])]),_:1}),r.value?(c(),u(m,{key:0,cols:"12",lg:"6"},{default:l(()=>[a(o,{class:"mr-2 mb-10",text:"Save Order Of All Images",rounded:"","realm-icons":["floppy"],onClick:t[1]||(t[1]=e=>P())})]),_:1})):v("",!0)]),_:1}),a(ae,{name:"list",tag:"div"},{default:l(()=>[(c(!0),Y(ee,null,Z(f(k),(e,n)=>{var V;return c(),u(M,{variant:"outlined",class:te(["pa-15 mb-8",(V=e==null?void 0:e.value)!=null&&V.hasSemiotic?"text-teal-accent-3":"text-primary"]),key:e==null?void 0:e.key},{default:l(()=>[a($,null,{default:l(()=>[r.value?v("",!0):(c(),u(m,{key:0,cols:"12"},{default:l(()=>[d("div",be,[a(g,{class:"text-primary",name:`photos[${n}].hasSemiotic`,modelValue:e.value.hasSemiotic,"onUpdate:modelValue":s=>e.value.hasSemiotic=s,label:"Image Has Semiotic"},null,8,["name","modelValue","onUpdate:modelValue"]),a(g,{class:"text-primary",name:`photos[${n}].published`,modelValue:e.value.published,"onUpdate:modelValue":s=>e.value.published=s,label:"Is Published"},null,8,["name","modelValue","onUpdate:modelValue"]),a(g,{class:"text-primary",name:`photos[${n}].useAsCoverImage`,modelValue:e.value.useAsCoverImage,"onUpdate:modelValue":s=>e.value.useAsCoverImage=s,label:"Use As Cover Image"},null,8,["name","modelValue","onUpdate:modelValue"])])]),_:2},1024)),r.value?(c(),u(m,{key:1,cols:"12",lg:"1",class:"d-flex align-center flex-column justify-center"},{default:l(()=>[a(S,{class:"mb-2",variant:"plain",size:"x-large",disabled:e.isFirst,color:e.isFirst?"red":"primary",onClick:s=>f(z)(n,0)},{default:l(()=>[a(w,{icon:"mdi-format-vertical-align-top",size:"50px"})]),_:2},1032,["disabled","color","onClick"]),a(S,{class:"mb-5",variant:"plain",size:"x-large",disabled:e.isFirst,color:e.isFirst?"red":"primary",onClick:s=>f(B)(n,n-1)},{default:l(()=>[a(w,{icon:"mdi-arrow-up-bold-hexagon-outline",size:"50px"})]),_:2},1032,["disabled","color","onClick"]),d("p",ye,p(`${n+1}/${f(k).length} `),1),a(S,{class:"mb-2",variant:"plain",size:"x-large",disabled:e.isLast,color:e.isLast?"red":"primary",onClick:s=>f(B)(n,n+1)},{default:l(()=>[a(w,{icon:"mdi-arrow-down-bold-hexagon-outline",size:"50px"})]),_:2},1032,["disabled","color","onClick"]),a(S,{variant:"plain",size:"x-large",disabled:e.isLast,color:e.isLast?"red":"primary",onClick:s=>f(z)(n,f(k).length-1)},{default:l(()=>[a(w,{icon:"mdi-format-vertical-align-bottom",size:"50px"})]),_:2},1032,["disabled","color","onClick"])]),_:2},1024)):v("",!0),re(a(m,{cols:"12",lg:"6"},{default:l(()=>{var s;return[d("p",xe,"Submitted by "+p(e.value.submittedBy),1),a(M,{color:"primary-darken-3",class:"mb-5 pa-3"},{default:l(()=>{var _,h,E;return[a(L,{class:"mr-2",color:(_=b.value[n])!=null&&_.published?"primary":"red",variant:"elevated"},{default:l(()=>{var F;return[A(p((F=b.value[n])!=null&&F.published?"Published":"Not Published"),1)]}),_:2},1032,["color"]),("useLastUpdated"in i?i.useLastUpdated:f(ge))((h=e==null?void 0:e.value)==null?void 0:h.submittedAt).isRecent.value?(c(),u(L,{key:0,color:"yellow",variant:"elevated",class:"mr-2"},{default:l(()=>[A(" Newly Published ")]),_:1})):v("",!0),(E=e==null?void 0:e.value)!=null&&E.hasSemiotic?(c(),u(L,{key:1,class:"mr-2",color:"teal-accent-3",variant:"elevated"},{default:l(()=>[A(" Has Semiotic ")]),_:1})):v("",!0)]}),_:2},1024),a(y,{name:`photos[${n}].lore`,label:"Image Lore",modelValue:e.value.lore,"onUpdate:modelValue":_=>e.value.lore=_,counter:"200",hint:"Should be musing information about the artifact. One or two short sentences or sentence fragments are appropriate."},null,8,["name","modelValue","onUpdate:modelValue"]),d("h5",ke,"Archived as #"+p(((s=e.value)==null?void 0:s.order)>=0?e.value.order:"X"),1)]}),_:2},1536),[[ne,!r.value]]),a(m,{cols:"12",lg:"6"},{default:l(()=>{var s;return[a(ie,{class:"realmImage noCursor",contain:"",src:(s=e==null?void 0:e.value)==null?void 0:s.imageLink,"lazy-src":"/images/mocks/placeholder-wide.jpg",alt:"geometric shape"},null,8,["src"])]}),_:2},1024),r.value?(c(),u(m,{key:2,cols:"12",lg:"5",class:"d-flex flex-column justify-center"},{default:l(()=>{var s;return[d("h5",Ce,"Archived as #"+p(((s=e.value)==null?void 0:s.order)>=0?e.value.order:"X"),1),Ve,d("p",he,p(e.value.submittedBy),1),Se,d("p",we,p(e.value.lore),1)]}),_:2},1024)):v("",!0),r.value?v("",!0):(c(),u(m,{key:3,cols:"12",lg:"6",class:"d-lg-flex"},{default:l(()=>{var s,_;return[a(o,{class:"mr-2",color:"primary-darken-2",variant:"outlined",text:"Undo Edits",rounded:"","realm-icons":["undo"],onClick:h=>H(n)},null,8,["onClick"]),a(o,{class:"mr-2 mb-3",rounded:"",warning:(s=e==null?void 0:e.value)==null?void 0:s.hasSemiotic,text:(_=e==null?void 0:e.value)!=null&&_.hasSemiotic?"Save With Caution":"Save Changes","realm-icons":["floppy"],onClick:h=>W(e.value,n)},null,8,["warning","text","onClick"])]}),_:2},1024))]),_:2},1024)]),_:2},1032,["class"])}),128))]),_:1}),a($,null,{default:l(()=>[a(m,{cols:"12",lg:"6"},{default:l(()=>[a(o,{class:"mr-2 mb-10",text:r.value?"Exit Rearrange Mode":"Enter Rearrange Mode",rounded:"","realm-icons":r.value?["close-circle"]:["check-circle"],warning:r.value,onClick:t[2]||(t[2]=e=>r.value=!r.value)},null,8,["text","realm-icons","warning"])]),_:1}),r.value?(c(),u(m,{key:0,cols:"12",lg:"6"},{default:l(()=>[a(o,{class:"mr-2 mb-10",text:"Save Order Of All Images",rounded:"","realm-icons":["floppy"],onClick:t[3]||(t[3]=e=>P())})]),_:1})):v("",!0)]),_:1})]),_:1})}}},Oe=X(Ie,[["__scopeId","data-v-6d3a207c"]]);export{Oe as default};