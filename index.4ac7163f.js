!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},e={},i=t.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in e){var i=e[t];delete e[t];var o={id:t,exports:{}};return n[t]=o,i.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,n){e[t]=n},t.parcelRequired7c6=i);var o=i("fSCrk"),s=i("lGS20");i("fSCrk");function c(t){var n,e,i,s,c,l,d,p;console.log(t.data),console.log(t.data.popularity),o.refs.cardList.innerHTML=(n=t.data,e=n.original_name,i=n.vote_average,s=n.vote_count,c=n.popularity,l=n.genres,d=n.overview,p=n.poster_path,'<li class="card-item list">\n    <div class="picture_container">\n        <img class="film-img" src="https://image.tmdb.org/t/p/w500/'.concat(p,'">\n    </div>\n    <div>\n    <h2 class="film-title">').concat(e,'</h2>\n    <ul class="info-film list">\n        <li class="info-film-left">\n            <p class="text-discription">Vote / Votes</p>\n            <p class="text-discription">Popularity</p>\n            <p class="text-discription">Original Title</p>\n            <p class="text-discription">Genre</p>\n        </li>\n        <li class="info-film-right">\n            <p class="text-discription"><span class="vote-highlighted">').concat(i,"</span> / ").concat(s,'</p>\n            <p class="text-discription">').concat(c,'</p>\n            <p class="text-discription to-upercase">').concat(e,'</p>\n            <p class="text-discription">').concat(l.map((function(t){return t.name})),'</p>\n        </li>\n    </ul>\n\n    <h3 class="to-upercase">About</h3>\n    <p>').concat(d,'</p>\n\n    <div class="btn-list">\n         \n        <button class="add-watched-btn btn" type="button">ADD TO WATCHED</button>\n        <button class="add-queue-btn btn" type="button">ADD TO QUEUE</button> \n    </div>\n    </div>\n</li>')),window.addEventListener("keydown",a),o.refs.modal.addEventListener("click",r)}function l(){o.refs.modal.classList.toggle("is-hidden")}function a(t){"Escape"===t.code&&(l(),d())}function r(t){t.currentTarget===t.target&&(l(),d())}function d(){window.removeEventListener("keydown",a),o.refs.modal.removeEventListener("click",r)}console.log(o.refs),o.refs.list.addEventListener("click",(function(t){var n=t.target.closest(".film-item").id;l(),(0,s.fetchFilmInfo)(n).then(c)})),o.refs.closeModalBtn.addEventListener("click",l)}();
//# sourceMappingURL=index.4ac7163f.js.map