/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../chunks/object.js";import"../chunks/deprecate.js";import{clone as o}from"../core/lang.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import{a as s}from"../chunks/JSONSupport.js";import"../core/urlUtils.js";import"../chunks/jsonMap.js";import{e as i}from"../chunks/enumeration.js";import{r as p}from"../chunks/reader.js";import"../chunks/resourceExtension.js";import"../chunks/mathUtils2.js";import"../chunks/colorUtils.js";import"../Color.js";import"../tasks/support/ColorRamp.js";import"../tasks/support/AlgorithmicColorRamp.js";import"../tasks/support/MultipartColorRamp.js";import{f as a,t as c}from"../chunks/colorRamps.js";var l;let m=l=class extends s{constructor(r){super(r),this.altitude=45,this.azimuth=315,this.colorRamp=null,this.hillshadeType="multi-directional",this.pixelSizePower=.664,this.pixelSizeFactor=.024,this.scalingType="none",this.type="raster-shaded-relief",this.zFactor=1}readColorRamp(r){return a(r)}clone(){return new l({hillshadeType:this.hillshadeType,altitude:this.altitude,azimuth:this.azimuth,zFactor:this.zFactor,scalingType:this.scalingType,pixelSizeFactor:this.pixelSizeFactor,pixelSizePower:this.pixelSizePower,colorRamp:o(this.colorRamp)})}};r([t({type:Number,json:{write:!0}})],m.prototype,"altitude",void 0),r([t({type:Number,json:{write:!0}})],m.prototype,"azimuth",void 0),r([t({types:c,json:{write:!0}})],m.prototype,"colorRamp",void 0),r([p("colorRamp")],m.prototype,"readColorRamp",null),r([t({type:["traditional","multi-directional"],json:{write:!0}})],m.prototype,"hillshadeType",void 0),r([t({type:Number,json:{write:!0}})],m.prototype,"pixelSizePower",void 0),r([t({type:Number,json:{write:!0}})],m.prototype,"pixelSizeFactor",void 0),r([t({type:["none","adjusted"],json:{write:!0}})],m.prototype,"scalingType",void 0),r([i({rasterShadedRelief:"raster-shaded-relief"})],m.prototype,"type",void 0),r([t({type:Number,json:{write:!0}})],m.prototype,"zFactor",void 0),m=l=r([e("esri.renderers.RasterShadedReliefRenderer")],m);var n=m;export default n;
