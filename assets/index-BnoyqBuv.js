import*as Mh from"https://cdn.jsdelivr.net/npm/d3@7/+esm";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function nl(n,t){const e=new Set(n.split(","));return i=>e.has(i)}const ne={},Zi=[],We=()=>{},Sh=()=>!1,Qs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),il=n=>n.startsWith("onUpdate:"),Pe=Object.assign,rl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},yh=Object.prototype.hasOwnProperty,Kt=(n,t)=>yh.call(n,t),Vt=Array.isArray,Mr=n=>to(n)==="[object Map]",Eh=n=>to(n)==="[object Set]",Wt=n=>typeof n=="function",ye=n=>typeof n=="string",cr=n=>typeof n=="symbol",fe=n=>n!==null&&typeof n=="object",Iu=n=>(fe(n)||Wt(n))&&Wt(n.then)&&Wt(n.catch),Th=Object.prototype.toString,to=n=>Th.call(n),bh=n=>to(n).slice(8,-1),Ah=n=>to(n)==="[object Object]",sl=n=>ye(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Sr=nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),eo=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},wh=/-(\w)/g,nn=eo(n=>n.replace(wh,(t,e)=>e?e.toUpperCase():"")),Rh=/\B([A-Z])/g,Ti=eo(n=>n.replace(Rh,"-$1").toLowerCase()),no=eo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Mo=eo(n=>n?`on${no(n)}`:""),jn=(n,t)=>!Object.is(n,t),So=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Uu=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Ch=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Hl;const Nu=()=>Hl||(Hl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ol(n){if(Vt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=ye(i)?Ih(i):ol(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(ye(n)||fe(n))return n}const Ph=/;(?![^(]*\))/g,Lh=/:([^]+)/,Dh=/\/\*[^]*?\*\//g;function Ih(n){const t={};return n.replace(Dh,"").split(Ph).forEach(e=>{if(e){const i=e.split(Lh);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function al(n){let t="";if(ye(n))t=n;else if(Vt(n))for(let e=0;e<n.length;e++){const i=al(n[e]);i&&(t+=i+" ")}else if(fe(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Uh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nh=nl(Uh);function Ou(n){return!!n||n===""}/**
* @vue/reactivity v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $e;class Oh{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$e,!t&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=$e;try{return $e=this,t()}finally{$e=e}}}on(){$e=this}off(){$e=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Fh(n,t=$e){t&&t.active&&t.effects.push(n)}function Bh(){return $e}let _i;class ll{constructor(t,e,i,r){this.fn=t,this.trigger=e,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Fh(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Jn();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(zh(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Qn()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Wn,e=_i;try{return Wn=!0,_i=this,this._runnings++,Vl(this),this.fn()}finally{Gl(this),this._runnings--,_i=e,Wn=t}}stop(){this.active&&(Vl(this),Gl(this),this.onStop&&this.onStop(),this.active=!1)}}function zh(n){return n.value}function Vl(n){n._trackId++,n._depsLength=0}function Gl(n){if(n.deps.length>n._depsLength){for(let t=n._depsLength;t<n.deps.length;t++)Fu(n.deps[t],n);n.deps.length=n._depsLength}}function Fu(n,t){const e=n.get(t);e!==void 0&&t._trackId!==e&&(n.delete(t),n.size===0&&n.cleanup())}let Wn=!0,oa=0;const Bu=[];function Jn(){Bu.push(Wn),Wn=!1}function Qn(){const n=Bu.pop();Wn=n===void 0?!0:n}function cl(){oa++}function ul(){for(oa--;!oa&&aa.length;)aa.shift()()}function zu(n,t,e){if(t.get(n)!==n._trackId){t.set(n,n._trackId);const i=n.deps[n._depsLength];i!==t?(i&&Fu(i,n),n.deps[n._depsLength++]=t):n._depsLength++}}const aa=[];function Hu(n,t,e){cl();for(const i of n.keys()){let r;i._dirtyLevel<t&&(r??(r=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=t),i._shouldSchedule&&(r??(r=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&aa.push(i.scheduler)))}ul()}const Vu=(n,t)=>{const e=new Map;return e.cleanup=n,e.computed=t,e},la=new WeakMap,vi=Symbol(""),ca=Symbol("");function Ue(n,t,e){if(Wn&&_i){let i=la.get(n);i||la.set(n,i=new Map);let r=i.get(e);r||i.set(e,r=Vu(()=>i.delete(e))),zu(_i,r)}}function wn(n,t,e,i,r,s){const o=la.get(n);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(e==="length"&&Vt(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!cr(u)&&u>=l)&&a.push(c)})}else switch(e!==void 0&&a.push(o.get(e)),t){case"add":Vt(n)?sl(e)&&a.push(o.get("length")):(a.push(o.get(vi)),Mr(n)&&a.push(o.get(ca)));break;case"delete":Vt(n)||(a.push(o.get(vi)),Mr(n)&&a.push(o.get(ca)));break;case"set":Mr(n)&&a.push(o.get(vi));break}cl();for(const l of a)l&&Hu(l,4);ul()}const Hh=nl("__proto__,__v_isRef,__isVue"),Gu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(cr)),kl=Vh();function Vh(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...e){const i=Qt(this);for(let s=0,o=this.length;s<o;s++)Ue(i,"get",s+"");const r=i[t](...e);return r===-1||r===!1?i[t](...e.map(Qt)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...e){Jn(),cl();const i=Qt(this)[t].apply(this,e);return ul(),Qn(),i}}),n}function Gh(n){cr(n)||(n=String(n));const t=Qt(this);return Ue(t,"has",n),t.hasOwnProperty(n)}class ku{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?ed:qu:s?Yu:Xu).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Vt(t);if(!r){if(o&&Kt(kl,e))return Reflect.get(kl,e,i);if(e==="hasOwnProperty")return Gh}const a=Reflect.get(t,e,i);return(cr(e)?Gu.has(e):Hh(e))||(r||Ue(t,"get",e),s)?a:Ne(a)?o&&sl(e)?a:a.value:fe(a)?r?Ku(a):dl(a):a}}class Wu extends ku{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];if(!this._isShallow){const l=xi(s);if(!nr(i)&&!xi(i)&&(s=Qt(s),i=Qt(i)),!Vt(t)&&Ne(s)&&!Ne(i))return l?!1:(s.value=i,!0)}const o=Vt(t)&&sl(e)?Number(e)<t.length:Kt(t,e),a=Reflect.set(t,e,i,r);return t===Qt(r)&&(o?jn(i,s)&&wn(t,"set",e,i):wn(t,"add",e,i)),a}deleteProperty(t,e){const i=Kt(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&wn(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!cr(e)||!Gu.has(e))&&Ue(t,"has",e),i}ownKeys(t){return Ue(t,"iterate",Vt(t)?"length":vi),Reflect.ownKeys(t)}}class kh extends ku{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Wh=new Wu,Xh=new kh,Yh=new Wu(!0);const fl=n=>n,io=n=>Reflect.getPrototypeOf(n);function jr(n,t,e=!1,i=!1){n=n.__v_raw;const r=Qt(n),s=Qt(t);e||(jn(t,s)&&Ue(r,"get",t),Ue(r,"get",s));const{has:o}=io(r),a=i?fl:e?ml:Lr;if(o.call(r,t))return a(n.get(t));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(t)}function $r(n,t=!1){const e=this.__v_raw,i=Qt(e),r=Qt(n);return t||(jn(n,r)&&Ue(i,"has",n),Ue(i,"has",r)),n===r?e.has(n):e.has(n)||e.has(r)}function Zr(n,t=!1){return n=n.__v_raw,!t&&Ue(Qt(n),"iterate",vi),Reflect.get(n,"size",n)}function Wl(n,t=!1){!t&&!nr(n)&&!xi(n)&&(n=Qt(n));const e=Qt(this);return io(e).has.call(e,n)||(e.add(n),wn(e,"add",n,n)),this}function Xl(n,t,e=!1){!e&&!nr(t)&&!xi(t)&&(t=Qt(t));const i=Qt(this),{has:r,get:s}=io(i);let o=r.call(i,n);o||(n=Qt(n),o=r.call(i,n));const a=s.call(i,n);return i.set(n,t),o?jn(t,a)&&wn(i,"set",n,t):wn(i,"add",n,t),this}function Yl(n){const t=Qt(this),{has:e,get:i}=io(t);let r=e.call(t,n);r||(n=Qt(n),r=e.call(t,n)),i&&i.call(t,n);const s=t.delete(n);return r&&wn(t,"delete",n,void 0),s}function ql(){const n=Qt(this),t=n.size!==0,e=n.clear();return t&&wn(n,"clear",void 0,void 0),e}function Jr(n,t){return function(i,r){const s=this,o=s.__v_raw,a=Qt(o),l=t?fl:n?ml:Lr;return!n&&Ue(a,"iterate",vi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Qr(n,t,e){return function(...i){const r=this.__v_raw,s=Qt(r),o=Mr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=e?fl:t?ml:Lr;return!t&&Ue(s,"iterate",l?ca:vi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function In(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function qh(){const n={get(s){return jr(this,s)},get size(){return Zr(this)},has:$r,add:Wl,set:Xl,delete:Yl,clear:ql,forEach:Jr(!1,!1)},t={get(s){return jr(this,s,!1,!0)},get size(){return Zr(this)},has:$r,add(s){return Wl.call(this,s,!0)},set(s,o){return Xl.call(this,s,o,!0)},delete:Yl,clear:ql,forEach:Jr(!1,!0)},e={get(s){return jr(this,s,!0)},get size(){return Zr(this,!0)},has(s){return $r.call(this,s,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Jr(!0,!1)},i={get(s){return jr(this,s,!0,!0)},get size(){return Zr(this,!0)},has(s){return $r.call(this,s,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Jr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Qr(s,!1,!1),e[s]=Qr(s,!0,!1),t[s]=Qr(s,!1,!0),i[s]=Qr(s,!0,!0)}),[n,e,t,i]}const[Kh,jh,$h,Zh]=qh();function hl(n,t){const e=t?n?Zh:$h:n?jh:Kh;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Kt(e,r)&&r in i?e:i,r,s)}const Jh={get:hl(!1,!1)},Qh={get:hl(!1,!0)},td={get:hl(!0,!1)};const Xu=new WeakMap,Yu=new WeakMap,qu=new WeakMap,ed=new WeakMap;function nd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function id(n){return n.__v_skip||!Object.isExtensible(n)?0:nd(bh(n))}function dl(n){return xi(n)?n:pl(n,!1,Wh,Jh,Xu)}function rd(n){return pl(n,!1,Yh,Qh,Yu)}function Ku(n){return pl(n,!0,Xh,td,qu)}function pl(n,t,e,i,r){if(!fe(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=id(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return r.set(n,a),a}function yr(n){return xi(n)?yr(n.__v_raw):!!(n&&n.__v_isReactive)}function xi(n){return!!(n&&n.__v_isReadonly)}function nr(n){return!!(n&&n.__v_isShallow)}function ju(n){return n?!!n.__v_raw:!1}function Qt(n){const t=n&&n.__v_raw;return t?Qt(t):n}function sd(n){return Object.isExtensible(n)&&Uu(n,"__v_skip",!0),n}const Lr=n=>fe(n)?dl(n):n,ml=n=>fe(n)?Ku(n):n;class $u{constructor(t,e,i,r){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ll(()=>t(this._value),()=>Ps(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const t=Qt(this);return(!t._cacheable||t.effect.dirty)&&jn(t._value,t._value=t.effect.run())&&Ps(t,4),Zu(t),t.effect._dirtyLevel>=2&&Ps(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function od(n,t,e=!1){let i,r;const s=Wt(n);return s?(i=n,r=We):(i=n.get,r=n.set),new $u(i,r,s||!r,e)}function Zu(n){var t;Wn&&_i&&(n=Qt(n),zu(_i,(t=n.dep)!=null?t:n.dep=Vu(()=>n.dep=void 0,n instanceof $u?n:void 0)))}function Ps(n,t=4,e,i){n=Qt(n);const r=n.dep;r&&Hu(r,t)}function Ne(n){return!!(n&&n.__v_isRef===!0)}function Kl(n){return ad(n,!1)}function ad(n,t){return Ne(n)?n:new ld(n,t)}class ld{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Qt(t),this._value=e?t:Lr(t)}get value(){return Zu(this),this._value}set value(t){const e=this.__v_isShallow||nr(t)||xi(t);t=e?t:Qt(t),jn(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=e?t:Lr(t),Ps(this,4))}}function cd(n){return Ne(n)?n.value:n}const ud={get:(n,t,e)=>cd(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return Ne(r)&&!Ne(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function Ju(n){return yr(n)?n:new Proxy(n,ud)}/**
* @vue/runtime-core v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xn(n,t,e,i){try{return i?n(...i):n()}catch(r){ro(r,t,e)}}function en(n,t,e,i){if(Wt(n)){const r=Xn(n,t,e,i);return r&&Iu(r)&&r.catch(s=>{ro(s,t,e)}),r}if(Vt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(en(n[s],t,e,i));return r}}function ro(n,t,e,i=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${e}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){Jn(),Xn(l,null,10,[n,o,a]),Qn();return}}fd(n,e,r,i)}function fd(n,t,e,i=!0){console.error(n)}let Dr=!1,ua=!1;const be=[];let un=0;const Ji=[];let Hn=null,fi=0;const Qu=Promise.resolve();let gl=null;function hd(n){const t=gl||Qu;return n?t.then(this?n.bind(this):n):t}function dd(n){let t=un+1,e=be.length;for(;t<e;){const i=t+e>>>1,r=be[i],s=Ir(r);s<n||s===n&&r.pre?t=i+1:e=i}return t}function _l(n){(!be.length||!be.includes(n,Dr&&n.allowRecurse?un+1:un))&&(n.id==null?be.push(n):be.splice(dd(n.id),0,n),tf())}function tf(){!Dr&&!ua&&(ua=!0,gl=Qu.then(nf))}function pd(n){const t=be.indexOf(n);t>un&&be.splice(t,1)}function md(n){Vt(n)?Ji.push(...n):(!Hn||!Hn.includes(n,n.allowRecurse?fi+1:fi))&&Ji.push(n),tf()}function jl(n,t,e=Dr?un+1:0){for(;e<be.length;e++){const i=be[e];if(i&&i.pre){if(n&&i.id!==n.uid)continue;be.splice(e,1),e--,i()}}}function ef(n){if(Ji.length){const t=[...new Set(Ji)].sort((e,i)=>Ir(e)-Ir(i));if(Ji.length=0,Hn){Hn.push(...t);return}for(Hn=t,fi=0;fi<Hn.length;fi++){const e=Hn[fi];e.active!==!1&&e()}Hn=null,fi=0}}const Ir=n=>n.id==null?1/0:n.id,gd=(n,t)=>{const e=Ir(n)-Ir(t);if(e===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return e};function nf(n){ua=!1,Dr=!0,be.sort(gd);try{for(un=0;un<be.length;un++){const t=be[un];t&&t.active!==!1&&Xn(t,t.i,t.i?15:14)}}finally{un=0,be.length=0,ef(),Dr=!1,gl=null,(be.length||Ji.length)&&nf()}}let Je=null,rf=null;function Vs(n){const t=Je;return Je=n,rf=n&&n.type.__scopeId||null,t}function _d(n,t=Je,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&ac(-1);const s=Vs(t);let o;try{o=n(...r)}finally{Vs(s),i._d&&ac(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ni(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Jn(),en(l,e,8,[n.el,a,n,t]),Qn())}}function sf(n,t){n.shapeFlag&6&&n.component?sf(n.component.subTree,t):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}const Ls=n=>!!n.type.__asyncLoader,of=n=>n.type.__isKeepAlive;function vd(n,t){af(n,"a",t)}function xd(n,t){af(n,"da",t)}function af(n,t,e=Ae){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(so(t,i,e),e){let r=e.parent;for(;r&&r.parent;)of(r.parent.vnode)&&Md(i,t,e,r),r=r.parent}}function Md(n,t,e,i){const r=so(t,n,i,!0);vl(()=>{rl(i[t],r)},e)}function so(n,t,e=Ae,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{Jn();const a=Gr(e),l=en(t,e,n,o);return a(),Qn(),l});return i?r.unshift(s):r.push(s),s}}const Pn=n=>(t,e=Ae)=>{(!lo||n==="sp")&&so(n,(...i)=>t(...i),e)},Sd=Pn("bm"),lf=Pn("m"),yd=Pn("bu"),Ed=Pn("u"),Td=Pn("bum"),vl=Pn("um"),bd=Pn("sp"),Ad=Pn("rtg"),wd=Pn("rtc");function Rd(n,t=Ae){so("ec",n,t)}const cf="components";function Cd(n,t){return Ld(cf,n,!0,t)||n}const Pd=Symbol.for("v-ndc");function Ld(n,t,e=!0,i=!1){const r=Je||Ae;if(r){const s=r.type;if(n===cf){const a=Tp(s,!1);if(a&&(a===t||a===nn(t)||a===no(nn(t))))return s}const o=$l(r[n]||s[n],t)||$l(r.appContext[n],t);return!o&&i?s:o}}function $l(n,t){return n&&(n[t]||n[nn(t)]||n[no(nn(t))])}const fa=n=>n?Cf(n)?yl(n):fa(n.parent):null,Er=Pe(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>fa(n.parent),$root:n=>fa(n.root),$emit:n=>n.emit,$options:n=>xl(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,_l(n.update)}),$nextTick:n=>n.n||(n.n=hd.bind(n.proxy)),$watch:n=>ep.bind(n)}),yo=(n,t)=>n!==ne&&!n.__isScriptSetup&&Kt(n,t),Dd={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(yo(i,t))return o[t]=1,i[t];if(r!==ne&&Kt(r,t))return o[t]=2,r[t];if((c=n.propsOptions[0])&&Kt(c,t))return o[t]=3,s[t];if(e!==ne&&Kt(e,t))return o[t]=4,e[t];ha&&(o[t]=0)}}const u=Er[t];let f,h;if(u)return t==="$attrs"&&Ue(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[t]))return f;if(e!==ne&&Kt(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,Kt(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return yo(r,t)?(r[t]=e,!0):i!==ne&&Kt(i,t)?(i[t]=e,!0):Kt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!e[o]||n!==ne&&Kt(n,o)||yo(t,o)||(a=s[0])&&Kt(a,o)||Kt(i,o)||Kt(Er,o)||Kt(r.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Kt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Zl(n){return Vt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let ha=!0;function Id(n){const t=xl(n),e=n.proxy,i=n.ctx;ha=!1,t.beforeCreate&&Jl(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:C,destroyed:M,unmounted:b,render:G,renderTracked:P,renderTriggered:D,errorCaptured:B,serverPrefetch:R,expose:y,inheritAttrs:I,components:nt,directives:j,filters:tt}=t;if(c&&Ud(c,i,null),o)for(const it in o){const X=o[it];Wt(X)&&(i[it]=X.bind(e))}if(r){const it=r.call(e,e);fe(it)&&(n.data=dl(it))}if(ha=!0,s)for(const it in s){const X=s[it],ht=Wt(X)?X.bind(e,e):Wt(X.get)?X.get.bind(e,e):We,vt=!Wt(X)&&Wt(X.set)?X.set.bind(e):We,gt=Ap({get:ht,set:vt});Object.defineProperty(i,it,{enumerable:!0,configurable:!0,get:()=>gt.value,set:wt=>gt.value=wt})}if(a)for(const it in a)uf(a[it],i,e,it);if(l){const it=Wt(l)?l.call(e):l;Reflect.ownKeys(it).forEach(X=>{Hd(X,it[X])})}u&&Jl(u,n,"c");function q(it,X){Vt(X)?X.forEach(ht=>it(ht.bind(e))):X&&it(X.bind(e))}if(q(Sd,f),q(lf,h),q(yd,d),q(Ed,_),q(vd,x),q(xd,m),q(Rd,B),q(wd,P),q(Ad,D),q(Td,C),q(vl,b),q(bd,R),Vt(y))if(y.length){const it=n.exposed||(n.exposed={});y.forEach(X=>{Object.defineProperty(it,X,{get:()=>e[X],set:ht=>e[X]=ht})})}else n.exposed||(n.exposed={});G&&n.render===We&&(n.render=G),I!=null&&(n.inheritAttrs=I),nt&&(n.components=nt),j&&(n.directives=j)}function Ud(n,t,e=We){Vt(n)&&(n=da(n));for(const i in n){const r=n[i];let s;fe(r)?"default"in r?s=Ds(r.from||i,r.default,!0):s=Ds(r.from||i):s=Ds(r),Ne(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function Jl(n,t,e){en(Vt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function uf(n,t,e,i){const r=i.includes(".")?Tf(e,i):()=>e[i];if(ye(n)){const s=t[n];Wt(s)&&To(r,s)}else if(Wt(n))To(r,n.bind(e));else if(fe(n))if(Vt(n))n.forEach(s=>uf(s,t,e,i));else{const s=Wt(n.handler)?n.handler.bind(e):t[n.handler];Wt(s)&&To(r,s,n)}}function xl(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(c=>Gs(l,c,o,!0)),Gs(l,t,o)),fe(t)&&s.set(t,l),l}function Gs(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&Gs(n,s,e,!0),r&&r.forEach(o=>Gs(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Nd[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Nd={data:Ql,props:tc,emits:tc,methods:vr,computed:vr,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:vr,directives:vr,watch:Fd,provide:Ql,inject:Od};function Ql(n,t){return t?n?function(){return Pe(Wt(n)?n.call(this,this):n,Wt(t)?t.call(this,this):t)}:t:n}function Od(n,t){return vr(da(n),da(t))}function da(n){if(Vt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function we(n,t){return n?[...new Set([].concat(n,t))]:t}function vr(n,t){return n?Pe(Object.create(null),n,t):t}function tc(n,t){return n?Vt(n)&&Vt(t)?[...new Set([...n,...t])]:Pe(Object.create(null),Zl(n),Zl(t??{})):t}function Fd(n,t){if(!n)return t;if(!t)return n;const e=Pe(Object.create(null),n);for(const i in t)e[i]=we(n[i],t[i]);return e}function ff(){return{app:null,config:{isNativeTag:Sh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bd=0;function zd(n,t){return function(i,r=null){Wt(i)||(i=Pe({},i)),r!=null&&!fe(r)&&(r=null);const s=ff(),o=new WeakSet;let a=!1;const l=s.app={_uid:Bd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:wp,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Wt(c.install)?(o.add(c),c.install(l,...u)):Wt(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=Yn(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&t?t(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,yl(h.component)}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Tr;Tr=l;try{return c()}finally{Tr=u}}};return l}}let Tr=null;function Hd(n,t){if(Ae){let e=Ae.provides;const i=Ae.parent&&Ae.parent.provides;i===e&&(e=Ae.provides=Object.create(i)),e[n]=t}}function Ds(n,t,e=!1){const i=Ae||Je;if(i||Tr){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Tr._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Wt(t)?t.call(i&&i.proxy):t}}const hf={},df=()=>Object.create(hf),pf=n=>Object.getPrototypeOf(n)===hf;function Vd(n,t,e,i=!1){const r={},s=df();n.propsDefaults=Object.create(null),mf(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:rd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Gd(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Qt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(oo(n.emitsOptions,h))continue;const d=t[h];if(l)if(Kt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=nn(h);r[_]=pa(l,a,_,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{mf(n,t,r,s)&&(c=!0);let u;for(const f in a)(!t||!Kt(t,f)&&((u=Ti(f))===f||!Kt(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(r[f]=pa(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!Kt(t,f))&&(delete s[f],c=!0)}c&&wn(n.attrs,"set","")}function mf(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Sr(l))continue;const c=t[l];let u;r&&Kt(r,u=nn(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:oo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Qt(e),c=a||ne;for(let u=0;u<s.length;u++){const f=s[u];e[f]=pa(r,l,f,c[f],n,!Kt(c,f))}}return o}function pa(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=Kt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Wt(l)){const{propsDefaults:c}=r;if(e in c)i=c[e];else{const u=Gr(r);i=c[e]=l.call(null,t),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ti(e))&&(i=!0))}return i}const kd=new WeakMap;function gf(n,t,e=!1){const i=e?kd:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Wt(n)){const u=f=>{l=!0;const[h,d]=gf(f,t,!0);Pe(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return fe(n)&&i.set(n,Zi),Zi;if(Vt(s))for(let u=0;u<s.length;u++){const f=nn(s[u]);ec(f)&&(o[f]=ne)}else if(s)for(const u in s){const f=nn(u);if(ec(f)){const h=s[u],d=o[f]=Vt(h)||Wt(h)?{type:h}:Pe({},h);if(d){const _=rc(Boolean,d.type),x=rc(String,d.type);d[0]=_>-1,d[1]=x<0||_<x,(_>-1||Kt(d,"default"))&&a.push(f)}}}const c=[o,a];return fe(n)&&i.set(n,c),c}function ec(n){return n[0]!=="$"&&!Sr(n)}function nc(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function ic(n,t){return nc(n)===nc(t)}function rc(n,t){return Vt(t)?t.findIndex(e=>ic(e,n)):Wt(t)&&ic(t,n)?0:-1}const _f=n=>n[0]==="_"||n==="$stable",Ml=n=>Vt(n)?n.map(ln):[ln(n)],Wd=(n,t,e)=>{if(t._n)return t;const i=_d((...r)=>Ml(t(...r)),e);return i._c=!1,i},vf=(n,t,e)=>{const i=n._ctx;for(const r in n){if(_f(r))continue;const s=n[r];if(Wt(s))t[r]=Wd(r,s,i);else if(s!=null){const o=Ml(s);t[r]=()=>o}}},xf=(n,t)=>{const e=Ml(t);n.slots.default=()=>e},Mf=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},Xd=(n,t,e)=>{const i=n.slots=df();if(n.vnode.shapeFlag&32){const r=t._;r?(Mf(i,t,e),e&&Uu(i,"_",r,!0)):vf(t,i)}else t&&xf(n,t)},Yd=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=ne;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:Mf(r,t,e):(s=!t.$stable,vf(t,r)),o=t}else t&&(xf(n,t),o={default:1});if(s)for(const a in r)!_f(a)&&o[a]==null&&delete r[a]};function ma(n,t,e,i,r=!1){if(Vt(n)){n.forEach((h,d)=>ma(h,t&&(Vt(t)?t[d]:t),e,i,r));return}if(Ls(i)&&!r)return;const s=i.shapeFlag&4?yl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ne?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ye(c)?(u[c]=null,Kt(f,c)&&(f[c]=null)):Ne(c)&&(c.value=null)),Wt(l))Xn(l,a,12,[o,u]);else{const h=ye(l),d=Ne(l);if(h||d){const _=()=>{if(n.f){const x=h?Kt(f,l)?f[l]:u[l]:l.value;r?Vt(x)&&rl(x,s):Vt(x)?x.includes(s)||x.push(s):h?(u[l]=[s],Kt(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,Kt(f,l)&&(f[l]=o)):d&&(l.value=o,n.k&&(u[n.k]=o))};o?(_.id=-1,Le(_,e)):_()}}}const qd=Symbol("_vte"),Kd=n=>n.__isTeleport,Le=cp;function jd(n){return $d(n)}function $d(n,t){const e=Nu();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=We,insertStaticContent:_}=n,x=(T,A,N,U=null,Y=null,H=null,Q=void 0,S=null,g=!!A.dynamicChildren)=>{if(T===A)return;T&&!hr(T,A)&&(U=_t(T),wt(T,Y,H,!0),T=null),A.patchFlag===-2&&(g=!1,A.dynamicChildren=null);const{type:L,ref:z,shapeFlag:W}=A;switch(L){case ao:m(T,A,N,U);break;case Ur:p(T,A,N,U);break;case Ao:T==null&&C(A,N,U,Q);break;case an:nt(T,A,N,U,Y,H,Q,S,g);break;default:W&1?G(T,A,N,U,Y,H,Q,S,g):W&6?j(T,A,N,U,Y,H,Q,S,g):(W&64||W&128)&&L.process(T,A,N,U,Y,H,Q,S,g,Ct)}z!=null&&Y&&ma(z,T&&T.ref,H,A||T,!A)},m=(T,A,N,U)=>{if(T==null)i(A.el=a(A.children),N,U);else{const Y=A.el=T.el;A.children!==T.children&&c(Y,A.children)}},p=(T,A,N,U)=>{T==null?i(A.el=l(A.children||""),N,U):A.el=T.el},C=(T,A,N,U)=>{[T.el,T.anchor]=_(T.children,A,N,U,T.el,T.anchor)},M=({el:T,anchor:A},N,U)=>{let Y;for(;T&&T!==A;)Y=h(T),i(T,N,U),T=Y;i(A,N,U)},b=({el:T,anchor:A})=>{let N;for(;T&&T!==A;)N=h(T),r(T),T=N;r(A)},G=(T,A,N,U,Y,H,Q,S,g)=>{A.type==="svg"?Q="svg":A.type==="math"&&(Q="mathml"),T==null?P(A,N,U,Y,H,Q,S,g):R(T,A,Y,H,Q,S,g)},P=(T,A,N,U,Y,H,Q,S)=>{let g,L;const{props:z,shapeFlag:W,transition:k,dirs:lt}=T;if(g=T.el=o(T.type,H,z&&z.is,z),W&8?u(g,T.children):W&16&&B(T.children,g,null,U,Y,Eo(T,H),Q,S),lt&&ni(T,null,U,"created"),D(g,T,T.scopeId,Q,U),z){for(const ct in z)ct!=="value"&&!Sr(ct)&&s(g,ct,null,z[ct],H,U);"value"in z&&s(g,"value",null,z.value,H),(L=z.onVnodeBeforeMount)&&sn(L,U,T)}lt&&ni(T,null,U,"beforeMount");const st=Zd(Y,k);st&&k.beforeEnter(g),i(g,A,N),((L=z&&z.onVnodeMounted)||st||lt)&&Le(()=>{L&&sn(L,U,T),st&&k.enter(g),lt&&ni(T,null,U,"mounted")},Y)},D=(T,A,N,U,Y)=>{if(N&&d(T,N),U)for(let H=0;H<U.length;H++)d(T,U[H]);if(Y){let H=Y.subTree;if(A===H){const Q=Y.vnode;D(T,Q,Q.scopeId,Q.slotScopeIds,Y.parent)}}},B=(T,A,N,U,Y,H,Q,S,g=0)=>{for(let L=g;L<T.length;L++){const z=T[L]=S?Vn(T[L]):ln(T[L]);x(null,z,A,N,U,Y,H,Q,S)}},R=(T,A,N,U,Y,H,Q)=>{const S=A.el=T.el;let{patchFlag:g,dynamicChildren:L,dirs:z}=A;g|=T.patchFlag&16;const W=T.props||ne,k=A.props||ne;let lt;if(N&&ii(N,!1),(lt=k.onVnodeBeforeUpdate)&&sn(lt,N,A,T),z&&ni(A,T,N,"beforeUpdate"),N&&ii(N,!0),(W.innerHTML&&k.innerHTML==null||W.textContent&&k.textContent==null)&&u(S,""),L?y(T.dynamicChildren,L,S,N,U,Eo(A,Y),H):Q||X(T,A,S,null,N,U,Eo(A,Y),H,!1),g>0){if(g&16)I(S,W,k,N,Y);else if(g&2&&W.class!==k.class&&s(S,"class",null,k.class,Y),g&4&&s(S,"style",W.style,k.style,Y),g&8){const st=A.dynamicProps;for(let ct=0;ct<st.length;ct++){const xt=st[ct],at=W[xt],dt=k[xt];(dt!==at||xt==="value")&&s(S,xt,at,dt,Y,N)}}g&1&&T.children!==A.children&&u(S,A.children)}else!Q&&L==null&&I(S,W,k,N,Y);((lt=k.onVnodeUpdated)||z)&&Le(()=>{lt&&sn(lt,N,A,T),z&&ni(A,T,N,"updated")},U)},y=(T,A,N,U,Y,H,Q)=>{for(let S=0;S<A.length;S++){const g=T[S],L=A[S],z=g.el&&(g.type===an||!hr(g,L)||g.shapeFlag&70)?f(g.el):N;x(g,L,z,null,U,Y,H,Q,!0)}},I=(T,A,N,U,Y)=>{if(A!==N){if(A!==ne)for(const H in A)!Sr(H)&&!(H in N)&&s(T,H,A[H],null,Y,U);for(const H in N){if(Sr(H))continue;const Q=N[H],S=A[H];Q!==S&&H!=="value"&&s(T,H,S,Q,Y,U)}"value"in N&&s(T,"value",A.value,N.value,Y)}},nt=(T,A,N,U,Y,H,Q,S,g)=>{const L=A.el=T?T.el:a(""),z=A.anchor=T?T.anchor:a("");let{patchFlag:W,dynamicChildren:k,slotScopeIds:lt}=A;lt&&(S=S?S.concat(lt):lt),T==null?(i(L,N,U),i(z,N,U),B(A.children||[],N,z,Y,H,Q,S,g)):W>0&&W&64&&k&&T.dynamicChildren?(y(T.dynamicChildren,k,N,Y,H,Q,S),(A.key!=null||Y&&A===Y.subTree)&&Sf(T,A,!0)):X(T,A,N,z,Y,H,Q,S,g)},j=(T,A,N,U,Y,H,Q,S,g)=>{A.slotScopeIds=S,T==null?A.shapeFlag&512?Y.ctx.activate(A,N,U,Q,g):tt(A,N,U,Y,H,Q,g):ot(T,A,g)},tt=(T,A,N,U,Y,H,Q)=>{const S=T.component=xp(T,U,Y);if(of(T)&&(S.ctx.renderer=Ct),Mp(S,!1,Q),S.asyncDep){if(Y&&Y.registerDep(S,q,Q),!T.el){const g=S.subTree=Yn(Ur);p(null,g,A,N)}}else q(S,T,A,N,Y,H,Q)},ot=(T,A,N)=>{const U=A.component=T.component;if(op(T,A,N))if(U.asyncDep&&!U.asyncResolved){it(U,A,N);return}else U.next=A,pd(U.update),U.effect.dirty=!0,U.update();else A.el=T.el,U.vnode=A},q=(T,A,N,U,Y,H,Q)=>{const S=()=>{if(T.isMounted){let{next:z,bu:W,u:k,parent:lt,vnode:st}=T;{const Ht=yf(T);if(Ht){z&&(z.el=st.el,it(T,z,Q)),Ht.asyncDep.then(()=>{T.isUnmounted||S()});return}}let ct=z,xt;ii(T,!1),z?(z.el=st.el,it(T,z,Q)):z=st,W&&So(W),(xt=z.props&&z.props.onVnodeBeforeUpdate)&&sn(xt,lt,z,st),ii(T,!0);const at=bo(T),dt=T.subTree;T.subTree=at,x(dt,at,f(dt.el),_t(dt),T,Y,H),z.el=at.el,ct===null&&ap(T,at.el),k&&Le(k,Y),(xt=z.props&&z.props.onVnodeUpdated)&&Le(()=>sn(xt,lt,z,st),Y)}else{let z;const{el:W,props:k}=A,{bm:lt,m:st,parent:ct}=T,xt=Ls(A);if(ii(T,!1),lt&&So(lt),!xt&&(z=k&&k.onVnodeBeforeMount)&&sn(z,ct,A),ii(T,!0),W&&w){const at=()=>{T.subTree=bo(T),w(W,T.subTree,T,Y,null)};xt?A.type.__asyncLoader().then(()=>!T.isUnmounted&&at()):at()}else{const at=T.subTree=bo(T);x(null,at,N,U,T,Y,H),A.el=at.el}if(st&&Le(st,Y),!xt&&(z=k&&k.onVnodeMounted)){const at=A;Le(()=>sn(z,ct,at),Y)}(A.shapeFlag&256||ct&&Ls(ct.vnode)&&ct.vnode.shapeFlag&256)&&T.a&&Le(T.a,Y),T.isMounted=!0,A=N=U=null}},g=T.effect=new ll(S,We,()=>_l(L),T.scope),L=T.update=()=>{g.dirty&&g.run()};L.i=T,L.id=T.uid,ii(T,!0),L()},it=(T,A,N)=>{A.component=T;const U=T.vnode.props;T.vnode=A,T.next=null,Gd(T,A.props,U,N),Yd(T,A.children,N),Jn(),jl(T),Qn()},X=(T,A,N,U,Y,H,Q,S,g=!1)=>{const L=T&&T.children,z=T?T.shapeFlag:0,W=A.children,{patchFlag:k,shapeFlag:lt}=A;if(k>0){if(k&128){vt(L,W,N,U,Y,H,Q,S,g);return}else if(k&256){ht(L,W,N,U,Y,H,Q,S,g);return}}lt&8?(z&16&&St(L,Y,H),W!==L&&u(N,W)):z&16?lt&16?vt(L,W,N,U,Y,H,Q,S,g):St(L,Y,H,!0):(z&8&&u(N,""),lt&16&&B(W,N,U,Y,H,Q,S,g))},ht=(T,A,N,U,Y,H,Q,S,g)=>{T=T||Zi,A=A||Zi;const L=T.length,z=A.length,W=Math.min(L,z);let k;for(k=0;k<W;k++){const lt=A[k]=g?Vn(A[k]):ln(A[k]);x(T[k],lt,N,null,Y,H,Q,S,g)}L>z?St(T,Y,H,!0,!1,W):B(A,N,U,Y,H,Q,S,g,W)},vt=(T,A,N,U,Y,H,Q,S,g)=>{let L=0;const z=A.length;let W=T.length-1,k=z-1;for(;L<=W&&L<=k;){const lt=T[L],st=A[L]=g?Vn(A[L]):ln(A[L]);if(hr(lt,st))x(lt,st,N,null,Y,H,Q,S,g);else break;L++}for(;L<=W&&L<=k;){const lt=T[W],st=A[k]=g?Vn(A[k]):ln(A[k]);if(hr(lt,st))x(lt,st,N,null,Y,H,Q,S,g);else break;W--,k--}if(L>W){if(L<=k){const lt=k+1,st=lt<z?A[lt].el:U;for(;L<=k;)x(null,A[L]=g?Vn(A[L]):ln(A[L]),N,st,Y,H,Q,S,g),L++}}else if(L>k)for(;L<=W;)wt(T[L],Y,H,!0),L++;else{const lt=L,st=L,ct=new Map;for(L=st;L<=k;L++){const At=A[L]=g?Vn(A[L]):ln(A[L]);At.key!=null&&ct.set(At.key,L)}let xt,at=0;const dt=k-st+1;let Ht=!1,Dt=0;const yt=new Array(dt);for(L=0;L<dt;L++)yt[L]=0;for(L=lt;L<=W;L++){const At=T[L];if(at>=dt){wt(At,Y,H,!0);continue}let Yt;if(At.key!=null)Yt=ct.get(At.key);else for(xt=st;xt<=k;xt++)if(yt[xt-st]===0&&hr(At,A[xt])){Yt=xt;break}Yt===void 0?wt(At,Y,H,!0):(yt[Yt-st]=L+1,Yt>=Dt?Dt=Yt:Ht=!0,x(At,A[Yt],N,null,Y,H,Q,S,g),at++)}const Ut=Ht?Jd(yt):Zi;for(xt=Ut.length-1,L=dt-1;L>=0;L--){const At=st+L,Yt=A[At],v=At+1<z?A[At+1].el:U;yt[L]===0?x(null,Yt,N,v,Y,H,Q,S,g):Ht&&(xt<0||L!==Ut[xt]?gt(Yt,N,v,2):xt--)}}},gt=(T,A,N,U,Y=null)=>{const{el:H,type:Q,transition:S,children:g,shapeFlag:L}=T;if(L&6){gt(T.component.subTree,A,N,U);return}if(L&128){T.suspense.move(A,N,U);return}if(L&64){Q.move(T,A,N,Ct);return}if(Q===an){i(H,A,N);for(let W=0;W<g.length;W++)gt(g[W],A,N,U);i(T.anchor,A,N);return}if(Q===Ao){M(T,A,N);return}if(U!==2&&L&1&&S)if(U===0)S.beforeEnter(H),i(H,A,N),Le(()=>S.enter(H),Y);else{const{leave:W,delayLeave:k,afterLeave:lt}=S,st=()=>i(H,A,N),ct=()=>{W(H,()=>{st(),lt&&lt()})};k?k(H,st,ct):ct()}else i(H,A,N)},wt=(T,A,N,U=!1,Y=!1)=>{const{type:H,props:Q,ref:S,children:g,dynamicChildren:L,shapeFlag:z,patchFlag:W,dirs:k,cacheIndex:lt}=T;if(W===-2&&(Y=!1),S!=null&&ma(S,null,N,T,!0),lt!=null&&(A.renderCache[lt]=void 0),z&256){A.ctx.deactivate(T);return}const st=z&1&&k,ct=!Ls(T);let xt;if(ct&&(xt=Q&&Q.onVnodeBeforeUnmount)&&sn(xt,A,T),z&6)ft(T.component,N,U);else{if(z&128){T.suspense.unmount(N,U);return}st&&ni(T,null,A,"beforeUnmount"),z&64?T.type.remove(T,A,N,Ct,U):L&&!L.hasOnce&&(H!==an||W>0&&W&64)?St(L,A,N,!1,!0):(H===an&&W&384||!Y&&z&16)&&St(g,A,N),U&&zt(T)}(ct&&(xt=Q&&Q.onVnodeUnmounted)||st)&&Le(()=>{xt&&sn(xt,A,T),st&&ni(T,null,A,"unmounted")},N)},zt=T=>{const{type:A,el:N,anchor:U,transition:Y}=T;if(A===an){rt(N,U);return}if(A===Ao){b(T);return}const H=()=>{r(N),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(T.shapeFlag&1&&Y&&!Y.persisted){const{leave:Q,delayLeave:S}=Y,g=()=>Q(N,H);S?S(T.el,H,g):g()}else H()},rt=(T,A)=>{let N;for(;T!==A;)N=h(T),r(T),T=N;r(A)},ft=(T,A,N)=>{const{bum:U,scope:Y,update:H,subTree:Q,um:S,m:g,a:L}=T;sc(g),sc(L),U&&So(U),Y.stop(),H&&(H.active=!1,wt(Q,T,A,N)),S&&Le(S,A),Le(()=>{T.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},St=(T,A,N,U=!1,Y=!1,H=0)=>{for(let Q=H;Q<T.length;Q++)wt(T[Q],A,N,U,Y)},_t=T=>{if(T.shapeFlag&6)return _t(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const A=h(T.anchor||T.el),N=A&&A[qd];return N?h(N):A};let Lt=!1;const Ot=(T,A,N)=>{T==null?A._vnode&&wt(A._vnode,null,null,!0):x(A._vnode||null,T,A,null,null,null,N),Lt||(Lt=!0,jl(),ef(),Lt=!1),A._vnode=T},Ct={p:x,um:wt,m:gt,r:zt,mt:tt,mc:B,pc:X,pbc:y,n:_t,o:n};let Xt,w;return{render:Ot,hydrate:Xt,createApp:zd(Ot,Xt)}}function Eo({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ii({effect:n,update:t},e){n.allowRecurse=t.allowRecurse=e}function Zd(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Sf(n,t,e=!1){const i=n.children,r=t.children;if(Vt(i)&&Vt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Vn(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&Sf(o,a)),a.type===ao&&(a.el=o.el)}}function Jd(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=e[e.length-1],n[r]<c){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<c?s=a+1:o=a;c<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function yf(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:yf(t)}function sc(n){if(n)for(let t=0;t<n.length;t++)n[t].active=!1}const Qd=Symbol.for("v-scx"),tp=()=>Ds(Qd),ts={};function To(n,t,e){return Ef(n,t,e)}function Ef(n,t,{immediate:e,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=ne){if(t&&s){const P=t;t=(...D)=>{P(...D),G()}}const l=Ae,c=P=>i===!0?P:hi(P,i===!1?1:void 0);let u,f=!1,h=!1;if(Ne(n)?(u=()=>n.value,f=nr(n)):yr(n)?(u=()=>c(n),f=!0):Vt(n)?(h=!0,f=n.some(P=>yr(P)||nr(P)),u=()=>n.map(P=>{if(Ne(P))return P.value;if(yr(P))return c(P);if(Wt(P))return Xn(P,l,2)})):Wt(n)?t?u=()=>Xn(n,l,2):u=()=>(d&&d(),en(n,l,3,[_])):u=We,t&&i){const P=u;u=()=>hi(P())}let d,_=P=>{d=M.onStop=()=>{Xn(P,l,4),d=M.onStop=void 0}},x;if(lo)if(_=We,t?e&&en(t,l,3,[u(),h?[]:void 0,_]):u(),r==="sync"){const P=tp();x=P.__watcherHandles||(P.__watcherHandles=[])}else return We;let m=h?new Array(n.length).fill(ts):ts;const p=()=>{if(!(!M.active||!M.dirty))if(t){const P=M.run();(i||f||(h?P.some((D,B)=>jn(D,m[B])):jn(P,m)))&&(d&&d(),en(t,l,3,[P,m===ts?void 0:h&&m[0]===ts?[]:m,_]),m=P)}else M.run()};p.allowRecurse=!!t;let C;r==="sync"?C=p:r==="post"?C=()=>Le(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),C=()=>_l(p));const M=new ll(u,We,C),b=Bh(),G=()=>{M.stop(),b&&rl(b.effects,M)};return t?e?p():m=M.run():r==="post"?Le(M.run.bind(M),l&&l.suspense):M.run(),x&&x.push(G),G}function ep(n,t,e){const i=this.proxy,r=ye(n)?n.includes(".")?Tf(i,n):()=>i[n]:n.bind(i,i);let s;Wt(t)?s=t:(s=t.handler,e=t);const o=Gr(this),a=Ef(r,s.bind(i),e);return o(),a}function Tf(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}function hi(n,t=1/0,e){if(t<=0||!fe(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,Ne(n))hi(n.value,t,e);else if(Vt(n))for(let i=0;i<n.length;i++)hi(n[i],t,e);else if(Eh(n)||Mr(n))n.forEach(i=>{hi(i,t,e)});else if(Ah(n)){for(const i in n)hi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&hi(n[i],t,e)}return n}const np=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${nn(t)}Modifiers`]||n[`${Ti(t)}Modifiers`];function ip(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ne;let r=e;const s=t.startsWith("update:"),o=s&&np(i,t.slice(7));o&&(o.trim&&(r=e.map(u=>ye(u)?u.trim():u)),o.number&&(r=e.map(Ch)));let a,l=i[a=Mo(t)]||i[a=Mo(nn(t))];!l&&s&&(l=i[a=Mo(Ti(t))]),l&&en(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,en(c,n,6,r)}}function bf(n,t,e=!1){const i=t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Wt(n)){const l=c=>{const u=bf(c,t,!0);u&&(a=!0,Pe(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(fe(n)&&i.set(n,null),null):(Vt(s)?s.forEach(l=>o[l]=null):Pe(o,s),fe(n)&&i.set(n,o),o)}function oo(n,t){return!n||!Qs(t)?!1:(t=t.slice(2).replace(/Once$/,""),Kt(n,t[0].toLowerCase()+t.slice(1))||Kt(n,Ti(t))||Kt(n,t))}function bo(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:x}=n,m=Vs(n);let p,C;try{if(e.shapeFlag&4){const b=r||i,G=b;p=ln(c.call(G,b,u,f,d,h,_)),C=a}else{const b=t;p=ln(b.length>1?b(f,{attrs:a,slots:o,emit:l}):b(f,null)),C=t.props?a:rp(a)}}catch(b){br.length=0,ro(b,n,1),p=Yn(Ur)}let M=p;if(C&&x!==!1){const b=Object.keys(C),{shapeFlag:G}=M;b.length&&G&7&&(s&&b.some(il)&&(C=sp(C,s)),M=ir(M,C,!1,!0))}return e.dirs&&(M=ir(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(e.dirs):e.dirs),e.transition&&(M.transition=e.transition),p=M,Vs(m),p}const rp=n=>{let t;for(const e in n)(e==="class"||e==="style"||Qs(e))&&((t||(t={}))[e]=n[e]);return t},sp=(n,t)=>{const e={};for(const i in n)(!il(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function op(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?oc(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!oo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?oc(i,o,c):!0:!!o;return!1}function oc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==n[s]&&!oo(e,s))return!0}return!1}function ap({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const lp=n=>n.__isSuspense;function cp(n,t){t&&t.pendingBranch?Vt(n)?t.effects.push(...n):t.effects.push(n):md(n)}const an=Symbol.for("v-fgt"),ao=Symbol.for("v-txt"),Ur=Symbol.for("v-cmt"),Ao=Symbol.for("v-stc"),br=[];let He=null;function Af(n=!1){br.push(He=n?null:[])}function up(){br.pop(),He=br[br.length-1]||null}let Nr=1;function ac(n){Nr+=n,n<0&&He&&(He.hasOnce=!0)}function fp(n){return n.dynamicChildren=Nr>0?He||Zi:null,up(),Nr>0&&He&&He.push(n),n}function wf(n,t,e,i,r,s){return fp(Or(n,t,e,i,r,s,!0))}function hp(n){return n?n.__v_isVNode===!0:!1}function hr(n,t){return n.type===t.type&&n.key===t.key}const Rf=({key:n})=>n??null,Is=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ye(n)||Ne(n)||Wt(n)?{i:Je,r:n,k:t,f:!!e}:n:null);function Or(n,t=null,e=null,i=0,r=null,s=n===an?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Rf(t),ref:t&&Is(t),scopeId:rf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Je};return a?(Sl(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=ye(e)?8:16),Nr>0&&!o&&He&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&He.push(l),l}const Yn=dp;function dp(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===Pd)&&(n=Ur),hp(n)){const a=ir(n,t,!0);return e&&Sl(a,e),Nr>0&&!s&&He&&(a.shapeFlag&6?He[He.indexOf(n)]=a:He.push(a)),a.patchFlag=-2,a}if(bp(n)&&(n=n.__vccOpts),t){t=pp(t);let{class:a,style:l}=t;a&&!ye(a)&&(t.class=al(a)),fe(l)&&(ju(l)&&!Vt(l)&&(l=Pe({},l)),t.style=ol(l))}const o=ye(n)?1:lp(n)?128:Kd(n)?64:fe(n)?4:Wt(n)?2:0;return Or(n,t,e,i,r,o,s,!0)}function pp(n){return n?ju(n)||pf(n)?Pe({},n):n:null}function ir(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=t?gp(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Rf(c),ref:t&&t.ref?e&&s?Vt(s)?s.concat(Is(t)):[s,Is(t)]:Is(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==an?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ir(n.ssContent),ssFallback:n.ssFallback&&ir(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&sf(u,l.clone(u)),u}function mp(n=" ",t=0){return Yn(ao,null,n,t)}function ln(n){return n==null||typeof n=="boolean"?Yn(Ur):Vt(n)?Yn(an,null,n.slice()):typeof n=="object"?Vn(n):Yn(ao,null,String(n))}function Vn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ir(n)}function Sl(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Vt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Sl(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!pf(t)?t._ctx=Je:r===3&&Je&&(Je.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Wt(t)?(t={default:t,_ctx:Je},e=32):(t=String(t),i&64?(e=16,t=[mp(t)]):e=8);n.children=t,n.shapeFlag|=e}function gp(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=al([t.class,i.class]));else if(r==="style")t.style=ol([t.style,i.style]);else if(Qs(r)){const s=t[r],o=i[r];o&&s!==o&&!(Vt(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function sn(n,t,e,i=null){en(n,t,7,[e,i])}const _p=ff();let vp=0;function xp(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||_p,s={uid:vp++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Oh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gf(i,r),emitsOptions:bf(i,r),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:i.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=ip.bind(null,s),n.ce&&n.ce(s),s}let Ae=null,ks,ga;{const n=Nu(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ks=t("__VUE_INSTANCE_SETTERS__",e=>Ae=e),ga=t("__VUE_SSR_SETTERS__",e=>lo=e)}const Gr=n=>{const t=Ae;return ks(n),n.scope.on(),()=>{n.scope.off(),ks(t)}},lc=()=>{Ae&&Ae.scope.off(),ks(null)};function Cf(n){return n.vnode.shapeFlag&4}let lo=!1;function Mp(n,t=!1,e=!1){t&&ga(t);const{props:i,children:r}=n.vnode,s=Cf(n);Vd(n,i,s,t),Xd(n,r,e);const o=s?Sp(n,t):void 0;return t&&ga(!1),o}function Sp(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Dd);const{setup:i}=e;if(i){const r=n.setupContext=i.length>1?Ep(n):null,s=Gr(n);Jn();const o=Xn(i,n,0,[n.props,r]);if(Qn(),s(),Iu(o)){if(o.then(lc,lc),t)return o.then(a=>{cc(n,a,t)}).catch(a=>{ro(a,n,0)});n.asyncDep=o}else cc(n,o,t)}else Pf(n,t)}function cc(n,t,e){Wt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:fe(t)&&(n.setupState=Ju(t)),Pf(n,e)}let uc;function Pf(n,t,e){const i=n.type;if(!n.render){if(!t&&uc&&!i.render){const r=i.template||xl(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Pe(Pe({isCustomElement:s,delimiters:a},o),l);i.render=uc(r,c)}}n.render=i.render||We}{const r=Gr(n);Jn();try{Id(n)}finally{Qn(),r()}}}const yp={get(n,t){return Ue(n,"get",""),n[t]}};function Ep(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,yp),slots:n.slots,emit:n.emit,expose:t}}function yl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ju(sd(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Er)return Er[e](n)},has(t,e){return e in t||e in Er}})):n.proxy}function Tp(n,t=!0){return Wt(n)?n.displayName||n.name:n.name||t&&n.__name}function bp(n){return Wt(n)&&"__vccOpts"in n}const Ap=(n,t)=>od(n,t,lo),wp="3.4.33";/**
* @vue/runtime-dom v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Rp="http://www.w3.org/2000/svg",Cp="http://www.w3.org/1998/Math/MathML",En=typeof document<"u"?document:null,fc=En&&En.createElement("template"),Pp={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?En.createElementNS(Rp,n):t==="mathml"?En.createElementNS(Cp,n):e?En.createElement(n,{is:e}):En.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>En.createTextNode(n),createComment:n=>En.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>En.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{fc.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=fc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Lp=Symbol("_vtc");function Dp(n,t,e){const i=n[Lp];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const hc=Symbol("_vod"),Ip=Symbol("_vsh"),Up=Symbol(""),Np=/(^|;)\s*display\s*:/;function Op(n,t,e){const i=n.style,r=ye(e);let s=!1;if(e&&!r){if(t)if(ye(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Us(i,a,"")}else for(const o in t)e[o]==null&&Us(i,o,"");for(const o in e)o==="display"&&(s=!0),Us(i,o,e[o])}else if(r){if(t!==e){const o=i[Up];o&&(e+=";"+o),i.cssText=e,s=Np.test(e)}}else t&&n.removeAttribute("style");hc in n&&(n[hc]=s?i.display:"",n[Ip]&&(i.display="none"))}const dc=/\s*!important$/;function Us(n,t,e){if(Vt(e))e.forEach(i=>Us(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Fp(n,t);dc.test(e)?n.setProperty(Ti(i),e.replace(dc,""),"important"):n[i]=e}}const pc=["Webkit","Moz","ms"],wo={};function Fp(n,t){const e=wo[t];if(e)return e;let i=nn(t);if(i!=="filter"&&i in n)return wo[t]=i;i=no(i);for(let r=0;r<pc.length;r++){const s=pc[r]+i;if(s in n)return wo[t]=s}return t}const mc="http://www.w3.org/1999/xlink";function gc(n,t,e,i,r,s=Nh(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(mc,t.slice(6,t.length)):n.setAttributeNS(mc,t,e):e==null||s&&!Ou(e)?n.removeAttribute(t):n.setAttribute(t,s?"":cr(e)?String(e):e)}function Bp(n,t,e,i){if(t==="innerHTML"||t==="textContent"){if(e==null)return;n[t]=e;return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,a=e==null?"":String(e);(o!==a||!("_value"in n))&&(n.value=a),e==null&&n.removeAttribute(t),n._value=e;return}let s=!1;if(e===""||e==null){const o=typeof n[t];o==="boolean"?e=Ou(e):e==null&&o==="string"?(e="",s=!0):o==="number"&&(e=0,s=!0)}try{n[t]=e}catch{}s&&n.removeAttribute(t)}function zp(n,t,e,i){n.addEventListener(t,e,i)}function Hp(n,t,e,i){n.removeEventListener(t,e,i)}const _c=Symbol("_vei");function Vp(n,t,e,i,r=null){const s=n[_c]||(n[_c]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=Gp(t);if(i){const c=s[t]=Xp(i,r);zp(n,a,c,l)}else o&&(Hp(n,a,o,l),s[t]=void 0)}}const vc=/(?:Once|Passive|Capture)$/;function Gp(n){let t;if(vc.test(n)){t={};let i;for(;i=n.match(vc);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ti(n.slice(2)),t]}let Ro=0;const kp=Promise.resolve(),Wp=()=>Ro||(kp.then(()=>Ro=0),Ro=Date.now());function Xp(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;en(Yp(i,e.value),t,5,[i])};return e.value=n,e.attached=Wp(),e}function Yp(n,t){if(Vt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const xc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,qp=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?Dp(n,i,o):t==="style"?Op(n,e,i):Qs(t)?il(t)||Vp(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Kp(n,t,i,o))?(Bp(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&gc(n,t,i,o,s,t!=="value")):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),gc(n,t,i,o))};function Kp(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&xc(t)&&Wt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return xc(t)&&ye(e)?!1:t in n}const jp=Pe({patchProp:qp},Pp);let Mc;function $p(){return Mc||(Mc=jd(jp))}const Zp=(...n)=>{const t=$p().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=Qp(i);if(!r)return;const s=t._component;!Wt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=e(r,!1,Jp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Jp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Qp(n){return ye(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const El="166",Ri={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tm=0,Sc=1,em=2,Lf=1,nm=2,yn=3,$n=0,De=1,Tn=2,qn=0,Qi=1,yc=2,Ec=3,Tc=4,im=5,di=100,rm=101,sm=102,om=103,am=104,lm=200,cm=201,um=202,fm=203,_a=204,va=205,hm=206,dm=207,pm=208,mm=209,gm=210,_m=211,vm=212,xm=213,Mm=214,Sm=0,ym=1,Em=2,Ws=3,Tm=4,bm=5,Am=6,wm=7,Df=0,Rm=1,Cm=2,Kn=0,Pm=1,Lm=2,Dm=3,Im=4,Um=5,Nm=6,Om=7,If=300,rr=301,sr=302,xa=303,Ma=304,co=306,Sa=1e3,mi=1001,ya=1002,Xe=1003,Fm=1004,es=1005,Ze=1006,Co=1007,gi=1008,Rn=1009,Uf=1010,Nf=1011,Fr=1012,Tl=1013,Mi=1014,bn=1015,kr=1016,bl=1017,Al=1018,or=1020,Of=35902,Ff=1021,Bf=1022,Qe=1023,zf=1024,Hf=1025,tr=1026,ar=1027,Vf=1028,wl=1029,Gf=1030,Rl=1031,Cl=1033,Ns=33776,Os=33777,Fs=33778,Bs=33779,Ea=35840,Ta=35841,ba=35842,Aa=35843,wa=36196,Ra=37492,Ca=37496,Pa=37808,La=37809,Da=37810,Ia=37811,Ua=37812,Na=37813,Oa=37814,Fa=37815,Ba=37816,za=37817,Ha=37818,Va=37819,Ga=37820,ka=37821,zs=36492,Wa=36494,Xa=36495,kf=36283,Ya=36284,qa=36285,Ka=36286,Bm=3200,zm=3201,Hm=0,Vm=1,kn="",on="srgb",ti="srgb-linear",Pl="display-p3",uo="display-p3-linear",Xs="linear",ee="srgb",Ys="rec709",qs="p3",Pi=7680,bc=519,Gm=512,km=513,Wm=514,Wf=515,Xm=516,Ym=517,qm=518,Km=519,Ac=35044,wc="300 es",An=2e3,Ks=2001;class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rc=1234567;const Ar=Math.PI/180,Br=180/Math.PI;function Ai(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]).toLowerCase()}function _e(n,t,e){return Math.max(t,Math.min(e,n))}function Ll(n,t){return(n%t+t)%t}function jm(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function $m(n,t,e){return n!==t?(e-n)/(t-n):0}function wr(n,t,e){return(1-e)*n+e*t}function Zm(n,t,e,i){return wr(n,t,1-Math.exp(-e*i))}function Jm(n,t=1){return t-Math.abs(Ll(n,t*2)-t)}function Qm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function tg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function eg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function ng(n,t){return n+Math.random()*(t-n)}function ig(n){return n*(.5-Math.random())}function rg(n){n!==void 0&&(Rc=n);let t=Rc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sg(n){return n*Ar}function og(n){return n*Br}function ag(n){return(n&n-1)===0&&n!==0}function lg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function cg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ug(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),u=o((t+i)/2),f=s((t-i)/2),h=o((t-i)/2),d=s((i-t)/2),_=o((i-t)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Re(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const fg={DEG2RAD:Ar,RAD2DEG:Br,generateUUID:Ai,clamp:_e,euclideanModulo:Ll,mapLinear:jm,inverseLerp:$m,lerp:wr,damp:Zm,pingpong:Jm,smoothstep:Qm,smootherstep:tg,randInt:eg,randFloat:ng,randFloatSpread:ig,seededRandom:rg,degToRad:sg,radToDeg:og,isPowerOfTwo:ag,ceilPowerOfTwo:lg,floorPowerOfTwo:cg,setQuaternionFromProperEuler:ug,normalize:Re,denormalize:qi};class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,i,r,s,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],x=r[0],m=r[3],p=r[6],C=r[1],M=r[4],b=r[7],G=r[2],P=r[5],D=r[8];return s[0]=o*x+a*C+l*G,s[3]=o*m+a*M+l*P,s[6]=o*p+a*b+l*D,s[1]=c*x+u*C+f*G,s[4]=c*m+u*M+f*P,s[7]=c*p+u*b+f*D,s[2]=h*x+d*C+_*G,s[5]=h*m+d*M+_*P,s[8]=h*p+d*b+_*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,_=e*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=f*x,t[1]=(r*c-u*i)*x,t[2]=(a*i-r*o)*x,t[3]=h*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Po.makeScale(t,e)),this}rotate(t){return this.premultiply(Po.makeRotation(-t)),this}translate(t,e){return this.premultiply(Po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Po=new kt;function Xf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hg(){const n=js("canvas");return n.style.display="block",n}const Cc={};function Yf(n){n in Cc||(Cc[n]=!0,console.warn(n))}function dg(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Pc=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lc=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ns={[ti]:{transfer:Xs,primaries:Ys,toReference:n=>n,fromReference:n=>n},[on]:{transfer:ee,primaries:Ys,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[uo]:{transfer:Xs,primaries:qs,toReference:n=>n.applyMatrix3(Lc),fromReference:n=>n.applyMatrix3(Pc)},[Pl]:{transfer:ee,primaries:qs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Lc),fromReference:n=>n.applyMatrix3(Pc).convertLinearToSRGB()}},pg=new Set([ti,uo]),te={enabled:!0,_workingColorSpace:ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!pg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=ns[t].toReference,r=ns[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return ns[n].primaries},getTransfer:function(n){return n===kn?Xs:ns[n].transfer}};function er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Li;class mg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=js("canvas")),Li.width=t.width,Li.height=t.height;const i=Li.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=js("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=er(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(er(e[i]/255)*255):e[i]=er(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gg=0;class qf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Do(r[o].image)):s.push(Do(r[o]))}else s=Do(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Do(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _g=0;class Ie extends bi{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,i=mi,r=mi,s=Ze,o=gi,a=Qe,l=Rn,c=Ie.DEFAULT_ANISOTROPY,u=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=Ai(),this.name="",this.source=new qf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==If)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sa:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sa:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=If;Ie.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,i=0,r=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,b=(d+1)/2,G=(p+1)/2,P=(u+h)/4,D=(f+x)/4,B=(_+m)/4;return M>b&&M>G?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=P/i,s=D/i):b>G?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=P/r,s=B/r):G<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(G),i=D/s,r=B/s),this.set(i,r,s,e),this}let C=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(C)<.001&&(C=1),this.x=(m-_)/C,this.y=(f-x)/C,this.z=(h-u)/C,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vg extends bi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ie(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends vg{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Kf extends Ie{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xg extends Ie{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],_=s[o+2],x=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=_,t[e+3]=x;return}if(f!==x||l!==h||c!==d||u!==_){let m=1-a;const p=l*h+c*d+u*_+f*x,C=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const G=Math.sqrt(M),P=Math.atan2(G,p*C);m=Math.sin(m*P)/G,a=Math.sin(a*P)/G}const b=a*C;if(l=l*m+h*b,c=c*m+d*b,u=u*m+_*b,f=f*m+x*b,m===1-a){const G=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=G,c*=G,u*=G,f*=G}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+u*f+l*d-c*h,t[e+1]=l*_+u*h+c*f-a*d,t[e+2]=c*_+u*d+a*h-l*f,t[e+3]=u*_-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,i=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Io.copy(this).projectOnVector(t),this.sub(Io)}reflect(t){return this.sub(Io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Io=new O,Dc=new yi;class Wr{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qe):qe.fromBufferAttribute(s,o),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),is.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),is.copy(i.boundingBox)),is.applyMatrix4(t.matrixWorld),this.union(is)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),rs.subVectors(this.max,dr),Di.subVectors(t.a,dr),Ii.subVectors(t.b,dr),Ui.subVectors(t.c,dr),Un.subVectors(Ii,Di),Nn.subVectors(Ui,Ii),ri.subVectors(Di,Ui);let e=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-ri.z,ri.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,ri.z,0,-ri.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-ri.y,ri.x,0];return!Uo(e,Di,Ii,Ui,rs)||(e=[1,0,0,0,1,0,0,0,1],!Uo(e,Di,Ii,Ui,rs))?!1:(ss.crossVectors(Un,Nn),e=[ss.x,ss.y,ss.z],Uo(e,Di,Ii,Ui,rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new O,new O,new O,new O,new O,new O,new O,new O],qe=new O,is=new Wr,Di=new O,Ii=new O,Ui=new O,Un=new O,Nn=new O,ri=new O,dr=new O,rs=new O,ss=new O,si=new O;function Uo(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){si.fromArray(n,s);const a=r.x*Math.abs(si.x)+r.y*Math.abs(si.y)+r.z*Math.abs(si.z),l=t.dot(si),c=e.dot(si),u=i.dot(si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Mg=new Wr,pr=new O,No=new O;class fo{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Mg.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);const e=pr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(pr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(No.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(No)),this.expandByPoint(pr.copy(t.center).sub(No))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new O,Oo=new O,os=new O,On=new O,Fo=new O,as=new O,Bo=new O;class ho{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Oo.copy(t).add(e).multiplyScalar(.5),os.copy(e).sub(t).normalize(),On.copy(this.origin).sub(Oo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(os),a=On.dot(this.direction),l=-On.dot(os),c=On.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Oo).addScaledVector(os,h),d}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const i=_n.dot(this.direction),r=_n.dot(_n)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,i,r,s){Fo.subVectors(e,t),as.subVectors(i,t),Bo.crossVectors(Fo,as);let o=this.direction.dot(Bo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);const l=a*this.direction.dot(as.crossVectors(On,as));if(l<0)return null;const c=a*this.direction.dot(Fo.cross(On));if(c<0||l+c>o)return null;const u=-a*On.dot(Bo);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,i,r,s,o,a,l,c,u,f,h,d,_,x,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,f,h,d,_,x,m)}set(t,e,i,r,s,o,a,l,c,u,f,h,d,_,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ni.setFromMatrixColumn(t,0).length(),s=1/Ni.setFromMatrixColumn(t,1).length(),o=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,d=o*f,_=a*u,x=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=h-x*c,e[9]=-a*l,e[2]=x-h*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,_=c*u,x=c*f;e[0]=h+x*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=x+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,_=c*u,x=c*f;e[0]=h-x*a,e[4]=-o*f,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,_=a*u,x=a*f;e[0]=l*u,e[4]=_*c-d,e[8]=h*c+x,e[1]=l*f,e[5]=x*c+h,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,_=a*l,x=a*c;e[0]=l*u,e[4]=x-h*f,e[8]=_*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+_,e[10]=h-x*f}else if(t.order==="XZY"){const h=o*l,d=o*c,_=a*l,x=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+x,e[5]=o*u,e[9]=d*f-_,e[2]=_*f-d,e[6]=a*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sg,t,yg)}lookAt(t,e,i){const r=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Fn.crossVectors(i,Be),Fn.lengthSq()===0&&(Math.abs(i.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Fn.crossVectors(i,Be)),Fn.normalize(),ls.crossVectors(Be,Fn),r[0]=Fn.x,r[4]=ls.x,r[8]=Be.x,r[1]=Fn.y,r[5]=ls.y,r[9]=Be.y,r[2]=Fn.z,r[6]=ls.z,r[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],x=i[6],m=i[10],p=i[14],C=i[3],M=i[7],b=i[11],G=i[15],P=r[0],D=r[4],B=r[8],R=r[12],y=r[1],I=r[5],nt=r[9],j=r[13],tt=r[2],ot=r[6],q=r[10],it=r[14],X=r[3],ht=r[7],vt=r[11],gt=r[15];return s[0]=o*P+a*y+l*tt+c*X,s[4]=o*D+a*I+l*ot+c*ht,s[8]=o*B+a*nt+l*q+c*vt,s[12]=o*R+a*j+l*it+c*gt,s[1]=u*P+f*y+h*tt+d*X,s[5]=u*D+f*I+h*ot+d*ht,s[9]=u*B+f*nt+h*q+d*vt,s[13]=u*R+f*j+h*it+d*gt,s[2]=_*P+x*y+m*tt+p*X,s[6]=_*D+x*I+m*ot+p*ht,s[10]=_*B+x*nt+m*q+p*vt,s[14]=_*R+x*j+m*it+p*gt,s[3]=C*P+M*y+b*tt+G*X,s[7]=C*D+M*I+b*ot+G*ht,s[11]=C*B+M*nt+b*q+G*vt,s[15]=C*R+M*j+b*it+G*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],_=t[3],x=t[7],m=t[11],p=t[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+x*(+e*l*d-e*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+e*c*f-e*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-e*l*f+e*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],_=t[12],x=t[13],m=t[14],p=t[15],C=f*m*c-x*h*c+x*l*d-a*m*d-f*l*p+a*h*p,M=_*h*c-u*m*c-_*l*d+o*m*d+u*l*p-o*h*p,b=u*x*c-_*f*c+_*a*d-o*x*d-u*a*p+o*f*p,G=_*f*l-u*x*l-_*a*h+o*x*h+u*a*m-o*f*m,P=e*C+i*M+r*b+s*G;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return t[0]=C*D,t[1]=(x*h*s-f*m*s-x*r*d+i*m*d+f*r*p-i*h*p)*D,t[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*p+i*l*p)*D,t[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*D,t[4]=M*D,t[5]=(u*m*s-_*h*s+_*r*d-e*m*d-u*r*p+e*h*p)*D,t[6]=(_*l*s-o*m*s-_*r*c+e*m*c+o*r*p-e*l*p)*D,t[7]=(o*h*s-u*l*s+u*r*c-e*h*c-o*r*d+e*l*d)*D,t[8]=b*D,t[9]=(_*f*s-u*x*s-_*i*d+e*x*d+u*i*p-e*f*p)*D,t[10]=(o*x*s-_*a*s+_*i*c-e*x*c-o*i*p+e*a*p)*D,t[11]=(u*a*s-o*f*s-u*i*c+e*f*c+o*i*d-e*a*d)*D,t[12]=G*D,t[13]=(u*x*r-_*f*r+_*i*h-e*x*h-u*i*m+e*f*m)*D,t[14]=(_*a*r-o*x*r-_*i*l+e*x*l+o*i*m-e*a*m)*D,t[15]=(o*f*r-u*a*r+u*i*l-e*f*l-o*i*h+e*a*h)*D,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,_=s*f,x=o*u,m=o*f,p=a*f,C=l*c,M=l*u,b=l*f,G=i.x,P=i.y,D=i.z;return r[0]=(1-(x+p))*G,r[1]=(d+b)*G,r[2]=(_-M)*G,r[3]=0,r[4]=(d-b)*P,r[5]=(1-(h+p))*P,r[6]=(m+C)*P,r[7]=0,r[8]=(_+M)*D,r[9]=(m-C)*D,r[10]=(1-(h+x))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ni.set(r[0],r[1],r[2]).length();const o=Ni.set(r[4],r[5],r[6]).length(),a=Ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ke.copy(this);const c=1/s,u=1/o,f=1/a;return Ke.elements[0]*=c,Ke.elements[1]*=c,Ke.elements[2]*=c,Ke.elements[4]*=u,Ke.elements[5]*=u,Ke.elements[6]*=u,Ke.elements[8]*=f,Ke.elements[9]*=f,Ke.elements[10]*=f,e.setFromRotationMatrix(Ke),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=An){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),h=(i+r)/(i-r);let d,_;if(a===An)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ks)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=An){const l=this.elements,c=1/(e-t),u=1/(i-r),f=1/(o-s),h=(e+t)*c,d=(i+r)*u;let _,x;if(a===An)_=(o+s)*f,x=-2*f;else if(a===Ks)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ni=new O,Ke=new oe,Sg=new O(0,0,0),yg=new O(1,1,1),Fn=new O,ls=new O,Be=new O,Ic=new oe,Uc=new yi;class Cn{constructor(t=0,e=0,i=0,r=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ic.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ic,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uc.setFromEuler(this),this.setFromQuaternion(Uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Dl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Eg=0;const Nc=new O,Oi=new yi,vn=new oe,cs=new O,mr=new O,Tg=new O,bg=new yi,Oc=new O(1,0,0),Fc=new O(0,1,0),Bc=new O(0,0,1),zc={type:"added"},Ag={type:"removed"},Fi={type:"childadded",child:null},zo={type:"childremoved",child:null};class Se extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new O,e=new Cn,i=new yi,r=new O(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new oe},normalMatrix:{value:new kt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Oc,t)}rotateY(t){return this.rotateOnAxis(Fc,t)}rotateZ(t){return this.rotateOnAxis(Bc,t)}translateOnAxis(t,e){return Nc.copy(t).applyQuaternion(this.quaternion),this.position.add(Nc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oc,t)}translateY(t){return this.translateOnAxis(Fc,t)}translateZ(t){return this.translateOnAxis(Bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?cs.copy(t):cs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(mr,cs,this.up):vn.lookAt(cs,mr,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(vn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zc),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ag),zo.child=t,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zc),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,t,Tg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,bg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Se.DEFAULT_UP=new O(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new O,xn=new O,Ho=new O,Mn=new O,Bi=new O,zi=new O,Hc=new O,Vo=new O,Go=new O,ko=new O;class fn{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),je.subVectors(t,e),r.cross(je);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){je.subVectors(r,e),xn.subVectors(i,e),Ho.subVectors(t,e);const o=je.dot(je),a=je.dot(xn),l=je.dot(Ho),c=xn.dot(xn),u=xn.dot(Ho),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-d-_,_,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mn.x),l.addScaledVector(o,Mn.y),l.addScaledVector(a,Mn.z),l)}static isFrontFacing(t,e,i,r){return je.subVectors(i,e),xn.subVectors(t,e),je.cross(xn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),je.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return fn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Bi.subVectors(r,i),zi.subVectors(s,i),Vo.subVectors(t,i);const l=Bi.dot(Vo),c=zi.dot(Vo);if(l<=0&&c<=0)return e.copy(i);Go.subVectors(t,r);const u=Bi.dot(Go),f=zi.dot(Go);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Bi,o);ko.subVectors(t,s);const d=Bi.dot(ko),_=zi.dot(ko);if(_>=0&&d<=_)return e.copy(s);const x=d*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(zi,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Hc.subVectors(s,r),a=(f-u)/(f-u+(d-_)),e.copy(r).addScaledVector(Hc,a);const p=1/(m+x+h);return o=x*p,a=h*p,e.copy(i).addScaledVector(Bi,o).addScaledVector(zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},us={h:0,s:0,l:0};function Wo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=te.workingColorSpace){if(t=Ll(t,1),e=_e(e,0,1),i=_e(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Wo(o,s,t+1/3),this.g=Wo(o,s,t),this.b=Wo(o,s,t-1/3)}return te.toWorkingColorSpace(this,r),this}setStyle(t,e=on){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const i=jf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}copyLinearToSRGB(t){return this.r=Lo(t.r),this.g=Lo(t.g),this.b=Lo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return te.fromWorkingColorSpace(Te.copy(this),t),Math.round(_e(Te.r*255,0,255))*65536+Math.round(_e(Te.g*255,0,255))*256+Math.round(_e(Te.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Te.copy(this),e);const i=Te.r,r=Te.g,s=Te.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=on){te.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,i=Te.g,r=Te.b;return t!==on?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(us);const i=wr(Bn.h,us.h,e),r=wr(Bn.s,us.s,e),s=wr(Bn.l,us.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new Jt;Jt.NAMES=jf;let wg=0;class Xr extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Qi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=va,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(i.blending=this.blending),this.side!==$n&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_a&&(i.blendSrc=this.blendSrc),this.blendDst!==va&&(i.blendDst=this.blendDst),this.blendEquation!==di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ki extends Xr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new O,fs=new mt;class hn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ac,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Yf("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)fs.fromBufferAttribute(this,e),fs.applyMatrix3(t),this.setXY(e,fs.x,fs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=qi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),r=Re(r,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ac&&(t.usage=this.usage),t}}class $f extends hn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Zf extends hn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class dn extends hn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Rg=0;const Ge=new oe,Xo=new Se,Hi=new O,ze=new Wr,gr=new Wr,ge=new O;class rn extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xf(t)?Zf:$f)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new kt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,i){return Ge.makeTranslation(t,e,i),this.applyMatrix4(Ge),this}scale(t,e,i){return Ge.makeScale(t,e,i),this.applyMatrix4(Ge),this}lookAt(t){return Xo.lookAt(t),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];ze.setFromBufferAttribute(s),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(ze.min,gr.min),ze.expandByPoint(ge),ge.addVectors(ze.max,gr.max),ze.expandByPoint(ge)):(ze.expandByPoint(gr.min),ze.expandByPoint(gr.max))}ze.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)ge.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ge));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ge.fromBufferAttribute(a,c),l&&(Hi.fromBufferAttribute(t,c),ge.add(Hi)),r=Math.max(r,i.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new O,l[B]=new O;const c=new O,u=new O,f=new O,h=new mt,d=new mt,_=new mt,x=new O,m=new O;function p(B,R,y){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,B),d.fromBufferAttribute(s,R),_.fromBufferAttribute(s,y),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const I=1/(d.x*_.y-_.x*d.y);isFinite(I)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(I),a[B].add(x),a[R].add(x),a[y].add(x),l[B].add(m),l[R].add(m),l[y].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let B=0,R=C.length;B<R;++B){const y=C[B],I=y.start,nt=y.count;for(let j=I,tt=I+nt;j<tt;j+=3)p(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const M=new O,b=new O,G=new O,P=new O;function D(B){G.fromBufferAttribute(r,B),P.copy(G);const R=a[B];M.copy(R),M.sub(G.multiplyScalar(G.dot(R))).normalize(),b.crossVectors(P,R);const I=b.dot(l[B])<0?-1:1;o.setXYZW(B,M.x,M.y,M.z,I)}for(let B=0,R=C.length;B<R;++B){const y=C[B],I=y.start,nt=y.count;for(let j=I,tt=I+nt;j<tt;j+=3)D(t.getX(j+0)),D(t.getX(j+1)),D(t.getX(j+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(t)for(let h=0,d=t.count;h<d;h+=3){const _=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new hn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new rn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vc=new oe,oi=new ho,hs=new fo,Gc=new O,Vi=new O,Gi=new O,ki=new O,Yo=new O,ds=new O,ps=new mt,ms=new mt,gs=new mt,kc=new O,Wc=new O,Xc=new O,_s=new O,vs=new O;class tn extends Se{constructor(t=new rn,e=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ds.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Yo.fromBufferAttribute(f,t),o?ds.addScaledVector(Yo,u):ds.addScaledVector(Yo.sub(e),u))}e.add(ds)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere),hs.applyMatrix4(s),oi.copy(t.ray).recast(t.near),!(hs.containsPoint(oi.origin)===!1&&(oi.intersectSphere(hs,Gc)===null||oi.origin.distanceToSquared(Gc)>(t.far-t.near)**2))&&(Vc.copy(s).invert(),oi.copy(t.ray).applyMatrix4(Vc),!(i.boundingBox!==null&&oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],p=o[m.materialIndex],C=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=C,G=M;b<G;b+=3){const P=a.getX(b),D=a.getX(b+1),B=a.getX(b+2);r=xs(this,p,t,i,c,u,f,P,D,B),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const C=a.getX(m),M=a.getX(m+1),b=a.getX(m+2);r=xs(this,o,t,i,c,u,f,C,M,b),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],p=o[m.materialIndex],C=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=C,G=M;b<G;b+=3){const P=b,D=b+1,B=b+2;r=xs(this,p,t,i,c,u,f,P,D,B),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const C=m,M=m+1,b=m+2;r=xs(this,o,t,i,c,u,f,C,M,b),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Cg(n,t,e,i,r,s,o,a){let l;if(t.side===De?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===$n,a),l===null)return null;vs.copy(a),vs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(vs);return c<e.near||c>e.far?null:{distance:c,point:vs.clone(),object:n}}function xs(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Vi),n.getVertexPosition(l,Gi),n.getVertexPosition(c,ki);const u=Cg(n,t,e,i,Vi,Gi,ki,_s);if(u){r&&(ps.fromBufferAttribute(r,a),ms.fromBufferAttribute(r,l),gs.fromBufferAttribute(r,c),u.uv=fn.getInterpolation(_s,Vi,Gi,ki,ps,ms,gs,new mt)),s&&(ps.fromBufferAttribute(s,a),ms.fromBufferAttribute(s,l),gs.fromBufferAttribute(s,c),u.uv1=fn.getInterpolation(_s,Vi,Gi,ki,ps,ms,gs,new mt)),o&&(kc.fromBufferAttribute(o,a),Wc.fromBufferAttribute(o,l),Xc.fromBufferAttribute(o,c),u.normal=fn.getInterpolation(_s,Vi,Gi,ki,kc,Wc,Xc,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new O,materialIndex:0};fn.getNormal(Vi,Gi,ki,f.normal),u.face=f}return u}class Yr extends rn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,e,t,o,s,0),_("z","y","x",1,-1,i,e,-t,o,s,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(f,2));function _(x,m,p,C,M,b,G,P,D,B,R){const y=b/D,I=G/B,nt=b/2,j=G/2,tt=P/2,ot=D+1,q=B+1;let it=0,X=0;const ht=new O;for(let vt=0;vt<q;vt++){const gt=vt*I-j;for(let wt=0;wt<ot;wt++){const zt=wt*y-nt;ht[x]=zt*C,ht[m]=gt*M,ht[p]=tt,c.push(ht.x,ht.y,ht.z),ht[x]=0,ht[m]=0,ht[p]=P>0?1:-1,u.push(ht.x,ht.y,ht.z),f.push(wt/D),f.push(1-vt/B),it+=1}}for(let vt=0;vt<B;vt++)for(let gt=0;gt<D;gt++){const wt=h+gt+ot*vt,zt=h+gt+ot*(vt+1),rt=h+(gt+1)+ot*(vt+1),ft=h+(gt+1)+ot*vt;l.push(wt,zt,ft),l.push(zt,rt,ft),X+=6}a.addGroup(d,X,R),d+=X,h+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function lr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ce(n){const t={};for(let e=0;e<n.length;e++){const i=lr(n[e]);for(const r in i)t[r]=i[r]}return t}function Pg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Jf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Lg={clone:lr,merge:Ce};var Dg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ig=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Xr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dg,this.fragmentShader=Ig,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lr(t.uniforms),this.uniformsGroups=Pg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Qf extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new O,Yc=new mt,qc=new mt;class ke extends Qf{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,Yc,qc),e.subVectors(qc,Yc)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ar*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class Ug extends Se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ke(Wi,Xi,t,e);r.layers=this.layers,this.add(r);const s=new ke(Wi,Xi,t,e);s.layers=this.layers,this.add(s);const o=new ke(Wi,Xi,t,e);o.layers=this.layers,this.add(o);const a=new ke(Wi,Xi,t,e);a.layers=this.layers,this.add(a);const l=new ke(Wi,Xi,t,e);l.layers=this.layers,this.add(l);const c=new ke(Wi,Xi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class th extends Ie{constructor(t,e,i,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:rr,super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ng extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new th(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Yr(5,5,5),s=new Zn({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:De,blending:qn});s.uniforms.tEquirect.value=e;const o=new tn(r,s),a=e.minFilter;return e.minFilter===gi&&(e.minFilter=Ze),new Ug(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const qo=new O,Og=new O,Fg=new kt;class Gn{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=qo.subVectors(i,e).cross(Og.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(qo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Fg.getNormalMatrix(t),r=this.coplanarPoint(qo).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new fo,Ms=new O;class eh{constructor(t=new Gn,e=new Gn,i=new Gn,r=new Gn,s=new Gn,o=new Gn){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=An){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],_=r[9],x=r[10],m=r[11],p=r[12],C=r[13],M=r[14],b=r[15];if(i[0].setComponents(l-s,h-c,m-d,b-p).normalize(),i[1].setComponents(l+s,h+c,m+d,b+p).normalize(),i[2].setComponents(l+o,h+u,m+_,b+C).normalize(),i[3].setComponents(l-o,h-u,m-_,b-C).normalize(),i[4].setComponents(l-a,h-f,m-x,b-M).normalize(),e===An)i[5].setComponents(l+a,h+f,m+x,b+M).normalize();else if(e===Ks)i[5].setComponents(a,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ms.x=r.normal.x>0?t.max.x:t.min.x,Ms.y=r.normal.y>0?t.max.y:t.min.y,Ms.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nh(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Bg(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let d=0,_=h.length;d<_;d++){const x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class po extends rn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=t/a,h=e/l,d=[],_=[],x=[],m=[];for(let p=0;p<u;p++){const C=p*h-o;for(let M=0;M<c;M++){const b=M*f-s;_.push(b,-C,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let C=0;C<a;C++){const M=C+c*p,b=C+c*(p+1),G=C+1+c*(p+1),P=C+1+c*p;d.push(M,b,P),d.push(b,G,P)}this.setIndex(d),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(x,3)),this.setAttribute("uv",new dn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.width,t.height,t.widthSegments,t.heightSegments)}}var zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,l_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,c_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,u_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m_="gl_FragColor = linearToOutputTexel( gl_FragColor );",g_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,__=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,v_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,L_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,D_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,F_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,K_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ev=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ov=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,av=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_v=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ev=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Av=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Iv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Yv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,c0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,g0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:zg,alphahash_pars_fragment:Hg,alphamap_fragment:Vg,alphamap_pars_fragment:Gg,alphatest_fragment:kg,alphatest_pars_fragment:Wg,aomap_fragment:Xg,aomap_pars_fragment:Yg,batching_pars_vertex:qg,batching_vertex:Kg,begin_vertex:jg,beginnormal_vertex:$g,bsdfs:Zg,iridescence_fragment:Jg,bumpmap_pars_fragment:Qg,clipping_planes_fragment:t_,clipping_planes_pars_fragment:e_,clipping_planes_pars_vertex:n_,clipping_planes_vertex:i_,color_fragment:r_,color_pars_fragment:s_,color_pars_vertex:o_,color_vertex:a_,common:l_,cube_uv_reflection_fragment:c_,defaultnormal_vertex:u_,displacementmap_pars_vertex:f_,displacementmap_vertex:h_,emissivemap_fragment:d_,emissivemap_pars_fragment:p_,colorspace_fragment:m_,colorspace_pars_fragment:g_,envmap_fragment:__,envmap_common_pars_fragment:v_,envmap_pars_fragment:x_,envmap_pars_vertex:M_,envmap_physical_pars_fragment:L_,envmap_vertex:S_,fog_vertex:y_,fog_pars_vertex:E_,fog_fragment:T_,fog_pars_fragment:b_,gradientmap_pars_fragment:A_,lightmap_pars_fragment:w_,lights_lambert_fragment:R_,lights_lambert_pars_fragment:C_,lights_pars_begin:P_,lights_toon_fragment:D_,lights_toon_pars_fragment:I_,lights_phong_fragment:U_,lights_phong_pars_fragment:N_,lights_physical_fragment:O_,lights_physical_pars_fragment:F_,lights_fragment_begin:B_,lights_fragment_maps:z_,lights_fragment_end:H_,logdepthbuf_fragment:V_,logdepthbuf_pars_fragment:G_,logdepthbuf_pars_vertex:k_,logdepthbuf_vertex:W_,map_fragment:X_,map_pars_fragment:Y_,map_particle_fragment:q_,map_particle_pars_fragment:K_,metalnessmap_fragment:j_,metalnessmap_pars_fragment:$_,morphinstance_vertex:Z_,morphcolor_vertex:J_,morphnormal_vertex:Q_,morphtarget_pars_vertex:tv,morphtarget_vertex:ev,normal_fragment_begin:nv,normal_fragment_maps:iv,normal_pars_fragment:rv,normal_pars_vertex:sv,normal_vertex:ov,normalmap_pars_fragment:av,clearcoat_normal_fragment_begin:lv,clearcoat_normal_fragment_maps:cv,clearcoat_pars_fragment:uv,iridescence_pars_fragment:fv,opaque_fragment:hv,packing:dv,premultiplied_alpha_fragment:pv,project_vertex:mv,dithering_fragment:gv,dithering_pars_fragment:_v,roughnessmap_fragment:vv,roughnessmap_pars_fragment:xv,shadowmap_pars_fragment:Mv,shadowmap_pars_vertex:Sv,shadowmap_vertex:yv,shadowmask_pars_fragment:Ev,skinbase_vertex:Tv,skinning_pars_vertex:bv,skinning_vertex:Av,skinnormal_vertex:wv,specularmap_fragment:Rv,specularmap_pars_fragment:Cv,tonemapping_fragment:Pv,tonemapping_pars_fragment:Lv,transmission_fragment:Dv,transmission_pars_fragment:Iv,uv_pars_fragment:Uv,uv_pars_vertex:Nv,uv_vertex:Ov,worldpos_vertex:Fv,background_vert:Bv,background_frag:zv,backgroundCube_vert:Hv,backgroundCube_frag:Vv,cube_vert:Gv,cube_frag:kv,depth_vert:Wv,depth_frag:Xv,distanceRGBA_vert:Yv,distanceRGBA_frag:qv,equirect_vert:Kv,equirect_frag:jv,linedashed_vert:$v,linedashed_frag:Zv,meshbasic_vert:Jv,meshbasic_frag:Qv,meshlambert_vert:t0,meshlambert_frag:e0,meshmatcap_vert:n0,meshmatcap_frag:i0,meshnormal_vert:r0,meshnormal_frag:s0,meshphong_vert:o0,meshphong_frag:a0,meshphysical_vert:l0,meshphysical_frag:c0,meshtoon_vert:u0,meshtoon_frag:f0,points_vert:h0,points_frag:d0,shadow_vert:p0,shadow_frag:m0,sprite_vert:g0,sprite_frag:_0},Mt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},cn={basic:{uniforms:Ce([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ce([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ce([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ce([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ce([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ce([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ce([Mt.points,Mt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ce([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ce([Mt.common,Mt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ce([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ce([Mt.sprite,Mt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ce([Mt.common,Mt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ce([Mt.lights,Mt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};cn.physical={uniforms:Ce([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Ss={r:0,b:0,g:0},li=new Cn,v0=new oe;function x0(n,t,e,i,r,s,o){const a=new Jt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(C){let M=C.isScene===!0?C.background:null;return M&&M.isTexture&&(M=(C.backgroundBlurriness>0?e:t).get(M)),M}function x(C){let M=!1;const b=_(C);b===null?p(a,l):b&&b.isColor&&(p(b,1),M=!0);const G=n.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,o):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(C,M){const b=_(M);b&&(b.isCubeTexture||b.mapping===co)?(u===void 0&&(u=new tn(new Yr(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:lr(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(G,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),li.copy(M.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(v0.makeRotationFromEuler(li)),u.material.toneMapped=te.getTransfer(b.colorSpace)!==ee,(f!==b||h!==b.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,d=n.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new tn(new po(2,2),new Zn({name:"BackgroundMaterial",uniforms:lr(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=te.getTransfer(b.colorSpace)!==ee,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,d=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function p(C,M){C.getRGB(Ss,Jf(n)),i.buffers.color.setClear(Ss.r,Ss.g,Ss.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(C,M=1){a.set(C),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,p(a,l)},render:x,addToRenderList:m}}function M0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,I,nt,j,tt){let ot=!1;const q=f(j,nt,I);s!==q&&(s=q,c(s.object)),ot=d(y,j,nt,tt),ot&&_(y,j,nt,tt),tt!==null&&t.update(tt,n.ELEMENT_ARRAY_BUFFER),(ot||o)&&(o=!1,b(y,I,nt,j),tt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,I,nt){const j=nt.wireframe===!0;let tt=i[y.id];tt===void 0&&(tt={},i[y.id]=tt);let ot=tt[I.id];ot===void 0&&(ot={},tt[I.id]=ot);let q=ot[j];return q===void 0&&(q=h(l()),ot[j]=q),q}function h(y){const I=[],nt=[],j=[];for(let tt=0;tt<e;tt++)I[tt]=0,nt[tt]=0,j[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:nt,attributeDivisors:j,object:y,attributes:{},index:null}}function d(y,I,nt,j){const tt=s.attributes,ot=I.attributes;let q=0;const it=nt.getAttributes();for(const X in it)if(it[X].location>=0){const vt=tt[X];let gt=ot[X];if(gt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),vt===void 0||vt.attribute!==gt||gt&&vt.data!==gt.data)return!0;q++}return s.attributesNum!==q||s.index!==j}function _(y,I,nt,j){const tt={},ot=I.attributes;let q=0;const it=nt.getAttributes();for(const X in it)if(it[X].location>=0){let vt=ot[X];vt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor));const gt={};gt.attribute=vt,vt&&vt.data&&(gt.data=vt.data),tt[X]=gt,q++}s.attributes=tt,s.attributesNum=q,s.index=j}function x(){const y=s.newAttributes;for(let I=0,nt=y.length;I<nt;I++)y[I]=0}function m(y){p(y,0)}function p(y,I){const nt=s.newAttributes,j=s.enabledAttributes,tt=s.attributeDivisors;nt[y]=1,j[y]===0&&(n.enableVertexAttribArray(y),j[y]=1),tt[y]!==I&&(n.vertexAttribDivisor(y,I),tt[y]=I)}function C(){const y=s.newAttributes,I=s.enabledAttributes;for(let nt=0,j=I.length;nt<j;nt++)I[nt]!==y[nt]&&(n.disableVertexAttribArray(nt),I[nt]=0)}function M(y,I,nt,j,tt,ot,q){q===!0?n.vertexAttribIPointer(y,I,nt,tt,ot):n.vertexAttribPointer(y,I,nt,j,tt,ot)}function b(y,I,nt,j){x();const tt=j.attributes,ot=nt.getAttributes(),q=I.defaultAttributeValues;for(const it in ot){const X=ot[it];if(X.location>=0){let ht=tt[it];if(ht===void 0&&(it==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),it==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){const vt=ht.normalized,gt=ht.itemSize,wt=t.get(ht);if(wt===void 0)continue;const zt=wt.buffer,rt=wt.type,ft=wt.bytesPerElement,St=rt===n.INT||rt===n.UNSIGNED_INT||ht.gpuType===Tl;if(ht.isInterleavedBufferAttribute){const _t=ht.data,Lt=_t.stride,Ot=ht.offset;if(_t.isInstancedInterleavedBuffer){for(let Ct=0;Ct<X.locationSize;Ct++)p(X.location+Ct,_t.meshPerAttribute);y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Ct=0;Ct<X.locationSize;Ct++)m(X.location+Ct);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let Ct=0;Ct<X.locationSize;Ct++)M(X.location+Ct,gt/X.locationSize,rt,vt,Lt*ft,(Ot+gt/X.locationSize*Ct)*ft,St)}else{if(ht.isInstancedBufferAttribute){for(let _t=0;_t<X.locationSize;_t++)p(X.location+_t,ht.meshPerAttribute);y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let _t=0;_t<X.locationSize;_t++)m(X.location+_t);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let _t=0;_t<X.locationSize;_t++)M(X.location+_t,gt/X.locationSize,rt,vt,gt*ft,gt/X.locationSize*_t*ft,St)}}else if(q!==void 0){const vt=q[it];if(vt!==void 0)switch(vt.length){case 2:n.vertexAttrib2fv(X.location,vt);break;case 3:n.vertexAttrib3fv(X.location,vt);break;case 4:n.vertexAttrib4fv(X.location,vt);break;default:n.vertexAttrib1fv(X.location,vt)}}}}C()}function G(){B();for(const y in i){const I=i[y];for(const nt in I){const j=I[nt];for(const tt in j)u(j[tt].object),delete j[tt];delete I[nt]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const I=i[y.id];for(const nt in I){const j=I[nt];for(const tt in j)u(j[tt].object),delete j[tt];delete I[nt]}delete i[y.id]}function D(y){for(const I in i){const nt=i[I];if(nt[y.id]===void 0)continue;const j=nt[y.id];for(const tt in j)u(j[tt].object),delete j[tt];delete nt[y.id]}}function B(){R(),o=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:B,resetDefaultState:R,dispose:G,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:m,disableUnusedAttributes:C}}function S0(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];e.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x];for(let x=0;x<h.length;x++)e.update(_,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function y0(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Qe&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===kr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Rn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==bn&&!D)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,G=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:p,maxVaryings:C,maxFragmentUniforms:M,vertexTextures:b,maxSamples:G}}function E0(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Gn,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const C=s?0:i,M=C*4;let b=p.clippingState||null;l.value=b,b=u(_,h,M,d);for(let G=0;G!==M;++G)b[G]=e[G];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const p=d+x*4,C=h.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,b=d;M!==x;++M,b+=4)o.copy(f[M]).applyMatrix4(C,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function T0(n){let t=new WeakMap;function e(o,a){return a===xa?o.mapping=rr:a===Ma&&(o.mapping=sr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===xa||a===Ma)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ng(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class b0 extends Qf{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ji=4,Kc=[.125,.215,.35,.446,.526,.582],pi=20,Ko=new b0,jc=new Jt;let jo=null,$o=0,Zo=0,Jo=!1;const ui=(1+Math.sqrt(5))/2,Yi=1/ui,$c=[new O(-ui,Yi,0),new O(ui,Yi,0),new O(-Yi,0,ui),new O(Yi,0,ui),new O(0,ui,-Yi),new O(0,ui,Yi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Zc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){jo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jo,$o,Zo),this._renderer.xr.enabled=Jo,t.scissorTest=!1,ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rr||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:kr,format:Qe,colorSpace:ti,depthBuffer:!1},r=Jc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A0(s)),this._blurMaterial=w0(s,t,e)}return r}_compileMaterial(t){const e=new tn(this._lodPlanes[0],t);this._renderer.compile(e,Ko)}_sceneToCubeUV(t,e,i,r){const a=new ke(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(jc),u.toneMapping=Kn,u.autoClear=!1;const d=new Ki({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),_=new tn(new Yr,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(jc),x=!0);for(let p=0;p<6;p++){const C=p%3;C===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):C===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;ys(r,C*M,p>2?M:0,M,M),u.setRenderTarget(r),x&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===rr||t.mapping===sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ys(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ko)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$c[(r-s-1)%$c.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new tn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*pi-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):pi;m>pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pi}`);const p=[];let C=0;for(let D=0;D<pi;++D){const B=D/x,R=Math.exp(-B*B/2);p.push(R),D===0?C+=R:D<m&&(C+=2*R)}for(let D=0;D<p.length;D++)p[D]=p[D]/C;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=_,h.mipInt.value=M-i;const b=this._sizeLods[r],G=3*b*(r>M-ji?r-M+ji:0),P=4*(this._cubeSize-b);ys(e,G,P,3*b,2*b),l.setRenderTarget(e),l.render(f,Ko)}}function A0(n){const t=[],e=[],i=[];let r=n;const s=n-ji+1+Kc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-ji?l=Kc[o-n+ji-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,x=3,m=2,p=1,C=new Float32Array(x*_*d),M=new Float32Array(m*_*d),b=new Float32Array(p*_*d);for(let P=0;P<d;P++){const D=P%3*2/3-1,B=P>2?0:-1,R=[D,B,0,D+2/3,B,0,D+2/3,B+1,0,D,B,0,D+2/3,B+1,0,D,B+1,0];C.set(R,x*_*P),M.set(h,m*_*P);const y=[P,P,P,P,P,P];b.set(y,p*_*P)}const G=new rn;G.setAttribute("position",new hn(C,x)),G.setAttribute("uv",new hn(M,m)),G.setAttribute("faceIndex",new hn(b,p)),t.push(G),r>ji&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Jc(n,t,e){const i=new Si(n,t,e);return i.texture.mapping=co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ys(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function w0(n,t,e){const i=new Float32Array(pi),r=new O(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Qc(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function tu(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Il(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===xa||l===Ma,u=l===rr||l===sr;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Zc(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new Zc(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function C0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Yf("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function P0(n,t,e,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)t.update(h[_],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const x=d[_];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let x=0;if(d!==null){const C=d.array;x=d.version;for(let M=0,b=C.length;M<b;M+=3){const G=C[M+0],P=C[M+1],D=C[M+2];h.push(G,P,P,D,D,G)}}else if(_!==void 0){const C=_.array;x=_.version;for(let M=0,b=C.length/3-1;M<b;M+=3){const G=M+0,P=M+1,D=M+2;h.push(G,P,P,D,D,G)}}else return;const m=new(Xf(h)?Zf:$f)(h,1);m.version=x;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function L0(n,t,e){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),e.update(d,i,1)}function c(h,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,h*o,_),e.update(d,i,_))}function u(h,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,i,1)}function f(h,d,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,x,0,_);let p=0;for(let C=0;C<_;C++)p+=d[C];for(let C=0;C<x.length;C++)e.update(p,i,x[C])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function D0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function I0(n,t,e){const i=new WeakMap,r=new ve;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let R=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",R)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),_===!0&&(M=2),x===!0&&(M=3);let b=a.attributes.position.count*M,G=1;b>t.maxTextureSize&&(G=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const P=new Float32Array(b*G*4*f),D=new Kf(P,b,G,f);D.type=bn,D.needsUpdate=!0;const B=M*4;for(let y=0;y<f;y++){const I=m[y],nt=p[y],j=C[y],tt=b*G*4*y;for(let ot=0;ot<I.count;ot++){const q=ot*B;d===!0&&(r.fromBufferAttribute(I,ot),P[tt+q+0]=r.x,P[tt+q+1]=r.y,P[tt+q+2]=r.z,P[tt+q+3]=0),_===!0&&(r.fromBufferAttribute(nt,ot),P[tt+q+4]=r.x,P[tt+q+5]=r.y,P[tt+q+6]=r.z,P[tt+q+7]=0),x===!0&&(r.fromBufferAttribute(j,ot),P[tt+q+8]=r.x,P[tt+q+9]=r.y,P[tt+q+10]=r.z,P[tt+q+11]=j.itemSize===4?r.w:1)}}h={count:f,texture:D,size:new mt(b,G)},i.set(a,h),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function U0(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class ih extends Ie{constructor(t,e,i,r,s,o,a,l,c,u=tr){if(u!==tr&&u!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===tr&&(i=Mi),i===void 0&&u===ar&&(i=or),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const rh=new Ie,eu=new ih(1,1),sh=new Kf,oh=new xg,ah=new th,nu=[],iu=[],ru=new Float32Array(16),su=new Float32Array(9),ou=new Float32Array(4);function ur(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=nu[r];if(s===void 0&&(s=new Float32Array(r),nu[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function pe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function me(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function mo(n,t){let e=iu[t];e===void 0&&(e=new Int32Array(t),iu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function N0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function O0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;n.uniform2fv(this.addr,t),me(e,t)}}function F0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;n.uniform3fv(this.addr,t),me(e,t)}}function B0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;n.uniform4fv(this.addr,t),me(e,t)}}function z0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;ou.set(i),n.uniformMatrix2fv(this.addr,!1,ou),me(e,i)}}function H0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;su.set(i),n.uniformMatrix3fv(this.addr,!1,su),me(e,i)}}function V0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;ru.set(i),n.uniformMatrix4fv(this.addr,!1,ru),me(e,i)}}function G0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function k0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;n.uniform2iv(this.addr,t),me(e,t)}}function W0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;n.uniform3iv(this.addr,t),me(e,t)}}function X0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;n.uniform4iv(this.addr,t),me(e,t)}}function Y0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function q0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;n.uniform2uiv(this.addr,t),me(e,t)}}function K0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;n.uniform3uiv(this.addr,t),me(e,t)}}function j0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;n.uniform4uiv(this.addr,t),me(e,t)}}function $0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(eu.compareFunction=Wf,s=eu):s=rh,e.setTexture2D(t||s,r)}function Z0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||oh,r)}function J0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||ah,r)}function Q0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||sh,r)}function tx(n){switch(n){case 5126:return N0;case 35664:return O0;case 35665:return F0;case 35666:return B0;case 35674:return z0;case 35675:return H0;case 35676:return V0;case 5124:case 35670:return G0;case 35667:case 35671:return k0;case 35668:case 35672:return W0;case 35669:case 35673:return X0;case 5125:return Y0;case 36294:return q0;case 36295:return K0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return Q0}}function ex(n,t){n.uniform1fv(this.addr,t)}function nx(n,t){const e=ur(t,this.size,2);n.uniform2fv(this.addr,e)}function ix(n,t){const e=ur(t,this.size,3);n.uniform3fv(this.addr,e)}function rx(n,t){const e=ur(t,this.size,4);n.uniform4fv(this.addr,e)}function sx(n,t){const e=ur(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ox(n,t){const e=ur(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ax(n,t){const e=ur(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function lx(n,t){n.uniform1iv(this.addr,t)}function cx(n,t){n.uniform2iv(this.addr,t)}function ux(n,t){n.uniform3iv(this.addr,t)}function fx(n,t){n.uniform4iv(this.addr,t)}function hx(n,t){n.uniform1uiv(this.addr,t)}function dx(n,t){n.uniform2uiv(this.addr,t)}function px(n,t){n.uniform3uiv(this.addr,t)}function mx(n,t){n.uniform4uiv(this.addr,t)}function gx(n,t,e){const i=this.cache,r=t.length,s=mo(e,r);pe(i,s)||(n.uniform1iv(this.addr,s),me(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||rh,s[o])}function _x(n,t,e){const i=this.cache,r=t.length,s=mo(e,r);pe(i,s)||(n.uniform1iv(this.addr,s),me(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||oh,s[o])}function vx(n,t,e){const i=this.cache,r=t.length,s=mo(e,r);pe(i,s)||(n.uniform1iv(this.addr,s),me(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||ah,s[o])}function xx(n,t,e){const i=this.cache,r=t.length,s=mo(e,r);pe(i,s)||(n.uniform1iv(this.addr,s),me(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||sh,s[o])}function Mx(n){switch(n){case 5126:return ex;case 35664:return nx;case 35665:return ix;case 35666:return rx;case 35674:return sx;case 35675:return ox;case 35676:return ax;case 5124:case 35670:return lx;case 35667:case 35671:return cx;case 35668:case 35672:return ux;case 35669:case 35673:return fx;case 5125:return hx;case 36294:return dx;case 36295:return px;case 36296:return mx;case 35678:case 36198:case 36298:case 36306:case 35682:return gx;case 35679:case 36299:case 36307:return _x;case 35680:case 36300:case 36308:case 36293:return vx;case 36289:case 36303:case 36311:case 36292:return xx}}class Sx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=tx(e.type)}}class yx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mx(e.type)}}class Ex{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function au(n,t){n.seq.push(t),n.map[t.id]=t}function Tx(n,t,e){const i=n.name,r=i.length;for(Qo.lastIndex=0;;){const s=Qo.exec(i),o=Qo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){au(e,c===void 0?new Sx(a,n,t):new yx(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Ex(a),au(e,f)),e=f}}}class Hs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Tx(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function lu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const bx=37297;let Ax=0;function wx(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Rx(n){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(n);let i;switch(t===e?i="":t===qs&&e===Ys?i="LinearDisplayP3ToLinearSRGB":t===Ys&&e===qs&&(i="LinearSRGBToLinearDisplayP3"),n){case ti:case uo:return[i,"LinearTransferOETF"];case on:case Pl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function cu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+wx(n.getShaderSource(t),o)}else return r}function Cx(n,t){const e=Rx(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Px(n,t){let e;switch(t){case Pm:e="Linear";break;case Lm:e="Reinhard";break;case Dm:e="OptimizedCineon";break;case Im:e="ACESFilmic";break;case Nm:e="AgX";break;case Om:e="Neutral";break;case Um:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Lx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function Dx(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ix(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function xr(n){return n!==""}function uu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(n){return n.replace(Ux,Ox)}const Nx=new Map;function Ox(n,t){let e=Gt[t];if(e===void 0){const i=Nx.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ja(e)}const Fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hu(n){return n.replace(Fx,Bx)}function Bx(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function du(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Lf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===nm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function Hx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case rr:case sr:t="ENVMAP_TYPE_CUBE";break;case co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case sr:t="ENVMAP_MODE_REFRACTION";break}return t}function Gx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Df:t="ENVMAP_BLENDING_MULTIPLY";break;case Rm:t="ENVMAP_BLENDING_MIX";break;case Cm:t="ENVMAP_BLENDING_ADD";break}return t}function kx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Wx(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=zx(e),c=Hx(e),u=Vx(e),f=Gx(e),h=kx(e),d=Lx(e),_=Dx(s),x=r.createProgram();let m,p,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(m=[du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?Px("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Cx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),o=ja(o),o=uu(o,e),o=fu(o,e),a=ja(a),a=uu(a,e),a=fu(a,e),o=hu(o),a=hu(a),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=C+m+o,b=C+p+a,G=lu(r,r.VERTEX_SHADER,M),P=lu(r,r.FRAGMENT_SHADER,b);r.attachShader(x,G),r.attachShader(x,P),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function D(I){if(n.debug.checkShaderErrors){const nt=r.getProgramInfoLog(x).trim(),j=r.getShaderInfoLog(G).trim(),tt=r.getShaderInfoLog(P).trim();let ot=!0,q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ot=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,G,P);else{const it=cu(r,G,"vertex"),X=cu(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+nt+`
`+it+`
`+X)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(j===""||tt==="")&&(q=!1);q&&(I.diagnostics={runnable:ot,programLog:nt,vertexShader:{log:j,prefix:m},fragmentShader:{log:tt,prefix:p}})}r.deleteShader(G),r.deleteShader(P),B=new Hs(r,x),R=Ix(r,x)}let B;this.getUniforms=function(){return B===void 0&&D(this),B};let R;this.getAttributes=function(){return R===void 0&&D(this),R};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,bx)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ax++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=G,this.fragmentShader=P,this}let Xx=0;class Yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new qx(t),e.set(t,i)),i}}class qx{constructor(t){this.id=Xx++,this.code=t,this.usedTimes=0}}function Kx(n,t,e,i,r,s,o){const a=new Dl,l=new Yx,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(R){return c.add(R),R===0?"uv":`uv${R}`}function m(R,y,I,nt,j){const tt=nt.fog,ot=j.geometry,q=R.isMeshStandardMaterial?nt.environment:null,it=(R.isMeshStandardMaterial?e:t).get(R.envMap||q),X=it&&it.mapping===co?it.image.height:null,ht=_[R.type];R.precision!==null&&(d=r.getMaxPrecision(R.precision),d!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",d,"instead."));const vt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,gt=vt!==void 0?vt.length:0;let wt=0;ot.morphAttributes.position!==void 0&&(wt=1),ot.morphAttributes.normal!==void 0&&(wt=2),ot.morphAttributes.color!==void 0&&(wt=3);let zt,rt,ft,St;if(ht){const qt=cn[ht];zt=qt.vertexShader,rt=qt.fragmentShader}else zt=R.vertexShader,rt=R.fragmentShader,l.update(R),ft=l.getVertexShaderID(R),St=l.getFragmentShaderID(R);const _t=n.getRenderTarget(),Lt=j.isInstancedMesh===!0,Ot=j.isBatchedMesh===!0,Ct=!!R.map,Xt=!!R.matcap,w=!!it,T=!!R.aoMap,A=!!R.lightMap,N=!!R.bumpMap,U=!!R.normalMap,Y=!!R.displacementMap,H=!!R.emissiveMap,Q=!!R.metalnessMap,S=!!R.roughnessMap,g=R.anisotropy>0,L=R.clearcoat>0,z=R.dispersion>0,W=R.iridescence>0,k=R.sheen>0,lt=R.transmission>0,st=g&&!!R.anisotropyMap,ct=L&&!!R.clearcoatMap,xt=L&&!!R.clearcoatNormalMap,at=L&&!!R.clearcoatRoughnessMap,dt=W&&!!R.iridescenceMap,Ht=W&&!!R.iridescenceThicknessMap,Dt=k&&!!R.sheenColorMap,yt=k&&!!R.sheenRoughnessMap,Ut=!!R.specularMap,At=!!R.specularColorMap,Yt=!!R.specularIntensityMap,v=lt&&!!R.transmissionMap,K=lt&&!!R.thicknessMap,$=!!R.gradientMap,et=!!R.alphaMap,ut=R.alphaTest>0,Rt=!!R.alphaHash,Ft=!!R.extensions;let ae=Kn;R.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ae=n.toneMapping);const he={shaderID:ht,shaderType:R.type,shaderName:R.name,vertexShader:zt,fragmentShader:rt,defines:R.defines,customVertexShaderID:ft,customFragmentShaderID:St,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:d,batching:Ot,batchingColor:Ot&&j._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&j.instanceColor!==null,instancingMorph:Lt&&j.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:_t===null?n.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:ti,alphaToCoverage:!!R.alphaToCoverage,map:Ct,matcap:Xt,envMap:w,envMapMode:w&&it.mapping,envMapCubeUVHeight:X,aoMap:T,lightMap:A,bumpMap:N,normalMap:U,displacementMap:h&&Y,emissiveMap:H,normalMapObjectSpace:U&&R.normalMapType===Vm,normalMapTangentSpace:U&&R.normalMapType===Hm,metalnessMap:Q,roughnessMap:S,anisotropy:g,anisotropyMap:st,clearcoat:L,clearcoatMap:ct,clearcoatNormalMap:xt,clearcoatRoughnessMap:at,dispersion:z,iridescence:W,iridescenceMap:dt,iridescenceThicknessMap:Ht,sheen:k,sheenColorMap:Dt,sheenRoughnessMap:yt,specularMap:Ut,specularColorMap:At,specularIntensityMap:Yt,transmission:lt,transmissionMap:v,thicknessMap:K,gradientMap:$,opaque:R.transparent===!1&&R.blending===Qi&&R.alphaToCoverage===!1,alphaMap:et,alphaTest:ut,alphaHash:Rt,combine:R.combine,mapUv:Ct&&x(R.map.channel),aoMapUv:T&&x(R.aoMap.channel),lightMapUv:A&&x(R.lightMap.channel),bumpMapUv:N&&x(R.bumpMap.channel),normalMapUv:U&&x(R.normalMap.channel),displacementMapUv:Y&&x(R.displacementMap.channel),emissiveMapUv:H&&x(R.emissiveMap.channel),metalnessMapUv:Q&&x(R.metalnessMap.channel),roughnessMapUv:S&&x(R.roughnessMap.channel),anisotropyMapUv:st&&x(R.anisotropyMap.channel),clearcoatMapUv:ct&&x(R.clearcoatMap.channel),clearcoatNormalMapUv:xt&&x(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&x(R.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&x(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&x(R.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&x(R.sheenColorMap.channel),sheenRoughnessMapUv:yt&&x(R.sheenRoughnessMap.channel),specularMapUv:Ut&&x(R.specularMap.channel),specularColorMapUv:At&&x(R.specularColorMap.channel),specularIntensityMapUv:Yt&&x(R.specularIntensityMap.channel),transmissionMapUv:v&&x(R.transmissionMap.channel),thicknessMapUv:K&&x(R.thicknessMap.channel),alphaMapUv:et&&x(R.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(U||g),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ot.attributes.uv&&(Ct||et),fog:!!tt,useFog:R.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:wt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ct&&R.map.isVideoTexture===!0&&te.getTransfer(R.map.colorSpace)===ee,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Tn,flipSided:R.side===De,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Ft&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&R.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function p(R){const y=[];if(R.shaderID?y.push(R.shaderID):(y.push(R.customVertexShaderID),y.push(R.customFragmentShaderID)),R.defines!==void 0)for(const I in R.defines)y.push(I),y.push(R.defines[I]);return R.isRawShaderMaterial===!1&&(C(y,R),M(y,R),y.push(n.outputColorSpace)),y.push(R.customProgramCacheKey),y.join()}function C(R,y){R.push(y.precision),R.push(y.outputColorSpace),R.push(y.envMapMode),R.push(y.envMapCubeUVHeight),R.push(y.mapUv),R.push(y.alphaMapUv),R.push(y.lightMapUv),R.push(y.aoMapUv),R.push(y.bumpMapUv),R.push(y.normalMapUv),R.push(y.displacementMapUv),R.push(y.emissiveMapUv),R.push(y.metalnessMapUv),R.push(y.roughnessMapUv),R.push(y.anisotropyMapUv),R.push(y.clearcoatMapUv),R.push(y.clearcoatNormalMapUv),R.push(y.clearcoatRoughnessMapUv),R.push(y.iridescenceMapUv),R.push(y.iridescenceThicknessMapUv),R.push(y.sheenColorMapUv),R.push(y.sheenRoughnessMapUv),R.push(y.specularMapUv),R.push(y.specularColorMapUv),R.push(y.specularIntensityMapUv),R.push(y.transmissionMapUv),R.push(y.thicknessMapUv),R.push(y.combine),R.push(y.fogExp2),R.push(y.sizeAttenuation),R.push(y.morphTargetsCount),R.push(y.morphAttributeCount),R.push(y.numDirLights),R.push(y.numPointLights),R.push(y.numSpotLights),R.push(y.numSpotLightMaps),R.push(y.numHemiLights),R.push(y.numRectAreaLights),R.push(y.numDirLightShadows),R.push(y.numPointLightShadows),R.push(y.numSpotLightShadows),R.push(y.numSpotLightShadowsWithMaps),R.push(y.numLightProbes),R.push(y.shadowMapType),R.push(y.toneMapping),R.push(y.numClippingPlanes),R.push(y.numClipIntersection),R.push(y.depthPacking)}function M(R,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),R.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),R.push(a.mask)}function b(R){const y=_[R.type];let I;if(y){const nt=cn[y];I=Lg.clone(nt.uniforms)}else I=R.uniforms;return I}function G(R,y){let I;for(let nt=0,j=u.length;nt<j;nt++){const tt=u[nt];if(tt.cacheKey===y){I=tt,++I.usedTimes;break}}return I===void 0&&(I=new Wx(n,y,R,s),u.push(I)),I}function P(R){if(--R.usedTimes===0){const y=u.indexOf(R);u[y]=u[u.length-1],u.pop(),R.destroy()}}function D(R){l.remove(R)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:G,releaseProgram:P,releaseShaderCache:D,programs:u,dispose:B}}function jx(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function $x(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function pu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function mu(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,h,d,_,x,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=x,p.group=m),t++,p}function a(f,h,d,_,x,m){const p=o(f,h,d,_,x,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(f,h,d,_,x,m){const p=o(f,h,d,_,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||$x),i.length>1&&i.sort(h||pu),r.length>1&&r.sort(h||pu)}function u(){for(let f=t,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Zx(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new mu,n.set(i,[o])):r>=s.length?(o=new mu,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Jx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Jt};break;case"SpotLight":e={position:new O,direction:new O,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function Qx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let tM=0;function eM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function nM(n){const t=new Jx,e=Qx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new oe,o=new oe;function a(c){let u=0,f=0,h=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let d=0,_=0,x=0,m=0,p=0,C=0,M=0,b=0,G=0,P=0,D=0;c.sort(eM);for(let R=0,y=c.length;R<y;R++){const I=c[R],nt=I.color,j=I.intensity,tt=I.distance,ot=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=nt.r*j,f+=nt.g*j,h+=nt.b*j;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],j);D++}else if(I.isDirectionalLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const it=I.shadow,X=e.get(I);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=ot,i.directionalShadowMatrix[d]=I.shadow.matrix,C++}i.directional[d]=q,d++}else if(I.isSpotLight){const q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(nt).multiplyScalar(j),q.distance=tt,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[x]=q;const it=I.shadow;if(I.map&&(i.spotLightMap[G]=I.map,G++,it.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[x]=it.matrix,I.castShadow){const X=e.get(I);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=ot,b++}x++}else if(I.isRectAreaLight){const q=t.get(I);q.color.copy(nt).multiplyScalar(j),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=q,m++}else if(I.isPointLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const it=I.shadow,X=e.get(I);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,X.shadowCameraNear=it.camera.near,X.shadowCameraFar=it.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=ot,i.pointShadowMatrix[_]=I.shadow.matrix,M++}i.point[_]=q,_++}else if(I.isHemisphereLight){const q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(j),q.groundColor.copy(I.groundColor).multiplyScalar(j),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const B=i.hash;(B.directionalLength!==d||B.pointLength!==_||B.spotLength!==x||B.rectAreaLength!==m||B.hemiLength!==p||B.numDirectionalShadows!==C||B.numPointShadows!==M||B.numSpotShadows!==b||B.numSpotMaps!==G||B.numLightProbes!==D)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+G-P,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,B.directionalLength=d,B.pointLength=_,B.spotLength=x,B.rectAreaLength=m,B.hemiLength=p,B.numDirectionalShadows=C,B.numPointShadows=M,B.numSpotShadows=b,B.numSpotMaps=G,B.numLightProbes=D,i.version=tM++)}function l(c,u){let f=0,h=0,d=0,_=0,x=0;const m=u.matrixWorldInverse;for(let p=0,C=c.length;p<C;p++){const M=c[p];if(M.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(M.isSpotLight){const b=i.spot[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const b=i.hemi[x];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function gu(n){const t=new nM(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function iM(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new gu(n),t.set(r,[a])):s>=o.length?(a=new gu(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class rM extends Xr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sM extends Xr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const oM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lM(n,t,e){let i=new eh;const r=new mt,s=new mt,o=new ve,a=new rM({depthPacking:zm}),l=new sM,c={},u=e.maxTextureSize,f={[$n]:De,[De]:$n,[Tn]:Tn},h=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:oM,fragmentShader:aM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new rn;_.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new tn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lf;let p=this.type;this.render=function(P,D,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const R=n.getRenderTarget(),y=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),nt=n.state;nt.setBlending(qn),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const j=p!==yn&&this.type===yn,tt=p===yn&&this.type!==yn;for(let ot=0,q=P.length;ot<q;ot++){const it=P[ot],X=it.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ht=X.getFrameExtents();if(r.multiply(ht),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ht.x),r.x=s.x*ht.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ht.y),r.y=s.y*ht.y,X.mapSize.y=s.y)),X.map===null||j===!0||tt===!0){const gt=this.type!==yn?{minFilter:Xe,magFilter:Xe}:{};X.map!==null&&X.map.dispose(),X.map=new Si(r.x,r.y,gt),X.map.texture.name=it.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const vt=X.getViewportCount();for(let gt=0;gt<vt;gt++){const wt=X.getViewport(gt);o.set(s.x*wt.x,s.y*wt.y,s.x*wt.z,s.y*wt.w),nt.viewport(o),X.updateMatrices(it,gt),i=X.getFrustum(),b(D,B,X.camera,it,this.type)}X.isPointLightShadow!==!0&&this.type===yn&&C(X,B),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(R,y,I)};function C(P,D){const B=t.update(x);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Si(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(D,null,B,h,x,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(D,null,B,d,x,null)}function M(P,D,B,R){let y=null;const I=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)y=I;else if(y=B.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const nt=y.uuid,j=D.uuid;let tt=c[nt];tt===void 0&&(tt={},c[nt]=tt);let ot=tt[j];ot===void 0&&(ot=y.clone(),tt[j]=ot,D.addEventListener("dispose",G)),y=ot}if(y.visible=D.visible,y.wireframe=D.wireframe,R===yn?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:f[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,B.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const nt=n.properties.get(y);nt.light=B}return y}function b(P,D,B,R,y){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===yn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const j=t.update(P),tt=P.material;if(Array.isArray(tt)){const ot=j.groups;for(let q=0,it=ot.length;q<it;q++){const X=ot[q],ht=tt[X.materialIndex];if(ht&&ht.visible){const vt=M(P,ht,R,y);P.onBeforeShadow(n,P,D,B,j,vt,X),n.renderBufferDirect(B,null,j,vt,P,X),P.onAfterShadow(n,P,D,B,j,vt,X)}}}else if(tt.visible){const ot=M(P,tt,R,y);P.onBeforeShadow(n,P,D,B,j,ot,null),n.renderBufferDirect(B,null,j,ot,P,null),P.onAfterShadow(n,P,D,B,j,ot,null)}}const nt=P.children;for(let j=0,tt=nt.length;j<tt;j++)b(nt[j],D,B,R,y)}function G(P){P.target.removeEventListener("dispose",G);for(const B in c){const R=c[B],y=P.target.uuid;y in R&&(R[y].dispose(),delete R[y])}}}function cM(n){function t(){let v=!1;const K=new ve;let $=null;const et=new ve(0,0,0,0);return{setMask:function(ut){$!==ut&&!v&&(n.colorMask(ut,ut,ut,ut),$=ut)},setLocked:function(ut){v=ut},setClear:function(ut,Rt,Ft,ae,he){he===!0&&(ut*=ae,Rt*=ae,Ft*=ae),K.set(ut,Rt,Ft,ae),et.equals(K)===!1&&(n.clearColor(ut,Rt,Ft,ae),et.copy(K))},reset:function(){v=!1,$=null,et.set(-1,0,0,0)}}}function e(){let v=!1,K=null,$=null,et=null;return{setTest:function(ut){ut?St(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(ut){K!==ut&&!v&&(n.depthMask(ut),K=ut)},setFunc:function(ut){if($!==ut){switch(ut){case Sm:n.depthFunc(n.NEVER);break;case ym:n.depthFunc(n.ALWAYS);break;case Em:n.depthFunc(n.LESS);break;case Ws:n.depthFunc(n.LEQUAL);break;case Tm:n.depthFunc(n.EQUAL);break;case bm:n.depthFunc(n.GEQUAL);break;case Am:n.depthFunc(n.GREATER);break;case wm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=ut}},setLocked:function(ut){v=ut},setClear:function(ut){et!==ut&&(n.clearDepth(ut),et=ut)},reset:function(){v=!1,K=null,$=null,et=null}}}function i(){let v=!1,K=null,$=null,et=null,ut=null,Rt=null,Ft=null,ae=null,he=null;return{setTest:function(qt){v||(qt?St(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(qt){K!==qt&&!v&&(n.stencilMask(qt),K=qt)},setFunc:function(qt,de,le){($!==qt||et!==de||ut!==le)&&(n.stencilFunc(qt,de,le),$=qt,et=de,ut=le)},setOp:function(qt,de,le){(Rt!==qt||Ft!==de||ae!==le)&&(n.stencilOp(qt,de,le),Rt=qt,Ft=de,ae=le)},setLocked:function(qt){v=qt},setClear:function(qt){he!==qt&&(n.clearStencil(qt),he=qt)},reset:function(){v=!1,K=null,$=null,et=null,ut=null,Rt=null,Ft=null,ae=null,he=null}}}const r=new t,s=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,_=!1,x=null,m=null,p=null,C=null,M=null,b=null,G=null,P=new Jt(0,0,0),D=0,B=!1,R=null,y=null,I=null,nt=null,j=null;const tt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ot=!1,q=0;const it=n.getParameter(n.VERSION);it.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(it)[1]),ot=q>=1):it.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),ot=q>=2);let X=null,ht={};const vt=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),wt=new ve().fromArray(vt),zt=new ve().fromArray(gt);function rt(v,K,$,et){const ut=new Uint8Array(4),Rt=n.createTexture();n.bindTexture(v,Rt),n.texParameteri(v,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(v,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<$;Ft++)v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY?n.texImage3D(K,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,ut):n.texImage2D(K+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ut);return Rt}const ft={};ft[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),St(n.DEPTH_TEST),s.setFunc(Ws),N(!1),U(Sc),St(n.CULL_FACE),T(qn);function St(v){c[v]!==!0&&(n.enable(v),c[v]=!0)}function _t(v){c[v]!==!1&&(n.disable(v),c[v]=!1)}function Lt(v,K){return u[v]!==K?(n.bindFramebuffer(v,K),u[v]=K,v===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=K),v===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=K),!0):!1}function Ot(v,K){let $=h,et=!1;if(v){$=f.get(K),$===void 0&&($=[],f.set(K,$));const ut=v.textures;if($.length!==ut.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Rt=0,Ft=ut.length;Rt<Ft;Rt++)$[Rt]=n.COLOR_ATTACHMENT0+Rt;$.length=ut.length,et=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,et=!0);et&&n.drawBuffers($)}function Ct(v){return d!==v?(n.useProgram(v),d=v,!0):!1}const Xt={[di]:n.FUNC_ADD,[rm]:n.FUNC_SUBTRACT,[sm]:n.FUNC_REVERSE_SUBTRACT};Xt[om]=n.MIN,Xt[am]=n.MAX;const w={[lm]:n.ZERO,[cm]:n.ONE,[um]:n.SRC_COLOR,[_a]:n.SRC_ALPHA,[gm]:n.SRC_ALPHA_SATURATE,[pm]:n.DST_COLOR,[hm]:n.DST_ALPHA,[fm]:n.ONE_MINUS_SRC_COLOR,[va]:n.ONE_MINUS_SRC_ALPHA,[mm]:n.ONE_MINUS_DST_COLOR,[dm]:n.ONE_MINUS_DST_ALPHA,[_m]:n.CONSTANT_COLOR,[vm]:n.ONE_MINUS_CONSTANT_COLOR,[xm]:n.CONSTANT_ALPHA,[Mm]:n.ONE_MINUS_CONSTANT_ALPHA};function T(v,K,$,et,ut,Rt,Ft,ae,he,qt){if(v===qn){_===!0&&(_t(n.BLEND),_=!1);return}if(_===!1&&(St(n.BLEND),_=!0),v!==im){if(v!==x||qt!==B){if((m!==di||M!==di)&&(n.blendEquation(n.FUNC_ADD),m=di,M=di),qt)switch(v){case Qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yc:n.blendFunc(n.ONE,n.ONE);break;case Ec:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case Qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ec:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}p=null,C=null,b=null,G=null,P.set(0,0,0),D=0,x=v,B=qt}return}ut=ut||K,Rt=Rt||$,Ft=Ft||et,(K!==m||ut!==M)&&(n.blendEquationSeparate(Xt[K],Xt[ut]),m=K,M=ut),($!==p||et!==C||Rt!==b||Ft!==G)&&(n.blendFuncSeparate(w[$],w[et],w[Rt],w[Ft]),p=$,C=et,b=Rt,G=Ft),(ae.equals(P)===!1||he!==D)&&(n.blendColor(ae.r,ae.g,ae.b,he),P.copy(ae),D=he),x=v,B=!1}function A(v,K){v.side===Tn?_t(n.CULL_FACE):St(n.CULL_FACE);let $=v.side===De;K&&($=!$),N($),v.blending===Qi&&v.transparent===!1?T(qn):T(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),s.setFunc(v.depthFunc),s.setTest(v.depthTest),s.setMask(v.depthWrite),r.setMask(v.colorWrite);const et=v.stencilWrite;o.setTest(et),et&&(o.setMask(v.stencilWriteMask),o.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),o.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),H(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?St(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function N(v){R!==v&&(v?n.frontFace(n.CW):n.frontFace(n.CCW),R=v)}function U(v){v!==tm?(St(n.CULL_FACE),v!==y&&(v===Sc?n.cullFace(n.BACK):v===em?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),y=v}function Y(v){v!==I&&(ot&&n.lineWidth(v),I=v)}function H(v,K,$){v?(St(n.POLYGON_OFFSET_FILL),(nt!==K||j!==$)&&(n.polygonOffset(K,$),nt=K,j=$)):_t(n.POLYGON_OFFSET_FILL)}function Q(v){v?St(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function S(v){v===void 0&&(v=n.TEXTURE0+tt-1),X!==v&&(n.activeTexture(v),X=v)}function g(v,K,$){$===void 0&&(X===null?$=n.TEXTURE0+tt-1:$=X);let et=ht[$];et===void 0&&(et={type:void 0,texture:void 0},ht[$]=et),(et.type!==v||et.texture!==K)&&(X!==$&&(n.activeTexture($),X=$),n.bindTexture(v,K||ft[v]),et.type=v,et.texture=K)}function L(){const v=ht[X];v!==void 0&&v.type!==void 0&&(n.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function k(){try{n.texSubImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function lt(){try{n.texSubImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function st(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ct(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function xt(){try{n.texStorage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function at(){try{n.texStorage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function dt(){try{n.texImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ht(){try{n.texImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Dt(v){wt.equals(v)===!1&&(n.scissor(v.x,v.y,v.z,v.w),wt.copy(v))}function yt(v){zt.equals(v)===!1&&(n.viewport(v.x,v.y,v.z,v.w),zt.copy(v))}function Ut(v,K){let $=l.get(K);$===void 0&&($=new WeakMap,l.set(K,$));let et=$.get(v);et===void 0&&(et=n.getUniformBlockIndex(K,v.name),$.set(v,et))}function At(v,K){const et=l.get(K).get(v);a.get(K)!==et&&(n.uniformBlockBinding(K,et,v.__bindingPointIndex),a.set(K,et))}function Yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},X=null,ht={},u={},f=new WeakMap,h=[],d=null,_=!1,x=null,m=null,p=null,C=null,M=null,b=null,G=null,P=new Jt(0,0,0),D=0,B=!1,R=null,y=null,I=null,nt=null,j=null,wt.set(0,0,n.canvas.width,n.canvas.height),zt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:St,disable:_t,bindFramebuffer:Lt,drawBuffers:Ot,useProgram:Ct,setBlending:T,setMaterial:A,setFlipSided:N,setCullFace:U,setLineWidth:Y,setPolygonOffset:H,setScissorTest:Q,activeTexture:S,bindTexture:g,unbindTexture:L,compressedTexImage2D:z,compressedTexImage3D:W,texImage2D:dt,texImage3D:Ht,updateUBOMapping:Ut,uniformBlockBinding:At,texStorage2D:xt,texStorage3D:at,texSubImage2D:k,texSubImage3D:lt,compressedTexSubImage2D:st,compressedTexSubImage3D:ct,scissor:Dt,viewport:yt,reset:Yt}}function _u(n,t,e,i){const r=uM(i);switch(e){case Ff:return n*t;case zf:return n*t;case Hf:return n*t*2;case Vf:return n*t/r.components*r.byteLength;case wl:return n*t/r.components*r.byteLength;case Gf:return n*t*2/r.components*r.byteLength;case Rl:return n*t*2/r.components*r.byteLength;case Bf:return n*t*3/r.components*r.byteLength;case Qe:return n*t*4/r.components*r.byteLength;case Cl:return n*t*4/r.components*r.byteLength;case Ns:case Os:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Fs:case Bs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ta:case Aa:return Math.max(n,16)*Math.max(t,8)/4;case Ea:case ba:return Math.max(n,8)*Math.max(t,8)/2;case wa:case Ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Da:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Na:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case za:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Va:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ka:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case zs:case Wa:case Xa:return Math.ceil(n/4)*Math.ceil(t/4)*16;case kf:case Ya:return Math.ceil(n/4)*Math.ceil(t/4)*8;case qa:case Ka:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uM(n){switch(n){case Rn:case Uf:return{byteLength:1,components:1};case Fr:case Nf:case kr:return{byteLength:2,components:1};case bl:case Al:return{byteLength:2,components:4};case Mi:case Tl:case bn:return{byteLength:4,components:1};case Of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function fM(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,g){return d?new OffscreenCanvas(S,g):js("canvas")}function x(S,g,L){let z=1;const W=Q(S);if((W.width>L||W.height>L)&&(z=L/Math.max(W.width,W.height)),z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const k=Math.floor(z*W.width),lt=Math.floor(z*W.height);f===void 0&&(f=_(k,lt));const st=g?_(k,lt):f;return st.width=k,st.height=lt,st.getContext("2d").drawImage(S,0,0,k,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+k+"x"+lt+")."),st}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),S;return S}function m(S){return S.generateMipmaps&&S.minFilter!==Xe&&S.minFilter!==Ze}function p(S){n.generateMipmap(S)}function C(S,g,L,z,W=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let k=g;if(g===n.RED&&(L===n.FLOAT&&(k=n.R32F),L===n.HALF_FLOAT&&(k=n.R16F),L===n.UNSIGNED_BYTE&&(k=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(k=n.R8UI),L===n.UNSIGNED_SHORT&&(k=n.R16UI),L===n.UNSIGNED_INT&&(k=n.R32UI),L===n.BYTE&&(k=n.R8I),L===n.SHORT&&(k=n.R16I),L===n.INT&&(k=n.R32I)),g===n.RG&&(L===n.FLOAT&&(k=n.RG32F),L===n.HALF_FLOAT&&(k=n.RG16F),L===n.UNSIGNED_BYTE&&(k=n.RG8)),g===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(k=n.RG8UI),L===n.UNSIGNED_SHORT&&(k=n.RG16UI),L===n.UNSIGNED_INT&&(k=n.RG32UI),L===n.BYTE&&(k=n.RG8I),L===n.SHORT&&(k=n.RG16I),L===n.INT&&(k=n.RG32I)),g===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),g===n.RGBA){const lt=W?Xs:te.getTransfer(z);L===n.FLOAT&&(k=n.RGBA32F),L===n.HALF_FLOAT&&(k=n.RGBA16F),L===n.UNSIGNED_BYTE&&(k=lt===ee?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function M(S,g){let L;return S?g===null||g===Mi||g===or?L=n.DEPTH24_STENCIL8:g===bn?L=n.DEPTH32F_STENCIL8:g===Fr&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Mi||g===or?L=n.DEPTH_COMPONENT24:g===bn?L=n.DEPTH_COMPONENT32F:g===Fr&&(L=n.DEPTH_COMPONENT16),L}function b(S, g) {  
    // 如果S是特殊纹理或帧缓冲纹理且minFilter不是Xe或Ze  
    if (m(S) === true || (S.isFramebufferTexture && (S.minFilter !== Xe && S.minFilter !== Ze))) {  
        // 根据纹理尺寸计算mipmap级别  
        return Math.log2(Math.max(g.width, g.height)) + 1;  
    }  
    // 如果S有明确的mipmap数组  
    else if (S.mipmaps !== undefined && S.mipmaps.length > 0) {  
        // 返回mipmap数组的长度  
        return S.mipmaps.length;  
    }  
    // 如果S是压缩纹理且图像数据是数组  
    else if (S.isCompressedTexture && Array.isArray(S.image)) {  
        // 这里应该检查S.mipmaps而不是g.mipmaps  
        // 如果S.mipmaps存在且长度大于0，则返回其长度  
        // 否则，默认返回1（可能表示没有额外的mipmap级别）  
        return S.mipmaps ? S.mipmaps.length : 1;  
    }  
    // 如果以上条件都不满足  
    else {  
        // 默认返回1，表示没有mipmap级别（只有基本级别）  
        return 1;  
    }  
}
	function G(S){const g=S.target;g.removeEventListener("dispose",G),D(g),g.isVideoTexture&&u.delete(g)}function P(S){const g=S.target;g.removeEventListener("dispose",P),R(g)}function D(S){const g=i.get(S);if(g.__webglInit===void 0)return;const L=S.source,z=h.get(L);if(z){const W=z[g.__cacheKey];W.usedTimes--,W.usedTimes===0&&B(S),Object.keys(z).length===0&&h.delete(L)}i.remove(S)}function B(S){const g=i.get(S);n.deleteTexture(g.__webglTexture);const L=S.source,z=h.get(L);delete z[g.__cacheKey],o.memory.textures--}function R(S){const g=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let W=0;W<g.__webglFramebuffer[z].length;W++)n.deleteFramebuffer(g.__webglFramebuffer[z][W]);else n.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)n.deleteFramebuffer(g.__webglFramebuffer[z]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=S.textures;for(let z=0,W=L.length;z<W;z++){const k=i.get(L[z]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(L[z])}i.remove(S)}let y=0;function I(){y=0}function nt(){const S=y;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),y+=1,S}function j(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function tt(S,g){const L=i.get(S);if(S.isVideoTexture&&Y(S),S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){const z=S.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(L,S,g);return}}e.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function ot(S,g){const L=i.get(S);if(S.version>0&&L.__version!==S.version){zt(L,S,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function q(S,g){const L=i.get(S);if(S.version>0&&L.__version!==S.version){zt(L,S,g);return}e.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function it(S,g){const L=i.get(S);if(S.version>0&&L.__version!==S.version){rt(L,S,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const X={[Sa]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[ya]:n.MIRRORED_REPEAT},ht={[Xe]:n.NEAREST,[Fm]:n.NEAREST_MIPMAP_NEAREST,[es]:n.NEAREST_MIPMAP_LINEAR,[Ze]:n.LINEAR,[Co]:n.LINEAR_MIPMAP_NEAREST,[gi]:n.LINEAR_MIPMAP_LINEAR},vt={[Gm]:n.NEVER,[Km]:n.ALWAYS,[km]:n.LESS,[Wf]:n.LEQUAL,[Wm]:n.EQUAL,[qm]:n.GEQUAL,[Xm]:n.GREATER,[Ym]:n.NOTEQUAL};function gt(S,g){if(g.type===bn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ze||g.magFilter===Co||g.magFilter===es||g.magFilter===gi||g.minFilter===Ze||g.minFilter===Co||g.minFilter===es||g.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,X[g.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,X[g.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,X[g.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ht[g.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ht[g.minFilter]),g.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,vt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Xe||g.minFilter!==es&&g.minFilter!==gi||g.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function wt(S,g){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",G));const z=g.source;let W=h.get(z);W===void 0&&(W={},h.set(z,W));const k=j(g);if(k!==S.__cacheKey){W[k]===void 0&&(W[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),W[k].usedTimes++;const lt=W[S.__cacheKey];lt!==void 0&&(W[S.__cacheKey].usedTimes--,lt.usedTimes===0&&B(g)),S.__cacheKey=k,S.__webglTexture=W[k].texture}return L}function zt(S,g,L){let z=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=n.TEXTURE_3D);const W=wt(S,g),k=g.source;e.bindTexture(z,S.__webglTexture,n.TEXTURE0+L);const lt=i.get(k);if(k.version!==lt.__version||W===!0){e.activeTexture(n.TEXTURE0+L);const st=te.getPrimaries(te.workingColorSpace),ct=g.colorSpace===kn?null:te.getPrimaries(g.colorSpace),xt=g.colorSpace===kn||st===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let at=x(g.image,!1,r.maxTextureSize);at=H(g,at);const dt=s.convert(g.format,g.colorSpace),Ht=s.convert(g.type);let Dt=C(g.internalFormat,dt,Ht,g.colorSpace,g.isVideoTexture);gt(z,g);let yt;const Ut=g.mipmaps,At=g.isVideoTexture!==!0,Yt=lt.__version===void 0||W===!0,v=k.dataReady,K=b(g,at);if(g.isDepthTexture)Dt=M(g.format===ar,g.type),Yt&&(At?e.texStorage2D(n.TEXTURE_2D,1,Dt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Dt,at.width,at.height,0,dt,Ht,null));else if(g.isDataTexture)if(Ut.length>0){At&&Yt&&e.texStorage2D(n.TEXTURE_2D,K,Dt,Ut[0].width,Ut[0].height);for(let $=0,et=Ut.length;$<et;$++)yt=Ut[$],At?v&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,yt.width,yt.height,dt,Ht,yt.data):e.texImage2D(n.TEXTURE_2D,$,Dt,yt.width,yt.height,0,dt,Ht,yt.data);g.generateMipmaps=!1}else At?(Yt&&e.texStorage2D(n.TEXTURE_2D,K,Dt,at.width,at.height),v&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at.width,at.height,dt,Ht,at.data)):e.texImage2D(n.TEXTURE_2D,0,Dt,at.width,at.height,0,dt,Ht,at.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){At&&Yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,K,Dt,Ut[0].width,Ut[0].height,at.depth);for(let $=0,et=Ut.length;$<et;$++)if(yt=Ut[$],g.format!==Qe)if(dt!==null)if(At){if(v)if(g.layerUpdates.size>0){const ut=_u(yt.width,yt.height,g.format,g.type);for(const Rt of g.layerUpdates){const Ft=yt.data.subarray(Rt*ut/yt.data.BYTES_PER_ELEMENT,(Rt+1)*ut/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,Rt,yt.width,yt.height,1,dt,Ft,0,0)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,yt.width,yt.height,at.depth,dt,yt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Dt,yt.width,yt.height,at.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else At?v&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,yt.width,yt.height,at.depth,dt,Ht,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,Dt,yt.width,yt.height,at.depth,0,dt,Ht,yt.data)}else{At&&Yt&&e.texStorage2D(n.TEXTURE_2D,K,Dt,Ut[0].width,Ut[0].height);for(let $=0,et=Ut.length;$<et;$++)yt=Ut[$],g.format!==Qe?dt!==null?At?v&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,yt.width,yt.height,dt,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,$,Dt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?v&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,yt.width,yt.height,dt,Ht,yt.data):e.texImage2D(n.TEXTURE_2D,$,Dt,yt.width,yt.height,0,dt,Ht,yt.data)}else if(g.isDataArrayTexture)if(At){if(Yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,K,Dt,at.width,at.height,at.depth),v)if(g.layerUpdates.size>0){const $=_u(at.width,at.height,g.format,g.type);for(const et of g.layerUpdates){const ut=at.data.subarray(et*$/at.data.BYTES_PER_ELEMENT,(et+1)*$/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,at.width,at.height,1,dt,Ht,ut)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,dt,Ht,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,at.width,at.height,at.depth,0,dt,Ht,at.data);else if(g.isData3DTexture)At?(Yt&&e.texStorage3D(n.TEXTURE_3D,K,Dt,at.width,at.height,at.depth),v&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,dt,Ht,at.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,at.width,at.height,at.depth,0,dt,Ht,at.data);else if(g.isFramebufferTexture){if(Yt)if(At)e.texStorage2D(n.TEXTURE_2D,K,Dt,at.width,at.height);else{let $=at.width,et=at.height;for(let ut=0;ut<K;ut++)e.texImage2D(n.TEXTURE_2D,ut,Dt,$,et,0,dt,Ht,null),$>>=1,et>>=1}}else if(Ut.length>0){if(At&&Yt){const $=Q(Ut[0]);e.texStorage2D(n.TEXTURE_2D,K,Dt,$.width,$.height)}for(let $=0,et=Ut.length;$<et;$++)yt=Ut[$],At?v&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,dt,Ht,yt):e.texImage2D(n.TEXTURE_2D,$,Dt,dt,Ht,yt);g.generateMipmaps=!1}else if(At){if(Yt){const $=Q(at);e.texStorage2D(n.TEXTURE_2D,K,Dt,$.width,$.height)}v&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,Ht,at)}else e.texImage2D(n.TEXTURE_2D,0,Dt,dt,Ht,at);m(g)&&p(z),lt.__version=k.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function rt(S,g,L){if(g.image.length!==6)return;const z=wt(S,g),W=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+L);const k=i.get(W);if(W.version!==k.__version||z===!0){e.activeTexture(n.TEXTURE0+L);const lt=te.getPrimaries(te.workingColorSpace),st=g.colorSpace===kn?null:te.getPrimaries(g.colorSpace),ct=g.colorSpace===kn||lt===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const xt=g.isCompressedTexture||g.image[0].isCompressedTexture,at=g.image[0]&&g.image[0].isDataTexture,dt=[];for(let et=0;et<6;et++)!xt&&!at?dt[et]=x(g.image[et],!0,r.maxCubemapSize):dt[et]=at?g.image[et].image:g.image[et],dt[et]=H(g,dt[et]);const Ht=dt[0],Dt=s.convert(g.format,g.colorSpace),yt=s.convert(g.type),Ut=C(g.internalFormat,Dt,yt,g.colorSpace),At=g.isVideoTexture!==!0,Yt=k.__version===void 0||z===!0,v=W.dataReady;let K=b(g,Ht);gt(n.TEXTURE_CUBE_MAP,g);let $;if(xt){At&&Yt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,K,Ut,Ht.width,Ht.height);for(let et=0;et<6;et++){$=dt[et].mipmaps;for(let ut=0;ut<$.length;ut++){const Rt=$[ut];g.format!==Qe?Dt!==null?At?v&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,ut,0,0,Rt.width,Rt.height,Dt,Rt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,ut,Ut,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?v&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,ut,0,0,Rt.width,Rt.height,Dt,yt,Rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,ut,Ut,Rt.width,Rt.height,0,Dt,yt,Rt.data)}}}else{if($=g.mipmaps,At&&Yt){$.length>0&&K++;const et=Q(dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,K,Ut,et.width,et.height)}for(let et=0;et<6;et++)if(at){At?v&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,dt[et].width,dt[et].height,Dt,yt,dt[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ut,dt[et].width,dt[et].height,0,Dt,yt,dt[et].data);for(let ut=0;ut<$.length;ut++){const Ft=$[ut].image[et].image;At?v&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,ut+1,0,0,Ft.width,Ft.height,Dt,yt,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,ut+1,Ut,Ft.width,Ft.height,0,Dt,yt,Ft.data)}}else{At?v&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Dt,yt,dt[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ut,Dt,yt,dt[et]);for(let ut=0;ut<$.length;ut++){const Rt=$[ut];At?v&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,ut+1,0,0,Dt,yt,Rt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,ut+1,Ut,Dt,yt,Rt.image[et])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),k.__version=W.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function ft(S,g,L,z,W,k){const lt=s.convert(L.format,L.colorSpace),st=s.convert(L.type),ct=C(L.internalFormat,lt,st,L.colorSpace);if(!i.get(g).__hasExternalTextures){const at=Math.max(1,g.width>>k),dt=Math.max(1,g.height>>k);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?e.texImage3D(W,k,ct,at,dt,g.depth,0,lt,st,null):e.texImage2D(W,k,ct,at,dt,0,lt,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),U(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,W,i.get(L).__webglTexture,0,N(g)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,W,i.get(L).__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function St(S,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,S),g.depthBuffer){const z=g.depthTexture,W=z&&z.isDepthTexture?z.type:null,k=M(g.stencilBuffer,W),lt=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=N(g);U(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,k,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,k,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,k,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,S)}else{const z=g.textures;for(let W=0;W<z.length;W++){const k=z[W],lt=s.convert(k.format,k.colorSpace),st=s.convert(k.type),ct=C(k.internalFormat,lt,st,k.colorSpace),xt=N(g);L&&U(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,ct,g.width,g.height):U(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,ct,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ct,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _t(S,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),tt(g.depthTexture,0);const z=i.get(g.depthTexture).__webglTexture,W=N(g);if(g.depthTexture.format===tr)U(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0);else if(g.depthTexture.format===ar)U(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Lt(S){const g=i.get(S),L=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");_t(g.__webglFramebuffer,S)}else if(L){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]=n.createRenderbuffer(),St(g.__webglDepthbuffer[z],S,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),St(g.__webglDepthbuffer,S,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(S,g,L){const z=i.get(S);g!==void 0&&ft(z.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Lt(S)}function Ct(S){const g=S.texture,L=i.get(S),z=i.get(g);S.addEventListener("dispose",P);const W=S.textures,k=S.isWebGLCubeRenderTarget===!0,lt=W.length>1;if(lt||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=g.version,o.memory.textures++),k){L.__webglFramebuffer=[];for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[st]=[];for(let ct=0;ct<g.mipmaps.length;ct++)L.__webglFramebuffer[st][ct]=n.createFramebuffer()}else L.__webglFramebuffer[st]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let st=0;st<g.mipmaps.length;st++)L.__webglFramebuffer[st]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(lt)for(let st=0,ct=W.length;st<ct;st++){const xt=i.get(W[st]);xt.__webglTexture===void 0&&(xt.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&U(S)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let st=0;st<W.length;st++){const ct=W[st];L.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[st]);const xt=s.convert(ct.format,ct.colorSpace),at=s.convert(ct.type),dt=C(ct.internalFormat,xt,at,ct.colorSpace,S.isXRRenderTarget===!0),Ht=N(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,dt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,L.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),St(L.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),gt(n.TEXTURE_CUBE_MAP,g);for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0)for(let ct=0;ct<g.mipmaps.length;ct++)ft(L.__webglFramebuffer[st][ct],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ct);else ft(L.__webglFramebuffer[st],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(g)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let st=0,ct=W.length;st<ct;st++){const xt=W[st],at=i.get(xt);e.bindTexture(n.TEXTURE_2D,at.__webglTexture),gt(n.TEXTURE_2D,xt),ft(L.__webglFramebuffer,S,xt,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,0),m(xt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(st=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,z.__webglTexture),gt(st,g),g.mipmaps&&g.mipmaps.length>0)for(let ct=0;ct<g.mipmaps.length;ct++)ft(L.__webglFramebuffer[ct],S,g,n.COLOR_ATTACHMENT0,st,ct);else ft(L.__webglFramebuffer,S,g,n.COLOR_ATTACHMENT0,st,0);m(g)&&p(st),e.unbindTexture()}S.depthBuffer&&Lt(S)}function Xt(S){const g=S.textures;for(let L=0,z=g.length;L<z;L++){const W=g[L];if(m(W)){const k=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,lt=i.get(W).__webglTexture;e.bindTexture(k,lt),p(k),e.unbindTexture()}}}const w=[],T=[];function A(S){if(S.samples>0){if(U(S)===!1){const g=S.textures,L=S.width,z=S.height;let W=n.COLOR_BUFFER_BIT;const k=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(S),st=g.length>1;if(st)for(let ct=0;ct<g.length;ct++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ct=0;ct<g.length;ct++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),st){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);const xt=i.get(g[ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xt,0)}n.blitFramebuffer(0,0,L,z,0,0,L,z,W,n.NEAREST),l===!0&&(w.length=0,T.length=0,w.push(n.COLOR_ATTACHMENT0+ct),S.depthBuffer&&S.resolveDepthBuffer===!1&&(w.push(k),T.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let ct=0;ct<g.length;ct++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);const xt=i.get(g[ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,xt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const g=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function N(S){return Math.min(r.maxSamples,S.samples)}function U(S){const g=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Y(S){const g=o.render.frame;u.get(S)!==g&&(u.set(S,g),S.update())}function H(S,g){const L=S.colorSpace,z=S.format,W=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==ti&&L!==kn&&(te.getTransfer(L)===ee?(z!==Qe||W!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function Q(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=nt,this.resetTextureUnits=I,this.setTexture2D=tt,this.setTexture2DArray=ot,this.setTexture3D=q,this.setTextureCube=it,this.rebindTextures=Ot,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=A,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=U}function hM(n,t){function e(i,r=kn){let s;const o=te.getTransfer(r);if(i===Rn)return n.UNSIGNED_BYTE;if(i===bl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Al)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Of)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Uf)return n.BYTE;if(i===Nf)return n.SHORT;if(i===Fr)return n.UNSIGNED_SHORT;if(i===Tl)return n.INT;if(i===Mi)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===kr)return n.HALF_FLOAT;if(i===Ff)return n.ALPHA;if(i===Bf)return n.RGB;if(i===Qe)return n.RGBA;if(i===zf)return n.LUMINANCE;if(i===Hf)return n.LUMINANCE_ALPHA;if(i===tr)return n.DEPTH_COMPONENT;if(i===ar)return n.DEPTH_STENCIL;if(i===Vf)return n.RED;if(i===wl)return n.RED_INTEGER;if(i===Gf)return n.RG;if(i===Rl)return n.RG_INTEGER;if(i===Cl)return n.RGBA_INTEGER;if(i===Ns||i===Os||i===Fs||i===Bs)if(o===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ns)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ns)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ea||i===Ta||i===ba||i===Aa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ea)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ta)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ba)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Aa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wa||i===Ra||i===Ca)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wa||i===Ra)return o===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ca)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pa||i===La||i===Da||i===Ia||i===Ua||i===Na||i===Oa||i===Fa||i===Ba||i===za||i===Ha||i===Va||i===Ga||i===ka)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Pa)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===La)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Da)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ia)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ua)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Na)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oa)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fa)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ba)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===za)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ha)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Va)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ga)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ka)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zs||i===Wa||i===Xa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===zs)return o===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kf||i===Ya||i===qa||i===Ka)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===zs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ya)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ka)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class dM extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Es extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pM={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Es;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const mM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _M{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ie,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Zn({vertexShader:mM,fragmentShader:gM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new tn(new po(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vM extends bi{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const x=new _M,m=e.getContextAttributes();let p=null,C=null;const M=[],b=[],G=new mt;let P=null;const D=new ke;D.layers.enable(1),D.viewport=new ve;const B=new ke;B.layers.enable(2),B.viewport=new ve;const R=[D,B],y=new dM;y.layers.enable(1),y.layers.enable(2);let I=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let ft=M[rt];return ft===void 0&&(ft=new ta,M[rt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(rt){let ft=M[rt];return ft===void 0&&(ft=new ta,M[rt]=ft),ft.getGripSpace()},this.getHand=function(rt){let ft=M[rt];return ft===void 0&&(ft=new ta,M[rt]=ft),ft.getHandSpace()};function j(rt){const ft=b.indexOf(rt.inputSource);if(ft===-1)return;const St=M[ft];St!==void 0&&(St.update(rt.inputSource,rt.frame,c||o),St.dispatchEvent({type:rt.type,data:rt.inputSource}))}function tt(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",tt),r.removeEventListener("inputsourceschange",ot);for(let rt=0;rt<M.length;rt++){const ft=b[rt];ft!==null&&(b[rt]=null,M[rt].disconnect(ft))}I=null,nt=null,x.reset(),t.setRenderTarget(p),d=null,h=null,f=null,r=null,C=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){s=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(rt){c=rt},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(rt){if(r=rt,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",tt),r.addEventListener("inputsourceschange",ot),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(G),r.renderState.layers===void 0){const ft={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,ft),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),C=new Si(d.framebufferWidth,d.framebufferHeight,{format:Qe,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ft=null,St=null,_t=null;m.depth&&(_t=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=m.stencil?ar:tr,St=m.stencil?or:Mi);const Lt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(Lt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),C=new Si(h.textureWidth,h.textureHeight,{format:Qe,type:Rn,depthTexture:new ih(h.textureWidth,h.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),zt.setContext(r),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ot(rt){for(let ft=0;ft<rt.removed.length;ft++){const St=rt.removed[ft],_t=b.indexOf(St);_t>=0&&(b[_t]=null,M[_t].disconnect(St))}for(let ft=0;ft<rt.added.length;ft++){const St=rt.added[ft];let _t=b.indexOf(St);if(_t===-1){for(let Ot=0;Ot<M.length;Ot++)if(Ot>=b.length){b.push(St),_t=Ot;break}else if(b[Ot]===null){b[Ot]=St,_t=Ot;break}if(_t===-1)break}const Lt=M[_t];Lt&&Lt.connect(St)}}const q=new O,it=new O;function X(rt,ft,St){q.setFromMatrixPosition(ft.matrixWorld),it.setFromMatrixPosition(St.matrixWorld);const _t=q.distanceTo(it),Lt=ft.projectionMatrix.elements,Ot=St.projectionMatrix.elements,Ct=Lt[14]/(Lt[10]-1),Xt=Lt[14]/(Lt[10]+1),w=(Lt[9]+1)/Lt[5],T=(Lt[9]-1)/Lt[5],A=(Lt[8]-1)/Lt[0],N=(Ot[8]+1)/Ot[0],U=Ct*A,Y=Ct*N,H=_t/(-A+N),Q=H*-A;ft.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(Q),rt.translateZ(H),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert();const S=Ct+H,g=Xt+H,L=U-Q,z=Y+(_t-Q),W=w*Xt/g*S,k=T*Xt/g*S;rt.projectionMatrix.makePerspective(L,z,W,k,S,g),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}function ht(rt,ft){ft===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(ft.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(r===null)return;x.texture!==null&&(rt.near=x.depthNear,rt.far=x.depthFar),y.near=B.near=D.near=rt.near,y.far=B.far=D.far=rt.far,(I!==y.near||nt!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,nt=y.far,D.near=I,D.far=nt,B.near=I,B.far=nt,D.updateProjectionMatrix(),B.updateProjectionMatrix(),rt.updateProjectionMatrix());const ft=rt.parent,St=y.cameras;ht(y,ft);for(let _t=0;_t<St.length;_t++)ht(St[_t],ft);St.length===2?X(y,D,B):y.projectionMatrix.copy(D.projectionMatrix),vt(rt,y,ft)};function vt(rt,ft,St){St===null?rt.matrix.copy(ft.matrixWorld):(rt.matrix.copy(St.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(ft.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(ft.projectionMatrix),rt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Br*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(rt){l=rt,h!==null&&(h.fixedFoveation=rt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=rt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let gt=null;function wt(rt,ft){if(u=ft.getViewerPose(c||o),_=ft,u!==null){const St=u.views;d!==null&&(t.setRenderTargetFramebuffer(C,d.framebuffer),t.setRenderTarget(C));let _t=!1;St.length!==y.cameras.length&&(y.cameras.length=0,_t=!0);for(let Ot=0;Ot<St.length;Ot++){const Ct=St[Ot];let Xt=null;if(d!==null)Xt=d.getViewport(Ct);else{const T=f.getViewSubImage(h,Ct);Xt=T.viewport,Ot===0&&(t.setRenderTargetTextures(C,T.colorTexture,h.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(C))}let w=R[Ot];w===void 0&&(w=new ke,w.layers.enable(Ot),w.viewport=new ve,R[Ot]=w),w.matrix.fromArray(Ct.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Ct.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Ot===0&&(y.matrix.copy(w.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_t===!0&&y.cameras.push(w)}const Lt=r.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Ot=f.getDepthInformation(St[0]);Ot&&Ot.isValid&&Ot.texture&&x.init(t,Ot,r.renderState)}}for(let St=0;St<M.length;St++){const _t=b[St],Lt=M[St];_t!==null&&Lt!==void 0&&Lt.update(_t,ft,c||o)}gt&&gt(rt,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),_=null}const zt=new nh;zt.setAnimationLoop(wt),this.setAnimationLoop=function(rt){gt=rt},this.dispose=function(){}}}const ci=new Cn,xM=new oe;function MM(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Jf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,C,M,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,C,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===De&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===De&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const C=t.get(p),M=C.envMap,b=C.envMapRotation;M&&(m.envMap.value=M,ci.copy(b),ci.x*=-1,ci.y*=-1,ci.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(xM.makeRotationFromEuler(ci)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,C,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*C,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,C){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===De&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const C=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function SM(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,M){const b=M.program;i.uniformBlockBinding(C,b)}function c(C,M){let b=r[C.id];b===void 0&&(_(C),b=u(C),r[C.id]=b,C.addEventListener("dispose",m));const G=M.program;i.updateUBOMapping(C,G);const P=t.render.frame;s[C.id]!==P&&(h(C),s[C.id]=P)}function u(C){const M=f();C.__bindingPointIndex=M;const b=n.createBuffer(),G=C.__size,P=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,G,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,b),b}function f(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(C){const M=r[C.id],b=C.uniforms,G=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let P=0,D=b.length;P<D;P++){const B=Array.isArray(b[P])?b[P]:[b[P]];for(let R=0,y=B.length;R<y;R++){const I=B[R];if(d(I,P,R,G)===!0){const nt=I.__offset,j=Array.isArray(I.value)?I.value:[I.value];let tt=0;for(let ot=0;ot<j.length;ot++){const q=j[ot],it=x(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,nt+tt,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,tt),tt+=it.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,nt,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(C,M,b,G){const P=C.value,D=M+"_"+b;if(G[D]===void 0)return typeof P=="number"||typeof P=="boolean"?G[D]=P:G[D]=P.clone(),!0;{const B=G[D];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return G[D]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function _(C){const M=C.uniforms;let b=0;const G=16;for(let D=0,B=M.length;D<B;D++){const R=Array.isArray(M[D])?M[D]:[M[D]];for(let y=0,I=R.length;y<I;y++){const nt=R[y],j=Array.isArray(nt.value)?nt.value:[nt.value];for(let tt=0,ot=j.length;tt<ot;tt++){const q=j[tt],it=x(q),X=b%G;X!==0&&G-X<it.boundary&&(b+=G-X),nt.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=b,b+=it.storage}}}const P=b%G;return P>0&&(b+=G-P),C.__size=b,C.__cache={},this}function x(C){const M={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(M.boundary=4,M.storage=4):C.isVector2?(M.boundary=8,M.storage=8):C.isVector3||C.isColor?(M.boundary=16,M.storage=12):C.isVector4?(M.boundary=16,M.storage=16):C.isMatrix3?(M.boundary=48,M.storage=48):C.isMatrix4?(M.boundary=64,M.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),M}function m(C){const M=C.target;M.removeEventListener("dispose",m);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const C in r)n.deleteBuffer(r[C]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class yM{constructor(t={}){const{canvas:e=hg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const p=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=Kn,this.toneMappingExposure=1;const M=this;let b=!1,G=0,P=0,D=null,B=-1,R=null;const y=new ve,I=new ve;let nt=null;const j=new Jt(0);let tt=0,ot=e.width,q=e.height,it=1,X=null,ht=null;const vt=new ve(0,0,ot,q),gt=new ve(0,0,ot,q);let wt=!1;const zt=new eh;let rt=!1,ft=!1;const St=new oe,_t=new O,Lt=new ve,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Xt(){return D===null?it:1}let w=i;function T(E,F){return e.getContext(E,F)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${El}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",et,!1),e.addEventListener("webglcontextcreationerror",ut,!1),w===null){const F="webgl2";if(w=T(F,E),w===null)throw T(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let A,N,U,Y,H,Q,S,g,L,z,W,k,lt,st,ct,xt,at,dt,Ht,Dt,yt,Ut,At,Yt;function v(){A=new C0(w),A.init(),Ut=new hM(w,A),N=new y0(w,A,t,Ut),U=new cM(w),Y=new D0(w),H=new jx,Q=new fM(w,A,U,H,N,Ut,Y),S=new T0(M),g=new R0(M),L=new Bg(w),At=new M0(w,L),z=new P0(w,L,Y,At),W=new U0(w,z,L,Y),Ht=new I0(w,N,Q),xt=new E0(H),k=new Kx(M,S,g,A,N,At,xt),lt=new MM(M,H),st=new Zx,ct=new iM(A),dt=new x0(M,S,g,U,W,h,l),at=new lM(M,W,N),Yt=new SM(w,Y,N,U),Dt=new S0(w,A,Y),yt=new L0(w,A,Y),Y.programs=k.programs,M.capabilities=N,M.extensions=A,M.properties=H,M.renderLists=st,M.shadowMap=at,M.state=U,M.info=Y}v();const K=new vM(M,w);this.xr=K,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const E=A.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=A.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(E){E!==void 0&&(it=E,this.setSize(ot,q,!1))},this.getSize=function(E){return E.set(ot,q)},this.setSize=function(E,F,Z=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=E,q=F,e.width=Math.floor(E*it),e.height=Math.floor(F*it),Z===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(ot*it,q*it).floor()},this.setDrawingBufferSize=function(E,F,Z){ot=E,q=F,it=Z,e.width=Math.floor(E*Z),e.height=Math.floor(F*Z),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(vt)},this.setViewport=function(E,F,Z,J){E.isVector4?vt.set(E.x,E.y,E.z,E.w):vt.set(E,F,Z,J),U.viewport(y.copy(vt).multiplyScalar(it).round())},this.getScissor=function(E){return E.copy(gt)},this.setScissor=function(E,F,Z,J){E.isVector4?gt.set(E.x,E.y,E.z,E.w):gt.set(E,F,Z,J),U.scissor(I.copy(gt).multiplyScalar(it).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(E){U.setScissorTest(wt=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){ht=E},this.getClearColor=function(E){return E.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(E=!0,F=!0,Z=!0){let J=0;if(E){let V=!1;if(D!==null){const pt=D.texture.format;V=pt===Cl||pt===Rl||pt===wl}if(V){const pt=D.texture.type,Et=pt===Rn||pt===Mi||pt===Fr||pt===or||pt===bl||pt===Al,Tt=dt.getClearColor(),bt=dt.getClearAlpha(),Nt=Tt.r,Bt=Tt.g,It=Tt.b;Et?(d[0]=Nt,d[1]=Bt,d[2]=It,d[3]=bt,w.clearBufferuiv(w.COLOR,0,d)):(_[0]=Nt,_[1]=Bt,_[2]=It,_[3]=bt,w.clearBufferiv(w.COLOR,0,_))}else J|=w.COLOR_BUFFER_BIT}F&&(J|=w.DEPTH_BUFFER_BIT),Z&&(J|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",et,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),st.dispose(),ct.dispose(),H.dispose(),S.dispose(),g.dispose(),W.dispose(),At.dispose(),Yt.dispose(),k.dispose(),K.dispose(),K.removeEventListener("sessionstart",le),K.removeEventListener("sessionend",Ln),xe.stop()};function $(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function et(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=Y.autoReset,F=at.enabled,Z=at.autoUpdate,J=at.needsUpdate,V=at.type;v(),Y.autoReset=E,at.enabled=F,at.autoUpdate=Z,at.needsUpdate=J,at.type=V}function ut(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Rt(E){const F=E.target;F.removeEventListener("dispose",Rt),Ft(F)}function Ft(E){ae(E),H.remove(E)}function ae(E){const F=H.get(E).programs;F!==void 0&&(F.forEach(function(Z){k.releaseProgram(Z)}),E.isShaderMaterial&&k.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,Z,J,V,pt){F===null&&(F=Ot);const Et=V.isMesh&&V.matrixWorld.determinant()<0,Tt=gh(E,F,Z,J,V);U.setMaterial(J,Et);let bt=Z.index,Nt=1;if(J.wireframe===!0){if(bt=z.getWireframeAttribute(Z),bt===void 0)return;Nt=2}const Bt=Z.drawRange,It=Z.attributes.position;let jt=Bt.start*Nt,re=(Bt.start+Bt.count)*Nt;pt!==null&&(jt=Math.max(jt,pt.start*Nt),re=Math.min(re,(pt.start+pt.count)*Nt)),bt!==null?(jt=Math.max(jt,0),re=Math.min(re,bt.count)):It!=null&&(jt=Math.max(jt,0),re=Math.min(re,It.count));const se=re-jt;if(se<0||se===1/0)return;At.setup(V,J,Tt,Z,bt);let Oe,$t=Dt;if(bt!==null&&(Oe=L.get(bt),$t=yt,$t.setIndex(Oe)),V.isMesh)J.wireframe===!0?(U.setLineWidth(J.wireframeLinewidth*Xt()),$t.setMode(w.LINES)):$t.setMode(w.TRIANGLES);else if(V.isLine){let Pt=J.linewidth;Pt===void 0&&(Pt=1),U.setLineWidth(Pt*Xt()),V.isLineSegments?$t.setMode(w.LINES):V.isLineLoop?$t.setMode(w.LINE_LOOP):$t.setMode(w.LINE_STRIP)}else V.isPoints?$t.setMode(w.POINTS):V.isSprite&&$t.setMode(w.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)$t.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(A.get("WEBGL_multi_draw"))$t.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Pt=V._multiDrawStarts,Me=V._multiDrawCounts,Zt=V._multiDrawCount,Ye=bt?L.get(bt).bytesPerElement:1,wi=H.get(J).currentProgram.getUniforms();for(let Fe=0;Fe<Zt;Fe++)wi.setValue(w,"_gl_DrawID",Fe),$t.render(Pt[Fe]/Ye,Me[Fe])}else if(V.isInstancedMesh)$t.renderInstances(jt,se,V.count);else if(Z.isInstancedBufferGeometry){const Pt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Me=Math.min(Z.instanceCount,Pt);$t.renderInstances(jt,se,Me)}else $t.render(jt,se)};function he(E,F,Z){E.transparent===!0&&E.side===Tn&&E.forceSinglePass===!1?(E.side=De,E.needsUpdate=!0,Kr(E,F,Z),E.side=$n,E.needsUpdate=!0,Kr(E,F,Z),E.side=Tn):Kr(E,F,Z)}this.compile=function(E,F,Z=null){Z===null&&(Z=E),m=ct.get(Z),m.init(F),C.push(m),Z.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),E!==Z&&E.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const J=new Set;return E.traverse(function(V){const pt=V.material;if(pt)if(Array.isArray(pt))for(let Et=0;Et<pt.length;Et++){const Tt=pt[Et];he(Tt,Z,V),J.add(Tt)}else he(pt,Z,V),J.add(pt)}),C.pop(),m=null,J},this.compileAsync=function(E,F,Z=null){const J=this.compile(E,F,Z);return new Promise(V=>{function pt(){if(J.forEach(function(Et){H.get(Et).currentProgram.isReady()&&J.delete(Et)}),J.size===0){V(E);return}setTimeout(pt,10)}A.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let qt=null;function de(E){qt&&qt(E)}function le(){xe.stop()}function Ln(){xe.start()}const xe=new nh;xe.setAnimationLoop(de),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(E){qt=E,K.setAnimationLoop(E),E===null?xe.stop():xe.start()},K.addEventListener("sessionstart",le),K.addEventListener("sessionend",Ln),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,F,D),m=ct.get(E,C.length),m.init(F),C.push(m),St.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),zt.setFromProjectionMatrix(St),ft=this.localClippingEnabled,rt=xt.init(this.clippingPlanes,ft),x=st.get(E,p.length),x.init(),p.push(x),K.enabled===!0&&K.isPresenting===!0){const pt=M.xr.getDepthSensingMesh();pt!==null&&mn(pt,F,-1/0,M.sortObjects)}mn(E,F,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(X,ht),Ct=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ct&&dt.addToRenderList(x,E),this.info.render.frame++,rt===!0&&xt.beginShadows();const Z=m.state.shadowsArray;at.render(Z,E,F),rt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=x.opaque,V=x.transmissive;if(m.setupLights(),F.isArrayCamera){const pt=F.cameras;if(V.length>0)for(let Et=0,Tt=pt.length;Et<Tt;Et++){const bt=pt[Et];fr(J,V,E,bt)}Ct&&dt.render(E);for(let Et=0,Tt=pt.length;Et<Tt;Et++){const bt=pt[Et];ei(x,E,bt,bt.viewport)}}else V.length>0&&fr(J,V,E,F),Ct&&dt.render(E),ei(x,E,F);D!==null&&(Q.updateMultisampleRenderTarget(D),Q.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(M,E,F),At.resetDefaultState(),B=-1,R=null,C.pop(),C.length>0?(m=C[C.length-1],rt===!0&&xt.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function mn(E,F,Z,J){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||zt.intersectsSprite(E)){J&&Lt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(St);const Et=W.update(E),Tt=E.material;Tt.visible&&x.push(E,Et,Tt,Z,Lt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||zt.intersectsObject(E))){const Et=W.update(E),Tt=E.material;if(J&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Lt.copy(E.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Lt.copy(Et.boundingSphere.center)),Lt.applyMatrix4(E.matrixWorld).applyMatrix4(St)),Array.isArray(Tt)){const bt=Et.groups;for(let Nt=0,Bt=bt.length;Nt<Bt;Nt++){const It=bt[Nt],jt=Tt[It.materialIndex];jt&&jt.visible&&x.push(E,Et,jt,Z,Lt.z,It)}}else Tt.visible&&x.push(E,Et,Tt,Z,Lt.z,null)}}const pt=E.children;for(let Et=0,Tt=pt.length;Et<Tt;Et++)mn(pt[Et],F,Z,J)}function ei(E,F,Z,J){const V=E.opaque,pt=E.transmissive,Et=E.transparent;m.setupLightsView(Z),rt===!0&&xt.setGlobalState(M.clippingPlanes,Z),J&&U.viewport(y.copy(J)),V.length>0&&qr(V,F,Z),pt.length>0&&qr(pt,F,Z),Et.length>0&&qr(Et,F,Z),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function fr(E,F,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new Si(1,1,{generateMipmaps:!0,type:A.has("EXT_color_buffer_half_float")||A.has("EXT_color_buffer_float")?kr:Rn,minFilter:gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const pt=m.state.transmissionRenderTarget[J.id],Et=J.viewport||y;pt.setSize(Et.z,Et.w);const Tt=M.getRenderTarget();M.setRenderTarget(pt),M.getClearColor(j),tt=M.getClearAlpha(),tt<1&&M.setClearColor(16777215,.5),Ct?dt.render(Z):M.clear();const bt=M.toneMapping;M.toneMapping=Kn;const Nt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),rt===!0&&xt.setGlobalState(M.clippingPlanes,J),qr(E,Z,J),Q.updateMultisampleRenderTarget(pt),Q.updateRenderTargetMipmap(pt),A.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let It=0,jt=F.length;It<jt;It++){const re=F[It],se=re.object,Oe=re.geometry,$t=re.material,Pt=re.group;if($t.side===Tn&&se.layers.test(J.layers)){const Me=$t.side;$t.side=De,$t.needsUpdate=!0,Ol(se,Z,J,Oe,$t,Pt),$t.side=Me,$t.needsUpdate=!0,Bt=!0}}Bt===!0&&(Q.updateMultisampleRenderTarget(pt),Q.updateRenderTargetMipmap(pt))}M.setRenderTarget(Tt),M.setClearColor(j,tt),Nt!==void 0&&(J.viewport=Nt),M.toneMapping=bt}function qr(E,F,Z){const J=F.isScene===!0?F.overrideMaterial:null;for(let V=0,pt=E.length;V<pt;V++){const Et=E[V],Tt=Et.object,bt=Et.geometry,Nt=J===null?Et.material:J,Bt=Et.group;Tt.layers.test(Z.layers)&&Ol(Tt,F,Z,bt,Nt,Bt)}}function Ol(E,F,Z,J,V,pt){E.onBeforeRender(M,F,Z,J,V,pt),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.transparent===!0&&V.side===Tn&&V.forceSinglePass===!1?(V.side=De,V.needsUpdate=!0,M.renderBufferDirect(Z,F,J,V,E,pt),V.side=$n,V.needsUpdate=!0,M.renderBufferDirect(Z,F,J,V,E,pt),V.side=Tn):M.renderBufferDirect(Z,F,J,V,E,pt),E.onAfterRender(M,F,Z,J,V,pt)}function Kr(E,F,Z){F.isScene!==!0&&(F=Ot);const J=H.get(E),V=m.state.lights,pt=m.state.shadowsArray,Et=V.state.version,Tt=k.getParameters(E,V.state,pt,F,Z),bt=k.getProgramCacheKey(Tt);let Nt=J.programs;J.environment=E.isMeshStandardMaterial?F.environment:null,J.fog=F.fog,J.envMap=(E.isMeshStandardMaterial?g:S).get(E.envMap||J.environment),J.envMapRotation=J.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",Rt),Nt=new Map,J.programs=Nt);let Bt=Nt.get(bt);if(Bt!==void 0){if(J.currentProgram===Bt&&J.lightsStateVersion===Et)return Bl(E,Tt),Bt}else Tt.uniforms=k.getUniforms(E),E.onBeforeCompile(Tt,M),Bt=k.acquireProgram(Tt,bt),Nt.set(bt,Bt),J.uniforms=Tt.uniforms;const It=J.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=xt.uniform),Bl(E,Tt),J.needsLights=vh(E),J.lightsStateVersion=Et,J.needsLights&&(It.ambientLightColor.value=V.state.ambient,It.lightProbe.value=V.state.probe,It.directionalLights.value=V.state.directional,It.directionalLightShadows.value=V.state.directionalShadow,It.spotLights.value=V.state.spot,It.spotLightShadows.value=V.state.spotShadow,It.rectAreaLights.value=V.state.rectArea,It.ltc_1.value=V.state.rectAreaLTC1,It.ltc_2.value=V.state.rectAreaLTC2,It.pointLights.value=V.state.point,It.pointLightShadows.value=V.state.pointShadow,It.hemisphereLights.value=V.state.hemi,It.directionalShadowMap.value=V.state.directionalShadowMap,It.directionalShadowMatrix.value=V.state.directionalShadowMatrix,It.spotShadowMap.value=V.state.spotShadowMap,It.spotLightMatrix.value=V.state.spotLightMatrix,It.spotLightMap.value=V.state.spotLightMap,It.pointShadowMap.value=V.state.pointShadowMap,It.pointShadowMatrix.value=V.state.pointShadowMatrix),J.currentProgram=Bt,J.uniformsList=null,Bt}function Fl(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Hs.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Bl(E,F){const Z=H.get(E);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function gh(E,F,Z,J,V){F.isScene!==!0&&(F=Ot),Q.resetTextureUnits();const pt=F.fog,Et=J.isMeshStandardMaterial?F.environment:null,Tt=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ti,bt=(J.isMeshStandardMaterial?g:S).get(J.envMap||Et),Nt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Bt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),It=!!Z.morphAttributes.position,jt=!!Z.morphAttributes.normal,re=!!Z.morphAttributes.color;let se=Kn;J.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(se=M.toneMapping);const Oe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,$t=Oe!==void 0?Oe.length:0,Pt=H.get(J),Me=m.state.lights;if(rt===!0&&(ft===!0||E!==R)){const Ve=E===R&&J.id===B;xt.setState(J,E,Ve)}let Zt=!1;J.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Me.state.version||Pt.outputColorSpace!==Tt||V.isBatchedMesh&&Pt.batching===!1||!V.isBatchedMesh&&Pt.batching===!0||V.isBatchedMesh&&Pt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Pt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Pt.instancing===!1||!V.isInstancedMesh&&Pt.instancing===!0||V.isSkinnedMesh&&Pt.skinning===!1||!V.isSkinnedMesh&&Pt.skinning===!0||V.isInstancedMesh&&Pt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Pt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Pt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Pt.instancingMorph===!1&&V.morphTexture!==null||Pt.envMap!==bt||J.fog===!0&&Pt.fog!==pt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==xt.numPlanes||Pt.numIntersection!==xt.numIntersection)||Pt.vertexAlphas!==Nt||Pt.vertexTangents!==Bt||Pt.morphTargets!==It||Pt.morphNormals!==jt||Pt.morphColors!==re||Pt.toneMapping!==se||Pt.morphTargetsCount!==$t)&&(Zt=!0):(Zt=!0,Pt.__version=J.version);let Ye=Pt.currentProgram;Zt===!0&&(Ye=Kr(J,F,V));let wi=!1,Fe=!1,_o=!1;const ce=Ye.getUniforms(),Dn=Pt.uniforms;if(U.useProgram(Ye.program)&&(wi=!0,Fe=!0,_o=!0),J.id!==B&&(B=J.id,Fe=!0),wi||R!==E){ce.setValue(w,"projectionMatrix",E.projectionMatrix),ce.setValue(w,"viewMatrix",E.matrixWorldInverse);const Ve=ce.map.cameraPosition;Ve!==void 0&&Ve.setValue(w,_t.setFromMatrixPosition(E.matrixWorld)),N.logarithmicDepthBuffer&&ce.setValue(w,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ce.setValue(w,"isOrthographic",E.isOrthographicCamera===!0),R!==E&&(R=E,Fe=!0,_o=!0)}if(V.isSkinnedMesh){ce.setOptional(w,V,"bindMatrix"),ce.setOptional(w,V,"bindMatrixInverse");const Ve=V.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),ce.setValue(w,"boneTexture",Ve.boneTexture,Q))}V.isBatchedMesh&&(ce.setOptional(w,V,"batchingTexture"),ce.setValue(w,"batchingTexture",V._matricesTexture,Q),ce.setOptional(w,V,"batchingIdTexture"),ce.setValue(w,"batchingIdTexture",V._indirectTexture,Q),ce.setOptional(w,V,"batchingColorTexture"),V._colorsTexture!==null&&ce.setValue(w,"batchingColorTexture",V._colorsTexture,Q));const vo=Z.morphAttributes;if((vo.position!==void 0||vo.normal!==void 0||vo.color!==void 0)&&Ht.update(V,Z,Ye),(Fe||Pt.receiveShadow!==V.receiveShadow)&&(Pt.receiveShadow=V.receiveShadow,ce.setValue(w,"receiveShadow",V.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Dn.envMap.value=bt,Dn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&F.environment!==null&&(Dn.envMapIntensity.value=F.environmentIntensity),Fe&&(ce.setValue(w,"toneMappingExposure",M.toneMappingExposure),Pt.needsLights&&_h(Dn,_o),pt&&J.fog===!0&&lt.refreshFogUniforms(Dn,pt),lt.refreshMaterialUniforms(Dn,J,it,q,m.state.transmissionRenderTarget[E.id]),Hs.upload(w,Fl(Pt),Dn,Q)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Hs.upload(w,Fl(Pt),Dn,Q),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ce.setValue(w,"center",V.center),ce.setValue(w,"modelViewMatrix",V.modelViewMatrix),ce.setValue(w,"normalMatrix",V.normalMatrix),ce.setValue(w,"modelMatrix",V.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ve=J.uniformsGroups;for(let xo=0,xh=Ve.length;xo<xh;xo++){const zl=Ve[xo];Yt.update(zl,Ye),Yt.bind(zl,Ye)}}return Ye}function _h(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function vh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,F,Z){H.get(E.texture).__webglTexture=F,H.get(E.depthTexture).__webglTexture=Z;const J=H.get(E);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||A.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const Z=H.get(E);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,Z=0){D=E,G=F,P=Z;let J=!0,V=null,pt=!1,Et=!1;if(E){const bt=H.get(E);bt.__useDefaultFramebuffer!==void 0?(U.bindFramebuffer(w.FRAMEBUFFER,null),J=!1):bt.__webglFramebuffer===void 0?Q.setupRenderTarget(E):bt.__hasExternalTextures&&Q.rebindTextures(E,H.get(E.texture).__webglTexture,H.get(E.depthTexture).__webglTexture);const Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Et=!0);const Bt=H.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Bt[F])?V=Bt[F][Z]:V=Bt[F],pt=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?V=H.get(E).__webglMultisampledFramebuffer:Array.isArray(Bt)?V=Bt[Z]:V=Bt,y.copy(E.viewport),I.copy(E.scissor),nt=E.scissorTest}else y.copy(vt).multiplyScalar(it).floor(),I.copy(gt).multiplyScalar(it).floor(),nt=wt;if(U.bindFramebuffer(w.FRAMEBUFFER,V)&&J&&U.drawBuffers(E,V),U.viewport(y),U.scissor(I),U.setScissorTest(nt),pt){const bt=H.get(E.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+F,bt.__webglTexture,Z)}else if(Et){const bt=H.get(E.texture),Nt=F||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,bt.__webglTexture,Z||0,Nt)}B=-1},this.readRenderTargetPixels=function(E,F,Z,J,V,pt,Et){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=H.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Tt=Tt[Et]),Tt){U.bindFramebuffer(w.FRAMEBUFFER,Tt);try{const bt=E.texture,Nt=bt.format,Bt=bt.type;if(!N.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-J&&Z>=0&&Z<=E.height-V&&w.readPixels(F,Z,J,V,Ut.convert(Nt),Ut.convert(Bt),pt)}finally{const bt=D!==null?H.get(D).__webglFramebuffer:null;U.bindFramebuffer(w.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(E,F,Z,J,V,pt,Et){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=H.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Tt=Tt[Et]),Tt){U.bindFramebuffer(w.FRAMEBUFFER,Tt);try{const bt=E.texture,Nt=bt.format,Bt=bt.type;if(!N.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-J&&Z>=0&&Z<=E.height-V){const It=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,It),w.bufferData(w.PIXEL_PACK_BUFFER,pt.byteLength,w.STREAM_READ),w.readPixels(F,Z,J,V,Ut.convert(Nt),Ut.convert(Bt),0),w.flush();const jt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);await dg(w,jt,4);try{w.bindBuffer(w.PIXEL_PACK_BUFFER,It),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,pt)}finally{w.deleteBuffer(It),w.deleteSync(jt)}return pt}}finally{const bt=D!==null?H.get(D).__webglFramebuffer:null;U.bindFramebuffer(w.FRAMEBUFFER,bt)}}},this.copyFramebufferToTexture=function(E,F=null,Z=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const J=Math.pow(2,-Z),V=Math.floor(E.image.width*J),pt=Math.floor(E.image.height*J),Et=F!==null?F.x:0,Tt=F!==null?F.y:0;Q.setTexture2D(E,0),w.copyTexSubImage2D(w.TEXTURE_2D,Z,0,0,Et,Tt,V,pt),U.unbindTexture()},this.copyTextureToTexture=function(E,F,Z=null,J=null,V=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,E=arguments[1],F=arguments[2],V=arguments[3]||0,Z=null);let pt,Et,Tt,bt,Nt,Bt;Z!==null?(pt=Z.max.x-Z.min.x,Et=Z.max.y-Z.min.y,Tt=Z.min.x,bt=Z.min.y):(pt=E.image.width,Et=E.image.height,Tt=0,bt=0),J!==null?(Nt=J.x,Bt=J.y):(Nt=0,Bt=0);const It=Ut.convert(F.format),jt=Ut.convert(F.type);Q.setTexture2D(F,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,F.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,F.unpackAlignment);const re=w.getParameter(w.UNPACK_ROW_LENGTH),se=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Oe=w.getParameter(w.UNPACK_SKIP_PIXELS),$t=w.getParameter(w.UNPACK_SKIP_ROWS),Pt=w.getParameter(w.UNPACK_SKIP_IMAGES),Me=E.isCompressedTexture?E.mipmaps[V]:E.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Me.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Me.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Tt),w.pixelStorei(w.UNPACK_SKIP_ROWS,bt),E.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,V,Nt,Bt,pt,Et,It,jt,Me.data):E.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,V,Nt,Bt,Me.width,Me.height,It,Me.data):w.texSubImage2D(w.TEXTURE_2D,V,Nt,Bt,pt,Et,It,jt,Me),w.pixelStorei(w.UNPACK_ROW_LENGTH,re),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,se),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Oe),w.pixelStorei(w.UNPACK_SKIP_ROWS,$t),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Pt),V===0&&F.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),U.unbindTexture()},this.copyTextureToTexture3D=function(E,F,Z=null,J=null,V=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,E=arguments[2],F=arguments[3],V=arguments[4]||0);let pt,Et,Tt,bt,Nt,Bt,It,jt,re;const se=E.isCompressedTexture?E.mipmaps[V]:E.image;Z!==null?(pt=Z.max.x-Z.min.x,Et=Z.max.y-Z.min.y,Tt=Z.max.z-Z.min.z,bt=Z.min.x,Nt=Z.min.y,Bt=Z.min.z):(pt=se.width,Et=se.height,Tt=se.depth,bt=0,Nt=0,Bt=0),J!==null?(It=J.x,jt=J.y,re=J.z):(It=0,jt=0,re=0);const Oe=Ut.convert(F.format),$t=Ut.convert(F.type);let Pt;if(F.isData3DTexture)Q.setTexture3D(F,0),Pt=w.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Q.setTexture2DArray(F,0),Pt=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,F.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,F.unpackAlignment);const Me=w.getParameter(w.UNPACK_ROW_LENGTH),Zt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ye=w.getParameter(w.UNPACK_SKIP_PIXELS),wi=w.getParameter(w.UNPACK_SKIP_ROWS),Fe=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,se.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,se.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,bt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Nt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Bt),E.isDataTexture||E.isData3DTexture?w.texSubImage3D(Pt,V,It,jt,re,pt,Et,Tt,Oe,$t,se.data):F.isCompressedArrayTexture?w.compressedTexSubImage3D(Pt,V,It,jt,re,pt,Et,Tt,Oe,se.data):w.texSubImage3D(Pt,V,It,jt,re,pt,Et,Tt,Oe,$t,se),w.pixelStorei(w.UNPACK_ROW_LENGTH,Me),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Zt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ye),w.pixelStorei(w.UNPACK_SKIP_ROWS,wi),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Fe),V===0&&F.generateMipmaps&&w.generateMipmap(Pt),U.unbindTexture()},this.initRenderTarget=function(E){H.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),U.unbindTexture()},this.resetState=function(){G=0,P=0,D=null,U.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Pl?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===uo?"display-p3":"srgb"}}class EM extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $a extends Xr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const $s=new O,Zs=new O,vu=new oe,_r=new ho,Ts=new fo,ea=new O,xu=new O;class Mu extends Se{constructor(t=new rn,e=new $a){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)$s.fromBufferAttribute(e,r-1),Zs.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=$s.distanceTo(Zs);t.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere),Ts.applyMatrix4(r),Ts.radius+=s,t.ray.intersectsSphere(Ts)===!1)return;vu.copy(r).invert(),_r.copy(t.ray).applyMatrix4(vu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=d,m=_-1;x<m;x+=c){const p=u.getX(x),C=u.getX(x+1),M=bs(this,t,_r,l,p,C);M&&e.push(M)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(d),p=bs(this,t,_r,l,x,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let x=d,m=_-1;x<m;x+=c){const p=bs(this,t,_r,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=bs(this,t,_r,l,_-1,d);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function bs(n,t,e,i,r,s){const o=n.geometry.attributes.position;if($s.fromBufferAttribute(o,r),Zs.fromBufferAttribute(o,s),e.distanceSqToSegment($s,Zs,ea,xu)>i)return;ea.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ea);if(!(l<t.near||l>t.far))return{distance:l,point:xu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}class pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new mt:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new O,r=[],s=[],o=[],a=new O,l=new oe;for(let d=0;d<=t;d++){const _=d/t;r[d]=this.getTangentAt(_,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(_e(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(_e(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ul extends pn{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class TM extends Ul{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Nl(){let n=0,t=0,e=0,i=0;function r(s,o,a,l){n=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const As=new O,na=new Nl,ia=new Nl,ra=new Nl;class bM extends pn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new O){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(As.subVectors(r[0],r[1]).add(r[0]),c=As);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(As.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=As),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),na.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,x,m),ia.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,x,m),ra.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(na.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),ia.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),ra.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(na.calc(l),ia.calc(l),ra.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new O().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Su(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*n+e}function AM(n,t){const e=1-n;return e*e*t}function wM(n,t){return 2*(1-n)*n*t}function RM(n,t){return n*n*t}function Rr(n,t,e,i){return AM(n,t)+wM(n,e)+RM(n,i)}function CM(n,t){const e=1-n;return e*e*e*t}function PM(n,t){const e=1-n;return 3*e*e*n*t}function LM(n,t){return 3*(1-n)*n*n*t}function DM(n,t){return n*n*n*t}function Cr(n,t,e,i,r){return CM(n,t)+PM(n,e)+LM(n,i)+DM(n,r)}class lh extends pn{constructor(t=new mt,e=new mt,i=new mt,r=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new mt){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Cr(t,r.x,s.x,o.x,a.x),Cr(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class IM extends pn{constructor(t=new O,e=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new O){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Cr(t,r.x,s.x,o.x,a.x),Cr(t,r.y,s.y,o.y,a.y),Cr(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ch extends pn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class UM extends pn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uh extends pn{constructor(t=new mt,e=new mt,i=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new mt){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Rr(t,r.x,s.x,o.x),Rr(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class NM extends pn{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Rr(t,r.x,s.x,o.x),Rr(t,r.y,s.y,o.y),Rr(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fh extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Su(a,l.x,c.x,u.x,f.x),Su(a,l.y,c.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new mt().fromArray(r))}return this}}var Za=Object.freeze({__proto__:null,ArcCurve:TM,CatmullRomCurve3:bM,CubicBezierCurve:lh,CubicBezierCurve3:IM,EllipseCurve:Ul,LineCurve:ch,LineCurve3:UM,QuadraticBezierCurve:uh,QuadraticBezierCurve3:NM,SplineCurve:fh});class OM extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Za[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new Za[r.type]().fromJSON(r))}return this}}class yu extends OM{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new ch(this.currentPoint.clone(),new mt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new uh(this.currentPoint.clone(),new mt(t,e),new mt(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,o){const a=new lh(this.currentPoint.clone(),new mt(t,e),new mt(i,r),new mt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new fh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,r,s,o),this}absarc(t,e,i,r,s,o){return this.absellipse(t,e,i,i,r,s,o),this}ellipse(t,e,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,r,s,o,a,l),this}absellipse(t,e,i,r,s,o,a,l){const c=new Ul(t,e,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ja extends yu{constructor(t){super(t),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new yu().fromJSON(r))}return this}}const FM={triangulate:function(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=hh(n,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,h,d;if(i&&(s=GM(n,t,s,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let _=e;_<r;_+=e)f=n[_],h=n[_+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return zr(s,o,e,a,l,d,0),o}};function hh(n,t,e,i,r){let s,o;if(r===QM(n,t,e,i)>0)for(s=t;s<e;s+=i)o=Eu(s,n[s],n[s+1],o);else for(s=e-i;s>=t;s-=i)o=Eu(s,n[s],n[s+1],o);return o&&go(o,o.next)&&(Vr(o),o=o.next),o}function Ei(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(go(e,e.next)||ie(e.prev,e,e.next)===0)){if(Vr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function zr(n,t,e,i,r,s,o){if(!n)return;!o&&s&&qM(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?zM(n,i,r,s):BM(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Vr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=HM(Ei(n),t,e),zr(n,t,e,i,r,s,2)):o===2&&VM(n,t,e,i,r,s):zr(Ei(n),t,e,i,r,s,1);break}}}function BM(n){const t=n.prev,e=n,i=n.next;if(ie(t,e,i)>=0)return!1;const r=t.x,s=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==t;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=d&&$i(r,a,s,l,o,c,_.x,_.y)&&ie(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function zM(n,t,e,i){const r=n.prev,s=n,o=n.next;if(ie(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,d=a<l?a<c?a:c:l<c?l:c,_=u<f?u<h?u:h:f<h?f:h,x=a>l?a>c?a:c:l>c?l:c,m=u>f?u>h?u:h:f>h?f:h,p=Qa(d,_,t,e,i),C=Qa(x,m,t,e,i);let M=n.prevZ,b=n.nextZ;for(;M&&M.z>=p&&b&&b.z<=C;){if(M.x>=d&&M.x<=x&&M.y>=_&&M.y<=m&&M!==r&&M!==o&&$i(a,u,l,f,c,h,M.x,M.y)&&ie(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=d&&b.x<=x&&b.y>=_&&b.y<=m&&b!==r&&b!==o&&$i(a,u,l,f,c,h,b.x,b.y)&&ie(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=x&&M.y>=_&&M.y<=m&&M!==r&&M!==o&&$i(a,u,l,f,c,h,M.x,M.y)&&ie(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=C;){if(b.x>=d&&b.x<=x&&b.y>=_&&b.y<=m&&b!==r&&b!==o&&$i(a,u,l,f,c,h,b.x,b.y)&&ie(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function HM(n,t,e){let i=n;do{const r=i.prev,s=i.next.next;!go(r,s)&&dh(r,i,i.next,s)&&Hr(r,s)&&Hr(s,r)&&(t.push(r.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),Vr(i),Vr(i.next),i=n=s),i=i.next}while(i!==n);return Ei(i)}function VM(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$M(o,a)){let l=ph(o,a);o=Ei(o,o.next),l=Ei(l,l.next),zr(o,t,e,i,r,s,0),zr(l,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function GM(n,t,e,i){const r=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*i,l=s<o-1?t[s+1]*i:n.length,c=hh(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(jM(c));for(r.sort(kM),s=0;s<r.length;s++)e=WM(r[s],e);return e}function kM(n,t){return n.x-t.x}function WM(n,t){const e=XM(n,t);if(!e)return t;const i=ph(e,n);return Ei(i,i.next),Ei(e,e.next)}function XM(n,t){let e=t,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const h=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=s&&h>i&&(i=h,r=e.x<e.next.x?e:e.next,h===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,f;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&$i(o<c?s:i,o,l,c,o<c?i:s,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(s-e.x),Hr(e,n)&&(f<u||f===u&&(e.x>r.x||e.x===r.x&&YM(r,e)))&&(r=e,u=f)),e=e.next;while(e!==a);return r}function YM(n,t){return ie(n.prev,n,t.prev)<0&&ie(t.next,n,n.next)<0}function qM(n,t,e,i){let r=n;do r.z===0&&(r.z=Qa(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,KM(r)}function KM(n){let t,e,i,r,s,o,a,l,c=1;do{for(e=n,n=null,s=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(r=e,e=e.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;e=i}s.nextZ=null,c*=2}while(o>1);return n}function Qa(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function jM(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function $i(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function $M(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!ZM(n,t)&&(Hr(n,t)&&Hr(t,n)&&JM(n,t)&&(ie(n.prev,n,t.prev)||ie(n,t.prev,t))||go(n,t)&&ie(n.prev,n,n.next)>0&&ie(t.prev,t,t.next)>0)}function ie(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function go(n,t){return n.x===t.x&&n.y===t.y}function dh(n,t,e,i){const r=Rs(ie(n,t,e)),s=Rs(ie(n,t,i)),o=Rs(ie(e,i,n)),a=Rs(ie(e,i,t));return!!(r!==s&&o!==a||r===0&&ws(n,e,t)||s===0&&ws(n,i,t)||o===0&&ws(e,n,i)||a===0&&ws(e,t,i))}function ws(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Rs(n){return n>0?1:n<0?-1:0}function ZM(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&dh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Hr(n,t){return ie(n.prev,n,n.next)<0?ie(n,t,n.next)>=0&&ie(n,n.prev,t)>=0:ie(n,t,n.prev)<0||ie(n,n.next,t)<0}function JM(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ph(n,t){const e=new tl(n.i,n.x,n.y),i=new tl(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Eu(n,t,e,i){const r=new tl(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Vr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function tl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function QM(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Pr{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return Pr.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];Tu(t),bu(i,t);let o=t.length;e.forEach(Tu);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,bu(i,e[l]);const a=FM.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Tu(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function bu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Js extends rn{constructor(t=new Ja([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new dn(r,3)),this.setAttribute("uv",new dn(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,C=e.UVGenerator!==void 0?e.UVGenerator:tS;let M,b=!1,G,P,D,B;p&&(M=p.getSpacedPoints(u),b=!0,h=!1,G=p.computeFrenetFrames(u,!1),P=new O,D=new O,B=new O),h||(m=0,d=0,_=0,x=0);const R=a.extractPoints(c);let y=R.shape;const I=R.holes;if(!Pr.isClockWise(y)){y=y.reverse();for(let w=0,T=I.length;w<T;w++){const A=I[w];Pr.isClockWise(A)&&(I[w]=A.reverse())}}const j=Pr.triangulateShape(y,I),tt=y;for(let w=0,T=I.length;w<T;w++){const A=I[w];y=y.concat(A)}function ot(w,T,A){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(T,A)}const q=y.length,it=j.length;function X(w,T,A){let N,U,Y;const H=w.x-T.x,Q=w.y-T.y,S=A.x-w.x,g=A.y-w.y,L=H*H+Q*Q,z=H*g-Q*S;if(Math.abs(z)>Number.EPSILON){const W=Math.sqrt(L),k=Math.sqrt(S*S+g*g),lt=T.x-Q/W,st=T.y+H/W,ct=A.x-g/k,xt=A.y+S/k,at=((ct-lt)*g-(xt-st)*S)/(H*g-Q*S);N=lt+H*at-w.x,U=st+Q*at-w.y;const dt=N*N+U*U;if(dt<=2)return new mt(N,U);Y=Math.sqrt(dt/2)}else{let W=!1;H>Number.EPSILON?S>Number.EPSILON&&(W=!0):H<-Number.EPSILON?S<-Number.EPSILON&&(W=!0):Math.sign(Q)===Math.sign(g)&&(W=!0),W?(N=-Q,U=H,Y=Math.sqrt(L)):(N=H,U=Q,Y=Math.sqrt(L/2))}return new mt(N/Y,U/Y)}const ht=[];for(let w=0,T=tt.length,A=T-1,N=w+1;w<T;w++,A++,N++)A===T&&(A=0),N===T&&(N=0),ht[w]=X(tt[w],tt[A],tt[N]);const vt=[];let gt,wt=ht.concat();for(let w=0,T=I.length;w<T;w++){const A=I[w];gt=[];for(let N=0,U=A.length,Y=U-1,H=N+1;N<U;N++,Y++,H++)Y===U&&(Y=0),H===U&&(H=0),gt[N]=X(A[N],A[Y],A[H]);vt.push(gt),wt=wt.concat(gt)}for(let w=0;w<m;w++){const T=w/m,A=d*Math.cos(T*Math.PI/2),N=_*Math.sin(T*Math.PI/2)+x;for(let U=0,Y=tt.length;U<Y;U++){const H=ot(tt[U],ht[U],N);_t(H.x,H.y,-A)}for(let U=0,Y=I.length;U<Y;U++){const H=I[U];gt=vt[U];for(let Q=0,S=H.length;Q<S;Q++){const g=ot(H[Q],gt[Q],N);_t(g.x,g.y,-A)}}}const zt=_+x;for(let w=0;w<q;w++){const T=h?ot(y[w],wt[w],zt):y[w];b?(D.copy(G.normals[0]).multiplyScalar(T.x),P.copy(G.binormals[0]).multiplyScalar(T.y),B.copy(M[0]).add(D).add(P),_t(B.x,B.y,B.z)):_t(T.x,T.y,0)}for(let w=1;w<=u;w++)for(let T=0;T<q;T++){const A=h?ot(y[T],wt[T],zt):y[T];b?(D.copy(G.normals[w]).multiplyScalar(A.x),P.copy(G.binormals[w]).multiplyScalar(A.y),B.copy(M[w]).add(D).add(P),_t(B.x,B.y,B.z)):_t(A.x,A.y,f/u*w)}for(let w=m-1;w>=0;w--){const T=w/m,A=d*Math.cos(T*Math.PI/2),N=_*Math.sin(T*Math.PI/2)+x;for(let U=0,Y=tt.length;U<Y;U++){const H=ot(tt[U],ht[U],N);_t(H.x,H.y,f+A)}for(let U=0,Y=I.length;U<Y;U++){const H=I[U];gt=vt[U];for(let Q=0,S=H.length;Q<S;Q++){const g=ot(H[Q],gt[Q],N);b?_t(g.x,g.y+M[u-1].y,M[u-1].x+A):_t(g.x,g.y,f+A)}}}rt(),ft();function rt(){const w=r.length/3;if(h){let T=0,A=q*T;for(let N=0;N<it;N++){const U=j[N];Lt(U[2]+A,U[1]+A,U[0]+A)}T=u+m*2,A=q*T;for(let N=0;N<it;N++){const U=j[N];Lt(U[0]+A,U[1]+A,U[2]+A)}}else{for(let T=0;T<it;T++){const A=j[T];Lt(A[2],A[1],A[0])}for(let T=0;T<it;T++){const A=j[T];Lt(A[0]+q*u,A[1]+q*u,A[2]+q*u)}}i.addGroup(w,r.length/3-w,0)}function ft(){const w=r.length/3;let T=0;St(tt,T),T+=tt.length;for(let A=0,N=I.length;A<N;A++){const U=I[A];St(U,T),T+=U.length}i.addGroup(w,r.length/3-w,1)}function St(w,T){let A=w.length;for(;--A>=0;){const N=A;let U=A-1;U<0&&(U=w.length-1);for(let Y=0,H=u+m*2;Y<H;Y++){const Q=q*Y,S=q*(Y+1),g=T+N+Q,L=T+U+Q,z=T+U+S,W=T+N+S;Ot(g,L,z,W)}}}function _t(w,T,A){l.push(w),l.push(T),l.push(A)}function Lt(w,T,A){Ct(w),Ct(T),Ct(A);const N=r.length/3,U=C.generateTopUV(i,r,N-3,N-2,N-1);Xt(U[0]),Xt(U[1]),Xt(U[2])}function Ot(w,T,A,N){Ct(w),Ct(T),Ct(N),Ct(T),Ct(A),Ct(N);const U=r.length/3,Y=C.generateSideWallUV(i,r,U-6,U-3,U-2,U-1);Xt(Y[0]),Xt(Y[1]),Xt(Y[3]),Xt(Y[1]),Xt(Y[2]),Xt(Y[3])}function Ct(w){r.push(l[w*3+0]),r.push(l[w*3+1]),r.push(l[w*3+2])}function Xt(w){s.push(w.x),s.push(w.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return eS(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];i.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Za[r.type]().fromJSON(r)),new Js(i,t.options)}}const tS={generateTopUV:function(n,t,e,i,r){const s=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[r*3],u=t[r*3+1];return[new mt(s,o),new mt(a,l),new mt(c,u)]},generateSideWallUV:function(n,t,e,i,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],f=t[i*3+2],h=t[r*3],d=t[r*3+1],_=t[r*3+2],x=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-f),new mt(h,1-_),new mt(x,1-p)]:[new mt(a,1-l),new mt(u,1-f),new mt(d,1-_),new mt(m,1-p)]}};function eS(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}const Au={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class nS{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const iS=new nS;class mh{constructor(t){this.manager=t!==void 0?t:iS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}mh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Sn={};class rS extends Error{constructor(t,e){super(t),this.response=e}}class sS extends mh{constructor(t){super(t)}load(t,e,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Au.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Sn[t]!==void 0){Sn[t].push({onLoad:e,onProgress:i,onError:r});return}Sn[t]=[],Sn[t].push({onLoad:e,onProgress:i,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Sn[t],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,_=d!==0;let x=0;const m=new ReadableStream({start(p){C();function C(){f.read().then(({done:M,value:b})=>{if(M)p.close();else{x+=b.byteLength;const G=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:d});for(let P=0,D=u.length;P<D;P++){const B=u[P];B.onProgress&&B.onProgress(G)}p.enqueue(b),C()}},M=>{p.error(M)})}}});return new Response(m)}else throw new rS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Au.add(t,c);const u=Sn[t];delete Sn[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Sn[t];if(u===void 0)throw this.manager.itemError(t),c;delete Sn[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class oS extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class aS extends oS{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const wu=new oe;class lS{constructor(t,e,i=0,r=1/0){this.ray=new ho(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Dl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wu),this}intersectObject(t,e=!0,i=[]){return el(t,this,i,e),i.sort(Ru),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)el(t[r],this,i,e);return i.sort(Ru),i}}function Ru(n,t){return n.distance-t.distance}function el(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)el(s[o],t,e,!0)}}class Cu{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);const Pu={type:"change"},sa={type:"start"},Lu={type:"end"},Cs=new ho,Du=new Gn,cS=Math.cos(70*fg.DEG2RAD);class uS extends bi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ri.ROTATE,MIDDLE:Ri.DOLLY,RIGHT:Ri.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",ct),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ct),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Pu),i.update(),s=r.NONE},this.update=function(){const v=new O,K=new yi().setFromUnitVectors(t.up,new O(0,1,0)),$=K.clone().invert(),et=new O,ut=new yi,Rt=new O,Ft=2*Math.PI;return function(he=null){const qt=i.object.position;v.copy(qt).sub(i.target),v.applyQuaternion(K),a.setFromVector3(v),i.autoRotate&&s===r.NONE&&nt(y(he)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let de=i.minAzimuthAngle,le=i.maxAzimuthAngle;isFinite(de)&&isFinite(le)&&(de<-Math.PI?de+=Ft:de>Math.PI&&(de-=Ft),le<-Math.PI?le+=Ft:le>Math.PI&&(le-=Ft),de<=le?a.theta=Math.max(de,Math.min(le,a.theta)):a.theta=a.theta>(de+le)/2?Math.max(de,a.theta):Math.min(le,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Ln=!1;if(i.zoomToCursor&&P||i.object.isOrthographicCamera)a.radius=vt(a.radius);else{const xe=a.radius;a.radius=vt(a.radius*c),Ln=xe!=a.radius}if(v.setFromSpherical(a),v.applyQuaternion($),qt.copy(i.target).add(v),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&P){let xe=null;if(i.object.isPerspectiveCamera){const mn=v.length();xe=vt(mn*c);const ei=mn-xe;i.object.position.addScaledVector(b,ei),i.object.updateMatrixWorld(),Ln=!!ei}else if(i.object.isOrthographicCamera){const mn=new O(G.x,G.y,0);mn.unproject(i.object);const ei=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ln=ei!==i.object.zoom;const fr=new O(G.x,G.y,0);fr.unproject(i.object),i.object.position.sub(fr).add(mn),i.object.updateMatrixWorld(),xe=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;xe!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(xe).add(i.object.position):(Cs.origin.copy(i.object.position),Cs.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Cs.direction))<cS?t.lookAt(i.target):(Du.setFromNormalAndCoplanarPoint(i.object.up,i.target),Cs.intersectPlane(Du,i.target))))}else if(i.object.isOrthographicCamera){const xe=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),xe!==i.object.zoom&&(i.object.updateProjectionMatrix(),Ln=!0)}return c=1,P=!1,Ln||et.distanceToSquared(i.object.position)>o||8*(1-ut.dot(i.object.quaternion))>o||Rt.distanceToSquared(i.target)>o?(i.dispatchEvent(Pu),et.copy(i.object.position),ut.copy(i.object.quaternion),Rt.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",dt),i.domElement.removeEventListener("pointerdown",Q),i.domElement.removeEventListener("pointercancel",g),i.domElement.removeEventListener("wheel",W),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",g),i.domElement.getRootNode().removeEventListener("keydown",lt,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ct),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Cu,l=new Cu;let c=1;const u=new O,f=new mt,h=new mt,d=new mt,_=new mt,x=new mt,m=new mt,p=new mt,C=new mt,M=new mt,b=new O,G=new mt;let P=!1;const D=[],B={};let R=!1;function y(v){return v!==null?2*Math.PI/60*i.autoRotateSpeed*v:2*Math.PI/60/60*i.autoRotateSpeed}function I(v){const K=Math.abs(v*.01);return Math.pow(.95,i.zoomSpeed*K)}function nt(v){l.theta-=v}function j(v){l.phi-=v}const tt=function(){const v=new O;return function($,et){v.setFromMatrixColumn(et,0),v.multiplyScalar(-$),u.add(v)}}(),ot=function(){const v=new O;return function($,et){i.screenSpacePanning===!0?v.setFromMatrixColumn(et,1):(v.setFromMatrixColumn(et,0),v.crossVectors(i.object.up,v)),v.multiplyScalar($),u.add(v)}}(),q=function(){const v=new O;return function($,et){const ut=i.domElement;if(i.object.isPerspectiveCamera){const Rt=i.object.position;v.copy(Rt).sub(i.target);let Ft=v.length();Ft*=Math.tan(i.object.fov/2*Math.PI/180),tt(2*$*Ft/ut.clientHeight,i.object.matrix),ot(2*et*Ft/ut.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(tt($*(i.object.right-i.object.left)/i.object.zoom/ut.clientWidth,i.object.matrix),ot(et*(i.object.top-i.object.bottom)/i.object.zoom/ut.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function it(v){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(v){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ht(v,K){if(!i.zoomToCursor)return;P=!0;const $=i.domElement.getBoundingClientRect(),et=v-$.left,ut=K-$.top,Rt=$.width,Ft=$.height;G.x=et/Rt*2-1,G.y=-(ut/Ft)*2+1,b.set(G.x,G.y,1).unproject(i.object).sub(i.object.position).normalize()}function vt(v){return Math.max(i.minDistance,Math.min(i.maxDistance,v))}function gt(v){f.set(v.clientX,v.clientY)}function wt(v){ht(v.clientX,v.clientX),p.set(v.clientX,v.clientY)}function zt(v){_.set(v.clientX,v.clientY)}function rt(v){h.set(v.clientX,v.clientY),d.subVectors(h,f).multiplyScalar(i.rotateSpeed);const K=i.domElement;nt(2*Math.PI*d.x/K.clientHeight),j(2*Math.PI*d.y/K.clientHeight),f.copy(h),i.update()}function ft(v){C.set(v.clientX,v.clientY),M.subVectors(C,p),M.y>0?it(I(M.y)):M.y<0&&X(I(M.y)),p.copy(C),i.update()}function St(v){x.set(v.clientX,v.clientY),m.subVectors(x,_).multiplyScalar(i.panSpeed),q(m.x,m.y),_.copy(x),i.update()}function _t(v){ht(v.clientX,v.clientY),v.deltaY<0?X(I(v.deltaY)):v.deltaY>0&&it(I(v.deltaY)),i.update()}function Lt(v){let K=!1;switch(v.code){case i.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?j(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(0,i.keyPanSpeed),K=!0;break;case i.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?j(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(0,-i.keyPanSpeed),K=!0;break;case i.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?nt(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(i.keyPanSpeed,0),K=!0;break;case i.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?nt(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(-i.keyPanSpeed,0),K=!0;break}K&&(v.preventDefault(),i.update())}function Ot(v){if(D.length===1)f.set(v.pageX,v.pageY);else{const K=At(v),$=.5*(v.pageX+K.x),et=.5*(v.pageY+K.y);f.set($,et)}}function Ct(v){if(D.length===1)_.set(v.pageX,v.pageY);else{const K=At(v),$=.5*(v.pageX+K.x),et=.5*(v.pageY+K.y);_.set($,et)}}function Xt(v){const K=At(v),$=v.pageX-K.x,et=v.pageY-K.y,ut=Math.sqrt($*$+et*et);p.set(0,ut)}function w(v){i.enableZoom&&Xt(v),i.enablePan&&Ct(v)}function T(v){i.enableZoom&&Xt(v),i.enableRotate&&Ot(v)}function A(v){if(D.length==1)h.set(v.pageX,v.pageY);else{const $=At(v),et=.5*(v.pageX+$.x),ut=.5*(v.pageY+$.y);h.set(et,ut)}d.subVectors(h,f).multiplyScalar(i.rotateSpeed);const K=i.domElement;nt(2*Math.PI*d.x/K.clientHeight),j(2*Math.PI*d.y/K.clientHeight),f.copy(h)}function N(v){if(D.length===1)x.set(v.pageX,v.pageY);else{const K=At(v),$=.5*(v.pageX+K.x),et=.5*(v.pageY+K.y);x.set($,et)}m.subVectors(x,_).multiplyScalar(i.panSpeed),q(m.x,m.y),_.copy(x)}function U(v){const K=At(v),$=v.pageX-K.x,et=v.pageY-K.y,ut=Math.sqrt($*$+et*et);C.set(0,ut),M.set(0,Math.pow(C.y/p.y,i.zoomSpeed)),it(M.y),p.copy(C);const Rt=(v.pageX+K.x)*.5,Ft=(v.pageY+K.y)*.5;ht(Rt,Ft)}function Y(v){i.enableZoom&&U(v),i.enablePan&&N(v)}function H(v){i.enableZoom&&U(v),i.enableRotate&&A(v)}function Q(v){i.enabled!==!1&&(D.length===0&&(i.domElement.setPointerCapture(v.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",g)),!yt(v)&&(Ht(v),v.pointerType==="touch"?xt(v):L(v)))}function S(v){i.enabled!==!1&&(v.pointerType==="touch"?at(v):z(v))}function g(v){switch(Dt(v),D.length){case 0:i.domElement.releasePointerCapture(v.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",g),i.dispatchEvent(Lu),s=r.NONE;break;case 1:const K=D[0],$=B[K];xt({pointerId:K,pageX:$.x,pageY:$.y});break}}function L(v){let K;switch(v.button){case 0:K=i.mouseButtons.LEFT;break;case 1:K=i.mouseButtons.MIDDLE;break;case 2:K=i.mouseButtons.RIGHT;break;default:K=-1}switch(K){case Ri.DOLLY:if(i.enableZoom===!1)return;wt(v),s=r.DOLLY;break;case Ri.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(i.enablePan===!1)return;zt(v),s=r.PAN}else{if(i.enableRotate===!1)return;gt(v),s=r.ROTATE}break;case Ri.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(i.enableRotate===!1)return;gt(v),s=r.ROTATE}else{if(i.enablePan===!1)return;zt(v),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(sa)}function z(v){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;rt(v);break;case r.DOLLY:if(i.enableZoom===!1)return;ft(v);break;case r.PAN:if(i.enablePan===!1)return;St(v);break}}function W(v){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(v.preventDefault(),i.dispatchEvent(sa),_t(k(v)),i.dispatchEvent(Lu))}function k(v){const K=v.deltaMode,$={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(K){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}return v.ctrlKey&&!R&&($.deltaY*=10),$}function lt(v){v.key==="Control"&&(R=!0,i.domElement.getRootNode().addEventListener("keyup",st,{passive:!0,capture:!0}))}function st(v){v.key==="Control"&&(R=!1,i.domElement.getRootNode().removeEventListener("keyup",st,{passive:!0,capture:!0}))}function ct(v){i.enabled===!1||i.enablePan===!1||Lt(v)}function xt(v){switch(Ut(v),D.length){case 1:switch(i.touches.ONE){case Ci.ROTATE:if(i.enableRotate===!1)return;Ot(v),s=r.TOUCH_ROTATE;break;case Ci.PAN:if(i.enablePan===!1)return;Ct(v),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ci.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;w(v),s=r.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;T(v),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(sa)}function at(v){switch(Ut(v),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;A(v),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;N(v),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Y(v),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;H(v),i.update();break;default:s=r.NONE}}function dt(v){i.enabled!==!1&&v.preventDefault()}function Ht(v){D.push(v.pointerId)}function Dt(v){delete B[v.pointerId];for(let K=0;K<D.length;K++)if(D[K]==v.pointerId){D.splice(K,1);return}}function yt(v){for(let K=0;K<D.length;K++)if(D[K]==v.pointerId)return!0;return!1}function Ut(v){let K=B[v.pointerId];K===void 0&&(K=new mt,B[v.pointerId]=K),K.set(v.pageX,v.pageY)}function At(v){const K=v.pointerId===D[0]?D[1]:D[0];return B[K]}i.domElement.addEventListener("contextmenu",dt),i.domElement.addEventListener("pointerdown",Q),i.domElement.addEventListener("pointercancel",g),i.domElement.addEventListener("wheel",W,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",lt,{passive:!0,capture:!0}),this.update()}}const fS={__name:"MyMapComponent",setup(n){let t=Kl(null),e=Kl(null),i,r,s,o,a,l,c=null;function u(){r=new ke(75,t.value.offsetWidth/t.value.offsetHeight,.1,1e3),r.position.set(0,0,120),r.lookAt(i.position)}function f(){s=new yM,s.setSize(t.value.offsetWidth,t.value.offsetHeight)}function h(){o=new aS(16777215,20)}function d() {  
    new sS().load("assets/china.json", function(b, error) {  
        if (error) {  
            console.error("加载文件时发生错误:", error);  
            return;  
        }  
  
        // 在这里打印b的值  
        console.log("加载的文件内容是:", b);  
  
        try {  
            const G = JSON.parse(b);  
            _(G); // 假设 _ 是一个处理 G 的函数  
            console.log(G); // 如果需要，也可以在这里再次打印解析后的G  
        } catch (e) {  
            console.error("解析 JSON 时发生错误:", e);  
        }  
    });  
}function _(M){let b=new Se;const G=Mh.geoMercator().center([104,37.5]).translate([0,0]);M.features.forEach(P=>{let D=new Se;const B=P.geometry.coordinates;Array.isArray(B[0][0][0])?B.forEach(R=>{R.forEach(y=>{const I=new Ja,nt=[];y.forEach((gt,wt)=>{const[zt,rt]=G(gt);wt===0?I.moveTo(zt,-rt):I.lineTo(zt,-rt),nt.push(new O(zt,-rt,5))});const j=new rn().setFromPoints(nt),tt=new $a({color:"white"}),ot=new Mu(j,tt),q={depth:10,bevelEnabled:!1},it=new Js(I,q),X=new Ki({color:"#2defff",transparent:!0,opacity:.6}),ht=new Ki({color:"#3480C4",transparent:!0,opacity:.5}),vt=new tn(it,[X,ht]);D.properties=P.properties,D.add(vt),D.add(ot)})}):Array.isArray(B[0][0])&&B.forEach(R=>{const y=new Ja,I=[];R.forEach((vt,gt)=>{const[wt,zt]=G(vt);gt===0?y.moveTo(wt,-zt):y.lineTo(wt,-zt),I.push(new O(wt,-zt,5))});const nt=new rn().setFromPoints(I),j=new $a({color:"white"}),tt=new Mu(nt,j),ot={depth:10,bevelEnabled:!1},q=new Js(y,ot),it=new Ki({color:"#2defff",transparent:!0,opacity:.6}),X=new Ki({color:"#3480C4",transparent:!0,opacity:.5}),ht=new tn(q,[it,X]);D.properties=P.properties,D.add(ht),D.add(tt)}),b.add(D)}),i.add(b)}function x(){a=new lS,l=new mt;const M=b=>{l.x=b.clientX/t.value.offsetWidth*2-1,l.y=-(b.clientY/t.value.offsetHeight)*2+1,e.value.style.left=b.clientX+2+"px",e.value.style.top=b.clientY+2+"px"};window.addEventListener("mousemove",M,!1)}function m(){if(c){const M=c.object.parent.properties;e.value.textContent=M.name,e.value.style.visibility="visible",console.log(e.value.textContent)}else e.value.style.visibility="hidden"}function p(){requestAnimationFrame(p),a.setFromCamera(l,r);const M=a.intersectObjects(i.children,!0);c&&(c.object.material[0].color.set("#2defff"),c.object.material[1].color.set("#3480C4")),c=null,c=M.find(b=>b.object.material&&b.object.material.length===2),c&&(c.object.material[0].color.set(16711680),c.object.material[1].color.set(16711680)),m(),s.render(i,r)}function C(){r&&s&&t.value&&(r.aspect=t.value.offsetWidth/t.value.offsetHeight,r.updateProjectionMatrix(),s.setSize(t.value.offsetWidth,t.value.offsetHeight))}return lf(()=>{i=new EM,x(),h(),i.add(o),u(),d(),f(),t.value.appendChild(s.domElement),new uS(r,t.value),p(),window.addEventListener("resize",C)}),vl(()=>{window.removeEventListener("resize",C)}),(M,b)=>(Af(),wf(an,null,[Or("div",{id:"container",ref_key:"canvasContainer",ref:t},null,512),Or("div",{id:"tooltip",ref_key:"tooltip",ref:e},null,512)],64))}},hS=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},dS={name:"App",components:{MyMapComponent:fS}},pS={id:"app"},mS=Or("h1",null,"我的地图应用",-1);function gS(n,t,e,i,r,s){const o=Cd("MyMapComponent");return Af(),wf("div",pS,[mS,Yn(o)])}const _S=hS(dS,[["render",gS]]);Zp(_S).mount("#app");
