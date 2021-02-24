// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../core/maybe ../../../core/promiseUtils ../../../chunks/mat4f64 ./DefaultErrorContext ./LoaderResult ./internal/Resource".split(" "),function(r,p,v,w,x,t,y){function z(f){let a=null;f.json.nodes.forEach(d=>{d=d.extras;p.isSome(d)&&(d.ESRI_proxyEllipsoid||d.ESRI_lod)&&(a=d)});return a}async function A(f,a){async function d(b,g){const h=c.nodes[b];b=f.getNodeTransform(b);n.warnUnsupportedIf(null!=h.weights,"Morph targets are not supported.");if(null!=h.mesh){const l=c.meshes[h.mesh];
for(const m of l.primitives)await a(m,b,g,l.name)}for(const l of h.children||[])await d(l,g)}const c=f.json;var k=c.scenes[c.scene||0].nodes;const e=1<k.length;for(const b of k){k=c.nodes[b];const g=[d(b,0)];k.extensions&&k.extensions.MSFT_lod&&Array.isArray(k.extensions.MSFT_lod.ids)&&!e&&g.push(...k.extensions.MSFT_lod.ids.map((h,l)=>d(h,l+1)));await v.all(g)}}function B(f,a,d){const c=e=>{const b=`${d}_tex_${e&&e.id}${e&&e.name?"_"+e.name:""}`;if(e&&!f.textures.has(b)){const g=t.makeTextureSource(e.data,
{wrap:{s:u(e.wrapS),t:u(e.wrapT)},mipmap:C.some(h=>h===e.minFilter),noUnpackFlip:!0});f.textures.set(b,g)}return b},k=`${d}_mat_${a.id}_${a.name}`;f.materials.has(k)||(a=t.makeMaterialParameters({color:[a.color[0],a.color[1],a.color[2]],opacity:a.color[3],alphaMode:a.alphaMode,alphaCutoff:a.alphaCutoff,doubleSided:a.doubleSided,colorMixMode:a.ESRI_externalColorMixMode,textureColor:a.colorTexture?c(a.colorTexture):void 0,textureNormal:a.normalTexture?c(a.normalTexture):void 0,textureOcclusion:a.occlusionTexture?
c(a.occlusionTexture):void 0,textureEmissive:a.emissiveTexture?c(a.emissiveTexture):void 0,textureMetallicRoughness:a.metallicRoughnessTexture?c(a.metallicRoughnessTexture):void 0,emissiveFactor:[a.emissiveFactor[0],a.emissiveFactor[1],a.emissiveFactor[2]],metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor}),f.materials.set(k,a));return k}function u(f){if(33071===f||33648===f||10497===f)return f;n.error(`Unexpected TextureSampler WrapMode: ${f}`)}let D=0;const n=new x.DefaultErrorContext,
C=[9987,9985],E="POINTS LINES LINE_LOOP LINE_STRIP TRIANGLES TRIANGLE_STRIP TRIANGLE_FAN".split(" ");r.load=async function(f,a,d={}){const c=await y.Resource.load(f,n,a,d),k=`gltf_${D++}`,e={lods:[],materials:new Map,textures:new Map,meta:z(c)};f=!(!c.json.asset.extras||"symbolResource"!==c.json.asset.extras.ESRI_type);await A(c,async(b,g,h,l)=>{var m=void 0!==b.mode?b.mode:4;a:switch(m){case 4:case 5:case 6:var q=m;break a;default:q=null}p.isNone(q)?n.warnUnsupported("Unsupported primitive mode ("+
E[m]+"). Skipping primitive."):c.hasPositions(b)?(m=await c.getMaterial(b,d),g={transform:w.clone(g),attributes:{position:await c.getPositionData(b,d),normal:null,texCoord0:null,color:null,tangent:null},indices:await c.getIndexData(b,d),primitiveType:q,material:B(e,m,k)},c.hasNormals(b)&&(g.attributes.normal=await c.getNormalData(b,d)),c.hasTangents(b)&&(g.attributes.tangent=await c.getTangentData(b,d)),c.hasTextureCoordinates(b)&&(g.attributes.texCoord0=await c.getTextureCoordinates(b,d)),c.hasVertexColors(b)&&
(g.attributes.color=await c.getVertexColors(b,d)),b=null,p.isSome(e.meta)&&p.isSome(e.meta.ESRI_lod)&&"screenSpaceRadius"===e.meta.ESRI_lod.metric&&(b=e.meta.ESRI_lod.thresholds[h]),e.lods[h]=e.lods[h]||{parts:[],name:l,lodThreshold:b},e.lods[h].parts.push(g)):n.warn("Skipping primitive without POSITION vertex attribute.")});return{model:e,meta:{isEsriSymbolResource:f,uri:c.uri},customMeta:{}}};Object.defineProperty(r,"__esModule",{value:!0})});