_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{RNiq:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return V})),a.d(t,"ALL_COUNTIES_QUERY",(function(){return k})),a.d(t,"default",(function(){return E}));var n=a("nKUr"),c=a("h4VS"),r=a("g4pe"),i=a.n(r),s=a("7vrA"),o=a("3Z9Z"),l=a("JI6e"),j=a("cWnB"),d=a("VX74"),u=a("VtrM"),b=a("NIcq"),m=a("BwbC"),O=a("5M6V"),h=a("cphw"),p=a("+CXv"),x=a("wheN"),f=a("YFqc"),v=a.n(f),g=a("PnHL"),y=a("RXfg"),w=a.n(y);function _(e){var t=e.counties.map((function(e,t){return Object(n.jsx)(l.a,{md:3,ms:"auto",xs:"auto",children:Object(n.jsx)(v.a,{href:"/vremea/".concat(Object(g.b)(e.name)),children:e.name})},t)}));return Object(n.jsx)(s.a,{fluid:!0,children:Object(n.jsx)(o.a,{className:"flex-nowrap flex-sm-wrap ".concat(w.a.mobileRow),children:t})})}var N=a("41wS"),z=a("5z+q");function R(){var e=Object(c.a)(["\n  query counties($orderBy: account_countyOrderBy){\n    counties(orderBy: $orderBy) {\n      id\n      name\n    }\n  }\n"]);return R=function(){return e},e}var V=!0,k=Object(d.gql)(R());function E(e){var t,a=e.allCountiesQueryVars,c=e.roMajorCities,r=Object(d.useQuery)(k,{variables:a}).data.counties,f=Object(n.jsx)(b.b,{}),v={initialData:{list:z.a.list,scity:z.a.city},revalidateOnMount:!0,revalidateOnFocus:!1,revalidateOnReconnect:!1,dedupingInterval:6e5,focusThrottleInterval:6e5,errorRetryCount:0},g=new URL("".concat("https://freegeoip.app","/json/")),y=Object(u.a)(g,m.a,v),w=y.data,R=y.error;w&&!R?t={name:w.city,account_county:{name:w.region_name},latitude:w.latitude,longitude:w.longitude}:(t=c.filter((function(e){return 2715==e.id}))[0],f=Object(n.jsx)(b.a,{}));var V=new URL("".concat("https://api.openweathermap.org/data/2.5","/forecast")),E={lat:t&&t.latitude,lon:t&&t.longitude,lang:"ro",appid:"a574739f847295ea9c1e2399bb70539b",units:"metric"};Object.keys(E).forEach((function(e){return V.searchParams.append(e,E[e])}));var C=Object(u.a)((function(){return t.latitude?V:null}),m.a,v),P=C.data,q=(C.error,"Vremea \xeen Rom\xe2nia, 15 zile de prognoz\u0103 meteo precis\u0103");return Object(n.jsxs)(O.a,{home:!0,children:[Object(n.jsxs)(i.a,{children:[Object(n.jsx)("title",{children:q}),Object(n.jsx)("meta",{property:"og:site_name",content:q}),Object(n.jsx)("meta",{property:"og:title",content:"".concat(q)}),Object(n.jsx)("meta",{property:"og:url",content:"https://vremea.ionkom.com/"}),Object(n.jsx)("meta",{name:"description",content:"Vremea \xeen Romania. Vezi prognoza meteo detaliata pentru luna curenta, Starea vremii cuprinde cu temperatura, precipita\u021biile, v\xe2ntul si umiditatea pentru 15 zile. Vezi vremea pentru localit\u0103\u021bile din"})]}),Object(n.jsxs)(s.a,{children:[Object(n.jsx)(o.a,{className:"mt-2",children:Object(n.jsx)(l.a,{children:t?Object(n.jsxs)("h1",{className:"text-center",children:["Vremea \xeen ",t.name,", jude\u021bul ",t.account_county.name]}):Object(n.jsx)("h1",{className:"text-center",children:"Vremea"})})}),Object(n.jsx)(o.a,{className:"mt-5",children:Object(n.jsx)(h.a,{weatherData:P.list&&P.list[0]})}),Object(n.jsx)(o.a,{children:Object(n.jsx)(l.a,{className:"text-right",style:{fontWeight:"350"},children:Object(n.jsxs)("p",{children:[f," Meteo folosind loca\u021bia dispozitivului t\u0103u"]})})}),Object(n.jsx)(o.a,{children:Object(n.jsx)(l.a,{children:Object(n.jsx)("h3",{children:"Vremea in urmatoarele zile"})})}),Object(n.jsx)("hr",{style:{marginTop:0}}),Object(n.jsx)(o.a,{children:Object(n.jsx)(p.a,{daily:P.list})}),Object(n.jsx)(o.a,{children:Object(n.jsx)(l.a,{children:Object(n.jsx)("h3",{children:"Prognoza meteo pe 15 zile"})})}),Object(n.jsx)("hr",{style:{marginTop:0}}),Object(n.jsx)(o.a,{children:Object(n.jsx)(l.a,{children:Object(n.jsx)(j.a,{disabled:!0,children:"Cere raportul detaliat"})})}),Object(n.jsx)("hr",{}),t&&Object(n.jsx)(o.a,{children:Object(n.jsxs)(l.a,{children:[Object(n.jsxs)("h3",{children:["Detalii geografice despre ",t.name," "]}),Object(n.jsxs)("p",{children:["Coordonate geografice: ",Object(n.jsx)(N.a,{pkey:"latitudine",value:t.latitude}),"; ",Object(n.jsx)(N.a,{pkey:"longitudine",value:t.longitude})]}),Object(n.jsxs)("a",{href:"http://www.google.com/maps/place/".concat(t.latitude,",").concat(t.longitude),target:"_blank",children:["Arata ",t.name," in Google Maps."]}),Object(n.jsxs)("p",{children:["Localitatea ",t.name," face parte din judetul ",t.account_county.name," din regiunea ",t.region," a Romaniei"]})]})}),Object(n.jsx)("hr",{}),Object(n.jsx)(o.a,{children:Object(n.jsxs)(l.a,{xs:12,children:[Object(n.jsx)("h3",{children:"Cum se prezinta vremea in marile orase ale Romaniei"}),Object(n.jsx)(x.a,{cities:c})]})}),Object(n.jsx)("hr",{}),Object(n.jsx)(o.a,{children:Object(n.jsxs)(l.a,{xs:12,children:[Object(n.jsx)("h3",{children:"Prognoza meteo pe judete"}),Object(n.jsx)(_,{counties:r})]})})]})]})}},cWnB:function(e,t,a){"use strict";var n=a("wx14"),c=a("zLVn"),r=a("TSYQ"),i=a.n(r),s=a("q1tI"),o=a.n(s),l=a("vUet"),j=a("dbZe"),d=o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.variant,s=e.size,d=e.active,u=e.className,b=e.block,m=e.type,O=e.as,h=Object(c.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),p=Object(l.a)(a,"btn"),x=i()(u,p,d&&"active",p+"-"+r,b&&p+"-block",s&&p+"-"+s);if(h.href)return o.a.createElement(j.a,Object(n.a)({},h,{as:O,ref:t,className:i()(x,h.disabled&&"disabled")}));t&&(h.ref=t),m?h.type=m:O||(h.type="button");var f=O||"button";return o.a.createElement(f,Object(n.a)({},h,{className:x}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=d},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",0,2,6,7,1,3,4,5]]]);