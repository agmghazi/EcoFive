/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(n,t){if(n.forEach)n.forEach(t);else for(let r=0;r<n.length;r++)t(n[r],r,n)}function t(n,t,r){if(n.slice)return n.slice(t,r);void 0===t?t=0:(t<0&&(t+=n.length),t=Math.min(n.length,Math.max(0,t))),void 0===r?r=n.length:(r<0&&(r+=n.length),r=Math.min(n.length,Math.max(0,r)));const o=Math.max(0,r-t),e=new(0,n.constructor)(o);for(let r=0;r<o;r++)e[r]=n[t+r];return e}function r(n){return n instanceof ArrayBuffer||n&&n.constructor&&"ArrayBuffer"===n.constructor.name}function o(n){return n instanceof Uint8Array||n&&n.constructor&&"Uint8Array"===n.constructor.name}function e(n){return n instanceof Int16Array||n&&n.constructor&&"Int16Array"===n.constructor.name}function c(n){return n instanceof Uint16Array||n&&n.constructor&&"Uint16Array"===n.constructor.name}function a(n){return n instanceof Int32Array||n&&n.constructor&&"Int32Array"===n.constructor.name}function f(n){return n instanceof Uint32Array||n&&n.constructor&&"Uint32Array"===n.constructor.name}function i(n){return n instanceof Float32Array||n&&n.constructor&&"Float32Array"===n.constructor.name}function u(n){return n instanceof Float64Array||n&&n.constructor&&"Float64Array"===n.constructor.name}function s(n){const t=new Array(n.length);for(let r=0;r<n.length;r++)t[r]=n[r];return t}function y(n){return n?128+n.buffer.byteLength+64:0}function l(n,t){let r;if(t)for(r in n)n.hasOwnProperty(r)&&(void 0===n[r]?delete n[r]:n[r]instanceof Object&&l(n[r],!0));else for(r in n)n.hasOwnProperty(r)&&void 0===n[r]&&delete n[r];return n}function m(n){if(!n||"object"!=typeof n||"function"==typeof n)return n;if((r=n)instanceof Int8Array||r&&r.constructor&&"Int8Array"===r.constructor.name||o(n)||function(n){return n instanceof Uint8ClampedArray||n&&n.constructor&&"Uint8ClampedArray"===n.constructor.name}(n)||e(n)||c(n)||a(n)||f(n)||i(n)||u(n))return t(n);var r;if(n instanceof Date)return new Date(n.getTime());if(n instanceof ArrayBuffer){return n.slice(0,n.byteLength)}if(n instanceof Map){const t=new Map;return n.forEach(((n,r)=>{t.set(r,m(n))})),t}if(n instanceof Set){const t=new Set;return n.forEach((n=>{t.add(m(n))})),t}let s;const y=n;return s="function"==typeof y.clone?y.clone():"function"==typeof y.map&&"function"==typeof y.forEach?y.map(m):"function"==typeof y.notifyChange&&"function"==typeof y.watch?y.clone():p({},n,m),s}function h(n,t){return n===t||"number"==typeof n&&isNaN(n)&&"number"==typeof t&&isNaN(t)||"function"==typeof(n||{}).getTime&&"function"==typeof(t||{}).getTime&&n.getTime()===t.getTime()||!1}function A(n={},...t){for(const r of t)p(n,r);return n}function p(n,t,r){let o,e;const c={};for(o in t){e=t[o];const a=!(o in c)||c[o]!==e;(!(o in n)||n[o]!==e&&a)&&(n[o]=r?r(e):e)}return n}export{c as a,i as b,u as c,m as clone,o as d,y as e,h as equals,r as f,l as fixJson,n as g,e as h,f as i,a as j,A as mixin,t as s,s as t};
