/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../chunks/object.js";import"../../chunks/deprecate.js";import"../../core/lang.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import o from"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/cast.js";import{J as s}from"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../geometry/SpatialReference.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import{getJsonType as i}from"../../geometry/support/jsonUtils.js";import{geometryTypes as p}from"../../geometry.js";const m=new s({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});let n=class extends o{constructor(t){super(t),this.geometry1=null,this.geometry2=null,this.distanceUnit=null,this.geodesic=null}toJSON(){const t={},e=this.geometry1;e&&(t.geometry1=JSON.stringify({geometryType:i(e),geometry:e}),t.sr=JSON.stringify(this.geometry1.spatialReference.toJSON()));const o=this.geometry2;return o&&(t.geometry2=JSON.stringify({geometryType:i(o),geometry:o})),this.distanceUnit&&(t.distanceUnit=m.toJSON(this.distanceUnit)),this.geodesic&&(t.geodesic=this.geodesic),t}};t([e({types:p,json:{write:!0}})],n.prototype,"geometry1",void 0),t([e({types:p,json:{write:!0}})],n.prototype,"geometry2",void 0),t([e({type:String,json:{write:!0}})],n.prototype,"distanceUnit",void 0),t([e({type:Boolean,json:{write:!0}})],n.prototype,"geodesic",void 0),n=t([r("esri.tasks.support.DistanceParameters")],n);var c=n;export default c;