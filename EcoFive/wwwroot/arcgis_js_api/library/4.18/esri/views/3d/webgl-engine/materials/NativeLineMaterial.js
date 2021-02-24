// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/Logger ../../../../core/screenUtils ../../../../chunks/vec3f64 ../../../../chunks/vec3 ../../../../chunks/vec2 ../../support/buffer/BufferView ../../support/geometryUtils ../lib/geometryDataUtils ../lib/Util ./renderers/utils ../lib/GLMaterial ./internal/MaterialUtil ../lib/Material ./internal/bufferWriterUtils ./internal/DefaultBufferWriter ../shaders/NativeLineTechnique".split(" "),function(L,M,
D,E,A,r,k,S,T,c,U,w,V,W,X,N,Y,F,O){const Z=E.getLogger("esri.views.3d.webgl-engine.materials.NativeLineMaterial");E=function(v){function q(a,d){a=v.call(this,d,a,aa)||this;a.techniqueConfig=new O.NativeLineTechniqueConfiguration;return a}M._inheritsLoose(q,v);var b=q.prototype;b.getTechniqueConfig=function(a){this.techniqueConfig.output=a;this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled;this.techniqueConfig.vertexColors=this.params.vertexColors;this.techniqueConfig.transparent=
1>this.params.color[3]||1>this.params.width;a=D.isSome(this.params.stipplePattern);this.techniqueConfig.stippleEnabled=a;this.techniqueConfig.stippleOffColorEnabled=a&&D.isSome(this.params.stippleOffColor);this.techniqueConfig.stippleIntegerRepeatsEnabled=a&&this.params.stippleIntegerRepeats;this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees;return this.techniqueConfig};b.getPassParameters=function(){return this.params};b.intersect=function(a,d,e,l,B,g,h,f,p){p?X.intersectDrapedRenderLineGeometry(a,
l,g,1,h):this.intersectLineGeometry(a,d,e,l,h)};b.intersectLineGeometry=function(a,d,e,l,B){if(l.options.selectionMode&&!V.isInstanceHidden(d))if(w.isTranslationMatrix(e)){d=a.data.getVertexAttr().position.data;var g=l.camera,h=ba;S.copy(h,l.point);k.set(C[0],h[0]-2,h[1]+2,0);k.set(C[1],h[0]+2,h[1]+2,0);k.set(C[2],h[0]+2,h[1]-2,0);k.set(C[3],h[0]-2,h[1]-2,0);for(a=0;4>a;a++)if(!g.unprojectFromRenderScreen(C[a],u[a]))return;c.plane.fromPoints(g.eye,u[0],u[1],G);c.plane.fromPoints(g.eye,u[1],u[2],H);
c.plane.fromPoints(g.eye,u[2],u[3],I);c.plane.fromPoints(g.eye,u[3],u[0],J);a=Number.MAX_VALUE;for(let p=0;p<d.length-5;p+=3)if(m[0]=d[p]+e[12],m[1]=d[p+1]+e[13],m[2]=d[p+2]+e[14],n[0]=d[p+3]+e[12],n[1]=d[p+4]+e[13],n[2]=d[p+5]+e[14],!(0>c.plane.signedDistance(G,m)&&0>c.plane.signedDistance(G,n)||0>c.plane.signedDistance(H,m)&&0>c.plane.signedDistance(H,n)||0>c.plane.signedDistance(I,m)&&0>c.plane.signedDistance(I,n)||0>c.plane.signedDistance(J,m)&&0>c.plane.signedDistance(J,n))){g.projectToRenderScreen(m,
x);g.projectToRenderScreen(n,y);if(0>x[2]&&0<y[2]){k.subtract(t,m,n);var f=g.frustum;f=-c.plane.signedDistance(f.planes[4],m)/k.dot(t,c.plane.normal(f.planes[4]));k.scale(t,t,f);k.add(m,m,t);g.projectToRenderScreen(m,x)}else if(0<x[2]&&0>y[2])k.subtract(t,n,m),f=g.frustum,f=-c.plane.signedDistance(f.planes[4],n)/k.dot(t,c.plane.normal(f.planes[4])),k.scale(t,t,f),k.add(n,n,t),g.projectToRenderScreen(n,y);else if(0>x[2]&&0>y[2])continue;x[2]=0;y[2]=0;f=c.lineSegment.distance2(c.lineSegment.fromPoints(x,
y,P),h);f<a&&(a=f,k.copy(Q,m),k.copy(R,n))}e=l.rayBeginPoint;l=l.rayEndPoint;4>a&&(a=Number.MAX_VALUE,c.lineSegment.closestLineSegmentPoint(c.lineSegment.fromPoints(Q,R,P),c.lineSegment.fromPoints(e,l,ca),z)&&(k.subtract(z,z,e),a=k.length(z),k.scale(z,z,1/a),a/=k.distance(e,l)),B(a,z))}else Z.error("intersection assumes a translation-only matrix")};b.computeAttachmentOrigin=function(a,d){a=a.data;return(a="getVertexAttr"in a?a.getVertexAttr():"vertexAttr"in a?a.vertexAttr:null)?U.computeAttachmentOriginLines(a[w.VertexAttrConstants.POSITION],
null,!1,d):null};b.createBufferWriter=function(){const a=this.params.vertexColors?F.PositionColorLayout:F.PositionLayout;return D.isNone(this.params.stipplePattern)?new F.DefaultBufferWriter(a):new da(a.clone().vec3f(w.VertexAttrConstants.AUXPOS1))};b.getGLMaterial=function(a){return 0===a.output||4===a.output?new ea(a):void 0};return q}(N.Material);let ea=function(v){function q(a){a=v.call(this,a)||this;a.updateParameters();return a}M._inheritsLoose(q,v);var b=q.prototype;b.updateParameters=function(){this.technique=
this.techniqueRep.acquireAndReleaseExisting(O.NativeLineTechnique,this.material.getTechniqueConfig(this.output),this.technique)};b.beginSlot=function(a){return 3===a};b._updateOccludeeState=function(a){a.hasOccludees!==this.material.params.sceneHasOcludees&&(this.material.setParameterValues({sceneHasOcludees:a.hasOccludees}),this.updateParameters())};b.ensureParameters=function(a){0===this.output&&this._updateOccludeeState(a)};b.bind=function(a,d){a.bindProgram(this.technique.program);this.technique.bindPass(a,
this.material.getPassParameters(),d)};b.getPipelineState=function(a,d){return this.technique.getPipelineState(d)};return q}(W),da=function(){function v(b){this.vertexBufferLayout=b}var q=v.prototype;q.allocate=function(b){return this.vertexBufferLayout.createBuffer(b)};q.elementCount=function(b){return b.indices[w.VertexAttrConstants.POSITION].length};q.write=function(b,a,d,e){Y.writeDefaultAttributes(a,this.vertexBufferLayout,b.transformation,b.invTranspTransformation,d,e);this.writeAuxpos1(b,a,
d,e)};q.writeAuxpos1=function(b,a,d,e){var l=d.getField(w.VertexAttrConstants.AUXPOS1,T.BufferViewVec3f);d=a.indices[w.VertexAttrConstants.POSITION];a=a.vertexAttr[w.VertexAttrConstants.POSITION].data;b=b.transformation;const B=l.typedBufferStride;l=l.typedBuffer;e*=B;for(let p=0;p<d.length;p+=2){var g=3*d[p],h=a[g],f=a[g+1];const K=a[g+2];g=b[0]*h+b[4]*f+b[8]*K+b[12];const fa=b[1]*h+b[5]*f+b[9]*K+b[13];h=b[2]*h+b[6]*f+b[10]*K+b[14];for(f=0;2>f;++f)l[e]=g,l[e+1]=fa,l[e+2]=h,e+=B}};return v}();const aa=
{color:[1,1,1,1],vertexColors:!1,slicePlaneEnabled:!1,width:1,stipplePattern:null,stippleIntegerRepeats:!1,stippleOffColor:null,sceneHasOcludees:!1,...N.materialParametersDefaults},m=r.create(),n=r.create(),t=r.create(),z=r.create(),x=A.createRenderScreenPointArray3(),y=A.createRenderScreenPointArray3(),Q=r.create(),R=r.create(),P=c.lineSegment.create(),ca=c.lineSegment.create(),ba=r.create(),C=[A.createRenderScreenPointArray3(),A.createRenderScreenPointArray3(),A.createRenderScreenPointArray3(),
A.createRenderScreenPointArray3()],u=[r.create(),r.create(),r.create(),r.create()],G=c.plane.create(),H=c.plane.create(),I=c.plane.create(),J=c.plane.create();L.NativeLineMaterial=E;Object.defineProperty(L,"__esModule",{value:!0})});