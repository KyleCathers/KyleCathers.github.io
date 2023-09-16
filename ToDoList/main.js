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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --menu-width: 300px;
}

html,
body {
  margin: 0px;
  height: 100%;
  padding: 0px;
}

#container {
  margin: 0px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

#header {
  width: 100%;
  height: 100px;
  background-color: #c0ceff;
  border-bottom: solid 3px #a4b7fa;
  display: flex;
}

#main {
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: row;
}

#menu {
  background-color: #f4f4f4;
  width: var(--menu-width);
  height: 100%;
  border-right: solid #e3e3e3 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 0px 50px 20px;
  font-size: 2rem;
}

#header-logo {
  display: flex;
  height: 100%;
  padding: 0px 20px 0px 20px;
  align-items: center;
}

#header-logo-img {
  height: 80px;
}

#header-text {
  font-size: 3rem;
  font-family: "MyCursive";
  align-self: center;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

@font-face {
  font-family: "MyCursive";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}

#add-project,
#add-task {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 75px;
}

#add-project-button,
#add-task-button {
  height: 65px;
}

#task-info-modal,
#add-task-modal,
#add-project-modal {
  font-size: 2rem;
  border: solid #002aff 5px;
  border-radius: 5px;
}

.modalTitle {
  font-size: 2.5rem;
  text-align: center;
  padding-bottom: 30px;
}

.dialogRow {
  display: flex;
  gap: 10px;
  justify-content: center;
}

label,
.submitButton,
input {
  font-size: 1.5rem;
}

button {
  background-color: #002aff;
  color: white;
  border: 0;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#task-section {
  padding: 50px 0px 50px 0px;
  gap: 10px;
  display: flex;
  flex-direction: column;
}

.delete,
.edit {
  height: 35px;
  cursor: pointer;
  box-sizing: border-box;
}

.button-container {
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
}

.custom-project-item {
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  align-items: center;
}

.click {
  transition: all 0.2s ease-in-out;
  transform-origin: 0%;
  cursor: pointer;
}

.click:hover {
  transform: scale(1.2);
  padding-right: 5px;
}

#main-content {
  height: 100%;
  width: calc(100vw - var(--menu-width));
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
}

#main-content-title {
  font-size: 2rem;
}

.task {
  border-radius: 15px;
  border: solid black 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  font-size: 1.3rem;
  min-width: 600px;
}

.High {
  background-color: #ffbfbf;
}

.Medium {
  background-color: #bfccff;
}

.Low {
  background-color: #bfffc6;
}

.task:hover {
  transform: scale(1.01);
}

.task-title {
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.task-title:hover {
  transform: scale(1.2);
}

.task-done-state {
  cursor: pointer;
  padding: 0px 10px 0px 10px;
  transition: all 0.2s ease-in-out;
  width: 82px;
}

.task-done-state:hover {
  transform: scale(1.1);
}

.task-right {
  display: flex;
  gap: 10px;
  align-items: center;
  white-space: nowrap;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.error {
  color: red;
  font-size: 1.5rem;
}

.error:after {
  content: " ";
  white-space: pre;
}

#current-task-info-modal {
  width: 500px;
  border: solid #002aff 5px;
  border-radius: 5px;
  font-size: 1.5rem;
  padding-top: 0px;
  padding-right: 10px;
}

#current-task-info-modal form {
  align-items: flex-start;
  gap: 5px;
}

.title-row {
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
}

#task-info-modal-title {
  font-size: 3rem;
  padding-top: 20px;
}

#exit-button {
  cursor: pointer;
  padding-top: 10px;
  height: 30px;
  transition: all 0.2s ease-in-out;
}

#exit-button:hover {
  transform: scale(1.2);
}

#exit-button-container {
  background-color: white;
  width: auto;
}

input {
  padding-left: 8px;
  border-radius: 10px;
  color: #484848;
}

#edit-task-modal {
  border: solid blue 5px;
  border-radius: 10px;
}

#edit-task-modal-done-state-input {
  width: 20px;
  height: 30px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --menu-width: 300px;\n}\n\nhtml,\nbody {\n  margin: 0px;\n  height: 100%;\n  padding: 0px;\n}\n\n#container {\n  margin: 0px;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n#header {\n  width: 100%;\n  height: 100px;\n  background-color: #c0ceff;\n  border-bottom: solid 3px #a4b7fa;\n  display: flex;\n}\n\n#main {\n  width: 100%;\n  height: calc(100vh - 100px);\n  display: flex;\n  flex-direction: row;\n}\n\n#menu {\n  background-color: #f4f4f4;\n  width: var(--menu-width);\n  height: 100%;\n  border-right: solid #e3e3e3 3px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0px 0px 50px 20px;\n  font-size: 2rem;\n}\n\n#header-logo {\n  display: flex;\n  height: 100%;\n  padding: 0px 20px 0px 20px;\n  align-items: center;\n}\n\n#header-logo-img {\n  height: 80px;\n}\n\n#header-text {\n  font-size: 3rem;\n  font-family: \"MyCursive\";\n  align-self: center;\n  font-weight: bold;\n  color: white;\n  text-decoration: none;\n}\n\n@font-face {\n  font-family: \"MyCursive\";\n  src: url(\"./fonts/CedarvilleCursive-Regular.ttf\") format(\"truetype\");\n}\n\n#add-project,\n#add-task {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  height: 75px;\n}\n\n#add-project-button,\n#add-task-button {\n  height: 65px;\n}\n\n#task-info-modal,\n#add-task-modal,\n#add-project-modal {\n  font-size: 2rem;\n  border: solid #002aff 5px;\n  border-radius: 5px;\n}\n\n.modalTitle {\n  font-size: 2.5rem;\n  text-align: center;\n  padding-bottom: 30px;\n}\n\n.dialogRow {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n\nlabel,\n.submitButton,\ninput {\n  font-size: 1.5rem;\n}\n\nbutton {\n  background-color: #002aff;\n  color: white;\n  border: 0;\n  width: 100px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#task-section {\n  padding: 50px 0px 50px 0px;\n  gap: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.delete,\n.edit {\n  height: 35px;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n\n.button-container {\n  height: 40px;\n  width: 40px;\n  display: flex;\n  align-items: center;\n}\n\n.custom-project-item {\n  display: flex;\n  justify-content: space-between;\n  padding-right: 20px;\n  align-items: center;\n}\n\n.click {\n  transition: all 0.2s ease-in-out;\n  transform-origin: 0%;\n  cursor: pointer;\n}\n\n.click:hover {\n  transform: scale(1.2);\n  padding-right: 5px;\n}\n\n#main-content {\n  height: 100%;\n  width: calc(100vw - var(--menu-width));\n  box-sizing: border-box;\n  padding: 50px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  overflow: auto;\n}\n\n#main-content-title {\n  font-size: 2rem;\n}\n\n.task {\n  border-radius: 15px;\n  border: solid black 3px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  gap: 20px;\n  box-sizing: border-box;\n  transition: all 0.2s ease-in-out;\n  font-size: 1.3rem;\n  min-width: 600px;\n}\n\n.High {\n  background-color: #ffbfbf;\n}\n\n.Medium {\n  background-color: #bfccff;\n}\n\n.Low {\n  background-color: #bfffc6;\n}\n\n.task:hover {\n  transform: scale(1.01);\n}\n\n.task-title {\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n\n.task-title:hover {\n  transform: scale(1.2);\n}\n\n.task-done-state {\n  cursor: pointer;\n  padding: 0px 10px 0px 10px;\n  transition: all 0.2s ease-in-out;\n  width: 82px;\n}\n\n.task-done-state:hover {\n  transform: scale(1.1);\n}\n\n.task-right {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  white-space: nowrap;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\n.error {\n  color: red;\n  font-size: 1.5rem;\n}\n\n.error:after {\n  content: \" \";\n  white-space: pre;\n}\n\n#current-task-info-modal {\n  width: 500px;\n  border: solid #002aff 5px;\n  border-radius: 5px;\n  font-size: 1.5rem;\n  padding-top: 0px;\n  padding-right: 10px;\n}\n\n#current-task-info-modal form {\n  align-items: flex-start;\n  gap: 5px;\n}\n\n.title-row {\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n\n#task-info-modal-title {\n  font-size: 3rem;\n  padding-top: 20px;\n}\n\n#exit-button {\n  cursor: pointer;\n  padding-top: 10px;\n  height: 30px;\n  transition: all 0.2s ease-in-out;\n}\n\n#exit-button:hover {\n  transform: scale(1.2);\n}\n\n#exit-button-container {\n  background-color: white;\n  width: auto;\n}\n\ninput {\n  padding-left: 8px;\n  border-radius: 10px;\n  color: #484848;\n}\n\n#edit-task-modal {\n  border: solid blue 5px;\n  border-radius: 10px;\n}\n\n#edit-task-modal-done-state-input {\n  width: 20px;\n  height: 30px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isAfter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isAfter/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

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

/***/ "./src/container.js":
/*!**************************!*\
  !*** ./src/container.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadFromLocal: () => (/* binding */ loadFromLocal),
/* harmony export */   pageInit: () => (/* binding */ pageInit),
/* harmony export */   updateContent: () => (/* binding */ updateContent),
/* harmony export */   updateMenu: () => (/* binding */ updateMenu)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");
/* harmony import */ var _images_checklist_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/checklist.png */ "./src/images/checklist.png");
/* harmony import */ var _images_addIcon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/addIcon.png */ "./src/images/addIcon.png");
/* harmony import */ var _images_deleteIcon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/deleteIcon.png */ "./src/images/deleteIcon.png");
/* harmony import */ var _images_editIcon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/editIcon.png */ "./src/images/editIcon.png");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals */ "./src/modals.js");
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* eslint-disable no-use-before-define */










let selectedProject = "Home";

const currentTaskInfoModal = document.createElement("dialog");
currentTaskInfoModal.setAttribute("id", "current-task-info-modal");

const editTaskModal = (0,_modals__WEBPACK_IMPORTED_MODULE_4__.createEditTaskModal)();

let currentTaskObject = {};

