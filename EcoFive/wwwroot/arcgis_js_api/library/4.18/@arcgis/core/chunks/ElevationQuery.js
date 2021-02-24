/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import"./tslib.es6.js";import"./ArrayPool.js";import"./object.js";import"./deprecate.js";import"../core/lang.js";import"../config.js";import{i as e}from"./Logger.js";import"./string.js";import"./metadata.js";import"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import{whenOrAbort as t,all as i,throwIfAbortError as o,eachAlways as s}from"../core/promiseUtils.js";import"./Message.js";import n from"../core/Error.js";import"./ensureType.js";import"../core/accessorSupport/decorators/subclass.js";import"./JSONSupport.js";import{r as l}from"./asyncUtils.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"../geometry/SpatialReference.js";import"../kernel.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import a from"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"./mathUtils2.js";import"./vec3f64.js";import"./common.js";import"./vec3.js";import"./zmUtils.js";import r from"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import c from"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import{a as p}from"./unitUtils.js";import"./mat4.js";import"./pe.js";import{u as m,c as u,q as h}from"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import{initializeProjection as d,project as f}from"../geometry/projection.js";import{MultiTileElevationSampler as y}from"../layers/support/ElevationSampler.js";class T{constructor(e,t){if(this.tile=e,!t)return void(this.samplerData=null);const i=this.tile.extent;this.samplerData={pixelData:t.values,width:t.width,height:t.height,safeWidth:.99999999*(t.width-1),noDataValue:t.noDataValue,dx:(t.width-1)/(i[2]-i[0]),dy:(t.width-1)/(i[3]-i[1]),x0:i[0],y1:i[3]}}sample(e,t){if(this.samplerData)return function(e,t,i){const{safeWidth:o,width:s,pixelData:n,noDataValue:l}=e,a=g(e.dy*(e.y1-i),0,o),r=g(e.dx*(t-e.x0),0,o),c=Math.floor(a),p=Math.floor(r),m=c*s+p,u=m+s,h=n[m],d=n[u],f=n[m+1],y=n[u+1];if(h!==l&&d!==l&&f!==l&&y!==l){const e=r-p,t=h+(f-h)*e;return t+(d+(y-d)*e-t)*(a-c)}return}(this.samplerData,e,t)}}function g(e,t,i){return e<t?t:e>i?i:e}class x{async queryAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new n("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const o=v.fromGeometry(t);let s=!1;i&&i.returnSampleInfo||(s=!0);const l={...R,...i,returnSampleInfo:!0},a=await this.query(e[e.length-1],o,l),r=await this._queryAllContinue(e,a,l);return r.geometry=r.geometry.export(),s&&delete r.sampleInfo,r}async query(e,t,i){if(!e)throw new n("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof v)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new n("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const o={...R,...i},s=new _(e,t.spatialReference,o),l=o.signal;return await e.load({signal:l}),await this._createGeometryDescriptor(s,t,l),await this._selectTiles(s,l),await this._populateElevationTiles(s,l),this._sampleGeometryWithElevation(s),this._createQueryResult(s,l)}async createSampler(e,t,i){if(!e)throw new n("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new n("elevation-query:invalid-extent","Invalid or undefined extent");const o={...R,...i};return this._createSampler(e,t,o)}async createSamplerAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new n("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new n("elevation-query:invalid-extent","Invalid or undefined extent");const o={...R,...i,returnSampleInfo:!0},s=await this._createSampler(e[e.length-1],t,o);return this._createSamplerAllContinue(e,t,s,o)}async _createSampler(e,t,i,o){const s=i.signal;await e.load({signal:s});const n=t.spatialReference,l=e.tileInfo.spatialReference;n.equals(l)||(await d([{source:n,dest:l}],{signal:s}),t=f(t,l));const a=new j(e,t,i,o);return await this._selectTiles(a,s),await this._populateElevationTiles(a,s),new y(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)}async _createSamplerAllContinue(e,t,i,o){if(e.pop(),!e.length)return i;const s=i.samplers.map((e=>m(e.extent))),n=await this._createSampler(e[e.length-1],t,o,s);if(0===n.samplers.length)return i;const l=i.samplers.concat(n.samplers),a=new y(l,o.noDataValue);return this._createSamplerAllContinue(e,t,a,o)}async _queryAllContinue(e,t,i){const o=e.pop(),s=t.geometry.coordinates,n=[],l=[];for(let i=0;i<s.length;i++){const a=t.sampleInfo[i];a.demResolution>=0?a.source||(a.source=o):e.length&&(n.push(s[i]),l.push(i))}if(!e.length||0===n.length)return t;const a=t.geometry.clone(n),r=await this.query(e[e.length-1],a,i);return l.forEach(((e,i)=>{s[e].z=r.geometry.coordinates[i].z,t.sampleInfo[e].demResolution=r.sampleInfo[i].demResolution})),this._queryAllContinue(e,t,i)}async _createQueryResult(e,t){const i={geometry:(await e.geometry.project(e.outSpatialReference,t)).export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),i}async _createGeometryDescriptor(e,t,i){let o;const s=e.layer.tileInfo.spatialReference;if(t instanceof v?o=await t.project(s,i):(await d([{source:t.spatialReference,dest:s}],{signal:i}),o=f(t,s)),!o)throw new n("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${s.wkid}'`);e.geometry=v.fromGeometry(o)}async _selectTiles(e,t){const i=e.options.demResolution;if("geometry"===e.type&&this._preselectOutsideLayerExtent(e),"number"==typeof i)this._selectTilesClosestResolution(e);else if("finest-contiguous"===i)await this._selectTilesFinestContiguous(e,t);else{if("auto"!==i)throw new n("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}_preselectOutsideLayerExtent(e){const t=new T(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const o=e.x,s=e.y;(o<i.xmin||o>i.xmax||s<i.ymin||s>i.ymax)&&(e.elevationTile=t)}))}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,i=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(i)}_findNearestDemResolutionLODIndex(e,t){const i=t/p(e.spatialReference);let o=e.lods[0],s=0;for(let t=1;t<e.lods.length;t++){const n=e.lods[t];Math.abs(n.resolution-i)<Math.abs(o.resolution-i)&&(o=n,s=t)}return s}async _selectTilesFinestContiguous(e,t){const i=E(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,i,t)}async _selectTilesFinestContiguousAt(e,s,l){const a=e.layer;if(e.selectTilesAtLOD(s),s<0)return;const r=a.tilemapCache,c=e.getTilesToFetch();try{if(r)await t(i(c.map((e=>r.fetchAvailability(e.level,e.row,e.col,{signal:l})))),l);else if(await this._populateElevationTiles(e,l),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new n("elevation-query:has-unavailable-tiles")}catch(t){o(t),await this._selectTilesFinestContiguousAt(e,s-1,l)}}async _populateElevationTiles(i,o){const n=i.getTilesToFetch(),l={},a=i.options.cache,r=i.options.noDataValue,c=n.map((async t=>{const s=`${i.layer.uid}:${t.id}:${r}`,n=e(a)?a.get(s):null,c=e(n)?n:await i.layer.fetchTile(t.level,t.row,t.col,{noDataValue:r,signal:o});e(a)&&a.put(s,c),l[t.id]=new T(t,c)}));await t(s(c),o),i.populateElevationTiles(l)}async _selectTilesAuto(e,s){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const n=e.layer.tilemapCache;if(!n)return this._selectTilesAutoPrefetchUpsample(e,s);const a=e.getTilesToFetch(),r={},c=a.map((async e=>{const t={id:null,level:0,row:0,col:0,extent:u()},i=await l(n.fetchAvailabilityUpsample(e.level,e.row,e.col,t,{signal:s}));!1===i.ok?o(i.error):r[e.id]=t}));await t(i(c),s),e.remapTiles(r)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const o={},s=e=>{e.id in o?o[e.id]++:(o[e.id]=1,i++)},n=e=>{const t=o[e.id];1===t?(delete o[e.id],i--):o[e.id]=t-1};e.forEachTileToFetch(s,n);let l=!0;for(;l&&(l=!1,e.forEachTileToFetch((o=>{i<=e.options.maximumAutoTileRequests||(n(o),t.upsampleTile(o)&&(l=!0),s(o))}),n),l););}_selectTilesAutoFinest(e){const t=E(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let o=!1;e.forEachTileToFetch(((e,t)=>{i.upsampleTile(e)?o=!0:t()})),o&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach((t=>{const i=t.elevationTile;let o=e.options.noDataValue;if(i){const e=i.sample(t.x,t.y);void 0!==e?o=e:t.elevationTile=null}t.z=o}))}_extractSampleInfo(e){const t=e.layer.tileInfo,i=p(t.spatialReference);return e.geometry.coordinates.map((o=>{let s=-1;if(o.elevationTile&&o.elevationTile!==e.outsideExtentTile){s=t.lodAt(o.elevationTile.tile.level).resolution*i}return{demResolution:s}}))}}class v{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new v;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map((e=>this._cloneCoordinate(e))),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await d([{source:this.spatialReference,dest:e}],{signal:t});const i=new r({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),o=f(i,e);if(!o)return null;const s=this.coordinates.map(((e,t)=>{const i=this._cloneCoordinate(e),s=o.points[t];return i.x=s[0],i.y=s[1],i})),n=this.clone(s);return n.spatialReference=e,n}_cloneCoordinate(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}static fromGeometry(e){const t=new v;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof v)t.coordinates=e.coordinates.map((e=>t._cloneCoordinate(e))),t._exporter=(t,i)=>{const o=e.clone(t);return o.spatialReference=i,o};else switch(e.type){case"point":{const i=e,{hasZ:o,hasM:s}=i;t.coordinates=o&&s?[{x:i.x,y:i.y,z:i.z,m:i.m}]:o?[{x:i.x,y:i.y,z:i.z}]:s?[{x:i.x,y:i.y,m:i.m}]:[{x:i.x,y:i.y}],t._exporter=(t,i)=>e.hasM?new a(t[0].x,t[0].y,t[0].z,t[0].m,i):new a(t[0].x,t[0].y,t[0].z,i);break}case"multipoint":{const i=e,{hasZ:o,hasM:s}=i;t.coordinates=o&&s?i.points.map((e=>({x:e[0],y:e[1],z:e[2],m:e[3]}))):o?i.points.map((e=>({x:e[0],y:e[1],z:e[2]}))):s?i.points.map((e=>({x:e[0],y:e[1],m:e[2]}))):i.points.map((e=>({x:e[0],y:e[1]}))),t._exporter=(t,i)=>e.hasM?new r({points:t.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatiaReference:i}):new r(t.map((e=>[e.x,e.y,e.z])),i);break}case"polyline":{const i=e,o=[],s=[],{hasZ:n,hasM:l}=e;let a=0;for(const e of i.paths)if(s.push([a,a+e.length]),a+=e.length,n&&l)for(const t of e)o.push({x:t[0],y:t[1],z:t[2],m:t[3]});else if(n)for(const t of e)o.push({x:t[0],y:t[1],z:t[2]});else if(l)for(const t of e)o.push({x:t[0],y:t[1],m:t[2]});else for(const t of e)o.push({x:t[0],y:t[1]});t.coordinates=o,t._exporter=(t,i)=>{const o=e.hasM?t.map((e=>[e.x,e.y,e.z,e.m])):t.map((e=>[e.x,e.y,e.z])),n=s.map((e=>o.slice(e[0],e[1])));return new c({paths:n,hasM:e.hasM,hasZ:!0,spatialReference:i})};break}}return t}}class w{constructor(e,t){this.layer=e,this.options=t}}class _ extends w{constructor(e,t,i){super(e,i),this.type="geometry",this.outSpatialReference=t}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else{const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach((e=>{e.tile=t.tileAt(i,e.x,e.y)}))}}allElevationTilesFetched(){return!this.geometry.coordinates.some((e=>!e.elevationTile))}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates)t.tile=e[t.tile.id]}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){const o=i.tile;i.elevationTile||!i.tile||e[o.id]||(e[o.id]=o,t.push(o))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>t.tile=null))}}class j extends w{constructor(e,t,i,o){super(e,i),this.type="extent",this.elevationTiles=[],this.candidateTiles=[],this.fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=o}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),o=Math.min(i,e);o<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(o)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const i=this.extent;for(let o=t.lods.length-1;o>=0;o--){const s=t.lods[o],n=s.resolution*t.size[0],l=s.resolution*t.size[1];if(Math.ceil(i.width/n)*Math.ceil(i.height/l)<=e)return o}return-1}allElevationTilesFetched(){return this.candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this.fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this.candidateTiles){const i=e[t.id];i&&(this.fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((t=>e[t.id])))}getTilesToFetch(){return this.candidateTiles}forEachTileToFetch(e,t){const i=this.candidateTiles;this.candidateTiles=[],i.forEach((i=>{if(this.fetchedCandidates.has(i))return void(t&&t(i));let o=!1;e(i,(()=>o=!0)),o?t&&t(i):this.candidateTiles.push(i)})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const i={},o=[];for(const s of e)i[s.id]?t&&t(s):(i[s.id]=s,o.push(s));const s=o.sort(((e,t)=>e.level-t.level));return s.filter(((e,i)=>{for(let o=0;o<i;o++)if(h(s[o].extent,e.extent))return t&&t(e),!1;return!0}))}_selectCandidateTilesCoveringExtentAt(e){this.candidateTiles.length=0;const t=this.layer.tileInfo,i=t.lods[e],o=this.extent,s=t.tileAt(i.level,o.xmin,o.ymin),n=i.resolution*t.size[0],l=i.resolution*t.size[1],a=Math.ceil((o.xmax-s.extent[0])/n),r=Math.ceil((o.ymax-s.extent[1])/l);for(let e=0;e<r;e++)for(let i=0;i<a;i++){const o={id:null,level:s.level,row:s.row-e,col:s.col+i};t.updateTileInfo(o),this._tileIsMasked(o)||this.candidateTiles.push(o)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some((t=>h(t,e.extent)))}}function E(e,t){let i=e.lods.length-1;if(t>0){const o=e.lods.findIndex((e=>e.resolution<t));0===o?i=0:o>0&&(i=o-1)}return i}const R={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};export default x;export{x as ElevationQuery,v as GeometryDescriptor,E as getFinestLodIndex};