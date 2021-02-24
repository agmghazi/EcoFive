/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./object.js";import{L as t,b as r,i as s}from"./Logger.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import i from"../core/Accessor.js";import{o,q as a}from"../core/scheduling.js";import c from"../core/Error.js";import"./ensureType.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import{E as u}from"./Evented.js";import"../core/urlUtils.js";import"./resourceExtension.js";import p from"../geometry/SpatialReference.js";import{canProject as d,project as y}from"../geometry/support/webMercatorUtils.js";import f from"../geometry/Extent.js";import{t as h,a as g,f as m}from"./vec3.js";import"../geometry.js";import j from"../core/Handles.js";import{C as b}from"./unitUtils.js";import{whenOnce as S}from"../core/watchUtils.js";import{k as w,a as E,d as x,c as I,i as R}from"./aaBoundingRect.js";import{load as O,project as F,projectBoundingSphere as v,projectVectorToVector as Q}from"../geometry/projection.js";import{WhereClause as _}from"../core/sql/WhereClause.js";import{c as k}from"./vec4f64.js";import M from"../tasks/support/FeatureSet.js";import C from"../tasks/support/Query.js";import{b as G}from"./OptimizedGeometry.js";import{c as J,t as N}from"./aaBoundingBox.js";import A from"../views/layers/support/FeatureFilter.js";import{g as W}from"./centroid.js";import{Q as V}from"./QueryEngine.js";import{p as B,j as L,n as T}from"./I3SUtil.js";const q=t.getLogger("esri.views.3d.layers.i3s.I3SMeshViewFilter");let D,U=class extends i{constructor(e){super(e),this._projectionEngineLoaded=!1}initialize(){S(this,"filter.geometry").then((()=>this.loadAsyncModule(async function(){if(D)return D;return D=await import("../geometry/geometryEngine.js"),D}().then((e=>{this.destroyed||(this._geometryEngine=e,this.applyFilters())})))))}get sortedObjectIds(){if(r(this.filter.objectIds))return null;const e=new Float64Array(this.filter.objectIds);return e.sort(),e}get parsedWhereClause(){const e=s(this.filter)?this.filter.where:null;if(r(e)||!e)return null;try{return _.create(e,this.layerFieldsIndex)}catch(e){q.error(`Failed to parse filter where clause: ${e}`)}return null}addFilters(e,t,r,n){const i=this.sortedObjectIds;s(i)&&e.push((e=>B(i,!0,e))),this.addSqlFilter(e,this.parsedWhereClause);const o=this.parsedGeometry;if(s(o)){const s=this.spatialRelationship;e.push(((e,i)=>function(e,t,r,s,n,i,o){const a=i[0].spatialReference||s.spatialReference;if(!v(t.node.mbs,n,$,a))return void q.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const c=function(e,t,r,s,n){const i=t.renderSpatialReference,o=new Map,a={rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],hasZ:!1,hasM:!1,type:"polygon",spatialReference:r};a.rings[0][3]=a.rings[0][0];const c={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let l,u;switch(e){case"intersects":l=(e,t)=>D.intersects(e,t)?0:2,u=P;break;case"contains":l=(e,t)=>D.contains(e,t)?2:1,u=P;break;case"disjoint":default:l=(e,t)=>D.disjoint(e,t)?2:1,u=K}return{collection:s,object:n,type:e,maskSR:r,renderSR:i,aabbCache:o,triangle:a,positions:c,triangleTest:l,geometryTest:u}}(o,s,a,r,t.objectHandle),l=function(e,t){const r={x:e[0],y:e[1],hasZ:!1,hasM:!1,type:"point",spatialReference:t.maskSR},s=t.maskSR.isWGS84||t.maskSR.isWebMercator?D.geodesicBuffer(r,e[3],1):D.buffer(r,e[3],1);return s.type="polygon",s}($,c);for(const r of i){if(0===e.length)return;switch(H(r,l,o)){case 1:return void(e.length=0);case 0:continue}L(e,t.featureIds,(e=>X(r,e,c)))}}(e,i,n,t,r,o,s)))}}get parsedGeometry(){if(r(this.filter))return null;if(!this._geometryEngine)return null;const{geometry:e}=this.filter;if(r(e))return null;const{distance:t,units:s}=this.filter,n=this.spatialRelationship,i="mesh"===e.type?e.extent:e;if(r(t)||0===t)return z(i,n);const o=s||b(i.spatialReference);if(i.spatialReference.isWGS84){return z(this._geometryEngine.geodesicBuffer(i,t,o),n)}if(d(i,p.WGS84)){return z(y(this._geometryEngine.geodesicBuffer(y(i,p.WGS84),t,o),i.spatialReference),n)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule(O().then((()=>this._projectionEngineLoaded=!0))),!this._projectionEngineLoaded))return null;let a=null;try{a=F(i,p.WGS84)}catch(e){}if(a)try{a=F(this._geometryEngine.geodesicBuffer(a,t,o),i.spatialReference)}catch(e){a=null}return a||q.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${i.spatialReference.wkid}) to WGS84.`),z(a,n)}get spatialRelationship(){return s(this.filter)?this.filter.spatialRelationship:"intersects"}static checkSupport(e){return e.timeExtent?(q.warn("Filters with a timeExtent are not supported for mesh scene layers"),!1):null!=(t=e.spatialRelationship)&&Z.indexOf(t)>=0||(q.warn(`Filters with spatialRelationship other than ${Z.join(", ")} are not supported for mesh scene layers`),!1);var t}};e([n({type:A})],U.prototype,"filter",void 0),e([n()],U.prototype,"layerFieldsIndex",void 0),e([n()],U.prototype,"loadAsyncModule",void 0),e([n()],U.prototype,"applyFilters",void 0),e([n()],U.prototype,"addSqlFilter",void 0),e([n({readOnly:!0})],U.prototype,"sortedObjectIds",null),e([n({readOnly:!0})],U.prototype,"parsedWhereClause",null),e([n({readOnly:!0})],U.prototype,"parsedGeometry",null),e([n({readOnly:!0})],U.prototype,"spatialRelationship",null),e([n({})],U.prototype,"_projectionEngineLoaded",void 0),e([n({})],U.prototype,"_geometryEngine",void 0),U=e([l("esri.views.3d.layers.i3s.I3SMeshViewFilter")],U);const Z=["contains","intersects","disjoint"];function z(e,t){if(!e)return null;if("disjoint"===t&&"polygon"===e.type){const t=new Array(e.rings.length);for(let r=0;r<e.rings.length;++r){const s=w(1/0,1/0,-1/0,-1/0);E(s,e.rings[r]),t[r]={type:"polygon",rings:[e.rings[r]],spatialReference:e.spatialReference,aabr:s}}t.sort(((e,t)=>e.aabr[0]-t.aabr[0]));const r=new Set,s=new a;for(let e=0;e<t.length;++e){const n=t[e];for(let s=e+1;s<t.length;++s){const e=t[s];if(e.aabr[0]>=n.aabr[2])break;r.add(e)}r.forEach((e=>{if(n!==e)if(e.aabr[2]<=n.aabr[0])r.delete(e);else if(D.intersects(n,e)){n.rings=n.rings.concat(e.rings),x(n.aabr,e.aabr),delete n._geVersion,r.delete(e);const i=o(t,e,t.length,s);t.splice(i,1)}})),r.add(n)}for(const e of t)delete e.aabr;return t}return[e]}const $=[0,0,0,0];function H(e,t,r){switch(r){case"intersects":case"contains":return P(e,t);case"disjoint":return K(e,t)}}function P(e,t){return D.intersects(e,t)?D.contains(e,t)?0:2:1}function K(e,t){return D.intersects(e,t)?D.contains(e,t)?1:2:0}function X(e,t,r){const{collection:s,object:n,renderSR:i,maskSR:o,geometryTest:a,aabbCache:c}=r;let l=c.get(t);if(!l){const e=s.getObjectTransform(n);s.getComponentAabb(n,t,Y);const r=[[Y[0],Y[1],0],[Y[0],Y[4],0],[Y[3],Y[4],0],[Y[3],Y[1],0]];for(let t=0;t<4;++t)h(r[t],r[t],e.rotationScale),g(r[t],r[t],e.position),Q(r[t],i,r[t],o);l={rings:[r],hasZ:!1,hasM:!1,type:"polygon",spatialReference:o},l.rings[0][4]=l.rings[0][0],c.set(t,l)}switch(a(e,l)){case 1:return!1;case 0:return!0}const{triangle:u,triangleTest:p,positions:d}=r,y=u.rings[0][0],f=u.rings[0][1],j=u.rings[0][2],b=s.getObjectTransform(n);s.getComponentPositions(n,t,d);const{indices:S,data:w,stride:E,startIndex:x,endIndex:I}=d;for(let t=x;t<I;t+=3){const r=E*S[t+0],s=E*S[t+1],n=E*S[t+2];m(y,w[r+0],w[r+1],w[r+2]),m(f,w[s+0],w[s+1],w[s+2]),m(j,w[n+0],w[n+1],w[n+2]),h(y,y,b.rotationScale),h(f,f,b.rotationScale),h(j,j,b.rotationScale),g(y,y,b.position),g(f,f,b.position),g(j,j,b.position),Q(y,i,y,o),Q(f,i,f,o),Q(j,i,j,o);const a=f[0]-y[0],c=f[1]-y[1],l=j[0]-y[0],d=j[1]-y[1];if(!(Math.abs(a*d-c*l)<2.3283064365386963e-10))switch(delete u._geVersion,p(e,u)){case 1:return!1;case 0:return!0}}switch(r.type){case"intersects":return!1;case"contains":case"disjoint":default:return!0}}const Y=J(),ee=V;let te=class extends i{constructor(e){super(e),this._dataQueryEngineInstance=null,this._handles=new j}get defaultQueryJSON(){return new C({outSpatialReference:this.spatialReference}).toJSON()}get dataQueryEngine(){return this.ensureDataQueryEngine()}initialize(){this._handles.add(this.layerView.on("visible-geometry-changed",(()=>this.spatialIndex.events.emit("changed"))))}destroy(){this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null),this._handles&&(this._handles.destroy(),this._handles=null),this._set("layerView",null)}async executeQueryForCount(e,t){return this.dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),t)}async executeQueryForExtent(e,t){const{count:r,extent:s}=await this.dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),t);return{count:r,extent:f.fromJSON(s)}}async executeQueryForIds(e,t){return this.dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),t)}async executeQuery(e,t){const r=this._ensureQueryJSON(e);if(r.returnGeometry)throw new c("feature-store:unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(r.returnCentroid)throw new c("feature-store:unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const s=await this.dataQueryEngine.executeQuery(r,t),n=M.fromJSON(s);return n.features.forEach((e=>{e.geometry=null})),n}_ensureQueryJSON(e){if(r(e))return this.defaultQueryJSON;const t=e.toJSON();return t.outSpatialReference||(e.outSpatialReference=this.spatialReference),t}ensureDataQueryEngine(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e=this.layer.objectIdField||"OBJECTID",t=this.layer.fields.map((e=>e.toJSON())),r=this.layerView.view.resourceController.scheduler,s=this.spatialReference.toJSON(),n=this.task,i=this.spatialIndex;return this._dataQueryEngineInstance=new ee({hasZ:!0,hasM:!1,geometryType:"esriGeometryPolygon",fields:t,timeInfo:null,spatialReference:s,objectIdField:e,featureStore:i,scheduler:r,task:n}),this._dataQueryEngineInstance}};e([n({constructOnly:!0})],te.prototype,"layerView",void 0),e([n({constructOnly:!0})],te.prototype,"task",void 0),e([n({constructOnly:!0})],te.prototype,"spatialIndex",void 0),e([n({readOnly:!0,aliasOf:"layerView.view.spatialReference"})],te.prototype,"spatialReference",void 0),e([n({readOnly:!0,aliasOf:"layerView.i3slayer"})],te.prototype,"layer",void 0),e([n({readOnly:!0,dependsOn:["spatialReference"]})],te.prototype,"defaultQueryJSON",null),te=e([l("esri.views.3d.layers.i3s.I3SQueryEngine")],te);var re=te;class se{constructor(e){this.objectIdField=e.objectIdField,this.getFeatureExtent=e.getFeatureExtent}getObjectId(e){return e.id}getAttributes(e){const{meta:t,index:r}=e,n={};this.objectIdField&&(n[this.objectIdField]=e.id);const i=s(t.attributeInfo)&&t.attributeInfo.attributeData;if(s(i))for(const e of Object.keys(i))n[e]=T(i[e],r);return n}getAttribute(e,t){if(t===this.objectIdField)return e.id;const{meta:r,index:n}=e,i=s(r.attributeInfo)&&r.attributeInfo.attributeData;return s(i)?T(i[t],n):null}getGeometry(e){if(e.geometry)return e.geometry;const[t,r,s,n,i]=this.getFeatureExtent(e,ne);return new G([5],[t,r,s,n,r,s,n,i,s,t,i,s,t,r,s])}getCentroid(e,t){if(e.geometry)return W(new G,e.geometry,t.hasZ,t.hasM);const[r,s,n,i,o,a]=this.getFeatureExtent(e,ne);return new G([0],[(r+i)/2,(s+o)/2,(n+a)/2])}cloneWithGeometry(e,t){const{id:r,index:s,meta:n}=e;return{id:r,index:s,meta:n,geometry:t}}}const ne=J();let ie=class extends i{constructor(e){super(e),this.events=new u}destroy(){}forEach(e){this.forAllFeatures((t=>(e(t),1)))}forEachBounds(e,t,r){const s=this.getFeatureExtent;for(const n of e)t(s(n,r))}forEachInBounds(e,t){this.forAllFeatures((r=>{const s=this.getFeatureExtent(r,ae);return R(e,N(s,ce))&&t(r),1}),(t=>{if(v(t.node.mbs,this.sourceSpatialReference,oe,this.viewSpatialReference),oe[0]>=e[0]&&oe[2]<=e[2]&&oe[1]>=e[1]&&oe[3]<=e[3])return 1;const r=Math.max(e[0],Math.min(oe[0],e[2])),s=Math.max(e[1],Math.min(oe[1],e[3])),n=oe[0]-r,i=oe[1]-s;return n*n+i*i<=oe[3]*oe[3]?1:2}))}};e([n({constructOnly:!0})],ie.prototype,"featureAdapter",void 0),e([n({constructOnly:!0})],ie.prototype,"forAllFeatures",void 0),e([n({constructOnly:!0})],ie.prototype,"getFeatureExtent",void 0),e([n({constructOnly:!0})],ie.prototype,"sourceSpatialReference",void 0),e([n({constructOnly:!0})],ie.prototype,"viewSpatialReference",void 0),ie=e([l("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],ie);const oe=k(),ae=J(),ce=I();var le=ie;export{U as I,re as a,le as b,se as c};