// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/maybe ../../core/Logger ../../core/accessorSupport/ensureType ../../core/handleUtils ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/events ../../core/unitFormatUtils ../support/widgetUtils ../support/decorators/messageBundle ../support/decorators/renderable ../../chunks/index ../Widget ../support/Popover ./css ./support/constants".split(" "),
function(h,w,m,A,c,H,I,B,q,J,C,K,L,M,x,u,N,y,r,g,D,E,d,k){const F=(v,n)=>Number(n.available)-Number(v.available);h.Statistics=function(v){function n(a,b){a=v.call(this,a,b)||this;a._messagesUnits=null;a._resizeObserver=null;a._maxNumStatistics=null;a._clickOutsideHandle=null;a._popover=null;return a}w._inheritsLoose(n,v);var f=n.prototype;f.destroy=function(){c.isSome(this._resizeObserver)&&(this._resizeObserver.disconnect(),this._resizeObserver=null);this._destroyPopover()};f.render=function(){const a=
this._allStatistics,b=c.unwrapOr(this._maxNumStatistics,Infinity);return 0===a.length?g.jsx("div",{class:this.classes(d.STATISTICS_CSS.base)}):g.jsx("div",{class:d.STATISTICS_CSS.base,bind:this,afterCreate:this._onContainerAfterCreate,afterUpdate:this._onContainerResize},a.map((e,p)=>this._renderStatistic(e,{hidden:p>=b,inPopover:!1})),b<a.length&&g.jsx("button",{class:d.STATISTICS_CSS.popoverToggle,bind:this,onclick:this._togglePopover,afterCreate:this._initializePopover,afterRemoved:this._destroyPopover}))};
f._renderDistanceValue=function(a){const b=this._messagesUnits,e=this.viewModel.effectiveUnits.distance;return g.jsx("div",{class:d.STATISTICS_CSS.statisticValue},c.isSome(a)?u.formatDecimal(b,a,e,k.FORMAT_PRECISION):k.NOT_AVAILABLE)};f._renderElevationValue=function(a){const b=this._messagesUnits,e=this.viewModel.effectiveUnits.elevation;return g.jsx("div",{class:d.STATISTICS_CSS.statisticValue},c.isSome(a)?u.formatDecimal(b,a,e,k.FORMAT_PRECISION):k.NOT_AVAILABLE)};f._renderSlopeValue=function(a,
b){return g.jsx("div",{class:d.STATISTICS_CSS.statisticValue},g.jsx("div",{key:"slope-up",class:this.classes(d.STATISTICS_CSS.slopeValue,{[d.STATISTICS_CSS.slopeValueNotAvailable]:c.isNone(a)})},g.jsx("div",{class:d.STATISTICS_CSS.slopeUpIcon}),c.isSome(a)?u.formatSlope(a,"degrees",k.FORMAT_PRECISION):k.NOT_AVAILABLE),g.jsx("div",{key:"slope-down",class:this.classes(d.STATISTICS_CSS.slopeValue,{[d.STATISTICS_CSS.slopeValueNotAvailable]:c.isNone(b)})},g.jsx("div",{class:d.STATISTICS_CSS.slopeDownIcon}),
c.isSome(b)?u.formatSlope(b,"degrees",k.FORMAT_PRECISION):k.NOT_AVAILABLE))};f._renderStatistic=function({label:a,available:b,renderValue:e},{hidden:p,inPopover:l}){return g.jsx("div",{key:a,class:this.classes(d.STATISTICS_CSS.statistic,{[d.STATISTICS_CSS.statistic]:!l,[d.STATISTICS_CSS.statisticHidden]:p,[d.STATISTICS_CSS.statisticNotAvailable]:!b,[d.STATISTICS_CSS.popoverStatistic]:l})},g.jsx("h5",{class:d.STATISTICS_CSS.statisticLabel},a),e())};f._initializePopover=function(a){this._destroyPopover();
this._popover=new E({owner:this,placement:"bottom-end",anchorElement:a,renderContentFunction:()=>this._renderPopoverContent()})};f._destroyPopover=function(){c.destroyMaybe(this._popover);c.applySome(this._clickOutsideHandle,a=>a.remove())};f._renderPopoverContent=function(){var a=this._allStatistics;a=c.isSome(this._maxNumStatistics)?a.slice(this._maxNumStatistics,a.length):[];return g.jsx("div",{class:d.STATISTICS_CSS.popoverContent,bind:this,afterCreate:this._onPopoverContentAfterCreate},a.map(b=>
this._renderStatistic(b,{hidden:!1,inPopover:!0})))};f._togglePopover=function(){c.isSome(this._popover)&&this._popover.open?this._closePopover():this._openPopover()};f._openPopover=function(){c.applySome(this._popover,a=>a.open=!0)};f._closePopover=function(){c.applySome(this._clickOutsideHandle,a=>a.remove());c.applySome(this._popover,a=>a.open=!1)};f._onPopoverContentAfterCreate=function(a){c.applySome(this._clickOutsideHandle,b=>b.remove());this._clickOutsideHandle=B.handlesGroup([x.on(a,"click",
b=>b.stopPropagation()),x.on(window,"click",()=>this._closePopover())])};f._onContainerAfterCreate=function(a){this._resizeObserver=new ResizeObserver(()=>this._onContainerResize(a));this._resizeObserver.observe(a)};f._onContainerResize=function(a){const {width:b}=a.getBoundingClientRect();let e=0;a=Array.from(a.querySelectorAll(`.${d.STATISTICS_CSS.statistic}`));const p=a.length;for(let l=0;l<p;++l){const t=a[l];if(!(t instanceof HTMLElement))continue;const G=t.classList.contains(d.STATISTICS_CSS.statisticHidden);
t.classList.remove(d.STATISTICS_CSS.statisticHidden);const z=t.offsetWidth+15;e+=z;t.classList.toggle(d.STATISTICS_CSS.statisticHidden,G);if(e>b){e-=z;e+=49;this._maxNumStatistics=e>b?Math.max(0,l-1):l;return}}this._maxNumStatistics=p};w._createClass(n,[{key:"_allStatistics",get:function(){const a=this.viewModel.statistics;if(c.isNone(a))return[];const b=this._messages.statistics,e=[{label:b.maxDistance,available:c.isSome(a.maxDistance),renderValue:()=>this._renderDistanceValue(a.maxDistance)},{label:b.minElevation,
available:c.isSome(a.minElevation),renderValue:()=>this._renderElevationValue(a.minElevation)},{label:b.maxElevation,available:c.isSome(a.maxElevation),renderValue:()=>this._renderElevationValue(a.maxElevation)},{label:b.avgElevation,available:c.isSome(a.avgElevation),renderValue:()=>this._renderElevationValue(a.avgElevation)},{label:b.gain,available:c.isSome(a.elevationGain),renderValue:()=>this._renderElevationValue(a.elevationGain)},{label:b.loss,available:c.isSome(a.elevationLoss),renderValue:()=>
this._renderElevationValue(a.elevationLoss)}];A("elevation-profile-slope-stats")&&e.push({label:b.maxSlope,available:c.isSome(a.maxPositiveSlope)||c.isSome(a.maxNegativeSlope),renderValue:()=>this._renderSlopeValue(a.maxPositiveSlope,a.maxNegativeSlope)},{label:b.avgSlope,available:c.isSome(a.avgPositiveSlope)||c.isSome(a.avgNegativeSlope),renderValue:()=>this._renderSlopeValue(a.avgPositiveSlope,a.avgNegativeSlope)});return e.sort(F)}}]);return n}(D);m.__decorate([q.property(),r.renderable(["unit",
"unitOptions","statistics","effectiveUnits"])],h.Statistics.prototype,"viewModel",void 0);m.__decorate([q.property(),r.renderable(),y.messageBundle("esri/widgets/ElevationProfile/t9n/ElevationProfile")],h.Statistics.prototype,"_messages",void 0);m.__decorate([q.property(),r.renderable(),y.messageBundle("esri/core/t9n/Units")],h.Statistics.prototype,"_messagesUnits",void 0);m.__decorate([q.property(),r.renderable()],h.Statistics.prototype,"_maxNumStatistics",void 0);m.__decorate([q.property({readOnly:!0}),
r.renderable()],h.Statistics.prototype,"_allStatistics",null);h.Statistics=m.__decorate([C.subclass("esri.widgets.ElevationProfile.Statistics")],h.Statistics);Object.defineProperty(h,"__esModule",{value:!0})});