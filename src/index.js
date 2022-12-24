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
  addWatched: document.querySelector('.add-watched-btn'),
  modalBody: document.querySelector('body'),
};

// вызывает основную функцию когда - DOM content is loaded
document.addEventListener('DOMContentLoaded', main);

// функция для популярных фильмов и пагинации
async function renderPopularFilms() {
  const filmsData = await fetchFilmPopularity();

  // создание кнопок + всего страниц + количество отображаемых кнопок + текущая кнопка
  const paginationButtons = createPagination(
    filmsData.total_pages,
    5,
    filmsData.page
  );

  // указываем рендеру кнопок класс где создавать
  paginationButtons.render(document.querySelector('.pagination-wrapper'));

  // слушаем на какую кнопку было нажатие и передаем её
  paginationButtons.onChange(e => {
    fetchFilmPopularity(e.target.value);
  });
}

// функция для поиска фильмов по запросу и пагинации
function initInputListener() {
  const { input } = refs;
  let paginationButtons;

  // делает e.preventDefault() и все
  const renderFilmsOnInputChange = async e => {
    e.preventDefault();

    refs.error.textContent = '';

    // убирает пробелы и проверка, если инпут не пустой и если в ответе страниц больше 0
    const inputText = e.target.value.trim();
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
        // refs.error.textContent = '';
      }
    }
  };
  const renderFilmsWithDebounce = debounce(
    renderFilmsOnInputChange,
    DEBOUNCE_DELAY
  );
  input.addEventListener('input', renderFilmsWithDebounce);
}

// основная функция, вызывается когда HTML документ полностью загрузился
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
  // console.log('strGenres', strGenres);
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
  console.log(dataFilm);

  // <img class="film-img" src="/src/images/BOX.jpg">
  if (poster_path === null) {
    return `<li class="film-item list" id="${id}">
    <div class="films">
      <div class="text-img">Sorry,<br>poster for film don't find <br>:( </div>
      <h2 class="film-title">${original_name}</h2>
      <h3 class="film-genre">${strGenres.slice(0, 2)} | ${dataFilm}</h3>
    </div>
    </li>`;
  } else {
    return `<li class="film-item list" id="${id}">
    <div class="films">
      <img class="film-img" src="https://image.tmdb.org/t/p/w500/${poster_path}">
      <h2 class="film-title">${original_name}</h2>
      <h3 class="film-genre">${strGenres.slice(0, 2)} | ${dataFilm}</h3>
    </div>
    </li>`;
  }
};

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

