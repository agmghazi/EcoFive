//>>built
define("dojo/_base/lang dojo/_base/declare dojo/_base/Color ../../RectangularGauge ../../LinearScaler ../../RectangularScale ../../RectangularValueIndicator ../DefaultPropertiesMixin".split(" "),function(f,g,d,h,k,l,m,n){return g("dojox.dgauges.components.black.HorizontalLinearGauge",[h,n],{borderColor:"#000000",fillColor:"#000000",indicatorColor:"#A4A4A4",constructor:function(){this.borderColor=new d(this.borderColor);this.fillColor=new d(this.fillColor);this.indicatorColor=new d(this.indicatorColor);
this.addElement("background",f.hitch(this,this.drawBackground));var b=new k,a=new l;a.set("scaler",b);a.set("labelPosition","leading");a.set("paddingLeft",30);a.set("paddingRight",30);a.set("paddingTop",34);a.set("labelGap",8);a.set("font",{family:"Helvetica",weight:"bold",size:"7pt",color:"#CECECE"});a.set("tickShapeFunc",function(e,p,q){return e.createCircle({r:q.isMinor?.5:3}).setFill("#CECECE")});this.addElement("scale",a);var c=new m;c.set("interactionArea","gauge");c.set("value",b.minimum);
c.set("paddingTop",30);c.set("indicatorShapeFunc",f.hitch(this,function(e,p){return e.createPolyline([0,0,-10,-20,10,-20,0,0]).setFill(this.indicatorColor).setStroke({color:[70,70,70],width:1,style:"Solid",cap:"butt",join:20})}));a.addIndicator("indicator",c)},drawBackground:function(b,a,c){b.createRect({x:0,y:0,width:a,height:50,r:15}).setFill(this.borderColor);b.createRect({x:4,y:4,width:a-8,height:42,r:12}).setFill({type:"linear",x1:0,y1:50,x2:0,y2:30,colors:[{offset:0,color:[100,100,100]},{offset:1,
color:this.fillColor}]});b.createPath().moveTo(4,25).vLineTo(14).smoothCurveTo(4,4,18,4).hLineTo(a-16).smoothCurveTo(a-4,4,a-4,16).closePath().setFill({type:"linear",x1:0,y1:0,x2:0,y2:20,colors:[{offset:0,color:[150,150,150]},{offset:1,color:this.fillColor}]});b.createPath().moveTo(4,25).vLineTo(14).smoothCurveTo(4,4,18,4).hLineTo(a-16).smoothCurveTo(a-4,4,a-4,16).closePath().setFill([255,255,255,.05])}})});