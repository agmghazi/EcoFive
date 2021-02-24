// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["../../../../core/promiseUtils","../../../../request","../../../../core/pbf"],function(p,q,r){let t=function(){function e(a){this._metrics=[];for(this._bitmaps=[];a.next();)switch(a.tag()){case 1:{const b=a.getMessage();for(;b.next();)switch(b.tag()){case 3:{const c=b.getMessage();let f,g,k,h,l,m,n;for(;c.next();)switch(c.tag()){case 1:f=c.getUInt32();break;case 2:g=c.getBytes();break;case 3:k=c.getUInt32();break;case 4:h=c.getUInt32();break;case 5:l=c.getSInt32();break;case 6:m=c.getSInt32();
break;case 7:n=c.getUInt32();break;default:c.skip()}c.release();f&&(this._metrics[f]={width:k,height:h,left:l,top:m,advance:n},this._bitmaps[f]=g);break}default:b.skip()}b.release();break}default:a.skip()}}var d=e.prototype;d.getMetrics=function(a){return this._metrics[a]};d.getBitmap=function(a){return this._bitmaps[a]};return e}(),u=function(){function e(){this._ranges=[]}var d=e.prototype;d.getRange=function(a){return this._ranges[a]};d.addRange=function(a,b){this._ranges[a]=b};return e}();return function(){function e(a){this._glyphInfo=
{};this._baseURL=a}var d=e.prototype;d.getRange=function(a,b,c){const f=this._getFontStack(a);if(f.getRange(b))return p.resolve();const g=256*b,k=g+255;a=this._baseURL.replace("{fontstack}",a).replace("{range}",g+"-"+k);return q(a,{responseType:"array-buffer",...c}).then(h=>{f.addRange(b,new t(new r(new Uint8Array(h.data),new DataView(h.data))))})};d.getGlyph=function(a,b){if(a=this._getFontStack(a)){var c=Math.floor(b/256);if(!(256<c)&&(a=a.getRange(c)))return{metrics:a.getMetrics(b),bitmap:a.getBitmap(b)}}};
d._getFontStack=function(a){let b=this._glyphInfo[a];b||(b=this._glyphInfo[a]=new u);return b};return e}()});