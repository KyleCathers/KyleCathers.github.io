"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/CedarvilleCursive-Regular.ttf */ "./src/fonts/CedarvilleCursive-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/homeWallpaper.jpg */ "./src/images/homeWallpaper.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/menuWallpaper.jpg */ "./src/images/menuWallpaper.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/squiggleLarge.png */ "./src/images/squiggleLarge.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    margin: 0px;
    display: flex;
    flex-direction: column;
}

#container { 
    position: relative;
}

#header-logo img {
    width: 70px;
}

#header-logo {
    display: flex;
    align-items: center;
    gap: 15px;
}

#header {
    background-color: #232323;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    font-size: 2rem;
    font-family: 'Times New Roman', Times, serif;
    padding: 0px 20px 0px 20px;
    box-sizing: border-box;
    position: sticky;
    width: 100%;
}

#header-text {
    color: green;
    font-size: 3rem;
    font-family: 'MyCursive';
}

#header-left {
    width: 500px;
    gap: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

#header-logo:hover,
#header-home:hover,
#header-menu:hover,
#header-contact:hover {
    cursor: pointer;
}

@font-face {
    font-family: 'MyCursive';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
}


#footer {
    width: 100%;
    background-color: #001b01;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
}

#footer-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    gap: 10px;
}

#footer-img {
    height: 30px;
}

#left-side {
    width: 50%;
}

#home-content #left-side {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat left;
    background-size: cover;
}

#menu-content #left-side {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat left;
    background-size: cover;
}

#right-side {
    width: 50%;
    min-width: 650px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px 0px 20px 5px;
    overflow-y: auto;
}

#info-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
    gap: 5px;
}

#home-title,
#menu-title {
    color: #004101;
    font-size: 4rem;
    font-family: 'MyCursive';
}

#home-text {
    color: #004101;
    font-size: 1.5rem;
    font-style: italic;
    padding-bottom: 50px;
}

#home-caption {
    font-style: italic;
    color: #003101;
}

#home-content,
#contact-content,
#menu-content {
    height: calc(100vh - 150px);
    width: 100%;
    display: flex;
}

#home-pic {
    width: 500px;
}

#top-home-border,
#bottom-home-border {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) repeat;
    width: 100%;
    min-height: 65px;
}

#bottom-home-border {
    margin-top: 20px;
}

#contact-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px 5px 20px 5px;
}

#menu-title {
    display: flex;
    align-items: center;
    height: 90px;
}

#menu-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.burger {
    width: 100%;
    min-height: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    font-style: italic;
    padding-left: 20px;
    box-sizing: border-box;
}

.burger .title {
    font-size: 1.8rem;
}

.burger img {
    height: 90%;
}

.burger .right {
    display: flex;
    color: #004101;
    flex-direction: column;
    gap: 10px;
    padding-left: 20px;
    font-size: 1.2rem;
    white-space: nowrap;
}

#contact-box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
}

#contact-info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #004101;
    font-style: italic;
    font-size: 1.5rem;
}

#contact-title {
    font-size: 2.5rem;
}

#contact-title,
#contact-address-header,
#contact-number-header,
#contact-email-header,
#contact-hours-header {
    font-weight: bold;
}

#contact-address,
#contact-number,
#contact-email,
#contact-hours {
    padding-left: 20px;
    padding-bottom: 10px;
}

#main-content {
    height: calc(100vh - 150px);
}

@media (max-width: 950px) {
    #contact-box {
        flex-direction: column;
    }

    #google-map iframe {
        width: 75vw;
    }
}

