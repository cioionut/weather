_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"+CXv":function(e,t,a){"use strict";a.d(t,"a",(function(){return A}));var n=a("nKUr"),c=a("wx14"),i=a("zLVn"),r=a("TSYQ"),o=a.n(r),l=a("q1tI"),s=a.n(l),j=a("JCAc"),u=a("vUet"),d=a("ILyh"),b=s.a.createContext(null);b.displayName="AccordionContext";var m=b;var h=s.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"button":a,r=e.children,o=e.eventKey,j=e.onClick,u=Object(i.a)(e,["as","children","eventKey","onClick"]),b=function(e,t){var a=Object(l.useContext)(m),n=Object(l.useContext)(d.a);return function(c){n&&n(e===a?null:e,c),t&&t(c)}}(o,j);return"button"===n&&(u.type="button"),s.a.createElement(n,Object(c.a)({ref:t,onClick:b},u),r)})),O=a("vYJ8"),x=s.a.forwardRef((function(e,t){var a=e.children,n=e.eventKey,r=Object(i.a)(e,["children","eventKey"]),o=Object(l.useContext)(m);return s.a.createElement(O.a,Object(c.a)({ref:t,in:o===n},r),s.a.createElement("div",null,s.a.Children.only(a)))}));x.displayName="AccordionCollapse";var p=x,v=s.a.forwardRef((function(e,t){var a=Object(j.a)(e,{activeKey:"onSelect"}),n=a.as,r=void 0===n?"div":n,l=a.activeKey,b=a.bsPrefix,h=a.children,O=a.className,x=a.onSelect,p=Object(i.a)(a,["as","activeKey","bsPrefix","children","className","onSelect"]),v=o()(O,Object(u.a)(b,"accordion"));return s.a.createElement(m.Provider,{value:l||null},s.a.createElement(d.a.Provider,{value:x||null},s.a.createElement(r,Object(c.a)({ref:t},p,{className:v}),h)))}));v.displayName="Accordion",v.Toggle=h,v.Collapse=p;var f=v,y=a("3Z9Z"),g=a("JI6e"),w=a("7vrA"),N=["Duminica","Luni","Marti","Miercuri","Joi","Vineri","Sambata"],_=["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"],C=a("PnHL"),k=a("Enw+"),E=a("ma3e");function I(e){var t=e.eventKey;return Object(l.useContext)(m)===t?Object(n.jsx)(E.a,{}):Object(n.jsx)(E.b,{})}var P=a("41wS"),R=a("RXfg"),V=a.n(R),z=a("ZZQ1"),K=a.n(z);function A(e){var t=e.daily.map((function(e,t){var a=new Date(1e3*e.dt),c="".concat(N[a.getDay()]," - ").concat(a.getDate()," ").concat(_[a.getMonth()]," ").concat(a.getFullYear()),i="".concat(N[a.getDay()]),r="ora ".concat(a.getHours());return 0==t&&(c="Astazi, ".concat(c),i="Astazi"),Object(n.jsxs)("div",{children:[Object(n.jsxs)(f.Toggle,{as:y.a,eventKey:"".concat(t),className:"mt-1 ".concat(K.a.togleRow),children:[Object(n.jsx)(g.a,{md:1,xs:2,children:Object(n.jsx)("img",{src:"/weather_icons/".concat(e.weather[0].icon,"@2x.png"),alt:e.weather[0].description,width:50,height:50})}),Object(n.jsxs)(g.a,{md:2,xs:5,className:"pt-2",style:{fontWeight:"430"},children:[i,", ",r]}),Object(n.jsx)(g.a,{md:8,xs:3,className:"pt-2",style:{fontWeight:"350"},children:Object(n.jsx)(k.a,{value:e.main.temp})}),Object(n.jsx)(g.a,{md:1,xs:2,className:"pt-2 text-right",children:Object(n.jsx)(I,{eventKey:"".concat(t)})})]}),Object(n.jsx)(f.Collapse,{eventKey:"".concat(t),children:Object(n.jsx)(y.a,{children:Object(n.jsxs)(w.a,{children:[Object(n.jsx)(y.a,{className:"justify-content-center",children:Object(n.jsx)(g.a,{xs:"auto",children:Object(n.jsx)("span",{children:Object(C.a)(e.weather[0].description)})})}),Object(n.jsxs)(y.a,{className:"flex-nowrap flex-sm-wrap ".concat(V.a.mobileRow),children:[Object(n.jsx)(g.a,{className:"text-center ".concat(V.a.mobileCol),children:Object(n.jsx)(P.a,{pkey:"Precipitatii",value:"".concat(100*e.pop,"%")})}),Object(n.jsx)(g.a,{className:"text-center ".concat(V.a.mobileCol),children:Object(n.jsx)(P.a,{pkey:"Umiditate",value:"".concat(e.main.humidity,"%")})}),Object(n.jsx)(g.a,{className:"text-center ".concat(V.a.mobileCol),children:Object(n.jsx)(P.a,{pkey:"Vant",value:"".concat(Math.floor(3.6*e.wind.speed)," kph")})}),Object(n.jsx)(g.a,{className:"text-center ".concat(V.a.mobileCol),children:Object(n.jsx)(P.a,{pkey:"Nori",value:"".concat(Math.floor(e.clouds.all),"%")})})]})]})})})]},t)}));return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(f,{defaultActiveKey:"0",className:"container",children:t})})}},J0i7:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vremea/[slug]/[locationId]",function(){return a("hCi5")}])},ZZQ1:function(e,t,a){e.exports={togleRow:"dailyweather_togleRow__1DEIN"}},cWnB:function(e,t,a){"use strict";var n=a("wx14"),c=a("zLVn"),i=a("TSYQ"),r=a.n(i),o=a("q1tI"),l=a.n(o),s=a("vUet"),j=a("dbZe"),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.variant,o=e.size,u=e.active,d=e.className,b=e.block,m=e.type,h=e.as,O=Object(c.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),x=Object(s.a)(a,"btn"),p=r()(d,x,u&&"active",x+"-"+i,b&&x+"-block",o&&x+"-"+o);if(O.href)return l.a.createElement(j.a,Object(n.a)({},O,{as:h,ref:t,className:r()(p,O.disabled&&"disabled")}));t&&(O.ref=t),m?O.type=m:h||(O.type="button");var v=h||"button";return l.a.createElement(v,Object(n.a)({},O,{className:p}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=u},hCi5:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return N})),a.d(t,"LOCATION_QUERY",(function(){return _})),a.d(t,"ALL_LOCATIONS_QUERY",(function(){return C})),a.d(t,"default",(function(){return k}));var n=a("nKUr"),c=a("h4VS"),i=a("g4pe"),r=a.n(i),o=a("YFqc"),l=a.n(o),s=a("VtrM"),j=a("VX74"),u=a("7vrA"),d=a("3Z9Z"),b=a("JI6e"),m=a("cWnB"),h=(a("q1tI"),a("PnHL")),O=a("BwbC"),x=a("5M6V"),p=a("cphw"),v=a("+CXv"),f=a("41wS"),y=(a("wheN"),a("5z+q"));function g(){var e=Object(c.a)(["\n  {\n    counties {\n      name\n      account_city {\n        id\n        name\n      }\n    }\n  }\n"]);return g=function(){return e},e}function w(){var e=Object(c.a)(["\n  query location($locationId: Int!) {\n    location(locationId: $locationId) {\n      id\n      county_id\n      siruta\n      longitude\n      latitude\n      name\n      region\n      account_county {\n        id\n        name\n        code\n      }\n    }\n  }\n"]);return w=function(){return e},e}var N=!0,_=Object(j.gql)(w()),C=Object(j.gql)(g());function k(e){var t=e.locationQueryVars,a=(e.weatherDataInit,Object(j.useQuery)(_,{variables:t}).data.location),c={initialData:{list:y.a.list,scity:y.a.city},revalidateOnMount:!0,revalidateOnFocus:!1,revalidateOnReconnect:!1,dedupingInterval:6e5,focusThrottleInterval:6e5,errorRetryCount:0},i=new URL("".concat("https://api.openweathermap.org/data/2.5","/forecast")),o={lat:a&&a.latitude,lon:a&&a.longitude,lang:"ro",appid:"a574739f847295ea9c1e2399bb70539b",units:"metric"};Object.keys(o).forEach((function(e){return i.searchParams.append(e,o[e])}));var g=Object(s.a)((function(){return a.latitude?i:null}),O.a,c),w=g.data,N=(g.error,"Vremea \xeen ".concat(a.name,", jude\u021bul ").concat(a.account_county.name," - Meteo pe 15 zile "));return Object(n.jsxs)(x.a,{children:[Object(n.jsxs)(r.a,{children:[Object(n.jsx)("title",{children:N}),Object(n.jsx)("meta",{property:"og:site_name",content:N}),Object(n.jsx)("meta",{property:"og:title",content:"".concat(N)}),Object(n.jsx)("meta",{property:"og:url",content:"https://vremea.ionkom.com/"}),Object(n.jsx)("meta",{name:"description",content:"Vremea \xeen ".concat(a.name," \u0219i judetul ").concat(a.account_county.name," regiunea ").concat(a.region,". Starea vremii include temperatura, precipita\u021biile, v\xe2ntul, vizibilitatea \u0219i indexul UV pt 15 zile. Buletin meteo curat \u0219i pe in\u021belesul tuturor.")})]}),Object(n.jsxs)(u.a,{children:[Object(n.jsx)(d.a,{className:"mt-2",children:Object(n.jsx)(b.a,{children:Object(n.jsxs)("h1",{className:"text-center",children:["Vremea \xeen ",a.name,", jude\u021bul ",a.account_county.name,", ",a.region]})})}),Object(n.jsx)("hr",{}),Object(n.jsx)(d.a,{children:Object(n.jsx)(b.a,{children:Object(n.jsx)("h2",{children:"Vremea acum"})})}),Object(n.jsx)("hr",{style:{marginTop:0}}),Object(n.jsx)(d.a,{children:Object(n.jsx)(p.a,{weatherData:w.list&&w.list[0]})}),Object(n.jsx)(d.a,{children:Object(n.jsx)(b.a,{children:Object(n.jsx)("h3",{children:"Vremea in urmatoarele zile"})})}),Object(n.jsx)("hr",{style:{marginTop:0}}),Object(n.jsx)(d.a,{children:Object(n.jsx)(v.a,{daily:w.list})}),Object(n.jsx)(d.a,{children:Object(n.jsx)(b.a,{children:Object(n.jsx)("h3",{children:"Prognoza meteo pe 15 zile"})})}),Object(n.jsx)("hr",{style:{marginTop:0}}),Object(n.jsx)(d.a,{children:Object(n.jsx)(b.a,{children:Object(n.jsx)(m.a,{disabled:!0,children:"Cere raportul detaliat"})})}),Object(n.jsx)("hr",{}),Object(n.jsx)(d.a,{children:Object(n.jsxs)(b.a,{children:[Object(n.jsxs)("h3",{children:["Detalii geografice despre ",a.name," "]}),Object(n.jsxs)("p",{children:["Coordonate geografice: ",Object(n.jsx)(f.a,{pkey:"latitudine",value:a.latitude}),"; ",Object(n.jsx)(f.a,{pkey:"longitudine",value:a.longitude})]}),Object(n.jsxs)("a",{href:"http://www.google.com/maps/place/".concat(a.latitude,",").concat(a.longitude),target:"_blank",children:["Arata ",a.name," in Google Maps."]}),Object(n.jsxs)("p",{children:["Localitatea ",a.name," face parte din judetul ",a.account_county.name," din regiunea ",a.region," a Romaniei"]})]})}),Object(n.jsx)("hr",{}),Object(n.jsx)(d.a,{children:Object(n.jsx)(b.a,{xs:12,children:Object(n.jsx)("h3",{children:Object(n.jsx)(l.a,{href:"/vremea/".concat(Object(h.b)(a.account_county.name)),children:Object(n.jsxs)("a",{children:["Prognoza meteo in celelalte localitati din judetul ",a.account_county.name]})})})})})]})]})}}},[["J0i7",0,2,6,1,3,4,5]]]);