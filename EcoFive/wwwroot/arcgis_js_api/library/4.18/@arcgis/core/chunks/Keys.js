/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class e{constructor(e,t,s,i){this.view=e,this.native=t,this.vertexIndex=s,this.vertices=i,this.defaultPrevented=!1,this.type="vertex-add"}preventDefault(){this.defaultPrevented=!0}}class t{constructor(e,t,s,i){this.view=e,this.native=t,this.vertexIndex=s,this.vertices=i,this.defaultPrevented=!1,this.type="vertex-update"}preventDefault(){this.defaultPrevented=!0}}class s{constructor(e,t,s,i){this.view=e,this.native=t,this.vertexIndex=s,this.vertices=i,this.defaultPrevented=!1,this.type="vertex-remove"}preventDefault(){this.defaultPrevented=!0}}class i{constructor(e,t,s,i,r=null){this.view=e,this.native=t,this.vertexIndex=s,this.vertices=i,this.mapPoint=r,this.coordinates=null,this.defaultPrevented=!1,this.type="cursor-update",this.coordinates=1===i.length?i[0]:null}preventDefault(){this.defaultPrevented=!0}}class r{constructor(e,t){this.native=e,this.vertices=t,this.coordinates=null,this.defaultPrevented=!1,this.type="draw-complete",this.coordinates=1===t.length?t[0]:null}preventDefault(){this.defaultPrevented=!0}}const n={drawCompleteKey:"c",redoKey:"r",undoKey:"z",vertexAddKey:"f",panKey:" "};export{i as C,r as D,n as K,e as V,s as a,t as b};