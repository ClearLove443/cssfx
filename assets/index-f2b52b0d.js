(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function po(e,t){const n=Object.create(null),o=e.split(",");for(let s=0;s<o.length;s++)n[o[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const re={},Ot=[],Le=()=>{},_i=()=>!1,pi=/^on[^a-z]/,$n=e=>pi.test(e),ho=e=>e.startsWith("onUpdate:"),ae=Object.assign,go=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},hi=Object.prototype.hasOwnProperty,W=(e,t)=>hi.call(e,t),H=Array.isArray,St=e=>Mn(e)==="[object Map]",Ds=e=>Mn(e)==="[object Set]",U=e=>typeof e=="function",fe=e=>typeof e=="string",bo=e=>typeof e=="symbol",ie=e=>e!==null&&typeof e=="object",Us=e=>ie(e)&&U(e.then)&&U(e.catch),Ks=Object.prototype.toString,Mn=e=>Ks.call(e),gi=e=>Mn(e).slice(8,-1),Xs=e=>Mn(e)==="[object Object]",mo=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,pn=po(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bi=/-(\w)/g,Ke=Tn(e=>e.replace(bi,(t,n)=>n?n.toUpperCase():"")),mi=/\B([A-Z])/g,Pt=Tn(e=>e.replace(mi,"-$1").toLowerCase()),In=Tn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Kn=Tn(e=>e?`on${In(e)}`:""),Wt=(e,t)=>!Object.is(e,t),Xn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},yn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},vi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},yi=e=>{const t=fe(e)?Number(e):NaN;return isNaN(t)?e:t};let qo;const eo=()=>qo||(qo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vo(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=fe(o)?Oi(o):vo(o);if(s)for(const r in s)t[r]=s[r]}return t}else{if(fe(e))return e;if(ie(e))return e}}const xi=/;(?![^(]*\))/g,wi=/:([^]+)/,Ei=/\/\*[^]*?\*\//g;function Oi(e){const t={};return e.replace(Ei,"").split(xi).forEach(n=>{if(n){const o=n.split(wi);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Vt(e){let t="";if(fe(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const o=Vt(e[n]);o&&(t+=o+" ")}else if(ie(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Si="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ci=po(Si);function Ys(e){return!!e||e===""}const Ws=e=>fe(e)?e:e==null?"":H(e)||ie(e)&&(e.toString===Ks||!U(e.toString))?JSON.stringify(e,Vs,2):String(e),Vs=(e,t)=>t&&t.__v_isRef?Vs(e,t.value):St(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s])=>(n[`${o} =>`]=s,n),{})}:Ds(t)?{[`Set(${t.size})`]:[...t.values()]}:ie(t)&&!H(t)&&!Xs(t)?String(t):t;let Re;class $i{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Re,!t&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Re;try{return Re=this,t()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Mi(e,t=Re){t&&t.active&&t.effects.push(e)}function Ti(){return Re}const yo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},qs=e=>(e.w&it)>0,Js=e=>(e.n&it)>0,Ii=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=it},ki=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const s=t[o];qs(s)&&!Js(s)?s.delete(e):t[n++]=s,s.w&=~it,s.n&=~it}t.length=n}},to=new WeakMap;let Ht=0,it=1;const no=30;let Ne;const bt=Symbol(""),oo=Symbol("");class xo{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Mi(this,o)}run(){if(!this.active)return this.fn();let t=Ne,n=st;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ne,Ne=this,st=!0,it=1<<++Ht,Ht<=no?Ii(this):Jo(this),this.fn()}finally{Ht<=no&&ki(this),it=1<<--Ht,Ne=this.parent,st=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ne===this?this.deferStop=!0:this.active&&(Jo(this),this.onStop&&this.onStop(),this.active=!1)}}function Jo(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let st=!0;const Gs=[];function At(){Gs.push(st),st=!1}function jt(){const e=Gs.pop();st=e===void 0?!0:e}function Ce(e,t,n){if(st&&Ne){let o=to.get(e);o||to.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=yo()),Zs(s)}}function Zs(e,t){let n=!1;Ht<=no?Js(e)||(e.n|=it,n=!qs(e)):n=!e.has(Ne),n&&(e.add(Ne),Ne.deps.push(e))}function qe(e,t,n,o,s,r){const i=to.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&H(e)){const c=Number(o);i.forEach((f,d)=>{(d==="length"||d>=c)&&l.push(f)})}else switch(n!==void 0&&l.push(i.get(n)),t){case"add":H(e)?mo(n)&&l.push(i.get("length")):(l.push(i.get(bt)),St(e)&&l.push(i.get(oo)));break;case"delete":H(e)||(l.push(i.get(bt)),St(e)&&l.push(i.get(oo)));break;case"set":St(e)&&l.push(i.get(bt));break}if(l.length===1)l[0]&&so(l[0]);else{const c=[];for(const f of l)f&&c.push(...f);so(yo(c))}}function so(e,t){const n=H(e)?e:[...e];for(const o of n)o.computed&&Go(o);for(const o of n)o.computed||Go(o)}function Go(e,t){(e!==Ne||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Pi=po("__proto__,__v_isRef,__isVue"),Qs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(bo)),Ai=wo(),ji=wo(!1,!0),Ri=wo(!0),Zo=Ni();function Ni(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=V(this);for(let r=0,i=this.length;r<i;r++)Ce(o,"get",r+"");const s=o[t](...n);return s===-1||s===!1?o[t](...n.map(V)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){At();const o=V(this)[t].apply(this,n);return jt(),o}}),e}function Bi(e){const t=V(this);return Ce(t,"has",e),t.hasOwnProperty(e)}function wo(e=!1,t=!1){return function(o,s,r){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&r===(e?t?Qi:sr:t?or:nr).get(o))return o;const i=H(o);if(!e){if(i&&W(Zo,s))return Reflect.get(Zo,s,r);if(s==="hasOwnProperty")return Bi}const l=Reflect.get(o,s,r);return(bo(s)?Qs.has(s):Pi(s))||(e||Ce(o,"get",s),t)?l:ye(l)?i&&mo(s)?l:l.value:ie(l)?e?rr(l):So(l):l}}const Li=er(),zi=er(!0);function er(e=!1){return function(n,o,s,r){let i=n[o];if(Tt(i)&&ye(i)&&!ye(s))return!1;if(!e&&(!xn(s)&&!Tt(s)&&(i=V(i),s=V(s)),!H(n)&&ye(i)&&!ye(s)))return i.value=s,!0;const l=H(n)&&mo(o)?Number(o)<n.length:W(n,o),c=Reflect.set(n,o,s,r);return n===V(r)&&(l?Wt(s,i)&&qe(n,"set",o,s):qe(n,"add",o,s)),c}}function Hi(e,t){const n=W(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&n&&qe(e,"delete",t,void 0),o}function Fi(e,t){const n=Reflect.has(e,t);return(!bo(t)||!Qs.has(t))&&Ce(e,"has",t),n}function Di(e){return Ce(e,"iterate",H(e)?"length":bt),Reflect.ownKeys(e)}const tr={get:Ai,set:Li,deleteProperty:Hi,has:Fi,ownKeys:Di},Ui={get:Ri,set(e,t){return!0},deleteProperty(e,t){return!0}},Ki=ae({},tr,{get:ji,set:zi}),Eo=e=>e,kn=e=>Reflect.getPrototypeOf(e);function ln(e,t,n=!1,o=!1){e=e.__v_raw;const s=V(e),r=V(t);n||(t!==r&&Ce(s,"get",t),Ce(s,"get",r));const{has:i}=kn(s),l=o?Eo:n?$o:qt;if(i.call(s,t))return l(e.get(t));if(i.call(s,r))return l(e.get(r));e!==s&&e.get(t)}function cn(e,t=!1){const n=this.__v_raw,o=V(n),s=V(e);return t||(e!==s&&Ce(o,"has",e),Ce(o,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function an(e,t=!1){return e=e.__v_raw,!t&&Ce(V(e),"iterate",bt),Reflect.get(e,"size",e)}function Qo(e){e=V(e);const t=V(this);return kn(t).has.call(t,e)||(t.add(e),qe(t,"add",e,e)),this}function es(e,t){t=V(t);const n=V(this),{has:o,get:s}=kn(n);let r=o.call(n,e);r||(e=V(e),r=o.call(n,e));const i=s.call(n,e);return n.set(e,t),r?Wt(t,i)&&qe(n,"set",e,t):qe(n,"add",e,t),this}function ts(e){const t=V(this),{has:n,get:o}=kn(t);let s=n.call(t,e);s||(e=V(e),s=n.call(t,e)),o&&o.call(t,e);const r=t.delete(e);return s&&qe(t,"delete",e,void 0),r}function ns(){const e=V(this),t=e.size!==0,n=e.clear();return t&&qe(e,"clear",void 0,void 0),n}function fn(e,t){return function(o,s){const r=this,i=r.__v_raw,l=V(i),c=t?Eo:e?$o:qt;return!e&&Ce(l,"iterate",bt),i.forEach((f,d)=>o.call(s,c(f),c(d),r))}}function un(e,t,n){return function(...o){const s=this.__v_raw,r=V(s),i=St(r),l=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,f=s[e](...o),d=n?Eo:t?$o:qt;return!t&&Ce(r,"iterate",c?oo:bt),{next(){const{value:y,done:x}=f.next();return x?{value:y,done:x}:{value:l?[d(y[0]),d(y[1])]:d(y),done:x}},[Symbol.iterator](){return this}}}}function Ze(e){return function(...t){return e==="delete"?!1:this}}function Xi(){const e={get(r){return ln(this,r)},get size(){return an(this)},has:cn,add:Qo,set:es,delete:ts,clear:ns,forEach:fn(!1,!1)},t={get(r){return ln(this,r,!1,!0)},get size(){return an(this)},has:cn,add:Qo,set:es,delete:ts,clear:ns,forEach:fn(!1,!0)},n={get(r){return ln(this,r,!0)},get size(){return an(this,!0)},has(r){return cn.call(this,r,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:fn(!0,!1)},o={get(r){return ln(this,r,!0,!0)},get size(){return an(this,!0)},has(r){return cn.call(this,r,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:fn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=un(r,!1,!1),n[r]=un(r,!0,!1),t[r]=un(r,!1,!0),o[r]=un(r,!0,!0)}),[e,n,t,o]}const[Yi,Wi,Vi,qi]=Xi();function Oo(e,t){const n=t?e?qi:Vi:e?Wi:Yi;return(o,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(W(n,s)&&s in o?n:o,s,r)}const Ji={get:Oo(!1,!1)},Gi={get:Oo(!1,!0)},Zi={get:Oo(!0,!1)},nr=new WeakMap,or=new WeakMap,sr=new WeakMap,Qi=new WeakMap;function el(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tl(e){return e.__v_skip||!Object.isExtensible(e)?0:el(gi(e))}function So(e){return Tt(e)?e:Co(e,!1,tr,Ji,nr)}function nl(e){return Co(e,!1,Ki,Gi,or)}function rr(e){return Co(e,!0,Ui,Zi,sr)}function Co(e,t,n,o,s){if(!ie(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const i=tl(e);if(i===0)return e;const l=new Proxy(e,i===2?o:n);return s.set(e,l),l}function Ct(e){return Tt(e)?Ct(e.__v_raw):!!(e&&e.__v_isReactive)}function Tt(e){return!!(e&&e.__v_isReadonly)}function xn(e){return!!(e&&e.__v_isShallow)}function ir(e){return Ct(e)||Tt(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function lr(e){return yn(e,"__v_skip",!0),e}const qt=e=>ie(e)?So(e):e,$o=e=>ie(e)?rr(e):e;function cr(e){st&&Ne&&(e=V(e),Zs(e.dep||(e.dep=yo())))}function ar(e,t){e=V(e);const n=e.dep;n&&so(n)}function ye(e){return!!(e&&e.__v_isRef===!0)}function ol(e){return sl(e,!1)}function sl(e,t){return ye(e)?e:new rl(e,t)}class rl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:qt(t)}get value(){return cr(this),this._value}set value(t){const n=this.__v_isShallow||xn(t)||Tt(t);t=n?t:V(t),Wt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:qt(t),ar(this))}}function il(e){return ye(e)?e.value:e}const ll={get:(e,t,n)=>il(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return ye(s)&&!ye(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function fr(e){return Ct(e)?e:new Proxy(e,ll)}class cl{constructor(t,n,o,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new xo(t,()=>{this._dirty||(this._dirty=!0,ar(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=V(this);return cr(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function al(e,t,n=!1){let o,s;const r=U(e);return r?(o=e,s=Le):(o=e.get,s=e.set),new cl(o,s,r||!s,n)}function rt(e,t,n,o){let s;try{s=o?e(...o):e()}catch(r){Pn(r,t,n)}return s}function Pe(e,t,n,o){if(U(e)){const r=rt(e,t,n,o);return r&&Us(r)&&r.catch(i=>{Pn(i,t,n)}),r}const s=[];for(let r=0;r<e.length;r++)s.push(Pe(e[r],t,n,o));return s}function Pn(e,t,n,o=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,l=n;for(;r;){const f=r.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,i,l)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){rt(c,null,10,[e,i,l]);return}}fl(e,n,s,o)}function fl(e,t,n,o=!0){console.error(e)}let Jt=!1,ro=!1;const ve=[];let Ue=0;const $t=[];let We=null,_t=0;const ur=Promise.resolve();let Mo=null;function ul(e){const t=Mo||ur;return e?t.then(this?e.bind(this):e):t}function dl(e){let t=Ue+1,n=ve.length;for(;t<n;){const o=t+n>>>1;Gt(ve[o])<e?t=o+1:n=o}return t}function To(e){(!ve.length||!ve.includes(e,Jt&&e.allowRecurse?Ue+1:Ue))&&(e.id==null?ve.push(e):ve.splice(dl(e.id),0,e),dr())}function dr(){!Jt&&!ro&&(ro=!0,Mo=ur.then(pr))}function _l(e){const t=ve.indexOf(e);t>Ue&&ve.splice(t,1)}function pl(e){H(e)?$t.push(...e):(!We||!We.includes(e,e.allowRecurse?_t+1:_t))&&$t.push(e),dr()}function os(e,t=Jt?Ue+1:0){for(;t<ve.length;t++){const n=ve[t];n&&n.pre&&(ve.splice(t,1),t--,n())}}function _r(e){if($t.length){const t=[...new Set($t)];if($t.length=0,We){We.push(...t);return}for(We=t,We.sort((n,o)=>Gt(n)-Gt(o)),_t=0;_t<We.length;_t++)We[_t]();We=null,_t=0}}const Gt=e=>e.id==null?1/0:e.id,hl=(e,t)=>{const n=Gt(e)-Gt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function pr(e){ro=!1,Jt=!0,ve.sort(hl);const t=Le;try{for(Ue=0;Ue<ve.length;Ue++){const n=ve[Ue];n&&n.active!==!1&&rt(n,null,14)}}finally{Ue=0,ve.length=0,_r(),Jt=!1,Mo=null,(ve.length||$t.length)&&pr()}}function gl(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||re;let s=n;const r=t.startsWith("update:"),i=r&&t.slice(7);if(i&&i in o){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:y,trim:x}=o[d]||re;x&&(s=n.map(j=>fe(j)?j.trim():j)),y&&(s=n.map(vi))}let l,c=o[l=Kn(t)]||o[l=Kn(Ke(t))];!c&&r&&(c=o[l=Kn(Pt(t))]),c&&Pe(c,e,6,s);const f=o[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Pe(f,e,6,s)}}function hr(e,t,n=!1){const o=t.emitsCache,s=o.get(e);if(s!==void 0)return s;const r=e.emits;let i={},l=!1;if(!U(e)){const c=f=>{const d=hr(f,t,!0);d&&(l=!0,ae(i,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!l?(ie(e)&&o.set(e,null),null):(H(r)?r.forEach(c=>i[c]=null):ae(i,r),ie(e)&&o.set(e,i),i)}function An(e,t){return!e||!$n(t)?!1:(t=t.slice(2).replace(/Once$/,""),W(e,t[0].toLowerCase()+t.slice(1))||W(e,Pt(t))||W(e,t))}let ge=null,jn=null;function wn(e){const t=ge;return ge=e,jn=e&&e.type.__scopeId||null,t}function be(e){jn=e}function me(){jn=null}function Zt(e,t=ge,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&gs(-1);const r=wn(t);let i;try{i=e(...s)}finally{wn(r),o._d&&gs(1)}return i};return o._n=!0,o._c=!0,o._d=!0,o}function Yn(e){const{type:t,vnode:n,proxy:o,withProxy:s,props:r,propsOptions:[i],slots:l,attrs:c,emit:f,render:d,renderCache:y,data:x,setupState:j,ctx:Y,inheritAttrs:B}=e;let Q,ne;const oe=wn(e);try{if(n.shapeFlag&4){const L=s||o;Q=De(d.call(L,L,y,r,j,x,Y)),ne=c}else{const L=t;Q=De(L.length>1?L(r,{attrs:c,slots:l,emit:f}):L(r,null)),ne=t.props?c:bl(c)}}catch(L){Xt.length=0,Pn(L,e,1),Q=G(Ae)}let te=Q;if(ne&&B!==!1){const L=Object.keys(ne),{shapeFlag:ue}=te;L.length&&ue&7&&(i&&L.some(ho)&&(ne=ml(ne,i)),te=lt(te,ne))}return n.dirs&&(te=lt(te),te.dirs=te.dirs?te.dirs.concat(n.dirs):n.dirs),n.transition&&(te.transition=n.transition),Q=te,wn(oe),Q}const bl=e=>{let t;for(const n in e)(n==="class"||n==="style"||$n(n))&&((t||(t={}))[n]=e[n]);return t},ml=(e,t)=>{const n={};for(const o in e)(!ho(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function vl(e,t,n){const{props:o,children:s,component:r}=e,{props:i,children:l,patchFlag:c}=t,f=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?ss(o,i,f):!!i;if(c&8){const d=t.dynamicProps;for(let y=0;y<d.length;y++){const x=d[y];if(i[x]!==o[x]&&!An(f,x))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:o===i?!1:o?i?ss(o,i,f):!0:!!i;return!1}function ss(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const r=o[s];if(t[r]!==e[r]&&!An(n,r))return!0}return!1}function yl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const xl=e=>e.__isSuspense;function wl(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):pl(e)}const dn={};function hn(e,t,n){return gr(e,t,n)}function gr(e,t,{immediate:n,deep:o,flush:s,onTrack:r,onTrigger:i}=re){var l;const c=Ti()===((l=he)==null?void 0:l.scope)?he:null;let f,d=!1,y=!1;if(ye(e)?(f=()=>e.value,d=xn(e)):Ct(e)?(f=()=>e,o=!0):H(e)?(y=!0,d=e.some(L=>Ct(L)||xn(L)),f=()=>e.map(L=>{if(ye(L))return L.value;if(Ct(L))return gt(L);if(U(L))return rt(L,c,2)})):U(e)?t?f=()=>rt(e,c,2):f=()=>{if(!(c&&c.isUnmounted))return x&&x(),Pe(e,c,3,[j])}:f=Le,t&&o){const L=f;f=()=>gt(L())}let x,j=L=>{x=oe.onStop=()=>{rt(L,c,4)}},Y;if(nn)if(j=Le,t?n&&Pe(t,c,3,[f(),y?[]:void 0,j]):f(),s==="sync"){const L=vc();Y=L.__watcherHandles||(L.__watcherHandles=[])}else return Le;let B=y?new Array(e.length).fill(dn):dn;const Q=()=>{if(oe.active)if(t){const L=oe.run();(o||d||(y?L.some((ue,Me)=>Wt(ue,B[Me])):Wt(L,B)))&&(x&&x(),Pe(t,c,3,[L,B===dn?void 0:y&&B[0]===dn?[]:B,j]),B=L)}else oe.run()};Q.allowRecurse=!!t;let ne;s==="sync"?ne=Q:s==="post"?ne=()=>Oe(Q,c&&c.suspense):(Q.pre=!0,c&&(Q.id=c.uid),ne=()=>To(Q));const oe=new xo(f,ne);t?n?Q():B=oe.run():s==="post"?Oe(oe.run.bind(oe),c&&c.suspense):oe.run();const te=()=>{oe.stop(),c&&c.scope&&go(c.scope.effects,oe)};return Y&&Y.push(te),te}function El(e,t,n){const o=this.proxy,s=fe(e)?e.includes(".")?br(o,e):()=>o[e]:e.bind(o,o);let r;U(t)?r=t:(r=t.handler,n=t);const i=he;It(this);const l=gr(s,r.bind(o),n);return i?It(i):mt(),l}function br(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}function gt(e,t){if(!ie(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ye(e))gt(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)gt(e[n],t);else if(Ds(e)||St(e))e.forEach(n=>{gt(n,t)});else if(Xs(e))for(const n in e)gt(e[n],t);return e}function rs(e,t){const n=ge;if(n===null)return e;const o=Hn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,l,c,f=re]=t[r];i&&(U(i)&&(i={mounted:i,updated:i}),i.deep&&gt(l),s.push({dir:i,instance:o,value:l,oldValue:void 0,arg:c,modifiers:f}))}return e}function ft(e,t,n,o){const s=e.dirs,r=t&&t.dirs;for(let i=0;i<s.length;i++){const l=s[i];r&&(l.oldValue=r[i].value);let c=l.dir[o];c&&(At(),Pe(c,n,8,[e.el,l,e,t]),jt())}}function mr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wr(()=>{e.isMounted=!0}),Or(()=>{e.isUnmounting=!0}),e}const ke=[Function,Array],vr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ke,onEnter:ke,onAfterEnter:ke,onEnterCancelled:ke,onBeforeLeave:ke,onLeave:ke,onAfterLeave:ke,onLeaveCancelled:ke,onBeforeAppear:ke,onAppear:ke,onAfterAppear:ke,onAppearCancelled:ke},Ol={name:"BaseTransition",props:vr,setup(e,{slots:t}){const n=Lr(),o=mr();let s;return()=>{const r=t.default&&Io(t.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){for(const B of r)if(B.type!==Ae){i=B;break}}const l=V(e),{mode:c}=l;if(o.isLeaving)return Wn(i);const f=is(i);if(!f)return Wn(i);const d=Qt(f,l,o,n);en(f,d);const y=n.subTree,x=y&&is(y);let j=!1;const{getTransitionKey:Y}=f.type;if(Y){const B=Y();s===void 0?s=B:B!==s&&(s=B,j=!0)}if(x&&x.type!==Ae&&(!pt(f,x)||j)){const B=Qt(x,l,o,n);if(en(x,B),c==="out-in")return o.isLeaving=!0,B.afterLeave=()=>{o.isLeaving=!1,n.update.active!==!1&&n.update()},Wn(i);c==="in-out"&&f.type!==Ae&&(B.delayLeave=(Q,ne,oe)=>{const te=yr(o,x);te[String(x.key)]=x,Q._leaveCb=()=>{ne(),Q._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=oe})}return i}}},Sl=Ol;function yr(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function Qt(e,t,n,o){const{appear:s,mode:r,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:y,onLeave:x,onAfterLeave:j,onLeaveCancelled:Y,onBeforeAppear:B,onAppear:Q,onAfterAppear:ne,onAppearCancelled:oe}=t,te=String(e.key),L=yr(n,e),ue=(K,q)=>{K&&Pe(K,o,9,q)},Me=(K,q)=>{const Z=q[1];ue(K,q),H(K)?K.every(pe=>pe.length<=1)&&Z():K.length<=1&&Z()},Te={mode:r,persisted:i,beforeEnter(K){let q=l;if(!n.isMounted)if(s)q=B||l;else return;K._leaveCb&&K._leaveCb(!0);const Z=L[te];Z&&pt(e,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),ue(q,[K])},enter(K){let q=c,Z=f,pe=d;if(!n.isMounted)if(s)q=Q||c,Z=ne||f,pe=oe||d;else return;let A=!1;const se=K._enterCb=xe=>{A||(A=!0,xe?ue(pe,[K]):ue(Z,[K]),Te.delayedLeave&&Te.delayedLeave(),K._enterCb=void 0)};q?Me(q,[K,se]):se()},leave(K,q){const Z=String(e.key);if(K._enterCb&&K._enterCb(!0),n.isUnmounting)return q();ue(y,[K]);let pe=!1;const A=K._leaveCb=se=>{pe||(pe=!0,q(),se?ue(Y,[K]):ue(j,[K]),K._leaveCb=void 0,L[Z]===e&&delete L[Z])};L[Z]=e,x?Me(x,[K,A]):A()},clone(K){return Qt(K,t,n,o)}};return Te}function Wn(e){if(Rn(e))return e=lt(e),e.children=null,e}function is(e){return Rn(e)?e.children?e.children[0]:void 0:e}function en(e,t){e.shapeFlag&6&&e.component?en(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Io(e,t=!1,n){let o=[],s=0;for(let r=0;r<e.length;r++){let i=e[r];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===Se?(i.patchFlag&128&&s++,o=o.concat(Io(i.children,t,l))):(t||i.type!==Ae)&&o.push(l!=null?lt(i,{key:l}):i)}if(s>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function Cl(e,t){return U(e)?(()=>ae({name:e.name},t,{setup:e}))():e}const Ut=e=>!!e.type.__asyncLoader,Rn=e=>e.type.__isKeepAlive;function $l(e,t){xr(e,"a",t)}function Ml(e,t){xr(e,"da",t)}function xr(e,t,n=he){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Nn(t,o,n),n){let s=n.parent;for(;s&&s.parent;)Rn(s.parent.vnode)&&Tl(o,t,n,s),s=s.parent}}function Tl(e,t,n,o){const s=Nn(t,e,o,!0);Sr(()=>{go(o[t],s)},n)}function Nn(e,t,n=he,o=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;At(),It(n);const l=Pe(t,n,e,i);return mt(),jt(),l});return o?s.unshift(r):s.push(r),r}}const Je=e=>(t,n=he)=>(!nn||e==="sp")&&Nn(e,(...o)=>t(...o),n),Il=Je("bm"),wr=Je("m"),kl=Je("bu"),Er=Je("u"),Or=Je("bum"),Sr=Je("um"),Pl=Je("sp"),Al=Je("rtg"),jl=Je("rtc");function Rl(e,t=he){Nn("ec",e,t)}const ko="components",Nl="directives";function Ve(e,t){return Po(ko,e,!0,t)||e}const Cr=Symbol.for("v-ndc");function Bl(e){return fe(e)?Po(ko,e,!1)||e:e||Cr}function Ll(e){return Po(Nl,e)}function Po(e,t,n=!0,o=!1){const s=ge||he;if(s){const r=s.type;if(e===ko){const l=gc(r,!1);if(l&&(l===t||l===Ke(t)||l===In(Ke(t))))return r}const i=ls(s[e]||r[e],t)||ls(s.appContext[e],t);return!i&&o?r:i}}function ls(e,t){return e&&(e[t]||e[Ke(t)]||e[In(Ke(t))])}function zl(e,t,n,o){let s;const r=n&&n[o];if(H(e)||fe(e)){s=new Array(e.length);for(let i=0,l=e.length;i<l;i++)s[i]=t(e[i],i,void 0,r&&r[i])}else if(typeof e=="number"){s=new Array(e);for(let i=0;i<e;i++)s[i]=t(i+1,i,void 0,r&&r[i])}else if(ie(e))if(e[Symbol.iterator])s=Array.from(e,(i,l)=>t(i,l,void 0,r&&r[l]));else{const i=Object.keys(e);s=new Array(i.length);for(let l=0,c=i.length;l<c;l++){const f=i[l];s[l]=t(e[f],f,l,r&&r[l])}}else s=[];return n&&(n[o]=s),s}function Hl(e,t,n={},o,s){if(ge.isCE||ge.parent&&Ut(ge.parent)&&ge.parent.isCE)return t!=="default"&&(n.name=t),G("slot",n,o&&o());let r=e[t];r&&r._c&&(r._d=!1),T();const i=r&&$r(r(n)),l=Mt(Se,{key:n.key||i&&i.key||`_${t}`},i||(o?o():[]),i&&e._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function $r(e){return e.some(t=>Sn(t)?!(t.type===Ae||t.type===Se&&!$r(t.children)):!0)?e:null}const io=e=>e?zr(e)?Hn(e)||e.proxy:io(e.parent):null,Kt=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>io(e.parent),$root:e=>io(e.root),$emit:e=>e.emit,$options:e=>Ao(e),$forceUpdate:e=>e.f||(e.f=()=>To(e.update)),$nextTick:e=>e.n||(e.n=ul.bind(e.proxy)),$watch:e=>El.bind(e)}),Vn=(e,t)=>e!==re&&!e.__isScriptSetup&&W(e,t),Fl={get({_:e},t){const{ctx:n,setupState:o,data:s,props:r,accessCache:i,type:l,appContext:c}=e;let f;if(t[0]!=="$"){const j=i[t];if(j!==void 0)switch(j){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(Vn(o,t))return i[t]=1,o[t];if(s!==re&&W(s,t))return i[t]=2,s[t];if((f=e.propsOptions[0])&&W(f,t))return i[t]=3,r[t];if(n!==re&&W(n,t))return i[t]=4,n[t];lo&&(i[t]=0)}}const d=Kt[t];let y,x;if(d)return t==="$attrs"&&Ce(e,"get",t),d(e);if((y=l.__cssModules)&&(y=y[t]))return y;if(n!==re&&W(n,t))return i[t]=4,n[t];if(x=c.config.globalProperties,W(x,t))return x[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:r}=e;return Vn(s,t)?(s[t]=n,!0):o!==re&&W(o,t)?(o[t]=n,!0):W(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,propsOptions:r}},i){let l;return!!n[i]||e!==re&&W(e,i)||Vn(t,i)||(l=r[0])&&W(l,i)||W(o,i)||W(Kt,i)||W(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:W(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function cs(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let lo=!0;function Dl(e){const t=Ao(e),n=e.proxy,o=e.ctx;lo=!1,t.beforeCreate&&as(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:i,watch:l,provide:c,inject:f,created:d,beforeMount:y,mounted:x,beforeUpdate:j,updated:Y,activated:B,deactivated:Q,beforeDestroy:ne,beforeUnmount:oe,destroyed:te,unmounted:L,render:ue,renderTracked:Me,renderTriggered:Te,errorCaptured:K,serverPrefetch:q,expose:Z,inheritAttrs:pe,components:A,directives:se,filters:xe}=t;if(f&&Ul(f,o,null),i)for(const b in i){const O=i[b];U(O)&&(o[b]=O.bind(n))}if(s){const b=s.call(n,n);ie(b)&&(e.data=So(b))}if(lo=!0,r)for(const b in r){const O=r[b],F=U(O)?O.bind(n,n):U(O.get)?O.get.bind(n,n):Le,J=!U(O)&&U(O.set)?O.set.bind(n):Le,ee=Dt({get:F,set:J});Object.defineProperty(o,b,{enumerable:!0,configurable:!0,get:()=>ee.value,set:ce=>ee.value=ce})}if(l)for(const b in l)Mr(l[b],o,n,b);if(c){const b=U(c)?c.call(n):c;Reflect.ownKeys(b).forEach(O=>{ql(O,b[O])})}d&&as(d,e,"c");function de(b,O){H(O)?O.forEach(F=>b(F.bind(n))):O&&b(O.bind(n))}if(de(Il,y),de(wr,x),de(kl,j),de(Er,Y),de($l,B),de(Ml,Q),de(Rl,K),de(jl,Me),de(Al,Te),de(Or,oe),de(Sr,L),de(Pl,q),H(Z))if(Z.length){const b=e.exposed||(e.exposed={});Z.forEach(O=>{Object.defineProperty(b,O,{get:()=>n[O],set:F=>n[O]=F})})}else e.exposed||(e.exposed={});ue&&e.render===Le&&(e.render=ue),pe!=null&&(e.inheritAttrs=pe),A&&(e.components=A),se&&(e.directives=se)}function Ul(e,t,n=Le){H(e)&&(e=co(e));for(const o in e){const s=e[o];let r;ie(s)?"default"in s?r=gn(s.from||o,s.default,!0):r=gn(s.from||o):r=gn(s),ye(r)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[o]=r}}function as(e,t,n){Pe(H(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function Mr(e,t,n,o){const s=o.includes(".")?br(n,o):()=>n[o];if(fe(e)){const r=t[e];U(r)&&hn(s,r)}else if(U(e))hn(s,e.bind(n));else if(ie(e))if(H(e))e.forEach(r=>Mr(r,t,n,o));else{const r=U(e.handler)?e.handler.bind(n):t[e.handler];U(r)&&hn(s,r,e)}}function Ao(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,l=r.get(t);let c;return l?c=l:!s.length&&!n&&!o?c=t:(c={},s.length&&s.forEach(f=>En(c,f,i,!0)),En(c,t,i)),ie(t)&&r.set(t,c),c}function En(e,t,n,o=!1){const{mixins:s,extends:r}=t;r&&En(e,r,n,!0),s&&s.forEach(i=>En(e,i,n,!0));for(const i in t)if(!(o&&i==="expose")){const l=Kl[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Kl={data:fs,props:us,emits:us,methods:Ft,computed:Ft,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:Ft,directives:Ft,watch:Yl,provide:fs,inject:Xl};function fs(e,t){return t?e?function(){return ae(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function Xl(e,t){return Ft(co(e),co(t))}function co(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ee(e,t){return e?[...new Set([].concat(e,t))]:t}function Ft(e,t){return e?ae(Object.create(null),e,t):t}function us(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:ae(Object.create(null),cs(e),cs(t??{})):t}function Yl(e,t){if(!e)return t;if(!t)return e;const n=ae(Object.create(null),e);for(const o in t)n[o]=Ee(e[o],t[o]);return n}function Tr(){return{app:null,config:{isNativeTag:_i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wl=0;function Vl(e,t){return function(o,s=null){U(o)||(o=ae({},o)),s!=null&&!ie(s)&&(s=null);const r=Tr(),i=new Set;let l=!1;const c=r.app={_uid:Wl++,_component:o,_props:s,_container:null,_context:r,_instance:null,version:yc,get config(){return r.config},set config(f){},use(f,...d){return i.has(f)||(f&&U(f.install)?(i.add(f),f.install(c,...d)):U(f)&&(i.add(f),f(c,...d))),c},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),c},component(f,d){return d?(r.components[f]=d,c):r.components[f]},directive(f,d){return d?(r.directives[f]=d,c):r.directives[f]},mount(f,d,y){if(!l){const x=G(o,s);return x.appContext=r,d&&t?t(x,f):e(x,f,y),l=!0,c._container=f,f.__vue_app__=c,Hn(x.component)||x.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(f,d){return r.provides[f]=d,c},runWithContext(f){On=c;try{return f()}finally{On=null}}};return c}}let On=null;function ql(e,t){if(he){let n=he.provides;const o=he.parent&&he.parent.provides;o===n&&(n=he.provides=Object.create(o)),n[e]=t}}function gn(e,t,n=!1){const o=he||ge;if(o||On){const s=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:On._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&U(t)?t.call(o&&o.proxy):t}}function Jl(e,t,n,o=!1){const s={},r={};yn(r,Ln,1),e.propsDefaults=Object.create(null),Ir(e,t,s,r);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=o?s:nl(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Gl(e,t,n,o){const{props:s,attrs:r,vnode:{patchFlag:i}}=e,l=V(s),[c]=e.propsOptions;let f=!1;if((o||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let y=0;y<d.length;y++){let x=d[y];if(An(e.emitsOptions,x))continue;const j=t[x];if(c)if(W(r,x))j!==r[x]&&(r[x]=j,f=!0);else{const Y=Ke(x);s[Y]=ao(c,l,Y,j,e,!1)}else j!==r[x]&&(r[x]=j,f=!0)}}}else{Ir(e,t,s,r)&&(f=!0);let d;for(const y in l)(!t||!W(t,y)&&((d=Pt(y))===y||!W(t,d)))&&(c?n&&(n[y]!==void 0||n[d]!==void 0)&&(s[y]=ao(c,l,y,void 0,e,!0)):delete s[y]);if(r!==l)for(const y in r)(!t||!W(t,y))&&(delete r[y],f=!0)}f&&qe(e,"set","$attrs")}function Ir(e,t,n,o){const[s,r]=e.propsOptions;let i=!1,l;if(t)for(let c in t){if(pn(c))continue;const f=t[c];let d;s&&W(s,d=Ke(c))?!r||!r.includes(d)?n[d]=f:(l||(l={}))[d]=f:An(e.emitsOptions,c)||(!(c in o)||f!==o[c])&&(o[c]=f,i=!0)}if(r){const c=V(n),f=l||re;for(let d=0;d<r.length;d++){const y=r[d];n[y]=ao(s,c,y,f[y],e,!W(f,y))}}return i}function ao(e,t,n,o,s,r){const i=e[n];if(i!=null){const l=W(i,"default");if(l&&o===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&U(c)){const{propsDefaults:f}=s;n in f?o=f[n]:(It(s),o=f[n]=c.call(null,t),mt())}else o=c}i[0]&&(r&&!l?o=!1:i[1]&&(o===""||o===Pt(n))&&(o=!0))}return o}function kr(e,t,n=!1){const o=t.propsCache,s=o.get(e);if(s)return s;const r=e.props,i={},l=[];let c=!1;if(!U(e)){const d=y=>{c=!0;const[x,j]=kr(y,t,!0);ae(i,x),j&&l.push(...j)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!c)return ie(e)&&o.set(e,Ot),Ot;if(H(r))for(let d=0;d<r.length;d++){const y=Ke(r[d]);ds(y)&&(i[y]=re)}else if(r)for(const d in r){const y=Ke(d);if(ds(y)){const x=r[d],j=i[y]=H(x)||U(x)?{type:x}:ae({},x);if(j){const Y=hs(Boolean,j.type),B=hs(String,j.type);j[0]=Y>-1,j[1]=B<0||Y<B,(Y>-1||W(j,"default"))&&l.push(y)}}}const f=[i,l];return ie(e)&&o.set(e,f),f}function ds(e){return e[0]!=="$"}function _s(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ps(e,t){return _s(e)===_s(t)}function hs(e,t){return H(t)?t.findIndex(n=>ps(n,e)):U(t)&&ps(t,e)?0:-1}const Pr=e=>e[0]==="_"||e==="$stable",jo=e=>H(e)?e.map(De):[De(e)],Zl=(e,t,n)=>{if(t._n)return t;const o=Zt((...s)=>jo(t(...s)),n);return o._c=!1,o},Ar=(e,t,n)=>{const o=e._ctx;for(const s in e){if(Pr(s))continue;const r=e[s];if(U(r))t[s]=Zl(s,r,o);else if(r!=null){const i=jo(r);t[s]=()=>i}}},jr=(e,t)=>{const n=jo(t);e.slots.default=()=>n},Ql=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),yn(t,"_",n)):Ar(t,e.slots={})}else e.slots={},t&&jr(e,t);yn(e.slots,Ln,1)},ec=(e,t,n)=>{const{vnode:o,slots:s}=e;let r=!0,i=re;if(o.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:(ae(s,t),!n&&l===1&&delete s._):(r=!t.$stable,Ar(t,s)),i=t}else t&&(jr(e,t),i={default:1});if(r)for(const l in s)!Pr(l)&&!(l in i)&&delete s[l]};function fo(e,t,n,o,s=!1){if(H(e)){e.forEach((x,j)=>fo(x,t&&(H(t)?t[j]:t),n,o,s));return}if(Ut(o)&&!s)return;const r=o.shapeFlag&4?Hn(o.component)||o.component.proxy:o.el,i=s?null:r,{i:l,r:c}=e,f=t&&t.r,d=l.refs===re?l.refs={}:l.refs,y=l.setupState;if(f!=null&&f!==c&&(fe(f)?(d[f]=null,W(y,f)&&(y[f]=null)):ye(f)&&(f.value=null)),U(c))rt(c,l,12,[i,d]);else{const x=fe(c),j=ye(c);if(x||j){const Y=()=>{if(e.f){const B=x?W(y,c)?y[c]:d[c]:c.value;s?H(B)&&go(B,r):H(B)?B.includes(r)||B.push(r):x?(d[c]=[r],W(y,c)&&(y[c]=d[c])):(c.value=[r],e.k&&(d[e.k]=c.value))}else x?(d[c]=i,W(y,c)&&(y[c]=i)):j&&(c.value=i,e.k&&(d[e.k]=i))};i?(Y.id=-1,Oe(Y,n)):Y()}}}const Oe=wl;function tc(e){return nc(e)}function nc(e,t){const n=eo();n.__VUE__=!0;const{insert:o,remove:s,patchProp:r,createElement:i,createText:l,createComment:c,setText:f,setElementText:d,parentNode:y,nextSibling:x,setScopeId:j=Le,insertStaticContent:Y}=e,B=(a,u,p,m=null,h=null,E=null,$=!1,_=null,S=!!u.dynamicChildren)=>{if(a===u)return;a&&!pt(a,u)&&(m=ct(a),ce(a,h,E,!0),a=null),u.patchFlag===-2&&(S=!1,u.dynamicChildren=null);const{type:g,ref:C,shapeFlag:M}=u;switch(g){case Bn:Q(a,u,p,m);break;case Ae:ne(a,u,p,m);break;case bn:a==null&&oe(u,p,m,$);break;case Se:A(a,u,p,m,h,E,$,_,S);break;default:M&1?ue(a,u,p,m,h,E,$,_,S):M&6?se(a,u,p,m,h,E,$,_,S):(M&64||M&128)&&g.process(a,u,p,m,h,E,$,_,S,Xe)}C!=null&&h&&fo(C,a&&a.ref,E,u||a,!u)},Q=(a,u,p,m)=>{if(a==null)o(u.el=l(u.children),p,m);else{const h=u.el=a.el;u.children!==a.children&&f(h,u.children)}},ne=(a,u,p,m)=>{a==null?o(u.el=c(u.children||""),p,m):u.el=a.el},oe=(a,u,p,m)=>{[a.el,a.anchor]=Y(a.children,u,p,m,a.el,a.anchor)},te=({el:a,anchor:u},p,m)=>{let h;for(;a&&a!==u;)h=x(a),o(a,p,m),a=h;o(u,p,m)},L=({el:a,anchor:u})=>{let p;for(;a&&a!==u;)p=x(a),s(a),a=p;s(u)},ue=(a,u,p,m,h,E,$,_,S)=>{$=$||u.type==="svg",a==null?Me(u,p,m,h,E,$,_,S):q(a,u,h,E,$,_,S)},Me=(a,u,p,m,h,E,$,_)=>{let S,g;const{type:C,props:M,shapeFlag:I,transition:z,dirs:X}=a;if(S=a.el=i(a.type,E,M&&M.is,M),I&8?d(S,a.children):I&16&&K(a.children,S,null,m,h,E&&C!=="foreignObject",$,_),X&&ft(a,null,m,"created"),Te(S,a,a.scopeId,$,m),M){for(const w in M)w!=="value"&&!pn(w)&&r(S,w,null,M[w],E,a.children,m,h,_e);"value"in M&&r(S,"value",null,M.value),(g=M.onVnodeBeforeMount)&&Fe(g,m,a)}X&&ft(a,null,m,"beforeMount");const v=(!h||h&&!h.pendingBranch)&&z&&!z.persisted;v&&z.beforeEnter(S),o(S,u,p),((g=M&&M.onVnodeMounted)||v||X)&&Oe(()=>{g&&Fe(g,m,a),v&&z.enter(S),X&&ft(a,null,m,"mounted")},h)},Te=(a,u,p,m,h)=>{if(p&&j(a,p),m)for(let E=0;E<m.length;E++)j(a,m[E]);if(h){let E=h.subTree;if(u===E){const $=h.vnode;Te(a,$,$.scopeId,$.slotScopeIds,h.parent)}}},K=(a,u,p,m,h,E,$,_,S=0)=>{for(let g=S;g<a.length;g++){const C=a[g]=_?nt(a[g]):De(a[g]);B(null,C,u,p,m,h,E,$,_)}},q=(a,u,p,m,h,E,$)=>{const _=u.el=a.el;let{patchFlag:S,dynamicChildren:g,dirs:C}=u;S|=a.patchFlag&16;const M=a.props||re,I=u.props||re;let z;p&&ut(p,!1),(z=I.onVnodeBeforeUpdate)&&Fe(z,p,u,a),C&&ft(u,a,p,"beforeUpdate"),p&&ut(p,!0);const X=h&&u.type!=="foreignObject";if(g?Z(a.dynamicChildren,g,_,p,m,X,E):$||O(a,u,_,null,p,m,X,E,!1),S>0){if(S&16)pe(_,u,M,I,p,m,h);else if(S&2&&M.class!==I.class&&r(_,"class",null,I.class,h),S&4&&r(_,"style",M.style,I.style,h),S&8){const v=u.dynamicProps;for(let w=0;w<v.length;w++){const k=v[w],D=M[k],le=I[k];(le!==D||k==="value")&&r(_,k,D,le,h,a.children,p,m,_e)}}S&1&&a.children!==u.children&&d(_,u.children)}else!$&&g==null&&pe(_,u,M,I,p,m,h);((z=I.onVnodeUpdated)||C)&&Oe(()=>{z&&Fe(z,p,u,a),C&&ft(u,a,p,"updated")},m)},Z=(a,u,p,m,h,E,$)=>{for(let _=0;_<u.length;_++){const S=a[_],g=u[_],C=S.el&&(S.type===Se||!pt(S,g)||S.shapeFlag&70)?y(S.el):p;B(S,g,C,null,m,h,E,$,!0)}},pe=(a,u,p,m,h,E,$)=>{if(p!==m){if(p!==re)for(const _ in p)!pn(_)&&!(_ in m)&&r(a,_,p[_],null,$,u.children,h,E,_e);for(const _ in m){if(pn(_))continue;const S=m[_],g=p[_];S!==g&&_!=="value"&&r(a,_,g,S,$,u.children,h,E,_e)}"value"in m&&r(a,"value",p.value,m.value)}},A=(a,u,p,m,h,E,$,_,S)=>{const g=u.el=a?a.el:l(""),C=u.anchor=a?a.anchor:l("");let{patchFlag:M,dynamicChildren:I,slotScopeIds:z}=u;z&&(_=_?_.concat(z):z),a==null?(o(g,p,m),o(C,p,m),K(u.children,p,C,h,E,$,_,S)):M>0&&M&64&&I&&a.dynamicChildren?(Z(a.dynamicChildren,I,p,h,E,$,_),(u.key!=null||h&&u===h.subTree)&&Rr(a,u,!0)):O(a,u,p,C,h,E,$,_,S)},se=(a,u,p,m,h,E,$,_,S)=>{u.slotScopeIds=_,a==null?u.shapeFlag&512?h.ctx.activate(u,p,m,$,S):xe(u,p,m,h,E,$,S):ze(a,u,S)},xe=(a,u,p,m,h,E,$)=>{const _=a.component=uc(a,m,h);if(Rn(a)&&(_.ctx.renderer=Xe),dc(_),_.asyncDep){if(h&&h.registerDep(_,de),!a.el){const S=_.subTree=G(Ae);ne(null,S,u,p)}return}de(_,a,u,p,h,E,$)},ze=(a,u,p)=>{const m=u.component=a.component;if(vl(a,u,p))if(m.asyncDep&&!m.asyncResolved){b(m,u,p);return}else m.next=u,_l(m.update),m.update();else u.el=a.el,m.vnode=u},de=(a,u,p,m,h,E,$)=>{const _=()=>{if(a.isMounted){let{next:C,bu:M,u:I,parent:z,vnode:X}=a,v=C,w;ut(a,!1),C?(C.el=X.el,b(a,C,$)):C=X,M&&Xn(M),(w=C.props&&C.props.onVnodeBeforeUpdate)&&Fe(w,z,C,X),ut(a,!0);const k=Yn(a),D=a.subTree;a.subTree=k,B(D,k,y(D.el),ct(D),a,h,E),C.el=k.el,v===null&&yl(a,k.el),I&&Oe(I,h),(w=C.props&&C.props.onVnodeUpdated)&&Oe(()=>Fe(w,z,C,X),h)}else{let C;const{el:M,props:I}=u,{bm:z,m:X,parent:v}=a,w=Ut(u);if(ut(a,!1),z&&Xn(z),!w&&(C=I&&I.onVnodeBeforeMount)&&Fe(C,v,u),ut(a,!0),M&&Bt){const k=()=>{a.subTree=Yn(a),Bt(M,a.subTree,a,h,null)};w?u.type.__asyncLoader().then(()=>!a.isUnmounted&&k()):k()}else{const k=a.subTree=Yn(a);B(null,k,p,m,a,h,E),u.el=k.el}if(X&&Oe(X,h),!w&&(C=I&&I.onVnodeMounted)){const k=u;Oe(()=>Fe(C,v,k),h)}(u.shapeFlag&256||v&&Ut(v.vnode)&&v.vnode.shapeFlag&256)&&a.a&&Oe(a.a,h),a.isMounted=!0,u=p=m=null}},S=a.effect=new xo(_,()=>To(g),a.scope),g=a.update=()=>S.run();g.id=a.uid,ut(a,!0),g()},b=(a,u,p)=>{u.component=a;const m=a.vnode.props;a.vnode=u,a.next=null,Gl(a,u.props,m,p),ec(a,u.children,p),At(),os(),jt()},O=(a,u,p,m,h,E,$,_,S=!1)=>{const g=a&&a.children,C=a?a.shapeFlag:0,M=u.children,{patchFlag:I,shapeFlag:z}=u;if(I>0){if(I&128){J(g,M,p,m,h,E,$,_,S);return}else if(I&256){F(g,M,p,m,h,E,$,_,S);return}}z&8?(C&16&&_e(g,h,E),M!==g&&d(p,M)):C&16?z&16?J(g,M,p,m,h,E,$,_,S):_e(g,h,E,!0):(C&8&&d(p,""),z&16&&K(M,p,m,h,E,$,_,S))},F=(a,u,p,m,h,E,$,_,S)=>{a=a||Ot,u=u||Ot;const g=a.length,C=u.length,M=Math.min(g,C);let I;for(I=0;I<M;I++){const z=u[I]=S?nt(u[I]):De(u[I]);B(a[I],z,p,null,h,E,$,_,S)}g>C?_e(a,h,E,!0,!1,M):K(u,p,m,h,E,$,_,S,M)},J=(a,u,p,m,h,E,$,_,S)=>{let g=0;const C=u.length;let M=a.length-1,I=C-1;for(;g<=M&&g<=I;){const z=a[g],X=u[g]=S?nt(u[g]):De(u[g]);if(pt(z,X))B(z,X,p,null,h,E,$,_,S);else break;g++}for(;g<=M&&g<=I;){const z=a[M],X=u[I]=S?nt(u[I]):De(u[I]);if(pt(z,X))B(z,X,p,null,h,E,$,_,S);else break;M--,I--}if(g>M){if(g<=I){const z=I+1,X=z<C?u[z].el:m;for(;g<=I;)B(null,u[g]=S?nt(u[g]):De(u[g]),p,X,h,E,$,_,S),g++}}else if(g>I)for(;g<=M;)ce(a[g],h,E,!0),g++;else{const z=g,X=g,v=new Map;for(g=X;g<=I;g++){const $e=u[g]=S?nt(u[g]):De(u[g]);$e.key!=null&&v.set($e.key,g)}let w,k=0;const D=I-X+1;let le=!1,Ie=0;const at=new Array(D);for(g=0;g<D;g++)at[g]=0;for(g=z;g<=M;g++){const $e=a[g];if(k>=D){ce($e,h,E,!0);continue}let He;if($e.key!=null)He=v.get($e.key);else for(w=X;w<=I;w++)if(at[w-X]===0&&pt($e,u[w])){He=w;break}He===void 0?ce($e,h,E,!0):(at[He-X]=g+1,He>=Ie?Ie=He:le=!0,B($e,u[He],p,null,h,E,$,_,S),k++)}const rn=le?oc(at):Ot;for(w=rn.length-1,g=D-1;g>=0;g--){const $e=X+g,He=u[$e],Vo=$e+1<C?u[$e+1].el:m;at[g]===0?B(null,He,p,Vo,h,E,$,_,S):le&&(w<0||g!==rn[w]?ee(He,p,Vo,2):w--)}}},ee=(a,u,p,m,h=null)=>{const{el:E,type:$,transition:_,children:S,shapeFlag:g}=a;if(g&6){ee(a.component.subTree,u,p,m);return}if(g&128){a.suspense.move(u,p,m);return}if(g&64){$.move(a,u,p,Xe);return}if($===Se){o(E,u,p);for(let M=0;M<S.length;M++)ee(S[M],u,p,m);o(a.anchor,u,p);return}if($===bn){te(a,u,p);return}if(m!==2&&g&1&&_)if(m===0)_.beforeEnter(E),o(E,u,p),Oe(()=>_.enter(E),h);else{const{leave:M,delayLeave:I,afterLeave:z}=_,X=()=>o(E,u,p),v=()=>{M(E,()=>{X(),z&&z()})};I?I(E,X,v):v()}else o(E,u,p)},ce=(a,u,p,m=!1,h=!1)=>{const{type:E,props:$,ref:_,children:S,dynamicChildren:g,shapeFlag:C,patchFlag:M,dirs:I}=a;if(_!=null&&fo(_,null,p,a,!0),C&256){u.ctx.deactivate(a);return}const z=C&1&&I,X=!Ut(a);let v;if(X&&(v=$&&$.onVnodeBeforeUnmount)&&Fe(v,u,a),C&6)we(a.component,p,m);else{if(C&128){a.suspense.unmount(p,m);return}z&&ft(a,null,u,"beforeUnmount"),C&64?a.type.remove(a,u,p,h,Xe,m):g&&(E!==Se||M>0&&M&64)?_e(g,u,p,!1,!0):(E===Se&&M&384||!h&&C&16)&&_e(S,u,p),m&&je(a)}(X&&(v=$&&$.onVnodeUnmounted)||z)&&Oe(()=>{v&&Fe(v,u,a),z&&ft(a,null,u,"unmounted")},p)},je=a=>{const{type:u,el:p,anchor:m,transition:h}=a;if(u===Se){xt(p,m);return}if(u===bn){L(a);return}const E=()=>{s(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(a.shapeFlag&1&&h&&!h.persisted){const{leave:$,delayLeave:_}=h,S=()=>$(p,E);_?_(a.el,E,S):S()}else E()},xt=(a,u)=>{let p;for(;a!==u;)p=x(a),s(a),a=p;s(u)},we=(a,u,p)=>{const{bum:m,scope:h,update:E,subTree:$,um:_}=a;m&&Xn(m),h.stop(),E&&(E.active=!1,ce($,a,u,p)),_&&Oe(_,u),Oe(()=>{a.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},_e=(a,u,p,m=!1,h=!1,E=0)=>{for(let $=E;$<a.length;$++)ce(a[$],u,p,m,h)},ct=a=>a.shapeFlag&6?ct(a.component.subTree):a.shapeFlag&128?a.suspense.next():x(a.anchor||a.el),Rt=(a,u,p)=>{a==null?u._vnode&&ce(u._vnode,null,null,!0):B(u._vnode||null,a,u,null,null,null,p),os(),_r(),u._vnode=a},Xe={p:B,um:ce,m:ee,r:je,mt:xe,mc:K,pc:O,pbc:Z,n:ct,o:e};let Nt,Bt;return t&&([Nt,Bt]=t(Xe)),{render:Rt,hydrate:Nt,createApp:Vl(Rt,Nt)}}function ut({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Rr(e,t,n=!1){const o=e.children,s=t.children;if(H(o)&&H(s))for(let r=0;r<o.length;r++){const i=o[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=nt(s[r]),l.el=i.el),n||Rr(i,l)),l.type===Bn&&(l.el=i.el)}}function oc(e){const t=e.slice(),n=[0];let o,s,r,i,l;const c=e.length;for(o=0;o<c;o++){const f=e[o];if(f!==0){if(s=n[n.length-1],e[s]<f){t[o]=s,n.push(o);continue}for(r=0,i=n.length-1;r<i;)l=r+i>>1,e[n[l]]<f?r=l+1:i=l;f<e[n[r]]&&(r>0&&(t[o]=n[r-1]),n[r]=o)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}const sc=e=>e.__isTeleport,Se=Symbol.for("v-fgt"),Bn=Symbol.for("v-txt"),Ae=Symbol.for("v-cmt"),bn=Symbol.for("v-stc"),Xt=[];let Be=null;function T(e=!1){Xt.push(Be=e?null:[])}function rc(){Xt.pop(),Be=Xt[Xt.length-1]||null}let tn=1;function gs(e){tn+=e}function Nr(e){return e.dynamicChildren=tn>0?Be||Ot:null,rc(),tn>0&&Be&&Be.push(e),e}function P(e,t,n,o,s,r){return Nr(R(e,t,n,o,s,r,!0))}function Mt(e,t,n,o,s){return Nr(G(e,t,n,o,s,!0))}function Sn(e){return e?e.__v_isVNode===!0:!1}function pt(e,t){return e.type===t.type&&e.key===t.key}const Ln="__vInternal",Br=({key:e})=>e??null,mn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?fe(e)||ye(e)||U(e)?{i:ge,r:e,k:t,f:!!n}:e:null);function R(e,t=null,n=null,o=0,s=null,r=e===Se?0:1,i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Br(t),ref:t&&mn(t),scopeId:jn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ge};return l?(No(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=fe(n)?8:16),tn>0&&!i&&Be&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Be.push(c),c}const G=ic;function ic(e,t=null,n=null,o=0,s=null,r=!1){if((!e||e===Cr)&&(e=Ae),Sn(e)){const l=lt(e,t,!0);return n&&No(l,n),tn>0&&!r&&Be&&(l.shapeFlag&6?Be[Be.indexOf(e)]=l:Be.push(l)),l.patchFlag|=-2,l}if(bc(e)&&(e=e.__vccOpts),t){t=lc(t);let{class:l,style:c}=t;l&&!fe(l)&&(t.class=Vt(l)),ie(c)&&(ir(c)&&!H(c)&&(c=ae({},c)),t.style=vo(c))}const i=fe(e)?1:xl(e)?128:sc(e)?64:ie(e)?4:U(e)?2:0;return R(e,t,n,o,s,i,r,!0)}function lc(e){return e?ir(e)||Ln in e?ae({},e):e:null}function lt(e,t,n=!1){const{props:o,ref:s,patchFlag:r,children:i}=e,l=t?cc(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Br(l),ref:t&&t.ref?n&&s?H(s)?s.concat(mn(t)):[s,mn(t)]:mn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&lt(e.ssContent),ssFallback:e.ssFallback&&lt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ro(e=" ",t=0){return G(Bn,null,e,t)}function zn(e,t){const n=G(bn,null,e);return n.staticCount=t,n}function bs(e="",t=!1){return t?(T(),Mt(Ae,null,e)):G(Ae,null,e)}function De(e){return e==null||typeof e=="boolean"?G(Ae):H(e)?G(Se,null,e.slice()):typeof e=="object"?nt(e):G(Bn,null,String(e))}function nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:lt(e)}function No(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),No(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Ln in t)?t._ctx=ge:s===3&&ge&&(ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:ge},n=32):(t=String(t),o&64?(n=16,t=[Ro(t)]):n=8);e.children=t,e.shapeFlag|=n}function cc(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=Vt([t.class,o.class]));else if(s==="style")t.style=vo([t.style,o.style]);else if($n(s)){const r=t[s],i=o[s];i&&r!==i&&!(H(r)&&r.includes(i))&&(t[s]=r?[].concat(r,i):i)}else s!==""&&(t[s]=o[s])}return t}function Fe(e,t,n,o=null){Pe(e,t,7,[n,o])}const ac=Tr();let fc=0;function uc(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||ac,r={uid:fc++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new $i(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kr(o,s),emitsOptions:hr(o,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:o.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=gl.bind(null,r),e.ce&&e.ce(r),r}let he=null;const Lr=()=>he||ge;let Bo,wt,ms="__VUE_INSTANCE_SETTERS__";(wt=eo()[ms])||(wt=eo()[ms]=[]),wt.push(e=>he=e),Bo=e=>{wt.length>1?wt.forEach(t=>t(e)):wt[0](e)};const It=e=>{Bo(e),e.scope.on()},mt=()=>{he&&he.scope.off(),Bo(null)};function zr(e){return e.vnode.shapeFlag&4}let nn=!1;function dc(e,t=!1){nn=t;const{props:n,children:o}=e.vnode,s=zr(e);Jl(e,n,s,t),Ql(e,o);const r=s?_c(e,t):void 0;return nn=!1,r}function _c(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=lr(new Proxy(e.ctx,Fl));const{setup:o}=n;if(o){const s=e.setupContext=o.length>1?hc(e):null;It(e),At();const r=rt(o,e,0,[e.props,s]);if(jt(),mt(),Us(r)){if(r.then(mt,mt),t)return r.then(i=>{vs(e,i,t)}).catch(i=>{Pn(i,e,0)});e.asyncDep=r}else vs(e,r,t)}else Hr(e,t)}function vs(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ie(t)&&(e.setupState=fr(t)),Hr(e,n)}let ys;function Hr(e,t,n){const o=e.type;if(!e.render){if(!t&&ys&&!o.render){const s=o.template||Ao(e).template;if(s){const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:c}=o,f=ae(ae({isCustomElement:r,delimiters:l},i),c);o.render=ys(s,f)}}e.render=o.render||Le}It(e),At(),Dl(e),jt(),mt()}function pc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ce(e,"get","$attrs"),t[n]}}))}function hc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return pc(e)},slots:e.slots,emit:e.emit,expose:t}}function Hn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(fr(lr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Kt)return Kt[n](e)},has(t,n){return n in t||n in Kt}}))}function gc(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function bc(e){return U(e)&&"__vccOpts"in e}const Dt=(e,t)=>al(e,t,nn);function uo(e,t,n){const o=arguments.length;return o===2?ie(t)&&!H(t)?Sn(t)?G(e,null,[t]):G(e,t):G(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Sn(n)&&(n=[n]),G(e,t,n))}const mc=Symbol.for("v-scx"),vc=()=>gn(mc),yc="3.3.4",xc="http://www.w3.org/2000/svg",ht=typeof document<"u"?document:null,xs=ht&&ht.createElement("template"),wc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t?ht.createElementNS(xc,e):ht.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>ht.createTextNode(e),createComment:e=>ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,s,r){const i=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{xs.innerHTML=o?`<svg>${e}</svg>`:e;const l=xs.content;if(o){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ec(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Oc(e,t,n){const o=e.style,s=fe(n);if(n&&!s){if(t&&!fe(t))for(const r in t)n[r]==null&&_o(o,r,"");for(const r in n)_o(o,r,n[r])}else{const r=o.display;s?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const ws=/\s*!important$/;function _o(e,t,n){if(H(n))n.forEach(o=>_o(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Sc(e,t);ws.test(n)?e.setProperty(Pt(o),n.replace(ws,""),"important"):e[o]=n}}const Es=["Webkit","Moz","ms"],qn={};function Sc(e,t){const n=qn[t];if(n)return n;let o=Ke(t);if(o!=="filter"&&o in e)return qn[t]=o;o=In(o);for(let s=0;s<Es.length;s++){const r=Es[s]+o;if(r in e)return qn[t]=r}return t}const Os="http://www.w3.org/1999/xlink";function Cc(e,t,n,o,s){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Os,t.slice(6,t.length)):e.setAttributeNS(Os,t,n);else{const r=Ci(t);n==null||r&&!Ys(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function $c(e,t,n,o,s,r,i){if(t==="innerHTML"||t==="textContent"){o&&i(o,s,r),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const f=l==="OPTION"?e.getAttribute("value"):e.value,d=n??"";f!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Ys(n):n==null&&f==="string"?(n="",c=!0):f==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Mc(e,t,n,o){e.addEventListener(t,n,o)}function Tc(e,t,n,o){e.removeEventListener(t,n,o)}function Ic(e,t,n,o,s=null){const r=e._vei||(e._vei={}),i=r[t];if(o&&i)i.value=o;else{const[l,c]=kc(t);if(o){const f=r[t]=jc(o,s);Mc(e,l,f,c)}else i&&(Tc(e,l,i,c),r[t]=void 0)}}const Ss=/(?:Once|Passive|Capture)$/;function kc(e){let t;if(Ss.test(e)){t={};let o;for(;o=e.match(Ss);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Pt(e.slice(2)),t]}let Jn=0;const Pc=Promise.resolve(),Ac=()=>Jn||(Pc.then(()=>Jn=0),Jn=Date.now());function jc(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;Pe(Rc(o,n.value),t,5,[o])};return n.value=e,n.attached=Ac(),n}function Rc(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const Cs=/^on[a-z]/,Nc=(e,t,n,o,s=!1,r,i,l,c)=>{t==="class"?Ec(e,o,s):t==="style"?Oc(e,n,o):$n(t)?ho(t)||Ic(e,t,n,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Bc(e,t,o,s))?$c(e,t,o,r,i,l,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Cc(e,t,o,s))};function Bc(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&Cs.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Cs.test(t)&&fe(n)?!1:t in e}const Qe="transition",Lt="animation",Fn=(e,{slots:t})=>uo(Sl,Dr(e),t);Fn.displayName="Transition";const Fr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Lc=Fn.props=ae({},vr,Fr),dt=(e,t=[])=>{H(e)?e.forEach(n=>n(...t)):e&&e(...t)},$s=e=>e?H(e)?e.some(t=>t.length>1):e.length>1:!1;function Dr(e){const t={};for(const A in e)A in Fr||(t[A]=e[A]);if(e.css===!1)return t;const{name:n="v",type:o,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:f=i,appearToClass:d=l,leaveFromClass:y=`${n}-leave-from`,leaveActiveClass:x=`${n}-leave-active`,leaveToClass:j=`${n}-leave-to`}=e,Y=zc(s),B=Y&&Y[0],Q=Y&&Y[1],{onBeforeEnter:ne,onEnter:oe,onEnterCancelled:te,onLeave:L,onLeaveCancelled:ue,onBeforeAppear:Me=ne,onAppear:Te=oe,onAppearCancelled:K=te}=t,q=(A,se,xe)=>{tt(A,se?d:l),tt(A,se?f:i),xe&&xe()},Z=(A,se)=>{A._isLeaving=!1,tt(A,y),tt(A,j),tt(A,x),se&&se()},pe=A=>(se,xe)=>{const ze=A?Te:oe,de=()=>q(se,A,xe);dt(ze,[se,de]),Ms(()=>{tt(se,A?c:r),Ye(se,A?d:l),$s(ze)||Ts(se,o,B,de)})};return ae(t,{onBeforeEnter(A){dt(ne,[A]),Ye(A,r),Ye(A,i)},onBeforeAppear(A){dt(Me,[A]),Ye(A,c),Ye(A,f)},onEnter:pe(!1),onAppear:pe(!0),onLeave(A,se){A._isLeaving=!0;const xe=()=>Z(A,se);Ye(A,y),Kr(),Ye(A,x),Ms(()=>{A._isLeaving&&(tt(A,y),Ye(A,j),$s(L)||Ts(A,o,Q,xe))}),dt(L,[A,xe])},onEnterCancelled(A){q(A,!1),dt(te,[A])},onAppearCancelled(A){q(A,!0),dt(K,[A])},onLeaveCancelled(A){Z(A),dt(ue,[A])}})}function zc(e){if(e==null)return null;if(ie(e))return[Gn(e.enter),Gn(e.leave)];{const t=Gn(e);return[t,t]}}function Gn(e){return yi(e)}function Ye(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function tt(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Ms(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Hc=0;function Ts(e,t,n,o){const s=e._endId=++Hc,r=()=>{s===e._endId&&o()};if(n)return setTimeout(r,n);const{type:i,timeout:l,propCount:c}=Ur(e,t);if(!i)return o();const f=i+"end";let d=0;const y=()=>{e.removeEventListener(f,x),r()},x=j=>{j.target===e&&++d>=c&&y()};setTimeout(()=>{d<c&&y()},l+1),e.addEventListener(f,x)}function Ur(e,t){const n=window.getComputedStyle(e),o=Y=>(n[Y]||"").split(", "),s=o(`${Qe}Delay`),r=o(`${Qe}Duration`),i=Is(s,r),l=o(`${Lt}Delay`),c=o(`${Lt}Duration`),f=Is(l,c);let d=null,y=0,x=0;t===Qe?i>0&&(d=Qe,y=i,x=r.length):t===Lt?f>0&&(d=Lt,y=f,x=c.length):(y=Math.max(i,f),d=y>0?i>f?Qe:Lt:null,x=d?d===Qe?r.length:c.length:0);const j=d===Qe&&/\b(transform|all)(,|$)/.test(o(`${Qe}Property`).toString());return{type:d,timeout:y,propCount:x,hasTransform:j}}function Is(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>ks(n)+ks(e[o])))}function ks(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Kr(){return document.body.offsetHeight}const Xr=new WeakMap,Yr=new WeakMap,Wr={name:"TransitionGroup",props:ae({},Lc,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Lr(),o=mr();let s,r;return Er(()=>{if(!s.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!Yc(s[0].el,n.vnode.el,i))return;s.forEach(Uc),s.forEach(Kc);const l=s.filter(Xc);Kr(),l.forEach(c=>{const f=c.el,d=f.style;Ye(f,i),d.transform=d.webkitTransform=d.transitionDuration="";const y=f._moveCb=x=>{x&&x.target!==f||(!x||/transform$/.test(x.propertyName))&&(f.removeEventListener("transitionend",y),f._moveCb=null,tt(f,i))};f.addEventListener("transitionend",y)})}),()=>{const i=V(e),l=Dr(i);let c=i.tag||Se;s=r,r=t.default?Io(t.default()):[];for(let f=0;f<r.length;f++){const d=r[f];d.key!=null&&en(d,Qt(d,l,o,n))}if(s)for(let f=0;f<s.length;f++){const d=s[f];en(d,Qt(d,l,o,n)),Xr.set(d,d.el.getBoundingClientRect())}return G(c,null,r)}}},Fc=e=>delete e.mode;Wr.props;const Dc=Wr;function Uc(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Kc(e){Yr.set(e,e.el.getBoundingClientRect())}function Xc(e){const t=Xr.get(e),n=Yr.get(e),o=t.left-n.left,s=t.top-n.top;if(o||s){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${s}px)`,r.transitionDuration="0s",e}}function Yc(e,t,n){const o=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(l=>l&&o.classList.remove(l))}),n.split(/\s+/).forEach(i=>i&&o.classList.add(i)),o.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(o);const{hasTransform:r}=Ur(o);return s.removeChild(o),r}const Wc=["ctrl","shift","alt","meta"],Vc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Wc.some(n=>e[`${n}Key`]&&!t.includes(n))},qc=(e,t)=>(n,...o)=>{for(let s=0;s<t.length;s++){const r=Vc[t[s]];if(r&&r(n,t))return}return e(n,...o)},Jc={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):zt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),zt(e,!0),o.enter(e)):o.leave(e,()=>{zt(e,!1)}):zt(e,t))},beforeUnmount(e,{value:t}){zt(e,t)}};function zt(e,t){e.style.display=t?e._vod:"none"}const Gc=ae({patchProp:Nc},wc);let Ps;function Zc(){return Ps||(Ps=tc(Gc))}const Qc=(...e)=>{const t=Zc().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=ea(o);if(!s)return;const r=t._component;!U(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function ea(e){return fe(e)?document.querySelector(e):e}function ta(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Vr(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],o=typeof n;(o==="object"||o==="function")&&!Object.isFrozen(n)&&Vr(n)}),e}class As{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function qr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function ot(e,...t){const n=Object.create(null);for(const o in e)n[o]=e[o];return t.forEach(function(o){for(const s in o)n[s]=o[s]}),n}const na="</span>",js=e=>!!e.scope,oa=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((o,s)=>`${o}${"_".repeat(s+1)}`)].join(" ")}return`${t}${e}`};class sa{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=qr(t)}openNode(t){if(!js(t))return;const n=oa(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){js(t)&&(this.buffer+=na)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Rs=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class Lo{constructor(){this.rootNode=Rs(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=Rs({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(o=>this._walk(t,o)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{Lo._collapse(n)}))}}class ra extends Lo{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const o=t.root;n&&(o.scope=`language:${n}`),this.add(o)}toHTML(){return new sa(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function on(e){return e?typeof e=="string"?e:e.source:null}function Jr(e){return yt("(?=",e,")")}function ia(e){return yt("(?:",e,")*")}function la(e){return yt("(?:",e,")?")}function yt(...e){return e.map(n=>on(n)).join("")}function ca(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function zo(...e){return"("+(ca(e).capture?"":"?:")+e.map(o=>on(o)).join("|")+")"}function Gr(e){return new RegExp(e.toString()+"|").exec("").length-1}function aa(e,t){const n=e&&e.exec(t);return n&&n.index===0}const fa=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Ho(e,{joinWith:t}){let n=0;return e.map(o=>{n+=1;const s=n;let r=on(o),i="";for(;r.length>0;){const l=fa.exec(r);if(!l){i+=r;break}i+=r.substring(0,l.index),r=r.substring(l.index+l[0].length),l[0][0]==="\\"&&l[1]?i+="\\"+String(Number(l[1])+s):(i+=l[0],l[0]==="("&&n++)}return i}).map(o=>`(${o})`).join(t)}const ua=/\b\B/,Zr="[a-zA-Z]\\w*",Fo="[a-zA-Z_]\\w*",Qr="\\b\\d+(\\.\\d+)?",ei="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ti="\\b(0b[01]+)",da="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",_a=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=yt(t,/.*\b/,e.binary,/\b.*/)),ot({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,o)=>{n.index!==0&&o.ignoreMatch()}},e)},sn={begin:"\\\\[\\s\\S]",relevance:0},pa={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[sn]},ha={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[sn]},ga={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Dn=function(e,t,n={}){const o=ot({scope:"comment",begin:e,end:t,contains:[]},n);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const s=zo("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:yt(/[ ]+/,"(",s,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},ba=Dn("//","$"),ma=Dn("/\\*","\\*/"),va=Dn("#","$"),ya={scope:"number",begin:Qr,relevance:0},xa={scope:"number",begin:ei,relevance:0},wa={scope:"number",begin:ti,relevance:0},Ea={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[sn,{begin:/\[/,end:/\]/,relevance:0,contains:[sn]}]}]},Oa={scope:"title",begin:Zr,relevance:0},Sa={scope:"title",begin:Fo,relevance:0},Ca={begin:"\\.\\s*"+Fo,relevance:0},$a=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var _n=Object.freeze({__proto__:null,MATCH_NOTHING_RE:ua,IDENT_RE:Zr,UNDERSCORE_IDENT_RE:Fo,NUMBER_RE:Qr,C_NUMBER_RE:ei,BINARY_NUMBER_RE:ti,RE_STARTERS_RE:da,SHEBANG:_a,BACKSLASH_ESCAPE:sn,APOS_STRING_MODE:pa,QUOTE_STRING_MODE:ha,PHRASAL_WORDS_MODE:ga,COMMENT:Dn,C_LINE_COMMENT_MODE:ba,C_BLOCK_COMMENT_MODE:ma,HASH_COMMENT_MODE:va,NUMBER_MODE:ya,C_NUMBER_MODE:xa,BINARY_NUMBER_MODE:wa,REGEXP_MODE:Ea,TITLE_MODE:Oa,UNDERSCORE_TITLE_MODE:Sa,METHOD_GUARD:Ca,END_SAME_AS_BEGIN:$a});function Ma(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function Ta(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Ia(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Ma,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function ka(e,t){Array.isArray(e.illegal)&&(e.illegal=zo(...e.illegal))}function Pa(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Aa(e,t){e.relevance===void 0&&(e.relevance=1)}const ja=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(o=>{delete e[o]}),e.keywords=n.keywords,e.begin=yt(n.beforeMatch,Jr(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},Ra=["of","and","for","in","not","or","if","then","parent","list","value"],Na="keyword";function ni(e,t,n=Na){const o=Object.create(null);return typeof e=="string"?s(n,e.split(" ")):Array.isArray(e)?s(n,e):Object.keys(e).forEach(function(r){Object.assign(o,ni(e[r],t,r))}),o;function s(r,i){t&&(i=i.map(l=>l.toLowerCase())),i.forEach(function(l){const c=l.split("|");o[c[0]]=[r,Ba(c[0],c[1])]})}}function Ba(e,t){return t?Number(t):La(e)?0:1}function La(e){return Ra.includes(e.toLowerCase())}const Ns={},vt=e=>{console.error(e)},Bs=(e,...t)=>{console.log(`WARN: ${e}`,...t)},Et=(e,t)=>{Ns[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Ns[`${e}/${t}`]=!0)},Cn=new Error;function oi(e,t,{key:n}){let o=0;const s=e[n],r={},i={};for(let l=1;l<=t.length;l++)i[l+o]=s[l],r[l+o]=!0,o+=Gr(t[l-1]);e[n]=i,e[n]._emit=r,e[n]._multi=!0}function za(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw vt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Cn;if(typeof e.beginScope!="object"||e.beginScope===null)throw vt("beginScope must be object"),Cn;oi(e,e.begin,{key:"beginScope"}),e.begin=Ho(e.begin,{joinWith:""})}}function Ha(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw vt("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Cn;if(typeof e.endScope!="object"||e.endScope===null)throw vt("endScope must be object"),Cn;oi(e,e.end,{key:"endScope"}),e.end=Ho(e.end,{joinWith:""})}}function Fa(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Da(e){Fa(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),za(e),Ha(e)}function Ua(e){function t(i,l){return new RegExp(on(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(l?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(l,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,l]),this.matchAt+=Gr(l)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const l=this.regexes.map(c=>c[1]);this.matcherRe=t(Ho(l,{joinWith:"|"}),!0),this.lastIndex=0}exec(l){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(l);if(!c)return null;const f=c.findIndex((y,x)=>x>0&&y!==void 0),d=this.matchIndexes[f];return c.splice(0,f),Object.assign(c,d)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(l){if(this.multiRegexes[l])return this.multiRegexes[l];const c=new n;return this.rules.slice(l).forEach(([f,d])=>c.addRule(f,d)),c.compile(),this.multiRegexes[l]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(l,c){this.rules.push([l,c]),c.type==="begin"&&this.count++}exec(l){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let f=c.exec(l);if(this.resumingScanAtSamePosition()&&!(f&&f.index===this.lastIndex)){const d=this.getMatcher(0);d.lastIndex=this.lastIndex+1,f=d.exec(l)}return f&&(this.regexIndex+=f.position+1,this.regexIndex===this.count&&this.considerAll()),f}}function s(i){const l=new o;return i.contains.forEach(c=>l.addRule(c.begin,{rule:c,type:"begin"})),i.terminatorEnd&&l.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&l.addRule(i.illegal,{type:"illegal"}),l}function r(i,l){const c=i;if(i.isCompiled)return c;[Ta,Pa,Da,ja].forEach(d=>d(i,l)),e.compilerExtensions.forEach(d=>d(i,l)),i.__beforeBegin=null,[Ia,ka,Aa].forEach(d=>d(i,l)),i.isCompiled=!0;let f=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),f=i.keywords.$pattern,delete i.keywords.$pattern),f=f||/\w+/,i.keywords&&(i.keywords=ni(i.keywords,e.case_insensitive)),c.keywordPatternRe=t(f,!0),l&&(i.begin||(i.begin=/\B|\b/),c.beginRe=t(c.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(c.endRe=t(c.end)),c.terminatorEnd=on(c.end)||"",i.endsWithParent&&l.terminatorEnd&&(c.terminatorEnd+=(i.end?"|":"")+l.terminatorEnd)),i.illegal&&(c.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(d){return Ka(d==="self"?i:d)})),i.contains.forEach(function(d){r(d,c)}),i.starts&&r(i.starts,l),c.matcher=s(c),c}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=ot(e.classNameAliases||{}),r(e)}function si(e){return e?e.endsWithParent||si(e.starts):!1}function Ka(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return ot(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:si(e)?ot(e,{starts:e.starts?ot(e.starts):null}):Object.isFrozen(e)?ot(e):e}var Xa="11.8.0";class Ya extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const Zn=qr,Ls=ot,zs=Symbol("nomatch"),Wa=7,ri=function(e){const t=Object.create(null),n=Object.create(null),o=[];let s=!0;const r="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:ra};function c(b){return l.noHighlightRe.test(b)}function f(b){let O=b.className+" ";O+=b.parentNode?b.parentNode.className:"";const F=l.languageDetectRe.exec(O);if(F){const J=q(F[1]);return J||(Bs(r.replace("{}",F[1])),Bs("Falling back to no-highlight mode for this block.",b)),J?F[1]:"no-highlight"}return O.split(/\s+/).find(J=>c(J)||q(J))}function d(b,O,F){let J="",ee="";typeof O=="object"?(J=b,F=O.ignoreIllegals,ee=O.language):(Et("10.7.0","highlight(lang, code, ...args) has been deprecated."),Et("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),ee=b,J=O),F===void 0&&(F=!0);const ce={code:J,language:ee};ze("before:highlight",ce);const je=ce.result?ce.result:y(ce.language,ce.code,F);return je.code=ce.code,ze("after:highlight",je),je}function y(b,O,F,J){const ee=Object.create(null);function ce(v,w){return v.keywords[w]}function je(){if(!_.keywords){g.addText(C);return}let v=0;_.keywordPatternRe.lastIndex=0;let w=_.keywordPatternRe.exec(C),k="";for(;w;){k+=C.substring(v,w.index);const D=h.case_insensitive?w[0].toLowerCase():w[0],le=ce(_,D);if(le){const[Ie,at]=le;if(g.addText(k),k="",ee[D]=(ee[D]||0)+1,ee[D]<=Wa&&(M+=at),Ie.startsWith("_"))k+=w[0];else{const rn=h.classNameAliases[Ie]||Ie;_e(w[0],rn)}}else k+=w[0];v=_.keywordPatternRe.lastIndex,w=_.keywordPatternRe.exec(C)}k+=C.substring(v),g.addText(k)}function xt(){if(C==="")return;let v=null;if(typeof _.subLanguage=="string"){if(!t[_.subLanguage]){g.addText(C);return}v=y(_.subLanguage,C,!0,S[_.subLanguage]),S[_.subLanguage]=v._top}else v=j(C,_.subLanguage.length?_.subLanguage:null);_.relevance>0&&(M+=v.relevance),g.__addSublanguage(v._emitter,v.language)}function we(){_.subLanguage!=null?xt():je(),C=""}function _e(v,w){v!==""&&(g.startScope(w),g.addText(v),g.endScope())}function ct(v,w){let k=1;const D=w.length-1;for(;k<=D;){if(!v._emit[k]){k++;continue}const le=h.classNameAliases[v[k]]||v[k],Ie=w[k];le?_e(Ie,le):(C=Ie,je(),C=""),k++}}function Rt(v,w){return v.scope&&typeof v.scope=="string"&&g.openNode(h.classNameAliases[v.scope]||v.scope),v.beginScope&&(v.beginScope._wrap?(_e(C,h.classNameAliases[v.beginScope._wrap]||v.beginScope._wrap),C=""):v.beginScope._multi&&(ct(v.beginScope,w),C="")),_=Object.create(v,{parent:{value:_}}),_}function Xe(v,w,k){let D=aa(v.endRe,k);if(D){if(v["on:end"]){const le=new As(v);v["on:end"](w,le),le.isMatchIgnored&&(D=!1)}if(D){for(;v.endsParent&&v.parent;)v=v.parent;return v}}if(v.endsWithParent)return Xe(v.parent,w,k)}function Nt(v){return _.matcher.regexIndex===0?(C+=v[0],1):(X=!0,0)}function Bt(v){const w=v[0],k=v.rule,D=new As(k),le=[k.__beforeBegin,k["on:begin"]];for(const Ie of le)if(Ie&&(Ie(v,D),D.isMatchIgnored))return Nt(w);return k.skip?C+=w:(k.excludeBegin&&(C+=w),we(),!k.returnBegin&&!k.excludeBegin&&(C=w)),Rt(k,v),k.returnBegin?0:w.length}function a(v){const w=v[0],k=O.substring(v.index),D=Xe(_,v,k);if(!D)return zs;const le=_;_.endScope&&_.endScope._wrap?(we(),_e(w,_.endScope._wrap)):_.endScope&&_.endScope._multi?(we(),ct(_.endScope,v)):le.skip?C+=w:(le.returnEnd||le.excludeEnd||(C+=w),we(),le.excludeEnd&&(C=w));do _.scope&&g.closeNode(),!_.skip&&!_.subLanguage&&(M+=_.relevance),_=_.parent;while(_!==D.parent);return D.starts&&Rt(D.starts,v),le.returnEnd?0:w.length}function u(){const v=[];for(let w=_;w!==h;w=w.parent)w.scope&&v.unshift(w.scope);v.forEach(w=>g.openNode(w))}let p={};function m(v,w){const k=w&&w[0];if(C+=v,k==null)return we(),0;if(p.type==="begin"&&w.type==="end"&&p.index===w.index&&k===""){if(C+=O.slice(w.index,w.index+1),!s){const D=new Error(`0 width match regex (${b})`);throw D.languageName=b,D.badRule=p.rule,D}return 1}if(p=w,w.type==="begin")return Bt(w);if(w.type==="illegal"&&!F){const D=new Error('Illegal lexeme "'+k+'" for mode "'+(_.scope||"<unnamed>")+'"');throw D.mode=_,D}else if(w.type==="end"){const D=a(w);if(D!==zs)return D}if(w.type==="illegal"&&k==="")return 1;if(z>1e5&&z>w.index*3)throw new Error("potential infinite loop, way more iterations than matches");return C+=k,k.length}const h=q(b);if(!h)throw vt(r.replace("{}",b)),new Error('Unknown language: "'+b+'"');const E=Ua(h);let $="",_=J||E;const S={},g=new l.__emitter(l);u();let C="",M=0,I=0,z=0,X=!1;try{if(h.__emitTokens)h.__emitTokens(O,g);else{for(_.matcher.considerAll();;){z++,X?X=!1:_.matcher.considerAll(),_.matcher.lastIndex=I;const v=_.matcher.exec(O);if(!v)break;const w=O.substring(I,v.index),k=m(w,v);I=v.index+k}m(O.substring(I))}return g.finalize(),$=g.toHTML(),{language:b,value:$,relevance:M,illegal:!1,_emitter:g,_top:_}}catch(v){if(v.message&&v.message.includes("Illegal"))return{language:b,value:Zn(O),illegal:!0,relevance:0,_illegalBy:{message:v.message,index:I,context:O.slice(I-100,I+100),mode:v.mode,resultSoFar:$},_emitter:g};if(s)return{language:b,value:Zn(O),illegal:!1,relevance:0,errorRaised:v,_emitter:g,_top:_};throw v}}function x(b){const O={value:Zn(b),illegal:!1,relevance:0,_top:i,_emitter:new l.__emitter(l)};return O._emitter.addText(b),O}function j(b,O){O=O||l.languages||Object.keys(t);const F=x(b),J=O.filter(q).filter(pe).map(we=>y(we,b,!1));J.unshift(F);const ee=J.sort((we,_e)=>{if(we.relevance!==_e.relevance)return _e.relevance-we.relevance;if(we.language&&_e.language){if(q(we.language).supersetOf===_e.language)return 1;if(q(_e.language).supersetOf===we.language)return-1}return 0}),[ce,je]=ee,xt=ce;return xt.secondBest=je,xt}function Y(b,O,F){const J=O&&n[O]||F;b.classList.add("hljs"),b.classList.add(`language-${J}`)}function B(b){let O=null;const F=f(b);if(c(F))return;if(ze("before:highlightElement",{el:b,language:F}),b.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(b)),l.throwUnescapedHTML))throw new Ya("One of your code blocks includes unescaped HTML.",b.innerHTML);O=b;const J=O.textContent,ee=F?d(J,{language:F,ignoreIllegals:!0}):j(J);b.innerHTML=ee.value,Y(b,F,ee.language),b.result={language:ee.language,re:ee.relevance,relevance:ee.relevance},ee.secondBest&&(b.secondBest={language:ee.secondBest.language,relevance:ee.secondBest.relevance}),ze("after:highlightElement",{el:b,result:ee,text:J})}function Q(b){l=Ls(l,b)}const ne=()=>{L(),Et("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function oe(){L(),Et("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let te=!1;function L(){if(document.readyState==="loading"){te=!0;return}document.querySelectorAll(l.cssSelector).forEach(B)}function ue(){te&&L()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",ue,!1);function Me(b,O){let F=null;try{F=O(e)}catch(J){if(vt("Language definition for '{}' could not be registered.".replace("{}",b)),s)vt(J);else throw J;F=i}F.name||(F.name=b),t[b]=F,F.rawDefinition=O.bind(null,e),F.aliases&&Z(F.aliases,{languageName:b})}function Te(b){delete t[b];for(const O of Object.keys(n))n[O]===b&&delete n[O]}function K(){return Object.keys(t)}function q(b){return b=(b||"").toLowerCase(),t[b]||t[n[b]]}function Z(b,{languageName:O}){typeof b=="string"&&(b=[b]),b.forEach(F=>{n[F.toLowerCase()]=O})}function pe(b){const O=q(b);return O&&!O.disableAutodetect}function A(b){b["before:highlightBlock"]&&!b["before:highlightElement"]&&(b["before:highlightElement"]=O=>{b["before:highlightBlock"](Object.assign({block:O.el},O))}),b["after:highlightBlock"]&&!b["after:highlightElement"]&&(b["after:highlightElement"]=O=>{b["after:highlightBlock"](Object.assign({block:O.el},O))})}function se(b){A(b),o.push(b)}function xe(b){const O=o.indexOf(b);O!==-1&&o.splice(O,1)}function ze(b,O){const F=b;o.forEach(function(J){J[F]&&J[F](O)})}function de(b){return Et("10.7.0","highlightBlock will be removed entirely in v12.0"),Et("10.7.0","Please use highlightElement now."),B(b)}Object.assign(e,{highlight:d,highlightAuto:j,highlightAll:L,highlightElement:B,highlightBlock:de,configure:Q,initHighlighting:ne,initHighlightingOnLoad:oe,registerLanguage:Me,unregisterLanguage:Te,listLanguages:K,getLanguage:q,registerAliases:Z,autoDetection:pe,inherit:Ls,addPlugin:se,removePlugin:xe}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString=Xa,e.regex={concat:yt,lookahead:Jr,either:zo,optional:la,anyNumberOfTimes:ia};for(const b in _n)typeof _n[b]=="object"&&Vr(_n[b]);return Object.assign(e,_n),e},kt=ri({});kt.newInstance=()=>ri({});var Va=kt;kt.HighlightJS=kt;kt.default=kt;const Qn=ta(Va);var Hs=Cl({props:{code:{type:String,required:!0},language:{type:String,default:""},autodetect:{type:Boolean,default:!0},ignoreIllegals:{type:Boolean,default:!0}},setup:function(e){var t=ol(e.language);hn(function(){return e.language},function(s){t.value=s});var n=Dt(function(){return e.autodetect||!t.value}),o=Dt(function(){return!n.value&&!Qn.getLanguage(t.value)});return{className:Dt(function(){return o.value?"":"hljs "+t.value}),highlightedCode:Dt(function(){var s;if(o.value)return console.warn('The language "'+t.value+'" you specified could not be found.'),e.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;");if(n.value){var r=Qn.highlightAuto(e.code);return t.value=(s=r.language)!==null&&s!==void 0?s:"",r.value}return(r=Qn.highlight(e.code,{language:t.value,ignoreIllegals:e.ignoreIllegals})).value})}},render:function(){return uo("pre",{},[uo("code",{class:this.className,innerHTML:this.highlightedCode})])}}),qa={install:function(e){e.component("highlightjs",Hs)},component:Hs};var Ja=Object.defineProperty,Ga=(e,t,n)=>t in e?Ja(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Fs=(e,t,n)=>(Ga(e,typeof t!="symbol"?t+"":t,n),n);class Za{constructor(){Fs(this,"seed",0),Fs(this,"data",new Map)}id(){return Date.now().toString(26)+this.seed++}add(t,n=this.id()){return this.data.set(n,t),n}get(t){return this.data.get(t)}delete(t){this.delete(t)}}const Qa="Failed to copy value to clipboard. Unknown type.",ef={asString(e){if(e==null)return console.warn("Clipboard input is empty"),"";if(typeof e!="string")try{return JSON.stringify(e)}catch(t){return console.warn(Qa,t),""}return e}},tf="position:fixed; pointer-events:none; z-index:-9999; opacity:0;",nf={createTextarea(e){const t=document.createElement("textarea");return t.addEventListener("focusin",n=>{n.stopPropagation()}),t.value=e,t.setAttribute("readonly",""),t.style.cssText=tf,t}},Yt={async requestClipboardPermission(){return navigator.permissions.query({name:"clipboard-write"})},async writeClipboard(e){return(await Yt.requestClipboardPermission()).state==="granted"?(await navigator.clipboard.writeText(e),!0):!1},writeClipboardExecCommand(e){const t=nf.createTextarea(e);if(document.body.appendChild(t),navigator.userAgent.match(/ipad|ipod|iphone/i)){t.contentEditable="true",t.readOnly=!0;const o=document.createRange();o.selectNodeContents(t);const s=window.getSelection();s&&(s.removeAllRanges(),s.addRange(o),t.setSelectionRange(0,999999))}else t.select();const n=document.execCommand("copy");return document.body.removeChild(t),n},async copy(e){const t=typeof e=="function"?e():e,n=ef.asString(t);if(Yt.writeClipboardExecCommand(n))return!0;await Yt.writeClipboard(n)}},et=new Za,of={install(e){const t=e.version[0]==="3"?e.config.globalProperties:e.prototype;t.$clipboard=Yt.copy,e.directive("clipboard",{beforeMount(n,o){const s=o.arg,r=o.value,i=typeof r=="function";if(s==="error"&&i){n.dataset.clipboardError=et.add(r);return}if(s==="error"&&i){n.dataset.clipboardSuccess=et.add(r);return}const l=async c=>{var f;const d=await Yt.copy(r)?n.dataset.clipboardSuccess:n.dataset.clipboardError;(f=et.get(d))==null||f({value:r,event:c})};n.dataset.clipboardClick=et.add(l),n.addEventListener("click",l)},unmounted(n){const{clipboardSuccessHandler:o,clipboardErrorHandler:s,clipboardClickHandler:r}=n.dataset;if(o&&et.delete(o),s&&et.delete(s),r){const i=et.get(r);i&&(n.removeEventListener("click",i),et.delete(r))}},get bind(){return this.beforeMount},get unbind(){return this.unmounted}})}},sf="/assets/logo-1bb13d83.svg";const N=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n},rf={},lf=zn('<img class="logo" src="'+sf+'" alt="cssfx" data-v-8140b3ae><div class="social" data-v-8140b3ae><a href="https://github.com/ClearLove443/cssfx" target="_blank" data-v-8140b3ae><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-8140b3ae><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" data-v-8140b3ae></path></svg></a></div>',2),cf=[lf];function af(e,t){return T(),P("nav",null,cf)}const ff=N(rf,[["render",af],["__scopeId","data-v-8140b3ae"]]);const uf={},ii=e=>(be("data-v-cdd2e4ed"),e=e(),me(),e),df=ii(()=>R("h1",null,"Beautifully simple click-to-copy CSS effects",-1)),_f=ii(()=>R("p",null,"A carefully crafted collection designed with a focus on fluidity, simplicity, and ease of use. Powered by CSS with minimal markup. Completely open source and MIT licensed.",-1)),pf=[df,_f];function hf(e,t){return T(),P("header",null,pf)}const gf=N(uf,[["render",hf],["__scopeId","data-v-cdd2e4ed"]]);const bf={props:{type:String},methods:{inspect(e){const t=this.$refs.box===e.target;this.type==="input"&&!t||this.$emit("inspect")}}};function mf(e,t,n,o,s,r){return T(),P("div",{ref:"box",onClick:t[0]||(t[0]=(...i)=>r.inspect&&r.inspect(...i))},[Hl(e.$slots,"default",{},void 0,!0)],512)}const vf=N(bf,[["render",mf],["__scopeId","data-v-c349960f"]]);const yf={};function xf(e,t){return T(),P("button",null,"Bubble")}const wf=N(yf,[["render",xf],["__scopeId","data-v-659827ef"]]),Ef=Object.freeze(Object.defineProperty({__proto__:null,default:wf},Symbol.toStringTag,{value:"Module"}));const Of={};function Sf(e,t){return T(),P("button",null,"Bubble")}const Cf=N(Of,[["render",Sf],["__scopeId","data-v-a7b56818"]]),$f=Object.freeze(Object.defineProperty({__proto__:null,default:Cf},Symbol.toStringTag,{value:"Module"}));const Mf={};function Tf(e,t){return T(),P("button",null,"Bubble")}const If=N(Mf,[["render",Tf],["__scopeId","data-v-830f2d1e"]]),kf=Object.freeze(Object.defineProperty({__proto__:null,default:If},Symbol.toStringTag,{value:"Module"}));const Pf={};function Af(e,t){return T(),P("button",null,"Bubble")}const jf=N(Pf,[["render",Af],["__scopeId","data-v-38c234ee"]]),Rf=Object.freeze(Object.defineProperty({__proto__:null,default:jf},Symbol.toStringTag,{value:"Module"}));const Nf={};function Bf(e,t){return T(),P("button",null,"Bubble")}const Lf=N(Nf,[["render",Bf],["__scopeId","data-v-2a9d9126"]]),zf=Object.freeze(Object.defineProperty({__proto__:null,default:Lf},Symbol.toStringTag,{value:"Module"}));const Hf={};function Ff(e,t){return T(),P("button",null,"Jelly")}const Df=N(Hf,[["render",Ff],["__scopeId","data-v-81224025"]]),Uf=Object.freeze(Object.defineProperty({__proto__:null,default:Df},Symbol.toStringTag,{value:"Module"}));const Kf={};function Xf(e,t){return T(),P("button",null,"Pulse")}const Yf=N(Kf,[["render",Xf],["__scopeId","data-v-554fa84d"]]),Wf=Object.freeze(Object.defineProperty({__proto__:null,default:Yf},Symbol.toStringTag,{value:"Module"}));const Vf={};function qf(e,t){return T(),P("button",null,"Shine")}const Jf=N(Vf,[["render",qf],["__scopeId","data-v-a2486d9d"]]),Gf=Object.freeze(Object.defineProperty({__proto__:null,default:Jf},Symbol.toStringTag,{value:"Module"}));const Zf={};function Qf(e,t){return T(),P("button",null,"Slide")}const eu=N(Zf,[["render",Qf],["__scopeId","data-v-28068dc6"]]),tu=Object.freeze(Object.defineProperty({__proto__:null,default:eu},Symbol.toStringTag,{value:"Module"}));const nu={};function ou(e,t){return T(),P("button",null,"Slide")}const su=N(nu,[["render",ou],["__scopeId","data-v-3bab9c31"]]),ru=Object.freeze(Object.defineProperty({__proto__:null,default:su},Symbol.toStringTag,{value:"Module"}));const iu={};function lu(e,t){return T(),P("button",null,"Slide")}const cu=N(iu,[["render",lu],["__scopeId","data-v-14c73685"]]),au=Object.freeze(Object.defineProperty({__proto__:null,default:cu},Symbol.toStringTag,{value:"Module"}));const fu={};function uu(e,t){return T(),P("button",null,"Slide")}const du=N(fu,[["render",uu],["__scopeId","data-v-ca882d64"]]),_u=Object.freeze(Object.defineProperty({__proto__:null,default:du},Symbol.toStringTag,{value:"Module"}));const pu={},hu=zn('<input type="text" placeholder="Input Outline" data-v-3d82f91f><span class="bottom" data-v-3d82f91f></span><span class="right" data-v-3d82f91f></span><span class="top" data-v-3d82f91f></span><span class="left" data-v-3d82f91f></span>',5),gu=[hu];function bu(e,t){return T(),P("div",null,gu)}const mu=N(pu,[["render",bu],["__scopeId","data-v-3d82f91f"]]),vu=Object.freeze(Object.defineProperty({__proto__:null,default:mu},Symbol.toStringTag,{value:"Module"}));const yu={},xu=zn('<input type="text" placeholder="Input Outline" data-v-12d67ea5><span class="bottom" data-v-12d67ea5></span><span class="right" data-v-12d67ea5></span><span class="top" data-v-12d67ea5></span><span class="left" data-v-12d67ea5></span>',5),wu=[xu];function Eu(e,t){return T(),P("div",null,wu)}const Ou=N(yu,[["render",Eu],["__scopeId","data-v-12d67ea5"]]),Su=Object.freeze(Object.defineProperty({__proto__:null,default:Ou},Symbol.toStringTag,{value:"Module"}));const Cu={},$u=zn('<input type="text" placeholder="Input Trace" data-v-0efb2595><span class="bottom" data-v-0efb2595></span><span class="right" data-v-0efb2595></span><span class="top" data-v-0efb2595></span><span class="left" data-v-0efb2595></span>',5),Mu=[$u];function Tu(e,t){return T(),P("div",null,Mu)}const Iu=N(Cu,[["render",Tu],["__scopeId","data-v-0efb2595"]]),ku=Object.freeze(Object.defineProperty({__proto__:null,default:Iu},Symbol.toStringTag,{value:"Module"}));const Pu={},li=e=>(be("data-v-ab8a5b2a"),e=e(),me(),e),Au=li(()=>R("input",{type:"text",placeholder:"Input Underline"},null,-1)),ju=li(()=>R("span",null,null,-1)),Ru=[Au,ju];function Nu(e,t){return T(),P("div",null,Ru)}const Bu=N(Pu,[["render",Nu],["__scopeId","data-v-ab8a5b2a"]]),Lu=Object.freeze(Object.defineProperty({__proto__:null,default:Bu},Symbol.toStringTag,{value:"Module"}));const zu={},ci=e=>(be("data-v-cbdeeb18"),e=e(),me(),e),Hu=ci(()=>R("input",{type:"text",placeholder:"Input Underline"},null,-1)),Fu=ci(()=>R("span",null,null,-1)),Du=[Hu,Fu];function Uu(e,t){return T(),P("div",null,Du)}const Ku=N(zu,[["render",Uu],["__scopeId","data-v-cbdeeb18"]]),Xu=Object.freeze(Object.defineProperty({__proto__:null,default:Ku},Symbol.toStringTag,{value:"Module"}));const Yu={},Un=e=>(be("data-v-c70fb727"),e=e(),me(),e),Wu=Un(()=>R("span",null,null,-1)),Vu=Un(()=>R("span",null,null,-1)),qu=Un(()=>R("span",null,null,-1)),Ju=Un(()=>R("span",null,null,-1)),Gu=[Wu,Vu,qu,Ju];function Zu(e,t){return T(),P("div",null,Gu)}const Qu=N(Yu,[["render",Zu],["__scopeId","data-v-c70fb727"]]),ed=Object.freeze(Object.defineProperty({__proto__:null,default:Qu},Symbol.toStringTag,{value:"Module"}));const td={};function nd(e,t){return T(),P("div")}const od=N(td,[["render",nd],["__scopeId","data-v-f1e29100"]]),sd=Object.freeze(Object.defineProperty({__proto__:null,default:od},Symbol.toStringTag,{value:"Module"}));const rd={},id=e=>(be("data-v-25eb6263"),e=e(),me(),e),ld={class:"box"},cd=id(()=>R("div",{class:"coin"},null,-1)),ad=[cd];function fd(e,t){return T(),P("div",ld,ad)}const ud=N(rd,[["render",fd],["__scopeId","data-v-25eb6263"]]),dd=Object.freeze(Object.defineProperty({__proto__:null,default:ud},Symbol.toStringTag,{value:"Module"}));const _d={},Do=e=>(be("data-v-de1cc43f"),e=e(),me(),e),pd={class:"balls"},hd=Do(()=>R("div",null,null,-1)),gd=Do(()=>R("div",null,null,-1)),bd=Do(()=>R("div",null,null,-1)),md=[hd,gd,bd];function vd(e,t){return T(),P("div",pd,md)}const yd=N(_d,[["render",vd],["__scopeId","data-v-de1cc43f"]]),xd=Object.freeze(Object.defineProperty({__proto__:null,default:yd},Symbol.toStringTag,{value:"Module"}));const wd={};function Ed(e,t){return T(),P("div")}const Od=N(wd,[["render",Ed],["__scopeId","data-v-dda279c9"]]),Sd=Object.freeze(Object.defineProperty({__proto__:null,default:Od},Symbol.toStringTag,{value:"Module"}));const Cd={},Uo=e=>(be("data-v-ac7a93b5"),e=e(),me(),e),$d={class:"dots"},Md=Uo(()=>R("div",null,null,-1)),Td=Uo(()=>R("div",null,null,-1)),Id=Uo(()=>R("div",null,null,-1)),kd=[Md,Td,Id];function Pd(e,t){return T(),P("div",$d,kd)}const Ad=N(Cd,[["render",Pd],["__scopeId","data-v-ac7a93b5"]]),jd=Object.freeze(Object.defineProperty({__proto__:null,default:Ad},Symbol.toStringTag,{value:"Module"}));const Rd={},Nd=e=>(be("data-v-938a8d81"),e=e(),me(),e),Bd={class:"box"},Ld=Nd(()=>R("div",{class:"plane"},null,-1)),zd=[Ld];function Hd(e,t){return T(),P("div",Bd,zd)}const Fd=N(Rd,[["render",Hd],["__scopeId","data-v-938a8d81"]]),Dd=Object.freeze(Object.defineProperty({__proto__:null,default:Fd},Symbol.toStringTag,{value:"Module"}));const Ud={},Ge=e=>(be("data-v-e861ccc3"),e=e(),me(),e),Kd={class:"dots"},Xd=Ge(()=>R("div",null,null,-1)),Yd=Ge(()=>R("div",null,null,-1)),Wd=Ge(()=>R("div",null,null,-1)),Vd=Ge(()=>R("div",null,null,-1)),qd=Ge(()=>R("div",null,null,-1)),Jd=Ge(()=>R("div",null,null,-1)),Gd=Ge(()=>R("div",null,null,-1)),Zd=Ge(()=>R("div",null,null,-1)),Qd=Ge(()=>R("div",null,null,-1)),e_=[Xd,Yd,Wd,Vd,qd,Jd,Gd,Zd,Qd];function t_(e,t){return T(),P("div",Kd,e_)}const n_=N(Ud,[["render",t_],["__scopeId","data-v-e861ccc3"]]),o_=Object.freeze(Object.defineProperty({__proto__:null,default:n_},Symbol.toStringTag,{value:"Module"}));const s_={},Ko=e=>(be("data-v-f6febdf3"),e=e(),me(),e),r_={class:"loader"},i_=Ko(()=>R("div",{class:"outer"},null,-1)),l_=Ko(()=>R("div",{class:"middle"},null,-1)),c_=Ko(()=>R("div",{class:"inner"},null,-1)),a_=[i_,l_,c_];function f_(e,t){return T(),P("div",r_,a_)}const u_=N(s_,[["render",f_],["__scopeId","data-v-f6febdf3"]]),d_=Object.freeze(Object.defineProperty({__proto__:null,default:u_},Symbol.toStringTag,{value:"Module"}));const __={};function p_(e,t){return T(),P("div")}const h_=N(__,[["render",p_],["__scopeId","data-v-f4703117"]]),g_=Object.freeze(Object.defineProperty({__proto__:null,default:h_},Symbol.toStringTag,{value:"Module"}));const b_={},ai=e=>(be("data-v-fe6a395d"),e=e(),me(),e),m_={viewBox:"0 0 50 50"},v_=ai(()=>R("circle",{class:"ring",cx:"25",cy:"25",r:"20"},null,-1)),y_=ai(()=>R("circle",{class:"ball",cx:"25",cy:"5",r:"3.5"},null,-1)),x_=[v_,y_];function w_(e,t){return T(),P("svg",m_,x_)}const E_=N(b_,[["render",w_],["__scopeId","data-v-fe6a395d"]]),O_=Object.freeze(Object.defineProperty({__proto__:null,default:E_},Symbol.toStringTag,{value:"Module"}));const S_={},C_=e=>(be("data-v-906c19ee"),e=e(),me(),e),$_={viewBox:"25 25 50 50"},M_=C_(()=>R("circle",{cx:"50",cy:"50",r:"20"},null,-1)),T_=[M_];function I_(e,t){return T(),P("svg",$_,T_)}const k_=N(S_,[["render",I_],["__scopeId","data-v-906c19ee"]]),P_=Object.freeze(Object.defineProperty({__proto__:null,default:k_},Symbol.toStringTag,{value:"Module"}));const A_={};function j_(e,t){return T(),P("div")}const R_=N(A_,[["render",j_],["__scopeId","data-v-fbb6a348"]]),N_=Object.freeze(Object.defineProperty({__proto__:null,default:R_},Symbol.toStringTag,{value:"Module"}));const B_={},Xo=e=>(be("data-v-6e51850c"),e=e(),me(),e),L_={class:"balls"},z_=Xo(()=>R("div",null,null,-1)),H_=Xo(()=>R("div",null,null,-1)),F_=Xo(()=>R("div",null,null,-1)),D_=[z_,H_,F_];function U_(e,t){return T(),P("div",L_,D_)}const K_=N(B_,[["render",U_],["__scopeId","data-v-6e51850c"]]),X_=Object.freeze(Object.defineProperty({__proto__:null,default:K_},Symbol.toStringTag,{value:"Module"}));const Y_={};function W_(e,t){return T(),P("span",null,"Bars")}const V_=N(Y_,[["render",W_],["__scopeId","data-v-9d638207"]]),q_=Object.freeze(Object.defineProperty({__proto__:null,default:V_},Symbol.toStringTag,{value:"Module"}));const J_={};function G_(e,t){return T(),P("span",null,"Bars")}const Z_=N(J_,[["render",G_],["__scopeId","data-v-a0398184"]]),Q_=Object.freeze(Object.defineProperty({__proto__:null,default:Z_},Symbol.toStringTag,{value:"Module"}));const ep={};function tp(e,t){return T(),P("span",null,"Bars")}const np=N(ep,[["render",tp],["__scopeId","data-v-80574191"]]),op=Object.freeze(Object.defineProperty({__proto__:null,default:np},Symbol.toStringTag,{value:"Module"}));const sp={};function rp(e,t){return T(),P("span",null,"Highlight")}const ip=N(sp,[["render",rp],["__scopeId","data-v-e56c0967"]]),lp=Object.freeze(Object.defineProperty({__proto__:null,default:ip},Symbol.toStringTag,{value:"Module"}));const cp={};function ap(e,t){return T(),P("span",null,"Highlight")}const fp=N(cp,[["render",ap],["__scopeId","data-v-15e03b8b"]]),up=Object.freeze(Object.defineProperty({__proto__:null,default:fp},Symbol.toStringTag,{value:"Module"}));const dp={};function _p(e,t){return T(),P("span",null,"Overline")}const pp=N(dp,[["render",_p],["__scopeId","data-v-3594a52c"]]),hp=Object.freeze(Object.defineProperty({__proto__:null,default:pp},Symbol.toStringTag,{value:"Module"}));const gp={};function bp(e,t){return T(),P("span",null,"Overline")}const mp=N(gp,[["render",bp],["__scopeId","data-v-e1ada985"]]),vp=Object.freeze(Object.defineProperty({__proto__:null,default:mp},Symbol.toStringTag,{value:"Module"}));const yp={};function xp(e,t){return T(),P("span",null,"Pillars")}const wp=N(yp,[["render",xp],["__scopeId","data-v-db804d15"]]),Ep=Object.freeze(Object.defineProperty({__proto__:null,default:wp},Symbol.toStringTag,{value:"Module"}));const Op={};function Sp(e,t){return T(),P("span",null,"Pillars")}const Cp=N(Op,[["render",Sp],["__scopeId","data-v-8d2b846a"]]),$p=Object.freeze(Object.defineProperty({__proto__:null,default:Cp},Symbol.toStringTag,{value:"Module"}));const Mp={};function Tp(e,t){return T(),P("span",null,"Pillars")}const Ip=N(Mp,[["render",Tp],["__scopeId","data-v-7bc55883"]]),kp=Object.freeze(Object.defineProperty({__proto__:null,default:Ip},Symbol.toStringTag,{value:"Module"}));const Pp={};function Ap(e,t){return T(),P("span",null,"Strikethrough")}const jp=N(Pp,[["render",Ap],["__scopeId","data-v-016ea0ca"]]),Rp=Object.freeze(Object.defineProperty({__proto__:null,default:jp},Symbol.toStringTag,{value:"Module"}));const Np={};function Bp(e,t){return T(),P("span",null,"Underline")}const Lp=N(Np,[["render",Bp],["__scopeId","data-v-f02c5960"]]),zp=Object.freeze(Object.defineProperty({__proto__:null,default:Lp},Symbol.toStringTag,{value:"Module"}));const Hp={};function Fp(e,t){return T(),P("span",null,"Underline")}const Dp=N(Hp,[["render",Fp],["__scopeId","data-v-cabf800e"]]),Up=Object.freeze(Object.defineProperty({__proto__:null,default:Dp},Symbol.toStringTag,{value:"Module"}));const Kp={};function Xp(e,t){return T(),P("span",null,"Underline")}const Yp=N(Kp,[["render",Xp],["__scopeId","data-v-f914b245"]]),Wp=Object.freeze(Object.defineProperty({__proto__:null,default:Yp},Symbol.toStringTag,{value:"Module"})),Vp=`<template>
<button>Bubble</button>
</template>

