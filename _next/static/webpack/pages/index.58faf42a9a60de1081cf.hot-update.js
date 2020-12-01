webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, ALL_COUNTIES_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_COUNTIES_QUERY\", function() { return ALL_COUNTIES_QUERY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var use_timeout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! use-timeout */ \"./node_modules/use-timeout/dist.js\");\n/* harmony import */ var use_timeout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(use_timeout__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _lib_fetchUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/fetchUtils */ \"./lib/fetchUtils.js\");\n/* harmony import */ var _lib_strUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/strUtils */ \"./lib/strUtils.ts\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_currentweather__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/currentweather */ \"./components/currentweather.js\");\n/* harmony import */ var _components_dailyweather__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/dailyweather */ \"./components/dailyweather.js\");\n/* harmony import */ var _components_listCities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/listCities */ \"./components/listCities.js\");\n/* harmony import */ var _components_listCounties__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/listCounties */ \"./components/listCounties.js\");\n/* harmony import */ var _components_weatherstatpair__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/weatherstatpair */ \"./components/weatherstatpair.js\");\n\n\n\nvar _jsxFileName = \"/home/ionut/workspace/ionkom/weather/pages/index.js\",\n    _s2 = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query counties($orderBy: account_countyOrderBy){\\n    counties(orderBy: $orderBy) {\\n      id\\n      name\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nvar ALL_COUNTIES_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"gql\"])(_templateObject());\nfunction Home(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var allCountiesQueryVars = _ref.allCountiesQueryVars,\n      roMajorCities = _ref.roMajorCities,\n      weatherDataInit = _ref.weatherDataInit;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(ALL_COUNTIES_QUERY, {\n    variables: allCountiesQueryVars\n  }),\n      gqlData = _useQuery.data;\n\n  var counties = gqlData.counties;\n  var location = roMajorCities.filter(function (location) {\n    return location.id == 2715;\n  })[0]; // Bucuresti default\n\n  var getWeather = function getWeather() {\n    _s();\n\n    console.log(\"aici\"); // get weather\n    // const openweatherApiUrl = process.env.NEXT_PUBLIC_OPENWEATHER_API_URL;\n    // const openweatherApiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;\n    // let url = new URL(`${openweatherApiUrl}/onecall`);\n    // let queryParams = {\n    //   lat: location.latitude, \n    //   lon: location.longitude, \n    //   lang: 'ro',\n    //   appid: openweatherApiKey,\n    //   units: 'metric',\n    //   exclude: 'minutely'\n    // };\n    // Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]))\n    // const { data: weatherData, error } = useSWR(url, fetcher);\n    // get weather from nextjs api routes\n\n    var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"/api/weather?lat=\".concat(location.latitude, \"&lon=\").concat(location.longitude, \"&lang=ro\"), _lib_fetchUtils__WEBPACK_IMPORTED_MODULE_9__[\"fetcher\"]),\n        weatherData = _useSWR.data,\n        error = _useSWR.error; // debug logs\n\n\n    console.log(weatherData, error);\n    if (weatherData && !error) setWeatherData(weatherData);\n  };\n\n  _s(getWeather, \"x0DisjEQws/xcq4CObtYdyksuCg=\", false, function () {\n    return [swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"]];\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(weatherDataInit),\n      weatherData = _useState[0],\n      setWeatherData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(false),\n      shouldGetWeather = _useState2[0],\n      setShouldGetWeather = _useState2[1]; // get weather from nextjs api routes\n\n\n  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function () {\n    return shouldGetWeather ? \"/api/weather?lat=\".concat(location.latitude, \"&lon=\").concat(location.longitude, \"&lang=ro\") : null;\n  }, _lib_fetchUtils__WEBPACK_IMPORTED_MODULE_9__[\"fetcher\"]),\n      data = _useSWR2.data,\n      error = _useSWR2.error;\n\n  if (data && !error) setWeatherData(data); // useTimeout(() => setShouldGetWeather(true), 5500);\n  // debug logs\n\n  console.log(weatherData, error);\n  var title = \"Vremea in Romania - Prognoza meteo pe 10 zile\";\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    home: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:site_name\",\n        content: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: \"\".concat(title)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:url\",\n        content: \"https://vremea.ionkom.com/\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Vremea pentru 7 zile in Romania. Vezi prognoza meteo detaliata pentru luna curenta, vei sti intotdeauna ce planuri de vacanta sa iti faci.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        className: \"mt-2\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n            children: \"Vezi cum va fi vremea in urmatoarele 7 zile\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [\"Orice plan tine cont si de vremea de afara. Ia cele mai bune decizii de vacanta urmarind buletinul meteo curent sau prognoza vremii pentru 15 zile. La \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              href: \"/vremea/mamaia-constanta/10850\",\n              children: \"mare\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 110,\n              columnNumber: 167\n            }, this), \"? La \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              href: \"/vremea/poiana-brasov-brasov/2714\",\n              children: \"munte\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 110,\n              columnNumber: 227\n            }, this), \"? Tu decizi [mai putin vremea hahaha].\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n            className: \"text-center\",\n            children: [\"Starea vremii in \", location.name, \", judetul \", location.account_county.name]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_currentweather__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n          weatherData: weatherData\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"hr\", {\n        style: {\n          marginTop: 0\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_dailyweather__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n          daily: weatherData.daily\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [\"Coordonate geografice: \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_weatherstatpair__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n              pkey: \"latitudine\",\n              value: location.latitude\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 126,\n              columnNumber: 39\n            }, this), \"; \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_weatherstatpair__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n              pkey: \"longitudine\",\n              value: location.longitude\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 126,\n              columnNumber: 104\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            href: \"http://www.google.com/maps/place/\".concat(location.latitude, \",\").concat(location.longitude),\n            target: \"_blank\",\n            children: [\"Arata \", location.name, \" in Google Maps.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [\"Localitatea \", location.name, \" face parte din judetul \", location.account_county.name, \" din regiunea \", location.region, \" a Romaniei\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 130,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n          xs: 12,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n            children: \"Cum se prezinta vremea in marile orase ale Romaniei\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 136,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_listCities__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n            cities: roMajorCities\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 135,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n          xs: 12,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n            children: \"Prognoza meteo pe judete\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 143,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_listCounties__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n            counties: counties\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 144,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 95,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(Home, \"fkqjsVPOlhTuy7ohf0RvC3i7DcM=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"], swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJBTExfQ09VTlRJRVNfUVVFUlkiLCJncWwiLCJIb21lIiwiYWxsQ291bnRpZXNRdWVyeVZhcnMiLCJyb01ham9yQ2l0aWVzIiwid2VhdGhlckRhdGFJbml0IiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJncWxEYXRhIiwiZGF0YSIsImNvdW50aWVzIiwibG9jYXRpb24iLCJmaWx0ZXIiLCJpZCIsImdldFdlYXRoZXIiLCJjb25zb2xlIiwibG9nIiwidXNlU1dSIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJmZXRjaGVyIiwid2VhdGhlckRhdGEiLCJlcnJvciIsInNldFdlYXRoZXJEYXRhIiwidXNlU3RhdGUiLCJzaG91bGRHZXRXZWF0aGVyIiwic2V0U2hvdWxkR2V0V2VhdGhlciIsInRpdGxlIiwibmFtZSIsImFjY291bnRfY291bnR5IiwibWFyZ2luVG9wIiwiZGFpbHkiLCJyZWdpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNTyxJQUFNQSxrQkFBa0IsR0FBR0MsMERBQUgsbUJBQXhCO0FBVVEsU0FBU0MsSUFBVCxPQUM2QztBQUFBOztBQUFBOztBQUFBLE1BQXhEQyxvQkFBd0QsUUFBeERBLG9CQUF3RDtBQUFBLE1BQWxDQyxhQUFrQyxRQUFsQ0EsYUFBa0M7QUFBQSxNQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBLGtCQUdoQ0MsK0RBQVEsQ0FDaENOLGtCQURnQyxFQUVoQztBQUNFTyxhQUFTLEVBQUVKO0FBRGIsR0FGZ0MsQ0FId0I7QUFBQSxNQUc1Q0ssT0FINEMsYUFHbERDLElBSGtEOztBQUFBLE1BU3BEQyxRQVRvRCxHQVN2Q0YsT0FUdUMsQ0FT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QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0REOztJQXBIdUJSLEk7VUFJSUksdUQsRUEyQ0ZXLDJDOzs7S0EvQ0ZmLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIFNwaW5uZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvIH0gZnJvbSAnLi4vbGliL2Fwb2xsb0NsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVRpbWVvdXQgZnJvbSAndXNlLXRpbWVvdXQnXG5cbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICcuLi9saWIvZmV0Y2hVdGlscyc7XG5pbXBvcnQgeyBmb3JtYXRGb3JVUkwgfSBmcm9tICcuLi9saWIvc3RyVXRpbHMnO1xuXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEN1cnJlbnRXZWF0aGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY3VycmVudHdlYXRoZXInXG5pbXBvcnQgRGFpbHlXZWF0aGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZGFpbHl3ZWF0aGVyJ1xuaW1wb3J0IExpc3RDaXRpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0Q2l0aWVzJ1xuaW1wb3J0IExpc3RDb3VudGllcyBmcm9tICcuLi9jb21wb25lbnRzL2xpc3RDb3VudGllcydcbmltcG9ydCBXZWF0aGVyU3RhdFBhaXIgZnJvbSAnLi4vY29tcG9uZW50cy93ZWF0aGVyc3RhdHBhaXInXG5cbmltcG9ydCByb01ham9yQ2l0aWVzIGZyb20gJy4uL2RhdGEvbW1ham9yX3JvX2NpdGllcydcbmltcG9ydCB3ZWF0aGVyRGF0YUluaXQgZnJvbSAnLi4vZGF0YS93ZWF0aGVyX2RhdGFfaW5pdCdcblxuXG5leHBvcnQgY29uc3QgQUxMX0NPVU5USUVTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBjb3VudGllcygkb3JkZXJCeTogYWNjb3VudF9jb3VudHlPcmRlckJ5KXtcbiAgICBjb3VudGllcyhvcmRlckJ5OiAkb3JkZXJCeSkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICB9XG4gIH1cbmA7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShcbiAgeyBhbGxDb3VudGllc1F1ZXJ5VmFycywgcm9NYWpvckNpdGllcywgd2VhdGhlckRhdGFJbml0IH0pIHtcblxuXG4gIGNvbnN0IHsgZGF0YTogZ3FsRGF0YSB9ID0gdXNlUXVlcnkoXG4gICAgQUxMX0NPVU5USUVTX1FVRVJZLFxuICAgIHtcbiAgICAgIHZhcmlhYmxlczogYWxsQ291bnRpZXNRdWVyeVZhcnNcbiAgICB9XG4gICk7XG4gIGxldCB7IGNvdW50aWVzIH0gPSBncWxEYXRhO1xuICBjb25zdCBsb2NhdGlvbiA9IHJvTWFqb3JDaXRpZXMuZmlsdGVyKChsb2NhdGlvbikgPT4gbG9jYXRpb24uaWQgPT0gMjcxNSlbMF07IC8vIEJ1Y3VyZXN0aSBkZWZhdWx0XG5cblxuICBjb25zdCBnZXRXZWF0aGVyID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiYWljaVwiKVxuICAgIC8vIGdldCB3ZWF0aGVyXG4gICAgLy8gY29uc3Qgb3BlbndlYXRoZXJBcGlVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUEVOV0VBVEhFUl9BUElfVVJMO1xuICAgIC8vIGNvbnN0IG9wZW53ZWF0aGVyQXBpS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT1BFTldFQVRIRVJfQVBJX0tFWTtcbiAgICAvLyBsZXQgdXJsID0gbmV3IFVSTChgJHtvcGVud2VhdGhlckFwaVVybH0vb25lY2FsbGApO1xuICAgIC8vIGxldCBxdWVyeVBhcmFtcyA9IHtcbiAgICAvLyAgIGxhdDogbG9jYXRpb24ubGF0aXR1ZGUsIFxuICAgIC8vICAgbG9uOiBsb2NhdGlvbi5sb25naXR1ZGUsIFxuICAgIC8vICAgbGFuZzogJ3JvJyxcbiAgICAvLyAgIGFwcGlkOiBvcGVud2VhdGhlckFwaUtleSxcbiAgICAvLyAgIHVuaXRzOiAnbWV0cmljJyxcbiAgICAvLyAgIGV4Y2x1ZGU6ICdtaW51dGVseSdcbiAgICAvLyB9O1xuICAgIC8vIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKGtleSA9PiB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHF1ZXJ5UGFyYW1zW2tleV0pKVxuICAgIC8vIGNvbnN0IHsgZGF0YTogd2VhdGhlckRhdGEsIGVycm9yIH0gPSB1c2VTV1IodXJsLCBmZXRjaGVyKTtcblxuICAgIC8vIGdldCB3ZWF0aGVyIGZyb20gbmV4dGpzIGFwaSByb3V0ZXNcbiAgICBjb25zdCB7IGRhdGE6IHdlYXRoZXJEYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgICAgYC9hcGkvd2VhdGhlcj9sYXQ9JHtsb2NhdGlvbi5sYXRpdHVkZX0mbG9uPSR7bG9jYXRpb24ubG9uZ2l0dWRlfSZsYW5nPXJvYCwgZmV0Y2hlcik7XG4gICAgXG4gICAgLy8gZGVidWcgbG9nc1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhLCBlcnJvcik7XG4gICAgXG4gICAgaWYgKHdlYXRoZXJEYXRhICYmICFlcnJvcilcbiAgICAgIHNldFdlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKTtcbiAgfVxuXG5cbiAgY29uc3QgW3dlYXRoZXJEYXRhLCBzZXRXZWF0aGVyRGF0YV0gPSB1c2VTdGF0ZSh3ZWF0aGVyRGF0YUluaXQpXG4gIGNvbnN0IFtzaG91bGRHZXRXZWF0aGVyLCBzZXRTaG91bGRHZXRXZWF0aGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vIGdldCB3ZWF0aGVyIGZyb20gbmV4dGpzIGFwaSByb3V0ZXNcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgICAgKCkgPT4gKHNob3VsZEdldFdlYXRoZXIgPyBgL2FwaS93ZWF0aGVyP2xhdD0ke2xvY2F0aW9uLmxhdGl0dWRlfSZsb249JHtsb2NhdGlvbi5sb25naXR1ZGV9Jmxhbmc9cm9gIDogbnVsbCksXG4gICAgICBmZXRjaGVyKTtcbiAgaWYgKGRhdGEgJiYgIWVycm9yKVxuICAgIHNldFdlYXRoZXJEYXRhKGRhdGEpO1xuXG4gIC8vIHVzZVRpbWVvdXQoKCkgPT4gc2V0U2hvdWxkR2V0V2VhdGhlcih0cnVlKSwgNTUwMCk7XG5cbiAgLy8gZGVidWcgbG9nc1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSwgZXJyb3IpO1xuXG5cbiAgY29uc3QgdGl0bGUgPSBgVnJlbWVhIGluIFJvbWFuaWEgLSBQcm9nbm96YSBtZXRlbyBwZSAxMCB6aWxlYFxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgaG9tZT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17dGl0bGV9PjwvbWV0YT5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Ake3RpdGxlfWB9PjwvbWV0YT5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly92cmVtZWEuaW9ua29tLmNvbS9cIj48L21ldGE+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgY29udGVudD1cIlZyZW1lYSBwZW50cnUgNyB6aWxlIGluIFJvbWFuaWEuIFZlemkgcHJvZ25vemEgbWV0ZW8gZGV0YWxpYXRhIHBlbnRydSBsdW5hIGN1cmVudGEsIHZlaSBzdGkgaW50b3RkZWF1bmEgY2UgcGxhbnVyaSBkZSB2YWNhbnRhIHNhIGl0aSBmYWNpLlwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgPGgxPlZlemkgY3VtIHZhIGZpIHZyZW1lYSBpbiB1cm1hdG9hcmVsZSA3IHppbGU8L2gxPlxuICAgICAgICAgICAgPHA+T3JpY2UgcGxhbiB0aW5lIGNvbnQgc2kgZGUgdnJlbWVhIGRlIGFmYXJhLiBJYSBjZWxlIG1haSBidW5lIGRlY2l6aWkgZGUgdmFjYW50YSB1cm1hcmluZCBidWxldGludWwgbWV0ZW8gY3VyZW50IHNhdSBwcm9nbm96YSB2cmVtaWkgcGVudHJ1IDE1IHppbGUuIExhIDxMaW5rIGhyZWY9Jy92cmVtZWEvbWFtYWlhLWNvbnN0YW50YS8xMDg1MCc+bWFyZTwvTGluaz4/IExhIDxMaW5rIGhyZWY9Jy92cmVtZWEvcG9pYW5hLWJyYXNvdi1icmFzb3YvMjcxNCc+bXVudGU8L0xpbms+PyBUdSBkZWNpemkgW21haSBwdXRpbiB2cmVtZWEgaGFoYWhhXS48L3A+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5TdGFyZWEgdnJlbWlpIGluIHtsb2NhdGlvbi5uYW1lfSwganVkZXR1bCB7bG9jYXRpb24uYWNjb3VudF9jb3VudHkubmFtZX08L2gyPlxuICAgICAgICAgIDwvQ29sPiAgICAgICAgICBcbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxoci8+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPEN1cnJlbnRXZWF0aGVyIHdlYXRoZXJEYXRhPXt3ZWF0aGVyRGF0YX0vPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPGhyIHN0eWxlPXt7bWFyZ2luVG9wOiAwfX0vPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxEYWlseVdlYXRoZXIgZGFpbHk9e3dlYXRoZXJEYXRhLmRhaWx5fSAvPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgey8qIGxvY2F0aW9uIGRldGFpbHMgKi99XG4gICAgICAgIDxoci8+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDxwPkNvb3Jkb25hdGUgZ2VvZ3JhZmljZTogPFdlYXRoZXJTdGF0UGFpciBwa2V5PSdsYXRpdHVkaW5lJyB2YWx1ZT17bG9jYXRpb24ubGF0aXR1ZGV9IC8+OyA8V2VhdGhlclN0YXRQYWlyIHBrZXk9J2xvbmdpdHVkaW5lJyB2YWx1ZT17bG9jYXRpb24ubG9uZ2l0dWRlfSAvPjwvcD5cbiAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS8ke2xvY2F0aW9uLmxhdGl0dWRlfSwke2xvY2F0aW9uLmxvbmdpdHVkZX1gfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgQXJhdGEge2xvY2F0aW9uLm5hbWV9IGluIEdvb2dsZSBNYXBzLlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHA+TG9jYWxpdGF0ZWEge2xvY2F0aW9uLm5hbWV9IGZhY2UgcGFydGUgZGluIGp1ZGV0dWwge2xvY2F0aW9uLmFjY291bnRfY291bnR5Lm5hbWV9IGRpbiByZWdpdW5lYSB7bG9jYXRpb24ucmVnaW9ufSBhIFJvbWFuaWVpPC9wPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPGhyLz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0+XG4gICAgICAgICAgICA8aDM+Q3VtIHNlIHByZXppbnRhIHZyZW1lYSBpbiBtYXJpbGUgb3Jhc2UgYWxlIFJvbWFuaWVpPC9oMz5cbiAgICAgICAgICAgIDxMaXN0Q2l0aWVzIGNpdGllcz17cm9NYWpvckNpdGllc30vPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPGhyLz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0+XG4gICAgICAgICAgICA8aDM+UHJvZ25vemEgbWV0ZW8gcGUganVkZXRlPC9oMz5cbiAgICAgICAgICAgIDxMaXN0Q291bnRpZXMgY291bnRpZXM9e2NvdW50aWVzfS8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvKCk7XG4gIGNvbnN0IHF1ZXJ5VmFycyA9IHtcbiAgICBvcmRlckJ5OiB7XG4gICAgICBcIm5hbWVcIjogXCJhc2NcIlxuICAgIH1cbiAgfVxuXG4gIGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IEFMTF9DT1VOVElFU19RVUVSWSxcbiAgICB2YXJpYWJsZXM6IHF1ZXJ5VmFyc1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBpbml0aWFsQXBvbGxvU3RhdGU6IGFwb2xsb0NsaWVudC5jYWNoZS5leHRyYWN0KCksXG4gICAgICBhbGxDb3VudGllc1F1ZXJ5VmFyczogcXVlcnlWYXJzLFxuICAgICAgcm9NYWpvckNpdGllcyxcbiAgICAgIHdlYXRoZXJEYXRhSW5pdFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})