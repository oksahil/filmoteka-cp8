!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o);var l=o("bpxeT"),s=(o("8nrFW"),o("2TvXO")),c=o("fSCrk"),a=o("lGS20"),r=function(e,t){var n=e.original_title,i=e.vote_average,o=e.vote_count,l=e.popularity,s=e.genres,c=e.overview,a=e.poster_path;return'<li class="card-item list">\n    <div class="picture_container">\n        <img class="film-img" src="'.concat(null===a?t:"https://image.tmdb.org/t/p/w500/"+a,'">\n    </div>\n\n    <div class="modal-textcontainer">\n    \n        <h2 class="film-title">').concat(n,'</h2>\n\n        <ul class="info-film list">\n            <li class="info_film_left"><p class="text-discription">Vote / Votes</p></li>\n            <li class="info_film_right"><p class="text-discription"><span class="vote-highlighted">').concat(i.toFixed(1),"</span> / ").concat(o,'</p></li>\n\n            <li class="info_film_left"><p class="text-discription">Popularity</p></li>\n            <li class="info_film_right"><p class="text-discription">').concat(l,'</p></li>\n\n            <li class="info_film_left"><p class="text-discription">Original Title</p></li>\n            <li class="info_film_right"><p class="text-discription to-upercase">').concat(n,'</p></li>\n\n            <li class="info_film_left"><p class="text-discription">Genre</p></li>\n            <li class="info_film_right"><p class="text-discription">').concat(s.map((function(e){return e.name})).join(", "),'</p></li>\n        </ul>\n\n        <h3 class="modal-about to-upercase">About</h3>\n        <p class="modal-overwiew">').concat(c,'</p>\n       \n\n        <div class="modal-btn-list">\n            \n            <button class="add-watched-btn "watched-btn btn-text-library btn" type="button">ADD TO WATCHED</button>\n            <button class="add-queue-btn btn" type="button">ADD TO QUEUE</button> \n        </div>\n    </div>\n</li>')};o("4dnvg");var d=function(e){try{return localStorage.removeItem(e)}catch(e){console.log("Error",e)}},f=o("iU1Pc");console.log(c.refs),c.refs.list.addEventListener("click",(function(e){console.dir(e.target.closest(".film-item img").currentSrc),u=e.target.closest(".film-item img").currentSrc,console.log(u);var t=e.target.closest(".film-item").id;m(),(0,a.fetchFilmInfo)(t).then(p).catch(v)})),c.refs.closeModalBtn.addEventListener("click",m);var u="";function p(t){var n=t.data;console.log(n),console.log(n.id),c.refs.cardList.innerHTML=r(n,u);var i="watched",o="queue",a=document.querySelector(".add-queue-btn"),p=document.querySelector(".add-watched-btn");function v(){return(v=e(l)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){p.textContent="Remove from watched",p.disabled=!1}),1e3);case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function m(){return(m=e(l)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){a.textContent="Remove from queue",a.disabled=!1}),1e3);case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}p.addEventListener("click",(function(t){var o=[],l=n;if(p.classList.contains("active")){console.log(n.id),d(i);var s=o.indexOf(n.id);o.splice(s,1);var c=JSON.stringify(o);return localStorage.setItem(i,c),console.log(c),e(f).Notify.failure("Removed from watched"),p.classList.remove("active"),void(p.textContent="Add to watched")}o.push(l);var a=JSON.stringify(o);localStorage.setItem("watched",a),console.log(a),p.textContent="Added from watched",p.disabled=!0,function(){v.apply(this,arguments)}(),p.classList.add("active")})),a.addEventListener("click",(function(t){console.log("hello!"),t.preventDefault();var i=[],l=n;if(a.classList.contains("active")){console.log(n.id),d(o);var s=i.indexOf(n.id);i.splice(s,1);var c=JSON.stringify(i);return localStorage.setItem(o,c),console.log(c),e(f).Notify.failure("Removed from queue"),a.classList.remove("active"),void(a.textContent="Add to queue")}i.push(l);var r=JSON.stringify(i);localStorage.setItem("queue",r),console.log(r),a.textContent="Added from queue",a.disabled=!0,function(){m.apply(this,arguments)}(),a.classList.add("active")})),window.addEventListener("keydown",g),c.refs.modal.addEventListener("click",h)}function v(e){console.log(e),window.addEventListener("keydown",g),c.refs.modal.addEventListener("click",h)}function m(){c.refs.modal.classList.toggle("is-hidden")}function g(e){"Escape"===e.code&&(m(),w())}function h(e){e.currentTarget===e.target&&(m(),w())}function w(){window.removeEventListener("keydown",g),c.refs.modal.removeEventListener("click",h)}}();
//# sourceMappingURL=index.99ee94dd.js.map
