//>>built
define("dojo/_base/lang dojo/_base/declare dojo/_base/connect dojo/_base/array dojo/dom-geometry dojo/_base/fx dojo/fx dojo/sniff ./Base ./_PlotEvents ./common ../axis2d/common dojox/gfx dojox/gfx/matrix dojox/gfx/fx dojox/lang/functional dojox/lang/utils dojo/fx/easing".split(" "),function(L,Z,Q,M,R,S,aa,T,ba,ca,U,V,B,da,ja,W,X,ea){return Z("dojox.charting.plot2d.Spider",[ba,ca],{defaultParams:{labels:!0,ticks:!1,fixed:!0,precision:1,labelOffset:-10,labelStyle:"default",htmlLabels:!0,startAngle:-90,
divisions:3,axisColor:"",axisWidth:0,spiderColor:"",spiderWidth:0,seriesWidth:0,seriesFillAlpha:.2,spiderOrigin:.16,markerSize:3,spiderType:"polygon",animationType:ea.backOut,animate:null,axisTickFont:"",axisTickFontColor:"",axisFont:"",axisFontColor:""},optionalParams:{radius:0,font:"",fontColor:""},constructor:function(b,a){this.opt=L.clone(this.defaultParams);X.updateWithObject(this.opt,a);X.updateWithPattern(this.opt,a,this.optionalParams);this.dyn=[];this.datas={};this.labelKey=[];this.oldSeriePoints=
{};this.animate=null===this.opt.animate?{}:this.opt.animate;this.animations={}},clear:function(){this.inherited(arguments);this.dyn=[];this.axes=[];this.datas={};this.labelKey=[];this.oldSeriePoints={};this.animations={};return this},setAxis:function(b){b&&(void 0!=b.opt.min&&(this.datas[b.name].min=b.opt.min),void 0!=b.opt.max&&(this.datas[b.name].max=b.opt.max));return this},addSeries:function(b){this.series.push(b);for(var a in b.data){var e=b.data[a],h=this.datas[a];h?(h.vlist.push(e),h.min=Math.min(h.min,
e),h.max=Math.max(h.max,e)):(h="__"+a,this.axes.push(h),this[h]=a,this.datas[a]={min:e,max:e,vlist:[e]})}if(0>=this.labelKey.length)for(a in b.data)this.labelKey.push(a);return this},getSeriesStats:function(){return U.collectSimpleStats(this.series,function(b){return null===b})},render:function(b,a){if(!this.dirty)return this;this.dirty=!1;this.cleanGroup();var e=this.group,h=this.chart.theme;this.resetEvents();if(!this.series||!this.series.length)return this;var c=this.opt,f=h.axis,d=(b.width-a.l-
a.r)/2,m=(b.height-a.t-a.b)/2,l=Math.min(d,m),r=c.font||f.majorTick&&f.majorTick.font||f.tick&&f.tick.font||"normal normal normal 7pt Tahoma",q=c.axisFont||f.tick&&f.tick.titleFont||"normal normal normal 11pt Tahoma",x=c.axisTickFontColor||f.majorTick&&f.majorTick.fontColor||f.tick&&f.tick.fontColor||"silver",v=c.axisFontColor||f.tick&&f.tick.titleFontColor||"black",t=c.axisColor||f.tick&&f.tick.axisColor||"silver",k=c.spiderColor||f.tick&&f.tick.spiderColor||"silver",D=c.axisWidth||f.stroke&&f.stroke.width||
2,n=c.spiderWidth||f.stroke&&f.stroke.width||2;f=c.seriesWidth||f.stroke&&f.stroke.width||2;var g=B.normalizedLength(B.splitFontString(q).size),F=da._degToRad(c.startAngle),y=c.spiderOrigin,E=3<=c.divisions?c.divisions:3,fa=c.markerSize,ha=c.spiderType,ia=c.animationType,N=-10>c.labelOffset?c.labelOffset:-10;if(c.labels){l=M.map(this.series,function(G){return G.name},this);l=W.foldl1(W.map(l,function(G){return B._base._getTextBox(G,{font:h.series.font}).w},this),"Math.max(a, b)")/2;l=Math.min(d-2*
l,m-g)+N;var Y=l-N}"radius"in c&&(l=c.radius,Y=l-N);l/=1.2;a={cx:a.l+d,cy:a.t+m,r:l};for(d=0;d<this.series.length;d++){var p=this.series[d];if(this.dirty||p.dirty){if(p.cleanGroup(),g=p.data,null!==g&&(m=this._getObjectLength(g),!w||0>=w.length)){var w=[];var O=[];var C=[];this._buildPoints(w,m,a,l,F,!0,b);this._buildPoints(O,m,a,l*y,F,!0,b);this._buildPoints(C,m,a,Y,F,!1,b);if(2<E){var z=[];var u=[];for(g=0;g<E-2;g++)z[g]=[],this._buildPoints(z[g],m,a,l*(y+(1-y)*(g+1)/(E-1)),F,!0,b),u[g]=l*(y+(1-
y)*(g+1)/(E-1))}}}else h.skip()}m=e.createGroup();t={color:t,width:D};d={color:k,width:n};for(g=w.length-1;0<=g;--g)k=w[g],n={x:k.x+.2*(k.x-a.cx),y:k.y+.2*(k.y-a.cy)},k={x:k.x+.2*(k.x-a.cx)/2,y:k.y+.2*(k.y-a.cy)/2},m.createLine({x1:a.cx,y1:a.cy,x2:n.x,y2:n.y}).setStroke(t),this._drawArrow(m,n,k,t);m=e.createGroup();for(g=C.length-1;0<=g;--g)k=C[g],n=B._base._getTextBox(this.labelKey[g],{font:q}).w||0,t=this.opt.htmlLabels&&"vml"!=B.renderer?"html":"gfx",k=V.createText[t](this.chart,m,R.isBodyLtr()||
"html"!=t?k.x:k.x+n-b.width,k.y,"middle",this.labelKey[g],q,v),this.opt.htmlLabels&&this.htmlElements.push(k);q=e.createGroup();if("polygon"==ha){if(q.createPolyline(w).setStroke(d),q.createPolyline(O).setStroke(d),0<z.length)for(g=z.length-1;0<=g;--g)q.createPolyline(z[g]).setStroke(d)}else if(q.createCircle({cx:a.cx,cy:a.cy,r:l}).setStroke(d),q.createCircle({cx:a.cx,cy:a.cy,r:l*y}).setStroke(d),0<u.length)for(g=u.length-1;0<=g;--g)q.createCircle({cx:a.cx,cy:a.cy,r:u[g]}).setStroke(d);m=this._getObjectLength(this.datas);
v=e.createGroup();z=0;for(var H in this.datas){u=this.datas[H];w=u.min;u=u.max;u-=w;q=F+2*Math.PI*z/m;for(d=0;d<E;d++)C=w+u*d/(E-1),k=this._getCoordinate(a,l*(y+(1-y)*d/(E-1)),q,b),C=this._getLabel(C),n=B._base._getTextBox(C,{font:r}).w||0,t=this.opt.htmlLabels&&"vml"!=B.renderer?"html":"gfx",this.opt.htmlLabels&&this.htmlElements.push(V.createText[t](this.chart,v,R.isBodyLtr()||"html"!=t?k.x:k.x+n-b.width,k.y,"start",C,r,x));z++}this.chart.seriesShapes={};for(d=this.series.length-1;0<=d;d--)if(p=
this.series[d],g=p.data,null!==g){r=h.next("spider",[c,p]);var I=B.normalizeColor(r.series.fill);r={color:r.series.fill,width:f};I.a=c.seriesFillAlpha;p.dyn={fill:I,stroke:r};if(!p.hidden){var A=[],J=[];z=0;for(H in g)u=this.datas[H],w=u.min,u=u.max,u-=w,x=g[H],q=F+2*Math.PI*z/m,k=this._getCoordinate(a,l*(y+(1-y)*(x-w)/u),q,b),A.push(k),J.push({sname:p.name,key:H,data:x}),z++;A[A.length]=A[0];J[J.length]=J[0];x=this._getBoundary(A);var P=p.group;r=this._createSeriesEntry(P,this.oldSeriePoints[p.name]||
O,A,I,r,l,y,fa,ia);this.chart.seriesShapes[p.name]=r;this.oldSeriePoints[p.name]=A;this._connectEvents({element:"spider_poly",index:d,id:"spider_poly_"+p.name,run:p,plot:this,shape:r.poly,parent:P,brect:x,cx:a.cx,cy:a.cy,cr:l,f:I,s:e});this._connectEvents({element:"spider_plot",index:d,id:"spider_plot_"+p.name,run:p,plot:this,shape:p.group});M.forEach(r.circles,function(G,K){this._connectEvents({element:"spider_circle",index:K,id:"spider_circle_"+p.name+K,run:p,plot:this,shape:G,parent:P,tdata:J[K],
cx:A[K].x,cy:A[K].y,f:I,s:e})},this)}}return this},_createSeriesEntry:function(b,a,e,h,c,f,d,m,l){f=this.animate?a:e;var r=b.createPolyline(f).setFill(h).setStroke(c),q=[];for(d=0;d<f.length;d++){var x=f[d];x=b.createCircle({cx:x.x,cy:x.y,r:m}).setFill(h).setStroke(c);q.push(x)}this.animate&&(h=M.map(e,function(v,t){v=new S.Animation(L.delegate({duration:1E3,easing:l,curve:[a[t].y,v.y]},this.animate));var k=q[t];Q.connect(v,"onAnimate",function(D){var n=r.getShape();n.points[t].y=D;r.setShape(n);
n=k.getShape();n.cy=D;k.setShape(n)});return v},this),e=M.map(e,function(v,t){v=new S.Animation(L.delegate({duration:1E3,easing:l,curve:[a[t].x,v.x]},this.animate));var k=q[t];Q.connect(v,"onAnimate",function(D){var n=r.getShape();n.points[t].x=D;r.setShape(n);n=k.getShape();n.cx=D;k.setShape(n)});return v},this),aa.combine(h.concat(e)).play());return{group:b,poly:r,circles:q}},plotEvent:function(b){"spider_plot"==b.element&&("onmouseover"!=b.type||T("ie")||b.shape.moveToFront())},tooltipFunc:function(b){return"spider_circle"==
b.element?b.tdata.sname+"\x3cbr/\x3e"+b.tdata.key+"\x3cbr/\x3e"+b.tdata.data:null},_getBoundary:function(b){for(var a=b[0].x,e=b[0].x,h=b[0].y,c=b[0].y,f=0;f<b.length;f++){var d=b[f];a=Math.max(d.x,a);h=Math.max(d.y,h);e=Math.min(d.x,e);c=Math.min(d.y,c)}return{x:e,y:c,width:a-e,height:h-c}},_drawArrow:function(b,a,e,h){var c=Math.sqrt(Math.pow(e.x-a.x,2)+Math.pow(e.y-a.y,2)),f=(e.y-a.y)/c,d=(e.x-a.x)/c;b.createPolyline([a,{x:e.x+c/3*-f,y:e.y+c/3*d},{x:e.x+c/3*f,y:e.y+c/3*-d}]).setFill(h.color).setStroke(h)},
_buildPoints:function(b,a,e,h,c,f,d){for(var m=0;m<a;m++)b.push(this._getCoordinate(e,h,c+2*Math.PI*m/a,d));f&&b.push(this._getCoordinate(e,h,c+2*Math.PI,d))},_getCoordinate:function(b,a,e,h){var c=b.cx+a*Math.cos(e);T("dojo-bidi")&&this.chart.isRightToLeft()&&h&&(c=h.width-c);return{x:c,y:b.cy+a*Math.sin(e)}},_getObjectLength:function(b){var a=0;if(L.isObject(b))for(var e in b)a++;return a},_getLabel:function(b){return U.getLabel(b,this.opt.fixed,this.opt.precision)}})});