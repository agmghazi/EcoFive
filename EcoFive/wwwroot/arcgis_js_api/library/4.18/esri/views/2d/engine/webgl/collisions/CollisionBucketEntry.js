// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/vec2"],function(t,g){return function(){function l(){this._reference=null}l.prototype.reset=function(b,e,k){({state:b}=b);const u=k.layerView.tileRenderer,f=this.reference;if(!f||!f.hasData)return!1;e&&(f.isDirty=!0);e=f.transforms.labelMat2d;const n=e[4],p=e[5];for(const q of f.displayObjects){var m=u.featuresView.attributeView;m=k.hasVV()?m.getVVSize(q.id):0;for(const a of q.metrics){k.hasVV()&&a.computeVVOffset(m,k.vvEval);
var c=a.bounds.center;const d=a.bounds.centerT;f.isDirty&&(a.minZoom=-1);const h=g.copy(d,a.anchor);b.rotation?g.transformMat2d(h,h,e):(d[0]=h[0]+n,d[1]=h[1]+p);g.add(d,h,c);d[0]+=a.offsetX;d[1]+=a.offsetY;if(a.boxes)for(const r of a.boxes)c=r.centerT,g.add(c,a.anchor,r.center),b.rotation?g.transformMat2d(c,c,e):(c[0]+=n,c[1]+=p)}}return!0};t._createClass(l,[{key:"dirty",get:function(){return this.reference&&this.reference.isDirty},set:function(b){this.reference&&this.reference.hasData&&(b||this.reference.isDirty)&&
(this.reference.isDirty=b)}},{key:"index",get:function(){return this._reference&&this._reference.labelIndex}},{key:"reference",get:function(){return this._reference},set:function(b){this._reference=b}}]);return l}()});