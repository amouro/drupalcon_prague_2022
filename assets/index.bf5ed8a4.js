(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();function Lo(n,t){const s=Object.create(null),o=n.split(",");for(let a=0;a<o.length;a++)s[o[a]]=!0;return t?a=>!!s[a.toLowerCase()]:a=>!!s[a]}const vd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_d=Lo(vd);function Sc(n){return!!n||n===""}function Ue(n){if(re(n)){const t={};for(let s=0;s<n.length;s++){const o=n[s],a=He(o)?xd(o):Ue(o);if(a)for(const r in a)t[r]=a[r]}return t}else{if(He(n))return n;if(Pe(n))return n}}const wd=/;(?![^(]*\))/g,bd=/:(.+)/;function xd(n){const t={};return n.split(wd).forEach(s=>{if(s){const o=s.split(bd);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Ne(n){let t="";if(He(n))t=n;else if(re(n))for(let s=0;s<n.length;s++){const o=Ne(n[s]);o&&(t+=o+" ")}else if(Pe(n))for(const s in n)n[s]&&(t+=s+" ");return t.trim()}function Q(n){if(!n)return null;let{class:t,style:s}=n;return t&&!He(t)&&(n.class=Ne(t)),s&&(n.style=Ue(s)),n}const Ad="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Cd=Lo(Ad),Ot=n=>He(n)?n:n==null?"":re(n)||Pe(n)&&(n.toString===Fc||!ue(n.toString))?JSON.stringify(n,Tc,2):String(n),Tc=(n,t)=>t&&t.__v_isRef?Tc(n,t.value):Vt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[o,a])=>(s[`${o} =>`]=a,s),{})}:Ic(t)?{[`Set(${t.size})`]:[...t.values()]}:Pe(t)&&!re(t)&&!Oc(t)?String(t):t,Ie={},Yt=[],In=()=>{},Bd=()=>!1,kd=/^on[^a-z]/,Ho=n=>kd.test(n),xr=n=>n.startsWith("onUpdate:"),an=Object.assign,Ar=(n,t)=>{const s=n.indexOf(t);s>-1&&n.splice(s,1)},Dd=Object.prototype.hasOwnProperty,ve=(n,t)=>Dd.call(n,t),re=Array.isArray,Vt=n=>Ro(n)==="[object Map]",Ic=n=>Ro(n)==="[object Set]",ue=n=>typeof n=="function",He=n=>typeof n=="string",Cr=n=>typeof n=="symbol",Pe=n=>n!==null&&typeof n=="object",$c=n=>Pe(n)&&ue(n.then)&&ue(n.catch),Fc=Object.prototype.toString,Ro=n=>Fc.call(n),Ed=n=>Ro(n).slice(8,-1),Oc=n=>Ro(n)==="[object Object]",Br=n=>He(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,go=Lo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jo=n=>{const t=Object.create(null);return s=>t[s]||(t[s]=n(s))},Sd=/-(\w)/g,qn=Jo(n=>n.replace(Sd,(t,s)=>s?s.toUpperCase():"")),Td=/\B([A-Z])/g,Pt=Jo(n=>n.replace(Td,"-$1").toLowerCase()),Ko=Jo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ra=Jo(n=>n?`on${Ko(n)}`:""),Ns=(n,t)=>!Object.is(n,t),Gt=(n,t)=>{for(let s=0;s<n.length;s++)n[s](t)},Ao=(n,t,s)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:s})},$a=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let wl;const Id=()=>wl||(wl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let hn;class jc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&hn&&(this.parent=hn,this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}run(t){if(this.active){const s=hn;try{return hn=this,t()}finally{hn=s}}}on(){hn=this}off(){hn=this.parent}stop(t){if(this.active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function $d(n){return new jc(n)}function Fd(n,t=hn){t&&t.active&&t.effects.push(n)}function Pc(){return hn}function Nc(n){hn&&hn.cleanups.push(n)}const kr=n=>{const t=new Set(n);return t.w=0,t.n=0,t},Mc=n=>(n.w&pt)>0,Lc=n=>(n.n&pt)>0,Od=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=pt},jd=n=>{const{deps:t}=n;if(t.length){let s=0;for(let o=0;o<t.length;o++){const a=t[o];Mc(a)&&!Lc(a)?a.delete(n):t[s++]=a,a.w&=~pt,a.n&=~pt}t.length=s}},Fa=new WeakMap;let As=0,pt=1;const Oa=30;let En;const St=Symbol(""),ja=Symbol("");class Dr{constructor(t,s=null,o){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Fd(this,o)}run(){if(!this.active)return this.fn();let t=En,s=at;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=En,En=this,at=!0,pt=1<<++As,As<=Oa?Od(this):bl(this),this.fn()}finally{As<=Oa&&jd(this),pt=1<<--As,En=this.parent,at=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){En===this?this.deferStop=!0:this.active&&(bl(this),this.onStop&&this.onStop(),this.active=!1)}}function bl(n){const{deps:t}=n;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(n);t.length=0}}let at=!0;const Hc=[];function is(){Hc.push(at),at=!1}function cs(){const n=Hc.pop();at=n===void 0?!0:n}function _n(n,t,s){if(at&&En){let o=Fa.get(n);o||Fa.set(n,o=new Map);let a=o.get(s);a||o.set(s,a=kr()),Rc(a)}}function Rc(n,t){let s=!1;As<=Oa?Lc(n)||(n.n|=pt,s=!Mc(n)):s=!n.has(En),s&&(n.add(En),En.deps.push(n))}function Gn(n,t,s,o,a,r){const l=Fa.get(n);if(!l)return;let i=[];if(t==="clear")i=[...l.values()];else if(s==="length"&&re(n))l.forEach((c,p)=>{(p==="length"||p>=o)&&i.push(c)});else switch(s!==void 0&&i.push(l.get(s)),t){case"add":re(n)?Br(s)&&i.push(l.get("length")):(i.push(l.get(St)),Vt(n)&&i.push(l.get(ja)));break;case"delete":re(n)||(i.push(l.get(St)),Vt(n)&&i.push(l.get(ja)));break;case"set":Vt(n)&&i.push(l.get(St));break}if(i.length===1)i[0]&&Pa(i[0]);else{const c=[];for(const p of i)p&&c.push(...p);Pa(kr(c))}}function Pa(n,t){const s=re(n)?n:[...n];for(const o of s)o.computed&&xl(o);for(const o of s)o.computed||xl(o)}function xl(n,t){(n!==En||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Pd=Lo("__proto__,__v_isRef,__isVue"),Jc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Cr)),Nd=Er(),Md=Er(!1,!0),Ld=Er(!0),Al=Hd();function Hd(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...s){const o=Ce(this);for(let r=0,l=this.length;r<l;r++)_n(o,"get",r+"");const a=o[t](...s);return a===-1||a===!1?o[t](...s.map(Ce)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...s){is();const o=Ce(this)[t].apply(this,s);return cs(),o}}),n}function Er(n=!1,t=!1){return function(o,a,r){if(a==="__v_isReactive")return!n;if(a==="__v_isReadonly")return n;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&r===(n?t?th:zc:t?Uc:Wc).get(o))return o;const l=re(o);if(!n&&l&&ve(Al,a))return Reflect.get(Al,a,r);const i=Reflect.get(o,a,r);return(Cr(a)?Jc.has(a):Pd(a))||(n||_n(o,"get",a),t)?i:Be(i)?l&&Br(a)?i:i.value:Pe(i)?n?Ut(i):Oe(i):i}}const Rd=Kc(),Jd=Kc(!0);function Kc(n=!1){return function(s,o,a,r){let l=s[o];if(ts(l)&&Be(l)&&!Be(a))return!1;if(!n&&(!Co(a)&&!ts(a)&&(l=Ce(l),a=Ce(a)),!re(s)&&Be(l)&&!Be(a)))return l.value=a,!0;const i=re(s)&&Br(o)?Number(o)<s.length:ve(s,o),c=Reflect.set(s,o,a,r);return s===Ce(r)&&(i?Ns(a,l)&&Gn(s,"set",o,a):Gn(s,"add",o,a)),c}}function Kd(n,t){const s=ve(n,t);n[t];const o=Reflect.deleteProperty(n,t);return o&&s&&Gn(n,"delete",t,void 0),o}function qd(n,t){const s=Reflect.has(n,t);return(!Cr(t)||!Jc.has(t))&&_n(n,"has",t),s}function Wd(n){return _n(n,"iterate",re(n)?"length":St),Reflect.ownKeys(n)}const qc={get:Nd,set:Rd,deleteProperty:Kd,has:qd,ownKeys:Wd},Ud={get:Ld,set(n,t){return!0},deleteProperty(n,t){return!0}},zd=an({},qc,{get:Md,set:Jd}),Sr=n=>n,qo=n=>Reflect.getPrototypeOf(n);function ao(n,t,s=!1,o=!1){n=n.__v_raw;const a=Ce(n),r=Ce(t);s||(t!==r&&_n(a,"get",t),_n(a,"get",r));const{has:l}=qo(a),i=o?Sr:s?$r:Ms;if(l.call(a,t))return i(n.get(t));if(l.call(a,r))return i(n.get(r));n!==a&&n.get(t)}function ro(n,t=!1){const s=this.__v_raw,o=Ce(s),a=Ce(n);return t||(n!==a&&_n(o,"has",n),_n(o,"has",a)),n===a?s.has(n):s.has(n)||s.has(a)}function lo(n,t=!1){return n=n.__v_raw,!t&&_n(Ce(n),"iterate",St),Reflect.get(n,"size",n)}function Cl(n){n=Ce(n);const t=Ce(this);return qo(t).has.call(t,n)||(t.add(n),Gn(t,"add",n,n)),this}function Bl(n,t){t=Ce(t);const s=Ce(this),{has:o,get:a}=qo(s);let r=o.call(s,n);r||(n=Ce(n),r=o.call(s,n));const l=a.call(s,n);return s.set(n,t),r?Ns(t,l)&&Gn(s,"set",n,t):Gn(s,"add",n,t),this}function kl(n){const t=Ce(this),{has:s,get:o}=qo(t);let a=s.call(t,n);a||(n=Ce(n),a=s.call(t,n)),o&&o.call(t,n);const r=t.delete(n);return a&&Gn(t,"delete",n,void 0),r}function Dl(){const n=Ce(this),t=n.size!==0,s=n.clear();return t&&Gn(n,"clear",void 0,void 0),s}function io(n,t){return function(o,a){const r=this,l=r.__v_raw,i=Ce(l),c=t?Sr:n?$r:Ms;return!n&&_n(i,"iterate",St),l.forEach((p,u)=>o.call(a,c(p),c(u),r))}}function co(n,t,s){return function(...o){const a=this.__v_raw,r=Ce(a),l=Vt(r),i=n==="entries"||n===Symbol.iterator&&l,c=n==="keys"&&l,p=a[n](...o),u=s?Sr:t?$r:Ms;return!t&&_n(r,"iterate",c?ja:St),{next(){const{value:h,done:f}=p.next();return f?{value:h,done:f}:{value:i?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function et(n){return function(...t){return n==="delete"?!1:this}}function Yd(){const n={get(r){return ao(this,r)},get size(){return lo(this)},has:ro,add:Cl,set:Bl,delete:kl,clear:Dl,forEach:io(!1,!1)},t={get(r){return ao(this,r,!1,!0)},get size(){return lo(this)},has:ro,add:Cl,set:Bl,delete:kl,clear:Dl,forEach:io(!1,!0)},s={get(r){return ao(this,r,!0)},get size(){return lo(this,!0)},has(r){return ro.call(this,r,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:io(!0,!1)},o={get(r){return ao(this,r,!0,!0)},get size(){return lo(this,!0)},has(r){return ro.call(this,r,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:io(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=co(r,!1,!1),s[r]=co(r,!0,!1),t[r]=co(r,!1,!0),o[r]=co(r,!0,!0)}),[n,s,t,o]}const[Vd,Gd,Zd,Xd]=Yd();function Tr(n,t){const s=t?n?Xd:Zd:n?Gd:Vd;return(o,a,r)=>a==="__v_isReactive"?!n:a==="__v_isReadonly"?n:a==="__v_raw"?o:Reflect.get(ve(s,a)&&a in o?s:o,a,r)}const Qd={get:Tr(!1,!1)},eh={get:Tr(!1,!0)},nh={get:Tr(!0,!1)},Wc=new WeakMap,Uc=new WeakMap,zc=new WeakMap,th=new WeakMap;function sh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oh(n){return n.__v_skip||!Object.isExtensible(n)?0:sh(Ed(n))}function Oe(n){return ts(n)?n:Ir(n,!1,qc,Qd,Wc)}function ah(n){return Ir(n,!1,zd,eh,Uc)}function Ut(n){return Ir(n,!0,Ud,nh,zc)}function Ir(n,t,s,o,a){if(!Pe(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=a.get(n);if(r)return r;const l=oh(n);if(l===0)return n;const i=new Proxy(n,l===2?o:s);return a.set(n,i),i}function Zt(n){return ts(n)?Zt(n.__v_raw):!!(n&&n.__v_isReactive)}function ts(n){return!!(n&&n.__v_isReadonly)}function Co(n){return!!(n&&n.__v_isShallow)}function Yc(n){return Zt(n)||ts(n)}function Ce(n){const t=n&&n.__v_raw;return t?Ce(t):n}function Wo(n){return Ao(n,"__v_skip",!0),n}const Ms=n=>Pe(n)?Oe(n):n,$r=n=>Pe(n)?Ut(n):n;function Fr(n){at&&En&&(n=Ce(n),Rc(n.dep||(n.dep=kr())))}function Or(n,t){n=Ce(n),n.dep&&Pa(n.dep)}function Be(n){return!!(n&&n.__v_isRef===!0)}function q(n){return Vc(n,!1)}function On(n){return Vc(n,!0)}function Vc(n,t){return Be(n)?n:new rh(n,t)}class rh{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:Ce(t),this._value=s?t:Ms(t)}get value(){return Fr(this),this._value}set value(t){const s=this.__v_isShallow||Co(t)||ts(t);t=s?t:Ce(t),Ns(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:Ms(t),Or(this))}}function b(n){return Be(n)?n.value:n}const lh={get:(n,t,s)=>b(Reflect.get(n,t,s)),set:(n,t,s,o)=>{const a=n[t];return Be(a)&&!Be(s)?(a.value=s,!0):Reflect.set(n,t,s,o)}};function Gc(n){return Zt(n)?n:new Proxy(n,lh)}class ih{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=t(()=>Fr(this),()=>Or(this));this._get=s,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function Zc(n){return new ih(n)}function ch(n){const t=re(n)?new Array(n.length):{};for(const s in n)t[s]=uh(n,s);return t}class ph{constructor(t,s,o){this._object=t,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function uh(n,t,s){const o=n[t];return Be(o)?o:new ph(n,t,s)}var Xc;class dh{constructor(t,s,o,a){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[Xc]=!1,this._dirty=!0,this.effect=new Dr(t,()=>{this._dirty||(this._dirty=!0,Or(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=o}get value(){const t=Ce(this);return Fr(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Xc="__v_isReadonly";function hh(n,t,s=!1){let o,a;const r=ue(n);return r?(o=n,a=In):(o=n.get,a=n.set),new dh(o,a,r||!a,s)}function rt(n,t,s,o){let a;try{a=o?n(...o):n()}catch(r){Uo(r,t,s)}return a}function $n(n,t,s,o){if(ue(n)){const r=rt(n,t,s,o);return r&&$c(r)&&r.catch(l=>{Uo(l,t,s)}),r}const a=[];for(let r=0;r<n.length;r++)a.push($n(n[r],t,s,o));return a}function Uo(n,t,s,o=!0){const a=t?t.vnode:null;if(t){let r=t.parent;const l=t.proxy,i=s;for(;r;){const p=r.ec;if(p){for(let u=0;u<p.length;u++)if(p[u](n,l,i)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){rt(c,null,10,[n,l,i]);return}}fh(n,s,a,o)}function fh(n,t,s,o=!0){console.error(n)}let Ls=!1,Na=!1;const Ge=[];let Hn=0;const Xt=[];let zn=null,bt=0;const Qc=Promise.resolve();let jr=null;function Ze(n){const t=jr||Qc;return n?t.then(this?n.bind(this):n):t}function mh(n){let t=Hn+1,s=Ge.length;for(;t<s;){const o=t+s>>>1;Hs(Ge[o])<n?t=o+1:s=o}return t}function Pr(n){(!Ge.length||!Ge.includes(n,Ls&&n.allowRecurse?Hn+1:Hn))&&(n.id==null?Ge.push(n):Ge.splice(mh(n.id),0,n),ep())}function ep(){!Ls&&!Na&&(Na=!0,jr=Qc.then(tp))}function gh(n){const t=Ge.indexOf(n);t>Hn&&Ge.splice(t,1)}function yh(n){re(n)?Xt.push(...n):(!zn||!zn.includes(n,n.allowRecurse?bt+1:bt))&&Xt.push(n),ep()}function El(n,t=Ls?Hn+1:0){for(;t<Ge.length;t++){const s=Ge[t];s&&s.pre&&(Ge.splice(t,1),t--,s())}}function np(n){if(Xt.length){const t=[...new Set(Xt)];if(Xt.length=0,zn){zn.push(...t);return}for(zn=t,zn.sort((s,o)=>Hs(s)-Hs(o)),bt=0;bt<zn.length;bt++)zn[bt]();zn=null,bt=0}}const Hs=n=>n.id==null?1/0:n.id,vh=(n,t)=>{const s=Hs(n)-Hs(t);if(s===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return s};function tp(n){Na=!1,Ls=!0,Ge.sort(vh);const t=In;try{for(Hn=0;Hn<Ge.length;Hn++){const s=Ge[Hn];s&&s.active!==!1&&rt(s,null,14)}}finally{Hn=0,Ge.length=0,np(),Ls=!1,jr=null,(Ge.length||Xt.length)&&tp()}}function _h(n,t,...s){if(n.isUnmounted)return;const o=n.vnode.props||Ie;let a=s;const r=t.startsWith("update:"),l=r&&t.slice(7);if(l&&l in o){const u=`${l==="modelValue"?"model":l}Modifiers`,{number:h,trim:f}=o[u]||Ie;f&&(a=s.map(m=>m.trim())),h&&(a=s.map($a))}let i,c=o[i=ra(t)]||o[i=ra(qn(t))];!c&&r&&(c=o[i=ra(Pt(t))]),c&&$n(c,n,6,a);const p=o[i+"Once"];if(p){if(!n.emitted)n.emitted={};else if(n.emitted[i])return;n.emitted[i]=!0,$n(p,n,6,a)}}function sp(n,t,s=!1){const o=t.emitsCache,a=o.get(n);if(a!==void 0)return a;const r=n.emits;let l={},i=!1;if(!ue(n)){const c=p=>{const u=sp(p,t,!0);u&&(i=!0,an(l,u))};!s&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!r&&!i?(Pe(n)&&o.set(n,null),null):(re(r)?r.forEach(c=>l[c]=null):an(l,r),Pe(n)&&o.set(n,l),l)}function zo(n,t){return!n||!Ho(t)?!1:(t=t.slice(2).replace(/Once$/,""),ve(n,t[0].toLowerCase()+t.slice(1))||ve(n,Pt(t))||ve(n,t))}let Xe=null,Yo=null;function Bo(n){const t=Xe;return Xe=n,Yo=n&&n.type.__scopeId||null,t}function op(n){Yo=n}function ap(){Yo=null}function M(n,t=Xe,s){if(!t||n._n)return n;const o=(...a)=>{o._d&&Ll(-1);const r=Bo(t),l=n(...a);return Bo(r),o._d&&Ll(1),l};return o._n=!0,o._c=!0,o._d=!0,o}function la(n){const{type:t,vnode:s,proxy:o,withProxy:a,props:r,propsOptions:[l],slots:i,attrs:c,emit:p,render:u,renderCache:h,data:f,setupState:m,ctx:g,inheritAttrs:w}=n;let _,k;const B=Bo(n);try{if(s.shapeFlag&4){const E=a||o;_=Ln(u.call(E,E,h,r,m,f,g)),k=c}else{const E=t;_=Ln(E.length>1?E(r,{attrs:c,slots:i,emit:p}):E(r,null)),k=t.props?c:wh(c)}}catch(E){ks.length=0,Uo(E,n,1),_=z(ut)}let A=_;if(k&&w!==!1){const E=Object.keys(k),{shapeFlag:L}=A;E.length&&L&7&&(l&&E.some(xr)&&(k=bh(k,l)),A=jt(A,k))}return s.dirs&&(A=jt(A),A.dirs=A.dirs?A.dirs.concat(s.dirs):s.dirs),s.transition&&(A.transition=s.transition),_=A,Bo(B),_}const wh=n=>{let t;for(const s in n)(s==="class"||s==="style"||Ho(s))&&((t||(t={}))[s]=n[s]);return t},bh=(n,t)=>{const s={};for(const o in n)(!xr(o)||!(o.slice(9)in t))&&(s[o]=n[o]);return s};function xh(n,t,s){const{props:o,children:a,component:r}=n,{props:l,children:i,patchFlag:c}=t,p=r.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return o?Sl(o,l,p):!!l;if(c&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(l[f]!==o[f]&&!zo(p,f))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:o===l?!1:o?l?Sl(o,l,p):!0:!!l;return!1}function Sl(n,t,s){const o=Object.keys(t);if(o.length!==Object.keys(n).length)return!0;for(let a=0;a<o.length;a++){const r=o[a];if(t[r]!==n[r]&&!zo(s,r))return!0}return!1}function Ah({vnode:n,parent:t},s){for(;t&&t.subTree===n;)(n=t.vnode).el=s,t=t.parent}const rp=n=>n.__isSuspense;function Ch(n,t){t&&t.pendingBranch?re(n)?t.effects.push(...n):t.effects.push(n):yh(n)}function mn(n,t){if(ze){let s=ze.provides;const o=ze.parent&&ze.parent.provides;o===s&&(s=ze.provides=Object.create(o)),s[n]=t}}function $(n,t,s=!1){const o=ze||Xe;if(o){const a=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(a&&n in a)return a[n];if(arguments.length>1)return s&&ue(t)?t.call(o.proxy):t}}function Zs(n,t){return Nr(n,null,t)}const Tl={};function me(n,t,s){return Nr(n,t,s)}function Nr(n,t,{immediate:s,deep:o,flush:a,onTrack:r,onTrigger:l}=Ie){const i=ze;let c,p=!1,u=!1;if(Be(n)?(c=()=>n.value,p=Co(n)):Zt(n)?(c=()=>n,o=!0):re(n)?(u=!0,p=n.some(k=>Zt(k)||Co(k)),c=()=>n.map(k=>{if(Be(k))return k.value;if(Zt(k))return Bt(k);if(ue(k))return rt(k,i,2)})):ue(n)?t?c=()=>rt(n,i,2):c=()=>{if(!(i&&i.isUnmounted))return h&&h(),$n(n,i,3,[f])}:c=In,t&&o){const k=c;c=()=>Bt(k())}let h,f=k=>{h=_.onStop=()=>{rt(k,i,4)}};if(Js)return f=In,t?s&&$n(t,i,3,[c(),u?[]:void 0,f]):c(),In;let m=u?[]:Tl;const g=()=>{if(!!_.active)if(t){const k=_.run();(o||p||(u?k.some((B,A)=>Ns(B,m[A])):Ns(k,m)))&&(h&&h(),$n(t,i,3,[k,m===Tl?void 0:m,f]),m=k)}else _.run()};g.allowRecurse=!!t;let w;a==="sync"?w=g:a==="post"?w=()=>Ye(g,i&&i.suspense):(g.pre=!0,i&&(g.id=i.uid),w=()=>Pr(g));const _=new Dr(c,w);return t?s?g():m=_.run():a==="post"?Ye(_.run.bind(_),i&&i.suspense):_.run(),()=>{_.stop(),i&&i.scope&&Ar(i.scope.effects,_)}}function Bh(n,t,s){const o=this.proxy,a=He(n)?n.includes(".")?lp(o,n):()=>o[n]:n.bind(o,o);let r;ue(t)?r=t:(r=t.handler,s=t);const l=ze;os(this);const i=Nr(a,r.bind(o),s);return l?os(l):Tt(),i}function lp(n,t){const s=t.split(".");return()=>{let o=n;for(let a=0;a<s.length&&o;a++)o=o[s[a]];return o}}function Bt(n,t){if(!Pe(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),Be(n))Bt(n.value,t);else if(re(n))for(let s=0;s<n.length;s++)Bt(n[s],t);else if(Ic(n)||Vt(n))n.forEach(s=>{Bt(s,t)});else if(Oc(n))for(const s in n)Bt(n[s],t);return n}function ip(n,t){n.shapeFlag&6&&n.component?ip(n.component.subTree,t):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function xe(n){return ue(n)?{setup:n,name:n.name}:n}const Qt=n=>!!n.type.__asyncLoader,cp=n=>n.type.__isKeepAlive,kh={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:t}){const s=dt(),o=s.ctx;if(!o.renderer)return()=>{const B=t.default&&t.default();return B&&B.length===1?B[0]:B};const a=new Map,r=new Set;let l=null;const i=s.suspense,{renderer:{p:c,m:p,um:u,o:{createElement:h}}}=o,f=h("div");o.activate=(B,A,E,L,P)=>{const K=B.component;p(B,A,E,0,i),c(K.vnode,B,A,E,K,i,L,B.slotScopeIds,P),Ye(()=>{K.isDeactivated=!1,K.a&&Gt(K.a);const te=B.props&&B.props.onVnodeMounted;te&&bn(te,K.parent,B)},i)},o.deactivate=B=>{const A=B.component;p(B,f,null,1,i),Ye(()=>{A.da&&Gt(A.da);const E=B.props&&B.props.onVnodeUnmounted;E&&bn(E,A.parent,B),A.isDeactivated=!0},i)};function m(B){ia(B),u(B,s,i,!0)}function g(B){a.forEach((A,E)=>{const L=qa(A.type);L&&(!B||!B(L))&&w(E)})}function w(B){const A=a.get(B);!l||A.type!==l.type?m(A):l&&ia(l),a.delete(B),r.delete(B)}me(()=>[n.include,n.exclude],([B,A])=>{B&&g(E=>Cs(B,E)),A&&g(E=>!Cs(A,E))},{flush:"post",deep:!0});let _=null;const k=()=>{_!=null&&a.set(_,ca(s.subTree))};return ps(k),Mr(k),Go(()=>{a.forEach(B=>{const{subTree:A,suspense:E}=s,L=ca(A);if(B.type===L.type){ia(L);const P=L.component.da;P&&Ye(P,E);return}m(B)})}),()=>{if(_=null,!t.default)return null;const B=t.default(),A=B[0];if(B.length>1)return l=null,B;if(!ss(A)||!(A.shapeFlag&4)&&!(A.shapeFlag&128))return l=null,A;let E=ca(A);const L=E.type,P=qa(Qt(E)?E.type.__asyncResolved||{}:L),{include:K,exclude:te,max:ie}=n;if(K&&(!P||!Cs(K,P))||te&&P&&Cs(te,P))return l=E,A;const ye=E.key==null?L:E.key,_e=a.get(ye);return E.el&&(E=jt(E),A.shapeFlag&128&&(A.ssContent=E)),_=ye,_e?(E.el=_e.el,E.component=_e.component,E.transition&&ip(E,E.transition),E.shapeFlag|=512,r.delete(ye),r.add(ye)):(r.add(ye),ie&&r.size>parseInt(ie,10)&&w(r.values().next().value)),E.shapeFlag|=256,l=E,rp(A.type)?A:E}}},pp=kh;function Cs(n,t){return re(n)?n.some(s=>Cs(s,t)):He(n)?n.split(",").includes(t):n.test?n.test(t):!1}function Dh(n,t){up(n,"a",t)}function Eh(n,t){up(n,"da",t)}function up(n,t,s=ze){const o=n.__wdc||(n.__wdc=()=>{let a=s;for(;a;){if(a.isDeactivated)return;a=a.parent}return n()});if(Vo(t,o,s),s){let a=s.parent;for(;a&&a.parent;)cp(a.parent.vnode)&&Sh(o,t,s,a),a=a.parent}}function Sh(n,t,s,o){const a=Vo(t,n,o,!0);Zo(()=>{Ar(o[t],a)},s)}function ia(n){let t=n.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),n.shapeFlag=t}function ca(n){return n.shapeFlag&128?n.ssContent:n}function Vo(n,t,s=ze,o=!1){if(s){const a=s[n]||(s[n]=[]),r=t.__weh||(t.__weh=(...l)=>{if(s.isUnmounted)return;is(),os(s);const i=$n(t,s,n,l);return Tt(),cs(),i});return o?a.unshift(r):a.push(r),r}}const Xn=n=>(t,s=ze)=>(!Js||n==="sp")&&Vo(n,t,s),dp=Xn("bm"),ps=Xn("m"),Th=Xn("bu"),Mr=Xn("u"),Go=Xn("bum"),Zo=Xn("um"),Ih=Xn("sp"),$h=Xn("rtg"),Fh=Xn("rtc");function Oh(n,t=ze){Vo("ec",n,t)}function Lr(n,t){const s=Xe;if(s===null)return n;const o=Qo(s)||s.proxy,a=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[l,i,c,p=Ie]=t[r];ue(l)&&(l={mounted:l,updated:l}),l.deep&&Bt(i),a.push({dir:l,instance:o,value:i,oldValue:void 0,arg:c,modifiers:p})}return n}function mt(n,t,s,o){const a=n.dirs,r=t&&t.dirs;for(let l=0;l<a.length;l++){const i=a[l];r&&(i.oldValue=r[l].value);let c=i.dir[o];c&&(is(),$n(c,s,8,[n.el,i,n,t]),cs())}}const hp="components";function ko(n,t){return Ph(hp,n,!0,t)||n}const jh=Symbol();function Ph(n,t,s=!0,o=!1){const a=Xe||ze;if(a){const r=a.type;if(n===hp){const i=qa(r,!1);if(i&&(i===t||i===qn(t)||i===Ko(qn(t))))return r}const l=Il(a[n]||r[n],t)||Il(a.appContext[n],t);return!l&&o?r:l}}function Il(n,t){return n&&(n[t]||n[qn(t)]||n[Ko(qn(t))])}function Xs(n,t,s,o){let a;const r=s&&s[o];if(re(n)||He(n)){a=new Array(n.length);for(let l=0,i=n.length;l<i;l++)a[l]=t(n[l],l,void 0,r&&r[l])}else if(typeof n=="number"){a=new Array(n);for(let l=0;l<n;l++)a[l]=t(l+1,l,void 0,r&&r[l])}else if(Pe(n))if(n[Symbol.iterator])a=Array.from(n,(l,i)=>t(l,i,void 0,r&&r[i]));else{const l=Object.keys(n);a=new Array(l.length);for(let i=0,c=l.length;i<c;i++){const p=l[i];a[i]=t(n[p],p,i,r&&r[i])}}else a=[];return s&&(s[o]=a),a}function wn(n,t,s={},o,a){if(Xe.isCE||Xe.parent&&Qt(Xe.parent)&&Xe.parent.isCE)return z("slot",t==="default"?null:{name:t},o&&o());let r=n[t];r&&r._c&&(r._d=!1),x();const l=r&&fp(r(s)),i=j(De,{key:s.key||l&&l.key||`_${t}`},l||(o?o():[]),l&&n._===1?64:-2);return!a&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function fp(n){return n.some(t=>ss(t)?!(t.type===ut||t.type===De&&!fp(t.children)):!0)?n:null}const Ma=n=>n?Cp(n)?Qo(n)||n.proxy:Ma(n.parent):null,Do=an(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ma(n.parent),$root:n=>Ma(n.root),$emit:n=>n.emit,$options:n=>Hr(n),$forceUpdate:n=>n.f||(n.f=()=>Pr(n.update)),$nextTick:n=>n.n||(n.n=Ze.bind(n.proxy)),$watch:n=>Bh.bind(n)}),Nh={get({_:n},t){const{ctx:s,setupState:o,data:a,props:r,accessCache:l,type:i,appContext:c}=n;let p;if(t[0]!=="$"){const m=l[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return a[t];case 4:return s[t];case 3:return r[t]}else{if(o!==Ie&&ve(o,t))return l[t]=1,o[t];if(a!==Ie&&ve(a,t))return l[t]=2,a[t];if((p=n.propsOptions[0])&&ve(p,t))return l[t]=3,r[t];if(s!==Ie&&ve(s,t))return l[t]=4,s[t];La&&(l[t]=0)}}const u=Do[t];let h,f;if(u)return t==="$attrs"&&_n(n,"get",t),u(n);if((h=i.__cssModules)&&(h=h[t]))return h;if(s!==Ie&&ve(s,t))return l[t]=4,s[t];if(f=c.config.globalProperties,ve(f,t))return f[t]},set({_:n},t,s){const{data:o,setupState:a,ctx:r}=n;return a!==Ie&&ve(a,t)?(a[t]=s,!0):o!==Ie&&ve(o,t)?(o[t]=s,!0):ve(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=s,!0)},has({_:{data:n,setupState:t,accessCache:s,ctx:o,appContext:a,propsOptions:r}},l){let i;return!!s[l]||n!==Ie&&ve(n,l)||t!==Ie&&ve(t,l)||(i=r[0])&&ve(i,l)||ve(o,l)||ve(Do,l)||ve(a.config.globalProperties,l)},defineProperty(n,t,s){return s.get!=null?n._.accessCache[t]=0:ve(s,"value")&&this.set(n,t,s.value,null),Reflect.defineProperty(n,t,s)}};let La=!0;function Mh(n){const t=Hr(n),s=n.proxy,o=n.ctx;La=!1,t.beforeCreate&&$l(t.beforeCreate,n,"bc");const{data:a,computed:r,methods:l,watch:i,provide:c,inject:p,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:w,deactivated:_,beforeDestroy:k,beforeUnmount:B,destroyed:A,unmounted:E,render:L,renderTracked:P,renderTriggered:K,errorCaptured:te,serverPrefetch:ie,expose:ye,inheritAttrs:_e,components:Re,directives:Je,filters:Me}=t;if(p&&Lh(p,o,null,n.appContext.config.unwrapInjectedRef),l)for(const V in l){const ae=l[V];ue(ae)&&(o[V]=ae.bind(s))}if(a){const V=a.call(s,s);Pe(V)&&(n.data=Oe(V))}if(La=!0,r)for(const V in r){const ae=r[V],fe=ue(ae)?ae.bind(s,s):ue(ae.get)?ae.get.bind(s,s):In,Ee=!ue(ae)&&ue(ae.set)?ae.set.bind(s):In,cn=D({get:fe,set:Ee});Object.defineProperty(o,V,{enumerable:!0,configurable:!0,get:()=>cn.value,set:Ve=>cn.value=Ve})}if(i)for(const V in i)mp(i[V],o,s,V);if(c){const V=ue(c)?c.call(s):c;Reflect.ownKeys(V).forEach(ae=>{mn(ae,V[ae])})}u&&$l(u,n,"c");function je(V,ae){re(ae)?ae.forEach(fe=>V(fe.bind(s))):ae&&V(ae.bind(s))}if(je(dp,h),je(ps,f),je(Th,m),je(Mr,g),je(Dh,w),je(Eh,_),je(Oh,te),je(Fh,P),je($h,K),je(Go,B),je(Zo,E),je(Ih,ie),re(ye))if(ye.length){const V=n.exposed||(n.exposed={});ye.forEach(ae=>{Object.defineProperty(V,ae,{get:()=>s[ae],set:fe=>s[ae]=fe})})}else n.exposed||(n.exposed={});L&&n.render===In&&(n.render=L),_e!=null&&(n.inheritAttrs=_e),Re&&(n.components=Re),Je&&(n.directives=Je)}function Lh(n,t,s=In,o=!1){re(n)&&(n=Ha(n));for(const a in n){const r=n[a];let l;Pe(r)?"default"in r?l=$(r.from||a,r.default,!0):l=$(r.from||a):l=$(r),Be(l)&&o?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>l.value,set:i=>l.value=i}):t[a]=l}}function $l(n,t,s){$n(re(n)?n.map(o=>o.bind(t.proxy)):n.bind(t.proxy),t,s)}function mp(n,t,s,o){const a=o.includes(".")?lp(s,o):()=>s[o];if(He(n)){const r=t[n];ue(r)&&me(a,r)}else if(ue(n))me(a,n.bind(s));else if(Pe(n))if(re(n))n.forEach(r=>mp(r,t,s,o));else{const r=ue(n.handler)?n.handler.bind(s):t[n.handler];ue(r)&&me(a,r,n)}}function Hr(n){const t=n.type,{mixins:s,extends:o}=t,{mixins:a,optionsCache:r,config:{optionMergeStrategies:l}}=n.appContext,i=r.get(t);let c;return i?c=i:!a.length&&!s&&!o?c=t:(c={},a.length&&a.forEach(p=>Eo(c,p,l,!0)),Eo(c,t,l)),Pe(t)&&r.set(t,c),c}function Eo(n,t,s,o=!1){const{mixins:a,extends:r}=t;r&&Eo(n,r,s,!0),a&&a.forEach(l=>Eo(n,l,s,!0));for(const l in t)if(!(o&&l==="expose")){const i=Hh[l]||s&&s[l];n[l]=i?i(n[l],t[l]):t[l]}return n}const Hh={data:Fl,props:_t,emits:_t,methods:_t,computed:_t,beforeCreate:nn,created:nn,beforeMount:nn,mounted:nn,beforeUpdate:nn,updated:nn,beforeDestroy:nn,beforeUnmount:nn,destroyed:nn,unmounted:nn,activated:nn,deactivated:nn,errorCaptured:nn,serverPrefetch:nn,components:_t,directives:_t,watch:Jh,provide:Fl,inject:Rh};function Fl(n,t){return t?n?function(){return an(ue(n)?n.call(this,this):n,ue(t)?t.call(this,this):t)}:t:n}function Rh(n,t){return _t(Ha(n),Ha(t))}function Ha(n){if(re(n)){const t={};for(let s=0;s<n.length;s++)t[n[s]]=n[s];return t}return n}function nn(n,t){return n?[...new Set([].concat(n,t))]:t}function _t(n,t){return n?an(an(Object.create(null),n),t):t}function Jh(n,t){if(!n)return t;if(!t)return n;const s=an(Object.create(null),n);for(const o in t)s[o]=nn(n[o],t[o]);return s}function Kh(n,t,s,o=!1){const a={},r={};Ao(r,Xo,1),n.propsDefaults=Object.create(null),gp(n,t,a,r);for(const l in n.propsOptions[0])l in a||(a[l]=void 0);s?n.props=o?a:ah(a):n.type.props?n.props=a:n.props=r,n.attrs=r}function qh(n,t,s,o){const{props:a,attrs:r,vnode:{patchFlag:l}}=n,i=Ce(a),[c]=n.propsOptions;let p=!1;if((o||l>0)&&!(l&16)){if(l&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(zo(n.emitsOptions,f))continue;const m=t[f];if(c)if(ve(r,f))m!==r[f]&&(r[f]=m,p=!0);else{const g=qn(f);a[g]=Ra(c,i,g,m,n,!1)}else m!==r[f]&&(r[f]=m,p=!0)}}}else{gp(n,t,a,r)&&(p=!0);let u;for(const h in i)(!t||!ve(t,h)&&((u=Pt(h))===h||!ve(t,u)))&&(c?s&&(s[h]!==void 0||s[u]!==void 0)&&(a[h]=Ra(c,i,h,void 0,n,!0)):delete a[h]);if(r!==i)for(const h in r)(!t||!ve(t,h)&&!0)&&(delete r[h],p=!0)}p&&Gn(n,"set","$attrs")}function gp(n,t,s,o){const[a,r]=n.propsOptions;let l=!1,i;if(t)for(let c in t){if(go(c))continue;const p=t[c];let u;a&&ve(a,u=qn(c))?!r||!r.includes(u)?s[u]=p:(i||(i={}))[u]=p:zo(n.emitsOptions,c)||(!(c in o)||p!==o[c])&&(o[c]=p,l=!0)}if(r){const c=Ce(s),p=i||Ie;for(let u=0;u<r.length;u++){const h=r[u];s[h]=Ra(a,c,h,p[h],n,!ve(p,h))}}return l}function Ra(n,t,s,o,a,r){const l=n[s];if(l!=null){const i=ve(l,"default");if(i&&o===void 0){const c=l.default;if(l.type!==Function&&ue(c)){const{propsDefaults:p}=a;s in p?o=p[s]:(os(a),o=p[s]=c.call(null,t),Tt())}else o=c}l[0]&&(r&&!i?o=!1:l[1]&&(o===""||o===Pt(s))&&(o=!0))}return o}function yp(n,t,s=!1){const o=t.propsCache,a=o.get(n);if(a)return a;const r=n.props,l={},i=[];let c=!1;if(!ue(n)){const u=h=>{c=!0;const[f,m]=yp(h,t,!0);an(l,f),m&&i.push(...m)};!s&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!c)return Pe(n)&&o.set(n,Yt),Yt;if(re(r))for(let u=0;u<r.length;u++){const h=qn(r[u]);Ol(h)&&(l[h]=Ie)}else if(r)for(const u in r){const h=qn(u);if(Ol(h)){const f=r[u],m=l[h]=re(f)||ue(f)?{type:f}:f;if(m){const g=Nl(Boolean,m.type),w=Nl(String,m.type);m[0]=g>-1,m[1]=w<0||g<w,(g>-1||ve(m,"default"))&&i.push(h)}}}const p=[l,i];return Pe(n)&&o.set(n,p),p}function Ol(n){return n[0]!=="$"}function jl(n){const t=n&&n.toString().match(/^\s*function (\w+)/);return t?t[1]:n===null?"null":""}function Pl(n,t){return jl(n)===jl(t)}function Nl(n,t){return re(t)?t.findIndex(s=>Pl(s,n)):ue(t)&&Pl(t,n)?0:-1}const vp=n=>n[0]==="_"||n==="$stable",Rr=n=>re(n)?n.map(Ln):[Ln(n)],Wh=(n,t,s)=>{if(t._n)return t;const o=M((...a)=>Rr(t(...a)),s);return o._c=!1,o},_p=(n,t,s)=>{const o=n._ctx;for(const a in n){if(vp(a))continue;const r=n[a];if(ue(r))t[a]=Wh(a,r,o);else if(r!=null){const l=Rr(r);t[a]=()=>l}}},wp=(n,t)=>{const s=Rr(t);n.slots.default=()=>s},Uh=(n,t)=>{if(n.vnode.shapeFlag&32){const s=t._;s?(n.slots=Ce(t),Ao(t,"_",s)):_p(t,n.slots={})}else n.slots={},t&&wp(n,t);Ao(n.slots,Xo,1)},zh=(n,t,s)=>{const{vnode:o,slots:a}=n;let r=!0,l=Ie;if(o.shapeFlag&32){const i=t._;i?s&&i===1?r=!1:(an(a,t),!s&&i===1&&delete a._):(r=!t.$stable,_p(t,a)),l=t}else t&&(wp(n,t),l={default:1});if(r)for(const i in a)!vp(i)&&!(i in l)&&delete a[i]};function bp(){return{app:null,config:{isNativeTag:Bd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yh=0;function Vh(n,t){return function(o,a=null){ue(o)||(o=Object.assign({},o)),a!=null&&!Pe(a)&&(a=null);const r=bp(),l=new Set;let i=!1;const c=r.app={_uid:Yh++,_component:o,_props:a,_container:null,_context:r,_instance:null,version:mf,get config(){return r.config},set config(p){},use(p,...u){return l.has(p)||(p&&ue(p.install)?(l.add(p),p.install(c,...u)):ue(p)&&(l.add(p),p(c,...u))),c},mixin(p){return r.mixins.includes(p)||r.mixins.push(p),c},component(p,u){return u?(r.components[p]=u,c):r.components[p]},directive(p,u){return u?(r.directives[p]=u,c):r.directives[p]},mount(p,u,h){if(!i){const f=z(o,a);return f.appContext=r,u&&t?t(f,p):n(f,p,h),i=!0,c._container=p,p.__vue_app__=c,Qo(f.component)||f.component.proxy}},unmount(){i&&(n(null,c._container),delete c._container.__vue_app__)},provide(p,u){return r.provides[p]=u,c}};return c}}function Ja(n,t,s,o,a=!1){if(re(n)){n.forEach((f,m)=>Ja(f,t&&(re(t)?t[m]:t),s,o,a));return}if(Qt(o)&&!a)return;const r=o.shapeFlag&4?Qo(o.component)||o.component.proxy:o.el,l=a?null:r,{i,r:c}=n,p=t&&t.r,u=i.refs===Ie?i.refs={}:i.refs,h=i.setupState;if(p!=null&&p!==c&&(He(p)?(u[p]=null,ve(h,p)&&(h[p]=null)):Be(p)&&(p.value=null)),ue(c))rt(c,i,12,[l,u]);else{const f=He(c),m=Be(c);if(f||m){const g=()=>{if(n.f){const w=f?u[c]:c.value;a?re(w)&&Ar(w,r):re(w)?w.includes(r)||w.push(r):f?(u[c]=[r],ve(h,c)&&(h[c]=u[c])):(c.value=[r],n.k&&(u[n.k]=c.value))}else f?(u[c]=l,ve(h,c)&&(h[c]=l)):m&&(c.value=l,n.k&&(u[n.k]=l))};l?(g.id=-1,Ye(g,s)):g()}}}const Ye=Ch;function Gh(n){return Zh(n)}function Zh(n,t){const s=Id();s.__VUE__=!0;const{insert:o,remove:a,patchProp:r,createElement:l,createText:i,createComment:c,setText:p,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=In,cloneNode:g,insertStaticContent:w}=n,_=(y,v,C,I=null,T=null,H=null,U=!1,N=null,J=!!v.dynamicChildren)=>{if(y===v)return;y&&!ms(y,v)&&(I=Z(y),rn(y,T,H,!0),y=null),v.patchFlag===-2&&(J=!1,v.dynamicChildren=null);const{type:F,ref:ee,shapeFlag:G}=v;switch(F){case Kr:k(y,v,C,I);break;case ut:B(y,v,C,I);break;case pa:y==null&&A(v,C,I,U);break;case De:Je(y,v,C,I,T,H,U,N,J);break;default:G&1?P(y,v,C,I,T,H,U,N,J):G&6?Me(y,v,C,I,T,H,U,N,J):(G&64||G&128)&&F.process(y,v,C,I,T,H,U,N,J,ge)}ee!=null&&T&&Ja(ee,y&&y.ref,H,v||y,!v)},k=(y,v,C,I)=>{if(y==null)o(v.el=i(v.children),C,I);else{const T=v.el=y.el;v.children!==y.children&&p(T,v.children)}},B=(y,v,C,I)=>{y==null?o(v.el=c(v.children||""),C,I):v.el=y.el},A=(y,v,C,I)=>{[y.el,y.anchor]=w(y.children,v,C,I,y.el,y.anchor)},E=({el:y,anchor:v},C,I)=>{let T;for(;y&&y!==v;)T=f(y),o(y,C,I),y=T;o(v,C,I)},L=({el:y,anchor:v})=>{let C;for(;y&&y!==v;)C=f(y),a(y),y=C;a(v)},P=(y,v,C,I,T,H,U,N,J)=>{U=U||v.type==="svg",y==null?K(v,C,I,T,H,U,N,J):ye(y,v,T,H,U,N,J)},K=(y,v,C,I,T,H,U,N)=>{let J,F;const{type:ee,props:G,shapeFlag:ne,transition:le,patchFlag:we,dirs:Se}=y;if(y.el&&g!==void 0&&we===-1)J=y.el=g(y.el);else{if(J=y.el=l(y.type,H,G&&G.is,G),ne&8?u(J,y.children):ne&16&&ie(y.children,J,null,I,T,H&&ee!=="foreignObject",U,N),Se&&mt(y,null,I,"created"),G){for(const Fe in G)Fe!=="value"&&!go(Fe)&&r(J,Fe,null,G[Fe],H,y.children,I,T,R);"value"in G&&r(J,"value",null,G.value),(F=G.onVnodeBeforeMount)&&bn(F,I,y)}te(J,y,y.scopeId,U,I)}Se&&mt(y,null,I,"beforeMount");const Te=(!T||T&&!T.pendingBranch)&&le&&!le.persisted;Te&&le.beforeEnter(J),o(J,v,C),((F=G&&G.onVnodeMounted)||Te||Se)&&Ye(()=>{F&&bn(F,I,y),Te&&le.enter(J),Se&&mt(y,null,I,"mounted")},T)},te=(y,v,C,I,T)=>{if(C&&m(y,C),I)for(let H=0;H<I.length;H++)m(y,I[H]);if(T){let H=T.subTree;if(v===H){const U=T.vnode;te(y,U,U.scopeId,U.slotScopeIds,T.parent)}}},ie=(y,v,C,I,T,H,U,N,J=0)=>{for(let F=J;F<y.length;F++){const ee=y[F]=N?tt(y[F]):Ln(y[F]);_(null,ee,v,C,I,T,H,U,N)}},ye=(y,v,C,I,T,H,U)=>{const N=v.el=y.el;let{patchFlag:J,dynamicChildren:F,dirs:ee}=v;J|=y.patchFlag&16;const G=y.props||Ie,ne=v.props||Ie;let le;C&&gt(C,!1),(le=ne.onVnodeBeforeUpdate)&&bn(le,C,v,y),ee&&mt(v,y,C,"beforeUpdate"),C&&gt(C,!0);const we=T&&v.type!=="foreignObject";if(F?_e(y.dynamicChildren,F,N,C,I,we,H):U||fe(y,v,N,null,C,I,we,H,!1),J>0){if(J&16)Re(N,v,G,ne,C,I,T);else if(J&2&&G.class!==ne.class&&r(N,"class",null,ne.class,T),J&4&&r(N,"style",G.style,ne.style,T),J&8){const Se=v.dynamicProps;for(let Te=0;Te<Se.length;Te++){const Fe=Se[Te],Bn=G[Fe],Lt=ne[Fe];(Lt!==Bn||Fe==="value")&&r(N,Fe,Bn,Lt,T,y.children,C,I,R)}}J&1&&y.children!==v.children&&u(N,v.children)}else!U&&F==null&&Re(N,v,G,ne,C,I,T);((le=ne.onVnodeUpdated)||ee)&&Ye(()=>{le&&bn(le,C,v,y),ee&&mt(v,y,C,"updated")},I)},_e=(y,v,C,I,T,H,U)=>{for(let N=0;N<v.length;N++){const J=y[N],F=v[N],ee=J.el&&(J.type===De||!ms(J,F)||J.shapeFlag&70)?h(J.el):C;_(J,F,ee,null,I,T,H,U,!0)}},Re=(y,v,C,I,T,H,U)=>{if(C!==I){for(const N in I){if(go(N))continue;const J=I[N],F=C[N];J!==F&&N!=="value"&&r(y,N,F,J,U,v.children,T,H,R)}if(C!==Ie)for(const N in C)!go(N)&&!(N in I)&&r(y,N,C[N],null,U,v.children,T,H,R);"value"in I&&r(y,"value",C.value,I.value)}},Je=(y,v,C,I,T,H,U,N,J)=>{const F=v.el=y?y.el:i(""),ee=v.anchor=y?y.anchor:i("");let{patchFlag:G,dynamicChildren:ne,slotScopeIds:le}=v;le&&(N=N?N.concat(le):le),y==null?(o(F,C,I),o(ee,C,I),ie(v.children,C,ee,T,H,U,N,J)):G>0&&G&64&&ne&&y.dynamicChildren?(_e(y.dynamicChildren,ne,C,T,H,U,N),(v.key!=null||T&&v===T.subTree)&&Jr(y,v,!0)):fe(y,v,C,ee,T,H,U,N,J)},Me=(y,v,C,I,T,H,U,N,J)=>{v.slotScopeIds=N,y==null?v.shapeFlag&512?T.ctx.activate(v,C,I,U,J):$e(v,C,I,T,H,U,J):je(y,v,J)},$e=(y,v,C,I,T,H,U)=>{const N=y.component=lf(y,I,T);if(cp(y)&&(N.ctx.renderer=ge),cf(N),N.asyncDep){if(T&&T.registerDep(N,V),!y.el){const J=N.subTree=z(ut);B(null,J,v,C)}return}V(N,y,v,C,T,H,U)},je=(y,v,C)=>{const I=v.component=y.component;if(xh(y,v,C))if(I.asyncDep&&!I.asyncResolved){ae(I,v,C);return}else I.next=v,gh(I.update),I.update();else v.el=y.el,I.vnode=v},V=(y,v,C,I,T,H,U)=>{const N=()=>{if(y.isMounted){let{next:ee,bu:G,u:ne,parent:le,vnode:we}=y,Se=ee,Te;gt(y,!1),ee?(ee.el=we.el,ae(y,ee,U)):ee=we,G&&Gt(G),(Te=ee.props&&ee.props.onVnodeBeforeUpdate)&&bn(Te,le,ee,we),gt(y,!0);const Fe=la(y),Bn=y.subTree;y.subTree=Fe,_(Bn,Fe,h(Bn.el),Z(Bn),y,T,H),ee.el=Fe.el,Se===null&&Ah(y,Fe.el),ne&&Ye(ne,T),(Te=ee.props&&ee.props.onVnodeUpdated)&&Ye(()=>bn(Te,le,ee,we),T)}else{let ee;const{el:G,props:ne}=v,{bm:le,m:we,parent:Se}=y,Te=Qt(v);if(gt(y,!1),le&&Gt(le),!Te&&(ee=ne&&ne.onVnodeBeforeMount)&&bn(ee,Se,v),gt(y,!0),G&&oe){const Fe=()=>{y.subTree=la(y),oe(G,y.subTree,y,T,null)};Te?v.type.__asyncLoader().then(()=>!y.isUnmounted&&Fe()):Fe()}else{const Fe=y.subTree=la(y);_(null,Fe,C,I,y,T,H),v.el=Fe.el}if(we&&Ye(we,T),!Te&&(ee=ne&&ne.onVnodeMounted)){const Fe=v;Ye(()=>bn(ee,Se,Fe),T)}(v.shapeFlag&256||Se&&Qt(Se.vnode)&&Se.vnode.shapeFlag&256)&&y.a&&Ye(y.a,T),y.isMounted=!0,v=C=I=null}},J=y.effect=new Dr(N,()=>Pr(F),y.scope),F=y.update=()=>J.run();F.id=y.uid,gt(y,!0),F()},ae=(y,v,C)=>{v.component=y;const I=y.vnode.props;y.vnode=v,y.next=null,qh(y,v.props,I,C),zh(y,v.children,C),is(),El(),cs()},fe=(y,v,C,I,T,H,U,N,J=!1)=>{const F=y&&y.children,ee=y?y.shapeFlag:0,G=v.children,{patchFlag:ne,shapeFlag:le}=v;if(ne>0){if(ne&128){cn(F,G,C,I,T,H,U,N,J);return}else if(ne&256){Ee(F,G,C,I,T,H,U,N,J);return}}le&8?(ee&16&&R(F,T,H),G!==F&&u(C,G)):ee&16?le&16?cn(F,G,C,I,T,H,U,N,J):R(F,T,H,!0):(ee&8&&u(C,""),le&16&&ie(G,C,I,T,H,U,N,J))},Ee=(y,v,C,I,T,H,U,N,J)=>{y=y||Yt,v=v||Yt;const F=y.length,ee=v.length,G=Math.min(F,ee);let ne;for(ne=0;ne<G;ne++){const le=v[ne]=J?tt(v[ne]):Ln(v[ne]);_(y[ne],le,C,null,T,H,U,N,J)}F>ee?R(y,T,H,!0,!1,G):ie(v,C,I,T,H,U,N,J,G)},cn=(y,v,C,I,T,H,U,N,J)=>{let F=0;const ee=v.length;let G=y.length-1,ne=ee-1;for(;F<=G&&F<=ne;){const le=y[F],we=v[F]=J?tt(v[F]):Ln(v[F]);if(ms(le,we))_(le,we,C,null,T,H,U,N,J);else break;F++}for(;F<=G&&F<=ne;){const le=y[G],we=v[ne]=J?tt(v[ne]):Ln(v[ne]);if(ms(le,we))_(le,we,C,null,T,H,U,N,J);else break;G--,ne--}if(F>G){if(F<=ne){const le=ne+1,we=le<ee?v[le].el:I;for(;F<=ne;)_(null,v[F]=J?tt(v[F]):Ln(v[F]),C,we,T,H,U,N,J),F++}}else if(F>ne)for(;F<=G;)rn(y[F],T,H,!0),F++;else{const le=F,we=F,Se=new Map;for(F=we;F<=ne;F++){const pn=v[F]=J?tt(v[F]):Ln(v[F]);pn.key!=null&&Se.set(pn.key,F)}let Te,Fe=0;const Bn=ne-we+1;let Lt=!1,yl=0;const fs=new Array(Bn);for(F=0;F<Bn;F++)fs[F]=0;for(F=le;F<=G;F++){const pn=y[F];if(Fe>=Bn){rn(pn,T,H,!0);continue}let Mn;if(pn.key!=null)Mn=Se.get(pn.key);else for(Te=we;Te<=ne;Te++)if(fs[Te-we]===0&&ms(pn,v[Te])){Mn=Te;break}Mn===void 0?rn(pn,T,H,!0):(fs[Mn-we]=F+1,Mn>=yl?yl=Mn:Lt=!0,_(pn,v[Mn],C,null,T,H,U,N,J),Fe++)}const vl=Lt?Xh(fs):Yt;for(Te=vl.length-1,F=Bn-1;F>=0;F--){const pn=we+F,Mn=v[pn],_l=pn+1<ee?v[pn+1].el:I;fs[F]===0?_(null,Mn,C,_l,T,H,U,N,J):Lt&&(Te<0||F!==vl[Te]?Ve(Mn,C,_l,2):Te--)}}},Ve=(y,v,C,I,T=null)=>{const{el:H,type:U,transition:N,children:J,shapeFlag:F}=y;if(F&6){Ve(y.component.subTree,v,C,I);return}if(F&128){y.suspense.move(v,C,I);return}if(F&64){U.move(y,v,C,ge);return}if(U===De){o(H,v,C);for(let G=0;G<J.length;G++)Ve(J[G],v,C,I);o(y.anchor,v,C);return}if(U===pa){E(y,v,C);return}if(I!==2&&F&1&&N)if(I===0)N.beforeEnter(H),o(H,v,C),Ye(()=>N.enter(H),T);else{const{leave:G,delayLeave:ne,afterLeave:le}=N,we=()=>o(H,v,C),Se=()=>{G(H,()=>{we(),le&&le()})};ne?ne(H,we,Se):Se()}else o(H,v,C)},rn=(y,v,C,I=!1,T=!1)=>{const{type:H,props:U,ref:N,children:J,dynamicChildren:F,shapeFlag:ee,patchFlag:G,dirs:ne}=y;if(N!=null&&Ja(N,null,C,y,!0),ee&256){v.ctx.deactivate(y);return}const le=ee&1&&ne,we=!Qt(y);let Se;if(we&&(Se=U&&U.onVnodeBeforeUnmount)&&bn(Se,v,y),ee&6)Y(y.component,C,I);else{if(ee&128){y.suspense.unmount(C,I);return}le&&mt(y,null,v,"beforeUnmount"),ee&64?y.type.remove(y,v,C,T,ge,I):F&&(H!==De||G>0&&G&64)?R(F,v,C,!1,!0):(H===De&&G&384||!T&&ee&16)&&R(J,v,C),I&&ft(y)}(we&&(Se=U&&U.onVnodeUnmounted)||le)&&Ye(()=>{Se&&bn(Se,v,y),le&&mt(y,null,v,"unmounted")},C)},ft=y=>{const{type:v,el:C,anchor:I,transition:T}=y;if(v===De){S(C,I);return}if(v===pa){L(y);return}const H=()=>{a(C),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(y.shapeFlag&1&&T&&!T.persisted){const{leave:U,delayLeave:N}=T,J=()=>U(C,H);N?N(y.el,H,J):J()}else H()},S=(y,v)=>{let C;for(;y!==v;)C=f(y),a(y),y=C;a(v)},Y=(y,v,C)=>{const{bum:I,scope:T,update:H,subTree:U,um:N}=y;I&&Gt(I),T.stop(),H&&(H.active=!1,rn(U,y,v,C)),N&&Ye(N,v),Ye(()=>{y.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},R=(y,v,C,I=!1,T=!1,H=0)=>{for(let U=H;U<y.length;U++)rn(y[U],v,C,I,T)},Z=y=>y.shapeFlag&6?Z(y.component.subTree):y.shapeFlag&128?y.suspense.next():f(y.anchor||y.el),be=(y,v,C)=>{y==null?v._vnode&&rn(v._vnode,null,null,!0):_(v._vnode||null,y,v,null,null,null,C),El(),np(),v._vnode=y},ge={p:_,um:rn,m:Ve,r:ft,mt:$e,mc:ie,pc:fe,pbc:_e,n:Z,o:n};let ce,oe;return t&&([ce,oe]=t(ge)),{render:be,hydrate:ce,createApp:Vh(be,ce)}}function gt({effect:n,update:t},s){n.allowRecurse=t.allowRecurse=s}function Jr(n,t,s=!1){const o=n.children,a=t.children;if(re(o)&&re(a))for(let r=0;r<o.length;r++){const l=o[r];let i=a[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[r]=tt(a[r]),i.el=l.el),s||Jr(l,i))}}function Xh(n){const t=n.slice(),s=[0];let o,a,r,l,i;const c=n.length;for(o=0;o<c;o++){const p=n[o];if(p!==0){if(a=s[s.length-1],n[a]<p){t[o]=a,s.push(o);continue}for(r=0,l=s.length-1;r<l;)i=r+l>>1,n[s[i]]<p?r=i+1:l=i;p<n[s[r]]&&(r>0&&(t[o]=s[r-1]),s[r]=o)}}for(r=s.length,l=s[r-1];r-- >0;)s[r]=l,l=t[l];return s}const Qh=n=>n.__isTeleport,Bs=n=>n&&(n.disabled||n.disabled===""),Ml=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Ka=(n,t)=>{const s=n&&n.to;return He(s)?t?t(s):null:s},ef={__isTeleport:!0,process(n,t,s,o,a,r,l,i,c,p){const{mc:u,pc:h,pbc:f,o:{insert:m,querySelector:g,createText:w,createComment:_}}=p,k=Bs(t.props);let{shapeFlag:B,children:A,dynamicChildren:E}=t;if(n==null){const L=t.el=w(""),P=t.anchor=w("");m(L,s,o),m(P,s,o);const K=t.target=Ka(t.props,g),te=t.targetAnchor=w("");K&&(m(te,K),l=l||Ml(K));const ie=(ye,_e)=>{B&16&&u(A,ye,_e,a,r,l,i,c)};k?ie(s,P):K&&ie(K,te)}else{t.el=n.el;const L=t.anchor=n.anchor,P=t.target=n.target,K=t.targetAnchor=n.targetAnchor,te=Bs(n.props),ie=te?s:P,ye=te?L:K;if(l=l||Ml(P),E?(f(n.dynamicChildren,E,ie,a,r,l,i),Jr(n,t,!0)):c||h(n,t,ie,ye,a,r,l,i,!1),k)te||po(t,s,L,p,1);else if((t.props&&t.props.to)!==(n.props&&n.props.to)){const _e=t.target=Ka(t.props,g);_e&&po(t,_e,null,p,0)}else te&&po(t,P,K,p,1)}},remove(n,t,s,o,{um:a,o:{remove:r}},l){const{shapeFlag:i,children:c,anchor:p,targetAnchor:u,target:h,props:f}=n;if(h&&r(u),(l||!Bs(f))&&(r(p),i&16))for(let m=0;m<c.length;m++){const g=c[m];a(g,t,s,!0,!!g.dynamicChildren)}},move:po,hydrate:nf};function po(n,t,s,{o:{insert:o},m:a},r=2){r===0&&o(n.targetAnchor,t,s);const{el:l,anchor:i,shapeFlag:c,children:p,props:u}=n,h=r===2;if(h&&o(l,t,s),(!h||Bs(u))&&c&16)for(let f=0;f<p.length;f++)a(p[f],t,s,2);h&&o(i,t,s)}function nf(n,t,s,o,a,r,{o:{nextSibling:l,parentNode:i,querySelector:c}},p){const u=t.target=Ka(t.props,c);if(u){const h=u._lpa||u.firstChild;if(t.shapeFlag&16)if(Bs(t.props))t.anchor=p(l(n),t,i(n),s,o,a,r),t.targetAnchor=h;else{t.anchor=l(n);let f=h;for(;f;)if(f=l(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,u._lpa=t.targetAnchor&&l(t.targetAnchor);break}p(h,t,u,s,o,a,r)}}return t.anchor&&l(t.anchor)}const tf=ef,De=Symbol(void 0),Kr=Symbol(void 0),ut=Symbol(void 0),pa=Symbol(void 0),ks=[];let Sn=null;function x(n=!1){ks.push(Sn=n?null:[])}function sf(){ks.pop(),Sn=ks[ks.length-1]||null}let Rs=1;function Ll(n){Rs+=n}function xp(n){return n.dynamicChildren=Rs>0?Sn||Yt:null,sf(),Rs>0&&Sn&&Sn.push(n),n}function W(n,t,s,o,a,r){return xp(e(n,t,s,o,a,r,!0))}function j(n,t,s,o,a){return xp(z(n,t,s,o,a,!0))}function ss(n){return n?n.__v_isVNode===!0:!1}function ms(n,t){return n.type===t.type&&n.key===t.key}const Xo="__vInternal",Ap=({key:n})=>n!=null?n:null,yo=({ref:n,ref_key:t,ref_for:s})=>n!=null?He(n)||Be(n)||ue(n)?{i:Xe,r:n,k:t,f:!!s}:n:null;function e(n,t=null,s=null,o=0,a=null,r=n===De?0:1,l=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Ap(t),ref:t&&yo(t),scopeId:Yo,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:a,dynamicChildren:null,appContext:null};return i?(qr(c,s),r&128&&n.normalize(c)):s&&(c.shapeFlag|=He(s)?8:16),Rs>0&&!l&&Sn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Sn.push(c),c}const z=of;function of(n,t=null,s=null,o=0,a=null,r=!1){if((!n||n===jh)&&(n=ut),ss(n)){const i=jt(n,t,!0);return s&&qr(i,s),Rs>0&&!r&&Sn&&(i.shapeFlag&6?Sn[Sn.indexOf(n)]=i:Sn.push(i)),i.patchFlag|=-2,i}if(df(n)&&(n=n.__vccOpts),t){t=X(t);let{class:i,style:c}=t;i&&!He(i)&&(t.class=Ne(i)),Pe(c)&&(Yc(c)&&!re(c)&&(c=an({},c)),t.style=Ue(c))}const l=He(n)?1:rp(n)?128:Qh(n)?64:Pe(n)?4:ue(n)?2:0;return e(n,t,s,o,a,l,r,!0)}function X(n){return n?Yc(n)||Xo in n?an({},n):n:null}function jt(n,t,s=!1){const{props:o,ref:a,patchFlag:r,children:l}=n,i=t?Le(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:i,key:i&&Ap(i),ref:t&&t.ref?s&&a?re(a)?a.concat(yo(t)):[a,yo(t)]:yo(t):a,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==De?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&jt(n.ssContent),ssFallback:n.ssFallback&&jt(n.ssFallback),el:n.el,anchor:n.anchor}}function d(n=" ",t=0){return z(Kr,null,n,t)}function se(n="",t=!1){return t?(x(),j(ut,null,n)):z(ut,null,n)}function Ln(n){return n==null||typeof n=="boolean"?z(ut):re(n)?z(De,null,n.slice()):typeof n=="object"?tt(n):z(Kr,null,String(n))}function tt(n){return n.el===null||n.memo?n:jt(n)}function qr(n,t){let s=0;const{shapeFlag:o}=n;if(t==null)t=null;else if(re(t))s=16;else if(typeof t=="object")if(o&65){const a=t.default;a&&(a._c&&(a._d=!1),qr(n,a()),a._c&&(a._d=!0));return}else{s=32;const a=t._;!a&&!(Xo in t)?t._ctx=Xe:a===3&&Xe&&(Xe.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else ue(t)?(t={default:t,_ctx:Xe},s=32):(t=String(t),o&64?(s=16,t=[d(t)]):s=8);n.children=t,n.shapeFlag|=s}function Le(...n){const t={};for(let s=0;s<n.length;s++){const o=n[s];for(const a in o)if(a==="class")t.class!==o.class&&(t.class=Ne([t.class,o.class]));else if(a==="style")t.style=Ue([t.style,o.style]);else if(Ho(a)){const r=t[a],l=o[a];l&&r!==l&&!(re(r)&&r.includes(l))&&(t[a]=r?[].concat(r,l):l)}else a!==""&&(t[a]=o[a])}return t}function bn(n,t,s,o=null){$n(n,t,7,[s,o])}const af=bp();let rf=0;function lf(n,t,s){const o=n.type,a=(t?t.appContext:n.appContext)||af,r={uid:rf++,vnode:n,type:o,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new jc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yp(o,a),emitsOptions:sp(o,a),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:o.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=_h.bind(null,r),n.ce&&n.ce(r),r}let ze=null;const dt=()=>ze||Xe,os=n=>{ze=n,n.scope.on()},Tt=()=>{ze&&ze.scope.off(),ze=null};function Cp(n){return n.vnode.shapeFlag&4}let Js=!1;function cf(n,t=!1){Js=t;const{props:s,children:o}=n.vnode,a=Cp(n);Kh(n,s,a,t),Uh(n,o);const r=a?pf(n,t):void 0;return Js=!1,r}function pf(n,t){const s=n.type;n.accessCache=Object.create(null),n.proxy=Wo(new Proxy(n.ctx,Nh));const{setup:o}=s;if(o){const a=n.setupContext=o.length>1?kp(n):null;os(n),is();const r=rt(o,n,0,[n.props,a]);if(cs(),Tt(),$c(r)){if(r.then(Tt,Tt),t)return r.then(l=>{Hl(n,l,t)}).catch(l=>{Uo(l,n,0)});n.asyncDep=r}else Hl(n,r,t)}else Bp(n,t)}function Hl(n,t,s){ue(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Pe(t)&&(n.setupState=Gc(t)),Bp(n,s)}let Rl;function Bp(n,t,s){const o=n.type;if(!n.render){if(!t&&Rl&&!o.render){const a=o.template||Hr(n).template;if(a){const{isCustomElement:r,compilerOptions:l}=n.appContext.config,{delimiters:i,compilerOptions:c}=o,p=an(an({isCustomElement:r,delimiters:i},l),c);o.render=Rl(a,p)}}n.render=o.render||In}os(n),is(),Mh(n),cs(),Tt()}function uf(n){return new Proxy(n.attrs,{get(t,s){return _n(n,"get","$attrs"),t[s]}})}function kp(n){const t=o=>{n.exposed=o||{}};let s;return{get attrs(){return s||(s=uf(n))},slots:n.slots,emit:n.emit,expose:t}}function Qo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Gc(Wo(n.exposed)),{get(t,s){if(s in t)return t[s];if(s in Do)return Do[s](n)}}))}function qa(n,t=!0){return ue(n)?n.displayName||n.name:n.name||t&&n.__name}function df(n){return ue(n)&&"__vccOpts"in n}const D=(n,t)=>hh(n,t,Js);function hf(){return ff().slots}function ff(){const n=dt();return n.setupContext||(n.setupContext=kp(n))}function gn(n,t,s){const o=arguments.length;return o===2?Pe(t)&&!re(t)?ss(t)?z(n,null,[t]):z(n,t):z(n,null,t):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&ss(s)&&(s=[s]),z(n,t,s))}const mf="3.2.39",gf="http://www.w3.org/2000/svg",xt=typeof document<"u"?document:null,Jl=xt&&xt.createElement("template"),yf={insert:(n,t,s)=>{t.insertBefore(n,s||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,s,o)=>{const a=t?xt.createElementNS(gf,n):xt.createElement(n,s?{is:s}:void 0);return n==="select"&&o&&o.multiple!=null&&a.setAttribute("multiple",o.multiple),a},createText:n=>xt.createTextNode(n),createComment:n=>xt.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>xt.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},cloneNode(n){const t=n.cloneNode(!0);return"_value"in n&&(t._value=n._value),t},insertStaticContent(n,t,s,o,a,r){const l=s?s.previousSibling:t.lastChild;if(a&&(a===r||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),s),!(a===r||!(a=a.nextSibling)););else{Jl.innerHTML=o?`<svg>${n}</svg>`:n;const i=Jl.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,s)}return[l?l.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function vf(n,t,s){const o=n._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?n.removeAttribute("class"):s?n.setAttribute("class",t):n.className=t}function _f(n,t,s){const o=n.style,a=He(s);if(s&&!a){for(const r in s)Wa(o,r,s[r]);if(t&&!He(t))for(const r in t)s[r]==null&&Wa(o,r,"")}else{const r=o.display;a?t!==s&&(o.cssText=s):t&&n.removeAttribute("style"),"_vod"in n&&(o.display=r)}}const Kl=/\s*!important$/;function Wa(n,t,s){if(re(s))s.forEach(o=>Wa(n,t,o));else if(s==null&&(s=""),t.startsWith("--"))n.setProperty(t,s);else{const o=wf(n,t);Kl.test(s)?n.setProperty(Pt(o),s.replace(Kl,""),"important"):n[o]=s}}const ql=["Webkit","Moz","ms"],ua={};function wf(n,t){const s=ua[t];if(s)return s;let o=qn(t);if(o!=="filter"&&o in n)return ua[t]=o;o=Ko(o);for(let a=0;a<ql.length;a++){const r=ql[a]+o;if(r in n)return ua[t]=r}return t}const Wl="http://www.w3.org/1999/xlink";function bf(n,t,s,o,a){if(o&&t.startsWith("xlink:"))s==null?n.removeAttributeNS(Wl,t.slice(6,t.length)):n.setAttributeNS(Wl,t,s);else{const r=_d(t);s==null||r&&!Sc(s)?n.removeAttribute(t):n.setAttribute(t,r?"":s)}}function xf(n,t,s,o,a,r,l){if(t==="innerHTML"||t==="textContent"){o&&l(o,a,r),n[t]=s==null?"":s;return}if(t==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=s;const c=s==null?"":s;(n.value!==c||n.tagName==="OPTION")&&(n.value=c),s==null&&n.removeAttribute(t);return}let i=!1;if(s===""||s==null){const c=typeof n[t];c==="boolean"?s=Sc(s):s==null&&c==="string"?(s="",i=!0):c==="number"&&(s=0,i=!0)}try{n[t]=s}catch{}i&&n.removeAttribute(t)}const[Dp,Af]=(()=>{let n=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const s=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(s&&Number(s[1])<=53)}return[n,t]})();let Ua=0;const Cf=Promise.resolve(),Bf=()=>{Ua=0},kf=()=>Ua||(Cf.then(Bf),Ua=Dp());function Kt(n,t,s,o){n.addEventListener(t,s,o)}function Df(n,t,s,o){n.removeEventListener(t,s,o)}function Ef(n,t,s,o,a=null){const r=n._vei||(n._vei={}),l=r[t];if(o&&l)l.value=o;else{const[i,c]=Sf(t);if(o){const p=r[t]=Tf(o,a);Kt(n,i,p,c)}else l&&(Df(n,i,l,c),r[t]=void 0)}}const Ul=/(?:Once|Passive|Capture)$/;function Sf(n){let t;if(Ul.test(n)){t={};let o;for(;o=n.match(Ul);)n=n.slice(0,n.length-o[0].length),t[o[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Pt(n.slice(2)),t]}function Tf(n,t){const s=o=>{const a=o.timeStamp||Dp();(Af||a>=s.attached-1)&&$n(If(o,s.value),t,5,[o])};return s.value=n,s.attached=kf(),s}function If(n,t){if(re(t)){const s=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0},t.map(o=>a=>!a._stopped&&o&&o(a))}else return t}const zl=/^on[a-z]/,$f=(n,t,s,o,a=!1,r,l,i,c)=>{t==="class"?vf(n,o,a):t==="style"?_f(n,s,o):Ho(t)?xr(t)||Ef(n,t,s,o,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ff(n,t,o,a))?xf(n,t,o,r,l,i,c):(t==="true-value"?n._trueValue=o:t==="false-value"&&(n._falseValue=o),bf(n,t,o,a))};function Ff(n,t,s,o){return o?!!(t==="innerHTML"||t==="textContent"||t in n&&zl.test(t)&&ue(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||zl.test(t)&&He(s)?!1:t in n}const Yl=n=>{const t=n.props["onUpdate:modelValue"]||!1;return re(t)?s=>Gt(t,s):t};function Of(n){n.target.composing=!0}function Vl(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const jf={created(n,{modifiers:{lazy:t,trim:s,number:o}},a){n._assign=Yl(a);const r=o||a.props&&a.props.type==="number";Kt(n,t?"change":"input",l=>{if(l.target.composing)return;let i=n.value;s&&(i=i.trim()),r&&(i=$a(i)),n._assign(i)}),s&&Kt(n,"change",()=>{n.value=n.value.trim()}),t||(Kt(n,"compositionstart",Of),Kt(n,"compositionend",Vl),Kt(n,"change",Vl))},mounted(n,{value:t}){n.value=t==null?"":t},beforeUpdate(n,{value:t,modifiers:{lazy:s,trim:o,number:a}},r){if(n._assign=Yl(r),n.composing||document.activeElement===n&&n.type!=="range"&&(s||o&&n.value.trim()===t||(a||n.type==="number")&&$a(n.value)===t))return;const l=t==null?"":t;n.value!==l&&(n.value=l)}},Pf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Gl=(n,t)=>s=>{if(!("key"in s))return;const o=Pt(s.key);if(t.some(a=>a===o||Pf[a]===o))return n(s)},Ep={beforeMount(n,{value:t},{transition:s}){n._vod=n.style.display==="none"?"":n.style.display,s&&t?s.beforeEnter(n):gs(n,t)},mounted(n,{value:t},{transition:s}){s&&t&&s.enter(n)},updated(n,{value:t,oldValue:s},{transition:o}){!t!=!s&&(o?t?(o.beforeEnter(n),gs(n,!0),o.enter(n)):o.leave(n,()=>{gs(n,!1)}):gs(n,t))},beforeUnmount(n,{value:t}){gs(n,t)}};function gs(n,t){n.style.display=t?n._vod:"none"}const Nf=an({patchProp:$f},yf);let Zl;function Mf(){return Zl||(Zl=Gh(Nf))}const Lf=(...n)=>{const t=Mf().createApp(...n),{mount:s}=t;return t.mount=o=>{const a=Hf(o);if(!a)return;const r=t._component;!ue(r)&&!r.render&&!r.template&&(r.template=a.innerHTML),a.innerHTML="";const l=s(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),l},t};function Hf(n){return He(n)?document.querySelector(n):n}var Sp="usehead",Xl="head:count",da="data-head-attrs",Tp="data-meta-body",Rf=(n,t,s)=>{const o=s.createElement(n);for(const a of Object.keys(t))if(a==="body"&&t.body===!0)o.setAttribute(Tp,"true");else{let r=t[a];if(a==="renderPriority"||a==="key"||r===!1)continue;a==="children"?o.textContent=r:o.setAttribute(a,r)}return o};function Ql(n,t){if(n instanceof HTMLElement&&t instanceof HTMLElement){const s=t.getAttribute("nonce");if(s&&!n.getAttribute("nonce")){const o=t.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=s,s===n.nonce&&n.isEqualNode(o)}}return n.isEqualNode(t)}var Jf=n=>{if(!["meta","base","script","link"].includes(n.tag))return!1;const{props:t,tag:s}=n;if(s==="base")return!0;if(s==="link"&&t.rel==="canonical")return{propValue:"canonical"};if(t.charset)return{propKey:"charset"};const o=["key","id","name","property","http-equiv"];for(const a of o){let r;if(typeof t.getAttribute=="function"&&t.hasAttribute(a)?r=t.getAttribute(a):r=t[a],r!==void 0)return{propValue:a}}return!1},Kf=()=>{const n=$(Sp);if(!n)throw new Error("You may forget to apply app.use(head)");return n},qf=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Wf=(n,t)=>n==null?"":typeof n=="string"?n.replace("%s",t!=null?t:""):n(b(t)),Uf=n=>{const t=[],s=Object.keys(n);for(const o of s)if(n[o]!=null)switch(o){case"title":t.push({tag:o,props:{children:n[o]}});break;case"titleTemplate":break;case"base":t.push({tag:o,props:{key:"default",...n[o]}});break;default:if(qf.includes(o)){const a=n[o];Array.isArray(a)?a.forEach(r=>{t.push({tag:o,props:b(r)})}):a&&t.push({tag:o,props:a})}break}return t},ei=(n,t)=>{const s=n.getAttribute(da);if(s)for(const a of s.split(","))a in t||n.removeAttribute(a);const o=[];for(const a in t){const r=t[a];r!=null&&(r===!1?n.removeAttribute(a):n.setAttribute(a,r),o.push(a))}o.length?n.setAttribute(da,o.join(",")):n.removeAttribute(da)},zf=(n=window.document,t,s)=>{var o,a;const r=n.head,l=n.body;let i=r.querySelector(`meta[name="${Xl}"]`),c=l.querySelectorAll(`[${Tp}]`);const p=i?Number(i.getAttribute("content")):0,u=[],h=[];if(c)for(let m=0;m<c.length;m++)c[m]&&((o=c[m].tagName)==null?void 0:o.toLowerCase())===t&&h.push(c[m]);if(i)for(let m=0,g=i.previousElementSibling;m<p;m++,g=(g==null?void 0:g.previousElementSibling)||null)((a=g==null?void 0:g.tagName)==null?void 0:a.toLowerCase())===t&&u.push(g);else i=n.createElement("meta"),i.setAttribute("name",Xl),i.setAttribute("content","0"),r.append(i);let f=s.map(m=>{var g;return{element:Rf(m.tag,m.props,n),body:(g=m.props.body)!=null?g:!1}});f=f.filter(m=>{for(let g=0;g<u.length;g++){const w=u[g];if(Ql(w,m.element))return u.splice(g,1),!1}for(let g=0;g<h.length;g++){const w=h[g];if(Ql(w,m.element))return h.splice(g,1),!1}return!0}),h.forEach(m=>{var g;return(g=m.parentNode)==null?void 0:g.removeChild(m)}),u.forEach(m=>{var g;return(g=m.parentNode)==null?void 0:g.removeChild(m)}),f.forEach(m=>{m.body===!0?l.insertAdjacentElement("beforeend",m.element):r.insertBefore(m.element,i)}),i.setAttribute("content",""+(p-u.length+f.filter(m=>!m.body).length))},Yf=n=>{let t=[],s=new Set;n&&t.push(On(n));const o={install(a){a.config.globalProperties.$head=o,a.provide(Sp,o)},get headTags(){const a=[],r=t.map(l=>b(l).titleTemplate).reverse().find(l=>l!=null);return t.forEach(l=>{Uf(b(l)).forEach(c=>{const p=Jf(c);if(p){let u=-1;for(let h=0;h<a.length;h++){const f=a[h];if(f.tag===c.tag&&((p===!0||p.propValue&&b(f.props[p.propValue])===b(c.props[p.propValue])||p.propKey&&f.props[p.propKey]&&c.props[p.propKey])&&(u=h),u!==-1))break}u!==-1&&a.splice(u,1)}r&&c.tag==="title"&&(c.props.children=Wf(r,c.props.children)),a.push(c)})}),a},addHeadObjs(a){t.push(a)},removeHeadObjs(a){t=t.filter(r=>r!==a)},updateDOM(a=window.document){let r,l={},i={};const c={};for(const u of o.headTags.sort(Zf)){if(u.tag==="title"){r=u.props.children;continue}if(u.tag==="htmlAttrs"){Object.assign(l,u.props);continue}if(u.tag==="bodyAttrs"){Object.assign(i,u.props);continue}c[u.tag]=c[u.tag]||[],c[u.tag].push(u)}r!==void 0&&(a.title=r),ei(a.documentElement,l),ei(a.body,i);const p=new Set([...Object.keys(c),...s]);for(const u of p)zf(a,u,c[u]||[]);s.clear(),Object.keys(c).forEach(u=>s.add(u))}};return o},Vf=typeof window<"u",Gf=n=>{const t=Kf(),s=q(n);t.addHeadObjs(s),Vf&&(Zs(()=>{t.updateDOM()}),Go(()=>{t.removeHeadObjs(s),t.updateDOM()}))},Zf=(n,t)=>{const s=o=>{if(o.props.renderPriority)return o.props.renderPriority;switch(o.tag){case"base":return-1;case"meta":return o.props.charset?-2:o.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}};return s(n)-s(t)};const Ds=Symbol("v-click-clicks"),At=Symbol("v-click-clicks-elements"),za=Symbol("v-click-clicks-order-map"),Es=Symbol("v-click-clicks-disabled"),Ip=Symbol("slidev-slide-scale"),O=Symbol("slidev-slidev-context"),Xf=Symbol("slidev-route"),Qf=Symbol("slidev-slide-context"),wt="slidev-vclick-target",ha="slidev-vclick-hidden",em="slidev-vclick-fade",fa="slidev-vclick-hidden-explicitly",ys="slidev-vclick-current",uo="slidev-vclick-prior";function Ya(n,t){if(!n)return!1;const s=n.indexOf(t);return s>=0?(n.splice(s,1),!0):!1}function nm(...n){let t,s,o;n.length===1?(t=0,o=1,[s]=n):[t,s,o=1]=n;const a=[];let r=t;for(;r<s;)a.push(r),r+=o||1;return a}function tm(n){return n!=null}function sm(n,t){return Object.fromEntries(Object.entries(n).map(([s,o])=>t(s,o)).filter(tm))}const kt={theme:"apple-basic",title:"More than Words",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Montserrat"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"Bitter"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Montserrat","Bitter"],provider:"google",local:["Helvetica Neue"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",layout:"intro-image",image:"/images/DCE2022_title.png",class:"text-center"},Ae=kt;var Dc;const lt=(Dc=Ae.aspectRatio)!=null?Dc:16/9;var Ec;const It=(Ec=Ae.canvasWidth)!=null?Ec:980,$p=Math.round(It/lt),Fp=D(()=>sm(Ae.themeConfig||{},(n,t)=>[`--slidev-theme-${n}`,t]));function An(n,t,s){Object.defineProperty(n,t,{value:s,writable:!0,enumerable:!1})}const Nt=Oe({page:0,clicks:0});let om=[],am=[];An(Nt,"$syncUp",!0);An(Nt,"$syncDown",!0);An(Nt,"$paused",!1);An(Nt,"$onSet",n=>om.push(n));An(Nt,"$onPatch",n=>am.push(n));An(Nt,"$patch",async()=>!1);function Op(n,t,s=!1){const o=[];let a=!1,r=!1,l,i;const c=Oe(t);function p(m){o.push(m)}function u(m,g){clearTimeout(l),a=!0,c[m]=g,l=setTimeout(()=>a=!1,0)}function h(m){a||(clearTimeout(i),r=!0,Object.entries(m).forEach(([g,w])=>{c[g]=w}),i=setTimeout(()=>r=!1,0))}function f(m){let g;s?s&&window.addEventListener("storage",_=>{_&&_.key===m&&_.newValue&&h(JSON.parse(_.newValue))}):(g=new BroadcastChannel(m),g.addEventListener("message",_=>h(_.data)));function w(){!s&&g&&!r?g.postMessage(Ce(c)):s&&!r&&window.localStorage.setItem(m,JSON.stringify(c)),a||o.forEach(_=>_(c))}if(me(c,w,{deep:!0}),s){const _=window.localStorage.getItem(m);_&&h(JSON.parse(_))}}return{init:f,onPatch:p,patch:u,state:c}}const{init:rm,onPatch:lm,patch:ni,state:ma}=Op(Nt,{page:1,clicks:0}),Mt=Oe({});let im=[],cm=[];An(Mt,"$syncUp",!0);An(Mt,"$syncDown",!0);An(Mt,"$paused",!1);An(Mt,"$onSet",n=>im.push(n));An(Mt,"$onPatch",n=>cm.push(n));An(Mt,"$patch",async()=>!1);const{init:pm,onPatch:um,patch:jp,state:So}=Op(Mt,{},!1),dm="modulepreload",hm=function(n){return"/"+n},ti={},us=function(t,s,o){return!s||s.length===0?t():Promise.all(s.map(a=>{if(a=hm(a),a in ti)return;ti[a]=!0;const r=a.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":dm,r||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),r)return new Promise((c,p)=>{i.addEventListener("load",c),i.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())};var si;const jn=typeof window<"u",fm=n=>typeof n<"u",mm=Object.prototype.toString,To=n=>typeof n=="function",gm=n=>typeof n=="number",Pp=n=>typeof n=="string",Va=n=>mm.call(n)==="[object Object]",Ga=()=>+Date.now(),$t=()=>{};jn&&((si=window==null?void 0:window.navigator)==null?void 0:si.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function sn(n){return typeof n=="function"?n():b(n)}function ym(n,t){function s(...o){n(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})}return s}const Np=n=>n();function vm(n=Np){const t=q(!0);function s(){t.value=!1}function o(){t.value=!0}return{isActive:t,pause:s,resume:o,eventFilter:(...r)=>{t.value&&n(...r)}}}function _m(n){return n}function wm(n,t){var s;if(typeof n=="number")return n+t;const o=((s=n.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",a=n.slice(o.length),r=parseFloat(o)+t;return Number.isNaN(r)?n:r+a}function bm(n,t){let s,o,a;const r=q(!0),l=()=>{r.value=!0,a()};me(n,l,{flush:"sync"});const i=To(t)?t:t.get,c=To(t)?void 0:t.set,p=Zc((u,h)=>(o=u,a=h,{get(){return r.value&&(s=i(),r.value=!1),o(),s},set(f){c==null||c(f)}}));return Object.isExtensible(p)&&(p.trigger=l),p}function Zn(n){return Pc()?(Nc(n),!0):!1}function xm(n){if(!Be(n))return Oe(n);const t=new Proxy({},{get(s,o,a){return b(Reflect.get(n.value,o,a))},set(s,o,a){return Be(n.value[o])&&!Be(a)?n.value[o].value=a:n.value[o]=a,!0},deleteProperty(s,o){return Reflect.deleteProperty(n.value,o)},has(s,o){return Reflect.has(n.value,o)},ownKeys(){return Object.keys(n.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Oe(t)}function Am(n){return typeof n=="function"?D(n):q(n)}var Cm=Object.defineProperty,Bm=Object.defineProperties,km=Object.getOwnPropertyDescriptors,oi=Object.getOwnPropertySymbols,Dm=Object.prototype.hasOwnProperty,Em=Object.prototype.propertyIsEnumerable,ai=(n,t,s)=>t in n?Cm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,Sm=(n,t)=>{for(var s in t||(t={}))Dm.call(t,s)&&ai(n,s,t[s]);if(oi)for(var s of oi(t))Em.call(t,s)&&ai(n,s,t[s]);return n},Tm=(n,t)=>Bm(n,km(t));function Im(n){if(!Be(n))return ch(n);const t=Array.isArray(n.value)?new Array(n.value.length):{};for(const s in n.value)t[s]=Zc(()=>({get(){return n.value[s]},set(o){if(Array.isArray(n.value)){const a=[...n.value];a[s]=o,n.value=a}else{const a=Tm(Sm({},n.value),{[s]:o});Object.setPrototypeOf(a,n.value),n.value=a}}}));return t}function $m(n,t=!0){dt()?dp(n):t?n():Ze(n)}function Mp(n,t=!0){dt()?ps(n):t?n():Ze(n)}function Fm(n){dt()&&Zo(n)}function Om(n,t=1e3,s={}){const{immediate:o=!0,immediateCallback:a=!1}=s;let r=null;const l=q(!1);function i(){r&&(clearInterval(r),r=null)}function c(){l.value=!1,i()}function p(){b(t)<=0||(l.value=!0,a&&n(),i(),r=setInterval(n,sn(t)))}if(o&&jn&&p(),Be(t)){const u=me(t,()=>{l.value&&jn&&p()});Zn(u)}return Zn(c),{isActive:l,pause:c,resume:p}}function jm(n,t,s={}){const{immediate:o=!0}=s,a=q(!1);let r=null;function l(){r&&(clearTimeout(r),r=null)}function i(){a.value=!1,l()}function c(...p){l(),a.value=!0,r=setTimeout(()=>{a.value=!1,r=null,n(...p)},sn(t))}return o&&(a.value=!0,jn&&c()),Zn(i),{isPending:a,start:c,stop:i}}function Lp(n=!1,t={}){const{truthyValue:s=!0,falsyValue:o=!1}=t,a=Be(n),r=q(n);function l(i){if(arguments.length)return r.value=i,r.value;{const c=sn(s);return r.value=r.value===c?sn(o):c,r.value}}return a?l:[r,l]}var ri=Object.getOwnPropertySymbols,Pm=Object.prototype.hasOwnProperty,Nm=Object.prototype.propertyIsEnumerable,Mm=(n,t)=>{var s={};for(var o in n)Pm.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&ri)for(var o of ri(n))t.indexOf(o)<0&&Nm.call(n,o)&&(s[o]=n[o]);return s};function Lm(n,t,s={}){const o=s,{eventFilter:a=Np}=o,r=Mm(o,["eventFilter"]);return me(n,ym(a,t),r)}var Hm=Object.defineProperty,Rm=Object.defineProperties,Jm=Object.getOwnPropertyDescriptors,Io=Object.getOwnPropertySymbols,Hp=Object.prototype.hasOwnProperty,Rp=Object.prototype.propertyIsEnumerable,li=(n,t,s)=>t in n?Hm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,Km=(n,t)=>{for(var s in t||(t={}))Hp.call(t,s)&&li(n,s,t[s]);if(Io)for(var s of Io(t))Rp.call(t,s)&&li(n,s,t[s]);return n},qm=(n,t)=>Rm(n,Jm(t)),Wm=(n,t)=>{var s={};for(var o in n)Hp.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&Io)for(var o of Io(n))t.indexOf(o)<0&&Rp.call(n,o)&&(s[o]=n[o]);return s};function Um(n,t,s={}){const o=s,{eventFilter:a}=o,r=Wm(o,["eventFilter"]),{eventFilter:l,pause:i,resume:c,isActive:p}=vm(a);return{stop:Lm(n,t,qm(Km({},r),{eventFilter:l})),pause:i,resume:c,isActive:p}}function Tn(n){var t;const s=sn(n);return(t=s==null?void 0:s.$el)!=null?t:s}const en=jn?window:void 0,zm=jn?window.document:void 0,Ym=jn?window.navigator:void 0;function de(...n){let t,s,o,a;if(Pp(n[0])?([s,o,a]=n,t=en):[t,s,o,a]=n,!t)return $t;let r=$t;const l=me(()=>Tn(t),c=>{r(),c&&(c.addEventListener(s,o,a),r=()=>{c.removeEventListener(s,o,a),r=$t})},{immediate:!0,flush:"post"}),i=()=>{l(),r()};return Zn(i),i}function Vm(n,t,s={}){const{window:o=en,ignore:a,capture:r=!0,detectIframe:l=!1}=s;if(!o)return;const i=q(!0);let c;const p=f=>{o.clearTimeout(c);const m=Tn(n),g=f.composedPath();!m||m===f.target||g.includes(m)||!i.value||a&&a.length>0&&a.some(w=>{const _=Tn(w);return _&&(f.target===_||g.includes(_))})||t(f)},u=[de(o,"click",p,{passive:!0,capture:r}),de(o,"pointerdown",f=>{const m=Tn(n);i.value=!!m&&!f.composedPath().includes(m)},{passive:!0}),de(o,"pointerup",f=>{if(f.button===0){const m=f.composedPath();f.composedPath=()=>m,c=o.setTimeout(()=>p(f),50)}},{passive:!0}),l&&de(o,"blur",f=>{var m;const g=Tn(n);((m=document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(g!=null&&g.contains(document.activeElement))&&t(f)})].filter(Boolean);return()=>u.forEach(f=>f())}const Gm=n=>typeof n=="function"?n:typeof n=="string"?t=>t.key===n:Array.isArray(n)?t=>n.includes(t.key):n?()=>!0:()=>!1;function Zm(n,t,s={}){const{target:o=en,eventName:a="keydown",passive:r=!1}=s,l=Gm(n);return de(o,a,c=>{l(c)&&t(c)},r)}function Xm(n={}){const{window:t=en}=n,s=bm(()=>null,()=>t==null?void 0:t.document.activeElement);return t&&(de(t,"blur",s.trigger,!0),de(t,"focus",s.trigger,!0)),s}function Qs(n,t=!1){const s=q(),o=()=>s.value=Boolean(n());return o(),Mp(o,t),s}function qt(n,t={}){const{window:s=en}=t,o=Qs(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let a;const r=q(!1),l=()=>{!o.value||(a||(a=s.matchMedia(n)),r.value=a.matches)};return $m(()=>{l(),a&&("addEventListener"in a?a.addEventListener("change",l):a.addListener(l),Zn(()=>{"removeEventListener"in a?a.removeEventListener("change",l):a.removeListener(l)}))}),r}const Qm={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var eg=Object.defineProperty,ii=Object.getOwnPropertySymbols,ng=Object.prototype.hasOwnProperty,tg=Object.prototype.propertyIsEnumerable,ci=(n,t,s)=>t in n?eg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,sg=(n,t)=>{for(var s in t||(t={}))ng.call(t,s)&&ci(n,s,t[s]);if(ii)for(var s of ii(t))tg.call(t,s)&&ci(n,s,t[s]);return n};function og(n,t={}){function s(i,c){let p=n[i];return c!=null&&(p=wm(p,c)),typeof p=="number"&&(p=`${p}px`),p}const{window:o=en}=t;function a(i){return o?o.matchMedia(i).matches:!1}const r=i=>qt(`(min-width: ${s(i)})`,t),l=Object.keys(n).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>r(c),enumerable:!0,configurable:!0}),i),{});return sg({greater(i){return qt(`(min-width: ${s(i,.1)})`,t)},greaterOrEqual:r,smaller(i){return qt(`(max-width: ${s(i,-.1)})`,t)},smallerOrEqual(i){return qt(`(max-width: ${s(i)})`,t)},between(i,c){return qt(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,t)},isGreater(i){return a(`(min-width: ${s(i,.1)})`)},isGreaterOrEqual(i){return a(`(min-width: ${s(i)})`)},isSmaller(i){return a(`(max-width: ${s(i,-.1)})`)},isSmallerOrEqual(i){return a(`(max-width: ${s(i)})`)},isInBetween(i,c){return a(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)}},l)}function ag(n={}){const{navigator:t=Ym,read:s=!1,source:o,copiedDuring:a=1500}=n,r=["copy","cut"],l=Qs(()=>t&&"clipboard"in t),i=q(""),c=q(!1),p=jm(()=>c.value=!1,a);function u(){t.clipboard.readText().then(f=>{i.value=f})}if(l.value&&s)for(const f of r)de(f,u);async function h(f=sn(o)){l.value&&f!=null&&(await t.clipboard.writeText(f),i.value=f,c.value=!0,p.start())}return{isSupported:l,text:i,copied:c,copy:h}}function rg(n){return JSON.parse(JSON.stringify(n))}const Za=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xa="__vueuse_ssr_handlers__";Za[Xa]=Za[Xa]||{};const lg=Za[Xa];function ig(n,t){return lg[n]||t}function cg(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"||Array.isArray(n)?"object":Number.isNaN(n)?"any":"number"}var pg=Object.defineProperty,pi=Object.getOwnPropertySymbols,ug=Object.prototype.hasOwnProperty,dg=Object.prototype.propertyIsEnumerable,ui=(n,t,s)=>t in n?pg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,di=(n,t)=>{for(var s in t||(t={}))ug.call(t,s)&&ui(n,s,t[s]);if(pi)for(var s of pi(t))dg.call(t,s)&&ui(n,s,t[s]);return n};const hg={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}};function Nn(n,t,s,o={}){var a;const{flush:r="pre",deep:l=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:p=!1,shallow:u,window:h=en,eventFilter:f,onError:m=K=>{console.error(K)}}=o,g=(u?On:q)(t);if(!s)try{s=ig("getDefaultStorage",()=>{var K;return(K=en)==null?void 0:K.localStorage})()}catch(K){m(K)}if(!s)return g;const w=sn(t),_=cg(w),k=(a=o.serializer)!=null?a:hg[_],{pause:B,resume:A}=Um(g,()=>E(g.value),{flush:r,deep:l,eventFilter:f});return h&&i&&de(h,"storage",P),P(),g;function E(K){try{K==null?s.removeItem(n):s.setItem(n,k.write(K))}catch(te){m(te)}}function L(K){if(!(K&&K.key!==n)){B();try{const te=K?K.newValue:s.getItem(n);if(te==null)return c&&w!==null&&s.setItem(n,k.write(w)),w;if(!K&&p){const ie=k.read(te);return To(p)?p(ie,w):_==="object"&&!Array.isArray(ie)?di(di({},w),ie):ie}else return typeof te!="string"?te:k.read(te)}catch(te){m(te)}finally{A()}}}function P(K){K&&K.key!==n||(g.value=L(K))}}function fg(n){return qt("(prefers-color-scheme: dark)",n)}var mg=Object.defineProperty,gg=Object.defineProperties,yg=Object.getOwnPropertyDescriptors,hi=Object.getOwnPropertySymbols,vg=Object.prototype.hasOwnProperty,_g=Object.prototype.propertyIsEnumerable,fi=(n,t,s)=>t in n?mg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,wg=(n,t)=>{for(var s in t||(t={}))vg.call(t,s)&&fi(n,s,t[s]);if(hi)for(var s of hi(t))_g.call(t,s)&&fi(n,s,t[s]);return n},bg=(n,t)=>gg(n,yg(t));function PC(n,t={}){var s,o,a;const r=(s=t.draggingElement)!=null?s:en,l=(o=t.handle)!=null?o:n,i=q((a=sn(t.initialValue))!=null?a:{x:0,y:0}),c=q(),p=g=>t.pointerTypes?t.pointerTypes.includes(g.pointerType):!0,u=g=>{sn(t.preventDefault)&&g.preventDefault(),sn(t.stopPropagation)&&g.stopPropagation()},h=g=>{var w;if(!p(g)||sn(t.exact)&&g.target!==sn(n))return;const _=sn(n).getBoundingClientRect(),k={x:g.pageX-_.left,y:g.pageY-_.top};((w=t.onStart)==null?void 0:w.call(t,k,g))!==!1&&(c.value=k,u(g))},f=g=>{var w;!p(g)||!c.value||(i.value={x:g.pageX-c.value.x,y:g.pageY-c.value.y},(w=t.onMove)==null||w.call(t,i.value,g),u(g))},m=g=>{var w;!p(g)||!c.value||(c.value=void 0,(w=t.onEnd)==null||w.call(t,i.value,g),u(g))};return jn&&(de(l,"pointerdown",h,!0),de(r,"pointermove",f,!0),de(r,"pointerup",m,!0)),bg(wg({},Im(i)),{position:i,isDragging:D(()=>!!c.value),style:D(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var mi=Object.getOwnPropertySymbols,xg=Object.prototype.hasOwnProperty,Ag=Object.prototype.propertyIsEnumerable,Cg=(n,t)=>{var s={};for(var o in n)xg.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&mi)for(var o of mi(n))t.indexOf(o)<0&&Ag.call(n,o)&&(s[o]=n[o]);return s};function Bg(n,t,s={}){const o=s,{window:a=en}=o,r=Cg(o,["window"]);let l;const i=Qs(()=>a&&"ResizeObserver"in a),c=()=>{l&&(l.disconnect(),l=void 0)},p=me(()=>Tn(n),h=>{c(),i.value&&a&&h&&(l=new ResizeObserver(t),l.observe(h,r))},{immediate:!0,flush:"post"}),u=()=>{c(),p()};return Zn(u),{isSupported:i,stop:u}}function kg(n,t={}){const{immediate:s=!0,window:o=en}=t,a=q(!1);let r=null;function l(){!a.value||!o||(n(),r=o.requestAnimationFrame(l))}function i(){!a.value&&o&&(a.value=!0,l())}function c(){a.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&i(),Zn(c),{isActive:a,pause:c,resume:i}}function Dg(n,t={width:0,height:0},s={}){const{box:o="content-box"}=s,a=q(t.width),r=q(t.height);return Bg(n,([l])=>{const i=o==="border-box"?l.borderBoxSize:o==="content-box"?l.contentBoxSize:l.devicePixelContentBoxSize;i?(a.value=i.reduce((c,{inlineSize:p})=>c+p,0),r.value=i.reduce((c,{blockSize:p})=>c+p,0)):(a.value=l.contentRect.width,r.value=l.contentRect.height)},s),me(()=>Tn(n),l=>{a.value=l?t.width:0,r.value=l?t.height:0}),{width:a,height:r}}const gi=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Eg(n,t={}){const{document:s=zm,autoExit:o=!1}=t,a=n||(s==null?void 0:s.querySelector("html")),r=q(!1);let l=gi[0];const i=Qs(()=>{if(s){for(const w of gi)if(w[1]in s)return l=w,!0}else return!1;return!1}),[c,p,u,,h]=l;async function f(){!i.value||(s!=null&&s[u]&&await s[p](),r.value=!1)}async function m(){if(!i.value)return;await f();const w=Tn(a);w&&(await w[c](),r.value=!0)}async function g(){r.value?await f():await m()}return s&&de(s,h,()=>{r.value=!!(s!=null&&s[u])},!1),o&&Zn(f),{isSupported:i,isFullscreen:r,enter:m,exit:f,toggle:g}}function Sg(n,t,s={}){const{root:o,rootMargin:a="0px",threshold:r=.1,window:l=en}=s,i=Qs(()=>l&&"IntersectionObserver"in l);let c=$t;const p=i.value?me(()=>({el:Tn(n),root:Tn(o)}),({el:h,root:f})=>{if(c(),!h)return;const m=new IntersectionObserver(t,{root:f,rootMargin:a,threshold:r});m.observe(h),c=()=>{m.disconnect(),c=$t}},{immediate:!0,flush:"post"}):$t,u=()=>{c(),p()};return Zn(u),{isSupported:i,stop:u}}const Tg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Ig(n={}){const{reactive:t=!1,target:s=en,aliasMap:o=Tg,passive:a=!0,onEventFired:r=$t}=n,l=Oe(new Set),i={toJSON(){return{}},current:l},c=t?Oe(i):i,p=new Set,u=new Set;function h(w,_){w in c&&(t?c[w]=_:c[w].value=_)}function f(){for(const w of u)h(w,!1)}function m(w,_){var k,B;const A=(k=w.key)==null?void 0:k.toLowerCase(),L=[(B=w.code)==null?void 0:B.toLowerCase(),A].filter(Boolean);A&&(_?l.add(A):l.delete(A));for(const P of L)u.add(P),h(P,_);A==="meta"&&!_?(p.forEach(P=>{l.delete(P),h(P,!1)}),p.clear()):typeof w.getModifierState=="function"&&w.getModifierState("Meta")&&_&&[...l,...L].forEach(P=>p.add(P))}de(s,"keydown",w=>(m(w,!0),r(w)),{passive:a}),de(s,"keyup",w=>(m(w,!1),r(w)),{passive:a}),de("blur",f,{passive:!0}),de("focus",f,{passive:!0});const g=new Proxy(c,{get(w,_,k){if(typeof _!="string")return Reflect.get(w,_,k);if(_=_.toLowerCase(),_ in o&&(_=o[_]),!(_ in c))if(/[+_-]/.test(_)){const A=_.split(/[+_-]/g).map(E=>E.trim());c[_]=D(()=>A.every(E=>b(g[E])))}else c[_]=q(!1);const B=Reflect.get(w,_,k);return t?b(B):B}});return g}function NC(n={}){const{type:t="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:a={x:0,y:0},window:r=en,eventFilter:l}=n,i=q(a.x),c=q(a.y),p=q(null),u=w=>{t==="page"?(i.value=w.pageX,c.value=w.pageY):t==="client"&&(i.value=w.clientX,c.value=w.clientY),p.value="mouse"},h=()=>{i.value=a.x,c.value=a.y},f=w=>{if(w.touches.length>0){const _=w.touches[0];t==="page"?(i.value=_.pageX,c.value=_.pageY):t==="client"&&(i.value=_.clientX,c.value=_.clientY),p.value="touch"}},m=w=>l===void 0?u(w):l(()=>u(w),{}),g=w=>l===void 0?f(w):l(()=>f(w),{});return r&&(de(r,"mousemove",m,{passive:!0}),de(r,"dragover",m,{passive:!0}),s&&(de(r,"touchstart",g,{passive:!0}),de(r,"touchmove",g,{passive:!0}),o&&de(r,"touchend",h,{passive:!0}))),{x:i,y:c,sourceType:p}}var Vn;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(Vn||(Vn={}));function $g(n,t={}){const s=Am(n),{threshold:o=50,onSwipe:a,onSwipeEnd:r,onSwipeStart:l}=t,i=Oe({x:0,y:0}),c=(P,K)=>{i.x=P,i.y=K},p=Oe({x:0,y:0}),u=(P,K)=>{p.x=P,p.y=K},h=D(()=>i.x-p.x),f=D(()=>i.y-p.y),{max:m,abs:g}=Math,w=D(()=>m(g(h.value),g(f.value))>=o),_=q(!1),k=q(!1),B=D(()=>w.value?g(h.value)>g(f.value)?h.value>0?Vn.LEFT:Vn.RIGHT:f.value>0?Vn.UP:Vn.DOWN:Vn.NONE),A=P=>t.pointerTypes?t.pointerTypes.includes(P.pointerType):!0,E=[de(n,"pointerdown",P=>{var K,te;if(!A(P))return;k.value=!0,(te=(K=s.value)==null?void 0:K.style)==null||te.setProperty("touch-action","none");const ie=P.target;ie==null||ie.setPointerCapture(P.pointerId);const{clientX:ye,clientY:_e}=P;c(ye,_e),u(ye,_e),l==null||l(P)}),de(n,"pointermove",P=>{if(!A(P)||!k.value)return;const{clientX:K,clientY:te}=P;u(K,te),!_.value&&w.value&&(_.value=!0),_.value&&(a==null||a(P))}),de(n,"pointerup",P=>{var K,te;!A(P)||(_.value&&(r==null||r(P,B.value)),k.value=!1,_.value=!1,(te=(K=s.value)==null?void 0:K.style)==null||te.setProperty("touch-action","initial"))})],L=()=>E.forEach(P=>P());return{isSwiping:Ut(_),direction:Ut(B),posStart:Ut(i),posEnd:Ut(p),distanceX:h,distanceY:f,stop:L}}var Fg=Object.defineProperty,yi=Object.getOwnPropertySymbols,Og=Object.prototype.hasOwnProperty,jg=Object.prototype.propertyIsEnumerable,vi=(n,t,s)=>t in n?Fg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,Pg=(n,t)=>{for(var s in t||(t={}))Og.call(t,s)&&vi(n,s,t[s]);if(yi)for(var s of yi(t))jg.call(t,s)&&vi(n,s,t[s]);return n};function MC(n={}){const{controls:t=!1,offset:s=0,immediate:o=!0,interval:a="requestAnimationFrame"}=n,r=q(Ga()+s),l=()=>r.value=Ga()+s,i=a==="requestAnimationFrame"?kg(l,{immediate:o}):Om(l,a,{immediate:o});return t?Pg({timestamp:r},i):r}var Ng=Object.defineProperty,_i=Object.getOwnPropertySymbols,Mg=Object.prototype.hasOwnProperty,Lg=Object.prototype.propertyIsEnumerable,wi=(n,t,s)=>t in n?Ng(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,Hg=(n,t)=>{for(var s in t||(t={}))Mg.call(t,s)&&wi(n,s,t[s]);if(_i)for(var s of _i(t))Lg.call(t,s)&&wi(n,s,t[s]);return n};const Rg={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Hg({linear:_m},Rg);function Jn(n,t,s,o={}){var a,r,l;const{clone:i=!1,passive:c=!1,eventName:p,deep:u=!1,defaultValue:h}=o,f=dt(),m=s||(f==null?void 0:f.emit)||((a=f==null?void 0:f.$emit)==null?void 0:a.bind(f))||((l=(r=f==null?void 0:f.proxy)==null?void 0:r.$emit)==null?void 0:l.bind(f==null?void 0:f.proxy));let g=p;t||(t="modelValue"),g=p||g||`update:${t.toString()}`;const w=k=>i?To(i)?i(k):rg(k):k,_=()=>fm(n[t])?w(n[t]):h;if(c){const k=_(),B=q(k);return me(()=>n[t],A=>B.value=w(A)),me(B,A=>{(A!==n[t]||u)&&m(g,A)},{deep:u}),B}else return D({get(){return _()},set(k){m(g,k)}})}function LC({window:n=en}={}){if(!n)return q(!1);const t=q(n.document.hasFocus());return de(n,"blur",()=>{t.value=!1}),de(n,"focus",()=>{t.value=!0}),t}function Jg(n={}){const{window:t=en,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:a=!0,includeScrollbar:r=!0}=n,l=q(s),i=q(o),c=()=>{t&&(r?(l.value=t.innerWidth,i.value=t.innerHeight):(l.value=t.document.documentElement.clientWidth,i.value=t.document.documentElement.clientHeight))};return c(),Mp(c),de("resize",c,{passive:!0}),a&&de("orientationchange",c,{passive:!0}),{width:l,height:i}}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Wt=typeof window<"u";function Kg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const ke=Object.assign;function ga(n,t){const s={};for(const o in t){const a=t[o];s[o]=Pn(a)?a.map(n):n(a)}return s}const Ss=()=>{},Pn=Array.isArray,qg=/\/$/,Wg=n=>n.replace(qg,"");function ya(n,t,s="/"){let o,a={},r="",l="";const i=t.indexOf("#");let c=t.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(o=t.slice(0,c),r=t.slice(c+1,i>-1?i:t.length),a=n(r)),i>-1&&(o=o||t.slice(0,i),l=t.slice(i,t.length)),o=Vg(o!=null?o:t,s),{fullPath:o+(r&&"?")+r+l,path:o,query:a,hash:l}}function Ug(n,t){const s=t.query?n(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function bi(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function zg(n,t,s){const o=t.matched.length-1,a=s.matched.length-1;return o>-1&&o===a&&as(t.matched[o],s.matched[a])&&Jp(t.params,s.params)&&n(t.query)===n(s.query)&&t.hash===s.hash}function as(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Jp(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const s in n)if(!Yg(n[s],t[s]))return!1;return!0}function Yg(n,t){return Pn(n)?xi(n,t):Pn(t)?xi(t,n):n===t}function xi(n,t){return Pn(t)?n.length===t.length&&n.every((s,o)=>s===t[o]):n.length===1&&n[0]===t}function Vg(n,t){if(n.startsWith("/"))return n;if(!n)return t;const s=t.split("/"),o=n.split("/");let a=s.length-1,r,l;for(r=0;r<o.length;r++)if(l=o[r],l!==".")if(l==="..")a>1&&a--;else break;return s.slice(0,a).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var Ks;(function(n){n.pop="pop",n.push="push"})(Ks||(Ks={}));var Ts;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ts||(Ts={}));function Gg(n){if(!n)if(Wt){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Wg(n)}const Zg=/^[^#]+#/;function Xg(n,t){return n.replace(Zg,"#")+t}function Qg(n,t){const s=document.documentElement.getBoundingClientRect(),o=n.getBoundingClientRect();return{behavior:t.behavior,left:o.left-s.left-(t.left||0),top:o.top-s.top-(t.top||0)}}const ea=()=>({left:window.pageXOffset,top:window.pageYOffset});function ey(n){let t;if("el"in n){const s=n.el,o=typeof s=="string"&&s.startsWith("#"),a=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!a)return;t=Qg(a,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ai(n,t){return(history.state?history.state.position-t:-1)+n}const Qa=new Map;function ny(n,t){Qa.set(n,t)}function ty(n){const t=Qa.get(n);return Qa.delete(n),t}let sy=()=>location.protocol+"//"+location.host;function Kp(n,t){const{pathname:s,search:o,hash:a}=t,r=n.indexOf("#");if(r>-1){let i=a.includes(n.slice(r))?n.slice(r).length:1,c=a.slice(i);return c[0]!=="/"&&(c="/"+c),bi(c,"")}return bi(s,n)+o+a}function oy(n,t,s,o){let a=[],r=[],l=null;const i=({state:f})=>{const m=Kp(n,location),g=s.value,w=t.value;let _=0;if(f){if(s.value=m,t.value=f,l&&l===g){l=null;return}_=w?f.position-w.position:0}else o(m);a.forEach(k=>{k(s.value,g,{delta:_,type:Ks.pop,direction:_?_>0?Ts.forward:Ts.back:Ts.unknown})})};function c(){l=s.value}function p(f){a.push(f);const m=()=>{const g=a.indexOf(f);g>-1&&a.splice(g,1)};return r.push(m),m}function u(){const{history:f}=window;!f.state||f.replaceState(ke({},f.state,{scroll:ea()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:p,destroy:h}}function Ci(n,t,s,o=!1,a=!1){return{back:n,current:t,forward:s,replaced:o,position:window.history.length,scroll:a?ea():null}}function ay(n){const{history:t,location:s}=window,o={value:Kp(n,s)},a={value:t.state};a.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,p,u){const h=n.indexOf("#"),f=h>-1?(s.host&&document.querySelector("base")?n:n.slice(h))+c:sy()+n+c;try{t[u?"replaceState":"pushState"](p,"",f),a.value=p}catch(m){console.error(m),s[u?"replace":"assign"](f)}}function l(c,p){const u=ke({},t.state,Ci(a.value.back,c,a.value.forward,!0),p,{position:a.value.position});r(c,u,!0),o.value=c}function i(c,p){const u=ke({},a.value,t.state,{forward:c,scroll:ea()});r(u.current,u,!0);const h=ke({},Ci(o.value,c,null),{position:u.position+1},p);r(c,h,!1),o.value=c}return{location:o,state:a,push:i,replace:l}}function ry(n){n=Gg(n);const t=ay(n),s=oy(n,t.state,t.location,t.replace);function o(r,l=!0){l||s.pauseListeners(),history.go(r)}const a=ke({location:"",base:n,go:o,createHref:Xg.bind(null,n)},t,s);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function ly(n){return typeof n=="string"||n&&typeof n=="object"}function qp(n){return typeof n=="string"||typeof n=="symbol"}const nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wp=Symbol("");var Bi;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Bi||(Bi={}));function rs(n,t){return ke(new Error,{type:n,[Wp]:!0},t)}function Wn(n,t){return n instanceof Error&&Wp in n&&(t==null||!!(n.type&t))}const ki="[^/]+?",iy={sensitive:!1,strict:!1,start:!0,end:!0},cy=/[.+*?^${}()[\]/\\]/g;function py(n,t){const s=ke({},iy,t),o=[];let a=s.start?"^":"";const r=[];for(const p of n){const u=p.length?[]:[90];s.strict&&!p.length&&(a+="/");for(let h=0;h<p.length;h++){const f=p[h];let m=40+(s.sensitive?.25:0);if(f.type===0)h||(a+="/"),a+=f.value.replace(cy,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:w,optional:_,regexp:k}=f;r.push({name:g,repeatable:w,optional:_});const B=k||ki;if(B!==ki){m+=10;try{new RegExp(`(${B})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${B}): `+E.message)}}let A=w?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;h||(A=_&&p.length<2?`(?:/${A})`:"/"+A),_&&(A+="?"),a+=A,m+=20,_&&(m+=-8),w&&(m+=-20),B===".*"&&(m+=-50)}u.push(m)}o.push(u)}if(s.strict&&s.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}s.strict||(a+="/?"),s.end?a+="$":s.strict&&(a+="(?:/|$)");const l=new RegExp(a,s.sensitive?"":"i");function i(p){const u=p.match(l),h={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",g=r[f-1];h[g.name]=m&&g.repeatable?m.split("/"):m}return h}function c(p){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:w,optional:_}=m,k=g in p?p[g]:"";if(Pn(k)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const B=Pn(k)?k.join("/"):k;if(!B)if(_)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=B}}return u||"/"}return{re:l,score:o,keys:r,parse:i,stringify:c}}function uy(n,t){let s=0;for(;s<n.length&&s<t.length;){const o=t[s]-n[s];if(o)return o;s++}return n.length<t.length?n.length===1&&n[0]===40+40?-1:1:n.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function dy(n,t){let s=0;const o=n.score,a=t.score;for(;s<o.length&&s<a.length;){const r=uy(o[s],a[s]);if(r)return r;s++}if(Math.abs(a.length-o.length)===1){if(Di(o))return 1;if(Di(a))return-1}return a.length-o.length}function Di(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const hy={type:0,value:""},fy=/[a-zA-Z0-9_]/;function my(n){if(!n)return[[]];if(n==="/")return[[hy]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(m){throw new Error(`ERR (${s})/"${p}": ${m}`)}let s=0,o=s;const a=[];let r;function l(){r&&a.push(r),r=[]}let i=0,c,p="",u="";function h(){!p||(s===0?r.push({type:0,value:p}):s===1||s===2||s===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:p,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function f(){p+=c}for(;i<n.length;){if(c=n[i++],c==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:c==="/"?(p&&h(),l()):c===":"?(h(),s=1):f();break;case 4:f(),s=o;break;case 1:c==="("?s=2:fy.test(c)?f():(h(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:s=3:u+=c;break;case 3:h(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,u="";break;default:t("Unknown state");break}}return s===2&&t(`Unfinished custom RegExp for param "${p}"`),h(),l(),a}function gy(n,t,s){const o=py(my(n.path),s),a=ke(o,{record:n,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function yy(n,t){const s=[],o=new Map;t=Ti({strict:!1,end:!0,sensitive:!1},t);function a(u){return o.get(u)}function r(u,h,f){const m=!f,g=vy(u);g.aliasOf=f&&f.record;const w=Ti(t,u),_=[g];if("alias"in u){const A=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of A)_.push(ke({},g,{components:f?f.record.components:g.components,path:E,aliasOf:f?f.record:g}))}let k,B;for(const A of _){const{path:E}=A;if(h&&E[0]!=="/"){const L=h.record.path,P=L[L.length-1]==="/"?"":"/";A.path=h.record.path+(E&&P+E)}if(k=gy(A,h,w),f?f.alias.push(k):(B=B||k,B!==k&&B.alias.push(k),m&&u.name&&!Si(k)&&l(u.name)),g.children){const L=g.children;for(let P=0;P<L.length;P++)r(L[P],k,f&&f.children[P])}f=f||k,c(k)}return B?()=>{l(B)}:Ss}function l(u){if(qp(u)){const h=o.get(u);h&&(o.delete(u),s.splice(s.indexOf(h),1),h.children.forEach(l),h.alias.forEach(l))}else{const h=s.indexOf(u);h>-1&&(s.splice(h,1),u.record.name&&o.delete(u.record.name),u.children.forEach(l),u.alias.forEach(l))}}function i(){return s}function c(u){let h=0;for(;h<s.length&&dy(u,s[h])>=0&&(u.record.path!==s[h].record.path||!Up(u,s[h]));)h++;s.splice(h,0,u),u.record.name&&!Si(u)&&o.set(u.record.name,u)}function p(u,h){let f,m={},g,w;if("name"in u&&u.name){if(f=o.get(u.name),!f)throw rs(1,{location:u});w=f.record.name,m=ke(Ei(h.params,f.keys.filter(B=>!B.optional).map(B=>B.name)),u.params&&Ei(u.params,f.keys.map(B=>B.name))),g=f.stringify(m)}else if("path"in u)g=u.path,f=s.find(B=>B.re.test(g)),f&&(m=f.parse(g),w=f.record.name);else{if(f=h.name?o.get(h.name):s.find(B=>B.re.test(h.path)),!f)throw rs(1,{location:u,currentLocation:h});w=f.record.name,m=ke({},h.params,u.params),g=f.stringify(m)}const _=[];let k=f;for(;k;)_.unshift(k.record),k=k.parent;return{name:w,path:g,params:m,matched:_,meta:wy(_)}}return n.forEach(u=>r(u)),{addRoute:r,resolve:p,removeRoute:l,getRoutes:i,getRecordMatcher:a}}function Ei(n,t){const s={};for(const o of t)o in n&&(s[o]=n[o]);return s}function vy(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:_y(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function _y(n){const t={},s=n.props||!1;if("component"in n)t.default=s;else for(const o in n.components)t[o]=typeof s=="boolean"?s:s[o];return t}function Si(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function wy(n){return n.reduce((t,s)=>ke(t,s.meta),{})}function Ti(n,t){const s={};for(const o in n)s[o]=o in t?t[o]:n[o];return s}function Up(n,t){return t.children.some(s=>s===n||Up(n,s))}const zp=/#/g,by=/&/g,xy=/\//g,Ay=/=/g,Cy=/\?/g,Yp=/\+/g,By=/%5B/g,ky=/%5D/g,Vp=/%5E/g,Dy=/%60/g,Gp=/%7B/g,Ey=/%7C/g,Zp=/%7D/g,Sy=/%20/g;function Wr(n){return encodeURI(""+n).replace(Ey,"|").replace(By,"[").replace(ky,"]")}function Ty(n){return Wr(n).replace(Gp,"{").replace(Zp,"}").replace(Vp,"^")}function er(n){return Wr(n).replace(Yp,"%2B").replace(Sy,"+").replace(zp,"%23").replace(by,"%26").replace(Dy,"`").replace(Gp,"{").replace(Zp,"}").replace(Vp,"^")}function Iy(n){return er(n).replace(Ay,"%3D")}function $y(n){return Wr(n).replace(zp,"%23").replace(Cy,"%3F")}function Fy(n){return n==null?"":$y(n).replace(xy,"%2F")}function $o(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Oy(n){const t={};if(n===""||n==="?")return t;const o=(n[0]==="?"?n.slice(1):n).split("&");for(let a=0;a<o.length;++a){const r=o[a].replace(Yp," "),l=r.indexOf("="),i=$o(l<0?r:r.slice(0,l)),c=l<0?null:$o(r.slice(l+1));if(i in t){let p=t[i];Pn(p)||(p=t[i]=[p]),p.push(c)}else t[i]=c}return t}function Ii(n){let t="";for(let s in n){const o=n[s];if(s=Iy(s),o==null){o!==void 0&&(t+=(t.length?"&":"")+s);continue}(Pn(o)?o.map(r=>r&&er(r)):[o&&er(o)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+s,r!=null&&(t+="="+r))})}return t}function jy(n){const t={};for(const s in n){const o=n[s];o!==void 0&&(t[s]=Pn(o)?o.map(a=>a==null?null:""+a):o==null?o:""+o)}return t}const Py=Symbol(""),$i=Symbol(""),Ur=Symbol(""),Xp=Symbol(""),nr=Symbol("");function vs(){let n=[];function t(o){return n.push(o),()=>{const a=n.indexOf(o);a>-1&&n.splice(a,1)}}function s(){n=[]}return{add:t,list:()=>n,reset:s}}function st(n,t,s,o,a){const r=o&&(o.enterCallbacks[a]=o.enterCallbacks[a]||[]);return()=>new Promise((l,i)=>{const c=h=>{h===!1?i(rs(4,{from:s,to:t})):h instanceof Error?i(h):ly(h)?i(rs(2,{from:t,to:h})):(r&&o.enterCallbacks[a]===r&&typeof h=="function"&&r.push(h),l())},p=n.call(o&&o.instances[a],t,s,c);let u=Promise.resolve(p);n.length<3&&(u=u.then(c)),u.catch(h=>i(h))})}function va(n,t,s,o){const a=[];for(const r of n)for(const l in r.components){let i=r.components[l];if(!(t!=="beforeRouteEnter"&&!r.instances[l]))if(Ny(i)){const p=(i.__vccOpts||i)[t];p&&a.push(st(p,s,o,r,l))}else{let c=i();a.push(()=>c.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${r.path}"`));const u=Kg(p)?p.default:p;r.components[l]=u;const f=(u.__vccOpts||u)[t];return f&&st(f,s,o,r,l)()}))}}return a}function Ny(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Fi(n){const t=$(Ur),s=$(Xp),o=D(()=>t.resolve(b(n.to))),a=D(()=>{const{matched:c}=o.value,{length:p}=c,u=c[p-1],h=s.matched;if(!u||!h.length)return-1;const f=h.findIndex(as.bind(null,u));if(f>-1)return f;const m=Oi(c[p-2]);return p>1&&Oi(u)===m&&h[h.length-1].path!==m?h.findIndex(as.bind(null,c[p-2])):f}),r=D(()=>a.value>-1&&Ry(s.params,o.value.params)),l=D(()=>a.value>-1&&a.value===s.matched.length-1&&Jp(s.params,o.value.params));function i(c={}){return Hy(c)?t[b(n.replace)?"replace":"push"](b(n.to)).catch(Ss):Promise.resolve()}return{route:o,href:D(()=>o.value.href),isActive:r,isExactActive:l,navigate:i}}const My=xe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fi,setup(n,{slots:t}){const s=Oe(Fi(n)),{options:o}=$(Ur),a=D(()=>({[ji(n.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[ji(n.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=t.default&&t.default(s);return n.custom?r:gn("a",{"aria-current":s.isExactActive?n.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:a.value},r)}}}),Ly=My;function Hy(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Ry(n,t){for(const s in t){const o=t[s],a=n[s];if(typeof o=="string"){if(o!==a)return!1}else if(!Pn(a)||a.length!==o.length||o.some((r,l)=>r!==a[l]))return!1}return!0}function Oi(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ji=(n,t,s)=>n!=null?n:t!=null?t:s,Jy=xe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:s}){const o=$(nr),a=D(()=>n.route||o.value),r=$($i,0),l=D(()=>{let p=b(r);const{matched:u}=a.value;let h;for(;(h=u[p])&&!h.components;)p++;return p}),i=D(()=>a.value.matched[l.value]);mn($i,D(()=>l.value+1)),mn(Py,i),mn(nr,a);const c=q();return me(()=>[c.value,i.value,n.name],([p,u,h],[f,m,g])=>{u&&(u.instances[h]=p,m&&m!==u&&p&&p===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),p&&u&&(!m||!as(u,m)||!f)&&(u.enterCallbacks[h]||[]).forEach(w=>w(p))},{flush:"post"}),()=>{const p=a.value,u=n.name,h=i.value,f=h&&h.components[u];if(!f)return Pi(s.default,{Component:f,route:p});const m=h.props[u],g=m?m===!0?p.params:typeof m=="function"?m(p):m:null,_=gn(f,ke({},g,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Pi(s.default,{Component:_,route:p})||_}}});function Pi(n,t){if(!n)return null;const s=n(t);return s.length===1?s[0]:s}const Ky=Jy;function qy(n){const t=yy(n.routes,n),s=n.parseQuery||Oy,o=n.stringifyQuery||Ii,a=n.history,r=vs(),l=vs(),i=vs(),c=On(nt);let p=nt;Wt&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ga.bind(null,S=>""+S),h=ga.bind(null,Fy),f=ga.bind(null,$o);function m(S,Y){let R,Z;return qp(S)?(R=t.getRecordMatcher(S),Z=Y):Z=S,t.addRoute(Z,R)}function g(S){const Y=t.getRecordMatcher(S);Y&&t.removeRoute(Y)}function w(){return t.getRoutes().map(S=>S.record)}function _(S){return!!t.getRecordMatcher(S)}function k(S,Y){if(Y=ke({},Y||c.value),typeof S=="string"){const oe=ya(s,S,Y.path),y=t.resolve({path:oe.path},Y),v=a.createHref(oe.fullPath);return ke(oe,y,{params:f(y.params),hash:$o(oe.hash),redirectedFrom:void 0,href:v})}let R;if("path"in S)R=ke({},S,{path:ya(s,S.path,Y.path).path});else{const oe=ke({},S.params);for(const y in oe)oe[y]==null&&delete oe[y];R=ke({},S,{params:h(S.params)}),Y.params=h(Y.params)}const Z=t.resolve(R,Y),be=S.hash||"";Z.params=u(f(Z.params));const ge=Ug(o,ke({},S,{hash:Ty(be),path:Z.path})),ce=a.createHref(ge);return ke({fullPath:ge,hash:be,query:o===Ii?jy(S.query):S.query||{}},Z,{redirectedFrom:void 0,href:ce})}function B(S){return typeof S=="string"?ya(s,S,c.value.path):ke({},S)}function A(S,Y){if(p!==S)return rs(8,{from:Y,to:S})}function E(S){return K(S)}function L(S){return E(ke(B(S),{replace:!0}))}function P(S){const Y=S.matched[S.matched.length-1];if(Y&&Y.redirect){const{redirect:R}=Y;let Z=typeof R=="function"?R(S):R;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=B(Z):{path:Z},Z.params={}),ke({query:S.query,hash:S.hash,params:"path"in Z?{}:S.params},Z)}}function K(S,Y){const R=p=k(S),Z=c.value,be=S.state,ge=S.force,ce=S.replace===!0,oe=P(R);if(oe)return K(ke(B(oe),{state:typeof oe=="object"?ke({},be,oe.state):be,force:ge,replace:ce}),Y||R);const y=R;y.redirectedFrom=Y;let v;return!ge&&zg(o,Z,R)&&(v=rs(16,{to:y,from:Z}),Ee(Z,Z,!0,!1)),(v?Promise.resolve(v):ie(y,Z)).catch(C=>Wn(C)?Wn(C,2)?C:fe(C):V(C,y,Z)).then(C=>{if(C){if(Wn(C,2))return K(ke({replace:ce},B(C.to),{state:typeof C.to=="object"?ke({},be,C.to.state):be,force:ge}),Y||y)}else C=_e(y,Z,!0,ce,be);return ye(y,Z,C),C})}function te(S,Y){const R=A(S,Y);return R?Promise.reject(R):Promise.resolve()}function ie(S,Y){let R;const[Z,be,ge]=Wy(S,Y);R=va(Z.reverse(),"beforeRouteLeave",S,Y);for(const oe of Z)oe.leaveGuards.forEach(y=>{R.push(st(y,S,Y))});const ce=te.bind(null,S,Y);return R.push(ce),Ht(R).then(()=>{R=[];for(const oe of r.list())R.push(st(oe,S,Y));return R.push(ce),Ht(R)}).then(()=>{R=va(be,"beforeRouteUpdate",S,Y);for(const oe of be)oe.updateGuards.forEach(y=>{R.push(st(y,S,Y))});return R.push(ce),Ht(R)}).then(()=>{R=[];for(const oe of S.matched)if(oe.beforeEnter&&!Y.matched.includes(oe))if(Pn(oe.beforeEnter))for(const y of oe.beforeEnter)R.push(st(y,S,Y));else R.push(st(oe.beforeEnter,S,Y));return R.push(ce),Ht(R)}).then(()=>(S.matched.forEach(oe=>oe.enterCallbacks={}),R=va(ge,"beforeRouteEnter",S,Y),R.push(ce),Ht(R))).then(()=>{R=[];for(const oe of l.list())R.push(st(oe,S,Y));return R.push(ce),Ht(R)}).catch(oe=>Wn(oe,8)?oe:Promise.reject(oe))}function ye(S,Y,R){for(const Z of i.list())Z(S,Y,R)}function _e(S,Y,R,Z,be){const ge=A(S,Y);if(ge)return ge;const ce=Y===nt,oe=Wt?history.state:{};R&&(Z||ce?a.replace(S.fullPath,ke({scroll:ce&&oe&&oe.scroll},be)):a.push(S.fullPath,be)),c.value=S,Ee(S,Y,R,ce),fe()}let Re;function Je(){Re||(Re=a.listen((S,Y,R)=>{if(!ft.listening)return;const Z=k(S),be=P(Z);if(be){K(ke(be,{replace:!0}),Z).catch(Ss);return}p=Z;const ge=c.value;Wt&&ny(Ai(ge.fullPath,R.delta),ea()),ie(Z,ge).catch(ce=>Wn(ce,12)?ce:Wn(ce,2)?(K(ce.to,Z).then(oe=>{Wn(oe,20)&&!R.delta&&R.type===Ks.pop&&a.go(-1,!1)}).catch(Ss),Promise.reject()):(R.delta&&a.go(-R.delta,!1),V(ce,Z,ge))).then(ce=>{ce=ce||_e(Z,ge,!1),ce&&(R.delta&&!Wn(ce,8)?a.go(-R.delta,!1):R.type===Ks.pop&&Wn(ce,20)&&a.go(-1,!1)),ye(Z,ge,ce)}).catch(Ss)}))}let Me=vs(),$e=vs(),je;function V(S,Y,R){fe(S);const Z=$e.list();return Z.length?Z.forEach(be=>be(S,Y,R)):console.error(S),Promise.reject(S)}function ae(){return je&&c.value!==nt?Promise.resolve():new Promise((S,Y)=>{Me.add([S,Y])})}function fe(S){return je||(je=!S,Je(),Me.list().forEach(([Y,R])=>S?R(S):Y()),Me.reset()),S}function Ee(S,Y,R,Z){const{scrollBehavior:be}=n;if(!Wt||!be)return Promise.resolve();const ge=!R&&ty(Ai(S.fullPath,0))||(Z||!R)&&history.state&&history.state.scroll||null;return Ze().then(()=>be(S,Y,ge)).then(ce=>ce&&ey(ce)).catch(ce=>V(ce,S,Y))}const cn=S=>a.go(S);let Ve;const rn=new Set,ft={currentRoute:c,listening:!0,addRoute:m,removeRoute:g,hasRoute:_,getRoutes:w,resolve:k,options:n,push:E,replace:L,go:cn,back:()=>cn(-1),forward:()=>cn(1),beforeEach:r.add,beforeResolve:l.add,afterEach:i.add,onError:$e.add,isReady:ae,install(S){const Y=this;S.component("RouterLink",Ly),S.component("RouterView",Ky),S.config.globalProperties.$router=Y,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>b(c)}),Wt&&!Ve&&c.value===nt&&(Ve=!0,E(a.location).catch(be=>{}));const R={};for(const be in nt)R[be]=D(()=>c.value[be]);S.provide(Ur,Y),S.provide(Xp,Oe(R)),S.provide(nr,c);const Z=S.unmount;rn.add(S),S.unmount=function(){rn.delete(S),rn.size<1&&(p=nt,Re&&Re(),Re=null,c.value=nt,Ve=!1,je=!1),Z()}}};return ft}function Ht(n){return n.reduce((t,s)=>t.then(()=>s()),Promise.resolve())}function Wy(n,t){const s=[],o=[],a=[],r=Math.max(t.matched.length,n.matched.length);for(let l=0;l<r;l++){const i=t.matched[l];i&&(n.matched.find(p=>as(p,i))?o.push(i):s.push(i));const c=n.matched[l];c&&(t.matched.find(p=>as(p,c))||a.push(c))}return[s,o,a]}const _a=q(!1),Is=q(!1),zt=q(!1),Uy=q(!0),tr=og({xs:460,...Qm}),Ft=Jg(),Qp=Ig(),zy=D(()=>Ft.height.value-Ft.width.value/lt>180),eu=Eg(jn?document.body:null),es=Xm(),Yy=D(()=>{var n,t;return["INPUT","TEXTAREA"].includes(((n=es.value)==null?void 0:n.tagName)||"")||((t=es.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Vy=D(()=>{var n;return["BUTTON","A"].includes(((n=es.value)==null?void 0:n.tagName)||"")});Nn("slidev-camera","default");Nn("slidev-mic","default");const vo=Nn("slidev-scale",0),tn=Nn("slidev-show-overview",!1),wa=Nn("slidev-presenter-cursor",!0),Ni=Nn("slidev-show-editor",!1);Nn("slidev-editor-width",jn?window.innerWidth*.4:100);const nu=Lp(tn);function Mi(n,t,s,o=a=>a){return n*o(.5-t*(.5-s))}function Gy(n){return[-n[0],-n[1]]}function Dn(n,t){return[n[0]+t[0],n[1]+t[1]]}function xn(n,t){return[n[0]-t[0],n[1]-t[1]]}function kn(n,t){return[n[0]*t,n[1]*t]}function Zy(n,t){return[n[0]/t,n[1]/t]}function _s(n){return[n[1],-n[0]]}function Li(n,t){return n[0]*t[0]+n[1]*t[1]}function Xy(n,t){return n[0]===t[0]&&n[1]===t[1]}function Qy(n){return Math.hypot(n[0],n[1])}function e0(n){return n[0]*n[0]+n[1]*n[1]}function Hi(n,t){return e0(xn(n,t))}function tu(n){return Zy(n,Qy(n))}function n0(n,t){return Math.hypot(n[1]-t[1],n[0]-t[0])}function ws(n,t,s){let o=Math.sin(s),a=Math.cos(s),r=n[0]-t[0],l=n[1]-t[1],i=r*a-l*o,c=r*o+l*a;return[i+t[0],c+t[1]]}function sr(n,t,s){return Dn(n,kn(xn(t,n),s))}function Ri(n,t,s){return Dn(n,kn(t,s))}var{min:Rt,PI:t0}=Math,Ji=.275,bs=t0+1e-4;function s0(n,t={}){let{size:s=16,smoothing:o=.5,thinning:a=.5,simulatePressure:r=!0,easing:l=V=>V,start:i={},end:c={},last:p=!1}=t,{cap:u=!0,easing:h=V=>V*(2-V)}=i,{cap:f=!0,easing:m=V=>--V*V*V+1}=c;if(n.length===0||s<=0)return[];let g=n[n.length-1].runningLength,w=i.taper===!1?0:i.taper===!0?Math.max(s,g):i.taper,_=c.taper===!1?0:c.taper===!0?Math.max(s,g):c.taper,k=Math.pow(s*o,2),B=[],A=[],E=n.slice(0,10).reduce((V,ae)=>{let fe=ae.pressure;if(r){let Ee=Rt(1,ae.distance/s),cn=Rt(1,1-Ee);fe=Rt(1,V+(cn-V)*(Ee*Ji))}return(V+fe)/2},n[0].pressure),L=Mi(s,a,n[n.length-1].pressure,l),P,K=n[0].vector,te=n[0].point,ie=te,ye=te,_e=ie,Re=!1;for(let V=0;V<n.length;V++){let{pressure:ae}=n[V],{point:fe,vector:Ee,distance:cn,runningLength:Ve}=n[V];if(V<n.length-1&&g-Ve<3)continue;if(a){if(r){let ge=Rt(1,cn/s),ce=Rt(1,1-ge);ae=Rt(1,E+(ce-E)*(ge*Ji))}L=Mi(s,a,ae,l)}else L=s/2;P===void 0&&(P=L);let rn=Ve<w?h(Ve/w):1,ft=g-Ve<_?m((g-Ve)/_):1;L=Math.max(.01,L*Math.min(rn,ft));let S=(V<n.length-1?n[V+1]:n[V]).vector,Y=V<n.length-1?Li(Ee,S):1,R=Li(Ee,K)<0&&!Re,Z=Y!==null&&Y<0;if(R||Z){let ge=kn(_s(K),L);for(let ce=1/13,oe=0;oe<=1;oe+=ce)ye=ws(xn(fe,ge),fe,bs*oe),B.push(ye),_e=ws(Dn(fe,ge),fe,bs*-oe),A.push(_e);te=ye,ie=_e,Z&&(Re=!0);continue}if(Re=!1,V===n.length-1){let ge=kn(_s(Ee),L);B.push(xn(fe,ge)),A.push(Dn(fe,ge));continue}let be=kn(_s(sr(S,Ee,Y)),L);ye=xn(fe,be),(V<=1||Hi(te,ye)>k)&&(B.push(ye),te=ye),_e=Dn(fe,be),(V<=1||Hi(ie,_e)>k)&&(A.push(_e),ie=_e),E=ae,K=Ee}let Je=n[0].point.slice(0,2),Me=n.length>1?n[n.length-1].point.slice(0,2):Dn(n[0].point,[1,1]),$e=[],je=[];if(n.length===1){if(!(w||_)||p){let V=Ri(Je,tu(_s(xn(Je,Me))),-(P||L)),ae=[];for(let fe=1/13,Ee=fe;Ee<=1;Ee+=fe)ae.push(ws(V,Je,bs*2*Ee));return ae}}else{if(!(w||_&&n.length===1))if(u)for(let ae=1/13,fe=ae;fe<=1;fe+=ae){let Ee=ws(A[0],Je,bs*fe);$e.push(Ee)}else{let ae=xn(B[0],A[0]),fe=kn(ae,.5),Ee=kn(ae,.51);$e.push(xn(Je,fe),xn(Je,Ee),Dn(Je,Ee),Dn(Je,fe))}let V=_s(Gy(n[n.length-1].vector));if(_||w&&n.length===1)je.push(Me);else if(f){let ae=Ri(Me,V,L);for(let fe=1/29,Ee=fe;Ee<1;Ee+=fe)je.push(ws(ae,Me,bs*3*Ee))}else je.push(Dn(Me,kn(V,L)),Dn(Me,kn(V,L*.99)),xn(Me,kn(V,L*.99)),xn(Me,kn(V,L)))}return B.concat(je,A.reverse(),$e)}function o0(n,t={}){var s;let{streamline:o=.5,size:a=16,last:r=!1}=t;if(n.length===0)return[];let l=.15+(1-o)*.85,i=Array.isArray(n[0])?n:n.map(({x:m,y:g,pressure:w=.5})=>[m,g,w]);if(i.length===2){let m=i[1];i=i.slice(0,-1);for(let g=1;g<5;g++)i.push(sr(i[0],m,g/4))}i.length===1&&(i=[...i,[...Dn(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,u=0,h=c[0],f=i.length-1;for(let m=1;m<i.length;m++){let g=r&&m===f?i[m].slice(0,2):sr(h.point,i[m],l);if(Xy(h.point,g))continue;let w=n0(g,h.point);if(u+=w,m<f&&!p){if(u<a)continue;p=!0}h={point:g,pressure:i[m][2]>=0?i[m][2]:.5,vector:tu(xn(h.point,g)),distance:w,runningLength:u},c.push(h)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function a0(n,t={}){return s0(o0(n,t),t)}var r0=()=>({events:{},emit(n,...t){let s=this.events[n]||[];for(let o=0,a=s.length;o<a;o++)s[o](...t)},on(n,t){var s;return(s=this.events[n])!=null&&s.push(t)||(this.events[n]=[t]),()=>{var o;this.events[n]=(o=this.events[n])==null?void 0:o.filter(a=>t!==a)}}});function Fo(n,t){return n-t}function l0(n){return n<0?-1:1}function Oo(n){return[Math.abs(n),l0(n)]}function su(){const n=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${n()+n()}-${n()}-${n()}-${n()}-${n()}${n()}${n()}`}var i0=2,Yn=i0,ds=class{constructor(n){this.drauu=n,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(n){}onUnselected(){}onStart(n){}onMove(n){return!1}onEnd(n){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(n){var a;var t;const s=this.drauu.el,o=(a=this.drauu.options.coordinateScale)!=null?a:1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(n.pageX-r.left)*o,y:(n.pageY-r.top)*o,pressure:n.pressure}}else{const r=this.drauu.svgPoint;r.x=n.clientX,r.y=n.clientY;const l=r.matrixTransform((t=s.getScreenCTM())==null?void 0:t.inverse());return{x:l.x*o,y:l.y*o,pressure:n.pressure}}}createElement(n,t){var a;const s=document.createElementNS("http://www.w3.org/2000/svg",n),o=t?{...this.brush,...t}:this.brush;return s.setAttribute("fill",(a=o.fill)!=null?a:"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(n,t){this.el.setAttribute(n,typeof t=="string"?t:t.toFixed(Yn))}_setEvent(n){this.event=n,this.point=this.getMousePosition(n)}_eventDown(n){return this._setEvent(n),this.start=this.point,this.onStart(this.point)}_eventMove(n){return this._setEvent(n),this.onMove(this.point)}_eventUp(n){return this._setEvent(n),this.onEnd(this.point)}},c0=class extends ds{constructor(){super(...arguments),this.points=[]}onStart(n){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[n],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&this.points.push(n),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!!n}getSvgData(n){const t=a0(n,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const s=t.reduce((o,[a,r],l,i)=>{const[c,p]=i[(l+1)%i.length];return o.push(a,r,(a+c)/2,(r+p)/2),o},["M",...t[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},p0=class extends ds{onStart(n){return this.el=this.createElement("ellipse"),this.attr("cx",n.x),this.attr("cy",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[t,s]=Oo(n.x-this.start.x),[o,a]=Oo(n.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[r,l]=[this.start.x,this.start.x+t*s].sort(Fo),[i,c]=[this.start.y,this.start.y+o*a].sort(Fo);this.attr("cx",(r+l)/2),this.attr("cy",(i+c)/2),this.attr("rx",(l-r)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function ou(n,t){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("fill",t),o.setAttribute("id",n),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),a.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(a),s.appendChild(o),s}var u0=class extends ds{onStart(n){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",n.x),this.attr("y1",n.y),this.attr("x2",n.x),this.attr("y2",n.y),this.brush.arrowEnd){const t=su(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(ou(t,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${t})`),s}return this.el}onMove(n){if(!this.el)return!1;let{x:t,y:s}=n;if(this.shiftPressed){const o=n.x-this.start.x,a=n.y-this.start.y;if(a!==0){let r=o/a;r=Math.round(r),Math.abs(r)<=1?(t=this.start.x+a*r,s=this.start.y+a):(t=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-s),this.attr("x2",t),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",s)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||n.getTotalLength()<5)}},d0=class extends ds{onStart(n){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",n.x),this.attr("y",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[t,s]=Oo(n.x-this.start.x),[o,a]=Oo(n.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[r,l]=[this.start.x,this.start.x+t*s].sort(Fo),[i,c]=[this.start.y,this.start.y+o*a].sort(Fo);this.attr("x",r),this.attr("y",i),this.attr("width",l-r),this.attr("height",c-i)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function h0(n,t){const s=n.x-t.x,o=n.y-t.y;return s*s+o*o}function f0(n,t,s){let o=t.x,a=t.y,r=s.x-o,l=s.y-a;if(r!==0||l!==0){const i=((n.x-o)*r+(n.y-a)*l)/(r*r+l*l);i>1?(o=s.x,a=s.y):i>0&&(o+=r*i,a+=l*i)}return r=n.x-o,l=n.y-a,r*r+l*l}function m0(n,t){let s=n[0];const o=[s];let a;for(let r=1,l=n.length;r<l;r++)a=n[r],h0(a,s)>t&&(o.push(a),s=a);return s!==a&&a&&o.push(a),o}function or(n,t,s,o,a){let r=o,l=0;for(let i=t+1;i<s;i++){const c=f0(n[i],n[t],n[s]);c>r&&(l=i,r=c)}r>o&&(l-t>1&&or(n,t,l,o,a),a.push(n[l]),s-l>1&&or(n,l,s,o,a))}function g0(n,t){const s=n.length-1,o=[n[0]];return or(n,0,s,t,o),o.push(n[s]),o}function Ki(n,t,s=!1){if(n.length<=2)return n;const o=t!==void 0?t*t:1;return n=s?n:m0(n,o),n=g0(n,o),n}var y0=class extends ds{constructor(){super(...arguments),this.points=[],this.count=0}onStart(n){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[n],this.brush.arrowEnd){this.arrowId=su();const t=ou(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&(this.points.push(n),this.count+=1),this.count>5&&(this.points=Ki(this.points,1,!0),this.count=0),this.attr("d",Wi(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||(n.setAttribute("d",Wi(Ki(this.points,1,!0))),!n.getTotalLength()))}};function v0(n,t){const s=t.x-n.x,o=t.y-n.y;return{length:Math.sqrt(Math.pow(s,2)+Math.pow(o,2)),angle:Math.atan2(o,s)}}function qi(n,t,s,o){const a=t||n,r=s||n,l=.2,i=v0(a,r),c=i.angle+(o?Math.PI:0),p=i.length*l,u=n.x+Math.cos(c)*p,h=n.y+Math.sin(c)*p;return{x:u,y:h}}function _0(n,t,s){const o=qi(s[t-1],s[t-2],n),a=qi(n,s[t-1],s[t+1],!0);return`C ${o.x.toFixed(Yn)},${o.y.toFixed(Yn)} ${a.x.toFixed(Yn)},${a.y.toFixed(Yn)} ${n.x.toFixed(Yn)},${n.y.toFixed(Yn)}`}function Wi(n){return n.reduce((t,s,o,a)=>o===0?`M ${s.x.toFixed(Yn)},${s.y.toFixed(Yn)}`:`${t} ${_0(s,o,a)}`,"")}var w0=class extends ds{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(n){const t=(s,o)=>{if(s&&s.length)for(let a=0;a<s.length;a++){const r=s[a];if(r.getTotalLength){const l=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=r.getPointAtLength(l*i/this.pathSubFactor),p=r.getPointAtLength(l*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:p.x,y1:c.y,y2:p.y,segment:i,element:o||r})}}else r.children&&t(r.children,r)}};n&&t(n.children)}onUnselected(){this.pathFragments=[]}onStart(n){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=n.x,this.svgPointPrevious.y=n.y}onMove(n){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=n.x,this.svgPointCurrent.y=n.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const n=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const s=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),n.push(t))}return n.length&&(this.pathFragments=this.pathFragments.filter((t,s)=>!n.includes(s))),n.length>0}lineLineIntersect(n,t){const s=n.x1,o=n.x2,a=t.x1,r=t.x2,l=n.y1,i=n.y2,c=t.y1,p=t.y2,u=(s-o)*(c-p)-(l-i)*(a-r),h=(s*i-l*o)*(a-r)-(s-o)*(a*p-c*r),f=(s*i-l*o)*(c-p)-(l-i)*(a*p-c*r),m=(g,w,_)=>g>=w&&g<=_?!0:g>=_&&g<=w;if(u===0)return!1;{const g={x:h/u,y:f/u};return m(g.x,s,o)&&m(g.y,l,i)&&m(g.x,a,r)&&m(g.y,c,p)}}};function b0(n){return{draw:new y0(n),stylus:new c0(n),line:new u0(n),rectangle:new d0(n),ellipse:new p0(n),eraseLine:new w0(n)}}var x0=class{constructor(n={}){this.options=n,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=r0(),this._models=b0(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),n.el&&this.mount(n.el,n.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(n){this._models[this.mode].onUnselected(),this.options.brush.mode=n,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(n){this.options.brush=n}resolveSelector(n){return typeof n=="string"?document.querySelector(n):n||null}mount(n,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(n),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),a=this.eventMove.bind(this),r=this.eventEnd.bind(this),l=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",a,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",l,!1),window.addEventListener("keyup",l,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",l,!1),window.removeEventListener("keyup",l,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(n=>n()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(n,t){return this._emitter.on(n,t)}undo(){const n=this.el;return n.lastElementChild?(this._undoStack.push(n.lastElementChild.cloneNode(!0)),n.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var n;return!!((n=this.el)!=null&&n.lastElementChild)}eventMove(n){!this.acceptsInput(n)||!this.drawing||this.model._eventMove(n)&&(n.stopPropagation(),n.preventDefault(),this._emitter.emit("changed"))}eventStart(n){!this.acceptsInput(n)||(n.stopPropagation(),n.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(n),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(n){if(!this.acceptsInput(n)||!this.drawing)return;const t=this.model._eventUp(n);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(n){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(n.pointerType)}eventKeyboard(n){this.shiftPressed===n.shiftKey&&this.altPressed===n.altKey||(this.shiftPressed=n.shiftKey,this.altPressed=n.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const n=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",n)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(n){this.clear(),this.el.innerHTML=n}};function A0(n){return new x0(n)}const ar=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Kn=Nn("slidev-drawing-enabled",!1),HC=Nn("slidev-drawing-pinned",!1),C0=q(!1),B0=q(!1),k0=q(!1),qs=q(!1),Dt=xm(Nn("slidev-drawing-brush",{color:ar[0],size:4,mode:"stylus"})),Ui=q("stylus"),au=D(()=>Ae.drawings.syncAll||Rn.value);let Ws=!1;const xs=D({get(){return Ui.value},set(n){Ui.value=n,n==="arrow"?(Dt.mode="line",Dt.arrowEnd=!0):(Dt.mode=n,Dt.arrowEnd=!1)}}),D0=Oe({brush:Dt,acceptsInputTypes:D(()=>Kn.value?void 0:["pen"]),coordinateTransform:!1}),on=Wo(A0(D0));function E0(){on.clear(),au.value&&jp(We.value,"")}function ru(){var n;B0.value=on.canRedo(),C0.value=on.canUndo(),k0.value=!!((n=on.el)!=null&&n.children.length)}function S0(n){Ws=!0;const t=So[n||We.value];t!=null?on.load(t):on.clear(),Ws=!1}on.on("changed",()=>{if(ru(),!Ws){const n=on.dump(),t=We.value;(So[t]||"")!==n&&au.value&&jp(t,on.dump())}});um(n=>{Ws=!0,n[We.value]!=null&&on.load(n[We.value]||""),Ws=!1,ru()});Ze(()=>{me(We,()=>{!on.mounted||S0()},{immediate:!0})});on.on("start",()=>qs.value=!0);on.on("end",()=>qs.value=!1);window.addEventListener("keydown",n=>{if(!Kn.value)return;const t=!n.ctrlKey&&!n.altKey&&!n.shiftKey&&!n.metaKey;let s=!0;n.code==="KeyZ"&&(n.ctrlKey||n.metaKey)?n.shiftKey?on.redo():on.undo():n.code==="Escape"?Kn.value=!1:n.code==="KeyL"&&t?xs.value="line":n.code==="KeyA"&&t?xs.value="arrow":n.code==="KeyS"&&t?xs.value="stylus":n.code==="KeyR"&&t?xs.value="rectangle":n.code==="KeyE"&&t?xs.value="ellipse":n.code==="KeyC"&&t?E0():n.code.startsWith("Digit")&&t&&+n.code[5]<=ar.length?Dt.color=ar[+n.code[5]-1]:s=!1,s&&(n.preventDefault(),n.stopPropagation())},!1);function Ke(...n){return D(()=>n.every(t=>sn(t)))}function dn(n){return D(()=>!sn(n))}const zi=fg(),ba=Nn("slidev-color-schema","auto"),rr=D(()=>Ae.colorSchema!=="auto"),zr=D({get(){return rr.value?Ae.colorSchema==="dark":ba.value==="auto"?zi.value:ba.value==="dark"},set(n){rr.value||(ba.value=n===zi.value?"auto":n?"dark":"light")}}),lu=Lp(zr);jn&&me(zr,n=>{const t=document.querySelector("html");t.classList.toggle("dark",n),t.classList.toggle("light",!n)},{immediate:!0});const _o=q(1),wo=D(()=>qe.length-1),yn=q(0),Yr=q(0);function T0(){yn.value>_o.value&&(yn.value-=1)}function I0(){yn.value<wo.value&&(yn.value+=1)}function $0(){if(yn.value>_o.value){let n=yn.value-Yr.value;n<_o.value&&(n=_o.value),yn.value=n}}function F0(){if(yn.value<wo.value){let n=yn.value+Yr.value;n>wo.value&&(n=wo.value),yn.value=n}}function O0(){const{escape:n,space:t,shift:s,left:o,right:a,up:r,down:l,enter:i,d:c,g:p,o:u}=Qp,h=[{name:"next_space",key:Ke(t,dn(s)),fn:it,autoRepeat:!0},{name:"prev_space",key:Ke(t,s),fn:ct,autoRepeat:!0},{name:"next_right",key:Ke(a,dn(s),dn(tn)),fn:it,autoRepeat:!0},{name:"prev_left",key:Ke(o,dn(s),dn(tn)),fn:ct,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:it,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:ct,autoRepeat:!0},{name:"next_down",key:Ke(l,dn(tn)),fn:zs,autoRepeat:!0},{name:"prev_up",key:Ke(r,dn(tn)),fn:()=>Ys(!1),autoRepeat:!0},{name:"next_shift",key:Ke(a,s),fn:zs,autoRepeat:!0},{name:"prev_shift",key:Ke(o,s),fn:()=>Ys(!1),autoRepeat:!0},{name:"toggle_dark",key:Ke(c,dn(Kn)),fn:lu},{name:"toggle_overview",key:Ke(u,dn(Kn)),fn:nu},{name:"hide_overview",key:Ke(n,dn(Kn)),fn:()=>tn.value=!1},{name:"goto",key:Ke(p,dn(Kn)),fn:()=>zt.value=!zt.value},{name:"next_overview",key:Ke(a,tn),fn:I0},{name:"prev_overview",key:Ke(o,tn),fn:T0},{name:"up_overview",key:Ke(r,tn),fn:$0},{name:"down_overview",key:Ke(l,tn),fn:F0},{name:"goto_from_overview",key:Ke(i,tn),fn:()=>{ls(yn.value),tn.value=!1}}];return{customShortcuts:[],defaultShortcuts:h}}const iu=Ke(dn(Yy),dn(Vy),Uy);function j0(n,t,s=!1){typeof n=="string"&&(n=Qp[n]);const o=Ke(n,iu);let a=0,r;const l=()=>{if(clearTimeout(r),!o.value){a=0;return}s&&(r=setTimeout(l,Math.max(1e3-a*250,150)),a++),t()};return me(o,l,{flush:"sync"})}function P0(n,t){return Zm(n,s=>{!iu.value||s.repeat||t()})}function N0(){const{customShortcuts:n,defaultShortcuts:t}=O0();new Map([...t,...n].map(o=>[o.key,o])).forEach(o=>{o.fn&&j0(o.key,o.fn,o.autoRepeat)}),P0("f",()=>eu.toggle())}const M0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},L0=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),H0=[L0];function R0(n,t){return x(),W("svg",M0,H0)}const J0={name:"carbon-close",render:R0};function Vr(n){var s,o;const t=(o=(s=n==null?void 0:n.meta)==null?void 0:s.slide)==null?void 0:o.no;return t!=null?`slidev-page-${t}`:""}const cu=xe({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(n){const t=n;$(O);const s=q(),o=Dg(s),a=D(()=>t.width?t.width:o.width.value),r=D(()=>t.width?t.width/lt:o.height.value);t.width&&Zs(()=>{s.value&&(s.value.style.width=`${a.value}px`,s.value.style.height=`${r.value}px`)});const l=D(()=>a.value/r.value),i=D(()=>t.scale?t.scale:l.value<lt?a.value/It:r.value*lt/It),c=D(()=>({height:`${$p}px`,width:`${It}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),p=D(()=>({"select-none":!Ae.selectable,"slidev-code-line-numbers":Ae.lineNumbers}));return mn(Ip,i),(u,h)=>(x(),W("div",{id:"slide-container",ref_key:"root",ref:s,class:Ne(b(p))},[e("div",{id:"slide-content",style:Ue(b(c))},[wn(u.$slots,"default")],4),wn(u.$slots,"controls")],2))}});const Gr=xe({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(n,{emit:t}){const s=Jn(n,"clicks",t),o=Jn(n,"clicksElements",t),a=Jn(n,"clicksDisabled",t),r=Jn(n,"clicksOrderMap",t);o.value.length=0,mn(Xf,n.route),mn(Qf,n.context),mn(Ds,s),mn(Es,a),mn(At,o),mn(za,r)},render(){var n,t;return this.$props.is?gn(this.$props.is):(t=(n=this.$slots)==null?void 0:n.default)==null?void 0:t.call(n)}}),K0=["innerHTML"],q0=xe({__name:"DrawingPreview",props:{page:null},setup(n){return $(O),(t,s)=>b(So)[n.page]?(x(),W("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:b(So)[n.page]},null,8,K0)):se("v-if",!0)}}),W0={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},U0=["onClick"],z0=xe({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(n,{emit:t}){const s=n;$(O);const o=Jn(s,"modelValue",t);function a(){o.value=!1}function r(m){ls(m),a()}function l(m){return m===yn.value}const i=tr.smaller("xs"),c=tr.smaller("sm"),p=4*16*2,u=2*16,h=D(()=>i.value?Ft.width.value-p:c.value?(Ft.width.value-p-u)/2:300),f=D(()=>Math.floor((Ft.width.value-p)/(h.value+u)));return Zs(()=>{yn.value=We.value,Yr.value=f.value}),(m,g)=>{const w=J0;return x(),W(De,null,[Lr(e("div",W0,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Ue(`grid-template-columns: repeat(auto-fit,minmax(${b(h)}px,1fr))`)},[(x(!0),W(De,null,Xs(b(qe).slice(0,-1),(_,k)=>(x(),W("div",{key:_.path,class:"relative"},[e("div",{class:Ne(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":l(k+1)}]),onClick:B=>r(+_.path)},[(x(),j(cu,{key:_.path,width:b(h),"clicks-disabled":!0,class:"pointer-events-none"},{default:M(()=>[z(b(Gr),{is:_==null?void 0:_.component,"clicks-disabled":!0,class:Ne(b(Vr)(_)),route:_,context:"overview"},null,8,["is","class","route"]),z(q0,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],10,U0),e("div",{class:"absolute top-0 opacity-50",style:Ue(`left: ${b(h)+5}px`)},Ot(k+1),5)]))),128))],4)],512),[[Ep,b(o)]]),b(o)?(x(),W("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:a},[z(w)])):se("v-if",!0)],64)}}});const Y0="/assets/logo.b72bde5d.png",V0={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},G0=xe({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(n,{emit:t}){const s=n;$(O);const o=Jn(s,"modelValue",t);function a(){o.value=!1}return(r,l)=>(x(),j(pp,null,[b(o)?(x(),W("div",V0,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:l[0]||(l[0]=i=>a())}),e("div",{class:Ne(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[wn(r.$slots,"default")],2)])):se("v-if",!0)],1024))}}),Z0={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},X0=["innerHTML"],Q0=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Y0,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),d("dev ")])])],-1),ev=xe({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(n,{emit:t}){const s=n;$(O);const o=Jn(s,"modelValue",t),a=D(()=>typeof Ae.info=="string");return(r,l)=>(x(),j(G0,{modelValue:b(o),"onUpdate:modelValue":l[0]||(l[0]=i=>Be(o)?o.value=i:null),class:"px-6 py-4"},{default:M(()=>[e("div",Z0,[b(a)?(x(),W("div",{key:0,class:"mb-4",innerHTML:b(Ae).info},null,8,X0)):se("v-if",!0),Q0])]),_:1},8,["modelValue"]))}});const nv=["disabled","onKeydown"],tv=xe({__name:"Goto",setup(n){$(O);const t=q(),s=q(""),o=D(()=>{if(s.value.startsWith("/"))return!!qe.find(l=>l.path===s.value.substring(1));{const l=+s.value;return!isNaN(l)&&l>0&&l<=ku.value}});function a(){o.value&&(s.value.startsWith("/")?ls(s.value.substring(1)):ls(+s.value)),r()}function r(){zt.value=!1}return me(zt,async l=>{var i,c;l?(await Ze(),s.value="",(i=t.value)==null||i.focus()):(c=t.value)==null||c.blur()}),me(s,l=>{l.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(l,i)=>(x(),W("div",{id:"slidev-goto-dialog",class:Ne(["fixed right-5 bg-main transform transition-all",b(zt)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Lr(e("input",{ref_key:"input",ref:t,"onUpdate:modelValue":i[0]||(i[0]=c=>s.value=c),type:"text",disabled:!b(zt),class:Ne(["outline-none bg-transparent",{"text-red-400":!b(o)&&s.value}]),placeholder:"Goto...",onKeydown:[Gl(a,["enter"]),Gl(r,["escape"])],onBlur:r},null,42,nv),[[jf,s.value]])],2))}}),sv=xe({__name:"Controls",setup(n){$(O);const t=On(),s=On();return(o,a)=>(x(),W(De,null,[z(z0,{modelValue:b(tn),"onUpdate:modelValue":a[0]||(a[0]=r=>Be(tn)?tn.value=r:null)},null,8,["modelValue"]),z(tv),b(t)?(x(),j(b(t),{key:0})):se("v-if",!0),b(s)?(x(),j(b(s),{key:1,modelValue:b(_a),"onUpdate:modelValue":a[1]||(a[1]=r=>Be(_a)?_a.value=r:null)},null,8,["modelValue"])):se("v-if",!0),b(Ae).info?(x(),j(ev,{key:2,modelValue:b(Is),"onUpdate:modelValue":a[2]||(a[2]=r=>Be(Is)?Is.value=r:null)},null,8,["modelValue"])):se("v-if",!0)],64))}}),ov={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},av=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),rv=[av];function lv(n,t){return x(),W("svg",ov,rv)}const iv={name:"carbon-settings-adjust",render:lv},cv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pv=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),uv=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),dv=[pv,uv];function hv(n,t){return x(),W("svg",cv,dv)}const fv={name:"carbon-information",render:hv},mv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gv=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),yv=[gv];function vv(n,t){return x(),W("svg",mv,yv)}const _v={name:"carbon-download",render:vv},wv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bv=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),xv=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Av=[bv,xv];function Cv(n,t){return x(),W("svg",wv,Av)}const Bv={name:"carbon-user-speaker",render:Cv},kv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Dv=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Ev=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Sv=[Dv,Ev];function Tv(n,t){return x(),W("svg",kv,Sv)}const Iv={name:"carbon-presentation-file",render:Tv},$v={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Fv=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Ov=[Fv];function jv(n,t){return x(),W("svg",$v,Ov)}const Pv={name:"carbon-pen",render:jv},Nv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Mv=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Lv=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Hv=[Mv,Lv];function Rv(n,t){return x(),W("svg",Nv,Hv)}const Jv={name:"ph-cursor-duotone",render:Rv},Kv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},qv=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),Wv=[qv];function Uv(n,t){return x(),W("svg",Kv,Wv)}const pu={name:"ph-cursor-fill",render:Uv},zv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Yv=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Vv=[Yv];function Gv(n,t){return x(),W("svg",zv,Vv)}const Zv={name:"carbon-sun",render:Gv},Xv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Qv=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),e1=[Qv];function n1(n,t){return x(),W("svg",Xv,e1)}const t1={name:"carbon-moon",render:n1},s1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},o1=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),a1=[o1];function r1(n,t){return x(),W("svg",s1,a1)}const l1={name:"carbon-apps",render:r1},i1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},c1=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),p1=[c1];function u1(n,t){return x(),W("svg",i1,p1)}const d1={name:"carbon-arrow-right",render:u1},h1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},f1=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),m1=[f1];function g1(n,t){return x(),W("svg",h1,m1)}const y1={name:"carbon-arrow-left",render:g1},v1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_1=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),w1=[_1];function b1(n,t){return x(),W("svg",v1,w1)}const x1={name:"carbon-maximize",render:b1},A1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},C1=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),B1=[C1];function k1(n,t){return x(),W("svg",A1,B1)}const D1={name:"carbon-minimize",render:k1},E1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S1=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),T1=[S1];function I1(n,t){return x(),W("svg",E1,T1)}const $1={name:"carbon-checkmark",render:I1},F1={class:"select-list"},O1={class:"title"},j1={class:"items"},P1=["onClick"],N1=xe({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(n,{emit:t}){const s=n;$(O);const o=Jn(s,"modelValue",t,{passive:!0});return(a,r)=>{const l=$1;return x(),W("div",F1,[e("div",O1,Ot(n.title),1),e("div",j1,[(x(!0),W(De,null,Xs(n.items,i=>(x(),W("div",{key:i.value,class:Ne(["item",{active:b(o)===i.value}]),onClick:()=>{var c;o.value=i.value,(c=i.onClick)==null||c.call(i)}},[z(l,{class:Ne(["text-green-500",{"opacity-0":b(o)!==i.value}])},null,8,["class"]),d(" "+Ot(i.display||i.value),1)],10,P1))),128))])])}}});const na=(n,t)=>{const s=n.__vccOpts||n;for(const[o,a]of t)s[o]=a;return s},M1=na(N1,[["__scopeId","data-v-7dd0eaca"]]),L1={class:"text-sm"},H1=xe({__name:"Settings",setup(n){$(O);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(x(),W("div",L1,[z(M1,{modelValue:b(vo),"onUpdate:modelValue":o[0]||(o[0]=a=>Be(vo)?vo.value=a:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),R1={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},J1=xe({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(n,{emit:t}){const s=n;$(O);const o=Jn(s,"modelValue",t,{passive:!0}),a=q();return Vm(a,()=>{o.value=!1}),(r,l)=>(x(),W("div",{ref_key:"el",ref:a,class:"flex relative"},[e("button",{class:Ne({disabled:n.disabled}),onClick:l[0]||(l[0]=i=>o.value=!b(o))},[wn(r.$slots,"button",{class:Ne({disabled:n.disabled})})],2),(x(),j(pp,null,[b(o)?(x(),W("div",R1,[wn(r.$slots,"menu")])):se("v-if",!0)],1024))],512))}}),K1={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},ho={__name:"VerticalDivider",setup(n){return $(O),(t,s)=>(x(),W("div",K1))}},q1={render(){return[]}},W1={class:"icon-btn"},U1={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},z1={class:"my-auto"},Y1={class:"opacity-50"},V1=xe({__name:"NavControls",props:{persist:{default:!1}},setup(n){const t=n;$(O);const s=tr.smaller("md"),{isFullscreen:o,toggle:a}=eu,r=D(()=>ir.value?`?password=${ir.value}`:""),l=D(()=>`/presenter/${We.value}${r.value}`),i=D(()=>`/${We.value}${r.value}`),c=q(),p=()=>{c.value&&es.value&&c.value.contains(es.value)&&es.value.blur()},u=D(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),h=On(),f=On();return us(()=>import("./DrawingControls.e71b3936.js"),["assets/DrawingControls.e71b3936.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.9cf848f8.js"]).then(m=>f.value=m.default),(m,g)=>{const w=D1,_=x1,k=y1,B=d1,A=l1,E=t1,L=Zv,P=pu,K=Jv,te=Pv,ie=Iv,ye=ko("RouterLink"),_e=Bv,Re=_v,Je=fv,Me=iv;return x(),W("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[e("div",{class:Ne(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",b(u)]),onMouseleave:p},[b(Un)?se("v-if",!0):(x(),W("button",{key:0,class:"icon-btn",onClick:g[0]||(g[0]=(...$e)=>b(a)&&b(a)(...$e))},[b(o)?(x(),j(w,{key:0})):(x(),j(_,{key:1}))])),e("button",{class:Ne(["icon-btn",{disabled:!b(c3)}]),onClick:g[1]||(g[1]=(...$e)=>b(ct)&&b(ct)(...$e))},[z(k)],2),e("button",{class:Ne(["icon-btn",{disabled:!b(i3)}]),title:"Next",onClick:g[2]||(g[2]=(...$e)=>b(it)&&b(it)(...$e))},[z(B)],2),b(Un)?se("v-if",!0):(x(),W("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=$e=>b(nu)())},[z(A)])),b(rr)?se("v-if",!0):(x(),W("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=$e=>b(lu)())},[b(zr)?(x(),j(E,{key:0})):(x(),j(L,{key:1}))])),z(ho),b(Un)?se("v-if",!0):(x(),W(De,{key:3},[!b(Rn)&&!b(s)&&b(h)?(x(),W(De,{key:0},[z(b(h)),z(ho)],64)):se("v-if",!0),b(Rn)?(x(),W("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=$e=>wa.value=!b(wa))},[b(wa)?(x(),j(P,{key:0})):(x(),j(K,{key:1,class:"opacity-50"}))])):se("v-if",!0)],64)),!b(Ae).drawings.presenterOnly&&!b(Un)?(x(),W(De,{key:4},[e("button",{class:"icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=$e=>Kn.value=!b(Kn))},[z(te),b(Kn)?(x(),W("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Ue({background:b(Dt).color})},null,4)):se("v-if",!0)]),z(ho)],64)):se("v-if",!0),b(Un)?se("v-if",!0):(x(),W(De,{key:5},[b(Rn)?(x(),j(ye,{key:0,to:b(i),class:"icon-btn",title:"Play Mode"},{default:M(()=>[z(ie)]),_:1},8,["to"])):se("v-if",!0),b(a3)?(x(),j(ye,{key:1,to:b(l),class:"icon-btn",title:"Presenter Mode"},{default:M(()=>[z(_e)]),_:1},8,["to"])):se("v-if",!0),se("v-if",!0)],64)),(x(),W(De,{key:6},[b(Ae).download?(x(),W("button",{key:0,class:"icon-btn",onClick:g[8]||(g[8]=(...$e)=>b(cr)&&b(cr)(...$e))},[z(Re)])):se("v-if",!0)],64)),!b(Rn)&&b(Ae).info&&!b(Un)?(x(),W("button",{key:7,class:"icon-btn",onClick:g[9]||(g[9]=$e=>Is.value=!b(Is))},[z(Je)])):se("v-if",!0),!b(Rn)&&!b(Un)?(x(),j(J1,{key:8},{button:M(()=>[e("button",W1,[z(Me)])]),menu:M(()=>[z(H1)]),_:1})):se("v-if",!0),b(Un)?se("v-if",!0):(x(),j(ho,{key:9})),e("div",U1,[e("div",z1,[d(Ot(b(We))+" ",1),e("span",Y1,"/ "+Ot(b(ku)),1)])]),z(b(q1))],34)],512)}}}),uu={render(){return[]}},du={render(){return[]}},G1={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Z1=xe({__name:"PresenterMouse",setup(n){return $(O),(t,s)=>{const o=pu;return b(ma).cursor?(x(),W("div",G1,[z(o,{class:"absolute",style:Ue({left:`${b(ma).cursor.x}%`,top:`${b(ma).cursor.y}%`})},null,8,["style"])])):se("v-if",!0)}}}),X1=xe({__name:"SlidesShow",props:{context:null},setup(n){$(O),me(fn,()=>{var s,o;((s=fn.value)==null?void 0:s.meta)&&fn.value.meta.preload!==!1&&(fn.value.meta.__preloaded=!0),((o=xa.value)==null?void 0:o.meta)&&xa.value.meta.preload!==!1&&(xa.value.meta.__preloaded=!0)},{immediate:!0});const t=On();return us(()=>import("./DrawingLayer.cafbcb47.js"),[]).then(s=>t.value=s.default),(s,o)=>(x(),W(De,null,[se(" Global Bottom "),z(b(du)),se(" Slides "),(x(!0),W(De,null,Xs(b(qe),a=>{var r,l;return x(),W(De,{key:a.path},[((r=a.meta)==null?void 0:r.__preloaded)||a===b(fn)?Lr((x(),j(b(Gr),{key:0,is:a==null?void 0:a.component,clicks:a===b(fn)?b(Fn):0,"clicks-elements":((l=a.meta)==null?void 0:l.__clicksElements)||[],"clicks-disabled":!1,class:Ne(b(Vr)(a)),route:a,context:n.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ep,a===b(fn)]]):se("v-if",!0)],64)}),128)),se(" Global Top "),z(b(uu)),b(t)?(x(),j(b(t),{key:0})):se("v-if",!0),b(Rn)?se("v-if",!0):(x(),j(Z1,{key:1}))],64))}}),Q1=xe({__name:"Play",setup(n){$(O),N0();const t=q();function s(r){var l;Ni.value||((l=r.target)==null?void 0:l.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?it():ct())}d3(t);const o=D(()=>zy.value||Ni.value);On();const a=On();return us(()=>import("./DrawingControls.e71b3936.js"),["assets/DrawingControls.e71b3936.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.9cf848f8.js"]).then(r=>a.value=r.default),(r,l)=>(x(),W(De,null,[e("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:Ue(b(Fp))},[z(cu,{class:"w-full h-full",style:Ue({background:"var(--slidev-slide-container-background, black)"}),width:b(nl)?b(Ft).width.value:void 0,scale:b(vo),onPointerdown:s},{default:M(()=>[z(X1,{context:"slide"})]),controls:M(()=>[e("div",{class:Ne(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[b(o)?"opacity-100 right-0":"opacity-0 p-2",b(qs)?"pointer-events-none":""]])},[z(V1,{class:"m-auto",persist:b(o)},null,8,["persist"])],2),!b(Ae).drawings.presenterOnly&&!b(Un)&&b(a)?(x(),j(b(a),{key:0,class:"ml-0"})):se("v-if",!0)]),_:1},8,["style","width","scale"]),se("v-if",!0)],4),z(sv)],64))}});function hu(n){const t=D(()=>n.value.path),s=D(()=>qe.length-1),o=D(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),a=D(()=>sa(o.value)),r=D(()=>qe.find(f=>f.path===`${o.value}`)),l=D(()=>{var f,m,g;return(g=(m=(f=r.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:g.id}),i=D(()=>{var f,m;return(m=(f=r.value)==null?void 0:f.meta)==null?void 0:m.layout}),c=D(()=>qe.find(f=>f.path===`${Math.min(qe.length,o.value+1)}`)),p=D(()=>qe.filter(f=>{var m,g;return(g=(m=f.meta)==null?void 0:m.slide)==null?void 0:g.title}).reduce((f,m)=>(tl(f,m),f),[])),u=D(()=>sl(p.value,r.value)),h=D(()=>ol(u.value));return{route:n,path:t,total:s,currentPage:o,currentPath:a,currentRoute:r,currentSlideId:l,currentLayout:i,nextRoute:c,rawTree:p,treeWithActiveStatuses:u,tree:h}}function fu(n,t,s){const o=q(0);Ze(()=>{vn.afterEach(async()=>{await Ze(),o.value+=1})});const a=D(()=>{var c,p;return o.value,((p=(c=t.value)==null?void 0:c.meta)==null?void 0:p.__clicksElements)||[]}),r=D(()=>{var c,p,u;return+((u=(p=(c=t.value)==null?void 0:c.meta)==null?void 0:p.clicks)!=null?u:a.value.length)}),l=D(()=>s.value<qe.length-1||n.value<r.value),i=D(()=>s.value>1||n.value>0);return{clicks:n,clicksElements:a,clicksTotal:r,hasNext:l,hasPrev:i}}const e8=["id"],Yi=xe({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(n,{emit:t}){const s=n,o=Jn(s,"clicksElements",t),a=D(()=>({height:`${$p}px`,width:`${It}px`})),r=On();us(()=>import("./DrawingPreview.b8c3fd3d.js"),[]).then(p=>r.value=p.default);const l=D(()=>s.clicks),i=fu(l,s.nav.currentRoute,s.nav.currentPage),c=D(()=>`${s.route.path.toString().padStart(3,"0")}-${(l.value+1).toString().padStart(2,"0")}`);return mn(O,Oe({nav:{...s.nav,...i},configs:Ae,themeConfigs:D(()=>Ae.themeConfig)})),(p,u)=>{var h;return x(),W("div",{id:b(c),class:"slide-container",style:Ue(b(a))},[z(b(du)),z(b(Gr),{is:(h=n.route)==null?void 0:h.component,"clicks-elements":b(o),"onUpdate:clicks-elements":u[0]||(u[0]=f=>Be(o)?o.value=f:null),clicks:b(l),"clicks-disabled":!1,class:Ne(b(Vr)(n.route)),route:n.route},null,8,["is","clicks-elements","clicks","class","route"]),b(r)?(x(),j(b(r),{key:0,page:+n.route.path},null,8,["page"])):se("v-if",!0),z(b(uu))],12,e8)}}}),n8=xe({__name:"PrintSlide",props:{route:null},setup(n){var r;const t=n;$(O);const s=Oe(((r=t.route.meta)==null?void 0:r.__clicksElements)||[]),o=D(()=>t.route),a=hu(o);return(l,i)=>(x(),W(De,null,[z(Yi,{"clicks-elements":s,"onUpdate:clicks-elements":i[0]||(i[0]=c=>Be(s)?s.value=c:null),clicks:0,nav:b(a),route:b(o)},null,8,["clicks-elements","nav","route"]),b($s)?se("v-if",!0):(x(!0),W(De,{key:0},Xs(s.length,c=>(x(),j(Yi,{key:c,clicks:c,nav:b(a),route:b(o)},null,8,["clicks","nav","route"]))),128))],64))}}),t8={id:"print-content"},s8=xe({__name:"PrintContainer",props:{width:null},setup(n){const t=n;$(O);const s=D(()=>t.width),o=D(()=>t.width/lt),a=D(()=>s.value/o.value),r=D(()=>a.value<lt?s.value/It:o.value*lt/It),l=qe.slice(0,-1),i=D(()=>({"select-none":!Ae.selectable,"slidev-code-line-numbers":Ae.lineNumbers}));return mn(Ip,r),(c,p)=>(x(),W("div",{id:"print-container",class:Ne(b(i))},[e("div",t8,[(x(!0),W(De,null,Xs(b(l),u=>(x(),j(n8,{key:u.path,route:u},null,8,["route"]))),128))]),wn(c.$slots,"controls")],2))}});const o8=xe({__name:"Print",setup(n){$(O);const t=kt.canvasWidth,s=Math.round(t/kt.aspectRatio)+1;function o(a,{slots:r}){if(r.default)return gn("style",r.default())}return Zs(()=>{nl?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(a,r)=>(x(),W(De,null,[z(o,null,{default:M(()=>[d(" @page { size: "+Ot(b(t))+"px "+Ot(s)+"px; margin: 0px; } ",1)]),_:1}),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Ue(b(Fp))},[z(s8,{class:"w-full h-full",style:Ue({background:"var(--slidev-slide-container-background, black)"}),width:b(Ft).width.value},null,8,["style","width"])],4)],64))}});const a8={class:"slidev-layout end"},r8={__name:"end",setup(n){return $(O),(t,s)=>(x(),W("div",a8," END "))}},l8=na(r8,[["__scopeId","data-v-ab32435f"]]),i8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},c8=e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),p8=[c8];function u8(n,t){return x(),W("svg",i8,p8)}const d8={name:"carbon-logo-github",render:u8};function Vi(n){return n.startsWith("/")?"/"+n.slice(1):n}function Zr(n,t=!1){const s=n&&n[0]==="#"&&n.startsWith("rgb"),o={background:s?n:void 0,color:n&&!s?"white":void 0,backgroundImage:s?void 0:n?t?`linear-gradient(#0005, #0008), url(${Vi(n)})`:`url("${Vi(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const ht=xe({__name:"intro-image",props:{image:{type:String}},setup(n){const t=n;$(O);const s=D(()=>Zr(t.image));return(o,a)=>(x(),W("div",{class:"slidev-layout w-full h-full intro-image",style:Ue(b(s))},[wn(o.$slots,"default")],4))}}),h8=e("div",{class:"hidden"}," # More than Words ",-1),f8=e("div",{class:"absolute bottom-10 text-gray-400"},[e("span",{class:"font-700"}," Chris Wu @amourow Sep. 2022 ")],-1),m8=e("div",{class:"text-6xl font-700 text-gray-700 self-end mt-24 mb-8 font-serif"}," More than Words ",-1),g8=e("div",{class:"text-4xl text-gray-700"}," Localizing the User Experience ",-1),y8={class:"abs-br m-6 flex gap-2"},v8={href:"https://github.com/",target:"_blank",alt:"GitHub",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},_8={__name:"1",setup(n){const t={layout:"intro-image",image:"/images/DCE2022_title.png",theme:"apple-basic",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},fonts:{sans:"Montserrat",serif:"Bitter"}};return $(O),(s,o)=>{const a=d8;return x(),j(ht,Q(X(t)),{default:M(()=>[h8,f8,m8,g8,e("div",y8,[e("a",v8,[z(a)])])]),_:1},16)}}},w8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},b8=e("path",{fill:"currentColor",d:"M11.92 24.94A12.76 12.76 0 0 0 24.76 12.1v-.59A9.4 9.4 0 0 0 27 9.18a9.31 9.31 0 0 1-2.59.71a4.56 4.56 0 0 0 2-2.5a8.89 8.89 0 0 1-2.86 1.1a4.52 4.52 0 0 0-7.7 4.11a12.79 12.79 0 0 1-9.3-4.71a4.51 4.51 0 0 0 1.4 6a4.47 4.47 0 0 1-2-.56v.05a4.53 4.53 0 0 0 3.55 4.45a4.53 4.53 0 0 1-2 .08A4.51 4.51 0 0 0 11.68 21a9.05 9.05 0 0 1-5.61 2A9.77 9.77 0 0 1 5 22.91a12.77 12.77 0 0 0 6.92 2"},null,-1),x8=[b8];function A8(n,t){return x(),W("svg",w8,x8)}const C8={name:"carbon-logo-twitter",render:A8},B8="/assets/chris_potrait.23c83040.png",k8={class:"slidev-layout default"},he={__name:"default",setup(n){return $(O),(t,s)=>(x(),W("div",k8,[wn(t.$slots,"default")]))}},D8=e("h1",null,"Chris Wu",-1),E8={class:"grid grid-cols-[1fr,2fr] grid-rows-2 gap-4 py-8"},S8=e("div",{class:"image rounded-full content-center flex flex-col"},[e("img",{src:B8,class:"rounded-full overflow-hidden"})],-1),T8={class:"intro flex flex-row items-center"},I8=e("li",null,"\u{1F1F9}\u{1F1FC}",-1),$8=e("li",null,"Senior Web Developer, OIST",-1),F8=e("li",null,"Designer, Developer, former DUGTW member",-1),O8=e("li",null,null,-1),j8={href:"https://twitter.com/amourow",target:"_blank",alt:"GitHub",class:"text-xl icon-btn mt-8 !border-none !hover:text-white bg-blue-600 text-white hover:bg-blue-600/80"},P8=d(" @amourow"),N8=e("div",null,null,-1),M8=e("div",{class:"pl-4"},null,-1),L8={__name:"2",setup(n){const t={};return $(O),(s,o)=>{const a=C8;return x(),j(he,Q(X(t)),{default:M(()=>[D8,e("div",E8,[S8,e("div",T8,[e("ol",null,[I8,$8,F8,O8,e("li",null,[e("a",j8,[z(a),P8])])])]),N8,M8])]),_:1},16)}}},H8="/assets/2022-09-21-23-03-19.2e360250.png",R8={class:"grid grid-cols-2 w-full h-full"},J8=xe({__name:"intro-image-right",props:{image:{type:String},class:{type:String}},setup(n){const t=n;$(O);const s=D(()=>Zr(t.image));return(o,a)=>(x(),W("div",R8,[e("div",{class:Ne(["slidev-layout default image-right my-auto",t.class])},[wn(o.$slots,"default")],2),e("div",{class:"my-14 mr-14",style:Ue(b(s))},null,4)]))}}),K8=e("div",{class:"hidden"}," # Intro: OIST ",-1),q8=e("div",{class:"absolute top-10 flex items-center"},[e("div",{class:"w-12"},[e("img",{src:H8})]),e("div",{class:"w-96 my-0 ml-4 leading-6"},[d(" Okinawa Institute of "),e("br"),d("Science and Technology ")])],-1),W8=e("blockquote",{class:"content-end"},[e("h2",null,"Ivory Tower of Babel"),e("p",null," Website design and development challenges for a multidisciplinary, multinational, multicultural, multilingual science and technology university in Japan"),e("p",{class:"text-gray-400"}," Sep. 20 by Micheal Cooper")],-1),U8={__name:"3",setup(n){const t={layout:"intro-image-right",image:"/images/campus.png"};return $(O),(s,o)=>(x(),j(J8,Q(X(t)),{default:M(()=>[K8,q8,W8]),_:1},16))}},z8=e("div",{class:"hidden"}," # Disclaimer ",-1),Y8=e("div",{class:"text-2xl font-700 text-gray-700 self-end mb-12"},[e("div",{class:"w-1/2 m-auto text-center px-8"}," Views expressed here are solely my own and not those of the university. No part of this presentation should be considered an endorsement. ")],-1),V8=e("div",{class:"text-3xl font-700 text-gray-100 text-center self-end mb-8"}," Disclaimer ",-1),G8={__name:"4",setup(n){const t={layout:"intro-image",image:"/images/DCE2022_quote.png"};return $(O),(s,o)=>(x(),j(ht,Q(X(t)),{default:M(()=>[z8,Y8,V8]),_:1},16))}},Z8=e("div",{class:"hidden"}," # ===== Translate with i18n ===== ",-1),X8=e("div",{class:"absolute bottom-10"},[e("span",{class:"font-700"})],-1),Q8=e("div",{class:"absolute top-10"},[e("h1",null,"Translation in Drupal"),e("p",null,"translation and design")],-1),e2={__name:"5",setup(n){const t={layout:"intro-image",image:"/images/dictionary-pisit-heng.jpg",srcSequence:"./section-1.md"};return $(O),(s,o)=>(x(),j(ht,Q(X(t)),{default:M(()=>[Z8,X8,Q8,se(`
background image: Photo by Pisit Heng on Unsplash
https://unsplash.com/photos/FQvadXmA524
`)]),_:1},16))}},n2="/assets/2022-08-22-23-02-48.a7e87d0f.png",t2="/assets/2022-08-22-22-58-40.4dfd6013.png",s2=e("h1",null,"Translate with i18n",-1),o2=e("p",null,"Content translation / Field translation",-1),a2=e("img",{class:"w-2/3",src:n2},null,-1),r2=e("p",null,"User Interface translation in Drupal",-1),l2=e("p",null,[e("img",{src:t2,alt:""})],-1),i2={__name:"6",setup(n){const t={srcSequence:"./section-1.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[s2,o2,a2,r2,se(" Configuration "),l2]),_:1},16))}},c2={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},p2=e("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),u2=[p2];function d2(n,t){return x(),W("svg",c2,u2)}const h2={name:"ph-clipboard",render:d2},f2={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},m2=e("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),g2=[m2];function y2(n,t){return x(),W("svg",f2,g2)}const v2={name:"ph-check-circle",render:y2};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function mu(n){return typeof n>"u"||n===null}function _2(n){return typeof n=="object"&&n!==null}function w2(n){return Array.isArray(n)?n:mu(n)?[]:[n]}function b2(n,t){var s,o,a,r;if(t)for(r=Object.keys(t),s=0,o=r.length;s<o;s+=1)a=r[s],n[a]=t[a];return n}function x2(n,t){var s="",o;for(o=0;o<t;o+=1)s+=n;return s}function A2(n){return n===0&&Number.NEGATIVE_INFINITY===1/n}var C2=mu,B2=_2,k2=w2,D2=x2,E2=A2,S2=b2,Xr={isNothing:C2,isObject:B2,toArray:k2,repeat:D2,isNegativeZero:E2,extend:S2};function gu(n,t){var s="",o=n.reason||"(unknown reason)";return n.mark?(n.mark.name&&(s+='in "'+n.mark.name+'" '),s+="("+(n.mark.line+1)+":"+(n.mark.column+1)+")",!t&&n.mark.snippet&&(s+=`

`+n.mark.snippet),o+" "+s):o}function Us(n,t){Error.call(this),this.name="YAMLException",this.reason=n,this.mark=t,this.message=gu(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Us.prototype=Object.create(Error.prototype);Us.prototype.constructor=Us;Us.prototype.toString=function(t){return this.name+": "+gu(this,t)};var Ct=Us,T2=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],I2=["scalar","sequence","mapping"];function $2(n){var t={};return n!==null&&Object.keys(n).forEach(function(s){n[s].forEach(function(o){t[String(o)]=s})}),t}function F2(n,t){if(t=t||{},Object.keys(t).forEach(function(s){if(T2.indexOf(s)===-1)throw new Ct('Unknown option "'+s+'" is met in definition of "'+n+'" YAML type.')}),this.options=t,this.tag=n,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(s){return s},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=$2(t.styleAliases||null),I2.indexOf(this.kind)===-1)throw new Ct('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')}var Qe=F2;function Gi(n,t){var s=[];return n[t].forEach(function(o){var a=s.length;s.forEach(function(r,l){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(a=l)}),s[a]=o}),s}function O2(){var n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,s;function o(a){a.multi?(n.multi[a.kind].push(a),n.multi.fallback.push(a)):n[a.kind][a.tag]=n.fallback[a.tag]=a}for(t=0,s=arguments.length;t<s;t+=1)arguments[t].forEach(o);return n}function lr(n){return this.extend(n)}lr.prototype.extend=function(t){var s=[],o=[];if(t instanceof Qe)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(s=s.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new Ct("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof Qe))throw new Ct("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new Ct("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new Ct("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof Qe))throw new Ct("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var a=Object.create(lr.prototype);return a.implicit=(this.implicit||[]).concat(s),a.explicit=(this.explicit||[]).concat(o),a.compiledImplicit=Gi(a,"implicit"),a.compiledExplicit=Gi(a,"explicit"),a.compiledTypeMap=O2(a.compiledImplicit,a.compiledExplicit),a};var j2=lr,P2=new Qe("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),N2=new Qe("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),M2=new Qe("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),L2=new j2({explicit:[P2,N2,M2]});function H2(n){if(n===null)return!0;var t=n.length;return t===1&&n==="~"||t===4&&(n==="null"||n==="Null"||n==="NULL")}function R2(){return null}function J2(n){return n===null}var K2=new Qe("tag:yaml.org,2002:null",{kind:"scalar",resolve:H2,construct:R2,predicate:J2,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function q2(n){if(n===null)return!1;var t=n.length;return t===4&&(n==="true"||n==="True"||n==="TRUE")||t===5&&(n==="false"||n==="False"||n==="FALSE")}function W2(n){return n==="true"||n==="True"||n==="TRUE"}function U2(n){return Object.prototype.toString.call(n)==="[object Boolean]"}var z2=new Qe("tag:yaml.org,2002:bool",{kind:"scalar",resolve:q2,construct:W2,predicate:U2,represent:{lowercase:function(n){return n?"true":"false"},uppercase:function(n){return n?"TRUE":"FALSE"},camelcase:function(n){return n?"True":"False"}},defaultStyle:"lowercase"});function Y2(n){return 48<=n&&n<=57||65<=n&&n<=70||97<=n&&n<=102}function V2(n){return 48<=n&&n<=55}function G2(n){return 48<=n&&n<=57}function Z2(n){if(n===null)return!1;var t=n.length,s=0,o=!1,a;if(!t)return!1;if(a=n[s],(a==="-"||a==="+")&&(a=n[++s]),a==="0"){if(s+1===t)return!0;if(a=n[++s],a==="b"){for(s++;s<t;s++)if(a=n[s],a!=="_"){if(a!=="0"&&a!=="1")return!1;o=!0}return o&&a!=="_"}if(a==="x"){for(s++;s<t;s++)if(a=n[s],a!=="_"){if(!Y2(n.charCodeAt(s)))return!1;o=!0}return o&&a!=="_"}if(a==="o"){for(s++;s<t;s++)if(a=n[s],a!=="_"){if(!V2(n.charCodeAt(s)))return!1;o=!0}return o&&a!=="_"}}if(a==="_")return!1;for(;s<t;s++)if(a=n[s],a!=="_"){if(!G2(n.charCodeAt(s)))return!1;o=!0}return!(!o||a==="_")}function X2(n){var t=n,s=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return s*parseInt(t.slice(2),2);if(t[1]==="x")return s*parseInt(t.slice(2),16);if(t[1]==="o")return s*parseInt(t.slice(2),8)}return s*parseInt(t,10)}function Q2(n){return Object.prototype.toString.call(n)==="[object Number]"&&n%1===0&&!Xr.isNegativeZero(n)}var e_=new Qe("tag:yaml.org,2002:int",{kind:"scalar",resolve:Z2,construct:X2,predicate:Q2,represent:{binary:function(n){return n>=0?"0b"+n.toString(2):"-0b"+n.toString(2).slice(1)},octal:function(n){return n>=0?"0o"+n.toString(8):"-0o"+n.toString(8).slice(1)},decimal:function(n){return n.toString(10)},hexadecimal:function(n){return n>=0?"0x"+n.toString(16).toUpperCase():"-0x"+n.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),n_=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function t_(n){return!(n===null||!n_.test(n)||n[n.length-1]==="_")}function s_(n){var t,s;return t=n.replace(/_/g,"").toLowerCase(),s=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:s*parseFloat(t,10)}var o_=/^[-+]?[0-9]+e/;function a_(n,t){var s;if(isNaN(n))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===n)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===n)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Xr.isNegativeZero(n))return"-0.0";return s=n.toString(10),o_.test(s)?s.replace("e",".e"):s}function r_(n){return Object.prototype.toString.call(n)==="[object Number]"&&(n%1!==0||Xr.isNegativeZero(n))}var l_=new Qe("tag:yaml.org,2002:float",{kind:"scalar",resolve:t_,construct:s_,predicate:r_,represent:a_,defaultStyle:"lowercase"}),i_=L2.extend({implicit:[K2,z2,e_,l_]}),c_=i_,yu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),vu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function p_(n){return n===null?!1:yu.exec(n)!==null||vu.exec(n)!==null}function u_(n){var t,s,o,a,r,l,i,c=0,p=null,u,h,f;if(t=yu.exec(n),t===null&&(t=vu.exec(n)),t===null)throw new Error("Date resolve error");if(s=+t[1],o=+t[2]-1,a=+t[3],!t[4])return new Date(Date.UTC(s,o,a));if(r=+t[4],l=+t[5],i=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(u=+t[10],h=+(t[11]||0),p=(u*60+h)*6e4,t[9]==="-"&&(p=-p)),f=new Date(Date.UTC(s,o,a,r,l,i,c)),p&&f.setTime(f.getTime()-p),f}function d_(n){return n.toISOString()}var h_=new Qe("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:p_,construct:u_,instanceOf:Date,represent:d_});function f_(n){return n==="<<"||n===null}var m_=new Qe("tag:yaml.org,2002:merge",{kind:"scalar",resolve:f_}),Qr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function g_(n){if(n===null)return!1;var t,s,o=0,a=n.length,r=Qr;for(s=0;s<a;s++)if(t=r.indexOf(n.charAt(s)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function y_(n){var t,s,o=n.replace(/[\r\n=]/g,""),a=o.length,r=Qr,l=0,i=[];for(t=0;t<a;t++)t%4===0&&t&&(i.push(l>>16&255),i.push(l>>8&255),i.push(l&255)),l=l<<6|r.indexOf(o.charAt(t));return s=a%4*6,s===0?(i.push(l>>16&255),i.push(l>>8&255),i.push(l&255)):s===18?(i.push(l>>10&255),i.push(l>>2&255)):s===12&&i.push(l>>4&255),new Uint8Array(i)}function v_(n){var t="",s=0,o,a,r=n.length,l=Qr;for(o=0;o<r;o++)o%3===0&&o&&(t+=l[s>>18&63],t+=l[s>>12&63],t+=l[s>>6&63],t+=l[s&63]),s=(s<<8)+n[o];return a=r%3,a===0?(t+=l[s>>18&63],t+=l[s>>12&63],t+=l[s>>6&63],t+=l[s&63]):a===2?(t+=l[s>>10&63],t+=l[s>>4&63],t+=l[s<<2&63],t+=l[64]):a===1&&(t+=l[s>>2&63],t+=l[s<<4&63],t+=l[64],t+=l[64]),t}function __(n){return Object.prototype.toString.call(n)==="[object Uint8Array]"}var w_=new Qe("tag:yaml.org,2002:binary",{kind:"scalar",resolve:g_,construct:y_,predicate:__,represent:v_}),b_=Object.prototype.hasOwnProperty,x_=Object.prototype.toString;function A_(n){if(n===null)return!0;var t=[],s,o,a,r,l,i=n;for(s=0,o=i.length;s<o;s+=1){if(a=i[s],l=!1,x_.call(a)!=="[object Object]")return!1;for(r in a)if(b_.call(a,r))if(!l)l=!0;else return!1;if(!l)return!1;if(t.indexOf(r)===-1)t.push(r);else return!1}return!0}function C_(n){return n!==null?n:[]}var B_=new Qe("tag:yaml.org,2002:omap",{kind:"sequence",resolve:A_,construct:C_}),k_=Object.prototype.toString;function D_(n){if(n===null)return!0;var t,s,o,a,r,l=n;for(r=new Array(l.length),t=0,s=l.length;t<s;t+=1){if(o=l[t],k_.call(o)!=="[object Object]"||(a=Object.keys(o),a.length!==1))return!1;r[t]=[a[0],o[a[0]]]}return!0}function E_(n){if(n===null)return[];var t,s,o,a,r,l=n;for(r=new Array(l.length),t=0,s=l.length;t<s;t+=1)o=l[t],a=Object.keys(o),r[t]=[a[0],o[a[0]]];return r}var S_=new Qe("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:D_,construct:E_}),T_=Object.prototype.hasOwnProperty;function I_(n){if(n===null)return!0;var t,s=n;for(t in s)if(T_.call(s,t)&&s[t]!==null)return!1;return!0}function $_(n){return n!==null?n:{}}var F_=new Qe("tag:yaml.org,2002:set",{kind:"mapping",resolve:I_,construct:$_});c_.extend({implicit:[h_,m_],explicit:[w_,B_,S_,F_]});function Zi(n){return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"\x85":n===95?"\xA0":n===76?"\u2028":n===80?"\u2029":""}var O_=new Array(256),j_=new Array(256);for(var Jt=0;Jt<256;Jt++)O_[Jt]=Zi(Jt)?1:0,j_[Jt]=Zi(Jt);function P_(n){return Array.from(new Set(n))}function Xi(...n){let t,s,o;n.length===1?(t=0,o=1,[s]=n):[t,s,o=1]=n;const a=[];let r=t;for(;r<s;)a.push(r),r+=o||1;return a}function N_(n,t){if(!t||t==="all"||t==="*")return Xi(1,n+1);const s=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[a,r]=o.split("-",2);s.push(...Xi(+a,r?+r+1:n+1))}return P_(s).filter(o=>o<=n).sort((o,a)=>o-a)}const M_=["title"],Cn=xe({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(n){const t=n;$(O);const s=$(Ds),o=$(At),a=$(Es);function r(h=5){const f=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=m.length;for(let w=0;w<h;w++)f.push(m.charAt(Math.floor(Math.random()*g)));return f.join("")}const l=q(),i=dt();ps(()=>{const h=t.at==null?o==null?void 0:o.value.length:t.at,f=D(()=>a!=null&&a.value?t.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(h||0)),t.ranges.length-1)),m=D(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(a!=null&&a.value)){const g=r(),w=nm(t.ranges.length-1).map(_=>g+_);o!=null&&o.value&&(o.value.push(...w),Zo(()=>w.forEach(_=>Ya(o.value,_)),i))}Zs(()=>{if(!l.value)return;const w=l.value.querySelector(".shiki-dark")?Array.from(l.value.querySelectorAll(".shiki")):[l.value];for(const _ of w){const k=Array.from(_.querySelectorAll(".line")),B=N_(k.length,m.value);if(k.forEach((A,E)=>{const L=B.includes(E+1);A.classList.toggle(wt,!0),A.classList.toggle("highlighted",L),A.classList.toggle("dishonored",!L)}),t.maxHeight){const A=_.querySelector(".line.highlighted");A&&A.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:p}=ag();function u(){var f,m;const h=(m=(f=l.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:m.textContent;h&&p(h)}return(h,f)=>{const m=v2,g=h2;return x(),W("div",{ref_key:"el",ref:l,class:"slidev-code-wrapper relative group",style:Ue({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[wn(h.$slots,"default"),b(Ae).codeCopy?(x(),W("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:b(c)?"Copied":"Copy",onClick:f[0]||(f[0]=w=>u())},[b(c)?(x(),j(m,{key:0,class:"p-2 w-8 h-8"})):(x(),j(g,{key:1,class:"p-2 w-8 h-8"}))],8,M_)):se("v-if",!0)],4)}}}),L_=e("h1",null,"Translate with i18n",-1),H_=e("p",null,"Translation in Twig",-1),R_=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"{# Test trans filter. #}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Hello Earth.'"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"trans "),e("span",{style:{color:"#858585"}},"}}")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"{# Test trans tag with text content. #}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"set"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"body_text"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"trans"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}"),e("span",{style:{color:"#DBD7CA"}},"Read more at: "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"url"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endtrans"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endset"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"set"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"comments"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#E0A569"}},"length"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"trans"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}"),e("span",{style:{color:"#DBD7CA"}}," comment was deleted successfully.")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"plural"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}"),e("span",{style:{color:"#DBD7CA"}}," comments were deleted successfully.")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endtrans"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"{# Test trans filter. #}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Hello Earth.'"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"trans "),e("span",{style:{color:"#8E8F8B"}},"}}")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"{# Test trans tag with text content. #}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"set"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"body_text"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"trans"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}"),e("span",{style:{color:"#393A34"}},"Read more at: "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"url"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endtrans"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endset"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"set"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"comments"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#B58451"}},"length"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"trans"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}"),e("span",{style:{color:"#393A34"}}," comment was deleted successfully.")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"plural"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}"),e("span",{style:{color:"#393A34"}}," comments were deleted successfully.")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endtrans"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")])])])],-1),J_={__name:"7",setup(n){const t={srcSequence:"./section-1.md"};return $(O),(s,o)=>{const a=Cn;return x(),j(he,Q(X(t)),{default:M(()=>[L_,H_,z(a,Le({},{ranges:[""]}),{default:M(()=>[R_]),_:1},16)]),_:1},16)}}},K_=e("h1",null,"Translate with i18n",-1),q_=e("p",null,"Translate a sentence with t() function and variables that allow us to place the var in alternative position",-1),W_=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"sentence_translation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},"t"),e("span",{style:{color:"#858585"}},"(")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#C98A7D"}},`'No crop types available. <a href="@link">Add crop type</a>.'`),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Sentence")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@link'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"urlGenerator"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"generateFromRoute"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'crop.type_add'"),e("span",{style:{color:"#858585"}},"),]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Dynamic value")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"sentence_translation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#6C7834"}},"t"),e("span",{style:{color:"#8E8F8B"}},"(")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959"}},`'No crop types available. <a href="@link">Add crop type</a>.'`),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Sentence")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@link'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"urlGenerator"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"generateFromRoute"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'crop.type_add'"),e("span",{style:{color:"#8E8F8B"}},"),]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Dynamic value")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),U_={__name:"8",setup(n){const t={srcSequence:"./section-1.md"};return $(O),(s,o)=>{const a=Cn;return x(),j(he,Q(X(t)),{default:M(()=>[K_,q_,z(a,Le({},{ranges:[""]}),{default:M(()=>[W_]),_:1},16)]),_:1},16)}}},z_="/assets/2022-09-21-20-08-11.e8a0dc7f.png",Y_="/assets/2022-09-21-18-28-37.97bc20e5.png",V_=e("h1",null,"Translate with i18n",-1),G_=e("p",null,"And translate with context",-1),Z_=e("div",{class:"grid grid-cols-2"},[e("div",null,[e("div",null,"noun. as a section label: \u9023\u7D61\u5148"),e("img",{class:"h-36 mt-4",src:z_})]),e("div",null,[e("div",null,"verb. as an action: \u30B3\u30F3\u30BF\u30AF\u30C8"),e("img",{class:"h-36 mt-4",src:Y_})])],-1),X_=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"labels"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#C98A7D"}},"'contact_action'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"t"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Contact'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[],"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'context'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'As an action'"),e("span",{style:{color:"#858585"}},"]),")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#C98A7D"}},"'contact_section'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"t"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Contact'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[],"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'context'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'As a section label'"),e("span",{style:{color:"#858585"}},"]),")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"];")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"labels"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959"}},"'contact_action'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"t"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Contact'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[],"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'context'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'As an action'"),e("span",{style:{color:"#8E8F8B"}},"]),")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959"}},"'contact_section'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"t"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Contact'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[],"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'context'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'As a section label'"),e("span",{style:{color:"#8E8F8B"}},"]),")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"];")])])])],-1),Q_={__name:"9",setup(n){const t={srcSequence:"./section-1.md"};return $(O),(s,o)=>{const a=Cn;return x(),j(he,Q(X(t)),{default:M(()=>[V_,G_,Z_,z(a,Le({},{ranges:[""]}),{default:M(()=>[X_]),_:1},16),se(`

<CodeBlockWrapper v-bind="{}" :ranges='[""]'>

\`\`\`json
//ja.po

msgctxt "As an action"
msgid "Contact"
msgstr "\u30B3\u30F3\u30BF\u30AF\u30C8"

msgctxt "As a section label"
msgid "Contact"
msgstr "\u9023\u7D61\u5148"
\`\`\`

</CodeBlockWrapper>
`)]),_:1},16)}}},e5=e("div",{class:"hidden"}," # ===== Beyond i18n ===== ",-1),n5=e("div",{class:"absolute top-10"},[e("span",{class:"font-700"})],-1),t5=e("div",{class:"absolute bottom-10"},[e("h1",null,"Beyond i18n"),e("p",null,"translation and design")],-1),s5={__name:"10",setup(n){const t={layout:"intro-image",image:"/images/cover-beyond-i18n-edho-pratama.png",srcSequence:"./section-2.md"};return $(O),(s,o)=>(x(),j(ht,Q(X(t)),{default:M(()=>[e5,n5,t5,se(`
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
`)]),_:1},16))}},o5=e("h1",{class:"hidden"}," # \u4FE1\u9054\u96C5 ",-1),a5=e("div",{class:"absolute bottom-10 text-5xl leading-normal"},[e("h1",{class:"text-3xl leading-loose"},'"There three difficultites in translation:'),e("div",null,[e("b",{class:"text-pink-700"},"\u4FE1 "),d("Faithfulness, ")]),e("div",null,[e("b",{class:"text-pink-700"},"\u9054 "),d("Expressiveness and ")]),e("div",null,[e("b",{class:"text-pink-700"},"\u96C5 "),d('Elegance" ')]),e("em",{class:"text-xl"},"by Yen Fu")],-1),r5={__name:"11",setup(n){const t={srcSequence:"./section-2.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[o5,a5,se(`
Yen Fu (simplified Chinese: \u4E25\u590D; traditional Chinese: \u56B4\u5FA9; pinyin: Y\xE1n F\xF9; 8 January 1854 \u2014 27 October 1921) 
`)]),_:1},16))}},l5=e("h1",null,"Translation ratio",-1),i5=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Lang"),e("th",null,"Text"),e("th",null,"ratio")])]),e("tbody",null,[e("tr",null,[e("td",null,"English"),e("td",null,"Translate"),e("td",null,"100%")]),e("tr",null,[e("td",null,"Deutsch"),e("td",null,"\xDCbersetzen"),e("td",null,[e("span",{class:"text-red-600"},"127%")])]),e("tr",null,[e("td",null,"Czech"),e("td",null,"P\u0159elo\u017Eit"),e("td",null,[e("span",{class:"text-green-600"},"81%")])]),e("tr",null,[e("td",null,"Chinese"),e("td",null,"\u7FFB\u8B6F"),e("td",null,[e("span",{class:"text-green-600"},"45%")])]),e("tr",null,[e("td",null,"Japanese"),e("td",null,"\u7FFB\u8A33\u3059\u308B"),e("td",null,[e("span",{class:"text-green-600"},"91%")])]),e("tr",null,[e("td",null,"Korean"),e("td",null,"\uBC88\uC5ED\uD558\uB2E4"),e("td",null,[e("span",{class:"text-green-600"},"83%")])])])],-1),c5={__name:"12",setup(n){const t={srcSequence:"./section-2.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[l5,i5,se(`
3 things to keep in mind when designing UI to be translated in different languages
https://blog.prototypr.io/3-things-to-keep-in-mind-when-designing-ui-to-be-translated-in-different-languages-e1d02accf21c
`),se(`
websites and apps
Most of the latest CMS platforms are now translation friendly and built to handle the expansion and contraction that comes with translations. Developers are creating global-ready apps that are designed to accommodate localization for other countries, languages, and cultures.

Despite the capabilities of web and app development to accommodate multiple languages, it is worth considering a final round of post-localization review. Linguists will review your site and/or app to ensure the appropriate translations were used, have been placed properly, fit the space, and function according to the developer\u2019s specifications.

// https://eriksen.com/language/text-expansion/

`)]),_:1},16))}},p5=e("h1",null,"Translation ratio",-1),u5=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Lang"),e("th",null,"Text"),e("th",null,"width"),e("th",null,"ratio")])]),e("tbody",null,[e("tr",null,[e("td",null,"English"),e("td",null,"Password field is required."),e("td",null,"225px"),e("td",null,"100%")]),e("tr",null,[e("td",null,"Deutsch"),e("td",null,"Das Passwortfeld muss ausgef\xFCllt werden."),e("td",null,"363px"),e("td",null,[e("span",{class:"text-red-600"},"161%")])]),e("tr",null,[e("td",null,"Czech"),e("td",null,"Heslo je vy\u017Eadov\xE1no."),e("td",null,"182px"),e("td",null,[e("span",{class:"text-green-600"},"81%")])]),e("tr",null,[e("td",null,"Chinese"),e("td",null,"\u5FC5\u9808\u586B\u5BEB\u5BC6\u78BC\u6B04\u4F4D\u3002"),e("td",null,"160px"),e("td",null,[e("span",{class:"text-green-600"},"71%")])]),e("tr",null,[e("td",null,"Japanese"),e("td",null,"\u30D1\u30B9\u30EF\u30FC\u30C9\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5165\u529B\u306F\u5FC5\u9808\u3067\u3059\u3002"),e("td",null,"338px"),e("td",null,[e("span",{class:"text-red-600"},"150%")])]),e("tr",null,[e("td",null,"Korean"),e("td",null,"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC57C \uD569\uB2C8\uB2E4."),e("td",null,"215px"),e("td",null,[e("span",{class:"text-green-600"},"95%")])])])],-1),d5={__name:"13",setup(n){const t={srcSequence:"./section-2.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[p5,u5]),_:1},16))}},h5="/assets/translation-ratio.cc08578d.png",f5=e("h1",null,"Expansion / Contraction",-1),m5=e("p",null,[e("a",{href:"https://www.linkedin.com/pulse/text-expansion-contraction-translation-jennifer-murphy",target:"_blank",rel:"noopener"},"https://www.linkedin.com/pulse/text-expansion-contraction-translation-jennifer-murphy")],-1),g5=e("div",null,[e("img",{src:h5,class:"w-4/5"})],-1),y5={__name:"14",setup(n){const t={srcSequence:"./section-2.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[f5,m5,g5]),_:1},16))}},v5="/assets/hp-variation-en.1fc940cc.png",_5="/assets/hp-variation-ja.d5f45856.png",w5=e("h1",null,"Design with translation in mind",-1),b5=e("div",{class:"flex flex-col overflow-y-scroll mb-4"},[e("div",{class:"grid grid-cols-2 gap-2 h-100"},[e("img",{src:v5}),e("img",{src:_5})])],-1),x5=e("div",{class:"text-center margin-auto text-gray-500/80"}," Scroll \u2B65 ",-1),A5={__name:"15",setup(n){const t={srcSequence:"./section-2.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[w5,b5,x5]),_:1},16))}},C5="/assets/2022-08-28-23-29-07.f0dfb605.png",B5=e("h1",null,"Natural Language Forms",-1),k5=e("p",null,[e("img",{src:C5,alt:""})],-1),D5={__name:"16",setup(n){const t={srcSequence:"./section-2.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[B5,k5]),_:1},16))}};const _u=n=>(op("data-v-7c9bbd06"),n=n(),ap(),n),E5=_u(()=>e("h1",null,"Natural Language Forms",-1)),S5=_u(()=>e("div",{class:"flex flex-col text-xl mt-12 text-gray-500"},[e("div",{class:"leading-16"},[e("h2",{class:"text-gray-700 mb-4"},"English"),d(" My name is "),e("span",{class:"px-3 py-2 bg-gray-200 text-gray-900"},[d("Sophia "),e("span",{class:"n1"},"\u2776")]),d(" and I'd like to depart "),e("span",{class:"px-3 py-2 bg-gray-200 text-gray-900"},[d("Sydney "),e("span",{class:"n2"},"\u2777")]),d(" city on "),e("span",{class:"px-3 py-2 bg-gray-200 text-gray-900"},[d("Thursday "),e("span",{class:"n3"},"\u2778")]),d(" and arrive in "),e("span",{class:"px-3 py-2 bg-gray-200 text-gray-900"},[d("Melbourne "),e("span",{class:"n4"},"\u2779")]),d(" city. ")]),e("div",{class:"mt-12 leading-12"},[e("h2",{class:"text-gray-700 mb-4"},"Fran\xE7ais"),d(" Je m'appelle "),e("span",{class:"px-3 py-2 bg-gray-200 text-gray-900"},[d("Sophia "),e("span",{class:"n1"},"\u2776")]),d(" et je voudrais quitter la ville de "),e("span",{class:"px-3 py-2 bg-gray-200 text-gray-900"},[d("Sydney "),e("span",{class:"n2"},"\u2777")]),d(" le "),e("span",{class:"px-3 py-2 bg-gray-200 text-gray-900"},[d("jeudi "),e("span",{class:"n3"},"\u2778")]),e("br"),d(" et arriver \xE0 la ville de "),e("span",{class:"px-3 py-2 bg-gray-200 text-gray-900"},[d("Melbourne "),e("span",{class:"n4"},"\u2779")])])],-1)),T5={__name:"17",setup(n){const t={srcSequence:"./section-2.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[E5,S5]),_:1},16))}},I5=na(T5,[["__scopeId","data-v-7c9bbd06"]]);const wu=n=>(op("data-v-c9bee724"),n=n(),ap(),n),$5=wu(()=>e("h1",null,"Natural Language Forms",-1)),F5=wu(()=>e("div",{class:"flex flex-col text-xl mt-12 text-gray-500"},[e("div",{class:"leading-16"},[e("h2",{class:"text-gray-700 mb-4"},"Deutsch"),d(" Mein Name ist "),e("span",{class:"px-3 py-2 bg-gray-200 text-gray-900"},[d("Sophia "),e("span",{class:"n1"},"\u2776")]),d(" und ich m\xF6chte am "),e("span",{class:"px-3 py-2 bg-gray-200 text-gray-900"},[d("Donnerstag "),e("span",{class:"n3"},"\u2778")]),d(" in "),e("span",{class:"px-3 py-2 bg-gray-200 text-gray-900"},[d("Sydney "),e("span",{class:"n2"},"\u2777")]),d(" abreisen und in "),e("span",{class:"px-3 py-2 bg-gray-200 text-gray-900"},[d("Melbourne "),e("span",{class:"n4"},"\u2779")]),d(" ankommen. ")]),e("div",{class:"mt-12 leading-12"},[e("h2",{class:"text-gray-700 mb-4"},"\u65E5\u672C\u8A9E"),d(" \u79C1\u306E\u540D\u524D\u306F "),e("span",{class:"px-3 py-2 bg-gray-200 text-gray-900"},[d("\u738B\u5927\u660E "),e("span",{class:"n1"},"\u2776")]),d(" \u3067\u3059\uFF0C "),e("span",{class:"px-3 py-2 bg-gray-200 text-gray-900"},[d("\u6728\u66DC\u65E5 "),e("span",{class:"n3"},"\u2778")]),d(" \u306B\u3001 "),e("span",{class:"px-3 py-2 bg-gray-200 text-gray-900"},[d("\u96EA\u68A8 "),e("span",{class:"n2"},"\u2777")]),d(" \u3092\u51FA\u767A\u3057\u3066 "),e("span",{class:"px-3 py-2 bg-gray-200 text-gray-900"},[d("\u58A8\u723E\u672C "),e("span",{class:"n4"},"\u2779")]),d(" \u306B\u5230\u7740\u3057\u305F\u3044\u3067\u3059\u3002 ")])],-1)),O5={__name:"18",setup(n){const t={srcSequence:"./section-2.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[$5,F5]),_:1},16))}},j5=na(O5,[["__scopeId","data-v-c9bee724"]]),P5=e("div",{class:"hidden"}," # ===== Calendar & Date ===== ",-1),N5=e("div",{class:"absolute top-10"},[e("span",{class:"font-700"})],-1),M5=e("div",{class:"absolute bottom-10"},[e("h1",null,"Calendar"),e("p",null,"translation and design")],-1),L5={__name:"19",setup(n){const t={layout:"intro-image",image:"/images/calendar-sept-estee-janssens.jpg",srcSequence:"./section-3.md"};return $(O),(s,o)=>(x(),j(ht,Q(X(t)),{default:M(()=>[P5,N5,M5,se(`
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
`)]),_:1},16))}},H5="/assets/2022-09-08-15-49-06.f91cf473.png",R5=e("h1",null,"Gregorian Calendar",-1),J5=e("div",{class:"flex flex-row flex-wrap justify-center"},[e("img",{src:H5,class:"h-110 w-auto"})],-1),K5={__name:"20",setup(n){const t={srcSequence:"./section-3.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[R5,J5]),_:1},16))}},q5={class:"slidev-layout center h-full grid place-content-center fact"},W5={class:"my-auto"},eo={__name:"fact",setup(n){return $(O),(t,s)=>(x(),W("div",q5,[e("div",W5,[wn(t.$slots,"default")])]))}},U5=e("h1",null,"9/12/2022",-1),z5=e("p",null,[e("span",{class:"text-blue-400"},"Sep. 12"),d(" vs. "),e("span",{class:"text-teal-400"},"Dec. 9")],-1),Y5={__name:"21",setup(n){const t={layout:"fact",srcSequence:"./section-3.md"};return $(O),(s,o)=>(x(),j(eo,Q(X(t)),{default:M(()=>[U5,z5]),_:1},16))}},V5=e("h1",null,"YYYY-mm-dd",-1),G5=e("p",null,"ISO 8601 Formats",-1),Z5={__name:"22",setup(n){const t={layout:"fact",srcSequence:"./section-3.md"};return $(O),(s,o)=>(x(),j(eo,Q(X(t)),{default:M(()=>[V5,G5]),_:1},16))}},X5=e("div",{class:"hidden"}," # JP/TW Date format using Gregorian Calendar ",-1),Q5=e("h1",{class:"!text-7xl"},[d(" YYYY"),e("span",{class:"text-blue-400"},"\u5E74"),d("mm"),e("span",{class:"text-blue-400"},"\u6708"),d("dd"),e("span",{class:"text-blue-400"},"\u65E5")],-1),ew=e("p",null,"\u{1F1EF}\u{1F1F5} Japan \u{1F1F9}\u{1F1FC} Taiwan",-1),nw={__name:"23",setup(n){const t={layout:"fact",srcSequence:"./section-3.md"};return $(O),(s,o)=>(x(),j(eo,Q(X(t)),{default:M(()=>[X5,Q5,ew]),_:1},16))}};function Qi(n){return n.startsWith("/")?"/"+n.slice(1):n}function tw(n,t=!1){const s=n&&n[0]==="#"&&n.startsWith("rgb"),o={background:s?n:void 0,color:n&&!s?"white":void 0,backgroundImage:s?void 0:n?t?`linear-gradient(#0005, #0008), url(${Qi(n)})`:`url("${Qi(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const el=xe({__name:"image",props:{image:{type:String}},setup(n){const t=n;$(O);const s=D(()=>tw(t.image));return(o,a)=>(x(),W("div",{class:"slidev-layout w-full h-full",style:Ue(b(s))},[wn(o.$slots,"default")],4))}}),sw=e("div",{class:"hidden"}," # Calendar Year - Thailand ",-1),ow={__name:"24",setup(n){const t={layout:"image",image:"/images/2022-08-29-23-18-14.png",srcSequence:"./section-3.md"};return $(O),(s,o)=>(x(),j(el,Q(X(t)),{default:M(()=>[sw]),_:1},16))}},aw=e("div",{class:"hidden"}," # Calendar Year - Taiwan ",-1),rw={__name:"25",setup(n){const t={layout:"image",image:"/images/2022-08-29-23-26-19.png",srcSequence:"./section-3.md"};return $(O),(s,o)=>(x(),j(el,Q(X(t)),{default:M(()=>[aw]),_:1},16))}},lw=e("h1",null,"Calendar Year",-1),iw=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Calendar"),e("th",null,"Year"),e("th",null,"Type")])]),e("tbody",null,[e("tr",null,[e("td",null,"AD"),e("td",null,"2022"),e("td",null,"Gregorian")]),e("tr",null,[e("td",null,"\u0E1E\u0E38\u0E17\u0E18\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A (\u0E1E.\u0E28.) B.E"),e("td",null,"2565"),e("td",null,"Buddhist Era")]),e("tr",null,[e("td",null,"\u6C11\u570B\u3000(m\xEDng g\xFAo)"),e("td",null,"111"),e("td",null,"Label of the Birth Year")]),e("tr",null,[e("td",null,"\u4EE4\u548C\u3000(rei wa)"),e("td",null,"4"),e("td",null,"Imperial Era")])])],-1),cw={__name:"26",setup(n){const t={srcSequence:"./section-3.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[lw,iw]),_:1},16))}},pw=e("h1",null,"Calendar Year",-1),uw=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Calendar"),e("th",null,"Year"),e("th",null,"Calculation")])]),e("tbody",null,[e("tr",null,[e("td",null,"AD"),e("td",null,"2022"),e("td",null,"getYear()")]),e("tr",null,[e("td",null,"\u0E1E\u0E38\u0E17\u0E18\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A (\u0E1E.\u0E28.) B.E"),e("td",null,"2565"),e("td",null,[d("getYear() "),e("span",{class:"text-green-500"},"+ 543")])]),e("tr",null,[e("td",null,"\u6C11\u570B\u3000(m\xEDng g\xFAo)"),e("td",null,"111"),e("td",null,[d("getYear() "),e("span",{class:"text-orange-400"},"- 1911")])]),e("tr",null,[e("td",null,[e("span",{class:"text-red-400"},"\u4EE4\u548C\u3000(rei wa)")]),e("td",null,"4"),e("td",null,[d("getYear() "),e("span",{class:"text-orange-400"},"- 2018")])])])],-1),dw={__name:"27",setup(n){const t={srcSequence:"./section-3.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[pw,uw]),_:1},16))}},hw="/assets/permission_spanish_synagoge.5dafe058.jpg",fw=e("h1",null,"Imperial Era in Japan",-1),mw=e("div",{class:"grid grid-cols-2 gap-4"},[e("div",{class:"flex flex-col justify-center text-gray-500 dark:text-gray-400"},[e("h2",{class:"text-gray-900 dark:text-gray-100"},"R. Weinstein"),e("small",{class:"text-lg"},"Doctor"),e("p",{class:"text-xl"},[d("A pass issued to leave the Shanghai ghetto in 1945. "),e("br"),e("span",{class:"text-sm"},"JMP, Oral History Collection, No. 549 (copy)")]),e("h2",{class:"text-gray-900 dark:text-gray-100"},[d("Initially valid from "),e("br"),d("\u662D\u548C 18 \u5E74 2 \u6708 29 \u65E5")])]),e("div",null,[e("img",{src:hw,class:"h-96 w-auto"})])],-1),gw={__name:"28",setup(n){const t={srcSequence:"./section-3.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[fw,mw]),_:1},16))}},yw="/images/imperial-year-jp.png",vw=e("h1",null,"Imperial Era in Japan",-1),_w=e("div",{class:"flex flex-row"},[e("div",{class:"flex flex-col flex-grow justify-center"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Imperial Era"),e("th",null,"Year range")])]),e("tbody",null,[e("tr",null,[e("td",null,"\u662D\u548C Sh\u014Dwa"),e("td",null,"1926 - 1989")]),e("tr",null,[e("td",null,"\u5E73\u6210 Heisei"),e("td",null,"1989 - 2019")]),e("tr",null,[e("td",null,"\u4EE4\u548C Reiwa"),e("td",null,"2019 - Now")])])])]),e("div",{class:"flex-1"},[se(' <img src="/images/2022-09-08-15-43-41.png" class="h-110 w-auto" /> '),e("img",{src:yw,class:"h-110 w-auto"})])],-1),ww={__name:"29",setup(n){const t={srcSequence:"./section-3.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[vw,_w]),_:1},16))}},bw=e("h1",null,"Use CLDR to convert the date",-1),xw=e("p",null,"The Unicode Common Locale Data Repository (CLDR)",-1),Aw={class:"pt-8"},Cw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Date"),e("span",{style:{color:"#858585"}},"()."),e("span",{style:{color:"#A1B567"}},"toLocaleDateString"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'ja-JP-u-ca-japanese'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"dateStyle"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'long'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// '\u4EE4\u548C4\u5E749\u67089\u65E5'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Date"),e("span",{style:{color:"#858585"}},"()."),e("span",{style:{color:"#A1B567"}},"toLocaleDateString"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'zh-hant-u-ca-roc'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"dateStyle"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'long'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// '\u6C11\u570B111\u5E749\u67089\u65E5'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Date"),e("span",{style:{color:"#858585"}},"()."),e("span",{style:{color:"#A1B567"}},"toLocaleDateString"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'th-u-ca-BE'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"dateStyle"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'full'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// '\u0E27\u0E31\u0E19\u0E28\u0E38\u0E01\u0E23\u0E4C\u0E17\u0E35\u0E48 9 \u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19 \u0E1E.\u0E28. 2565'")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Date"),e("span",{style:{color:"#8E8F8B"}},"()."),e("span",{style:{color:"#6C7834"}},"toLocaleDateString"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'ja-JP-u-ca-japanese'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"dateStyle"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'long'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"})")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// '\u4EE4\u548C4\u5E749\u67089\u65E5'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Date"),e("span",{style:{color:"#8E8F8B"}},"()."),e("span",{style:{color:"#6C7834"}},"toLocaleDateString"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'zh-hant-u-ca-roc'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"dateStyle"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'long'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"})")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// '\u6C11\u570B111\u5E749\u67089\u65E5'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Date"),e("span",{style:{color:"#8E8F8B"}},"()."),e("span",{style:{color:"#6C7834"}},"toLocaleDateString"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'th-u-ca-BE'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"dateStyle"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'full'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"})")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// '\u0E27\u0E31\u0E19\u0E28\u0E38\u0E01\u0E23\u0E4C\u0E17\u0E35\u0E48 9 \u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19 \u0E1E.\u0E28. 2565'")])])])],-1),Bw={__name:"30",setup(n){const t={srcSequence:"./section-3.md"};return $(O),(s,o)=>{const a=Cn;return x(),j(he,Q(X(t)),{default:M(()=>[bw,xw,e("div",Aw,[z(a,Le({},{ranges:[""]}),{default:M(()=>[Cw]),_:1},16)])]),_:1},16)}}},kw=e("div",{class:"hidden"}," # ===== Issue in CJK: Typing ===== ",-1),Dw=e("div",{class:"absolute top-10"},[e("span",{class:"font-700"})],-1),Ew=e("div",{class:"absolute bottom-10"},[e("h1",null,"CJK"),e("p",null,"Exclusive issue in CJK")],-1),Sw={__name:"31",setup(n){const t={layout:"intro-image",image:"/images/cjk-cover-left.png",imageTopRight:"images/cjk-cover-right-top.png",imageBottomRight:"images/cjk-cover-right-bottom.png",srcSequence:"./section-4.md"};return $(O),(s,o)=>(x(),j(ht,Q(X(t)),{default:M(()=>[kw,Dw,Ew,se(`
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
`)]),_:1},16))}},Tw="/images/SyI343.mp4",Iw=e("h1",null,"Autocomplete search suggestion",-1),$w=e("p",null,"What can you see?",-1),Fw=e("video",{controls:""},[e("source",{src:Tw,type:"video/mp4"})],-1),Ow={__name:"32",setup(n){const t={srcSequence:"./section-4.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[Iw,$w,Fw]),_:1},16))}},jw=e("h1",null,"CJK Paragraph",-1),Pw=e("hr",null,null,-1),Nw=e("div",{class:"grid grid-cols-3 gap-4 items-start text-sm mt-4"},[e("div",null,[e("h2",null,"\u6211\u662F COVID-19 \u78BA\u8A3A\u500B\u6848\uFF0C\u61C9\u8A72\u8981\u6CE8\u610F\u751A\u9EBC:"),e("p",null,"\u5927\u90E8\u5206\u7684 COVID-19 \u611F\u67D3\u8005\u75C7\u72C0\u8F15\u5FAE\uFF0C\u4F11\u990A\u5F8C\u5373\u53EF\u81EA\u884C\u5EB7\u5FA9\uFF0C\u70BA\u4E86\u5C07\u91AB\u7642\u8CC7\u6E90\u7559 \u7D66\u91CD\u75C7\u60A3\u8005\uFF0C\u8ACB\u60A8\u5148\u7559\u5728\u5BB6\u4E2D\u4E0D\u8981\u96E2\u958B\uFF0C\u7B49\u5019\u516C\u885B\u4EBA\u54E1\u901A\u77E5\u3002"),e("p",null,"\u52D9\u5FC5\u89C0\u5BDF\u81EA\u8EAB\u75C7\u72C0\u8B8A\u5316\uFF0C\u82E5\u51FA\u73FE\u4EE5\u4E0B\u75C7\u72C0\u6642\uFF0C\u8ACB\u7ACB\u5373\u901A\u77E5\u6240\u5728\u5730\u653F\u5E9C\u885B\u751F\u5C40\u6216\u64A5\u6253 119 \u5C31\u91AB\uFF0C\u4EE5 119 \u6551\u8B77\u8ECA\u70BA\u539F\u5247\u6216\u6307\u793A\u4E4B\u9632\u75AB\u8A08\u7A0B\u8ECA\u3001\u540C\u4F4F\u89AA\u53CB\u63A5\u9001\u6216\u81EA\u884C\u524D\u5F80 (\u5982\u6B65\u884C\u3001 \u81EA\u884C\u99D5/\u9A0E\u8ECA)\u7B49\u65B9\u5F0F\u70BA\u8F14\uFF1A\u5598\u3001\u547C\u5438\u56F0\u96E3\u3001\u6301\u7E8C\u80F8\u75DB\u3001\u80F8\u60B6\u3001\u610F\u8B58\u4E0D\u6E05\u3001 \u76AE\u819A\u6216\u5634\u5507\u6216\u6307\u7532\u5E8A\u767C\u9752\u3002")]),e("div",null,[e("h2",null,"\uBCF4\uAC74\uC18C\uC5D0\uC11C \uCF54\uB85C\uB09819 \uC591\uC131 \uD1B5\uBCF4\uB97C \uBC1B\uC558\uB2E4\uBA74, \uC774\uB807\uAC8C \uD558\uC138\uC694"),e("p",null,"\uAC80\uCCB4\uCC44\uCDE8\uC77C\uB85C\uBD80\uD130 7\uC77C\uAE4C\uC9C0\uB294 \uD0C0\uC778\uC5D0\uAC8C \uBC14\uC774\uB7EC\uC2A4\uB97C \uC804\uC5FC\uC2DC\uD0AC \uC704\uD5D8\uC774 \uC788\uC5B4 \uACA9\uB9AC\uD569\uB2C8\uB2E4. \uC624\uBBF8\uD06C\uB860 \uBCC0\uC774\uB294 \uB378\uD0C0 \uBCC0\uC774\uBCF4\uB2E4 \uC911\uC99D\uB3C4\uAC00 \uB0AE\uC73C\uBBC0\uB85C \uC99D\uC0C1\uC774 \uC5C6\uAC70\uB098 \uACBD\uC99D\uC778 \uACBD\uC6B0 \uD574\uC5F4\uC81C, \uAC10\uAE30\uC57D \uBCF5\uC6A9 \uB4F1 \uB300\uC99D\uCE58\uB8CC\uB85C \uD68C\uBCF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. [\uCF54\uB85C\uB09819\uC640 \uC624\uBBF8\uD06C\uB860 \uBCC0\uC774] \uBC14\uB85C\uAC00\uAE30"),e("p",null,"\uBC1C\uC5F4 \uB4F1 \uC99D\uC0C1\uC73C\uB85C \uC9C4\uB8CC\uAC00 \uD544\uC694\uD558\uBA74, \uC678\uB798\uC9C4\uB8CC\uC13C\uD130 \uB300\uBA74\uC9C4\uB8CC \uB610\uB294 \uC804\uD654 \uC0C1\uB2F4\xB7\uCC98\uBC29\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uAC10\uC5FC\uC804\uD30C \uBC29\uC9C0\uB97C \uC704\uD574 \uC678\uCD9C\uD558\uC9C0 \uB9D0\uACE0 \uAC00\uAE09\uC801 \uC9D1\uC5D0 \uBA38\uBB34\uB974\uBA70, \uD654\uC7A5\uC2E4\u2027\uBB3C\uAC74 \uB4F1\uC740 \uB3D9\uAC70\uC778\uACFC \uB530\uB85C \uC0AC\uC6A9\uD558\uACE0 \uC790\uC8FC \uC18C\uB3C5\uD574\uC57C \uD569\uB2C8\uB2E4.[\uCCAD\uC18C\uC640\uC18C\uB3C5] \uBC14\uB85C\uAC00\uAE30")]),e("div",null,[e("h2",null,"\u65B0\u578B\u30B3\u30ED\u30CA\u30A6\u30A4\u30EB\u30B9\u611F\u67D3\u75C7\u3001\u75C7\u72B6\u304C\u3042\u308B\u65B9\u306F\u305F\u3081\u3089\u308F\u305A\u306B\u9023\u7D61\u3092\uFF01"),e("p",null,"\u5BBF\u6CCA\u7642\u990A\u30FB\u81EA\u5B85\u7642\u990A\u8005\u30A2\u30F3\u30B1\u30FC\u30C8\u8ABF\u67FB\u306B\u3088\u3063\u3066\u3001\u4E16\u4EE3\u3092\u554F\u308F\u305A\u591A\u304F\u306E\u65B9\u304C\u3001\u30B3\u30ED\u30CA\u611F\u67D3\u304C\u5224\u660E\u3059\u308B\u524D\u304B\u3089\u3001 \u3010\u767A\u71B1\u3001\u982D\u75DB\u3001\u4F53\u306E\u3060\u308B\u3055\u3001\u305B\u304D\u3001\u306E\u3069\u306E\u75DB\u307F\u3011\u3068\u3044\u3063\u305F\u81EA\u899A\u75C7\u72B6\u3092\u8A34\u3048\u3066\u3044\u305F\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3057\u305F\u3002"),e("p",null,"\u3053\u308C\u3089\u306E\u75C7\u72B6\u3092\u8907\u6570\u611F\u3058\u3001\u4E0D\u5B89\u306B\u601D\u3063\u305F\u3068\u304D\u306F\u3001\u3069\u3046\u305E\u305F\u3081\u3089\u308F\u305A\u3001\u300C\u304B\u304B\u308A\u3064\u3051\u533B\u30FB\u8EAB\u8FD1\u306A\u533B\u7642\u6A5F\u95A2\u300D\u3084\u300C\u767A\u71B1\u76F8\u8AC7\u30BB\u30F3\u30BF\u30FC\u300D\u3078\u3054\u9023\u7D61\u3001\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002")])],-1),Mw={__name:"33",setup(n){const t={srcSequence:"./section-4.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[jw,Pw,Nw]),_:1},16))}},Lw="/assets/2022-09-09-14-35-49.ba822139.png",Hw="/assets/2022-09-09-14-36-35.fb077c3b.png",Rw="/assets/2022-09-09-14-44-38.41dccb3a.png",Jw="/assets/2022-09-09-14-46-18.79b98880.png",Kw="/assets/2022-09-09-14-39-25.5c11bc56.png",qw="/assets/2022-09-09-14-41-00.d86c8a5a.png",Ww=e("h1",null,"Input method",-1),Uw=e("div",{class:"grid grid-cols-4 gap-2 items-end"},[e("div",null,[e("img",{src:Lw})]),e("div",null,[e("img",{src:Hw})]),e("div",null,[e("img",{src:Rw})]),e("div",null,[e("img",{src:Jw})]),e("div",null,[e("img",{src:Kw})]),e("div",{class:"col-span-2"},[e("img",{src:qw})])],-1),zw={__name:"34",setup(n){const t={srcSequence:"./section-4.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[Ww,Uw]),_:1},16))}},Yw=e("h1",null,"Input method",-1),Vw=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Keyword"),e("th",null,"Segments"),e("th",null,"Segments")])]),e("tbody",null,[e("tr",null,[e("td",null,"Computer"),e("td"),e("td",null,"8")]),e("tr",null,[e("td",null,"\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC (konpy\u016Bt\u0101)"),e("td",null,"kon pyu- ta-"),e("td",null,"10")]),e("tr",null,[e("td",null,"\u96FB\u8166 (di\xE0nn\u01CEo)"),e("td",null,"\u3109\u4E00\u3122\u02CB \u310B\u3120\u02C7"),e("td",null,"7")]),e("tr",null,[e("td",null,"\u8BA1\u7B97\u673A (j\xECsu\xE0nj\u012B)"),e("td",null,"jisuanji / jsj"),e("td",null,"8 / 3")])])],-1),Gw={__name:"35",setup(n){const t={srcSequence:"./section-4.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[Yw,Vw]),_:1},16))}},Zw="/images/vjS5Xr.mp4",Xw=e("h1",null,"Autocomplete search suggestion",-1),Qw=e("p",null,[d("What is "),e("span",{class:"bg-green-300 p-1"},"improved"),d("?")],-1),eb=e("video",{controls:""},[e("source",{src:Zw,type:"video/mp4"})],-1),nb={__name:"36",setup(n){const t={srcSequence:"./section-4.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[Xw,Qw,eb,se(` Configuration 
composition events https://github.com/oist/oist-www/issues94#issuecomment-1009660884
`)]),_:1},16))}},tb=e("h1",null,"CompositionEvent",-1),sb=e("p",null,[d("Implement "),e("code",null,"CompositionEvent"),d(" to avoid trigger search too early.")],-1),ob={class:"grid grid-row-2 grid-col-2 gap-2"},ab=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"inputElement"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"on"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'input, compositinoend'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"event"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"event"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"type"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'compositionend'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"compositionActive"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"false"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"compositionActive"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"//...do autocomplete AJAX call")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"})."),e("span",{style:{color:"#A1B567"}},"on"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'compositionstart'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"compositionActive"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},";")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"})."),e("span",{style:{color:"#A1B567"}},"on"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'compositionupdate'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"compositionActive"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},";")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"})")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"inputElement"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"on"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'input, compositinoend'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"event"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"event"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"type"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'compositionend'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"compositionActive"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"false"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"compositionActive"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"//...do autocomplete AJAX call")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"})."),e("span",{style:{color:"#6C7834"}},"on"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'compositionstart'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"compositionActive"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"})."),e("span",{style:{color:"#6C7834"}},"on"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'compositionupdate'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"compositionActive"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"})")])])])],-1),rb=e("div",null,[e("p",null,[e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent",target:"_blank",rel:"noopener"},"MDN Web API")]),e("p",null,[e("a",{href:"https://www.drupal.org/project/drupal/issues/2823589",target:"_blank",rel:"noopener"},"Core #2823589: Improve IME handling on Autocomplete")])],-1),lb=e("iframe",{class:"col-span-2 bg-blue-600/30 p-4 w-full",src:"https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/compositionstart_event/_sample_.live_example.html",width:"960",height:"480"},null,-1),ib={__name:"37",setup(n){const t={srcSequence:"./section-4.md"};return $(O),(s,o)=>{const a=Cn;return x(),j(he,Q(X(t)),{default:M(()=>[tb,sb,e("div",ob,[e("div",null,[z(a,Le({},{ranges:["all","7-11","2-3","2-5"]}),{default:M(()=>[ab]),_:1},16)]),rb,lb]),se(` 
  // TODO find the trace of autocomplete js in Drupal 8 or even 7
  how did Drupal handle the composition events before.
  Japaense user gets angry when the form is submitting while confirming the kanji words.

  [Improve IME handling on Autocomplete](https://www.drupal.org/project/drupal/issues/2823589)
  

`),se(`
(function ($) {
  'use strict';
  const autocompleteDropdownSelector = '.oist-search-form ul';
  Drupal.behaviors.searchAutocomplete = {
    attach: function (context, settings) {
      $('.oist-search-form input').once('autocomplete').on('input', function () {
        const keyword = $(this).val();
        $(autocompleteDropdownSelector).remove();
        if (keyword.length < 2) {
          return;
        }
        $.ajax({
          url: settings.searchBaseUrl + encodeURIComponent(keyword) + '?sort=relevancy&order=desc&number=5&language=' + settings.language + '&startdate=&enddate=&preview=5',
          crossDomain: true,
          success: function (data) {
            // $(autocompleteDropdownSelector).remove();
            var results = '<div class="search-result-list bg-white px-4">';
            results += '<ul class="border-t border-gray-400 w-full pt-2">';
            for (var i in data) {
              if (data[i].site === 'www' || data[i].site === 'main') {
                results += '<li class="pb-3"><a class="text-gray-700 underline js-search-autocomplete ' + data[i].site + '" href="' + data[i].link + '">' + data[i].title + '</a></li>';
              }
              else {
                results += '<li class="pb-3"><a class="flex items-center gap-x-2 text-gray-700 js-search-autocomplete ' + data[i].site + '" href="' + data[i].link + '"><i class="fa fa-external-link" aria-hidden="true"></i><span class="underline">' + data[i].title + '</span></a></li>';
              }
            }
            results += '</ul></div>';
            if ($('.oist-mobile-search').hasClass('active')) {
              $('.oist-mobile-search .oist-search-results-attach').after(results);
            }
            else {
              $('.oist-desktop-search').after(results);
            }
          },
        });
      }).focusout(function () {
        // Generally when we lose focus from the search box,
        // we would like to hide the suggestions.
        // However, if the user clicks on a result, if we remove the markup
        // the click would fail. That's why we make this exception for the link
        // clicks.
        var selected = $('.js-search-autocomplete:hover');
        if (selected.length) {
          return;
        }
        // $(autocompleteDropdownSelector).remove();
      });
    }
  };
})(jQuery);
`)]),_:1},16)}}},cb=e("div",{class:"hidden"}," # ===== Issue in CJK: Sorting ===== ",-1),pb=e("div",{class:"absolute top-10"},[e("span",{class:"font-700"})],-1),ub=e("div",{class:"absolute bottom-10"},[e("h1",{class:"text-blue-800"},"Sorting"),e("p",{class:"text-blue-500"},"Color, Shape, Size?")],-1),db={__name:"38",setup(n){const t={layout:"intro-image",image:"/images/sorting-soraya-irving.jpg",srcSequence:"./section-5.md"};return $(O),(s,o)=>(x(),j(ht,Q(X(t)),{default:M(()=>[cb,pb,ub,se(`
Photo by Soraya Irving on Unsplash
https://unsplash.com/photos/AGtksbL8z2c
`)]),_:1},16))}},ta="/assets/2022-09-04-17-28-34.67c30858.png",hb=e("div",{class:"hidden"}," # Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) ",-1),fb=e("div",{class:"grid grid-cols-2"},[e("div",{class:"flex flex-col justify-center"},[e("h1",null,"\u4E94\u5341\u97F3 (Goj\u016Bon) "),e("h3",null,'Japanese "fifty sounds"')]),e("div",{class:"flex-1"},[e("img",{src:ta,class:"h-124 w-auto"})])],-1),mb={__name:"39",setup(n){const t={srcSequence:"./section-5.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[hb,fb]),_:1},16))}},gb="/assets/2022-09-06-17-51-19.70328ce3.png",yb=e("div",{class:"hidden"}," # Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) ",-1),vb=e("div",{class:"grid grid-cols-[1fr,3fr]"},[e("div",{class:"flex flex-col justify-center"},[e("h1",null,"\u4E94\u5341\u97F3 (Goj\u016Bon) "),e("h3",null,'Japanese "fifty sounds"')]),e("div",{class:"flex-1 flex flex-row space-x-4"},[e("div",null,[e("img",{src:ta,class:"h-118 w-auto"}),e("h4",{class:"mt-2"},"Hiragana")]),e("div",null,[e("img",{src:gb,class:"h-118 w-auto"}),e("h4",{class:"mt-2"},"Katagana")])])],-1),_b={__name:"40",setup(n){const t={srcSequence:"./section-5.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[yb,vb]),_:1},16))}},wb="/images/raku-japanese-character.png",bb=e("div",{class:"hidden"}," # Sorting - \u6F22\u5B57 (Kanji) ",-1),xb=e("div",{class:"grid grid-cols-2"},[e("div",{class:"flex flex-col justify-center"},[e("h1",null,"\u6F22\u5B57 (Kanji)"),e("h3",null,"Characters in Japanese")]),e("div",{class:"flex-1"},[e("img",{src:wb,class:"h-124 w-auto"})])],-1),Ab={__name:"41",setup(n){const t={srcSequence:"./section-5.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[bb,xb]),_:1},16))}},Cb=e("div",{class:"hidden"}," # Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting ",-1),Bb=e("div",{class:"absolute top-10"},[e("h2",null,"\u4E94\u5341\u97F3 (Goj\u016Bon)"),e("h3",null,'Japanese "fifty sounds"')],-1),kb={class:"grid grid-cols-[2fr,1fr] gap-8 mt-8"},Db={class:"flex flex-col justify-center"},Eb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"$array"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u3042\u307E\u30AC\u30DF'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Hiragana")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u30A6\u30A3\u30FC\u30F3'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Katagana")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u837B\u91CE'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Kanji")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u30DE\u30FC\u30C6\u30A3\u30F3'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u3046\u3044\u30FC\u3093'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u4E2D\u6751'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\xDClf'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Latin & Number")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u30EC\u30A2\u30FC\u30C9'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u89D2\u4E2D'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'OKEON'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u4E95\u4E0A'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u85E4\u5CA1'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u4F50\u85E4'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'SHIMA'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u5CA9\u4E0B'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"];")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"$array"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u3042\u307E\u30AC\u30DF'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Hiragana")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u30A6\u30A3\u30FC\u30F3'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Katagana")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u837B\u91CE'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Kanji")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u30DE\u30FC\u30C6\u30A3\u30F3'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u3046\u3044\u30FC\u3093'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u4E2D\u6751'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\xDClf'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Latin & Number")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u30EC\u30A2\u30FC\u30C9'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u89D2\u4E2D'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'OKEON'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u4E95\u4E0A'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u85E4\u5CA1'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u4F50\u85E4'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'SHIMA'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u5CA9\u4E0B'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"];")])])])],-1),Sb=e("div",{class:"flex-1"},[e("img",{src:ta,class:""})],-1),Tb={__name:"42",setup(n){const t={srcSequence:"./section-5.md"};return $(O),(s,o)=>{const a=Cn;return x(),j(he,Q(X(t)),{default:M(()=>[Cb,Bb,e("div",kb,[e("div",Db,[z(a,Le({},{ranges:["all","8,11,15","2,6","3,5,9","4,7,10,12-14,16"]}),{default:M(()=>[Eb]),_:1},16)]),Sb])]),_:1},16)}}},Ib=e("div",{class:"hidden"}," # Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting ",-1),$b=e("div",{class:"absolute top-10"},[e("h2",null,"\u4E94\u5341\u97F3 (Goj\u016Bon)"),e("h3",null,'Japanese "fifty sounds"')],-1),Fb={class:"grid grid-cols-2 gap-8 mt-10"},Ob={class:"flex flex-col justify-end"},jb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"$array"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u3042\u307E\u30AC\u30DF'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Hiragana")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u30A6\u30A3\u30FC\u30F3'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Katagana")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u837B\u91CE'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Kanji")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u30DE\u30FC\u30C6\u30A3\u30F3'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u3046\u3044\u30FC\u3093'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u4E2D\u6751'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\xDClf'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Latin & Number")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u30EC\u30A2\u30FC\u30C9'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u89D2\u4E2D'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'OKEON'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u4E95\u4E0A'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u85E4\u5CA1'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u4F50\u85E4'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'SHIMA'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u5CA9\u4E0B'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"];")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"$array"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u3042\u307E\u30AC\u30DF'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Hiragana")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u30A6\u30A3\u30FC\u30F3'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Katagana")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u837B\u91CE'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Kanji")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u30DE\u30FC\u30C6\u30A3\u30F3'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u3046\u3044\u30FC\u3093'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u4E2D\u6751'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\xDClf'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Latin & Number")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u30EC\u30A2\u30FC\u30C9'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u89D2\u4E2D'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'OKEON'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u4E95\u4E0A'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u85E4\u5CA1'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u4F50\u85E4'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'SHIMA'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u5CA9\u4E0B'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"];")])])])],-1),Pb={class:"flex-1"},Nb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Result")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Array")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"(")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"OKEON")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"SHIMA")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"\xDClf")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"\u3042\u307E\u30AC\u30DF")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"\u3046\u3044\u30FC\u3093")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"\u30A6\u30A3\u30FC\u30F3")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"6"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"\u30DE\u30FC\u30C6\u30A3\u30F3")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"7"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"\u30EC\u30A2\u30FC\u30C9")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"8"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"\u4E2D\u6751")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"9"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"\u4E95\u4E0A")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"\u4F50\u85E4")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"11"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"\u5CA9\u4E0B")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"12"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"\u837B\u91CE")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"13"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"\u85E4\u5CA1")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"14"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"\u89D2\u4E2D")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Result")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"Array")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"(")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"OKEON")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"SHIMA")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"\xDClf")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"\u3042\u307E\u30AC\u30DF")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"\u3046\u3044\u30FC\u3093")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"\u30A6\u30A3\u30FC\u30F3")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"6"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"\u30DE\u30FC\u30C6\u30A3\u30F3")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"7"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"\u30EC\u30A2\u30FC\u30C9")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"8"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"\u4E2D\u6751")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"9"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"\u4E95\u4E0A")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"\u4F50\u85E4")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"11"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"\u5CA9\u4E0B")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"12"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"\u837B\u91CE")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"13"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"\u85E4\u5CA1")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"14"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"\u89D2\u4E2D")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")")])])])],-1),Mb={__name:"43",setup(n){const t={srcSequence:"./section-5.md"};return $(O),(s,o)=>{const a=Cn;return x(),j(he,Q(X(t)),{default:M(()=>[Ib,$b,e("div",Fb,[e("div",Ob,[z(a,Le({},{ranges:[""]}),{default:M(()=>[jb]),_:1},16)]),e("div",Pb,[z(a,Le({},{ranges:["all","4-6","7-8","9-11","12-18","all"]}),{default:M(()=>[Nb]),_:1},16)])])]),_:1},16)}}},Lb=e("div",{class:"hidden"}," # Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting ",-1),Hb=e("div",{class:"absolute top-10"},[e("h2",null,"\u4E94\u5341\u97F3 (Goj\u016Bon)"),e("h3",null,'Japanese "fifty sounds"')],-1),Rb={class:"grid grid-cols-[2fr,1fr] gap-8"},Jb={class:"flex flex-col justify-center"},Kb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// UTF-8")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},'"\u4E2D\u6751"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"\u4E95\u4E0A"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"\u4F50\u85E4"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"\u5CA9\u4E0B"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"\u837B\u91CE"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"\u85E4\u5CA1"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"\u89D2\u4E2D"'),e("span",{style:{color:"#858585"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#D4976C"}},"U"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}},"4"),e("span",{style:{color:"#D4976C"}},"E2D"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"U"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#6394BF"}},"4E95"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"U"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}},"4"),e("span",{style:{color:"#D4976C"}},"F50"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"U"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}},"5"),e("span",{style:{color:"#D4976C"}},"CA9"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"U"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}},"837"),e("span",{style:{color:"#D4976C"}},"B"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"U"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#6394BF"}},"85E4"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"U"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}},"89"),e("span",{style:{color:"#D4976C"}},"D2"),e("span",{style:{color:"#858585"}},"]")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// localeCompare()")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},'"\u4E95\u4E0A"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},'"\u837B\u91CE"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#C98A7D"}},'"\u89D2\u4E2D"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#C98A7D"}},'"\u5CA9\u4E0B"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#C98A7D"}},'"\u4F50\u85E4"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#C98A7D"}},'"\u4E2D\u6751"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#C98A7D"}},'"\u85E4\u5CA1"'),e("span",{style:{color:"#858585"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"\u3044"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"\u304A\u304E"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"\u304B\u304F"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"\u3044\u308F"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}},"   "),e("span",{style:{color:"#A1B567"}},"\u3055"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"\u306A\u304B"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"\u3075\u3058"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"6"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},")]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"\u3044"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"\u304A\u304E"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"\u304B\u304F"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"\u304C\u3093"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"1.1"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"\u3055"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"\u306A\u304B"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"\u3075\u3058"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"6"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},")]")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// UTF-8")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},'"\u4E2D\u6751"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"\u4E95\u4E0A"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"\u4F50\u85E4"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"\u5CA9\u4E0B"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"\u837B\u91CE"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"\u85E4\u5CA1"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"\u89D2\u4E2D"'),e("span",{style:{color:"#8E8F8B"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#A65E2B"}},"U"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}},"4"),e("span",{style:{color:"#A65E2B"}},"E2D"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"U"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#296AA3"}},"4E95"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"U"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}},"4"),e("span",{style:{color:"#A65E2B"}},"F50"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"U"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}},"5"),e("span",{style:{color:"#A65E2B"}},"CA9"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"U"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}},"837"),e("span",{style:{color:"#A65E2B"}},"B"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"U"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#296AA3"}},"85E4"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"U"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}},"89"),e("span",{style:{color:"#A65E2B"}},"D2"),e("span",{style:{color:"#8E8F8B"}},"]")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// localeCompare()")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},'"\u4E95\u4E0A"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},'"\u837B\u91CE"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959"}},'"\u89D2\u4E2D"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959"}},'"\u5CA9\u4E0B"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B56959"}},'"\u4F50\u85E4"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959"}},'"\u4E2D\u6751"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959"}},'"\u85E4\u5CA1"'),e("span",{style:{color:"#8E8F8B"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"\u3044"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"\u304A\u304E"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"\u304B\u304F"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"\u3044\u308F"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}},"   "),e("span",{style:{color:"#6C7834"}},"\u3055"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"\u306A\u304B"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"\u3075\u3058"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"6"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},")]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"\u3044"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"\u304A\u304E"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"\u304B\u304F"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"\u304C\u3093"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"1.1"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"\u3055"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"\u306A\u304B"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"\u3075\u3058"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"6"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},")]")])])])],-1),qb=e("div",{class:"flex-1"},[e("img",{src:ta,class:""})],-1),Wb={__name:"44",setup(n){const t={srcSequence:"./section-5.md"};return $(O),(s,o)=>{const a=Cn;return x(),j(he,Q(X(t)),{default:M(()=>[Lb,Hb,e("div",Rb,[e("div",Jb,[z(a,Le({},{ranges:["1-3","5-7","5,6,8"]}),{default:M(()=>[Kb]),_:1},16)]),qb])]),_:1},16)}}},Ub="/assets/2022-09-01-22-41-43.cb8501b7.png",zb=e("div",{class:"hidden"}," # Sorting - Chinese characters ",-1),Yb=e("div",{class:"grid grid-rows-2"},[e("div",{class:""},[e("h1",null,"Chinese characters"),e("h3",null,"4 attributes"),e("img",{src:Ub,class:"mt-6"})]),e("div",{class:""},[e("div",{class:"grid grid-cols-2 text-2xl"},[e("ul",null,[e("li",null,"Radical Strokes"),e("li",null,"Total Strokes")]),e("ul",null,[e("li",null,"Bopomofo (Phonetic characters)"),e("li",null,"Pinyin")])])])],-1),Vb={__name:"45",setup(n){const t={srcSequence:"./section-5.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[zb,Yb]),_:1},16))}},bu="/assets/2022-09-02-15-36-40.6e7c15f8.png",xu="/assets/2022-09-02-15-37-09.445996b5.png",Au="/assets/2022-09-02-15-37-43.bd033dcd.png",Cu="/assets/le-chinese-character.97231841.png",Gb=e("div",{class:"hidden"}," # Sorting - Chinese pronunciation ",-1),Zb=e("h1",null,"Chinese",-1),Xb=e("p",null,"Multiple pronunciation",-1),Qb=e("div",{class:"grid grid-cols-2"},[e("div",{class:"grid-1"},[e("div",{class:"flex flex-row items-center"},[e("img",{src:bu,alt:"",class:"h-full w-auto"}),e("span",{class:"pl-4"},"Music")]),e("div",{class:"flex flex-row items-center"},[e("img",{src:xu,alt:"",class:"h-full w-auto"}),e("span",{class:"pl-4"},"Happy, Happiness, love to")]),e("div",{class:"flex flex-row items-center"},[e("img",{src:Au,alt:"",class:"h-full w-auto"}),e("span",{class:"pl-4"},"To appreciate")])]),e("div",{class:"grid-2 flex justify-center"},[e("img",{src:Cu,class:"h-90"})])],-1),ex={__name:"46",setup(n){const t={srcSequence:"./section-5.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[Gb,Zb,Xb,Qb]),_:1},16))}},nx="/assets/raku-japanese-pronounce.b293e6ef.png",tx={class:"grid grid-cols-2 w-full h-full"},sx=xe({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(n){const t=n;$(O);const s=D(()=>Zr(t.image));return(o,a)=>(x(),W("div",tx,[e("div",{class:Ne(["slidev-layout default image-right",t.class])},[wn(o.$slots,"default")],2),e("div",{class:"my-14 mr-14",style:Ue(b(s))},null,4)]))}}),ox=e("div",{class:"hidden"}," # Sorting - Japanese pronunciation ",-1),ax=e("h1",null,"Japanese Kanji",-1),rx=e("p",null,"Multiple pronunciation",-1),lx=e("p",null,[e("img",{src:nx,alt:""})],-1),ix=e("ol",null,[e("li",null,"\u2776 Music"),e("li",null,[e("span",{class:"text-gray-500"},"\u2776 To play (music)")]),e("li",null,"\u2777 Happy"),e("li",null,"\u2778 To appreciate")],-1),cx={__name:"47",setup(n){const t={layout:"image-right",image:"/images/raku-japanese-character.png",srcSequence:"./section-5.md"};return $(O),(s,o)=>(x(),j(sx,Q(X(t)),{default:M(()=>[ox,ax,rx,lx,ix]),_:1},16))}},px=e("h1",null,"580",-1),ux=e("p",null,"Same Chinese character different pronounciation",-1),dx=e("p",null,"580 from 5266 common used Chinese characters (traditional).",-1),hx=e("div",{class:"text-xs mt-20 text-gray-500"},[e("p",null,[d("There were 1263 characters have more than one pronounciation."),e("br"),d(" In 2012, 683 was reviewed and combined into single pronounciation.")]),e("ol",null,[e("li",null,[d("\u6559\u80B2\u90E8\u570B\u8A9E\u4E00\u5B57\u591A\u97F3\u5BE9\u8A02\u8868 2012 "),e("a",{href:"https://language.moe.gov.tw/files/people_files/%E5%88%9D%E7%A8%BF.pdf",target:"_blank",rel:"noopener"},"PDF")])])],-1),fx={__name:"48",setup(n){const t={layout:"fact",srcSequence:"./section-5.md"};return $(O),(s,o)=>(x(),j(eo,Q(X(t)),{default:M(()=>[px,ux,dx,hx]),_:1},16))}},mx=e("h1",null,"600+",-1),gx=e("p",null,"Same Japanese character different pronounciation",-1),yx=e("p",null,"609 from 2136 common used Japanese kanji characters.",-1),vx=e("div",{class:"text-xs mt-20 text-gray-500"},[e("ol",null,[e("li",null,[d("\u6587\u79D1\u7701\u5E38\u7528\u6F22\u5B57\u8868 20101130\uFF1A "),e("a",{href:"https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/pdf/joyokanjihyo_20101130.pdf",target:"_blank",rel:"noopener"},"PDF")]),e("li",null,[d("\u5E38\u7528\u6F22\u5B57\u8868 - \u97F3\u8A13\u8868: "),e("a",{href:"http://jgrammar.life.coocan.jp/ja/data/onkun.htm",target:"_blank",rel:"noopener"},"Website")]),e("li",null,[d("Explaination about Kanji (EN): "),e("a",{href:"https://www.tofugu.com/japanese/onyomi-kunyomi/",target:"_blank",rel:"noopener"},"Website")])])],-1),_x={__name:"49",setup(n){const t={layout:"fact",srcSequence:"./section-5.md"};return $(O),(s,o)=>(x(),j(eo,Q(X(t)),{default:M(()=>[mx,gx,yx,vx]),_:1},16))}},wx=e("h1",null,"Sorting",-1),bx=e("p",null,"Sort Latin character",-1),xx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"items"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'r\xE9serv\xE9'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Premier'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Clich\xE9'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'communiqu\xE9'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'caf\xE9'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Adieu'"),e("span",{style:{color:"#858585"}},"];")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"items"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"sort"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"items"),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'// ["Adieu", "Clich\xE9", "Premier", "caf\xE9", "communiqu\xE9", "r\xE9serv\xE9"]')]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"items"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"sort"),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"b"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"localeCompare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"b"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'fr'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ignorePunctuation"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}));")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"items"),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ['Adieu', 'caf\xE9', 'Clich\xE9', 'communiqu\xE9', 'Premier', 'r\xE9serv\xE9']")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"items"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'r\xE9serv\xE9'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Premier'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Clich\xE9'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'communiqu\xE9'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'caf\xE9'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Adieu'"),e("span",{style:{color:"#8E8F8B"}},"];")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"items"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"sort"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"items"),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'// ["Adieu", "Clich\xE9", "Premier", "caf\xE9", "communiqu\xE9", "r\xE9serv\xE9"]')]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"items"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"sort"),e("span",{style:{color:"#8E8F8B"}},"(("),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"b"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"localeCompare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"b"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'fr'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ignorePunctuation"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}));")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"items"),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ['Adieu', 'caf\xE9', 'Clich\xE9', 'communiqu\xE9', 'Premier', 'r\xE9serv\xE9']")])])])],-1),Ax={__name:"50",setup(n){const t={srcSequence:"./section-5.md"};return $(O),(s,o)=>{const a=Cn;return x(),j(he,Q(X(t)),{default:M(()=>[wx,bx,z(a,Le({},{ranges:[""]}),{default:M(()=>[xx]),_:1},16)]),_:1},16)}}},Cx=e("h1",null,"Sorting",-1),Bx=e("p",null,"Sort Ukrainian or Persian language \u{1F1FA}\u{1F1E6}",-1),kx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"items"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'\u0410\u043B\u0431\u0430\u043D\u0456\u044F'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#C98A7D"}},"'\u0404\u0433\u0438\u043F\u0435\u0442'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#C98A7D"}},"'\u0406\u043D\u0434\u0456\u044F'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#C98A7D"}},"'\u041F\u0435\u0440\u0443'"),e("span",{style:{color:"#858585"}},"];")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"items"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"sort"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"items"),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ['\u0404\u0433\u0438\u043F\u0435\u0442', '\u0406\u043D\u0434\u0456\u044F', '\u0410\u043B\u0431\u0430\u043D\u0456\u044F', '\u041F\u0435\u0440\u0443']")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"items"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"sort"),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"b"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"localeCompare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"b"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'uk'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ignorePunctuation"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}));")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"items"),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ['\u0410\u043B\u0431\u0430\u043D\u0456\u044F', '\u0404\u0433\u0438\u043F\u0435\u0442', '\u0406\u043D\u0434\u0456\u044F', '\u041F\u0435\u0440\u0443']")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"items"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'\u0410\u043B\u0431\u0430\u043D\u0456\u044F'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#B56959"}},"'\u0404\u0433\u0438\u043F\u0435\u0442'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#B56959"}},"'\u0406\u043D\u0434\u0456\u044F'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#B56959"}},"'\u041F\u0435\u0440\u0443'"),e("span",{style:{color:"#8E8F8B"}},"];")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"items"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"sort"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"items"),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ['\u0404\u0433\u0438\u043F\u0435\u0442', '\u0406\u043D\u0434\u0456\u044F', '\u0410\u043B\u0431\u0430\u043D\u0456\u044F', '\u041F\u0435\u0440\u0443']")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"items"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"sort"),e("span",{style:{color:"#8E8F8B"}},"(("),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"b"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"localeCompare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"b"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'uk'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ignorePunctuation"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}));")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"items"),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ['\u0410\u043B\u0431\u0430\u043D\u0456\u044F', '\u0404\u0433\u0438\u043F\u0435\u0442', '\u0406\u043D\u0434\u0456\u044F', '\u041F\u0435\u0440\u0443']")])])])],-1),Dx=e("hr",null,null,-1),Ex=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"items"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'\u06AF\u06CC\u0644\u0627\u0646'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u0633\u0645\u0646\u0627\u0646'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u0686\u0647\u0627\u0631 \u0645\u062D\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u0645\u0634\u0647\u062F'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u0642\u0645'"),e("span",{style:{color:"#858585"}},"];")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"items"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"sort"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"items"),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},`// ['\u0633\u0645\u0646\u0627\u0646', '\u0642\u0645', '\u0645\u0634\u0647\u062F', "\u0686\u0647\u0627\u0631 \u0645\u062D\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC", '\u06AF\u06CC\u0644\u0627\u0646']`)]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"items"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"sort"),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"b"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"localeCompare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"b"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'fr'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ignorePunctuation"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}));")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"items"),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},`// ['\u0686\u0647\u0627\u0631 \u0645\u062D\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC", '\u0633\u0645\u0646\u0627\u0646', '\u0642\u0645', '\u06AF\u06CC\u0644\u0627\u0646', '\u0645\u0634\u0647\u062F"]`)])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"items"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'\u06AF\u06CC\u0644\u0627\u0646'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u0633\u0645\u0646\u0627\u0646'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u0686\u0647\u0627\u0631 \u0645\u062D\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u0645\u0634\u0647\u062F'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u0642\u0645'"),e("span",{style:{color:"#8E8F8B"}},"];")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"items"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"sort"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"items"),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},`// ['\u0633\u0645\u0646\u0627\u0646', '\u0642\u0645', '\u0645\u0634\u0647\u062F', "\u0686\u0647\u0627\u0631 \u0645\u062D\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC", '\u06AF\u06CC\u0644\u0627\u0646']`)]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"items"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"sort"),e("span",{style:{color:"#8E8F8B"}},"(("),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"b"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"localeCompare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"b"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'fr'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ignorePunctuation"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}));")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"items"),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},`// ['\u0686\u0647\u0627\u0631 \u0645\u062D\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC", '\u0633\u0645\u0646\u0627\u0646', '\u0642\u0645', '\u06AF\u06CC\u0644\u0627\u0646', '\u0645\u0634\u0647\u062F"]`)])])])],-1),Sx={__name:"51",setup(n){const t={srcSequence:"./section-5.md"};return $(O),(s,o)=>{const a=Cn;return x(),j(he,Q(X(t)),{default:M(()=>[Cx,Bx,z(a,Le({},{ranges:[""]}),{default:M(()=>[kx]),_:1},16),Dx,z(a,Le({},{ranges:[""]}),{default:M(()=>[Ex]),_:1},16)]),_:1},16)}}},Tx=e("h1",null,"Sorting",-1),Ix=e("p",null,"Sort in Japanese",-1),$x=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"items"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u3042\u307E\u30AC\u30DF'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u30A6\u30A3\u30FC\u30F3'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u837B\u91CE'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u3046\u3044\u30FC\u3093'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u4E2D\u6751'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u30EC\u30A2\u30FC\u30C9'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u89D2\u4E2D'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'OKEON'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u4E95\u4E0A'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u85E4\u5CA1'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u4F50\u85E4'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'SHIMA'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u5CA9\u4E0B'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"];")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"items"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"sort"),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"b"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"localeCompare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"b"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'ja-JP'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ignorePunctuation"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}));")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"items"),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'// ["OKEON", "SHIMA", "\u3042\u307E\u30AC\u30DF", "\u30A6\u30A3\u30FC\u30F3", "\u3046\u3044\u30FC\u3093", "\u30EC\u30A2\u30FC\u30C9", ')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'// "\u4E95\u4E0A", "\u837B\u91CE", "\u89D2\u4E2D", "\u5CA9\u4E0B", "\u4F50\u85E4", "\u4E2D\u6751", "\u85E4\u5CA1"]')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'// "Inoue", "Ogino", "Kakunaka", "Iwashita", "Sato", "Nakamura", "Fujioka"]')])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"items"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u3042\u307E\u30AC\u30DF'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u30A6\u30A3\u30FC\u30F3'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u837B\u91CE'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u3046\u3044\u30FC\u3093'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u4E2D\u6751'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u30EC\u30A2\u30FC\u30C9'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u89D2\u4E2D'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'OKEON'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u4E95\u4E0A'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u85E4\u5CA1'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u4F50\u85E4'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'SHIMA'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u5CA9\u4E0B'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"];")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"items"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"sort"),e("span",{style:{color:"#8E8F8B"}},"(("),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"b"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"localeCompare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"b"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'ja-JP'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ignorePunctuation"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}));")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"items"),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'// ["OKEON", "SHIMA", "\u3042\u307E\u30AC\u30DF", "\u30A6\u30A3\u30FC\u30F3", "\u3046\u3044\u30FC\u3093", "\u30EC\u30A2\u30FC\u30C9", ')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'// "\u4E95\u4E0A", "\u837B\u91CE", "\u89D2\u4E2D", "\u5CA9\u4E0B", "\u4F50\u85E4", "\u4E2D\u6751", "\u85E4\u5CA1"]')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'// "Inoue", "Ogino", "Kakunaka", "Iwashita", "Sato", "Nakamura", "Fujioka"]')])])])],-1),Fx=e("p",null,"// PHP",-1),Ox=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"sortWithLocale"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"arr"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"Collator"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'ja_JP.utf8'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"sort"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#B8A965"}},"arr"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"SORT_LOCALE_STRING"),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"arr"),e("span",{style:{color:"#858585"}},";")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'// ["OKEON", "SHIMA", "\u3042\u307E\u30AC\u30DF", "\u3046\u3044\u30FC\u3093", "\u30A6\u30A3\u30FC\u30F3", "\u30EC\u30A2\u30FC\u30C9", ')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'// "\u4E2D\u6751", "\u4E95\u4E0A", "\u4F50\u85E4", "\u5CA9\u4E0B", "\u837B\u91CE", "\u85E4\u5CA1", "\u89D2\u4E2D"]')])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"sortWithLocale"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"arr"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"Collator"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'ja_JP.utf8'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"sort"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#8C862B"}},"arr"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"SORT_LOCALE_STRING"),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"arr"),e("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'// ["OKEON", "SHIMA", "\u3042\u307E\u30AC\u30DF", "\u3046\u3044\u30FC\u3093", "\u30A6\u30A3\u30FC\u30F3", "\u30EC\u30A2\u30FC\u30C9", ')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'// "\u4E2D\u6751", "\u4E95\u4E0A", "\u4F50\u85E4", "\u5CA9\u4E0B", "\u837B\u91CE", "\u85E4\u5CA1", "\u89D2\u4E2D"]')])])])],-1),jx={__name:"52",setup(n){const t={srcSequence:"./section-5.md"};return $(O),(s,o)=>{const a=Cn;return x(),j(he,Q(X(t)),{default:M(()=>[Tx,Ix,z(a,Le({},{ranges:[""]}),{default:M(()=>[$x]),_:1},16),Fx,z(a,Le({},{ranges:[""]}),{default:M(()=>[Ox]),_:1},16)]),_:1},16)}}},Px=e("h1",null,"Sorting",-1),Nx=e("p",null,"Sort in Chinese",-1),Mx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"items"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'\u57FA\u9686'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u53F0\u5317'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u6843\u5712'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u65B0\u7AF9'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u82D7\u6817'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u53F0\u4E2D'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u5F70\u5316'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u96F2\u6797'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u5609\u7FA9'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u9AD8\u96C4'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u5C4F\u6771'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u82B1\u84EE'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u5B9C\u862D'"),e("span",{style:{color:"#858585"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"];")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"items"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"sort"),e("span",{style:{color:"#858585"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"           ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"items"),e("span",{style:{color:"#858585"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ['\u53F0\u4E2D', '\u53F0\u5317', '\u5609\u7FA9', '\u57FA\u9686', '\u5B9C\u862D', '\u5C4F\u6771', '\u5F70\u5316', '\u65B0\u7AF9', '\u6843\u5712', '\u82B1\u84EE', '\u82D7\u6817', '\u96F2\u6797', '\u9AD8\u96C4']")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"items"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'\u57FA\u9686'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u53F0\u5317'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u6843\u5712'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u65B0\u7AF9'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u82D7\u6817'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u53F0\u4E2D'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u5F70\u5316'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u96F2\u6797'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u5609\u7FA9'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u9AD8\u96C4'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u5C4F\u6771'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u82B1\u84EE'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u5B9C\u862D'"),e("span",{style:{color:"#8E8F8B"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"];")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"items"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"sort"),e("span",{style:{color:"#8E8F8B"}},"();")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"           ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"items"),e("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ['\u53F0\u4E2D', '\u53F0\u5317', '\u5609\u7FA9', '\u57FA\u9686', '\u5B9C\u862D', '\u5C4F\u6771', '\u5F70\u5316', '\u65B0\u7AF9', '\u6843\u5712', '\u82B1\u84EE', '\u82D7\u6817', '\u96F2\u6797', '\u9AD8\u96C4']")])])])],-1),Lx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"items"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"sort"),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"b"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"localeCompare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"b"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'zh-Hant-TW-u-co-stroke'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#E0A569"}},"ignorePunctuation"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}));")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"//\xA0['\u53F0\u4E2D', '\u53F0\u5317', '\u5B9C\u862D', '\u82B1\u84EE', '\u5C4F\u6771', '\u82D7\u6817', '\u6843\u5712', '\u9AD8\u96C4', '\u57FA\u9686', '\u96F2\u6797', '\u65B0\u7AF9', '\u5609\u7FA9', '\u5F70\u5316']")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"items"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"sort"),e("span",{style:{color:"#8E8F8B"}},"(("),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"b"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"localeCompare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"b"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'zh-Hant-TW-u-co-stroke'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B58451"}},"ignorePunctuation"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}));")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"//\xA0['\u53F0\u4E2D', '\u53F0\u5317', '\u5B9C\u862D', '\u82B1\u84EE', '\u5C4F\u6771', '\u82D7\u6817', '\u6843\u5712', '\u9AD8\u96C4', '\u57FA\u9686', '\u96F2\u6797', '\u65B0\u7AF9', '\u5609\u7FA9', '\u5F70\u5316']")])])])],-1),Hx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"items"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"sort"),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"b"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"localeCompare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"b"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'zh-Hant-TW-u-co-zhuyin'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#E0A569"}},"ignorePunctuation"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}));")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ['\u5C4F\u6771', '\u82D7\u6817', '\u53F0\u5317', '\u53F0\u4E2D', '\u6843\u5712', '\u9AD8\u96C4', '\u82B1\u84EE', '\u57FA\u9686', '\u5609\u7FA9', '\u65B0\u7AF9', '\u5F70\u5316', '\u5B9C\u862D', '\u96F2\u6797']")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"items"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"sort"),e("span",{style:{color:"#8E8F8B"}},"(("),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"b"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"localeCompare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"b"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'zh-Hant-TW-u-co-zhuyin'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B58451"}},"ignorePunctuation"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}));")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ['\u5C4F\u6771', '\u82D7\u6817', '\u53F0\u5317', '\u53F0\u4E2D', '\u6843\u5712', '\u9AD8\u96C4', '\u82B1\u84EE', '\u57FA\u9686', '\u5609\u7FA9', '\u65B0\u7AF9', '\u5F70\u5316', '\u5B9C\u862D', '\u96F2\u6797']")])])])],-1),Rx={__name:"53",setup(n){const t={srcSequence:"./section-5.md"};return $(O),(s,o)=>{const a=Cn;return x(),j(he,Q(X(t)),{default:M(()=>[Px,Nx,z(a,Le({},{ranges:[""]}),{default:M(()=>[Mx]),_:1},16),z(a,Le({},{ranges:[""]}),{default:M(()=>[Lx]),_:1},16),z(a,Le({},{ranges:[""]}),{default:M(()=>[Hx]),_:1},16)]),_:1},16)}}},Jx=e("div",{class:"hidden"}," # Sorting - Chinese pronunciation ",-1),Kx=e("h1",null,"Chinese",-1),qx=e("p",null,"Multiple pronunciation",-1),Wx=e("div",{class:"grid grid-cols-2"},[e("div",{class:"grid-1"},[e("div",{class:"flex flex-row items-center"},[e("img",{src:bu,alt:"",class:"h-full w-auto"}),e("span",{class:"pl-4"},"Music")]),e("div",{class:"flex flex-row items-center"},[e("img",{src:xu,alt:"",class:"h-full w-auto"}),e("span",{class:"pl-4"},"Happy, Happiness, love to")]),e("div",{class:"flex flex-row items-center"},[e("img",{src:Au,alt:"",class:"h-full w-auto"}),e("span",{class:"pl-4"},"To appreciate")])]),e("div",{class:"grid-2 flex justify-center"},[e("img",{src:Cu,class:"h-90"})])],-1),Ux={__name:"54",setup(n){const t={srcSequence:"./section-5.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[Jx,Kx,qx,Wx]),_:1},16))}},zx=e("h1",null,"Sorting",-1),Yx=e("p",null,"What happens to the Character that has multiple pronunciation?",-1),Vx=e("div",{class:"grid grid-cols-2 gap-4 pt-8"},[e("div",null,[e("h2",null,"This affects"),e("ul",null,[e("li",null,"Japanese Kanji"),e("li",null,[d("Chinese characters sorting in "),e("ul",null,[e("li",null,"Pinyin (zh-CN)"),e("li",null,"Bopomofo (Library, material for Children)")])])])]),e("div",null,[e("h2",null,"Solution"),e("ul",null,[e("li",null,"Leave it as-is"),e("li",null,"Customize it and make a explicit order in a array")])])],-1),Gx={__name:"55",setup(n){const t={srcSequence:"./section-5.md"};return $(O),(s,o)=>(x(),j(he,Q(X(t)),{default:M(()=>[zx,Yx,Vx]),_:1},16))}},Zx=e("div",{class:"text-gray-700 pt-12"},[e("h1",null,"Recap"),e("ul",null,[e("li",null,"What to consider beyond i18n"),e("li",null,"Calendar & date besides Gregorian calendar"),e("li",null,"CJK input method"),e("li",null,"Sorting methods regarding locales")]),e("div",{class:"pt-12"},[e("p",null,[d("Online slide: "),e("a",{href:"https://prague.amou.ro",target:"_blank",rel:"noopener"},"https://prague.amou.ro")])])],-1),Xx={__name:"56",setup(n){const t={layout:"intro-image",image:"/images/DCE2022_content.png"};return $(O),(s,o)=>(x(),j(ht,Q(X(t)),{default:M(()=>[Zx]),_:1},16))}},Qx=e("div",{class:"hidden"}," # Thank you ",-1),e3={__name:"57",setup(n){const t={layout:"image",image:"/images/DCE2022_thanks.png"};return $(O),(s,o)=>(x(),j(el,Q(X(t)),{default:M(()=>[Qx]),_:1},16))}},n3=[{path:"1",name:"page-1",component:_8,meta:{layout:"intro-image",image:"/images/DCE2022_title.png",theme:"apple-basic",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},fonts:{sans:"Montserrat",serif:"Bitter"},title:"More than Words",slide:{raw:`---
layout: intro-image
image: /images/DCE2022_title.png
# try also 'default' to start simple
theme: apple-basic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS (experimental)
# css: unocss
fonts:
  sans: Montserrat
  serif: Bitter
---

<div class="hidden">
# More than Words
</div>

<div class="absolute bottom-10 text-gray-400">
  <span class="font-700">
    Chris Wu @amourow Sep. 2022
  </span>
</div>

<div class="text-6xl font-700 text-gray-700 self-end mt-24 mb-8 font-serif">
  More than Words
</div>
<div class="text-4xl text-gray-700">
  Localizing the User Experience
</div>


<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
Good afternoon, I hope you all have a good DrupalCon in Prague. In this session I'm going to talk about things around how to localize user experiences. 
Especially experience in CJK languages.

We have many tool to help with translations, but understand how to localize the user experience can make the website design better.
If you don't know CJK yet, lets embrace some culture shock; If you are or may working on websites with CJK, I hope this will be helpful.

I already regret to submit the proposal for a short session when I making the slide. There are so much to talk, let's start the journey.
-->
`,title:"More than Words",level:1,content:`<div class="hidden">
# More than Words
</div>

<div class="absolute bottom-10 text-gray-400">
  <span class="font-700">
    Chris Wu @amourow Sep. 2022
  </span>
</div>

<div class="text-6xl font-700 text-gray-700 self-end mt-24 mb-8 font-serif">
  More than Words
</div>
<div class="text-4xl text-gray-700">
  Localizing the User Experience
</div>


<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>`,frontmatter:{layout:"intro-image",image:"/images/DCE2022_title.png",theme:"apple-basic",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},fonts:{sans:"Montserrat",serif:"Bitter"},title:"More than Words"},note:`Good afternoon, I hope you all have a good DrupalCon in Prague. In this session I'm going to talk about things around how to localize user experiences. 
Especially experience in CJK languages.

We have many tool to help with translations, but understand how to localize the user experience can make the website design better.
If you don't know CJK yet, lets embrace some culture shock; If you are or may working on websites with CJK, I hope this will be helpful.

I already regret to submit the proposal for a short session when I making the slide. There are so much to talk, let's start the journey.`,index:0,start:0,end:65,notesHTML:`<p>Good afternoon, I hope you all have a good DrupalCon in Prague. In this session I'm going to talk about things around how to localize user experiences.
Especially experience in CJK languages.</p>
<p>We have many tool to help with translations, but understand how to localize the user experience can make the website design better.
If you don't know CJK yet, lets embrace some culture shock; If you are or may working on websites with CJK, I hope this will be helpful.</p>
<p>I already regret to submit the proposal for a short session when I making the slide. There are so much to talk, let's start the journey.</p>
`,filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:L8,meta:{slide:{raw:`
# Chris Wu

<div class="grid grid-cols-[1fr,2fr] grid-rows-2 gap-4 py-8">
  <div class="image rounded-full content-center flex flex-col">
    <img src="/images/chris_potrait.png" class="rounded-full overflow-hidden" />
  </div>
  <div class="intro flex flex-row items-center">
  
  1. \u{1F1F9}\u{1F1FC}  
  1. Senior Web Developer, OIST
  1. Designer, Developer, former DUGTW member
  1. 
  1. <a href="https://twitter.com/amourow" target="_blank" alt="GitHub"
      class="text-xl icon-btn mt-8 !border-none !hover:text-white bg-blue-600 text-white hover:bg-blue-600/80">
      <carbon-logo-twitter /> @amourow</a>

  </div>

  <div></div>
  <div class="pl-4">
    
  </div>
</div>
<!--
I'm a Taiwanese Drupal developer works in a international research institution in Japan. 
During my 14 years Drupal adventure (according to Drupal dot org), I designed and made websites in Traditional Chinese and Japanese and English.

I'm now working in a Japanese research institute which use English and Japanese as equaly important first language.
Our team always make sure the experience of both languages are well perceived. 

Next slides >>>

-->
`,title:"Chris Wu",level:1,content:`# Chris Wu

<div class="grid grid-cols-[1fr,2fr] grid-rows-2 gap-4 py-8">
  <div class="image rounded-full content-center flex flex-col">
    <img src="/images/chris_potrait.png" class="rounded-full overflow-hidden" />
  </div>
  <div class="intro flex flex-row items-center">
  
  1. \u{1F1F9}\u{1F1FC}  
  1. Senior Web Developer, OIST
  1. Designer, Developer, former DUGTW member
  1. 
  1. <a href="https://twitter.com/amourow" target="_blank" alt="GitHub"
      class="text-xl icon-btn mt-8 !border-none !hover:text-white bg-blue-600 text-white hover:bg-blue-600/80">
      <carbon-logo-twitter /> @amourow</a>

  </div>

  <div></div>
  <div class="pl-4">
    
  </div>
</div>`,frontmatter:{},note:`I'm a Taiwanese Drupal developer works in a international research institution in Japan. 
During my 14 years Drupal adventure (according to Drupal dot org), I designed and made websites in Traditional Chinese and Japanese and English.

I'm now working in a Japanese research institute which use English and Japanese as equaly important first language.
Our team always make sure the experience of both languages are well perceived. 

Next slides >>>`,index:1,start:66,end:101,notesHTML:`<p>I'm a Taiwanese Drupal developer works in a international research institution in Japan.
During my 14 years Drupal adventure (according to Drupal dot org), I designed and made websites in Traditional Chinese and Japanese and English.</p>
<p>I'm now working in a Japanese research institute which use English and Japanese as equaly important first language.
Our team always make sure the experience of both languages are well perceived.</p>
<p>Next slides &gt;&gt;&gt;</p>
`,filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:U8,meta:{layout:"intro-image-right",image:"/images/campus.png",slide:{raw:`---
layout: intro-image-right
image: /images/campus.png
---

<div class="hidden">
# Intro: OIST
</div>

<div class="absolute top-10 flex items-center">
  <div class="w-12">
    <img src="/images/2022-09-21-23-03-19.png" />
  </div>
  <div class="w-96 my-0 ml-4 leading-6">
    Okinawa Institute of <br />Science and Technology
  </div>
</div>

<blockquote class="content-end">
  <h2>Ivory Tower of Babel</h2>
  <p> Website design and development challenges for a multidisciplinary, multinational, multicultural, multilingual science and technology university in Japan</p>
  <p class="text-gray-400"> Sep. 20 by Micheal Cooper</p>
</blockquote>

<!--
OIST is public found by the Japanese Government directly from the cabinet office. 
It is a interdisciplinary research institute, if you are interested in this insititute, please do watch the presentation from Tuesday by Micheal Cooper.


-->
`,title:"Intro: OIST",level:1,content:`<div class="hidden">
# Intro: OIST
</div>

<div class="absolute top-10 flex items-center">
  <div class="w-12">
    <img src="/images/2022-09-21-23-03-19.png" />
  </div>
  <div class="w-96 my-0 ml-4 leading-6">
    Okinawa Institute of <br />Science and Technology
  </div>
</div>

<blockquote class="content-end">
  <h2>Ivory Tower of Babel</h2>
  <p> Website design and development challenges for a multidisciplinary, multinational, multicultural, multilingual science and technology university in Japan</p>
  <p class="text-gray-400"> Sep. 20 by Micheal Cooper</p>
</blockquote>`,frontmatter:{layout:"intro-image-right",image:"/images/campus.png"},note:`OIST is public found by the Japanese Government directly from the cabinet office. 
It is a interdisciplinary research institute, if you are interested in this insititute, please do watch the presentation from Tuesday by Micheal Cooper.`,index:2,start:101,end:132,notesHTML:`<p>OIST is public found by the Japanese Government directly from the cabinet office.
It is a interdisciplinary research institute, if you are interested in this insititute, please do watch the presentation from Tuesday by Micheal Cooper.</p>
`,filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:G8,meta:{layout:"intro-image",image:"/images/DCE2022_quote.png",slide:{raw:`---
layout: intro-image
image: /images/DCE2022_quote.png
---

<div class="hidden">
# Disclaimer
</div>

<div class="text-2xl font-700 text-gray-700 self-end mb-12">
<div class="w-1/2 m-auto text-center px-8">
Views expressed here are solely my own and not those of the university. 
No part of this presentation should be considered an endorsement.
</div>
</div>
<div class="text-3xl font-700 text-gray-100 text-center self-end mb-8">
Disclaimer
</div>

<!--
Before jumping the the topic, please noted that there is no endorsement for vendors, if I mentioned any. 

Next slide >>>
-->
`,title:"Disclaimer",level:1,content:`<div class="hidden">
# Disclaimer
</div>

<div class="text-2xl font-700 text-gray-700 self-end mb-12">
<div class="w-1/2 m-auto text-center px-8">
Views expressed here are solely my own and not those of the university. 
No part of this presentation should be considered an endorsement.
</div>
</div>
<div class="text-3xl font-700 text-gray-100 text-center self-end mb-8">
Disclaimer
</div>`,frontmatter:{layout:"intro-image",image:"/images/DCE2022_quote.png"},note:`Before jumping the the topic, please noted that there is no endorsement for vendors, if I mentioned any. 

Next slide >>>`,index:3,start:132,end:157,notesHTML:`<p>Before jumping the the topic, please noted that there is no endorsement for vendors, if I mentioned any.</p>
<p>Next slide &gt;&gt;&gt;</p>
`,filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:e2,meta:{layout:"intro-image",image:"/images/dictionary-pisit-heng.jpg",title:"===== Translate with i18n =====",srcSequence:"./section-1.md",slide:{raw:null,title:"===== Translate with i18n =====",level:1,content:`<div class="hidden">
# ===== Translate with i18n =====
</div>

<div class="absolute bottom-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute top-10">
  <h1>Translation in Drupal</h1>
  <p>translation and design</p>
</div>

<!--
background image: Photo by Pisit Heng on Unsplash
https://unsplash.com/photos/FQvadXmA524
-->`,frontmatter:{layout:"intro-image",image:"/images/dictionary-pisit-heng.jpg",title:"===== Translate with i18n =====",srcSequence:"./section-1.md"},note:`We all know Drupal has the well developed translation system that enable us to make the website well translated.

Next slide >>>>>`,index:4,start:0,end:31,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-1.md",raw:`---
layout: intro-image
image: /images/dictionary-pisit-heng.jpg
---

<div class="hidden">
# ===== Translate with i18n =====
</div>

<div class="absolute bottom-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute top-10">
  <h1>Translation in Drupal</h1>
  <p>translation and design</p>
</div>

<!--
background image: Photo by Pisit Heng on Unsplash
https://unsplash.com/photos/FQvadXmA524
-->

<!--
We all know Drupal has the well developed translation system that enable us to make the website well translated.

Next slide >>>>>
-->
`,title:"===== Translate with i18n =====",level:1,content:`<div class="hidden">
# ===== Translate with i18n =====
</div>

<div class="absolute bottom-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute top-10">
  <h1>Translation in Drupal</h1>
  <p>translation and design</p>
</div>

<!--
background image: Photo by Pisit Heng on Unsplash
https://unsplash.com/photos/FQvadXmA524
-->`,frontmatter:{layout:"intro-image",image:"/images/dictionary-pisit-heng.jpg",title:"===== Translate with i18n ====="},note:`We all know Drupal has the well developed translation system that enable us to make the website well translated.

Next slide >>>>>`,index:0,start:0,end:31},inline:{raw:`---
src: ./section-1.md
---
<!-- this page will be loaded from './section-1.md' -->
# 1. Translate with i18n`,title:"1. Translate with i18n",level:1,content:`<!-- this page will be loaded from './section-1.md' -->
# 1. Translate with i18n`,frontmatter:{},index:4,start:157,end:162},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-1.md",notesHTML:`<p>We all know Drupal has the well developed translation system that enable us to make the website well translated.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:i2,meta:{srcSequence:"./section-1.md",slide:{raw:`
# Translate with i18n

Content translation / Field translation

<img class="w-2/3" src="/images/2022-08-22-23-02-48.png" />

User Interface translation in Drupal
<!-- Configuration -->

![](/images/2022-08-22-22-58-40.png)

<!--
We can translated the node with field translation enabled.

We can translate many strings appear in the UI.

Next slide >>>>>
-->`,title:"Translate with i18n",level:1,content:`# Translate with i18n

Content translation / Field translation

<img class="w-2/3" src="/images/2022-08-22-23-02-48.png" />

User Interface translation in Drupal
<!-- Configuration -->

![](/images/2022-08-22-22-58-40.png)`,frontmatter:{srcSequence:"./section-1.md"},note:`We can translated the node with field translation enabled.

We can translate many strings appear in the UI.

Next slide >>>>>`,index:5,start:32,end:51,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-1.md",raw:`
# Translate with i18n

Content translation / Field translation

<img class="w-2/3" src="/images/2022-08-22-23-02-48.png" />

User Interface translation in Drupal
<!-- Configuration -->

![](/images/2022-08-22-22-58-40.png)

<!--
We can translated the node with field translation enabled.

We can translate many strings appear in the UI.

Next slide >>>>>
-->`,title:"Translate with i18n",level:1,content:`# Translate with i18n

Content translation / Field translation

<img class="w-2/3" src="/images/2022-08-22-23-02-48.png" />

User Interface translation in Drupal
<!-- Configuration -->

![](/images/2022-08-22-22-58-40.png)`,frontmatter:{},note:`We can translated the node with field translation enabled.

We can translate many strings appear in the UI.

Next slide >>>>>`,index:1,start:32,end:51},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-1.md",notesHTML:`<p>We can translated the node with field translation enabled.</p>
<p>We can translate many strings appear in the UI.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:J_,meta:{srcSequence:"./section-1.md",slide:{raw:`
# Translate with i18n

Translation in Twig

\`\`\`twig
{# Test trans filter. #}
{{ 'Hello Earth.'|trans }}

{# Test trans tag with text content. #}
{% set body_text %}
  {% trans %}Read more at: {{ url }}{% endtrans %}
{% endset %}

{% set count = comments|length %}
{% trans %}
  {{ count }} comment was deleted successfully.
{% plural count %}
  {{ count }} comments were deleted successfully.
{% endtrans %}
\`\`\`

<!--
To make string translatable, we can mark text in TWIG or PHP to be translatable with t() filter and function.

Next slide >>>>>
-->`,title:"Translate with i18n",level:1,content:`# Translate with i18n

Translation in Twig

\`\`\`twig
{# Test trans filter. #}
{{ 'Hello Earth.'|trans }}

{# Test trans tag with text content. #}
{% set body_text %}
  {% trans %}Read more at: {{ url }}{% endtrans %}
{% endset %}

{% set count = comments|length %}
{% trans %}
  {{ count }} comment was deleted successfully.
{% plural count %}
  {{ count }} comments were deleted successfully.
{% endtrans %}
\`\`\``,frontmatter:{srcSequence:"./section-1.md"},note:`To make string translatable, we can mark text in TWIG or PHP to be translatable with t() filter and function.

Next slide >>>>>`,index:6,start:52,end:79,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-1.md",raw:`
# Translate with i18n

Translation in Twig

\`\`\`twig
{# Test trans filter. #}
{{ 'Hello Earth.'|trans }}

{# Test trans tag with text content. #}
{% set body_text %}
  {% trans %}Read more at: {{ url }}{% endtrans %}
{% endset %}

{% set count = comments|length %}
{% trans %}
  {{ count }} comment was deleted successfully.
{% plural count %}
  {{ count }} comments were deleted successfully.
{% endtrans %}
\`\`\`

<!--
To make string translatable, we can mark text in TWIG or PHP to be translatable with t() filter and function.

Next slide >>>>>
-->`,title:"Translate with i18n",level:1,content:`# Translate with i18n

Translation in Twig

\`\`\`twig
{# Test trans filter. #}
{{ 'Hello Earth.'|trans }}

{# Test trans tag with text content. #}
{% set body_text %}
  {% trans %}Read more at: {{ url }}{% endtrans %}
{% endset %}

{% set count = comments|length %}
{% trans %}
  {{ count }} comment was deleted successfully.
{% plural count %}
  {{ count }} comments were deleted successfully.
{% endtrans %}
\`\`\``,frontmatter:{},note:`To make string translatable, we can mark text in TWIG or PHP to be translatable with t() filter and function.

Next slide >>>>>`,index:2,start:52,end:79},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-1.md",notesHTML:`<p>To make string translatable, we can mark text in TWIG or PHP to be translatable with t() filter and function.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:U_,meta:{srcSequence:"./section-1.md",slide:{raw:`
# Translate with i18n

Translate a sentence with t() function and variables that allow us to place the var in alternative position

\`\`\`php
  $sentence_translation = 
  t(
    'No crop types available. <a href="@link">Add crop type</a>.', // Sentence
    [ '@link' => $this->urlGenerator->generateFromRoute('crop.type_add'),] // Dynamic value
  );
\`\`\`

<!--
It is also possible to use dynamic variable in a sentence, so we can cover different grammars in SVO or SOV order.

There is chance that we need a translation context, because a word could be verb or noun or has more than one meaning.

Next slide >>>>>
-->`,title:"Translate with i18n",level:1,content:`# Translate with i18n

Translate a sentence with t() function and variables that allow us to place the var in alternative position

\`\`\`php
  $sentence_translation = 
  t(
    'No crop types available. <a href="@link">Add crop type</a>.', // Sentence
    [ '@link' => $this->urlGenerator->generateFromRoute('crop.type_add'),] // Dynamic value
  );
\`\`\``,frontmatter:{srcSequence:"./section-1.md"},note:`It is also possible to use dynamic variable in a sentence, so we can cover different grammars in SVO or SOV order.

There is chance that we need a translation context, because a word could be verb or noun or has more than one meaning.

Next slide >>>>>`,index:7,start:80,end:100,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-1.md",raw:`
# Translate with i18n

Translate a sentence with t() function and variables that allow us to place the var in alternative position

\`\`\`php
  $sentence_translation = 
  t(
    'No crop types available. <a href="@link">Add crop type</a>.', // Sentence
    [ '@link' => $this->urlGenerator->generateFromRoute('crop.type_add'),] // Dynamic value
  );
\`\`\`

<!--
It is also possible to use dynamic variable in a sentence, so we can cover different grammars in SVO or SOV order.

There is chance that we need a translation context, because a word could be verb or noun or has more than one meaning.

Next slide >>>>>
-->`,title:"Translate with i18n",level:1,content:`# Translate with i18n

Translate a sentence with t() function and variables that allow us to place the var in alternative position

\`\`\`php
  $sentence_translation = 
  t(
    'No crop types available. <a href="@link">Add crop type</a>.', // Sentence
    [ '@link' => $this->urlGenerator->generateFromRoute('crop.type_add'),] // Dynamic value
  );
\`\`\``,frontmatter:{},note:`It is also possible to use dynamic variable in a sentence, so we can cover different grammars in SVO or SOV order.

There is chance that we need a translation context, because a word could be verb or noun or has more than one meaning.

Next slide >>>>>`,index:3,start:80,end:100},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-1.md",notesHTML:`<p>It is also possible to use dynamic variable in a sentence, so we can cover different grammars in SVO or SOV order.</p>
<p>There is chance that we need a translation context, because a word could be verb or noun or has more than one meaning.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Q_,meta:{srcSequence:"./section-1.md",slide:{raw:`
# Translate with i18n

And translate with context

<div class="grid grid-cols-2">
  <div>
    <div>noun. as a section label: \u9023\u7D61\u5148</div>
      <img class="h-36 mt-4" src="/images/2022-09-21-20-08-11.png" />
  </div>
  <div>
    <div>verb. as an action: \u30B3\u30F3\u30BF\u30AF\u30C8</div>
      <img class="h-36 mt-4" src="/images/2022-09-21-18-28-37.png" />  
  </div>
</div>

\`\`\`php
  $labels = [
    'contact_action' => $this->t('Contact', [], ['context' => 'As an action']),
    'contact_section' => $this->t('Contact', [], ['context' => 'As a section label']),
  ];
\`\`\`



<!--
\`\`\`json
//ja.po

msgctxt "As an action"
msgid "Contact"
msgstr "\u30B3\u30F3\u30BF\u30AF\u30C8"

msgctxt "As a section label"
msgid "Contact"
msgstr "\u9023\u7D61\u5148"
\`\`\`
-->


<!-- 
For example "Contact"
It will be translated into two different words in Japanese, as an action or as a section label.

Next slide >>>>>
-->
`,title:"Translate with i18n",level:1,content:`# Translate with i18n

And translate with context

<div class="grid grid-cols-2">
  <div>
    <div>noun. as a section label: \u9023\u7D61\u5148</div>
      <img class="h-36 mt-4" src="/images/2022-09-21-20-08-11.png" />
  </div>
  <div>
    <div>verb. as an action: \u30B3\u30F3\u30BF\u30AF\u30C8</div>
      <img class="h-36 mt-4" src="/images/2022-09-21-18-28-37.png" />  
  </div>
</div>

\`\`\`php
  $labels = [
    'contact_action' => $this->t('Contact', [], ['context' => 'As an action']),
    'contact_section' => $this->t('Contact', [], ['context' => 'As a section label']),
  ];
\`\`\`



<!--
\`\`\`json
//ja.po

msgctxt "As an action"
msgid "Contact"
msgstr "\u30B3\u30F3\u30BF\u30AF\u30C8"

msgctxt "As a section label"
msgid "Contact"
msgstr "\u9023\u7D61\u5148"
\`\`\`
-->`,frontmatter:{srcSequence:"./section-1.md"},note:`For example "Contact"
It will be translated into two different words in Japanese, as an action or as a section label.

Next slide >>>>>`,index:8,start:101,end:148,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-1.md",raw:`
# Translate with i18n

And translate with context

<div class="grid grid-cols-2">
  <div>
    <div>noun. as a section label: \u9023\u7D61\u5148</div>
      <img class="h-36 mt-4" src="/images/2022-09-21-20-08-11.png" />
  </div>
  <div>
    <div>verb. as an action: \u30B3\u30F3\u30BF\u30AF\u30C8</div>
      <img class="h-36 mt-4" src="/images/2022-09-21-18-28-37.png" />  
  </div>
</div>

\`\`\`php
  $labels = [
    'contact_action' => $this->t('Contact', [], ['context' => 'As an action']),
    'contact_section' => $this->t('Contact', [], ['context' => 'As a section label']),
  ];
\`\`\`



<!--
\`\`\`json
//ja.po

msgctxt "As an action"
msgid "Contact"
msgstr "\u30B3\u30F3\u30BF\u30AF\u30C8"

msgctxt "As a section label"
msgid "Contact"
msgstr "\u9023\u7D61\u5148"
\`\`\`
-->


<!-- 
For example "Contact"
It will be translated into two different words in Japanese, as an action or as a section label.

Next slide >>>>>
-->
`,title:"Translate with i18n",level:1,content:`# Translate with i18n

And translate with context

<div class="grid grid-cols-2">
  <div>
    <div>noun. as a section label: \u9023\u7D61\u5148</div>
      <img class="h-36 mt-4" src="/images/2022-09-21-20-08-11.png" />
  </div>
  <div>
    <div>verb. as an action: \u30B3\u30F3\u30BF\u30AF\u30C8</div>
      <img class="h-36 mt-4" src="/images/2022-09-21-18-28-37.png" />  
  </div>
</div>

\`\`\`php
  $labels = [
    'contact_action' => $this->t('Contact', [], ['context' => 'As an action']),
    'contact_section' => $this->t('Contact', [], ['context' => 'As a section label']),
  ];
\`\`\`



<!--
\`\`\`json
//ja.po

msgctxt "As an action"
msgid "Contact"
msgstr "\u30B3\u30F3\u30BF\u30AF\u30C8"

msgctxt "As a section label"
msgid "Contact"
msgstr "\u9023\u7D61\u5148"
\`\`\`
-->`,frontmatter:{},note:`For example "Contact"
It will be translated into two different words in Japanese, as an action or as a section label.

Next slide >>>>>`,index:4,start:101,end:148},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-1.md",notesHTML:`<p>For example &quot;Contact&quot;
It will be translated into two different words in Japanese, as an action or as a section label.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:s5,meta:{layout:"intro-image",image:"/images/cover-beyond-i18n-edho-pratama.png",title:"===== Beyond i18n =====",srcSequence:"./section-2.md",slide:{raw:null,title:"===== Beyond i18n =====",level:1,content:`<div class="hidden">
# ===== Beyond i18n =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1>Beyond i18n</h1>
  <p>translation and design</p>
</div>

<!--
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
-->`,frontmatter:{layout:"intro-image",image:"/images/cover-beyond-i18n-edho-pratama.png",title:"===== Beyond i18n =====",srcSequence:"./section-2.md"},note:`So, Drupal provides many the solutions.
We know how do we make multi-lang web site on Drupal.
Is it already enough, the answer is "no" clearly.

Next slide >>>>>`,index:9,start:0,end:33,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-2.md",raw:`---
layout: intro-image
image: /images/cover-beyond-i18n-edho-pratama.png
---

<div class="hidden">
# ===== Beyond i18n =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1>Beyond i18n</h1>
  <p>translation and design</p>
</div>

<!--
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
-->

<!--
So, Drupal provides many the solutions.
We know how do we make multi-lang web site on Drupal.
Is it already enough, the answer is "no" clearly.

Next slide >>>>>
-->
`,title:"===== Beyond i18n =====",level:1,content:`<div class="hidden">
# ===== Beyond i18n =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1>Beyond i18n</h1>
  <p>translation and design</p>
</div>

<!--
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
-->`,frontmatter:{layout:"intro-image",image:"/images/cover-beyond-i18n-edho-pratama.png",title:"===== Beyond i18n ====="},note:`So, Drupal provides many the solutions.
We know how do we make multi-lang web site on Drupal.
Is it already enough, the answer is "no" clearly.

Next slide >>>>>`,index:0,start:0,end:33},inline:{raw:`---
src: ./section-2.md
---
<!-- this page will be loaded from './section-2.md' -->
# 2. Issue beyond the i18n techniques
`,title:"2. Issue beyond the i18n techniques",level:1,content:`<!-- this page will be loaded from './section-2.md' -->
# 2. Issue beyond the i18n techniques`,frontmatter:{},index:5,start:162,end:168},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-2.md",notesHTML:`<p>So, Drupal provides many the solutions.
We know how do we make multi-lang web site on Drupal.
Is it already enough, the answer is &quot;no&quot; clearly.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:r5,meta:{srcSequence:"./section-2.md",slide:{raw:`
<h1 class="hidden">
# \u4FE1\u9054\u96C5
</h1>

<div class="absolute bottom-10 text-5xl leading-normal">
  <h1 class="text-3xl leading-loose">"There three difficultites in translation:</h1>
  <div>
    <b class="text-pink-700">\u4FE1 </b>Faithfulness, 
  </div>
  <div>
    <b class="text-pink-700">\u9054 </b>Expressiveness and 
  </div>
  <div>
    <b class="text-pink-700">\u96C5 </b>Elegance"
  </div>
  <em class="text-xl">by Yen Fu</em>
</div>

<!--
Yen Fu (simplified Chinese: \u4E25\u590D; traditional Chinese: \u56B4\u5FA9; pinyin: Y\xE1n F\xF9; 8 January 1854 \u2014 27 October 1921) 
-->

<!--
There was a Chinese newspaper editor, translator, and writer. Yen Fu, He was most famous for introducing western ideas, including Darwin's "natural selection", to China in the late 19th century. 

He address the three difficulties in translation "\u4FE1\uFF0C\u9054\uFF0C\u96C5"
The three difficulties became the model of a ideal in translation and influence the translation a lot in publication.

An ideal translation to Chinese or Japanese that follows the three principle could make the length of translation very different from English or to English.

Next slide >>>>>
-->

`,title:"\u4FE1\u9054\u96C5",level:1,content:`<h1 class="hidden">
# \u4FE1\u9054\u96C5
</h1>

<div class="absolute bottom-10 text-5xl leading-normal">
  <h1 class="text-3xl leading-loose">"There three difficultites in translation:</h1>
  <div>
    <b class="text-pink-700">\u4FE1 </b>Faithfulness, 
  </div>
  <div>
    <b class="text-pink-700">\u9054 </b>Expressiveness and 
  </div>
  <div>
    <b class="text-pink-700">\u96C5 </b>Elegance"
  </div>
  <em class="text-xl">by Yen Fu</em>
</div>

<!--
Yen Fu (simplified Chinese: \u4E25\u590D; traditional Chinese: \u56B4\u5FA9; pinyin: Y\xE1n F\xF9; 8 January 1854 \u2014 27 October 1921) 
-->`,frontmatter:{srcSequence:"./section-2.md"},note:`There was a Chinese newspaper editor, translator, and writer. Yen Fu, He was most famous for introducing western ideas, including Darwin's "natural selection", to China in the late 19th century. 

He address the three difficulties in translation "\u4FE1\uFF0C\u9054\uFF0C\u96C5"
The three difficulties became the model of a ideal in translation and influence the translation a lot in publication.

An ideal translation to Chinese or Japanese that follows the three principle could make the length of translation very different from English or to English.

Next slide >>>>>`,index:10,start:34,end:69,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-2.md",raw:`
<h1 class="hidden">
# \u4FE1\u9054\u96C5
</h1>

<div class="absolute bottom-10 text-5xl leading-normal">
  <h1 class="text-3xl leading-loose">"There three difficultites in translation:</h1>
  <div>
    <b class="text-pink-700">\u4FE1 </b>Faithfulness, 
  </div>
  <div>
    <b class="text-pink-700">\u9054 </b>Expressiveness and 
  </div>
  <div>
    <b class="text-pink-700">\u96C5 </b>Elegance"
  </div>
  <em class="text-xl">by Yen Fu</em>
</div>

<!--
Yen Fu (simplified Chinese: \u4E25\u590D; traditional Chinese: \u56B4\u5FA9; pinyin: Y\xE1n F\xF9; 8 January 1854 \u2014 27 October 1921) 
-->

<!--
There was a Chinese newspaper editor, translator, and writer. Yen Fu, He was most famous for introducing western ideas, including Darwin's "natural selection", to China in the late 19th century. 

He address the three difficulties in translation "\u4FE1\uFF0C\u9054\uFF0C\u96C5"
The three difficulties became the model of a ideal in translation and influence the translation a lot in publication.

An ideal translation to Chinese or Japanese that follows the three principle could make the length of translation very different from English or to English.

Next slide >>>>>
-->

`,title:"\u4FE1\u9054\u96C5",level:1,content:`<h1 class="hidden">
# \u4FE1\u9054\u96C5
</h1>

<div class="absolute bottom-10 text-5xl leading-normal">
  <h1 class="text-3xl leading-loose">"There three difficultites in translation:</h1>
  <div>
    <b class="text-pink-700">\u4FE1 </b>Faithfulness, 
  </div>
  <div>
    <b class="text-pink-700">\u9054 </b>Expressiveness and 
  </div>
  <div>
    <b class="text-pink-700">\u96C5 </b>Elegance"
  </div>
  <em class="text-xl">by Yen Fu</em>
</div>

<!--
Yen Fu (simplified Chinese: \u4E25\u590D; traditional Chinese: \u56B4\u5FA9; pinyin: Y\xE1n F\xF9; 8 January 1854 \u2014 27 October 1921) 
-->`,frontmatter:{},note:`There was a Chinese newspaper editor, translator, and writer. Yen Fu, He was most famous for introducing western ideas, including Darwin's "natural selection", to China in the late 19th century. 

He address the three difficulties in translation "\u4FE1\uFF0C\u9054\uFF0C\u96C5"
The three difficulties became the model of a ideal in translation and influence the translation a lot in publication.

An ideal translation to Chinese or Japanese that follows the three principle could make the length of translation very different from English or to English.

Next slide >>>>>`,index:1,start:34,end:69},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-2.md",notesHTML:`<p>There was a Chinese newspaper editor, translator, and writer. Yen Fu, He was most famous for introducing western ideas, including Darwin's &quot;natural selection&quot;, to China in the late 19th century.</p>
<p>He address the three difficulties in translation &quot;\u4FE1\uFF0C\u9054\uFF0C\u96C5&quot;
The three difficulties became the model of a ideal in translation and influence the translation a lot in publication.</p>
<p>An ideal translation to Chinese or Japanese that follows the three principle could make the length of translation very different from English or to English.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:c5,meta:{srcSequence:"./section-2.md",slide:{raw:`
# Translation ratio

| Lang     | Text       | ratio |
| -------- | ---------- | ----- |
| English  | Translate  | 100% |
| Deutsch  | \xDCbersetzen | <span class="text-red-600">127%</span> |
| Czech    | P\u0159elo\u017Eit   | <span class="text-green-600">81%</span> |
| Chinese  | \u7FFB\u8B6F        | <span class="text-green-600">45%</span> |
| Japanese | \u7FFB\u8A33\u3059\u308B    | <span class="text-green-600">91%</span> |
| Korean   | \uBC88\uC5ED\uD558\uB2E4 \u3000   | <span class="text-green-600">83%</span> |

<!--
3 things to keep in mind when designing UI to be translated in different languages
https://blog.prototypr.io/3-things-to-keep-in-mind-when-designing-ui-to-be-translated-in-different-languages-e1d02accf21c
-->

<!--
websites and apps
Most of the latest CMS platforms are now translation friendly and built to handle the expansion and contraction that comes with translations. Developers are creating global-ready apps that are designed to accommodate localization for other countries, languages, and cultures.

Despite the capabilities of web and app development to accommodate multiple languages, it is worth considering a final round of post-localization review. Linguists will review your site and/or app to ensure the appropriate translations were used, have been placed properly, fit the space, and function according to the developer\u2019s specifications.

// https://eriksen.com/language/text-expansion/

-->

<!--
Take the verb "Translate" as an example, the length is different accross languages.
We can see Chinese and Japanese shares similar character here, but still different.

Next slide >>>>>
-->
`,title:"Translation ratio",level:1,content:`# Translation ratio

| Lang     | Text       | ratio |
| -------- | ---------- | ----- |
| English  | Translate  | 100% |
| Deutsch  | \xDCbersetzen | <span class="text-red-600">127%</span> |
| Czech    | P\u0159elo\u017Eit   | <span class="text-green-600">81%</span> |
| Chinese  | \u7FFB\u8B6F        | <span class="text-green-600">45%</span> |
| Japanese | \u7FFB\u8A33\u3059\u308B    | <span class="text-green-600">91%</span> |
| Korean   | \uBC88\uC5ED\uD558\uB2E4 \u3000   | <span class="text-green-600">83%</span> |

<!--
3 things to keep in mind when designing UI to be translated in different languages
https://blog.prototypr.io/3-things-to-keep-in-mind-when-designing-ui-to-be-translated-in-different-languages-e1d02accf21c
-->

<!--
websites and apps
Most of the latest CMS platforms are now translation friendly and built to handle the expansion and contraction that comes with translations. Developers are creating global-ready apps that are designed to accommodate localization for other countries, languages, and cultures.

Despite the capabilities of web and app development to accommodate multiple languages, it is worth considering a final round of post-localization review. Linguists will review your site and/or app to ensure the appropriate translations were used, have been placed properly, fit the space, and function according to the developer\u2019s specifications.

// https://eriksen.com/language/text-expansion/

-->`,frontmatter:{srcSequence:"./section-2.md"},note:`Take the verb "Translate" as an example, the length is different accross languages.
We can see Chinese and Japanese shares similar character here, but still different.

Next slide >>>>>`,index:11,start:70,end:104,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-2.md",raw:`
# Translation ratio

| Lang     | Text       | ratio |
| -------- | ---------- | ----- |
| English  | Translate  | 100% |
| Deutsch  | \xDCbersetzen | <span class="text-red-600">127%</span> |
| Czech    | P\u0159elo\u017Eit   | <span class="text-green-600">81%</span> |
| Chinese  | \u7FFB\u8B6F        | <span class="text-green-600">45%</span> |
| Japanese | \u7FFB\u8A33\u3059\u308B    | <span class="text-green-600">91%</span> |
| Korean   | \uBC88\uC5ED\uD558\uB2E4 \u3000   | <span class="text-green-600">83%</span> |

<!--
3 things to keep in mind when designing UI to be translated in different languages
https://blog.prototypr.io/3-things-to-keep-in-mind-when-designing-ui-to-be-translated-in-different-languages-e1d02accf21c
-->

<!--
websites and apps
Most of the latest CMS platforms are now translation friendly and built to handle the expansion and contraction that comes with translations. Developers are creating global-ready apps that are designed to accommodate localization for other countries, languages, and cultures.

Despite the capabilities of web and app development to accommodate multiple languages, it is worth considering a final round of post-localization review. Linguists will review your site and/or app to ensure the appropriate translations were used, have been placed properly, fit the space, and function according to the developer\u2019s specifications.

// https://eriksen.com/language/text-expansion/

-->

<!--
Take the verb "Translate" as an example, the length is different accross languages.
We can see Chinese and Japanese shares similar character here, but still different.

Next slide >>>>>
-->
`,title:"Translation ratio",level:1,content:`# Translation ratio

| Lang     | Text       | ratio |
| -------- | ---------- | ----- |
| English  | Translate  | 100% |
| Deutsch  | \xDCbersetzen | <span class="text-red-600">127%</span> |
| Czech    | P\u0159elo\u017Eit   | <span class="text-green-600">81%</span> |
| Chinese  | \u7FFB\u8B6F        | <span class="text-green-600">45%</span> |
| Japanese | \u7FFB\u8A33\u3059\u308B    | <span class="text-green-600">91%</span> |
| Korean   | \uBC88\uC5ED\uD558\uB2E4 \u3000   | <span class="text-green-600">83%</span> |

<!--
3 things to keep in mind when designing UI to be translated in different languages
https://blog.prototypr.io/3-things-to-keep-in-mind-when-designing-ui-to-be-translated-in-different-languages-e1d02accf21c
-->

<!--
websites and apps
Most of the latest CMS platforms are now translation friendly and built to handle the expansion and contraction that comes with translations. Developers are creating global-ready apps that are designed to accommodate localization for other countries, languages, and cultures.

Despite the capabilities of web and app development to accommodate multiple languages, it is worth considering a final round of post-localization review. Linguists will review your site and/or app to ensure the appropriate translations were used, have been placed properly, fit the space, and function according to the developer\u2019s specifications.

// https://eriksen.com/language/text-expansion/

-->`,frontmatter:{},note:`Take the verb "Translate" as an example, the length is different accross languages.
We can see Chinese and Japanese shares similar character here, but still different.

Next slide >>>>>`,index:2,start:70,end:104},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-2.md",notesHTML:`<p>Take the verb &quot;Translate&quot; as an example, the length is different accross languages.
We can see Chinese and Japanese shares similar character here, but still different.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:d5,meta:{srcSequence:"./section-2.md",slide:{raw:`
# Translation ratio

| Lang     | Text       | width | ratio |
| -------- | ---------- | ----- | ----- |
| English  | Password field is required. | 225px | 100% |
| Deutsch  | Das Passwortfeld muss ausgef\xFCllt werden. | 363px | <span class="text-red-600">161%</span> |
| Czech    | Heslo je vy\u017Eadov\xE1no. | 182px | <span class="text-green-600">81%</span> |
| Chinese  | \u5FC5\u9808\u586B\u5BEB\u5BC6\u78BC\u6B04\u4F4D\u3002      | 160px | <span class="text-green-600">71%</span> |
| Japanese | \u30D1\u30B9\u30EF\u30FC\u30C9\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5165\u529B\u306F\u5FC5\u9808\u3067\u3059\u3002 | 338px | <span class="text-red-600">150%</span> |
| Korean   | \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC57C \uD569\uB2C8\uB2E4. \u3000   | 215px | <span class="text-green-600">95%</span> |

<!--
Let's expand it a little, take the sentence in Drupal UI as an example.
It is a help text for the password field for login.

How much different in the nuance and length now?
Although "fill" is not in the origin English sentence, we see it shows in Deutsch and Chinese and Japanese at least.

Next slide >>>>>
-->`,title:"Translation ratio",level:1,content:`# Translation ratio

| Lang     | Text       | width | ratio |
| -------- | ---------- | ----- | ----- |
| English  | Password field is required. | 225px | 100% |
| Deutsch  | Das Passwortfeld muss ausgef\xFCllt werden. | 363px | <span class="text-red-600">161%</span> |
| Czech    | Heslo je vy\u017Eadov\xE1no. | 182px | <span class="text-green-600">81%</span> |
| Chinese  | \u5FC5\u9808\u586B\u5BEB\u5BC6\u78BC\u6B04\u4F4D\u3002      | 160px | <span class="text-green-600">71%</span> |
| Japanese | \u30D1\u30B9\u30EF\u30FC\u30C9\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5165\u529B\u306F\u5FC5\u9808\u3067\u3059\u3002 | 338px | <span class="text-red-600">150%</span> |
| Korean   | \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC57C \uD569\uB2C8\uB2E4. \u3000   | 215px | <span class="text-green-600">95%</span> |`,frontmatter:{srcSequence:"./section-2.md"},note:`Let's expand it a little, take the sentence in Drupal UI as an example.
It is a help text for the password field for login.

How much different in the nuance and length now?
Although "fill" is not in the origin English sentence, we see it shows in Deutsch and Chinese and Japanese at least.

Next slide >>>>>`,index:12,start:105,end:126,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-2.md",raw:`
# Translation ratio

| Lang     | Text       | width | ratio |
| -------- | ---------- | ----- | ----- |
| English  | Password field is required. | 225px | 100% |
| Deutsch  | Das Passwortfeld muss ausgef\xFCllt werden. | 363px | <span class="text-red-600">161%</span> |
| Czech    | Heslo je vy\u017Eadov\xE1no. | 182px | <span class="text-green-600">81%</span> |
| Chinese  | \u5FC5\u9808\u586B\u5BEB\u5BC6\u78BC\u6B04\u4F4D\u3002      | 160px | <span class="text-green-600">71%</span> |
| Japanese | \u30D1\u30B9\u30EF\u30FC\u30C9\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5165\u529B\u306F\u5FC5\u9808\u3067\u3059\u3002 | 338px | <span class="text-red-600">150%</span> |
| Korean   | \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC57C \uD569\uB2C8\uB2E4. \u3000   | 215px | <span class="text-green-600">95%</span> |

<!--
Let's expand it a little, take the sentence in Drupal UI as an example.
It is a help text for the password field for login.

How much different in the nuance and length now?
Although "fill" is not in the origin English sentence, we see it shows in Deutsch and Chinese and Japanese at least.

Next slide >>>>>
-->`,title:"Translation ratio",level:1,content:`# Translation ratio

| Lang     | Text       | width | ratio |
| -------- | ---------- | ----- | ----- |
| English  | Password field is required. | 225px | 100% |
| Deutsch  | Das Passwortfeld muss ausgef\xFCllt werden. | 363px | <span class="text-red-600">161%</span> |
| Czech    | Heslo je vy\u017Eadov\xE1no. | 182px | <span class="text-green-600">81%</span> |
| Chinese  | \u5FC5\u9808\u586B\u5BEB\u5BC6\u78BC\u6B04\u4F4D\u3002      | 160px | <span class="text-green-600">71%</span> |
| Japanese | \u30D1\u30B9\u30EF\u30FC\u30C9\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5165\u529B\u306F\u5FC5\u9808\u3067\u3059\u3002 | 338px | <span class="text-red-600">150%</span> |
| Korean   | \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC57C \uD569\uB2C8\uB2E4. \u3000   | 215px | <span class="text-green-600">95%</span> |`,frontmatter:{},note:`Let's expand it a little, take the sentence in Drupal UI as an example.
It is a help text for the password field for login.

How much different in the nuance and length now?
Although "fill" is not in the origin English sentence, we see it shows in Deutsch and Chinese and Japanese at least.

Next slide >>>>>`,index:3,start:105,end:126},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-2.md",notesHTML:`<p>Let's expand it a little, take the sentence in Drupal UI as an example.
It is a help text for the password field for login.</p>
<p>How much different in the nuance and length now?
Although &quot;fill&quot; is not in the origin English sentence, we see it shows in Deutsch and Chinese and Japanese at least.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:y5,meta:{srcSequence:"./section-2.md",slide:{raw:`
# Expansion / Contraction

https://www.linkedin.com/pulse/text-expansion-contraction-translation-jennifer-murphy
<div>
  <img src="/images/translation-ratio.png" class="w-4/5"/>
</div>

<!--
As previously mentioned, German will be considerably longer than, for example, English copy. Or Koreans may not use spaces to separate words, and Japanese could be longer or shorter than English coopy in the mean time. This expansion or contraction will mess up a non-adaptive layout. 

The best way to accommodate the situation, if the translated page is really crucial to your website, it is better to mocking up the design with actual text as soon as possible.

Next slide >>>>>
-->`,title:"Expansion / Contraction",level:1,content:`# Expansion / Contraction

https://www.linkedin.com/pulse/text-expansion-contraction-translation-jennifer-murphy
<div>
  <img src="/images/translation-ratio.png" class="w-4/5"/>
</div>`,frontmatter:{srcSequence:"./section-2.md"},note:`As previously mentioned, German will be considerably longer than, for example, English copy. Or Koreans may not use spaces to separate words, and Japanese could be longer or shorter than English coopy in the mean time. This expansion or contraction will mess up a non-adaptive layout. 

The best way to accommodate the situation, if the translated page is really crucial to your website, it is better to mocking up the design with actual text as soon as possible.

Next slide >>>>>`,index:13,start:127,end:142,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-2.md",raw:`
# Expansion / Contraction

https://www.linkedin.com/pulse/text-expansion-contraction-translation-jennifer-murphy
<div>
  <img src="/images/translation-ratio.png" class="w-4/5"/>
</div>

<!--
As previously mentioned, German will be considerably longer than, for example, English copy. Or Koreans may not use spaces to separate words, and Japanese could be longer or shorter than English coopy in the mean time. This expansion or contraction will mess up a non-adaptive layout. 

The best way to accommodate the situation, if the translated page is really crucial to your website, it is better to mocking up the design with actual text as soon as possible.

Next slide >>>>>
-->`,title:"Expansion / Contraction",level:1,content:`# Expansion / Contraction

https://www.linkedin.com/pulse/text-expansion-contraction-translation-jennifer-murphy
<div>
  <img src="/images/translation-ratio.png" class="w-4/5"/>
</div>`,frontmatter:{},note:`As previously mentioned, German will be considerably longer than, for example, English copy. Or Koreans may not use spaces to separate words, and Japanese could be longer or shorter than English coopy in the mean time. This expansion or contraction will mess up a non-adaptive layout. 

The best way to accommodate the situation, if the translated page is really crucial to your website, it is better to mocking up the design with actual text as soon as possible.

Next slide >>>>>`,index:4,start:127,end:142},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-2.md",notesHTML:`<p>As previously mentioned, German will be considerably longer than, for example, English copy. Or Koreans may not use spaces to separate words, and Japanese could be longer or shorter than English coopy in the mean time. This expansion or contraction will mess up a non-adaptive layout.</p>
<p>The best way to accommodate the situation, if the translated page is really crucial to your website, it is better to mocking up the design with actual text as soon as possible.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:A5,meta:{srcSequence:"./section-2.md",slide:{raw:`
# Design with translation in mind

<div class="flex flex-col overflow-y-scroll mb-4">
  <div class="grid grid-cols-2 gap-2 h-100">
    <img src="/images/hp-variation-en.png" />
    <img src="/images/hp-variation-ja.png" />
  </div>
</div>
<div class="text-center margin-auto text-gray-500/80">
    Scroll \u2B65
</div>

<!--
In the homepage of our new website design, we want to keep the rhythm and portion of each section.

Our designer checks the balance of the design, decide where the text should be break into next line, how many rows should we use for different language.
Our translator also help reducing the translation when necessary.

The longer the original text it is, the more it needs to be taken care of.

Next slide >>>>>
-->
`,title:"Design with translation in mind",level:1,content:`# Design with translation in mind

<div class="flex flex-col overflow-y-scroll mb-4">
  <div class="grid grid-cols-2 gap-2 h-100">
    <img src="/images/hp-variation-en.png" />
    <img src="/images/hp-variation-ja.png" />
  </div>
</div>
<div class="text-center margin-auto text-gray-500/80">
    Scroll \u2B65
</div>`,frontmatter:{srcSequence:"./section-2.md"},note:`In the homepage of our new website design, we want to keep the rhythm and portion of each section.

Our designer checks the balance of the design, decide where the text should be break into next line, how many rows should we use for different language.
Our translator also help reducing the translation when necessary.

The longer the original text it is, the more it needs to be taken care of.

Next slide >>>>>`,index:14,start:143,end:167,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-2.md",raw:`
# Design with translation in mind

<div class="flex flex-col overflow-y-scroll mb-4">
  <div class="grid grid-cols-2 gap-2 h-100">
    <img src="/images/hp-variation-en.png" />
    <img src="/images/hp-variation-ja.png" />
  </div>
</div>
<div class="text-center margin-auto text-gray-500/80">
    Scroll \u2B65
</div>

<!--
In the homepage of our new website design, we want to keep the rhythm and portion of each section.

Our designer checks the balance of the design, decide where the text should be break into next line, how many rows should we use for different language.
Our translator also help reducing the translation when necessary.

The longer the original text it is, the more it needs to be taken care of.

Next slide >>>>>
-->
`,title:"Design with translation in mind",level:1,content:`# Design with translation in mind

<div class="flex flex-col overflow-y-scroll mb-4">
  <div class="grid grid-cols-2 gap-2 h-100">
    <img src="/images/hp-variation-en.png" />
    <img src="/images/hp-variation-ja.png" />
  </div>
</div>
<div class="text-center margin-auto text-gray-500/80">
    Scroll \u2B65
</div>`,frontmatter:{},note:`In the homepage of our new website design, we want to keep the rhythm and portion of each section.

Our designer checks the balance of the design, decide where the text should be break into next line, how many rows should we use for different language.
Our translator also help reducing the translation when necessary.

The longer the original text it is, the more it needs to be taken care of.

Next slide >>>>>`,index:5,start:143,end:167},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-2.md",notesHTML:`<p>In the homepage of our new website design, we want to keep the rhythm and portion of each section.</p>
<p>Our designer checks the balance of the design, decide where the text should be break into next line, how many rows should we use for different language.
Our translator also help reducing the translation when necessary.</p>
<p>The longer the original text it is, the more it needs to be taken care of.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:D5,meta:{srcSequence:"./section-2.md",slide:{raw:`
# Natural Language Forms

![](/images/2022-08-28-23-29-07.png)

<!--
During my research of localize the user experience, I found a interesting UI design which is called Natural Lanugage Form.

It tries to make the form into a dialog, blend the fields into a sentence, to communicate to the user naturally.
However, this is not very suitable for tranlation.

Next slide >>>>>
-->`,title:"Natural Language Forms",level:1,content:`# Natural Language Forms

![](/images/2022-08-28-23-29-07.png)`,frontmatter:{srcSequence:"./section-2.md"},note:`During my research of localize the user experience, I found a interesting UI design which is called Natural Lanugage Form.

It tries to make the form into a dialog, blend the fields into a sentence, to communicate to the user naturally.
However, this is not very suitable for tranlation.

Next slide >>>>>`,index:15,start:168,end:181,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-2.md",raw:`
# Natural Language Forms

![](/images/2022-08-28-23-29-07.png)

<!--
During my research of localize the user experience, I found a interesting UI design which is called Natural Lanugage Form.

It tries to make the form into a dialog, blend the fields into a sentence, to communicate to the user naturally.
However, this is not very suitable for tranlation.

Next slide >>>>>
-->`,title:"Natural Language Forms",level:1,content:`# Natural Language Forms

![](/images/2022-08-28-23-29-07.png)`,frontmatter:{},note:`During my research of localize the user experience, I found a interesting UI design which is called Natural Lanugage Form.

It tries to make the form into a dialog, blend the fields into a sentence, to communicate to the user naturally.
However, this is not very suitable for tranlation.

Next slide >>>>>`,index:6,start:168,end:181},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-2.md",notesHTML:`<p>During my research of localize the user experience, I found a interesting UI design which is called Natural Lanugage Form.</p>
<p>It tries to make the form into a dialog, blend the fields into a sentence, to communicate to the user naturally.
However, this is not very suitable for tranlation.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:I5,meta:{srcSequence:"./section-2.md",slide:{raw:`
# Natural Language Forms

<div class="flex flex-col text-xl mt-12 text-gray-500">
  <div class="leading-16">
    <h2 class="text-gray-700 mb-4">English</h2>
    My name is <span class="px-3 py-2 bg-gray-200 text-gray-900">Sophia <span class="n1">\u2776</span></span> and 
    I'd like to depart <span class="px-3 py-2 bg-gray-200 text-gray-900">Sydney <span class="n2">\u2777</span></span> city 
    on <span class="px-3 py-2 bg-gray-200 text-gray-900">Thursday <span class="n3">\u2778</span></span> and 
    arrive in <span class="px-3 py-2 bg-gray-200 text-gray-900">Melbourne <span class="n4">\u2779</span></span> city.
  </div>

  
  <div class="mt-12 leading-12">
    <h2 class="text-gray-700 mb-4">Fran\xE7ais</h2>
    Je m'appelle <span class="px-3 py-2 bg-gray-200 text-gray-900">Sophia <span class="n1">\u2776</span></span> 
    et je voudrais quitter la ville de <span class="px-3 py-2 bg-gray-200 text-gray-900">Sydney <span class="n2">\u2777</span></span> 
    le <span class="px-3 py-2 bg-gray-200 text-gray-900">jeudi <span class="n3">\u2778</span></span><br />
    et arriver \xE0 la ville de <span class="px-3 py-2 bg-gray-200 text-gray-900">Melbourne <span class="n4">\u2779</span></span>
  </div>
</div>

<style>
  .n1, .n2, .n3, .n4 {
    @apply text-3xl inline-block transform translate-y-1;
  }
  .n1 {
    @apply text-red-500;
  }
  .n2 {
    @apply text-blue-500;
  }
  .n3 {
    @apply text-orange-500;
  }
  .n4 {
    @apply text-green-500;
  }
</style>

<!-- 
Because a good translation of a full sentence or paragraph need to be natural to the speaker.

In this example, the fields could be the same order in English or French.

Next slide >>>>>

-->
`,title:"Natural Language Forms",level:1,content:`# Natural Language Forms

<div class="flex flex-col text-xl mt-12 text-gray-500">
  <div class="leading-16">
    <h2 class="text-gray-700 mb-4">English</h2>
    My name is <span class="px-3 py-2 bg-gray-200 text-gray-900">Sophia <span class="n1">\u2776</span></span> and 
    I'd like to depart <span class="px-3 py-2 bg-gray-200 text-gray-900">Sydney <span class="n2">\u2777</span></span> city 
    on <span class="px-3 py-2 bg-gray-200 text-gray-900">Thursday <span class="n3">\u2778</span></span> and 
    arrive in <span class="px-3 py-2 bg-gray-200 text-gray-900">Melbourne <span class="n4">\u2779</span></span> city.
  </div>

  
  <div class="mt-12 leading-12">
    <h2 class="text-gray-700 mb-4">Fran\xE7ais</h2>
    Je m'appelle <span class="px-3 py-2 bg-gray-200 text-gray-900">Sophia <span class="n1">\u2776</span></span> 
    et je voudrais quitter la ville de <span class="px-3 py-2 bg-gray-200 text-gray-900">Sydney <span class="n2">\u2777</span></span> 
    le <span class="px-3 py-2 bg-gray-200 text-gray-900">jeudi <span class="n3">\u2778</span></span><br />
    et arriver \xE0 la ville de <span class="px-3 py-2 bg-gray-200 text-gray-900">Melbourne <span class="n4">\u2779</span></span>
  </div>
</div>

<style>
  .n1, .n2, .n3, .n4 {
    @apply text-3xl inline-block transform translate-y-1;
  }
  .n1 {
    @apply text-red-500;
  }
  .n2 {
    @apply text-blue-500;
  }
  .n3 {
    @apply text-orange-500;
  }
  .n4 {
    @apply text-green-500;
  }
</style>`,frontmatter:{srcSequence:"./section-2.md"},note:`Because a good translation of a full sentence or paragraph need to be natural to the speaker.

In this example, the fields could be the same order in English or French.

Next slide >>>>>`,index:16,start:182,end:231,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-2.md",raw:`
# Natural Language Forms

<div class="flex flex-col text-xl mt-12 text-gray-500">
  <div class="leading-16">
    <h2 class="text-gray-700 mb-4">English</h2>
    My name is <span class="px-3 py-2 bg-gray-200 text-gray-900">Sophia <span class="n1">\u2776</span></span> and 
    I'd like to depart <span class="px-3 py-2 bg-gray-200 text-gray-900">Sydney <span class="n2">\u2777</span></span> city 
    on <span class="px-3 py-2 bg-gray-200 text-gray-900">Thursday <span class="n3">\u2778</span></span> and 
    arrive in <span class="px-3 py-2 bg-gray-200 text-gray-900">Melbourne <span class="n4">\u2779</span></span> city.
  </div>

  
  <div class="mt-12 leading-12">
    <h2 class="text-gray-700 mb-4">Fran\xE7ais</h2>
    Je m'appelle <span class="px-3 py-2 bg-gray-200 text-gray-900">Sophia <span class="n1">\u2776</span></span> 
    et je voudrais quitter la ville de <span class="px-3 py-2 bg-gray-200 text-gray-900">Sydney <span class="n2">\u2777</span></span> 
    le <span class="px-3 py-2 bg-gray-200 text-gray-900">jeudi <span class="n3">\u2778</span></span><br />
    et arriver \xE0 la ville de <span class="px-3 py-2 bg-gray-200 text-gray-900">Melbourne <span class="n4">\u2779</span></span>
  </div>
</div>

<style>
  .n1, .n2, .n3, .n4 {
    @apply text-3xl inline-block transform translate-y-1;
  }
  .n1 {
    @apply text-red-500;
  }
  .n2 {
    @apply text-blue-500;
  }
  .n3 {
    @apply text-orange-500;
  }
  .n4 {
    @apply text-green-500;
  }
</style>

<!-- 
Because a good translation of a full sentence or paragraph need to be natural to the speaker.

In this example, the fields could be the same order in English or French.

Next slide >>>>>

-->
`,title:"Natural Language Forms",level:1,content:`# Natural Language Forms

<div class="flex flex-col text-xl mt-12 text-gray-500">
  <div class="leading-16">
    <h2 class="text-gray-700 mb-4">English</h2>
    My name is <span class="px-3 py-2 bg-gray-200 text-gray-900">Sophia <span class="n1">\u2776</span></span> and 
    I'd like to depart <span class="px-3 py-2 bg-gray-200 text-gray-900">Sydney <span class="n2">\u2777</span></span> city 
    on <span class="px-3 py-2 bg-gray-200 text-gray-900">Thursday <span class="n3">\u2778</span></span> and 
    arrive in <span class="px-3 py-2 bg-gray-200 text-gray-900">Melbourne <span class="n4">\u2779</span></span> city.
  </div>

  
  <div class="mt-12 leading-12">
    <h2 class="text-gray-700 mb-4">Fran\xE7ais</h2>
    Je m'appelle <span class="px-3 py-2 bg-gray-200 text-gray-900">Sophia <span class="n1">\u2776</span></span> 
    et je voudrais quitter la ville de <span class="px-3 py-2 bg-gray-200 text-gray-900">Sydney <span class="n2">\u2777</span></span> 
    le <span class="px-3 py-2 bg-gray-200 text-gray-900">jeudi <span class="n3">\u2778</span></span><br />
    et arriver \xE0 la ville de <span class="px-3 py-2 bg-gray-200 text-gray-900">Melbourne <span class="n4">\u2779</span></span>
  </div>
</div>

<style>
  .n1, .n2, .n3, .n4 {
    @apply text-3xl inline-block transform translate-y-1;
  }
  .n1 {
    @apply text-red-500;
  }
  .n2 {
    @apply text-blue-500;
  }
  .n3 {
    @apply text-orange-500;
  }
  .n4 {
    @apply text-green-500;
  }
</style>`,frontmatter:{},note:`Because a good translation of a full sentence or paragraph need to be natural to the speaker.

In this example, the fields could be the same order in English or French.

Next slide >>>>>`,index:7,start:182,end:231},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-2.md",notesHTML:`<p>Because a good translation of a full sentence or paragraph need to be natural to the speaker.</p>
<p>In this example, the fields could be the same order in English or French.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:j5,meta:{srcSequence:"./section-2.md",slide:{raw:`
# Natural Language Forms

<div class="flex flex-col text-xl mt-12 text-gray-500">
  <div class="leading-16">
    <h2 class="text-gray-700 mb-4">Deutsch</h2>
    Mein Name ist <span class="px-3 py-2 bg-gray-200 text-gray-900">Sophia <span class="n1">\u2776</span></span> 
    und ich m\xF6chte am <span class="px-3 py-2 bg-gray-200 text-gray-900">Donnerstag <span class="n3">\u2778</span></span> 
    in <span class="px-3 py-2 bg-gray-200 text-gray-900">Sydney <span class="n2">\u2777</span></span> abreisen 
    und in <span class="px-3 py-2 bg-gray-200 text-gray-900">Melbourne <span class="n4">\u2779</span></span> ankommen.
  </div>
  <div class="mt-12 leading-12">
    <h2 class="text-gray-700 mb-4">\u65E5\u672C\u8A9E</h2>
    \u79C1\u306E\u540D\u524D\u306F <span class="px-3 py-2 bg-gray-200 text-gray-900">\u738B\u5927\u660E <span class="n1">\u2776</span></span> \u3067\u3059\uFF0C
    <span class="px-3 py-2 bg-gray-200 text-gray-900">\u6728\u66DC\u65E5 <span class="n3">\u2778</span></span> \u306B\u3001 
    <span class="px-3 py-2 bg-gray-200 text-gray-900">\u96EA\u68A8 <span class="n2">\u2777</span></span> \u3092\u51FA\u767A\u3057\u3066
    <span class="px-3 py-2 bg-gray-200 text-gray-900">\u58A8\u723E\u672C <span class="n4">\u2779</span></span> \u306B\u5230\u7740\u3057\u305F\u3044\u3067\u3059\u3002
  </div>
</div>

<style>
  .n1, .n2, .n3, .n4 {
    @apply text-3xl inline-block transform translate-y-1;
  }
  .n1 {
    @apply text-red-500;
  }
  .n2 {
    @apply text-blue-500;
  }
  .n3 {
    @apply text-orange-500;
  }
  .n4 {
    @apply text-green-500;
  }
</style>

<!--
But in Deutsch or Japanese, the position of time or date is more strict in the sentence. 
The mix of translation and fields position cannot be easy resolved by using the t() function.

So, I started to think in my experience, what localization issues that are beyond the text translation.
What efforts do we do in our institue who treat two languages equally important.

Next Slide >>>>>
-->
`,title:"Natural Language Forms",level:1,content:`# Natural Language Forms

<div class="flex flex-col text-xl mt-12 text-gray-500">
  <div class="leading-16">
    <h2 class="text-gray-700 mb-4">Deutsch</h2>
    Mein Name ist <span class="px-3 py-2 bg-gray-200 text-gray-900">Sophia <span class="n1">\u2776</span></span> 
    und ich m\xF6chte am <span class="px-3 py-2 bg-gray-200 text-gray-900">Donnerstag <span class="n3">\u2778</span></span> 
    in <span class="px-3 py-2 bg-gray-200 text-gray-900">Sydney <span class="n2">\u2777</span></span> abreisen 
    und in <span class="px-3 py-2 bg-gray-200 text-gray-900">Melbourne <span class="n4">\u2779</span></span> ankommen.
  </div>
  <div class="mt-12 leading-12">
    <h2 class="text-gray-700 mb-4">\u65E5\u672C\u8A9E</h2>
    \u79C1\u306E\u540D\u524D\u306F <span class="px-3 py-2 bg-gray-200 text-gray-900">\u738B\u5927\u660E <span class="n1">\u2776</span></span> \u3067\u3059\uFF0C
    <span class="px-3 py-2 bg-gray-200 text-gray-900">\u6728\u66DC\u65E5 <span class="n3">\u2778</span></span> \u306B\u3001 
    <span class="px-3 py-2 bg-gray-200 text-gray-900">\u96EA\u68A8 <span class="n2">\u2777</span></span> \u3092\u51FA\u767A\u3057\u3066
    <span class="px-3 py-2 bg-gray-200 text-gray-900">\u58A8\u723E\u672C <span class="n4">\u2779</span></span> \u306B\u5230\u7740\u3057\u305F\u3044\u3067\u3059\u3002
  </div>
</div>

<style>
  .n1, .n2, .n3, .n4 {
    @apply text-3xl inline-block transform translate-y-1;
  }
  .n1 {
    @apply text-red-500;
  }
  .n2 {
    @apply text-blue-500;
  }
  .n3 {
    @apply text-orange-500;
  }
  .n4 {
    @apply text-green-500;
  }
</style>`,frontmatter:{srcSequence:"./section-2.md"},note:`But in Deutsch or Japanese, the position of time or date is more strict in the sentence. 
The mix of translation and fields position cannot be easy resolved by using the t() function.

So, I started to think in my experience, what localization issues that are beyond the text translation.
What efforts do we do in our institue who treat two languages equally important.

Next Slide >>>>>`,index:17,start:232,end:280,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-2.md",raw:`
# Natural Language Forms

<div class="flex flex-col text-xl mt-12 text-gray-500">
  <div class="leading-16">
    <h2 class="text-gray-700 mb-4">Deutsch</h2>
    Mein Name ist <span class="px-3 py-2 bg-gray-200 text-gray-900">Sophia <span class="n1">\u2776</span></span> 
    und ich m\xF6chte am <span class="px-3 py-2 bg-gray-200 text-gray-900">Donnerstag <span class="n3">\u2778</span></span> 
    in <span class="px-3 py-2 bg-gray-200 text-gray-900">Sydney <span class="n2">\u2777</span></span> abreisen 
    und in <span class="px-3 py-2 bg-gray-200 text-gray-900">Melbourne <span class="n4">\u2779</span></span> ankommen.
  </div>
  <div class="mt-12 leading-12">
    <h2 class="text-gray-700 mb-4">\u65E5\u672C\u8A9E</h2>
    \u79C1\u306E\u540D\u524D\u306F <span class="px-3 py-2 bg-gray-200 text-gray-900">\u738B\u5927\u660E <span class="n1">\u2776</span></span> \u3067\u3059\uFF0C
    <span class="px-3 py-2 bg-gray-200 text-gray-900">\u6728\u66DC\u65E5 <span class="n3">\u2778</span></span> \u306B\u3001 
    <span class="px-3 py-2 bg-gray-200 text-gray-900">\u96EA\u68A8 <span class="n2">\u2777</span></span> \u3092\u51FA\u767A\u3057\u3066
    <span class="px-3 py-2 bg-gray-200 text-gray-900">\u58A8\u723E\u672C <span class="n4">\u2779</span></span> \u306B\u5230\u7740\u3057\u305F\u3044\u3067\u3059\u3002
  </div>
</div>

<style>
  .n1, .n2, .n3, .n4 {
    @apply text-3xl inline-block transform translate-y-1;
  }
  .n1 {
    @apply text-red-500;
  }
  .n2 {
    @apply text-blue-500;
  }
  .n3 {
    @apply text-orange-500;
  }
  .n4 {
    @apply text-green-500;
  }
</style>

<!--
But in Deutsch or Japanese, the position of time or date is more strict in the sentence. 
The mix of translation and fields position cannot be easy resolved by using the t() function.

So, I started to think in my experience, what localization issues that are beyond the text translation.
What efforts do we do in our institue who treat two languages equally important.

Next Slide >>>>>
-->
`,title:"Natural Language Forms",level:1,content:`# Natural Language Forms

<div class="flex flex-col text-xl mt-12 text-gray-500">
  <div class="leading-16">
    <h2 class="text-gray-700 mb-4">Deutsch</h2>
    Mein Name ist <span class="px-3 py-2 bg-gray-200 text-gray-900">Sophia <span class="n1">\u2776</span></span> 
    und ich m\xF6chte am <span class="px-3 py-2 bg-gray-200 text-gray-900">Donnerstag <span class="n3">\u2778</span></span> 
    in <span class="px-3 py-2 bg-gray-200 text-gray-900">Sydney <span class="n2">\u2777</span></span> abreisen 
    und in <span class="px-3 py-2 bg-gray-200 text-gray-900">Melbourne <span class="n4">\u2779</span></span> ankommen.
  </div>
  <div class="mt-12 leading-12">
    <h2 class="text-gray-700 mb-4">\u65E5\u672C\u8A9E</h2>
    \u79C1\u306E\u540D\u524D\u306F <span class="px-3 py-2 bg-gray-200 text-gray-900">\u738B\u5927\u660E <span class="n1">\u2776</span></span> \u3067\u3059\uFF0C
    <span class="px-3 py-2 bg-gray-200 text-gray-900">\u6728\u66DC\u65E5 <span class="n3">\u2778</span></span> \u306B\u3001 
    <span class="px-3 py-2 bg-gray-200 text-gray-900">\u96EA\u68A8 <span class="n2">\u2777</span></span> \u3092\u51FA\u767A\u3057\u3066
    <span class="px-3 py-2 bg-gray-200 text-gray-900">\u58A8\u723E\u672C <span class="n4">\u2779</span></span> \u306B\u5230\u7740\u3057\u305F\u3044\u3067\u3059\u3002
  </div>
</div>

<style>
  .n1, .n2, .n3, .n4 {
    @apply text-3xl inline-block transform translate-y-1;
  }
  .n1 {
    @apply text-red-500;
  }
  .n2 {
    @apply text-blue-500;
  }
  .n3 {
    @apply text-orange-500;
  }
  .n4 {
    @apply text-green-500;
  }
</style>`,frontmatter:{},note:`But in Deutsch or Japanese, the position of time or date is more strict in the sentence. 
The mix of translation and fields position cannot be easy resolved by using the t() function.

So, I started to think in my experience, what localization issues that are beyond the text translation.
What efforts do we do in our institue who treat two languages equally important.

Next Slide >>>>>`,index:8,start:232,end:280},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-2.md",notesHTML:`<p>But in Deutsch or Japanese, the position of time or date is more strict in the sentence.
The mix of translation and fields position cannot be easy resolved by using the t() function.</p>
<p>So, I started to think in my experience, what localization issues that are beyond the text translation.
What efforts do we do in our institue who treat two languages equally important.</p>
<p>Next Slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:L5,meta:{layout:"intro-image",image:"/images/calendar-sept-estee-janssens.jpg",title:"===== Calendar & Date =====",srcSequence:"./section-3.md",slide:{raw:null,title:"===== Calendar & Date =====",level:1,content:`<div class="hidden">
# ===== Calendar & Date =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1>Calendar</h1>
  <p>translation and design</p>
</div>

<!--
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
-->`,frontmatter:{layout:"intro-image",image:"/images/calendar-sept-estee-janssens.jpg",title:"===== Calendar & Date =====",srcSequence:"./section-3.md"},note:`Date, it was the first challenge in the design.

When talking about the date, we know there are translations for month, for weekdays, but they are just translations.

What else could affects the localization? 

Next slide >>>>>`,index:18,start:0,end:35,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",raw:`---
layout: intro-image
image: /images/calendar-sept-estee-janssens.jpg
---

<div class="hidden">
# ===== Calendar & Date =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1>Calendar</h1>
  <p>translation and design</p>
</div>

<!--
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
-->

<!--
Date, it was the first challenge in the design.

When talking about the date, we know there are translations for month, for weekdays, but they are just translations.

What else could affects the localization? 

Next slide >>>>>
-->
`,title:"===== Calendar & Date =====",level:1,content:`<div class="hidden">
# ===== Calendar & Date =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1>Calendar</h1>
  <p>translation and design</p>
</div>

<!--
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
-->`,frontmatter:{layout:"intro-image",image:"/images/calendar-sept-estee-janssens.jpg",title:"===== Calendar & Date ====="},note:`Date, it was the first challenge in the design.

When talking about the date, we know there are translations for month, for weekdays, but they are just translations.

What else could affects the localization? 

Next slide >>>>>`,index:0,start:0,end:35},inline:{raw:`---
src: ./section-3.md
---
<!-- this page will be loaded from './section-3.md' -->
# 3. Issue about date`,title:"3. Issue about date",level:1,content:`<!-- this page will be loaded from './section-3.md' -->
# 3. Issue about date`,frontmatter:{},index:6,start:168,end:173},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",notesHTML:`<p>Date, it was the first challenge in the design.</p>
<p>When talking about the date, we know there are translations for month, for weekdays, but they are just translations.</p>
<p>What else could affects the localization?</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:K5,meta:{srcSequence:"./section-3.md",slide:{raw:`
# Gregorian Calendar

<div class="flex flex-row flex-wrap justify-center">
  <img src="/images/2022-09-08-15-49-06.png" class="h-110 w-auto" />
</div>

<!--
Oh, there is actually a name of the most common calendar system. Gregorian Calendar.

The calendar used in most of the world. It was introduced in October 1582 by Pope Grgory XIII (the 8th)

12 months of 28-31 days each, 365 days a year with a leap day being added to February in the leap year.

However, do we all interpret the date of Gregorian calendar in the same way?

Next slide >>>>>
-->
`,title:"Gregorian Calendar",level:1,content:`# Gregorian Calendar

<div class="flex flex-row flex-wrap justify-center">
  <img src="/images/2022-09-08-15-49-06.png" class="h-110 w-auto" />
</div>`,frontmatter:{srcSequence:"./section-3.md"},note:`Oh, there is actually a name of the most common calendar system. Gregorian Calendar.

The calendar used in most of the world. It was introduced in October 1582 by Pope Grgory XIII (the 8th)

12 months of 28-31 days each, 365 days a year with a leap day being added to February in the leap year.

However, do we all interpret the date of Gregorian calendar in the same way?

Next slide >>>>>`,index:19,start:36,end:55,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",raw:`
# Gregorian Calendar

<div class="flex flex-row flex-wrap justify-center">
  <img src="/images/2022-09-08-15-49-06.png" class="h-110 w-auto" />
</div>

<!--
Oh, there is actually a name of the most common calendar system. Gregorian Calendar.

The calendar used in most of the world. It was introduced in October 1582 by Pope Grgory XIII (the 8th)

12 months of 28-31 days each, 365 days a year with a leap day being added to February in the leap year.

However, do we all interpret the date of Gregorian calendar in the same way?

Next slide >>>>>
-->
`,title:"Gregorian Calendar",level:1,content:`# Gregorian Calendar

<div class="flex flex-row flex-wrap justify-center">
  <img src="/images/2022-09-08-15-49-06.png" class="h-110 w-auto" />
</div>`,frontmatter:{},note:`Oh, there is actually a name of the most common calendar system. Gregorian Calendar.

The calendar used in most of the world. It was introduced in October 1582 by Pope Grgory XIII (the 8th)

12 months of 28-31 days each, 365 days a year with a leap day being added to February in the leap year.

However, do we all interpret the date of Gregorian calendar in the same way?

Next slide >>>>>`,index:1,start:36,end:55},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",notesHTML:`<p>Oh, there is actually a name of the most common calendar system. Gregorian Calendar.</p>
<p>The calendar used in most of the world. It was introduced in October 1582 by Pope Grgory XIII (the 8th)</p>
<p>12 months of 28-31 days each, 365 days a year with a leap day being added to February in the leap year.</p>
<p>However, do we all interpret the date of Gregorian calendar in the same way?</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Y5,meta:{layout:"fact",srcSequence:"./section-3.md",slide:{raw:`---
layout: fact
---

# 9/12/2022

<span class="text-blue-400">Sep. 12</span> vs. <span class="text-teal-400">Dec. 9</span>

<!--
If you see September, please raise your hand.

OK I'm sure I'm in Europe, because it is the way to format it with the order from day to month and than year.
But is is rare in states of America.

In our institute, we have diverse members including telented researcher, staff from the world, we have to find a common way to make sure our understanding of information are on the same page.

Next slide >>>>>
-->`,title:"9/12/2022",level:1,content:`# 9/12/2022

<span class="text-blue-400">Sep. 12</span> vs. <span class="text-teal-400">Dec. 9</span>`,frontmatter:{layout:"fact",srcSequence:"./section-3.md"},note:`If you see September, please raise your hand.

OK I'm sure I'm in Europe, because it is the way to format it with the order from day to month and than year.
But is is rare in states of America.

In our institute, we have diverse members including telented researcher, staff from the world, we have to find a common way to make sure our understanding of information are on the same page.

Next slide >>>>>`,index:20,start:55,end:73,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",raw:`---
layout: fact
---

# 9/12/2022

<span class="text-blue-400">Sep. 12</span> vs. <span class="text-teal-400">Dec. 9</span>

<!--
If you see September, please raise your hand.

OK I'm sure I'm in Europe, because it is the way to format it with the order from day to month and than year.
But is is rare in states of America.

In our institute, we have diverse members including telented researcher, staff from the world, we have to find a common way to make sure our understanding of information are on the same page.

Next slide >>>>>
-->`,title:"9/12/2022",level:1,content:`# 9/12/2022

<span class="text-blue-400">Sep. 12</span> vs. <span class="text-teal-400">Dec. 9</span>`,frontmatter:{layout:"fact"},note:`If you see September, please raise your hand.

OK I'm sure I'm in Europe, because it is the way to format it with the order from day to month and than year.
But is is rare in states of America.

In our institute, we have diverse members including telented researcher, staff from the world, we have to find a common way to make sure our understanding of information are on the same page.

Next slide >>>>>`,index:2,start:55,end:73},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",notesHTML:`<p>If you see September, please raise your hand.</p>
<p>OK I'm sure I'm in Europe, because it is the way to format it with the order from day to month and than year.
But is is rare in states of America.</p>
<p>In our institute, we have diverse members including telented researcher, staff from the world, we have to find a common way to make sure our understanding of information are on the same page.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:Z5,meta:{layout:"fact",srcSequence:"./section-3.md",slide:{raw:`---
layout: fact
---

# YYYY-mm-dd


ISO 8601 Formats

<!-- 
Therefore, unless we write the Month in text, otherwise we use ISO 8601 format because it is also the same order of format for Japanese UI.

Next slide >>>>>
-->

`,title:"YYYY-mm-dd",level:1,content:`# YYYY-mm-dd


ISO 8601 Formats`,frontmatter:{layout:"fact",srcSequence:"./section-3.md"},note:`Therefore, unless we write the Month in text, otherwise we use ISO 8601 format because it is also the same order of format for Japanese UI.

Next slide >>>>>`,index:21,start:73,end:89,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",raw:`---
layout: fact
---

# YYYY-mm-dd


ISO 8601 Formats

<!-- 
Therefore, unless we write the Month in text, otherwise we use ISO 8601 format because it is also the same order of format for Japanese UI.

Next slide >>>>>
-->

`,title:"YYYY-mm-dd",level:1,content:`# YYYY-mm-dd


ISO 8601 Formats`,frontmatter:{layout:"fact"},note:`Therefore, unless we write the Month in text, otherwise we use ISO 8601 format because it is also the same order of format for Japanese UI.

Next slide >>>>>`,index:3,start:73,end:89},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",notesHTML:`<p>Therefore, unless we write the Month in text, otherwise we use ISO 8601 format because it is also the same order of format for Japanese UI.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:nw,meta:{layout:"fact",srcSequence:"./section-3.md",slide:{raw:`---
layout: fact
---

<div class="hidden">
# JP/TW Date format using Gregorian Calendar
</div>

<h1 class="!text-7xl">
YYYY<span class="text-blue-400">\u5E74</span>mm<span class="text-blue-400">\u6708</span>dd<span class="text-blue-400">\u65E5</span>
</h1>

\u{1F1EF}\u{1F1F5} Japan \u{1F1F9}\u{1F1FC} Taiwan

<!--
Is this all for date, of course not.

There are different calendar in the world.

Next slide >>>>>
-->
`,title:"JP/TW Date format using Gregorian Calendar",level:1,content:`<div class="hidden">
# JP/TW Date format using Gregorian Calendar
</div>

<h1 class="!text-7xl">
YYYY<span class="text-blue-400">\u5E74</span>mm<span class="text-blue-400">\u6708</span>dd<span class="text-blue-400">\u65E5</span>
</h1>

\u{1F1EF}\u{1F1F5} Japan \u{1F1F9}\u{1F1FC} Taiwan`,frontmatter:{layout:"fact",srcSequence:"./section-3.md"},note:`Is this all for date, of course not.

There are different calendar in the world.

Next slide >>>>>`,index:22,start:89,end:111,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",raw:`---
layout: fact
---

<div class="hidden">
# JP/TW Date format using Gregorian Calendar
</div>

<h1 class="!text-7xl">
YYYY<span class="text-blue-400">\u5E74</span>mm<span class="text-blue-400">\u6708</span>dd<span class="text-blue-400">\u65E5</span>
</h1>

\u{1F1EF}\u{1F1F5} Japan \u{1F1F9}\u{1F1FC} Taiwan

<!--
Is this all for date, of course not.

There are different calendar in the world.

Next slide >>>>>
-->
`,title:"JP/TW Date format using Gregorian Calendar",level:1,content:`<div class="hidden">
# JP/TW Date format using Gregorian Calendar
</div>

<h1 class="!text-7xl">
YYYY<span class="text-blue-400">\u5E74</span>mm<span class="text-blue-400">\u6708</span>dd<span class="text-blue-400">\u65E5</span>
</h1>

\u{1F1EF}\u{1F1F5} Japan \u{1F1F9}\u{1F1FC} Taiwan`,frontmatter:{layout:"fact"},note:`Is this all for date, of course not.

There are different calendar in the world.

Next slide >>>>>`,index:4,start:89,end:111},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",notesHTML:`<p>Is this all for date, of course not.</p>
<p>There are different calendar in the world.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:ow,meta:{layout:"image",image:"/images/2022-08-29-23-18-14.png",srcSequence:"./section-3.md",slide:{raw:`---
layout: image
image: /images/2022-08-29-23-18-14.png
---

<div class="hidden">
# Calendar Year - Thailand
</div>

<!--
What do you see in this calendar?

Year 2563

Thai language

Still see English date on Month and Weekday

Small date number in Chinese character

Next slide >>>>>
-->
`,title:"Calendar Year - Thailand",level:1,content:`<div class="hidden">
# Calendar Year - Thailand
</div>`,frontmatter:{layout:"image",image:"/images/2022-08-29-23-18-14.png",srcSequence:"./section-3.md"},note:`What do you see in this calendar?

Year 2563

Thai language

Still see English date on Month and Weekday

Small date number in Chinese character

Next slide >>>>>`,index:23,start:111,end:134,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",raw:`---
layout: image
image: /images/2022-08-29-23-18-14.png
---

<div class="hidden">
# Calendar Year - Thailand
</div>

<!--
What do you see in this calendar?

Year 2563

Thai language

Still see English date on Month and Weekday

Small date number in Chinese character

Next slide >>>>>
-->
`,title:"Calendar Year - Thailand",level:1,content:`<div class="hidden">
# Calendar Year - Thailand
</div>`,frontmatter:{layout:"image",image:"/images/2022-08-29-23-18-14.png"},note:`What do you see in this calendar?

Year 2563

Thai language

Still see English date on Month and Weekday

Small date number in Chinese character

Next slide >>>>>`,index:5,start:111,end:134},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",notesHTML:`<p>What do you see in this calendar?</p>
<p>Year 2563</p>
<p>Thai language</p>
<p>Still see English date on Month and Weekday</p>
<p>Small date number in Chinese character</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:rw,meta:{layout:"image",image:"/images/2022-08-29-23-26-19.png",srcSequence:"./section-3.md",slide:{raw:`---
layout: image
image: /images/2022-08-29-23-26-19.png
---

<div class="hidden">
# Calendar Year - Taiwan
</div>

<!--
How about this?

This is just for one day. What do you see?

English date

Traditional Chinese translation of weekday (Mon).

Date in Lunar calendar

What is the Year? 2023 ? 112? Year of the rabit?

There are even fortune telling to let you know which direction is your lucky direction?...etc

The quote which doesn't make sense :)

What's the common difference between this calendar?

The year! Because there are other calendar systems in the world and they are official.

Next slide >>>>>
-->
`,title:"Calendar Year - Taiwan",level:1,content:`<div class="hidden">
# Calendar Year - Taiwan
</div>`,frontmatter:{layout:"image",image:"/images/2022-08-29-23-26-19.png",srcSequence:"./section-3.md"},note:`How about this?

This is just for one day. What do you see?

English date

Traditional Chinese translation of weekday (Mon).

Date in Lunar calendar

What is the Year? 2023 ? 112? Year of the rabit?

There are even fortune telling to let you know which direction is your lucky direction?...etc

The quote which doesn't make sense :)

What's the common difference between this calendar?

The year! Because there are other calendar systems in the world and they are official.

Next slide >>>>>`,index:24,start:134,end:167,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",raw:`---
layout: image
image: /images/2022-08-29-23-26-19.png
---

<div class="hidden">
# Calendar Year - Taiwan
</div>

<!--
How about this?

This is just for one day. What do you see?

English date

Traditional Chinese translation of weekday (Mon).

Date in Lunar calendar

What is the Year? 2023 ? 112? Year of the rabit?

There are even fortune telling to let you know which direction is your lucky direction?...etc

The quote which doesn't make sense :)

What's the common difference between this calendar?

The year! Because there are other calendar systems in the world and they are official.

Next slide >>>>>
-->
`,title:"Calendar Year - Taiwan",level:1,content:`<div class="hidden">
# Calendar Year - Taiwan
</div>`,frontmatter:{layout:"image",image:"/images/2022-08-29-23-26-19.png"},note:`How about this?

This is just for one day. What do you see?

English date

Traditional Chinese translation of weekday (Mon).

Date in Lunar calendar

What is the Year? 2023 ? 112? Year of the rabit?

There are even fortune telling to let you know which direction is your lucky direction?...etc

The quote which doesn't make sense :)

What's the common difference between this calendar?

The year! Because there are other calendar systems in the world and they are official.

Next slide >>>>>`,index:6,start:134,end:167},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",notesHTML:`<p>How about this?</p>
<p>This is just for one day. What do you see?</p>
<p>English date</p>
<p>Traditional Chinese translation of weekday (Mon).</p>
<p>Date in Lunar calendar</p>
<p>What is the Year? 2023 ? 112? Year of the rabit?</p>
<p>There are even fortune telling to let you know which direction is your lucky direction?...etc</p>
<p>The quote which doesn't make sense :)</p>
<p>What's the common difference between this calendar?</p>
<p>The year! Because there are other calendar systems in the world and they are official.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:cw,meta:{srcSequence:"./section-3.md",slide:{raw:`
# Calendar Year

| Calendar            | Year | Type                    |
| --------            | ---- | ---------               |
| AD                  | 2022 | Gregorian               |
| \u0E1E\u0E38\u0E17\u0E18\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A (\u0E1E.\u0E28.) B.E | 2565 | Buddhist Era            |
| \u6C11\u570B\u3000(m\xEDng g\xFAo)\u3000   | 111  | Label of the Birth Year |
| \u4EE4\u548C\u3000(rei wa)\u3000     | 4    | Imperial Era            |

<!--
Thai: \u0E1E\u0E38\u0E17\u0E18\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A (ph\xFAt-th\xE1-s\xE0k-g\xE0-r\xE0at) + year
Abbreviation: \u0E1E.\u0E28. (phaaw-s\u01CEaw)
B.E. Buddist Era
--
Year of 2022 is based on Gregorian calendar.
In Thailand, the use both Gregorian calendar and the Buddhist Era "\u0E1E.\u0E28." as the official date.
In Taiwan, it is calculated from the Birth year of the country since 1911. Taiwan no longer use imperial year and instead use the abbreviation of the name of the country \u6C11\u570B
In Japan, it still use Imperial Era, the current one started since 2019.

Next slide >>>>>
-->
`,title:"Calendar Year",level:1,content:`# Calendar Year

| Calendar            | Year | Type                    |
| --------            | ---- | ---------               |
| AD                  | 2022 | Gregorian               |
| \u0E1E\u0E38\u0E17\u0E18\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A (\u0E1E.\u0E28.) B.E | 2565 | Buddhist Era            |
| \u6C11\u570B\u3000(m\xEDng g\xFAo)\u3000   | 111  | Label of the Birth Year |
| \u4EE4\u548C\u3000(rei wa)\u3000     | 4    | Imperial Era            |`,frontmatter:{srcSequence:"./section-3.md"},note:`Thai: \u0E1E\u0E38\u0E17\u0E18\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A (ph\xFAt-th\xE1-s\xE0k-g\xE0-r\xE0at) + year
Abbreviation: \u0E1E.\u0E28. (phaaw-s\u01CEaw)
B.E. Buddist Era
--
Year of 2022 is based on Gregorian calendar.
In Thailand, the use both Gregorian calendar and the Buddhist Era "\u0E1E.\u0E28." as the official date.
In Taiwan, it is calculated from the Birth year of the country since 1911. Taiwan no longer use imperial year and instead use the abbreviation of the name of the country \u6C11\u570B
In Japan, it still use Imperial Era, the current one started since 2019.

Next slide >>>>>`,index:25,start:168,end:191,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",raw:`
# Calendar Year

| Calendar            | Year | Type                    |
| --------            | ---- | ---------               |
| AD                  | 2022 | Gregorian               |
| \u0E1E\u0E38\u0E17\u0E18\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A (\u0E1E.\u0E28.) B.E | 2565 | Buddhist Era            |
| \u6C11\u570B\u3000(m\xEDng g\xFAo)\u3000   | 111  | Label of the Birth Year |
| \u4EE4\u548C\u3000(rei wa)\u3000     | 4    | Imperial Era            |

<!--
Thai: \u0E1E\u0E38\u0E17\u0E18\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A (ph\xFAt-th\xE1-s\xE0k-g\xE0-r\xE0at) + year
Abbreviation: \u0E1E.\u0E28. (phaaw-s\u01CEaw)
B.E. Buddist Era
--
Year of 2022 is based on Gregorian calendar.
In Thailand, the use both Gregorian calendar and the Buddhist Era "\u0E1E.\u0E28." as the official date.
In Taiwan, it is calculated from the Birth year of the country since 1911. Taiwan no longer use imperial year and instead use the abbreviation of the name of the country \u6C11\u570B
In Japan, it still use Imperial Era, the current one started since 2019.

Next slide >>>>>
-->
`,title:"Calendar Year",level:1,content:`# Calendar Year

| Calendar            | Year | Type                    |
| --------            | ---- | ---------               |
| AD                  | 2022 | Gregorian               |
| \u0E1E\u0E38\u0E17\u0E18\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A (\u0E1E.\u0E28.) B.E | 2565 | Buddhist Era            |
| \u6C11\u570B\u3000(m\xEDng g\xFAo)\u3000   | 111  | Label of the Birth Year |
| \u4EE4\u548C\u3000(rei wa)\u3000     | 4    | Imperial Era            |`,frontmatter:{},note:`Thai: \u0E1E\u0E38\u0E17\u0E18\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A (ph\xFAt-th\xE1-s\xE0k-g\xE0-r\xE0at) + year
Abbreviation: \u0E1E.\u0E28. (phaaw-s\u01CEaw)
B.E. Buddist Era
--
Year of 2022 is based on Gregorian calendar.
In Thailand, the use both Gregorian calendar and the Buddhist Era "\u0E1E.\u0E28." as the official date.
In Taiwan, it is calculated from the Birth year of the country since 1911. Taiwan no longer use imperial year and instead use the abbreviation of the name of the country \u6C11\u570B
In Japan, it still use Imperial Era, the current one started since 2019.

Next slide >>>>>`,index:7,start:168,end:191},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",notesHTML:`<h2>Thai: \u0E1E\u0E38\u0E17\u0E18\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A (ph\xFAt-th\xE1-s\xE0k-g\xE0-r\xE0at) + year
Abbreviation: \u0E1E.\u0E28. (phaaw-s\u01CEaw)
B.E. Buddist Era</h2>
<p>Year of 2022 is based on Gregorian calendar.
In Thailand, the use both Gregorian calendar and the Buddhist Era &quot;\u0E1E.\u0E28.&quot; as the official date.
In Taiwan, it is calculated from the Birth year of the country since 1911. Taiwan no longer use imperial year and instead use the abbreviation of the name of the country \u6C11\u570B
In Japan, it still use Imperial Era, the current one started since 2019.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:dw,meta:{srcSequence:"./section-3.md",slide:{raw:`
# Calendar Year

| Calendar            | Year | Calculation      |
| --------            | ---- | ---------        |
| AD                  | 2022 | getYear()        |
| \u0E1E\u0E38\u0E17\u0E18\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A (\u0E1E.\u0E28.) B.E | 2565 | getYear() <span class="text-green-500">+ 543</span>  |
| \u6C11\u570B\u3000(m\xEDng g\xFAo)  \u3000\u3000| 111  | getYear() <span class="text-orange-400">- 1911</span> |
| <span class="text-red-400">\u4EE4\u548C\u3000(rei wa)</span>  \u3000\u3000\u3000| 4    | getYear() <span class="text-orange-400">- 2018</span> |

<!--
Because they are official, many government document or applications still requires the date formated in the way.

So we have to calculated when we display them.
But, it could be more complex in Japan.

Next slide >>>>>
-->`,title:"Calendar Year",level:1,content:`# Calendar Year

| Calendar            | Year | Calculation      |
| --------            | ---- | ---------        |
| AD                  | 2022 | getYear()        |
| \u0E1E\u0E38\u0E17\u0E18\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A (\u0E1E.\u0E28.) B.E | 2565 | getYear() <span class="text-green-500">+ 543</span>  |
| \u6C11\u570B\u3000(m\xEDng g\xFAo)  \u3000\u3000| 111  | getYear() <span class="text-orange-400">- 1911</span> |
| <span class="text-red-400">\u4EE4\u548C\u3000(rei wa)</span>  \u3000\u3000\u3000| 4    | getYear() <span class="text-orange-400">- 2018</span> |`,frontmatter:{srcSequence:"./section-3.md"},note:`Because they are official, many government document or applications still requires the date formated in the way.

So we have to calculated when we display them.
But, it could be more complex in Japan.

Next slide >>>>>`,index:26,start:192,end:210,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",raw:`
# Calendar Year

| Calendar            | Year | Calculation      |
| --------            | ---- | ---------        |
| AD                  | 2022 | getYear()        |
| \u0E1E\u0E38\u0E17\u0E18\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A (\u0E1E.\u0E28.) B.E | 2565 | getYear() <span class="text-green-500">+ 543</span>  |
| \u6C11\u570B\u3000(m\xEDng g\xFAo)  \u3000\u3000| 111  | getYear() <span class="text-orange-400">- 1911</span> |
| <span class="text-red-400">\u4EE4\u548C\u3000(rei wa)</span>  \u3000\u3000\u3000| 4    | getYear() <span class="text-orange-400">- 2018</span> |

<!--
Because they are official, many government document or applications still requires the date formated in the way.

So we have to calculated when we display them.
But, it could be more complex in Japan.

Next slide >>>>>
-->`,title:"Calendar Year",level:1,content:`# Calendar Year

| Calendar            | Year | Calculation      |
| --------            | ---- | ---------        |
| AD                  | 2022 | getYear()        |
| \u0E1E\u0E38\u0E17\u0E18\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A (\u0E1E.\u0E28.) B.E | 2565 | getYear() <span class="text-green-500">+ 543</span>  |
| \u6C11\u570B\u3000(m\xEDng g\xFAo)  \u3000\u3000| 111  | getYear() <span class="text-orange-400">- 1911</span> |
| <span class="text-red-400">\u4EE4\u548C\u3000(rei wa)</span>  \u3000\u3000\u3000| 4    | getYear() <span class="text-orange-400">- 2018</span> |`,frontmatter:{},note:`Because they are official, many government document or applications still requires the date formated in the way.

So we have to calculated when we display them.
But, it could be more complex in Japan.

Next slide >>>>>`,index:8,start:192,end:210},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",notesHTML:`<p>Because they are official, many government document or applications still requires the date formated in the way.</p>
<p>So we have to calculated when we display them.
But, it could be more complex in Japan.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:gw,meta:{srcSequence:"./section-3.md",slide:{raw:`
# Imperial Era in Japan

<div class="grid grid-cols-2 gap-4">
  <div class="flex flex-col justify-center text-gray-500 dark:text-gray-400">
    <h2 class="text-gray-900 dark:text-gray-100">R. Weinstein</h2>
    <small class="text-lg">Doctor</small>
    <p class="text-xl">A pass issued to leave the Shanghai ghetto in 1945. <br />
      <span class="text-sm">JMP, Oral History Collection, No. 549 (copy)</span>
    </p>
    <h2 class="text-gray-900 dark:text-gray-100">Initially valid from <br />\u662D\u548C 18 \u5E74 2 \u6708 29 \u65E5</h2>
  </div>
  <div>
    <img src="/images/permission_spanish_synagoge.jpg" class="h-96 w-auto" />
  </div>
</div>

<!--
Last week, I traveled in the Jewish district in the old town. In the Spanish synagoge, I notice this history document.
A simple document provides lots of information with history context and sadness.

The document was initially valid from a major Chinese city \u4E0A\u6D77\uFF0Cand the validate date started from \u662D\u548C 18 
So what's the year? It was 1943. 

\u662D\u548C is a second previous Imperiall Era, which is still used in the official document for instance the date of birth. Like I'm.

Next year >>>>>
-->`,title:"Imperial Era in Japan",level:1,content:`# Imperial Era in Japan

<div class="grid grid-cols-2 gap-4">
  <div class="flex flex-col justify-center text-gray-500 dark:text-gray-400">
    <h2 class="text-gray-900 dark:text-gray-100">R. Weinstein</h2>
    <small class="text-lg">Doctor</small>
    <p class="text-xl">A pass issued to leave the Shanghai ghetto in 1945. <br />
      <span class="text-sm">JMP, Oral History Collection, No. 549 (copy)</span>
    </p>
    <h2 class="text-gray-900 dark:text-gray-100">Initially valid from <br />\u662D\u548C 18 \u5E74 2 \u6708 29 \u65E5</h2>
  </div>
  <div>
    <img src="/images/permission_spanish_synagoge.jpg" class="h-96 w-auto" />
  </div>
</div>`,frontmatter:{srcSequence:"./section-3.md"},note:`Last week, I traveled in the Jewish district in the old town. In the Spanish synagoge, I notice this history document.
A simple document provides lots of information with history context and sadness.

The document was initially valid from a major Chinese city \u4E0A\u6D77\uFF0Cand the validate date started from \u662D\u548C 18 
So what's the year? It was 1943. 

\u662D\u548C is a second previous Imperiall Era, which is still used in the official document for instance the date of birth. Like I'm.

Next year >>>>>`,index:27,start:211,end:239,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",raw:`
# Imperial Era in Japan

<div class="grid grid-cols-2 gap-4">
  <div class="flex flex-col justify-center text-gray-500 dark:text-gray-400">
    <h2 class="text-gray-900 dark:text-gray-100">R. Weinstein</h2>
    <small class="text-lg">Doctor</small>
    <p class="text-xl">A pass issued to leave the Shanghai ghetto in 1945. <br />
      <span class="text-sm">JMP, Oral History Collection, No. 549 (copy)</span>
    </p>
    <h2 class="text-gray-900 dark:text-gray-100">Initially valid from <br />\u662D\u548C 18 \u5E74 2 \u6708 29 \u65E5</h2>
  </div>
  <div>
    <img src="/images/permission_spanish_synagoge.jpg" class="h-96 w-auto" />
  </div>
</div>

<!--
Last week, I traveled in the Jewish district in the old town. In the Spanish synagoge, I notice this history document.
A simple document provides lots of information with history context and sadness.

The document was initially valid from a major Chinese city \u4E0A\u6D77\uFF0Cand the validate date started from \u662D\u548C 18 
So what's the year? It was 1943. 

\u662D\u548C is a second previous Imperiall Era, which is still used in the official document for instance the date of birth. Like I'm.

Next year >>>>>
-->`,title:"Imperial Era in Japan",level:1,content:`# Imperial Era in Japan

<div class="grid grid-cols-2 gap-4">
  <div class="flex flex-col justify-center text-gray-500 dark:text-gray-400">
    <h2 class="text-gray-900 dark:text-gray-100">R. Weinstein</h2>
    <small class="text-lg">Doctor</small>
    <p class="text-xl">A pass issued to leave the Shanghai ghetto in 1945. <br />
      <span class="text-sm">JMP, Oral History Collection, No. 549 (copy)</span>
    </p>
    <h2 class="text-gray-900 dark:text-gray-100">Initially valid from <br />\u662D\u548C 18 \u5E74 2 \u6708 29 \u65E5</h2>
  </div>
  <div>
    <img src="/images/permission_spanish_synagoge.jpg" class="h-96 w-auto" />
  </div>
</div>`,frontmatter:{},note:`Last week, I traveled in the Jewish district in the old town. In the Spanish synagoge, I notice this history document.
A simple document provides lots of information with history context and sadness.

The document was initially valid from a major Chinese city \u4E0A\u6D77\uFF0Cand the validate date started from \u662D\u548C 18 
So what's the year? It was 1943. 

\u662D\u548C is a second previous Imperiall Era, which is still used in the official document for instance the date of birth. Like I'm.

Next year >>>>>`,index:9,start:211,end:239},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",notesHTML:`<p>Last week, I traveled in the Jewish district in the old town. In the Spanish synagoge, I notice this history document.
A simple document provides lots of information with history context and sadness.</p>
<p>The document was initially valid from a major Chinese city \u4E0A\u6D77\uFF0Cand the validate date started from \u662D\u548C 18
So what's the year? It was 1943.</p>
<p>\u662D\u548C is a second previous Imperiall Era, which is still used in the official document for instance the date of birth. Like I'm.</p>
<p>Next year &gt;&gt;&gt;&gt;&gt;</p>
`,id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:ww,meta:{srcSequence:"./section-3.md",slide:{raw:`
# Imperial Era in Japan

<div class="flex flex-row">
  <div class="flex flex-col flex-grow justify-center">

| Imperial Era | Year range  |
| ------------ | ----------  |
| \u662D\u548C Sh\u014Dwa    | 1926 - 1989 |
| \u5E73\u6210 Heisei   | 1989 - 2019 |
| \u4EE4\u548C Reiwa    | 2019 - Now  |

  </div>
  <div class="flex-1">
    <!-- <img src="/images/2022-09-08-15-43-41.png" class="h-110 w-auto" /> -->
    <img src="/images/imperial-year-jp.png" class="h-110 w-auto" />
  </div>
</div>


<!--
It makes the calculation conditional, isn't it?
How do we manage to caculate the date? write switch case in the code?
There is a smarter way thanks to a Unicode project call, CLDR

Next slide >>>>>
-->`,title:"Imperial Era in Japan",level:1,content:`# Imperial Era in Japan

<div class="flex flex-row">
  <div class="flex flex-col flex-grow justify-center">

| Imperial Era | Year range  |
| ------------ | ----------  |
| \u662D\u548C Sh\u014Dwa    | 1926 - 1989 |
| \u5E73\u6210 Heisei   | 1989 - 2019 |
| \u4EE4\u548C Reiwa    | 2019 - Now  |

  </div>
  <div class="flex-1">
    <!-- <img src="/images/2022-09-08-15-43-41.png" class="h-110 w-auto" /> -->
    <img src="/images/imperial-year-jp.png" class="h-110 w-auto" />
  </div>
</div>`,frontmatter:{srcSequence:"./section-3.md"},note:`It makes the calculation conditional, isn't it?
How do we manage to caculate the date? write switch case in the code?
There is a smarter way thanks to a Unicode project call, CLDR

Next slide >>>>>`,index:28,start:240,end:267,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",raw:`
# Imperial Era in Japan

<div class="flex flex-row">
  <div class="flex flex-col flex-grow justify-center">

| Imperial Era | Year range  |
| ------------ | ----------  |
| \u662D\u548C Sh\u014Dwa    | 1926 - 1989 |
| \u5E73\u6210 Heisei   | 1989 - 2019 |
| \u4EE4\u548C Reiwa    | 2019 - Now  |

  </div>
  <div class="flex-1">
    <!-- <img src="/images/2022-09-08-15-43-41.png" class="h-110 w-auto" /> -->
    <img src="/images/imperial-year-jp.png" class="h-110 w-auto" />
  </div>
</div>


<!--
It makes the calculation conditional, isn't it?
How do we manage to caculate the date? write switch case in the code?
There is a smarter way thanks to a Unicode project call, CLDR

Next slide >>>>>
-->`,title:"Imperial Era in Japan",level:1,content:`# Imperial Era in Japan

<div class="flex flex-row">
  <div class="flex flex-col flex-grow justify-center">

| Imperial Era | Year range  |
| ------------ | ----------  |
| \u662D\u548C Sh\u014Dwa    | 1926 - 1989 |
| \u5E73\u6210 Heisei   | 1989 - 2019 |
| \u4EE4\u548C Reiwa    | 2019 - Now  |

  </div>
  <div class="flex-1">
    <!-- <img src="/images/2022-09-08-15-43-41.png" class="h-110 w-auto" /> -->
    <img src="/images/imperial-year-jp.png" class="h-110 w-auto" />
  </div>
</div>`,frontmatter:{},note:`It makes the calculation conditional, isn't it?
How do we manage to caculate the date? write switch case in the code?
There is a smarter way thanks to a Unicode project call, CLDR

Next slide >>>>>`,index:10,start:240,end:267},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",notesHTML:`<p>It makes the calculation conditional, isn't it?
How do we manage to caculate the date? write switch case in the code?
There is a smarter way thanks to a Unicode project call, CLDR</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:Bw,meta:{srcSequence:"./section-3.md",slide:{raw:`
# Use CLDR to convert the date

The Unicode Common Locale Data Repository (CLDR)

<div class="pt-8">

\`\`\`ts
new Date().toLocaleDateString('ja-JP-u-ca-japanese', { dateStyle: 'long' })
// '\u4EE4\u548C4\u5E749\u67089\u65E5'
new Date().toLocaleDateString('zh-hant-u-ca-roc', { dateStyle: 'long' })
// '\u6C11\u570B111\u5E749\u67089\u65E5'
new Date().toLocaleDateString('th-u-ca-BE', { dateStyle: 'full' })
// '\u0E27\u0E31\u0E19\u0E28\u0E38\u0E01\u0E23\u0E4C\u0E17\u0E35\u0E48 9 \u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19 \u0E1E.\u0E28. 2565'

\`\`\`
</div>

<!--
The Unicode Common Locale Data Repository help us calculate the date into a localized calendar.
Which is fantastic.

In PHP, it is also available with the intl class.

Next slide >>>>>
-->`,title:"Use CLDR to convert the date",level:1,content:`# Use CLDR to convert the date

The Unicode Common Locale Data Repository (CLDR)

<div class="pt-8">

\`\`\`ts
new Date().toLocaleDateString('ja-JP-u-ca-japanese', { dateStyle: 'long' })
// '\u4EE4\u548C4\u5E749\u67089\u65E5'
new Date().toLocaleDateString('zh-hant-u-ca-roc', { dateStyle: 'long' })
// '\u6C11\u570B111\u5E749\u67089\u65E5'
new Date().toLocaleDateString('th-u-ca-BE', { dateStyle: 'full' })
// '\u0E27\u0E31\u0E19\u0E28\u0E38\u0E01\u0E23\u0E4C\u0E17\u0E35\u0E48 9 \u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19 \u0E1E.\u0E28. 2565'

\`\`\`
</div>`,frontmatter:{srcSequence:"./section-3.md"},note:`The Unicode Common Locale Data Repository help us calculate the date into a localized calendar.
Which is fantastic.

In PHP, it is also available with the intl class.

Next slide >>>>>`,index:29,start:268,end:294,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",raw:`
# Use CLDR to convert the date

The Unicode Common Locale Data Repository (CLDR)

<div class="pt-8">

\`\`\`ts
new Date().toLocaleDateString('ja-JP-u-ca-japanese', { dateStyle: 'long' })
// '\u4EE4\u548C4\u5E749\u67089\u65E5'
new Date().toLocaleDateString('zh-hant-u-ca-roc', { dateStyle: 'long' })
// '\u6C11\u570B111\u5E749\u67089\u65E5'
new Date().toLocaleDateString('th-u-ca-BE', { dateStyle: 'full' })
// '\u0E27\u0E31\u0E19\u0E28\u0E38\u0E01\u0E23\u0E4C\u0E17\u0E35\u0E48 9 \u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19 \u0E1E.\u0E28. 2565'

\`\`\`
</div>

<!--
The Unicode Common Locale Data Repository help us calculate the date into a localized calendar.
Which is fantastic.

In PHP, it is also available with the intl class.

Next slide >>>>>
-->`,title:"Use CLDR to convert the date",level:1,content:`# Use CLDR to convert the date

The Unicode Common Locale Data Repository (CLDR)

<div class="pt-8">

\`\`\`ts
new Date().toLocaleDateString('ja-JP-u-ca-japanese', { dateStyle: 'long' })
// '\u4EE4\u548C4\u5E749\u67089\u65E5'
new Date().toLocaleDateString('zh-hant-u-ca-roc', { dateStyle: 'long' })
// '\u6C11\u570B111\u5E749\u67089\u65E5'
new Date().toLocaleDateString('th-u-ca-BE', { dateStyle: 'full' })
// '\u0E27\u0E31\u0E19\u0E28\u0E38\u0E01\u0E23\u0E4C\u0E17\u0E35\u0E48 9 \u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19 \u0E1E.\u0E28. 2565'

\`\`\`
</div>`,frontmatter:{},note:`The Unicode Common Locale Data Repository help us calculate the date into a localized calendar.
Which is fantastic.

In PHP, it is also available with the intl class.

Next slide >>>>>`,index:11,start:268,end:294},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-3.md",notesHTML:`<p>The Unicode Common Locale Data Repository help us calculate the date into a localized calendar.
Which is fantastic.</p>
<p>In PHP, it is also available with the intl class.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:Sw,meta:{layout:"intro-image",image:"/images/cjk-cover-left.png",imageTopRight:"images/cjk-cover-right-top.png",imageBottomRight:"images/cjk-cover-right-bottom.png",title:"===== Issue in CJK: Typing =====",srcSequence:"./section-4.md",slide:{raw:null,title:"===== Issue in CJK: Typing =====",level:1,content:`<div class="hidden">
# ===== Issue in CJK: Typing =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1>CJK</h1>
  <p>Exclusive issue in CJK</p>
</div>

<!--
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
-->`,frontmatter:{layout:"intro-image",image:"/images/cjk-cover-left.png",imageTopRight:"images/cjk-cover-right-top.png",imageBottomRight:"images/cjk-cover-right-bottom.png",title:"===== Issue in CJK: Typing =====",srcSequence:"./section-4.md"},note:`Let's focus on CJK world closer.

It is easy to type latin alphabets on keyboard, how does words being typed in CJK?

Next slide >>>>>`,index:30,start:0,end:38,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-4.md",raw:`---
layout: intro-image
image: /images/cjk-cover-left.png
#layout: 3-images
#imageLeft: images/cjk-cover-left.png

imageTopRight: images/cjk-cover-right-top.png
imageBottomRight: images/cjk-cover-right-bottom.png
---

<div class="hidden">
# ===== Issue in CJK: Typing =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1>CJK</h1>
  <p>Exclusive issue in CJK</p>
</div>

<!--
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
-->

<!-- 
Let's focus on CJK world closer.

It is easy to type latin alphabets on keyboard, how does words being typed in CJK?

Next slide >>>>>

-->`,title:"===== Issue in CJK: Typing =====",level:1,content:`<div class="hidden">
# ===== Issue in CJK: Typing =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1>CJK</h1>
  <p>Exclusive issue in CJK</p>
</div>

<!--
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
-->`,frontmatter:{layout:"intro-image",image:"/images/cjk-cover-left.png",imageTopRight:"images/cjk-cover-right-top.png",imageBottomRight:"images/cjk-cover-right-bottom.png",title:"===== Issue in CJK: Typing ====="},note:`Let's focus on CJK world closer.

It is easy to type latin alphabets on keyboard, how does words being typed in CJK?

Next slide >>>>>`,index:0,start:0,end:38},inline:{raw:`---
src: ./section-4.md
---
<!-- this page will be loaded from './section-4.md' -->
# 4. Issue that happens exclusively in CJK`,title:"4. Issue that happens exclusively in CJK",level:1,content:`<!-- this page will be loaded from './section-4.md' -->
# 4. Issue that happens exclusively in CJK`,frontmatter:{},index:7,start:173,end:178},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-4.md",notesHTML:`<p>Let's focus on CJK world closer.</p>
<p>It is easy to type latin alphabets on keyboard, how does words being typed in CJK?</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:Ow,meta:{srcSequence:"./section-4.md",slide:{raw:`
# Autocomplete search suggestion

What can you see?

<video controls>
  <source src="/images/SyI343.mp4" type="video/mp4" />
</video>

<!--  
This is a short clip shows how we can type the autocompleted search keywords in Japanese

- Input Chinese or Japanese Kanji consists of one to four phonetic elements
- Same pronouciation could have more than one words

The main issue here is the autocompletd triggers the search too early before the word has been chosen or the typing is finished.

Next slide >>>>>
-->
`,title:"Autocomplete search suggestion",level:1,content:`# Autocomplete search suggestion

What can you see?

<video controls>
  <source src="/images/SyI343.mp4" type="video/mp4" />
</video>`,frontmatter:{srcSequence:"./section-4.md"},note:`This is a short clip shows how we can type the autocompleted search keywords in Japanese

- Input Chinese or Japanese Kanji consists of one to four phonetic elements
- Same pronouciation could have more than one words

The main issue here is the autocompletd triggers the search too early before the word has been chosen or the typing is finished.

Next slide >>>>>`,index:31,start:39,end:59,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-4.md",raw:`
# Autocomplete search suggestion

What can you see?

<video controls>
  <source src="/images/SyI343.mp4" type="video/mp4" />
</video>

<!--  
This is a short clip shows how we can type the autocompleted search keywords in Japanese

- Input Chinese or Japanese Kanji consists of one to four phonetic elements
- Same pronouciation could have more than one words

The main issue here is the autocompletd triggers the search too early before the word has been chosen or the typing is finished.

Next slide >>>>>
-->
`,title:"Autocomplete search suggestion",level:1,content:`# Autocomplete search suggestion

What can you see?

<video controls>
  <source src="/images/SyI343.mp4" type="video/mp4" />
</video>`,frontmatter:{},note:`This is a short clip shows how we can type the autocompleted search keywords in Japanese

- Input Chinese or Japanese Kanji consists of one to four phonetic elements
- Same pronouciation could have more than one words

The main issue here is the autocompletd triggers the search too early before the word has been chosen or the typing is finished.

Next slide >>>>>`,index:1,start:39,end:59},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-4.md",notesHTML:`<p>This is a short clip shows how we can type the autocompleted search keywords in Japanese</p>
<ul>
<li>Input Chinese or Japanese Kanji consists of one to four phonetic elements</li>
<li>Same pronouciation could have more than one words</li>
</ul>
<p>The main issue here is the autocompletd triggers the search too early before the word has been chosen or the typing is finished.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:Mw,meta:{srcSequence:"./section-4.md",slide:{raw:`
# CJK Paragraph

<hr />

<div class="grid grid-cols-3 gap-4 items-start text-sm mt-4">
<div>

## \u6211\u662F COVID-19 \u78BA\u8A3A\u500B\u6848\uFF0C\u61C9\u8A72\u8981\u6CE8\u610F\u751A\u9EBC:

\u5927\u90E8\u5206\u7684 COVID-19 \u611F\u67D3\u8005\u75C7\u72C0\u8F15\u5FAE\uFF0C\u4F11\u990A\u5F8C\u5373\u53EF\u81EA\u884C\u5EB7\u5FA9\uFF0C\u70BA\u4E86\u5C07\u91AB\u7642\u8CC7\u6E90\u7559
\u7D66\u91CD\u75C7\u60A3\u8005\uFF0C\u8ACB\u60A8\u5148\u7559\u5728\u5BB6\u4E2D\u4E0D\u8981\u96E2\u958B\uFF0C\u7B49\u5019\u516C\u885B\u4EBA\u54E1\u901A\u77E5\u3002

\u52D9\u5FC5\u89C0\u5BDF\u81EA\u8EAB\u75C7\u72C0\u8B8A\u5316\uFF0C\u82E5\u51FA\u73FE\u4EE5\u4E0B\u75C7\u72C0\u6642\uFF0C\u8ACB\u7ACB\u5373\u901A\u77E5\u6240\u5728\u5730\u653F\u5E9C\u885B\u751F\u5C40\u6216\u64A5\u6253
119 \u5C31\u91AB\uFF0C\u4EE5 119 \u6551\u8B77\u8ECA\u70BA\u539F\u5247\u6216\u6307\u793A\u4E4B\u9632\u75AB\u8A08\u7A0B\u8ECA\u3001\u540C\u4F4F\u89AA\u53CB\u63A5\u9001\u6216\u81EA\u884C\u524D\u5F80
(\u5982\u6B65\u884C\u3001 \u81EA\u884C\u99D5/\u9A0E\u8ECA)\u7B49\u65B9\u5F0F\u70BA\u8F14\uFF1A\u5598\u3001\u547C\u5438\u56F0\u96E3\u3001\u6301\u7E8C\u80F8\u75DB\u3001\u80F8\u60B6\u3001\u610F\u8B58\u4E0D\u6E05\u3001
\u76AE\u819A\u6216\u5634\u5507\u6216\u6307\u7532\u5E8A\u767C\u9752\u3002
</div>
<div>

## \uBCF4\uAC74\uC18C\uC5D0\uC11C \uCF54\uB85C\uB09819 \uC591\uC131 \uD1B5\uBCF4\uB97C \uBC1B\uC558\uB2E4\uBA74, \uC774\uB807\uAC8C \uD558\uC138\uC694

\uAC80\uCCB4\uCC44\uCDE8\uC77C\uB85C\uBD80\uD130 7\uC77C\uAE4C\uC9C0\uB294 \uD0C0\uC778\uC5D0\uAC8C \uBC14\uC774\uB7EC\uC2A4\uB97C \uC804\uC5FC\uC2DC\uD0AC \uC704\uD5D8\uC774 \uC788\uC5B4 \uACA9\uB9AC\uD569\uB2C8\uB2E4.
\uC624\uBBF8\uD06C\uB860 \uBCC0\uC774\uB294 \uB378\uD0C0 \uBCC0\uC774\uBCF4\uB2E4 \uC911\uC99D\uB3C4\uAC00 \uB0AE\uC73C\uBBC0\uB85C \uC99D\uC0C1\uC774 \uC5C6\uAC70\uB098 \uACBD\uC99D\uC778 \uACBD\uC6B0 \uD574\uC5F4\uC81C, \uAC10\uAE30\uC57D \uBCF5\uC6A9 \uB4F1 \uB300\uC99D\uCE58\uB8CC\uB85C \uD68C\uBCF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. [\uCF54\uB85C\uB09819\uC640 \uC624\uBBF8\uD06C\uB860 \uBCC0\uC774] \uBC14\uB85C\uAC00\uAE30

\uBC1C\uC5F4 \uB4F1 \uC99D\uC0C1\uC73C\uB85C \uC9C4\uB8CC\uAC00 \uD544\uC694\uD558\uBA74, \uC678\uB798\uC9C4\uB8CC\uC13C\uD130 \uB300\uBA74\uC9C4\uB8CC \uB610\uB294 \uC804\uD654 \uC0C1\uB2F4\xB7\uCC98\uBC29\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.
\uAC10\uC5FC\uC804\uD30C \uBC29\uC9C0\uB97C \uC704\uD574 \uC678\uCD9C\uD558\uC9C0 \uB9D0\uACE0 \uAC00\uAE09\uC801 \uC9D1\uC5D0 \uBA38\uBB34\uB974\uBA70, \uD654\uC7A5\uC2E4\u2027\uBB3C\uAC74 \uB4F1\uC740 \uB3D9\uAC70\uC778\uACFC \uB530\uB85C \uC0AC\uC6A9\uD558\uACE0 \uC790\uC8FC \uC18C\uB3C5\uD574\uC57C \uD569\uB2C8\uB2E4.[\uCCAD\uC18C\uC640\uC18C\uB3C5] \uBC14\uB85C\uAC00\uAE30

</div>
<div>

## \u65B0\u578B\u30B3\u30ED\u30CA\u30A6\u30A4\u30EB\u30B9\u611F\u67D3\u75C7\u3001\u75C7\u72B6\u304C\u3042\u308B\u65B9\u306F\u305F\u3081\u3089\u308F\u305A\u306B\u9023\u7D61\u3092\uFF01

\u5BBF\u6CCA\u7642\u990A\u30FB\u81EA\u5B85\u7642\u990A\u8005\u30A2\u30F3\u30B1\u30FC\u30C8\u8ABF\u67FB\u306B\u3088\u3063\u3066\u3001\u4E16\u4EE3\u3092\u554F\u308F\u305A\u591A\u304F\u306E\u65B9\u304C\u3001\u30B3\u30ED\u30CA\u611F\u67D3\u304C\u5224\u660E\u3059\u308B\u524D\u304B\u3089\u3001
\u3010\u767A\u71B1\u3001\u982D\u75DB\u3001\u4F53\u306E\u3060\u308B\u3055\u3001\u305B\u304D\u3001\u306E\u3069\u306E\u75DB\u307F\u3011\u3068\u3044\u3063\u305F\u81EA\u899A\u75C7\u72B6\u3092\u8A34\u3048\u3066\u3044\u305F\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3057\u305F\u3002

\u3053\u308C\u3089\u306E\u75C7\u72B6\u3092\u8907\u6570\u611F\u3058\u3001\u4E0D\u5B89\u306B\u601D\u3063\u305F\u3068\u304D\u306F\u3001\u3069\u3046\u305E\u305F\u3081\u3089\u308F\u305A\u3001\u300C\u304B\u304B\u308A\u3064\u3051\u533B\u30FB\u8EAB\u8FD1\u306A\u533B\u7642\u6A5F\u95A2\u300D\u3084\u300C\u767A\u71B1\u76F8\u8AC7\u30BB\u30F3\u30BF\u30FC\u300D\u3078\u3054\u9023\u7D61\u3001\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002
</div>
</div>

<!--
These are pagragraphs in CJK about 
What to do if you receive a positive COVID-19 notification from a public health center

You can see the paragraph rarely has spaces in the sentence.
(We use kuromoji when we index the data in Elastice search to get the text indexed and split into words correctly.)

Next slide >>>>>
-->`,title:"CJK Paragraph",level:1,content:`# CJK Paragraph

<hr />

<div class="grid grid-cols-3 gap-4 items-start text-sm mt-4">
<div>

## \u6211\u662F COVID-19 \u78BA\u8A3A\u500B\u6848\uFF0C\u61C9\u8A72\u8981\u6CE8\u610F\u751A\u9EBC:

\u5927\u90E8\u5206\u7684 COVID-19 \u611F\u67D3\u8005\u75C7\u72C0\u8F15\u5FAE\uFF0C\u4F11\u990A\u5F8C\u5373\u53EF\u81EA\u884C\u5EB7\u5FA9\uFF0C\u70BA\u4E86\u5C07\u91AB\u7642\u8CC7\u6E90\u7559
\u7D66\u91CD\u75C7\u60A3\u8005\uFF0C\u8ACB\u60A8\u5148\u7559\u5728\u5BB6\u4E2D\u4E0D\u8981\u96E2\u958B\uFF0C\u7B49\u5019\u516C\u885B\u4EBA\u54E1\u901A\u77E5\u3002

\u52D9\u5FC5\u89C0\u5BDF\u81EA\u8EAB\u75C7\u72C0\u8B8A\u5316\uFF0C\u82E5\u51FA\u73FE\u4EE5\u4E0B\u75C7\u72C0\u6642\uFF0C\u8ACB\u7ACB\u5373\u901A\u77E5\u6240\u5728\u5730\u653F\u5E9C\u885B\u751F\u5C40\u6216\u64A5\u6253
119 \u5C31\u91AB\uFF0C\u4EE5 119 \u6551\u8B77\u8ECA\u70BA\u539F\u5247\u6216\u6307\u793A\u4E4B\u9632\u75AB\u8A08\u7A0B\u8ECA\u3001\u540C\u4F4F\u89AA\u53CB\u63A5\u9001\u6216\u81EA\u884C\u524D\u5F80
(\u5982\u6B65\u884C\u3001 \u81EA\u884C\u99D5/\u9A0E\u8ECA)\u7B49\u65B9\u5F0F\u70BA\u8F14\uFF1A\u5598\u3001\u547C\u5438\u56F0\u96E3\u3001\u6301\u7E8C\u80F8\u75DB\u3001\u80F8\u60B6\u3001\u610F\u8B58\u4E0D\u6E05\u3001
\u76AE\u819A\u6216\u5634\u5507\u6216\u6307\u7532\u5E8A\u767C\u9752\u3002
</div>
<div>

## \uBCF4\uAC74\uC18C\uC5D0\uC11C \uCF54\uB85C\uB09819 \uC591\uC131 \uD1B5\uBCF4\uB97C \uBC1B\uC558\uB2E4\uBA74, \uC774\uB807\uAC8C \uD558\uC138\uC694

\uAC80\uCCB4\uCC44\uCDE8\uC77C\uB85C\uBD80\uD130 7\uC77C\uAE4C\uC9C0\uB294 \uD0C0\uC778\uC5D0\uAC8C \uBC14\uC774\uB7EC\uC2A4\uB97C \uC804\uC5FC\uC2DC\uD0AC \uC704\uD5D8\uC774 \uC788\uC5B4 \uACA9\uB9AC\uD569\uB2C8\uB2E4.
\uC624\uBBF8\uD06C\uB860 \uBCC0\uC774\uB294 \uB378\uD0C0 \uBCC0\uC774\uBCF4\uB2E4 \uC911\uC99D\uB3C4\uAC00 \uB0AE\uC73C\uBBC0\uB85C \uC99D\uC0C1\uC774 \uC5C6\uAC70\uB098 \uACBD\uC99D\uC778 \uACBD\uC6B0 \uD574\uC5F4\uC81C, \uAC10\uAE30\uC57D \uBCF5\uC6A9 \uB4F1 \uB300\uC99D\uCE58\uB8CC\uB85C \uD68C\uBCF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. [\uCF54\uB85C\uB09819\uC640 \uC624\uBBF8\uD06C\uB860 \uBCC0\uC774] \uBC14\uB85C\uAC00\uAE30

\uBC1C\uC5F4 \uB4F1 \uC99D\uC0C1\uC73C\uB85C \uC9C4\uB8CC\uAC00 \uD544\uC694\uD558\uBA74, \uC678\uB798\uC9C4\uB8CC\uC13C\uD130 \uB300\uBA74\uC9C4\uB8CC \uB610\uB294 \uC804\uD654 \uC0C1\uB2F4\xB7\uCC98\uBC29\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.
\uAC10\uC5FC\uC804\uD30C \uBC29\uC9C0\uB97C \uC704\uD574 \uC678\uCD9C\uD558\uC9C0 \uB9D0\uACE0 \uAC00\uAE09\uC801 \uC9D1\uC5D0 \uBA38\uBB34\uB974\uBA70, \uD654\uC7A5\uC2E4\u2027\uBB3C\uAC74 \uB4F1\uC740 \uB3D9\uAC70\uC778\uACFC \uB530\uB85C \uC0AC\uC6A9\uD558\uACE0 \uC790\uC8FC \uC18C\uB3C5\uD574\uC57C \uD569\uB2C8\uB2E4.[\uCCAD\uC18C\uC640\uC18C\uB3C5] \uBC14\uB85C\uAC00\uAE30

</div>
<div>

## \u65B0\u578B\u30B3\u30ED\u30CA\u30A6\u30A4\u30EB\u30B9\u611F\u67D3\u75C7\u3001\u75C7\u72B6\u304C\u3042\u308B\u65B9\u306F\u305F\u3081\u3089\u308F\u305A\u306B\u9023\u7D61\u3092\uFF01

\u5BBF\u6CCA\u7642\u990A\u30FB\u81EA\u5B85\u7642\u990A\u8005\u30A2\u30F3\u30B1\u30FC\u30C8\u8ABF\u67FB\u306B\u3088\u3063\u3066\u3001\u4E16\u4EE3\u3092\u554F\u308F\u305A\u591A\u304F\u306E\u65B9\u304C\u3001\u30B3\u30ED\u30CA\u611F\u67D3\u304C\u5224\u660E\u3059\u308B\u524D\u304B\u3089\u3001
\u3010\u767A\u71B1\u3001\u982D\u75DB\u3001\u4F53\u306E\u3060\u308B\u3055\u3001\u305B\u304D\u3001\u306E\u3069\u306E\u75DB\u307F\u3011\u3068\u3044\u3063\u305F\u81EA\u899A\u75C7\u72B6\u3092\u8A34\u3048\u3066\u3044\u305F\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3057\u305F\u3002

\u3053\u308C\u3089\u306E\u75C7\u72B6\u3092\u8907\u6570\u611F\u3058\u3001\u4E0D\u5B89\u306B\u601D\u3063\u305F\u3068\u304D\u306F\u3001\u3069\u3046\u305E\u305F\u3081\u3089\u308F\u305A\u3001\u300C\u304B\u304B\u308A\u3064\u3051\u533B\u30FB\u8EAB\u8FD1\u306A\u533B\u7642\u6A5F\u95A2\u300D\u3084\u300C\u767A\u71B1\u76F8\u8AC7\u30BB\u30F3\u30BF\u30FC\u300D\u3078\u3054\u9023\u7D61\u3001\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002
</div>
</div>`,frontmatter:{srcSequence:"./section-4.md"},note:`These are pagragraphs in CJK about 
What to do if you receive a positive COVID-19 notification from a public health center

You can see the paragraph rarely has spaces in the sentence.
(We use kuromoji when we index the data in Elastice search to get the text indexed and split into words correctly.)

Next slide >>>>>`,index:32,start:60,end:109,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-4.md",raw:`
# CJK Paragraph

<hr />

<div class="grid grid-cols-3 gap-4 items-start text-sm mt-4">
<div>

## \u6211\u662F COVID-19 \u78BA\u8A3A\u500B\u6848\uFF0C\u61C9\u8A72\u8981\u6CE8\u610F\u751A\u9EBC:

\u5927\u90E8\u5206\u7684 COVID-19 \u611F\u67D3\u8005\u75C7\u72C0\u8F15\u5FAE\uFF0C\u4F11\u990A\u5F8C\u5373\u53EF\u81EA\u884C\u5EB7\u5FA9\uFF0C\u70BA\u4E86\u5C07\u91AB\u7642\u8CC7\u6E90\u7559
\u7D66\u91CD\u75C7\u60A3\u8005\uFF0C\u8ACB\u60A8\u5148\u7559\u5728\u5BB6\u4E2D\u4E0D\u8981\u96E2\u958B\uFF0C\u7B49\u5019\u516C\u885B\u4EBA\u54E1\u901A\u77E5\u3002

\u52D9\u5FC5\u89C0\u5BDF\u81EA\u8EAB\u75C7\u72C0\u8B8A\u5316\uFF0C\u82E5\u51FA\u73FE\u4EE5\u4E0B\u75C7\u72C0\u6642\uFF0C\u8ACB\u7ACB\u5373\u901A\u77E5\u6240\u5728\u5730\u653F\u5E9C\u885B\u751F\u5C40\u6216\u64A5\u6253
119 \u5C31\u91AB\uFF0C\u4EE5 119 \u6551\u8B77\u8ECA\u70BA\u539F\u5247\u6216\u6307\u793A\u4E4B\u9632\u75AB\u8A08\u7A0B\u8ECA\u3001\u540C\u4F4F\u89AA\u53CB\u63A5\u9001\u6216\u81EA\u884C\u524D\u5F80
(\u5982\u6B65\u884C\u3001 \u81EA\u884C\u99D5/\u9A0E\u8ECA)\u7B49\u65B9\u5F0F\u70BA\u8F14\uFF1A\u5598\u3001\u547C\u5438\u56F0\u96E3\u3001\u6301\u7E8C\u80F8\u75DB\u3001\u80F8\u60B6\u3001\u610F\u8B58\u4E0D\u6E05\u3001
\u76AE\u819A\u6216\u5634\u5507\u6216\u6307\u7532\u5E8A\u767C\u9752\u3002
</div>
<div>

## \uBCF4\uAC74\uC18C\uC5D0\uC11C \uCF54\uB85C\uB09819 \uC591\uC131 \uD1B5\uBCF4\uB97C \uBC1B\uC558\uB2E4\uBA74, \uC774\uB807\uAC8C \uD558\uC138\uC694

\uAC80\uCCB4\uCC44\uCDE8\uC77C\uB85C\uBD80\uD130 7\uC77C\uAE4C\uC9C0\uB294 \uD0C0\uC778\uC5D0\uAC8C \uBC14\uC774\uB7EC\uC2A4\uB97C \uC804\uC5FC\uC2DC\uD0AC \uC704\uD5D8\uC774 \uC788\uC5B4 \uACA9\uB9AC\uD569\uB2C8\uB2E4.
\uC624\uBBF8\uD06C\uB860 \uBCC0\uC774\uB294 \uB378\uD0C0 \uBCC0\uC774\uBCF4\uB2E4 \uC911\uC99D\uB3C4\uAC00 \uB0AE\uC73C\uBBC0\uB85C \uC99D\uC0C1\uC774 \uC5C6\uAC70\uB098 \uACBD\uC99D\uC778 \uACBD\uC6B0 \uD574\uC5F4\uC81C, \uAC10\uAE30\uC57D \uBCF5\uC6A9 \uB4F1 \uB300\uC99D\uCE58\uB8CC\uB85C \uD68C\uBCF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. [\uCF54\uB85C\uB09819\uC640 \uC624\uBBF8\uD06C\uB860 \uBCC0\uC774] \uBC14\uB85C\uAC00\uAE30

\uBC1C\uC5F4 \uB4F1 \uC99D\uC0C1\uC73C\uB85C \uC9C4\uB8CC\uAC00 \uD544\uC694\uD558\uBA74, \uC678\uB798\uC9C4\uB8CC\uC13C\uD130 \uB300\uBA74\uC9C4\uB8CC \uB610\uB294 \uC804\uD654 \uC0C1\uB2F4\xB7\uCC98\uBC29\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.
\uAC10\uC5FC\uC804\uD30C \uBC29\uC9C0\uB97C \uC704\uD574 \uC678\uCD9C\uD558\uC9C0 \uB9D0\uACE0 \uAC00\uAE09\uC801 \uC9D1\uC5D0 \uBA38\uBB34\uB974\uBA70, \uD654\uC7A5\uC2E4\u2027\uBB3C\uAC74 \uB4F1\uC740 \uB3D9\uAC70\uC778\uACFC \uB530\uB85C \uC0AC\uC6A9\uD558\uACE0 \uC790\uC8FC \uC18C\uB3C5\uD574\uC57C \uD569\uB2C8\uB2E4.[\uCCAD\uC18C\uC640\uC18C\uB3C5] \uBC14\uB85C\uAC00\uAE30

</div>
<div>

## \u65B0\u578B\u30B3\u30ED\u30CA\u30A6\u30A4\u30EB\u30B9\u611F\u67D3\u75C7\u3001\u75C7\u72B6\u304C\u3042\u308B\u65B9\u306F\u305F\u3081\u3089\u308F\u305A\u306B\u9023\u7D61\u3092\uFF01

\u5BBF\u6CCA\u7642\u990A\u30FB\u81EA\u5B85\u7642\u990A\u8005\u30A2\u30F3\u30B1\u30FC\u30C8\u8ABF\u67FB\u306B\u3088\u3063\u3066\u3001\u4E16\u4EE3\u3092\u554F\u308F\u305A\u591A\u304F\u306E\u65B9\u304C\u3001\u30B3\u30ED\u30CA\u611F\u67D3\u304C\u5224\u660E\u3059\u308B\u524D\u304B\u3089\u3001
\u3010\u767A\u71B1\u3001\u982D\u75DB\u3001\u4F53\u306E\u3060\u308B\u3055\u3001\u305B\u304D\u3001\u306E\u3069\u306E\u75DB\u307F\u3011\u3068\u3044\u3063\u305F\u81EA\u899A\u75C7\u72B6\u3092\u8A34\u3048\u3066\u3044\u305F\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3057\u305F\u3002

\u3053\u308C\u3089\u306E\u75C7\u72B6\u3092\u8907\u6570\u611F\u3058\u3001\u4E0D\u5B89\u306B\u601D\u3063\u305F\u3068\u304D\u306F\u3001\u3069\u3046\u305E\u305F\u3081\u3089\u308F\u305A\u3001\u300C\u304B\u304B\u308A\u3064\u3051\u533B\u30FB\u8EAB\u8FD1\u306A\u533B\u7642\u6A5F\u95A2\u300D\u3084\u300C\u767A\u71B1\u76F8\u8AC7\u30BB\u30F3\u30BF\u30FC\u300D\u3078\u3054\u9023\u7D61\u3001\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002
</div>
</div>

<!--
These are pagragraphs in CJK about 
What to do if you receive a positive COVID-19 notification from a public health center

You can see the paragraph rarely has spaces in the sentence.
(We use kuromoji when we index the data in Elastice search to get the text indexed and split into words correctly.)

Next slide >>>>>
-->`,title:"CJK Paragraph",level:1,content:`# CJK Paragraph

<hr />

<div class="grid grid-cols-3 gap-4 items-start text-sm mt-4">
<div>

## \u6211\u662F COVID-19 \u78BA\u8A3A\u500B\u6848\uFF0C\u61C9\u8A72\u8981\u6CE8\u610F\u751A\u9EBC:

\u5927\u90E8\u5206\u7684 COVID-19 \u611F\u67D3\u8005\u75C7\u72C0\u8F15\u5FAE\uFF0C\u4F11\u990A\u5F8C\u5373\u53EF\u81EA\u884C\u5EB7\u5FA9\uFF0C\u70BA\u4E86\u5C07\u91AB\u7642\u8CC7\u6E90\u7559
\u7D66\u91CD\u75C7\u60A3\u8005\uFF0C\u8ACB\u60A8\u5148\u7559\u5728\u5BB6\u4E2D\u4E0D\u8981\u96E2\u958B\uFF0C\u7B49\u5019\u516C\u885B\u4EBA\u54E1\u901A\u77E5\u3002

\u52D9\u5FC5\u89C0\u5BDF\u81EA\u8EAB\u75C7\u72C0\u8B8A\u5316\uFF0C\u82E5\u51FA\u73FE\u4EE5\u4E0B\u75C7\u72C0\u6642\uFF0C\u8ACB\u7ACB\u5373\u901A\u77E5\u6240\u5728\u5730\u653F\u5E9C\u885B\u751F\u5C40\u6216\u64A5\u6253
119 \u5C31\u91AB\uFF0C\u4EE5 119 \u6551\u8B77\u8ECA\u70BA\u539F\u5247\u6216\u6307\u793A\u4E4B\u9632\u75AB\u8A08\u7A0B\u8ECA\u3001\u540C\u4F4F\u89AA\u53CB\u63A5\u9001\u6216\u81EA\u884C\u524D\u5F80
(\u5982\u6B65\u884C\u3001 \u81EA\u884C\u99D5/\u9A0E\u8ECA)\u7B49\u65B9\u5F0F\u70BA\u8F14\uFF1A\u5598\u3001\u547C\u5438\u56F0\u96E3\u3001\u6301\u7E8C\u80F8\u75DB\u3001\u80F8\u60B6\u3001\u610F\u8B58\u4E0D\u6E05\u3001
\u76AE\u819A\u6216\u5634\u5507\u6216\u6307\u7532\u5E8A\u767C\u9752\u3002
</div>
<div>

## \uBCF4\uAC74\uC18C\uC5D0\uC11C \uCF54\uB85C\uB09819 \uC591\uC131 \uD1B5\uBCF4\uB97C \uBC1B\uC558\uB2E4\uBA74, \uC774\uB807\uAC8C \uD558\uC138\uC694

\uAC80\uCCB4\uCC44\uCDE8\uC77C\uB85C\uBD80\uD130 7\uC77C\uAE4C\uC9C0\uB294 \uD0C0\uC778\uC5D0\uAC8C \uBC14\uC774\uB7EC\uC2A4\uB97C \uC804\uC5FC\uC2DC\uD0AC \uC704\uD5D8\uC774 \uC788\uC5B4 \uACA9\uB9AC\uD569\uB2C8\uB2E4.
\uC624\uBBF8\uD06C\uB860 \uBCC0\uC774\uB294 \uB378\uD0C0 \uBCC0\uC774\uBCF4\uB2E4 \uC911\uC99D\uB3C4\uAC00 \uB0AE\uC73C\uBBC0\uB85C \uC99D\uC0C1\uC774 \uC5C6\uAC70\uB098 \uACBD\uC99D\uC778 \uACBD\uC6B0 \uD574\uC5F4\uC81C, \uAC10\uAE30\uC57D \uBCF5\uC6A9 \uB4F1 \uB300\uC99D\uCE58\uB8CC\uB85C \uD68C\uBCF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. [\uCF54\uB85C\uB09819\uC640 \uC624\uBBF8\uD06C\uB860 \uBCC0\uC774] \uBC14\uB85C\uAC00\uAE30

\uBC1C\uC5F4 \uB4F1 \uC99D\uC0C1\uC73C\uB85C \uC9C4\uB8CC\uAC00 \uD544\uC694\uD558\uBA74, \uC678\uB798\uC9C4\uB8CC\uC13C\uD130 \uB300\uBA74\uC9C4\uB8CC \uB610\uB294 \uC804\uD654 \uC0C1\uB2F4\xB7\uCC98\uBC29\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.
\uAC10\uC5FC\uC804\uD30C \uBC29\uC9C0\uB97C \uC704\uD574 \uC678\uCD9C\uD558\uC9C0 \uB9D0\uACE0 \uAC00\uAE09\uC801 \uC9D1\uC5D0 \uBA38\uBB34\uB974\uBA70, \uD654\uC7A5\uC2E4\u2027\uBB3C\uAC74 \uB4F1\uC740 \uB3D9\uAC70\uC778\uACFC \uB530\uB85C \uC0AC\uC6A9\uD558\uACE0 \uC790\uC8FC \uC18C\uB3C5\uD574\uC57C \uD569\uB2C8\uB2E4.[\uCCAD\uC18C\uC640\uC18C\uB3C5] \uBC14\uB85C\uAC00\uAE30

</div>
<div>

## \u65B0\u578B\u30B3\u30ED\u30CA\u30A6\u30A4\u30EB\u30B9\u611F\u67D3\u75C7\u3001\u75C7\u72B6\u304C\u3042\u308B\u65B9\u306F\u305F\u3081\u3089\u308F\u305A\u306B\u9023\u7D61\u3092\uFF01

\u5BBF\u6CCA\u7642\u990A\u30FB\u81EA\u5B85\u7642\u990A\u8005\u30A2\u30F3\u30B1\u30FC\u30C8\u8ABF\u67FB\u306B\u3088\u3063\u3066\u3001\u4E16\u4EE3\u3092\u554F\u308F\u305A\u591A\u304F\u306E\u65B9\u304C\u3001\u30B3\u30ED\u30CA\u611F\u67D3\u304C\u5224\u660E\u3059\u308B\u524D\u304B\u3089\u3001
\u3010\u767A\u71B1\u3001\u982D\u75DB\u3001\u4F53\u306E\u3060\u308B\u3055\u3001\u305B\u304D\u3001\u306E\u3069\u306E\u75DB\u307F\u3011\u3068\u3044\u3063\u305F\u81EA\u899A\u75C7\u72B6\u3092\u8A34\u3048\u3066\u3044\u305F\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3057\u305F\u3002

\u3053\u308C\u3089\u306E\u75C7\u72B6\u3092\u8907\u6570\u611F\u3058\u3001\u4E0D\u5B89\u306B\u601D\u3063\u305F\u3068\u304D\u306F\u3001\u3069\u3046\u305E\u305F\u3081\u3089\u308F\u305A\u3001\u300C\u304B\u304B\u308A\u3064\u3051\u533B\u30FB\u8EAB\u8FD1\u306A\u533B\u7642\u6A5F\u95A2\u300D\u3084\u300C\u767A\u71B1\u76F8\u8AC7\u30BB\u30F3\u30BF\u30FC\u300D\u3078\u3054\u9023\u7D61\u3001\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002
</div>
</div>`,frontmatter:{},note:`These are pagragraphs in CJK about 
What to do if you receive a positive COVID-19 notification from a public health center

You can see the paragraph rarely has spaces in the sentence.
(We use kuromoji when we index the data in Elastice search to get the text indexed and split into words correctly.)

Next slide >>>>>`,index:2,start:60,end:109},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-4.md",notesHTML:`<p>These are pagragraphs in CJK about
What to do if you receive a positive COVID-19 notification from a public health center</p>
<p>You can see the paragraph rarely has spaces in the sentence.
(We use kuromoji when we index the data in Elastice search to get the text indexed and split into words correctly.)</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:zw,meta:{srcSequence:"./section-4.md",slide:{raw:`
# Input method

<div class="grid grid-cols-4 gap-2 items-end">
    <div>
        <img src="/images/2022-09-09-14-35-49.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-36-35.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-44-38.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-46-18.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-39-25.png" />
    </div>
    <div class="col-span-2">
        <img src="/images/2022-09-09-14-41-00.png" />
    </div>

</div>

<!--
How do we type, what's our keyboards look like?

From left to right, we see two Traditional Chinese keyboard with \u5009\u9821 and then \u6CE8\u97F3
And there are two Korean keyboard layout and two Japanese layout on in mobile with a 3by3 grid or a comapct keyboard layout which has the 50 essential sound characters.

Next slide >>>>>
-->
`,title:"Input method",level:1,content:`# Input method

<div class="grid grid-cols-4 gap-2 items-end">
    <div>
        <img src="/images/2022-09-09-14-35-49.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-36-35.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-44-38.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-46-18.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-39-25.png" />
    </div>
    <div class="col-span-2">
        <img src="/images/2022-09-09-14-41-00.png" />
    </div>

</div>`,frontmatter:{srcSequence:"./section-4.md"},note:`How do we type, what's our keyboards look like?

From left to right, we see two Traditional Chinese keyboard with \u5009\u9821 and then \u6CE8\u97F3
And there are two Korean keyboard layout and two Japanese layout on in mobile with a 3by3 grid or a comapct keyboard layout which has the 50 essential sound characters.

Next slide >>>>>`,index:33,start:110,end:144,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-4.md",raw:`
# Input method

<div class="grid grid-cols-4 gap-2 items-end">
    <div>
        <img src="/images/2022-09-09-14-35-49.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-36-35.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-44-38.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-46-18.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-39-25.png" />
    </div>
    <div class="col-span-2">
        <img src="/images/2022-09-09-14-41-00.png" />
    </div>

</div>

<!--
How do we type, what's our keyboards look like?

From left to right, we see two Traditional Chinese keyboard with \u5009\u9821 and then \u6CE8\u97F3
And there are two Korean keyboard layout and two Japanese layout on in mobile with a 3by3 grid or a comapct keyboard layout which has the 50 essential sound characters.

Next slide >>>>>
-->
`,title:"Input method",level:1,content:`# Input method

<div class="grid grid-cols-4 gap-2 items-end">
    <div>
        <img src="/images/2022-09-09-14-35-49.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-36-35.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-44-38.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-46-18.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-39-25.png" />
    </div>
    <div class="col-span-2">
        <img src="/images/2022-09-09-14-41-00.png" />
    </div>

</div>`,frontmatter:{},note:`How do we type, what's our keyboards look like?

From left to right, we see two Traditional Chinese keyboard with \u5009\u9821 and then \u6CE8\u97F3
And there are two Korean keyboard layout and two Japanese layout on in mobile with a 3by3 grid or a comapct keyboard layout which has the 50 essential sound characters.

Next slide >>>>>`,index:3,start:110,end:144},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-4.md",notesHTML:`<p>How do we type, what's our keyboards look like?</p>
<p>From left to right, we see two Traditional Chinese keyboard with \u5009\u9821 and then \u6CE8\u97F3
And there are two Korean keyboard layout and two Japanese layout on in mobile with a 3by3 grid or a comapct keyboard layout which has the 50 essential sound characters.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:Gw,meta:{srcSequence:"./section-4.md",slide:{raw:`
# Input method

| Keyword      | Segments      | Segments |
| ------------ | ------------- | -------- |
| Computer | | 8 |
| \u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC (konpy\u016Bt\u0101)| kon pyu- ta- | 10 |
| \u96FB\u8166 (di\xE0nn\u01CEo) | \u3109\u4E00\u3122\u02CB \u310B\u3120\u02C7 | 7 |
| \u8BA1\u7B97\u673A (j\xECsu\xE0nj\u012B)| jisuanji / jsj | 8 / 3 |

<!--
When type the word for computer, the key strokes are also different.

It is also different term in Traditional Chinese use in Taiwan or Simplified Chinese in China.

When entering CJK text, we would like to wait until the word
is entered. This can be done using a set of special Javascript events.

Next slide >>>>>

-->
`,title:"Input method",level:1,content:`# Input method

| Keyword      | Segments      | Segments |
| ------------ | ------------- | -------- |
| Computer | | 8 |
| \u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC (konpy\u016Bt\u0101)| kon pyu- ta- | 10 |
| \u96FB\u8166 (di\xE0nn\u01CEo) | \u3109\u4E00\u3122\u02CB \u310B\u3120\u02C7 | 7 |
| \u8BA1\u7B97\u673A (j\xECsu\xE0nj\u012B)| jisuanji / jsj | 8 / 3 |`,frontmatter:{srcSequence:"./section-4.md"},note:`When type the word for computer, the key strokes are also different.

It is also different term in Traditional Chinese use in Taiwan or Simplified Chinese in China.

When entering CJK text, we would like to wait until the word
is entered. This can be done using a set of special Javascript events.

Next slide >>>>>`,index:34,start:145,end:167,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-4.md",raw:`
# Input method

| Keyword      | Segments      | Segments |
| ------------ | ------------- | -------- |
| Computer | | 8 |
| \u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC (konpy\u016Bt\u0101)| kon pyu- ta- | 10 |
| \u96FB\u8166 (di\xE0nn\u01CEo) | \u3109\u4E00\u3122\u02CB \u310B\u3120\u02C7 | 7 |
| \u8BA1\u7B97\u673A (j\xECsu\xE0nj\u012B)| jisuanji / jsj | 8 / 3 |

<!--
When type the word for computer, the key strokes are also different.

It is also different term in Traditional Chinese use in Taiwan or Simplified Chinese in China.

When entering CJK text, we would like to wait until the word
is entered. This can be done using a set of special Javascript events.

Next slide >>>>>

-->
`,title:"Input method",level:1,content:`# Input method

| Keyword      | Segments      | Segments |
| ------------ | ------------- | -------- |
| Computer | | 8 |
| \u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC (konpy\u016Bt\u0101)| kon pyu- ta- | 10 |
| \u96FB\u8166 (di\xE0nn\u01CEo) | \u3109\u4E00\u3122\u02CB \u310B\u3120\u02C7 | 7 |
| \u8BA1\u7B97\u673A (j\xECsu\xE0nj\u012B)| jisuanji / jsj | 8 / 3 |`,frontmatter:{},note:`When type the word for computer, the key strokes are also different.

It is also different term in Traditional Chinese use in Taiwan or Simplified Chinese in China.

When entering CJK text, we would like to wait until the word
is entered. This can be done using a set of special Javascript events.

Next slide >>>>>`,index:4,start:145,end:167},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-4.md",notesHTML:`<p>When type the word for computer, the key strokes are also different.</p>
<p>It is also different term in Traditional Chinese use in Taiwan or Simplified Chinese in China.</p>
<p>When entering CJK text, we would like to wait until the word
is entered. This can be done using a set of special Javascript events.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:nb,meta:{srcSequence:"./section-4.md",slide:{raw:`
# Autocomplete search suggestion

What is <span class="bg-green-300 p-1">improved</span>?

<video controls>
  <source src="/images/vjS5Xr.mp4" type="video/mp4" />
</video>
<!-- Configuration 
composition events https://github.com/oist/oist-www/issues94#issuecomment-1009660884
-->

<!--

The english typing works normally, and the Japanese word for Corona, only query once the word is decided.

Next slide >>>>>
-->
`,title:"Autocomplete search suggestion",level:1,content:`# Autocomplete search suggestion

What is <span class="bg-green-300 p-1">improved</span>?

<video controls>
  <source src="/images/vjS5Xr.mp4" type="video/mp4" />
</video>
<!-- Configuration 
composition events https://github.com/oist/oist-www/issues94#issuecomment-1009660884
-->`,frontmatter:{srcSequence:"./section-4.md"},note:`The english typing works normally, and the Japanese word for Corona, only query once the word is decided.

Next slide >>>>>`,index:35,start:168,end:187,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-4.md",raw:`
# Autocomplete search suggestion

What is <span class="bg-green-300 p-1">improved</span>?

<video controls>
  <source src="/images/vjS5Xr.mp4" type="video/mp4" />
</video>
<!-- Configuration 
composition events https://github.com/oist/oist-www/issues94#issuecomment-1009660884
-->

<!--

The english typing works normally, and the Japanese word for Corona, only query once the word is decided.

Next slide >>>>>
-->
`,title:"Autocomplete search suggestion",level:1,content:`# Autocomplete search suggestion

What is <span class="bg-green-300 p-1">improved</span>?

<video controls>
  <source src="/images/vjS5Xr.mp4" type="video/mp4" />
</video>
<!-- Configuration 
composition events https://github.com/oist/oist-www/issues94#issuecomment-1009660884
-->`,frontmatter:{},note:`The english typing works normally, and the Japanese word for Corona, only query once the word is decided.

Next slide >>>>>`,index:5,start:168,end:187},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-4.md",notesHTML:`<p>The english typing works normally, and the Japanese word for Corona, only query once the word is decided.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:ib,meta:{srcSequence:"./section-4.md",slide:{raw:`
# CompositionEvent 

Implement \`CompositionEvent\` to avoid trigger search too early.

<div class="grid grid-row-2 grid-col-2 gap-2">
<div>

\`\`\`javascript {all|7-11|2-3|2-5}
  inputElement.on('input, compositinoend', function (event) {
    if (event.type == 'compositionend') { compositionActive = false; }
    if (compositionActive) { return; }

    //...do autocomplete AJAX call
    
  }).on('compositionstart', function () {
    compositionActive = true;
  }).on('compositionupdate', function() {
    compositionActive = true;
  })
\`\`\`
</div>
<div>

[MDN Web API](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent)

[Core #2823589: Improve IME handling on Autocomplete](https://www.drupal.org/project/drupal/issues/2823589)
</div>
<iframe class="col-span-2 bg-blue-600/30 p-4 w-full" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/compositionstart_event/_sample_.live_example.html" width="960" height="480"></iframe>


</div>


<!-- 
  // TODO find the trace of autocomplete js in Drupal 8 or even 7
  how did Drupal handle the composition events before.
  Japaense user gets angry when the form is submitting while confirming the kanji words.

  [Improve IME handling on Autocomplete](https://www.drupal.org/project/drupal/issues/2823589)
  

-->
<!--
(function ($) {
  'use strict';
  const autocompleteDropdownSelector = '.oist-search-form ul';
  Drupal.behaviors.searchAutocomplete = {
    attach: function (context, settings) {
      $('.oist-search-form input').once('autocomplete').on('input', function () {
        const keyword = $(this).val();
        $(autocompleteDropdownSelector).remove();
        if (keyword.length < 2) {
          return;
        }
        $.ajax({
          url: settings.searchBaseUrl + encodeURIComponent(keyword) + '?sort=relevancy&order=desc&number=5&language=' + settings.language + '&startdate=&enddate=&preview=5',
          crossDomain: true,
          success: function (data) {
            // $(autocompleteDropdownSelector).remove();
            var results = '<div class="search-result-list bg-white px-4">';
            results += '<ul class="border-t border-gray-400 w-full pt-2">';
            for (var i in data) {
              if (data[i].site === 'www' || data[i].site === 'main') {
                results += '<li class="pb-3"><a class="text-gray-700 underline js-search-autocomplete ' + data[i].site + '" href="' + data[i].link + '">' + data[i].title + '</a></li>';
              }
              else {
                results += '<li class="pb-3"><a class="flex items-center gap-x-2 text-gray-700 js-search-autocomplete ' + data[i].site + '" href="' + data[i].link + '"><i class="fa fa-external-link" aria-hidden="true"></i><span class="underline">' + data[i].title + '</span></a></li>';
              }
            }
            results += '</ul></div>';
            if ($('.oist-mobile-search').hasClass('active')) {
              $('.oist-mobile-search .oist-search-results-attach').after(results);
            }
            else {
              $('.oist-desktop-search').after(results);
            }
          },
        });
      }).focusout(function () {
        // Generally when we lose focus from the search box,
        // we would like to hide the suggestions.
        // However, if the user clicks on a result, if we remove the markup
        // the click would fail. That's why we make this exception for the link
        // clicks.
        var selected = $('.js-search-autocomplete:hover');
        if (selected.length) {
          return;
        }
        // $(autocompleteDropdownSelector).remove();
      });
    }
  };
})(jQuery);
-->

<!--

There is CompositionEvent that we can use to detect the correct moment of the finish of the input.
(RIGHT >>>)

We treat the compositionupdate and start as typing in progress (RIGHT >>>)

And when the word is decided, there will be a compositionEnd event and we can started to (RIGHT >>>) trigger the query with AJAX

Phew...

Next slide >>>>>
-->


`,title:"CompositionEvent",level:1,content:`# CompositionEvent 

Implement \`CompositionEvent\` to avoid trigger search too early.

<div class="grid grid-row-2 grid-col-2 gap-2">
<div>

\`\`\`javascript {all|7-11|2-3|2-5}
  inputElement.on('input, compositinoend', function (event) {
    if (event.type == 'compositionend') { compositionActive = false; }
    if (compositionActive) { return; }

    //...do autocomplete AJAX call
    
  }).on('compositionstart', function () {
    compositionActive = true;
  }).on('compositionupdate', function() {
    compositionActive = true;
  })
\`\`\`
</div>
<div>

[MDN Web API](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent)

[Core #2823589: Improve IME handling on Autocomplete](https://www.drupal.org/project/drupal/issues/2823589)
</div>
<iframe class="col-span-2 bg-blue-600/30 p-4 w-full" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/compositionstart_event/_sample_.live_example.html" width="960" height="480"></iframe>


</div>


<!-- 
  // TODO find the trace of autocomplete js in Drupal 8 or even 7
  how did Drupal handle the composition events before.
  Japaense user gets angry when the form is submitting while confirming the kanji words.

  [Improve IME handling on Autocomplete](https://www.drupal.org/project/drupal/issues/2823589)
  

-->
<!--
(function ($) {
  'use strict';
  const autocompleteDropdownSelector = '.oist-search-form ul';
  Drupal.behaviors.searchAutocomplete = {
    attach: function (context, settings) {
      $('.oist-search-form input').once('autocomplete').on('input', function () {
        const keyword = $(this).val();
        $(autocompleteDropdownSelector).remove();
        if (keyword.length < 2) {
          return;
        }
        $.ajax({
          url: settings.searchBaseUrl + encodeURIComponent(keyword) + '?sort=relevancy&order=desc&number=5&language=' + settings.language + '&startdate=&enddate=&preview=5',
          crossDomain: true,
          success: function (data) {
            // $(autocompleteDropdownSelector).remove();
            var results = '<div class="search-result-list bg-white px-4">';
            results += '<ul class="border-t border-gray-400 w-full pt-2">';
            for (var i in data) {
              if (data[i].site === 'www' || data[i].site === 'main') {
                results += '<li class="pb-3"><a class="text-gray-700 underline js-search-autocomplete ' + data[i].site + '" href="' + data[i].link + '">' + data[i].title + '</a></li>';
              }
              else {
                results += '<li class="pb-3"><a class="flex items-center gap-x-2 text-gray-700 js-search-autocomplete ' + data[i].site + '" href="' + data[i].link + '"><i class="fa fa-external-link" aria-hidden="true"></i><span class="underline">' + data[i].title + '</span></a></li>';
              }
            }
            results += '</ul></div>';
            if ($('.oist-mobile-search').hasClass('active')) {
              $('.oist-mobile-search .oist-search-results-attach').after(results);
            }
            else {
              $('.oist-desktop-search').after(results);
            }
          },
        });
      }).focusout(function () {
        // Generally when we lose focus from the search box,
        // we would like to hide the suggestions.
        // However, if the user clicks on a result, if we remove the markup
        // the click would fail. That's why we make this exception for the link
        // clicks.
        var selected = $('.js-search-autocomplete:hover');
        if (selected.length) {
          return;
        }
        // $(autocompleteDropdownSelector).remove();
      });
    }
  };
})(jQuery);
-->`,frontmatter:{srcSequence:"./section-4.md"},note:`There is CompositionEvent that we can use to detect the correct moment of the finish of the input.
(RIGHT >>>)

We treat the compositionupdate and start as typing in progress (RIGHT >>>)

And when the word is decided, there will be a compositionEnd event and we can started to (RIGHT >>>) trigger the query with AJAX

Phew...

Next slide >>>>>`,index:36,start:188,end:300,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-4.md",raw:`
# CompositionEvent 

Implement \`CompositionEvent\` to avoid trigger search too early.

<div class="grid grid-row-2 grid-col-2 gap-2">
<div>

\`\`\`javascript {all|7-11|2-3|2-5}
  inputElement.on('input, compositinoend', function (event) {
    if (event.type == 'compositionend') { compositionActive = false; }
    if (compositionActive) { return; }

    //...do autocomplete AJAX call
    
  }).on('compositionstart', function () {
    compositionActive = true;
  }).on('compositionupdate', function() {
    compositionActive = true;
  })
\`\`\`
</div>
<div>

[MDN Web API](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent)

[Core #2823589: Improve IME handling on Autocomplete](https://www.drupal.org/project/drupal/issues/2823589)
</div>
<iframe class="col-span-2 bg-blue-600/30 p-4 w-full" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/compositionstart_event/_sample_.live_example.html" width="960" height="480"></iframe>


</div>


<!-- 
  // TODO find the trace of autocomplete js in Drupal 8 or even 7
  how did Drupal handle the composition events before.
  Japaense user gets angry when the form is submitting while confirming the kanji words.

  [Improve IME handling on Autocomplete](https://www.drupal.org/project/drupal/issues/2823589)
  

-->
<!--
(function ($) {
  'use strict';
  const autocompleteDropdownSelector = '.oist-search-form ul';
  Drupal.behaviors.searchAutocomplete = {
    attach: function (context, settings) {
      $('.oist-search-form input').once('autocomplete').on('input', function () {
        const keyword = $(this).val();
        $(autocompleteDropdownSelector).remove();
        if (keyword.length < 2) {
          return;
        }
        $.ajax({
          url: settings.searchBaseUrl + encodeURIComponent(keyword) + '?sort=relevancy&order=desc&number=5&language=' + settings.language + '&startdate=&enddate=&preview=5',
          crossDomain: true,
          success: function (data) {
            // $(autocompleteDropdownSelector).remove();
            var results = '<div class="search-result-list bg-white px-4">';
            results += '<ul class="border-t border-gray-400 w-full pt-2">';
            for (var i in data) {
              if (data[i].site === 'www' || data[i].site === 'main') {
                results += '<li class="pb-3"><a class="text-gray-700 underline js-search-autocomplete ' + data[i].site + '" href="' + data[i].link + '">' + data[i].title + '</a></li>';
              }
              else {
                results += '<li class="pb-3"><a class="flex items-center gap-x-2 text-gray-700 js-search-autocomplete ' + data[i].site + '" href="' + data[i].link + '"><i class="fa fa-external-link" aria-hidden="true"></i><span class="underline">' + data[i].title + '</span></a></li>';
              }
            }
            results += '</ul></div>';
            if ($('.oist-mobile-search').hasClass('active')) {
              $('.oist-mobile-search .oist-search-results-attach').after(results);
            }
            else {
              $('.oist-desktop-search').after(results);
            }
          },
        });
      }).focusout(function () {
        // Generally when we lose focus from the search box,
        // we would like to hide the suggestions.
        // However, if the user clicks on a result, if we remove the markup
        // the click would fail. That's why we make this exception for the link
        // clicks.
        var selected = $('.js-search-autocomplete:hover');
        if (selected.length) {
          return;
        }
        // $(autocompleteDropdownSelector).remove();
      });
    }
  };
})(jQuery);
-->

<!--

There is CompositionEvent that we can use to detect the correct moment of the finish of the input.
(RIGHT >>>)

We treat the compositionupdate and start as typing in progress (RIGHT >>>)

And when the word is decided, there will be a compositionEnd event and we can started to (RIGHT >>>) trigger the query with AJAX

Phew...

Next slide >>>>>
-->


`,title:"CompositionEvent",level:1,content:`# CompositionEvent 

Implement \`CompositionEvent\` to avoid trigger search too early.

<div class="grid grid-row-2 grid-col-2 gap-2">
<div>

\`\`\`javascript {all|7-11|2-3|2-5}
  inputElement.on('input, compositinoend', function (event) {
    if (event.type == 'compositionend') { compositionActive = false; }
    if (compositionActive) { return; }

    //...do autocomplete AJAX call
    
  }).on('compositionstart', function () {
    compositionActive = true;
  }).on('compositionupdate', function() {
    compositionActive = true;
  })
\`\`\`
</div>
<div>

[MDN Web API](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent)

[Core #2823589: Improve IME handling on Autocomplete](https://www.drupal.org/project/drupal/issues/2823589)
</div>
<iframe class="col-span-2 bg-blue-600/30 p-4 w-full" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/compositionstart_event/_sample_.live_example.html" width="960" height="480"></iframe>


</div>


<!-- 
  // TODO find the trace of autocomplete js in Drupal 8 or even 7
  how did Drupal handle the composition events before.
  Japaense user gets angry when the form is submitting while confirming the kanji words.

  [Improve IME handling on Autocomplete](https://www.drupal.org/project/drupal/issues/2823589)
  

-->
<!--
(function ($) {
  'use strict';
  const autocompleteDropdownSelector = '.oist-search-form ul';
  Drupal.behaviors.searchAutocomplete = {
    attach: function (context, settings) {
      $('.oist-search-form input').once('autocomplete').on('input', function () {
        const keyword = $(this).val();
        $(autocompleteDropdownSelector).remove();
        if (keyword.length < 2) {
          return;
        }
        $.ajax({
          url: settings.searchBaseUrl + encodeURIComponent(keyword) + '?sort=relevancy&order=desc&number=5&language=' + settings.language + '&startdate=&enddate=&preview=5',
          crossDomain: true,
          success: function (data) {
            // $(autocompleteDropdownSelector).remove();
            var results = '<div class="search-result-list bg-white px-4">';
            results += '<ul class="border-t border-gray-400 w-full pt-2">';
            for (var i in data) {
              if (data[i].site === 'www' || data[i].site === 'main') {
                results += '<li class="pb-3"><a class="text-gray-700 underline js-search-autocomplete ' + data[i].site + '" href="' + data[i].link + '">' + data[i].title + '</a></li>';
              }
              else {
                results += '<li class="pb-3"><a class="flex items-center gap-x-2 text-gray-700 js-search-autocomplete ' + data[i].site + '" href="' + data[i].link + '"><i class="fa fa-external-link" aria-hidden="true"></i><span class="underline">' + data[i].title + '</span></a></li>';
              }
            }
            results += '</ul></div>';
            if ($('.oist-mobile-search').hasClass('active')) {
              $('.oist-mobile-search .oist-search-results-attach').after(results);
            }
            else {
              $('.oist-desktop-search').after(results);
            }
          },
        });
      }).focusout(function () {
        // Generally when we lose focus from the search box,
        // we would like to hide the suggestions.
        // However, if the user clicks on a result, if we remove the markup
        // the click would fail. That's why we make this exception for the link
        // clicks.
        var selected = $('.js-search-autocomplete:hover');
        if (selected.length) {
          return;
        }
        // $(autocompleteDropdownSelector).remove();
      });
    }
  };
})(jQuery);
-->`,frontmatter:{},note:`There is CompositionEvent that we can use to detect the correct moment of the finish of the input.
(RIGHT >>>)

We treat the compositionupdate and start as typing in progress (RIGHT >>>)

And when the word is decided, there will be a compositionEnd event and we can started to (RIGHT >>>) trigger the query with AJAX

Phew...

Next slide >>>>>`,index:6,start:188,end:300},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-4.md",notesHTML:`<p>There is CompositionEvent that we can use to detect the correct moment of the finish of the input.
(RIGHT &gt;&gt;&gt;)</p>
<p>We treat the compositionupdate and start as typing in progress (RIGHT &gt;&gt;&gt;)</p>
<p>And when the word is decided, there will be a compositionEnd event and we can started to (RIGHT &gt;&gt;&gt;) trigger the query with AJAX</p>
<p>Phew...</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:db,meta:{layout:"intro-image",image:"/images/sorting-soraya-irving.jpg",title:"===== Issue in CJK: Sorting =====",srcSequence:"./section-5.md",slide:{raw:null,title:"===== Issue in CJK: Sorting =====",level:1,content:`<div class="hidden">
# ===== Issue in CJK: Sorting =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1 class="text-blue-800">Sorting</h1>
  <p class="text-blue-500">Color, Shape, Size?</p>
</div>

<!--
Photo by Soraya Irving on Unsplash
https://unsplash.com/photos/AGtksbL8z2c
-->`,frontmatter:{layout:"intro-image",image:"/images/sorting-soraya-irving.jpg",title:"===== Issue in CJK: Sorting =====",srcSequence:"./section-5.md"},note:`Now we know how to type in CJK.
The last part of this presentation, let's dig further in the language.
I promise this is not language class.

In english we sometimes sort with the alphabet for title of articles, taxonomy tags, or site names for example.

How does CJK do in the similar way?

Next slide >>>>>`,index:37,start:0,end:37,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",raw:`---
layout: intro-image
image: /images/sorting-soraya-irving.jpg
---

<div class="hidden">
# ===== Issue in CJK: Sorting =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1 class="text-blue-800">Sorting</h1>
  <p class="text-blue-500">Color, Shape, Size?</p>
</div>

<!--
Photo by Soraya Irving on Unsplash
https://unsplash.com/photos/AGtksbL8z2c
-->

<!--
Now we know how to type in CJK.
The last part of this presentation, let's dig further in the language.
I promise this is not language class.

In english we sometimes sort with the alphabet for title of articles, taxonomy tags, or site names for example.

How does CJK do in the similar way?

Next slide >>>>>
-->
`,title:"===== Issue in CJK: Sorting =====",level:1,content:`<div class="hidden">
# ===== Issue in CJK: Sorting =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1 class="text-blue-800">Sorting</h1>
  <p class="text-blue-500">Color, Shape, Size?</p>
</div>

<!--
Photo by Soraya Irving on Unsplash
https://unsplash.com/photos/AGtksbL8z2c
-->`,frontmatter:{layout:"intro-image",image:"/images/sorting-soraya-irving.jpg",title:"===== Issue in CJK: Sorting ====="},note:`Now we know how to type in CJK.
The last part of this presentation, let's dig further in the language.
I promise this is not language class.

In english we sometimes sort with the alphabet for title of articles, taxonomy tags, or site names for example.

How does CJK do in the similar way?

Next slide >>>>>`,index:0,start:0,end:37},inline:{raw:`---
src: ./section-5.md
---
<!-- this page will be loaded from './section-5.md' -->
# 5. Sorting
`,title:"5. Sorting",level:1,content:`<!-- this page will be loaded from './section-5.md' -->
# 5. Sorting`,frontmatter:{},index:8,start:178,end:184},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",notesHTML:`<p>Now we know how to type in CJK.
The last part of this presentation, let's dig further in the language.
I promise this is not language class.</p>
<p>In english we sometimes sort with the alphabet for title of articles, taxonomy tags, or site names for example.</p>
<p>How does CJK do in the similar way?</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:mb,meta:{srcSequence:"./section-5.md",slide:{raw:`
<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon)
</div>


<div class="grid grid-cols-2">
  <div class="flex flex-col justify-center">
    <h1>\u4E94\u5341\u97F3 (Goj\u016Bon) </h1>
    <h3>Japanese "fifty sounds"</h3>
  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="h-124 w-auto" />
  </div>
</div>

<!-- 
In Japanese the order of the Gojuon is the main ordering system. 
It is based on the phenentical elements.

Next slide >>>>>
-->`,title:"Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon)",level:1,content:`<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon)
</div>


<div class="grid grid-cols-2">
  <div class="flex flex-col justify-center">
    <h1>\u4E94\u5341\u97F3 (Goj\u016Bon) </h1>
    <h3>Japanese "fifty sounds"</h3>
  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="h-124 w-auto" />
  </div>
</div>`,frontmatter:{srcSequence:"./section-5.md"},note:`In Japanese the order of the Gojuon is the main ordering system. 
It is based on the phenentical elements.

Next slide >>>>>`,index:38,start:38,end:60,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",raw:`
<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon)
</div>


<div class="grid grid-cols-2">
  <div class="flex flex-col justify-center">
    <h1>\u4E94\u5341\u97F3 (Goj\u016Bon) </h1>
    <h3>Japanese "fifty sounds"</h3>
  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="h-124 w-auto" />
  </div>
</div>

<!-- 
In Japanese the order of the Gojuon is the main ordering system. 
It is based on the phenentical elements.

Next slide >>>>>
-->`,title:"Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon)",level:1,content:`<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon)
</div>


<div class="grid grid-cols-2">
  <div class="flex flex-col justify-center">
    <h1>\u4E94\u5341\u97F3 (Goj\u016Bon) </h1>
    <h3>Japanese "fifty sounds"</h3>
  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="h-124 w-auto" />
  </div>
</div>`,frontmatter:{},note:`In Japanese the order of the Gojuon is the main ordering system. 
It is based on the phenentical elements.

Next slide >>>>>`,index:1,start:38,end:60},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",notesHTML:`<p>In Japanese the order of the Gojuon is the main ordering system.
It is based on the phenentical elements.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:_b,meta:{srcSequence:"./section-5.md",slide:{raw:`
<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon)
</div>


<div class="grid grid-cols-[1fr,3fr]">
  <div class="flex flex-col justify-center">
    <h1>\u4E94\u5341\u97F3 (Goj\u016Bon) </h1>
    <h3>Japanese "fifty sounds"</h3>
  </div>
  <div class="flex-1 flex flex-row space-x-4">
    <div>
        <img src="/images/2022-09-04-17-28-34.png" class="h-118 w-auto" />
        <h4 class="mt-2">Hiragana</h4>
    </div>
    <div>
        <img src="/images/2022-09-06-17-51-19.png" class="h-118 w-auto" />
        <h4 class="mt-2">Katagana</h4>
    </div>
  </div>
</div>

<!--
And there are Hiragana for main Japanese language, and Katagana often used for translate the foreign language or new invented terms.

Next slide >>>>>
-->
`,title:"Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon)",level:1,content:`<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon)
</div>


<div class="grid grid-cols-[1fr,3fr]">
  <div class="flex flex-col justify-center">
    <h1>\u4E94\u5341\u97F3 (Goj\u016Bon) </h1>
    <h3>Japanese "fifty sounds"</h3>
  </div>
  <div class="flex-1 flex flex-row space-x-4">
    <div>
        <img src="/images/2022-09-04-17-28-34.png" class="h-118 w-auto" />
        <h4 class="mt-2">Hiragana</h4>
    </div>
    <div>
        <img src="/images/2022-09-06-17-51-19.png" class="h-118 w-auto" />
        <h4 class="mt-2">Katagana</h4>
    </div>
  </div>
</div>`,frontmatter:{srcSequence:"./section-5.md"},note:`And there are Hiragana for main Japanese language, and Katagana often used for translate the foreign language or new invented terms.

Next slide >>>>>`,index:39,start:61,end:90,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",raw:`
<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon)
</div>


<div class="grid grid-cols-[1fr,3fr]">
  <div class="flex flex-col justify-center">
    <h1>\u4E94\u5341\u97F3 (Goj\u016Bon) </h1>
    <h3>Japanese "fifty sounds"</h3>
  </div>
  <div class="flex-1 flex flex-row space-x-4">
    <div>
        <img src="/images/2022-09-04-17-28-34.png" class="h-118 w-auto" />
        <h4 class="mt-2">Hiragana</h4>
    </div>
    <div>
        <img src="/images/2022-09-06-17-51-19.png" class="h-118 w-auto" />
        <h4 class="mt-2">Katagana</h4>
    </div>
  </div>
</div>

<!--
And there are Hiragana for main Japanese language, and Katagana often used for translate the foreign language or new invented terms.

Next slide >>>>>
-->
`,title:"Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon)",level:1,content:`<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon)
</div>


<div class="grid grid-cols-[1fr,3fr]">
  <div class="flex flex-col justify-center">
    <h1>\u4E94\u5341\u97F3 (Goj\u016Bon) </h1>
    <h3>Japanese "fifty sounds"</h3>
  </div>
  <div class="flex-1 flex flex-row space-x-4">
    <div>
        <img src="/images/2022-09-04-17-28-34.png" class="h-118 w-auto" />
        <h4 class="mt-2">Hiragana</h4>
    </div>
    <div>
        <img src="/images/2022-09-06-17-51-19.png" class="h-118 w-auto" />
        <h4 class="mt-2">Katagana</h4>
    </div>
  </div>
</div>`,frontmatter:{},note:`And there are Hiragana for main Japanese language, and Katagana often used for translate the foreign language or new invented terms.

Next slide >>>>>`,index:2,start:61,end:90},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",notesHTML:`<p>And there are Hiragana for main Japanese language, and Katagana often used for translate the foreign language or new invented terms.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:Ab,meta:{srcSequence:"./section-5.md",slide:{raw:`
<div class="hidden">
# Sorting - \u6F22\u5B57 (Kanji)
</div>


<div class="grid grid-cols-2">
  <div class="flex flex-col justify-center">
    <h1>\u6F22\u5B57 (Kanji)</h1>
    <h3>Characters in Japanese</h3>
  </div>
  <div class="flex-1 ">
    <img src="/images/raku-japanese-character.png" class="h-124 w-auto" />
  </div>
</div>

<!--
And also Chinese Character which is called Kanji in Japanese.

Next slide >>>>>
-->
`,title:"Sorting - \u6F22\u5B57 (Kanji)",level:1,content:`<div class="hidden">
# Sorting - \u6F22\u5B57 (Kanji)
</div>


<div class="grid grid-cols-2">
  <div class="flex flex-col justify-center">
    <h1>\u6F22\u5B57 (Kanji)</h1>
    <h3>Characters in Japanese</h3>
  </div>
  <div class="flex-1 ">
    <img src="/images/raku-japanese-character.png" class="h-124 w-auto" />
  </div>
</div>`,frontmatter:{srcSequence:"./section-5.md"},note:`And also Chinese Character which is called Kanji in Japanese.

Next slide >>>>>`,index:40,start:91,end:113,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",raw:`
<div class="hidden">
# Sorting - \u6F22\u5B57 (Kanji)
</div>


<div class="grid grid-cols-2">
  <div class="flex flex-col justify-center">
    <h1>\u6F22\u5B57 (Kanji)</h1>
    <h3>Characters in Japanese</h3>
  </div>
  <div class="flex-1 ">
    <img src="/images/raku-japanese-character.png" class="h-124 w-auto" />
  </div>
</div>

<!--
And also Chinese Character which is called Kanji in Japanese.

Next slide >>>>>
-->
`,title:"Sorting - \u6F22\u5B57 (Kanji)",level:1,content:`<div class="hidden">
# Sorting - \u6F22\u5B57 (Kanji)
</div>


<div class="grid grid-cols-2">
  <div class="flex flex-col justify-center">
    <h1>\u6F22\u5B57 (Kanji)</h1>
    <h3>Characters in Japanese</h3>
  </div>
  <div class="flex-1 ">
    <img src="/images/raku-japanese-character.png" class="h-124 w-auto" />
  </div>
</div>`,frontmatter:{},note:`And also Chinese Character which is called Kanji in Japanese.

Next slide >>>>>`,index:3,start:91,end:113},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",notesHTML:`<p>And also Chinese Character which is called Kanji in Japanese.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:Tb,meta:{srcSequence:"./section-5.md",slide:{raw:`
<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting
</div>

<div class="absolute top-10">
  <h2>\u4E94\u5341\u97F3 (Goj\u016Bon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8 mt-8">
  <div class="flex flex-col justify-center">

\`\`\`ts {all|8,11,15|2,6|3,5,9|4,7,10,12-14,16}
$array = [
  '\u3042\u307E\u30AC\u30DF', // Hiragana
  '\u30A6\u30A3\u30FC\u30F3', // Katagana
  '\u837B\u91CE', // Kanji
  '\u30DE\u30FC\u30C6\u30A3\u30F3',
  '\u3046\u3044\u30FC\u3093',
  '\u4E2D\u6751',
  '\xDClf', // Latin & Number
  '\u30EC\u30A2\u30FC\u30C9',
  '\u89D2\u4E2D',
  'OKEON',
  '\u4E95\u4E0A',
  '\u85E4\u5CA1',
  '\u4F50\u85E4',
  'SHIMA',
  '\u5CA9\u4E0B',
];
\`\`\`
  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>


<!--
Any title, term, sentence can start with the above three characters.
Latin and Numbers, Hiragana, Katagana and Kanji.
How do we sort them correctly?

Next slide >>>>>
-->`,title:"Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting",level:1,content:`<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting
</div>

<div class="absolute top-10">
  <h2>\u4E94\u5341\u97F3 (Goj\u016Bon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8 mt-8">
  <div class="flex flex-col justify-center">

\`\`\`ts {all|8,11,15|2,6|3,5,9|4,7,10,12-14,16}
$array = [
  '\u3042\u307E\u30AC\u30DF', // Hiragana
  '\u30A6\u30A3\u30FC\u30F3', // Katagana
  '\u837B\u91CE', // Kanji
  '\u30DE\u30FC\u30C6\u30A3\u30F3',
  '\u3046\u3044\u30FC\u3093',
  '\u4E2D\u6751',
  '\xDClf', // Latin & Number
  '\u30EC\u30A2\u30FC\u30C9',
  '\u89D2\u4E2D',
  'OKEON',
  '\u4E95\u4E0A',
  '\u85E4\u5CA1',
  '\u4F50\u85E4',
  'SHIMA',
  '\u5CA9\u4E0B',
];
\`\`\`
  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>`,frontmatter:{srcSequence:"./section-5.md"},note:`Any title, term, sentence can start with the above three characters.
Latin and Numbers, Hiragana, Katagana and Kanji.
How do we sort them correctly?

Next slide >>>>>`,index:41,start:114,end:160,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",raw:`
<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting
</div>

<div class="absolute top-10">
  <h2>\u4E94\u5341\u97F3 (Goj\u016Bon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8 mt-8">
  <div class="flex flex-col justify-center">

\`\`\`ts {all|8,11,15|2,6|3,5,9|4,7,10,12-14,16}
$array = [
  '\u3042\u307E\u30AC\u30DF', // Hiragana
  '\u30A6\u30A3\u30FC\u30F3', // Katagana
  '\u837B\u91CE', // Kanji
  '\u30DE\u30FC\u30C6\u30A3\u30F3',
  '\u3046\u3044\u30FC\u3093',
  '\u4E2D\u6751',
  '\xDClf', // Latin & Number
  '\u30EC\u30A2\u30FC\u30C9',
  '\u89D2\u4E2D',
  'OKEON',
  '\u4E95\u4E0A',
  '\u85E4\u5CA1',
  '\u4F50\u85E4',
  'SHIMA',
  '\u5CA9\u4E0B',
];
\`\`\`
  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>


<!--
Any title, term, sentence can start with the above three characters.
Latin and Numbers, Hiragana, Katagana and Kanji.
How do we sort them correctly?

Next slide >>>>>
-->`,title:"Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting",level:1,content:`<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting
</div>

<div class="absolute top-10">
  <h2>\u4E94\u5341\u97F3 (Goj\u016Bon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8 mt-8">
  <div class="flex flex-col justify-center">

\`\`\`ts {all|8,11,15|2,6|3,5,9|4,7,10,12-14,16}
$array = [
  '\u3042\u307E\u30AC\u30DF', // Hiragana
  '\u30A6\u30A3\u30FC\u30F3', // Katagana
  '\u837B\u91CE', // Kanji
  '\u30DE\u30FC\u30C6\u30A3\u30F3',
  '\u3046\u3044\u30FC\u3093',
  '\u4E2D\u6751',
  '\xDClf', // Latin & Number
  '\u30EC\u30A2\u30FC\u30C9',
  '\u89D2\u4E2D',
  'OKEON',
  '\u4E95\u4E0A',
  '\u85E4\u5CA1',
  '\u4F50\u85E4',
  'SHIMA',
  '\u5CA9\u4E0B',
];
\`\`\`
  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>`,frontmatter:{},note:`Any title, term, sentence can start with the above three characters.
Latin and Numbers, Hiragana, Katagana and Kanji.
How do we sort them correctly?

Next slide >>>>>`,index:4,start:114,end:160},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",notesHTML:`<p>Any title, term, sentence can start with the above three characters.
Latin and Numbers, Hiragana, Katagana and Kanji.
How do we sort them correctly?</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:Mb,meta:{srcSequence:"./section-5.md",slide:{raw:`
<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting
</div>

<div class="absolute top-10">
  <h2>\u4E94\u5341\u97F3 (Goj\u016Bon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-2 gap-8 mt-10">
  <div class="flex flex-col justify-end">

\`\`\`ts
$array = [
  '\u3042\u307E\u30AC\u30DF', // Hiragana
  '\u30A6\u30A3\u30FC\u30F3', // Katagana
  '\u837B\u91CE', // Kanji
  '\u30DE\u30FC\u30C6\u30A3\u30F3',
  '\u3046\u3044\u30FC\u3093',
  '\u4E2D\u6751',
  '\xDClf', // Latin & Number
  '\u30EC\u30A2\u30FC\u30C9',
  '\u89D2\u4E2D',
  'OKEON',
  '\u4E95\u4E0A',
  '\u85E4\u5CA1',
  '\u4F50\u85E4',
  'SHIMA',
  '\u5CA9\u4E0B',
];
\`\`\`
  </div>
  <div class="flex-1 ">

\`\`\`ts {all|4-6|7-8|9-11|12-18|all}
// Result
Array
(
    [0] => OKEON
    [1] => SHIMA
    [2] => \xDClf
    [3] => \u3042\u307E\u30AC\u30DF
    [4] => \u3046\u3044\u30FC\u3093
    [5] => \u30A6\u30A3\u30FC\u30F3
    [6] => \u30DE\u30FC\u30C6\u30A3\u30F3
    [7] => \u30EC\u30A2\u30FC\u30C9
    [8] => \u4E2D\u6751
    [9] => \u4E95\u4E0A
    [10] => \u4F50\u85E4
    [11] => \u5CA9\u4E0B
    [12] => \u837B\u91CE
    [13] => \u85E4\u5CA1
    [14] => \u89D2\u4E2D
)
\`\`\`
  </div>
</div>

<!--
The ideal order looks like this.
Starting with Symbols, Numbers, Alphabets like in English.

And than Hiragana, Katagana, the last part will be the Kanji.
Hiragana and Katagana is actually follow the order of the matrix starting from rows and than columns.

How about the Kanji?

1. \u8A18\u53F7
2. \u6570\u5B57
3. \u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\uFF08\u5168\u89D2\u542B\u3080\uFF09
4. \u3072\u3089\u304C\u306A
5. \u30AB\u30BF\u30AB\u30CA
6. \u6F22\u5B57

Next slide >>>>>
-->`,title:"Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting",level:1,content:`<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting
</div>

<div class="absolute top-10">
  <h2>\u4E94\u5341\u97F3 (Goj\u016Bon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-2 gap-8 mt-10">
  <div class="flex flex-col justify-end">

\`\`\`ts
$array = [
  '\u3042\u307E\u30AC\u30DF', // Hiragana
  '\u30A6\u30A3\u30FC\u30F3', // Katagana
  '\u837B\u91CE', // Kanji
  '\u30DE\u30FC\u30C6\u30A3\u30F3',
  '\u3046\u3044\u30FC\u3093',
  '\u4E2D\u6751',
  '\xDClf', // Latin & Number
  '\u30EC\u30A2\u30FC\u30C9',
  '\u89D2\u4E2D',
  'OKEON',
  '\u4E95\u4E0A',
  '\u85E4\u5CA1',
  '\u4F50\u85E4',
  'SHIMA',
  '\u5CA9\u4E0B',
];
\`\`\`
  </div>
  <div class="flex-1 ">

\`\`\`ts {all|4-6|7-8|9-11|12-18|all}
// Result
Array
(
    [0] => OKEON
    [1] => SHIMA
    [2] => \xDClf
    [3] => \u3042\u307E\u30AC\u30DF
    [4] => \u3046\u3044\u30FC\u3093
    [5] => \u30A6\u30A3\u30FC\u30F3
    [6] => \u30DE\u30FC\u30C6\u30A3\u30F3
    [7] => \u30EC\u30A2\u30FC\u30C9
    [8] => \u4E2D\u6751
    [9] => \u4E95\u4E0A
    [10] => \u4F50\u85E4
    [11] => \u5CA9\u4E0B
    [12] => \u837B\u91CE
    [13] => \u85E4\u5CA1
    [14] => \u89D2\u4E2D
)
\`\`\`
  </div>
</div>`,frontmatter:{srcSequence:"./section-5.md"},note:`The ideal order looks like this.
Starting with Symbols, Numbers, Alphabets like in English.

And than Hiragana, Katagana, the last part will be the Kanji.
Hiragana and Katagana is actually follow the order of the matrix starting from rows and than columns.

How about the Kanji?

1. \u8A18\u53F7
2. \u6570\u5B57
3. \u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\uFF08\u5168\u89D2\u542B\u3080\uFF09
4. \u3072\u3089\u304C\u306A
5. \u30AB\u30BF\u30AB\u30CA
6. \u6F22\u5B57

Next slide >>>>>`,index:42,start:161,end:238,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",raw:`
<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting
</div>

<div class="absolute top-10">
  <h2>\u4E94\u5341\u97F3 (Goj\u016Bon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-2 gap-8 mt-10">
  <div class="flex flex-col justify-end">

\`\`\`ts
$array = [
  '\u3042\u307E\u30AC\u30DF', // Hiragana
  '\u30A6\u30A3\u30FC\u30F3', // Katagana
  '\u837B\u91CE', // Kanji
  '\u30DE\u30FC\u30C6\u30A3\u30F3',
  '\u3046\u3044\u30FC\u3093',
  '\u4E2D\u6751',
  '\xDClf', // Latin & Number
  '\u30EC\u30A2\u30FC\u30C9',
  '\u89D2\u4E2D',
  'OKEON',
  '\u4E95\u4E0A',
  '\u85E4\u5CA1',
  '\u4F50\u85E4',
  'SHIMA',
  '\u5CA9\u4E0B',
];
\`\`\`
  </div>
  <div class="flex-1 ">

\`\`\`ts {all|4-6|7-8|9-11|12-18|all}
// Result
Array
(
    [0] => OKEON
    [1] => SHIMA
    [2] => \xDClf
    [3] => \u3042\u307E\u30AC\u30DF
    [4] => \u3046\u3044\u30FC\u3093
    [5] => \u30A6\u30A3\u30FC\u30F3
    [6] => \u30DE\u30FC\u30C6\u30A3\u30F3
    [7] => \u30EC\u30A2\u30FC\u30C9
    [8] => \u4E2D\u6751
    [9] => \u4E95\u4E0A
    [10] => \u4F50\u85E4
    [11] => \u5CA9\u4E0B
    [12] => \u837B\u91CE
    [13] => \u85E4\u5CA1
    [14] => \u89D2\u4E2D
)
\`\`\`
  </div>
</div>

<!--
The ideal order looks like this.
Starting with Symbols, Numbers, Alphabets like in English.

And than Hiragana, Katagana, the last part will be the Kanji.
Hiragana and Katagana is actually follow the order of the matrix starting from rows and than columns.

How about the Kanji?

1. \u8A18\u53F7
2. \u6570\u5B57
3. \u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\uFF08\u5168\u89D2\u542B\u3080\uFF09
4. \u3072\u3089\u304C\u306A
5. \u30AB\u30BF\u30AB\u30CA
6. \u6F22\u5B57

Next slide >>>>>
-->`,title:"Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting",level:1,content:`<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting
</div>

<div class="absolute top-10">
  <h2>\u4E94\u5341\u97F3 (Goj\u016Bon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-2 gap-8 mt-10">
  <div class="flex flex-col justify-end">

\`\`\`ts
$array = [
  '\u3042\u307E\u30AC\u30DF', // Hiragana
  '\u30A6\u30A3\u30FC\u30F3', // Katagana
  '\u837B\u91CE', // Kanji
  '\u30DE\u30FC\u30C6\u30A3\u30F3',
  '\u3046\u3044\u30FC\u3093',
  '\u4E2D\u6751',
  '\xDClf', // Latin & Number
  '\u30EC\u30A2\u30FC\u30C9',
  '\u89D2\u4E2D',
  'OKEON',
  '\u4E95\u4E0A',
  '\u85E4\u5CA1',
  '\u4F50\u85E4',
  'SHIMA',
  '\u5CA9\u4E0B',
];
\`\`\`
  </div>
  <div class="flex-1 ">

\`\`\`ts {all|4-6|7-8|9-11|12-18|all}
// Result
Array
(
    [0] => OKEON
    [1] => SHIMA
    [2] => \xDClf
    [3] => \u3042\u307E\u30AC\u30DF
    [4] => \u3046\u3044\u30FC\u3093
    [5] => \u30A6\u30A3\u30FC\u30F3
    [6] => \u30DE\u30FC\u30C6\u30A3\u30F3
    [7] => \u30EC\u30A2\u30FC\u30C9
    [8] => \u4E2D\u6751
    [9] => \u4E95\u4E0A
    [10] => \u4F50\u85E4
    [11] => \u5CA9\u4E0B
    [12] => \u837B\u91CE
    [13] => \u85E4\u5CA1
    [14] => \u89D2\u4E2D
)
\`\`\`
  </div>
</div>`,frontmatter:{},note:`The ideal order looks like this.
Starting with Symbols, Numbers, Alphabets like in English.

And than Hiragana, Katagana, the last part will be the Kanji.
Hiragana and Katagana is actually follow the order of the matrix starting from rows and than columns.

How about the Kanji?

1. \u8A18\u53F7
2. \u6570\u5B57
3. \u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\uFF08\u5168\u89D2\u542B\u3080\uFF09
4. \u3072\u3089\u304C\u306A
5. \u30AB\u30BF\u30AB\u30CA
6. \u6F22\u5B57

Next slide >>>>>`,index:5,start:161,end:238},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",notesHTML:`<p>The ideal order looks like this.
Starting with Symbols, Numbers, Alphabets like in English.</p>
<p>And than Hiragana, Katagana, the last part will be the Kanji.
Hiragana and Katagana is actually follow the order of the matrix starting from rows and than columns.</p>
<p>How about the Kanji?</p>
<ol>
<li>\u8A18\u53F7</li>
<li>\u6570\u5B57</li>
<li>\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\uFF08\u5168\u89D2\u542B\u3080\uFF09</li>
<li>\u3072\u3089\u304C\u306A</li>
<li>\u30AB\u30BF\u30AB\u30CA</li>
<li>\u6F22\u5B57</li>
</ol>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:Wb,meta:{srcSequence:"./section-5.md",slide:{raw:`
<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting
</div>

<div class="absolute top-10">
  <h2>\u4E94\u5341\u97F3 (Goj\u016Bon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8">
  <div class="flex flex-col justify-center">
    
\`\`\`ts {1-3|5-7|5,6,8}
// UTF-8
["\u4E2D\u6751", "\u4E95\u4E0A", "\u4F50\u85E4", "\u5CA9\u4E0B", "\u837B\u91CE", "\u85E4\u5CA1", "\u89D2\u4E2D"]
[U+4E2D, U+4E95, U+4F50, U+5CA9, U+837B, U+85E4, U+89D2]

// localeCompare()
["\u4E95\u4E0A",  "\u837B\u91CE",    "\u89D2\u4E2D",    "\u5CA9\u4E0B",      "\u4F50\u85E4",    "\u4E2D\u6751",    "\u85E4\u5CA1"]
[\u3044(1-2), \u304A\u304E(1-5), \u304B\u304F(2-1), \u3044\u308F(1-2),   \u3055(3-1), \u306A\u304B(5-1), \u3075\u3058(6-3)]
[\u3044(1-2), \u304A\u304E(1-5), \u304B\u304F(2-1), \u304C\u3093(2-1.1), \u3055(3-1), \u306A\u304B(5-1), \u3075\u3058(6-3)]
\`\`\`

  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>



<!-- 
Use sort() function directly, it is sorting by the index number the character is in the Unicode table. How ever it doesn't help to find the character in the Japanese speaker's mind.

With localeCompare() in JS.
The Kanji sorting started with the pronouciation of the first character and then the next character if first character is the same.
If I write down the number of its row and number of the character, you can see the it is in the incremental order.
But, why is there a 1-2 in the middle?

It is because the Kanji could have more than one pronounciation.
Let's hold this thought and jumps to Chinese for now.

Next slide >>>>>

\u65E5\u672C\u6F22\u5B57\u7684\u97F3\u8B80\u6700\u70BA\u660E\u986F\uFF0C\u65E5\u672C\u6F22\u5B57\u7684\u8B80\u6CD5\u4E00\u822C\u6709\u4E8C\u500B\u4EE5\u4E0A\uFF0C\u662F\u56E0\u4E0D\u540C\u6642\u671F\u3001\u4E0D\u540C\u5730\u65B9\u50B3\u5165\u7684\u7D50\u679C\u3002 \u5728\u666E\u901A\u8A71\u4E2D\u4EA6\u9593\u6709\u53D6\u81EA\u904A\u7267\u6C11\u65CF\u7B49\u5176\u4ED6\u6C11\u65CF\u8A9E\u8A00\u3001\u68B5\u8A9E\u3001\u5176\u4ED6\u6F22\u8A9E\u8A9E\u8A00\u6216\u65B9\u8A00\u7684\u767C\u97F3\u5C6C\u65BC\u6B64\u985E\u3002

-->
`,title:"Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting",level:1,content:`<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting
</div>

<div class="absolute top-10">
  <h2>\u4E94\u5341\u97F3 (Goj\u016Bon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8">
  <div class="flex flex-col justify-center">
    
\`\`\`ts {1-3|5-7|5,6,8}
// UTF-8
["\u4E2D\u6751", "\u4E95\u4E0A", "\u4F50\u85E4", "\u5CA9\u4E0B", "\u837B\u91CE", "\u85E4\u5CA1", "\u89D2\u4E2D"]
[U+4E2D, U+4E95, U+4F50, U+5CA9, U+837B, U+85E4, U+89D2]

// localeCompare()
["\u4E95\u4E0A",  "\u837B\u91CE",    "\u89D2\u4E2D",    "\u5CA9\u4E0B",      "\u4F50\u85E4",    "\u4E2D\u6751",    "\u85E4\u5CA1"]
[\u3044(1-2), \u304A\u304E(1-5), \u304B\u304F(2-1), \u3044\u308F(1-2),   \u3055(3-1), \u306A\u304B(5-1), \u3075\u3058(6-3)]
[\u3044(1-2), \u304A\u304E(1-5), \u304B\u304F(2-1), \u304C\u3093(2-1.1), \u3055(3-1), \u306A\u304B(5-1), \u3075\u3058(6-3)]
\`\`\`

  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>`,frontmatter:{srcSequence:"./section-5.md"},note:`Use sort() function directly, it is sorting by the index number the character is in the Unicode table. How ever it doesn't help to find the character in the Japanese speaker's mind.

With localeCompare() in JS.
The Kanji sorting started with the pronouciation of the first character and then the next character if first character is the same.
If I write down the number of its row and number of the character, you can see the it is in the incremental order.
But, why is there a 1-2 in the middle?

It is because the Kanji could have more than one pronounciation.
Let's hold this thought and jumps to Chinese for now.

Next slide >>>>>

\u65E5\u672C\u6F22\u5B57\u7684\u97F3\u8B80\u6700\u70BA\u660E\u986F\uFF0C\u65E5\u672C\u6F22\u5B57\u7684\u8B80\u6CD5\u4E00\u822C\u6709\u4E8C\u500B\u4EE5\u4E0A\uFF0C\u662F\u56E0\u4E0D\u540C\u6642\u671F\u3001\u4E0D\u540C\u5730\u65B9\u50B3\u5165\u7684\u7D50\u679C\u3002 \u5728\u666E\u901A\u8A71\u4E2D\u4EA6\u9593\u6709\u53D6\u81EA\u904A\u7267\u6C11\u65CF\u7B49\u5176\u4ED6\u6C11\u65CF\u8A9E\u8A00\u3001\u68B5\u8A9E\u3001\u5176\u4ED6\u6F22\u8A9E\u8A9E\u8A00\u6216\u65B9\u8A00\u7684\u767C\u97F3\u5C6C\u65BC\u6B64\u985E\u3002`,index:43,start:239,end:288,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",raw:`
<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting
</div>

<div class="absolute top-10">
  <h2>\u4E94\u5341\u97F3 (Goj\u016Bon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8">
  <div class="flex flex-col justify-center">
    
\`\`\`ts {1-3|5-7|5,6,8}
// UTF-8
["\u4E2D\u6751", "\u4E95\u4E0A", "\u4F50\u85E4", "\u5CA9\u4E0B", "\u837B\u91CE", "\u85E4\u5CA1", "\u89D2\u4E2D"]
[U+4E2D, U+4E95, U+4F50, U+5CA9, U+837B, U+85E4, U+89D2]

// localeCompare()
["\u4E95\u4E0A",  "\u837B\u91CE",    "\u89D2\u4E2D",    "\u5CA9\u4E0B",      "\u4F50\u85E4",    "\u4E2D\u6751",    "\u85E4\u5CA1"]
[\u3044(1-2), \u304A\u304E(1-5), \u304B\u304F(2-1), \u3044\u308F(1-2),   \u3055(3-1), \u306A\u304B(5-1), \u3075\u3058(6-3)]
[\u3044(1-2), \u304A\u304E(1-5), \u304B\u304F(2-1), \u304C\u3093(2-1.1), \u3055(3-1), \u306A\u304B(5-1), \u3075\u3058(6-3)]
\`\`\`

  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>



<!-- 
Use sort() function directly, it is sorting by the index number the character is in the Unicode table. How ever it doesn't help to find the character in the Japanese speaker's mind.

With localeCompare() in JS.
The Kanji sorting started with the pronouciation of the first character and then the next character if first character is the same.
If I write down the number of its row and number of the character, you can see the it is in the incremental order.
But, why is there a 1-2 in the middle?

It is because the Kanji could have more than one pronounciation.
Let's hold this thought and jumps to Chinese for now.

Next slide >>>>>

\u65E5\u672C\u6F22\u5B57\u7684\u97F3\u8B80\u6700\u70BA\u660E\u986F\uFF0C\u65E5\u672C\u6F22\u5B57\u7684\u8B80\u6CD5\u4E00\u822C\u6709\u4E8C\u500B\u4EE5\u4E0A\uFF0C\u662F\u56E0\u4E0D\u540C\u6642\u671F\u3001\u4E0D\u540C\u5730\u65B9\u50B3\u5165\u7684\u7D50\u679C\u3002 \u5728\u666E\u901A\u8A71\u4E2D\u4EA6\u9593\u6709\u53D6\u81EA\u904A\u7267\u6C11\u65CF\u7B49\u5176\u4ED6\u6C11\u65CF\u8A9E\u8A00\u3001\u68B5\u8A9E\u3001\u5176\u4ED6\u6F22\u8A9E\u8A9E\u8A00\u6216\u65B9\u8A00\u7684\u767C\u97F3\u5C6C\u65BC\u6B64\u985E\u3002

-->
`,title:"Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting",level:1,content:`<div class="hidden">
# Sorting - \u4E94\u5341\u97F3 (Goj\u016Bon) Sorting
</div>

<div class="absolute top-10">
  <h2>\u4E94\u5341\u97F3 (Goj\u016Bon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8">
  <div class="flex flex-col justify-center">
    
\`\`\`ts {1-3|5-7|5,6,8}
// UTF-8
["\u4E2D\u6751", "\u4E95\u4E0A", "\u4F50\u85E4", "\u5CA9\u4E0B", "\u837B\u91CE", "\u85E4\u5CA1", "\u89D2\u4E2D"]
[U+4E2D, U+4E95, U+4F50, U+5CA9, U+837B, U+85E4, U+89D2]

// localeCompare()
["\u4E95\u4E0A",  "\u837B\u91CE",    "\u89D2\u4E2D",    "\u5CA9\u4E0B",      "\u4F50\u85E4",    "\u4E2D\u6751",    "\u85E4\u5CA1"]
[\u3044(1-2), \u304A\u304E(1-5), \u304B\u304F(2-1), \u3044\u308F(1-2),   \u3055(3-1), \u306A\u304B(5-1), \u3075\u3058(6-3)]
[\u3044(1-2), \u304A\u304E(1-5), \u304B\u304F(2-1), \u304C\u3093(2-1.1), \u3055(3-1), \u306A\u304B(5-1), \u3075\u3058(6-3)]
\`\`\`

  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>`,frontmatter:{},note:`Use sort() function directly, it is sorting by the index number the character is in the Unicode table. How ever it doesn't help to find the character in the Japanese speaker's mind.

With localeCompare() in JS.
The Kanji sorting started with the pronouciation of the first character and then the next character if first character is the same.
If I write down the number of its row and number of the character, you can see the it is in the incremental order.
But, why is there a 1-2 in the middle?

It is because the Kanji could have more than one pronounciation.
Let's hold this thought and jumps to Chinese for now.

Next slide >>>>>

\u65E5\u672C\u6F22\u5B57\u7684\u97F3\u8B80\u6700\u70BA\u660E\u986F\uFF0C\u65E5\u672C\u6F22\u5B57\u7684\u8B80\u6CD5\u4E00\u822C\u6709\u4E8C\u500B\u4EE5\u4E0A\uFF0C\u662F\u56E0\u4E0D\u540C\u6642\u671F\u3001\u4E0D\u540C\u5730\u65B9\u50B3\u5165\u7684\u7D50\u679C\u3002 \u5728\u666E\u901A\u8A71\u4E2D\u4EA6\u9593\u6709\u53D6\u81EA\u904A\u7267\u6C11\u65CF\u7B49\u5176\u4ED6\u6C11\u65CF\u8A9E\u8A00\u3001\u68B5\u8A9E\u3001\u5176\u4ED6\u6F22\u8A9E\u8A9E\u8A00\u6216\u65B9\u8A00\u7684\u767C\u97F3\u5C6C\u65BC\u6B64\u985E\u3002`,index:6,start:239,end:288},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",notesHTML:`<p>Use sort() function directly, it is sorting by the index number the character is in the Unicode table. How ever it doesn't help to find the character in the Japanese speaker's mind.</p>
<p>With localeCompare() in JS.
The Kanji sorting started with the pronouciation of the first character and then the next character if first character is the same.
If I write down the number of its row and number of the character, you can see the it is in the incremental order.
But, why is there a 1-2 in the middle?</p>
<p>It is because the Kanji could have more than one pronounciation.
Let's hold this thought and jumps to Chinese for now.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
<p>\u65E5\u672C\u6F22\u5B57\u7684\u97F3\u8B80\u6700\u70BA\u660E\u986F\uFF0C\u65E5\u672C\u6F22\u5B57\u7684\u8B80\u6CD5\u4E00\u822C\u6709\u4E8C\u500B\u4EE5\u4E0A\uFF0C\u662F\u56E0\u4E0D\u540C\u6642\u671F\u3001\u4E0D\u540C\u5730\u65B9\u50B3\u5165\u7684\u7D50\u679C\u3002 \u5728\u666E\u901A\u8A71\u4E2D\u4EA6\u9593\u6709\u53D6\u81EA\u904A\u7267\u6C11\u65CF\u7B49\u5176\u4ED6\u6C11\u65CF\u8A9E\u8A00\u3001\u68B5\u8A9E\u3001\u5176\u4ED6\u6F22\u8A9E\u8A9E\u8A00\u6216\u65B9\u8A00\u7684\u767C\u97F3\u5C6C\u65BC\u6B64\u985E\u3002</p>
`,id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:Vb,meta:{srcSequence:"./section-5.md",slide:{raw:`
<div class="hidden">
# Sorting - Chinese characters
</div>

<div class="grid grid-rows-2">
  <div class="">
    <h1>Chinese characters</h1>
    <h3>4 attributes</h3>
    <img src="/images/2022-09-01-22-41-43.png" class="mt-6" />
  </div>
  <div class="">
    <div class="grid grid-cols-2 text-2xl">
      <ul>
        <li>Radical Strokes</li>
        <li>Total Strokes</li>
      </ul>
      <ul>
        <li>Bopomofo (Phonetic characters)</li>
        <li>Pinyin</li>
      </ul>
    </div>
  </div>
</div>

<!--
I call Czech Republica "\u6377\u514B" in Chinese which consists of two characters, the first character \u6377, has all the attributes that could be used for sorting.
That's correct, more than one way.

We can count its total strokes, radical stokes, spell it with phonetical elements that only uses in Taiwan, or Pinyin with roman characters which is the main input method in China.

Usually we order with one of the attributes and sometimes let the user change the sorting method, for instance the book search system in a library.
When there is symbol or roman alphabets, they also come first like in Japanese.

Next slide >>>>>


Bopomofo is the predominant phonetic system in teaching, reading and writing in elementary school in Taiwan. 

-->
`,title:"Sorting - Chinese characters",level:1,content:`<div class="hidden">
# Sorting - Chinese characters
</div>

<div class="grid grid-rows-2">
  <div class="">
    <h1>Chinese characters</h1>
    <h3>4 attributes</h3>
    <img src="/images/2022-09-01-22-41-43.png" class="mt-6" />
  </div>
  <div class="">
    <div class="grid grid-cols-2 text-2xl">
      <ul>
        <li>Radical Strokes</li>
        <li>Total Strokes</li>
      </ul>
      <ul>
        <li>Bopomofo (Phonetic characters)</li>
        <li>Pinyin</li>
      </ul>
    </div>
  </div>
</div>`,frontmatter:{srcSequence:"./section-5.md"},note:`I call Czech Republica "\u6377\u514B" in Chinese which consists of two characters, the first character \u6377, has all the attributes that could be used for sorting.
That's correct, more than one way.

We can count its total strokes, radical stokes, spell it with phonetical elements that only uses in Taiwan, or Pinyin with roman characters which is the main input method in China.

Usually we order with one of the attributes and sometimes let the user change the sorting method, for instance the book search system in a library.
When there is symbol or roman alphabets, they also come first like in Japanese.

Next slide >>>>>


Bopomofo is the predominant phonetic system in teaching, reading and writing in elementary school in Taiwan.`,index:44,start:289,end:330,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",raw:`
<div class="hidden">
# Sorting - Chinese characters
</div>

<div class="grid grid-rows-2">
  <div class="">
    <h1>Chinese characters</h1>
    <h3>4 attributes</h3>
    <img src="/images/2022-09-01-22-41-43.png" class="mt-6" />
  </div>
  <div class="">
    <div class="grid grid-cols-2 text-2xl">
      <ul>
        <li>Radical Strokes</li>
        <li>Total Strokes</li>
      </ul>
      <ul>
        <li>Bopomofo (Phonetic characters)</li>
        <li>Pinyin</li>
      </ul>
    </div>
  </div>
</div>

<!--
I call Czech Republica "\u6377\u514B" in Chinese which consists of two characters, the first character \u6377, has all the attributes that could be used for sorting.
That's correct, more than one way.

We can count its total strokes, radical stokes, spell it with phonetical elements that only uses in Taiwan, or Pinyin with roman characters which is the main input method in China.

Usually we order with one of the attributes and sometimes let the user change the sorting method, for instance the book search system in a library.
When there is symbol or roman alphabets, they also come first like in Japanese.

Next slide >>>>>


Bopomofo is the predominant phonetic system in teaching, reading and writing in elementary school in Taiwan. 

-->
`,title:"Sorting - Chinese characters",level:1,content:`<div class="hidden">
# Sorting - Chinese characters
</div>

<div class="grid grid-rows-2">
  <div class="">
    <h1>Chinese characters</h1>
    <h3>4 attributes</h3>
    <img src="/images/2022-09-01-22-41-43.png" class="mt-6" />
  </div>
  <div class="">
    <div class="grid grid-cols-2 text-2xl">
      <ul>
        <li>Radical Strokes</li>
        <li>Total Strokes</li>
      </ul>
      <ul>
        <li>Bopomofo (Phonetic characters)</li>
        <li>Pinyin</li>
      </ul>
    </div>
  </div>
</div>`,frontmatter:{},note:`I call Czech Republica "\u6377\u514B" in Chinese which consists of two characters, the first character \u6377, has all the attributes that could be used for sorting.
That's correct, more than one way.

We can count its total strokes, radical stokes, spell it with phonetical elements that only uses in Taiwan, or Pinyin with roman characters which is the main input method in China.

Usually we order with one of the attributes and sometimes let the user change the sorting method, for instance the book search system in a library.
When there is symbol or roman alphabets, they also come first like in Japanese.

Next slide >>>>>


Bopomofo is the predominant phonetic system in teaching, reading and writing in elementary school in Taiwan.`,index:7,start:289,end:330},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",notesHTML:`<p>I call Czech Republica &quot;\u6377\u514B&quot; in Chinese which consists of two characters, the first character \u6377, has all the attributes that could be used for sorting.
That's correct, more than one way.</p>
<p>We can count its total strokes, radical stokes, spell it with phonetical elements that only uses in Taiwan, or Pinyin with roman characters which is the main input method in China.</p>
<p>Usually we order with one of the attributes and sometimes let the user change the sorting method, for instance the book search system in a library.
When there is symbol or roman alphabets, they also come first like in Japanese.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
<p>Bopomofo is the predominant phonetic system in teaching, reading and writing in elementary school in Taiwan.</p>
`,id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:ex,meta:{srcSequence:"./section-5.md",slide:{raw:`
<div class="hidden">
# Sorting - Chinese pronunciation
</div>

# Chinese
Multiple pronunciation

<div class="grid grid-cols-2">
    <div class="grid-1">
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-36-40.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Music</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-09.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Happy, Happiness, love to</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-43.png" alt="" class="h-full w-auto" />
            <span class="pl-4">To appreciate</span>
        </div>
    </div>
    <div class="grid-2 flex justify-center">
        <img src="/images/le-chinese-character.png" class="h-90" />
    </div>
</div>

<!--
Like in Japanese, it is also common that a traditional Chinese can have mutiple pronounciation.

This is the character means stands for \u6A02 Music, or \u6A02 for Happy or Happiness or \u6A02 for verb "To appreciate".

Next slide >>>>>
-->
`,title:"Sorting - Chinese pronunciation",level:1,content:`<div class="hidden">
# Sorting - Chinese pronunciation
</div>

# Chinese
Multiple pronunciation

<div class="grid grid-cols-2">
    <div class="grid-1">
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-36-40.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Music</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-09.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Happy, Happiness, love to</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-43.png" alt="" class="h-full w-auto" />
            <span class="pl-4">To appreciate</span>
        </div>
    </div>
    <div class="grid-2 flex justify-center">
        <img src="/images/le-chinese-character.png" class="h-90" />
    </div>
</div>`,frontmatter:{srcSequence:"./section-5.md"},note:`Like in Japanese, it is also common that a traditional Chinese can have mutiple pronounciation.

This is the character means stands for \u6A02 Music, or \u6A02 for Happy or Happiness or \u6A02 for verb "To appreciate".

Next slide >>>>>`,index:45,start:331,end:367,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",raw:`
<div class="hidden">
# Sorting - Chinese pronunciation
</div>

# Chinese
Multiple pronunciation

<div class="grid grid-cols-2">
    <div class="grid-1">
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-36-40.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Music</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-09.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Happy, Happiness, love to</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-43.png" alt="" class="h-full w-auto" />
            <span class="pl-4">To appreciate</span>
        </div>
    </div>
    <div class="grid-2 flex justify-center">
        <img src="/images/le-chinese-character.png" class="h-90" />
    </div>
</div>

<!--
Like in Japanese, it is also common that a traditional Chinese can have mutiple pronounciation.

This is the character means stands for \u6A02 Music, or \u6A02 for Happy or Happiness or \u6A02 for verb "To appreciate".

Next slide >>>>>
-->
`,title:"Sorting - Chinese pronunciation",level:1,content:`<div class="hidden">
# Sorting - Chinese pronunciation
</div>

# Chinese
Multiple pronunciation

<div class="grid grid-cols-2">
    <div class="grid-1">
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-36-40.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Music</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-09.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Happy, Happiness, love to</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-43.png" alt="" class="h-full w-auto" />
            <span class="pl-4">To appreciate</span>
        </div>
    </div>
    <div class="grid-2 flex justify-center">
        <img src="/images/le-chinese-character.png" class="h-90" />
    </div>
</div>`,frontmatter:{},note:`Like in Japanese, it is also common that a traditional Chinese can have mutiple pronounciation.

This is the character means stands for \u6A02 Music, or \u6A02 for Happy or Happiness or \u6A02 for verb "To appreciate".

Next slide >>>>>`,index:8,start:331,end:367},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",notesHTML:`<p>Like in Japanese, it is also common that a traditional Chinese can have mutiple pronounciation.</p>
<p>This is the character means stands for \u6A02 Music, or \u6A02 for Happy or Happiness or \u6A02 for verb &quot;To appreciate&quot;.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:cx,meta:{layout:"image-right",image:"/images/raku-japanese-character.png",srcSequence:"./section-5.md",slide:{raw:`---
layout: image-right
image: /images/raku-japanese-character.png
---

<div class="hidden">
# Sorting - Japanese pronunciation
</div>

# Japanese Kanji
Multiple pronunciation

![](/images/raku-japanese-pronounce.png)

1. \u2776 Music
2. <span class="text-gray-500">\u2776 To play (music)</span>
3. \u2777 Happy
4. \u2778 To appreciate

<!--
Japanese has the same character with their own variation.
It has more pronounciation due to different cultural context.

Four of them or inherited from ancient Chinese in various eras, and another four represent things in the original Japanese language 

Next slides >>>>>
-->
`,title:"Sorting - Japanese pronunciation",level:1,content:`<div class="hidden">
# Sorting - Japanese pronunciation
</div>

# Japanese Kanji
Multiple pronunciation

![](/images/raku-japanese-pronounce.png)

1. \u2776 Music
2. <span class="text-gray-500">\u2776 To play (music)</span>
3. \u2777 Happy
4. \u2778 To appreciate`,frontmatter:{layout:"image-right",image:"/images/raku-japanese-character.png",srcSequence:"./section-5.md"},note:`Japanese has the same character with their own variation.
It has more pronounciation due to different cultural context.

Four of them or inherited from ancient Chinese in various eras, and another four represent things in the original Japanese language 

Next slides >>>>>`,index:46,start:367,end:395,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",raw:`---
layout: image-right
image: /images/raku-japanese-character.png
---

<div class="hidden">
# Sorting - Japanese pronunciation
</div>

# Japanese Kanji
Multiple pronunciation

![](/images/raku-japanese-pronounce.png)

1. \u2776 Music
2. <span class="text-gray-500">\u2776 To play (music)</span>
3. \u2777 Happy
4. \u2778 To appreciate

<!--
Japanese has the same character with their own variation.
It has more pronounciation due to different cultural context.

Four of them or inherited from ancient Chinese in various eras, and another four represent things in the original Japanese language 

Next slides >>>>>
-->
`,title:"Sorting - Japanese pronunciation",level:1,content:`<div class="hidden">
# Sorting - Japanese pronunciation
</div>

# Japanese Kanji
Multiple pronunciation

![](/images/raku-japanese-pronounce.png)

1. \u2776 Music
2. <span class="text-gray-500">\u2776 To play (music)</span>
3. \u2777 Happy
4. \u2778 To appreciate`,frontmatter:{layout:"image-right",image:"/images/raku-japanese-character.png"},note:`Japanese has the same character with their own variation.
It has more pronounciation due to different cultural context.

Four of them or inherited from ancient Chinese in various eras, and another four represent things in the original Japanese language 

Next slides >>>>>`,index:9,start:367,end:395},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",notesHTML:`<p>Japanese has the same character with their own variation.
It has more pronounciation due to different cultural context.</p>
<p>Four of them or inherited from ancient Chinese in various eras, and another four represent things in the original Japanese language</p>
<p>Next slides &gt;&gt;&gt;&gt;&gt;</p>
`,id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:fx,meta:{layout:"fact",srcSequence:"./section-5.md",slide:{raw:`---
layout: fact
---

# 580
Same Chinese character different pronounciation

580 from 5266 common used Chinese characters (traditional).

<div class="text-xs mt-20 text-gray-500">

There were 1263 characters have more than one pronounciation.<br />
In 2012, 683 was reviewed and combined into single pronounciation.

1. \u6559\u80B2\u90E8\u570B\u8A9E\u4E00\u5B57\u591A\u97F3\u5BE9\u8A02\u8868 2012 [PDF](https://language.moe.gov.tw/files/people_files/%E5%88%9D%E7%A8%BF.pdf)
</div>

<!--
So how many characters has more than one pronounciation?
In the official definition from the Ministry of Education of Taiwan, there are 580 out of 5,000 common used traditional Chinese characters.
It was over 1200 before the officials reviewed and merged a lot of them in 2012.

Next slide >>>>>
-->`,title:"580",level:1,content:`# 580
Same Chinese character different pronounciation

580 from 5266 common used Chinese characters (traditional).

<div class="text-xs mt-20 text-gray-500">

There were 1263 characters have more than one pronounciation.<br />
In 2012, 683 was reviewed and combined into single pronounciation.

1. \u6559\u80B2\u90E8\u570B\u8A9E\u4E00\u5B57\u591A\u97F3\u5BE9\u8A02\u8868 2012 [PDF](https://language.moe.gov.tw/files/people_files/%E5%88%9D%E7%A8%BF.pdf)
</div>`,frontmatter:{layout:"fact",srcSequence:"./section-5.md"},note:`So how many characters has more than one pronounciation?
In the official definition from the Ministry of Education of Taiwan, there are 580 out of 5,000 common used traditional Chinese characters.
It was over 1200 before the officials reviewed and merged a lot of them in 2012.

Next slide >>>>>`,index:47,start:395,end:419,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",raw:`---
layout: fact
---

# 580
Same Chinese character different pronounciation

580 from 5266 common used Chinese characters (traditional).

<div class="text-xs mt-20 text-gray-500">

There were 1263 characters have more than one pronounciation.<br />
In 2012, 683 was reviewed and combined into single pronounciation.

1. \u6559\u80B2\u90E8\u570B\u8A9E\u4E00\u5B57\u591A\u97F3\u5BE9\u8A02\u8868 2012 [PDF](https://language.moe.gov.tw/files/people_files/%E5%88%9D%E7%A8%BF.pdf)
</div>

<!--
So how many characters has more than one pronounciation?
In the official definition from the Ministry of Education of Taiwan, there are 580 out of 5,000 common used traditional Chinese characters.
It was over 1200 before the officials reviewed and merged a lot of them in 2012.

Next slide >>>>>
-->`,title:"580",level:1,content:`# 580
Same Chinese character different pronounciation

580 from 5266 common used Chinese characters (traditional).

<div class="text-xs mt-20 text-gray-500">

There were 1263 characters have more than one pronounciation.<br />
In 2012, 683 was reviewed and combined into single pronounciation.

1. \u6559\u80B2\u90E8\u570B\u8A9E\u4E00\u5B57\u591A\u97F3\u5BE9\u8A02\u8868 2012 [PDF](https://language.moe.gov.tw/files/people_files/%E5%88%9D%E7%A8%BF.pdf)
</div>`,frontmatter:{layout:"fact"},note:`So how many characters has more than one pronounciation?
In the official definition from the Ministry of Education of Taiwan, there are 580 out of 5,000 common used traditional Chinese characters.
It was over 1200 before the officials reviewed and merged a lot of them in 2012.

Next slide >>>>>`,index:10,start:395,end:419},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",notesHTML:`<p>So how many characters has more than one pronounciation?
In the official definition from the Ministry of Education of Taiwan, there are 580 out of 5,000 common used traditional Chinese characters.
It was over 1200 before the officials reviewed and merged a lot of them in 2012.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:_x,meta:{layout:"fact",srcSequence:"./section-5.md",slide:{raw:`---
layout: fact
---

# 600+
Same Japanese character different pronounciation

609 from 2136 common used Japanese kanji characters.

<div class="text-xs mt-20 text-gray-500">

1. \u6587\u79D1\u7701\u5E38\u7528\u6F22\u5B57\u8868 20101130\uFF1A [PDF](https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/pdf/joyokanjihyo_20101130.pdf)
1. \u5E38\u7528\u6F22\u5B57\u8868 - \u97F3\u8A13\u8868: [Website](http://jgrammar.life.coocan.jp/ja/data/onkun.htm)
1. Explaination about Kanji (EN): [Website](https://www.tofugu.com/japanese/onyomi-kunyomi/)
</div>

<!--
Japanese Kanji also has more than 600 out of 2,000 common characters which has more than one pronounciations.
-->`,title:"600+",level:1,content:`# 600+
Same Japanese character different pronounciation

609 from 2136 common used Japanese kanji characters.

<div class="text-xs mt-20 text-gray-500">

1. \u6587\u79D1\u7701\u5E38\u7528\u6F22\u5B57\u8868 20101130\uFF1A [PDF](https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/pdf/joyokanjihyo_20101130.pdf)
1. \u5E38\u7528\u6F22\u5B57\u8868 - \u97F3\u8A13\u8868: [Website](http://jgrammar.life.coocan.jp/ja/data/onkun.htm)
1. Explaination about Kanji (EN): [Website](https://www.tofugu.com/japanese/onyomi-kunyomi/)
</div>`,frontmatter:{layout:"fact",srcSequence:"./section-5.md"},note:"Japanese Kanji also has more than 600 out of 2,000 common characters which has more than one pronounciations.",index:48,start:419,end:438,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",raw:`---
layout: fact
---

# 600+
Same Japanese character different pronounciation

609 from 2136 common used Japanese kanji characters.

<div class="text-xs mt-20 text-gray-500">

1. \u6587\u79D1\u7701\u5E38\u7528\u6F22\u5B57\u8868 20101130\uFF1A [PDF](https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/pdf/joyokanjihyo_20101130.pdf)
1. \u5E38\u7528\u6F22\u5B57\u8868 - \u97F3\u8A13\u8868: [Website](http://jgrammar.life.coocan.jp/ja/data/onkun.htm)
1. Explaination about Kanji (EN): [Website](https://www.tofugu.com/japanese/onyomi-kunyomi/)
</div>

<!--
Japanese Kanji also has more than 600 out of 2,000 common characters which has more than one pronounciations.
-->`,title:"600+",level:1,content:`# 600+
Same Japanese character different pronounciation

609 from 2136 common used Japanese kanji characters.

<div class="text-xs mt-20 text-gray-500">

1. \u6587\u79D1\u7701\u5E38\u7528\u6F22\u5B57\u8868 20101130\uFF1A [PDF](https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/pdf/joyokanjihyo_20101130.pdf)
1. \u5E38\u7528\u6F22\u5B57\u8868 - \u97F3\u8A13\u8868: [Website](http://jgrammar.life.coocan.jp/ja/data/onkun.htm)
1. Explaination about Kanji (EN): [Website](https://www.tofugu.com/japanese/onyomi-kunyomi/)
</div>`,frontmatter:{layout:"fact"},note:"Japanese Kanji also has more than 600 out of 2,000 common characters which has more than one pronounciations.",index:11,start:419,end:438},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",notesHTML:`<p>Japanese Kanji also has more than 600 out of 2,000 common characters which has more than one pronounciations.</p>
`,id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:Ax,meta:{srcSequence:"./section-5.md",slide:{raw:`
# Sorting

Sort Latin character

\`\`\`ts
const items = ['r\xE9serv\xE9', 'Premier', 'Clich\xE9', 'communiqu\xE9', 'caf\xE9', 'Adieu'];
items.sort();
console.log(items);
// ["Adieu", "Clich\xE9", "Premier", "caf\xE9", "communiqu\xE9", "r\xE9serv\xE9"]

items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
console.log(items);
// ['Adieu', 'caf\xE9', 'Clich\xE9', 'communiqu\xE9', 'Premier', 'r\xE9serv\xE9']
\`\`\`

<!--
With localCompare() in JavaScript, we can specify a language code, it provides better sorting that taking care of the variation of characters.

Next slide >>>>>
-->`,title:"Sorting",level:1,content:`# Sorting

Sort Latin character

\`\`\`ts
const items = ['r\xE9serv\xE9', 'Premier', 'Clich\xE9', 'communiqu\xE9', 'caf\xE9', 'Adieu'];
items.sort();
console.log(items);
// ["Adieu", "Clich\xE9", "Premier", "caf\xE9", "communiqu\xE9", "r\xE9serv\xE9"]

items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
console.log(items);
// ['Adieu', 'caf\xE9', 'Clich\xE9', 'communiqu\xE9', 'Premier', 'r\xE9serv\xE9']
\`\`\``,frontmatter:{srcSequence:"./section-5.md"},note:`With localCompare() in JavaScript, we can specify a language code, it provides better sorting that taking care of the variation of characters.

Next slide >>>>>`,index:49,start:439,end:460,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",raw:`
# Sorting

Sort Latin character

\`\`\`ts
const items = ['r\xE9serv\xE9', 'Premier', 'Clich\xE9', 'communiqu\xE9', 'caf\xE9', 'Adieu'];
items.sort();
console.log(items);
// ["Adieu", "Clich\xE9", "Premier", "caf\xE9", "communiqu\xE9", "r\xE9serv\xE9"]

items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
console.log(items);
// ['Adieu', 'caf\xE9', 'Clich\xE9', 'communiqu\xE9', 'Premier', 'r\xE9serv\xE9']
\`\`\`

<!--
With localCompare() in JavaScript, we can specify a language code, it provides better sorting that taking care of the variation of characters.

Next slide >>>>>
-->`,title:"Sorting",level:1,content:`# Sorting

Sort Latin character

\`\`\`ts
const items = ['r\xE9serv\xE9', 'Premier', 'Clich\xE9', 'communiqu\xE9', 'caf\xE9', 'Adieu'];
items.sort();
console.log(items);
// ["Adieu", "Clich\xE9", "Premier", "caf\xE9", "communiqu\xE9", "r\xE9serv\xE9"]

items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
console.log(items);
// ['Adieu', 'caf\xE9', 'Clich\xE9', 'communiqu\xE9', 'Premier', 'r\xE9serv\xE9']
\`\`\``,frontmatter:{},note:`With localCompare() in JavaScript, we can specify a language code, it provides better sorting that taking care of the variation of characters.

Next slide >>>>>`,index:12,start:439,end:460},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",notesHTML:`<p>With localCompare() in JavaScript, we can specify a language code, it provides better sorting that taking care of the variation of characters.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:Sx,meta:{srcSequence:"./section-5.md",slide:{raw:`
# Sorting
Sort Ukrainian or Persian language \u{1F1FA}\u{1F1E6}

\`\`\`ts
const items = ['\u0410\u043B\u0431\u0430\u043D\u0456\u044F','\u0404\u0433\u0438\u043F\u0435\u0442','\u0406\u043D\u0434\u0456\u044F','\u041F\u0435\u0440\u0443'];
items.sort();
console.log(items);
// ['\u0404\u0433\u0438\u043F\u0435\u0442', '\u0406\u043D\u0434\u0456\u044F', '\u0410\u043B\u0431\u0430\u043D\u0456\u044F', '\u041F\u0435\u0440\u0443']

items.sort((a, b) => a.localeCompare(b, 'uk', { ignorePunctuation: true }));
console.log(items);
// ['\u0410\u043B\u0431\u0430\u043D\u0456\u044F', '\u0404\u0433\u0438\u043F\u0435\u0442', '\u0406\u043D\u0434\u0456\u044F', '\u041F\u0435\u0440\u0443']
\`\`\`
<hr />

\`\`\`ts
const items = ['\u06AF\u06CC\u0644\u0627\u0646', '\u0633\u0645\u0646\u0627\u0646', '\u0686\u0647\u0627\u0631 \u0645\u062D\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC', '\u0645\u0634\u0647\u062F', '\u0642\u0645'];
items.sort();
console.log(items);
// ['\u0633\u0645\u0646\u0627\u0646', '\u0642\u0645', '\u0645\u0634\u0647\u062F', "\u0686\u0647\u0627\u0631 \u0645\u062D\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC", '\u06AF\u06CC\u0644\u0627\u0646']

items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
console.log(items);
// ['\u0686\u0647\u0627\u0631 \u0645\u062D\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC", '\u0633\u0645\u0646\u0627\u0646', '\u0642\u0645', '\u06AF\u06CC\u0644\u0627\u0646', '\u0645\u0634\u0647\u062F"] 
\`\`\`

<!--
It also works well with Ukrain, or arabic or farsi languages.

Next slide >>>>>
-->
`,title:"Sorting",level:1,content:`# Sorting
Sort Ukrainian or Persian language \u{1F1FA}\u{1F1E6}

\`\`\`ts
const items = ['\u0410\u043B\u0431\u0430\u043D\u0456\u044F','\u0404\u0433\u0438\u043F\u0435\u0442','\u0406\u043D\u0434\u0456\u044F','\u041F\u0435\u0440\u0443'];
items.sort();
console.log(items);
// ['\u0404\u0433\u0438\u043F\u0435\u0442', '\u0406\u043D\u0434\u0456\u044F', '\u0410\u043B\u0431\u0430\u043D\u0456\u044F', '\u041F\u0435\u0440\u0443']

items.sort((a, b) => a.localeCompare(b, 'uk', { ignorePunctuation: true }));
console.log(items);
// ['\u0410\u043B\u0431\u0430\u043D\u0456\u044F', '\u0404\u0433\u0438\u043F\u0435\u0442', '\u0406\u043D\u0434\u0456\u044F', '\u041F\u0435\u0440\u0443']
\`\`\`
<hr />

\`\`\`ts
const items = ['\u06AF\u06CC\u0644\u0627\u0646', '\u0633\u0645\u0646\u0627\u0646', '\u0686\u0647\u0627\u0631 \u0645\u062D\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC', '\u0645\u0634\u0647\u062F', '\u0642\u0645'];
items.sort();
console.log(items);
// ['\u0633\u0645\u0646\u0627\u0646', '\u0642\u0645', '\u0645\u0634\u0647\u062F', "\u0686\u0647\u0627\u0631 \u0645\u062D\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC", '\u06AF\u06CC\u0644\u0627\u0646']

items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
console.log(items);
// ['\u0686\u0647\u0627\u0631 \u0645\u062D\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC", '\u0633\u0645\u0646\u0627\u0646', '\u0642\u0645', '\u06AF\u06CC\u0644\u0627\u0646', '\u0645\u0634\u0647\u062F"] 
\`\`\``,frontmatter:{srcSequence:"./section-5.md"},note:`It also works well with Ukrain, or arabic or farsi languages.

Next slide >>>>>`,index:50,start:461,end:494,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",raw:`
# Sorting
Sort Ukrainian or Persian language \u{1F1FA}\u{1F1E6}

\`\`\`ts
const items = ['\u0410\u043B\u0431\u0430\u043D\u0456\u044F','\u0404\u0433\u0438\u043F\u0435\u0442','\u0406\u043D\u0434\u0456\u044F','\u041F\u0435\u0440\u0443'];
items.sort();
console.log(items);
// ['\u0404\u0433\u0438\u043F\u0435\u0442', '\u0406\u043D\u0434\u0456\u044F', '\u0410\u043B\u0431\u0430\u043D\u0456\u044F', '\u041F\u0435\u0440\u0443']

items.sort((a, b) => a.localeCompare(b, 'uk', { ignorePunctuation: true }));
console.log(items);
// ['\u0410\u043B\u0431\u0430\u043D\u0456\u044F', '\u0404\u0433\u0438\u043F\u0435\u0442', '\u0406\u043D\u0434\u0456\u044F', '\u041F\u0435\u0440\u0443']
\`\`\`
<hr />

\`\`\`ts
const items = ['\u06AF\u06CC\u0644\u0627\u0646', '\u0633\u0645\u0646\u0627\u0646', '\u0686\u0647\u0627\u0631 \u0645\u062D\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC', '\u0645\u0634\u0647\u062F', '\u0642\u0645'];
items.sort();
console.log(items);
// ['\u0633\u0645\u0646\u0627\u0646', '\u0642\u0645', '\u0645\u0634\u0647\u062F', "\u0686\u0647\u0627\u0631 \u0645\u062D\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC", '\u06AF\u06CC\u0644\u0627\u0646']

items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
console.log(items);
// ['\u0686\u0647\u0627\u0631 \u0645\u062D\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC", '\u0633\u0645\u0646\u0627\u0646', '\u0642\u0645', '\u06AF\u06CC\u0644\u0627\u0646', '\u0645\u0634\u0647\u062F"] 
\`\`\`

<!--
It also works well with Ukrain, or arabic or farsi languages.

Next slide >>>>>
-->
`,title:"Sorting",level:1,content:`# Sorting
Sort Ukrainian or Persian language \u{1F1FA}\u{1F1E6}

\`\`\`ts
const items = ['\u0410\u043B\u0431\u0430\u043D\u0456\u044F','\u0404\u0433\u0438\u043F\u0435\u0442','\u0406\u043D\u0434\u0456\u044F','\u041F\u0435\u0440\u0443'];
items.sort();
console.log(items);
// ['\u0404\u0433\u0438\u043F\u0435\u0442', '\u0406\u043D\u0434\u0456\u044F', '\u0410\u043B\u0431\u0430\u043D\u0456\u044F', '\u041F\u0435\u0440\u0443']

items.sort((a, b) => a.localeCompare(b, 'uk', { ignorePunctuation: true }));
console.log(items);
// ['\u0410\u043B\u0431\u0430\u043D\u0456\u044F', '\u0404\u0433\u0438\u043F\u0435\u0442', '\u0406\u043D\u0434\u0456\u044F', '\u041F\u0435\u0440\u0443']
\`\`\`
<hr />

\`\`\`ts
const items = ['\u06AF\u06CC\u0644\u0627\u0646', '\u0633\u0645\u0646\u0627\u0646', '\u0686\u0647\u0627\u0631 \u0645\u062D\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC', '\u0645\u0634\u0647\u062F', '\u0642\u0645'];
items.sort();
console.log(items);
// ['\u0633\u0645\u0646\u0627\u0646', '\u0642\u0645', '\u0645\u0634\u0647\u062F', "\u0686\u0647\u0627\u0631 \u0645\u062D\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC", '\u06AF\u06CC\u0644\u0627\u0646']

items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
console.log(items);
// ['\u0686\u0647\u0627\u0631 \u0645\u062D\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC", '\u0633\u0645\u0646\u0627\u0646', '\u0642\u0645', '\u06AF\u06CC\u0644\u0627\u0646', '\u0645\u0634\u0647\u062F"] 
\`\`\``,frontmatter:{},note:`It also works well with Ukrain, or arabic or farsi languages.

Next slide >>>>>`,index:13,start:461,end:494},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",notesHTML:`<p>It also works well with Ukrain, or arabic or farsi languages.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:jx,meta:{srcSequence:"./section-5.md",slide:{raw:`
# Sorting

Sort in Japanese

\`\`\`ts
const items = [
  '\u3042\u307E\u30AC\u30DF', '\u30A6\u30A3\u30FC\u30F3', '\u837B\u91CE', '\u3046\u3044\u30FC\u3093', '\u4E2D\u6751', '\u30EC\u30A2\u30FC\u30C9', '\u89D2\u4E2D', 'OKEON', '\u4E95\u4E0A', '\u85E4\u5CA1', '\u4F50\u85E4', 'SHIMA', '\u5CA9\u4E0B',
];

items.sort((a, b) => a.localeCompare(b, 'ja-JP', { ignorePunctuation: true }));
console.log(items);
// ["OKEON", "SHIMA", "\u3042\u307E\u30AC\u30DF", "\u30A6\u30A3\u30FC\u30F3", "\u3046\u3044\u30FC\u3093", "\u30EC\u30A2\u30FC\u30C9", 
// "\u4E95\u4E0A", "\u837B\u91CE", "\u89D2\u4E2D", "\u5CA9\u4E0B", "\u4F50\u85E4", "\u4E2D\u6751", "\u85E4\u5CA1"]
// "Inoue", "Ogino", "Kakunaka", "Iwashita", "Sato", "Nakamura", "Fujioka"]
\`\`\`

// PHP
\`\`\`php
function sortWithLocale($arr) {
  Collator::create('ja_JP.utf8')->sort($arr, SORT_LOCALE_STRING);
  return $arr;
}

// ["OKEON", "SHIMA", "\u3042\u307E\u30AC\u30DF", "\u3046\u3044\u30FC\u3093", "\u30A6\u30A3\u30FC\u30F3", "\u30EC\u30A2\u30FC\u30C9", 
// "\u4E2D\u6751", "\u4E95\u4E0A", "\u4F50\u85E4", "\u5CA9\u4E0B", "\u837B\u91CE", "\u85E4\u5CA1", "\u89D2\u4E2D"]
\`\`\`


<!--
For Japanese, it is also order by the phonetic order, including the Kanji.
PHP does have similar feature, but I would recommand sorting in database query to get a better sorting result.

Next slide >>>>>

\u5CA9\u4E0B Iwashita \u88AB\u5224\u65B7\u6210 Gan shita
\u30D5\u30EA\u30AC\u30CA
Keiko kono
\u6CB3\u91CE\u3000\u304B\u308F\u306E\u3000\u3053\u3046\u306E

-->
`,title:"Sorting",level:1,content:`# Sorting

Sort in Japanese

\`\`\`ts
const items = [
  '\u3042\u307E\u30AC\u30DF', '\u30A6\u30A3\u30FC\u30F3', '\u837B\u91CE', '\u3046\u3044\u30FC\u3093', '\u4E2D\u6751', '\u30EC\u30A2\u30FC\u30C9', '\u89D2\u4E2D', 'OKEON', '\u4E95\u4E0A', '\u85E4\u5CA1', '\u4F50\u85E4', 'SHIMA', '\u5CA9\u4E0B',
];

items.sort((a, b) => a.localeCompare(b, 'ja-JP', { ignorePunctuation: true }));
console.log(items);
// ["OKEON", "SHIMA", "\u3042\u307E\u30AC\u30DF", "\u30A6\u30A3\u30FC\u30F3", "\u3046\u3044\u30FC\u3093", "\u30EC\u30A2\u30FC\u30C9", 
// "\u4E95\u4E0A", "\u837B\u91CE", "\u89D2\u4E2D", "\u5CA9\u4E0B", "\u4F50\u85E4", "\u4E2D\u6751", "\u85E4\u5CA1"]
// "Inoue", "Ogino", "Kakunaka", "Iwashita", "Sato", "Nakamura", "Fujioka"]
\`\`\`

// PHP
\`\`\`php
function sortWithLocale($arr) {
  Collator::create('ja_JP.utf8')->sort($arr, SORT_LOCALE_STRING);
  return $arr;
}

// ["OKEON", "SHIMA", "\u3042\u307E\u30AC\u30DF", "\u3046\u3044\u30FC\u3093", "\u30A6\u30A3\u30FC\u30F3", "\u30EC\u30A2\u30FC\u30C9", 
// "\u4E2D\u6751", "\u4E95\u4E0A", "\u4F50\u85E4", "\u5CA9\u4E0B", "\u837B\u91CE", "\u85E4\u5CA1", "\u89D2\u4E2D"]
\`\`\``,frontmatter:{srcSequence:"./section-5.md"},note:`For Japanese, it is also order by the phonetic order, including the Kanji.
PHP does have similar feature, but I would recommand sorting in database query to get a better sorting result.

Next slide >>>>>

\u5CA9\u4E0B Iwashita \u88AB\u5224\u65B7\u6210 Gan shita
\u30D5\u30EA\u30AC\u30CA
Keiko kono
\u6CB3\u91CE\u3000\u304B\u308F\u306E\u3000\u3053\u3046\u306E`,index:51,start:495,end:537,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",raw:`
# Sorting

Sort in Japanese

\`\`\`ts
const items = [
  '\u3042\u307E\u30AC\u30DF', '\u30A6\u30A3\u30FC\u30F3', '\u837B\u91CE', '\u3046\u3044\u30FC\u3093', '\u4E2D\u6751', '\u30EC\u30A2\u30FC\u30C9', '\u89D2\u4E2D', 'OKEON', '\u4E95\u4E0A', '\u85E4\u5CA1', '\u4F50\u85E4', 'SHIMA', '\u5CA9\u4E0B',
];

items.sort((a, b) => a.localeCompare(b, 'ja-JP', { ignorePunctuation: true }));
console.log(items);
// ["OKEON", "SHIMA", "\u3042\u307E\u30AC\u30DF", "\u30A6\u30A3\u30FC\u30F3", "\u3046\u3044\u30FC\u3093", "\u30EC\u30A2\u30FC\u30C9", 
// "\u4E95\u4E0A", "\u837B\u91CE", "\u89D2\u4E2D", "\u5CA9\u4E0B", "\u4F50\u85E4", "\u4E2D\u6751", "\u85E4\u5CA1"]
// "Inoue", "Ogino", "Kakunaka", "Iwashita", "Sato", "Nakamura", "Fujioka"]
\`\`\`

// PHP
\`\`\`php
function sortWithLocale($arr) {
  Collator::create('ja_JP.utf8')->sort($arr, SORT_LOCALE_STRING);
  return $arr;
}

// ["OKEON", "SHIMA", "\u3042\u307E\u30AC\u30DF", "\u3046\u3044\u30FC\u3093", "\u30A6\u30A3\u30FC\u30F3", "\u30EC\u30A2\u30FC\u30C9", 
// "\u4E2D\u6751", "\u4E95\u4E0A", "\u4F50\u85E4", "\u5CA9\u4E0B", "\u837B\u91CE", "\u85E4\u5CA1", "\u89D2\u4E2D"]
\`\`\`


<!--
For Japanese, it is also order by the phonetic order, including the Kanji.
PHP does have similar feature, but I would recommand sorting in database query to get a better sorting result.

Next slide >>>>>

\u5CA9\u4E0B Iwashita \u88AB\u5224\u65B7\u6210 Gan shita
\u30D5\u30EA\u30AC\u30CA
Keiko kono
\u6CB3\u91CE\u3000\u304B\u308F\u306E\u3000\u3053\u3046\u306E

-->
`,title:"Sorting",level:1,content:`# Sorting

Sort in Japanese

\`\`\`ts
const items = [
  '\u3042\u307E\u30AC\u30DF', '\u30A6\u30A3\u30FC\u30F3', '\u837B\u91CE', '\u3046\u3044\u30FC\u3093', '\u4E2D\u6751', '\u30EC\u30A2\u30FC\u30C9', '\u89D2\u4E2D', 'OKEON', '\u4E95\u4E0A', '\u85E4\u5CA1', '\u4F50\u85E4', 'SHIMA', '\u5CA9\u4E0B',
];

items.sort((a, b) => a.localeCompare(b, 'ja-JP', { ignorePunctuation: true }));
console.log(items);
// ["OKEON", "SHIMA", "\u3042\u307E\u30AC\u30DF", "\u30A6\u30A3\u30FC\u30F3", "\u3046\u3044\u30FC\u3093", "\u30EC\u30A2\u30FC\u30C9", 
// "\u4E95\u4E0A", "\u837B\u91CE", "\u89D2\u4E2D", "\u5CA9\u4E0B", "\u4F50\u85E4", "\u4E2D\u6751", "\u85E4\u5CA1"]
// "Inoue", "Ogino", "Kakunaka", "Iwashita", "Sato", "Nakamura", "Fujioka"]
\`\`\`

// PHP
\`\`\`php
function sortWithLocale($arr) {
  Collator::create('ja_JP.utf8')->sort($arr, SORT_LOCALE_STRING);
  return $arr;
}

// ["OKEON", "SHIMA", "\u3042\u307E\u30AC\u30DF", "\u3046\u3044\u30FC\u3093", "\u30A6\u30A3\u30FC\u30F3", "\u30EC\u30A2\u30FC\u30C9", 
// "\u4E2D\u6751", "\u4E95\u4E0A", "\u4F50\u85E4", "\u5CA9\u4E0B", "\u837B\u91CE", "\u85E4\u5CA1", "\u89D2\u4E2D"]
\`\`\``,frontmatter:{},note:`For Japanese, it is also order by the phonetic order, including the Kanji.
PHP does have similar feature, but I would recommand sorting in database query to get a better sorting result.

Next slide >>>>>

\u5CA9\u4E0B Iwashita \u88AB\u5224\u65B7\u6210 Gan shita
\u30D5\u30EA\u30AC\u30CA
Keiko kono
\u6CB3\u91CE\u3000\u304B\u308F\u306E\u3000\u3053\u3046\u306E`,index:14,start:495,end:537},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",notesHTML:`<p>For Japanese, it is also order by the phonetic order, including the Kanji.
PHP does have similar feature, but I would recommand sorting in database query to get a better sorting result.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
<p>\u5CA9\u4E0B Iwashita \u88AB\u5224\u65B7\u6210 Gan shita
\u30D5\u30EA\u30AC\u30CA
Keiko kono
\u6CB3\u91CE\u3000\u304B\u308F\u306E\u3000\u3053\u3046\u306E</p>
`,id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:Rx,meta:{srcSequence:"./section-5.md",slide:{raw:`
# Sorting

Sort in Chinese

\`\`\`ts
const items = [
  '\u57FA\u9686', '\u53F0\u5317', '\u6843\u5712', '\u65B0\u7AF9', '\u82D7\u6817', '\u53F0\u4E2D', '\u5F70\u5316', '\u96F2\u6797', '\u5609\u7FA9', '\u9AD8\u96C4', '\u5C4F\u6771', '\u82B1\u84EE', '\u5B9C\u862D',
];
items.sort();
           
console.log(items);
// ['\u53F0\u4E2D', '\u53F0\u5317', '\u5609\u7FA9', '\u57FA\u9686', '\u5B9C\u862D', '\u5C4F\u6771', '\u5F70\u5316', '\u65B0\u7AF9', '\u6843\u5712', '\u82B1\u84EE', '\u82D7\u6817', '\u96F2\u6797', '\u9AD8\u96C4']
\`\`\`

\`\`\`ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-stroke', {ignorePunctuation: true }));
//\xA0['\u53F0\u4E2D', '\u53F0\u5317', '\u5B9C\u862D', '\u82B1\u84EE', '\u5C4F\u6771', '\u82D7\u6817', '\u6843\u5712', '\u9AD8\u96C4', '\u57FA\u9686', '\u96F2\u6797', '\u65B0\u7AF9', '\u5609\u7FA9', '\u5F70\u5316']
\`\`\`

\`\`\`ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-zhuyin', {ignorePunctuation: true }));
// ['\u5C4F\u6771', '\u82D7\u6817', '\u53F0\u5317', '\u53F0\u4E2D', '\u6843\u5712', '\u9AD8\u96C4', '\u82B1\u84EE', '\u57FA\u9686', '\u5609\u7FA9', '\u65B0\u7AF9', '\u5F70\u5316', '\u5B9C\u862D', '\u96F2\u6797']
\`\`\`

<!--
In Traditional Chinese, localeCompare() also works with various attributes that I mentioned before.
By strokes, by the Phonetic zhuyin.

Or use pinyin for Simplified Chinese.

Next slides >>>>>
-->
`,title:"Sorting",level:1,content:`# Sorting

Sort in Chinese

\`\`\`ts
const items = [
  '\u57FA\u9686', '\u53F0\u5317', '\u6843\u5712', '\u65B0\u7AF9', '\u82D7\u6817', '\u53F0\u4E2D', '\u5F70\u5316', '\u96F2\u6797', '\u5609\u7FA9', '\u9AD8\u96C4', '\u5C4F\u6771', '\u82B1\u84EE', '\u5B9C\u862D',
];
items.sort();
           
console.log(items);
// ['\u53F0\u4E2D', '\u53F0\u5317', '\u5609\u7FA9', '\u57FA\u9686', '\u5B9C\u862D', '\u5C4F\u6771', '\u5F70\u5316', '\u65B0\u7AF9', '\u6843\u5712', '\u82B1\u84EE', '\u82D7\u6817', '\u96F2\u6797', '\u9AD8\u96C4']
\`\`\`

\`\`\`ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-stroke', {ignorePunctuation: true }));
//\xA0['\u53F0\u4E2D', '\u53F0\u5317', '\u5B9C\u862D', '\u82B1\u84EE', '\u5C4F\u6771', '\u82D7\u6817', '\u6843\u5712', '\u9AD8\u96C4', '\u57FA\u9686', '\u96F2\u6797', '\u65B0\u7AF9', '\u5609\u7FA9', '\u5F70\u5316']
\`\`\`

\`\`\`ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-zhuyin', {ignorePunctuation: true }));
// ['\u5C4F\u6771', '\u82D7\u6817', '\u53F0\u5317', '\u53F0\u4E2D', '\u6843\u5712', '\u9AD8\u96C4', '\u82B1\u84EE', '\u57FA\u9686', '\u5609\u7FA9', '\u65B0\u7AF9', '\u5F70\u5316', '\u5B9C\u862D', '\u96F2\u6797']
\`\`\``,frontmatter:{srcSequence:"./section-5.md"},note:`In Traditional Chinese, localeCompare() also works with various attributes that I mentioned before.
By strokes, by the Phonetic zhuyin.

Or use pinyin for Simplified Chinese.

Next slides >>>>>`,index:52,start:538,end:572,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",raw:`
# Sorting

Sort in Chinese

\`\`\`ts
const items = [
  '\u57FA\u9686', '\u53F0\u5317', '\u6843\u5712', '\u65B0\u7AF9', '\u82D7\u6817', '\u53F0\u4E2D', '\u5F70\u5316', '\u96F2\u6797', '\u5609\u7FA9', '\u9AD8\u96C4', '\u5C4F\u6771', '\u82B1\u84EE', '\u5B9C\u862D',
];
items.sort();
           
console.log(items);
// ['\u53F0\u4E2D', '\u53F0\u5317', '\u5609\u7FA9', '\u57FA\u9686', '\u5B9C\u862D', '\u5C4F\u6771', '\u5F70\u5316', '\u65B0\u7AF9', '\u6843\u5712', '\u82B1\u84EE', '\u82D7\u6817', '\u96F2\u6797', '\u9AD8\u96C4']
\`\`\`

\`\`\`ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-stroke', {ignorePunctuation: true }));
//\xA0['\u53F0\u4E2D', '\u53F0\u5317', '\u5B9C\u862D', '\u82B1\u84EE', '\u5C4F\u6771', '\u82D7\u6817', '\u6843\u5712', '\u9AD8\u96C4', '\u57FA\u9686', '\u96F2\u6797', '\u65B0\u7AF9', '\u5609\u7FA9', '\u5F70\u5316']
\`\`\`

\`\`\`ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-zhuyin', {ignorePunctuation: true }));
// ['\u5C4F\u6771', '\u82D7\u6817', '\u53F0\u5317', '\u53F0\u4E2D', '\u6843\u5712', '\u9AD8\u96C4', '\u82B1\u84EE', '\u57FA\u9686', '\u5609\u7FA9', '\u65B0\u7AF9', '\u5F70\u5316', '\u5B9C\u862D', '\u96F2\u6797']
\`\`\`

<!--
In Traditional Chinese, localeCompare() also works with various attributes that I mentioned before.
By strokes, by the Phonetic zhuyin.

Or use pinyin for Simplified Chinese.

Next slides >>>>>
-->
`,title:"Sorting",level:1,content:`# Sorting

Sort in Chinese

\`\`\`ts
const items = [
  '\u57FA\u9686', '\u53F0\u5317', '\u6843\u5712', '\u65B0\u7AF9', '\u82D7\u6817', '\u53F0\u4E2D', '\u5F70\u5316', '\u96F2\u6797', '\u5609\u7FA9', '\u9AD8\u96C4', '\u5C4F\u6771', '\u82B1\u84EE', '\u5B9C\u862D',
];
items.sort();
           
console.log(items);
// ['\u53F0\u4E2D', '\u53F0\u5317', '\u5609\u7FA9', '\u57FA\u9686', '\u5B9C\u862D', '\u5C4F\u6771', '\u5F70\u5316', '\u65B0\u7AF9', '\u6843\u5712', '\u82B1\u84EE', '\u82D7\u6817', '\u96F2\u6797', '\u9AD8\u96C4']
\`\`\`

\`\`\`ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-stroke', {ignorePunctuation: true }));
//\xA0['\u53F0\u4E2D', '\u53F0\u5317', '\u5B9C\u862D', '\u82B1\u84EE', '\u5C4F\u6771', '\u82D7\u6817', '\u6843\u5712', '\u9AD8\u96C4', '\u57FA\u9686', '\u96F2\u6797', '\u65B0\u7AF9', '\u5609\u7FA9', '\u5F70\u5316']
\`\`\`

\`\`\`ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-zhuyin', {ignorePunctuation: true }));
// ['\u5C4F\u6771', '\u82D7\u6817', '\u53F0\u5317', '\u53F0\u4E2D', '\u6843\u5712', '\u9AD8\u96C4', '\u82B1\u84EE', '\u57FA\u9686', '\u5609\u7FA9', '\u65B0\u7AF9', '\u5F70\u5316', '\u5B9C\u862D', '\u96F2\u6797']
\`\`\``,frontmatter:{},note:`In Traditional Chinese, localeCompare() also works with various attributes that I mentioned before.
By strokes, by the Phonetic zhuyin.

Or use pinyin for Simplified Chinese.

Next slides >>>>>`,index:15,start:538,end:572},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",notesHTML:`<p>In Traditional Chinese, localeCompare() also works with various attributes that I mentioned before.
By strokes, by the Phonetic zhuyin.</p>
<p>Or use pinyin for Simplified Chinese.</p>
<p>Next slides &gt;&gt;&gt;&gt;&gt;</p>
`,id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:Ux,meta:{srcSequence:"./section-5.md",slide:{raw:`
<div class="hidden">
# Sorting - Chinese pronunciation
</div>

# Chinese
Multiple pronunciation

<div class="grid grid-cols-2">
    <div class="grid-1">
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-36-40.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Music</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-09.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Happy, Happiness, love to</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-43.png" alt="" class="h-full w-auto" />
            <span class="pl-4">To appreciate</span>
        </div>
    </div>
    <div class="grid-2 flex justify-center">
        <img src="/images/le-chinese-character.png" class="h-90" />
    </div>
</div>

<!--
Lastly for multiple pronouciation characters, what do we do?

The answer is we do Nothing in general.

Next slide >>>>>
-->`,title:"Sorting - Chinese pronunciation",level:1,content:`<div class="hidden">
# Sorting - Chinese pronunciation
</div>

# Chinese
Multiple pronunciation

<div class="grid grid-cols-2">
    <div class="grid-1">
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-36-40.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Music</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-09.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Happy, Happiness, love to</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-43.png" alt="" class="h-full w-auto" />
            <span class="pl-4">To appreciate</span>
        </div>
    </div>
    <div class="grid-2 flex justify-center">
        <img src="/images/le-chinese-character.png" class="h-90" />
    </div>
</div>`,frontmatter:{srcSequence:"./section-5.md"},note:`Lastly for multiple pronouciation characters, what do we do?

The answer is we do Nothing in general.

Next slide >>>>>`,index:53,start:573,end:608,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",raw:`
<div class="hidden">
# Sorting - Chinese pronunciation
</div>

# Chinese
Multiple pronunciation

<div class="grid grid-cols-2">
    <div class="grid-1">
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-36-40.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Music</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-09.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Happy, Happiness, love to</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-43.png" alt="" class="h-full w-auto" />
            <span class="pl-4">To appreciate</span>
        </div>
    </div>
    <div class="grid-2 flex justify-center">
        <img src="/images/le-chinese-character.png" class="h-90" />
    </div>
</div>

<!--
Lastly for multiple pronouciation characters, what do we do?

The answer is we do Nothing in general.

Next slide >>>>>
-->`,title:"Sorting - Chinese pronunciation",level:1,content:`<div class="hidden">
# Sorting - Chinese pronunciation
</div>

# Chinese
Multiple pronunciation

<div class="grid grid-cols-2">
    <div class="grid-1">
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-36-40.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Music</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-09.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Happy, Happiness, love to</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-43.png" alt="" class="h-full w-auto" />
            <span class="pl-4">To appreciate</span>
        </div>
    </div>
    <div class="grid-2 flex justify-center">
        <img src="/images/le-chinese-character.png" class="h-90" />
    </div>
</div>`,frontmatter:{},note:`Lastly for multiple pronouciation characters, what do we do?

The answer is we do Nothing in general.

Next slide >>>>>`,index:16,start:573,end:608},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",notesHTML:`<p>Lastly for multiple pronouciation characters, what do we do?</p>
<p>The answer is we do Nothing in general.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:Gx,meta:{srcSequence:"./section-5.md",slide:{raw:`
# Sorting
What happens to the Character that has multiple pronunciation?

<div class="grid grid-cols-2 gap-4 pt-8">
<div>

## This affects

- Japanese Kanji
- Chinese characters sorting in 
  - Pinyin (zh-CN)
  - Bopomofo (Library, material for Children)

</div>
<div>

## Solution
- Leave it as-is
- Customize it and make a explicit order in a array
</div>
</div>

<!--
This issue only affects Japanese Kanji, or when sorting with Chinese character with phonetic element using Zhuyin or Pinyin.

Native speakers know the common variations of the pronouciation, when we process in head, it is processed together.

Sometimes if the client request to make it in the explicit order, the better way it to map the words into a pre-defined table or array.
In the end it will be a fully customized array.

Next slide >>>>>
-->`,title:"Sorting",level:1,content:`# Sorting
What happens to the Character that has multiple pronunciation?

<div class="grid grid-cols-2 gap-4 pt-8">
<div>

## This affects

- Japanese Kanji
- Chinese characters sorting in 
  - Pinyin (zh-CN)
  - Bopomofo (Library, material for Children)

</div>
<div>

## Solution
- Leave it as-is
- Customize it and make a explicit order in a array
</div>
</div>`,frontmatter:{srcSequence:"./section-5.md"},note:`This issue only affects Japanese Kanji, or when sorting with Chinese character with phonetic element using Zhuyin or Pinyin.

Native speakers know the common variations of the pronouciation, when we process in head, it is processed together.

Sometimes if the client request to make it in the explicit order, the better way it to map the words into a pre-defined table or array.
In the end it will be a fully customized array.

Next slide >>>>>`,index:54,start:609,end:642,source:{filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",raw:`
# Sorting
What happens to the Character that has multiple pronunciation?

<div class="grid grid-cols-2 gap-4 pt-8">
<div>

## This affects

- Japanese Kanji
- Chinese characters sorting in 
  - Pinyin (zh-CN)
  - Bopomofo (Library, material for Children)

</div>
<div>

## Solution
- Leave it as-is
- Customize it and make a explicit order in a array
</div>
</div>

<!--
This issue only affects Japanese Kanji, or when sorting with Chinese character with phonetic element using Zhuyin or Pinyin.

Native speakers know the common variations of the pronouciation, when we process in head, it is processed together.

Sometimes if the client request to make it in the explicit order, the better way it to map the words into a pre-defined table or array.
In the end it will be a fully customized array.

Next slide >>>>>
-->`,title:"Sorting",level:1,content:`# Sorting
What happens to the Character that has multiple pronunciation?

<div class="grid grid-cols-2 gap-4 pt-8">
<div>

## This affects

- Japanese Kanji
- Chinese characters sorting in 
  - Pinyin (zh-CN)
  - Bopomofo (Library, material for Children)

</div>
<div>

## Solution
- Leave it as-is
- Customize it and make a explicit order in a array
</div>
</div>`,frontmatter:{},note:`This issue only affects Japanese Kanji, or when sorting with Chinese character with phonetic element using Zhuyin or Pinyin.

Native speakers know the common variations of the pronouciation, when we process in head, it is processed together.

Sometimes if the client request to make it in the explicit order, the better way it to map the words into a pre-defined table or array.
In the end it will be a fully customized array.

Next slide >>>>>`,index:17,start:609,end:642},filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/section-5.md",notesHTML:`<p>This issue only affects Japanese Kanji, or when sorting with Chinese character with phonetic element using Zhuyin or Pinyin.</p>
<p>Native speakers know the common variations of the pronouciation, when we process in head, it is processed together.</p>
<p>Sometimes if the client request to make it in the explicit order, the better way it to map the words into a pre-defined table or array.
In the end it will be a fully customized array.</p>
<p>Next slide &gt;&gt;&gt;&gt;&gt;</p>
`,id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:Xx,meta:{layout:"intro-image",image:"/images/DCE2022_content.png",slide:{raw:`---
layout: intro-image
image: /images/DCE2022_content.png
---

<div class="text-gray-700 pt-12">

# Recap

* What to consider beyond i18n
* Calendar & date besides Gregorian calendar
* CJK input method
* Sorting methods regarding locales

<div class="pt-12">

Online slide: https://prague.amou.ro
</div>
</div>`,title:"Recap",level:1,content:`<div class="text-gray-700 pt-12">

# Recap

* What to consider beyond i18n
* Calendar & date besides Gregorian calendar
* CJK input method
* Sorting methods regarding locales

<div class="pt-12">

Online slide: https://prague.amou.ro
</div>
</div>`,frontmatter:{layout:"intro-image",image:"/images/DCE2022_content.png"},index:55,start:184,end:203,notesHTML:"",filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:e3,meta:{layout:"image",image:"/images/DCE2022_thanks.png",slide:{raw:`---
layout: image
image: /images/DCE2022_thanks.png
---

<div class="hidden">
# Thank you
</div>
`,title:"Thank you",level:1,content:`<div class="hidden">
# Thank you
</div>`,frontmatter:{layout:"image",image:"/images/DCE2022_thanks.png"},index:56,start:203,end:212,notesHTML:"",filepath:"/home/runner/work/drupalcon_prague_2022/drupalcon_prague_2022/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",component:l8,meta:{layout:"end"}}],qe=n3,t3=[{name:"play",path:"/",component:Q1,children:[...qe]},{name:"print",path:"/print",component:o8},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>us(()=>import("./Presenter.92f381c4.js"),["assets/Presenter.92f381c4.js","assets/Presenter.ded7a296.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.9cf848f8.js"]),beforeEnter:n=>{if(!kt.remote||kt.remote===n.query.password)return!0;if(kt.remote&&n.query.password===void 0){const t=prompt("Enter password");if(kt.remote===t)return!0}return n.params.no?{path:`/${n.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],vn=qy({history:ry("/"),routes:t3});function s3(n,t,{mode:s="replace"}={}){return D({get(){const o=vn.currentRoute.value.query[n];return o==null?t!=null?t:null:Array.isArray(o)?o.filter(Boolean):o},set(o){Ze(()=>{vn[b(s)]({query:{...vn.currentRoute.value.query,[n]:o}})})}})}const Bu=q(0);Ze(()=>{vn.afterEach(async()=>{await Ze(),Bu.value+=1})});const Qn=D(()=>vn.currentRoute.value),nl=D(()=>Qn.value.query.print!==void 0),o3=D(()=>Qn.value.query.print==="clicks"),Un=D(()=>Qn.value.query.embedded!==void 0),Rn=D(()=>Qn.value.path.startsWith("/presenter")),$s=D(()=>nl.value&&!o3.value),ir=D(()=>Qn.value.query.password),a3=D(()=>!Rn.value&&(!Ae.remote||ir.value===Ae.remote)),ec=s3("clicks","0"),ku=D(()=>qe.length-1),r3=D(()=>Qn.value.path),We=D(()=>parseInt(r3.value.split(/\//g).slice(-1)[0])||1);D(()=>sa(We.value));const fn=D(()=>qe.find(n=>n.path===`${We.value}`));D(()=>{var n,t,s;return(s=(t=(n=fn.value)==null?void 0:n.meta)==null?void 0:t.slide)==null?void 0:s.id});D(()=>{var n,t;return(t=(n=fn.value)==null?void 0:n.meta)==null?void 0:t.layout});const xa=D(()=>qe.find(n=>n.path===`${Math.min(qe.length,We.value+1)}`)),l3=D(()=>{var n,t;return Bu.value,((t=(n=fn.value)==null?void 0:n.meta)==null?void 0:t.__clicksElements)||[]}),Fn=D({get(){if($s.value)return 99999;let n=+(ec.value||0);return isNaN(n)&&(n=0),n},set(n){ec.value=n.toString()}}),jo=D(()=>{var n,t,s;return+((s=(t=(n=fn.value)==null?void 0:n.meta)==null?void 0:t.clicks)!=null?s:l3.value.length)}),i3=D(()=>We.value<qe.length-1||Fn.value<jo.value),c3=D(()=>We.value>1||Fn.value>0),p3=D(()=>qe.filter(n=>{var t,s;return(s=(t=n.meta)==null?void 0:t.slide)==null?void 0:s.title}).reduce((n,t)=>(tl(n,t),n),[])),u3=D(()=>sl(p3.value,fn.value));D(()=>ol(u3.value));function it(){jo.value<=Fn.value?zs():Fn.value+=1}async function ct(){Fn.value<=0?await Ys():Fn.value-=1}function sa(n){return Rn.value?`/presenter/${n}`:`/${n}`}function zs(){const n=Math.min(qe.length,We.value+1);return ls(n)}async function Ys(n=!0){const t=Math.max(1,We.value-1);await ls(t),n&&jo.value&&vn.replace({query:{...Qn.value.query,clicks:jo.value}})}function ls(n,t){return vn.push({path:sa(n),query:{...Qn.value.query,clicks:t}})}function d3(n){const t=q(0),{direction:s,distanceX:o,distanceY:a}=$g(n,{onSwipeStart(r){r.pointerType==="touch"&&(qs.value||(t.value=Ga()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!t.value||qs.value)return;const l=Math.abs(o.value),i=Math.abs(a.value);l/window.innerWidth>.3||l>100?s.value===Vn.LEFT?it():ct():(i/window.innerHeight>.4||i>200)&&(s.value===Vn.DOWN?Ys():zs())}})}async function cr(){const{saveAs:n}=await us(()=>import("./FileSaver.min.7f56e709.js").then(t=>t.F),[]);n(Pp(Ae.download)?Ae.download:Ae.exportFilename?`${Ae.exportFilename}.pdf`:"/slidev-exported.pdf",`${Ae.title}.pdf`)}async function h3(n){var t,s;if(n==null){const o=(s=(t=fn.value)==null?void 0:t.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;n=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(n)}`),!0}function tl(n,t,s=1){var a,r,l,i,c;const o=(r=(a=t.meta)==null?void 0:a.slide)==null?void 0:r.level;o&&o>s&&n.length>0?tl(n[n.length-1].children,t,s+1):n.push({children:[],level:s,path:t.path,hideInToc:Boolean((l=t.meta)==null?void 0:l.hideInToc),title:(c=(i=t.meta)==null?void 0:i.slide)==null?void 0:c.title})}function sl(n,t,s=!1,o){return n.map(a=>{const r={...a,active:a.path===(t==null?void 0:t.path),hasActiveParent:s};return r.children.length>0&&(r.children=sl(r.children,t,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function ol(n,t=1){return n.filter(s=>!s.hideInToc).map(s=>({...s,children:ol(s.children,t+1)}))}function f3(){const n=Ae.titleTemplate.replace("%s",Ae.title||"Slidev");Gf({title:n}),rm(`${n} - shared`),pm(`${n} - drawings`);function t(){Rn.value&&(ni("page",+We.value),ni("clicks",Fn.value))}vn.afterEach(t),me(Fn,t),lm(s=>{(+s.page!=+We.value||Fn.value!==s.clicks)&&vn.replace({path:sa(s.page),query:{...vn.currentRoute.value.query,clicks:s.clicks||0}})})}const m3=xe({__name:"App",setup(n){return $(O),f3(),(t,s)=>{const o=ko("RouterView"),a=ko("StarportCarrier");return x(),W(De,null,[z(o),z(a)],64)}}});function Aa(n){return n!==null&&typeof n=="object"}function pr(n,t,s=".",o){if(!Aa(t))return pr(n,{},s,o);const a=Object.assign({},t);for(const r in n){if(r==="__proto__"||r==="constructor")continue;const l=n[r];l!=null&&(o&&o(a,r,l,s)||(Array.isArray(l)&&Array.isArray(a[r])?a[r]=l.concat(a[r]):Aa(l)&&Aa(a[r])?a[r]=pr(l,a[r],(s?`${s}.`:"")+r.toString(),o):a[r]=l))}return a}function g3(n){return(...t)=>t.reduce((s,o)=>pr(s,o,"",n),{})}const y3=g3(),Du=1/60*1e3,v3=typeof performance<"u"?()=>performance.now():()=>Date.now(),Eu=typeof window<"u"?n=>window.requestAnimationFrame(n):n=>setTimeout(()=>n(v3()),Du);function _3(n){let t=[],s=[],o=0,a=!1,r=!1;const l=new WeakSet,i={schedule:(c,p=!1,u=!1)=>{const h=u&&a,f=h?t:s;return p&&l.add(c),f.indexOf(c)===-1&&(f.push(c),h&&a&&(o=t.length)),c},cancel:c=>{const p=s.indexOf(c);p!==-1&&s.splice(p,1),l.delete(c)},process:c=>{if(a){r=!0;return}if(a=!0,[t,s]=[s,t],s.length=0,o=t.length,o)for(let p=0;p<o;p++){const u=t[p];u(c),l.has(u)&&(i.schedule(u),n())}a=!1,r&&(r=!1,i.process(c))}};return i}const w3=40;let ur=!0,Vs=!1,dr=!1;const ns={delta:0,timestamp:0},no=["read","update","preRender","render","postRender"],oa=no.reduce((n,t)=>(n[t]=_3(()=>Vs=!0),n),{}),hr=no.reduce((n,t)=>{const s=oa[t];return n[t]=(o,a=!1,r=!1)=>(Vs||A3(),s.schedule(o,a,r)),n},{}),b3=no.reduce((n,t)=>(n[t]=oa[t].cancel,n),{});no.reduce((n,t)=>(n[t]=()=>oa[t].process(ns),n),{});const x3=n=>oa[n].process(ns),Su=n=>{Vs=!1,ns.delta=ur?Du:Math.max(Math.min(n-ns.timestamp,w3),1),ns.timestamp=n,dr=!0,no.forEach(x3),dr=!1,Vs&&(ur=!1,Eu(Su))},A3=()=>{Vs=!0,ur=!0,dr||Eu(Su)},Tu=()=>ns;function Iu(n,t){var s={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(n);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(n,o[a])&&(s[o[a]]=n[o[a]]);return s}var C3=function(){},nc=function(){};const fr=(n,t,s)=>Math.min(Math.max(s,n),t),Ca=.001,B3=.01,tc=10,k3=.05,D3=1;function E3({duration:n=800,bounce:t=.25,velocity:s=0,mass:o=1}){let a,r;C3(n<=tc*1e3);let l=1-t;l=fr(k3,D3,l),n=fr(B3,tc,n/1e3),l<1?(a=p=>{const u=p*l,h=u*n,f=u-s,m=mr(p,l),g=Math.exp(-h);return Ca-f/m*g},r=p=>{const h=p*l*n,f=h*s+s,m=Math.pow(l,2)*Math.pow(p,2)*n,g=Math.exp(-h),w=mr(Math.pow(p,2),l);return(-a(p)+Ca>0?-1:1)*((f-m)*g)/w}):(a=p=>{const u=Math.exp(-p*n),h=(p-s)*n+1;return-Ca+u*h},r=p=>{const u=Math.exp(-p*n),h=(s-p)*(n*n);return u*h});const i=5/n,c=T3(a,r,i);if(n=n*1e3,isNaN(c))return{stiffness:100,damping:10,duration:n};{const p=Math.pow(c,2)*o;return{stiffness:p,damping:l*2*Math.sqrt(o*p),duration:n}}}const S3=12;function T3(n,t,s){let o=s;for(let a=1;a<S3;a++)o=o-n(o)/t(o);return o}function mr(n,t){return n*Math.sqrt(1-t*t)}const I3=["duration","bounce"],$3=["stiffness","damping","mass"];function sc(n,t){return t.some(s=>n[s]!==void 0)}function F3(n){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!sc(n,$3)&&sc(n,I3)){const s=E3(n);t=Object.assign(Object.assign(Object.assign({},t),s),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function al(n){var{from:t=0,to:s=1,restSpeed:o=2,restDelta:a}=n,r=Iu(n,["from","to","restSpeed","restDelta"]);const l={done:!1,value:t};let{stiffness:i,damping:c,mass:p,velocity:u,duration:h,isResolvedFromDuration:f}=F3(r),m=oc,g=oc;function w(){const _=u?-(u/1e3):0,k=s-t,B=c/(2*Math.sqrt(i*p)),A=Math.sqrt(i/p)/1e3;if(a===void 0&&(a=Math.min(Math.abs(s-t)/100,.4)),B<1){const E=mr(A,B);m=L=>{const P=Math.exp(-B*A*L);return s-P*((_+B*A*k)/E*Math.sin(E*L)+k*Math.cos(E*L))},g=L=>{const P=Math.exp(-B*A*L);return B*A*P*(Math.sin(E*L)*(_+B*A*k)/E+k*Math.cos(E*L))-P*(Math.cos(E*L)*(_+B*A*k)-E*k*Math.sin(E*L))}}else if(B===1)m=E=>s-Math.exp(-A*E)*(k+(_+A*k)*E);else{const E=A*Math.sqrt(B*B-1);m=L=>{const P=Math.exp(-B*A*L),K=Math.min(E*L,300);return s-P*((_+B*A*k)*Math.sinh(K)+E*k*Math.cosh(K))/E}}}return w(),{next:_=>{const k=m(_);if(f)l.done=_>=h;else{const B=g(_)*1e3,A=Math.abs(B)<=o,E=Math.abs(s-k)<=a;l.done=A&&E}return l.value=l.done?s:k,l},flipTarget:()=>{u=-u,[t,s]=[s,t],w()}}}al.needsInterpolation=(n,t)=>typeof n=="string"||typeof t=="string";const oc=n=>0,$u=(n,t,s)=>{const o=t-n;return o===0?1:(s-n)/o},rl=(n,t,s)=>-s*n+s*t+n,Fu=(n,t)=>s=>Math.max(Math.min(s,t),n),Fs=n=>n%1?Number(n.toFixed(5)):n,Gs=/(-)?([\d]*\.?[\d])+/g,gr=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,O3=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function to(n){return typeof n=="string"}const so={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Os=Object.assign(Object.assign({},so),{transform:Fu(0,1)}),fo=Object.assign(Object.assign({},so),{default:1}),ll=n=>({test:t=>to(t)&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),yt=ll("deg"),js=ll("%"),pe=ll("px"),ac=Object.assign(Object.assign({},js),{parse:n=>js.parse(n)/100,transform:n=>js.transform(n*100)}),il=(n,t)=>s=>Boolean(to(s)&&O3.test(s)&&s.startsWith(n)||t&&Object.prototype.hasOwnProperty.call(s,t)),Ou=(n,t,s)=>o=>{if(!to(o))return o;const[a,r,l,i]=o.match(Gs);return{[n]:parseFloat(a),[t]:parseFloat(r),[s]:parseFloat(l),alpha:i!==void 0?parseFloat(i):1}},Et={test:il("hsl","hue"),parse:Ou("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:s,alpha:o=1})=>"hsla("+Math.round(n)+", "+js.transform(Fs(t))+", "+js.transform(Fs(s))+", "+Fs(Os.transform(o))+")"},j3=Fu(0,255),Ba=Object.assign(Object.assign({},so),{transform:n=>Math.round(j3(n))}),ot={test:il("rgb","red"),parse:Ou("red","green","blue"),transform:({red:n,green:t,blue:s,alpha:o=1})=>"rgba("+Ba.transform(n)+", "+Ba.transform(t)+", "+Ba.transform(s)+", "+Fs(Os.transform(o))+")"};function P3(n){let t="",s="",o="",a="";return n.length>5?(t=n.substr(1,2),s=n.substr(3,2),o=n.substr(5,2),a=n.substr(7,2)):(t=n.substr(1,1),s=n.substr(2,1),o=n.substr(3,1),a=n.substr(4,1),t+=t,s+=s,o+=o,a+=a),{red:parseInt(t,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:a?parseInt(a,16)/255:1}}const yr={test:il("#"),parse:P3,transform:ot.transform},ln={test:n=>ot.test(n)||yr.test(n)||Et.test(n),parse:n=>ot.test(n)?ot.parse(n):Et.test(n)?Et.parse(n):yr.parse(n),transform:n=>to(n)?n:n.hasOwnProperty("red")?ot.transform(n):Et.transform(n)},ju="${c}",Pu="${n}";function N3(n){var t,s,o,a;return isNaN(n)&&to(n)&&((s=(t=n.match(Gs))===null||t===void 0?void 0:t.length)!==null&&s!==void 0?s:0)+((a=(o=n.match(gr))===null||o===void 0?void 0:o.length)!==null&&a!==void 0?a:0)>0}function Nu(n){typeof n=="number"&&(n=`${n}`);const t=[];let s=0;const o=n.match(gr);o&&(s=o.length,n=n.replace(gr,ju),t.push(...o.map(ln.parse)));const a=n.match(Gs);return a&&(n=n.replace(Gs,Pu),t.push(...a.map(so.parse))),{values:t,numColors:s,tokenised:n}}function Mu(n){return Nu(n).values}function Lu(n){const{values:t,numColors:s,tokenised:o}=Nu(n),a=t.length;return r=>{let l=o;for(let i=0;i<a;i++)l=l.replace(i<s?ju:Pu,i<s?ln.transform(r[i]):Fs(r[i]));return l}}const M3=n=>typeof n=="number"?0:n;function L3(n){const t=Mu(n);return Lu(n)(t.map(M3))}const oo={test:N3,parse:Mu,createTransformer:Lu,getAnimatableNone:L3},H3=new Set(["brightness","contrast","saturate","opacity"]);function R3(n){let[t,s]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[o]=s.match(Gs)||[];if(!o)return n;const a=s.replace(o,"");let r=H3.has(t)?1:0;return o!==s&&(r*=100),t+"("+r+a+")"}const J3=/([a-z-]*)\(.*?\)/g,vr=Object.assign(Object.assign({},oo),{getAnimatableNone:n=>{const t=n.match(J3);return t?t.map(R3).join(" "):n}});function ka(n,t,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(t-n)*6*s:s<1/2?t:s<2/3?n+(t-n)*(2/3-s)*6:n}function rc({hue:n,saturation:t,lightness:s,alpha:o}){n/=360,t/=100,s/=100;let a=0,r=0,l=0;if(!t)a=r=l=s;else{const i=s<.5?s*(1+t):s+t-s*t,c=2*s-i;a=ka(c,i,n+1/3),r=ka(c,i,n),l=ka(c,i,n-1/3)}return{red:Math.round(a*255),green:Math.round(r*255),blue:Math.round(l*255),alpha:o}}const K3=(n,t,s)=>{const o=n*n,a=t*t;return Math.sqrt(Math.max(0,s*(a-o)+o))},q3=[yr,ot,Et],lc=n=>q3.find(t=>t.test(n)),Hu=(n,t)=>{let s=lc(n),o=lc(t),a=s.parse(n),r=o.parse(t);s===Et&&(a=rc(a),s=ot),o===Et&&(r=rc(r),o=ot);const l=Object.assign({},a);return i=>{for(const c in l)c!=="alpha"&&(l[c]=K3(a[c],r[c],i));return l.alpha=rl(a.alpha,r.alpha,i),s.transform(l)}},W3=n=>typeof n=="number",U3=(n,t)=>s=>t(n(s)),Ru=(...n)=>n.reduce(U3);function Ju(n,t){return W3(n)?s=>rl(n,t,s):ln.test(n)?Hu(n,t):qu(n,t)}const Ku=(n,t)=>{const s=[...n],o=s.length,a=n.map((r,l)=>Ju(r,t[l]));return r=>{for(let l=0;l<o;l++)s[l]=a[l](r);return s}},z3=(n,t)=>{const s=Object.assign(Object.assign({},n),t),o={};for(const a in s)n[a]!==void 0&&t[a]!==void 0&&(o[a]=Ju(n[a],t[a]));return a=>{for(const r in o)s[r]=o[r](a);return s}};function ic(n){const t=oo.parse(n),s=t.length;let o=0,a=0,r=0;for(let l=0;l<s;l++)o||typeof t[l]=="number"?o++:t[l].hue!==void 0?r++:a++;return{parsed:t,numNumbers:o,numRGB:a,numHSL:r}}const qu=(n,t)=>{const s=oo.createTransformer(t),o=ic(n),a=ic(t);return o.numHSL===a.numHSL&&o.numRGB===a.numRGB&&o.numNumbers>=a.numNumbers?Ru(Ku(o.parsed,a.parsed),s):l=>`${l>0?t:n}`},Y3=(n,t)=>s=>rl(n,t,s);function V3(n){if(typeof n=="number")return Y3;if(typeof n=="string")return ln.test(n)?Hu:qu;if(Array.isArray(n))return Ku;if(typeof n=="object")return z3}function G3(n,t,s){const o=[],a=s||V3(n[0]),r=n.length-1;for(let l=0;l<r;l++){let i=a(n[l],n[l+1]);if(t){const c=Array.isArray(t)?t[l]:t;i=Ru(c,i)}o.push(i)}return o}function Z3([n,t],[s]){return o=>s($u(n,t,o))}function X3(n,t){const s=n.length,o=s-1;return a=>{let r=0,l=!1;if(a<=n[0]?l=!0:a>=n[o]&&(r=o-1,l=!0),!l){let c=1;for(;c<s&&!(n[c]>a||c===o);c++);r=c-1}const i=$u(n[r],n[r+1],a);return t[r](i)}}function Wu(n,t,{clamp:s=!0,ease:o,mixer:a}={}){const r=n.length;nc(r===t.length),nc(!o||!Array.isArray(o)||o.length===r-1),n[0]>n[r-1]&&(n=[].concat(n),t=[].concat(t),n.reverse(),t.reverse());const l=G3(t,o,a),i=r===2?Z3(n,l):X3(n,l);return s?c=>i(fr(n[0],n[r-1],c)):i}const aa=n=>t=>1-n(1-t),cl=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,Q3=n=>t=>Math.pow(t,n),Uu=n=>t=>t*t*((n+1)*t-n),eA=n=>{const t=Uu(n);return s=>(s*=2)<1?.5*t(s):.5*(2-Math.pow(2,-10*(s-1)))},zu=1.525,nA=4/11,tA=8/11,sA=9/10,Yu=n=>n,pl=Q3(2),oA=aa(pl),Vu=cl(pl),Gu=n=>1-Math.sin(Math.acos(n)),Zu=aa(Gu),aA=cl(Zu),ul=Uu(zu),rA=aa(ul),lA=cl(ul),iA=eA(zu),cA=4356/361,pA=35442/1805,uA=16061/1805,Po=n=>{if(n===1||n===0)return n;const t=n*n;return n<nA?7.5625*t:n<tA?9.075*t-9.9*n+3.4:n<sA?cA*t-pA*n+uA:10.8*n*n-20.52*n+10.72},dA=aa(Po),hA=n=>n<.5?.5*(1-Po(1-n*2)):.5*Po(n*2-1)+.5;function fA(n,t){return n.map(()=>t||Vu).splice(0,n.length-1)}function mA(n){const t=n.length;return n.map((s,o)=>o!==0?o/(t-1):0)}function gA(n,t){return n.map(s=>s*t)}function bo({from:n=0,to:t=1,ease:s,offset:o,duration:a=300}){const r={done:!1,value:n},l=Array.isArray(t)?t:[n,t],i=gA(o&&o.length===l.length?o:mA(l),a);function c(){return Wu(i,l,{ease:Array.isArray(s)?s:fA(l,s)})}let p=c();return{next:u=>(r.value=p(u),r.done=u>=a,r),flipTarget:()=>{l.reverse(),p=c()}}}function yA({velocity:n=0,from:t=0,power:s=.8,timeConstant:o=350,restDelta:a=.5,modifyTarget:r}){const l={done:!1,value:t};let i=s*n;const c=t+i,p=r===void 0?c:r(c);return p!==c&&(i=p-t),{next:u=>{const h=-i*Math.exp(-u/o);return l.done=!(h>a||h<-a),l.value=l.done?p:p+h,l},flipTarget:()=>{}}}const cc={keyframes:bo,spring:al,decay:yA};function vA(n){if(Array.isArray(n.to))return bo;if(cc[n.type])return cc[n.type];const t=new Set(Object.keys(n));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?bo:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?al:bo}function Xu(n,t,s=0){return n-t-s}function _A(n,t,s=0,o=!0){return o?Xu(t+-n,t,s):t-(n-t)+s}function wA(n,t,s,o){return o?n>=t+s:n<=-s}const bA=n=>{const t=({delta:s})=>n(s);return{start:()=>hr.update(t,!0),stop:()=>b3.update(t)}};function Qu(n){var t,s,{from:o,autoplay:a=!0,driver:r=bA,elapsed:l=0,repeat:i=0,repeatType:c="loop",repeatDelay:p=0,onPlay:u,onStop:h,onComplete:f,onRepeat:m,onUpdate:g}=n,w=Iu(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:_}=w,k,B=0,A=w.duration,E,L=!1,P=!0,K;const te=vA(w);!((s=(t=te).needsInterpolation)===null||s===void 0)&&s.call(t,o,_)&&(K=Wu([0,100],[o,_],{clamp:!1}),o=0,_=100);const ie=te(Object.assign(Object.assign({},w),{from:o,to:_}));function ye(){B++,c==="reverse"?(P=B%2===0,l=_A(l,A,p,P)):(l=Xu(l,A,p),c==="mirror"&&ie.flipTarget()),L=!1,m&&m()}function _e(){k.stop(),f&&f()}function Re(Me){if(P||(Me=-Me),l+=Me,!L){const $e=ie.next(Math.max(0,l));E=$e.value,K&&(E=K(E)),L=P?$e.done:l<=0}g==null||g(E),L&&(B===0&&(A!=null||(A=l)),B<i?wA(l,A,p,P)&&ye():_e())}function Je(){u==null||u(),k=r(Re),k.start()}return a&&Je(),{stop:()=>{h==null||h(),k.stop()}}}function ed(n,t){return t?n*(1e3/t):0}function xA({from:n=0,velocity:t=0,min:s,max:o,power:a=.8,timeConstant:r=750,bounceStiffness:l=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:p,driver:u,onUpdate:h,onComplete:f,onStop:m}){let g;function w(A){return s!==void 0&&A<s||o!==void 0&&A>o}function _(A){return s===void 0?o:o===void 0||Math.abs(s-A)<Math.abs(o-A)?s:o}function k(A){g==null||g.stop(),g=Qu(Object.assign(Object.assign({},A),{driver:u,onUpdate:E=>{var L;h==null||h(E),(L=A.onUpdate)===null||L===void 0||L.call(A,E)},onComplete:f,onStop:m}))}function B(A){k(Object.assign({type:"spring",stiffness:l,damping:i,restDelta:c},A))}if(w(n))B({from:n,velocity:t,to:_(n)});else{let A=a*t+n;typeof p<"u"&&(A=p(A));const E=_(A),L=E===s?-1:1;let P,K;const te=ie=>{P=K,K=ie,t=ed(ie-P,Tu().delta),(L===1&&ie>E||L===-1&&ie<E)&&B({from:ie,to:E,velocity:t})};k({type:"decay",from:n,velocity:t,timeConstant:r,power:a,restDelta:c,modifyTarget:p,onUpdate:w(A)?te:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const nd=(n,t)=>1-3*t+3*n,td=(n,t)=>3*t-6*n,sd=n=>3*n,No=(n,t,s)=>((nd(t,s)*n+td(t,s))*n+sd(t))*n,od=(n,t,s)=>3*nd(t,s)*n*n+2*td(t,s)*n+sd(t),AA=1e-7,CA=10;function BA(n,t,s,o,a){let r,l,i=0;do l=t+(s-t)/2,r=No(l,o,a)-n,r>0?s=l:t=l;while(Math.abs(r)>AA&&++i<CA);return l}const kA=8,DA=.001;function EA(n,t,s,o){for(let a=0;a<kA;++a){const r=od(t,s,o);if(r===0)return t;t-=(No(t,s,o)-n)/r}return t}const xo=11,mo=1/(xo-1);function SA(n,t,s,o){if(n===t&&s===o)return Yu;const a=new Float32Array(xo);for(let l=0;l<xo;++l)a[l]=No(l*mo,n,s);function r(l){let i=0,c=1;const p=xo-1;for(;c!==p&&a[c]<=l;++c)i+=mo;--c;const u=(l-a[c])/(a[c+1]-a[c]),h=i+u*mo,f=od(h,n,s);return f>=DA?EA(l,h,n,s):f===0?h:BA(l,i,i+mo,n,s)}return l=>l===0||l===1?l:No(r(l),t,o)}const Da={};class TA{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,s,o){if(!!this.subscriptions.size)for(const a of this.subscriptions)a(t,s,o)}clear(){this.subscriptions.clear()}}const pc=n=>!isNaN(parseFloat(n));class IA{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new TA,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:a}=Tu();this.lastUpdated!==a&&(this.timeDelta=o,this.lastUpdated=a),hr.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>hr.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=pc(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=pc(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ed(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(s=>{const{stop:o}=t(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function $A(n){return new IA(n)}const{isArray:FA}=Array;function OA(){const n=q({}),t=o=>{const a=r=>{!n.value[r]||(n.value[r].stop(),n.value[r].destroy(),delete n.value[r])};o?FA(o)?o.forEach(a):a(o):Object.keys(n.value).forEach(a)},s=(o,a,r)=>{if(n.value[o])return n.value[o];const l=$A(a);return l.onChange(i=>r[o]=i),n.value[o]=l,l};return Fm(t),{motionValues:n,get:s,stop:t}}const jA=n=>Array.isArray(n),vt=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Ea=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),PA=n=>({type:"spring",stiffness:550,damping:n===0?100:30,restDelta:.01,restSpeed:10}),Sa=()=>({type:"keyframes",ease:"linear",duration:300}),NA=n=>({type:"keyframes",duration:800,values:n}),uc={default:PA,x:vt,y:vt,z:vt,rotate:vt,rotateX:vt,rotateY:vt,rotateZ:vt,scaleX:Ea,scaleY:Ea,scale:Ea,backgroundColor:Sa,color:Sa,opacity:Sa},ad=(n,t)=>{let s;return jA(t)?s=NA:s=uc[n]||uc.default,{to:t,...s(t)}},dc={...so,transform:Math.round},rd={color:ln,backgroundColor:ln,outlineColor:ln,fill:ln,stroke:ln,borderColor:ln,borderTopColor:ln,borderRightColor:ln,borderBottomColor:ln,borderLeftColor:ln,borderWidth:pe,borderTopWidth:pe,borderRightWidth:pe,borderBottomWidth:pe,borderLeftWidth:pe,borderRadius:pe,radius:pe,borderTopLeftRadius:pe,borderTopRightRadius:pe,borderBottomRightRadius:pe,borderBottomLeftRadius:pe,width:pe,maxWidth:pe,height:pe,maxHeight:pe,size:pe,top:pe,right:pe,bottom:pe,left:pe,padding:pe,paddingTop:pe,paddingRight:pe,paddingBottom:pe,paddingLeft:pe,margin:pe,marginTop:pe,marginRight:pe,marginBottom:pe,marginLeft:pe,rotate:yt,rotateX:yt,rotateY:yt,rotateZ:yt,scale:fo,scaleX:fo,scaleY:fo,scaleZ:fo,skew:yt,skewX:yt,skewY:yt,distance:pe,translateX:pe,translateY:pe,translateZ:pe,x:pe,y:pe,z:pe,perspective:pe,transformPerspective:pe,opacity:Os,originX:ac,originY:ac,originZ:pe,zIndex:dc,filter:vr,WebkitFilter:vr,fillOpacity:Os,strokeOpacity:Os,numOctaves:dc},dl=n=>rd[n],ld=(n,t)=>t&&typeof n=="number"&&t.transform?t.transform(n):n;function MA(n,t){let s=dl(n);return s!==vr&&(s=oo),s.getAnimatableNone?s.getAnimatableNone(t):void 0}const LA={linear:Yu,easeIn:pl,easeInOut:Vu,easeOut:oA,circIn:Gu,circInOut:aA,circOut:Zu,backIn:ul,backInOut:lA,backOut:rA,anticipate:iA,bounceIn:dA,bounceInOut:hA,bounceOut:Po},hc=n=>{if(Array.isArray(n)){const[t,s,o,a]=n;return SA(t,s,o,a)}else if(typeof n=="string")return LA[n];return n},HA=n=>Array.isArray(n)&&typeof n[0]!="number",fc=(n,t)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&oo.test(t)&&!t.startsWith("url("));function RA(n){return Array.isArray(n.to)&&n.to[0]===null&&(n.to=[...n.to],n.to[0]=n.from),n}function JA({ease:n,times:t,delay:s,...o}){const a={...o};return t&&(a.offset=t),n&&(a.ease=HA(n)?n.map(hc):hc(n)),s&&(a.elapsed=-s),a}function KA(n,t,s){return Array.isArray(t.to)&&(n.duration||(n.duration=800)),RA(t),qA(n)||(n={...n,...ad(s,t.to)}),{...t,...JA(n)}}function qA({delay:n,repeat:t,repeatType:s,repeatDelay:o,from:a,...r}){return!!Object.keys(r).length}function WA(n,t){return n[t]||n.default||n}function UA(n,t,s,o,a){const r=WA(o,n);let l=r.from===null||r.from===void 0?t.get():r.from;const i=fc(n,s);l==="none"&&i&&typeof s=="string"&&(l=MA(n,s));const c=fc(n,l);function p(h){const f={from:l,to:s,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return r.type==="inertia"||r.type==="decay"?xA({...f,...r}):Qu({...KA(r,f,n),onUpdate:m=>{f.onUpdate(m),r.onUpdate&&r.onUpdate(m)},onComplete:()=>{o.onComplete&&o.onComplete(),a&&a(),h&&h()}})}function u(h){return t.set(s),o.onComplete&&o.onComplete(),a&&a(),h&&h(),{stop:()=>{}}}return!c||!i||r.type===!1?u:p}function zA(){const{motionValues:n,stop:t,get:s}=OA();return{motionValues:n,stop:t,push:(a,r,l,i={},c)=>{const p=l[a],u=s(a,p,l);if(i&&i.immediate){u.set(r);return}const h=UA(a,u,r,i,c);u.start(h)}}}function YA(n,t={},{motionValues:s,push:o,stop:a}=zA()){const r=b(t),l=q(!1);me(s,h=>{l.value=Object.values(h).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const i=h=>{if(!r||!r[h])throw new Error(`The variant ${h} does not exist.`);return r[h]},c=h=>(typeof h=="string"&&(h=i(h)),Promise.all(Object.entries(h).map(([f,m])=>{if(f!=="transition")return new Promise(g=>{o(f,m,n,h.transition||ad(f,h[f]),g)})}).filter(Boolean)));return{isAnimating:l,apply:c,set:h=>{const f=Va(h)?h:i(h);Object.entries(f).forEach(([m,g])=>{m!=="transition"&&o(m,g,n,{immediate:!0})})},leave:async h=>{let f;if(r&&(r.leave&&(f=r.leave),!r.leave&&r.initial&&(f=r.initial)),!f){h();return}await c(f),h()},stop:a}}const hl=typeof window<"u",VA=()=>hl&&window.onpointerdown===null,GA=()=>hl&&window.ontouchstart===null,ZA=()=>hl&&window.onmousedown===null;function XA({target:n,state:t,variants:s,apply:o}){const a=b(s),r=q(!1),l=q(!1),i=q(!1),c=D(()=>{let u=[];return a&&(a.hovered&&(u=[...u,...Object.keys(a.hovered)]),a.tapped&&(u=[...u,...Object.keys(a.tapped)]),a.focused&&(u=[...u,...Object.keys(a.focused)])),u}),p=D(()=>{const u={};Object.assign(u,t.value),r.value&&a.hovered&&Object.assign(u,a.hovered),l.value&&a.tapped&&Object.assign(u,a.tapped),i.value&&a.focused&&Object.assign(u,a.focused);for(const h in u)c.value.includes(h)||delete u[h];return u});a.hovered&&(de(n,"mouseenter",()=>r.value=!0),de(n,"mouseleave",()=>{r.value=!1,l.value=!1}),de(n,"mouseout",()=>{r.value=!1,l.value=!1})),a.tapped&&(ZA()&&(de(n,"mousedown",()=>l.value=!0),de(n,"mouseup",()=>l.value=!1)),VA()&&(de(n,"pointerdown",()=>l.value=!0),de(n,"pointerup",()=>l.value=!1)),GA()&&(de(n,"touchstart",()=>l.value=!0),de(n,"touchend",()=>l.value=!1))),a.focused&&(de(n,"focus",()=>i.value=!0),de(n,"blur",()=>i.value=!1)),me(p,o)}function QA({set:n,target:t,apply:s,variants:o,variant:a}){const r=b(o);me(()=>t,()=>{!r||(r.initial&&n("initial"),r.enter&&(a.value="enter"))},{immediate:!0,flush:"pre"})}function e9({state:n,apply:t}){me(n,s=>{s&&t(s)},{immediate:!0})}function n9({target:n,variants:t,variant:s}){const o=b(t);o&&(o.visible||o.visibleOnce)&&Sg(n,([{isIntersecting:a}])=>{o.visible?a?s.value="visible":s.value="initial":o.visibleOnce&&(a&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function t9(n,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&QA(n),t.syncVariants&&e9(n),t.visibilityHooks&&n9(n),t.eventListeners&&XA(n)}function id(n={}){const t=Oe({...n}),s=q({});return me(t,()=>{const o={};for(const[a,r]of Object.entries(t)){const l=dl(a),i=ld(r,l);o[a]=i}s.value=o},{immediate:!0,deep:!0}),{state:t,style:s}}function fl(n,t){me(()=>Tn(n),s=>{!s||t(s)},{immediate:!0})}const s9={x:"translateX",y:"translateY",z:"translateZ"};function cd(n={},t=!0){const s=Oe({...n}),o=q("");return me(s,a=>{let r="",l=!1;t&&(a.x||a.y||a.z)&&(r+=`translate3d(${[a.x||0,a.y||0,a.z||0].map(pe.transform).join(",")}) `,l=!0);for(const[i,c]of Object.entries(a)){if(t&&(i==="x"||i==="y"||i==="z"))continue;const p=dl(i),u=ld(c,p);r+=`${s9[i]||i}(${u}) `}t&&!l&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}const o9=["","X","Y","Z"],a9=["perspective","translate","scale","rotate","skew"],pd=["transformPerspective","x","y","z"];a9.forEach(n=>{o9.forEach(t=>{const s=n+t;pd.push(s)})});const r9=new Set(pd);function ml(n){return r9.has(n)}const l9=new Set(["originX","originY","originZ"]);function ud(n){return l9.has(n)}function i9(n){const t={},s={};return Object.entries(n).forEach(([o,a])=>{ml(o)||ud(o)?t[o]=a:s[o]=a}),{transform:t,style:s}}function dd(n){const{transform:t,style:s}=i9(n),{transform:o}=cd(t),{style:a}=id(s);return o.value&&(a.value.transform=o.value),a.value}function c9(n,t){let s,o;const{state:a,style:r}=id();return fl(n,l=>{o=l;for(const i of Object.keys(rd))l.style[i]===null||l.style[i]===""||ml(i)||ud(i)||(a[i]=l.style[i]);s&&Object.entries(s).forEach(([i,c])=>l.style[i]=c),t&&t(a)}),me(r,l=>{if(!o){s=l;return}for(const i in l)o.style[i]=l[i]},{immediate:!0}),{style:a}}function p9(n){const t=n.trim().split(/\) |\)/);if(t.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,a)=>{if(!a)return o;const[r,l]=a.split("("),c=l.split(",").map(u=>s(u.endsWith(")")?u.replace(")",""):u.trim())),p=c.length===1?c[0]:c;return{...o,[r]:p}},{})}function u9(n,t){Object.entries(p9(t)).forEach(([s,o])=>{const a=["x","y","z"];if(s==="translate3d"){if(o===0){a.forEach(r=>n[r]=0);return}o.forEach((r,l)=>n[a[l]]=r);return}if(o=parseFloat(o),s==="translateX"){n.x=o;return}if(s==="translateY"){n.y=o;return}if(s==="translateZ"){n.z=o;return}n[s]=o})}function d9(n,t){let s,o;const{state:a,transform:r}=cd();return fl(n,l=>{o=l,l.style.transform&&u9(a,l.style.transform),s&&(l.style.transform=s),t&&t(a)}),me(r,l=>{if(!o){s=l;return}o.style.transform=l},{immediate:!0}),{transform:a}}function h9(n,t){const s=Oe({}),o=l=>Object.entries(l).forEach(([i,c])=>s[i]=c),{style:a}=c9(n,o),{transform:r}=d9(n,o);return me(s,l=>{Object.entries(l).forEach(([i,c])=>{const p=ml(i)?r:a;p[i]&&p[i]===c||(p[i]=c)})},{immediate:!0,deep:!0}),fl(n,()=>t&&o(t)),{motionProperties:s,style:a,transform:r}}function f9(n={}){const t=b(n),s=q();return{state:D(()=>{if(!!s.value)return t[s.value]}),variant:s}}function hd(n,t={},s){const{motionProperties:o}=h9(n),{variant:a,state:r}=f9(t),l=YA(o,t),i={target:n,variant:a,variants:t,state:r,motionProperties:o,...l};return t9(i,s),i}const m9=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],g9=(n,t)=>{const s=n.props?n.props:n.data&&n.data.attrs?n.data.attrs:{};s&&(s.variants&&Va(s.variants)&&(t.value={...t.value,...s.variants}),m9.forEach(o=>{if(o==="delay"){if(s&&s[o]&&gm(s[o])){const a=s[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:a,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:a,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:a,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&Va(s[o])&&(t.value[o]=s[o])}))},Ta=n=>({created:(o,a,r)=>{const l=a.value&&typeof a.value=="string"?a.value:r.key;l&&Da[l]&&Da[l].stop();const i=q(n||{});typeof a.value=="object"&&(i.value=a.value),g9(r,i);const c=hd(o,i);o.motionInstance=c,l&&(Da[l]=c)},unmounted:o=>{o.motionInstance&&o.motionInstance.stop()},getSSRProps(o,a){let{initial:r}=o.value||a&&(a==null?void 0:a.props)||{};r=b(r);const l=y3((n==null?void 0:n.initial)||{},r||{});return!l||Object.keys(l).length===0?void 0:{style:dd(l)}}}),y9={initial:{opacity:0},enter:{opacity:1}},v9={initial:{opacity:0},visible:{opacity:1}},_9={initial:{opacity:0},visibleOnce:{opacity:1}},w9={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},b9={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},x9={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},A9={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},C9={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},B9={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},k9={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},D9={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},E9={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},S9={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},T9={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},I9={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},$9={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},F9={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},O9={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},j9={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},P9={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},N9={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},M9={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},L9={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},H9={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},R9={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},J9={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},K9={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},q9={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},W9={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},U9={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},_r={__proto__:null,fade:y9,fadeVisible:v9,fadeVisibleOnce:_9,pop:w9,popVisible:b9,popVisibleOnce:x9,rollBottom:$9,rollLeft:A9,rollRight:k9,rollTop:S9,rollVisibleBottom:F9,rollVisibleLeft:C9,rollVisibleRight:D9,rollVisibleTop:T9,rollVisibleOnceBottom:O9,rollVisibleOnceLeft:B9,rollVisibleOnceRight:E9,rollVisibleOnceTop:I9,slideBottom:q9,slideLeft:j9,slideRight:M9,slideTop:R9,slideVisibleBottom:W9,slideVisibleLeft:P9,slideVisibleRight:L9,slideVisibleTop:J9,slideVisibleOnceBottom:U9,slideVisibleOnceLeft:N9,slideVisibleOnceRight:H9,slideVisibleOnceTop:K9},z9=xe({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(n){var i;const t=hf(),s=Oe({});if(!n.is&&!t.default)return()=>gn("div",{});const o=D(()=>{let c;return n.preset&&(c=_r[n.preset]),c}),a=D(()=>({initial:n.initial,enter:n.enter,leave:n.leave,visible:n.visible,visibleOnce:n.visibleOnce,hovered:n.hovered,tapped:n.tapped,focused:n.focused})),r=D(()=>{const c={...a.value,...o.value||{},...n.variants||{}};return n.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(n.delay)),c}),l=D(()=>{if(!n.is)return;let c=n.is;return typeof l.value=="string"&&!Cd(c)&&(c=ko(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const c=p=>{var u;(u=p.variants)!=null&&u.initial&&p.set("initial"),setTimeout(()=>{var h,f,m;(h=p.variants)!=null&&h.enter&&p.apply("enter"),(f=p.variants)!=null&&f.visible&&p.apply("visible"),(m=p.variants)!=null&&m.visibleOnce&&p.apply("visibleOnce")},10)};Mr(()=>Object.entries(s).forEach(([p,u])=>c(u)))}return{slots:t,component:l,motionConfig:r,instances:s}},render({slots:n,motionConfig:t,instances:s,component:o}){var i;const a=dd(t.initial||{}),r=(c,p)=>(c.props||(c.props={}),c.props.style=a,c.props.onVnodeMounted=({el:u})=>{const h=hd(u,t);s[p]=h},c);if(o){const c=gn(o,void 0,n);return r(c,0),c}return(((i=n.default)==null?void 0:i.call(n))||[]).map((c,p)=>r(c,p))}});function Y9(n){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return n.toString().replace(/[A-Z]/g,a=>`-${a}`).toLowerCase().replace(/\s+/g,"-").replace(o,a=>s.charAt(t.indexOf(a))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const V9={install(n,t){if(n.directive("motion",Ta()),n.component("Motion",z9),!t||t&&!t.excludePresets)for(const s in _r){const o=_r[s];n.directive(`motion-${Y9(s)}`,Ta(o))}if(t&&t.directives)for(const s in t.directives){const o=t.directives[s];o.initial,n.directive(`motion-${s}`,Ta(o))}}};var mc;const Ps=typeof window<"u",G9=Object.prototype.toString,Z9=n=>G9.call(n)==="[object Object]";Ps&&((mc=window==null?void 0:window.navigator)==null?void 0:mc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function X9(n){return Pc()?(Nc(n),!0):!1}function Q9(n){var t;const s=b(n);return(t=s==null?void 0:s.$el)!=null?t:s}const eC=Ps?window:void 0,wr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},br="__vueuse_ssr_handlers__";wr[br]=wr[br]||{};wr[br];function nC(n,t={}){const{immediate:s=!0,window:o=eC}=t,a=q(!1);let r=null;function l(){!a.value||!o||(n(),r=o.requestAnimationFrame(l))}function i(){!a.value&&o&&(a.value=!0,l())}function c(){a.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&i(),X9(c),{isActive:a,pause:c,resume:i}}var gc;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(gc||(gc={}));const gl="vue-starport-injection",fd="vue-starport-options",tC={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},md={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var sC=Object.defineProperty,Mo=Object.getOwnPropertySymbols,gd=Object.prototype.hasOwnProperty,yd=Object.prototype.propertyIsEnumerable,yc=(n,t,s)=>t in n?sC(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,oC=(n,t)=>{for(var s in t||(t={}))gd.call(t,s)&&yc(n,s,t[s]);if(Mo)for(var s of Mo(t))yd.call(t,s)&&yc(n,s,t[s]);return n},vc=(n,t)=>{var s={};for(var o in n)gd.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&Mo)for(var o of Mo(n))t.indexOf(o)<0&&yd.call(n,o)&&(s[o]=n[o]);return s};const aC=xe({name:"StarportProxy",props:oC({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},md),setup(n,t){const s=$(gl),o=D(()=>s.getInstance(n.port,n.component)),a=q(),r=o.value.generateId(),l=q(!1);return o.value.isVisible||(o.value.land(),l.value=!0),ps(async()=>{o.value.el||(o.value.el=a.value,await Ze(),l.value=!0,o.value.rect.update())}),Go(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,l.value=!1,!o.value.options.keepAlive&&(await Ze(),await Ze(),!o.value.el&&s.dispose(o.value.port))}),me(()=>n,async()=>{o.value.props&&await Ze();const i=n,{props:c}=i,p=vc(i,["props"]);o.value.props=c||{},o.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const i=n,{initialProps:c,mountedProps:p}=i,u=vc(i,["initialProps","mountedProps"]),h=Le(u,(l.value?p:c)||{});return gn("div",Le(h,{id:r,ref:a,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?gn(t.slots.default):void 0)}}});var rC=Object.defineProperty,lC=Object.defineProperties,iC=Object.getOwnPropertyDescriptors,_c=Object.getOwnPropertySymbols,cC=Object.prototype.hasOwnProperty,pC=Object.prototype.propertyIsEnumerable,wc=(n,t,s)=>t in n?rC(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,uC=(n,t)=>{for(var s in t||(t={}))cC.call(t,s)&&wc(n,s,t[s]);if(_c)for(var s of _c(t))pC.call(t,s)&&wc(n,s,t[s]);return n},dC=(n,t)=>lC(n,iC(t));const hC=xe({name:"Starport",inheritAttrs:!0,props:md,setup(n,t){const s=q(!1);return ps(()=>{s.value=!0}),()=>{var l,i;const o=(i=(l=t.slots).default)==null?void 0:i.call(l);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const a=o[0];let r=a.type;return(!Z9(r)||ss(r))&&(r={render(){return o}}),gn(aC,dC(uC({},n),{key:n.port,component:Wo(r),props:a.props}))}}});function fC(n){const t=Oe({height:0,width:0,left:0,top:0,update:o,listen:r,pause:l,margin:"0px",padding:"0px"}),s=Ps?document.documentElement||document.body:void 0;function o(){if(!Ps)return;const i=Q9(n);if(!i)return;const{height:c,width:p,left:u,top:h}=i.getBoundingClientRect(),f=window.getComputedStyle(i),m=f.margin,g=f.padding;Object.assign(t,{height:c,width:p,left:u,top:s.scrollTop+h,margin:m,padding:g})}const a=nC(o,{immediate:!1});function r(){!Ps||(o(),a.resume())}function l(){a.pause()}return t}let mC=(n,t=21)=>(s=t)=>{let o="",a=s;for(;a--;)o+=n[Math.random()*n.length|0];return o};const bc=mC("abcdefghijklmnopqrstuvwxyz",5);function xc(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function gC(n){var t;return n.name||((t=n.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var yC=Object.defineProperty,Ac=Object.getOwnPropertySymbols,vC=Object.prototype.hasOwnProperty,_C=Object.prototype.propertyIsEnumerable,Cc=(n,t,s)=>t in n?yC(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,Ia=(n,t)=>{for(var s in t||(t={}))vC.call(t,s)&&Cc(n,s,t[s]);if(Ac)for(var s of Ac(t))_C.call(t,s)&&Cc(n,s,t[s]);return n};function wC(n,t,s={}){const o=gC(t),a=xc(o)||bc(),r=q(),l=q(null),i=q(!1),c=q(!1),p=$d(!0),u=q({}),h=D(()=>Ia(Ia(Ia({},tC),s),u.value)),f=q(0);let m;p.run(()=>{m=fC(r),me(r,async k=>{k&&(c.value=!0),await Ze(),r.value||(c.value=!1)})});const g=xc(n);function w(){return`starport-${a}-${g}-${bc()}`}const _=w();return Oe({el:r,id:_,port:n,props:l,rect:m,scope:p,isLanded:i,isVisible:c,options:h,liftOffTime:f,component:t,componentName:o,componentId:a,generateId:w,setLocalOptions(k={}){u.value=JSON.parse(JSON.stringify(k))},elRef(){return r},liftOff(){!i.value||(i.value=!1,f.value=Date.now(),m.listen())},land(){i.value||(i.value=!0,m.pause())}})}function bC(n){const t=Oe(new Map);function s(a,r){let l=t.get(a);return l||(l=wC(a,r,n),t.set(a,l)),l.component=r,l}function o(a){var r;(r=t.get(a))==null||r.scope.stop(),t.delete(a)}return{portMap:t,dispose:o,getInstance:s}}var xC=Object.defineProperty,AC=Object.defineProperties,CC=Object.getOwnPropertyDescriptors,Bc=Object.getOwnPropertySymbols,BC=Object.prototype.hasOwnProperty,kC=Object.prototype.propertyIsEnumerable,kc=(n,t,s)=>t in n?xC(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,DC=(n,t)=>{for(var s in t||(t={}))BC.call(t,s)&&kc(n,s,t[s]);if(Bc)for(var s of Bc(t))kC.call(t,s)&&kc(n,s,t[s]);return n},EC=(n,t)=>AC(n,CC(t));const SC=xe({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(n){const t=$(gl);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=D(()=>t.getInstance(n.port,n.component)),o=D(()=>{var l;return((l=s.value.el)==null?void 0:l.id)||s.value.id}),a=D(()=>{const l=Date.now()-s.value.liftOffTime,i=Math.max(0,s.value.options.duration-l),c=s.value.rect,p={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?EC(DC({},p),{zIndex:-1,display:"none"}):(s.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:s.value.options.easing}),p)}),r={};return()=>{const l=!!(s.value.isLanded&&s.value.el);return gn("div",{style:a.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},gn(tf,{to:l?`#${o.value}`:"body",disabled:!l},gn(s.value.component,Le(r,s.value.props))))}}}),TC=xe({name:"StarportCarrier",setup(n,{slots:t}){const s=bC($(fd,{}));return dt().appContext.app.provide(gl,s),()=>{var a;return[(a=t.default)==null?void 0:a.call(t),Array.from(s.portMap.entries()).map(([r,{component:l}])=>gn(SC,{key:r,port:r,component:l}))]}}});function IC(n={}){return{install(t){t.provide(fd,n),t.component("Starport",hC),t.component("StarportCarrier",TC)}}}function $C(n){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),n.app.use(V9),n.app.use(IC({keepAlive:!0}))}function un(n,t,s){var o,a;return(a=((o=n.instance)==null?void 0:o.$).provides[t])!=null?a:s}function FC(){return{install(n){n.directive("click",{name:"v-click",mounted(t,s){var u,h,f,m;if($s.value||((u=un(s,Es))==null?void 0:u.value))return;const o=un(s,At),a=un(s,Ds),r=un(s,za),l=s.modifiers.hide!==!1&&s.modifiers.hide!=null,i=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((h=o==null?void 0:o.value)==null?void 0:h.length)||0,p=i?em:ha;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(t))&&o.value.push(t),s.value===null&&(s.value=o==null?void 0:o.value.length),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[t]);else if(!((m=r==null?void 0:r.value.get(s.value))!=null&&m.includes(t))){const g=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[t].concat(g))}t==null||t.classList.toggle(wt,!0),a&&me(a,()=>{var k;const g=(k=a==null?void 0:a.value)!=null?k:0,w=s.value!=null?g>=s.value:g>c;t.classList.contains(fa)||t.classList.toggle(p,!w),l!==!1&&l!==void 0&&t.classList.toggle(p,w),t.classList.toggle(ys,!1);const _=r==null?void 0:r.value.get(g);_==null||_.forEach((B,A)=>{B.classList.toggle(uo,!1),A===_.length-1?B.classList.toggle(ys,!0):B.classList.toggle(uo,!0)}),t.classList.contains(ys)||t.classList.toggle(uo,w)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(wt,!1);const o=un(s,At);o!=null&&o.value&&Ya(o.value,t)}}),n.directive("after",{name:"v-after",mounted(t,s){var i,c;if($s.value||((i=un(s,Es))==null?void 0:i.value))return;const o=un(s,At),a=un(s,Ds),r=un(s,za),l=o==null?void 0:o.value.length;s.value===void 0&&(s.value=o==null?void 0:o.value.length),r!=null&&r.value.has(s.value)?(c=r==null?void 0:r.value.get(s.value))==null||c.push(t):r==null||r.value.set(s.value,[t]),t==null||t.classList.toggle(wt,!0),a&&me(a,()=>{var u,h,f;const p=((u=a.value)!=null?u:0)>=((f=(h=s.value)!=null?h:l)!=null?f:0);t.classList.contains(fa)||t.classList.toggle(ha,!p),t.classList.toggle(ys,!1),t.classList.contains(ys)||t.classList.toggle(uo,p)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(wt,!0)}}),n.directive("click-hide",{name:"v-click-hide",mounted(t,s){var l,i,c;if($s.value||((l=un(s,Es))==null?void 0:l.value))return;const o=un(s,At),a=un(s,Ds),r=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(t))&&o.value.push(t),t==null||t.classList.toggle(wt,!0),a&&me(a,()=>{var h;const p=(h=a==null?void 0:a.value)!=null?h:0,u=s.value!=null?p>=s.value:p>r;t.classList.toggle(ha,u),t.classList.toggle(fa,u)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(wt,!1);const o=un(s,At);o!=null&&o.value&&Ya(o.value,t)}})}}}function OC(n,t){const s=hu(n),o=fu(t,s.currentRoute,s.currentPage);return{nav:{...s,...o,downloadPDF:cr,next:it,nextSlide:zs,openInEditor:h3,prev:ct,prevSlide:Ys},configs:Ae,themeConfigs:D(()=>Ae.themeConfig)}}function jC(){return{install(n){const t=OC(Qn,Fn);n.provide(O,Oe(t))}}}const hs=Lf(m3);hs.use(vn);hs.use(Yf());hs.use(FC());hs.use(jC());$C({app:hs,router:vn});hs.mount("#app");export{xs as $,se as A,Be as B,tn as C,z0 as D,op as E,De as F,ap as G,Fn as H,jo as I,i3 as J,xa as K,ma as L,qs as M,wa as N,Fp as O,X1 as P,Vr as Q,V1 as R,Gr as S,We as T,ku as U,tv as V,na as W,Nn as X,PC as Y,wn as Z,cu as _,e as a,ho as a0,Xs as a1,Dt as a2,Kn as a3,ar as a4,C0 as a5,B0 as a6,k0 as a7,E0 as a8,Lr as a9,Ep as aa,HC as ab,on as ac,Pv as ad,Ip as ae,S0 as af,Go as ag,q0 as ah,D as b,W as c,xe as d,O as e,fn as f,j as g,b as h,$ as i,N0 as j,d3 as k,Ae as l,Gf as m,Ne as n,x as o,ps as p,Oe as q,q as r,NC as s,Ot as t,MC as u,LC as v,me as w,z as x,Ue as y,M as z};