<style scoped>
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 100%;
  right: 100%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

button:hover {
  cursor: pointer;
  color: #161616;
}

button:hover::before {
  transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
}
</style>`,qp=`<template>
<button>Bubble</button>
</template>

<style scoped>
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 100%;
  left: 100%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

button:hover {
  cursor: pointer;
  color: #161616;
}

button:hover::before {
  transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
}
</style>`,Jp=`<template>
<button>Bubble</button>
</template>

<style scoped>
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  bottom: 100%;
  right: 100%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(50%, 50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

button:hover {
  cursor: pointer;
  color: #161616;
}

button:hover::before {
  transform: translate3d(50%, 50%, 0) scale3d(15, 15, 15);
}
</style>`,Gp=`<template>
<button>Bubble</button>
</template>

<style scoped>
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  bottom: 100%;
  left: 100%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(-50%, 50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

button:hover {
  cursor: pointer;
  color: #161616;
}

button:hover::before {
  transform: translate3d(-50%, 50%, 0) scale3d(15, 15, 15);
}
</style>`,Zp=`<template>
<button>Bubble</button>
</template>

<style scoped>
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

button:hover {
  cursor: pointer;
  color: #161616;
}

button:hover::before {
  transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
}
</style>`,Qp=`<template>
<button>Jelly</button>
</template>

<style scoped>
button {
  z-index: 1;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
}

button:hover {
  cursor: pointer;
  animation: jelly 0.5s;
}

@keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}
</style>
`,eh=`<template>
<button>Pulse</button>
</template>

<style scoped>
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
}

