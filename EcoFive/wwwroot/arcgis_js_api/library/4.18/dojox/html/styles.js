//>>built
define(["dojo/_base/lang","dojo/_base/array","dojo/_base/window","dojo/_base/sniff"],function(r,m,k,n){var d=r.getObject("dojox.html",!0),f={},g={},p=[];d.insertCssRule=function(a,b,c){c=d.getDynamicStyleSheet(c);var e=a+" {"+b+"}";console.log("insertRule:",e);n("ie")?(c.cssText+=e,console.log("ss.cssText:",c.cssText)):c.sheet?c.sheet.insertRule(e,c._indicies.length):c.appendChild(k.doc.createTextNode(e));c._indicies.push(a+" "+b);return a};d.removeCssRule=function(a,b,c){var e=-1,q,l;for(q in f)if(!c||
c===q){var h=f[q];for(l=0;l<h._indicies.length;l++)if(a+" "+b===h._indicies[l]){e=l;break}if(-1<e)break}if(!h)return console.warn("No dynamic style sheet has been created from which to remove a rule."),!1;if(-1===e)return console.warn("The css rule was not found and could not be removed."),!1;h._indicies.splice(e,1);n("ie")?h.removeRule(e):h.sheet&&h.sheet.deleteRule(e);return!0};d.modifyCssRule=function(a,b,c){};d.getStyleSheet=function(a){if(f[a||"default"])return f[a||"default"];if(!a)return!1;
var b=d.getStyleSheets();if(b[a])return d.getStyleSheets()[a];for(var c in b)if(b[c].href&&-1<b[c].href.indexOf(a))return b[c];return!1};d.getDynamicStyleSheet=function(a){a||(a="default");f[a]||(k.doc.createStyleSheet?(f[a]=k.doc.createStyleSheet(),9>n("ie")&&(f[a].title=a)):(f[a]=k.doc.createElement("style"),f[a].setAttribute("type","text/css"),k.doc.getElementsByTagName("head")[0].appendChild(f[a]),console.log(a," ss created: ",f[a].sheet)),f[a]._indicies=[]);return f[a]};d.enableStyleSheet=function(a){if(a=
d.getStyleSheet(a))a.sheet?a.sheet.disabled=!1:a.disabled=!1};d.disableStyleSheet=function(a){if(a=d.getStyleSheet(a))a.sheet?a.sheet.disabled=!0:a.disabled=!0};d.activeStyleSheet=function(a){var b=d.getToggledStyleSheets(),c;if(1===arguments.length)m.forEach(b,function(e){e.disabled=e.title===a?!1:!0});else for(c=0;c<b.length;c++)if(!1===b[c].disabled)return b[c];return!0};d.getPreferredStyleSheet=function(){};d.getToggledStyleSheets=function(){var a;if(!p.length){var b=d.getStyleSheets();for(a in b)b[a].title&&
p.push(b[a])}return p};d.getStyleSheets=function(){if(g.collected)return g;m.forEach(k.doc.styleSheets,function(a){var b=a.sheet?a.sheet:a;a=b.title||b.href;if(n("ie"))-1===b.cssText.indexOf("#default#VML")&&(b.href?g[a]=b:b.imports.length?m.forEach(b.imports,function(c){g[c.title||c.href]=c}):g[a]=b);else{g[a]=b;g[a].id=b.ownerNode.id;a=[];try{a=b[b.cssRules?"cssRules":"rules"]}catch(c){console.warn("Reading css rules from stylesheet "+b.href+" is forbidden due to same-origin policy. See http://www.w3.org/TR/CSP/#cascading-style-sheet-css-parsing",
b)}m.forEach(a,function(c){c.href&&(g[c.href]=c.styleSheet,g[c.href].id=b.ownerNode.id)})}});g.collected=!0;return g};return d});