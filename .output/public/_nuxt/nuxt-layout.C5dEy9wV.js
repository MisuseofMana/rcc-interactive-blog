import{aW as i,au as d,c9 as m,L as h,ca as P,a7 as b,p as f,cb as r,r as v,aK as L,cc as k,cd as g,b6 as R,a$ as l,a6 as S,aU as T,ce as j,T as _,aB as x,cf as A}from"./entry.BEHNrUNK.js";const B=i({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(e,o){const t=await r[e.name]().then(a=>a.default||a);return()=>l(t,e.layoutProps,o.slots)}}),H=i({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(e,o){const t=R(),a=d(m),n=a===h()?P():a,u=b(()=>{let s=f(e.name)??n.meta.layout??"default";return s&&!(s in r)&&e.fallback&&(s=f(e.fallback)),s}),y=v();o.expose({layoutRef:y});const c=t.deferHydration();if(t.isHydrating){const s=t.hooks.hookOnce("app:error",c);L().beforeEach(s)}return()=>{const s=u.value&&u.value in r,p=n.meta.layoutTransition??k;return g(_,s&&p,{default:()=>l(j,{suspensible:!0,onResolve:()=>{T(c)}},{default:()=>l(O,{layoutProps:S(o.attrs,{ref:y}),key:u.value||void 0,name:u.value,shouldProvide:!e.name,hasTransition:!!p},o.slots)})}).default()}}}),O=i({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,o){const t=e.name;return e.shouldProvide&&x(A,{isCurrent:a=>t===(a.meta.layout??"default")}),()=>{var a,n;return!t||typeof t=="string"&&!(t in r)?(n=(a=o.slots).default)==null?void 0:n.call(a):l(B,{key:t,layoutProps:e.layoutProps,name:t},o.slots)}}});export{H as _};
