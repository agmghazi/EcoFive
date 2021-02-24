/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{g as t,a as e}from"./chunks/object.js";import"./core/lang.js";import"./config.js";import{L as n,i as r}from"./chunks/Logger.js";import{r as i}from"./chunks/string.js";import{createDeferred as u}from"./core/promiseUtils.js";import"./chunks/Message.js";import l from"./core/Error.js";import"./core/urlUtils.js";import"./chunks/jsonMap.js";import{g as h,b as d}from"./chunks/locale.js";export{g as getLocale,o as onLocaleChange,p as prefersRTL,s as setLocale}from"./chunks/locale.js";import{f as m,a as w}from"./chunks/number.js";export{c as convertDateFormatToIntlOptions,b as convertNumberFormatToIntlOptions,a as formatDate,f as formatNumber}from"./chunks/number.js";import"./kernel.js";import j from"./request.js";import{g as _}from"./chunks/assets.js";const k=n.getLogger("esri.intl");function L(e,n,r={}){const{format:s={}}=r;return i(e,(e=>function(e,n,r){let s,o;const a=e.indexOf(":");-1===a?s=e.trim():(s=e.slice(0,a).trim(),o=e.slice(a+1).trim());if(!s)return"";const i=t(s,n);if(null==i)return"";const c=r[o]||r[s];if(c)return function(t,e){switch(e.type){case"date":return w(t,e.intlOptions);case"number":return m(t,e.intlOptions);default:return k.warn("missing format descriptor for key {key}"),y(t)}}(i,c);if(o)return function(t,e){switch(e.toLowerCase()){case"dateformat":return w(t);case"numberformat":return m(t);default:return k.warn(`inline format is unsupported since 4.12: ${e}`),/^(dateformat|datestring)/i.test(e)?w(t):/^numberformat/i.test(e)?m(t):y(t)}}(i,o);return y(i)}(e,n,s)))}function y(t){switch(typeof t){case"string":return t;case"number":return m(t);case"boolean":return""+t;default:return t instanceof Date?w(t):""}}const $=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,U=new Set(["ar","bs","ca","cs","da","de","el","en","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"]),x=[],R=new Map;function v(t){if(!x.includes(t)){for(const e of R.keys())M(t.pattern,e)&&R.delete(e);x.unshift(t)}}async function A(t){const e=h();R.has(t)||R.set(t,async function(t,e){const n=[];for(const r of x)if(M(r.pattern,t))try{return await r.fetchMessageBundle(t,e)}catch(t){n.push(t)}if(n.length)throw new l("intl:message-bundle-error",`Errors occurred while loading "${t}"`,{errors:n});throw new l("intl:no-message-bundle-loader",`No loader found for message bundle "${t}"`)}(t,e));const n=R.get(t);return await T.add(n),n}function B(t){if(!$.test(t))return null;const[,e,n]=$.exec(t),r=e+(n?"-"+n.toUpperCase():"");return U.has(r)?r:U.has(e)?e:null}function M(t,e){return"string"==typeof t?e.startsWith(t):t.test(e)}d((()=>{R.clear()}));const T=new class{constructor(){this._numLoading=0}async waitForAll(){this._dfd&&await this._dfd.promise}add(t){return this._increase(),t.then((()=>this._decrease()),(()=>this._decrease())),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=u())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}};async function z(t){if(r(E.fetchBundleAsset))return E.fetchBundleAsset(t);return(await j(t,{responseType:"json"})).data}class O{constructor({base:t="",pattern:n,location:r=new URL(window.location.href)}){let s;s="string"==typeof r?t=>new URL(t,new URL(r,e.location)).href:r instanceof URL?t=>new URL(t,r).href:r,this.pattern="string"==typeof n?new RegExp(`^${n}`):n,this.getAssetUrl=s,t=t?t.endsWith("/")?t:t+"/":"",this.matcher=new RegExp(`^${t}(?:(.*)/)?(.*)$`)}fetchMessageBundle(t,e){return async function(t,e,n,r){const s=e.exec(n);if(!s)throw new l("esri-intl:invalid-bundle",`Bundle id "${n}" is not compatible with the pattern "${e}"`);const o=s[1]?`${s[1]}/`:"",a=s[2],i=B(r),c=`${o}${a}.json`,u=i?`${o}${a}_${i}.json`:c;let f;try{f=await z(t(u))}catch(e){if(u===c)throw e;try{f=await z(t(c))}catch{throw new l("intl:unknown-bundle",`Bundle "${n}" cannot be loaded`,{error:e})}}return f}(this.getAssetUrl,this.matcher,t,e)}}function C(t){return new O(t)}const E={};v(C({pattern:"esri/",location:_}));export{C as createJSONLoader,A as fetchMessageBundle,B as normalizeMessageBundleLocale,v as registerMessageBundleLoader,L as substitute};