_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{PnHL:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var u=function(n){return n.normalize("NFD").replace(/[\u0300-\u036f]/g,"")},c=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return n.replace(/ /g,t)},r=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return c(u(n),t).toLowerCase()}},"al+6":function(n,t,e){"use strict";e.r(t),e.d(t,"__N_SSG",(function(){return N})),e.d(t,"ALL_COUNTY_NAMES_QUERY",(function(){return v})),e.d(t,"COUNTY_QUERY",(function(){return w})),e.d(t,"default",(function(){return b}));var u=e("h4VS"),c=e("q1tI"),r=e.n(c),a=e("VX74"),o=e("YFqc"),i=e.n(o),l=e("5M6V"),y=e("PnHL"),d=e("7vrA"),f=e("3Z9Z"),s=r.a.createElement;function _(){var n=Object(u.a)(["\n  query locationsByCounty($countyName: String!, $orderBy: account_cityOrderBy) {\n    locationsByCounty(countyName: $countyName, orderBy: $orderBy) {\n      id\n      name\n      account_county {\n        id\n        name\n      }\n    }\n  }\n"]);return _=function(){return n},n}function m(){var n=Object(u.a)(["\n    {\n        counties {\n          id\n          name\n        }\n    }\n"]);return m=function(){return n},n}var N=!0,v=Object(a.gql)(m()),w=Object(a.gql)(_());function b(n){var t=n.countyQueryVars,e=Object(a.useQuery)(w,{variables:t}).data.locationsByCounty,u=t.countyName;return e&&e.length>0&&(u=e[0].account_county.name),s(l.a,null,s(d.a,null,s(f.a,{className:"justify-content-center"},s("h3",null,"Localitatile din judetul ",u)),s(f.a,{className:"justify-content-center"},s("ul",null,e.map((function(n){return s("li",{key:n.id},s(i.a,{href:"/vremea/".concat(Object(y.a)(n.name),"-").concat(Object(y.a)(n.account_county.name),"/").concat(n.id)},n.name))}))))))}},cJRS:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vremea/[slug]",function(){return e("al+6")}])}},[["cJRS",1,2,0,3,4]]]);