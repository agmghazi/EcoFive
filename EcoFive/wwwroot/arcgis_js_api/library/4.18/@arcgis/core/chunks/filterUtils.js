/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./object.js";import{i as t,b as l}from"./Logger.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import n from"../core/Accessor.js";import{g as a}from"../core/scheduling.js";import{createAbortController as o,all as r,throwIfAborted as i,isAbortError as u}from"../core/promiseUtils.js";import"./ensureType.js";import{subclass as d}from"../core/accessorSupport/decorators/subclass.js";import h from"../core/Collection.js";import{r as c}from"./collectionUtils.js";import"../core/urlUtils.js";import{g as f}from"./resourceExtension.js";import p from"../core/Handles.js";import{B as m,a as y,b as v}from"./BuildingFilterBlock.js";const w=e=>t=>{var l;const s=e.toLowerCase();return null!=(l=t.sublayers.find((e=>{var t;return(null==(t=e.modelName)?void 0:t.toLowerCase())===s})))?l:null},g=w("fullmodel"),_=w("overview");function b(e){const l=g(e);t(l)&&(l.visible=!0);const s=_(e);t(s)&&(s.visible=!1)}function V(e,s){const n=function(e,t){var l,s,n;const a=null!=(l=null==(s=e.summaryStatistics)?void 0:s.fields)?l:[],o=t.toLowerCase();return null!=(n=a.find((e=>{var t;return(null==(t=e.modelName)?void 0:t.toLowerCase())===o})))?n:null}(e,s);if(l(n))return null;const a=n.fieldName;if(l(a)||!a)return null;const o=function(e,t){for(const l of e.allSublayers.items){const e="building-component"===l.type?l.getFieldDomain(t):null;if(e&&"coded-value"===e.type)return e}return null}(e,a),r=new Map;for(const e of null!=(i=n.mostFrequentValues)?i:[]){var i;"number"==typeof e&&r.set(e,t(o)?o.getName(e):String(e))}return{fieldName:a,fieldValueMap:r}}function x(){let e=o();return async t=>{e.abort(),e=o();const l={signal:e.signal},s=t.toArray().map((e=>async function(e,t){await e.load(t),await e.loadAll(),i(t),e.summaryStatistics&&await e.summaryStatistics.load(t)}(e,l)));await r(s),i(l)}}function I(e){const t={fieldValueMap:new Map,allowedValues:[]};for(const l of e){const e=l.fieldValueMap,s=t.fieldValueMap;e.forEach(((e,l)=>{s.has(l)||(s.set(l,e),t.allowedValues.push(l))}))}return t.allowedValues.sort(((e,t)=>e-t)),t}function j(e,t){return t.allowedValues.length>0?function(e,t){if(0===t.length)return e;if(e===1/0)return t[t.length-1];if(e===-1/0)return t[0];let l=t[0],s=Math.abs(l-e);for(const n of t){const t=Math.abs(n-e);t<s&&(l=n,s=t)}return l}(e,t.allowedValues):null}let L=class extends n{constructor(e){super(e),this.state="disabled",this._handles=new p,this._domainInfo=I([]),this._loadLayers=x(),this.layers=new h}initialize(){this._handles.add(this.layers.on("change",(()=>this._onLayersChange()))),this._onLayersChange()}destroy(){this._set("state","disabled"),this._handles.destroy()}get enabled(){return this.allowedValues.length>0&&this._get("enabled")}set enabled(e){e!==this.enabled&&this.allowedValues.length>0&&this._set("enabled",e)}set value(e){if(e===this.value)return;const t=j(e,this);l(t)||this._set("value",t)}get min(){return function(e){let l=null;for(const s of e)l=t(l)?Math.min(l,s):s;return l}(this.allowedValues)}get max(){return function(e){let l=null;for(const s of e)l=t(l)?Math.max(l,s):s;return l}(this.allowedValues)}get allowedValues(){return this._domainInfo.allowedValues}get hasNext(){if(!this.enabled)return!0;const e=this._valueIndex;return e>=0&&e<this.allowedValues.length-1}get hasPrevious(){return!this.enabled||this._valueIndex>0}set layers(e){const t=this._get("layers");this._set("layers",c(e,t))}get filterExpressions(){return{solid:null,xRay:null}}get _valueIndex(){return a(this.allowedValues,this.value)}select(e){const l=j(e,this);t(l)&&(this.enabled=!0,this.value=e)}clear(){this.enabled=!1}next(){if(0!==this.allowedValues.length)return this.enabled?void(this.hasNext&&(this.value=this.allowedValues[this._valueIndex+1])):(this.enabled=!0,void(this.value=this.allowedValues[0]))}previous(){if(0!==this.allowedValues.length)return this.enabled?void(this.hasPrevious&&(this.value=this.allowedValues[this._valueIndex-1])):(this.enabled=!0,void(this.value=this.allowedValues[this.allowedValues.length-1]))}getValueLabel(e){var t;return 0===this.layers.length?null:null!=(t=this._domainInfo.fieldValueMap.get(e))?t:null}async _onLayersChange(){if(this._set("state","loading"),this._domainInfo=I([]),0!==this.layers.length)try{await this._loadLayers(this.layers),this._setup(),this._set("state","ready")}catch(e){u(e)||this._set("state","failed")}}};e([s({value:!1,nonNullable:!0,dependsOn:["allowedValues"]})],L.prototype,"enabled",null),e([s({value:0,nonNullable:!0})],L.prototype,"value",null),e([s({readOnly:!0,dependsOn:["allowedValues"]})],L.prototype,"min",null),e([s({readOnly:!0,dependsOn:["allowedValues"]})],L.prototype,"max",null),e([s({readOnly:!0,dependsOn:["_domainInfo"]})],L.prototype,"allowedValues",null),e([s({readOnly:!0,dependsOn:["allowedValues","_valueIndex","enabled"]})],L.prototype,"hasNext",null),e([s({readOnly:!0,dependsOn:["_valueIndex","enabled"]})],L.prototype,"hasPrevious",null),e([s({type:h,nonNullable:!0})],L.prototype,"layers",null),e([s({nonNullable:!0})],L.prototype,"state",void 0),e([s({readOnly:!0,dependsOn:["value","allowedValues"]})],L.prototype,"_valueIndex",null),e([s()],L.prototype,"_domainInfo",void 0),L=e([d("esri.widgets.BuildingExplorer.BuildingNumericFilterViewModel")],L);var N=L;function O(){return`${f()}__BUILDING_EXPLORER_FILTER__`}function M(e){const t="string"==typeof e?e:e.id;return!!t&&-1!==t.indexOf("__BUILDING_EXPLORER_FILTER__")}function E(e,l){for(const s of e.items)for(const e of s.filters.items){if(!M(e))continue;const s=l(e);if(t(s))return s}return null}function B(e,t){l(t)||e.forEach((e=>{e.filters=e.filters.filter((e=>!M(e))).concat([t]),e.activeFilterId=t.id}))}function C(e){const t=R(e);return t?new m({filterExpression:t,filterMode:new y}):null}function F(e){const t=R(e);return t?new m({filterExpression:t,filterMode:new v}):null}function R(e){return e.filter((e=>!!e)).map((e=>`(${e})`)).join(" AND ")}export{N as B,C as a,O as b,x as c,b as d,V as e,g as f,F as g,I as h,E as i,B as s};