function pageInit() {
  // initialize page layout
  const container = document.createElement("div");
  container.setAttribute("id", "container");

  const header = document.createElement("div");
  header.setAttribute("id", "header");

  const headerLogo = document.createElement("a");
  headerLogo.setAttribute("href", "https://www.theodinproject.com/");
  headerLogo.setAttribute("target", "_blank");
  headerLogo.setAttribute("id", "header-logo");

  const headerLogoImg = new Image();
  headerLogoImg.setAttribute("id", "header-logo-img");
  headerLogoImg.src = _images_checklist_png__WEBPACK_IMPORTED_MODULE_0__;

  headerLogo.appendChild(headerLogoImg);

  const headerText = document.createElement("a");
  headerText.setAttribute("id", "header-text");
  headerText.setAttribute("href", "https://www.theodinproject.com/");
  headerText.setAttribute("target", "_blank");
  headerText.innerText = "To Do List";

  header.appendChild(headerLogo);
  header.appendChild(headerText);

  const main = document.createElement("div");
  main.setAttribute("id", "main");

  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");

  const menuTopSection = document.createElement("div");
  menuTopSection.setAttribute("id", "menu-top-section");

  const HomeTask = document.createElement("div");
  HomeTask.setAttribute("id", "Home-task");
  HomeTask.setAttribute("class", "click");
  HomeTask.innerText = "Home";
  HomeTask.addEventListener("click", () => {
    selectedProject = "Home";
    updateMenu();
    updateContent();
  });

  const dueTodayTasks = document.createElement("div");
  dueTodayTasks.setAttribute("id", "due-today");
  dueTodayTasks.setAttribute("class", "click");
  dueTodayTasks.innerText = "Due Today";
  dueTodayTasks.addEventListener("click", () => {
    selectedProject = "Due Today";
    updateMenu();
    updateContent();
  });

  const dueThisWeekTasks = document.createElement("div");
  dueThisWeekTasks.setAttribute("id", "due-this-week");
  dueThisWeekTasks.setAttribute("class", "click");
  dueThisWeekTasks.innerText = "Due This Week";
  dueThisWeekTasks.addEventListener("click", () => {
    selectedProject = "Due This Week";
    updateMenu();
    updateContent();
  });

  const customProject = document.createElement("div");
  customProject.setAttribute("id", "custom-project");

  const taskSection = document.createElement("div");
  taskSection.setAttribute("id", "task-section");

  taskSection.appendChild(HomeTask);
  taskSection.appendChild(dueTodayTasks);
  taskSection.appendChild(dueThisWeekTasks);
  taskSection.appendChild(customProject);

  const addSection = document.createElement("div");
  addSection.setAttribute("id", "add-section");

  // add project button
  const addProjectDiv = document.createElement("div");
  addProjectDiv.setAttribute("id", "add-project");

  const addProjectButton = new Image();
  addProjectButton.setAttribute("id", "add-project-button");
  addProjectButton.setAttribute("class", "click");
  addProjectButton.src = _images_addIcon_png__WEBPACK_IMPORTED_MODULE_1__;

  const addProjectText = document.createElement("div");
  addProjectText.setAttribute("id", "add-project-text");
  addProjectText.innerText = "Add Project";

  addProjectDiv.appendChild(addProjectButton);
  addProjectDiv.appendChild(addProjectText);

  // add task button
  const addTaskDiv = document.createElement("div");
  addTaskDiv.setAttribute("id", "add-task");

  const addTaskButton = new Image();
  addTaskButton.setAttribute("id", "add-task-button");
  addTaskButton.setAttribute("class", "click");
  addTaskButton.src = _images_addIcon_png__WEBPACK_IMPORTED_MODULE_1__;

  const addTaskText = document.createElement("div");
  addTaskText.setAttribute("id", "add-task-text");
  addTaskText.innerText = "Add Task";

  addTaskDiv.appendChild(addTaskButton);
  addTaskDiv.appendChild(addTaskText);

  addSection.appendChild(addProjectDiv);
  addSection.appendChild(addTaskDiv);

  menuTopSection.appendChild(taskSection);

  menu.appendChild(menuTopSection);
  menu.appendChild(addSection);

  const mainContent = document.createElement("div");
  mainContent.setAttribute("id", "main-content");

  main.appendChild(menu);
  main.appendChild(mainContent);

  container.appendChild(header);
  container.appendChild(main);

  const addTaskModal = (0,_modals__WEBPACK_IMPORTED_MODULE_4__.createAddTaskModal)();
  const addProjectModal = (0,_modals__WEBPACK_IMPORTED_MODULE_4__.createAddProjectModal)();

  container.appendChild(currentTaskInfoModal);
  container.appendChild(addTaskModal);
  container.appendChild(addProjectModal);
  container.appendChild(editTaskModal);

  // add listeners to buttons
  addTaskButton.addEventListener("click", () => {
    addTaskModal.showModal();
    (0,_modals__WEBPACK_IMPORTED_MODULE_4__.clearModals)();

    const addTaskSubmitButton = document.querySelector("#task-modal-submit");
    addTaskSubmitButton.addEventListener("click", addTask);
  });

  addProjectButton.addEventListener("click", () => {
    addProjectModal.showModal();
    (0,_modals__WEBPACK_IMPORTED_MODULE_4__.clearModals)();

    const addProjectSubmitButton = document.querySelector(
      "#project-modal-submit",
    );
    addProjectSubmitButton.addEventListener("click", addProject);
  });

  // add Home project
  const HomeProject = (0,_factories__WEBPACK_IMPORTED_MODULE_5__.project)("Home");
  _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.addProject(HomeProject);

  return container;
}

// display all tasks of selected project
function updateContent() {
  const mainContentTitle = document.createElement("div");
  mainContentTitle.setAttribute("id", "main-content-title");
  mainContentTitle.innerText = selectedProject;

  // clear any leftover DOM content
  const mainContent = document.querySelector("#main-content");
  mainContent.innerHTML = "";
  mainContent.appendChild(mainContentTitle);

  // if targetProject is home project, iterate through all projects on the list and append
  if (
    selectedProject === "Home" ||
    selectedProject === "Due Today" ||
    selectedProject === "Due This Week"
  ) {
    // iterate through all projects
    _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.info().forEach((title) => {
      const targetProject = _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.getProject(title);
      // add target project tasks to the DOM
      appendTasks(targetProject);
    });
  } else {
    // go into currently selected project of project list array
    const targetProject = _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.getProject(selectedProject);

    // add target projects task to the DOM
    appendTasks(targetProject);
  }
}

// update menu with custom project
function updateMenu() {
  const customTasks = document.querySelector("#custom-project");
  customTasks.innerHTML = "";

  _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.info().forEach((title) => {
    if (title === "Home") return; // skip adding Home project since it's a default

    const projectItem = document.createElement("div");
    projectItem.setAttribute("class", "custom-project-item");

    const projectText = document.createElement("div");
    projectText.setAttribute("id", title);
    projectText.setAttribute("class", "click");
    projectText.innerText = title;
    projectText.addEventListener("click", () => {
      selectedProject = title;
      updateContent();
    });

    const projectDelete = new Image();
    projectDelete.src = _images_deleteIcon_png__WEBPACK_IMPORTED_MODULE_2__;
    projectDelete.setAttribute("id", `delete${title}`);
    projectDelete.setAttribute("class", "delete click");
    projectDelete.addEventListener("click", () => {
      _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.removeProject(title);
      // TODO: if current project is the one deleted, display Home project in main content
      saveToLocal();
      updateMenu();
    });

    projectItem.appendChild(projectText);
    projectItem.appendChild(projectDelete);

    customTasks.appendChild(projectItem);
  });
}

// add a new task to selectedProject
// should update local storage
function addTask() {
  // get info from modal
  const titleInput = document.querySelector("#task-modal-title-input");
  const detailsInput = document.querySelector("#task-modal-details-input");
  const dueDateInput = document.querySelector("#task-modal-duedate-input");
  const priorityInput = document.querySelector("#task-modal-priority-input");

  if(titleInput.value === "") {
    return;
  } if(dueDateInput.value === "") {
    return;
  }

  // go into currently selected project of project list array
  let targetProject = _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.getProject(selectedProject);

  if (selectedProject === "Due Today" || selectedProject === "Due This Week") {
    targetProject = _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.getProject("Home");
  }

  // add modal details as task to selected project
  targetProject.addTask(
    titleInput.value,
    detailsInput.value,
    dueDateInput.value,
    priorityInput.value,
  );

  // save changes to local storage
  saveToLocal();

  updateContent();

  // new listener added every time submit button is clicked, remove here
  const addTaskSubmitButton = document.querySelector("#task-modal-submit");
  addTaskSubmitButton.removeEventListener("click", addTask);
}

// add a new project to the master project list
// should update local storage
function addProject() {
  const titleInput = document.querySelector("#project-modal-title-input");
  if (titleInput.value === "") {
    return;
  }
  const newProject = (0,_factories__WEBPACK_IMPORTED_MODULE_5__.project)(titleInput.value);

  _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.addProject(newProject);

  // new listener added every time modal submit button is clicked, remove here
  const addProjectSubmitButton = document.querySelector(
    "#project-modal-submit",
  );
  addProjectSubmitButton.removeEventListener("click", addProject);

  // save changes to local storage
  saveToLocal();

  // refresh menu DOM since new project is added
  updateMenu();
}

// iterate all tasks of target project and add to DOM
function appendTasks(targetProject) {
  // get todays date, format to YYYY-MM-DD
  const today = new Date();
  let todayString = "";
  todayString = `${today.getFullYear()}-${
    today.getMonth() + 1 < 10 ? "0" : ""
  }${today.getMonth() + 1}-${today.getDate()}`;

  const mainContent = document.querySelector("#main-content");

  targetProject.getTaskObjects().forEach((task) => {
    if (selectedProject === "Due Today") {
      if (task.dueDate !== todayString) {
        return;
      }
    } else if (selectedProject === "Due This Week") {
      const taskYear = task.dueDate.substr(0, 4);
      let taskMonth = task.dueDate.substr(5, 2);
      const taskDay = task.dueDate.substr(8, 2);
      taskMonth = taskMonth[0] === "0" ? taskMonth[1] : taskMonth;
      const taskDate = new Date(taskYear, taskMonth - 1, taskDay);
      const nextWeekDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(), 6); // 1 week from today

      // skip if task.dueDate > nextWeekString e.g. now until sep 18
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(taskDate, nextWeekDate)) {
        return;
      }
    }

    const currentTask = document.createElement("div");
    currentTask.setAttribute("id", task.title);
    currentTask.setAttribute("class", `task ${task.priority}`);

    // (title, details, dueDate, priority, doneState)
    const taskTitle = document.createElement("div");
    taskTitle.setAttribute("class", "task-title");
    taskTitle.setAttribute("id", `${task.title}-title`);
    taskTitle.innerText = `${task.title}`;
    taskTitle.addEventListener("click", () => {
      currentTaskInfoModal.innerHTML = "";
      currentTaskInfoModal.appendChild((0,_modals__WEBPACK_IMPORTED_MODULE_4__.createTaskInfoModal)(task));
      currentTaskInfoModal.showModal();
    });

    const taskRight = document.createElement("div");
    taskRight.setAttribute("class", "task-right");

    const taskDetails = document.createElement("div");
    taskDetails.setAttribute("id", `${task.title}-details`);
    taskDetails.innerText = "Details";
    // when clicked pull up module with title, details, due date, done sate, priority

    const taskDueDate = document.createElement("div");
    taskDueDate.setAttribute("class", "task-due-date");
    taskDueDate.innerText = `Due: ${task.dueDate}`;

    const taskDoneState = document.createElement("div");
    taskDoneState.setAttribute("class", "task-done-state");
    taskDoneState.setAttribute("id", `${task.title}-done-state`);
    taskDoneState.innerText = task.doneState ? "Done" : "Not Done";
    taskDoneState.addEventListener("click", () => {
      // eslint-disable-next-line no-param-reassign
      task.doneState = !task.doneState;
      // save changes to local storage
      saveToLocal();
      updateContent();
    });

    const editContainer = document.createElement("div");
    editContainer.setAttribute("class", "button-container");

    const editButton = new Image();
    editButton.src = _images_editIcon_png__WEBPACK_IMPORTED_MODULE_3__;
    editButton.setAttribute("id", `${task.title}-edit`);
    editButton.setAttribute("class", "edit click");
    // when clicked pull up module to edit title, details, due date, done sate, priority
    editButton.addEventListener("click", () => {
      editTaskModal.showModal();
      (0,_modals__WEBPACK_IMPORTED_MODULE_4__.clearModals)();

      currentTaskObject = task;

      const editTaskSubmitButton = document.querySelector(
        "#edit-task-modal-submit",
      );
      editTaskSubmitButton.addEventListener("click", editTask);
    });

    editContainer.append(editButton);

    const deleteContainer = document.createElement("div");
    deleteContainer.setAttribute("class", "button-container");

    const deleteButton = new Image();
    deleteButton.src = _images_deleteIcon_png__WEBPACK_IMPORTED_MODULE_2__;
    deleteButton.setAttribute("id", `${task.title}-delete`);
    deleteButton.setAttribute("class", "delete click");
    // when clicked pull up module with title, details, due date, done state, priority
    deleteButton.addEventListener("click", () => {
      targetProject.removeTask(task.title);
      saveToLocal();
      updateContent();
    });

    deleteContainer.append(deleteButton);

    taskRight.append(taskDueDate);
    taskRight.append(taskDoneState);
    taskRight.append(editContainer);
    taskRight.append(deleteContainer);

    currentTask.append(taskTitle);
    currentTask.append(taskRight);

    mainContent.appendChild(currentTask);
  });
}

function editTask() {
  // get info from modal
  const titleInput = document.querySelector("#edit-task-modal-title-input");
  const detailsInput = document.querySelector("#edit-task-modal-details-input");
  const dueDateInput = document.querySelector("#edit-task-modal-duedate-input");
  const priorityInput = document.querySelector(
    "#edit-task-modal-priority-input",
  );
  const doneInput = document.querySelector("#edit-task-modal-done-state-input");

  if(titleInput.value === "") {
    return;
  }
  
  if(dueDateInput.value === "") {
    return;
  }

  // add modal details as task to selected project
  currentTaskObject.title = titleInput.value;
  currentTaskObject.details = detailsInput.value;
  currentTaskObject.dueDate = dueDateInput.value;
  currentTaskObject.priority = priorityInput.value;
  currentTaskObject.doneState = doneInput.checked;

  // save changes to local storage
  saveToLocal();

  updateContent();
}

function saveToLocal() {
  const data = [];

  const projectTitlesArray = _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.info();

  projectTitlesArray.forEach(title => {
    const currentProject = _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.getProject(title);

    const projectTasksArray = [];

    const projectTasks = currentProject.getTaskObjects();

    projectTasks.forEach(task => {
      const taskString = JSON.stringify(task);
      projectTasksArray.push(taskString);
    });

    const prodObj = {"projectTitle":title,"data":projectTasksArray};

    data.push(prodObj);
  });

  const dataString = JSON.stringify(data);

  localStorage.setItem('projectList', dataString);
}

