import{c as d,f,g as V}from"./router.12029284.js";import{aa as g,I as y,H as k,G as C,a6 as P,a as e}from"./entry.94ffdeeb.js";import{m as S,u as z}from"./density.5a2b29f1.js";import{m as A,u as I}from"./rounded.a3340ae4.js";import{m as h,u as R,V as T}from"./VIcon.a89c1bf3.js";import{m as B}from"./tag.6e0eec08.js";import{V as D}from"./VImg.9336a433.js";import{u as $}from"./useRender.ee02d324.js";const p=g({start:Boolean,end:Boolean,icon:y,image:String,...S(),...A(),...h(),...B(),...k(),...d({variant:"flat"})},"v-avatar"),j=C({name:"VAvatar",props:p(),setup(a,o){let{slots:s}=o;const{themeClasses:r}=P(a),{colorClasses:n,colorStyles:l,variantClasses:m}=f(a),{densityClasses:i}=z(a),{roundedClasses:u}=I(a),{sizeClasses:v,sizeStyles:c}=R(a);return $(()=>{var t;return e(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},r.value,n.value,i.value,u.value,v.value,m.value],style:[l.value,c.value]},{default:()=>[a.image?e(D,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?e(T,{key:"icon",icon:a.icon},null):(t=s.default)==null?void 0:t.call(s),V(!1,"v-avatar")]})}),{}}});export{j as V};
