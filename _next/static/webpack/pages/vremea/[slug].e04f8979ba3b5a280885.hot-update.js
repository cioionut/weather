webpackHotUpdate_N_E("pages/vremea/[slug]",{

/***/ "./pages/vremea/[slug]/index.js":
/*!**************************************!*\
  !*** ./pages/vremea/[slug]/index.js ***!
  \**************************************/
/*! exports provided: __N_SSG, ALL_COUNTY_NAMES_QUERY, COUNTY_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_COUNTY_NAMES_QUERY\", function() { return ALL_COUNTY_NAMES_QUERY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COUNTY_QUERY\", function() { return COUNTY_QUERY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return County; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_ionut_workspace_ionkom_weather_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_listCities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/listCities */ \"./components/listCities.js\");\n/* harmony import */ var _components_currentweather__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/currentweather */ \"./components/currentweather.js\");\n/* harmony import */ var _lib_fetchUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../lib/fetchUtils */ \"./lib/fetchUtils.js\");\n/* harmony import */ var _components_main_ad_banner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/main_ad_banner */ \"./components/main_ad_banner.js\");\n/* harmony import */ var _data_init_fday5_weather__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/init_fday5_weather */ \"./data/init_fday5_weather.js\");\n\n\n\nvar _jsxFileName = \"/home/ionut/workspace/ionkom/weather/pages/vremea/[slug]/index.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = Object(_home_ionut_workspace_ionkom_weather_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query locationsByCounty($countyName: String!, $orderBy: account_cityOrderBy) {\\n    locationsByCounty(countyName: $countyName, orderBy: $orderBy) {\\n      id\\n      name\\n      account_county {\\n        id\\n        name\\n      }\\n      region\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_home_ionut_workspace_ionkom_weather_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    {\\n        counties {\\n          id\\n          name\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n // libs\n\n// components\n\n\n\n\n // data\n\n // graphQL\n\nvar __N_SSG = true;\nvar ALL_COUNTY_NAMES_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"gql\"])(_templateObject());\nvar COUNTY_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"gql\"])(_templateObject2());\nfunction County(_ref) {\n  _s();\n\n  var countyQueryVars = _ref.countyQueryVars;\n  var location;\n  var locDetect = false;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"])(COUNTY_QUERY, {\n    variables: countyQueryVars\n  }),\n      graphqlData = _useQuery.data;\n\n  var locationsByCounty = graphqlData.locationsByCounty;\n  var countyName = countyQueryVars.countyName;\n  var region = '';\n\n  if (locationsByCounty && locationsByCounty.length > 0) {\n    countyName = locationsByCounty[0].account_county.name;\n    region = locationsByCounty[0].region;\n  }\n\n  ;\n\n  var locationIcon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_7__[\"MdLocationOn\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 22\n  }, this); // set global SWR config\n\n\n  var cwSwrConfig = {\n    'initialData': {\n      'list': _data_init_fday5_weather__WEBPACK_IMPORTED_MODULE_13__[\"default\"].list,\n      'scity': _data_init_fday5_weather__WEBPACK_IMPORTED_MODULE_13__[\"default\"].city\n    },\n    'revalidateOnMount': true,\n    'revalidateOnFocus': false,\n    'revalidateOnReconnect': false,\n    'dedupingInterval': 10 * 60 * 1000,\n    'focusThrottleInterval': 10 * 60 * 1000,\n    'errorRetryCount': 0\n  }; // ip geolocation\n\n  var geoIpAPIUrlStr = \"https://freegeoip.app\";\n  var geoIpAPIUrl = new URL(\"\".concat(geoIpAPIUrlStr, \"/json/\"));\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(geoIpAPIUrl, _lib_fetchUtils__WEBPACK_IMPORTED_MODULE_11__[\"fetcher\"], cwSwrConfig),\n      geoIpData = _useSWR.data,\n      geoIpErr = _useSWR.error;\n\n  if (geoIpData && !geoIpErr) {\n    // set location var\n    location = {\n      name: geoIpData.city,\n      account_county: {\n        name: geoIpData.region_name\n      },\n      latitude: geoIpData.latitude,\n      longitude: geoIpData.longitude\n    };\n    locDetect = true;\n  } else {\n    locationIcon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_7__[\"MdLocationOff\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 20\n    }, this);\n  } // set weather api params\n\n\n  var openweatherApiUrl = \"https://api.openweathermap.org/data/2.5\";\n  var openweatherApiKey = \"a574739f847295ea9c1e2399bb70539b\";\n  var url = new URL(\"\".concat(openweatherApiUrl, \"/forecast\"));\n  var queryParams = {\n    lat: location && location.latitude,\n    lon: location && location.longitude,\n    lang: 'ro',\n    appid: openweatherApiKey,\n    units: 'metric'\n  }; // // call owm api\n  // Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]))\n  // const { data: weatherData, error } = useSWR(\n  //   () => location.latitude ? url : null, fetcher, cwSwrConfig);\n  // get weather from nextjs api routes\n\n  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function () {\n    return location.latitude ? \"/api/myforecast?lat=\".concat(location.latitude, \"&lon=\").concat(location.longitude, \"&lang=ro\") : null;\n  }, _lib_fetchUtils__WEBPACK_IMPORTED_MODULE_11__[\"fetcher\"], cwSwrConfig),\n      weatherData = _useSWR2.data,\n      error = _useSWR2.error; // set title\n\n\n  var title = \"Vremea \\xEEn jude\\u021Bul \".concat(countyName, \" - Meteo pe 15 zile\"); // render\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:site_name\",\n        content: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: \"\".concat(title)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:url\",\n        content: \"https://vremea.ionkom.com/\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Vremea \\xEEn jude\\u021Bul \".concat(countyName, \". Prognoza meteo cu temperatura, precipita\\u021Biile, v\\xE2ntul si umiditatea pentru 15 zile. Vezi vremea pentru localit\\u0103\\u021Bile din \").concat(countyName)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Container\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n        className: \"mt-1\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n          children: location ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_currentweather__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            weatherData: weatherData.list && weatherData.list[0],\n            location: location,\n            locDetect: locDetect\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 17\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: \"text-center\",\n            children: [\"Vremea \\xEEn jude\\u021Bul \", countyName, \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 140,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_main_ad_banner__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 147,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 146,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n          xs: 12,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: [\"Vezi cum va fi vremea \\xEEn urm\\u0103toarele zile \\xEEn jude\\u021Bul \", countyName, \", \", region]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 152,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_listCities__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            cities: locationsByCounty\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 153,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 123,\n    columnNumber: 5\n  }, this);\n}\n\n_s(County, \"+la0IvhbZcprl+KWq2qB0WeqbY0=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"], swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"], swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = County;\n\nvar _c;\n\n$RefreshReg$(_c, \"County\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdnJlbWVhL1tzbHVnXS9pbmRleC5qcz82YTVmIl0sIm5hbWVzIjpbIkFMTF9DT1VOVFlfTkFNRVNfUVVFUlkiLCJncWwiLCJDT1VOVFlfUVVFUlkiLCJDb3VudHkiLCJjb3VudHlRdWVyeVZhcnMiLCJsb2NhdGlvbiIsImxvY0RldGVjdCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiZ3JhcGhxbERhdGEiLCJkYXRhIiwibG9jYXRpb25zQnlDb3VudHkiLCJjb3VudHlOYW1lIiwicmVnaW9uIiwibGVuZ3RoIiwiYWNjb3VudF9jb3VudHkiLCJuYW1lIiwibG9jYXRpb25JY29uIiwiY3dTd3JDb25maWciLCJpbml0V0RhdGEiLCJsaXN0IiwiY2l0eSIsImdlb0lwQVBJVXJsU3RyIiwicHJvY2VzcyIsImdlb0lwQVBJVXJsIiwiVVJMIiwidXNlU1dSIiwiZmV0Y2hlciIsImdlb0lwRGF0YSIsImdlb0lwRXJyIiwiZXJyb3IiLCJyZWdpb25fbmFtZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwib3BlbndlYXRoZXJBcGlVcmwiLCJvcGVud2VhdGhlckFwaUtleSIsInVybCIsInF1ZXJ5UGFyYW1zIiwibGF0IiwibG9uIiwibGFuZyIsImFwcGlkIiwidW5pdHMiLCJ3ZWF0aGVyRGF0YSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0NBR0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtDQUdBOztDQUdBOzs7QUFDTyxJQUFNQSxzQkFBc0IsR0FBR0MsMERBQUgsbUJBQTVCO0FBUUEsSUFBTUMsWUFBWSxHQUFHRCwwREFBSCxvQkFBbEI7QUFlUSxTQUFTRSxNQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjtBQUVsRCxNQUFJQyxRQUFKO0FBQ0EsTUFBSUMsU0FB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cURBQStDTSxVQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBV0UscUVBQUMsbURBQUQ7QUFBQSwrQkFDRSxxRUFBQyxtREFBRDtBQUFBLGlDQUNFLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBZ0JFLHFFQUFDLG1EQUFEO0FBQUEsK0JBQ0UscUVBQUMsbURBQUQ7QUFBSyxZQUFFLEVBQUUsRUFBVDtBQUFBLGtDQUNFO0FBQUEsZ0dBQTBEQSxVQUExRCxRQUF3RUMsTUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUscUVBQUMsOERBQUQ7QUFBWSxrQkFBTSxFQUFFRjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQ0Q7O0dBL0d1QlIsTTtVQUlRSSx1RCxFQTZCZW1CLDJDLEVBaUNSQSwyQzs7O0tBbEVmdkIsTSIsImZpbGUiOiIuL3BhZ2VzL3ZyZW1lYS9bc2x1Z10vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBNZExvY2F0aW9uT24sIE1kTG9jYXRpb25PZmYgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcblxuLy8gbGlic1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsbyB9IGZyb20gJy4uLy4uLy4uL2xpYi9hcG9sbG9DbGllbnQnXG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IExpc3RDaXRpZXMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9saXN0Q2l0aWVzJztcbmltcG9ydCBDdXJyZW50V2VhdGhlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2N1cnJlbnR3ZWF0aGVyJztcbmltcG9ydCB7IGZvcm1hdEZvclVSTCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJVdGlscyc7XG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vbGliL2ZldGNoVXRpbHMnO1xuaW1wb3J0IE1haW5BZEJhbm5lciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21haW5fYWRfYmFubmVyJztcblxuLy8gZGF0YVxuaW1wb3J0IGluaXRXRGF0YSBmcm9tICcuLi8uLi8uLi9kYXRhL2luaXRfZmRheTVfd2VhdGhlcic7XG5cbi8vIGdyYXBoUUxcbmV4cG9ydCBjb25zdCBBTExfQ09VTlRZX05BTUVTX1FVRVJZID0gZ3FsYFxuICAgIHtcbiAgICAgICAgY291bnRpZXMge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbmFtZVxuICAgICAgICB9XG4gICAgfVxuYDtcbmV4cG9ydCBjb25zdCBDT1VOVFlfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IGxvY2F0aW9uc0J5Q291bnR5KCRjb3VudHlOYW1lOiBTdHJpbmchLCAkb3JkZXJCeTogYWNjb3VudF9jaXR5T3JkZXJCeSkge1xuICAgIGxvY2F0aW9uc0J5Q291bnR5KGNvdW50eU5hbWU6ICRjb3VudHlOYW1lLCBvcmRlckJ5OiAkb3JkZXJCeSkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGFjY291bnRfY291bnR5IHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgICAgcmVnaW9uXG4gICAgfVxuICB9XG5gO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdW50eSh7IGNvdW50eVF1ZXJ5VmFycyB9KSB7XG5cbiAgbGV0IGxvY2F0aW9uO1xuICBsZXQgbG9jRGV0ZWN0ID0gZmFsc2U7XG4gIGNvbnN0IHsgZGF0YTogZ3JhcGhxbERhdGEgfSA9IHVzZVF1ZXJ5KFxuICAgIENPVU5UWV9RVUVSWSxcbiAgICB7XG4gICAgICB2YXJpYWJsZXM6IGNvdW50eVF1ZXJ5VmFyc1xuICAgIH1cbiAgKTtcbiAgbGV0IHsgbG9jYXRpb25zQnlDb3VudHkgfSA9IGdyYXBocWxEYXRhO1xuICBsZXQgY291bnR5TmFtZSA9IGNvdW50eVF1ZXJ5VmFycy5jb3VudHlOYW1lO1xuICBsZXQgcmVnaW9uID0gJyc7XG4gIGlmIChsb2NhdGlvbnNCeUNvdW50eSAmJiBsb2NhdGlvbnNCeUNvdW50eS5sZW5ndGggPiAwKSB7XG4gICAgY291bnR5TmFtZSA9IGxvY2F0aW9uc0J5Q291bnR5WzBdLmFjY291bnRfY291bnR5Lm5hbWU7XG4gICAgcmVnaW9uID0gbG9jYXRpb25zQnlDb3VudHlbMF0ucmVnaW9uO1xuICB9O1xuICBsZXQgbG9jYXRpb25JY29uID0gPE1kTG9jYXRpb25Pbi8+O1xuXG4gIC8vIHNldCBnbG9iYWwgU1dSIGNvbmZpZ1xuICBsZXQgY3dTd3JDb25maWcgPSB7XG4gICAgJ2luaXRpYWxEYXRhJzogeyAnbGlzdCc6IGluaXRXRGF0YS5saXN0LCAnc2NpdHknOiBpbml0V0RhdGEuY2l0eSB9LFxuICAgICdyZXZhbGlkYXRlT25Nb3VudCc6IHRydWUsXG4gICAgJ3JldmFsaWRhdGVPbkZvY3VzJzogZmFsc2UsXG4gICAgJ3JldmFsaWRhdGVPblJlY29ubmVjdCc6IGZhbHNlLFxuICAgICdkZWR1cGluZ0ludGVydmFsJzogMTAqNjAqMTAwMCxcbiAgICAnZm9jdXNUaHJvdHRsZUludGVydmFsJzogMTAqNjAqMTAwMCxcbiAgICAnZXJyb3JSZXRyeUNvdW50JzogMFxuICB9O1xuICBcbiAgLy8gaXAgZ2VvbG9jYXRpb25cbiAgY29uc3QgZ2VvSXBBUElVcmxTdHIgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GUkVFR0VPSVBfQVBJO1xuICBsZXQgZ2VvSXBBUElVcmwgPSBuZXcgVVJMKGAke2dlb0lwQVBJVXJsU3RyfS9qc29uL2ApO1xuICBjb25zdCB7IGRhdGE6IGdlb0lwRGF0YSwgZXJyb3I6IGdlb0lwRXJyIH0gPSB1c2VTV1IoZ2VvSXBBUElVcmwsIGZldGNoZXIsIGN3U3dyQ29uZmlnKTtcblxuICBpZiAoZ2VvSXBEYXRhICYmICFnZW9JcEVycikge1xuICAgIC8vIHNldCBsb2NhdGlvbiB2YXJcbiAgICBsb2NhdGlvbiA9IHtcbiAgICAgIG5hbWU6IGdlb0lwRGF0YS5jaXR5LFxuICAgICAgYWNjb3VudF9jb3VudHk6IHsgbmFtZTogZ2VvSXBEYXRhLnJlZ2lvbl9uYW1lIH0sXG4gICAgICBsYXRpdHVkZTogZ2VvSXBEYXRhLmxhdGl0dWRlLFxuICAgICAgbG9uZ2l0dWRlOiBnZW9JcERhdGEubG9uZ2l0dWRlLFxuICAgIH07XG4gICAgbG9jRGV0ZWN0ID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBsb2NhdGlvbkljb24gPSA8TWRMb2NhdGlvbk9mZi8+XG4gIH1cbiAgXG4gIC8vIHNldCB3ZWF0aGVyIGFwaSBwYXJhbXNcbiAgY29uc3Qgb3BlbndlYXRoZXJBcGlVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUEVOV0VBVEhFUl9BUElfVVJMO1xuICBjb25zdCBvcGVud2VhdGhlckFwaUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09QRU5XRUFUSEVSX0FQSV9LRVk7XG5cbiAgbGV0IHVybCA9IG5ldyBVUkwoYCR7b3BlbndlYXRoZXJBcGlVcmx9L2ZvcmVjYXN0YCk7XG4gIGxldCBxdWVyeVBhcmFtcyA9IHtcbiAgICBsYXQ6IGxvY2F0aW9uICYmIGxvY2F0aW9uLmxhdGl0dWRlLCBcbiAgICBsb246IGxvY2F0aW9uICYmIGxvY2F0aW9uLmxvbmdpdHVkZSwgXG4gICAgbGFuZzogJ3JvJyxcbiAgICBhcHBpZDogb3BlbndlYXRoZXJBcGlLZXksXG4gICAgdW5pdHM6ICdtZXRyaWMnXG4gIH07XG4gIC8vIC8vIGNhbGwgb3dtIGFwaVxuICAvLyBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaChrZXkgPT4gdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCBxdWVyeVBhcmFtc1trZXldKSlcbiAgLy8gY29uc3QgeyBkYXRhOiB3ZWF0aGVyRGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcbiAgLy8gICAoKSA9PiBsb2NhdGlvbi5sYXRpdHVkZSA/IHVybCA6IG51bGwsIGZldGNoZXIsIGN3U3dyQ29uZmlnKTtcblxuICAvLyBnZXQgd2VhdGhlciBmcm9tIG5leHRqcyBhcGkgcm91dGVzXG4gIGNvbnN0IHsgZGF0YTogd2VhdGhlckRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgKCkgPT4gbG9jYXRpb24ubGF0aXR1ZGUgPyBgL2FwaS9teWZvcmVjYXN0P2xhdD0ke2xvY2F0aW9uLmxhdGl0dWRlfSZsb249JHtsb2NhdGlvbi5sb25naXR1ZGV9Jmxhbmc9cm9gIDogbnVsbCxcbiAgICBmZXRjaGVyLCBjd1N3ckNvbmZpZyk7XG5cbiAgLy8gc2V0IHRpdGxlXG4gIGNvbnN0IHRpdGxlID0gYFZyZW1lYSDDrm4ganVkZcibdWwgJHtjb3VudHlOYW1lfSAtIE1ldGVvIHBlIDE1IHppbGVgO1xuXG4gIC8vIHJlbmRlclxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e3RpdGxlfT48L21ldGE+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgJHt0aXRsZX1gfT48L21ldGE+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vdnJlbWVhLmlvbmtvbS5jb20vXCI+PC9tZXRhPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9e2BWcmVtZWEgw65uIGp1ZGXIm3VsICR7Y291bnR5TmFtZX0uIFByb2dub3phIG1ldGVvIGN1IHRlbXBlcmF0dXJhLCBwcmVjaXBpdGHIm2lpbGUsIHbDom50dWwgc2kgdW1pZGl0YXRlYSBwZW50cnUgMTUgemlsZS4gVmV6aSB2cmVtZWEgcGVudHJ1IGxvY2FsaXTEg8ibaWxlIGRpbiAke2NvdW50eU5hbWV9YH1cbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIHsvKiBjdXJyZW50IHdlYXRoZXIgKi99XG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICB7bG9jYXRpb25cbiAgICAgICAgICAgICAgPyA8Q3VycmVudFdlYXRoZXIgd2VhdGhlckRhdGE9e3dlYXRoZXJEYXRhLmxpc3QgJiYgd2VhdGhlckRhdGEubGlzdFswXX0gbG9jYXRpb249e2xvY2F0aW9ufSBsb2NEZXRlY3Q9e2xvY0RldGVjdH0gLz5cbiAgICAgICAgICAgICAgOiA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5WcmVtZWEgw65uIGp1ZGXIm3VsIHtjb3VudHlOYW1lfSA8L2gxPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgey8qIG1haW4gYWQgYmFubmVyICovfVxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICA8TWFpbkFkQmFubmVyIC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezEyfT5cbiAgICAgICAgICAgIDxoMz5WZXppIGN1bSB2YSBmaSB2cmVtZWEgw65uIHVybcSDdG9hcmVsZSB6aWxlIMOubiBqdWRlyJt1bCB7Y291bnR5TmFtZX0sIHtyZWdpb259PC9oMz5cbiAgICAgICAgICAgIDxMaXN0Q2l0aWVzIGNpdGllcz17bG9jYXRpb25zQnlDb3VudHl9Lz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKVxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IEFMTF9DT1VOVFlfTkFNRVNfUVVFUlksXG4gIH0pXG4gIGxldCB7IGNvdW50aWVzIH0gPSBkYXRhO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGNvdW50aWVzLm1hcChjb3VudHkgPT4gKHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzbHVnOiBmb3JtYXRGb3JVUkwoY291bnR5Lm5hbWUpXG4gICAgICB9XG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGxldCBjb3VudHlOYW1lID0gcGFyYW1zLnNsdWc7XG4gIC8vIHRvZG8gZmluZCBhIGJldHRlciBzb2x1dGlvbiAtIHF1aWNrIGZpeFxuICBpZiAoY291bnR5TmFtZSA9PSAnc2F0dS1tYXJlJykgY291bnR5TmFtZSA9IGNvdW50eU5hbWUucmVwbGFjZSgnLScsICcgJyk7XG5cbiAgY29uc3QgY291bnR5UXVlcnlWYXJzID0ge1xuICAgIGNvdW50eU5hbWUsXG4gICAgb3JkZXJCeToge1xuICAgICAgXCJuYW1lXCI6IFwiYXNjXCJcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKVxuXG4gIGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IENPVU5UWV9RVUVSWSxcbiAgICB2YXJpYWJsZXM6IGNvdW50eVF1ZXJ5VmFyc1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBpbml0aWFsQXBvbGxvU3RhdGU6IGFwb2xsb0NsaWVudC5jYWNoZS5leHRyYWN0KCksXG4gICAgICBjb3VudHlRdWVyeVZhcnNcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/vremea/[slug]/index.js\n");

/***/ })

})