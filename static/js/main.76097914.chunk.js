(this["webpackJsonpfind-food"]=this["webpackJsonpfind-food"]||[]).push([[0],{23:function(e,t,n){e.exports=n(40)},28:function(e,t,n){},29:function(e,t,n){},37:function(e,t,n){e.exports=n.p+"static/media/cloud1.dc881fa0.svg"},38:function(e,t,n){e.exports=n.p+"static/media/cloud2.73806bd2.svg"},39:function(e,t,n){e.exports=n.p+"static/media/cloud3.5ba04788.svg"},40:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),i=n.n(r),o=(n(28),n(29),n(8)),s=n(2),c=n(18),u=n(7),m=n(10),f=function(e){for(var t=parseInt(Math.round(e.rating)),n=[],a=0;a<t;a++)n.push("star--yellow");for(var r=n.length;r<5;r++)n.push("star--empty");return l.a.createElement(l.a.Fragment,null,n&&n.map((function(e){return l.a.createElement("div",{className:"star "+e})})))};function p(){var e=Object(o.a)(["\n    display: inline-block;\n    width: calc((100% - 2rem) /2);\n    border: 1px solid #eee;\n    padding: 1rem;\n    border-radius: 1rem;\n    margin-right: .5rem;\n    margin-bottom: 1rem;\n    box-sizing: border-box;\n    background:#fff;\n  h3{\n    text-overflow : ellipsis;\n    white-space : nowrap;\n    overflow: hidden;\n  }\n  .star {\n  position: relative;\n  \n  display: inline-block;\n  width: 0;\n  height: 0;\n  \n  margin-left: .9em;\n  margin-right: .9em;\n  margin-bottom: 1.2em;\n  border-right:  .3em solid transparent;\n  border-bottom: .7em  solid #FC0;\n  border-left:   .3em solid transparent;\n  font-size: 8px;\n  \n  &:before, &:after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: .6em;\n    left: -1em;\n    border-right:  1em solid transparent;\n    border-bottom: .7em  solid #FC0;\n    border-left:   1em solid transparent;\n    transform: rotate(-35deg);\n  }\n  &:after {  \n    transform: rotate(35deg);\n  }\n}\n  .star--empty{\n    border-bottom: .7em  solid #ccc;\n    &:before, &:after{\n      border-bottom: .7em  solid #ccc;\n    }\n  }\n"]);return p=function(){return e},e}var y=m.a.div(p()),d=function(e){return l.a.createElement(y,{key:e.placeId},l.a.createElement("h3",null,e.placeName),l.a.createElement(f,{rating:e.rating}))},b=n(11),g=["places"],h={width:"60%",height:"400px"},v={styles:[{featureType:"all",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"administrative.province",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"},{color:"#cee9de"},{saturation:"2"},{weight:"0.80"}]},{featureType:"poi.attraction",elementType:"geometry.fill",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#f5d6d6"}]},{featureType:"road.highway",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{hue:"#ff0000"},{visibility:"on"}]},{featureType:"road.highway.controlled_access",elementType:"labels.text",stylers:[{visibility:"simplified"}]},{featureType:"road.highway.controlled_access",elementType:"labels.icon",stylers:[{visibility:"on"},{hue:"#0064ff"},{gamma:"1.44"},{lightness:"-3"},{weight:"1.69"}]},{featureType:"road.arterial",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"road.arterial",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{visibility:"simplified"},{weight:"0.31"},{gamma:"1.43"},{lightness:"-5"},{saturation:"-22"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"all",stylers:[{visibility:"on"},{hue:"#ff0000"}]},{featureType:"transit.station.airport",elementType:"all",stylers:[{visibility:"simplified"},{hue:"#ff0045"}]},{featureType:"transit.station.bus",elementType:"all",stylers:[{visibility:"on"},{hue:"#00d1ff"}]},{featureType:"transit.station.bus",elementType:"labels.text",stylers:[{visibility:"simplified"}]},{featureType:"transit.station.rail",elementType:"all",stylers:[{visibility:"simplified"},{hue:"#00cbff"}]},{featureType:"transit.station.rail",elementType:"labels.text",stylers:[{visibility:"simplified"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{weight:"1.61"},{color:"#cde2e5"},{visibility:"on"}]}],disableDefaultUI:!0};function T(){var e=Object(b.d)({googleMapsApiKey:"AIzaSyBsYSHr4f_HClzQBQFlMgJ755jsl-XBGyU",libraries:g}),t=e.isLoaded,n=e.loadError,r=Object(s.c)((function(e){return e.markers})),i=Object(s.c)((function(e){return e.location})),o=Object(a.useState)(null),c=Object(u.a)(o,2),m=c[0],f=c[1];return n?"Error loading maps":t?r&&r.constructor===Array&&0===r.length?null:l.a.createElement(b.a,{mapContainerStyle:h,zoom:15,center:i,options:v,defaultVisible:!1},r.map((function(e){return l.a.createElement(b.c,{key:e.placeId,position:{lat:e.location.lat,lng:e.location.lng},onClick:function(){return f(e)}})})),m?l.a.createElement(b.b,{position:{lat:m.location.lat,lng:m.location.lng},onCloseClick:function(){return f(null)}},l.a.createElement("div",null,l.a.createElement("h2",null,m.placeName))):null):"Loading maps"}var E=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([]),o=Object(u.a)(i,2),m=o[0],f=o[1],p=Object(a.useState)(null),y=Object(u.a)(p,2),b=y[0],g=y[1],h=Object(s.c)((function(e){return e.food})),v=Object(s.c)((function(e){return e.markers})),E=Object(s.b)(),O=function(){r(!0);var e=[];fetch("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?"+b+"&radius=1000&type=restaurant&keyword="+h+"&key=AIzaSyBsYSHr4f_HClzQBQFlMgJ755jsl-XBGyU").then((function(e){return e.json()})).then((function(t){var n,a=Object(c.a)(t.results);try{for(a.s();!(n=a.n()).done;){var l=n.value,i={},o={lat:l.geometry.location.lat,lng:l.geometry.location.lng};i.rating=l.rating,i.location=o,i.placeId=l.place_id,i.placeName=l.name,e.push(i)}}catch(s){a.e(s)}finally{a.f()}f(e),E(function(e){return{type:"SET_MARKERS",markers:e}}(e)),r(!1)})).catch((function(e){console.log(e),r(!1)}))};return Object(a.useEffect)((function(){!function(){var e=new XMLHttpRequest;e.open("POST","https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBsYSHr4f_HClzQBQFlMgJ755jsl-XBGyU"),e.onload=function(){var e=JSON.parse(this.responseText);g("location="+e.location.lat+","+e.location.lng),E(function(e){return{type:"SET_GEOLOCATION",location:e}}({lat:e.location.lat,lng:e.location.lng}))},e.send()}()}),[]),Object(a.useEffect)((function(){v&&0!==v.length&&O()}),[h]),l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{style:{marginLeft:"15px"},onClick:function(){return O()}},"\u63a8\u85a6\u6211\u5e97\u9762"),l.a.createElement("div",{style:{padding:"2rem 0"}},n&&l.a.createElement("div",null,"Loading...."),l.a.createElement("div",{className:"Place_result"},l.a.createElement("div",{className:"Place_result_list"},m&&m.map((function(e){return l.a.createElement(d,{placeName:e.placeName,rating:e.rating,key:e.placeId})}))),l.a.createElement(T,null))))};function O(){var e=Object(o.a)(["\n\n    color:#9b9b9b;\n    font-weight:100;\n    &_wrap{\n        overflow: hidden;\n        position:relative;\n    }\n    &_title{\n        font-size: 3rem;\n    }\n    &_subTitle{\n        font-size: 1rem;\n    }\n    &_sun{\n        width: 250px;\n        height: 250px;\n        border-radius:50%;\n        box-shadow: 0 0 80px 0 #fae348;\n        margin: 50px auto 75px; \n        background-image: radial-gradient(circle at 50% 50%, #f5f3d6, #fffab8 71%);\n    }\n    &_clouds{\n        position: absolute;\n        animation: "," 4s infinite alternate;\n        opacity: .8;\n        &.cloud1{\n            top: calc(50% + 50px);\n            left: calc(50% + 150px);\n        }\n        &.cloud2{\n            top: calc(50% - 100px);\n            right: calc(50% + 150px);\n        }\n        &.cloud3{\n            top: 10%;\n            right: 10%;\n        }\n    }\n   \n    button{\n        appearance: none;\n        min-width: 150px;\n        background:transparent;\n        padding:.5rem 1.5rem;\n        border-radius: 2rem;\n        border: solid 1px #9b9b9b;\n        color:#9b9b9b;\n        outline:0;\n        cursor: pointer;\n        &:hover{\n            background: #9b9b9b;\n            color:#fff;\n        }\n        &:active,&:hover{\n            outline:0;\n        }\n    }\n    .Place_result{\n        display:flex;\n        align-items:top;\n        &_list{\n            width:40%;\n        }\n    }\n\n"]);return O=function(){return e},e}function w(){var e=Object(o.a)(["\n     0% { transform: translateX(-10%); }\n    100% { transform: translateX(0); }\n"]);return w=function(){return e},e}var _=Object(m.b)(w()),j=Object(m.a)((function(e){var t=e.className,a=Object(s.c)((function(e){return e.food})),r=Object(s.b)();return l.a.createElement("div",{className:t},l.a.createElement("section",{className:t+"_wrap"},l.a.createElement("h1",{className:t+"_title"},"\u4f5b\u7cfb\u627e\u98df"),l.a.createElement("h3",{className:t+"_subTitle"},"\u7e3d\u662f\u60f3\u4e0d\u5230\u8981\u5403\u4ec0\u9ebc\u55ce\uff1f",l.a.createElement("br",null),"\u4e0d\u5982\u5c31\u96a8\u7de3\u5427\uff01"),l.a.createElement("div",{className:t+"_sun"}),l.a.createElement("div",{className:t+"_clouds cloud1"},l.a.createElement("img",{src:n(37),alt:""})),l.a.createElement("div",{className:t+"_clouds cloud2"},l.a.createElement("img",{src:n(38),alt:""})),l.a.createElement("div",{className:t+"_clouds cloud3"},l.a.createElement("img",{src:n(39),alt:""}))),!a&&l.a.createElement("button",{onClick:function(e){e.preventDefault(),r({type:"GET_RANDOM_FOOD"})}},"\u96a8\u7de3\u5c0b\u627e"),a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"\u5c31\u6c7a\u5b9a\u5403",l.a.createElement("span",{style:{color:"#ffbb00"}},a),"\u4e86!"),l.a.createElement("button",{onClick:function(e){e.preventDefault(),r({type:"GET_RANDOM_FOOD"})}},"\u8b93\u6211\u518d\u91cd\u62bd\u4e00\u6b21"),l.a.createElement(E,null)))}))(O(),_);var x=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=n(13),N=n(22),S=n(12),C={food:"",foodList:["pizza","\u9eb5","\u96de\u8089\u98ef","\u65e5\u5f0f","\u62c9\u9eb5","\u901f\u98df","\u6cf0\u5f0f","\u7fa9\u5927\u5229\u9eb5","\u65e9\u5348\u9910","\u97d3\u5f0f","\u5496\u55b1\u98ef","\u706b\u934b","\u81ea\u52a9\u9910","\u7f8e\u5f0f\u6f22\u5821","\u6e2f\u5f0f","\u6cb3\u7c89","\u6ef7\u5473"],location:window.navigator.geolocation.getCurrentPosition((function(e){var t=e.coords;return{lat:t.latitude,lng:t.longitude}})),markers:[]};var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_RANDOM_FOOD":return Object(S.a)({},e,{food:e.foodList[Math.floor(Math.random()*e.foodList.length)]});case"SET_GEOLOCATION":return Object(S.a)({},e,{location:Object(S.a)({},t.location)});case"SET_MARKERS":return Object(S.a)({},e,{markers:Object(N.a)(t.markers)});default:return e}},A=Object(k.b)(z);i.a.render(l.a.createElement(s.a,{store:A},l.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.76097914.chunk.js.map