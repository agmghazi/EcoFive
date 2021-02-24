//>>built
define(["dojo/_base/declare","dojo/_base/sniff","dojo/dom-class"],function(t,l,u){return t("dojox.grid._ViewManager",null,{constructor:function(a){this.grid=a},defaultWidth:200,views:[],resize:function(){this.onEach("resize")},render:function(){this.onEach("render")},addView:function(a){a.idx=this.views.length;this.views.push(a)},destroyViews:function(){for(var a=0,b;b=this.views[a];a++)b.destroy();this.views=[]},getContentNodes:function(){for(var a=[],b=0,d;d=this.views[b];b++)a.push(d.contentNode);
return a},forEach:function(a){for(var b=0,d;d=this.views[b];b++)a(d,b)},onEach:function(a,b){b=b||[];for(var d=0,c;c=this.views[d];d++)a in c&&c[a].apply(c,b)},normalizeHeaderNodeHeight:function(){for(var a=[],b=0,d;d=this.views[b];b++)d.headerContentNode.firstChild&&a.push(d.headerContentNode);this.normalizeRowNodeHeights(a)},normalizeRowNodeHeights:function(a){var b=0,d=[];if(this.grid.rowHeight)b=this.grid.rowHeight;else{if(1>=a.length)return;for(var c=0,e;e=a[c];c++)u.contains(e,"dojoxGridNonNormalizedCell")||
(d[c]=e.firstChild.offsetHeight,b=Math.max(b,d[c]));b=0<=b?b:0;(l("mozilla")||8<l("ie"))&&b&&b++}for(c=0;e=a[c];c++)d[c]!=b&&(e.firstChild.style.height=b+"px")},resetHeaderNodeHeight:function(){for(var a=0,b;b=this.views[a];a++)if(b=b.headerContentNode.firstChild)b.style.height=""},renormalizeRow:function(a){for(var b=[],d=0,c,e;(c=this.views[d])&&(e=c.getRowNode(a));d++)e.firstChild.style.height="",b.push(e);this.normalizeRowNodeHeights(b)},getViewWidth:function(a){return this.views[a].getWidth()||
this.defaultWidth},measureHeader:function(){this.resetHeaderNodeHeight();this.forEach(function(b){b.headerContentNode.style.height=""});var a=0;this.forEach(function(b){a=Math.max(b.headerNode.offsetHeight,a)});return a},measureContent:function(){var a=0;this.forEach(function(b){a=Math.max(b.domNode.offsetHeight,a)});return a},findClient:function(a){a=this.grid.elasticView||-1;if(0>a)for(var b=1,d;d=this.views[b];b++)if(d.viewWidth){for(b=1;d=this.views[b];b++)if(!d.viewWidth){a=b;break}break}0>a&&
(a=Math.floor(this.views.length/2));return a},arrange:function(a,b){var d,c,e=this.views.length,g=this,k=0>=b?e:this.findClient(),r=function(n,m){var q=n.domNode.style,h=n.headerNode.style;g.grid.isLeftToRight()?(q.left=m+"px",h.left=m+"px"):(q.right=m+"px",4>l("ff")?h.right=m+n.getScrollbarWidth()+"px":h.right=m+"px",l("webkit")||"auto"==h.width||(h.width=parseInt(h.width,10)-n.getScrollbarWidth()+"px"));q.top="0px";h.top=0};for(d=0;(c=this.views[d])&&d<k;d++){var f=this.getViewWidth(d);c.setSize(f,
0);r(c,a);f=c.headerContentNode&&c.headerContentNode.firstChild?c.getColumnsWidth()+c.getScrollbarWidth():c.domNode.offsetWidth;a+=f}d++;for(var p=e-1;(c=this.views[p])&&d<=p;p--)f=this.getViewWidth(p),c.setSize(f,0),f=c.domNode.offsetWidth,b-=f,r(c,b);k<e&&(c=this.views[k],f=Math.max(1,b-a),c.setSize(f+"px",0),r(c,a));return a},renderRow:function(a,b,d){for(var c=[],e=0,g,k;(g=this.views[e])&&(k=b[e]);e++)g=g.renderRow(a),k.appendChild(g),c.push(g);d||this.normalizeRowNodeHeights(c)},rowRemoved:function(a){this.onEach("rowRemoved",
[a])},updateRow:function(a,b){for(var d=0,c;c=this.views[d];d++)c.updateRow(a);b||this.renormalizeRow(a)},updateRowStyles:function(a){this.onEach("updateRowStyles",[a])},setScrollTop:function(a){for(var b=a,d=0,c;c=this.views[d];d++)b=c.setScrollTop(a),l("ie")&&c.headerNode&&c.scrollboxNode&&(c.headerNode.scrollLeft=c.scrollboxNode.scrollLeft);return b},getFirstScrollingView:function(){for(var a=0,b;b=this.views[a];a++)if(b.hasHScrollbar()||b.hasVScrollbar())return b;return null}})});