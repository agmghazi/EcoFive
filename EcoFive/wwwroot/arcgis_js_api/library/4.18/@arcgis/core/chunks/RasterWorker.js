/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import"./tslib.es6.js";import"./ArrayPool.js";import"./object.js";import"./deprecate.js";import"../core/lang.js";import"../config.js";import"./Logger.js";import"./string.js";import"./metadata.js";import"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import{resolve as r}from"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./ensureType.js";import"../core/accessorSupport/decorators/subclass.js";import"./JSONSupport.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"../geometry/SpatialReference.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import o from"../geometry/Extent.js";import"./mathUtils2.js";import"./colorUtils.js";import"../Color.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"./colorUtils2.js";import"./colorRampUtils.js";import t from"../layers/support/PixelBlock.js";import"./_commonjsHelpers.js";import"../layers/support/RasterInfo.js";import{d as s,R as e}from"./RasterSymbolizer.js";import"./LercCodec.js";import{d as i,f as m,m as p,i as l}from"./pixelUtils.js";export default class{async decode(r){const o=await s(r.data,r.options);return o&&o.toJSON()}symbolize(s){s.pixelBlock=t.fromJSON(s.pixelBlock),s.extent=s.extent?o.fromJSON(s.extent):null;const e=this.symbolizer.symbolize(s);return r(e&&e.toJSON())}async updateSymbolizer(r){var o;this.symbolizer=e.fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===(null==(o=this.symbolizer)?void 0:o.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=r.histograms)}stretch(o){const s=this.symbolizer.simpleStretch(t.fromJSON(o.srcPixelBlock),o.stretchParams);return r(s&&s.toJSON())}estimateStatisticsHistograms(o){const s=i(t.fromJSON(o.srcPixelBlock));return r(s)}split(o){const s=m(t.fromJSON(o.srcPixelBlock),o.tileSize,o.maximumPyramidLevel);return s&&s.forEach(((r,o)=>{s.set(o,null==r?void 0:r.toJSON())})),r(s)}async mosaicAndTransform(r){const o=r.srcPixelBlocks.map((r=>r?new t(r):null)),s=p(o,r.srcMosaicSize);if(!r.coefs)return s&&s.toJSON();const e=l(s,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation);return e&&e.toJSON()}}