@media (max-width: 680px) {

    #home-content #left-side {
        height: 20vh;
        width: 100%;
    }

    #menu-content #left-side {
        height: 40vh;
        width: 100%;
    }

    #home-content,
    #menu-content {
        flex-direction: column;
    }

    #right-side {
        min-width: 100%;
        padding-left: 0px;
        overflow-x: hidden;
    }

    #info-box {
        width: 90%;
    }

    #header {
        font-size: 1.3rem;
        padding: 0px 5px 0px 0px;
    }

    #header-left {
        gap: 0px;
    }

    #header-text {
        font-size: 2rem;
    }

    #home-pic {
        width: 90%;
    }

    #home-title {
        font-size: 3rem;
    }

    .burger {
        flex-direction: column;
        height: auto;
        padding-left: 0px;
    }

    .burger .img {
        height: 270px;
        padding-bottom: 10px;
    }

    #top-home-border,
    #bottom-home-border {
        margin-left: 5px;
        height: 65px;
    }

    .burger .right {
        margin-bottom: 20px;
    }

    #contact-info {
        width: 90%;
    }

    #contact-box {
        padding-top: 20px;
        gap: 20px;
    }

    #contact-content {
        overflow-y: auto;
        overflow-x: hidden;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0px;\n    display: flex;\n    flex-direction: column;\n}\n\n#container { \n    position: relative;\n}\n\n#header-logo img {\n    width: 70px;\n}\n\n#header-logo {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n}\n\n#header {\n    background-color: #232323;\n    height: 100px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #ffffff;\n    font-size: 2rem;\n    font-family: 'Times New Roman', Times, serif;\n    padding: 0px 20px 0px 20px;\n    box-sizing: border-box;\n    position: sticky;\n    width: 100%;\n}\n\n#header-text {\n    color: green;\n    font-size: 3rem;\n    font-family: 'MyCursive';\n}\n\n#header-left {\n    width: 500px;\n    gap: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n#header-logo:hover,\n#header-home:hover,\n#header-menu:hover,\n#header-contact:hover {\n    cursor: pointer;\n}\n\n@font-face {\n    font-family: 'MyCursive';\n    src: url('./fonts/CedarvilleCursive-Regular.ttf') format('truetype');\n}\n\n\n#footer {\n    width: 100%;\n    background-color: #001b01;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    bottom: 0;\n}\n\n#footer-link {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    color: white;\n    gap: 10px;\n}\n\n#footer-img {\n    height: 30px;\n}\n\n#left-side {\n    width: 50%;\n}\n\n#home-content #left-side {\n    background: url('./images/homeWallpaper.jpg') no-repeat left;\n    background-size: cover;\n}\n\n#menu-content #left-side {\n    background: url('./images/menuWallpaper.jpg') no-repeat left;\n    background-size: cover;\n}\n\n#right-side {\n    width: 50%;\n    min-width: 650px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-between;\n    box-sizing: border-box;\n    padding: 20px 0px 20px 5px;\n    overflow-y: auto;\n}\n\n#info-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 600px;\n    gap: 5px;\n}\n\n#home-title,\n#menu-title {\n    color: #004101;\n    font-size: 4rem;\n    font-family: 'MyCursive';\n}\n\n#home-text {\n    color: #004101;\n    font-size: 1.5rem;\n    font-style: italic;\n    padding-bottom: 50px;\n}\n\n#home-caption {\n    font-style: italic;\n    color: #003101;\n}\n\n#home-content,\n#contact-content,\n#menu-content {\n    height: calc(100vh - 150px);\n    width: 100%;\n    display: flex;\n}\n\n#home-pic {\n    width: 500px;\n}\n\n#top-home-border,\n#bottom-home-border {\n    background: url('./images/squiggleLarge.png') repeat;\n    width: 100%;\n    min-height: 65px;\n}\n\n#bottom-home-border {\n    margin-top: 20px;\n}\n\n#contact-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    box-sizing: border-box;\n    padding: 20px 5px 20px 5px;\n}\n\n#menu-title {\n    display: flex;\n    align-items: center;\n    height: 90px;\n}\n\n#menu-box {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n.burger {\n    width: 100%;\n    min-height: 300px;\n    height: 300px;\n    display: flex;\n    align-items: center;\n    font-style: italic;\n    padding-left: 20px;\n    box-sizing: border-box;\n}\n\n.burger .title {\n    font-size: 1.8rem;\n}\n\n.burger img {\n    height: 90%;\n}\n\n.burger .right {\n    display: flex;\n    color: #004101;\n    flex-direction: column;\n    gap: 10px;\n    padding-left: 20px;\n    font-size: 1.2rem;\n    white-space: nowrap;\n}\n\n#contact-box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 50px;\n}\n\n#contact-info {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    color: #004101;\n    font-style: italic;\n    font-size: 1.5rem;\n}\n\n#contact-title {\n    font-size: 2.5rem;\n}\n\n#contact-title,\n#contact-address-header,\n#contact-number-header,\n#contact-email-header,\n#contact-hours-header {\n    font-weight: bold;\n}\n\n#contact-address,\n#contact-number,\n#contact-email,\n#contact-hours {\n    padding-left: 20px;\n    padding-bottom: 10px;\n}\n\n#main-content {\n    height: calc(100vh - 150px);\n}\n\n@media (max-width: 950px) {\n    #contact-box {\n        flex-direction: column;\n    }\n\n    #google-map iframe {\n        width: 75vw;\n    }\n}\n\n@media (max-width: 680px) {\n\n    #home-content #left-side {\n        height: 20vh;\n        width: 100%;\n    }\n\n    #menu-content #left-side {\n        height: 40vh;\n        width: 100%;\n    }\n\n    #home-content,\n    #menu-content {\n        flex-direction: column;\n    }\n\n    #right-side {\n        min-width: 100%;\n        padding-left: 0px;\n        overflow-x: hidden;\n    }\n\n    #info-box {\n        width: 90%;\n    }\n\n    #header {\n        font-size: 1.3rem;\n        padding: 0px 5px 0px 0px;\n    }\n\n    #header-left {\n        gap: 0px;\n    }\n\n    #header-text {\n        font-size: 2rem;\n    }\n\n    #home-pic {\n        width: 90%;\n    }\n\n    #home-title {\n        font-size: 3rem;\n    }\n\n    .burger {\n        flex-direction: column;\n        height: auto;\n        padding-left: 0px;\n    }\n\n    .burger .img {\n        height: 270px;\n        padding-bottom: 10px;\n    }\n\n    #top-home-border,\n    #bottom-home-border {\n        margin-left: 5px;\n        height: 65px;\n    }\n\n    .burger .right {\n        margin-bottom: 20px;\n    }\n\n    #contact-info {\n        width: 90%;\n    }\n\n    #contact-box {\n        padding-top: 20px;\n        gap: 20px;\n    }\n\n    #contact-content {\n        overflow-y: auto;\n        overflow-x: hidden;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contact() {
    const contactContent = document.createElement('div');
    contactContent.setAttribute('id', 'contact-content');
    
    const topHomeBorder = document.createElement('div');
    topHomeBorder.setAttribute('id', 'top-home-border');

    const contactBox = document.createElement('div');
    contactBox.setAttribute('id', 'contact-box');

    const googleMap = document.createElement('div');
    googleMap.setAttribute('id', 'google-map');
    googleMap.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.812089658478!2d-123.07258732234014!3d49
                            .261007471389455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486714e93b7e871%3A0x3f9ee72d11fd9ee2!
                            2sKyle&#39;s%20Cafe!5e0!3m2!1sen!2sca!4v1694054836125!5m2!1sen!2sca" width="600" height="450" style="border:0;" 
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

    const contactInfo = document.createElement('div');
    contactInfo.setAttribute('id', 'contact-info');

    const contactTitle = document.createElement('div');
    contactTitle.setAttribute('id', 'contact-title');
    contactTitle.innerText = 'Contact';

    const contactAddressHeader = document.createElement('div');
    contactAddressHeader.setAttribute('id', 'contact-address-header');
    contactAddressHeader.innerText = 'Address:';

    const contactAddress = document.createElement('div');
    contactAddress.setAttribute('id', 'contact-address');
    contactAddress.innerText = '2627 Commercial Dr, Vancouver, BC V5N 4C3';

    const contactNumberHeader = document.createElement('div');
    contactNumberHeader.setAttribute('id', 'contact-number-header');
    contactNumberHeader.innerText = 'Phone:';

    const contactNumber = document.createElement('div');
    contactNumber.setAttribute('id', 'contact-number');
    contactNumber.innerText = '(250) 849-6519';

    const contactEmailHeader = document.createElement('div');
    contactEmailHeader.setAttribute('id', 'contact-email-header');
    contactEmailHeader.innerText = 'Email:';

    const contactEmail = document.createElement('div');
    contactEmail.setAttribute('id', 'contact-email');
    contactEmail.innerText = 'Info@KylesBurgers.ca';

    const contactHoursHeader = document.createElement('div');
    contactHoursHeader.setAttribute('id', 'contact-hours-header');
    contactHoursHeader.innerText = "Hours:";

    const contactHours = document.createElement('div');
    contactHours.setAttribute('id', 'contact-hours');
    contactHours.innerText = 'Monday: 11am - 10pm\n Tuesday: 11am - 10pm\n Wednesday: 11am - 10pm\n \
                                Thursday: 11am - 10pm\n \ Friday: 11am - 11pm\n Saturday: 11am - 11pm\n Sunday: 11am - 10pm';

    contactInfo.append(contactTitle);
    contactInfo.append(contactAddressHeader);
    contactInfo.append(contactAddress);
    contactInfo.append(contactNumberHeader);
    contactInfo.append(contactNumber);
    contactInfo.append(contactEmailHeader);
    contactInfo.append(contactEmail);
    contactInfo.append(contactHoursHeader);
    contactInfo.append(contactHours);



    contactBox.append(googleMap);
    contactBox.append(contactInfo);




    

    const bottomHomeBorder = document.createElement('div');
    bottomHomeBorder.setAttribute('id', 'bottom-home-border');

    contactContent.append(topHomeBorder);
    contactContent.append(contactBox);
    contactContent.append(bottomHomeBorder);

    return contactContent;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/container.js":
/*!**************************!*\
  !*** ./src/container.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pageInit: () => (/* binding */ pageInit)
/* harmony export */ });
/* harmony import */ var _images_hamburgerIcon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/hamburgerIcon.png */ "./src/images/hamburgerIcon.png");
/* harmony import */ var _images_githubIcon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/githubIcon.png */ "./src/images/githubIcon.png");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






