/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../chunks/object.js";import"../../chunks/deprecate.js";import"../../core/lang.js";import"../../config.js";import{L as s}from"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import{ignoreAbortErrors as o}from"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/compilerUtils.js";import"../../chunks/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import"../../core/Collection.js";import"../../chunks/collectionUtils.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../chunks/Loadable.js";import"../../chunks/asyncUtils.js";import"../../chunks/loadAll.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import i from"../../geometry/SpatialReference.js";import{o as n}from"../../chunks/locale.js";import"../../chunks/number.js";import{fetchMessageBundle as p}from"../../intl.js";import"../../kernel.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import a from"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalUser.js";import"../../portal/Portal.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../portal/PortalItem.js";import"../../chunks/writeUtils.js";import"../../chunks/mathUtils2.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/vec3.js";import"../../chunks/mathUtils.js";import"../../chunks/colorUtils.js";import"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import m from"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import"../../layers/support/fieldUtils.js";import"../../popup/content/Content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/CustomContent.js";import"../../chunks/date.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/FieldInfo.js";import"../../popup/content/FieldsContent.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/MediaContent.js";import"../../popup/content/TextContent.js";import"../../popup/content.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/RelatedRecordsInfo.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../PopupTemplate.js";import"../../symbols/Symbol.js";import l from"../../symbols/CIMSymbol.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/screenUtils.js";import"../../chunks/opacityUtils.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/Edges3D.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/utils.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/FillSymbol.js";import"../../symbols/patterns/StylePattern3D.js";import"../../symbols/FillSymbol3DLayer.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import c from"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/Symbol3D.js";import"../../chunks/Thumbnail.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureFillSymbol.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import u from"../../symbols/SimpleMarkerSymbol.js";import h from"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/uid.js";import d from"../../Graphic.js";import j from"../../core/Handles.js";import"../../layers/Layer.js";import"../../chunks/TablesMixin.js";import{c as y,z as k}from"../../chunks/unitUtils.js";import"../../chunks/lengthUtils.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/timeUtils.js";import"../../TimeExtent.js";import"../../chunks/ReadOnlyMultiOriginJSONSupport.js";import"../../chunks/MultiOriginJSONSupport.js";import{init as g}from"../../core/watchUtils.js";import"../../chunks/fieldType.js";import"../../chunks/mat4.js";import"../../chunks/pe.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../geometry/support/GeographicTransformation.js";import{isSupported as f,isLoaded as v,load as b,project as w}from"../../geometry/projection.js";import"../../chunks/OperationalLayer.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/commonProperties2.js";import"../../core/HandleOwner.js";import"../../chunks/_commonjsHelpers.js";import{isSupported as _,geodesicLengths as S,geodesicDensify as D}from"../../geometry/support/geodesicUtils.js";import"../../geometry/Circle.js";import"../../chunks/geometryEngineBase.js";import"../../chunks/hydrated.js";import{geodesicLength as L,geodesicDensify as U,planarLength as M}from"../../geometry/geometryEngine.js";import"../../chunks/vec4f64.js";import"../../chunks/quatf64.js";import"../../chunks/mat3.js";import"../../chunks/BufferView.js";import"../../chunks/vec2.js";import"../../chunks/vec4.js";import"../../chunks/quat.js";import"../../chunks/domUtils.js";import"../../chunks/widgetUtils.js";import"../../chunks/projector.js";import"../../chunks/accessibleHandler.js";import"../../chunks/messageBundle.js";import"../../chunks/renderable.js";import"../../chunks/vmEvent.js";import"../../chunks/index.js";import"../support/widget.js";import"../Widget.js";import"../../chunks/zscale.js";import"../../chunks/queryZScale.js";import"../../layers/support/Field.js";import"../../tasks/support/FeatureSet.js";import"../../chunks/BlendLayer.js";import"../../chunks/PortalLayer.js";import"../../chunks/ScaleRangeLayer.js";import"../../chunks/defaultsJSON.js";import"../../chunks/defaults.js";import"../../chunks/DataLayerSource.js";import"../../tasks/support/AttachmentQuery.js";import"../../tasks/support/Query.js";import"../../tasks/support/StatisticDefinition.js";import"../../tasks/support/RelationshipQuery.js";import"../../chunks/GraphicsCollection.js";import C from"../../layers/GraphicsLayer.js";import O from"../../layers/GroupLayer.js";import"../../tasks/Task.js";import"../../chunks/OptimizedGeometry.js";import"../../chunks/featureConversionUtils.js";import"../../tasks/QueryTask.js";import"../../chunks/pbf.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/query.js";import"../../layers/support/AttachmentInfo.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/Queue.js";import"../../chunks/InputManager.js";import"../../chunks/interactiveToolUtils.js";import"../../chunks/throttle.js";import{f as P,c as I,d as A}from"../Attachments.js";import"../Attachments/AttachmentsViewModel.js";import"../Feature/FeatureViewModel.js";import"../Feature.js";import"../../chunks/AnchorElementViewModel.js";import"../Spinner/SpinnerViewModel.js";import"../Popup.js";import"../../chunks/layerViewUtils.js";import"../../chunks/actions.js";import"../../chunks/GoTo.js";import"../Popup/PopupViewModel.js";import"../../chunks/screenUtils2.js";import"../../chunks/quantizationUtils.js";import"../../chunks/mat2d.js";import"../../chunks/dehydratedFeatures.js";import"../../chunks/ElevationProvider.js";import"../../chunks/mat2df64.js";import"../../chunks/vec2f64.js";import"../../chunks/PointerClickHoldAndDrag.js";import"../../chunks/requestImageUtils.js";import"../../chunks/PiUtils.glsl.js";import"../../chunks/Program.js";import"../../chunks/isWebGL2Context.js";import"../../chunks/glUtil.js";import"../../chunks/InterleavedLayout.js";import"../../chunks/mat4f32.js";import"../../chunks/vec3f32.js";import"../../chunks/geometryUtils.js";import"../../chunks/ColorMaterial.js";import"../../chunks/Util.js";import"../../chunks/Geometry.js";import"../../chunks/VertexArrayObject.js";import"../../chunks/sdfPrimitives.js";import"../../chunks/Object3D.js";import"../../chunks/DefaultTextureUnits.js";import"../../chunks/GLMaterialTexture.js";import"../../chunks/VerticalOffset.glsl.js";import"../../chunks/elevationAlignmentUtils.js";import"../../chunks/RenderingContext.js";import"../../chunks/CameraSpace.glsl.js";import"../../chunks/Texture.js";import"../../chunks/vec4f32.js";import"../../views/draw/DrawAction.js";import"../../chunks/Keys.js";import"../../views/draw/MultipointDrawAction.js";import"../../chunks/DrawTool.js";import"../../chunks/elevationInfoUtils.js";import{I as T,c as x,s as R,d as E}from"../../chunks/InteractiveToolBase.js";import"../../chunks/RightAngleQuadVisualElement.js";import"../../chunks/LaserLineRenderer.js";import"../../views/draw/PointDrawAction.js";import"../../views/draw/PolygonDrawAction.js";import"../../views/draw/PolylineDrawAction.js";import"../../views/draw/SegmentDrawAction.js";import G from"../../views/draw/Draw.js";import"../../chunks/drapedUtils.js";import{G as V}from"../../chunks/GraphicManipulator.js";import{d as F}from"../../chunks/commonProperties3.js";import{I as B}from"../../chunks/InteractiveToolViewModel.js";let W=class extends T{constructor(){super(...arguments),this._drawActive=!1,this._handles=new j,this._polylineLayer=new C,this._manipulatorLayer=new C,this._groupLayer=new O({layers:[this._polylineLayer,this._manipulatorLayer],listMode:"hide",visible:!1}),this._vertices=[],this.deferCreation=!0,this.geodesicDistanceThreshold=1e5,this.measurement=null,this.measurementLabel=null}initialize(){p("esri/core/t9n/Units").then((t=>{this.messages=t})),this._handles.add(n((async()=>{this.messages=await p("esri/core/t9n/Units")})))}destroy(){this.detach(),this._draw&&(this._draw.destroy(),this._draw=null),this._handles&&(this._handles.destroy(),this._handles=null),this._polylineLayer&&(this._polylineLayer.destroy(),this._polylineLayer=null),this._manipulatorLayer&&(this._manipulatorLayer.destroy(),this._manipulatorLayer=null)}set editable(t){this._set("editable",t),t||this._draw.reset()}activate(){this._drawActive||0!==this._vertices.length||this._startSketch()}onAttach(){const t=this.view;this._draw=new G({view:t}),t.map.add(this._groupLayer),t.focus(),this._handles.add([g(this,["unit","geodesicDistanceThreshold","palette","messages"],(()=>{this._vertices.length>0&&this._updatePolylines()})),g(this,"view.spatialReference",(t=>{Q(t)&&!v()&&b()}))]),this.create()}onDetach(){const{map:t}=this.view;this._draw.view=null,this._draw.destroy(),this._draw=null,t.remove(this._groupLayer),this._handles.removeAll(),this._polylineLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null)}onShow(){this._groupLayer.visible=!0}onHide(){this._groupLayer.visible=!1}reset(){this._vertices=[],this._polylineLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._draw.reset(),this._drawActive=!1,this._updateSketch([])}onInputEvent(t){"pointer-move"===t.type&&this._updateCursor()}_startSketch(){this._drawActive=!0;const t=this._draw.create("polyline",{mode:"click"});t.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],(t=>this._updateSketch(t.vertices))),t.on("draw-complete",(()=>{this._stopSketch()}))}_stopSketch(){this.manipulators.forEach((t=>{t.manipulator.interactive=!0})),this._drawActive=!1,this.complete()}_updateSketch(t){if(Q(this.view.spatialReference)&&!v())return;if(t.length<2)return this._vertices=[],this.manipulators.removeAll(),void this._polylineLayer.removeAll();this.create();const{spatialReference:s}=this.view;for(;this._vertices.length>t.length;){const{manipulatorId:t}=this._vertices.pop();this.manipulators.remove(t)}for(let e=this._vertices.length;e<t.length;e++){const[o,r]=t[e],i=z(new a({x:o,y:r,spatialReference:s}),this.view,this._manipulatorLayer,this.palette),n=this.manipulators.add(i);x(i,((t,s)=>{s.next(R(this.view)).next(E(t.graphic)).next((()=>{const s=t.graphic.geometry;this._vertices[e].coord=[s.x,s.y],this._updatePolylines()}))})),this._vertices.push({manipulatorId:n,coord:[o,r]})}const e=this._vertices.length-1,o=this._vertices[e],[r,i]=t[e];if(o.coord[0]!==r||o.coord[1]!==i){o.coord=[r,i];const t=new a({x:r,y:i,spatialReference:s});this.manipulators.findById(o.manipulatorId).graphic.geometry=t}const n=this._drawActive?this._vertices[e].manipulatorId:null;this.manipulators.forEach((t=>{t.manipulator.interactive=null==n||t.id!==n})),this._updatePolylines()}_updateCursor(){this.cursor=this._drawActive?"crosshair":null}_updatePolylines(){const t=this._vertices.map((t=>t.coord)),{measurement:s,drawing:e,original:o}=function(t,s,e){const o=new m({paths:[t],spatialReference:s});let r,n;if(s.isGeographic)if(_(s))r=S([o],"meters")[0],n=D(o,1e5);else{const t=w(o,i.WGS84),e=D(t,1e5);r=S([t],"meters")[0],n=w(e,s)}else if(s.isWebMercator)r=L(o,"meters"),n=U(o,1e5,"meters");else{const t=M(o,"meters");if(t>=e){const t=w(o,i.WGS84),e=D(t,1e5);r=S([t],"meters")[0],n=w(e,s)}else r=t,n=o}return{measurement:{geometry:n,length:r},original:o,drawing:n}}(t,this.view.spatialReference,this.geodesicDistanceThreshold);this._set("measurement",s);const r=function(t,s,e){if(!s||!t)return null;switch(e){case"metric":return A(t,s.length,"meters");case"imperial":return I(t,s.length,"meters");default:return P(t,y(s.length,"meters",e),e)}}(this.messages,s,this.unit);this._set("measurementLabel",r);const{pathPrimaryColor:n,pathSecondaryColor:p,pathWidth:a}=this.palette;this._polylineLayer.removeAll(),this._polylineLayer.addMany([new d({geometry:e,symbol:new l({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[14,12],lineDashEnding:"FullGap",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",width:a-1.5,color:p},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",width:a,color:n}]}}})}),new d({geometry:o.extent.center,symbol:new h({color:[255,255,255,1],haloColor:[0,0,0,.5],haloSize:2,font:new c({size:14,family:"sans-serif"}),text:r})})])}};function z(t,s,e,o){const r=new u({style:"circle",color:o.handleColor,size:o.handleWidth,outline:{type:"simple-line",width:0}}),i=new u({style:"circle",color:o.handleColor,size:1.5*o.handleWidth,outline:{type:"simple-line",width:0}}),n=new d({geometry:t,symbol:r});return new V({view:s,layer:e,graphic:n,focusedSymbol:i})}function Q(t){if(!t)return!1;const{isGeographic:s,isWebMercator:e,isWGS84:o}=t;return s&&!o&&!_(t)||!s&&!e}t([e()],W.prototype,"cursor",void 0),t([e({value:!0})],W.prototype,"editable",null),t([e({type:Number})],W.prototype,"geodesicDistanceThreshold",void 0),t([e({readOnly:!0})],W.prototype,"measurement",void 0),t([e({readOnly:!0})],W.prototype,"measurementLabel",void 0),t([e()],W.prototype,"messages",void 0),t([e()],W.prototype,"palette",void 0),t([e()],W.prototype,"unit",void 0),t([e({constructOnly:!0})],W.prototype,"view",void 0),W=t([r("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DTool")],W);var q=W;const N={handleWidth:8,handleColor:[255,128,0,.5],pathWidth:5,pathPrimaryColor:[255,128,0,255],pathSecondaryColor:[255,255,255,255]},H=s.getLogger("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel");let J=class extends B{constructor(t){super(t),this.supportedViewType="2d",this._handles=new j,this.geodesicDistanceThreshold=1e5,this.measurement=null,this.measurementLabel=null,this.palette=N,this.tool=null}initialize(){this._handles.add([g(this,["unit","palette","geodesicDistanceThreshold"],((t,s,e)=>{this.tool&&(this.tool[e]=t)}))])}destroy(){this._handles&&(this._handles.destroy(),this._handles=null)}get state(){var t,s;return this.isDisabled?"disabled":null==(s=null==(t=this.view)?void 0:t.spatialReference)||Q(s)&&!f()?"disabled":this.tool&&this.measurement?this.tool.active?"measuring":"measured":"ready"}get unit(){return this._validateUnit(this.defaultUnit)}set unit(t){void 0!==t?this._override("unit",this._validateUnit(t)):this._clearOverride("unit")}get unitOptions(){return k}set unitOptions(t){void 0!==t?this._override("unitOptions",this._validateUnits(t)):this._clearOverride("unitOptions")}start(){return this.createTool()}clear(){this.removeTool()}newMeasurement(){o(this.start())}clearMeasurement(){this.clear()}createToolParams(){return{toolConstructor:q,constructorArguments:()=>({geodesicDistanceThreshold:this.geodesicDistanceThreshold,palette:this.palette,unit:this.unit})}}logUnsupportedError(){H.error("DistanceMeasurement2D widget is not implemented for SceneView")}logError(...t){H.error(...t)}_validateUnit(t){return-1!==this.unitOptions.indexOf(t)?t:-1!==this.unitOptions.indexOf(this.defaultUnit)?this.defaultUnit:this.unitOptions[0]}_validateUnits(t=[]){const s=t.filter((t=>-1!==k.indexOf(t)));return 0===s.length?k.slice():s}};t([e(F)],J.prototype,"defaultUnit",void 0),t([e({type:Number})],J.prototype,"geodesicDistanceThreshold",void 0),t([e({readOnly:!0,aliasOf:"tool.measurement"})],J.prototype,"measurement",void 0),t([e({readOnly:!0,aliasOf:"tool.measurementLabel"})],J.prototype,"measurementLabel",void 0),t([e()],J.prototype,"palette",void 0),t([e({dependsOn:["isDisabled","measurement","tool.active","view.spatialReference"],readOnly:!0})],J.prototype,"state",null),t([e({constructOnly:!0,readOnly:!0})],J.prototype,"tool",void 0),t([e({type:String,dependsOn:["unitOptions","defaultUnit"]})],J.prototype,"unit",null),t([e({type:[String]})],J.prototype,"unitOptions",null),J=t([r("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel")],J);var K=J;export default K;