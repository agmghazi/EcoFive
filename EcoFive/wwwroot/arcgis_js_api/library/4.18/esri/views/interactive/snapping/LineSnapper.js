// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../chunks/vec2f64 ./Settings ./snappingUtils ./SnappingAlgorithm ../../3d/support/geometryUtils/vector2d ./LineSnappingCandidate".split(" "),function(q,u,v,r,l,k,m,w,x){m=function(t){function n({enabled:g=l.defaults.lineSnapper.enabled,proximityThreshold:a=l.defaults.lineProximityThreshold,shortLineThreshold:b=l.defaults.shortLineThreshold}={}){return t.call(this,{enabled:g,proximityThreshold:a,shortLineThreshold:b})||
this}u._inheritsLoose(n,t);var p=n.prototype;p.snapNewVertex=function(g,a){var b=a.geometry.data.components[0],d=b.edges.length;const e=[];if(1>d)return e;var f=a.geometry.data.coordinateHelper;const c=f.fromPoint(g);f=k.anyMapPointToScreenPoint(c,f,a.elevationInfo,a.view);d=b=b.edges[d-1];do this.edgeExceedsShortLineThreshold(d,a)&&this._processCandidateProposal(d.left.pos,d.right.pos,g,f,a,e),d=d.left.left;while(d&&d!==b);return e};p.snapExistingVertex=function(g,a){const b=[],d=v.unwrap(a.vertexHandle);
var e=d.component;if(2>e.edges.length)return b;var f=a.geometry.data.coordinateHelper,c=f.fromPoint(g);f=k.anyMapPointToScreenPoint(c,f,a.elevationInfo,a.view);c=d.left;const h=d.right;c&&h&&this.edgeExceedsShortLineThreshold(c,a)&&this.edgeExceedsShortLineThreshold(h,a)&&this._processCandidateProposal(c.left.pos,h.right.pos,g,f,a,b);c=e=e.edges[0];do c!==d.left&&c!==d.right&&this.edgeExceedsShortLineThreshold(c,a)&&this._processCandidateProposal(c.left.pos,c.right.pos,g,f,a,b),c=c.right.right;while(c&&
c!==e);return b};p._processCandidateProposal=function(g,a,b,d,e,f){const c=w.projectPointToLine(r.create(),r.fromValues(b.x,b.y),g,a),h=e.geometry.data.coordinateHelper;b=h.fromXYZ(c,b.hasZ?b.z:0);k.squareDistance(d,k.anyMapPointToScreenPoint(b,h,e.elevationInfo,e.view))<this.squaredProximityTreshold(e.pointer)&&f.push(new x.LineSnappingCandidate({coordinateHelper:e.geometry.data.coordinateHelper,lineStart:g,lineEnd:a,targetPoint:b}))};return n}(m.SnappingAlgorithm);q.LineSnapper=m;Object.defineProperty(q,
"__esModule",{value:!0})});