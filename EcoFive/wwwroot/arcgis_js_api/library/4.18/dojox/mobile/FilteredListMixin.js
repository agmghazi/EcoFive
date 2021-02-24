//>>built
define("require dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dom dojo/dom-class dojo/dom-construct dojo/aspect dijit/registry ./SearchBox ./ScrollableView ./viewRegistry".split(" "),function(g,h,k,d,v,q,e,r,t,l,u,m){return k("dojox.mobile.FilteredListMixin",null,{filterBoxRef:null,placeHolder:"",filterBoxVisible:!0,_filterBox:null,_createdFilterBox:null,_createdScrollableView:null,startup:function(){if(!this._started){this.inherited(arguments);if(this.filterBoxRef)if((this._filterBox=
t.byId(this.filterBoxRef))&&this._filterBox.isInstanceOf(l))this._filterBox.set("searchAttr",this.labelProperty?this.labelProperty:"label"),this._filterBox.placeHolder||this._filterBox.set("placeHolder",this.placeHolder),this._filterBox.on("search",d.hitch(this,"_onFilter"));else throw Error("Cannot find a widget of type dojox/mobile/SearchBox or subclass at the specified filterBoxRef: "+this.filterBoxRef);else{this._createdFilterBox=this._filterBox=new l({searchAttr:this.labelProperty?this.labelProperty:
"label",ignoreCase:!0,incremental:!0,onSearch:d.hitch(this,"_onFilter"),selectOnClick:!0,placeHolder:this.placeHolder});this._createdScrollableView=new u;var a=this.domNode;this.domNode.parentNode.replaceChild(this._createdScrollableView.domNode,this.domNode);e.place(a,this._createdScrollableView.containerNode);a=e.create("div");e.place(this._createdFilterBox.domNode,a);e.place(a,this._createdScrollableView.domNode,"before");this.filterBoxClass&&q.add(a,this.filterBoxClass);this._createdFilterBox.startup();
this._createdScrollableView.startup();this._createdScrollableView.resize()}var b=m.getEnclosingScrollable(this.domNode);b&&this.connect(b,"onFlickAnimationEnd",d.hitch(this,function(){this._filterBox.focusNode.value||(this._previousUnfilteredScrollPos=b.getPos())}));this.store?this._initStore():this._createStore(this._initStore)}},_setFilterBoxVisibleAttr:function(a){this._set("filterBoxVisible",a);this._filterBox&&this._filterBox.domNode&&(this._filterBox.domNode.style.display=a?"":"none")},_setPlaceHolderAttr:function(a){this._set("placeHolder",
a);this._filterBox&&this._filterBox.set("placeHolder",a)},getFilterBox:function(){return this._filterBox},getScrollableView:function(){return this._createdScrollableView},_initStore:function(){var a=this.store;a.get&&a.query?this._filterBox.store=a:g(["dojo/store/DataStore"],d.hitch(this,function(b){a=new b({store:a});this._filterBox.store=a}))},_createStore:function(a){g(["./_StoreListMixin","dojo/store/Memory"],d.hitch(this,function(b,f){k.safeMixin(this,new b);this.append=!0;this.createListItem=
function(c){return c.listItem};r.before(this,"generateList",function(){h.forEach(this.getChildren(),function(c){c.domNode.parentNode.removeChild(c.domNode)})});var n=[],p=null;h.forEach(this.getChildren(),function(c){p=c.label?c.label:c.domNode.innerText||c.domNode.textContent;n.push({label:p,listItem:c})});b=new f({idProperty:"label",data:{items:n}});this.store=null;this.query={};this.setStore(b,this.query,this.queryOptions);d.hitch(this,a)()}))},_onFilter:function(a,b,f){!1!==this.onFilter(a,b,
f)&&(this.setQuery(b),(a=m.getEnclosingScrollable(this.domNode))&&a.scrollTo(this._filterBox.focusNode.value?{x:0,y:0}:this._previousUnfilteredScrollPos||{x:0,y:0}))},onFilter:function(){},destroy:function(a){this.inherited(arguments);this._createdFilterBox&&(this._createdFilterBox.destroy(a),this._createdFilterBox=null);this._createdScrollableView&&(this._createdScrollableView.destroy(a),this._createdScrollableView=null)}})});