//>>built
define("dojo/_base/lang dojo/_base/connect dojo/dom-style dojo/_base/fx dojo/fx dojo/_base/html dojox/html/ext-dojo/style dojox/fx/ext-dojo/complex".split(" "),function(h,v,p,f,k,w,A,B){p=h.getObject("dojox.css3.fx",!0);return h.mixin(p,{puff:function(a){return k.combine([f.fadeOut(a),this.expand({node:a.node,endScale:a.endScale||2})])},expand:function(a){return f.animateProperty({node:a.node,properties:{transform:{start:"scale(1)",end:"scale("+[a.endScale||3]+")"}}})},shrink:function(a){return this.expand({node:a.node,
endScale:.01})},rotate:function(a){return f.animateProperty({node:a.node,duration:a.duration||1E3,properties:{transform:{start:"rotate("+(a.startAngle||"0deg")+")",end:"rotate("+(a.endAngle||"360deg")+")"}}})},flip:function(a){var d=[],c=a.whichAnims||[0,1,2,3],b=a.direction||1;b=[{start:"scale(1, 1) skew(0deg,0deg)",end:"scale(0, 1) skew(0,"+30*b+"deg)"},{start:"scale(0, 1) skew(0deg,"+30*b+"deg)",end:"scale(-1, 1) skew(0deg,0deg)"},{start:"scale(-1, 1) skew(0deg,0deg)",end:"scale(0, 1) skew(0deg,"+
30*-b+"deg)"},{start:"scale(0, 1) skew(0deg,"+30*-b+"deg)",end:"scale(1, 1) skew(0deg,0deg)"}];for(var e=0;e<c.length;e++)d.push(f.animateProperty(h.mixin({node:a.node,duration:a.duration||600,properties:{transform:b[c[e]]}},a)));return k.chain(d)},bounce:function(a){var d=[],c=a.node,b=a.duration||1E3,e=a.scaleX||1.2,q=a.scaleY||.6,g=w.style,r=g(c,"position"),t="absolute",x=g(c,"top"),l=[],m=0,y=Math.round,z=a.jumpHeight||70;"absolute"!==r&&(t="relative");var n=f.animateProperty({node:c,duration:b/
6,properties:{transform:{start:"scale(1, 1)",end:"scale("+e+", "+q+")"}}});v.connect(n,"onBegin",function(){g(c,{transformOrigin:"50% 100%",position:t})});d.push(n);e=f.animateProperty({node:c,duration:b/6,properties:{transform:{end:"scale(1, 1)",start:"scale("+e+", "+q+")"}}});l.push(e);l.push(new f.Animation(h.mixin({curve:[],duration:b/3,delay:b/12,onBegin:function(){m=(new Date).getTime()},onAnimate:function(){var u=(new Date).getTime();g(c,{top:parseInt(g(c,"top"))-y((u-m)/this.duration*z)+"px"});
m=u}},a)));d.push(k.combine(l));d.push(f.animateProperty(h.mixin({duration:b/3,onEnd:function(){g(c,{position:r})},properties:{top:x}},a)));d.push(n);d.push(e);return k.chain(d)}})});