button:hover {
  cursor: pointer;
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 4px solid hsl(236, 32%, 26%);
  transform-origin: center;
  transform: scale(1);
}

button:hover::before {
  transition: all 0.75s ease-in-out;
  transform-origin: center;
  transform: scale(1.75);
  opacity: 0;
}
</style>
`,th=`<template>
<button>Shine</button>
</template>

<style scoped>
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  cursor: pointer;
}

button::after {
  content: '';
  z-index: -1;
  background-color: hsla(0, 0%, 100%, 0.2);
  position: absolute;
  top: -50%;
  bottom: -50%;
  width: 1.25em;
  transform: translate3d(-525%, 0, 0) rotate(35deg);
}

button:hover::after {
  transition: transform 0.45s ease-in-out;
  transform: translate3d(200%, 0, 0) rotate(35deg);
}
</style>
`,nh=`<template>
<button>Slide</button>
</template>

<style scoped>
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fc2f70;
  transform-origin: center bottom;
  transform: scaleY(0);
  transition: transform 0.25s ease-in-out;
}

button:hover {
  cursor: pointer;
}

button:hover::before {
  transform-origin: center top;
  transform: scaleY(1);
}
</style>
`,oh=`<template>
<button>Slide</button>
</template>

<style scoped>
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fc2f70;
  transform-origin: center left;
  transform: scaleX(0);
  transition: transform 0.25s ease-in-out;
}

