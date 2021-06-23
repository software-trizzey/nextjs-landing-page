webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/package.js":
/*!*********************************!*\
  !*** ./src/sections/package.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Package; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_price_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/price-card */ \"./src/components/price-card.js\");\n/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/button-group */ \"./src/components/button-group.js\");\n/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var _data_package_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/package.js */ \"./src/data/package.js\");\n\n\nvar _jsxFileName = \"/Users/tristandeane/Desktop/web-dev-portfolio/projects/nextjs-landing-page/src/sections/package.js\",\n    _s = $RefreshSig$(),\n    _templateObject,\n    _templateObject2;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\n // Pricing data\n\n // Card breakpoints\n\nvar responsive = {\n  desktop: {\n    breakpoint: {\n      max: 3000,\n      min: 1024\n    },\n    items: 3,\n    draggable: false\n  },\n  tablet: {\n    breakpoint: {\n      max: 1023,\n      min: 640\n    },\n    items: 2,\n    draggable: true\n  },\n  mobile: {\n    breakpoint: {\n      max: 639,\n      min: 0\n    },\n    items: 1,\n    draggable: true\n  }\n};\nfunction Package() {\n  _s();\n\n  // Pricing from data file\n  var monthly = _data_package_js__WEBPACK_IMPORTED_MODULE_8__[\"packages\"].monthly,\n      annual = _data_package_js__WEBPACK_IMPORTED_MODULE_8__[\"packages\"].annual;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    active: \"monthly\",\n    pricingPlan: monthly\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var handlePricingPlan = function handlePricingPlan(plan) {\n    // Change to annual plan\n    if (plan === \"annual\") {\n      setState({\n        active: \"annual\",\n        pricingPlan: annual\n      });\n    } else {\n      setState({\n        active: \"monthly\",\n        pricingPlan: monthly\n      });\n    }\n  };\n\n  var sliderParams = {\n    additionalTransfrom: 0,\n    arrows: false,\n    autoPlaySpeed: 3000,\n    centerMode: false,\n    className: \"\",\n    slidesToSlide: 1,\n    items: 3,\n    containerClass: \"carousel-container\",\n    customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_button_group__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 22\n      }\n    }),\n    dotListClass: \"\",\n    focusOnSelect: false,\n    infinite: false,\n    keyBoardControl: false,\n    itemClass: \"\",\n    minimumTouchDrag: 80,\n    renderButtonGroupOutside: true,\n    renderDotsOutside: false,\n    responsive: responsive,\n    showDots: false,\n    sliderClass: \"\"\n  };\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"section\", {\n    id: \"pricing\",\n    sx: {\n      variant: \"section.pricing\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 3\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 4\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_section_header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    slogan: \"Pricing Plan\",\n    title: \"Choose the plan that works for you\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    sx: styles.buttonGroup,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.buttonGroupInner,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 6\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"button\", {\n    className: state.active === \"monthly\" ? \"active\" : \"\",\n    type: \"button\",\n    \"aria-label\": \"Monthly\",\n    onClick: function onClick() {\n      return handlePricingPlan(\"monthly\");\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }, \"Monthly Plan\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"button\", {\n    className: state.active === \"annual\" ? \"active\" : \"\",\n    type: \"button\",\n    \"aria-label\": \"Annual\",\n    onClick: function onClick() {\n      return handlePricingPlan(\"annual\");\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }, \"Annual Plan\")))));\n}\n\n_s(Package, \"MpmGmKrMBXZNHceOr26VBcz/RFs=\");\n\n_c = Package;\nvar fadeIn = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"keyframes\"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n\"])));\nvar fadeIn2 = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"keyframes\"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  from {\\n    transform: translateY(50%);\\n    opacity: 0;\\n  }\\n  to {\\n\\t\\ttransform: translateY(0);\\n    opacity: 1;\\n  }\\n\"])));\nvar styles = {\n  pricingWrapper: {\n    mb: \"-40px\",\n    mt: \"-40px\",\n    mx: -3,\n    display: \"flex\",\n    flexDirection: \"column\",\n    flexWrap: \"wrap\",\n    \"&.pricing__wrapper .package__card\": {\n      \".package__header\": {\n        animation: \"\".concat(fadeIn, \" 0.8s ease-in\")\n      },\n      \"ul > li\": {\n        animation: \"\".concat(fadeIn2, \" 0.7s ease-in\")\n      },\n      \".package__price\": {\n        animation: \"\".concat(fadeIn2, \" 0.9s ease-in\")\n      },\n      button: {\n        animation: \"\".concat(fadeIn2, \" 1s ease-in\")\n      }\n    },\n    \".carousel-container\": {\n      width: \"100%\",\n      \"> ul > li \": {\n        display: \"flex\"\n      }\n    },\n    \".button__group\": {\n      display: [\"flex\", null, null, null, \"none\"],\n      mb: [4, null, null, null, 0]\n    }\n  },\n  pricingItem: {\n    mx: 3,\n    display: \"flex\",\n    flexShrink: 0,\n    flex: \"1 1 auto\"\n  },\n  buttonGroup: {\n    justifyContent: \"center\",\n    mb: \"7\",\n    mt: [\"-15px\", \"-35px\"],\n    position: \"relative\",\n    zIndex: 2\n  },\n  buttonGroupInner: {\n    display: \"flex\",\n    padding: \"7px\",\n    margin: \"0 auto\",\n    borderRadius: \"5px\",\n    backgroundColor: \"#F7F8FB\",\n    button: {\n      border: 0,\n      padding: [\"15px 20px\", \"15px 27px\"],\n      borderRadius: \"5px\",\n      color: \"text\",\n      fontSize: [1, 2],\n      lineHeight: 1.2,\n      fontWeight: 500,\n      backgroundColor: \"transparent\",\n      cursor: \"pointer\",\n      fontFamily: \"body\",\n      letterSpacing: \"-0.24px\",\n      transition: \"all 0.3s\",\n      \"&.active\": {\n        color: \"#0f2137\",\n        backgroundColor: \"#ffffff\",\n        boxShadow: \"0 3px 4px rgba(38, 78, 118, 0.1)\"\n      },\n      \"&:focus\": {\n        outline: 0\n      }\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Package\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanM/MjJmNSJdLCJuYW1lcyI6WyJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsImRyYWdnYWJsZSIsInRhYmxldCIsIm1vYmlsZSIsIlBhY2thZ2UiLCJtb250aGx5IiwicGFja2FnZXMiLCJhbm51YWwiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInByaWNpbmdQbGFuIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZVByaWNpbmdQbGFuIiwicGxhbiIsInNsaWRlclBhcmFtcyIsImFkZGl0aW9uYWxUcmFuc2Zyb20iLCJhcnJvd3MiLCJhdXRvUGxheVNwZWVkIiwiY2VudGVyTW9kZSIsImNsYXNzTmFtZSIsInNsaWRlc1RvU2xpZGUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwiZG90TGlzdENsYXNzIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwia2V5Qm9hcmRDb250cm9sIiwiaXRlbUNsYXNzIiwibWluaW11bVRvdWNoRHJhZyIsInJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZSIsInJlbmRlckRvdHNPdXRzaWRlIiwic2hvd0RvdHMiLCJzbGlkZXJDbGFzcyIsInZhcmlhbnQiLCJzdHlsZXMiLCJidXR0b25Hcm91cCIsImJ1dHRvbkdyb3VwSW5uZXIiLCJmYWRlSW4iLCJrZXlmcmFtZXMiLCJmYWRlSW4yIiwicHJpY2luZ1dyYXBwZXIiLCJtYiIsIm10IiwibXgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXhXcmFwIiwiYW5pbWF0aW9uIiwiYnV0dG9uIiwid2lkdGgiLCJwcmljaW5nSXRlbSIsImZsZXhTaHJpbmsiLCJmbGV4IiwianVzdGlmeUNvbnRlbnQiLCJwb3NpdGlvbiIsInpJbmRleCIsInBhZGRpbmciLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJjb2xvciIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJmb250RmFtaWx5IiwibGV0dGVyU3BhY2luZyIsInRyYW5zaXRpb24iLCJib3hTaGFkb3ciLCJvdXRsaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUc7QUFDbEJDLFNBQU8sRUFBRTtBQUNSQyxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBREo7QUFFUkMsU0FBSyxFQUFFLENBRkM7QUFHUkMsYUFBUyxFQUFFO0FBSEgsR0FEUztBQU1sQkMsUUFBTSxFQUFFO0FBQ1BMLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETDtBQUVQQyxTQUFLLEVBQUUsQ0FGQTtBQUdQQyxhQUFTLEVBQUU7QUFISixHQU5VO0FBV2xCRSxRQUFNLEVBQUU7QUFDUE4sY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxHQUFQO0FBQVlDLFNBQUcsRUFBRTtBQUFqQixLQURMO0FBRVBDLFNBQUssRUFBRSxDQUZBO0FBR1BDLGFBQVMsRUFBRTtBQUhKO0FBWFUsQ0FBbkI7QUFrQmUsU0FBU0csT0FBVCxHQUFtQjtBQUFBOztBQUNqQztBQURpQyxNQUV6QkMsT0FGeUIsR0FFTEMseURBRkssQ0FFekJELE9BRnlCO0FBQUEsTUFFaEJFLE1BRmdCLEdBRUxELHlEQUZLLENBRWhCQyxNQUZnQjs7QUFBQSxrQkFJUEMsc0RBQVEsQ0FBQztBQUNsQ0MsVUFBTSxFQUFFLFNBRDBCO0FBRWxDQyxlQUFXLEVBQUVMO0FBRnFCLEdBQUQsQ0FKRDtBQUFBLE1BSTFCTSxLQUowQjtBQUFBLE1BSW5CQyxRQUptQjs7QUFTakMsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxJ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VUFBTSxFQUFFLFFBSFM7QUFJakJDLGdCQUFZLEVBQUUsS0FKRztBQUtqQkMsbUJBQWUsRUFBRSxTQUxBO0FBTWpCWCxVQUFNLEVBQUU7QUFDUFksWUFBTSxFQUFFLENBREQ7QUFFUEosYUFBTyxFQUFFLENBQUMsV0FBRCxFQUFjLFdBQWQsQ0FGRjtBQUdQRSxrQkFBWSxFQUFFLEtBSFA7QUFJUEcsV0FBSyxFQUFFLE1BSkE7QUFLUEMsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FMSDtBQU1QQyxnQkFBVSxFQUFFLEdBTkw7QUFPUEMsZ0JBQVUsRUFBRSxHQVBMO0FBUVBMLHFCQUFlLEVBQUUsYUFSVjtBQVNQTSxZQUFNLEVBQUUsU0FURDtBQVVQQyxnQkFBVSxFQUFFLE1BVkw7QUFXUEMsbUJBQWEsRUFBRSxTQVhSO0FBWVBDLGdCQUFVLEVBQUUsVUFaTDtBQWFQLGtCQUFZO0FBQ1hQLGFBQUssRUFBRSxTQURJO0FBRVhGLHVCQUFlLEVBQUUsU0FGTjtBQUdYVSxpQkFBUyxFQUFFO0FBSEEsT0FiTDtBQWtCUCxpQkFBVztBQUNWQyxlQUFPLEVBQUU7QUFEQztBQWxCSjtBQU5TO0FBOUNKLENBQWYiLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvcGFja2FnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgRmxleCB9IGZyb20gXCJ0aGVtZS11aVwiO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiO1xuaW1wb3J0IFByaWNlQ2FyZCBmcm9tIFwiY29tcG9uZW50cy9wcmljZS1jYXJkXCI7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSBcImNvbXBvbmVudHMvYnV0dG9uLWdyb3VwXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlclwiO1xuXG4vLyBQcmljaW5nIGRhdGFcbmltcG9ydCB7IHBhY2thZ2VzIH0gZnJvbSBcIi4uL2RhdGEvcGFja2FnZS5qc1wiO1xuXG4vLyBDYXJkIGJyZWFrcG9pbnRzXG5jb25zdCByZXNwb25zaXZlID0ge1xuXHRkZXNrdG9wOiB7XG5cdFx0YnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxuXHRcdGl0ZW1zOiAzLFxuXHRcdGRyYWdnYWJsZTogZmFsc2UsXG5cdH0sXG5cdHRhYmxldDoge1xuXHRcdGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDIzLCBtaW46IDY0MCB9LFxuXHRcdGl0ZW1zOiAyLFxuXHRcdGRyYWdnYWJsZTogdHJ1ZSxcblx0fSxcblx0bW9iaWxlOiB7XG5cdFx0YnJlYWtwb2ludDogeyBtYXg6IDYzOSwgbWluOiAwIH0sXG5cdFx0aXRlbXM6IDEsXG5cdFx0ZHJhZ2dhYmxlOiB0cnVlLFxuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFja2FnZSgpIHtcblx0Ly8gUHJpY2luZyBmcm9tIGRhdGEgZmlsZVxuXHRjb25zdCB7IG1vbnRobHksIGFubnVhbCB9ID0gcGFja2FnZXM7XG5cblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG5cdFx0YWN0aXZlOiBcIm1vbnRobHlcIixcblx0XHRwcmljaW5nUGxhbjogbW9udGhseSxcblx0fSk7XG5cblx0Y29uc3QgaGFuZGxlUHJpY2luZ1BsYW4gPSAocGxhbikgPT4ge1xuXHRcdC8vIENoYW5nZSB0byBhbm51YWwgcGxhblxuXHRcdGlmIChwbGFuID09PSBcImFubnVhbFwiKSB7XG5cdFx0XHRzZXRTdGF0ZSh7IGFjdGl2ZTogXCJhbm51YWxcIiwgcHJpY2luZ1BsYW46IGFubnVhbCB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0U3RhdGUoeyBhY3RpdmU6IFwibW9udGhseVwiLCBwcmljaW5nUGxhbjogbW9udGhseSB9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3Qgc2xpZGVyUGFyYW1zID0ge1xuXHRcdGFkZGl0aW9uYWxUcmFuc2Zyb206IDAsXG5cdFx0YXJyb3dzOiBmYWxzZSxcblx0XHRhdXRvUGxheVNwZWVkOiAzMDAwLFxuXHRcdGNlbnRlck1vZGU6IGZhbHNlLFxuXHRcdGNsYXNzTmFtZTogXCJcIixcblx0XHRzbGlkZXNUb1NsaWRlOiAxLFxuXHRcdGl0ZW1zOiAzLFxuXHRcdGNvbnRhaW5lckNsYXNzOiBcImNhcm91c2VsLWNvbnRhaW5lclwiLFxuXHRcdGN1c3RvbUJ1dHRvbkdyb3VwOiA8QnV0dG9uR3JvdXAgLz4sXG5cdFx0ZG90TGlzdENsYXNzOiBcIlwiLFxuXHRcdGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuXHRcdGluZmluaXRlOiBmYWxzZSxcblx0XHRrZXlCb2FyZENvbnRyb2w6IGZhbHNlLFxuXHRcdGl0ZW1DbGFzczogXCJcIixcblx0XHRtaW5pbXVtVG91Y2hEcmFnOiA4MCxcblx0XHRyZW5kZXJCdXR0b25Hcm91cE91dHNpZGU6IHRydWUsXG5cdFx0cmVuZGVyRG90c091dHNpZGU6IGZhbHNlLFxuXHRcdHJlc3BvbnNpdmU6IHJlc3BvbnNpdmUsXG5cdFx0c2hvd0RvdHM6IGZhbHNlLFxuXHRcdHNsaWRlckNsYXNzOiBcIlwiLFxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gaWQ9XCJwcmljaW5nXCIgc3g9e3sgdmFyaWFudDogXCJzZWN0aW9uLnByaWNpbmdcIiB9fT5cblx0XHRcdDxDb250YWluZXI+XG5cdFx0XHRcdDxTZWN0aW9uSGVhZGVyXG5cdFx0XHRcdFx0c2xvZ2FuPVwiUHJpY2luZyBQbGFuXCJcblx0XHRcdFx0XHR0aXRsZT1cIkNob29zZSB0aGUgcGxhbiB0aGF0IHdvcmtzIGZvciB5b3VcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8RmxleCBzeD17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cblx0XHRcdFx0XHQ8Qm94IHN4PXtzdHlsZXMuYnV0dG9uR3JvdXBJbm5lcn0+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3RhdGUuYWN0aXZlID09PSBcIm1vbnRobHlcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD1cIk1vbnRobHlcIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcmljaW5nUGxhbihcIm1vbnRobHlcIil9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdE1vbnRobHkgUGxhblxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3RhdGUuYWN0aXZlID09PSBcImFubnVhbFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiQW5udWFsXCJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlUHJpY2luZ1BsYW4oXCJhbm51YWxcIil9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdEFubnVhbCBQbGFuXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0PC9GbGV4PlxuXHRcdFx0PC9Db250YWluZXI+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufVxuXG5jb25zdCBmYWRlSW4gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5jb25zdCBmYWRlSW4yID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcbmNvbnN0IHN0eWxlcyA9IHtcblx0cHJpY2luZ1dyYXBwZXI6IHtcblx0XHRtYjogXCItNDBweFwiLFxuXHRcdG10OiBcIi00MHB4XCIsXG5cdFx0bXg6IC0zLFxuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0ZmxleFdyYXA6IFwid3JhcFwiLFxuXHRcdFwiJi5wcmljaW5nX193cmFwcGVyIC5wYWNrYWdlX19jYXJkXCI6IHtcblx0XHRcdFwiLnBhY2thZ2VfX2hlYWRlclwiOiB7XG5cdFx0XHRcdGFuaW1hdGlvbjogYCR7ZmFkZUlufSAwLjhzIGVhc2UtaW5gLFxuXHRcdFx0fSxcblx0XHRcdFwidWwgPiBsaVwiOiB7XG5cdFx0XHRcdGFuaW1hdGlvbjogYCR7ZmFkZUluMn0gMC43cyBlYXNlLWluYCxcblx0XHRcdH0sXG5cdFx0XHRcIi5wYWNrYWdlX19wcmljZVwiOiB7XG5cdFx0XHRcdGFuaW1hdGlvbjogYCR7ZmFkZUluMn0gMC45cyBlYXNlLWluYCxcblx0XHRcdH0sXG5cdFx0XHRidXR0b246IHtcblx0XHRcdFx0YW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAxcyBlYXNlLWluYCxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRcIi5jYXJvdXNlbC1jb250YWluZXJcIjoge1xuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0XCI+IHVsID4gbGkgXCI6IHtcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0XCIuYnV0dG9uX19ncm91cFwiOiB7XG5cdFx0XHRkaXNwbGF5OiBbXCJmbGV4XCIsIG51bGwsIG51bGwsIG51bGwsIFwibm9uZVwiXSxcblx0XHRcdG1iOiBbNCwgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXG5cdFx0fSxcblx0fSxcblx0cHJpY2luZ0l0ZW06IHtcblx0XHRteDogMyxcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRmbGV4U2hyaW5rOiAwLFxuXHRcdGZsZXg6IFwiMSAxIGF1dG9cIixcblx0fSxcblx0YnV0dG9uR3JvdXA6IHtcblx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRtYjogXCI3XCIsXG5cdFx0bXQ6IFtcIi0xNXB4XCIsIFwiLTM1cHhcIl0sXG5cdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcblx0XHR6SW5kZXg6IDIsXG5cdH0sXG5cdGJ1dHRvbkdyb3VwSW5uZXI6IHtcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRwYWRkaW5nOiBcIjdweFwiLFxuXHRcdG1hcmdpbjogXCIwIGF1dG9cIixcblx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcIiNGN0Y4RkJcIixcblx0XHRidXR0b246IHtcblx0XHRcdGJvcmRlcjogMCxcblx0XHRcdHBhZGRpbmc6IFtcIjE1cHggMjBweFwiLCBcIjE1cHggMjdweFwiXSxcblx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcblx0XHRcdGNvbG9yOiBcInRleHRcIixcblx0XHRcdGZvbnRTaXplOiBbMSwgMl0sXG5cdFx0XHRsaW5lSGVpZ2h0OiAxLjIsXG5cdFx0XHRmb250V2VpZ2h0OiA1MDAsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcblx0XHRcdGN1cnNvcjogXCJwb2ludGVyXCIsXG5cdFx0XHRmb250RmFtaWx5OiBcImJvZHlcIixcblx0XHRcdGxldHRlclNwYWNpbmc6IFwiLTAuMjRweFwiLFxuXHRcdFx0dHJhbnNpdGlvbjogXCJhbGwgMC4zc1wiLFxuXHRcdFx0XCImLmFjdGl2ZVwiOiB7XG5cdFx0XHRcdGNvbG9yOiBcIiMwZjIxMzdcIixcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcblx0XHRcdFx0Ym94U2hhZG93OiBcIjAgM3B4IDRweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpXCIsXG5cdFx0XHR9LFxuXHRcdFx0XCImOmZvY3VzXCI6IHtcblx0XHRcdFx0b3V0bGluZTogMCxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/package.js\n");

/***/ })

})