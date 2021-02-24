/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../chunks/object.js";import"../chunks/deprecate.js";import{clone as t}from"../core/lang.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/compilerUtils.js";import"../chunks/ensureType.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../core/Collection.js";import"../chunks/collectionUtils.js";import{a as e}from"../chunks/JSONSupport.js";import"../chunks/Promise.js";import"../chunks/Loadable.js";import"../core/urlUtils.js";import{aliasOf as i}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import{e as p}from"../chunks/enumeration.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"../chunks/locale.js";import"../chunks/number.js";import"../intl.js";import"../kernel.js";import"../request.js";import"../chunks/assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../chunks/mathUtils2.js";import"../chunks/colorUtils.js";import l from"../Color.js";import"../chunks/zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/domains.js";import"../chunks/arcadeOnDemand.js";import{collectArcadeFieldNames as n}from"../layers/support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"../chunks/date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"../chunks/Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"../chunks/screenUtils.js";import"../chunks/opacityUtils.js";import"../chunks/materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/utils.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import m from"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"../chunks/Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../chunks/urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import a from"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols/support/jsonUtils.js";import"../chunks/uid.js";import"../Graphic.js";import"../chunks/LegendOptions.js";import"./support/AuthoringInfo.js";import"./support/AuthoringInfoVisualVariable.js";import"../tasks/support/ColorRamp.js";import"../tasks/support/AlgorithmicColorRamp.js";import"../tasks/support/MultipartColorRamp.js";import"../chunks/colorRamps.js";import u from"./Renderer.js";import"./visualVariables/VisualVariable.js";import"./visualVariables/support/ColorStop.js";import"./visualVariables/ColorVariable.js";import"./visualVariables/support/OpacityStop.js";import"./visualVariables/OpacityVariable.js";import"./visualVariables/RotationVariable.js";import"./visualVariables/support/SizeStop.js";import"./visualVariables/SizeVariable.js";import"../chunks/sizeVariableUtils.js";import"../chunks/unitUtils.js";import"../chunks/lengthUtils.js";import"../chunks/visualVariableUtils.js";import{V as j}from"../chunks/VisualVariablesMixin.js";import c from"./support/AttributeColorInfo.js";var y;let d=y=class extends e{constructor(){super(...arguments),this.unit=null}clone(){return new y({unit:this.unit})}};o([s({type:String,json:{write:!0}})],d.prototype,"unit",void 0),d=y=o([r("esri.renderers.support.DotDensityLegendOptions")],d);var b,h=d;let S=b=class extends(j(u)){constructor(o){super(o),this.attributes=null,this.backgroundColor=new l([0,0,0,0]),this.blendDots=!0,this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new m,this.dotValue=null,this.referenceDotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(o){if(null==this.referenceScale)return this.dotValue;const t=o/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new a({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){return this.attributes&&this.attributes.reduce(((o,t)=>o+t.getAttributeHash()),"")}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new b({attributes:t(this.attributes),backgroundColor:t(this.backgroundColor),dotBlendingEnabled:t(this.dotBlendingEnabled),dotShape:t(this.dotShape),dotSize:t(this.dotSize),dotValue:t(this.dotValue),legendOptions:t(this.legendOptions),outline:t(this.outline),referenceScale:t(this.referenceScale),visualVariables:t(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){return`${this.attributes.map((o=>o.field||o.valueExpression||""))}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(o,t){await this.collectVVRequiredFields(o,t);for(const s of this.attributes)s.valueExpression&&await n(o,t,s.valueExpression),s.field&&o.add(s.field)}};o([s({type:[c],json:{write:!0}})],S.prototype,"attributes",void 0),o([s({type:l,json:{write:!0}})],S.prototype,"backgroundColor",void 0),o([s({type:Boolean}),i("dotBlendingEnabled")],S.prototype,"blendDots",void 0),o([s({type:Boolean,json:{write:!0}})],S.prototype,"dotBlendingEnabled",void 0),o([s({type:String,json:{write:!1}})],S.prototype,"dotShape",void 0),o([s({type:Number,json:{write:!1}})],S.prototype,"dotSize",void 0),o([s({type:h,json:{write:!0}})],S.prototype,"legendOptions",void 0),o([s({type:m,json:{default:null,write:!0}})],S.prototype,"outline",void 0),o([s({type:Number,json:{write:!0}})],S.prototype,"dotValue",void 0),o([s({type:Number}),i("dotValue")],S.prototype,"referenceDotValue",void 0),o([s({type:Number,json:{write:!0}})],S.prototype,"referenceScale",void 0),o([s({type:Number,json:{write:!0}})],S.prototype,"seed",void 0),o([p({dotDensity:"dot-density"})],S.prototype,"type",void 0),S=b=o([r("esri.renderers.DotDensityRenderer")],S);var k=S;export default k;