function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){r[e]=n},n.parcelRequired7c6=i),i.register("kyEFX",(function(n,t){var r,i;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return i}),(function(e){return i=e}));var l={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)l[n[t]]=e[n[t]]},i=function(e){var n=l[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i("kyEFX").register(JSON.parse('{"1zJhX":"library.c2a53218.js","dJC96":"BOX.7c8e27d0.jpg","5UbS1":"index.aeb010d2.css"}'));var l;l=new URL(i("kyEFX").resolve("dJC96"),import.meta.url).toString();const o=e=>{try{const n=localStorage.getItem(e);return JSON.parse(n)}catch(e){console.log("Error",e)}},s=document.querySelector(".watched-btn"),c=document.querySelector(".queue-btn"),a=document.querySelector(".film-list");s.focus();const d=e=>{const n=e.map((e=>(({poster_path:e,original_name:n,release_date:t,genres:r,first_air_date:i,id:o,original_title:s,vote_average:c})=>{""===t&&(t="no relase date"),void 0===t&&(t=i),void 0===n&&(n=s);let a=t.slice(0,4);console.log(a);const d=r.map((e=>e.name));return null===e?`<li class="film-item list" id="${o}">\n    <div class="films">\n      <img class="film-img" src="${l.imgTemplate}">\n      <h2 class="film-title">${n}</h2>\n      <h3 class="film-genre">${d.length>2?d.slice(0,2).join(", ")+"...":d} | ${a}</h3>\n    </div>\n    </li>`:`<li class="film-item list" id="${o}">\n    <div class="films">\n      <img class="film-img" src="https://image.tmdb.org/t/p/w500/${e}">\n      <h2 class="film-title">${n}</h2>\n      <h3 class="film-genre">${d.length>2?d.slice(0,2).join(", ")+"...":d} | ${a}</h3>\n    </div>\n    </li>`})(e))).join("");a.insertAdjacentHTML("beforeend",n)};if(o("watched")){a.innerHTML="";const e=[...o("watched")];d(e)}s.addEventListener("click",(()=>{a.innerHTML="";const e=[...o("watched")];d(e)})),c.addEventListener("click",(()=>{a.innerHTML="";const e=[...o("queue")];d(e)}));
//# sourceMappingURL=library.c2a53218.js.map
