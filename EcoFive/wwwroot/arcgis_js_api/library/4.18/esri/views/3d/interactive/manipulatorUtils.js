// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../core/maybe ../../../chunks/vec3 ../../../chunks/mat4 ../../../chunks/vec4f64 ../support/stack ../webgl-engine/lib/GeometryUtil ../../../layers/graphics/hydratedFeatures ../layers/graphics/graphicUtils ../webgl-engine/lib/Geometry ../webgl-engine/materials/ColorMaterial ./Manipulator3D ../webgl-engine/materials/ShadedColorMaterial".split(" "),function(e,h,g,q,k,f,r,t,u,v,w,x,y){function m(a,c=4){const b=k.fromValues(a[0],a[1],a[2],3<a.length?a[3]:1);return new y.ShadedColorMaterial({color:b,
transparent:1>a[3],writeDepth:!0,cullFace:2,renderOccluded:c},"manipulator")}function n(a,c,b,d){a=g.normalize(f.sv3d.get(),a);c=g.normalize(f.sv3d.get(),c);const l=g.cross(f.sv3d.get(),a,c);d[0]=a[0];d[1]=a[1];d[2]=a[2];d[3]=0;d[4]=c[0];d[5]=c[1];d[6]=c[2];d[7]=0;d[8]=l[0];d[9]=l[1];d[10]=l[2];d[11]=0;d[12]=b[0];d[13]=b[1];d[14]=b[2];d[15]=1;return d}function p(a,c){const b=a.getViewForGraphic(c);return h.isSome(b)&&"computeAttachmentOrigin"in b?b.computeAttachmentOrigin(c,a.spatialReference):null}
e.calculateInputRotationTransform=function(a,c,b,d){a=g.subtract(f.sv3d.get(),a,b);d=g.cross(f.sv3d.get(),d,a);b=n(a,d,b,f.sm4d.get());q.invert(b,b);c=g.transformMat4(f.sv3d.get(),c,b);return Math.atan2(c[1],c[0])};e.calculateTranslateRotateFromBases=n;e.createManipulatorMaterial=m;e.createManipulatorOutlineMaterial=function(a,c=4){a=k.fromValues(a[0],a[1],a[2],4===a.length?a[3]:1);return new w.ColorMaterial({color:a,transparent:!0,writeDepth:!0,cullFace:1,renderOccluded:c},"manipulator-outline")};
e.createSphereManipulator=function(a,c,b){return new x.Manipulator3D({view:a,renderObjects:[{geometry:new v(r.createSphereGeometry(1,32,32),"manipulator"),material:m(k.fromValues(c[0],c[1],c[2],null!=b?b:1))}]})};e.getGraphicAttachmentOrigin=p;e.placeAtGraphic=function(a,c,b){a=p(a,b);h.isSome(a)?c.elevationAlignedLocation=a:(b=b.geometry,h.isNone(b)||(b=u.computeCentroid(b),h.isNone(b)||(c.location=t.hydrateGeometry(b))))};Object.defineProperty(e,"__esModule",{value:!0})});