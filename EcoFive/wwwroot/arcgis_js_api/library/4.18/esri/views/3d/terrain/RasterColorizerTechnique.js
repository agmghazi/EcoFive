// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration ../webgl-engine/lib/DefaultVertexAttributeLocations ../../webgl/Program ../../webgl/renderState ../../webgl/rasterUtils ../../../chunks/RasterColorizer.glsl".split(" "),function(t,m,n,p,q,e,h,k,u,v,l,f,w){h=function(d){function b(){return d.apply(this,
arguments)||this}n._inheritsLoose(b,d);var c=b.prototype;c.initializeProgram=function(g){var a=b.shader.get();const r=this.configuration;a=a.build({output:r.colorizerType,applyColormap:r.applyColormap});this._context=g.rctx;return new v(g.rctx,a.generateSource("vertex"),a.generateSource("fragment"),u.Default3D)};c.initializePipeline=function(){const g=2===this.configuration.mode?l.simpleBlendingParams(1,771):1===this.configuration.mode?l.simpleBlendingParams(0,770):null;return l.makePipelineState({blending:g,
colorWrite:l.defaultColorWriteParams})};c.bindPass=function(g,a){f.setUniforms(this.program,this.uniformLocationInfos,a.basic);f.setUniforms(this.program,this.uniformLocationInfos,a.common);q.isSome(a.colormap)&&f.setUniforms(this.program,this.uniformLocationInfos,a.colormap);0===this.configuration.colorizerType&&q.isSome(a.stretch)?f.setUniforms(this.program,this.uniformLocationInfos,a.stretch):2===this.configuration.colorizerType&&q.isSome(a.hillshade)&&f.setUniforms(this.program,this.uniformLocationInfos,
a.hillshade)};n._createClass(b,[{key:"uniformLocationInfos",get:function(){this._uniformLocationInfos||(this._uniformLocationInfos=f.getUniformLocationInfos(this._context,this.program));return this._uniformLocationInfos}}]);return b}(h.ShaderTechnique);h.shader=new e.ReloadableShaderModule(w.RasterColorizerShader,()=>new Promise(function(d,b){t(["../webgl-engine/core/shaderLibrary/raster/RasterColorizer.glsl"],d,b)}));e=function(d){function b(){var c=d.apply(this,arguments)||this;c.mode=2;c.colorizerType=
0;c.applyColormap=!0;return c}n._inheritsLoose(b,d);return b}(k.ShaderTechniqueConfiguration);p.__decorate([k.parameter({count:3})],e.prototype,"mode",void 0);p.__decorate([k.parameter({count:3})],e.prototype,"colorizerType",void 0);p.__decorate([k.parameter()],e.prototype,"applyColormap",void 0);m.RasterColorizerTechnique=h;m.RasterColorizerTechniqueConfiguration=e;Object.defineProperty(m,"__esModule",{value:!0})});