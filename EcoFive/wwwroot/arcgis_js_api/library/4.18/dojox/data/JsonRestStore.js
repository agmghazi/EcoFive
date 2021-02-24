//>>built
define("dojo/_base/lang dojo/_base/declare dojo/_base/connect dojox/rpc/Rest dojox/rpc/JsonRest dojox/json/schema dojox/data/ServiceStore".split(" "),function(n,u,v,q,f,t,w){var x=n.getObject("dojox.rpc",!0),r=u("dojox.data.JsonRestStore",w,{constructor:function(a){v.connect(q._index,"onUpdate",this,function(g,e,h,d){var k=this.service.servicePath;if(!g.__id)console.log("no id on updated object ",g);else if(g.__id.substring(0,k.length)==k)this.onSet(g,e,h,d)});this.idAttribute=this.idAttribute||"id";
"string"==typeof a.target&&(a.target=a.target.match(/\/$/)||this.allowNoTrailingSlash?a.target:a.target+"/",this.service||(this.service=f.services[a.target]||q(a.target,!0)));f.registerService(this.service,a.target,this.schema);this.schema=this.service._schema=this.schema||this.service._schema||{};this.service._store=this;this.service.idAsRef=this.idAsRef;this.schema._idAttr=this.idAttribute;var b=f.getConstructor(this.service),c=this;this._constructor=function(g){b.call(this,g);c.onNew(this)};this._constructor.prototype=
b.prototype;this._index=q._index},loadReferencedSchema:!0,idAsRef:!1,referenceIntegrity:!0,target:"",allowNoTrailingSlash:!1,newItem:function(a,b){a=new this._constructor(a);if(b){var c=this.getValue(b.parent,b.attribute,[]);c=c.concat([a]);a.__parent=c;this.setValue(b.parent,b.attribute,c)}return a},deleteItem:function(a){var b=[],c=p._getStoreForItem(a)||this;if(this.referenceIntegrity){f._saveNotNeeded=!0;var g=q._index,e=function(d){var k;b.push(d);d.__checked=1;for(var l in d)if("__"!=l.substring(0,
2)){var m=d[l];m==a?d!=g&&(d instanceof Array?(k=k||[]).push(l):(p._getStoreForItem(d)||c).unsetAttribute(d,l)):"object"==typeof m&&m&&(m.__checked||e(m),"object"==typeof m.__checked&&d!=g&&(p._getStoreForItem(d)||c).setValue(d,l,m.__checked))}if(k){l=k.length;for(d=d.__checked=d.concat();l--;)d.splice(k[l],1);return d}return null};e(g);f._saveNotNeeded=!1;for(var h=0;b[h];)delete b[h++].__checked}f.deleteObject(a);c.onDelete(a)},changing:function(a,b){f.changing(a,b)},cancelChanging:function(a){if(a.__id){dirtyObjects=
c=f.getDirtyObjects();for(var b=0;b<dirtyObjects.length;b++){var c=dirtyObjects[b];if(a==c.object){dirtyObjects.splice(b,1);break}}}},setValue:function(a,b,c){var g=a[b],e=a.__id?p._getStoreForItem(a):this;t&&e.schema&&e.schema.properties&&t.mustBeValid(t.checkPropertyChange(c,e.schema.properties[b]));if(b==e.idAttribute)throw Error("Can not change the identity attribute for an item");e.changing(a);(a[b]=c)&&!c.__parent&&(c.__parent=a);e.onSet(a,b,g,c)},setValues:function(a,b,c){if(!n.isArray(c))throw Error("setValues expects to be passed an Array object as its value");
this.setValue(a,b,c)},unsetAttribute:function(a,b){this.changing(a);var c=a[b];delete a[b];this.onSet(a,b,c,void 0)},save:function(a){a&&a.global||((a=a||{}).service=this.service);if("syncMode"in a?a.syncMode:this.syncMode)x._sync=!0;a=f.commit(a);this.serverVersion=this._updates&&this._updates.length;return a},revert:function(a){f.revert(!(a&&a.global)&&this.service)},isDirty:function(a){return f.isDirty(a,this)},isItem:function(a,b){return a&&a.__id&&(b||this.service==f.getServiceAndId(a.__id).service)},
_doQuery:function(a){var b=f.query(this.service,"string"==typeof a.queryStr?a.queryStr:a.query,a),c=this;this.loadReferencedSchema&&b.addCallback(function(g){var e=b.ioArgs&&b.ioArgs.xhr&&b.ioArgs.xhr.getResponseHeader("Content-Type"),h=e&&e.match(/definedby\s*=\s*([^;]*)/);e&&!h&&(h=(h=b.ioArgs.xhr.getResponseHeader("Link"))&&h.match(/<([^>]*)>;\s*rel="?definedby"?/));if(h=h&&h[1])return e=f.getServiceAndId((c.target+h).replace(/^(.*\/)?(\w+:\/\/)|[^\/\.]+\/\.\.\/|^.*\/(\/)/,"$2$3")),e=f.byId(e.service,
e.id),e.addCallbacks(function(d){n.mixin(c.schema,d);return g},function(d){console.error(d);return g}),e});return b},_processResults:function(a,b){var c=a.length;return{totalCount:b.fullLength||(b.request.count==c?(b.request.start||0)+2*c:c),items:a}},getConstructor:function(){return this._constructor},getIdentity:function(a){a=a.__clientId||a.__id;if(!a)return a;var b=this.service.servicePath.replace(/[^\/]*$/,"");return a.substring(0,b.length)!=b?a:a.substring(b.length)},fetchItemByIdentity:function(a){var b=
a.identity,c=this;b.toString().match(/^(\w*:)?\//)&&(b=f.getServiceAndId(b),c=b.service._store,a.identity=b.id);a._prefix=c.service.servicePath.replace(/[^\/]*$/,"");return c.inherited(arguments)},onSet:function(){},onNew:function(){},onDelete:function(){},getFeatures:function(){var a=this.inherited(arguments);a["dojo.data.api.Write"]=!0;a["dojo.data.api.Notification"]=!0;return a},getParent:function(a){return a&&a.__parent}});r.getStore=function(a,b){if("string"==typeof a.target){a.target=a.target.match(/\/$/)||
a.allowNoTrailingSlash?a.target:a.target+"/";var c=(f.services[a.target]||{})._store;if(c)return c}return new (b||r)(a)};var p=n.getObject("dojox.data",!0);p._getStoreForItem=function(a){if(a.__id){var b=f.getServiceAndId(a.__id);if(b&&b.service._store)return b.service._store;a=a.__id.toString().match(/.*\//)[0];return new r({target:a})}return null};n.getObject("dojox.json.ref",!0)._useRefs=!0;return r});