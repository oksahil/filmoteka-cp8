var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},e={},n=t.parcelRequired7c6;null==n&&((n=function(t){if(t in i)return i[t].exports;if(t in e){var n=e[t];delete e[t];var l={id:t,exports:{}};return i[t]=l,n.call(l.exports,l,l.exports),l.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,i){e[t]=i},t.parcelRequired7c6=n);var l=n("2Fivl"),s=n("7JaeA");const o=({original_title:t,vote_average:i,vote_count:e,popularity:n,genres:l,overview:s,poster_path:o},c)=>`<li class="card-item list">\n    <div class="picture_container">\n        <img class="film-img" src="${null===o?c:"https://image.tmdb.org/t/p/w500/"+o}">\n    </div>\n\n    <div class="modal-textcontainer">\n    \n        <h2 class="film-title">${t}</h2>\n\n        <ul class="info-film list">\n            <li class="info_film_left"><p class="text-discription">Vote / Votes</p></li>\n            <li class="info_film_right"><p class="text-discription"><span class="vote-highlighted">${i.toFixed(1)}</span> / ${e}</p></li>\n\n            <li class="info_film_left"><p class="text-discription">Popularity</p></li>\n            <li class="info_film_right"><p class="text-discription">${n}</p></li>\n\n            <li class="info_film_left"><p class="text-discription">Original Title</p></li>\n            <li class="info_film_right"><p class="text-discription to-upercase">${t}</p></li>\n\n            <li class="info_film_left"><p class="text-discription">Genre</p></li>\n            <li class="info_film_right"><p class="text-discription">${l.map((t=>t.name)).join(", ")}</p></li>\n        </ul>\n\n        <h3 class="modal-about to-upercase">About</h3>\n        <p class="modal-overwiew">${s}</p>\n       \n\n        <div class="modal-btn-list">\n            \n            <button class="add-watched-btn "watched-btn btn-text-library btn" type="button">ADD TO WATCHED</button>\n            <button class="add-queue-btn btn" type="button">ADD TO QUEUE</button> \n        </div>\n    </div>\n</li>`;n("bYAht"),console.log(l.refs),l.refs.list.addEventListener("click",(function(t){console.dir(t.target.closest(".film-item img").currentSrc),c=t.target.closest(".film-item img").currentSrc,console.log(c);const i=t.target.closest(".film-item").id;d(),(0,s.fetchFilmInfo)(i).then(a).catch(r)})),l.refs.closeModalBtn.addEventListener("click",d);let c="";function a(t){console.log(t.data),l.refs.cardList.innerHTML=o(t.data,c),window.addEventListener("keydown",f),l.refs.modal.addEventListener("click",p)}function r(t){console.log(t),window.addEventListener("keydown",f),l.refs.modal.addEventListener("click",p)}function d(){l.refs.modal.classList.toggle("is-hidden")}function f(t){"Escape"===t.code&&(d(),u())}function p(t){t.currentTarget===t.target&&(d(),u())}function u(){window.removeEventListener("keydown",f),l.refs.modal.removeEventListener("click",p)}
//# sourceMappingURL=index.e3384183.js.map