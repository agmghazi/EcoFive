// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/maybe ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/scheduling ../../../core/Accessor ../../../core/Handles ../../support/Scheduler ./index ./MemoryController ./StreamDataLoader".split(" "),
function(e,n,d,C,k,D,E,f,F,q,G,H,I,t,u,v,w,r,x,y){e.ResourceControllerMain=function(g){function b(){var l=g.apply(this,arguments)||this;l.updating=!1;return l}n._inheritsLoose(b,g);return b}(u);d.__decorate([f.property({readOnly:!0})],e.ResourceControllerMain.prototype,"updating",void 0);e.ResourceControllerMain=d.__decorate([q.subclass("esri.views.3d.support.ResourceController")],e.ResourceControllerMain);var p;(function(g){let b=function(l){function m(){var a=l.apply(this,arguments)||this;a._scheduler=
null;a._memoryController=null;a._streamDataLoader=null;a._cameraChangeTime=0;a._handles=new v;a._frameTask=null;return a}n._inheritsLoose(m,l);var h=m.prototype;h.initialize=function(){this._cameraChangeTime=this.now();this._scheduler=w.newScheduler(this.now);this._memoryController=x.newMemoryController(this.view);this._streamDataLoader=new y["default"];this._streamDataLoader.setup(r.maxDownloadSlots,r.downloadSlotsPerClient,this._scheduler);this._handles.add([this.view.watch("state.camera",(a,c)=>
this._cameraChangedHandler(a,c),!0),this.view.watch("stationary",()=>this._stationaryChangedHandler()),this._memoryController.events.on("updating-changed",()=>this.notifyChange("updating"))]);this._frameTask=t.addFrameTask({update:a=>this.frame(a)})};h.destroy=function(){this._handles=k.destroyMaybe(this._handles);this._frameTask=k.removeMaybe(this._frameTask);this._streamDataLoader=k.destroyMaybe(this._streamDataLoader);this._memoryController=k.destroyMaybe(this._memoryController);this._scheduler=
k.destroyMaybe(this._scheduler)};h.createStreamDataRequester=function(a){const c=this._streamDataLoader;return{request(z,A,B){return c.request(z,A,a,B)},get busy(){return!c.hasDownloadSlots(a)}}};h.frame=function(a){if(!this.view.suspended){if(this.view.stateManager&&(this.view.stateManager.step(a.deltaTime/1E3),!this._scheduler))return;this._scheduler.state=this.state;this._scheduler.updateBudget(a)?(this._memoryController.update(),this._scheduler.frame()):this._memoryController.updating&&this._memoryController.update()}};
h._cameraChangedHandler=function(a,c){a&&c&&a.almostEquals(c)||(this._cameraChangeTime=this._scheduler.now,this._scheduler.state=this.state)};h._stationaryChangedHandler=function(){this.memoryController.resetStableQuality()};n._createClass(m,[{key:"updating",get:function(){var a,c;return!!(null!=(a=this._memoryController)&&a.updating||null!=(c=this._streamDataLoader)&&c.updating)}},{key:"scheduler",get:function(){return this._scheduler}},{key:"memoryController",get:function(){return this._memoryController}},
{key:"state",get:function(){const a=this.view;return a.animation?0:a.interacting||300>=this._scheduler.now-this._cameraChangeTime?1:2}},{key:"test",get:function(){return{getQueueStats:a=>this._streamDataLoader.test.loadQueue.getStatsForType(a),state:this.state}}}]);return m}(e.ResourceControllerMain);d.__decorate([f.property({constructOnly:!0})],b.prototype,"view",void 0);d.__decorate([f.property({constructOnly:!0})],b.prototype,"now",void 0);d.__decorate([f.property()],b.prototype,"_memoryController",
void 0);d.__decorate([f.property()],b.prototype,"_streamDataLoader",void 0);d.__decorate([f.property({readOnly:!0,dependsOn:["_memoryController.updating","_streamDataLoader.updating"]})],b.prototype,"updating",null);b=d.__decorate([q.subclass("esri.views.3d.support.ResourceController")],b);g.ResourceController=b})(p||(p={}));e.newResourceController=function(g,b=()=>performance.now()){return new p.ResourceController({view:g,now:b})};Object.defineProperty(e,"__esModule",{value:!0})});