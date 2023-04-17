function qf(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Kf(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=We(s)?aI(s):Kf(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(We(t))return t;if($e(t))return t}}const rI=/;(?![^(]*\))/g,iI=/:([^]+)/,oI=/\/\*.*?\*\//gs;function aI(t){const e={};return t.replace(oI,"").split(rI).forEach(n=>{if(n){const s=n.split(iI);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function zf(t){let e="";if(We(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const s=zf(t[n]);s&&(e+=s+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const cI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lI=qf(cI);function fv(t){return!!t||t===""}const aj=t=>We(t)?t:t==null?"":ee(t)||$e(t)&&(t.toString===gv||!ie(t.toString))?JSON.stringify(t,dv,2):String(t),dv=(t,e)=>e&&e.__v_isRef?dv(t,e.value):Br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:pv(e)?{[`Set(${e.size})`]:[...e.values()]}:$e(e)&&!ee(e)&&!mv(e)?String(e):e,Le={},$r=[],un=()=>{},uI=()=>!1,hI=/^on[^a-z]/,Jo=t=>hI.test(t),Gf=t=>t.startsWith("onUpdate:"),it=Object.assign,Qf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fI=Object.prototype.hasOwnProperty,ye=(t,e)=>fI.call(t,e),ee=Array.isArray,Br=t=>Zo(t)==="[object Map]",pv=t=>Zo(t)==="[object Set]",dI=t=>Zo(t)==="[object RegExp]",ie=t=>typeof t=="function",We=t=>typeof t=="string",Yf=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",Xf=t=>$e(t)&&ie(t.then)&&ie(t.catch),gv=Object.prototype.toString,Zo=t=>gv.call(t),pI=t=>Zo(t).slice(8,-1),mv=t=>Zo(t)==="[object Object]",Jf=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ro=qf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gI=/-(\w)/g,An=yl(t=>t.replace(gI,(e,n)=>n?n.toUpperCase():"")),mI=/\B([A-Z])/g,_i=yl(t=>t.replace(mI,"-$1").toLowerCase()),ea=yl(t=>t.charAt(0).toUpperCase()+t.slice(1)),uc=yl(t=>t?`on${ea(t)}`:""),Co=(t,e)=>!Object.is(t,e),Vr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ec=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},mh=t=>{const e=parseFloat(t);return isNaN(e)?t:e},yv=t=>{const e=We(t)?Number(t):NaN;return isNaN(e)?t:e};let kg;const yI=()=>kg||(kg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Wt;class _v{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){Wt=this}off(){Wt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function _l(t){return new _v(t)}function _I(t,e=Wt){e&&e.active&&e.effects.push(t)}function Zf(){return Wt}function ed(t){Wt&&Wt.cleanups.push(t)}const td=t=>{const e=new Set(t);return e.w=0,e.n=0,e},vv=t=>(t.w&Ss)>0,wv=t=>(t.n&Ss)>0,vI=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ss},wI=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];vv(r)&&!wv(r)?r.delete(t):e[n++]=r,r.w&=~Ss,r.n&=~Ss}e.length=n}},bc=new WeakMap;let Yi=0,Ss=1;const yh=30;let rn;const Xs=Symbol(""),_h=Symbol("");class nd{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,_I(this,s)}run(){if(!this.active)return this.fn();let e=rn,n=gs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=rn,rn=this,gs=!0,Ss=1<<++Yi,Yi<=yh?vI(this):Ag(this),this.fn()}finally{Yi<=yh&&wI(this),Ss=1<<--Yi,rn=this.parent,gs=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){rn===this?this.deferStop=!0:this.active&&(Ag(this),this.onStop&&this.onStop(),this.active=!1)}}function Ag(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let gs=!0;const Ev=[];function vi(){Ev.push(gs),gs=!1}function wi(){const t=Ev.pop();gs=t===void 0?!0:t}function Ut(t,e,n){if(gs&&rn){let s=bc.get(t);s||bc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=td()),bv(r)}}function bv(t,e){let n=!1;Yi<=yh?wv(t)||(t.n|=Ss,n=!vv(t)):n=!t.has(rn),n&&(t.add(rn),rn.deps.push(t))}function qn(t,e,n,s,r,i){const o=bc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ee(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ee(t)?Jf(n)&&a.push(o.get("length")):(a.push(o.get(Xs)),Br(t)&&a.push(o.get(_h)));break;case"delete":ee(t)||(a.push(o.get(Xs)),Br(t)&&a.push(o.get(_h)));break;case"set":Br(t)&&a.push(o.get(Xs));break}if(a.length===1)a[0]&&vh(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);vh(td(c))}}function vh(t,e){const n=ee(t)?t:[...t];for(const s of n)s.computed&&Rg(s);for(const s of n)s.computed||Rg(s)}function Rg(t,e){(t!==rn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function EI(t,e){var n;return(n=bc.get(t))===null||n===void 0?void 0:n.get(e)}const bI=qf("__proto__,__v_isRef,__isVue"),Tv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yf)),TI=sd(),CI=sd(!1,!0),II=sd(!0),Ng=SI();function SI(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=he(this);for(let i=0,o=this.length;i<o;i++)Ut(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(he)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){vi();const s=he(this)[e].apply(this,n);return wi(),s}}),t}function kI(t){const e=he(this);return Ut(e,"has",t),e.hasOwnProperty(t)}function sd(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?jI:Av:e?kv:Sv).get(s))return s;const o=ee(s);if(!t){if(o&&ye(Ng,r))return Reflect.get(Ng,r,i);if(r==="hasOwnProperty")return kI}const a=Reflect.get(s,r,i);return(Yf(r)?Tv.has(r):bI(r))||(t||Ut(s,"get",r),e)?a:Ue(a)?o&&Jf(r)?a:a.value:$e(a)?t?Rv(a):Ct(a):a}}const AI=Cv(),RI=Cv(!0);function Cv(t=!1){return function(n,s,r,i){let o=n[s];if(rr(o)&&Ue(o)&&!Ue(r))return!1;if(!t&&(!Tc(r)&&!rr(r)&&(o=he(o),r=he(r)),!ee(n)&&Ue(o)&&!Ue(r)))return o.value=r,!0;const a=ee(n)&&Jf(s)?Number(s)<n.length:ye(n,s),c=Reflect.set(n,s,r,i);return n===he(i)&&(a?Co(r,o)&&qn(n,"set",s,r):qn(n,"add",s,r)),c}}function NI(t,e){const n=ye(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&qn(t,"delete",e,void 0),s}function OI(t,e){const n=Reflect.has(t,e);return(!Yf(e)||!Tv.has(e))&&Ut(t,"has",e),n}function PI(t){return Ut(t,"iterate",ee(t)?"length":Xs),Reflect.ownKeys(t)}const Iv={get:TI,set:AI,deleteProperty:NI,has:OI,ownKeys:PI},DI={get:II,set(t,e){return!0},deleteProperty(t,e){return!0}},xI=it({},Iv,{get:CI,set:RI}),rd=t=>t,vl=t=>Reflect.getPrototypeOf(t);function Da(t,e,n=!1,s=!1){t=t.__v_raw;const r=he(t),i=he(e);n||(e!==i&&Ut(r,"get",e),Ut(r,"get",i));const{has:o}=vl(r),a=s?rd:n?ad:Io;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function xa(t,e=!1){const n=this.__v_raw,s=he(n),r=he(t);return e||(t!==r&&Ut(s,"has",t),Ut(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ma(t,e=!1){return t=t.__v_raw,!e&&Ut(he(t),"iterate",Xs),Reflect.get(t,"size",t)}function Og(t){t=he(t);const e=he(this);return vl(e).has.call(e,t)||(e.add(t),qn(e,"add",t,t)),this}function Pg(t,e){e=he(e);const n=he(this),{has:s,get:r}=vl(n);let i=s.call(n,t);i||(t=he(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Co(e,o)&&qn(n,"set",t,e):qn(n,"add",t,e),this}function Dg(t){const e=he(this),{has:n,get:s}=vl(e);let r=n.call(e,t);r||(t=he(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&qn(e,"delete",t,void 0),i}function xg(){const t=he(this),e=t.size!==0,n=t.clear();return e&&qn(t,"clear",void 0,void 0),n}function La(t,e){return function(s,r){const i=this,o=i.__v_raw,a=he(o),c=e?rd:t?ad:Io;return!t&&Ut(a,"iterate",Xs),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Fa(t,e,n){return function(...s){const r=this.__v_raw,i=he(r),o=Br(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?rd:e?ad:Io;return!e&&Ut(i,"iterate",c?_h:Xs),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function es(t){return function(...e){return t==="delete"?!1:this}}function MI(){const t={get(i){return Da(this,i)},get size(){return Ma(this)},has:xa,add:Og,set:Pg,delete:Dg,clear:xg,forEach:La(!1,!1)},e={get(i){return Da(this,i,!1,!0)},get size(){return Ma(this)},has:xa,add:Og,set:Pg,delete:Dg,clear:xg,forEach:La(!1,!0)},n={get(i){return Da(this,i,!0)},get size(){return Ma(this,!0)},has(i){return xa.call(this,i,!0)},add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear"),forEach:La(!0,!1)},s={get(i){return Da(this,i,!0,!0)},get size(){return Ma(this,!0)},has(i){return xa.call(this,i,!0)},add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear"),forEach:La(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Fa(i,!1,!1),n[i]=Fa(i,!0,!1),e[i]=Fa(i,!1,!0),s[i]=Fa(i,!0,!0)}),[t,n,e,s]}const[LI,FI,UI,$I]=MI();function id(t,e){const n=e?t?$I:UI:t?FI:LI;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ye(n,r)&&r in s?n:s,r,i)}const BI={get:id(!1,!1)},VI={get:id(!1,!0)},HI={get:id(!0,!1)},Sv=new WeakMap,kv=new WeakMap,Av=new WeakMap,jI=new WeakMap;function WI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qI(t){return t.__v_skip||!Object.isExtensible(t)?0:WI(pI(t))}function Ct(t){return rr(t)?t:od(t,!1,Iv,BI,Sv)}function KI(t){return od(t,!1,xI,VI,kv)}function Rv(t){return od(t,!0,DI,HI,Av)}function od(t,e,n,s,r){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=qI(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ms(t){return rr(t)?ms(t.__v_raw):!!(t&&t.__v_isReactive)}function rr(t){return!!(t&&t.__v_isReadonly)}function Tc(t){return!!(t&&t.__v_isShallow)}function Nv(t){return ms(t)||rr(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function Jr(t){return Ec(t,"__v_skip",!0),t}const Io=t=>$e(t)?Ct(t):t,ad=t=>$e(t)?Rv(t):t;function Ov(t){gs&&rn&&(t=he(t),bv(t.dep||(t.dep=td())))}function Pv(t,e){t=he(t);const n=t.dep;n&&vh(n)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function xe(t){return Dv(t,!1)}function So(t){return Dv(t,!0)}function Dv(t,e){return Ue(t)?t:new zI(t,e)}class zI{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:he(e),this._value=n?e:Io(e)}get value(){return Ov(this),this._value}set value(e){const n=this.__v_isShallow||Tc(e)||rr(e);e=n?e:he(e),Co(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Io(e),Pv(this))}}function Ne(t){return Ue(t)?t.value:t}const GI={get:(t,e,n)=>Ne(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ue(r)&&!Ue(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function xv(t){return ms(t)?t:new Proxy(t,GI)}function cd(t){const e=ee(t)?new Array(t.length):{};for(const n in t)e[n]=ld(t,n);return e}class QI{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return EI(he(this._object),this._key)}}function ld(t,e,n){const s=t[e];return Ue(s)?s:new QI(t,e,n)}var Mv;class YI{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Mv]=!1,this._dirty=!0,this.effect=new nd(e,()=>{this._dirty||(this._dirty=!0,Pv(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=he(this);return Ov(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Mv="__v_isReadonly";function XI(t,e,n=!1){let s,r;const i=ie(t);return i?(s=t,r=un):(s=t.get,r=t.set),new YI(s,r,i||!r,n)}function ys(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Ei(i,e,n)}return r}function Jt(t,e,n,s){if(ie(t)){const i=ys(t,e,n,s);return i&&Xf(i)&&i.catch(o=>{Ei(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Jt(t[i],e,n,s));return r}function Ei(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ys(c,null,10,[t,o,a]);return}}JI(t,n,r,s)}function JI(t,e,n,s=!0){console.error(t)}let ko=!1,wh=!1;const wt=[];let En=0;const Hr=[];let Un=null,js=0;const Lv=Promise.resolve();let ud=null;function Ds(t){const e=ud||Lv;return t?e.then(this?t.bind(this):t):e}function ZI(t){let e=En+1,n=wt.length;for(;e<n;){const s=e+n>>>1;Ao(wt[s])<t?e=s+1:n=s}return e}function wl(t){(!wt.length||!wt.includes(t,ko&&t.allowRecurse?En+1:En))&&(t.id==null?wt.push(t):wt.splice(ZI(t.id),0,t),Fv())}function Fv(){!ko&&!wh&&(wh=!0,ud=Lv.then($v))}function eS(t){const e=wt.indexOf(t);e>En&&wt.splice(e,1)}function Uv(t){ee(t)?Hr.push(...t):(!Un||!Un.includes(t,t.allowRecurse?js+1:js))&&Hr.push(t),Fv()}function Mg(t,e=ko?En+1:0){for(;e<wt.length;e++){const n=wt[e];n&&n.pre&&(wt.splice(e,1),e--,n())}}function Cc(t){if(Hr.length){const e=[...new Set(Hr)];if(Hr.length=0,Un){Un.push(...e);return}for(Un=e,Un.sort((n,s)=>Ao(n)-Ao(s)),js=0;js<Un.length;js++)Un[js]();Un=null,js=0}}const Ao=t=>t.id==null?1/0:t.id,tS=(t,e)=>{const n=Ao(t)-Ao(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function $v(t){wh=!1,ko=!0,wt.sort(tS);const e=un;try{for(En=0;En<wt.length;En++){const n=wt[En];n&&n.active!==!1&&ys(n,null,14)}}finally{En=0,wt.length=0,Cc(),ko=!1,ud=null,(wt.length||Hr.length)&&$v()}}function nS(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Le;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Le;f&&(r=n.map(d=>We(d)?d.trim():d)),h&&(r=n.map(mh))}let a,c=s[a=uc(e)]||s[a=uc(An(e))];!c&&i&&(c=s[a=uc(_i(e))]),c&&Jt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Jt(l,t,6,r)}}function Bv(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ie(t)){const c=l=>{const u=Bv(l,e,!0);u&&(a=!0,it(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?($e(t)&&s.set(t,null),null):(ee(i)?i.forEach(c=>o[c]=null):it(o,i),$e(t)&&s.set(t,o),o)}function El(t,e){return!t||!Jo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ye(t,e[0].toLowerCase()+e.slice(1))||ye(t,_i(e))||ye(t,e))}let ut=null,bl=null;function Ic(t){const e=ut;return ut=t,bl=t&&t.type.__scopeId||null,e}function cj(t){bl=t}function lj(){bl=null}function Vv(t,e=ut,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&zg(-1);const i=Ic(e);let o;try{o=t(...r)}finally{Ic(i),s._d&&zg(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function _u(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:y}=t;let E,v;const g=Ic(t);try{if(n.shapeFlag&4){const b=r||s;E=Qt(u.call(b,b,h,i,d,f,p)),v=c}else{const b=e;E=Qt(b.length>1?b(i,{attrs:c,slots:a,emit:l}):b(i,null)),v=e.props?c:rS(c)}}catch(b){ao.length=0,Ei(b,t,1),E=Ce(Dt)}let _=E;if(v&&y!==!1){const b=Object.keys(v),{shapeFlag:C}=_;b.length&&C&7&&(o&&b.some(Gf)&&(v=iS(v,o)),_=Kn(_,v))}return n.dirs&&(_=Kn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),E=_,Ic(g),E}function sS(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(ni(s)){if(s.type!==Dt||s.children==="v-if"){if(e)return;e=s}}else return}return e}const rS=t=>{let e;for(const n in t)(n==="class"||n==="style"||Jo(n))&&((e||(e={}))[n]=t[n]);return e},iS=(t,e)=>{const n={};for(const s in t)(!Gf(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function oS(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Lg(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!El(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Lg(s,o,l):!0:!!o;return!1}function Lg(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!El(n,i))return!0}return!1}function hd({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Hv=t=>t.__isSuspense,aS={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,l){t==null?cS(e,n,s,r,i,o,a,c,l):lS(t,e,n,s,r,o,a,c,l)},hydrate:uS,create:fd,normalize:hS},jv=aS;function Ro(t,e){const n=t.props&&t.props[e];ie(n)&&n()}function cS(t,e,n,s,r,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),f=t.suspense=fd(t,r,s,e,h,n,i,o,a,c);l(null,f.pendingBranch=t.ssContent,h,null,s,f,i,o),f.deps>0?(Ro(t,"onPending"),Ro(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,i,o),jr(f,t.ssFallback)):f.resolve()}function lS(t,e,n,s,r,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:y,isInFallback:E,isHydrating:v}=h;if(y)h.pendingBranch=f,on(f,y)?(c(y,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():E&&(c(p,d,n,s,r,null,i,o,a),jr(h,d))):(h.pendingId++,v?(h.isHydrating=!1,h.activeBranch=y):l(y,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),E?(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(p,d,n,s,r,null,i,o,a),jr(h,d))):p&&on(f,p)?(c(p,f,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(p&&on(f,p))c(p,f,n,s,r,h,i,o,a),jr(h,f);else if(Ro(e,"onPending"),h.pendingBranch=f,h.pendingId++,c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:g,pendingId:_}=h;g>0?setTimeout(()=>{h.pendingId===_&&h.fallback(d)},g):g===0&&h.fallback(d)}}function fd(t,e,n,s,r,i,o,a,c,l,u=!1){const{p:h,m:f,um:d,n:p,o:{parentNode:y,remove:E}}=l,v=t.props?yv(t.props.timeout):void 0,g={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(_=!1){const{vnode:b,activeBranch:C,pendingBranch:A,pendingId:S,effects:T,parentComponent:M,container:$}=g;if(g.isHydrating)g.isHydrating=!1;else if(!_){const se=C&&A.transition&&A.transition.mode==="out-in";se&&(C.transition.afterLeave=()=>{S===g.pendingId&&f(A,$,j,0)});let{anchor:j}=g;C&&(j=p(C),d(C,M,g,!0)),se||f(A,$,j,0)}jr(g,A),g.pendingBranch=null,g.isInFallback=!1;let G=g.parent,V=!1;for(;G;){if(G.pendingBranch){G.effects.push(...T),V=!0;break}G=G.parent}V||Uv(T),g.effects=[],Ro(b,"onResolve")},fallback(_){if(!g.pendingBranch)return;const{vnode:b,activeBranch:C,parentComponent:A,container:S,isSVG:T}=g;Ro(b,"onFallback");const M=p(C),$=()=>{g.isInFallback&&(h(null,_,S,M,A,null,T,a,c),jr(g,_))},G=_.transition&&_.transition.mode==="out-in";G&&(C.transition.afterLeave=$),g.isInFallback=!0,d(C,A,null,!0),G||$()},move(_,b,C){g.activeBranch&&f(g.activeBranch,_,b,C),g.container=_},next(){return g.activeBranch&&p(g.activeBranch)},registerDep(_,b){const C=!!g.pendingBranch;C&&g.deps++;const A=_.vnode.el;_.asyncDep.catch(S=>{Ei(S,_,0)}).then(S=>{if(_.isUnmounted||g.isUnmounted||g.pendingId!==_.suspenseId)return;_.asyncResolved=!0;const{vnode:T}=_;Sh(_,S,!1),A&&(T.el=A);const M=!A&&_.subTree.el;b(_,T,y(A||_.subTree.el),A?null:p(_.subTree),g,o,c),M&&E(M),hd(_,T.el),C&&--g.deps===0&&g.resolve()})},unmount(_,b){g.isUnmounted=!0,g.activeBranch&&d(g.activeBranch,n,_,b),g.pendingBranch&&d(g.pendingBranch,n,_,b)}};return g}function uS(t,e,n,s,r,i,o,a,c){const l=e.suspense=fd(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(),u}function hS(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Fg(s?n.default:n),t.ssFallback=s?Fg(n.fallback):Ce(Dt)}function Fg(t){let e;if(ie(t)){const n=ti&&t._c;n&&(t._d=!1,ds()),t=t(),n&&(t._d=!0,e=Yt,hw())}return ee(t)&&(t=sS(t)),t=Qt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Wv(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):Uv(t)}function jr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,hd(s,r))}function _s(t,e){if(qe){let n=qe.provides;const s=qe.parent&&qe.parent.provides;s===n&&(n=qe.provides=Object.create(s)),n[t]=e}}function Ke(t,e,n=!1){const s=qe||ut;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ie(e)?e.call(s.proxy):e}}function ta(t,e){return dd(t,null,e)}const Ua={};function Zt(t,e,n){return dd(t,e,n)}function dd(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Le){const a=Zf()===(qe==null?void 0:qe.scope)?qe:null;let c,l=!1,u=!1;if(Ue(t)?(c=()=>t.value,l=Tc(t)):ms(t)?(c=()=>t,s=!0):ee(t)?(u=!0,l=t.some(_=>ms(_)||Tc(_)),c=()=>t.map(_=>{if(Ue(_))return _.value;if(ms(_))return Ks(_);if(ie(_))return ys(_,a,2)})):ie(t)?e?c=()=>ys(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Jt(t,a,3,[f])}:c=un,e&&s){const _=c;c=()=>Ks(_())}let h,f=_=>{h=v.onStop=()=>{ys(_,a,4)}},d;if(si)if(f=un,e?n&&Jt(e,a,3,[c(),u?[]:void 0,f]):c(),r==="sync"){const _=ek();d=_.__watcherHandles||(_.__watcherHandles=[])}else return un;let p=u?new Array(t.length).fill(Ua):Ua;const y=()=>{if(v.active)if(e){const _=v.run();(s||l||(u?_.some((b,C)=>Co(b,p[C])):Co(_,p)))&&(h&&h(),Jt(e,a,3,[_,p===Ua?void 0:u&&p[0]===Ua?[]:p,f]),p=_)}else v.run()};y.allowRecurse=!!e;let E;r==="sync"?E=y:r==="post"?E=()=>at(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),E=()=>wl(y));const v=new nd(c,E);e?n?y():p=v.run():r==="post"?at(v.run.bind(v),a&&a.suspense):v.run();const g=()=>{v.stop(),a&&a.scope&&Qf(a.scope.effects,v)};return d&&d.push(g),g}function fS(t,e,n){const s=this.proxy,r=We(t)?t.includes(".")?qv(s,t):()=>s[t]:t.bind(s,s);let i;ie(e)?i=e:(i=e.handler,n=e);const o=qe;ks(this);const a=dd(r,i.bind(s),n);return o?ks(o):vs(),a}function qv(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ks(t,e){if(!$e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ue(t))Ks(t.value,e);else if(ee(t))for(let n=0;n<t.length;n++)Ks(t[n],e);else if(pv(t)||Br(t))t.forEach(n=>{Ks(n,e)});else if(mv(t))for(const n in t)Ks(t[n],e);return t}function Kv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gd(()=>{t.isMounted=!0}),Cl(()=>{t.isUnmounting=!0}),t}const Gt=[Function,Array],dS={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gt,onEnter:Gt,onAfterEnter:Gt,onEnterCancelled:Gt,onBeforeLeave:Gt,onLeave:Gt,onAfterLeave:Gt,onLeaveCancelled:Gt,onBeforeAppear:Gt,onAppear:Gt,onAfterAppear:Gt,onAppearCancelled:Gt},setup(t,{slots:e}){const n=$t(),s=Kv();let r;return()=>{const i=e.default&&pd(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==Dt){o=y;break}}const a=he(t),{mode:c}=a;if(s.isLeaving)return vu(o);const l=Ug(o);if(!l)return vu(o);const u=No(l,a,s,n);Zr(l,u);const h=n.subTree,f=h&&Ug(h);let d=!1;const{getTransitionKey:p}=l.type;if(p){const y=p();r===void 0?r=y:y!==r&&(r=y,d=!0)}if(f&&f.type!==Dt&&(!on(l,f)||d)){const y=No(f,a,s,n);if(Zr(f,y),c==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},vu(o);c==="in-out"&&l.type!==Dt&&(y.delayLeave=(E,v,g)=>{const _=Gv(s,f);_[String(f.key)]=f,E._leaveCb=()=>{v(),E._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return o}}},zv=dS;function Gv(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function No(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:y,onAppear:E,onAfterAppear:v,onAppearCancelled:g}=e,_=String(t.key),b=Gv(n,t),C=(T,M)=>{T&&Jt(T,s,9,M)},A=(T,M)=>{const $=M[1];C(T,M),ee(T)?T.every(G=>G.length<=1)&&$():T.length<=1&&$()},S={mode:i,persisted:o,beforeEnter(T){let M=a;if(!n.isMounted)if(r)M=y||a;else return;T._leaveCb&&T._leaveCb(!0);const $=b[_];$&&on(t,$)&&$.el._leaveCb&&$.el._leaveCb(),C(M,[T])},enter(T){let M=c,$=l,G=u;if(!n.isMounted)if(r)M=E||c,$=v||l,G=g||u;else return;let V=!1;const se=T._enterCb=j=>{V||(V=!0,j?C(G,[T]):C($,[T]),S.delayedLeave&&S.delayedLeave(),T._enterCb=void 0)};M?A(M,[T,se]):se()},leave(T,M){const $=String(t.key);if(T._enterCb&&T._enterCb(!0),n.isUnmounting)return M();C(h,[T]);let G=!1;const V=T._leaveCb=se=>{G||(G=!0,M(),se?C(p,[T]):C(d,[T]),T._leaveCb=void 0,b[$]===t&&delete b[$])};b[$]=t,f?A(f,[T,V]):V()},clone(T){return No(T,e,n,s)}};return S}function vu(t){if(na(t))return t=Kn(t),t.children=null,t}function Ug(t){return na(t)?t.children?t.children[0]:void 0:t}function Zr(t,e){t.shapeFlag&6&&t.component?Zr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pd(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Rt?(o.patchFlag&128&&r++,s=s.concat(pd(o.children,e,a))):(e||o.type!==Dt)&&s.push(a!=null?Kn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function pr(t){return ie(t)?{setup:t,name:t.name}:t}const Js=t=>!!t.type.__asyncLoader;function $s(t){ie(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:r=200,timeout:i,suspensible:o=!0,onError:a}=t;let c=null,l,u=0;const h=()=>(u++,c=null,f()),f=()=>{let d;return c||(d=c=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((y,E)=>{a(p,()=>y(h()),()=>E(p),u+1)});throw p}).then(p=>d!==c&&c?c:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),l=p,p)))};return pr({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return l},setup(){const d=qe;if(l)return()=>wu(l,d);const p=g=>{c=null,Ei(g,d,13,!s)};if(o&&d.suspense||si)return f().then(g=>()=>wu(g,d)).catch(g=>(p(g),()=>s?Ce(s,{error:g}):null));const y=xe(!1),E=xe(),v=xe(!!r);return r&&setTimeout(()=>{v.value=!1},r),i!=null&&setTimeout(()=>{if(!y.value&&!E.value){const g=new Error(`Async component timed out after ${i}ms.`);p(g),E.value=g}},i),f().then(()=>{y.value=!0,d.parent&&na(d.parent.vnode)&&wl(d.parent.update)}).catch(g=>{p(g),E.value=g}),()=>{if(y.value&&l)return wu(l,d);if(E.value&&s)return Ce(s,{error:E.value});if(n&&!v.value)return Ce(n)}}})}function wu(t,e){const{ref:n,props:s,children:r,ce:i}=e.vnode,o=Ce(t,s,r);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const na=t=>t.type.__isKeepAlive,pS={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=$t(),s=n.ctx;if(!s.renderer)return()=>{const g=e.default&&e.default();return g&&g.length===1?g[0]:g};const r=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:h}}}=s,f=h("div");s.activate=(g,_,b,C,A)=>{const S=g.component;l(g,_,b,0,a),c(S.vnode,g,_,b,S,a,C,g.slotScopeIds,A),at(()=>{S.isDeactivated=!1,S.a&&Vr(S.a);const T=g.props&&g.props.onVnodeMounted;T&&Lt(T,S.parent,g)},a)},s.deactivate=g=>{const _=g.component;l(g,f,null,1,a),at(()=>{_.da&&Vr(_.da);const b=g.props&&g.props.onVnodeUnmounted;b&&Lt(b,_.parent,g),_.isDeactivated=!0},a)};function d(g){Eu(g),u(g,n,a,!0)}function p(g){r.forEach((_,b)=>{const C=kh(_.type);C&&(!g||!g(C))&&y(b)})}function y(g){const _=r.get(g);!o||!on(_,o)?d(_):o&&Eu(o),r.delete(g),i.delete(g)}Zt(()=>[t.include,t.exclude],([g,_])=>{g&&p(b=>Xi(g,b)),_&&p(b=>!Xi(_,b))},{flush:"post",deep:!0});let E=null;const v=()=>{E!=null&&r.set(E,bu(n.subTree))};return gd(v),md(v),Cl(()=>{r.forEach(g=>{const{subTree:_,suspense:b}=n,C=bu(_);if(g.type===C.type&&g.key===C.key){Eu(C);const A=C.component.da;A&&at(A,b);return}d(g)})}),()=>{if(E=null,!e.default)return null;const g=e.default(),_=g[0];if(g.length>1)return o=null,g;if(!ni(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let b=bu(_);const C=b.type,A=kh(Js(b)?b.type.__asyncResolved||{}:C),{include:S,exclude:T,max:M}=t;if(S&&(!A||!Xi(S,A))||T&&A&&Xi(T,A))return o=b,_;const $=b.key==null?C:b.key,G=r.get($);return b.el&&(b=Kn(b),_.shapeFlag&128&&(_.ssContent=b)),E=$,G?(b.el=G.el,b.component=G.component,b.transition&&Zr(b,b.transition),b.shapeFlag|=512,i.delete($),i.add($)):(i.add($),M&&i.size>parseInt(M,10)&&y(i.values().next().value)),b.shapeFlag|=256,o=b,Hv(_.type)?_:b}}},gS=pS;function Xi(t,e){return ee(t)?t.some(n=>Xi(n,e)):We(t)?t.split(",").includes(e):dI(t)?t.test(e):!1}function Qv(t,e){Xv(t,"a",e)}function Yv(t,e){Xv(t,"da",e)}function Xv(t,e,n=qe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Tl(e,s,n),n){let r=n.parent;for(;r&&r.parent;)na(r.parent.vnode)&&mS(s,e,n,r),r=r.parent}}function mS(t,e,n,s){const r=Tl(e,t,s,!0);Jv(()=>{Qf(s[e],r)},n)}function Eu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function bu(t){return t.shapeFlag&128?t.ssContent:t}function Tl(t,e,n=qe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;vi(),ks(n);const a=Jt(e,n,t,o);return vs(),wi(),a});return s?r.unshift(i):r.push(i),i}}const Jn=t=>(e,n=qe)=>(!si||t==="sp")&&Tl(t,(...s)=>e(...s),n),yS=Jn("bm"),gd=Jn("m"),_S=Jn("bu"),md=Jn("u"),Cl=Jn("bum"),Jv=Jn("um"),vS=Jn("sp"),wS=Jn("rtg"),ES=Jn("rtc");function Zv(t,e=qe){Tl("ec",t,e)}function uj(t,e){const n=ut;if(n===null)return t;const s=Sl(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Le]=e[i];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&Ks(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function wn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(vi(),Jt(c,n,8,[t.el,a,t,e]),wi())}}const yd="components",bS="directives";function hj(t,e){return _d(yd,t,!0,e)||t}const ew=Symbol();function fj(t){return We(t)?_d(yd,t,!1)||t:t||ew}function dj(t){return _d(bS,t)}function _d(t,e,n=!0,s=!1){const r=ut||qe;if(r){const i=r.type;if(t===yd){const a=kh(i,!1);if(a&&(a===e||a===An(e)||a===ea(An(e))))return i}const o=$g(r[t]||i[t],e)||$g(r.appContext[t],e);return!o&&s?i:o}}function $g(t,e){return t&&(t[e]||t[An(e)]||t[ea(An(e))])}function pj(t,e,n,s){let r;const i=n&&n[s];if(ee(t)||We(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if($e(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function gj(t,e,n={},s,r){if(ut.isCE||ut.parent&&Js(ut.parent)&&ut.parent.isCE)return e!=="default"&&(n.name=e),Ce("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),ds();const o=i&&tw(i(n)),a=Pr(Rt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function tw(t){return t.some(e=>ni(e)?!(e.type===Dt||e.type===Rt&&!tw(e.children)):!0)?t:null}function mj(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:uc(s)]=t[s];return n}const Eh=t=>t?yw(t)?Sl(t)||t.proxy:Eh(t.parent):null,io=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Eh(t.parent),$root:t=>Eh(t.root),$emit:t=>t.emit,$options:t=>vd(t),$forceUpdate:t=>t.f||(t.f=()=>wl(t.update)),$nextTick:t=>t.n||(t.n=Ds.bind(t.proxy)),$watch:t=>fS.bind(t)}),Tu=(t,e)=>t!==Le&&!t.__isScriptSetup&&ye(t,e),TS={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Tu(s,e))return o[e]=1,s[e];if(r!==Le&&ye(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ye(l,e))return o[e]=3,i[e];if(n!==Le&&ye(n,e))return o[e]=4,n[e];bh&&(o[e]=0)}}const u=io[e];let h,f;if(u)return e==="$attrs"&&Ut(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Le&&ye(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ye(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Tu(r,e)?(r[e]=n,!0):s!==Le&&ye(s,e)?(s[e]=n,!0):ye(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Le&&ye(t,o)||Tu(e,o)||(a=i[0])&&ye(a,o)||ye(s,o)||ye(io,o)||ye(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ye(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let bh=!0;function CS(t){const e=vd(t),n=t.proxy,s=t.ctx;bh=!1,e.beforeCreate&&Bg(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:y,deactivated:E,beforeDestroy:v,beforeUnmount:g,destroyed:_,unmounted:b,render:C,renderTracked:A,renderTriggered:S,errorCaptured:T,serverPrefetch:M,expose:$,inheritAttrs:G,components:V,directives:se,filters:j}=e;if(l&&IS(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Pe in o){const Ae=o[Pe];ie(Ae)&&(s[Pe]=Ae.bind(n))}if(r){const Pe=r.call(n,n);$e(Pe)&&(t.data=Ct(Pe))}if(bh=!0,i)for(const Pe in i){const Ae=i[Pe],tn=ie(Ae)?Ae.bind(n,n):ie(Ae.get)?Ae.get.bind(n,n):un,Ls=!ie(Ae)&&ie(Ae.set)?Ae.set.bind(n):un,nn=Ee({get:tn,set:Ls});Object.defineProperty(s,Pe,{enumerable:!0,configurable:!0,get:()=>nn.value,set:Mt=>nn.value=Mt})}if(a)for(const Pe in a)nw(a[Pe],s,n,Pe);if(c){const Pe=ie(c)?c.call(n):c;Reflect.ownKeys(Pe).forEach(Ae=>{_s(Ae,Pe[Ae])})}u&&Bg(u,t,"c");function ge(Pe,Ae){ee(Ae)?Ae.forEach(tn=>Pe(tn.bind(n))):Ae&&Pe(Ae.bind(n))}if(ge(yS,h),ge(gd,f),ge(_S,d),ge(md,p),ge(Qv,y),ge(Yv,E),ge(Zv,T),ge(ES,A),ge(wS,S),ge(Cl,g),ge(Jv,b),ge(vS,M),ee($))if($.length){const Pe=t.exposed||(t.exposed={});$.forEach(Ae=>{Object.defineProperty(Pe,Ae,{get:()=>n[Ae],set:tn=>n[Ae]=tn})})}else t.exposed||(t.exposed={});C&&t.render===un&&(t.render=C),G!=null&&(t.inheritAttrs=G),V&&(t.components=V),se&&(t.directives=se)}function IS(t,e,n=un,s=!1){ee(t)&&(t=Th(t));for(const r in t){const i=t[r];let o;$e(i)?"default"in i?o=Ke(i.from||r,i.default,!0):o=Ke(i.from||r):o=Ke(i),Ue(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Bg(t,e,n){Jt(ee(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function nw(t,e,n,s){const r=s.includes(".")?qv(n,s):()=>n[s];if(We(t)){const i=e[t];ie(i)&&Zt(r,i)}else if(ie(t))Zt(r,t.bind(n));else if($e(t))if(ee(t))t.forEach(i=>nw(i,e,n,s));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&Zt(r,i,t)}}function vd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Sc(c,l,o,!0)),Sc(c,e,o)),$e(e)&&i.set(e,c),c}function Sc(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Sc(t,i,n,!0),r&&r.forEach(o=>Sc(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=SS[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const SS={data:Vg,props:Bs,emits:Bs,methods:Bs,computed:Bs,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:Bs,directives:Bs,watch:AS,provide:Vg,inject:kS};function Vg(t,e){return e?t?function(){return it(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function kS(t,e){return Bs(Th(t),Th(e))}function Th(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function Bs(t,e){return t?it(it(Object.create(null),t),e):e}function AS(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const s in e)n[s]=At(t[s],e[s]);return n}function RS(t,e,n,s=!1){const r={},i={};Ec(i,Il,1),t.propsDefaults=Object.create(null),sw(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:KI(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function NS(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=he(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(El(t.emitsOptions,f))continue;const d=e[f];if(c)if(ye(i,f))d!==i[f]&&(i[f]=d,l=!0);else{const p=An(f);r[p]=Ch(c,a,p,d,t,!1)}else d!==i[f]&&(i[f]=d,l=!0)}}}else{sw(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ye(e,h)&&((u=_i(h))===h||!ye(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Ch(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ye(e,h))&&(delete i[h],l=!0)}l&&qn(t,"set","$attrs")}function sw(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ro(c))continue;const l=e[c];let u;r&&ye(r,u=An(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:El(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=he(n),l=a||Le;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ch(r,c,h,l[h],t,!ye(l,h))}}return o}function Ch(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ye(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&ie(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(ks(r),s=l[n]=c.call(null,e),vs())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===_i(n))&&(s=!0))}return s}function rw(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ie(t)){const u=h=>{c=!0;const[f,d]=rw(h,e,!0);it(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return $e(t)&&s.set(t,$r),$r;if(ee(i))for(let u=0;u<i.length;u++){const h=An(i[u]);Hg(h)&&(o[h]=Le)}else if(i)for(const u in i){const h=An(u);if(Hg(h)){const f=i[u],d=o[h]=ee(f)||ie(f)?{type:f}:Object.assign({},f);if(d){const p=qg(Boolean,d.type),y=qg(String,d.type);d[0]=p>-1,d[1]=y<0||p<y,(p>-1||ye(d,"default"))&&a.push(h)}}}const l=[o,a];return $e(t)&&s.set(t,l),l}function Hg(t){return t[0]!=="$"}function jg(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Wg(t,e){return jg(t)===jg(e)}function qg(t,e){return ee(e)?e.findIndex(n=>Wg(n,t)):ie(e)&&Wg(e,t)?0:-1}const iw=t=>t[0]==="_"||t==="$stable",wd=t=>ee(t)?t.map(Qt):[Qt(t)],OS=(t,e,n)=>{if(e._n)return e;const s=Vv((...r)=>wd(e(...r)),n);return s._c=!1,s},ow=(t,e,n)=>{const s=t._ctx;for(const r in t){if(iw(r))continue;const i=t[r];if(ie(i))e[r]=OS(r,i,s);else if(i!=null){const o=wd(i);e[r]=()=>o}}},aw=(t,e)=>{const n=wd(e);t.slots.default=()=>n},PS=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=he(e),Ec(e,"_",n)):ow(e,t.slots={})}else t.slots={},e&&aw(t,e);Ec(t.slots,Il,1)},DS=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Le;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(it(r,e),!n&&a===1&&delete r._):(i=!e.$stable,ow(e,r)),o=e}else e&&(aw(t,e),o={default:1});if(i)for(const a in r)!iw(a)&&!(a in o)&&delete r[a]};function cw(){return{app:null,config:{isNativeTag:uI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xS=0;function MS(t,e){return function(s,r=null){ie(s)||(s=Object.assign({},s)),r!=null&&!$e(r)&&(r=null);const i=cw(),o=new Set;let a=!1;const c=i.app={_uid:xS++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Td,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ie(l.install)?(o.add(l),l.install(c,...u)):ie(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Ce(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Sl(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function kc(t,e,n,s,r=!1){if(ee(t)){t.forEach((f,d)=>kc(f,e&&(ee(e)?e[d]:e),n,s,r));return}if(Js(s)&&!r)return;const i=s.shapeFlag&4?Sl(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Le?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(We(l)?(u[l]=null,ye(h,l)&&(h[l]=null)):Ue(l)&&(l.value=null)),ie(c))ys(c,a,12,[o,u]);else{const f=We(c),d=Ue(c);if(f||d){const p=()=>{if(t.f){const y=f?ye(h,c)?h[c]:u[c]:c.value;r?ee(y)&&Qf(y,i):ee(y)?y.includes(i)||y.push(i):f?(u[c]=[i],ye(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ye(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,at(p,n)):p()}}}let ts=!1;const $a=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Ba=t=>t.nodeType===8;function LS(t){const{mt:e,p:n,o:{patchProp:s,createText:r,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:l}}=t,u=(v,g)=>{if(!g.hasChildNodes()){n(null,v,g),Cc(),g._vnode=v;return}ts=!1,h(g.firstChild,v,null,null,null),Cc(),g._vnode=v,ts&&console.error("Hydration completed but contains mismatches.")},h=(v,g,_,b,C,A=!1)=>{const S=Ba(v)&&v.data==="[",T=()=>y(v,g,_,b,C,S),{type:M,ref:$,shapeFlag:G,patchFlag:V}=g;let se=v.nodeType;g.el=v,V===-2&&(A=!1,g.dynamicChildren=null);let j=null;switch(M){case ei:se!==3?g.children===""?(c(g.el=r(""),o(v),v),j=v):j=T():(v.data!==g.children&&(ts=!0,v.data=g.children),j=i(v));break;case Dt:se!==8||S?j=T():j=i(v);break;case hc:if(S&&(v=i(v),se=v.nodeType),se===1||se===3){j=v;const Ie=!g.children.length;for(let ge=0;ge<g.staticCount;ge++)Ie&&(g.children+=j.nodeType===1?j.outerHTML:j.data),ge===g.staticCount-1&&(g.anchor=j),j=i(j);return S?i(j):j}else T();break;case Rt:S?j=p(v,g,_,b,C,A):j=T();break;default:if(G&1)se!==1||g.type.toLowerCase()!==v.tagName.toLowerCase()?j=T():j=f(v,g,_,b,C,A);else if(G&6){g.slotScopeIds=C;const Ie=o(v);if(e(g,Ie,null,_,b,$a(Ie),A),j=S?E(v):i(v),j&&Ba(j)&&j.data==="teleport end"&&(j=i(j)),Js(g)){let ge;S?(ge=Ce(Rt),ge.anchor=j?j.previousSibling:Ie.lastChild):ge=v.nodeType===3?gw(""):Ce("div"),ge.el=v,g.component.subTree=ge}}else G&64?se!==8?j=T():j=g.type.hydrate(v,g,_,b,C,A,t,d):G&128&&(j=g.type.hydrate(v,g,_,b,$a(o(v)),C,A,t,h))}return $!=null&&kc($,null,b,g),j},f=(v,g,_,b,C,A)=>{A=A||!!g.dynamicChildren;const{type:S,props:T,patchFlag:M,shapeFlag:$,dirs:G}=g,V=S==="input"&&G||S==="option";if(V||M!==-1){if(G&&wn(g,null,_,"created"),T)if(V||!A||M&48)for(const j in T)(V&&j.endsWith("value")||Jo(j)&&!ro(j))&&s(v,j,null,T[j],!1,void 0,_);else T.onClick&&s(v,"onClick",null,T.onClick,!1,void 0,_);let se;if((se=T&&T.onVnodeBeforeMount)&&Lt(se,_,g),G&&wn(g,null,_,"beforeMount"),((se=T&&T.onVnodeMounted)||G)&&Wv(()=>{se&&Lt(se,_,g),G&&wn(g,null,_,"mounted")},b),$&16&&!(T&&(T.innerHTML||T.textContent))){let j=d(v.firstChild,g,v,_,b,C,A);for(;j;){ts=!0;const Ie=j;j=j.nextSibling,a(Ie)}}else $&8&&v.textContent!==g.children&&(ts=!0,v.textContent=g.children)}return v.nextSibling},d=(v,g,_,b,C,A,S)=>{S=S||!!g.dynamicChildren;const T=g.children,M=T.length;for(let $=0;$<M;$++){const G=S?T[$]:T[$]=Qt(T[$]);if(v)v=h(v,G,b,C,A,S);else{if(G.type===ei&&!G.children)continue;ts=!0,n(null,G,_,null,b,C,$a(_),A)}}return v},p=(v,g,_,b,C,A)=>{const{slotScopeIds:S}=g;S&&(C=C?C.concat(S):S);const T=o(v),M=d(i(v),g,T,_,b,C,A);return M&&Ba(M)&&M.data==="]"?i(g.anchor=M):(ts=!0,c(g.anchor=l("]"),T,M),M)},y=(v,g,_,b,C,A)=>{if(ts=!0,g.el=null,A){const M=E(v);for(;;){const $=i(v);if($&&$!==M)a($);else break}}const S=i(v),T=o(v);return a(v),n(null,g,T,S,_,b,$a(T),C),S},E=v=>{let g=0;for(;v;)if(v=i(v),v&&Ba(v)&&(v.data==="["&&g++,v.data==="]")){if(g===0)return i(v);g--}return v};return[u,h]}const at=Wv;function FS(t){return lw(t)}function US(t){return lw(t,LS)}function lw(t,e){const n=yI();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=un,insertStaticContent:p}=t,y=(m,w,I,k=null,N=null,L=null,H=!1,x=null,F=!!w.dynamicChildren)=>{if(m===w)return;m&&!on(m,w)&&(k=B(m),Mt(m,N,L,!0),m=null),w.patchFlag===-2&&(F=!1,w.dynamicChildren=null);const{type:O,ref:X,shapeFlag:q}=w;switch(O){case ei:E(m,w,I,k);break;case Dt:v(m,w,I,k);break;case hc:m==null&&g(w,I,k,H);break;case Rt:V(m,w,I,k,N,L,H,x,F);break;default:q&1?C(m,w,I,k,N,L,H,x,F):q&6?se(m,w,I,k,N,L,H,x,F):(q&64||q&128)&&O.process(m,w,I,k,N,L,H,x,F,me)}X!=null&&N&&kc(X,m&&m.ref,L,w||m,!w)},E=(m,w,I,k)=>{if(m==null)s(w.el=a(w.children),I,k);else{const N=w.el=m.el;w.children!==m.children&&l(N,w.children)}},v=(m,w,I,k)=>{m==null?s(w.el=c(w.children||""),I,k):w.el=m.el},g=(m,w,I,k)=>{[m.el,m.anchor]=p(m.children,w,I,k,m.el,m.anchor)},_=({el:m,anchor:w},I,k)=>{let N;for(;m&&m!==w;)N=f(m),s(m,I,k),m=N;s(w,I,k)},b=({el:m,anchor:w})=>{let I;for(;m&&m!==w;)I=f(m),r(m),m=I;r(w)},C=(m,w,I,k,N,L,H,x,F)=>{H=H||w.type==="svg",m==null?A(w,I,k,N,L,H,x,F):M(m,w,N,L,H,x,F)},A=(m,w,I,k,N,L,H,x)=>{let F,O;const{type:X,props:q,shapeFlag:J,transition:re,dirs:le}=m;if(F=m.el=o(m.type,L,q&&q.is,q),J&8?u(F,m.children):J&16&&T(m.children,F,null,k,N,L&&X!=="foreignObject",H,x),le&&wn(m,null,k,"created"),S(F,m,m.scopeId,H,k),q){for(const Re in q)Re!=="value"&&!ro(Re)&&i(F,Re,null,q[Re],L,m.children,k,N,W);"value"in q&&i(F,"value",null,q.value),(O=q.onVnodeBeforeMount)&&Lt(O,k,m)}le&&wn(m,null,k,"beforeMount");const De=(!N||N&&!N.pendingBranch)&&re&&!re.persisted;De&&re.beforeEnter(F),s(F,w,I),((O=q&&q.onVnodeMounted)||De||le)&&at(()=>{O&&Lt(O,k,m),De&&re.enter(F),le&&wn(m,null,k,"mounted")},N)},S=(m,w,I,k,N)=>{if(I&&d(m,I),k)for(let L=0;L<k.length;L++)d(m,k[L]);if(N){let L=N.subTree;if(w===L){const H=N.vnode;S(m,H,H.scopeId,H.slotScopeIds,N.parent)}}},T=(m,w,I,k,N,L,H,x,F=0)=>{for(let O=F;O<m.length;O++){const X=m[O]=x?as(m[O]):Qt(m[O]);y(null,X,w,I,k,N,L,H,x)}},M=(m,w,I,k,N,L,H)=>{const x=w.el=m.el;let{patchFlag:F,dynamicChildren:O,dirs:X}=w;F|=m.patchFlag&16;const q=m.props||Le,J=w.props||Le;let re;I&&Fs(I,!1),(re=J.onVnodeBeforeUpdate)&&Lt(re,I,w,m),X&&wn(w,m,I,"beforeUpdate"),I&&Fs(I,!0);const le=N&&w.type!=="foreignObject";if(O?$(m.dynamicChildren,O,x,I,k,le,L):H||Ae(m,w,x,null,I,k,le,L,!1),F>0){if(F&16)G(x,w,q,J,I,k,N);else if(F&2&&q.class!==J.class&&i(x,"class",null,J.class,N),F&4&&i(x,"style",q.style,J.style,N),F&8){const De=w.dynamicProps;for(let Re=0;Re<De.length;Re++){const Ge=De[Re],sn=q[Ge],br=J[Ge];(br!==sn||Ge==="value")&&i(x,Ge,sn,br,N,m.children,I,k,W)}}F&1&&m.children!==w.children&&u(x,w.children)}else!H&&O==null&&G(x,w,q,J,I,k,N);((re=J.onVnodeUpdated)||X)&&at(()=>{re&&Lt(re,I,w,m),X&&wn(w,m,I,"updated")},k)},$=(m,w,I,k,N,L,H)=>{for(let x=0;x<w.length;x++){const F=m[x],O=w[x],X=F.el&&(F.type===Rt||!on(F,O)||F.shapeFlag&70)?h(F.el):I;y(F,O,X,null,k,N,L,H,!0)}},G=(m,w,I,k,N,L,H)=>{if(I!==k){if(I!==Le)for(const x in I)!ro(x)&&!(x in k)&&i(m,x,I[x],null,H,w.children,N,L,W);for(const x in k){if(ro(x))continue;const F=k[x],O=I[x];F!==O&&x!=="value"&&i(m,x,O,F,H,w.children,N,L,W)}"value"in k&&i(m,"value",I.value,k.value)}},V=(m,w,I,k,N,L,H,x,F)=>{const O=w.el=m?m.el:a(""),X=w.anchor=m?m.anchor:a("");let{patchFlag:q,dynamicChildren:J,slotScopeIds:re}=w;re&&(x=x?x.concat(re):re),m==null?(s(O,I,k),s(X,I,k),T(w.children,I,X,N,L,H,x,F)):q>0&&q&64&&J&&m.dynamicChildren?($(m.dynamicChildren,J,I,N,L,H,x),(w.key!=null||N&&w===N.subTree)&&Ed(m,w,!0)):Ae(m,w,I,X,N,L,H,x,F)},se=(m,w,I,k,N,L,H,x,F)=>{w.slotScopeIds=x,m==null?w.shapeFlag&512?N.ctx.activate(w,I,k,H,F):j(w,I,k,N,L,H,F):Ie(m,w,F)},j=(m,w,I,k,N,L,H)=>{const x=m.component=GS(m,k,N);if(na(m)&&(x.ctx.renderer=me),QS(x),x.asyncDep){if(N&&N.registerDep(x,ge),!m.el){const F=x.subTree=Ce(Dt);v(null,F,w,I)}return}ge(x,m,w,I,N,L,H)},Ie=(m,w,I)=>{const k=w.component=m.component;if(oS(m,w,I))if(k.asyncDep&&!k.asyncResolved){Pe(k,w,I);return}else k.next=w,eS(k.update),k.update();else w.el=m.el,k.vnode=w},ge=(m,w,I,k,N,L,H)=>{const x=()=>{if(m.isMounted){let{next:X,bu:q,u:J,parent:re,vnode:le}=m,De=X,Re;Fs(m,!1),X?(X.el=le.el,Pe(m,X,H)):X=le,q&&Vr(q),(Re=X.props&&X.props.onVnodeBeforeUpdate)&&Lt(Re,re,X,le),Fs(m,!0);const Ge=_u(m),sn=m.subTree;m.subTree=Ge,y(sn,Ge,h(sn.el),B(sn),m,N,L),X.el=Ge.el,De===null&&hd(m,Ge.el),J&&at(J,N),(Re=X.props&&X.props.onVnodeUpdated)&&at(()=>Lt(Re,re,X,le),N)}else{let X;const{el:q,props:J}=w,{bm:re,m:le,parent:De}=m,Re=Js(w);if(Fs(m,!1),re&&Vr(re),!Re&&(X=J&&J.onVnodeBeforeMount)&&Lt(X,De,w),Fs(m,!0),q&&ce){const Ge=()=>{m.subTree=_u(m),ce(q,m.subTree,m,N,null)};Re?w.type.__asyncLoader().then(()=>!m.isUnmounted&&Ge()):Ge()}else{const Ge=m.subTree=_u(m);y(null,Ge,I,k,m,N,L),w.el=Ge.el}if(le&&at(le,N),!Re&&(X=J&&J.onVnodeMounted)){const Ge=w;at(()=>Lt(X,De,Ge),N)}(w.shapeFlag&256||De&&Js(De.vnode)&&De.vnode.shapeFlag&256)&&m.a&&at(m.a,N),m.isMounted=!0,w=I=k=null}},F=m.effect=new nd(x,()=>wl(O),m.scope),O=m.update=()=>F.run();O.id=m.uid,Fs(m,!0),O()},Pe=(m,w,I)=>{w.component=m;const k=m.vnode.props;m.vnode=w,m.next=null,NS(m,w.props,k,I),DS(m,w.children,I),vi(),Mg(),wi()},Ae=(m,w,I,k,N,L,H,x,F=!1)=>{const O=m&&m.children,X=m?m.shapeFlag:0,q=w.children,{patchFlag:J,shapeFlag:re}=w;if(J>0){if(J&128){Ls(O,q,I,k,N,L,H,x,F);return}else if(J&256){tn(O,q,I,k,N,L,H,x,F);return}}re&8?(X&16&&W(O,N,L),q!==O&&u(I,q)):X&16?re&16?Ls(O,q,I,k,N,L,H,x,F):W(O,N,L,!0):(X&8&&u(I,""),re&16&&T(q,I,k,N,L,H,x,F))},tn=(m,w,I,k,N,L,H,x,F)=>{m=m||$r,w=w||$r;const O=m.length,X=w.length,q=Math.min(O,X);let J;for(J=0;J<q;J++){const re=w[J]=F?as(w[J]):Qt(w[J]);y(m[J],re,I,null,N,L,H,x,F)}O>X?W(m,N,L,!0,!1,q):T(w,I,k,N,L,H,x,F,q)},Ls=(m,w,I,k,N,L,H,x,F)=>{let O=0;const X=w.length;let q=m.length-1,J=X-1;for(;O<=q&&O<=J;){const re=m[O],le=w[O]=F?as(w[O]):Qt(w[O]);if(on(re,le))y(re,le,I,null,N,L,H,x,F);else break;O++}for(;O<=q&&O<=J;){const re=m[q],le=w[J]=F?as(w[J]):Qt(w[J]);if(on(re,le))y(re,le,I,null,N,L,H,x,F);else break;q--,J--}if(O>q){if(O<=J){const re=J+1,le=re<X?w[re].el:k;for(;O<=J;)y(null,w[O]=F?as(w[O]):Qt(w[O]),I,le,N,L,H,x,F),O++}}else if(O>J)for(;O<=q;)Mt(m[O],N,L,!0),O++;else{const re=O,le=O,De=new Map;for(O=le;O<=J;O++){const Bt=w[O]=F?as(w[O]):Qt(w[O]);Bt.key!=null&&De.set(Bt.key,O)}let Re,Ge=0;const sn=J-le+1;let br=!1,Cg=0;const Ui=new Array(sn);for(O=0;O<sn;O++)Ui[O]=0;for(O=re;O<=q;O++){const Bt=m[O];if(Ge>=sn){Mt(Bt,N,L,!0);continue}let vn;if(Bt.key!=null)vn=De.get(Bt.key);else for(Re=le;Re<=J;Re++)if(Ui[Re-le]===0&&on(Bt,w[Re])){vn=Re;break}vn===void 0?Mt(Bt,N,L,!0):(Ui[vn-le]=O+1,vn>=Cg?Cg=vn:br=!0,y(Bt,w[vn],I,null,N,L,H,x,F),Ge++)}const Ig=br?$S(Ui):$r;for(Re=Ig.length-1,O=sn-1;O>=0;O--){const Bt=le+O,vn=w[Bt],Sg=Bt+1<X?w[Bt+1].el:k;Ui[O]===0?y(null,vn,I,Sg,N,L,H,x,F):br&&(Re<0||O!==Ig[Re]?nn(vn,I,Sg,2):Re--)}}},nn=(m,w,I,k,N=null)=>{const{el:L,type:H,transition:x,children:F,shapeFlag:O}=m;if(O&6){nn(m.component.subTree,w,I,k);return}if(O&128){m.suspense.move(w,I,k);return}if(O&64){H.move(m,w,I,me);return}if(H===Rt){s(L,w,I);for(let q=0;q<F.length;q++)nn(F[q],w,I,k);s(m.anchor,w,I);return}if(H===hc){_(m,w,I);return}if(k!==2&&O&1&&x)if(k===0)x.beforeEnter(L),s(L,w,I),at(()=>x.enter(L),N);else{const{leave:q,delayLeave:J,afterLeave:re}=x,le=()=>s(L,w,I),De=()=>{q(L,()=>{le(),re&&re()})};J?J(L,le,De):De()}else s(L,w,I)},Mt=(m,w,I,k=!1,N=!1)=>{const{type:L,props:H,ref:x,children:F,dynamicChildren:O,shapeFlag:X,patchFlag:q,dirs:J}=m;if(x!=null&&kc(x,null,I,m,!0),X&256){w.ctx.deactivate(m);return}const re=X&1&&J,le=!Js(m);let De;if(le&&(De=H&&H.onVnodeBeforeUnmount)&&Lt(De,w,m),X&6)R(m.component,I,k);else{if(X&128){m.suspense.unmount(I,k);return}re&&wn(m,null,w,"beforeUnmount"),X&64?m.type.remove(m,w,I,N,me,k):O&&(L!==Rt||q>0&&q&64)?W(O,w,I,!1,!0):(L===Rt&&q&384||!N&&X&16)&&W(F,w,I),k&&Er(m)}(le&&(De=H&&H.onVnodeUnmounted)||re)&&at(()=>{De&&Lt(De,w,m),re&&wn(m,null,w,"unmounted")},I)},Er=m=>{const{type:w,el:I,anchor:k,transition:N}=m;if(w===Rt){Pa(I,k);return}if(w===hc){b(m);return}const L=()=>{r(I),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(m.shapeFlag&1&&N&&!N.persisted){const{leave:H,delayLeave:x}=N,F=()=>H(I,L);x?x(m.el,L,F):F()}else L()},Pa=(m,w)=>{let I;for(;m!==w;)I=f(m),r(m),m=I;r(w)},R=(m,w,I)=>{const{bum:k,scope:N,update:L,subTree:H,um:x}=m;k&&Vr(k),N.stop(),L&&(L.active=!1,Mt(H,m,w,I)),x&&at(x,w),at(()=>{m.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},W=(m,w,I,k=!1,N=!1,L=0)=>{for(let H=L;H<m.length;H++)Mt(m[H],w,I,k,N)},B=m=>m.shapeFlag&6?B(m.component.subTree):m.shapeFlag&128?m.suspense.next():f(m.anchor||m.el),Y=(m,w,I)=>{m==null?w._vnode&&Mt(w._vnode,null,null,!0):y(w._vnode||null,m,w,null,null,null,I),Mg(),Cc(),w._vnode=m},me={p:y,um:Mt,m:nn,r:Er,mt:j,mc:T,pc:Ae,pbc:$,n:B,o:t};let He,ce;return e&&([He,ce]=e(me)),{render:Y,hydrate:He,createApp:MS(Y,He)}}function Fs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ed(t,e,n=!1){const s=t.children,r=e.children;if(ee(s)&&ee(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=as(r[i]),a.el=o.el),n||Ed(o,a)),a.type===ei&&(a.el=o.el)}}function $S(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const BS=t=>t.__isTeleport,oo=t=>t&&(t.disabled||t.disabled===""),Kg=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Ih=(t,e)=>{const n=t&&t.to;return We(n)?e?e(n):null:n},VS={__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,l){const{mc:u,pc:h,pbc:f,o:{insert:d,querySelector:p,createText:y,createComment:E}}=l,v=oo(e.props);let{shapeFlag:g,children:_,dynamicChildren:b}=e;if(t==null){const C=e.el=y(""),A=e.anchor=y("");d(C,n,s),d(A,n,s);const S=e.target=Ih(e.props,p),T=e.targetAnchor=y("");S&&(d(T,S),o=o||Kg(S));const M=($,G)=>{g&16&&u(_,$,G,r,i,o,a,c)};v?M(n,A):S&&M(S,T)}else{e.el=t.el;const C=e.anchor=t.anchor,A=e.target=t.target,S=e.targetAnchor=t.targetAnchor,T=oo(t.props),M=T?n:A,$=T?C:S;if(o=o||Kg(A),b?(f(t.dynamicChildren,b,M,r,i,o,a),Ed(t,e,!0)):c||h(t,e,M,$,r,i,o,a,!1),v)T||Va(e,n,C,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const G=e.target=Ih(e.props,p);G&&Va(e,G,null,l,0)}else T&&Va(e,A,S,l,1)}uw(e)},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:h,props:f}=t;if(h&&i(u),(o||!oo(f))&&(i(l),a&16))for(let d=0;d<c.length;d++){const p=c[d];r(p,e,n,!0,!!p.dynamicChildren)}},move:Va,hydrate:HS};function Va(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,h=i===2;if(h&&s(o,e,n),(!h||oo(u))&&c&16)for(let f=0;f<l.length;f++)r(l[f],e,n,2);h&&s(a,e,n)}function HS(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=Ih(e.props,c);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(oo(e.props))e.anchor=l(o(t),e,a(t),n,s,r,i),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(h,e,u,n,s,r,i)}uw(e)}return e.anchor&&o(e.anchor)}const yj=VS;function uw(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Rt=Symbol(void 0),ei=Symbol(void 0),Dt=Symbol(void 0),hc=Symbol(void 0),ao=[];let Yt=null;function ds(t=!1){ao.push(Yt=t?null:[])}function hw(){ao.pop(),Yt=ao[ao.length-1]||null}let ti=1;function zg(t){ti+=t}function fw(t){return t.dynamicChildren=ti>0?Yt||$r:null,hw(),ti>0&&Yt&&Yt.push(t),t}function jS(t,e,n,s,r,i){return fw(pw(t,e,n,s,r,i,!0))}function Pr(t,e,n,s,r){return fw(Ce(t,e,n,s,r,!0))}function ni(t){return t?t.__v_isVNode===!0:!1}function on(t,e){return t.type===e.type&&t.key===e.key}const Il="__vInternal",dw=({key:t})=>t??null,fc=({ref:t,ref_key:e,ref_for:n})=>t!=null?We(t)||Ue(t)||ie(t)?{i:ut,r:t,k:e,f:!!n}:t:null;function pw(t,e=null,n=null,s=0,r=null,i=t===Rt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&dw(e),ref:e&&fc(e),scopeId:bl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ut};return a?(bd(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=We(n)?8:16),ti>0&&!o&&Yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Yt.push(c),c}const Ce=WS;function WS(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===ew)&&(t=Dt),ni(t)){const a=Kn(t,e,!0);return n&&bd(a,n),ti>0&&!i&&Yt&&(a.shapeFlag&6?Yt[Yt.indexOf(t)]=a:Yt.push(a)),a.patchFlag|=-2,a}if(ZS(t)&&(t=t.__vccOpts),e){e=qS(e);let{class:a,style:c}=e;a&&!We(a)&&(e.class=zf(a)),$e(c)&&(Nv(c)&&!ee(c)&&(c=it({},c)),e.style=Kf(c))}const o=We(t)?1:Hv(t)?128:BS(t)?64:$e(t)?4:ie(t)?2:0;return pw(t,e,n,s,r,o,i,!0)}function qS(t){return t?Nv(t)||Il in t?it({},t):t:null}function Kn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?mw(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&dw(a),ref:e&&e.ref?n&&r?ee(r)?r.concat(fc(e)):[r,fc(e)]:fc(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Rt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kn(t.ssContent),ssFallback:t.ssFallback&&Kn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function gw(t=" ",e=0){return Ce(ei,null,t,e)}function _j(t="",e=!1){return e?(ds(),Pr(Dt,null,t)):Ce(Dt,null,t)}function Qt(t){return t==null||typeof t=="boolean"?Ce(Dt):ee(t)?Ce(Rt,null,t.slice()):typeof t=="object"?as(t):Ce(ei,null,String(t))}function as(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Kn(t)}function bd(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),bd(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Il in e)?e._ctx=ut:r===3&&ut&&(ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:ut},n=32):(e=String(e),s&64?(n=16,e=[gw(e)]):n=8);t.children=e,t.shapeFlag|=n}function mw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=zf([e.class,s.class]));else if(r==="style")e.style=Kf([e.style,s.style]);else if(Jo(r)){const i=e[r],o=s[r];o&&i!==o&&!(ee(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Lt(t,e,n,s=null){Jt(t,e,7,[n,s])}const KS=cw();let zS=0;function GS(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||KS,i={uid:zS++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new _v(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rw(s,r),emitsOptions:Bv(s,r),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:s.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=nS.bind(null,i),t.ce&&t.ce(i),i}let qe=null;const $t=()=>qe||ut,ks=t=>{qe=t,t.scope.on()},vs=()=>{qe&&qe.scope.off(),qe=null};function yw(t){return t.vnode.shapeFlag&4}let si=!1;function QS(t,e=!1){si=e;const{props:n,children:s}=t.vnode,r=yw(t);RS(t,n,r,e),PS(t,s);const i=r?YS(t,e):void 0;return si=!1,i}function YS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Jr(new Proxy(t.ctx,TS));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?JS(t):null;ks(t),vi();const i=ys(s,t,0,[t.props,r]);if(wi(),vs(),Xf(i)){if(i.then(vs,vs),e)return i.then(o=>{Sh(t,o,e)}).catch(o=>{Ei(o,t,0)});t.asyncDep=i}else Sh(t,i,e)}else _w(t,e)}function Sh(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=xv(e)),_w(t,n)}let Gg;function _w(t,e,n){const s=t.type;if(!t.render){if(!e&&Gg&&!s.render){const r=s.template||vd(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=it(it({isCustomElement:i,delimiters:a},o),c);s.render=Gg(r,l)}}t.render=s.render||un}ks(t),vi(),CS(t),wi(),vs()}function XS(t){return new Proxy(t.attrs,{get(e,n){return Ut(t,"get","$attrs"),e[n]}})}function JS(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=XS(t))},slots:t.slots,emit:t.emit,expose:e}}function Sl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(xv(Jr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in io)return io[n](t)},has(e,n){return n in e||n in io}}))}function kh(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function ZS(t){return ie(t)&&"__vccOpts"in t}const Ee=(t,e)=>XI(t,e,si);function vj(t){const e=$t();let n=t();return vs(),Xf(n)&&(n=n.catch(s=>{throw ks(e),s})),[n,()=>ks(e)]}function hn(t,e,n){const s=arguments.length;return s===2?$e(e)&&!ee(e)?ni(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ni(n)&&(n=[n]),Ce(t,e,n))}const vw=Symbol(""),ek=()=>Ke(vw),Td="3.2.47",tk="http://www.w3.org/2000/svg",Ws=typeof document<"u"?document:null,Qg=Ws&&Ws.createElement("template"),nk={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Ws.createElementNS(tk,t):Ws.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ws.createTextNode(t),createComment:t=>Ws.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ws.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Qg.innerHTML=s?`<svg>${t}</svg>`:t;const a=Qg.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function sk(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function rk(t,e,n){const s=t.style,r=We(n);if(n&&!r){if(e&&!We(e))for(const i in e)n[i]==null&&Ah(s,i,"");for(const i in n)Ah(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Yg=/\s*!important$/;function Ah(t,e,n){if(ee(n))n.forEach(s=>Ah(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ik(t,e);Yg.test(n)?t.setProperty(_i(s),n.replace(Yg,""),"important"):t[s]=n}}const Xg=["Webkit","Moz","ms"],Cu={};function ik(t,e){const n=Cu[e];if(n)return n;let s=An(e);if(s!=="filter"&&s in t)return Cu[e]=s;s=ea(s);for(let r=0;r<Xg.length;r++){const i=Xg[r]+s;if(i in t)return Cu[e]=i}return e}const Jg="http://www.w3.org/1999/xlink";function ok(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Jg,e.slice(6,e.length)):t.setAttributeNS(Jg,e,n);else{const i=lI(e);n==null||i&&!fv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ak(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=fv(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ar(t,e,n,s){t.addEventListener(e,n,s)}function ck(t,e,n,s){t.removeEventListener(e,n,s)}function lk(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=uk(e);if(s){const l=i[e]=dk(s,r);Ar(t,a,l,c)}else o&&(ck(t,a,o,c),i[e]=void 0)}}const Zg=/(?:Once|Passive|Capture)$/;function uk(t){let e;if(Zg.test(t)){e={};let s;for(;s=t.match(Zg);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_i(t.slice(2)),e]}let Iu=0;const hk=Promise.resolve(),fk=()=>Iu||(hk.then(()=>Iu=0),Iu=Date.now());function dk(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Jt(pk(s,n.value),e,5,[s])};return n.value=t,n.attached=fk(),n}function pk(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const em=/^on[a-z]/,gk=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?sk(t,s,r):e==="style"?rk(t,n,s):Jo(e)?Gf(e)||lk(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mk(t,e,s,r))?ak(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ok(t,e,s,r))};function mk(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&em.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||em.test(e)&&We(n)?!1:e in t}const ns="transition",$i="animation",Cd=(t,{slots:e})=>hn(zv,Ew(t),e);Cd.displayName="Transition";const ww={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yk=Cd.props=it({},zv.props,ww),Us=(t,e=[])=>{ee(t)?t.forEach(n=>n(...e)):t&&t(...e)},tm=t=>t?ee(t)?t.some(e=>e.length>1):t.length>1:!1;function Ew(t){const e={};for(const V in t)V in ww||(e[V]=t[V]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=_k(r),y=p&&p[0],E=p&&p[1],{onBeforeEnter:v,onEnter:g,onEnterCancelled:_,onLeave:b,onLeaveCancelled:C,onBeforeAppear:A=v,onAppear:S=g,onAppearCancelled:T=_}=e,M=(V,se,j)=>{is(V,se?u:a),is(V,se?l:o),j&&j()},$=(V,se)=>{V._isLeaving=!1,is(V,h),is(V,d),is(V,f),se&&se()},G=V=>(se,j)=>{const Ie=V?S:g,ge=()=>M(se,V,j);Us(Ie,[se,ge]),nm(()=>{is(se,V?c:i),Fn(se,V?u:a),tm(Ie)||sm(se,s,y,ge)})};return it(e,{onBeforeEnter(V){Us(v,[V]),Fn(V,i),Fn(V,o)},onBeforeAppear(V){Us(A,[V]),Fn(V,c),Fn(V,l)},onEnter:G(!1),onAppear:G(!0),onLeave(V,se){V._isLeaving=!0;const j=()=>$(V,se);Fn(V,h),Tw(),Fn(V,f),nm(()=>{V._isLeaving&&(is(V,h),Fn(V,d),tm(b)||sm(V,s,E,j))}),Us(b,[V,j])},onEnterCancelled(V){M(V,!1),Us(_,[V])},onAppearCancelled(V){M(V,!0),Us(T,[V])},onLeaveCancelled(V){$(V),Us(C,[V])}})}function _k(t){if(t==null)return null;if($e(t))return[Su(t.enter),Su(t.leave)];{const e=Su(t);return[e,e]}}function Su(t){return yv(t)}function Fn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function is(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function nm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let vk=0;function sm(t,e,n,s){const r=t._endId=++vk,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=bw(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=d=>{d.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function bw(t,e){const n=window.getComputedStyle(t),s=p=>(n[p]||"").split(", "),r=s(`${ns}Delay`),i=s(`${ns}Duration`),o=rm(r,i),a=s(`${$i}Delay`),c=s(`${$i}Duration`),l=rm(a,c);let u=null,h=0,f=0;e===ns?o>0&&(u=ns,h=o,f=i.length):e===$i?l>0&&(u=$i,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?ns:$i:null,f=u?u===ns?i.length:c.length:0);const d=u===ns&&/\b(transform|all)(,|$)/.test(s(`${ns}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function rm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>im(n)+im(t[s])))}function im(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Tw(){return document.body.offsetHeight}const Cw=new WeakMap,Iw=new WeakMap,Sw={name:"TransitionGroup",props:it({},yk,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=$t(),s=Kv();let r,i;return md(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Ck(r[0].el,n.vnode.el,o))return;r.forEach(Ek),r.forEach(bk);const a=r.filter(Tk);Tw(),a.forEach(c=>{const l=c.el,u=l.style;Fn(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=l._moveCb=f=>{f&&f.target!==l||(!f||/transform$/.test(f.propertyName))&&(l.removeEventListener("transitionend",h),l._moveCb=null,is(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=he(t),a=Ew(o);let c=o.tag||Rt;r=i,i=e.default?pd(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&Zr(u,No(u,a,s,n))}if(r)for(let l=0;l<r.length;l++){const u=r[l];Zr(u,No(u,a,s,n)),Cw.set(u,u.el.getBoundingClientRect())}return Ce(c,null,i)}}},wk=t=>delete t.mode;Sw.props;const wj=Sw;function Ek(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function bk(t){Iw.set(t,t.el.getBoundingClientRect())}function Tk(t){const e=Cw.get(t),n=Iw.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function Ck(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:i}=bw(s);return r.removeChild(s),i}const om=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ee(e)?n=>Vr(e,n):e};function Ik(t){t.target.composing=!0}function am(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ej={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=om(r);const i=s||r.props&&r.props.type==="number";Ar(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=mh(a)),t._assign(a)}),n&&Ar(t,"change",()=>{t.value=t.value.trim()}),e||(Ar(t,"compositionstart",Ik),Ar(t,"compositionend",am),Ar(t,"change",am))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=om(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&mh(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Sk=["ctrl","shift","alt","meta"],kk={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Sk.some(n=>t[`${n}Key`]&&!e.includes(n))},bj=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=kk[e[r]];if(i&&i(n,e))return}return t(n,...s)},Tj={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Bi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Bi(t,!0),s.enter(t)):s.leave(t,()=>{Bi(t,!1)}):Bi(t,e))},beforeUnmount(t,{value:e}){Bi(t,e)}};function Bi(t,e){t.style.display=e?t._vod:"none"}const kw=it({patchProp:gk},nk);let co,cm=!1;function Ak(){return co||(co=FS(kw))}function Rk(){return co=cm?co:US(kw),cm=!0,co}const Nk=(...t)=>{const e=Ak().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Aw(s);if(!r)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},Ok=(...t)=>{const e=Rk().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Aw(s);if(r)return n(r,!0,r instanceof SVGElement)},e};function Aw(t){return We(t)?document.querySelector(t):t}const Pk=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Dk=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,xk=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function Mk(t,e){if(t!=="__proto__"&&!(t==="constructor"&&e&&typeof e=="object"&&"prototype"in e))return e}function Lk(t,e={}){if(typeof t!="string")return t;const n=t.toLowerCase().trim();if(n==="true")return!0;if(n==="false")return!1;if(n==="null")return null;if(n==="nan")return Number.NaN;if(n==="infinity")return Number.POSITIVE_INFINITY;if(n!=="undefined"){if(!xk.test(t)){if(e.strict)throw new SyntaxError("Invalid JSON");return t}try{return Pk.test(t)||Dk.test(t)?JSON.parse(t,Mk):JSON.parse(t)}catch(s){if(e.strict)throw s;return t}}}const Fk=/#/g,Uk=/&/g,$k=/=/g,Rw=/\+/g,Bk=/%5e/gi,Vk=/%60/gi,Hk=/%7c/gi,jk=/%20/gi;function Wk(t){return encodeURI(""+t).replace(Hk,"|")}function Rh(t){return Wk(typeof t=="string"?t:JSON.stringify(t)).replace(Rw,"%2B").replace(jk,"+").replace(Fk,"%23").replace(Uk,"%26").replace(Vk,"`").replace(Bk,"^")}function ku(t){return Rh(t).replace($k,"%3D")}function Nw(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function qk(t){return Nw(t.replace(Rw," "))}function Kk(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const s=n.match(/([^=]+)=?(.*)/)||[];if(s.length<2)continue;const r=Nw(s[1]);if(r==="__proto__"||r==="constructor")continue;const i=qk(s[2]||"");typeof e[r]<"u"?Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]:e[r]=i}return e}function zk(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${ku(t)}=${Rh(n)}`).join("&"):`${ku(t)}=${Rh(e)}`:ku(t)}function Gk(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>zk(e,t[e])).join("&")}const Qk=/^\w{2,}:([/\\]{1,2})/,Yk=/^\w{2,}:([/\\]{2})?/,Xk=/^([/\\]\s*){2,}[^/\\]/;function sa(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?Qk.test(t):Yk.test(t)||(e.acceptRelative?Xk.test(t):!1)}const Jk=/\/$|\/\?/;function Nh(t="",e=!1){return e?Jk.test(t):t.endsWith("/")}function Ow(t="",e=!1){if(!e)return(Nh(t)?t.slice(0,-1):t)||"/";if(!Nh(t,!0))return t||"/";const[n,...s]=t.split("?");return(n.slice(0,-1)||"/")+(s.length>0?`?${s.join("?")}`:"")}function Zk(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(Nh(t,!0))return t||"/";const[n,...s]=t.split("?");return n+"/"+(s.length>0?`?${s.join("?")}`:"")}function eA(t=""){return t.startsWith("/")}function tA(t=""){return(eA(t)?t.slice(1):t)||"/"}function nA(t,e){if(Pw(e)||sa(t))return t;const n=Ow(e);return t.startsWith(n)?t:kl(n,t)}function lm(t,e){if(Pw(e))return t;const n=Ow(e);if(!t.startsWith(n))return t;const s=t.slice(n.length);return s[0]==="/"?s:"/"+s}function sA(t,e){const n=Al(t),s={...Kk(n.search),...e};return n.search=Gk(s),iA(n)}function Pw(t){return!t||t==="/"}function rA(t){return t&&t!=="/"}function kl(t,...e){let n=t||"";for(const s of e.filter(r=>rA(r)))n=n?Zk(n)+tA(s):s;return n}function Al(t="",e){if(!sa(t,{acceptRelative:!0}))return e?Al(e+t):um(t);const[n="",s,r=""]=(t.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[i="",o=""]=(r.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:a,search:c,hash:l}=um(o.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n,auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:i,pathname:a,search:c,hash:l}}function um(t=""){const[e="",n="",s=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:s}}function iA(t){const e=t.pathname+(t.search?(t.search.startsWith("?")?"":"?")+t.search:"")+t.hash;return t.protocol?t.protocol+"//"+(t.auth?t.auth+"@":"")+t.host+e:e}class oA extends Error{constructor(){super(...arguments),this.name="FetchError"}}function aA(t,e,n){let s="";e&&(s=e.message),t&&n?s=`${s} (${n.status} ${n.statusText} (${t.toString()}))`:t&&(s=`${s} (${t.toString()})`);const r=new oA(s);return Object.defineProperty(r,"request",{get(){return t}}),Object.defineProperty(r,"response",{get(){return n}}),Object.defineProperty(r,"data",{get(){return n&&n._data}}),Object.defineProperty(r,"status",{get(){return n&&n.status}}),Object.defineProperty(r,"statusText",{get(){return n&&n.statusText}}),Object.defineProperty(r,"statusCode",{get(){return n&&n.status}}),Object.defineProperty(r,"statusMessage",{get(){return n&&n.statusText}}),r}const cA=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function hm(t="GET"){return cA.has(t.toUpperCase())}function lA(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const uA=new Set(["image/svg","application/xml","application/xhtml","application/html"]),hA=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function fA(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return hA.test(e)?"json":uA.has(e)||e.startsWith("text/")?"text":"blob"}const dA=new Set([408,409,425,429,500,502,503,504]);function Dw(t){const{fetch:e,Headers:n}=t;function s(o){const a=o.error&&o.error.name==="AbortError"||!1;if(o.options.retry!==!1&&!a){let l;typeof o.options.retry=="number"?l=o.options.retry:l=hm(o.options.method)?0:1;const u=o.response&&o.response.status||500;if(l>0&&dA.has(u))return r(o.request,{...o.options,retry:l-1})}const c=aA(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(c,r),c}const r=async function(a,c={}){const l={request:a,options:{...t.defaults,...c},response:void 0,error:void 0};l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=nA(l.request,l.options.baseURL)),(l.options.query||l.options.params)&&(l.request=sA(l.request,{...l.options.params,...l.options.query})),l.options.body&&hm(l.options.method)&&lA(l.options.body)&&(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new n(l.options.headers),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json"))),l.response=await e(l.request,l.options).catch(async h=>(l.error=h,l.options.onRequestError&&await l.options.onRequestError(l),s(l)));const u=(l.options.parseResponse?"json":l.options.responseType)||fA(l.response.headers.get("content-type")||"");if(u==="json"){const h=await l.response.text(),f=l.options.parseResponse||Lk;l.response._data=f(h)}else u==="stream"?l.response._data=l.response.body:l.response._data=await l.response[u]();return l.options.onResponse&&await l.options.onResponse(l),l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await l.options.onResponseError(l),s(l)):l.response},i=function(a,c){return r(a,c).then(l=>l._data)};return i.raw=r,i.native=e,i.create=(o={})=>Dw({...t,defaults:{...t.defaults,...o}}),i}const xw=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),pA=xw.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),gA=xw.Headers,mA=Dw({fetch:pA,Headers:gA}),yA=mA,_A=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Ac=_A().app,vA=()=>Ac.baseURL,wA=()=>Ac.buildAssetsDir,EA=(...t)=>kl(Mw(),wA(),...t),Mw=(...t)=>{const e=Ac.cdnURL||Ac.baseURL;return t.length?kl(e,...t):e};globalThis.__buildAssetsURL=EA,globalThis.__publicAssetsURL=Mw;function Oh(t,e={},n){for(const s in t){const r=t[s],i=n?`${n}:${s}`:s;typeof r=="object"&&r!==null?Oh(r,e,i):typeof r=="function"&&(e[i]=r)}return e}function bA(t,e){return t.reduce((n,s)=>n.then(()=>s.apply(void 0,e)),Promise.resolve())}function TA(t,e){return Promise.all(t.map(n=>n.apply(void 0,e)))}function Au(t,e){for(const n of t)n(e)}class CA{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,s={}){if(!e||typeof n!="function")return()=>{};const r=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!s.allowDeprecated){let o=i.message;o||(o=`${r} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let s,r=(...i)=>(typeof s=="function"&&s(),s=void 0,r=void 0,n(...i));return s=this.hook(e,r),s}removeHook(e,n){if(this._hooks[e]){const s=this._hooks[e].indexOf(n);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const s=this._hooks[e]||[];this._hooks[e]=void 0;for(const r of s)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Oh(e),s=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(e){const n=Oh(e);for(const s in n)this.removeHook(s,n[s])}callHook(e,...n){return this.callHookWith(bA,e,...n)}callHookParallel(e,...n){return this.callHookWith(TA,e,...n)}callHookWith(e,n,...s){const r=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&Au(this._before,r);const i=e(this._hooks[n]||[],s);return i instanceof Promise?i.finally(()=>{this._after&&r&&Au(this._after,r)}):(this._after&&r&&Au(this._after,r),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}function Lw(){return new CA}function IA(){let t,e=!1;const n=s=>{if(t&&t!==s)throw new Error("Context conflict")};return{use:()=>{if(t===void 0)throw new Error("Context is not available");return t},tryUse:()=>t,set:(s,r)=>{r||n(s),t=s,e=!0},unset:()=>{t=void 0,e=!1},call:(s,r)=>{n(s),t=s;try{return r()}finally{e||(t=void 0)}},async callAsync(s,r){t=s;const i=()=>{t=s},o=()=>t===s?i:void 0;Ph.add(o);try{const a=r();return e||(t=void 0),await a}finally{Ph.delete(o)}}}}function SA(){const t={};return{get(e){return t[e]||(t[e]=IA()),t[e],t[e]}}}const Rc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},fm="__unctx__",kA=Rc[fm]||(Rc[fm]=SA()),AA=t=>kA.get(t),dm="__unctx_async_handlers__",Ph=Rc[dm]||(Rc[dm]=new Set);function Dh(t){const e=[];for(const r of Ph){const i=r();i&&e.push(i)}const n=()=>{for(const r of e)r()};let s=t();return s&&typeof s=="object"&&"catch"in s&&(s=s.catch(r=>{throw n(),r})),[s,n]}const Fw=AA("nuxt-app"),RA="__nuxt_plugin";function NA(t){let e=0;const n={provide:void 0,globalName:"nuxt",payload:Ct({data:{},state:{},_errors:{},...window.__NUXT__}),static:{data:{}},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},...t};n.hooks=Lw(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;Ha(n,a,o),Ha(n.vueApp.config.globalProperties,a,o)},Ha(n.vueApp,"$nuxt",n),Ha(n.vueApp.config.globalProperties,"$nuxt",n),window.addEventListener("nuxt.preloadError",i=>{n.callHook("app:chunkError",{error:i.payload})}),n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});const s=Ct(n.payload.config),r=new Proxy(s,{get(i,o){return o==="public"?i.public:i[o]??i.public[o]},set(i,o,a){return o==="public"||o==="app"?!1:(i[o]=a,i.public[o]=a,!0)}});return n.provide("config",r),n}async function OA(t,e){if(typeof e!="function")return;const{provide:n}=await $n(t,e,[t])||{};if(n&&typeof n=="object")for(const s in n)t.provide(s,n[s])}async function PA(t,e){for(const n of e)await OA(t,n)}function DA(t){return t.map(n=>typeof n!="function"?null:n.length>1?s=>n(s,s.provide):n).filter(Boolean)}function yn(t){return t[RA]=!0,t}function $n(t,e,n){const s=()=>n?e(...n):e();return Fw.set(t),s()}function ft(){const t=Fw.tryUse();if(!t){const e=$t();if(!e)throw new Error("nuxt instance unavailable");return e.appContext.app.$nuxt}return t}function Uw(){return ft().$config}function Ha(t,e,n){Object.defineProperty(t,e,{get:()=>n})}const xA=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let $w;const ra=t=>$w=t,Bw=Symbol();function xh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var lo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(lo||(lo={}));function MA(){const t=_l(!0),e=t.run(()=>xe({}));let n=[],s=[];const r=Jr({install(i){ra(r),r._a=i,i.provide(Bw,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!xA?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Vw=()=>{};function pm(t,e,n,s=Vw){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Zf()&&ed(r),r}function Tr(t,...e){t.slice().forEach(n=>{n(...e)})}function Mh(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];xh(r)&&xh(s)&&t.hasOwnProperty(n)&&!Ue(s)&&!ms(s)?t[n]=Mh(r,s):t[n]=s}return t}const LA=Symbol();function FA(t){return!xh(t)||!t.hasOwnProperty(LA)}const{assign:os}=Object;function UA(t){return!!(Ue(t)&&t.effect)}function $A(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=cd(n.state.value[t]);return os(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Jr(Ee(()=>{ra(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return c=Hw(t,l,e,n,s,!0),c}function Hw(t,e,n={},s,r,i){let o;const a=os({actions:{}},n),c={deep:!0};let l,u,h=Jr([]),f=Jr([]),d;const p=s.state.value[t];!i&&!p&&(s.state.value[t]={}),xe({});let y;function E(S){let T;l=u=!1,typeof S=="function"?(S(s.state.value[t]),T={type:lo.patchFunction,storeId:t,events:d}):(Mh(s.state.value[t],S),T={type:lo.patchObject,payload:S,storeId:t,events:d});const M=y=Symbol();Ds().then(()=>{y===M&&(l=!0)}),u=!0,Tr(h,T,s.state.value[t])}const v=i?function(){const{state:T}=n,M=T?T():{};this.$patch($=>{os($,M)})}:Vw;function g(){o.stop(),h=[],f=[],s._s.delete(t)}function _(S,T){return function(){ra(s);const M=Array.from(arguments),$=[],G=[];function V(Ie){$.push(Ie)}function se(Ie){G.push(Ie)}Tr(f,{args:M,name:S,store:C,after:V,onError:se});let j;try{j=T.apply(this&&this.$id===t?this:C,M)}catch(Ie){throw Tr(G,Ie),Ie}return j instanceof Promise?j.then(Ie=>(Tr($,Ie),Ie)).catch(Ie=>(Tr(G,Ie),Promise.reject(Ie))):(Tr($,j),j)}}const b={_p:s,$id:t,$onAction:pm.bind(null,f),$patch:E,$reset:v,$subscribe(S,T={}){const M=pm(h,S,T.detached,()=>$()),$=o.run(()=>Zt(()=>s.state.value[t],G=>{(T.flush==="sync"?u:l)&&S({storeId:t,type:lo.direct,events:d},G)},os({},c,T)));return M},$dispose:g},C=Ct(b);s._s.set(t,C);const A=s._e.run(()=>(o=_l(),o.run(()=>e())));for(const S in A){const T=A[S];if(Ue(T)&&!UA(T)||ms(T))i||(p&&FA(T)&&(Ue(T)?T.value=p[S]:Mh(T,p[S])),s.state.value[t][S]=T);else if(typeof T=="function"){const M=_(S,T);A[S]=M,a.actions[S]=T}}return os(C,A),os(he(C),A),Object.defineProperty(C,"$state",{get:()=>s.state.value[t],set:S=>{E(T=>{os(T,S)})}}),s._p.forEach(S=>{os(C,o.run(()=>S({store:C,app:s._a,pinia:s,options:a})))}),p&&i&&n.hydrate&&n.hydrate(C.$state,p),l=!0,u=!0,C}function Cj(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=$t();return a=a||l&&Ke(Bw,null),a&&ra(a),a=$w,a._s.has(s)||(i?Hw(s,e,r,a):$A(s,r,a)),a._s.get(s)}return o.$id=s,o}function Ru(t){return t!==null&&typeof t=="object"}function Lh(t,e,n=".",s){if(!Ru(e))return Lh(t,{},n,s);const r=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(s&&s(r,i,o,n)||(Array.isArray(o)&&Array.isArray(r[i])?r[i]=[...o,...r[i]]:Ru(o)&&Ru(r[i])?r[i]=Lh(o,r[i],(n?`${n}.`:"")+i.toString(),s):r[i]=o))}return r}function jw(t){return(...e)=>e.reduce((n,s)=>Lh(n,s,"",t),{})}const BA=jw(),VA=jw((t,e,n)=>{if(typeof t[e]<"u"&&typeof n=="function")return t[e]=n(t[e]),!0});class Fh extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1,this.statusMessage=void 0}toJSON(){const e={message:this.message,statusCode:this.statusCode};return this.statusMessage&&(e.statusMessage=this.statusMessage),this.data!==void 0&&(e.data=this.data),e}}Fh.__h3_error__=!0;function Uh(t){if(typeof t=="string")return new Fh(t);if(HA(t))return t;const e=new Fh(t.message??t.statusMessage,t.cause?{cause:t.cause}:void 0);if("stack"in t)try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}return t.data&&(e.data=t.data),t.statusCode?e.statusCode=t.statusCode:t.status&&(e.statusCode=t.status),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function HA(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const Rl=()=>ld(ft().payload,"error"),Dr=t=>{const e=Ww(t);try{ft().callHook("app:error",e);const s=Rl();s.value=s.value||e}catch{throw e}return e},jA=async(t={})=>{const e=ft(),n=Rl();e.callHook("app:error:cleared",t),t.redirect&&await e.$router.replace(t.redirect),n.value=null},WA=t=>!!(t&&typeof t=="object"&&"__nuxt_error"in t),Ww=t=>{const e=Uh(t);return e.__nuxt_error=!0,e};function qA(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,s]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(s!==void 0&&typeof s!="function")throw new Error("[nuxt] [useState] init must be a function: "+s);const r="$s"+n,i=ft(),o=ld(i.payload.state,r);if(o.value===void 0&&s){const a=s();if(Ue(a))return i.payload.state[r]=a,a;o.value=a}return o}const Nl=()=>{var t;return(t=ft())==null?void 0:t.$router},KA=()=>$t()?Ke("_route",ft()._route):ft()._route,zA=t=>t,GA=()=>{try{if(ft()._processingMiddleware)return!0}catch{return!0}return!1},Ij=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:t.path||"/",s=sa(n,!0);if(s&&!(e!=null&&e.external))throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");if(s&&Al(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");if(!s&&GA())return t;const r=Nl();return s?(e!=null&&e.replace?location.replace(n):location.href=n,Promise.resolve()):e!=null&&e.replace?r.replace(t):r.push(t)};function QA(t){return Array.isArray(t)?t:[t]}const qw=["title","script","style","noscript"],Id=["base","meta","link","style","script","noscript"],YA=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],XA=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],JA=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Kw(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Nc(t){return Kw(`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function ZA(t){let e=9;for(const n of t)for(let s=0;s<n.length;)e=Math.imul(e^n.charCodeAt(s++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function zw(t,e){const{props:n,tag:s}=t;if(XA.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];s==="meta"&&r.push("name","property","http-equiv");for(const i of r)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${s}:${i}:${o}`}return!1}const ja=(t,e=!1,n)=>{const{tag:s,$el:r}=t;r&&(Object.entries(s.props).forEach(([i,o])=>{o=String(o);const a=`attr:${i}`;if(i==="class"){if(!o)return;for(const c of o.split(" ")){const l=`${a}:${c}`;n&&n(t,l,()=>r.classList.remove(c)),r.classList.contains(c)||r.classList.add(c)}return}n&&!i.startsWith("data-h-")&&n(t,a,()=>r.removeAttribute(i)),(e||r.getAttribute(i)!==o)&&r.setAttribute(i,o)}),qw.includes(s.tag)&&(s.textContent&&s.textContent!==r.textContent?r.textContent=s.textContent:s.innerHTML&&s.innerHTML!==r.innerHTML&&(r.innerHTML=s.innerHTML)))};let Vi=!1;async function Gw(t,e={}){var f,d;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const s=e.document||t.resolvedOptions.document||window.document,r=(await t.resolveTags()).map(a);if(t.resolvedOptions.experimentalHashHydration&&(Vi=Vi||t._hash||!1,Vi)){const p=ZA(r.map(y=>y.tag._h));if(Vi===p)return;Vi=p}const i=t._popSideEffectQueue();t.headEntries().map(p=>p._sde).forEach(p=>{Object.entries(p).forEach(([y,E])=>{i[y]=E})});const o=(p,y,E)=>{y=`${p.renderId}:${y}`,p.entry&&(p.entry._sde[y]=E),delete i[y]};function a(p){const y=t.headEntries().find(v=>v._i===p._e),E={renderId:p._d||Nc(p),$el:null,shouldRender:!0,tag:p,entry:y,markSideEffect:(v,g)=>o(E,v,g)};return E}const c=[],l={body:[],head:[]},u=p=>{t._elMap[p.renderId]=p.$el,c.push(p),o(p,"el",()=>{var y;(y=p.$el)==null||y.remove(),delete t._elMap[p.renderId]})};for(const p of r){if(await t.hooks.callHook("dom:beforeRenderTag",p),!p.shouldRender)continue;const{tag:y}=p;if(y.tag==="title"){s.title=y.textContent||"",c.push(p);continue}if(y.tag==="htmlAttrs"||y.tag==="bodyAttrs"){p.$el=s[y.tag==="htmlAttrs"?"documentElement":"body"],ja(p,!1,o),c.push(p);continue}if(p.$el=t._elMap[p.renderId],!p.$el&&y.key&&(p.$el=s.querySelector(`${(f=y.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${y.tag}[data-h-${y._h}]`)),p.$el){p.tag._d&&ja(p),u(p);continue}l[(d=y.tagPosition)!=null&&d.startsWith("body")?"body":"head"].push(p)}const h={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(l).forEach(([p,y])=>{var v;if(!y.length)return;const E=(v=s==null?void 0:s[p])==null?void 0:v.children;if(E){for(const g of[...E].reverse()){const _=g.tagName.toLowerCase();if(!Id.includes(_))continue;const b=g.getAttributeNames().reduce((T,M)=>({...T,[M]:g.getAttribute(M)}),{}),C={tag:_,props:b};g.innerHTML&&(C.innerHTML=g.innerHTML);const A=Nc(C);let S=y.findIndex(T=>(T==null?void 0:T.renderId)===A);if(S===-1){const T=zw(C);S=y.findIndex(M=>(M==null?void 0:M.tag._d)&&M.tag._d===T)}if(S!==-1){const T=y[S];T.$el=g,ja(T),u(T),delete y[S]}}y.forEach(g=>{const _=g.tag.tagPosition||"head";h[_]=h[_]||s.createDocumentFragment(),g.$el||(g.$el=s.createElement(g.tag.tag),ja(g,!0)),h[_].appendChild(g.$el),u(g)})}}),h.head&&s.head.appendChild(h.head),h.bodyOpen&&s.body.insertBefore(h.bodyOpen,s.body.firstChild),h.bodyClose&&s.body.appendChild(h.bodyClose);for(const p of c)await t.hooks.callHook("dom:renderTag",p);Object.values(i).forEach(p=>p())}let Nu=null;async function Qw(t,e={}){function n(){return Nu=null,Gw(t,e)}const s=e.delayFn||(r=>setTimeout(r,10));return Nu=Nu||new Promise(r=>s(()=>r(n())))}const eR=t=>({hooks:{"entries:updated":function(e){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let n=t==null?void 0:t.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Qw(e,{document:(t==null?void 0:t.document)||window.document,delayFn:n})}}});function tR(t){var e;return((e=t==null?void 0:t.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:e.getAttribute("content"))||!1}const gm={critical:2,high:9,low:12,base:-1,title:1,meta:10};function mm(t){if(typeof t.tagPriority=="number")return t.tagPriority;if(t.tag==="meta"){if(t.props.charset)return-2;if(t.props["http-equiv"]==="content-security-policy")return 0}const e=t.tagPriority||t.tag;return e in gm?gm[e]:10}const nR=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function sR(){return{hooks:{"tags:resolve":t=>{const e=n=>{var s;return(s=t.tags.find(r=>r._d===n))==null?void 0:s._p};for(const{prefix:n,offset:s}of nR)for(const r of t.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=e(r.tagPriority.replace(n,""));typeof i<"u"&&(r._p=i+s)}t.tags.sort((n,s)=>n._p-s._p).sort((n,s)=>mm(n)-mm(s))}}}}const ym=(t,e)=>t==null?e||null:typeof t=="function"?t(e):t.replace("%s",e??""),rR=()=>({hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(r=>r.tag==="titleTemplate");const s=e.findIndex(r=>r.tag==="title");if(s!==-1&&n!==-1){const r=ym(e[n].textContent,e[s].textContent);r!==null?e[s].textContent=r||e[s].textContent:delete e[s]}else if(n!==-1){const r=ym(e[n].textContent);r!==null&&(e[n].textContent=r,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}}),iR=()=>({hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}),Yw=typeof window<"u",oR=()=>({hooks:{"tag:normalise":t=>{var i,o;const{tag:e,entry:n,resolvedOptions:s}=t;s.experimentalHashHydration===!0&&(e._h=Nc(e));const r=typeof e.props._dynamic<"u";!Id.includes(e.tag)||!e.key||Yw||(o=(i=Jw())==null?void 0:i.resolvedOptions)!=null&&o.document||(n._m==="server"||r)&&(e._h=e._h||Nc(e),e.props[`data-h-${e._h}`]="")},"tags:resolve":t=>{t.tags=t.tags.map(e=>(delete e.props._dynamic,e))}}}),_m=["script","link","bodyAttrs"],aR=()=>{const t=(e,n)=>{const s={},r={};Object.entries(n.props).forEach(([o,a])=>{o.startsWith("on")&&typeof a=="function"?r[o]=a:s[o]=a});let i;return e==="dom"&&n.tag==="script"&&typeof s.src=="string"&&typeof r.onload<"u"&&(i=s.src,delete s.src),{props:s,eventHandlers:r,delayedSrc:i}};return{hooks:{"ssr:render":function(e){e.tags=e.tags.map(n=>(!_m.includes(n.tag)||!Object.entries(n.props).find(([s,r])=>s.startsWith("on")&&typeof r=="function")||(n.props=t("ssr",n).props),n))},"dom:beforeRenderTag":function(e){if(!_m.includes(e.tag.tag)||!Object.entries(e.tag.props).find(([i,o])=>i.startsWith("on")&&typeof o=="function"))return;const{props:n,eventHandlers:s,delayedSrc:r}=t("dom",e.tag);Object.keys(s).length&&(e.tag.props=n,e.tag._eventHandlers=s,e.tag._delayedSrc=r)},"dom:renderTag":function(e){const n=e.$el;if(!e.tag._eventHandlers||!n)return;const s=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(e.tag._eventHandlers).forEach(([r,i])=>{const o=`${e.tag._d||e.tag._p}:${r}`,a=r.slice(2).toLowerCase(),c=`data-h-${a}`;if(e.markSideEffect(o,()=>{}),n.hasAttribute(c))return;const l=i;n.setAttribute(c,""),s.addEventListener(a,l),e.entry&&(e.entry._sde[o]=()=>{s.removeEventListener(a,l),n.removeAttribute(c)})}),e.tag._delayedSrc&&n.setAttribute("src",e.tag._delayedSrc)}}}},cR=["templateParams","htmlAttrs","bodyAttrs"],lR=t=>{t=t||{};const e=t.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:n}){e.forEach(r=>{n.props[r]&&(n.key=n.props[r],delete n.props[r])});const s=n.key?`${n.tag}:${n.key}`:zw(n);s&&(n._d=s)},"tags:resolve":function(n){const s={};n.tags.forEach(i=>{const o=i._d||i._p,a=s[o];if(a){let c=i==null?void 0:i.tagDuplicateStrategy;if(!c&&cR.includes(i.tag)&&(c="merge"),c==="merge"){const u=a.props;["class","style"].forEach(h=>{i.props[h]&&u[h]&&(h==="style"&&!u[h].endsWith(";")&&(u[h]+=";"),i.props[h]=`${u[h]} ${i.props[h]}`)}),s[o].props={...u,...i.props};return}else if(i._e===a._e){a._duped=a._duped||[],i._d=`${a._d}:${a._duped.length+1}`,a._duped.push(i);return}const l=Object.keys(i.props).length;if((l===0||l===1&&typeof i.props["data-h-key"]<"u")&&!i.innerHTML&&!i.textContent){delete s[o];return}}s[o]=i});const r=[];Object.values(s).forEach(i=>{const o=i._duped;delete i._duped,r.push(i),o&&r.push(...o)}),n.tags=r}}}};function Ou(t,e){const n=(r,i)=>{let o;return i==="pageTitle"||i==="s"?o=e.pageTitle:i.includes(".")?o=i.split(".").reduce((a,c)=>a[c]||"",e):o=e[i],o||""};let s=t.replace(/%(\w+\.+\w+)/g,n).replace(/%(\w+)/g,n).trim();return e.separator&&(s.endsWith(e.separator)&&(s=s.slice(0,-e.separator.length).trim()),s.startsWith(e.separator)&&(s=s.slice(e.separator.length).trim()),s=s.replace(new RegExp(`\\${e.separator}\\s*\\${e.separator}`,"g"),e.separator)),s}function uR(){return{hooks:{"tags:resolve":t=>{var i;const{tags:e}=t,n=(i=e.find(o=>o.tag==="title"))==null?void 0:i.textContent,s=e.findIndex(o=>o.tag==="templateParams"),r=s!==-1?e[s].textContent:{};r.pageTitle=r.pageTitle||n||"",delete e[s];for(const o of e.filter(Boolean))["titleTemplate","title"].includes(o.tag)&&typeof o.textContent=="string"?o.textContent=Ou(o.textContent,r):o.tag==="meta"&&typeof o.props.content=="string"?o.props.content=Ou(o.props.content,r):o.tag==="script"&&["application/json","application/ld+json"].includes(o.props.type)&&typeof o.innerHTML=="string"&&(o.innerHTML=Ou(o.innerHTML,r));t.tags=e.filter(Boolean)}}}}let Xw;const hR=t=>Xw=t,Jw=()=>Xw;async function fR(t,e){const n={tag:t,props:{}};return["title","titleTemplate","templateParams"].includes(t)?(n.textContent=e instanceof Promise?await e:e,n):typeof e=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(e)||e.startsWith("/"))?n.props.src=e:(n.innerHTML=e,n.key=Kw(e)),n):!1:(n.props=await pR(t,{...e}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(s=>JA.includes(s)).forEach(s=>{(!["innerHTML","textContent"].includes(s)||qw.includes(n.tag))&&(n[s]=n.props[s]),delete n.props[s]}),["innerHTML","textContent"].forEach(s=>{if(n.tag==="script"&&typeof n[s]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[s]=JSON.parse(n[s])}catch{n[s]=""}typeof n[s]=="object"&&(n[s]=JSON.stringify(n[s]))}),n.props.class&&(n.props.class=dR(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(s=>({...n,props:{...n.props,content:s}})):n)}function dR(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function pR(t,e){for(const n of Object.keys(e)){const s=n.startsWith("data-");e[n]instanceof Promise&&(e[n]=await e[n]),String(e[n])==="true"?e[n]=s?"true":"":String(e[n])==="false"&&(s?e[n]="false":delete e[n])}return e}const gR=10;async function mR(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,s])=>typeof s<"u"&&YA.includes(n)).forEach(([n,s])=>{const r=QA(s);e.push(...r.map(i=>fR(n,i)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,s)=>(n._e=t._i,n._p=(t._i<<gR)+s,n))}const yR=()=>[lR(),sR(),uR(),rR(),oR(),aR(),iR()],_R=(t={})=>[eR({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})];function vR(t={}){const e=wR({...t,plugins:[..._R(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&e.resolvedOptions.document&&(e._hash=tR(e.resolvedOptions.document)),hR(e),e}function wR(t={}){let e=[],n={},s=0;const r=Lw();t!=null&&t.hooks&&r.addHooks(t.hooks),t.plugins=[...yR(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(a=>a.hooks&&r.addHooks(a.hooks)),t.document=t.document||(Yw?document:void 0);const i=()=>r.callHook("entries:updated",o),o={resolvedOptions:t,headEntries(){return e},get hooks(){return r},use(a){a.hooks&&r.addHooks(a.hooks)},push(a,c){const l={_i:s++,input:a,_sde:{}};return c!=null&&c.mode&&(l._m=c==null?void 0:c.mode),c!=null&&c.transform&&(l._t=c==null?void 0:c.transform),e.push(l),i(),{dispose(){e=e.filter(u=>u._i!==l._i?!0:(n={...n,...u._sde||{}},u._sde={},i(),!1))},patch(u){e=e.map(h=>(h._i===l._i&&(l.input=h.input=u,i()),h))}}},async resolveTags(){const a={tags:[],entries:[...e]};await r.callHook("entries:resolve",a);for(const c of a.entries){const l=c._t||(u=>u);c.resolvedInput=l(c.resolvedInput||c.input);for(const u of await mR(c)){const h={tag:u,entry:c,resolvedOptions:o.resolvedOptions};await r.callHook("tag:normalise",h),a.tags.push(h.tag)}}return await r.callHook("tags:resolve",a),a.tags},_popSideEffectQueue(){const a={...n};return n={},a},_elMap:{}};return o.hooks.callHook("init",o),o}function ER(t){return typeof t=="function"?t():Ne(t)}function Oc(t,e=""){if(t instanceof Promise)return t;const n=ER(t);if(!t||!n)return n;if(Array.isArray(n))return n.map(s=>Oc(s,e));if(typeof n=="object"){let s=!1;const r=Object.fromEntries(Object.entries(n).map(([i,o])=>i==="titleTemplate"||i.startsWith("on")?[i,Ne(o)]:((typeof o=="function"||Ue(o))&&(s=!0),[i,Oc(o,i)])));return s&&Id.includes(String(e))&&(r._dynamic=!0),r}return n}const bR=Td.startsWith("3"),TR=typeof window<"u",Zw="usehead";function Sd(){return $t()&&Ke(Zw)||Jw()}function CR(t){return{install(n){bR&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Zw,t))}}.install}function IR(t={}){const e=vR({...t,domDelayFn:n=>setTimeout(()=>Ds(()=>n()),10),plugins:[SR(),...(t==null?void 0:t.plugins)||[]]});return e.install=CR(e),e}const SR=()=>({hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Oc(e.input)}}});function kR(t,e={}){const n=Sd(),s=xe(!1),r=xe({});ta(()=>{r.value=s.value?{}:Oc(t)});const i=n.push(r.value,e);return Zt(r,a=>{i.patch(a)}),$t()&&(Cl(()=>{i.dispose()}),Yv(()=>{s.value=!0}),Qv(()=>{s.value=!1})),i}function AR(t,e={}){return Sd().push(t,e)}function eE(t,e={}){var s;const n=Sd();if(n){const r=TR||!!((s=n.resolvedOptions)!=null&&s.document);return e.mode==="server"&&r||e.mode==="client"&&!r?void 0:r?kR(t,e):AR(t,e)}}function RR(t,e){const n=IR(e||{}),s={unhead:n,install(r){Td.startsWith("3")&&(r.config.globalProperties.$head=n,r.provide("usehead",n))},use(r){n.use(r)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(r,i){return n.push(r,i)},addEntry(r,i){return n.push(r,i)},addHeadObjs(r,i){return n.push(r,i)},addReactiveEntry(r,i){const o=eE(r,i);return typeof o<"u"?o.dispose:()=>{}},removeHeadObjs(){},updateDOM(r,i){i?Gw(n,{document:r}):Qw(n,{delayFn:o=>setTimeout(()=>o(),50),document:r})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=s.addHeadObjs,n.updateDOM=s.updateDOM,n.hooks.hook("dom:beforeRender",r=>{for(const i of s.hooks["before:dom"])i()===!1&&(r.shouldRender=!1)}),t&&s.addHeadObjs(t),s}const NR="modulepreload",OR=function(t,e){return t.startsWith(".")?new URL(t,e).href:t},vm={},be=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=OR(i,s),i in vm)return;vm[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":NR,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};function wm(t,e={}){const n=PR(t,e),s=ft(),r=s._payloadCache=s._payloadCache||{};return r[t]||(r[t]=DR(n).then(i=>i||(delete r[t],null))),r[t]}function PR(t,e={}){const n=new URL(t,"http://localhost");if(n.search)throw new Error("Payload URL cannot contain search params: "+t);if(n.host!=="localhost"||sa(n.pathname,!0))throw new Error("Payload URL must not include hostname: "+t);const s=e.hash||(e.fresh?Date.now():"");return kl(Uw().app.baseURL,n.pathname,s?`_payload.${s}.js`:"_payload.js")}async function DR(t){const e=await be(()=>import(t),[],import.meta.url).catch(n=>{console.warn("[nuxt] Cannot load payload ",t,n)});return(e==null?void 0:e.default)||null}function xR(){return!!ft().payload.prerenderedAt}const MR={firebaseConfig:{apiKey:"AIzaSyBveK6gIB_9MdjUlyi70KOyCo-dMO2yKHY",authDomain:"crickburrowarchives.firebaseapp.com",projectId:"crickburrowarchives",storageBucket:"crickburrowarchives.appspot.com",messagingSenderId:"708349315619",appId:"1:708349315619:web:5a599bfa7961f0bf217f96",measurementId:"G-CLXB8V1MH8"},vuefireOptions:{optionsApiPlugin:!1,auth:!0,config:{apiKey:"AIzaSyBveK6gIB_9MdjUlyi70KOyCo-dMO2yKHY",authDomain:"crickburrowarchives.firebaseapp.com",projectId:"crickburrowarchives",storageBucket:"crickburrowarchives.appspot.com",messagingSenderId:"708349315619",appId:"1:708349315619:web:5a599bfa7961f0bf217f96",measurementId:"G-CLXB8V1MH8"},appCheck:{debug:!1,isTokenAutoRefreshEnabled:!0,provider:"ReCaptchaV3",key:"6LejtlUlAAAAAEvIfVKCit8UQxmBMvnIBPoWEYoa"}}},LR=VA(MR);function kd(){const t=ft();return t._appConfig||(t._appConfig=Ct(LR)),t._appConfig}const FR=yn(t=>{const e=MA();return t.vueApp.use(e),ra(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}),Pu={ArtifactTest:$s(()=>be(()=>import("./ArtifactTest.82833843.js"),["./ArtifactTest.82833843.js","./realms.data.6da3aeac.js","./useRandomNumber.d50ddb30.js","./useClassifyRealm.52e7f0c4.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./VImg.caa78565.js","./dimensions.a29b2802.js","./useRender.dd44c047.js","./VImg.fbbd1a36.css","./VIcon.643e9184.js","./color.4347dc26.js","./VIcon.9957792f.css"],import.meta.url).then(t=>t.default||t)),ExamPassed:$s(()=>be(()=>import("./ExamPassed.f8bbe501.js"),["./ExamPassed.f8bbe501.js","./backButton.dd1217ac.js","./VIcon.643e9184.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./color.4347dc26.js","./useRender.dd44c047.js","./VIcon.9957792f.css","./router.a9193777.js","./router.9bfde38d.css","./rounded.f9bd3dac.js","./group.715627b1.js","./dimensions.a29b2802.js","./position.e8174993.js","./VProgressLinear.14bb13fb.js","./VProgressLinear.c71ac71c.css","./resizeObserver.a48c6051.js","./backButton.def02653.css","./layout.cccb4692.js","./VContainer.52278e88.js","./VCard.7c7f6f5b.js","./createSimpleFunctional.a108c35b.js","./VAvatar.51dc3611.js","./VImg.caa78565.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css"],import.meta.url).then(t=>t.default||t)),ExamStart:$s(()=>be(()=>import("./ExamStart.2e43de95.js"),["./ExamStart.2e43de95.js","./backButton.dd1217ac.js","./VIcon.643e9184.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./color.4347dc26.js","./useRender.dd44c047.js","./VIcon.9957792f.css","./router.a9193777.js","./router.9bfde38d.css","./rounded.f9bd3dac.js","./group.715627b1.js","./dimensions.a29b2802.js","./position.e8174993.js","./VProgressLinear.14bb13fb.js","./VProgressLinear.c71ac71c.css","./resizeObserver.a48c6051.js","./backButton.def02653.css","./VCard.7c7f6f5b.js","./createSimpleFunctional.a108c35b.js","./VAvatar.51dc3611.js","./VImg.caa78565.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css","./VContainer.52278e88.js","./ExamStart.08cf96b9.css"],import.meta.url).then(t=>t.default||t)),IdentificationTest:$s(()=>be(()=>import("./IdentificationTest.c7c80917.js"),["./IdentificationTest.c7c80917.js","./useRandomNumber.d50ddb30.js","./useClassifyRealm.52e7f0c4.js","./realms.data.6da3aeac.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./VImg.caa78565.js","./dimensions.a29b2802.js","./useRender.dd44c047.js","./VImg.fbbd1a36.css","./VContainer.52278e88.js"],import.meta.url).then(t=>t.default||t)),KeycodeTest:$s(()=>be(()=>import("./KeycodeTest.9d286546.js"),["./KeycodeTest.9d286546.js","./realms.data.6da3aeac.js","./usePlaySound.dccf20a1.js","./howler.5070fb36.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./VCard.7c7f6f5b.js","./useRender.dd44c047.js","./createSimpleFunctional.a108c35b.js","./router.a9193777.js","./color.4347dc26.js","./router.9bfde38d.css","./VAvatar.51dc3611.js","./rounded.f9bd3dac.js","./VIcon.643e9184.js","./VIcon.9957792f.css","./VImg.caa78565.js","./dimensions.a29b2802.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./position.e8174993.js","./VProgressLinear.14bb13fb.js","./VProgressLinear.c71ac71c.css","./VCard.6b2e677e.css","./KeycodeTest.c05e15e0.css"],import.meta.url).then(t=>t.default||t)),SymbolTest:$s(()=>be(()=>import("./SymbolTest.2c29e809.js"),["./SymbolTest.2c29e809.js","./realms.data.6da3aeac.js","./useRandomNumber.d50ddb30.js","./useClassifyRealm.52e7f0c4.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./VImg.caa78565.js","./dimensions.a29b2802.js","./useRender.dd44c047.js","./VImg.fbbd1a36.css","./VIcon.643e9184.js","./color.4347dc26.js","./VIcon.9957792f.css"],import.meta.url).then(t=>t.default||t))},UR=yn(t=>{for(const e in Pu)t.vueApp.component(e,Pu[e]),t.vueApp.component("Lazy"+e,Pu[e])}),Sj={name:"layout",mode:"out-in"},$h={name:"page",mode:"out-in"},$R={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[],style:[],script:[],noscript:[]},BR=!1,VR="__nuxt",HR=yn(t=>{const e=RR();e.push($R),t.vueApp.use(e);{let n=!0;const s=()=>{n=!1,e.internalHooks.callHook("entries:updated",e.unhead)};e.internalHooks.hook("dom:beforeRender",r=>{r.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",s),t.hooks.hook("app:mounted",s)}t._useHead=eE});/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Rr=typeof window<"u";function jR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Se=Object.assign;function Du(t,e){const n={};for(const s in e){const r=e[s];n[s]=dn(r)?r.map(t):t(r)}return n}const uo=()=>{},dn=Array.isArray,WR=/\/$/,qR=t=>t.replace(WR,"");function xu(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=QR(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function KR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Em(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zR(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&ri(e.matched[s],n.matched[r])&&tE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ri(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function tE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!GR(t[n],e[n]))return!1;return!0}function GR(t,e){return dn(t)?bm(t,e):dn(e)?bm(e,t):t===e}function bm(t,e){return dn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function QR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Oo;(function(t){t.pop="pop",t.push="push"})(Oo||(Oo={}));var ho;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ho||(ho={}));function YR(t){if(!t)if(Rr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qR(t)}const XR=/^[^#]+#/;function JR(t,e){return t.replace(XR,"#")+e}function ZR(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ol=()=>({left:window.pageXOffset,top:window.pageYOffset});function eN(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=ZR(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Tm(t,e){return(history.state?history.state.position-e:-1)+t}const Bh=new Map;function tN(t,e){Bh.set(t,e)}function nN(t){const e=Bh.get(t);return Bh.delete(t),e}let sN=()=>location.protocol+"//"+location.host;function nE(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Em(c,"")}return Em(n,t)+s+r}function rN(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const d=nE(t,location),p=n.value,y=e.value;let E=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}E=y?f.position-y.position:0}else s(d);r.forEach(v=>{v(n.value,p,{delta:E,type:Oo.pop,direction:E?E>0?ho.forward:ho.back:ho.unknown})})};function c(){o=n.value}function l(f){r.push(f);const d=()=>{const p=r.indexOf(f);p>-1&&r.splice(p,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Se({},f.state,{scroll:Ol()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Cm(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ol():null}}function iN(t){const{history:e,location:n}=window,s={value:nE(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:sN()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=Se({},e.state,Cm(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=Se({},r.value,e.state,{forward:c,scroll:Ol()});i(u.current,u,!0);const h=Se({},Cm(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function sE(t){t=YR(t);const e=iN(t),n=rN(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Se({location:"",base:t,go:s,createHref:JR.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function oN(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),sE(t)}function aN(t){return typeof t=="string"||t&&typeof t=="object"}function rE(t){return typeof t=="string"||typeof t=="symbol"}const ss={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},iE=Symbol("");var Im;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Im||(Im={}));function ii(t,e){return Se(new Error,{type:t,[iE]:!0},e)}function Mn(t,e){return t instanceof Error&&iE in t&&(e==null||!!(t.type&e))}const Sm="[^/]+?",cN={sensitive:!1,strict:!1,start:!0,end:!0},lN=/[.+*?^${}()[\]/\\]/g;function uN(t,e){const n=Se({},cN,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(lN,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:y,optional:E,regexp:v}=f;i.push({name:p,repeatable:y,optional:E});const g=v||Sm;if(g!==Sm){d+=10;try{new RegExp(`(${g})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${p}" (${g}): `+b.message)}}let _=y?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;h||(_=E&&l.length<2?`(?:/${_})`:"/"+_),E&&(_+="?"),r+=_,d+=20,E&&(d+=-8),y&&(d+=-20),g===".*"&&(d+=-50)}u.push(d)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=i[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:y,optional:E}=d,v=p in l?l[p]:"";if(dn(v)&&!y)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const g=dn(v)?v.join("/"):v;if(!g)if(E)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=g}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function hN(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function fN(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=hN(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(km(s))return 1;if(km(r))return-1}return r.length-s.length}function km(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dN={type:0,value:""},pN=/[a-zA-Z0-9_]/;function gN(t){if(!t)return[[]];if(t==="/")return[[dN]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:pN.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function mN(t,e,n){const s=uN(gN(t.path),n),r=Se(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function yN(t,e){const n=[],s=new Map;e=Nm({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const d=!f,p=_N(u);p.aliasOf=f&&f.record;const y=Nm(e,u),E=[p];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of _)E.push(Se({},p,{components:f?f.record.components:p.components,path:b,aliasOf:f?f.record:p}))}let v,g;for(const _ of E){const{path:b}=_;if(h&&b[0]!=="/"){const C=h.record.path,A=C[C.length-1]==="/"?"":"/";_.path=h.record.path+(b&&A+b)}if(v=mN(_,h,y),f?f.alias.push(v):(g=g||v,g!==v&&g.alias.push(v),d&&u.name&&!Rm(v)&&o(u.name)),p.children){const C=p.children;for(let A=0;A<C.length;A++)i(C[A],v,f&&f.children[A])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return g?()=>{o(g)}:uo}function o(u){if(rE(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&fN(u,n[h])>=0&&(u.record.path!==n[h].record.path||!oE(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Rm(u)&&s.set(u.record.name,u)}function l(u,h){let f,d={},p,y;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw ii(1,{location:u});y=f.record.name,d=Se(Am(h.params,f.keys.filter(g=>!g.optional).map(g=>g.name)),u.params&&Am(u.params,f.keys.map(g=>g.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(g=>g.re.test(p)),f&&(d=f.parse(p),y=f.record.name);else{if(f=h.name?s.get(h.name):n.find(g=>g.re.test(h.path)),!f)throw ii(1,{location:u,currentLocation:h});y=f.record.name,d=Se({},h.params,u.params),p=f.stringify(d)}const E=[];let v=f;for(;v;)E.unshift(v.record),v=v.parent;return{name:y,path:p,params:d,matched:E,meta:wN(E)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Am(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function _N(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:vN(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function vN(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Rm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function wN(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function Nm(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function oE(t,e){return e.children.some(n=>n===t||oE(t,n))}const aE=/#/g,EN=/&/g,bN=/\//g,TN=/=/g,CN=/\?/g,cE=/\+/g,IN=/%5B/g,SN=/%5D/g,lE=/%5E/g,kN=/%60/g,uE=/%7B/g,AN=/%7C/g,hE=/%7D/g,RN=/%20/g;function Ad(t){return encodeURI(""+t).replace(AN,"|").replace(IN,"[").replace(SN,"]")}function NN(t){return Ad(t).replace(uE,"{").replace(hE,"}").replace(lE,"^")}function Vh(t){return Ad(t).replace(cE,"%2B").replace(RN,"+").replace(aE,"%23").replace(EN,"%26").replace(kN,"`").replace(uE,"{").replace(hE,"}").replace(lE,"^")}function ON(t){return Vh(t).replace(TN,"%3D")}function PN(t){return Ad(t).replace(aE,"%23").replace(CN,"%3F")}function DN(t){return t==null?"":PN(t).replace(bN,"%2F")}function Pc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function xN(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(cE," "),o=i.indexOf("="),a=Pc(o<0?i:i.slice(0,o)),c=o<0?null:Pc(i.slice(o+1));if(a in e){let l=e[a];dn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Om(t){let e="";for(let n in t){const s=t[n];if(n=ON(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(dn(s)?s.map(i=>i&&Vh(i)):[s&&Vh(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function MN(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=dn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const LN=Symbol(""),Pm=Symbol(""),Rd=Symbol(""),Nd=Symbol(""),Hh=Symbol("");function Hi(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function cs(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ii(4,{from:n,to:e})):h instanceof Error?a(h):aN(h)?a(ii(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Mu(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(FN(a)){const l=(a.__vccOpts||a)[e];l&&r.push(cs(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=jR(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&cs(f,n,s,i,o)()}))}}return r}function FN(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Dm(t){const e=Ke(Rd),n=Ke(Nd),s=Ee(()=>e.resolve(Ne(t.to))),r=Ee(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(ri.bind(null,u));if(f>-1)return f;const d=xm(c[l-2]);return l>1&&xm(u)===d&&h[h.length-1].path!==d?h.findIndex(ri.bind(null,c[l-2])):f}),i=Ee(()=>r.value>-1&&VN(n.params,s.value.params)),o=Ee(()=>r.value>-1&&r.value===n.matched.length-1&&tE(n.params,s.value.params));function a(c={}){return BN(c)?e[Ne(t.replace)?"replace":"push"](Ne(t.to)).catch(uo):Promise.resolve()}return{route:s,href:Ee(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const UN=pr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Dm,setup(t,{slots:e}){const n=Ct(Dm(t)),{options:s}=Ke(Rd),r=Ee(()=>({[Mm(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Mm(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:hn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),$N=UN;function BN(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function VN(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!dn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function xm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mm=(t,e,n)=>t??e??n,HN=pr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ke(Hh),r=Ee(()=>t.route||s.value),i=Ke(Pm,0),o=Ee(()=>{let l=Ne(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ee(()=>r.value.matched[o.value]);_s(Pm,Ee(()=>o.value+1)),_s(LN,a),_s(Hh,r);const c=xe();return Zt(()=>[c.value,a.value,t.name],([l,u,h],[f,d,p])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!ri(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Lm(n.default,{Component:f,route:l});const d=h.props[u],p=d?d===!0?l.params:typeof d=="function"?d(l):d:null,E=hn(f,Se({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Lm(n.default,{Component:E,route:l})||E}}});function Lm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const fE=HN;function jN(t){const e=yN(t.routes,t),n=t.parseQuery||xN,s=t.stringifyQuery||Om,r=t.history,i=Hi(),o=Hi(),a=Hi(),c=So(ss);let l=ss;Rr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Du.bind(null,R=>""+R),h=Du.bind(null,DN),f=Du.bind(null,Pc);function d(R,W){let B,Y;return rE(R)?(B=e.getRecordMatcher(R),Y=W):Y=R,e.addRoute(Y,B)}function p(R){const W=e.getRecordMatcher(R);W&&e.removeRoute(W)}function y(){return e.getRoutes().map(R=>R.record)}function E(R){return!!e.getRecordMatcher(R)}function v(R,W){if(W=Se({},W||c.value),typeof R=="string"){const m=xu(n,R,W.path),w=e.resolve({path:m.path},W),I=r.createHref(m.fullPath);return Se(m,w,{params:f(w.params),hash:Pc(m.hash),redirectedFrom:void 0,href:I})}let B;if("path"in R)B=Se({},R,{path:xu(n,R.path,W.path).path});else{const m=Se({},R.params);for(const w in m)m[w]==null&&delete m[w];B=Se({},R,{params:h(R.params)}),W.params=h(W.params)}const Y=e.resolve(B,W),me=R.hash||"";Y.params=u(f(Y.params));const He=KR(s,Se({},R,{hash:NN(me),path:Y.path})),ce=r.createHref(He);return Se({fullPath:He,hash:me,query:s===Om?MN(R.query):R.query||{}},Y,{redirectedFrom:void 0,href:ce})}function g(R){return typeof R=="string"?xu(n,R,c.value.path):Se({},R)}function _(R,W){if(l!==R)return ii(8,{from:W,to:R})}function b(R){return S(R)}function C(R){return b(Se(g(R),{replace:!0}))}function A(R){const W=R.matched[R.matched.length-1];if(W&&W.redirect){const{redirect:B}=W;let Y=typeof B=="function"?B(R):B;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=g(Y):{path:Y},Y.params={}),Se({query:R.query,hash:R.hash,params:"path"in Y?{}:R.params},Y)}}function S(R,W){const B=l=v(R),Y=c.value,me=R.state,He=R.force,ce=R.replace===!0,m=A(B);if(m)return S(Se(g(m),{state:typeof m=="object"?Se({},me,m.state):me,force:He,replace:ce}),W||B);const w=B;w.redirectedFrom=W;let I;return!He&&zR(s,Y,B)&&(I=ii(16,{to:w,from:Y}),Ls(Y,Y,!0,!1)),(I?Promise.resolve(I):M(w,Y)).catch(k=>Mn(k)?Mn(k,2)?k:tn(k):Pe(k,w,Y)).then(k=>{if(k){if(Mn(k,2))return S(Se({replace:ce},g(k.to),{state:typeof k.to=="object"?Se({},me,k.to.state):me,force:He}),W||w)}else k=G(w,Y,!0,ce,me);return $(w,Y,k),k})}function T(R,W){const B=_(R,W);return B?Promise.reject(B):Promise.resolve()}function M(R,W){let B;const[Y,me,He]=WN(R,W);B=Mu(Y.reverse(),"beforeRouteLeave",R,W);for(const m of Y)m.leaveGuards.forEach(w=>{B.push(cs(w,R,W))});const ce=T.bind(null,R,W);return B.push(ce),Cr(B).then(()=>{B=[];for(const m of i.list())B.push(cs(m,R,W));return B.push(ce),Cr(B)}).then(()=>{B=Mu(me,"beforeRouteUpdate",R,W);for(const m of me)m.updateGuards.forEach(w=>{B.push(cs(w,R,W))});return B.push(ce),Cr(B)}).then(()=>{B=[];for(const m of R.matched)if(m.beforeEnter&&!W.matched.includes(m))if(dn(m.beforeEnter))for(const w of m.beforeEnter)B.push(cs(w,R,W));else B.push(cs(m.beforeEnter,R,W));return B.push(ce),Cr(B)}).then(()=>(R.matched.forEach(m=>m.enterCallbacks={}),B=Mu(He,"beforeRouteEnter",R,W),B.push(ce),Cr(B))).then(()=>{B=[];for(const m of o.list())B.push(cs(m,R,W));return B.push(ce),Cr(B)}).catch(m=>Mn(m,8)?m:Promise.reject(m))}function $(R,W,B){for(const Y of a.list())Y(R,W,B)}function G(R,W,B,Y,me){const He=_(R,W);if(He)return He;const ce=W===ss,m=Rr?history.state:{};B&&(Y||ce?r.replace(R.fullPath,Se({scroll:ce&&m&&m.scroll},me)):r.push(R.fullPath,me)),c.value=R,Ls(R,W,B,ce),tn()}let V;function se(){V||(V=r.listen((R,W,B)=>{if(!Pa.listening)return;const Y=v(R),me=A(Y);if(me){S(Se(me,{replace:!0}),Y).catch(uo);return}l=Y;const He=c.value;Rr&&tN(Tm(He.fullPath,B.delta),Ol()),M(Y,He).catch(ce=>Mn(ce,12)?ce:Mn(ce,2)?(S(ce.to,Y).then(m=>{Mn(m,20)&&!B.delta&&B.type===Oo.pop&&r.go(-1,!1)}).catch(uo),Promise.reject()):(B.delta&&r.go(-B.delta,!1),Pe(ce,Y,He))).then(ce=>{ce=ce||G(Y,He,!1),ce&&(B.delta&&!Mn(ce,8)?r.go(-B.delta,!1):B.type===Oo.pop&&Mn(ce,20)&&r.go(-1,!1)),$(Y,He,ce)}).catch(uo)}))}let j=Hi(),Ie=Hi(),ge;function Pe(R,W,B){tn(R);const Y=Ie.list();return Y.length?Y.forEach(me=>me(R,W,B)):console.error(R),Promise.reject(R)}function Ae(){return ge&&c.value!==ss?Promise.resolve():new Promise((R,W)=>{j.add([R,W])})}function tn(R){return ge||(ge=!R,se(),j.list().forEach(([W,B])=>R?B(R):W()),j.reset()),R}function Ls(R,W,B,Y){const{scrollBehavior:me}=t;if(!Rr||!me)return Promise.resolve();const He=!B&&nN(Tm(R.fullPath,0))||(Y||!B)&&history.state&&history.state.scroll||null;return Ds().then(()=>me(R,W,He)).then(ce=>ce&&eN(ce)).catch(ce=>Pe(ce,R,W))}const nn=R=>r.go(R);let Mt;const Er=new Set,Pa={currentRoute:c,listening:!0,addRoute:d,removeRoute:p,hasRoute:E,getRoutes:y,resolve:v,options:t,push:b,replace:C,go:nn,back:()=>nn(-1),forward:()=>nn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ie.add,isReady:Ae,install(R){const W=this;R.component("RouterLink",$N),R.component("RouterView",fE),R.config.globalProperties.$router=W,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>Ne(c)}),Rr&&!Mt&&c.value===ss&&(Mt=!0,b(r.location).catch(me=>{}));const B={};for(const me in ss)B[me]=Ee(()=>c.value[me]);R.provide(Rd,W),R.provide(Nd,Ct(B)),R.provide(Hh,c);const Y=R.unmount;Er.add(R),R.unmount=function(){Er.delete(R),Er.size<1&&(l=ss,V&&V(),V=null,c.value=ss,Mt=!1,ge=!1),Y()}}};return Pa}function Cr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function WN(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ri(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ri(l,c))||r.push(c))}return[n,s,r]}function kj(){return Ke(Nd)}const Vt={middleware:["auth"]},Ht={middleware:["auth"]},jt={middleware:["auth"]},Fm=[{name:"apply",path:"/apply",children:[],meta:{},alias:[],redirect:void 0,component:()=>be(()=>import("./apply.0d50967a.js"),["./apply.0d50967a.js","./backButton.dd1217ac.js","./VIcon.643e9184.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./color.4347dc26.js","./useRender.dd44c047.js","./VIcon.9957792f.css","./router.a9193777.js","./router.9bfde38d.css","./rounded.f9bd3dac.js","./group.715627b1.js","./dimensions.a29b2802.js","./position.e8174993.js","./VProgressLinear.14bb13fb.js","./VProgressLinear.c71ac71c.css","./resizeObserver.a48c6051.js","./backButton.def02653.css","./nuxt-link.6a6e083f.js","./layout.cccb4692.js","./vee-validate.esm.8548a3a3.js","./VCard.7c7f6f5b.js","./createSimpleFunctional.a108c35b.js","./VAvatar.51dc3611.js","./VImg.caa78565.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css","./VTextField.1c39bc00.js","./index.4b6653b4.js","./VTextField.b5e12f5c.css","./VContainer.52278e88.js"],import.meta.url).then(t=>t.default||t)},{name:"artifacts",path:"/artifacts",children:[],meta:{},alias:[],redirect:void 0,component:()=>be(()=>import("./artifacts.4f126ce2.js"),["./artifacts.4f126ce2.js","./BreadcrumbHeading.c506f289.js","./layout.cccb4692.js","./realms.data.6da3aeac.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./VImg.caa78565.js","./dimensions.a29b2802.js","./useRender.dd44c047.js","./VImg.fbbd1a36.css","./VIcon.643e9184.js","./color.4347dc26.js","./VIcon.9957792f.css","./VCard.7c7f6f5b.js","./createSimpleFunctional.a108c35b.js","./router.a9193777.js","./router.9bfde38d.css","./VAvatar.51dc3611.js","./rounded.f9bd3dac.js","./VAvatar.b72a6b57.css","./position.e8174993.js","./VProgressLinear.14bb13fb.js","./VProgressLinear.c71ac71c.css","./VCard.6b2e677e.css","./artifacts.ee01dabb.css"],import.meta.url).then(t=>t.default||t)},{name:"brainwash",path:"/brainwash",children:[],meta:{},alias:[],redirect:void 0,component:()=>be(()=>import("./brainwash.2028875a.js"),["./brainwash.2028875a.js","./layout.cccb4692.js","./nuxt-link.6a6e083f.js","./useRandomNumber.d50ddb30.js","./usePageAudio.22be2194.js","./howler.5070fb36.js","./useSiteStore.007c531e.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./VImg.caa78565.js","./dimensions.a29b2802.js","./useRender.dd44c047.js","./VImg.fbbd1a36.css"],import.meta.url).then(t=>t.default||t)},{name:"briefing",path:"/briefing",children:[],meta:{},alias:[],redirect:void 0,component:()=>be(()=>import("./briefing.1c97ab45.js"),["./briefing.1c97ab45.js","./BreadcrumbHeading.c506f289.js","./layout.cccb4692.js","./VCard.7c7f6f5b.js","./useRender.dd44c047.js","./createSimpleFunctional.a108c35b.js","./router.a9193777.js","./color.4347dc26.js","./router.9bfde38d.css","./VAvatar.51dc3611.js","./rounded.f9bd3dac.js","./VIcon.643e9184.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./VIcon.9957792f.css","./VImg.caa78565.js","./dimensions.a29b2802.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./position.e8174993.js","./VProgressLinear.14bb13fb.js","./VProgressLinear.c71ac71c.css","./VCard.6b2e677e.css","./briefing.20543051.css"],import.meta.url).then(t=>t.default||t)},{name:"debriefing",path:"/debriefing",children:[],meta:{},alias:[],redirect:void 0,component:()=>be(()=>import("./debriefing.5c29aad0.js"),["./debriefing.5c29aad0.js","./backButton.dd1217ac.js","./VIcon.643e9184.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./color.4347dc26.js","./useRender.dd44c047.js","./VIcon.9957792f.css","./router.a9193777.js","./router.9bfde38d.css","./rounded.f9bd3dac.js","./group.715627b1.js","./dimensions.a29b2802.js","./position.e8174993.js","./VProgressLinear.14bb13fb.js","./VProgressLinear.c71ac71c.css","./resizeObserver.a48c6051.js","./backButton.def02653.css","./layout.cccb4692.js","./useSiteStore.007c531e.js","./VCard.7c7f6f5b.js","./createSimpleFunctional.a108c35b.js","./VAvatar.51dc3611.js","./VImg.caa78565.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css","./VContainer.52278e88.js"],import.meta.url).then(t=>t.default||t)},{name:"hissSolve",path:"/hissSolve",children:[],meta:{},alias:[],redirect:void 0,component:()=>be(()=>import("./hissSolve.8b20e9fb.js"),[],import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",children:[],meta:{},alias:[],redirect:void 0,component:()=>be(()=>import("./index.5b0e4806.js"),["./index.5b0e4806.js","./layout.cccb4692.js","./nuxt-link.6a6e083f.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./VImg.caa78565.js","./dimensions.a29b2802.js","./useRender.dd44c047.js","./VImg.fbbd1a36.css","./index.ae8cda16.css"],import.meta.url).then(t=>t.default||t)},{name:"insights-realm",path:"/insights/:realm",children:[],meta:{},alias:[],redirect:void 0,component:()=>be(()=>import("./_realm_.25164b66.js"),["./_realm_.25164b66.js","./backButton.dd1217ac.js","./VIcon.643e9184.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./color.4347dc26.js","./useRender.dd44c047.js","./VIcon.9957792f.css","./router.a9193777.js","./router.9bfde38d.css","./rounded.f9bd3dac.js","./group.715627b1.js","./dimensions.a29b2802.js","./position.e8174993.js","./VProgressLinear.14bb13fb.js","./VProgressLinear.c71ac71c.css","./resizeObserver.a48c6051.js","./backButton.def02653.css","./layout.cccb4692.js","./realms.data.6da3aeac.js","./useClassifyRealm.52e7f0c4.js","./VImg.caa78565.js","./VImg.fbbd1a36.css","./_realm_.88926c05.css"],import.meta.url).then(t=>t.default||t)},{name:"login",path:"/login",children:[],meta:{},alias:[],redirect:void 0,component:()=>be(()=>import("./login.d3c2eea4.js"),["./login.d3c2eea4.js","./backButton.dd1217ac.js","./VIcon.643e9184.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./color.4347dc26.js","./useRender.dd44c047.js","./VIcon.9957792f.css","./router.a9193777.js","./router.9bfde38d.css","./rounded.f9bd3dac.js","./group.715627b1.js","./dimensions.a29b2802.js","./position.e8174993.js","./VProgressLinear.14bb13fb.js","./VProgressLinear.c71ac71c.css","./resizeObserver.a48c6051.js","./backButton.def02653.css","./nuxt-link.6a6e083f.js","./layout.cccb4692.js","./vee-validate.esm.8548a3a3.js","./VCard.7c7f6f5b.js","./createSimpleFunctional.a108c35b.js","./VAvatar.51dc3611.js","./VImg.caa78565.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css","./VTextField.1c39bc00.js","./index.4b6653b4.js","./VTextField.b5e12f5c.css","./VContainer.52278e88.js"],import.meta.url).then(t=>t.default||t)},{name:(Vt==null?void 0:Vt.name)??"operations-control",path:(Vt==null?void 0:Vt.path)??"/operations/control",children:[],meta:Vt||{},alias:(Vt==null?void 0:Vt.alias)||[],redirect:(Vt==null?void 0:Vt.redirect)||void 0,component:()=>be(()=>import("./control.4fd89509.js"),["./control.4fd89509.js","./backButton.dd1217ac.js","./VIcon.643e9184.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./color.4347dc26.js","./useRender.dd44c047.js","./VIcon.9957792f.css","./router.a9193777.js","./router.9bfde38d.css","./rounded.f9bd3dac.js","./group.715627b1.js","./dimensions.a29b2802.js","./position.e8174993.js","./VProgressLinear.14bb13fb.js","./VProgressLinear.c71ac71c.css","./resizeObserver.a48c6051.js","./backButton.def02653.css","./layout.cccb4692.js","./composables.2aab9bb2.js","./useRandomNumber.d50ddb30.js","./VContainer.52278e88.js"],import.meta.url).then(t=>t.default||t)},{name:"operations-realm-approval",path:"/operations/realm-approval",children:[],meta:{},alias:[],redirect:void 0,component:()=>be(()=>import("./realm-approval.c4e2c6e0.js"),["./realm-approval.c4e2c6e0.js","./backButton.dd1217ac.js","./VIcon.643e9184.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./color.4347dc26.js","./useRender.dd44c047.js","./VIcon.9957792f.css","./router.a9193777.js","./router.9bfde38d.css","./rounded.f9bd3dac.js","./group.715627b1.js","./dimensions.a29b2802.js","./position.e8174993.js","./VProgressLinear.14bb13fb.js","./VProgressLinear.c71ac71c.css","./resizeObserver.a48c6051.js","./backButton.def02653.css","./layout.cccb4692.js","./createSimpleFunctional.a108c35b.js","./VContainer.52278e88.js","./VCard.7c7f6f5b.js","./VAvatar.51dc3611.js","./VImg.caa78565.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css"],import.meta.url).then(t=>t.default||t)},{name:(Ht==null?void 0:Ht.name)??"operations-realm-management-realm",path:(Ht==null?void 0:Ht.path)??"/operations/realm-management/:realm",children:[],meta:Ht||{},alias:(Ht==null?void 0:Ht.alias)||[],redirect:(Ht==null?void 0:Ht.redirect)||void 0,component:()=>be(()=>import("./_realm_.8eec0312.js"),["./_realm_.8eec0312.js","./backButton.dd1217ac.js","./VIcon.643e9184.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./color.4347dc26.js","./useRender.dd44c047.js","./VIcon.9957792f.css","./router.a9193777.js","./router.9bfde38d.css","./rounded.f9bd3dac.js","./group.715627b1.js","./dimensions.a29b2802.js","./position.e8174993.js","./VProgressLinear.14bb13fb.js","./VProgressLinear.c71ac71c.css","./resizeObserver.a48c6051.js","./backButton.def02653.css","./layout.cccb4692.js","./realms.data.6da3aeac.js","./useClassifyRealm.52e7f0c4.js","./VImg.caa78565.js","./VImg.fbbd1a36.css","./VTextField.1c39bc00.js","./index.4b6653b4.js","./VTextField.b5e12f5c.css","./VTextarea.43ff8e90.js","./VChip.8ca8a518.js","./VAvatar.51dc3611.js","./VAvatar.b72a6b57.css","./VChip.23234a79.css","./VTextarea.05ef1b2f.css","./VCard.7c7f6f5b.js","./createSimpleFunctional.a108c35b.js","./VCard.6b2e677e.css","./_realm_.fcae6618.css"],import.meta.url).then(t=>t.default||t)},{name:(jt==null?void 0:jt.name)??"operations-realm-management",path:(jt==null?void 0:jt.path)??"/operations/realm-management",children:[],meta:jt||{},alias:(jt==null?void 0:jt.alias)||[],redirect:(jt==null?void 0:jt.redirect)||void 0,component:()=>be(()=>import("./index.e3fb6dd9.js"),["./index.e3fb6dd9.js","./layout.cccb4692.js","./realms.data.6da3aeac.js","./useClassifyRealm.52e7f0c4.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./VContainer.52278e88.js","./useRender.dd44c047.js","./VIcon.643e9184.js","./color.4347dc26.js","./VIcon.9957792f.css","./VImg.caa78565.js","./dimensions.a29b2802.js","./VImg.fbbd1a36.css"],import.meta.url).then(t=>t.default||t)},{name:"operations-realm-submission",path:"/operations/realm-submission",children:[],meta:{},alias:[],redirect:void 0,component:()=>be(()=>import("./realm-submission.91788579.js"),["./realm-submission.91788579.js","./backButton.dd1217ac.js","./VIcon.643e9184.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./color.4347dc26.js","./useRender.dd44c047.js","./VIcon.9957792f.css","./router.a9193777.js","./router.9bfde38d.css","./rounded.f9bd3dac.js","./group.715627b1.js","./dimensions.a29b2802.js","./position.e8174993.js","./VProgressLinear.14bb13fb.js","./VProgressLinear.c71ac71c.css","./resizeObserver.a48c6051.js","./backButton.def02653.css","./layout.cccb4692.js","./VTextField.1c39bc00.js","./index.4b6653b4.js","./VImg.caa78565.js","./VImg.fbbd1a36.css","./VTextField.b5e12f5c.css","./hydration.3ddcab4f.js","./createSimpleFunctional.a108c35b.js","./VAvatar.51dc3611.js","./VAvatar.b72a6b57.css","./VChip.8ca8a518.js","./VChip.23234a79.css","./VTextarea.43ff8e90.js","./VTextarea.05ef1b2f.css","./VContainer.52278e88.js","./realm-submission.51849517.css"],import.meta.url).then(t=>t.default||t)},{name:"operator-exam",path:"/operator-exam",children:[],meta:{},alias:[],redirect:void 0,component:()=>be(()=>import("./operator-exam.ac4d2932.js"),["./operator-exam.ac4d2932.js","./layout.cccb4692.js","./usePlaySound.dccf20a1.js","./howler.5070fb36.js","./useSiteStore.007c531e.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./VProgressLinear.14bb13fb.js","./rounded.f9bd3dac.js","./color.4347dc26.js","./useRender.dd44c047.js","./VProgressLinear.c71ac71c.css","./VContainer.52278e88.js"],import.meta.url).then(t=>t.default||t)},{name:"realms.data",path:"/realms.data",children:[],meta:{},alias:[],redirect:void 0,component:()=>be(()=>import("./realms.data.6da3aeac.js"),[],import.meta.url).then(t=>t.default||t)},{name:"realms",path:"/realms",children:[],meta:{},alias:[],redirect:void 0,component:()=>be(()=>import("./realms.61eb0073.js"),["./realms.61eb0073.js","./BreadcrumbHeading.c506f289.js","./nuxt-link.6a6e083f.js","./layout.cccb4692.js","./realms.data.6da3aeac.js","./useClassifyRealm.52e7f0c4.js","./useRandomNumber.d50ddb30.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./VChip.8ca8a518.js","./group.715627b1.js","./router.a9193777.js","./color.4347dc26.js","./router.9bfde38d.css","./useRender.dd44c047.js","./index.4b6653b4.js","./rounded.f9bd3dac.js","./VIcon.643e9184.js","./VIcon.9957792f.css","./VAvatar.51dc3611.js","./VImg.caa78565.js","./dimensions.a29b2802.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VChip.23234a79.css","./realms.4d35d55a.css"],import.meta.url).then(t=>t.default||t)}],qN={scrollBehavior(t,e,n){const s=ft();let r=n||void 0;if(!r&&e&&t&&t.meta.scrollToTop!==!1&&KN(e,t)&&(r={left:0,top:0}),t.path===e.path){if(e.hash&&!t.hash)return{left:0,top:0};if(t.hash)return{el:t.hash,top:Um(t.hash)}}const i=a=>!!(a.meta.pageTransition??$h),o=i(e)&&i(t)?"page:transition:finish":"page:finish";return new Promise(a=>{s.hooks.hookOnce(o,async()=>{await Ds(),t.hash&&(r={el:t.hash,top:Um(t.hash)}),a(r)})})}};function Um(t){try{const e=document.querySelector(t);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}function KN(t,e){const n=t.matched[0]===e.matched[0];return!!(!n||n&&JSON.stringify(t.params)!==JSON.stringify(e.params))}const zN={},Ln={...zN,...qN},GN=zA(async t=>{var c;let e,n;if(!((c=t.meta)!=null&&c.validate))return;const s=ft(),r=Nl();if(([e,n]=Dh(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=Ww({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`}),a=r.beforeResolve(l=>{if(a(),l===t){const u=r.afterEach(async()=>{u(),await $n(s,Dr,[o]),window.history.pushState({},"",t.fullPath)});return!1}})}),QN=[GN],fo={auth:()=>be(()=>import("./auth.42bb3f4d.js"),["./auth.42bb3f4d.js","./composables.2aab9bb2.js"],import.meta.url)};function YN(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){const a=r.includes(t.slice(i))?t.slice(i).length:1;let c=r.slice(a);return c[0]!=="/"&&(c="/"+c),lm(c,"")}return lm(n,t)+s+r}const XN=yn(async t=>{var p,y;let e,n,s=Uw().app.baseURL;Ln.hashMode&&!s.includes("#")&&(s+="#");const r=((p=Ln.history)==null?void 0:p.call(Ln,s))??(Ln.hashMode?oN(s):sE(s)),i=((y=Ln.routes)==null?void 0:y.call(Ln,Fm))??Fm,o=YN(s,window.location),a=jN({...Ln,history:r,routes:i});t.vueApp.use(a);const c=So(a.currentRoute.value);a.afterEach((E,v)=>{c.value=v}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const l=So(a.resolve(o)),u=()=>{l.value=a.currentRoute.value};t.hook("page:finish",u),a.afterEach((E,v)=>{var g,_,b,C;((_=(g=E.matched[0])==null?void 0:g.components)==null?void 0:_.default)===((C=(b=v.matched[0])==null?void 0:b.components)==null?void 0:C.default)&&u()});const h={};for(const E in l.value)h[E]=Ee(()=>l.value[E]);t._route=Ct(h),t._middleware=t._middleware||{global:[],named:{}};const f=Rl();try{[e,n]=Dh(()=>a.isReady()),await e,n()}catch(E){[e,n]=Dh(()=>$n(t,Dr,[E])),await e,n()}const d=qA("_layout");return a.beforeEach(async(E,v)=>{var _;E.meta=Ct(E.meta),t.isHydrating&&d.value&&!rr(E.meta.layout)&&(E.meta.layout=d.value),t._processingMiddleware=!0;const g=new Set([...QN,...t._middleware.global]);for(const b of E.matched){const C=b.meta.middleware;if(C)if(Array.isArray(C))for(const A of C)g.add(A);else g.add(C)}for(const b of g){const C=typeof b=="string"?t._middleware.named[b]||await((_=fo[b])==null?void 0:_.call(fo).then(S=>S.default||S)):b;if(!C)throw new Error(`Unknown route middleware: '${b}'.`);const A=await $n(t,C,[E,v]);if(!t.payload.serverRendered&&t.isHydrating&&(A===!1||A instanceof Error)){const S=A||Uh({statusCode:404,statusMessage:`Page Not Found: ${o}`});return await $n(t,Dr,[S]),!1}if(A||A===!1)return A}}),a.afterEach(async E=>{delete t._processingMiddleware,!t.isHydrating&&f.value&&await $n(t,jA),E.matched.length===0&&await $n(t,Dr,[Uh({statusCode:404,fatal:!1,statusMessage:`Page not found: ${E.fullPath}`})])}),t.hooks.hookOnce("app:created",async()=>{try{await a.replace({...a.resolve(o),name:void 0,force:!0})}catch(E){await $n(t,Dr,[E])}}),{provide:{router:a}}}),Wa={admin:()=>be(()=>import("./admin.638a6003.js"),["./admin.638a6003.js","./backButton.dd1217ac.js","./VIcon.643e9184.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./color.4347dc26.js","./useRender.dd44c047.js","./VIcon.9957792f.css","./router.a9193777.js","./router.9bfde38d.css","./rounded.f9bd3dac.js","./group.715627b1.js","./dimensions.a29b2802.js","./position.e8174993.js","./VProgressLinear.14bb13fb.js","./VProgressLinear.c71ac71c.css","./resizeObserver.a48c6051.js","./backButton.def02653.css","./usePageAudio.22be2194.js","./howler.5070fb36.js","./useSiteStore.007c531e.js","./VApp.7858491b.js","./VApp.a04bdf69.css","./VContainer.52278e88.js","./VMain.abdfdf33.js","./VMain.0dd5ea1d.css","./VNoSsr.a061ef7b.js","./hydration.3ddcab4f.js","./admin.c3c815fb.css"],import.meta.url).then(t=>t.default||t),default:()=>be(()=>import("./default.63871af8.js"),["./default.63871af8.js","./backButton.dd1217ac.js","./VIcon.643e9184.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./color.4347dc26.js","./useRender.dd44c047.js","./VIcon.9957792f.css","./router.a9193777.js","./router.9bfde38d.css","./rounded.f9bd3dac.js","./group.715627b1.js","./dimensions.a29b2802.js","./position.e8174993.js","./VProgressLinear.14bb13fb.js","./VProgressLinear.c71ac71c.css","./resizeObserver.a48c6051.js","./backButton.def02653.css","./usePageAudio.22be2194.js","./howler.5070fb36.js","./useSiteStore.007c531e.js","./VApp.7858491b.js","./VApp.a04bdf69.css","./VContainer.52278e88.js","./VMain.abdfdf33.js","./VMain.0dd5ea1d.css","./VImg.caa78565.js","./VImg.fbbd1a36.css","./VNoSsr.a061ef7b.js","./hydration.3ddcab4f.js","./default.d780dcbd.css"],import.meta.url).then(t=>t.default||t),landing:()=>be(()=>import("./landing.e94d6836.js"),["./landing.e94d6836.js","./usePageAudio.22be2194.js","./howler.5070fb36.js","./useSiteStore.007c531e.js","./VApp.7858491b.js","./resizeObserver.a48c6051.js","./useRender.dd44c047.js","./VApp.a04bdf69.css","./VNoSsr.a061ef7b.js","./hydration.3ddcab4f.js","./landing.be13d85f.css"],import.meta.url).then(t=>t.default||t),"sub-admin":()=>be(()=>import("./sub-admin.2e5cf8a5.js"),["./sub-admin.2e5cf8a5.js","./backButton.dd1217ac.js","./VIcon.643e9184.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./color.4347dc26.js","./useRender.dd44c047.js","./VIcon.9957792f.css","./router.a9193777.js","./router.9bfde38d.css","./rounded.f9bd3dac.js","./group.715627b1.js","./dimensions.a29b2802.js","./position.e8174993.js","./VProgressLinear.14bb13fb.js","./VProgressLinear.c71ac71c.css","./resizeObserver.a48c6051.js","./backButton.def02653.css","./usePageAudio.22be2194.js","./howler.5070fb36.js","./useSiteStore.007c531e.js","./VApp.7858491b.js","./VApp.a04bdf69.css","./VContainer.52278e88.js","./VMain.abdfdf33.js","./VMain.0dd5ea1d.css","./VNoSsr.a061ef7b.js","./hydration.3ddcab4f.js","./sub-admin.85444c78.css"],import.meta.url).then(t=>t.default||t)},JN=yn(()=>{const t=ft(),e=Nl();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var r;const s=(r=n==null?void 0:n.meta)==null?void 0:r.layout;s&&typeof Wa[s]=="function"&&await Wa[s]()})}),t.hooks.hook("link:prefetch",n=>{var o,a,c,l;if(sa(n))return;const s=e.resolve(n);if(!s)return;const r=(o=s==null?void 0:s.meta)==null?void 0:o.layout;let i=Array.isArray((a=s==null?void 0:s.meta)==null?void 0:a.middleware)?(c=s==null?void 0:s.meta)==null?void 0:c.middleware:[(l=s==null?void 0:s.meta)==null?void 0:l.middleware];i=i.filter(u=>typeof u=="string");for(const u of i)typeof fo[u]=="function"&&fo[u]();r&&typeof Wa[r]=="function"&&Wa[r]()})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(t,e){if(!t)throw bi(e)},bi=function(t){return new Error("Firebase Database ("+dE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ZN=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Pl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ZN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new eO;const f=i<<2|a>>4;if(s.push(f),l!==64){const d=a<<4&240|l>>2;if(s.push(d),h!==64){const p=l<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gE=function(t){const e=pE(t);return Pl.encodeByteArray(e,!0)},Dc=function(t){return gE(t).replace(/\./g,"")},xc=function(t){try{return Pl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(t){return mE(void 0,t)}function mE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!nO(n)||(t[n]=mE(t[n],e[n]));return t}function nO(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=()=>yE().__FIREBASE_DEFAULTS__,rO=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xc(t[1]);return e&&JSON.parse(e)},Od=()=>{try{return sO()||rO()||iO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_E=t=>{var e,n;return(n=(e=Od())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},oO=t=>{const e=_E(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},aO=()=>{var t;return(t=Od())===null||t===void 0?void 0:t.config},vE=t=>{var e;return(e=Od())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Dc(JSON.stringify(n)),Dc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function lO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uO(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EE(){return dE.NODE_ADMIN===!0}function Dd(){try{return typeof indexedDB=="object"}catch{return!1}}function hO(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO="FirebaseError";class Dn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=fO,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?dO(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Dn(r,a,s)}}function dO(t,e){return t.replace(pO,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const pO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t){return JSON.parse(t)}function lt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=Po(xc(i[0])||""),n=Po(xc(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},gO=function(t){const e=xd(t).claims;return typeof e=="object"&&e.hasOwnProperty("iat")?e.iat:null},mO=function(t){const e=xd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},yO=function(t){const e=xd(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function oi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function jh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mc(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function Lc(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if($m(i)&&$m(o)){if(!Lc(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function $m(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ji(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Zi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^i&(o^a),u=1518500249):(l=i^o^a,u=1859775393):h<60?(l=i&o|a&(i|o),u=2400959708):(l=i^o^a,u=3395469782);const f=(r<<5|r>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function vO(t,e){const n=new wO(t,e);return n.subscribe.bind(n)}class wO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");EO(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Lu),r.error===void 0&&(r.error=Lu),r.complete===void 0&&(r.complete=Lu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lu(){}function bO(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,U(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Dl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=1e3,SO=2,kO=4*60*60*1e3,AO=.5;function RO(t,e=IO,n=SO){const s=e*Math.pow(n,t),r=Math.round(AO*s*(Math.random()-.5)*2);return Math.min(kO,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){return t&&t._delegate?t._delegate:t}class pn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new As;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PO(e))try{this.getOrInitializeService({instanceIdentifier:Vs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vs){return this.instances.has(e)}getOptions(e=Vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:OO(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Vs){return this.component?this.component.multipleInstances?e:Vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OO(t){return t===Vs?void 0:t}function PO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new NO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const xO={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},MO=ve.INFO,LO={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},FO=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=LO[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ia{constructor(e){this.name=e,this._logLevel=MO,this._logHandler=FO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const UO=(t,e)=>e.some(n=>t instanceof n);let Bm,Vm;function $O(){return Bm||(Bm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BO(){return Vm||(Vm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bE=new WeakMap,Wh=new WeakMap,TE=new WeakMap,Fu=new WeakMap,Md=new WeakMap;function VO(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ws(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bE.set(n,t)}).catch(()=>{}),Md.set(e,t),e}function HO(t){if(Wh.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Wh.set(t,e)}let qh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||TE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ws(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jO(t){qh=t(qh)}function WO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Uu(this),e,...n);return TE.set(s,e.sort?e.sort():[e]),ws(s)}:BO().includes(t)?function(...e){return t.apply(Uu(this),e),ws(bE.get(this))}:function(...e){return ws(t.apply(Uu(this),e))}}function qO(t){return typeof t=="function"?WO(t):(t instanceof IDBTransaction&&HO(t),UO(t,$O())?new Proxy(t,qh):t)}function ws(t){if(t instanceof IDBRequest)return VO(t);if(Fu.has(t))return Fu.get(t);const e=qO(t);return e!==t&&(Fu.set(t,e),Md.set(e,t)),e}const Uu=t=>Md.get(t);function KO(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=ws(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ws(o.result),c.oldVersion,c.newVersion,ws(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const zO=["get","getKey","getAll","getAllKeys","count"],GO=["put","add","delete","clear"],$u=new Map;function Hm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($u.get(e))return $u.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=GO.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||zO.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return $u.set(e,i),i}jO(t=>({...t,get:(e,n,s)=>Hm(e,n)||t.get(e,n,s),has:(e,n)=>!!Hm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YO(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function YO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kh="@firebase/app",jm="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new ia("@firebase/app"),XO="@firebase/app-compat",JO="@firebase/analytics-compat",ZO="@firebase/analytics",eP="@firebase/app-check-compat",tP="@firebase/app-check",nP="@firebase/auth",sP="@firebase/auth-compat",rP="@firebase/database",iP="@firebase/database-compat",oP="@firebase/functions",aP="@firebase/functions-compat",cP="@firebase/installations",lP="@firebase/installations-compat",uP="@firebase/messaging",hP="@firebase/messaging-compat",fP="@firebase/performance",dP="@firebase/performance-compat",pP="@firebase/remote-config",gP="@firebase/remote-config-compat",mP="@firebase/storage",yP="@firebase/storage-compat",_P="@firebase/firestore",vP="@firebase/firestore-compat",wP="firebase",EP="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="[DEFAULT]",bP={[Kh]:"fire-core",[XO]:"fire-core-compat",[ZO]:"fire-analytics",[JO]:"fire-analytics-compat",[tP]:"fire-app-check",[eP]:"fire-app-check-compat",[nP]:"fire-auth",[sP]:"fire-auth-compat",[rP]:"fire-rtdb",[iP]:"fire-rtdb-compat",[oP]:"fire-fn",[aP]:"fire-fn-compat",[cP]:"fire-iid",[lP]:"fire-iid-compat",[uP]:"fire-fcm",[hP]:"fire-fcm-compat",[fP]:"fire-perf",[dP]:"fire-perf-compat",[pP]:"fire-rc",[gP]:"fire-rc-compat",[mP]:"fire-gcs",[yP]:"fire-gcs-compat",[_P]:"fire-fst",[vP]:"fire-fst-compat","fire-js":"fire-js",[wP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=new Map,Gh=new Map;function TP(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rn(t){const e=t.name;if(Gh.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;Gh.set(e,t);for(const n of Fc.values())TP(n,t);return!0}function Ii(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Es=new Ti("app","Firebase",CP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Es.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=EP;function CE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:zh,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Es.create("bad-app-name",{appName:String(r)});if(n||(n=aO()),!n)throw Es.create("no-options");const i=Fc.get(r);if(i){if(Lc(n,i.options)&&Lc(s,i.config))return i;throw Es.create("duplicate-app",{appName:r})}const o=new DO(r);for(const c of Gh.values())o.addComponent(c);const a=new IP(n,s,o);return Fc.set(r,a),a}function xl(t=zh){const e=Fc.get(t);if(!e&&t===zh)return CE();if(!e)throw Es.create("no-app",{appName:t});return e}function qt(t,e,n){var s;let r=(s=bP[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(a.join(" "));return}Rn(new pn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP="firebase-heartbeat-database",kP=1,Do="firebase-heartbeat-store";let Bu=null;function IE(){return Bu||(Bu=KO(SP,kP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Do)}}}).catch(t=>{throw Es.create("idb-open",{originalErrorMessage:t.message})})),Bu}async function AP(t){try{return(await IE()).transaction(Do).objectStore(Do).get(SE(t))}catch(e){if(e instanceof Dn)ir.warn(e.message);else{const n=Es.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(n.message)}}}async function Wm(t,e){try{const s=(await IE()).transaction(Do,"readwrite");return await s.objectStore(Do).put(e,SE(t)),s.done}catch(n){if(n instanceof Dn)ir.warn(n.message);else{const s=Es.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(s.message)}}}function SE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=1024,NP=30*24*60*60*1e3;class OP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DP(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=NP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qm(),{heartbeatsToSend:n,unsentEntries:s}=PP(this._heartbeatsCache.heartbeats),r=Dc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function qm(){return new Date().toISOString().substring(0,10)}function PP(t,e=RP){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Km(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Km(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class DP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dd()?hO().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await AP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Km(t){return Dc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(t){Rn(new pn("platform-logger",e=>new QO(e),"PRIVATE")),Rn(new pn("heartbeat",e=>new OP(e),"PRIVATE")),qt(Kh,jm,t),qt(Kh,jm,"esm2017"),qt("fire-js","")}xP("");var MP="firebase",LP="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(MP,LP,"app");const FP=yn(()=>{const t=kd();return{provide:{firebaseApp:CE(t.firebaseConfig)}}});function Ld(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function kE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UP=kE,AE=new Ti("auth","Firebase",kE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=new ia("@firebase/auth");function dc(t,...e){zm.logLevel<=ve.ERROR&&zm.error(`Auth (${gr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,...e){throw Fd(t,...e)}function Sn(t,...e){return Fd(t,...e)}function $P(t,e,n){const s=Object.assign(Object.assign({},UP()),{[e]:n});return new Ti("auth","Firebase",s).create(e,{appName:t.name})}function Fd(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return AE.create(t,...e)}function te(t,e,...n){if(!t)throw Fd(e,...n)}function Bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dc(e),new Error(e)}function zn(t,e){t||Bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=new Map;function Vn(t){zn(t instanceof Function,"Expected a class definition");let e=Gm.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gm.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(t,e){const n=Ii(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Lc(i,e??{}))return r;gn(r,"already-initialized")}return n.initialize({options:e})}function VP(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function HP(){return Qm()==="http:"||Qm()==="https:"}function Qm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HP()||lO()||"connection"in navigator)?navigator.onLine:!0}function WP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=Pd()||wE()}get(){return jP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=new oa(3e4,6e4);function aa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Si(t,e,n,s,r={}){return NE(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Ci(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),RE.fetch()(OE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function NE(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},qP),e);try{const r=new zP(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw qa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw qa(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw qa(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw $P(t,u,l);gn(t,u)}}catch(r){if(r instanceof Dn)throw r;gn(t,"network-request-failed",{message:String(r)})}}async function ca(t,e,n,s,r={}){const i=await Si(t,e,n,s,r);return"mfaPendingCredential"in i&&gn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function OE(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ud(t.config,r):`${t.config.apiScheme}://${r}`}class zP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Sn(this.auth,"network-request-failed")),KP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qa(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Sn(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t,e){return Si(t,"POST","/v1/accounts:delete",e)}async function QP(t,e){return Si(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YP(t,e=!1){const n=xt(t),s=await n.getIdToken(e),r=$d(s);te(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:po(Vu(r.auth_time)),issuedAtTime:po(Vu(r.iat)),expirationTime:po(Vu(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Vu(t){return Number(t)*1e3}function $d(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return dc("JWT malformed, contained fewer than 3 sections"),null;try{const r=xc(n);return r?JSON.parse(r):(dc("Failed to decode base64 JWT payload"),null)}catch(r){return dc("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function XP(t){const e=$d(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Dn&&JP(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function JP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=po(this.lastLoginAt),this.creationTime=po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uc(t){var e;const n=t.auth,s=await t.getIdToken(),r=await ai(t,QP(n,{idToken:s}));te(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?nD(i.providerUserInfo):[],a=tD(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new PE(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function eD(t){const e=xt(t);await Uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tD(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function nD(t){return t.map(e=>{var{providerId:n}=e,s=Ld(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sD(t,e){const n=await NE(t,{},async()=>{const s=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=OE(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",RE.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):XP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return te(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await sD(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new xo;return s&&(te(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(te(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(te(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xo,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zs{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Ld(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new PE(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ai(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YP(this,e)}reload(){return eD(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Uc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ai(this,GP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,g=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:b,isAnonymous:C,providerData:A,stsTokenManager:S}=n;te(_&&S,e,"internal-error");const T=xo.fromJSON(this.name,S);te(typeof _=="string",e,"internal-error"),rs(h,e.name),rs(f,e.name),te(typeof b=="boolean",e,"internal-error"),te(typeof C=="boolean",e,"internal-error"),rs(d,e.name),rs(p,e.name),rs(y,e.name),rs(E,e.name),rs(v,e.name),rs(g,e.name);const M=new Zs({uid:_,auth:e,email:f,emailVerified:b,displayName:h,isAnonymous:C,photoURL:p,phoneNumber:d,tenantId:y,stsTokenManager:T,createdAt:v,lastLoginAt:g});return A&&Array.isArray(A)&&(M.providerData=A.map($=>Object.assign({},$))),E&&(M._redirectEventId=E),M}static async _fromIdTokenResponse(e,n,s=!1){const r=new xo;r.updateFromServerResponse(n);const i=new Zs({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Uc(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}DE.type="NONE";const Ym=DE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t,e,n){return`firebase:${t}:${e}:${n}`}class Wr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=pc(this.userKey,r.apiKey,i),this.fullPersistenceKey=pc("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Wr(Vn(Ym),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Vn(Ym);const o=pc(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Zs._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Wr(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Wr(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(LE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(UE(e))return"Blackberry";if($E(e))return"Webos";if(Bd(e))return"Safari";if((e.includes("chrome/")||ME(e))&&!e.includes("edge/"))return"Chrome";if(FE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function xE(t=It()){return/firefox\//i.test(t)}function Bd(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ME(t=It()){return/crios\//i.test(t)}function LE(t=It()){return/iemobile/i.test(t)}function FE(t=It()){return/android/i.test(t)}function UE(t=It()){return/blackberry/i.test(t)}function $E(t=It()){return/webos/i.test(t)}function Ml(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rD(t=It()){var e;return Ml(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iD(){return uO()&&document.documentMode===10}function BE(t=It()){return Ml(t)||FE(t)||$E(t)||UE(t)||/windows phone/i.test(t)||LE(t)}function oD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t,e=[]){let n;switch(t){case"Browser":n=Xm(It());break;case"Worker":n=`${Xm(It())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jm(this),this.idTokenSubscription=new Jm(this),this.beforeStateQueue=new aD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=AE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Wr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Uc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xt(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[Vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return te(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=VE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function la(t){return xt(t)}class Jm{constructor(e){this.auth=e,this.observer=null,this.addObserver=vO(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function lD(t,e,n){const s=la(t);te(s._canInitEmulator,s,"emulator-config-failed"),te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=HE(e),{host:o,port:a}=uD(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||hD()}function HE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uD(t){const e=HE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Zm(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Zm(o)}}}function Zm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bn("not implemented")}_getIdTokenResponse(e){return Bn("not implemented")}_linkToIdToken(e,n){return Bn("not implemented")}_getReauthenticationResolver(e){return Bn("not implemented")}}async function fD(t,e){return Si(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dD(t,e){return ca(t,"POST","/v1/accounts:signInWithPassword",aa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pD(t,e){return ca(t,"POST","/v1/accounts:signInWithEmailLink",aa(t,e))}async function gD(t,e){return ca(t,"POST","/v1/accounts:signInWithEmailLink",aa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends Vd{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Mo(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Mo(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return dD(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pD(e,{email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return fD(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gD(e,{idToken:n,email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(t,e){return ca(t,"POST","/v1/accounts:signInWithIdp",aa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD="http://localhost";class or extends Vd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Ld(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new or(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,qr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qr(e,n)}buildRequest(){const e={requestUri:mD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _D(t){const e=Ji(Zi(t)).link,n=e?Ji(Zi(e)).deep_link_id:null,s=Ji(Zi(t)).deep_link_id;return(s?Ji(Zi(s)).link:null)||s||n||e||t}class Hd{constructor(e){var n,s,r,i,o,a;const c=Ji(Zi(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=yD((r=c.mode)!==null&&r!==void 0?r:null);te(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=_D(e);try{return new Hd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.providerId=ki.PROVIDER_ID}static credential(e,n){return Mo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Hd.parseLink(n);return te(s,"argument-error"),Mo._fromEmailAndCode(e,s.code,s.tenantId)}}ki.PROVIDER_ID="password";ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends jE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends ua{constructor(){super("facebook.com")}static credential(e){return or._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ls.credential(e.oauthAccessToken)}catch{return null}}}ls.FACEBOOK_SIGN_IN_METHOD="facebook.com";ls.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends ua{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return or._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return us.credential(n,s)}catch{return null}}}us.GOOGLE_SIGN_IN_METHOD="google.com";us.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends ua{constructor(){super("github.com")}static credential(e){return or._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hs.credential(e.oauthAccessToken)}catch{return null}}}hs.GITHUB_SIGN_IN_METHOD="github.com";hs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends ua{constructor(){super("twitter.com")}static credential(e,n){return or._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return fs.credential(n,s)}catch{return null}}}fs.TWITTER_SIGN_IN_METHOD="twitter.com";fs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vD(t,e){return ca(t,"POST","/v1/accounts:signUp",aa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Zs._fromIdTokenResponse(e,s,r),o=ey(s);return new ar({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ey(s);return new ar({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ey(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c extends Dn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,$c.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new $c(e,n,s,r)}}function WE(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$c._fromErrorAndOperation(t,i,e,s):i})}async function wD(t,e,n=!1){const s=await ai(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ar._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ED(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await ai(t,WE(s,r,e,t),n);te(i.idToken,s,"internal-error");const o=$d(i.idToken);te(o,s,"internal-error");const{sub:a}=o;return te(t.uid===a,s,"user-mismatch"),ar._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&gn(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qE(t,e,n=!1){const s="signIn",r=await WE(t,s,e),i=await ar._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function bD(t,e){return qE(la(t),e)}async function Aj(t,e,n){const s=la(t),r=await vD(s,{returnSecureToken:!0,email:e,password:n}),i=await ar._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function Rj(t,e,n){return bD(xt(t),ki.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TD(t,e){return Si(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nj(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=xt(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ai(s,TD(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function KE(t,e,n,s){return xt(t).onIdTokenChanged(e,n,s)}function CD(t,e,n){return xt(t).beforeAuthStateChanged(e,n)}const Bc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bc,"1"),this.storage.removeItem(Bc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(){const t=It();return Bd(t)||Ml(t)}const SD=1e3,kD=10;class GE extends zE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ID()&&oD(),this.fallbackToPolling=BE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);iD()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,kD):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},SD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}GE.type="LOCAL";const AD=GE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE extends zE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}QE.type="SESSION";const YE=QE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ll(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await RD(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ll.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=jd("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){return window}function OD(t){kn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(){return typeof kn().WorkerGlobalScope<"u"&&typeof kn().importScripts=="function"}async function PD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xD(){return XE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="firebaseLocalStorageDb",MD=1,Vc="firebaseLocalStorage",ZE="fbase_key";class ha{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fl(t,e){return t.transaction([Vc],e?"readwrite":"readonly").objectStore(Vc)}function LD(){const t=indexedDB.deleteDatabase(JE);return new ha(t).toPromise()}function Yh(){const t=indexedDB.open(JE,MD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Vc,{keyPath:ZE})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Vc)?e(s):(s.close(),await LD(),e(await Yh()))})})}async function ty(t,e,n){const s=Fl(t,!0).put({[ZE]:e,value:n});return new ha(s).toPromise()}async function FD(t,e){const n=Fl(t,!1).get(e),s=await new ha(n).toPromise();return s===void 0?null:s.value}function ny(t,e){const n=Fl(t,!0).delete(e);return new ha(n).toPromise()}const UD=800,$D=3;class e0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>$D)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return XE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ll._getInstance(xD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PD(),!this.activeServiceWorker)return;this.sender=new ND(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yh();return await ty(e,Bc,"1"),await ny(e,Bc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ty(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>FD(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ny(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Fl(r,!1).getAll();return new ha(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}e0.type="LOCAL";const BD=e0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function HD(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Sn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",VD().appendChild(s)})}function jD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new oa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WD(t,e){return e?Vn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd extends Vd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qD(t){return qE(t.auth,new Wd(t),t.bypassAuthState)}function KD(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),ED(n,new Wd(t),t.bypassAuthState)}async function zD(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),wD(n,new Wd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qD;case"linkViaPopup":case"linkViaRedirect":return zD;case"reauthViaPopup":case"reauthViaRedirect":return KD;default:gn(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=new oa(2e3,1e4);class xr extends t0{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,GD.get())};e()}}xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD="pendingRedirect",gc=new Map;class YD extends t0{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=gc.get(this.auth._key());if(!e){try{const s=await XD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}gc.set(this.auth._key(),e)}return this.bypassAuthState||gc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XD(t,e){const n=e1(e),s=ZD(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function JD(t,e){gc.set(t._key(),e)}function ZD(t){return Vn(t._redirectPersistence)}function e1(t){return pc(QD,t.config.apiKey,t.name)}async function t1(t,e,n=!1){const s=la(t),r=WD(s,e),o=await new YD(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=10*60*1e3;class s1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!r1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!n0(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Sn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=n1&&this.cachedEventUids.clear(),this.cachedEventUids.has(sy(e))}saveEventToCache(e){this.cachedEventUids.add(sy(e)),this.lastProcessedEventTime=Date.now()}}function sy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function n0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function r1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return n0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(t,e={}){return Si(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,a1=/^https?/;async function c1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await i1(t);for(const n of e)try{if(l1(n))return}catch{}gn(t,"unauthorized-domain")}function l1(t){const e=Qh(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!a1.test(n))return!1;if(o1.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=new oa(3e4,6e4);function ry(){const t=kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function h1(t){return new Promise((e,n)=>{var s,r,i;function o(){ry(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ry(),n(Sn(t,"network-request-failed"))},timeout:u1.get()})}if(!((r=(s=kn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=kn().gapi)===null||i===void 0)&&i.load)o();else{const a=jD("iframefcb");return kn()[a]=()=>{gapi.load?o():n(Sn(t,"network-request-failed"))},HD(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw mc=null,e})}let mc=null;function f1(t){return mc=mc||h1(t),mc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=new oa(5e3,15e3),p1="__/auth/iframe",g1="emulator/auth/iframe",m1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},y1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _1(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ud(e,g1):`https://${t.config.authDomain}/${p1}`,s={apiKey:e.apiKey,appName:t.name,v:gr},r=y1.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ci(s).slice(1)}`}async function v1(t){const e=await f1(t),n=kn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:_1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:m1,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),a=kn().setTimeout(()=>{i(o)},d1.get());function c(){kn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},E1=500,b1=600,T1="_blank",C1="http://localhost";class iy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function I1(t,e,n,s=E1,r=b1){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},w1),{width:s.toString(),height:r.toString(),top:i,left:o}),l=It().toLowerCase();n&&(a=ME(l)?T1:n),xE(l)&&(e=e||C1,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(rD(l)&&a!=="_self")return S1(e||"",a),new iy(null);const h=window.open(e||"",a,u);te(h,t,"popup-blocked");try{h.focus()}catch{}return new iy(h)}function S1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="__/auth/handler",A1="emulator/auth/handler";function oy(t,e,n,s,r,i){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:gr,eventId:r};if(e instanceof jE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",jh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ua){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${R1(t)}?${Ci(a).slice(1)}`}function R1({config:t}){return t.emulator?Ud(t,A1):`https://${t.authDomain}/${k1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="webStorageSupport";class N1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=YE,this._completeRedirectFn=t1,this._overrideRedirectResult=JD}async _openPopup(e,n,s,r){var i;zn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=oy(e,n,s,Qh(),r);return I1(e,o,jd())}async _openRedirect(e,n,s,r){return await this._originValidation(e),OD(oy(e,n,s,Qh(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(zn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await v1(e),s=new s1(e);return n.register("authEvent",r=>(te(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hu,{type:Hu},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Hu];o!==void 0&&n(!!o),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=c1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return BE()||Bd()||Ml()}}const O1=N1;var ay="@firebase/auth",cy="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function x1(t){Rn(new pn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{te(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),te(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:VE(t)},u=new cD(a,c,l);return VP(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Rn(new pn("auth-internal",e=>{const n=la(e.getProvider("auth").getImmediate());return(s=>new P1(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(ay,cy,D1(t)),qt(ay,cy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1=5*60,L1=vE("authIdTokenMaxAge")||M1;let ly=null;const F1=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>L1)return;const r=n==null?void 0:n.token;ly!==r&&(ly=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function U1(t=xl()){const e=Ii(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BP(t,{popupRedirectResolver:O1,persistence:[BD,AD,YE]}),s=vE("authTokenSyncURL");if(s){const i=F1(s);CD(n,i,()=>i(n.currentUser)),KE(n,o=>i(o))}const r=_E("auth");return r&&lD(n,`http://${r}`),n}x1("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=new Map,s0={activated:!1,tokenObservers:[]},$1={initialized:!1,enabled:!1};function St(t){return Xh.get(t)||Object.assign({},s0)}function B1(t,e){return Xh.set(t,e),Xh.get(t)}function Ul(){return $1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="https://content-firebaseappcheck.googleapis.com/v1",V1="exchangeRecaptchaV3Token",H1="exchangeRecaptchaEnterpriseToken",j1="exchangeDebugToken",uy={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},W1=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n,s,r,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new As,await K1(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new As,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function K1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Ot=new Ti("appCheck","AppCheck",z1);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function r0(t){if(!St(t).activated)throw Ot.create("use-before-activation",{appName:t.name})}function Kd(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),s=Math.floor((e-n*3600*24)/3600),r=Math.floor((e-n*3600*24-s*3600)/60),i=e-n*3600*24-s*3600-r*60;let o="";return n&&(o+=Ka(n)+"d:"),s&&(o+=Ka(s)+"h:"),o+=Ka(r)+"m:"+Ka(i)+"s",o}function Ka(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zd({url:t,body:e},n){const s={"Content-Type":"application/json"},r=n.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&(s["X-Firebase-Client"]=h)}const i={method:"POST",body:JSON.stringify(e),headers:s};let o;try{o=await fetch(t,i)}catch(h){throw Ot.create("fetch-network-error",{originalErrorMessage:h==null?void 0:h.message})}if(o.status!==200)throw Ot.create("fetch-status-error",{httpStatus:o.status});let a;try{a=await o.json()}catch(h){throw Ot.create("fetch-parse-error",{originalErrorMessage:h==null?void 0:h.message})}const c=a.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw Ot.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const l=Number(c[1])*1e3,u=Date.now();return{token:a.token,expireTimeMillis:u+l,issuedAtTimeMillis:u}}function G1(t,e){const{projectId:n,appId:s,apiKey:r}=t.options;return{url:`${qd}/projects/${n}/apps/${s}:${V1}?key=${r}`,body:{recaptcha_v3_token:e}}}function Q1(t,e){const{projectId:n,appId:s,apiKey:r}=t.options;return{url:`${qd}/projects/${n}/apps/${s}:${H1}?key=${r}`,body:{recaptcha_enterprise_token:e}}}function Y1(t,e){const{projectId:n,appId:s,apiKey:r}=t.options;return{url:`${qd}/projects/${n}/apps/${s}:${j1}?key=${r}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="firebase-app-check-database",J1=1,Lo="firebase-app-check-store",i0="debug-token";let za=null;function o0(){return za||(za=new Promise((t,e)=>{try{const n=indexedDB.open(X1,J1);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;e(Ot.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(Lo,{keyPath:"compositeKey"})}}}catch(n){e(Ot.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),za)}function Z1(t){return c0(l0(t))}function ex(t,e){return a0(l0(t),e)}function tx(t){return a0(i0,t)}function nx(){return c0(i0)}async function a0(t,e){const s=(await o0()).transaction(Lo,"readwrite"),i=s.objectStore(Lo).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=c=>{o()},s.onerror=c=>{var l;a(Ot.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}async function c0(t){const n=(await o0()).transaction(Lo,"readonly"),r=n.objectStore(Lo).get(t);return new Promise((i,o)=>{r.onsuccess=a=>{const c=a.target.result;i(c?c.value:void 0)},n.onerror=a=>{var c;o(Ot.create("storage-get",{originalErrorMessage:(c=a.target.error)===null||c===void 0?void 0:c.message}))}})}function l0(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new ia("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(t){if(Dd()){let e;try{e=await Z1(t)}catch(n){Fo.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function ju(t,e){return Dd()?ex(t,e).catch(n=>{Fo.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function rx(){let t;try{t=await nx()}catch{}if(t)return t;{const e=CO();return tx(e).catch(n=>Fo.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(){return Ul().enabled}async function h0(){const t=Ul();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function ix(){const t=yE(),e=Ul();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new As;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(rx())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox={error:"UNKNOWN_ERROR"};function ax(t){return Pl.encodeString(JSON.stringify(t),!1)}async function Jh(t,e=!1){const n=t.app;r0(n);const s=St(n);let r=s.token,i;if(r&&!Mr(r)&&(s.token=void 0,r=void 0),!r){const c=await s.cachedTokenPromise;c&&(Mr(c)?r=c:await ju(n,void 0))}if(!e&&r&&Mr(r))return{token:r.token};let o=!1;if(u0()){s.exchangeTokenPromise||(s.exchangeTokenPromise=zd(Y1(n,await h0()),t.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),o=!0);const c=await s.exchangeTokenPromise;return await ju(n,c),s.token=c,{token:c.token}}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),r=await St(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Fo.warn(c.message):Fo.error(c),i=c}let a;return r?i?Mr(r)?a={token:r.token,internalError:i}:a=fy(i):(a={token:r.token},s.token=r,await ju(n,r)):a=fy(i),o&&f0(n,a),a}function Gd(t,e,n,s){const{app:r}=t,i=St(r),o={next:n,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Mr(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),hy(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>hy(t))}function Qd(t,e){const n=St(t),s=n.tokenObservers.filter(r=>r.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function hy(t){const{app:e}=t,n=St(e);let s=n.tokenRefresher;s||(s=cx(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function cx(t){const{app:e}=t;return new q1(async()=>{const n=St(e);let s;if(n.token?s=await Jh(t,!0):s=await Jh(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=St(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},uy.RETRIAL_MIN_WAIT,uy.RETRIAL_MAX_WAIT)}function f0(t,e){const n=St(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Mr(t){return t.expireTimeMillis-Date.now()>0}function fy(t){return{token:ax(ox),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=St(this.app);for(const n of e)Qd(this.app,n.next);return Promise.resolve()}}function ux(t,e){return new lx(t,e)}function hx(t){return{getToken:e=>Jh(t,e),addTokenListener:e=>Gd(t,"INTERNAL",e),removeTokenListener:e=>Qd(t.app,e)}}const fx="@firebase/app-check",dx="0.6.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px="https://www.google.com/recaptcha/api.js",gx="https://www.google.com/recaptcha/enterprise.js";function mx(t,e){const n=new As,s=St(t);s.reCAPTCHAState={initialized:n};const r=d0(t),i=Hc(!1);return i?jc(t,e,i,r,n):vx(()=>{const o=Hc(!1);if(!o)throw new Error("no recaptcha");jc(t,e,o,r,n)}),n.promise}function yx(t,e){const n=new As,s=St(t);s.reCAPTCHAState={initialized:n};const r=d0(t),i=Hc(!0);return i?jc(t,e,i,r,n):wx(()=>{const o=Hc(!0);if(!o)throw new Error("no recaptcha");jc(t,e,o,r,n)}),n.promise}function jc(t,e,n,s,r){n.ready(()=>{_x(t,e,n,s),r.resolve(n)})}function d0(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function p0(t){r0(t);const n=await St(t).reCAPTCHAState.initialized.promise;return new Promise((s,r)=>{const i=St(t).reCAPTCHAState;n.ready(()=>{s(n.execute(i.widgetId,{action:"fire_app_check"}))})})}function _x(t,e,n,s){const r=n.render(s,{sitekey:e,size:"invisible"}),i=St(t);i.reCAPTCHAState=Object.assign(Object.assign({},i.reCAPTCHAState),{widgetId:r})}function vx(t){const e=document.createElement("script");e.src=px,e.onload=t,document.head.appendChild(e)}function wx(t){const e=document.createElement("script");e.src=gx,e.onload=t,document.head.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n;m0(this._throttleData);const s=await p0(this._app).catch(i=>{throw Ot.create("recaptcha-error")});let r;try{r=await zd(G1(this._app,s),this._heartbeatServiceProvider)}catch(i){throw!((e=i.code)===null||e===void 0)&&e.includes("fetch-status-error")?(this._throttleData=g0(Number((n=i.customData)===null||n===void 0?void 0:n.httpStatus),this._throttleData),Ot.create("throttled",{time:Kd(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):i}return this._throttleData=null,r}initialize(e){this._app=e,this._heartbeatServiceProvider=Ii(e,"heartbeat"),mx(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Yd?this._siteKey===e._siteKey:!1}}class Xd{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n;m0(this._throttleData);const s=await p0(this._app).catch(i=>{throw Ot.create("recaptcha-error")});let r;try{r=await zd(Q1(this._app,s),this._heartbeatServiceProvider)}catch(i){throw!((e=i.code)===null||e===void 0)&&e.includes("fetch-status-error")?(this._throttleData=g0(Number((n=i.customData)===null||n===void 0?void 0:n.httpStatus),this._throttleData),Ot.create("throttled",{time:Kd(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):i}return this._throttleData=null,r}initialize(e){this._app=e,this._heartbeatServiceProvider=Ii(e,"heartbeat"),yx(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Xd?this._siteKey===e._siteKey:!1}}class Jd{constructor(e){this._customProviderOptions=e}async getToken(){const e=await this._customProviderOptions.getToken(),n=gO(e.token),s=n!==null&&n<Date.now()&&n>0?n*1e3:Date.now();return Object.assign(Object.assign({},e),{issuedAtTimeMillis:s})}initialize(e){this._app=e}isEqual(e){return e instanceof Jd?this._customProviderOptions.getToken.toString()===e._customProviderOptions.getToken.toString():!1}}function g0(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+W1,httpStatus:t};{const n=e?e.backoffCount:0,s=RO(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+s,httpStatus:t}}}function m0(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw Ot.create("throttled",{time:Kd(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(t=xl(),e){t=xt(t);const n=Ii(t,"app-check");if(Ul().initialized||ix(),u0()&&h0().then(r=>console.log(`App Check debug token: ${r}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&i.provider.isEqual(e.provider))return r;throw Ot.create("already-initialized",{appName:t.name})}const s=n.initialize({options:e});return bx(t,e.provider,e.isTokenAutoRefreshEnabled),St(t).isTokenAutoRefreshEnabled&&Gd(s,"INTERNAL",()=>{}),s}function bx(t,e,n){const s=B1(t,Object.assign({},s0));s.activated=!0,s.provider=e,s.cachedTokenPromise=sx(t).then(r=>(r&&Mr(r)&&(s.token=r,f0(t,{token:r.token})),r)),s.isTokenAutoRefreshEnabled=n===void 0?t.automaticDataCollectionEnabled:n,s.provider.initialize(t)}function Tx(t,e,n,s){let r=()=>{},i=()=>{};return e.next!=null?r=e.next.bind(e):r=e,e.error!=null?i=e.error.bind(e):n&&(i=n),Gd(t,"EXTERNAL",r,i),()=>Qd(t.app,r)}const Cx="app-check",dy="app-check-internal";function Ix(){Rn(new pn(Cx,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return ux(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(dy).initialize()})),Rn(new pn(dy,t=>{const e=t.getProvider("app-check").getImmediate();return hx(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),qt(fx,dx)}Ix();const y0=Symbol("firebaseApp");function $l(t){return $t()&&Ke(y0,null)||xl(t)}const Cn=()=>{},Sx=typeof window<"u";function Zd(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function kx(t,e,n){const s=(""+e).split("."),r=s.pop(),i=s.reduce((o,a)=>o&&o[a],t);if(i!=null)return Array.isArray(i)?i.splice(Number(r),1,n):i[r]=n}function mr(t){return!!t&&typeof t=="object"}const Ax=Object.prototype;function Rx(t){return mr(t)&&Object.getPrototypeOf(t)===Ax}function ep(t){return mr(t)&&t.type==="document"}function _0(t){return mr(t)&&t.type==="collection"}function Nx(t){return ep(t)||_0(t)}function Ox(t){return mr(t)&&t.type==="query"}function Px(t){return mr(t)&&"ref"in t}function Dx(t){return mr(t)&&typeof t.bucket=="string"}function xx(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function Mx(){return!!($t()&&Ke(vw,null))}const Ga=new WeakMap;function v0(t,e){if(!Ga.has(t)){const n=_l(!0);Ga.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),Ga.delete(t)}}return Ga.get(t)}const Lx=new WeakMap,Qa=new WeakMap;function w0(t){const e=$l(t);if(!Qa.has(e)){let n;const r=[new Promise(i=>{n=i}),i=>{Qa.set(e,i),n(i.value)}];Qa.set(e,r)}return Qa.get(e)}function Oj(t){const e=w0(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function Fx(t,e){const n=U1(e);KE(n,s=>{const r=w0();t.value=s,Array.isArray(r)&&r[1](t)})}const Ux=Symbol("app-check-token");function $x(t){return(e,n)=>{if(!Sx)return;const s=v0(e,n).run(()=>xe());n.provide(Ux,s),t.debug&&(self.FIREBASE_APPCHECK_DEBUG_TOKEN=t.debug);const r=Ex(e,t);Tx(r,i=>{s.value=i.token}),Bx.set(e,r)}}const Bx=new WeakMap,py="@firebase/database",gy="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E0="";function Vx(t){E0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),lt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Po(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Zn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Hx(e)}}catch{}return new jx},zs=b0("localStorage"),Zh=b0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new ia("@firebase/database"),Wx=function(){let t=1;return function(){return t++}}(),T0=function(t){const e=TO(t),n=new _O;n.update(e);const s=n.digest();return Pl.encodeByteArray(s)},fa=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=fa.apply(null,s):typeof s=="object"?e+=lt(s):e+=s,e+=" "}return e};let er=null,my=!0;const qx=function(t,e){U(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Kr.logLevel=ve.VERBOSE,er=Kr.log.bind(Kr),e&&Zh.set("logging_enabled",!0)):typeof t=="function"?er=t:(er=null,Zh.remove("logging_enabled"))},yt=function(...t){if(my===!0&&(my=!1,er===null&&Zh.get("logging_enabled")===!0&&qx(!0)),er){const e=fa.apply(null,t);er(e)}},da=function(t){return function(...e){yt(t,...e)}},ef=function(...t){const e="FIREBASE INTERNAL ERROR: "+fa(...t);Kr.error(e)},cr=function(...t){const e=`FIREBASE FATAL ERROR: ${fa(...t)}`;throw Kr.error(e),new Error(e)},Kt=function(...t){const e="FIREBASE WARNING: "+fa(...t);Kr.warn(e)},Kx=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Kt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},C0=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},zx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ci="[MIN_NAME]",lr="[MAX_NAME]",Ai=function(t,e){if(t===e)return 0;if(t===ci||e===lr)return-1;if(e===ci||t===lr)return 1;{const n=yy(t),s=yy(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Gx=function(t,e){return t===e?0:t<e?-1:1},ji=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+lt(e))},tp=function(t){if(typeof t!="object"||t===null)return lt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=lt(e[s]),n+=":",n+=tp(t[e[s]]);return n+="}",n},I0=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function en(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const S0=function(t){U(!C0(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,c;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(i%2?1:0),i=Math.floor(i/2);l.push(r?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Qx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Yx=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Xx=new RegExp("^-?(0*)\\d{1,10}$"),Jx=-2147483648,Zx=2147483647,yy=function(t){if(Xx.test(t)){const e=Number(t);if(e>=Jx&&e<=Zx)return e}return null},pa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Kt("Exception was thrown by user callback.",n),e},Math.floor(0))}},eM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},go=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Kt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(yt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Kt(e)}}class tf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}tf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="5",k0="v",A0="s",R0="r",N0="f",O0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,P0="ls",D0="p",nf="ac",x0="websocket",M0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e,n,s,r,i=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function rM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function L0(t,e,n){U(typeof e=="string","typeof type must == string"),U(typeof n=="object","typeof params must == object");let s;if(e===x0)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===M0)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rM(t)&&(n.ns=t.namespace);const r=[];return en(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(){this.counters_={}}incrementCounter(e,n=1){Zn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return tO(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu={},qu={};function sp(t){const e=t.toString();return Wu[e]||(Wu[e]=new iM),Wu[e]}function oM(t,e){const n=t.toString();return qu[n]||(qu[n]=e()),qu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&pa(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="start",cM="close",lM="pLPCommand",uM="pRTLPCB",F0="id",U0="pw",$0="ser",hM="cb",fM="seg",dM="ts",pM="d",gM="dframe",B0=1870,V0=30,mM=B0-V0,yM=25e3,_M=3e4;class Lr{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=da(e),this.stats_=sp(n),this.urlFn=c=>(this.appCheckToken&&(c[nf]=this.appCheckToken),L0(n,M0,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new aM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_M)),zx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rp((...i)=>{const[o,a,c,l,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_y)this.id=a,this.password=c;else if(o===cM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[_y]="t",s[$0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[hM]=this.scriptTagHolder.uniqueCallbackIdentifier),s[k0]=np,this.transportSessionId&&(s[A0]=this.transportSessionId),this.lastSessionId&&(s[P0]=this.lastSessionId),this.applicationId&&(s[D0]=this.applicationId),this.appCheckToken&&(s[nf]=this.appCheckToken),typeof location<"u"&&location.hostname&&O0.test(location.hostname)&&(s[R0]=N0);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Lr.forceAllow_=!0}static forceDisallow(){Lr.forceDisallow_=!0}static isAvailable(){return Lr.forceAllow_?!0:!Lr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Qx()&&!Yx()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=gE(n),r=I0(s,mM);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[gM]="t",s[F0]=e,s[U0]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=lt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class rp{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Wx(),window[lM+this.uniqueCallbackIdentifier]=e,window[uM+this.uniqueCallbackIdentifier]=n,this.myIFrame=rp.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){yt("frame writing exception"),a.stack&&yt(a.stack),yt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||yt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[F0]=this.myID,e[U0]=this.myPW,e[$0]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+V0+s.length<=B0;){const o=this.pendingSegs.shift();s=s+"&"+fM+r+"="+o.seg+"&"+dM+r+"="+o.ts+"&"+pM+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(yM)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{yt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vM=16384,wM=45e3;let Wc=null;typeof MozWebSocket<"u"?Wc=MozWebSocket:typeof WebSocket<"u"&&(Wc=WebSocket);class an{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=da(this.connId),this.stats_=sp(n),this.connURL=an.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[k0]=np,typeof location<"u"&&location.hostname&&O0.test(location.hostname)&&(o[R0]=N0),n&&(o[A0]=n),s&&(o[P0]=s),r&&(o[nf]=r),i&&(o[D0]=i),L0(e,x0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zs.set("previous_websocket_failure",!0);try{let s;EE(),this.mySock=new Wc(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){an.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Wc!==null&&!an.forceDisallow_}static previouslyFailed(){return zs.isInMemoryStorage||zs.get("previous_websocket_failure")===!0}markConnectionHealthy(){zs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Po(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=I0(n,vM);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}an.responsesRequiredToBeHealthy=2;an.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Lr,an]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=an&&an.isAvailable();let s=n&&!an.previouslyFailed();if(e.webSocketOnly&&(n||Kt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[an];else{const r=this.transports_=[];for(const i of Uo.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Uo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Uo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM=6e4,bM=5e3,TM=10*1024,CM=100*1024,Ku="t",vy="d",IM="s",wy="r",SM="e",Ey="o",by="a",Ty="n",Cy="p",kM="h";class AM{constructor(e,n,s,r,i,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=da("c:"+this.id+":"),this.transportManager_=new Uo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=go(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>CM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>TM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ku in e){const n=e[Ku];n===by?this.upgradeIfSecondaryHealthy_():n===wy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ey&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ji("t",e),s=ji("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:by,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ty,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ji("t",e),s=ji("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ji(Ku,e);if(vy in e){const s=e[vy];if(n===kM){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Ty){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===IM?this.onConnectionShutdown_(s):n===wy?this.onReset_(s):n===SM?ef("Server Error: "+s):n===Ey?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ef("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),np!==s&&Kt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),go(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(EM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):go(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){U(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends j0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new qc}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=32,Sy=768;class Be{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Oe(){return new Be("")}function de(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Rs(t){return t.pieces_.length-t.pieceNum_}function Fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Be(t.pieces_,e)}function W0(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function RM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function q0(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function K0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Be(e,0)}function rt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Be)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new Be(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function Xt(t,e){const n=de(t),s=de(e);if(n===null)return e;if(n===s)return Xt(Fe(t),Fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function z0(t,e){if(Rs(t)!==Rs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function cn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Rs(t)>Rs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class NM{constructor(e,n){this.errorPrefix_=n,this.parts_=q0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Dl(this.parts_[s]);G0(this)}}function OM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Dl(e),G0(t)}function PM(t){const e=t.parts_.pop();t.byteLength_-=Dl(e),t.parts_.length>0&&(t.byteLength_-=1)}function G0(t){if(t.byteLength_>Sy)throw new Error(t.errorPrefix_+"has a key path longer than "+Sy+" bytes ("+t.byteLength_+").");if(t.parts_.length>Iy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Iy+") or object contains a cycle "+Hs(t))}function Hs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip extends j0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new ip}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=1e3,DM=60*5*1e3,ky=30*1e3,xM=1.3,MM=3e4,LM="server_kill",Ay=3;class Wn extends H0{constructor(e,n,s,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Wn.nextPersistentConnectionId_++,this.log_=da("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wi,this.maxReconnectDelay_=DM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!EE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ip.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(lt(i)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new As,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,l=a.s;Wn.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Zn(e,"w")){const s=oi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Kt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ky)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=mO(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+lt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ef("Unrecognized action received from server: "+lt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>MM&&(this.reconnectDelay_=Wi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Wn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){U(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?yt("getToken() completed but was canceled"):(yt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new AM(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,d=>{Kt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(LM)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Kt(h),c())}}}interrupt(e){yt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){yt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],jh(this.interruptReasons_)&&(this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>tp(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new Be(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){yt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ay&&(this.reconnectDelay_=ky,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){yt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ay&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+E0.replace(/\./g,"-")]=1,Pd()?e["framework.cordova"]=1:wE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qc.getInstance().currentlyOnline();return jh(this.interruptReasons_)&&e}}Wn.nextPersistentConnectionId_=0;Wn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new pe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new pe(ci,e),r=new pe(ci,n);return this.compare(s,r)!==0}minPost(){return pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya;class Q0 extends Bl{static get __EMPTY_NODE(){return Ya}static set __EMPTY_NODE(e){Ya=e}compare(e,n){return Ai(e.name,n.name)}isDefinedOn(e){throw bi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return pe.MIN}maxPost(){return new pe(lr,Ya)}makePost(e,n){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,Ya)}toString(){return".key"}}const zr=new Q0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class st{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??st.RED,this.left=r??Ft.EMPTY_NODE,this.right=i??Ft.EMPTY_NODE}copy(e,n,s,r,i){return new st(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ft.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ft.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}st.RED=!0;st.BLACK=!1;class FM{copy(e,n,s,r,i){return this}insert(e,n,s){return new st(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ft{constructor(e,n=Ft.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ft(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,st.BLACK,null,null))}remove(e){return new Ft(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,st.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xa(this.root_,null,this.comparator_,!0,e)}}Ft.EMPTY_NODE=new FM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UM(t,e){return Ai(t.name,e.name)}function op(t,e){return Ai(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sf;function $M(t){sf=t}const Y0=function(t){return typeof t=="number"?"number:"+S0(t):"string:"+t},X0=function(t){if(t.isLeafNode()){const e=t.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Zn(e,".sv"),"Priority must be a string or number.")}else U(t===sf||t.isEmpty(),"priority of unexpected type.");U(t===sf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ry;class tt{constructor(e,n=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),X0(this.priorityNode_)}static set __childrenNodeConstructor(e){Ry=e}static get __childrenNodeConstructor(){return Ry}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:de(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=de(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(U(s!==".priority"||Rs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Y0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=S0(this.value_):e+=this.value_,this.lazyHash_=T0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=tt.VALUE_TYPE_ORDER.indexOf(n),i=tt.VALUE_TYPE_ORDER.indexOf(s);return U(r>=0,"Unknown leaf type: "+n),U(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J0,Z0;function BM(t){J0=t}function VM(t){Z0=t}class HM extends Bl{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?Ai(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(lr,new tt("[PRIORITY-POST]",Z0))}makePost(e,n){const s=J0(e);return new pe(n,new tt("[PRIORITY-POST]",s))}toString(){return".priority"}}const Et=new HM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jM=Math.log(2);class WM{constructor(e){const n=i=>parseInt(Math.log(i)/jM,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Kc=function(t,e,n,s){t.sort(e);const r=function(c,l){const u=l-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new st(f,h.node,st.BLACK,null,null);{const d=parseInt(u/2,10)+c,p=r(c,d),y=r(d+1,l);return h=t[d],f=n?n(h):h,new st(f,h.node,st.BLACK,p,y)}},i=function(c){let l=null,u=null,h=t.length;const f=function(p,y){const E=h-p,v=h;h-=p;const g=r(E+1,v),_=t[E],b=n?n(_):_;d(new st(b,_.node,y,null,g))},d=function(p){l?(l.left=p,l=p):(u=p,l=p)};for(let p=0;p<c.count;++p){const y=c.nextBitIsOne(),E=Math.pow(2,c.count-(p+1));y?f(E,st.BLACK):(f(E,st.BLACK),f(E,st.RED))}return u},o=new WM(t.length),a=i(o);return new Ft(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu;const Ir={};class Hn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return U(Ir&&Et,"ChildrenNode.ts has not been loaded"),zu=zu||new Hn({".priority":Ir},{".priority":Et}),zu}get(e){const n=oi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ft?n:null}hasIndex(e){return Zn(this.indexSet_,e.toString())}addIndex(e,n){U(e!==zr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(pe.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=Kc(s,e.getCompare()):a=Ir;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Hn(u,l)}addToIndexes(e,n){const s=Mc(this.indexes_,(r,i)=>{const o=oi(this.indexSet_,i);if(U(o,"Missing index implementation for "+i),r===Ir)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(pe.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Kc(a,o.getCompare())}else return Ir;else{const a=n.get(e.name);let c=r;return a&&(c=c.remove(new pe(e.name,a))),c.insert(e,e.node)}});return new Hn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Mc(this.indexes_,r=>{if(r===Ir)return r;{const i=n.get(e.name);return i?r.remove(new pe(e.name,i)):r}});return new Hn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi;class Te{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&X0(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return qi||(qi=new Te(new Ft(op),null,Hn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qi}updatePriority(e){return this.children_.isEmpty()?this:new Te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?qi:n}}getChild(e){const n=de(e);return n===null?this:this.getImmediateChild(n).getChild(Fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(U(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new pe(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?qi:this.priorityNode_;return new Te(r,o,i)}}updateChild(e,n){const s=de(e);if(s===null)return n;{U(de(e)!==".priority"||Rs(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(Fe(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(Et,(o,a)=>{n[o]=a.val(e),s++,i&&Te.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Y0(this.getPriority().val())+":"),this.forEachChild(Et,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":T0(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new pe(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new pe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,pe.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ga?-1:0}withIndex(e){if(e===zr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Te(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===zr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Et),r=n.getIterator(Et);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===zr?null:this.indexMap_.get(e.toString())}}Te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qM extends Te{constructor(){super(new Ft(op),Te.EMPTY_NODE,Hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Te.EMPTY_NODE}isEmpty(){return!1}}const ga=new qM;Object.defineProperties(pe,{MIN:{value:new pe(ci,Te.EMPTY_NODE)},MAX:{value:new pe(lr,ga)}});Q0.__EMPTY_NODE=Te.EMPTY_NODE;tt.__childrenNodeConstructor=Te;$M(ga);VM(ga);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KM=!0;function _t(t,e=null){if(t===null)return Te.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new tt(n,_t(e))}if(!(t instanceof Array)&&KM){const n=[];let s=!1;if(en(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=_t(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new pe(o,c)))}}),n.length===0)return Te.EMPTY_NODE;const i=Kc(n,UM,o=>o.name,op);if(s){const o=Kc(n,Et.getCompare());return new Te(i,_t(e),new Hn({".priority":o},{".priority":Et}))}else return new Te(i,_t(e),Hn.Default)}else{let n=Te.EMPTY_NODE;return en(t,(s,r)=>{if(Zn(t,s)&&s.substring(0,1)!=="."){const i=_t(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(_t(e))}}BM(_t);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM extends Bl{constructor(e){super(),this.indexPath_=e,U(!ue(e)&&de(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?Ai(e.name,n.name):i}makePost(e,n){const s=_t(e),r=Te.EMPTY_NODE.updateChild(this.indexPath_,s);return new pe(n,r)}maxPost(){const e=Te.EMPTY_NODE.updateChild(this.indexPath_,ga);return new pe(lr,e)}toString(){return q0(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM extends Bl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ai(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,n){const s=_t(e);return new pe(n,s)}toString(){return".value"}}const QM=new GM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YM(t){return{type:"value",snapshotNode:t}}function XM(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function JM(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ny(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ZM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Et}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ci}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:lr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Et}copy(){const e=new ap;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Oy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Et?n="$priority":t.index_===QM?n="$value":t.index_===zr?n="$key":(U(t.index_ instanceof zM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=lt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=lt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+lt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=lt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+lt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Py(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Et&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc extends H0{constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=da("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=zc.getListenId_(e,s),a={};this.listens_[o]=a;const c=Oy(e._queryParams);this.restRequest_(i+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(i,h,!1,s),oi(this.listens_,o)===a){let f;l?l===401?f="permission_denied":f="rest_error:"+l:f="ok",r(f,null)}})}unlisten(e,n){const s=zc.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Oy(e._queryParams),s=e._path.toString(),r=new As;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ci(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Po(a.responseText)}catch{Kt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Kt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(){this.rootNode_=Te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(){return{value:null,children:new Map}}function eb(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=de(e);t.children.has(s)||t.children.set(s,Gc());const r=t.children.get(s);e=Fe(e),eb(r,e,n)}}function rf(t,e,n){t.value!==null?n(e,t.value):tL(t,(s,r)=>{const i=new Be(e.toString()+"/"+s);rf(r,i,n)})}function tL(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&en(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=10*1e3,sL=30*1e3,rL=5*60*1e3;class iL{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new nL(e);const s=Dy+(sL-Dy)*Math.random();go(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;en(e,(r,i)=>{i>0&&Zn(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),go(this.reportStats_.bind(this),Math.floor(Math.random()*2*rL))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var In;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(In||(In={}));function tb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nb(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sb(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=In.ACK_USER_WRITE,this.source=tb()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Be(e));return new Qc(Oe(),n,this.revert)}}else return U(de(this.path)===e,"operationForChild called for unrelated child."),new Qc(Fe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=In.OVERWRITE}operationForChild(e){return ue(this.path)?new ur(this.source,Oe(),this.snap.getImmediateChild(e)):new ur(this.source,Fe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=In.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new Be(e));return n.isEmpty()?null:n.value?new ur(this.source,Oe(),n.value):new $o(this.source,Oe(),n)}else return U(de(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $o(this.source,Fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=de(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function oL(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(ZM(o.childName,o.snapshotNode))}),Ki(t,r,"child_removed",e,s,n),Ki(t,r,"child_added",e,s,n),Ki(t,r,"child_moved",i,s,n),Ki(t,r,"child_changed",e,s,n),Ki(t,r,"value",e,s,n),r}function Ki(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,c)=>cL(t,a,c)),o.forEach(a=>{const c=aL(t,a,i);r.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function aL(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function cL(t,e,n){if(e.childName==null||n.childName==null)throw bi("Should only compare child_ events.");const s=new pe(e.childName,e.snapshotNode),r=new pe(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t,e){return{eventCache:t,serverCache:e}}function mo(t,e,n,s){return rb(new cp(e,n,s),t.serverCache)}function ib(t,e,n,s){return rb(t.eventCache,new cp(e,n,s))}function of(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gu;const lL=()=>(Gu||(Gu=new Ft(Gx)),Gu);class Me{constructor(e,n=lL()){this.value=e,this.children=n}static fromObject(e){let n=new Me(null);return en(e,(s,r)=>{n=n.set(new Be(s),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Oe(),value:this.value};if(ue(e))return null;{const s=de(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Fe(e),n);return i!=null?{path:rt(new Be(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=de(e),s=this.children.get(n);return s!==null?s.subtree(Fe(e)):new Me(null)}}set(e,n){if(ue(e))return new Me(n,this.children);{const s=de(e),i=(this.children.get(s)||new Me(null)).set(Fe(e),n),o=this.children.insert(s,i);return new Me(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new Me(null):new Me(null,this.children);{const n=de(e),s=this.children.get(n);if(s){const r=s.remove(Fe(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new Me(null):new Me(this.value,i)}else return this}}get(e){if(ue(e))return this.value;{const n=de(e),s=this.children.get(n);return s?s.get(Fe(e)):null}}setTree(e,n){if(ue(e))return n;{const s=de(e),i=(this.children.get(s)||new Me(null)).setTree(Fe(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new Me(this.value,o)}}fold(e){return this.fold_(Oe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(rt(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Oe(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(ue(e))return null;{const i=de(e),o=this.children.get(i);return o?o.findOnPath_(Fe(e),rt(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Oe(),n)}foreachOnPath_(e,n,s){if(ue(e))return this;{this.value&&s(n,this.value);const r=de(e),i=this.children.get(r);return i?i.foreachOnPath_(Fe(e),rt(n,r),s):new Me(null)}}foreach(e){this.foreach_(Oe(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(rt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.writeTree_=e}static empty(){return new fn(new Me(null))}}function yo(t,e,n){if(ue(e))return new fn(new Me(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=Xt(r,e);return i=i.updateChild(o,n),new fn(t.writeTree_.set(r,i))}else{const r=new Me(n),i=t.writeTree_.setTree(e,r);return new fn(i)}}}function xy(t,e,n){let s=t;return en(n,(r,i)=>{s=yo(s,rt(e,r),i)}),s}function My(t,e){if(ue(e))return fn.empty();{const n=t.writeTree_.setTree(e,new Me(null));return new fn(n)}}function af(t,e){return yr(t,e)!=null}function yr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Xt(n.path,e)):null}function Ly(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Et,(s,r)=>{e.push(new pe(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new pe(s,r.value))}),e}function bs(t,e){if(ue(e))return t;{const n=yr(t,e);return n!=null?new fn(new Me(n)):new fn(t.writeTree_.subtree(e))}}function cf(t){return t.writeTree_.isEmpty()}function li(t,e){return ob(Oe(),t.writeTree_,e)}function ob(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(U(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=ob(rt(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(rt(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(t,e){return fb(e,t)}function uL(t,e,n,s,r){U(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=yo(t.visibleWrites,e,n)),t.lastWriteId=s}function hL(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function fL(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);U(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&dL(a,s.path)?r=!1:cn(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return pL(t),!0;if(s.snap)t.visibleWrites=My(t.visibleWrites,s.path);else{const a=s.children;en(a,c=>{t.visibleWrites=My(t.visibleWrites,rt(s.path,c))})}return!0}else return!1}function dL(t,e){if(t.snap)return cn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&cn(rt(t.path,n),e))return!0;return!1}function pL(t){t.visibleWrites=cb(t.allWrites,gL,Oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function gL(t){return t.visible}function cb(t,e,n){let s=fn.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)cn(n,o)?(a=Xt(n,o),s=yo(s,a,i.snap)):cn(o,n)&&(a=Xt(o,n),s=yo(s,Oe(),i.snap.getChild(a)));else if(i.children){if(cn(n,o))a=Xt(n,o),s=xy(s,a,i.children);else if(cn(o,n))if(a=Xt(o,n),ue(a))s=xy(s,Oe(),i.children);else{const c=oi(i.children,de(a));if(c){const l=c.getChild(Fe(a));s=yo(s,Oe(),l)}}}else throw bi("WriteRecord should have .snap or .children")}}return s}function lb(t,e,n,s,r){if(!s&&!r){const i=yr(t.visibleWrites,e);if(i!=null)return i;{const o=bs(t.visibleWrites,e);if(cf(o))return n;if(n==null&&!af(o,Oe()))return null;{const a=n||Te.EMPTY_NODE;return li(o,a)}}}else{const i=bs(t.visibleWrites,e);if(!r&&cf(i))return n;if(!r&&n==null&&!af(i,Oe()))return null;{const o=function(l){return(l.visible||r)&&(!s||!~s.indexOf(l.writeId))&&(cn(l.path,e)||cn(e,l.path))},a=cb(t.allWrites,o,e),c=n||Te.EMPTY_NODE;return li(a,c)}}}function mL(t,e,n){let s=Te.EMPTY_NODE;const r=yr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Et,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=bs(t.visibleWrites,e);return n.forEachChild(Et,(o,a)=>{const c=li(bs(i,new Be(o)),a);s=s.updateImmediateChild(o,c)}),Ly(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=bs(t.visibleWrites,e);return Ly(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function yL(t,e,n,s,r){U(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=rt(e,n);if(af(t.visibleWrites,i))return null;{const o=bs(t.visibleWrites,i);return cf(o)?r.getChild(n):li(o,r.getChild(n))}}function _L(t,e,n,s){const r=rt(e,n),i=yr(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=bs(t.visibleWrites,r);return li(o,s.getNode().getImmediateChild(n))}else return null}function vL(t,e){return yr(t.visibleWrites,e)}function wL(t,e,n,s,r,i,o){let a;const c=bs(t.visibleWrites,e),l=yr(c,Oe());if(l!=null)a=l;else if(n!=null)a=li(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let d=f.getNext();for(;d&&u.length<r;)h(d,s)!==0&&u.push(d),d=f.getNext();return u}else return[]}function EL(){return{visibleWrites:fn.empty(),allWrites:[],lastWriteId:-1}}function lf(t,e,n,s){return lb(t.writeTree,t.treePath,e,n,s)}function ub(t,e){return mL(t.writeTree,t.treePath,e)}function Fy(t,e,n,s){return yL(t.writeTree,t.treePath,e,n,s)}function Yc(t,e){return vL(t.writeTree,rt(t.treePath,e))}function bL(t,e,n,s,r,i){return wL(t.writeTree,t.treePath,e,n,s,r,i)}function lp(t,e,n){return _L(t.writeTree,t.treePath,e,n)}function hb(t,e){return fb(rt(t.treePath,e),t.writeTree)}function fb(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;U(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),U(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,Ny(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,JM(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,XM(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,Ny(s,e.snapshotNode,r.oldSnap));else throw bi("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const db=new CL;class up{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new cp(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return lp(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hr(this.viewCache_),i=bL(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}function IL(t,e){U(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function SL(t,e,n,s,r){const i=new TL;let o,a;if(n.type===In.OVERWRITE){const l=n;l.source.fromUser?o=uf(t,e,l.path,l.snap,s,r,i):(U(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ue(l.path),o=Xc(t,e,l.path,l.snap,s,r,a,i))}else if(n.type===In.MERGE){const l=n;l.source.fromUser?o=AL(t,e,l.path,l.children,s,r,i):(U(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=hf(t,e,l.path,l.children,s,r,a,i))}else if(n.type===In.ACK_USER_WRITE){const l=n;l.revert?o=OL(t,e,l.path,s,r,i):o=RL(t,e,l.path,l.affectedTree,s,r,i)}else if(n.type===In.LISTEN_COMPLETE)o=NL(t,e,n.path,s,i);else throw bi("Unknown operation type: "+n.type);const c=i.getChanges();return kL(e,o,c),{viewCache:o,changes:c}}function kL(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=of(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(YM(of(e)))}}function pb(t,e,n,s,r,i){const o=e.eventCache;if(Yc(s,n)!=null)return e;{let a,c;if(ue(n))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=hr(e),u=l instanceof Te?l:Te.EMPTY_NODE,h=ub(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const l=lf(s,hr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,i)}else{const l=de(n);if(l===".priority"){U(Rs(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Fy(s,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Fe(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const f=Fy(s,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(l).updateChild(u,f):h=o.getNode().getImmediateChild(l)}else h=lp(s,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,r,i):a=o.getNode()}}return mo(e,a,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function Xc(t,e,n,s,r,i,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(ue(n))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const d=c.getNode().updateChild(n,s);l=u.updateFullNode(c.getNode(),d,null)}else{const d=de(n);if(!c.isCompleteForPath(n)&&Rs(n)>1)return e;const p=Fe(n),E=c.getNode().getImmediateChild(d).updateChild(p,s);d===".priority"?l=u.updatePriority(c.getNode(),E):l=u.updateChild(c.getNode(),d,E,p,db,null)}const h=ib(e,l,c.isFullyInitialized()||ue(n),u.filtersNodes()),f=new up(r,h,i);return pb(t,h,n,r,f,a)}function uf(t,e,n,s,r,i,o){const a=e.eventCache;let c,l;const u=new up(r,e,i);if(ue(n))l=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=mo(e,l,!0,t.filter.filtersNodes());else{const h=de(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),s),c=mo(e,l,a.isFullyInitialized(),a.isFiltered());else{const f=Fe(n),d=a.getNode().getImmediateChild(h);let p;if(ue(f))p=s;else{const y=u.getCompleteChild(h);y!=null?W0(f)===".priority"&&y.getChild(K0(f)).isEmpty()?p=y:p=y.updateChild(f,s):p=Te.EMPTY_NODE}if(d.equals(p))c=e;else{const y=t.filter.updateChild(a.getNode(),h,p,f,u,o);c=mo(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Uy(t,e){return t.eventCache.isCompleteForChild(e)}function AL(t,e,n,s,r,i,o){let a=e;return s.foreach((c,l)=>{const u=rt(n,c);Uy(e,de(u))&&(a=uf(t,a,u,l,r,i,o))}),s.foreach((c,l)=>{const u=rt(n,c);Uy(e,de(u))||(a=uf(t,a,u,l,r,i,o))}),a}function $y(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function hf(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ue(n)?l=s:l=new Me(null).setTree(n,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=$y(t,d,f);c=Xc(t,c,new Be(h),p,r,i,o,a)}}),l.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),y=$y(t,p,f);c=Xc(t,c,new Be(h),y,r,i,o,a)}}),c}function RL(t,e,n,s,r,i,o){if(Yc(r,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(ue(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Xc(t,e,n,c.getNode().getChild(n),r,i,a,o);if(ue(n)){let l=new Me(null);return c.getNode().forEachChild(zr,(u,h)=>{l=l.set(new Be(u),h)}),hf(t,e,n,l,r,i,a,o)}else return e}else{let l=new Me(null);return s.foreach((u,h)=>{const f=rt(n,u);c.isCompleteForPath(f)&&(l=l.set(u,c.getNode().getChild(f)))}),hf(t,e,n,l,r,i,a,o)}}function NL(t,e,n,s,r){const i=e.serverCache,o=ib(e,i.getNode(),i.isFullyInitialized()||ue(n),i.isFiltered());return pb(t,o,n,s,db,r)}function OL(t,e,n,s,r,i){let o;if(Yc(s,n)!=null)return e;{const a=new up(s,e,r),c=e.eventCache.getNode();let l;if(ue(n)||de(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=lf(s,hr(e));else{const h=e.serverCache.getNode();U(h instanceof Te,"serverChildren would be complete if leaf node"),u=ub(s,h)}u=u,l=t.filter.updateFullNode(c,u,i)}else{const u=de(n);let h=lp(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,Fe(n),a,i):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,Te.EMPTY_NODE,Fe(n),a,i):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=lf(s,hr(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,i)))}return o=e.serverCache.isFullyInitialized()||Yc(s,Oe())!=null,mo(e,l,o,t.filter.filtersNodes())}}function PL(t,e){const n=hr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(de(e)).isEmpty())?n.getChild(e):null}function By(t,e,n,s){e.type===In.MERGE&&e.source.queryId!==null&&(U(hr(t.viewCache_),"We should always have a full cache before handling merges"),U(of(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=SL(t.processor_,r,e,n,s);return IL(t.processor_,i.viewCache),U(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,DL(t,i.changes,i.viewCache.eventCache.getNode(),null)}function DL(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return oL(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vy;function xL(t){U(!Vy,"__referenceConstructor has already been defined"),Vy=t}function hp(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return U(i!=null,"SyncTree gave us an op for an invalid query."),By(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(By(o,e,n,s));return i}}function fp(t,e){let n=null;for(const s of t.views.values())n=n||PL(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hy;function ML(t){U(!Hy,"__referenceConstructor has already been defined"),Hy=t}class jy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Me(null),this.pendingWriteTree_=EL(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function LL(t,e,n,s,r){return uL(t.pendingWriteTree_,e,n,s,r),r?Hl(t,new ur(tb(),e,n)):[]}function Fr(t,e,n=!1){const s=hL(t.pendingWriteTree_,e);if(fL(t.pendingWriteTree_,e)){let i=new Me(null);return s.snap!=null?i=i.set(Oe(),!0):en(s.children,o=>{i=i.set(new Be(o),!0)}),Hl(t,new Qc(s.path,i,n))}else return[]}function Vl(t,e,n){return Hl(t,new ur(nb(),e,n))}function FL(t,e,n){const s=Me.fromObject(n);return Hl(t,new $o(nb(),e,s))}function UL(t,e,n,s){const r=_b(t,s);if(r!=null){const i=vb(r),o=i.path,a=i.queryId,c=Xt(o,e),l=new ur(sb(a),c,n);return wb(t,o,l)}else return[]}function $L(t,e,n,s){const r=_b(t,s);if(r){const i=vb(r),o=i.path,a=i.queryId,c=Xt(o,e),l=Me.fromObject(n),u=new $o(sb(a),c,l);return wb(t,o,u)}else return[]}function gb(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Xt(o,e),l=fp(a,c);if(l)return l});return lb(r,e,i,n,!0)}function Hl(t,e){return mb(e,t.syncPointTree_,null,ab(t.pendingWriteTree_,Oe()))}function mb(t,e,n,s){if(ue(t.path))return yb(t,e,n,s);{const r=e.get(Oe());n==null&&r!=null&&(n=fp(r,Oe()));let i=[];const o=de(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=hb(s,o);i=i.concat(mb(a,c,l,u))}return r&&(i=i.concat(hp(r,t,s,n))),i}}function yb(t,e,n,s){const r=e.get(Oe());n==null&&r!=null&&(n=fp(r,Oe()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=hb(s,o),u=t.operationForChild(o);u&&(i=i.concat(yb(u,a,c,l)))}),r&&(i=i.concat(hp(r,t,s,n))),i}function _b(t,e){return t.tagToQueryMap.get(e)}function vb(t){const e=t.indexOf("$");return U(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Be(t.substr(0,e))}}function wb(t,e,n){const s=t.syncPointTree_.get(e);U(s,"Missing sync point for query tag that we're tracking");const r=ab(t.pendingWriteTree_,e);return hp(s,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new dp(n)}node(){return this.node_}}class pp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=rt(this.path_,e);return new pp(this.syncTree_,n)}node(){return gb(this.syncTree_,this.path_)}}const BL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Wy=function(t,e,n){if(!t||typeof t!="object")return t;if(U(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return VL(t[".sv"],e,n);if(typeof t[".sv"]=="object")return HL(t[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},VL=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:U(!1,"Unexpected server value: "+t)}},HL=function(t,e,n){t.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&U(!1,"Unexpected increment value: "+s);const r=e.node();if(U(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},jL=function(t,e,n,s){return gp(e,new pp(n,t),s)},WL=function(t,e,n){return gp(t,new dp(e),n)};function gp(t,e,n){const s=t.getPriority().val(),r=Wy(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Wy(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new tt(a,_t(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new tt(r))),o.forEachChild(Et,(a,c)=>{const l=gp(c,e.getImmediateChild(a),n);l!==c&&(i=i.updateImmediateChild(a,l))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function yp(t,e){let n=e instanceof Be?e:new Be(e),s=t,r=de(n);for(;r!==null;){const i=oi(s.node.children,r)||{children:{},childCount:0};s=new mp(r,s,i),n=Fe(n),r=de(n)}return s}function Ri(t){return t.node.value}function Eb(t,e){t.node.value=e,ff(t)}function bb(t){return t.node.childCount>0}function qL(t){return Ri(t)===void 0&&!bb(t)}function jl(t,e){en(t.node.children,(n,s)=>{e(new mp(n,t,s))})}function Tb(t,e,n,s){n&&!s&&e(t),jl(t,r=>{Tb(r,e,!0,s)}),n&&s&&e(t)}function KL(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ma(t){return new Be(t.parent===null?t.name:ma(t.parent)+"/"+t.name)}function ff(t){t.parent!==null&&zL(t.parent,t.name,t)}function zL(t,e,n){const s=qL(n),r=Zn(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,ff(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,ff(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL=/[\[\].#$\/\u0000-\u001F\u007F]/,QL=/[\[\].#$\u0000-\u001F\u007F]/,Qu=10*1024*1024,Cb=function(t){return typeof t=="string"&&t.length!==0&&!GL.test(t)},YL=function(t){return typeof t=="string"&&t.length!==0&&!QL.test(t)},XL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),YL(t)},Ib=function(t,e,n){const s=n instanceof Be?new NM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Hs(s));if(typeof e=="function")throw new Error(t+"contains a function "+Hs(s)+" with contents = "+e.toString());if(C0(e))throw new Error(t+"contains "+e.toString()+" "+Hs(s));if(typeof e=="string"&&e.length>Qu/3&&Dl(e)>Qu)throw new Error(t+"contains a string greater than "+Qu+" utf8 bytes "+Hs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(en(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Cb(o)))throw new Error(t+" contains an invalid key ("+o+") "+Hs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);OM(s,o),Ib(t,a,s),PM(s)}),r&&i)throw new Error(t+' contains ".value" child '+Hs(s)+" in addition to actual children.")}},JL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Cb(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!XL(n))throw new Error(bO(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function eF(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!z0(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function _r(t,e,n){eF(t,n),tF(t,s=>cn(s,e)||cn(e,s))}function tF(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(nF(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function nF(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();er&&yt("event: "+n.toString()),pa(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sF="repo_interrupt",rF=25;class iF{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ZL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Gc(),this.transactionQueueTree_=new mp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function oF(t,e,n){if(t.stats_=sp(t.repoInfo_),t.forceRestClient_||eM())t.server_=new zc(t.repoInfo_,(s,r,i,o)=>{qy(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ky(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{lt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Wn(t.repoInfo_,e,(s,r,i,o)=>{qy(t,s,r,i,o)},s=>{Ky(t,s)},s=>{cF(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=oM(t.repoInfo_,()=>new iL(t.stats_,t.server_)),t.infoData_=new eL,t.infoSyncTree_=new jy({startListening:(s,r,i,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=Vl(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),_p(t,"connected",!1),t.serverSyncTree_=new jy({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,c)=>{const l=o(a,c);_r(t.eventQueue_,s._path,l)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function aF(t){const n=t.infoData_.getNode(new Be(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Sb(t){return BL({timestamp:aF(t)})}function qy(t,e,n,s,r){t.dataUpdateCount++;const i=new Be(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const c=Mc(n,l=>_t(l));o=$L(t.serverSyncTree_,i,c,r)}else{const c=_t(n);o=UL(t.serverSyncTree_,i,c,r)}else if(s){const c=Mc(n,l=>_t(l));o=FL(t.serverSyncTree_,i,c)}else{const c=_t(n);o=Vl(t.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=wp(t,i)),_r(t.eventQueue_,a,o)}function Ky(t,e){_p(t,"connected",e),e===!1&&uF(t)}function cF(t,e){en(e,(n,s)=>{_p(t,n,s)})}function _p(t,e,n){const s=new Be("/.info/"+e),r=_t(n);t.infoData_.updateSnapshot(s,r);const i=Vl(t.infoSyncTree_,s,r);_r(t.eventQueue_,s,i)}function lF(t){return t.nextWriteId_++}function uF(t){kb(t,"onDisconnectEvents");const e=Sb(t),n=Gc();rf(t.onDisconnect_,Oe(),(r,i)=>{const o=jL(r,i,t.serverSyncTree_,e);eb(n,r,o)});let s=[];rf(n,Oe(),(r,i)=>{s=s.concat(Vl(t.serverSyncTree_,r,i));const o=pF(t,r);wp(t,o)}),t.onDisconnect_=Gc(),_r(t.eventQueue_,Oe(),s)}function hF(t){t.persistentConnection_&&t.persistentConnection_.interrupt(sF)}function kb(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),yt(n,...e)}function Ab(t,e,n){return gb(t.serverSyncTree_,e,n)||Te.EMPTY_NODE}function vp(t,e=t.transactionQueueTree_){if(e||Wl(t,e),Ri(e)){const n=Nb(t,e);U(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&fF(t,ma(e),n)}else bb(e)&&jl(e,n=>{vp(t,n)})}function fF(t,e,n){const s=n.map(l=>l.currentWriteId),r=Ab(t,e,s);let i=r;const o=r.hash();for(let l=0;l<n.length;l++){const u=n[l];U(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Xt(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;t.server_.put(c.toString(),a,l=>{kb(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Fr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Wl(t,yp(t.transactionQueueTree_,e)),vp(t,t.transactionQueueTree_),_r(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)pa(h[f])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Kt("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}wp(t,e)}},o)}function wp(t,e){const n=Rb(t,e),s=ma(n),r=Nb(t,n);return dF(t,r,s),s}function dF(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Xt(n,c.path);let u=!1,h;if(U(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,r=r.concat(Fr(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=rF)u=!0,h="maxretry",r=r.concat(Fr(t.serverSyncTree_,c.currentWriteId,!0));else{const f=Ab(t,c.path,o);c.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){Ib("transaction failed: Data returned ",d,c.path);let p=_t(d);typeof d=="object"&&d!=null&&Zn(d,".priority")||(p=p.updatePriority(f.getPriority()));const E=c.currentWriteId,v=Sb(t),g=WL(p,f,v);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=g,c.currentWriteId=lF(t),o.splice(o.indexOf(E),1),r=r.concat(LL(t.serverSyncTree_,c.path,g,c.currentWriteId,c.applyLocally)),r=r.concat(Fr(t.serverSyncTree_,E,!0))}else u=!0,h="nodata",r=r.concat(Fr(t.serverSyncTree_,c.currentWriteId,!0))}_r(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Wl(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)pa(s[a]);vp(t,t.transactionQueueTree_)}function Rb(t,e){let n,s=t.transactionQueueTree_;for(n=de(e);n!==null&&Ri(s)===void 0;)s=yp(s,n),e=Fe(e),n=de(e);return s}function Nb(t,e){const n=[];return Ob(t,e,n),n.sort((s,r)=>s.order-r.order),n}function Ob(t,e,n){const s=Ri(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);jl(e,r=>{Ob(t,r,n)})}function Wl(t,e){const n=Ri(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,Eb(e,n.length>0?n:void 0)}jl(e,s=>{Wl(t,s)})}function pF(t,e){const n=ma(Rb(t,e)),s=yp(t.transactionQueueTree_,e);return KL(s,r=>{Yu(t,r)}),Yu(t,s),Tb(s,r=>{Yu(t,r)}),n}function Yu(t,e){const n=Ri(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(U(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(U(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Fr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Eb(e,void 0):n.length=i+1,_r(t.eventQueue_,ma(e),r);for(let o=0;o<s.length;o++)pa(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gF(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function mF(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Kt(`Invalid query segment '${n}' in query '${t}'`)}return e}const zy=function(t,e){const n=yF(t),s=n.namespace;n.domain==="firebase.com"&&cr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&cr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Kx();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new sM(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new Be(n.pathString)}},yF=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=gF(t.substring(u,h)));const f=mF(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const d=e.slice(0,l);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),n=e.substring(p+1),i=s}"ns"in f&&(i=f.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return ue(this._path)?null:W0(this._path)}get ref(){return new Ni(this._repo,this._path)}get _queryIdentifier(){const e=Py(this._queryParams),n=tp(e);return n==="{}"?"default":n}get _queryObject(){return Py(this._queryParams)}isEqual(e){if(e=xt(e),!(e instanceof Ep))return!1;const n=this._repo===e._repo,s=z0(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+RM(this._path)}}class Ni extends Ep{constructor(e,n){super(e,n,new ap,!1)}get parent(){const e=K0(this._path);return e===null?null:new Ni(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}xL(Ni);ML(Ni);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _F="FIREBASE_DATABASE_EMULATOR_HOST",df={};let vF=!1;function wF(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||cr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),yt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zy(i,r),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[_F]),l?(c=!0,i=`http://${l}?ns=${a.namespace}`,o=zy(i,r),a=o.repoInfo):c=!o.repoInfo.secure;const u=r&&c?new tf(tf.OWNER):new nM(t.name,t.options,e);JL("Invalid Firebase Database URL",o),ue(o.path)||cr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=bF(a,t,u,new tM(t.name,n));return new TF(h,t)}function EF(t,e){const n=df[e];(!n||n[t.key]!==t)&&cr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),hF(t),delete n[t.key]}function bF(t,e,n,s){let r=df[e.name];r||(r={},df[e.name]=r);let i=r[t.toURLString()];return i&&cr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new iF(t,vF,n,s),r[t.toURLString()]=i,i}class TF{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(oF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ni(this._repo,Oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(EF(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&cr("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CF(t){Vx(gr),Rn(new pn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return wF(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),qt(py,gy,t),qt(py,gy,"esm2017")}Wn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};CF();var IF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,bp=bp||{},ne=IF||self;function Jc(){}function ql(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ya(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function SF(t){return Object.prototype.hasOwnProperty.call(t,Xu)&&t[Xu]||(t[Xu]=++kF)}var Xu="closure_uid_"+(1e9*Math.random()>>>0),kF=0;function AF(t,e,n){return t.call.apply(t.bind,arguments)}function RF(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function bt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?bt=AF:bt=RF,bt.apply(null,arguments)}function Ja(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function pt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function xs(){this.s=this.s,this.o=this.o}var NF=0;xs.prototype.s=!1;xs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),NF!=0)&&SF(this)};xs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Pb=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Tp(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Gy(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ql(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var OF=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",Jc,e),ne.removeEventListener("test",Jc,e)}catch{}return t}();function Zc(t){return/^[\s\xa0]*$/.test(t)}var Qy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ju(t,e){return t<e?-1:t>e?1:0}function Kl(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function bn(t){return Kl().indexOf(t)!=-1}function Cp(t){return Cp[" "](t),t}Cp[" "]=Jc;function PF(t){var e=MF;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var DF=bn("Opera"),ui=bn("Trident")||bn("MSIE"),Db=bn("Edge"),pf=Db||ui,xb=bn("Gecko")&&!(Kl().toLowerCase().indexOf("webkit")!=-1&&!bn("Edge"))&&!(bn("Trident")||bn("MSIE"))&&!bn("Edge"),xF=Kl().toLowerCase().indexOf("webkit")!=-1&&!bn("Edge");function Mb(){var t=ne.document;return t?t.documentMode:void 0}var el;e:{var Zu="",eh=function(){var t=Kl();if(xb)return/rv:([^\);]+)(\)|;)/.exec(t);if(Db)return/Edge\/([\d\.]+)/.exec(t);if(ui)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(xF)return/WebKit\/(\S+)/.exec(t);if(DF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(eh&&(Zu=eh?eh[1]:""),ui){var th=Mb();if(th!=null&&th>parseFloat(Zu)){el=String(th);break e}}el=Zu}var MF={};function LF(){return PF(function(){let t=0;const e=Qy(String(el)).split("."),n=Qy("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ju(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ju(r[2].length==0,i[2].length==0)||Ju(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var gf;if(ne.document&&ui){var Yy=Mb();gf=Yy||parseInt(el,10)||void 0}else gf=void 0;var FF=gf;function Bo(t,e){if(Tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xb){e:{try{Cp(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:UF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Bo.X.h.call(this)}}pt(Bo,Tt);var UF={2:"touch",3:"pen",4:"mouse"};Bo.prototype.h=function(){Bo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _a="closure_listenable_"+(1e6*Math.random()|0),$F=0;function BF(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++$F,this.ba=this.ea=!1}function zl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ip(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Lb(t){const e={};for(const n in t)e[n]=t[n];return e}const Xy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fb(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Xy.length;i++)n=Xy[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Gl(t){this.src=t,this.g={},this.h=0}Gl.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=yf(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new BF(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function mf(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Pb(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(zl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function yf(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Sp="closure_lm_"+(1e6*Math.random()|0),nh={};function Ub(t,e,n,s,r){if(s&&s.once)return Bb(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ub(t,e[i],n,s,r);return null}return n=Rp(n),t&&t[_a]?t.N(e,n,ya(s)?!!s.capture:!!s,r):$b(t,e,n,!1,s,r)}function $b(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ya(r)?!!r.capture:!!r,a=Ap(t);if(a||(t[Sp]=a=new Gl(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=VF(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)OF||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Hb(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function VF(){function t(n){return e.call(t.src,t.listener,n)}const e=HF;return t}function Bb(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Bb(t,e[i],n,s,r);return null}return n=Rp(n),t&&t[_a]?t.O(e,n,ya(s)?!!s.capture:!!s,r):$b(t,e,n,!0,s,r)}function Vb(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Vb(t,e[i],n,s,r);else s=ya(s)?!!s.capture:!!s,n=Rp(n),t&&t[_a]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=yf(i,n,s,r),-1<n&&(zl(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ap(t))&&(e=t.g[e.toString()],t=-1,e&&(t=yf(e,n,s,r)),(n=-1<t?e[t]:null)&&kp(n))}function kp(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[_a])mf(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Hb(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ap(e))?(mf(n,t),n.h==0&&(n.src=null,e[Sp]=null)):zl(t)}}}function Hb(t){return t in nh?nh[t]:nh[t]="on"+t}function HF(t,e){if(t.ba)t=!0;else{e=new Bo(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&kp(t),t=n.call(s,e)}return t}function Ap(t){return t=t[Sp],t instanceof Gl?t:null}var sh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rp(t){return typeof t=="function"?t:(t[sh]||(t[sh]=function(e){return t.handleEvent(e)}),t[sh])}function ot(){xs.call(this),this.i=new Gl(this),this.P=this,this.I=null}pt(ot,xs);ot.prototype[_a]=!0;ot.prototype.removeEventListener=function(t,e,n,s){Vb(this,t,e,n,s)};function ht(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Tt(e,t);else if(e instanceof Tt)e.target=e.target||t;else{var r=e;e=new Tt(s,t),Fb(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Za(o,s,!0,e)&&r}if(o=e.g=t,r=Za(o,s,!0,e)&&r,r=Za(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Za(o,s,!1,e)&&r}ot.prototype.M=function(){if(ot.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)zl(n[s]);delete t.g[e],t.h--}}this.I=null};ot.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ot.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Za(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&mf(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Np=ne.JSON.stringify;function jF(){var t=qb;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class WF{constructor(){this.h=this.g=null}add(e,n){const s=jb.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var jb=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new qF,t=>t.reset());class qF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function KF(t){ne.setTimeout(()=>{throw t},0)}function Wb(t,e){_f||zF(),vf||(_f(),vf=!0),qb.add(t,e)}var _f;function zF(){var t=ne.Promise.resolve(void 0);_f=function(){t.then(GF)}}var vf=!1,qb=new WF;function GF(){for(var t;t=jF();){try{t.h.call(t.g)}catch(n){KF(n)}var e=jb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}vf=!1}function Ql(t,e){ot.call(this),this.h=t||1,this.g=e||ne,this.j=bt(this.lb,this),this.l=Date.now()}pt(Ql,ot);z=Ql.prototype;z.ca=!1;z.R=null;z.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ht(this,"tick"),this.ca&&(Op(this),this.start()))}};z.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Op(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}z.M=function(){Ql.X.M.call(this),Op(this),delete this.g};function Pp(t,e,n){if(typeof t=="function")n&&(t=bt(t,n));else if(t&&typeof t.handleEvent=="function")t=bt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function Kb(t){t.g=Pp(()=>{t.g=null,t.i&&(t.i=!1,Kb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class QF extends xs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Kb(this)}M(){super.M(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vo(t){xs.call(this),this.h=t,this.g={}}pt(Vo,xs);var Jy=[];function zb(t,e,n,s){Array.isArray(n)||(n&&(Jy[0]=n.toString()),n=Jy);for(var r=0;r<n.length;r++){var i=Ub(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Gb(t){Ip(t.g,function(e,n){this.g.hasOwnProperty(n)&&kp(e)},t),t.g={}}Vo.prototype.M=function(){Vo.X.M.call(this),Gb(this)};Vo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Yl(){this.g=!0}Yl.prototype.Aa=function(){this.g=!1};function YF(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function XF(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ur(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ZF(t,n)+(s?" "+s:"")})}function JF(t,e){t.info(function(){return"TIMEOUT: "+e})}Yl.prototype.info=function(){};function ZF(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Np(n)}catch{return e}}var vr={},Zy=null;function Xl(){return Zy=Zy||new ot}vr.Pa="serverreachability";function Qb(t){Tt.call(this,vr.Pa,t)}pt(Qb,Tt);function Ho(t){const e=Xl();ht(e,new Qb(e))}vr.STAT_EVENT="statevent";function Yb(t,e){Tt.call(this,vr.STAT_EVENT,t),this.stat=e}pt(Yb,Tt);function Pt(t){const e=Xl();ht(e,new Yb(e,t))}vr.Qa="timingevent";function Xb(t,e){Tt.call(this,vr.Qa,t),this.size=e}pt(Xb,Tt);function va(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var Jl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Jb={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Dp(){}Dp.prototype.h=null;function e_(t){return t.h||(t.h=t.i())}function Zb(){}var wa={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function xp(){Tt.call(this,"d")}pt(xp,Tt);function Mp(){Tt.call(this,"c")}pt(Mp,Tt);var wf;function Zl(){}pt(Zl,Dp);Zl.prototype.g=function(){return new XMLHttpRequest};Zl.prototype.i=function(){return{}};wf=new Zl;function Ea(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Vo(this),this.O=eU,t=pf?125:void 0,this.T=new Ql(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new eT}function eT(){this.i=null,this.g="",this.h=!1}var eU=45e3,Ef={},tl={};z=Ea.prototype;z.setTimeout=function(t){this.O=t};function bf(t,e,n){t.K=1,t.v=tu(Gn(e)),t.s=n,t.P=!0,tT(t,null)}function tT(t,e){t.F=Date.now(),ba(t),t.A=Gn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),lT(n.i,"t",s),t.C=0,n=t.l.H,t.h=new eT,t.g=NT(t.l,n?e:null,!t.s),0<t.N&&(t.L=new QF(bt(t.La,t,t.g),t.N)),zb(t.S,t.g,"readystatechange",t.ib),e=t.H?Lb(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ho(),YF(t.j,t.u,t.A,t.m,t.U,t.s)}z.ib=function(t){t=t.target;const e=this.L;e&&jn(t)==3?e.l():this.La(t)};z.La=function(t){try{if(t==this.g)e:{const u=jn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||pf||this.g&&(this.h.h||this.g.fa()||r_(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Ho(3):Ho(2)),eu(this);var n=this.g.aa();this.Y=n;t:if(nT(this)){var s=r_(this.g);t="";var r=s.length,i=jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gs(this),_o(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,XF(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zc(a)){var l=a;break t}}l=null}if(n=l)Ur(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Tf(this,n);else{this.i=!1,this.o=3,Pt(12),Gs(this),_o(this);break e}}this.P?(sT(this,u,o),pf&&this.i&&u==3&&(zb(this.S,this.T,"tick",this.hb),this.T.start())):(Ur(this.j,this.m,o,null),Tf(this,o)),u==4&&Gs(this),this.i&&!this.I&&(u==4?ST(this.l,this):(this.i=!1,ba(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pt(12)):(this.o=0,Pt(13)),Gs(this),_o(this)}}}catch{}finally{}};function nT(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function sT(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=tU(t,n),r==tl){e==4&&(t.o=4,Pt(14),s=!1),Ur(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Ef){t.o=4,Pt(15),Ur(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ur(t.j,t.m,r,null),Tf(t,r);nT(t)&&r!=tl&&r!=Ef&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Pt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hp(e),e.K=!0,Pt(11))):(Ur(t.j,t.m,n,"[Invalid Chunked Response]"),Gs(t),_o(t))}z.hb=function(){if(this.g){var t=jn(this.g),e=this.g.fa();this.C<e.length&&(eu(this),sT(this,t,e),this.i&&t!=4&&ba(this))}};function tU(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?tl:(n=Number(e.substring(n,s)),isNaN(n)?Ef:(s+=1,s+n>e.length?tl:(e=e.substr(s,n),t.C=s+n,e)))}z.cancel=function(){this.I=!0,Gs(this)};function ba(t){t.V=Date.now()+t.O,rT(t,t.O)}function rT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=va(bt(t.gb,t),e)}function eu(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}z.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(JF(this.j,this.A),this.K!=2&&(Ho(),Pt(17)),Gs(this),this.o=2,_o(this)):rT(this,this.V-t)};function _o(t){t.l.G==0||t.I||ST(t.l,t)}function Gs(t){eu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Op(t.T),Gb(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Tf(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Cf(n.h,t))){if(!t.J&&Cf(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)rl(n),ru(n);else break e;Vp(n),Pt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=va(bt(n.cb,n),6e3));if(1>=fT(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Qs(n,11)}else if((t.J||n.g==t)&&rl(n),!Zc(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=s.h;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Lp(i,i.h),i.h=null))}if(s.D){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,Ve(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=RT(s,s.H?s.ka:null,s.V),o.J){dT(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(eu(a),ba(a)),s.g=o}else CT(s);0<n.i.length&&iu(n)}else l[0]!="stop"&&l[0]!="close"||Qs(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Qs(n,7):Bp(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Ho(4)}catch{}}function nU(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ql(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function sU(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ql(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function iT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ql(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=sU(t),s=nU(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var oT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rU(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function tr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof tr){this.h=e!==void 0?e:t.h,nl(this,t.j),this.s=t.s,this.g=t.g,sl(this,t.m),this.l=t.l,e=t.i;var n=new jo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),t_(this,n),this.o=t.o}else t&&(n=String(t).match(oT))?(this.h=!!e,nl(this,n[1]||"",!0),this.s=eo(n[2]||""),this.g=eo(n[3]||"",!0),sl(this,n[4]),this.l=eo(n[5]||"",!0),t_(this,n[6]||"",!0),this.o=eo(n[7]||"")):(this.h=!!e,this.i=new jo(null,this.h))}tr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(to(e,n_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(to(e,n_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(to(n,n.charAt(0)=="/"?aU:oU,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",to(n,lU)),t.join("")};function Gn(t){return new tr(t)}function nl(t,e,n){t.j=n?eo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function sl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function t_(t,e,n){e instanceof jo?(t.i=e,uU(t.i,t.h)):(n||(e=to(e,cU)),t.i=new jo(e,t.h))}function Ve(t,e,n){t.i.set(e,n)}function tu(t){return Ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function eo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function to(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,iU),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function iU(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var n_=/[#\/\?@]/g,oU=/[#\?:]/g,aU=/[#\?]/g,cU=/[#\?@]/g,lU=/#/g;function jo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ms(t){t.g||(t.g=new Map,t.h=0,t.i&&rU(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}z=jo.prototype;z.add=function(t,e){Ms(this),this.i=null,t=Oi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function aT(t,e){Ms(t),e=Oi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function cT(t,e){return Ms(t),e=Oi(t,e),t.g.has(e)}z.forEach=function(t,e){Ms(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};z.oa=function(){Ms(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};z.W=function(t){Ms(this);let e=[];if(typeof t=="string")cT(this,t)&&(e=e.concat(this.g.get(Oi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};z.set=function(t,e){return Ms(this),this.i=null,t=Oi(this,t),cT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};z.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function lT(t,e,n){aT(t,e),0<n.length&&(t.i=null,t.g.set(Oi(t,e),Tp(n)),t.h+=n.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Oi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function uU(t,e){e&&!t.j&&(Ms(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(aT(this,s),lT(this,r,n))},t)),t.j=e}var hU=class{constructor(e,n){this.h=e,this.g=n}};function uT(t){this.l=t||fU,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ga&&ne.g.Ga()&&ne.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fU=10;function hT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function fT(t){return t.h?1:t.g?t.g.size:0}function Cf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Lp(t,e){t.g?t.g.add(e):t.h=e}function dT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}uT.prototype.cancel=function(){if(this.i=pT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function pT(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Tp(t.i)}function Fp(){}Fp.prototype.stringify=function(t){return ne.JSON.stringify(t,void 0)};Fp.prototype.parse=function(t){return ne.JSON.parse(t,void 0)};function dU(){this.g=new Fp}function pU(t,e,n){const s=n||"";try{iT(t,function(r,i){let o=r;ya(r)&&(o=Np(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function gU(t,e){const n=new Yl;if(ne.Image){const s=new Image;s.onload=Ja(ec,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ja(ec,n,s,"TestLoadImage: error",!1,e),s.onabort=Ja(ec,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ja(ec,n,s,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ec(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ta(t){this.l=t.ac||null,this.j=t.jb||!1}pt(Ta,Dp);Ta.prototype.g=function(){return new nu(this.l,this.j)};Ta.prototype.i=function(t){return function(){return t}}({});function nu(t,e){ot.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Up,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pt(nu,ot);var Up=0;z=nu.prototype;z.open=function(t,e){if(this.readyState!=Up)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Wo(this)};z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ne).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ca(this)),this.readyState=Up};z.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Wo(this)),this.g&&(this.readyState=3,Wo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;gT(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function gT(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}z.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ca(this):Wo(this),this.readyState==3&&gT(this)}};z.Va=function(t){this.g&&(this.response=this.responseText=t,Ca(this))};z.Ua=function(t){this.g&&(this.response=t,Ca(this))};z.ga=function(){this.g&&Ca(this)};function Ca(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Wo(t)}z.setRequestHeader=function(t,e){this.v.append(t,e)};z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Wo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(nu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var mU=ne.JSON.parse;function ze(t){ot.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=mT,this.K=this.L=!1}pt(ze,ot);var mT="",yU=/^https?$/i,_U=["POST","PUT"];z=ze.prototype;z.Ka=function(t){this.L=t};z.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():wf.g(),this.C=this.u?e_(this.u):e_(wf),this.g.onreadystatechange=bt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){s_(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=ne.FormData&&t instanceof ne.FormData,!(0<=Pb(_U,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vT(this),0<this.B&&((this.K=vU(this.g))?(this.g.timeout=this.B,this.g.ontimeout=bt(this.qa,this)):this.A=Pp(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){s_(this,i)}};function vU(t){return ui&&LF()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}z.qa=function(){typeof bp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function s_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yT(t),su(t)}function yT(t){t.D||(t.D=!0,ht(t,"complete"),ht(t,"error"))}z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),su(this))};z.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),su(this,!0)),ze.X.M.call(this)};z.Ha=function(){this.s||(this.F||this.v||this.l?_T(this):this.fb())};z.fb=function(){_T(this)};function _T(t){if(t.h&&typeof bp<"u"&&(!t.C[1]||jn(t)!=4||t.aa()!=2)){if(t.v&&jn(t)==4)Pp(t.Ha,0,t);else if(ht(t,"readystatechange"),jn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(oT)[1]||null;if(!r&&ne.self&&ne.self.location){var i=ne.self.location.protocol;r=i.substr(0,i.length-1)}s=!yU.test(r?r.toLowerCase():"")}n=s}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var o=2<jn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",yT(t)}}finally{su(t)}}}}function su(t,e){if(t.g){vT(t);const n=t.g,s=t.C[0]?Jc:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=s}catch{}}}function vT(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}function jn(t){return t.g?t.g.readyState:0}z.aa=function(){try{return 2<jn(this)?this.g.status:-1}catch{return-1}};z.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),mU(e)}};function r_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case mT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}z.Ea=function(){return this.m};z.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function wT(t){let e="";return Ip(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function $p(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=wT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ve(t,e,n))}function zi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ET(t){this.Ca=0,this.i=[],this.j=new Yl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=zi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=zi("baseRetryDelayMs",5e3,t),this.bb=zi("retryDelaySeedMs",1e4,t),this.$a=zi("forwardChannelMaxRetries",2,t),this.ta=zi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new uT(t&&t.concurrentRequestLimit),this.Fa=new dU,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}z=ET.prototype;z.ma=8;z.G=1;function Bp(t){if(bT(t),t.G==3){var e=t.U++,n=Gn(t.F);Ve(n,"SID",t.I),Ve(n,"RID",e),Ve(n,"TYPE","terminate"),Ia(t,n),e=new Ea(t,t.j,e,void 0),e.K=2,e.v=tu(Gn(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon&&(n=ne.navigator.sendBeacon(e.v.toString(),"")),!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=NT(e.l,null),e.g.da(e.v)),e.F=Date.now(),ba(e)}AT(t)}function ru(t){t.g&&(Hp(t),t.g.cancel(),t.g=null)}function bT(t){ru(t),t.u&&(ne.clearTimeout(t.u),t.u=null),rl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function iu(t){hT(t.h)||t.m||(t.m=!0,Wb(t.Ja,t),t.C=0)}function wU(t,e){return fT(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=va(bt(t.Ja,t,e),kT(t,t.C)),t.C++,!0)}z.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ea(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Lb(i),Fb(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=TT(this,r,e),n=Gn(this.F),Ve(n,"RID",t),Ve(n,"CVER",22),this.D&&Ve(n,"X-HTTP-Session-Id",this.D),Ia(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(wT(i)))+"&"+e:this.o&&$p(n,this.o,i)),Lp(this.h,r),this.Ya&&Ve(n,"TYPE","init"),this.O?(Ve(n,"$req",e),Ve(n,"SID","null"),r.Z=!0,bf(r,n,null)):bf(r,n,e),this.G=2}}else this.G==3&&(t?i_(this,t):this.i.length==0||hT(this.h)||i_(this))};function i_(t,e){var n;e?n=e.m:n=t.U++;const s=Gn(t.F);Ve(s,"SID",t.I),Ve(s,"RID",n),Ve(s,"AID",t.T),Ia(t,s),t.o&&t.s&&$p(s,t.o,t.s),n=new Ea(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=TT(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Lp(t.h,n),bf(n,s,e)}function Ia(t,e){t.ia&&Ip(t.ia,function(n,s){Ve(e,s,n)}),t.l&&iT({},function(n,s){Ve(e,s,n)})}function TT(t,e,n){n=Math.min(t.i.length,n);var s=t.l?bt(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{pU(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function CT(t){t.g||t.u||(t.Z=1,Wb(t.Ia,t),t.A=0)}function Vp(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=va(bt(t.Ia,t),kT(t,t.A)),t.A++,!0)}z.Ia=function(){if(this.u=null,IT(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=va(bt(this.eb,this),t)}};z.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Pt(10),ru(this),IT(this))};function Hp(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function IT(t){t.g=new Ea(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Gn(t.sa);Ve(e,"RID","rpc"),Ve(e,"SID",t.I),Ve(e,"CI",t.L?"0":"1"),Ve(e,"AID",t.T),Ve(e,"TYPE","xmlhttp"),Ia(t,e),t.o&&t.s&&$p(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=tu(Gn(e)),n.s=null,n.P=!0,tT(n,t)}z.cb=function(){this.v!=null&&(this.v=null,ru(this),Vp(this),Pt(19))};function rl(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function ST(t,e){var n=null;if(t.g==e){rl(t),Hp(t),t.g=null;var s=2}else if(Cf(t.h,e))n=e.D,dT(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Xl(),ht(s,new Xb(s,n)),iu(t)}else CT(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&wU(t,e)||s==2&&Vp(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Qs(t,5);break;case 4:Qs(t,10);break;case 3:Qs(t,6);break;default:Qs(t,2)}}}function kT(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Qs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=bt(t.kb,t);n||(n=new tr("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||nl(n,"https"),tu(n)),gU(n.toString(),s)}else Pt(2);t.G=0,t.l&&t.l.va(e),AT(t),bT(t)}z.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function AT(t){if(t.G=0,t.la=[],t.l){const e=pT(t.h);(e.length!=0||t.i.length!=0)&&(Gy(t.la,e),Gy(t.la,t.i),t.h.i.length=0,Tp(t.i),t.i.length=0),t.l.ua()}}function RT(t,e,n){var s=n instanceof tr?Gn(n):new tr(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),sl(s,s.m);else{var r=ne.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new tr(null,void 0);s&&nl(i,s),e&&(i.g=e),r&&sl(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ve(s,n,e),Ve(s,"VER",t.ma),Ia(t,s),s}function NT(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ze(new Ta({jb:!0})):new ze(t.ra),e.Ka(t.H),e}function OT(){}z=OT.prototype;z.xa=function(){};z.wa=function(){};z.va=function(){};z.ua=function(){};z.Ra=function(){};function il(){if(ui&&!(10<=Number(FF)))throw Error("Environmental error: no available transport.")}il.prototype.g=function(t,e){return new zt(t,e)};function zt(t,e){ot.call(this),this.g=new ET(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Zc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Pi(this)}pt(zt,ot);zt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Pt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=RT(t,null,t.V),iu(t)};zt.prototype.close=function(){Bp(this.g)};zt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Np(t),t=n);e.i.push(new hU(e.ab++,t)),e.G==3&&iu(e)};zt.prototype.M=function(){this.g.l=null,delete this.j,Bp(this.g),delete this.g,zt.X.M.call(this)};function PT(t){xp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}pt(PT,xp);function DT(){Mp.call(this),this.status=1}pt(DT,Mp);function Pi(t){this.g=t}pt(Pi,OT);Pi.prototype.xa=function(){ht(this.g,"a")};Pi.prototype.wa=function(t){ht(this.g,new PT(t))};Pi.prototype.va=function(t){ht(this.g,new DT)};Pi.prototype.ua=function(){ht(this.g,"b")};il.prototype.createWebChannel=il.prototype.g;zt.prototype.send=zt.prototype.u;zt.prototype.open=zt.prototype.m;zt.prototype.close=zt.prototype.close;Jl.NO_ERROR=0;Jl.TIMEOUT=8;Jl.HTTP_ERROR=6;Jb.COMPLETE="complete";Zb.EventType=wa;wa.OPEN="a";wa.CLOSE="b";wa.ERROR="c";wa.MESSAGE="d";ot.prototype.listen=ot.prototype.N;ze.prototype.listenOnce=ze.prototype.O;ze.prototype.getLastError=ze.prototype.Oa;ze.prototype.getLastErrorCode=ze.prototype.Ea;ze.prototype.getStatus=ze.prototype.aa;ze.prototype.getResponseJson=ze.prototype.Sa;ze.prototype.getResponseText=ze.prototype.fa;ze.prototype.send=ze.prototype.da;ze.prototype.setWithCredentials=ze.prototype.Ka;var EU=function(){return new il},bU=function(){return Xl()},rh=Jl,TU=Jb,CU=vr,o_={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},IU=Ta,tc=Zb,SU=ze;const a_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new ia("@firebase/firestore");function c_(){return fr.logLevel}function Q(t,...e){if(fr.logLevel<=ve.DEBUG){const n=e.map(jp);fr.debug(`Firestore (${Di}): ${t}`,...n)}}function Qn(t,...e){if(fr.logLevel<=ve.ERROR){const n=e.map(jp);fr.error(`Firestore (${Di}): ${t}`,...n)}}function ol(t,...e){if(fr.logLevel<=ve.WARN){const n=e.map(jp);fr.warn(`Firestore (${Di}): ${t}`,...n)}}function jp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${Di}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function Je(t,e){t||ae()}function we(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kU{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class AU{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class RU{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Ts;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ts,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ts)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Je(typeof s.accessToken=="string"),new xT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Je(e===null||typeof e=="string"),new mt(e)}}class NU{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class OU{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new NU(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class PU{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DU{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Je(typeof n.token=="string"),this.T=n.token,new PU(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xU(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MU{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=xU(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ke(t,e){return t<e?-1:t>e?1:0}function hi(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ze(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Ze(0,0))}static max(){return new oe(new Ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n,s){n===void 0?n=0:n>e.length&&ae(),s===void 0?s=e.length-n:s>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return qo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qo?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class je extends qo{construct(e,n,s){return new je(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new K(D.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new je(n)}static emptyPath(){return new je([])}}const LU=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends qo{construct(e,n,s){return new Nt(e,n,s)}static isValidIdentifier(e){return LU.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Nt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new K(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new K(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new K(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(n)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(je.fromString(e))}static fromName(e){return new Z(je.fromString(e).popFirst(5))}static empty(){return new Z(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new je(e.slice()))}}function FU(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=oe.fromTimestamp(s===1e9?new Ze(n+1,0):new Ze(n,s));return new Ns(r,Z.empty(),e)}function UU(t){return new Ns(t.readTime,t.key,-1)}class Ns{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ns(oe.min(),Z.empty(),-1)}static max(){return new Ns(oe.max(),Z.empty(),-1)}}function $U(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:ke(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BU="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VU{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wp(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==BU)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,s)=>{n(e)})}static reject(e){return new P((n,s)=>{s(e)})}static waitFor(e){return new P((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=P.resolve(!1);for(const s of e)n=n.next(r=>r?P.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new P((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new P((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Sa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}qp.ct=-1;function ou(t){return t==null}function al(t){return t===0&&1/t==-1/0}function HU(t){return typeof t=="number"&&Number.isInteger(t)&&!al(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ka(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function MT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new dt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nc(this.root,e,this.comparator,!1)}getReverseIterator(){return new nc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nc(this.root,e,this.comparator,!0)}}class nc{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ct.RED,this.left=r??ct.EMPTY,this.right=i??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ct(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ct.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new u_(this.data.getIterator())}getIteratorFrom(e){return new u_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class u_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new ps([])}unionWith(e){let n=new et(Nt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ps(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jU extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new jU("Invalid base64 string: "+r):r}}(e);return new kt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const WU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Os(t){if(Je(!!t),typeof t=="string"){let e=0;const n=WU.exec(t);if(Je(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fi(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function FT(t){const e=t.mapValue.fields.__previous_value__;return LT(e)?FT(e):e}function Ko(t){const e=Os(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qU{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class zo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?LT(t)?4:KU(t)?9007199254740991:10:ae()}function Nn(t,e){if(t===e)return!0;const n=dr(t);if(n!==dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ko(t).isEqual(Ko(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Os(s.timestampValue),o=Os(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return fi(s.bytesValue).isEqual(fi(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ye(s.geoPointValue.latitude)===Ye(r.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ye(s.integerValue)===Ye(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ye(s.doubleValue),o=Ye(r.doubleValue);return i===o?al(i)===al(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return hi(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(l_(i)!==l_(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Nn(i[a],o[a])))return!1;return!0}(t,e);default:return ae()}}function Go(t,e){return(t.values||[]).find(n=>Nn(n,e))!==void 0}function di(t,e){if(t===e)return 0;const n=dr(t),s=dr(e);if(n!==s)return ke(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ye(r.integerValue||r.doubleValue),a=Ye(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return h_(t.timestampValue,e.timestampValue);case 4:return h_(Ko(t),Ko(e));case 5:return ke(t.stringValue,e.stringValue);case 6:return function(r,i){const o=fi(r),a=fi(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ke(o[c],a[c]);if(l!==0)return l}return ke(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ke(Ye(r.latitude),Ye(i.latitude));return o!==0?o:ke(Ye(r.longitude),Ye(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=di(o[c],a[c]);if(l)return l}return ke(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===sc.mapValue&&i===sc.mapValue)return 0;if(r===sc.mapValue)return 1;if(i===sc.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ke(a[u],l[u]);if(h!==0)return h;const f=di(o[a[u]],c[l[u]]);if(f!==0)return f}return ke(a.length,l.length)}(t.mapValue,e.mapValue);default:throw ae()}}function h_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ke(t,e);const n=Os(t),s=Os(e),r=ke(n.seconds,s.seconds);return r!==0?r:ke(n.nanos,s.nanos)}function pi(t){return If(t)}function If(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Os(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?fi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=If(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${If(s.fields[a])}`;return i+"}"}(t.mapValue):ae();var e,n}function f_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sf(t){return!!t&&"integerValue"in t}function Kp(t){return!!t&&"arrayValue"in t}function d_(t){return!!t&&"nullValue"in t}function p_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ih(t){return!!t&&"mapValue"in t}function vo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ka(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=vo(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function KU(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.value=e}static empty(){return new Tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ih(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vo(n)}setAll(e){let n=Nt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=vo(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ih(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ih(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ka(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Tn(vo(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new vt(e,0,oe.min(),oe.min(),oe.min(),Tn.empty(),0)}static newFoundDocument(e,n,s,r){return new vt(e,1,n,oe.min(),s,r,0)}static newNoDocument(e,n){return new vt(e,2,n,oe.min(),oe.min(),Tn.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,oe.min(),oe.min(),Tn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n){this.position=e,this.inclusive=n}}function g_(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=Z.comparator(Z.fromName(o.referenceValue),n.key):s=di(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function m_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n="asc"){this.field=e,this.dir=n}}function zU(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{}class Xe extends UT{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new QU(e,n,s):n==="array-contains"?new JU(e,s):n==="in"?new ZU(e,s):n==="not-in"?new e$(e,s):n==="array-contains-any"?new t$(e,s):new Xe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new YU(e,s):new XU(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(di(n,this.value)):n!==null&&dr(this.value)===dr(n)&&this.matchesComparison(di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class mn extends UT{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new mn(e,n)}matches(e){return $T(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function $T(t){return t.op==="and"}function BT(t){return GU(t)&&$T(t)}function GU(t){for(const e of t.filters)if(e instanceof mn)return!1;return!0}function kf(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+pi(t.value);if(BT(t))return t.filters.map(e=>kf(e)).join(",");{const e=t.filters.map(n=>kf(n)).join(",");return`${t.op}(${e})`}}function VT(t,e){return t instanceof Xe?function(n,s){return s instanceof Xe&&n.op===s.op&&n.field.isEqual(s.field)&&Nn(n.value,s.value)}(t,e):t instanceof mn?function(n,s){return s instanceof mn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&VT(i,s.filters[o]),!0):!1}(t,e):void ae()}function HT(t){return t instanceof Xe?function(e){return`${e.field.canonicalString()} ${e.op} ${pi(e.value)}`}(t):t instanceof mn?function(e){return e.op.toString()+" {"+e.getFilters().map(HT).join(" ,")+"}"}(t):"Filter"}class QU extends Xe{constructor(e,n,s){super(e,n,s),this.key=Z.fromName(s.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class YU extends Xe{constructor(e,n){super(e,"in",n),this.keys=jT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XU extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=jT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function jT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Z.fromName(s.referenceValue))}class JU extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kp(n)&&Go(n.arrayValue,this.value)}}class ZU extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Go(this.value.arrayValue,n)}}class e$ extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Go(this.value.arrayValue,n)}}class t$ extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Go(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n${constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function y_(t,e=null,n=[],s=[],r=null,i=null,o=null){return new n$(t,e,n,s,r,i,o)}function zp(t){const e=we(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>kf(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ou(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>pi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>pi(s)).join(",")),e.ft=n}return e.ft}function Gp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zU(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!VT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!m_(t.startAt,e.startAt)&&m_(t.endAt,e.endAt)}function Af(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function s$(t,e,n,s,r,i,o,a){return new Aa(t,e,n,s,r,i,o,a)}function au(t){return new Aa(t)}function __(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function WT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Qp(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function qT(t){return t.collectionGroup!==null}function Gr(t){const e=we(t);if(e.dt===null){e.dt=[];const n=Qp(e),s=WT(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new wo(n)),e.dt.push(new wo(Nt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new wo(Nt.keyField(),i))}}}return e.dt}function Yn(t){const e=we(t);if(!e.wt)if(e.limitType==="F")e.wt=y_(e.path,e.collectionGroup,Gr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Gr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new wo(i.field,o))}const s=e.endAt?new cl(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new cl(e.startAt.position,e.startAt.inclusive):null;e.wt=y_(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function Rf(t,e){e.getFirstInequalityField(),Qp(t);const n=t.filters.concat([e]);return new Aa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Nf(t,e,n){return new Aa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cu(t,e){return Gp(Yn(t),Yn(e))&&t.limitType===e.limitType}function KT(t){return`${zp(Yn(t))}|lt:${t.limitType}`}function Of(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>HT(s)).join(", ")}]`),ou(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>pi(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>pi(s)).join(",")),`Target(${n})`}(Yn(t))}; limitType=${t.limitType})`}function lu(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):Z.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Gr(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=g_(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Gr(n),s)||n.endAt&&!function(r,i,o){const a=g_(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Gr(n),s))}(t,e)}function r$(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zT(t){return(e,n)=>{let s=!1;for(const r of Gr(t)){const i=i$(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function i$(t,e,n){const s=t.field.isKeyField()?Z.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?di(a,c):ae()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ka(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return MT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o$=new dt(Z.comparator);function Ps(){return o$}const GT=new dt(Z.comparator);function no(...t){let e=GT;for(const n of t)e=e.insert(n.key,n);return e}function a$(t){let e=GT;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ys(){return Eo()}function QT(){return Eo()}function Eo(){return new xi(t=>t.toString(),(t,e)=>t.isEqual(e))}const c$=new et(Z.comparator);function _e(...t){let e=c$;for(const n of t)e=e.add(n);return e}const l$=new et(ke);function YT(){return l$}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:al(e)?"-0":e}}function JT(t){return{integerValue:""+t}}function u$(t,e){return HU(e)?JT(e):XT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this._=void 0}}function h$(t,e,n){return t instanceof Pf?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ll?ZT(t,e):t instanceof ul?eC(t,e):function(s,r){const i=d$(s,r),o=v_(i)+v_(s._t);return Sf(i)&&Sf(s._t)?JT(o):XT(s.serializer,o)}(t,e)}function f$(t,e,n){return t instanceof ll?ZT(t,e):t instanceof ul?eC(t,e):n}function d$(t,e){return t instanceof Df?Sf(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Pf extends uu{}class ll extends uu{constructor(e){super(),this.elements=e}}function ZT(t,e){const n=tC(e);for(const s of t.elements)n.some(r=>Nn(r,s))||n.push(s);return{arrayValue:{values:n}}}class ul extends uu{constructor(e){super(),this.elements=e}}function eC(t,e){let n=tC(e);for(const s of t.elements)n=n.filter(r=>!Nn(r,s));return{arrayValue:{values:n}}}class Df extends uu{constructor(e,n){super(),this.serializer=e,this._t=n}}function v_(t){return Ye(t.integerValue||t.doubleValue)}function tC(t){return Kp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function p$(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ll&&s instanceof ll||n instanceof ul&&s instanceof ul?hi(n.elements,s.elements,Nn):n instanceof Df&&s instanceof Df?Nn(n._t,s._t):n instanceof Pf&&s instanceof Pf}(t.transform,e.transform)}class nr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nr}static exists(e){return new nr(void 0,e)}static updateTime(e){return new nr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yp{}function nC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new m$(t.key,nr.none()):new Xp(t.key,t.data,nr.none());{const n=t.data,s=Tn.empty();let r=new et(Nt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new hu(t.key,s,new ps(r.toArray()),nr.none())}}function g$(t,e,n){t instanceof Xp?function(s,r,i){const o=s.value.clone(),a=E_(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof hu?function(s,r,i){if(!yc(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=E_(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(sC(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function bo(t,e,n,s){return t instanceof Xp?function(r,i,o,a){if(!yc(r.precondition,i))return o;const c=r.value.clone(),l=b_(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof hu?function(r,i,o,a){if(!yc(r.precondition,i))return o;const c=b_(r.fieldTransforms,a,i),l=i.data;return l.setAll(sC(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return yc(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function w_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&hi(n,s,(r,i)=>p$(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xp extends Yp{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class hu extends Yp{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function E_(t,e,n){const s=new Map;Je(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,f$(o,a,n[r]))}return s}function b_(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,h$(i,o,e))}return s}class m$ extends Yp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y${constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&g$(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=bo(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=bo(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=QT();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=nC(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(oe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&hi(this.mutations,e.mutations,(n,s)=>w_(n,s))&&hi(this.baseMutations,e.baseMutations,(n,s)=>w_(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _${constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v${constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,fe;function rC(t){if(t===void 0)return Qn("GRPC error has no .code"),D.UNKNOWN;switch(t){case Qe.OK:return D.OK;case Qe.CANCELLED:return D.CANCELLED;case Qe.UNKNOWN:return D.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return D.INTERNAL;case Qe.UNAVAILABLE:return D.UNAVAILABLE;case Qe.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Qe.NOT_FOUND:return D.NOT_FOUND;case Qe.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Qe.ABORTED:return D.ABORTED;case Qe.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Qe.DATA_LOSS:return D.DATA_LOSS;default:return ae()}}(fe=Qe||(Qe={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return rc}static getOrCreateInstance(){return rc===null&&(rc=new Jp),rc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let rc=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ra.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new fu(oe.min(),r,YT(),Ps(),_e())}}class Ra{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ra(s,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class iC{constructor(e,n){this.targetId=e,this.Et=n}}class oC{constructor(e,n,s=kt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class T_{constructor(){this.At=0,this.Rt=I_(),this.vt=kt.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=_e(),n=_e(),s=_e();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ae()}}),new Ra(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=I_()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class w${constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Ps(),this.qt=C_(),this.Ut=new et(ke)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const s=e.targetId,r=e.Et.count,i=this.Yt(s);if(i){const o=i.target;if(Af(o))if(r===0){const a=new Z(o.path);this.Qt(s,a,vt.newNoDocument(a,oe.min()))}else Je(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Jp.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Af(a.target)){const c=new Z(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,vt.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=_e();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new fu(e,n,this.Ut,this.Lt,s);return this.Lt=Ps(),this.qt=C_(),this.Ut=new et(ke),r}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new T_,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new et(ke),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new T_),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function C_(){return new dt(Z.comparator)}function I_(){return new dt(Z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E$=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),b$=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),T$=(()=>({and:"AND",or:"OR"}))();class C${constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Qr(t){return Je(!!t),oe.fromTimestamp(function(e){const n=Os(e);return new Ze(n.seconds,n.nanos)}(t))}function cC(t,e){return function(n){return new je(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function lC(t){const e=je.fromString(t);return Je(dC(e)),e}function oh(t,e){const n=lC(e);if(n.get(1)!==t.databaseId.projectId)throw new K(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(uC(n))}function Mf(t,e){return cC(t.databaseId,e)}function I$(t){const e=lC(t);return e.length===4?je.emptyPath():uC(e)}function S_(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function uC(t){return Je(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function S$(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Je(l===void 0||typeof l=="string"),kt.fromBase64String(l||"")):(Je(l===void 0||l instanceof Uint8Array),kt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?D.UNKNOWN:rC(c.code);return new K(l,c.message||"")}(o);n=new oC(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=oh(t,s.document.name),i=Qr(s.document.updateTime),o=s.document.createTime?Qr(s.document.createTime):oe.min(),a=new Tn({mapValue:{fields:s.document.fields}}),c=vt.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new _c(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=oh(t,s.document),i=s.readTime?Qr(s.readTime):oe.min(),o=vt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new _c([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=oh(t,s.document),i=s.removedTargetIds||[];n=new _c([],i,r,null)}else{if(!("filter"in e))return ae();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new v$(r),o=s.targetId;n=new iC(o,i)}}return n}function k$(t,e){return{documents:[Mf(t,e.path)]}}function A$(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Mf(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Mf(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return fC(mn.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Nr(u.field),direction:O$(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||ou(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function R$(t){let e=I$(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Je(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=hC(u);return h instanceof mn&&BT(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new wo(Or(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ou(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new cl(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new cl(f,h)}(n.endAt)),s$(e,r,o,i,a,"F",c,l)}function N$(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ae()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function hC(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Or(e.unaryFilter.field);return Xe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Or(e.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Or(e.unaryFilter.field);return Xe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Or(e.unaryFilter.field);return Xe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(e){return Xe.create(Or(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return mn.create(e.compositeFilter.filters.map(n=>hC(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ae()}}(e.compositeFilter.op))}(t):ae()}function O$(t){return E$[t]}function P$(t){return b$[t]}function D$(t){return T$[t]}function Nr(t){return{fieldPath:t.canonicalString()}}function Or(t){return Nt.fromServerFormat(t.fieldPath)}function fC(t){return t instanceof Xe?function(e){if(e.op==="=="){if(p_(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NAN"}};if(d_(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(p_(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NOT_NAN"}};if(d_(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nr(e.field),op:P$(e.op),value:e.value}}}(t):t instanceof mn?function(e){const n=e.getFilters().map(s=>fC(s));return n.length===1?n[0]:{compositeFilter:{op:D$(e.op),filters:n}}}(t):ae()}function dC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,s,r,i=oe.min(),o=oe.min(),a=kt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x${constructor(e){this.se=e}}function M$(t){const e=R$({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L${constructor(){this.He=new F$}addToCollectionParentIndex(e,n){return this.He.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(Ns.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(Ns.min())}updateCollectionGroup(e,n,s){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class F${constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new et(je.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new et(je.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new gi(0)}static bn(){return new gi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U${constructor(){this.changes=new xi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?P.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $${constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B${constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&bo(s.mutation,r,ps.empty(),Ze.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,_e()).next(()=>s))}getLocalViewOfDocuments(e,n,s=_e()){const r=Ys();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=no();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ys();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,_e()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Ps();const o=Eo(),a=Eo();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof hu)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),bo(u.mutation,l,u.mutation.getFieldMask(),Ze.now())):o.set(l.key,ps.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new $$(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Eo();let r=new dt((o,a)=>o-a),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||ps.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||_e()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=QT();u.forEach(f=>{if(!i.has(f)){const d=nC(n.get(f),s.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return P.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return Z.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):P.resolve(Ys());let a=-1,c=i;return o.next(l=>P.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?P.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,_e())).next(u=>({batchId:a,changes:a$(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(s=>{let r=no();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=no();return this.indexManager.getCollectionParents(e,r).next(o=>P.forEach(o,a=>{const c=function(l,u){return new Aa(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,vt.newInvalidDocument(l)))});let o=no();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&bo(l.mutation,c,ps.empty(),Ze.now()),lu(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V${constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return P.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Qr(s.createTime)}),P.resolve()}getNamedQuery(e,n){return P.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:M$(s.bundledQuery),readTime:Qr(s.readTime)}}(n)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H${constructor(){this.overlays=new dt(Z.comparator),this.ts=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ys();return P.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.re(e,n,i)}),P.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),P.resolve()}getOverlaysForCollection(e,n,s){const r=Ys(),i=n.length+1,o=new Z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return P.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new dt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Ys(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ys(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return P.resolve(a)}re(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new _$(n,s));let i=this.ts.get(n);i===void 0&&(i=_e(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.es=new et(nt.ns),this.ss=new et(nt.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new nt(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new nt(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new Z(new je([])),s=new nt(n,e),r=new nt(n,e+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new Z(new je([])),s=new nt(n,e),r=new nt(n,e+1);let i=_e();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new nt(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class nt{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return Z.comparator(e.key,n.key)||ke(e.ds,n.ds)}static rs(e,n){return ke(e.ds,n.ds)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j${constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new et(nt.ns)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new y$(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new nt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new nt(n,0),r=new nt(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new et(ke);return n.forEach(r=>{const i=new nt(r,0),o=new nt(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),P.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;Z.isDocumentKey(i)||(i=i.child(""));const o=new nt(new Z(i),0);let a=new et(ke);return this._s.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ds)),!0)},o),P.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Je(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return P.forEach(n.mutations,r=>{const i=new nt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new nt(n,0),r=this._s.firstAfterOrEqual(s);return P.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W${constructor(e){this.Ts=e,this.docs=new dt(Z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return P.resolve(s?s.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let s=Ps();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():vt.newInvalidDocument(r))}),P.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Ps();const o=n.path,a=new Z(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||$U(UU(u),s)<=0||(r.has(u.key)||lu(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,n,s,r){ae()}Es(e,n){return P.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new q$(this)}getSize(e){return P.resolve(this.size)}}class q$ extends U${constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(s)}),P.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K${constructor(e){this.persistence=e,this.As=new xi(n=>zp(n),Gp),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Zp,this.targetCount=0,this.bs=gi.vn()}forEachTarget(e,n){return this.As.forEach((s,r)=>n(r)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),P.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new gi(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.Sn(n),P.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),P.waitFor(i).next(()=>r)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return P.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),P.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),P.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return P.resolve(s)}containsKey(e,n){return P.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z${constructor(e,n){this.Ps={},this.overlays={},this.Vs=new qp(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new K$(this),this.indexManager=new L$,this.remoteDocumentCache=function(s){return new W$(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new x$(n),this.xs=new V$(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new H$,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new j$(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){Q("MemoryPersistence","Starting transaction:",e);const r=new G$(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return P.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class G$ extends VU{constructor(e){super(),this.currentSequenceNumber=e}}class eg{constructor(e){this.persistence=e,this.$s=new Zp,this.Ms=null}static Fs(e){return new eg(e)}get Bs(){if(this.Ms)return this.Ms;throw ae()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),P.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),P.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Bs,s=>{const r=Z.fromPath(s);return this.Ls(e,r).next(i=>{i||n.removeEntry(r,oe.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return P.or([()=>P.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=r}static Di(e,n){let s=_e(),r=_e();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new tg(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q${constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ni(e,n).next(i=>i||this.ki(e,n,r,s)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(__(n))return P.resolve(null);let s=Yn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Nf(n,null,"F"),s=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=_e(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,Nf(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,s,r){return __(n)||r.isEqual(oe.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(e,n):(c_()<=ve.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Of(n)),this.Fi(e,o,n,FU(r,-1)))})}$i(e,n){let s=new et(zT(e));return n.forEach((r,i)=>{lu(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return c_()<=ve.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Of(n)),this.xi.getDocumentsMatchingQuery(e,n,Ns.min())}Fi(e,n,s,r){return this.xi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y${constructor(e,n,s,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new dt(ke),this.qi=new xi(i=>zp(i),Gp),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new B$(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function X$(t,e,n,s){return new Y$(t,e,n,s)}async function pC(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=_e();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function gC(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function J$(t,e){const n=we(t),s=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(kt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),r=r.insert(h,d),function(p,y,E){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(f,d,u)&&a.push(n.Ds.updateTargetData(i,d))});let c=Ps(),l=_e();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Z$(i,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!s.isEqual(oe.min())){const u=n.Ds.getLastRemoteSnapshotVersion(i).next(h=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Li=r,i))}function Z$(t,e,n){let s=_e(),r=_e();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Ps();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(oe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):Q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:r}})}function eB(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,e).next(i=>i?(r=i,P.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new sr(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Lf(t,e,n){const s=we(t),r=s.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Sa(o))throw o;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function k_(t,e,n){const s=we(t);let r=oe.min(),i=_e();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=we(a),h=u.qi.get(l);return h!==void 0?P.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(s,o,Yn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?r:oe.min(),n?i:_e())).next(a=>(tB(s,r$(e),a),{documents:a,Wi:i})))}function tB(t,e,n){let s=t.Ui.get(e)||oe.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ui.set(e,s)}class A_{constructor(){this.activeTargetIds=YT()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nB{constructor(){this.Br=new A_,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new A_,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sB{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic=null;function ah(){return ic===null?ic=268435456+Math.round(2147483648*Math.random()):ic++,"0x"+ic.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rB={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iB{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class oB extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,r,i){const o=ah(),a=this.ao(e,n);Q("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(e,a,c,s).then(l=>(Q("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw ol("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Di,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=rB[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){const i=ah();return new Promise((o,a)=>{const c=new SU;c.setWithCredentials(!0),c.listenOnce(TU.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case rh.NO_ERROR:const u=c.getResponseJson();Q(gt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case rh.TIMEOUT:Q(gt,`RPC '${e}' ${i} timed out`),a(new K(D.DEADLINE_EXCEEDED,"Request time out"));break;case rh.HTTP_ERROR:const h=c.getStatus();if(Q(gt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(y){const E=y.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(E)>=0?E:D.UNKNOWN}(d.status);a(new K(p,d.message))}else a(new K(D.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new K(D.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{Q(gt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);Q(gt,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}wo(e,n,s){const r=ah(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=EU(),a=bU(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new IU({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");Q(gt,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,f=!1;const d=new iB({Wr:y=>{f?Q(gt,`Not sending because RPC '${e}' stream ${r} is closed:`,y):(h||(Q(gt,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),Q(gt,`RPC '${e}' stream ${r} sending:`,y),u.send(y))},Hr:()=>u.close()}),p=(y,E,v)=>{y.listen(E,g=>{try{v(g)}catch(_){setTimeout(()=>{throw _},0)}})};return p(u,tc.EventType.OPEN,()=>{f||Q(gt,`RPC '${e}' stream ${r} transport opened.`)}),p(u,tc.EventType.CLOSE,()=>{f||(f=!0,Q(gt,`RPC '${e}' stream ${r} transport closed`),d.so())}),p(u,tc.EventType.ERROR,y=>{f||(f=!0,ol(gt,`RPC '${e}' stream ${r} transport errored:`,y),d.so(new K(D.UNAVAILABLE,"The operation could not be completed")))}),p(u,tc.EventType.MESSAGE,y=>{var E;if(!f){const v=y.data[0];Je(!!v);const g=v,_=g.error||((E=g[0])===null||E===void 0?void 0:E.error);if(_){Q(gt,`RPC '${e}' stream ${r} received error:`,_);const b=_.status;let C=function(S){const T=Qe[S];if(T!==void 0)return rC(T)}(b),A=_.message;C===void 0&&(C=D.INTERNAL,A="Unknown error status: "+b+" with message "+_.message),f=!0,d.so(new K(C,A)),u.close()}else Q(gt,`RPC '${e}' stream ${r} received:`,v),d.io(v)}}),p(a,CU.STAT_EVENT,y=>{y.stat===o_.PROXY?Q(gt,`RPC '${e}' stream ${r} detected buffering proxy`):y.stat===o_.NOPROXY&&Q(gt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function ch(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t){return new C$(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&Q("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aB{constructor(e,n,s,r,i,o,a,c){this.Ws=e,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new mC(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{e(()=>{const r=new K(D.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cB extends aB{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=S$(this.serializer,e),s=function(r){if(!("targetChange"in r))return oe.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?oe.min():i.readTime?Qr(i.readTime):oe.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=S_(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=Af(a)?{documents:k$(r,a)}:{query:A$(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=aC(r,i.resumeToken):i.snapshotVersion.compareTo(oe.min())>0&&(o.readTime=xf(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=N$(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=S_(this.serializer),n.removeTarget=e,this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lB extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new K(D.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new K(D.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(D.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class uB{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Qn(n),this.ru=!1):Q("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hB{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{Oa(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=we(a);c.du.add(4),await Na(c),c.mu.set("Unknown"),c.du.delete(4),await pu(c)}(this))})}),this.mu=new uB(s,r)}}async function pu(t){if(Oa(t))for(const e of t.wu)await e(!0)}async function Na(t){for(const e of t.wu)await e(!1)}function yC(t,e){const n=we(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),rg(n)?sg(n):Mi(n).No()&&ng(n,e))}function _C(t,e){const n=we(t),s=Mi(n);n.fu.delete(e),s.No()&&vC(n,e),n.fu.size===0&&(s.No()?s.$o():Oa(n)&&n.mu.set("Unknown"))}function ng(t,e){t.gu.Ot(e.targetId),Mi(t).jo(e)}function vC(t,e){t.gu.Ot(e),Mi(t).Wo(e)}function sg(t){t.gu=new w$({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Mi(t).start(),t.mu.ou()}function rg(t){return Oa(t)&&!Mi(t).xo()&&t.fu.size>0}function Oa(t){return we(t).du.size===0}function wC(t){t.gu=void 0}async function fB(t){t.fu.forEach((e,n)=>{ng(t,e)})}async function dB(t,e){wC(t),rg(t)?(t.mu.au(e),sg(t)):t.mu.set("Unknown")}async function pB(t,e,n){if(t.mu.set("Online"),e instanceof oC&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await N_(t,s)}else if(e instanceof _c?t.gu.Kt(e):e instanceof iC?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(oe.min()))try{const s=await gC(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.fu.get(c);l&&r.fu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(kt.EMPTY_BYTE_STRING,c.snapshotVersion)),vC(r,a);const l=new sr(c.target,a,1,c.sequenceNumber);ng(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){Q("RemoteStore","Failed to raise snapshot:",s),await N_(t,s)}}async function N_(t,e,n){if(!Sa(e))throw e;t.du.add(1),await Na(t),t.mu.set("Offline"),n||(n=()=>gC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await pu(t)})}async function O_(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const s=Oa(n);n.du.add(3),await Na(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await pu(n)}async function gB(t,e){const n=we(t);e?(n.du.delete(2),await pu(n)):e||(n.du.add(2),await Na(n),n.mu.set("Unknown"))}function Mi(t){return t.yu||(t.yu=function(e,n,s){const r=we(e);return r.nu(),new cB(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:fB.bind(null,t),Zr:dB.bind(null,t),zo:pB.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),rg(t)?sg(t):t.mu.set("Unknown")):(await t.yu.stop(),wC(t))})),t.yu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ts,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new ig(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function EC(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),Sa(t))return new K(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||Z.comparator(n.key,s.key):(n,s)=>Z.comparator(n.key,s.key),this.keyedMap=no(),this.sortedSet=new dt(this.comparator)}static emptySet(e){return new Yr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Yr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Yr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(){this.Iu=new dt(Z.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):ae():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class mi{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new mi(e,n,Yr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mB{constructor(){this.Eu=void 0,this.listeners=[]}}class yB{constructor(){this.queries=new xi(e=>KT(e),cu),this.onlineState="Unknown",this.Au=new Set}}async function og(t,e){const n=we(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new mB),r)try{i.Eu=await n.onListen(s)}catch(o){const a=EC(o,`Initialization of query '${Of(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&cg(n)}async function ag(t,e){const n=we(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function _B(t,e){const n=we(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&cg(n)}function vB(t,e,n){const s=we(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function cg(t){t.Au.forEach(e=>{e.next()})}class lg{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new mi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e){this.key=e}}class TC{constructor(e){this.key=e}}class wB{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=_e(),this.mutatedKeys=_e(),this.Ku=zT(e),this.Gu=new Yr(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new P_,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),d=lu(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let E=!1;f&&d?f.data.isEqual(d.data)?p!==y&&(s.track({type:3,doc:d}),E=!0):this.Wu(f,d)||(s.track({type:2,doc:d}),E=!0,(c&&this.Ku(d,c)>0||l&&this.Ku(d,l)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),E=!0):f&&!d&&(s.track({type:1,doc:f}),E=!0,(c||l)&&(a=!0)),E&&(d?(o=o.add(d),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((l,u)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return d(h)-d(f)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new mi(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new P_,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=_e(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new TC(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new bC(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=_e();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return mi.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class EB{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class bB{constructor(e){this.key=e,this.ec=!1}}class TB{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new xi(a=>KT(a),cu),this.ic=new Map,this.rc=new Set,this.oc=new dt(Z.comparator),this.uc=new Map,this.cc=new Zp,this.ac={},this.hc=new Map,this.lc=gi.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function CB(t,e){const n=OB(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await eB(n.localStore,Yn(e));n.isPrimaryClient&&yC(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await IB(n,e,s,a==="current",o.resumeToken)}return r}async function IB(t,e,n,s,r){t.dc=(h,f,d)=>async function(p,y,E,v){let g=y.view.zu(E);g.Mi&&(g=await k_(p.localStore,y.query,!1).then(({documents:C})=>y.view.zu(C,g)));const _=v&&v.targetChanges.get(y.targetId),b=y.view.applyChanges(g,p.isPrimaryClient,_);return x_(p,y.targetId,b.Yu),b.snapshot}(t,h,f,d);const i=await k_(t.localStore,e,!0),o=new wB(e,i.Wi),a=o.zu(i.documents),c=Ra.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);x_(t,n,l.Yu);const u=new EB(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function SB(t,e){const n=we(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!cu(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Lf(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),_C(n.remoteStore,s.targetId),Ff(n,s.targetId)}).catch(Wp)):(Ff(n,s.targetId),await Lf(n.localStore,s.targetId,!0))}async function CC(t,e){const n=we(t);try{const s=await J$(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(Je(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?Je(o.ec):r.removedDocuments.size>0&&(Je(o.ec),o.ec=!1))}),await SC(n,s,e)}catch(s){await Wp(s)}}function D_(t,e,n){const s=we(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=we(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&cg(a)}(s.eventManager,e),r.length&&s.nc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function kB(t,e,n){const s=we(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new dt(Z.comparator);o=o.insert(i,vt.newNoDocument(i,oe.min()));const a=_e().add(i),c=new fu(oe.min(),new Map,new et(ke),o,a);await CC(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),ug(s)}else await Lf(s.localStore,e,!1).then(()=>Ff(s,e,n)).catch(Wp)}function Ff(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||IC(t,s)})}function IC(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(_C(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),ug(t))}function x_(t,e,n){for(const s of n)s instanceof bC?(t.cc.addReference(s.key,e),AB(t,s)):s instanceof TC?(Q("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||IC(t,s.key)):ae()}function AB(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(Q("SyncEngine","New document in limbo: "+n),t.rc.add(s),ug(t))}function ug(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new Z(je.fromString(e)),s=t.lc.next();t.uc.set(s,new bB(n)),t.oc=t.oc.insert(n,s),yC(t.remoteStore,new sr(Yn(au(n.path)),s,2,qp.ct))}}async function SC(t,e,n){const s=we(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=tg.Di(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const l=we(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>P.forEach(c,h=>P.forEach(h.Vi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>P.forEach(h.Si,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Sa(u))throw u;Q("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Li.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);l.Li=l.Li.insert(h,p)}}}(s.localStore,i))}async function RB(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const s=await pC(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new K(D.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await SC(n,s.Qi)}}function NB(t,e){const n=we(t),s=n.uc.get(e);if(s&&s.ec)return _e().add(s.key);{let r=_e();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function OB(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=CC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NB.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kB.bind(null,e),e.nc.zo=_B.bind(null,e.eventManager),e.nc.wc=vB.bind(null,e.eventManager),e}class M_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=du(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return X$(this.persistence,new Q$,e.initialUser,this.serializer)}createPersistence(e){return new z$(eg.Fs,this.serializer)}createSharedClientState(e){return new nB}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class PB{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>D_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=RB.bind(null,this.syncEngine),await gB(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yB}createDatastore(e){const n=du(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new oB(r));var r;return function(i,o,a,c){return new lB(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>D_(this.syncEngine,a,0),o=R_.D()?new R_:new sB,new hB(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new TB(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=we(e);Q("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Na(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DB{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=mt.UNAUTHENTICATED,this.clientId=MU.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{Q("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(Q("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ts;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=EC(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function lh(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await pC(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function L_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await MB(t);Q("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>O_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>O_(e.remoteStore,i)),t._onlineComponents=e}function xB(t){return t.name==="FirebaseError"?t.code===D.FAILED_PRECONDITION||t.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function MB(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await lh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!xB(n))throw n;ol("Error using user provided cache. Falling back to memory cache: "+n),await lh(t,new M_)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await lh(t,new M_);return t._offlineComponents}async function LB(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await L_(t,t._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await L_(t,new PB))),t._onlineComponents}async function hl(t){const e=await LB(t),n=e.eventManager;return n.onListen=CB.bind(null,e.syncEngine),n.onUnlisten=SB.bind(null,e.syncEngine),n}function FB(t,e,n={}){const s=new Ts;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new hg({next:h=>{i.enqueueAndForget(()=>ag(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new K(D.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new K(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new lg(au(o.path),l,{includeMetadataChanges:!0,xu:!0});return og(r,u)}(await hl(t),t.asyncQueue,e,n,s)),s.promise}function UB(t,e,n={}){const s=new Ts;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new hg({next:h=>{i.enqueueAndForget(()=>ag(r,u)),h.fromCache&&a.source==="server"?c.reject(new K(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new lg(o,l,{includeMetadataChanges:!0,xu:!0});return og(r,u)}(await hl(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $B(t,e,n){if(!n)throw new K(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function BB(t,e,n,s){if(e===!0&&s===!0)throw new K(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function U_(t){if(Z.isDocumentKey(t))throw new K(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function Cs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gu(t);throw new K(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,BB("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $_(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new kU;switch(n.type){case"firstParty":return new OU(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=F_.get(e);n&&(Q("ComponentProvider","Removing Datastore"),F_.delete(e),n.terminate())}(this),Promise.resolve()}}function VB(t,e,n,s={}){var r;const i=(t=Cs(t,fg))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&ol("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=mt.MOCK_USER;else{o=cO(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new K(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new mt(c)}t._authCredentials=new AU(new xT(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _n(this.firestore,e,this._key)}}class wr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new wr(this.firestore,e,this._query)}}class Xr extends wr{constructor(e,n,s){super(e,n,au(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _n(this.firestore,null,new Z(e))}withConverter(e){return new Xr(this.firestore,e,this._path)}}function Dj(t,e,...n){if(t=xt(t),$B("collection","path",e),t instanceof fg){const s=je.fromString(e,...n);return U_(s),new Xr(t,null,s)}{if(!(t instanceof _n||t instanceof Xr))throw new K(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(je.fromString(e,...n));return U_(s),new Xr(t.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HB{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new mC(this,"async_queue_retry"),this.qc=()=>{const n=ch();n&&Q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=ch();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=ch();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Ts;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Sa(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Qn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=ig.createAndSchedule(this,e,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&ae()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function B_(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Qo extends fg{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new HB,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kC(this),this._firestoreClient.terminate()}}function jB(t,e){const n=typeof t=="object"?t:xl(),s=typeof t=="string"?t:e||"(default)",r=Ii(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=oO("firestore");i&&VB(r,...i)}return r}function dg(t){return t._firestoreClient||kC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kC(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new qU(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new DB(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yi(kt.fromBase64String(e))}catch(n){throw new K(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yi(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WB=/^__.*__$/;function NC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class pg{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new pg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.ea(e),r}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Uf(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(NC(this.Yc)&&WB.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class qB{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||du(e)}ua(e,n,s,r=!1){return new pg({Yc:e,methodName:n,oa:s,path:Nt.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function KB(t){const e=t._freezeSettings(),n=du(t._databaseId);return new qB(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zB(t,e,n,s=!1){return gg(n,t.ua(s?4:3,e))}function gg(t,e){if(OC(t=xt(t)))return QB("Unsupported field value:",e,t),GB(t,e);if(t instanceof RC)return function(n,s){if(!NC(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=gg(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=xt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return u$(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ze.fromDate(n);return{timestampValue:xf(s.serializer,r)}}if(n instanceof Ze){const r=new Ze(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xf(s.serializer,r)}}if(n instanceof mu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof yi)return{bytesValue:aC(s.serializer,n._byteString)};if(n instanceof _n){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:cC(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${gu(n)}`)}(t,e)}function GB(t,e){const n={};return MT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ka(t,(s,r)=>{const i=gg(r,e.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function OC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof mu||t instanceof yi||t instanceof _n||t instanceof RC)}function QB(t,e,n){if(!OC(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=gu(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}const YB=new RegExp("[~\\*/\\[\\]]");function XB(t,e,n){if(e.search(YB)>=0)throw Uf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new AC(...e.split("."))._internalPath}catch{throw Uf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Uf(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new K(D.INVALID_ARGUMENT,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _n(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JB(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(DC("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JB extends PC{data(){return super.data()}}function DC(t,e){return typeof e=="string"?XB(t,e):e instanceof AC?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mg{}class ZB extends mg{}function xj(t,e,...n){let s=[];e instanceof mg&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof _g).length,o=r.filter(a=>a instanceof yg).length;if(i>1||i>0&&o>0)throw new K(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class yg extends ZB{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new yg(e,n,s)}_apply(e){const n=this._parse(e);return MC(e._query,n),new wr(e.firestore,e.converter,Rf(e._query,n))}_parse(e){const n=KB(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new K(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){H_(u,l);const f=[];for(const d of u)f.push(V_(a,r,d));h={arrayValue:{values:f}}}else h=V_(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||H_(u,l),h=zB(o,i,u,l==="in"||l==="not-in");return Xe.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class _g extends mg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _g(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:mn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)MC(i,a),i=Rf(i,a)}(e._query,n),new wr(e.firestore,e.converter,Rf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function V_(t,e,n){if(typeof(n=xt(n))=="string"){if(n==="")throw new K(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qT(e)&&n.indexOf("/")!==-1)throw new K(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(je.fromString(n));if(!Z.isDocumentKey(s))throw new K(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return f_(t,new Z(s))}if(n instanceof _n)return f_(t,n._key);throw new K(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gu(n)}.`)}function H_(t,e){if(!Array.isArray(t)||t.length===0)throw new K(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function MC(t,e){if(e.isInequality()){const s=Qp(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new K(D.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=WT(t);i!==null&&eV(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function eV(t,e,n){if(!n.isEqual(e))throw new K(D.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class tV{convertValue(e,n="none"){switch(dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ae()}}convertObject(e,n){const s={};return ka(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new mu(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=FT(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ko(e));default:return null}}convertTimestamp(e){const n=Os(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=je.fromString(e);Je(dC(s));const r=new zo(s.get(1),s.get(3)),i=new Z(s.popFirst(5));return r.isEqual(n)||Qn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class LC extends PC{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(DC("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class vc extends LC{data(e={}){return super.data(e)}}class FC{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new so(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new vc(this._firestore,this._userDataWriter,s.key,s,new so(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new vc(s._firestore,s._userDataWriter,o.doc.key,o.doc,new so(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new vc(s._firestore,s._userDataWriter,o.doc.key,o.doc,new so(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:nV(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function nV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t){t=Cs(t,_n);const e=Cs(t.firestore,Qo);return FB(dg(e),t._key).then(n=>$C(e,t,n))}class vg extends tV{constructor(e){super(),this.firestore=e}convertBytes(e){return new yi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _n(this.firestore,null,n)}}function sV(t){t=Cs(t,wr);const e=Cs(t.firestore,Qo),n=dg(e),s=new vg(e);return xC(t._query),UB(n,t._query).then(r=>new FC(e,s,t,r))}function wg(t,...e){var n,s,r;t=xt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||B_(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(B_(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof _n)l=Cs(t.firestore,Qo),u=au(t._key.path),c={next:h=>{e[o]&&e[o]($C(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Cs(t,wr);l=Cs(h.firestore,Qo),u=h._query;const f=new vg(l);c={next:d=>{e[o]&&e[o](new FC(l,f,h,d))},error:e[o+1],complete:e[o+2]},xC(t._query)}return function(h,f,d,p){const y=new hg(p),E=new lg(f,y,d);return h.asyncQueue.enqueueAndForget(async()=>og(await hl(h),E)),()=>{y.yc(),h.asyncQueue.enqueueAndForget(async()=>ag(await hl(h),E))}}(dg(l),u,a,c)}function $C(t,e,n){const s=n.docs.get(e._key),r=new vg(t);return new LC(t,r,e._key,s,new so(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Di=n})(gr),Rn(new pn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Qo(new RU(n.getProvider("auth-internal")),new DU(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new K(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zo(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),qt(a_,"3.10.0",t),qt(a_,"3.10.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC="firebasestorage.googleapis.com",rV="storageBucket",iV=2*60*1e3,oV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Dn{constructor(e,n,s=0){super(uh(e),`Firebase Storage: ${n} (${uh(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return uh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var On;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(On||(On={}));function uh(t){return"storage/"+t}function aV(){const t="An unknown error occurred, please check the error payload for server response.";return new xn(On.UNKNOWN,t)}function cV(){return new xn(On.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function lV(){return new xn(On.CANCELED,"User canceled the upload/download.")}function uV(t){return new xn(On.INVALID_URL,"Invalid URL '"+t+"'.")}function hV(t){return new xn(On.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function j_(t){return new xn(On.INVALID_ARGUMENT,t)}function VC(){return new xn(On.APP_DELETED,"The Firebase app was deleted.")}function fV(t){return new xn(On.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=ln.makeFromUrl(e,n)}catch{return new ln(e,"")}if(s.path==="")return s;throw hV(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(b){b.path_=decodeURIComponent(b.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},y=n===BC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",v=new RegExp(`^https?://${y}/${r}/${E}`,"i"),_=[{regex:a,indices:c,postModify:i},{regex:d,indices:p,postModify:l},{regex:v,indices:{bucket:1,path:2},postModify:l}];for(let b=0;b<_.length;b++){const C=_[b],A=C.regex.exec(e);if(A){const S=A[C.indices.bucket];let T=A[C.indices.path];T||(T=""),s=new ln(S,T),C.postModify(s);break}}if(s==null)throw uV(e);return s}}class dV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pV(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...E){l||(l=!0,e.apply(null,E))}function h(E){r=setTimeout(()=>{r=null,t(d,c())},E)}function f(){i&&clearTimeout(i)}function d(E,...v){if(l){f();return}if(E){f(),u.call(null,E,...v);return}if(c()||o){f(),u.call(null,E,...v);return}s<64&&(s*=2);let _;a===1?(a=2,_=0):_=(s+Math.random())*1e3,h(_)}let p=!1;function y(E){p||(p=!0,f(),!l&&(r!==null?(E||(a=2),clearTimeout(r),h(0)):E||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function gV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mV(t){return t!==void 0}function W_(t,e,n,s){if(s<e)throw j_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw j_(`Invalid value for '${t}'. Expected ${n} or less.`)}function yV(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(fl||(fl={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _V(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vV{constructor(e,n,s,r,i,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new oc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===fl.NO_ERROR,c=i.getStatus();if(!a||_V(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===fl.ABORT;s(!1,new oc(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new oc(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());mV(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=aV();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?VC():lV();o(c)}else{const c=cV();o(c)}};this.canceled_?n(!1,new oc(!1,null,!0)):this.backoffId_=pV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oc{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function wV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function EV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function bV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function TV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function CV(t,e,n,s,r,i,o=!0){const a=yV(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return bV(l,e),wV(l,n),EV(l,i),TV(l,s),new vV(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function SV(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n){this._service=e,n instanceof ln?this._location=n:this._location=ln.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new dl(e,n)}get root(){const e=new ln(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return SV(this._location.path)}get storage(){return this._service}get parent(){const e=IV(this._location.path);if(e===null)return null;const n=new ln(this._location.bucket,e);return new dl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw fV(e)}}function q_(t,e){const n=e==null?void 0:e[rV];return n==null?null:ln.makeFromBucketSpec(n,t)}class kV{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=BC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=iV,this._maxUploadRetryTime=oV,this._requests=new Set,r!=null?this._bucket=ln.makeFromBucketSpec(r,this._host):this._bucket=q_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ln.makeFromBucketSpec(this._url,e):this._bucket=q_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){W_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){W_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new dl(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new dV(VC());{const o=CV(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const K_="@firebase/storage",z_="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AV="storage";function RV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new kV(n,s,r,e,gr)}function NV(){Rn(new pn(AV,RV,"PUBLIC").setMultipleInstances(!0)),qt(K_,z_,""),qt(K_,z_,"esm2017")}NV();const hh=new WeakMap;function HC(t,e){return hh.has(e)||hh.set(e,t||{f:{},r:{},s:{},u:{}}),hh.get(e)}function OV(t,e,n,s){if(!t)return n;const[r,i]=jC(t);if(!r)return n;const o=HC(void 0,s)[r]||{},a=e||i;return a&&a in o?o[a]:n}function PV(t,e,n,s){if(!t)return;const[r,i]=jC(t);if(!r)return;const o=HC(void 0,s)[r],a=e||i;if(a)return n.then(c=>{o[a]=c}).catch(Cn),a}function jC(t){return Nx(t)||Ox(t)?["f",t.path]:Px(t)?["r",t.toString()]:Dx(t)?["s",t.toString()]:[]}const fh=new WeakMap;function DV(t,e,n){const s=$l();fh.has(s)||fh.set(s,new Map);const r=fh.get(s),i=PV(e,n,t,s);return i&&r.set(i,t),i?()=>r.delete(i):Cn}const xV={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function $f(t,e,n,s){if(!Rx(t))return[t,{}];const r=[{},{}],i=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const p=Object.getOwnPropertyDescriptor(a,d);p&&!p.enumerable&&Object.defineProperty(h,d,p)});for(const d in a){const p=a[d];if(p==null||p instanceof Date||p instanceof Ze||p instanceof mu)h[d]=p;else if(ep(p)){const y=l+d;h[d]=y in n?c[d]:p.path,f[y]=p.converter?p:p.withConverter(s.converter)}else if(Array.isArray(p)){h[d]=Array(p.length);for(let y=0;y<p.length;y++){const E=p[y];E&&E.path in i&&(h[d][y]=i[E.path])}o(p,c[d]||h[d],l+d+".",[h[d],f])}else mr(p)?(h[d]={},o(p,c[d],l+d+".",[h[d],f])):h[d]=p}}return o(t,e,"",r),r}const Eg={reset:!1,wait:!0,maxRefDepth:2,converter:xV,snapshotOptions:{serverTimestamps:"estimate"}};function pl(t){for(const e in t)t[e].unsub()}function Bf(t,e,n,s,r,i,o,a,c){const[l,u]=$f(s.data(t.snapshotOptions),Zd(e,n),r,t);i.set(e,n,l),Vf(t,e,n,r,u,i,o,a,c)}function MV({ref:t,target:e,path:n,depth:s,resolve:r,reject:i,ops:o},a){const c=Object.create(null);let l=Cn;return a.once?UC(t).then(u=>{u.exists()?Bf(a,e,n,u,c,o,s,r,i):(o.set(e,n,null),r())}).catch(i):l=wg(t,u=>{u.exists()?Bf(a,e,n,u,c,o,s,r,i):(o.set(e,n,null),r())},i),()=>{l(),pl(c)}}function Vf(t,e,n,s,r,i,o,a,c){const l=Object.keys(r);if(Object.keys(s).filter(y=>l.indexOf(y)<0).forEach(y=>{s[y].unsub(),delete s[y]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const f=l.length,d=Object.create(null);function p(y){y in d&&++h>=f&&a(n)}l.forEach(y=>{const E=s[y],v=r[y],g=`${n}.${y}`;if(d[g]=!0,E)if(E.path!==v.path)E.unsub();else return;s[y]={data:()=>Zd(e,g),unsub:MV({ref:v,target:e,path:g,depth:o,ops:i,resolve:p.bind(null,g),reject:c},t),path:v.path}})}function LV(t,e,n,s,r,i){const o=Object.assign({},Eg,i),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let f=xe(l?[]:t.value);l||n.set(t,h,[]);const d=s;let p,y=Cn;const E=[],v={added:({newIndex:_,doc:b})=>{E.splice(_,0,Object.create(null));const C=E[_],[A,S]=$f(b.data(c),void 0,C,o);n.add(Ne(f),_,A),Vf(o,f,`${h}.${_}`,C,S,n,0,s.bind(null,b),r)},modified:({oldIndex:_,newIndex:b,doc:C})=>{const A=Ne(f),S=E[_],T=A[_],[M,$]=$f(C.data(c),T,S,o);E.splice(b,0,S),n.remove(A,_),n.add(A,b,M),Vf(o,f,`${h}.${b}`,S,$,n,0,s,r)},removed:({oldIndex:_})=>{const b=Ne(f);n.remove(b,_),pl(E.splice(_,1)[0])}};function g(_){const b=_.docChanges(a);if(!p&&b.length){p=!0;let C=0;const A=b.length,S=Object.create(null);for(let T=0;T<A;T++)S[b[T].doc.id]=!0;s=T=>{T&&T.id in S&&++C>=A&&(l&&(n.set(t,h,Ne(f)),f=t),d(Ne(f)),s=Cn)}}b.forEach(C=>{v[C.type](C)}),b.length||(l&&(n.set(t,h,Ne(f)),f=t),s(Ne(f)))}return u?sV(e).then(g).catch(r):y=wg(e,g,r),_=>{if(y(),_){const b=typeof _=="function"?_():[];n.set(t,h,b)}E.forEach(pl)}}function FV(t,e,n,s,r,i){const o=Object.assign({},Eg,i),a="value",c=Object.create(null);s=xx(s,()=>Zd(t,a));let l=Cn;function u(h){h.exists()?Bf(o,t,a,h,c,n,0,s,r):(n.set(t,a,null),s(null))}return o.once?UC(e).then(u).catch(r):l=wg(e,u,r),h=>{if(l(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}pl(c)}}function UV(t,e){let n=Cn;const s=Object.assign({},Eg,e),r=Ne(t),i=s.target||xe();Mx()&&(s.once=!0);const o=OV(r,s.ssrKey,i.value,$l());i.value=o;let c=!(_0(r)?(o||[]).length>0:o!==void 0);const l=xe(!1),u=xe(),h=So(),f=Zf();let d=Cn;function p(){let v=Ne(t);const g=new Promise((_,b)=>{if(n(s.reset),!v)return n=Cn,_(null);l.value=c,c=!0,v.converter||(v=v.withConverter(s.converter)),n=(ep(v)?FV:LV)(i,v,$V,_,b,s)}).catch(_=>(h.value===g&&(u.value=_),Promise.reject(_))).finally(()=>{h.value===g&&(l.value=!1)});h.value=g}let y=Cn;Ue(t)&&(y=Zt(t,p)),p(),r&&(d=DV(h.value,r,s.ssrKey)),$t(),f&&ed(E);function E(v=s.reset){y(),d(),n(v)}return Object.defineProperties(i,{error:{get:()=>u},data:{get:()=>i},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>E}})}const $V={set:(t,e,n)=>kx(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function Mj(t,e){return UV(t,{target:xe([]),...e})}function Lj(t){return jB($l(t))}function BV(t){return(e,n)=>{const s=v0(e,n).run(()=>xe(t));Lx.set(e,s),Fx(s,e)}}function VV(t,{firebaseApp:e,modules:n=[]}){t.provide(y0,e);for(const s of n)t.use(s.bind(null,e))}const HV=yn(t=>{kd();const e=t.$firebaseApp;t.vueApp.use(VV,{firebaseApp:e})}),jV=yn(t=>{const n=kd().vuefireOptions.appCheck,s=t.$firebaseApp;let r;n.provider==="ReCaptchaV3"?r=new Yd(n.key):n.provider==="ReCaptchaEnterprise"?r=new Xd(n.key):r=new Jd({getToken:()=>Promise.reject(new Error("app-check/invalid-provider"))}),$x({...n,provider:r})(s,t.vueApp)}),WV=yn(t=>{const e=t.$firebaseApp;BV(t.payload.vuefireUser)(e,t.vueApp)}),qV=yn(t=>{xR()&&(t.hooks.hook("link:prefetch",e=>{if(!Al(e).protocol)return wm(e)}),Nl().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const s=await wm(e.path);s&&Object.assign(t.static.data,s.data)}))});function WC(t,e,n){const s=e.length-1;if(s<0)return t===void 0?n:t;for(let r=0;r<s;r++){if(t==null)return n;t=t[e[r]]}return t==null||t[e[s]]===void 0?n:t[e[s]]}function KV(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(s=>KV(t[s],e[s]))}function Hf(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),WC(t,e.split("."),n))}function Fj(t,e,n){if(e==null)return t===void 0?n:t;if(t!==Object(t)){if(typeof e!="function")return n;const r=e(t,n);return typeof r>"u"?n:r}if(typeof e=="string")return Hf(t,e,n);if(Array.isArray(e))return WC(t,e,n);if(typeof e!="function")return n;const s=e(t,n);return typeof s>"u"?n:s}function zV(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,s)=>e+s)}function Uj(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function G_(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function $j(t){return t==null?void 0:t.$el}const Bj=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function GV(t,e){const n=Object.create(null),s=Object.create(null);for(const r in t)e.some(i=>i instanceof RegExp?i.test(r):i===r)?n[r]=t[r]:s[r]=t[r];return[n,s]}function Vj(t,e){const n={...t};return e.forEach(s=>delete n[s]),n}function Hj(t){return GV(t,["class","style","id",/^data-/])}function jj(t){return t==null?[]:Array.isArray(t)?t:[t]}function QV(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function YV(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let s=0;for(;s<t.length;)n.push(t.substr(s,e)),s+=e;return n}function Wj(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(t<e)return`${t} B`;const n=e===1024?["Ki","Mi","Gi"]:["k","M","G"];let s=-1;for(;Math.abs(t)>=e&&s<n.length-1;)t/=e,++s;return`${t.toFixed(1)} ${n[s]}B`}function Xn(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const s={};for(const r in t)s[r]=t[r];for(const r in e){const i=t[r],o=e[r];if(G_(i)&&G_(o)){s[r]=Xn(i,o,n);continue}if(Array.isArray(i)&&Array.isArray(o)&&n){s[r]=n(i,o);continue}s[r]=o}return s}function Is(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Is.cache.has(t))return Is.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Is.cache.set(t,e),e}Is.cache=new Map;function dh(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>dh(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>dh(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return dh(t,e.component.subTree).flat(1)}return[]}function qj(t){const e=Ct({}),n=Ee(t);return ta(()=>{for(const s in n.value)e[s]=n.value[s]},{flush:"sync"}),cd(e)}function Kj(t,e){return t.includes(e)}const XV=/^on[^a-z]/,zj=t=>XV.test(t),Gj=[Function,Array];function Qj(t,e){return e="on"+ea(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function Yj(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];if(Array.isArray(t))for(const r of t)r(...n);else typeof t=="function"&&t(...n)}function qC(t,e,n){if(n&&(e={__isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?eH(e):"")}function To(t,e,n){const s=qC(t,e,n);s!=null&&console.warn(s)}function Q_(t,e,n){const s=qC(t,e,n);s!=null&&console.error(s)}const JV=/(?:^|[-_])(\w)/g,ZV=t=>t.replace(JV,e=>e.toUpperCase()).replace(/[-_]/g,"");function ph(t,e){if(t.$root===t)return"<Root>";const n=typeof t=="function"&&t.cid!=null?t.options:t.__isVue?t.$options||t.constructor.options:t||{};let s=n.name||n._componentTag;const r=n.__file;if(!s&&r){const i=r.match(/([^/\\]+)\.vue$/);s=i==null?void 0:i[1]}return(s?`<${ZV(s)}>`:"<Anonymous>")+(r&&e!==!1?` at ${r}`:"")}function eH(t){if(t.__isVue&&t.$parent){const e=[];let n=0;for(;t;){if(e.length>0){const s=e[e.length-1];if(s.constructor===t.constructor){n++,t=t.$parent;continue}else n>0&&(e[e.length-1]=[s,n],n=0)}e.push(t),t=t.$parent}return`

found in

`+e.map((s,r)=>`${r===0?"---> ":" ".repeat(5+r*2)}${Array.isArray(s)?`${ph(s[0])}... (${s[1]} recursive calls)`:ph(s)}`).join(`
`)}else return`

(found in ${ph(t)})`}const tH=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],nH=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,sH=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],rH=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function KC(t){const e=Array(3),n=nH,s=tH;for(let r=0;r<3;++r)e[r]=Math.round(QV(n(s[r][0]*t[0]+s[r][1]*t[1]+s[r][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function bg(t){let{r:e,g:n,b:s}=t;const r=[0,0,0],i=rH,o=sH;e=i(e/255),n=i(n/255),s=i(s/255);for(let a=0;a<3;++a)r[a]=o[a][0]*e+o[a][1]*n+o[a][2]*s;return r}const gl=.20689655172413793,iH=t=>t>gl**3?Math.cbrt(t):t/(3*gl**2)+4/29,oH=t=>t>gl?t**3:3*gl**2*(t-4/29);function zC(t){const e=iH,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function GC(t){const e=oH,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}function Xj(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function qs(t){if(typeof t=="number")return(isNaN(t)||t<0||t>16777215)&&To(`'${t}' is not a valid hex color`),{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;[3,4].includes(e.length)?e=e.split("").map(s=>s+s).join(""):[6,8].includes(e.length)||To(`'${t}' is not a valid hex(a) color`);const n=parseInt(e,16);return(isNaN(n)||n<0||n>4294967295)&&To(`'${t}' is not a valid hex(a) color`),cH(e)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${t==null?t:t.constructor.name} instead`)}function ac(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function aH(t){let{r:e,g:n,b:s,a:r}=t;return`#${[ac(e),ac(n),ac(s),r!==void 0?ac(Math.round(r*255)):"FF"].join("")}`}function cH(t){let[e,n,s,r]=YV(t,2).map(i=>parseInt(i,16));return r=r===void 0?r:Math.round(r/255*100)/100,{r:e,g:n,b:s,a:r}}function lH(t,e){const n=zC(bg(t));return n[0]=n[0]+e*10,KC(GC(n))}function uH(t,e){const n=zC(bg(t));return n[0]=n[0]-e*10,KC(GC(n))}function hH(t){const e=qs(t);return bg(e)[1]}function Li(t,e){const n=$t();if(!n)throw new Error(`[Vuetify] ${t} ${e||"must be called from inside a setup function"}`);return n}function Jj(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=Li(t).type;return Is((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let QC=0,wc=new WeakMap;function YC(){const t=Li("getUid");if(wc.has(t))return wc.get(t);{const e=QC++;return wc.set(t,e),e}}YC.reset=()=>{QC=0,wc=new WeakMap};function fH(t){const{provides:e}=Li("injectSelf");if(e&&t in e)return e[t]}function XC(t,e){let n;function s(){n=_l(),n.run(()=>e.length?e(()=>{var r;(r=n)==null||r.stop(),s()}):e())}Zt(t,r=>{if(r&&!n)s();else if(!r){var i;(i=n)==null||i.stop(),n=void 0}},{immediate:!0}),ed(()=>{var r;(r=n)==null||r.stop()})}function Tg(t,e){return n=>Object.keys(t).reduce((s,r)=>{const o=typeof t[r]=="object"&&t[r]!=null&&!Array.isArray(t[r])?t[r]:{type:t[r]};return n&&r in n?s[r]={...o,default:n[r]}:s[r]=o,e&&!s[r].source&&(s[r].source=e),s},{})}function dH(t,e){var n,s;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((s=t.props)==null?void 0:s[Is(e)])<"u"}const Fi=function(e){return e._setup=e._setup??e.setup,e.name?(e._setup&&(e.props=e.props??{},e.props=Tg(e.props,Is(e.name))(),e.props._as=String,e.setup=function(s,r){const i=JC();if(!i.value)return e._setup(s,r);const o=$t(),a=Ee(()=>i.value[s._as??e.name]),c=new Proxy(s,{get(h,f){if(!dH(o.vnode,f)){var d,p;return((d=a.value)==null?void 0:d[f])??((p=i.value.global)==null?void 0:p[f])??h[f]}return Reflect.get(h,f)}}),l=So();ta(()=>{if(a.value){const h=Object.entries(a.value).filter(f=>{let[d]=f;return d.startsWith(d[0].toUpperCase())});h.length&&(l.value=Object.fromEntries(h))}});const u=e._setup(c,r);return XC(l,()=>{var h;mH(Xn(((h=fH(Yo))==null?void 0:h.value)??{},l.value))}),u}),e):(To("The component is missing an explicit name, unable to generate default prop value"),e)};function Zj(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?Fi:pr)(e)}const Pn=typeof window<"u",eW=Pn&&"IntersectionObserver"in window,pH=Pn&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),tW=Pn&&typeof CSS<"u"&&CSS.supports("selector(:focus-visible)"),Yo=Symbol.for("vuetify:defaults");function gH(t){return xe(t)}function JC(){const t=Ke(Yo);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function mH(t,e){const n=JC(),s=xe(t),r=Ee(()=>{const i=Ne(e==null?void 0:e.scoped),o=Ne(e==null?void 0:e.reset),a=Ne(e==null?void 0:e.root);let c=Xn(s.value,{prev:n.value});if(i)return c;if(o||a){const l=Number(o||1/0);for(let u=0;u<=l&&c.prev;u++)c=c.prev;return c}return Xn(c.prev,c)});return _s(Yo,r),r}const jf=Symbol.for("vuetify:display"),Y_={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},yH=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Y_;return Xn(Y_,t)};function X_(t){return Pn&&!t?window.innerWidth:0}function J_(t){return Pn&&!t?window.innerHeight:0}function _H(){const t=Pn?window.navigator.userAgent:"ssr";function e(p){return Boolean(t.match(p))}const n=e(/android/i),s=e(/iphone|ipad|ipod/i),r=e(/cordova/i),i=e(/electron/i),o=e(/chrome/i),a=e(/edge/i),c=e(/firefox/i),l=e(/opera/i),u=e(/win/i),h=e(/mac/i),f=e(/linux/i),d=e(/ssr/i);return{android:n,ios:s,cordova:r,electron:i,chrome:o,edge:a,firefox:c,opera:l,win:u,mac:h,linux:f,touch:pH,ssr:d}}function vH(t,e){const{thresholds:n,mobileBreakpoint:s}=yH(t),r=xe(J_(e)),i=_H(),o=Ct({}),a=xe(X_(e));function c(){r.value=J_(),a.value=X_()}return ta(()=>{const l=a.value<n.sm,u=a.value<n.md&&!l,h=a.value<n.lg&&!(u||l),f=a.value<n.xl&&!(h||u||l),d=a.value<n.xxl&&!(f||h||u||l),p=a.value>=n.xxl,y=l?"xs":u?"sm":h?"md":f?"lg":d?"xl":"xxl",E=typeof s=="number"?s:n[s],v=i.ssr?i.android||i.ios||i.opera:a.value<E;o.xs=l,o.sm=u,o.md=h,o.lg=f,o.xl=d,o.xxl=p,o.smAndUp=!l,o.mdAndUp=!(l||u),o.lgAndUp=!(l||u||h),o.xlAndUp=!(l||u||h||f),o.smAndDown=!(h||f||d||p),o.mdAndDown=!(f||d||p),o.lgAndDown=!(d||p),o.xlAndDown=!p,o.name=y,o.height=r.value,o.width=a.value,o.mobile=v,o.mobileBreakpoint=s,o.platform=i,o.thresholds=n}),Pn&&window.addEventListener("resize",c,{passive:!0}),{...cd(o),update:c,ssr:!!e}}function nW(){const t=Ke(jf);if(!t)throw new Error("Could not find Vuetify display injection");return t}const wH={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},EH={component:t=>hn(ZC,{...t,class:"mdi"})},bH=[String,Function,Object],Wf=Symbol.for("vuetify:icons"),yu=Tg({icon:{type:bH},tag:{type:String,required:!0}},"icon"),Z_=Fi({name:"VComponentIcon",props:yu(),setup(t,e){let{slots:n}=e;return()=>{var s;return Ce(t.tag,null,{default:()=>[t.icon?Ce(t.icon,null,null):(s=n.default)==null?void 0:s.call(n)]})}}}),TH=Fi({name:"VSvgIcon",inheritAttrs:!1,props:yu(),setup(t,e){let{attrs:n}=e;return()=>Ce(t.tag,mw(n,{style:null}),{default:()=>[Ce("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Ce("path",{d:t.icon},null)])]})}});yu();const ZC=Fi({name:"VClassIcon",props:yu(),setup(t){return()=>Ce(t.tag,{class:t.icon},null)}}),CH={svg:{component:TH},class:{component:ZC}};function IH(t){return Xn({defaultSet:"mdi",sets:{...CH,mdi:EH},aliases:wH},t)}const sW=t=>{const e=Ke(Wf);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:Ee(()=>{const s=Ue(t)?t.value:t.icon;if(!s)return{component:Z_};let r=s;if(typeof r=="string"&&(r=r.trim(),r.startsWith("$"))){var i;r=(i=e.aliases)==null?void 0:i[r.slice(1)]}if(!r)throw new Error(`Could not find aliased icon "${s}"`);if(typeof r!="string")return{component:Z_,icon:r};const o=Object.keys(e.sets).find(l=>typeof r=="string"&&r.startsWith(`${l}:`)),a=o?r.slice(o.length+1):r;return{component:e.sets[o??e.defaultSet].component,icon:a}})}};function SH(t,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h=>h,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:h=>h;const i=Li("useProxiedModel"),o=xe(t[e]!==void 0?t[e]:n),a=Is(e),l=Ee(a!==e?()=>{var h,f,d,p;return t[e],!!(((h=i.vnode.props)!=null&&h.hasOwnProperty(e)||(f=i.vnode.props)!=null&&f.hasOwnProperty(a))&&((d=i.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)||(p=i.vnode.props)!=null&&p.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var h,f;return t[e],!!((h=i.vnode.props)!=null&&h.hasOwnProperty(e)&&(f=i.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${e}`))});XC(()=>!l.value,()=>{Zt(()=>t[e],h=>{o.value=h})});const u=Ee({get(){return s(l.value?t[e]:o.value)},set(h){const f=r(h);(l.value?t[e]:o.value)===f||s(l.value?t[e]:o.value)===h||(o.value=f,i==null||i.emit(`update:${e}`,f))}});return Object.defineProperty(u,"externalValue",{get:()=>l.value?t[e]:o.value}),u}const kH={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}}},ev="$vuetify.",tv=(t,e)=>t.replace(/\{(\d+)\}/g,(n,s)=>String(e[+s])),eI=(t,e,n)=>function(s){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];if(!s.startsWith(ev))return tv(s,i);const a=s.replace(ev,""),c=t.value&&n.value[t.value],l=e.value&&n.value[e.value];let u=Hf(c,a,null);return u||(To(`Translation key "${s}" not found in "${t.value}", trying fallback locale`),u=Hf(l,a,null)),u||(Q_(`Translation key "${s}" not found in fallback`),u=s),typeof u!="string"&&(Q_(`Translation key "${s}" has a non-string value`),u=s),tv(u,i)};function tI(t,e){return(n,s)=>new Intl.NumberFormat([t.value,e.value],s).format(n)}function gh(t,e,n){const s=SH(t,e,t[e]??n.value);return s.value=t[e]??n.value,Zt(n,r=>{t[e]==null&&(s.value=n.value)}),s}function nI(t){return e=>{const n=gh(e,"locale",t.current),s=gh(e,"fallback",t.fallback),r=gh(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:s,messages:r,t:eI(n,s,r),n:tI(n,s),provide:nI({current:n,fallback:s,messages:r})}}}function AH(t){const e=xe((t==null?void 0:t.locale)??"en"),n=xe((t==null?void 0:t.fallback)??"en"),s=xe({en:kH,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:s,t:eI(e,n,s),n:tI(e,n),provide:nI({current:e,fallback:n,messages:s})}}const RH={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!1,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},ml=Symbol.for("vuetify:locale");function NH(t){return t.name!=null}function OH(t){const e=t!=null&&t.adapter&&NH(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:AH(t),n=PH(e,t);return{...e,...n}}function rW(){const t=Ke(ml);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t}function PH(t,e){const n=xe((e==null?void 0:e.rtl)??RH),s=Ee(()=>n.value[t.current.value]??!1);return{isRtl:s,rtl:n,rtlClasses:Ee(()=>`v-locale--is-${s.value?"rtl":"ltr"}`)}}function iW(){const t=Ke(ml);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const Sr=2.4,nv=.2126729,sv=.7151522,rv=.072175,DH=.55,xH=.58,MH=.57,LH=.62,cc=.03,iv=1.45,FH=5e-4,UH=1.25,$H=1.25,ov=.078,av=12.82051282051282,lc=.06,cv=.001;function lv(t,e){const n=(t.r/255)**Sr,s=(t.g/255)**Sr,r=(t.b/255)**Sr,i=(e.r/255)**Sr,o=(e.g/255)**Sr,a=(e.b/255)**Sr;let c=n*nv+s*sv+r*rv,l=i*nv+o*sv+a*rv;if(c<=cc&&(c+=(cc-c)**iv),l<=cc&&(l+=(cc-l)**iv),Math.abs(l-c)<FH)return 0;let u;if(l>c){const h=(l**DH-c**xH)*UH;u=h<cv?0:h<ov?h-h*av*lc:h-lc}else{const h=(l**LH-c**MH)*$H;u=h>-cv?0:h>-ov?h-h*av*lc:h+lc}return u*100}const Xo=Symbol.for("vuetify:theme"),oW=Tg({theme:String},"theme"),Gi={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function BH(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Gi;if(!t)return{...Gi,isDisabled:!0};const e={};for(const[r,i]of Object.entries(t.themes??{})){var n,s;const o=i.dark||r==="dark"?(n=Gi.themes)==null?void 0:n.dark:(s=Gi.themes)==null?void 0:s.light;e[r]=Xn(o,i)}return Xn(Gi,{...t,themes:e})}function VH(t){const e=Ct(BH(t)),n=xe(e.defaultTheme),s=xe(e.themes),r=Ee(()=>{const l={};for(const[u,h]of Object.entries(s.value)){const f=l[u]={...h,colors:{...h.colors}};if(e.variations)for(const d of e.variations.colors){const p=f.colors[d];if(p)for(const y of["lighten","darken"]){const E=y==="lighten"?lH:uH;for(const v of zV(e.variations[y],1))f.colors[`${d}-${y}-${v}`]=aH(E(qs(p),v))}}for(const d of Object.keys(f.colors)){if(/^on-[a-z]/.test(d)||f.colors[`on-${d}`])continue;const p=`on-${d}`,y=qs(f.colors[d]),E=Math.abs(lv(qs(0),y)),v=Math.abs(lv(qs(16777215),y));f.colors[p]=v>Math.min(E,50)?"#fff":"#000"}}return l}),i=Ee(()=>r.value[n.value]),o=Ee(()=>{const l=[];i.value.dark&&kr(l,":root",["color-scheme: dark"]);for(const[d,p]of Object.entries(r.value)){const{variables:y,dark:E}=p;kr(l,`.v-theme--${d}`,[`color-scheme: ${E?"dark":"normal"}`,...HH(p),...Object.keys(y).map(v=>{const g=y[v],_=typeof g=="string"&&g.startsWith("#")?qs(g):void 0,b=_?`${_.r}, ${_.g}, ${_.b}`:void 0;return`--v-${v}: ${b??g}`})])}const u=[],h=[],f=new Set(Object.values(r.value).flatMap(d=>Object.keys(d.colors)));for(const d of f)/^on-[a-z]/.test(d)?kr(h,`.${d}`,[`color: rgb(var(--v-theme-${d})) !important`]):(kr(u,`.bg-${d}`,[`--v-theme-overlay-multiplier: var(--v-theme-${d}-overlay-multiplier)`,`background: rgb(var(--v-theme-${d})) !important`,`color: rgb(var(--v-theme-on-${d})) !important`]),kr(h,`.text-${d}`,[`color: rgb(var(--v-theme-${d})) !important`]),kr(h,`.border-${d}`,[`--v-border-color: var(--v-theme-${d})`]));return l.push(...u,...h),l.map((d,p)=>p===0?d:`    ${d}`).join("")});function a(l){const u=l._context.provides.usehead;if(u)u.addHeadObjs(Ee(()=>{const h={children:o.value,type:"text/css",id:"vuetify-theme-stylesheet"};return e.cspNonce&&(h.nonce=e.cspNonce),{style:[h]}})),Pn&&ta(()=>u.updateDOM());else{let f=function(){if(!e.isDisabled){if(typeof document<"u"&&!h){const d=document.createElement("style");d.type="text/css",d.id="vuetify-theme-stylesheet",e.cspNonce&&d.setAttribute("nonce",e.cspNonce),h=d,document.head.appendChild(h)}h&&(h.innerHTML=o.value)}},h=Pn?document.getElementById("vuetify-theme-stylesheet"):null;Zt(o,f,{immediate:!0})}}const c=Ee(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:a,isDisabled:e.isDisabled,name:n,themes:s,current:i,computedThemes:r,themeClasses:c,styles:o,global:{name:n,current:i}}}function aW(t){Li("provideTheme");const e=Ke(Xo,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=Ee(()=>t.theme??(e==null?void 0:e.name.value)),s=Ee(()=>e.isDisabled?void 0:`v-theme--${n.value}`),r={...e,name:n,themeClasses:s};return _s(Xo,r),r}function cW(){Li("useTheme");const t=Ke(Xo,null);if(!t)throw new Error("Could not find Vuetify theme injection");return t}function kr(t,e,n){t.push(`${e} {
`,...n.map(s=>`  ${s};
`),`}
`)}function HH(t){const e=t.dark?2:1,n=t.dark?1:2,s=[];for(const[r,i]of Object.entries(t.colors)){const o=qs(i);s.push(`--v-theme-${r}: ${o.r},${o.g},${o.b}`),r.startsWith("on-")||s.push(`--v-theme-${r}-overlay-multiplier: ${hH(i)>.18?e:n}`)}return s}function sI(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,s=Xn(e,n),{aliases:r={},components:i={},directives:o={}}=s,a=gH(s.defaults),c=vH(s.display,s.ssr),l=VH(s.theme),u=IH(s.icons),h=OH(s.locale);return{install:d=>{for(const p in o)d.directive(p,o[p]);for(const p in i)d.component(p,i[p]);for(const p in r)d.component(p,Fi({...r[p],name:p,aliasName:r[p].name}));if(l.install(d),d.provide(Yo,a),d.provide(jf,c),d.provide(Xo,l),d.provide(Wf,u),d.provide(ml,h),Pn&&s.ssr)if(d.$nuxt)d.$nuxt.hook("app:suspense:resolve",()=>{c.update()});else{const{mount:p}=d;d.mount=function(){const y=p(...arguments);return Ds(()=>c.update()),d.mount=p,y}}YC.reset(),d.mixin({computed:{$vuetify(){return Ct({defaults:Qi.call(this,Yo),display:Qi.call(this,jf),theme:Qi.call(this,Xo),icons:Qi.call(this,Wf),locale:Qi.call(this,ml)})}}})},defaults:a,display:c,theme:l,icons:u,locale:h}}const jH="3.1.4";sI.version=jH;function Qi(t){var e,n;const s=this.$,r=((e=s.parent)==null?void 0:e.provides)??((n=s.vnode.appContext)==null?void 0:n.provides);if(r&&t in r)return r[t]}const WH={dark:!1,colors:{background:"#000","on-surface":"#89f200",surface:"#000000",primary:"#89f200","primary-darken-1":"#217d00","primary-darken-2":"#1f7300","primary-darken-3":"#154d00","hidden-primary-darken-1":"#299602",secondary:"#c900cc","secondary-darken-1":"#9200b3",error:"#eb0942",info:"#ebe309",success:"#09b3eb",warning:"#fa05e6"}},qH=yn(t=>{const e=sI({theme:{defaultTheme:"crickTheme",themes:{crickTheme:WH}},icons:{defaultSet:"mdi"}});t.vueApp.use(e)}),KH=[FR,UR,HR,XN,JN,FP,HV,jV,WV,qV,qH],zH=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""}),GH=(t,e)=>{const n=t.route.matched.find(r=>{var i;return((i=r.components)==null?void 0:i.default)===t.Component.type}),s=e??(n==null?void 0:n.meta.key)??(n&&zH(t.route,n));return typeof s=="function"?s(t.route):s},QH=(t,e)=>({default:()=>t?hn(gS,t===!0?{}:t,e):e}),YH=pr({name:"FragmentWrapper",setup(t,{slots:e}){return()=>{var n;return(n=e.default)==null?void 0:n.call(e)}}}),XH=(t,e,n)=>({default:()=>e?hn(t,e===!0?{}:e,n):hn(YH,{},n)}),JH=pr({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e}){const n=ft();return()=>hn(fE,{name:t.name,route:t.route,...e},{default:s=>{if(!s.Component)return;const r=GH(s,t.pageKey),i=n.deferHydration(),o=!!(t.transition??s.route.meta.pageTransition??$h),a=o&&ej([t.transition,s.route.meta.pageTransition,$h,{onAfterLeave:()=>{n.callHook("page:transition:finish",s.Component)}}].filter(Boolean));return XH(Cd,o&&a,QH(t.keepalive??s.route.meta.keepalive??BR,hn(jv,{onPending:()=>n.callHook("page:start",s.Component),onResolve:()=>{Ds(()=>n.callHook("page:finish",s.Component).finally(i))}},{default:()=>hn(tj,{key:r,routeProps:s,pageKey:r,hasTransition:o})}))).default()}})}});function ZH(t){return Array.isArray(t)?t:t?[t]:[]}function ej(t){const e=t.map(n=>({...n,onAfterLeave:ZH(n.onAfterLeave)}));return BA(...e)}const tj=pr({name:"RouteProvider",props:["routeProps","pageKey","hasTransition"],setup(t){const e=t.pageKey,n=t.routeProps.route,s={};for(const r in t.routeProps.route)s[r]=Ee(()=>e===t.pageKey?t.routeProps.route[r]:n[r]);return _s("_route",Ct(s)),()=>hn(t.routeProps.Component)}}),nj=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},sj={};function rj(t,e){const n=JH;return ds(),jS("div",null,[Ce(n)])}const ij=nj(sj,[["render",rj]]),uv={__name:"nuxt-root",setup(t){const e=$s(()=>be(()=>import("./error-component.824af2c7.js"),["./error-component.824af2c7.js","./backButton.dd1217ac.js","./VIcon.643e9184.js","./VRow.a3334ae7.js","./VRow.5384e9e0.css","./color.4347dc26.js","./useRender.dd44c047.js","./VIcon.9957792f.css","./router.a9193777.js","./router.9bfde38d.css","./rounded.f9bd3dac.js","./group.715627b1.js","./dimensions.a29b2802.js","./position.e8174993.js","./VProgressLinear.14bb13fb.js","./VProgressLinear.c71ac71c.css","./resizeObserver.a48c6051.js","./backButton.def02653.css","./VContainer.52278e88.js","./VCard.7c7f6f5b.js","./createSimpleFunctional.a108c35b.js","./VAvatar.51dc3611.js","./VImg.caa78565.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css","./VApp.7858491b.js","./VApp.a04bdf69.css"],import.meta.url).then(a=>a.default||a)),n=()=>null,s=ft(),r=s.deferHydration();_s("_route",KA()),s.hooks.callHookWith(a=>a.map(c=>c()),"vue:setup");const i=Rl();Zv((a,c,l)=>{s.hooks.callHook("vue:error",a,c,l).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u)),WA(a)&&(a.fatal||a.unhandled)&&$n(s,Dr,[a])});const{islandContext:o}=!1;return(a,c)=>(ds(),Pr(jv,{onResolve:Ne(r)},{default:Vv(()=>[Ne(i)?(ds(),Pr(Ne(e),{key:0,error:Ne(i)},null,8,["error"])):Ne(o)?(ds(),Pr(Ne(n),{key:1,context:Ne(o)},null,8,["context"])):(ds(),Pr(Ne(ij),{key:2}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=yA.create({baseURL:vA()}));let hv;const oj=DA(KH);hv=async function(){var r;const n=Boolean((r=window.__NUXT__)==null?void 0:r.serverRendered)?Ok(uv):Nk(uv),s=NA({vueApp:n});try{await PA(s,oj)}catch(i){await s.callHook("app:error",i),s.payload.error=s.payload.error||i}try{await s.hooks.callHook("app:created",n),await s.hooks.callHook("app:beforeMount",n),n.mount("#"+VR),await s.hooks.callHook("app:mounted",n),await Ds()}catch(i){await s.callHook("app:error",i),s.payload.error=s.payload.error||i}},hv().catch(t=>{console.error("Error while mounting app:",t)});export{wg as $,Tj as A,Fi as B,oW as C,ld as D,rW as E,Rt as F,cW as G,GV as H,bH as I,mw as J,KA as K,Rj as L,_s as M,Ue as N,Zt as O,$t as P,Ct as Q,Ds as R,ta as S,Cd as T,Ke as U,Jr as V,vj as W,Lj as X,xj as Y,Dj as Z,nj as _,Ce as a,Qj as a$,Mj as a0,sV as a1,mH as a2,aW as a3,dj as a4,Tg as a5,KV as a6,SH as a7,YC as a8,ed as a9,ea as aA,An as aB,hn as aC,fj as aD,ft as aE,Nl as aF,pr as aG,sa as aH,hj as aI,Al as aJ,Kk as aK,wj as aL,kj as aM,Wa as aN,Sj as aO,XH as aP,zA as aQ,Dh as aR,Oj as aS,gj as aT,eW as aU,Kj as aV,dh as aW,To as aX,cd as aY,G_ as aZ,Bj as a_,Zj as aa,Hj as ab,jj as ac,tW as ad,Uj as ae,Li as af,Gj as ag,Fj as ah,Pn as ai,$j as aj,_l as ak,XC as al,qj as am,Q_ as an,QV as ao,Rv as ap,iW as aq,mj as ar,yj as as,Vj as at,Wj as au,Yj as av,Ej as aw,Jj as ax,zj as ay,Kn as az,jS as b,ei as b0,sW as b1,Xj as b2,Yv as b3,Qv as b4,Jv as b5,Cj as b6,Pr as c,pw as d,gd as e,_j as f,pj as g,lj as h,gw as i,Ee as j,U1 as k,Aj as l,Nj as m,zf as n,ds as o,cj as p,Ij as q,xe as r,bj as s,aj as t,Ne as u,nW as v,Vv as w,Cl as x,yS as y,uj as z};