button:hover {
  cursor: pointer;
}

button:hover::before {
  transform-origin: center right;
  transform: scaleX(1);
}
</style>
`,sh=`<template>
<button>Slide</button>
</template>

<style scoped>
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fc2f70;
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.25s ease-in-out;
}

button:hover {
  cursor: pointer;
}

button:hover::before {
  transform-origin: center left;
  transform: scaleX(1);
}
</style>
`,rh=`<template>
<button>Slide</button>
</template>

<style scoped>
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fc2f70;
  transform-origin: center top;
  transform: scaleY(0);
  transition: transform 0.25s ease-in-out;
}

button:hover {
  cursor: pointer;
}

button:hover::before {
  transform-origin: center bottom;
  transform: scaleY(1);
}
</style>
`,ih=`<template>
<div>
  <input type="text" placeholder="Input Outline">
  <span class="bottom"></span>
  <span class="right"></span>
  <span class="top"></span>
  <span class="left"></span>
</div>
</template>

<style scoped>
div {
  position: relative;
}

input {
  width: 6.5em;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: hsl(236, 32%, 26%);
  padding: 0.35em 0.45em;
  border: 1px solid transparent;
  transition: background-color 0.3s ease-in-out;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: hsla(0, 0%, 100%, 0.6);
}

span {
  position: absolute;
  background-color: #3cefff;
  transition: transform 0.5s ease;
}

