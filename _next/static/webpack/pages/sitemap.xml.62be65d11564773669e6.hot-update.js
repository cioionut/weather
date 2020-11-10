webpackHotUpdate_N_E("pages/sitemap.xml",{

/***/ "./pages/sitemap.xml.js":
/*!******************************!*\
  !*** ./pages/sitemap.xml.js ***!
  \******************************/
/*! exports provided: __N_SSG, ALL_LOCATIONS_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_LOCATIONS_QUERY\", function() { return ALL_LOCATIONS_QUERY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sitemap; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n  {\\n    counties {\\n      name\\n      account_city {\\n        id\\n        name\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar prettier = __webpack_require__(/*! prettier */ \"./node_modules/prettier/standalone.js\");\n\nvar __N_SSG = true;\nvar ALL_LOCATIONS_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"gql\"])(_templateObject());\n\nvar createSitemap = function createSitemap(paths) {\n  return \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n  <urlset xmlns=\\\"http://www.sitemaps.org/schemas/sitemap/0.9\\\">\\n    \".concat(paths.map(function (path) {\n    return \"\\n                <url>\\n                    <loc>\".concat(\"https://vremea.ionkom.com/\".concat(path), \"</loc>\\n                </url>\\n            \");\n  }).join(''), \"\\n  </urlset>\\n\");\n};\n\nfunction Sitemap(_x) {\n  return _Sitemap.apply(this, arguments);\n}\n_c2 = Sitemap;\n\nfunction _Sitemap() {\n  _Sitemap = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n    var paths, prettierConfig, sitemap, formatted;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            paths = _ref.paths;\n            _context.next = 3;\n            return prettier.resolveConfig('./.prettierrc.js');\n\n          case 3:\n            prettierConfig = _context.sent;\n            // res.setHeader('Content-Type', 'text/xml');\n            // res.write(createSitemap(paths));\n            // res.end();\n            // If you're not using Prettier, you can remove this.\n            sitemap = createSitemap(paths);\n            formatted = prettier.format(sitemap, _objectSpread(_objectSpread({}, prettierConfig), {}, {\n              parser: 'html'\n            }));\n            console.log(formatted);\n            return _context.abrupt(\"return\", {\n              formatted: formatted\n            });\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _Sitemap.apply(this, arguments);\n}\n\n_c = Sitemap;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Sitemap\");\n$RefreshReg$(_c2, \"Sitemap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2l0ZW1hcC54bWwuanM/ODIyZSJdLCJuYW1lcyI6WyJwcmV0dGllciIsInJlcXVpcmUiLCJBTExfTE9DQVRJT05TX1FVRVJZIiwiZ3FsIiwiY3JlYXRlU2l0ZW1hcCIsInBhdGhzIiwibWFwIiwicGF0aCIsImpvaW4iLCJTaXRlbWFwIiwicmVzb2x2ZUNvbmZpZyIsInByZXR0aWVyQ29uZmlnIiwic2l0ZW1hcCIsImZvcm1hdHRlZCIsImZvcm1hdCIsInBhcnNlciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLHVEQUFELENBQXhCOzs7QUFFTyxJQUFNQyxtQkFBbUIsR0FBR0MsMERBQUgsbUJBQXpCOztBQWFQLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRDtBQUFBLHFJQUVoQkEsS0FBSyxDQUNKQyxHQURELENBQ0ssVUFBQ0MsSUFBRCxFQUFVO0FBQ2IsMkdBRWdEQSxJQUZoRDtBQUtELEdBUEQsRUFRQ0MsSUFSRCxDQVFNLEVBUk4sQ0FGZ0I7QUFBQSxDQUF0Qjs7QUFjZSxTQUFlQyxPQUE5QjtBQUFBO0FBQUE7TUFBOEJBLE87Ozs4TEFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUJKLGlCQUF6QixRQUF5QkEsS0FBekI7QUFBQTtBQUFBLG1CQUNnQkwsUUFBUSxDQUFDVSxhQUFULENBQXVCLGtCQUF2QixDQURoQjs7QUFBQTtBQUNQQywwQkFETztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ01DLG1CQU5PLEdBTUdSLGFBQWEsQ0FBQ0MsS0FBRCxDQU5oQjtBQU9QUSxxQkFQTyxHQU9LYixRQUFRLENBQUNjLE1BQVQsQ0FBZ0JGLE9BQWhCLGtDQUNiRCxjQURhO0FBRWhCSSxvQkFBTSxFQUFFO0FBRlEsZUFQTDtBQVliQyxtQkFBTyxDQUFDQyxHQUFSLENBQVlKLFNBQVo7QUFaYSw2Q0FjTDtBQUFDQSx1QkFBUyxFQUFUQTtBQUFELGFBZEs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztLQUFlSixPIiwiZmlsZSI6Ii4vcGFnZXMvc2l0ZW1hcC54bWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCB7IGluaXRpYWxpemVBcG9sbG8gfSBmcm9tICcuLi9saWIvYXBvbGxvQ2xpZW50J1xuaW1wb3J0IHsgZm9ybWF0Rm9yVVJMIH0gZnJvbSAnLi4vbGliL3N0clV0aWxzJztcbmNvbnN0IHByZXR0aWVyID0gcmVxdWlyZSgncHJldHRpZXInKTtcblxuZXhwb3J0IGNvbnN0IEFMTF9MT0NBVElPTlNfUVVFUlkgPSBncWxgXG4gIHtcbiAgICBjb3VudGllcyB7XG4gICAgICBuYW1lXG4gICAgICBhY2NvdW50X2NpdHkge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5cbmNvbnN0IGNyZWF0ZVNpdGVtYXAgPSAocGF0aHMpID0+IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbiAgPHVybHNldCB4bWxucz1cImh0dHA6Ly93d3cuc2l0ZW1hcHMub3JnL3NjaGVtYXMvc2l0ZW1hcC8wLjlcIj5cbiAgICAke3BhdGhzXG4gICAgICAubWFwKChwYXRoKSA9PiB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgPHVybD5cbiAgICAgICAgICAgICAgICAgICAgPGxvYz4ke2BodHRwczovL3ZyZW1lYS5pb25rb20uY29tLyR7cGF0aH1gfTwvbG9jPlxuICAgICAgICAgICAgICAgIDwvdXJsPlxuICAgICAgICAgICAgYDtcbiAgICAgIH0pXG4gICAgICAuam9pbignJyl9XG4gIDwvdXJsc2V0PlxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gU2l0ZW1hcCh7IHBhdGhzIH0pIHtcbiAgY29uc3QgcHJldHRpZXJDb25maWcgPSBhd2FpdCBwcmV0dGllci5yZXNvbHZlQ29uZmlnKCcuLy5wcmV0dGllcnJjLmpzJyk7XG4gIC8vIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3htbCcpO1xuICAvLyByZXMud3JpdGUoY3JlYXRlU2l0ZW1hcChwYXRocykpO1xuICAvLyByZXMuZW5kKCk7XG4gIC8vIElmIHlvdSdyZSBub3QgdXNpbmcgUHJldHRpZXIsIHlvdSBjYW4gcmVtb3ZlIHRoaXMuXG4gIGNvbnN0IHNpdGVtYXAgPSBjcmVhdGVTaXRlbWFwKHBhdGhzKTtcbiAgY29uc3QgZm9ybWF0dGVkID0gcHJldHRpZXIuZm9ybWF0KHNpdGVtYXAsIHtcbiAgICAuLi5wcmV0dGllckNvbmZpZyxcbiAgICBwYXJzZXI6ICdodG1sJ1xuICB9KTtcblxuICBjb25zb2xlLmxvZyhmb3JtYXR0ZWQpXG5cbiAgcmV0dXJuICh7Zm9ybWF0dGVkfSlcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBBTExfTE9DQVRJT05TX1FVRVJZXG4gIH0pO1xuICBjb25zdCB7IGNvdW50aWVzIH0gPSBkYXRhO1xuICBsZXQgcGF0aHMgPSBbXTtcbiAgY291bnRpZXMuZm9yRWFjaChjb3VudHkgPT4ge1xuICAgIHBhdGhzID0gcGF0aHMuY29uY2F0KGNvdW50eS5hY2NvdW50X2NpdHkubWFwKGxvY2F0aW9uID0+XG4gICAgICAgIGAvdnJlbWVhLyR7Zm9ybWF0Rm9yVVJMKGxvY2F0aW9uLm5hbWUpfS0ke2Zvcm1hdEZvclVSTChjb3VudHkubmFtZSl9LyR7bG9jYXRpb24uaWR9YFxuICAgICkpO1xuICAgIHBhdGhzLnB1c2goYC92cmVtZWEvJHtmb3JtYXRGb3JVUkwoY291bnR5Lm5hbWUpfWApO1xuICB9KTtcbiAgcGF0aHMucHVzaCgnJyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwYXRocyB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sitemap.xml.js\n");

/***/ })

})