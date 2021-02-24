//>>built
define("dojo/_base/lang dojo/_base/array dojo/_base/declare dojo/has ./CartesianBase ./_PlotEvents ./common dojox/gfx/fx dojox/lang/utils dojox/lang/functional".split(" "),function(w,A,L,M,N,O,D,P,G,Q){var H=function(){return!1};return L("dojox.charting.plot2d.Bars",[N,O],{defaultParams:{gap:0,animate:null,enableCache:!1},optionalParams:{minBarSize:1,maxBarSize:1,stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:""},constructor:function(a,b){this.opt=w.clone(w.mixin(this.opt,
this.defaultParams));G.updateWithObject(this.opt,b);G.updateWithPattern(this.opt,b,this.optionalParams);this.animate=this.opt.animate;this.renderingOptions={"shape-rendering":"crispEdges"}},getSeriesStats:function(){var a=D.collectSimpleStats(this.series,w.hitch(this,"isNullValue"));a.hmin-=.5;a.hmax+=.5;var b=a.hmin;a.hmin=a.vmin;a.vmin=b;b=a.hmax;a.hmax=a.vmax;a.vmax=b;return a},createRect:function(a,b,c){if(this.opt.enableCache&&0<a._rectFreePool.length){var e=a._rectFreePool.pop();e.setShape(c);
b.add(e)}else e=b.createRect(c);this.opt.enableCache&&a._rectUsePool.push(e);return e},createLabel:function(a,b,c,e){this.opt.labels&&"outside"==this.opt.labelStyle?this.renderLabel(a,c.x+c.width+this.opt.labelOffset,c.y+c.height/2,this._getLabel(isNaN(b.y)?b:b.y),e,"start"):this.inherited(arguments)},render:function(a,b){if(this.zoom&&!this.isDataDirty())return this.performZoom(a,b);this.dirty=this.isDirty();this.resetEvents();if(this.dirty){A.forEach(this.series,D.purgeGroup);this._eventSeries=
{};this.cleanGroup();var c=this.getGroup();Q.forEachRev(this.series,function(t){t.cleanGroup(c)})}var e=this.chart.theme,h=this._hScaler.scaler.getTransformerFromModel(this._hScaler),g=this._vScaler.scaler.getTransformerFromModel(this._vScaler),k=Math.max(this._hScaler.bounds.lower,this._hAxis?this._hAxis.naturalBaseline:0),l=h(k),p=this.events(),B=this.getBarProperties(),E=this.series.length;A.forEach(this.series,function(t){t.hidden&&E--});var I=E,F=this.extractValues(this._vScaler);F=this.rearrangeValues(F,
h,l);for(var x=0;x<this.series.length;x++){var d=this.series[x];if(this.dirty||d.dirty){d.cleanGroup();this.opt.enableCache&&(d._rectFreePool=(d._rectFreePool?d._rectFreePool:[]).concat(d._rectUsePool?d._rectUsePool:[]),d._rectUsePool=[]);var C=e.next("bar",[this.opt,d]);if(d.hidden)d.dyn.fill=C.series.fill,d.dyn.stroke=C.series.stroke;else{I--;var J=Array(d.data.length);c=d.group;for(var y=A.some(d.data,function(t){return"number"==typeof t||t&&!t.hasOwnProperty("x")}),R=y?Math.min(d.data.length,
Math.ceil(this._vScaler.bounds.to)):d.data.length,m=y?Math.max(0,Math.floor(this._vScaler.bounds.from-1)):0;m<R;++m){var u=d.data[m];if(!this.isNullValue(u)){var v=this.getValue(u,m,x,y),z=F[x][m];if(this.opt.styleFunc||"number"!=typeof u){var f="number"!=typeof u?[u]:[];this.opt.styleFunc&&f.push(this.opt.styleFunc(u));f=e.addMixin(C,"bar",f,!0)}else f=e.post(C,"bar");if(z&&1<=B.height){var q={x:b.l+l+Math.min(z,0),y:a.height-b.b-g(v.x+1.5)+B.gap+B.thickness*(E-I-1),width:Math.abs(z),height:B.height};
if(f.series.shadow){var r=w.clone(q);r.x+=f.series.shadow.dx;r.y+=f.series.shadow.dy;r=this.createRect(d,c,r).setFill(f.series.shadow.color).setStroke(f.series.shadow);this.animate&&this._animateBar(r,b.l+l,-z)}var n=this._plotFill(f.series.fill,a,b);n=this._shapeFill(n,q);n=this.createRect(d,c,q).setFill(n).setStroke(f.series.stroke);n.setFilter&&f.series.filter&&n.setFilter(f.series.filter);d.dyn.fill=n.getFill();d.dyn.stroke=n.getStroke();if(p){var K={element:"bar",index:m,run:d,shape:n,shadow:r,
cx:v.y,cy:v.x+1.5,x:y?m:d.data[m].x,y:y?d.data[m]:d.data[m].y};this._connectEvents(K);J[m]=K}!isNaN(v.py)&&v.py>k&&(q.x+=h(v.py),q.width-=h(v.py));this.createLabel(c,u,q,f);this.animate&&this._animateBar(n,b.l+l,-Math.abs(z))}}}this._eventSeries[d.name]=J;d.dirty=!1}}else e.skip(),this._reconnectEvents(d.name)}this.dirty=!1;M("dojo-bidi")&&this._checkOrientation(this.group,a,b);return this},getValue:function(a,b,c,e){e?(c="number"==typeof a?a:a.y,a=b):(c=a.y,a=a.x-1);return{y:c,x:a}},extractValues:function(a){for(var b=
[],c=this.series.length-1;0<=c;--c){var e=this.series[c];if(this.dirty||e.dirty){var h=A.some(e.data,function(p){return"number"==typeof p||p&&!p.hasOwnProperty("x")}),g=h?Math.max(0,Math.floor(a.bounds.from-1)):0;h=h?Math.min(e.data.length,Math.ceil(a.bounds.to)):e.data.length;var k=b[c]=[];k.min=g;for(k.max=h;g<h;++g){var l=e.data[g];k[g]=this.isNullValue(l)?0:"number"==typeof l?l:l.y}}}return b},rearrangeValues:function(a,b,c){for(var e=0,h=a.length;e<h;++e){var g=a[e];if(g)for(var k=g.min,l=g.max;k<
l;++k){var p=g[k];g[k]=this.isNullValue(p)?0:b(p)-c}}return a},isNullValue:function(a){if(null===a||"undefined"==typeof a)return!0;var b=this._hAxis?this._hAxis.isNullValue:H,c=this._vAxis?this._vAxis.isNullValue:H;return"number"==typeof a?c(.5)||b(a):c(isNaN(a.x)?.5:a.x+.5)||null===a.y||b(a.y)},getBarProperties:function(){var a=D.calculateBarSize(this._vScaler.bounds.scale,this.opt);return{gap:a.gap,height:a.size,thickness:0}},_animateBar:function(a,b,c){0==c&&(c=1);P.animateTransform(w.delegate({shape:a,
duration:1200,transform:[{name:"translate",start:[b-b/c,0],end:[0,0]},{name:"scale",start:[1/c,1],end:[1,1]},{name:"original"}]},this.animate)).play()}})});