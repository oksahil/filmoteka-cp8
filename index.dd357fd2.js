!function(){function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},l=n.parcelRequired7c6;null==l&&((l=function(t){if(t in e)return e[t].exports;if(t in i){var n=i[t];delete i[t];var l={id:t,exports:{}};return e[t]=l,n.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,n){i[t]=n},n.parcelRequired7c6=l);var o=l("8nrFW"),s=l("fSCrk"),c=l("lGS20");l("4dnvg");var a=function(t){try{var n=localStorage.getItem(t);return JSON.parse(n)||void 0}catch(t){console.log("Error",t)}};console.log(s.refs),s.refs.list.addEventListener("click",(function(t){console.dir(t.target.closest(".film-item img").currentSrc),r=t.target.closest(".film-item img").currentSrc,console.log(r);var n=t.target.closest(".film-item").id;u(),(0,c.fetchFilmInfo)(n).then(d).catch(f)})),s.refs.closeModalBtn.addEventListener("click",u);var r="";function d(n){var e,i,l,c,d,f,u,g,v;console.log(n.data),s.refs.cardList.innerHTML=(e=n.data,i=r,l=e.original_title,c=e.vote_average,d=e.vote_count,f=e.popularity,u=e.genres,g=e.overview,v=e.poster_path,'<li class="card-item list">\n    <div class="picture_container">\n        <img class="film-img" src="'.concat(null===v?i:"https://image.tmdb.org/t/p/w500/"+v,'">\n    </div>\n\n    <div class="modal-textcontainer">\n    \n        <h2 class="film-title">').concat(l,'</h2>\n\n        <ul class="info-film list">\n            <li class="info_film_left"><p class="text-discription">Vote / Votes</p></li>\n            <li class="info_film_right"><p class="text-discription"><span class="vote-highlighted">').concat(c.toFixed(1),"</span> / ").concat(d,'</p></li>\n\n            <li class="info_film_left"><p class="text-discription">Popularity</p></li>\n            <li class="info_film_right"><p class="text-discription">').concat(f,'</p></li>\n\n            <li class="info_film_left"><p class="text-discription">Original Title</p></li>\n            <li class="info_film_right"><p class="text-discription to-upercase">').concat(l,'</p></li>\n\n            <li class="info_film_left"><p class="text-discription">Genre</p></li>\n            <li class="info_film_right"><p class="text-discription">').concat(u.map((function(t){return t.name})).join(", "),'</p></li>\n        </ul>\n\n        <h3 class="modal-about to-upercase">About</h3>\n        <p class="modal-overwiew">').concat(g,'</p>\n       \n\n        <div class="modal-btn-list">\n            \n            <button class="add-watched-btn "watched-btn btn-text-library btn" type="button">ADD TO WATCHED</button>\n            <button class="add-queue-btn btn" type="button">ADD TO QUEUE</button> \n        </div>\n    </div>\n</li>'));document.querySelector(".add-watched-btn").addEventListener("click",(function(){console.log("hello");var n=a("watched");console.log(n),n&&t(o)(n);var e=a("queue");n&&t(o)(e)})),window.addEventListener("keydown",p),s.refs.modal.addEventListener("click",m)}function f(t){console.log(t),window.addEventListener("keydown",p),s.refs.modal.addEventListener("click",m)}function u(){s.refs.modal.classList.toggle("is-hidden")}function p(t){"Escape"===t.code&&(u(),g())}function m(t){t.currentTarget===t.target&&(u(),g())}function g(){window.removeEventListener("keydown",p),s.refs.modal.removeEventListener("click",m)}}();
//# sourceMappingURL=index.dd357fd2.js.map