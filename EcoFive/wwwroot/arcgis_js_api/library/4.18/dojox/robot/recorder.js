//>>built
define(["dojo","dijit","dojox"],function(d,C,D){d.provide("dojox.robot.recorder");d.experimental("dojox.robot.recorder");(function(){var k=[],x=0,l=null,n=null,h=function(a,b){if(!(null==l||"doh.robot.keyPress"==a&&b[0]==d.keys.ENTER&&eval("("+b[2]+")").ctrl&&eval("("+b[2]+")").alt)){var c=Math.max(Math.min(Math.round((new Date).getTime()-n.getTime()),1E4),1);"doh.robot.mouseMove"==a?b[2]=c:b[1]=c;k.push({name:a,args:b});n=new Date}},y=function(){var a=k;"doh.robot.keyPress"!=a[0].name||a[0].args[0]!=
d.keys.ENTER&&77!=a[0].args[0]||a.splice(0,1);for(var b=a.length-1;b>=a.length-2&&0<=b;b--)("doh.robot.keyPress"==a[b].name&&a[b].args[0]==d.keys.ALT||a[b].args[0]==d.keys.CTRL)&&a.splice(b,1);for(b=0;b<a.length;b++){var c;if(a[b+1]&&"doh.robot.mouseMove"==a[b].name&&a[b+1].name==a[b].name&&500>a[b+1].args[2]){var e=a[b+1];for(c=0;e&&e.name==a[b].name&&500>e.args[2];)a.splice(b+1,1),c+=e.args[2],a[b].args[0]=e.args[0],a[b].args[1]=e.args[1],e=a[b+1];a[b].args[3]=c}else if(a[b+1]&&"doh.robot.mouseWheel"==
a[b].name&&a[b+1].name==a[b].name&&500>a[b+1].args[1]){e=a[b+1];for(c=0;e&&e.name==a[b].name&&500>e.args[1];)a.splice(b+1,1),c+=e.args[1],a[b].args[0]+=e.args[0],e=a[b+1];a[b].args[2]=c}else if(a[b+2]&&"doh.robot.mouseMoveAt"==a[b].name&&"doh.robot.scrollIntoView"==a[b+2].name)e=a.splice(b+2,1)[0],a.splice(b,0,e);else if(a[b+1]&&"doh.robot.mousePress"==a[b].name&&"doh.robot.mouseRelease"==a[b+1].name&&a[b].args[0]==a[b+1].args[0])a[b].name="doh.robot.mouseClick",a.splice(b+1,1),a[b+1]&&"doh.robot.mouseClick"==
a[b+1].name&&a[b].args[0]==a[b+1].args[0]&&a.splice(b+1,1);else if(a[b+1]&&a[b-1]&&"doh.robot.mouseMoveAt"==a[b-1].name&&"doh.robot.mousePress"==a[b].name&&"doh.robot.mouseMove"==a[b+1].name)a.splice(b+1,0,{name:"doh.robot.mouseMoveAt",args:[a[b-1].args[0],1,100,a[b-1].args[3]+1,a[b-1].args[4]]});else if(a[b+1]&&("doh.robot.keyPress"==a[b].name&&"string"==typeof a[b].args[0]||"doh.robot.typeKeys"==a[b].name)&&"doh.robot.keyPress"==a[b+1].name&&"string"==typeof a[b+1].args[0]&&1E3>=a[b+1].args[1]&&
!eval("("+a[b].args[2]+")").ctrl&&!eval("("+a[b].args[2]+")").alt&&!eval("("+a[b+1].args[2]+")").ctrl&&!eval("("+a[b+1].args[2]+")").alt){a[b].name="doh.robot.typeKeys";a[b].args.splice(3,1);e=a[b+1];for(c=0;e&&"doh.robot.keyPress"==e.name&&"string"==typeof e.args[0]&&1E3>=e.args[1]&&!eval("("+e.args[2]+")").ctrl&&!eval("("+e.args[2]+")").alt;)a.splice(b+1,1),a[b].args[0]+=e.args[0],c+=e.args[1],e=a[b+1];a[b].args[2]=c;a[b].args[0]="'"+a[b].args[0]+"'"}else if("doh.robot.keyPress"==a[b].name)if("string"==
typeof a[b].args[0])a[b].args[0]="'"+a[b].args[0]+"'";else if(0==a[b].args[0])a.splice(b,1);else for(var g in d.keys)if(d.keys[g]==a[b].args[0]){a[b].args[0]="dojo.keys."+g;break}}},B=function(){var a=Math.round((new Date).getTime()-l.getTime());l=null;y();var b=k;console.log("Stop called. Commands: "+b.length);if(b.length){var c="doh.register('dojox.robot.AutoGeneratedTestGroup',{\n     name: 'autotest"+(x++ +"',\n");c+="     timeout: "+(a+2E3)+",\n     runTest: function(){\n          var d \x3d new doh.Deferred();\n";
for(a=0;a<b.length;a++){c+="          "+b[a].name+"(";for(var e=0;e<b[a].args.length;e++)c+=b[a].args[e],e!=b[a].args.length-1&&(c+=", ");c+=");\n"}c+="          doh.robot.sequence(function(){\n";c+="               if(/*Your condition here*/){\n";c+="                    d.callback(true);\n";c+="               }else{\n";c+="                    d.errback(new Error('We got a failure'));\n";c+="               }\n";c+="          }, 1000);\n";c+="          return d;\n";c+="     }\n";c+="});\n";var g=document.createElement("div");
g.id="dojox.robot.recorder";g.style.backgroundColor="white";g.style.position="absolute";b=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;a=window.pageXOffset||(window.dojo?d._fixIeBiDiScrollLeft(document.documentElement.scrollLeft):void 0)||document.body.scrollLeft||0;g.style.left=a+"px";g.style.top=b+"px";b=document.createElement("h1");b.innerHTML="Your code:";g.appendChild(b);b=document.createElement("pre");void 0!==b.innerText?b.innerText=c:b.textContent=c;g.appendChild(b);
c=document.createElement("button");c.innerHTML="Close";var A=d.connect(c,"onmouseup",function(z){d.stopEvent(z);document.body.removeChild(g);d.disconnect(A)});g.appendChild(c);document.body.appendChild(g);k=[]}},m=function(a){if("string"==typeof a)return"'"+a+"'";if(a.id)return"'"+a.id+"'";var b=document.getElementsByTagName(a.nodeName),c;for(c=0;c<b.length&&b[c]!=a;c++);return"function(){ return document.getElementsByTagName('"+a.nodeName+"')["+c+"]; }"},p=function(a){return"{left:"+(0==a)+", middle:"+
(1==a)+", right:"+(2==a)+"}"};d.connect(document,"onkeydown",function(a){(a.keyCode==d.keys.ENTER||77==a.keyCode)&&a.ctrlKey&&a.altKey&&(d.stopEvent(a),l?B():(alert("Started recording."),k=[],l=new Date,n=new Date))});var f={type:""},q=function(a){if(a&&(f.type!=a.type||f.button!=a.button)){f={type:a.type,button:a.button};var b=m(a.target),c=d.coords(a.target);h("doh.robot.mouseMoveAt",[b,0,100,a.clientX-c.x,a.clientY-c.y]);h("doh.robot.mousePress",[p(a.button-(d.isIE?1:0)),0])}},r=function(a){!a||
f.type==a.type&&f.button==a.button||(f={type:a.type,button:a.button},m(a.target),d.coords(a.target),h("doh.robot.mouseClick",[p(a.button-(d.isIE?1:0)),0]))},t=function(a){!a||f.type==a.type&&f.button==a.button||(f={type:a.type,button:a.button},m(a.target),d.coords(a.target),h("doh.robot.mouseRelease",[p(a.button-(d.isIE?1:0)),0]))},u=function(a){!a||f.type==a.type&&f.pageX==a.pageX&&f.pageY==a.pageY||(f={type:a.type,detail:a.detail?a.detail:-a.wheelDelta/120},h("doh.robot.mouseWheel",[f.detail]))},
v=function(a){!a||f.type==a.type&&f.charCode==a.charCode&&f.keyCode==a.keyCode||(f={type:a.type,charCode:a.charCode,keyCode:a.keyCode},h("doh.robot.keyPress",[a.charOrCode==d.keys.SPACE?" ":a.charOrCode,0,"{'shift':"+a.shiftKey+", 'ctrl':"+a.ctrlKey+", 'alt':"+a.altKey+"}"]))},w=function(a){!a||f.type==a.type&&f.charCode==a.charCode&&f.keyCode==a.keyCode||(f={type:a.type,charCode:a.charCode,keyCode:a.keyCode})};d.connect(document,"onmousedown",q);d.connect(document,"onmouseup",t);d.connect(document,
"onclick",r);d.connect(document,"onkeypress",v);d.connect(document,"onkeyup",w);d.connect(document,"onmousemove",function(a){!a||f.type==a.type&&f.pageX==a.pageX&&f.pageY==a.pageY||(f={type:a.type,pageX:a.pageX,pageY:a.pageY},h("doh.robot.mouseMove",[a.pageX,a.pageY,0,100,!0]))});d.connect(document,d.isMozilla?"DOMMouseScroll":"onmousewheel",u);d.addOnLoad(function(){d.window&&d.connect(d.window,"scrollIntoView",function(a){h("doh.robot.scrollIntoView",[m(a)])})});d.connect(d,"connect",function(a,
b,c){!a||c&&c._mine||(c=null,"onmousedown"==b.toLowerCase()?c=d.hitch(this,q):b.toLowerCase()==(d.isMozilla?"dommousescroll":"onmousewheel")?c=d.hitch(this,u):"onclick"==b.toLowerCase()?c=d.hitch(this,r):"onmouseup"==b.toLowerCase()?c=d.hitch(this,t):"onkeypress"==b.toLowerCase()?c=d.hitch(this,v):"onkeyup"==b.toLowerCase()&&(c=d.hitch(this,w)),null!=c&&(c._mine=!0,d.connect(a,b,c)))})})()});