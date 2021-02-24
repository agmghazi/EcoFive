// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../core/maybe","../../geometry/support/jsonUtils","../../geometry/support/scaleUtils","../../layers/support/layerUtils"],function(t,x,y,z,u){t.identifyToIdentifyRESTParameters=function(b,a){const {dpi:A,dynamicLayers:m,geometry:B,geometryPrecision:C,height:D,layerDefinitions:h,layerIds:n,layerOption:E,layerTimeOptions:p,mapExtent:d,maxAllowableOffset:F,returnFieldName:G,returnGeometry:H,returnUnformattedValues:I,returnZ:J,spatialReference:q,timeExtent:v,tolerance:K,width:w}=
b.toJSON();a=a&&x.isSome(a.geometry)?a.geometry:null;b={geometryPrecision:C,maxAllowableOffset:F,returnFieldName:G,returnGeometry:H,returnUnformattedValues:I,returnZ:J,tolerance:K};a=a&&a.toJSON()||B;b.imageDisplay=`${w},${D},${A}`;a&&(delete a.spatialReference,b.geometry=JSON.stringify(a),b.geometryType=y.getJsonType(a));q?b.sr=q.wkid||JSON.stringify(q):a&&a.spatialReference?b.sr=a.spatialReference.wkid||JSON.stringify(a.spatialReference):d&&d.spatialReference&&(b.sr=d.spatialReference.wkid||JSON.stringify(d.spatialReference));
b.time=v?v.join(","):null;if(d){const {xmin:e,ymin:k,xmax:r,ymax:L}=d;b.mapExtent=`${e},${k},${r},${L}`}b.layers=E;n&&(b.layers+=`:${n.join(",")}`);if(h){a=[];for(var f=0;f<h.length;f++){var l=h[f];a[l.id]=l.definitionExpression}b.layerDefs=u.serializeLayerDefinitions(a)}if(m&&m.length){a=[];f=z.getScale({extent:d,width:w,spatialReference:d.spatialReference});f=u.getLayersForScale(f,m);for(l=0;l<m.length;l++){var c=m[l];const e=c.id;if(!c.subLayerIds&&n&&-1!==n.indexOf(e)&&-1!==f.indexOf(e)){const k=
{id:e};k.source=c.source;c=null;h&&h.length&&(c=(c=h.filter(r=>r.id===e)[0])&&c.definitionExpression);c&&(k.definitionExpression=c);var g=void 0;p&&p[e]&&(g=p[e]);g&&(k.layerTimeOptions=g);a.push(k)}}g=JSON.stringify(a);"[]"===g&&(g="[{}]");b.dynamicLayers=g}return b};Object.defineProperty(t,"__esModule",{value:!0})});