// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/maybe ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/Error ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/promiseUtils ../../../geometry/Point ../../../geometry/Extent ../../../geometry ../DimensionalDefinition ../rasterFunctions/pixelUtils ./BaseRaster ../wmsUtils ./multipartParser ./wcsCapabilitiesParser ./wcsCoverageParser".split(" "),
function(L,E,z,H,Y,Z,F,aa,M,D,ba,ca,da,I,N,O,ea,P,Q,R,S,T,U,J){const V=["nearest neighbor","bilinear","bicubic"],W=["nearest","linear","cubic"],X=["nearest-neighbor","linear","cubic"];z=function(K){function G(){var a=K.apply(this,arguments)||this;a.datasetFormat="WCSServer";return a}L._inheritsLoose(G,K);var v=G.prototype;v.open=async function(a){await this.init();a=null==a?void 0:a.signal;var b=await this._getCapabilities(a);this.capabilities=b;if(!this.version){var d;let f=null==(d=b.capabilitiesVersion)?
void 0:d.slice(0,3);this.version="2.0"===f||"1.1"===f||"1.0"===f?b.capabilitiesVersion:f=b.supportedVersions.find(g=>"2.0.1"===g)||b.supportedVersions.find(g=>"2.0"===g.slice(0,3))||b.supportedVersions.find(g=>"1.1"===g.slice(0,3))||b.supportedVersions.find(g=>"1.0"===g.slice(0,3))||"1.0.0"}this.coverageId||(this.coverageId=b.coverages[0].id);d=b.coverages.filter(f=>f.id===this.coverageId)[0];if(null==d)throw new D("wcsraster-open",`the coverageId ${this.coverageId} does not exist in capabilities`);
this.coverageInfo=(await this._describeCoverage(a))[0];"2.0"===this.version.slice(0,3)&&(this.coverageInfo.lonLatEnvelope=d.lonLatEnvelope,this.coverageInfo.supportedInterpolations=J.standardizeInterpolations(b.supportedInterpolations));this.datasetName=this.coverageInfo.title;({rasterInfo:b}=this.coverageInfo);this.createRemoteDatasetStorageInfo(b,512,512);this._set("rasterInfo",b);const {pixelType:c,bandCount:e}=await this._getPixelTypeAndBandCount(a);b.pixelType=c;1===b.bandCount&&1<e&&(b.bandCount=
e);this.updateTileInfo()};v.fetchRawTile=async function(a,b,d,c={}){const {tileInfo:e,maximumPyramidLevel:f}=this.rasterInfo.storageInfo;a=e.lodAt(Math.max(f-a,0));var g=new N({x:a.resolution,y:a.resolution,spatialReference:e.spatialReference});d=this.getTileExtent(g,b,d,e);let [l,r]=e.size;g=this.rasterInfo.extent;b=d.xmax>g.xmax||d.ymin<g.ymin;let p=d;b&&(p=d.clone().intersection(g),l=Math.floor((p.xmax-p.xmin)/a.resolution),r=Math.floor((p.ymax-p.ymin)/a.resolution));if(1>=l||1>=r)return null;
c=await this._getCoverage(p,l,r,c);if(!c)return null;if((c=await this.decodePixelBlock(c,{width:l,height:r,planes:null,pixelType:null}))&&(c.width!==l||c.height!==r))throw new D("wcsraster-fetch",`the reponse has unexpected dimension width: ${c.width}, height: {pixelBlock.height}`);b&&(c=Q.clip(c,{x:0,y:0},{width:e.size[0],height:e.size[1]}));return c};v._getCapabilities=async function(a){const b={service:"WCS",request:"GetCapabilities"};this.version&&(b.version=this.version,b.acceptVersions=this.version);
try{const {data:d}=await this.request(this.url,{query:b,responseType:"xml",signal:a});return U.parseCapabilities(d)}catch(d){if(!I.isAbortError(d))throw new D("wcslayer:open","wcs capabilities is not valid or supported");throw d;}};v._describeCoverage=async function(a){const b={service:"WCS",request:"DescribeCoverage",version:this.version},d=this.version.slice(0,3);"1.0"===d?b.coverage=this.coverageId:"1.1"===d?b.identifiers=this.coverageId:"2.0"===d&&(b.coverageId=this.coverageId);try{const {data:c}=
await this.request(this.url,{query:b,responseType:"xml",signal:a});return J.parseCoverages(c,this.version)}catch(c){if(!I.isAbortError(c))throw new D("wcslayer:open","wcs coverage description is not valid or supported");throw c;}};v._getPixelTypeAndBandCount=async function(a){const {pixelSize:b,extent:d,multidimensionalInfo:c}=this.rasterInfo;var e=d.center;e=new O({xmin:e.x-b.x,xmax:e.x+b.x,ymin:e.y-b.y,ymax:e.y+b.y,spatialReference:d.spatialReference});let f;if(H.isSome(c)){const g=c.variables[0];
f=[];g.dimensions.forEach(l=>{f.push(new P({variableName:g.name,dimensionName:l.name,values:l.hasRegularIntervals?l.extent[0]:l.values[0],isSlice:!0}))})}a=await this._getCoverage(e,2,2,{multidimensionalDefinition:f,signal:H.unwrap(a)});if(!a)throw new D("wcsraster-open","unable to determine pixel type");a=await this.decodePixelBlock(a,{width:2,height:2,planes:null,pixelType:null});return{pixelType:a.pixelType,bandCount:a.getPlaneCount()}};v._getCoverage=async function(a,b,d,c){const {coverageDescription:e}=
this.coverageInfo;var {version:f}=e;a="2.0"===e.version?this._getCoverage201Parameters(a,b,d,c,e):"1.1"===e.version?this._getCoverage110Parameters(a,b,d,c,e):this._getCoverage100Parameters(a,b,d,c);c=await this.request(this.url,{query:a,signal:c.signal,responseType:"array-buffer"});if("1.0"===f)return c.data;f=T.parse(c);if(f.isMultipart)return f.data.filter(g=>{var l;return-1<(null==(l=g.contentType)?void 0:l.toLowerCase().indexOf("image"))})[0].contentData;throw new D("wcsraster:getcoverage","response is not a valid coverage");
};v._getInterpolationIndex=function(a){return-1===this.coverageInfo.supportedInterpolations.indexOf(a)?0:"nearest"===a?0:"bilinear"===a?1:"cubic"===a?2:0};v._getCoverage100Parameters=function(a,b,d,c){const e=`${a.xmin},${a.ymin},${a.xmax},${a.ymax}`;a=a.spatialReference.wkid;const f=(this.coverageInfo.supportedFormats||[]).find(p=>-1<p.toLowerCase().indexOf("tiff"))||"GEOTIFF",{bandIds:g,interpolation:l}=c;c=this._getInterpolationIndex(l);const r=g?g.map(p=>this.coverageInfo.bandNames[p]):null;return{service:"WCS",
request:"GetCoverage",version:this.version,coverage:this.coverageId,format:f,crs:`EPSG:${a}`,bbox:e,width:b,height:d,interpolation:V[c],band:null==r?void 0:r.join(",")}};v._getCoverage110Parameters=function(a,b,d,c,e){const {multidimensionalDefinition:f,bandIds:g,interpolation:l}=c;c=a.spatialReference.wkid;const r=`urn:ogc:def:crs:EPSG::${c}`,p=(this.coverageInfo.supportedFormats||[]).find(k=>-1<k.toLowerCase().indexOf("tiff"))||"image/tiff";var x=this._getInterpolationIndex(l);x=W[x];var w=e.domain.spatialDomain,
t=w.origin.x<=w.envelope.xmin&&w.origin.y<=w.envelope.ymin,m=a.width/b,h=a.height/d*(t?1:-1);d=t?[a.xmin,a.ymin]:[a.xmin,a.ymax];d=(b=w.useEPSGAxis&&S.coordsReversed(c))?`${d[1]},${d[0]}`:`${d[0]},${d[1]}`;w=b?`${h},0,0,${m}`:`${m},0,0,${h}`;t=m/2;m=a.xmin+t;t=a.xmax-t;var y=Math.abs(h)/2;h=a.ymin+y;a=a.ymax-y;a=b?`${h},${m},${a},${t},${r}`:`${m},${h},${t},${a},${r}`;b=(b=e.range.filter(k=>k.axis.some(n=>-1<n.identifier.toLowerCase().indexOf("band")))[0])&&x&&g?`${b.identifier}:${x}[${b.axis[0].identifier}[${g.join(",")}]]`:
null;let u;if(f)for(h=0;h<f.length;h++){m=f[h].values;const k=f[h].dimensionName.toLowerCase(),n=f[h].variableName.toLowerCase();0<m.length&&(m[0]instanceof Array&&(m=m[0]),"stdtime"===k?u=m.map(q=>this._convertToISOTime(q)).join(","):(t=e.range.filter(q=>q.identifier.toLowerCase()===n)[0])&&(y=t.axis.filter(q=>q.identifier.toLowerCase()===k)[0])&&(b=t.identifier+":"+x+"["+y.identifier+"["+m.join(",")+"]]"))}return{service:"WCS",request:"GetCoverage",version:this.version,identifier:this.coverageId,
format:p,crs:`EPSG:${c}`,boundingbox:a,gridCS:"urn:ogc:def:cs:OGC:0.0:Grid2dSquareCS",gridType:"urn:ogc:def:method:WCS:1.1:2dGridIn2dCrs",gridOrigin:d,gridOffsets:w,gridBaseCRS:r,timeSequence:u,rangeSubset:b}};v._convertToISOTime=function(a,b=!1){return(b?new Date(864E5*(a-25569)):new Date(a)).toISOString()};v._getCoverage201Parameters=function(a,b,d,c,e){const {multidimensionalDefinition:f,interpolation:g}=c;var l=this._getInterpolationIndex(g);l="http://www.opengis.net/def/interpolation/OGC/1/"+
X[l];const r=(this.coverageInfo.supportedFormats||[]).find(q=>-1<q.toLowerCase().indexOf("tiff"))||"image/tiff",{bandNames:p}=this.coverageInfo,{boundedBy:x,domainSet:w,rangeType:t}=e;var m=x.isEastFirst?0:1,{axisLabels:h}=w;e=h[m];m=h[1-m];const y=`http://www.opengis.net/def/crs/EPSG/0/${a.spatialReference.wkid}`,u=[];u.push(`${e},${y}(${a.xmin},${a.xmax})`);u.push(`${m},${y}(${a.ymin},${a.ymax})`);a=[];if(2<h.length)for(var k=2;k<h.length;k++){var n=w.origin[k];if(-1<h[k].toLowerCase().indexOf("time")){let q=
n.toString();-1<x.uomLabels[k].toLowerCase().indexOf("ole")&&(a.push(h[k]),q=this._convertToISOTime(n,!0));u.push(h[k]+",http://www.opengis.net("+q+")")}else u.push(h[k]+",http://www.opengis.net("+n+")")}a=null;if(f){const q=[];t.forEach(A=>A.forEach(B=>q.push(B.name)));c=[];for(let A=0;A<f.length;A++){const B=h.find(C=>C===f[A].dimensionName);k=q.find(C=>C===f[A].variableName);-1===c.indexOf(k)&&c.push(k);B&&(n=f[A].values,0<n.length&&(Array.isArray(n[0])&&(n=n[0]),k="",k=-1<B.toLowerCase().indexOf("time")?
n.map(C=>this._convertToISOTime(C)).join(","):n.join(","),n=u.findIndex(C=>0===C.indexOf(B+",http://www.opengis.net")),-1===n&&u.push(B+",http://www.opengis.net("+k+")"),-1!==n&&-1===u[n].indexOf("("+k+")")&&u.splice(n,1,B+",http://www.opengis.net("+k+")")))}c.length&&(a=c.join(","))}else null!=p&&p.length&&(a=(c.bandIds?c.bandIds.map(q=>p[q]):p).join(","));h=u.join("\x26subset\x3d");return{service:"WCS",request:"GetCoverage",version:this.version,coverageId:this.coverageId,rangesubset:a,interpolation:l,
scaleSize:`${e}(${b}),${m}(${d})`,subset:h,format:r,outputcrs:y}};return G}(R);E.__decorate([F.property({type:String,json:{write:!0}})],z.prototype,"datasetFormat",void 0);E.__decorate([F.property()],z.prototype,"tileType",void 0);E.__decorate([F.property({type:String,json:{write:!0}})],z.prototype,"version",void 0);E.__decorate([F.property({type:String,json:{write:!0}})],z.prototype,"coverageId",void 0);return z=E.__decorate([M.subclass("esri.layers.support.rasterDatasets.ImageServerRaster")],z)});