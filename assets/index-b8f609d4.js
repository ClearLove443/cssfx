(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function po(e,t){const n=Object.create(null),o=e.split(",");for(let s=0;s<o.length;s++)n[o[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ie={},St=[],ze=()=>{},bi=()=>!1,mi=/^on[^a-z]/,Mn=e=>mi.test(e),go=e=>e.startsWith("onUpdate:"),de=Object.assign,ho=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},vi=Object.prototype.hasOwnProperty,q=(e,t)=>vi.call(e,t),F=Array.isArray,Ot=e=>kn(e)==="[object Map]",Hs=e=>kn(e)==="[object Set]",K=e=>typeof e=="function",_e=e=>typeof e=="string",bo=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",Ks=e=>le(e)&&K(e.then)&&K(e.catch),Xs=Object.prototype.toString,kn=e=>Xs.call(e),yi=e=>kn(e).slice(8,-1),Ws=e=>kn(e)==="[object Object]",mo=e=>_e(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,gn=po(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),In=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},xi=/-(\w)/g,Ke=In(e=>e.replace(xi,(t,n)=>n?n.toUpperCase():"")),wi=/\B([A-Z])/g,$t=In(e=>e.replace(wi,"-$1").toLowerCase()),An=In(e=>e.charAt(0).toUpperCase()+e.slice(1)),Xn=In(e=>e?`on${An(e)}`:""),Gt=(e,t)=>!Object.is(e,t),Wn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},xn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ei=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Si=e=>{const t=_e(e)?Number(e):NaN;return isNaN(t)?e:t};let qo;const eo=()=>qo||(qo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vo(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=_e(o)?Mi(o):vo(o);if(s)for(const r in s)t[r]=s[r]}return t}else{if(_e(e))return e;if(le(e))return e}}const Oi=/;(?![^(]*\))/g,Ti=/:([^]+)/,Ci=/\/\*[^]*?\*\//g;function Mi(e){const t={};return e.replace(Ci,"").split(Oi).forEach(n=>{if(n){const o=n.split(Ti);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function qt(e){let t="";if(_e(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const o=qt(e[n]);o&&(t+=o+" ")}else if(le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ki="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ii=po(ki);function Ys(e){return!!e||e===""}const Gs=e=>_e(e)?e:e==null?"":F(e)||le(e)&&(e.toString===Xs||!K(e.toString))?JSON.stringify(e,qs,2):String(e),qs=(e,t)=>t&&t.__v_isRef?qs(e,t.value):Ot(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s])=>(n[`${o} =>`]=s,n),{})}:Hs(t)?{[`Set(${t.size})`]:[...t.values()]}:le(t)&&!F(t)&&!Ws(t)?String(t):t;let Be;class Ai{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Be,!t&&Be&&(this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Be;try{return Be=this,t()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ni(e,t=Be){t&&t.active&&t.effects.push(e)}function $i(){return Be}const yo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Zs=e=>(e.w&it)>0,Vs=e=>(e.n&it)>0,Ri=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=it},Pi=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const s=t[o];Zs(s)&&!Vs(s)?s.delete(e):t[n++]=s,s.w&=~it,s.n&=~it}t.length=n}},to=new WeakMap;let Ft=0,it=1;const no=30;let Le;const bt=Symbol(""),oo=Symbol("");class xo{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ni(this,o)}run(){if(!this.active)return this.fn();let t=Le,n=st;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Le,Le=this,st=!0,it=1<<++Ft,Ft<=no?Ri(this):Zo(this),this.fn()}finally{Ft<=no&&Pi(this),it=1<<--Ft,Le=this.parent,st=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Le===this?this.deferStop=!0:this.active&&(Zo(this),this.onStop&&this.onStop(),this.active=!1)}}function Zo(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let st=!0;const Js=[];function Rt(){Js.push(st),st=!1}function Pt(){const e=Js.pop();st=e===void 0?!0:e}function ke(e,t,n){if(st&&Le){let o=to.get(e);o||to.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=yo()),Qs(s)}}function Qs(e,t){let n=!1;Ft<=no?Vs(e)||(e.n|=it,n=!Zs(e)):n=!e.has(Le),n&&(e.add(Le),Le.deps.push(e))}function qe(e,t,n,o,s,r){const i=to.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&F(e)){const c=Number(o);i.forEach((f,d)=>{(d==="length"||d>=c)&&l.push(f)})}else switch(n!==void 0&&l.push(i.get(n)),t){case"add":F(e)?mo(n)&&l.push(i.get("length")):(l.push(i.get(bt)),Ot(e)&&l.push(i.get(oo)));break;case"delete":F(e)||(l.push(i.get(bt)),Ot(e)&&l.push(i.get(oo)));break;case"set":Ot(e)&&l.push(i.get(bt));break}if(l.length===1)l[0]&&so(l[0]);else{const c=[];for(const f of l)f&&c.push(...f);so(yo(c))}}function so(e,t){const n=F(e)?e:[...e];for(const o of n)o.computed&&Vo(o);for(const o of n)o.computed||Vo(o)}function Vo(e,t){(e!==Le||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Bi=po("__proto__,__v_isRef,__isVue"),er=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(bo)),Li=wo(),ji=wo(!1,!0),zi=wo(!0),Jo=Di();function Di(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=Z(this);for(let r=0,i=this.length;r<i;r++)ke(o,"get",r+"");const s=o[t](...n);return s===-1||s===!1?o[t](...n.map(Z)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Rt();const o=Z(this)[t].apply(this,n);return Pt(),o}}),e}function Fi(e){const t=Z(this);return ke(t,"has",e),t.hasOwnProperty(e)}function wo(e=!1,t=!1){return function(o,s,r){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&r===(e?t?ol:rr:t?sr:or).get(o))return o;const i=F(o);if(!e){if(i&&q(Jo,s))return Reflect.get(Jo,s,r);if(s==="hasOwnProperty")return Fi}const l=Reflect.get(o,s,r);return(bo(s)?er.has(s):Bi(s))||(e||ke(o,"get",s),t)?l:we(l)?i&&mo(s)?l:l.value:le(l)?e?ir(l):Oo(l):l}}const Ui=tr(),Hi=tr(!0);function tr(e=!1){return function(n,o,s,r){let i=n[o];if(It(i)&&we(i)&&!we(s))return!1;if(!e&&(!wn(s)&&!It(s)&&(i=Z(i),s=Z(s)),!F(n)&&we(i)&&!we(s)))return i.value=s,!0;const l=F(n)&&mo(o)?Number(o)<n.length:q(n,o),c=Reflect.set(n,o,s,r);return n===Z(r)&&(l?Gt(s,i)&&qe(n,"set",o,s):qe(n,"add",o,s)),c}}function Ki(e,t){const n=q(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&n&&qe(e,"delete",t,void 0),o}function Xi(e,t){const n=Reflect.has(e,t);return(!bo(t)||!er.has(t))&&ke(e,"has",t),n}function Wi(e){return ke(e,"iterate",F(e)?"length":bt),Reflect.ownKeys(e)}const nr={get:Li,set:Ui,deleteProperty:Ki,has:Xi,ownKeys:Wi},Yi={get:zi,set(e,t){return!0},deleteProperty(e,t){return!0}},Gi=de({},nr,{get:ji,set:Hi}),Eo=e=>e,Nn=e=>Reflect.getPrototypeOf(e);function cn(e,t,n=!1,o=!1){e=e.__v_raw;const s=Z(e),r=Z(t);n||(t!==r&&ke(s,"get",t),ke(s,"get",r));const{has:i}=Nn(s),l=o?Eo:n?Co:Zt;if(i.call(s,t))return l(e.get(t));if(i.call(s,r))return l(e.get(r));e!==s&&e.get(t)}function an(e,t=!1){const n=this.__v_raw,o=Z(n),s=Z(e);return t||(e!==s&&ke(o,"has",e),ke(o,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function fn(e,t=!1){return e=e.__v_raw,!t&&ke(Z(e),"iterate",bt),Reflect.get(e,"size",e)}function Qo(e){e=Z(e);const t=Z(this);return Nn(t).has.call(t,e)||(t.add(e),qe(t,"add",e,e)),this}function es(e,t){t=Z(t);const n=Z(this),{has:o,get:s}=Nn(n);let r=o.call(n,e);r||(e=Z(e),r=o.call(n,e));const i=s.call(n,e);return n.set(e,t),r?Gt(t,i)&&qe(n,"set",e,t):qe(n,"add",e,t),this}function ts(e){const t=Z(this),{has:n,get:o}=Nn(t);let s=n.call(t,e);s||(e=Z(e),s=n.call(t,e)),o&&o.call(t,e);const r=t.delete(e);return s&&qe(t,"delete",e,void 0),r}function ns(){const e=Z(this),t=e.size!==0,n=e.clear();return t&&qe(e,"clear",void 0,void 0),n}function un(e,t){return function(o,s){const r=this,i=r.__v_raw,l=Z(i),c=t?Eo:e?Co:Zt;return!e&&ke(l,"iterate",bt),i.forEach((f,d)=>o.call(s,c(f),c(d),r))}}function dn(e,t,n){return function(...o){const s=this.__v_raw,r=Z(s),i=Ot(r),l=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,f=s[e](...o),d=n?Eo:t?Co:Zt;return!t&&ke(r,"iterate",c?oo:bt),{next(){const{value:y,done:x}=f.next();return x?{value:y,done:x}:{value:l?[d(y[0]),d(y[1])]:d(y),done:x}},[Symbol.iterator](){return this}}}}function Je(e){return function(...t){return e==="delete"?!1:this}}function qi(){const e={get(r){return cn(this,r)},get size(){return fn(this)},has:an,add:Qo,set:es,delete:ts,clear:ns,forEach:un(!1,!1)},t={get(r){return cn(this,r,!1,!0)},get size(){return fn(this)},has:an,add:Qo,set:es,delete:ts,clear:ns,forEach:un(!1,!0)},n={get(r){return cn(this,r,!0)},get size(){return fn(this,!0)},has(r){return an.call(this,r,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:un(!0,!1)},o={get(r){return cn(this,r,!0,!0)},get size(){return fn(this,!0)},has(r){return an.call(this,r,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=dn(r,!1,!1),n[r]=dn(r,!0,!1),t[r]=dn(r,!1,!0),o[r]=dn(r,!0,!0)}),[e,n,t,o]}const[Zi,Vi,Ji,Qi]=qi();function So(e,t){const n=t?e?Qi:Ji:e?Vi:Zi;return(o,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(q(n,s)&&s in o?n:o,s,r)}const el={get:So(!1,!1)},tl={get:So(!1,!0)},nl={get:So(!0,!1)},or=new WeakMap,sr=new WeakMap,rr=new WeakMap,ol=new WeakMap;function sl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rl(e){return e.__v_skip||!Object.isExtensible(e)?0:sl(yi(e))}function Oo(e){return It(e)?e:To(e,!1,nr,el,or)}function il(e){return To(e,!1,Gi,tl,sr)}function ir(e){return To(e,!0,Yi,nl,rr)}function To(e,t,n,o,s){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const i=rl(e);if(i===0)return e;const l=new Proxy(e,i===2?o:n);return s.set(e,l),l}function Tt(e){return It(e)?Tt(e.__v_raw):!!(e&&e.__v_isReactive)}function It(e){return!!(e&&e.__v_isReadonly)}function wn(e){return!!(e&&e.__v_isShallow)}function lr(e){return Tt(e)||It(e)}function Z(e){const t=e&&e.__v_raw;return t?Z(t):e}function cr(e){return xn(e,"__v_skip",!0),e}const Zt=e=>le(e)?Oo(e):e,Co=e=>le(e)?ir(e):e;function ar(e){st&&Le&&(e=Z(e),Qs(e.dep||(e.dep=yo())))}function fr(e,t){e=Z(e);const n=e.dep;n&&so(n)}function we(e){return!!(e&&e.__v_isRef===!0)}function ll(e){return cl(e,!1)}function cl(e,t){return we(e)?e:new al(e,t)}class al{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Z(t),this._value=n?t:Zt(t)}get value(){return ar(this),this._value}set value(t){const n=this.__v_isShallow||wn(t)||It(t);t=n?t:Z(t),Gt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Zt(t),fr(this))}}function fl(e){return we(e)?e.value:e}const ul={get:(e,t,n)=>fl(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return we(s)&&!we(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function ur(e){return Tt(e)?e:new Proxy(e,ul)}class dl{constructor(t,n,o,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new xo(t,()=>{this._dirty||(this._dirty=!0,fr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=Z(this);return ar(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function _l(e,t,n=!1){let o,s;const r=K(e);return r?(o=e,s=ze):(o=e.get,s=e.set),new dl(o,s,r||!s,n)}function rt(e,t,n,o){let s;try{s=o?e(...o):e()}catch(r){$n(r,t,n)}return s}function Re(e,t,n,o){if(K(e)){const r=rt(e,t,n,o);return r&&Ks(r)&&r.catch(i=>{$n(i,t,n)}),r}const s=[];for(let r=0;r<e.length;r++)s.push(Re(e[r],t,n,o));return s}function $n(e,t,n,o=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,l=n;for(;r;){const f=r.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,i,l)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){rt(c,null,10,[e,i,l]);return}}pl(e,n,s,o)}function pl(e,t,n,o=!0){console.error(e)}let Vt=!1,ro=!1;const xe=[];let He=0;const Ct=[];let Ye=null,_t=0;const dr=Promise.resolve();let Mo=null;function gl(e){const t=Mo||dr;return e?t.then(this?e.bind(this):e):t}function hl(e){let t=He+1,n=xe.length;for(;t<n;){const o=t+n>>>1;Jt(xe[o])<e?t=o+1:n=o}return t}function ko(e){(!xe.length||!xe.includes(e,Vt&&e.allowRecurse?He+1:He))&&(e.id==null?xe.push(e):xe.splice(hl(e.id),0,e),_r())}function _r(){!Vt&&!ro&&(ro=!0,Mo=dr.then(gr))}function bl(e){const t=xe.indexOf(e);t>He&&xe.splice(t,1)}function ml(e){F(e)?Ct.push(...e):(!Ye||!Ye.includes(e,e.allowRecurse?_t+1:_t))&&Ct.push(e),_r()}function os(e,t=Vt?He+1:0){for(;t<xe.length;t++){const n=xe[t];n&&n.pre&&(xe.splice(t,1),t--,n())}}function pr(e){if(Ct.length){const t=[...new Set(Ct)];if(Ct.length=0,Ye){Ye.push(...t);return}for(Ye=t,Ye.sort((n,o)=>Jt(n)-Jt(o)),_t=0;_t<Ye.length;_t++)Ye[_t]();Ye=null,_t=0}}const Jt=e=>e.id==null?1/0:e.id,vl=(e,t)=>{const n=Jt(e)-Jt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function gr(e){ro=!1,Vt=!0,xe.sort(vl);const t=ze;try{for(He=0;He<xe.length;He++){const n=xe[He];n&&n.active!==!1&&rt(n,null,14)}}finally{He=0,xe.length=0,pr(),Vt=!1,Mo=null,(xe.length||Ct.length)&&gr()}}function yl(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||ie;let s=n;const r=t.startsWith("update:"),i=r&&t.slice(7);if(i&&i in o){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:y,trim:x}=o[d]||ie;x&&(s=n.map($=>_e($)?$.trim():$)),y&&(s=n.map(Ei))}let l,c=o[l=Xn(t)]||o[l=Xn(Ke(t))];!c&&r&&(c=o[l=Xn($t(t))]),c&&Re(c,e,6,s);const f=o[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Re(f,e,6,s)}}function hr(e,t,n=!1){const o=t.emitsCache,s=o.get(e);if(s!==void 0)return s;const r=e.emits;let i={},l=!1;if(!K(e)){const c=f=>{const d=hr(f,t,!0);d&&(l=!0,de(i,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!l?(le(e)&&o.set(e,null),null):(F(r)?r.forEach(c=>i[c]=null):de(i,r),le(e)&&o.set(e,i),i)}function Rn(e,t){return!e||!Mn(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,$t(t))||q(e,t))}let me=null,Pn=null;function En(e){const t=me;return me=e,Pn=e&&e.type.__scopeId||null,t}function ve(e){Pn=e}function ye(){Pn=null}function Qt(e,t=me,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&hs(-1);const r=En(t);let i;try{i=e(...s)}finally{En(r),o._d&&hs(1)}return i};return o._n=!0,o._c=!0,o._d=!0,o}function Yn(e){const{type:t,vnode:n,proxy:o,withProxy:s,props:r,propsOptions:[i],slots:l,attrs:c,emit:f,render:d,renderCache:y,data:x,setupState:$,ctx:W,inheritAttrs:P}=e;let J,se;const ee=En(e);try{if(n.shapeFlag&4){const j=s||o;J=Ue(d.call(j,j,y,r,$,x,W)),se=c}else{const j=t;J=Ue(j.length>1?j(r,{attrs:c,slots:l,emit:f}):j(r,null)),se=t.props?c:xl(c)}}catch(j){Wt.length=0,$n(j,e,1),J=ne(Pe)}let te=J;if(se&&P!==!1){const j=Object.keys(se),{shapeFlag:ce}=te;j.length&&ce&7&&(i&&j.some(go)&&(se=wl(se,i)),te=lt(te,se))}return n.dirs&&(te=lt(te),te.dirs=te.dirs?te.dirs.concat(n.dirs):n.dirs),n.transition&&(te.transition=n.transition),J=te,En(ee),J}const xl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Mn(n))&&((t||(t={}))[n]=e[n]);return t},wl=(e,t)=>{const n={};for(const o in e)(!go(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function El(e,t,n){const{props:o,children:s,component:r}=e,{props:i,children:l,patchFlag:c}=t,f=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?ss(o,i,f):!!i;if(c&8){const d=t.dynamicProps;for(let y=0;y<d.length;y++){const x=d[y];if(i[x]!==o[x]&&!Rn(f,x))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:o===i?!1:o?i?ss(o,i,f):!0:!!i;return!1}function ss(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const r=o[s];if(t[r]!==e[r]&&!Rn(n,r))return!0}return!1}function Sl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ol=e=>e.__isSuspense;function Tl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):ml(e)}const _n={};function hn(e,t,n){return br(e,t,n)}function br(e,t,{immediate:n,deep:o,flush:s,onTrack:r,onTrigger:i}=ie){var l;const c=$i()===((l=he)==null?void 0:l.scope)?he:null;let f,d=!1,y=!1;if(we(e)?(f=()=>e.value,d=wn(e)):Tt(e)?(f=()=>e,o=!0):F(e)?(y=!0,d=e.some(j=>Tt(j)||wn(j)),f=()=>e.map(j=>{if(we(j))return j.value;if(Tt(j))return ht(j);if(K(j))return rt(j,c,2)})):K(e)?t?f=()=>rt(e,c,2):f=()=>{if(!(c&&c.isUnmounted))return x&&x(),Re(e,c,3,[$])}:f=ze,t&&o){const j=f;f=()=>ht(j())}let x,$=j=>{x=ee.onStop=()=>{rt(j,c,4)}},W;if(on)if($=ze,t?n&&Re(t,c,3,[f(),y?[]:void 0,$]):f(),s==="sync"){const j=Ec();W=j.__watcherHandles||(j.__watcherHandles=[])}else return ze;let P=y?new Array(e.length).fill(_n):_n;const J=()=>{if(ee.active)if(t){const j=ee.run();(o||d||(y?j.some((ce,ge)=>Gt(ce,P[ge])):Gt(j,P)))&&(x&&x(),Re(t,c,3,[j,P===_n?void 0:y&&P[0]===_n?[]:P,$]),P=j)}else ee.run()};J.allowRecurse=!!t;let se;s==="sync"?se=J:s==="post"?se=()=>Ce(J,c&&c.suspense):(J.pre=!0,c&&(J.id=c.uid),se=()=>ko(J));const ee=new xo(f,se);t?n?J():P=ee.run():s==="post"?Ce(ee.run.bind(ee),c&&c.suspense):ee.run();const te=()=>{ee.stop(),c&&c.scope&&ho(c.scope.effects,ee)};return W&&W.push(te),te}function Cl(e,t,n){const o=this.proxy,s=_e(e)?e.includes(".")?mr(o,e):()=>o[e]:e.bind(o,o);let r;K(t)?r=t:(r=t.handler,n=t);const i=he;At(this);const l=br(s,r.bind(o),n);return i?At(i):mt(),l}function mr(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}function ht(e,t){if(!le(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),we(e))ht(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)ht(e[n],t);else if(Hs(e)||Ot(e))e.forEach(n=>{ht(n,t)});else if(Ws(e))for(const n in e)ht(e[n],t);return e}function rs(e,t){const n=me;if(n===null)return e;const o=Fn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,l,c,f=ie]=t[r];i&&(K(i)&&(i={mounted:i,updated:i}),i.deep&&ht(l),s.push({dir:i,instance:o,value:l,oldValue:void 0,arg:c,modifiers:f}))}return e}function ft(e,t,n,o){const s=e.dirs,r=t&&t.dirs;for(let i=0;i<s.length;i++){const l=s[i];r&&(l.oldValue=r[i].value);let c=l.dir[o];c&&(Rt(),Re(c,n,8,[e.el,l,e,t]),Pt())}}function vr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Er(()=>{e.isMounted=!0}),Or(()=>{e.isUnmounting=!0}),e}const $e=[Function,Array],yr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$e,onEnter:$e,onAfterEnter:$e,onEnterCancelled:$e,onBeforeLeave:$e,onLeave:$e,onAfterLeave:$e,onLeaveCancelled:$e,onBeforeAppear:$e,onAppear:$e,onAfterAppear:$e,onAppearCancelled:$e},Ml={name:"BaseTransition",props:yr,setup(e,{slots:t}){const n=zr(),o=vr();let s;return()=>{const r=t.default&&Io(t.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){for(const P of r)if(P.type!==Pe){i=P;break}}const l=Z(e),{mode:c}=l;if(o.isLeaving)return Gn(i);const f=is(i);if(!f)return Gn(i);const d=en(f,l,o,n);tn(f,d);const y=n.subTree,x=y&&is(y);let $=!1;const{getTransitionKey:W}=f.type;if(W){const P=W();s===void 0?s=P:P!==s&&(s=P,$=!0)}if(x&&x.type!==Pe&&(!pt(f,x)||$)){const P=en(x,l,o,n);if(tn(x,P),c==="out-in")return o.isLeaving=!0,P.afterLeave=()=>{o.isLeaving=!1,n.update.active!==!1&&n.update()},Gn(i);c==="in-out"&&f.type!==Pe&&(P.delayLeave=(J,se,ee)=>{const te=xr(o,x);te[String(x.key)]=x,J._leaveCb=()=>{se(),J._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=ee})}return i}}},kl=Ml;function xr(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function en(e,t,n,o){const{appear:s,mode:r,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:y,onLeave:x,onAfterLeave:$,onLeaveCancelled:W,onBeforeAppear:P,onAppear:J,onAfterAppear:se,onAppearCancelled:ee}=t,te=String(e.key),j=xr(n,e),ce=(U,G)=>{U&&Re(U,o,9,G)},ge=(U,G)=>{const Q=G[1];ce(U,G),F(U)?U.every(ue=>ue.length<=1)&&Q():U.length<=1&&Q()},Oe={mode:r,persisted:i,beforeEnter(U){let G=l;if(!n.isMounted)if(s)G=P||l;else return;U._leaveCb&&U._leaveCb(!0);const Q=j[te];Q&&pt(e,Q)&&Q.el._leaveCb&&Q.el._leaveCb(),ce(G,[U])},enter(U){let G=c,Q=f,ue=d;if(!n.isMounted)if(s)G=J||c,Q=se||f,ue=ee||d;else return;let R=!1;const oe=U._enterCb=be=>{R||(R=!0,be?ce(ue,[U]):ce(Q,[U]),Oe.delayedLeave&&Oe.delayedLeave(),U._enterCb=void 0)};G?ge(G,[U,oe]):oe()},leave(U,G){const Q=String(e.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return G();ce(y,[U]);let ue=!1;const R=U._leaveCb=oe=>{ue||(ue=!0,G(),oe?ce(W,[U]):ce($,[U]),U._leaveCb=void 0,j[Q]===e&&delete j[Q])};j[Q]=e,x?ge(x,[U,R]):R()},clone(U){return en(U,t,n,o)}};return Oe}function Gn(e){if(Bn(e))return e=lt(e),e.children=null,e}function is(e){return Bn(e)?e.children?e.children[0]:void 0:e}function tn(e,t){e.shapeFlag&6&&e.component?tn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Io(e,t=!1,n){let o=[],s=0;for(let r=0;r<e.length;r++){let i=e[r];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===Me?(i.patchFlag&128&&s++,o=o.concat(Io(i.children,t,l))):(t||i.type!==Pe)&&o.push(l!=null?lt(i,{key:l}):i)}if(s>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function Il(e,t){return K(e)?(()=>de({name:e.name},t,{setup:e}))():e}const Kt=e=>!!e.type.__asyncLoader,Bn=e=>e.type.__isKeepAlive;function Al(e,t){wr(e,"a",t)}function Nl(e,t){wr(e,"da",t)}function wr(e,t,n=he){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Ln(t,o,n),n){let s=n.parent;for(;s&&s.parent;)Bn(s.parent.vnode)&&$l(o,t,n,s),s=s.parent}}function $l(e,t,n,o){const s=Ln(t,e,o,!0);Tr(()=>{ho(o[t],s)},n)}function Ln(e,t,n=he,o=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Rt(),At(n);const l=Re(t,n,e,i);return mt(),Pt(),l});return o?s.unshift(r):s.push(r),r}}const Ze=e=>(t,n=he)=>(!on||e==="sp")&&Ln(e,(...o)=>t(...o),n),Rl=Ze("bm"),Er=Ze("m"),Pl=Ze("bu"),Sr=Ze("u"),Or=Ze("bum"),Tr=Ze("um"),Bl=Ze("sp"),Ll=Ze("rtg"),jl=Ze("rtc");function zl(e,t=he){Ln("ec",e,t)}const Ao="components",Dl="directives";function Ge(e,t){return No(Ao,e,!0,t)||e}const Cr=Symbol.for("v-ndc");function Fl(e){return _e(e)?No(Ao,e,!1)||e:e||Cr}function Ul(e){return No(Dl,e)}function No(e,t,n=!0,o=!1){const s=me||he;if(s){const r=s.type;if(e===Ao){const l=yc(r,!1);if(l&&(l===t||l===Ke(t)||l===An(Ke(t))))return r}const i=ls(s[e]||r[e],t)||ls(s.appContext[e],t);return!i&&o?r:i}}function ls(e,t){return e&&(e[t]||e[Ke(t)]||e[An(Ke(t))])}function Hl(e,t,n,o){let s;const r=n&&n[o];if(F(e)||_e(e)){s=new Array(e.length);for(let i=0,l=e.length;i<l;i++)s[i]=t(e[i],i,void 0,r&&r[i])}else if(typeof e=="number"){s=new Array(e);for(let i=0;i<e;i++)s[i]=t(i+1,i,void 0,r&&r[i])}else if(le(e))if(e[Symbol.iterator])s=Array.from(e,(i,l)=>t(i,l,void 0,r&&r[l]));else{const i=Object.keys(e);s=new Array(i.length);for(let l=0,c=i.length;l<c;l++){const f=i[l];s[l]=t(e[f],f,l,r&&r[l])}}else s=[];return n&&(n[o]=s),s}function Kl(e,t,n={},o,s){if(me.isCE||me.parent&&Kt(me.parent)&&me.parent.isCE)return t!=="default"&&(n.name=t),ne("slot",n,o&&o());let r=e[t];r&&r._c&&(r._d=!1),k();const i=r&&Mr(r(n)),l=Mt(Me,{key:n.key||i&&i.key||`_${t}`},i||(o?o():[]),i&&e._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function Mr(e){return e.some(t=>Tn(t)?!(t.type===Pe||t.type===Me&&!Mr(t.children)):!0)?e:null}const io=e=>e?Dr(e)?Fn(e)||e.proxy:io(e.parent):null,Xt=de(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>io(e.parent),$root:e=>io(e.root),$emit:e=>e.emit,$options:e=>$o(e),$forceUpdate:e=>e.f||(e.f=()=>ko(e.update)),$nextTick:e=>e.n||(e.n=gl.bind(e.proxy)),$watch:e=>Cl.bind(e)}),qn=(e,t)=>e!==ie&&!e.__isScriptSetup&&q(e,t),Xl={get({_:e},t){const{ctx:n,setupState:o,data:s,props:r,accessCache:i,type:l,appContext:c}=e;let f;if(t[0]!=="$"){const $=i[t];if($!==void 0)switch($){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(qn(o,t))return i[t]=1,o[t];if(s!==ie&&q(s,t))return i[t]=2,s[t];if((f=e.propsOptions[0])&&q(f,t))return i[t]=3,r[t];if(n!==ie&&q(n,t))return i[t]=4,n[t];lo&&(i[t]=0)}}const d=Xt[t];let y,x;if(d)return t==="$attrs"&&ke(e,"get",t),d(e);if((y=l.__cssModules)&&(y=y[t]))return y;if(n!==ie&&q(n,t))return i[t]=4,n[t];if(x=c.config.globalProperties,q(x,t))return x[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:r}=e;return qn(s,t)?(s[t]=n,!0):o!==ie&&q(o,t)?(o[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,propsOptions:r}},i){let l;return!!n[i]||e!==ie&&q(e,i)||qn(t,i)||(l=r[0])&&q(l,i)||q(o,i)||q(Xt,i)||q(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function cs(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let lo=!0;function Wl(e){const t=$o(e),n=e.proxy,o=e.ctx;lo=!1,t.beforeCreate&&as(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:i,watch:l,provide:c,inject:f,created:d,beforeMount:y,mounted:x,beforeUpdate:$,updated:W,activated:P,deactivated:J,beforeDestroy:se,beforeUnmount:ee,destroyed:te,unmounted:j,render:ce,renderTracked:ge,renderTriggered:Oe,errorCaptured:U,serverPrefetch:G,expose:Q,inheritAttrs:ue,components:R,directives:oe,filters:be}=t;if(f&&Yl(f,o,null),i)for(const b in i){const w=i[b];K(w)&&(o[b]=w.bind(n))}if(s){const b=s.call(n,n);le(b)&&(e.data=Oo(b))}if(lo=!0,r)for(const b in r){const w=r[b],z=K(w)?w.bind(n,n):K(w.get)?w.get.bind(n,n):ze,Y=!K(w)&&K(w.set)?w.set.bind(n):ze,V=Ht({get:z,set:Y});Object.defineProperty(o,b,{enumerable:!0,configurable:!0,get:()=>V.value,set:re=>V.value=re})}if(l)for(const b in l)kr(l[b],o,n,b);if(c){const b=K(c)?c.call(n):c;Reflect.ownKeys(b).forEach(w=>{Ql(w,b[w])})}d&&as(d,e,"c");function ae(b,w){F(w)?w.forEach(z=>b(z.bind(n))):w&&b(w.bind(n))}if(ae(Rl,y),ae(Er,x),ae(Pl,$),ae(Sr,W),ae(Al,P),ae(Nl,J),ae(zl,U),ae(jl,ge),ae(Ll,Oe),ae(Or,ee),ae(Tr,j),ae(Bl,G),F(Q))if(Q.length){const b=e.exposed||(e.exposed={});Q.forEach(w=>{Object.defineProperty(b,w,{get:()=>n[w],set:z=>n[w]=z})})}else e.exposed||(e.exposed={});ce&&e.render===ze&&(e.render=ce),ue!=null&&(e.inheritAttrs=ue),R&&(e.components=R),oe&&(e.directives=oe)}function Yl(e,t,n=ze){F(e)&&(e=co(e));for(const o in e){const s=e[o];let r;le(s)?"default"in s?r=bn(s.from||o,s.default,!0):r=bn(s.from||o):r=bn(s),we(r)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[o]=r}}function as(e,t,n){Re(F(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function kr(e,t,n,o){const s=o.includes(".")?mr(n,o):()=>n[o];if(_e(e)){const r=t[e];K(r)&&hn(s,r)}else if(K(e))hn(s,e.bind(n));else if(le(e))if(F(e))e.forEach(r=>kr(r,t,n,o));else{const r=K(e.handler)?e.handler.bind(n):t[e.handler];K(r)&&hn(s,r,e)}}function $o(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,l=r.get(t);let c;return l?c=l:!s.length&&!n&&!o?c=t:(c={},s.length&&s.forEach(f=>Sn(c,f,i,!0)),Sn(c,t,i)),le(t)&&r.set(t,c),c}function Sn(e,t,n,o=!1){const{mixins:s,extends:r}=t;r&&Sn(e,r,n,!0),s&&s.forEach(i=>Sn(e,i,n,!0));for(const i in t)if(!(o&&i==="expose")){const l=Gl[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Gl={data:fs,props:us,emits:us,methods:Ut,computed:Ut,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Ut,directives:Ut,watch:Zl,provide:fs,inject:ql};function fs(e,t){return t?e?function(){return de(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function ql(e,t){return Ut(co(e),co(t))}function co(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Se(e,t){return e?[...new Set([].concat(e,t))]:t}function Ut(e,t){return e?de(Object.create(null),e,t):t}function us(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:de(Object.create(null),cs(e),cs(t??{})):t}function Zl(e,t){if(!e)return t;if(!t)return e;const n=de(Object.create(null),e);for(const o in t)n[o]=Se(e[o],t[o]);return n}function Ir(){return{app:null,config:{isNativeTag:bi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vl=0;function Jl(e,t){return function(o,s=null){K(o)||(o=de({},o)),s!=null&&!le(s)&&(s=null);const r=Ir(),i=new Set;let l=!1;const c=r.app={_uid:Vl++,_component:o,_props:s,_container:null,_context:r,_instance:null,version:Sc,get config(){return r.config},set config(f){},use(f,...d){return i.has(f)||(f&&K(f.install)?(i.add(f),f.install(c,...d)):K(f)&&(i.add(f),f(c,...d))),c},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),c},component(f,d){return d?(r.components[f]=d,c):r.components[f]},directive(f,d){return d?(r.directives[f]=d,c):r.directives[f]},mount(f,d,y){if(!l){const x=ne(o,s);return x.appContext=r,d&&t?t(x,f):e(x,f,y),l=!0,c._container=f,f.__vue_app__=c,Fn(x.component)||x.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(f,d){return r.provides[f]=d,c},runWithContext(f){On=c;try{return f()}finally{On=null}}};return c}}let On=null;function Ql(e,t){if(he){let n=he.provides;const o=he.parent&&he.parent.provides;o===n&&(n=he.provides=Object.create(o)),n[e]=t}}function bn(e,t,n=!1){const o=he||me;if(o||On){const s=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:On._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&K(t)?t.call(o&&o.proxy):t}}function ec(e,t,n,o=!1){const s={},r={};xn(r,zn,1),e.propsDefaults=Object.create(null),Ar(e,t,s,r);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=o?s:il(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function tc(e,t,n,o){const{props:s,attrs:r,vnode:{patchFlag:i}}=e,l=Z(s),[c]=e.propsOptions;let f=!1;if((o||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let y=0;y<d.length;y++){let x=d[y];if(Rn(e.emitsOptions,x))continue;const $=t[x];if(c)if(q(r,x))$!==r[x]&&(r[x]=$,f=!0);else{const W=Ke(x);s[W]=ao(c,l,W,$,e,!1)}else $!==r[x]&&(r[x]=$,f=!0)}}}else{Ar(e,t,s,r)&&(f=!0);let d;for(const y in l)(!t||!q(t,y)&&((d=$t(y))===y||!q(t,d)))&&(c?n&&(n[y]!==void 0||n[d]!==void 0)&&(s[y]=ao(c,l,y,void 0,e,!0)):delete s[y]);if(r!==l)for(const y in r)(!t||!q(t,y))&&(delete r[y],f=!0)}f&&qe(e,"set","$attrs")}function Ar(e,t,n,o){const[s,r]=e.propsOptions;let i=!1,l;if(t)for(let c in t){if(gn(c))continue;const f=t[c];let d;s&&q(s,d=Ke(c))?!r||!r.includes(d)?n[d]=f:(l||(l={}))[d]=f:Rn(e.emitsOptions,c)||(!(c in o)||f!==o[c])&&(o[c]=f,i=!0)}if(r){const c=Z(n),f=l||ie;for(let d=0;d<r.length;d++){const y=r[d];n[y]=ao(s,c,y,f[y],e,!q(f,y))}}return i}function ao(e,t,n,o,s,r){const i=e[n];if(i!=null){const l=q(i,"default");if(l&&o===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&K(c)){const{propsDefaults:f}=s;n in f?o=f[n]:(At(s),o=f[n]=c.call(null,t),mt())}else o=c}i[0]&&(r&&!l?o=!1:i[1]&&(o===""||o===$t(n))&&(o=!0))}return o}function Nr(e,t,n=!1){const o=t.propsCache,s=o.get(e);if(s)return s;const r=e.props,i={},l=[];let c=!1;if(!K(e)){const d=y=>{c=!0;const[x,$]=Nr(y,t,!0);de(i,x),$&&l.push(...$)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!c)return le(e)&&o.set(e,St),St;if(F(r))for(let d=0;d<r.length;d++){const y=Ke(r[d]);ds(y)&&(i[y]=ie)}else if(r)for(const d in r){const y=Ke(d);if(ds(y)){const x=r[d],$=i[y]=F(x)||K(x)?{type:x}:de({},x);if($){const W=gs(Boolean,$.type),P=gs(String,$.type);$[0]=W>-1,$[1]=P<0||W<P,(W>-1||q($,"default"))&&l.push(y)}}}const f=[i,l];return le(e)&&o.set(e,f),f}function ds(e){return e[0]!=="$"}function _s(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ps(e,t){return _s(e)===_s(t)}function gs(e,t){return F(t)?t.findIndex(n=>ps(n,e)):K(t)&&ps(t,e)?0:-1}const $r=e=>e[0]==="_"||e==="$stable",Ro=e=>F(e)?e.map(Ue):[Ue(e)],nc=(e,t,n)=>{if(t._n)return t;const o=Qt((...s)=>Ro(t(...s)),n);return o._c=!1,o},Rr=(e,t,n)=>{const o=e._ctx;for(const s in e){if($r(s))continue;const r=e[s];if(K(r))t[s]=nc(s,r,o);else if(r!=null){const i=Ro(r);t[s]=()=>i}}},Pr=(e,t)=>{const n=Ro(t);e.slots.default=()=>n},oc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Z(t),xn(t,"_",n)):Rr(t,e.slots={})}else e.slots={},t&&Pr(e,t);xn(e.slots,zn,1)},sc=(e,t,n)=>{const{vnode:o,slots:s}=e;let r=!0,i=ie;if(o.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:(de(s,t),!n&&l===1&&delete s._):(r=!t.$stable,Rr(t,s)),i=t}else t&&(Pr(e,t),i={default:1});if(r)for(const l in s)!$r(l)&&!(l in i)&&delete s[l]};function fo(e,t,n,o,s=!1){if(F(e)){e.forEach((x,$)=>fo(x,t&&(F(t)?t[$]:t),n,o,s));return}if(Kt(o)&&!s)return;const r=o.shapeFlag&4?Fn(o.component)||o.component.proxy:o.el,i=s?null:r,{i:l,r:c}=e,f=t&&t.r,d=l.refs===ie?l.refs={}:l.refs,y=l.setupState;if(f!=null&&f!==c&&(_e(f)?(d[f]=null,q(y,f)&&(y[f]=null)):we(f)&&(f.value=null)),K(c))rt(c,l,12,[i,d]);else{const x=_e(c),$=we(c);if(x||$){const W=()=>{if(e.f){const P=x?q(y,c)?y[c]:d[c]:c.value;s?F(P)&&ho(P,r):F(P)?P.includes(r)||P.push(r):x?(d[c]=[r],q(y,c)&&(y[c]=d[c])):(c.value=[r],e.k&&(d[e.k]=c.value))}else x?(d[c]=i,q(y,c)&&(y[c]=i)):$&&(c.value=i,e.k&&(d[e.k]=i))};i?(W.id=-1,Ce(W,n)):W()}}}const Ce=Tl;function rc(e){return ic(e)}function ic(e,t){const n=eo();n.__VUE__=!0;const{insert:o,remove:s,patchProp:r,createElement:i,createText:l,createComment:c,setText:f,setElementText:d,parentNode:y,nextSibling:x,setScopeId:$=ze,insertStaticContent:W}=e,P=(a,u,p,m=null,g=null,S=null,C=!1,_=null,O=!!u.dynamicChildren)=>{if(a===u)return;a&&!pt(a,u)&&(m=ct(a),re(a,g,S,!0),a=null),u.patchFlag===-2&&(O=!1,u.dynamicChildren=null);const{type:h,ref:T,shapeFlag:M}=u;switch(h){case jn:J(a,u,p,m);break;case Pe:se(a,u,p,m);break;case mn:a==null&&ee(u,p,m,C);break;case Me:R(a,u,p,m,g,S,C,_,O);break;default:M&1?ce(a,u,p,m,g,S,C,_,O):M&6?oe(a,u,p,m,g,S,C,_,O):(M&64||M&128)&&h.process(a,u,p,m,g,S,C,_,O,Xe)}T!=null&&g&&fo(T,a&&a.ref,S,u||a,!u)},J=(a,u,p,m)=>{if(a==null)o(u.el=l(u.children),p,m);else{const g=u.el=a.el;u.children!==a.children&&f(g,u.children)}},se=(a,u,p,m)=>{a==null?o(u.el=c(u.children||""),p,m):u.el=a.el},ee=(a,u,p,m)=>{[a.el,a.anchor]=W(a.children,u,p,m,a.el,a.anchor)},te=({el:a,anchor:u},p,m)=>{let g;for(;a&&a!==u;)g=x(a),o(a,p,m),a=g;o(u,p,m)},j=({el:a,anchor:u})=>{let p;for(;a&&a!==u;)p=x(a),s(a),a=p;s(u)},ce=(a,u,p,m,g,S,C,_,O)=>{C=C||u.type==="svg",a==null?ge(u,p,m,g,S,C,_,O):G(a,u,g,S,C,_,O)},ge=(a,u,p,m,g,S,C,_)=>{let O,h;const{type:T,props:M,shapeFlag:I,transition:D,dirs:X}=a;if(O=a.el=i(a.type,S,M&&M.is,M),I&8?d(O,a.children):I&16&&U(a.children,O,null,m,g,S&&T!=="foreignObject",C,_),X&&ft(a,null,m,"created"),Oe(O,a,a.scopeId,C,m),M){for(const E in M)E!=="value"&&!gn(E)&&r(O,E,null,M[E],S,a.children,m,g,pe);"value"in M&&r(O,"value",null,M.value),(h=M.onVnodeBeforeMount)&&Fe(h,m,a)}X&&ft(a,null,m,"beforeMount");const v=(!g||g&&!g.pendingBranch)&&D&&!D.persisted;v&&D.beforeEnter(O),o(O,u,p),((h=M&&M.onVnodeMounted)||v||X)&&Ce(()=>{h&&Fe(h,m,a),v&&D.enter(O),X&&ft(a,null,m,"mounted")},g)},Oe=(a,u,p,m,g)=>{if(p&&$(a,p),m)for(let S=0;S<m.length;S++)$(a,m[S]);if(g){let S=g.subTree;if(u===S){const C=g.vnode;Oe(a,C,C.scopeId,C.slotScopeIds,g.parent)}}},U=(a,u,p,m,g,S,C,_,O=0)=>{for(let h=O;h<a.length;h++){const T=a[h]=_?nt(a[h]):Ue(a[h]);P(null,T,u,p,m,g,S,C,_)}},G=(a,u,p,m,g,S,C)=>{const _=u.el=a.el;let{patchFlag:O,dynamicChildren:h,dirs:T}=u;O|=a.patchFlag&16;const M=a.props||ie,I=u.props||ie;let D;p&&ut(p,!1),(D=I.onVnodeBeforeUpdate)&&Fe(D,p,u,a),T&&ft(u,a,p,"beforeUpdate"),p&&ut(p,!0);const X=g&&u.type!=="foreignObject";if(h?Q(a.dynamicChildren,h,_,p,m,X,S):C||w(a,u,_,null,p,m,X,S,!1),O>0){if(O&16)ue(_,u,M,I,p,m,g);else if(O&2&&M.class!==I.class&&r(_,"class",null,I.class,g),O&4&&r(_,"style",M.style,I.style,g),O&8){const v=u.dynamicProps;for(let E=0;E<v.length;E++){const A=v[E],H=M[A],fe=I[A];(fe!==H||A==="value")&&r(_,A,H,fe,g,a.children,p,m,pe)}}O&1&&a.children!==u.children&&d(_,u.children)}else!C&&h==null&&ue(_,u,M,I,p,m,g);((D=I.onVnodeUpdated)||T)&&Ce(()=>{D&&Fe(D,p,u,a),T&&ft(u,a,p,"updated")},m)},Q=(a,u,p,m,g,S,C)=>{for(let _=0;_<u.length;_++){const O=a[_],h=u[_],T=O.el&&(O.type===Me||!pt(O,h)||O.shapeFlag&70)?y(O.el):p;P(O,h,T,null,m,g,S,C,!0)}},ue=(a,u,p,m,g,S,C)=>{if(p!==m){if(p!==ie)for(const _ in p)!gn(_)&&!(_ in m)&&r(a,_,p[_],null,C,u.children,g,S,pe);for(const _ in m){if(gn(_))continue;const O=m[_],h=p[_];O!==h&&_!=="value"&&r(a,_,h,O,C,u.children,g,S,pe)}"value"in m&&r(a,"value",p.value,m.value)}},R=(a,u,p,m,g,S,C,_,O)=>{const h=u.el=a?a.el:l(""),T=u.anchor=a?a.anchor:l("");let{patchFlag:M,dynamicChildren:I,slotScopeIds:D}=u;D&&(_=_?_.concat(D):D),a==null?(o(h,p,m),o(T,p,m),U(u.children,p,T,g,S,C,_,O)):M>0&&M&64&&I&&a.dynamicChildren?(Q(a.dynamicChildren,I,p,g,S,C,_),(u.key!=null||g&&u===g.subTree)&&Br(a,u,!0)):w(a,u,p,T,g,S,C,_,O)},oe=(a,u,p,m,g,S,C,_,O)=>{u.slotScopeIds=_,a==null?u.shapeFlag&512?g.ctx.activate(u,p,m,C,O):be(u,p,m,g,S,C,O):Ae(a,u,O)},be=(a,u,p,m,g,S,C)=>{const _=a.component=gc(a,m,g);if(Bn(a)&&(_.ctx.renderer=Xe),hc(_),_.asyncDep){if(g&&g.registerDep(_,ae),!a.el){const O=_.subTree=ne(Pe);se(null,O,u,p)}return}ae(_,a,u,p,g,S,C)},Ae=(a,u,p)=>{const m=u.component=a.component;if(El(a,u,p))if(m.asyncDep&&!m.asyncResolved){b(m,u,p);return}else m.next=u,bl(m.update),m.update();else u.el=a.el,m.vnode=u},ae=(a,u,p,m,g,S,C)=>{const _=()=>{if(a.isMounted){let{next:T,bu:M,u:I,parent:D,vnode:X}=a,v=T,E;ut(a,!1),T?(T.el=X.el,b(a,T,C)):T=X,M&&Wn(M),(E=T.props&&T.props.onVnodeBeforeUpdate)&&Fe(E,D,T,X),ut(a,!0);const A=Yn(a),H=a.subTree;a.subTree=A,P(H,A,y(H.el),ct(H),a,g,S),T.el=A.el,v===null&&Sl(a,A.el),I&&Ce(I,g),(E=T.props&&T.props.onVnodeUpdated)&&Ce(()=>Fe(E,D,T,X),g)}else{let T;const{el:M,props:I}=u,{bm:D,m:X,parent:v}=a,E=Kt(u);if(ut(a,!1),D&&Wn(D),!E&&(T=I&&I.onVnodeBeforeMount)&&Fe(T,v,u),ut(a,!0),M&&jt){const A=()=>{a.subTree=Yn(a),jt(M,a.subTree,a,g,null)};E?u.type.__asyncLoader().then(()=>!a.isUnmounted&&A()):A()}else{const A=a.subTree=Yn(a);P(null,A,p,m,a,g,S),u.el=A.el}if(X&&Ce(X,g),!E&&(T=I&&I.onVnodeMounted)){const A=u;Ce(()=>Fe(T,v,A),g)}(u.shapeFlag&256||v&&Kt(v.vnode)&&v.vnode.shapeFlag&256)&&a.a&&Ce(a.a,g),a.isMounted=!0,u=p=m=null}},O=a.effect=new xo(_,()=>ko(h),a.scope),h=a.update=()=>O.run();h.id=a.uid,ut(a,!0),h()},b=(a,u,p)=>{u.component=a;const m=a.vnode.props;a.vnode=u,a.next=null,tc(a,u.props,m,p),sc(a,u.children,p),Rt(),os(),Pt()},w=(a,u,p,m,g,S,C,_,O=!1)=>{const h=a&&a.children,T=a?a.shapeFlag:0,M=u.children,{patchFlag:I,shapeFlag:D}=u;if(I>0){if(I&128){Y(h,M,p,m,g,S,C,_,O);return}else if(I&256){z(h,M,p,m,g,S,C,_,O);return}}D&8?(T&16&&pe(h,g,S),M!==h&&d(p,M)):T&16?D&16?Y(h,M,p,m,g,S,C,_,O):pe(h,g,S,!0):(T&8&&d(p,""),D&16&&U(M,p,m,g,S,C,_,O))},z=(a,u,p,m,g,S,C,_,O)=>{a=a||St,u=u||St;const h=a.length,T=u.length,M=Math.min(h,T);let I;for(I=0;I<M;I++){const D=u[I]=O?nt(u[I]):Ue(u[I]);P(a[I],D,p,null,g,S,C,_,O)}h>T?pe(a,g,S,!0,!1,M):U(u,p,m,g,S,C,_,O,M)},Y=(a,u,p,m,g,S,C,_,O)=>{let h=0;const T=u.length;let M=a.length-1,I=T-1;for(;h<=M&&h<=I;){const D=a[h],X=u[h]=O?nt(u[h]):Ue(u[h]);if(pt(D,X))P(D,X,p,null,g,S,C,_,O);else break;h++}for(;h<=M&&h<=I;){const D=a[M],X=u[I]=O?nt(u[I]):Ue(u[I]);if(pt(D,X))P(D,X,p,null,g,S,C,_,O);else break;M--,I--}if(h>M){if(h<=I){const D=I+1,X=D<T?u[D].el:m;for(;h<=I;)P(null,u[h]=O?nt(u[h]):Ue(u[h]),p,X,g,S,C,_,O),h++}}else if(h>I)for(;h<=M;)re(a[h],g,S,!0),h++;else{const D=h,X=h,v=new Map;for(h=X;h<=I;h++){const Ie=u[h]=O?nt(u[h]):Ue(u[h]);Ie.key!=null&&v.set(Ie.key,h)}let E,A=0;const H=I-X+1;let fe=!1,Ne=0;const at=new Array(H);for(h=0;h<H;h++)at[h]=0;for(h=D;h<=M;h++){const Ie=a[h];if(A>=H){re(Ie,g,S,!0);continue}let De;if(Ie.key!=null)De=v.get(Ie.key);else for(E=X;E<=I;E++)if(at[E-X]===0&&pt(Ie,u[E])){De=E;break}De===void 0?re(Ie,g,S,!0):(at[De-X]=h+1,De>=Ne?Ne=De:fe=!0,P(Ie,u[De],p,null,g,S,C,_,O),A++)}const ln=fe?lc(at):St;for(E=ln.length-1,h=H-1;h>=0;h--){const Ie=X+h,De=u[Ie],Go=Ie+1<T?u[Ie+1].el:m;at[h]===0?P(null,De,p,Go,g,S,C,_,O):fe&&(E<0||h!==ln[E]?V(De,p,Go,2):E--)}}},V=(a,u,p,m,g=null)=>{const{el:S,type:C,transition:_,children:O,shapeFlag:h}=a;if(h&6){V(a.component.subTree,u,p,m);return}if(h&128){a.suspense.move(u,p,m);return}if(h&64){C.move(a,u,p,Xe);return}if(C===Me){o(S,u,p);for(let M=0;M<O.length;M++)V(O[M],u,p,m);o(a.anchor,u,p);return}if(C===mn){te(a,u,p);return}if(m!==2&&h&1&&_)if(m===0)_.beforeEnter(S),o(S,u,p),Ce(()=>_.enter(S),g);else{const{leave:M,delayLeave:I,afterLeave:D}=_,X=()=>o(S,u,p),v=()=>{M(S,()=>{X(),D&&D()})};I?I(S,X,v):v()}else o(S,u,p)},re=(a,u,p,m=!1,g=!1)=>{const{type:S,props:C,ref:_,children:O,dynamicChildren:h,shapeFlag:T,patchFlag:M,dirs:I}=a;if(_!=null&&fo(_,null,p,a,!0),T&256){u.ctx.deactivate(a);return}const D=T&1&&I,X=!Kt(a);let v;if(X&&(v=C&&C.onVnodeBeforeUnmount)&&Fe(v,u,a),T&6)Ee(a.component,p,m);else{if(T&128){a.suspense.unmount(p,m);return}D&&ft(a,null,u,"beforeUnmount"),T&64?a.type.remove(a,u,p,g,Xe,m):h&&(S!==Me||M>0&&M&64)?pe(h,u,p,!1,!0):(S===Me&&M&384||!g&&T&16)&&pe(O,u,p),m&&Te(a)}(X&&(v=C&&C.onVnodeUnmounted)||D)&&Ce(()=>{v&&Fe(v,u,a),D&&ft(a,null,u,"unmounted")},p)},Te=a=>{const{type:u,el:p,anchor:m,transition:g}=a;if(u===Me){xt(p,m);return}if(u===mn){j(a);return}const S=()=>{s(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(a.shapeFlag&1&&g&&!g.persisted){const{leave:C,delayLeave:_}=g,O=()=>C(p,S);_?_(a.el,S,O):O()}else S()},xt=(a,u)=>{let p;for(;a!==u;)p=x(a),s(a),a=p;s(u)},Ee=(a,u,p)=>{const{bum:m,scope:g,update:S,subTree:C,um:_}=a;m&&Wn(m),g.stop(),S&&(S.active=!1,re(C,a,u,p)),_&&Ce(_,u),Ce(()=>{a.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},pe=(a,u,p,m=!1,g=!1,S=0)=>{for(let C=S;C<a.length;C++)re(a[C],u,p,m,g)},ct=a=>a.shapeFlag&6?ct(a.component.subTree):a.shapeFlag&128?a.suspense.next():x(a.anchor||a.el),Bt=(a,u,p)=>{a==null?u._vnode&&re(u._vnode,null,null,!0):P(u._vnode||null,a,u,null,null,null,p),os(),pr(),u._vnode=a},Xe={p:P,um:re,m:V,r:Te,mt:be,mc:U,pc:w,pbc:Q,n:ct,o:e};let Lt,jt;return t&&([Lt,jt]=t(Xe)),{render:Bt,hydrate:Lt,createApp:Jl(Bt,Lt)}}function ut({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Br(e,t,n=!1){const o=e.children,s=t.children;if(F(o)&&F(s))for(let r=0;r<o.length;r++){const i=o[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=nt(s[r]),l.el=i.el),n||Br(i,l)),l.type===jn&&(l.el=i.el)}}function lc(e){const t=e.slice(),n=[0];let o,s,r,i,l;const c=e.length;for(o=0;o<c;o++){const f=e[o];if(f!==0){if(s=n[n.length-1],e[s]<f){t[o]=s,n.push(o);continue}for(r=0,i=n.length-1;r<i;)l=r+i>>1,e[n[l]]<f?r=l+1:i=l;f<e[n[r]]&&(r>0&&(t[o]=n[r-1]),n[r]=o)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}const cc=e=>e.__isTeleport,Me=Symbol.for("v-fgt"),jn=Symbol.for("v-txt"),Pe=Symbol.for("v-cmt"),mn=Symbol.for("v-stc"),Wt=[];let je=null;function k(e=!1){Wt.push(je=e?null:[])}function ac(){Wt.pop(),je=Wt[Wt.length-1]||null}let nn=1;function hs(e){nn+=e}function Lr(e){return e.dynamicChildren=nn>0?je||St:null,ac(),nn>0&&je&&je.push(e),e}function N(e,t,n,o,s,r){return Lr(B(e,t,n,o,s,r,!0))}function Mt(e,t,n,o,s){return Lr(ne(e,t,n,o,s,!0))}function Tn(e){return e?e.__v_isVNode===!0:!1}function pt(e,t){return e.type===t.type&&e.key===t.key}const zn="__vInternal",jr=({key:e})=>e??null,vn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?_e(e)||we(e)||K(e)?{i:me,r:e,k:t,f:!!n}:e:null);function B(e,t=null,n=null,o=0,s=null,r=e===Me?0:1,i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&jr(t),ref:t&&vn(t),scopeId:Pn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:me};return l?(Bo(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=_e(n)?8:16),nn>0&&!i&&je&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&je.push(c),c}const ne=fc;function fc(e,t=null,n=null,o=0,s=null,r=!1){if((!e||e===Cr)&&(e=Pe),Tn(e)){const l=lt(e,t,!0);return n&&Bo(l,n),nn>0&&!r&&je&&(l.shapeFlag&6?je[je.indexOf(e)]=l:je.push(l)),l.patchFlag|=-2,l}if(xc(e)&&(e=e.__vccOpts),t){t=uc(t);let{class:l,style:c}=t;l&&!_e(l)&&(t.class=qt(l)),le(c)&&(lr(c)&&!F(c)&&(c=de({},c)),t.style=vo(c))}const i=_e(e)?1:Ol(e)?128:cc(e)?64:le(e)?4:K(e)?2:0;return B(e,t,n,o,s,i,r,!0)}function uc(e){return e?lr(e)||zn in e?de({},e):e:null}function lt(e,t,n=!1){const{props:o,ref:s,patchFlag:r,children:i}=e,l=t?dc(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&jr(l),ref:t&&t.ref?n&&s?F(s)?s.concat(vn(t)):[s,vn(t)]:vn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Me?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&lt(e.ssContent),ssFallback:e.ssFallback&&lt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Po(e=" ",t=0){return ne(jn,null,e,t)}function Dn(e,t){const n=ne(mn,null,e);return n.staticCount=t,n}function bs(e="",t=!1){return t?(k(),Mt(Pe,null,e)):ne(Pe,null,e)}function Ue(e){return e==null||typeof e=="boolean"?ne(Pe):F(e)?ne(Me,null,e.slice()):typeof e=="object"?nt(e):ne(jn,null,String(e))}function nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:lt(e)}function Bo(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),Bo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(zn in t)?t._ctx=me:s===3&&me&&(me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:me},n=32):(t=String(t),o&64?(n=16,t=[Po(t)]):n=8);e.children=t,e.shapeFlag|=n}function dc(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=qt([t.class,o.class]));else if(s==="style")t.style=vo([t.style,o.style]);else if(Mn(s)){const r=t[s],i=o[s];i&&r!==i&&!(F(r)&&r.includes(i))&&(t[s]=r?[].concat(r,i):i)}else s!==""&&(t[s]=o[s])}return t}function Fe(e,t,n,o=null){Re(e,t,7,[n,o])}const _c=Ir();let pc=0;function gc(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||_c,r={uid:pc++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ai(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nr(o,s),emitsOptions:hr(o,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:o.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=yl.bind(null,r),e.ce&&e.ce(r),r}let he=null;const zr=()=>he||me;let Lo,wt,ms="__VUE_INSTANCE_SETTERS__";(wt=eo()[ms])||(wt=eo()[ms]=[]),wt.push(e=>he=e),Lo=e=>{wt.length>1?wt.forEach(t=>t(e)):wt[0](e)};const At=e=>{Lo(e),e.scope.on()},mt=()=>{he&&he.scope.off(),Lo(null)};function Dr(e){return e.vnode.shapeFlag&4}let on=!1;function hc(e,t=!1){on=t;const{props:n,children:o}=e.vnode,s=Dr(e);ec(e,n,s,t),oc(e,o);const r=s?bc(e,t):void 0;return on=!1,r}function bc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=cr(new Proxy(e.ctx,Xl));const{setup:o}=n;if(o){const s=e.setupContext=o.length>1?vc(e):null;At(e),Rt();const r=rt(o,e,0,[e.props,s]);if(Pt(),mt(),Ks(r)){if(r.then(mt,mt),t)return r.then(i=>{vs(e,i,t)}).catch(i=>{$n(i,e,0)});e.asyncDep=r}else vs(e,r,t)}else Fr(e,t)}function vs(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=ur(t)),Fr(e,n)}let ys;function Fr(e,t,n){const o=e.type;if(!e.render){if(!t&&ys&&!o.render){const s=o.template||$o(e).template;if(s){const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:c}=o,f=de(de({isCustomElement:r,delimiters:l},i),c);o.render=ys(s,f)}}e.render=o.render||ze}At(e),Rt(),Wl(e),Pt(),mt()}function mc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ke(e,"get","$attrs"),t[n]}}))}function vc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return mc(e)},slots:e.slots,emit:e.emit,expose:t}}function Fn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ur(cr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Xt)return Xt[n](e)},has(t,n){return n in t||n in Xt}}))}function yc(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function xc(e){return K(e)&&"__vccOpts"in e}const Ht=(e,t)=>_l(e,t,on);function uo(e,t,n){const o=arguments.length;return o===2?le(t)&&!F(t)?Tn(t)?ne(e,null,[t]):ne(e,t):ne(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Tn(n)&&(n=[n]),ne(e,t,n))}const wc=Symbol.for("v-scx"),Ec=()=>bn(wc),Sc="3.3.4",Oc="http://www.w3.org/2000/svg",gt=typeof document<"u"?document:null,xs=gt&&gt.createElement("template"),Tc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t?gt.createElementNS(Oc,e):gt.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>gt.createTextNode(e),createComment:e=>gt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>gt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,s,r){const i=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{xs.innerHTML=o?`<svg>${e}</svg>`:e;const l=xs.content;if(o){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Cc(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Mc(e,t,n){const o=e.style,s=_e(n);if(n&&!s){if(t&&!_e(t))for(const r in t)n[r]==null&&_o(o,r,"");for(const r in n)_o(o,r,n[r])}else{const r=o.display;s?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const ws=/\s*!important$/;function _o(e,t,n){if(F(n))n.forEach(o=>_o(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=kc(e,t);ws.test(n)?e.setProperty($t(o),n.replace(ws,""),"important"):e[o]=n}}const Es=["Webkit","Moz","ms"],Zn={};function kc(e,t){const n=Zn[t];if(n)return n;let o=Ke(t);if(o!=="filter"&&o in e)return Zn[t]=o;o=An(o);for(let s=0;s<Es.length;s++){const r=Es[s]+o;if(r in e)return Zn[t]=r}return t}const Ss="http://www.w3.org/1999/xlink";function Ic(e,t,n,o,s){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ss,t.slice(6,t.length)):e.setAttributeNS(Ss,t,n);else{const r=Ii(t);n==null||r&&!Ys(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function Ac(e,t,n,o,s,r,i){if(t==="innerHTML"||t==="textContent"){o&&i(o,s,r),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const f=l==="OPTION"?e.getAttribute("value"):e.value,d=n??"";f!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Ys(n):n==null&&f==="string"?(n="",c=!0):f==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Nc(e,t,n,o){e.addEventListener(t,n,o)}function $c(e,t,n,o){e.removeEventListener(t,n,o)}function Rc(e,t,n,o,s=null){const r=e._vei||(e._vei={}),i=r[t];if(o&&i)i.value=o;else{const[l,c]=Pc(t);if(o){const f=r[t]=jc(o,s);Nc(e,l,f,c)}else i&&($c(e,l,i,c),r[t]=void 0)}}const Os=/(?:Once|Passive|Capture)$/;function Pc(e){let t;if(Os.test(e)){t={};let o;for(;o=e.match(Os);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),t]}let Vn=0;const Bc=Promise.resolve(),Lc=()=>Vn||(Bc.then(()=>Vn=0),Vn=Date.now());function jc(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;Re(zc(o,n.value),t,5,[o])};return n.value=e,n.attached=Lc(),n}function zc(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const Ts=/^on[a-z]/,Dc=(e,t,n,o,s=!1,r,i,l,c)=>{t==="class"?Cc(e,o,s):t==="style"?Mc(e,n,o):Mn(t)?go(t)||Rc(e,t,n,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Fc(e,t,o,s))?Ac(e,t,o,r,i,l,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Ic(e,t,o,s))};function Fc(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&Ts.test(t)&&K(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ts.test(t)&&_e(n)?!1:t in e}const Qe="transition",zt="animation",Un=(e,{slots:t})=>uo(kl,Hr(e),t);Un.displayName="Transition";const Ur={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Uc=Un.props=de({},yr,Ur),dt=(e,t=[])=>{F(e)?e.forEach(n=>n(...t)):e&&e(...t)},Cs=e=>e?F(e)?e.some(t=>t.length>1):e.length>1:!1;function Hr(e){const t={};for(const R in e)R in Ur||(t[R]=e[R]);if(e.css===!1)return t;const{name:n="v",type:o,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:f=i,appearToClass:d=l,leaveFromClass:y=`${n}-leave-from`,leaveActiveClass:x=`${n}-leave-active`,leaveToClass:$=`${n}-leave-to`}=e,W=Hc(s),P=W&&W[0],J=W&&W[1],{onBeforeEnter:se,onEnter:ee,onEnterCancelled:te,onLeave:j,onLeaveCancelled:ce,onBeforeAppear:ge=se,onAppear:Oe=ee,onAppearCancelled:U=te}=t,G=(R,oe,be)=>{tt(R,oe?d:l),tt(R,oe?f:i),be&&be()},Q=(R,oe)=>{R._isLeaving=!1,tt(R,y),tt(R,$),tt(R,x),oe&&oe()},ue=R=>(oe,be)=>{const Ae=R?Oe:ee,ae=()=>G(oe,R,be);dt(Ae,[oe,ae]),Ms(()=>{tt(oe,R?c:r),We(oe,R?d:l),Cs(Ae)||ks(oe,o,P,ae)})};return de(t,{onBeforeEnter(R){dt(se,[R]),We(R,r),We(R,i)},onBeforeAppear(R){dt(ge,[R]),We(R,c),We(R,f)},onEnter:ue(!1),onAppear:ue(!0),onLeave(R,oe){R._isLeaving=!0;const be=()=>Q(R,oe);We(R,y),Xr(),We(R,x),Ms(()=>{R._isLeaving&&(tt(R,y),We(R,$),Cs(j)||ks(R,o,J,be))}),dt(j,[R,be])},onEnterCancelled(R){G(R,!1),dt(te,[R])},onAppearCancelled(R){G(R,!0),dt(U,[R])},onLeaveCancelled(R){Q(R),dt(ce,[R])}})}function Hc(e){if(e==null)return null;if(le(e))return[Jn(e.enter),Jn(e.leave)];{const t=Jn(e);return[t,t]}}function Jn(e){return Si(e)}function We(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function tt(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Ms(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Kc=0;function ks(e,t,n,o){const s=e._endId=++Kc,r=()=>{s===e._endId&&o()};if(n)return setTimeout(r,n);const{type:i,timeout:l,propCount:c}=Kr(e,t);if(!i)return o();const f=i+"end";let d=0;const y=()=>{e.removeEventListener(f,x),r()},x=$=>{$.target===e&&++d>=c&&y()};setTimeout(()=>{d<c&&y()},l+1),e.addEventListener(f,x)}function Kr(e,t){const n=window.getComputedStyle(e),o=W=>(n[W]||"").split(", "),s=o(`${Qe}Delay`),r=o(`${Qe}Duration`),i=Is(s,r),l=o(`${zt}Delay`),c=o(`${zt}Duration`),f=Is(l,c);let d=null,y=0,x=0;t===Qe?i>0&&(d=Qe,y=i,x=r.length):t===zt?f>0&&(d=zt,y=f,x=c.length):(y=Math.max(i,f),d=y>0?i>f?Qe:zt:null,x=d?d===Qe?r.length:c.length:0);const $=d===Qe&&/\b(transform|all)(,|$)/.test(o(`${Qe}Property`).toString());return{type:d,timeout:y,propCount:x,hasTransform:$}}function Is(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>As(n)+As(e[o])))}function As(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Xr(){return document.body.offsetHeight}const Wr=new WeakMap,Yr=new WeakMap,Gr={name:"TransitionGroup",props:de({},Uc,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=zr(),o=vr();let s,r;return Sr(()=>{if(!s.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!Zc(s[0].el,n.vnode.el,i))return;s.forEach(Yc),s.forEach(Gc);const l=s.filter(qc);Xr(),l.forEach(c=>{const f=c.el,d=f.style;We(f,i),d.transform=d.webkitTransform=d.transitionDuration="";const y=f._moveCb=x=>{x&&x.target!==f||(!x||/transform$/.test(x.propertyName))&&(f.removeEventListener("transitionend",y),f._moveCb=null,tt(f,i))};f.addEventListener("transitionend",y)})}),()=>{const i=Z(e),l=Hr(i);let c=i.tag||Me;s=r,r=t.default?Io(t.default()):[];for(let f=0;f<r.length;f++){const d=r[f];d.key!=null&&tn(d,en(d,l,o,n))}if(s)for(let f=0;f<s.length;f++){const d=s[f];tn(d,en(d,l,o,n)),Wr.set(d,d.el.getBoundingClientRect())}return ne(c,null,r)}}},Xc=e=>delete e.mode;Gr.props;const Wc=Gr;function Yc(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Gc(e){Yr.set(e,e.el.getBoundingClientRect())}function qc(e){const t=Wr.get(e),n=Yr.get(e),o=t.left-n.left,s=t.top-n.top;if(o||s){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${s}px)`,r.transitionDuration="0s",e}}function Zc(e,t,n){const o=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(l=>l&&o.classList.remove(l))}),n.split(/\s+/).forEach(i=>i&&o.classList.add(i)),o.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(o);const{hasTransform:r}=Kr(o);return s.removeChild(o),r}const Vc=["ctrl","shift","alt","meta"],Jc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Vc.some(n=>e[`${n}Key`]&&!t.includes(n))},Qc=(e,t)=>(n,...o)=>{for(let s=0;s<t.length;s++){const r=Jc[t[s]];if(r&&r(n,t))return}return e(n,...o)},ea={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Dt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),Dt(e,!0),o.enter(e)):o.leave(e,()=>{Dt(e,!1)}):Dt(e,t))},beforeUnmount(e,{value:t}){Dt(e,t)}};function Dt(e,t){e.style.display=t?e._vod:"none"}const ta=de({patchProp:Dc},Tc);let Ns;function na(){return Ns||(Ns=rc(ta))}const oa=(...e)=>{const t=na().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=sa(o);if(!s)return;const r=t._component;!K(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function sa(e){return _e(e)?document.querySelector(e):e}function ra(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function qr(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],o=typeof n;(o==="object"||o==="function")&&!Object.isFrozen(n)&&qr(n)}),e}class $s{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Zr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function ot(e,...t){const n=Object.create(null);for(const o in e)n[o]=e[o];return t.forEach(function(o){for(const s in o)n[s]=o[s]}),n}const ia="</span>",Rs=e=>!!e.scope,la=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((o,s)=>`${o}${"_".repeat(s+1)}`)].join(" ")}return`${t}${e}`};class ca{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=Zr(t)}openNode(t){if(!Rs(t))return;const n=la(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){Rs(t)&&(this.buffer+=ia)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Ps=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class jo{constructor(){this.rootNode=Ps(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=Ps({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(o=>this._walk(t,o)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{jo._collapse(n)}))}}class aa extends jo{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const o=t.root;n&&(o.scope=`language:${n}`),this.add(o)}toHTML(){return new ca(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function sn(e){return e?typeof e=="string"?e:e.source:null}function Vr(e){return yt("(?=",e,")")}function fa(e){return yt("(?:",e,")*")}function ua(e){return yt("(?:",e,")?")}function yt(...e){return e.map(n=>sn(n)).join("")}function da(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function zo(...e){return"("+(da(e).capture?"":"?:")+e.map(o=>sn(o)).join("|")+")"}function Jr(e){return new RegExp(e.toString()+"|").exec("").length-1}function _a(e,t){const n=e&&e.exec(t);return n&&n.index===0}const pa=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Do(e,{joinWith:t}){let n=0;return e.map(o=>{n+=1;const s=n;let r=sn(o),i="";for(;r.length>0;){const l=pa.exec(r);if(!l){i+=r;break}i+=r.substring(0,l.index),r=r.substring(l.index+l[0].length),l[0][0]==="\\"&&l[1]?i+="\\"+String(Number(l[1])+s):(i+=l[0],l[0]==="("&&n++)}return i}).map(o=>`(${o})`).join(t)}const ga=/\b\B/,Qr="[a-zA-Z]\\w*",Fo="[a-zA-Z_]\\w*",ei="\\b\\d+(\\.\\d+)?",ti="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ni="\\b(0b[01]+)",ha="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",ba=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=yt(t,/.*\b/,e.binary,/\b.*/)),ot({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,o)=>{n.index!==0&&o.ignoreMatch()}},e)},rn={begin:"\\\\[\\s\\S]",relevance:0},ma={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[rn]},va={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[rn]},ya={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Hn=function(e,t,n={}){const o=ot({scope:"comment",begin:e,end:t,contains:[]},n);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const s=zo("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:yt(/[ ]+/,"(",s,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},xa=Hn("//","$"),wa=Hn("/\\*","\\*/"),Ea=Hn("#","$"),Sa={scope:"number",begin:ei,relevance:0},Oa={scope:"number",begin:ti,relevance:0},Ta={scope:"number",begin:ni,relevance:0},Ca={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[rn,{begin:/\[/,end:/\]/,relevance:0,contains:[rn]}]}]},Ma={scope:"title",begin:Qr,relevance:0},ka={scope:"title",begin:Fo,relevance:0},Ia={begin:"\\.\\s*"+Fo,relevance:0},Aa=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var pn=Object.freeze({__proto__:null,MATCH_NOTHING_RE:ga,IDENT_RE:Qr,UNDERSCORE_IDENT_RE:Fo,NUMBER_RE:ei,C_NUMBER_RE:ti,BINARY_NUMBER_RE:ni,RE_STARTERS_RE:ha,SHEBANG:ba,BACKSLASH_ESCAPE:rn,APOS_STRING_MODE:ma,QUOTE_STRING_MODE:va,PHRASAL_WORDS_MODE:ya,COMMENT:Hn,C_LINE_COMMENT_MODE:xa,C_BLOCK_COMMENT_MODE:wa,HASH_COMMENT_MODE:Ea,NUMBER_MODE:Sa,C_NUMBER_MODE:Oa,BINARY_NUMBER_MODE:Ta,REGEXP_MODE:Ca,TITLE_MODE:Ma,UNDERSCORE_TITLE_MODE:ka,METHOD_GUARD:Ia,END_SAME_AS_BEGIN:Aa});function Na(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function $a(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Ra(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Na,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Pa(e,t){Array.isArray(e.illegal)&&(e.illegal=zo(...e.illegal))}function Ba(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function La(e,t){e.relevance===void 0&&(e.relevance=1)}const ja=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(o=>{delete e[o]}),e.keywords=n.keywords,e.begin=yt(n.beforeMatch,Vr(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},za=["of","and","for","in","not","or","if","then","parent","list","value"],Da="keyword";function oi(e,t,n=Da){const o=Object.create(null);return typeof e=="string"?s(n,e.split(" ")):Array.isArray(e)?s(n,e):Object.keys(e).forEach(function(r){Object.assign(o,oi(e[r],t,r))}),o;function s(r,i){t&&(i=i.map(l=>l.toLowerCase())),i.forEach(function(l){const c=l.split("|");o[c[0]]=[r,Fa(c[0],c[1])]})}}function Fa(e,t){return t?Number(t):Ua(e)?0:1}function Ua(e){return za.includes(e.toLowerCase())}const Bs={},vt=e=>{console.error(e)},Ls=(e,...t)=>{console.log(`WARN: ${e}`,...t)},Et=(e,t)=>{Bs[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Bs[`${e}/${t}`]=!0)},Cn=new Error;function si(e,t,{key:n}){let o=0;const s=e[n],r={},i={};for(let l=1;l<=t.length;l++)i[l+o]=s[l],r[l+o]=!0,o+=Jr(t[l-1]);e[n]=i,e[n]._emit=r,e[n]._multi=!0}function Ha(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw vt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Cn;if(typeof e.beginScope!="object"||e.beginScope===null)throw vt("beginScope must be object"),Cn;si(e,e.begin,{key:"beginScope"}),e.begin=Do(e.begin,{joinWith:""})}}function Ka(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw vt("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Cn;if(typeof e.endScope!="object"||e.endScope===null)throw vt("endScope must be object"),Cn;si(e,e.end,{key:"endScope"}),e.end=Do(e.end,{joinWith:""})}}function Xa(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Wa(e){Xa(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Ha(e),Ka(e)}function Ya(e){function t(i,l){return new RegExp(sn(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(l?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(l,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,l]),this.matchAt+=Jr(l)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const l=this.regexes.map(c=>c[1]);this.matcherRe=t(Do(l,{joinWith:"|"}),!0),this.lastIndex=0}exec(l){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(l);if(!c)return null;const f=c.findIndex((y,x)=>x>0&&y!==void 0),d=this.matchIndexes[f];return c.splice(0,f),Object.assign(c,d)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(l){if(this.multiRegexes[l])return this.multiRegexes[l];const c=new n;return this.rules.slice(l).forEach(([f,d])=>c.addRule(f,d)),c.compile(),this.multiRegexes[l]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(l,c){this.rules.push([l,c]),c.type==="begin"&&this.count++}exec(l){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let f=c.exec(l);if(this.resumingScanAtSamePosition()&&!(f&&f.index===this.lastIndex)){const d=this.getMatcher(0);d.lastIndex=this.lastIndex+1,f=d.exec(l)}return f&&(this.regexIndex+=f.position+1,this.regexIndex===this.count&&this.considerAll()),f}}function s(i){const l=new o;return i.contains.forEach(c=>l.addRule(c.begin,{rule:c,type:"begin"})),i.terminatorEnd&&l.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&l.addRule(i.illegal,{type:"illegal"}),l}function r(i,l){const c=i;if(i.isCompiled)return c;[$a,Ba,Wa,ja].forEach(d=>d(i,l)),e.compilerExtensions.forEach(d=>d(i,l)),i.__beforeBegin=null,[Ra,Pa,La].forEach(d=>d(i,l)),i.isCompiled=!0;let f=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),f=i.keywords.$pattern,delete i.keywords.$pattern),f=f||/\w+/,i.keywords&&(i.keywords=oi(i.keywords,e.case_insensitive)),c.keywordPatternRe=t(f,!0),l&&(i.begin||(i.begin=/\B|\b/),c.beginRe=t(c.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(c.endRe=t(c.end)),c.terminatorEnd=sn(c.end)||"",i.endsWithParent&&l.terminatorEnd&&(c.terminatorEnd+=(i.end?"|":"")+l.terminatorEnd)),i.illegal&&(c.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(d){return Ga(d==="self"?i:d)})),i.contains.forEach(function(d){r(d,c)}),i.starts&&r(i.starts,l),c.matcher=s(c),c}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=ot(e.classNameAliases||{}),r(e)}function ri(e){return e?e.endsWithParent||ri(e.starts):!1}function Ga(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return ot(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:ri(e)?ot(e,{starts:e.starts?ot(e.starts):null}):Object.isFrozen(e)?ot(e):e}var qa="11.8.0";class Za extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const Qn=Zr,js=ot,zs=Symbol("nomatch"),Va=7,ii=function(e){const t=Object.create(null),n=Object.create(null),o=[];let s=!0;const r="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:aa};function c(b){return l.noHighlightRe.test(b)}function f(b){let w=b.className+" ";w+=b.parentNode?b.parentNode.className:"";const z=l.languageDetectRe.exec(w);if(z){const Y=G(z[1]);return Y||(Ls(r.replace("{}",z[1])),Ls("Falling back to no-highlight mode for this block.",b)),Y?z[1]:"no-highlight"}return w.split(/\s+/).find(Y=>c(Y)||G(Y))}function d(b,w,z){let Y="",V="";typeof w=="object"?(Y=b,z=w.ignoreIllegals,V=w.language):(Et("10.7.0","highlight(lang, code, ...args) has been deprecated."),Et("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),V=b,Y=w),z===void 0&&(z=!0);const re={code:Y,language:V};Ae("before:highlight",re);const Te=re.result?re.result:y(re.language,re.code,z);return Te.code=re.code,Ae("after:highlight",Te),Te}function y(b,w,z,Y){const V=Object.create(null);function re(v,E){return v.keywords[E]}function Te(){if(!_.keywords){h.addText(T);return}let v=0;_.keywordPatternRe.lastIndex=0;let E=_.keywordPatternRe.exec(T),A="";for(;E;){A+=T.substring(v,E.index);const H=g.case_insensitive?E[0].toLowerCase():E[0],fe=re(_,H);if(fe){const[Ne,at]=fe;if(h.addText(A),A="",V[H]=(V[H]||0)+1,V[H]<=Va&&(M+=at),Ne.startsWith("_"))A+=E[0];else{const ln=g.classNameAliases[Ne]||Ne;pe(E[0],ln)}}else A+=E[0];v=_.keywordPatternRe.lastIndex,E=_.keywordPatternRe.exec(T)}A+=T.substring(v),h.addText(A)}function xt(){if(T==="")return;let v=null;if(typeof _.subLanguage=="string"){if(!t[_.subLanguage]){h.addText(T);return}v=y(_.subLanguage,T,!0,O[_.subLanguage]),O[_.subLanguage]=v._top}else v=$(T,_.subLanguage.length?_.subLanguage:null);_.relevance>0&&(M+=v.relevance),h.__addSublanguage(v._emitter,v.language)}function Ee(){_.subLanguage!=null?xt():Te(),T=""}function pe(v,E){v!==""&&(h.startScope(E),h.addText(v),h.endScope())}function ct(v,E){let A=1;const H=E.length-1;for(;A<=H;){if(!v._emit[A]){A++;continue}const fe=g.classNameAliases[v[A]]||v[A],Ne=E[A];fe?pe(Ne,fe):(T=Ne,Te(),T=""),A++}}function Bt(v,E){return v.scope&&typeof v.scope=="string"&&h.openNode(g.classNameAliases[v.scope]||v.scope),v.beginScope&&(v.beginScope._wrap?(pe(T,g.classNameAliases[v.beginScope._wrap]||v.beginScope._wrap),T=""):v.beginScope._multi&&(ct(v.beginScope,E),T="")),_=Object.create(v,{parent:{value:_}}),_}function Xe(v,E,A){let H=_a(v.endRe,A);if(H){if(v["on:end"]){const fe=new $s(v);v["on:end"](E,fe),fe.isMatchIgnored&&(H=!1)}if(H){for(;v.endsParent&&v.parent;)v=v.parent;return v}}if(v.endsWithParent)return Xe(v.parent,E,A)}function Lt(v){return _.matcher.regexIndex===0?(T+=v[0],1):(X=!0,0)}function jt(v){const E=v[0],A=v.rule,H=new $s(A),fe=[A.__beforeBegin,A["on:begin"]];for(const Ne of fe)if(Ne&&(Ne(v,H),H.isMatchIgnored))return Lt(E);return A.skip?T+=E:(A.excludeBegin&&(T+=E),Ee(),!A.returnBegin&&!A.excludeBegin&&(T=E)),Bt(A,v),A.returnBegin?0:E.length}function a(v){const E=v[0],A=w.substring(v.index),H=Xe(_,v,A);if(!H)return zs;const fe=_;_.endScope&&_.endScope._wrap?(Ee(),pe(E,_.endScope._wrap)):_.endScope&&_.endScope._multi?(Ee(),ct(_.endScope,v)):fe.skip?T+=E:(fe.returnEnd||fe.excludeEnd||(T+=E),Ee(),fe.excludeEnd&&(T=E));do _.scope&&h.closeNode(),!_.skip&&!_.subLanguage&&(M+=_.relevance),_=_.parent;while(_!==H.parent);return H.starts&&Bt(H.starts,v),fe.returnEnd?0:E.length}function u(){const v=[];for(let E=_;E!==g;E=E.parent)E.scope&&v.unshift(E.scope);v.forEach(E=>h.openNode(E))}let p={};function m(v,E){const A=E&&E[0];if(T+=v,A==null)return Ee(),0;if(p.type==="begin"&&E.type==="end"&&p.index===E.index&&A===""){if(T+=w.slice(E.index,E.index+1),!s){const H=new Error(`0 width match regex (${b})`);throw H.languageName=b,H.badRule=p.rule,H}return 1}if(p=E,E.type==="begin")return jt(E);if(E.type==="illegal"&&!z){const H=new Error('Illegal lexeme "'+A+'" for mode "'+(_.scope||"<unnamed>")+'"');throw H.mode=_,H}else if(E.type==="end"){const H=a(E);if(H!==zs)return H}if(E.type==="illegal"&&A==="")return 1;if(D>1e5&&D>E.index*3)throw new Error("potential infinite loop, way more iterations than matches");return T+=A,A.length}const g=G(b);if(!g)throw vt(r.replace("{}",b)),new Error('Unknown language: "'+b+'"');const S=Ya(g);let C="",_=Y||S;const O={},h=new l.__emitter(l);u();let T="",M=0,I=0,D=0,X=!1;try{if(g.__emitTokens)g.__emitTokens(w,h);else{for(_.matcher.considerAll();;){D++,X?X=!1:_.matcher.considerAll(),_.matcher.lastIndex=I;const v=_.matcher.exec(w);if(!v)break;const E=w.substring(I,v.index),A=m(E,v);I=v.index+A}m(w.substring(I))}return h.finalize(),C=h.toHTML(),{language:b,value:C,relevance:M,illegal:!1,_emitter:h,_top:_}}catch(v){if(v.message&&v.message.includes("Illegal"))return{language:b,value:Qn(w),illegal:!0,relevance:0,_illegalBy:{message:v.message,index:I,context:w.slice(I-100,I+100),mode:v.mode,resultSoFar:C},_emitter:h};if(s)return{language:b,value:Qn(w),illegal:!1,relevance:0,errorRaised:v,_emitter:h,_top:_};throw v}}function x(b){const w={value:Qn(b),illegal:!1,relevance:0,_top:i,_emitter:new l.__emitter(l)};return w._emitter.addText(b),w}function $(b,w){w=w||l.languages||Object.keys(t);const z=x(b),Y=w.filter(G).filter(ue).map(Ee=>y(Ee,b,!1));Y.unshift(z);const V=Y.sort((Ee,pe)=>{if(Ee.relevance!==pe.relevance)return pe.relevance-Ee.relevance;if(Ee.language&&pe.language){if(G(Ee.language).supersetOf===pe.language)return 1;if(G(pe.language).supersetOf===Ee.language)return-1}return 0}),[re,Te]=V,xt=re;return xt.secondBest=Te,xt}function W(b,w,z){const Y=w&&n[w]||z;b.classList.add("hljs"),b.classList.add(`language-${Y}`)}function P(b){let w=null;const z=f(b);if(c(z))return;if(Ae("before:highlightElement",{el:b,language:z}),b.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(b)),l.throwUnescapedHTML))throw new Za("One of your code blocks includes unescaped HTML.",b.innerHTML);w=b;const Y=w.textContent,V=z?d(Y,{language:z,ignoreIllegals:!0}):$(Y);b.innerHTML=V.value,W(b,z,V.language),b.result={language:V.language,re:V.relevance,relevance:V.relevance},V.secondBest&&(b.secondBest={language:V.secondBest.language,relevance:V.secondBest.relevance}),Ae("after:highlightElement",{el:b,result:V,text:Y})}function J(b){l=js(l,b)}const se=()=>{j(),Et("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function ee(){j(),Et("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let te=!1;function j(){if(document.readyState==="loading"){te=!0;return}document.querySelectorAll(l.cssSelector).forEach(P)}function ce(){te&&j()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",ce,!1);function ge(b,w){let z=null;try{z=w(e)}catch(Y){if(vt("Language definition for '{}' could not be registered.".replace("{}",b)),s)vt(Y);else throw Y;z=i}z.name||(z.name=b),t[b]=z,z.rawDefinition=w.bind(null,e),z.aliases&&Q(z.aliases,{languageName:b})}function Oe(b){delete t[b];for(const w of Object.keys(n))n[w]===b&&delete n[w]}function U(){return Object.keys(t)}function G(b){return b=(b||"").toLowerCase(),t[b]||t[n[b]]}function Q(b,{languageName:w}){typeof b=="string"&&(b=[b]),b.forEach(z=>{n[z.toLowerCase()]=w})}function ue(b){const w=G(b);return w&&!w.disableAutodetect}function R(b){b["before:highlightBlock"]&&!b["before:highlightElement"]&&(b["before:highlightElement"]=w=>{b["before:highlightBlock"](Object.assign({block:w.el},w))}),b["after:highlightBlock"]&&!b["after:highlightElement"]&&(b["after:highlightElement"]=w=>{b["after:highlightBlock"](Object.assign({block:w.el},w))})}function oe(b){R(b),o.push(b)}function be(b){const w=o.indexOf(b);w!==-1&&o.splice(w,1)}function Ae(b,w){const z=b;o.forEach(function(Y){Y[z]&&Y[z](w)})}function ae(b){return Et("10.7.0","highlightBlock will be removed entirely in v12.0"),Et("10.7.0","Please use highlightElement now."),P(b)}Object.assign(e,{highlight:d,highlightAuto:$,highlightAll:j,highlightElement:P,highlightBlock:ae,configure:J,initHighlighting:se,initHighlightingOnLoad:ee,registerLanguage:ge,unregisterLanguage:Oe,listLanguages:U,getLanguage:G,registerAliases:Q,autoDetection:ue,inherit:js,addPlugin:oe,removePlugin:be}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString=qa,e.regex={concat:yt,lookahead:Vr,either:zo,optional:ua,anyNumberOfTimes:fa};for(const b in pn)typeof pn[b]=="object"&&qr(pn[b]);return Object.assign(e,pn),e},Nt=ii({});Nt.newInstance=()=>ii({});var Ja=Nt;Nt.HighlightJS=Nt;Nt.default=Nt;const kt=ra(Ja);var Ds=Il({props:{code:{type:String,required:!0},language:{type:String,default:""},autodetect:{type:Boolean,default:!0},ignoreIllegals:{type:Boolean,default:!0}},setup:function(e){var t=ll(e.language);hn(function(){return e.language},function(s){t.value=s});var n=Ht(function(){return e.autodetect||!t.value}),o=Ht(function(){return!n.value&&!kt.getLanguage(t.value)});return{className:Ht(function(){return o.value?"":"hljs "+t.value}),highlightedCode:Ht(function(){var s;if(o.value)return console.warn('The language "'+t.value+'" you specified could not be found.'),e.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;");if(n.value){var r=kt.highlightAuto(e.code);return t.value=(s=r.language)!==null&&s!==void 0?s:"",r.value}return(r=kt.highlight(e.code,{language:t.value,ignoreIllegals:e.ignoreIllegals})).value})}},render:function(){return uo("pre",{},[uo("code",{class:this.className,innerHTML:this.highlightedCode})])}}),Qa={install:function(e){e.component("highlightjs",Ds)},component:Ds};const ef=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}),tf=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],nf=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],of=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],sf=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],rf=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function lf(e){const t=e.regex,n=ef(e),o={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},s="and or not only",r=/@-?\w[\w]*(-\w+)*/,i="[a-zA-Z-][a-zA-Z0-9_-]*",l=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[n.BLOCK_COMMENT,o,n.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+i,relevance:0},n.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+of.join("|")+")"},{begin:":(:)?("+sf.join("|")+")"}]},n.CSS_VARIABLE,{className:"attribute",begin:"\\b("+rf.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[n.BLOCK_COMMENT,n.HEXCOLOR,n.IMPORTANT,n.CSS_NUMBER_MODE,...l,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...l,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},n.FUNCTION_DISPATCH]},{begin:t.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:r},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:s,attribute:nf.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...l,n.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+tf.join("|")+")\\b"}]}}const Fs="[A-Za-z$_][0-9A-Za-z$_]*",cf=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],af=["true","false","null","undefined","NaN","Infinity"],li=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],ci=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],ai=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ff=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],uf=[].concat(ai,li,ci);function df(e){const t=e.regex,n=(w,{after:z})=>{const Y="</"+w[0].slice(1);return w.input.indexOf(Y,z)!==-1},o=Fs,s={begin:"<>",end:"</>"},r=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(w,z)=>{const Y=w[0].length+w.index,V=w.input[Y];if(V==="<"||V===","){z.ignoreMatch();return}V===">"&&(n(w,{after:Y})||z.ignoreMatch());let re;const Te=w.input.substring(Y);if(re=Te.match(/^\s*=/)){z.ignoreMatch();return}if((re=Te.match(/^\s+extends\s+/))&&re.index===0){z.ignoreMatch();return}}},l={$pattern:Fs,keyword:cf,literal:af,built_in:uf,"variable.language":ff},c="[0-9](_?[0-9])*",f=`\\.(${c})`,d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",y={className:"number",variants:[{begin:`(\\b(${d})((${f})|\\.)?|(${f}))[eE][+-]?(${c})\\b`},{begin:`\\b(${d})\\b((${f})\\b|\\.)?|(${f})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},x={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},$={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,x],subLanguage:"xml"}},W={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,x],subLanguage:"css"}},P={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,x],subLanguage:"graphql"}},J={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,x]},ee={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:o+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},te=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,$,W,P,J,{match:/\$\d+/},y];x.contains=te.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(te)});const j=[].concat(ee,x.contains),ce=j.concat([{begin:/\(/,end:/\)/,keywords:l,contains:["self"].concat(j)}]),ge={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:ce},Oe={variants:[{match:[/class/,/\s+/,o,/\s+/,/extends/,/\s+/,t.concat(o,"(",t.concat(/\./,o),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,o],scope:{1:"keyword",3:"title.class"}}]},U={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...li,...ci]}},G={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Q={variants:[{match:[/function/,/\s+/,o,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[ge],illegal:/%/},ue={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function R(w){return t.concat("(?!",w.join("|"),")")}const oe={match:t.concat(/\b/,R([...ai,"super","import"]),o,t.lookahead(/\(/)),className:"title.function",relevance:0},be={begin:t.concat(/\./,t.lookahead(t.concat(o,/(?![0-9A-Za-z$_(])/))),end:o,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Ae={match:[/get|set/,/\s+/,o,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},ge]},ae="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",b={match:[/const|var|let/,/\s+/,o,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(ae)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[ge]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:ce,CLASS_REFERENCE:U},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),G,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,$,W,P,J,ee,{match:/\$\d+/},y,U,{className:"attr",begin:o+t.lookahead(":"),relevance:0},b,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[ee,e.REGEXP_MODE,{className:"function",begin:ae,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:ce}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:r},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},Q,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[ge,e.inherit(e.TITLE_MODE,{begin:o,className:"title.function"})]},{match:/\.\.\./,relevance:0},be,{match:"\\$"+o,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[ge]},oe,ue,Oe,Ae,{match:/\$[(.]/}]}}function _f(e){const t=e.regex,n=t.concat(/[\p{L}_]/u,t.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),o=/[\p{L}0-9._:-]+/u,s={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},r={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=e.inherit(r,{begin:/\(/,end:/\)/}),l=e.inherit(e.APOS_STRING_MODE,{className:"string"}),c=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),f={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:o,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[r,c,l,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[r,i,c,l]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[f],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[f],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:t.concat(/</,t.lookahead(t.concat(n,t.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:f}]},{className:"tag",begin:t.concat(/<\//,t.lookahead(t.concat(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}var pf=Object.defineProperty,gf=(e,t,n)=>t in e?pf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Us=(e,t,n)=>(gf(e,typeof t!="symbol"?t+"":t,n),n);class hf{constructor(){Us(this,"seed",0),Us(this,"data",new Map)}id(){return Date.now().toString(26)+this.seed++}add(t,n=this.id()){return this.data.set(n,t),n}get(t){return this.data.get(t)}delete(t){this.delete(t)}}const bf="Failed to copy value to clipboard. Unknown type.",mf={asString(e){if(e==null)return console.warn("Clipboard input is empty"),"";if(typeof e!="string")try{return JSON.stringify(e)}catch(t){return console.warn(bf,t),""}return e}},vf="position:fixed; pointer-events:none; z-index:-9999; opacity:0;",yf={createTextarea(e){const t=document.createElement("textarea");return t.addEventListener("focusin",n=>{n.stopPropagation()}),t.value=e,t.setAttribute("readonly",""),t.style.cssText=vf,t}},Yt={async requestClipboardPermission(){return navigator.permissions.query({name:"clipboard-write"})},async writeClipboard(e){return(await Yt.requestClipboardPermission()).state==="granted"?(await navigator.clipboard.writeText(e),!0):!1},writeClipboardExecCommand(e){const t=yf.createTextarea(e);if(document.body.appendChild(t),navigator.userAgent.match(/ipad|ipod|iphone/i)){t.contentEditable="true",t.readOnly=!0;const o=document.createRange();o.selectNodeContents(t);const s=window.getSelection();s&&(s.removeAllRanges(),s.addRange(o),t.setSelectionRange(0,999999))}else t.select();const n=document.execCommand("copy");return document.body.removeChild(t),n},async copy(e){const t=typeof e=="function"?e():e,n=mf.asString(t);if(Yt.writeClipboardExecCommand(n))return!0;await Yt.writeClipboard(n)}},et=new hf,xf={install(e){const t=e.version[0]==="3"?e.config.globalProperties:e.prototype;t.$clipboard=Yt.copy,e.directive("clipboard",{beforeMount(n,o){const s=o.arg,r=o.value,i=typeof r=="function";if(s==="error"&&i){n.dataset.clipboardError=et.add(r);return}if(s==="error"&&i){n.dataset.clipboardSuccess=et.add(r);return}const l=async c=>{var f;const d=await Yt.copy(r)?n.dataset.clipboardSuccess:n.dataset.clipboardError;(f=et.get(d))==null||f({value:r,event:c})};n.dataset.clipboardClick=et.add(l),n.addEventListener("click",l)},unmounted(n){const{clipboardSuccessHandler:o,clipboardErrorHandler:s,clipboardClickHandler:r}=n.dataset;if(o&&et.delete(o),s&&et.delete(s),r){const i=et.get(r);i&&(n.removeEventListener("click",i),et.delete(r))}},get bind(){return this.beforeMount},get unbind(){return this.unmounted}})}},wf="/cssfx/assets/logo-1bb13d83.svg";const L=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n},Ef={},Sf=Dn('<img class="logo" src="'+wf+'" alt="cssfx" data-v-8140b3ae><div class="social" data-v-8140b3ae><a href="https://github.com/ClearLove443/cssfx" target="_blank" data-v-8140b3ae><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-8140b3ae><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" data-v-8140b3ae></path></svg></a></div>',2),Of=[Sf];function Tf(e,t){return k(),N("nav",null,Of)}const Cf=L(Ef,[["render",Tf],["__scopeId","data-v-8140b3ae"]]);const Mf={},fi=e=>(ve("data-v-cdd2e4ed"),e=e(),ye(),e),kf=fi(()=>B("h1",null,"Beautifully simple click-to-copy CSS effects",-1)),If=fi(()=>B("p",null,"A carefully crafted collection designed with a focus on fluidity, simplicity, and ease of use. Powered by CSS with minimal markup. Completely open source and MIT licensed.",-1)),Af=[kf,If];function Nf(e,t){return k(),N("header",null,Af)}const $f=L(Mf,[["render",Nf],["__scopeId","data-v-cdd2e4ed"]]);const Rf={props:{type:String},methods:{inspect(e){const t=this.$refs.box===e.target;this.type==="input"&&!t||this.$emit("inspect")}}};function Pf(e,t,n,o,s,r){return k(),N("div",{ref:"box",onClick:t[0]||(t[0]=(...i)=>r.inspect&&r.inspect(...i))},[Kl(e.$slots,"default",{},void 0,!0)],512)}const Bf=L(Rf,[["render",Pf],["__scopeId","data-v-c349960f"]]);const Lf={};function jf(e,t){return k(),N("button",null,"Bubble")}const zf=L(Lf,[["render",jf],["__scopeId","data-v-659827ef"]]),Df=Object.freeze(Object.defineProperty({__proto__:null,default:zf},Symbol.toStringTag,{value:"Module"}));const Ff={};function Uf(e,t){return k(),N("button",null,"Bubble")}const Hf=L(Ff,[["render",Uf],["__scopeId","data-v-a7b56818"]]),Kf=Object.freeze(Object.defineProperty({__proto__:null,default:Hf},Symbol.toStringTag,{value:"Module"}));const Xf={};function Wf(e,t){return k(),N("button",null,"Bubble")}const Yf=L(Xf,[["render",Wf],["__scopeId","data-v-830f2d1e"]]),Gf=Object.freeze(Object.defineProperty({__proto__:null,default:Yf},Symbol.toStringTag,{value:"Module"}));const qf={};function Zf(e,t){return k(),N("button",null,"Bubble")}const Vf=L(qf,[["render",Zf],["__scopeId","data-v-38c234ee"]]),Jf=Object.freeze(Object.defineProperty({__proto__:null,default:Vf},Symbol.toStringTag,{value:"Module"}));const Qf={};function eu(e,t){return k(),N("button",null,"Bubble")}const tu=L(Qf,[["render",eu],["__scopeId","data-v-2a9d9126"]]),nu=Object.freeze(Object.defineProperty({__proto__:null,default:tu},Symbol.toStringTag,{value:"Module"}));const ou={};function su(e,t){return k(),N("button",null,"Jelly")}const ru=L(ou,[["render",su],["__scopeId","data-v-81224025"]]),iu=Object.freeze(Object.defineProperty({__proto__:null,default:ru},Symbol.toStringTag,{value:"Module"}));const lu={};function cu(e,t){return k(),N("button",null,"Pulse")}const au=L(lu,[["render",cu],["__scopeId","data-v-554fa84d"]]),fu=Object.freeze(Object.defineProperty({__proto__:null,default:au},Symbol.toStringTag,{value:"Module"}));const uu={};function du(e,t){return k(),N("button",null,"Shine")}const _u=L(uu,[["render",du],["__scopeId","data-v-a2486d9d"]]),pu=Object.freeze(Object.defineProperty({__proto__:null,default:_u},Symbol.toStringTag,{value:"Module"}));const gu={};function hu(e,t){return k(),N("button",null,"Slide")}const bu=L(gu,[["render",hu],["__scopeId","data-v-28068dc6"]]),mu=Object.freeze(Object.defineProperty({__proto__:null,default:bu},Symbol.toStringTag,{value:"Module"}));const vu={};function yu(e,t){return k(),N("button",null,"Slide")}const xu=L(vu,[["render",yu],["__scopeId","data-v-3bab9c31"]]),wu=Object.freeze(Object.defineProperty({__proto__:null,default:xu},Symbol.toStringTag,{value:"Module"}));const Eu={};function Su(e,t){return k(),N("button",null,"Slide")}const Ou=L(Eu,[["render",Su],["__scopeId","data-v-14c73685"]]),Tu=Object.freeze(Object.defineProperty({__proto__:null,default:Ou},Symbol.toStringTag,{value:"Module"}));const Cu={};function Mu(e,t){return k(),N("button",null,"Slide")}const ku=L(Cu,[["render",Mu],["__scopeId","data-v-ca882d64"]]),Iu=Object.freeze(Object.defineProperty({__proto__:null,default:ku},Symbol.toStringTag,{value:"Module"}));const Au={},Nu=Dn('<input type="text" placeholder="Input Outline" data-v-3d82f91f><span class="bottom" data-v-3d82f91f></span><span class="right" data-v-3d82f91f></span><span class="top" data-v-3d82f91f></span><span class="left" data-v-3d82f91f></span>',5),$u=[Nu];function Ru(e,t){return k(),N("div",null,$u)}const Pu=L(Au,[["render",Ru],["__scopeId","data-v-3d82f91f"]]),Bu=Object.freeze(Object.defineProperty({__proto__:null,default:Pu},Symbol.toStringTag,{value:"Module"}));const Lu={},ju=Dn('<input type="text" placeholder="Input Outline" data-v-12d67ea5><span class="bottom" data-v-12d67ea5></span><span class="right" data-v-12d67ea5></span><span class="top" data-v-12d67ea5></span><span class="left" data-v-12d67ea5></span>',5),zu=[ju];function Du(e,t){return k(),N("div",null,zu)}const Fu=L(Lu,[["render",Du],["__scopeId","data-v-12d67ea5"]]),Uu=Object.freeze(Object.defineProperty({__proto__:null,default:Fu},Symbol.toStringTag,{value:"Module"}));const Hu={},Ku=Dn('<input type="text" placeholder="Input Trace" data-v-0efb2595><span class="bottom" data-v-0efb2595></span><span class="right" data-v-0efb2595></span><span class="top" data-v-0efb2595></span><span class="left" data-v-0efb2595></span>',5),Xu=[Ku];function Wu(e,t){return k(),N("div",null,Xu)}const Yu=L(Hu,[["render",Wu],["__scopeId","data-v-0efb2595"]]),Gu=Object.freeze(Object.defineProperty({__proto__:null,default:Yu},Symbol.toStringTag,{value:"Module"}));const qu={},ui=e=>(ve("data-v-ab8a5b2a"),e=e(),ye(),e),Zu=ui(()=>B("input",{type:"text",placeholder:"Input Underline"},null,-1)),Vu=ui(()=>B("span",null,null,-1)),Ju=[Zu,Vu];function Qu(e,t){return k(),N("div",null,Ju)}const ed=L(qu,[["render",Qu],["__scopeId","data-v-ab8a5b2a"]]),td=Object.freeze(Object.defineProperty({__proto__:null,default:ed},Symbol.toStringTag,{value:"Module"}));const nd={},di=e=>(ve("data-v-cbdeeb18"),e=e(),ye(),e),od=di(()=>B("input",{type:"text",placeholder:"Input Underline"},null,-1)),sd=di(()=>B("span",null,null,-1)),rd=[od,sd];function id(e,t){return k(),N("div",null,rd)}const ld=L(nd,[["render",id],["__scopeId","data-v-cbdeeb18"]]),cd=Object.freeze(Object.defineProperty({__proto__:null,default:ld},Symbol.toStringTag,{value:"Module"}));const ad={},Kn=e=>(ve("data-v-c70fb727"),e=e(),ye(),e),fd=Kn(()=>B("span",null,null,-1)),ud=Kn(()=>B("span",null,null,-1)),dd=Kn(()=>B("span",null,null,-1)),_d=Kn(()=>B("span",null,null,-1)),pd=[fd,ud,dd,_d];function gd(e,t){return k(),N("div",null,pd)}const hd=L(ad,[["render",gd],["__scopeId","data-v-c70fb727"]]),bd=Object.freeze(Object.defineProperty({__proto__:null,default:hd},Symbol.toStringTag,{value:"Module"}));const md={};function vd(e,t){return k(),N("div")}const yd=L(md,[["render",vd],["__scopeId","data-v-f1e29100"]]),xd=Object.freeze(Object.defineProperty({__proto__:null,default:yd},Symbol.toStringTag,{value:"Module"}));const wd={},Ed=e=>(ve("data-v-25eb6263"),e=e(),ye(),e),Sd={class:"box"},Od=Ed(()=>B("div",{class:"coin"},null,-1)),Td=[Od];function Cd(e,t){return k(),N("div",Sd,Td)}const Md=L(wd,[["render",Cd],["__scopeId","data-v-25eb6263"]]),kd=Object.freeze(Object.defineProperty({__proto__:null,default:Md},Symbol.toStringTag,{value:"Module"}));const Id={},Uo=e=>(ve("data-v-de1cc43f"),e=e(),ye(),e),Ad={class:"balls"},Nd=Uo(()=>B("div",null,null,-1)),$d=Uo(()=>B("div",null,null,-1)),Rd=Uo(()=>B("div",null,null,-1)),Pd=[Nd,$d,Rd];function Bd(e,t){return k(),N("div",Ad,Pd)}const Ld=L(Id,[["render",Bd],["__scopeId","data-v-de1cc43f"]]),jd=Object.freeze(Object.defineProperty({__proto__:null,default:Ld},Symbol.toStringTag,{value:"Module"}));const zd={};function Dd(e,t){return k(),N("div")}const Fd=L(zd,[["render",Dd],["__scopeId","data-v-dda279c9"]]),Ud=Object.freeze(Object.defineProperty({__proto__:null,default:Fd},Symbol.toStringTag,{value:"Module"}));const Hd={},Ho=e=>(ve("data-v-ac7a93b5"),e=e(),ye(),e),Kd={class:"dots"},Xd=Ho(()=>B("div",null,null,-1)),Wd=Ho(()=>B("div",null,null,-1)),Yd=Ho(()=>B("div",null,null,-1)),Gd=[Xd,Wd,Yd];function qd(e,t){return k(),N("div",Kd,Gd)}const Zd=L(Hd,[["render",qd],["__scopeId","data-v-ac7a93b5"]]),Vd=Object.freeze(Object.defineProperty({__proto__:null,default:Zd},Symbol.toStringTag,{value:"Module"}));const Jd={},Qd=e=>(ve("data-v-938a8d81"),e=e(),ye(),e),e_={class:"box"},t_=Qd(()=>B("div",{class:"plane"},null,-1)),n_=[t_];function o_(e,t){return k(),N("div",e_,n_)}const s_=L(Jd,[["render",o_],["__scopeId","data-v-938a8d81"]]),r_=Object.freeze(Object.defineProperty({__proto__:null,default:s_},Symbol.toStringTag,{value:"Module"}));const i_={},Ve=e=>(ve("data-v-e861ccc3"),e=e(),ye(),e),l_={class:"dots"},c_=Ve(()=>B("div",null,null,-1)),a_=Ve(()=>B("div",null,null,-1)),f_=Ve(()=>B("div",null,null,-1)),u_=Ve(()=>B("div",null,null,-1)),d_=Ve(()=>B("div",null,null,-1)),__=Ve(()=>B("div",null,null,-1)),p_=Ve(()=>B("div",null,null,-1)),g_=Ve(()=>B("div",null,null,-1)),h_=Ve(()=>B("div",null,null,-1)),b_=[c_,a_,f_,u_,d_,__,p_,g_,h_];function m_(e,t){return k(),N("div",l_,b_)}const v_=L(i_,[["render",m_],["__scopeId","data-v-e861ccc3"]]),y_=Object.freeze(Object.defineProperty({__proto__:null,default:v_},Symbol.toStringTag,{value:"Module"}));const x_={},Ko=e=>(ve("data-v-f6febdf3"),e=e(),ye(),e),w_={class:"loader"},E_=Ko(()=>B("div",{class:"outer"},null,-1)),S_=Ko(()=>B("div",{class:"middle"},null,-1)),O_=Ko(()=>B("div",{class:"inner"},null,-1)),T_=[E_,S_,O_];function C_(e,t){return k(),N("div",w_,T_)}const M_=L(x_,[["render",C_],["__scopeId","data-v-f6febdf3"]]),k_=Object.freeze(Object.defineProperty({__proto__:null,default:M_},Symbol.toStringTag,{value:"Module"}));const I_={};function A_(e,t){return k(),N("div")}const N_=L(I_,[["render",A_],["__scopeId","data-v-f4703117"]]),$_=Object.freeze(Object.defineProperty({__proto__:null,default:N_},Symbol.toStringTag,{value:"Module"}));const R_={},_i=e=>(ve("data-v-fe6a395d"),e=e(),ye(),e),P_={viewBox:"0 0 50 50"},B_=_i(()=>B("circle",{class:"ring",cx:"25",cy:"25",r:"20"},null,-1)),L_=_i(()=>B("circle",{class:"ball",cx:"25",cy:"5",r:"3.5"},null,-1)),j_=[B_,L_];function z_(e,t){return k(),N("svg",P_,j_)}const D_=L(R_,[["render",z_],["__scopeId","data-v-fe6a395d"]]),F_=Object.freeze(Object.defineProperty({__proto__:null,default:D_},Symbol.toStringTag,{value:"Module"}));const U_={},H_=e=>(ve("data-v-906c19ee"),e=e(),ye(),e),K_={viewBox:"25 25 50 50"},X_=H_(()=>B("circle",{cx:"50",cy:"50",r:"20"},null,-1)),W_=[X_];function Y_(e,t){return k(),N("svg",K_,W_)}const G_=L(U_,[["render",Y_],["__scopeId","data-v-906c19ee"]]),q_=Object.freeze(Object.defineProperty({__proto__:null,default:G_},Symbol.toStringTag,{value:"Module"}));const Z_={};function V_(e,t){return k(),N("div")}const J_=L(Z_,[["render",V_],["__scopeId","data-v-fbb6a348"]]),Q_=Object.freeze(Object.defineProperty({__proto__:null,default:J_},Symbol.toStringTag,{value:"Module"}));const ep={},Xo=e=>(ve("data-v-6e51850c"),e=e(),ye(),e),tp={class:"balls"},np=Xo(()=>B("div",null,null,-1)),op=Xo(()=>B("div",null,null,-1)),sp=Xo(()=>B("div",null,null,-1)),rp=[np,op,sp];function ip(e,t){return k(),N("div",tp,rp)}const lp=L(ep,[["render",ip],["__scopeId","data-v-6e51850c"]]),cp=Object.freeze(Object.defineProperty({__proto__:null,default:lp},Symbol.toStringTag,{value:"Module"}));const ap={};function fp(e,t){return k(),N("span",null,"Bars")}const up=L(ap,[["render",fp],["__scopeId","data-v-9d638207"]]),dp=Object.freeze(Object.defineProperty({__proto__:null,default:up},Symbol.toStringTag,{value:"Module"}));const _p={};function pp(e,t){return k(),N("span",null,"Bars")}const gp=L(_p,[["render",pp],["__scopeId","data-v-a0398184"]]),hp=Object.freeze(Object.defineProperty({__proto__:null,default:gp},Symbol.toStringTag,{value:"Module"}));const bp={};function mp(e,t){return k(),N("span",null,"Bars")}const vp=L(bp,[["render",mp],["__scopeId","data-v-80574191"]]),yp=Object.freeze(Object.defineProperty({__proto__:null,default:vp},Symbol.toStringTag,{value:"Module"}));const xp={};function wp(e,t){return k(),N("span",null,"Highlight")}const Ep=L(xp,[["render",wp],["__scopeId","data-v-e56c0967"]]),Sp=Object.freeze(Object.defineProperty({__proto__:null,default:Ep},Symbol.toStringTag,{value:"Module"}));const Op={};function Tp(e,t){return k(),N("span",null,"Highlight")}const Cp=L(Op,[["render",Tp],["__scopeId","data-v-15e03b8b"]]),Mp=Object.freeze(Object.defineProperty({__proto__:null,default:Cp},Symbol.toStringTag,{value:"Module"}));const kp={};function Ip(e,t){return k(),N("span",null,"Overline")}const Ap=L(kp,[["render",Ip],["__scopeId","data-v-3594a52c"]]),Np=Object.freeze(Object.defineProperty({__proto__:null,default:Ap},Symbol.toStringTag,{value:"Module"}));const $p={};function Rp(e,t){return k(),N("span",null,"Overline")}const Pp=L($p,[["render",Rp],["__scopeId","data-v-e1ada985"]]),Bp=Object.freeze(Object.defineProperty({__proto__:null,default:Pp},Symbol.toStringTag,{value:"Module"}));const Lp={};function jp(e,t){return k(),N("span",null,"Pillars")}const zp=L(Lp,[["render",jp],["__scopeId","data-v-db804d15"]]),Dp=Object.freeze(Object.defineProperty({__proto__:null,default:zp},Symbol.toStringTag,{value:"Module"}));const Fp={};function Up(e,t){return k(),N("span",null,"Pillars")}const Hp=L(Fp,[["render",Up],["__scopeId","data-v-8d2b846a"]]),Kp=Object.freeze(Object.defineProperty({__proto__:null,default:Hp},Symbol.toStringTag,{value:"Module"}));const Xp={};function Wp(e,t){return k(),N("span",null,"Pillars")}const Yp=L(Xp,[["render",Wp],["__scopeId","data-v-7bc55883"]]),Gp=Object.freeze(Object.defineProperty({__proto__:null,default:Yp},Symbol.toStringTag,{value:"Module"}));const qp={};function Zp(e,t){return k(),N("span",null,"Strikethrough")}const Vp=L(qp,[["render",Zp],["__scopeId","data-v-016ea0ca"]]),Jp=Object.freeze(Object.defineProperty({__proto__:null,default:Vp},Symbol.toStringTag,{value:"Module"}));const Qp={};function eg(e,t){return k(),N("span",null,"Underline")}const tg=L(Qp,[["render",eg],["__scopeId","data-v-f02c5960"]]),ng=Object.freeze(Object.defineProperty({__proto__:null,default:tg},Symbol.toStringTag,{value:"Module"}));const og={};function sg(e,t){return k(),N("span",null,"Underline")}const rg=L(og,[["render",sg],["__scopeId","data-v-cabf800e"]]),ig=Object.freeze(Object.defineProperty({__proto__:null,default:rg},Symbol.toStringTag,{value:"Module"}));const lg={};function cg(e,t){return k(),N("span",null,"Underline")}const ag=L(lg,[["render",cg],["__scopeId","data-v-f914b245"]]),fg=Object.freeze(Object.defineProperty({__proto__:null,default:ag},Symbol.toStringTag,{value:"Module"})),ug=`<template>
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
</style>`,dg=`<template>
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
</style>`,_g=`<template>
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
</style>`,pg=`<template>
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
</style>`,gg=`<template>
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
</style>`,hg=`<template>
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
`,bg=`<template>
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
`,mg=`<template>
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
`,vg=`<template>
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
`,yg=`<template>
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
`,xg=`<template>
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
`,wg=`<template>
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
`,Eg=`<template>
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
`,Sg=`<template>
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
`,Og=`<template>
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
`,Tg=`<template>
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

`,Cg=`<template>
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
`,Mg=`<template>
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
`,kg=`<template>
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
`,Ig=`<template>
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
`,Ag=`<template>
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
`,Ng=`<template>
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
`,$g=`<template>
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
`,Rg=`<template>
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
`,Pg=`<template>
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
`,Bg=`<template>
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
`,Lg=`<template>
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
`,jg=`<template>
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
`,zg=`<template>
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

`,Dg=`<template>
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
`,Fg=`<template>
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
`,Ug=`<template>
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
</style>`,Hg=`<template>
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
</style>`,Kg=`<template>
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
</style>`,Xg=`<template>
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
`,Wg=`<template>
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
`,Yg=`<template>
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
`,Gg=`<template>
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
`,qg=`<template>
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
</style>`,Zg=`<template>
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
</style>`,Vg=`<template>
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
</style>`,Jg=`<template>
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
</style>`,Qg=`<template>
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
`,eh=`<template>
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
`,th=`<template>
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
`,nh=Object.assign({"../effects/button-bubble-bl.vue":Df,"../effects/button-bubble-br.vue":Kf,"../effects/button-bubble-tl.vue":Gf,"../effects/button-bubble-tr.vue":Jf,"../effects/button-bubble.vue":nu,"../effects/button-jelly.vue":iu,"../effects/button-pulse.vue":fu,"../effects/button-shine.vue":pu,"../effects/button-slide-down.vue":mu,"../effects/button-slide-left.vue":wu,"../effects/button-slide-right.vue":Tu,"../effects/button-slide-up.vue":Iu,"../effects/input-outline.vue":Bu,"../effects/input-outline2.vue":Uu,"../effects/input-trace.vue":Gu,"../effects/input-underline.vue":td,"../effects/input-underline2.vue":cd,"../effects/loader-bars.vue":bd,"../effects/loader-box.vue":xd,"../effects/loader-coin.vue":kd,"../effects/loader-cradle.vue":jd,"../effects/loader-disk.vue":Ud,"../effects/loader-ellipsis.vue":Vd,"../effects/loader-flip.vue":r_,"../effects/loader-grid.vue":y_,"../effects/loader-multi-ring.vue":k_,"../effects/loader-orbit.vue":$_,"../effects/loader-orbit2.vue":F_,"../effects/loader-ring.vue":q_,"../effects/loader-ring2.vue":Q_,"../effects/loader-wave.vue":cp,"../effects/text-bars.vue":dp,"../effects/text-bars2.vue":hp,"../effects/text-barsr3.vue":yp,"../effects/text-highlight-right.vue":Sp,"../effects/text-highlight-up.vue":Mp,"../effects/text-overline.vue":Np,"../effects/text-overline2.vue":Bp,"../effects/text-pillars.vue":Dp,"../effects/text-pillars2.vue":Kp,"../effects/text-pillars3.vue":Gp,"../effects/text-strikethrough.vue":Jp,"../effects/text-underline.vue":ng,"../effects/text-underline2.vue":ig,"../effects/text-underline3.vue":fg}),pi=Object.assign({"../effects/button-bubble-bl.vue":ug,"../effects/button-bubble-br.vue":dg,"../effects/button-bubble-tl.vue":_g,"../effects/button-bubble-tr.vue":pg,"../effects/button-bubble.vue":gg,"../effects/button-jelly.vue":hg,"../effects/button-pulse.vue":bg,"../effects/button-shine.vue":mg,"../effects/button-slide-down.vue":vg,"../effects/button-slide-left.vue":yg,"../effects/button-slide-right.vue":xg,"../effects/button-slide-up.vue":wg,"../effects/input-outline.vue":Eg,"../effects/input-outline2.vue":Sg,"../effects/input-trace.vue":Og,"../effects/input-underline.vue":Tg,"../effects/input-underline2.vue":Cg,"../effects/loader-bars.vue":Mg,"../effects/loader-box.vue":kg,"../effects/loader-coin.vue":Ig,"../effects/loader-cradle.vue":Ag,"../effects/loader-disk.vue":Ng,"../effects/loader-ellipsis.vue":$g,"../effects/loader-flip.vue":Rg,"../effects/loader-grid.vue":Pg,"../effects/loader-multi-ring.vue":Bg,"../effects/loader-orbit.vue":Lg,"../effects/loader-orbit2.vue":jg,"../effects/loader-ring.vue":zg,"../effects/loader-ring2.vue":Dg,"../effects/loader-wave.vue":Fg,"../effects/text-bars.vue":Ug,"../effects/text-bars2.vue":Hg,"../effects/text-barsr3.vue":Kg,"../effects/text-highlight-right.vue":Xg,"../effects/text-highlight-up.vue":Wg,"../effects/text-overline.vue":Yg,"../effects/text-overline2.vue":Gg,"../effects/text-pillars.vue":qg,"../effects/text-pillars2.vue":Zg,"../effects/text-pillars3.vue":Vg,"../effects/text-strikethrough.vue":Jg,"../effects/text-underline.vue":Qg,"../effects/text-underline2.vue":eh,"../effects/text-underline3.vue":th}),oh=Object.keys(pi),yn={},gi={};for(const e of oh){const t=e.replace("../effects/","").replace(".vue",""),n=t.substring(0,t.indexOf("-")),o=pi[e],s=nh[e].default,r=/<template>(.*?)<\/template>/g.exec(JSON.stringify(o))[0].replace(/<\/?template>/g,"").replace(/^\\n/,"").replace(/\\r\\n/g,`
`).replace(/\\n/g,`
`).replace(/\\"/g,'"'),i=/<style scoped>(.*?)<\/style>/g.exec(JSON.stringify(o))[0].replace(/<\/?style(?: scoped)?>/g,"").replace(/^\\n/,"").replace(/\\r\\n/g,`
`).replace(/\\n/g,`
`);yn[t]={name:t,type:n,html:r,css:i},gi[t]=s}const sh={components:{Effect:Bf,...gi},props:{effects:Object}};function rh(e,t,n,o,s,r){const i=Ge("Effect");return k(),Mt(Wc,{class:"grid",tag:"div",name:"shuffle"},{default:Qt(()=>[(k(!0),N(Me,null,Hl(Object.values(this.effects),l=>(k(),Mt(i,{key:l.name,type:l.type,onInspect:c=>e.$emit("inspect",l.name)},{default:Qt(()=>[(k(),Mt(Fl(l.name)))]),_:2},1032,["type","onInspect"]))),128))]),_:1})}const ih=L(sh,[["render",rh],["__scopeId","data-v-63707396"]]);const lh={props:{label:String,code:String,copied:Boolean},methods:{copy(){this.$emit("copy")}}},ch=e=>(ve("data-v-1aca7b5c"),e=e(),ye(),e),ah={class:"block"},fh={class:"top"},uh={class:"label"},dh={class:"copy"},_h={viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},ph=ch(()=>B("polyline",{points:"20 6 9 17 4 12"},null,-1)),gh=[ph];function hh(e,t,n,o,s,r){const i=Ge("highlightjs"),l=Ul("clipboard");return k(),N("div",ah,[B("div",fh,[B("span",uh,Gs(this.label),1),rs((k(),N("span",dh,[Po(" COPY "),ne(Un,{name:"copied"},{default:Qt(()=>[rs((k(),N("svg",_h,gh,512)),[[ea,n.copied]])]),_:1})])),[[l,()=>n.code],[l,r.copy,"success"]])]),ne(i,{language:n.label.toLocaleLowerCase(),autodetect:!1,code:n.code},null,8,["language","code"])])}const bh=L(lh,[["render",hh],["__scopeId","data-v-1aca7b5c"]]);const mh={components:{CodeBlock:bh},props:{src:Object},data(){return{htmlCopied:!1,cssCopied:!1}},methods:{onHtmlCopy(){this.htmlCopied=!0,this.cssCopied=!1},onCssCopy(){this.cssCopied=!0,this.htmlCopied=!1}}},vh={class:"src"};function yh(e,t,n,o,s,r){const i=Ge("CodeBlock");return k(),N("div",{class:"inspect",onClick:t[0]||(t[0]=Qc(l=>e.$emit("close"),["self"]))},[B("div",vh,[ne(i,{class:"html",label:"HTML",code:this.src.html,onCopy:r.onHtmlCopy,copied:s.htmlCopied},null,8,["code","onCopy","copied"]),ne(i,{class:"css",label:"CSS",code:this.src.css,onCopy:r.onCssCopy,copied:s.cssCopied},null,8,["code","onCopy","copied"])])])}const xh=L(mh,[["render",yh],["__scopeId","data-v-fe290126"]]);const hi=e=>(ve("data-v-539c6f6d"),e=e(),ye(),e),wh=hi(()=>B("svg",{class:"unchecked",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[B("path",{d:"M405.3 106.7v298.7H106.7V106.7h298.6m0-42.7H106.7C83.2 64 64 83.2 64 106.7v298.7c0 23.5 19.2 42.7 42.7 42.7h298.7c23.5 0 42.7-19.2 42.7-42.7V106.7C448 83.2 428.8 64 405.3 64z"})],-1)),Eh=hi(()=>B("svg",{class:"checked",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[B("path",{d:"M168.531 215.469l-29.864 29.864 96 96L448 128l-29.864-29.864-183.469 182.395-66.136-65.062zm236.802 189.864H106.667V106.667H320V64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V234.667h-42.667v170.666z"})],-1)),Sh={__name:"EffectFilter",props:["label","checked"],emits:["update:checked"],setup(e,{emit:t}){const n=e,o=()=>{t("update:checked",!n.checked)};return(s,r)=>(k(),N("label",null,[B("input",{type:"checkbox",checked:"checked",onClick:o}),wh,Eh,Po(" "+Gs(this.label),1)]))}},Oh=L(Sh,[["__scopeId","data-v-539c6f6d"]]);const Th={components:{EffectFilter:Oh},data(){return{open:!1,filters:{button:!0,input:!0,loader:!0,text:!0}}},methods:{toggleControls(){this.open=!this.open},updateFilters(){this.$emit("filter",this.filters)}},watch:{"filters.button":"updateFilters","filters.input":"updateFilters","filters.loader":"updateFilters","filters.text":"updateFilters"}},Wo=e=>(ve("data-v-a8502a02"),e=e(),ye(),e),Ch=Wo(()=>B("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},[B("path",{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"})],-1)),Mh=[Ch],kh={class:"controls"},Ih=Wo(()=>B("path",{d:"M222.2 188.1L97.8 64 64 97.8l124.1 124.1 34.1-33.8zM316 64l49 49L64 414.2 97.8 448 399 147l49 49V64H316zm7.9 225.8l-33.8 33.8 75.1 75.1L316 448h132V316l-49 49-75.1-75.2z"},null,-1)),Ah=[Ih],Nh=Wo(()=>B("path",{d:"M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z"},null,-1)),$h=[Nh];function Rh(e,t,n,o,s,r){const i=Ge("EffectFilter");return k(),N("div",{class:qt(["wrapper",{open:s.open}])},[B("div",{class:qt(["tab",{open:s.open}]),onClick:t[0]||(t[0]=(...l)=>r.toggleControls&&r.toggleControls(...l))},Mh,2),B("div",kh,[(k(),N("svg",{class:"shuffle",onClick:t[1]||(t[1]=l=>e.$emit("shuffle")),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Ah)),(k(),N("svg",{class:"reset",onClick:t[2]||(t[2]=l=>e.$emit("reset")),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},$h)),ne(i,{label:"Buttons",checked:s.filters.button,"onUpdate:checked":t[3]||(t[3]=l=>s.filters.button=l)},null,8,["checked"]),ne(i,{label:"Inputs",checked:s.filters.input,"onUpdate:checked":t[4]||(t[4]=l=>s.filters.input=l)},null,8,["checked"]),ne(i,{label:"Loaders",checked:s.filters.loader,"onUpdate:checked":t[5]||(t[5]=l=>s.filters.loader=l)},null,8,["checked"]),ne(i,{label:"Text",checked:s.filters.text,"onUpdate:checked":t[6]||(t[6]=l=>s.filters.text=l)},null,8,["checked"])])],2)}const Ph=L(Th,[["render",Rh],["__scopeId","data-v-a8502a02"]]);function Bh(e){const t=Object.entries(e).slice(0),n=t.length;let o=-1,s=n-1;for(;++o<n;){const r=o+Math.floor(Math.random()*(s-o+1)),i=t[r];t[r]=t[o],t[o]=i}return Object.fromEntries(t)}const Lh={components:{Navbar:Cf,Header:$f,Effects:ih,Inspect:xh,Controls:Ph},data(){return{effects:yn,inspecting:!1,inspectSrc:{}}},methods:{inspect(e){this.inspecting=!0,this.inspectSrc.html=this.effects[e].html,this.inspectSrc.css=this.effects[e].css},closeInspect(){this.inspecting=!1,this.inspectSrc={}},shuffle(){this.effects=Bh(this.effects)},reset(){this.effects=yn},filter(e){const t=Object.entries(yn).filter(([n,o])=>e[o.type]);this.effects=Object.fromEntries(t)}}},jh=e=>(ve("data-v-69f3723d"),e=e(),ye(),e),zh=jh(()=>B("div",{class:"color"},null,-1)),Dh={key:0,class:"inspect-bg"};function Fh(e,t,n,o,s,r){const i=Ge("Navbar"),l=Ge("Header"),c=Ge("Effects"),f=Ge("Inspect"),d=Ge("Controls");return k(),N("div",null,[zh,ne(i),ne(l),ne(c,{effects:s.effects,onInspect:r.inspect},null,8,["effects","onInspect"]),s.inspecting?(k(),N("div",Dh)):bs("",!0),ne(Un,{name:"inspect"},{default:Qt(()=>[s.inspecting?(k(),Mt(f,{key:0,src:s.inspectSrc,onClose:r.closeInspect},null,8,["src","onClose"])):bs("",!0)]),_:1}),ne(d,{onShuffle:r.shuffle,onReset:r.reset,onFilter:r.filter},null,8,["onShuffle","onReset","onFilter"])])}const Uh=L(Lh,[["render",Fh],["__scopeId","data-v-69f3723d"]]);kt.registerLanguage("javascript",df);kt.registerLanguage("css",lf);kt.registerLanguage("xml",_f);const Yo=oa(Uh);Yo.use(Qa);Yo.use(xf);Yo.mount("#app");
