/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../chunks/object.js";import"../../chunks/deprecate.js";import"../../core/lang.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import"../../core/Collection.js";import"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../geometry/SpatialReference.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/mathUtils2.js";import"../../chunks/colorUtils.js";import s from"../../Color.js";import t from"../../core/Handles.js";import"../../chunks/unitUtils.js";import{on as i}from"../../core/watchUtils.js";import{a as n}from"../../chunks/ElevationProfileLine.js";import{g as l}from"../../chunks/elevationQuerySourceUtils.js";let c=class extends n{constructor(o){super(o),this.type="ground",this.color=new s([136,186,83]),this.numSamplesForPreview=50,this.numSamplesPerChunk=500}get minDemResolution(){var o,r,e;return l(null==(o=this._viewModel)||null==(r=o.view)||null==(e=r.map)?void 0:e.ground)}async queryElevation(o,r){var e,s,t;const i=null==(e=this._viewModel)||null==(s=e.view)||null==(t=s.map)?void 0:t.ground;if(!i)throw new Error("No ground configured in the view");return i.queryElevation(o,r)}attach(o){const r=new t;r.add(super.attach(o));const e=()=>{this._watchTileInfos(r),this._onChange()};return r.add(i(o,"view.map.ground.layers","change",e,e,e)),r}_watchTileInfos(o){var r,e,s,t;o.remove("tile-infos");const i=null!=(r=null==(e=this._viewModel)||null==(s=e.view.map)||null==(t=s.ground.layers)?void 0:t.toArray())?r:[];o.add(i.map((o=>o.watch("tileInfo",(()=>this.notifyChange("minDemResolution"))))),"tile-infos"),this.notifyChange("minDemResolution")}};o([r({type:s,nonNullable:!0})],c.prototype,"color",void 0),o([r({readOnly:!0})],c.prototype,"minDemResolution",null),c=o([e("esri.widgets.ElevationProfile.ElevationProfileLineGround")],c);var p=c;export default p;