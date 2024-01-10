/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/hello.js":
/*!**************************!*\
  !*** ./modules/hello.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst helloModule = () => {\n  // eslint-disable-next-line max-len\n  const capitalizeFirstLetter = (string) => (string ? string[0].toUpperCase() + string.slice(1) : string);\n  const getDayPeriod = () => new Intl.DateTimeFormat('ru', { dayPeriod: 'narrow' }).format(new Date());\n  const getTodayName = () => new Intl.DateTimeFormat('ru', { weekday: 'long' }).format(new Date());\n  const getCurrentTime = () => new Intl.DateTimeFormat('en', { timeStyle: 'medium' }).format(new Date());\n  const getStillDayOfNewYear = () => Math.floor((new Date(`1 january ${+new Date().getFullYear() + 1}`) - new Date()) / 1000 / 60 / 60 / 24);\n  const declinationOfDays = (days) => {\n    const dayCondition = days % 10;\n    if (dayCondition === 1) return 'день';\n    if (dayCondition > 1 && dayCondition < 5) return 'дня';\n\n    return 'дней';\n  };\n\n  const printDates = () => {\n    const dayPeriod = getDayPeriod();\n    const stillDayOfNewYear = getStillDayOfNewYear();\n    const greeting = {\n      утра: 'Доброе утро',\n      дня: 'Добрый день',\n      вечера: 'Добрый вечер',\n      ночи: 'Доброй ночи',\n    };\n\n    const timeOfDay = document.getElementById('time-of-day');\n    const toDay = document.getElementById('today');\n    const currentTime = document.getElementById('current-time');\n    const stillUntilNewYear = document.getElementById('still-until-new-year');\n    timeOfDay.textContent = greeting[dayPeriod];\n    toDay.textContent = `Сегодня: ${capitalizeFirstLetter(getTodayName())}`;\n    currentTime.textContent = `Текущее время: ${getCurrentTime()}`;\n    stillUntilNewYear.textContent = `До нового года осталось ${stillDayOfNewYear} ${declinationOfDays(stillDayOfNewYear)}`;\n\n    setTimeout(printDates, 1000);\n  };\n\n  printDates();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helloModule);\n\n\n//# sourceURL=webpack:///./modules/hello.js?");

/***/ }),

/***/ "./task6.js":
/*!******************!*\
  !*** ./task6.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hello */ \"./modules/hello.js\");\n\n\n(0,_modules_hello__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack:///./task6.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./task6.js");
/******/ 	
/******/ })()
;