function pageInit() {
    // main container
    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    // header sections
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const headerLogo = document.createElement('div');
    headerLogo.setAttribute('id', 'header-logo');

    const headerImg = new Image();
    headerImg.src = _images_hamburgerIcon_png__WEBPACK_IMPORTED_MODULE_0__;

    const headerText = document.createElement('div');
    headerText.setAttribute('id', 'header-text');
    headerText.innerHTML = "Kyle's";

    headerLogo.appendChild(headerImg);
    headerLogo.appendChild(headerText);
    headerLogo.addEventListener('click', () => {
        mainContent.innerHTML = "";
        mainContent.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
    });

    const headerHome = document.createElement('div');
    headerHome.setAttribute('id', 'header-home');
    headerHome.innerHTML = "Home";
    headerHome.addEventListener('click', () => {
        mainContent.innerHTML = "";
        mainContent.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
    });

    const headerMenu = document.createElement('div');
    headerMenu.setAttribute('id', 'header-menu');
    headerMenu.innerHTML = "Menu";
    headerMenu.addEventListener('click', () => {
        mainContent.innerHTML = "";
        mainContent.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
    });
    
    const headerContact = document.createElement('div');
    headerContact.setAttribute('id', 'header-contact');
    headerContact.innerHTML = "Contact";
    headerContact.addEventListener('click', () => {
        mainContent.innerHTML = "";
        mainContent.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
    });

    const headerLeft = document.createElement('div');
    headerLeft.setAttribute('id', 'header-left');
    headerLeft.appendChild(headerLogo);
    headerLeft.appendChild(headerHome);
    headerLeft.appendChild(headerMenu);

    header.appendChild(headerLeft);
    header.appendChild(headerContact);

    // body section
    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'main-content');
    mainContent.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

    // footer section
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');

    const footerLink = document.createElement('a');
    footerLink.setAttribute('id', 'footer-link');
    footerLink.setAttribute('href', 'https://github.com/KyleCathers');
    footerLink.setAttribute('target', '_blank');

    const footerText = document.createElement('div');
    footerText.setAttribute('id', 'footer-text');
    footerText.innerHTML = "Created by Kyle Cathers"

    const footerImg = new Image();
    footerImg.setAttribute('id', 'footer-img');
    footerImg.src = _images_githubIcon_png__WEBPACK_IMPORTED_MODULE_1__;

    footerLink.appendChild(footerText);
    footerLink.appendChild(footerImg);

    footer.appendChild(footerLink);

    container.appendChild(header);
    container.appendChild(mainContent);
    container.appendChild(footer);

    return container;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_homePic_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/homePic.jpg */ "./src/images/homePic.jpg");
/* harmony import */ var _images_squiggleLarge_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/squiggleLarge.png */ "./src/images/squiggleLarge.png");



function home() {
    const homeContent = document.createElement('div');
    homeContent.setAttribute('id', 'home-content');

    const leftSide = document.createElement('div');
    leftSide.setAttribute('id', 'left-side');
    
    const rightSide = document.createElement('div');
    rightSide.setAttribute('id', 'right-side');

    homeContent.appendChild(leftSide);
    homeContent.appendChild(rightSide);

    const infoBox = document.createElement('div');
    infoBox.setAttribute('id', 'info-box');

    const homeTitle = document.createElement('div');
    homeTitle.setAttribute('id', 'home-title');
    homeTitle.innerText = "Kyle's Burgers";

    const homeText = document.createElement('div');
    homeText.setAttribute('id', 'home-text');
    homeText.innerText = "The United States was the first country where two slices of bread and a \
                         ground beef patty were combined into a `hamburger sandwich` and sold. Shortly \
                         after its creation, the hamburger quickly included all of its currently \
                         typically characteristic trimmings, including onions, lettuce, and sliced pickles.\
                         After various controversies in the 20th century, including a nutritional \
                         controversy in the late 1990s, the burger is now readily identified with the \
                         United States, and a particular style of cuisine, namely fast food. Along with \
                         fried chicken and apple pie, the hamburger has become a culinary icon in the \
                         United States."
                         
    const homePic = new Image();
    homePic.setAttribute('id', 'home-pic');
    homePic.src = _images_homePic_jpg__WEBPACK_IMPORTED_MODULE_0__;

    const homeCaption = document.createElement('div');
    homeCaption.setAttribute('id', 'home-caption');
    homeCaption.innerText = "Kyle's Burgers on May 10 1905, Vancouver, BC";

    const topHomeBorder = document.createElement('div');
    topHomeBorder.setAttribute('id', 'top-home-border');

    const bottomHomeBorder = document.createElement('div');
    bottomHomeBorder.setAttribute('id', 'bottom-home-border');

    infoBox.append(homeTitle);
    infoBox.append(homeText);
    infoBox.append(homePic);
    infoBox.append(homeCaption);

    rightSide.append(topHomeBorder);
    rightSide.appendChild(infoBox);
    rightSide.append(bottomHomeBorder);

    return homeContent;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _container_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container.js */ "./src/container.js");




document.body.appendChild((0,_container_js__WEBPACK_IMPORTED_MODULE_1__.pageInit)());



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_breakfastBurger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/breakfastBurger.jpg */ "./src/images/breakfastBurger.jpg");
/* harmony import */ var _images_beefBurger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/beefBurger.jpg */ "./src/images/beefBurger.jpg");
/* harmony import */ var _images_bisonBurger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/bisonBurger.jpg */ "./src/images/bisonBurger.jpg");
/* harmony import */ var _images_chickenBurger_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/chickenBurger.jpg */ "./src/images/chickenBurger.jpg");
/* harmony import */ var _images_salmonBurger_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/salmonBurger.jpg */ "./src/images/salmonBurger.jpg");






function menu() {
    // list of menu items, all under burger html class
    const menuList = [
        {
            name: "Breakfast", // ❖
            price: 13,
            ingredients: ["Fried Egg", "White Cheddar Cheese", "Lettuce", "Bacon",
                            "Tomato", "Caramelized Onion", "Toasted Brioche Bun", "Bacon Aoili"],
            picture: _images_breakfastBurger_jpg__WEBPACK_IMPORTED_MODULE_0__
        },

        {
            name: "Beef", // ❖
            price: 18,
            ingredients: ["Double Beef Patty", "White Cheddar Cheese", "Lettuce", "Red Onion",
                            "Toasted Sesame Seed Bun", "Pickles", "Tomato", "Garlic Aoili"],
            picture: _images_beefBurger_jpg__WEBPACK_IMPORTED_MODULE_1__
        },

        {
            name: "Bison", // ❖
            price: 17,
            ingredients: ["Grass Fed Bison Patty", "Swiss Cheese", "Lettuce", "Tomato", "Caramelized Onions",
                            "Toasted Brioche Bun", "Jalepeno Aoili"],
            picture: _images_bisonBurger_jpg__WEBPACK_IMPORTED_MODULE_2__
        },

        {
            name: "Chicken", // ❖
            price: 15,
            ingredients: ["Double Fried Chicken", "Cheddar Cheese", "Lettuce", "Toasted Brioche Bun", "Sriracha Aoili"],
            picture: _images_chickenBurger_jpg__WEBPACK_IMPORTED_MODULE_3__
        },

        {
            name: "Salmon", // ❖
            price: 16,
            ingredients: ["Wild Salmon Patty", "Red Onion", "Lettuce", "Tomato", "Toasted Brioche Bun", "Remoulade Sauce"],
            picture: _images_salmonBurger_jpg__WEBPACK_IMPORTED_MODULE_4__
        },
    ];

    const menuContent = document.createElement('div');
    menuContent.setAttribute('id', 'menu-content');

    const leftSide = document.createElement('div');
    leftSide.setAttribute('id', 'left-side');
    
    const rightSide = document.createElement('div');
    rightSide.setAttribute('id', 'right-side');

    menuContent.appendChild(leftSide);
    menuContent.appendChild(rightSide);

    const topHomeBorder = document.createElement('div');
    topHomeBorder.setAttribute('id', 'top-home-border');

    const menuTitle = document.createElement('div');
    menuTitle.setAttribute('id', 'menu-title');
    menuTitle.innerText = "Menu";

    const menuBox = document.createElement('div');
    menuBox.setAttribute('id', 'menu-box');

    // add each burger item to menu DOM
    menuList.forEach((menuItem) => {
        menuBox.append(addBurger(menuItem));
    });

    const bottomHomeBorder = document.createElement('div');
    bottomHomeBorder.setAttribute('id', 'bottom-home-border');

    rightSide.append(topHomeBorder);
    rightSide.appendChild(menuTitle);
    rightSide.appendChild(menuBox);
    rightSide.append(bottomHomeBorder);
    
    return menuContent;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

// add burger object to the menu DOM
function addBurger(menuItem) {
    const item = document.createElement('div');
    item.setAttribute('id', `${menuItem.name}-burger`);
    item.setAttribute('class', 'burger');

    const itemImg = new Image();
    itemImg.setAttribute('class', 'img');
    itemImg.src = menuItem.picture;

    const itemRight = document.createElement('div');
    itemRight.setAttribute('class', 'right');

    const itemTitle = document.createElement('div');
    itemTitle.setAttribute('class', 'title');
    itemTitle.innerText = `${menuItem.name} Burger - $${menuItem.price}`;

    const itemText = document.createElement('div');
    itemText.setAttribute('class', 'text');
    
    let text = "";
    menuItem.ingredients.forEach((ingredient) => {
        text += `❖ ${ingredient}\n`;
    });

    itemText.innerText = text;

    itemRight.append(itemTitle);
    itemRight.append(itemText);

    item.append(itemImg);
    item.append(itemRight);

    return item;
}

/***/ }),

