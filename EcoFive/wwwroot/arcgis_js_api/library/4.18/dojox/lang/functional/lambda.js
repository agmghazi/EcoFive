//>>built
define(["../..","dojo/_base/lang","dojo/_base/array"],function(m,h,n){var d=h.getObject("lang.functional",!0,m),e={},p=1<"ab".split(/a*/).length?String.prototype.split:function(a){var b=this.split.call(this,a);(a=a.exec(this))&&0==a.index&&b.unshift("");return b},g=function(a){var b=[],c=p.call(a,/\s*->\s*/m);if(1<c.length)for(;c.length;)a=c.pop(),b=c.pop().split(/\s*,\s*|\s+/m),c.length&&c.push("(function("+b.join(", ")+"){ return ("+a+"); })");else if(a.match(/\b_\b/))b=["_"];else{c=a.match(/^\s*(?:[+*\/%&|\^\.=<>]|!=)/m);
var k=a.match(/[+\-*\/%&|\^\.=<>!]\s*$/m);if(c||k)c&&(b.push("$1"),a="$1"+a),k&&(b.push("$2"),a+="$2");else{c=a.replace(/(?:\b[A-Z]|\.[a-zA-Z_$])[a-zA-Z_$\d]*|[a-zA-Z_$][a-zA-Z_$\d]*:|this|true|false|null|undefined|typeof|instanceof|in|delete|new|void|arguments|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|eval|isFinite|isNaN|parseFloat|parseInt|unescape|dojo|dijit|dojox|window|document|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"/g,"").match(/([a-z_$][a-z_$\d]*)/gi)||[];var l={};n.forEach(c,
function(f){l.hasOwnProperty(f)||(b.push(f),l[f]=1)})}}return{args:b,body:a}},q=function(a){return a.length?function(){var b=a.length-1,c=d.lambda(a[b]).apply(this,arguments);for(--b;0<=b;--b)c=d.lambda(a[b]).call(this,c);return c}:function(b){return b}};h.mixin(d,{rawLambda:function(a){return g(a)},buildLambda:function(a){a=g(a);return"function("+a.args.join(",")+"){return ("+a.body+");}"},lambda:function(a){if("function"==typeof a)return a;if(a instanceof Array)return q(a);if(e.hasOwnProperty(a))return e[a];
var b=g(a);return e[a]=new Function(b.args,"return ("+b.body+");")},clearLambdaCache:function(){e={}}});return d});