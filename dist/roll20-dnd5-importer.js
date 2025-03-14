/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
on("ready", function () {
    log("Hello Roll20");
});
on("chat:message", function (msg) {
    if (msg.type === "rollresult") {
        var contentRoll = JSON.parse(msg.content);
        log("The roll of a ".concat(msg.origRoll, " was: ").concat(contentRoll.total));
    }
    log("General message: ".concat(msg.content));
});


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sbDIwLWRuZDUtaW1wb3J0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7O0FDSkEsRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNWLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUMsQ0FBQztBQUVILEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBQyxHQUFHO0lBQ3JCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUUsQ0FBQztRQUM5QixJQUFNLFdBQVcsR0FBMkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEUsR0FBRyxDQUFDLHdCQUFpQixHQUFHLENBQUMsUUFBUSxtQkFBUyxXQUFXLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsR0FBRyxDQUFDLDJCQUFvQixHQUFHLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JvbGwyMC1kbmQ1LWltcG9ydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JvbGwyMC1kbmQ1LWltcG9ydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcm9sbDIwLWRuZDUtaW1wb3J0ZXIvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFJvbGxNZXNzYWdlSlNPTkNvbnRlbnQgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxub24oXCJyZWFkeVwiLCAoKSA9PiB7XHJcbiAgbG9nKFwiSGVsbG8gUm9sbDIwXCIpO1xyXG59KTtcclxuXHJcbm9uKFwiY2hhdDptZXNzYWdlXCIsIChtc2cpID0+IHtcclxuICBpZiAobXNnLnR5cGUgPT09IFwicm9sbHJlc3VsdFwiKSB7XHJcbiAgICBjb25zdCBjb250ZW50Um9sbDogUm9sbE1lc3NhZ2VKU09OQ29udGVudCA9IEpTT04ucGFyc2UobXNnLmNvbnRlbnQpO1xyXG4gICAgbG9nKGBUaGUgcm9sbCBvZiBhICR7bXNnLm9yaWdSb2xsfSB3YXM6ICR7Y29udGVudFJvbGwudG90YWx9YCk7XHJcbiAgfVxyXG5cclxuICBsb2coYEdlbmVyYWwgbWVzc2FnZTogJHttc2cuY29udGVudH1gKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==