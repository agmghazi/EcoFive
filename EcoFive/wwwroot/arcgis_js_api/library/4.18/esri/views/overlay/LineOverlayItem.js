// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/Accessor ../../libs/maquette/projection ../../libs/maquette/h ../../libs/maquette/projector".split(" "),function(p,d,c,x,y,e,z,t,A,B,C,u,D,k,E){c=function(q){function h(a){a=
q.call(this,a)||this;a.startX=0;a.startY=0;a.endX=0;a.endY=0;a.width=1;a.color=[0,0,0,.5];a.visible=!0;return a}p._inheritsLoose(h,q);var l=h.prototype;l.render=function(){const {height:a,left:b,top:m,width:g,x1:n,x2:f,y1:v,y2:w}=this.calculateCoordinates(r);return k.h("div",{classes:{"esri-line-overlay-item":!0},styles:{left:b+"px",top:m+"px",width:g+"px",height:a+"px",visibility:this.visible?"visible":"hidden"}},[k.h("svg",{width:g,height:a},[k.h("line",{x1:n,y1:v,x2:f,y2:w,style:`stroke: ${this.strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this.lineCap};`})])])};
l.renderCanvas=function(a){if(this.visible){a.strokeStyle=this.strokeStyle;a.lineWidth=this.width;a.lineCap=this.lineCap;var b=this.calculateCoordinates(r);a.beginPath();a.moveTo(b.left+b.x1,b.top+b.y1);a.lineTo(b.left+b.x2,b.top+b.y2);a.stroke()}};l.calculateCoordinates=function(a){const b=Math.min(this.startX,this.endX),m=Math.max(this.startX,this.endX),g=Math.min(this.startY,this.endY),n=Math.max(this.startY,this.endY),f=this.width;a.left=b-f;a.top=g-f;a.width=m-b+2*f;a.height=Math.max(20,n-g+
2*f);a.x1=this.startX-b+f;a.y1=this.startY-g+f;a.x2=this.endX-b+f;a.y2=this.endY-g+f;return a};p._createClass(h,[{key:"startPosition",get:function(){return[this.startX,this.startY]},set:function(a){this._set("startX",a[0]);this._set("startY",a[1])}},{key:"endPosition",get:function(){return[this.endX,this.endY]},set:function(a){this._set("endX",a[0]);this._set("endY",a[1])}},{key:"strokeStyle",get:function(){const a=this.color;return`rgba(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`}},{key:"lineCap",get:function(){return"round"}}]);
return h}(u);d.__decorate([e.property()],c.prototype,"startX",void 0);d.__decorate([e.property()],c.prototype,"startY",void 0);d.__decorate([e.property()],c.prototype,"endX",void 0);d.__decorate([e.property()],c.prototype,"endY",void 0);d.__decorate([e.property({dependsOn:["startX","startY"]})],c.prototype,"startPosition",null);d.__decorate([e.property({dependsOn:["endX","endY"]})],c.prototype,"endPosition",null);d.__decorate([e.property()],c.prototype,"width",void 0);d.__decorate([e.property()],
c.prototype,"color",void 0);d.__decorate([e.property()],c.prototype,"visible",void 0);d.__decorate([e.property({readOnly:!0,dependsOn:["color"]})],c.prototype,"strokeStyle",null);c=d.__decorate([t.subclass("esri.views.overlay.LineOverlayItem")],c);const r={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0};return c});