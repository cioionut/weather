webpackHotUpdate_N_E("pages/sitemap.xml",{

/***/ "./pages/sitemap.xml.js":
/*!******************************!*\
  !*** ./pages/sitemap.xml.js ***!
  \******************************/
/*! exports provided: ALL_LOCATIONS_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_LOCATIONS_QUERY\", function() { return ALL_LOCATIONS_QUERY; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/apolloClient */ \"./lib/apolloClient.js\");\n/* harmony import */ var _lib_strUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/strUtils */ \"./lib/strUtils.ts\");\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__[\"default\"])([\"\\n  {\\n    counties {\\n      name\\n      account_city {\\n        id\\n        name\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar ALL_LOCATIONS_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_9__[\"gql\"])(_templateObject());\n\nvar createSitemap = function createSitemap(paths) {\n  return \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n  <urlset xmlns=\\\"http://www.sitemaps.org/schemas/sitemap/0.9\\\">\\n    \".concat(paths.map(function (path) {\n    return \"\\n                <url>\\n                    <loc>\".concat(\"https://vremea.ionkom.com/\".concat(path), \"</loc>\\n                </url>\\n            \");\n  }).join(''), \"\\n  </urlset>\\n\");\n};\n\nvar Sitemap = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Sitemap, _React$Component);\n\n  var _super = _createSuper(Sitemap);\n\n  function Sitemap() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Sitemap);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Sitemap, null, [{\n    key: \"getStaticProps\",\n    value: function () {\n      var _getStaticProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n        var res, apolloClient, _yield$apolloClient$q, data, counties, paths;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                res = _ref.res;\n                apolloClient = Object(_lib_apolloClient__WEBPACK_IMPORTED_MODULE_10__[\"initializeApollo\"])();\n                _context.next = 4;\n                return apolloClient.query({\n                  query: ALL_LOCATIONS_QUERY\n                });\n\n              case 4:\n                _yield$apolloClient$q = _context.sent;\n                data = _yield$apolloClient$q.data;\n                counties = data.counties;\n                paths = [];\n                counties.forEach(function (county) {\n                  paths = paths.concat(county.account_city.map(function (location) {\n                    return \"/vremea/\".concat(Object(_lib_strUtils__WEBPACK_IMPORTED_MODULE_11__[\"formatForURL\"])(location.name), \"-\").concat(Object(_lib_strUtils__WEBPACK_IMPORTED_MODULE_11__[\"formatForURL\"])(county.name), \"/\").concat(location.id);\n                  }));\n                  paths.push(\"/vremea/\".concat(Object(_lib_strUtils__WEBPACK_IMPORTED_MODULE_11__[\"formatForURL\"])(county.name)));\n                });\n                paths.push('');\n                res.setHeader('Content-Type', 'text/xml');\n                res.write(createSitemap(paths));\n                res.end();\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getStaticProps(_x) {\n        return _getStaticProps.apply(this, arguments);\n      }\n\n      return getStaticProps;\n    }()\n  }]);\n\n  return Sitemap;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sitemap);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2l0ZW1hcC54bWwuanM/ODIyZSJdLCJuYW1lcyI6WyJBTExfTE9DQVRJT05TX1FVRVJZIiwiZ3FsIiwiY3JlYXRlU2l0ZW1hcCIsInBhdGhzIiwibWFwIiwicGF0aCIsImpvaW4iLCJTaXRlbWFwIiwicmVzIiwiYXBvbGxvQ2xpZW50IiwiaW5pdGlhbGl6ZUFwb2xsbyIsInF1ZXJ5IiwiZGF0YSIsImNvdW50aWVzIiwiZm9yRWFjaCIsImNvdW50eSIsImNvbmNhdCIsImFjY291bnRfY2l0eSIsImxvY2F0aW9uIiwiZm9ybWF0Rm9yVVJMIiwibmFtZSIsImlkIiwicHVzaCIsInNldEhlYWRlciIsIndyaXRlIiwiZW5kIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsbUJBQW1CLEdBQUdDLDBEQUFILG1CQUF6Qjs7QUFhUCxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQ7QUFBQSxxSUFFaEJBLEtBQUssQ0FDSkMsR0FERCxDQUNLLFVBQUNDLElBQUQsRUFBVTtBQUNiLDJHQUVnREEsSUFGaEQ7QUFLRCxHQVBELEVBUUNDLElBUkQsQ0FRTSxFQVJOLENBRmdCO0FBQUEsQ0FBdEI7O0lBZU1DLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMwQkMsbUIsUUFBQUEsRztBQUN0QkMsNEIsR0FBZUMsMkVBQWdCLEU7O3VCQUNkRCxZQUFZLENBQUNFLEtBQWIsQ0FBbUI7QUFDeENBLHVCQUFLLEVBQUVYO0FBRGlDLGlCQUFuQixDOzs7O0FBQWZZLG9CLHlCQUFBQSxJO0FBR0FDLHdCLEdBQWFELEksQ0FBYkMsUTtBQUNKVixxQixHQUFRLEU7QUFDWlUsd0JBQVEsQ0FBQ0MsT0FBVCxDQUFpQixVQUFBQyxNQUFNLEVBQUk7QUFDekJaLHVCQUFLLEdBQUdBLEtBQUssQ0FBQ2EsTUFBTixDQUFhRCxNQUFNLENBQUNFLFlBQVAsQ0FBb0JiLEdBQXBCLENBQXdCLFVBQUFjLFFBQVE7QUFBQSw2Q0FDdENDLG1FQUFZLENBQUNELFFBQVEsQ0FBQ0UsSUFBVixDQUQwQixjQUNQRCxtRUFBWSxDQUFDSixNQUFNLENBQUNLLElBQVIsQ0FETCxjQUNzQkYsUUFBUSxDQUFDRyxFQUQvQjtBQUFBLG1CQUFoQyxDQUFiLENBQVI7QUFHQWxCLHVCQUFLLENBQUNtQixJQUFOLG1CQUFzQkgsbUVBQVksQ0FBQ0osTUFBTSxDQUFDSyxJQUFSLENBQWxDO0FBQ0QsaUJBTEQ7QUFNQWpCLHFCQUFLLENBQUNtQixJQUFOLENBQVcsRUFBWDtBQUVBZCxtQkFBRyxDQUFDZSxTQUFKLENBQWMsY0FBZCxFQUE4QixVQUE5QjtBQUNBZixtQkFBRyxDQUFDZ0IsS0FBSixDQUFVdEIsYUFBYSxDQUFDQyxLQUFELENBQXZCO0FBQ0FLLG1CQUFHLENBQUNpQixHQUFKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbEJrQkMsNENBQUssQ0FBQ0MsUzs7QUFzQmJwQixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NpdGVtYXAueG1sLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsbyB9IGZyb20gJy4uL2xpYi9hcG9sbG9DbGllbnQnXG5pbXBvcnQgeyBmb3JtYXRGb3JVUkwgfSBmcm9tICcuLi9saWIvc3RyVXRpbHMnO1xuXG5cbmV4cG9ydCBjb25zdCBBTExfTE9DQVRJT05TX1FVRVJZID0gZ3FsYFxuICB7XG4gICAgY291bnRpZXMge1xuICAgICAgbmFtZVxuICAgICAgYWNjb3VudF9jaXR5IHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuXG5jb25zdCBjcmVhdGVTaXRlbWFwID0gKHBhdGhzKSA9PiBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG4gIDx1cmxzZXQgeG1sbnM9XCJodHRwOi8vd3d3LnNpdGVtYXBzLm9yZy9zY2hlbWFzL3NpdGVtYXAvMC45XCI+XG4gICAgJHtwYXRoc1xuICAgICAgLm1hcCgocGF0aCkgPT4ge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgIDx1cmw+XG4gICAgICAgICAgICAgICAgICAgIDxsb2M+JHtgaHR0cHM6Ly92cmVtZWEuaW9ua29tLmNvbS8ke3BhdGh9YH08L2xvYz5cbiAgICAgICAgICAgICAgICA8L3VybD5cbiAgICAgICAgICAgIGA7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpfVxuICA8L3VybHNldD5cbmA7XG5cblxuY2xhc3MgU2l0ZW1hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRTdGF0aWNQcm9wcyh7IHJlcyB9KSB7XG4gICAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBBTExfTE9DQVRJT05TX1FVRVJZXG4gICAgfSk7XG4gICAgY29uc3QgeyBjb3VudGllcyB9ID0gZGF0YTtcbiAgICBsZXQgcGF0aHMgPSBbXTtcbiAgICBjb3VudGllcy5mb3JFYWNoKGNvdW50eSA9PiB7XG4gICAgICBwYXRocyA9IHBhdGhzLmNvbmNhdChjb3VudHkuYWNjb3VudF9jaXR5Lm1hcChsb2NhdGlvbiA9PlxuICAgICAgICAgIGAvdnJlbWVhLyR7Zm9ybWF0Rm9yVVJMKGxvY2F0aW9uLm5hbWUpfS0ke2Zvcm1hdEZvclVSTChjb3VudHkubmFtZSl9LyR7bG9jYXRpb24uaWR9YFxuICAgICAgKSk7XG4gICAgICBwYXRocy5wdXNoKGAvdnJlbWVhLyR7Zm9ybWF0Rm9yVVJMKGNvdW50eS5uYW1lKX1gKTtcbiAgICB9KTtcbiAgICBwYXRocy5wdXNoKCcnKTtcblxuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3htbCcpO1xuICAgIHJlcy53cml0ZShjcmVhdGVTaXRlbWFwKHBhdGhzKSk7XG4gICAgcmVzLmVuZCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpdGVtYXA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sitemap.xml.js\n");

/***/ })

})