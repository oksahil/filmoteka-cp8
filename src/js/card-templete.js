import { rendserIds } from '/src/index';

export const cardTemplate = ({original_name,vote_average,vote_count,popularity,genres,overview,poster_path}) =>
 `<li class="card-item list">
    <div class="picture_container">
        <img class="film-img" src="https://image.tmdb.org/t/p/w500/${poster_path}">
    </div>
    <div>
    <h2 class="film-title">${original_name}</h2>
    <ul class="info-film list">
        <li class="info-film-left">
            <p class="text-discription">Vote / Votes</p>
            <p class="text-discription">Popularity</p>
            <p class="text-discription">Original Title</p>
            <p class="text-discription">Genre</p>
        </li>
        <li class="info-film-right">
            <p class="text-discription"><span class="vote-highlighted">${vote_average}</span> / ${vote_count}</p>
            <p class="text-discription">${popularity}</p>
            <p class="text-discription to-upercase">${original_name}</p>
            <p class="text-discription">${genres.map(genr=>genr.name)}</p>
        </li>
    </ul>

    <h3 class="to-upercase">About</h3>
    <p>${overview}</p>

    <div class="btn-list">
         
        <button class="add-watched-btn btn" type="button">ADD TO WATCHED</button>
        <button class="add-queue-btn btn" type="button">ADD TO QUEUE</button> 
    </div>
    </div>
</li>`;