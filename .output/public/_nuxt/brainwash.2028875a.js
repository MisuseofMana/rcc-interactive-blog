import{_ as g}from"./layout.cccb4692.js";import{_ as h}from"./nuxt-link.6a6e083f.js";import{r as c,j as b,e as x,q as v,x as w,y,o as m,c as p,w as a,a as o,T as k,u as n}from"./entry.5d57cea4.js";import{u as f}from"./useRandomNumber.d50ddb30.js";import{u as N}from"./usePageAudio.22be2194.js";import{V,a as B}from"./VRow.a3334ae7.js";import{V as C}from"./VImg.caa78565.js";import"./howler.5070fb36.js";import"./useSiteStore.007c531e.js";import"./dimensions.a29b2802.js";import"./useRender.dd44c047.js";const z={__name:"brainwash",setup(I){N();const t=["algorithm","antenna","block","bedding","board","calculation","circuit","cloud","coil","curve","decay","districts","door","dose","figures","flow","formula","gear","geometry","graph","knob","melt","path","power","pyramid","radius","realms","section","stage","sphere","table","tower"],e=c(0);let s=null;const r=b(()=>t[e.value]),l=c(0);return x(()=>{e.value=f(t.length),s=setInterval(()=>{e.value<t.length-1?e.value+=1:e.value=0,l.value++,l.value>6&&v({path:"/briefing"})},450),e.value=f(t.length)}),w(()=>{clearInterval(s)}),y(()=>{t.forEach(u=>{let i=new Image;i.src=`/images/clutter/${u}.png`})}),(u,i)=>{const d=g,_=h;return m(),p(_,{to:"/briefing"},{default:a(()=>[o(d,{name:"landing"},{default:a(()=>[o(V,{dense:"","no-gutters":""},{default:a(()=>[o(B,{class:"d-flex justify-center align-center",cols:"12"},{default:a(()=>[o(k,{name:"brainwash",mode:"out-in"},{default:a(()=>[(m(),p(C,{"max-width":"200px","max-height":"200px",class:"abberation",key:n(r),src:`/images/clutter/${n(r)}.png`,alt:n(r)},null,8,["src","alt"]))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{z as default};