webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, ALL_COUNTIES_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_COUNTIES_QUERY\", function() { return ALL_COUNTIES_QUERY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var use_timeout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! use-timeout */ \"./node_modules/use-timeout/dist.js\");\n/* harmony import */ var use_timeout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(use_timeout__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _lib_fetchUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/fetchUtils */ \"./lib/fetchUtils.js\");\n/* harmony import */ var _lib_strUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/strUtils */ \"./lib/strUtils.ts\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_currentweather__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/currentweather */ \"./components/currentweather.js\");\n/* harmony import */ var _components_dailyweather__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/dailyweather */ \"./components/dailyweather.js\");\n/* harmony import */ var _components_listCities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/listCities */ \"./components/listCities.js\");\n/* harmony import */ var _components_listCounties__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/listCounties */ \"./components/listCounties.js\");\n/* harmony import */ var _components_weatherstatpair__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/weatherstatpair */ \"./components/weatherstatpair.js\");\n\n\n\nvar _jsxFileName = \"/home/ionut/workspace/ionkom/weather/pages/index.js\",\n    _s2 = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query counties($orderBy: account_countyOrderBy){\\n    counties(orderBy: $orderBy) {\\n      id\\n      name\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nvar ALL_COUNTIES_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"gql\"])(_templateObject());\nfunction Home(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var allCountiesQueryVars = _ref.allCountiesQueryVars,\n      roMajorCities = _ref.roMajorCities,\n      weatherDataInit = _ref.weatherDataInit;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(ALL_COUNTIES_QUERY, {\n    variables: allCountiesQueryVars\n  }),\n      gqlData = _useQuery.data;\n\n  var counties = gqlData.counties;\n  var location = roMajorCities.filter(function (location) {\n    return location.id == 2715;\n  })[0]; // Bucuresti default\n\n  var getWeather = function getWeather() {\n    _s();\n\n    console.log(\"aici\"); // get weather\n    // const openweatherApiUrl = process.env.NEXT_PUBLIC_OPENWEATHER_API_URL;\n    // const openweatherApiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;\n    // let url = new URL(`${openweatherApiUrl}/onecall`);\n    // let queryParams = {\n    //   lat: location.latitude, \n    //   lon: location.longitude, \n    //   lang: 'ro',\n    //   appid: openweatherApiKey,\n    //   units: 'metric',\n    //   exclude: 'minutely'\n    // };\n    // Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]))\n    // const { data: weatherData, error } = useSWR(url, fetcher);\n    // get weather from nextjs api routes\n\n    var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"/api/weather?lat=\".concat(location.latitude, \"&lon=\").concat(location.longitude, \"&lang=ro\"), _lib_fetchUtils__WEBPACK_IMPORTED_MODULE_9__[\"fetcher\"]),\n        weatherData = _useSWR.data,\n        error = _useSWR.error; // debug logs\n\n\n    console.log(weatherData, error);\n    if (weatherData && !error) setWeatherData(weatherData);\n  };\n\n  _s(getWeather, \"x0DisjEQws/xcq4CObtYdyksuCg=\", false, function () {\n    return [swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"]];\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(weatherDataInit),\n      weatherData = _useState[0],\n      setWeatherData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(true),\n      shouldGetWeather = _useState2[0],\n      setShouldGetWeather = _useState2[1]; // get weather from nextjs api routes\n\n\n  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function () {\n    return shouldGetWeather ? \"/api/weather?lat=\".concat(location.latitude, \"&lon=\").concat(location.longitude, \"&lang=ro\") : null;\n  }, _lib_fetchUtils__WEBPACK_IMPORTED_MODULE_9__[\"fetcher\"]),\n      res = _useSWR2.data,\n      error = _useSWR2.error;\n\n  console.log(res); // if (data && !error)\n  //   setWeatherData(data);\n  // useTimeout(() => setShouldGetWeather(true), 5500);\n  // debug logs\n  // console.log(weatherData, error);\n\n  var title = \"Vremea in Romania - Prognoza meteo pe 10 zile\";\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    home: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:site_name\",\n        content: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: \"\".concat(title)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:url\",\n        content: \"https://vremea.ionkom.com/\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Vremea pentru 7 zile in Romania. Vezi prognoza meteo detaliata pentru luna curenta, vei sti intotdeauna ce planuri de vacanta sa iti faci.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        className: \"mt-2\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n            children: \"Vezi cum va fi vremea in urmatoarele 7 zile\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [\"Orice plan tine cont si de vremea de afara. Ia cele mai bune decizii de vacanta urmarind buletinul meteo curent sau prognoza vremii pentru 15 zile. La \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              href: \"/vremea/mamaia-constanta/10850\",\n              children: \"mare\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 111,\n              columnNumber: 167\n            }, this), \"? La \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              href: \"/vremea/poiana-brasov-brasov/2714\",\n              children: \"munte\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 111,\n              columnNumber: 227\n            }, this), \"? Tu decizi [mai putin vremea hahaha].\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n            className: \"text-center\",\n            children: [\"Starea vremii in \", location.name, \", judetul \", location.account_county.name]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_currentweather__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n          weatherData: weatherData\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"hr\", {\n        style: {\n          marginTop: 0\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_dailyweather__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n          daily: weatherData.daily\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [\"Coordonate geografice: \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_weatherstatpair__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n              pkey: \"latitudine\",\n              value: location.latitude\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 127,\n              columnNumber: 39\n            }, this), \"; \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_weatherstatpair__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n              pkey: \"longitudine\",\n              value: location.longitude\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 127,\n              columnNumber: 104\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            href: \"http://www.google.com/maps/place/\".concat(location.latitude, \",\").concat(location.longitude),\n            target: \"_blank\",\n            children: [\"Arata \", location.name, \" in Google Maps.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [\"Localitatea \", location.name, \" face parte din judetul \", location.account_county.name, \" din regiunea \", location.region, \" a Romaniei\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 131,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n          xs: 12,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n            children: \"Cum se prezinta vremea in marile orase ale Romaniei\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_listCities__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n            cities: roMajorCities\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 138,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n          xs: 12,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n            children: \"Prognoza meteo pe judete\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 144,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_listCounties__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n            counties: counties\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 145,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 96,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(Home, \"sNmqLWNOktWvSPxjIKA2LnUZfms=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"], swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJBTExfQ09VTlRJRVNfUVVFUlkiLCJncWwiLCJIb21lIiwiYWxsQ291bnRpZXNRdWVyeVZhcnMiLCJyb01ham9yQ2l0aWVzIiwid2VhdGhlckRhdGFJbml0IiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJncWxEYXRhIiwiZGF0YSIsImNvdW50aWVzIiwibG9jYXRpb24iLCJmaWx0ZXIiLCJpZCIsImdldFdlYXRoZXIiLCJjb25zb2xlIiwibG9nIiwidXNlU1dSIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJmZXRjaGVyIiwid2VhdGhlckRhdGEiLCJlcnJvciIsInNldFdlYXRoZXJEYXRhIiwidXNlU3RhdGUiLCJzaG91bGRHZXRXZWF0aGVyIiwic2V0U2hvdWxkR2V0V2VhdGhlciIsInJlcyIsInRpdGxlIiwibmFtZSIsImFjY291bnRfY291bnR5IiwibWFyZ2luVG9wIiwiZGFpbHkiLCJyZWdpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNTyxJQUFNQSxrQkFBa0IsR0FBR0MsMERBQUgsbUJBQXhCO0FBVVEsU0FBU0MsSUFBVCxPQUM2QztBQUFBOztBQUFBOztBQUFBLE1BQXhEQyxvQkFBd0QsUUFBeERBLG9CQUF3RDtBQUFBLE1BQWxDQyxhQUFrQyxRQUFsQ0EsYUFBa0M7QUFBQSxNQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBLGtCQUdoQ0MsK0RBQVEsQ0FDaENOLGtCQURnQyxFQUVoQztBQUNFTyxhQUFTLEVBQUVKO0FBRGIsR0FGZ0MsQ0FId0I7QUFBQSxNQUc1Q0ssT0FINEMsYUFHbERDLElBSGtEOztBQUFBLE1BU3BEQyxRQVRvRCxHQVN2Q0YsT0FU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O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdERDs7SUFySHVCUixJO1VBSUlJLHVELEVBMkNHVywyQzs7O0tBL0NQZixJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBTcGlubmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsbyB9IGZyb20gJy4uL2xpYi9hcG9sbG9DbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VUaW1lb3V0IGZyb20gJ3VzZS10aW1lb3V0J1xuXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnLi4vbGliL2ZldGNoVXRpbHMnO1xuaW1wb3J0IHsgZm9ybWF0Rm9yVVJMIH0gZnJvbSAnLi4vbGliL3N0clV0aWxzJztcblxuaW1wb3J0IExheW91dCwgeyBzaXRlVGl0bGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBDdXJyZW50V2VhdGhlciBmcm9tICcuLi9jb21wb25lbnRzL2N1cnJlbnR3ZWF0aGVyJ1xuaW1wb3J0IERhaWx5V2VhdGhlciBmcm9tICcuLi9jb21wb25lbnRzL2RhaWx5d2VhdGhlcidcbmltcG9ydCBMaXN0Q2l0aWVzIGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdENpdGllcydcbmltcG9ydCBMaXN0Q291bnRpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0Q291bnRpZXMnXG5pbXBvcnQgV2VhdGhlclN0YXRQYWlyIGZyb20gJy4uL2NvbXBvbmVudHMvd2VhdGhlcnN0YXRwYWlyJ1xuXG5pbXBvcnQgcm9NYWpvckNpdGllcyBmcm9tICcuLi9kYXRhL21tYWpvcl9yb19jaXRpZXMnXG5pbXBvcnQgd2VhdGhlckRhdGFJbml0IGZyb20gJy4uL2RhdGEvd2VhdGhlcl9kYXRhX2luaXQnXG5cblxuZXhwb3J0IGNvbnN0IEFMTF9DT1VOVElFU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgY291bnRpZXMoJG9yZGVyQnk6IGFjY291bnRfY291bnR5T3JkZXJCeSl7XG4gICAgY291bnRpZXMob3JkZXJCeTogJG9yZGVyQnkpIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgfVxuICB9XG5gO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoXG4gIHsgYWxsQ291bnRpZXNRdWVyeVZhcnMsIHJvTWFqb3JDaXRpZXMsIHdlYXRoZXJEYXRhSW5pdCB9KSB7XG5cblxuICBjb25zdCB7IGRhdGE6IGdxbERhdGEgfSA9IHVzZVF1ZXJ5KFxuICAgIEFMTF9DT1VOVElFU19RVUVSWSxcbiAgICB7XG4gICAgICB2YXJpYWJsZXM6IGFsbENvdW50aWVzUXVlcnlWYXJzXG4gICAgfVxuICApO1xuICBsZXQgeyBjb3VudGllcyB9ID0gZ3FsRGF0YTtcbiAgY29uc3QgbG9jYXRpb24gPSByb01ham9yQ2l0aWVzLmZpbHRlcigobG9jYXRpb24pID0+IGxvY2F0aW9uLmlkID09IDI3MTUpWzBdOyAvLyBCdWN1cmVzdGkgZGVmYXVsdFxuXG5cbiAgY29uc3QgZ2V0V2VhdGhlciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImFpY2lcIilcbiAgICAvLyBnZXQgd2VhdGhlclxuICAgIC8vIGNvbnN0IG9wZW53ZWF0aGVyQXBpVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT1BFTldFQVRIRVJfQVBJX1VSTDtcbiAgICAvLyBjb25zdCBvcGVud2VhdGhlckFwaUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09QRU5XRUFUSEVSX0FQSV9LRVk7XG4gICAgLy8gbGV0IHVybCA9IG5ldyBVUkwoYCR7b3BlbndlYXRoZXJBcGlVcmx9L29uZWNhbGxgKTtcbiAgICAvLyBsZXQgcXVlcnlQYXJhbXMgPSB7XG4gICAgLy8gICBsYXQ6IGxvY2F0aW9uLmxhdGl0dWRlLCBcbiAgICAvLyAgIGxvbjogbG9jYXRpb24ubG9uZ2l0dWRlLCBcbiAgICAvLyAgIGxhbmc6ICdybycsXG4gICAgLy8gICBhcHBpZDogb3BlbndlYXRoZXJBcGlLZXksXG4gICAgLy8gICB1bml0czogJ21ldHJpYycsXG4gICAgLy8gICBleGNsdWRlOiAnbWludXRlbHknXG4gICAgLy8gfTtcbiAgICAvLyBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaChrZXkgPT4gdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCBxdWVyeVBhcmFtc1trZXldKSlcbiAgICAvLyBjb25zdCB7IGRhdGE6IHdlYXRoZXJEYXRhLCBlcnJvciB9ID0gdXNlU1dSKHVybCwgZmV0Y2hlcik7XG5cbiAgICAvLyBnZXQgd2VhdGhlciBmcm9tIG5leHRqcyBhcGkgcm91dGVzXG4gICAgY29uc3QgeyBkYXRhOiB3ZWF0aGVyRGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcbiAgICAgIGAvYXBpL3dlYXRoZXI/bGF0PSR7bG9jYXRpb24ubGF0aXR1ZGV9Jmxvbj0ke2xvY2F0aW9uLmxvbmdpdHVkZX0mbGFuZz1yb2AsIGZldGNoZXIpO1xuICAgIFxuICAgIC8vIGRlYnVnIGxvZ3NcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSwgZXJyb3IpO1xuICAgIFxuICAgIGlmICh3ZWF0aGVyRGF0YSAmJiAhZXJyb3IpXG4gICAgICBzZXRXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSk7XG4gIH1cblxuXG4gIGNvbnN0IFt3ZWF0aGVyRGF0YSwgc2V0V2VhdGhlckRhdGFdID0gdXNlU3RhdGUod2VhdGhlckRhdGFJbml0KVxuICBjb25zdCBbc2hvdWxkR2V0V2VhdGhlciwgc2V0U2hvdWxkR2V0V2VhdGhlcl0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIC8vIGdldCB3ZWF0aGVyIGZyb20gbmV4dGpzIGFwaSByb3V0ZXNcbiAgY29uc3QgeyBkYXRhOiByZXMsIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgKCkgPT4gc2hvdWxkR2V0V2VhdGhlciA/IGAvYXBpL3dlYXRoZXI/bGF0PSR7bG9jYXRpb24ubGF0aXR1ZGV9Jmxvbj0ke2xvY2F0aW9uLmxvbmdpdHVkZX0mbGFuZz1yb2AgOiBudWxsLFxuICAgIGZldGNoZXIpO1xuICBjb25zb2xlLmxvZyhyZXMpXG4gIC8vIGlmIChkYXRhICYmICFlcnJvcilcbiAgLy8gICBzZXRXZWF0aGVyRGF0YShkYXRhKTtcblxuICAvLyB1c2VUaW1lb3V0KCgpID0+IHNldFNob3VsZEdldFdlYXRoZXIodHJ1ZSksIDU1MDApO1xuXG4gIC8vIGRlYnVnIGxvZ3NcbiAgLy8gY29uc29sZS5sb2cod2VhdGhlckRhdGEsIGVycm9yKTtcblxuXG4gIGNvbnN0IHRpdGxlID0gYFZyZW1lYSBpbiBSb21hbmlhIC0gUHJvZ25vemEgbWV0ZW8gcGUgMTAgemlsZWBcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhvbWU+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e3RpdGxlfT48L21ldGE+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgJHt0aXRsZX1gfT48L21ldGE+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vdnJlbWVhLmlvbmtvbS5jb20vXCI+PC9tZXRhPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJWcmVtZWEgcGVudHJ1IDcgemlsZSBpbiBSb21hbmlhLiBWZXppIHByb2dub3phIG1ldGVvIGRldGFsaWF0YSBwZW50cnUgbHVuYSBjdXJlbnRhLCB2ZWkgc3RpIGludG90ZGVhdW5hIGNlIHBsYW51cmkgZGUgdmFjYW50YSBzYSBpdGkgZmFjaS5cIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDxoMT5WZXppIGN1bSB2YSBmaSB2cmVtZWEgaW4gdXJtYXRvYXJlbGUgNyB6aWxlPC9oMT5cbiAgICAgICAgICAgIDxwPk9yaWNlIHBsYW4gdGluZSBjb250IHNpIGRlIHZyZW1lYSBkZSBhZmFyYS4gSWEgY2VsZSBtYWkgYnVuZSBkZWNpemlpIGRlIHZhY2FudGEgdXJtYXJpbmQgYnVsZXRpbnVsIG1ldGVvIGN1cmVudCBzYXUgcHJvZ25vemEgdnJlbWlpIHBlbnRydSAxNSB6aWxlLiBMYSA8TGluayBocmVmPScvdnJlbWVhL21hbWFpYS1jb25zdGFudGEvMTA4NTAnPm1hcmU8L0xpbms+PyBMYSA8TGluayBocmVmPScvdnJlbWVhL3BvaWFuYS1icmFzb3YtYnJhc292LzI3MTQnPm11bnRlPC9MaW5rPj8gVHUgZGVjaXppIFttYWkgcHV0aW4gdnJlbWVhIGhhaGFoYV0uPC9wPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+U3RhcmVhIHZyZW1paSBpbiB7bG9jYXRpb24ubmFtZX0sIGp1ZGV0dWwge2xvY2F0aW9uLmFjY291bnRfY291bnR5Lm5hbWV9PC9oMj5cbiAgICAgICAgICA8L0NvbD4gICAgICAgICAgXG4gICAgICAgIDwvUm93PlxuICAgICAgICA8aHIvPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDdXJyZW50V2VhdGhlciB3ZWF0aGVyRGF0YT17d2VhdGhlckRhdGF9Lz5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxociBzdHlsZT17e21hcmdpblRvcDogMH19Lz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8RGFpbHlXZWF0aGVyIGRhaWx5PXt3ZWF0aGVyRGF0YS5kYWlseX0gLz5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIHsvKiBsb2NhdGlvbiBkZXRhaWxzICovfVxuICAgICAgICA8aHIvPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICA8cD5Db29yZG9uYXRlIGdlb2dyYWZpY2U6IDxXZWF0aGVyU3RhdFBhaXIgcGtleT0nbGF0aXR1ZGluZScgdmFsdWU9e2xvY2F0aW9uLmxhdGl0dWRlfSAvPjsgPFdlYXRoZXJTdGF0UGFpciBwa2V5PSdsb25naXR1ZGluZScgdmFsdWU9e2xvY2F0aW9uLmxvbmdpdHVkZX0gLz48L3A+XG4gICAgICAgICAgICA8YSBocmVmPXtgaHR0cDovL3d3dy5nb29nbGUuY29tL21hcHMvcGxhY2UvJHtsb2NhdGlvbi5sYXRpdHVkZX0sJHtsb2NhdGlvbi5sb25naXR1ZGV9YH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIEFyYXRhIHtsb2NhdGlvbi5uYW1lfSBpbiBHb29nbGUgTWFwcy5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxwPkxvY2FsaXRhdGVhIHtsb2NhdGlvbi5uYW1lfSBmYWNlIHBhcnRlIGRpbiBqdWRldHVsIHtsb2NhdGlvbi5hY2NvdW50X2NvdW50eS5uYW1lfSBkaW4gcmVnaXVuZWEge2xvY2F0aW9uLnJlZ2lvbn0gYSBSb21hbmllaTwvcD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxoci8+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17MTJ9PlxuICAgICAgICAgICAgPGgzPkN1bSBzZSBwcmV6aW50YSB2cmVtZWEgaW4gbWFyaWxlIG9yYXNlIGFsZSBSb21hbmllaTwvaDM+XG4gICAgICAgICAgICA8TGlzdENpdGllcyBjaXRpZXM9e3JvTWFqb3JDaXRpZXN9Lz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxoci8+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17MTJ9PlxuICAgICAgICAgICAgPGgzPlByb2dub3phIG1ldGVvIHBlIGp1ZGV0ZTwvaDM+XG4gICAgICAgICAgICA8TGlzdENvdW50aWVzIGNvdW50aWVzPXtjb3VudGllc30vPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xuICBjb25zdCBxdWVyeVZhcnMgPSB7XG4gICAgb3JkZXJCeToge1xuICAgICAgXCJuYW1lXCI6IFwiYXNjXCJcbiAgICB9XG4gIH1cblxuICBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBBTExfQ09VTlRJRVNfUVVFUlksXG4gICAgdmFyaWFibGVzOiBxdWVyeVZhcnNcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaW5pdGlhbEFwb2xsb1N0YXRlOiBhcG9sbG9DbGllbnQuY2FjaGUuZXh0cmFjdCgpLFxuICAgICAgYWxsQ291bnRpZXNRdWVyeVZhcnM6IHF1ZXJ5VmFycyxcbiAgICAgIHJvTWFqb3JDaXRpZXMsXG4gICAgICB3ZWF0aGVyRGF0YUluaXRcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})