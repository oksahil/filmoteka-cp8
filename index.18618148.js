!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i),i("iE7OH").register(JSON.parse('{"hG2aI":"index.18618148.js","8nR3u":"BOX.7c8e27d0.jpg","5UbS1":"index.28af45b3.css"}'));var a=i("bpxeT"),l=i("8nrFW"),s=i("2TvXO"),c=i("fSCrk"),r=i("lGS20");i("aNJCr").getBundleURL("hG2aI"),i("iE7OH").resolve("8nR3u");i("4dnvg");var d=function(e){try{var t=localStorage.getItem(e);return JSON.parse(t)}catch(e){console.log("Error",e)}},f=function(e,t){try{var n=JSON.stringify(t);return localStorage.setItem(e,n)}catch(e){console.log("Error",e)}},u=i("iU1Pc");function m(t){var n,o,i,r,m,p,v,_,y,w;console.log(t.data),c.refs.cardList.innerHTML=(n=t.data,o=n.original_title,i=void 0===o?"no data":o,r=n.vote_average,m=n.vote_count,p=n.popularity,v=n.genres,_=n.overview,y=void 0===_?"no data":_,w=n.poster_path,'<li class="modal_card_container list">\n    <div class="modal_pict_container">\n        <img class="film-img" loading="lazy"\n         src="'.concat(null===w?"/src/images/BOX.jpg":"https://image.tmdb.org/t/p/w500/"+w,'">\n    </div>\n\n    <div class="modal_text_container">\n    \n        <h2 class="film_title">').concat(i,'</h2>\n\n        <ul class="modal_filminfo list">\n            <li class="filminfo_left"><p class="modal_filminfo-data">Vote / Votes</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data"><span class="vote_highlighted">').concat(r.toFixed(1),"</span> / ").concat(m,'</p></li>\n\n            <li class="filminfo_left"><p class="modal_filminfo-data">Popularity</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data">').concat(p,'</p></li>\n\n            <li class="filminfo_left"><p class="modal_filminfo-data">Original Title</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data to-upercase">').concat(i,'</p></li>\n\n            <li class="filminfo_left"><p class="modal_filminfo-data">Genre</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data">').concat(0===v.length?"no data":v.map((function(e){return e.name})).join(", "),'</p></li>\n        </ul>\n\n        <h3 class="modal_text_container-about to-upercase">About</h3>\n        <p class="modal_text_container-overwiew">').concat(y,'</p>\n       \n\n        <div class="modal_btn_container">\n            \n            <button class="add-watched-btn btn" type="button">ADD TO WATCHED</button>\n            <button class="add-queue-btn btn" type="button">ADD TO QUEUE</button> \n        </div>\n    </div>\n</li>'));var b="watched",x="queue",S=t.data,L=document.querySelector(".add-queue-btn"),E=document.querySelector(".add-watched-btn"),O=[],q=S,C=[],N=S;function R(){return k.apply(this,arguments)}function k(){return(k=e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){E.textContent="Remove from watched",E.disabled=!1}),1e3);case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function A(){return T.apply(this,arguments)}function T(){return(T=e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){L.textContent="Remove from queue",L.disabled=!1}),1e3);case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}d(b)||f(b,[]),d(x)||f(x,[]),d(b).find((function(e){return e.id===S.id}))&&(E.textContent="Remove from watched",E.classList.add("active")),d(x).find((function(e){return e.id===S.id}))&&(L.textContent="Remove from queue",L.classList.add("active"));E.addEventListener("click",(function(t){if(console.log("hello!"),t.preventDefault(),void 0===d(b)){O.push(q);var n=JSON.stringify(O);localStorage.setItem(b,n),console.log(n),E.textContent="Added from watched",E.disabled=!0,R(),E.classList.add("active")}else{if(d(b).find((function(e){return e.id===S.id}))){var o;console.log(S.id),(o=O).push.apply(o,e(l)(d(b)));var i=O.indexOf(S.id);O.splice(i,1);var a=JSON.stringify(O);return localStorage.setItem(b,a),console.log(a),e(u).Notify.failure("Removed from watched"),E.classList.remove("active"),void(E.textContent="Add to watched")}var s;console.log(O),(s=O).push.apply(s,e(l)(d(b))),O.push(q);var c=JSON.stringify(O);localStorage.setItem(b,c),console.log(c),E.textContent="Added from watched",E.disabled=!0,R(),E.classList.add("active")}})),L.addEventListener("click",(function(t){if(console.log("hello!"),t.preventDefault(),void 0===d(x)){C.push(N);var n=JSON.stringify(C);localStorage.setItem("queue",n),console.log(n),L.textContent="Added from queue",L.disabled=!0,A(),L.classList.add("active")}else{if(d(x).find((function(e){return e.id===S.id}))){var o;console.log(S.id),(o=C).push.apply(o,e(l)(d(x)));var i=C.indexOf(S.id);C.splice(i,1);var a=JSON.stringify(C);return localStorage.setItem(x,a),console.log(a),e(u).Notify.failure("Removed from queue"),L.classList.remove("active"),void(L.textContent="Add to queue")}var s;(s=C).push.apply(s,e(l)(d(x))),C.push(N);var c=JSON.stringify(C);localStorage.setItem("queue",c),console.log(c),L.textContent="Added from queue",L.disabled=!0,A(),L.classList.add("active")}})),window.addEventListener("keydown",g),c.refs.modal.addEventListener("click",h)}function p(e){console.log(e),window.addEventListener("keydown",g),c.refs.modal.addEventListener("click",h)}function v(){c.refs.modal.classList.toggle("is-hidden"),c.refs.modalBody.classList.toggle("no-scroll")}function g(e){"Escape"===e.code&&(v(),_())}function h(e){e.currentTarget===e.target&&(v(),_())}function _(){window.removeEventListener("keydown",g),c.refs.modal.removeEventListener("click",h)}console.log(c.refs),c.refs.list.addEventListener("click",(function(e){console.log(e.target.closest(".film-item"));var t=e.target.closest(".film-item").id;v(),(0,r.fetchFilmInfo)(t).then(m).catch(p)})),c.refs.closeModalBtn.addEventListener("click",v)}();
//# sourceMappingURL=index.18618148.js.map