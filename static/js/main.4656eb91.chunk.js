(this["webpackJsonpwiki-viewer"]=this["webpackJsonpwiki-viewer"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/not-found.d53a55c8.png"},25:function(e,t,a){e.exports=a(61)},30:function(e,t,a){},41:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=a.n(r);a(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(2),s=a(3),i=(a(41),a(24)),m=a.n(i),u=function(e){return void 0!==e&&o.a.createElement("div",{className:"movie-card",onClick:e.onClick},o.a.createElement("img",{className:"poster-image",src:e.poster_path?"https://image.tmdb.org/t/p/w600_and_h900_bestv2".concat(e.poster_path):m.a,alt:""}),o.a.createElement("div",{className:"movie-data"},o.a.createElement("h1",null,e.title," ",e.release_date&&o.a.createElement("span",null,"(",e.release_date.substring(0,4),")")),o.a.createElement("p",null,e.overview)))},d=a(42).default;c.a.render(o.a.createElement((function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(l.a)(c,2),m=i[0],v=i[1],h=Object(n.useState)([]),p=Object(l.a)(h,2),f=p[0],g=p[1],E=Object(n.useState)([]),b=Object(l.a)(E,2),_=b[0],k=b[1],w=Object(n.useState)(""),N=Object(l.a)(w,2),O=N[0],y=N[1],j=Object(n.useRef)("");Object(n.useEffect)((function(){d.get("https://api.themoviedb.org/3/discover/movie?api_key=acf4ef5820f3e83505c36c1c840be2ee&page=".concat(Math.floor(500*Math.random()+0))).then((function(e){var t=Math.floor(20*Math.random()+0),a=e.data.results.map((function(e){return[e.backdrop_path,e.title]}));k(a[t])})).catch((function(e){console.log(e)}))}),[]);var S=function(e){s.scroller.scrollTo(e,{duration:600,delay:0,smooth:"easeInOutQuart"})},C=function(){s.animateScroll.scrollToTop()},T=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a="https://api.themoviedb.org/3/search/movie?api_key=acf4ef5820f3e83505c36c1c840be2ee&language=en-US&query=".concat(j.current.value,"&page=1&include_adult=false"),n="https://api.themoviedb.org/3/movie/".concat(t.id,"/recommendations?api_key=acf4ef5820f3e83505c36c1c840be2ee&language=en-US&page=1");d.get(e?a:n).then((function(a){r(a.data.total_results&&a.data.results),g(t),S("results-container"),0===a.data.total_results&&e?(v("No movies found."),r(null)):0!==a.data.total_results||e?0!==f.length&&!1===e?(S("results-container"),v(null),y(o.a.createElement("p",null,"Keep selecting movies to get more recommendations. Or ",o.a.createElement("span",{className:"search-link",onClick:function(){return C()}},"search")," a different movie to get different recommendations."))):e&&a.data.total_results?(y("These are the results for your search, select one:"),v(null)):!1===e&&f&&(y("Here's the movie you choosed, scroll down to check the recommendations!"),v(null)):(v("There are no movies recommended."),r(null))})).catch((function(e){console.log(e)}))};return o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"search-container",style:{backgroundImage:"url(https://image.tmdb.org/t/p/w1280_and_h720_bestv2".concat(_[0])}},o.a.createElement("div",{className:"search-content"},o.a.createElement("div",{className:"header"},o.a.createElement("h2",{className:"big-header"},"Recommend-A-Movie"),o.a.createElement("h3",null,"Search for a movie and get recommendations!")),o.a.createElement("form",{className:"form",onSubmit:function(e){return e.preventDefault()}},o.a.createElement("input",{ref:j,name:"moviename",type:"text"}),o.a.createElement("input",{onClick:function(){return T(!0)},type:"submit",value:"GO!"})),m&&o.a.createElement("p",{className:"error"},m),o.a.createElement("div",{className:"overlay"}),o.a.createElement("span",{className:"bg-name"},_[1]))),j.current.value&&null!==a&&o.a.createElement(s.Element,{name:"results-container"},o.a.createElement("div",{className:"results-container"},a&&o.a.createElement("h3",null,O),0!==f.length&&a&&o.a.createElement("div",{className:"selected-movie"},o.a.createElement(u,{poster_path:f.poster_path,title:f.title,release_date:f.release_date,overview:f.overview})),o.a.createElement(s.Element,{name:"results"},j.current.value&&f.title&&a&&o.a.createElement("h2",null,"Recommended movies based on ",f.title),o.a.createElement("div",{className:"results"},a?a.map((function(e){return o.a.createElement(u,{key:e.id,onClick:function(){return T(!1,e)},poster_path:e.poster_path,title:e.title,id:e.id,release_date:e.release_date,overview:e.overview})})):"not-found"===m))),o.a.createElement("span",{className:"toTop",onClick:function(){return C()}},"\u2191")))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.4656eb91.chunk.js.map