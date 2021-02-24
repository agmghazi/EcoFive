// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/lang ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/JSONSupport ../../../Color".split(" "),function(a,h,b,q,k,r,l,d,t,m,u,v,w,n,p){var e;a.ColorClassBreakInfo=
e=function(g){function f(){var c=g.apply(this,arguments)||this;c.description=null;c.label=null;c.minValue=0;c.maxValue=0;c.color=null;return c}h._inheritsLoose(f,g);f.prototype.clone=function(){return new e({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:k.clone(this.color)})};return f}(n.JSONSupport);b.__decorate([d.property({type:String,json:{write:!0}})],a.ColorClassBreakInfo.prototype,"description",void 0);b.__decorate([d.property({type:String,
json:{write:!0}})],a.ColorClassBreakInfo.prototype,"label",void 0);b.__decorate([d.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],a.ColorClassBreakInfo.prototype,"minValue",void 0);b.__decorate([d.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],a.ColorClassBreakInfo.prototype,"maxValue",void 0);b.__decorate([d.property({type:p,json:{type:[l.Integer],write:!0}})],a.ColorClassBreakInfo.prototype,"color",void 0);
a.ColorClassBreakInfo=e=b.__decorate([m.subclass("esri.renderers.support.pointCloud.ColorClassBreakInfo")],a.ColorClassBreakInfo);a.default=a.ColorClassBreakInfo;Object.defineProperty(a,"__esModule",{value:!0})});