function loadFromLocal() {
  const data = localStorage.getItem('projectList');

  if (data === null) {
    return;
  }

  const dataString = JSON.parse(data);

  dataString.forEach(projectItem => {
    let currentProject = _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.getProject('Home');  // default home

    // add current project to project list array
    if(projectItem.projectTitle !== 'Home') {
      currentProject = (0,_factories__WEBPACK_IMPORTED_MODULE_5__.project)(projectItem.projectTitle);

      _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.addProject(currentProject);
    }

    // add tasks to current project
    projectItem.data.forEach(task => {
      const taskObject = JSON.parse(task);  // convert string to obj

      // create task out of retrieved task object
      currentProject.addTask(taskObject.title, taskObject.details, taskObject.dueDate, 
        taskObject.priority, taskObject.doneState);
    });
  });
}




/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   project: () => (/* binding */ project),
/* harmony export */   projectList: () => (/* binding */ projectList)
/* harmony export */ });
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
// projects master list module object
const projectList = (() => {
  let projectListArray = [];

  // add new project
  const addProject = (project) => {
    projectListArray.push(project);
  };

  // remove specified project
  const removeProject = (title) => {
    // array = [{title: "1", ...}, {title: "2", ...}, {title: "3"}], remove "1" object
    projectListArray = projectListArray.filter(
      (project) => project.title !== title,
    );
  };

  // returns titles of each project in an array
  const info = () => {
    const projectTitlesArray = [];
    projectListArray.forEach((project) => {
      projectTitlesArray.push(project.title);
    });

    return projectTitlesArray;
  };

  // returns project object of specified title from list
  const getProject = (title) => {
    const targetProject = projectListArray.find(
      (project) => project.title === title,
    );
    return targetProject;
  };

  return {
    addProject,
    removeProject,
    info,
    getProject,
  };
})();

// project factory object
const project = (title) => {
  let tasksList = [];

  const addTask = (title, details, dueDate, priority, doneState) => {
    tasksList.push(task(title, details, dueDate, priority, doneState));
  };

  const removeTask = (title) => {
    tasksList = tasksList.filter((task) => task.title !== title);
  };

  const getTask = (title) => {
    const targetTask = tasksList.find((task) => task.title === title);
    return targetTask;
  };

  const getTaskObjects = () => tasksList;

  return {
    addTask,
    removeTask,
    getTask,
    getTaskObjects,
    title,
  };
};

// task factory object
const task = (title, details, dueDate, priority, doneState = false) => ({
    title,
    details,
    dueDate,
    priority,
    doneState,
  });




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ "./src/container.js");




document.body.appendChild((0,_container__WEBPACK_IMPORTED_MODULE_1__.pageInit)());

// grab any exisitng local storage
(0,_container__WEBPACK_IMPORTED_MODULE_1__.loadFromLocal)();

// update DOM with exisitng data
(0,_container__WEBPACK_IMPORTED_MODULE_1__.updateContent)();
(0,_container__WEBPACK_IMPORTED_MODULE_1__.updateMenu)();

/***/ }),

/***/ "./src/modals.js":
/*!***********************!*\
  !*** ./src/modals.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearModals: () => (/* binding */ clearModals),
/* harmony export */   createAddProjectModal: () => (/* binding */ createAddProjectModal),
/* harmony export */   createAddTaskModal: () => (/* binding */ createAddTaskModal),
/* harmony export */   createEditTaskModal: () => (/* binding */ createEditTaskModal),
/* harmony export */   createTaskInfoModal: () => (/* binding */ createTaskInfoModal)
/* harmony export */ });
/* harmony import */ var _images_exitButton_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/exitButton.png */ "./src/images/exitButton.png");


function createAddTaskModal() {
  const addTaskModal = document.createElement("dialog");
  addTaskModal.setAttribute("id", "add-task-modal");

  const title = document.createElement("div");
  title.setAttribute("class", "modalTitle");
  title.innerText = "Add Task";

  const form = document.createElement("form");
  form.setAttribute("method", "dialog");
  form.setAttribute("id", "add-task-form");

  const titleRow = document.createElement("div");
  titleRow.setAttribute("class", "dialogRow");

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "task-modal-title-input");
  titleLabel.innerText = "Title:";

  const titleInput = document.createElement("input");
  titleInput.setAttribute("id", "task-modal-title-input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("maxlength", "17");
  titleInput.required = true;

  titleRow.appendChild(titleLabel);
  titleRow.appendChild(titleInput);

  const detailsRow = document.createElement("div");
  detailsRow.setAttribute("class", "dialogRow");

  const detailsLabel = document.createElement("label");
  detailsLabel.setAttribute("for", "task-modal-details-input");
  detailsLabel.innerText = "Details:";

  const detailsInput = document.createElement("input");
  detailsInput.setAttribute("id", "task-modal-details-input");
  detailsInput.setAttribute("type", "text");

  detailsRow.appendChild(detailsLabel);
  detailsRow.appendChild(detailsInput);

  const dueDateRow = document.createElement("div");
  dueDateRow.setAttribute("class", "dialogRow");

  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "task-modal-duedate-input");
  dueDateLabel.innerText = "Due Date:";

  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("id", "task-modal-duedate-input");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.required = true;

  dueDateRow.appendChild(dueDateLabel);
  dueDateRow.appendChild(dueDateInput);

  const priorityRow = document.createElement("div");
  priorityRow.setAttribute("class", "dialogRow");

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "task-modal-priority-input");
  priorityLabel.innerText = "Priority:";

  const priorityInput = document.createElement("select");
  priorityInput.setAttribute("id", "task-modal-priority-input");
  priorityInput.setAttribute("name", "priority");

  const highOption = document.createElement("option");
  highOption.setAttribute("value", "High");
  highOption.innerText = "High";

  const mediumOption = document.createElement("option");
  mediumOption.setAttribute("value", "Medium");
  mediumOption.innerText = "Medium";

  const lowOption = document.createElement("option");
  lowOption.setAttribute("value", "Low");
  lowOption.innerText = "Low";

  priorityInput.appendChild(highOption);
  priorityInput.appendChild(mediumOption);
  priorityInput.appendChild(lowOption);

  priorityRow.appendChild(priorityLabel);
  priorityRow.appendChild(priorityInput);

  const error = document.createElement("div");
  error.setAttribute("class", "error");

  const submitRow = document.createElement("div");
  submitRow.setAttribute("class", "dialogRow");

  const submitButton = document.createElement("button");
  submitButton.setAttribute("class", "submitButton");
  submitButton.setAttribute("id", "task-modal-submit");
  submitButton.setAttribute("type", "submit");
  submitButton.innerHTML = "submit";
  submitRow.appendChild(submitButton);

  form.appendChild(titleRow);
  form.appendChild(detailsRow);
  form.appendChild(dueDateRow);
  form.appendChild(priorityRow);
  form.appendChild(error);
  form.appendChild(submitRow);

  addTaskModal.appendChild(title);
  addTaskModal.appendChild(form);

  return addTaskModal;
}

function createAddProjectModal() {
  const addProjectModal = document.createElement("dialog");
  addProjectModal.setAttribute("id", "add-project-modal");

  const modalTitle = document.createElement("div");
  modalTitle.setAttribute("class", "modalTitle");
  modalTitle.innerText = "Add Project";

  const form = document.createElement("form");
  form.setAttribute("method", "dialog");
  form.setAttribute("id", "add-project-form");

  const row1 = document.createElement("div");
  row1.setAttribute("class", "dialogRow");

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "project-modal-title-input");
  titleLabel.innerText = "Title:";

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("id", "project-modal-title-input");
  titleInput.required = true;

  row1.appendChild(titleLabel);
  row1.appendChild(titleInput);

  const error = document.createElement("div");
  error.setAttribute("class", "error");
  error.setAttribute("id", "project-modal-error");

  const row2 = document.createElement("div");
  row2.setAttribute("class", "dialogRow");

  const submitButton = document.createElement("button");
  submitButton.setAttribute("class", "submitButton");
  submitButton.setAttribute("id", "project-modal-submit");
  submitButton.setAttribute("type", "submit");
  submitButton.innerText = "Submit";

  row2.appendChild(submitButton);

  form.appendChild(row1);
  form.appendChild(error);
  form.appendChild(row2);

  addProjectModal.appendChild(modalTitle);
  addProjectModal.appendChild(form);

  // validate form inputs ~~~~~~~~~~~~~~~~~~~~~ DO LATER
  form.addEventListener("submit", (e) => {
    // also check if it already exists

    if (titleInput.value === "") {
      // error.innerText = "ERROR: Title can not be blank";
      e.preventDefault();
    }
  });

  return addProjectModal;
}

function createTaskInfoModal(task) {
  const container = document.createElement("form");
  container.setAttribute("id", "task-info-form");

  const titleRow = document.createElement("div");
  titleRow.setAttribute("class", "title-row");

  const title = document.createElement("div");
  title.setAttribute("id", "task-info-modal-title");
  title.innerText = task.title;

  const exitContainer = document.createElement("button");
  exitContainer.setAttribute("id", "exit-button-container");
  exitContainer.setAttribute("formmethod", "dialog");

  const exit = new Image();
  exit.setAttribute("id", "exit-button");
  exit.src = _images_exitButton_png__WEBPACK_IMPORTED_MODULE_0__;

  exitContainer.appendChild(exit);

  titleRow.appendChild(title);
  titleRow.appendChild(exitContainer);

  const dueDate = document.createElement("div");
  dueDate.setAttribute("id", "task-info-modal-due-date");
  dueDate.innerText = `Due Date: ${task.dueDate}`;

  const details = document.createElement("div");
  details.setAttribute("id", "task-info-modal-details");
  details.innerText = `Details: ${task.details}`;

  const priority = document.createElement("div");
  priority.setAttribute("id", "task-info-modal-priority");
  priority.innerText = `Priority: ${task.priority}`;

  const doneState = document.createElement("div");
  doneState.setAttribute("id", "task-info-modal-done-state");
  doneState.innerText = task.doneState ? "Done" : "Not Done";

  container.appendChild(titleRow);
  container.appendChild(dueDate);
  container.appendChild(details);
  container.appendChild(priority);
  container.appendChild(doneState);

  return container;
}

function clearModals() {
  // add project modal
  const projectTitleInput = document.querySelector(
    "#project-modal-title-input",
  );
  projectTitleInput.value = "";

  // add task modal
  const addTaskTitleInput = document.querySelector("#task-modal-title-input");
  addTaskTitleInput.value = "";

  const addTaskDetailsInput = document.querySelector(
    "#task-modal-details-input",
  );
  addTaskDetailsInput.value = "";

  // get todays date, format to YYYY-MM-DD
  const today = new Date();
  let todayString = "";
  todayString = `${today.getFullYear()}-${
    today.getMonth() + 1 < 10 ? "0" : ""
  }${today.getMonth() + 1}-${today.getDate()}`;

  const addTaskDueDateInput = document.querySelector(
    "#task-modal-duedate-input",
  );
  addTaskDueDateInput.value = todayString;

  const addTaskPriorityInput = document.querySelector(
    "#task-modal-priority-input",
  );
  addTaskPriorityInput.value = "Low";

  // edit task modal
  const editTaskTitleInput = document.querySelector(
    "#edit-task-modal-title-input",
  );
  editTaskTitleInput.value = "";

  const editTaskDetailsInput = document.querySelector(
    "#edit-task-modal-details-input",
  );
  editTaskDetailsInput.value = "";

  const editTaskDueDateInput = document.querySelector(
    "#edit-task-modal-duedate-input",
  );
  // YYYY-MM-DD
  editTaskDueDateInput.value = todayString;

  const editTaskPriorityInput = document.querySelector(
    "#edit-task-modal-priority-input",
  );
  editTaskPriorityInput.value = "Low";

  const editTaskDoneStateInput = document.querySelector(
    "#edit-task-modal-priority-input",
  );
  editTaskDoneStateInput.checked = "false";
}

