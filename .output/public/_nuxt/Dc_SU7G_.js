import{_ as m}from"./oG9SPVU0.js";import{s as h}from"./byE4uTJZ.js";import{x as f,D as _,r as g,E as p,n as w,G as b,o as v,e as x,f as a,w as o,h as l,s as C,V as k,j as y,l as n,T as V,i as B,B as I,H as N}from"./DAMA_ESs.js";import{u as c}from"./CdlJy9SV.js";const S={class:"brainwashContainer cursor d-flex flex-column align-center justify-center"},j={class:"imageContainer"},E={class:"progressContainer"},L={__name:"brainwash",setup(T){_().$patch(s=>{s.currentSound={soundLink:"audio/brainwash.mp3"}});const t=["algorithm","antenna","block","bedding","board","calculation","circuit","cloud","coil","curve","decay","districts","door","dose","figures","flow","formula","gear","geometry","graph","knob","melt","path","power","pyramid","radius","realms","section","stage","sphere","table","tower"],e=g([]);let r=null;const u=()=>{e.value.unshift(t[c(t.length)])};return p(()=>{r=h(()=>{u(),e.value.length>=5&&w({path:"/intro"})},1200)}),b(()=>{clearInterval(r)}),v(()=>{t.forEach(s=>{let i=new Image;i.src=`/images/clutter/${s}.png`}),e.value.unshift(t[c(t.length)])}),(s,i)=>{const d=m;return l(),x("div",null,[a(d,{name:"landing"},{default:o(()=>[a(C,{fluid:"",class:"pa-0"},{default:o(()=>[a(k,{dense:"","no-gutters":""},{default:o(()=>[a(y,{cols:"12",class:"d-flex flex-column align-center justify-center"},{default:o(()=>[n("div",S,[n("div",j,[a(V,{name:"brainwash",mode:"out-in"},{default:o(()=>[(l(),B(I,{class:"abberation mb-8","max-height":"200","max-width":"200",width:"200",height:"200",key:e.value[0],src:`/images/clutter/${e.value[0]}.png`,alt:e.value[0]},null,8,["src","alt"]))]),_:1})]),n("div",E,[a(N,{color:"primary-darken-2",height:"5",rounded:"",indeterminate:""})])])]),_:1})]),_:1})]),_:1})]),_:1})])}}},G=f(L,[["__scopeId","data-v-1612d4b7"]]);export{G as default};
