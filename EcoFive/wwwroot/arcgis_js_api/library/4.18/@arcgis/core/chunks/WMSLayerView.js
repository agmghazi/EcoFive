/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./object.js";import"./Logger.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import{reject as t,resolve as o}from"../core/promiseUtils.js";import s from"../core/Error.js";import"./ensureType.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import"../core/urlUtils.js";import"./resourceExtension.js";const i=i=>{let a=class extends i{async fetchPopupFeatures(e){const{layer:r}=this;if(!e)return t(new s("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}));const{popupEnabled:p}=r;if(!p)return t(new s("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:p}));const i=this.createFetchPopupFeaturesQuery(e),{extent:a,width:c,height:u,x:n,y:h}=i;if(!(a&&c&&u))throw new s("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:a,width:c,height:u});const m=r.fetchFeatureInfo(a,c,u,n,h);return m?m.then((e=>[e])):o([])}};return e([r()],a.prototype,"layer",void 0),a=e([p("esri.layers.mixins.WMSLayerView")],a),a};export{i as W};