function createEditTaskModal() {
  const editTaskModal = document.createElement("dialog");
  editTaskModal.setAttribute("id", "edit-task-modal");

  const title = document.createElement("div");
  title.setAttribute("class", "modalTitle");
  title.innerText = "Edit Task";

  const form = document.createElement("form");
  form.setAttribute("method", "dialog");
  form.setAttribute("id", "edit-task-form");

  const titleRow = document.createElement("div");
  titleRow.setAttribute("class", "dialogRow");

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "edit-task-modal-title-input");
  titleLabel.innerText = "Title:";

  const titleInput = document.createElement("input");
  titleInput.setAttribute("id", "edit-task-modal-title-input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("maxlength", "17");
  titleInput.required = true;

  titleRow.appendChild(titleLabel);
  titleRow.appendChild(titleInput);

  const detailsRow = document.createElement("div");
  detailsRow.setAttribute("class", "dialogRow");

  const detailsLabel = document.createElement("label");
  detailsLabel.setAttribute("for", "edit-task-modal-details-input");
  detailsLabel.innerText = "Details:";

  const detailsInput = document.createElement("input");
  detailsInput.setAttribute("id", "edit-task-modal-details-input");
  detailsInput.setAttribute("type", "text");

  detailsRow.appendChild(detailsLabel);
  detailsRow.appendChild(detailsInput);

  const dueDateRow = document.createElement("div");
  dueDateRow.setAttribute("class", "dialogRow");

  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "edit-task-modal-duedate-input");
  dueDateLabel.innerText = "Due Date:";

  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("id", "edit-task-modal-duedate-input");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.required = true;

  dueDateRow.appendChild(dueDateLabel);
  dueDateRow.appendChild(dueDateInput);

  const priorityRow = document.createElement("div");
  priorityRow.setAttribute("class", "dialogRow");

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "edit-task-modal-priority-input");
  priorityLabel.innerText = "Priority:";

  const priorityInput = document.createElement("select");
  priorityInput.setAttribute("id", "edit-task-modal-priority-input");
  priorityInput.setAttribute("name", "priority");

  const highOption = document.createElement("option");
  highOption.setAttribute("value", "High");
  highOption.innerText = "High";

  const mediumOption = document.createElement("option");
  mediumOption.setAttribute("value", "Medium");
  mediumOption.innerText = "Medium";

  const lowOption = document.createElement("option");
  lowOption.setAttribute("value", "Low");
  lowOption.innerText = "Low";

  priorityInput.appendChild(highOption);
  priorityInput.appendChild(mediumOption);
  priorityInput.appendChild(lowOption);

  const doneStateLabel = document.createElement("label");
  doneStateLabel.setAttribute("for", "edit-task-modal-done-state-input");
  doneStateLabel.innerText = "Done?";

  const doneStateInput = document.createElement("input");
  doneStateInput.setAttribute("id", "edit-task-modal-done-state-input");
  doneStateInput.setAttribute("type", "checkbox");

  priorityRow.appendChild(priorityLabel);
  priorityRow.appendChild(priorityInput);
  priorityRow.appendChild(doneStateLabel);
  priorityRow.appendChild(doneStateInput);

  const error = document.createElement("div");
  error.setAttribute("class", "error");

  const submitRow = document.createElement("div");
  submitRow.setAttribute("class", "dialogRow");

  const submitButton = document.createElement("button");
  submitButton.setAttribute("class", "submitButton");
  submitButton.setAttribute("id", "edit-task-modal-submit");
  submitButton.setAttribute("type", "submit");
  submitButton.innerHTML = "submit";
  submitRow.appendChild(submitButton);

  form.appendChild(titleRow);
  form.appendChild(detailsRow);
  form.appendChild(dueDateRow);
  form.appendChild(priorityRow);
  form.appendChild(error);
  form.appendChild(submitRow);

  editTaskModal.appendChild(title);
  editTaskModal.appendChild(form);

  return editTaskModal;
}




/***/ }),

/***/ "./src/fonts/CedarvilleCursive-Regular.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/CedarvilleCursive-Regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a669593f51bb81ad0cc1.ttf";

/***/ }),

/***/ "./src/images/addIcon.png":
/*!********************************!*\
  !*** ./src/images/addIcon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2532e874c7c2fd77538.png";

/***/ }),

/***/ "./src/images/checklist.png":
/*!**********************************!*\
  !*** ./src/images/checklist.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30c38b95ae25a4707b5d.png";

/***/ }),

/***/ "./src/images/deleteIcon.png":
/*!***********************************!*\
  !*** ./src/images/deleteIcon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4337fee049e551e11b33.png";

/***/ }),

/***/ "./src/images/editIcon.png":
/*!*********************************!*\
  !*** ./src/images/editIcon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd4f95d12d2c542ecdcb.png";

/***/ }),

