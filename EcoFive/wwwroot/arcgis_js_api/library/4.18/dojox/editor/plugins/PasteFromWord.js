//>>built
define("dojo dijit dojox dijit/_editor/_Plugin dijit/_base/manager dijit/_editor/RichText dijit/form/Button dijit/Dialog dojox/html/format dojo/_base/connect dojo/_base/declare dojo/i18n dojo/string dojo/i18n!dojox/editor/plugins/nls/PasteFromWord dojo/i18n!dijit/nls/common dojo/i18n!dijit/_editor/nls/commands".split(" "),function(b,c,e,h){var g=b.declare("dojox.editor.plugins.PasteFromWord",h,{iconClassPrefix:"dijitAdditionalEditorIcon",width:"400px",height:"300px",_template:"\x3cdiv class\x3d'dijitPasteFromWordEmbeddedRTE'\x3e\x3cdiv style\x3d'width: ${width}; padding-top: 5px; padding-bottom: 5px;'\x3e${instructions}\x3c/div\x3e\x3cdiv id\x3d'${uId}_rte' style\x3d'width: ${width}; height: ${height}'\x3e\x3c/div\x3e\x3ctable style\x3d'width: ${width}' tabindex\x3d'-1'\x3e\x3ctbody\x3e\x3ctr\x3e\x3ctd align\x3d'center'\x3e\x3cbutton type\x3d'button' dojoType\x3d'dijit.form.Button' id\x3d'${uId}_paste'\x3e${paste}\x3c/button\x3e\x26nbsp;\x3cbutton type\x3d'button' dojoType\x3d'dijit.form.Button' id\x3d'${uId}_cancel'\x3e${buttonCancel}\x3c/button\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e\x3c/div\x3e",
_filters:[{regexp:/(<meta\s*[^>]*\s*>)|(<\s*link\s* href="file:[^>]*\s*>)|(<\/?\s*\w+:[^>]*\s*>)/gi,handler:""},{regexp:/(?:<style([^>]*)>([\s\S]*?)<\/style>|<link\s+(?=[^>]*rel=['"]?stylesheet)([^>]*?href=(['"])([^>]*?)\4[^>\/]*)\/?>)/gi,handler:""},{regexp:/(class="Mso[^"]*")|(\x3c!--(.|\s){1,}?--\x3e)/gi,handler:""},{regexp:/(<p[^>]*>\s*(&nbsp;|\u00A0)*\s*<\/p[^>]*>)|(<p[^>]*>\s*<font[^>]*>\s*(&nbsp;|\u00A0)*\s*<\/\s*font\s*>\s<\/p[^>]*>)/ig,handler:""},{regexp:/(style="[^"]*mso-[^;][^"]*")|(style="margin:\s*[^;"]*;")/gi,
handler:""},{regexp:/(<\s*script[^>]*>((.|\s)*?)<\\?\/\s*script\s*>)|(<\s*script\b([^<>]|\s)*>?)|(<[^>]*=(\s|)*[("|')]javascript:[^$1][(\s|.)]*[$1][^>]*>)/ig,handler:""},{regexp:/<(\/?)o:p[^>]*>/gi,handler:""}],_initButton:function(){this._filters=this._filters.slice(0);var a=b.i18n.getLocalization("dojox.editor.plugins","PasteFromWord");b.mixin(a,b.i18n.getLocalization("dijit","common"));b.mixin(a,b.i18n.getLocalization("dijit._editor","commands"));this.button=new c.form.Button({label:a.pasteFromWord,
showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"PasteFromWord",tabIndex:"-1",onClick:b.hitch(this,"_openDialog")});this._uId=c.getUniqueId(this.editor.id);a.uId=this._uId;a.width=this.width||"400px";a.height=this.height||"300px";this._dialog=(new c.Dialog({title:a.pasteFromWord})).placeAt(b.body());this._dialog.set("content",b.string.substitute(this._template,a));b.style(b.byId(this._uId+"_rte"),"opacity",.001);this.connect(c.byId(this._uId+"_paste"),"onClick","_paste");this.connect(c.byId(this._uId+
"_cancel"),"onClick","_cancel");this.connect(this._dialog,"onHide","_clearDialog")},updateState:function(){this.button.set("disabled",this.get("disabled"))},setEditor:function(a){this.editor=a;this._initButton()},_openDialog:function(){this._dialog.show();this._rte||setTimeout(b.hitch(this,function(){this._rte=new c._editor.RichText({height:this.height||"300px"},this._uId+"_rte");this._rte.startup();this._rte.onLoadDeferred.addCallback(b.hitch(this,function(){b.animateProperty({node:this._rte.domNode,
properties:{opacity:{start:.001,end:1}}}).play()}))}),100)},_paste:function(){var a=e.html.format.prettyPrint(this._rte.get("value"));this._dialog.hide();var d;for(d=0;d<this._filters.length;d++){var f=this._filters[d];a=a.replace(f.regexp,f.handler)}a=e.html.format.prettyPrint(a);this.editor.focus();this.editor.execCommand("inserthtml",a)},_cancel:function(){this._dialog.hide()},_clearDialog:function(){this._rte.set("value","")},destroy:function(){this._rte&&this._rte.destroy();this._dialog&&this._dialog.destroyRecursive();
delete this._dialog;delete this._rte;this.inherited(arguments)}});b.subscribe(c._scopeName+".Editor.getPlugin",null,function(a){a.plugin||"pastefromword"!==a.args.name.toLowerCase()||(a.plugin=new g({width:"width"in a.args?a.args.width:"400px",height:"height"in a.args?a.args.width:"300px"}))});return g});