// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../core/screenUtils ../engine/webgl/definitions ../engine/webgl/alignmentUtils ../engine/webgl/mesh/templates/shapingUtils ../engine/webgl/util/BidiText".split(" "),function(e,c,f,g,h,k){e.getTextBounds=async function(a,d,b){const l=g.getXAnchorDirection("center"),m=g.getYAnchorDirection("middle");b=d.textureManager.rasterizeItem(a.toJSON(),window.devicePixelRatio||1,null,b);[,d]=k.bidiText(a.text);b=(await b).glyphMosaicItems;return h.shapeGlyphs(b,d,{angle:a.angle||0,xOffset:c.pt2px(a.xoffset||
0),yOffset:c.pt2px(a.yoffset||0),lineHeight:f.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,Math.min(a.lineHeight,4)),maxLineWidth:Math.max(32,Math.min(c.pt2px(a.lineWidth),512)),decoration:a.font.decoration,scale:Math.min(Math.round(c.pt2px(a.font.size)),127)/f.GLYPH_SIZE,hAlign:l,vAlign:m,isCIM:!1}).boundsT};Object.defineProperty(e,"__esModule",{value:!0})});