// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/promiseUtils ../../../geometry/SpatialReference ../../../Graphic ../../../layers/support/Field ../../support/Scheduler ./WorkerHandle".split(" "),function(g,k,l,h,m,n,p,q){let u=function(){function e(a){this._handle=new r(a);this._frameTask=a.registerTask(p.Task.REMOTE_CLIENT,()=>{},()=>!1)}var c=e.prototype;c.destroy=function(){this._frameTask.remove();this._handle.destroy()};c.invoke=function(a,t){if(!a.buffer||0===a.buffer.byteLength)return l.resolve(null);
a.options.sourceSpatialReference&&a.options.sourceSpatialReference instanceof h&&(a.options={...a.options,sourceSpatialReference:a.options.sourceSpatialReference.toJSON()});return this._handle.invoke(a,t).then(b=>this._frameTask.schedule(()=>{b.spatialReference=h.fromJSON(b.spatialReference);if(b.fields)for(var d=0;d<b.fields.length;d++)b.fields[d]=n.fromJSON(b.fields[d]);d=b.spatialReference;for(const f of b.features)f.uid=m.generateUID(),f.geometry&&(f.geometry.spatialReference=d);return b}))};
return e}(),r=function(e){function c(a){return e.call(this,"PBFDecoderWorker","_parseFeatureQuery",a)||this}k._inheritsLoose(c,e);c.prototype.getTransferList=function(a){return[a.buffer]};return c}(q.WorkerHandle);g.PBFDecoder=u;Object.defineProperty(g,"__esModule",{value:!0})});