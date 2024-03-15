import{M as D,O as M,U as le,W as E,a7 as g,a3 as N,f as r,J as Y,K as H,a5 as ie,N as $,bl as O,c7 as re,Q as se,S as oe,as as ce,c8 as de,Z as ue,bW as fe,bi as ve,r as L,X as he,Y as ge,a0 as me,aC as be,bs as ye,c9 as pe,F as xe,a6 as Ce,bK as _e,ca as we}from"./entry.ChAOt23L.js";import{c as Pe,b as Re}from"./index.DyE5CYnW.js";import{b as Ie,c as Ve,a as Fe,d as Se}from"./VInput.BunHh4GF.js";class W{constructor(l){let{x:a,y:i,width:t,height:n}=l;this.x=a,this.y=i,this.width=t,this.height=n}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Ue(e,l){return{x:{before:Math.max(0,l.left-e.left),after:Math.max(0,e.right-l.right)},y:{before:Math.max(0,l.top-e.top),after:Math.max(0,e.bottom-l.bottom)}}}function je(e){return Array.isArray(e)?new W({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Be(e){const l=e.getBoundingClientRect(),a=getComputedStyle(e),i=a.transform;if(i){let t,n,s,o,c;if(i.startsWith("matrix3d("))t=i.slice(9,-1).split(/, /),n=+t[0],s=+t[5],o=+t[12],c=+t[13];else if(i.startsWith("matrix("))t=i.slice(7,-1).split(/, /),n=+t[0],s=+t[3],o=+t[4],c=+t[5];else return new W(l);const d=a.transformOrigin,v=l.x-o-(1-n)*parseFloat(d),f=l.y-c-(1-s)*parseFloat(d.slice(d.indexOf(" ")+1)),p=n?l.width/n:e.offsetWidth+1,x=s?l.height/s:e.offsetHeight+1;return new W({x:v,y:f,width:p,height:x})}else return new W(l)}function We(e,l,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(l,a)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(t=>{i.onfinish=()=>{t(i)}})),i}const $e="cubic-bezier(0.4, 0, 0.2, 1)",ze="cubic-bezier(0.0, 0, 0.2, 1)",qe="cubic-bezier(0.4, 0, 1, 1)",Oe=D({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...M(),...le({transition:{component:Pe}})},"VCounter"),Ke=E()({name:"VCounter",functional:!0,props:Oe(),setup(e,l){let{slots:a}=l;const i=g(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return N(()=>r(ie,{transition:e.transition},{default:()=>[Y(r("div",{class:["v-counter",e.class],style:e.style},[a.default?a.default({counter:i.value,max:e.max,value:e.value}):i.value]),[[H,e.active]])]})),{}}}),Le=D({floating:Boolean,...M()},"VFieldLabel"),B=E()({name:"VFieldLabel",props:Le(),setup(e,l){let{slots:a}=l;return N(()=>r(Ie,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),Te=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Ae=D({appendInnerIcon:$,bgColor:String,clearable:Boolean,clearIcon:{type:$,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:$,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Te.includes(e)},"onClick:clear":O(),"onClick:appendInner":O(),"onClick:prependInner":O(),...M(),...re(),...se(),...oe()},"VField"),De=E()({name:"VField",inheritAttrs:!1,props:{id:String,...Ve(),...Ae()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{attrs:a,emit:i,slots:t}=l;const{themeClasses:n}=ce(e),{loaderClasses:s}=de(e),{focusClasses:o,isFocused:c,focus:d,blur:v}=Fe(e),{InputIcon:f}=Se(e),{roundedClasses:p}=ue(e),{rtlClasses:x}=fe(),w=g(()=>e.dirty||e.active),P=g(()=>!e.singleLine&&!!(e.label||t.label)),J=ve(),m=g(()=>e.id||`input-${J}`),Q=g(()=>`${m.value}-messages`),U=L(),R=L(),j=L(),z=g(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:Z,backgroundColorStyles:k}=he(ge(e,"bgColor")),{textColorClasses:q,textColorStyles:K}=me(g(()=>e.error||e.disabled?void 0:w.value&&c.value?e.color:e.baseColor));be(w,C=>{if(P.value){const h=U.value.$el,b=R.value.$el;requestAnimationFrame(()=>{const y=Be(h),u=b.getBoundingClientRect(),V=u.x-y.x,F=u.y-y.y-(y.height/2-u.height/2),_=u.width/.75,S=Math.abs(_-y.width)>1?{maxWidth:ye(_)}:void 0,ee=getComputedStyle(h),X=getComputedStyle(b),te=parseFloat(ee.transitionDuration)*1e3||150,ne=parseFloat(X.getPropertyValue("--v-field-label-scale")),ae=X.getPropertyValue("color");h.style.visibility="visible",b.style.visibility="hidden",We(h,{transform:`translate(${V}px, ${F}px) scale(${ne})`,color:ae,...S},{duration:te,easing:$e,direction:C?"normal":"reverse"}).finished.then(()=>{h.style.removeProperty("visibility"),b.style.removeProperty("visibility")})})}},{flush:"post"});const I=g(()=>({isActive:w,isFocused:c,controlRef:j,blur:v,focus:d}));function G(C){C.target!==document.activeElement&&C.preventDefault()}return N(()=>{var V,F,_;const C=e.variant==="outlined",h=t["prepend-inner"]||e.prependInnerIcon,b=!!(e.clearable||t.clear),y=!!(t["append-inner"]||e.appendInnerIcon||b),u=()=>t.label?t.label({...I.value,label:e.label,props:{for:m.value}}):e.label;return r("div",Ce({class:["v-field",{"v-field--active":w.value,"v-field--appended":y,"v-field--center-affix":e.centerAffix??!z.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":h,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!u(),[`v-field--variant-${e.variant}`]:!0},n.value,Z.value,o.value,s.value,p.value,x.value,e.class],style:[k.value,e.style],onClick:G},a),[r("div",{class:"v-field__overlay"},null),r(pe,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),h&&r("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&r(f,{key:"prepend-icon",name:"prependInner"},null),(V=t["prepend-inner"])==null?void 0:V.call(t,I.value)]),r("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&P.value&&r(B,{key:"floating-label",ref:R,class:[q.value],floating:!0,for:m.value,style:K.value},{default:()=>[u()]}),r(B,{ref:U,for:m.value},{default:()=>[u()]}),(F=t.default)==null?void 0:F.call(t,{...I.value,props:{id:m.value,class:"v-field__input","aria-describedby":Q.value},focus:d,blur:v})]),b&&r(Re,{key:"clear"},{default:()=>[Y(r("div",{class:"v-field__clearable",onMousedown:S=>{S.preventDefault(),S.stopPropagation()}},[t.clear?t.clear():r(f,{name:"clear"},null)]),[[H,e.dirty]])]}),y&&r("div",{key:"append",class:"v-field__append-inner"},[(_=t["append-inner"])==null?void 0:_.call(t,I.value),e.appendInnerIcon&&r(f,{key:"append-icon",name:"appendInner"},null)]),r("div",{class:["v-field__outline",q.value],style:K.value},[C&&r(xe,null,[r("div",{class:"v-field__outline__start"},null),P.value&&r("div",{class:"v-field__outline__notch"},[r(B,{ref:R,floating:!0,for:m.value},{default:()=>[u()]})]),r("div",{class:"v-field__outline__end"},null)]),z.value&&P.value&&r(B,{ref:R,floating:!0,for:m.value},{default:()=>[u()]})])])}),{controlRef:j}}});function Xe(e){const l=Object.keys(De.props).filter(a=>!_e(a)&&a!=="class"&&a!=="style");return we(e,l)}const T=Symbol("Forwarded refs");function A(e,l){let a=e;for(;a;){const i=Reflect.getOwnPropertyDescriptor(a,l);if(i)return i;a=Object.getPrototypeOf(a)}}function Ye(e){for(var l=arguments.length,a=new Array(l>1?l-1:0),i=1;i<l;i++)a[i-1]=arguments[i];return e[T]=a,new Proxy(e,{get(t,n){if(Reflect.has(t,n))return Reflect.get(t,n);if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const s of a)if(s.value&&Reflect.has(s.value,n)){const o=Reflect.get(s.value,n);return typeof o=="function"?o.bind(s.value):o}}},has(t,n){if(Reflect.has(t,n))return!0;if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const s of a)if(s.value&&Reflect.has(s.value,n))return!0;return!1},set(t,n,s){if(Reflect.has(t,n))return Reflect.set(t,n,s);if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const o of a)if(o.value&&Reflect.has(o.value,n))return Reflect.set(o.value,n,s);return!1},getOwnPropertyDescriptor(t,n){var o;const s=Reflect.getOwnPropertyDescriptor(t,n);if(s)return s;if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const c of a){if(!c.value)continue;const d=A(c.value,n)??("_"in c.value?A((o=c.value._)==null?void 0:o.setupState,n):void 0);if(d)return d}for(const c of a){const d=c.value&&c.value[T];if(!d)continue;const v=d.slice();for(;v.length;){const f=v.shift(),p=A(f.value,n);if(p)return p;const x=f.value&&f.value[T];x&&v.push(...x)}}}}})}export{W as B,De as V,We as a,qe as b,Ue as c,ze as d,Xe as e,Ye as f,je as g,Ke as h,Ae as m,Be as n,$e as s};
