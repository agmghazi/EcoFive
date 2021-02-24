// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/languageUtils","./fieldStats"],function(m,k,l){function h(f,g,c,a){if(1===a.length){if(k.isArray(a[0]))return l.calculateStat(f,a[0],-1);if(k.isImmutableArray(a[0]))return l.calculateStat(f,a[0].toArray(),-1)}return l.calculateStat(f,a,-1)}m.registerFunctions=function(f,g){f.stdev=function(c,a){return g(c,a,function(d,e,b){return h("stdev",d,e,b)})};f.variance=function(c,a){return g(c,a,function(d,e,b){return h("variance",d,e,b)})};f.average=function(c,a){return g(c,
a,function(d,e,b){return h("mean",d,e,b)})};f.mean=function(c,a){return g(c,a,function(d,e,b){return h("mean",d,e,b)})};f.sum=function(c,a){return g(c,a,function(d,e,b){return h("sum",d,e,b)})};f.min=function(c,a){return g(c,a,function(d,e,b){return h("min",d,e,b)})};f.max=function(c,a){return g(c,a,function(d,e,b){return h("max",d,e,b)})};f.distinct=function(c,a){return g(c,a,function(d,e,b){return h("distinct",d,e,b)})};f.count=function(c,a){return g(c,a,function(d,e,b){k.pcCheck(b,1,1);if(k.isArray(b[0])||
k.isString(b[0]))return b[0].length;if(k.isImmutableArray(b[0]))return b[0].length();throw Error("Invalid Parameters for Count");})}};Object.defineProperty(m,"__esModule",{value:!0})});