/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as o}from"./tslib.es6.js";import"./object.js";import"./Logger.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import{a as e}from"./JSONSupport.js";import"../core/urlUtils.js";import{J as s}from"./jsonMap.js";import{e as p}from"./enumeration.js";import"./resourceExtension.js";const i=new s({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let a=class extends e{};o([r({type:i.apiValues,readOnly:!0,nonNullable:!0,json:{type:i.jsonValues,read:!1,write:i.write}})],a.prototype,"type",void 0),a=o([t("esri.renderers.support.pointCloud.PointSizeAlgorithm")],a);var l,n=a;let c=l=class extends n{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new l({scaleFactor:this.scaleFactor})}};o([p({pointCloudSplatAlgorithm:"splat"})],c.prototype,"type",void 0),o([r({type:Number,value:1,nonNullable:!0,json:{write:!0}})],c.prototype,"scaleFactor",void 0),c=l=o([t("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],c);var m=c;export{n as P,m as a};