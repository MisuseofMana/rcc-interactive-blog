import T from"./bkdKaX-e.js";import{bu as U,N as A,X as G,a4 as N,f as a,a7 as k,aO as X,O as _,bs as Y,a8 as j,aP as H,c7 as z,F as B,r as p,E as Z,a as q,h as b,i as I,w as f,cd as J,l as r,e as O,z as R,ce as K,V as Q,j as W,k as ee,d as te,aj as ae,_ as le}from"./ymP05iDs.js";import{m as oe,V as L,b as ie}from"./Bm93EVq9.js";import{m as se,V as E,a as re,b as ne}from"./DiICOje_.js";import"./CJF_X7pu.js";const ue=U("v-spacer","div","VSpacer"),de=A({...se({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),$=G()({name:"VRadio",props:de(),setup(o,y){let{slots:g}=y;return N(()=>a(E,k(o,{class:["v-radio",o.class],style:o.style,type:"radio"}),g)),{}}}),ve=A({height:{type:[Number,String],default:"auto"},...oe(),...X(re(),["multiple"]),trueIcon:{type:_,default:"$radioOn"},falseIcon:{type:_,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),F=G()({name:"VRadioGroup",inheritAttrs:!1,props:ve(),emits:{"update:modelValue":o=>!0},setup(o,y){let{attrs:g,slots:i}=y;const h=Y(),v=j(()=>o.id||`radio-group-${h}`),u=H(o,"modelValue");return N(()=>{const[c,m]=z(g),C=L.filterProps(o),S=E.filterProps(o),d=i.label?i.label({label:o.label,props:{for:v.value}}):o.label;return a(L,k({class:["v-radio-group",o.class],style:o.style},c,C,{modelValue:u.value,"onUpdate:modelValue":V=>u.value=V,id:v.value}),{...i,default:V=>{let{id:n,messagesId:x,isDisabled:s,isReadonly:e}=V;return a(B,null,[d&&a(ie,{id:n.value},{default:()=>[d]}),a(ne,k(S,{id:n.value,"aria-describedby":x.value,defaultsTarget:"VRadio",trueIcon:o.trueIcon,falseIcon:o.falseIcon,type:o.type,disabled:s.value,readonly:e.value,"aria-labelledby":d?n.value:void 0,multiple:!1},m,{modelValue:u.value,"onUpdate:modelValue":l=>u.value=l}),i)])}})}),{}}}),ce=r("h2",{class:"text-body-2"},"Semiotic?",-1),me=r("h2",{class:"text-body-2"},"Mode?",-1),pe={class:"d-flex"},fe={class:"ml-10 mb-10"},ye={class:"mb-2 d-flex"},ge={class:"ml-10"},Ve={class:"mb-2"},xe={__name:"CBSemioticEditing",props:{photoData:Object},emits:["save-success"],setup(o,{emit:y}){const g=y,i=o,h=p(),v=p(0),u=p(0),c=p(""),m=p("normal"),C=p([{title:"Star",value:"star"},{title:"Pound",value:"pound"},{title:"Zero",value:"0"},{title:"One",value:"1"},{title:"Two",value:"2"},{title:"Three",value:"3"},{title:"Four",value:"4"},{title:"Five",value:"5"},{title:"Six",value:"6"},{title:"Seven",value:"7"},{title:"Eight",value:"8"},{title:"Nine",value:"9"}]),S=p([{title:"Normal",value:"normal"},{title:"Lighter",value:"lighter"},{title:"Multiply",value:"multiply"},{title:"Screen",value:"screen"},{title:"Overlay",value:"overlay"},{title:"Darken",value:"darken"},{title:"Lighten",value:"lighten"},{title:"Color Dodge",value:"color-dodge"},{title:"Color Burn",value:"color-burn"},{title:"Hard Light",value:"hard-light"},{title:"Soft Light",value:"soft-light"},{title:"Difference",value:"difference"},{title:"Exclusion",value:"exclusion"},{title:"Hue",value:"hue"},{title:"Saturation",value:"saturation"},{title:"Color",value:"color"},{title:"Luminosity",value:"luminosity"}]),d=()=>{const s=h.value.getContext("2d"),e=new Image;e.crossOrigin="",s.globalCompositeOperation="normal",e.onload=()=>{const l=new Image;l.src=`/images/semiotics/${c.value}.png`,l.onload=()=>{s.globalCompositeOperation=m.value,s.drawImage(l,v.value,u.value,100,100)},s.drawImage(e,0,0,700,466)},e.src=i.photoData.value.imageLink};Z(()=>{var s,e,l,w,t,M,D,P;(s=i.photoData.value)!=null&&s.overlayY&&(u.value=(e=i.photoData.value)==null?void 0:e.overlayY),(l=i.photoData.value)!=null&&l.overlayX&&(v.value=(w=i.photoData.value)==null?void 0:w.overlayX),(t=i.photoData.value)!=null&&t.renderMode&&(m.value=(M=i.photoData.value)==null?void 0:M.renderMode),(D=i.photoData.value)!=null&&D.semioticValue&&(c.value=(P=i.photoData.value)==null?void 0:P.semioticValue),d()});const V=q(),n=([s,e])=>{s==="vert"?u.value+=e:v.value+=e,d()},x=async()=>{const{realmId:s,id:e}=i.photoData.value,l=te(V,"realms",s,"photographs",e);await ae(l,{overlayY:u.value,overlayX:v.value,semioticValue:c.value,renderMode:m.value}).then(()=>{g("save-success")})};return(s,e)=>{const l=T,w=le;return b(),I(ee,{variant:"outlined",class:"mb-12 pa-10"},{default:f(()=>[a(J,null,{default:f(()=>[r("div",null,[ce,a(F,{modelValue:c.value,"onUpdate:modelValue":[e[0]||(e[0]=t=>c.value=t),d],inline:"",density:"compact"},{default:f(()=>[(b(!0),O(B,null,R(C.value,t=>(b(),I($,{class:"mr-1",key:t.title,label:t.title,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),r("div",null,[me,a(F,{modelValue:m.value,"onUpdate:modelValue":[e[1]||(e[1]=t=>m.value=t),d],inline:"",density:"compact"},{default:f(()=>[(b(!0),O(B,null,R(S.value,t=>(b(),I($,{key:t.value,label:t.title,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),r("div",pe,[r("canvas",{class:"flex-grow-1",style:{"max-width":"700px","max-height":"466px"},ref_key:"semioticCanvas",ref:h,width:"700",height:"466"},null,512),r("div",null,[r("div",fe,[r("div",null,[a(l,{class:"ml-9 mb-2","arrow-direction":"up",distance:-1,onMoveBy:e[2]||(e[2]=t=>n(["vert",t]))}),r("div",ye,[a(l,{class:"mr-2","arrow-direction":"left",distance:-1,onMoveBy:e[3]||(e[3]=t=>n(["hori",t]))}),a(l,{"arrow-direction":"right",distance:1,onMoveBy:e[4]||(e[4]=t=>n(["hori",t]))})]),a(l,{class:"ml-9","arrow-direction":"down",distance:1,onMoveBy:e[5]||(e[5]=t=>n(["vert",t]))})])]),r("div",ge,[r("div",null,[a(l,{class:"ml-9 mb-2","arrow-direction":"up",distance:-20,onMoveBy:e[6]||(e[6]=t=>n(["vert",t]))}),r("div",Ve,[a(l,{class:"mr-2","arrow-direction":"left",distance:-20,onMoveBy:e[7]||(e[7]=t=>n(["hori",t]))}),a(l,{"arrow-direction":"right",distance:20,onMoveBy:e[8]||(e[8]=t=>n(["hori",t]))})]),a(l,{class:"ml-9","arrow-direction":"down",distance:20,onMoveBy:e[9]||(e[9]=t=>n(["vert",t]))})])])])])]),_:1}),a(K,null,{default:f(()=>[a(Q,{"no-gutters":""},{default:f(()=>[a(ue),a(W,{cols:"12",lg:"5"},{default:f(()=>[a(w,{rounded:"",color:"primary-darken-2",variant:"outlined","realm-icons":["floppy"],text:"Save",onClick:e[10]||(e[10]=t=>x())})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{xe as default};