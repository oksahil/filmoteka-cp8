// import { rendserIds } from '/src/index';

const imgUrl = "https://image.tmdb.org/t/p/w500/";
export const cardTemplate = ({original_title,vote_average,vote_count,popularity,genres,overview,poster_path},currentPictSrc) =>
 `<li class="card-item list">
    <div class="picture_container">
        <img class="film-img" src="${poster_path === null?currentPictSrc:imgUrl + poster_path}">
    </div>

    <div class="modal-textcontainer">
    
        <h2 class="film-title">${original_title}</h2>

        <ul class="info-film list">
            <li class="info_film_left"><p class="text-discription">Vote / Votes</p></li>
            <li class="info_film_right"><p class="text-discription"><span class="vote-highlighted">${vote_average.toFixed(1)}</span> / ${vote_count}</p></li>

            <li class="info_film_left"><p class="text-discription">Popularity</p></li>
            <li class="info_film_right"><p class="text-discription">${popularity}</p></li>

            <li class="info_film_left"><p class="text-discription">Original Title</p></li>
            <li class="info_film_right"><p class="text-discription to-upercase">${original_title}</p></li>

            <li class="info_film_left"><p class="text-discription">Genre</p></li>
            <li class="info_film_right"><p class="text-discription">${genres.map(genr=>genr.name).join(', ')}</p></li>
        </ul>

        <h3 class="modal-about to-upercase">About</h3>
        <p class="modal-overwiew">${overview}</p>
       

        <div class="modal-btn-list">
            
            <button class="add-watched-btn "watched-btn btn-text-library btn" type="button">ADD TO WATCHED</button>
            <button class="add-queue-btn btn" type="button">ADD TO QUEUE</button> 
        </div>
    </div>
</li>`;