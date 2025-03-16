/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/logger.ts":
/*!*******************************!*\
  !*** ./src/helpers/logger.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logger: () => (/* binding */ logger)
/* harmony export */ });
var logger = function (type) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var stringfy = function (val) {
        // Errors
        if (val === null || val === void 0 ? void 0 : val.message) {
            return val.message;
        }
        // Generic Records
        if (typeof val === 'object') {
            return JSON.stringify(val, null, 2);
        }
        // Other primitives
        if (val === null || val === void 0 ? void 0 : val.toString) {
            return val.toString();
        }
        // Last resort
        return val;
    };
    var tag = "[dnd5-importer]";
    var message = "".concat(args.reduce(function (prev, curr) { return "".concat(prev, " ").concat(stringfy(curr)); }, ''));
    if (type === 'chat') {
        sendChat(tag, message);
        return;
    }
    log("".concat(tag, "[").concat(type.toUpperCase(), "]:").concat(message));
};


/***/ }),

/***/ "./src/helpers/parseOptions.ts":
/*!*************************************!*\
  !*** ./src/helpers/parseOptions.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseOptions: () => (/* binding */ parseOptions)
/* harmony export */ });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./src/helpers/logger.ts");

var optionsRegExp = /\!dnd5\-importer \-\-(.+)\ (\{.*\})/;
var parseOptions = function (msgContent) {
    var _a;
    if (!optionsRegExp.test(msgContent)) {
        (0,_logger__WEBPACK_IMPORTED_MODULE_0__.logger)('info', msgContent, 'does not match the API');
        return;
    }
    try {
        var _b = msgContent.match(optionsRegExp), _ = _b[0], option = _b[1], value = _b[2];
        return _a = {}, _a[option] = JSON.parse(value), _a;
    }
    catch (error) {
        (0,_logger__WEBPACK_IMPORTED_MODULE_0__.logger)('error', error);
    }
};


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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/logger */ "./src/helpers/logger.ts");
/* harmony import */ var _helpers_parseOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/parseOptions */ "./src/helpers/parseOptions.ts");


