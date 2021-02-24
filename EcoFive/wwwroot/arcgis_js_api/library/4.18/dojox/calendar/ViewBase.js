//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/window dojo/_base/event dojo/_base/html dojo/sniff dojo/query dojo/dom dojo/dom-style dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/on dojo/date dojo/date/locale dojo/when dijit/_WidgetBase dojox/widget/_Invalidating dojox/widget/Selection ./time ./StoreMixin ./StoreManager ./RendererManager".split(" "),function(D,h,t,A,E,M,r,N,O,u,F,G,v,P,y,z,H,I,J,K,p,L,B,C){return D("dojox.calendar.ViewBase",[I,L,J,K],{datePackage:y,
_calendar:"gregorian",viewKind:null,_layoutStep:1,_layoutUnit:"day",resizeCursor:"n-resize",formatItemTimeFunc:null,_cssDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),_getFormatItemTimeFuncAttr:function(){if(this.formatItemTimeFunc)return this.formatItemTimeFunc;if(null!=this.owner)return this.owner.get("formatItemTimeFunc")},_viewHandles:null,doubleTapDelay:300,constructor:function(a){a=a||{};this._calendar=a.datePackage?a.datePackage.substr(a.datePackage.lastIndexOf(".")+1):this._calendar;this.dateModule=
a.datePackage?h.getObject(a.datePackage,!1):y;this.dateClassObj=this.dateModule.Date||Date;this.dateLocaleModule=a.datePackage?h.getObject(a.datePackage+".locale",!1):z;this._viewHandles=[];this.storeManager=new B({owner:this,_ownerItemsProperty:"items"});this.storeManager.on("layoutInvalidated",h.hitch(this,this._refreshItemsRendering));this.storeManager.on("dataLoaded",h.hitch(this,function(b){this.set("items",b)}));this.storeManager.on("renderersInvalidated",h.hitch(this,function(b){this.updateRenderers(b)}));
this.rendererManager=new C({owner:this});this.rendererManager.on("rendererCreated",h.hitch(this,this._onRendererCreated));this.rendererManager.on("rendererReused",h.hitch(this,this._onRendererReused));this.rendererManager.on("rendererRecycled",h.hitch(this,this._onRendererRecycled));this.rendererManager.on("rendererDestroyed",h.hitch(this,this._onRendererDestroyed));this.decorationStoreManager=new B({owner:this,_ownerItemsProperty:"decorationItems"});this.decorationStoreManager.on("layoutInvalidated",
h.hitch(this,this._refreshDecorationItemsRendering));this.decorationStoreManager.on("dataLoaded",h.hitch(this,function(b){this.set("decorationItems",b)}));this.decorationRendererManager=new C({owner:this});this._setupDayRefresh()},destroy:function(a){this.rendererManager.destroy();for(this.decorationRendererManager.destroy();0<this._viewHandles.length;)this._viewHandles.pop().remove();this.inherited(arguments)},_setupDayRefresh:function(){var a=this.newDate(new Date),b=p.floor(a,"day",1,this.dateClassObj);
b=this.dateModule.add(b,"day",1);b=23==b.getHours()?this.dateModule.add(b,"hour",2):p.floorToDay(b,!0,this.dateClassObj);setTimeout(h.hitch(this,function(){this._isEditing||this.refreshRendering(!0);this._setupDayRefresh()}),b.getTime()-a.getTime()+5E3)},resize:function(a){a&&v.setMarginBox(this.domNode,a)},beforeActivate:function(){},afterActivate:function(){},beforeDeactivate:function(){},afterDeactivate:function(){},_getTopOwner:function(){for(var a=this;void 0!=a.owner;)a=a.owner;return a},_createRenderData:function(){},
_validateProperties:function(){},_setText:function(a,b,c){if(null!=b)if(!c&&a.hasChildNodes())a.childNodes[0].childNodes[0].nodeValue=b;else{for(;a.hasChildNodes();)a.removeChild(a.lastChild);var d=A.doc.createElement("span");r("dojo-bidi")&&this.applyTextDir(d,b);c?d.innerHTML=b:d.appendChild(A.doc.createTextNode(b));a.appendChild(d)}},isAscendantHasClass:function(a,b,c){for(;a!=b&&a!=document;){if(F.contains(a,c))return!0;a=a.parentNode}return!1},isWeekEnd:function(a){return z.isWeekend(a)},getWeekNumberLabel:function(a){a.toGregorian&&
(a=a.toGregorian());return z.format(a,{selector:"date",datePattern:"w"})},addAndFloor:function(a,b,c){a=this.dateModule.add(a,b,c);return a=23==a.getHours()?this.dateModule.add(a,"hour",2):p.floorToDay(a,!0,this.dateClassObj)},floorToDay:function(a,b){return p.floorToDay(a,b,this.dateClassObj)},floorToMonth:function(a,b){return p.floorToMonth(a,b,this.dateClassObj)},floorDate:function(a,b,c,d){return p.floor(a,b,c,d,this.dateClassObj)},isToday:function(a){return p.isToday(a,this.dateClassObj)},isStartOfDay:function(a){return p.isStartOfDay(a,
this.dateClassObj,this.dateModule)},isOverlapping:function(a,b,c,d,e,f){return p.isOverlapping(a,b,c,d,e,f)},computeRangeOverlap:function(a,b,c,d,e,f){var g=a.dateModule;if(null==b||null==d||null==c||null==e)return null;var n=g.compare(b,e),l=g.compare(d,c);if(f){if(0==n||1==n||0==l||1==l)return null}else if(1==n||1==l)return null;return[this.newDate(0<g.compare(b,d)?b:d,a),this.newDate(0<g.compare(c,e)?e:c,a)]},isSameDay:function(a,b){return null==a||null==b?!1:a.getFullYear()==b.getFullYear()&&
a.getMonth()==b.getMonth()&&a.getDate()==b.getDate()},computeProjectionOnDate:function(a,b,c,d){var e=a.dateModule,f=a.minHours,g=a.maxHours;if(0>=d||-1==e.compare(c,b))return 0;var n=function(k){return 3600*k.getHours()+60*k.getMinutes()+k.getSeconds()},l=this.floorToDay(b,!1,a);if(c.getDate()!=l.getDate())if(c.getMonth()==l.getMonth()){if(c.getDate()<l.getDate())return 0;if(c.getDate()>l.getDate()&&24>g)return d}else if(c.getFullYear()==l.getFullYear()){if(c.getMonth()<l.getMonth())return 0;if(c.getMonth()>
l.getMonth())return d}else{if(c.getFullYear()<l.getFullYear())return 0;if(c.getFullYear()>l.getFullYear())return d}if(this.isSameDay(b,c)||24<g){e=h.clone(b);a=0;null!=f&&0!=f&&(e.setHours(f),a=n(e));e=h.clone(b);e.setHours(g);e=null==g||24==g?86400:24<g?86400+n(e):n(e);f=0;f=24<g&&b.getDate()!=c.getDate()?86400+n(c):n(c);if(f<a)return 0;if(f>e)return d;b=d*(f-a)/(e-a)}else{if(c.getDate()<b.getDate()&&c.getMonth()==b.getMonth())return 0;c=this.floorToDay(c);g=a.dateModule.add(b,"day",1);g=this.floorToDay(g,
!1,a);b=1==e.compare(c,b)&&0==e.compare(c,g)||1==e.compare(c,g)?d:0}return b},getTime:function(a,b,c,d){return null},getSubColumn:function(a,b,c,d){return null},getSubColumnIndex:function(a){if(this.subColumns)for(var b=0;b<this.subColumns.length;b++)if(this.subColumns[b]==a)return b;return-1},newDate:function(a){return p.newDate(a,this.dateClassObj)},_isItemInView:function(a){var b=this.renderData,c=b.dateModule;return-1==c.compare(a.startTime,b.startTime)?!1:1!=c.compare(a.endTime,b.endTime)},_ensureItemInView:function(a){var b=
this.renderData,c=b.dateModule,d=Math.abs(c.difference(a.startTime,a.endTime,"millisecond")),e=!1;-1==c.compare(a.startTime,b.startTime)?(a.startTime=b.startTime,a.endTime=c.add(a.startTime,"millisecond",d),e=!0):1==c.compare(a.endTime,b.endTime)&&(a.endTime=b.endTime,a.startTime=c.add(a.endTime,"millisecond",-d),e=!0);return e},scrollable:!0,autoScroll:!0,_autoScroll:function(a,b,c){return!1},scrollMethod:"auto",_setScrollMethodAttr:function(a){this.scrollMethod!=a&&(this.scrollMethod=a,void 0!==
this._domScroll&&(this._domScroll?u.set(this.sheetContainer,this._cssPrefix+"transform","translateY(0px)"):this.scrollContainer.scrollTop=0),delete this._domScroll,a=this._getScrollPosition(),delete this._scrollPos,this._setScrollPosition(a))},_startAutoScroll:function(a){var b=this._scrollProps;b||(b=this._scrollProps={});b.scrollStep=a;b.isScrolling||(b.isScrolling=!0,b.scrollTimer=setInterval(h.hitch(this,this._onScrollTimer_tick),10))},_stopAutoScroll:function(){var a=this._scrollProps;a&&a.isScrolling&&
(clearInterval(a.scrollTimer),a.scrollTimer=null);this._scrollProps=null},_onScrollTimer_tick:function(a){},_scrollPos:0,_hscrollPos:0,getCSSPrefix:function(){return r("ie")?"-ms-":r("webkit")?"-webkit-":r("mozilla")?"-moz-":r("opera")?"-o-":""},_hScrollNodes:null,_setScrollPositionBase:function(a,b){if(!(b&&this._scrollPos==a||!b&&this._hScrollPos==a)){if(void 0===this._domScroll){var c=this.get("scrollMethod");this._domScroll="auto"===c?!r("ios")&&!r("webkit"):"dom"===c}c=0;b?(c=v.getMarginBox(this.scrollContainer),
c=v.getMarginBox(this.sheetContainer).h-c.h):(c=v.getMarginBox(this.grid),c=v.getMarginBox(this.gridTable).w-c.w);0>a?a=0:a>c&&(a=c);b?this._scrollPos=a:this._hScrollPos=a;var d=!this.isLeftToRight();if(this._domScroll)b?this.scrollContainer.scrollTop=a:t.forEach(this._hScrollNodes,function(g){u.set(g,"left",(d?1:-1)*a+"px")},this);else{this._cssPrefix||(this._cssPrefix=this.getCSSPrefix());var e=this._cssPrefix+"transform";if(b)u.set(this.sheetContainer,e,"translateY(-"+a+"px)");else{var f="translateX("+
(d?"":"-")+a+"px)";t.forEach(this._hScrollNodes,function(g){u.set(g,e,f)},this)}}}},_setScrollPosition:function(a){this._setScrollPositionBase(a,!0)},_getScrollPosition:function(){return this._scrollPos},_setHScrollPosition:function(a){this._setScrollPositionBase(a,!1)},_setHScrollPositionImpl:function(a,b,c){var d=b?null:"translateX(-"+a+"px)";t.forEach(this._hScrollNodes,function(e){b?(e.scrollLeft=a,u.set(e,"left",-a+"px")):u.set(e,cssProp,d)},this)},_hScrollPos:0,_getHScrollPosition:function(){return this._hScrollPos},
scrollView:function(a){},ensureVisibility:function(a,b,c,d,e){},_getStoreAttr:function(){return this.owner?this.owner.get("store"):this.store},_setItemsAttr:function(a){this._set("items",a);this.displayedItemsInvalidated=!0},_refreshItemsRendering:function(){var a=this.renderData;this._computeVisibleItems(a);this._layoutRenderers(a)},_refreshDecorationItemsRendering:function(){var a=this.renderData;this._computeVisibleItems(a);this._layoutDecorationRenderers(a)},invalidateLayout:function(){this._layoutRenderers(this.renderData);
this._layoutDecorationRenderers(this.renderData)},_setDecorationItemsAttr:function(a){this._set("decorationItems",a);this.displayedDecorationItemsInvalidated=!0},_getDecorationStoreAttr:function(){return this.owner?this.owner.get("decorationStore"):this.decorationStore},_setDecorationStoreAttr:function(a){this.decorationStore=a;this.decorationStoreManager.set("store",a)},computeOverlapping:function(a,b){if(0==a.length)return{numLanes:0,addedPassRes:[1]};for(var c=[],d=0;d<a.length;d++)this._layoutPass1(a[d],
c);a=null;b&&(a=h.hitch(this,b)(c));return{numLanes:c.length,addedPassRes:a}},_layoutPass1:function(a,b){for(var c=!0,d=0;d<b.length;d++){var e=b[d];c=!1;for(var f=0;f<e.length&&!c;f++)e[f].start<a.end&&a.start<e[f].end&&(c=!0,e[f].extent=1);if(!c){a.lane=d;a.extent=-1;e.push(a);return}}b.push([a]);a.lane=b.length-1;a.extent=-1},_layoutInterval:function(a,b,c,d,e){},layoutPriorityFunction:null,_sortItemsFunction:function(a,b){var c=this.dateModule.compare(a.startTime,b.startTime);0==c&&(c=-1*this.dateModule.compare(a.endTime,
b.endTime));return c},_layoutRenderers:function(a){this._layoutRenderersImpl(a,this.rendererManager,a.items,"dataItems")},_layoutDecorationRenderers:function(a){this._layoutRenderersImpl(a,this.decorationRendererManager,a.decorationItems,"decorationItems")},_layoutRenderersImpl:function(a,b,c,d){if(c){b.recycleItemRenderers();b=a.dateModule;var e=this.newDate(a.startTime),f=h.clone(e);c=c.concat();for(var g=[],n,l={},k=0;-1==b.compare(e,a.endTime)&&0<c.length;){e=this.addAndFloor(e,this._layoutUnit,
this._layoutStep);var m=h.clone(e);a.minHours&&f.setHours(a.minHours);void 0!=a.maxHours&&24!=a.maxHours&&(24>a.maxHours&&(m=b.add(e,"day",-1)),m=this.floorToDay(m,!0,a),m.setHours(a.maxHours-(24>a.maxHours?0:24)));n=t.filter(c,function(q){var x=this.isOverlapping(a,q.startTime,q.endTime,f,m);x?(l[q.id]=!0,g.push(q)):l[q.id]?delete l[q.id]:g.push(q);return x},this);c=g;g=[];0<n.length&&(n.sort(h.hitch(this,this.layoutPriorityFunction?this.layoutPriorityFunction:this._sortItemsFunction)),this._layoutInterval(a,
k,f,m,n,d));f=h.clone(e);k++}this._onRenderersLayoutDone(this)}},_recycleItemRenderers:function(a){this.rendererManager.recycleItemRenderers(a)},getRenderers:function(a){return this.rendererManager.getRenderers(a)},itemToRendererKindFunc:null,_itemToRendererKind:function(a){return this.itemToRendererKindFunc?this.itemToRendererKindFunc(a):this._defaultItemToRendererKindFunc(a)},_defaultItemToRendererKindFunc:function(a){return null},_createRenderer:function(a,b,c,d){return this.rendererManager.createRenderer(a,
b,c,d)},_onRendererCreated:function(a){if(a.source==this)this.onRendererCreated(a);null!=this.owner&&this.owner._onRendererCreated(a)},onRendererCreated:function(a){},_onRendererRecycled:function(a){if(a.source==this)this.onRendererRecycled(a);null!=this.owner&&this.owner._onRendererRecycled(a)},onRendererRecycled:function(a){},_onRendererReused:function(a){if(a.source==this)this.onRendererReused(a);null!=this.owner&&this.owner._onRendererReused(a)},onRendererReused:function(a){},_onRendererDestroyed:function(a){if(a.source==
this)this.onRendererDestroyed(a);null!=this.owner&&this.owner._onRendererDestroyed(a)},onRendererDestroyed:function(a){},_onRenderersLayoutDone:function(a){this.onRenderersLayoutDone(a);null!=this.owner&&this.owner._onRenderersLayoutDone(a)},onRenderersLayoutDone:function(a){},_recycleRenderer:function(a,b){this.rendererManager.recycleRenderer(a,b)},_destroyRenderer:function(a){this.rendererManager.destroyRenderer(a)},_destroyRenderersByKind:function(a){this.rendererManager.destroyRenderersByKind(a)},
_updateEditingCapabilities:function(a,b){var c=this.isItemMoveEnabled(a,b.rendererKind);a=this.isItemResizeEnabled(a,b.rendererKind);var d=!1;c!=b.get("moveEnabled")&&(b.set("moveEnabled",c),d=!0);a!=b.get("resizeEnabled")&&(b.set("resizeEnabled",a),d=!0);d&&b.updateRendering()},updateRenderers:function(a,b){if(null!=a){a=h.isArray(a)?a:[a];for(var c=0;c<a.length;c++){var d=a[c];if(null!=d&&null!=d.id){var e=this.rendererManager.itemToRenderer[d.id];if(null!=e)for(var f=this.isItemSelected(d),g=this.isItemHovered(d),
n=this.isItemBeingEdited(d),l=this.showFocus?this.isItemFocused(d):!1,k=0;k<e.length;k++){var m=e[k].renderer;m.set("hovered",g);m.set("selected",f);m.set("edited",n);m.set("focused",l);m.set("storeState",this.getItemStoreState(d));this.applyRendererZIndex(d,e[k],g,f,n,l);b||(m.set("item",d),m.updateRendering&&m.updateRendering())}}}}},applyRendererZIndex:function(a,b,c,d,e,f){u.set(b.container,{zIndex:e||d?20:void 0==a.lane?0:a.lane})},getIdentity:function(a){return this.owner?this.owner.getIdentity(a):
a.id},_setHoveredItem:function(a,b){if(this.owner)this.owner._setHoveredItem(a,b);else if(this.hoveredItem&&a&&this.hoveredItem.id!=a.id||null==a||null==this.hoveredItem){var c=this.hoveredItem;this.hoveredItem=a;this.updateRenderers([c,this.hoveredItem],!0);a&&b&&this._updateEditingCapabilities(a._item?a._item:a,b)}},hoveredItem:null,isItemHovered:function(a){return this._isEditing&&this._edProps?a.id==this._edProps.editedItem.id:this.owner?this.owner.isItemHovered(a):null!=this.hoveredItem&&this.hoveredItem.id==
a.id},isItemFocused:function(a){return this._isItemFocused?this._isItemFocused(a):!1},_setSelectionModeAttr:function(a){this.owner?this.owner.set("selectionMode",a):this.inherited(arguments)},_getSelectionModeAttr:function(a){return this.owner?this.owner.get("selectionMode"):this.inherited(arguments)},_setSelectedItemAttr:function(a){this.owner?this.owner.set("selectedItem",a):this.inherited(arguments)},_getSelectedItemAttr:function(a){return this.owner?this.owner.get("selectedItem"):this.selectedItem},
_setSelectedItemsAttr:function(a){this.owner?this.owner.set("selectedItems",a):this.inherited(arguments)},_getSelectedItemsAttr:function(){return this.owner?this.owner.get("selectedItems"):this.inherited(arguments)},isItemSelected:function(a){return this.owner?this.owner.isItemSelected(a):this.inherited(arguments)},selectFromEvent:function(a,b,c,d){this.owner?this.owner.selectFromEvent(a,b,c,d):this.inherited(arguments)},setItemSelected:function(a,b){this.owner?this.owner.setItemSelected(a,b):this.inherited(arguments)},
createItemFunc:null,_getCreateItemFuncAttr:function(){return this.owner?this.owner.get("createItemFunc"):this.createItemFunc},createOnGridClick:!1,_getCreateOnGridClickAttr:function(){return this.owner?this.owner.get("createOnGridClick"):this.createOnGridClick},_gridMouseDown:!1,_tempIdCount:0,_tempItemsMap:null,_onGridMouseDown:function(a){this._gridMouseDown=!0;this.showFocus=!1;this._isEditing&&this._endItemEditing("mouse",!1);this._doEndItemEditing(this.owner,"mouse");this.set("focusedItem",null);
this.selectFromEvent(a,null,null,!0);this._setTabIndexAttr&&this[this._setTabIndexAttr].focus();if(this._onRendererHandleMouseDown){var b=this.get("createItemFunc");if(b){b=this._createdEvent=b(this,this.getTime(a),a,this.getSubColumn(a));var c=this.get("store");if(b&&null!=c){if(void 0==c.getIdentity(b)){var d="_tempId_"+this._tempIdCount++;b[c.idProperty]=d;null==this._tempItemsMap&&(this._tempItemsMap={});this._tempItemsMap[d]=!0}c=this.itemToRenderItem(b,c);c._item=b;this._setItemStoreState(b,
"unstored");d=this._getTopOwner();var e=d.get("items");d.set("items",e?e.concat([c]):[c]);this._refreshItemsRendering();(b=this.getRenderers(b))&&0<b.length&&(b=b[0])&&(this._onRendererHandleMouseDown(a,b.renderer,"resizeEnd"),this._startItemEditing(c,"mouse"))}}}},_onGridMouseMove:function(a){},_onGridMouseUp:function(a){},_onGridTouchStart:function(a){var b=this._edProps;this._gridProps={event:a,fromItem:this.isAscendantHasClass(a.target,this.eventContainer,"dojoxCalendarEvent")};this._isEditing&&
(this._gridProps&&(this._gridProps.editingOnStart=!0),h.mixin(b,this._getTouchesOnRenderers(a,b.editedItem)),0==b.touchesLen&&(b&&b.endEditingTimer&&(clearTimeout(b.endEditingTimer),b.endEditingTimer=null),this._endItemEditing("touch",!1)));this._doEndItemEditing(this.owner,"touch");E.stop(a)},_doEndItemEditing:function(a,b){if(a&&a._isEditing){var c=a._edProps;c&&c.endEditingTimer&&(clearTimeout(c.endEditingTimer),c.endEditingTimer=null);a._endItemEditing(b,!1)}},_onGridTouchEnd:function(a){},_onGridTouchMove:function(a){},
__fixEvt:function(a){return a},_dispatchCalendarEvt:function(a,b){a=this.__fixEvt(a);this[b](a);if(this.owner)this.owner[b](a);return a},_onGridClick:function(a){a.triggerEvent||(a={date:this.getTime(a),triggerEvent:a});this._dispatchCalendarEvt(a,"onGridClick")},onGridClick:function(a){},_onGridDoubleClick:function(a){a.triggerEvent||(a={date:this.getTime(a),triggerEvent:a});this._dispatchCalendarEvt(a,"onGridDoubleClick")},onGridDoubleClick:function(a){},_onItemClick:function(a){this._dispatchCalendarEvt(a,
"onItemClick")},onItemClick:function(a){},_onItemDoubleClick:function(a){this._dispatchCalendarEvt(a,"onItemDoubleClick")},onItemDoubleClick:function(a){},_onItemContextMenu:function(a){this._dispatchCalendarEvt(a,"onItemContextMenu")},onItemContextMenu:function(a){},_getStartEndRenderers:function(a){a=this.rendererManager.itemToRenderer[a.id];if(null==a)return null;if(1==a.length)return a=a[0].renderer,[a,a];for(var b=this.renderData,c=!1,d=!1,e=[],f=0;f<a.length;f++){var g=a[f].renderer;c||(c=0==
b.dateModule.compare(g.item.range[0],g.item.startTime),e[0]=g);d||(d=0==b.dateModule.compare(g.item.range[1],g.item.endTime),e[1]=g);if(c&&d)break}return e},editable:!0,moveEnabled:!0,resizeEnabled:!0,isItemEditable:function(a,b){return"storing"!=this.getItemStoreState(a)&&this.editable&&(this.owner?this.owner.isItemEditable(a,b):!0)},isItemMoveEnabled:function(a,b){return this.isItemEditable(a,b)&&this.moveEnabled&&(this.owner?this.owner.isItemMoveEnabled(a,b):!0)},isItemResizeEnabled:function(a,
b){return this.isItemEditable(a,b)&&this.resizeEnabled&&(this.owner?this.owner.isItemResizeEnabled(a,b):!0)},_isEditing:!1,isItemBeingEdited:function(a){return this._isEditing&&this._edProps&&this._edProps.editedItem&&this._edProps.editedItem.id==a.id},_setEditingProperties:function(a){this._edProps=a},_startItemEditing:function(a,b){this._isEditing=!0;this._getTopOwner()._isEditing=!0;var c=this._edProps;c.editedItem=a;c.storeItem=a._item;c.eventSource=b;c.secItem=this._secondarySheet?this._findRenderItem(a.id,
this._secondarySheet.renderData.items):null;c.ownerItem=this.owner?this._findRenderItem(a.id,this.items):null;if(!c.liveLayout){c.editSaveStartTime=a.startTime;c.editSaveEndTime=a.endTime;c.editItemToRenderer=this.rendererManager.itemToRenderer;c.editItems=this.renderData.items;c.editRendererList=this.rendererManager.rendererList;this.renderData.items=[c.editedItem];var d=c.editedItem.id;this.rendererManager.itemToRenderer={};this.rendererManager.rendererList=[];var e=c.editItemToRenderer[d];c.editRendererIndices=
[];t.forEach(e,h.hitch(this,function(f,g){null==this.rendererManager.itemToRenderer[d]?this.rendererManager.itemToRenderer[d]=[f]:this.rendererManager.itemToRenderer[d].push(f);this.rendererManager.rendererList.push(f)}));c.editRendererList=t.filter(c.editRendererList,function(f){return null!=f&&f.renderer.item.id!=d});delete c.editItemToRenderer[d]}this._layoutRenderers(this.renderData);this._onItemEditBegin({item:a,storeItem:c.storeItem,eventSource:b})},_onItemEditBegin:function(a){this._editStartTimeSave=
this.newDate(a.item.startTime);this._editEndTimeSave=this.newDate(a.item.endTime);this._dispatchCalendarEvt(a,"onItemEditBegin")},onItemEditBegin:function(a){},_endItemEditing:function(a,b){this._editingGesture&&this._endItemEditingGesture(a);this._isEditing=!1;this._getTopOwner()._isEditing=!1;var c=this._edProps;t.forEach(c.handles,function(d){d.remove()});c.liveLayout||(this.renderData.items=c.editItems,this.rendererManager.rendererList=c.editRendererList.concat(this.rendererManager.rendererList),
h.mixin(this.rendererManager.itemToRenderer,c.editItemToRenderer));this._onItemEditEnd(h.mixin(this._createItemEditEvent(),{item:c.editedItem,storeItem:c.storeItem,eventSource:a,completed:!b}));this._layoutRenderers(this.renderData);this._edProps=null},_onItemEditEnd:function(a){this._dispatchCalendarEvt(a,"onItemEditEnd");if(!a.isDefaultPrevented()){var b=this.get("store"),c=this.renderItemToItem(a.item,b),d=this._getItemStoreStateObj(a.item);if(null!=d&&"unstored"==d.state)if(a.completed){c=h.mixin(d.item,
c);this._setItemStoreState(c,"storing");var e=b.getIdentity(c);a=null;this._tempItemsMap&&this._tempItemsMap[e]&&(a={temporaryId:e},delete this._tempItemsMap[e],delete c[b.idProperty]);H(b.add(c,a),h.hitch(this,function(f){(h.isObject(f)?b.getIdentity(f):f)!=e&&this._removeRenderItem(e)}))}else this._removeRenderItem(d.id);else a.completed?(this._setItemStoreState(c,"storing"),b.put(c)):(a.item.startTime=this._editStartTimeSave,a.item.endTime=this._editEndTimeSave)}},_removeRenderItem:function(a){for(var b=
this._getTopOwner(),c=b.get("items"),d=!1,e=c.length-1;0<=e;e--)if(c[e].id==a){c.splice(e,1);d=!0;break}this._cleanItemStoreState(a);d&&(b.set("items",c),this.invalidateLayout())},onItemEditEnd:function(a){},_createItemEditEvent:function(){return{cancelable:!0,bubbles:!1,__defaultPrevent:!1,preventDefault:function(){this.__defaultPrevented=!0},isDefaultPrevented:function(){return this.__defaultPrevented}}},_startItemEditingGesture:function(a,b,c,d){var e=this._edProps;if(e&&null!=e.editedItem){this._editingGesture=
!0;var f=e.editedItem;e.editKind=b;this._onItemEditBeginGesture(this.__fixEvt(h.mixin(this._createItemEditEvent(),{item:f,storeItem:e.storeItem,startTime:f.startTime,endTime:f.endTime,editKind:b,rendererKind:e.rendererKind,triggerEvent:d,dates:a,eventSource:c})));e.itemBeginDispatched=!0}},_onItemEditBeginGesture:function(a){var b=this._edProps,c=b.editedItem,d=a.dates;b.editingTimeFrom=[];b.editingTimeFrom[0]=d[0];b.editingItemRefTime=[];b.editingItemRefTime[0]=this.newDate("resizeEnd"==b.editKind?
c.endTime:c.startTime);"resizeBoth"==b.editKind&&(b.editingTimeFrom[1]=d[1],b.editingItemRefTime[1]=this.newDate(c.endTime));d=this.renderData.dateModule;b.inViewOnce=this._isItemInView(c);if("label"==b.rendererKind||this.roundToDay)b._itemEditBeginSave=this.newDate(c.startTime),b._itemEditEndSave=this.newDate(c.endTime);b._initDuration=d.difference(c.startTime,c.endTime,c.allDay?"day":"millisecond");this._dispatchCalendarEvt(a,"onItemEditBeginGesture");a.isDefaultPrevented()||"mouse"!=a.eventSource||
(b.editLayer=G.create("div",{style:"position: absolute; left:0; right:0; bottom:0; top:0; z-index:30; tabIndex:-1; background-image:url('"+this._blankGif+"'); cursor: "+("move"==a.editKind?"move":this.resizeCursor),onresizestart:function(e){return!1},onselectstart:function(e){return!1}},this.domNode),b.editLayer.focus())},onItemEditBeginGesture:function(a){},_waDojoxAddIssue:function(a,b,c){var d=this.renderData.dateModule;return"gregorian"!=this._calendar&&0>c?(a=a.toGregorian(),a=y.add(a,b,c),new this.renderData.dateClassObj(a)):
d.add(a,b,c)},_computeItemEditingTimes:function(a,b,c,d,e){c=this.renderData.dateModule;a=this._edProps;"move"==b&&(b=c.difference(a.editingTimeFrom[0],d[0],"millisecond"),d[0]=this._waDojoxAddIssue(a.editingItemRefTime[0],"millisecond",b));return d},_moveOrResizeItemGesture:function(a,b,c,d){if(this._isEditing&&null!=a[0]){var e=this._edProps,f=e.editedItem,g=this.renderData.dateModule,n=e.editKind,l=[a[0]];"resizeBoth"==n&&(l[1]=a[1]);l=this._computeItemEditingTimes(f,e.editKind,e.rendererKind,
l,b);var k=l[0],m=!1;a=h.clone(f.startTime);var q=h.clone(f.endTime),x=f.subColumn,w="keyboard"==e.eventSource?!1:this.allowStartEndSwap;if("move"==n)null!=d&&f.subColumn!=d&&this.allowSubColumnMove&&(f.subColumn=d,m=this.get("store"),l=this.renderItemToItem(f,m),h.mixin(f,this.itemToRenderItem(l,m)),m=!0),0!=g.compare(f.startTime,k)&&(m=g.difference(f.startTime,f.endTime,"millisecond"),f.startTime=this.newDate(k),f.endTime=g.add(f.startTime,"millisecond",m),m=!0);else if("resizeStart"==n)0!=g.compare(f.startTime,
k)&&(-1!=g.compare(f.endTime,k)?f.startTime=this.newDate(k):w?(f.startTime=this.newDate(f.endTime),f.endTime=this.newDate(k),e.editKind=n="resizeEnd","touch"==b&&(e.resizeEndTouchIndex=e.resizeStartTouchIndex,e.resizeStartTouchIndex=-1)):(f.startTime=this.newDate(f.endTime),f.startTime.setHours(k.getHours()),f.startTime.setMinutes(k.getMinutes()),f.startTime.setSeconds(k.getSeconds())),m=!0);else if("resizeEnd"==n)0!=g.compare(f.endTime,k)&&(1!=g.compare(f.startTime,k)?f.endTime=this.newDate(k):w?
(f.endTime=this.newDate(f.startTime),f.startTime=this.newDate(k),e.editKind=n="resizeStart","touch"==b&&(e.resizeStartTouchIndex=e.resizeEndTouchIndex,e.resizeEndTouchIndex=-1)):(f.endTime=this.newDate(f.startTime),f.endTime.setHours(k.getHours()),f.endTime.setMinutes(k.getMinutes()),f.endTime.setSeconds(k.getSeconds())),m=!0);else if("resizeBoth"==n)m=!0,k=this.newDate(k),l=this.newDate(l[1]),-1!=g.compare(k,l)&&(w?(w=k,k=l,l=w):m=!1),m&&(f.startTime=k,f.endTime=l);else return!1;if(!m)return!1;b=
h.mixin(this._createItemEditEvent(),{item:f,storeItem:e.storeItem,startTime:f.startTime,endTime:f.endTime,editKind:n,rendererKind:e.rendererKind,triggerEvent:c,eventSource:b});"move"==n?this._onItemEditMoveGesture(b):this._onItemEditResizeGesture(b);1==g.compare(f.startTime,f.endTime)&&(n=f.startTime,f.startTime=f.endTime,f.endTime=n);m=x!=f.subColumn||0!=g.compare(a,f.startTime)||0!=g.compare(q,f.endTime);if(!m)return!1;this._layoutRenderers(this.renderData);e.liveLayout&&null!=e.secItem?(e.secItem.startTime=
f.startTime,e.secItem.endTime=f.endTime,this._secondarySheet._layoutRenderers(this._secondarySheet.renderData)):null!=e.ownerItem&&this.owner.liveLayout&&(e.ownerItem.startTime=f.startTime,e.ownerItem.endTime=f.endTime,this.owner._layoutRenderers(this.owner.renderData));return!0}},_findRenderItem:function(a,b){b=b||this.renderData.items;for(var c=0;c<b.length;c++)if(b[c].id==a)return b[c];return null},_onItemEditMoveGesture:function(a){this._dispatchCalendarEvt(a,"onItemEditMoveGesture");if(!a.isDefaultPrevented()){var b=
a.source._edProps,c=this.renderData,d=c.dateModule;"label"==b.rendererKind||this.roundToDay&&!a.item.allDay?(c=this.floorToDay(a.item.startTime,!1,c),c.setHours(b._itemEditBeginSave.getHours()),c.setMinutes(b._itemEditBeginSave.getMinutes()),d=d.add(c,"millisecond",b._initDuration)):a.item.allDay?(c=this.floorToDay(a.item.startTime,!0),d=d.add(c,"day",b._initDuration)):(c=this.floorDate(a.item.startTime,this.snapUnit,this.snapSteps),d=d.add(c,"millisecond",b._initDuration));a.item.startTime=c;a.item.endTime=
d;b.inViewOnce||(b.inViewOnce=this._isItemInView(a.item));b.inViewOnce&&this.stayInView&&this._ensureItemInView(a.item)}},_DAY_IN_MILLISECONDS:864E5,onItemEditMoveGesture:function(a){},_onItemEditResizeGesture:function(a){this._dispatchCalendarEvt(a,"onItemEditResizeGesture");if(!a.isDefaultPrevented()){var b=a.source._edProps,c=this.renderData,d=c.dateModule,e=a.item.startTime,f=a.item.endTime;"resizeStart"==a.editKind?a.item.allDay?e=this.floorToDay(a.item.startTime,!1,this.renderData):this.roundToDay?
(e=this.floorToDay(a.item.startTime,!1,c),e.setHours(b._itemEditBeginSave.getHours()),e.setMinutes(b._itemEditBeginSave.getMinutes())):e=this.floorDate(a.item.startTime,this.snapUnit,this.snapSteps):"resizeEnd"==a.editKind?a.item.allDay?this.isStartOfDay(a.item.endTime)||(f=this.floorToDay(a.item.endTime,!1,this.renderData),f=d.add(f,"day",1)):this.roundToDay?(f=this.floorToDay(a.item.endTime,!1,c),f.setHours(b._itemEditEndSave.getHours()),f.setMinutes(b._itemEditEndSave.getMinutes())):(f=this.floorDate(a.item.endTime,
this.snapUnit,this.snapSteps),"mouse"==a.eventSource&&(f=d.add(f,this.snapUnit,this.snapSteps))):(e=this.floorDate(a.item.startTime,this.snapUnit,this.snapSteps),f=this.floorDate(a.item.endTime,this.snapUnit,this.snapSteps),f=d.add(f,this.snapUnit,this.snapSteps));a.item.startTime=e;a.item.endTime=f;c=a.item.allDay||b._initDuration>=this._DAY_IN_MILLISECONDS&&!this.allowResizeLessThan24H;this.ensureMinimalDuration(this.renderData,a.item,c?"day":this.minDurationUnit,c?1:this.minDurationSteps,a.editKind);
b.inViewOnce||(b.inViewOnce=this._isItemInView(a.item));b.inViewOnce&&this.stayInView&&this._ensureItemInView(a.item)}},onItemEditResizeGesture:function(a){},_endItemEditingGesture:function(a,b){if(this._isEditing){this._editingGesture=!1;var c=this._edProps,d=c.editedItem;c.itemBeginDispatched=!1;this._onItemEditEndGesture(h.mixin(this._createItemEditEvent(),{item:d,storeItem:c.storeItem,startTime:d.startTime,endTime:d.endTime,editKind:c.editKind,rendererKind:c.rendererKind,triggerEvent:b,eventSource:a}))}},
_onItemEditEndGesture:function(a){var b=this._edProps;delete b._itemEditBeginSave;delete b._itemEditEndSave;this._dispatchCalendarEvt(a,"onItemEditEndGesture");!a.isDefaultPrevented()&&b.editLayer&&(r("ie")&&(b.editLayer.style.cursor="default"),setTimeout(h.hitch(this,function(){this.domNode&&(this.domNode.focus(),b.editLayer.parentNode.removeChild(b.editLayer),b.editLayer=null)}),10))},onItemEditEndGesture:function(a){},ensureMinimalDuration:function(a,b,c,d,e){a=a.dateModule;"resizeStart"==e?(c=
a.add(b.endTime,c,-d),1==a.compare(b.startTime,c)&&(b.startTime=c)):(c=a.add(b.startTime,c,d),-1==a.compare(b.endTime,c)&&(b.endTime=c))},doubleTapDelay:300,snapUnit:"minute",snapSteps:15,minDurationUnit:"hour",minDurationSteps:1,liveLayout:!1,stayInView:!0,allowStartEndSwap:!0,allowResizeLessThan24H:!1,allowSubColumnMove:!0})});