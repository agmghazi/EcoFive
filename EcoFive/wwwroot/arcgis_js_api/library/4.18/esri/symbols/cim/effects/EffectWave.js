// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../../geometry/support/jsonUtils","../CurveHelper","../GeometryWalker"],function(p,q,n,r){let t=function(){function g(){}g.local=function(){null===g.instance&&(g.instance=new g);return g.instance};g.prototype.execute=function(h,a,b){return new w(h,a,b)};return g}();t.instance=null;let w=function(){function g(a,b,d){this._inputGeometries=a;this._height=(void 0!==b.amplitude?b.amplitude:2)*d;this._period=(void 0!==b.period?b.period:3)*d;this._style=b.waveform;0>=this._height&&
(this._height=Math.abs(this._height));0>=this._period&&(this._period=Math.abs(this._period));this._pattern=new r.DashPattern;this._pattern.addValue(this._period);this._pattern.addValue(this._period);this._walker=new r.GeometryWalker;this._walker.updateTolerance(d)}var h=g.prototype;h.next=function(){for(var a=this._inputGeometries.next();a;){if(0===this._height||0===this._period)return a;if(q.isPolyline(a)){const b=this._processGeom(a.paths);if(b.length)return{paths:b}}if(q.isPolygon(a)&&(a=this._processGeom(a.rings),
a.length))return{rings:a};a=this._inputGeometries.next()}return null};h._processGeom=function(a){const b=[];for(const d of a)if(this._walker.init(d,this._pattern))switch(this._style){default:b.push(this._constructCurve(d,!1));break;case "Square":b.push(this._constructSquare(d));break;case "Triangle":b.push(this._constructTriangle(d));break;case "Random":b.push(this._constructCurve(d,!0))}else b.push(d);return b};h._constructCurve=function(a,b){const d=new n.PathHelper;var e=this._walker.calculatePathLength(a),
c=Math.round(e/this._period);0===c&&(c=1);const f=this._period/16,x=1/(16*c+1);e=2*Math.PI*e/(e/c);c=2*Math.PI*Math.random();const y=2*Math.PI*Math.random(),z=2*Math.PI*Math.random(),A=.75-Math.random()/2,B=.75-Math.random()/2,k={};this._walker.curPointAndAngle(k);d.startPath(k.pt);let u=0;for(;;)if(this._walker.nextPointAndAngle(f,k)){const m=u;u+=x;let l;if(b){const v=this._height/2*(1+.3*Math.sin(A*e*m+c));l=v*Math.sin(e*m+y);l+=v*Math.sin(B*e*m+z);l/=2}else l=.5*this._height*Math.sin(.5*e*m);
d.lineTo([k.pt[0]-l*k.sa,k.pt[1]+l*k.ca])}else{d.lineTo(a[a.length-1]);break}return d.path()};h._constructSquare=function(a){const b=new n.PathHelper;a=this._walker.calculatePathLength(a);a=Math.round(a/this._period);0===a&&(a=1);for(a=!0;;){let d=!1;if(this._walker.curPositionIsValid()){const e={};this._walker.curPointAndAngle(e);const c={};if(this._walker.nextPointAndAngle(this._period,c)){const f={};this._walker.nextPointAndAngle(this._period,f)&&(a?(b.startPath(e.pt),a=!1):b.lineTo(e.pt),b.lineTo([e.pt[0]-
this._height/2*e.sa,e.pt[1]+this._height/2*e.ca]),b.lineTo([c.pt[0]-this._height/2*c.sa,c.pt[1]+this._height/2*c.ca]),b.lineTo([c.pt[0]+this._height/2*c.sa,c.pt[1]-this._height/2*c.ca]),b.lineTo([f.pt[0]+this._height/2*f.sa,f.pt[1]-this._height/2*f.ca]),d=!0)}}if(!d){b.lineTo(this._walker.getPathEnd());break}}return b.path()};h._constructTriangle=function(a){const b=new n.PathHelper;a=this._walker.calculatePathLength(a);a=Math.round(a/this._period);0===a&&(a=1);for(a=!0;;){let d=!1;if(this._walker.curPositionIsValid()){const e=
{};this._walker.curPointAndAngle(e);const c={};if(this._walker.nextPointAndAngle(this._period/2,c)){const f={};this._walker.nextPointAndAngle(this._period,f)&&(this._walker.nextPosition(this._period/2)&&(a?(b.startPath(e.pt),a=!1):b.lineTo(e.pt),b.lineTo([c.pt[0]-this._height/2*c.sa,c.pt[1]+this._height/2*c.ca]),b.lineTo([f.pt[0]+this._height/2*f.sa,f.pt[1]-this._height/2*f.ca])),d=!0)}}if(!d){b.lineTo(this._walker.getPathEnd());break}}return b.path()};return g}();p.EffectWave=t;Object.defineProperty(p,
"__esModule",{value:!0})});