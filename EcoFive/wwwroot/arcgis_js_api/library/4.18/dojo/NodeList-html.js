//>>built
define(["./query","./_base/lang","./html"],function(a,c,d){a=a.NodeList;c.extend(a,{html:function(e,f){var b=new d._ContentSetter(f||{});this.forEach(function(g){b.node=g;b.set(e);b.tearDown()});return this}});return a});