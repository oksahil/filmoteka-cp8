function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=l),l("kyEFX").register(JSON.parse('{"bhLpe":"index.081cdf43.js","dJC96":"BOX.7c8e27d0.jpg","5UbS1":"index.425b7750.css"}'));var i,a=l("2Fivl"),s=l("7JaeA");i=new URL(l("kyEFX").resolve("dJC96"),import.meta.url).toString();const d=({original_title:t="no data",vote_average:n,vote_count:o,popularity:l,genres:a,overview:s="no data",poster_path:d})=>`<li class="modal_card_container list">\n    <div class="modal_pict_container">\n        <img class="film-img" loading="lazy"\n         src="${null===d?e(i):"https://image.tmdb.org/t/p/w500/"+d}">\n    </div>\n\n    <div class="modal_text_container">\n    \n        <h2 class="film_title">${t}</h2>\n\n        <ul class="modal_filminfo list">\n            <li class="filminfo_left"><p class="modal_filminfo-data">Vote / Votes</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data"><span class="vote_highlighted">${n.toFixed(1)}</span> / ${o}</p></li>\n\n            <li class="filminfo_left"><p class="modal_filminfo-data">Popularity</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data">${l}</p></li>\n\n            <li class="filminfo_left"><p class="modal_filminfo-data">Original Title</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data to-upercase">${t}</p></li>\n\n            <li class="filminfo_left"><p class="modal_filminfo-data">Genre</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data">${0===a.length?"no data":a.map((e=>e.name)).join(", ")}</p></li>\n        </ul>\n\n        <h3 class="modal_text_container-about to-upercase">About</h3>\n        <p class="modal_text_container-overwiew">${s}</p>\n       \n\n        <div class="modal_btn_container">\n            \n            <button class="add-watched-btn btn" type="button">ADD TO WATCHED</button>\n            <button class="add-queue-btn btn" type="button">ADD TO QUEUE</button> \n        </div>\n    </div>\n</li>`;l("bYAht");const c=e=>{try{const t=localStorage.getItem(e);return JSON.parse(t)}catch(e){console.log("Error",e)}},r=(e,t)=>{try{const n=JSON.stringify(t);return localStorage.setItem(e,n)}catch(e){console.log("Error",e)}};var f=l("eWCmQ");function m(t){console.log(t.data),a.refs.cardList.innerHTML=d(t.data);const n="watched",o="queue",{data:l}=t,i=document.querySelector(".add-queue-btn"),s=document.querySelector(".add-watched-btn");let m=[];const u=l;let p=[];const _=l;let h,b;c(n)||r(n,[]),c(o)||r(o,[]),c(n).find((e=>e.id===l.id))&&(s.textContent="Remove from watched",s.classList.add("active")),c(o).find((e=>e.id===l.id))&&(i.textContent="Remove from queue",i.classList.add("active"));s.addEventListener("click",(t=>{if(console.log("hello!"),t.preventDefault(),s.classList.contains("active")){console.log(l.id);let t=m.indexOf(l.id);return m.splice(t,1),h=JSON.stringify(m),localStorage.setItem(n,h),console.log(h),e(f).Notify.failure("Removed from watched"),s.classList.remove("active"),s.textContent="Removed from watched",s.disabled=!0,void async function(){setTimeout((()=>{s.textContent="Add to watched",s.disabled=!1}),1e3)}()}m=[],m.push(...c(n)),m.push(u),h=r(n,m),console.log(m),s.textContent="Added from watched",s.disabled=!0,async function(){setTimeout((()=>{s.textContent="Remove from watched",s.disabled=!1}),1e3)}(),s.classList.add("active")})),i.addEventListener("click",(t=>{if(console.log("hello!"),t.preventDefault(),i.classList.contains("active")){console.log(l.id);let t=p.indexOf(l.id);p.splice(t,1);const n=JSON.stringify(p);localStorage.setItem(o,n),console.log(n),e(f).Notify.failure("Removed from queue"),i.classList.remove("active"),i.textContent="Removed from queue",i.disabled=!0,async function(){setTimeout((()=>{i.textContent="Add to queue",i.disabled=!1}),1e3)}()}else p=[],p.push(...c(o)),p.push(_),b=JSON.stringify(p),localStorage.setItem("queue",b),console.log(b),i.textContent="Added from queue",i.disabled=!0,async function(){setTimeout((()=>{i.textContent="Remove from queue",i.disabled=!1}),1e3)}(),i.classList.add("active")})),window.addEventListener("keydown",g),a.refs.modal.addEventListener("click",v)}function u(e){console.log(e),window.addEventListener("keydown",g),a.refs.modal.addEventListener("click",v)}function p(){a.refs.modal.classList.toggle("is-hidden"),a.refs.modalBody.classList.toggle("no-scroll")}function g(e){"Escape"===e.code&&(p(),_())}function v(e){e.currentTarget===e.target&&(p(),_())}function _(){window.removeEventListener("keydown",g),a.refs.modal.removeEventListener("click",v)}console.log(a.refs),a.refs.list.addEventListener("click",(function(e){console.log(e.target.closest(".film-item"));const t=e.target.closest(".film-item").id;p(),(0,s.fetchFilmInfo)(t).then(m).catch(u)})),a.refs.closeModalBtn.addEventListener("click",p);
//# sourceMappingURL=index.081cdf43.js.map
