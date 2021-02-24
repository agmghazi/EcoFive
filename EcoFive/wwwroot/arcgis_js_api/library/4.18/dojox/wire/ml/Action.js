//>>built
define(["dojo","dijit","dojox","dojo/require!dijit/_Widget,dijit/_Container,dojox/wire/Wire,dojox/wire/ml/util"],function(c,f,e){c.provide("dojox.wire.ml.Action");c.require("dijit._Widget");c.require("dijit._Container");c.require("dojox.wire.Wire");c.require("dojox.wire.ml.util");c.declare("dojox.wire.ml.Action",[f._Widget,f._Container],{trigger:"",triggerEvent:"",triggerTopic:"",postCreate:function(){this._connect()},_connect:function(){if(this.triggerEvent)if(this.trigger){var b=e.wire.ml._getValue(this.trigger);
b&&(b[this.triggerEvent]||(b[this.triggerEvent]=function(){}),this._triggerHandle=c.connect(b,this.triggerEvent,this,"run"))}else{if("onload"==this.triggerEvent.toLowerCase()){var a=this;c.addOnLoad(function(){a._run.apply(a,arguments)})}}else this.triggerTopic&&(this._triggerHandle=c.subscribe(this.triggerTopic,this,"run"))},_disconnect:function(){this._triggerHandle&&(this.triggerTopic?c.unsubscribe(this.triggerTopic,this._triggerHandle):c.disconnect(this._triggerHandle))},run:function(){var b=
this.getChildren(),a;for(a in b){var d=b[a];if(d instanceof e.wire.ml.ActionFilter&&!d.filter.apply(d,arguments))return}this._run.apply(this,arguments)},_run:function(){var b=this.getChildren(),a;for(a in b){var d=b[a];d instanceof e.wire.ml.Action&&d.run.apply(d,arguments)}},uninitialize:function(){this._disconnect();return!0}});c.declare("dojox.wire.ml.ActionFilter",f._Widget,{required:"",requiredValue:"",type:"",message:"",error:"",filter:function(){if(""===this.required)return!0;var b=e.wire.ml._getValue(this.required,
arguments);if(""===this.requiredValue){if(b)return!0}else{var a=this.requiredValue;if(""!==this.type){var d=this.type.toLowerCase();"boolean"===d?a="false"===a.toLowerCase()?!1:!0:"number"===d&&(a=parseInt(a,10))}if(b===a)return!0}this.message&&(this.error?e.wire.ml._setValue(this.error,this.message):alert(this.message));return!1}})});