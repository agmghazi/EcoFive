/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import"./tslib.es6.js";import"./ArrayPool.js";import"./object.js";import"./deprecate.js";import{clone as t}from"../core/lang.js";import"../config.js";import{i as e}from"./Logger.js";import"./string.js";import"./metadata.js";import"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import{create as o,reject as s}from"../core/promiseUtils.js";import"./Message.js";import r from"../core/Error.js";import"./ensureType.js";import"../core/accessorSupport/decorators/subclass.js";import"./Evented.js";import a from"../core/Collection.js";import"./collectionUtils.js";import"./JSONSupport.js";import"./Promise.js";import"./Loadable.js";import{dataComponents as i}from"../core/urlUtils.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"./persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"./locale.js";import"./number.js";import"../intl.js";import"../kernel.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"./mathUtils2.js";import"./colorUtils.js";import"../Color.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./domains.js";import"./arcadeOnDemand.js";import"../layers/support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"./date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"./chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"./Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"./screenUtils.js";import"./opacityUtils.js";import"./materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./utils.js";import"./Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"./Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"./Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"./urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols/support/jsonUtils.js";import"./uid.js";import p from"../Graphic.js";import{normalizeCentralMeridian as l}from"../geometry/support/normalizeUtils.js";function n(t){var e,o;return!0===(null==t||null==(e=t.capabilities)||null==(o=e.operations)?void 0:o.supportsEditing)&&t&&(!("editingEnabled"in t)||t.editingEnabled)}async function m(e,i,p,n){let m,c;const j={edits:p,result:o(((t,e)=>{m=t,c=e}))};e.emit("apply-edits",j);try{const{results:o,edits:c}=await async function(t,e,o,i){if(await t.load(),!function(t){return t&&null!=t.applyEdits}(e))return s(new r(`${t.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:t}));if(!t.editingEnabled)throw new r(`${t.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:t});const p=await function(t,e,o){const s=e&&(e.addFeatures||e.updateFeatures||e.deleteFeatures),i=e&&(e.addAttachments||e.updateAttachments||e.deleteAttachments);if(!e||!s&&!i)throw new r(`${t.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.capabilities.data.isVersioned&&o&&o.gdbVersion)throw new r(`${t.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!t.capabilities.editing.supportsRollbackOnFailure&&o&&o.rollbackOnFailureEnabled)throw new r(`${t.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!t.capabilities.editing.supportsGlobalId&&o&&o.globalIdUsed)throw new r(`${t.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.capabilities.editing.supportsGlobalId&&i)throw new r(`${t.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!o||!o.globalIdUsed)&&i)throw new r(`${t.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const p={...e};if(p.addFeatures=e&&a.isCollection(e.addFeatures)?e.addFeatures.toArray():p.addFeatures||[],p.updateFeatures=e&&a.isCollection(e.updateFeatures)?e.updateFeatures.toArray():p.updateFeatures||[],p.deleteFeatures=e&&a.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():p.deleteFeatures||[],p.addFeatures.length&&!t.capabilities.operations.supportsAdd)throw new r(`${t.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(p.updateFeatures.length&&!t.capabilities.operations.supportsUpdate)throw new r(`${t.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(p.deleteFeatures.length&&!t.capabilities.operations.supportsDelete)throw new r(`${t.type}-layer:unsupported-operation`,"Layer does not support deleting features.");p.addAttachments=p.addAttachments||[],p.updateAttachments=p.updateAttachments||[],p.deleteAttachments=p.deleteAttachments||[],p.addFeatures=p.addFeatures.map(y),p.updateFeatures=p.updateFeatures.map(y);const n=o&&o.globalIdUsed;return p.addFeatures.forEach((e=>d(e,t,n))),p.updateFeatures.forEach((e=>d(e,t,n))),p.deleteFeatures.forEach((e=>d(e,t,n))),p.addAttachments.forEach((e=>u(e,t))),p.updateAttachments.forEach((e=>u(e,t))),async function(t){const e=t.addFeatures,o=t.updateFeatures,s=e.concat(o).map((t=>t.geometry)),r=await l(s),a=e.length,i=o.length;return r.slice(0,a).forEach(((e,o)=>{t.addFeatures[o].geometry=e})),r.slice(a,a+i).forEach(((e,o)=>{t.updateFeatures[o].geometry=e})),t}(p)}(t,o,i);if(!(p.addFeatures.length||p.updateFeatures.length||p.deleteFeatures.length||p.addAttachments.length||p.updateAttachments.length||p.deleteAttachments.length))return{edits:p,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}};return{edits:p,results:await e.applyEdits(p,i)}}(e,i,p,n),j=e=>e.filter((t=>!t.error)).map(t),b={edits:c,addedFeatures:j(o.addFeatureResults),updatedFeatures:j(o.updateFeatureResults),deletedFeatures:j(o.deleteFeatureResults),addedAttachments:j(o.addAttachmentResults),updatedAttachments:j(o.updateAttachmentResults),deletedAttachments:j(o.deleteAttachmentResults)};return(b.addedFeatures.length||b.updatedFeatures.length||b.deletedFeatures.length||b.addedAttachments.length||b.updatedAttachments.length||b.deletedAttachments.length)&&e.emit("edits",b),m(b),o}catch(t){throw c(t),t}}function d(t,o,s){if(s){if("attributes"in t&&!t.attributes[o.globalIdField])throw new r(`${o.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in t)&&!t.globalId)throw new r(`${o.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in t&&e(t.geometry)){if(t.geometry.hasZ&&!1===o.capabilities.data.supportsZ)throw new r(`${o.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(t.geometry.hasM&&!1===o.capabilities.data.supportsM)throw new r(`${o.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function u(t,e){const{feature:o,attachment:s}=t;if(!o||"attributes"in o&&!o.attributes[e.globalIdField])throw new r(`${e.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in o)&&!o.globalId)throw new r(`${e.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!s.globalId)throw new r(`${e.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!s.data&&!s.uploadId)throw new r(`${e.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(s.data instanceof File&&!!s.data.name)&&!s.name)throw new r(`${e.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!e.capabilities.editing.supportsUploadWithItemId&&s.uploadId)throw new r(`${e.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof s.data){const t=i(s.data);if(t&&!t.isBase64)throw new r(`${e.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function y(t){const e=new p;return t.attributes||(t.attributes={}),e.geometry=t.geometry,e.attributes=t.attributes,e}export{m as applyEdits,n as isEditableLayer};