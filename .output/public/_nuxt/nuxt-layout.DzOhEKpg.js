import{aW as i,au as d,cd as m,L as h,ce as P,a7 as v,p as f,cf as r,r as b,aK as L,cg as g,ch as k,b6 as j,a$ as l,a6 as R,aU as S,ci as T,T as _,aB as x,cj as A}from"./entry.ChAOt23L.js";const B=i({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(e,o){const t=await r[e.name]().then(a=>a.default||a);return()=>l(t,e.layoutProps,o.slots)}}),H=i({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(e,o){const t=j(),a=d(m),n=a===h()?P():a,u=v(()=>{let s=f(e.name)??n.meta.layout??"default";return s&&!(s in r)&&e.fallback&&(s=f(e.fallback)),s}),y=b();o.expose({layoutRef:y});const c=t.deferHydration();if(t.isHydrating){const s=t.hooks.hookOnce("app:error",c);L().beforeEach(s)}return()=>{const s=u.value&&u.value in r,p=n.meta.layoutTransition??g;return k(_,s&&p,{default:()=>l(T,{suspensible:!0,onResolve:()=>{S(c)}},{default:()=>l(O,{layoutProps:R(o.attrs,{ref:y}),key:u.value||void 0,name:u.value,shouldProvide:!e.name,hasTransition:!!p},o.slots)})}).default()}}}),O=i({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,o){const t=e.name;return e.shouldProvide&&x(A,{isCurrent:a=>t===(a.meta.layout??"default")}),()=>{var a,n;return!t||typeof t=="string"&&!(t in r)?(n=(a=o.slots).default)==null?void 0:n.call(a):l(B,{key:t,layoutProps:e.layoutProps,name:t},o.slots)}}});export{H as _};
