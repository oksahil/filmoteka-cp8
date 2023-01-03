import axios from 'axios';
import { KEY } from '/src/index';
import { URL } from '/src/index';
import { fetchGenres } from '/src/js/fetch-genres';
import { refs } from '/src/index';
import Notiflix from 'notiflix';
import { renderIds } from '/src/index';
import { fetchFilmPopularity } from '/src/js/fetch-film-popularity';
import  imgTemplate  from '/src/images/image template.jpg';
import { listg } from '/src/js/fetch-genres';
import { strGenres } from '/src/index';

export const filmTemplate = ({
  poster_path,
  original_name,
  release_date,
  genre_ids,
  first_air_date,
  id,
  original_title,
  vote_average,
}) => {
  let genreSS = renderIds(genre_ids, listg);
  // let noReleaseDate ="no relase date";
  renderIds(genre_ids, listg);
  console.log('strGenres', strGenres);
  // if (genre_ids.length === 0) {
  //   genreSS = ['no genres..'];
  //   // const mainUrlFetch =`https://image.tmdb.org/t/p/w500/${poster_path}`;
  //   // return `<li class="film-item list" id="${id}">
  //   // <div class="films">
  //   //   <img class="film-img" src="${poster_path === null?imgTemplate:mainUrlFetch}">
  //   //   <h2 class="film-title">${original_name}</h2>
  //   //   <h3 class="film-genre">no data | ${dataFilm === "no r"?"no data":dataFilm}</h3>
  //   // </div>
  //   // </li>`;
  // }
  if (release_date === "") {
    release_date = "no relase date";
  }
  if (release_date === undefined) {
    release_date = first_air_date;
  }
  if (original_name === undefined) {
    original_name = original_title;
  }
  let dataFilm = release_date.slice(0, 4);
  console.log(dataFilm);
  if (poster_path === null) {
    return `<li class="film-item list" id="${id}">
    <div class="films">
      <img class="film-img" src="${imgTemplate}">
      <h2 class="film-title">${original_name}</h2>
      <h3 class="film-genre">${createGenres(genre_ids, strGenres)} | ${dataFilm === "no r"?"no data":dataFilm}</h3>
    </div>
    </li>`;
  } else {
    return `<li class="film-item list" id="${id}">
    <div class="films">
      <img class="film-img" src="https://image.tmdb.org/t/p/w500/${poster_path}">
      <h2 class="film-title">${original_name}</h2>
      <h3 class="film-genre">${createGenres(genre_ids, strGenres)} | ${dataFilm === "no r"?"no data":dataFilm}</h3>
    </div>
    </li>`;
  }
};
function createGenres(ids, arrayOfGenres) {
  if (ids.length === 0) return "no genres";
  return arrayOfGenres.length > 2 ? arrayOfGenres.slice(0, 2) + ".." : arrayOfGenres;
}
