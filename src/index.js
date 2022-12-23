import '/src/sass/index.scss';
// import Notiflix from 'notiflix';
// import { cardTemplate } from '/src/js/card-templete';
import { fetchFilmPopularity } from '/src/js/fetch-film-popularity';
import { fetchFilmInfo } from '/src/js/fetch-film-info';
import { fetchFilm } from '/src/js/fetch-film';
// import { filmTemplate } from '/src/js/film-templete';
import { listg } from '/src/js/fetch-genres';
import { createPagination, destroyPagination } from './js/pagination';
// import './js/auth';

var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 1000;
export const KEY = '27a3692489226a6f77b57cb0bdb9ce9a';
export const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';

export const refs = {
  input: document.querySelector('.search-input'),
  list: document.querySelector('.film-list'),
  // openModalBtn: document.querySelector('.films'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  card: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  cardList: document.querySelector('.card-list'),
  error: document.querySelector('.error'),
  searchForm: document.querySelector('.search-form'),
};
document.addEventListener('DOMContentLoaded', main);
// const fetchFilmsWithDebounce = debounce(renderSearchFilms, DEBOUNCE_DELAY);
// refs.input.addEventListener('input', fetchFilmsWithDebounce);

async function renderPopularFilms() {
  const filmsData = await fetchFilmPopularity();
  const paginationButtons = createPagination(
    filmsData.total_pages,
    5,
    filmsData.page
  );
  paginationButtons.render(document.querySelector('.pagination-wrapper'));
  paginationButtons.onChange(e => {
    fetchFilmPopularity(e.target.value);
  });
}

function initInputListener() {
  const { input } = refs;
  let paginationButtons;

  const renderFilmsOnInputChange = async e => {
    e.preventDefault();
    const inputText = e.target.value;
    if (inputText !== '') {
      const filmsData = await fetchFilm(inputText, 1);
      if (filmsData.total_pages > 0) {
        paginationButtons = createPagination(
          filmsData.total_pages,
          5,
          filmsData.page
        );
        paginationButtons.render(document.querySelector('.pagination-wrapper'));
        paginationButtons.onChange(e => {
          fetchFilm(inputText, e.target.value);
        });
      } else {
        destroyPagination();
      }
    }
  };
  const renderFilmsWithDebounce = debounce(
    renderFilmsOnInputChange,
    DEBOUNCE_DELAY
  );
  input.addEventListener('input', renderFilmsWithDebounce);
}

async function main() {
  refs.searchForm.addEventListener('submit', e => {
    e.preventDefault();
  });

  initInputListener();
  renderPopularFilms();
}
export let items = [];
export let strGenres = [];

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
  renderIds(genre_ids, listg);
  console.log('strGenres', strGenres);
  if (genre_ids === '') {
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
  if (poster_path === null) {
    return `<li class="film-item list" id="${id}">
    <div class="films">
    <div class="text-img">
    Sorry,<br>poster for film don't find <br>:(
    </div>
    <h2 class="film-title">${original_name}</h2>
    <h3 class="film-genre">${strGenres} | ${dataFilm} <span>${vote_average}</span></h3>
    </div>
    </li>`;
  } else {
    return `<li class="film-item list" id="${id}">
    <div class="films">
    <img class="film-img" src="https://image.tmdb.org/t/p/w500/${poster_path}">
    <h2 class="film-title">${original_name}</h2>
    <h3 class="film-genre">${strGenres} | ${dataFilm} <span class="vote-highlighted">${vote_average.toFixed(
      1
    )}</span></h3>
    </div>
    </li>`;
  }
};


// const cardTemplate = ({ poster_path, original_title, release_date, genre_ids, first_air_date, vote_average, vote_count, popularity }) => {
//     renderIds(genre_ids, listg);
//     if (genre_ids === '') {
//         genre_ids = "no ganeres";
//     }
//     if (release_date === "") {
//         release_date = "no relase date";
//     }
//     if (release_date === undefined) {
//         release_date = first_air_date;
//     }
//     let dataFilm = release_date.slice(0, 4);
//     if (poster_path === null) {
//         return `<li class="card-item list"  data-modal-open>
//     <img class="film-img" src="https://pixabay.com/get/gb7db569fc3e8b14cffd882555f170a29f60967eb4b440951996ecf4dacfea8c4e24bfffa9b9a672bc4413d9a61fbeb317cbfc98195588fe198e02464199770bf_640.jpg">
//     </li>
//     <li>
//     <h2 class="film-title">${original_title}</h2>
//     <ul class="info-film">
//     <li>
//     <p class="text-discription">Vote/Votes</p>
//     <p class="text-discription">Popularity</p>
//     <p class="text-discription">Original Title</p>
//     <p class="text-discription">Genre</p>
//     </li>
//     <li>
//     <p class="text-discription">${vote_average}/${vote_count}</p>
//     <p class="text-discription">${popularity}</p>
//     <p class="text-discription">${original_title}</p>
//     <p class="text-discription">${strGenres}</p>
//     </li>
//     </ul>
//     <h3>About</h3>
//     <p>${overview}</p>
//         <ul class="btn-list list">
//             <li class="btn-item"><button class="add-watched-btn btn" type="button"><span class="btn-text">ADD TO WATCHED</span></button></li>
//             <li class="btn-item"><button class="add-queue-btn btn" type="button"><span class="btn-text">ADD TO QUEUE</span></button></li>
//         </ul>
//     </li>`;
//     } else {
//         return `<li class="card-item list"  data-modal-open>
//     <img class="film-img" src="https://image.tmdb.org/t/p/w500/${poster_path}">
//     </li>
//     <li>
//     <h2 class="film-title">${original_title}</h2>
//     <ul class="info-film">
//     <li>
//     <p class="text-discription">Vote/Votes</p>
//     <p class="text-discription">Popularity</p>
//     <p class="text-discription">Original Title</p>
//     <p class="text-discription">Genre</p>
//     </li>
//     <li>
//     <p class="text-discription">${vote_average}/${vote_count}</p>
//     <p class="text-discription">${popularity}</p>
//     <p class="text-discription">${original_title}</p>
//     <p class="text-discription">${strGenres}</p>
//     </li>
//     </ul>
//     <h3>About</h3>
//     <p>${overview}</p>
//         <ul class="btn-list list">
//             <li class="btn-item"><button class="add-watched-btn btn" type="button"><span class="btn-text">ADD TO WATCHED</span></button></li>
//             <li class="btn-item"><button class="add-queue-btn btn" type="button"><span class="btn-text">ADD TO QUEUE</span></button></li>
//         </ul>
//     </li>`;
//     }
// }

function renderIds(genre_ids, listg) {
  console.log('genre_ids', genre_ids);
  console.log('listg', listg);
  strGenres = [];
  for (const i of genre_ids) {
    for (const l of listg) {
      if (l.id === i) {
        strGenres.push(` ${l.name}`);
      }
    }
  }

  return strGenres;
}

export function render(items) {
  const filmList = items.map(filmTemplate);

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', filmList.join(''));
}

export function renderInfo(itemsInfo) {
  const filmListInfo = itemsInfo.map(cardTemplate);
  refs.cardList.innerHTML = '';
  refs.cardList.insertAdjacentHTML('beforeend', filmListInfo.join(''));
}
// refs.openModalBtn.addEventListener('click', textInfo);
// function textInfo() {
//     fetchFilmInfo();
// }
