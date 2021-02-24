// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/has","../../../../../core/promiseUtils","./BaseFeatureSource"],function(m,v,c,n,f){const b=c("esri-featurelayer-webgl");c=c("esri-mobile");var w=b&&"object"===typeof b&&null!=b.maxDrillLevel?b.maxDrillLevel:c?1:4,x=b&&"object"===typeof b&&null!=b.maxRecordCountFactor?b.maxRecordCountFactor:c?1:3;f=function(p){function g(a){return p.call(this,a)||this}v._inheritsLoose(g,p);g.prototype._fetchDataTile=async function(a){const y=
this._serviceInfo.capabilities.query.supportsMaxRecordCountFactor,q=this._subscriptions.get(a.key.id),r=q.signal,z=a.getQuantizationParameters();let h=0;const l=async(k,e)=>{const A=this._sourceQueryInfo,t=this._createQuery(k,{maxRecordCountFactor:y?x:void 0,returnExceededLimitFeatures:!1,quantizationParameters:z});h++;try{const d=await this._queue.push({tile:a,query:t,signal:r,depth:e});h--;n.throwIfAborted(r);if(d)if(A!==this._sourceQueryInfo)l(k,e);else if(d.exceededTransferLimit&&e<w)for(const B of k.createChildTiles())l(B,
e+1);else{var u={tile:a,id:a.id,features:d,end:0===h};q.requests.done.push({query:t,request:u});this._onRequest(u,"new")}}catch(d){n.isAbortError(d)||this._onRequest({tile:a,id:a.id,features:null,end:!0},"new")}};l(a,0)};return g}(f.BaseFeatureSource);m.DrillDownFeatureSource=f;Object.defineProperty(m,"__esModule",{value:!0})});