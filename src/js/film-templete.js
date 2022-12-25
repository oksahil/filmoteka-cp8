import axios from 'axios';
import { KEY } from '/src/index';
import { URL } from '/src/index';
import { fetchGenres } from '/src/js/fetch-genres';
import { refs } from '/src/index';
import Notiflix from 'notiflix';
import { renderIds } from '/src/index';
import { fetchFilmPopularity } from '/src/js/fetch-film-popularity';
import { imgTemplate } from '/src/images/BOX.jpg';
import { listg } from '/src/js/fetch-genres';
import { strGenres } from '/src/index';

export const filmTemplate = ({
  poster_path,
  original_name,
  release_date,
  genres,
  first_air_date,
  id,
  original_title,
  vote_average,
}) => {
  // console.log('strGenres', strGenres);
  if (genres === '') {
    genre_ids = 'no ganeres';
  }
  if (release_date === '') {
    release_date = 'no relase date';
  }
  if (release_date === undefined) {
    release_date = first_air_date;
  }
  if (original_name === undefined) {
    original_name = original_title;
  }
  let dataFilm = release_date.slice(0, 4);
  console.log(dataFilm);
  genrNamesArr = genres.map(genre => genre.name);
  if (poster_path === null) {
    return `<li class="film-item list" id="${id}">
    <div class="films">
      <img class="film-img" src="${imgTemplate}">
      <h2 class="film-title">${original_name}</h2>
      <h3 class="film-genre">${
        genrNamesArr.length > 2
          ? genrNamesArr.slice(0, 2).join(', ') + '...'
          : genrNamesArr
      } | ${dataFilm}</h3>
    </div>
    </li>`;
  } else {
    return `<li class="film-item list" id="${id}">
    <div class="films">
      <img class="film-img" src="https://image.tmdb.org/t/p/w500/${poster_path}">
      <h2 class="film-title">${original_name}</h2>
      <h3 class="film-genre">${
        genrNamesArr.length > 2
          ? genrNamesArr.slice(0, 2).join(', ') + '...'
          : genrNamesArr
      } | ${dataFilm}</h3>
    </div>
    </li>`;
  }
};
