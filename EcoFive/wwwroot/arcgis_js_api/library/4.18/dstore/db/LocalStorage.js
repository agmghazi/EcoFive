//>>built
define(["dojo/_base/declare","../Memory"],function(e,f){return e([f],{dbPrefix:"dojo-db",storeName:"default",constructor:function(){for(var a=[],b=this.prefix=this.dbPrefix+"-"+this.storeName+"-",c=0,g=localStorage.length;c<g;c++){var d=localStorage.key(c);d.slice(0,b.length)===b&&a.push(this._restore(JSON.parse(localStorage.getItem(d))))}this.setData(a)},putSync:function(a){var b=this.inherited(arguments);localStorage.setItem(this.prefix+this.getIdentity(a),JSON.stringify(a));return b},removeSync:function(a){localStorage.removeItem(this.prefix+
a);return this.inherited(arguments)}})});