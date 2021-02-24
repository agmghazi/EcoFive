//>>built
define(["dojo/_base/kernel","./entities","dojo/_base/array","dojo/_base/window","dojo/_base/sniff"],function(h,A,H,I,B){var C=h.getObject("dojox.html.format",!0);C.prettyPrint=function(J,p,t,D,K){var g=[],l=0,x=[],q="\t",k="",E=[],y,L=/[=]([^"']+?)(\s|>)/g,M=/style=("[^"]*"|'[^']*'|\S*)/gi,N=/[\w-]+=("[^"]*"|'[^']*'|\S*)/gi;if(p&&0<p&&10>p)for(q="",y=0;y<p;y++)q+=" ";p=I.doc.createElement("div");p.innerHTML=J;var O=A.encode,P=A.decode,z=p.ownerDocument.createElement("div"),Q=function(a){a=a.cloneNode(!1);
z.appendChild(a);a=z.innerHTML;z.innerHTML="";return a},u=function(){var a;for(a=0;a<l;a++)g.push(q)},v=function(){g.push("\n")},w=function(a){var b;a=a.split("\n");for(b=0;b<a.length;b++)a[b]=h.trim(a[b]);a=a.join(" ");a=h.trim(a);if(""!==a){var e=[];if(t&&0<t){var c="";for(b=0;b<l;b++)c+=q;b=c.length;c=t;for(t>b&&(c-=b);a;)if(a.length>t){for(b=c;0<b&&" "!==a.charAt(b);b--);if(!b)for(b=c;b<a.length&&" "!==a.charAt(b);b++);var d=a.substring(0,b);d=h.trim(d);a=h.trim(a.substring(b==a.length?a.length:
b+1,a.length));if(d){var f="";for(b=0;b<l;b++)f+=q;d=f+d+"\n"}e.push(d)}else{f="";for(b=0;b<l;b++)f+=q;a=f+a+"\n";e.push(a);a=null}return e.join("")}f="";for(b=0;b<l;b++)f+=q;return f+a+"\n"}return""},R=function(a){if(a){var b=a;b&&(b=b.replace(/&quot;/gi,'"'),b=b.replace(/&gt;/gi,"\x3e"),b=b.replace(/&lt;/gi,"\x3c"),b=b.replace(/&amp;/gi,"\x26"));var e;a=0;var c=b.split("\n"),d=[];for(b=0;b<c.length;b++){var f=c[b],r=-1<f.indexOf("\n");if(f=h.trim(f)){r=a;for(e=0;e<f.length;e++){var m=f.charAt(e);
"{"===m?a++:"}"===m&&(a--,r=a)}m="";for(e=0;e<l+r;e++)m+=q;d.push(m+f+"\n")}else r&&0===b&&d.push("\n")}a=d.join("")}return a},S=function(a){var b=a.nodeName.toLowerCase(),e=h.trim(Q(a));a=e.substring(0,e.indexOf("\x3e")+1);a=a.replace(L,'\x3d"$1"$2');a=a.replace(M,function(d){var f=d.substring(0,6);d=d.substring(6,d.length);var r=d.charAt(0);d=h.trim(d.substring(1,d.length-1));d=d.split(";");var m=[];H.forEach(d,function(n){if(n=h.trim(n))n=n.substring(0,n.indexOf(":")).toLowerCase()+n.substring(n.indexOf(":"),
n.length),m.push(n)});m=m.sort();d=m.join("; ");var F=h.trim(d);return F&&";"!==F?f+r+(d+";")+r:""});var c=[];a=a.replace(N,function(d){c.push(h.trim(d));return""});c=c.sort();a="\x3c"+b;c.length&&(a+=" "+c.join(" "));-1!=e.indexOf("\x3c/")?(x.push(b),a+="\x3e"):(a=K?a+" /\x3e":a+"\x3e",x.push(!1));a:switch(b){case "a":case "b":case "strong":case "s":case "strike":case "i":case "u":case "em":case "sup":case "sub":case "span":case "font":case "big":case "cite":case "q":case "small":b=!0;break a;default:b=
!1}E.push(b);k&&!b&&(g.push(w(k)),k="");b?k+=a:(u(),g.push(a),v(),l++)},G=function(a){var b=a.childNodes;if(b){var e;for(e=0;e<b.length;e++){var c=b[e];if(1===c.nodeType){var d=h.trim(c.tagName.toLowerCase());B("ie")&&c.parentNode!=a||d&&"/"===d.charAt(0)||(S(c),"script"===d?g.push(R(c.innerHTML)):"pre"===d?(c=c.innerHTML,B("mozilla")&&(c=c.replace("\x3cbr\x3e","\n"),c=c.replace("\x3cpre\x3e",""),c=c.replace("\x3c/pre\x3e","")),"\n"!==c.charAt(c.length-1)&&(c+="\n"),g.push(c)):G(c),c=E.pop(),k&&!c&&
(g.push(w(k)),k=""),(d=x.pop())?(d="\x3c/"+d+"\x3e",c?k+=d:(l--,u(),g.push(d),v())):l--)}else 3===c.nodeType||4===c.nodeType?k+=O(c.nodeValue,D):8===c.nodeType&&(c=P(c.nodeValue,D),u(),g.push("\x3c!--"),v(),l++,g.push(w(c)),l--,u(),g.push("--\x3e"),v())}}};G(p);k&&(g.push(w(k)),k="");return g.join("")};return C});