.bottom,
.top {
  height: 1px;
  left: 0;
  right: 0;
  transform: scaleX(0);
}

.left,
.right {
  width: 1px;
  top: 0;
  bottom: 0;
  transform: scaleY(0);
}

.bottom {
  bottom: 0;
  transform-origin: bottom right;
}

input:focus ~ .bottom {
  transform-origin: bottom left;
  transform: scaleX(1);
}

.right {
  right: 0;
  transform-origin: top right;
}

input:focus ~ .right {
  transform-origin: bottom right;
  transform: scaleY(1);
}

.top {
  top: 0;
  transform-origin: top left;
}

input:focus ~ .top {
  transform-origin: top right;
  transform: scaleX(1);
}

.left {
  left: 0;
  transform-origin: bottom left;
}

input:focus ~ .left {
  transform-origin: top left;
  transform: scaleY(1);
}
</style>
`,lh=`<template>
<div>
  <input type="text" placeholder="Input Outline">
  <span class="bottom"></span>
  <span class="right"></span>
  <span class="top"></span>
  <span class="left"></span>
</div>
</template>

<style scoped>
div {
  position: relative;
}

input {
  width: 6.5em;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: hsl(236, 32%, 26%);
  padding: 0.35em 0.45em;
  border: 1px solid transparent;
  transition: background-color 0.3s ease-in-out;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: hsla(0, 0%, 100%, 0.6);
}

