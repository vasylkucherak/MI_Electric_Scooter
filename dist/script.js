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

/***/ "./src/js/modules/_isWebP.js":
/*!***********************************!*\
  !*** ./src/js/modules/_isWebP.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isWebP)\n/* harmony export */ });\n//* Перевірка підтримки webp. Додавання класу '.webp' або 'no-webp' для HTML\r\n\r\nfunction isWebP() {\r\n\r\n    function testWebP(callback) {\r\n        var webP = new Image();\r\n\r\n        webP.onload = webP.onerror = function () {\r\n            callback(webP.height == 2);\r\n        };\r\n        webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n    }\r\n\r\n    testWebP(function (support) {\r\n        let className = support === true ? 'webp' : 'no-webp';\r\n        document.documentElement.classList.add(className);\r\n    });\r\n}\n\n//# sourceURL=webpack://my-gulp-collection/./src/js/modules/_isWebP.js?");

/***/ }),

/***/ "./src/js/modules/_theme.js":
/*!**********************************!*\
  !*** ./src/js/modules/_theme.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ theme)\n/* harmony export */ });\nfunction theme() {\r\n    window.addEventListener('load', windowLoad);\r\n\r\n    function windowLoad() {\r\n        const htmlBlock = document.documentElement;\r\n        const saveUserTheme = localStorage.getItem('user-theme');\r\n\r\n        setTimeout(() => {\r\n            htmlBlock.style.transition = 'all 0.3s';\r\n        }, 300);\r\n        \r\n        let userTheme;\r\n\r\n        if (window.matchMedia) {\r\n            userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';\r\n        }\r\n\r\n        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {\r\n            ! saveUserTheme ? changeTheme() : null;\r\n        });\r\n\r\n        const themeBtn = document.querySelector('.theme-btn');\r\n\r\n        if (themeBtn) {\r\n            themeBtn.addEventListener('click', function(e) {\r\n                changeTheme(true);\r\n                e.target.disabled = true;\r\n                setTimeout(() => {\r\n                    e.target.disabled = false;\r\n                }, 300);\r\n            });\r\n        }\r\n\r\n        function setThemeClass() {\r\n            if (saveUserTheme) {\r\n                htmlBlock.classList.add(saveUserTheme);\r\n            } else {\r\n                htmlBlock.classList.add(userTheme);\r\n            }\r\n        }\r\n        setThemeClass();\r\n\r\n        function changeTheme(saveTheme = false) {\r\n            let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';\r\n            let newTheme;\r\n\r\n            if (currentTheme === 'light') {\r\n                newTheme = 'dark';\r\n            } else {\r\n                newTheme = 'light';\r\n            }\r\n\r\n            htmlBlock.classList.remove(currentTheme);\r\n            htmlBlock.classList.add(newTheme);\r\n\r\n            saveTheme ? localStorage.setItem('user-theme', newTheme) : null;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://my-gulp-collection/./src/js/modules/_theme.js?");

/***/ }),

/***/ "./src/js/modules/_touchOrCursor.js":
/*!******************************************!*\
  !*** ./src/js/modules/_touchOrCursor.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ touchOrCursor)\n/* harmony export */ });\n//* Перевірка доступного івента користувачу. Додавання класу '_touch' або '_cursor' для тегу body\r\n\r\nfunction touchOrCursor() {\r\n    \r\n    const isMobile = {\r\n        Android: function () {\r\n            return navigator.userAgent.match(/Android/i);\r\n        },\r\n        BlackBerry: function () {\r\n            return navigator.userAgent.match(/BlackBerry/i);\r\n        },\r\n        iOS: function () {\r\n            return navigator.userAgent.match(/iPhone|iPad|iPod/i);\r\n        },\r\n        Opera: function () {\r\n            return navigator.userAgent.match(/Opera Mini/i);\r\n        },\r\n        Windows: function () {\r\n            return navigator.userAgent.match(/IEMobile/i);\r\n        },\r\n        any: function () {\r\n            return (\r\n                isMobile.Android() ||\r\n                isMobile.BlackBerry() ||\r\n                isMobile.iOS() ||\r\n                isMobile.Opera() ||\r\n                isMobile.Windows()\r\n            );\r\n        }\r\n    };\r\n\r\n    if (isMobile.any()) {\r\n        document.body.classList.add('_touch');\r\n    } else {\r\n        document.body.classList.add('_cursor');\r\n    }\r\n}\n\n//# sourceURL=webpack://my-gulp-collection/./src/js/modules/_touchOrCursor.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_isWebP_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/_isWebP.js */ \"./src/js/modules/_isWebP.js\");\n/* harmony import */ var _modules_touchOrCursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/_touchOrCursor.js */ \"./src/js/modules/_touchOrCursor.js\");\n/* harmony import */ var _modules_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/_theme.js */ \"./src/js/modules/_theme.js\");\n//* Імпорт і налаштування скриптів\r\n\r\n//? Базові скрипти ====================================================================================================================================\r\n //? Перевірка підтримки webp зображень\r\n //? Перевірка на touch або mouse івенти\r\n\r\n//? Додаткові скрипти =================================================================================================================================\r\n\r\n//import headerMenu from \"./modules/_headerMenu.js\"; //? Меню шапки\r\n//import spoiler from \"./modules/_spoiler.js\"; //? Спойлер (або акордіон)\r\n//import swiperSlider from \"./modules/_swiperSlider.js\" //? Слайдер Swiper\r\n//import slickSlider from \"./modules/_slickSlider.js\" //? Слайдер Slick\r\n//import form from \"./modules/_form.js\"; //? Форма\r\n//import popup from \"./modules/_popup.js\"; //? Модальне вікно\r\n//import scrollOnLinks from \"./modules/_scrollOnLinks.js\"; //? Плавний скрол при при переході по ссилці\r\n//import scrollUpBtn from \"./modules/_scrollUpBtn.js\"; //? Скрол на початок сайту при кліці на кнопку вверх\r\n//import animationByScroll from \"./modules/_animationByScroll.js\"; //? Спрацювання анімації при скролі\r\n//import slideUpDownToggle from \"./modules/_slideUpDownToggle.js\"; //? Створення анімацій slideUp, slideDown і slideToggle як у jQuery\r\n//import dynamicAdaptive from \"./modules/_dynamicAdaptive.js\"; //? Динамічний адаптив\r\n//import ratings from \"./modules/_ratings.js\"; //? зірковий рейтинг\r\n//import lazyLoading from \"./modules/_lazyLoading.js\"; //? Лінива загрузка\r\n//import noUISlider from \"./modules/_noUISlider.js\"; //? бігунок\r\n//import scrollBar from \"./modules/_scrollBar.js\"; //? Індикатор прокрутки\r\n\r\n//? Скрипти для модулів =================================================================================================================================\r\n//import {_slideUp, _slideDown, _slideToggle} from \"./modules/_slideUpDownToggle.js\"; //? Створення анімацій slideUp, slideDown і slideToggle як у jQuery\r\n\r\n(0,_modules_theme_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n\r\n    (0,_modules_isWebP_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n    (0,_modules_touchOrCursor_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n    //headerMenu();\r\n\r\n    /* spoiler({\r\n        spoilerTrigger: '.spoiler__header',\r\n        acordion: false\r\n    }); */\r\n\r\n    //swiperSlider();\r\n\r\n    //slickSlider();\r\n\r\n    /* form({\r\n        formId: 'form',\r\n        imageInputId: 'formImage',\r\n        previewId: 'formPreview'\r\n    }); */\r\n\r\n    /* popup({\r\n        triggersSelector: '[data-popup]',\r\n        popupSelector: '.popup',\r\n        closeSelector: '[data-close]',\r\n        destroyTrigger: false,\r\n        openWhenScrollEnded: false,\r\n        openWhenTimeEnded: 0,\r\n        closeOnEscape: true,\r\n        closeOnBgClick: true\r\n    }); */\r\n\r\n    /* scrollOnLinks({\r\n        linksAttribue: '[href^=\"#\"]',\r\n        scrollSpeed: 0.2\r\n    }); */\r\n\r\n    /* scrollUpBtn({\r\n        breakpoint: 1650\r\n    }); */\r\n\r\n    //animationByScroll();\r\n\r\n    //slideUpDownToggle();\r\n\r\n    /* dynamicAdaptive({\r\n        type: \"max\"\r\n    }); */\r\n\r\n    //ratings();\r\n\r\n    //lazyLoading();\r\n\r\n    //noUISlider();\r\n\r\n    //scrollBar();\r\n});\n\n//# sourceURL=webpack://my-gulp-collection/./src/js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;