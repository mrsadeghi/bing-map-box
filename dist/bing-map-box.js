!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=1)}([function(t,e){t.exports=void 0},function(t,e,n){"use strict";n.r(e);var r,o=n(0);n.d(e,"BingMap",(function(){return p}));var i,c=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mapRef=o.createRef(),e}return c(e,t),e.prototype.componentDidMount=function(){var t,e,n=this;(t=this.props.apiKey,e="https://www.bing.com/api/maps/mapcontrol?callback=bingAPIReady",t&&(e+="&key="+t),new Promise((function(t,n){var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.defer=!0,o.src=e,window.bingAPIReady=function(){r=window.Microsoft,t()},o.onerror=function(t){n(t)},document.body.appendChild(o)}))).then((function(){n.initMap()}))},e.prototype.render=function(){return o.createElement("div",{ref:this.mapRef,className:this.props.className})},e.prototype.componentWillReceiveProps=function(t){t.center!==this.props.center&&this.map.setView({center:new r.Maps.Location(t.center.latitude,t.center.longitude)})},e.prototype.initMap=function(){this.map=new r.Maps.Map(this.mapRef.current),this.map.setView({center:new r.Maps.Location(this.props.center.latitude,this.props.center.longitude)})},e}(o.Component)}]);