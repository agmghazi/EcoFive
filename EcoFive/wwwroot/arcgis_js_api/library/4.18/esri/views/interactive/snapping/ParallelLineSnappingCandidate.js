// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/handleUtils ../../../Color ../../../chunks/vec3 ../../../chunks/vec2 ./Settings ./snappingUtils ./SnappingCandidate ./SnappingConstraint ../../3d/interactive/visualElements/ParallelLineVisualElement".split(" "),function(n,r,e,t,u,p,f,g,l,v,w){l=function(q){function m({coordinateHelper:a,referenceLine:b,lineStart:c,targetPoint:d}){const h=a.clone(c);p.subtract(h,p.add(h,h,b.right.pos),b.left.pos);a=q.call(this,a,d,new v.LineConstraint(c,
h))||this;a._referenceLines=[{edge:b,fadeLeft:!0,fadeRight:!0}];return a}r._inheritsLoose(m,q);var k=m.prototype;k.visualizeReferenceHints=function(a,b,c){return e.handlesGroup([...this._referenceLines.map(d=>e.destroyHandle(g.createLineSegmentHintFromEdge(1,d.edge,this.coordinateHelper,b,a,d.fadeLeft,d.fadeRight))),e.destroyHandle(this.createParallelLineVisualElement(a,b,this.constraint.start,c))])};k.visualizeTargetHints=function(a,b,c){return e.handlesGroup([e.destroyHandle(g.createLineSegmentHintFromMap(0,
this.constraint.start,c,this.coordinateHelper,b,a))])};k.addReferenceLine=function(a){const b={edge:a,fadeLeft:!0,fadeRight:!0};this._referenceLines.forEach(c=>{a.right.right===c.edge&&(c.fadeLeft=!1,b.fadeRight=!1);a.left.left===c.edge&&(c.fadeRight=!1,b.fadeLeft=!1)});this._referenceLines.push(b)};k.createParallelLineVisualElement=function(a,b,c,d){c=g.anyMapPointToRender(c,this.coordinateHelper,b,a);b=g.anyMapPointToRender(d,this.coordinateHelper,b,a);b=u.lerp(b,c,b,.5);a=new w.ParallelLineVisualElement({view:a,
attached:!1,offset:f.defaults.parallelLineHintOffset,length:f.defaults.parallelLineHintLength,width:f.defaults.parallelLineHintWidth,color:t.toUnitRGBA(f.defaults.orange),location:b,renderOccluded:16});a.setDirectionFromPoints(c,b);a.attached=!0;return a};return m}(l.SnappingCandidate);n.ParallelLineSnappingCandidate=l;Object.defineProperty(n,"__esModule",{value:!0})});