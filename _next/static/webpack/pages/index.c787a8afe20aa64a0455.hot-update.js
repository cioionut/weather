webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, ALL_COUNTIES_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_COUNTIES_QUERY\", function() { return ALL_COUNTIES_QUERY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var use_timeout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! use-timeout */ \"./node_modules/use-timeout/dist.js\");\n/* harmony import */ var use_timeout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(use_timeout__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _lib_fetchUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/fetchUtils */ \"./lib/fetchUtils.js\");\n/* harmony import */ var _lib_strUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/strUtils */ \"./lib/strUtils.ts\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_currentweather__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/currentweather */ \"./components/currentweather.js\");\n/* harmony import */ var _components_dailyweather__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/dailyweather */ \"./components/dailyweather.js\");\n/* harmony import */ var _components_listCities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/listCities */ \"./components/listCities.js\");\n/* harmony import */ var _components_listCounties__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/listCounties */ \"./components/listCounties.js\");\n/* harmony import */ var _components_weatherstatpair__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/weatherstatpair */ \"./components/weatherstatpair.js\");\n\n\n\nvar _jsxFileName = \"/home/ionut/workspace/ionkom/weather/pages/index.js\",\n    _s2 = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query counties($orderBy: account_countyOrderBy){\\n    counties(orderBy: $orderBy) {\\n      id\\n      name\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nvar ALL_COUNTIES_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"gql\"])(_templateObject());\nfunction Home(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var allCountiesQueryVars = _ref.allCountiesQueryVars,\n      roMajorCities = _ref.roMajorCities,\n      weatherDataInit = _ref.weatherDataInit;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(ALL_COUNTIES_QUERY, {\n    variables: allCountiesQueryVars\n  }),\n      gqlData = _useQuery.data;\n\n  var counties = gqlData.counties;\n  var location = roMajorCities.filter(function (location) {\n    return location.id == 2715;\n  })[0]; // Bucuresti default\n\n  var getWeather = function getWeather() {\n    _s();\n\n    console.log(\"aici\"); // get weather\n    // const openweatherApiUrl = process.env.NEXT_PUBLIC_OPENWEATHER_API_URL;\n    // const openweatherApiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;\n    // let url = new URL(`${openweatherApiUrl}/onecall`);\n    // let queryParams = {\n    //   lat: location.latitude, \n    //   lon: location.longitude, \n    //   lang: 'ro',\n    //   appid: openweatherApiKey,\n    //   units: 'metric',\n    //   exclude: 'minutely'\n    // };\n    // Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]))\n    // const { data: weatherData, error } = useSWR(url, fetcher);\n    // get weather from nextjs api routes\n\n    var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"/api/weather?lat=\".concat(location.latitude, \"&lon=\").concat(location.longitude, \"&lang=ro\"), _lib_fetchUtils__WEBPACK_IMPORTED_MODULE_9__[\"fetcher\"]),\n        weatherData = _useSWR.data,\n        error = _useSWR.error; // debug logs\n\n\n    console.log(weatherData, error);\n    if (weatherData && !error) setWeatherData(weatherData);\n  };\n\n  _s(getWeather, \"x0DisjEQws/xcq4CObtYdyksuCg=\", false, function () {\n    return [swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"]];\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(weatherDataInit),\n      weatherData = _useState[0],\n      setWeatherData = _useState[1]; // const [shouldGetWeather, setShouldGetWeather] = useState(true)\n\n\n  var shouldGetWeather = true; // get weather from nextjs api routes\n\n  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function () {\n    return shouldGetWeather ? \"/api/weather?lat=\".concat(location.latitude, \"&lon=\").concat(location.longitude, \"&lang=ro\") : null;\n  }, _lib_fetchUtils__WEBPACK_IMPORTED_MODULE_9__[\"fetcher\"]),\n      data = _useSWR2.data,\n      error = _useSWR2.error;\n\n  if (data && !error) setWeatherData(data); // useTimeout(() => setShouldGetWeather(true), 5500);\n  // debug logs\n\n  console.log(weatherData, error);\n  var title = \"Vremea in Romania - Prognoza meteo pe 10 zile\";\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    home: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:site_name\",\n        content: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: \"\".concat(title)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:url\",\n        content: \"https://vremea.ionkom.com/\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Vremea pentru 7 zile in Romania. Vezi prognoza meteo detaliata pentru luna curenta, vei sti intotdeauna ce planuri de vacanta sa iti faci.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        className: \"mt-2\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n            children: \"Vezi cum va fi vremea in urmatoarele 7 zile\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [\"Orice plan tine cont si de vremea de afara. Ia cele mai bune decizii de vacanta urmarind buletinul meteo curent sau prognoza vremii pentru 15 zile. La \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              href: \"/vremea/mamaia-constanta/10850\",\n              children: \"mare\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 167\n            }, this), \"? La \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              href: \"/vremea/poiana-brasov-brasov/2714\",\n              children: \"munte\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 227\n            }, this), \"? Tu decizi [mai putin vremea hahaha].\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n            className: \"text-center\",\n            children: [\"Starea vremii in \", location.name, \", judetul \", location.account_county.name]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_currentweather__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n          weatherData: weatherData\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"hr\", {\n        style: {\n          marginTop: 0\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_dailyweather__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n          daily: weatherData.daily\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [\"Coordonate geografice: \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_weatherstatpair__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n              pkey: \"latitudine\",\n              value: location.latitude\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 128,\n              columnNumber: 39\n            }, this), \"; \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_weatherstatpair__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n              pkey: \"longitudine\",\n              value: location.longitude\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 128,\n              columnNumber: 104\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            href: \"http://www.google.com/maps/place/\".concat(location.latitude, \",\").concat(location.longitude),\n            target: \"_blank\",\n            children: [\"Arata \", location.name, \" in Google Maps.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 129,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [\"Localitatea \", location.name, \" face parte din judetul \", location.account_county.name, \" din regiunea \", location.region, \" a Romaniei\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 132,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n          xs: 12,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n            children: \"Cum se prezinta vremea in marile orase ale Romaniei\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 138,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_listCities__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n            cities: roMajorCities\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n          xs: 12,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n            children: \"Prognoza meteo pe judete\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 145,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_listCounties__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n            counties: counties\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 146,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 144,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 97,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(Home, \"l2cJbZR0s7TR9G7/9bXb9t57F4U=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"], swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJBTExfQ09VTlRJRVNfUVVFUlkiLCJncWwiLCJIb21lIiwiYWxsQ291bnRpZXNRdWVyeVZhcnMiLCJyb01ham9yQ2l0aWVzIiwid2VhdGhlckRhdGFJbml0IiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJncWxEYXRhIiwiZGF0YSIsImNvdW50aWVzIiwibG9jYXRpb24iLCJmaWx0ZXIiLCJpZCIsImdldFdlYXRoZXIiLCJjb25zb2xlIiwibG9nIiwidXNlU1dSIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJmZXRjaGVyIiwid2VhdGhlckRhdGEiLCJlcnJvciIsInNldFdlYXRoZXJEYXRhIiwidXNlU3RhdGUiLCJzaG91bGRHZXRXZWF0aGVyIiwidGl0bGUiLCJuYW1lIiwiYWNjb3VudF9jb3VudHkiLCJtYXJnaW5Ub3AiLCJkYWlseSIsInJlZ2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1PLElBQU1BLGtCQUFrQixHQUFHQywwREFBSCxtQkFBeEI7QUFVUSxTQUFTQyxJQUFULE9BQzZDO0FBQUE7O0FBQUE7O0FBQUEsTUFBeERDLG9CQUF3RCxRQUF4REEsb0JBQXdEO0FBQUEsTUFBbENDLGFBQWtDLFFBQWxDQSxhQUFrQztBQUFBLE1BQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUEsa0JBR2hDQywrREFBUSxDQUNoQ04sa0JBRGdDLEVBRWhDO0FBQ0VPLGFBQVMsRUFBRUo7QUFEYixHQUZnQyxDQUh3QjtBQUFBLE1BRzVDSyxPQUg0QyxhQUdsREMsSUFIa0Q7O0FBQUEsTUFTcERDLFFBVG9ELEdBU3ZDRixPQVR1QyxDQVNwREUsUUFUb0Q7QUFVMUQsTUFBTUMsUUFBUSxHQUFHUCxhQUFhLENBQUNRLE1BQWQsQ0FBcUIsVUFBQ0QsUUFBRDtBQUFBLFdBQWNBLFFBQVEsQ0FBQ0UsRUFBVCxJQUFlLElBQTdCO0FBQUEsR0FBckIsRUFBd0QsQ0FBeEQsQ0FBakIsQ0FWMEQsQ0FVbUI7O0FBRzdFLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDdkJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFEdUIsQ0FFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQWpCdUIsa0JBa0JjQyxtREFBTSw0QkFDckJOLFFBQVEsQ0FBQ08sUUFEWSxrQkFDSVAsUUFBUSxDQUFDUSxTQURiLGVBQ2tDQyx1REFEbEMsQ0FsQnBCO0FBQUEsUUFrQlRDLFdBbEJTLFdBa0JmWixJQWxCZTtBQUFBLFFBa0JJYSxLQWxCSixXQWtCSUEsS0FsQkosRUFxQnZCOzs7QUFDQVAsV0FBTyxDQUFDQyxHQUFSLENBQVlLLFdBQVosRUFBeUJDLEtBQXpCO0FBRUEsUUFBSUQsV0FBVyxJQUFJLENBQUNDLEtBQXBCLEVBQ0VDLGNBQWMsQ0FBQ0YsV0FBRCxDQUFkO0FBQ0gsR0ExQkQ7O0FBYjBELEtBYXBEUCxVQWJvRDtBQUFBLFlBK0JuQkcsMkNBL0JtQjtBQUFBOztBQUFBLGtCQTBDcEJPLHNEQUFRLENBQUNuQixlQUFELENBMUNZO0FBQUEsTUEwQ25EZ0IsV0ExQ21EO0FBQUEsTUEwQ3RDRSxjQTFDc0MsaUJBMkMxRDs7O0FBQ0EsTUFBTUUsZ0JBQWdCLEdBQUcsSUFBekIsQ0E1QzBELENBK0MxRDs7QUEvQzBELGlCQWdEbENSLG1EQUFNLENBQzVCO0FBQUEsV0FBTVEsZ0JBQWdCLDhCQUF1QmQsUUFBUSxDQUFDTyxRQUFoQyxrQkFBZ0RQLFFBQVEsQ0FBQ1EsU0FBekQsZ0JBQStFLElBQXJHO0FBQUEsR0FENEIsRUFFNUJDLHVEQUY0QixDQWhENEI7QUFBQSxNQWdEbERYLElBaERrRCxZQWdEbERBLElBaERrRDtBQUFBLE1BZ0Q1Q2EsS0FoRDRDLFlBZ0Q1Q0EsS0FoRDRDOztBQW1EMUQsTUFBSWIsSUFBSSxJQUFJLENBQUNhLEtBQWIsRUFDRUMsY0FBYyxDQUFDZCxJQUFELENBQWQsQ0FwRHdELENBc0QxRDtBQUVBOztBQUNBTSxTQUFPLENBQUNDLEdBQVIsQ0FBWUssV0FBWixFQUF5QkMsS0FBekI7QUFHQSxNQUFNSSxLQUFLLGtEQUFYO0FBQ0Esc0JBQ0UscUVBQUMsMkRBQUQ7QUFBUSxRQUFJLE1BQVo7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQVFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxnQkFBUSxFQUFDLGNBQWY7QUFBOEIsZUFBTyxFQUFFQTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLGdCQUFRLEVBQUMsVUFBZjtBQUEwQixlQUFPLFlBQUtBLEtBQUw7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBTSxnQkFBUSxFQUFDLFFBQWY7QUFBd0IsZUFBTyxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQ0ksWUFBSSxFQUFDLGFBRFQ7QUFFSSxlQUFPLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFXRSxxRUFBQyx5REFBRDtBQUFBLDhCQUNFLHFFQUFDLG1EQUFEO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBQ0UscUVBQUMsbURBQUQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUEsK0xBQTBKLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxnQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBMUosd0JBQXNOLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxtQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBdE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBR0U7QUFBSSxxQkFBUyxFQUFDLGFBQWQ7QUFBQSw0Q0FBOENmLFFBQVEsQ0FBQ2dCLElBQXZELGdCQUF1RWhCLFFBQVEsQ0FBQ2lCLGNBQVQsQ0FBd0JELElBQS9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsZUFTRSxxRUFBQyxtREFBRDtBQUFBLCtCQUNFLHFFQUFDLG1FQUFEO0FBQWdCLHFCQUFXLEVBQUVOO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsZUFZRTtBQUFJLGFBQUssRUFBRTtBQUFDUSxtQkFBUyxFQUFFO0FBQVo7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkYsZUFhRSxxRUFBQyxtREFBRDtBQUFBLCtCQUNFLHFFQUFDLGlFQUFEO0FBQWMsZUFBSyxFQUFFUixXQUFXLENBQUNTO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkYsZUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRixlQWtCRSxxRUFBQyxtREFBRDtBQUFBLCtCQUNFLHFFQUFDLG1EQUFEO0FBQUEsa0NBQ0U7QUFBQSwrREFBMEIscUVBQUMsb0VBQUQ7QUFBaUIsa0JBQUksRUFBQyxZQUF0QjtBQUFtQyxtQkFBSyxFQUFFbkIsUUFBUSxDQUFDTztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUExQixxQkFBMkYscUVBQUMsb0VBQUQ7QUFBaUIsa0JBQUksRUFBQyxhQUF0QjtBQUFvQyxtQkFBSyxFQUFFUCxRQUFRLENBQUNRO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUcsZ0JBQUksNkNBQXNDUixRQUFRLENBQUNPLFFBQS9DLGNBQTJEUCxRQUFRLENBQUNRLFNBQXBFLENBQVA7QUFBd0Ysa0JBQU0sRUFBQyxRQUEvRjtBQUFBLGlDQUNTUixRQUFRLENBQUNnQixJQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFLRTtBQUFBLHVDQUFnQmhCLFFBQVEsQ0FBQ2dCLElBQXpCLDhCQUF1RGhCLFFBQVEsQ0FBQ2lCLGNBQVQsQ0FBd0JELElBQS9FLG9CQUFtR2hCLFFBQVEsQ0FBQ29CLE1BQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJGLGVBMkJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQkYsZUE0QkUscUVBQUMsbURBQUQ7QUFBQSwrQkFDRSxxRUFBQyxtREFBRDtBQUFLLFlBQUUsRUFBRSxFQUFUO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRSxxRUFBQywrREFBRDtBQUFZLGtCQUFNLEVBQUUzQjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1QkYsZUFrQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxDRixlQW1DRSxxRUFBQyxtREFBRDtBQUFBLCtCQUNFLHFFQUFDLG1EQUFEO0FBQUssWUFBRSxFQUFFLEVBQVQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLHFFQUFDLGlFQUFEO0FBQWMsb0JBQVEsRUFBRU07QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0REOztJQXRIdUJSLEk7VUFJSUksdUQsRUE2Q0ZXLDJDOzs7S0FqREZmLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIFNwaW5uZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvIH0gZnJvbSAnLi4vbGliL2Fwb2xsb0NsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVRpbWVvdXQgZnJvbSAndXNlLXRpbWVvdXQnXG5cbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICcuLi9saWIvZmV0Y2hVdGlscyc7XG5pbXBvcnQgeyBmb3JtYXRGb3JVUkwgfSBmcm9tICcuLi9saWIvc3RyVXRpbHMnO1xuXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEN1cnJlbnRXZWF0aGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY3VycmVudHdlYXRoZXInXG5pbXBvcnQgRGFpbHlXZWF0aGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZGFpbHl3ZWF0aGVyJ1xuaW1wb3J0IExpc3RDaXRpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0Q2l0aWVzJ1xuaW1wb3J0IExpc3RDb3VudGllcyBmcm9tICcuLi9jb21wb25lbnRzL2xpc3RDb3VudGllcydcbmltcG9ydCBXZWF0aGVyU3RhdFBhaXIgZnJvbSAnLi4vY29tcG9uZW50cy93ZWF0aGVyc3RhdHBhaXInXG5cbmltcG9ydCByb01ham9yQ2l0aWVzIGZyb20gJy4uL2RhdGEvbW1ham9yX3JvX2NpdGllcydcbmltcG9ydCB3ZWF0aGVyRGF0YUluaXQgZnJvbSAnLi4vZGF0YS93ZWF0aGVyX2RhdGFfaW5pdCdcblxuXG5leHBvcnQgY29uc3QgQUxMX0NPVU5USUVTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBjb3VudGllcygkb3JkZXJCeTogYWNjb3VudF9jb3VudHlPcmRlckJ5KXtcbiAgICBjb3VudGllcyhvcmRlckJ5OiAkb3JkZXJCeSkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICB9XG4gIH1cbmA7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShcbiAgeyBhbGxDb3VudGllc1F1ZXJ5VmFycywgcm9NYWpvckNpdGllcywgd2VhdGhlckRhdGFJbml0IH0pIHtcblxuXG4gIGNvbnN0IHsgZGF0YTogZ3FsRGF0YSB9ID0gdXNlUXVlcnkoXG4gICAgQUxMX0NPVU5USUVTX1FVRVJZLFxuICAgIHtcbiAgICAgIHZhcmlhYmxlczogYWxsQ291bnRpZXNRdWVyeVZhcnNcbiAgICB9XG4gICk7XG4gIGxldCB7IGNvdW50aWVzIH0gPSBncWxEYXRhO1xuICBjb25zdCBsb2NhdGlvbiA9IHJvTWFqb3JDaXRpZXMuZmlsdGVyKChsb2NhdGlvbikgPT4gbG9jYXRpb24uaWQgPT0gMjcxNSlbMF07IC8vIEJ1Y3VyZXN0aSBkZWZhdWx0XG5cblxuICBjb25zdCBnZXRXZWF0aGVyID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiYWljaVwiKVxuICAgIC8vIGdldCB3ZWF0aGVyXG4gICAgLy8gY29uc3Qgb3BlbndlYXRoZXJBcGlVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUEVOV0VBVEhFUl9BUElfVVJMO1xuICAgIC8vIGNvbnN0IG9wZW53ZWF0aGVyQXBpS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT1BFTldFQVRIRVJfQVBJX0tFWTtcbiAgICAvLyBsZXQgdXJsID0gbmV3IFVSTChgJHtvcGVud2VhdGhlckFwaVVybH0vb25lY2FsbGApO1xuICAgIC8vIGxldCBxdWVyeVBhcmFtcyA9IHtcbiAgICAvLyAgIGxhdDogbG9jYXRpb24ubGF0aXR1ZGUsIFxuICAgIC8vICAgbG9uOiBsb2NhdGlvbi5sb25naXR1ZGUsIFxuICAgIC8vICAgbGFuZzogJ3JvJyxcbiAgICAvLyAgIGFwcGlkOiBvcGVud2VhdGhlckFwaUtleSxcbiAgICAvLyAgIHVuaXRzOiAnbWV0cmljJyxcbiAgICAvLyAgIGV4Y2x1ZGU6ICdtaW51dGVseSdcbiAgICAvLyB9O1xuICAgIC8vIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKGtleSA9PiB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHF1ZXJ5UGFyYW1zW2tleV0pKVxuICAgIC8vIGNvbnN0IHsgZGF0YTogd2VhdGhlckRhdGEsIGVycm9yIH0gPSB1c2VTV1IodXJsLCBmZXRjaGVyKTtcblxuICAgIC8vIGdldCB3ZWF0aGVyIGZyb20gbmV4dGpzIGFwaSByb3V0ZXNcbiAgICBjb25zdCB7IGRhdGE6IHdlYXRoZXJEYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgICAgYC9hcGkvd2VhdGhlcj9sYXQ9JHtsb2NhdGlvbi5sYXRpdHVkZX0mbG9uPSR7bG9jYXRpb24ubG9uZ2l0dWRlfSZsYW5nPXJvYCwgZmV0Y2hlcik7XG4gICAgXG4gICAgLy8gZGVidWcgbG9nc1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhLCBlcnJvcik7XG4gICAgXG4gICAgaWYgKHdlYXRoZXJEYXRhICYmICFlcnJvcilcbiAgICAgIHNldFdlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKTtcbiAgfVxuXG5cbiAgY29uc3QgW3dlYXRoZXJEYXRhLCBzZXRXZWF0aGVyRGF0YV0gPSB1c2VTdGF0ZSh3ZWF0aGVyRGF0YUluaXQpXG4gIC8vIGNvbnN0IFtzaG91bGRHZXRXZWF0aGVyLCBzZXRTaG91bGRHZXRXZWF0aGVyXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IHNob3VsZEdldFdlYXRoZXIgPSB0cnVlXG5cblxuICAvLyBnZXQgd2VhdGhlciBmcm9tIG5leHRqcyBhcGkgcm91dGVzXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcbiAgICAoKSA9PiBzaG91bGRHZXRXZWF0aGVyID8gYC9hcGkvd2VhdGhlcj9sYXQ9JHtsb2NhdGlvbi5sYXRpdHVkZX0mbG9uPSR7bG9jYXRpb24ubG9uZ2l0dWRlfSZsYW5nPXJvYCA6IG51bGwsXG4gICAgZmV0Y2hlcik7XG4gIGlmIChkYXRhICYmICFlcnJvcilcbiAgICBzZXRXZWF0aGVyRGF0YShkYXRhKTtcblxuICAvLyB1c2VUaW1lb3V0KCgpID0+IHNldFNob3VsZEdldFdlYXRoZXIodHJ1ZSksIDU1MDApO1xuXG4gIC8vIGRlYnVnIGxvZ3NcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEsIGVycm9yKTtcblxuXG4gIGNvbnN0IHRpdGxlID0gYFZyZW1lYSBpbiBSb21hbmlhIC0gUHJvZ25vemEgbWV0ZW8gcGUgMTAgemlsZWBcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhvbWU+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e3RpdGxlfT48L21ldGE+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgJHt0aXRsZX1gfT48L21ldGE+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vdnJlbWVhLmlvbmtvbS5jb20vXCI+PC9tZXRhPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJWcmVtZWEgcGVudHJ1IDcgemlsZSBpbiBSb21hbmlhLiBWZXppIHByb2dub3phIG1ldGVvIGRldGFsaWF0YSBwZW50cnUgbHVuYSBjdXJlbnRhLCB2ZWkgc3RpIGludG90ZGVhdW5hIGNlIHBsYW51cmkgZGUgdmFjYW50YSBzYSBpdGkgZmFjaS5cIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDxoMT5WZXppIGN1bSB2YSBmaSB2cmVtZWEgaW4gdXJtYXRvYXJlbGUgNyB6aWxlPC9oMT5cbiAgICAgICAgICAgIDxwPk9yaWNlIHBsYW4gdGluZSBjb250IHNpIGRlIHZyZW1lYSBkZSBhZmFyYS4gSWEgY2VsZSBtYWkgYnVuZSBkZWNpemlpIGRlIHZhY2FudGEgdXJtYXJpbmQgYnVsZXRpbnVsIG1ldGVvIGN1cmVudCBzYXUgcHJvZ25vemEgdnJlbWlpIHBlbnRydSAxNSB6aWxlLiBMYSA8TGluayBocmVmPScvdnJlbWVhL21hbWFpYS1jb25zdGFudGEvMTA4NTAnPm1hcmU8L0xpbms+PyBMYSA8TGluayBocmVmPScvdnJlbWVhL3BvaWFuYS1icmFzb3YtYnJhc292LzI3MTQnPm11bnRlPC9MaW5rPj8gVHUgZGVjaXppIFttYWkgcHV0aW4gdnJlbWVhIGhhaGFoYV0uPC9wPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+U3RhcmVhIHZyZW1paSBpbiB7bG9jYXRpb24ubmFtZX0sIGp1ZGV0dWwge2xvY2F0aW9uLmFjY291bnRfY291bnR5Lm5hbWV9PC9oMj5cbiAgICAgICAgICA8L0NvbD4gICAgICAgICAgXG4gICAgICAgIDwvUm93PlxuICAgICAgICA8aHIvPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDdXJyZW50V2VhdGhlciB3ZWF0aGVyRGF0YT17d2VhdGhlckRhdGF9Lz5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxociBzdHlsZT17e21hcmdpblRvcDogMH19Lz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8RGFpbHlXZWF0aGVyIGRhaWx5PXt3ZWF0aGVyRGF0YS5kYWlseX0gLz5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIHsvKiBsb2NhdGlvbiBkZXRhaWxzICovfVxuICAgICAgICA8aHIvPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICA8cD5Db29yZG9uYXRlIGdlb2dyYWZpY2U6IDxXZWF0aGVyU3RhdFBhaXIgcGtleT0nbGF0aXR1ZGluZScgdmFsdWU9e2xvY2F0aW9uLmxhdGl0dWRlfSAvPjsgPFdlYXRoZXJTdGF0UGFpciBwa2V5PSdsb25naXR1ZGluZScgdmFsdWU9e2xvY2F0aW9uLmxvbmdpdHVkZX0gLz48L3A+XG4gICAgICAgICAgICA8YSBocmVmPXtgaHR0cDovL3d3dy5nb29nbGUuY29tL21hcHMvcGxhY2UvJHtsb2NhdGlvbi5sYXRpdHVkZX0sJHtsb2NhdGlvbi5sb25naXR1ZGV9YH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIEFyYXRhIHtsb2NhdGlvbi5uYW1lfSBpbiBHb29nbGUgTWFwcy5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxwPkxvY2FsaXRhdGVhIHtsb2NhdGlvbi5uYW1lfSBmYWNlIHBhcnRlIGRpbiBqdWRldHVsIHtsb2NhdGlvbi5hY2NvdW50X2NvdW50eS5uYW1lfSBkaW4gcmVnaXVuZWEge2xvY2F0aW9uLnJlZ2lvbn0gYSBSb21hbmllaTwvcD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxoci8+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17MTJ9PlxuICAgICAgICAgICAgPGgzPkN1bSBzZSBwcmV6aW50YSB2cmVtZWEgaW4gbWFyaWxlIG9yYXNlIGFsZSBSb21hbmllaTwvaDM+XG4gICAgICAgICAgICA8TGlzdENpdGllcyBjaXRpZXM9e3JvTWFqb3JDaXRpZXN9Lz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxoci8+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17MTJ9PlxuICAgICAgICAgICAgPGgzPlByb2dub3phIG1ldGVvIHBlIGp1ZGV0ZTwvaDM+XG4gICAgICAgICAgICA8TGlzdENvdW50aWVzIGNvdW50aWVzPXtjb3VudGllc30vPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xuICBjb25zdCBxdWVyeVZhcnMgPSB7XG4gICAgb3JkZXJCeToge1xuICAgICAgXCJuYW1lXCI6IFwiYXNjXCJcbiAgICB9XG4gIH1cblxuICBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBBTExfQ09VTlRJRVNfUVVFUlksXG4gICAgdmFyaWFibGVzOiBxdWVyeVZhcnNcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaW5pdGlhbEFwb2xsb1N0YXRlOiBhcG9sbG9DbGllbnQuY2FjaGUuZXh0cmFjdCgpLFxuICAgICAgYWxsQ291bnRpZXNRdWVyeVZhcnM6IHF1ZXJ5VmFycyxcbiAgICAgIHJvTWFqb3JDaXRpZXMsXG4gICAgICB3ZWF0aGVyRGF0YUluaXRcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})