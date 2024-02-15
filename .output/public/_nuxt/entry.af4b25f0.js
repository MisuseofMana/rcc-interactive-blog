function Xf(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Jf(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Xe(r)?_A(r):Jf(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Xe(t))return t;if(We(t))return t}}const mA=/;(?![^(]*\))/g,gA=/:([^]+)/,yA=/\/\*.*?\*\//gs;function _A(t){const e={};return t.replace(yA,"").split(mA).forEach(n=>{if(n){const r=n.split(gA);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Zf(t){let e="";if(Xe(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=Zf(t[n]);r&&(e+=r+" ")}else if(We(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wA=Xf(vA);function Cw(t){return!!t||t===""}const aK=t=>Xe(t)?t:t==null?"":oe(t)||We(t)&&(t.toString===Rw||!me(t.toString))?JSON.stringify(t,Sw,2):String(t),Sw=(t,e)=>e&&e.__v_isRef?Sw(t,e.value):vi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Aw(e)?{[`Set(${e.size})`]:[...e.values()]}:We(e)&&!oe(e)&&!kw(e)?String(e):e,Be={},_i=[],Pn=()=>{},EA=()=>!1,bA=/^on[^a-z]/,Ma=t=>bA.test(t),ep=t=>t.startsWith("onUpdate:"),_t=Object.assign,tp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},TA=Object.prototype.hasOwnProperty,Ae=(t,e)=>TA.call(t,e),oe=Array.isArray,vi=t=>La(t)==="[object Map]",Aw=t=>La(t)==="[object Set]",IA=t=>La(t)==="[object RegExp]",me=t=>typeof t=="function",Xe=t=>typeof t=="string",np=t=>typeof t=="symbol",We=t=>t!==null&&typeof t=="object",rp=t=>We(t)&&me(t.then)&&me(t.catch),Rw=Object.prototype.toString,La=t=>Rw.call(t),CA=t=>La(t).slice(8,-1),kw=t=>La(t)==="[object Object]",sp=t=>Xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$o=Xf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),uu=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},SA=/-(\w)/g,Qn=uu(t=>t.replace(SA,(e,n)=>n?n.toUpperCase():"")),AA=/\B([A-Z])/g,Yi=uu(t=>t.replace(AA,"-$1").toLowerCase()),Fa=uu(t=>t.charAt(0).toUpperCase()+t.slice(1)),tc=uu(t=>t?`on${Fa(t)}`:""),oa=(t,e)=>!Object.is(t,e),wi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},fc=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ed=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Nw=t=>{const e=Xe(t)?Number(t):NaN;return isNaN(e)?t:e};let Pg;const RA=()=>Pg||(Pg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let dn;class Ow{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=dn,!e&&dn&&(this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=dn;try{return dn=this,e()}finally{dn=n}}}on(){dn=this}off(){dn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function hu(t){return new Ow(t)}function kA(t,e=dn){e&&e.active&&e.effects.push(t)}function Pw(){return dn}function Dw(t){dn&&dn.cleanups.push(t)}const ip=t=>{const e=new Set(t);return e.w=0,e.n=0,e},xw=t=>(t.w&es)>0,Mw=t=>(t.n&es)>0,NA=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=es},OA=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];xw(s)&&!Mw(s)?s.delete(t):e[n++]=s,s.w&=~es,s.n&=~es}e.length=n}},pc=new WeakMap;let Oo=0,es=1;const bd=30;let Rn;const Ts=Symbol(""),Td=Symbol("");class op{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kA(this,r)}run(){if(!this.active)return this.fn();let e=Rn,n=qr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Rn,Rn=this,qr=!0,es=1<<++Oo,Oo<=bd?NA(this):Dg(this),this.fn()}finally{Oo<=bd&&OA(this),es=1<<--Oo,Rn=this.parent,qr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Rn===this?this.deferStop=!0:this.active&&(Dg(this),this.onStop&&this.onStop(),this.active=!1)}}function Dg(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let qr=!0;const Lw=[];function Qi(){Lw.push(qr),qr=!1}function Xi(){const t=Lw.pop();qr=t===void 0?!0:t}function nn(t,e,n){if(qr&&Rn){let r=pc.get(t);r||pc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ip()),Fw(s)}}function Fw(t,e){let n=!1;Oo<=bd?Mw(t)||(t.n|=es,n=!xw(t)):n=!t.has(Rn),n&&(t.add(Rn),Rn.deps.push(t))}function mr(t,e,n,r,s,i){const o=pc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&oe(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":oe(t)?sp(n)&&a.push(o.get("length")):(a.push(o.get(Ts)),vi(t)&&a.push(o.get(Td)));break;case"delete":oe(t)||(a.push(o.get(Ts)),vi(t)&&a.push(o.get(Td)));break;case"set":vi(t)&&a.push(o.get(Ts));break}if(a.length===1)a[0]&&Id(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Id(ip(l))}}function Id(t,e){const n=oe(t)?t:[...t];for(const r of n)r.computed&&xg(r);for(const r of n)r.computed||xg(r)}function xg(t,e){(t!==Rn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function PA(t,e){var n;return(n=pc.get(t))===null||n===void 0?void 0:n.get(e)}const DA=Xf("__proto__,__v_isRef,__isVue"),Uw=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(np)),xA=ap(),MA=ap(!1,!0),LA=ap(!0),Mg=FA();function FA(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Te(this);for(let i=0,o=this.length;i<o;i++)nn(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Te)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Qi();const r=Te(this)[e].apply(this,n);return Xi(),r}}),t}function UA(t){const e=Te(this);return nn(e,"has",t),e.hasOwnProperty(t)}function ap(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?eR:jw:e?Hw:Bw).get(r))return r;const o=oe(r);if(!t){if(o&&Ae(Mg,s))return Reflect.get(Mg,s,i);if(s==="hasOwnProperty")return UA}const a=Reflect.get(r,s,i);return(np(s)?Uw.has(s):DA(s))||(t||nn(r,"get",s),e)?a:Me(a)?o&&sp(s)?a:a.value:We(a)?t?qw(a):dt(a):a}}const $A=$w(),VA=$w(!0);function $w(t=!1){return function(n,r,s,i){let o=n[r];if(Ns(o)&&Me(o)&&!Me(s))return!1;if(!t&&(!mc(s)&&!Ns(s)&&(o=Te(o),s=Te(s)),!oe(n)&&Me(o)&&!Me(s)))return o.value=s,!0;const a=oe(n)&&sp(r)?Number(r)<n.length:Ae(n,r),l=Reflect.set(n,r,s,i);return n===Te(i)&&(a?oa(s,o)&&mr(n,"set",r,s):mr(n,"add",r,s)),l}}function BA(t,e){const n=Ae(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&mr(t,"delete",e,void 0),r}function HA(t,e){const n=Reflect.has(t,e);return(!np(e)||!Uw.has(e))&&nn(t,"has",e),n}function jA(t){return nn(t,"iterate",oe(t)?"length":Ts),Reflect.ownKeys(t)}const Vw={get:xA,set:$A,deleteProperty:BA,has:HA,ownKeys:jA},qA={get:LA,set(t,e){return!0},deleteProperty(t,e){return!0}},WA=_t({},Vw,{get:MA,set:VA}),lp=t=>t,du=t=>Reflect.getPrototypeOf(t);function El(t,e,n=!1,r=!1){t=t.__v_raw;const s=Te(t),i=Te(e);n||(e!==i&&nn(s,"get",e),nn(s,"get",i));const{has:o}=du(s),a=r?lp:n?hp:aa;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function bl(t,e=!1){const n=this.__v_raw,r=Te(n),s=Te(t);return e||(t!==s&&nn(r,"has",t),nn(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Tl(t,e=!1){return t=t.__v_raw,!e&&nn(Te(t),"iterate",Ts),Reflect.get(t,"size",t)}function Lg(t){t=Te(t);const e=Te(this);return du(e).has.call(e,t)||(e.add(t),mr(e,"add",t,t)),this}function Fg(t,e){e=Te(e);const n=Te(this),{has:r,get:s}=du(n);let i=r.call(n,t);i||(t=Te(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?oa(e,o)&&mr(n,"set",t,e):mr(n,"add",t,e),this}function Ug(t){const e=Te(this),{has:n,get:r}=du(e);let s=n.call(e,t);s||(t=Te(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&mr(e,"delete",t,void 0),i}function $g(){const t=Te(this),e=t.size!==0,n=t.clear();return e&&mr(t,"clear",void 0,void 0),n}function Il(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Te(o),l=e?lp:t?hp:aa;return!t&&nn(a,"iterate",Ts),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Cl(t,e,n){return function(...r){const s=this.__v_raw,i=Te(s),o=vi(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?lp:e?hp:aa;return!e&&nn(i,"iterate",l?Td:Ts),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Rr(t){return function(...e){return t==="delete"?!1:this}}function zA(){const t={get(i){return El(this,i)},get size(){return Tl(this)},has:bl,add:Lg,set:Fg,delete:Ug,clear:$g,forEach:Il(!1,!1)},e={get(i){return El(this,i,!1,!0)},get size(){return Tl(this)},has:bl,add:Lg,set:Fg,delete:Ug,clear:$g,forEach:Il(!1,!0)},n={get(i){return El(this,i,!0)},get size(){return Tl(this,!0)},has(i){return bl.call(this,i,!0)},add:Rr("add"),set:Rr("set"),delete:Rr("delete"),clear:Rr("clear"),forEach:Il(!0,!1)},r={get(i){return El(this,i,!0,!0)},get size(){return Tl(this,!0)},has(i){return bl.call(this,i,!0)},add:Rr("add"),set:Rr("set"),delete:Rr("delete"),clear:Rr("clear"),forEach:Il(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Cl(i,!1,!1),n[i]=Cl(i,!0,!1),e[i]=Cl(i,!1,!0),r[i]=Cl(i,!0,!0)}),[t,n,e,r]}const[KA,GA,YA,QA]=zA();function cp(t,e){const n=e?t?QA:YA:t?GA:KA;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ae(n,s)&&s in r?n:r,s,i)}const XA={get:cp(!1,!1)},JA={get:cp(!1,!0)},ZA={get:cp(!0,!1)},Bw=new WeakMap,Hw=new WeakMap,jw=new WeakMap,eR=new WeakMap;function tR(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nR(t){return t.__v_skip||!Object.isExtensible(t)?0:tR(CA(t))}function dt(t){return Ns(t)?t:up(t,!1,Vw,XA,Bw)}function rR(t){return up(t,!1,WA,JA,Hw)}function qw(t){return up(t,!0,qA,ZA,jw)}function up(t,e,n,r,s){if(!We(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=nR(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Wr(t){return Ns(t)?Wr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ns(t){return!!(t&&t.__v_isReadonly)}function mc(t){return!!(t&&t.__v_isShallow)}function Ww(t){return Wr(t)||Ns(t)}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function Os(t){return fc(t,"__v_skip",!0),t}const aa=t=>We(t)?dt(t):t,hp=t=>We(t)?qw(t):t;function zw(t){qr&&Rn&&(t=Te(t),Fw(t.dep||(t.dep=ip())))}function Kw(t,e){t=Te(t);const n=t.dep;n&&Id(n)}function Me(t){return!!(t&&t.__v_isRef===!0)}function ke(t){return Gw(t,!1)}function gc(t){return Gw(t,!0)}function Gw(t,e){return Me(t)?t:new sR(t,e)}class sR{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Te(e),this._value=n?e:aa(e)}get value(){return zw(this),this._value}set value(e){const n=this.__v_isShallow||mc(e)||Ns(e);e=n?e:Te(e),oa(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:aa(e),Kw(this))}}function H(t){return Me(t)?t.value:t}const iR={get:(t,e,n)=>H(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Me(s)&&!Me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Yw(t){return Wr(t)?t:new Proxy(t,iR)}function dp(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=fp(t,n);return e}class oR{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return PA(Te(this._object),this._key)}}function fp(t,e,n){const r=t[e];return Me(r)?r:new oR(t,e,n)}var Qw;class aR{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Qw]=!1,this._dirty=!0,this.effect=new op(e,()=>{this._dirty||(this._dirty=!0,Kw(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Te(this);return zw(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Qw="__v_isReadonly";function lR(t,e,n=!1){let r,s;const i=me(t);return i?(r=t,s=Pn):(r=t.get,s=t.set),new aR(r,s,i||!s,n)}function zr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ji(i,e,n)}return s}function Cn(t,e,n,r){if(me(t)){const i=zr(t,e,n,r);return i&&rp(i)&&i.catch(o=>{Ji(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Cn(t[i],e,n,r));return s}function Ji(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){zr(l,null,10,[t,o,a]);return}}cR(t,n,s,r)}function cR(t,e,n,r=!0){console.error(t)}let la=!1,Cd=!1;const xt=[];let Hn=0;const Ei=[];let or=null,ms=0;const Xw=Promise.resolve();let pp=null;function fn(t){const e=pp||Xw;return t?e.then(this?t.bind(this):t):e}function uR(t){let e=Hn+1,n=xt.length;for(;e<n;){const r=e+n>>>1;ca(xt[r])<t?e=r+1:n=r}return e}function fu(t){(!xt.length||!xt.includes(t,la&&t.allowRecurse?Hn+1:Hn))&&(t.id==null?xt.push(t):xt.splice(uR(t.id),0,t),Jw())}function Jw(){!la&&!Cd&&(Cd=!0,pp=Xw.then(eE))}function hR(t){const e=xt.indexOf(t);e>Hn&&xt.splice(e,1)}function Zw(t){oe(t)?Ei.push(...t):(!or||!or.includes(t,t.allowRecurse?ms+1:ms))&&Ei.push(t),Jw()}function Vg(t,e=la?Hn+1:0){for(;e<xt.length;e++){const n=xt[e];n&&n.pre&&(xt.splice(e,1),e--,n())}}function yc(t){if(Ei.length){const e=[...new Set(Ei)];if(Ei.length=0,or){or.push(...e);return}for(or=e,or.sort((n,r)=>ca(n)-ca(r)),ms=0;ms<or.length;ms++)or[ms]();or=null,ms=0}}const ca=t=>t.id==null?1/0:t.id,dR=(t,e)=>{const n=ca(t)-ca(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function eE(t){Cd=!1,la=!0,xt.sort(dR);const e=Pn;try{for(Hn=0;Hn<xt.length;Hn++){const n=xt[Hn];n&&n.active!==!1&&zr(n,null,14)}}finally{Hn=0,xt.length=0,yc(),la=!1,pp=null,(xt.length||Ei.length)&&eE()}}function fR(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Be;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Be;d&&(s=n.map(f=>Xe(f)?f.trim():f)),h&&(s=n.map(Ed))}let a,l=r[a=tc(e)]||r[a=tc(Qn(e))];!l&&i&&(l=r[a=tc(Yi(e))]),l&&Cn(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Cn(c,t,6,s)}}function tE(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!me(t)){const l=c=>{const u=tE(c,e,!0);u&&(a=!0,_t(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(We(t)&&r.set(t,null),null):(oe(i)?i.forEach(l=>o[l]=null):_t(o,i),We(t)&&r.set(t,o),o)}function pu(t,e){return!t||!Ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,Yi(e))||Ae(t,e))}let It=null,mu=null;function _c(t){const e=It;return It=t,mu=t&&t.type.__scopeId||null,e}function lK(t){mu=t}function cK(){mu=null}function nE(t,e=It,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Jg(-1);const i=_c(e);let o;try{o=t(...s)}finally{_c(i),r._d&&Jg(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Eh(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:y}=t;let b,_;const m=_c(t);try{if(n.shapeFlag&4){const C=s||r;b=bn(u.call(C,C,h,i,f,d,p)),_=l}else{const C=e;b=bn(C.length>1?C(i,{attrs:l,slots:a,emit:c}):C(i,null)),_=e.props?l:mR(l)}}catch(C){Ho.length=0,Ji(C,t,1),b=De(Kt)}let w=b;if(_&&y!==!1){const C=Object.keys(_),{shapeFlag:I}=w;C.length&&I&7&&(o&&C.some(ep)&&(_=gR(_,o)),w=gr(w,_))}return n.dirs&&(w=gr(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),b=w,_c(m),b}function pR(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Di(r)){if(r.type!==Kt||r.children==="v-if"){if(e)return;e=r}}else return}return e}const mR=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ma(n))&&((e||(e={}))[n]=t[n]);return e},gR=(t,e)=>{const n={};for(const r in t)(!ep(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function yR(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Bg(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!pu(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Bg(r,o,c):!0:!!o;return!1}function Bg(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!pu(n,i))return!0}return!1}function mp({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const rE=t=>t.__isSuspense,_R={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,c){t==null?vR(e,n,r,s,i,o,a,l,c):wR(t,e,n,r,s,o,a,l,c)},hydrate:ER,create:gp,normalize:bR},sE=_R;function ua(t,e){const n=t.props&&t.props[e];me(n)&&n()}function vR(t,e,n,r,s,i,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),d=t.suspense=gp(t,s,r,e,h,n,i,o,a,l);c(null,d.pendingBranch=t.ssContent,h,null,r,d,i,o),d.deps>0?(ua(t,"onPending"),ua(t,"onFallback"),c(null,t.ssFallback,e,n,r,null,i,o),bi(d,t.ssFallback)):d.resolve()}function wR(t,e,n,r,s,i,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,f=e.ssFallback,{activeBranch:p,pendingBranch:y,isInFallback:b,isHydrating:_}=h;if(y)h.pendingBranch=d,kn(d,y)?(l(y,d,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():b&&(l(p,f,n,r,s,null,i,o,a),bi(h,f))):(h.pendingId++,_?(h.isHydrating=!1,h.activeBranch=y):c(y,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),b?(l(null,d,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(l(p,f,n,r,s,null,i,o,a),bi(h,f))):p&&kn(d,p)?(l(p,d,n,r,s,h,i,o,a),h.resolve(!0)):(l(null,d,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(p&&kn(d,p))l(p,d,n,r,s,h,i,o,a),bi(h,d);else if(ua(e,"onPending"),h.pendingBranch=d,h.pendingId++,l(null,d,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:m,pendingId:w}=h;m>0?setTimeout(()=>{h.pendingId===w&&h.fallback(f)},m):m===0&&h.fallback(f)}}function gp(t,e,n,r,s,i,o,a,l,c,u=!1){const{p:h,m:d,um:f,n:p,o:{parentNode:y,remove:b}}=c,_=t.props?Nw(t.props.timeout):void 0,m={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(w=!1){const{vnode:C,activeBranch:I,pendingBranch:A,pendingId:S,effects:T,parentComponent:O,container:U}=m;if(m.isHydrating)m.isHydrating=!1;else if(!w){const se=I&&A.transition&&A.transition.mode==="out-in";se&&(I.transition.afterLeave=()=>{S===m.pendingId&&d(A,U,z,0)});let{anchor:z}=m;I&&(z=p(I),f(I,O,m,!0)),se||d(A,U,z,0)}bi(m,A),m.pendingBranch=null,m.isInFallback=!1;let Z=m.parent,q=!1;for(;Z;){if(Z.pendingBranch){Z.effects.push(...T),q=!0;break}Z=Z.parent}q||Zw(T),m.effects=[],ua(C,"onResolve")},fallback(w){if(!m.pendingBranch)return;const{vnode:C,activeBranch:I,parentComponent:A,container:S,isSVG:T}=m;ua(C,"onFallback");const O=p(I),U=()=>{m.isInFallback&&(h(null,w,S,O,A,null,T,a,l),bi(m,w))},Z=w.transition&&w.transition.mode==="out-in";Z&&(I.transition.afterLeave=U),m.isInFallback=!0,f(I,A,null,!0),Z||U()},move(w,C,I){m.activeBranch&&d(m.activeBranch,w,C,I),m.container=w},next(){return m.activeBranch&&p(m.activeBranch)},registerDep(w,C){const I=!!m.pendingBranch;I&&m.deps++;const A=w.vnode.el;w.asyncDep.catch(S=>{Ji(S,w,0)}).then(S=>{if(w.isUnmounted||m.isUnmounted||m.pendingId!==w.suspenseId)return;w.asyncResolved=!0;const{vnode:T}=w;Od(w,S,!1),A&&(T.el=A);const O=!A&&w.subTree.el;C(w,T,y(A||w.subTree.el),A?null:p(w.subTree),m,o,l),O&&b(O),mp(w,T.el),I&&--m.deps===0&&m.resolve()})},unmount(w,C){m.isUnmounted=!0,m.activeBranch&&f(m.activeBranch,n,w,C),m.pendingBranch&&f(m.pendingBranch,n,w,C)}};return m}function ER(t,e,n,r,s,i,o,a,l){const c=e.suspense=gp(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,i,o);return c.deps===0&&c.resolve(),u}function bR(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Hg(r?n.default:n),t.ssFallback=r?Hg(n.fallback):De(Kt)}function Hg(t){let e;if(me(t)){const n=Pi&&t._c;n&&(t._d=!1,jr()),t=t(),n&&(t._d=!0,e=Tn,SE())}return oe(t)&&(t=pR(t)),t=bn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function iE(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):Zw(t)}function bi(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,mp(r,s))}function zn(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function tt(t,e,n=!1){const r=et||It;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&me(e)?e.call(r.proxy):e}}function Zi(t,e){return yp(t,null,e)}const Sl={};function Qe(t,e,n){return yp(t,e,n)}function yp(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Be){const a=Pw()===(et==null?void 0:et.scope)?et:null;let l,c=!1,u=!1;if(Me(t)?(l=()=>t.value,c=mc(t)):Wr(t)?(l=()=>t,r=!0):oe(t)?(u=!0,c=t.some(w=>Wr(w)||mc(w)),l=()=>t.map(w=>{if(Me(w))return w.value;if(Wr(w))return _s(w);if(me(w))return zr(w,a,2)})):me(t)?e?l=()=>zr(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Cn(t,a,3,[d])}:l=Pn,e&&r){const w=l;l=()=>_s(w())}let h,d=w=>{h=_.onStop=()=>{zr(w,a,4)}},f;if(xi)if(d=Pn,e?n&&Cn(e,a,3,[l(),u?[]:void 0,d]):l(),s==="sync"){const w=dk();f=w.__watcherHandles||(w.__watcherHandles=[])}else return Pn;let p=u?new Array(t.length).fill(Sl):Sl;const y=()=>{if(_.active)if(e){const w=_.run();(r||c||(u?w.some((C,I)=>oa(C,p[I])):oa(w,p)))&&(h&&h(),Cn(e,a,3,[w,p===Sl?void 0:u&&p[0]===Sl?[]:p,d]),p=w)}else _.run()};y.allowRecurse=!!e;let b;s==="sync"?b=y:s==="post"?b=()=>wt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),b=()=>fu(y));const _=new op(l,b);e?n?y():p=_.run():s==="post"?wt(_.run.bind(_),a&&a.suspense):_.run();const m=()=>{_.stop(),a&&a.scope&&tp(a.scope.effects,_)};return f&&f.push(m),m}function TR(t,e,n){const r=this.proxy,s=Xe(t)?t.includes(".")?oE(r,t):()=>r[t]:t.bind(r,r);let i;me(e)?i=e:(i=e.handler,n=e);const o=et;ts(this);const a=yp(s,i.bind(r),n);return o?ts(o):Kr(),a}function oE(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function _s(t,e){if(!We(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))_s(t.value,e);else if(oe(t))for(let n=0;n<t.length;n++)_s(t[n],e);else if(Aw(t)||vi(t))t.forEach(n=>{_s(n,e)});else if(kw(t))for(const n in t)_s(t[n],e);return t}function aE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $a(()=>{t.isMounted=!0}),eo(()=>{t.isUnmounting=!0}),t}const En=[Function,Array],IR={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:En,onEnter:En,onAfterEnter:En,onEnterCancelled:En,onBeforeLeave:En,onLeave:En,onAfterLeave:En,onLeaveCancelled:En,onBeforeAppear:En,onAppear:En,onAfterAppear:En,onAppearCancelled:En},setup(t,{slots:e}){const n=Yt(),r=aE();let s;return()=>{const i=e.default&&_p(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==Kt){o=y;break}}const a=Te(t),{mode:l}=a;if(r.isLeaving)return bh(o);const c=jg(o);if(!c)return bh(o);const u=ha(c,a,r,n);Ni(c,u);const h=n.subTree,d=h&&jg(h);let f=!1;const{getTransitionKey:p}=c.type;if(p){const y=p();s===void 0?s=y:y!==s&&(s=y,f=!0)}if(d&&d.type!==Kt&&(!kn(c,d)||f)){const y=ha(d,a,r,n);if(Ni(d,y),l==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},bh(o);l==="in-out"&&c.type!==Kt&&(y.delayLeave=(b,_,m)=>{const w=cE(r,d);w[String(d.key)]=d,b._leaveCb=()=>{_(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=m})}return o}}},lE=IR;function cE(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ha(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:y,onAppear:b,onAfterAppear:_,onAppearCancelled:m}=e,w=String(t.key),C=cE(n,t),I=(T,O)=>{T&&Cn(T,r,9,O)},A=(T,O)=>{const U=O[1];I(T,O),oe(T)?T.every(Z=>Z.length<=1)&&U():T.length<=1&&U()},S={mode:i,persisted:o,beforeEnter(T){let O=a;if(!n.isMounted)if(s)O=y||a;else return;T._leaveCb&&T._leaveCb(!0);const U=C[w];U&&kn(t,U)&&U.el._leaveCb&&U.el._leaveCb(),I(O,[T])},enter(T){let O=l,U=c,Z=u;if(!n.isMounted)if(s)O=b||l,U=_||c,Z=m||u;else return;let q=!1;const se=T._enterCb=z=>{q||(q=!0,z?I(Z,[T]):I(U,[T]),S.delayedLeave&&S.delayedLeave(),T._enterCb=void 0)};O?A(O,[T,se]):se()},leave(T,O){const U=String(t.key);if(T._enterCb&&T._enterCb(!0),n.isUnmounting)return O();I(h,[T]);let Z=!1;const q=T._leaveCb=se=>{Z||(Z=!0,O(),se?I(p,[T]):I(f,[T]),T._leaveCb=void 0,C[U]===t&&delete C[U])};C[U]=t,d?A(d,[T,q]):q()},clone(T){return ha(T,e,n,r)}};return S}function bh(t){if(Ua(t))return t=gr(t),t.children=null,t}function jg(t){return Ua(t)?t.children?t.children[0]:void 0:t}function Ni(t,e){t.shapeFlag&6&&t.component?Ni(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function _p(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===qt?(o.patchFlag&128&&s++,r=r.concat(_p(o.children,e,a))):(e||o.type!==Kt)&&r.push(a!=null?gr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function js(t){return me(t)?{setup:t,name:t.name}:t}const Is=t=>!!t.type.__asyncLoader;function Qt(t){me(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,d()),d=()=>{let f;return l||(f=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((y,b)=>{a(p,()=>y(h()),()=>b(p),u+1)});throw p}).then(p=>f!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return js({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return c},setup(){const f=et;if(c)return()=>Th(c,f);const p=m=>{l=null,Ji(m,f,13,!r)};if(o&&f.suspense||xi)return d().then(m=>()=>Th(m,f)).catch(m=>(p(m),()=>r?De(r,{error:m}):null));const y=ke(!1),b=ke(),_=ke(!!s);return s&&setTimeout(()=>{_.value=!1},s),i!=null&&setTimeout(()=>{if(!y.value&&!b.value){const m=new Error(`Async component timed out after ${i}ms.`);p(m),b.value=m}},i),d().then(()=>{y.value=!0,f.parent&&Ua(f.parent.vnode)&&fu(f.parent.update)}).catch(m=>{p(m),b.value=m}),()=>{if(y.value&&c)return Th(c,f);if(b.value&&r)return De(r,{error:b.value});if(n&&!_.value)return De(n)}}})}function Th(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=De(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Ua=t=>t.type.__isKeepAlive,CR={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Yt(),r=n.ctx;if(!r.renderer)return()=>{const m=e.default&&e.default();return m&&m.length===1?m[0]:m};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=r,d=h("div");r.activate=(m,w,C,I,A)=>{const S=m.component;c(m,w,C,0,a),l(S.vnode,m,w,C,S,a,I,m.slotScopeIds,A),wt(()=>{S.isDeactivated=!1,S.a&&wi(S.a);const T=m.props&&m.props.onVnodeMounted;T&&Xt(T,S.parent,m)},a)},r.deactivate=m=>{const w=m.component;c(m,d,null,1,a),wt(()=>{w.da&&wi(w.da);const C=m.props&&m.props.onVnodeUnmounted;C&&Xt(C,w.parent,m),w.isDeactivated=!0},a)};function f(m){Ih(m),u(m,n,a,!0)}function p(m){s.forEach((w,C)=>{const I=Pd(w.type);I&&(!m||!m(I))&&y(C)})}function y(m){const w=s.get(m);!o||!kn(w,o)?f(w):o&&Ih(o),s.delete(m),i.delete(m)}Qe(()=>[t.include,t.exclude],([m,w])=>{m&&p(C=>Po(m,C)),w&&p(C=>!Po(w,C))},{flush:"post",deep:!0});let b=null;const _=()=>{b!=null&&s.set(b,Ch(n.subTree))};return $a(_),vp(_),eo(()=>{s.forEach(m=>{const{subTree:w,suspense:C}=n,I=Ch(w);if(m.type===I.type&&m.key===I.key){Ih(I);const A=I.component.da;A&&wt(A,C);return}f(m)})}),()=>{if(b=null,!e.default)return null;const m=e.default(),w=m[0];if(m.length>1)return o=null,m;if(!Di(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return o=null,w;let C=Ch(w);const I=C.type,A=Pd(Is(C)?C.type.__asyncResolved||{}:I),{include:S,exclude:T,max:O}=t;if(S&&(!A||!Po(S,A))||T&&A&&Po(T,A))return o=C,w;const U=C.key==null?I:C.key,Z=s.get(U);return C.el&&(C=gr(C),w.shapeFlag&128&&(w.ssContent=C)),b=U,Z?(C.el=Z.el,C.component=Z.component,C.transition&&Ni(C,C.transition),C.shapeFlag|=512,i.delete(U),i.add(U)):(i.add(U),O&&i.size>parseInt(O,10)&&y(i.values().next().value)),C.shapeFlag|=256,o=C,rE(w.type)?w:C}}},SR=CR;function Po(t,e){return oe(t)?t.some(n=>Po(n,e)):Xe(t)?t.split(",").includes(e):IA(t)?t.test(e):!1}function uE(t,e){dE(t,"a",e)}function hE(t,e){dE(t,"da",e)}function dE(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(gu(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ua(s.parent.vnode)&&AR(r,e,n,s),s=s.parent}}function AR(t,e,n,r){const s=gu(e,t,r,!0);fE(()=>{tp(r[e],s)},n)}function Ih(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Ch(t){return t.shapeFlag&128?t.ssContent:t}function gu(t,e,n=et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Qi(),ts(n);const a=Cn(e,n,t,o);return Kr(),Xi(),a});return r?s.unshift(i):s.push(i),i}}const Tr=t=>(e,n=et)=>(!xi||t==="sp")&&gu(t,(...r)=>e(...r),n),RR=Tr("bm"),$a=Tr("m"),kR=Tr("bu"),vp=Tr("u"),eo=Tr("bum"),fE=Tr("um"),NR=Tr("sp"),OR=Tr("rtg"),PR=Tr("rtc");function pE(t,e=et){gu("ec",t,e)}function uK(t,e){const n=It;if(n===null)return t;const r=_u(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=Be]=e[i];o&&(me(o)&&(o={mounted:o,updated:o}),o.deep&&_s(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Bn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Qi(),Cn(l,n,8,[t.el,a,t,e]),Xi())}}const wp="components",DR="directives";function hK(t,e){return Ep(wp,t,!0,e)||t}const mE=Symbol();function dK(t){return Xe(t)?Ep(wp,t,!1)||t:t||mE}function fK(t){return Ep(DR,t)}function Ep(t,e,n=!0,r=!1){const s=It||et;if(s){const i=s.type;if(t===wp){const a=Pd(i,!1);if(a&&(a===e||a===Qn(e)||a===Fa(Qn(e))))return i}const o=qg(s[t]||i[t],e)||qg(s.appContext[t],e);return!o&&r?i:o}}function qg(t,e){return t&&(t[e]||t[Qn(e)]||t[Fa(Qn(e))])}function pK(t,e,n,r){let s;const i=n&&n[r];if(oe(t)||Xe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(We(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function mK(t,e,n={},r,s){if(It.isCE||It.parent&&Is(It.parent)&&It.parent.isCE)return e!=="default"&&(n.name=e),De("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),jr();const o=i&&gE(i(n)),a=hi(qt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function gE(t){return t.some(e=>Di(e)?!(e.type===Kt||e.type===qt&&!gE(e.children)):!0)?t:null}function gK(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:tc(r)]=t[r];return n}const Sd=t=>t?PE(t)?_u(t)||t.proxy:Sd(t.parent):null,Vo=_t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sd(t.parent),$root:t=>Sd(t.root),$emit:t=>t.emit,$options:t=>bp(t),$forceUpdate:t=>t.f||(t.f=()=>fu(t.update)),$nextTick:t=>t.n||(t.n=fn.bind(t.proxy)),$watch:t=>TR.bind(t)}),Sh=(t,e)=>t!==Be&&!t.__isScriptSetup&&Ae(t,e),xR={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Sh(r,e))return o[e]=1,r[e];if(s!==Be&&Ae(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Ae(c,e))return o[e]=3,i[e];if(n!==Be&&Ae(n,e))return o[e]=4,n[e];Ad&&(o[e]=0)}}const u=Vo[e];let h,d;if(u)return e==="$attrs"&&nn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Be&&Ae(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ae(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Sh(s,e)?(s[e]=n,!0):r!==Be&&Ae(r,e)?(r[e]=n,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Be&&Ae(t,o)||Sh(e,o)||(a=i[0])&&Ae(a,o)||Ae(r,o)||Ae(Vo,o)||Ae(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ad=!0;function MR(t){const e=bp(t),n=t.proxy,r=t.ctx;Ad=!1,e.beforeCreate&&Wg(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:y,deactivated:b,beforeDestroy:_,beforeUnmount:m,destroyed:w,unmounted:C,render:I,renderTracked:A,renderTriggered:S,errorCaptured:T,serverPrefetch:O,expose:U,inheritAttrs:Z,components:q,directives:se,filters:z}=e;if(c&&LR(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Ee in o){const ve=o[Ee];me(ve)&&(r[Ee]=ve.bind(n))}if(s){const Ee=s.call(n,n);We(Ee)&&(t.data=dt(Ee))}if(Ad=!0,i)for(const Ee in i){const ve=i[Ee],at=me(ve)?ve.bind(n,n):me(ve.get)?ve.get.bind(n,n):Pn,Rt=!me(ve)&&me(ve.set)?ve.set.bind(n):Pn,lt=ae({get:at,set:Rt});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>lt.value,set:Ze=>lt.value=Ze})}if(a)for(const Ee in a)yE(a[Ee],r,n,Ee);if(l){const Ee=me(l)?l.call(n):l;Reflect.ownKeys(Ee).forEach(ve=>{zn(ve,Ee[ve])})}u&&Wg(u,t,"c");function le(Ee,ve){oe(ve)?ve.forEach(at=>Ee(at.bind(n))):ve&&Ee(ve.bind(n))}if(le(RR,h),le($a,d),le(kR,f),le(vp,p),le(uE,y),le(hE,b),le(pE,T),le(PR,A),le(OR,S),le(eo,m),le(fE,C),le(NR,O),oe(U))if(U.length){const Ee=t.exposed||(t.exposed={});U.forEach(ve=>{Object.defineProperty(Ee,ve,{get:()=>n[ve],set:at=>n[ve]=at})})}else t.exposed||(t.exposed={});I&&t.render===Pn&&(t.render=I),Z!=null&&(t.inheritAttrs=Z),q&&(t.components=q),se&&(t.directives=se)}function LR(t,e,n=Pn,r=!1){oe(t)&&(t=Rd(t));for(const s in t){const i=t[s];let o;We(i)?"default"in i?o=tt(i.from||s,i.default,!0):o=tt(i.from||s):o=tt(i),Me(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Wg(t,e,n){Cn(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function yE(t,e,n,r){const s=r.includes(".")?oE(n,r):()=>n[r];if(Xe(t)){const i=e[t];me(i)&&Qe(s,i)}else if(me(t))Qe(s,t.bind(n));else if(We(t))if(oe(t))t.forEach(i=>yE(i,e,n,r));else{const i=me(t.handler)?t.handler.bind(n):e[t.handler];me(i)&&Qe(s,i,t)}}function bp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>vc(l,c,o,!0)),vc(l,e,o)),We(e)&&i.set(e,l),l}function vc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&vc(t,i,n,!0),s&&s.forEach(o=>vc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=FR[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const FR={data:zg,props:ds,emits:ds,methods:ds,computed:ds,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:ds,directives:ds,watch:$R,provide:zg,inject:UR};function zg(t,e){return e?t?function(){return _t(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function UR(t,e){return ds(Rd(t),Rd(e))}function Rd(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function jt(t,e){return t?[...new Set([].concat(t,e))]:e}function ds(t,e){return t?_t(_t(Object.create(null),t),e):e}function $R(t,e){if(!t)return e;if(!e)return t;const n=_t(Object.create(null),t);for(const r in e)n[r]=jt(t[r],e[r]);return n}function VR(t,e,n,r=!1){const s={},i={};fc(i,yu,1),t.propsDefaults=Object.create(null),_E(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:rR(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function BR(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Te(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(pu(t.emitsOptions,d))continue;const f=e[d];if(l)if(Ae(i,d))f!==i[d]&&(i[d]=f,c=!0);else{const p=Qn(d);s[p]=kd(l,a,p,f,t,!1)}else f!==i[d]&&(i[d]=f,c=!0)}}}else{_E(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!Ae(e,h)&&((u=Yi(h))===h||!Ae(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=kd(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!Ae(e,h))&&(delete i[h],c=!0)}c&&mr(t,"set","$attrs")}function _E(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if($o(l))continue;const c=e[l];let u;s&&Ae(s,u=Qn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:pu(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Te(n),c=a||Be;for(let u=0;u<i.length;u++){const h=i[u];n[h]=kd(s,l,h,c[h],t,!Ae(c,h))}}return o}function kd(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Ae(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&me(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(ts(s),r=c[n]=l.call(null,e),Kr())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Yi(n))&&(r=!0))}return r}function vE(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!me(t)){const u=h=>{l=!0;const[d,f]=vE(h,e,!0);_t(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return We(t)&&r.set(t,_i),_i;if(oe(i))for(let u=0;u<i.length;u++){const h=Qn(i[u]);Kg(h)&&(o[h]=Be)}else if(i)for(const u in i){const h=Qn(u);if(Kg(h)){const d=i[u],f=o[h]=oe(d)||me(d)?{type:d}:Object.assign({},d);if(f){const p=Qg(Boolean,f.type),y=Qg(String,f.type);f[0]=p>-1,f[1]=y<0||p<y,(p>-1||Ae(f,"default"))&&a.push(h)}}}const c=[o,a];return We(t)&&r.set(t,c),c}function Kg(t){return t[0]!=="$"}function Gg(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Yg(t,e){return Gg(t)===Gg(e)}function Qg(t,e){return oe(e)?e.findIndex(n=>Yg(n,t)):me(e)&&Yg(e,t)?0:-1}const wE=t=>t[0]==="_"||t==="$stable",Tp=t=>oe(t)?t.map(bn):[bn(t)],HR=(t,e,n)=>{if(e._n)return e;const r=nE((...s)=>Tp(e(...s)),n);return r._c=!1,r},EE=(t,e,n)=>{const r=t._ctx;for(const s in t){if(wE(s))continue;const i=t[s];if(me(i))e[s]=HR(s,i,r);else if(i!=null){const o=Tp(i);e[s]=()=>o}}},bE=(t,e)=>{const n=Tp(e);t.slots.default=()=>n},jR=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Te(e),fc(e,"_",n)):EE(e,t.slots={})}else t.slots={},e&&bE(t,e);fc(t.slots,yu,1)},qR=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Be;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(_t(s,e),!n&&a===1&&delete s._):(i=!e.$stable,EE(e,s)),o=e}else e&&(bE(t,e),o={default:1});if(i)for(const a in s)!wE(a)&&!(a in o)&&delete s[a]};function TE(){return{app:null,config:{isNativeTag:EA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let WR=0;function zR(t,e){return function(r,s=null){me(r)||(r=Object.assign({},r)),s!=null&&!We(s)&&(s=null);const i=TE(),o=new Set;let a=!1;const l=i.app={_uid:WR++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Sp,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&me(c.install)?(o.add(c),c.install(l,...u)):me(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=De(r,s);return d.appContext=i,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,_u(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function wc(t,e,n,r,s=!1){if(oe(t)){t.forEach((d,f)=>wc(d,e&&(oe(e)?e[f]:e),n,r,s));return}if(Is(r)&&!s)return;const i=r.shapeFlag&4?_u(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Be?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Xe(c)?(u[c]=null,Ae(h,c)&&(h[c]=null)):Me(c)&&(c.value=null)),me(l))zr(l,a,12,[o,u]);else{const d=Xe(l),f=Me(l);if(d||f){const p=()=>{if(t.f){const y=d?Ae(h,l)?h[l]:u[l]:l.value;s?oe(y)&&tp(y,i):oe(y)?y.includes(i)||y.push(i):d?(u[l]=[i],Ae(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Ae(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,wt(p,n)):p()}}}let kr=!1;const Al=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Rl=t=>t.nodeType===8;function KR(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(_,m)=>{if(!m.hasChildNodes()){n(null,_,m),yc(),m._vnode=_;return}kr=!1,h(m.firstChild,_,null,null,null),yc(),m._vnode=_,kr&&console.error("Hydration completed but contains mismatches.")},h=(_,m,w,C,I,A=!1)=>{const S=Rl(_)&&_.data==="[",T=()=>y(_,m,w,C,I,S),{type:O,ref:U,shapeFlag:Z,patchFlag:q}=m;let se=_.nodeType;m.el=_,q===-2&&(A=!1,m.dynamicChildren=null);let z=null;switch(O){case Oi:se!==3?m.children===""?(l(m.el=s(""),o(_),_),z=_):z=T():(_.data!==m.children&&(kr=!0,_.data=m.children),z=i(_));break;case Kt:se!==8||S?z=T():z=i(_);break;case nc:if(S&&(_=i(_),se=_.nodeType),se===1||se===3){z=_;const _e=!m.children.length;for(let le=0;le<m.staticCount;le++)_e&&(m.children+=z.nodeType===1?z.outerHTML:z.data),le===m.staticCount-1&&(m.anchor=z),z=i(z);return S?i(z):z}else T();break;case qt:S?z=p(_,m,w,C,I,A):z=T();break;default:if(Z&1)se!==1||m.type.toLowerCase()!==_.tagName.toLowerCase()?z=T():z=d(_,m,w,C,I,A);else if(Z&6){m.slotScopeIds=I;const _e=o(_);if(e(m,_e,null,w,C,Al(_e),A),z=S?b(_):i(_),z&&Rl(z)&&z.data==="teleport end"&&(z=i(z)),Is(m)){let le;S?(le=De(qt),le.anchor=z?z.previousSibling:_e.lastChild):le=_.nodeType===3?NE(""):De("div"),le.el=_,m.component.subTree=le}}else Z&64?se!==8?z=T():z=m.type.hydrate(_,m,w,C,I,A,t,f):Z&128&&(z=m.type.hydrate(_,m,w,C,Al(o(_)),I,A,t,h))}return U!=null&&wc(U,null,C,m),z},d=(_,m,w,C,I,A)=>{A=A||!!m.dynamicChildren;const{type:S,props:T,patchFlag:O,shapeFlag:U,dirs:Z}=m,q=S==="input"&&Z||S==="option";if(q||O!==-1){if(Z&&Bn(m,null,w,"created"),T)if(q||!A||O&48)for(const z in T)(q&&z.endsWith("value")||Ma(z)&&!$o(z))&&r(_,z,null,T[z],!1,void 0,w);else T.onClick&&r(_,"onClick",null,T.onClick,!1,void 0,w);let se;if((se=T&&T.onVnodeBeforeMount)&&Xt(se,w,m),Z&&Bn(m,null,w,"beforeMount"),((se=T&&T.onVnodeMounted)||Z)&&iE(()=>{se&&Xt(se,w,m),Z&&Bn(m,null,w,"mounted")},C),U&16&&!(T&&(T.innerHTML||T.textContent))){let z=f(_.firstChild,m,_,w,C,I,A);for(;z;){kr=!0;const _e=z;z=z.nextSibling,a(_e)}}else U&8&&_.textContent!==m.children&&(kr=!0,_.textContent=m.children)}return _.nextSibling},f=(_,m,w,C,I,A,S)=>{S=S||!!m.dynamicChildren;const T=m.children,O=T.length;for(let U=0;U<O;U++){const Z=S?T[U]:T[U]=bn(T[U]);if(_)_=h(_,Z,C,I,A,S);else{if(Z.type===Oi&&!Z.children)continue;kr=!0,n(null,Z,w,null,C,I,Al(w),A)}}return _},p=(_,m,w,C,I,A)=>{const{slotScopeIds:S}=m;S&&(I=I?I.concat(S):S);const T=o(_),O=f(i(_),m,T,w,C,I,A);return O&&Rl(O)&&O.data==="]"?i(m.anchor=O):(kr=!0,l(m.anchor=c("]"),T,O),O)},y=(_,m,w,C,I,A)=>{if(kr=!0,m.el=null,A){const O=b(_);for(;;){const U=i(_);if(U&&U!==O)a(U);else break}}const S=i(_),T=o(_);return a(_),n(null,m,T,S,w,C,Al(T),I),S},b=_=>{let m=0;for(;_;)if(_=i(_),_&&Rl(_)&&(_.data==="["&&m++,_.data==="]")){if(m===0)return i(_);m--}return _};return[u,h]}const wt=iE;function GR(t){return IE(t)}function YR(t){return IE(t,KR)}function IE(t,e){const n=RA();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Pn,insertStaticContent:p}=t,y=(g,E,N,P=null,L=null,B=null,Y=!1,V=null,W=!!E.dynamicChildren)=>{if(g===E)return;g&&!kn(g,E)&&(P=k(g),Ze(g,L,B,!0),g=null),E.patchFlag===-2&&(W=!1,E.dynamicChildren=null);const{type:v,ref:R,shapeFlag:M}=E;switch(v){case Oi:b(g,E,N,P);break;case Kt:_(g,E,N,P);break;case nc:g==null&&m(E,N,P,Y);break;case qt:q(g,E,N,P,L,B,Y,V,W);break;default:M&1?I(g,E,N,P,L,B,Y,V,W):M&6?se(g,E,N,P,L,B,Y,V,W):(M&64||M&128)&&v.process(g,E,N,P,L,B,Y,V,W,ie)}R!=null&&L&&wc(R,g&&g.ref,B,E||g,!E)},b=(g,E,N,P)=>{if(g==null)r(E.el=a(E.children),N,P);else{const L=E.el=g.el;E.children!==g.children&&c(L,E.children)}},_=(g,E,N,P)=>{g==null?r(E.el=l(E.children||""),N,P):E.el=g.el},m=(g,E,N,P)=>{[g.el,g.anchor]=p(g.children,E,N,P,g.el,g.anchor)},w=({el:g,anchor:E},N,P)=>{let L;for(;g&&g!==E;)L=d(g),r(g,N,P),g=L;r(E,N,P)},C=({el:g,anchor:E})=>{let N;for(;g&&g!==E;)N=d(g),s(g),g=N;s(E)},I=(g,E,N,P,L,B,Y,V,W)=>{Y=Y||E.type==="svg",g==null?A(E,N,P,L,B,Y,V,W):O(g,E,L,B,Y,V,W)},A=(g,E,N,P,L,B,Y,V)=>{let W,v;const{type:R,props:M,shapeFlag:F,transition:Q,dirs:X}=g;if(W=g.el=o(g.type,B,M&&M.is,M),F&8?u(W,g.children):F&16&&T(g.children,W,null,P,L,B&&R!=="foreignObject",Y,V),X&&Bn(g,null,P,"created"),S(W,g,g.scopeId,Y,P),M){for(const he in M)he!=="value"&&!$o(he)&&i(W,he,null,M[he],B,g.children,P,L,G);"value"in M&&i(W,"value",null,M.value),(v=M.onVnodeBeforeMount)&&Xt(v,P,g)}X&&Bn(g,null,P,"beforeMount");const ee=(!L||L&&!L.pendingBranch)&&Q&&!Q.persisted;ee&&Q.beforeEnter(W),r(W,E,N),((v=M&&M.onVnodeMounted)||ee||X)&&wt(()=>{v&&Xt(v,P,g),ee&&Q.enter(W),X&&Bn(g,null,P,"mounted")},L)},S=(g,E,N,P,L)=>{if(N&&f(g,N),P)for(let B=0;B<P.length;B++)f(g,P[B]);if(L){let B=L.subTree;if(E===B){const Y=L.vnode;S(g,Y,Y.scopeId,Y.slotScopeIds,L.parent)}}},T=(g,E,N,P,L,B,Y,V,W=0)=>{for(let v=W;v<g.length;v++){const R=g[v]=V?Lr(g[v]):bn(g[v]);y(null,R,E,N,P,L,B,Y,V)}},O=(g,E,N,P,L,B,Y)=>{const V=E.el=g.el;let{patchFlag:W,dynamicChildren:v,dirs:R}=E;W|=g.patchFlag&16;const M=g.props||Be,F=E.props||Be;let Q;N&&us(N,!1),(Q=F.onVnodeBeforeUpdate)&&Xt(Q,N,E,g),R&&Bn(E,g,N,"beforeUpdate"),N&&us(N,!0);const X=L&&E.type!=="foreignObject";if(v?U(g.dynamicChildren,v,V,N,P,X,B):Y||ve(g,E,V,null,N,P,X,B,!1),W>0){if(W&16)Z(V,E,M,F,N,P,L);else if(W&2&&M.class!==F.class&&i(V,"class",null,F.class,L),W&4&&i(V,"style",M.style,F.style,L),W&8){const ee=E.dynamicProps;for(let he=0;he<ee.length;he++){const Ne=ee[he],$e=M[Ne],Sr=F[Ne];(Sr!==$e||Ne==="value")&&i(V,Ne,$e,Sr,L,g.children,N,P,G)}}W&1&&g.children!==E.children&&u(V,E.children)}else!Y&&v==null&&Z(V,E,M,F,N,P,L);((Q=F.onVnodeUpdated)||R)&&wt(()=>{Q&&Xt(Q,N,E,g),R&&Bn(E,g,N,"updated")},P)},U=(g,E,N,P,L,B,Y)=>{for(let V=0;V<E.length;V++){const W=g[V],v=E[V],R=W.el&&(W.type===qt||!kn(W,v)||W.shapeFlag&70)?h(W.el):N;y(W,v,R,null,P,L,B,Y,!0)}},Z=(g,E,N,P,L,B,Y)=>{if(N!==P){if(N!==Be)for(const V in N)!$o(V)&&!(V in P)&&i(g,V,N[V],null,Y,E.children,L,B,G);for(const V in P){if($o(V))continue;const W=P[V],v=N[V];W!==v&&V!=="value"&&i(g,V,v,W,Y,E.children,L,B,G)}"value"in P&&i(g,"value",N.value,P.value)}},q=(g,E,N,P,L,B,Y,V,W)=>{const v=E.el=g?g.el:a(""),R=E.anchor=g?g.anchor:a("");let{patchFlag:M,dynamicChildren:F,slotScopeIds:Q}=E;Q&&(V=V?V.concat(Q):Q),g==null?(r(v,N,P),r(R,N,P),T(E.children,N,R,L,B,Y,V,W)):M>0&&M&64&&F&&g.dynamicChildren?(U(g.dynamicChildren,F,N,L,B,Y,V),(E.key!=null||L&&E===L.subTree)&&Ip(g,E,!0)):ve(g,E,N,R,L,B,Y,V,W)},se=(g,E,N,P,L,B,Y,V,W)=>{E.slotScopeIds=V,g==null?E.shapeFlag&512?L.ctx.activate(E,N,P,Y,W):z(E,N,P,L,B,Y,W):_e(g,E,W)},z=(g,E,N,P,L,B,Y)=>{const V=g.component=ik(g,P,L);if(Ua(g)&&(V.ctx.renderer=ie),ok(V),V.asyncDep){if(L&&L.registerDep(V,le),!g.el){const W=V.subTree=De(Kt);_(null,W,E,N)}return}le(V,g,E,N,L,B,Y)},_e=(g,E,N)=>{const P=E.component=g.component;if(yR(g,E,N))if(P.asyncDep&&!P.asyncResolved){Ee(P,E,N);return}else P.next=E,hR(P.update),P.update();else E.el=g.el,P.vnode=E},le=(g,E,N,P,L,B,Y)=>{const V=()=>{if(g.isMounted){let{next:R,bu:M,u:F,parent:Q,vnode:X}=g,ee=R,he;us(g,!1),R?(R.el=X.el,Ee(g,R,Y)):R=X,M&&wi(M),(he=R.props&&R.props.onVnodeBeforeUpdate)&&Xt(he,Q,R,X),us(g,!0);const Ne=Eh(g),$e=g.subTree;g.subTree=Ne,y($e,Ne,h($e.el),k($e),g,L,B),R.el=Ne.el,ee===null&&mp(g,Ne.el),F&&wt(F,L),(he=R.props&&R.props.onVnodeUpdated)&&wt(()=>Xt(he,Q,R,X),L)}else{let R;const{el:M,props:F}=E,{bm:Q,m:X,parent:ee}=g,he=Is(E);if(us(g,!1),Q&&wi(Q),!he&&(R=F&&F.onVnodeBeforeMount)&&Xt(R,ee,E),us(g,!0),M&&ue){const Ne=()=>{g.subTree=Eh(g),ue(M,g.subTree,g,L,null)};he?E.type.__asyncLoader().then(()=>!g.isUnmounted&&Ne()):Ne()}else{const Ne=g.subTree=Eh(g);y(null,Ne,N,P,g,L,B),E.el=Ne.el}if(X&&wt(X,L),!he&&(R=F&&F.onVnodeMounted)){const Ne=E;wt(()=>Xt(R,ee,Ne),L)}(E.shapeFlag&256||ee&&Is(ee.vnode)&&ee.vnode.shapeFlag&256)&&g.a&&wt(g.a,L),g.isMounted=!0,E=N=P=null}},W=g.effect=new op(V,()=>fu(v),g.scope),v=g.update=()=>W.run();v.id=g.uid,us(g,!0),v()},Ee=(g,E,N)=>{E.component=g;const P=g.vnode.props;g.vnode=E,g.next=null,BR(g,E.props,P,N),qR(g,E.children,N),Qi(),Vg(),Xi()},ve=(g,E,N,P,L,B,Y,V,W=!1)=>{const v=g&&g.children,R=g?g.shapeFlag:0,M=E.children,{patchFlag:F,shapeFlag:Q}=E;if(F>0){if(F&128){Rt(v,M,N,P,L,B,Y,V,W);return}else if(F&256){at(v,M,N,P,L,B,Y,V,W);return}}Q&8?(R&16&&G(v,L,B),M!==v&&u(N,M)):R&16?Q&16?Rt(v,M,N,P,L,B,Y,V,W):G(v,L,B,!0):(R&8&&u(N,""),Q&16&&T(M,N,P,L,B,Y,V,W))},at=(g,E,N,P,L,B,Y,V,W)=>{g=g||_i,E=E||_i;const v=g.length,R=E.length,M=Math.min(v,R);let F;for(F=0;F<M;F++){const Q=E[F]=W?Lr(E[F]):bn(E[F]);y(g[F],Q,N,null,L,B,Y,V,W)}v>R?G(g,L,B,!0,!1,M):T(E,N,P,L,B,Y,V,W,M)},Rt=(g,E,N,P,L,B,Y,V,W)=>{let v=0;const R=E.length;let M=g.length-1,F=R-1;for(;v<=M&&v<=F;){const Q=g[v],X=E[v]=W?Lr(E[v]):bn(E[v]);if(kn(Q,X))y(Q,X,N,null,L,B,Y,V,W);else break;v++}for(;v<=M&&v<=F;){const Q=g[M],X=E[F]=W?Lr(E[F]):bn(E[F]);if(kn(Q,X))y(Q,X,N,null,L,B,Y,V,W);else break;M--,F--}if(v>M){if(v<=F){const Q=F+1,X=Q<R?E[Q].el:P;for(;v<=F;)y(null,E[v]=W?Lr(E[v]):bn(E[v]),N,X,L,B,Y,V,W),v++}}else if(v>F)for(;v<=M;)Ze(g[v],L,B,!0),v++;else{const Q=v,X=v,ee=new Map;for(v=X;v<=F;v++){const rn=E[v]=W?Lr(E[v]):bn(E[v]);rn.key!=null&&ee.set(rn.key,v)}let he,Ne=0;const $e=F-X+1;let Sr=!1,Ar=0;const _o=new Array($e);for(v=0;v<$e;v++)_o[v]=0;for(v=Q;v<=M;v++){const rn=g[v];if(Ne>=$e){Ze(rn,L,B,!0);continue}let Vn;if(rn.key!=null)Vn=ee.get(rn.key);else for(he=X;he<=F;he++)if(_o[he-X]===0&&kn(rn,E[he])){Vn=he;break}Vn===void 0?Ze(rn,L,B,!0):(_o[Vn-X]=v+1,Vn>=Ar?Ar=Vn:Sr=!0,y(rn,E[Vn],N,null,L,B,Y,V,W),Ne++)}const Ng=Sr?QR(_o):_i;for(he=Ng.length-1,v=$e-1;v>=0;v--){const rn=X+v,Vn=E[rn],Og=rn+1<R?E[rn+1].el:P;_o[v]===0?y(null,Vn,N,Og,L,B,Y,V,W):Sr&&(he<0||v!==Ng[he]?lt(Vn,N,Og,2):he--)}}},lt=(g,E,N,P,L=null)=>{const{el:B,type:Y,transition:V,children:W,shapeFlag:v}=g;if(v&6){lt(g.component.subTree,E,N,P);return}if(v&128){g.suspense.move(E,N,P);return}if(v&64){Y.move(g,E,N,ie);return}if(Y===qt){r(B,E,N);for(let M=0;M<W.length;M++)lt(W[M],E,N,P);r(g.anchor,E,N);return}if(Y===nc){w(g,E,N);return}if(P!==2&&v&1&&V)if(P===0)V.beforeEnter(B),r(B,E,N),wt(()=>V.enter(B),L);else{const{leave:M,delayLeave:F,afterLeave:Q}=V,X=()=>r(B,E,N),ee=()=>{M(B,()=>{X(),Q&&Q()})};F?F(B,X,ee):ee()}else r(B,E,N)},Ze=(g,E,N,P=!1,L=!1)=>{const{type:B,props:Y,ref:V,children:W,dynamicChildren:v,shapeFlag:R,patchFlag:M,dirs:F}=g;if(V!=null&&wc(V,null,N,g,!0),R&256){E.ctx.deactivate(g);return}const Q=R&1&&F,X=!Is(g);let ee;if(X&&(ee=Y&&Y.onVnodeBeforeUnmount)&&Xt(ee,E,g),R&6)D(g.component,N,P);else{if(R&128){g.suspense.unmount(N,P);return}Q&&Bn(g,null,E,"beforeUnmount"),R&64?g.type.remove(g,E,N,L,ie,P):v&&(B!==qt||M>0&&M&64)?G(v,E,N,!1,!0):(B===qt&&M&384||!L&&R&16)&&G(W,E,N),P&&wn(g)}(X&&(ee=Y&&Y.onVnodeUnmounted)||Q)&&wt(()=>{ee&&Xt(ee,E,g),Q&&Bn(g,null,E,"unmounted")},N)},wn=g=>{const{type:E,el:N,anchor:P,transition:L}=g;if(E===qt){nr(N,P);return}if(E===nc){C(g);return}const B=()=>{s(N),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(g.shapeFlag&1&&L&&!L.persisted){const{leave:Y,delayLeave:V}=L,W=()=>Y(N,B);V?V(g.el,B,W):W()}else B()},nr=(g,E)=>{let N;for(;g!==E;)N=d(g),s(g),g=N;s(E)},D=(g,E,N)=>{const{bum:P,scope:L,update:B,subTree:Y,um:V}=g;P&&wi(P),L.stop(),B&&(B.active=!1,Ze(Y,g,E,N)),V&&wt(V,E),wt(()=>{g.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},G=(g,E,N,P=!1,L=!1,B=0)=>{for(let Y=B;Y<g.length;Y++)Ze(g[Y],E,N,P,L)},k=g=>g.shapeFlag&6?k(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),j=(g,E,N)=>{g==null?E._vnode&&Ze(E._vnode,null,null,!0):y(E._vnode||null,g,E,null,null,null,N),Vg(),yc(),E._vnode=g},ie={p:y,um:Ze,m:lt,r:wn,mt:z,mc:T,pc:ve,pbc:U,n:k,o:t};let Le,ue;return e&&([Le,ue]=e(ie)),{render:j,hydrate:Le,createApp:zR(j,Le)}}function us({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ip(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Lr(s[i]),a.el=o.el),n||Ip(o,a)),a.type===Oi&&(a.el=o.el)}}function QR(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const XR=t=>t.__isTeleport,Bo=t=>t&&(t.disabled||t.disabled===""),Xg=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Nd=(t,e)=>{const n=t&&t.to;return Xe(n)?e?e(n):null:n},JR={__isTeleport:!0,process(t,e,n,r,s,i,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:y,createComment:b}}=c,_=Bo(e.props);let{shapeFlag:m,children:w,dynamicChildren:C}=e;if(t==null){const I=e.el=y(""),A=e.anchor=y("");f(I,n,r),f(A,n,r);const S=e.target=Nd(e.props,p),T=e.targetAnchor=y("");S&&(f(T,S),o=o||Xg(S));const O=(U,Z)=>{m&16&&u(w,U,Z,s,i,o,a,l)};_?O(n,A):S&&O(S,T)}else{e.el=t.el;const I=e.anchor=t.anchor,A=e.target=t.target,S=e.targetAnchor=t.targetAnchor,T=Bo(t.props),O=T?n:A,U=T?I:S;if(o=o||Xg(A),C?(d(t.dynamicChildren,C,O,s,i,o,a),Ip(t,e,!0)):l||h(t,e,O,U,s,i,o,a,!1),_)T||kl(e,n,I,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Z=e.target=Nd(e.props,p);Z&&kl(e,Z,null,c,0)}else T&&kl(e,A,S,c,1)}CE(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=t;if(h&&i(u),(o||!Bo(d))&&(i(c),a&16))for(let f=0;f<l.length;f++){const p=l[f];s(p,e,n,!0,!!p.dynamicChildren)}},move:kl,hydrate:ZR};function kl(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=i===2;if(h&&r(o,e,n),(!h||Bo(u))&&l&16)for(let d=0;d<c.length;d++)s(c[d],e,n,2);h&&r(a,e,n)}function ZR(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Nd(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Bo(e.props))e.anchor=c(o(t),e,a(t),n,r,s,i),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,r,s,i)}CE(e)}return e.anchor&&o(e.anchor)}const yK=JR;function CE(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const qt=Symbol(void 0),Oi=Symbol(void 0),Kt=Symbol(void 0),nc=Symbol(void 0),Ho=[];let Tn=null;function jr(t=!1){Ho.push(Tn=t?null:[])}function SE(){Ho.pop(),Tn=Ho[Ho.length-1]||null}let Pi=1;function Jg(t){Pi+=t}function AE(t){return t.dynamicChildren=Pi>0?Tn||_i:null,SE(),Pi>0&&Tn&&Tn.push(t),t}function ek(t,e,n,r,s,i){return AE(kE(t,e,n,r,s,i,!0))}function hi(t,e,n,r,s){return AE(De(t,e,n,r,s,!0))}function Di(t){return t?t.__v_isVNode===!0:!1}function kn(t,e){return t.type===e.type&&t.key===e.key}const yu="__vInternal",RE=({key:t})=>t??null,rc=({ref:t,ref_key:e,ref_for:n})=>t!=null?Xe(t)||Me(t)||me(t)?{i:It,r:t,k:e,f:!!n}:t:null;function kE(t,e=null,n=null,r=0,s=null,i=t===qt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&RE(e),ref:e&&rc(e),scopeId:mu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:It};return a?(Cp(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Xe(n)?8:16),Pi>0&&!o&&Tn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Tn.push(l),l}const De=tk;function tk(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===mE)&&(t=Kt),Di(t)){const a=gr(t,e,!0);return n&&Cp(a,n),Pi>0&&!i&&Tn&&(a.shapeFlag&6?Tn[Tn.indexOf(t)]=a:Tn.push(a)),a.patchFlag|=-2,a}if(uk(t)&&(t=t.__vccOpts),e){e=nk(e);let{class:a,style:l}=e;a&&!Xe(a)&&(e.class=Zf(a)),We(l)&&(Ww(l)&&!oe(l)&&(l=_t({},l)),e.style=Jf(l))}const o=Xe(t)?1:rE(t)?128:XR(t)?64:We(t)?4:me(t)?2:0;return kE(t,e,n,r,s,o,i,!0)}function nk(t){return t?Ww(t)||yu in t?_t({},t):t:null}function gr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?OE(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&RE(a),ref:e&&e.ref?n&&s?oe(s)?s.concat(rc(e)):[s,rc(e)]:rc(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gr(t.ssContent),ssFallback:t.ssFallback&&gr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function NE(t=" ",e=0){return De(Oi,null,t,e)}function _K(t="",e=!1){return e?(jr(),hi(Kt,null,t)):De(Kt,null,t)}function bn(t){return t==null||typeof t=="boolean"?De(Kt):oe(t)?De(qt,null,t.slice()):typeof t=="object"?Lr(t):De(Oi,null,String(t))}function Lr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:gr(t)}function Cp(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Cp(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(yu in e)?e._ctx=It:s===3&&It&&(It.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:It},n=32):(e=String(e),r&64?(n=16,e=[NE(e)]):n=8);t.children=e,t.shapeFlag|=n}function OE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Zf([e.class,r.class]));else if(s==="style")e.style=Jf([e.style,r.style]);else if(Ma(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Xt(t,e,n,r=null){Cn(t,e,7,[n,r])}const rk=TE();let sk=0;function ik(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||rk,i={uid:sk++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ow(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vE(r,s),emitsOptions:tE(r,s),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:r.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=fR.bind(null,i),t.ce&&t.ce(i),i}let et=null;const Yt=()=>et||It,ts=t=>{et=t,t.scope.on()},Kr=()=>{et&&et.scope.off(),et=null};function PE(t){return t.vnode.shapeFlag&4}let xi=!1;function ok(t,e=!1){xi=e;const{props:n,children:r}=t.vnode,s=PE(t);VR(t,n,s,e),jR(t,r);const i=s?ak(t,e):void 0;return xi=!1,i}function ak(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Os(new Proxy(t.ctx,xR));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?ck(t):null;ts(t),Qi();const i=zr(r,t,0,[t.props,s]);if(Xi(),Kr(),rp(i)){if(i.then(Kr,Kr),e)return i.then(o=>{Od(t,o,e)}).catch(o=>{Ji(o,t,0)});t.asyncDep=i}else Od(t,i,e)}else DE(t,e)}function Od(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:We(e)&&(t.setupState=Yw(e)),DE(t,n)}let Zg;function DE(t,e,n){const r=t.type;if(!t.render){if(!e&&Zg&&!r.render){const s=r.template||bp(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=_t(_t({isCustomElement:i,delimiters:a},o),l);r.render=Zg(s,c)}}t.render=r.render||Pn}ts(t),Qi(),MR(t),Xi(),Kr()}function lk(t){return new Proxy(t.attrs,{get(e,n){return nn(t,"get","$attrs"),e[n]}})}function ck(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=lk(t))},slots:t.slots,emit:t.emit,expose:e}}function _u(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yw(Os(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vo)return Vo[n](t)},has(e,n){return n in e||n in Vo}}))}function Pd(t,e=!0){return me(t)?t.displayName||t.name:t.name||e&&t.__name}function uk(t){return me(t)&&"__vccOpts"in t}const ae=(t,e)=>lR(t,e,xi);function vK(t){const e=Yt();let n=t();return Kr(),rp(n)&&(n=n.catch(r=>{throw ts(e),r})),[n,()=>ts(e)]}function Dn(t,e,n){const r=arguments.length;return r===2?We(e)&&!oe(e)?Di(e)?De(t,null,[e]):De(t,e):De(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Di(n)&&(n=[n]),De(t,e,n))}const hk=Symbol(""),dk=()=>tt(hk),Sp="3.2.47",fk="http://www.w3.org/2000/svg",gs=typeof document<"u"?document:null,ey=gs&&gs.createElement("template"),pk={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?gs.createElementNS(fk,t):gs.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>gs.createTextNode(t),createComment:t=>gs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ey.innerHTML=r?`<svg>${t}</svg>`:t;const a=ey.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function mk(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function gk(t,e,n){const r=t.style,s=Xe(n);if(n&&!s){if(e&&!Xe(e))for(const i in e)n[i]==null&&Dd(r,i,"");for(const i in n)Dd(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const ty=/\s*!important$/;function Dd(t,e,n){if(oe(n))n.forEach(r=>Dd(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=yk(t,e);ty.test(n)?t.setProperty(Yi(r),n.replace(ty,""),"important"):t[r]=n}}const ny=["Webkit","Moz","ms"],Ah={};function yk(t,e){const n=Ah[e];if(n)return n;let r=Qn(e);if(r!=="filter"&&r in t)return Ah[e]=r;r=Fa(r);for(let s=0;s<ny.length;s++){const i=ny[s]+r;if(i in t)return Ah[e]=i}return e}const ry="http://www.w3.org/1999/xlink";function _k(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ry,e.slice(6,e.length)):t.setAttributeNS(ry,e,n);else{const i=wA(e);n==null||i&&!Cw(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function vk(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Cw(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function oi(t,e,n,r){t.addEventListener(e,n,r)}function wk(t,e,n,r){t.removeEventListener(e,n,r)}function Ek(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=bk(e);if(r){const c=i[e]=Ck(r,s);oi(t,a,c,l)}else o&&(wk(t,a,o,l),i[e]=void 0)}}const sy=/(?:Once|Passive|Capture)$/;function bk(t){let e;if(sy.test(t)){e={};let r;for(;r=t.match(sy);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Yi(t.slice(2)),e]}let Rh=0;const Tk=Promise.resolve(),Ik=()=>Rh||(Tk.then(()=>Rh=0),Rh=Date.now());function Ck(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Cn(Sk(r,n.value),e,5,[r])};return n.value=t,n.attached=Ik(),n}function Sk(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const iy=/^on[a-z]/,Ak=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?mk(t,r,s):e==="style"?gk(t,n,r):Ma(e)?ep(e)||Ek(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rk(t,e,r,s))?vk(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),_k(t,e,r,s))};function Rk(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&iy.test(e)&&me(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||iy.test(e)&&Xe(n)?!1:e in t}const Nr="transition",vo="animation",Ap=(t,{slots:e})=>Dn(lE,ME(t),e);Ap.displayName="Transition";const xE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},kk=Ap.props=_t({},lE.props,xE),hs=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},oy=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function ME(t){const e={};for(const q in t)q in xE||(e[q]=t[q]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=Nk(s),y=p&&p[0],b=p&&p[1],{onBeforeEnter:_,onEnter:m,onEnterCancelled:w,onLeave:C,onLeaveCancelled:I,onBeforeAppear:A=_,onAppear:S=m,onAppearCancelled:T=w}=e,O=(q,se,z)=>{Dr(q,se?u:a),Dr(q,se?c:o),z&&z()},U=(q,se)=>{q._isLeaving=!1,Dr(q,h),Dr(q,f),Dr(q,d),se&&se()},Z=q=>(se,z)=>{const _e=q?S:m,le=()=>O(se,q,z);hs(_e,[se,le]),ay(()=>{Dr(se,q?l:i),ir(se,q?u:a),oy(_e)||ly(se,r,y,le)})};return _t(e,{onBeforeEnter(q){hs(_,[q]),ir(q,i),ir(q,o)},onBeforeAppear(q){hs(A,[q]),ir(q,l),ir(q,c)},onEnter:Z(!1),onAppear:Z(!0),onLeave(q,se){q._isLeaving=!0;const z=()=>U(q,se);ir(q,h),FE(),ir(q,d),ay(()=>{q._isLeaving&&(Dr(q,h),ir(q,f),oy(C)||ly(q,r,b,z))}),hs(C,[q,z])},onEnterCancelled(q){O(q,!1),hs(w,[q])},onAppearCancelled(q){O(q,!0),hs(T,[q])},onLeaveCancelled(q){U(q),hs(I,[q])}})}function Nk(t){if(t==null)return null;if(We(t))return[kh(t.enter),kh(t.leave)];{const e=kh(t);return[e,e]}}function kh(t){return Nw(t)}function ir(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Dr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ay(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ok=0;function ly(t,e,n,r){const s=t._endId=++Ok,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=LE(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),i()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function LE(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),s=r(`${Nr}Delay`),i=r(`${Nr}Duration`),o=cy(s,i),a=r(`${vo}Delay`),l=r(`${vo}Duration`),c=cy(a,l);let u=null,h=0,d=0;e===Nr?o>0&&(u=Nr,h=o,d=i.length):e===vo?c>0&&(u=vo,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Nr:vo:null,d=u?u===Nr?i.length:l.length:0);const f=u===Nr&&/\b(transform|all)(,|$)/.test(r(`${Nr}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function cy(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>uy(n)+uy(t[r])))}function uy(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function FE(){return document.body.offsetHeight}const UE=new WeakMap,$E=new WeakMap,VE={name:"TransitionGroup",props:_t({},kk,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Yt(),r=aE();let s,i;return vp(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Lk(s[0].el,n.vnode.el,o))return;s.forEach(Dk),s.forEach(xk);const a=s.filter(Mk);FE(),a.forEach(l=>{const c=l.el,u=c.style;ir(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,Dr(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=Te(t),a=ME(o);let l=o.tag||qt;s=i,i=e.default?_p(e.default()):[];for(let c=0;c<i.length;c++){const u=i[c];u.key!=null&&Ni(u,ha(u,a,r,n))}if(s)for(let c=0;c<s.length;c++){const u=s[c];Ni(u,ha(u,a,r,n)),UE.set(u,u.el.getBoundingClientRect())}return De(l,null,i)}}},Pk=t=>delete t.mode;VE.props;const wK=VE;function Dk(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function xk(t){$E.set(t,t.el.getBoundingClientRect())}function Mk(t){const e=UE.get(t),n=$E.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function Lk(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=LE(r);return s.removeChild(r),i}const hy=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>wi(e,n):e};function Fk(t){t.target.composing=!0}function dy(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const EK={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=hy(s);const i=r||s.props&&s.props.type==="number";oi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ed(a)),t._assign(a)}),n&&oi(t,"change",()=>{t.value=t.value.trim()}),e||(oi(t,"compositionstart",Fk),oi(t,"compositionend",dy),oi(t,"change",dy))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=hy(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ed(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},bK={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):wo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),wo(t,!0),r.enter(t)):r.leave(t,()=>{wo(t,!1)}):wo(t,e))},beforeUnmount(t,{value:e}){wo(t,e)}};function wo(t,e){t.style.display=e?t._vod:"none"}const BE=_t({patchProp:Ak},pk);let jo,fy=!1;function Uk(){return jo||(jo=GR(BE))}function $k(){return jo=fy?jo:YR(BE),fy=!0,jo}const Vk=(...t)=>{const e=Uk().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=HE(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},Bk=(...t)=>{const e=$k().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=HE(r);if(s)return n(s,!0,s instanceof SVGElement)},e};function HE(t){return Xe(t)?document.querySelector(t):t}const Hk=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,jk=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,qk=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function Wk(t,e){if(t!=="__proto__"&&!(t==="constructor"&&e&&typeof e=="object"&&"prototype"in e))return e}function zk(t,e={}){if(typeof t!="string")return t;const n=t.toLowerCase().trim();if(n==="true")return!0;if(n==="false")return!1;if(n==="null")return null;if(n==="nan")return Number.NaN;if(n==="infinity")return Number.POSITIVE_INFINITY;if(n!=="undefined"){if(!qk.test(t)){if(e.strict)throw new SyntaxError("Invalid JSON");return t}try{return Hk.test(t)||jk.test(t)?JSON.parse(t,Wk):JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}}const Kk=/#/g,Gk=/&/g,Yk=/=/g,jE=/\+/g,Qk=/%5e/gi,Xk=/%60/gi,Jk=/%7c/gi,Zk=/%20/gi;function eN(t){return encodeURI(""+t).replace(Jk,"|")}function xd(t){return eN(typeof t=="string"?t:JSON.stringify(t)).replace(jE,"%2B").replace(Zk,"+").replace(Kk,"%23").replace(Gk,"%26").replace(Xk,"`").replace(Qk,"^")}function Nh(t){return xd(t).replace(Yk,"%3D")}function qE(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function tN(t){return qE(t.replace(jE," "))}function nN(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=qE(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=tN(r[2]||"");typeof e[s]<"u"?Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]:e[s]=i}return e}function rN(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Nh(t)}=${xd(n)}`).join("&"):`${Nh(t)}=${xd(e)}`:Nh(t)}function sN(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>rN(e,t[e])).join("&")}const iN=/^\w{2,}:([/\\]{1,2})/,oN=/^\w{2,}:([/\\]{2})?/,aN=/^([/\\]\s*){2,}[^/\\]/;function Va(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?iN.test(t):oN.test(t)||(e.acceptRelative?aN.test(t):!1)}const lN=/\/$|\/\?/;function Md(t="",e=!1){return e?lN.test(t):t.endsWith("/")}function WE(t="",e=!1){if(!e)return(Md(t)?t.slice(0,-1):t)||"/";if(!Md(t,!0))return t||"/";const[n,...r]=t.split("?");return(n.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function cN(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(Md(t,!0))return t||"/";const[n,...r]=t.split("?");return n+"/"+(r.length>0?`?${r.join("?")}`:"")}function uN(t=""){return t.startsWith("/")}function hN(t=""){return(uN(t)?t.slice(1):t)||"/"}function dN(t,e){if(zE(e)||Va(t))return t;const n=WE(e);return t.startsWith(n)?t:vu(n,t)}function py(t,e){if(zE(e))return t;const n=WE(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function fN(t,e){const n=wu(t),r={...nN(n.search),...e};return n.search=sN(r),mN(n)}function zE(t){return!t||t==="/"}function pN(t){return t&&t!=="/"}function vu(t,...e){let n=t||"";for(const r of e.filter(s=>pN(s)))n=n?cN(n)+hN(r):r;return n}function wu(t="",e){if(!Va(t,{acceptRelative:!0}))return e?wu(e+t):my(t);const[n="",r,s=""]=(t.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[i="",o=""]=(s.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:a,search:l,hash:c}=my(o.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n,auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:i,pathname:a,search:l,hash:c}}function my(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function mN(t){const e=t.pathname+(t.search?(t.search.startsWith("?")?"":"?")+t.search:"")+t.hash;return t.protocol?t.protocol+"//"+(t.auth?t.auth+"@":"")+t.host+e:e}class gN extends Error{constructor(){super(...arguments),this.name="FetchError"}}function yN(t,e,n){let r="";e&&(r=e.message),t&&n?r=`${r} (${n.status} ${n.statusText} (${t.toString()}))`:t&&(r=`${r} (${t.toString()})`);const s=new gN(r);return Object.defineProperty(s,"request",{get(){return t}}),Object.defineProperty(s,"response",{get(){return n}}),Object.defineProperty(s,"data",{get(){return n&&n._data}}),Object.defineProperty(s,"status",{get(){return n&&n.status}}),Object.defineProperty(s,"statusText",{get(){return n&&n.statusText}}),Object.defineProperty(s,"statusCode",{get(){return n&&n.status}}),Object.defineProperty(s,"statusMessage",{get(){return n&&n.statusText}}),s}const _N=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function gy(t="GET"){return _N.has(t.toUpperCase())}function vN(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const wN=new Set(["image/svg","application/xml","application/xhtml","application/html"]),EN=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function bN(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return EN.test(e)?"json":wN.has(e)||e.startsWith("text/")?"text":"blob"}const TN=new Set([408,409,425,429,500,502,503,504]);function KE(t){const{fetch:e,Headers:n}=t;function r(o){const a=o.error&&o.error.name==="AbortError"||!1;if(o.options.retry!==!1&&!a){let c;typeof o.options.retry=="number"?c=o.options.retry:c=gy(o.options.method)?0:1;const u=o.response&&o.response.status||500;if(c>0&&TN.has(u))return s(o.request,{...o.options,retry:c-1})}const l=yN(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(l,s),l}const s=async function(a,l={}){const c={request:a,options:{...t.defaults,...l},response:void 0,error:void 0};c.options.onRequest&&await c.options.onRequest(c),typeof c.request=="string"&&(c.options.baseURL&&(c.request=dN(c.request,c.options.baseURL)),(c.options.query||c.options.params)&&(c.request=fN(c.request,{...c.options.params,...c.options.query})),c.options.body&&gy(c.options.method)&&vN(c.options.body)&&(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new n(c.options.headers),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json"))),c.response=await e(c.request,c.options).catch(async h=>(c.error=h,c.options.onRequestError&&await c.options.onRequestError(c),r(c)));const u=(c.options.parseResponse?"json":c.options.responseType)||bN(c.response.headers.get("content-type")||"");if(u==="json"){const h=await c.response.text(),d=c.options.parseResponse||zk;c.response._data=d(h)}else u==="stream"?c.response._data=c.response.body:c.response._data=await c.response[u]();return c.options.onResponse&&await c.options.onResponse(c),c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await c.options.onResponseError(c),r(c)):c.response},i=function(a,l){return s(a,l).then(c=>c._data)};return i.raw=s,i.native=e,i.create=(o={})=>KE({...t,defaults:{...t.defaults,...o}}),i}const GE=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),IN=GE.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),CN=GE.Headers,SN=KE({fetch:IN,Headers:CN}),AN=SN,RN=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Ec=RN().app,kN=()=>Ec.baseURL,NN=()=>Ec.buildAssetsDir,ON=(...t)=>vu(YE(),NN(),...t),YE=(...t)=>{const e=Ec.cdnURL||Ec.baseURL;return t.length?vu(e,...t):e};globalThis.__buildAssetsURL=ON,globalThis.__publicAssetsURL=YE;function Ld(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Ld(s,e,i):typeof s=="function"&&(e[i]=s)}return e}function PN(t,e){return t.reduce((n,r)=>n.then(()=>r.apply(void 0,e)),Promise.resolve())}function DN(t,e){return Promise.all(t.map(n=>n.apply(void 0,e)))}function Oh(t,e){for(const n of t)n(e)}class xN{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];this._hooks[e]=void 0;for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Ld(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Ld(e);for(const r in n)this.removeHook(r,n[r])}callHook(e,...n){return this.callHookWith(PN,e,...n)}callHookParallel(e,...n){return this.callHookWith(DN,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Oh(this._before,s);const i=e(this._hooks[n]||[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Oh(this._after,s)}):(this._after&&s&&Oh(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}function QE(){return new xN}function MN(){let t,e=!1;const n=r=>{if(t&&t!==r)throw new Error("Context conflict")};return{use:()=>{if(t===void 0)throw new Error("Context is not available");return t},tryUse:()=>t,set:(r,s)=>{s||n(r),t=r,e=!0},unset:()=>{t=void 0,e=!1},call:(r,s)=>{n(r),t=r;try{return s()}finally{e||(t=void 0)}},async callAsync(r,s){t=r;const i=()=>{t=r},o=()=>t===r?i:void 0;Fd.add(o);try{const a=s();return e||(t=void 0),await a}finally{Fd.delete(o)}}}}function LN(){const t={};return{get(e){return t[e]||(t[e]=MN()),t[e],t[e]}}}const bc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},yy="__unctx__",FN=bc[yy]||(bc[yy]=LN()),UN=t=>FN.get(t),_y="__unctx_async_handlers__",Fd=bc[_y]||(bc[_y]=new Set);function Ud(t){const e=[];for(const s of Fd){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const XE=UN("nuxt-app"),$N="__nuxt_plugin";function VN(t){let e=0;const n={provide:void 0,globalName:"nuxt",payload:dt({data:{},state:{},_errors:{},...window.__NUXT__}),static:{data:{}},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},...t};n.hooks=QE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;Nl(n,a,o),Nl(n.vueApp.config.globalProperties,a,o)},Nl(n.vueApp,"$nuxt",n),Nl(n.vueApp.config.globalProperties,"$nuxt",n),window.addEventListener("nuxt.preloadError",i=>{n.callHook("app:chunkError",{error:i.payload})}),n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});const r=dt(n.payload.config),s=new Proxy(r,{get(i,o){return o==="public"?i.public:i[o]??i.public[o]},set(i,o,a){return o==="public"||o==="app"?!1:(i[o]=a,i.public[o]=a,!0)}});return n.provide("config",s),n}async function BN(t,e){if(typeof e!="function")return;const{provide:n}=await ar(t,e,[t])||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}async function HN(t,e){for(const n of e)await BN(t,n)}function jN(t){return t.map(n=>typeof n!="function"?null:n.length>1?r=>n(r,r.provide):n).filter(Boolean)}function $n(t){return t[$N]=!0,t}function ar(t,e,n){const r=()=>n?e(...n):e();return XE.set(t),r()}function St(){const t=XE.tryUse();if(!t){const e=Yt();if(!e)throw new Error("nuxt instance unavailable");return e.appContext.app.$nuxt}return t}function JE(){return St().$config}function Nl(t,e,n){Object.defineProperty(t,e,{get:()=>n})}const qN=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let ZE;const Ba=t=>ZE=t,e0=Symbol();function $d(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var qo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(qo||(qo={}));function WN(){const t=hu(!0),e=t.run(()=>ke({}));let n=[],r=[];const s=Os({install(i){Ba(s),s._a=i,i.provide(e0,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!qN?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const t0=()=>{};function vy(t,e,n,r=t0){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Pw()&&Dw(s),s}function Zs(t,...e){t.slice().forEach(n=>{n(...e)})}function Vd(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];$d(s)&&$d(r)&&t.hasOwnProperty(n)&&!Me(r)&&!Wr(r)?t[n]=Vd(s,r):t[n]=r}return t}const zN=Symbol();function KN(t){return!$d(t)||!t.hasOwnProperty(zN)}const{assign:xr}=Object;function GN(t){return!!(Me(t)&&t.effect)}function YN(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=dp(n.state.value[t]);return xr(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Os(ae(()=>{Ba(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=n0(t,c,e,n,r,!0),l}function n0(t,e,n={},r,s,i){let o;const a=xr({actions:{}},n),l={deep:!0};let c,u,h=Os([]),d=Os([]),f;const p=r.state.value[t];!i&&!p&&(r.state.value[t]={}),ke({});let y;function b(S){let T;c=u=!1,typeof S=="function"?(S(r.state.value[t]),T={type:qo.patchFunction,storeId:t,events:f}):(Vd(r.state.value[t],S),T={type:qo.patchObject,payload:S,storeId:t,events:f});const O=y=Symbol();fn().then(()=>{y===O&&(c=!0)}),u=!0,Zs(h,T,r.state.value[t])}const _=i?function(){const{state:T}=n,O=T?T():{};this.$patch(U=>{xr(U,O)})}:t0;function m(){o.stop(),h=[],d=[],r._s.delete(t)}function w(S,T){return function(){Ba(r);const O=Array.from(arguments),U=[],Z=[];function q(_e){U.push(_e)}function se(_e){Z.push(_e)}Zs(d,{args:O,name:S,store:I,after:q,onError:se});let z;try{z=T.apply(this&&this.$id===t?this:I,O)}catch(_e){throw Zs(Z,_e),_e}return z instanceof Promise?z.then(_e=>(Zs(U,_e),_e)).catch(_e=>(Zs(Z,_e),Promise.reject(_e))):(Zs(U,z),z)}}const C={_p:r,$id:t,$onAction:vy.bind(null,d),$patch:b,$reset:_,$subscribe(S,T={}){const O=vy(h,S,T.detached,()=>U()),U=o.run(()=>Qe(()=>r.state.value[t],Z=>{(T.flush==="sync"?u:c)&&S({storeId:t,type:qo.direct,events:f},Z)},xr({},l,T)));return O},$dispose:m},I=dt(C);r._s.set(t,I);const A=r._e.run(()=>(o=hu(),o.run(()=>e())));for(const S in A){const T=A[S];if(Me(T)&&!GN(T)||Wr(T))i||(p&&KN(T)&&(Me(T)?T.value=p[S]:Vd(T,p[S])),r.state.value[t][S]=T);else if(typeof T=="function"){const O=w(S,T);A[S]=O,a.actions[S]=T}}return xr(I,A),xr(Te(I),A),Object.defineProperty(I,"$state",{get:()=>r.state.value[t],set:S=>{b(T=>{xr(T,S)})}}),r._p.forEach(S=>{xr(I,o.run(()=>S({store:I,app:r._a,pinia:r,options:a})))}),p&&i&&n.hydrate&&n.hydrate(I.$state,p),c=!0,u=!0,I}function TK(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const c=Yt();return a=a||c&&tt(e0,null),a&&Ba(a),a=ZE,a._s.has(r)||(i?n0(r,e,s,a):YN(r,s,a)),a._s.get(r)}return o.$id=r,o}function Ph(t){return t!==null&&typeof t=="object"}function Bd(t,e,n=".",r){if(!Ph(e))return Bd(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Ph(o)&&Ph(s[i])?s[i]=Bd(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function r0(t){return(...e)=>e.reduce((n,r)=>Bd(n,r,"",t),{})}const QN=r0(),XN=r0((t,e,n)=>{if(typeof t[e]<"u"&&typeof n=="function")return t[e]=n(t[e]),!0});class Hd extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1,this.statusMessage=void 0}toJSON(){const e={message:this.message,statusCode:this.statusCode};return this.statusMessage&&(e.statusMessage=this.statusMessage),this.data!==void 0&&(e.data=this.data),e}}Hd.__h3_error__=!0;function jd(t){if(typeof t=="string")return new Hd(t);if(JN(t))return t;const e=new Hd(t.message??t.statusMessage,t.cause?{cause:t.cause}:void 0);if("stack"in t)try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}return t.data&&(e.data=t.data),t.statusCode?e.statusCode=t.statusCode:t.status&&(e.statusCode=t.status),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function JN(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const Eu=()=>fp(St().payload,"error"),di=t=>{const e=s0(t);try{St().callHook("app:error",e);const r=Eu();r.value=r.value||e}catch{throw e}return e},ZN=async(t={})=>{const e=St(),n=Eu();e.callHook("app:error:cleared",t),t.redirect&&await e.$router.replace(t.redirect),n.value=null},eO=t=>!!(t&&typeof t=="object"&&"__nuxt_error"in t),s0=t=>{const e=jd(t);return e.__nuxt_error=!0,e};function tO(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,r]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s="$s"+n,i=St(),o=fp(i.payload.state,s);if(o.value===void 0&&r){const a=r();if(Me(a))return i.payload.state[s]=a,a;o.value=a}return o}const bu=()=>{var t;return(t=St())==null?void 0:t.$router},nO=()=>Yt()?tt("_route",St()._route):St()._route,rO=t=>t,sO=()=>{try{if(St()._processingMiddleware)return!0}catch{return!0}return!1},IK=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:t.path||"/",r=Va(n,!0);if(r&&!(e!=null&&e.external))throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");if(r&&wu(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");if(!r&&sO())return t;const s=bu();return r?(e!=null&&e.replace?location.replace(n):location.href=n,Promise.resolve()):e!=null&&e.replace?s.replace(t):s.push(t)};function iO(t){return Array.isArray(t)?t:[t]}const i0=["title","script","style","noscript"],Rp=["base","meta","link","style","script","noscript"],oO=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],aO=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],lO=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function o0(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Tc(t){return o0(`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function cO(t){let e=9;for(const n of t)for(let r=0;r<n.length;)e=Math.imul(e^n.charCodeAt(r++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function a0(t,e){const{props:n,tag:r}=t;if(aO.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${r}:${i}:${o}`}return!1}const Ol=(t,e=!1,n)=>{const{tag:r,$el:s}=t;s&&(Object.entries(r.props).forEach(([i,o])=>{o=String(o);const a=`attr:${i}`;if(i==="class"){if(!o)return;for(const l of o.split(" ")){const c=`${a}:${l}`;n&&n(t,c,()=>s.classList.remove(l)),s.classList.contains(l)||s.classList.add(l)}return}n&&!i.startsWith("data-h-")&&n(t,a,()=>s.removeAttribute(i)),(e||s.getAttribute(i)!==o)&&s.setAttribute(i,o)}),i0.includes(r.tag)&&(r.textContent&&r.textContent!==s.textContent?s.textContent=r.textContent:r.innerHTML&&r.innerHTML!==s.innerHTML&&(s.innerHTML=r.innerHTML)))};let Eo=!1;async function l0(t,e={}){var d,f;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const r=e.document||t.resolvedOptions.document||window.document,s=(await t.resolveTags()).map(a);if(t.resolvedOptions.experimentalHashHydration&&(Eo=Eo||t._hash||!1,Eo)){const p=cO(s.map(y=>y.tag._h));if(Eo===p)return;Eo=p}const i=t._popSideEffectQueue();t.headEntries().map(p=>p._sde).forEach(p=>{Object.entries(p).forEach(([y,b])=>{i[y]=b})});const o=(p,y,b)=>{y=`${p.renderId}:${y}`,p.entry&&(p.entry._sde[y]=b),delete i[y]};function a(p){const y=t.headEntries().find(_=>_._i===p._e),b={renderId:p._d||Tc(p),$el:null,shouldRender:!0,tag:p,entry:y,markSideEffect:(_,m)=>o(b,_,m)};return b}const l=[],c={body:[],head:[]},u=p=>{t._elMap[p.renderId]=p.$el,l.push(p),o(p,"el",()=>{var y;(y=p.$el)==null||y.remove(),delete t._elMap[p.renderId]})};for(const p of s){if(await t.hooks.callHook("dom:beforeRenderTag",p),!p.shouldRender)continue;const{tag:y}=p;if(y.tag==="title"){r.title=y.textContent||"",l.push(p);continue}if(y.tag==="htmlAttrs"||y.tag==="bodyAttrs"){p.$el=r[y.tag==="htmlAttrs"?"documentElement":"body"],Ol(p,!1,o),l.push(p);continue}if(p.$el=t._elMap[p.renderId],!p.$el&&y.key&&(p.$el=r.querySelector(`${(d=y.tagPosition)!=null&&d.startsWith("body")?"body":"head"} > ${y.tag}[data-h-${y._h}]`)),p.$el){p.tag._d&&Ol(p),u(p);continue}c[(f=y.tagPosition)!=null&&f.startsWith("body")?"body":"head"].push(p)}const h={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(c).forEach(([p,y])=>{var _;if(!y.length)return;const b=(_=r==null?void 0:r[p])==null?void 0:_.children;if(b){for(const m of[...b].reverse()){const w=m.tagName.toLowerCase();if(!Rp.includes(w))continue;const C=m.getAttributeNames().reduce((T,O)=>({...T,[O]:m.getAttribute(O)}),{}),I={tag:w,props:C};m.innerHTML&&(I.innerHTML=m.innerHTML);const A=Tc(I);let S=y.findIndex(T=>(T==null?void 0:T.renderId)===A);if(S===-1){const T=a0(I);S=y.findIndex(O=>(O==null?void 0:O.tag._d)&&O.tag._d===T)}if(S!==-1){const T=y[S];T.$el=m,Ol(T),u(T),delete y[S]}}y.forEach(m=>{const w=m.tag.tagPosition||"head";h[w]=h[w]||r.createDocumentFragment(),m.$el||(m.$el=r.createElement(m.tag.tag),Ol(m,!0)),h[w].appendChild(m.$el),u(m)})}}),h.head&&r.head.appendChild(h.head),h.bodyOpen&&r.body.insertBefore(h.bodyOpen,r.body.firstChild),h.bodyClose&&r.body.appendChild(h.bodyClose);for(const p of l)await t.hooks.callHook("dom:renderTag",p);Object.values(i).forEach(p=>p())}let Dh=null;async function c0(t,e={}){function n(){return Dh=null,l0(t,e)}const r=e.delayFn||(s=>setTimeout(s,10));return Dh=Dh||new Promise(s=>r(()=>s(n())))}const uO=t=>({hooks:{"entries:updated":function(e){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let n=t==null?void 0:t.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),c0(e,{document:(t==null?void 0:t.document)||window.document,delayFn:n})}}});function hO(t){var e;return((e=t==null?void 0:t.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:e.getAttribute("content"))||!1}const wy={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Ey(t){if(typeof t.tagPriority=="number")return t.tagPriority;if(t.tag==="meta"){if(t.props.charset)return-2;if(t.props["http-equiv"]==="content-security-policy")return 0}const e=t.tagPriority||t.tag;return e in wy?wy[e]:10}const dO=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function fO(){return{hooks:{"tags:resolve":t=>{const e=n=>{var r;return(r=t.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of dO)for(const s of t.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=e(s.tagPriority.replace(n,""));typeof i<"u"&&(s._p=i+r)}t.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>Ey(n)-Ey(r))}}}}const by=(t,e)=>t==null?e||null:typeof t=="function"?t(e):t.replace("%s",e??""),pO=()=>({hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(s=>s.tag==="titleTemplate");const r=e.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=by(e[n].textContent,e[r].textContent);s!==null?e[r].textContent=s||e[r].textContent:delete e[r]}else if(n!==-1){const s=by(e[n].textContent);s!==null&&(e[n].textContent=s,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}}),mO=()=>({hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}),u0=typeof window<"u",gO=()=>({hooks:{"tag:normalise":t=>{var i,o;const{tag:e,entry:n,resolvedOptions:r}=t;r.experimentalHashHydration===!0&&(e._h=Tc(e));const s=typeof e.props._dynamic<"u";!Rp.includes(e.tag)||!e.key||u0||(o=(i=d0())==null?void 0:i.resolvedOptions)!=null&&o.document||(n._m==="server"||s)&&(e._h=e._h||Tc(e),e.props[`data-h-${e._h}`]="")},"tags:resolve":t=>{t.tags=t.tags.map(e=>(delete e.props._dynamic,e))}}}),Ty=["script","link","bodyAttrs"],yO=()=>{const t=(e,n)=>{const r={},s={};Object.entries(n.props).forEach(([o,a])=>{o.startsWith("on")&&typeof a=="function"?s[o]=a:r[o]=a});let i;return e==="dom"&&n.tag==="script"&&typeof r.src=="string"&&typeof s.onload<"u"&&(i=r.src,delete r.src),{props:r,eventHandlers:s,delayedSrc:i}};return{hooks:{"ssr:render":function(e){e.tags=e.tags.map(n=>(!Ty.includes(n.tag)||!Object.entries(n.props).find(([r,s])=>r.startsWith("on")&&typeof s=="function")||(n.props=t("ssr",n).props),n))},"dom:beforeRenderTag":function(e){if(!Ty.includes(e.tag.tag)||!Object.entries(e.tag.props).find(([i,o])=>i.startsWith("on")&&typeof o=="function"))return;const{props:n,eventHandlers:r,delayedSrc:s}=t("dom",e.tag);Object.keys(r).length&&(e.tag.props=n,e.tag._eventHandlers=r,e.tag._delayedSrc=s)},"dom:renderTag":function(e){const n=e.$el;if(!e.tag._eventHandlers||!n)return;const r=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(e.tag._eventHandlers).forEach(([s,i])=>{const o=`${e.tag._d||e.tag._p}:${s}`,a=s.slice(2).toLowerCase(),l=`data-h-${a}`;if(e.markSideEffect(o,()=>{}),n.hasAttribute(l))return;const c=i;n.setAttribute(l,""),r.addEventListener(a,c),e.entry&&(e.entry._sde[o]=()=>{r.removeEventListener(a,c),n.removeAttribute(l)})}),e.tag._delayedSrc&&n.setAttribute("src",e.tag._delayedSrc)}}}},_O=["templateParams","htmlAttrs","bodyAttrs"],vO=t=>{t=t||{};const e=t.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:n}){e.forEach(s=>{n.props[s]&&(n.key=n.props[s],delete n.props[s])});const r=n.key?`${n.tag}:${n.key}`:a0(n);r&&(n._d=r)},"tags:resolve":function(n){const r={};n.tags.forEach(i=>{const o=i._d||i._p,a=r[o];if(a){let l=i==null?void 0:i.tagDuplicateStrategy;if(!l&&_O.includes(i.tag)&&(l="merge"),l==="merge"){const u=a.props;["class","style"].forEach(h=>{i.props[h]&&u[h]&&(h==="style"&&!u[h].endsWith(";")&&(u[h]+=";"),i.props[h]=`${u[h]} ${i.props[h]}`)}),r[o].props={...u,...i.props};return}else if(i._e===a._e){a._duped=a._duped||[],i._d=`${a._d}:${a._duped.length+1}`,a._duped.push(i);return}const c=Object.keys(i.props).length;if((c===0||c===1&&typeof i.props["data-h-key"]<"u")&&!i.innerHTML&&!i.textContent){delete r[o];return}}r[o]=i});const s=[];Object.values(r).forEach(i=>{const o=i._duped;delete i._duped,s.push(i),o&&s.push(...o)}),n.tags=s}}}};function xh(t,e){const n=(s,i)=>{let o;return i==="pageTitle"||i==="s"?o=e.pageTitle:i.includes(".")?o=i.split(".").reduce((a,l)=>a[l]||"",e):o=e[i],o||""};let r=t.replace(/%(\w+\.+\w+)/g,n).replace(/%(\w+)/g,n).trim();return e.separator&&(r.endsWith(e.separator)&&(r=r.slice(0,-e.separator.length).trim()),r.startsWith(e.separator)&&(r=r.slice(e.separator.length).trim()),r=r.replace(new RegExp(`\\${e.separator}\\s*\\${e.separator}`,"g"),e.separator)),r}function wO(){return{hooks:{"tags:resolve":t=>{var i;const{tags:e}=t,n=(i=e.find(o=>o.tag==="title"))==null?void 0:i.textContent,r=e.findIndex(o=>o.tag==="templateParams"),s=r!==-1?e[r].textContent:{};s.pageTitle=s.pageTitle||n||"",delete e[r];for(const o of e.filter(Boolean))["titleTemplate","title"].includes(o.tag)&&typeof o.textContent=="string"?o.textContent=xh(o.textContent,s):o.tag==="meta"&&typeof o.props.content=="string"?o.props.content=xh(o.props.content,s):o.tag==="script"&&["application/json","application/ld+json"].includes(o.props.type)&&typeof o.innerHTML=="string"&&(o.innerHTML=xh(o.innerHTML,s));t.tags=e.filter(Boolean)}}}}let h0;const EO=t=>h0=t,d0=()=>h0;async function bO(t,e){const n={tag:t,props:{}};return["title","titleTemplate","templateParams"].includes(t)?(n.textContent=e instanceof Promise?await e:e,n):typeof e=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(e)||e.startsWith("/"))?n.props.src=e:(n.innerHTML=e,n.key=o0(e)),n):!1:(n.props=await IO(t,{...e}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(r=>lO.includes(r)).forEach(r=>{(!["innerHTML","textContent"].includes(r)||i0.includes(n.tag))&&(n[r]=n.props[r]),delete n.props[r]}),["innerHTML","textContent"].forEach(r=>{if(n.tag==="script"&&typeof n[r]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[r]=JSON.parse(n[r])}catch{n[r]=""}typeof n[r]=="object"&&(n[r]=JSON.stringify(n[r]))}),n.props.class&&(n.props.class=TO(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(r=>({...n,props:{...n.props,content:r}})):n)}function TO(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function IO(t,e){for(const n of Object.keys(e)){const r=n.startsWith("data-");e[n]instanceof Promise&&(e[n]=await e[n]),String(e[n])==="true"?e[n]=r?"true":"":String(e[n])==="false"&&(r?e[n]="false":delete e[n])}return e}const CO=10;async function SO(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,r])=>typeof r<"u"&&oO.includes(n)).forEach(([n,r])=>{const s=iO(r);e.push(...s.map(i=>bO(n,i)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,r)=>(n._e=t._i,n._p=(t._i<<CO)+r,n))}const AO=()=>[vO(),fO(),wO(),pO(),gO(),yO(),mO()],RO=(t={})=>[uO({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})];function kO(t={}){const e=NO({...t,plugins:[...RO(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&e.resolvedOptions.document&&(e._hash=hO(e.resolvedOptions.document)),EO(e),e}function NO(t={}){let e=[],n={},r=0;const s=QE();t!=null&&t.hooks&&s.addHooks(t.hooks),t.plugins=[...AO(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(a=>a.hooks&&s.addHooks(a.hooks)),t.document=t.document||(u0?document:void 0);const i=()=>s.callHook("entries:updated",o),o={resolvedOptions:t,headEntries(){return e},get hooks(){return s},use(a){a.hooks&&s.addHooks(a.hooks)},push(a,l){const c={_i:r++,input:a,_sde:{}};return l!=null&&l.mode&&(c._m=l==null?void 0:l.mode),l!=null&&l.transform&&(c._t=l==null?void 0:l.transform),e.push(c),i(),{dispose(){e=e.filter(u=>u._i!==c._i?!0:(n={...n,...u._sde||{}},u._sde={},i(),!1))},patch(u){e=e.map(h=>(h._i===c._i&&(c.input=h.input=u,i()),h))}}},async resolveTags(){const a={tags:[],entries:[...e]};await s.callHook("entries:resolve",a);for(const l of a.entries){const c=l._t||(u=>u);l.resolvedInput=c(l.resolvedInput||l.input);for(const u of await SO(l)){const h={tag:u,entry:l,resolvedOptions:o.resolvedOptions};await s.callHook("tag:normalise",h),a.tags.push(h.tag)}}return await s.callHook("tags:resolve",a),a.tags},_popSideEffectQueue(){const a={...n};return n={},a},_elMap:{}};return o.hooks.callHook("init",o),o}function OO(t){return typeof t=="function"?t():H(t)}function Ic(t,e=""){if(t instanceof Promise)return t;const n=OO(t);if(!t||!n)return n;if(Array.isArray(n))return n.map(r=>Ic(r,e));if(typeof n=="object"){let r=!1;const s=Object.fromEntries(Object.entries(n).map(([i,o])=>i==="titleTemplate"||i.startsWith("on")?[i,H(o)]:((typeof o=="function"||Me(o))&&(r=!0),[i,Ic(o,i)])));return r&&Rp.includes(String(e))&&(s._dynamic=!0),s}return n}const PO=Sp.startsWith("3"),DO=typeof window<"u",f0="usehead";function kp(){return Yt()&&tt(f0)||d0()}function xO(t){return{install(n){PO&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(f0,t))}}.install}function MO(t={}){const e=kO({...t,domDelayFn:n=>setTimeout(()=>fn(()=>n()),10),plugins:[LO(),...(t==null?void 0:t.plugins)||[]]});return e.install=xO(e),e}const LO=()=>({hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Ic(e.input)}}});function FO(t,e={}){const n=kp(),r=ke(!1),s=ke({});Zi(()=>{s.value=r.value?{}:Ic(t)});const i=n.push(s.value,e);return Qe(s,a=>{i.patch(a)}),Yt()&&(eo(()=>{i.dispose()}),hE(()=>{r.value=!0}),uE(()=>{r.value=!1})),i}function UO(t,e={}){return kp().push(t,e)}function p0(t,e={}){var r;const n=kp();if(n){const s=DO||!!((r=n.resolvedOptions)!=null&&r.document);return e.mode==="server"&&s||e.mode==="client"&&!s?void 0:s?FO(t,e):UO(t,e)}}function $O(t,e){const n=MO(e||{}),r={unhead:n,install(s){Sp.startsWith("3")&&(s.config.globalProperties.$head=n,s.provide("usehead",n))},use(s){n.use(s)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(s,i){return n.push(s,i)},addEntry(s,i){return n.push(s,i)},addHeadObjs(s,i){return n.push(s,i)},addReactiveEntry(s,i){const o=p0(s,i);return typeof o<"u"?o.dispose:()=>{}},removeHeadObjs(){},updateDOM(s,i){i?l0(n,{document:s}):c0(n,{delayFn:o=>setTimeout(()=>o(),50),document:s})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=r.addHeadObjs,n.updateDOM=r.updateDOM,n.hooks.hook("dom:beforeRender",s=>{for(const i of r.hooks["before:dom"])i()===!1&&(s.shouldRender=!1)}),t&&r.addHeadObjs(t),r}const VO="modulepreload",BO=function(t,e){return t.startsWith(".")?new URL(t,e).href:t},Iy={},de=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=BO(i,r),i in Iy)return;Iy[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":VO,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};function Cy(t,e={}){const n=HO(t,e),r=St(),s=r._payloadCache=r._payloadCache||{};return s[t]||(s[t]=jO(n).then(i=>i||(delete s[t],null))),s[t]}function HO(t,e={}){const n=new URL(t,"http://localhost");if(n.search)throw new Error("Payload URL cannot contain search params: "+t);if(n.host!=="localhost"||Va(n.pathname,!0))throw new Error("Payload URL must not include hostname: "+t);const r=e.hash||(e.fresh?Date.now():"");return vu(JE().app.baseURL,n.pathname,r?`_payload.${r}.js`:"_payload.js")}async function jO(t){const e=await de(()=>import(t),[],import.meta.url).catch(n=>{console.warn("[nuxt] Cannot load payload ",t,n)});return(e==null?void 0:e.default)||null}function qO(){return!!St().payload.prerenderedAt}const WO={firebaseConfig:{apiKey:"AIzaSyBveK6gIB_9MdjUlyi70KOyCo-dMO2yKHY",authDomain:"crickburrowarchives.firebaseapp.com",projectId:"crickburrowarchives",storageBucket:"crickburrowarchives.appspot.com",messagingSenderId:"708349315619",appId:"1:708349315619:web:5a599bfa7961f0bf217f96",measurementId:"G-CLXB8V1MH8"},vuefireOptions:{optionsApiPlugin:!1,auth:!0,config:{apiKey:"AIzaSyBveK6gIB_9MdjUlyi70KOyCo-dMO2yKHY",authDomain:"crickburrowarchives.firebaseapp.com",projectId:"crickburrowarchives",storageBucket:"crickburrowarchives.appspot.com",messagingSenderId:"708349315619",appId:"1:708349315619:web:5a599bfa7961f0bf217f96",measurementId:"G-CLXB8V1MH8"},appCheck:{debug:!1,isTokenAutoRefreshEnabled:!0,provider:"ReCaptchaV3",key:"6LejtlUlAAAAAEvIfVKCit8UQxmBMvnIBPoWEYoa"}}},zO=XN(WO);function Np(){const t=St();return t._appConfig||(t._appConfig=dt(zO)),t._appConfig}const KO=$n(t=>{const e=WN();return t.vueApp.use(e),Ba(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}),Mh={DisLogo:Qt(()=>de(()=>import("./DisLogo.7a9cf9de.js"),["./DisLogo.7a9cf9de.js","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./dimensions.85878954.js","./useRender.711bb119.js","./VImg.fbbd1a36.css"],import.meta.url).then(t=>t.default||t)),CBDropdownSelect:Qt(()=>de(()=>import("./CBDropdownSelect.129af2f8.js").then(t=>t.C),["./CBDropdownSelect.129af2f8.js","./VTextField.6cbfc730.js","./forwardRefs.a44f5a39.js","./index.72f797fd.js","./VInput.6cafeb98.js","./useRender.711bb119.js","./density.a43ed496.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./VIcon.9957792f.css","./transition.c0b5a353.js","./VInput.fa09820c.css","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./rounded.2773415e.js","./VProgressLinear.c71ac71c.css","./forwardRefs.8b25102b.css","./index.26545022.js","./VTextField.c20f84ae.css","./VOverlay.400edcb4.js","./dimensions.85878954.js","./router.4d4a04cb.js","./hydration.80aaf091.js","./VOverlay.4877d058.css","./createSimpleFunctional.e260b764.js","./index.8efa490c.js","./index.9bfde38d.css","./elevation.c0c3c7d4.js","./VAvatar.1cb02f40.js","./VImg.732dd834.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VSelectionControl.a37bcff4.js","./VSelectionControl.74f78248.css","./VChip.b3e2a517.js","./group.2a175b20.js","./VChip.23234a79.css","./CBDropdownSelect.9b087c4e.css"],import.meta.url).then(t=>t.default||t)),CBFileInput:Qt(()=>de(()=>import("./CBFileInput.bbd49928.js"),["./CBFileInput.bbd49928.js","./forwardRefs.a44f5a39.js","./index.72f797fd.js","./VInput.6cafeb98.js","./useRender.711bb119.js","./density.a43ed496.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./VIcon.9957792f.css","./transition.c0b5a353.js","./VInput.fa09820c.css","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./rounded.2773415e.js","./VProgressLinear.c71ac71c.css","./forwardRefs.8b25102b.css","./VChip.b3e2a517.js","./group.2a175b20.js","./router.4d4a04cb.js","./elevation.c0c3c7d4.js","./index.8efa490c.js","./index.9bfde38d.css","./VAvatar.1cb02f40.js","./VImg.732dd834.js","./index.26545022.js","./dimensions.85878954.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VChip.23234a79.css","./CBFileInput.c996b1aa.css"],import.meta.url).then(t=>t.default||t)),CBPasswordField:Qt(()=>de(()=>import("./CBPasswordField.b3bdfdb4.js"),["./CBPasswordField.b3bdfdb4.js","./VTextField.6cbfc730.js","./forwardRefs.a44f5a39.js","./index.72f797fd.js","./VInput.6cafeb98.js","./useRender.711bb119.js","./density.a43ed496.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./VIcon.9957792f.css","./transition.c0b5a353.js","./VInput.fa09820c.css","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./rounded.2773415e.js","./VProgressLinear.c71ac71c.css","./forwardRefs.8b25102b.css","./index.26545022.js","./VTextField.c20f84ae.css"],import.meta.url).then(t=>t.default||t)),CBTextArea:Qt(()=>de(()=>import("./CBTextArea.10efc8fb.js"),["./CBTextArea.10efc8fb.js","./forwardRefs.a44f5a39.js","./index.72f797fd.js","./VInput.6cafeb98.js","./useRender.711bb119.js","./density.a43ed496.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./VIcon.9957792f.css","./transition.c0b5a353.js","./VInput.fa09820c.css","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./rounded.2773415e.js","./VProgressLinear.c71ac71c.css","./forwardRefs.8b25102b.css","./index.26545022.js","./CBTextArea.92937c79.css","./VTextField.c20f84ae.css"],import.meta.url).then(t=>t.default||t)),CBTextField:Qt(()=>de(()=>import("./CBTextField.635aa0b5.js"),["./CBTextField.635aa0b5.js","./VTextField.6cbfc730.js","./forwardRefs.a44f5a39.js","./index.72f797fd.js","./VInput.6cafeb98.js","./useRender.711bb119.js","./density.a43ed496.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./VIcon.9957792f.css","./transition.c0b5a353.js","./VInput.fa09820c.css","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./rounded.2773415e.js","./VProgressLinear.c71ac71c.css","./forwardRefs.8b25102b.css","./index.26545022.js","./VTextField.c20f84ae.css"],import.meta.url).then(t=>t.default||t)),CBToggleSwitch:Qt(()=>de(()=>import("./CBToggleSwitch.d3379471.js"),["./CBToggleSwitch.d3379471.js","./VSelectionControl.a37bcff4.js","./density.a43ed496.js","./useRender.711bb119.js","./index.8efa490c.js","./index.9bfde38d.css","./color.16bf09b2.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./VIcon.9957792f.css","./VInput.6cafeb98.js","./index.72f797fd.js","./transition.c0b5a353.js","./VInput.fa09820c.css","./VSelectionControl.74f78248.css","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./rounded.2773415e.js","./VProgressLinear.c71ac71c.css","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./CBToggleSwitch.c74075da.css"],import.meta.url).then(t=>t.default||t)),ArtifactTest:Qt(()=>de(()=>import("./ArtifactTest.8e48d60a.js"),["./ArtifactTest.8e48d60a.js","./realms.data.f6a12340.js","./useRandomNumber.d50ddb30.js","./useClassifyRealm.d166d478.js","./VRow.afde100a.js","./tag.622ed0d5.js","./VRow.5384e9e0.css","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./dimensions.85878954.js","./useRender.711bb119.js","./VImg.fbbd1a36.css","./VIcon.4c30e4d0.js","./color.16bf09b2.js","./VIcon.9957792f.css"],import.meta.url).then(t=>t.default||t)),ExamPassed:Qt(()=>de(()=>import("./ExamPassed.c3612bf1.js"),["./ExamPassed.c3612bf1.js","./backButton.3ed8edb3.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./useRender.711bb119.js","./VIcon.9957792f.css","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./density.a43ed496.js","./rounded.2773415e.js","./router.4d4a04cb.js","./group.2a175b20.js","./index.8efa490c.js","./index.9bfde38d.css","./dimensions.85878954.js","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./position.6ecf00cf.js","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./layout.e323096b.js","./VContainer.84ccdb61.js","./VRow.afde100a.js","./VRow.5384e9e0.css","./VCard.1acd0fd0.js","./createSimpleFunctional.e260b764.js","./VAvatar.1cb02f40.js","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css"],import.meta.url).then(t=>t.default||t)),ExamStart:Qt(()=>de(()=>import("./ExamStart.cb9e6184.js"),["./ExamStart.cb9e6184.js","./backButton.3ed8edb3.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./useRender.711bb119.js","./VIcon.9957792f.css","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./density.a43ed496.js","./rounded.2773415e.js","./router.4d4a04cb.js","./group.2a175b20.js","./index.8efa490c.js","./index.9bfde38d.css","./dimensions.85878954.js","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./position.6ecf00cf.js","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./VRow.afde100a.js","./VRow.5384e9e0.css","./VCard.1acd0fd0.js","./createSimpleFunctional.e260b764.js","./VAvatar.1cb02f40.js","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css","./VContainer.84ccdb61.js","./ExamStart.ca6fa67d.css"],import.meta.url).then(t=>t.default||t)),IdentificationTest:Qt(()=>de(()=>import("./IdentificationTest.01032a82.js"),["./IdentificationTest.01032a82.js","./useRandomNumber.d50ddb30.js","./useClassifyRealm.d166d478.js","./realms.data.f6a12340.js","./VRow.afde100a.js","./tag.622ed0d5.js","./VRow.5384e9e0.css","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./dimensions.85878954.js","./useRender.711bb119.js","./VImg.fbbd1a36.css","./VContainer.84ccdb61.js"],import.meta.url).then(t=>t.default||t)),KeycodeTest:Qt(()=>de(()=>import("./KeycodeTest.14b42073.js"),["./KeycodeTest.14b42073.js","./realms.data.f6a12340.js","./usePlaySound.dccf20a1.js","./howler.5070fb36.js","./VRow.afde100a.js","./tag.622ed0d5.js","./VRow.5384e9e0.css","./VCard.1acd0fd0.js","./useRender.711bb119.js","./createSimpleFunctional.e260b764.js","./density.a43ed496.js","./router.4d4a04cb.js","./color.16bf09b2.js","./VAvatar.1cb02f40.js","./rounded.2773415e.js","./VIcon.4c30e4d0.js","./VIcon.9957792f.css","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./dimensions.85878954.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./index.8efa490c.js","./index.9bfde38d.css","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./elevation.c0c3c7d4.js","./position.6ecf00cf.js","./VCard.6b2e677e.css","./KeycodeTest.c05e15e0.css"],import.meta.url).then(t=>t.default||t)),SymbolTest:Qt(()=>de(()=>import("./SymbolTest.892f1129.js"),["./SymbolTest.892f1129.js","./realms.data.f6a12340.js","./useRandomNumber.d50ddb30.js","./useClassifyRealm.d166d478.js","./VRow.afde100a.js","./tag.622ed0d5.js","./VRow.5384e9e0.css","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./dimensions.85878954.js","./useRender.711bb119.js","./VImg.fbbd1a36.css","./VIcon.4c30e4d0.js","./color.16bf09b2.js","./VIcon.9957792f.css"],import.meta.url).then(t=>t.default||t))},GO=$n(t=>{for(const e in Mh)t.vueApp.component(e,Mh[e]),t.vueApp.component("Lazy"+e,Mh[e])}),CK={name:"layout",mode:"out-in"},qd={name:"page",mode:"out-in"},YO={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[],style:[],script:[],noscript:[]},QO=!1,XO="__nuxt",JO=$n(t=>{const e=$O();e.push(YO),t.vueApp.use(e);{let n=!0;const r=()=>{n=!1,e.internalHooks.callHook("entries:updated",e.unhead)};e.internalHooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",r),t.hooks.hook("app:mounted",r)}t._useHead=p0});/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ai=typeof window<"u";function ZO(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const xe=Object.assign;function Lh(t,e){const n={};for(const r in e){const s=e[r];n[r]=Mn(s)?s.map(t):t(s)}return n}const Wo=()=>{},Mn=Array.isArray,eP=/\/$/,tP=t=>t.replace(eP,"");function Fh(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=iP(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function nP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Sy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function rP(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Mi(e.matched[r],n.matched[s])&&m0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Mi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function m0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!sP(t[n],e[n]))return!1;return!0}function sP(t,e){return Mn(t)?Ay(t,e):Mn(e)?Ay(e,t):t===e}function Ay(t,e){return Mn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function iP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var da;(function(t){t.pop="pop",t.push="push"})(da||(da={}));var zo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(zo||(zo={}));function oP(t){if(!t)if(ai){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tP(t)}const aP=/^[^#]+#/;function lP(t,e){return t.replace(aP,"#")+e}function cP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Tu=()=>({left:window.pageXOffset,top:window.pageYOffset});function uP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=cP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ry(t,e){return(history.state?history.state.position-e:-1)+t}const Wd=new Map;function hP(t,e){Wd.set(t,e)}function dP(t){const e=Wd.get(t);return Wd.delete(t),e}let fP=()=>location.protocol+"//"+location.host;function g0(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Sy(l,"")}return Sy(n,t)+r+s}function pP(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=g0(t,location),p=n.value,y=e.value;let b=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}b=y?d.position-y.position:0}else r(f);s.forEach(_=>{_(n.value,p,{delta:b,type:da.pop,direction:b?b>0?zo.forward:zo.back:zo.unknown})})};function l(){o=n.value}function c(d){s.push(d);const f=()=>{const p=s.indexOf(d);p>-1&&s.splice(p,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(xe({},d.state,{scroll:Tu()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function ky(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Tu():null}}function mP(t){const{history:e,location:n}=window,r={value:g0(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:fP()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=xe({},e.state,ky(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=xe({},s.value,e.state,{forward:l,scroll:Tu()});i(u.current,u,!0);const h=xe({},ky(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function y0(t){t=oP(t);const e=mP(t),n=pP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=xe({location:"",base:t,go:r,createHref:lP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function gP(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),y0(t)}function yP(t){return typeof t=="string"||t&&typeof t=="object"}function _0(t){return typeof t=="string"||typeof t=="symbol"}const Or={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},v0=Symbol("");var Ny;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ny||(Ny={}));function Li(t,e){return xe(new Error,{type:t,[v0]:!0},e)}function rr(t,e){return t instanceof Error&&v0 in t&&(e==null||!!(t.type&e))}const Oy="[^/]+?",_P={sensitive:!1,strict:!1,start:!0,end:!0},vP=/[.+*?^${}()[\]/\\]/g;function wP(t,e){const n=xe({},_P,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(vP,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:y,optional:b,regexp:_}=d;i.push({name:p,repeatable:y,optional:b});const m=_||Oy;if(m!==Oy){f+=10;try{new RegExp(`(${m})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${p}" (${m}): `+C.message)}}let w=y?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;h||(w=b&&c.length<2?`(?:/${w})`:"/"+w),b&&(w+="?"),s+=w,f+=20,b&&(f+=-8),y&&(f+=-20),m===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",p=i[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:p,repeatable:y,optional:b}=f,_=p in c?c[p]:"";if(Mn(_)&&!y)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const m=Mn(_)?_.join("/"):_;if(!m)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=m}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function EP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function bP(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=EP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Py(r))return 1;if(Py(s))return-1}return s.length-r.length}function Py(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const TP={type:0,value:""},IP=/[a-zA-Z0-9_]/;function CP(t){if(!t)return[[]];if(t==="/")return[[TP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:IP.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function SP(t,e,n){const r=wP(CP(t.path),n),s=xe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function AP(t,e){const n=[],r=new Map;e=My({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const f=!d,p=RP(u);p.aliasOf=d&&d.record;const y=My(e,u),b=[p];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of w)b.push(xe({},p,{components:d?d.record.components:p.components,path:C,aliasOf:d?d.record:p}))}let _,m;for(const w of b){const{path:C}=w;if(h&&C[0]!=="/"){const I=h.record.path,A=I[I.length-1]==="/"?"":"/";w.path=h.record.path+(C&&A+C)}if(_=SP(w,h,y),d?d.alias.push(_):(m=m||_,m!==_&&m.alias.push(_),f&&u.name&&!xy(_)&&o(u.name)),p.children){const I=p.children;for(let A=0;A<I.length;A++)i(I[A],_,d&&d.children[A])}d=d||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return m?()=>{o(m)}:Wo}function o(u){if(_0(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&bP(u,n[h])>=0&&(u.record.path!==n[h].record.path||!w0(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!xy(u)&&r.set(u.record.name,u)}function c(u,h){let d,f={},p,y;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Li(1,{location:u});y=d.record.name,f=xe(Dy(h.params,d.keys.filter(m=>!m.optional).map(m=>m.name)),u.params&&Dy(u.params,d.keys.map(m=>m.name))),p=d.stringify(f)}else if("path"in u)p=u.path,d=n.find(m=>m.re.test(p)),d&&(f=d.parse(p),y=d.record.name);else{if(d=h.name?r.get(h.name):n.find(m=>m.re.test(h.path)),!d)throw Li(1,{location:u,currentLocation:h});y=d.record.name,f=xe({},h.params,u.params),p=d.stringify(f)}const b=[];let _=d;for(;_;)b.unshift(_.record),_=_.parent;return{name:y,path:p,params:f,matched:b,meta:NP(b)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Dy(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function RP(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:kP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function kP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function xy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function NP(t){return t.reduce((e,n)=>xe(e,n.meta),{})}function My(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function w0(t,e){return e.children.some(n=>n===t||w0(t,n))}const E0=/#/g,OP=/&/g,PP=/\//g,DP=/=/g,xP=/\?/g,b0=/\+/g,MP=/%5B/g,LP=/%5D/g,T0=/%5E/g,FP=/%60/g,I0=/%7B/g,UP=/%7C/g,C0=/%7D/g,$P=/%20/g;function Op(t){return encodeURI(""+t).replace(UP,"|").replace(MP,"[").replace(LP,"]")}function VP(t){return Op(t).replace(I0,"{").replace(C0,"}").replace(T0,"^")}function zd(t){return Op(t).replace(b0,"%2B").replace($P,"+").replace(E0,"%23").replace(OP,"%26").replace(FP,"`").replace(I0,"{").replace(C0,"}").replace(T0,"^")}function BP(t){return zd(t).replace(DP,"%3D")}function HP(t){return Op(t).replace(E0,"%23").replace(xP,"%3F")}function jP(t){return t==null?"":HP(t).replace(PP,"%2F")}function Cc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function qP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(b0," "),o=i.indexOf("="),a=Cc(o<0?i:i.slice(0,o)),l=o<0?null:Cc(i.slice(o+1));if(a in e){let c=e[a];Mn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ly(t){let e="";for(let n in t){const r=t[n];if(n=BP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Mn(r)?r.map(i=>i&&zd(i)):[r&&zd(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function WP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Mn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const zP=Symbol(""),Fy=Symbol(""),Pp=Symbol(""),Dp=Symbol(""),Kd=Symbol("");function bo(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Fr(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Li(4,{from:n,to:e})):h instanceof Error?a(h):yP(h)?a(Li(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Uh(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(KP(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Fr(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=ZO(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Fr(d,n,r,i,o)()}))}}return s}function KP(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Uy(t){const e=tt(Pp),n=tt(Dp),r=ae(()=>e.resolve(H(t.to))),s=ae(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Mi.bind(null,u));if(d>-1)return d;const f=$y(l[c-2]);return c>1&&$y(u)===f&&h[h.length-1].path!==f?h.findIndex(Mi.bind(null,l[c-2])):d}),i=ae(()=>s.value>-1&&XP(n.params,r.value.params)),o=ae(()=>s.value>-1&&s.value===n.matched.length-1&&m0(n.params,r.value.params));function a(l={}){return QP(l)?e[H(t.replace)?"replace":"push"](H(t.to)).catch(Wo):Promise.resolve()}return{route:r,href:ae(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const GP=js({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Uy,setup(t,{slots:e}){const n=dt(Uy(t)),{options:r}=tt(Pp),s=ae(()=>({[Vy(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Vy(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Dn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),YP=GP;function QP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function XP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Mn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function $y(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vy=(t,e,n)=>t??e??n,JP=js({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=tt(Kd),s=ae(()=>t.route||r.value),i=tt(Fy,0),o=ae(()=>{let c=H(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ae(()=>s.value.matched[o.value]);zn(Fy,ae(()=>o.value+1)),zn(zP,a),zn(Kd,s);const l=ke();return Qe(()=>[l.value,a.value,t.name],([c,u,h],[d,f,p])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Mi(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return By(n.default,{Component:d,route:c});const f=h.props[u],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,b=Dn(d,xe({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return By(n.default,{Component:b,route:c})||b}}});function By(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const S0=JP;function ZP(t){const e=AP(t.routes,t),n=t.parseQuery||qP,r=t.stringifyQuery||Ly,s=t.history,i=bo(),o=bo(),a=bo(),l=gc(Or);let c=Or;ai&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Lh.bind(null,D=>""+D),h=Lh.bind(null,jP),d=Lh.bind(null,Cc);function f(D,G){let k,j;return _0(D)?(k=e.getRecordMatcher(D),j=G):j=D,e.addRoute(j,k)}function p(D){const G=e.getRecordMatcher(D);G&&e.removeRoute(G)}function y(){return e.getRoutes().map(D=>D.record)}function b(D){return!!e.getRecordMatcher(D)}function _(D,G){if(G=xe({},G||l.value),typeof D=="string"){const g=Fh(n,D,G.path),E=e.resolve({path:g.path},G),N=s.createHref(g.fullPath);return xe(g,E,{params:d(E.params),hash:Cc(g.hash),redirectedFrom:void 0,href:N})}let k;if("path"in D)k=xe({},D,{path:Fh(n,D.path,G.path).path});else{const g=xe({},D.params);for(const E in g)g[E]==null&&delete g[E];k=xe({},D,{params:h(D.params)}),G.params=h(G.params)}const j=e.resolve(k,G),ie=D.hash||"";j.params=u(d(j.params));const Le=nP(r,xe({},D,{hash:VP(ie),path:j.path})),ue=s.createHref(Le);return xe({fullPath:Le,hash:ie,query:r===Ly?WP(D.query):D.query||{}},j,{redirectedFrom:void 0,href:ue})}function m(D){return typeof D=="string"?Fh(n,D,l.value.path):xe({},D)}function w(D,G){if(c!==D)return Li(8,{from:G,to:D})}function C(D){return S(D)}function I(D){return C(xe(m(D),{replace:!0}))}function A(D){const G=D.matched[D.matched.length-1];if(G&&G.redirect){const{redirect:k}=G;let j=typeof k=="function"?k(D):k;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=m(j):{path:j},j.params={}),xe({query:D.query,hash:D.hash,params:"path"in j?{}:D.params},j)}}function S(D,G){const k=c=_(D),j=l.value,ie=D.state,Le=D.force,ue=D.replace===!0,g=A(k);if(g)return S(xe(m(g),{state:typeof g=="object"?xe({},ie,g.state):ie,force:Le,replace:ue}),G||k);const E=k;E.redirectedFrom=G;let N;return!Le&&rP(r,j,k)&&(N=Li(16,{to:E,from:j}),Rt(j,j,!0,!1)),(N?Promise.resolve(N):O(E,j)).catch(P=>rr(P)?rr(P,2)?P:at(P):Ee(P,E,j)).then(P=>{if(P){if(rr(P,2))return S(xe({replace:ue},m(P.to),{state:typeof P.to=="object"?xe({},ie,P.to.state):ie,force:Le}),G||E)}else P=Z(E,j,!0,ue,ie);return U(E,j,P),P})}function T(D,G){const k=w(D,G);return k?Promise.reject(k):Promise.resolve()}function O(D,G){let k;const[j,ie,Le]=eD(D,G);k=Uh(j.reverse(),"beforeRouteLeave",D,G);for(const g of j)g.leaveGuards.forEach(E=>{k.push(Fr(E,D,G))});const ue=T.bind(null,D,G);return k.push(ue),ei(k).then(()=>{k=[];for(const g of i.list())k.push(Fr(g,D,G));return k.push(ue),ei(k)}).then(()=>{k=Uh(ie,"beforeRouteUpdate",D,G);for(const g of ie)g.updateGuards.forEach(E=>{k.push(Fr(E,D,G))});return k.push(ue),ei(k)}).then(()=>{k=[];for(const g of D.matched)if(g.beforeEnter&&!G.matched.includes(g))if(Mn(g.beforeEnter))for(const E of g.beforeEnter)k.push(Fr(E,D,G));else k.push(Fr(g.beforeEnter,D,G));return k.push(ue),ei(k)}).then(()=>(D.matched.forEach(g=>g.enterCallbacks={}),k=Uh(Le,"beforeRouteEnter",D,G),k.push(ue),ei(k))).then(()=>{k=[];for(const g of o.list())k.push(Fr(g,D,G));return k.push(ue),ei(k)}).catch(g=>rr(g,8)?g:Promise.reject(g))}function U(D,G,k){for(const j of a.list())j(D,G,k)}function Z(D,G,k,j,ie){const Le=w(D,G);if(Le)return Le;const ue=G===Or,g=ai?history.state:{};k&&(j||ue?s.replace(D.fullPath,xe({scroll:ue&&g&&g.scroll},ie)):s.push(D.fullPath,ie)),l.value=D,Rt(D,G,k,ue),at()}let q;function se(){q||(q=s.listen((D,G,k)=>{if(!nr.listening)return;const j=_(D),ie=A(j);if(ie){S(xe(ie,{replace:!0}),j).catch(Wo);return}c=j;const Le=l.value;ai&&hP(Ry(Le.fullPath,k.delta),Tu()),O(j,Le).catch(ue=>rr(ue,12)?ue:rr(ue,2)?(S(ue.to,j).then(g=>{rr(g,20)&&!k.delta&&k.type===da.pop&&s.go(-1,!1)}).catch(Wo),Promise.reject()):(k.delta&&s.go(-k.delta,!1),Ee(ue,j,Le))).then(ue=>{ue=ue||Z(j,Le,!1),ue&&(k.delta&&!rr(ue,8)?s.go(-k.delta,!1):k.type===da.pop&&rr(ue,20)&&s.go(-1,!1)),U(j,Le,ue)}).catch(Wo)}))}let z=bo(),_e=bo(),le;function Ee(D,G,k){at(D);const j=_e.list();return j.length?j.forEach(ie=>ie(D,G,k)):console.error(D),Promise.reject(D)}function ve(){return le&&l.value!==Or?Promise.resolve():new Promise((D,G)=>{z.add([D,G])})}function at(D){return le||(le=!D,se(),z.list().forEach(([G,k])=>D?k(D):G()),z.reset()),D}function Rt(D,G,k,j){const{scrollBehavior:ie}=t;if(!ai||!ie)return Promise.resolve();const Le=!k&&dP(Ry(D.fullPath,0))||(j||!k)&&history.state&&history.state.scroll||null;return fn().then(()=>ie(D,G,Le)).then(ue=>ue&&uP(ue)).catch(ue=>Ee(ue,D,G))}const lt=D=>s.go(D);let Ze;const wn=new Set,nr={currentRoute:l,listening:!0,addRoute:f,removeRoute:p,hasRoute:b,getRoutes:y,resolve:_,options:t,push:C,replace:I,go:lt,back:()=>lt(-1),forward:()=>lt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:_e.add,isReady:ve,install(D){const G=this;D.component("RouterLink",YP),D.component("RouterView",S0),D.config.globalProperties.$router=G,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>H(l)}),ai&&!Ze&&l.value===Or&&(Ze=!0,C(s.location).catch(ie=>{}));const k={};for(const ie in Or)k[ie]=ae(()=>l.value[ie]);D.provide(Pp,G),D.provide(Dp,dt(k)),D.provide(Kd,l);const j=D.unmount;wn.add(D),D.unmount=function(){wn.delete(D),wn.size<1&&(c=Or,q&&q(),q=null,l.value=Or,Ze=!1,le=!1),j()}}};return nr}function ei(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function eD(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Mi(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Mi(c,l))||s.push(l))}return[n,r,s]}function SK(){return tt(Dp)}const sn={middleware:["auth"]},on={middleware:["auth"]},an={middleware:["auth"]},ln={middleware:["auth"]},cn={middleware:["auth"]},un={middleware:["auth"]},hn={middleware:["auth"]},Hy=[{name:"apply",path:"/apply",children:[],meta:{},alias:[],redirect:void 0,component:()=>de(()=>import("./apply.2e8802c9.js"),["./apply.2e8802c9.js","./CBTextField.635aa0b5.js","./VTextField.6cbfc730.js","./forwardRefs.a44f5a39.js","./index.72f797fd.js","./VInput.6cafeb98.js","./useRender.711bb119.js","./density.a43ed496.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./VIcon.9957792f.css","./transition.c0b5a353.js","./VInput.fa09820c.css","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./rounded.2773415e.js","./VProgressLinear.c71ac71c.css","./forwardRefs.8b25102b.css","./index.26545022.js","./VTextField.c20f84ae.css","./CBPasswordField.b3bdfdb4.js","./backButton.3ed8edb3.js","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./router.4d4a04cb.js","./group.2a175b20.js","./index.8efa490c.js","./index.9bfde38d.css","./dimensions.85878954.js","./position.6ecf00cf.js","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./layout.e323096b.js","./index.esm.f2d381c7.js","./VRow.afde100a.js","./VRow.5384e9e0.css","./VCard.1acd0fd0.js","./createSimpleFunctional.e260b764.js","./VAvatar.1cb02f40.js","./VImg.732dd834.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css","./VContainer.84ccdb61.js"],import.meta.url).then(t=>t.default||t)},{name:"artifacts",path:"/artifacts",children:[],meta:{},alias:[],redirect:void 0,component:()=>de(()=>import("./artifacts.c33e58a5.js"),["./artifacts.c33e58a5.js","./BreadcrumbHeading.ffed8996.js","./layout.e323096b.js","./realms.data.f6a12340.js","./VRow.afde100a.js","./tag.622ed0d5.js","./VRow.5384e9e0.css","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./dimensions.85878954.js","./useRender.711bb119.js","./VImg.fbbd1a36.css","./VIcon.4c30e4d0.js","./color.16bf09b2.js","./VIcon.9957792f.css","./VCard.1acd0fd0.js","./createSimpleFunctional.e260b764.js","./density.a43ed496.js","./router.4d4a04cb.js","./VAvatar.1cb02f40.js","./rounded.2773415e.js","./VAvatar.b72a6b57.css","./index.8efa490c.js","./index.9bfde38d.css","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./elevation.c0c3c7d4.js","./position.6ecf00cf.js","./VCard.6b2e677e.css","./artifacts.ee01dabb.css"],import.meta.url).then(t=>t.default||t)},{name:"brainwash",path:"/brainwash",children:[],meta:{},alias:[],redirect:void 0,component:()=>de(()=>import("./brainwash.87020824.js"),["./brainwash.87020824.js","./layout.e323096b.js","./nuxt-link.c96c7741.js","./useSiteStore.bfcdeead.js","./useRandomNumber.d50ddb30.js","./VRow.afde100a.js","./tag.622ed0d5.js","./VRow.5384e9e0.css","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./dimensions.85878954.js","./useRender.711bb119.js","./VImg.fbbd1a36.css"],import.meta.url).then(t=>t.default||t)},{name:"briefing",path:"/briefing",children:[],meta:{},alias:[],redirect:void 0,component:()=>de(()=>import("./briefing.65a10976.js"),["./briefing.65a10976.js","./BreadcrumbHeading.ffed8996.js","./layout.e323096b.js","./VCard.1acd0fd0.js","./useRender.711bb119.js","./createSimpleFunctional.e260b764.js","./density.a43ed496.js","./router.4d4a04cb.js","./color.16bf09b2.js","./VAvatar.1cb02f40.js","./rounded.2773415e.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./VIcon.9957792f.css","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./dimensions.85878954.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./index.8efa490c.js","./index.9bfde38d.css","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./elevation.c0c3c7d4.js","./position.6ecf00cf.js","./VCard.6b2e677e.css","./VRow.afde100a.js","./VRow.5384e9e0.css","./briefing.20543051.css"],import.meta.url).then(t=>t.default||t)},{name:(sn==null?void 0:sn.name)??"credits",path:(sn==null?void 0:sn.path)??"/credits",children:[],meta:sn||{},alias:(sn==null?void 0:sn.alias)||[],redirect:(sn==null?void 0:sn.redirect)||void 0,component:()=>de(()=>import("./credits.3d3c9130.js"),["./credits.3d3c9130.js","./DisLogo.7a9cf9de.js","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./dimensions.85878954.js","./useRender.711bb119.js","./VImg.fbbd1a36.css","./externalSiteButton.80b74a40.js","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./density.a43ed496.js","./rounded.2773415e.js","./tag.622ed0d5.js","./router.4d4a04cb.js","./color.16bf09b2.js","./group.2a175b20.js","./index.8efa490c.js","./index.9bfde38d.css","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./position.6ecf00cf.js","./VIcon.4c30e4d0.js","./VIcon.9957792f.css","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./layout.e323096b.js","./useRealmNames.4e993d8d.js","./useSiteStore.bfcdeead.js","./VRow.afde100a.js","./VRow.5384e9e0.css","./VContainer.84ccdb61.js","./VCard.1acd0fd0.js","./createSimpleFunctional.e260b764.js","./VAvatar.1cb02f40.js","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css"],import.meta.url).then(t=>t.default||t)},{name:"debriefing",path:"/debriefing",children:[],meta:{},alias:[],redirect:void 0,component:()=>de(()=>import("./debriefing.e5bb3214.js"),["./debriefing.e5bb3214.js","./backButton.3ed8edb3.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./useRender.711bb119.js","./VIcon.9957792f.css","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./density.a43ed496.js","./rounded.2773415e.js","./router.4d4a04cb.js","./group.2a175b20.js","./index.8efa490c.js","./index.9bfde38d.css","./dimensions.85878954.js","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./position.6ecf00cf.js","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./layout.e323096b.js","./useSiteStore.bfcdeead.js","./VRow.afde100a.js","./VRow.5384e9e0.css","./VCard.1acd0fd0.js","./createSimpleFunctional.e260b764.js","./VAvatar.1cb02f40.js","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css","./VContainer.84ccdb61.js"],import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",children:[],meta:{},alias:[],redirect:void 0,component:()=>de(()=>import("./index.0346a160.js"),["./index.0346a160.js","./layout.e323096b.js","./nuxt-link.c96c7741.js","./VRow.afde100a.js","./tag.622ed0d5.js","./VRow.5384e9e0.css","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./dimensions.85878954.js","./useRender.711bb119.js","./VImg.fbbd1a36.css","./index.78330503.css"],import.meta.url).then(t=>t.default||t)},{name:"insights-realm-artifacts",path:"/insights/:realm/artifacts",children:[],meta:{},alias:[],redirect:void 0,component:()=>de(()=>import("./artifacts.37826396.js"),["./artifacts.37826396.js","./BreadcrumbHeading.ffed8996.js","./backButton.3ed8edb3.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./useRender.711bb119.js","./VIcon.9957792f.css","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./density.a43ed496.js","./rounded.2773415e.js","./router.4d4a04cb.js","./group.2a175b20.js","./index.8efa490c.js","./index.9bfde38d.css","./dimensions.85878954.js","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./position.6ecf00cf.js","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./layout.e323096b.js","./useRealmData.6d2e9fe7.js","./useSiteStore.bfcdeead.js","./VRow.afde100a.js","./VRow.5384e9e0.css","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./VImg.fbbd1a36.css","./VCard.1acd0fd0.js","./createSimpleFunctional.e260b764.js","./VAvatar.1cb02f40.js","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css","./artifacts.08920210.css"],import.meta.url).then(t=>t.default||t)},{name:"insights-realm",path:"/insights/:realm",children:[],meta:{},alias:[],redirect:void 0,component:()=>de(()=>import("./index.6b62f42e.js"),["./index.6b62f42e.js","./BreadcrumbHeading.ffed8996.js","./backButton.3ed8edb3.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./useRender.711bb119.js","./VIcon.9957792f.css","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./density.a43ed496.js","./rounded.2773415e.js","./router.4d4a04cb.js","./group.2a175b20.js","./index.8efa490c.js","./index.9bfde38d.css","./dimensions.85878954.js","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./position.6ecf00cf.js","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./layout.e323096b.js","./useRealmData.6d2e9fe7.js","./useSiteStore.bfcdeead.js","./VRow.afde100a.js","./VRow.5384e9e0.css","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./VImg.fbbd1a36.css","./index.0e57259b.css"],import.meta.url).then(t=>t.default||t)},{name:"intro",path:"/intro",children:[],meta:{},alias:[],redirect:void 0,component:()=>de(()=>import("./intro.946acf39.js"),["./intro.946acf39.js","./BreadcrumbHeading.ffed8996.js","./layout.e323096b.js","./useSiteStore.bfcdeead.js","./VCard.1acd0fd0.js","./useRender.711bb119.js","./createSimpleFunctional.e260b764.js","./density.a43ed496.js","./router.4d4a04cb.js","./color.16bf09b2.js","./VAvatar.1cb02f40.js","./rounded.2773415e.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./VIcon.9957792f.css","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./dimensions.85878954.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./index.8efa490c.js","./index.9bfde38d.css","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./elevation.c0c3c7d4.js","./position.6ecf00cf.js","./VCard.6b2e677e.css","./VRow.afde100a.js","./VRow.5384e9e0.css","./intro.29734123.css"],import.meta.url).then(t=>t.default||t)},{name:"login",path:"/login",children:[],meta:{},alias:[],redirect:void 0,component:()=>de(()=>import("./login.47e58d74.js"),["./login.47e58d74.js","./CBTextField.635aa0b5.js","./VTextField.6cbfc730.js","./forwardRefs.a44f5a39.js","./index.72f797fd.js","./VInput.6cafeb98.js","./useRender.711bb119.js","./density.a43ed496.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./VIcon.9957792f.css","./transition.c0b5a353.js","./VInput.fa09820c.css","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./rounded.2773415e.js","./VProgressLinear.c71ac71c.css","./forwardRefs.8b25102b.css","./index.26545022.js","./VTextField.c20f84ae.css","./CBPasswordField.b3bdfdb4.js","./backButton.3ed8edb3.js","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./router.4d4a04cb.js","./group.2a175b20.js","./index.8efa490c.js","./index.9bfde38d.css","./dimensions.85878954.js","./position.6ecf00cf.js","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./nuxt-link.c96c7741.js","./layout.e323096b.js","./index.esm.f2d381c7.js","./VRow.afde100a.js","./VRow.5384e9e0.css","./VCard.1acd0fd0.js","./createSimpleFunctional.e260b764.js","./VAvatar.1cb02f40.js","./VImg.732dd834.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css","./VContainer.84ccdb61.js"],import.meta.url).then(t=>t.default||t)},{name:"operations-artifact-submission",path:"/operations/artifact-submission",children:[],meta:{},alias:[],redirect:void 0,component:()=>de(()=>import("./artifact-submission.f8c36be9.js"),["./artifact-submission.f8c36be9.js","./DisLogo.7a9cf9de.js","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./dimensions.85878954.js","./useRender.711bb119.js","./VImg.fbbd1a36.css","./CBDropdownSelect.129af2f8.js","./VTextField.6cbfc730.js","./forwardRefs.a44f5a39.js","./index.72f797fd.js","./VInput.6cafeb98.js","./density.a43ed496.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./VIcon.9957792f.css","./VInput.fa09820c.css","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./rounded.2773415e.js","./VProgressLinear.c71ac71c.css","./forwardRefs.8b25102b.css","./VTextField.c20f84ae.css","./VOverlay.400edcb4.js","./router.4d4a04cb.js","./hydration.80aaf091.js","./VOverlay.4877d058.css","./createSimpleFunctional.e260b764.js","./index.8efa490c.js","./index.9bfde38d.css","./elevation.c0c3c7d4.js","./VAvatar.1cb02f40.js","./VAvatar.b72a6b57.css","./VSelectionControl.a37bcff4.js","./VSelectionControl.74f78248.css","./VChip.b3e2a517.js","./group.2a175b20.js","./VChip.23234a79.css","./CBDropdownSelect.9b087c4e.css","./CBFileInput.bbd49928.js","./CBFileInput.c996b1aa.css","./CBTextField.635aa0b5.js","./CBTextArea.10efc8fb.js","./CBTextArea.92937c79.css","./backButton.3ed8edb3.js","./VBtn.b508a718.js","./position.6ecf00cf.js","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./layout.e323096b.js","./composables.db01eee4.js","./index.esm.f2d381c7.js","./useRealmNames.4e993d8d.js","./useSiteStore.bfcdeead.js","./VExpansionPanel.f184d897.js","./VExpansionPanel.8110bec7.css","./VRow.afde100a.js","./VRow.5384e9e0.css","./VCard.1acd0fd0.js","./VCard.6b2e677e.css","./VSnackbar.96a565f4.js","./VSnackbar.6b27371e.css","./VContainer.84ccdb61.js"],import.meta.url).then(t=>t.default||t)},{name:(on==null?void 0:on.name)??"operations-control",path:(on==null?void 0:on.path)??"/operations/control",children:[],meta:on||{},alias:(on==null?void 0:on.alias)||[],redirect:(on==null?void 0:on.redirect)||void 0,component:()=>de(()=>import("./control.283f8370.js"),["./control.283f8370.js","./controlButton.bd019931.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./useRender.711bb119.js","./VIcon.9957792f.css","./VCard.1acd0fd0.js","./createSimpleFunctional.e260b764.js","./density.a43ed496.js","./router.4d4a04cb.js","./VAvatar.1cb02f40.js","./rounded.2773415e.js","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./dimensions.85878954.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./index.8efa490c.js","./index.9bfde38d.css","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./elevation.c0c3c7d4.js","./position.6ecf00cf.js","./VCard.6b2e677e.css","./layout.e323096b.js","./composables.db01eee4.js","./useRandomNumber.d50ddb30.js","./VRow.afde100a.js","./VRow.5384e9e0.css","./VContainer.84ccdb61.js"],import.meta.url).then(t=>t.default||t)},{name:(an==null?void 0:an.name)??"operations-new-realm-proposal",path:(an==null?void 0:an.path)??"/operations/new-realm-proposal",children:[],meta:an||{},alias:(an==null?void 0:an.alias)||[],redirect:(an==null?void 0:an.redirect)||void 0,component:()=>de(()=>import("./new-realm-proposal.9f100ff3.js"),["./new-realm-proposal.9f100ff3.js","./DisLogo.7a9cf9de.js","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./dimensions.85878954.js","./useRender.711bb119.js","./VImg.fbbd1a36.css","./CBTextField.635aa0b5.js","./VTextField.6cbfc730.js","./forwardRefs.a44f5a39.js","./index.72f797fd.js","./VInput.6cafeb98.js","./density.a43ed496.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./VIcon.9957792f.css","./VInput.fa09820c.css","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./rounded.2773415e.js","./VProgressLinear.c71ac71c.css","./forwardRefs.8b25102b.css","./VTextField.c20f84ae.css","./CBTextArea.10efc8fb.js","./CBTextArea.92937c79.css","./CBToggleSwitch.d3379471.js","./VSelectionControl.a37bcff4.js","./index.8efa490c.js","./index.9bfde38d.css","./VSelectionControl.74f78248.css","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./CBToggleSwitch.c74075da.css","./backButton.3ed8edb3.js","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./router.4d4a04cb.js","./group.2a175b20.js","./position.6ecf00cf.js","./VBtn.94b255ef.css","./layout.e323096b.js","./composables.db01eee4.js","./VRow.afde100a.js","./VRow.5384e9e0.css","./VCard.1acd0fd0.js","./createSimpleFunctional.e260b764.js","./VAvatar.1cb02f40.js","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css","./VSnackbar.96a565f4.js","./VOverlay.400edcb4.js","./hydration.80aaf091.js","./VOverlay.4877d058.css","./VSnackbar.6b27371e.css","./VContainer.84ccdb61.js"],import.meta.url).then(t=>t.default||t)},{name:"operations-photo-approval",path:"/operations/photo-approval",children:[],meta:{},alias:[],redirect:void 0,component:()=>de(()=>import("./photo-approval.99f27bfe.js"),["./photo-approval.99f27bfe.js","./backButton.3ed8edb3.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./useRender.711bb119.js","./VIcon.9957792f.css","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./density.a43ed496.js","./rounded.2773415e.js","./router.4d4a04cb.js","./group.2a175b20.js","./index.8efa490c.js","./index.9bfde38d.css","./dimensions.85878954.js","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./position.6ecf00cf.js","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./CBDropdownSelect.129af2f8.js","./VTextField.6cbfc730.js","./forwardRefs.a44f5a39.js","./index.72f797fd.js","./VInput.6cafeb98.js","./transition.c0b5a353.js","./VInput.fa09820c.css","./forwardRefs.8b25102b.css","./index.26545022.js","./VTextField.c20f84ae.css","./VOverlay.400edcb4.js","./hydration.80aaf091.js","./VOverlay.4877d058.css","./createSimpleFunctional.e260b764.js","./VAvatar.1cb02f40.js","./VImg.732dd834.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VSelectionControl.a37bcff4.js","./VSelectionControl.74f78248.css","./VChip.b3e2a517.js","./VChip.23234a79.css","./CBDropdownSelect.9b087c4e.css","./CBTextField.635aa0b5.js","./CBTextArea.10efc8fb.js","./CBTextArea.92937c79.css","./layout.e323096b.js","./composables.db01eee4.js","./index.esm.f2d381c7.js","./useRealmNames.4e993d8d.js","./useSiteStore.bfcdeead.js","./VRow.afde100a.js","./VRow.5384e9e0.css","./VContainer.84ccdb61.js","./VCard.1acd0fd0.js","./VCard.6b2e677e.css","./photo-approval.acdb7907.css"],import.meta.url).then(t=>t.default||t)},{name:"operations-photo-submission",path:"/operations/photo-submission",children:[],meta:{},alias:[],redirect:void 0,component:()=>de(()=>import("./photo-submission.23e94003.js"),["./photo-submission.23e94003.js","./DisLogo.7a9cf9de.js","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./dimensions.85878954.js","./useRender.711bb119.js","./VImg.fbbd1a36.css","./CBToggleSwitch.d3379471.js","./VSelectionControl.a37bcff4.js","./density.a43ed496.js","./index.8efa490c.js","./index.9bfde38d.css","./color.16bf09b2.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./VIcon.9957792f.css","./VInput.6cafeb98.js","./index.72f797fd.js","./VInput.fa09820c.css","./VSelectionControl.74f78248.css","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./rounded.2773415e.js","./VProgressLinear.c71ac71c.css","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./CBToggleSwitch.c74075da.css","./CBDropdownSelect.129af2f8.js","./VTextField.6cbfc730.js","./forwardRefs.a44f5a39.js","./forwardRefs.8b25102b.css","./VTextField.c20f84ae.css","./VOverlay.400edcb4.js","./router.4d4a04cb.js","./hydration.80aaf091.js","./VOverlay.4877d058.css","./createSimpleFunctional.e260b764.js","./elevation.c0c3c7d4.js","./VAvatar.1cb02f40.js","./VAvatar.b72a6b57.css","./VChip.b3e2a517.js","./group.2a175b20.js","./VChip.23234a79.css","./CBDropdownSelect.9b087c4e.css","./CBFileInput.bbd49928.js","./CBFileInput.c996b1aa.css","./CBTextField.635aa0b5.js","./CBTextArea.10efc8fb.js","./CBTextArea.92937c79.css","./backButton.3ed8edb3.js","./VBtn.b508a718.js","./position.6ecf00cf.js","./VBtn.94b255ef.css","./layout.e323096b.js","./composables.db01eee4.js","./index.esm.f2d381c7.js","./useRealmNames.4e993d8d.js","./useSiteStore.bfcdeead.js","./VExpansionPanel.f184d897.js","./VExpansionPanel.8110bec7.css","./VRow.afde100a.js","./VRow.5384e9e0.css","./VCard.1acd0fd0.js","./VCard.6b2e677e.css","./VSnackbar.96a565f4.js","./VSnackbar.6b27371e.css","./VContainer.84ccdb61.js"],import.meta.url).then(t=>t.default||t)},{name:(ln==null?void 0:ln.name)??"operations-realm-management-realm-artifacts",path:(ln==null?void 0:ln.path)??"/operations/realm-management/:realm/artifacts",children:[],meta:ln||{},alias:(ln==null?void 0:ln.alias)||[],redirect:(ln==null?void 0:ln.redirect)||void 0,component:()=>de(()=>import("./artifacts.c4b0c26a.js"),["./artifacts.c4b0c26a.js","./backButton.3ed8edb3.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./useRender.711bb119.js","./VIcon.9957792f.css","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./density.a43ed496.js","./rounded.2773415e.js","./router.4d4a04cb.js","./group.2a175b20.js","./index.8efa490c.js","./index.9bfde38d.css","./dimensions.85878954.js","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./position.6ecf00cf.js","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./CBToggleSwitch.d3379471.js","./VSelectionControl.a37bcff4.js","./VInput.6cafeb98.js","./index.72f797fd.js","./transition.c0b5a353.js","./VInput.fa09820c.css","./VSelectionControl.74f78248.css","./CBToggleSwitch.c74075da.css","./CBTextArea.10efc8fb.js","./forwardRefs.a44f5a39.js","./forwardRefs.8b25102b.css","./index.26545022.js","./CBTextArea.92937c79.css","./VTextField.c20f84ae.css","./layout.e323096b.js","./useSiteStore.bfcdeead.js","./useRealmData.6d2e9fe7.js","./VRow.afde100a.js","./VRow.5384e9e0.css","./VCard.1acd0fd0.js","./createSimpleFunctional.e260b764.js","./VAvatar.1cb02f40.js","./VImg.732dd834.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css","./VChip.b3e2a517.js","./VChip.23234a79.css","./artifacts.43f6f3e4.css"],import.meta.url).then(t=>t.default||t)},{name:(cn==null?void 0:cn.name)??"operations-realm-management-realm",path:(cn==null?void 0:cn.path)??"/operations/realm-management/:realm",children:[],meta:cn||{},alias:(cn==null?void 0:cn.alias)||[],redirect:(cn==null?void 0:cn.redirect)||void 0,component:()=>de(()=>import("./index.230d7fa4.js"),["./index.230d7fa4.js","./CBToggleSwitch.d3379471.js","./VSelectionControl.a37bcff4.js","./density.a43ed496.js","./useRender.711bb119.js","./index.8efa490c.js","./index.9bfde38d.css","./color.16bf09b2.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./VIcon.9957792f.css","./VInput.6cafeb98.js","./index.72f797fd.js","./transition.c0b5a353.js","./VInput.fa09820c.css","./VSelectionControl.74f78248.css","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./rounded.2773415e.js","./VProgressLinear.c71ac71c.css","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./CBToggleSwitch.c74075da.css","./CBTextField.635aa0b5.js","./VTextField.6cbfc730.js","./forwardRefs.a44f5a39.js","./forwardRefs.8b25102b.css","./index.26545022.js","./VTextField.c20f84ae.css","./CBTextArea.10efc8fb.js","./CBTextArea.92937c79.css","./CBFileInput.bbd49928.js","./VChip.b3e2a517.js","./group.2a175b20.js","./router.4d4a04cb.js","./elevation.c0c3c7d4.js","./VAvatar.1cb02f40.js","./VImg.732dd834.js","./dimensions.85878954.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VChip.23234a79.css","./CBFileInput.c996b1aa.css","./backButton.3ed8edb3.js","./VBtn.b508a718.js","./position.6ecf00cf.js","./VBtn.94b255ef.css","./layout.e323096b.js","./useRealmData.6d2e9fe7.js","./useSiteStore.bfcdeead.js","./VRow.afde100a.js","./VRow.5384e9e0.css","./VCard.1acd0fd0.js","./createSimpleFunctional.e260b764.js","./VCard.6b2e677e.css","./VSnackbar.96a565f4.js","./VOverlay.400edcb4.js","./hydration.80aaf091.js","./VOverlay.4877d058.css","./VSnackbar.6b27371e.css","./index.301f7d2d.css"],import.meta.url).then(t=>t.default||t)},{name:(un==null?void 0:un.name)??"operations-realm-management-realm-photographs",path:(un==null?void 0:un.path)??"/operations/realm-management/:realm/photographs",children:[],meta:un||{},alias:(un==null?void 0:un.alias)||[],redirect:(un==null?void 0:un.redirect)||void 0,component:()=>de(()=>import("./photographs.6a2d0c6e.js"),["./photographs.6a2d0c6e.js","./backButton.3ed8edb3.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./useRender.711bb119.js","./VIcon.9957792f.css","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./density.a43ed496.js","./rounded.2773415e.js","./router.4d4a04cb.js","./group.2a175b20.js","./index.8efa490c.js","./index.9bfde38d.css","./dimensions.85878954.js","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./position.6ecf00cf.js","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./CBToggleSwitch.d3379471.js","./VSelectionControl.a37bcff4.js","./VInput.6cafeb98.js","./index.72f797fd.js","./transition.c0b5a353.js","./VInput.fa09820c.css","./VSelectionControl.74f78248.css","./CBToggleSwitch.c74075da.css","./CBTextArea.10efc8fb.js","./forwardRefs.a44f5a39.js","./forwardRefs.8b25102b.css","./index.26545022.js","./CBTextArea.92937c79.css","./VTextField.c20f84ae.css","./layout.e323096b.js","./useSiteStore.bfcdeead.js","./useRealmData.6d2e9fe7.js","./VRow.afde100a.js","./VRow.5384e9e0.css","./VSnackbar.96a565f4.js","./VOverlay.400edcb4.js","./hydration.80aaf091.js","./VOverlay.4877d058.css","./VSnackbar.6b27371e.css","./VContainer.84ccdb61.js","./VCard.1acd0fd0.js","./createSimpleFunctional.e260b764.js","./VAvatar.1cb02f40.js","./VImg.732dd834.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css","./VChip.b3e2a517.js","./VChip.23234a79.css","./photographs.43412393.css"],import.meta.url).then(t=>t.default||t)},{name:(hn==null?void 0:hn.name)??"operations-realm-management",path:(hn==null?void 0:hn.path)??"/operations/realm-management",children:[],meta:hn||{},alias:(hn==null?void 0:hn.alias)||[],redirect:(hn==null?void 0:hn.redirect)||void 0,component:()=>de(()=>import("./index.b2be4798.js"),["./index.b2be4798.js","./backButton.3ed8edb3.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./useRender.711bb119.js","./VIcon.9957792f.css","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./density.a43ed496.js","./rounded.2773415e.js","./router.4d4a04cb.js","./group.2a175b20.js","./index.8efa490c.js","./index.9bfde38d.css","./dimensions.85878954.js","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./position.6ecf00cf.js","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./layout.e323096b.js","./useRealmNames.4e993d8d.js","./useSiteStore.bfcdeead.js","./VRow.afde100a.js","./VRow.5384e9e0.css","./VContainer.84ccdb61.js","./VCard.1acd0fd0.js","./createSimpleFunctional.e260b764.js","./VAvatar.1cb02f40.js","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css"],import.meta.url).then(t=>t.default||t)},{name:"operator-exam",path:"/operator-exam",children:[],meta:{},alias:[],redirect:void 0,component:()=>de(()=>import("./operator-exam.96ca63bf.js"),["./operator-exam.96ca63bf.js","./layout.e323096b.js","./usePlaySound.dccf20a1.js","./howler.5070fb36.js","./useSiteStore.bfcdeead.js","./VRow.afde100a.js","./tag.622ed0d5.js","./VRow.5384e9e0.css","./VProgressLinear.58e0b888.js","./rounded.2773415e.js","./color.16bf09b2.js","./useRender.711bb119.js","./VProgressLinear.c71ac71c.css","./VContainer.84ccdb61.js"],import.meta.url).then(t=>t.default||t)},{name:"realms.data",path:"/realms.data",children:[],meta:{},alias:[],redirect:void 0,component:()=>de(()=>import("./realms.data.f6a12340.js"),[],import.meta.url).then(t=>t.default||t)},{name:"realms",path:"/realms",children:[],meta:{},alias:[],redirect:void 0,component:()=>de(()=>import("./realms.2267a1e1.js"),["./realms.2267a1e1.js","./BreadcrumbHeading.ffed8996.js","./nuxt-link.c96c7741.js","./layout.e323096b.js","./useSiteStore.bfcdeead.js","./useRealmNames.4e993d8d.js","./useRealmData.6d2e9fe7.js","./VRow.afde100a.js","./tag.622ed0d5.js","./VRow.5384e9e0.css","./VChip.b3e2a517.js","./group.2a175b20.js","./router.4d4a04cb.js","./color.16bf09b2.js","./useRender.711bb119.js","./index.72f797fd.js","./elevation.c0c3c7d4.js","./density.a43ed496.js","./rounded.2773415e.js","./VIcon.4c30e4d0.js","./VIcon.9957792f.css","./index.8efa490c.js","./index.9bfde38d.css","./VAvatar.1cb02f40.js","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./dimensions.85878954.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VChip.23234a79.css","./realms.b1e1c53f.css"],import.meta.url).then(t=>t.default||t)}],tD={scrollBehavior(t,e,n){const r=St();let s=n||void 0;if(!s&&e&&t&&t.meta.scrollToTop!==!1&&nD(e,t)&&(s={left:0,top:0}),t.path===e.path){if(e.hash&&!t.hash)return{left:0,top:0};if(t.hash)return{el:t.hash,top:jy(t.hash)}}const i=a=>!!(a.meta.pageTransition??qd),o=i(e)&&i(t)?"page:transition:finish":"page:finish";return new Promise(a=>{r.hooks.hookOnce(o,async()=>{await fn(),t.hash&&(s={el:t.hash,top:jy(t.hash)}),a(s)})})}};function jy(t){try{const e=document.querySelector(t);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}function nD(t,e){const n=t.matched[0]===e.matched[0];return!!(!n||n&&JSON.stringify(t.params)!==JSON.stringify(e.params))}const rD={},sr={...rD,...tD},sD=rO(async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=St(),s=bu();if(([e,n]=Ud(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=s0({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`}),a=s.beforeResolve(c=>{if(a(),c===t){const u=s.afterEach(async()=>{u(),await ar(r,di,[o]),window.history.pushState({},"",t.fullPath)});return!1}})}),iD=[sD],Ko={auth:()=>de(()=>import("./auth.68f3a0ff.js"),["./auth.68f3a0ff.js","./composables.db01eee4.js"],import.meta.url)};function oD(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){const a=s.includes(t.slice(i))?t.slice(i).length:1;let l=s.slice(a);return l[0]!=="/"&&(l="/"+l),py(l,"")}return py(n,t)+r+s}const aD=$n(async t=>{var p,y;let e,n,r=JE().app.baseURL;sr.hashMode&&!r.includes("#")&&(r+="#");const s=((p=sr.history)==null?void 0:p.call(sr,r))??(sr.hashMode?gP(r):y0(r)),i=((y=sr.routes)==null?void 0:y.call(sr,Hy))??Hy,o=oD(r,window.location),a=ZP({...sr,history:s,routes:i});t.vueApp.use(a);const l=gc(a.currentRoute.value);a.afterEach((b,_)=>{l.value=_}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const c=gc(a.resolve(o)),u=()=>{c.value=a.currentRoute.value};t.hook("page:finish",u),a.afterEach((b,_)=>{var m,w,C,I;((w=(m=b.matched[0])==null?void 0:m.components)==null?void 0:w.default)===((I=(C=_.matched[0])==null?void 0:C.components)==null?void 0:I.default)&&u()});const h={};for(const b in c.value)h[b]=ae(()=>c.value[b]);t._route=dt(h),t._middleware=t._middleware||{global:[],named:{}};const d=Eu();try{[e,n]=Ud(()=>a.isReady()),await e,n()}catch(b){[e,n]=Ud(()=>ar(t,di,[b])),await e,n()}const f=tO("_layout");return a.beforeEach(async(b,_)=>{var w;b.meta=dt(b.meta),t.isHydrating&&f.value&&!Ns(b.meta.layout)&&(b.meta.layout=f.value),t._processingMiddleware=!0;const m=new Set([...iD,...t._middleware.global]);for(const C of b.matched){const I=C.meta.middleware;if(I)if(Array.isArray(I))for(const A of I)m.add(A);else m.add(I)}for(const C of m){const I=typeof C=="string"?t._middleware.named[C]||await((w=Ko[C])==null?void 0:w.call(Ko).then(S=>S.default||S)):C;if(!I)throw new Error(`Unknown route middleware: '${C}'.`);const A=await ar(t,I,[b,_]);if(!t.payload.serverRendered&&t.isHydrating&&(A===!1||A instanceof Error)){const S=A||jd({statusCode:404,statusMessage:`Page Not Found: ${o}`});return await ar(t,di,[S]),!1}if(A||A===!1)return A}}),a.afterEach(async b=>{delete t._processingMiddleware,!t.isHydrating&&d.value&&await ar(t,ZN),b.matched.length===0&&await ar(t,di,[jd({statusCode:404,fatal:!1,statusMessage:`Page not found: ${b.fullPath}`})])}),t.hooks.hookOnce("app:created",async()=>{try{await a.replace({...a.resolve(o),name:void 0,force:!0})}catch(b){await ar(t,di,[b])}}),{provide:{router:a}}}),Pl={admin:()=>de(()=>import("./admin.c1f63a81.js"),["./admin.c1f63a81.js","./backButton.3ed8edb3.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./useRender.711bb119.js","./VIcon.9957792f.css","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./density.a43ed496.js","./rounded.2773415e.js","./router.4d4a04cb.js","./group.2a175b20.js","./index.8efa490c.js","./index.9bfde38d.css","./dimensions.85878954.js","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./position.6ecf00cf.js","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./usePageAudio.3483e52f.js","./howler.5070fb36.js","./useSiteStore.bfcdeead.js","./VApp.d1dbb3ce.js","./VApp.a04bdf69.css","./VRow.afde100a.js","./VRow.5384e9e0.css","./VMain.86d91ba5.js","./VMain.e6b12815.css","./VContainer.84ccdb61.js","./admin.5c23588a.css"],import.meta.url).then(t=>t.default||t),default:()=>de(()=>import("./default.825c717b.js"),["./default.825c717b.js","./backButton.3ed8edb3.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./useRender.711bb119.js","./VIcon.9957792f.css","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./density.a43ed496.js","./rounded.2773415e.js","./router.4d4a04cb.js","./group.2a175b20.js","./index.8efa490c.js","./index.9bfde38d.css","./dimensions.85878954.js","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./position.6ecf00cf.js","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./VRow.afde100a.js","./VRow.5384e9e0.css","./externalSiteButton.80b74a40.js","./usePageAudio.3483e52f.js","./howler.5070fb36.js","./useSiteStore.bfcdeead.js","./VApp.d1dbb3ce.js","./VApp.a04bdf69.css","./VMain.86d91ba5.js","./VMain.e6b12815.css","./VFooter.3b445d98.js","./VFooter.9e1940bd.css","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./VImg.fbbd1a36.css","./VContainer.84ccdb61.js","./default.14da95bc.css"],import.meta.url).then(t=>t.default||t),landing:()=>de(()=>import("./landing.beaa70ff.js"),["./landing.beaa70ff.js","./usePageAudio.3483e52f.js","./howler.5070fb36.js","./useSiteStore.bfcdeead.js","./VApp.d1dbb3ce.js","./resizeObserver.f5995fd7.js","./useRender.711bb119.js","./VApp.a04bdf69.css","./hydration.80aaf091.js","./landing.98672a88.css"],import.meta.url).then(t=>t.default||t),"realm-editing":()=>de(()=>import("./realm-editing.5f8429d4.js"),["./realm-editing.5f8429d4.js","./backButton.3ed8edb3.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./useRender.711bb119.js","./VIcon.9957792f.css","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./density.a43ed496.js","./rounded.2773415e.js","./router.4d4a04cb.js","./group.2a175b20.js","./index.8efa490c.js","./index.9bfde38d.css","./dimensions.85878954.js","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./position.6ecf00cf.js","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./controlButton.bd019931.js","./VCard.1acd0fd0.js","./createSimpleFunctional.e260b764.js","./VAvatar.1cb02f40.js","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css","./usePageAudio.3483e52f.js","./howler.5070fb36.js","./useSiteStore.bfcdeead.js","./VApp.d1dbb3ce.js","./VApp.a04bdf69.css","./VRow.afde100a.js","./VRow.5384e9e0.css","./VMain.86d91ba5.js","./VMain.e6b12815.css","./VFooter.3b445d98.js","./VFooter.9e1940bd.css","./VContainer.84ccdb61.js","./realm-editing.41690334.css"],import.meta.url).then(t=>t.default||t),"realm-viewing":()=>de(()=>import("./realm-viewing.ce991cec.js"),["./realm-viewing.ce991cec.js","./externalSiteButton.80b74a40.js","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./density.a43ed496.js","./rounded.2773415e.js","./tag.622ed0d5.js","./router.4d4a04cb.js","./color.16bf09b2.js","./useRender.711bb119.js","./group.2a175b20.js","./index.8efa490c.js","./index.9bfde38d.css","./dimensions.85878954.js","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./position.6ecf00cf.js","./VIcon.4c30e4d0.js","./VIcon.9957792f.css","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./backButton.3ed8edb3.js","./usePageAudio.3483e52f.js","./howler.5070fb36.js","./useSiteStore.bfcdeead.js","./VApp.d1dbb3ce.js","./VApp.a04bdf69.css","./VRow.afde100a.js","./VRow.5384e9e0.css","./VMain.86d91ba5.js","./VMain.e6b12815.css","./VFooter.3b445d98.js","./VFooter.9e1940bd.css","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./VImg.fbbd1a36.css","./VContainer.84ccdb61.js","./realm-viewing.c4ff5df1.css"],import.meta.url).then(t=>t.default||t),signup:()=>de(()=>import("./signup.6f342abd.js"),["./signup.6f342abd.js","./usePageAudio.3483e52f.js","./howler.5070fb36.js","./useSiteStore.bfcdeead.js","./VApp.d1dbb3ce.js","./resizeObserver.f5995fd7.js","./useRender.711bb119.js","./VApp.a04bdf69.css","./VRow.afde100a.js","./tag.622ed0d5.js","./VRow.5384e9e0.css","./VMain.86d91ba5.js","./VMain.e6b12815.css","./VFooter.3b445d98.js","./elevation.c0c3c7d4.js","./rounded.2773415e.js","./color.16bf09b2.js","./VFooter.9e1940bd.css","./VContainer.84ccdb61.js","./signup.beec4619.css"],import.meta.url).then(t=>t.default||t),"sub-admin":()=>de(()=>import("./sub-admin.332d3926.js"),["./sub-admin.332d3926.js","./backButton.3ed8edb3.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./useRender.711bb119.js","./VIcon.9957792f.css","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./density.a43ed496.js","./rounded.2773415e.js","./router.4d4a04cb.js","./group.2a175b20.js","./index.8efa490c.js","./index.9bfde38d.css","./dimensions.85878954.js","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./position.6ecf00cf.js","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./usePageAudio.3483e52f.js","./howler.5070fb36.js","./useSiteStore.bfcdeead.js","./VApp.d1dbb3ce.js","./VApp.a04bdf69.css","./VRow.afde100a.js","./VRow.5384e9e0.css","./VMain.86d91ba5.js","./VMain.e6b12815.css","./VFooter.3b445d98.js","./VFooter.9e1940bd.css","./VContainer.84ccdb61.js","./sub-admin.debc75da.css"],import.meta.url).then(t=>t.default||t)},lD=$n(()=>{const t=St(),e=bu();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Pl[r]=="function"&&await Pl[r]()})}),t.hooks.hook("link:prefetch",n=>{var o,a,l,c;if(Va(n))return;const r=e.resolve(n);if(!r)return;const s=(o=r==null?void 0:r.meta)==null?void 0:o.layout;let i=Array.isArray((a=r==null?void 0:r.meta)==null?void 0:a.middleware)?(l=r==null?void 0:r.meta)==null?void 0:l.middleware:[(c=r==null?void 0:r.meta)==null?void 0:c.middleware];i=i.filter(u=>typeof u=="string");for(const u of i)typeof Ko[u]=="function"&&Ko[u]();s&&typeof Pl[s]=="function"&&Pl[s]()})});/**
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
 */const A0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const K=function(t,e){if(!t)throw to(e)},to=function(t){return new Error("Firebase Database ("+A0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const R0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Iu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(R0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new uD;const d=i<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const k0=function(t){const e=R0(t);return Iu.encodeByteArray(e,!0)},Sc=function(t){return k0(t).replace(/\./g,"")},Ac=function(t){try{return Iu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hD(t){return N0(void 0,t)}function N0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!dD(n)||(t[n]=N0(t[n],e[n]));return t}function dD(t){return t!=="__proto__"}/**
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
 */function O0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fD=()=>O0().__FIREBASE_DEFAULTS__,pD=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ac(t[1]);return e&&JSON.parse(e)},Cu=()=>{try{return fD()||pD()||mD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},P0=t=>{var e,n;return(n=(e=Cu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},D0=t=>{const e=P0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gD=()=>{var t;return(t=Cu())===null||t===void 0?void 0:t.config},x0=t=>{var e;return(e=Cu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ns{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function M0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Sc(JSON.stringify(n)),Sc(JSON.stringify(o)),a].join(".")}/**
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
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function yD(){var t;const e=(t=Cu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function _D(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function L0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vD(){const t=$t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function F0(){return A0.NODE_ADMIN===!0}function Mp(){try{return typeof indexedDB=="object"}catch{return!1}}function wD(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ED="FirebaseError";class tr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ED,Object.setPrototypeOf(this,tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,no.prototype.create)}}class no{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?bD(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new tr(s,a,r)}}function bD(t,e){return t.replace(TD,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const TD=/\{\$([^}]+)}/g;/**
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
 */function fa(t){return JSON.parse(t)}function Tt(t){return JSON.stringify(t)}/**
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
 */const Lp=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=fa(Ac(i[0])||""),n=fa(Ac(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},ID=function(t){const e=Lp(t).claims;return typeof e=="object"&&e.hasOwnProperty("iat")?e.iat:null},CD=function(t){const e=Lp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},SD=function(t){const e=Lp(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ir(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Fi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Gd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rc(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function kc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(qy(i)&&qy(o)){if(!kc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function qy(t){return t!==null&&typeof t=="object"}/**
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
 */function ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Do(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function xo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class AD{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function RD(t,e){const n=new kD(t,e);return n.subscribe.bind(n)}class kD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ND(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$h),s.error===void 0&&(s.error=$h),s.complete===void 0&&(s.complete=$h);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ND(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $h(){}function OD(t,e){return`${t} failed: ${e} argument `}/**
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
 */const PD=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,K(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Su=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const DD=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})};/**
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
 */const xD=1e3,MD=2,LD=4*60*60*1e3,FD=.5;function UD(t,e=xD,n=MD){const r=e*Math.pow(n,t),s=Math.round(FD*r*(Math.random()-.5)*2);return Math.min(LD,r+s)}/**
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
 */function ze(t){return t&&t._delegate?t._delegate:t}class Ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fs="[DEFAULT]";/**
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
 */class $D{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ns;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BD(e))try{this.getOrInitializeService({instanceIdentifier:fs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fs){return this.instances.has(e)}getOptions(e=fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:VD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fs){return this.component?this.component.multipleInstances?e:fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VD(t){return t===fs?void 0:t}function BD(t){return t.instantiationMode==="EAGER"}/**
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
 */class HD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $D(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const jD={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},qD=Re.INFO,WD={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},zD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=WD[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ha{constructor(e){this.name=e,this._logLevel=qD,this._logHandler=zD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const KD=(t,e)=>e.some(n=>t instanceof n);let Wy,zy;function GD(){return Wy||(Wy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YD(){return zy||(zy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const U0=new WeakMap,Yd=new WeakMap,$0=new WeakMap,Vh=new WeakMap,Fp=new WeakMap;function QD(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Gr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&U0.set(n,t)}).catch(()=>{}),Fp.set(e,t),e}function XD(t){if(Yd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Yd.set(t,e)}let Qd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function JD(t){Qd=t(Qd)}function ZD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bh(this),e,...n);return $0.set(r,e.sort?e.sort():[e]),Gr(r)}:YD().includes(t)?function(...e){return t.apply(Bh(this),e),Gr(U0.get(this))}:function(...e){return Gr(t.apply(Bh(this),e))}}function e1(t){return typeof t=="function"?ZD(t):(t instanceof IDBTransaction&&XD(t),KD(t,GD())?new Proxy(t,Qd):t)}function Gr(t){if(t instanceof IDBRequest)return QD(t);if(Vh.has(t))return Vh.get(t);const e=e1(t);return e!==t&&(Vh.set(t,e),Fp.set(e,t)),e}const Bh=t=>Fp.get(t);function t1(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Gr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gr(o.result),l.oldVersion,l.newVersion,Gr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const n1=["get","getKey","getAll","getAllKeys","count"],r1=["put","add","delete","clear"],Hh=new Map;function Ky(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hh.get(e))return Hh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=r1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||n1.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Hh.set(e,i),i}JD(t=>({...t,get:(e,n,r)=>Ky(e,n)||t.get(e,n,r),has:(e,n)=>!!Ky(e,n)||t.has(e,n)}));/**
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
 */class s1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(i1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function i1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xd="@firebase/app",Gy="0.9.7";/**
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
 */const Ps=new Ha("@firebase/app"),o1="@firebase/app-compat",a1="@firebase/analytics-compat",l1="@firebase/analytics",c1="@firebase/app-check-compat",u1="@firebase/app-check",h1="@firebase/auth",d1="@firebase/auth-compat",f1="@firebase/database",p1="@firebase/database-compat",m1="@firebase/functions",g1="@firebase/functions-compat",y1="@firebase/installations",_1="@firebase/installations-compat",v1="@firebase/messaging",w1="@firebase/messaging-compat",E1="@firebase/performance",b1="@firebase/performance-compat",T1="@firebase/remote-config",I1="@firebase/remote-config-compat",C1="@firebase/storage",S1="@firebase/storage-compat",A1="@firebase/firestore",R1="@firebase/firestore-compat",k1="firebase",N1="9.19.1";/**
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
 */const Jd="[DEFAULT]",O1={[Xd]:"fire-core",[o1]:"fire-core-compat",[l1]:"fire-analytics",[a1]:"fire-analytics-compat",[u1]:"fire-app-check",[c1]:"fire-app-check-compat",[h1]:"fire-auth",[d1]:"fire-auth-compat",[f1]:"fire-rtdb",[p1]:"fire-rtdb-compat",[m1]:"fire-fn",[g1]:"fire-fn-compat",[y1]:"fire-iid",[_1]:"fire-iid-compat",[v1]:"fire-fcm",[w1]:"fire-fcm-compat",[E1]:"fire-perf",[b1]:"fire-perf-compat",[T1]:"fire-rc",[I1]:"fire-rc-compat",[C1]:"fire-gcs",[S1]:"fire-gcs-compat",[A1]:"fire-fst",[R1]:"fire-fst-compat","fire-js":"fire-js",[k1]:"fire-js-all"};/**
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
 */const Nc=new Map,Zd=new Map;function P1(t,e){try{t.container.addComponent(e)}catch(n){Ps.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xn(t){const e=t.name;if(Zd.has(e))return Ps.debug(`There were multiple attempts to register component ${e}.`),!1;Zd.set(e,t);for(const n of Nc.values())P1(n,t);return!0}function qs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const D1={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yr=new no("app","Firebase",D1);/**
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
 */class x1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ws=N1;function V0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Yr.create("bad-app-name",{appName:String(s)});if(n||(n=gD()),!n)throw Yr.create("no-options");const i=Nc.get(s);if(i){if(kc(n,i.options)&&kc(r,i.config))return i;throw Yr.create("duplicate-app",{appName:s})}const o=new HD(s);for(const l of Zd.values())o.addComponent(l);const a=new x1(n,r,o);return Nc.set(s,a),a}function ja(t=Jd){const e=Nc.get(t);if(!e&&t===Jd)return V0();if(!e)throw Yr.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let s=(r=O1[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ps.warn(a.join(" "));return}Xn(new Ln(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const M1="firebase-heartbeat-database",L1=1,pa="firebase-heartbeat-store";let jh=null;function B0(){return jh||(jh=t1(M1,L1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pa)}}}).catch(t=>{throw Yr.create("idb-open",{originalErrorMessage:t.message})})),jh}async function F1(t){try{return(await B0()).transaction(pa).objectStore(pa).get(H0(t))}catch(e){if(e instanceof tr)Ps.warn(e.message);else{const n=Yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ps.warn(n.message)}}}async function Yy(t,e){try{const r=(await B0()).transaction(pa,"readwrite");return await r.objectStore(pa).put(e,H0(t)),r.done}catch(n){if(n instanceof tr)Ps.warn(n.message);else{const r=Yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ps.warn(r.message)}}}function H0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const U1=1024,$1=30*24*60*60*1e3;class V1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new H1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=$1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qy(),{heartbeatsToSend:n,unsentEntries:r}=B1(this._heartbeatsCache.heartbeats),s=Sc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Qy(){return new Date().toISOString().substring(0,10)}function B1(t,e=U1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Xy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class H1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mp()?wD().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await F1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xy(t){return Sc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function j1(t){Xn(new Ln("platform-logger",e=>new s1(e),"PRIVATE")),Xn(new Ln("heartbeat",e=>new V1(e),"PRIVATE")),gn(Xd,Gy,t),gn(Xd,Gy,"esm2017"),gn("fire-js","")}j1("");var q1="firebase",W1="9.19.1";/**
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
 */gn(q1,W1,"app");const z1=$n(()=>{const t=Np();return{provide:{firebaseApp:V0(t.firebaseConfig)}}});function Up(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function j0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const K1=j0,q0=new no("auth","Firebase",j0());/**
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
 */const Jy=new Ha("@firebase/auth");function sc(t,...e){Jy.logLevel<=Re.ERROR&&Jy.error(`Auth (${Ws}): ${t}`,...e)}/**
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
 */function Fn(t,...e){throw $p(t,...e)}function Kn(t,...e){return $p(t,...e)}function G1(t,e,n){const r=Object.assign(Object.assign({},K1()),{[e]:n});return new no("auth","Firebase",r).create(e,{appName:t.name})}function $p(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return q0.create(t,...e)}function ce(t,e,...n){if(!t)throw $p(e,...n)}function lr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sc(e),new Error(e)}function yr(t,e){t||lr(e)}/**
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
 */const Zy=new Map;function cr(t){yr(t instanceof Function,"Expected a class definition");let e=Zy.get(t);return e?(yr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zy.set(t,e),e)}/**
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
 */function Y1(t,e){const n=qs(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(kc(i,e??{}))return s;Fn(s,"already-initialized")}return n.initialize({options:e})}function Q1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function ef(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function X1(){return e_()==="http:"||e_()==="https:"}function e_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function J1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(X1()||_D()||"connection"in navigator)?navigator.onLine:!0}function Z1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qa{constructor(e,n){this.shortDelay=e,this.longDelay=n,yr(n>e,"Short delay should be less than long delay!"),this.isMobile=xp()||L0()}get(){return J1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vp(t,e){yr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class W0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ex={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const tx=new qa(3e4,6e4);function Wa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function so(t,e,n,r,s={}){return z0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ro(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),W0.fetch()(K0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function z0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ex),e);try{const s=new nx(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Dl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Dl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Dl(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw G1(t,u,c);Fn(t,u)}}catch(s){if(s instanceof tr)throw s;Fn(t,"network-request-failed",{message:String(s)})}}async function za(t,e,n,r,s={}){const i=await so(t,e,n,r,s);return"mfaPendingCredential"in i&&Fn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function K0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Vp(t.config,s):`${t.config.apiScheme}://${s}`}class nx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kn(this.auth,"network-request-failed")),tx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Kn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function rx(t,e){return so(t,"POST","/v1/accounts:delete",e)}async function sx(t,e){return so(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Go(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ix(t,e=!1){const n=ze(t),r=await n.getIdToken(e),s=Bp(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Go(qh(s.auth_time)),issuedAtTime:Go(qh(s.iat)),expirationTime:Go(qh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qh(t){return Number(t)*1e3}function Bp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sc("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ac(n);return s?JSON.parse(s):(sc("Failed to decode base64 JWT payload"),null)}catch(s){return sc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ox(t){const e=Bp(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ui(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tr&&ax(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ax({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class lx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class G0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Go(this.lastLoginAt),this.creationTime=Go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Oc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ui(t,sx(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hx(i.providerUserInfo):[],a=ux(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new G0(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function cx(t){const e=ze(t);await Oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ux(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function hx(t){return t.map(e=>{var{providerId:n}=e,r=Up(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function dx(t,e){const n=await z0(t,{},async()=>{const r=ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=K0(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",W0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ma{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ox(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ce(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await dx(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ma;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ma,this.toJSON())}_performRefresh(){return lr("not implemented")}}/**
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
 */function Pr(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cs{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Up(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new G0(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ui(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ix(this,e)}reload(){return cx(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Oc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ui(this,rx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,m=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:C,isAnonymous:I,providerData:A,stsTokenManager:S}=n;ce(w&&S,e,"internal-error");const T=ma.fromJSON(this.name,S);ce(typeof w=="string",e,"internal-error"),Pr(h,e.name),Pr(d,e.name),ce(typeof C=="boolean",e,"internal-error"),ce(typeof I=="boolean",e,"internal-error"),Pr(f,e.name),Pr(p,e.name),Pr(y,e.name),Pr(b,e.name),Pr(_,e.name),Pr(m,e.name);const O=new Cs({uid:w,auth:e,email:d,emailVerified:C,displayName:h,isAnonymous:I,photoURL:p,phoneNumber:f,tenantId:y,stsTokenManager:T,createdAt:_,lastLoginAt:m});return A&&Array.isArray(A)&&(O.providerData=A.map(U=>Object.assign({},U))),b&&(O._redirectEventId=b),O}static async _fromIdTokenResponse(e,n,r=!1){const s=new ma;s.updateFromServerResponse(n);const i=new Cs({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Oc(i),i}}/**
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
 */class Y0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Y0.type="NONE";const t_=Y0;/**
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
 */function ic(t,e,n){return`firebase:${t}:${e}:${n}`}class Ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ic(this.userKey,s.apiKey,i),this.fullPersistenceKey=ic("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ti(cr(t_),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||cr(t_);const o=ic(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Cs._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ti(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ti(i,e,r))}}/**
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
 */function n_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(J0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Q0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eb(e))return"Blackberry";if(tb(e))return"Webos";if(Hp(e))return"Safari";if((e.includes("chrome/")||X0(e))&&!e.includes("edge/"))return"Chrome";if(Z0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Q0(t=$t()){return/firefox\//i.test(t)}function Hp(t=$t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function X0(t=$t()){return/crios\//i.test(t)}function J0(t=$t()){return/iemobile/i.test(t)}function Z0(t=$t()){return/android/i.test(t)}function eb(t=$t()){return/blackberry/i.test(t)}function tb(t=$t()){return/webos/i.test(t)}function Au(t=$t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fx(t=$t()){var e;return Au(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function px(){return vD()&&document.documentMode===10}function nb(t=$t()){return Au(t)||Z0(t)||tb(t)||eb(t)||/windows phone/i.test(t)||J0(t)}function mx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function rb(t,e=[]){let n;switch(t){case"Browser":n=n_($t());break;case"Worker":n=`${n_($t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ws}/${r}`}/**
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
 */class gx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class yx{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new r_(this),this.idTokenSubscription=new r_(this),this.beforeStateQueue=new gx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=q0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ti.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Oc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Z1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ze(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cr(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new no("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cr(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Ti.create(this,[cr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ce(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ka(t){return ze(t)}class r_{constructor(e){this.auth=e,this.observer=null,this.addObserver=RD(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function _x(t,e,n){const r=Ka(t);ce(r._canInitEmulator,r,"emulator-config-failed"),ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=sb(e),{host:o,port:a}=vx(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||wx()}function sb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vx(t){const e=sb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:s_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:s_(o)}}}function s_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class jp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lr("not implemented")}_getIdTokenResponse(e){return lr("not implemented")}_linkToIdToken(e,n){return lr("not implemented")}_getReauthenticationResolver(e){return lr("not implemented")}}async function Ex(t,e){return so(t,"POST","/v1/accounts:update",e)}/**
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
 */async function bx(t,e){return za(t,"POST","/v1/accounts:signInWithPassword",Wa(t,e))}/**
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
 */async function Tx(t,e){return za(t,"POST","/v1/accounts:signInWithEmailLink",Wa(t,e))}async function Ix(t,e){return za(t,"POST","/v1/accounts:signInWithEmailLink",Wa(t,e))}/**
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
 */class ga extends jp{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ga(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ga(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return bx(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Tx(e,{email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Ex(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ix(e,{idToken:n,email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ii(t,e){return za(t,"POST","/v1/accounts:signInWithIdp",Wa(t,e))}/**
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
 */const Cx="http://localhost";class Ds extends jp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Up(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ds(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ii(e,n)}buildRequest(){const e={requestUri:Cx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ro(n)}return e}}/**
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
 */function Sx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ax(t){const e=Do(xo(t)).link,n=e?Do(xo(e)).deep_link_id:null,r=Do(xo(t)).deep_link_id;return(r?Do(xo(r)).link:null)||r||n||e||t}class qp{constructor(e){var n,r,s,i,o,a;const l=Do(xo(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=Sx((s=l.mode)!==null&&s!==void 0?s:null);ce(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ax(e);try{return new qp(n)}catch{return null}}}/**
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
 */class io{constructor(){this.providerId=io.PROVIDER_ID}static credential(e,n){return ga._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qp.parseLink(n);return ce(r,"argument-error"),ga._fromEmailAndCode(e,r.code,r.tenantId)}}io.PROVIDER_ID="password";io.EMAIL_PASSWORD_SIGN_IN_METHOD="password";io.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ib{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ga extends ib{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ur extends Ga{constructor(){super("facebook.com")}static credential(e){return Ds._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ur.PROVIDER_ID="facebook.com";/**
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
 */class $r extends Ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ds._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $r.credential(n,r)}catch{return null}}}$r.GOOGLE_SIGN_IN_METHOD="google.com";$r.PROVIDER_ID="google.com";/**
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
 */class Vr extends Ga{constructor(){super("github.com")}static credential(e){return Ds._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";/**
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
 */class Br extends Ga{constructor(){super("twitter.com")}static credential(e,n){return Ds._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Br.credential(n,r)}catch{return null}}}Br.TWITTER_SIGN_IN_METHOD="twitter.com";Br.PROVIDER_ID="twitter.com";/**
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
 */async function Rx(t,e){return za(t,"POST","/v1/accounts:signUp",Wa(t,e))}/**
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
 */class xs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Cs._fromIdTokenResponse(e,r,s),o=i_(r);return new xs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=i_(r);return new xs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function i_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Pc extends tr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Pc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Pc(e,n,r,s)}}function ob(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pc._fromErrorAndOperation(t,i,e,r):i})}async function kx(t,e,n=!1){const r=await Ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xs._forOperation(t,"link",r)}/**
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
 */async function Nx(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ui(t,ob(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=Bp(i.idToken);ce(o,r,"internal-error");const{sub:a}=o;return ce(t.uid===a,r,"user-mismatch"),xs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Fn(r,"user-mismatch"),i}}/**
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
 */async function ab(t,e,n=!1){const r="signIn",s=await ob(t,r,e),i=await xs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ox(t,e){return ab(Ka(t),e)}async function AK(t,e,n){const r=Ka(t),s=await Rx(r,{returnSecureToken:!0,email:e,password:n}),i=await xs._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function RK(t,e,n){return Ox(ze(t),io.credential(e,n))}/**
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
 */async function Px(t,e){return so(t,"POST","/v1/accounts:update",e)}/**
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
 */async function kK(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ze(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ui(r,Px(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function lb(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function Dx(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}const Dc="__sak";/**
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
 */class cb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dc,"1"),this.storage.removeItem(Dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function xx(){const t=$t();return Hp(t)||Au(t)}const Mx=1e3,Lx=10;class ub extends cb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xx()&&mx(),this.fallbackToPolling=nb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);px()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Lx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Mx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ub.type="LOCAL";const Fx=ub;/**
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
 */class hb extends cb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hb.type="SESSION";const db=hb;/**
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
 */function Ux(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ru{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ru(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await Ux(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ru.receivers=[];/**
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
 */function Wp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $x{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Wp("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Gn(){return window}function Vx(t){Gn().location.href=t}/**
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
 */function fb(){return typeof Gn().WorkerGlobalScope<"u"&&typeof Gn().importScripts=="function"}async function Bx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jx(){return fb()?self:null}/**
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
 */const pb="firebaseLocalStorageDb",qx=1,xc="firebaseLocalStorage",mb="fbase_key";class Ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ku(t,e){return t.transaction([xc],e?"readwrite":"readonly").objectStore(xc)}function Wx(){const t=indexedDB.deleteDatabase(pb);return new Ya(t).toPromise()}function tf(){const t=indexedDB.open(pb,qx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xc,{keyPath:mb})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xc)?e(r):(r.close(),await Wx(),e(await tf()))})})}async function o_(t,e,n){const r=ku(t,!0).put({[mb]:e,value:n});return new Ya(r).toPromise()}async function zx(t,e){const n=ku(t,!1).get(e),r=await new Ya(n).toPromise();return r===void 0?null:r.value}function a_(t,e){const n=ku(t,!0).delete(e);return new Ya(n).toPromise()}const Kx=800,Gx=3;class gb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Gx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ru._getInstance(jx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Bx(),!this.activeServiceWorker)return;this.sender=new $x(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tf();return await o_(e,Dc,"1"),await a_(e,Dc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>o_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>a_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ku(s,!1).getAll();return new Ya(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gb.type="LOCAL";const Yx=gb;/**
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
 */function Qx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Xx(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Kn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Qx().appendChild(r)})}function Jx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new qa(3e4,6e4);/**
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
 */function Zx(t,e){return e?cr(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zp extends jp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eM(t){return ab(t.auth,new zp(t),t.bypassAuthState)}function tM(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),Nx(n,new zp(t),t.bypassAuthState)}async function nM(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),kx(n,new zp(t),t.bypassAuthState)}/**
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
 */class yb{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eM;case"linkViaPopup":case"linkViaRedirect":return nM;case"reauthViaPopup":case"reauthViaRedirect":return tM;default:Fn(this.auth,"internal-error")}}resolve(e){yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rM=new qa(2e3,1e4);class fi extends yb{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,fi.currentPopupAction&&fi.currentPopupAction.cancel(),fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){yr(this.filter.length===1,"Popup operations only handle one event");const e=Wp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,rM.get())};e()}}fi.currentPopupAction=null;/**
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
 */const sM="pendingRedirect",oc=new Map;class iM extends yb{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=oc.get(this.auth._key());if(!e){try{const r=await oM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}oc.set(this.auth._key(),e)}return this.bypassAuthState||oc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oM(t,e){const n=cM(e),r=lM(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function aM(t,e){oc.set(t._key(),e)}function lM(t){return cr(t._redirectPersistence)}function cM(t){return ic(sM,t.config.apiKey,t.name)}async function uM(t,e,n=!1){const r=Ka(t),s=Zx(r,e),o=await new iM(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const hM=10*60*1e3;class dM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_b(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hM&&this.cachedEventUids.clear(),this.cachedEventUids.has(l_(e))}saveEventToCache(e){this.cachedEventUids.add(l_(e)),this.lastProcessedEventTime=Date.now()}}function l_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _b({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _b(t);default:return!1}}/**
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
 */async function pM(t,e={}){return so(t,"GET","/v1/projects",e)}/**
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
 */const mM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gM=/^https?/;async function yM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pM(t);for(const n of e)try{if(_M(n))return}catch{}Fn(t,"unauthorized-domain")}function _M(t){const e=ef(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gM.test(n))return!1;if(mM.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const vM=new qa(3e4,6e4);function c_(){const t=Gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wM(t){return new Promise((e,n)=>{var r,s,i;function o(){c_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{c_(),n(Kn(t,"network-request-failed"))},timeout:vM.get()})}if(!((s=(r=Gn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Gn().gapi)===null||i===void 0)&&i.load)o();else{const a=Jx("iframefcb");return Gn()[a]=()=>{gapi.load?o():n(Kn(t,"network-request-failed"))},Xx(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ac=null,e})}let ac=null;function EM(t){return ac=ac||wM(t),ac}/**
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
 */const bM=new qa(5e3,15e3),TM="__/auth/iframe",IM="emulator/auth/iframe",CM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AM(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vp(e,IM):`https://${t.config.authDomain}/${TM}`,r={apiKey:e.apiKey,appName:t.name,v:Ws},s=SM.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ro(r).slice(1)}`}async function RM(t){const e=await EM(t),n=Gn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:AM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CM,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Kn(t,"network-request-failed"),a=Gn().setTimeout(()=>{i(o)},bM.get());function l(){Gn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const kM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NM=500,OM=600,PM="_blank",DM="http://localhost";class u_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xM(t,e,n,r=NM,s=OM){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},kM),{width:r.toString(),height:s.toString(),top:i,left:o}),c=$t().toLowerCase();n&&(a=X0(c)?PM:n),Q0(c)&&(e=e||DM,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(fx(c)&&a!=="_self")return MM(e||"",a),new u_(null);const h=window.open(e||"",a,u);ce(h,t,"popup-blocked");try{h.focus()}catch{}return new u_(h)}function MM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const LM="__/auth/handler",FM="emulator/auth/handler";function h_(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ws,eventId:s};if(e instanceof ib){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof Ga){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${UM(t)}?${ro(a).slice(1)}`}function UM({config:t}){return t.emulator?Vp(t,FM):`https://${t.authDomain}/${LM}`}/**
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
 */const Wh="webStorageSupport";class $M{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=db,this._completeRedirectFn=uM,this._overrideRedirectResult=aM}async _openPopup(e,n,r,s){var i;yr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=h_(e,n,r,ef(),s);return xM(e,o,Wp())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Vx(h_(e,n,r,ef(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(yr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await RM(e),r=new dM(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wh,{type:Wh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Wh];o!==void 0&&n(!!o),Fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nb()||Hp()||Au()}}const VM=$M;var d_="@firebase/auth",f_="0.22.0";/**
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
 */class BM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function HM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function jM(t){Xn(new Ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,l)=>{ce(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),ce(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rb(t)},u=new yx(a,l,c);return Q1(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xn(new Ln("auth-internal",e=>{const n=Ka(e.getProvider("auth").getImmediate());return(r=>new BM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(d_,f_,HM(t)),gn(d_,f_,"esm2017")}/**
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
 */const qM=5*60,WM=x0("authIdTokenMaxAge")||qM;let p_=null;const zM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>WM)return;const s=n==null?void 0:n.token;p_!==s&&(p_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function KM(t=ja()){const e=qs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Y1(t,{popupRedirectResolver:VM,persistence:[Yx,Fx,db]}),r=x0("authTokenSyncURL");if(r){const i=zM(r);Dx(n,i,()=>i(n.currentUser)),lb(n,o=>i(o))}const s=P0("auth");return s&&_x(n,`http://${s}`),n}jM("Browser");/**
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
 */const nf=new Map,vb={activated:!1,tokenObservers:[]},GM={initialized:!1,enabled:!1};function Vt(t){return nf.get(t)||Object.assign({},vb)}function YM(t,e){return nf.set(t,e),nf.get(t)}function Nu(){return GM}/**
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
 */const Kp="https://content-firebaseappcheck.googleapis.com/v1",QM="exchangeRecaptchaV3Token",XM="exchangeRecaptchaEnterpriseToken",JM="exchangeDebugToken",m_={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},ZM=24*60*60*1e3;/**
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
 */class eL{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ns,await tL(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ns,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function tL(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const nL={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Wt=new no("appCheck","AppCheck",nL);/**
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
 */function Mc(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function wb(t){if(!Vt(t).activated)throw Wt.create("use-before-activation",{appName:t.name})}function Gp(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),r=Math.floor((e-n*3600*24)/3600),s=Math.floor((e-n*3600*24-r*3600)/60),i=e-n*3600*24-r*3600-s*60;let o="";return n&&(o+=xl(n)+"d:"),r&&(o+=xl(r)+"h:"),o+=xl(s)+"m:"+xl(i)+"s",o}function xl(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
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
 */async function Yp({url:t,body:e},n){const r={"Content-Type":"application/json"},s=n.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&(r["X-Firebase-Client"]=h)}const i={method:"POST",body:JSON.stringify(e),headers:r};let o;try{o=await fetch(t,i)}catch(h){throw Wt.create("fetch-network-error",{originalErrorMessage:h==null?void 0:h.message})}if(o.status!==200)throw Wt.create("fetch-status-error",{httpStatus:o.status});let a;try{a=await o.json()}catch(h){throw Wt.create("fetch-parse-error",{originalErrorMessage:h==null?void 0:h.message})}const l=a.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw Wt.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const c=Number(l[1])*1e3,u=Date.now();return{token:a.token,expireTimeMillis:u+c,issuedAtTimeMillis:u}}function rL(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${Kp}/projects/${n}/apps/${r}:${QM}?key=${s}`,body:{recaptcha_v3_token:e}}}function sL(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${Kp}/projects/${n}/apps/${r}:${XM}?key=${s}`,body:{recaptcha_enterprise_token:e}}}function iL(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${Kp}/projects/${n}/apps/${r}:${JM}?key=${s}`,body:{debug_token:e}}}/**
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
 */const oL="firebase-app-check-database",aL=1,ya="firebase-app-check-store",Eb="debug-token";let Ml=null;function bb(){return Ml||(Ml=new Promise((t,e)=>{try{const n=indexedDB.open(oL,aL);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Wt.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(ya,{keyPath:"compositeKey"})}}}catch(n){e(Wt.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ml)}function lL(t){return Ib(Cb(t))}function cL(t,e){return Tb(Cb(t),e)}function uL(t){return Tb(Eb,t)}function hL(){return Ib(Eb)}async function Tb(t,e){const r=(await bb()).transaction(ya,"readwrite"),i=r.objectStore(ya).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var c;a(Wt.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}async function Ib(t){const n=(await bb()).transaction(ya,"readonly"),s=n.objectStore(ya).get(t);return new Promise((i,o)=>{s.onsuccess=a=>{const l=a.target.result;i(l?l.value:void 0)},n.onerror=a=>{var l;o(Wt.create("storage-get",{originalErrorMessage:(l=a.target.error)===null||l===void 0?void 0:l.message}))}})}function Cb(t){return`${t.options.appId}-${t.name}`}/**
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
 */const _a=new Ha("@firebase/app-check");/**
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
 */async function dL(t){if(Mp()){let e;try{e=await lL(t)}catch(n){_a.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function zh(t,e){return Mp()?cL(t,e).catch(n=>{_a.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function fL(){let t;try{t=await hL()}catch{}if(t)return t;{const e=DD();return uL(e).catch(n=>_a.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
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
 */function Sb(){return Nu().enabled}async function Ab(){const t=Nu();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function pL(){const t=O0(),e=Nu();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new ns;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(fL())}/**
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
 */const mL={error:"UNKNOWN_ERROR"};function gL(t){return Iu.encodeString(JSON.stringify(t),!1)}async function rf(t,e=!1){const n=t.app;wb(n);const r=Vt(n);let s=r.token,i;if(s&&!pi(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(pi(l)?s=l:await zh(n,void 0))}if(!e&&s&&pi(s))return{token:s.token};let o=!1;if(Sb()){r.exchangeTokenPromise||(r.exchangeTokenPromise=Yp(iL(n,await Ab()),t.heartbeatServiceProvider).finally(()=>{r.exchangeTokenPromise=void 0}),o=!0);const l=await r.exchangeTokenPromise;return await zh(n,l),r.token=l,{token:l.token}}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await Vt(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?_a.warn(l.message):_a.error(l),i=l}let a;return s?i?pi(s)?a={token:s.token,internalError:i}:a=y_(i):(a={token:s.token},r.token=s,await zh(n,s)):a=y_(i),o&&Rb(n,a),a}function Qp(t,e,n,r){const{app:s}=t,i=Vt(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&pi(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),g_(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>g_(t))}function Xp(t,e){const n=Vt(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function g_(t){const{app:e}=t,n=Vt(e);let r=n.tokenRefresher;r||(r=yL(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function yL(t){const{app:e}=t;return new eL(async()=>{const n=Vt(e);let r;if(n.token?r=await rf(t,!0):r=await rf(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=Vt(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},m_.RETRIAL_MIN_WAIT,m_.RETRIAL_MAX_WAIT)}function Rb(t,e){const n=Vt(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function pi(t){return t.expireTimeMillis-Date.now()>0}function y_(t){return{token:gL(mL),error:t}}/**
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
 */class _L{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Vt(this.app);for(const n of e)Xp(this.app,n.next);return Promise.resolve()}}function vL(t,e){return new _L(t,e)}function wL(t){return{getToken:e=>rf(t,e),addTokenListener:e=>Qp(t,"INTERNAL",e),removeTokenListener:e=>Xp(t.app,e)}}const EL="@firebase/app-check",bL="0.6.4";/**
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
 */const TL="https://www.google.com/recaptcha/api.js",IL="https://www.google.com/recaptcha/enterprise.js";function CL(t,e){const n=new ns,r=Vt(t);r.reCAPTCHAState={initialized:n};const s=kb(t),i=Mc(!1);return i?Lc(t,e,i,s,n):RL(()=>{const o=Mc(!1);if(!o)throw new Error("no recaptcha");Lc(t,e,o,s,n)}),n.promise}function SL(t,e){const n=new ns,r=Vt(t);r.reCAPTCHAState={initialized:n};const s=kb(t),i=Mc(!0);return i?Lc(t,e,i,s,n):kL(()=>{const o=Mc(!0);if(!o)throw new Error("no recaptcha");Lc(t,e,o,s,n)}),n.promise}function Lc(t,e,n,r,s){n.ready(()=>{AL(t,e,n,r),s.resolve(n)})}function kb(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function Nb(t){wb(t);const n=await Vt(t).reCAPTCHAState.initialized.promise;return new Promise((r,s)=>{const i=Vt(t).reCAPTCHAState;n.ready(()=>{r(n.execute(i.widgetId,{action:"fire_app_check"}))})})}function AL(t,e,n,r){const s=n.render(r,{sitekey:e,size:"invisible"}),i=Vt(t);i.reCAPTCHAState=Object.assign(Object.assign({},i.reCAPTCHAState),{widgetId:s})}function RL(t){const e=document.createElement("script");e.src=TL,e.onload=t,document.head.appendChild(e)}function kL(t){const e=document.createElement("script");e.src=IL,e.onload=t,document.head.appendChild(e)}/**
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
 */class Jp{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n;Pb(this._throttleData);const r=await Nb(this._app).catch(i=>{throw Wt.create("recaptcha-error")});let s;try{s=await Yp(rL(this._app,r),this._heartbeatServiceProvider)}catch(i){throw!((e=i.code)===null||e===void 0)&&e.includes("fetch-status-error")?(this._throttleData=Ob(Number((n=i.customData)===null||n===void 0?void 0:n.httpStatus),this._throttleData),Wt.create("throttled",{time:Gp(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):i}return this._throttleData=null,s}initialize(e){this._app=e,this._heartbeatServiceProvider=qs(e,"heartbeat"),CL(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Jp?this._siteKey===e._siteKey:!1}}class Zp{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n;Pb(this._throttleData);const r=await Nb(this._app).catch(i=>{throw Wt.create("recaptcha-error")});let s;try{s=await Yp(sL(this._app,r),this._heartbeatServiceProvider)}catch(i){throw!((e=i.code)===null||e===void 0)&&e.includes("fetch-status-error")?(this._throttleData=Ob(Number((n=i.customData)===null||n===void 0?void 0:n.httpStatus),this._throttleData),Wt.create("throttled",{time:Gp(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):i}return this._throttleData=null,s}initialize(e){this._app=e,this._heartbeatServiceProvider=qs(e,"heartbeat"),SL(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Zp?this._siteKey===e._siteKey:!1}}class em{constructor(e){this._customProviderOptions=e}async getToken(){const e=await this._customProviderOptions.getToken(),n=ID(e.token),r=n!==null&&n<Date.now()&&n>0?n*1e3:Date.now();return Object.assign(Object.assign({},e),{issuedAtTimeMillis:r})}initialize(e){this._app=e}isEqual(e){return e instanceof em?this._customProviderOptions.getToken.toString()===e._customProviderOptions.getToken.toString():!1}}function Ob(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+ZM,httpStatus:t};{const n=e?e.backoffCount:0,r=UD(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:t}}}function Pb(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw Wt.create("throttled",{time:Gp(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
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
 */function NL(t=ja(),e){t=ze(t);const n=qs(t,"app-check");if(Nu().initialized||pL(),Sb()&&Ab().then(s=>console.log(`App Check debug token: ${s}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&i.provider.isEqual(e.provider))return s;throw Wt.create("already-initialized",{appName:t.name})}const r=n.initialize({options:e});return OL(t,e.provider,e.isTokenAutoRefreshEnabled),Vt(t).isTokenAutoRefreshEnabled&&Qp(r,"INTERNAL",()=>{}),r}function OL(t,e,n){const r=YM(t,Object.assign({},vb));r.activated=!0,r.provider=e,r.cachedTokenPromise=dL(t).then(s=>(s&&pi(s)&&(r.token=s,Rb(t,{token:s.token})),s)),r.isTokenAutoRefreshEnabled=n===void 0?t.automaticDataCollectionEnabled:n,r.provider.initialize(t)}function PL(t,e,n,r){let s=()=>{},i=()=>{};return e.next!=null?s=e.next.bind(e):s=e,e.error!=null?i=e.error.bind(e):n&&(i=n),Qp(t,"EXTERNAL",s,i),()=>Xp(t.app,s)}const DL="app-check",__="app-check-internal";function xL(){Xn(new Ln(DL,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return vL(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(__).initialize()})),Xn(new Ln(__,t=>{const e=t.getProvider("app-check").getImmediate();return wL(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),gn(EL,bL)}xL();const Db=Symbol("firebaseApp");function xb(t){return Yt()&&tt(Db,null)||ja(t)}const ML=typeof window<"u",Ll=new WeakMap;function Mb(t,e){if(!Ll.has(t)){const n=hu(!0);Ll.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),Ll.delete(t)}}return Ll.get(t)}const LL=new WeakMap,Fl=new WeakMap;function Lb(t){const e=xb(t);if(!Fl.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{Fl.set(e,i),n(i.value)}];Fl.set(e,s)}return Fl.get(e)}function NK(t){const e=Lb(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function FL(t,e){const n=KM(e);lb(n,r=>{const s=Lb();t.value=r,Array.isArray(s)&&s[1](t)})}const UL=Symbol("app-check-token");function $L(t){return(e,n)=>{if(!ML)return;const r=Mb(e,n).run(()=>ke());n.provide(UL,r),t.debug&&(self.FIREBASE_APPCHECK_DEBUG_TOKEN=t.debug);const s=NL(e,t);PL(s,i=>{r.value=i.token}),VL.set(e,s)}}const VL=new WeakMap,v_="@firebase/database",w_="0.14.4";/**
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
 */let Fb="";function BL(t){Fb=t}/**
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
 */class HL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Tt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:fa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class jL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ir(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ub=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new HL(e)}}catch{}return new jL},vs=Ub("localStorage"),sf=Ub("sessionStorage");/**
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
 */const Ci=new Ha("@firebase/database"),qL=function(){let t=1;return function(){return t++}}(),$b=function(t){const e=PD(t),n=new AD;n.update(e);const r=n.digest();return Iu.encodeByteArray(r)},Qa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Qa.apply(null,r):typeof r=="object"?e+=Tt(r):e+=r,e+=" "}return e};let Ss=null,E_=!0;const WL=function(t,e){K(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ci.logLevel=Re.VERBOSE,Ss=Ci.log.bind(Ci),e&&sf.set("logging_enabled",!0)):typeof t=="function"?Ss=t:(Ss=null,sf.remove("logging_enabled"))},Ot=function(...t){if(E_===!0&&(E_=!1,Ss===null&&sf.get("logging_enabled")===!0&&WL(!0)),Ss){const e=Qa.apply(null,t);Ss(e)}},Xa=function(t){return function(...e){Ot(t,...e)}},of=function(...t){const e="FIREBASE INTERNAL ERROR: "+Qa(...t);Ci.error(e)},Ms=function(...t){const e=`FIREBASE FATAL ERROR: ${Qa(...t)}`;throw Ci.error(e),new Error(e)},yn=function(...t){const e="FIREBASE WARNING: "+Qa(...t);Ci.warn(e)},zL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Vb=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},KL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},$i="[MIN_NAME]",Ls="[MAX_NAME]",oo=function(t,e){if(t===e)return 0;if(t===$i||e===Ls)return-1;if(e===$i||t===Ls)return 1;{const n=b_(t),r=b_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},GL=function(t,e){return t===e?0:t<e?-1:1},To=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Tt(e))},tm=function(t){if(typeof t!="object"||t===null)return Tt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Tt(e[r]),n+=":",n+=tm(t[e[r]]);return n+="}",n},Bb=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Sn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Hb=function(t){K(!Vb(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},YL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},QL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},XL=new RegExp("^-?(0*)\\d{1,10}$"),JL=-2147483648,ZL=2147483647,b_=function(t){if(XL.test(t)){const e=Number(t);if(e>=JL&&e<=ZL)return e}return null},Ja=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw yn("Exception was thrown by user callback.",n),e},Math.floor(0))}},eF=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Yo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class tF{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){yn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class nF{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yn(e)}}class af{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}af.OWNER="owner";/**
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
 */const nm="5",jb="v",qb="s",Wb="r",zb="f",Kb=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gb="ls",Yb="p",lf="ac",Qb="websocket",Xb="long_polling";/**
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
 */class rF{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&vs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function sF(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Jb(t,e,n){K(typeof e=="string","typeof type must == string"),K(typeof n=="object","typeof params must == object");let r;if(e===Qb)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Xb)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sF(t)&&(n.ns=t.namespace);const s=[];return Sn(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class iF{constructor(){this.counters_={}}incrementCounter(e,n=1){Ir(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return hD(this.counters_)}}/**
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
 */const Kh={},Gh={};function rm(t){const e=t.toString();return Kh[e]||(Kh[e]=new iF),Kh[e]}function oF(t,e){const n=t.toString();return Gh[n]||(Gh[n]=e()),Gh[n]}/**
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
 */class aF{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Ja(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const T_="start",lF="close",cF="pLPCommand",uF="pRTLPCB",Zb="id",eT="pw",tT="ser",hF="cb",dF="seg",fF="ts",pF="d",mF="dframe",nT=1870,rT=30,gF=nT-rT,yF=25e3,_F=3e4;class mi{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xa(e),this.stats_=rm(n),this.urlFn=l=>(this.appCheckToken&&(l[lf]=this.appCheckToken),Jb(n,Xb,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new aF(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_F)),KL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sm((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===T_)this.id=a,this.password=l;else if(o===lF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[T_]="t",r[tT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[hF]=this.scriptTagHolder.uniqueCallbackIdentifier),r[jb]=nm,this.transportSessionId&&(r[qb]=this.transportSessionId),this.lastSessionId&&(r[Gb]=this.lastSessionId),this.applicationId&&(r[Yb]=this.applicationId),this.appCheckToken&&(r[lf]=this.appCheckToken),typeof location<"u"&&location.hostname&&Kb.test(location.hostname)&&(r[Wb]=zb);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){mi.forceAllow_=!0}static forceDisallow(){mi.forceDisallow_=!0}static isAvailable(){return mi.forceAllow_?!0:!mi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!YL()&&!QL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=k0(n),s=Bb(r,gF);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[mF]="t",r[Zb]=e,r[eT]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Tt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class sm{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=qL(),window[cF+this.uniqueCallbackIdentifier]=e,window[uF+this.uniqueCallbackIdentifier]=n,this.myIFrame=sm.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ot("frame writing exception"),a.stack&&Ot(a.stack),Ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ot("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zb]=this.myID,e[eT]=this.myPW,e[tT]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+rT+r.length<=nT;){const o=this.pendingSegs.shift();r=r+"&"+dF+s+"="+o.seg+"&"+fF+s+"="+o.ts+"&"+pF+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(yF)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const vF=16384,wF=45e3;let Fc=null;typeof MozWebSocket<"u"?Fc=MozWebSocket:typeof WebSocket<"u"&&(Fc=WebSocket);class Nn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xa(this.connId),this.stats_=rm(n),this.connURL=Nn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[jb]=nm,typeof location<"u"&&location.hostname&&Kb.test(location.hostname)&&(o[Wb]=zb),n&&(o[qb]=n),r&&(o[Gb]=r),s&&(o[lf]=s),i&&(o[Yb]=i),Jb(e,Qb,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vs.set("previous_websocket_failure",!0);try{let r;F0(),this.mySock=new Fc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Nn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Fc!==null&&!Nn.forceDisallow_}static previouslyFailed(){return vs.isInMemoryStorage||vs.get("previous_websocket_failure")===!0}markConnectionHealthy(){vs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=fa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Bb(n,vF);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wF))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Nn.responsesRequiredToBeHealthy=2;Nn.healthyTimeout=3e4;/**
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
 */class va{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[mi,Nn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Nn&&Nn.isAvailable();let r=n&&!Nn.previouslyFailed();if(e.webSocketOnly&&(n||yn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Nn];else{const s=this.transports_=[];for(const i of va.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);va.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}va.globalTransportInitialized_=!1;/**
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
 */const EF=6e4,bF=5e3,TF=10*1024,IF=100*1024,Yh="t",I_="d",CF="s",C_="r",SF="e",S_="o",A_="a",R_="n",k_="p",AF="h";class RF{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xa("c:"+this.id+":"),this.transportManager_=new va(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Yo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>IF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>TF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Yh in e){const n=e[Yh];n===A_?this.upgradeIfSecondaryHealthy_():n===C_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===S_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=To("t",e),r=To("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:k_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:A_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:R_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=To("t",e),r=To("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=To(Yh,e);if(I_ in e){const r=e[I_];if(n===AF){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===R_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===CF?this.onConnectionShutdown_(r):n===C_?this.onReset_(r):n===SF?of("Server Error: "+r):n===S_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):of("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),nm!==r&&yn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Yo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(EF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Yo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:k_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class sT{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class iT{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){K(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Uc extends iT{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Uc}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const N_=32,O_=768;class Ke{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Fe(){return new Ke("")}function Ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function rs(t){return t.pieces_.length-t.pieceNum_}function He(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ke(t.pieces_,e)}function oT(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function kF(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function aT(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function lT(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ke(e,0)}function yt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ke)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Ke(n,0)}function be(t){return t.pieceNum_>=t.pieces_.length}function In(t,e){const n=Ce(t),r=Ce(e);if(n===null)return e;if(n===r)return In(He(t),He(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function cT(t,e){if(rs(t)!==rs(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function On(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(rs(t)>rs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class NF{constructor(e,n){this.errorPrefix_=n,this.parts_=aT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Su(this.parts_[r]);uT(this)}}function OF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Su(e),uT(t)}function PF(t){const e=t.parts_.pop();t.byteLength_-=Su(e),t.parts_.length>0&&(t.byteLength_-=1)}function uT(t){if(t.byteLength_>O_)throw new Error(t.errorPrefix_+"has a key path longer than "+O_+" bytes ("+t.byteLength_+").");if(t.parts_.length>N_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+N_+") or object contains a cycle "+ps(t))}function ps(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class im extends iT{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new im}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Io=1e3,DF=60*5*1e3,P_=30*1e3,xF=1.3,MF=3e4,LF="server_kill",D_=3;class dr extends sT{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=dr.nextPersistentConnectionId_++,this.log_=Xa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Io,this.maxReconnectDelay_=DF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!F0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");im.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Uc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Tt(i)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new ns,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;dr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ir(e,"w")){const r=Fi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();yn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||SD(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=P_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=CD(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Tt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):of("Unrecognized action received from server: "+Tt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Io,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Io,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>MF&&(this.reconnectDelay_=Io),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+dr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){K(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ot("getToken() completed but was canceled"):(Ot("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new RF(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{yn(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(LF)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&yn(h),l())}}}interrupt(e){Ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gd(this.interruptReasons_)&&(this.reconnectDelay_=Io,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>tm(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Ke(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=D_&&(this.reconnectDelay_=P_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=D_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Fb.replace(/\./g,"-")]=1,xp()?e["framework.cordova"]=1:L0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Uc.getInstance().currentlyOnline();return Gd(this.interruptReasons_)&&e}}dr.nextPersistentConnectionId_=0;dr.nextConnectionId_=0;/**
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
 */class Se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Se(e,n)}}/**
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
 */class Ou{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Se($i,e),s=new Se($i,n);return this.compare(r,s)!==0}minPost(){return Se.MIN}}/**
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
 */let Ul;class hT extends Ou{static get __EMPTY_NODE(){return Ul}static set __EMPTY_NODE(e){Ul=e}compare(e,n){return oo(e.name,n.name)}isDefinedOn(e){throw to("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Se.MIN}maxPost(){return new Se(Ls,Ul)}makePost(e,n){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new Se(e,Ul)}toString(){return".key"}}const Si=new hT;/**
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
 */class $l{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class gt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??gt.RED,this.left=s??en.EMPTY_NODE,this.right=i??en.EMPTY_NODE}copy(e,n,r,s,i){return new gt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return en.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return en.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}gt.RED=!0;gt.BLACK=!1;class FF{copy(e,n,r,s,i){return this}insert(e,n,r){return new gt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class en{constructor(e,n=en.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new en(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,gt.BLACK,null,null))}remove(e){return new en(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,gt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $l(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new $l(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new $l(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new $l(this.root_,null,this.comparator_,!0,e)}}en.EMPTY_NODE=new FF;/**
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
 */function UF(t,e){return oo(t.name,e.name)}function om(t,e){return oo(t,e)}/**
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
 */let cf;function $F(t){cf=t}const dT=function(t){return typeof t=="number"?"number:"+Hb(t):"string:"+t},fT=function(t){if(t.isLeafNode()){const e=t.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ir(e,".sv"),"Priority must be a string or number.")}else K(t===cf||t.isEmpty(),"priority of unexpected type.");K(t===cf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let x_;class pt{constructor(e,n=pt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),fT(this.priorityNode_)}static set __childrenNodeConstructor(e){x_=e}static get __childrenNodeConstructor(){return x_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return be(e)?this:Ce(e)===".priority"?this.priorityNode_:pt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Ce(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(K(r!==".priority"||rs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,pt.__childrenNodeConstructor.EMPTY_NODE.updateChild(He(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+dT(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Hb(this.value_):e+=this.value_,this.lazyHash_=$b(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pt.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=pt.VALUE_TYPE_ORDER.indexOf(n),i=pt.VALUE_TYPE_ORDER.indexOf(r);return K(s>=0,"Unknown leaf type: "+n),K(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let pT,mT;function VF(t){pT=t}function BF(t){mT=t}class HF extends Ou{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?oo(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Se.MIN}maxPost(){return new Se(Ls,new pt("[PRIORITY-POST]",mT))}makePost(e,n){const r=pT(e);return new Se(n,new pt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Lt=new HF;/**
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
 */const jF=Math.log(2);class qF{constructor(e){const n=i=>parseInt(Math.log(i)/jF,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $c=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new gt(d,h.node,gt.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=s(l,f),y=s(f+1,c);return h=t[f],d=n?n(h):h,new gt(d,h.node,gt.BLACK,p,y)}},i=function(l){let c=null,u=null,h=t.length;const d=function(p,y){const b=h-p,_=h;h-=p;const m=s(b+1,_),w=t[b],C=n?n(w):w;f(new gt(C,w.node,y,null,m))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const y=l.nextBitIsOne(),b=Math.pow(2,l.count-(p+1));y?d(b,gt.BLACK):(d(b,gt.BLACK),d(b,gt.RED))}return u},o=new qF(t.length),a=i(o);return new en(r||e,a)};/**
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
 */let Qh;const ti={};class ur{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return K(ti&&Lt,"ChildrenNode.ts has not been loaded"),Qh=Qh||new ur({".priority":ti},{".priority":Lt}),Qh}get(e){const n=Fi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof en?n:null}hasIndex(e){return Ir(this.indexSet_,e.toString())}addIndex(e,n){K(e!==Si,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Se.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=$c(r,e.getCompare()):a=ti;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new ur(u,c)}addToIndexes(e,n){const r=Rc(this.indexes_,(s,i)=>{const o=Fi(this.indexSet_,i);if(K(o,"Missing index implementation for "+i),s===ti)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Se.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),$c(a,o.getCompare())}else return ti;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Se(e.name,a))),l.insert(e,e.node)}});return new ur(r,this.indexSet_)}removeFromIndexes(e,n){const r=Rc(this.indexes_,s=>{if(s===ti)return s;{const i=n.get(e.name);return i?s.remove(new Se(e.name,i)):s}});return new ur(r,this.indexSet_)}}/**
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
 */let Co;class Pe{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&fT(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Co||(Co=new Pe(new en(om),null,ur.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Co}updatePriority(e){return this.children_.isEmpty()?this:new Pe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Co:n}}getChild(e){const n=Ce(e);return n===null?this:this.getImmediateChild(n).getChild(He(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(K(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Se(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Co:this.priorityNode_;return new Pe(s,o,i)}}updateChild(e,n){const r=Ce(e);if(r===null)return n;{K(Ce(e)!==".priority"||rs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(He(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Lt,(o,a)=>{n[o]=a.val(e),r++,i&&Pe.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+dT(this.getPriority().val())+":"),this.forEachChild(Lt,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":$b(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Se(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Se(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Se.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Se.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Za?-1:0}withIndex(e){if(e===Si||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Pe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Si||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Lt),s=n.getIterator(Lt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Si?null:this.indexMap_.get(e.toString())}}Pe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class WF extends Pe{constructor(){super(new en(om),Pe.EMPTY_NODE,ur.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Pe.EMPTY_NODE}isEmpty(){return!1}}const Za=new WF;Object.defineProperties(Se,{MIN:{value:new Se($i,Pe.EMPTY_NODE)},MAX:{value:new Se(Ls,Za)}});hT.__EMPTY_NODE=Pe.EMPTY_NODE;pt.__childrenNodeConstructor=Pe;$F(Za);BF(Za);/**
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
 */const zF=!0;function Pt(t,e=null){if(t===null)return Pe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pt(n,Pt(e))}if(!(t instanceof Array)&&zF){const n=[];let r=!1;if(Sn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Pt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Se(o,l)))}}),n.length===0)return Pe.EMPTY_NODE;const i=$c(n,UF,o=>o.name,om);if(r){const o=$c(n,Lt.getCompare());return new Pe(i,Pt(e),new ur({".priority":o},{".priority":Lt}))}else return new Pe(i,Pt(e),ur.Default)}else{let n=Pe.EMPTY_NODE;return Sn(t,(r,s)=>{if(Ir(t,r)&&r.substring(0,1)!=="."){const i=Pt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Pt(e))}}VF(Pt);/**
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
 */class KF extends Ou{constructor(e){super(),this.indexPath_=e,K(!be(e)&&Ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?oo(e.name,n.name):i}makePost(e,n){const r=Pt(e),s=Pe.EMPTY_NODE.updateChild(this.indexPath_,r);return new Se(n,s)}maxPost(){const e=Pe.EMPTY_NODE.updateChild(this.indexPath_,Za);return new Se(Ls,e)}toString(){return aT(this.indexPath_,0).join("/")}}/**
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
 */class GF extends Ou{compare(e,n){const r=e.node.compareTo(n.node);return r===0?oo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Se.MIN}maxPost(){return Se.MAX}makePost(e,n){const r=Pt(e);return new Se(n,r)}toString(){return".value"}}const YF=new GF;/**
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
 */function QF(t){return{type:"value",snapshotNode:t}}function XF(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function JF(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function M_(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ZF(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class am{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Lt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$i}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ls}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Lt}copy(){const e=new am;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function L_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Lt?n="$priority":t.index_===YF?n="$value":t.index_===Si?n="$key":(K(t.index_ instanceof KF,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Tt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Tt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Tt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Tt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Tt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function F_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Lt&&(e.i=t.index_.toString()),e}/**
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
 */class Vc extends sT{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Xa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Vc.getListenId_(e,r),a={};this.listens_[o]=a;const l=L_(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),Fi(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const r=Vc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=L_(e._queryParams),r=e._path.toString(),s=new ns;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ro(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=fa(a.responseText)}catch{yn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&yn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class eU{constructor(){this.rootNode_=Pe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Bc(){return{value:null,children:new Map}}function gT(t,e,n){if(be(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Ce(e);t.children.has(r)||t.children.set(r,Bc());const s=t.children.get(r);e=He(e),gT(s,e,n)}}function uf(t,e,n){t.value!==null?n(e,t.value):tU(t,(r,s)=>{const i=new Ke(e.toString()+"/"+r);uf(s,i,n)})}function tU(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class nU{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Sn(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const U_=10*1e3,rU=30*1e3,sU=5*60*1e3;class iU{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new nU(e);const r=U_+(rU-U_)*Math.random();Yo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Sn(e,(s,i)=>{i>0&&Ir(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Yo(this.reportStats_.bind(this),Math.floor(Math.random()*2*sU))}}/**
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
 */var qn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(qn||(qn={}));function yT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _T(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vT(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Hc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=qn.ACK_USER_WRITE,this.source=yT()}operationForChild(e){if(be(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ke(e));return new Hc(Fe(),n,this.revert)}}else return K(Ce(this.path)===e,"operationForChild called for unrelated child."),new Hc(He(this.path),this.affectedTree,this.revert)}}/**
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
 */class Fs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=qn.OVERWRITE}operationForChild(e){return be(this.path)?new Fs(this.source,Fe(),this.snap.getImmediateChild(e)):new Fs(this.source,He(this.path),this.snap)}}/**
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
 */class wa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=qn.MERGE}operationForChild(e){if(be(this.path)){const n=this.children.subtree(new Ke(e));return n.isEmpty()?null:n.value?new Fs(this.source,Fe(),n.value):new wa(this.source,Fe(),n)}else return K(Ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wa(this.source,He(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class lm{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(be(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function oU(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(ZF(o.childName,o.snapshotNode))}),So(t,s,"child_removed",e,r,n),So(t,s,"child_added",e,r,n),So(t,s,"child_moved",i,r,n),So(t,s,"child_changed",e,r,n),So(t,s,"value",e,r,n),s}function So(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>lU(t,a,l)),o.forEach(a=>{const l=aU(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function aU(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function lU(t,e,n){if(e.childName==null||n.childName==null)throw to("Should only compare child_ events.");const r=new Se(e.childName,e.snapshotNode),s=new Se(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function wT(t,e){return{eventCache:t,serverCache:e}}function Qo(t,e,n,r){return wT(new lm(e,n,r),t.serverCache)}function ET(t,e,n,r){return wT(t.eventCache,new lm(e,n,r))}function hf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Us(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Xh;const cU=()=>(Xh||(Xh=new en(GL)),Xh);class Ve{constructor(e,n=cU()){this.value=e,this.children=n}static fromObject(e){let n=new Ve(null);return Sn(e,(r,s)=>{n=n.set(new Ke(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Fe(),value:this.value};if(be(e))return null;{const r=Ce(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(He(e),n);return i!=null?{path:yt(new Ke(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(be(e))return this;{const n=Ce(e),r=this.children.get(n);return r!==null?r.subtree(He(e)):new Ve(null)}}set(e,n){if(be(e))return new Ve(n,this.children);{const r=Ce(e),i=(this.children.get(r)||new Ve(null)).set(He(e),n),o=this.children.insert(r,i);return new Ve(this.value,o)}}remove(e){if(be(e))return this.children.isEmpty()?new Ve(null):new Ve(null,this.children);{const n=Ce(e),r=this.children.get(n);if(r){const s=r.remove(He(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Ve(null):new Ve(this.value,i)}else return this}}get(e){if(be(e))return this.value;{const n=Ce(e),r=this.children.get(n);return r?r.get(He(e)):null}}setTree(e,n){if(be(e))return n;{const r=Ce(e),i=(this.children.get(r)||new Ve(null)).setTree(He(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Ve(this.value,o)}}fold(e){return this.fold_(Fe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(yt(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Fe(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(be(e))return null;{const i=Ce(e),o=this.children.get(i);return o?o.findOnPath_(He(e),yt(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Fe(),n)}foreachOnPath_(e,n,r){if(be(e))return this;{this.value&&r(n,this.value);const s=Ce(e),i=this.children.get(s);return i?i.foreachOnPath_(He(e),yt(n,s),r):new Ve(null)}}foreach(e){this.foreach_(Fe(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(yt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class xn{constructor(e){this.writeTree_=e}static empty(){return new xn(new Ve(null))}}function Xo(t,e,n){if(be(e))return new xn(new Ve(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=In(s,e);return i=i.updateChild(o,n),new xn(t.writeTree_.set(s,i))}else{const s=new Ve(n),i=t.writeTree_.setTree(e,s);return new xn(i)}}}function $_(t,e,n){let r=t;return Sn(n,(s,i)=>{r=Xo(r,yt(e,s),i)}),r}function V_(t,e){if(be(e))return xn.empty();{const n=t.writeTree_.setTree(e,new Ve(null));return new xn(n)}}function df(t,e){return zs(t,e)!=null}function zs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(In(n.path,e)):null}function B_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Lt,(r,s)=>{e.push(new Se(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Se(r,s.value))}),e}function Qr(t,e){if(be(e))return t;{const n=zs(t,e);return n!=null?new xn(new Ve(n)):new xn(t.writeTree_.subtree(e))}}function ff(t){return t.writeTree_.isEmpty()}function Vi(t,e){return bT(Fe(),t.writeTree_,e)}function bT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(K(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=bT(yt(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(yt(t,".priority"),r)),n}}/**
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
 */function TT(t,e){return RT(e,t)}function uU(t,e,n,r,s){K(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Xo(t.visibleWrites,e,n)),t.lastWriteId=r}function hU(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function dU(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);K(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&fU(a,r.path)?s=!1:On(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return pU(t),!0;if(r.snap)t.visibleWrites=V_(t.visibleWrites,r.path);else{const a=r.children;Sn(a,l=>{t.visibleWrites=V_(t.visibleWrites,yt(r.path,l))})}return!0}else return!1}function fU(t,e){if(t.snap)return On(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&On(yt(t.path,n),e))return!0;return!1}function pU(t){t.visibleWrites=IT(t.allWrites,mU,Fe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function mU(t){return t.visible}function IT(t,e,n){let r=xn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)On(n,o)?(a=In(n,o),r=Xo(r,a,i.snap)):On(o,n)&&(a=In(o,n),r=Xo(r,Fe(),i.snap.getChild(a)));else if(i.children){if(On(n,o))a=In(n,o),r=$_(r,a,i.children);else if(On(o,n))if(a=In(o,n),be(a))r=$_(r,Fe(),i.children);else{const l=Fi(i.children,Ce(a));if(l){const c=l.getChild(He(a));r=Xo(r,Fe(),c)}}}else throw to("WriteRecord should have .snap or .children")}}return r}function CT(t,e,n,r,s){if(!r&&!s){const i=zs(t.visibleWrites,e);if(i!=null)return i;{const o=Qr(t.visibleWrites,e);if(ff(o))return n;if(n==null&&!df(o,Fe()))return null;{const a=n||Pe.EMPTY_NODE;return Vi(o,a)}}}else{const i=Qr(t.visibleWrites,e);if(!s&&ff(i))return n;if(!s&&n==null&&!df(i,Fe()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(On(c.path,e)||On(e,c.path))},a=IT(t.allWrites,o,e),l=n||Pe.EMPTY_NODE;return Vi(a,l)}}}function gU(t,e,n){let r=Pe.EMPTY_NODE;const s=zs(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Lt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Qr(t.visibleWrites,e);return n.forEachChild(Lt,(o,a)=>{const l=Vi(Qr(i,new Ke(o)),a);r=r.updateImmediateChild(o,l)}),B_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Qr(t.visibleWrites,e);return B_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function yU(t,e,n,r,s){K(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=yt(e,n);if(df(t.visibleWrites,i))return null;{const o=Qr(t.visibleWrites,i);return ff(o)?s.getChild(n):Vi(o,s.getChild(n))}}function _U(t,e,n,r){const s=yt(e,n),i=zs(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Qr(t.visibleWrites,s);return Vi(o,r.getNode().getImmediateChild(n))}else return null}function vU(t,e){return zs(t.visibleWrites,e)}function wU(t,e,n,r,s,i,o){let a;const l=Qr(t.visibleWrites,e),c=zs(l,Fe());if(c!=null)a=c;else if(n!=null)a=Vi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=d.getNext();for(;f&&u.length<s;)h(f,r)!==0&&u.push(f),f=d.getNext();return u}else return[]}function EU(){return{visibleWrites:xn.empty(),allWrites:[],lastWriteId:-1}}function pf(t,e,n,r){return CT(t.writeTree,t.treePath,e,n,r)}function ST(t,e){return gU(t.writeTree,t.treePath,e)}function H_(t,e,n,r){return yU(t.writeTree,t.treePath,e,n,r)}function jc(t,e){return vU(t.writeTree,yt(t.treePath,e))}function bU(t,e,n,r,s,i){return wU(t.writeTree,t.treePath,e,n,r,s,i)}function cm(t,e,n){return _U(t.writeTree,t.treePath,e,n)}function AT(t,e){return RT(yt(t.treePath,e),t.writeTree)}function RT(t,e){return{treePath:t,writeTree:e}}/**
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
 */class TU{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;K(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),K(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,M_(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,JF(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,XF(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,M_(r,e.snapshotNode,s.oldSnap));else throw to("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class IU{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const kT=new IU;class um{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new lm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Us(this.viewCache_),i=bU(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function CU(t,e){K(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function SU(t,e,n,r,s){const i=new TU;let o,a;if(n.type===qn.OVERWRITE){const c=n;c.source.fromUser?o=mf(t,e,c.path,c.snap,r,s,i):(K(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!be(c.path),o=qc(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===qn.MERGE){const c=n;c.source.fromUser?o=RU(t,e,c.path,c.children,r,s,i):(K(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=gf(t,e,c.path,c.children,r,s,a,i))}else if(n.type===qn.ACK_USER_WRITE){const c=n;c.revert?o=OU(t,e,c.path,r,s,i):o=kU(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===qn.LISTEN_COMPLETE)o=NU(t,e,n.path,r,i);else throw to("Unknown operation type: "+n.type);const l=i.getChanges();return AU(e,o,l),{viewCache:o,changes:l}}function AU(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=hf(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(QF(hf(e)))}}function NT(t,e,n,r,s,i){const o=e.eventCache;if(jc(r,n)!=null)return e;{let a,l;if(be(n))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Us(e),u=c instanceof Pe?c:Pe.EMPTY_NODE,h=ST(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=pf(r,Us(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=Ce(n);if(c===".priority"){K(rs(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=H_(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=He(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=H_(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=cm(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,i):a=o.getNode()}}return Qo(e,a,o.isFullyInitialized()||be(n),t.filter.filtersNodes())}}function qc(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(be(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),f,null)}else{const f=Ce(n);if(!l.isCompleteForPath(n)&&rs(n)>1)return e;const p=He(n),b=l.getNode().getImmediateChild(f).updateChild(p,r);f===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),f,b,p,kT,null)}const h=ET(e,c,l.isFullyInitialized()||be(n),u.filtersNodes()),d=new um(s,h,i);return NT(t,h,n,s,d,a)}function mf(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new um(s,e,i);if(be(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Qo(e,c,!0,t.filter.filtersNodes());else{const h=Ce(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Qo(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=He(n),f=a.getNode().getImmediateChild(h);let p;if(be(d))p=r;else{const y=u.getCompleteChild(h);y!=null?oT(d)===".priority"&&y.getChild(lT(d)).isEmpty()?p=y:p=y.updateChild(d,r):p=Pe.EMPTY_NODE}if(f.equals(p))l=e;else{const y=t.filter.updateChild(a.getNode(),h,p,d,u,o);l=Qo(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function j_(t,e){return t.eventCache.isCompleteForChild(e)}function RU(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=yt(n,l);j_(e,Ce(u))&&(a=mf(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=yt(n,l);j_(e,Ce(u))||(a=mf(t,a,u,c,s,i,o))}),a}function q_(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function gf(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;be(n)?c=r:c=new Ve(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=q_(t,f,d);l=qc(t,l,new Ke(h),p,s,i,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),y=q_(t,p,d);l=qc(t,l,new Ke(h),y,s,i,o,a)}}),l}function kU(t,e,n,r,s,i,o){if(jc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(be(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return qc(t,e,n,l.getNode().getChild(n),s,i,a,o);if(be(n)){let c=new Ve(null);return l.getNode().forEachChild(Si,(u,h)=>{c=c.set(new Ke(u),h)}),gf(t,e,n,c,s,i,a,o)}else return e}else{let c=new Ve(null);return r.foreach((u,h)=>{const d=yt(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),gf(t,e,n,c,s,i,a,o)}}function NU(t,e,n,r,s){const i=e.serverCache,o=ET(e,i.getNode(),i.isFullyInitialized()||be(n),i.isFiltered());return NT(t,o,n,r,kT,s)}function OU(t,e,n,r,s,i){let o;if(jc(r,n)!=null)return e;{const a=new um(r,e,s),l=e.eventCache.getNode();let c;if(be(n)||Ce(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=pf(r,Us(e));else{const h=e.serverCache.getNode();K(h instanceof Pe,"serverChildren would be complete if leaf node"),u=ST(r,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=Ce(n);let h=cm(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,He(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Pe.EMPTY_NODE,He(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=pf(r,Us(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||jc(r,Fe())!=null,Qo(e,c,o,t.filter.filtersNodes())}}function PU(t,e){const n=Us(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!be(e)&&!n.getImmediateChild(Ce(e)).isEmpty())?n.getChild(e):null}function W_(t,e,n,r){e.type===qn.MERGE&&e.source.queryId!==null&&(K(Us(t.viewCache_),"We should always have a full cache before handling merges"),K(hf(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=SU(t.processor_,s,e,n,r);return CU(t.processor_,i.viewCache),K(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,DU(t,i.changes,i.viewCache.eventCache.getNode(),null)}function DU(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return oU(t.eventGenerator_,e,n,s)}/**
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
 */let z_;function xU(t){K(!z_,"__referenceConstructor has already been defined"),z_=t}function hm(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return K(i!=null,"SyncTree gave us an op for an invalid query."),W_(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(W_(o,e,n,r));return i}}function dm(t,e){let n=null;for(const r of t.views.values())n=n||PU(r,e);return n}/**
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
 */let K_;function MU(t){K(!K_,"__referenceConstructor has already been defined"),K_=t}class G_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ve(null),this.pendingWriteTree_=EU(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function LU(t,e,n,r,s){return uU(t.pendingWriteTree_,e,n,r,s),s?Du(t,new Fs(yT(),e,n)):[]}function gi(t,e,n=!1){const r=hU(t.pendingWriteTree_,e);if(dU(t.pendingWriteTree_,e)){let i=new Ve(null);return r.snap!=null?i=i.set(Fe(),!0):Sn(r.children,o=>{i=i.set(new Ke(o),!0)}),Du(t,new Hc(r.path,i,n))}else return[]}function Pu(t,e,n){return Du(t,new Fs(_T(),e,n))}function FU(t,e,n){const r=Ve.fromObject(n);return Du(t,new wa(_T(),e,r))}function UU(t,e,n,r){const s=xT(t,r);if(s!=null){const i=MT(s),o=i.path,a=i.queryId,l=In(o,e),c=new Fs(vT(a),l,n);return LT(t,o,c)}else return[]}function $U(t,e,n,r){const s=xT(t,r);if(s){const i=MT(s),o=i.path,a=i.queryId,l=In(o,e),c=Ve.fromObject(n),u=new wa(vT(a),l,c);return LT(t,o,u)}else return[]}function OT(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=In(o,e),c=dm(a,l);if(c)return c});return CT(s,e,i,n,!0)}function Du(t,e){return PT(e,t.syncPointTree_,null,TT(t.pendingWriteTree_,Fe()))}function PT(t,e,n,r){if(be(t.path))return DT(t,e,n,r);{const s=e.get(Fe());n==null&&s!=null&&(n=dm(s,Fe()));let i=[];const o=Ce(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=AT(r,o);i=i.concat(PT(a,l,c,u))}return s&&(i=i.concat(hm(s,t,r,n))),i}}function DT(t,e,n,r){const s=e.get(Fe());n==null&&s!=null&&(n=dm(s,Fe()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=AT(r,o),u=t.operationForChild(o);u&&(i=i.concat(DT(u,a,l,c)))}),s&&(i=i.concat(hm(s,t,r,n))),i}function xT(t,e){return t.tagToQueryMap.get(e)}function MT(t){const e=t.indexOf("$");return K(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ke(t.substr(0,e))}}function LT(t,e,n){const r=t.syncPointTree_.get(e);K(r,"Missing sync point for query tag that we're tracking");const s=TT(t.pendingWriteTree_,e);return hm(r,n,s,null)}/**
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
 */class fm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new fm(n)}node(){return this.node_}}class pm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=yt(this.path_,e);return new pm(this.syncTree_,n)}node(){return OT(this.syncTree_,this.path_)}}const VU=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Y_=function(t,e,n){if(!t||typeof t!="object")return t;if(K(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return BU(t[".sv"],e,n);if(typeof t[".sv"]=="object")return HU(t[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},BU=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:K(!1,"Unexpected server value: "+t)}},HU=function(t,e,n){t.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&K(!1,"Unexpected increment value: "+r);const s=e.node();if(K(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},jU=function(t,e,n,r){return mm(e,new pm(n,t),r)},qU=function(t,e,n){return mm(t,new fm(e),n)};function mm(t,e,n){const r=t.getPriority().val(),s=Y_(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Y_(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new pt(a,Pt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new pt(s))),o.forEachChild(Lt,(a,l)=>{const c=mm(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
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
 */class gm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ym(t,e){let n=e instanceof Ke?e:new Ke(e),r=t,s=Ce(n);for(;s!==null;){const i=Fi(r.node.children,s)||{children:{},childCount:0};r=new gm(s,r,i),n=He(n),s=Ce(n)}return r}function ao(t){return t.node.value}function FT(t,e){t.node.value=e,yf(t)}function UT(t){return t.node.childCount>0}function WU(t){return ao(t)===void 0&&!UT(t)}function xu(t,e){Sn(t.node.children,(n,r)=>{e(new gm(n,t,r))})}function $T(t,e,n,r){n&&!r&&e(t),xu(t,s=>{$T(s,e,!0,r)}),n&&r&&e(t)}function zU(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function el(t){return new Ke(t.parent===null?t.name:el(t.parent)+"/"+t.name)}function yf(t){t.parent!==null&&KU(t.parent,t.name,t)}function KU(t,e,n){const r=WU(n),s=Ir(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,yf(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,yf(t))}/**
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
 */const GU=/[\[\].#$\/\u0000-\u001F\u007F]/,YU=/[\[\].#$\u0000-\u001F\u007F]/,Jh=10*1024*1024,VT=function(t){return typeof t=="string"&&t.length!==0&&!GU.test(t)},QU=function(t){return typeof t=="string"&&t.length!==0&&!YU.test(t)},XU=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),QU(t)},BT=function(t,e,n){const r=n instanceof Ke?new NF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ps(r));if(typeof e=="function")throw new Error(t+"contains a function "+ps(r)+" with contents = "+e.toString());if(Vb(e))throw new Error(t+"contains "+e.toString()+" "+ps(r));if(typeof e=="string"&&e.length>Jh/3&&Su(e)>Jh)throw new Error(t+"contains a string greater than "+Jh+" utf8 bytes "+ps(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Sn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!VT(o)))throw new Error(t+" contains an invalid key ("+o+") "+ps(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);OF(r,o),BT(t,a,r),PF(r)}),s&&i)throw new Error(t+' contains ".value" child '+ps(r)+" in addition to actual children.")}},JU=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!VT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!XU(n))throw new Error(OD(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class ZU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function e$(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!cT(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Ks(t,e,n){e$(t,n),t$(t,r=>On(r,e)||On(e,r))}function t$(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(n$(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function n$(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ss&&Ot("event: "+n.toString()),Ja(r)}}}/**
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
 */const r$="repo_interrupt",s$=25;class i${constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ZU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bc(),this.transactionQueueTree_=new gm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function o$(t,e,n){if(t.stats_=rm(t.repoInfo_),t.forceRestClient_||eF())t.server_=new Vc(t.repoInfo_,(r,s,i,o)=>{Q_(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>X_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Tt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new dr(t.repoInfo_,e,(r,s,i,o)=>{Q_(t,r,s,i,o)},r=>{X_(t,r)},r=>{l$(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=oF(t.repoInfo_,()=>new iU(t.stats_,t.server_)),t.infoData_=new eU,t.infoSyncTree_=new G_({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Pu(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),_m(t,"connected",!1),t.serverSyncTree_=new G_({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);Ks(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function a$(t){const n=t.infoData_.getNode(new Ke(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function HT(t){return VU({timestamp:a$(t)})}function Q_(t,e,n,r,s){t.dataUpdateCount++;const i=new Ke(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Rc(n,c=>Pt(c));o=$U(t.serverSyncTree_,i,l,s)}else{const l=Pt(n);o=UU(t.serverSyncTree_,i,l,s)}else if(r){const l=Rc(n,c=>Pt(c));o=FU(t.serverSyncTree_,i,l)}else{const l=Pt(n);o=Pu(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=wm(t,i)),Ks(t.eventQueue_,a,o)}function X_(t,e){_m(t,"connected",e),e===!1&&u$(t)}function l$(t,e){Sn(e,(n,r)=>{_m(t,n,r)})}function _m(t,e,n){const r=new Ke("/.info/"+e),s=Pt(n);t.infoData_.updateSnapshot(r,s);const i=Pu(t.infoSyncTree_,r,s);Ks(t.eventQueue_,r,i)}function c$(t){return t.nextWriteId_++}function u$(t){jT(t,"onDisconnectEvents");const e=HT(t),n=Bc();uf(t.onDisconnect_,Fe(),(s,i)=>{const o=jU(s,i,t.serverSyncTree_,e);gT(n,s,o)});let r=[];uf(n,Fe(),(s,i)=>{r=r.concat(Pu(t.serverSyncTree_,s,i));const o=p$(t,s);wm(t,o)}),t.onDisconnect_=Bc(),Ks(t.eventQueue_,Fe(),r)}function h$(t){t.persistentConnection_&&t.persistentConnection_.interrupt(r$)}function jT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ot(n,...e)}function qT(t,e,n){return OT(t.serverSyncTree_,e,n)||Pe.EMPTY_NODE}function vm(t,e=t.transactionQueueTree_){if(e||Mu(t,e),ao(e)){const n=zT(t,e);K(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&d$(t,el(e),n)}else UT(e)&&xu(e,n=>{vm(t,n)})}function d$(t,e,n){const r=n.map(c=>c.currentWriteId),s=qT(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];K(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=In(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{jT(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(gi(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Mu(t,ym(t.transactionQueueTree_,e)),vm(t,t.transactionQueueTree_),Ks(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ja(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{yn("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}wm(t,e)}},o)}function wm(t,e){const n=WT(t,e),r=el(n),s=zT(t,n);return f$(t,s,r),r}function f$(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=In(n,l.path);let u=!1,h;if(K(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(gi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=s$)u=!0,h="maxretry",s=s.concat(gi(t.serverSyncTree_,l.currentWriteId,!0));else{const d=qT(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){BT("transaction failed: Data returned ",f,l.path);let p=Pt(f);typeof f=="object"&&f!=null&&Ir(f,".priority")||(p=p.updatePriority(d.getPriority()));const b=l.currentWriteId,_=HT(t),m=qU(p,d,_);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=m,l.currentWriteId=c$(t),o.splice(o.indexOf(b),1),s=s.concat(LU(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),s=s.concat(gi(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",s=s.concat(gi(t.serverSyncTree_,l.currentWriteId,!0))}Ks(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Mu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ja(r[a]);vm(t,t.transactionQueueTree_)}function WT(t,e){let n,r=t.transactionQueueTree_;for(n=Ce(e);n!==null&&ao(r)===void 0;)r=ym(r,n),e=He(e),n=Ce(e);return r}function zT(t,e){const n=[];return KT(t,e,n),n.sort((r,s)=>r.order-s.order),n}function KT(t,e,n){const r=ao(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);xu(e,s=>{KT(t,s,n)})}function Mu(t,e){const n=ao(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,FT(e,n.length>0?n:void 0)}xu(e,r=>{Mu(t,r)})}function p$(t,e){const n=el(WT(t,e)),r=ym(t.transactionQueueTree_,e);return zU(r,s=>{Zh(t,s)}),Zh(t,r),$T(r,s=>{Zh(t,s)}),n}function Zh(t,e){const n=ao(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(K(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(K(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(gi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?FT(e,void 0):n.length=i+1,Ks(t.eventQueue_,el(e),s);for(let o=0;o<r.length;o++)Ja(r[o])}}/**
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
 */function m$(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function g$(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):yn(`Invalid query segment '${n}' in query '${t}'`)}return e}const J_=function(t,e){const n=y$(t),r=n.namespace;n.domain==="firebase.com"&&Ms(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ms("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||zL();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new rF(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Ke(n.pathString)}},y$=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=m$(t.substring(u,h)));const d=g$(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),i=r}"ns"in d&&(i=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */class Em{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return be(this._path)?null:oT(this._path)}get ref(){return new lo(this._repo,this._path)}get _queryIdentifier(){const e=F_(this._queryParams),n=tm(e);return n==="{}"?"default":n}get _queryObject(){return F_(this._queryParams)}isEqual(e){if(e=ze(e),!(e instanceof Em))return!1;const n=this._repo===e._repo,r=cT(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+kF(this._path)}}class lo extends Em{constructor(e,n){super(e,n,new am,!1)}get parent(){const e=lT(this._path);return e===null?null:new lo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}xU(lo);MU(lo);/**
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
 */const _$="FIREBASE_DATABASE_EMULATOR_HOST",_f={};let v$=!1;function w$(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Ms("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ot("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=J_(i,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[_$]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=J_(i,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new af(af.OWNER):new nF(t.name,t.options,e);JU("Invalid Firebase Database URL",o),be(o.path)||Ms("Database URL must point to the root of a Firebase Database (not including a child path).");const h=b$(a,t,u,new tF(t.name,n));return new T$(h,t)}function E$(t,e){const n=_f[e];(!n||n[t.key]!==t)&&Ms(`Database ${e}(${t.repoInfo_}) has already been deleted.`),h$(t),delete n[t.key]}function b$(t,e,n,r){let s=_f[e.name];s||(s={},_f[e.name]=s);let i=s[t.toURLString()];return i&&Ms("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new i$(t,v$,n,r),s[t.toURLString()]=i,i}class T${constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(o$(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new lo(this._repo,Fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(E$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ms("Cannot call "+e+" on a deleted database.")}}/**
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
 */function I$(t){BL(Ws),Xn(new Ln("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return w$(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),gn(v_,w_,t),gn(v_,w_,"esm2017")}dr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};I$();var C$=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},te,bm=bm||{},pe=C$||self;function Wc(){}function Lu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function tl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function S$(t){return Object.prototype.hasOwnProperty.call(t,ed)&&t[ed]||(t[ed]=++A$)}var ed="closure_uid_"+(1e9*Math.random()>>>0),A$=0;function R$(t,e,n){return t.call.apply(t.bind,arguments)}function k$(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ft(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ft=R$:Ft=k$,Ft.apply(null,arguments)}function Vl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function At(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function as(){this.s=this.s,this.o=this.o}var N$=0;as.prototype.s=!1;as.prototype.na=function(){!this.s&&(this.s=!0,this.M(),N$!=0)&&S$(this)};as.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const GT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Tm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Z_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Lu(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ut.prototype.h=function(){this.defaultPrevented=!0};var O$=function(){if(!pe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{pe.addEventListener("test",Wc,e),pe.removeEventListener("test",Wc,e)}catch{}return t}();function zc(t){return/^[\s\xa0]*$/.test(t)}var ev=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function td(t,e){return t<e?-1:t>e?1:0}function Fu(){var t=pe.navigator;return t&&(t=t.userAgent)?t:""}function jn(t){return Fu().indexOf(t)!=-1}function Im(t){return Im[" "](t),t}Im[" "]=Wc;function P$(t){var e=M$;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var D$=jn("Opera"),Bi=jn("Trident")||jn("MSIE"),YT=jn("Edge"),vf=YT||Bi,QT=jn("Gecko")&&!(Fu().toLowerCase().indexOf("webkit")!=-1&&!jn("Edge"))&&!(jn("Trident")||jn("MSIE"))&&!jn("Edge"),x$=Fu().toLowerCase().indexOf("webkit")!=-1&&!jn("Edge");function XT(){var t=pe.document;return t?t.documentMode:void 0}var Kc;e:{var nd="",rd=function(){var t=Fu();if(QT)return/rv:([^\);]+)(\)|;)/.exec(t);if(YT)return/Edge\/([\d\.]+)/.exec(t);if(Bi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(x$)return/WebKit\/(\S+)/.exec(t);if(D$)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(rd&&(nd=rd?rd[1]:""),Bi){var sd=XT();if(sd!=null&&sd>parseFloat(nd)){Kc=String(sd);break e}}Kc=nd}var M$={};function L$(){return P$(function(){let t=0;const e=ev(String(Kc)).split("."),n=ev("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=td(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||td(s[2].length==0,i[2].length==0)||td(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var wf;if(pe.document&&Bi){var tv=XT();wf=tv||parseInt(Kc,10)||void 0}else wf=void 0;var F$=wf;function Ea(t,e){if(Ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(QT){e:{try{Im(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:U$[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ea.X.h.call(this)}}At(Ea,Ut);var U$={2:"touch",3:"pen",4:"mouse"};Ea.prototype.h=function(){Ea.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nl="closure_listenable_"+(1e6*Math.random()|0),$$=0;function V$(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++$$,this.ba=this.ea=!1}function Uu(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Cm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function JT(t){const e={};for(const n in t)e[n]=t[n];return e}const nv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ZT(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<nv.length;i++)n=nv[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $u(t){this.src=t,this.g={},this.h=0}$u.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=bf(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new V$(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};function Ef(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=GT(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Uu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function bf(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}var Sm="closure_lm_"+(1e6*Math.random()|0),id={};function eI(t,e,n,r,s){if(r&&r.once)return nI(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)eI(t,e[i],n,r,s);return null}return n=km(n),t&&t[nl]?t.N(e,n,tl(r)?!!r.capture:!!r,s):tI(t,e,n,!1,r,s)}function tI(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=tl(s)?!!s.capture:!!s,a=Rm(t);if(a||(t[Sm]=a=new $u(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=B$(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)O$||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(sI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function B$(){function t(n){return e.call(t.src,t.listener,n)}const e=H$;return t}function nI(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)nI(t,e[i],n,r,s);return null}return n=km(n),t&&t[nl]?t.O(e,n,tl(r)?!!r.capture:!!r,s):tI(t,e,n,!0,r,s)}function rI(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)rI(t,e[i],n,r,s);else r=tl(r)?!!r.capture:!!r,n=km(n),t&&t[nl]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=bf(i,n,r,s),-1<n&&(Uu(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Rm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=bf(e,n,r,s)),(n=-1<t?e[t]:null)&&Am(n))}function Am(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[nl])Ef(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(sI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Rm(e))?(Ef(n,t),n.h==0&&(n.src=null,e[Sm]=null)):Uu(t)}}}function sI(t){return t in id?id[t]:id[t]="on"+t}function H$(t,e){if(t.ba)t=!0;else{e=new Ea(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Am(t),t=n.call(r,e)}return t}function Rm(t){return t=t[Sm],t instanceof $u?t:null}var od="__closure_events_fn_"+(1e9*Math.random()>>>0);function km(t){return typeof t=="function"?t:(t[od]||(t[od]=function(e){return t.handleEvent(e)}),t[od])}function vt(){as.call(this),this.i=new $u(this),this.P=this,this.I=null}At(vt,as);vt.prototype[nl]=!0;vt.prototype.removeEventListener=function(t,e,n,r){rI(this,t,e,n,r)};function Ct(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ut(e,t);else if(e instanceof Ut)e.target=e.target||t;else{var s=e;e=new Ut(r,t),ZT(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Bl(o,r,!0,e)&&s}if(o=e.g=t,s=Bl(o,r,!0,e)&&s,s=Bl(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Bl(o,r,!1,e)&&s}vt.prototype.M=function(){if(vt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Uu(n[r]);delete t.g[e],t.h--}}this.I=null};vt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};vt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Bl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Ef(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Nm=pe.JSON.stringify;function j$(){var t=aI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class q${constructor(){this.h=this.g=null}add(e,n){const r=iI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var iI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new W$,t=>t.reset());class W${constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function z$(t){pe.setTimeout(()=>{throw t},0)}function oI(t,e){Tf||K$(),If||(Tf(),If=!0),aI.add(t,e)}var Tf;function K$(){var t=pe.Promise.resolve(void 0);Tf=function(){t.then(G$)}}var If=!1,aI=new q$;function G$(){for(var t;t=j$();){try{t.h.call(t.g)}catch(n){z$(n)}var e=iI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}If=!1}function Vu(t,e){vt.call(this),this.h=t||1,this.g=e||pe,this.j=Ft(this.lb,this),this.l=Date.now()}At(Vu,vt);te=Vu.prototype;te.ca=!1;te.R=null;te.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ct(this,"tick"),this.ca&&(Om(this),this.start()))}};te.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Om(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}te.M=function(){Vu.X.M.call(this),Om(this),delete this.g};function Pm(t,e,n){if(typeof t=="function")n&&(t=Ft(t,n));else if(t&&typeof t.handleEvent=="function")t=Ft(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:pe.setTimeout(t,e||0)}function lI(t){t.g=Pm(()=>{t.g=null,t.i&&(t.i=!1,lI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Y$ extends as{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:lI(this)}M(){super.M(),this.g&&(pe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ba(t){as.call(this),this.h=t,this.g={}}At(ba,as);var rv=[];function cI(t,e,n,r){Array.isArray(n)||(n&&(rv[0]=n.toString()),n=rv);for(var s=0;s<n.length;s++){var i=eI(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function uI(t){Cm(t.g,function(e,n){this.g.hasOwnProperty(n)&&Am(e)},t),t.g={}}ba.prototype.M=function(){ba.X.M.call(this),uI(this)};ba.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Bu(){this.g=!0}Bu.prototype.Aa=function(){this.g=!1};function Q$(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function X$(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function yi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Z$(t,n)+(r?" "+r:"")})}function J$(t,e){t.info(function(){return"TIMEOUT: "+e})}Bu.prototype.info=function(){};function Z$(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Nm(n)}catch{return e}}var Gs={},sv=null;function Hu(){return sv=sv||new vt}Gs.Pa="serverreachability";function hI(t){Ut.call(this,Gs.Pa,t)}At(hI,Ut);function Ta(t){const e=Hu();Ct(e,new hI(e))}Gs.STAT_EVENT="statevent";function dI(t,e){Ut.call(this,Gs.STAT_EVENT,t),this.stat=e}At(dI,Ut);function zt(t){const e=Hu();Ct(e,new dI(e,t))}Gs.Qa="timingevent";function fI(t,e){Ut.call(this,Gs.Qa,t),this.size=e}At(fI,Ut);function rl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return pe.setTimeout(function(){t()},e)}var ju={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},pI={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Dm(){}Dm.prototype.h=null;function iv(t){return t.h||(t.h=t.i())}function mI(){}var sl={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function xm(){Ut.call(this,"d")}At(xm,Ut);function Mm(){Ut.call(this,"c")}At(Mm,Ut);var Cf;function qu(){}At(qu,Dm);qu.prototype.g=function(){return new XMLHttpRequest};qu.prototype.i=function(){return{}};Cf=new qu;function il(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new ba(this),this.O=eV,t=vf?125:void 0,this.T=new Vu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new gI}function gI(){this.i=null,this.g="",this.h=!1}var eV=45e3,Sf={},Gc={};te=il.prototype;te.setTimeout=function(t){this.O=t};function Af(t,e,n){t.K=1,t.v=zu(_r(e)),t.s=n,t.P=!0,yI(t,null)}function yI(t,e){t.F=Date.now(),ol(t),t.A=_r(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),CI(n.i,"t",r),t.C=0,n=t.l.H,t.h=new gI,t.g=zI(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Y$(Ft(t.La,t,t.g),t.N)),cI(t.S,t.g,"readystatechange",t.ib),e=t.H?JT(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ta(),Q$(t.j,t.u,t.A,t.m,t.U,t.s)}te.ib=function(t){t=t.target;const e=this.L;e&&hr(t)==3?e.l():this.La(t)};te.La=function(t){try{if(t==this.g)e:{const u=hr(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||vf||this.g&&(this.h.h||this.g.fa()||cv(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Ta(3):Ta(2)),Wu(this);var n=this.g.aa();this.Y=n;t:if(_I(this)){var r=cv(this.g);t="";var s=r.length,i=hr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ws(this),Jo(this);var o="";break t}this.h.i=new pe.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,X$(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zc(a)){var c=a;break t}}c=null}if(n=c)yi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Rf(this,n);else{this.i=!1,this.o=3,zt(12),ws(this),Jo(this);break e}}this.P?(vI(this,u,o),vf&&this.i&&u==3&&(cI(this.S,this.T,"tick",this.hb),this.T.start())):(yi(this.j,this.m,o,null),Rf(this,o)),u==4&&ws(this),this.i&&!this.I&&(u==4?HI(this.l,this):(this.i=!1,ol(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,zt(12)):(this.o=0,zt(13)),ws(this),Jo(this)}}}catch{}finally{}};function _I(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function vI(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=tV(t,n),s==Gc){e==4&&(t.o=4,zt(14),r=!1),yi(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Sf){t.o=4,zt(15),yi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else yi(t.j,t.m,s,null),Rf(t,s);_I(t)&&s!=Gc&&s!=Sf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,zt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hm(e),e.K=!0,zt(11))):(yi(t.j,t.m,n,"[Invalid Chunked Response]"),ws(t),Jo(t))}te.hb=function(){if(this.g){var t=hr(this.g),e=this.g.fa();this.C<e.length&&(Wu(this),vI(this,t,e),this.i&&t!=4&&ol(this))}};function tV(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Gc:(n=Number(e.substring(n,r)),isNaN(n)?Sf:(r+=1,r+n>e.length?Gc:(e=e.substr(r,n),t.C=r+n,e)))}te.cancel=function(){this.I=!0,ws(this)};function ol(t){t.V=Date.now()+t.O,wI(t,t.O)}function wI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=rl(Ft(t.gb,t),e)}function Wu(t){t.B&&(pe.clearTimeout(t.B),t.B=null)}te.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(J$(this.j,this.A),this.K!=2&&(Ta(),zt(17)),ws(this),this.o=2,Jo(this)):wI(this,this.V-t)};function Jo(t){t.l.G==0||t.I||HI(t.l,t)}function ws(t){Wu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Om(t.T),uI(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Rf(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||kf(n.h,t))){if(!t.J&&kf(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Xc(n),Yu(n);else break e;Bm(n),zt(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=rl(Ft(n.cb,n),6e3));if(1>=RI(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Es(n,11)}else if((t.J||n.g==t)&&Xc(n),!zc(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.h;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Lm(i,i.h),i.h=null))}if(r.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,Ye(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=WI(r,r.H?r.ka:null,r.V),o.J){kI(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Wu(a),ol(a)),r.g=o}else VI(r);0<n.i.length&&Qu(n)}else c[0]!="stop"&&c[0]!="close"||Es(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Es(n,7):Vm(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Ta(4)}catch{}}function nV(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Lu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function rV(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Lu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function EI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Lu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=rV(t),r=nV(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var bI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sV(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function As(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof As){this.h=e!==void 0?e:t.h,Yc(this,t.j),this.s=t.s,this.g=t.g,Qc(this,t.m),this.l=t.l,e=t.i;var n=new Ia;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ov(this,n),this.o=t.o}else t&&(n=String(t).match(bI))?(this.h=!!e,Yc(this,n[1]||"",!0),this.s=Mo(n[2]||""),this.g=Mo(n[3]||"",!0),Qc(this,n[4]),this.l=Mo(n[5]||"",!0),ov(this,n[6]||"",!0),this.o=Mo(n[7]||"")):(this.h=!!e,this.i=new Ia(null,this.h))}As.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Lo(e,av,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Lo(e,av,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Lo(n,n.charAt(0)=="/"?aV:oV,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Lo(n,cV)),t.join("")};function _r(t){return new As(t)}function Yc(t,e,n){t.j=n?Mo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ov(t,e,n){e instanceof Ia?(t.i=e,uV(t.i,t.h)):(n||(e=Lo(e,lV)),t.i=new Ia(e,t.h))}function Ye(t,e,n){t.i.set(e,n)}function zu(t){return Ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Mo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Lo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,iV),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function iV(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var av=/[#\/\?@]/g,oV=/[#\?:]/g,aV=/[#\?]/g,lV=/[#\?@]/g,cV=/#/g;function Ia(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ls(t){t.g||(t.g=new Map,t.h=0,t.i&&sV(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}te=Ia.prototype;te.add=function(t,e){ls(this),this.i=null,t=co(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function TI(t,e){ls(t),e=co(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function II(t,e){return ls(t),e=co(t,e),t.g.has(e)}te.forEach=function(t,e){ls(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};te.oa=function(){ls(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};te.W=function(t){ls(this);let e=[];if(typeof t=="string")II(this,t)&&(e=e.concat(this.g.get(co(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};te.set=function(t,e){return ls(this),this.i=null,t=co(this,t),II(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};te.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function CI(t,e,n){TI(t,e),0<n.length&&(t.i=null,t.g.set(co(t,e),Tm(n)),t.h+=n.length)}te.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function co(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function uV(t,e){e&&!t.j&&(ls(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(TI(this,r),CI(this,s,n))},t)),t.j=e}var hV=class{constructor(e,n){this.h=e,this.g=n}};function SI(t){this.l=t||dV,pe.PerformanceNavigationTiming?(t=pe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(pe.g&&pe.g.Ga&&pe.g.Ga()&&pe.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dV=10;function AI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function RI(t){return t.h?1:t.g?t.g.size:0}function kf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Lm(t,e){t.g?t.g.add(e):t.h=e}function kI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}SI.prototype.cancel=function(){if(this.i=NI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function NI(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Tm(t.i)}function Fm(){}Fm.prototype.stringify=function(t){return pe.JSON.stringify(t,void 0)};Fm.prototype.parse=function(t){return pe.JSON.parse(t,void 0)};function fV(){this.g=new Fm}function pV(t,e,n){const r=n||"";try{EI(t,function(s,i){let o=s;tl(s)&&(o=Nm(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function mV(t,e){const n=new Bu;if(pe.Image){const r=new Image;r.onload=Vl(Hl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Vl(Hl,n,r,"TestLoadImage: error",!1,e),r.onabort=Vl(Hl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Vl(Hl,n,r,"TestLoadImage: timeout",!1,e),pe.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Hl(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function al(t){this.l=t.ac||null,this.j=t.jb||!1}At(al,Dm);al.prototype.g=function(){return new Ku(this.l,this.j)};al.prototype.i=function(t){return function(){return t}}({});function Ku(t,e){vt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Um,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}At(Ku,vt);var Um=0;te=Ku.prototype;te.open=function(t,e){if(this.readyState!=Um)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ca(this)};te.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||pe).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};te.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ll(this)),this.readyState=Um};te.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ca(this)),this.g&&(this.readyState=3,Ca(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof pe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;OI(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function OI(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}te.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ll(this):Ca(this),this.readyState==3&&OI(this)}};te.Va=function(t){this.g&&(this.response=this.responseText=t,ll(this))};te.Ua=function(t){this.g&&(this.response=t,ll(this))};te.ga=function(){this.g&&ll(this)};function ll(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ca(t)}te.setRequestHeader=function(t,e){this.v.append(t,e)};te.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};te.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ca(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ku.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gV=pe.JSON.parse;function nt(t){vt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=PI,this.K=this.L=!1}At(nt,vt);var PI="",yV=/^https?$/i,_V=["POST","PUT"];te=nt.prototype;te.Ka=function(t){this.L=t};te.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Cf.g(),this.C=this.u?iv(this.u):iv(Cf),this.g.onreadystatechange=Ft(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){lv(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=pe.FormData&&t instanceof pe.FormData,!(0<=GT(_V,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{MI(this),0<this.B&&((this.K=vV(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ft(this.qa,this)):this.A=Pm(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){lv(this,i)}};function vV(t){return Bi&&L$()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}te.qa=function(){typeof bm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ct(this,"timeout"),this.abort(8))};function lv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,DI(t),Gu(t)}function DI(t){t.D||(t.D=!0,Ct(t,"complete"),Ct(t,"error"))}te.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ct(this,"complete"),Ct(this,"abort"),Gu(this))};te.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gu(this,!0)),nt.X.M.call(this)};te.Ha=function(){this.s||(this.F||this.v||this.l?xI(this):this.fb())};te.fb=function(){xI(this)};function xI(t){if(t.h&&typeof bm<"u"&&(!t.C[1]||hr(t)!=4||t.aa()!=2)){if(t.v&&hr(t)==4)Pm(t.Ha,0,t);else if(Ct(t,"readystatechange"),hr(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(bI)[1]||null;if(!s&&pe.self&&pe.self.location){var i=pe.self.location.protocol;s=i.substr(0,i.length-1)}r=!yV.test(s?s.toLowerCase():"")}n=r}if(n)Ct(t,"complete"),Ct(t,"success");else{t.m=6;try{var o=2<hr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",DI(t)}}finally{Gu(t)}}}}function Gu(t,e){if(t.g){MI(t);const n=t.g,r=t.C[0]?Wc:null;t.g=null,t.C=null,e||Ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function MI(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(pe.clearTimeout(t.A),t.A=null)}function hr(t){return t.g?t.g.readyState:0}te.aa=function(){try{return 2<hr(this)?this.g.status:-1}catch{return-1}};te.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};te.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gV(e)}};function cv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case PI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}te.Ea=function(){return this.m};te.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function LI(t){let e="";return Cm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function $m(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=LI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ye(t,e,n))}function Ao(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function FI(t){this.Ca=0,this.i=[],this.j=new Bu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ao("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ao("baseRetryDelayMs",5e3,t),this.bb=Ao("retryDelaySeedMs",1e4,t),this.$a=Ao("forwardChannelMaxRetries",2,t),this.ta=Ao("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new SI(t&&t.concurrentRequestLimit),this.Fa=new fV,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}te=FI.prototype;te.ma=8;te.G=1;function Vm(t){if(UI(t),t.G==3){var e=t.U++,n=_r(t.F);Ye(n,"SID",t.I),Ye(n,"RID",e),Ye(n,"TYPE","terminate"),cl(t,n),e=new il(t,t.j,e,void 0),e.K=2,e.v=zu(_r(n)),n=!1,pe.navigator&&pe.navigator.sendBeacon&&(n=pe.navigator.sendBeacon(e.v.toString(),"")),!n&&pe.Image&&(new Image().src=e.v,n=!0),n||(e.g=zI(e.l,null),e.g.da(e.v)),e.F=Date.now(),ol(e)}qI(t)}function Yu(t){t.g&&(Hm(t),t.g.cancel(),t.g=null)}function UI(t){Yu(t),t.u&&(pe.clearTimeout(t.u),t.u=null),Xc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&pe.clearTimeout(t.m),t.m=null)}function Qu(t){AI(t.h)||t.m||(t.m=!0,oI(t.Ja,t),t.C=0)}function wV(t,e){return RI(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=rl(Ft(t.Ja,t,e),jI(t,t.C)),t.C++,!0)}te.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new il(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=JT(i),ZT(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$I(this,s,e),n=_r(this.F),Ye(n,"RID",t),Ye(n,"CVER",22),this.D&&Ye(n,"X-HTTP-Session-Id",this.D),cl(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(LI(i)))+"&"+e:this.o&&$m(n,this.o,i)),Lm(this.h,s),this.Ya&&Ye(n,"TYPE","init"),this.O?(Ye(n,"$req",e),Ye(n,"SID","null"),s.Z=!0,Af(s,n,null)):Af(s,n,e),this.G=2}}else this.G==3&&(t?uv(this,t):this.i.length==0||AI(this.h)||uv(this))};function uv(t,e){var n;e?n=e.m:n=t.U++;const r=_r(t.F);Ye(r,"SID",t.I),Ye(r,"RID",n),Ye(r,"AID",t.T),cl(t,r),t.o&&t.s&&$m(r,t.o,t.s),n=new il(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=$I(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Lm(t.h,n),Af(n,r,e)}function cl(t,e){t.ia&&Cm(t.ia,function(n,r){Ye(e,r,n)}),t.l&&EI({},function(n,r){Ye(e,r,n)})}function $I(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ft(t.l.Ra,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=i,0>c)i=Math.max(0,s[l].h-100),a=!1;else try{pV(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function VI(t){t.g||t.u||(t.Z=1,oI(t.Ia,t),t.A=0)}function Bm(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=rl(Ft(t.Ia,t),jI(t,t.A)),t.A++,!0)}te.Ia=function(){if(this.u=null,BI(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=rl(Ft(this.eb,this),t)}};te.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,zt(10),Yu(this),BI(this))};function Hm(t){t.B!=null&&(pe.clearTimeout(t.B),t.B=null)}function BI(t){t.g=new il(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=_r(t.sa);Ye(e,"RID","rpc"),Ye(e,"SID",t.I),Ye(e,"CI",t.L?"0":"1"),Ye(e,"AID",t.T),Ye(e,"TYPE","xmlhttp"),cl(t,e),t.o&&t.s&&$m(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=zu(_r(e)),n.s=null,n.P=!0,yI(n,t)}te.cb=function(){this.v!=null&&(this.v=null,Yu(this),Bm(this),zt(19))};function Xc(t){t.v!=null&&(pe.clearTimeout(t.v),t.v=null)}function HI(t,e){var n=null;if(t.g==e){Xc(t),Hm(t),t.g=null;var r=2}else if(kf(t.h,e))n=e.D,kI(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Hu(),Ct(r,new fI(r,n)),Qu(t)}else VI(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(r==1&&wV(t,e)||r==2&&Bm(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Es(t,5);break;case 4:Es(t,10);break;case 3:Es(t,6);break;default:Es(t,2)}}}function jI(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Es(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ft(t.kb,t);n||(n=new As("//www.google.com/images/cleardot.gif"),pe.location&&pe.location.protocol=="http"||Yc(n,"https"),zu(n)),mV(n.toString(),r)}else zt(2);t.G=0,t.l&&t.l.va(e),qI(t),UI(t)}te.kb=function(t){t?(this.j.info("Successfully pinged google.com"),zt(2)):(this.j.info("Failed to ping google.com"),zt(1))};function qI(t){if(t.G=0,t.la=[],t.l){const e=NI(t.h);(e.length!=0||t.i.length!=0)&&(Z_(t.la,e),Z_(t.la,t.i),t.h.i.length=0,Tm(t.i),t.i.length=0),t.l.ua()}}function WI(t,e,n){var r=n instanceof As?_r(n):new As(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Qc(r,r.m);else{var s=pe.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new As(null,void 0);r&&Yc(i,r),e&&(i.g=e),s&&Qc(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&Ye(r,n,e),Ye(r,"VER",t.ma),cl(t,r),r}function zI(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new nt(new al({jb:!0})):new nt(t.ra),e.Ka(t.H),e}function KI(){}te=KI.prototype;te.xa=function(){};te.wa=function(){};te.va=function(){};te.ua=function(){};te.Ra=function(){};function Jc(){if(Bi&&!(10<=Number(F$)))throw Error("Environmental error: no available transport.")}Jc.prototype.g=function(t,e){return new _n(t,e)};function _n(t,e){vt.call(this),this.g=new FI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!zc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new uo(this)}At(_n,vt);_n.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;zt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=WI(t,null,t.V),Qu(t)};_n.prototype.close=function(){Vm(this.g)};_n.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Nm(t),t=n);e.i.push(new hV(e.ab++,t)),e.G==3&&Qu(e)};_n.prototype.M=function(){this.g.l=null,delete this.j,Vm(this.g),delete this.g,_n.X.M.call(this)};function GI(t){xm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}At(GI,xm);function YI(){Mm.call(this),this.status=1}At(YI,Mm);function uo(t){this.g=t}At(uo,KI);uo.prototype.xa=function(){Ct(this.g,"a")};uo.prototype.wa=function(t){Ct(this.g,new GI(t))};uo.prototype.va=function(t){Ct(this.g,new YI)};uo.prototype.ua=function(){Ct(this.g,"b")};Jc.prototype.createWebChannel=Jc.prototype.g;_n.prototype.send=_n.prototype.u;_n.prototype.open=_n.prototype.m;_n.prototype.close=_n.prototype.close;ju.NO_ERROR=0;ju.TIMEOUT=8;ju.HTTP_ERROR=6;pI.COMPLETE="complete";mI.EventType=sl;sl.OPEN="a";sl.CLOSE="b";sl.ERROR="c";sl.MESSAGE="d";vt.prototype.listen=vt.prototype.N;nt.prototype.listenOnce=nt.prototype.O;nt.prototype.getLastError=nt.prototype.Oa;nt.prototype.getLastErrorCode=nt.prototype.Ea;nt.prototype.getStatus=nt.prototype.aa;nt.prototype.getResponseJson=nt.prototype.Sa;nt.prototype.getResponseText=nt.prototype.fa;nt.prototype.send=nt.prototype.da;nt.prototype.setWithCredentials=nt.prototype.Ka;var EV=function(){return new Jc},bV=function(){return Hu()},ad=ju,TV=pI,IV=Gs,hv={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},CV=al,jl=mI,SV=nt;const dv="@firebase/firestore";/**
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
 */class Nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Nt.UNAUTHENTICATED=new Nt(null),Nt.GOOGLE_CREDENTIALS=new Nt("google-credentials-uid"),Nt.FIRST_PARTY=new Nt("first-party-uid"),Nt.MOCK_USER=new Nt("mock-user");/**
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
 */let ho="9.19.0";/**
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
 */const $s=new Ha("@firebase/firestore");function fv(){return $s.logLevel}function ne(t,...e){if($s.logLevel<=Re.DEBUG){const n=e.map(jm);$s.debug(`Firestore (${ho}): ${t}`,...n)}}function vr(t,...e){if($s.logLevel<=Re.ERROR){const n=e.map(jm);$s.error(`Firestore (${ho}): ${t}`,...n)}}function Zc(t,...e){if($s.logLevel<=Re.WARN){const n=e.map(jm);$s.warn(`Firestore (${ho}): ${t}`,...n)}}function jm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function fe(t="Unexpected state"){const e=`FIRESTORE (${ho}) INTERNAL ASSERTION FAILED: `+t;throw vr(e),new Error(e)}function qe(t,e){t||fe()}function ye(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends tr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class QI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class AV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Nt.UNAUTHENTICATED))}shutdown(){}}class RV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kV{constructor(e){this.t=e,this.currentUser=Nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new fr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(qe(typeof r.accessToken=="string"),new QI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string"),new Nt(e)}}class NV{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Nt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class OV{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new NV(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class PV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DV{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(qe(typeof n.token=="string"),this.T=n.token,new PV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function xV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class XI{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=xV(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Oe(t,e){return t<e?-1:t>e?1:0}function Hi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class ut{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ut(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ge{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ge(e)}static min(){return new ge(new ut(0,0))}static max(){return new ge(new ut(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Sa{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(),r===void 0?r=e.length-n:r>e.length-n&&fe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Sa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Sa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ue extends Sa{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const MV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends Sa{construct(e,n,r){return new Mt(e,n,r)}static isValidIdentifier(e){return MV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Mt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new J(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new J(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mt(n)}static emptyPath(){return new Mt([])}}/**
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
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Ue.fromString(e))}static fromName(e){return new re(Ue.fromString(e).popFirst(5))}static empty(){return new re(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Ue(e.slice()))}}function LV(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new ut(n+1,0):new ut(n,r));return new ss(s,re.empty(),e)}function FV(t){return new ss(t.readTime,t.key,-1)}class ss{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ss(ge.min(),re.empty(),-1)}static max(){return new ss(ge.max(),re.empty(),-1)}}function UV(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:Oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const $V="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ul(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==$V)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function hl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class qm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}qm.ct=-1;function Xu(t){return t==null}function eu(t){return t===0&&1/t==-1/0}function BV(t){return typeof t=="number"&&Number.isInteger(t)&&!eu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function pv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function JI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ft{constructor(e,n){this.comparator=e,this.root=n||bt.EMPTY}insert(e,n){return new ft(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ql(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ql(this.root,e,this.comparator,!1)}getReverseIterator(){return new ql(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ql(this.root,e,this.comparator,!0)}}class ql{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??bt.RED,this.left=s??bt.EMPTY,this.right=i??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new bt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return bt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(t,e,n,r,s){return this}insert(t,e,n){return new bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mv(this.data.getIterator())}getIteratorFrom(e){return new mv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class mv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class pn{constructor(e){this.fields=e,e.sort(Mt.comparator)}static empty(){return new pn([])}unionWith(e){let n=new ht(Mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new pn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class HV extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new HV("Invalid base64 string: "+s):s}}(e);return new Bt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const jV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function is(t){if(qe(!!t),typeof t=="string"){let e=0;const n=jV.exec(t);if(qe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ji(t){return typeof t=="string"?Bt.fromBase64String(t):Bt.fromUint8Array(t)}/**
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
 */function ZI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function eC(t){const e=t.mapValue.fields.__previous_value__;return ZI(e)?eC(e):e}function Aa(t){const e=is(t.mapValue.fields.__local_write_time__.timestampValue);return new ut(e.seconds,e.nanos)}/**
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
 */class qV{constructor(e,n,r,s,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ra{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ra&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Wl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ZI(t)?4:WV(t)?9007199254740991:10:fe()}function Jn(t,e){if(t===e)return!0;const n=Vs(t);if(n!==Vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Aa(t).isEqual(Aa(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=is(r.timestampValue),o=is(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return ji(r.bytesValue).isEqual(ji(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return it(r.geoPointValue.latitude)===it(s.geoPointValue.latitude)&&it(r.geoPointValue.longitude)===it(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return it(r.integerValue)===it(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=it(r.doubleValue),o=it(s.doubleValue);return i===o?eu(i)===eu(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Hi(t.arrayValue.values||[],e.arrayValue.values||[],Jn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(pv(i)!==pv(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Jn(i[a],o[a])))return!1;return!0}(t,e);default:return fe()}}function ka(t,e){return(t.values||[]).find(n=>Jn(n,e))!==void 0}function qi(t,e){if(t===e)return 0;const n=Vs(t),r=Vs(e);if(n!==r)return Oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Oe(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=it(s.integerValue||s.doubleValue),a=it(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return gv(t.timestampValue,e.timestampValue);case 4:return gv(Aa(t),Aa(e));case 5:return Oe(t.stringValue,e.stringValue);case 6:return function(s,i){const o=ji(s),a=ji(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Oe(o[l],a[l]);if(c!==0)return c}return Oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=Oe(it(s.latitude),it(i.latitude));return o!==0?o:Oe(it(s.longitude),it(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=qi(o[l],a[l]);if(c)return c}return Oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Wl.mapValue&&i===Wl.mapValue)return 0;if(s===Wl.mapValue)return 1;if(i===Wl.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=Oe(a[u],c[u]);if(h!==0)return h;const d=qi(o[a[u]],l[c[u]]);if(d!==0)return d}return Oe(a.length,c.length)}(t.mapValue,e.mapValue);default:throw fe()}}function gv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Oe(t,e);const n=is(t),r=is(e),s=Oe(n.seconds,r.seconds);return s!==0?s:Oe(n.nanos,r.nanos)}function Wi(t){return Nf(t)}function Nf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=is(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ji(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,re.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Nf(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Nf(r.fields[a])}`;return i+"}"}(t.mapValue):fe();var e,n}function yv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Of(t){return!!t&&"integerValue"in t}function Wm(t){return!!t&&"arrayValue"in t}function _v(t){return!!t&&"nullValue"in t}function vv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function lc(t){return!!t&&"mapValue"in t}function Zo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ys(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Zo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function WV(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!lc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zo(n)}setAll(e){let n=Mt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Zo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());lc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];lc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ys(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Zt(Zo(this.value))}}function tC(t){const e=[];return Ys(t.fields,(n,r)=>{const s=new Mt([n]);if(lc(r)){const i=tC(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new pn(e)}/**
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
 */class Dt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Dt(e,0,ge.min(),ge.min(),ge.min(),Zt.empty(),0)}static newFoundDocument(e,n,r,s){return new Dt(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new Dt(e,2,n,ge.min(),ge.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new Dt(e,3,n,ge.min(),ge.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class tu{constructor(e,n){this.position=e,this.inclusive=n}}function wv(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=qi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ev(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ai{constructor(e,n="asc"){this.field=e,this.dir=n}}function zV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class nC{}class ot extends nC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new GV(e,n,r):n==="array-contains"?new XV(e,r):n==="in"?new JV(e,r):n==="not-in"?new ZV(e,r):n==="array-contains-any"?new eB(e,r):new ot(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new YV(e,r):new QV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qi(n,this.value)):n!==null&&Vs(this.value)===Vs(n)&&this.matchesComparison(qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Un extends nC{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Un(e,n)}matches(e){return rC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function rC(t){return t.op==="and"}function sC(t){return KV(t)&&rC(t)}function KV(t){for(const e of t.filters)if(e instanceof Un)return!1;return!0}function Pf(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+Wi(t.value);if(sC(t))return t.filters.map(e=>Pf(e)).join(",");{const e=t.filters.map(n=>Pf(n)).join(",");return`${t.op}(${e})`}}function iC(t,e){return t instanceof ot?function(n,r){return r instanceof ot&&n.op===r.op&&n.field.isEqual(r.field)&&Jn(n.value,r.value)}(t,e):t instanceof Un?function(n,r){return r instanceof Un&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&iC(i,r.filters[o]),!0):!1}(t,e):void fe()}function oC(t){return t instanceof ot?function(e){return`${e.field.canonicalString()} ${e.op} ${Wi(e.value)}`}(t):t instanceof Un?function(e){return e.op.toString()+" {"+e.getFilters().map(oC).join(" ,")+"}"}(t):"Filter"}class GV extends ot{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class YV extends ot{constructor(e,n){super(e,"in",n),this.keys=aC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QV extends ot{constructor(e,n){super(e,"not-in",n),this.keys=aC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function aC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class XV extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wm(n)&&ka(n.arrayValue,this.value)}}class JV extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ka(this.value.arrayValue,n)}}class ZV extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ka(this.value.arrayValue,n)}}class eB extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ka(this.value.arrayValue,r))}}/**
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
 */class tB{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function bv(t,e=null,n=[],r=[],s=null,i=null,o=null){return new tB(t,e,n,r,s,i,o)}function zm(t){const e=ye(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Xu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wi(r)).join(",")),e.ft=n}return e.ft}function Km(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ev(t.startAt,e.startAt)&&Ev(t.endAt,e.endAt)}function Df(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Qs{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function nB(t,e,n,r,s,i,o,a){return new Qs(t,e,n,r,s,i,o,a)}function Gm(t){return new Qs(t)}function Tv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ym(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ju(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function lC(t){return t.collectionGroup!==null}function Ri(t){const e=ye(t);if(e.dt===null){e.dt=[];const n=Ju(e),r=Ym(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Ai(n)),e.dt.push(new Ai(Mt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ai(Mt.keyField(),i))}}}return e.dt}function wr(t){const e=ye(t);if(!e.wt)if(e.limitType==="F")e.wt=bv(e.path,e.collectionGroup,Ri(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ri(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ai(i.field,o))}const r=e.endAt?new tu(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new tu(e.startAt.position,e.startAt.inclusive):null;e.wt=bv(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.wt}function xf(t,e){e.getFirstInequalityField(),Ju(t);const n=t.filters.concat([e]);return new Qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nu(t,e,n){return new Qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zu(t,e){return Km(wr(t),wr(e))&&t.limitType===e.limitType}function cC(t){return`${zm(wr(t))}|lt:${t.limitType}`}function Mf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>oC(r)).join(", ")}]`),Xu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wi(r)).join(",")),`Target(${n})`}(wr(t))}; limitType=${t.limitType})`}function eh(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):re.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of Ri(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=wv(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Ri(n),r)||n.endAt&&!function(s,i,o){const a=wv(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Ri(n),r))}(t,e)}function rB(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uC(t){return(e,n)=>{let r=!1;for(const s of Ri(t)){const i=sB(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function sB(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),l=o.data.field(s);return a!==null&&l!==null?qi(a,l):fe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe()}}/**
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
 */class fo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ys(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return JI(this.inner)}size(){return this.innerSize}}/**
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
 */const iB=new ft(re.comparator);function Er(){return iB}const hC=new ft(re.comparator);function Fo(...t){let e=hC;for(const n of t)e=e.insert(n.key,n);return e}function dC(t){let e=hC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function bs(){return ea()}function fC(){return ea()}function ea(){return new fo(t=>t.toString(),(t,e)=>t.isEqual(e))}const oB=new ft(re.comparator),aB=new ht(re.comparator);function we(...t){let e=aB;for(const n of t)e=e.add(n);return e}const lB=new ht(Oe);function pC(){return lB}/**
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
 */function mC(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eu(e)?"-0":e}}function gC(t){return{integerValue:""+t}}function cB(t,e){return BV(e)?gC(e):mC(t,e)}/**
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
 */class th{constructor(){this._=void 0}}function uB(t,e,n){return t instanceof Na?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Oa?_C(t,e):t instanceof Pa?vC(t,e):function(r,s){const i=yC(r,s),o=Iv(i)+Iv(r._t);return Of(i)&&Of(r._t)?gC(o):mC(r.serializer,o)}(t,e)}function hB(t,e,n){return t instanceof Oa?_C(t,e):t instanceof Pa?vC(t,e):n}function yC(t,e){return t instanceof ru?Of(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Na extends th{}class Oa extends th{constructor(e){super(),this.elements=e}}function _C(t,e){const n=wC(e);for(const r of t.elements)n.some(s=>Jn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Pa extends th{constructor(e){super(),this.elements=e}}function vC(t,e){let n=wC(e);for(const r of t.elements)n=n.filter(s=>!Jn(s,r));return{arrayValue:{values:n}}}class ru extends th{constructor(e,n){super(),this.serializer=e,this._t=n}}function Iv(t){return it(t.integerValue||t.doubleValue)}function wC(t){return Wm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class dB{constructor(e,n){this.field=e,this.transform=n}}function fB(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Oa&&r instanceof Oa||n instanceof Pa&&r instanceof Pa?Hi(n.elements,r.elements,Jn):n instanceof ru&&r instanceof ru?Jn(n._t,r._t):n instanceof Na&&r instanceof Na}(t.transform,e.transform)}class pB{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nh{}function EC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rh(t.key,tn.none()):new dl(t.key,t.data,tn.none());{const n=t.data,r=Zt.empty();let s=new ht(Mt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new cs(t.key,r,new pn(s.toArray()),tn.none())}}function mB(t,e,n){t instanceof dl?function(r,s,i){const o=r.value.clone(),a=Sv(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof cs?function(r,s,i){if(!cc(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Sv(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(bC(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function ta(t,e,n,r){return t instanceof dl?function(s,i,o,a){if(!cc(s.precondition,i))return o;const l=s.value.clone(),c=Av(s.fieldTransforms,a,i);return l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof cs?function(s,i,o,a){if(!cc(s.precondition,i))return o;const l=Av(s.fieldTransforms,a,i),c=i.data;return c.setAll(bC(s)),c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return cc(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function gB(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=yC(r.transform,s||null);i!=null&&(n===null&&(n=Zt.empty()),n.set(r.field,i))}return n||null}function Cv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Hi(n,r,(s,i)=>fB(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class dl extends nh{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class cs extends nh{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function bC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Sv(t,e,n){const r=new Map;qe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,hB(o,a,n[s]))}return r}function Av(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,uB(i,o,e))}return r}class rh extends nh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yB extends nh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _B{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&mB(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ta(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ta(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fC();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=EC(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&Hi(this.mutations,e.mutations,(n,r)=>Cv(n,r))&&Hi(this.baseMutations,e.baseMutations,(n,r)=>Cv(n,r))}}class Qm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){qe(e.mutations.length===r.length);let s=oB;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Qm(e,n,r,s)}}/**
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
 */class vB{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class wB{constructor(e){this.count=e}}/**
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
 */var st,Ie;function EB(t){switch(t){default:return fe();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function TC(t){if(t===void 0)return vr("GRPC error has no .code"),x.UNKNOWN;switch(t){case st.OK:return x.OK;case st.CANCELLED:return x.CANCELLED;case st.UNKNOWN:return x.UNKNOWN;case st.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case st.INTERNAL:return x.INTERNAL;case st.UNAVAILABLE:return x.UNAVAILABLE;case st.UNAUTHENTICATED:return x.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case st.NOT_FOUND:return x.NOT_FOUND;case st.ALREADY_EXISTS:return x.ALREADY_EXISTS;case st.PERMISSION_DENIED:return x.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case st.ABORTED:return x.ABORTED;case st.OUT_OF_RANGE:return x.OUT_OF_RANGE;case st.UNIMPLEMENTED:return x.UNIMPLEMENTED;case st.DATA_LOSS:return x.DATA_LOSS;default:return fe()}}(Ie=st||(st={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Xm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return zl}static getOrCreateInstance(){return zl===null&&(zl=new Xm),zl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let zl=null;/**
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
 */class sh{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,fl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sh(ge.min(),s,pC(),Er(),we())}}class fl{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fl(r,n,we(),we(),we())}}/**
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
 */class uc{constructor(e,n,r,s){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=s}}class IC{constructor(e,n){this.targetId=e,this.Et=n}}class CC{constructor(e,n,r=Bt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Rv{constructor(){this.At=0,this.Rt=Nv(),this.vt=Bt.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=we(),n=we(),r=we();return this.Rt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:fe()}}),new fl(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=Nv()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class bB{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Er(),this.qt=kv(),this.Ut=new ht(Oe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:fe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,s)=>{this.Wt(s)&&n(s)})}Jt(e){var n;const r=e.targetId,s=e.Et.count,i=this.Yt(r);if(i){const o=i.target;if(Df(o))if(s===0){const a=new re(o.path);this.Qt(r,a,Dt.newNoDocument(a,ge.min()))}else qe(s===1);else{const a=this.Zt(r);a!==s&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=Xm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Df(a.target)){const l=new re(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Dt.newNoDocument(l,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let r=we();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const s=new sh(e,n,this.Ut,this.Lt,r);return this.Lt=Er(),this.qt=kv(),this.Ut=new ht(Oe),s}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const s=this.jt(e);this.te(e,n)?s.Nt(n,1):s.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Rv,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new ht(Oe),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Rv),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function kv(){return new ft(re.comparator)}function Nv(){return new ft(re.comparator)}/**
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
 */const TB=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),IB=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),CB=(()=>({and:"AND",or:"OR"}))();class SB{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function su(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AB(t,e){return su(t,e.toTimestamp())}function Yn(t){return qe(!!t),ge.fromTimestamp(function(e){const n=is(e);return new ut(n.seconds,n.nanos)}(t))}function Jm(t,e){return function(n){return new Ue(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function AC(t){const e=Ue.fromString(t);return qe(OC(e)),e}function Lf(t,e){return Jm(t.databaseId,e.path)}function ld(t,e){const n=AC(e);if(n.get(1)!==t.databaseId.projectId)throw new J(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(RC(n))}function Ff(t,e){return Jm(t.databaseId,e)}function RB(t){const e=AC(t);return e.length===4?Ue.emptyPath():RC(e)}function Uf(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function RC(t){return qe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ov(t,e,n){return{name:Lf(t,e),fields:n.value.mapValue.fields}}function kB(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,c){return l.useProto3Json?(qe(c===void 0||typeof c=="string"),Bt.fromBase64String(c||"")):(qe(c===void 0||c instanceof Uint8Array),Bt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?x.UNKNOWN:TC(l.code);return new J(c,l.message||"")}(o);n=new CC(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ld(t,r.document.name),i=Yn(r.document.updateTime),o=r.document.createTime?Yn(r.document.createTime):ge.min(),a=new Zt({mapValue:{fields:r.document.fields}}),l=Dt.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new uc(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ld(t,r.document),i=r.readTime?Yn(r.readTime):ge.min(),o=Dt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new uc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ld(t,r.document),i=r.removedTargetIds||[];n=new uc([],i,s,null)}else{if(!("filter"in e))return fe();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new wB(s),o=r.targetId;n=new IC(o,i)}}return n}function NB(t,e){let n;if(e instanceof dl)n={update:Ov(t,e.key,e.value)};else if(e instanceof rh)n={delete:Lf(t,e.key)};else if(e instanceof cs)n={update:Ov(t,e.key,e.data),updateMask:$B(e.fieldMask)};else{if(!(e instanceof yB))return fe();n={verify:Lf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Na)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Oa)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Pa)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ru)return{fieldPath:i.field.canonicalString(),increment:o._t};throw fe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:AB(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:fe()}(t,e.precondition)),n}function OB(t,e){return t&&t.length>0?(qe(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Yn(r.updateTime):Yn(s);return i.isEqual(ge.min())&&(i=Yn(s)),new pB(i,r.transformResults||[])}(n,e))):[]}function PB(t,e){return{documents:[Ff(t,e.path)]}}function DB(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ff(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ff(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return NC(Un.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:li(u.field),direction:LB(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(l,c){return l.useProto3Json||Xu(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function xB(t){let e=RB(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){qe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=kC(u);return h instanceof Un&&sC(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ai(ci(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Xu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new tu(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new tu(d,h)}(n.endAt)),nB(e,s,o,i,a,"F",l,c)}function MB(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return fe()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function kC(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ci(e.unaryFilter.field);return ot.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ci(e.unaryFilter.field);return ot.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ci(e.unaryFilter.field);return ot.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ci(e.unaryFilter.field);return ot.create(i,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(t):t.fieldFilter!==void 0?function(e){return ot.create(ci(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Un.create(e.compositeFilter.filters.map(n=>kC(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return fe()}}(e.compositeFilter.op))}(t):fe()}function LB(t){return TB[t]}function FB(t){return IB[t]}function UB(t){return CB[t]}function li(t){return{fieldPath:t.canonicalString()}}function ci(t){return Mt.fromServerFormat(t.fieldPath)}function NC(t){return t instanceof ot?function(e){if(e.op==="=="){if(vv(e.value))return{unaryFilter:{field:li(e.field),op:"IS_NAN"}};if(_v(e.value))return{unaryFilter:{field:li(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(vv(e.value))return{unaryFilter:{field:li(e.field),op:"IS_NOT_NAN"}};if(_v(e.value))return{unaryFilter:{field:li(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:li(e.field),op:FB(e.op),value:e.value}}}(t):t instanceof Un?function(e){const n=e.getFilters().map(r=>NC(r));return n.length===1?n[0]:{compositeFilter:{op:UB(e.op),filters:n}}}(t):fe()}function $B(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function OC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Rs{constructor(e,n,r,s,i=ge.min(),o=ge.min(),a=Bt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Rs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Rs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Rs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class VB{constructor(e){this.se=e}}function BB(t){const e=xB({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nu(e,e.limit,"L"):e}/**
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
 */class HB{constructor(){this.He=new jB}addToCollectionParentIndex(e,n){return this.He.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(ss.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(ss.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class jB{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ht(Ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ht(Ue.comparator)).toArray()}}/**
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
 */class zi{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new zi(0)}static bn(){return new zi(-1)}}/**
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
 */class qB{constructor(){this.changes=new fo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class WB{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class zB{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ta(r.mutation,s,pn.empty(),ut.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const s=bs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Fo();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=bs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Er();const o=ea(),a=ea();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof cs)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),ta(u.mutation,c,u.mutation.getFieldMask(),ut.now())):o.set(c.key,pn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new WB(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ea();let s=new ft((o,a)=>o-a),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||pn.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||we()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=fC();u.forEach(d=>{if(!i.has(d)){const f=EC(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return re.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):lC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(bs());let a=-1,l=i;return o.next(c=>$.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?$.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,we())).next(u=>({batchId:a,changes:dC(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=Fo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Fo();return this.indexManager.getCollectionParents(e,s).next(o=>$.forEach(o,a=>{const l=function(c,u){return new Qs(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,Dt.newInvalidDocument(c)))});let o=Fo();return i.forEach((a,l)=>{const c=s.get(a);c!==void 0&&ta(c.mutation,l,pn.empty(),ut.now()),eh(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class KB{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return $.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Yn(r.createTime)}),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:BB(r.bundledQuery),readTime:Yn(r.readTime)}}(n)),$.resolve()}}/**
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
 */class GB{constructor(){this.overlays=new ft(re.comparator),this.ts=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=bs();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.re(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.ts.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=bs(),i=n.length+1,o=new re(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ft((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=bs(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=bs(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return $.resolve(a)}re(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.ts.get(s.largestBatchId).delete(r.key);this.ts.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vB(n,r));let i=this.ts.get(n);i===void 0&&(i=we(),this.ts.set(n,i)),this.ts.set(n,i.add(r.key))}}/**
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
 */class Zm{constructor(){this.es=new ht(mt.ns),this.ss=new ht(mt.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new mt(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new mt(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new re(new Ue([])),r=new mt(n,e),s=new mt(n,e+1),i=[];return this.ss.forEachInRange([r,s],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new re(new Ue([])),r=new mt(n,e),s=new mt(n,e+1);let i=we();return this.ss.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new mt(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class mt{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return re.comparator(e.key,n.key)||Oe(e.ds,n.ds)}static rs(e,n){return Oe(e.ds,n.ds)||re.comparator(e.key,n.key)}}/**
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
 */class YB{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new ht(mt.ns)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _B(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this._s=this._s.add(new mt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ys(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new mt(n,0),s=new mt(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([r,s],o=>{const a=this.gs(o.ds);i.push(a)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ht(Oe);return n.forEach(s=>{const i=new mt(s,0),o=new mt(s,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{r=r.add(a.ds)})}),$.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new mt(new re(i),0);let a=new ht(Oe);return this._s.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.ds)),!0)},o),$.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const s=this.gs(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){qe(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return $.forEach(n.mutations,s=>{const i=new mt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new mt(n,0),s=this._s.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class QB{constructor(e){this.Ts=e,this.docs=new ft(re.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(e,n){let r=Er();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Dt.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Er();const o=n.path,a=new re(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||UV(FV(u),r)<=0||(s.has(u.key)||eh(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){fe()}Es(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new XB(this)}getSize(e){return $.resolve(this.size)}}class XB extends qB{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Jn.addEntry(e,s)):this.Jn.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class JB{constructor(e){this.persistence=e,this.As=new fo(n=>zm(n),Km),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Zm,this.targetCount=0,this.bs=zi.vn()}forEachTarget(e,n){return this.As.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),$.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new zi(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Sn(n),$.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.vs.containsKey(n))}}/**
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
 */class ZB{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new qm(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new JB(this),this.indexManager=new HB,this.remoteDocumentCache=function(r){return new QB(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new VB(n),this.xs=new KB(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GB,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new YB(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new eH(this.Vs.next());return this.referenceDelegate.Ns(),r(s).next(i=>this.referenceDelegate.ks(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Os(e,n){return $.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class eH extends VV{constructor(e){super(),this.currentSequenceNumber=e}}class eg{constructor(e){this.persistence=e,this.$s=new Zm,this.Ms=null}static Fs(e){return new eg(e)}get Bs(){if(this.Ms)return this.Ms;throw fe()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),$.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(s=>this.Bs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Bs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Bs,r=>{const s=re.fromPath(r);return this.Ls(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return $.or([()=>$.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class tg{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=s}static Di(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new tg(e,n.fromCache,r,s)}}/**
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
 */class tH{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ni(e,n).next(i=>i||this.ki(e,n,s,r)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(Tv(n))return $.resolve(null);let r=wr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=nu(n,null,"F"),r=wr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=we(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.$i(n,a);return this.Mi(n,c,o,l.readTime)?this.Ni(e,nu(n,null,"F")):this.Fi(e,c,n,l)}))})))}ki(e,n,r,s){return Tv(n)||s.isEqual(ge.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,r,s)?this.Oi(e,n):(fv()<=Re.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mf(n)),this.Fi(e,o,n,LV(s,-1)))})}$i(e,n){let r=new ht(uC(e));return n.forEach((s,i)=>{eh(e,i)&&(r=r.add(i))}),r}Mi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Oi(e,n){return fv()<=Re.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Mf(n)),this.xi.getDocumentsMatchingQuery(e,n,ss.min())}Fi(e,n,r,s){return this.xi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class nH{constructor(e,n,r,s){this.persistence=e,this.Bi=n,this.serializer=s,this.Li=new ft(Oe),this.qi=new fo(i=>zm(i),Km),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zB(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function rH(t,e,n,r){return new nH(t,e,n,r)}async function PC(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=we();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function sH(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=$.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(p=>{const y=l.docVersions.get(f);qe(y!==null),p.version.compareTo(y)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=we();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function DC(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function iH(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});s=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Bt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(p,y,b){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,u)&&a.push(n.Ds.updateTargetData(i,f))});let l=Er(),c=we();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(oH(i,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!r.isEqual(ge.min())){const u=n.Ds.getLastRemoteSnapshotVersion(i).next(h=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return $.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.Li=s,i))}function oH(t,e,n){let r=we(),s=we();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Er();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ne("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:s}})}function aH(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lH(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ds.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Ds.allocateTargetId(r).next(o=>(s=new Rs(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Li.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function $f(t,e,n){const r=ye(t),s=r.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!hl(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(s.target)}function Pv(t,e,n){const r=ye(t);let s=ge.min(),i=we();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ye(a),h=u.qi.get(c);return h!==void 0?$.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(r,o,wr(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:we())).next(a=>(cH(r,rB(e),a),{documents:a,Wi:i})))}function cH(t,e,n){let r=t.Ui.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ui.set(e,r)}class Dv{constructor(){this.activeTargetIds=pC()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uH{constructor(){this.Br=new Dv,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Dv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class hH{qr(e){}shutdown(){}}/**
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
 */class xv{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Kl=null;function cd(){return Kl===null?Kl=268435456+Math.round(2147483648*Math.random()):Kl++,"0x"+Kl.toString(16)}/**
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
 */const dH={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class fH{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const kt="WebChannelConnection";class pH extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,s,i){const o=cd(),a=this.ao(e,n);ne("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.ho(l,s,i),this.lo(e,a,l,r).then(c=>(ne("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw Zc("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}fo(e,n,r,s,i,o){return this.co(e,n,r,s,i)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ho,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ao(e,n){const r=dH[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,s){const i=cd();return new Promise((o,a)=>{const l=new SV;l.setWithCredentials(!0),l.listenOnce(TV.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ad.NO_ERROR:const u=l.getResponseJson();ne(kt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case ad.TIMEOUT:ne(kt,`RPC '${e}' ${i} timed out`),a(new J(x.DEADLINE_EXCEEDED,"Request time out"));break;case ad.HTTP_ERROR:const h=l.getStatus();if(ne(kt,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(y){const b=y.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(b)>=0?b:x.UNKNOWN}(f.status);a(new J(p,f.message))}else a(new J(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new J(x.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{ne(kt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);ne(kt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}wo(e,n,r){const s=cd(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=EV(),a=bV(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new CV({})),this.ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");ne(kt,`Creating RPC '${e}' stream ${s}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,d=!1;const f=new fH({Wr:y=>{d?ne(kt,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(h||(ne(kt,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),ne(kt,`RPC '${e}' stream ${s} sending:`,y),u.send(y))},Hr:()=>u.close()}),p=(y,b,_)=>{y.listen(b,m=>{try{_(m)}catch(w){setTimeout(()=>{throw w},0)}})};return p(u,jl.EventType.OPEN,()=>{d||ne(kt,`RPC '${e}' stream ${s} transport opened.`)}),p(u,jl.EventType.CLOSE,()=>{d||(d=!0,ne(kt,`RPC '${e}' stream ${s} transport closed`),f.so())}),p(u,jl.EventType.ERROR,y=>{d||(d=!0,Zc(kt,`RPC '${e}' stream ${s} transport errored:`,y),f.so(new J(x.UNAVAILABLE,"The operation could not be completed")))}),p(u,jl.EventType.MESSAGE,y=>{var b;if(!d){const _=y.data[0];qe(!!_);const m=_,w=m.error||((b=m[0])===null||b===void 0?void 0:b.error);if(w){ne(kt,`RPC '${e}' stream ${s} received error:`,w);const C=w.status;let I=function(S){const T=st[S];if(T!==void 0)return TC(T)}(C),A=w.message;I===void 0&&(I=x.INTERNAL,A="Unknown error status: "+C+" with message "+w.message),d=!0,f.so(new J(I,A)),u.close()}else ne(kt,`RPC '${e}' stream ${s} received:`,_),f.io(_)}}),p(a,IV.STAT_EVENT,y=>{y.stat===hv.PROXY?ne(kt,`RPC '${e}' stream ${s} detected buffering proxy`):y.stat===hv.NOPROXY&&ne(kt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{f.no()},0),f}}function ud(){return typeof document<"u"?document:null}/**
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
 */function ih(t){return new SB(t,!0)}/**
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
 */class xC{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=s,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class MC{constructor(e,n,r,s,i,o,a,l){this.Ws=e,this.bo=r,this.Po=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new xC(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(vr(n.toString()),vr("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Vo===n&&this.Ko(r,s)},r=>{e(()=>{const s=new J(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(s)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(s=>{r(()=>this.Go(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mH extends MC{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=kB(this.serializer,e),r=function(s){if(!("targetChange"in s))return ge.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ge.min():i.readTime?Yn(i.readTime):ge.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=Uf(this.serializer),n.addTarget=function(s,i){let o;const a=i.target;return o=Df(a)?{documents:PB(s,a)}:{query:DB(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=SC(s,i.resumeToken):i.snapshotVersion.compareTo(ge.min())>0&&(o.readTime=su(s,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=MB(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=Uf(this.serializer),n.removeTarget=e,this.Fo(n)}}class gH extends MC{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(qe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=OB(e.writeResults,e.commitTime),r=Yn(e.commitTime);return this.listener.Zo(r,n)}return qe(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Uf(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>NB(this.serializer,r))};this.Fo(n)}}/**
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
 */class yH extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new J(x.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.co(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new J(x.UNKNOWN,s.toString())})}fo(e,n,r,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(x.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class _H{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(vr(n),this.ru=!1):ne("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class vH{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{r.enqueueAndForget(async()=>{Xs(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ye(a);l.du.add(4),await pl(l),l.mu.set("Unknown"),l.du.delete(4),await oh(l)}(this))})}),this.mu=new _H(r,s)}}async function oh(t){if(Xs(t))for(const e of t.wu)await e(!0)}async function pl(t){for(const e of t.wu)await e(!1)}function LC(t,e){const n=ye(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),sg(n)?rg(n):po(n).No()&&ng(n,e))}function FC(t,e){const n=ye(t),r=po(n);n.fu.delete(e),r.No()&&UC(n,e),n.fu.size===0&&(r.No()?r.$o():Xs(n)&&n.mu.set("Unknown"))}function ng(t,e){t.gu.Ot(e.targetId),po(t).jo(e)}function UC(t,e){t.gu.Ot(e),po(t).Wo(e)}function rg(t){t.gu=new bB({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),po(t).start(),t.mu.ou()}function sg(t){return Xs(t)&&!po(t).xo()&&t.fu.size>0}function Xs(t){return ye(t).du.size===0}function $C(t){t.gu=void 0}async function wH(t){t.fu.forEach((e,n)=>{ng(t,e)})}async function EH(t,e){$C(t),sg(t)?(t.mu.au(e),rg(t)):t.mu.set("Unknown")}async function bH(t,e,n){if(t.mu.set("Online"),e instanceof CC&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await iu(t,r)}else if(e instanceof uc?t.gu.Kt(e):e instanceof IC?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(ge.min()))try{const r=await DC(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.gu.Xt(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.fu.get(l);c&&s.fu.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const l=s.fu.get(a);if(!l)return;s.fu.set(a,l.withResumeToken(Bt.EMPTY_BYTE_STRING,l.snapshotVersion)),UC(s,a);const c=new Rs(l.target,a,1,l.sequenceNumber);ng(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await iu(t,r)}}async function iu(t,e,n){if(!hl(e))throw e;t.du.add(1),await pl(t),t.mu.set("Offline"),n||(n=()=>DC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await oh(t)})}function VC(t,e){return e().catch(n=>iu(t,n,e))}async function ah(t){const e=ye(t),n=os(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;TH(e);)try{const s=await aH(e.localStore,r);if(s===null){e.lu.length===0&&n.$o();break}r=s.batchId,IH(e,s)}catch(s){await iu(e,s)}BC(e)&&HC(e)}function TH(t){return Xs(t)&&t.lu.length<10}function IH(t,e){t.lu.push(e);const n=os(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function BC(t){return Xs(t)&&!os(t).xo()&&t.lu.length>0}function HC(t){os(t).start()}async function CH(t){os(t).tu()}async function SH(t){const e=os(t);for(const n of t.lu)e.Yo(n.mutations)}async function AH(t,e,n){const r=t.lu.shift(),s=Qm.from(r,e,n);await VC(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ah(t)}async function RH(t,e){e&&os(t).Jo&&await async function(n,r){if(s=r.code,EB(s)&&s!==x.ABORTED){const i=n.lu.shift();os(n).Oo(),await VC(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await ah(n)}var s}(t,e),BC(t)&&HC(t)}async function Mv(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=Xs(n);n.du.add(3),await pl(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await oh(n)}async function kH(t,e){const n=ye(t);e?(n.du.delete(2),await oh(n)):e||(n.du.add(2),await pl(n),n.mu.set("Unknown"))}function po(t){return t.yu||(t.yu=function(e,n,r){const s=ye(e);return s.nu(),new mH(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{Jr:wH.bind(null,t),Zr:EH.bind(null,t),zo:bH.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),sg(t)?rg(t):t.mu.set("Unknown")):(await t.yu.stop(),$C(t))})),t.yu}function os(t){return t.pu||(t.pu=function(e,n,r){const s=ye(e);return s.nu(),new gH(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{Jr:CH.bind(null,t),Zr:RH.bind(null,t),Xo:SH.bind(null,t),Zo:AH.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await ah(t)):(await t.pu.stop(),t.lu.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class ig{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new ig(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function og(t,e){if(vr("AsyncQueue",`${e}: ${t}`),hl(t))return new J(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ki{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Fo(),this.sortedSet=new ft(this.comparator)}static emptySet(e){return new ki(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ki)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ki;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Lv{constructor(){this.Iu=new ft(re.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):fe():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ki{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ki(e,n,ki.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class NH{constructor(){this.Eu=void 0,this.listeners=[]}}class OH{constructor(){this.queries=new fo(e=>cC(e),Zu),this.onlineState="Unknown",this.Au=new Set}}async function jC(t,e){const n=ye(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new NH),s)try{i.Eu=await n.onListen(r)}catch(o){const a=og(o,`Initialization of query '${Mf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&ag(n)}async function qC(t,e){const n=ye(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function PH(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(s)&&(r=!0);o.Eu=s}}r&&ag(n)}function DH(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function ag(t){t.Au.forEach(e=>{e.next()})}class WC{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ki(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class zC{constructor(e){this.key=e}}class KC{constructor(e){this.key=e}}class xH{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=we(),this.mutatedKeys=we(),this.Ku=uC(e),this.Gu=new ki(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new Lv,s=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=eh(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let b=!1;d&&f?d.data.isEqual(f.data)?p!==y&&(r.track({type:3,doc:f}),b=!0):this.Wu(d,f)||(r.track({type:2,doc:f}),b=!0,(l&&this.Ku(f,l)>0||c&&this.Ku(f,c)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),b=!0):d&&!f&&(r.track({type:1,doc:d}),b=!0,(l||c)&&(a=!0)),b&&(f?(o=o.add(f),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Gu:o,ju:r,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((c,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return f(h)-f(d)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,i.length!==0||l?{snapshot:new Ki(this.query,e.Gu,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Lv,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=we(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new KC(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new zC(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=we();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Ki.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class MH{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LH{constructor(e){this.key=e,this.ec=!1}}class FH{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new fo(a=>cC(a),Zu),this.ic=new Map,this.rc=new Set,this.oc=new ft(re.comparator),this.uc=new Map,this.cc=new Zm,this.ac={},this.hc=new Map,this.lc=zi.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function UH(t,e){const n=GH(t);let r,s;const i=n.sc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.tc();else{const o=await lH(n.localStore,wr(e));n.isPrimaryClient&&LC(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await $H(n,e,r,a==="current",o.resumeToken)}return s}async function $H(t,e,n,r,s){t.dc=(h,d,f)=>async function(p,y,b,_){let m=y.view.zu(b);m.Mi&&(m=await Pv(p.localStore,y.query,!1).then(({documents:I})=>y.view.zu(I,m)));const w=_&&_.targetChanges.get(y.targetId),C=y.view.applyChanges(m,p.isPrimaryClient,w);return Uv(p,y.targetId,C.Yu),C.snapshot}(t,h,d,f);const i=await Pv(t.localStore,e,!0),o=new xH(e,i.Wi),a=o.zu(i.documents),l=fl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Uv(t,n,c.Yu);const u=new MH(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function VH(t,e){const n=ye(t),r=n.sc.get(e),s=n.ic.get(r.targetId);if(s.length>1)return n.ic.set(r.targetId,s.filter(i=>!Zu(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await $f(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),FC(n.remoteStore,r.targetId),Vf(n,r.targetId)}).catch(ul)):(Vf(n,r.targetId),await $f(n.localStore,r.targetId,!0))}async function BH(t,e,n){const r=YH(t);try{const s=await function(i,o){const a=ye(i),l=ut.now(),c=o.reduce((d,f)=>d.add(f.key),we());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Er(),p=we();return a.Ki.getEntries(d,c).next(y=>{f=y,f.forEach((b,_)=>{_.isValidDocument()||(p=p.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{u=y;const b=[];for(const _ of o){const m=gB(_,u.get(_.key).overlayedDocument);m!=null&&b.push(new cs(_.key,m,tC(m.value.mapValue),tn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,b,o)}).next(y=>{h=y;const b=y.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(d,y.batchId,b)})}).then(()=>({batchId:h.batchId,changes:dC(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let l=i.ac[i.currentUser.toKey()];l||(l=new ft(Oe)),l=l.insert(o,a),i.ac[i.currentUser.toKey()]=l}(r,s.batchId,n),await ml(r,s.changes),await ah(r.remoteStore)}catch(s){const i=og(s,"Failed to persist write");n.reject(i)}}async function GC(t,e){const n=ye(t);try{const r=await iH(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.uc.get(i);o&&(qe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ec=!0:s.modifiedDocuments.size>0?qe(o.ec):s.removedDocuments.size>0&&(qe(o.ec),o.ec=!1))}),await ml(n,r,e)}catch(r){await ul(r)}}function Fv(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=ye(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&ag(a)}(r.eventManager,e),s.length&&r.nc.zo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HH(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.uc.get(e),i=s&&s.key;if(i){let o=new ft(re.comparator);o=o.insert(i,Dt.newNoDocument(i,ge.min()));const a=we().add(i),l=new sh(ge.min(),new Map,new ht(Oe),o,a);await GC(r,l),r.oc=r.oc.remove(i),r.uc.delete(e),lg(r)}else await $f(r.localStore,e,!1).then(()=>Vf(r,e,n)).catch(ul)}async function jH(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await sH(n.localStore,e);QC(n,r,null),YC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ml(n,s)}catch(s){await ul(s)}}async function qH(t,e,n){const r=ye(t);try{const s=await function(i,o){const a=ye(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(qe(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(r.localStore,e);QC(r,e,n),YC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ml(r,s)}catch(s){await ul(s)}}function YC(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function QC(t,e,n){const r=ye(t);let s=r.ac[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ac[r.currentUser.toKey()]=s}}function Vf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||XC(t,r)})}function XC(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(FC(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),lg(t))}function Uv(t,e,n){for(const r of n)r instanceof zC?(t.cc.addReference(r.key,e),WH(t,r)):r instanceof KC?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||XC(t,r.key)):fe()}function WH(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.rc.add(r),lg(t))}function lg(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new re(Ue.fromString(e)),r=t.lc.next();t.uc.set(r,new LH(n)),t.oc=t.oc.insert(n,r),LC(t.remoteStore,new Rs(wr(Gm(n.path)),r,2,qm.ct))}}async function ml(t,e,n){const r=ye(t),s=[],i=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=tg.Di(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.nc.zo(s),await async function(a,l){const c=ye(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>$.forEach(l,h=>$.forEach(h.Vi,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>$.forEach(h.Si,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!hl(u))throw u;ne("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Li.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);c.Li=c.Li.insert(h,p)}}}(r.localStore,i))}async function zH(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await PC(n.localStore,e);n.currentUser=e,function(s,i){s.hc.forEach(o=>{o.forEach(a=>{a.reject(new J(x.CANCELLED,i))})}),s.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ml(n,r.Qi)}}function KH(t,e){const n=ye(t),r=n.uc.get(e);if(r&&r.ec)return we().add(r.key);{let s=we();const i=n.ic.get(e);if(!i)return s;for(const o of i){const a=n.sc.get(o);s=s.unionWith(a.view.Qu)}return s}}function GH(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=GC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KH.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HH.bind(null,e),e.nc.zo=PH.bind(null,e.eventManager),e.nc.wc=DH.bind(null,e.eventManager),e}function YH(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jH.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qH.bind(null,e),e}class $v{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ih(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return rH(this.persistence,new tH,e.initialUser,this.serializer)}createPersistence(e){return new ZB(eg.Fs,this.serializer)}createSharedClientState(e){return new uH}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class QH{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zH.bind(null,this.syncEngine),await kH(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new OH}createDatastore(e){const n=ih(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new pH(s));var s;return function(i,o,a,l){return new yH(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Fv(this.syncEngine,a,0),o=xv.D()?new xv:new hH,new vH(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,l,c){const u=new FH(r,s,i,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ye(e);ne("RemoteStore","RemoteStore shutting down."),n.du.add(5),await pl(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class JC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):vr("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class XH{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Nt.UNAUTHENTICATED,this.clientId=XI.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{ne("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(ne("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new J(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=og(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hd(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await PC(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Vv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZH(t);ne("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Mv(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Mv(e.remoteStore,i)),t._onlineComponents=e}function JH(t){return t.name==="FirebaseError"?t.code===x.FAILED_PRECONDITION||t.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ZH(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await hd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!JH(n))throw n;Zc("Error using user provided cache. Falling back to memory cache: "+n),await hd(t,new $v)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await hd(t,new $v);return t._offlineComponents}async function ZC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await Vv(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await Vv(t,new QH))),t._onlineComponents}function ej(t){return ZC(t).then(e=>e.syncEngine)}async function eS(t){const e=await ZC(t),n=e.eventManager;return n.onListen=UH.bind(null,e.syncEngine),n.onUnlisten=VH.bind(null,e.syncEngine),n}function tj(t,e,n={}){const r=new fr;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,l){const c=new JC({next:h=>{i.enqueueAndForget(()=>qC(s,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new J(x.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new J(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new WC(Gm(o.path),c,{includeMetadataChanges:!0,xu:!0});return jC(s,u)}(await eS(t),t.asyncQueue,e,n,r)),r.promise}function nj(t,e,n={}){const r=new fr;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,l){const c=new JC({next:h=>{i.enqueueAndForget(()=>qC(s,u)),h.fromCache&&a.source==="server"?l.reject(new J(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new WC(o,c,{includeMetadataChanges:!0,xu:!0});return jC(s,u)}(await eS(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const Bv=new Map;/**
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
 */function cg(t,e,n){if(!n)throw new J(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rj(t,e,n,r){if(e===!0&&r===!0)throw new J(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hv(t){if(!re.isDocumentKey(t))throw new J(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jv(t){if(re.isDocumentKey(t))throw new J(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe()}function An(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lh(t);throw new J(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function sj(t,e){if(e<=0)throw new J(x.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class qv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new J(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,rj("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class gl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new J(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new J(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new AV;switch(n.type){case"firstParty":return new OV(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new J(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Bv.get(e);n&&(ne("ComponentProvider","Removing Datastore"),Bv.delete(e),n.terminate())}(this),Promise.resolve()}}function ij(t,e,n,r={}){var s;const i=(t=An(t,gl))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Zc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Nt.MOCK_USER;else{o=M0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new J(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Nt(l)}t._authCredentials=new RV(new QI(o,a))}}/**
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
 */class Gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gt(this.firestore,e,this._key)}}class Cr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cr(this.firestore,e,this._query)}}class Xr extends Cr{constructor(e,n,r){super(e,n,Gm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gt(this.firestore,null,new re(e))}withConverter(e){return new Xr(this.firestore,e,this._path)}}function PK(t,e,...n){if(t=ze(t),cg("collection","path",e),t instanceof gl){const r=Ue.fromString(e,...n);return jv(r),new Xr(t,null,r)}{if(!(t instanceof Gt||t instanceof Xr))throw new J(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return jv(r),new Xr(t.firestore,null,r)}}function DK(t,e){if(t=An(t,gl),cg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new J(x.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Cr(t,null,function(n){return new Qs(Ue.emptyPath(),n)}(e))}function xK(t,e,...n){if(t=ze(t),arguments.length===1&&(e=XI.A()),cg("doc","path",e),t instanceof gl){const r=Ue.fromString(e,...n);return Hv(r),new Gt(t,null,new re(r))}{if(!(t instanceof Gt||t instanceof Xr))throw new J(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Hv(r),new Gt(t.firestore,t instanceof Xr?t.converter:null,new re(r))}}/**
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
 */class oj{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new xC(this,"async_queue_retry"),this.qc=()=>{const n=ud();n&&ne("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=ud();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=ud();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new fr;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!hl(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw vr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const s=ig.createAndSchedule(this,e,n,r,i=>this.Qc(i));return this.$c.push(s),s}Uc(){this.Mc&&fe()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Js extends gl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new oj,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||tS(this),this._firestoreClient.terminate()}}function aj(t,e){const n=typeof t=="object"?t:ja(),r=typeof t=="string"?t:e||"(default)",s=qs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=D0("firestore");i&&ij(s,...i)}return s}function ch(t){return t._firestoreClient||tS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function tS(t){var e,n,r;const s=t._freezeSettings(),i=function(o,a,l,c){return new qV(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new XH(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
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
 */class Gi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gi(Bt.fromBase64String(e))}catch(n){throw new J(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gi(Bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class yl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class uh{constructor(e){this._methodName=e}}/**
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
 */class ug{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
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
 */const lj=/^__.*__$/;class cj{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new cs(e,this.data,this.fieldMask,n,this.fieldTransforms):new dl(e,this.data,n,this.fieldTransforms)}}class nS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new cs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function rS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class hg{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new hg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:r,ta:!1});return s.ea(e),s}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:r,ta:!1});return s.Jc(),s}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return ou(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(rS(this.Yc)&&lj.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class uj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ih(e)}ua(e,n,r,s=!1){return new hg({Yc:e,methodName:n,oa:r,path:Mt.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hh(t){const e=t._freezeSettings(),n=ih(t._databaseId);return new uj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sS(t,e,n,r,s,i={}){const o=t.ua(i.merge||i.mergeFields?2:0,e,n,s);fg("Data must be an object, but it was:",o,r);const a=aS(r,o);let l,c;if(i.merge)l=new pn(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Bf(e,h,n);if(!o.contains(d))throw new J(x.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);cS(u,d)||u.push(d)}l=new pn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new cj(new Zt(a),l,c)}class dh extends uh{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dh}}class dg extends uh{_toFieldTransform(e){return new dB(e.path,new Na)}isEqual(e){return e instanceof dg}}function iS(t,e,n,r){const s=t.ua(1,e,n);fg("Data must be an object, but it was:",s,r);const i=[],o=Zt.empty();Ys(r,(l,c)=>{const u=pg(e,l,n);c=ze(c);const h=s.na(u);if(c instanceof dh)i.push(u);else{const d=_l(c,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new pn(i);return new nS(o,a,s.fieldTransforms)}function oS(t,e,n,r,s,i){const o=t.ua(1,e,n),a=[Bf(e,r,n)],l=[s];if(i.length%2!=0)throw new J(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Bf(e,i[d])),l.push(i[d+1]);const c=[],u=Zt.empty();for(let d=a.length-1;d>=0;--d)if(!cS(c,a[d])){const f=a[d];let p=l[d];p=ze(p);const y=o.na(f);if(p instanceof dh)c.push(f);else{const b=_l(p,y);b!=null&&(c.push(f),u.set(f,b))}}const h=new pn(c);return new nS(u,h,o.fieldTransforms)}function hj(t,e,n,r=!1){return _l(n,t.ua(r?4:3,e))}function _l(t,e){if(lS(t=ze(t)))return fg("Unsupported field value:",e,t),aS(t,e);if(t instanceof uh)return function(n,r){if(!rS(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=_l(o,r.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=ze(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return cB(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ut.fromDate(n);return{timestampValue:su(r.serializer,s)}}if(n instanceof ut){const s=new ut(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:su(r.serializer,s)}}if(n instanceof ug)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Gi)return{bytesValue:SC(r.serializer,n._byteString)};if(n instanceof Gt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Jm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${lh(n)}`)}(t,e)}function aS(t,e){const n={};return JI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ys(t,(r,s)=>{const i=_l(s,e.Xc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function lS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof ug||t instanceof Gi||t instanceof Gt||t instanceof uh)}function fg(t,e,n){if(!lS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=lh(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function Bf(t,e,n){if((e=ze(e))instanceof yl)return e._internalPath;if(typeof e=="string")return pg(t,e);throw ou("Field path arguments must be of type string or ",t,!1,void 0,n)}const dj=new RegExp("[~\\*/\\[\\]]");function pg(t,e,n){if(e.search(dj)>=0)throw ou(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yl(...e.split("."))._internalPath}catch{throw ou(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ou(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new J(x.INVALID_ARGUMENT,a+t+l)}function cS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class uS{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fj extends uS{data(){return super.data()}}function fh(t,e){return typeof e=="string"?pg(t,e):e instanceof yl?e._internalPath:e._delegate._internalPath}/**
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
 */function pj(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mg{}class gg extends mg{}function MK(t,e,...n){let r=[];e instanceof mg&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof yg).length,o=s.filter(a=>a instanceof ph).length;if(i>1||i>0&&o>0)throw new J(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ph extends gg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ph(e,n,r)}_apply(e){const n=this._parse(e);return hS(e._query,n),new Cr(e.firestore,e.converter,xf(e._query,n))}_parse(e){const n=hh(e.firestore);return function(s,i,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new J(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){zv(u,c);const d=[];for(const f of u)d.push(Wv(a,s,f));h={arrayValue:{values:d}}}else h=Wv(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||zv(u,c),h=hj(o,i,u,c==="in"||c==="not-in");return ot.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function LK(t,e,n){const r=e,s=fh("where",t);return ph._create(s,r,n)}class yg extends mg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new yg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)hS(i,a),i=xf(i,a)}(e._query,n),new Cr(e.firestore,e.converter,xf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _g extends gg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new _g(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new J(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new J(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ai(s,i);return function(a,l){if(Ym(a)===null){const c=Ju(a);c!==null&&dS(a,c,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new Cr(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Qs(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function FK(t,e="asc"){const n=e,r=fh("orderBy",t);return _g._create(r,n)}class vg extends gg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new vg(e,n,r)}_apply(e){return new Cr(e.firestore,e.converter,nu(e._query,this._limit,this._limitType))}}function UK(t){return sj("limit",t),vg._create("limit",t,"F")}function Wv(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new J(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lC(e)&&n.indexOf("/")!==-1)throw new J(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ue.fromString(n));if(!re.isDocumentKey(r))throw new J(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return yv(t,new re(r))}if(n instanceof Gt)return yv(t,n._key);throw new J(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lh(n)}.`)}function zv(t,e){if(!Array.isArray(t)||t.length===0)throw new J(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hS(t,e){if(e.isInequality()){const r=Ju(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new J(x.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Ym(t);i!==null&&dS(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function dS(t,e,n){if(!n.isEqual(e))throw new J(x.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class mj{convertValue(e,n="none"){switch(Vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ji(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw fe()}}convertObject(e,n){const r={};return Ys(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new ug(it(e.latitude),it(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=eC(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Aa(e));default:return null}}convertTimestamp(e){const n=is(e);return new ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);qe(OC(r));const s=new Ra(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||vr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function fS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pS extends uS{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new hc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class hc extends pS{data(e={}){return super.data(e)}}class gj{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Uo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new hc(this._firestore,this._userDataWriter,r.key,r,new Uo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new hc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Uo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new hc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Uo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,c=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:yj(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function yj(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}/**
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
 */function $K(t){t=An(t,Gt);const e=An(t.firestore,Js);return tj(ch(e),t._key).then(n=>_j(e,t,n))}class mS extends mj{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Gt(this.firestore,null,n)}}function VK(t){t=An(t,Cr);const e=An(t.firestore,Js),n=ch(e),r=new mS(e);return pj(t._query),nj(n,t._query).then(s=>new gj(e,r,t,s))}function BK(t,e,n){t=An(t,Gt);const r=An(t.firestore,Js),s=fS(t.converter,e,n);return mh(r,[sS(hh(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,tn.none())])}function HK(t,e,n,...r){t=An(t,Gt);const s=An(t.firestore,Js),i=hh(s);let o;return o=typeof(e=ze(e))=="string"||e instanceof yl?oS(i,"updateDoc",t._key,e,n,r):iS(i,"updateDoc",t._key,e),mh(s,[o.toMutation(t._key,tn.exists(!0))])}function jK(t){return mh(An(t.firestore,Js),[new rh(t._key,tn.none())])}function mh(t,e){return function(n,r){const s=new fr;return n.asyncQueue.enqueueAndForget(async()=>BH(await ej(n),r,s)),s.promise}(ch(t),e)}function _j(t,e,n){const r=n.docs.get(e._key),s=new mS(t);return new pS(t,s,e._key,r,new Uo(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class vj{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=hh(e)}set(e,n,r){this._verifyNotCommitted();const s=dd(e,this._firestore),i=fS(s.converter,n,r),o=sS(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,tn.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=dd(e,this._firestore);let o;return o=typeof(n=ze(n))=="string"||n instanceof yl?oS(this._dataReader,"WriteBatch.update",i._key,n,r,s):iS(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,tn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=dd(e,this._firestore);return this._mutations=this._mutations.concat(new rh(n._key,tn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new J(x.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function dd(t,e){if((t=ze(t)).firestore!==e)throw new J(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function qK(){return new dg("serverTimestamp")}/**
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
 */function WK(t){return ch(t=An(t,Js)),new vj(t,e=>mh(t,e))}(function(t,e=!0){(function(n){ho=n})(Ws),Xn(new Ln("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new Js(new kV(n.getProvider("auth-internal")),new DV(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new J(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ra(a.options.projectId,l)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),gn(dv,"3.10.0",t),gn(dv,"3.10.0","esm2017")})();/**
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
 */const gS="firebasestorage.googleapis.com",yS="storageBucket",wj=2*60*1e3,Ej=10*60*1e3,bj=1e3;/**
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
 */class Je extends tr{constructor(e,n,r=0){super(fd(e),`Firebase Storage: ${n} (${fd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ge;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ge||(Ge={}));function fd(t){return"storage/"+t}function wg(){const t="An unknown error occurred, please check the error payload for server response.";return new Je(Ge.UNKNOWN,t)}function Tj(t){return new Je(Ge.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Ij(t){return new Je(Ge.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Cj(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Je(Ge.UNAUTHENTICATED,t)}function Sj(){return new Je(Ge.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Aj(t){return new Je(Ge.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function _S(){return new Je(Ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function vS(){return new Je(Ge.CANCELED,"User canceled the upload/download.")}function Rj(t){return new Je(Ge.INVALID_URL,"Invalid URL '"+t+"'.")}function kj(t){return new Je(Ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Nj(){return new Je(Ge.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+yS+"' property when initializing the app?")}function wS(){return new Je(Ge.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Oj(){return new Je(Ge.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Pj(){return new Je(Ge.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Dj(t){return new Je(Ge.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Hf(t){return new Je(Ge.INVALID_ARGUMENT,t)}function ES(){return new Je(Ge.APP_DELETED,"The Firebase app was deleted.")}function xj(t){return new Je(Ge.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function na(t,e){return new Je(Ge.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ro(t){throw new Je(Ge.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class mn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=mn.makeFromUrl(e,n)}catch{return new mn(e,"")}if(r.path==="")return r;throw kj(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(C){C.path_=decodeURIComponent(C.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),p={bucket:1,path:3},y=n===gS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",_=new RegExp(`^https?://${y}/${s}/${b}`,"i"),w=[{regex:a,indices:l,postModify:i},{regex:f,indices:p,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let C=0;C<w.length;C++){const I=w[C],A=I.regex.exec(e);if(A){const S=A[I.indices.bucket];let T=A[I.indices.path];T||(T=""),r=new mn(S,T),I.postModify(r);break}}if(r==null)throw Rj(e);return r}}class Mj{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Lj(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...b){c||(c=!0,e.apply(null,b))}function h(b){s=setTimeout(()=>{s=null,t(f,l())},b)}function d(){i&&clearTimeout(i)}function f(b,..._){if(c){d();return}if(b){d(),u.call(null,b,..._);return}if(l()||o){d(),u.call(null,b,..._);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,h(w)}let p=!1;function y(b){p||(p=!0,d(),!c&&(s!==null?(b||(a=2),clearTimeout(s),h(0)):b||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function Fj(t){t(!1)}/**
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
 */function Uj(t){return t!==void 0}function $j(t){return typeof t=="function"}function Vj(t){return typeof t=="object"&&!Array.isArray(t)}function gh(t){return typeof t=="string"||t instanceof String}function Kv(t){return Eg()&&t instanceof Blob}function Eg(){return typeof Blob<"u"&&!yD()}function Gv(t,e,n,r){if(r<e)throw Hf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Hf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function vl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function bS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var ks;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ks||(ks={}));/**
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
 */function TS(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class Bj{constructor(e,n,r,s,i,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Gl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ks.NO_ERROR,l=i.getStatus();if(!a||TS(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===ks.ABORT;r(!1,new Gl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Gl(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Uj(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=wg();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?ES():vS();o(l)}else{const l=_S();o(l)}};this.canceled_?n(!1,new Gl(!1,null,!0)):this.backoffId_=Lj(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Fj(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Hj(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function jj(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qj(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Wj(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function zj(t,e,n,r,s,i,o=!0){const a=bS(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return qj(c,e),Hj(c,n),jj(c,i),Wj(c,r),new Bj(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function Kj(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Gj(...t){const e=Kj();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Eg())return new Blob(t);throw new Je(Ge.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Yj(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Qj(t){if(typeof atob>"u")throw Dj("base-64");return atob(t)}/**
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
 */const Wn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class pd{constructor(e,n){this.data=e,this.contentType=n||null}}function Xj(t,e){switch(t){case Wn.RAW:return new pd(IS(e));case Wn.BASE64:case Wn.BASE64URL:return new pd(CS(t,e));case Wn.DATA_URL:return new pd(Zj(e),eq(e))}throw wg()}function IS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Jj(t){let e;try{e=decodeURIComponent(t)}catch{throw na(Wn.DATA_URL,"Malformed data URL.")}return IS(e)}function CS(t,e){switch(t){case Wn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw na(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Wn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw na(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Qj(e)}catch(s){throw s.message.includes("polyfill")?s:na(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class SS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw na(Wn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=tq(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Zj(t){const e=new SS(t);return e.base64?CS(Wn.BASE64,e.rest):Jj(e.rest)}function eq(t){return new SS(t).contentType}function tq(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Hr{constructor(e,n){let r=0,s="";Kv(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Kv(this.data_)){const r=this.data_,s=Yj(r,e,n);return s===null?null:new Hr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Hr(r,!0)}}static getBlob(...e){if(Eg()){const n=e.map(r=>r instanceof Hr?r.data_:r);return new Hr(Gj.apply(null,n))}else{const n=e.map(o=>gh(o)?Xj(Wn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Hr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function AS(t){let e;try{e=JSON.parse(t)}catch{return null}return Vj(e)?e:null}/**
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
 */function nq(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function rq(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function RS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function sq(t,e){return e}class Ht{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||sq}}let Yl=null;function iq(t){return!gh(t)||t.length<2?t:RS(t)}function kS(){if(Yl)return Yl;const t=[];t.push(new Ht("bucket")),t.push(new Ht("generation")),t.push(new Ht("metageneration")),t.push(new Ht("name","fullPath",!0));function e(i,o){return iq(o)}const n=new Ht("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ht("size");return s.xform=r,t.push(s),t.push(new Ht("timeCreated")),t.push(new Ht("updated")),t.push(new Ht("md5Hash",null,!0)),t.push(new Ht("cacheControl",null,!0)),t.push(new Ht("contentDisposition",null,!0)),t.push(new Ht("contentEncoding",null,!0)),t.push(new Ht("contentLanguage",null,!0)),t.push(new Ht("contentType",null,!0)),t.push(new Ht("metadata","customMetadata",!0)),Yl=t,Yl}function oq(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new mn(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function aq(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return oq(r,t),r}function NS(t,e,n){const r=AS(e);return r===null?null:aq(t,r,n)}function lq(t,e,n,r){const s=AS(e);if(s===null||!gh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=vl(d,n,r),p=bS({alt:"media",token:c});return f+p})[0]}function OS(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class mo{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function pr(t){if(!t)throw wg()}function bg(t,e){function n(r,s){const i=NS(t,s,e);return pr(i!==null),i}return n}function cq(t,e){function n(r,s){const i=NS(t,s,e);return pr(i!==null),lq(i,s,t.host,t._protocol)}return n}function wl(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Sj():s=Cj():n.getStatus()===402?s=Ij(t.bucket):n.getStatus()===403?s=Aj(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function PS(t){const e=wl(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Tj(t.path)),i.serverResponse=s.serverResponse,i}return n}function uq(t,e,n){const r=e.fullServerUrl(),s=vl(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new mo(s,i,bg(t,n),o);return a.errorHandler=PS(e),a}function hq(t,e,n){const r=e.fullServerUrl(),s=vl(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new mo(s,i,cq(t,n),o);return a.errorHandler=PS(e),a}function dq(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function DS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=dq(null,e)),r}function fq(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let C=0;C<2;C++)w=w+Math.random().toString().slice(2);return w}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=DS(e,r,s),u=OS(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=Hr.getBlob(h,r,d);if(f===null)throw wS();const p={name:c.fullPath},y=vl(i,t.host,t._protocol),b="POST",_=t.maxUploadRetryTime,m=new mo(y,b,bg(t,n),_);return m.urlParams=p,m.headers=o,m.body=f.uploadData(),m.errorHandler=wl(e),m}class au{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function Tg(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{pr(!1)}return pr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function pq(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=DS(e,r,s),a={name:o.fullPath},l=vl(i,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=OS(o,n),d=t.maxUploadRetryTime;function f(y){Tg(y);let b;try{b=y.getResponseHeader("X-Goog-Upload-URL")}catch{pr(!1)}return pr(gh(b)),b}const p=new mo(l,c,f,d);return p.urlParams=a,p.headers=u,p.body=h,p.errorHandler=wl(e),p}function mq(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(c){const u=Tg(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{pr(!1)}h||pr(!1);const d=Number(h);return pr(!isNaN(d)),new au(d,r.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,l=new mo(n,o,i,a);return l.headers=s,l.errorHandler=wl(e),l}const Yv=256*1024;function gq(t,e,n,r,s,i,o,a){const l=new au(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw Oj();const c=l.total-l.current;let u=c;s>0&&(u=Math.min(u,s));const h=l.current,d=h+u;let f="";u===0?f="finalize":c===u?f="upload, finalize":f="upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${l.current}`},y=r.slice(h,d);if(y===null)throw wS();function b(C,I){const A=Tg(C,["active","final"]),S=l.current+u,T=r.size();let O;return A==="final"?O=bg(e,i)(C,I):O=null,new au(S,T,A==="final",O)}const _="POST",m=e.maxUploadRetryTime,w=new mo(n,_,b,m);return w.headers=p,w.body=y.uploadData(),w.progressCallback=a||null,w.errorHandler=wl(t),w}const Jt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function md(t){switch(t){case"running":case"pausing":case"canceling":return Jt.RUNNING;case"paused":return Jt.PAUSED;case"success":return Jt.SUCCESS;case"canceled":return Jt.CANCELED;case"error":return Jt.ERROR;default:return Jt.ERROR}}/**
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
 */class yq{constructor(e,n,r){if($j(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function ni(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class _q{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ks.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ks.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ks.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Ro("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ro("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ro("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ro("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ro("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class vq extends _q{initXhr(){this.xhr_.responseType="text"}}function ui(){return new vq}/**
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
 */class wq{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=kS(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Ge.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(TS(s.status,[]))if(i)s=_S();else{this.sleepTime=Math.max(this.sleepTime*2,bj),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Ge.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=pq(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,ui,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=mq(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,ui,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Yv*this._chunkMultiplier,n=new au(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=gq(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,ui,s,i,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Yv*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=uq(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,ui,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=fq(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,ui,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=vS(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=md(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new yq(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(md(this._state)){case Jt.SUCCESS:ni(this._resolve.bind(null,this.snapshot))();break;case Jt.CANCELED:case Jt.ERROR:const n=this._reject;ni(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(md(this._state)){case Jt.RUNNING:case Jt.PAUSED:e.next&&ni(e.next.bind(e,this.snapshot))();break;case Jt.SUCCESS:e.complete&&ni(e.complete.bind(e))();break;case Jt.CANCELED:case Jt.ERROR:e.error&&ni(e.error.bind(e,this._error))();break;default:e.error&&ni(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Bs{constructor(e,n){this._service=e,n instanceof mn?this._location=n:this._location=mn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Bs(e,n)}get root(){const e=new mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return RS(this._location.path)}get storage(){return this._service}get parent(){const e=nq(this._location.path);if(e===null)return null;const n=new mn(this._location.bucket,e);return new Bs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw xj(e)}}function Eq(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new wq(t,new Hr(e),n)}function bq(t){t._throwIfRoot("getDownloadURL");const e=hq(t.storage,t._location,kS());return t.storage.makeRequestWithTokens(e,ui).then(n=>{if(n===null)throw Pj();return n})}function Tq(t,e){const n=rq(t._location.path,e),r=new mn(t._location.bucket,n);return new Bs(t.storage,r)}/**
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
 */function Iq(t){return/^[A-Za-z]+:\/\//.test(t)}function Cq(t,e){return new Bs(t,e)}function xS(t,e){if(t instanceof Ig){const n=t;if(n._bucket==null)throw Nj();const r=new Bs(n,n._bucket);return e!=null?xS(r,e):r}else return e!==void 0?Tq(t,e):t}function Sq(t,e){if(e&&Iq(e)){if(t instanceof Ig)return Cq(t,e);throw Hf("To use ref(service, url), the first argument must be a Storage instance.")}else return xS(t,e)}function Qv(t,e){const n=e==null?void 0:e[yS];return n==null?null:mn.makeFromBucketSpec(n,t)}function Aq(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:M0(s,t.app.options.projectId))}class Ig{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=gS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wj,this._maxUploadRetryTime=Ej,this._requests=new Set,s!=null?this._bucket=mn.makeFromBucketSpec(s,this._host):this._bucket=Qv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mn.makeFromBucketSpec(this._url,e):this._bucket=Qv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Gv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Gv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Bs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Mj(ES());{const o=zj(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Xv="@firebase/storage",Jv="0.11.2";/**
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
 */const MS="storage";function zK(t,e,n){return t=ze(t),Eq(t,e,n)}function KK(t){return t=ze(t),bq(t)}function GK(t,e){return t=ze(t),Sq(t,e)}function YK(t=ja(),e){t=ze(t);const r=qs(t,MS).getImmediate({identifier:e}),s=D0("storage");return s&&Rq(r,...s),r}function Rq(t,e,n,r={}){Aq(t,e,n,r)}function kq(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ig(n,r,s,e,Ws)}function Nq(){Xn(new Ln(MS,kq,"PUBLIC").setMultipleInstances(!0)),gn(Xv,Jv,""),gn(Xv,Jv,"esm2017")}Nq();function QK(t){return aj(xb(t))}function Oq(t){return(e,n)=>{const r=Mb(e,n).run(()=>ke(t));LL.set(e,r),FL(r,e)}}function Pq(t,{firebaseApp:e,modules:n=[]}){t.provide(Db,e);for(const r of n)t.use(r.bind(null,e))}const Dq=$n(t=>{Np();const e=t.$firebaseApp;t.vueApp.use(Pq,{firebaseApp:e})}),xq=$n(t=>{const n=Np().vuefireOptions.appCheck,r=t.$firebaseApp;let s;n.provider==="ReCaptchaV3"?s=new Jp(n.key):n.provider==="ReCaptchaEnterprise"?s=new Zp(n.key):s=new em({getToken:()=>Promise.reject(new Error("app-check/invalid-provider"))}),$L({...n,provider:s})(r,t.vueApp)}),Mq=$n(t=>{const e=t.$firebaseApp;Oq(t.payload.vuefireUser)(e,t.vueApp)}),Lq=$n(t=>{qO()&&(t.hooks.hook("link:prefetch",e=>{if(!wu(e).protocol)return Cy(e)}),bu().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await Cy(e.path);r&&Object.assign(t.static.data,r.data)}))});/**
  * vee-validate v4.8.6
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function Zn(t){return typeof t=="function"}function ra(t){return t==null}const Hs=t=>t!==null&&!!t&&typeof t=="object"&&!Array.isArray(t);function LS(t){return Number(t)>=0}function Fq(t){const e=parseFloat(t);return isNaN(e)?t:e}const FS={};function vn(t,e){$q(t,e),FS[t]=e}function Uq(t){return FS[t]}function $q(t,e){if(!Zn(e))throw new Error(`Extension Error: The validator '${t}' must be a function.`)}const yh=Symbol("vee-validate-form"),Vq=Symbol("vee-validate-field-instance"),Zv=Symbol("Default empty value"),Bq=typeof window<"u";function jf(t){return Zn(t)&&!!t.__locatorRef}function Jr(t){return!!t&&Zn(t.parse)&&t.__type==="VVTypedSchema"}function sa(t){return!!t&&Zn(t.validate)}function US(t){return t==="checkbox"||t==="radio"}function Hq(t){return Hs(t)||Array.isArray(t)}function $S(t){return Array.isArray(t)?t.length===0:Hs(t)&&Object.keys(t).length===0}function _h(t){return/^\[.+\]$/i.test(t)}function jq(t){return VS(t)&&t.multiple}function VS(t){return t.tagName==="SELECT"}function qq(t){return BS(t)&&t.target&&"submit"in t.target}function BS(t){return t?!!(typeof Event<"u"&&Zn(Event)&&t instanceof Event||t&&t.srcElement):!1}function ct(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,s;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!ct(t[r],e[r]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;for(r of t.entries())if(!ct(r[1],e.get(r[0])))return!1;return!0}if(ew(t)&&ew(e))return!(t.size!==e.size||t.name!==e.name||t.lastModified!==e.lastModified||t.type!==e.type);if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(s=Object.keys(t),n=s.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,s[r]))return!1;for(r=n;r--!==0;){var i=s[r];if(!ct(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function ew(t){return Bq?t instanceof File:!1}function tw(t,e,n){typeof n.value=="object"&&(n.value=je(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||e==="__proto__"?Object.defineProperty(t,e,n):t[e]=n.value}function je(t){if(typeof t!="object")return t;var e=0,n,r,s,i=Object.prototype.toString.call(t);if(i==="[object Object]"?s=Object.create(t.__proto__||null):i==="[object Array]"?s=Array(t.length):i==="[object Set]"?(s=new Set,t.forEach(function(o){s.add(je(o))})):i==="[object Map]"?(s=new Map,t.forEach(function(o,a){s.set(je(a),je(o))})):i==="[object Date]"?s=new Date(+t):i==="[object RegExp]"?s=new RegExp(t.source,t.flags):i==="[object DataView]"?s=new t.constructor(je(t.buffer)):i==="[object ArrayBuffer]"?s=t.slice(0):i.slice(-6)==="Array]"&&(s=new t.constructor(t)),s){for(r=Object.getOwnPropertySymbols(t);e<r.length;e++)tw(s,r[e],Object.getOwnPropertyDescriptor(t,r[e]));for(e=0,r=Object.getOwnPropertyNames(t);e<r.length;e++)Object.hasOwnProperty.call(s,n=r[e])&&s[n]===t[n]||tw(s,n,Object.getOwnPropertyDescriptor(t,n))}return s||t}function Cg(t){return _h(t)?t.replace(/\[|\]/gi,""):t}function rt(t,e,n){return t?_h(e)?t[Cg(e)]:(e||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((s,i)=>Hq(s)&&i in s?s[i]:n,t):n}function Mr(t,e,n){if(_h(e)){t[Cg(e)]=n;return}const r=e.split(/\.|\[(\d+)\]/).filter(Boolean);let s=t;for(let i=0;i<r.length;i++){if(i===r.length-1){s[r[i]]=n;return}(!(r[i]in s)||ra(s[r[i]]))&&(s[r[i]]=LS(r[i+1])?[]:{}),s=s[r[i]]}}function gd(t,e){if(Array.isArray(t)&&LS(e)){t.splice(Number(e),1);return}Hs(t)&&delete t[e]}function Ql(t,e){if(_h(e)){delete t[Cg(e)];return}const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let r=t;for(let i=0;i<n.length;i++){if(i===n.length-1){gd(r,n[i]);break}if(!(n[i]in r)||ra(r[n[i]]))break;r=r[n[i]]}const s=n.map((i,o)=>rt(t,n.slice(0,o).join(".")));for(let i=s.length-1;i>=0;i--)if($S(s[i])){if(i===0){gd(t,n[0]);continue}gd(s[i-1],n[i-1])}}function Et(t){return Object.keys(t)}function Sg(t,e=void 0){const n=Yt();return(n==null?void 0:n.provides[t])||tt(t,e)}function qf(t,e,n){if(Array.isArray(t)){const r=[...t],s=r.findIndex(i=>ct(i,e));return s>=0?r.splice(s,1):r.push(e),r}return ct(t,e)?n:e}function nw(t,e=0){let n=null,r=[];return function(...s){return n&&window.clearTimeout(n),n=window.setTimeout(()=>{const i=t(...s);r.forEach(o=>o(i)),r=[]},e),new Promise(i=>r.push(i))}}function Wq(t,e){return Hs(e)&&e.number?Fq(t):t}function Wf(t,e){let n;return async function(...s){const i=t(...s);n=i;const o=await i;return i!==n||(n=void 0,e(o,s)),o}}function zq({get:t,set:e}){const n=ke(je(t()));return Qe(t,r=>{ct(r,n.value)||(n.value=je(r))},{deep:!0}),Qe(n,r=>{ct(r,t())||e(je(r))},{deep:!0}),n}function Kq(t){return Zn(t)?t():H(t)}function Gq(t){return ae(()=>Kq(t))}function yd(t){if(HS(t))return t._value}function HS(t){return"_value"in t}function jS(t){if(!BS(t))return t;const e=t.target;if(US(e.type)&&HS(e))return yd(e);if(e.type==="file"&&e.files){const n=Array.from(e.files);return e.multiple?n:n[0]}if(jq(e))return Array.from(e.options).filter(n=>n.selected&&!n.disabled).map(yd);if(VS(e)){const n=Array.from(e.options).find(r=>r.selected);return n?yd(n):e.value}return e.value}function qS(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?Hs(t)&&t._$$isNormalized?t:Hs(t)?Object.keys(t).reduce((n,r)=>{const s=Yq(t[r]);return t[r]!==!1&&(n[r]=rw(s)),n},e):typeof t!="string"?e:t.split("|").reduce((n,r)=>{const s=Qq(r);return s.name&&(n[s.name]=rw(s.params)),n},e):e}function Yq(t){return t===!0?[]:Array.isArray(t)||Hs(t)?t:[t]}function rw(t){const e=n=>typeof n=="string"&&n[0]==="@"?Xq(n.slice(1)):n;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,r)=>(n[r]=e(t[r]),n),{})}const Qq=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function Xq(t){const e=n=>rt(n,t)||n[t];return e.__locatorRef=t,e}function Jq(t){return Array.isArray(t)?t.filter(jf):Et(t).filter(e=>jf(t[e])).map(e=>t[e])}const Zq={generateMessage:({field:t})=>`${t} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let zf=Object.assign({},Zq);const eW=()=>zf,tW=t=>{zf=Object.assign(Object.assign({},zf),t)},nW=tW;async function WS(t,e,n={}){const r=n==null?void 0:n.bails,s={name:(n==null?void 0:n.name)||"{field}",rules:e,label:n==null?void 0:n.label,bails:r??!0,formData:(n==null?void 0:n.values)||{}},o=(await rW(s,t)).errors;return{errors:o,valid:!o.length}}async function rW(t,e){if(Jr(t.rules)||sa(t.rules))return iW(e,t.rules);if(Zn(t.rules)||Array.isArray(t.rules)){const o={field:t.label||t.name,name:t.name,label:t.label,form:t.formData,value:e},a=Array.isArray(t.rules)?t.rules:[t.rules],l=a.length,c=[];for(let u=0;u<l;u++){const h=a[u],d=await h(e,o);if(typeof d!="string"&&d)continue;const p=typeof d=="string"?d:KS(o);if(c.push(p),t.bails)return{errors:c}}return{errors:c}}const n=Object.assign(Object.assign({},t),{rules:qS(t.rules)}),r=[],s=Object.keys(n.rules),i=s.length;for(let o=0;o<i;o++){const a=s[o],l=await oW(n,e,{name:a,params:n.rules[a]});if(l.error&&(r.push(l.error),t.bails))return{errors:r}}return{errors:r}}function sW(t){return!!t&&t.name==="ValidationError"}function zS(t){return{__type:"VVTypedSchema",async parse(n){var r;try{return{output:await t.validate(n,{abortEarly:!1}),errors:[]}}catch(s){if(!sW(s))throw s;if(!(!((r=s.inner)===null||r===void 0)&&r.length)&&s.errors.length)return{errors:[{path:s.path,errors:s.errors}]};const i=s.inner.reduce((o,a)=>{const l=a.path||"";return o[l]||(o[l]={errors:[],path:l}),o[l].errors.push(...a.errors),o},{});return{errors:Object.values(i)}}}}}async function iW(t,e){const r=await(Jr(e)?e:zS(e)).parse(t),s=[];for(const i of r.errors)i.errors.length&&s.push(...i.errors);return{errors:s}}async function oW(t,e,n){const r=Uq(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const s=aW(n.params,t.formData),i={field:t.label||t.name,name:t.name,label:t.label,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:s})},o=await r(e,s,i);return typeof o=="string"?{error:o}:{error:o?void 0:KS(i)}}function KS(t){const e=eW().generateMessage;return e?e(t):"Field is invalid"}function aW(t,e){const n=r=>jf(r)?r(e):r;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((r,s)=>(r[s]=n(t[s]),r),{})}async function lW(t,e){const r=await(Jr(t)?t:zS(t)).parse(e),s={},i={};for(const o of r.errors){const a=o.errors,l=(o.path||"").replace(/\["(\d+)"\]/g,(c,u)=>`[${u}]`);s[l]={valid:!a.length,errors:a},a.length&&(i[l]=a[0])}return{valid:!r.errors.length,results:s,errors:i,values:r.value}}async function cW(t,e,n){const s=Et(t).map(async c=>{var u,h,d;const f=(u=n==null?void 0:n.names)===null||u===void 0?void 0:u[c],p=await WS(rt(e,c),t[c],{name:(f==null?void 0:f.name)||c,label:f==null?void 0:f.label,values:e,bails:(d=(h=n==null?void 0:n.bailsMap)===null||h===void 0?void 0:h[c])!==null&&d!==void 0?d:!0});return Object.assign(Object.assign({},p),{path:c})});let i=!0;const o=await Promise.all(s),a={},l={};for(const c of o)a[c.path]={valid:c.valid,errors:c.errors},c.valid||(i=!1,l[c.path]=c.errors[0]);return{valid:i,results:a,errors:l}}let sw=0;function uW(t,e){const{value:n,initialValue:r,setInitialValue:s}=GS(t,e.modelValue,e.form),{errorMessage:i,errors:o,setErrors:a}=fW(t,e.form),l=dW(n,r,o),c=sw>=Number.MAX_SAFE_INTEGER?0:++sw;function u(h){var d;"value"in h&&(n.value=h.value),"errors"in h&&a(h.errors),"touched"in h&&(l.touched=(d=h.touched)!==null&&d!==void 0?d:l.touched),"initialValue"in h&&s(h.initialValue)}return{id:c,path:t,value:n,initialValue:r,meta:l,errors:o,errorMessage:i,setState:u}}function GS(t,e,n){const r=ke(H(e));function s(){return n?rt(n.meta.value.initialValues,H(t),H(r)):H(r)}function i(c){if(!n){r.value=c;return}n.stageInitialValue(H(t),c,!0)}const o=ae(s);if(!n)return{value:ke(s()),initialValue:o,setInitialValue:i};const a=hW(e,n,o,t);return n.stageInitialValue(H(t),a,!0),{value:ae({get(){return rt(n.values,H(t))},set(c){n.setFieldValue(H(t),c)}}),initialValue:o,setInitialValue:i}}function hW(t,e,n,r){return Me(t)?H(t):t!==void 0?t:rt(e.values,H(r),H(n))}function dW(t,e,n){const r=dt({touched:!1,pending:!1,valid:!0,validated:!!H(n).length,initialValue:ae(()=>H(e)),dirty:ae(()=>!ct(H(t),H(e)))});return Qe(n,s=>{r.valid=!s.length},{immediate:!0,flush:"sync"}),r}function fW(t,e){function n(s){return s?Array.isArray(s)?s:[s]:[]}if(!e){const s=ke([]);return{errors:s,errorMessage:ae(()=>s.value[0]),setErrors:i=>{s.value=n(i)}}}const r=ae(()=>e.errorBag.value[H(t)]||[]);return{errors:r,errorMessage:ae(()=>r.value[0]),setErrors:s=>{e.setFieldErrorBag(H(t),n(s))}}}function XK(t,e,n){return US(n==null?void 0:n.type)?gW(t,e,n):YS(t,e,n)}function YS(t,e,n){const{initialValue:r,validateOnMount:s,bails:i,type:o,checkedValue:a,label:l,validateOnValueUpdate:c,uncheckedValue:u,controlled:h,keepValueOnUnmount:d,modelPropName:f,syncVModel:p,form:y}=pW(n),b=h?Sg(yh):void 0,_=y||b,m=Gq(t);let w=!1;const{id:C,value:I,initialValue:A,meta:S,setState:T,errors:O,errorMessage:U}=uW(m,{modelValue:r,form:_});p&&yW({value:I,prop:f,handleChange:Ee});const Z=()=>{S.touched=!0},q=ae(()=>{let k=H(e);const j=H(_==null?void 0:_.schema);return j&&!sa(j)&&!Jr(j)&&(k=mW(j,H(m))||k),sa(k)||Jr(k)||Zn(k)||Array.isArray(k)?k:qS(k)});async function se(k){var j,ie;return _!=null&&_.validateSchema?(j=(await _.validateSchema(k)).results[H(m)])!==null&&j!==void 0?j:{valid:!0,errors:[]}:WS(I.value,q.value,{name:H(m),label:H(l),values:(ie=_==null?void 0:_.values)!==null&&ie!==void 0?ie:{},bails:i})}const z=Wf(async()=>(S.pending=!0,S.validated=!0,se("validated-only")),k=>(w&&(k.valid=!0,k.errors=[]),T({errors:k.errors}),S.pending=!1,k)),_e=Wf(async()=>se("silent"),k=>(w&&(k.valid=!0),S.valid=k.valid,k));function le(k){return(k==null?void 0:k.mode)==="silent"?_e():z()}function Ee(k,j=!0){const ie=jS(k);I.value=ie,!c&&j&&z()}$a(()=>{if(s)return z();(!_||!_.validateSchema)&&_e()});function ve(k){S.touched=k}let at,Rt=je(I.value);function lt(){at=Qe(I,(k,j)=>{if(ct(k,j)&&ct(k,Rt))return;(c?z:_e)(),Rt=je(k)},{deep:!0})}lt();function Ze(k){var j;at==null||at();const ie=k&&"value"in k?k.value:A.value;T({value:je(ie),initialValue:je(ie),touched:(j=k==null?void 0:k.touched)!==null&&j!==void 0?j:!1,errors:(k==null?void 0:k.errors)||[]}),S.pending=!1,S.validated=!1,_e(),fn(()=>{lt()})}function wn(k){I.value=k}function nr(k){T({errors:Array.isArray(k)?k:[k]})}const D={id:C,name:m,label:l,value:I,meta:S,errors:O,errorMessage:U,type:o,checkedValue:a,uncheckedValue:u,bails:i,keepValueOnUnmount:d,resetField:Ze,handleReset:()=>Ze(),validate:le,handleChange:Ee,handleBlur:Z,setState:T,setTouched:ve,setErrors:nr,setValue:wn};if(zn(Vq,D),Me(e)&&typeof H(e)!="function"&&Qe(e,(k,j)=>{ct(k,j)||(S.validated?z():_e())},{deep:!0}),!_)return D;_.register(D),eo(()=>{w=!0,_.unregister(D)});const G=ae(()=>{const k=q.value;return!k||Zn(k)||sa(k)||Jr(k)||Array.isArray(k)?{}:Object.keys(k).reduce((j,ie)=>{const Le=Jq(k[ie]).map(ue=>ue.__locatorRef).reduce((ue,g)=>{const E=rt(_.values,g)||_.values[g];return E!==void 0&&(ue[g]=E),ue},{});return Object.assign(j,Le),j},{})});return Qe(G,(k,j)=>{if(!Object.keys(k).length)return;!ct(k,j)&&(S.validated?z():_e())}),D}function pW(t){var e;const n=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,label:void 0,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,modelPropName:"modelValue",syncVModel:!0,controlled:!0}),s=((e=t==null?void 0:t.syncVModel)!==null&&e!==void 0?e:!0)&&!("initialValue"in(t||{}))?Kf(Yt(),(t==null?void 0:t.modelPropName)||"modelValue"):t==null?void 0:t.initialValue;if(!t)return Object.assign(Object.assign({},n()),{initialValue:s});const i="valueProp"in t?t.valueProp:t.checkedValue,o="standalone"in t?!t.standalone:t.controlled;return Object.assign(Object.assign(Object.assign({},n()),t||{}),{initialValue:s,controlled:o??!0,checkedValue:i})}function mW(t,e){if(t)return t[e]}function gW(t,e,n){const r=n!=null&&n.standalone?void 0:Sg(yh),s=n==null?void 0:n.checkedValue,i=n==null?void 0:n.uncheckedValue;function o(a){const l=a.handleChange,c=ae(()=>{const h=H(a.value),d=H(s);return Array.isArray(h)?h.findIndex(f=>ct(f,d))>=0:ct(d,h)});function u(h,d=!0){var f;if(c.value===((f=h==null?void 0:h.target)===null||f===void 0?void 0:f.checked)){d&&a.validate();return}let p=jS(h);r||(p=qf(H(a.value),H(s),H(i))),l(p,d)}return Object.assign(Object.assign({},a),{checked:c,checkedValue:s,uncheckedValue:i,handleChange:u})}return o(YS(t,e,n))}function yW({prop:t,value:e,handleChange:n}){const r=Yt();if(!r)return;const s=t||"modelValue",i=`update:${s}`;s in r.props&&(Qe(e,o=>{ct(o,Kf(r,s))||r.emit(i,o)}),Qe(()=>Kf(r,s),o=>{if(o===Zv&&e.value===void 0)return;const a=o===Zv?void 0:o;ct(a,Wq(e.value,r.props.modelModifiers))||n(a)}))}function Kf(t,e){if(t)return t.props[e]}let _W=0;function QS(t){const e=H(t==null?void 0:t.initialValues)||{},n=H(t==null?void 0:t.validationSchema);return n&&Jr(n)&&Zn(n.cast)?je(n.cast(e)||{}):je(e)}function JK(t){var e;const n=_W++,r=new Set;let s=!1;const i=ke({}),o=ke(!1),a=ke(0),l=[],c=dt(QS(t)),{errorBag:u,setErrorBag:h,setFieldErrorBag:d}=EW(t==null?void 0:t.initialErrors),f=ae(()=>Et(u.value).reduce((v,R)=>{const M=u.value[R];return M&&M.length&&(v[R]=M[0]),v},{}));function p(v){const R=i.value[v];return Array.isArray(R)?R[0]:R}function y(v){return!!i.value[v]}const b=ae(()=>Et(i.value).reduce((v,R)=>{const M=p(R);return M&&(v[R]={name:H(M.name)||"",label:H(M.label)||""}),v},{})),_=ae(()=>Et(i.value).reduce((v,R)=>{var M;const F=p(R);return F&&(v[R]=(M=F.bails)!==null&&M!==void 0?M:!0),v},{})),m=Object.assign({},(t==null?void 0:t.initialErrors)||{}),w=(e=t==null?void 0:t.keepValuesOnUnmount)!==null&&e!==void 0?e:!1,{initialValues:C,originalInitialValues:I,setInitialValues:A}=wW(i,c,t),S=vW(i,c,I,f),T=ae(()=>[...r,...Et(i.value)].reduce((v,R)=>{const M=rt(c,R);return Mr(v,R,M),v},{})),O=t==null?void 0:t.validationSchema,U=nw(V,5),Z=nw(V,5),q=Wf(async v=>await v==="silent"?U():Z(),(v,[R])=>{const M=le.fieldsByPath.value||{},F=Et(le.errorBag.value);return[...new Set([...Et(v.results),...Et(M),...F])].reduce((X,ee)=>{const he=M[ee],Ne=(v.results[ee]||{errors:[]}).errors,$e={errors:Ne,valid:!Ne.length};if(X.results[ee]=$e,$e.valid||(X.errors[ee]=$e.errors[0]),!he)return Rt(ee,Ne),X;if(ve(he,Ar=>Ar.meta.valid=$e.valid),R==="silent")return X;const Sr=Array.isArray(he)?he.some(Ar=>Ar.meta.validated):he.meta.validated;return R==="validated-only"&&!Sr||ve(he,Ar=>Ar.setState({errors:$e.errors})),X},{valid:v.valid,results:{},errors:{}})});function se(v){return function(M,F){return function(X){return X instanceof Event&&(X.preventDefault(),X.stopPropagation()),k(Et(i.value).reduce((ee,he)=>(ee[he]=!0,ee),{})),o.value=!0,a.value++,N().then(ee=>{const he=je(c);if(ee.valid&&typeof M=="function"){const Ne=je(T.value);let $e=v?Ne:he;return ee.values&&($e=ee.values),M($e,{evt:X,controlledValues:Ne,setErrors:lt,setFieldError:Rt,setTouched:k,setFieldTouched:G,setValues:wn,setFieldValue:Ze,resetForm:ie,resetField:j})}!ee.valid&&typeof F=="function"&&F({values:he,evt:X,errors:ee.errors,results:ee.results})}).then(ee=>(o.value=!1,ee),ee=>{throw o.value=!1,ee})}}}const _e=se(!1);_e.withControlled=se(!0);const le={formId:n,fieldsByPath:i,values:c,controlledValues:T,errorBag:u,errors:f,schema:O,submitCount:a,meta:S,isSubmitting:o,fieldArrays:l,keepValuesOnUnmount:w,validateSchema:H(O)?q:void 0,validate:N,register:g,unregister:E,setFieldErrorBag:d,validateField:P,setFieldValue:Ze,setValues:wn,setErrors:lt,setFieldError:Rt,setFieldTouched:G,setTouched:k,resetForm:ie,resetField:j,handleSubmit:_e,stageInitialValue:B,unsetInitialValue:L,setFieldInitialValue:Y,useFieldModel:D};function Ee(v){return Array.isArray(v)}function ve(v,R){return Array.isArray(v)?v.forEach(R):R(v)}function at(v){Object.values(i.value).forEach(R=>{R&&ve(R,v)})}function Rt(v,R){d(v,R)}function lt(v){h(v)}function Ze(v,R,{force:M}={force:!1}){var F;const Q=i.value[v],X=je(R);if(!Q){Mr(c,v,X);return}if(Ee(Q)&&((F=Q[0])===null||F===void 0?void 0:F.type)==="checkbox"&&!Array.isArray(R)){const he=je(qf(rt(c,v)||[],R,void 0));Mr(c,v,he);return}let ee=X;!Ee(Q)&&Q.type==="checkbox"&&!M&&!s&&(ee=je(qf(rt(c,v),R,H(Q.uncheckedValue)))),Mr(c,v,ee)}function wn(v){Et(c).forEach(R=>{delete c[R]}),Et(v).forEach(R=>{Ze(R,v[R])}),l.forEach(R=>R&&R.reset())}function nr(v){const{value:R}=GS(v,void 0,le);return Qe(R,()=>{y(H(v))||N({mode:"validated-only"})},{deep:!0}),r.add(H(v)),R}function D(v){return Array.isArray(v)?v.map(nr):nr(v)}function G(v,R){const M=i.value[v];M&&ve(M,F=>F.setTouched(R))}function k(v){Et(v).forEach(R=>{G(R,!!v[R])})}function j(v,R){const M=i.value[v];M&&ve(M,F=>F.resetField(R))}function ie(v){s=!0,at(M=>M.resetField());const R=v!=null&&v.values?v.values:I.value;A(R),wn(R),v!=null&&v.touched&&k(v.touched),lt((v==null?void 0:v.errors)||{}),a.value=(v==null?void 0:v.submitCount)||0,fn(()=>{s=!1})}function Le(v,R){const M=Os(v),F=R;if(!i.value[F]){i.value[F]=M;return}const Q=i.value[F];Q&&!Array.isArray(Q)&&(i.value[F]=[Q]),i.value[F]=[...i.value[F],M]}function ue(v,R){const M=R,F=i.value[M];if(F){if(!Ee(F)&&v.id===F.id){delete i.value[M];return}if(Ee(F)){const Q=F.findIndex(X=>X.id===v.id);if(Q===-1)return;F.splice(Q,1),F.length||delete i.value[M]}}}function g(v){const R=H(v.name);Le(v,R),Me(v.name)&&Qe(v.name,async(F,Q)=>{await fn(),ue(v,Q),Le(v,F),(f.value[Q]||f.value[F])&&(Rt(Q,void 0),P(F)),await fn(),y(Q)||Ql(c,Q)});const M=H(v.errorMessage);M&&(m==null?void 0:m[R])!==M&&P(R),delete m[R]}function E(v){const R=H(v.name),M=i.value[R],F=!!M&&Ee(M);ue(v,R),fn(()=>{var Q;const X=(Q=H(v.keepValueOnUnmount))!==null&&Q!==void 0?Q:H(w),ee=rt(c,R);if(F&&(M===i.value[R]||!i.value[R])&&!X)if(Array.isArray(ee)){const Ne=ee.findIndex($e=>ct($e,H(v.checkedValue)));if(Ne>-1){const $e=[...ee];$e.splice(Ne,1),Ze(R,$e,{force:!0})}}else ee===H(v.checkedValue)&&Ql(c,R);if(!y(R)){if(Rt(R,void 0),X||F&&Array.isArray(ee)&&!$S(ee))return;Ql(c,R)}})}async function N(v){const R=(v==null?void 0:v.mode)||"force";if(R==="force"&&at(X=>X.meta.validated=!0),le.validateSchema)return le.validateSchema(R);const M=await Promise.all(Object.values(i.value).map(X=>{const ee=Array.isArray(X)?X[0]:X;return ee?ee.validate(v).then(he=>({key:H(ee.name),valid:he.valid,errors:he.errors})):Promise.resolve({key:"",valid:!0,errors:[]})})),F={},Q={};for(const X of M)F[X.key]={valid:X.valid,errors:X.errors},X.errors.length&&(Q[X.key]=X.errors[0]);return{valid:M.every(X=>X.valid),results:F,errors:Q}}async function P(v){const R=i.value[v];return R?Array.isArray(R)?R.map(M=>M.validate())[0]:R.validate():Promise.resolve({errors:[],valid:!0})}function L(v){Ql(C.value,v)}function B(v,R,M=!1){Mr(c,v,R),Y(v,R),M&&!(t!=null&&t.initialValues)&&Mr(I.value,v,je(R))}function Y(v,R){Mr(C.value,v,je(R))}async function V(){const v=H(O);return v?sa(v)||Jr(v)?await lW(v,c):await cW(v,c,{names:b.value,bailsMap:_.value}):{valid:!0,results:{},errors:{}}}const W=_e((v,{evt:R})=>{qq(R)&&R.target.submit()});return $a(()=>{if(t!=null&&t.initialErrors&&lt(t.initialErrors),t!=null&&t.initialTouched&&k(t.initialTouched),t!=null&&t.validateOnMount){N();return}le.validateSchema&&le.validateSchema("silent")}),Me(O)&&Qe(O,()=>{var v;(v=le.validateSchema)===null||v===void 0||v.call(le,"validated-only")}),zn(yh,le),Object.assign(Object.assign({},le),{handleReset:()=>ie(),submitForm:W})}function vW(t,e,n,r){const s={touched:"some",pending:"some",valid:"every"},i=ae(()=>!ct(e,H(n)));function o(){const l=Object.values(t.value).flat(1).filter(Boolean);return Et(s).reduce((c,u)=>{const h=s[u];return c[u]=l[h](d=>d.meta[u]),c},{})}const a=dt(o());return Zi(()=>{const l=o();a.touched=l.touched,a.valid=l.valid,a.pending=l.pending}),ae(()=>Object.assign(Object.assign({initialValues:H(n)},a),{valid:a.valid&&!Et(r.value).length,dirty:i.value}))}function wW(t,e,n){const r=QS(n),s=n==null?void 0:n.initialValues,i=ke(r),o=ke(je(r));function a(l,c=!1){i.value=je(l),o.value=je(l),c&&Et(t.value).forEach(u=>{const h=t.value[u],d=Array.isArray(h)?h.some(p=>p.meta.touched):h==null?void 0:h.meta.touched;if(!h||d)return;const f=rt(i.value,u);Mr(e,u,je(f))})}return Me(s)&&Qe(s,l=>{a(l,!0)},{deep:!0}),{initialValues:i,originalInitialValues:o,setInitialValues:a}}function EW(t){const e=ke({});function n(i){return Array.isArray(i)?i:i?[i]:[]}function r(i,o){if(!o){delete e.value[i];return}e.value[i]=n(o)}function s(i){e.value=Et(i).reduce((o,a)=>{const l=i[a];return l&&(o[a]=n(l)),o},{})}return t&&s(t),{errorBag:e,setErrorBag:s,setFieldErrorBag:r}}function ZK(t){const e=Sg(yh,void 0),n=ke([]),r=()=>{},s={fields:n,remove:r,push:r,swap:r,insert:r,update:r,replace:r,prepend:r,move:r};if(!e||!H(t))return s;const i=e.fieldArrays.find(I=>H(I.path)===H(t));if(i)return i;let o=0;function a(){return rt(e==null?void 0:e.values,H(t),[])||[]}function l(){const I=a();n.value=I.map(u),c()}l();function c(){const I=n.value.length;for(let A=0;A<I;A++){const S=n.value[A];S.isFirst=A===0,S.isLast=A===I-1}}function u(I){const A=o++;return{key:A,value:zq({get(){const T=rt(e==null?void 0:e.values,H(t),[])||[],O=n.value.findIndex(U=>U.key===A);return O===-1?I:T[O]},set(T){const O=n.value.findIndex(U=>U.key===A);O!==-1&&_(O,T)}}),isFirst:!1,isLast:!1}}function h(){c(),e==null||e.validate({mode:"silent"})}function d(I){const A=H(t),S=rt(e==null?void 0:e.values,A);if(!S||!Array.isArray(S))return;const T=[...S];T.splice(I,1),e==null||e.unsetInitialValue(A+`[${I}]`),e==null||e.setFieldValue(A,T),n.value.splice(I,1),h()}function f(I){const A=H(t),S=rt(e==null?void 0:e.values,A),T=ra(S)?[]:S;if(!Array.isArray(T))return;const O=[...T];O.push(I),e==null||e.stageInitialValue(A+`[${O.length-1}]`,I),e==null||e.setFieldValue(A,O),n.value.push(u(I)),h()}function p(I,A){const S=H(t),T=rt(e==null?void 0:e.values,S);if(!Array.isArray(T)||!(I in T)||!(A in T))return;const O=[...T],U=[...n.value],Z=O[I];O[I]=O[A],O[A]=Z;const q=U[I];U[I]=U[A],U[A]=q,e==null||e.setFieldValue(S,O),n.value=U,c()}function y(I,A){const S=H(t),T=rt(e==null?void 0:e.values,S);if(!Array.isArray(T)||T.length<I)return;const O=[...T],U=[...n.value];O.splice(I,0,A),U.splice(I,0,u(A)),e==null||e.setFieldValue(S,O),n.value=U,h()}function b(I){const A=H(t);e==null||e.setFieldValue(A,I),l(),h()}function _(I,A){const S=H(t),T=rt(e==null?void 0:e.values,S);!Array.isArray(T)||T.length-1<I||(e==null||e.setFieldValue(`${S}[${I}]`,A),e==null||e.validate({mode:"validated-only"}))}function m(I){const A=H(t),S=rt(e==null?void 0:e.values,A),T=ra(S)?[]:S;if(!Array.isArray(T))return;const O=[I,...T];e==null||e.stageInitialValue(A+`[${O.length-1}]`,I),e==null||e.setFieldValue(A,O),n.value.unshift(u(I)),h()}function w(I,A){const S=H(t),T=rt(e==null?void 0:e.values,S),O=ra(T)?[]:[...T];if(!Array.isArray(T)||!(I in T)||!(A in T))return;const U=[...n.value],Z=U[I];U.splice(I,1),U.splice(A,0,Z);const q=O[I];O.splice(I,1),O.splice(A,0,q),e==null||e.setFieldValue(S,O),n.value=U,h()}const C={fields:n,remove:d,push:f,swap:p,insert:y,update:_,replace:b,prepend:m,move:w};return e.fieldArrays.push(Object.assign({path:t,reset:l},C)),eo(()=>{const I=e.fieldArrays.findIndex(A=>H(A.path)===H(t));I>=0&&e.fieldArrays.splice(I,1)}),Qe(a,I=>{const A=n.value.map(S=>S.value);ct(I,A)||l()}),C}/**
  * vee-validate v4.8.6
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function iw(t){return typeof t=="function"}const bW=t=>t!==null&&!!t&&typeof t=="object"&&!Array.isArray(t);function XS(t,e){return Object.keys(e).forEach(n=>{if(bW(e[n])){t[n]||(t[n]={}),XS(t[n],e[n]);return}t[n]=e[n]}),t}function ow(t,e){return t.replace(/(\d:)?{([^}]+)}/g,function(n,r,s){if(!r||!e.params)return s in e?e[s]:e.params&&s in e.params?e.params[s]:`{${s}}`;if(!Array.isArray(e.params))return s in e.params?e.params[s]:`{${s}}`;const i=Number(r.replace(":",""));return i in e.params?e.params[i]:`${r}{${s}}`})}class TW{constructor(e,n){this.container={},this.locale=e,this.merge(n)}resolve(e){return this.format(this.locale,e)}getLocaleDefault(e,n){var r,s,i,o,a;return((i=(s=(r=this.container[e])===null||r===void 0?void 0:r.fields)===null||s===void 0?void 0:s[n])===null||i===void 0?void 0:i._default)||((a=(o=this.container[e])===null||o===void 0?void 0:o.messages)===null||a===void 0?void 0:a._default)}format(e,n){var r,s,i,o,a,l,c;let u;const{rule:h,form:d,label:f,name:p}=n,y=f||((s=(r=this.container[e])===null||r===void 0?void 0:r.names)===null||s===void 0?void 0:s[p])||p;return h?(u=((a=(o=(i=this.container[e])===null||i===void 0?void 0:i.fields)===null||o===void 0?void 0:o[p])===null||a===void 0?void 0:a[h.name])||((c=(l=this.container[e])===null||l===void 0?void 0:l.messages)===null||c===void 0?void 0:c[h.name]),u||(u=this.getLocaleDefault(e,p)||`${y} is not valid`),iw(u)?u(n):ow(u,Object.assign(Object.assign({},d),{field:y,params:h.params}))):(u=this.getLocaleDefault(e,p)||`${y} is not valid`,iw(u)?u(n):ow(u,Object.assign(Object.assign({},d),{field:y})))}merge(e){XS(this.container,e)}}let ri;function IW(t,e){ri||(ri=new TW("en",{}));const n=r=>ri.resolve(r);return typeof t=="string"?(ri.locale=t,e&&ri.merge({[t]:e}),n):(ri.merge(t),n)}/**
  * vee-validate v4.8.6
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */const Xl={en:/^[A-Z]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,da:/^[A-ZÆØÅ]*$/i,de:/^[A-ZÄÖÜß]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ]*$/i,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,it:/^[A-Z\xC0-\xFF]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,nl:/^[A-ZÉËÏÓÖÜ]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,ru:/^[А-ЯЁ]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,sr:/^[A-ZČĆŽŠĐ]*$/i,sv:/^[A-ZÅÄÖ]*$/i,tr:/^[A-ZÇĞİıÖŞÜ]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,az:/^[A-ZÇƏĞİıÖŞÜ]*$/i,ug:/^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ]*$/i},CW=t=>{if(t)return Array.isArray(t)?t[0]:t.locale};function Ag(t,e){return Array.isArray(t)?t[0]:t[e]}function vh(t){return!!(t==null||t===""||Array.isArray(t)&&t.length===0)}const JS=(t,e)=>{if(vh(t))return!0;const n=CW(e);if(Array.isArray(t))return t.every(s=>JS(s,{locale:n}));const r=String(t);return n?(Xl[n]||Xl.en).test(r):Object.keys(Xl).some(s=>Xl[s].test(r))},SW=(t,e)=>{const n=Ag(e,"target");return String(t)===String(n)},AW=t=>{if(vh(t))return!0;const e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(t)?t.every(n=>e.test(String(n))):e.test(String(t))};function RW(t){return t==null}function kW(t){return Array.isArray(t)&&t.length===0}const ZS=(t,e)=>{if(vh(t))return!0;const n=Ag(e,"length");return Array.isArray(t)?t.every(r=>ZS(r,{length:n})):String(t).length<=Number(n)},eA=(t,e)=>{if(vh(t))return!0;const n=Ag(e,"length");return Array.isArray(t)?t.every(r=>eA(r,{length:n})):String(t).length>=Number(n)},NW=t=>RW(t)||kW(t)||t===!1?!1:!!String(t).trim().length,OW={generateMessage:({field:t})=>`${t} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};Object.assign({},OW);const PW=vn("alpha",JS),DW=vn("confirmed",SW),xW=vn("email",AW),MW=vn("max",ZS),LW=vn("min",eA),FW=vn("required",NW),UW=vn("properNounCase",t=>{const e=t.split(" ");let n=!0;return e.forEach(r=>{/^[A-Z]/.test(r[0])||(n=!1)}),n?!0:"Each word must begin with a capitalized A through Z."}),$W=vn("alphaAndSpace",t=>/^[A-Za-z\s]+$/.test(t)?!0:"Restricted to spaces and the letters a through z."),VW=vn("alphaSpaceAndDot",t=>/^[A-Za-z.\s]+$/.test(t)||t===""?!0:"Restricted to spaces, periods, and the letters a through z."),BW=vn("narrativeString",t=>/^[A-Za-z0-9.\s?!:,;#'"]+$/.test(t)?!0:`Restricted to spaces, letters, numbers and the symbols (.?!:,;#'").`),HW=vn("slug",t=>/^[a-z-]+[^-]$/.test(t)?!0:"Restricted to dashes and the letters 'a' through 'z'. Must start and end with a letter 'a' through 'z'."),jW=vn("requiredAbbreviation",(t,[e,n],r)=>r.form[e]===void 0||r.form[e].length<n||t?!0:"This field is required."),qW=vn("requiredIf",(t,[e],n)=>n.form[e]&&!t?"This field is required.":!0);nW({validateOnBlur:!1,validateOnChange:!1,validateOnInput:!1,validateOnModelUpdate:!1,generateMessage:IW("en",{messages:{alpha:'Restricted to the letters "a" to "z".',max:"Restricted to at most 0:{max} characters.",min:"Restricted to at least 0:{min} characters.",required:"This field is required.",confirmed:"1:{field_name} must match what is entered in the 2:{match_field_name} field."}})});const WW={alpha:PW,confirmed:DW,email:xW,max:MW,min:LW,required:FW,properNounCase:UW,alphaAndSpace:$W,alphaSpaceAndDot:VW,requiredAbbreviation:jW,slug:HW,narrativeString:BW,requiredIf:qW};function tA(t,e,n){const r=e.length-1;if(r<0)return t===void 0?n:t;for(let s=0;s<r;s++){if(t==null)return n;t=t[e[s]]}return t==null||t[e[r]]===void 0?n:t[e[r]]}function zW(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(r=>zW(t[r],e[r]))}function Gf(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),tA(t,e.split("."),n))}function e2(t,e,n){if(e==null)return t===void 0?n:t;if(t!==Object(t)){if(typeof e!="function")return n;const s=e(t,n);return typeof s>"u"?n:s}if(typeof e=="string")return Gf(t,e,n);if(Array.isArray(e))return tA(t,e,n);if(typeof e!="function")return n;const r=e(t,n);return typeof r>"u"?n:r}function KW(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,r)=>e+r)}function t2(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function aw(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function n2(t){return t==null?void 0:t.$el}const r2=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function GW(t,e){const n=Object.create(null),r=Object.create(null);for(const s in t)e.some(i=>i instanceof RegExp?i.test(s):i===s)?n[s]=t[s]:r[s]=t[s];return[n,r]}function s2(t,e){const n={...t};return e.forEach(r=>delete n[r]),n}function i2(t){return GW(t,["class","style","id",/^data-/])}function o2(t){return t==null?[]:Array.isArray(t)?t:[t]}function YW(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function QW(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<t.length;)n.push(t.substr(r,e)),r+=e;return n}function a2(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(t<e)return`${t} B`;const n=e===1024?["Ki","Mi","Gi"]:["k","M","G"];let r=-1;for(;Math.abs(t)>=e&&r<n.length-1;)t/=e,++r;return`${t.toFixed(1)} ${n[r]}B`}function br(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const s in t)r[s]=t[s];for(const s in e){const i=t[s],o=e[s];if(aw(i)&&aw(o)){r[s]=br(i,o,n);continue}if(Array.isArray(i)&&Array.isArray(o)&&n){r[s]=n(i,o);continue}r[s]=o}return r}function Zr(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Zr.cache.has(t))return Zr.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Zr.cache.set(t,e),e}Zr.cache=new Map;function _d(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>_d(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>_d(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return _d(t,e.component.subTree).flat(1)}return[]}function l2(t){const e=dt({}),n=ae(t);return Zi(()=>{for(const r in n.value)e[r]=n.value[r]},{flush:"sync"}),dp(e)}function c2(t,e){return t.includes(e)}const XW=/^on[^a-z]/,u2=t=>XW.test(t),h2=[Function,Array];function d2(t,e){return e="on"+Fa(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function f2(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(Array.isArray(t))for(const s of t)s(...n);else typeof t=="function"&&t(...n)}function nA(t,e,n){if(n&&(e={__isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?ez(e):"")}function ia(t,e,n){const r=nA(t,e,n);r!=null&&console.warn(r)}function lw(t,e,n){const r=nA(t,e,n);r!=null&&console.error(r)}const JW=/(?:^|[-_])(\w)/g,ZW=t=>t.replace(JW,e=>e.toUpperCase()).replace(/[-_]/g,"");function vd(t,e){if(t.$root===t)return"<Root>";const n=typeof t=="function"&&t.cid!=null?t.options:t.__isVue?t.$options||t.constructor.options:t||{};let r=n.name||n._componentTag;const s=n.__file;if(!r&&s){const i=s.match(/([^/\\]+)\.vue$/);r=i==null?void 0:i[1]}return(r?`<${ZW(r)}>`:"<Anonymous>")+(s&&e!==!1?` at ${s}`:"")}function ez(t){if(t.__isVue&&t.$parent){const e=[];let n=0;for(;t;){if(e.length>0){const r=e[e.length-1];if(r.constructor===t.constructor){n++,t=t.$parent;continue}else n>0&&(e[e.length-1]=[r,n],n=0)}e.push(t),t=t.$parent}return`

found in

`+e.map((r,s)=>`${s===0?"---> ":" ".repeat(5+s*2)}${Array.isArray(r)?`${vd(r[0])}... (${r[1]} recursive calls)`:vd(r)}`).join(`
`)}else return`

(found in ${vd(t)})`}const tz=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],nz=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,rz=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],sz=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function rA(t){const e=Array(3),n=nz,r=tz;for(let s=0;s<3;++s)e[s]=Math.round(YW(n(r[s][0]*t[0]+r[s][1]*t[1]+r[s][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Rg(t){let{r:e,g:n,b:r}=t;const s=[0,0,0],i=sz,o=rz;e=i(e/255),n=i(n/255),r=i(r/255);for(let a=0;a<3;++a)s[a]=o[a][0]*e+o[a][1]*n+o[a][2]*r;return s}const lu=.20689655172413793,iz=t=>t>lu**3?Math.cbrt(t):t/(3*lu**2)+4/29,oz=t=>t>lu?t**3:3*lu**2*(t-4/29);function sA(t){const e=iz,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function iA(t){const e=oz,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}function p2(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function ys(t){if(typeof t=="number")return(isNaN(t)||t<0||t>16777215)&&ia(`'${t}' is not a valid hex color`),{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;[3,4].includes(e.length)?e=e.split("").map(r=>r+r).join(""):[6,8].includes(e.length)||ia(`'${t}' is not a valid hex(a) color`);const n=parseInt(e,16);return(isNaN(n)||n<0||n>4294967295)&&ia(`'${t}' is not a valid hex(a) color`),lz(e)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${t==null?t:t.constructor.name} instead`)}function Jl(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function az(t){let{r:e,g:n,b:r,a:s}=t;return`#${[Jl(e),Jl(n),Jl(r),s!==void 0?Jl(Math.round(s*255)):"FF"].join("")}`}function lz(t){let[e,n,r,s]=QW(t,2).map(i=>parseInt(i,16));return s=s===void 0?s:Math.round(s/255*100)/100,{r:e,g:n,b:r,a:s}}function cz(t,e){const n=sA(Rg(t));return n[0]=n[0]+e*10,rA(iA(n))}function uz(t,e){const n=sA(Rg(t));return n[0]=n[0]-e*10,rA(iA(n))}function hz(t){const e=ys(t);return Rg(e)[1]}function go(t,e){const n=Yt();if(!n)throw new Error(`[Vuetify] ${t} ${e||"must be called from inside a setup function"}`);return n}function m2(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=go(t).type;return Zr((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let oA=0,dc=new WeakMap;function aA(){const t=go("getUid");if(dc.has(t))return dc.get(t);{const e=oA++;return dc.set(t,e),e}}aA.reset=()=>{oA=0,dc=new WeakMap};function dz(t){const{provides:e}=go("injectSelf");if(e&&t in e)return e[t]}function lA(t,e){let n;function r(){n=hu(),n.run(()=>e.length?e(()=>{var s;(s=n)==null||s.stop(),r()}):e())}Qe(t,s=>{if(s&&!n)r();else if(!s){var i;(i=n)==null||i.stop(),n=void 0}},{immediate:!0}),Dw(()=>{var s;(s=n)==null||s.stop()})}function kg(t,e){return n=>Object.keys(t).reduce((r,s)=>{const o=typeof t[s]=="object"&&t[s]!=null&&!Array.isArray(t[s])?t[s]:{type:t[s]};return n&&s in n?r[s]={...o,default:n[s]}:r[s]=o,e&&!r[s].source&&(r[s].source=e),r},{})}function fz(t,e){var n,r;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((r=t.props)==null?void 0:r[Zr(e)])<"u"}const yo=function(e){return e._setup=e._setup??e.setup,e.name?(e._setup&&(e.props=e.props??{},e.props=kg(e.props,Zr(e.name))(),e.props._as=String,e.setup=function(r,s){const i=cA();if(!i.value)return e._setup(r,s);const o=Yt(),a=ae(()=>i.value[r._as??e.name]),l=new Proxy(r,{get(h,d){if(!fz(o.vnode,d)){var f,p;return((f=a.value)==null?void 0:f[d])??((p=i.value.global)==null?void 0:p[d])??h[d]}return Reflect.get(h,d)}}),c=gc();Zi(()=>{if(a.value){const h=Object.entries(a.value).filter(d=>{let[f]=d;return f.startsWith(f[0].toUpperCase())});h.length&&(c.value=Object.fromEntries(h))}});const u=e._setup(l,s);return lA(c,()=>{var h;gz(br(((h=dz(Da))==null?void 0:h.value)??{},c.value))}),u}),e):(ia("The component is missing an explicit name, unable to generate default prop value"),e)};function g2(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?yo:js)(e)}const er=typeof window<"u",y2=er&&"IntersectionObserver"in window,pz=er&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),_2=er&&typeof CSS<"u"&&CSS.supports("selector(:focus-visible)"),Da=Symbol.for("vuetify:defaults");function mz(t){return ke(t)}function cA(){const t=tt(Da);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function gz(t,e){const n=cA(),r=ke(t),s=ae(()=>{const i=H(e==null?void 0:e.scoped),o=H(e==null?void 0:e.reset),a=H(e==null?void 0:e.root);let l=br(r.value,{prev:n.value});if(i)return l;if(o||a){const c=Number(o||1/0);for(let u=0;u<=c&&l.prev;u++)l=l.prev;return l}return br(l.prev,l)});return zn(Da,s),s}const Yf=Symbol.for("vuetify:display"),cw={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},yz=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:cw;return br(cw,t)};function uw(t){return er&&!t?window.innerWidth:0}function hw(t){return er&&!t?window.innerHeight:0}function _z(){const t=er?window.navigator.userAgent:"ssr";function e(p){return Boolean(t.match(p))}const n=e(/android/i),r=e(/iphone|ipad|ipod/i),s=e(/cordova/i),i=e(/electron/i),o=e(/chrome/i),a=e(/edge/i),l=e(/firefox/i),c=e(/opera/i),u=e(/win/i),h=e(/mac/i),d=e(/linux/i),f=e(/ssr/i);return{android:n,ios:r,cordova:s,electron:i,chrome:o,edge:a,firefox:l,opera:c,win:u,mac:h,linux:d,touch:pz,ssr:f}}function vz(t,e){const{thresholds:n,mobileBreakpoint:r}=yz(t),s=ke(hw(e)),i=_z(),o=dt({}),a=ke(uw(e));function l(){s.value=hw(),a.value=uw()}return Zi(()=>{const c=a.value<n.sm,u=a.value<n.md&&!c,h=a.value<n.lg&&!(u||c),d=a.value<n.xl&&!(h||u||c),f=a.value<n.xxl&&!(d||h||u||c),p=a.value>=n.xxl,y=c?"xs":u?"sm":h?"md":d?"lg":f?"xl":"xxl",b=typeof r=="number"?r:n[r],_=i.ssr?i.android||i.ios||i.opera:a.value<b;o.xs=c,o.sm=u,o.md=h,o.lg=d,o.xl=f,o.xxl=p,o.smAndUp=!c,o.mdAndUp=!(c||u),o.lgAndUp=!(c||u||h),o.xlAndUp=!(c||u||h||d),o.smAndDown=!(h||d||f||p),o.mdAndDown=!(d||f||p),o.lgAndDown=!(f||p),o.xlAndDown=!p,o.name=y,o.height=s.value,o.width=a.value,o.mobile=_,o.mobileBreakpoint=r,o.platform=i,o.thresholds=n}),er&&window.addEventListener("resize",l,{passive:!0}),{...dp(o),update:l,ssr:!!e}}function v2(){const t=tt(Yf);if(!t)throw new Error("Could not find Vuetify display injection");return t}const wz={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},Ez={component:t=>Dn(uA,{...t,class:"mdi"})},bz=[String,Function,Object],Qf=Symbol.for("vuetify:icons"),wh=kg({icon:{type:bz},tag:{type:String,required:!0}},"icon"),dw=yo({name:"VComponentIcon",props:wh(),setup(t,e){let{slots:n}=e;return()=>{var r;return De(t.tag,null,{default:()=>[t.icon?De(t.icon,null,null):(r=n.default)==null?void 0:r.call(n)]})}}}),Tz=yo({name:"VSvgIcon",inheritAttrs:!1,props:wh(),setup(t,e){let{attrs:n}=e;return()=>De(t.tag,OE(n,{style:null}),{default:()=>[De("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[De("path",{d:t.icon},null)])]})}});wh();const uA=yo({name:"VClassIcon",props:wh(),setup(t){return()=>De(t.tag,{class:t.icon},null)}}),Iz={svg:{component:Tz},class:{component:uA}};function Cz(t){return br({defaultSet:"mdi",sets:{...Iz,mdi:Ez},aliases:wz},t)}const w2=t=>{const e=tt(Qf);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:ae(()=>{const r=Me(t)?t.value:t.icon;if(!r)return{component:dw};let s=r;if(typeof s=="string"&&(s=s.trim(),s.startsWith("$"))){var i;s=(i=e.aliases)==null?void 0:i[s.slice(1)]}if(!s)throw new Error(`Could not find aliased icon "${r}"`);if(typeof s!="string")return{component:dw,icon:s};const o=Object.keys(e.sets).find(c=>typeof s=="string"&&s.startsWith(`${c}:`)),a=o?s.slice(o.length+1):s;return{component:e.sets[o??e.defaultSet].component,icon:a}})}};function Sz(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h=>h,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:h=>h;const i=go("useProxiedModel"),o=ke(t[e]!==void 0?t[e]:n),a=Zr(e),c=ae(a!==e?()=>{var h,d,f,p;return t[e],!!(((h=i.vnode.props)!=null&&h.hasOwnProperty(e)||(d=i.vnode.props)!=null&&d.hasOwnProperty(a))&&((f=i.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${e}`)||(p=i.vnode.props)!=null&&p.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var h,d;return t[e],!!((h=i.vnode.props)!=null&&h.hasOwnProperty(e)&&(d=i.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`))});lA(()=>!c.value,()=>{Qe(()=>t[e],h=>{o.value=h})});const u=ae({get(){return r(c.value?t[e]:o.value)},set(h){const d=s(h);(c.value?t[e]:o.value)===d||r(c.value?t[e]:o.value)===h||(o.value=d,i==null||i.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?t[e]:o.value}),u}const Az={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}}},fw="$vuetify.",pw=(t,e)=>t.replace(/\{(\d+)\}/g,(n,r)=>String(e[+r])),hA=(t,e,n)=>function(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];if(!r.startsWith(fw))return pw(r,i);const a=r.replace(fw,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=Gf(l,a,null);return u||(ia(`Translation key "${r}" not found in "${t.value}", trying fallback locale`),u=Gf(c,a,null)),u||(lw(`Translation key "${r}" not found in fallback`),u=r),typeof u!="string"&&(lw(`Translation key "${r}" has a non-string value`),u=r),pw(u,i)};function dA(t,e){return(n,r)=>new Intl.NumberFormat([t.value,e.value],r).format(n)}function wd(t,e,n){const r=Sz(t,e,t[e]??n.value);return r.value=t[e]??n.value,Qe(n,s=>{t[e]==null&&(r.value=n.value)}),r}function fA(t){return e=>{const n=wd(e,"locale",t.current),r=wd(e,"fallback",t.fallback),s=wd(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:r,messages:s,t:hA(n,r,s),n:dA(n,r),provide:fA({current:n,fallback:r,messages:s})}}}function Rz(t){const e=ke((t==null?void 0:t.locale)??"en"),n=ke((t==null?void 0:t.fallback)??"en"),r=ke({en:Az,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:r,t:hA(e,n,r),n:dA(e,n),provide:fA({current:e,fallback:n,messages:r})}}const kz={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!1,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},cu=Symbol.for("vuetify:locale");function Nz(t){return t.name!=null}function Oz(t){const e=t!=null&&t.adapter&&Nz(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:Rz(t),n=Pz(e,t);return{...e,...n}}function E2(){const t=tt(cu);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t}function Pz(t,e){const n=ke((e==null?void 0:e.rtl)??kz),r=ae(()=>n.value[t.current.value]??!1);return{isRtl:r,rtl:n,rtlClasses:ae(()=>`v-locale--is-${r.value?"rtl":"ltr"}`)}}function b2(){const t=tt(cu);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const si=2.4,mw=.2126729,gw=.7151522,yw=.072175,Dz=.55,xz=.58,Mz=.57,Lz=.62,Zl=.03,_w=1.45,Fz=5e-4,Uz=1.25,$z=1.25,vw=.078,ww=12.82051282051282,ec=.06,Ew=.001;function bw(t,e){const n=(t.r/255)**si,r=(t.g/255)**si,s=(t.b/255)**si,i=(e.r/255)**si,o=(e.g/255)**si,a=(e.b/255)**si;let l=n*mw+r*gw+s*yw,c=i*mw+o*gw+a*yw;if(l<=Zl&&(l+=(Zl-l)**_w),c<=Zl&&(c+=(Zl-c)**_w),Math.abs(c-l)<Fz)return 0;let u;if(c>l){const h=(c**Dz-l**xz)*Uz;u=h<Ew?0:h<vw?h-h*ww*ec:h-ec}else{const h=(c**Lz-l**Mz)*$z;u=h>-Ew?0:h>-vw?h-h*ww*ec:h+ec}return u*100}const xa=Symbol.for("vuetify:theme"),T2=kg({theme:String},"theme"),ko={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function Vz(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ko;if(!t)return{...ko,isDisabled:!0};const e={};for(const[s,i]of Object.entries(t.themes??{})){var n,r;const o=i.dark||s==="dark"?(n=ko.themes)==null?void 0:n.dark:(r=ko.themes)==null?void 0:r.light;e[s]=br(o,i)}return br(ko,{...t,themes:e})}function Bz(t){const e=dt(Vz(t)),n=ke(e.defaultTheme),r=ke(e.themes),s=ae(()=>{const c={};for(const[u,h]of Object.entries(r.value)){const d=c[u]={...h,colors:{...h.colors}};if(e.variations)for(const f of e.variations.colors){const p=d.colors[f];if(p)for(const y of["lighten","darken"]){const b=y==="lighten"?cz:uz;for(const _ of KW(e.variations[y],1))d.colors[`${f}-${y}-${_}`]=az(b(ys(p),_))}}for(const f of Object.keys(d.colors)){if(/^on-[a-z]/.test(f)||d.colors[`on-${f}`])continue;const p=`on-${f}`,y=ys(d.colors[f]),b=Math.abs(bw(ys(0),y)),_=Math.abs(bw(ys(16777215),y));d.colors[p]=_>Math.min(b,50)?"#fff":"#000"}}return c}),i=ae(()=>s.value[n.value]),o=ae(()=>{const c=[];i.value.dark&&ii(c,":root",["color-scheme: dark"]);for(const[f,p]of Object.entries(s.value)){const{variables:y,dark:b}=p;ii(c,`.v-theme--${f}`,[`color-scheme: ${b?"dark":"normal"}`,...Hz(p),...Object.keys(y).map(_=>{const m=y[_],w=typeof m=="string"&&m.startsWith("#")?ys(m):void 0,C=w?`${w.r}, ${w.g}, ${w.b}`:void 0;return`--v-${_}: ${C??m}`})])}const u=[],h=[],d=new Set(Object.values(s.value).flatMap(f=>Object.keys(f.colors)));for(const f of d)/^on-[a-z]/.test(f)?ii(h,`.${f}`,[`color: rgb(var(--v-theme-${f})) !important`]):(ii(u,`.bg-${f}`,[`--v-theme-overlay-multiplier: var(--v-theme-${f}-overlay-multiplier)`,`background: rgb(var(--v-theme-${f})) !important`,`color: rgb(var(--v-theme-on-${f})) !important`]),ii(h,`.text-${f}`,[`color: rgb(var(--v-theme-${f})) !important`]),ii(h,`.border-${f}`,[`--v-border-color: var(--v-theme-${f})`]));return c.push(...u,...h),c.map((f,p)=>p===0?f:`    ${f}`).join("")});function a(c){const u=c._context.provides.usehead;if(u)u.addHeadObjs(ae(()=>{const h={children:o.value,type:"text/css",id:"vuetify-theme-stylesheet"};return e.cspNonce&&(h.nonce=e.cspNonce),{style:[h]}})),er&&Zi(()=>u.updateDOM());else{let d=function(){if(!e.isDisabled){if(typeof document<"u"&&!h){const f=document.createElement("style");f.type="text/css",f.id="vuetify-theme-stylesheet",e.cspNonce&&f.setAttribute("nonce",e.cspNonce),h=f,document.head.appendChild(h)}h&&(h.innerHTML=o.value)}},h=er?document.getElementById("vuetify-theme-stylesheet"):null;Qe(o,d,{immediate:!0})}}const l=ae(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:a,isDisabled:e.isDisabled,name:n,themes:r,current:i,computedThemes:s,themeClasses:l,styles:o,global:{name:n,current:i}}}function I2(t){go("provideTheme");const e=tt(xa,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=ae(()=>t.theme??(e==null?void 0:e.name.value)),r=ae(()=>e.isDisabled?void 0:`v-theme--${n.value}`),s={...e,name:n,themeClasses:r};return zn(xa,s),s}function C2(){go("useTheme");const t=tt(xa,null);if(!t)throw new Error("Could not find Vuetify theme injection");return t}function ii(t,e,n){t.push(`${e} {
`,...n.map(r=>`  ${r};
`),`}
`)}function Hz(t){const e=t.dark?2:1,n=t.dark?1:2,r=[];for(const[s,i]of Object.entries(t.colors)){const o=ys(i);r.push(`--v-theme-${s}: ${o.r},${o.g},${o.b}`),s.startsWith("on-")||r.push(`--v-theme-${s}-overlay-multiplier: ${hz(i)>.18?e:n}`)}return r}function pA(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,r=br(e,n),{aliases:s={},components:i={},directives:o={}}=r,a=mz(r.defaults),l=vz(r.display,r.ssr),c=Bz(r.theme),u=Cz(r.icons),h=Oz(r.locale);return{install:f=>{for(const p in o)f.directive(p,o[p]);for(const p in i)f.component(p,i[p]);for(const p in s)f.component(p,yo({...s[p],name:p,aliasName:s[p].name}));if(c.install(f),f.provide(Da,a),f.provide(Yf,l),f.provide(xa,c),f.provide(Qf,u),f.provide(cu,h),er&&r.ssr)if(f.$nuxt)f.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:p}=f;f.mount=function(){const y=p(...arguments);return fn(()=>l.update()),f.mount=p,y}}aA.reset(),f.mixin({computed:{$vuetify(){return dt({defaults:No.call(this,Da),display:No.call(this,Yf),theme:No.call(this,xa),icons:No.call(this,Qf),locale:No.call(this,cu)})}}})},defaults:a,display:l,theme:c,icons:u,locale:h}}const jz="3.1.4";pA.version=jz;function No(t){var e,n;const r=this.$,s=((e=r.parent)==null?void 0:e.provides)??((n=r.vnode.appContext)==null?void 0:n.provides);if(s&&t in s)return s[t]}const qz={dark:!1,colors:{background:"#000","on-surface":"#91FF00",surface:"#000000",primary:"#91FF00","primary-darken-1":"#151B16","primary-darken-2":"#427100","primary-darken-3":"#315400","primary-lighten-2":"#E7FF4C","hidden-primary-darken-1":"#299602",secondary:"#c900cc","secondary-darken-1":"#9200b3",error:"#eb0942",info:"#ebe309",success:"#09b3eb",warning:"#fa05e6"}},Wz=$n(t=>{const e=pA({theme:{defaultTheme:"crickTheme",themes:{crickTheme:qz}},icons:{defaultSet:"mdi"}});t.vueApp.use(e)}),zz=[KO,GO,JO,aD,lD,z1,Dq,xq,Mq,Lq,WW,Wz],Kz=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Gz=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&Kz(t.route,n));return typeof r=="function"?r(t.route):r},Yz=(t,e)=>({default:()=>t?Dn(SR,t===!0?{}:t,e):e}),Qz=js({name:"FragmentWrapper",setup(t,{slots:e}){return()=>{var n;return(n=e.default)==null?void 0:n.call(e)}}}),Xz=(t,e,n)=>({default:()=>e?Dn(t,e===!0?{}:e,n):Dn(Qz,{},n)}),Jz=js({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e}){const n=St();return()=>Dn(S0,{name:t.name,route:t.route,...e},{default:r=>{if(!r.Component)return;const s=Gz(r,t.pageKey),i=n.deferHydration(),o=!!(t.transition??r.route.meta.pageTransition??qd),a=o&&eK([t.transition,r.route.meta.pageTransition,qd,{onAfterLeave:()=>{n.callHook("page:transition:finish",r.Component)}}].filter(Boolean));return Xz(Ap,o&&a,Yz(t.keepalive??r.route.meta.keepalive??QO,Dn(sE,{onPending:()=>n.callHook("page:start",r.Component),onResolve:()=>{fn(()=>n.callHook("page:finish",r.Component).finally(i))}},{default:()=>Dn(tK,{key:s,routeProps:r,pageKey:s,hasTransition:o})}))).default()}})}});function Zz(t){return Array.isArray(t)?t:t?[t]:[]}function eK(t){const e=t.map(n=>({...n,onAfterLeave:Zz(n.onAfterLeave)}));return QN(...e)}const tK=js({name:"RouteProvider",props:["routeProps","pageKey","hasTransition"],setup(t){const e=t.pageKey,n=t.routeProps.route,r={};for(const s in t.routeProps.route)r[s]=ae(()=>e===t.pageKey?t.routeProps.route[s]:n[s]);return zn("_route",dt(r)),()=>Dn(t.routeProps.Component)}}),nK=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},rK={};function sK(t,e){const n=Jz;return jr(),ek("div",null,[De(n)])}const iK=nK(rK,[["render",sK]]),Tw={__name:"nuxt-root",setup(t){const e=Qt(()=>de(()=>import("./error-component.1cb6fea6.js"),["./error-component.1cb6fea6.js","./backButton.3ed8edb3.js","./VIcon.4c30e4d0.js","./tag.622ed0d5.js","./color.16bf09b2.js","./useRender.711bb119.js","./VIcon.9957792f.css","./VBtn.b508a718.js","./elevation.c0c3c7d4.js","./density.a43ed496.js","./rounded.2773415e.js","./router.4d4a04cb.js","./group.2a175b20.js","./index.8efa490c.js","./index.9bfde38d.css","./dimensions.85878954.js","./loader.a28a0d31.js","./VProgressLinear.58e0b888.js","./VProgressLinear.c71ac71c.css","./position.6ecf00cf.js","./VProgressCircular.a0eacb68.js","./resizeObserver.f5995fd7.js","./VProgressCircular.cb74e3ed.css","./VBtn.94b255ef.css","./VContainer.84ccdb61.js","./VRow.afde100a.js","./VRow.5384e9e0.css","./VCard.1acd0fd0.js","./createSimpleFunctional.e260b764.js","./VAvatar.1cb02f40.js","./VImg.732dd834.js","./index.26545022.js","./transition.c0b5a353.js","./VImg.fbbd1a36.css","./VAvatar.b72a6b57.css","./VCard.6b2e677e.css","./VApp.d1dbb3ce.js","./VApp.a04bdf69.css"],import.meta.url).then(a=>a.default||a)),n=()=>null,r=St(),s=r.deferHydration();zn("_route",nO()),r.hooks.callHookWith(a=>a.map(l=>l()),"vue:setup");const i=Eu();pE((a,l,c)=>{r.hooks.callHook("vue:error",a,l,c).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u)),eO(a)&&(a.fatal||a.unhandled)&&ar(r,di,[a])});const{islandContext:o}=!1;return(a,l)=>(jr(),hi(sE,{onResolve:H(s)},{default:nE(()=>[H(i)?(jr(),hi(H(e),{key:0,error:H(i)},null,8,["error"])):H(o)?(jr(),hi(H(n),{key:1,context:H(o)},null,8,["context"])):(jr(),hi(H(iK),{key:2}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=AN.create({baseURL:kN()}));let Iw;const oK=jN(zz);Iw=async function(){var s;const n=Boolean((s=window.__NUXT__)==null?void 0:s.serverRendered)?Bk(Tw):Vk(Tw),r=VN({vueApp:n});try{await HN(r,oK)}catch(i){await r.callHook("app:error",i),r.payload.error=r.payload.error||i}try{await r.hooks.callHook("app:created",n),await r.hooks.callHook("app:beforeMount",n),n.mount("#"+XO),await r.hooks.callHook("app:mounted",n),await fn()}catch(i){await r.callHook("app:error",i),r.payload.error=r.payload.error||i}},Iw().catch(t=>{console.error("Error while mounting app:",t)});export{jK as $,eo as A,RR as B,uK as C,bK as D,nO as E,qt as F,yo as G,T2 as H,bz as I,fp as J,E2 as K,C2 as L,GW as M,OE as N,RK as O,XK as P,Me as Q,YK as R,vK as S,Ap as T,GK as U,zK as V,KK as W,qK as X,ZK as Y,HK as Z,nK as _,De as a,a2 as a$,MK as a0,UK as a1,LK as a2,DK as a3,VK as a4,wK as a5,I2 as a6,gz as a7,tt as a8,fK as a9,Oi as aA,w2 as aB,aw as aC,r2 as aD,js as aE,dp as aF,dK as aG,d2 as aH,er as aI,Dw as aJ,p2 as aK,ia as aL,Zi as aM,Qn as aN,qw as aO,i2 as aP,gr as aQ,f2 as aR,u2 as aS,lA as aT,n2 as aU,hu as aV,_2 as aW,lw as aX,YW as aY,gK as aZ,yK as a_,kg as aa,zn as ab,Sz as ac,t2 as ad,go as ae,aA as af,g2 as ag,h2 as ah,Qe as ai,e2 as aj,s2 as ak,zW as al,o2 as am,WK as an,Fa as ao,Dn as ap,y2 as aq,fn as ar,dt as as,_d as at,hE as au,uE as av,b2 as aw,m2 as ax,l2 as ay,c2 as az,ek as b,EK as b0,SK as b1,Pl as b2,CK as b3,Xz as b4,St as b5,bu as b6,Va as b7,hK as b8,wu as b9,nN as ba,TK as bb,V0 as bc,aj as bd,PK as be,FK as bf,$K as bg,NK as bh,rO as bi,Ud as bj,mK as bk,hi as c,NE as d,kE as e,$a as f,_K as g,pK as h,cK as i,ae as j,JK as k,KM as l,QK as m,Zf as n,jr as o,lK as p,AK as q,ke as r,kK as s,aK as t,H as u,BK as v,nE as w,xK as x,IK as y,v2 as z};