on('ready', function () {
    log('Hello Roll20');
});
on('chat:message', function (msg) {
    if (msg.type !== 'api') {
        return;
    }
    var options = (0,_helpers_parseOptions__WEBPACK_IMPORTED_MODULE_1__.parseOptions)(msg.content);
    (0,_helpers_logger__WEBPACK_IMPORTED_MODULE_0__.logger)('chat', 'parsing JSON:', options.json);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFDLEdBQUc7SUFDckIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLE9BQU87SUFDVCxDQUFDO0lBRUQsSUFBTSxPQUFPLEdBQUcsbUVBQVksQ0FBQyxHQUFHLENBQUMsT0FBeUIsQ0FBQyxDQUFDO0lBQzVELHVEQUFNLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2xsMjAtZG5kNS1pbXBvcnRlci8uL3NyYy9oZWxwZXJzL2xvZ2dlci50cyIsIndlYnBhY2s6Ly9yb2xsMjAtZG5kNS1pbXBvcnRlci8uL3NyYy9oZWxwZXJzL3BhcnNlT3B0aW9ucy50cyIsIndlYnBhY2s6Ly9yb2xsMjAtZG5kNS1pbXBvcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb2xsMjAtZG5kNS1pbXBvcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcm9sbDIwLWRuZDUtaW1wb3J0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yb2xsMjAtZG5kNS1pbXBvcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JvbGwyMC1kbmQ1LWltcG9ydGVyLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgTG9nVHlwZSA9ICdjaGF0JyB8ICdsb2cnIHwgJ2luZm8nIHwgJ3dhcm4nIHwgJ2Vycm9yJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dnZXIgPSAodHlwZTogTG9nVHlwZSwgLi4uYXJnczogUGFyYW1ldGVyczx0eXBlb2YgbG9nPikgPT4ge1xyXG4gIGNvbnN0IHN0cmluZ2Z5ID0gKHZhbDogYW55KSA9PiB7XHJcbiAgICAvLyBFcnJvcnNcclxuICAgIGlmICh2YWw/Lm1lc3NhZ2UpIHtcclxuICAgICAgcmV0dXJuIHZhbC5tZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdlbmVyaWMgUmVjb3Jkc1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWwsIG51bGwsIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE90aGVyIHByaW1pdGl2ZXNcclxuICAgIGlmICh2YWw/LnRvU3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMYXN0IHJlc29ydFxyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9O1xyXG5cclxuICBjb25zdCB0YWcgPSBgW2RuZDUtaW1wb3J0ZXJdYDtcclxuICBjb25zdCBtZXNzYWdlID0gYCR7YXJncy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IGAke3ByZXZ9ICR7c3RyaW5nZnkoY3Vycil9YCwgJycpfWA7XHJcblxyXG4gIGlmICh0eXBlID09PSAnY2hhdCcpIHtcclxuICAgIHNlbmRDaGF0KHRhZywgbWVzc2FnZSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsb2coYCR7dGFnfVske3R5cGUudG9VcHBlckNhc2UoKX1dOiR7bWVzc2FnZX1gKTtcclxufTtcclxuIiwiaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuXG50eXBlIE9wdGlvblZhbHVlTWFwID0ge1xuICBqc29uOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgaGVscDogbmV2ZXI7XG59O1xuXG50eXBlIE9wdGlvbnMgPSBrZXlvZiBPcHRpb25WYWx1ZU1hcDtcblxuZXhwb3J0IHR5cGUgQVBJTWVzc2FnZUNhbGwgPSBgIWRuZDUtaW1wb3J0ZXIgLS0ke09wdGlvbnN9ICR7c3RyaW5nfWA7XG5cbmNvbnN0IG9wdGlvbnNSZWdFeHAgPSAvXFwhZG5kNVxcLWltcG9ydGVyIFxcLVxcLSguKylcXCAoXFx7LipcXH0pLztcblxuZXhwb3J0IGNvbnN0IHBhcnNlT3B0aW9ucyA9IChtc2dDb250ZW50OiBBUElNZXNzYWdlQ2FsbCkgPT4ge1xuICBpZiAoIW9wdGlvbnNSZWdFeHAudGVzdChtc2dDb250ZW50KSkge1xuICAgIGxvZ2dlcignaW5mbycsIG1zZ0NvbnRlbnQsICdkb2VzIG5vdCBtYXRjaCB0aGUgQVBJJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBbXywgb3B0aW9uLCB2YWx1ZV0gPSBtc2dDb250ZW50Lm1hdGNoKG9wdGlvbnNSZWdFeHApO1xuICAgIHJldHVybiB7IFtvcHRpb25dOiBKU09OLnBhcnNlKHZhbHVlKSBhcyBPcHRpb25WYWx1ZU1hcFtPcHRpb25zXSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ2dlcignZXJyb3InLCBlcnJvcik7XG4gIH1cbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vaGVscGVycy9sb2dnZXInO1xuaW1wb3J0IHsgQVBJTWVzc2FnZUNhbGwsIHBhcnNlT3B0aW9ucyB9IGZyb20gJy4vaGVscGVycy9wYXJzZU9wdGlvbnMnO1xuXG5vbigncmVhZHknLCAoKSA9PiB7XG4gIGxvZygnSGVsbG8gUm9sbDIwJyk7XG59KTtcblxub24oJ2NoYXQ6bWVzc2FnZScsIChtc2cpID0+IHtcbiAgaWYgKG1zZy50eXBlICE9PSAnYXBpJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBwYXJzZU9wdGlvbnMobXNnLmNvbnRlbnQgYXMgQVBJTWVzc2FnZUNhbGwpO1xuICBsb2dnZXIoJ2NoYXQnLCAncGFyc2luZyBKU09OOicsIG9wdGlvbnMuanNvbik7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==