// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/maybe ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../core/Accessor ../../../../chunks/vec3f64 ../../../../chunks/vec3 ../../../../core/Handles ../../../support/Scheduler ../../../../chunks/ray ../../webgl-engine/lib/intersectorUtils ../../webgl-engine/lib/Intersector ../PropertiesPool ./disposeMembers ./CameraOnSurface ./CenterOnSurface ./ContentGeometryUpdates ./Focus ./StableSurfaceCenter ./SurfaceGeometryUpdates".split(" "),
function(b,q,c,N,r,O,P,d,Q,A,R,S,T,B,v,t,C,n,D,E,w,F,G,H,u,I,x,J,K){b.PointsOfInterest=function(y){function p(a){a=y.call(this,a)||this;a.handles=new C;a.surfaceAltitudeAtCenter=0;a.surfaceAltitudeAtCenterDirty=!0;a.surfaceAltitudeAtCenterWithContent=0;a.surfaceAltitudeAtCenterWithContentDirty=!0;a.propertiesPool=new F.PropertiesPool({renderPointOfView:L},q._assertThisInitialized(a));a.renderPointOfView=v.create();return a}q._inheritsLoose(p,y);var h=p.prototype;h.initialize=function(){const {state:a,
basemapTerrain:e,renderCoordsHelper:f,map:k}=this.view;this.surfaceIntersector=new w.Intersector(a.mode);this.surfaceIntersector.options.backfacesTerrain=a.isGlobal?!1:!0;this.surfaceIntersector.options.invisibleTerrain=!1;this.contentIntersector=new w.Intersector(a.mode);this.contentIntersectorOptions={exclude:new Set([E.TERRAIN_ID])};const l=()=>this.estimateSurfaceAltitudeAtCenter(),g={state:a,scheduler:this.view.resourceController.scheduler,surface:e,renderCoordsHelper:f};this._set("centerOnSurfaceInfrequent",
new u["default"]({...g,task:n.Task.POINT_OF_INTEREST_INFREQUENT,estimateSurfaceAltitudeAtCenter:l}));this._set("centerOnSurfaceFrequent",new u["default"]({...g,task:n.Task.POINT_OF_INTEREST_FREQUENT,estimateSurfaceAltitudeAtCenter:l}));this._set("centerOnContent",new u["default"]({...g,task:n.Task.POINT_OF_INTEREST_FREQUENT,estimateSurfaceAltitudeAtCenter:()=>this.estimateSurfaceAltitudeAtCenterWithContent()}));this._set("cameraOnSurface",new H["default"]({...g,task:n.Task.POINT_OF_INTEREST_INFREQUENT,
map:k}));this._set("surfaceGeometryUpdates",new K["default"]({...g,centerOnSurfaces:[this.centerOnSurfaceFrequent,this.centerOnContent,this.centerOnSurfaceInfrequent]}));this._set("contentGeometryUpdates",new I.ContentGeometryUpdates({contentLayerViews:this.view.allLayerViews,renderCoordsHelper:f}));this._set("surfaceOrigin",new J["default"]({view:this.view}));this._set("focus",new x["default"]({state:a,surface:e,renderCoordsHelper:f,centerOnSurface:this.centerOnSurfaceFrequent}));x.setupFocusDebugGraphic(this.view.graphics);
this.handles.add([a.watch("camera",M=>this.cameraChanged(M),!0),e.watch("extent",()=>this.updateCenterPointsOfInterest()),this.surfaceGeometryUpdates.events.on("request-update",()=>this.updateCenterPointsOfInterest()),this.contentGeometryUpdates.events.on("request-update",()=>this.updateCenterOnContent())]);this.cameraChanged(this.view.state.camera);this.centerOnContent.update();this.centerOnSurfaceFrequent.update();this.centerOnSurfaceInfrequent.update();this.cameraOnSurface.update()};h.destroy=
function(){G.disposeMembers(this,"handles","centerOnSurfaceInfrequent","centerOnSurfaceFrequent","cameraOnSurface","centerOnContent","surfaceOrigin","focus","propertiesPool")};h.estimateSurfaceAltitudeAtCenterWithContent=function(){if(!this.surfaceAltitudeAtCenterWithContentDirty)return this.surfaceAltitudeAtCenterWithContent;this.surfaceAltitudeAtCenterWithContentDirty=!1;const a=this.view.sceneIntersectionHelper.getCenterRayWithSubpixelOffset(this.view.state.camera,z);if(r.isNone(a))return this.surfaceAltitudeAtCenterWithContent;
this.view.sceneIntersectionHelper.intersectRay(a,this.contentIntersector,m,this.contentIntersectorOptions)?this.surfaceAltitudeAtCenterWithContent=this.view.renderCoordsHelper.getAltitude(m):this.surfaceAltitudeAtCenterWithContent=this.estimateSurfaceAltitudeAtCenter(a);return this.surfaceAltitudeAtCenterWithContent};h.estimateSurfaceAltitudeAtCenter=function(a=null){if(!this.view.basemapTerrain)return 0;if(!this.surfaceAltitudeAtCenterDirty)return this.surfaceAltitudeAtCenter;this.surfaceAltitudeAtCenterDirty=
!1;const e=this.view.state.camera;if(r.isNone(a)&&(a=this.view.sceneIntersectionHelper.getCenterRayWithSubpixelOffset(e,z),r.isNone(a)))return this.surfaceAltitudeAtCenter;const f=a.origin,k=t.add(m,a.origin,a.direction);this.surfaceIntersector.resetWithRay(a);this.surfaceIntersector.intersect(null,null,e);this.view.basemapTerrain.intersect(this.surfaceIntersector,null,f,k);this.surfaceIntersector.results.min.getIntersectionPoint(m)&&(this.surfaceAltitudeAtCenter=this.view.renderCoordsHelper.getAltitude(m));
return this.surfaceAltitudeAtCenter};h.cameraChanged=function(a){this.updateCenterPointsOfInterest();a=a.eye;t.exactEquals(this.renderPointOfView,a)||this._set("renderPointOfView",t.copy(this.propertiesPool.get("renderPointOfView"),a))};h.updateCenterPointsOfInterest=function(){this.surfaceAltitudeAtCenterWithContentDirty=this.surfaceAltitudeAtCenterDirty=!0;this.centerOnSurfaceFrequent.updateRenderLocation();this.centerOnSurfaceInfrequent.updateRenderLocation();this.cameraOnSurface.updateRenderLocation();
this.focus.updateRenderLocation();this.centerOnContent.updateRenderLocation()};h.updateCenterOnContent=function(){this.surfaceAltitudeAtCenterWithContentDirty=!0;this.centerOnContent.updateRenderLocation()};q._createClass(p,[{key:"updating",get:function(){var a,e,f,k,l,g;return!!(null!=(a=this.surfaceGeometryUpdates)&&a.updating||null!=(e=this.centerOnContent)&&e.updating||null!=(f=this.centerOnSurfaceInfrequent)&&f.updating||null!=(k=this.centerOnSurfaceFrequent)&&k.updating||null!=(l=this.cameraOnSurface)&&
l.updating||null!=(g=this.focus)&&g.updating)}},{key:"test",get:function(){return{update:()=>{this.surfaceGeometryUpdates.update();this.centerOnSurfaceFrequent.update();this.centerOnSurfaceInfrequent.update()},surfaceGeometryUpdates:this.surfaceGeometryUpdates}}}]);return p}(B);c.__decorate([d.property({readOnly:!0})],b.PointsOfInterest.prototype,"centerOnContent",void 0);c.__decorate([d.property({readOnly:!0})],b.PointsOfInterest.prototype,"centerOnSurfaceFrequent",void 0);c.__decorate([d.property({readOnly:!0})],
b.PointsOfInterest.prototype,"centerOnSurfaceInfrequent",void 0);c.__decorate([d.property({readOnly:!0})],b.PointsOfInterest.prototype,"cameraOnSurface",void 0);c.__decorate([d.property({readOnly:!0})],b.PointsOfInterest.prototype,"focus",void 0);c.__decorate([d.property({readOnly:!0})],b.PointsOfInterest.prototype,"renderPointOfView",void 0);c.__decorate([d.property({readOnly:!0})],b.PointsOfInterest.prototype,"surfaceOrigin",void 0);c.__decorate([d.property({readOnly:!0})],b.PointsOfInterest.prototype,
"contentGeometryUpdates",void 0);c.__decorate([d.property({readOnly:!0})],b.PointsOfInterest.prototype,"surfaceGeometryUpdates",void 0);c.__decorate([d.property({constructOnly:!0})],b.PointsOfInterest.prototype,"view",void 0);c.__decorate([d.property({readOnly:!0,dependsOn:"surfaceGeometryUpdates.updating centerOnContent.updating centerOnSurfaceInfrequent.updating centerOnSurfaceFrequent.updating cameraOnSurface.updating focus.updating".split(" ")})],b.PointsOfInterest.prototype,"updating",null);
b.PointsOfInterest=c.__decorate([A.subclass("esri.views.3d.support.PointsOfInterest")],b.PointsOfInterest);const L=Array,m=v.create(),z=D.create();b.default=b.PointsOfInterest;Object.defineProperty(b,"__esModule",{value:!0})});