/***/ "./src/images/exitButton.png":
/*!***********************************!*\
  !*** ./src/images/exitButton.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fa730e8460456e465da.png";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsdUpBQXdEO0FBQ3BHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQVFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoYWE7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQWZ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZmFjdG9yaWVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kYWxzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ2VkYXJ2aWxsZUN1cnNpdmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1tZW51LXdpZHRoOiAzMDBweDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbiNjb250YWluZXIge1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2hlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjZWZmO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggI2E0YjdmYTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI21haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4jbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIHdpZHRoOiB2YXIoLS1tZW51LXdpZHRoKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkICNlM2UzZTMgM3B4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDBweCAwcHggNTBweCAyMHB4O1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbiNoZWFkZXItbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNoZWFkZXItbG9nby1pbWcge1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbiNoZWFkZXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC1mYW1pbHk6IFwiTXlDdXJzaXZlXCI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTXlDdXJzaXZlXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG4jYWRkLXByb2plY3QsXG4jYWRkLXRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGhlaWdodDogNzVweDtcbn1cblxuI2FkZC1wcm9qZWN0LWJ1dHRvbixcbiNhZGQtdGFzay1idXR0b24ge1xuICBoZWlnaHQ6IDY1cHg7XG59XG5cbiN0YXNrLWluZm8tbW9kYWwsXG4jYWRkLXRhc2stbW9kYWwsXG4jYWRkLXByb2plY3QtbW9kYWwge1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlcjogc29saWQgIzAwMmFmZiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm1vZGFsVGl0bGUge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmRpYWxvZ1JvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmxhYmVsLFxuLnN1Ym1pdEJ1dHRvbixcbmlucHV0IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDJhZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiN0YXNrLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA1MHB4IDBweCA1MHB4IDBweDtcbiAgZ2FwOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZGVsZXRlLFxuLmVkaXQge1xuICBoZWlnaHQ6IDM1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY3VzdG9tLXByb2plY3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsaWNrIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbGljazpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4jbWFpbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLW1lbnUtd2lkdGgpKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuI21haW4tY29udGVudC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnRhc2sge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IHNvbGlkIGJsYWNrIDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4O1xuICBnYXA6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbWluLXdpZHRoOiA2MDBweDtcbn1cblxuLkhpZ2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZmJmO1xufVxuXG4uTWVkaXVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmY2NmZjtcbn1cblxuLkxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmZmYzY7XG59XG5cbi50YXNrOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cblxuLnRhc2stdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnRhc2stdGl0bGU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi50YXNrLWRvbmUtc3RhdGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgd2lkdGg6IDgycHg7XG59XG5cbi50YXNrLWRvbmUtc3RhdGU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi50YXNrLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmVycm9yOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG59XG5cbiNjdXJyZW50LXRhc2staW5mby1tb2RhbCB7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyOiBzb2xpZCAjMDAyYWZmIDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuI2N1cnJlbnQtdGFzay1pbmZvLW1vZGFsIGZvcm0ge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiA1cHg7XG59XG5cbi50aXRsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI3Rhc2staW5mby1tb2RhbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbiNleGl0LWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbiNleGl0LWJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuI2V4aXQtYnV0dG9uLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogYXV0bztcbn1cblxuaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICM0ODQ4NDg7XG59XG5cbiNlZGl0LXRhc2stbW9kYWwge1xuICBib3JkZXI6IHNvbGlkIGJsdWUgNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jZWRpdC10YXNrLW1vZGFsLWRvbmUtc3RhdGUtaW5wdXQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4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bUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tbWVudS13aWR0aDogMzAwcHg7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBtYXJnaW46IDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNoZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwY2VmZjtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjYTRiN2ZhO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI21haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuI21lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcXG4gIHdpZHRoOiB2YXIoLS1tZW51LXdpZHRoKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yaWdodDogc29saWQgI2UzZTNlMyAzcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwcHggMHB4IDUwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI2hlYWRlci1sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXItbG9nby1pbWcge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4jaGVhZGVyLXRleHQge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUN1cnNpdmVcXFwiO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUN1cnNpdmVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvQ2VkYXJ2aWxsZUN1cnNpdmUtUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcblxcbiNhZGQtcHJvamVjdCxcXG4jYWRkLXRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b24sXFxuI2FkZC10YXNrLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDY1cHg7XFxufVxcblxcbiN0YXNrLWluZm8tbW9kYWwsXFxuI2FkZC10YXNrLW1vZGFsLFxcbiNhZGQtcHJvamVjdC1tb2RhbCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IHNvbGlkICMwMDJhZmYgNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubW9kYWxUaXRsZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uZGlhbG9nUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubGFiZWwsXFxuLnN1Ym1pdEJ1dHRvbixcXG5pbnB1dCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDJhZmY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDA7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Rhc2stc2VjdGlvbiB7XFxuICBwYWRkaW5nOiA1MHB4IDBweCA1MHB4IDBweDtcXG4gIGdhcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGVsZXRlLFxcbi5lZGl0IHtcXG4gIGhlaWdodDogMzVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jdXN0b20tcHJvamVjdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNsaWNrIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGljazpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbiNtYWluLWNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSB2YXIoLS1tZW51LXdpZHRoKSk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNtYWluLWNvbnRlbnQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udGFzayB7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1pbi13aWR0aDogNjAwcHg7XFxufVxcblxcbi5IaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJmYmY7XFxufVxcblxcbi5NZWRpdW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmY2NmZjtcXG59XFxuXFxuLkxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZmZmM2O1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFzay10aXRsZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi50YXNrLWRvbmUtc3RhdGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIHdpZHRoOiA4MnB4O1xcbn1cXG5cXG4udGFzay1kb25lLXN0YXRlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnRhc2stcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmVycm9yIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmVycm9yOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxufVxcblxcbiNjdXJyZW50LXRhc2staW5mby1tb2RhbCB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBib3JkZXI6IHNvbGlkICMwMDJhZmYgNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuI2N1cnJlbnQtdGFzay1pbmZvLW1vZGFsIGZvcm0ge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnRpdGxlLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI3Rhc2staW5mby1tb2RhbC10aXRsZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuI2V4aXQtYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNleGl0LWJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbiNleGl0LWJ1dHRvbi1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuaW5wdXQge1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6ICM0ODQ4NDg7XFxufVxcblxcbiNlZGl0LXRhc2stbW9kYWwge1xcbiAgYm9yZGVyOiBzb2xpZCBibHVlIDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNlZGl0LXRhc2stbW9kYWwtZG9uZS1zdGF0ZS1pbnB1dCB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzQWZ0ZXJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYWZ0ZXIgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYWZ0ZXIgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQWZ0ZXIobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBZnRlcihkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpID4gZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IHsgYWRkRGF5cywgaXNBZnRlciB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IGhlYWRlckljb24gZnJvbSBcIi4vaW1hZ2VzL2NoZWNrbGlzdC5wbmdcIjtcbmltcG9ydCBhZGRJY29uIGZyb20gXCIuL2ltYWdlcy9hZGRJY29uLnBuZ1wiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vaW1hZ2VzL2RlbGV0ZUljb24ucG5nXCI7XG5pbXBvcnQgZWRpdEljb24gZnJvbSBcIi4vaW1hZ2VzL2VkaXRJY29uLnBuZ1wiO1xuXG5pbXBvcnQge1xuICBjcmVhdGVBZGRUYXNrTW9kYWwsXG4gIGNsZWFyTW9kYWxzLFxuICBjcmVhdGVBZGRQcm9qZWN0TW9kYWwsXG4gIGNyZWF0ZVRhc2tJbmZvTW9kYWwsXG4gIGNyZWF0ZUVkaXRUYXNrTW9kYWwsXG59IGZyb20gXCIuL21vZGFsc1wiO1xuXG5pbXBvcnQgeyBwcm9qZWN0TGlzdCwgcHJvamVjdCB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuXG5sZXQgc2VsZWN0ZWRQcm9qZWN0ID0gXCJIb21lXCI7XG5cbmNvbnN0IGN1cnJlbnRUYXNrSW5mb01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbmN1cnJlbnRUYXNrSW5mb01vZGFsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY3VycmVudC10YXNrLWluZm8tbW9kYWxcIik7XG5cbmNvbnN0IGVkaXRUYXNrTW9kYWwgPSBjcmVhdGVFZGl0VGFza01vZGFsKCk7XG5cbmxldCBjdXJyZW50VGFza09iamVjdCA9IHt9O1xuXG5mdW5jdGlvbiBwYWdlSW5pdCgpIHtcbiAgLy8gaW5pdGlhbGl6ZSBwYWdlIGxheW91dFxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWluZXJcIik7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IGhlYWRlckxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgaGVhZGVyTG9nby5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL1wiKTtcbiAgaGVhZGVyTG9nby5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gIGhlYWRlckxvZ28uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXItbG9nb1wiKTtcblxuICBjb25zdCBoZWFkZXJMb2dvSW1nID0gbmV3IEltYWdlKCk7XG4gIGhlYWRlckxvZ29JbWcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXItbG9nby1pbWdcIik7XG4gIGhlYWRlckxvZ29JbWcuc3JjID0gaGVhZGVySWNvbjtcblxuICBoZWFkZXJMb2dvLmFwcGVuZENoaWxkKGhlYWRlckxvZ29JbWcpO1xuXG4gIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgaGVhZGVyVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci10ZXh0XCIpO1xuICBoZWFkZXJUZXh0LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vXCIpO1xuICBoZWFkZXJUZXh0LnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgaGVhZGVyVGV4dC5pbm5lclRleHQgPSBcIlRvIERvIExpc3RcIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTG9nbyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpO1xuXG4gIGNvbnN0IG1lbnVUb3BTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudVRvcFNlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51LXRvcC1zZWN0aW9uXCIpO1xuXG4gIGNvbnN0IEhvbWVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgSG9tZVRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJIb21lLXRhc2tcIik7XG4gIEhvbWVUYXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xpY2tcIik7XG4gIEhvbWVUYXNrLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuICBIb21lVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNlbGVjdGVkUHJvamVjdCA9IFwiSG9tZVwiO1xuICAgIHVwZGF0ZU1lbnUoKTtcbiAgICB1cGRhdGVDb250ZW50KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGR1ZVRvZGF5VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkdWVUb2RheVRhc2tzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlLXRvZGF5XCIpO1xuICBkdWVUb2RheVRhc2tzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xpY2tcIik7XG4gIGR1ZVRvZGF5VGFza3MuaW5uZXJUZXh0ID0gXCJEdWUgVG9kYXlcIjtcbiAgZHVlVG9kYXlUYXNrcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNlbGVjdGVkUHJvamVjdCA9IFwiRHVlIFRvZGF5XCI7XG4gICAgdXBkYXRlTWVudSgpO1xuICAgIHVwZGF0ZUNvbnRlbnQoKTtcbiAgfSk7XG5cbiAgY29uc3QgZHVlVGhpc1dlZWtUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGR1ZVRoaXNXZWVrVGFza3Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWUtdGhpcy13ZWVrXCIpO1xuICBkdWVUaGlzV2Vla1Rhc2tzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xpY2tcIik7XG4gIGR1ZVRoaXNXZWVrVGFza3MuaW5uZXJUZXh0ID0gXCJEdWUgVGhpcyBXZWVrXCI7XG4gIGR1ZVRoaXNXZWVrVGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzZWxlY3RlZFByb2plY3QgPSBcIkR1ZSBUaGlzIFdlZWtcIjtcbiAgICB1cGRhdGVNZW51KCk7XG4gICAgdXBkYXRlQ29udGVudCgpO1xuICB9KTtcblxuICBjb25zdCBjdXN0b21Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3VzdG9tUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImN1c3RvbS1wcm9qZWN0XCIpO1xuXG4gIGNvbnN0IHRhc2tTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza1NlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXNlY3Rpb25cIik7XG5cbiAgdGFza1NlY3Rpb24uYXBwZW5kQ2hpbGQoSG9tZVRhc2spO1xuICB0YXNrU2VjdGlvbi5hcHBlbmRDaGlsZChkdWVUb2RheVRhc2tzKTtcbiAgdGFza1NlY3Rpb24uYXBwZW5kQ2hpbGQoZHVlVGhpc1dlZWtUYXNrcyk7XG4gIHRhc2tTZWN0aW9uLmFwcGVuZENoaWxkKGN1c3RvbVByb2plY3QpO1xuXG4gIGNvbnN0IGFkZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXNlY3Rpb25cIik7XG5cbiAgLy8gYWRkIHByb2plY3QgYnV0dG9uXG4gIGNvbnN0IGFkZFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRQcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXByb2plY3RcIik7XG5cbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICBhZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xpY2tcIik7XG4gIGFkZFByb2plY3RCdXR0b24uc3JjID0gYWRkSWNvbjtcblxuICBjb25zdCBhZGRQcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZFByb2plY3RUZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXByb2plY3QtdGV4dFwiKTtcbiAgYWRkUHJvamVjdFRleHQuaW5uZXJUZXh0ID0gXCJBZGQgUHJvamVjdFwiO1xuXG4gIGFkZFByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG4gIGFkZFByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFRleHQpO1xuXG4gIC8vIGFkZCB0YXNrIGJ1dHRvblxuICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkVGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrXCIpO1xuXG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgYWRkVGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLWJ1dHRvblwiKTtcbiAgYWRkVGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNsaWNrXCIpO1xuICBhZGRUYXNrQnV0dG9uLnNyYyA9IGFkZEljb247XG5cbiAgY29uc3QgYWRkVGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRUYXNrVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLXRleHRcIik7XG4gIGFkZFRhc2tUZXh0LmlubmVyVGV4dCA9IFwiQWRkIFRhc2tcIjtcblxuICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tUZXh0KTtcblxuICBhZGRTZWN0aW9uLmFwcGVuZENoaWxkKGFkZFByb2plY3REaXYpO1xuICBhZGRTZWN0aW9uLmFwcGVuZENoaWxkKGFkZFRhc2tEaXYpO1xuXG4gIG1lbnVUb3BTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tTZWN0aW9uKTtcblxuICBtZW51LmFwcGVuZENoaWxkKG1lbnVUb3BTZWN0aW9uKTtcbiAgbWVudS5hcHBlbmRDaGlsZChhZGRTZWN0aW9uKTtcblxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi1jb250ZW50XCIpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQobWVudSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgY29uc3QgYWRkVGFza01vZGFsID0gY3JlYXRlQWRkVGFza01vZGFsKCk7XG4gIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGNyZWF0ZUFkZFByb2plY3RNb2RhbCgpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGFza0luZm9Nb2RhbCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrTW9kYWwpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdE1vZGFsKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRUYXNrTW9kYWwpO1xuXG4gIC8vIGFkZCBsaXN0ZW5lcnMgdG8gYnV0dG9uc1xuICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkVGFza01vZGFsLnNob3dNb2RhbCgpO1xuICAgIGNsZWFyTW9kYWxzKCk7XG5cbiAgICBjb25zdCBhZGRUYXNrU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW1vZGFsLXN1Ym1pdFwiKTtcbiAgICBhZGRUYXNrU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrKTtcbiAgfSk7XG5cbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZFByb2plY3RNb2RhbC5zaG93TW9kYWwoKTtcbiAgICBjbGVhck1vZGFscygpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiNwcm9qZWN0LW1vZGFsLXN1Ym1pdFwiLFxuICAgICk7XG4gICAgYWRkUHJvamVjdFN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdCk7XG4gIH0pO1xuXG4gIC8vIGFkZCBIb21lIHByb2plY3RcbiAgY29uc3QgSG9tZVByb2plY3QgPSBwcm9qZWN0KFwiSG9tZVwiKTtcbiAgcHJvamVjdExpc3QuYWRkUHJvamVjdChIb21lUHJvamVjdCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLy8gZGlzcGxheSBhbGwgdGFza3Mgb2Ygc2VsZWN0ZWQgcHJvamVjdFxuZnVuY3Rpb24gdXBkYXRlQ29udGVudCgpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250ZW50VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLWNvbnRlbnQtdGl0bGVcIik7XG4gIG1haW5Db250ZW50VGl0bGUuaW5uZXJUZXh0ID0gc2VsZWN0ZWRQcm9qZWN0O1xuXG4gIC8vIGNsZWFyIGFueSBsZWZ0b3ZlciBET00gY29udGVudFxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudFRpdGxlKTtcblxuICAvLyBpZiB0YXJnZXRQcm9qZWN0IGlzIGhvbWUgcHJvamVjdCwgaXRlcmF0ZSB0aHJvdWdoIGFsbCBwcm9qZWN0cyBvbiB0aGUgbGlzdCBhbmQgYXBwZW5kXG4gIGlmIChcbiAgICBzZWxlY3RlZFByb2plY3QgPT09IFwiSG9tZVwiIHx8XG4gICAgc2VsZWN0ZWRQcm9qZWN0ID09PSBcIkR1ZSBUb2RheVwiIHx8XG4gICAgc2VsZWN0ZWRQcm9qZWN0ID09PSBcIkR1ZSBUaGlzIFdlZWtcIlxuICApIHtcbiAgICAvLyBpdGVyYXRlIHRocm91Z2ggYWxsIHByb2plY3RzXG4gICAgcHJvamVjdExpc3QuaW5mbygpLmZvckVhY2goKHRpdGxlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdCh0aXRsZSk7XG4gICAgICAvLyBhZGQgdGFyZ2V0IHByb2plY3QgdGFza3MgdG8gdGhlIERPTVxuICAgICAgYXBwZW5kVGFza3ModGFyZ2V0UHJvamVjdCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gZ28gaW50byBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCBvZiBwcm9qZWN0IGxpc3QgYXJyYXlcbiAgICBjb25zdCB0YXJnZXRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xuXG4gICAgLy8gYWRkIHRhcmdldCBwcm9qZWN0cyB0YXNrIHRvIHRoZSBET01cbiAgICBhcHBlbmRUYXNrcyh0YXJnZXRQcm9qZWN0KTtcbiAgfVxufVxuXG4vLyB1cGRhdGUgbWVudSB3aXRoIGN1c3RvbSBwcm9qZWN0XG5mdW5jdGlvbiB1cGRhdGVNZW51KCkge1xuICBjb25zdCBjdXN0b21UYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tLXByb2plY3RcIik7XG4gIGN1c3RvbVRhc2tzLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgcHJvamVjdExpc3QuaW5mbygpLmZvckVhY2goKHRpdGxlKSA9PiB7XG4gICAgaWYgKHRpdGxlID09PSBcIkhvbWVcIikgcmV0dXJuOyAvLyBza2lwIGFkZGluZyBIb21lIHByb2plY3Qgc2luY2UgaXQncyBhIGRlZmF1bHRcblxuICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0SXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImN1c3RvbS1wcm9qZWN0LWl0ZW1cIik7XG5cbiAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdFRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgdGl0bGUpO1xuICAgIHByb2plY3RUZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xpY2tcIik7XG4gICAgcHJvamVjdFRleHQuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgcHJvamVjdFRleHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHNlbGVjdGVkUHJvamVjdCA9IHRpdGxlO1xuICAgICAgdXBkYXRlQ29udGVudCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZSA9IG5ldyBJbWFnZSgpO1xuICAgIHByb2plY3REZWxldGUuc3JjID0gZGVsZXRlSWNvbjtcbiAgICBwcm9qZWN0RGVsZXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIGBkZWxldGUke3RpdGxlfWApO1xuICAgIHByb2plY3REZWxldGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZWxldGUgY2xpY2tcIik7XG4gICAgcHJvamVjdERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcHJvamVjdExpc3QucmVtb3ZlUHJvamVjdCh0aXRsZSk7XG4gICAgICAvLyBUT0RPOiBpZiBjdXJyZW50IHByb2plY3QgaXMgdGhlIG9uZSBkZWxldGVkLCBkaXNwbGF5IEhvbWUgcHJvamVjdCBpbiBtYWluIGNvbnRlbnRcbiAgICAgIHNhdmVUb0xvY2FsKCk7XG4gICAgICB1cGRhdGVNZW51KCk7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XG4gICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZSk7XG5cbiAgICBjdXN0b21UYXNrcy5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XG4gIH0pO1xufVxuXG4vLyBhZGQgYSBuZXcgdGFzayB0byBzZWxlY3RlZFByb2plY3Rcbi8vIHNob3VsZCB1cGRhdGUgbG9jYWwgc3RvcmFnZVxuZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgLy8gZ2V0IGluZm8gZnJvbSBtb2RhbFxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW1vZGFsLXRpdGxlLWlucHV0XCIpO1xuICBjb25zdCBkZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbW9kYWwtZGV0YWlscy1pbnB1dFwiKTtcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW1vZGFsLWR1ZWRhdGUtaW5wdXRcIik7XG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbW9kYWwtcHJpb3JpdHktaW5wdXRcIik7XG5cbiAgaWYodGl0bGVJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgIHJldHVybjtcbiAgfSBpZihkdWVEYXRlSW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBnbyBpbnRvIGN1cnJlbnRseSBzZWxlY3RlZCBwcm9qZWN0IG9mIHByb2plY3QgbGlzdCBhcnJheVxuICBsZXQgdGFyZ2V0UHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0KTtcblxuICBpZiAoc2VsZWN0ZWRQcm9qZWN0ID09PSBcIkR1ZSBUb2RheVwiIHx8IHNlbGVjdGVkUHJvamVjdCA9PT0gXCJEdWUgVGhpcyBXZWVrXCIpIHtcbiAgICB0YXJnZXRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdChcIkhvbWVcIik7XG4gIH1cblxuICAvLyBhZGQgbW9kYWwgZGV0YWlscyBhcyB0YXNrIHRvIHNlbGVjdGVkIHByb2plY3RcbiAgdGFyZ2V0UHJvamVjdC5hZGRUYXNrKFxuICAgIHRpdGxlSW5wdXQudmFsdWUsXG4gICAgZGV0YWlsc0lucHV0LnZhbHVlLFxuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICBwcmlvcml0eUlucHV0LnZhbHVlLFxuICApO1xuXG4gIC8vIHNhdmUgY2hhbmdlcyB0byBsb2NhbCBzdG9yYWdlXG4gIHNhdmVUb0xvY2FsKCk7XG5cbiAgdXBkYXRlQ29udGVudCgpO1xuXG4gIC8vIG5ldyBsaXN0ZW5lciBhZGRlZCBldmVyeSB0aW1lIHN1Ym1pdCBidXR0b24gaXMgY2xpY2tlZCwgcmVtb3ZlIGhlcmVcbiAgY29uc3QgYWRkVGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1tb2RhbC1zdWJtaXRcIik7XG4gIGFkZFRhc2tTdWJtaXRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2spO1xufVxuXG4vLyBhZGQgYSBuZXcgcHJvamVjdCB0byB0aGUgbWFzdGVyIHByb2plY3QgbGlzdFxuLy8gc2hvdWxkIHVwZGF0ZSBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW1vZGFsLXRpdGxlLWlucHV0XCIpO1xuICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdCh0aXRsZUlucHV0LnZhbHVlKTtcblxuICBwcm9qZWN0TGlzdC5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuXG4gIC8vIG5ldyBsaXN0ZW5lciBhZGRlZCBldmVyeSB0aW1lIG1vZGFsIHN1Ym1pdCBidXR0b24gaXMgY2xpY2tlZCwgcmVtb3ZlIGhlcmVcbiAgY29uc3QgYWRkUHJvamVjdFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjcHJvamVjdC1tb2RhbC1zdWJtaXRcIixcbiAgKTtcbiAgYWRkUHJvamVjdFN1Ym1pdEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdCk7XG5cbiAgLy8gc2F2ZSBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2VcbiAgc2F2ZVRvTG9jYWwoKTtcblxuICAvLyByZWZyZXNoIG1lbnUgRE9NIHNpbmNlIG5ldyBwcm9qZWN0IGlzIGFkZGVkXG4gIHVwZGF0ZU1lbnUoKTtcbn1cblxuLy8gaXRlcmF0ZSBhbGwgdGFza3Mgb2YgdGFyZ2V0IHByb2plY3QgYW5kIGFkZCB0byBET01cbmZ1bmN0aW9uIGFwcGVuZFRhc2tzKHRhcmdldFByb2plY3QpIHtcbiAgLy8gZ2V0IHRvZGF5cyBkYXRlLCBmb3JtYXQgdG8gWVlZWS1NTS1ERFxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGxldCB0b2RheVN0cmluZyA9IFwiXCI7XG4gIHRvZGF5U3RyaW5nID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKX0tJHtcbiAgICB0b2RheS5nZXRNb250aCgpICsgMSA8IDEwID8gXCIwXCIgOiBcIlwiXG4gIH0ke3RvZGF5LmdldE1vbnRoKCkgKyAxfS0ke3RvZGF5LmdldERhdGUoKX1gO1xuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnRcIik7XG5cbiAgdGFyZ2V0UHJvamVjdC5nZXRUYXNrT2JqZWN0cygpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0ID09PSBcIkR1ZSBUb2RheVwiKSB7XG4gICAgICBpZiAodGFzay5kdWVEYXRlICE9PSB0b2RheVN0cmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZFByb2plY3QgPT09IFwiRHVlIFRoaXMgV2Vla1wiKSB7XG4gICAgICBjb25zdCB0YXNrWWVhciA9IHRhc2suZHVlRGF0ZS5zdWJzdHIoMCwgNCk7XG4gICAgICBsZXQgdGFza01vbnRoID0gdGFzay5kdWVEYXRlLnN1YnN0cig1LCAyKTtcbiAgICAgIGNvbnN0IHRhc2tEYXkgPSB0YXNrLmR1ZURhdGUuc3Vic3RyKDgsIDIpO1xuICAgICAgdGFza01vbnRoID0gdGFza01vbnRoWzBdID09PSBcIjBcIiA/IHRhc2tNb250aFsxXSA6IHRhc2tNb250aDtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFza1llYXIsIHRhc2tNb250aCAtIDEsIHRhc2tEYXkpO1xuICAgICAgY29uc3QgbmV4dFdlZWtEYXRlID0gYWRkRGF5cyhuZXcgRGF0ZSgpLCA2KTsgLy8gMSB3ZWVrIGZyb20gdG9kYXlcblxuICAgICAgLy8gc2tpcCBpZiB0YXNrLmR1ZURhdGUgPiBuZXh0V2Vla1N0cmluZyBlLmcuIG5vdyB1bnRpbCBzZXAgMThcbiAgICAgIGlmIChpc0FmdGVyKHRhc2tEYXRlLCBuZXh0V2Vla0RhdGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3VycmVudFRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFzay50aXRsZSk7XG4gICAgY3VycmVudFRhc2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYHRhc2sgJHt0YXNrLnByaW9yaXR5fWApO1xuXG4gICAgLy8gKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZVN0YXRlKVxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay10aXRsZVwiKTtcbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7dGFzay50aXRsZX0tdGl0bGVgKTtcbiAgICB0YXNrVGl0bGUuaW5uZXJUZXh0ID0gYCR7dGFzay50aXRsZX1gO1xuICAgIHRhc2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY3VycmVudFRhc2tJbmZvTW9kYWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGN1cnJlbnRUYXNrSW5mb01vZGFsLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tJbmZvTW9kYWwodGFzaykpO1xuICAgICAgY3VycmVudFRhc2tJbmZvTW9kYWwuc2hvd01vZGFsKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0YXNrUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tSaWdodC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stcmlnaHRcIik7XG5cbiAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0RldGFpbHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7dGFzay50aXRsZX0tZGV0YWlsc2ApO1xuICAgIHRhc2tEZXRhaWxzLmlubmVyVGV4dCA9IFwiRGV0YWlsc1wiO1xuICAgIC8vIHdoZW4gY2xpY2tlZCBwdWxsIHVwIG1vZHVsZSB3aXRoIHRpdGxlLCBkZXRhaWxzLCBkdWUgZGF0ZSwgZG9uZSBzYXRlLCBwcmlvcml0eVxuXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tEdWVEYXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1kdWUtZGF0ZVwiKTtcbiAgICB0YXNrRHVlRGF0ZS5pbm5lclRleHQgPSBgRHVlOiAke3Rhc2suZHVlRGF0ZX1gO1xuXG4gICAgY29uc3QgdGFza0RvbmVTdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0RvbmVTdGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stZG9uZS1zdGF0ZVwiKTtcbiAgICB0YXNrRG9uZVN0YXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3Rhc2sudGl0bGV9LWRvbmUtc3RhdGVgKTtcbiAgICB0YXNrRG9uZVN0YXRlLmlubmVyVGV4dCA9IHRhc2suZG9uZVN0YXRlID8gXCJEb25lXCIgOiBcIk5vdCBEb25lXCI7XG4gICAgdGFza0RvbmVTdGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICB0YXNrLmRvbmVTdGF0ZSA9ICF0YXNrLmRvbmVTdGF0ZTtcbiAgICAgIC8vIHNhdmUgY2hhbmdlcyB0byBsb2NhbCBzdG9yYWdlXG4gICAgICBzYXZlVG9Mb2NhbCgpO1xuICAgICAgdXBkYXRlQ29udGVudCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZWRpdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWRpdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ1dHRvbi1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgZWRpdEJ1dHRvbi5zcmMgPSBlZGl0SWNvbjtcbiAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3Rhc2sudGl0bGV9LWVkaXRgKTtcbiAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZWRpdCBjbGlja1wiKTtcbiAgICAvLyB3aGVuIGNsaWNrZWQgcHVsbCB1cCBtb2R1bGUgdG8gZWRpdCB0aXRsZSwgZGV0YWlscywgZHVlIGRhdGUsIGRvbmUgc2F0ZSwgcHJpb3JpdHlcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBlZGl0VGFza01vZGFsLnNob3dNb2RhbCgpO1xuICAgICAgY2xlYXJNb2RhbHMoKTtcblxuICAgICAgY3VycmVudFRhc2tPYmplY3QgPSB0YXNrO1xuXG4gICAgICBjb25zdCBlZGl0VGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiI2VkaXQtdGFzay1tb2RhbC1zdWJtaXRcIixcbiAgICAgICk7XG4gICAgICBlZGl0VGFza1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2spO1xuICAgIH0pO1xuXG4gICAgZWRpdENvbnRhaW5lci5hcHBlbmQoZWRpdEJ1dHRvbik7XG5cbiAgICBjb25zdCBkZWxldGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlbGV0ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ1dHRvbi1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICBkZWxldGVCdXR0b24uc3JjID0gZGVsZXRlSWNvbjtcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7dGFzay50aXRsZX0tZGVsZXRlYCk7XG4gICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVsZXRlIGNsaWNrXCIpO1xuICAgIC8vIHdoZW4gY2xpY2tlZCBwdWxsIHVwIG1vZHVsZSB3aXRoIHRpdGxlLCBkZXRhaWxzLCBkdWUgZGF0ZSwgZG9uZSBzdGF0ZSwgcHJpb3JpdHlcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRhcmdldFByb2plY3QucmVtb3ZlVGFzayh0YXNrLnRpdGxlKTtcbiAgICAgIHNhdmVUb0xvY2FsKCk7XG4gICAgICB1cGRhdGVDb250ZW50KCk7XG4gICAgfSk7XG5cbiAgICBkZWxldGVDb250YWluZXIuYXBwZW5kKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICB0YXNrUmlnaHQuYXBwZW5kKHRhc2tEdWVEYXRlKTtcbiAgICB0YXNrUmlnaHQuYXBwZW5kKHRhc2tEb25lU3RhdGUpO1xuICAgIHRhc2tSaWdodC5hcHBlbmQoZWRpdENvbnRhaW5lcik7XG4gICAgdGFza1JpZ2h0LmFwcGVuZChkZWxldGVDb250YWluZXIpO1xuXG4gICAgY3VycmVudFRhc2suYXBwZW5kKHRhc2tUaXRsZSk7XG4gICAgY3VycmVudFRhc2suYXBwZW5kKHRhc2tSaWdodCk7XG5cbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjdXJyZW50VGFzayk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFzaygpIHtcbiAgLy8gZ2V0IGluZm8gZnJvbSBtb2RhbFxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stbW9kYWwtdGl0bGUtaW5wdXRcIik7XG4gIGNvbnN0IGRldGFpbHNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLW1vZGFsLWRldGFpbHMtaW5wdXRcIik7XG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLW1vZGFsLWR1ZWRhdGUtaW5wdXRcIik7XG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2VkaXQtdGFzay1tb2RhbC1wcmlvcml0eS1pbnB1dFwiLFxuICApO1xuICBjb25zdCBkb25lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1tb2RhbC1kb25lLXN0YXRlLWlucHV0XCIpO1xuXG4gIGlmKHRpdGxlSW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGlmKGR1ZURhdGVJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGFkZCBtb2RhbCBkZXRhaWxzIGFzIHRhc2sgdG8gc2VsZWN0ZWQgcHJvamVjdFxuICBjdXJyZW50VGFza09iamVjdC50aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XG4gIGN1cnJlbnRUYXNrT2JqZWN0LmRldGFpbHMgPSBkZXRhaWxzSW5wdXQudmFsdWU7XG4gIGN1cnJlbnRUYXNrT2JqZWN0LmR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XG4gIGN1cnJlbnRUYXNrT2JqZWN0LnByaW9yaXR5ID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcbiAgY3VycmVudFRhc2tPYmplY3QuZG9uZVN0YXRlID0gZG9uZUlucHV0LmNoZWNrZWQ7XG5cbiAgLy8gc2F2ZSBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2VcbiAgc2F2ZVRvTG9jYWwoKTtcblxuICB1cGRhdGVDb250ZW50KCk7XG59XG5cbmZ1bmN0aW9uIHNhdmVUb0xvY2FsKCkge1xuICBjb25zdCBkYXRhID0gW107XG5cbiAgY29uc3QgcHJvamVjdFRpdGxlc0FycmF5ID0gcHJvamVjdExpc3QuaW5mbygpO1xuXG4gIHByb2plY3RUaXRsZXNBcnJheS5mb3JFYWNoKHRpdGxlID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3QodGl0bGUpO1xuXG4gICAgY29uc3QgcHJvamVjdFRhc2tzQXJyYXkgPSBbXTtcblxuICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IGN1cnJlbnRQcm9qZWN0LmdldFRhc2tPYmplY3RzKCk7XG5cbiAgICBwcm9qZWN0VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgIGNvbnN0IHRhc2tTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh0YXNrKTtcbiAgICAgIHByb2plY3RUYXNrc0FycmF5LnB1c2godGFza1N0cmluZyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9kT2JqID0ge1wicHJvamVjdFRpdGxlXCI6dGl0bGUsXCJkYXRhXCI6cHJvamVjdFRhc2tzQXJyYXl9O1xuXG4gICAgZGF0YS5wdXNoKHByb2RPYmopO1xuICB9KTtcblxuICBjb25zdCBkYXRhU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgZGF0YVN0cmluZyk7XG59XG5cbmZ1bmN0aW9uIGxvYWRGcm9tTG9jYWwoKSB7XG4gIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdExpc3QnKTtcblxuICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGRhdGFTdHJpbmcgPSBKU09OLnBhcnNlKGRhdGEpO1xuXG4gIGRhdGFTdHJpbmcuZm9yRWFjaChwcm9qZWN0SXRlbSA9PiB7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdCgnSG9tZScpOyAgLy8gZGVmYXVsdCBob21lXG5cbiAgICAvLyBhZGQgY3VycmVudCBwcm9qZWN0IHRvIHByb2plY3QgbGlzdCBhcnJheVxuICAgIGlmKHByb2plY3RJdGVtLnByb2plY3RUaXRsZSAhPT0gJ0hvbWUnKSB7XG4gICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3QocHJvamVjdEl0ZW0ucHJvamVjdFRpdGxlKTtcblxuICAgICAgcHJvamVjdExpc3QuYWRkUHJvamVjdChjdXJyZW50UHJvamVjdCk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHRhc2tzIHRvIGN1cnJlbnQgcHJvamVjdFxuICAgIHByb2plY3RJdGVtLmRhdGEuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgIGNvbnN0IHRhc2tPYmplY3QgPSBKU09OLnBhcnNlKHRhc2spOyAgLy8gY29udmVydCBzdHJpbmcgdG8gb2JqXG5cbiAgICAgIC8vIGNyZWF0ZSB0YXNrIG91dCBvZiByZXRyaWV2ZWQgdGFzayBvYmplY3RcbiAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRhc2sodGFza09iamVjdC50aXRsZSwgdGFza09iamVjdC5kZXRhaWxzLCB0YXNrT2JqZWN0LmR1ZURhdGUsIFxuICAgICAgICB0YXNrT2JqZWN0LnByaW9yaXR5LCB0YXNrT2JqZWN0LmRvbmVTdGF0ZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBwYWdlSW5pdCwgdXBkYXRlQ29udGVudCwgdXBkYXRlTWVudSwgbG9hZEZyb21Mb2NhbCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXNoYWRvdyAqL1xuLy8gcHJvamVjdHMgbWFzdGVyIGxpc3QgbW9kdWxlIG9iamVjdFxuY29uc3QgcHJvamVjdExpc3QgPSAoKCkgPT4ge1xuICBsZXQgcHJvamVjdExpc3RBcnJheSA9IFtdO1xuXG4gIC8vIGFkZCBuZXcgcHJvamVjdFxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0TGlzdEFycmF5LnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgLy8gcmVtb3ZlIHNwZWNpZmllZCBwcm9qZWN0XG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICAvLyBhcnJheSA9IFt7dGl0bGU6IFwiMVwiLCAuLi59LCB7dGl0bGU6IFwiMlwiLCAuLi59LCB7dGl0bGU6IFwiM1wifV0sIHJlbW92ZSBcIjFcIiBvYmplY3RcbiAgICBwcm9qZWN0TGlzdEFycmF5ID0gcHJvamVjdExpc3RBcnJheS5maWx0ZXIoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSAhPT0gdGl0bGUsXG4gICAgKTtcbiAgfTtcblxuICAvLyByZXR1cm5zIHRpdGxlcyBvZiBlYWNoIHByb2plY3QgaW4gYW4gYXJyYXlcbiAgY29uc3QgaW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVzQXJyYXkgPSBbXTtcbiAgICBwcm9qZWN0TGlzdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3RUaXRsZXNBcnJheS5wdXNoKHByb2plY3QudGl0bGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3RUaXRsZXNBcnJheTtcbiAgfTtcblxuICAvLyByZXR1cm5zIHByb2plY3Qgb2JqZWN0IG9mIHNwZWNpZmllZCB0aXRsZSBmcm9tIGxpc3RcbiAgY29uc3QgZ2V0UHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldFByb2plY3QgPSBwcm9qZWN0TGlzdEFycmF5LmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gdGl0bGUsXG4gICAgKTtcbiAgICByZXR1cm4gdGFyZ2V0UHJvamVjdDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBpbmZvLFxuICAgIGdldFByb2plY3QsXG4gIH07XG59KSgpO1xuXG4vLyBwcm9qZWN0IGZhY3Rvcnkgb2JqZWN0XG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gIGxldCB0YXNrc0xpc3QgPSBbXTtcblxuICBjb25zdCBhZGRUYXNrID0gKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZVN0YXRlKSA9PiB7XG4gICAgdGFza3NMaXN0LnB1c2godGFzayh0aXRsZSwgZGV0YWlscywgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmVTdGF0ZSkpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSAodGl0bGUpID0+IHtcbiAgICB0YXNrc0xpc3QgPSB0YXNrc0xpc3QuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRpdGxlICE9PSB0aXRsZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFzayA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldFRhc2sgPSB0YXNrc0xpc3QuZmluZCgodGFzaykgPT4gdGFzay50aXRsZSA9PT0gdGl0bGUpO1xuICAgIHJldHVybiB0YXJnZXRUYXNrO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2tPYmplY3RzID0gKCkgPT4gdGFza3NMaXN0O1xuXG4gIHJldHVybiB7XG4gICAgYWRkVGFzayxcbiAgICByZW1vdmVUYXNrLFxuICAgIGdldFRhc2ssXG4gICAgZ2V0VGFza09iamVjdHMsXG4gICAgdGl0bGUsXG4gIH07XG59O1xuXG4vLyB0YXNrIGZhY3Rvcnkgb2JqZWN0XG5jb25zdCB0YXNrID0gKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZVN0YXRlID0gZmFsc2UpID0+ICh7XG4gICAgdGl0bGUsXG4gICAgZGV0YWlscyxcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGRvbmVTdGF0ZSxcbiAgfSk7XG5cbmV4cG9ydCB7IHByb2plY3RMaXN0LCBwcm9qZWN0IH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgeyBwYWdlSW5pdCwgdXBkYXRlQ29udGVudCwgdXBkYXRlTWVudSwgbG9hZEZyb21Mb2NhbCB9IGZyb20gXCIuL2NvbnRhaW5lclwiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VJbml0KCkpO1xuXG4vLyBncmFiIGFueSBleGlzaXRuZyBsb2NhbCBzdG9yYWdlXG5sb2FkRnJvbUxvY2FsKCk7XG5cbi8vIHVwZGF0ZSBET00gd2l0aCBleGlzaXRuZyBkYXRhXG51cGRhdGVDb250ZW50KCk7XG51cGRhdGVNZW51KCk7IiwiaW1wb3J0IGV4aXRNb2RhbCBmcm9tIFwiLi9pbWFnZXMvZXhpdEJ1dHRvbi5wbmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlQWRkVGFza01vZGFsKCkge1xuICBjb25zdCBhZGRUYXNrTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICBhZGRUYXNrTW9kYWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFzay1tb2RhbFwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9kYWxUaXRsZVwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gXCJBZGQgVGFza1wiO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJkaWFsb2dcIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFzay1mb3JtXCIpO1xuXG4gIGNvbnN0IHRpdGxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVSb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkaWFsb2dSb3dcIik7XG5cbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLW1vZGFsLXRpdGxlLWlucHV0XCIpO1xuICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9IFwiVGl0bGU6XCI7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stbW9kYWwtdGl0bGUtaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMTdcIik7XG4gIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gIHRpdGxlUm93LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICB0aXRsZVJvdy5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBjb25zdCBkZXRhaWxzUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGV0YWlsc1Jvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpYWxvZ1Jvd1wiKTtcblxuICBjb25zdCBkZXRhaWxzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGRldGFpbHNMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLW1vZGFsLWRldGFpbHMtaW5wdXRcIik7XG4gIGRldGFpbHNMYWJlbC5pbm5lclRleHQgPSBcIkRldGFpbHM6XCI7XG5cbiAgY29uc3QgZGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZXRhaWxzSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLW1vZGFsLWRldGFpbHMtaW5wdXRcIik7XG4gIGRldGFpbHNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuICBkZXRhaWxzUm93LmFwcGVuZENoaWxkKGRldGFpbHNMYWJlbCk7XG4gIGRldGFpbHNSb3cuYXBwZW5kQ2hpbGQoZGV0YWlsc0lucHV0KTtcblxuICBjb25zdCBkdWVEYXRlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHVlRGF0ZVJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpYWxvZ1Jvd1wiKTtcblxuICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLW1vZGFsLWR1ZWRhdGUtaW5wdXRcIik7XG4gIGR1ZURhdGVMYWJlbC5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOlwiO1xuXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1tb2RhbC1kdWVkYXRlLWlucHV0XCIpO1xuICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgZHVlRGF0ZVJvdy5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICBkdWVEYXRlUm93LmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbiAgY29uc3QgcHJpb3JpdHlSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmlvcml0eVJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpYWxvZ1Jvd1wiKTtcblxuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stbW9kYWwtcHJpb3JpdHktaW5wdXRcIik7XG4gIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTpcIjtcblxuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stbW9kYWwtcHJpb3JpdHktaW5wdXRcIik7XG4gIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuXG4gIGNvbnN0IGhpZ2hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBoaWdoT3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSGlnaFwiKTtcbiAgaGlnaE9wdGlvbi5pbm5lclRleHQgPSBcIkhpZ2hcIjtcblxuICBjb25zdCBtZWRpdW1PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBtZWRpdW1PcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNZWRpdW1cIik7XG4gIG1lZGl1bU9wdGlvbi5pbm5lclRleHQgPSBcIk1lZGl1bVwiO1xuXG4gIGNvbnN0IGxvd09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGxvd09wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxvd1wiKTtcbiAgbG93T3B0aW9uLmlubmVyVGV4dCA9IFwiTG93XCI7XG5cbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChoaWdoT3B0aW9uKTtcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChtZWRpdW1PcHRpb24pO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGxvd09wdGlvbik7XG5cbiAgcHJpb3JpdHlSb3cuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gIHByaW9yaXR5Um93LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuXG4gIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZXJyb3Iuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlcnJvclwiKTtcblxuICBjb25zdCBzdWJtaXRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdWJtaXRSb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkaWFsb2dSb3dcIik7XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3VibWl0QnV0dG9uXCIpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLW1vZGFsLXN1Ym1pdFwiKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi5pbm5lckhUTUwgPSBcInN1Ym1pdFwiO1xuICBzdWJtaXRSb3cuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlUm93KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXRhaWxzUm93KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlUm93KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eVJvdyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZXJyb3IpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFJvdyk7XG5cbiAgYWRkVGFza01vZGFsLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgYWRkVGFza01vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIHJldHVybiBhZGRUYXNrTW9kYWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZFByb2plY3RNb2RhbCgpIHtcbiAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgYWRkUHJvamVjdE1vZGFsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXByb2plY3QtbW9kYWxcIik7XG5cbiAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb2RhbFRpdGxlXCIpO1xuICBtb2RhbFRpdGxlLmlubmVyVGV4dCA9IFwiQWRkIFByb2plY3RcIjtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwiZGlhbG9nXCIpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXByb2plY3QtZm9ybVwiKTtcblxuICBjb25zdCByb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcm93MS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpYWxvZ1Jvd1wiKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3QtbW9kYWwtdGl0bGUtaW5wdXRcIik7XG4gIHRpdGxlTGFiZWwuaW5uZXJUZXh0ID0gXCJUaXRsZTpcIjtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1tb2RhbC10aXRsZS1pbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgcm93MS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgcm93MS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVycm9yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZXJyb3JcIik7XG4gIGVycm9yLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1tb2RhbC1lcnJvclwiKTtcblxuICBjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcm93Mi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpYWxvZ1Jvd1wiKTtcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdWJtaXRCdXR0b25cIik7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtbW9kYWwtc3VibWl0XCIpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0QnV0dG9uLmlubmVyVGV4dCA9IFwiU3VibWl0XCI7XG5cbiAgcm93Mi5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQocm93MSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZXJyb3IpO1xuICBmb3JtLmFwcGVuZENoaWxkKHJvdzIpO1xuXG4gIGFkZFByb2plY3RNb2RhbC5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKTtcbiAgYWRkUHJvamVjdE1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIC8vIHZhbGlkYXRlIGZvcm0gaW5wdXRzIH5+fn5+fn5+fn5+fn5+fn5+fn5+fiBETyBMQVRFUlxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAvLyBhbHNvIGNoZWNrIGlmIGl0IGFscmVhZHkgZXhpc3RzXG5cbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgLy8gZXJyb3IuaW5uZXJUZXh0ID0gXCJFUlJPUjogVGl0bGUgY2FuIG5vdCBiZSBibGFua1wiO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGFkZFByb2plY3RNb2RhbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0luZm9Nb2RhbCh0YXNrKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWluZm8tZm9ybVwiKTtcblxuICBjb25zdCB0aXRsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlUm93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGUtcm93XCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWluZm8tbW9kYWwtdGl0bGVcIik7XG4gIHRpdGxlLmlubmVyVGV4dCA9IHRhc2sudGl0bGU7XG5cbiAgY29uc3QgZXhpdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGV4aXRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJleGl0LWJ1dHRvbi1jb250YWluZXJcIik7XG4gIGV4aXRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZm9ybW1ldGhvZFwiLCBcImRpYWxvZ1wiKTtcblxuICBjb25zdCBleGl0ID0gbmV3IEltYWdlKCk7XG4gIGV4aXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJleGl0LWJ1dHRvblwiKTtcbiAgZXhpdC5zcmMgPSBleGl0TW9kYWw7XG5cbiAgZXhpdENvbnRhaW5lci5hcHBlbmRDaGlsZChleGl0KTtcblxuICB0aXRsZVJvdy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHRpdGxlUm93LmFwcGVuZENoaWxkKGV4aXRDb250YWluZXIpO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1pbmZvLW1vZGFsLWR1ZS1kYXRlXCIpO1xuICBkdWVEYXRlLmlubmVyVGV4dCA9IGBEdWUgRGF0ZTogJHt0YXNrLmR1ZURhdGV9YDtcblxuICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2staW5mby1tb2RhbC1kZXRhaWxzXCIpO1xuICBkZXRhaWxzLmlubmVyVGV4dCA9IGBEZXRhaWxzOiAke3Rhc2suZGV0YWlsc31gO1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWluZm8tbW9kYWwtcHJpb3JpdHlcIik7XG4gIHByaW9yaXR5LmlubmVyVGV4dCA9IGBQcmlvcml0eTogJHt0YXNrLnByaW9yaXR5fWA7XG5cbiAgY29uc3QgZG9uZVN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZG9uZVN0YXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1pbmZvLW1vZGFsLWRvbmUtc3RhdGVcIik7XG4gIGRvbmVTdGF0ZS5pbm5lclRleHQgPSB0YXNrLmRvbmVTdGF0ZSA/IFwiRG9uZVwiIDogXCJOb3QgRG9uZVwiO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZVJvdyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9uZVN0YXRlKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjbGVhck1vZGFscygpIHtcbiAgLy8gYWRkIHByb2plY3QgbW9kYWxcbiAgY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3Byb2plY3QtbW9kYWwtdGl0bGUtaW5wdXRcIixcbiAgKTtcbiAgcHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPSBcIlwiO1xuXG4gIC8vIGFkZCB0YXNrIG1vZGFsXG4gIGNvbnN0IGFkZFRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW1vZGFsLXRpdGxlLWlucHV0XCIpO1xuICBhZGRUYXNrVGl0bGVJbnB1dC52YWx1ZSA9IFwiXCI7XG5cbiAgY29uc3QgYWRkVGFza0RldGFpbHNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjdGFzay1tb2RhbC1kZXRhaWxzLWlucHV0XCIsXG4gICk7XG4gIGFkZFRhc2tEZXRhaWxzSW5wdXQudmFsdWUgPSBcIlwiO1xuXG4gIC8vIGdldCB0b2RheXMgZGF0ZSwgZm9ybWF0IHRvIFlZWVktTU0tRERcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBsZXQgdG9kYXlTdHJpbmcgPSBcIlwiO1xuICB0b2RheVN0cmluZyA9IGAke3RvZGF5LmdldEZ1bGxZZWFyKCl9LSR7XG4gICAgdG9kYXkuZ2V0TW9udGgoKSArIDEgPCAxMCA/IFwiMFwiIDogXCJcIlxuICB9JHt0b2RheS5nZXRNb250aCgpICsgMX0tJHt0b2RheS5nZXREYXRlKCl9YDtcblxuICBjb25zdCBhZGRUYXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiN0YXNrLW1vZGFsLWR1ZWRhdGUtaW5wdXRcIixcbiAgKTtcbiAgYWRkVGFza0R1ZURhdGVJbnB1dC52YWx1ZSA9IHRvZGF5U3RyaW5nO1xuXG4gIGNvbnN0IGFkZFRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiN0YXNrLW1vZGFsLXByaW9yaXR5LWlucHV0XCIsXG4gICk7XG4gIGFkZFRhc2tQcmlvcml0eUlucHV0LnZhbHVlID0gXCJMb3dcIjtcblxuICAvLyBlZGl0IHRhc2sgbW9kYWxcbiAgY29uc3QgZWRpdFRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNlZGl0LXRhc2stbW9kYWwtdGl0bGUtaW5wdXRcIixcbiAgKTtcbiAgZWRpdFRhc2tUaXRsZUlucHV0LnZhbHVlID0gXCJcIjtcblxuICBjb25zdCBlZGl0VGFza0RldGFpbHNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjZWRpdC10YXNrLW1vZGFsLWRldGFpbHMtaW5wdXRcIixcbiAgKTtcbiAgZWRpdFRhc2tEZXRhaWxzSW5wdXQudmFsdWUgPSBcIlwiO1xuXG4gIGNvbnN0IGVkaXRUYXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNlZGl0LXRhc2stbW9kYWwtZHVlZGF0ZS1pbnB1dFwiLFxuICApO1xuICAvLyBZWVlZLU1NLUREXG4gIGVkaXRUYXNrRHVlRGF0ZUlucHV0LnZhbHVlID0gdG9kYXlTdHJpbmc7XG5cbiAgY29uc3QgZWRpdFRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNlZGl0LXRhc2stbW9kYWwtcHJpb3JpdHktaW5wdXRcIixcbiAgKTtcbiAgZWRpdFRhc2tQcmlvcml0eUlucHV0LnZhbHVlID0gXCJMb3dcIjtcblxuICBjb25zdCBlZGl0VGFza0RvbmVTdGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNlZGl0LXRhc2stbW9kYWwtcHJpb3JpdHktaW5wdXRcIixcbiAgKTtcbiAgZWRpdFRhc2tEb25lU3RhdGVJbnB1dC5jaGVja2VkID0gXCJmYWxzZVwiO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFZGl0VGFza01vZGFsKCkge1xuICBjb25zdCBlZGl0VGFza01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgZWRpdFRhc2tNb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtdGFzay1tb2RhbFwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9kYWxUaXRsZVwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gXCJFZGl0IFRhc2tcIjtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwiZGlhbG9nXCIpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC10YXNrLWZvcm1cIik7XG5cbiAgY29uc3QgdGl0bGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZVJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpYWxvZ1Jvd1wiKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVkaXQtdGFzay1tb2RhbC10aXRsZS1pbnB1dFwiKTtcbiAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSBcIlRpdGxlOlwiO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LXRhc2stbW9kYWwtdGl0bGUtaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMTdcIik7XG4gIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gIHRpdGxlUm93LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICB0aXRsZVJvdy5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBjb25zdCBkZXRhaWxzUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGV0YWlsc1Jvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpYWxvZ1Jvd1wiKTtcblxuICBjb25zdCBkZXRhaWxzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGRldGFpbHNMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlZGl0LXRhc2stbW9kYWwtZGV0YWlscy1pbnB1dFwiKTtcbiAgZGV0YWlsc0xhYmVsLmlubmVyVGV4dCA9IFwiRGV0YWlsczpcIjtcblxuICBjb25zdCBkZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRldGFpbHNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtdGFzay1tb2RhbC1kZXRhaWxzLWlucHV0XCIpO1xuICBkZXRhaWxzSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgZGV0YWlsc1Jvdy5hcHBlbmRDaGlsZChkZXRhaWxzTGFiZWwpO1xuICBkZXRhaWxzUm93LmFwcGVuZENoaWxkKGRldGFpbHNJbnB1dCk7XG5cbiAgY29uc3QgZHVlRGF0ZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGR1ZURhdGVSb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkaWFsb2dSb3dcIik7XG5cbiAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZWRpdC10YXNrLW1vZGFsLWR1ZWRhdGUtaW5wdXRcIik7XG4gIGR1ZURhdGVMYWJlbC5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOlwiO1xuXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC10YXNrLW1vZGFsLWR1ZWRhdGUtaW5wdXRcIik7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICBkdWVEYXRlUm93LmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gIGR1ZURhdGVSb3cuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICBjb25zdCBwcmlvcml0eVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByaW9yaXR5Um93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGlhbG9nUm93XCIpO1xuXG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZWRpdC10YXNrLW1vZGFsLXByaW9yaXR5LWlucHV0XCIpO1xuICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9IFwiUHJpb3JpdHk6XCI7XG5cbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LXRhc2stbW9kYWwtcHJpb3JpdHktaW5wdXRcIik7XG4gIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuXG4gIGNvbnN0IGhpZ2hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBoaWdoT3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSGlnaFwiKTtcbiAgaGlnaE9wdGlvbi5pbm5lclRleHQgPSBcIkhpZ2hcIjtcblxuICBjb25zdCBtZWRpdW1PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBtZWRpdW1PcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNZWRpdW1cIik7XG4gIG1lZGl1bU9wdGlvbi5pbm5lclRleHQgPSBcIk1lZGl1bVwiO1xuXG4gIGNvbnN0IGxvd09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGxvd09wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxvd1wiKTtcbiAgbG93T3B0aW9uLmlubmVyVGV4dCA9IFwiTG93XCI7XG5cbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChoaWdoT3B0aW9uKTtcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChtZWRpdW1PcHRpb24pO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGxvd09wdGlvbik7XG5cbiAgY29uc3QgZG9uZVN0YXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGRvbmVTdGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVkaXQtdGFzay1tb2RhbC1kb25lLXN0YXRlLWlucHV0XCIpO1xuICBkb25lU3RhdGVMYWJlbC5pbm5lclRleHQgPSBcIkRvbmU/XCI7XG5cbiAgY29uc3QgZG9uZVN0YXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRvbmVTdGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC10YXNrLW1vZGFsLWRvbmUtc3RhdGUtaW5wdXRcIik7XG4gIGRvbmVTdGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcblxuICBwcmlvcml0eVJvdy5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgcHJpb3JpdHlSb3cuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gIHByaW9yaXR5Um93LmFwcGVuZENoaWxkKGRvbmVTdGF0ZUxhYmVsKTtcbiAgcHJpb3JpdHlSb3cuYXBwZW5kQ2hpbGQoZG9uZVN0YXRlSW5wdXQpO1xuXG4gIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZXJyb3Iuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlcnJvclwiKTtcblxuICBjb25zdCBzdWJtaXRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdWJtaXRSb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkaWFsb2dSb3dcIik7XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3VibWl0QnV0dG9uXCIpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LXRhc2stbW9kYWwtc3VibWl0XCIpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0QnV0dG9uLmlubmVySFRNTCA9IFwic3VibWl0XCI7XG4gIHN1Ym1pdFJvdy5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVSb3cpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRldGFpbHNSb3cpO1xuICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVSb3cpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5Um93KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChlcnJvcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0Um93KTtcblxuICBlZGl0VGFza01vZGFsLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgZWRpdFRhc2tNb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICByZXR1cm4gZWRpdFRhc2tNb2RhbDtcbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlQWRkVGFza01vZGFsLFxuICBjbGVhck1vZGFscyxcbiAgY3JlYXRlQWRkUHJvamVjdE1vZGFsLFxuICBjcmVhdGVUYXNrSW5mb01vZGFsLFxuICBjcmVhdGVFZGl0VGFza01vZGFsLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9