span {
  position: absolute;
  background-color: #fc2f70;
  transform-origin: center;
  transition: transform 0.5s ease;
}

.bottom,
.top {
  height: 1px;
  left: 0;
  right: 0;
  transform: scaleX(0);
}

.left,
.right {
  width: 1px;
  top: 0;
  bottom: 0;
  transform: scaleY(0);
}

.top {
  top: 0;
}

.bottom {
  bottom: 0;
}

.left {
  left: 0;
}

.right {
  right: 0;
}

input:focus ~ .top, input:focus ~ .bottom {
  transform: scaleX(1);
}

input:focus ~ .left, input:focus ~ .right {
  transform: scaleY(1);
}
</style>
`,ch=`<template>
<div>
  <input type="text" placeholder="Input Trace">
  <span class="bottom"></span>
  <span class="right"></span>
  <span class="top"></span>
  <span class="left"></span>
</div>
</template>

<style scoped>
div {
  position: relative;
}

input {
  width: 6.5em;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: hsl(236, 32%, 26%);
  padding: 0.35em 0.45em;
  border: 1px solid transparent;
  transition: background-color 0.3s ease-in-out;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: hsla(0, 0%, 100%, 0.6);
}

span {
  position: absolute;
  background-color: #fc2f70;
  transition: transform 0.1s ease;
}

