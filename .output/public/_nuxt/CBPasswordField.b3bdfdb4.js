import{r as m,J as s,P as p,o as d,c as u,u as l,Q as f}from"./entry.af4b25f0.js";import{V as y}from"./VTextField.6cbfc730.js";/* empty css                   */import"./forwardRefs.a44f5a39.js";import"./index.72f797fd.js";import"./VInput.6cafeb98.js";import"./useRender.711bb119.js";import"./density.a43ed496.js";import"./VIcon.4c30e4d0.js";import"./tag.622ed0d5.js";import"./color.16bf09b2.js";import"./transition.c0b5a353.js";import"./loader.a28a0d31.js";import"./VProgressLinear.58e0b888.js";import"./rounded.2773415e.js";import"./index.26545022.js";const E={__name:"CBPasswordField",props:{label:{type:String,default:"Text Field"},name:{type:String,default:"textfield"},errors:{type:String,default:""},hint:{type:String,default:"YOU FORGOT TO WRITE THE HINT"},items:{type:Array,default:()=>["Some","Default","Options"]}},setup(e){const n=e,t=m(!1),a=s(n,"name"),{value:o}=p(a,void 0);return(c,r)=>(d(),u(y,{variant:"outlined",name:l(a),label:e.label,hint:e.hint,"append-icon":t.value?"mdi-eye":"mdi-eye-off",type:t.value?"text":"password","onClick:append":r[0]||(r[0]=i=>t.value=!t.value),"error-messages":e.errors,modelValue:l(o),"onUpdate:modelValue":r[1]||(r[1]=i=>f(o)?o.value=i:null)},null,8,["name","label","hint","append-icon","type","error-messages","modelValue"]))}};export{E as default};
