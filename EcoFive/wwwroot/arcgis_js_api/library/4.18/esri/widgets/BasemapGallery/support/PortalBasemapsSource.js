// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/Error ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/promiseUtils ../../../core/Collection ../../../core/Promise ../../../core/Loadable ../../../portal/Portal ../../../Basemap ../../../core/Handles ../../../core/watchUtils ./LocalBasemapsSource".split(" "),
function(k,c,b,q,C,d,D,r,t,E,F,G,l,u,v,w,m,x,y,z,A){const n=u.ofType(x),B=q.getLogger("esri.widgets.BasemapGallery.support.PortalBasemapsSource");b=function(p){function h(a){a=p.call(this,a)||this;a._handles=new y;a.basemaps=new n;a.filterFunction=null;a.portal=m.getDefault();a.query=null;a.updateBasemapsCallback=null;return a}k._inheritsLoose(h,p);var e=h.prototype;e.initialize=function(){this._handles.add([z.init(this,"filterFunction loadStatus portal.basemapGalleryGroupQuery portal.user query updateBasemapsCallback".split(" "),
()=>this.refresh())])};e.destroy=function(){this._handles.destroy();this.portal=this.filterFunction=this._handles=null};e.load=function(a){this.addResolvingPromise(this.portal.load(a));this.notifyChange("state");return l.resolve(this)};e.refresh=async function(){if("ready"===this.state){this._lastPortalBasemapFetchController&&(this._lastPortalBasemapFetchController.abort(),this._lastPortalBasemapFetchController=null);var a=this.portal,f=new AbortController;this._lastPortalBasemapFetchController=f;
this.notifyChange("state");try{const g=await a.fetchBasemaps(this._toQueryString(this.query),f);this._updateBasemaps(g)}catch(g){if(l.isAbortError(g))throw g;B.warn(new t("basemap-source:fetch-basemaps-error","Could not fetch basemaps from portal.",{error:g}));this._updateBasemaps()}this._lastPortalBasemapFetchController=null;this.notifyChange("state")}};e._toQueryString=function(a){return a&&"string"!==typeof a?Object.keys(a).map(f=>`${f}:${a[f]}`).join(" AND "):a};e._updateBasemaps=function(a=[]){a=
this.filterFunction?a.filter(this.filterFunction):a;a=this.updateBasemapsCallback?this.updateBasemapsCallback(a):a;this.basemaps.removeAll();this.basemaps.addMany(a)};k._createClass(h,[{key:"state",get:function(){return"not-loaded"===this.loadStatus?"not-loaded":"loading"===this.loadStatus||this._lastPortalBasemapFetchController?"loading":"ready"}}]);return h}(w.LoadableMixin(v.EsriPromiseMixin(A)));c.__decorate([d.property({readOnly:!0,type:n})],b.prototype,"basemaps",void 0);c.__decorate([d.property()],
b.prototype,"filterFunction",void 0);c.__decorate([d.property({type:m})],b.prototype,"portal",void 0);c.__decorate([d.property()],b.prototype,"query",void 0);c.__decorate([d.property({dependsOn:["loadStatus"],readOnly:!0})],b.prototype,"state",null);c.__decorate([d.property()],b.prototype,"updateBasemapsCallback",void 0);return b=c.__decorate([r.subclass("esri.widgets.BasemapGallery.support.PortalBasemapsSource")],b)});