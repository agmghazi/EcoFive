// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports"],function(u){function x(b){const {classificationMethod:h,breakCount:k,normalizationType:g}=b.definition,e=[];var a=b.values;if(0===a.length)return[];a=a.sort((n,p)=>n-p);var d=a[0];b=a[a.length-1];if("equal-interval"===h)if(a.length>=k){a=(b-d)/k;var f=d;for(var l=1;l<k;l++){var c=Number((d+l*a).toFixed(6));e.push({minValue:f,maxValue:c,label:q(f,c,g)});f=c}e.push({minValue:f,maxValue:b,label:q(f,b,g)})}else a.forEach(n=>{e.push({minValue:n,maxValue:n,label:q(n,n,g)})});else if("natural-breaks"===
h){a=v(a);f=y(a.uniqueValues,a.valueFrequency,k);for(l=1;l<k;l++)a.uniqueValues.length>l&&(c=Number(a.uniqueValues[f[l]].toFixed(6)),e.push({minValue:d,maxValue:c,label:q(d,c,g)}),d=c);e.push({minValue:d,maxValue:b,label:q(d,b,g)})}else if("quantile"===h)if(a.length>=k&&d!==b){f=Math.ceil(a.length/k);l=0;for(c=1;c<k;c++){var m=f+l-1;m>a.length&&(m=a.length-1);0>m&&(m=0);e.push({minValue:d,maxValue:a[m],label:q(d,a[m],g)});d=a[m];l+=f;f=Math.ceil((a.length-l)/(k-c))}e.push({minValue:d,maxValue:b,label:q(d,
b,g)})}else for(b=-1,d=0;d<a.length;d++)f=a[d],f!==b&&(b=f,e.push({minValue:b,maxValue:f,label:q(b,f,g)}),b=f);else if("standard-deviation"===h)if(f=z(a),l=A(a,f),0===l)e.push({minValue:a[0],maxValue:a[0],label:q(a[0],a[0],g)});else{a=B(d,b,k,f,l)*l;l=0;for(c=k;1<=c;c--)m=Number((f-(c-.5)*a).toFixed(6)),e.push({minValue:d,maxValue:m,label:q(d,m,g)}),d=m,l++;c=Number((f+.5*a).toFixed(6));e.push({minValue:d,maxValue:c,label:q(d,c,g)});d=c;l++;for(m=1;m<=k;m++)c=l===2*k?b:Number((f+(m+.5)*a).toFixed(6)),
e.push({minValue:d,maxValue:c,label:q(d,c,g)}),d=c,l++}return e}function q(b,h,k){let g=null;return g=b===h?k&&"percent-of-total"===k?b+"%":b.toString():k&&"percent-of-total"===k?b+"% - "+h+"%":b+" - "+h}function v(b){const h=[],k=[];let g=Number.MIN_VALUE,e=1,a=-1;for(let d=0;d<b.length;d++){const f=b[d];f===g?(e++,k[a]=e):null!==f&&(h.push(f),g=f,e=1,k.push(e),a++)}return{uniqueValues:h,valueFrequency:k}}function y(b,h,k){var g=b.length;const e=[];k>g&&(k=g);for(var a=0;a<k;a++)e.push(Math.round(a*
g/k-1));e.push(g-1);a=w(e,b,h,k);{g=a.mean;a=a.sdcm;var d=k,f=0,l=0;let m=0,n=0,p=!0;for(let r=0;2>r&&p;r++){0===r&&(p=!1);for(var c=0;c<d-1;c++)for(;e[c+1]+1!==e[c+2];)if(e[c+1]+=1,f=t(c,e,b,h),m=f.sbMean,f=f.sbSdcm,l=t(c+1,e,b,h),n=l.sbMean,l=l.sbSdcm,f+l<a[c]+a[c+1])a[c]=f,a[c+1]=l,g[c]=m,g[c+1]=n,p=!0;else{--e[c+1];break}for(c=d-1;0<c;c--)for(;e[c]!==e[c-1]+1;)if(--e[c],f=t(c-1,e,b,h),m=f.sbMean,f=f.sbSdcm,l=t(c,e,b,h),n=l.sbMean,l=l.sbSdcm,f+l<a[c-1]+a[c])a[c-1]=f,a[c]=l,g[c-1]=m,g[c]=n,p=!0;
else{e[c]+=1;break}}g=p}g&&(a=w(e,b,h,k));return e}function w(b,h,k,g){let e=[];var a=[],d=[];let f=0;const l=[],c=[];for(var m=0;m<g;m++){var n=t(m,b,h,k);l.push(n.sbMean);c.push(n.sbSdcm);f+=c[m]}n=f;for(m=!0;m||f<n;){m=!1;e=[];for(a=0;a<g;a++)e.push(b[a]);for(d=0;d<g;d++)for(n=b[d]+1;n<=b[d+1];n++)if(a=h[n],0<d&&n!==b[d+1]&&Math.abs(a-l[d])>Math.abs(a-l[d-1]))b[d]=n;else if(d<g-1&&b[d]!==n-1&&Math.abs(a-l[d])>Math.abs(a-l[d+1])){b[d+1]=n-1;break}n=f;f=0;a=[];d=[];for(let p=0;p<g;p++){a.push(l[p]);
d.push(c[p]);const r=t(p,b,h,k);l[p]=r.sbMean;c[p]=r.sbSdcm;f+=c[p]}}if(f>n){for(h=0;h<g;h++)b[h]=e[h],l[h]=a[h],c[h]=d[h];f=n}return{mean:l,sdcm:c}}function B(b,h,k,g,e){b=Math.max(g-b,h-g)/e/k;return 1<=b?1:.5<=b?.5:.25}function z(b){let h=0;for(let k=0;k<b.length;k++)h+=b[k];return h/=b.length}function A(b,h){let k=0;for(let g=0;g<b.length;g++){const e=b[g];k+=(e-h)*(e-h)}k/=b.length;return Math.sqrt(k)}function t(b,h,k,g){var e=0,a=0;for(var d=h[b]+1;d<=h[b+1];d++){const f=g[d];e+=k[d]*f;a+=f}0>=
a&&console.log("Exception in Natural Breaks calculation");e/=a;a=0;for(d=h[b]+1;d<=h[b+1];d++)a+=g[d]*Math.pow(k[d]-e,2);return{sbMean:e,sbSdcm:a}}u.createGenerateRendererClassBreaks=function(b){const {normalizationTotal:h}=b;return{classBreaks:x(b),normalizationTotal:h}};u.createGenerateRendererUniqueValues=function(b){b=v(b);const h=[],k=b.uniqueValues.length;for(let g=0;g<k;g++){const e=b.uniqueValues[g];h.push({value:e,count:b.valueFrequency[g],label:e.toString()})}return{uniqueValues:h}};Object.defineProperty(u,
"__esModule",{value:!0})});