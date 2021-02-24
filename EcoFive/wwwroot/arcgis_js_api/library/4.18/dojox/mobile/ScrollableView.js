//>>built
define("dojo/_base/array dojo/_base/declare dojo/dom-class dojo/dom-construct dijit/registry ./View ./_ScrollableMixin".split(" "),function(f,g,h,k,e,l,m){return g("dojox.mobile.ScrollableView",[l,m],{scrollableParams:null,keepScrollPos:!1,constructor:function(){this.scrollableParams={noResize:!0}},buildRendering:function(){this.inherited(arguments);h.add(this.domNode,"mblScrollableView");this.domNode.style.overflow="hidden";this.domNode.style.top="0px";this.containerNode=k.create("div",{className:"mblScrollableViewContainer"},
this.domNode);this.containerNode.style.position="absolute";this.containerNode.style.top="0px";"v"===this.scrollDir&&(this.containerNode.style.width="100%")},startup:function(){this._started||(this.fixedFooter&&!this.isLocalFooter&&(this._fixedAppFooter=this.fixedFooter,this.fixedFooter=""),this.reparent(),this.inherited(arguments))},resize:function(){this.inherited(arguments);f.forEach(this.getChildren(),function(a){a.resize&&a.resize()});this._dim=this.getDim();this._conn&&this.resetScrollBar()},
isTopLevel:function(a){a=this.getParent&&this.getParent();return!a||!a.resize},addFixedBar:function(a){a=a.domNode;var b=this.checkFixedBar(a,!0);b&&(this.domNode.appendChild(a),"top"===b?(this.fixedHeaderHeight=a.offsetHeight,this.isLocalHeader=!0):"bottom"===b&&(this.fixedFooterHeight=a.offsetHeight,this.isLocalFooter=!0,a.style.bottom="0px"),this.resize())},reparent:function(){var a,b;var d=a=0;for(b=this.domNode.childNodes.length;a<b;a++){var c=this.domNode.childNodes[d];c===this.containerNode||
this.checkFixedBar(c,!0)?d++:this.containerNode.appendChild(this.domNode.removeChild(c))}},onAfterTransitionIn:function(a,b,d,c,n){this.flashScrollBar()},getChildren:function(){var a=this.inherited(arguments),b;this.fixedHeader&&this.fixedHeader.parentNode===this.domNode&&(b=e.byNode(this.fixedHeader))&&a.push(b);this.fixedFooter&&this.fixedFooter.parentNode===this.domNode&&(b=e.byNode(this.fixedFooter))&&a.push(b);return a},_addTransitionPaddingTop:function(a){this.domNode.style.paddingTop=a+"px";
this.containerNode.style.paddingTop=a+"px"},_removeTransitionPaddingTop:function(){this.domNode.style.paddingTop="";this.containerNode.style.paddingTop=""}})});