!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i),i("iE7OH").register(JSON.parse('{"hG2aI":"index.52bef762.js","8nR3u":"BOX.7c8e27d0.jpg","5UbS1":"index.425b7750.css"}'));var a=i("bpxeT"),l=i("8nrFW"),s=i("2TvXO"),c=i("fSCrk"),r=i("lGS20");i("aNJCr").getBundleURL("hG2aI"),i("iE7OH").resolve("8nR3u");i("4dnvg");var d=function(e){try{var t=localStorage.getItem(e);return JSON.parse(t)}catch(e){console.log("Error",e)}},f=function(e,t){try{var n=JSON.stringify(t);return localStorage.setItem(e,n)}catch(e){console.log("Error",e)}},u=i("iU1Pc");function p(t){var n,o,i,r,p,m,v,_,w,y;console.log(t.data),c.refs.cardList.innerHTML=(n=t.data,o=n.original_title,i=void 0===o?"no data":o,r=n.vote_average,p=n.vote_count,m=n.popularity,v=n.genres,_=n.overview,w=void 0===_?"no data":_,y=n.poster_path,'<li class="modal_card_container list">\n    <div class="modal_pict_container">\n        <img class="film-img" loading="lazy"\n         src="'.concat(null===y?"/src/images/BOX.jpg":"https://image.tmdb.org/t/p/w500/"+y,'">\n    </div>\n\n    <div class="modal_text_container">\n    \n        <h2 class="film_title">').concat(i,'</h2>\n\n        <ul class="modal_filminfo list">\n            <li class="filminfo_left"><p class="modal_filminfo-data">Vote / Votes</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data"><span class="vote_highlighted">').concat(r.toFixed(1),"</span> / ").concat(p,'</p></li>\n\n            <li class="filminfo_left"><p class="modal_filminfo-data">Popularity</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data">').concat(m,'</p></li>\n\n            <li class="filminfo_left"><p class="modal_filminfo-data">Original Title</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data to-upercase">').concat(i,'</p></li>\n\n            <li class="filminfo_left"><p class="modal_filminfo-data">Genre</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data">').concat(0===v.length?"no data":v.map((function(e){return e.name})).join(", "),'</p></li>\n        </ul>\n\n        <h3 class="modal_text_container-about to-upercase">About</h3>\n        <p class="modal_text_container-overwiew">').concat(w,'</p>\n       \n\n        <div class="modal_btn_container">\n            \n            <button class="add-watched-btn btn" type="button">ADD TO WATCHED</button>\n            <button class="add-queue-btn btn" type="button">ADD TO QUEUE</button> \n        </div>\n    </div>\n</li>'));var b,x,L="watched",E="queue",O=t.data,S=document.querySelector(".add-queue-btn"),R=document.querySelector(".add-watched-btn"),k=[],T=O,q=[],C=O;function A(){return(A=e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){R.textContent="Remove from watched",R.disabled=!1}),1e3);case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){S.textContent="Remove from queue",S.disabled=!1}),1e3);case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function H(){return(H=e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){R.textContent="Add to watched",R.disabled=!1}),1e3);case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function D(){return(D=e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){S.textContent="Add to queue",S.disabled=!1}),1e3);case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}d(L)||f(L,[]),d(E)||f(E,[]),d(L).find((function(e){return e.id===O.id}))&&(R.textContent="Remove from watched",R.classList.add("active")),d(E).find((function(e){return e.id===O.id}))&&(S.textContent="Remove from queue",S.classList.add("active"));R.addEventListener("click",(function(t){if(console.log("hello!"),t.preventDefault(),R.classList.contains("active")){console.log(O.id);var n=k.indexOf(O.id);return k.splice(n,1),b=JSON.stringify(k),localStorage.setItem(L,b),console.log(b),e(u).Notify.failure("Removed from watched"),R.classList.remove("active"),R.textContent="Removed from watched",R.disabled=!0,void function(){H.apply(this,arguments)}()}var o;(o=k=[]).push.apply(o,e(l)(d(L))),k.push(T),b=f(L,k),console.log(k),R.textContent="Added from watched",R.disabled=!0,function(){A.apply(this,arguments)}(),R.classList.add("active")})),S.addEventListener("click",(function(t){if(console.log("hello!"),t.preventDefault(),S.classList.contains("active")){console.log(O.id);var n=q.indexOf(O.id);q.splice(n,1);var o=JSON.stringify(q);localStorage.setItem(E,o),console.log(o),e(u).Notify.failure("Removed from queue"),S.classList.remove("active"),S.textContent="Removed from queue",S.disabled=!0,function(){D.apply(this,arguments)}()}else{var i;(i=q=[]).push.apply(i,e(l)(d(E))),q.push(C),x=JSON.stringify(q),localStorage.setItem("queue",x),console.log(x),S.textContent="Added from queue",S.disabled=!0,function(){N.apply(this,arguments)}(),S.classList.add("active")}})),window.addEventListener("keydown",g),c.refs.modal.addEventListener("click",h)}function m(e){console.log(e),window.addEventListener("keydown",g),c.refs.modal.addEventListener("click",h)}function v(){c.refs.modal.classList.toggle("is-hidden"),c.refs.modalBody.classList.toggle("no-scroll")}function g(e){"Escape"===e.code&&(v(),_())}function h(e){e.currentTarget===e.target&&(v(),_())}function _(){window.removeEventListener("keydown",g),c.refs.modal.removeEventListener("click",h)}console.log(c.refs),c.refs.list.addEventListener("click",(function(e){console.log(e.target.closest(".film-item"));var t=e.target.closest(".film-item").id;v(),(0,r.fetchFilmInfo)(t).then(p).catch(m)})),c.refs.closeModalBtn.addEventListener("click",v)}();
//# sourceMappingURL=index.52bef762.js.map
