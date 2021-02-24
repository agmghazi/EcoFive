// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/lang","../../../../core/Logger","../../../../core/Error","./LEPCC"],function(h,F,G,l,v){function H(a,b,c){let g="",d=0;for(;d<c;){var e=a[b+d];if(128>e)g+=String.fromCharCode(e),d++;else if(192<=e&&224>e){if(d+1>=c)throw new l("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");g+=String.fromCharCode((e&31)<<6|a[b+d+1]&63);d+=2}else if(224<=e&&240>e){if(d+2>=c)throw new l("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");
g+=String.fromCharCode((e&15)<<12|(a[b+d+1]&63)<<6|a[b+d+2]&63);d+=3}else if(240<=e&&248>e){if(d+3>=c)throw new l("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");e=(e&7)<<18|(a[b+d+1]&63)<<12|(a[b+d+2]&63)<<6|a[b+d+3]&63;g=65536<=e?g+String.fromCharCode((e-65536>>10)+55296,(e&1023)+56320):g+String.fromCharCode(e);d+=4}else throw new l("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");}return g}function q(a,b){const c={byteOffset:0,byteCount:0,
fields:Object.create(null)};let g=0;for(let d=0;d<b.length;d++){const e=b[d],f=e.valueType||e.type;c.fields[e.property]=(0,w[f])(a,g);g+=n[f].BYTES_PER_ELEMENT}c.byteCount=g;return c}function x(a,b,c){const g=[];let d,e=0,f;for(f=0;f<a;f+=1){d=b[f];if(0<d){if(g.push(H(c,e,d-1)),0!==c[e+d-1])throw new l("string-array-error","Invalid string array: missing null termination.");}else g.push(null);e+=d}return g}function r(a,b){return new n[b.valueType](a,b.byteOffset,b.count*b.valuesPerElement)}function y(a,
b){return new Uint8Array(a,b.byteOffset,b.byteCount)}function z(a,b,c){a=null!=b.header?q(a,b.header):{byteOffset:0,byteCount:0,fields:{count:c}};c={header:a,byteOffset:a.byteCount,byteCount:0,entries:Object.create(null)};let g=a.byteCount;for(let d=0;d<b.ordering.length;d++){const e=b.ordering[d],f=F.clone(b[e]);f.count=a.fields.count;if("String"===f.valueType){if(f.byteOffset=g,f.byteCount=a.fields[e+"ByteCount"],"UTF-8"!==f.encoding)throw new l("unsupported-encoding","Unsupported String encoding.",
{encoding:f.encoding});}else if(t(f.valueType)){const k=p(f.valueType);g+=0!==g%k?k-g%k:0;f.byteOffset=g;f.byteCount=k*f.valuesPerElement*f.count}else throw new l("unsupported-value-type","Unsupported binary valueType",{valueType:f.valueType});g+=f.byteCount;c.entries[e]=f}c.byteCount=g-c.byteOffset;return c}function A(a,b,c){b!==a&&u.error(`Invalid ${c} buffer size\n expected: ${a}, actual: ${b})`);if(b<a)throw new l("buffer-too-small","Binary buffer is too small",{expectedSize:a,actualSize:b});
}function B(a){return{isDraco:!1,isLegacy:!1,color:null!=a.color,normal:null!=a.normal,uv0:null!=a.uv0,uvRegion:null!=a.uvRegion,featureIndex:null!=a.faceRange&&null!=a.featureId}}function C(a){const b={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const c of a.ordering)if(a.vertexAttributes[c])switch(c){case "normal":b.normal=!0;break;case "color":b.color=!0;break;case "uv0":b.uv0=!0;break;case "region":b.uvRegion=!0}a.featureAttributes&&a.featureAttributeOrder&&
(b.featureIndex=!0);return b}function D(a){const b={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const c of a)switch(c){case "normal":b.normal=!0;break;case "uv0":b.uv0=!0;break;case "color":b.color=!0;break;case "uv-region":b.uvRegion=!0;break;case "feature-index":b.featureIndex=!0}return b}function t(a){return n.hasOwnProperty(a)}function p(a){return t(a)?n[a].BYTES_PER_ELEMENT:0}const u=G.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader"),E={position:"position",
normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"},n={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},w={Float32:(a,b)=>(new DataView(a,0)).getFloat32(b,!0),Float64:(a,b)=>(new DataView(a,0)).getFloat64(b,!0),UInt8:(a,b)=>(new DataView(a,0)).getUint8(b),Int8:(a,b)=>(new DataView(a,0)).getInt8(b),UInt16:(a,b)=>(new DataView(a,0)).getUint16(b,!0),Int16:(a,b)=>(new DataView(a,0)).getInt16(b,!0),
UInt32:(a,b)=>(new DataView(a,0)).getUint32(b,!0),Int32:(a,b)=>(new DataView(a,0)).getInt32(b,!0)};h.createAttributeDataIndex=z;h.createGeometryDescriptor=function(a,b){return a&&a.compressedAttributes&&"draco"===a.compressedAttributes.encoding?D(a.compressedAttributes.attributes):a?B(a):C(b)};h.createGeometryDescriptorForDraco=D;h.createGeometryDescriptorFromDefinition=B;h.createGeometryDescriptorFromSchema=C;h.createGeometryIndexFromSchema=function(a,b){var c=q(a,b&&b.header);let g=c.byteCount;
const d={isDraco:!1,header:c,byteOffset:c.byteCount,byteCount:0,vertexAttributes:{}};c=c.fields;var e=null!=c.vertexCount?c.vertexCount:c.count;for(var f of b.ordering){if(!b.vertexAttributes[f])continue;const m={...b.vertexAttributes[f],byteOffset:g,count:e};d.vertexAttributes[E[f]?E[f]:"_"+f]=m;g+=p(m.valueType)*m.valuesPerElement*e}f=c.faceCount;if(b.faces&&f){d.faces={};for(var k of b.ordering)b.faces[k]&&(e={...b.faces[k],byteOffset:g,count:f},d.faces[k]=e,g+=p(e.valueType)*e.valuesPerElement*
f)}k=c.featureCount;if(b.featureAttributes&&b.featureAttributeOrder&&k){d.featureAttributes={};for(const m of b.featureAttributeOrder)b.featureAttributes[m]&&(c={...b.featureAttributes[m],byteOffset:g,count:k},d.featureAttributes[m]=c,f="UInt64"===c.valueType?8:p(c.valueType),g+=f*c.valuesPerElement*k)}A(g,a.byteLength,"geometry");d.byteCount=g-d.byteOffset;return d};h.createRawView=y;h.createTypedView=r;h.getBytesPerValue=p;h.isValueType=t;h.readBinaryAttribute=function(a,b,c){if("lepcc-rgb"===a.encoding)return v.decodeRGB(b);
if("lepcc-intensity"===a.encoding)return v.decodeIntensity(b);if(null!=a.encoding&&""!==a.encoding)throw new l("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");a["attributeByteCounts "]&&!a.attributeByteCounts&&(u.warn("Warning: Trailing space in 'attributeByteCounts '."),a.attributeByteCounts=a["attributeByteCounts "]);"ObjectIds"===a.ordering[0]&&a.hasOwnProperty("objectIds")&&(u.warn("Warning: Case error in objectIds"),a.ordering[0]="objectIds");c=z(b,a,c);A(c.byteOffset+
c.byteCount,b.byteLength,"attribute");if(a=c.entries.attributeValues||c.entries.objectIds){if("String"===a.valueType){c=c.entries.attributeByteCounts;const g=r(b,c);b=y(b,a);return x(c.count,g,b)}return r(b,a)}throw new l("bad-attribute-storage-info","Bad attributeStorageInfo specification.");};h.readHeader=q;h.readStringArray=x;h.valueType2ArrayBufferReader=w;h.valueType2TypedArrayClassMap=n;Object.defineProperty(h,"__esModule",{value:!0})});