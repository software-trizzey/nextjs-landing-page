webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/package.js":
/*!*********************************!*\
  !*** ./src/sections/package.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Package; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_price_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/price-card */ \"./src/components/price-card.js\");\n/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/button-group */ \"./src/components/button-group.js\");\n/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var _data_package_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/package.js */ \"./src/data/package.js\");\n\n\nvar _jsxFileName = \"/Users/tristandeane/Desktop/web-dev-portfolio/projects/nextjs-landing-page/src/sections/package.js\",\n    _templateObject,\n    _templateObject2;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\n // Pricing data\n\n // Card breakpoints\n\nvar responsive = {\n  desktop: {\n    breakpoint: {\n      max: 3000,\n      min: 1024\n    },\n    items: 3,\n    draggable: false\n  },\n  tablet: {\n    breakpoint: {\n      max: 1023,\n      min: 640\n    },\n    items: 2,\n    draggable: true\n  },\n  mobile: {\n    breakpoint: {\n      max: 639,\n      min: 0\n    },\n    items: 1,\n    draggable: true\n  }\n};\nfunction Package() {\n  var monthly = _data_package_js__WEBPACK_IMPORTED_MODULE_8__[\"packages\"].monthly,\n      annual = _data_package_js__WEBPACK_IMPORTED_MODULE_8__[\"packages\"].annual;\n  var sliderParams = {\n    additionalTransfrom: 0,\n    arrows: false,\n    autoPlaySpeed: 3000,\n    centerMode: false,\n    className: \"\",\n    slidesToSlide: 1,\n    items: 3,\n    containerClass: \"carousel-container\",\n    customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_button_group__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 22\n      }\n    }),\n    dotListClass: \"\",\n    focusOnSelect: false,\n    infinite: false,\n    keyBoardControl: false,\n    itemClass: \"\",\n    minimumTouchDrag: 80,\n    renderButtonGroupOutside: true,\n    renderDotsOutside: false,\n    responsive: responsive,\n    showDots: false,\n    sliderClass: \"\"\n  };\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"section\", {\n    id: \"pricing\",\n    sx: {\n      variant: \"section.pricing\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 3\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 4\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_section_header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    slogan: \"Pricing Plan\",\n    title: \"Choose the plan that works for you\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  })));\n}\n_c = Package;\nvar fadeIn = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"keyframes\"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n\"])));\nvar fadeIn2 = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"keyframes\"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  from {\\n    transform: translateY(50%);\\n    opacity: 0;\\n  }\\n  to {\\n\\t\\ttransform: translateY(0);\\n    opacity: 1;\\n  }\\n\"])));\nvar styles = {\n  pricingWrapper: {\n    mb: \"-40px\",\n    mt: \"-40px\",\n    mx: -3,\n    display: \"flex\",\n    flexDirection: \"column\",\n    flexWrap: \"wrap\",\n    \"&.pricing__wrapper .package__card\": {\n      \".package__header\": {\n        animation: \"\".concat(fadeIn, \" 0.8s ease-in\")\n      },\n      \"ul > li\": {\n        animation: \"\".concat(fadeIn2, \" 0.7s ease-in\")\n      },\n      \".package__price\": {\n        animation: \"\".concat(fadeIn2, \" 0.9s ease-in\")\n      },\n      button: {\n        animation: \"\".concat(fadeIn2, \" 1s ease-in\")\n      }\n    },\n    \".carousel-container\": {\n      width: \"100%\",\n      \"> ul > li \": {\n        display: \"flex\"\n      }\n    },\n    \".button__group\": {\n      display: [\"flex\", null, null, null, \"none\"],\n      mb: [4, null, null, null, 0]\n    }\n  },\n  pricingItem: {\n    mx: 3,\n    display: \"flex\",\n    flexShrink: 0,\n    flex: \"1 1 auto\"\n  },\n  buttonGroup: {\n    justifyContent: \"center\",\n    mb: \"7\",\n    mt: [\"-15px\", \"-35px\"],\n    position: \"relative\",\n    zIndex: 2\n  },\n  buttonGroupInner: {\n    display: \"flex\",\n    padding: \"7px\",\n    margin: \"0 auto\",\n    borderRadius: \"5px\",\n    backgroundColor: \"#F7F8FB\",\n    button: {\n      border: 0,\n      padding: [\"15px 20px\", \"15px 27px\"],\n      borderRadius: \"5px\",\n      color: \"text\",\n      fontSize: [1, 2],\n      lineHeight: 1.2,\n      fontWeight: 500,\n      backgroundColor: \"transparent\",\n      cursor: \"pointer\",\n      fontFamily: \"body\",\n      letterSpacing: \"-0.24px\",\n      transition: \"all 0.3s\",\n      \"&.active\": {\n        color: \"#0f2137\",\n        backgroundColor: \"#ffffff\",\n        boxShadow: \"0 3px 4px rgba(38, 78, 118, 0.1)\"\n      },\n      \"&:focus\": {\n        outline: 0\n      }\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Package\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanM/MjJmNSJdLCJuYW1lcyI6WyJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsImRyYWdnYWJsZSIsInRhYmxldCIsIm1vYmlsZSIsIlBhY2thZ2UiLCJtb250aGx5IiwicGFja2FnZXMiLCJhbm51YWwiLCJzbGlkZXJQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJzbGlkZXNUb1NsaWRlIiwiY29udGFpbmVyQ2xhc3MiLCJjdXN0b21CdXR0b25Hcm91cCIsImRvdExpc3RDbGFzcyIsImZvY3VzT25TZWxlY3QiLCJpbmZpbml0ZSIsImtleUJvYXJkQ29udHJvbCIsIml0ZW1DbGFzcyIsIm1pbmltdW1Ub3VjaERyYWciLCJyZW5kZXJCdXR0b25Hcm91cE91dHNpZGUiLCJyZW5kZXJEb3RzT3V0c2lkZSIsInNob3dEb3RzIiwic2xpZGVyQ2xhc3MiLCJ2YXJpYW50IiwiZmFkZUluIiwia2V5ZnJhbWVzIiwiZmFkZUluMiIsInN0eWxlcyIsInByaWNpbmdXcmFwcGVyIiwibWIiLCJtdCIsIm14IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsImFuaW1hdGlvbiIsImJ1dHRvbiIsIndpZHRoIiwicHJpY2luZ0l0ZW0iLCJmbGV4U2hyaW5rIiwiZmxleCIsImJ1dHRvbkdyb3VwIiwianVzdGlmeUNvbnRlbnQiLCJwb3NpdGlvbiIsInpJbmRleCIsImJ1dHRvbkdyb3VwSW5uZXIiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwiZm9udEZhbWlseSIsImxldHRlclNw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RUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBTEg7QUFNUEMsZ0JBQVUsRUFBRSxHQU5MO0FBT1BDLGdCQUFVLEVBQUUsR0FQTDtBQVFQTCxxQkFBZSxFQUFFLGFBUlY7QUFTUE0sWUFBTSxFQUFFLFNBVEQ7QUFVUEMsZ0JBQVUsRUFBRSxNQVZMO0FBV1BDLG1CQUFhLEVBQUUsU0FYUjtBQVlQQyxnQkFBVSxFQUFFLFVBWkw7QUFhUCxrQkFBWTtBQUNYUCxhQUFLLEVBQUUsU0FESTtBQUVYRix1QkFBZSxFQUFFLFNBRk47QUFHWFUsaUJBQVMsRUFBRTtBQUhBLE9BYkw7QUFrQlAsaUJBQVc7QUFDVkMsZUFBTyxFQUFFO0FBREM7QUFsQko7QUFOUztBQTlDSixDQUFmIiwiZmlsZSI6Ii4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3gsIEZsZXggfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIjtcbmltcG9ydCBQcmljZUNhcmQgZnJvbSBcImNvbXBvbmVudHMvcHJpY2UtY2FyZFwiO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gXCJjb21wb25lbnRzL2J1dHRvbi1ncm91cFwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXJcIjtcblxuLy8gUHJpY2luZyBkYXRhXG5pbXBvcnQgeyBwYWNrYWdlcyB9IGZyb20gXCIuLi9kYXRhL3BhY2thZ2UuanNcIjtcblxuLy8gQ2FyZCBicmVha3BvaW50c1xuY29uc3QgcmVzcG9uc2l2ZSA9IHtcblx0ZGVza3RvcDoge1xuXHRcdGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcblx0XHRpdGVtczogMyxcblx0XHRkcmFnZ2FibGU6IGZhbHNlLFxuXHR9LFxuXHR0YWJsZXQ6IHtcblx0XHRicmVha3BvaW50OiB7IG1heDogMTAyMywgbWluOiA2NDAgfSxcblx0XHRpdGVtczogMixcblx0XHRkcmFnZ2FibGU6IHRydWUsXG5cdH0sXG5cdG1vYmlsZToge1xuXHRcdGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxuXHRcdGl0ZW1zOiAxLFxuXHRcdGRyYWdnYWJsZTogdHJ1ZSxcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhY2thZ2UoKSB7XG5cdGNvbnN0IHsgbW9udGhseSwgYW5udWFsIH0gPSBwYWNrYWdlcztcblxuXHRjb25zdCBzbGlkZXJQYXJhbXMgPSB7XG5cdFx0YWRkaXRpb25hbFRyYW5zZnJvbTogMCxcblx0XHRhcnJvd3M6IGZhbHNlLFxuXHRcdGF1dG9QbGF5U3BlZWQ6IDMwMDAsXG5cdFx0Y2VudGVyTW9kZTogZmFsc2UsXG5cdFx0Y2xhc3NOYW1lOiBcIlwiLFxuXHRcdHNsaWRlc1RvU2xpZGU6IDEsXG5cdFx0aXRlbXM6IDMsXG5cdFx0Y29udGFpbmVyQ2xhc3M6IFwiY2Fyb3VzZWwtY29udGFpbmVyXCIsXG5cdFx0Y3VzdG9tQnV0dG9uR3JvdXA6IDxCdXR0b25Hcm91cCAvPixcblx0XHRkb3RMaXN0Q2xhc3M6IFwiXCIsXG5cdFx0Zm9jdXNPblNlbGVjdDogZmFsc2UsXG5cdFx0aW5maW5pdGU6IGZhbHNlLFxuXHRcdGtleUJvYXJkQ29udHJvbDogZmFsc2UsXG5cdFx0aXRlbUNsYXNzOiBcIlwiLFxuXHRcdG1pbmltdW1Ub3VjaERyYWc6IDgwLFxuXHRcdHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZTogdHJ1ZSxcblx0XHRyZW5kZXJEb3RzT3V0c2lkZTogZmFsc2UsXG5cdFx0cmVzcG9uc2l2ZTogcmVzcG9uc2l2ZSxcblx0XHRzaG93RG90czogZmFsc2UsXG5cdFx0c2xpZGVyQ2xhc3M6IFwiXCIsXG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBpZD1cInByaWNpbmdcIiBzeD17eyB2YXJpYW50OiBcInNlY3Rpb24ucHJpY2luZ1wiIH19PlxuXHRcdFx0PENvbnRhaW5lcj5cblx0XHRcdFx0PFNlY3Rpb25IZWFkZXJcblx0XHRcdFx0XHRzbG9nYW49XCJQcmljaW5nIFBsYW5cIlxuXHRcdFx0XHRcdHRpdGxlPVwiQ2hvb3NlIHRoZSBwbGFuIHRoYXQgd29ya3MgZm9yIHlvdVwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59XG5cbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcbmNvbnN0IGZhZGVJbjIgPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuY29uc3Qgc3R5bGVzID0ge1xuXHRwcmljaW5nV3JhcHBlcjoge1xuXHRcdG1iOiBcIi00MHB4XCIsXG5cdFx0bXQ6IFwiLTQwcHhcIixcblx0XHRteDogLTMsXG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRmbGV4V3JhcDogXCJ3cmFwXCIsXG5cdFx0XCImLnByaWNpbmdfX3dyYXBwZXIgLnBhY2thZ2VfX2NhcmRcIjoge1xuXHRcdFx0XCIucGFja2FnZV9faGVhZGVyXCI6IHtcblx0XHRcdFx0YW5pbWF0aW9uOiBgJHtmYWRlSW59IDAuOHMgZWFzZS1pbmAsXG5cdFx0XHR9LFxuXHRcdFx0XCJ1bCA+IGxpXCI6IHtcblx0XHRcdFx0YW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAwLjdzIGVhc2UtaW5gLFxuXHRcdFx0fSxcblx0XHRcdFwiLnBhY2thZ2VfX3ByaWNlXCI6IHtcblx0XHRcdFx0YW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAwLjlzIGVhc2UtaW5gLFxuXHRcdFx0fSxcblx0XHRcdGJ1dHRvbjoge1xuXHRcdFx0XHRhbmltYXRpb246IGAke2ZhZGVJbjJ9IDFzIGVhc2UtaW5gLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdFwiLmNhcm91c2VsLWNvbnRhaW5lclwiOiB7XG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcIj4gdWwgPiBsaSBcIjoge1xuXHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRcIi5idXR0b25fX2dyb3VwXCI6IHtcblx0XHRcdGRpc3BsYXk6IFtcImZsZXhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgXCJub25lXCJdLFxuXHRcdFx0bWI6IFs0LCBudWxsLCBudWxsLCBudWxsLCAwXSxcblx0XHR9LFxuXHR9LFxuXHRwcmljaW5nSXRlbToge1xuXHRcdG14OiAzLFxuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdGZsZXhTaHJpbms6IDAsXG5cdFx0ZmxleDogXCIxIDEgYXV0b1wiLFxuXHR9LFxuXHRidXR0b25Hcm91cDoge1xuXHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdG1iOiBcIjdcIixcblx0XHRtdDogW1wiLTE1cHhcIiwgXCItMzVweFwiXSxcblx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdHpJbmRleDogMixcblx0fSxcblx0YnV0dG9uR3JvdXBJbm5lcjoge1xuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdHBhZGRpbmc6IFwiN3B4XCIsXG5cdFx0bWFyZ2luOiBcIjAgYXV0b1wiLFxuXHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI0Y3RjhGQlwiLFxuXHRcdGJ1dHRvbjoge1xuXHRcdFx0Ym9yZGVyOiAwLFxuXHRcdFx0cGFkZGluZzogW1wiMTVweCAyMHB4XCIsIFwiMTVweCAyN3B4XCJdLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdFx0Y29sb3I6IFwidGV4dFwiLFxuXHRcdFx0Zm9udFNpemU6IFsxLCAyXSxcblx0XHRcdGxpbmVIZWlnaHQ6IDEuMixcblx0XHRcdGZvbnRXZWlnaHQ6IDUwMCxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcdGZvbnRGYW1pbHk6IFwiYm9keVwiLFxuXHRcdFx0bGV0dGVyU3BhY2luZzogXCItMC4yNHB4XCIsXG5cdFx0XHR0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIsXG5cdFx0XHRcIiYuYWN0aXZlXCI6IHtcblx0XHRcdFx0Y29sb3I6IFwiIzBmMjEzN1wiLFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxuXHRcdFx0XHRib3hTaGFkb3c6IFwiMCAzcHggNHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSlcIixcblx0XHRcdH0sXG5cdFx0XHRcIiY6Zm9jdXNcIjoge1xuXHRcdFx0XHRvdXRsaW5lOiAwLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sections/package.js\n");

/***/ })

})