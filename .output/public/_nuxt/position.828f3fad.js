import{V as l}from"./VProgressLinear.7c2c19e7.js";import{a5 as n,ax as i,j as r,a as s}from"./entry.c9a1c00a.js";const m=n({loading:[Boolean,String]},"loader");function g(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i();return{loaderClasses:r(()=>({[`${t}--loading`]:e.loading}))}}function f(e,t){var a;let{slots:o}=t;return s("div",{class:`${e.name}__loader`},[((a=o.default)==null?void 0:a.call(o,{color:e.color,isActive:e.active}))||s(l,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const u=["static","relative","fixed","absolute","sticky"],v=n({position:{type:String,validator:e=>u.includes(e)}},"position");function p(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i();return{positionClasses:r(()=>e.position?`${t}--${e.position}`:void 0)}}export{f as L,v as a,p as b,m,g as u};