/***/ "./src/fonts/CedarvilleCursive-Regular.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/CedarvilleCursive-Regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a669593f51bb81ad0cc1.ttf";

/***/ }),

/***/ "./src/images/beefBurger.jpg":
/*!***********************************!*\
  !*** ./src/images/beefBurger.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9faf8a6a6b38db603f9f.jpg";

/***/ }),

/***/ "./src/images/bisonBurger.jpg":
/*!************************************!*\
  !*** ./src/images/bisonBurger.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8ac08fc534e5bfc8cce.jpg";

/***/ }),

/***/ "./src/images/breakfastBurger.jpg":
/*!****************************************!*\
  !*** ./src/images/breakfastBurger.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30700ab905d1e3182c06.jpg";

/***/ }),

/***/ "./src/images/chickenBurger.jpg":
/*!**************************************!*\
  !*** ./src/images/chickenBurger.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60a1ca732f472338dd85.jpg";

/***/ }),

/***/ "./src/images/githubIcon.png":
/*!***********************************!*\
  !*** ./src/images/githubIcon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca8149fe5986f7df7d1b.png";

/***/ }),

/***/ "./src/images/hamburgerIcon.png":
/*!**************************************!*\
  !*** ./src/images/hamburgerIcon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa56f8afd6bfffdd2432.png";

/***/ }),

/***/ "./src/images/homePic.jpg":
/*!********************************!*\
  !*** ./src/images/homePic.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b3c77949256808d2910.jpg";

/***/ }),

/***/ "./src/images/homeWallpaper.jpg":
/*!**************************************!*\
  !*** ./src/images/homeWallpaper.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cce4f44cb272b1d3003a.jpg";

/***/ }),

/***/ "./src/images/menuWallpaper.jpg":
/*!**************************************!*\
  !*** ./src/images/menuWallpaper.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca93ecd9c554cd8c344b.jpg";

/***/ }),

/***/ "./src/images/salmonBurger.jpg":
/*!*************************************!*\
  !*** ./src/images/salmonBurger.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e0f6eb7b14adedfa7bf.jpg";

/***/ }),

