_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{PnHL:function(e,a,n){"use strict";n.d(a,"a",(function(){return o}));var t=function(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")},r=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e.replace(/ /g,a)},o=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return r(t(e),a).toLowerCase()}},RNiq:function(e,a,n){"use strict";n.r(a),n.d(a,"__N_SSG",(function(){return L})),n.d(a,"ALL_COUNTIES_QUERY",(function(){return V})),n.d(a,"default",(function(){return k}));var t=n("h4VS"),r=n("q1tI"),o=n.n(r),i=n("8Kt/"),u=n.n(i),c=n("YFqc"),l=n.n(c),m=n("7vrA"),s=n("3Z9Z"),d=n("JI6e"),p=n("T/rR"),f=n("VX74"),v=n("VtrM"),h=n("BwbC"),g=n("5M6V"),w=n("cphw"),_=n("1LMn"),b=n("PnHL"),y=n("RXfg"),N=n.n(y),z=o.a.createElement;function R(e){var a=e.cities.map((function(e,a){return z(d.a,{md:3,ms:"auto",xs:"auto",key:a},z(l.a,{href:"/vremea/".concat(Object(b.a)(e.name),"-").concat(Object(b.a)(e.account_county.name),"/").concat(e.id)},e.name))}));return z(m.a,{fluid:!0},z(s.a,{className:"flex-nowrap flex-sm-wrap ".concat(N.a.mobileRow)},a))}var j=o.a.createElement;function O(e){var a=e.counties.map((function(e,a){return j(d.a,{md:3,ms:"auto",xs:"auto",key:a},j(l.a,{href:"/vremea/".concat(Object(b.a)(e.name))},e.name))}));return j(m.a,{fluid:!0},j(s.a,{className:"flex-nowrap flex-sm-wrap ".concat(N.a.mobileRow)},a))}var E=o.a.createElement;function x(){var e=Object(t.a)(["\n  query counties($orderBy: account_countyOrderBy){\n    counties(orderBy: $orderBy) {\n      id\n      name\n    }\n  }\n"]);return x=function(){return e},e}var L=!0,V=Object(f.gql)(x());function k(e){var a=e.allCountiesQueryVars,n=e.roMajorCities,t=Object(f.useQuery)(V,{variables:a}).data.counties,r=n.filter((function(e){return 2715==e.id}))[0],i=new URL("".concat("https://api.openweathermap.org/data/2.5","/onecall")),c={lat:r.latitude,lon:r.longitude,lang:"ro",appid:"cc5c021bbfeec9e417dc036136ae82f4",units:"metric",exclude:"minutely"};Object.keys(c).forEach((function(e){return i.searchParams.append(e,c[e])}));var b=Object(v.a)(i,h.a),y=b.data,N=b.error,z="Vremea in Romania - Prognoza meteo pe 10 zile";return E(g.a,{home:!0},E(u.a,null,E("title",null,z),E("meta",{property:"og:site_name",content:z}),E("meta",{property:"og:title",content:"".concat(z)}),E("meta",{property:"og:url",content:"https://vremea.ionkom.com/"}),E("meta",{name:"description",content:"Vremea pentru 7 zile in Romania. Vezi prognoza meteo detaliata pentru luna curenta, vei sti intotdeauna ce planuri de vacanta sa iti faci."})),E(m.a,null,E(s.a,{className:"mt-2"},E(d.a,null,E("h1",null,"Vezi cum va fi vremea in urmatoarele 7 zile"),E("p",null,"Orice plan tine cont si de vremea de afara. Ia cele mai bune decizii de vacanta urmarind buletinul meteo curent sau prognoza vremii pentru 15 zile. La ",E(l.a,{href:"/vremea/mamaia-constanta/10850"},"mare"),"? La ",E(l.a,{href:"/vremea/poiana-brasov-brasov/2714"},"munte"),"? Tu decizi [mai putin vremea hahaha]."),E("h2",{className:"text-center"},"Starea vremii in ",r.name,", judetul ",r.account_county.name))),y&&!N?E(o.a.Fragment,null,E("hr",null),E(s.a,null,E(w.a,{weatherData:y})),E("hr",null),E(s.a,null,E(_.a,{daily:y.daily}))):E(s.a,{className:"justify-content-center"},E(p.a,{animation:"border",role:"status"},E("span",{className:"sr-only"},"Loading..."))),E("hr",null),E(s.a,null,E(d.a,null,E("a",{href:"http://www.google.com/maps/place/".concat(r.latitude,",").concat(r.longitude),target:"_blank"},"Arata ",r.name," in Google Maps."),E("p",null,"Orasul ",r.name," face parte din judetul ",r.account_county.name," din regiunea ",r.region," a Romaniei"))),E("hr",null),E(s.a,null,E(d.a,{xs:12},E("h3",null,"Cum se prezinta vremea in marile orase ale Romaniei"),E(R,{cities:n}))),E("hr",null),E(s.a,null,E(d.a,{xs:12},E("h3",null,"Prognoza meteo pe judete"),E(O,{counties:t})))))}},vlRD:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,2,5,0,3,4,6]]]);