.bottom,
.top {
  height: 1px;
  left: 0;
  right: 0;
  transform: scaleX(0);
}

.left,
.right {
  width: 1px;
  top: 0;
  bottom: 0;
  transform: scaleY(0);
}

.bottom {
  bottom: 0;
  transform-origin: bottom right;
}

input:focus ~ .bottom {
  transform-origin: bottom left;
  transform: scaleX(1);
}

.right {
  right: 0;
  transform-origin: top right;
  transition-delay: 0.05s;
}

input:focus ~ .right {
  transform-origin: bottom right;
  transform: scaleY(1);
}

.top {
  top: 0;
  transform-origin: top left;
  transition-delay: 0.15s;
}

input:focus ~ .top {
  transform-origin: top right;
  transform: scaleX(1);
}

.left {
  left: 0;
  transform-origin: bottom left;
  transition-delay: 0.25s;
}

input:focus ~ .left {
  transform-origin: top left;
  transform: scaleY(1);
}
</style>
`,ah=`<template>
<div>
  <input type="text" placeholder="Input Underline">
  <span></span>
</div>
</template>

<style scoped>
div {
  position: relative;
}

input {
  width: 6.5em;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom-color: hsla(185, 100%, 62%, 0.2);
}

input:focus {
  outline: none;
}

input::placeholder {
  color: hsla(0, 0%, 100%, 0.6);
}

span {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #3cefff;
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

input:focus ~ span {
  transform-origin: bottom left;
  transform: scaleX(1);
}
</style>

`,fh=`<template>
<div>
  <input type="text" placeholder="Input Underline">
  <span></span>
</div>
</template>

<style scoped>
div {
  position: relative;
}

input {
  width: 6.5em;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom-color: hsla(341, 97%, 59%, 0.2);
}

input:focus {
  outline: none;
}

input::placeholder {
  color: hsla(0, 0%, 100%, 0.6);
}

span {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 1px;
  opacity: 0;
  background-color: #fc2f70;
  transform-origin: center;
  transform: translate(-50%, 0) scaleX(0);
  transition: all 0.3s ease;
}

input:focus ~ span {
  transform: translate(-50%, 0) scaleX(1);
  opacity: 1;
}
</style>
`,uh=`<template>
<div>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
</template>

<style scoped>
div {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 2em;
}

span {
  width: 0.3em;
  height: 1em;
  background-color: #3cefff;
}

span:nth-of-type(1) {
  animation: grow 1s -0.45s ease-in-out infinite;
}

span:nth-of-type(2) {
  animation: grow 1s -0.3s ease-in-out infinite;
}

span:nth-of-type(3) {
  animation: grow 1s -0.15s ease-in-out infinite;
}

span:nth-of-type(4) {
  animation: grow 1s ease-in-out infinite;
}

@keyframes grow {
  0%,
  100% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(2);
  }
}
</style>
`,dh=`<template>
<div></div>
</template>

<style scoped>
div {
  position: relative;
  width: 2em;
  height: 2em;
  border: 3px solid #3cefff;
  overflow: hidden;
  animation: spin 3s ease infinite;
}

div::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  width: 2em;
  height: 2em;
  background-color: hsla(185, 100%, 62%, 0.75);
  transform-origin: center bottom;
  transform: scaleY(1);
  animation: fill 3s linear infinite;
}

@keyframes spin {
  50%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fill {
  25%,
  50% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
`,_h=`<template>
<div class="box">
  <div class="coin"></div>
</div>
</template>

<style scoped>
.box {
  perspective: 120px;
}

.coin {
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 4px solid #3cefff;
  animation: spin 1.5s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotateY(540deg);
  }
}
</style>
`,ph=`<template>
<div class="balls">
  <div></div>
  <div></div>
  <div></div>
</div>
</template>

<style scoped>
.balls {
  width: 4em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.balls div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #fc2f70;
}

.balls div:nth-of-type(1) {
  transform: translateX(-100%);
  animation: left-swing 0.5s ease-in alternate infinite;
}

.balls div:nth-of-type(3) {
  transform: translateX(-95%);
  animation: right-swing 0.5s ease-out alternate infinite;
}

@keyframes left-swing {
  50%,
  100% {
    transform: translateX(95%);
  }
}

@keyframes right-swing {
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
`,hh=`<template>
<div></div>
</template>

<style scoped>
div {
  width: 2.5em;
  height: 3em;
  border: 3px solid transparent;
  border-top-color: #fc2f70;
  border-bottom-color: #fc2f70;
  border-radius: 50%;
  animation: spin-stretch 2s ease infinite;
}

@keyframes spin-stretch {
  50% {
    transform: rotate(360deg) scale(0.4, 0.33);
    border-width: 8px;
  }
  100% {
    transform: rotate(720deg) scale(1, 1);
    border-width: 3px;
  }
}
</style>
`,gh=`<template>
<div class="dots">
  <div></div>
  <div></div>
  <div></div>
</div>
</template>

<style scoped>
.dots {
  width: 3.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.dots div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #fc2f70;
  animation: fade 0.8s ease-in-out alternate infinite;
}

.dots div:nth-of-type(1) {
  animation-delay: -0.4s;
}

.dots div:nth-of-type(2) {
  animation-delay: -0.2s;
}

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
`,bh=`<template>
<div class="box">
  <div class="plane"></div>
</div>
</template>

<style scoped>
.box {
  perspective: 120px;
}

.plane {
  width: 2em;
  height: 2em;
  background-color: #fc2f70;
  transform: rotate(0);
  animation: flip 1s infinite;
}

@keyframes flip {
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(180deg) rotateX(180deg);
  }
}
</style>
`,mh=`<template>
<div class="dots">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
</template>

<style scoped>
.dots {
  width: 3em;
  height: 3em;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
}

.dots > div {
  width: 0.5em;
  height: 0.5em;
  background-color: #3cefff;
  border-radius: 50%;
  animation: fade 1.5s alternate ease-in-out infinite;
}

.dots > div:nth-of-type(2),
.dots > div:nth-of-type(4) {
  animation-delay: 0.25s;
}

.dots > div:nth-of-type(3),
.dots > div:nth-of-type(5),
.dots > div:nth-of-type(7) {
  animation-delay: 0.5s;
}

.dots > div:nth-of-type(6),
.dots > div:nth-of-type(8) {
  animation-delay: 0.75s;
}

.dots > div:nth-of-type(9) {
  animation-delay: 1s;
}

@keyframes fade {
  to {
    opacity: 0.2;
  }
}
</style>
`,vh=`<template>
<div class="loader">
  <div class="outer"></div>
  <div class="middle"></div>
  <div class="inner"></div>
</div>
</template>

<style scoped>
.loader {
  position: relative;
}

.outer,
.middle,
.inner {
  border: 3px solid transparent;
  border-top-color: #3cefff;
  border-right-color: #3cefff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}

.outer {
  width: 3.5em;
  height: 3.5em;
  margin-left: -1.75em;
  margin-top: -1.75em;
  animation: spin 2s linear infinite;
}

.middle {
  width: 2.1em;
  height: 2.1em;
  margin-left: -1.05em;
  margin-top: -1.05em;
  animation: spin 1.75s linear reverse infinite;
}

.inner {
  width: 0.8em;
  height: 0.8em;
  margin-left: -0.4em;
  margin-top: -0.4em;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
`,yh=`<template>
<div></div>
</template>

<style scoped>
div {
  display: flex;
  width: 3.5em;
  height: 3.5em;
  border: 3px solid transparent;
  border-top-color: #3cefff;
  border-bottom-color: #3cefff;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}

div:before {
  content: '';
  display: block;
  margin: auto;
  width: 0.75em;
  height: 0.75em;
  border: 3px solid #3cefff;
  border-radius: 50%;
  animation: pulse 1s alternate ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
</style>
`,xh=`<template>
<svg viewBox="0 0 50 50">
  <circle class="ring" cx="25" cy="25" r="20"></circle>
  <circle class="ball" cx="25" cy="5" r="3.5"></circle>
</svg>
</template>

<style scoped>
svg {
  width: 3.75em;
  animation: 1.5s spin ease infinite;
}

.ring {
  fill: none;
  stroke: hsla(341, 97%, 59%, 0.3);
  stroke-width: 2;
}

.ball {
  fill: #fc2f70;
  stroke: none;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
`,wh=`<template>
<svg viewBox="25 25 50 50">
  <circle cx="50" cy="50" r="20"></circle>
</svg>
</template>

<style scoped>
svg {
  width: 3.75em;
  transform-origin: center;
  animation: rotate 2s linear infinite;
}

circle {
  fill: none;
  stroke: #fc2f70;
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
</style>

`,Eh=`<template>
<div></div>
</template>

<style scoped>
div {
  border: 3px solid hsla(185, 100%, 62%, 0.2);
  border-top-color: #3cefff;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
`,Oh=`<template>
<div class="balls">
  <div></div>
  <div></div>
  <div></div>
</div>
</template>

<style scoped>
.balls {
  width: 3.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.balls div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #fc2f70;
  transform: translateY(-100%);
  animation: wave 0.8s ease-in-out alternate infinite;
}

.balls div:nth-of-type(1) {
  animation-delay: -0.4s;
}

.balls div:nth-of-type(2) {
  animation-delay: -0.2s;
}

@keyframes wave {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
}
</style>
`,Sh=`<template>
<span>Bars</span>
</template>

<style scoped>
span {
  position: relative;
}

span::before, span::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #3cefff;
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

span::before {
  top: 0;
}

span::after {
  bottom: 0;
}

span:hover::before, span:hover::after {
  transform-origin: center left;
  transform: scaleX(1);
}
</style>`,Ch=`<template>
<span>Bars</span>
</template>

<style scoped>
span {
  position: relative;
}

span::before, span::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #fc2f70;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

span::before {
  top: 0;
  transform-origin: center right;
}

span:hover::before {
  transform-origin: center left;
  transform: scaleX(1);
}

span::after {
  bottom: 0;
  transform-origin: center left;
}

span:hover::after {
  transform-origin: center right;
  transform: scaleX(1);
}
</style>`,$h=`<template>
<span>Bars</span>
</template>

<style scoped>
span {
  position: relative;
}

span::before, span::after {
  content: '';
  position: absolute;
  left: 50%;
  width: 100%;
  height: 2px;
  background-color: #3cefff;
  transform-origin: center;
  transform: translateX(-50%) scaleX(0);
  transition: transform 0.4s ease;
}

span::before {
  top: 0;
}

span::after {
  bottom: 0;
}

span:hover::before, span:hover::after {
  transform: translateX(-50%) scaleX(1);
}
</style>`,Mh=`<template>
<span>Highlight</span>
</template>

<style scoped>
span {
  position: relative;
  z-index: 1;
}

span::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: -0.25em;
  right: -0.25em;
  background-color: hsla(341, 97%, 59%, 0.75);
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.2s ease-in-out;
}

span:hover::before {
  transform: scaleX(1);
  transform-origin: center left;
}
</style>
`,Th=`<template>
<span>Highlight</span>
</template>

<style scoped>
span {
  position: relative;
  z-index: 1;
}

span::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: -0.25em;
  right: -0.25em;
  background-color: #fc2f70;
  transform-origin: bottom center;
  transform: scaleY(0.1);
  transition: all 0.1s ease-in-out;
}

span:hover::before {
  transform: scaleY(1);
  background-color: hsla(341, 97%, 59%, 0.75);
}
</style>
`,Ih=`<template>
<span>Overline</span>
</template>

<style scoped>
span {
  position: relative;
}

span::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #3cefff;
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

span:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
}
</style>
`,kh=`<template>
<span>Overline</span>
</template>

<style scoped>
span {
  position: relative;
}

span::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 50%;
  width: 100%;
  height: 2px;
  opacity: 0;
  background-color: #fc2f70;
  transform-origin: center;
  transform: translate(-50%, 0) scaleX(0);
  transition: all 0.3s ease-in-out;
}

span:hover::before {
  transform: translate(-50%, 0) scaleX(1);
  opacity: 1;
}
</style>
`,Ph=`<template>
<span>Pillars</span>
</template>

<style scoped>
span {
  position: relative;
}

span::before, span::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #3cefff;
  transform-origin: center top;
  transform: scaleY(0);
  transition: transform 0.5s ease;
}

span::before {
  left: -8px;
}

span::after {
  right: -8px;
}

span:hover::before, span:hover::after {
  transform-origin: center bottom;
  transform: scaleY(1);
}
</style>`,Ah=`<template>
<span>Pillars</span>
</template>

<style scoped>
span {
  position: relative;
}

span::before, span::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #fc2f70;
  transform: scaleY(0);
  transition: transform 0.5s ease;
}

span::before {
  left: -8px;
  transform-origin: center top;
}

span:hover::before {
  transform-origin: center bottom;
  transform: scaleY(1);
}

span::after {
  right: -8px;
  transform-origin: center bottom;
}

span:hover::after {
  transform-origin: center top;
  transform: scaleY(1);
}
</style>`,jh=`<template>
<span>Pillars</span>
</template>

<style scoped>
span {
  position: relative;
}

span::before, span::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #fc2f70;
  transform-origin: center;
  transform: scaleY(0);
  transition: transform 0.5s ease;
}

span::before {
  left: -8px;
}

span::after {
  right: -8px;
}

span:hover::before, span:hover::after {
  transform: scaleY(1);
}
</style>`,Rh=`<template>
<span>Strikethrough</span>
</template>

<style scoped>
span {
  position: relative;
}

span::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #fc2f70;
  transform-origin: center right;
  transform: scaleX(0) translateY(-50%);
  transition: transform 0.3s ease;
}

