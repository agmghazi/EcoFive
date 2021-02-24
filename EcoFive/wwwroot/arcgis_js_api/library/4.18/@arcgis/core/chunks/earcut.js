/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e,r,i){const u=r&&r.length,o=u?r[0]*i:e.length;let y=n(e,0,o,i,!0);const p=new Array;if(!y||y.next===y.prev)return p;let s,c,v,h,d;if(u&&(y=function(e,x,r,i){const u=new Array;for(let t=0,r=x.length;t<r;t++){const o=n(e,x[t]*i,t<r-1?x[t+1]*i:e.length,i,!1);o===o.next&&(o.steiner=!0),u.push(l(o))}u.sort(w);for(const e of u)f(e,r),r=t(r,r.next);return r}(e,r,y,i)),e.length>80*i){s=v=e[0],c=h=e[1];for(let n=i;n<o;n+=i){const t=e[n],x=e[n+1];s=Math.min(s,t),c=Math.min(c,x),v=Math.max(v,t),h=Math.max(h,x)}d=Math.max(v-s,h-c),d=0!==d?1/d:0}return x(y,p,i,s,c,d),p}function n(e,n,t,x,r){let i;if(r===v(e,n,t,x)>0)for(let r=n;r<t;r+=x)i=u(r,e[r],e[r+1],i);else for(let r=t-x;r>=n;r-=x)i=u(r,e[r],e[r+1],i);return i&&a(i,i.next)&&(o(i),i=i.next),i}function t(e,n=e){if(!e)return e;let t,x=e;do{if(t=!1,x.steiner||!a(x,x.next)&&0!==s(x.prev,x,x.next))x=x.next;else{if(o(x),x=n=x.prev,x===x.next)break;t=!0}}while(t||x!==n);return n}function x(e,n,u,l,f,p,s=0){if(!e)return;!s&&p&&(e=y(e,l,f,p));let c=e;for(;e.prev!==e.next;){const y=e.prev,v=e.next;if(p?i(e,l,f,p):r(e))n.push(y.index/u),n.push(e.index/u),n.push(v.index/u),o(e),e=v.next,c=v.next;else if((e=v)===c){s?1===s?x(e=g(e,n,u),n,u,l,f,p,2):2===s&&M(e,n,u,l,f,p):x(t(e),n,u,l,f,p,1);break}}}function r(e){const n=e.prev,t=e,x=e.next;if(s(n,t,x)>=0)return!1;let r=e.next.next;const i=r;let u=0;for(;r!==e.prev&&(0===u||r!==i);){if(u++,h(n.x,n.y,t.x,t.y,x.x,x.y,r.x,r.y)&&s(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function i(e,n,t,x){const r=e.prev,i=e,u=e.next;if(s(r,i,u)>=0)return!1;const o=r.x<i.x?r.x<u.x?r.x:u.x:i.x<u.x?i.x:u.x,l=r.y<i.y?r.y<u.y?r.y:u.y:i.y<u.y?i.y:u.y,f=r.x>i.x?r.x>u.x?r.x:u.x:i.x>u.x?i.x:u.x,y=r.y>i.y?r.y>u.y?r.y:u.y:i.y>u.y?i.y:u.y,p=Z(o,l,n,t,x),c=Z(f,y,n,t,x);let v=e.prevZ,d=e.nextZ;for(;v&&v.z>=p&&d&&d.z<=c;){if(v!==e.prev&&v!==e.next&&h(r.x,r.y,i.x,i.y,u.x,u.y,v.x,v.y)&&s(v.prev,v,v.next)>=0)return!1;if(v=v.prevZ,d!==e.prev&&d!==e.next&&h(r.x,r.y,i.x,i.y,u.x,u.y,d.x,d.y)&&s(d.prev,d,d.next)>=0)return!1;d=d.nextZ}for(;v&&v.z>=p;){if(v!==e.prev&&v!==e.next&&h(r.x,r.y,i.x,i.y,u.x,u.y,v.x,v.y)&&s(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;d&&d.z<=c;){if(d!==e.prev&&d!==e.next&&h(r.x,r.y,i.x,i.y,u.x,u.y,d.x,d.y)&&s(d.prev,d,d.next)>=0)return!1;d=d.nextZ}return!0}function u(e,n,t,x){const r=new m(e,n,t);return x?(r.next=x.next,r.prev=x,x.next.prev=r,x.next=r):(r.prev=r,r.next=r),r}function o(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function l(e){let n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function f(e,n){if(n=function(e,n){let t=n;const x=e.x,r=e.y;let i,u=-1/0;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const e=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(e<=x&&e>u){if(u=e,e===x){if(r===t.y)return t;if(r===t.next.y)return t.next}i=t.x<t.next.x?t:t.next}}t=t.next}while(t!==n);if(!i)return null;if(x===u)return i.prev;const o=i,l=i.x,f=i.y;let y,p=1/0;t=i.next;for(;t!==o;)x>=t.x&&t.x>=l&&x!==t.x&&h(r<f?x:u,r,l,f,r<f?u:x,r,t.x,t.y)&&(y=Math.abs(r-t.y)/(x-t.x),(y<p||y===p&&t.x>i.x)&&d(t,e)&&(i=t,p=y)),t=t.next;return i}(e,n)){const x=b(n,e);t(x,x.next)}}function y(e,n,t,x){for(let r;r!==e;r=r.next){if(r=r||e,null===r.z&&(r.z=Z(r.x,r.y,n,t,x)),r.prev.next!==r||r.next.prev!==r)return r.prev.next=r,r.next.prev=r,y(e,n,t,x);r.prevZ=r.prev,r.nextZ=r.next}return e.prevZ.nextZ=null,e.prevZ=null,function(e){let n,t=1;for(;;){let x,r=e;e=null,n=null;let i=0;for(;r;){i++,x=r;let u=0;for(;u<t&&x;u++)x=x.nextZ;let o=t;for(;u>0||o>0&&x;){let t;0===u?(t=x,x=x.nextZ,o--):0!==o&&x?r.z<=x.z?(t=r,r=r.nextZ,u--):(t=x,x=x.nextZ,o--):(t=r,r=r.nextZ,u--),n?n.nextZ=t:e=t,t.prevZ=n,n=t}r=x}if(n.nextZ=null,t*=2,i<2)return e}}(e)}function p(e,n,t,x){const r=n&&n.length,i=r?n[0]*t:e.length;let u=Math.abs(v(e,0,i,t));if(r)for(let x=0,r=n.length;x<r;x++){const i=n[x]*t,o=x<r-1?n[x+1]*t:e.length;u-=Math.abs(v(e,i,o,t))}let o=0;for(let n=0;n<x.length;n+=3){const r=x[n]*t,i=x[n+1]*t,u=x[n+2]*t;o+=Math.abs((e[r]-e[u])*(e[i+1]-e[r+1])-(e[r]-e[i])*(e[u+1]-e[r+1]))}return 0===u&&0===o?0:Math.abs((o-u)/u)}function s(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function c(e,n,t,x){return!!(a(e,n)&&a(t,x)||a(e,x)&&a(t,n))||s(e,n,t)>0!=s(e,n,x)>0&&s(t,x,e)>0!=s(t,x,n)>0}function v(e,n,t,x){let r=0;for(let i=n,u=t-x;i<t;i+=x)r+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return r}function h(e,n,t,x,r,i,u,o){return(r-u)*(n-o)-(e-u)*(i-o)>=0&&(e-u)*(x-o)-(t-u)*(n-o)>=0&&(t-u)*(i-o)-(r-u)*(x-o)>=0}function d(e,n){return s(e.prev,e,e.next)<0?s(e,n,e.next)>=0&&s(e,e.prev,n)>=0:s(e,n,e.prev)<0||s(e,e.next,n)<0}function Z(e,n,t,x,r){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*r)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-x)*r)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function a(e,n){return e.x===n.x&&e.y===n.y}function w(e,n){return e.x-n.x}function g(e,n,t){let x=e;do{const r=x.prev,i=x.next.next;!a(r,i)&&c(r,x,x.next,i)&&d(r,i)&&d(i,r)&&(n.push(r.index/t),n.push(x.index/t),n.push(i.index/t),o(x),o(x.next),x=e=i),x=x.next}while(x!==e);return x}function M(e,n,r,i,u,o){let l=e;do{let e=l.next.next;for(;e!==l.prev;){if(l.index!==e.index&&z(l,e)){let f=b(l,e);return l=t(l,l.next),f=t(f,f.next),x(l,n,r,i,u,o),void x(f,n,r,i,u,o)}e=e.next}l=l.next}while(l!==e)}function z(e,n){return e.next.index!==n.index&&e.prev.index!==n.index&&!function(e,n){let t=e;do{if(t.index!==e.index&&t.next.index!==e.index&&t.index!==n.index&&t.next.index!==n.index&&c(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}(e,n)&&d(e,n)&&d(n,e)&&function(e,n){let t=e,x=!1;const r=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&r<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(x=!x),t=t.next}while(t!==e);return x}(e,n)}function b(e,n){const t=new m(e.index,e.x,e.y),x=new m(n.index,n.x,n.y),r=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=r,r.prev=t,x.next=t,t.prev=x,i.next=x,x.prev=i,x}class m{constructor(e,n,t){this.index=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}}export{p as d,e};