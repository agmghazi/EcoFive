//>>built
define(["dojo/_base/lang","./_base"],function(g,h){var k=g.getObject("br",!0,h);k.isValidCnpj=function(a){if(!g.isString(a)){if(!a)return!1;for(a+="";14>a.length;)a="0"+a}if(h.isNumberFormat(a,{format:["##.###.###/####-##","########/####-##","############-##","##############"]})){a=a.replace("/","").replace(/\./g,"").replace("-","");var c=[],d=[],b,e;for(b=0;10>b;b++){var l="";for(e=0;e<a.length;e++)l+=""+b;if(a===l)return!1}for(b=0;12>b;b++)c.push(parseInt(a.charAt(b),10));for(b=12;14>b;b++)d.push(parseInt(a.charAt(b),
10));a=[9,8,7,6,5,4,3,2,9,8,7,6].reverse();for(b=e=0;b<c.length;b++)e+=c[b]*a[b];b=f(e);if(b==d[0]){e=0;a=[9,8,7,6,5,4,3,2,9,8,7,6,5].reverse();c.push(b);for(b=0;b<c.length;b++)e+=c[b]*a[b];if(f(e)===d[1])return!0}}return!1};k.computeCnpjDv=function(a){if(!g.isString(a)){if(!a)return"";for(a+="";12>a.length;)a="0"+a}if(h.isNumberFormat(a,{format:["##.###.###/####","########/####","############"]})){a=a.replace("/","").replace(/\./g,"");var c=[],d,b;for(d=0;10>d;d++){var e="";for(b=0;b<a.length;b++)e+=
""+d;if(a===e)return""}for(d=0;d<a.length;d++)c.push(parseInt(a.charAt(d),10));b=[9,8,7,6,5,4,3,2,9,8,7,6].reverse();for(d=e=0;d<c.length;d++)e+=c[d]*b[d];a=f(e);e=0;b=[9,8,7,6,5,4,3,2,9,8,7,6,5].reverse();c.push(a);for(d=0;d<c.length;d++)e+=c[d]*b[d];c=f(e);return""+a+c}return""};k.isValidCpf=function(a){if(!g.isString(a)){if(!a)return!1;for(a+="";11>a.length;)a="0"+a}if(h.isNumberFormat(a,{format:["###.###.###-##","#########-##","###########"]})){a=a.replace("-","").replace(/\./g,"");var c=[],d=
[],b,e;for(b=0;10>b;b++){var l="";for(e=0;e<a.length;e++)l+=""+b;if(a===l)return!1}for(b=0;9>b;b++)c.push(parseInt(a.charAt(b),10));for(b=9;12>b;b++)d.push(parseInt(a.charAt(b),10));a=[9,8,7,6,5,4,3,2,1].reverse();for(b=e=0;b<c.length;b++)e+=c[b]*a[b];b=f(e);if(b==d[0]){e=0;a=[9,8,7,6,5,4,3,2,1,0].reverse();c.push(b);for(b=0;b<c.length;b++)e+=c[b]*a[b];if(f(e)===d[1])return!0}}return!1};k.computeCpfDv=function(a){if(!g.isString(a)){if(!a)return"";for(a+="";9>a.length;)a="0"+a}if(h.isNumberFormat(a,
{format:["###.###.###","#########"]})){a=a.replace(/\./g,"");var c=[];for(i=0;10>i;i++){tmp="";for(j=0;j<a.length;j++)tmp+=""+i;if(a===tmp)return""}for(i=0;i<a.length;i++)c.push(parseInt(a.charAt(i),10));var d=[9,8,7,6,5,4,3,2,1].reverse(),b=0;for(i=0;i<c.length;i++)b+=c[i]*d[i];a=f(b);b=0;d=[9,8,7,6,5,4,3,2,1,0].reverse();c.push(a);for(i=0;i<c.length;i++)b+=c[i]*d[i];c=f(b);return""+a+c}return""};var f=function(a){a%=11;10===a&&(a=0);return a};return k});