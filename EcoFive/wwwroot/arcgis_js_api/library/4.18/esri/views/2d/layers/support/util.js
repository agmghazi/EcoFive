// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/jsonMap"],function(m,p){const q=new p.JSONMap({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});m.analyzeRings=function(a,r,n){const d=[],h=[];let c=0,b=0;for(const e of a){a=b;let f=e[0][0],g=e[0][1];d[b++]=f;d[b++]=g;let k=0;for(let l=1;l<e.length;++l){const t=f,u=g;f=e[l][0];g=e[l][1];k+=g*t-f*u;d[b++]=f;d[b++]=g}r(k/2);0<k?(0<a-c&&(n(c,
a,d,h),c=a),h.length=0):0>k?0<a-c?h.push(.5*(a-c)):b=a:b=a}0<b-c&&n(c,b,d,h)};m.toJSONGeometryType=function(a){return q.toJSON(a)};Object.defineProperty(m,"__esModule",{value:!0})});