span:hover {
  color: hsla(0, 0%, 100%, 0.8);
}

span:hover::before {
  transform-origin: center left;
  transform: scaleX(1) translateY(-50%);
}
</style>`,Nh=`<template>
<span>Underline</span>
</template>

<style scoped>
span {
  position: relative;
}

span::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #3cefff;
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

span:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
}
</style>

Thank you @emilkowalski :) https://github.com/emilkowalski
`,Bh=`<template>
<span>Underline</span>
</template>

<style scoped>
span {
  position: relative;
}

span::before {
  content: '';
  position: absolute;
  height: 2px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #3cefff;
  transform-origin: bottom left;
  transform: scaleX(1);
  transition: transform 0.3s ease-in-out;
}

span:hover::before {
  transform: scaleX(0);
  transform-origin: bottom right;
}
</style>

Thank you @emilkowalski :) https://github.com/emilkowalski
`,Lh=`<template>
<span>Underline</span>
</template>

<style scoped>
span {
  position: relative;
}

span::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #fc2f70;
  transform-origin: center;
  transform: translate(-50%, 0) scaleX(0);
  transition: transform 0.3s ease-in-out;
}

span:hover::before {
  transform: translate(-50%, 0) scaleX(1);
}
</style>
`,zh=Object.assign({"../effects/button-bubble-bl.vue":Ef,"../effects/button-bubble-br.vue":$f,"../effects/button-bubble-tl.vue":kf,"../effects/button-bubble-tr.vue":Rf,"../effects/button-bubble.vue":zf,"../effects/button-jelly.vue":Uf,"../effects/button-pulse.vue":Wf,"../effects/button-shine.vue":Gf,"../effects/button-slide-down.vue":tu,"../effects/button-slide-left.vue":ru,"../effects/button-slide-right.vue":au,"../effects/button-slide-up.vue":_u,"../effects/input-outline.vue":vu,"../effects/input-outline2.vue":Su,"../effects/input-trace.vue":ku,"../effects/input-underline.vue":Lu,"../effects/input-underline2.vue":Xu,"../effects/loader-bars.vue":ed,"../effects/loader-box.vue":sd,"../effects/loader-coin.vue":dd,"../effects/loader-cradle.vue":xd,"../effects/loader-disk.vue":Sd,"../effects/loader-ellipsis.vue":jd,"../effects/loader-flip.vue":Dd,"../effects/loader-grid.vue":o_,"../effects/loader-multi-ring.vue":d_,"../effects/loader-orbit.vue":g_,"../effects/loader-orbit2.vue":O_,"../effects/loader-ring.vue":P_,"../effects/loader-ring2.vue":N_,"../effects/loader-wave.vue":X_,"../effects/text-bars.vue":q_,"../effects/text-bars2.vue":Q_,"../effects/text-barsr3.vue":op,"../effects/text-highlight-right.vue":lp,"../effects/text-highlight-up.vue":up,"../effects/text-overline.vue":hp,"../effects/text-overline2.vue":vp,"../effects/text-pillars.vue":Ep,"../effects/text-pillars2.vue":$p,"../effects/text-pillars3.vue":kp,"../effects/text-strikethrough.vue":Rp,"../effects/text-underline.vue":zp,"../effects/text-underline2.vue":Up,"../effects/text-underline3.vue":Wp}),fi=Object.assign({"../effects/button-bubble-bl.vue":Vp,"../effects/button-bubble-br.vue":qp,"../effects/button-bubble-tl.vue":Jp,"../effects/button-bubble-tr.vue":Gp,"../effects/button-bubble.vue":Zp,"../effects/button-jelly.vue":Qp,"../effects/button-pulse.vue":eh,"../effects/button-shine.vue":th,"../effects/button-slide-down.vue":nh,"../effects/button-slide-left.vue":oh,"../effects/button-slide-right.vue":sh,"../effects/button-slide-up.vue":rh,"../effects/input-outline.vue":ih,"../effects/input-outline2.vue":lh,"../effects/input-trace.vue":ch,"../effects/input-underline.vue":ah,"../effects/input-underline2.vue":fh,"../effects/loader-bars.vue":uh,"../effects/loader-box.vue":dh,"../effects/loader-coin.vue":_h,"../effects/loader-cradle.vue":ph,"../effects/loader-disk.vue":hh,"../effects/loader-ellipsis.vue":gh,"../effects/loader-flip.vue":bh,"../effects/loader-grid.vue":mh,"../effects/loader-multi-ring.vue":vh,"../effects/loader-orbit.vue":yh,"../effects/loader-orbit2.vue":xh,"../effects/loader-ring.vue":wh,"../effects/loader-ring2.vue":Eh,"../effects/loader-wave.vue":Oh,"../effects/text-bars.vue":Sh,"../effects/text-bars2.vue":Ch,"../effects/text-barsr3.vue":$h,"../effects/text-highlight-right.vue":Mh,"../effects/text-highlight-up.vue":Th,"../effects/text-overline.vue":Ih,"../effects/text-overline2.vue":kh,"../effects/text-pillars.vue":Ph,"../effects/text-pillars2.vue":Ah,"../effects/text-pillars3.vue":jh,"../effects/text-strikethrough.vue":Rh,"../effects/text-underline.vue":Nh,"../effects/text-underline2.vue":Bh,"../effects/text-underline3.vue":Lh}),Hh=Object.keys(fi),vn={},ui={};for(const e of Hh){const t=e.replace("../effects/","").replace(".vue",""),n=t.substring(0,t.indexOf("-")),o=fi[e],s=zh[e].default,r=/<template>(.*?)<\/template>/g.exec(JSON.stringify(o))[0].replace(/<\/?template>/g,"").replace(/^\\n/,"").replace(/\\r\\n/g,`
`).replace(/\\n/g,`
`).replace(/\\"/g,'"'),i=/<style scoped>(.*?)<\/style>/g.exec(JSON.stringify(o))[0].replace(/<\/?style(?: scoped)?>/g,"").replace(/^\\n/,"").replace(/\\r\\n/g,`
`).replace(/\\n/g,`
`);vn[t]={name:t,type:n,html:r,css:i},ui[t]=s}const Fh={components:{Effect:vf,...ui},props:{effects:Object}};function Dh(e,t,n,o,s,r){const i=Ve("Effect");return T(),Mt(Dc,{class:"grid",tag:"div",name:"shuffle"},{default:Zt(()=>[(T(!0),P(Se,null,zl(Object.values(this.effects),l=>(T(),Mt(i,{key:l.name,type:l.type,onInspect:c=>e.$emit("inspect",l.name)},{default:Zt(()=>[(T(),Mt(Bl(l.name)))]),_:2},1032,["type","onInspect"]))),128))]),_:1})}const Uh=N(Fh,[["render",Dh],["__scopeId","data-v-63707396"]]);const Kh={props:{label:String,code:String,copied:Boolean},methods:{copy(){this.$emit("copy")}}},Xh=e=>(be("data-v-1aca7b5c"),e=e(),me(),e),Yh={class:"block"},Wh={class:"top"},Vh={class:"label"},qh={class:"copy"},Jh={viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Gh=Xh(()=>R("polyline",{points:"20 6 9 17 4 12"},null,-1)),Zh=[Gh];function Qh(e,t,n,o,s,r){const i=Ve("highlightjs"),l=Ll("clipboard");return T(),P("div",Yh,[R("div",Wh,[R("span",Vh,Ws(this.label),1),rs((T(),P("span",qh,[Ro(" COPY "),G(Fn,{name:"copied"},{default:Zt(()=>[rs((T(),P("svg",Jh,Zh,512)),[[Jc,n.copied]])]),_:1})])),[[l,()=>n.code],[l,r.copy,"success"]])]),G(i,{language:n.label.toLocaleLowerCase(),autodetect:!1,code:n.code},null,8,["language","code"])])}const eg=N(Kh,[["render",Qh],["__scopeId","data-v-1aca7b5c"]]);const tg={components:{CodeBlock:eg},props:{src:Object},data(){return{htmlCopied:!1,cssCopied:!1}},methods:{onHtmlCopy(){this.htmlCopied=!0,this.cssCopied=!1},onCssCopy(){this.cssCopied=!0,this.htmlCopied=!1}}},ng={class:"src"};function og(e,t,n,o,s,r){const i=Ve("CodeBlock");return T(),P("div",{class:"inspect",onClick:t[0]||(t[0]=qc(l=>e.$emit("close"),["self"]))},[R("div",ng,[G(i,{class:"html",label:"HTML",code:this.src.html,onCopy:r.onHtmlCopy,copied:s.htmlCopied},null,8,["code","onCopy","copied"]),G(i,{class:"css",label:"CSS",code:this.src.css,onCopy:r.onCssCopy,copied:s.cssCopied},null,8,["code","onCopy","copied"])])])}const sg=N(tg,[["render",og],["__scopeId","data-v-fe290126"]]);const rg={model:{prop:"checked",event:"change"},props:{label:String,checked:Boolean}},di=e=>(be("data-v-08cc8b03"),e=e(),me(),e),ig=["checked"],lg=di(()=>R("svg",{class:"unchecked",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[R("path",{d:"M405.3 106.7v298.7H106.7V106.7h298.6m0-42.7H106.7C83.2 64 64 83.2 64 106.7v298.7c0 23.5 19.2 42.7 42.7 42.7h298.7c23.5 0 42.7-19.2 42.7-42.7V106.7C448 83.2 428.8 64 405.3 64z"})],-1)),cg=di(()=>R("svg",{class:"checked",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[R("path",{d:"M168.531 215.469l-29.864 29.864 96 96L448 128l-29.864-29.864-183.469 182.395-66.136-65.062zm236.802 189.864H106.667V106.667H320V64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V234.667h-42.667v170.666z"})],-1));function ag(e,t,n,o,s,r){return T(),P("label",null,[R("input",{type:"checkbox",checked:n.checked,onChange:t[0]||(t[0]=i=>e.$emit("change",i.target.checked))},null,40,ig),lg,cg,Ro(" "+Ws(this.label),1)])}const fg=N(rg,[["render",ag],["__scopeId","data-v-08cc8b03"]]);const ug={components:{EffectFilter:fg},data(){return{open:!1,filters:{button:!0,input:!0,loader:!0,text:!0}}},methods:{toggleControls(){this.open=!this.open},updateFilters(){this.$emit("filter",this.filters)}},watch:{"filters.button":"updateFilters","filters.input":"updateFilters","filters.loader":"updateFilters","filters.text":"updateFilters"}},Yo=e=>(be("data-v-0f6f408d"),e=e(),me(),e),dg=Yo(()=>R("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},[R("path",{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"})],-1)),_g=[dg],pg={class:"controls"},hg=Yo(()=>R("path",{d:"M222.2 188.1L97.8 64 64 97.8l124.1 124.1 34.1-33.8zM316 64l49 49L64 414.2 97.8 448 399 147l49 49V64H316zm7.9 225.8l-33.8 33.8 75.1 75.1L316 448h132V316l-49 49-75.1-75.2z"},null,-1)),gg=[hg],bg=Yo(()=>R("path",{d:"M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z"},null,-1)),mg=[bg];function vg(e,t,n,o,s,r){const i=Ve("EffectFilter");return T(),P("div",{class:Vt(["wrapper",{open:s.open}])},[R("div",{class:Vt(["tab",{open:s.open}]),onClick:t[0]||(t[0]=(...l)=>r.toggleControls&&r.toggleControls(...l))},_g,2),R("div",pg,[(T(),P("svg",{class:"shuffle",onClick:t[1]||(t[1]=l=>e.$emit("shuffle")),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},gg)),(T(),P("svg",{class:"reset",onClick:t[2]||(t[2]=l=>e.$emit("reset")),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},mg)),G(i,{label:"Buttons",modelValue:s.filters.button,"onUpdate:modelValue":t[3]||(t[3]=l=>s.filters.button=l)},null,8,["modelValue"]),G(i,{label:"Inputs",modelValue:s.filters.input,"onUpdate:modelValue":t[4]||(t[4]=l=>s.filters.input=l)},null,8,["modelValue"]),G(i,{label:"Loaders",modelValue:s.filters.loader,"onUpdate:modelValue":t[5]||(t[5]=l=>s.filters.loader=l)},null,8,["modelValue"]),G(i,{label:"Text",modelValue:s.filters.text,"onUpdate:modelValue":t[6]||(t[6]=l=>s.filters.text=l)},null,8,["modelValue"])])],2)}const yg=N(ug,[["render",vg],["__scopeId","data-v-0f6f408d"]]);function xg(e){const t=Object.entries(e).slice(0),n=t.length;let o=-1,s=n-1;for(;++o<n;){const r=o+Math.floor(Math.random()*(s-o+1)),i=t[r];t[r]=t[o],t[o]=i}return Object.fromEntries(t)}const wg={components:{Navbar:ff,Header:gf,Effects:Uh,Inspect:sg,Controls:yg},data(){return{effects:vn,inspecting:!1,inspectSrc:{}}},methods:{inspect(e){this.inspecting=!0,this.inspectSrc.html=this.effects[e].html,this.inspectSrc.css=this.effects[e].css},closeInspect(){this.inspecting=!1,this.inspectSrc={}},shuffle(){this.effects=xg(this.effects)},reset(){this.effects=vn},filter(e){const t=Object.entries(vn).filter(([n,o])=>e[o.type]);this.effects=Object.fromEntries(t)}}},Eg=e=>(be("data-v-fcabfe95"),e=e(),me(),e),Og=Eg(()=>R("div",{class:"color"},null,-1)),Sg={key:0,class:"inspect-bg"};function Cg(e,t,n,o,s,r){const i=Ve("Navbar"),l=Ve("Header"),c=Ve("Effects"),f=Ve("Inspect"),d=Ve("Controls");return T(),P("div",null,[Og,G(i),G(l),G(c,{effects:s.effects,onInspect:r.inspect},null,8,["effects","onInspect"]),s.inspecting?(T(),P("div",Sg)):bs("",!0),G(Fn,{name:"inspect"},{default:Zt(()=>[s.inspecting?(T(),Mt(f,{key:0,src:s.inspectSrc,onClose:r.closeInspect},null,8,["src","onClose"])):bs("",!0)]),_:1}),G(d,{onShuffle:r.shuffle,onReset:r.reset,onFilter:r.filter},null,8,["onShuffle","onReset","onFilter"])])}const $g=N(wg,[["render",Cg],["__scopeId","data-v-fcabfe95"]]);const Wo=Qc($g);Wo.use(qa);Wo.use(of);Wo.mount("#app");
