/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../stage\u0000#1/project/gers23-local/virtual_keyboard/src/js/HTML.js":
/*!*********************************************************************************!*\
  !*** ../../../../stage #1/project/gers23-local/virtual_keyboard/src/js/HTML.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTML": () => (/* binding */ HTML)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var HTML = /*#__PURE__*/function () {
  function HTML() {
    _classCallCheck(this, HTML);
  }

  _createClass(HTML, [{
    key: "generateHTMLpage",
    value: function generateHTMLpage() {
      var preTemplate = '';
      var afterTemplate = '';
      var div = document.createElement('div');
      div.className = 'wrapper';
      var divKeyboard = document.createElement('div');
      divKeyboard.className = 'keyboard';
      preTemplate += "<h1>RSS Virtual Keyboard</h1>";
      preTemplate += "<textarea class= 'textarea'></textarea>";
      afterTemplate += "<p>The keyboard is created in the operating system Windows.</p>";
      afterTemplate += "<p>Language switching is carried out by a key combination: </p>";
      div.innerHTML = preTemplate;
      div.append(divKeyboard);
      div.insertAdjacentHTML('beforeend', afterTemplate);
      return div;
    }
  }]);

  return HTML;
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************************************************!*\
  !*** ../../../../stage #1/project/gers23-local/virtual_keyboard/src/index.js ***!
  \*******************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_HTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/HTML */ "../../../../stage\u0000#1/project/gers23-local/virtual_keyboard/src/js/HTML.js");


window.onload = function () {
  console.log('welcome to the world');
  renderHTMLToDOM();
};

function renderHTMLToDOM() {
  var page = new _js_HTML__WEBPACK_IMPORTED_MODULE_0__.HTML();
  document.body.append(page.generateHTMLpage());
}
})();

/******/ })()
;
//# sourceMappingURL=script.js.map