/***/ "./src/images/squiggleLarge.png":
/*!**************************************!*\
  !*** ./src/images/squiggleLarge.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c176f60a7685a8eb2298.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsdUpBQXdEO0FBQ3BHLDRDQUE0QyxpSUFBNkM7QUFDekYsNENBQTRDLGlJQUE2QztBQUN6Riw0Q0FBNEMsaUlBQTZDO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFFBQVEsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVB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Q0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFEQUFlO0FBQ3BDLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsZUFBZSxZQUFZLGVBQWU7O0FBRXZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsV0FBVztBQUNoQyxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ2VkYXJ2aWxsZUN1cnNpdmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9ob21lV2FsbHBhcGVyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL21lbnVXYWxscGFwZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvc3F1aWdnbGVMYXJnZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2NvbnRhaW5lciB7IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2hlYWRlci1sb2dvIGltZyB7XG4gICAgd2lkdGg6IDcwcHg7XG59XG5cbiNoZWFkZXItbG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbn1cblxuI2hlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI2hlYWRlci10ZXh0IHtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnTXlDdXJzaXZlJztcbn1cblxuI2hlYWRlci1sZWZ0IHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgZ2FwOiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuI2hlYWRlci1sb2dvOmhvdmVyLFxuI2hlYWRlci1ob21lOmhvdmVyLFxuI2hlYWRlci1tZW51OmhvdmVyLFxuI2hlYWRlci1jb250YWN0OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTXlDdXJzaXZlJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cblxuI2Zvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMWIwMTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG59XG5cbiNmb290ZXItbGluayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4jZm9vdGVyLWltZyB7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4jbGVmdC1zaWRlIHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4jaG9tZS1jb250ZW50ICNsZWZ0LXNpZGUge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBuby1yZXBlYXQgbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4jbWVudS1jb250ZW50ICNsZWZ0LXNpZGUge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBuby1yZXBlYXQgbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4jcmlnaHQtc2lkZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtaW4td2lkdGg6IDY1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggNXB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbiNpbmZvLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIGdhcDogNXB4O1xufVxuXG4jaG9tZS10aXRsZSxcbiNtZW51LXRpdGxlIHtcbiAgICBjb2xvcjogIzAwNDEwMTtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgZm9udC1mYW1pbHk6ICdNeUN1cnNpdmUnO1xufVxuXG4jaG9tZS10ZXh0IHtcbiAgICBjb2xvcjogIzAwNDEwMTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbiNob21lLWNhcHRpb24ge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogIzAwMzEwMTtcbn1cblxuI2hvbWUtY29udGVudCxcbiNjb250YWN0LWNvbnRlbnQsXG4jbWVudS1jb250ZW50IHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuI2hvbWUtcGljIHtcbiAgICB3aWR0aDogNTAwcHg7XG59XG5cbiN0b3AtaG9tZS1ib3JkZXIsXG4jYm90dG9tLWhvbWUtYm9yZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgcmVwZWF0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDY1cHg7XG59XG5cbiNib3R0b20taG9tZS1ib3JkZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbiNjb250YWN0LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAyMHB4IDVweCAyMHB4IDVweDtcbn1cblxuI21lbnUtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwcHg7XG59XG5cbiNtZW51LWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uYnVyZ2VyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5idXJnZXIgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmJ1cmdlciBpbWcge1xuICAgIGhlaWdodDogOTAlO1xufVxuXG4uYnVyZ2VyIC5yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogIzAwNDEwMTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuI2NvbnRhY3QtYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA1MHB4O1xufVxuXG4jY29udGFjdC1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY29sb3I6ICMwMDQxMDE7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4jY29udGFjdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbiNjb250YWN0LXRpdGxlLFxuI2NvbnRhY3QtYWRkcmVzcy1oZWFkZXIsXG4jY29udGFjdC1udW1iZXItaGVhZGVyLFxuI2NvbnRhY3QtZW1haWwtaGVhZGVyLFxuI2NvbnRhY3QtaG91cnMtaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2NvbnRhY3QtYWRkcmVzcyxcbiNjb250YWN0LW51bWJlcixcbiNjb250YWN0LWVtYWlsLFxuI2NvbnRhY3QtaG91cnMge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuI21haW4tY29udGVudCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgICAjY29udGFjdC1ib3gge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgICNnb29nbGUtbWFwIGlmcmFtZSB7XG4gICAgICAgIHdpZHRoOiA3NXZ3O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY4MHB4KSB7XG5cbiAgICAjaG9tZS1jb250ZW50ICNsZWZ0LXNpZGUge1xuICAgICAgICBoZWlnaHQ6IDIwdmg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICNtZW51LWNvbnRlbnQgI2xlZnQtc2lkZSB7XG4gICAgICAgIGhlaWdodDogNDB2aDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudCxcbiAgICAjbWVudS1jb250ZW50IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAjcmlnaHQtc2lkZSB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAjaW5mby1ib3gge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgIH1cblxuICAgICNoZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgcGFkZGluZzogMHB4IDVweCAwcHggMHB4O1xuICAgIH1cblxuICAgICNoZWFkZXItbGVmdCB7XG4gICAgICAgIGdhcDogMHB4O1xuICAgIH1cblxuICAgICNoZWFkZXItdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG5cbiAgICAjaG9tZS1waWMge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgIH1cblxuICAgICNob21lLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgIH1cblxuICAgIC5idXJnZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIH1cblxuICAgIC5idXJnZXIgLmltZyB7XG4gICAgICAgIGhlaWdodDogMjcwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgICN0b3AtaG9tZS1ib3JkZXIsXG4gICAgI2JvdHRvbS1ob21lLWJvcmRlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIGhlaWdodDogNjVweDtcbiAgICB9XG5cbiAgICAuYnVyZ2VyIC5yaWdodCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgI2NvbnRhY3QtaW5mbyB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuXG4gICAgI2NvbnRhY3QtYm94IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIGdhcDogMjBweDtcbiAgICB9XG5cbiAgICAjY29udGFjdC1jb250ZW50IHtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtJQUNmLDRDQUE0QztJQUM1QywwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7Ozs7SUFJSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLCtEQUFvRTtBQUN4RTs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0VBQTREO0lBQzVELHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtFQUE0RDtJQUM1RCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osUUFBUTtBQUNaOztBQUVBOztJQUVJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksMERBQW9EO0lBQ3BELFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7Ozs7SUFLSSxpQkFBaUI7QUFDckI7O0FBRUE7Ozs7SUFJSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBOztRQUVJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isb0JBQW9CO0lBQ3hCOztJQUVBOztRQUVJLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjb250YWluZXIgeyBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jaGVhZGVyLWxvZ28gaW1nIHtcXG4gICAgd2lkdGg6IDcwcHg7XFxufVxcblxcbiNoZWFkZXItbG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2hlYWRlci10ZXh0IHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlDdXJzaXZlJztcXG59XFxuXFxuI2hlYWRlci1sZWZ0IHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4jaGVhZGVyLWxvZ286aG92ZXIsXFxuI2hlYWRlci1ob21lOmhvdmVyLFxcbiNoZWFkZXItbWVudTpob3ZlcixcXG4jaGVhZGVyLWNvbnRhY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ015Q3Vyc2l2ZSc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0NlZGFydmlsbGVDdXJzaXZlLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5cXG4jZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDFiMDE7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbn1cXG5cXG4jZm9vdGVyLWxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI2Zvb3Rlci1pbWcge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbiNsZWZ0LXNpZGUge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4jaG9tZS1jb250ZW50ICNsZWZ0LXNpZGUge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vaW1hZ2VzL2hvbWVXYWxscGFwZXIuanBnJykgbm8tcmVwZWF0IGxlZnQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNtZW51LWNvbnRlbnQgI2xlZnQtc2lkZSB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWFnZXMvbWVudVdhbGxwYXBlci5qcGcnKSBuby1yZXBlYXQgbGVmdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuI3JpZ2h0LXNpZGUge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4td2lkdGg6IDY1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggNXB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jaW5mby1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI2hvbWUtdGl0bGUsXFxuI21lbnUtdGl0bGUge1xcbiAgICBjb2xvcjogIzAwNDEwMTtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LWZhbWlseTogJ015Q3Vyc2l2ZSc7XFxufVxcblxcbiNob21lLXRleHQge1xcbiAgICBjb2xvcjogIzAwNDEwMTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcblxcbiNob21lLWNhcHRpb24ge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGNvbG9yOiAjMDAzMTAxO1xcbn1cXG5cXG4jaG9tZS1jb250ZW50LFxcbiNjb250YWN0LWNvbnRlbnQsXFxuI21lbnUtY29udGVudCB7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNob21lLXBpYyB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuI3RvcC1ob21lLWJvcmRlcixcXG4jYm90dG9tLWhvbWUtYm9yZGVyIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2ltYWdlcy9zcXVpZ2dsZUxhcmdlLnBuZycpIHJlcGVhdDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDY1cHg7XFxufVxcblxcbiNib3R0b20taG9tZS1ib3JkZXIge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4jY29udGFjdC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyMHB4IDVweCAyMHB4IDVweDtcXG59XFxuXFxuI21lbnUtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDkwcHg7XFxufVxcblxcbiNtZW51LWJveCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5idXJnZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYnVyZ2VyIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uYnVyZ2VyIGltZyB7XFxuICAgIGhlaWdodDogOTAlO1xcbn1cXG5cXG4uYnVyZ2VyIC5yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiAjMDA0MTAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbiNjb250YWN0LWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbiNjb250YWN0LWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29sb3I6ICMwMDQxMDE7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNjb250YWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbiNjb250YWN0LXRpdGxlLFxcbiNjb250YWN0LWFkZHJlc3MtaGVhZGVyLFxcbiNjb250YWN0LW51bWJlci1oZWFkZXIsXFxuI2NvbnRhY3QtZW1haWwtaGVhZGVyLFxcbiNjb250YWN0LWhvdXJzLWhlYWRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jY29udGFjdC1hZGRyZXNzLFxcbiNjb250YWN0LW51bWJlcixcXG4jY29udGFjdC1lbWFpbCxcXG4jY29udGFjdC1ob3VycyB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbiNtYWluLWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xcbiAgICAjY29udGFjdC1ib3gge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAjZ29vZ2xlLW1hcCBpZnJhbWUge1xcbiAgICAgICAgd2lkdGg6IDc1dnc7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY4MHB4KSB7XFxuXFxuICAgICNob21lLWNvbnRlbnQgI2xlZnQtc2lkZSB7XFxuICAgICAgICBoZWlnaHQ6IDIwdmg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjbWVudS1jb250ZW50ICNsZWZ0LXNpZGUge1xcbiAgICAgICAgaGVpZ2h0OiA0MHZoO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudCxcXG4gICAgI21lbnUtY29udGVudCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgICNyaWdodC1zaWRlIHtcXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgICNpbmZvLWJveCB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuXFxuICAgICNoZWFkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICBwYWRkaW5nOiAwcHggNXB4IDBweCAwcHg7XFxuICAgIH1cXG5cXG4gICAgI2hlYWRlci1sZWZ0IHtcXG4gICAgICAgIGdhcDogMHB4O1xcbiAgICB9XFxuXFxuICAgICNoZWFkZXItdGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtcGljIHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtdGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB9XFxuXFxuICAgIC5idXJnZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xcbiAgICB9XFxuXFxuICAgIC5idXJnZXIgLmltZyB7XFxuICAgICAgICBoZWlnaHQ6IDI3MHB4O1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgI3RvcC1ob21lLWJvcmRlcixcXG4gICAgI2JvdHRvbS1ob21lLWJvcmRlciB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xcbiAgICB9XFxuXFxuICAgIC5idXJnZXIgLnJpZ2h0IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRhY3QtaW5mbyB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0LWJveCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgICAgIGdhcDogMjBweDtcXG4gICAgfVxcblxcbiAgICAjY29udGFjdC1jb250ZW50IHtcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdENvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWNvbnRlbnQnKTtcbiAgICBcbiAgICBjb25zdCB0b3BIb21lQm9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9wSG9tZUJvcmRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvcC1ob21lLWJvcmRlcicpO1xuXG4gICAgY29uc3QgY29udGFjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RCb3guc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWJveCcpO1xuXG4gICAgY29uc3QgZ29vZ2xlTWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ29vZ2xlTWFwLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ29vZ2xlLW1hcCcpO1xuICAgIGdvb2dsZU1hcC5pbm5lckhUTUwgPSBgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQyNjAzLjgxMjA4OTY1ODQ3OCEyZC0xMjMuMDcyNTg3MzIyMzQwMTQhM2Q0OVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4yNjEwMDc0NzEzODk0NTUhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDU0ODY3MTRlOTNiN2U4NzElM0EweDNmOWVlNzJkMTFmZDllZTIhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMnNLeWxlJiMzOTtzJTIwQ2FmZSE1ZTAhM20yITFzZW4hMnNjYSE0djE2OTQwNTQ4MzYxMjUhNW0yITFzZW4hMnNjYVwiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNDUwXCIgc3R5bGU9XCJib3JkZXI6MDtcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT5gXG5cbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1pbmZvJyk7XG5cbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LXRpdGxlJyk7XG4gICAgY29udGFjdFRpdGxlLmlubmVyVGV4dCA9ICdDb250YWN0JztcblxuICAgIGNvbnN0IGNvbnRhY3RBZGRyZXNzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEFkZHJlc3NIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWFkZHJlc3MtaGVhZGVyJyk7XG4gICAgY29udGFjdEFkZHJlc3NIZWFkZXIuaW5uZXJUZXh0ID0gJ0FkZHJlc3M6JztcblxuICAgIGNvbnN0IGNvbnRhY3RBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEFkZHJlc3Muc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWFkZHJlc3MnKTtcbiAgICBjb250YWN0QWRkcmVzcy5pbm5lclRleHQgPSAnMjYyNyBDb21tZXJjaWFsIERyLCBWYW5jb3V2ZXIsIEJDIFY1TiA0QzMnO1xuXG4gICAgY29uc3QgY29udGFjdE51bWJlckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3ROdW1iZXJIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LW51bWJlci1oZWFkZXInKTtcbiAgICBjb250YWN0TnVtYmVySGVhZGVyLmlubmVyVGV4dCA9ICdQaG9uZTonO1xuXG4gICAgY29uc3QgY29udGFjdE51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3ROdW1iZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LW51bWJlcicpO1xuICAgIGNvbnRhY3ROdW1iZXIuaW5uZXJUZXh0ID0gJygyNTApIDg0OS02NTE5JztcblxuICAgIGNvbnN0IGNvbnRhY3RFbWFpbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RFbWFpbEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtZW1haWwtaGVhZGVyJyk7XG4gICAgY29udGFjdEVtYWlsSGVhZGVyLmlubmVyVGV4dCA9ICdFbWFpbDonO1xuXG4gICAgY29uc3QgY29udGFjdEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEVtYWlsLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1lbWFpbCcpO1xuICAgIGNvbnRhY3RFbWFpbC5pbm5lclRleHQgPSAnSW5mb0BLeWxlc0J1cmdlcnMuY2EnO1xuXG4gICAgY29uc3QgY29udGFjdEhvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEhvdXJzSGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1ob3Vycy1oZWFkZXInKTtcbiAgICBjb250YWN0SG91cnNIZWFkZXIuaW5uZXJUZXh0ID0gXCJIb3VyczpcIjtcblxuICAgIGNvbnN0IGNvbnRhY3RIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RIb3Vycy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtaG91cnMnKTtcbiAgICBjb250YWN0SG91cnMuaW5uZXJUZXh0ID0gJ01vbmRheTogMTFhbSAtIDEwcG1cXG4gVHVlc2RheTogMTFhbSAtIDEwcG1cXG4gV2VkbmVzZGF5OiAxMWFtIC0gMTBwbVxcbiBcXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaHVyc2RheTogMTFhbSAtIDEwcG1cXG4gXFwgRnJpZGF5OiAxMWFtIC0gMTFwbVxcbiBTYXR1cmRheTogMTFhbSAtIDExcG1cXG4gU3VuZGF5OiAxMWFtIC0gMTBwbSc7XG5cbiAgICBjb250YWN0SW5mby5hcHBlbmQoY29udGFjdFRpdGxlKTtcbiAgICBjb250YWN0SW5mby5hcHBlbmQoY29udGFjdEFkZHJlc3NIZWFkZXIpO1xuICAgIGNvbnRhY3RJbmZvLmFwcGVuZChjb250YWN0QWRkcmVzcyk7XG4gICAgY29udGFjdEluZm8uYXBwZW5kKGNvbnRhY3ROdW1iZXJIZWFkZXIpO1xuICAgIGNvbnRhY3RJbmZvLmFwcGVuZChjb250YWN0TnVtYmVyKTtcbiAgICBjb250YWN0SW5mby5hcHBlbmQoY29udGFjdEVtYWlsSGVhZGVyKTtcbiAgICBjb250YWN0SW5mby5hcHBlbmQoY29udGFjdEVtYWlsKTtcbiAgICBjb250YWN0SW5mby5hcHBlbmQoY29udGFjdEhvdXJzSGVhZGVyKTtcbiAgICBjb250YWN0SW5mby5hcHBlbmQoY29udGFjdEhvdXJzKTtcblxuXG5cbiAgICBjb250YWN0Qm94LmFwcGVuZChnb29nbGVNYXApO1xuICAgIGNvbnRhY3RCb3guYXBwZW5kKGNvbnRhY3RJbmZvKTtcblxuXG5cblxuICAgIFxuXG4gICAgY29uc3QgYm90dG9tSG9tZUJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvdHRvbUhvbWVCb3JkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdib3R0b20taG9tZS1ib3JkZXInKTtcblxuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZCh0b3BIb21lQm9yZGVyKTtcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmQoY29udGFjdEJveCk7XG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kKGJvdHRvbUhvbWVCb3JkZXIpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RDb250ZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0OyIsImltcG9ydCBoYW1idXJnZXJJY29uIGZyb20gJy4vaW1hZ2VzL2hhbWJ1cmdlckljb24ucG5nJztcbmltcG9ydCBnaXRodWJJY29uIGZyb20gJy4vaW1hZ2VzL2dpdGh1Ykljb24ucG5nJ1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5mdW5jdGlvbiBwYWdlSW5pdCgpIHtcbiAgICAvLyBtYWluIGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xuXG4gICAgLy8gaGVhZGVyIHNlY3Rpb25zXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyTG9nby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci1sb2dvJyk7XG5cbiAgICBjb25zdCBoZWFkZXJJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBoZWFkZXJJbWcuc3JjID0gaGFtYnVyZ2VySWNvbjtcblxuICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLXRleHQnKTtcbiAgICBoZWFkZXJUZXh0LmlubmVySFRNTCA9IFwiS3lsZSdzXCI7XG5cbiAgICBoZWFkZXJMb2dvLmFwcGVuZENoaWxkKGhlYWRlckltZyk7XG4gICAgaGVhZGVyTG9nby5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcbiAgICBoZWFkZXJMb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChob21lKCkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaGVhZGVySG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItaG9tZScpO1xuICAgIGhlYWRlckhvbWUuaW5uZXJIVE1MID0gXCJIb21lXCI7XG4gICAgaGVhZGVySG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSgpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJNZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLW1lbnUnKTtcbiAgICBoZWFkZXJNZW51LmlubmVySFRNTCA9IFwiTWVudVwiO1xuICAgIGhlYWRlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1lbnUoKSk7XG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItY29udGFjdCcpO1xuICAgIGhlYWRlckNvbnRhY3QuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG4gICAgaGVhZGVyQ29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCgpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRlckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJMZWZ0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLWxlZnQnKTtcbiAgICBoZWFkZXJMZWZ0LmFwcGVuZENoaWxkKGhlYWRlckxvZ28pO1xuICAgIGhlYWRlckxlZnQuYXBwZW5kQ2hpbGQoaGVhZGVySG9tZSk7XG4gICAgaGVhZGVyTGVmdC5hcHBlbmRDaGlsZChoZWFkZXJNZW51KTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMZWZ0KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFjdCk7XG5cbiAgICAvLyBib2R5IHNlY3Rpb25cbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbi1jb250ZW50Jyk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSgpKTtcblxuICAgIC8vIGZvb3RlciBzZWN0aW9uXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXItbGluaycpO1xuICAgIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9LeWxlQ2F0aGVycycpO1xuICAgIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG5cbiAgICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3Rlci10ZXh0Jyk7XG4gICAgZm9vdGVyVGV4dC5pbm5lckhUTUwgPSBcIkNyZWF0ZWQgYnkgS3lsZSBDYXRoZXJzXCJcblxuICAgIGNvbnN0IGZvb3RlckltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGZvb3RlckltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3Rlci1pbWcnKTtcbiAgICBmb290ZXJJbWcuc3JjID0gZ2l0aHViSWNvbjtcblxuICAgIGZvb3RlckxpbmsuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG4gICAgZm9vdGVyTGluay5hcHBlbmRDaGlsZChmb290ZXJJbWcpO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckxpbmspO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCB7IHBhZ2VJbml0IH07IiwiaW1wb3J0IHJlc3RhcmF1bnRQaWMgZnJvbSAnLi9pbWFnZXMvaG9tZVBpYy5qcGcnO1xuaW1wb3J0IHNxdWlnZ2xlTGFyZ2UgZnJvbSAnLi9pbWFnZXMvc3F1aWdnbGVMYXJnZS5wbmcnXG5cbmZ1bmN0aW9uIGhvbWUoKSB7XG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtY29udGVudCcpO1xuXG4gICAgY29uc3QgbGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0U2lkZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xlZnQtc2lkZScpO1xuICAgIFxuICAgIGNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0U2lkZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JpZ2h0LXNpZGUnKTtcblxuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGxlZnRTaWRlKTtcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChyaWdodFNpZGUpO1xuXG4gICAgY29uc3QgaW5mb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9Cb3guc2V0QXR0cmlidXRlKCdpZCcsICdpbmZvLWJveCcpO1xuXG4gICAgY29uc3QgaG9tZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS10aXRsZScpO1xuICAgIGhvbWVUaXRsZS5pbm5lclRleHQgPSBcIkt5bGUncyBCdXJnZXJzXCI7XG5cbiAgICBjb25zdCBob21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS10ZXh0Jyk7XG4gICAgaG9tZVRleHQuaW5uZXJUZXh0ID0gXCJUaGUgVW5pdGVkIFN0YXRlcyB3YXMgdGhlIGZpcnN0IGNvdW50cnkgd2hlcmUgdHdvIHNsaWNlcyBvZiBicmVhZCBhbmQgYSBcXFxuICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VuZCBiZWVmIHBhdHR5IHdlcmUgY29tYmluZWQgaW50byBhIGBoYW1idXJnZXIgc2FuZHdpY2hgIGFuZCBzb2xkLiBTaG9ydGx5IFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIgaXRzIGNyZWF0aW9uLCB0aGUgaGFtYnVyZ2VyIHF1aWNrbHkgaW5jbHVkZWQgYWxsIG9mIGl0cyBjdXJyZW50bHkgXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICB0eXBpY2FsbHkgY2hhcmFjdGVyaXN0aWMgdHJpbW1pbmdzLCBpbmNsdWRpbmcgb25pb25zLCBsZXR0dWNlLCBhbmQgc2xpY2VkIHBpY2tsZXMuXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICBBZnRlciB2YXJpb3VzIGNvbnRyb3ZlcnNpZXMgaW4gdGhlIDIwdGggY2VudHVyeSwgaW5jbHVkaW5nIGEgbnV0cml0aW9uYWwgXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm92ZXJzeSBpbiB0aGUgbGF0ZSAxOTkwcywgdGhlIGJ1cmdlciBpcyBub3cgcmVhZGlseSBpZGVudGlmaWVkIHdpdGggdGhlIFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgVW5pdGVkIFN0YXRlcywgYW5kIGEgcGFydGljdWxhciBzdHlsZSBvZiBjdWlzaW5lLCBuYW1lbHkgZmFzdCBmb29kLiBBbG9uZyB3aXRoIFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgZnJpZWQgY2hpY2tlbiBhbmQgYXBwbGUgcGllLCB0aGUgaGFtYnVyZ2VyIGhhcyBiZWNvbWUgYSBjdWxpbmFyeSBpY29uIGluIHRoZSBcXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFVuaXRlZCBTdGF0ZXMuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBjb25zdCBob21lUGljID0gbmV3IEltYWdlKCk7XG4gICAgaG9tZVBpYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtcGljJyk7XG4gICAgaG9tZVBpYy5zcmMgPSByZXN0YXJhdW50UGljO1xuXG4gICAgY29uc3QgaG9tZUNhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lQ2FwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtY2FwdGlvbicpO1xuICAgIGhvbWVDYXB0aW9uLmlubmVyVGV4dCA9IFwiS3lsZSdzIEJ1cmdlcnMgb24gTWF5IDEwIDE5MDUsIFZhbmNvdXZlciwgQkNcIjtcblxuICAgIGNvbnN0IHRvcEhvbWVCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BIb21lQm9yZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9wLWhvbWUtYm9yZGVyJyk7XG5cbiAgICBjb25zdCBib3R0b21Ib21lQm9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm90dG9tSG9tZUJvcmRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JvdHRvbS1ob21lLWJvcmRlcicpO1xuXG4gICAgaW5mb0JveC5hcHBlbmQoaG9tZVRpdGxlKTtcbiAgICBpbmZvQm94LmFwcGVuZChob21lVGV4dCk7XG4gICAgaW5mb0JveC5hcHBlbmQoaG9tZVBpYyk7XG4gICAgaW5mb0JveC5hcHBlbmQoaG9tZUNhcHRpb24pO1xuXG4gICAgcmlnaHRTaWRlLmFwcGVuZCh0b3BIb21lQm9yZGVyKTtcbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoaW5mb0JveCk7XG4gICAgcmlnaHRTaWRlLmFwcGVuZChib3R0b21Ib21lQm9yZGVyKTtcblxuICAgIHJldHVybiBob21lQ29udGVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IHsgcGFnZUluaXQgfSBmcm9tICcuL2NvbnRhaW5lci5qcyc7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZUluaXQoKSk7XG5cbiIsImltcG9ydCBicmVha2Zhc3RCdXJnZXJQaWMgZnJvbSAnLi9pbWFnZXMvYnJlYWtmYXN0QnVyZ2VyLmpwZyc7XG5pbXBvcnQgYmVlZkJ1cmdlclBpYyBmcm9tICcuL2ltYWdlcy9iZWVmQnVyZ2VyLmpwZyc7XG5pbXBvcnQgYmlzb25CdXJnZXJQaWMgZnJvbSAnLi9pbWFnZXMvYmlzb25CdXJnZXIuanBnJztcbmltcG9ydCBjaGlja2VuQnVyZ2VyUGljIGZyb20gJy4vaW1hZ2VzL2NoaWNrZW5CdXJnZXIuanBnJztcbmltcG9ydCBzYWxtb25CdXJnZXJQaWMgZnJvbSAnLi9pbWFnZXMvc2FsbW9uQnVyZ2VyLmpwZyc7XG5cbmZ1bmN0aW9uIG1lbnUoKSB7XG4gICAgLy8gbGlzdCBvZiBtZW51IGl0ZW1zLCBhbGwgdW5kZXIgYnVyZ2VyIGh0bWwgY2xhc3NcbiAgICBjb25zdCBtZW51TGlzdCA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJCcmVha2Zhc3RcIiwgLy8g4p2WXG4gICAgICAgICAgICBwcmljZTogMTMsXG4gICAgICAgICAgICBpbmdyZWRpZW50czogW1wiRnJpZWQgRWdnXCIsIFwiV2hpdGUgQ2hlZGRhciBDaGVlc2VcIiwgXCJMZXR0dWNlXCIsIFwiQmFjb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRvbWF0b1wiLCBcIkNhcmFtZWxpemVkIE9uaW9uXCIsIFwiVG9hc3RlZCBCcmlvY2hlIEJ1blwiLCBcIkJhY29uIEFvaWxpXCJdLFxuICAgICAgICAgICAgcGljdHVyZTogYnJlYWtmYXN0QnVyZ2VyUGljXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJCZWVmXCIsIC8vIOKdllxuICAgICAgICAgICAgcHJpY2U6IDE4LFxuICAgICAgICAgICAgaW5ncmVkaWVudHM6IFtcIkRvdWJsZSBCZWVmIFBhdHR5XCIsIFwiV2hpdGUgQ2hlZGRhciBDaGVlc2VcIiwgXCJMZXR0dWNlXCIsIFwiUmVkIE9uaW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUb2FzdGVkIFNlc2FtZSBTZWVkIEJ1blwiLCBcIlBpY2tsZXNcIiwgXCJUb21hdG9cIiwgXCJHYXJsaWMgQW9pbGlcIl0sXG4gICAgICAgICAgICBwaWN0dXJlOiBiZWVmQnVyZ2VyUGljXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJCaXNvblwiLCAvLyDinZZcbiAgICAgICAgICAgIHByaWNlOiAxNyxcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiBbXCJHcmFzcyBGZWQgQmlzb24gUGF0dHlcIiwgXCJTd2lzcyBDaGVlc2VcIiwgXCJMZXR0dWNlXCIsIFwiVG9tYXRvXCIsIFwiQ2FyYW1lbGl6ZWQgT25pb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUb2FzdGVkIEJyaW9jaGUgQnVuXCIsIFwiSmFsZXBlbm8gQW9pbGlcIl0sXG4gICAgICAgICAgICBwaWN0dXJlOiBiaXNvbkJ1cmdlclBpY1xuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQ2hpY2tlblwiLCAvLyDinZZcbiAgICAgICAgICAgIHByaWNlOiAxNSxcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiBbXCJEb3VibGUgRnJpZWQgQ2hpY2tlblwiLCBcIkNoZWRkYXIgQ2hlZXNlXCIsIFwiTGV0dHVjZVwiLCBcIlRvYXN0ZWQgQnJpb2NoZSBCdW5cIiwgXCJTcmlyYWNoYSBBb2lsaVwiXSxcbiAgICAgICAgICAgIHBpY3R1cmU6IGNoaWNrZW5CdXJnZXJQaWNcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlNhbG1vblwiLCAvLyDinZZcbiAgICAgICAgICAgIHByaWNlOiAxNixcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiBbXCJXaWxkIFNhbG1vbiBQYXR0eVwiLCBcIlJlZCBPbmlvblwiLCBcIkxldHR1Y2VcIiwgXCJUb21hdG9cIiwgXCJUb2FzdGVkIEJyaW9jaGUgQnVuXCIsIFwiUmVtb3VsYWRlIFNhdWNlXCJdLFxuICAgICAgICAgICAgcGljdHVyZTogc2FsbW9uQnVyZ2VyUGljXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdFNpZGUuc2V0QXR0cmlidXRlKCdpZCcsICdsZWZ0LXNpZGUnKTtcbiAgICBcbiAgICBjb25zdCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodFNpZGUuc2V0QXR0cmlidXRlKCdpZCcsICdyaWdodC1zaWRlJyk7XG5cbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChsZWZ0U2lkZSk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQocmlnaHRTaWRlKTtcblxuICAgIGNvbnN0IHRvcEhvbWVCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BIb21lQm9yZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9wLWhvbWUtYm9yZGVyJyk7XG5cbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LXRpdGxlJyk7XG4gICAgbWVudVRpdGxlLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuXG4gICAgY29uc3QgbWVudUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVCb3guc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWJveCcpO1xuXG4gICAgLy8gYWRkIGVhY2ggYnVyZ2VyIGl0ZW0gdG8gbWVudSBET01cbiAgICBtZW51TGlzdC5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICBtZW51Qm94LmFwcGVuZChhZGRCdXJnZXIobWVudUl0ZW0pKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJvdHRvbUhvbWVCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3R0b21Ib21lQm9yZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYm90dG9tLWhvbWUtYm9yZGVyJyk7XG5cbiAgICByaWdodFNpZGUuYXBwZW5kKHRvcEhvbWVCb3JkZXIpO1xuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChtZW51Qm94KTtcbiAgICByaWdodFNpZGUuYXBwZW5kKGJvdHRvbUhvbWVCb3JkZXIpO1xuICAgIFxuICAgIHJldHVybiBtZW51Q29udGVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudTtcblxuLy8gYWRkIGJ1cmdlciBvYmplY3QgdG8gdGhlIG1lbnUgRE9NXG5mdW5jdGlvbiBhZGRCdXJnZXIobWVudUl0ZW0pIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bWVudUl0ZW0ubmFtZX0tYnVyZ2VyYCk7XG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1cmdlcicpO1xuXG4gICAgY29uc3QgaXRlbUltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGl0ZW1JbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbWcnKTtcbiAgICBpdGVtSW1nLnNyYyA9IG1lbnVJdGVtLnBpY3R1cmU7XG5cbiAgICBjb25zdCBpdGVtUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtUmlnaHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyaWdodCcpO1xuXG4gICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcbiAgICBpdGVtVGl0bGUuaW5uZXJUZXh0ID0gYCR7bWVudUl0ZW0ubmFtZX0gQnVyZ2VyIC0gJCR7bWVudUl0ZW0ucHJpY2V9YDtcblxuICAgIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbVRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0Jyk7XG4gICAgXG4gICAgbGV0IHRleHQgPSBcIlwiO1xuICAgIG1lbnVJdGVtLmluZ3JlZGllbnRzLmZvckVhY2goKGluZ3JlZGllbnQpID0+IHtcbiAgICAgICAgdGV4dCArPSBg4p2WICR7aW5ncmVkaWVudH1cXG5gO1xuICAgIH0pO1xuXG4gICAgaXRlbVRleHQuaW5uZXJUZXh0ID0gdGV4dDtcblxuICAgIGl0ZW1SaWdodC5hcHBlbmQoaXRlbVRpdGxlKTtcbiAgICBpdGVtUmlnaHQuYXBwZW5kKGl0ZW1UZXh0KTtcblxuICAgIGl0ZW0uYXBwZW5kKGl0ZW1JbWcpO1xuICAgIGl0ZW0uYXBwZW5kKGl0ZW1SaWdodCk7XG5cbiAgICByZXR1cm4gaXRlbTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=