// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../layers/GroupLayerView ./LayerView2D ../engine/webgl/GroupContainer".split(" "),function(g,h,c,p,q,r,t,k,u,v,w,l,m,n){c=function(e){function d(){var b=
e.apply(this,arguments)||this;b.container=new n.GroupContainer;return b}g._inheritsLoose(d,e);var a=d.prototype;a.attach=function(){this._updateStageChildren();this.handles.add(this.layerViews.on("after-changes",()=>this._updateStageChildren()),"grouplayerview2d")};a.detach=function(){this.handles.remove("grouplayerview2d");this.container.removeAllChildren()};a.hitTest=function(b,f){return null};a.update=function(b){};a.moveStart=function(){};a.viewChange=function(){};a.moveEnd=function(){};a._updateStageChildren=
function(){this.container.removeAllChildren();this.layerViews.forEach((b,f)=>this.container.addChildAt(b.container,f))};return d}(m.LayerView2DMixin(l));return c=h.__decorate([k.subclass("esri.views.2d.layers.GroupLayerView2D")],c)});