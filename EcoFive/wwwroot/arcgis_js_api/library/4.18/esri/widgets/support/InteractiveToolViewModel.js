// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/Error ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/promiseUtils ../../core/Accessor ../../core/Handles ../../core/watchUtils ../../views/interactive/interactiveToolUtils".split(" "),function(b,
l,d,y,z,A,e,B,p,q,C,D,E,r,t,u,v,w){b.InteractiveToolViewModel=function(m){function h(a){var c=m.call(this,a)||this;c.tool=null;c._baseHandles=new u;c._loggedUnsupportedErrorOnce=!1;c._creationAbortController=null;a&&null!=a.visible&&(c.visible=a.visible);return c}l._inheritsLoose(h,m);var k=h.prototype;k.initialize=function(){this._baseHandles.add(v.init(this,["view.ready","isSupported"],()=>{this.view&&this.view.ready&&!this.isSupported?this._loggedUnsupportedErrorOnce||(this.logUnsupportedError(),
this._loggedUnsupportedErrorOnce=!0):this._loggedUnsupportedErrorOnce=!1}))};k.destroy=function(){this.removeTool();this.view=null;this._baseHandles.destroy();this._baseHandles=null};k.createTool=async function(){this.removeTool();if(!this.isSupported)return r.reject(new q("tool:create","The view does not support the tool"));const a=this.createToolParams(),c=()=>{const g=w.evaluateToolConstructorArguments(a.constructorArguments);return{visible:this.visible,...g}},f=new AbortController,x=f.signal;
this._creationAbortController=f;const n=()=>{f===this._creationAbortController&&(this._creationAbortController=null)};try{const g=await this.view.createTool(a.toolConstructor,c,{signal:x});this._set("tool",g);n()}catch(g){throw n(),g;}};k.removeTool=function(){this._creationAbortController&&this._creationAbortController.abort();this._creationAbortController=null;const a=this.tool;a&&(this.view&&this.view.tools&&this.view.tools.remove(a),a.destroyed||a.destroy(),this._set("tool",null))};l._createClass(h,
[{key:"isSupported",get:function(){return!this.view||this.view.type===this.supportedViewType}},{key:"view",get:function(){return this._get("view")},set:function(a){a!==this.view&&(this.removeTool(),this._set("view",a),this._baseHandles.remove("tools"),a&&this._baseHandles.add(a.tools.on("change",c=>{if(this.tool)for(const f of c.removed)if(this.tool===f){f.destroyed||f.destroy();this._set("tool",null);break}}),"tools"))}},{key:"visible",set:function(a){this._set("visible",a);this.tool&&(this.tool.visible=
a);!a&&this._creationAbortController&&(this._creationAbortController.abort(),this._creationAbortController=null)}},{key:"active",get:function(){return null!=this._creationAbortController||null!=this.tool&&this.tool.active}},{key:"isDisabled",get:function(){return!this.view||!this.view.ready||!this.isSupported}},{key:"creatingTool",get:function(){return!!this._creationAbortController}}]);return h}(t);d.__decorate([e.property({constructOnly:!0})],b.InteractiveToolViewModel.prototype,"tool",void 0);
d.__decorate([e.property({dependsOn:["view.type"]})],b.InteractiveToolViewModel.prototype,"isSupported",null);d.__decorate([e.property({value:null})],b.InteractiveToolViewModel.prototype,"view",null);d.__decorate([e.property({type:Boolean,value:!0})],b.InteractiveToolViewModel.prototype,"visible",null);d.__decorate([e.property({dependsOn:["_creationAbortController","tool.active"]})],b.InteractiveToolViewModel.prototype,"active",null);d.__decorate([e.property({dependsOn:["view","view.ready","isSupported"]})],
b.InteractiveToolViewModel.prototype,"isDisabled",null);d.__decorate([e.property()],b.InteractiveToolViewModel.prototype,"_creationAbortController",void 0);d.__decorate([e.property({readOnly:!0,dependsOn:["_creationAbortController"]})],b.InteractiveToolViewModel.prototype,"creatingTool",null);b.InteractiveToolViewModel=d.__decorate([p.subclass("esri.widgets.support.InteractiveToolViewModel")],b.InteractiveToolViewModel);Object.defineProperty(b,"__esModule",{value:!0})});