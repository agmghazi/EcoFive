// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../core/maybe","../symbols/support/unitConversionUtils"],function(h,e,u){function p(a,b){return e.isNone(b)||!b.mode?a?"absolute-height":"on-the-ground":b.mode}function l(a,b){return p(e.isSome(a)?a.hasZ:!1,b)}function q(a){const b=m(a);return l(a.geometry,b)}function m(a){return a.layer&&"elevationInfo"in a.layer?a.layer.elevationInfo:null}function r(a,b,c,d,g,f,k=null){if(!e.isNone(f)){var t=e.isSome(k)?k.mode:"absolute-height";if("on-the-ground"===t)return 0;a:{const n=e.isSome(f.offset)?
f.offset:0;switch(f.mode){case "absolute-height":f=d+n;break a;case "on-the-ground":f=a.elevationProvider.getElevation(b,c,0,g,"ground")||0;break a;case "relative-to-ground":f=d+(a.elevationProvider.getElevation(b,c,d,g,"ground")||0)+n;break a;case "relative-to-scene":f=d+(a.elevationProvider.getElevation(b,c,d,g,"scene")||0)+n;break a}f=void 0}a:{k=e.isSome(k)&&e.isSome(k.offset)?k.offset:0;switch(t){case "absolute-height":a=f-k;break a;case "relative-to-ground":a=f-((a.elevationProvider.getElevation(b,
c,d,g,"ground")||0)+k);break a;case "relative-to-scene":a=f-((a.elevationProvider.getElevation(b,c,d,g,"scene")||0)+k);break a}a=void 0}return a}}h.getConvertedElevation=function(a,b,c,d=null){return r(a,b.x,b.y,b.hasZ?b.z:0,b.spatialReference,c,d)};h.getConvertedElevationFromMapPoint=function(a,b,c,d,g=null){return r(a,b[0],b[1],2<b.length?b[2]:0,c,d,g)};h.getEffectiveElevationMode=p;h.getGeometryEffectiveElevationMode=l;h.getGraphicEffectiveElevationInfo=function(a){var b=m(a);a=l(a.geometry,b);
b=e.isSome(b)&&"on-the-ground"!==a?e.unwrapOr(b.offset,0)*u.getMetersPerUnit(e.unwrapOr(b.unit,"meters")):0;return{mode:a,offset:b}};h.getGraphicEffectiveElevationMode=q;h.getZForElevationMode=function(a,b,c){if(!e.isNone(c)&&c.mode){var d=a.hasZ?a.z:0,g=e.isSome(c.offset)?c.offset:0;switch(c.mode){case "absolute-height":return d-g;case "on-the-ground":return 0;case "relative-to-ground":return a=(b.elevationProvider.getElevation(a.x,a.y,a.z,a.spatialReference,"ground")||0)+g,d-a;case "relative-to-scene":return a=
(b.elevationProvider.getElevation(a.x,a.y,a.z,a.spatialReference,"scene")||0)+g,d-a}}};h.hasGraphicFeatureExpressionInfo=function(a){if("on-the-ground"===q(a))return!1;a=m(a);a=e.isSome(a)&&a.featureExpressionInfo?a.featureExpressionInfo.expression:null;return!(!a||"0"===a)};Object.defineProperty(h,"__esModule",{value:!0})});