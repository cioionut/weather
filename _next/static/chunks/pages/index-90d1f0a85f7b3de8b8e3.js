_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{Fs0C:function(e,a,n){"use strict";n.d(a,"a",(function(){return f}));var t=n("q1tI"),r=n.n(t),i=n("YFqc"),o=n.n(i),u=n("JI6e"),l=n("7vrA"),c=n("3Z9Z"),m=n("PnHL"),s=n("RXfg"),d=n.n(s),p=r.a.createElement;function f(e){var a=e.counties.map((function(e,a){return p(u.a,{md:3,ms:"auto",xs:"auto",key:a},p(o.a,{href:"/vremea/".concat(Object(m.b)(e.name))},e.name))}));return p(l.a,{fluid:!0},p(c.a,{className:"flex-nowrap flex-sm-wrap ".concat(d.a.mobileRow)},a))}},RNiq:function(e,a,n){"use strict";n.r(a),n.d(a,"__N_SSG",(function(){return j})),n.d(a,"ALL_COUNTIES_QUERY",(function(){return E})),n.d(a,"default",(function(){return L}));var t=n("h4VS"),r=n("q1tI"),i=n.n(r),o=n("8Kt/"),u=n.n(o),l=n("YFqc"),c=n.n(l),m=n("7vrA"),s=n("3Z9Z"),d=n("JI6e"),p=n("T/rR"),f=n("VX74"),v=n("VtrM"),h=n("BwbC"),g=n("5M6V"),w=n("cphw"),y=n("1LMn"),_=n("wheN"),b=n("Fs0C"),N=(n("PnHL"),n("41wS")),z=i.a.createElement;function R(){var e=Object(t.a)(["\n  query counties($orderBy: account_countyOrderBy){\n    counties(orderBy: $orderBy) {\n      id\n      name\n    }\n  }\n"]);return R=function(){return e},e}var j=!0,E=Object(f.gql)(R());function L(e){var a=e.allCountiesQueryVars,n=e.roMajorCities,t=Object(f.useQuery)(E,{variables:a}).data.counties,r=n.filter((function(e){return 2715==e.id}))[0],o=new URL("".concat("https://api.openweathermap.org/data/2.5","/onecall")),l={lat:r.latitude,lon:r.longitude,lang:"ro",appid:"cc5c021bbfeec9e417dc036136ae82f4",units:"metric",exclude:"minutely"};Object.keys(l).forEach((function(e){return o.searchParams.append(e,l[e])}));var R=Object(v.a)(o,h.a),j=R.data,L=R.error,O="Vremea in Romania - Prognoza meteo pe 10 zile";return z(g.a,{home:!0},z(u.a,null,z("title",null,O),z("meta",{property:"og:site_name",content:O}),z("meta",{property:"og:title",content:"".concat(O)}),z("meta",{property:"og:url",content:"https://vremea.ionkom.com/"}),z("meta",{name:"description",content:"Vremea pentru 7 zile in Romania. Vezi prognoza meteo detaliata pentru luna curenta, vei sti intotdeauna ce planuri de vacanta sa iti faci."})),z(m.a,null,z(s.a,{className:"mt-2"},z(d.a,null,z("h1",null,"Vezi cum va fi vremea in urmatoarele 7 zile"),z("p",null,"Orice plan tine cont si de vremea de afara. Ia cele mai bune decizii de vacanta urmarind buletinul meteo curent sau prognoza vremii pentru 15 zile. La ",z(c.a,{href:"/vremea/mamaia-constanta/10850"},"mare"),"? La ",z(c.a,{href:"/vremea/poiana-brasov-brasov/2714"},"munte"),"? Tu decizi [mai putin vremea hahaha]."),z("h2",{className:"text-center"},"Starea vremii in ",r.name,", judetul ",r.account_county.name))),j&&!L?z(i.a.Fragment,null,z("hr",null),z(s.a,null,z(w.a,{weatherData:j})),z("hr",{style:{marginTop:0}}),z(s.a,null,z(y.a,{daily:j.daily}))):z(s.a,{className:"justify-content-center"},z(p.a,{animation:"border",role:"status"},z("span",{className:"sr-only"},"Loading..."))),z("hr",null),z(s.a,null,z(d.a,null,z("p",null,"Coordonate geografice: ",z(N.a,{pkey:"latitudine",value:r.latitude}),"; ",z(N.a,{pkey:"longitudine",value:r.longitude})),z("a",{href:"http://www.google.com/maps/place/".concat(r.latitude,",").concat(r.longitude),target:"_blank"},"Arata ",r.name," in Google Maps."),z("p",null,"Localitatea ",r.name," face parte din judetul ",r.account_county.name," din regiunea ",r.region," a Romaniei"))),z("hr",null),z(s.a,null,z(d.a,{xs:12},z("h3",null,"Cum se prezinta vremea in marile orase ale Romaniei"),z(_.a,{cities:n}))),z("hr",null),z(s.a,null,z(d.a,{xs:12},z("h3",null,"Prognoza meteo pe judete"),z(b.a,{counties:t})))))}},vlRD:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,2,5,6,0,3,4,7]]]);