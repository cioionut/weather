webpackHotUpdate_N_E("pages/vremea/[slug]",{

/***/ "./pages/vremea/[slug]/index.js":
/*!**************************************!*\
  !*** ./pages/vremea/[slug]/index.js ***!
  \**************************************/
/*! exports provided: __N_SSG, ALL_COUNTY_NAMES_QUERY, COUNTY_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_COUNTY_NAMES_QUERY\", function() { return ALL_COUNTY_NAMES_QUERY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COUNTY_QUERY\", function() { return COUNTY_QUERY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return County; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_ionut_workspace_ionkom_weather_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_listCities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/listCities */ \"./components/listCities.js\");\n/* harmony import */ var _components_currentweather__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/currentweather */ \"./components/currentweather.js\");\n/* harmony import */ var _lib_fetchUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../lib/fetchUtils */ \"./lib/fetchUtils.js\");\n/* harmony import */ var _data_init_fday5_weather__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../data/init_fday5_weather */ \"./data/init_fday5_weather.js\");\n\n\n\n\nvar _jsxFileName = \"/home/ionut/workspace/ionkom/weather/pages/vremea/[slug]/index.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = Object(_home_ionut_workspace_ionkom_weather_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query locationsByCounty($countyName: String!, $orderBy: account_cityOrderBy) {\\n    locationsByCounty(countyName: $countyName, orderBy: $orderBy) {\\n      id\\n      name\\n      account_county {\\n        id\\n        name\\n      }\\n      region\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_home_ionut_workspace_ionkom_weather_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    {\\n        counties {\\n          id\\n          name\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n // libs\n\n// components\n\n\n\n // data\n\n // graphQL\n\nvar __N_SSG = true;\nvar ALL_COUNTY_NAMES_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"gql\"])(_templateObject());\nvar COUNTY_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"gql\"])(_templateObject2());\nfunction County(_ref) {\n  _s();\n\n  var countyQueryVars = _ref.countyQueryVars;\n  var location;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"])(COUNTY_QUERY, {\n    variables: countyQueryVars\n  }),\n      graphqlData = _useQuery.data;\n\n  var locationsByCounty = graphqlData.locationsByCounty;\n  var countyName = countyQueryVars.countyName;\n  var region = '';\n\n  if (locationsByCounty && locationsByCounty.length > 0) {\n    countyName = locationsByCounty[0].account_county.name;\n    region = locationsByCounty[0].region;\n  }\n\n  ;\n\n  var locationIcon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_7__[\"MdLocationOn\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 22\n  }, this); // set global SWR config\n\n\n  var cwSwrConfig = {\n    'initialData': {\n      'list': _data_init_fday5_weather__WEBPACK_IMPORTED_MODULE_12__[\"default\"].list,\n      'scity': _data_init_fday5_weather__WEBPACK_IMPORTED_MODULE_12__[\"default\"].city\n    },\n    'revalidateOnMount': true,\n    'revalidateOnFocus': false,\n    'revalidateOnReconnect': false,\n    'dedupingInterval': 10 * 60 * 1000,\n    'focusThrottleInterval': 10 * 60 * 1000,\n    'errorRetryCount': 0\n  }; // ip geolocation\n\n  var geoIpAPIUrlStr = \"https://freegeoip.app\";\n  var geoIpAPIUrl = new URL(\"\".concat(geoIpAPIUrlStr, \"/json/\"));\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(geoIpAPIUrl, _lib_fetchUtils__WEBPACK_IMPORTED_MODULE_11__[\"fetcher\"], cwSwrConfig),\n      geoIpData = _useSWR.data,\n      geoIpErr = _useSWR.error;\n\n  if (geoIpData && !geoIpErr) {\n    // set location var\n    location = {\n      name: geoIpData.city,\n      account_county: {\n        name: geoIpData.region_name\n      },\n      latitude: geoIpData.latitude,\n      longitude: geoIpData.longitude\n    };\n  } else {\n    locationIcon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_7__[\"MdLocationOff\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 20\n    }, this);\n  } // set weather api params\n\n\n  var openweatherApiUrl = \"https://api.openweathermap.org/data/2.5\";\n  var openweatherApiKey = \"a574739f847295ea9c1e2399bb70539b\";\n  var url = new URL(\"\".concat(openweatherApiUrl, \"/forecast\"));\n  var queryParams = {\n    lat: location && location.latitude,\n    lon: location && location.longitude,\n    lang: 'ro',\n    appid: openweatherApiKey,\n    units: 'metric'\n  }; // // call owm api\n  // Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]))\n  // const { data: weatherData, error } = useSWR(\n  //   () => location.latitude ? url : null, fetcher, cwSwrConfig);\n  // get weather from nextjs api routes\n\n  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function () {\n    return location.latitude ? \"/api/myforecast?lat=\".concat(location.latitude, \"&lon=\").concat(location.longitude, \"&lang=ro\") : null;\n  }, _lib_fetchUtils__WEBPACK_IMPORTED_MODULE_11__[\"fetcher\"], cwSwrConfig),\n      weatherData = _useSWR2.data,\n      error = _useSWR2.error; // set title\n\n\n  var title = \"Vremea \\xEEn jude\\u021Bul \".concat(countyName, \", Meteo pe 15 zile\"); // render\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:site_name\",\n        content: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: \"\".concat(title)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:url\",\n        content: \"https://vremea.ionkom.com/\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Vremea \\xEEn jude\\u021Bul \".concat(countyName, \". Prognoza meteo cu temperatura, precipita\\u021Biile, v\\xE2ntul si umiditatea pentru 15 zile. Vezi vremea pentru localit\\u0103\\u021Bile din \").concat(countyName)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Container\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n        className: \"justify-content-center\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n          children: location ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: \"text-center\",\n            children: [\"Vremea \\xEEn \", location.name, \", jude\\u021Bul \", location.account_county.name]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 135,\n            columnNumber: 17\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: \"text-center\",\n            children: [\"Vremea \\xEEn jude\\u021Bul \", countyName, \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 9\n      }, this), location && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 144,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"Vremea acum\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 147,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 146,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n          style: {\n            marginTop: 0\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 150,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_currentweather__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            weatherData: weatherData.list && weatherData.list[0]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 152,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n            className: \"text-right\",\n            style: {\n              fontWeight: '350'\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [locationIcon, \" Meteo folosind loca\\u021Bia dispozitivului t\\u0103u\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 156,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 155,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 159,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n          xs: 12,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: [\"Vezi cum va fi vremea \\xEEn urm\\u0103toarele zile \\xEEn jude\\u021Bul \", countyName, \", \", region]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 164,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_listCities__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            cities: locationsByCounty\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 165,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 163,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 162,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 120,\n    columnNumber: 5\n  }, this);\n}\n\n_s(County, \"+la0IvhbZcprl+KWq2qB0WeqbY0=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"], swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"], swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = County;\n\nvar _c;\n\n$RefreshReg$(_c, \"County\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdnJlbWVhL1tzbHVnXS9pbmRleC5qcz82YTVmIl0sIm5hbWVzIjpbIkFMTF9DT1VOVFlfTkFNRVNfUVVFUlkiLCJncWwiLCJDT1VOVFlfUVVFUlkiLCJDb3VudHkiLCJjb3VudHlRdWVyeVZhcnMiLCJsb2NhdGlvbiIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiZ3JhcGhxbERhdGEiLCJkYXRhIiwibG9jYXRpb25zQnlDb3VudHkiLCJjb3VudHlOYW1lIiwicmVnaW9uIiwibGVuZ3RoIiwiYWNjb3VudF9jb3VudHkiLCJuYW1lIiwibG9jYXRpb25JY29uIiwiY3dTd3JDb25maWciLCJpbml0V0RhdGEiLCJsaXN0IiwiY2l0eSIsImdlb0lwQVBJVXJsU3RyIiwicHJvY2VzcyIsImdlb0lwQVBJVXJsIiwiVVJMIiwidXNlU1dSIiwiZmV0Y2hlciIsImdlb0lwRGF0YSIsImdlb0lwRXJyIiwiZXJyb3IiLCJyZWdpb25fbmFtZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwib3BlbndlYXRoZXJBcGlVcmwiLCJvcGVud2VhdGhlckFwaUtleSIsInVybCIsInF1ZXJ5UGFyYW1zIiwibGF0IiwibG9uIiwibGFuZyIsImFwcGlkIiwidW5pdHMiLCJ3ZWF0aGVyRGF0YSIsInRpdGxlIiwibWFyZ2luVG9wIiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtDQUdBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0NBR0E7OztBQUNPLElBQU1BLHNCQUFzQixHQUFHQywwREFBSCxtQkFBNUI7QUFRQSxJQUFNQyxZQUFZLEdBQUdELDBEQUFILG9CQUFsQjtBQWVRLFNBQVNFLE1BQVQsT0FBcUM7QUFBQTs7QUFBQSxNQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1CO0FBRWxELE1BQUlDLFFBQUo7O0FBRmtE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QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0REOztHQTVIdUJQLE07VUFHUUcsdUQsRUE2QmVtQiwyQyxFQWdDUkEsMkM7OztLQWhFZnRCLE0iLCJmaWxlIjoiLi9wYWdlcy92cmVtZWEvW3NsdWddL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgTWRMb2NhdGlvbk9uLCBNZExvY2F0aW9uT2ZmIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5cbi8vIGxpYnNcbmltcG9ydCB7IGluaXRpYWxpemVBcG9sbG8gfSBmcm9tICcuLi8uLi8uLi9saWIvYXBvbGxvQ2xpZW50J1xuXG4vLyBjb21wb25lbnRzXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IExpc3RDaXRpZXMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9saXN0Q2l0aWVzJztcbmltcG9ydCBDdXJyZW50V2VhdGhlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2N1cnJlbnR3ZWF0aGVyJztcbmltcG9ydCB7IGZvcm1hdEZvclVSTCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJVdGlscyc7XG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vbGliL2ZldGNoVXRpbHMnO1xuXG4vLyBkYXRhXG5pbXBvcnQgaW5pdFdEYXRhIGZyb20gJy4uLy4uLy4uL2RhdGEvaW5pdF9mZGF5NV93ZWF0aGVyJztcblxuLy8gZ3JhcGhRTFxuZXhwb3J0IGNvbnN0IEFMTF9DT1VOVFlfTkFNRVNfUVVFUlkgPSBncWxgXG4gICAge1xuICAgICAgICBjb3VudGllcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBuYW1lXG4gICAgICAgIH1cbiAgICB9XG5gO1xuZXhwb3J0IGNvbnN0IENPVU5UWV9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgbG9jYXRpb25zQnlDb3VudHkoJGNvdW50eU5hbWU6IFN0cmluZyEsICRvcmRlckJ5OiBhY2NvdW50X2NpdHlPcmRlckJ5KSB7XG4gICAgbG9jYXRpb25zQnlDb3VudHkoY291bnR5TmFtZTogJGNvdW50eU5hbWUsIG9yZGVyQnk6ICRvcmRlckJ5KSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgYWNjb3VudF9jb3VudHkge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgICByZWdpb25cbiAgICB9XG4gIH1cbmA7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291bnR5KHsgY291bnR5UXVlcnlWYXJzIH0pIHtcblxuICBsZXQgbG9jYXRpb247XG4gIGNvbnN0IHsgZGF0YTogZ3JhcGhxbERhdGEgfSA9IHVzZVF1ZXJ5KFxuICAgIENPVU5UWV9RVUVSWSxcbiAgICB7XG4gICAgICB2YXJpYWJsZXM6IGNvdW50eVF1ZXJ5VmFyc1xuICAgIH1cbiAgKTtcbiAgbGV0IHsgbG9jYXRpb25zQnlDb3VudHkgfSA9IGdyYXBocWxEYXRhO1xuICBsZXQgY291bnR5TmFtZSA9IGNvdW50eVF1ZXJ5VmFycy5jb3VudHlOYW1lO1xuICBsZXQgcmVnaW9uID0gJyc7XG4gIGlmIChsb2NhdGlvbnNCeUNvdW50eSAmJiBsb2NhdGlvbnNCeUNvdW50eS5sZW5ndGggPiAwKSB7XG4gICAgY291bnR5TmFtZSA9IGxvY2F0aW9uc0J5Q291bnR5WzBdLmFjY291bnRfY291bnR5Lm5hbWU7XG4gICAgcmVnaW9uID0gbG9jYXRpb25zQnlDb3VudHlbMF0ucmVnaW9uO1xuICB9O1xuICBsZXQgbG9jYXRpb25JY29uID0gPE1kTG9jYXRpb25Pbi8+O1xuXG4gIC8vIHNldCBnbG9iYWwgU1dSIGNvbmZpZ1xuICBsZXQgY3dTd3JDb25maWcgPSB7XG4gICAgJ2luaXRpYWxEYXRhJzogeyAnbGlzdCc6IGluaXRXRGF0YS5saXN0LCAnc2NpdHknOiBpbml0V0RhdGEuY2l0eSB9LFxuICAgICdyZXZhbGlkYXRlT25Nb3VudCc6IHRydWUsXG4gICAgJ3JldmFsaWRhdGVPbkZvY3VzJzogZmFsc2UsXG4gICAgJ3JldmFsaWRhdGVPblJlY29ubmVjdCc6IGZhbHNlLFxuICAgICdkZWR1cGluZ0ludGVydmFsJzogMTAqNjAqMTAwMCxcbiAgICAnZm9jdXNUaHJvdHRsZUludGVydmFsJzogMTAqNjAqMTAwMCxcbiAgICAnZXJyb3JSZXRyeUNvdW50JzogMFxuICB9O1xuICBcbiAgLy8gaXAgZ2VvbG9jYXRpb25cbiAgY29uc3QgZ2VvSXBBUElVcmxTdHIgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GUkVFR0VPSVBfQVBJO1xuICBsZXQgZ2VvSXBBUElVcmwgPSBuZXcgVVJMKGAke2dlb0lwQVBJVXJsU3RyfS9qc29uL2ApO1xuICBjb25zdCB7IGRhdGE6IGdlb0lwRGF0YSwgZXJyb3I6IGdlb0lwRXJyIH0gPSB1c2VTV1IoZ2VvSXBBUElVcmwsIGZldGNoZXIsIGN3U3dyQ29uZmlnKTtcblxuICBpZiAoZ2VvSXBEYXRhICYmICFnZW9JcEVycikge1xuICAgIC8vIHNldCBsb2NhdGlvbiB2YXJcbiAgICBsb2NhdGlvbiA9IHtcbiAgICAgIG5hbWU6IGdlb0lwRGF0YS5jaXR5LFxuICAgICAgYWNjb3VudF9jb3VudHk6IHsgbmFtZTogZ2VvSXBEYXRhLnJlZ2lvbl9uYW1lIH0sXG4gICAgICBsYXRpdHVkZTogZ2VvSXBEYXRhLmxhdGl0dWRlLFxuICAgICAgbG9uZ2l0dWRlOiBnZW9JcERhdGEubG9uZ2l0dWRlLFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbG9jYXRpb25JY29uID0gPE1kTG9jYXRpb25PZmYvPlxuICB9XG4gIFxuICAvLyBzZXQgd2VhdGhlciBhcGkgcGFyYW1zXG4gIGNvbnN0IG9wZW53ZWF0aGVyQXBpVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT1BFTldFQVRIRVJfQVBJX1VSTDtcbiAgY29uc3Qgb3BlbndlYXRoZXJBcGlLZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUEVOV0VBVEhFUl9BUElfS0VZO1xuXG4gIGxldCB1cmwgPSBuZXcgVVJMKGAke29wZW53ZWF0aGVyQXBpVXJsfS9mb3JlY2FzdGApO1xuICBsZXQgcXVlcnlQYXJhbXMgPSB7XG4gICAgbGF0OiBsb2NhdGlvbiAmJiBsb2NhdGlvbi5sYXRpdHVkZSwgXG4gICAgbG9uOiBsb2NhdGlvbiAmJiBsb2NhdGlvbi5sb25naXR1ZGUsIFxuICAgIGxhbmc6ICdybycsXG4gICAgYXBwaWQ6IG9wZW53ZWF0aGVyQXBpS2V5LFxuICAgIHVuaXRzOiAnbWV0cmljJ1xuICB9O1xuICAvLyAvLyBjYWxsIG93bSBhcGlcbiAgLy8gT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpLmZvckVhY2goa2V5ID0+IHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgcXVlcnlQYXJhbXNba2V5XSkpXG4gIC8vIGNvbnN0IHsgZGF0YTogd2VhdGhlckRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG4gIC8vICAgKCkgPT4gbG9jYXRpb24ubGF0aXR1ZGUgPyB1cmwgOiBudWxsLCBmZXRjaGVyLCBjd1N3ckNvbmZpZyk7XG5cbiAgLy8gZ2V0IHdlYXRoZXIgZnJvbSBuZXh0anMgYXBpIHJvdXRlc1xuICBjb25zdCB7IGRhdGE6IHdlYXRoZXJEYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgICgpID0+IGxvY2F0aW9uLmxhdGl0dWRlID8gYC9hcGkvbXlmb3JlY2FzdD9sYXQ9JHtsb2NhdGlvbi5sYXRpdHVkZX0mbG9uPSR7bG9jYXRpb24ubG9uZ2l0dWRlfSZsYW5nPXJvYCA6IG51bGwsXG4gICAgZmV0Y2hlciwgY3dTd3JDb25maWcpO1xuXG4gIC8vIHNldCB0aXRsZVxuICBjb25zdCB0aXRsZSA9IGBWcmVtZWEgw65uIGp1ZGXIm3VsICR7Y291bnR5TmFtZX0sIE1ldGVvIHBlIDE1IHppbGVgO1xuXG4gIC8vIHJlbmRlclxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e3RpdGxlfT48L21ldGE+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgJHt0aXRsZX1gfT48L21ldGE+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vdnJlbWVhLmlvbmtvbS5jb20vXCI+PC9tZXRhPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9e2BWcmVtZWEgw65uIGp1ZGXIm3VsICR7Y291bnR5TmFtZX0uIFByb2dub3phIG1ldGVvIGN1IHRlbXBlcmF0dXJhLCBwcmVjaXBpdGHIm2lpbGUsIHbDom50dWwgc2kgdW1pZGl0YXRlYSBwZW50cnUgMTUgemlsZS4gVmV6aSB2cmVtZWEgcGVudHJ1IGxvY2FsaXTEg8ibaWxlIGRpbiAke2NvdW50eU5hbWV9YH1cbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICB7bG9jYXRpb25cbiAgICAgICAgICAgICAgPyA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5WcmVtZWEgw65uIHtsb2NhdGlvbi5uYW1lfSwganVkZcibdWwge2xvY2F0aW9uLmFjY291bnRfY291bnR5Lm5hbWV9PC9oMT5cblxuICAgICAgICAgICAgICA6IDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlZyZW1lYSDDrm4ganVkZcibdWwge2NvdW50eU5hbWV9IDwvaDE+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9Db2w+IFxuICAgICAgICA8L1Jvdz5cbiAgICAgICAge2xvY2F0aW9uICYmIFxuICAgICAgICA8PlxuICAgICAgICAgIHsvKiB2cmVtZWEgY3VyZW50YSAqL31cbiAgICAgICAgICA8aHIvPlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICA8aDI+VnJlbWVhIGFjdW08L2gyPlxuICAgICAgICAgICAgPC9Db2w+IFxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxociBzdHlsZT17e21hcmdpblRvcDogMH19Lz5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPEN1cnJlbnRXZWF0aGVyIHdlYXRoZXJEYXRhPXt3ZWF0aGVyRGF0YS5saXN0ICYmIHdlYXRoZXJEYXRhLmxpc3RbMF19Lz5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgZm9udFdlaWdodDogJzM1MCcgfX0+XG4gICAgICAgICAgICAgIDxwPntsb2NhdGlvbkljb259IE1ldGVvIGZvbG9zaW5kIGxvY2HIm2lhIGRpc3Bveml0aXZ1bHVpIHTEg3U8L3A+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8aHIvPlxuICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezEyfT5cbiAgICAgICAgICAgIDxoMz5WZXppIGN1bSB2YSBmaSB2cmVtZWEgw65uIHVybcSDdG9hcmVsZSB6aWxlIMOubiBqdWRlyJt1bCB7Y291bnR5TmFtZX0sIHtyZWdpb259PC9oMz5cbiAgICAgICAgICAgIDxMaXN0Q2l0aWVzIGNpdGllcz17bG9jYXRpb25zQnlDb3VudHl9Lz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKVxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IEFMTF9DT1VOVFlfTkFNRVNfUVVFUlksXG4gIH0pXG4gIGxldCB7IGNvdW50aWVzIH0gPSBkYXRhO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGNvdW50aWVzLm1hcChjb3VudHkgPT4gKHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzbHVnOiBmb3JtYXRGb3JVUkwoY291bnR5Lm5hbWUpXG4gICAgICB9XG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGxldCBjb3VudHlOYW1lID0gcGFyYW1zLnNsdWc7XG4gIC8vIHRvZG8gZmluZCBhIGJldHRlciBzb2x1dGlvbiAtIHF1aWNrIGZpeFxuICBpZiAoY291bnR5TmFtZSA9PSAnc2F0dS1tYXJlJykgY291bnR5TmFtZSA9IGNvdW50eU5hbWUucmVwbGFjZSgnLScsICcgJyk7XG5cbiAgY29uc3QgY291bnR5UXVlcnlWYXJzID0ge1xuICAgIGNvdW50eU5hbWUsXG4gICAgb3JkZXJCeToge1xuICAgICAgXCJuYW1lXCI6IFwiYXNjXCJcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKVxuXG4gIGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IENPVU5UWV9RVUVSWSxcbiAgICB2YXJpYWJsZXM6IGNvdW50eVF1ZXJ5VmFyc1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBpbml0aWFsQXBvbGxvU3RhdGU6IGFwb2xsb0NsaWVudC5jYWNoZS5leHRyYWN0KCksXG4gICAgICBjb3VudHlRdWVyeVZhcnNcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/vremea/[slug]/index.js\n");

/***/ })

})