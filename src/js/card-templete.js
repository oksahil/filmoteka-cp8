// import { rendserIds } from '/src/index';

import  imgTemplate  from "/src/images/BOX.jpg";

const imgUrl = "https://image.tmdb.org/t/p/w500/";
export const cardTemplate = ({
  original_title = 'no data',
  vote_average,
  vote_count,
  popularity,
  genres,
  overview = 'no data',
  poster_path,
}) =>
  `<li class="modal_card_container list">
    <div class="modal_pict_container">
        <img class="film-img" loading="lazy"
         src="${
          poster_path === null ? imgTemplate : imgUrl + poster_path
        }">
    </div>

    <div class="modal_text_container">
    
        <h2 class="film_title">${original_title}</h2>

        <ul class="modal_filminfo list">
            <li class="filminfo_left"><p class="modal_filminfo-data">Vote / Votes</p></li>
            <li class="filminfo_right"><p class="modal_filminfo-data"><span class="vote_highlighted">${vote_average.toFixed(
              1
            )}</span> / ${vote_count}</p></li>

            <li class="filminfo_left"><p class="modal_filminfo-data">Popularity</p></li>
            <li class="filminfo_right"><p class="modal_filminfo-data">${popularity}</p></li>

            <li class="filminfo_left"><p class="modal_filminfo-data">Original Title</p></li>
            <li class="filminfo_right"><p class="modal_filminfo-data to-upercase">${original_title}</p></li>

            <li class="filminfo_left"><p class="modal_filminfo-data">Genre</p></li>
            <li class="filminfo_right"><p class="modal_filminfo-data">${
              genres.length === 0
                ? 'no data'
                : genres.map(genr => genr.name).join(', ')
            }</p></li>
        </ul>

        <h3 class="modal_text_container-about to-upercase">About</h3>
        <p class="modal_text_container-overwiew">${overview}</p>
       

        <div class="modal_btn_container">
            
            <button class="add-watched-btn btn" type="button">ADD TO WATCHED</button>
            <button class="add-queue-btn btn" type="button">ADD TO QUEUE</button> 
        </div>
    </div>
</li>`;