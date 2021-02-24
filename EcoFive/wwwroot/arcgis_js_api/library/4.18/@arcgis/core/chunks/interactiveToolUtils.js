/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./object.js";import{i as t,b as s}from"./Logger.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import o from"../core/Accessor.js";import{addFrameTask as r}from"../core/scheduling.js";import"./ensureType.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import a from"../core/Collection.js";import"../core/urlUtils.js";import"./resourceExtension.js";import{init as d}from"../core/watchUtils.js";import{W as h}from"../core/HandleOwner.js";import{r as c,b as l,e as u}from"./domUtils.js";import{c as p}from"./projector.js";import m from"../widgets/Popup.js";let f=class extends o{constructor(){super(...arguments),this.items=new a,this._watchUpdatingTracking=new h,this._callbacks=new Map,this._projector=p(),this._hiddenProjector=p()}get needsRender(){return this.items.length>0}initialize(){const e=document.createElement("div");e.className="esri-overlay-surface",this._set("surface",e),this._hiddenSurface=document.createElement("div"),this._hiddenSurface.setAttribute("style","visibility: hidden;"),e.appendChild(this._hiddenSurface),this._watchUpdatingTracking.addOnCollectionChange(this.items,(e=>{e.added.map((e=>{const t=()=>e.render();this._callbacks.set(e,t),this._projector.append(this.surface,t)})),e.removed.map((e=>{const t=this._projector.detach(this._callbacks.get(e));this.surface.removeChild(t.domNode),this._callbacks.delete(e)}))}))}addItem(e){this.items.add(e)}removeItem(e){this.items.remove(e)}destroy(){this.items.removeAll(),this._callbacks.forEach((e=>this._projector.detach(e))),this._callbacks=null,this._projector=null,this._watchUpdatingTracking.destroy()}render(){this._projector.renderNow()}computeBoundingRect(e){const t=this._hiddenSurface,s=this._hiddenProjector;let i=null;const o=()=>(i=e.render(),i);s.append(t,o),s.renderNow();const r={left:0,top:0,right:0,bottom:0};if(i&&i.domNode){const e=i.domNode.getBoundingClientRect();r.left=e.left,r.top=e.top,r.right=e.right,r.bottom=e.bottom}for(s.detach(o);t.firstChild;)t.removeChild(t.firstChild);return r}overlaps(e,t){const s=this.computeBoundingRect(e),i=this.computeBoundingRect(t);return Math.max(s.left,i.left)<=Math.min(s.right,i.right)&&Math.max(s.top,i.top)<=Math.min(s.bottom,i.bottom)}get hasVisibleItems(){return this.items.some((e=>e.visible))}renderCanvas(e){if(!this.items.some((e=>e.visible)))return;const t=e.getContext("2d");t.save(),t.font=`10px ${getComputedStyle(this.surface).fontFamily}`,this.items.forEach((e=>{t.save(),e.renderCanvas(t),t.restore()})),t.restore()}};e([i({readOnly:!0})],f.prototype,"surface",void 0),e([i({readOnly:!0})],f.prototype,"items",void 0),e([i({readOnly:!0,dependsOn:["items.length"]})],f.prototype,"needsRender",null),e([i({readOnly:!0})],f.prototype,"_watchUpdatingTracking",void 0),e([i({readOnly:!0,aliasOf:"_watchUpdatingTracking.updating"})],f.prototype,"updating",void 0),f=e([n("esri.views.overlay.ViewOverlay")],f);var v=f;const g=[0,0];function y(e){const t=(e.ownerDocument||window.document).defaultView,s=e.getBoundingClientRect();return g[0]=s.left+t.pageXOffset,g[1]=s.top+t.pageYOffset,g}function _(e){e&&(u(e),e.parentNode&&e.parentNode.removeChild(e))}const w=t=>{let s=class extends t{constructor(...e){super(...e),this._freqInfo={freq:16,time:750},this._overlayRenderTaskHandle=null,this.height=0,this.position=null,this.resizing=!1,this.root=null,this.surface=null,this.suspended=!0,this.ui=null,this.userContent=null,this.width=0,this.widthBreakpoint=null,this.handles.add([this.watch("cursor",(e=>{const t=this.surface;t&&t.setAttribute("data-cursor",e)})),this.watch("interacting",(e=>{const t=this.surface;t&&t.setAttribute("data-interacting",e.toString())}))])}initialize(){this.handles.add(this.watch("ui",((e,t)=>this._handleUIChange(e,t)))),this._wireUI(this.ui),this.handles.add([this.on("focus",(()=>this.notifyChange("focused"))),this.on("blur",(()=>this.notifyChange("focused")))])}destroy(){this.destroyed||(this.ui&&(this.ui.destroy(),this.ui=null),this.popup&&!this.popup.destroyed&&this.popup.destroy(),this.container=null)}set container(e){const t=this._get("container");if(t===e)return;const s="dom-size";if(this.handles.remove(s),this._stopMeasuring(),t&&(t.classList.remove("esri-view"),this._overlayRenderTaskHandle&&(this._overlayRenderTaskHandle.remove(),this._overlayRenderTaskHandle=null),this.overlay.destroy(),this._set("overlay",null),_(this.root),this._set("root",null),c(this.userContent,t),_(this.userContent),this._set("userContent",null)),e){e.classList.add("esri-view");const t=document.createElement("div");t.className="esri-view-user-storage",c(e,t),e.appendChild(t),this._set("userContent",t);const i=document.createElement("div");i.className="esri-view-root",e.insertBefore(i,e.firstChild),this._set("root",i);const o=document.createElement("div");o.className="esri-view-surface",o.setAttribute("role","application"),o.tabIndex=0,i.appendChild(o),this._set("surface",o);const n=new v;i.appendChild(n.surface),this._set("overlay",n),n.watch("needsRender",(e=>{e&&!this._overlayRenderTaskHandle?this._overlayRenderTaskHandle=r({render:()=>{this.overlay.render()}}):this._overlayRenderTaskHandle&&(this._overlayRenderTaskHandle.remove(),this._overlayRenderTaskHandle=null)})),this.forceDOMReadyCycle(),this.handles.add(d(this,"size",(e=>{const[t,s]=e,i="esri-view-surface--inset-outline";t>=document.body.clientWidth||s>=document.body.clientHeight?o.classList.add(i):o.classList.remove(i)})),s),this._set("container",e),this._startMeasuring()}else this._set("width",0),this._set("height",0),this._set("position",null),this._set("suspended",!0),this._set("surface",null),this._set("container",null)}get focused(){const e=document.activeElement===this.surface;return document.hasFocus()&&e}get popup(){return this._get("popup")||new m({view:this})}set popup(e){const t=this._get("popup");t&&t!==e&&t.destroy(),this._set("popup",e)}get size(){return[this.width,this.height]}blur(){this.surface&&this.surface.blur()}focus(){this.surface&&this.surface.focus()}pageToContainer(e,t,s){const i=this.position;return e-=i[0],t-=i[1],s?(s[0]=e,s[1]=t):s=[e,t],s}containerToPage(e,t,s){const i=this.position;return e+=i[0],t+=i[1],s?(s[0]=e,s[1]=t):s=[e,t],s}_handleUIChange(e,t){t&&(this.handles.remove("ui"),t.destroy()),e&&this._wireUI(e),this._set("ui",e)}_wireUI(e){this.handles.remove("ui"),e&&(e.view=this,this.handles.add([d(this,"root",(t=>{e.container=t?function(e){const t=document.createElement("div");return e.appendChild(t),t}(t):null})),d(this,"popup",((t,s)=>{const i="popup";s&&e.remove(s,i),t&&(t.view=e.view,e.add(t,{key:i,position:"manual"}))}))],"ui"))}_stopMeasuring(){this.handles.remove("measuring"),this._get("resizing")&&this._set("resizing",!1)}_startMeasuring(){const e=this._freqInfo;e.freq=16,e.time=750,this.handles.add([(()=>{const t=()=>{e.freq=16,e.time=750};return window.addEventListener("resize",t),{remove(){window.removeEventListener("resize",t)}}})(),r({prepare:e=>{const t=this._measure(),s=this._freqInfo;if(s.time+=e.deltaTime,t&&(s.freq=16,this._get("resizing")||this._set("resizing",!0)),s.time<s.freq)return;s.time=0;const i=this._position();s.freq=i||t?16:Math.min(750,2*s.freq),!t&&s.freq>=512&&this._get("resizing")&&this._set("resizing",!1)}})],"measuring"),this._measure(),this._position()}_measure(){const e=this.container,t=e?e.clientWidth:0,s=e?e.clientHeight:0;if(0===t||0===s)return this.suspended||this._set("suspended",!0),!1;const i=this.width,o=this.height;return t===i&&s===o?(this.suspended&&this._set("suspended",!1),!1):(this._set("width",t),this._set("height",s),this.suspended&&this._set("suspended",!1),this.emit("resize",{oldWidth:i,oldHeight:o,width:t,height:s}),!0)}_position(){const e=this.container,t=this.position,s=y(e);return(!t||s[0]!==t[0]||s[1]!==t[1])&&(this._set("position",[s[0],s[1]]),!0)}forceDOMReadyCycle(){}};return e([i({value:null,cast:e=>l(e)})],s.prototype,"container",null),e([i({readOnly:!0,dependsOn:["surface"]})],s.prototype,"focused",null),e([i({readOnly:!0})],s.prototype,"height",void 0),e([i({type:m})],s.prototype,"popup",null),e([i({type:v})],s.prototype,"overlay",void 0),e([i({readOnly:!0})],s.prototype,"position",void 0),e([i({readOnly:!0})],s.prototype,"resizing",void 0),e([i({readOnly:!0})],s.prototype,"root",void 0),e([i({value:null,dependsOn:["width","height"],readOnly:!0})],s.prototype,"size",null),e([i({readOnly:!0})],s.prototype,"surface",void 0),e([i({readOnly:!0})],s.prototype,"suspended",void 0),e([i()],s.prototype,"ui",void 0),e([i({readOnly:!0})],s.prototype,"userContent",void 0),e([i({readOnly:!0})],s.prototype,"width",void 0),e([i()],s.prototype,"widthBreakpoint",void 0),s=e([n("esri.views.DOMContainer")],s),s};function b(e){return e&&"focus"in e}function C(e,t){const s=e.view;s&&(t&&s.ready&&s.activeTool!==e?(s.activeTool=e,b(s)&&s.focus()):t||s.activeTool!==e||(s.activeTool=null))}function O(e,s,i){const o=e.activeTool;s!==o&&(t(o)&&o.deactivate&&o.deactivate(),i(s),t(s)&&s.activate&&s.activate())}function j(){const e=new a;return e.on("after-add",(e=>{const t=e.item;t.view&&t.view.ready&&t.attach()})),e.on("after-remove",(e=>{const t=e.item;C(t,!1),t.destroyed||t.detach()})),e}function k(e){return!1!==e.visible&&!1!==e.editable&&(null==e.hasEditableFlag||e.hasEditableFlag(1))}function T(e){return s(e)?{}:"function"==typeof e?e():e}export{w as D,k as a,C as b,T as e,b as i,j as n,O as s};
