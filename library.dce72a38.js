!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r),r.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),r.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,i){t&&n(e.prototype,t);i&&n(e,i);return e}}));var o=r("8MBJY"),a=r("a2hTj"),l=document.getElementById("cnv"),u=l.getContext("2d");l.width=window.innerWidth,l.height=window.innerHeight;for(var f=function(){"use strict";function t(){e(o)(this,t),this.x=Math.random()*l.width,this.y=Math.random()*l.height,this.r=3.5*Math.random(),this.v=1.5*Math.random()}return e(a)(t,[{key:"make",value:function(){u.fillStyle="#fff",u.beginPath(),u.arc(this.x,this.y,this.r,0,2*Math.PI),u.fill(),u.closePath(),this.y+=this.v,this.y>l.height&&(this.x=Math.random()*l.width,this.y=0)}}]),t}(),s=[],h=0;h<1e3;h+=1)s.push(new f);!function e(){u.fillStyle="rgba(0, 0, 0, 0.5)",u.fillRect(0,0,l.width,l.height),s.forEach((function(e){return e.make()})),requestAnimationFrame(e)}()}();
//# sourceMappingURL=library.dce72a38.js.map