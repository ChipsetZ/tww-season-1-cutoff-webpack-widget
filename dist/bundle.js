/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("const RAIDER_IO_URL = 'https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-tww-1&region=eu';\r\nconst UPDATE_INTERVAL = 300000; // 5 minutes\r\n\r\nasync function fetchCutoff() {\r\n    try {\r\n        const response = await fetch(RAIDER_IO_URL);\r\n        if (!response.ok) {\r\n            throw new Error(`HTTP error! status: ${response.status}`);\r\n        }\r\n        const data = await response.json();\r\n        console.log('API response:', data);\r\n\r\n        if (!data || !data.cutoffs || !data.cutoffs.p999 || !data.cutoffs.p999.all) {\r\n            throw new Error('Unexpected API response structure');\r\n        }\r\n\r\n        const cutoffValue = data.cutoffs.p999.all.quantileMinValue;\r\n        console.log('Cutoff value:', cutoffValue);\r\n\r\n        if (cutoffValue !== undefined && !isNaN(parseFloat(cutoffValue))) {\r\n            return parseFloat(cutoffValue).toFixed(2);\r\n        } else {\r\n            throw new Error(`Invalid cutoff value: ${cutoffValue}`);\r\n        }\r\n    } catch (error) {\r\n        console.error('Error fetching cutoff:', error);\r\n        return `Error: ${error.message}`;\r\n    }\r\n}\r\n\r\n\r\n\r\nasync function updateCutoff() {\r\n    const cutoffValue = await fetchCutoff();\r\n    const cutoffElement = document.getElementById('cutoff-value');\r\n    cutoffElement.textContent = cutoffValue;\r\n    console.log('Cutoff updated:', cutoffValue);\r\n}\r\n\r\nupdateCutoff();\r\nsetInterval(updateCutoff, UPDATE_INTERVAL);\r\n\r\n// Log when the script starts running\r\nconsole.log('Mythic+ Cutoff Widget script started');\r\n\n\n//# sourceURL=webpack://tww-season-1-cutoff-webpack-widget/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;