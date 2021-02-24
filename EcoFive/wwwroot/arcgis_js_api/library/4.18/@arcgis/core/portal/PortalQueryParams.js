/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../chunks/object.js";import"../chunks/deprecate.js";import{clone as r}from"../core/lang.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import e from"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/JSONSupport.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import{J as i}from"../chunks/jsonMap.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import n from"../geometry/SpatialReference.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import{project as p}from"../geometry/support/webMercatorUtils.js";import m from"../geometry/Extent.js";var a;const u=new i({avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"});let c=a=class extends e{constructor(t){super(t),this.categories=null,this.disableExtraQuery=!1,this.extent=null,this.num=10,this.query=null,this.sortField=null,this.start=1}get sortOrder(){return this._get("sortOrder")||"asc"}set sortOrder(t){"asc"!==t&&"desc"!==t||this._set("sortOrder",t)}clone(){return new a({categories:this.categories?r(this.categories):null,disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():null,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})}toRequestOptions(t,r){let s,e;if(this.categories&&(s=this.categories.map((t=>Array.isArray(t)?JSON.stringify(t):t))),this.extent){const t=p(this.extent,n.WGS84);t&&(e=`${t.xmin},${t.ymin},${t.xmax},${t.ymax}`)}let o=this.query;!this.disableExtraQuery&&t.extraQuery&&(o="("+o+")"+t.extraQuery);const i={categories:s,bbox:e,q:o,num:this.num,sortField:null,sortOrder:null,start:this.start};return this.sortField&&(i.sortField=this.sortField.split(",").map((t=>u.toJSON(t.trim()))).join(","),i.sortOrder=this.sortOrder),{query:{...r,...i}}}};t([s()],c.prototype,"categories",void 0),t([s()],c.prototype,"disableExtraQuery",void 0),t([s({type:m})],c.prototype,"extent",void 0),t([s()],c.prototype,"num",void 0),t([s()],c.prototype,"query",void 0),t([s()],c.prototype,"sortField",void 0),t([s()],c.prototype,"sortOrder",null),t([s()],c.prototype,"start",void 0),c=a=t([o("esri.portal.PortalQueryParams")],c);var l=c;export default l;