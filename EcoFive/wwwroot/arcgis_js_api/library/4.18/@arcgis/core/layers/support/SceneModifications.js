/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../chunks/object.js";import"../../chunks/deprecate.js";import"../../core/lang.js";import"../../config.js";import{g as o}from"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import e from"../../core/Collection.js";import{J as i}from"../../chunks/JSONSupport.js";import{urlToObject as p}from"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/multiOriginJSONSupportUtils.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/persistable.js";import"../../geometry/SpatialReference.js";import"../../kernel.js";import m from"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../chunks/mathUtils2.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/vec3.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../chunks/unitUtils.js";import"../../chunks/mat4.js";import"../../chunks/pe.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/projection.js";import n from"./SceneModification.js";var c;let u=c=class extends(i(e.ofType(n))){constructor(r){super(r),this.url=null}toJSON(r){return this.toArray().map((o=>o.toJSON(r))).filter((r=>!!r.geometry))}clone(){return new c({url:this.url,items:this.items.map((r=>r.clone()))})}_readModifications(r,o){for(const s of r)this.add(n.fromJSON(s,o))}static fromJSON(r,o){const s=new c;return s._readModifications(r,o),s}static async fromUrl(r,s,t){const e={url:p(r),origin:"service"},i=await m(r,{responseType:"json",signal:o(t,"signal")}),u=s.toJSON(),j=[];for(const r of i.data)j.push(n.fromJSON({...r,geometry:{...r.geometry,spatialReference:u}},e));return new c({url:r,items:j})}};r([s({type:String})],u.prototype,"url",void 0),u=c=r([t("esri.layers.support.SceneModifications")],u);var j=u;export default j;