_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{Fs0C:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var a=e("q1tI"),o=e.n(a),r=e("YFqc"),u=e.n(r),c=e("JI6e"),i=e("7vrA"),l=e("3Z9Z"),m=e("PnHL"),s=e("RXfg"),d=e.n(s),y=o.a.createElement;function f(n){var t=n.counties.map((function(n,t){return y(c.a,{md:3,ms:"auto",xs:"auto",key:t},y(u.a,{href:"/vremea/".concat(Object(m.b)(n.name))},n.name))}));return y(i.a,{fluid:!0},y(l.a,{className:"flex-nowrap flex-sm-wrap ".concat(d.a.mobileRow)},t))}},"al+6":function(n,t,e){"use strict";e.r(t),e.d(t,"__N_SSG",(function(){return v})),e.d(t,"ALL_COUNTY_NAMES_QUERY",(function(){return N})),e.d(t,"COUNTY_QUERY",(function(){return w})),e.d(t,"default",(function(){return b}));var a=e("h4VS"),o=e("q1tI"),r=e.n(o),u=e("8Kt/"),c=e.n(u),i=e("VX74"),l=(e("YFqc"),e("5M6V")),m=e("7vrA"),s=e("3Z9Z"),d=e("JI6e"),y=e("Fs0C"),f=r.a.createElement;function p(){var n=Object(a.a)(["\n  query locationsByCounty($countyName: String!, $orderBy: account_cityOrderBy) {\n    locationsByCounty(countyName: $countyName, orderBy: $orderBy) {\n      id\n      name\n      account_county {\n        id\n        name\n      }\n    }\n  }\n"]);return p=function(){return n},n}function _(){var n=Object(a.a)(["\n    {\n        counties {\n          id\n          name\n        }\n    }\n"]);return _=function(){return n},n}var v=!0,N=Object(i.gql)(_()),w=Object(i.gql)(p());function b(n){var t=n.countyQueryVars,e=Object(i.useQuery)(w,{variables:t}).data.locationsByCounty,a=t.countyName;e&&e.length>0&&(a=e[0].account_county.name);var o="Vremea in ".concat(a,", prognoza meteo pe 15 zile");return f(l.a,null,f(c.a,null,f("title",null,o),f("meta",{property:"og:site_name",content:o}),f("meta",{property:"og:title",content:"".concat(o)}),f("meta",{property:"og:url",content:"https://vremea.ionkom.com/"}),f("meta",{name:"description",content:"Prognoza meteo pentru judetul ".concat(a,". Vremea pentru urmatoarele zile dar si un buletin meteo curent al localitatilor din judet")})),f(m.a,null,f(s.a,{className:"justify-content-center"},f("h1",null,"Vezi cum va fi vremea in urmatoarele saptamani in judetul ",a)),f(s.a,null,f(d.a,{xs:12},f("h3",null,"Prognoza meteo pentru localitatile din judetul ",a," "),f(y.a,{counties:e})))))}},cJRS:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vremea/[slug]",function(){return e("al+6")}])}},[["cJRS",1,2,0,3,4,5]]]);