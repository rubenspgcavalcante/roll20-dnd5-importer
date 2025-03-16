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
var logger = function (level) {
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
    log("[dnd5-importer][".concat(level.toUpperCase(), "]:").concat(args.reduce(function (prev, curr) { return "".concat(prev, " ").concat(stringfy(curr)); }, '')));
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
    (0,_helpers_logger__WEBPACK_IMPORTED_MODULE_0__.logger)('info', options);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxPQUFPLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JvbGwyMC1kbmQ1LWltcG9ydGVyLy4vc3JjL2hlbHBlcnMvbG9nZ2VyLnRzIiwid2VicGFjazovL3JvbGwyMC1kbmQ1LWltcG9ydGVyLy4vc3JjL2hlbHBlcnMvcGFyc2VPcHRpb25zLnRzIiwid2VicGFjazovL3JvbGwyMC1kbmQ1LWltcG9ydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JvbGwyMC1kbmQ1LWltcG9ydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yb2xsMjAtZG5kNS1pbXBvcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JvbGwyMC1kbmQ1LWltcG9ydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcm9sbDIwLWRuZDUtaW1wb3J0ZXIvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsidHlwZSBMb2dMZXZlbCA9ICdsb2cnIHwgJ2luZm8nIHwgJ3dhcm4nIHwgJ2Vycm9yJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dnZXIgPSAobGV2ZWw6IExvZ0xldmVsLCAuLi5hcmdzOiBQYXJhbWV0ZXJzPHR5cGVvZiBsb2c+KSA9PiB7XHJcbiAgY29uc3Qgc3RyaW5nZnkgPSAodmFsOiBhbnkpID0+IHtcclxuICAgIC8vIEVycm9yc1xyXG4gICAgaWYgKHZhbD8ubWVzc2FnZSkge1xyXG4gICAgICByZXR1cm4gdmFsLm1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2VuZXJpYyBSZWNvcmRzXHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbCwgbnVsbCwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3RoZXIgcHJpbWl0aXZlc1xyXG4gICAgaWYgKHZhbD8udG9TdHJpbmcpIHtcclxuICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExhc3QgcmVzb3J0XHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH07XHJcblxyXG4gIGxvZyhcclxuICAgIGBbZG5kNS1pbXBvcnRlcl1bJHtsZXZlbC50b1VwcGVyQ2FzZSgpfV06JHthcmdzLnJlZHVjZSgocHJldiwgY3VycikgPT4gYCR7cHJldn0gJHtzdHJpbmdmeShjdXJyKX1gLCAnJyl9YFxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcblxudHlwZSBPcHRpb25WYWx1ZU1hcCA9IHtcbiAganNvbjogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGhlbHA6IG5ldmVyO1xufTtcblxudHlwZSBPcHRpb25zID0ga2V5b2YgT3B0aW9uVmFsdWVNYXA7XG5cbmV4cG9ydCB0eXBlIEFQSU1lc3NhZ2VDYWxsID0gYCFkbmQ1LWltcG9ydGVyIC0tJHtPcHRpb25zfSAke3N0cmluZ31gO1xuXG5jb25zdCBvcHRpb25zUmVnRXhwID0gL1xcIWRuZDVcXC1pbXBvcnRlciBcXC1cXC0oLispXFwgKFxcey4qXFx9KS87XG5cbmV4cG9ydCBjb25zdCBwYXJzZU9wdGlvbnMgPSAobXNnQ29udGVudDogQVBJTWVzc2FnZUNhbGwpID0+IHtcbiAgaWYgKCFvcHRpb25zUmVnRXhwLnRlc3QobXNnQ29udGVudCkpIHtcbiAgICBsb2dnZXIoJ2luZm8nLCBtc2dDb250ZW50LCAnZG9lcyBub3QgbWF0Y2ggdGhlIEFQSScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgW18sIG9wdGlvbiwgdmFsdWVdID0gbXNnQ29udGVudC5tYXRjaChvcHRpb25zUmVnRXhwKTtcbiAgICByZXR1cm4geyBbb3B0aW9uXTogSlNPTi5wYXJzZSh2YWx1ZSkgYXMgT3B0aW9uVmFsdWVNYXBbT3B0aW9uc10gfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dnZXIoJ2Vycm9yJywgZXJyb3IpO1xuICB9XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL2hlbHBlcnMvbG9nZ2VyJztcbmltcG9ydCB7IEFQSU1lc3NhZ2VDYWxsLCBwYXJzZU9wdGlvbnMgfSBmcm9tICcuL2hlbHBlcnMvcGFyc2VPcHRpb25zJztcblxub24oJ3JlYWR5JywgKCkgPT4ge1xuICBsb2coJ0hlbGxvIFJvbGwyMCcpO1xufSk7XG5cbm9uKCdjaGF0Om1lc3NhZ2UnLCAobXNnKSA9PiB7XG4gIGlmIChtc2cudHlwZSAhPT0gJ2FwaScpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0gcGFyc2VPcHRpb25zKG1zZy5jb250ZW50IGFzIEFQSU1lc3NhZ2VDYWxsKTtcbiAgbG9nZ2VyKCdpbmZvJywgb3B0aW9ucyk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==